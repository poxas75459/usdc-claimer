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
    "PGH66QpjNotWUviWKvUmh3hNCpjdweMHbjz4jVoQgpnPX4RHAwLVbaGs9PEoSsPTy1DnsrqF6HT2g8czBPCFxxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rCup3crMXp7uwZJhvixvVD9Xj2Z1pQnEiLPRTbrqcwP8fpdpaGgd94KCWBFYqjnM7j4CrkZkcgRrTfPUbQvxa59",
  "key1": "5AmpcasfSm3ZgzcSDMTawVFcqUvSQfMbhVdwxRqJWoSejCgGUwcpvumBxw7Q6Mg1CrGZLkpCMwjpBV66C7adUtYz",
  "key2": "3Kry81jd4CSn3Hi3FU2DqoeXfD1hvXWscpnvfsuppTuPJBG3rse35kDZkfj8LtnHSzRp11czjNFegRqdCkEagcC",
  "key3": "4hpWwLjbmhZB4BFUeUCTDfQDxRcBHmrQMqrS5pu4oijcaqjyonp4HCwDBkHikyTDHyTnHKjYHxJhs9asHwiTnTHx",
  "key4": "2Pd9WhF6vPcEVXkncv7bvGK7N5z1t3nAwzuvsyXrKhvNXk9Wy6aXD5bjwXY4RuYAZTYHMooAzEv12JhNdNHtvg3y",
  "key5": "4EhTEtt3KDuwwHu8tA3GMfBwndjvp982WhckrbERSQkvj3HzetpLAdjGPMUfKJZHPwqetmjdsm4FG4tyvnNk2BFV",
  "key6": "3peX9nMMSeAB1czeSRur9WLAtovgQ3Kc9NBqn5iW63M3Zz4v6EdNcaEsxW2uWZgK3YN1DJcbSVKKexPpvozoBgLG",
  "key7": "EAaZyTua5jZYsR257NfwyhMguhUuEhr9duBmnAnex9M1zZnfsekaruaduD2sqYuPxcCNUDEEx5ySQB4YvAXiYVG",
  "key8": "52jMDo9vighrq1nFTkbJeXEiZWqVUhwi7XkRaJwcpQtRt4wuVx7zKTSoXtu1YFNkprxX9WCG8oiCP1xmHzGxpFAA",
  "key9": "5LQxyAMzR3buZk6bTXxxrDikDthncZyaEP29KjqnMwAYHKRL9KuJAUSBrSgh7b2TAmTEvmXucJvryB7gbfWhhokJ",
  "key10": "2LKeqVEB9rh2miB6EuEmqoQLBxKy6Vc2y8n1wq7NQapmtPE9MVYKicNeeHw7mLa26xYRdVQHajme5oWhA1jAW2iL",
  "key11": "UrLGSkurG3cqBKCtYjTQhLXF1z2vQcxtU7L4yaNzTKdLoHfCSget4qHynyUTx4GzGFbVVsYG5oPYkRo656KAY5k",
  "key12": "35Bac9K4MqjeVYs2YdQwE8DuYmazZ4yUoKJeUYSyETjYNM2fuqSeDuZPES168EtnBLsAdi8sViagLPUoCs7gWAaq",
  "key13": "4NF3ADN7igW3r62K89dkM6AVSJVexJgaQBgDdeK3UUPcnz9pZEc7BQiFTaBTWhv1Wbn93GE1WY39wJtpi8V3FKVn",
  "key14": "Fdg1j4nkC5Zj1UKH4Dufvz4Q22kCf9tGp4vEAVSXEjsFpYoiQvLqCE5ax2iMFVG1KQCNFa6adse6wvYQsUGBg7M",
  "key15": "2sypkgHiJ5kXP2GvNzW3F71as1sTs1UPxG6b2D8j3MnYdfwsirAS2qWAD8TsAvCwmsJiLY3582FQdk4XHV8MMRTR",
  "key16": "3dCQNKQVd9NJYbGeueR4Rd6v4ZeEJKzTo27rA7257wTAifkm1Zb1rr8mupx4r8nosVwrQzJqmbTm1NVtZ3qhXxG4",
  "key17": "HNbWA1kSXb9sCitbjAfP4MSEEqiUzMuBR4TzKoYHHDC2b4ukso8M6e7JL293rzyz9EBjWTPWZpjXw5mKC3U3xJk",
  "key18": "64CQnTVxjxBsK4YSnnkKgdbxYqupaKzLuJgYfZTFrm1fSgLxjEQHAvnbYoG2YnnNbRyserudfxdTWiwZB4bvQEaJ",
  "key19": "2b968pMPREshh4CrZ2RuiCkkTRiSBAsJp4AW5BNVYGPCJWK85eBGyP5qQ3CbejcmFDmXVsfQM5DGSvKCfn7b6J4z",
  "key20": "291sPFwaXiNBwyJGHqQGjp7EspLhazFSxTperahAw56ZyfhUcj6eSpFYMNg6uEDeKRcqd5KNkJRS9Vy1wmDJvhEz",
  "key21": "54cr37oR9GEzeagTngyYDEi74p9ijeZe2NJQehzDqmzEgLGxTtqc8RiUNRpi1JFaicBVTQiHmFtSrRZfp4Ayo6ZQ",
  "key22": "5KNMb7z5MzeZDaPTgADGkXuZumzp12bkWLQe1Z9nfWGsmCkb6wCDZc4pCNh5vHSmF1QjAJmGeuXx4Lvo2RE6bDex",
  "key23": "Dxea9K7eyvmMfU8TC6nJgScP4ewSJbetLrsSCVR6jDVyTCf5jc9P3NJJzvzGWbA2v4m4PFwpkwAZJRiUf3xBgJs",
  "key24": "5rYvz4SSCDf1KoNjU1itXfkJg5wDtYBCZjYxzpAJ2kjvnSMdE9VGkwqXmsnTSxVScptaS1JLsk3SA8oX3VwwNHW1",
  "key25": "2BAeyByBosBsZUtUjeEqabfLP69dvCHmNAKuCqJZe4SNrTPUJQJptXprU9opBq8qd81gQXKGMPKzz3XX1FHYMMiN"
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
