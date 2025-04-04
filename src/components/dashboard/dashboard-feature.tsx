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
    "4eU6LBB3h5yGP29ziHbub1mR9xcFEbzkAkhKJmshYDYbrCVW45PYSt9DTFehK3TDUPSzQDbD7ND8cQ1kH17ZtHK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgcYsn1ESm5Yo1jSsfN68fdmTb9GgoBb88sCWtD81JE79e599WBb9jcXtehyHqCN56HnDfywmjJnGxa9aMR1Snj",
  "key1": "swwHA2RL9NgKsj4JE1ZEzpvMzmmhGbSrLKwGoySdvB1t5t7zBSW5cYr6qAXHgFw2sVSzXXemDZFRAHUS94mqsii",
  "key2": "tdHqhhZ2kbAfVPLkVgP8fu5BkB641ESZ95muNTQ9RoMHhKv7tUBUvFBunDxWpqsVG7CmpbcoC5NTSyK7b2TNde7",
  "key3": "3HGN35wLzmBbhQwxXTTqQEobr1E8kcf9Ffo6u3dKhR7ggwUsoy1AXJt71uXuEGqUZRUKBeZZWZNJKuvhXEk6ELx9",
  "key4": "upPjgeaF8kHJ7mSN4z4adP4q4rbhEcfvtfpEtccjGWppDAHWDEsuxQttTnx3vCyWi9D9svhXmdQznEpMX2RL44K",
  "key5": "2DThvTBoMbHiFu12NGDZMrKfBZpBrNT4aaruegfE9qwjwpVMDTH9teGn7qqimFz3H8b2oz6xYYe2XJ97j7rXTKgG",
  "key6": "5SUvAYRyrQ9TJ56JMrQGxeynHjrPXhLA7tr2zMLH6JVowxqFtdRaDPtbdayzoHW85E74ifwoucb4oF5dcv6Lvq2k",
  "key7": "WqFzwM9kCmyaigdir1nzG6Tpv4gFXa3wWK6kKkExMsgJx7jzGGyZoiWGA2mfPixvcCWyHzVGJQid2vVFU5PpS51",
  "key8": "3Nfce2iRe57AfRZhx7jJLYVneRxA2CGcvJLRU3Ut97TmNy7nZxVgxTT7fvptaHtW2UnU9WBnaB7tscXNiw6LSHDD",
  "key9": "NDTWoNiNyrmAKsARZz3ou1hhcyyufFQjCibcAC5TqUwx4r2MpZBvWHNzR2CnbcqxCkC811j7ABndM5XCXSXe2B5",
  "key10": "4EAYve97AUXnXT4BKWGm8mqknuNF4uMXPv7VqV7vLNTmGwKapwAc6HMhw3kGjTgnreen26x5jXeEmTMRajePUA6p",
  "key11": "4drARQbr9T7qT2Q1mfAJkgPgLBCnC8Syb15MiE6UJ4FDVCjxNbgu6c1eDfpQKNY7pfges81ChQGuseMoRRDKsAFY",
  "key12": "3LiW3gNrefSK1knty4zZnHug3Z3tfenY9cFrutDUf9fKRVnAmoJT22wGJzJCEpNSQfN5SNPE5GxHXuSRyseGDVAe",
  "key13": "5utkN7Bj9gvGfRWZSFGx9veH2pc6EbhqgvwgnG37o4RBSaB8KHLzSNVHnEtj84KkPWCSLx28xeehtUdUd13Se3dg",
  "key14": "21PhQawYbddJtujHTvjRTbt1grLPtMSomtm7dVbDfzGFgPxBWXy8hnBWJYuLvZkUAZY12gz6YNsqE8kukoxtUam7",
  "key15": "v91g4d7VW84rV6vpKzsVSSLqMrSE5m8AcZTFbp8u8rqahrT5NThxkevqJSaUfdFjB8cTxUZUwQiVSzoFujkUcaP",
  "key16": "36bv4MMnYcRAdh8YFExFAydbXzx6BFYUq8tg8pY4tLiDDzdngfoPbFH2TsAfEF5ZLMCSayFjiM6aC3p76eRnZmmY",
  "key17": "5X1GpXpSgvfhgCHAmM7ffVwS5R8xLrojteLMyrNHX6dihQn1nXb7PuGGT7hVXv3un4EaF68tJHk1R2WnAAkatAtZ",
  "key18": "5XzXNW35GMKwzNJrGGqurxdY4ViqpinjBLUGzrd5DtAJ7YuMqsQF2DrhrGXiSS4N1NTMGGf8nvctKhfjQwRWAeHg",
  "key19": "3akt4uj8S8HKdhS9zWKeQaogDxKdrzn3DQLVGafcKF1MVcfsamkyHEaGGw1osFvDatyf4ZecY3M88jiRh8aHrafQ",
  "key20": "5HDAn7DBAi4tRumKf4HqXHpderBXoENJJgNdtrjde6W2fDYwWd7C4Mh1Gb2vWe6TeZivJcveT32hKrMiKTuDGPbP",
  "key21": "MEsdcWA5J6FxtKK4kEnHUXXEmqR5srjK99aU9Qx99kX3wBRiJEDx6WVtyWxhTxEztyYDWdbps3sUU8sDVHkJfG7",
  "key22": "2WMP3Fdcdms6upCXy5YNp8nPVWWK2wp8BYmLdycMcSesvrszhovtKn44nikUK6cNBqYkNRmAS6NWZ8QBReJFreki",
  "key23": "ciASyQfEngdSg8QRiL5aizL5kxvjCfJTLnoRmrQKd3CwaxhGhvshYRbePkNfHtG2xrdpGTc3BjdRQwRRL9wSBcm",
  "key24": "8w5L4SA4FYbFnDD3BWVzwrFFditQiYuaEehUtyfHwhepjEF9uoCsdu1VCY9fELaBHJrpmspWhry4WJf2FZqQEA2",
  "key25": "CL49h1EbpQHxjGmYCUNYh86o2gRimCmDLeDSVEwskhDmaP7hvBPfVQBeJ4mxxn6kxcVuAeWgx2w9TuRTF6MKkZD",
  "key26": "4sXeR65oPwbnahCBkuHs6jUJBBaFmbKa758q4hBwGDqtURPGFcFv4DoNPVzQdNfBg2eEa5YxYkuKCQSmVDr1ViEz",
  "key27": "28A6zNo8fQZzenES7ZS3dcXnLaxsUSxNrQTy8uHchQwsV1o1g7UpsR7t9MUZ2NFLSTeUqhu7g58fPrLLsqB2G4im",
  "key28": "3dJpW7bCeW4Ykocz4k7ai1ioCCfJ1QvHxVV4J3wNW4RRVYNWQVFnkP2Md7w6iMcNgnzQJrd5J2emXvWk61MaPi86",
  "key29": "4GEiJLoxc2B9Gs7ANdyvxD9P2LEg2WXoZ8NypXsQYnmw2Z1giodnoFgEYPN1zzuK8Qimd65ogqT9SocTAawEhdDH",
  "key30": "3kPrTryszjSPTftJJm3gJac3ZeMZNVP3dAJoSAdYRUYhws7NbUD5XJACx4GwkwjsF2nyDUxcw5UUjs2Qvb9qjrkf",
  "key31": "5Z2yv1GACwUqtayDv9ErtdWzJGynFzeFaeJq8AB1eQi1sNT6c5avwjiqdhzEfxXRCZfF2LTFWmF6To6359WrKDHr",
  "key32": "2G5hKi4Pm3eP8TsjmE6X95dYrJpNavN7FwtU85ZtBqdtoxqvyS4TSjbJMkbQ22i2VnXN8vTD1o9rtUTCeKE8yWdu",
  "key33": "4cRr4iBmuKt4zqXTYvv33Ypb4yFnij1jzyDnV4C2S1kLsmrBcNvsr2PEV7f3UUrda3vRd7jJG8EG7Mf9Vv5v3NHF",
  "key34": "5o36gwxMSdPzJuAdFsEPUwmc4GjWFiZ8MoCYQ2vVKn9wq5vb5NDK5i8qFTyjvZrGszzuWF7qkEFqEMDZja5jnKPD",
  "key35": "diiCUnsbykZnUhVZ4LTrLX43tzE7jpnrxYpFipS5CvduMEiwuD2rRrYr3KxTx518Q5FUJwMWdsMkGc18eBvRoRa"
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
