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
    "3sc8a2iBTWrS2j23hWPrMr7KxEgbn4FTzprwYM4dJTX3LU4aefi5vNvErZRJovA19nZ4F8JbqZymiMBFkapddURq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LmpW5vvU3t9AyWaX4PL2bVTtg3EVzuMhtTof6UibSdMFjNjqo4Dq3U5A2fNS5JoYb8CaPrgsC35YWKdcVYRZMWj",
  "key1": "5CVjj4Mo9bMxHLjEJ4z3QW6oje8pbuNPHq9PP1aDAy7CczVapei3f3UNXF7BUsSuAVCJx7Wh8z1Rh477AiqtmiF3",
  "key2": "vxnQxDhEaTBsmJi5PijDDc1zJGpG9CEyrUmj3mVgdzJ5xAMBqm6TEQqfCCPXtRJpghqe2KqY4KcokP6EZ2fH5mV",
  "key3": "3NN54CZrboG5Z38yVrE3JrJNpeZyiT8n9B48je3Fd3qU9sSSQ6WfHdsPHpm5HmxbF28cYrpAoMVo5G2hYUDx2Ez9",
  "key4": "31ThssxnisYkNkjfjnJkF9P6NWoL6epc224uvCPGZUoJyVx3awxewGdfckVtcc2o8zeNznzQoVRW2Xwns4U3So9C",
  "key5": "3Q4gv3xAZbxCfTfc3sojwDfm4Tu1v8M1MHaDRYeJQsJT5Av4Q6UBAXgKZ4MMyyqjcNSDrm7DdQJU2Hf3oapTyN3K",
  "key6": "3vHSyDDQYFjkqxk2NCjjxPUC3x4hcVytW2a94dEtwrwaQz8nUmMe51wJLo37rkztAxKihfXwdJ7LGyzafaD7ux36",
  "key7": "56GCTayQvKoMsuGbcSwobpwr8FZNbwaSCm4aH1LJvP5s1njfkBVJNzVwiRqxUbpbCSTbV22DvTQhWPTZRMAaNCUo",
  "key8": "KajxhpHo1CpAH6ktJPiYtx9dw8c6J44HjeNrC9xTxuTynWLTgzfGejdHt9DHuuHtWey9ZzRFm4exsaDq2vKY4yB",
  "key9": "2f8Mp3ww7Ki1LN5FHXxFpX1kaiwFQhcveazK6kcfssAEdhMJo2QVL9FdfHUZJmTM8HNNsyk6TA3aKZ5SGf7z8u4V",
  "key10": "2EVdTrdYDjwQuZuoA398TtQ1i1xcwHe4c4QPQtbvNsfNVzydKqVxCd2jFKHoSFqtPuWdBTrqsFn4k9qLxjv8Z7gv",
  "key11": "3fmt7yo44zouDMXFVAtL1oqQMyuunxDK6i3HtJY9gkxSCXADVqwhoofmMtkAKUzmeHWm7W811itauQdeTymPX9PE",
  "key12": "31nqGsHbB8WQJedyA4h8WLDLURQ8fUUiyspTkksumgCkJrx66qxP6oGxF97QaMaoBdBs3vNGzzaKZ9RVMURNPqng",
  "key13": "3JUjYJTB8F6E7fubMpFwQT7994KytreaqKicPW946ZQP2CsFpZgbdP4ueZcMVwmK4M8cc19GU7SJM51XrxKS4Lsj",
  "key14": "28232SEK6xAaAmKs7UnCbg8W21pP2XzGPnhUozSXMtsvoUMGaEMgbrPJHNdv9aE9cZaoHNN6fJdRUMMF4wid6QWq",
  "key15": "5jYNopgua3xJW6qFR7Lu7LAK31JyUxwGC5sSWBBiB7Xdvjgu8J6QDrZ2VHuwzGQcShC9WFfXvv8qRsc4d3L8XscW",
  "key16": "46fSLwjeApf2zbf3kiv25ynCw3Kv7y2JeHwxvwptybnwK5Dq4jPPsch8QjmpUEGsdLWmLnpopU59RBgJKz63HRad",
  "key17": "8WcsdKTN6rCoM7cJWFFVicki8ak8AJdXitqgUDKF7hMSnpxh293cD45qq174CJYVtuW3mF2rzEqPJ1PbCy4cinC",
  "key18": "8vqusywPgJvfXNx56okmsdvEbdXZub2M8p4e3vkPxWJV6siq7jqsJ9V89eNZPg7NybqSaJ5SZJQMTVE1oDzfPb5",
  "key19": "213UCf6xur55wCMamPAFfDnL318Z1Aacd2eiRYCRKKxGmotscYaqba56ruCGfnVAEHL6GUA32zz1ckyq8ZrCxpmK",
  "key20": "3maLRViH6L5cSaDZ5FuPaVdDKugTXBgna4vUXwYZnUamJBSTF4mjNiTtKbY785Hbavzxnc7pT7nx1kWjAgdrRaZr",
  "key21": "5Dp9KbFpaun6pUqRSUk3U95oAYvz6MokpuDDs7AAvpLdHNi5S4RLow7guzHrz38uiKXQ6utY2gZxARfX5V6xKHuW",
  "key22": "4s7fzWqMrBakkPeqsVWt6eYHkHKeqrpz1HPbmVvieYFdffBm1YEo5S9DR4SGMmJ66WVHZjuDgx2nT4Bn7asPLLyQ",
  "key23": "za6CuBGEA1Wnfi1tKarZc4QXi7L7iBdXF9b8682Y1Box1WgNTr9eTJrf6demkuYQyC7BadLVCXqWQFyzfBD1JDL",
  "key24": "5E2PzRskviNqmMAt9TjGpXPeJGVPGFGKDxCaHL7TBMHeEuNWDoBtoBdvzpHTjEaV2f5XwiqdRrZFy1BE2kJRJ4jy",
  "key25": "2Xx5sto8eqU1HdKbLS1QhqjgFzKDEykzxHHfckZKXHYnJXkh3dQSvCJEYtD1GBnHBAMpmspUCXVZeWpH9BzfbGLN",
  "key26": "3Lg7F4jk8uR8G6Ynt9ceimSeV93He7zRnDXGXuFYBVmEvk31VSz211yz1zF6EyibZ4ZPfkpQKPmGokCz71mTHQ5w",
  "key27": "29EqZXoXEXzp2ZMri6ANi7fiTtXYdkj1CMmHjEy1PJBFQQAGRFte6mQmCu7f8asYdKMKm17PavxQcuaZPJmGkMxj",
  "key28": "3HRfcP9jQNEJrW92VS1aMz9o7KN5xRiaJTQM6czDLJc9oZQYkCqPxSpsEtor8PzKyiH1JnTBDBjQaBPdtb9nns9F",
  "key29": "YD365sphZqRafC5uAuyrQCgDjdheFZkqm95kch7cmp2ps2eE28DFyvDJyDjfhQU6q5umtPVPUQj914xhFFHUxrS",
  "key30": "4U2gGUABaqZW7MMzTfZjCvnWdXcUMNXQzQvDx7YnNnKQ8zYgCQ7fpQy7GBfPoJP81v6kcZsk1ANJTvNy2AL8pZ5o",
  "key31": "5oPt2GQSceqa9yWokEoC5NLk1TbTtByduPum2nyPPi9ZcQaMA8978vUr4UTo7ViKMR7Eog16wjmuvAidLYrCrvm8",
  "key32": "3RBc5RET7ZvXeA4fwmdxxwNKo57A4DgHRgsCM8YdrkkNiotxQPmQq8xxkHsSRzzLr8JsG86qrZ43Xxy1mw5SA5hS",
  "key33": "rV6dVBEvLsTnjuCevTjuSYjMipxgWfXjjXsiqTHjNgT5TEK6KQC46hqdqi6c8vRv6oRmgqAkExoBxAggbMSA123",
  "key34": "4TWdq8ff4iqLeRZyxMDN6KAo8CHuaFecioYBCGPetYa6HEdTrx9J7Q6viHQD4BvVswDmcjXsJ4nQSrtTemMXZK81"
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
