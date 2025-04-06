/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "22sML34dw7hvK4Td27PUZgMzBZGcwvAZEfFvruqpLtvrxkKjD6zBMRrNeG1aTDubRdkJzEGGQ7foxYQrYraWzLDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aaqd1kcAbuUcuBLymvC4HimU55RDNh7W7p76R4jZRoMwVzGn2sTaJenZEoywRriHc5qc3rERiaeSy9E3eNSm5wR",
  "key1": "2ohqgEeteNgsxzZAbamj4U44ajPMyo58penyYo2WC92bPCGkfkP8epofWhXx59KTrmF98YNEWN9Ce66dviPFk8Kq",
  "key2": "Cq4mpGpb1WeMQ8rj9Nj8fMzYjDqixAZoYDnAtvNiYqUyewdfzyBwTsCShhrJT9TftofTNRBPMFGsR8KQyvNbffJ",
  "key3": "feNk5FPr8QqF2wprCKh1Bhy4Rswww1FRxSk3utuyLAguKcw87u6Uqzca8v2LY5rN4hjoiEo3DBRkEuizyk121d6",
  "key4": "4nCwPXXjZM9iPEscGK5DxpQA6sjnTX3Mp539BFEzvo9GYUTafSTqqBfsHAAm8cmFsjstNdyi2auYwU5EAqhFxWRn",
  "key5": "2is2npyTEY8cFgmJr1E4sEXvzGq6hFQFojGRgXDtfFq8iRSCzypqdoLNxvEn3YcprtpwqYnbZrDGTqEEvJ3t7CwR",
  "key6": "58e1EnCQwpywWHr4ngccVjgP5xfNvZ256K51pi97a1QW5eu82vvDTsEnAKQeuK8TyBr4nJwHGCNd51aKzNgZGdif",
  "key7": "5sCWaFitRcKZ9QczniK8nY6YaHPZFyCpJEAhsHJNk2peZqM2x9oQLmBCXDsADPeqJqzMyMepfFSmEwbmFf1X8TjJ",
  "key8": "4zmJJNFLUvVmzD2jHj3mj6S5haRj5QBGLo1STAG6LdgcA6NgEKJc3KNUCJZkHgajDiwWqADvhvNyys5SyjoYgNrk",
  "key9": "hJ2yeRyh6HXdNKLTSkqucADSP7KKXAncSiRHJdmgKpEziAem3BrqLqwHzDUy8GowK5Lc44RVdDZuKsVxyycLokk",
  "key10": "3M2T9GE8pVFJ81KKWq64AJhJV5xfLzqywVYtsr6SehJrJwrCnqXfRXywCDXLR9Nwemmeab9gfEb8zs7rvEq5fZnq",
  "key11": "5dT68U7Z8UfUHoYgizUc7Krn976wwS9Ax89gPKE7qahXMEZzNM5Z2GGUKL8KJbPEFZUQ7V9eZgysNreSzyd6Ed5Z",
  "key12": "2MrntSd2XseKf6YZjgZBmtEgeEBeJ4aVp2N7nihcUwb69GX1UftQmhWJSqNiR1qVitZr9zQxRr8t9EGdRM8yYAfv",
  "key13": "5jb3P9BxP6z8ENueG41h2zK8bPnYBGc4JZPt9f1oAwcHmTzjyAAwhK5FpbLaxnaeTM4Q3Rd1iNvNWLtNUJghLsTt",
  "key14": "4G6fdTc4DkS79GYBB46W9t9cwzqnSRnGmm4vHynBJ8bzsNcRw13YTbwRUpgzBRYtxj75z1qJycSeDKP3VDygAmCg",
  "key15": "aGVCqQkNXUG7hbWf9ZFayWKaHnuXYGzxFWPUnGq6bJ6eqNPz765gQMPaBnvFm1r7p5BgvdaMDLnvWDxwmEWtxJ9",
  "key16": "4NfWSe5HqVSLmPqTd5GXhfVQ6ioJw3o1HdSfPh3Q7ckn5LD41L1NGuZvFT188yU5uPi5HCbVQCcHcBqtbBVaBXLB",
  "key17": "5yypyyokNLfweheij5zEaMuqiYYk9moVE34tv8RT3T6ZMezDRAxVXeaxgPRF2XnVpmvZJnTPFfphjQupwWWNYoU4",
  "key18": "3QK1raibR74EBarMcjWM9SCbdLwjTgk7NZqkANFM3eqnjpDGwWzDewhX9j8Hm1eFv2z66c5VgLkBQb5qoTeqBCMA",
  "key19": "inX511m7wS5e2QBRAQMSvYGphQkz7fjKFvTdMgXNZLg6rAfSjPjdze8nS56PbwpY3VduKxsE8tdZLW17N88qKmA",
  "key20": "3TFzHgHq6JNF1TLk2XXC4YRgRv4s7zxxw4XLgr4hzuVXta2r2MkwxpjKa7EcAsY1a4x3qgXvFtfmzzKEpX1uDQV2",
  "key21": "5wm411NR9YLsFgw1wvXDdEDE1gjZq1cNtPB2XGcYagiYZUqFq2vHqEEm9zFNyWieqxx16kkrNQwmSdMPpggG27kB",
  "key22": "5ApeUogRqjHXq5hcK5j2bv3yXpCqJpQfrHDjFuRs5sTBhpASHTFyP4QnSkpLAVtL24Cv118sbTRoPoawd7DkkKxD",
  "key23": "5BNDFL4WTDTbFneQAwVKBkfruwjsNHoNucpAbsiXxNJw33xEvQ4ZNYEYdsEfMTn9w7jX8uW9F8e9fx1PKQ8a9bfi",
  "key24": "FaDecSsysYHE76UknHKSY9QwU7MkzCECqxAKTLfskQnhwySkYeYteqwT61FTocabJAsAHtkNoMqThtTtJ2cHT29",
  "key25": "5ue1GppGeqbQdMKYjrEdsC323YSor5P83j4TBh5AjXcUxSkm84RDMARUfU7nUCv75zg2sJJMim8vgp9stPiphtNR",
  "key26": "2ip4RXTTuCWCS2EZWG5qz17vD22qkotC3YsCz2uw3dJFBFwzZZifs3NB3Br42EH2FEwBJqcRL1gbLZpTgXHkXh9N",
  "key27": "YMegDw4gTpb3xgxwTvFYKswZgM6K3n6JPtTs5m5YkN7g38PturQuZt6LvmZg93PoFimLnG8fAy2RFY1b5byfAXJ",
  "key28": "4CPvpBuZtJWMjCfZufY2D3EBGgx5Q6WQ8zMY32TUbY9suLEMtMWX4xcf9Z1PYjYyj9NpEx9iW5ogWG7xdF6GrGQX",
  "key29": "5ANHEpEopdPsJ4RAPUC8VfNwHemFYsDR66K8FQ8uYSqghqUJ9TQEmABKMcXGJSdoGVR8rRSApra24mwEgSpYCJPg",
  "key30": "2LBzaWLfAupz5WvWiPvNJ7jqGPQpGaU7JpyeCeHUwtUYBBy7d3BDgdw9Z1YT28aJnJxLi2VpqwM15wCMAxeoRBX6",
  "key31": "62jHffCYRTx8TEHNVkbBW5BMyzwGyoQEYzAPzhTbUwbvFyA19v9e9KE4mywjd41RwAfZc4iZU3wratswW23PN48c",
  "key32": "WVECkeyfnc4KFnuJY2LNgM5QES2yAYYGqk9Es44gdaZXcLJf1XXr3dwx5ictd4f9MWw5ib9XN7NcSnH7UAemq7R",
  "key33": "3a5urecWHJVpfH61QF2jAb6mkn2CaMvnx3ELviqwoba4pJQF6Edn2N9ZJwZzK5d6Yd6zdKrHNJcMfEs7HCdezgux",
  "key34": "2vdxJB5ZGQ4Wpatirm8TGvYtptdZYp66TncAExFr6SxL1mU5iLwzs8E36i3owZVbXxt2aaprL2QwSXxBHThm6giX",
  "key35": "2P2aseMHU8EB8MTyp128boXej9WRDf6VRtEmrNT4m87ujrv45py1jGd4qpejQNy52iFTHn7wHkfAtVrELFKCGEwr",
  "key36": "38s657Mh2qGmopsjK2CV9wh9udZM5b6DzAGBa3qD2EVUMFzk2RdxGcxsEXRZEbempoqnGn4MEP4iTLLR8DTeG9Si",
  "key37": "3dkjzPZKEDmNbYscMc5cRA2iJmbXc9TBC4fNVwpHBda9X3m6jiR24bFvJt3L2ZYXkfV1857Pbh9fXf1ZK5uYwxNv",
  "key38": "2ThVbGvzHVzU4Uer5zYGHHNuRPMFMrrRA4FoRTW8x35ad3zYTPid4gaKbsxER8oLSJ6pFSkoPbS8W8xXA3UG6dcg"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
