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
    "2jhgZkLdzbpbv8PV9BAALYAGJydWyobghAypgDLZYSuFjjcevfuuu8cVkQUeKLwNM7YH4pjn5WcD7Z7MyyPSD2bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogY3QaavZKgegvbmmAzMnqDJSxkDvATjYL4UANqEFL1NKSJgfJVHiLURNwJiCFCnmnuoJ9gEyNdiMz5AYzNPxkp",
  "key1": "3MrCAEa4zyeiudmfruUtCrkqtJuQDYkRdAa2Y56bwJTQ91kjwrmLQUX9gAuRsy8azd7LMm9ZmEz6owtxsywPt8nY",
  "key2": "2Z5SuonsnLFCCnQyXYbJKUJZLe3wbLC9Fe55rTi19AMbpDuaqDaiGj4mdRJowVZdnnfrTwgK1zy5UgPBHyaiQLTR",
  "key3": "2N8uHiVfNqCfaKjrRiPnGar41VQV6hFaqSyd4msqk6AQ5otcj4R5EeW4jz6D3RLrdxe1rMnusf5WYXN4MXTWgGxU",
  "key4": "2giGW9AehLiqgMUzW53hj5KSi41sSEeBJehRFcxAJCtEuiQLXinARn1PQ2MeLDwQuU4qXQZg7F8LdEt81gaHbGXw",
  "key5": "2aP6susi6xMAfLB3uFxSyrv5154bt9RQ4WsHYTW2913WcDHZAUixK9B36rzoTRcbPn1coH4aynYXzNSmqDbbjRgo",
  "key6": "33dxVZ8s6WAa49DZLojEnMMGeMhtTWgoADVcKRHYv3gzEgCdMsMnqCHvUe8WMyfJTCFY2WxJNprzT1ghembtNpg",
  "key7": "594vCtxc9ZXYWPVwJXNDz9ddhBvkAaaZTLauotTEx9dHpNUHEpvYsbw8Y66NmegoyRS1Kp9kewxgZCrDSggZJZAL",
  "key8": "5DvREuSyeW1sKQUWMp2Tn3bxgYSHoYfTFqCmZCigqeWhfHHX1c8kQ8PrskZYhjheKpspfjzKX345ibqswKaPpYqv",
  "key9": "59Yn2mJWzN5hNJmc9KgyM1Djd1TEeVWuE8jU6eXX9Yhdo1koDafLPdr9XCVZiQsybk3fazMYXPYTu2hCDaPkf8bv",
  "key10": "nTRqGjkHJxBTHxmLcm7nbCQ9KSCTFXTjqti7G5HzrhL9fvF4fDTXznRmYMNDduq37uTYq9gqWf18ZaYaCxUHjti",
  "key11": "4ogmn1EV6WHG6Q6bwuvAVy4AAgfLUDJBA2jvuUDt4J1WZQFZdZ2xdtxNqsQohxUsk1FzBVQauEsnb6wSi8kcViE",
  "key12": "5SwX5PDnr9zndDfGax45TxDm7h9WkV8zhpqiNfeLJ3mqkvwQ97kAQcxATVj6nZmm5PWcrgVgkHjuMdkC19xccRQG",
  "key13": "4XAg9m8bhsbVKXCaa2zWuhLpAfL2PAf543Rr8VGphgq3MnsfVWAdzuwNqDKSTZw3LDPBok7FiPSGsBduWi8jyKU8",
  "key14": "45mHK3FWkUc3FJ1doN71JFFvyyTWdF13aeYVD8p4s5LVTrP2tA5coGX2eNw82kktNF4GVcvgGbYQbzwMLMt2TuXw",
  "key15": "TNciNPq3Ksj28XckTKPFhndJT7PNfN5A3UgCZtqSf2Lvf5nuHhFdTdDuskrfHLnL1cnXsHz7qLW8EpGVHsJa3fc",
  "key16": "2nGh8APKLwb4R2UJUUrpzBFeXXTY2ymE2vC9yVmETz1s9VVAA4gTfD12w2VMECcAfTtxGN8rQjekP5aY2d18o3g2",
  "key17": "5jvXm4Tu8GNLLKomHmBtxefkMq8Vdn1B1jE417b67jrq7bQkstuJaJgcZ5Eqh2WuEAgUpFKCmrui6TFFtCDzJNVt",
  "key18": "5srEzqyNo1TNUNdJKpkcg8UZB8bVYcZVRsmaeTQr6Xa2HUNG8afokCuPeidga3yZV3yybNcJYtcHG7fHpaL7yuZx",
  "key19": "2s4H6F9gqNUpxaoK7prdkpzcJFBD2FnuEGgck6SJujroJvFMteLhxJMfQPTwpuycH6LxuFWqTvFYGsDDH7bJZrUK",
  "key20": "498Xea1RypHNwCmLknK3FKwpr8jtvbtav5e9CYha5jPikfLa1zPvUHCs8YkhEakrGn86FvP2TE4b6BtMSkEFWVXU",
  "key21": "4dzHt25qRpGPNGVYdZzDMrVDcBCiyUmnqVmpBvqtYVCLnrS9EVrAPDcSeu7CN35UKxF3Fmb726MYSP93djmTNmWn",
  "key22": "2Pr6DCAthFD6gUFySNm6QqATQ5AsMBPcgL9M1hBdG7YUaekT5MVjbzhZAPp9iNXq1iqKGjbpMsR2DVGjdjNv3TLs",
  "key23": "guzJSe4obNr1vmFEPpJySvTkL94oATTgTnWN5bsnBbEp4qy5V88SYbNxWiHcrop96GvZLfddjQTFyiXkLswdiJe",
  "key24": "3uWXR1aiDG4ydcriLyX39Mkjpc7zM8bs7dwoPR3nXVaiBL9jMmwBrVz3J9xeBv8wFWXFYgA5xUqXtABGcEF2c8bM",
  "key25": "3v2xPAyenJBJwjiCjWuWr1G8MFMdK67UXDWpU7y9SCVhQwndX5Wuow2n4QDmYruH1ycbmhBSGMpUoyrFGyF35k5a",
  "key26": "4xfXsPEUJ5rEGH8R4NgTjpYCe6anG5Hz7vmqSj9cBFEFKSr4MMugCszdHkqCHW7DseewbNUvLV8ojvvGtieoiZDK"
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
