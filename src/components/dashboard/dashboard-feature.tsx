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
    "5Mebtdb27y7FrKS4MVyuEhKJTFvTF1RUK2SgFRa2YARE6YNbbYCcU9LhW5J76CCUQjXaEZa4N1Ck7YpQVszo8kBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUfr52aqgjutNMdqQJVHkUEWbRzXzXySZhj3EgPxBDNtkYiU5nU8VyWUiUbr8ZM9FrRkPgtw5GLdVfiax1jkuiK",
  "key1": "3gifBU5aPMuvsNFkZFFryKPUk86CMEFoycMXgp6neuR8cisVJrLgBLAws5XP5vegjTmiFw4LUyaJByJ4EuECnXGc",
  "key2": "578pbkSWuJseNGKzpFVDjvf5LZ2VZDRTpCg3Y6nyyE6mLCHn1CYStuebz3JqLhGK3UYaz5xf423Rfd7oqYu1kmFU",
  "key3": "3otQ31kpqTeBaQahqYZcCXho59fYyhmWhdYt8QoM8rg85tRvjfqtgDQ5FfXsV2iG1BwcZgVHbAZzQ5PW4321Uxt2",
  "key4": "3gcJe8DVaF944jhJqQuw1ptgc2RYiKdz1JnWTxAJf8DbHEtK2naFaJW4iygUdPPJcKqSum3mPEZxuLbeZ4PLaiwC",
  "key5": "5jJKdZ4ZpGyCLjftr8qkoFQrS8dLUxqHbaLkiHnuKifmmQ7AmBapL44Tdfi1qQYfSDzyPRN4AR8ovFd4kS9xCQc1",
  "key6": "4yJuQMBofD81pkMV1coe7LmC4qqu1g5gGhFybbCgxf8yCnrEFEJ2d67rDRU46tvkAnQCi6HPB7fEybpSAaEGwq3r",
  "key7": "3D38Gd6WTn6hPZvndLKDuhSi3PvCFgLjbi53XpAkPcXno9V1euyXiiV9YS8tffTFMNPHqVADkJsUMiifanpB4TNd",
  "key8": "6YhiqHtzBfAMsm9gthfHR6VfPTapsUpuASRgYRhe5miijqK3ZYLFU7UpJrbf4L8aTQP4SD8EcUVn9bgja3sPaLA",
  "key9": "5C8BsFegWLJpvKK7BijvPV8rKSaxAknfwASGXFr5mAeTsBdz6EaeecTE6bHCeSNthUvaN7E6un716HVtYwJgF9Zr",
  "key10": "46NRBtUwWYGeGU4vUQqprYa5KY4kDwvJ61hK776KMm4m5mEEoXHW2TBSHhopLJc8H5RBpLmUqA1JLkpw8ytxCUWm",
  "key11": "5xm1g6HphZwnTyyRuaPo2t7MfMU8cBj1LWik7dV8f4p52jnguk48EbqN9fivqFQYn9kRPit56H4qEk9WUEVGZBL",
  "key12": "5PKGLrHFeVsQHMFCEqUinkbL988pUqDsFfw15i37VJg8vxZ8fjsaiVbdWrMtM693XZRyLwv1qHbSNEmRkh3RBnCM",
  "key13": "29XAGcXi1BMA9KnaztqvJpdEeMq7GKJNaf7XTkr3UHSc9eh74Nagezfi1XPKCaZL196jz3kMF1gDBufXYZMtrqNU",
  "key14": "o3vNqM9VpSb4oNDrsUmcK2hHcUwyT4sZdLgSR1DSm7VeTPck7BHcz9t3SRSjf2jkYTAo2dy4dB1gxt9E56y4VcF",
  "key15": "3UJx1BEfn16Ae1znASXLY8b27nXSHVsk7zybSV3u7THKTppx8S8URw4yjzZTSAEY5rUkq9ojTrW4mQSykSCpZ1sw",
  "key16": "MmwXtYBmEUensnogvKZNcKgnoa1r7sFe877uVZNZYkzwYg6vvnLU4FEb6pU3R8mrrwYcfkpquzGLegeMigEg6KB",
  "key17": "MXL7VXEYSDB5347xLttJS3aufPP9mw9ghAHoy72wtxoHxqWQvG9QBxkhwMpP6vba7WdnePEmCjuVYNa7D9dNc55",
  "key18": "4tBzgroxff3ju1cGYzPuCKhd8tH5K1hZPoEWsiMeP97TJHHUoXVGZLUqahkjMfWn63sNUP7Ao9cxSzARrhLw27P1",
  "key19": "1212WV9iNxYK57Ts8cg9XaMReopcaczqv9CR5x2C7esH7sGQQfNbQqpTbW5yPDrk5F1yzH2SjQhdMb7ezvu16XGR",
  "key20": "4uC1CRKxTiDmnpKjxVFCiufsiytF1RzvjXtnMskt2XDbNDCV4mARzQ4dAVVR1Pp2mDnNTiRGktmhnMB7ZiDz2ANm",
  "key21": "5jTxtLYrzuuxSyfz4SvC3Vhz2EqxLQMcQTySSCfaA4Q8YKFGNfLKdhjG8kcA2Y1DEaHi5XMh6V9gVcCgnzC3igsA",
  "key22": "PvALTL2W4VbFjRDLk6D1mdu8wAu7cXw9PSSFAXyAw5oD5NbHiZoHobX7q5cttd9SuaPT6DygfHZSW1DGsZsqutP",
  "key23": "2jVR1ibUdq4nfoLXQYKWDowwWU5zksG2FhzgcbPXCbzzUqLj1iTpwrVUg59vQrA8Nz7Y86gPMoHJyLT9qqgN74v2",
  "key24": "312sC7VPp43Zrczr8aiBjGut2uNeiSFfeeLHAKFchVSdxNURmrxvTBvbJRQybHc17GPcxoiKaUPBKWsAL31m8K9F",
  "key25": "2AhwJEobdF6EpWknnuA2RboKQhtSRB7Jr2p64RF4KFp6itwAg63nUsPeunMLkkvR7ax2cHk26QYDPAtLix9sMvX7",
  "key26": "27AgB1MSPxRURFpJcTssXrstuwGnXi1rsoeEotYX29FELPpkUoeaRohnyoxm5o7oo21C44HieLEj8j4dtqcGkEta",
  "key27": "pfnWGJzZD87SeE4moKufUbuGh1oGkQnszfa2vxjDkFKhaDVrq9TVDity5nz11FavSv22HR3GKuo5Byzyrqp4dd4",
  "key28": "4Pe2S9adA6R1BCB5vXRjm2RAth8XHBfZB4G3Di2oKVPiT2cw6B8U77bJKjnZqT8y97mZgGnUPpCU7zNm4SvHd7kV",
  "key29": "3MmbC36g8rxYPWNgw5B6Nh5JqMheXqHkm6aHGUXxeNhRUJC86Hn7DDTVgMdcbnCnEEi1UmMRQ45PTTdQR1ZPjHUK",
  "key30": "SgLMpNXN8zrAygMo33weJSke4XnMsFYfUrtwWrSRtvYrD6kDngWU2mhAjU89h39ByGMP7URPugQ3ajVqeFTz659",
  "key31": "4bModJNqvTdjQbgi2PByVKkyYQ8JMrKqM3F7fmhHSHiWriEsjG9PDvHWd68QMZXfxPeXveX7dKQgPexuD8JJBQPv",
  "key32": "6kRbs6THnLZ8uYoTqCN9z6rgeMngmv6qatnFJAWJhmPj5VpacXCiUwZVEJjfNLwYtp6T3kfUgCvUhKjyJ5pQkX4",
  "key33": "54Pa6ppcprpTKbvkob836qP7gnHR7LSLsCj8TzRiJnRBQNPkxXqgzBMgWELvvHZ5bG6dMJ6n5P81k7t3nSM2Q21W",
  "key34": "M7A6A1eJ2e33HkQNsSxwdUqffwPMu8NUDk1Wao4VCfJx71DnpHjbUEKiak1aw68Wbsf3FbrYuV6hTkZKJmdygcW",
  "key35": "5AU1dYEu3aotoCTigqgwMbNfCzFckPt9YxvbTq7ShBB9U8uXxtbop4LLW7a7wijkRovJDHvkj5nN4kM6A6V6prgu",
  "key36": "F4JwTL6KjLAbpUkjdQVtLXcgaEZGyB6XC4PRDupUr4y3G5wHNzGvazwQPTBptumWuPNQim4pS8SGYec8eCZr2UY",
  "key37": "38x2tcGG6tg2em2soiewaPbcSJLGLrdwGtbyfTqAzQzTE71GjjTeinTFCCpWJVr4KyDhUCLGqNUEWAaCxCrC9vpK",
  "key38": "37iShae79xqoShWUhjK6bx7WiFRRQjRfzBwfPHxQ6ebbp97CTk9kohkeSJrh69A6tDXW82496jfG7t49QGtR6K1v",
  "key39": "dLFhc4WCgowdkS9kRJ5giyGx4m4kW3hByKmSouTMxFbYNP3L45wVcusdyEA4dSxg6y93uHHA3xAuyzTRRdQPr6F",
  "key40": "z4cdyfUC2nXA82zTokt8YGWf3aAESvfVAAPjSREbMVspYVLpEJZAon25PAeHHfuzS3NNatE585tWNJySYneQ6A2"
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
