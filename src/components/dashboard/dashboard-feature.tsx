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
    "23Vfj31tWBfzA8RTAUac1nrkXCJzTAmHkX7CziJ9AEJnXF8PV8Ketr167qmi6GXDiykUGJBTmh6WfgPEK9QFvfX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bTCEHoC9GpQ6DjRhFxdJavrC26Jkv4Abwu2yGLBHcBfe9zZU3WCc3FFbfMgrjipu1xTzpfPmP4phFHAKgN1fxJg",
  "key1": "4WDzPauQL2NC1Np8WrbC9LWdaLEadyBTuQGjwb433CLS8PwqFLbqNrogrtPWr76hhfB5bzDbuKJkEKEWtXyR5EQf",
  "key2": "66NmeF1VXB8KU7v4dqpRQxJXBbH9iPniRZHfniWAH1NLr1CdmSjHYwoqZzY2zHG8xmX8ZpV4rS6fsfCiqPA9ftyK",
  "key3": "2qbL58Sk4KRFVxBkintHwUjQ4abzqWgbDAXV41pQXuHzE6UiXA81agPkWijScA8HS6gb7BouosxNHLp8n2G5TVCm",
  "key4": "4YhWgoamUX53nbHYoxnzAYPTTz1yPcpshQjwSuLjGALkdDqKnGLn6tCq1rH85PzFZagWUqUzXkDKy7dbc5YYKLNL",
  "key5": "54EY7m3BBfoNcGCmNFmbahM6F4NCBBzRiUw3StruYoi5PjPEYeUyMBTUR1Jmf43yMx27YhjHvcU4yBdz6HesH6Xm",
  "key6": "ZDTEEKFcSWMapX4ozYJEXFa6ReRxvgJn6HoN9uQnCyNTbZQNdkwiA4C5gLXpbHCT584JpyMobNiH1HxUBjEvbQL",
  "key7": "4Z1M4UC4qMh6hsCv5SGRXuygGJdcs2adD886gArQwztmAX6uuLKtZMiVu7yFZYKqVF3YHxn2gLBcnBQmtWFcqwVt",
  "key8": "KXMDyBHEK9KSkV1Jd7MHo3xYjjg6b9yuWogAK7tuA8hiayF63PRnPD2mm65tEuXo7KHtyhLhNoD37iAm8xudEa8",
  "key9": "5YKpRLdBsCMCnZKLpNaYf7fzU8QM4NdXeSg4x1MJu3Hzke8W9yxA9BiebrY2UkktSwWuYQRyZ6fnsWTxbtwNJGsn",
  "key10": "5fba7YZt7pPs3EcUzLDsApgyLUFKhQMFyatJwbKNxXqZh8MmQXHTNyPUmzC9TuhhB4YEESyMNfLVYkZwRF7Hr9b4",
  "key11": "2Y4XFuqbSAfo9b2SXZ47zC6if5b6mxNFqi5BwhTZUa61McnKGRUPZ6D8RSuBYAs248DRp6VZH1hDmgdCj3azy961",
  "key12": "25WiUEwfbmq3PpKKqT3MWsmqzbR6TaRWrwgKsqmU51PyKEtpoQzmYNVLpHNnkePzwcMKmD5kY8AazoMUJJg23Gjk",
  "key13": "3rPxFFthycumCC7mtR5MeKhqmFzZzaVjEFgnBbeACoUXC9ZcqcxWmAstjyjZEokhgUESh1oWJhqj7baTDvuey4HT",
  "key14": "4dVbnGkH8aJsYaPCKAhySWjnF9XRMRuYFoL1AKT5yenF1WKdeTk6QoteZquFVfMf4yifepsc6nhA1t8AepfBsbuz",
  "key15": "5JCN19R97fzCqQhV5cY41HAUA2y92mqXyhkVevbgTeyE6SGbrpR6eLkLsiFbbjKJDT9JjqRpRKdYG2KjPAdHFPqr",
  "key16": "5mWqhzpvFXPsvLBR9DocWz2S4TniPGFCGHLhatKZmroHkKaBihRJJC82wSuXkUDCY3WZ1TPZNRC4qt1dQy2fddhm",
  "key17": "4LTGafduxxDRibV7GnQPMx1UgkdBMM3YM7YMJ9niJEsbteJVn1cWRdKY2M7YvP5ws2NrzZzyyGS7TaS4S1VirTWG",
  "key18": "WkicbgTbd7h57q1oTYVzZtNtJWobd4CjwnzFPsxF2pJZAGN6x7bSRcAwuu9H6jsMmugd2L7QhZmr21WRWLKLC8m",
  "key19": "3s5Z9nLuF9Ez7a2u4fZqan8tFzhF85uTzbzJKPbktuXJkVCQKQTdAWinMjMHEw8dNwmkhY35kKUY42GUtKrwvD6H",
  "key20": "5Ds3s1oj5BzbAnRkjxs6xFCSiMxxvbiNdxxW1yL5dxEwRx3EwBHXXuEsTjs59fAZ96SX4mH1mubFhfUiuXnU5j9D",
  "key21": "2oeW1tkig7DYbGJhX8xkpBNQG5H4Xobax86LbTFjnJjzSX6Ur25F9bVhth8hefCG2fXJyhdtJu7SMk9rj6teSvEp",
  "key22": "22iC4G3t7JqdSm8jTq7or9ZqrjtQ1SzEoAMqLEPvYyFXA8FCskPNdqhrgTGNX51FtJfXxX5mYTiYYt52FQFcG5Zj",
  "key23": "2QbqPob9Yb5PtVPapxdfMNZbK1993d8qtEicL8aTC2CxwRUo5BcKVLVym3Nss6Z7ahEpvgj2hYSWXuWQs73Rspyc",
  "key24": "3t8L3aghkpxqMeL6CAQwZPc8vs9CCmRxwddvmrT9dc56Psx3c284uShhT2TBzytnEp3jBePfMQFdpfwyW6SabFvp",
  "key25": "4U31GFxoE8dcKFeQhts9hM42pcVLEDMoKmatzBZpWxvdN57bqrPda9ieHXuucytJENvcsnmDnTCUGFUS1Jy2e1K7"
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
