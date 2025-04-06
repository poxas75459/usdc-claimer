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
    "5ou2fPDL13w1PfGyR8T2GRR3R1dGYZPtE137U1eLr3ttav2DdUbHQQwM3UKzWhMMgvosKFXXz9E7AMCJnJabQdwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FwBPjZaof2CLb249dfTsS4cWTyFwqJA7zf19K5j2tvhP8Nsv7y61eMbgLG3iAVKkBLq5XkRpGeByKQpuLLatSjt",
  "key1": "5vPWRnTzXRjQMQc5QvhW9r4nNLipBmyafxbrxHf8ja2LcJyMHMaptYcGHMaEap7bNydbpfBjqKGtev952k3YbkaG",
  "key2": "3T4SnnbEkZntYbWtRsAoBYiJKNftdtmD8vFXbBqYH1HJ9smMD3Q5DNr2A4bRCYZMibBK3TgVBfbJbwVnRYk6h6Hh",
  "key3": "VQCzr9ew2zZEmPb8oNRooxduRjAq6qPD47WV4W2HF7DpdkUHncnb5ZeGCkkkVkgbKvszLA19BrtaqzH7EJcFiEv",
  "key4": "5cU74x54NemH4QM5txx1rcSANv6pr62WNCxucBUEa9zAyyDfFN65SyaUmE61itLnuYpdJUd9y853aLEHXmEQWshm",
  "key5": "2VhE4YhnMJtteGCT2dFi7rcz95y2Zsdc1Lu7GfA9gqB9UCEYFQkWSzJeH9R4mDZcvKdiq98tQqVnP7GpBrbXVffn",
  "key6": "4D2XpqV64dqDr4NRFguWoZ6c5nta8RCX69DCTPEGLFr8vkTWtKTJu1Be2J5kbRMa1QA1KcCEaPWfJ5WVxrbRCYq9",
  "key7": "4mAXmPkp6CbzjC8XjwbafdwqEVvPhTkHoiQXmohbrq6QsPQMb2Rs2oawb4BEYYnYvuaTsfM6hj5RFhyAVkYVJ7fd",
  "key8": "5uJxZuG5SJCQNRnZkL4zxKFG13TJjohgopkNSBdoiKXJ6YivNUGegB4uTpSRQ4EeUJX5P2wDXPnX4t3JH9Kra4Sy",
  "key9": "2YEn2LEjbZxmaN3h4bh7nh1AM4Dmz9UJj6zxDpz1Gv9xEhFZGtPZw1qNRWQ5txrCX7fJ6FSeP6zrBLps1yDK7Vdk",
  "key10": "42CifhjRKdfkYQmAt9qjWJTG22j6ejd9xMKsMvcMWR5Kk9fbFwYnSy4Nyv184KiP37pame3uuebcJSscHYoQ2NN6",
  "key11": "46mWMdQ4CeQYwVXqwEosfZZnuxpWjVvQyHTjr8fzEHt4H13PgxR7iegvD5szQv6mtEqgLj1U8592g5GCDujYJVL7",
  "key12": "gy3wLWFphsYTMDShFh2zQT4tCsjo3ZqduVffK1Qr6iMhUwN4J2pZL2JZqMe4R5aiKDM3zYZnEkSMyEHLcuzVLRD",
  "key13": "5eL4UQsWPYeEzuVzYXQ744eEKHtFAygFmpGhBVUAKKuGQaTJnWRiUa1iwkkfWzitM4Zq1qG3GDPUJrYj9KwTZiqz",
  "key14": "1xtgZZUKKgKeMRkaQ1Ahc242czxwdkG2AA3SGSzbtWvXWbMwM44XpH7GzmvSX9d928VpFoHDqiZHKtjTJnrrBjd",
  "key15": "4TnvyzL66qmT1ViuuTAPnwyzxYmxBAJcRbR5pPo6QXrb5kzLvonmBCz1RyZAErwWvu2tuiDGktoaXQ6JnxmGnH2k",
  "key16": "66H6kHtZeVzHohM2Xa6iGd76mZsaAxTvgk6fME4UZM3ipvjhcCbGkK1r5QTs3VSGB7nETTwJb1NCQtT1Lh6HEQ37",
  "key17": "43tJxvDMKzGs723QoMTXRxfSot2k6hws2GWWindXYb1rnqncNrntP86nTgM3uJ5pX3ps1a89DAMXLX8piAU5Kp3e",
  "key18": "2sk6Gi5NGZGuszRmbRFsFaRgE6DW9S5R37wXHAyvR5BSe8BuCxQ3rYGtumeZ965XVPaKibejdXWer2tfDKqCKpaJ",
  "key19": "67ohX78AzwHtGgnwZVS22gGcoJys3AhvQRgTqMa2j94J9abp9S8x91HY1QqaW65CwZ6ghHDCKiZWnDg6PQoNC3mb",
  "key20": "62JYSpoV2AHxVrc7DsLozxr3u6m84KcNzLh9nzUQMd4EJTzjXAKYRb8wmaT6qEWNGqEufxe3PFwWAwgbM4pwbN6q",
  "key21": "3CY2J5utuxbsMhBa8t4zEAhVRStjGbErbPYntLpSANtrkAGK3KStccKJ9HYUovPRTgAXNh1QoSmyyhfYretHaZAW",
  "key22": "2t13FnMc16GWudN2wjdncQqBoBZ4BbtwEKfLeLD2BUJffYENEYhy5qAehLeY9HYwXD1FgzoPyJahnBHC3PzbeL5V",
  "key23": "5zMjchYiSXiGhCreGqdgLfLATVPUtr5coB8Tfue1Dnr1soiquP4s8cnSKpCrtehuxmFMYBhE1JnY6Hc3TK6oqxpB",
  "key24": "9pZJ1bomBfkn6ay358ANUPcYXxVhfBGzLjuiizrNQYQW8U9d5HMB6zuUkSGZtWTXh9bsBcXf8srNcrEWkSi7iHT",
  "key25": "oSevRf7hzb4ZYxGfbUDZkzKBYc2787Adz5A7g5NKnxfxhBNwNYXK8Q1RD966X3gh8XSCt62wZmQce1D6MNiWviC"
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
