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
    "52L66WoTzU4EP9iNrdPXLyVwqvqnDBofoW76YiWVzMpWMoNfXwXb4b7y9zKsoYGaeQRcgBeZwzXwDBzaWh4sXLvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3VvdU4GVvKT2247kiNEwMPhLSjNug44z6rP8Tbp3qiSTBDFUzjvAPvvSFDgwoCbWFBw9XXbkdzeKUuFbAcZR4",
  "key1": "3TPDFtbaVUmZtuZKdzfCGuGcULkrsCVvM7ZouU4RKZugNTBr5j8yU6dWU5ZuutB1JA8BZ19xcKKCqDh13sJaQKAs",
  "key2": "2XodJRiWwSbHYfeTqFgiBjbGRNoxV7eA6T1e8EodaB1FmtdJEDdUjnUALVTc9F5XBsA1tAivJmh7YhFPkfwgZNkM",
  "key3": "3Vgrqv6eybXC5xey1fzuxEoqJ47THQ4CDTJFxpqvSiPf2muswnLqL72wTUSFYXdnXG6mQ53ChoQ4eqazS5dMPgLQ",
  "key4": "2zhH5Jss3qNrEFvqdwRFF1HWtvvPPyz2ye9iFZZnRT7uzBAuxoJHZFeok1RTt1eVHYzUaRei8D2DESqrFYL4kDQ7",
  "key5": "4CLQHw4aayEGfHUq1QG7AadZWZTGHt41442ix5sbv6evejn5LFBuLjTDoTxpg1T85xwxYkTEAtLQ4D1ETjDPo5sC",
  "key6": "LDm71eGotYshSi8MrTecYP6d7MHoNGWJ1ALQj6gWDrwRboVBLPjqHW89p7i2dSqhqzDEr7TJvykHxui3vgHhmzx",
  "key7": "k3GtXqnryyqXcaXP1dJQCRQgq6dCyczas94JP2ZhcFhz4j3Wbnqvac6xVQQ5CFBS4qy732UX2apMNB61gctEo8N",
  "key8": "JvnhTZ8dYyp4N1FdKjENPphgGaKSKnFgQMc7DWx9vdSzT88xb3vdL2kAjoTrPhLh4pxoG8zT48hr5ErUpBkh9q2",
  "key9": "5fpzqMpdfhK33jY7KqLKd558xpnfE6vFxDMxVDR26fYGPAQSyAQGXwhg28A3Vosko1w8JeWA71VCBXFBHbAELnPm",
  "key10": "5er5C7m7XbTZ3hDfh66e9ysoDZqwrrcraN4BQtqFQP2MDPbUL7bmAgmSLojKAJRNMMUtMaKumYCwFjHbCTZu6YKA",
  "key11": "28vCDbNhjwxUQ5GFNs3FhhfkhjqVMakLddtszsMhbevfKstTobnJN5Ptg12WXw6V8xQkwBVFVedL3anbmE133PXK",
  "key12": "2AAAX423Vb1T2PwnJAtx3GsJp62pVFnUyRSZj1k2Loo9iXcGpJcXdTobjgPHVpQpMMjeGZdejFPr4pArEK5YLxYt",
  "key13": "4dP2RF2k9uPybMuamVrGoV6m4C2GNxR9yhQBkCkt4qNnhXWeVrbGedJyAS4f39SsPmmqhk8wfZL9UChqC3GXUqj1",
  "key14": "5C6J4oBqUWAsNmPE4AQKpJVvxrDphHi9UZANpsJKKrSQVSiBwvaUNQr6aBvbzQegXEeBBBGtzuoR7z9f1TF5qQuF",
  "key15": "5E1tHCfMieXEHcRF2eDpwnvSg6eSt4Q2dxSkkUgPdWwCPHyH7DSF6fZSabRS5Ag8EE5sKc94KB2nHxHek99hwGVG",
  "key16": "2jN8LSCaBv6kJfvK9yjHjofrYDxJsT48T5tq914TGA1P4vU9cko1pes1cC9Gkh1skyRh8sjbQXUEfwMgPHL17uau",
  "key17": "38LaHVHPaEfii4xLtpDv5iWvvRm4ntCN9JEZDWougbh8W21saaxdNQrcYnRcqoyHrMGH61sC42NtYkWzyMszSTfh",
  "key18": "4iXGxXtMaPmRhpW27HMa32V5kkyxXrjL8TJzEDxA5FDnUGhTrkYP9owfq5jmKKaHSGQtXTqeYxqRF4JBTEJFQimP",
  "key19": "siXKedCd7sCKqJEwWyv1EhTdEb52nrYh2evJAFiVMLwKrBHx5PoqMU7pyN89vbw2pMxSqJ6B4FMVXgA3CKDtpkq",
  "key20": "4F3M5DGZqveauv84AS6G7vRPbmgs7ZEFNDVKP5MmnvQBthEAcnU9zMCQBXNwrJjopk1cFCFbUu4s4yT71PqvRsCN",
  "key21": "5AHpgvLFKt2kbLwXvXMou3WKvg7XjtveoFcXNz7PXWD71bwyBpEQJ2PCgHzRWtjnNg4x3R3zUKwfWjizAiYFwTXi",
  "key22": "52esgUbhgFEYNysoCPf4HkaP2uoaXayhhjPdSxv5rbPxqGPSFCQGg1rWHzYxXLp4xH3uoojSEokwxHYBGidUcoqt",
  "key23": "4qXjxh3rumSif8NBiMXP4oyYtKDwywmtT1G8hjnsUQNhSK7Hg8ifgsdyaEj46QLMZZvJUgsoAa85LKRxqPEdw9p7",
  "key24": "5wuL1TV2pqSogM5W6hv87AqpWF8AzCPaew2ezpP11CxAqexa2ZN2KvrzesTLUjnCrTfgWH3qMjP3W5K1FTB8EHu3",
  "key25": "9oFHRW4S5hKogGKevX6XBx7EWu4jhkoRRcpRgSnyNPRhWBAqd7QncV6DkpqPWJJcz2Bjqyn3d6uacKV5j1KzHVR",
  "key26": "3kH8A1WXhQ4RYMC72QQe8JBHUESqNUoHaMUPVvge7uAauXzdu741Y994iLNNfZP1Z7oL1Fv4DYK1tej2cxaC3VAu",
  "key27": "3299KRpoxm5q6usvTzYJ8kk7r3jGZ9xeXTwUc2dup8izYHkUVHa2p21veG8KZoFXHU9CjrnB9VJ5MUFFzdyHeYdP",
  "key28": "2EBJfEqSxsET2ueoNUdaYw8GqVgFcwvazCuNjLfbqcacZGUFKp2f6HPRJ9QwvPMNU7axVeqGtrnZyeFsNLrq8yU",
  "key29": "5ERmiYB37WJ4p1Vebquad3yUaiPdaGJG5iiGS9ARxHGadHnyLKFGWxwjSv6sAg7ziT9JpAKKSj5ebp3TbYh8uzad",
  "key30": "28ycJTvARaTEoSzokMBDf4UfY6bE5ayFCXtYznJnmdsnMYHv9M625TcXDp3ViqZfV61Qga8tFsLUTEWmjzFWofzb",
  "key31": "4bc2vnrmCpQx9YTwaGsdpFuMfDPSTsstnfTjxWCVWGAwa7MPXzd6tuCTdaut2PMMTHQQmbQbENZQ6G6wDiWMgeyE",
  "key32": "4BFeMp185q4CWTxxvzx8vhyFGmjzaMsxTPHr6Wwcokbywq7jLPr69KRAYLRaFMGAKnKfbmsFhBvyAtKB5tCQ6Lm2",
  "key33": "5BBPrhMnm9NwVmUqtZyJq2yHDCQjCSR86pyoBYCNNsQYi4hwqQoi5uTBqwKkjvo7L9mngZi6vGkBwupor7qdUpVb",
  "key34": "5e1SuKDKc3khm4LvoBkEr5RAosVwqmQTd6W5uiSrcQMwnJjxvpoYK4EcfgpXYVAHGbkNhc5yduxE64uL9W21NQNQ",
  "key35": "5znuWMUDkMsnGRnm2Rkonpt37UbfT3fNaPuNkaACcYDBR6VBPzf7EBwcS1vkuq9nRGSavgW3Xc2PH7wTh1dkv5JH",
  "key36": "ss73AhHYrcahpeZSowyQuccxirH9BEhXzMqqDAMrxoKxAyerAeCik1k9facSFX62kAzRjEWgsynkFxkNnYZQNZ4",
  "key37": "2efssaeixGfPJgKp2hvq6DkErQLbaKjd4DGX6UdN7Na57WsG587zqZePvxGTj8SJ89VW6HQqZMFsAkuUefRRz16"
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
