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
    "4AtEDNzanqwWZeDEHq7BdBPX39zSSFWevMG9F4MPxTQUyKVhkmYTaTfgqjKpzhDPBy4nRQ2S9kbso6xfxegWXcz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcDUinhcWVUo2Ruk9TLABYd2rLSga7cjbcjED2nPT1pEKpLC7czXXSCkP9qQKT8zW1rrmTjKKozAezSEQqpHk7",
  "key1": "41qQ9pQCkvfFak3VajhrqVutpyQGz1rGU4SQCKAFNJtyK1rKaL3s1kZT5mUPUSGwFLdV3LeQE1it893rrhBbEiwx",
  "key2": "2BJiLMHTaKPoHD2CEVLzSZBDYSQv3CuxBxR86qh8g2Pxx3e2dHiCFMpkQFxzWPqzCZFKt9Wpk6o7RBtHfhURphp8",
  "key3": "5ZfXprNP5wMpr4b4gSejABhWuVmtkK7DZQCDTNZNQ2mCFQYTG4bwu2m5xm7ox3iHTUTjbhxJYcaFrzzBxmSujvti",
  "key4": "osYMQfk2W6b4PdXa5ugXWoxb7p2BGVxpTwgc8Y3bakNPHk2RpEKbk5W8LZXYT7AQWzaNjuNusm8KF2ptinDwWqf",
  "key5": "5ZsGomSpwku3gFL4m48j47g2AzHvCrcPvZ3JZswU8Dmf3yyWHocwTHg42zgHZzRGW9TLGBHQerJSfiP3vVCFSdYv",
  "key6": "3hMmKkhrVMVGSbKHFDtAS257v5sLMosBtdXcyJiX8Lm7ub6ZK3NBgg99qrNrfX3441oMtt5BSVGxPegk9nxMp6WB",
  "key7": "27G1ERpFsfqCRvU9bNEMCCjY9CTxtQMLLhxFb3iY44GfELTVvYVQng4dgKn4qoihnqBV5GeJQy4ZZCo9Vt8tuFV3",
  "key8": "2ihN8vDqouRrvWt7xqaqgRongUZ8LQmavJsHNP3apmEBzjiRoKrjqGpbBkprbKJUS4wRo1obRopmuVUWtuQ656eX",
  "key9": "5gqb7eKGwnEtwfGAj5Zm9yQeSkZqEjT75WqBajzaBFisfKomqrka1ae9v3WvW4TySnLuy4wq7BSG6xHBSuzKfB4v",
  "key10": "3R1RJwzsxyMi5BdYcUXmEAiXqqtmV6qjb9R6CW53Bt6w6KJhJvrmmSskV1zBdeWYkKuXGntMATBqtY823DEeQ8A4",
  "key11": "3SGBc9eYRxfV8xgthCth96HKb98ZiZnt7MZ3Tnr8SzcFGneDBzztxvPttJ3hMzfcnrM67RuzS9jkXATgm44yurRV",
  "key12": "3DgPozxSUGdUpommrb5P7oECd59GGdTA1PALnsQ48Tiuni5sfi6YNgwgvfRw8V7iTF1L6StkmSof1msbR4PjsFEh",
  "key13": "DQ2ywiqhBbZddiWRMWvZWVWMQ8z4nF4ARFuy6FZWfstokDx86HK9pHNiqBBh3GLp9ZognwyD3mDPLi8J4bqam3t",
  "key14": "2daN8QdkbfEjyV9fy9DBiwio8dcQYcx6cfGeTaWY7TjyuH4YHHGs4qUitsSbMtSyiNg6udqQa6KD6g1qENkEDUsY",
  "key15": "4Pcd7pTBB9LyVh2cYWVS5aZJNmRTUzGatx6xVyFQygXxraNYLPySzt94KosH3PpHHbcoxPvHBqjrK8MfAjB9Kppc",
  "key16": "ag5sT4UaAfSLmfe7ta5FxufeFwnFof1LyyTc42VeJ7QBK4XmFLWPP5YrY3mmGLFkty2Hfhu1KxWHfDqdVN2oKYC",
  "key17": "QTgtuudeRzHuKb7qMQVHpUa9KrHSFUoKDkcWV4FrJ2nDyhniLBDeV1Cs8nqecjmyEVVi5Kj1tnbth28AgiRhPQn",
  "key18": "539xxojmcdiXf66b6ru2XR2epLR5rQmXdexz6meuYjRfKkqNanTdYG5uBiGX31pqvajSMDpH7RdHN5iVgtMNZsCD",
  "key19": "64sgerBQ13wDbK8SSFwHWXSPcX8bjz4H2KsKXAmqmYB8J8beCUnosQ75CJGCEiCdWifbaeJk67YTNSFYAErSCTWV",
  "key20": "384jB3oaw5BNu9mWV3tz3zmRYstadowxzagM63Hh5VPR5aSXzFPnMERmGgGr9xoeLFwGyKWQbP9Kd2E3DPSfM119",
  "key21": "4AWzEWZ56KB74gUXdhqiJZjwuJB5D8ZxtZbn6z9v9yCd3uinBTJkdR6imh4S2WPejRr2zpDmsfEeHPPay4nvfs3X",
  "key22": "5HCiZfLZ2BVFpTYtGTgdt4FzLrARrAJgU3bDHDjEUPPHLSDcxgPWM5egeVBBRnWgwHPfp6XztAiVAWCfhgYGJ1eV",
  "key23": "Lu5M272jXfLqn4LuhWLQp5K3bxXQrB39pFFMcLzEs8LfUUeMPF3oxATSPcrU8qcXRjSbzWAHdHxjrUTXokmLpgH",
  "key24": "3WoNnXxr89J4BEscRMEq9qCBwKf8NpKyDqd9QwrTLiBNzgxybPfz7Uief1gHXdJ69ScnvGYzD2o1Kwci1LDf6WG3",
  "key25": "5cNYaQ28S7i5Jtuqf5pKGzAXJKpyojpdG3S1gZG9CogUVoqNd6uBGcdqH3iQdUjDp2qSewELaTatzMixVKezVsua",
  "key26": "3YYkJiYyjDUWMQT8bTzXpY1jqCbCf1o3YN5D736oWGNh3Ct8VPSV76WDaYicsSw6MUuXEWGfcE6ravwz5vNPZL15",
  "key27": "BALQrMD3UwLuxktU8ydsdRTM8Xj8zhju1EvPBD3f1K6NmznCRPf8nLNo74XA66BwyJatJJToL7Lp4WfxA5qcefu",
  "key28": "2ZzwdRCbpaUeFMSo7B2587qRvZc5j49QiN2EV6GWCbdpJcLTLoSChvF5CoK2ZZMA1e4VpUZ5CfeTpEREMzRGXF4C",
  "key29": "3Sd74rC3qEn36j7sbSmfisfz3bxxTuP2ynkbc1KY1sdzipamWSHwxb3ssoZn5SipbNSMJmsYXGfwUEWeSV8mB4BQ",
  "key30": "6T3wELu1UszwFq6YoxpTTjnpCj5xUdkegCgPpMVbDbyxjJR8v5dQUjBP2GSkWXYkbcxhLixQ9bxSUu1V8Sfg2Mv",
  "key31": "2FYo7aFARAb8ikx9fN1iusdLbbg242eA16yoG4G3h2W5FQVYQeQogJZYJrYsyBXV7eJoeAU5DUAsNNFtzCvnFLCj",
  "key32": "52rKDqD9HYF1UwLri3GeRY3bGZp8s8XDx2ENyDsNypL21Ratei4NPYmp5NKvixHVMRCjk24cURAGGFXaRvdtNaFg",
  "key33": "ZzzZA9aXuqhVTN5X7hh1tXDktb9WfavRJWvFaYb2a7j2d9bczqQCzNUmH8R5o1Dd17wNdBPWixtrDuMuk32pHyL",
  "key34": "QJ4AjFM1kf3WkJyDDdaE6u9TYSRCeUvF5v9qsoVrZ4oRGeuwdc8VRr8XtN2ezCGm6AX3jsie5STThwXfnRL5FG1",
  "key35": "2LMs21UVMBLUEDE1yvqN3R1HdQvM7UmRuUdfmqPuLZEaKoKYiYWG1GwN3NqsLXbo46oYZejd951sDiFM1RHGRRm3",
  "key36": "2zvhGcFGnnUbMxYek7pu7VX1S6xmhcTR5cQeSPxKNcEinVMMCKRCkV7VxVutsvRRs2jYKRGhjzzQVxUQTqvT4xaq"
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
