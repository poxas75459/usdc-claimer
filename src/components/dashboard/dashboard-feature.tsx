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
    "5RXwuAk1EFawM18NkCh3inHPTwWZd8RJYuuwoivASDJJmUVT3LRGMFjVkvzkMNGowu75WaQaV5J4NGX6QVAjSuLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q85GTmuiRDtrUC8Vi6smjXHee1AVHrJjyMzG33C8ubL8vpW3rnSiufC2A7bsa1W3y58oVHCEkxqhHdc2Ttm6Pj7",
  "key1": "2bkkpARDZFeJvkfDHigwj9s3Zy5J2vZiHKeE4FFsSCnd4sbHmJcDkb7ic9tyQ2RhYp2r7tm5GY2Fg81uqivxZrSU",
  "key2": "2sbB6NhPm9arU2HoBbiTtH8MZJVTkN784tBmocCPSGxgGjdJP4LUJXdQCJQJdzdrkbn7PfXKTQHsBGGbDeQTjswY",
  "key3": "2NZ2ZWJTRwTyPM99QjHLZtr9p2aCP9NAKztkAxMwV2i48MP7GNgGJMc2u633gTEsbwehp1dpSiFwW7TxVt8jwEVW",
  "key4": "65HoB8FkB1woY6uGMGCNchpMsJHSQtN9vqXhxibtqJKCvA5JC7EWdVCT5sswRqHvya58HMsHqSNNgzUb6NS11pXJ",
  "key5": "5Y25v9maw7QK8SWaQesYETgrQqp1hjXzfK9bg9cg2kJ3o8RLeTdU644iiHuQzLPqUTgZZpsbchUsJSEN42YpgJb8",
  "key6": "4rjcSNA1BXfg3iRaAfgZzBwbsMhJLybW1Xp7WtFMq7feAVH7xehMtqwXKhhnUK5261AjQtzMGvULQBsp5t22qMvj",
  "key7": "4otii8QTijjDDFg1cW33tnZ6QWJpsSHcPxZeVdUrjpNp4eVaxbqHxpNTwyPGiLz65Aim9uQSzT54XazUqty2oTHG",
  "key8": "4p8EJ8HgeHBooeNbbpQKyDnXpLctUAmzcGrL1QYXTDtuKCeZoYA6WNqz5KJdQPYADPMJL6Azeg9yx2gYyg31eFQd",
  "key9": "5gV9Ct9bLUhFLmLK8PQ1We4N1PchZ1nkopJv2f1ghuuiHr22bQVBTDDpKCKN5SnGPA2bYNLbBziE5TmeAfCWiYW4",
  "key10": "3ErMgRT76XKu8VSt9Pv5k2br7o18kAuLYCtNK17Prza4CRDAoMSaqUMJb5Ew24MgLYKnNmYTASECDWZXaZgRKgkH",
  "key11": "2tZRsuz6sjQRUcfRv9yLea716x12nwyPczJN3VAvKsUNfq17gvM4SpqSNjuY6cCoWZFBeUdzy1bgAHBEdN2Q91Ga",
  "key12": "2XTgYjDyvAnb2a9LLrvKciWtPrG5qeBnuYPuyynKmDAE6TEGQPs15Mr7G9AEf2qeRqXAXtAZ6gdfDDgj9agMYAxL",
  "key13": "2xssNTuUx8Ab7cvnuanW3mHFDoHQw1iy16FzWedhVr23216DL1w7jLMNHMte8MR11LDHwi5XD7dvVJh19TNu43t",
  "key14": "4tCPCL8JUPJfSqzEqxSQ4urs2BP3kaQbQa1PxfcMUNbhY4urG8o55vWBfNpW4cQGKfjgQ6432czzkFQAJossrxJ9",
  "key15": "L7GTTH5wiuyYBAtsFxpfcshxKeq14ckw3r4f6WBRKU7u1Q6YkukPovGgz4UkJxJgEKUD1dkbpQ25FaMXK8sQ4Gk",
  "key16": "3CGCr82Vk1XqN9aABJD81PDu9Sr4V8RhvMffHrqjdvUXFbHY7oFJFXJN2dXBkFUMbtsXNgozFkVEfindD4Ju7P9w",
  "key17": "2Na4u2HfMSepf1jZKGG36TmFzdYGTmPzjsnYwSQk4bDxbqatJHkD985ZzqK6ZDZ6ieX2P2FS4W65J128RKEDNyZ3",
  "key18": "5cAZETA1o6tZoXHZQrErzQ67XNKCL4NM65NMUZ9eN3qCg7GLza6M9QwSpmomiLhJ9Vqa7o1GDgxQTD1Sed2FD4Db",
  "key19": "58apjyD3grCtJdXDNPhw5n2wgGXHA9Nw9Xso8G9a6M528FLk2pG3cJwjRruVDxKzSDhyV1PpyrHB6XsGFDjXbusp",
  "key20": "2GRarzPmnCRN67mTxDjXu8jRCfjpvsF4tC2pShv1ExhZ5jiqZPKytJKZvKLbTwVJyZxzU6v5JGmy65kg7uAgxPQN",
  "key21": "3gCmehtofUGfDHEDxVWeadHP3TrL5gopsh4HkuLhGJXEKMtBZNpgNd6wuKmom22upErwFXs6CaeekJ68MZhPGA5L",
  "key22": "4Pm1o7PUu66uDizXqTdpX7VPNjnxw6Hi5yeaeWhK4XrbAzzpAGgcXne9zTn7Nq17VjKAn3teGTfUC2WgkA4NxSMX",
  "key23": "3PiWV7DFtM9bDNkX3FzzbVBJJ4fUvs51a9v5QBf46WhtiZRGhJiNmXxFuZapFFC5VGdh66B8wTUByJyNeH7ysMHh",
  "key24": "3SxcsrZ3FLfiWjWFz677CckbPeaf9gwuZPdKK4tTo2QKTBagpwYHNT2rSGXHcsDdwb5TqCYAxBeQSkGu48YtYxGM",
  "key25": "2JkwgqnXcF8hrS8xTpAkKgryFjYyCAeMAdw813xSBjXJVeuoLsXSsX8z5QWZSVXd7gQ8fyiR9WrFBLB8iKgzmLvS",
  "key26": "248eFz4Txynsz8JsYxsvZoEkT9RTxqxCi4Hiv2BSTVycnLV1Pqtk4HkSCnQmeTDSBzAweBLrsppma86u9xm38kQV",
  "key27": "5Y6gY3BfHoARmoctHkTYxvYw4n5GsvbRZSuTpbamXhv1t2jhrWFCs7EU5yaXmBsR7bDKT9PxfHJHk4endC4Cxxay",
  "key28": "5zpzFDzRphTFmcKcRFbD6TWgRUwnGG1RyWUHktqYVx9uQXPdYLhH3FkcmmminKheQ3LnqLDKN6hzZ47qo97XksTb",
  "key29": "4xrVXbfKCiMAzPbBCEkzjr7xc49Spoxz39ne53iwRQdzXozWaPmn6RAQWj7iHMSja1ENmtXyjs3hveGm4gJMwBFH",
  "key30": "3474acwyeVRuZMvzBtUR3ktidFQWigY7XBENQ4nm74EFmXZ8AjcXYvq6Nhdhn7Vxs3k53i4iWqpNJYPp1YPfTDJK",
  "key31": "AMXAyBnkuyEjrMyVkfQ8s5tgJb94Vg5WX4wjvKVBDMrj4JjbM34rQj2FA26gsMSp93b36mn1CjAhEa4ECpvLmcq",
  "key32": "2vcdG6xbQotPcigL28HLnjX43FzrVf2B2d4R3Fm46NWUzAHi869z4N8fgzFmujtmDCxxRPR6sAhw5GsyswvUZWgb",
  "key33": "5pdkp5xZitCz5f8rFABaodfTV1QWhLMuwknfkazMP6KPrysodU7NY6K9gefsH16nDXMp9xEDPKo5TVcy1ZA8Cmy4",
  "key34": "e7pjgdD9vLsjvYQc2CG3GmM3iwp3o4FJMHcpEk8qMkwsXB666Abg4sJh5CsDVVaCdSubThxsNb2LkwADZAheNkJ",
  "key35": "3ncYVvPYzD3JkRhQ89jgrksETWamx3BMHFq6tiaBGdTRprvtjjp5jKrSpDXT2LW8iM95wX9mCY1PicKc11ntyLpA",
  "key36": "4kD27y4Xa4dXKn4jNMkeSiVTyAcRjqwZVdgMdxD5h4pUTNe3fkxQZUEyZxJbaZcJQgCpabNF4o1WiN19PQvUknms",
  "key37": "nLkKbqRBcRcmDyjBQWz1jbj1gujWaKbUAk2ih5LatMUwkjugut7x8cdesHvS67M5ohtSehQ9Lq7JfsFFW1mH61q",
  "key38": "2r7zp6fTUW2PUCmPGr1rNkZKzwezD7QMQR4u2nLrMDsVxW4SidrEqeJQqzgrfr9RVnJikaqvHGYq3ErREACwq5Z4",
  "key39": "52x1jVpCqBM3AM6v9MTe4iS5yAxkc7EWBMV5aaeGaT3ww1JWzaRGevED9QLwDWVHVaYwiNHts2ppN1RFwegUTSxb",
  "key40": "XYamoonB2TKK9cATXB9ghXcVLWU5AsMNS4MK9pTRJDF1YFmXqTt2p7dQmHQ3c4JVXuJcp2pq8M1VLSusssoQNN4",
  "key41": "2DYFnu78MWzQ428mPwwo1xQWLG73Zaw3Tjm3NZ1GDGFipUA6PcVU7xnNqhhfKChyDFP6y5UzT8UfMWzL2fUN1qet",
  "key42": "66FKczgbTX6RNYHbN3B4bnpkmVFDFNBUZhnmFXsoQFFp3ZBJmU9J3LEeKkoXJcFYsmLZohJ5NidRPbYjaQdt6G61"
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
