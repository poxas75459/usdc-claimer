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
    "1dsMdubd8HsPwz9CcqRL4qbMqmjt1kPnsP4iLxYy7CskNXUvah217RwQzzsHDBe4VT5bqG5MiftNLBQYr1oGuB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "exfJdsHuffasUmeoT6CJyScTwhs8ozpkERT8Ezn2PNTbA97yBEMqrBjEU8fB2yv7oDoeaAUsm6418qdgz1KpVYU",
  "key1": "2xzMH9D24RETHvuNvbq3zgpW2xa8iQ88XQxk2bvA8mtxStp5agMF1z7fwMNoL3kSj6cUDvz1y5bk7V2gCSyUxSzz",
  "key2": "5ZB5cpR58S5cDkU9gw8wBFPw6dpbeGBamf1vuPNgVqD1G6LgMLE5UzvF9Wz4GCh6TegBE715FEDMP67wb6sdxS6b",
  "key3": "zfvetwPc1eEzAZGCPHWcncSj3EXDSKK2vemYVXHeEWzRJRy7ktAbERUi2p3qKPTVdoPgS5t7RV8x1jxxRqa2S5S",
  "key4": "3zvAvreLGYduGJ61NVwVdefkaaSu46JkMcZNtAgaZHBaoqmzsVXZmEYFsTThYMienhTj6DhZVdqxZLnvAr9s5c9h",
  "key5": "5hXZNjbgzPrTQdVAHrXHPjsxaL3ZPthYv6RRhbxdgftZ7rEoAbtBWQEK7nh4VtQHDHZDGAm4tsM33Jaz2NZKWWrP",
  "key6": "4pwoQquH6DfX8HeDNqdco75ykgfqmD2FUUy9DdqQnSLvxCcYFEsttSBHyKQ1PpcY7WMnQs6AxwTKNi9haGMupMUw",
  "key7": "BsHKAj7NfC96sNPJixehZczCKa73DFkMWekZS6mm3bqZKzYraMP4tV6Wrtsfo5HV4UnPiLXpfEMcigiaPGikpad",
  "key8": "38ixTLfeTQK6bFR9fBbPHWe2hDUqn13UoPf1zTdAsMfkjuNN1HjiJpnNgk8twf1SaLyUePPWLQnRUK5XDbv6H6tx",
  "key9": "4RDYwUh7gVyNk9RhRUoGKgVohyyqTdKSDdr3SvYz22F6AQ2em4qRzZMLy6aMxAR2J9EGrQj5jDSaj5GTpoMoUwNR",
  "key10": "4ibE2ys4fs1dSWubq1edwAngmDoZEn9neXNsLK9njh8Pvfy7BxsJFW1HmYs7UjAn4K9udiKT3qMwS9dUQW5oWaUk",
  "key11": "QXJP2APbaLYY43GyFFm4gZqRd7WBSTk8SUvSRj58TrtHoL6wTTQEDWPwKk5b7eDu1X3PRRWwLGc3hjE4EuMjsmX",
  "key12": "26vg25VD53xFuRCPjnnXg2tnLJCLidwNFffgu86oy5b7nkKmzvfYPU7VUQeYCkMVKHF4EqPpsXXY2kouEJNYjerp",
  "key13": "55WAudHNQG5fQ6EsMhy5VMs1utFKPYtPCwgQ8pc18oYKVPtuCVZuMzAHhb5SSvqAyjhpUza2qUqrTA8rpkoJvnfR",
  "key14": "2wk6XawCPA4uF7Vs2p5dNebu8Qy1GxLZtEfjEkFqbypQ4RQC8Bc7f9G4Cjyi1LaFWiDaekwCUS3YcZY2dxCa7s2B",
  "key15": "4F8y9jC9TukGDEojegEBM94YRT4qiwTW1H1NAywuCAPuvnhkdZt8psS8bvzBoNX8mTTTCH9h8EnW1rQcApoQZS82",
  "key16": "1HAh5FdzJYS3Ccuaqygk7m4cvup1NdVdR1eTY4ntZZp21DQGAUjXtcUAtjDUS3JKnHWFhExSa6Jgi32fkaauS1p",
  "key17": "424oijytdcYfg8tuhFuAddYW6kU2C7QPfobUj2975sZ93MhrTEn8UCiXZk3KPQzxdRLvJcrBZZrU7rz2Myu331d7",
  "key18": "3LPDCPo661CqbsPSW5KUoGZPha7MMcC6i1vutMKyk9LcdEy1Xm7C2hcMf2NcemmmnvEHsw88WkCGCHccTX5KYgeC",
  "key19": "4nsvQtkXHW2LF61bR8fo7YtqSSoRtRKiLtnTetfUJanxKgYPiMzNfXX39dekJfitcC66jxQJJPiDRjeV6osRM22b",
  "key20": "4WdB222Qzj9jajz9KK7MwQiVQdxEeSiT9URjWqTop4UXjo3Q5Vyht39c2GkA1eS6LgTy22dbxFCUZxiRNb6qbEfh",
  "key21": "53Twuk5wEcXcfnnzUSE2Li5K8so1sPHQ1iSmeiXLjugndWwedHw7T1cVYiMmgtjXeiQK2Y3pLkjKdhS3Lb3Sa4CB",
  "key22": "22yUSgLX33SkE3X2wYtMNzEv95M7VLZ3mAY2oeNCNc3hWfyWZ6ALAXWsZtGxLZNsSn7syfXk92ai7CWzmxk4YdQu",
  "key23": "66UT2VqBzrMBbtZKR56oJLkpUFoAYZ4tqSDZ2X1QWe3brKZD3ysvLZ8TVqASCeENLS8f9m8WVwUSrxntxXCcdXHp",
  "key24": "4B7VxPi7yLSkp9y5meGNoZjG7QLBZ1QehkmGUKXXP5H9ArGoditusRQJNvzPVWe88aovxQA7TM783kFVTNi5Dn1m"
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
