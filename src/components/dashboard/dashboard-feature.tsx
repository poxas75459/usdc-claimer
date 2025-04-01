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
    "4imuAhwYYFYiP9hjLAW44DprSocrzqfEcQkh1dR4heveuD8XqSgzNDLFrDYPRKL1f5j3t3Mqcu6d8f9tNtwaqSxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gwgyqd7tt6GE684LxZFFVi33weFajeTo589Ut2jDstCo84RvA37XuBV5bf9J1fXdpSVyuRhZEuYYYQvzhVN7fCr",
  "key1": "3Y6QSEEVZm3n2pFUfndfxmHgqFxHuQN6ULbFG3EBgedYYhuep1JfFvDDPxX1kyeQjKTJycpbZ3jvuVHNtAN27ZzG",
  "key2": "5amBb3giyJVTU9R1esSQ5LkAbNhVLE6RanTw3zrSqnRFZafHUmLLqcUctArhshac3eEvnjtHAuhg3HZvG8sEYHti",
  "key3": "5cUyscuDfLfSmC6NMPcbd4WHf6hzbRzsQRehsNoZ6uFQH4K4AfeEAVsd2QHa2Lv31CfCxR9MH6skEzXymiW5iYzG",
  "key4": "hjCmBamkLNLnNj1DhxcBH4mzgjJXHRiW52RLDBEBUoxcJbfAx3HNDRvAUYMg5xGPuE5DVsyhA9Rmkv4cducmQVi",
  "key5": "2e7JWK2MvXHxpAsHLwp1tCDpgWnmqktUkMnmsbAvyFDYxPid7dRFEQPgF7PDbyHVte27SDzeYqMfcmEETEPv7QB7",
  "key6": "2xQa16FP7ka5SuRaBTk8bBZ64WWiB3JvXw114xquLGLLrJnkQXmfSpv7rTz5bwx59ZSkMHe32A1kYxPPGXUU9uZV",
  "key7": "23pB1hGWnjWroLNwLYe5nQnT4fzWJCVZoxhCzYSRfYbrgiLHK4KTjj5YfxcCMKLcbh3dw2AQMNMQVSpKfTPqXMgm",
  "key8": "eKMEgENVofzUaKVK9FFgasafKQotvAHU9ZDkbA5NnBqqxeafVfz1z6u1qbLXEbGR19SbKvS8aHGXHZvFJY6YARC",
  "key9": "4EPPtQrmr8kh6LZ38pEEJrKXdCi8S2MkfJyYVWDLf6QE9UsrQUmXdvPmqqTK2pzcoSSW9L9HbWq51sZbkbcr8KAi",
  "key10": "43qgtJj5UwPkaGpfdhspqzZtoiEW7zGP831TotBjrDVG4a1Ro1V6gCoKXuBnXLPPkXP2QGEcHc4DXGHMHkgdEvQn",
  "key11": "3o4LSgmb8jyzBr45hXzTnWMrq1eAonxcAGV376wTSfmvVkVkgu23q8UT59pQxbcoADXcHX8jh62QftgA6exky5gG",
  "key12": "2AH2JiWHEECvzMstSD9xa6peyjAWe44V3iks8t539kmHjePQmMQJPUohzgaMcpSkExZ3WL4qYvWrt14iE8x9aWwV",
  "key13": "anhvV9T7wNMvwha9gTY8MDtYkYWMNy3e4dpzHdduEhUaMx1ckSfTn5CYrpjnXMHTbihtfd7R5kXQV6NWFGiuULZ",
  "key14": "2Rh9hi1AU3QK8PgFfEiZhGihw26iN4zfDB4b6opW5hE18Yeo6gAG6q31Vu4F8jcRcSDcCphq1o3mQRijmgbf4vFx",
  "key15": "2Rv4pSqm34zGRgsJxDXAvWAbR1evvSLo9Y78VxeECTB6AyymA9WwnjVgdGFPXQz5ijjg5ZLjgguRCNAE33cT98Zp",
  "key16": "24FQHvUuR9vEhpH2JYFHbE5NbB9RgGjtJrct4fFPfF142CBFZkMZb9w3c4QxAGzjzTMS58wwaM7KkjdoAyZqX23m",
  "key17": "4Y2nVj952GAn97oHQyBJ5TpxQaftoJZHKqfQ1tdnMNf3r9UJDZe8jNG6WeuSJAY3yqZH2QrXc9sFceJW3Up4A9Dm",
  "key18": "5BBvLiywRi4q1wpc6GDka5yFkBSKKarp2WiTGkc7dBYy4hCB5JWkU37uqFYBqYdcCQc1CdB42gJMPJp2TsjKyqVz",
  "key19": "4QG6cewksQ22GvPZMzKgyzTgemavATUJScP7uaXEB4GFg63VWdrHuc5iDf3Wq2SbQKF1L8ph5fPDpGPCJ58oKfiX",
  "key20": "7zBJ6HU5HZHbtY4qJAZ6nfambsANo4KWtcdpAynaAaAbUg8NJd2XQ23KYRMngUaL8RZbqhLHjSmgyjTaPVmNMKJ",
  "key21": "4UYMbmXMjpqBW5egt7ZvVHxTb4RpdEjaj3GQucRhFcW2oxDERFoB5jQzKtEgABnfSMaBUwhdoZnSBUSpADzuExdD",
  "key22": "H28MBusFVUWBhWUwMDbgM5JxfXCKsUn3fuqBGEKBRKbVzxLKFB4Q2NxAJsJaJzN1Hz8p77BLFsWo7Mw29VzooBU",
  "key23": "3pkLLZ2cVB9TTKVur4qa7Wu3nhabPvyuuYeNuB83rWJkmEzueZEhSBH5LVkGuAoqmu2ivwPcpBqsSwUtXbmrgkTn",
  "key24": "4HkrJEGnegRBzNpgwxrkne6wAggfJByu4NCzqpgb6nGPWM9w8yFZPcHYmdkHVoFBkisd1mDqwL6DQEgcHLo6JNKX",
  "key25": "4yKoGzHgDsrtEUqfLBysLkvtPoLqMsAPGmozbTAwuWww7JfuMdgonyPepULA6LMKdXc1fE4T2J6ExBeU6MRRGuhW",
  "key26": "3qacbXRn1GKbkXxw9F8PdkHDD7SeZfMWaQCK82qVh7cseP2M7MpB7uLk5ZqhAYowdqxr696Nk4yBsCSH4DSDe46f"
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
