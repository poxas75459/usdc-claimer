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
    "57yxzmPAF83Z4tQVbMkQKzrMyFVmr7Fz2p4uSEFdvCCcGqusbExNrAWEUtawGV6EhRbkHzjo8qvKpWUYopBGpfds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mKzMx3BtU7fuYCYPidQ3HM26oESkRkKAd8HePgddeKqE4S8gPhkitQpBaKtweudcpsqnH6W361zc7JQ7BUearGH",
  "key1": "rFFHR45nnDkbSgCCgbh5JVVQtLhRSGxxhcNYLivfWBsFXwniU4DEjPiD21RwRUFzjQxRvrga2zTc8WoH5sCFVsc",
  "key2": "35kDoew2i7pNn63rSoiUGA16YcuKfLTiV7XKdRxxwRjkEYvgRajWhpVSA54xTSDM7CvA9cyjL49ktCkyoLvXzsJM",
  "key3": "2wiouuoDE9pJL8mxVXGwALnkacmxcjP3DLe4UbKGtHXf1pTaj9VmsN1u4dHyZCW5bzH1FTN9yAJ1iBdWEJZNFngR",
  "key4": "rjLhsF7MmjLsPtuTGyNxCE6W3fFXFJQFnvY1ZDCG7T3JiKrtmyNZiwBaKBWe6jz73ZZGn1QNohTExjTdeSvkS7J",
  "key5": "2uzbRjrWfaxJ56qczXw3rfkNpwJgbu2fhKBfzw8wWA6yTN2uRF6z8un6kTtL7pqVySF65a8hK3gSJtHLTUsApKXp",
  "key6": "5TuHw36z8CCcE1Dy77g7g3NUjC5uTzxn4QFT7aBTAVyzTyGVGVXPFBXkDYFr94uFjKiXaRvQcvFNJWaABov4vW1f",
  "key7": "4fcaehz8p8jar5AXnRUF2Vpng5rnN8YmdYqPnMYi9rRA731BmLyGRvTQ29PATMMnS55pEgtBhPhNBufiDHY6ec18",
  "key8": "4i7ePxFgcgNgPNTRDDrTSC18ZSyLiSMJFy7hKXzVtiRa2h9bJrDCx56gG4AwhdNgGgpNCnTmx9BzhgHJKkr4kyyJ",
  "key9": "46jZkstdNdCPAQ2RKqZ2EjuRFwjtVThVQgxSpYRm4pberXv9Y3PiSM4TZX6gNWzR5mLj8aiWaGGVeyrS95HyWc6C",
  "key10": "4Bx3wbuYPVKvmHPxhRHxAQA4K6EkvHaZNePEjAw7PC8f7awom7BW9JELfsQQWENZPyMDXexZVTkDHkxv56VuB2nc",
  "key11": "2jPsiHTUcAhjWryR8Yw4Ac3QcJkJfzwLFHm9zwrBxGgfUGZGNhZSDRGMXv7yey5xDZ3rcCXUieBybmxFAzmABKda",
  "key12": "2HPyEF42yPQ72j9wy9WxC2yczDzUvB9NF2qDJyFAu1JYMnscgaJowoCdn3hwqSuCk4z4avR6BeG7MNiNWcVWboiq",
  "key13": "gCNfHZQPdKWedoSgTwNT26kDPmUKz3sTMo43F832kwApaCkQiroT9AbhoHbih9eoaS7t77bn3m6J7WnxXu8u1uG",
  "key14": "5Qw8vg5zpp6o7rEiH67uCBf2RZ1oT1mHbRsSSSodGVmwa5hLCuYjkNpiF18fLV3ZXdtinTALhmv4yKHB9sVA42fe",
  "key15": "3JssPYQG1ns51t4qs5Cn44Eq357bCgFRzFcU3uUSnCTuUgpJ2jAaWBbF2BGproGoSU5GxUcCbfmTQWzVQByPAF9b",
  "key16": "4oYhKM3LfiRArWgZHXTmocb8ADPfMhq4nU2dUR4woMbBUTsQH8TaBnQ7gaysKVYX5WXcqJu4ehgo6BeTx7NkLGKn",
  "key17": "44RnmGiabEzoBE9SwfDw7wA8g33tYaVSSoW1rYVpkUNvoYrv7aLV51mVwhwTAnecCrrax32Zoq1K6F6wWoQKCWvf",
  "key18": "4djKj26tNQ3YbhUVsNsqNDMuxoJUAjeC4MAZk4kt7ia77NWkxUAeWQtjJi2f9kE26yYpK8d5oPvF1wuEMeh24mJR",
  "key19": "VYemjJgJfcoNVhDRYXhRBu8vttApHLSAp5Pk6A1qNBPfYAGPbAcLjkceG17V8D6yybj3L4CfxPR3k8avEAkVAFp",
  "key20": "L9QNuReJMFxyNgDmZVB7LfjvZnEzq9onMbAXuwLt7NVM5JNQs9HfW4wBffEfAkXpG8LhVfDcQZZ1sYpYPjUnZs1",
  "key21": "jGQ51KfAmTtAFvQe9DHBDf7ePhd8D5D2vQF3fypi8Vjr6ZDhYHhffRfktB6SwkG2j7FqgFbTxKs3ap1LHB26Rpu",
  "key22": "DepEQ1EEeF9ZTYycpsfqUhca2JZ1h176owGQcMn4jQ8nAHrULWzd1F7zi2hRfuhyWf7VWcHXWtJQGZ9rQai793H",
  "key23": "25rzs7jpHV71j4LenN23KjspB7unixDtNnQE4jiLdsEhdgDxon7A84jqJmcL17HfsUYcY9BFrpaPTjhCespt6fTT",
  "key24": "yNJEwUFtaZvheVpzV5PUa9mdH4Us5CbfAFZbpVBMttH4a1XuGcRBjJfJ6o5S79Yk4A8TvQdEJfNc7yoDwVZrMPF",
  "key25": "JL2BVjsUaup2dgp2enzqbj3XZtWqq9PJHSHsGCoMLASPHJV3MKZdpzUC67dwHYvNNwUg9PV5GnKKsmDqz8K6KUn",
  "key26": "3cyiHfWXVLynDNgWRG9BEvwkoBPY8g5p1cnRMEx6hc1owtAFGtUjPKRHvdP3pTcSGaJP3SNJ5GUYq8w41ZNpfU78",
  "key27": "2N5xodUHuhHZTb2dznXmfqhCUNzCGazD8NbFc8uVeiKCzsuU7efHcrJovLbLRx2D58DyngpFDg647wcLgf2UUPhv",
  "key28": "2btiTmLwZigY5gQ9kXXBM3wGh7LqkwJLYjakW9ewNxqzWWSDEDorViEnSupWD3H4uWFKr6SHeqb8vvWYUUGDzBsy",
  "key29": "2ngS9SdgzTiQXjB3ZdNhaLSNoDhxs9Atmnxc3fcT5QMU1nAbNMv8TMjcMVLFPuRnfUdoJDwTYvV5VE2stEtAbVPW",
  "key30": "3etfSUrvNxqyQiCXpPgTKt7aeowcYedd8GN581cGvbVp2EirGsGLUR8MU4orpQnUPhrBbt8WdTtZ3MQyc4RMwF1F",
  "key31": "4kfzvBch2yG3vzgjZdPM1ysXdrceBW2117jEbvqPBwHcoSn3TtdrSbmqL6S5domaxSiF9MLTWXDC3L3STtzmSpkd",
  "key32": "RsVCm8b8u54nHxVzkYhvUQ17mFDVWsMnYvuLKo4Z7Q9V3rSDirCAVmNWEre5pPc6PntJ9R2Ucg3ZY92vRneRYyy",
  "key33": "49SB2pFngTqyXe7qurLqTUCj3M2mTXAGMSjsbQUXCyhsgAUV9hYzn17tx2MXWVQSm2DbvxsSMx6tT5HXtBGZR7RS",
  "key34": "3tThRupL2KEum64qHL8viwUhbJG7G4bbQAMeriyxu2aFhC6izUZPb1xjXz4ih8XfCoyYCphioYusZi5JwotMPrdZ",
  "key35": "612FJKB5E9jWKhVCPRqmUzXEZ88UzqRfsoAEkEyVnx3JsyFjfMCNyWXnSGWenCtCtgE1PeBhtbXVeDScPxGyipr5",
  "key36": "V64no7uwrkqSpDQeb47rmKonqpVjydLs1EbLw9GBVkQiGbPjkVAySaBbWVyjJuDSbv21nCNu7L2WmAuGeL2f6FG",
  "key37": "311J2dGEfoh657uqwFNqauKwUmx61yZdUFCiRSGhu61mJonVPoSafHWamPu7YuAY3AUEJNTf92XRZRCjAHqHFmvx",
  "key38": "66Vc31QvHRfrFw69fLjAc9jETUm6iYqZ6knCxsPX89fzYx9kJHw8Hz5ZYd5U2rFXCbka5vV2NrQf47vW6AZFxFpH",
  "key39": "33ddTdu6fu6kvp8AhVjFyxndQYXibm6syiJRona2WnRUJ9HBYJfitTMvbagbrFnxCVEBy2vWtkH1gmLAEMw8mWkM",
  "key40": "Vkb9v7XJRBMRFKuqaecNcu7xWm6cgdSTWGBTzi2WzGRcyvQB2zcVpUFiYyEfuYAU6pDjCaLHB7BLtLP3X9s2xgW",
  "key41": "3YwWJSLAwCRXH6ZMyWV2Dj5v9bYnhaCyrLdz4RZfV8HN3Nuzs4MQ4ruFJcznnBSTuLhW18Vc6txeDeJtQ5wf3nS9"
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
