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
    "23AkCKqLMVYTQ6bZSB5Z4s2vvUo9R7euDu4vFLaBQcSzUFUveFDArcX7oUS3feyvEqqowZYvgyv6m7UjFLjgDRgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hhnPx5y7RZS5CA4WtC4y4rkupEGa4L1aVdTZEtwXgGG3c8AHd2qbBr9znddQTRheRqEEN151s5Px3T3aN8eNwut",
  "key1": "4y8VMdweqePcc7w53TiFnyqJtuM3E6wgdQwjWQkyzEZX9vxqcGKnEeuvoeMaSPzxueodmZah8nyvULov3YbwmhDg",
  "key2": "2D8J4z576avLBkVG3bAKstV1EkGVioNh7CTy4EUyySm4SNCsMVxod7yPehLxjY7nFumwWqsRXEpna3PR1bYW3ri7",
  "key3": "2E7y8LQbt8iyPMxrf3G8CVzWGTcHsh3xTLeiUjacaLca54fVkb6HhbqQTzDEaaBqEyXq7J9MVC44KGCPgxam8Q1v",
  "key4": "62peCqqPdR8yyKASFMa8LFAQpRmKDxrmDvfdYFRUj6TgRHAPVbk58J1GKXwegQ82d63HVB19hSJfpVH29wAqHtzn",
  "key5": "2QC1WGzeNr37kQuqRFjZNS8sdeFDqPN5GEBUN57fTdgJKJdegFSQgMdDm2jttJLJPZ9HgTEHnaWZK7fVyE3uoPmt",
  "key6": "27uGmeYN1Vb8MPvBvNXUcwg1MX2EFGcdtPeJ1HgNrBYTJMd4GYEULauM5FE3C263i3fH9cKSnDyybYqJp4x7ASvp",
  "key7": "MqVzzNrhXfLnzYY5JJ2VT8JRTt8gQx3nEJzqfrVTb3vY65NpM5uuxBhqETDy45CE5fdTmDQzzYTYZSVXDsZGoCu",
  "key8": "3tTkXBBBxQ4m8oz4nBNTr4BfFxC6RMh5NnXkF3swxpJxF694JNUHrD5uGBUWbPYYtwZNWU66ATCBFC3WMWMNtrm3",
  "key9": "4mhLQ2pjrt8MXpkYB8RkpbmKXUQ6LJKtqYGqjyhX2N2bMAeB3vvy5RWjDNcQNQnm5jYY8om4xYxTNUafnByYqGUk",
  "key10": "4u2ZuoyPHbkcYyzRoxVQbYQzuEpVUP9jmctePR7mjkxMqNRfPTjpeJ5CaiiNM4V52qVzhKnNbiR7V2scggmLWFcH",
  "key11": "5bpQRjVudqfwZvpsR6wp6fX5E9XmQ7mmJZM3jmRjZQcQrsyJzvNKQThqjsvwAkP5z6oejXwJ2vKX4AV2dEzauoKF",
  "key12": "9bpiPdTzHPpRFRB6K3oJGRpVU5xXJveLmyRhcHdsLm6XeiKE1jRNsY3wkc2rXgmfJbRDfX8GcN6WYxU9Y9e38Gu",
  "key13": "3BCteCRTMfQKzyyxuhW4dobdJqLSMUEEYetNZf1XeWMYfV6cx29yPD4uVz7tPbjTgurtcJ7NqbMbsyVWeAwUFKHG",
  "key14": "39tpksk19RXPSAnWWUrv4EiimoxSHsxoecYRNGfkhqrF2GWi7a6j9LdBoenhFCgpjt2QroLonA9NkWwNmzGGGRB",
  "key15": "MrkofPNdtfDvX43vu9NJiG3XaMWUA1FhqtXpnRRqPEVAc6S3AcBpUZymh79ZwxByWvpzj6MWocanURPGUX2TRpx",
  "key16": "3gJWS1SChwsu4XXu2bAdnPNGBuiqk8t3554JbQsedEjHPyMNYZT22GUufyedrtNFBrZg6s7MqEMgnEATXbm6XbTD",
  "key17": "2Rr2NMDGrq3AW1y3snnRg9sUDttiFKQCgKsk9afNERLvcpsNeat9W4MAusNRdsRu18X4CS6HkTy2uFaye64DQDpP",
  "key18": "36gEJiNxjUeNL3ucbUSgGK9unebJiocxWSES5T5NrSgE9T65t284EypqW3NDJeQMJWa6MPVnW6mKsy4TBbdgLgwF",
  "key19": "2ds8eoPLrxbL6mjjZCPPvhykjiCq1Yif5ip8dq8qqjey96ZLFJcyVua4LMAUoack7e51kGSyyiT4cBCRb7hMiKoM",
  "key20": "2k5PehD73ULHsFyTxh7UoVDSL9xrFFNjSgwL2g4ofTg9KWJaqH2R1kbJ3fReei4VCrFHMSH24y82mRPkMrGbPXnB",
  "key21": "2M5AMbSbxWX5jK4sDVVxQbcjQz7xD7ke3aNY5nt73TJaYA3SwpekpfBLsnQHmbMLZjGgrZZCQAbXNhVVktMsin16",
  "key22": "3KD5GptvJUyb33pTHwp1AMqzYgGMRy6Bbpgm3Hq7M4ARrHBt8uxXBfyM3kkNNmmYf8RGV6wep7tHPRXU5u4EFpZB",
  "key23": "4KGMqPZxvczJsc9cwU1a758e4ChGea4vH3DHdVaHoAguGZKu2nq1aJtrNSSuQvoFmTJWNNQx4QHqxy5NcwRRY9sn",
  "key24": "3wk1wwcu5GmipJ9CVZenBorNqHHhibS32mUt3K4wG6kcxQ925aQcGbwKJpctEN5KXCTosDqEgYEkB3Lu9gtE1n3h",
  "key25": "3vrYdsihT1fw1bG5eVVxza7agaSWDBmQJkeq1NKAZDR9Ns25myS7efkLcHEFuMzxHEH1dfuwz48kkMKsVbFyR5mi",
  "key26": "4MenwWRkx2DqcTMC4cacZZKEC7DrJofYA4qxwSBWzxmd8ksoDH3hN8KwMr4QCywdbvRCAi3H7PfBcpnH7sZ1r7xi",
  "key27": "63f2VHaQt6N815VqNdoYTCE5RcJRRk7JQPQbPbBSf6X7xNfECnNS4X9wUjUmSWEn8WCNqgCY3PQQMDgyEQttrRpL",
  "key28": "t5eue94xsBypUEWJmoSzxrsrQk2RV1a9316XKo1fB2QQNBNpEWnQsuShxcBJs4nXKcPhrj5fkSRaoSNcf6kGA76",
  "key29": "5Ypuq1L5rGSLUoPBWGuK6iEDenQSzdcrQfb7iLA7cHviBMtaiEE9rQ2V89BW9STdgXDLzhwe11FMcqNiQ9oT7Mu3",
  "key30": "3o8CY7kdyPhuGBFQZQNCEdEWkBdWAVsARovdV8F5c7KmQARu8QqH2S1XAqbD8GFDikwB9XkC16MoCSTArb1PP9eG",
  "key31": "5V4Q6kcajY8z5k8Thx85sX8GTviBmyVgKmKomBmz72ZqSNjsybYFc3jpnKTRdNkWmch5C9X9NDr5eHNWxUBmaoe6",
  "key32": "4pB4yw3sV5D7W79Y2F6gu66J517yyCWXUFENAvvqLmAsgRmemtEyAbq8jyBbm9Uvt6jJw95Y9VnishU1TGrrN9Ym",
  "key33": "wNwCBB6h31df8nGnv6bocki1VPGgoG5KfrPKLCGM2QS3JE7JGbCMm8pe4WHBw8mz9QEjHEaNU4QqgLe4dA5HuAZ",
  "key34": "65F4BzWZpBsny11SMJUKUg8mdZ3gZ2b4WbFyhuQ5Rcpio89SPkKxpwnasEfSvgGAqz1ZWnK9vAirdTCoVW5AouRp",
  "key35": "5BWqCR1SoAL4RxpLujtyHipSJMLKS2uCFgQzYQW63ZGwSkbNbhn3xM97hocf1jqGhbsrpQ2q9VKchmSXTwwYwyAM",
  "key36": "SrtzBKMfV7uuzpy2TTiNH7psVNhvcsNMTvFWKfKWphKrHphHTW3fQweRPPkBbvUyjDfQ1erP28BDEZF4ki5TCbR",
  "key37": "4xQCJWvpM4P2PdxuVfp8Sn1cYuzdCNdG7JGnMpHpdKqn2BXd8F1aXiaj8gjyLHn2miBB9G4Wd8S4iPczxCHsxJUX",
  "key38": "27m72zk4TEhNWxoqXktTpZ9b3t5vyanrNs8JBoT2ssH5cFk5wcJY9CxmaejgeiJaACedEKgocrVg3MHZud9DhnDv",
  "key39": "yQVU7r5JgjdWf2MfW7jtWxAcjJMQx8RSBtZWHdUi1FtezYKzTyanVsaS9YXTBCNpTHKpEVUSLN5tffkrKX97oVF",
  "key40": "4r6Bj6Vd5QsABSyL3QedMZ453vwAzwSz69sGZLQL4JVEz5hSmDoE4o8A3pCU3eZv7SC63aww2d1W3pRBmV4JFKAR",
  "key41": "F6pPY6A4P8vznTt39w1jszRVadrqbw4ZAsPcV9p7gbbWR7puWTFFJpJpmmA3mMqhXLu46YQCpr6vS7otNjoFEyK",
  "key42": "3sWnQBeNQ9a2FPdNfc6mLKNM546bf4P4DFiRbMUyXMZjXEGDE4fDBUC7EWvgqKyjpX7W1ZjYe3ZesQRdLQ8vJmdq",
  "key43": "2X6mnMUPs4P95pzAKHGctSvjBzMr34A97YYxzKXYMWGttyi7FapUXHPqvYFBubpsuXP9uDhBYkMYfNimhU23Merw",
  "key44": "LAdcPktwqhfzAkicATD7j73h5Udj9j4MJ3sVvbpGm17Dd8tuxbnAuzcbzobbmmqLzydGftDsMBJGsqUbsqrRT2r"
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
