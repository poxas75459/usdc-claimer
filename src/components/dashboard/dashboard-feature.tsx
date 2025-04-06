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
    "4GsDgq1trpgT4maMRZ5DHU2DMeDmdeAL9SvYiuvnMZGdnmRB9eLLmqxi5DcXVuDPJfJAdhE1vaaZrshcyhXfw5wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4emiHVMzZRGg7ZvC7CeFbXr7FtXPUamGcAwsAcjMCpxCc6yRoGU6CgYhLmbwirUeqcAMaDSNheymw4Pht3vuMkYv",
  "key1": "4PAhwiuKMBYMp1aKMdgFxMhMbupj2ghcMRVLmn2ctyZhjqxw2AAhHg4qT5nS54dkE1LND8J6zTq911GGPFu3G6LH",
  "key2": "5biFtYPwLuv8Vz5n1Xg9rRRdi4bP69HPCjxNYnQMYF1cNDCdfV8hMS2VXKetAoeD5aJg4yA8cmGekCxoxCqB2vNS",
  "key3": "5Pwi9ttfvCLjp9MuYdxgVdcwNiHwjDBDc24MubwkQZvtdjdL1VqtH1ZtjMotQTRXgs4cu6KGTk4npwM8pEDpwtFP",
  "key4": "2xaA6dRwzdr8S3DhHg54Pqn4eS7j2Go6Z1hUPzbzCYaNBZ9TDJcJ938vTmAxqdqRRmtkPHUdqzSsrAbhuP4VyVxb",
  "key5": "4814XNvpNTh9oF26DvSEomxKpoosfyqb9BuZPYR63a5CS83v56GeVBxZu4mtcr3yg6xRGGu16kRjoPAhXYNoHV8t",
  "key6": "4h4jX3yf2619imC2U8j751hVatizLN9GRNDB9LxpQRCVtwPp5g5Wv59ZhFAyBE8FtSR77gpzsHLH1aF5D83oe5vx",
  "key7": "5T3tnwg6hpvBQurxGybzTB9H3fMcXkjfFkvkNTDapCtAvsT9wp1asQrvSSP4M4WiLV3YaZfhyucY3oT4qLc4T4AC",
  "key8": "2Abw69TQnKw4yEfYgdQ9dNaDonWkQMEd6ndQrAHY4LbtW3MSXi9JYb3w2V8XLXyQPaAEumXeBaiY2vQFj8vNqZMj",
  "key9": "3izc8smFa8WgSpgBQVLBw3sRqgbMboorL3EDjCer4A6BD5cxrQt6awyrTkfhg4SQR2eP4YMCkfk4639Ge7c1fDMQ",
  "key10": "5KvdMxDSSWXLEmDUSNhdB7gGnQV2QakCS6UB1HfobNe1hepJdt3jfBWgJoa6xG2vvE4NKc2kw7Hf4BDnKS4ZGk7e",
  "key11": "51tQCH5LusbvJcyZXzKZUmwWH4r8yGCCugvv4w5XZp5yVqWy7SKZG3ZKy435u9puXin1tfHj93m4rgAJd7wbL1Sb",
  "key12": "2ThfbCsrT1uxhKtqo5aCydSUNkXk8tbeSaFf1fQ5ctA8e7EAdc26JkxGxjzbJi2D7f68XBQkmb8bgQJaTy4p2NEr",
  "key13": "3CozHZqc6JyptMvbDwSq99vYLXN2aSDRGmGUpZr189CLuB2bdm9kNakxK71ASmNBs218xRChSBC1y83Qm4oWfMbY",
  "key14": "5MctVoz3CFpUz7NJjCWVVoQ9GGiHZ3EmsC3MumZLDfyZGyQFLr7kKdVH2s3HdcmGEjMyooUtVR8LWbPSAhzet3s4",
  "key15": "5QSRKi5CMV2q9EBbWYWF7GqiSo1PAGPmXrZ2CPixnMsyCaV9msJwULeTsvEYLRgGRB9FR1zhZszvTPhyN9RMnnEP",
  "key16": "4Pw4kCcgzWZdJf7gV8hAfVDkwHoz6VaB6vE8eboyuGYz1xiomrqwMLt2VMrAPfDky87M6QT11avjRBzkkUBgNZwT",
  "key17": "29GaavrbjBx8RewcfzUVYpVR2iqiafv2ZsC3mqAAN3Q2nXxHwCMUS98sq2tHS8nhWymbMzzeQtV89XD4QfpEcmGM",
  "key18": "3TiNVeASzwPVg39BEWxi1f1F9wDFCEhiPiNhg3bcob9v25JiE2yUCcXPa5HKjVf295fst7VMnT9ryYbBftHKqtpg",
  "key19": "4kWB1hKdMk9Cks2Xa4iLC6m4tYVoAgQQGspLpgz3iiF9w8m8Qoz3XuYiWwt2cykRzKBxxeWzvvuPohYEYxvhGb58",
  "key20": "2jFh3UptKW9SxaTVxoVbLwZ1TrVuwgk7ExgWsytgNF11dvziqsrNE5sKtMR6JJcmMTdBNrUKDMshki41B8AUcFPk",
  "key21": "4xq9u8aJwgbWSvDkePoHf7AthMC6w1xp7DynHxzToyfSukE7YJaRkJKKQ2SGLWkfPzYeE4Lcg1NyyKUdLRLQmZs8",
  "key22": "caFAAZPdXD8cyhDZZ9puLDu6yezLwCRwWcr729aKaj8nqahXwREx36boTrdjHtnapfP6FmCQF6uhg6BRw25UAJR",
  "key23": "8zJHzmMr3BJmBdqTKfj4ooLTFvcgb95B3osuUcXbMJB5isq5Got18UxsaUsjUFzVjySc6L5QRGqNzpAZBgqNvuc",
  "key24": "5HY5Xey45wyiUSg4JLKbweJFbrkaGCghKChy4jUS26p74zddmWXrGRyzQeiWDf3qn6LQ4qGBDeVMtQqAT2eG3hpS",
  "key25": "yZxY7SxyeKEa9xGxZYgE2RTr31DTDPdc7w2o7LPrzzLWyyamFR99Cfzw482hLHabdvgVWoX2s43Tfzmeoib28PA",
  "key26": "2v3EnDJsciYvMjyj1UvHoBZKerbtKhGRQE19wN3HvpUu3nbpNotcFcSRfkuzuCeG1Tny8AoPVR1e2T5VKGcwiU1F",
  "key27": "2Zt1e8w3YaqwNKXvx7tzwVBMhLbCekp8FFgXosTLXvRifyVqRYkaSYpVNKkkv9p7ZjG68bowfUGeJ3is2W6AKco7",
  "key28": "2Vwcj8y1g4oEEDj3mdfN71XSMH5QKCBym5gnPS5uUBAgTYbFC8pkTrBb2YCCA8qu4Uk6sbNpnTrMSMurVmHMSKMD",
  "key29": "4naFXxATZ9Zqztz72zNc2Fo1kEmBRxoa1SqkCRg43syUghUW92govfBjwt1sVbHbWNLJ2rjNaSnBKwyjdME5UyCS",
  "key30": "5bfCP5pCJ1yBMnKRxXQWJNMuTzfS7SUycMHdFUQ8hmhG7jBcbPLy4CQm4RzEimxnBWwMW7uzN6r7A4JdJREQgqq7",
  "key31": "3eWsy1jCpXcx5VrzWBS6yHNDH8HMQFTQg51fhuAvtHaEV83wEg5nXDZAv4W5vcy8sBiMyU5juLjoC3kcnwZqKDpS",
  "key32": "eFkx2J9igfTssAHirRwPrYc91ckq6HJTgky76a6C8gir7FM4MWMniKQyHHsvVANxnWXJfN4vyhNCpLwgu4bs4kb",
  "key33": "4Tpi48MmvJpDuQFLJdFQokiMSM3iehEChCRJ6neGeRpxUhCNrK1nqxQkSRXUy4ZyPJPiRBR8m3CT86q25LcWAEa5",
  "key34": "5iHpQZkmNP62crtdRMpf7ToQgKYC5zjaAjPazdbQ5MHn3nfDxDdJpTR9iqmvUKKaqWknmz6ExwzBToGMDTGD2nbb",
  "key35": "66z42SYT47N6x6qYXeNv6MiFxijUDBkQPwdHnwxuib38FKzzxB9KNFBkKH1ZCJurNfPjvWz6ycQrsCXcMjf7nb66",
  "key36": "2REbz97fcvRC1FQiUaRDxqDR5DJoF2EdUdvCGQGShoinp3CcaMtuZfEkC1pM1GmyUkHnDDLhqi3vbCcx9PqBD1Ta",
  "key37": "4aj9jWw2vQSuKMmLTmtApQuniocCwoh2Ko3q6zJnMCukdJAdmtkdUdXeLbXsv4MbHLm5XdmQMP2ib9oFfNvLPsTg",
  "key38": "5mWkMTrnk4ViajPvA19iZDKkQJEwDqXMbgFDT8V1TkZsLwFWCRQ5YT2iCWmRZQQYsa2UgMwEsn8MYwD4UPPN1awX",
  "key39": "2xhi2o66u56pz7PuVKQv9T6xgHphdxUoQRfWJiBNgSb1tNKCLnxxLUzGZ97S4AH6R98BQDDrgupetbEdfy3hAymD",
  "key40": "2h4bad2vthn5HUGXuCXJJwXGyPQWv6mj9QN5ZogoVtoeYzVJAXdqKsfJF1RFzvQNNqEcSDzPgRMcXiLfFRk8yNv1",
  "key41": "5j2LKAqCpiao2ziQbpapMAjKj4k6c6N6SyBkuCiVK1FqrSP9YZGZcwWoMiCaE7ct6yt3uTy2Fm7uMf7NsNdnLWpA",
  "key42": "2T13vXG2Vt8i7uia6zDuN4tWr9oWts7jJ7kpGTYTHpBEjsXpsWkXhVmXp7W18oghGhw8mshEvWGgMYHXxLDDGSTw",
  "key43": "5gYtP3p2cNJkcmfDftT5uXXyBiyXLEyuyPfQXPSoGgxAVKmovTWUVdnbfC2Ha4PMQq7mXW4Rhzi8Cvf254z52wYw",
  "key44": "5ZABGmQgdqQ4mNe9ySVVYCx5n87mevCtubApVHBEbZLBHZNXEkWY5An6wpE7MAFMfMqtuoJ6YQx374x2kAhDKxQ6",
  "key45": "6Go5LeUZMFqB8RFAS9XLJFeEQxWr3Jg8tBtxAzpeB3VkkyCFdoCmumKHSZiWapLAgeaN6VvQvHRN8RtvEYTaX1B",
  "key46": "2efKHYr8q6WyMnSdCQWdq3CviEeXR4UZ6nYwij3F1wK7pGt8tE4hhDFvKH9Mscm2aNHsVdfggrpttW1nXxSCF8x6"
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
