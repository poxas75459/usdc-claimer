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
    "5tKG2wXxMDBwysSjBK9LsQaqKS1XJXZ5ZFvmLqdBG3HUaT3HWJjXccHKoeQFGieDLqibGxqxKzFragq5r1ocUCNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fN58jYyEnc1GYuKfQBuWEy38e9mRFrKE44nmzdnjFQ2zK1gnZTEJnbBTBgpJGurKM9TccRdQkbnJEzqkoUXFL7L",
  "key1": "5VrpTi5VjCX1P4StQ9GHqbMTKjNPZocYEMEBsNuWy17gcNLXLWesD3hoshoYd4PL7Nk4XdYyCUmqSpZfs74DAKjc",
  "key2": "5Y6rMFVe9b5dP4Eqn7c39TAXbSP769BLdABy4jA1ohWbzZZZvE3WbfsmoF61yRt4Mr57RPNHeAp1z2PbsZQi77Jn",
  "key3": "2w1NmzUXxt9QqMERpd1XbCPRqNhU9MHrWqWBdzbNAcsGxZWBh9UUxGwpbZ4sbbqgXgLzdG7HGCVcTYK5f1Hum6eB",
  "key4": "36sAHKZg3sz62KLqXwYuG54tqkDnggvK12ScWmhWgLxiDgviV6Fso5tKw4DBNjPQqG9ck3df3vueTSehon7Nfs9H",
  "key5": "598Qo9655Vx4J2865f1K6Dg1g2omjYAxqkN1NDP4SJwVp57mLoHo62CspsECNZMbXEvZPsYcgYb3uNwN8aied3DU",
  "key6": "2oFBFnN5JkQQwvjuodydUW69ZEQkioFJYmHw9GEf7ziNf9MP2XpfiDUH3ePMow6VZdT1FviJXjJ8t5AKHo2ytMwF",
  "key7": "5SYheoy3qDydpFBExHPSTpki7vJxaWiJ7bQ1vhhSJBfqzVsm9JwHxEUs7jtaPnqTdcDTb9S6Re53y7kE8832MAH",
  "key8": "4atsNR7wXEy24JfsBX4HQ5mZQ59G8oJwiTcM5wUJ3yNmi6fJ47YzKBvtZpeDJfNpwcrt18Xgw9pnmDmdzCDifiUg",
  "key9": "3nhxo3eodrRXbQfHbfcK8bPCyDabRQRHtke5PRPm86PbpuyXfbpLCMpefFGQcu2WWgQDgqezHJAegAe6Z7cu31Vu",
  "key10": "5nc1XPwUrGGkBK6LpBe7kSKLjWYxk8hxXbTfZ46wnDmszL4bo4bJmkumg98F4pkjyGYUuLcyvaAvpCKRJmAoVHii",
  "key11": "5bPyRTUBb9txAduqCnehAuAeMRxMM5WSn25HrdqoQbtUwzL41qn3Mf9cPUw1FVJ2Q4qWUTkbbjCjJhqufBPYjGEt",
  "key12": "5wPHZccKPi1mhHTLyUHVTWZsX7UUYWvCByxHnd9Y3EnVtjQBDqbbBCmLVKDbTZAndnTkmmDrfMD7ybG84euCgqRJ",
  "key13": "4RJvyagJKzGd6A2RFNegzxcdsFZFMGCrX1gp7WWEvdALQ2xfb6QuHMe8ZF6V16xMPaLn8LhLq5aom76fjtEcfgua",
  "key14": "24jminDUCnybigM1KjpXjSzU4ptucgEMW6gHNJNQYFmG7LWZDXzU78jGzM2BX5hjnVUpyzm3tCGTtvMXjCK7p4RW",
  "key15": "5JjtL2KrnduDjzXtvNerCEY79HwjyZ7DTFuncKeJ8g2edQdVL5FNrvsYZLW3MdUpcAHN4gHyZ3cgSkbGxp7kbuU5",
  "key16": "4vBzR82jZx1JSxhmdhwxSFfffvKXEQ9VV1JG4dmW7Y1MXSH6WgZtVdhgQ2PLJSxPsE8s6N72wEM8viBs7Jx1gRf3",
  "key17": "3krrYCWfRP4dB3uam5saoEDRuo6nYCC1i7xCNyJJdoGKcvTHQTCguunCpUhYDQpGzX5XmnzYxmMyhME18jdBwPED",
  "key18": "59hqG8QWJxuK9mR44QaKtxeSs2eJJHnbymYNiJAXWcu8jscTvs3skp4oQXYztozRwipTSGQq5eYGo2MfaNEZDmAH",
  "key19": "3P5k9iTwdAw3Twyvq6rZuzd6p1oBxjVt7LMxNFM8oxnv4Augg3fvzcx6YEftKJWjeZBEsm1NuiJcGnZH1Whk8Ce4",
  "key20": "mLyzo5gSCGT3Lo7iSBT6CE7g8G9Ub6GmyPgvbDw8qU36sXiaJBWtveS7vR1wrvbtoTQC4j1HLhovcmUigt7pNd1",
  "key21": "64btcWXC1WzG6AP5qNhetFH6WBYN7XiCH6zqmmoREH999KTVqBvGAtMriT4GK36a8QZq3VsVjdhiWzJaoLHb8McE",
  "key22": "3tF9VG82xU26KcBvxAUfWG73dzk1LxB6T4dTb1VRUZ1Szp9Ans7u5wCsBykCVAow8Rbi6aFfvFhxYSLDGLrM1gN1",
  "key23": "xMnSrwwGM331L3TvfpZn9rTuRFL5Jaq32RnedDN7r8RZ4FNdB6QgcrFfD3DdhjZUhbBKkgJrDCru28MVmXqaSpf",
  "key24": "4NDjjaztdcFrPbobGc8WTwadMtxMo6DS7hp8HFoaADUs4BK723RYYaFx5xanoF5w5D5KYHZRuzc53TGsJNGquN6n",
  "key25": "2S2FfYo5RKGViNAFTteQW7EaK8dQN8u8xZDgFea1u3EVpTyGzUFikqbVf5sp331RrLxBjsymR2NA59aTPVy886Gu"
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
