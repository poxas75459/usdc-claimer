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
    "2nsMMUc3pARg2FjnJVLfZYjkjJAUaePkjZFoyVy8TXq5NTrmRW9ihYjGizLa8AKgTfJnxcKPhWF1qd1uc25QCFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZ8PEUboLDZocQ3EeVpvbbxZ3zqqsxTqktBr5z58ENZWrEWRxxDytFURCQxQXq4YKuAJG9w8euq76ch5FRaD5ej",
  "key1": "1dMQ1vPSj5CD8jrgGcP1RZUqbGtqd3YCbpoD3nZUYYbuHqj3Jqoxz9mUBux4oqDc3S2yBCbTxT4kx5aeVLrWFBC",
  "key2": "47cqxoBtpeCKAqBkXEHdm9daxtsvkegcSJptrbpUGeDo4rUhLePXZQNXEdTAA8n9afbrKggefHNYApR2ej5EvEP2",
  "key3": "jKZjDWcNkLc8NsWd2m7kfs7cEKgwNth98yMELog26XbQKLcq8oJv31Jnq7uXDaHi8m3Bsjme2wJFTTPnaV9fVMA",
  "key4": "2CRsBqdNTkedv33kmdxju84PLmrW6Sb2bEeb9G4a7FdrE77nRv8gwpPrfDCnNcVc9q5apnyde5qaY4Q29JaCddUc",
  "key5": "5nF4kL26nD7yrhik5iQgq9jd6e75u32zqxf511mjyXujDyckgEXjyBRR3488iFpiPE7iWPhkPdzDgypdZk3RBcoU",
  "key6": "EZou4qgMHEN4SmPEPmz7swyK6bsJ1pMQBPu2zbLeHMZxNDvJf6DDjHPHyyqMFgB1FoWh73FL1MRTNkgac7oU4st",
  "key7": "55kMsZrQYiX14SGfoX8QXT9MbwBHnAxoGFDRvjkdmygmewzTSd42HQZfj4qRmosmC5dMiZSRs2KCzdJYPwjo9Xpf",
  "key8": "3kwtxcvCsXmuvv4CXNM1nK9Mcu7DNJ31ecDbKFPC3wuNvY3p6JXEtzAwtFzAfgNzzgLJvf1zqQyMHZZEEPy8V6Rm",
  "key9": "3uMYEaJSAppEkiA7tw2TeiwUep64uEnkhjt4UGFMk7HMBFFzLSxPTbyCdy8u8vbcHBAhBgR44Qhi7inhrnXrZ3eY",
  "key10": "4bQhBXpyQ8xJBhyEVW1mhU7VCUWW6pea1UvmG51DaGbcoc2FZaG1MQ3TDDPBMEhFXoiu83DzbZ6vdMd5gVw1JM9S",
  "key11": "5GCwTFW2TG1M2vJJVhMKHhPqvESoSup4tdZqFZn9f2M965XBDhxVgadrCDV6GAz35S1BsU4VeMe6TPaYFiBmrqra",
  "key12": "5wdXMyZmUs8SWoNUxjwhLG1KLGANTnFCqp2uuXZHF81y3TvW3guBFjbSZRc9cUak5hsMmZ9vTuLvykm57vDCMh2P",
  "key13": "29ECWPYLb67RZsmKsQJuNpMCkf6cZz2zKVJobE3bjiz913Rn7j42czX2LmoLYm6e73SC9agokwyxRyv9Mk6uFTLv",
  "key14": "38hXs14ZuK2Lp1y1ozGj31kJWCvmcFN7v4WyERjUGRnRt28a8Ezt2GCt2oZ4yBm2b7fQP9a7XvHefTzZHM2BVpC",
  "key15": "46fxQDo3ahhQGhZjJrDcyZVYNCc3fYjP17C6hASjVYHb5GCaDGhU2NktMctgGNZjdtxG5G9hmRK3bAabunWi2nyq",
  "key16": "4nLrzAwtYeoU4oh67a145K1cJuJY1v5nNKyPvpVF6db2EiCusHJh8mGhxbaP6eFZf9iFt8xsVnnbwC5fGTTmjn5q",
  "key17": "3jTX2HPStmAKnKNkNG37M83Zc3baePaMV8mvYxNGJUL9mAhsHThx8jcLnLf3v7MtttBJsd8VtAq4eREZd3HHCnCL",
  "key18": "2WJq3bPKgKZZLpjxnU6oQJnVGn4y6d1831Z6LKNzYzP8Vw5uz4rSx5xuJLmeSQC4dnSN6tR6uBNMwVp1LCszh2cL",
  "key19": "Uc6LTf23qpJxtFHo9X19Nuc7hLmQhHNhLiUCDUTcKbjJ5So2nnrrLotQZs3W4yABshcYSPSozWXWBpbt1K7HWRw",
  "key20": "4ZY2prfCZzCriTznYmQS6huCqYiZwThy95VVtD7yogCszeUPRkF5DgPUrjGtWNi1CtHmgARPLb9VjvVsdxFG9ZRZ",
  "key21": "2c9ti8sdgbgUnLJ9TQK7T91RQNSpNxF7CjgXJSRmLQtcVfSDjRAqEzAcexY8GYa6J4C2bMQQKrJgAmfZXDMMwdnG",
  "key22": "n6rdMnrfsiWKWgcUs9qcQhtjnmiSCmLH2MRPgeffjHsNhQYV1wVUHwrWuD7GYSU7wjcPgAt38LqH9GVLq8MbrbH",
  "key23": "4qzUywEKzNRWkhNJLVRXSmjLysjfNxJNPzJo9D7sCFr63CXwr5HXCv8nRzb3Kwgu2e6Ra1VsPGWBvcG3uPLcr27a",
  "key24": "5wp29CigCyKUJppvXmmPgnyVNrz4qov3N7U7LrBcbGRmcw96fPNWCaQRkKFwkTdmMouYNDhLkLoA9j9qfsFqbbkA",
  "key25": "cb9ft7mX1BKhdeSJEXPWpzJHZSPXMzcKowRiS77KqoZqTUmr6JchxDdcLNzhLNTUQTZ3P2deT6nKsgLrUYuZyQ8",
  "key26": "41SJcjB1XQrPVj2U1m5kimMvyPBfETbNRo48aDVTBxf5uibHUhCWEN7GjqDoAGTKYr6YfaeLpV5pTPKdiB9X6kRj",
  "key27": "5yHC3oVChHKe31xwDFJmucupoQCGAv1xjYLnBrocmRPt8eBNbhU3adpTZY2gVLgEEZTt4jfcuLhbaRY4EgqkPkTd",
  "key28": "4rgk3zWzvDAShXsNFewNyrffWeT5TPjyh1hAyChSjGwTBpfxmkCrpQaoSjAd2ct74aBhvjR3hGNY2ZsMybctYVx8",
  "key29": "VA2T5oa5ftqxdc6pZQ2UP1ps4XB7ECy8HUheJge7ykJJkTbic45RBPRLWMEcWkNWytQQHtCfZS8ZJr3YPvhpdCn",
  "key30": "5K4sqvTwW3BEkgbQVGhbdgJGhWkneSVAQUNxzcaZAfFtWeGxqvfbcBsqQUWQdDhvXyvVfeBofimK1q2EFMKvXy1e",
  "key31": "4CCn7z62eucUTSntAFBunJhKN6ij3gKXidzKGL2srRQVdwJjCN5uhA82WL22rDZWPzQHECdzkTXyi1nDHJRWFBF",
  "key32": "3UE88h4Sv1Fng4EKnU69FT16CXA77mmAkeuycfJFSC3FBcprdKtBggHLnQ3NxGqUrJib76bR6h268bK59fhzdHrW",
  "key33": "5kC8QjJWA66iP8fogB1dEWdJ3twsGQk11mAmhHbXPaBmgGtN9ckHqrsKGmrVXAEXdExuwzaAVouMxx4FJyiJZk6e",
  "key34": "5Mc2SoqRqZnpW5uYeLugYMfXdpRjDDo4Jug6VZpuAHLLnpQ2k1HG33td1FSrtEACgHutzdkgfALcBjb3ED3zGn6o",
  "key35": "tpT2cv5WFXV7FXnrokn28pqya4THpZKUv53NuBAmewrjec9n8Wd1jf1rPkgbcFLudkNHySBDF9dQCySjXpu6ahS",
  "key36": "nVkbuqKrxT33HK6CSfE5BbjdhUQ2KmgYvKat1MMLd9djd8LSffyhSEvkSWYhcoc8LJYFEfqGgz3Hz23RuY1uokH",
  "key37": "3AKT2Fq1kaHBD4J8DhcKu9wfMK3YybVJgWEPKPdX8TRN54LYKKpmSuv3TAh7QCQQHQYLqmbQEq3PgLDq2smAWn5c",
  "key38": "PMFbyuDyRwyazW8E1BQqRDUNpjyE3oiaMZnJDpDYRUzKiAyifBHYUJJpUMm8vFQo8FW8fVPKiW6CSwrshcaZMhv",
  "key39": "2vnru3EDAiujzFxHpvQYF48GZuGDNXQnnsA5FdkgZ2bqjTcQMgPVaBq8AfXc8LJCCLwAK2efR9u5wLrFzq7YC8Fg",
  "key40": "2XvKpS9JNiZQ2Yfwr7Xioz6vaMkS1vNf859Ye7N3FMMx1BjBZVqKYtpy6mZYwsCxqcnVUKN69cPUNounU7iMP4FD",
  "key41": "4Zm2BdCJ44CzpcUG4KoH1VNVzymo1hQzBZcGvDBaRmNgJ66LVE3uGTRJ9RLbDZCQApZSsssa9dEDfwHfUauDaPcW"
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
