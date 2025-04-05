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
    "26fHcQayWcwprq8v4c2cPrZt6xuYCv3D2zKZxsBP5sDSK4anX9A8b76oSa5a5y16QiG7rdQ3EFG6bDeUef7Khxj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PeWanHi4W6xbvXc2PMHKd7daKRtvEkkk37XGrpWcViCoFpPGd6L22q3j8FpDZUAmdhMdsgVqdLCfhopMKt7agYW",
  "key1": "Qhnd6NxfiW2vDfqjJGhbCMSajCs2Qs4a3pwa4jDYnX7ukSnrxVefRLqMCg6CF2EUqHVLCwBU3AcZpNZiQov4znN",
  "key2": "3453M8v8sPxrSnYymmVx6Fc86fFWdnXjCcnW13V6da6LUYqBShCKDzrMB7FPWEw53Qig3jtcd3BmSRRg7tXHHaBr",
  "key3": "35WRNRPAAjWUCKB59J1YUjEbTPxbdPFW4CnSV4eZfuRnRmijamoDnjFxSbvRBQiP28wCPvhWCoFUb7JKq4z4NZdY",
  "key4": "5hgMzswDTWeWN6NxCC4LPvWyqBgeGpGLbKjCb3hrVzjXdctryTREZ5yRqrj6hqXB1LNq1G3DzCv3WTTzmTphMXMi",
  "key5": "335uG5fQtxcUgPS5JvSaYwCiqEfkCTRZ7tQVXLJCvkkrK4xYs78kCKN6tN2qo1GFydELtda7J4QEktifep4Y51Qu",
  "key6": "5uGVonMyZP6GuQf7crQqYAAYcEqdmk729PjNXvQAM8d2TEGQb1Qgz6zegWKxyxkyKFQ1XNnQB7sANkTFVBe7sfan",
  "key7": "4MuPjFabcbW9FHbktScGdrVDtDw9e4bRiHouRHW9YLZpxZMB3mCoVygfU7vqjErybq8BjZ8C4ZBJEiMcz1ZLuHm2",
  "key8": "2v9t7ep95jfiXB5MPrzB4a6jB1JTLNn9FJtwTA1noxM9wBCRKLWrvpiTqUs1Q1Uc9pi8kdo8hwoCZ2nJqTRWmjMy",
  "key9": "5d4q71FZ2wXuA8xHX8BA7urWtebweRtj6N6T39suMrUU1osuVfzLfHrWWiXw8rmPUFSSuA8MwS2hSqrMjs1zLPXD",
  "key10": "2UEun9yUxF32KusBHnxwh3cUHsbHw6WSGpnk2g73TWJQqGYaauaurdJdm9nu2kqywomvJQqKLTygRSNoPAUKvhba",
  "key11": "4Ltg89HDeH5eAr8b9bnpeTW8BwcQMKuTak3Ak6CW4oS9FBqneusPRQrNc3Epo8fidJiwhRk1Au5nQ4kFseBCB6F",
  "key12": "VZLn3XJLFSMiC8CqX8EoPxn66DHbKViC6ABxy6nsZ4d7wkXKM4xyaxRNtxLjaBruBPfna97fiuTNdfYMhce9XZG",
  "key13": "2szzcZsnQxgZEPAEPC84PpNdH4NhQ7v8wnXaaZGyQnGAEUvoosSFzHJW7aEpusjyjeWEN4eeburkHYT4oCqYVfz1",
  "key14": "5Wrt8y9DtkYRvjEB9XwbKhpUpB5gQcwiFs9FmkYCrKJJnmGDxwZBWWvh1j92LqgYP4BSyoNqWGxjAdpDtiKs1fa9",
  "key15": "2fePsaLH5thKc4Pf9Qqaqm2F3s5h4TcB5fJgQqPNbNCqDcbjMDRyuwR1AYKR898qd8sAKiimSHeGMNNC7eMrMZUt",
  "key16": "3RzTvvEU5jUYvZq3gKBPvPUMXir2tEZdnqaQMei443ZiJZ8aWTzWK67vhXhuwJze6QjdupuP611Bv2LkcCptTf4w",
  "key17": "5HkaUwje4yXqLWAx1V2JYxAiZJKH1fME6p4Vw6EtJW9u8W5vtk1KyCwiBejJBkyVhCFbc57No1HhErpF6gJjp7PG",
  "key18": "nUox5QZxVRoo4CkggDwCnq2qvMiqnbMuEqPFaqZV9SUMYebS1bUuuWSEWhrKoQM2vF6nMYRcYCQZQQfaXSWkL5B",
  "key19": "34QSsiPW1MSzcXTCzja6x6soVgH44WfLBPY7jnf62udQhkXyEduALxQ1sJa8F8mQUbkzrhNifDw6XW1r8SUSqDJM",
  "key20": "2sXqGWu222VuU6DrkAXRAv5adzcQ6sSqtXSTuTumUauem9pXuz7eF7EtoEnTRGbeQCrSExJeQszWTguYcMgtbR6H",
  "key21": "3viZWt53AzpvkvCkPFDdYfKd9GJPktWzieUco6cwjEeDawBN32Pp2xbwo5QvKB4B8c1sBusm2pHhwXjFw99rmuhd",
  "key22": "3j1jvru7Ff2VeYGmsPtDSs2jMseVTEKsTQF9BznQPjxux1uQhxvJusCENoTorEHcgXkv6tXsykMmKrZ4WkJNgno",
  "key23": "4t1N2kpcMkG4mT4UMKVwSt5w8TPC2JpANRL8DuaRssahweLN89yJfvbiQokt2k8FtseshMY31hUvhpQpZrevL4v2",
  "key24": "8YtxcM5bcmVxYveaTfYBJGR28Y1GAMdg28Lo2TbjDA59LgCpokv6t4Mfe1kwJQJpeBLdGonYhXwUPM8nWsJZgHP"
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
