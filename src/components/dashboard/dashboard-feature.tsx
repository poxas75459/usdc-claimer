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
    "Tz36Qkt98VDWrWPz8y2ZRi4kqsSL451AUNAtjiLHFbpUUdWS7RyfYMkysRXQMEncHWzYGZcuSaF6CtHQ2bHifua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptm3VvFv6jxLZmV2NXXKTXnZ8Jxrsb5RJ9Qzye7aRg4GzFcob2v9p4nteKyKFKEWdtxQWPSJNfdbcvZmsAwe2it",
  "key1": "2yRphK3fJesYGjMJuM9zwifMmnfHWfNpB2Qkah78k63eBnnGVQ2FqkokYH9HXLRVBeAKidcXp4C3ju9bzZjJbFvz",
  "key2": "3yCwceFcS5q9SzCuPeYRDSwj1t1SkCMjZ7vNYV2pVjsCx4hLjAcpLCTTQvE4DHrk9iw9ySmuzgzn23GPPRPtUydu",
  "key3": "2qEa6LbbcVTvEfSiPASiiSQhXuLfDS8wgCf4rcCsjE9Xn12LBXkB365w7cMqvyDVEpKhG4HUwYpRVgJ7fFyPt78r",
  "key4": "4d3ueDTZ5NBimqNMsm6f1UEJx6gw6SAQYf5yroDTVNi231CjWLia4G8jwRWRkuuFwZnLFzeW2Lt7DTEW423BH86",
  "key5": "4FJbHbaFMRs8M6eJACwS3qRLokwH14AvmXsPU4HAdVg57W4VPf5btjffxwsvTNAuNiWE1gwjhRHV9m5ePy4f8wjS",
  "key6": "4MDgjJw2i6F6Nhzb5sm9DVa9cR56m2Ew6jSe2q918cG7w1jVcPCLjREFdEAUDEpEVU8ZgNrVSQtWY7hXLewK66Fi",
  "key7": "38iLHbYX3oAdrJp5zCLeYryDd4cEYqq6pwVRXHeap7bDhMthVVqGQFupTkMgKbPFd41oUwiBWK3aKGnh5tJ9ijHB",
  "key8": "3KWGX7Um1DFnLV6onbLxDaF847sTCCTWdKsaNKqjiQtVbfx9Pnz4UogteKMFv2cLLKBuAz9sL1dE6vErF5qNZTyT",
  "key9": "3ixS89Pfh8mMeNT73JLuL2zUDcZsucFuapWg4C8yEFC9GybWbxaYS2xox86CeuuKfZJDLX2EjxokZsa6kKB4bRH5",
  "key10": "4dhndmPKxfRTHXAx76qHwtrvPvSEfthtQsTB8hVZ94TPEJtCpXNLvyLwJZq2T1ckxZL3AjizVPc7EZQugJTdJnew",
  "key11": "5MeC4eZijnK4ha8V8HesxJH2hvughRCMyeVSioUicy2MJ4w24dcm5byj9ih75w1CYTiD256qJdqES4GiLfUJtGUC",
  "key12": "574h7Pri1goUwG2Qi29bwocir2amKCc4GpzAR7g5siG3kXHy1bNVNuK2A2Cr1o99watM53fF1yBJsX1U1Zpn431o",
  "key13": "3uVX34zzGWB8Nf4Ne3UULYQNPaLeHm9rfHhaTJ8Lc5fevkQnAG2YCNZeFwi6DbGzcTPTiSVjydaMqMSag21udQhK",
  "key14": "4u2WYryBUvgVUMSJEzzhKmcexE3pPDzJYTNcQMysAkujGs7KPnzJAMYkcaBX51SKwQDBof7BayMyhyYK7M2Qa3ms",
  "key15": "BuFVMSdpS8Mua2CW9xT72gDH7EvPprJzYWqc7zV7gMFcGNTEECPRtf8ULU2RGnZ46YPic2YMBHp6YKbichagWfD",
  "key16": "5xiNRG5wUzh6xRCBP9GgYwCV6e5irNLU98us84S8rqkk4bBHum3gdR9BSsHi49MKAHJP5vcsRmPKBcBKrcjzJJea",
  "key17": "33aWjNdnSaUFxDrbLC7xTTww1NfKeCxfArcHs6n3hhco195AGm3r2cxiwBfJViuTpfNrU9SD8zTF73dcvfy7Abmx",
  "key18": "2s49UP9aFVP42qHMhksUWZRJFTxpqA4UGZt5Bo7LgZDcXPkhWzBGMywqa5sjcX1zcHygmwjNGjqc5Szq9YQ9YGRE",
  "key19": "5wZpFsBe1XcJ2YQ2hsuyj9evo8r77iUjDg2Pg3QqpWXkN3sJYPjqNgzPnXqz7kVWBEBW2A7A3j1ZaNaFsTrPw2AD",
  "key20": "2DFt6uvv3nH8VMJsjUuoTFxfVumiZJyavaGNjpBujn9vVb2YFHsk42i2YUF3yBsH55yW34ypUL9rLcbaMchTRDMc",
  "key21": "4b218nNh7BfhA9eWPFp6xggitna1dY6nogGqBc4ZQCYhnVapenXeXcH3TVYfSNYHgDfsMTKqJuVUEeCbkN8kg218",
  "key22": "26y51Gm2oUUXTgFJWwAjt4BYgdG8FeuDhQ8hBQ6zUd5FFfkkAHrYpmwVBeYBbixkWJrYAw4JinoGPGt8Wv6j9JBd",
  "key23": "3Y97hEgiGhZsJdDXFRYoVEDXebDWvVc1mHpbQSFbFxBsPzqejQYHRYDNpTAmvHkK89C1JHNm1Gc9KMxHgWrVqa4D",
  "key24": "4FsSH1MH3ZPuZEXtx6tdXnVWoxZcF3ThvRNRirtn8AHcHxTVut2vvvDxvhQEky2DW5sYxUWThT4pQAd2HWg6RFS7",
  "key25": "3vaUC99zBABQYAGAroYaVexCczvrdnQdD9P3WGw9i3iboFocpVbL79ZMSERqZLeSk9Cg9svUwukUXpNCci6RMMZJ",
  "key26": "2RGkaTFjbJotubDQcVuGGmPTvaHq2E671zxiiGkXNXLHqaxuA8XLMFAUmuuDnai9a32wAEM7gUrV6752fF1uGQs",
  "key27": "4joTmQudKdjmett7BkLGGzuJ6A9HUntZxFuW6R1vETDwS1YxcoXyfMEgXSGQ5Hz2XXNZDWP5JpyjgHY7Wwrgrqmf",
  "key28": "ev4fjAw3xhxh3KhwsCdj5HqHQtgkGjsSDLrQyJwsFDKKpELQSjRGTvw3Ess6G1Pke5RThFYqU9iyj6okynYMfZy",
  "key29": "Xzb42t6eXeV7qwSZvU5Bw9DTmsbVifMib3adeSMxriTeya3qnjSuMCN9UBnGK74a9dSs9mohu94AUTcrZgsyGfi",
  "key30": "42PUHvC59aJ6CNTypjav97q5EGxawX837MHFk23Tbbzqvs9mDuV53ofY8u3B1yyuM7hUTTPzXHKCEvW1QWCFURkr",
  "key31": "BWJdd54cxhdw9CyKUyLjGPwpHdzuhiyHvciFBBHFsPYZJYr88LrLsK7agUT4y9vbVHJ9e1oQjicS61Zgxe3hTSv",
  "key32": "5iBiTmkCHcd4oivdrPWmTr3sDonSUmzkbjWx2SdfRzdQ3r6AGNmFkQMmjsQc7amyfije2UN7H7Xtah6YkDNqrDi8",
  "key33": "2gLcoy8TxmpTEeDTyy8PzzSJLvrQHHgL1WccMibG7RHPzyhdvBkTEj7PNLvA3vH6p7dfj1dnp9wpFNbSNCbGc1Cx",
  "key34": "5kMRx7QeSN5mqogvHJv9r1iUQmA4D9nE71Y9EzfD1xaHCAAhKaAyw2J8aeoymkcFSk5PEo4Km7y7Lk2BKkYM3rDQ"
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
