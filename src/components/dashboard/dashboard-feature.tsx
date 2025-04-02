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
    "2wBRf1pPmJP2B2cJ4k8DKqA439LA4PXGB87ucz4Pgu9x3ZhfwLPfSLQKWSu61v7RmSaLxYfkpAQ3En9hZnExHtXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N6jfoUcGTb5CRN9UEJvCMjwWuhsLkoNVBVoVdaopfsTpqii6oAYtkFsh4vgEzpsQE67kFFVeKsEPHoDwAGhNwhK",
  "key1": "4koKoZdwm3sdESVarydXss5TE7LFQeq1C9o8Rx6Uq7SnhdjBgwjGcsE8vBvYPQgvgTeYhhwL4wAipMPLLKyN8kBb",
  "key2": "8L7zHvknWuEFqTFjBkRZzdm5kJxPrywEspn3XexPy1xmV3xNLXVGefQMoyitYvdgbHdg2jPRjYZrknQvAdepLZC",
  "key3": "41VdwQNMHeDGoiALDmKQYo4HKPQGs3uBV5kz9iy5THCYpFH2jTPvbhxKndovcXnKyzaRCWGajEt9VandGA8EGH1y",
  "key4": "2743Ff2d7rA5Zbb17Cak5Z7qKExK73FM62A5aQtTSJG8xaG7eREURgxYgyM4tfbhTZ81DdkNWdNAAHGfJwQdtZg5",
  "key5": "3bJLyCiThaPJAmYRBUvc1jMEMXfoce2bZhbaUEgzrpEwkMFAHvna7qbPu6JPPZ54MwLsAMRbLjFC8efhGyv5Lm5T",
  "key6": "31JxZd75vHAqKKokKnus6RK4UjdwrJbtvRxQPpD9KQipvH5CcjEzd3DHgj7ks5rKiJgYXXvSsvC9wPFye3ykJ8wn",
  "key7": "2ksMtuGgFJD7X5Fmof22Gy1Pnqv8rFHpiHyZ7fSe6huY68L6CNnU2DN3gZ3k74GSjf6zhUTg5qXwoeGqbNzvUCec",
  "key8": "3TiWu2SoUTjBC9D7jzYAfNJAZGzdmVYKFD6GKfsFn5D457uTM7iXwfg87199VeRhSrG752sAm5D2eJtYip5SxoiT",
  "key9": "254M1ud4GauQCmzjKc7dmtsrquK7zX7mbEqnRxwPFk3BrSyMmL2ajf6asw9KZfPsUKrns9XF7yWyvBu8oi5L3DbF",
  "key10": "XMBUNGMt1iU2fo27FkJvUZY3MPqw5RLB6dS5pdQLQSogWAssUKeUepyZ6TUkyPSA4VRquctjc7KU4GvGFt86t3c",
  "key11": "3WbvAYPqWCGpmHhhTJKVVdKHMthBb87H19PNwk8rCoEU2jEhgRoceMzMH5516hdxqxAkwCFD1NWoEYNBoBJVqeaX",
  "key12": "4bbYuETzYxANUQHJamkaYqXHbop7rrr8iAkFmmXM8D2WffYY31iWRxDyCFXqXoxBNsAN5SAM5eB46p9ZrQoAETsn",
  "key13": "4Gv1etvh2baREqYd9TFuzZGzWuJQWbyHBQxWRxKMvX9KbtdZ9SXkQLQrzo2PShxEDRX9xcWU1V3a7sCc37NgsJYn",
  "key14": "3gtGp5ZkzHB278DmvPRXL8iqqt2oH8DEDqCYEaM4Wd5hYa4rdEiLyhLRcbsV2ca5eDj9qAtPj8tTrfqTczjQe8af",
  "key15": "4nvaXXfbxWXWcf1Tr7DxbhGVWSVbcRhzqQR6mfWoWYWKvvQXfzT8AcvbhhR6pn2iJENHrBR3c3fJiBsz95jTEMp7",
  "key16": "3AMzGjBg29SRvmv1aeEWr6SfNmrbhUm1upNDhmc8t8jTe2viRoB5TPHJGjAaodPxctZJVtB1yQpzQCVUwXAZ5Ahp",
  "key17": "32NzoAg2f2kzLUnf16GKWuyW1gUEAVZW9pRkGQzKaRpxthyUbwkfUWRoUV7Wqq3nbmGhoXKRH9TD7woZE9gEywa4",
  "key18": "4F3hS7j1xYNbfCS2c2AD6ptM66z6aTkDQgNFuJpjCHLykpMU8GKf15N4fFJocobazkSPDStQ8CAN1FqRcz2TAJhf",
  "key19": "5VzXEF3HUMW1MKTcDJF6mMRJKvyP9kkKnbcdiGgyobv5PsZffh5zB1dxu3j9ysnToE63HU6K6CWnvDFi5i4Xky55",
  "key20": "5MrMt8m5EDmf4bN4ujLKZ35FFUabKaXeziFksYGxJEbUYAdWFeKsoNj3ChuB5kLBQsD6ZsWDsJxMVxxeW3BdFuQx",
  "key21": "42pJ8zYMrf2aRc9rsWyei1gDpWHG3dMqv5h9F73TSCeL5QGTeyNExmkSK9gd8jynyP7AeB9NprbqQoEUKSaKtR99",
  "key22": "4ECmkNxk2rt4MC1jDaSz1vP5FrPukpbFyVayCbhoKcKHosQncxrqTKF3HtnVYCjjj3rKYBMdgVCSC5gRtcSTe9Hq",
  "key23": "5EyrfaDFRxSxFqxWoK7xMXu5GRiD49WSPKLPV2m2E1W652fTYDRNQdJrQer6nvoPUgPd9WEZwoP64fKDBTmZn3zT",
  "key24": "5ZCV6ERLnGxodzPkA2pasXPPeH8R48PPYcVUM5dJW6V45JLULEt8CXZuMRFVjUe9hbr4a3i27E7PrgQWQhJ78JQQ",
  "key25": "3mX4y9Q59CjoPDuUi3brQZ8v4jZB6jRKJMNwEhG9gNieDGFrXYMNHTxgcDpCBNjqcbnNZVWjMaNmgX2RN9SXSSM3",
  "key26": "4hskZvGjnKsBQcFYE5Y2UF2usQ2iVCUJDTDxqLDXQtKNdFbaBuu5J6CdYLxQuU2ekcjm4dfiBTPnAC85k59JqnXE",
  "key27": "5wHn42MPuWKZnVtEtu7MBVffxwy88unLPsGJePM6vJ1fD9G2geWLKKgTCtMqNZW1dqXYLBE4bLsWhiL8nZKVU1Su",
  "key28": "3hFNdp4CvUqQSTeqx8qEt1b7VfLUymVPFBitgYboST1QURc4f5asvt4wwHjEkmGTfkJpYuzUSVygugysKLxHaxUg",
  "key29": "2dDwQUcFKUWDcro4Z7p9JMtyktp4kV1P7ZP2KfAHrfvm7WLBjynUCaNCzHQJP971dHn4VXF2M4KWru2KbjLkN5zp",
  "key30": "3uLik5UQMCRcXP4Xhoy4FTBepj1dfnjrQffWdb6nsyP69se3mTS3c3jbKdCeJuLrL9zJRz3qjmRGNhTNWAs121CF",
  "key31": "3X5dzbraxugZV8g71dTVtoE12XrLdtpxc8mT9LRGkNn4hKCRkio6fP2XCvRvekg8QzP3Eom8h4LE4TduKRJFMzNP",
  "key32": "5WUqNvCSwyZ8iMo2icTR4NMpVEUJo2BmqJptZoCVJ8J8nNVx7nmoQwrpyiHjSh7fc5EN8iHpJqAuah4FVLto5UMh",
  "key33": "4Tskx9veSWPLt5rfZgeB1LU8qNVr4Sa22xkVBHamjFZMbz3fmWGynzHELA7vo6gfn8KwWkczMv6Yto9Vdx8vaMC9",
  "key34": "3SuzwEW4zpDb7yS2Wiuf2ypcAbDHAxCDnvoVQWhBM8oAhDRYanVrhRvj8whN2VzwFLzioWtATm7pLZEV82yHhJCK",
  "key35": "2x2ZGyTgK1bkXLEe1hUqFkfSzST8vV4GRU1jJt78iFTPGn9KmCYPLEvDGWCJwN1Bb7hqo3CgkZWRVqinqM4Hk1ka",
  "key36": "5tSG8BXT6Df7HHpwPykiwRyAinu8StaG5kQD9TE1GwjXCZobbAitFBzotSvHeWHbGFTFFy2VE5z8xuJTSeaRd1L2",
  "key37": "2DF86ae165tJ5EeRt8QTcZJtkncGFavb9B3ihc45JM4yuehNbMWrG7xVYXSv8rAEptseZsE9JGjhVA9GWr2vFxk6",
  "key38": "3y12qQKRSDZzUXk49gLJGkWJLiAM5WLDUboXzwm5XD3AYbyCs7UB6Eu4Epj5FLm7VeNVchFsnuGUFxd5RLuxAkhZ",
  "key39": "4xz1MsBsazXL8WnxZc8QZjXD1Gk71swgkeGDnS3wTHK6ptvLpN9UYGaUsMedSZhkCH7sQaV8ZfydedrP7cutfWLf",
  "key40": "3Fyqyokk8t4NMxaj7MTvygAP7b4o9uofyM8XLdmCNdPBCVU9dXFrTTy5XP8BstDF9PPGWHAdb8uNdjuWhheUKXJ5"
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
