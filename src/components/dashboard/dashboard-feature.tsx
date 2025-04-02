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
    "2ntka2rnjDaDpspQDWuAMtJV9hGbRCfLjJP5HpFTbYmkRS1KCfs1iHSzJNGpRg4M2ymCCsiBNMqWWmgreRaJ39Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJyPHppkeWhCW63W124BNMNvDDnvziCdMRpQarmHs28mNxKG2GNBtsEVMH54rVWLcur5xHGn6x2Gfd6ChdSjbGN",
  "key1": "sLbFVoPjJkvipcdLgvBQWWviirPndPGJCDY73wmwrPJx5wPLJjL4izaZXDgXB5huRGLpdb6CqtTpB3XyRHcEX8P",
  "key2": "3cGYgVJfymwM2NbxsvQmy9faSDyFk3wcdyBqWcNJajm58eDFKsVh593HdKGYbEYR79GMqSLBURnEyygZPYMb9MZK",
  "key3": "o9kw78aknx4MuE9FdT6B26RPag26unxposgAsp33oE1KBhWder9zPCahDLVJDJ5v1JLy1VNa7VCPZi6xEmmFmXi",
  "key4": "2UfEX3vhBL9vCXcCyKDthtjw5yRezaquyy5BQxmaEwtyRJy9wRmfthNgTuWmVEsxcWw217oqhecanwvmkjbvYrbN",
  "key5": "2JfT2zVvDUN4dWoanXpvcVGjLbMKbJAi1pLrGk987qPuaHsChTzQemS5s7K1gy7Xg3DpH7AoDjSbUfNcn5gxBYFD",
  "key6": "2TKCDPYM5hEGvx1WC3rG6mWGkJt1ddBcP2a2MAWEL44cMNd13iJ5EGeUFgvMFq9tpkKwYtVFuu8kGPyp2BfxxrZe",
  "key7": "9Z93g2smzwPnPCwcfPhLeyy8NwNYrvrVq5DLbhyg9ha9uREeZXu7NPLNPxAHFVPj6c1jpEazD4xJTgY247djP3b",
  "key8": "3aRnhARrCVE8Jt2EfUK2do4JuXpA2KXLiLfZu4TRZfyzBXE6pqkVrPEiBsYH3o6JAe95cruqU7dZQXHS8BhnXbZ7",
  "key9": "5MovUPbbFVdGEbN6hp8QHy87uCnjSaAbcPsJg23XFDzm7RtqtatVQaBpyXjiTTNbxnmF8B38HiHv7FGg6azDpajE",
  "key10": "FLwicjFQ7MbjCitBFtGpWnYiGRxtetV9r9eDGXfUfXsCkpq1SxRP9xxxcFMSt9hEfAgj6Q38VUTA14L72HEJNFg",
  "key11": "4G3PaTp7mDPSjZirX91gdKcimcp4SNVajsBJKRtqKgNpGCLZQ3Qo8cDgp3djTWkHbxWRmyb2AtQyiaUNfXiDnYUX",
  "key12": "44e4NP24hRn9YiMJGtXiAL5d6jFddfrRysrAf3Hj3ZgjKRUGCZaEMEP3HdH7fd65h6kaVbf4Viz3oeMvNNXKmkL2",
  "key13": "3rWSAmTFNDi1MuCQvx2BUVcbmQhMVKmxDN2K16fpkz4RXQ7gYbgTnWVQswg6Hkx8HdkmCRsugHiwCGDAj4wHDw8p",
  "key14": "iBV6JrA7kp3FwbwQvVKfppvYNYezq4mpvRcVkeb6Zn5Hb45hHRnDNUj64ncTsFLRNm6yMwBGDmnK4A5oJ7eoYiP",
  "key15": "2gcZ3NW8sejC7M4dpmkSpjUUSAKFc1Go2hh8cwJLTtjNTCu6oU5LRaU5pjYJfeibKMo37SZBPTxxZwthNfpYh8Kt",
  "key16": "4YDgY87cgNjzpu2GAjGUUEL9xnJ1MVH49JHoG2tadEbs9pGQ1XPbXwc6PtRLtPwuDTsiT4jLsq7n1m3T31BcKRnV",
  "key17": "5pbR7RFfGYyihCEovpfjKrm4EAZo6p1wxmu8eUFoWH3Cw3kvTmKSkPf1geqWn8zTCSR6Vf5CCWpHqFvqn9J38pMU",
  "key18": "uSD7HxbcaoSYXJcYr87tnCYSZZKPmDSDipKYFkx5TGuss2xhVmxNQAurAf5YjkY4WqJiqVc1gY6NdbNTri4Cfbm",
  "key19": "FVmmw5FPesrhsutxAQ5GvtPXUYm1Z789mF7v7mrZKc1fzMQdJbcjDcm2SoH5DsWXSUvKq3s3EdgBh8MXS9bb8FE",
  "key20": "4gXiKQLboRMqHNgiE5gguG955ZYAnyJjxEsmQf1HjCSzPmzPYgCt81PEhCi6YCnsE8uUJbCVM5nCQENsDdEddwZc",
  "key21": "5KohDM4HMzW5wySnqn4JcwdA1swtv6ZNEpt5sZQEySwNqNe8d6r5tNZsrweteXGUDLmrJYqbePSCU4b52MbTHUWn",
  "key22": "2dTx88uLHNfCaRKZF6akUJxoWngLJf3FECiq98GboKec6jGjLXo621uYxiJmBn3CcfenDNcgi2tnpnX2eis1BkxK",
  "key23": "62go1tfXii2etuaG6FW5wYTQDwDaBbXXMAYtwTsT1J7vPVMGH5V93QmY2SR1o4H96xvUrHPB75dCRtZKvVknnMFM",
  "key24": "5kwu1R46YWRzXneb723ui57pJ9LJStjqVzn8mSdeWpSHpfnequNhdSNaTmj21V4kKKmiAXNKbCgo1aLZAT1vYHU",
  "key25": "2BPvdDz6ycfbe6hr6ELRnrsU9zH7maRjo674RLW3SPG7fCvkRrcFW4hpBwDtShz3DExzytt4gqCRdJSbdZ6mMAeT",
  "key26": "LUubLRfuJRh91gwP6YTJysWoEwMoGm8DE1stWQyZmKmDAshgMh6Loaz3TWfxYzfUtBAVkVMBhiG4apM1LiHdsrB",
  "key27": "66o3hTLoWeGoGrxJB9HtKmtEUKsocvojEKziQmn5wBJxm8DCRz1DyfZ1ZwEeXeAKuScHPoUAbNcnYqBej7chHh8G",
  "key28": "4HFyKFWhQfnFWTQYgMiHaJjWnV9gi4UgN6bCF7wfP7z7cEueGpa46SttD8M2JM11wdcitKAWDvxnaum2HtXM1sa9",
  "key29": "zqbzFtcXg9zm1mBVEyPNhFf6KJgyqk38LeW4nMcWTUK7yii3bdzQ3tnE5BiQJNe1P4FFgPCPfpX9vWVqaPNMLpF",
  "key30": "qZumdEpLFgq7MNPdKnLADByEvRQ124sSypnTATDhSaHRgyRnK5mieyREHK3hDq7YHwKEzjK6QKfKJ1i3r8FEsrb",
  "key31": "3QceUJgCF7DEBuu4TxRaUYkGKPRrKwXG6PDA6Cm4xSr1BJeLBeZXLyDwH9PX3tyPDwToPPndU94xfwaGYJp39Fxo",
  "key32": "5siEbCirhjv9Aru64h71SYRMGt4NhBm14mAtFPWwmyghg63wLMQbRYbHs9chKDMmksMzv8G5dqbnRM5j4qumA3n6",
  "key33": "4wVtKhtsQsDopUs8zdVKJnBrSWoFtC1tYZbjtiXGBvwxo25KWvtVTzkp8mZDBhJg4T1TmoRP8Nic2CE1rbsccvqA",
  "key34": "3cBNYskUn1u1HZknzosMsK372uL4pZGN8xnptRiZmhB73n6SZyUex6kTttxkMUbWxjZzMhYun4g5NaXVRRMtjBds",
  "key35": "33ss2BHdsH3xqxWtdELGTJi97hpkbamxbGJ9K4SaCZnN4WgvqxJArdhSaHMU3cJF2adSZVd3iiiG5E9Ue4YQSr3L",
  "key36": "5sfC2ca82oetvg264sgaL1ZWEvnHEMYkJ2sNJuASauKkqY5paz3fLusQWCf3bDeanTR9SaPp4NaLrFGPeEiAFHdx",
  "key37": "gLRzTbsTdq3YYbnuy8wxAsrb3XCetuZzYXtMqABn66jcXTHaCB2k1CFNh6xj7bhKBTccuvZJbTJ2iYTg1gNEeDY",
  "key38": "2qSQ2co8jaVL9RCYzcQmH5xKbZjUCxS9wLq5RmAkNuiDDMb7zep1isRQpsBdWbi33z2x23W45Pfx4vnsVxZcTHRM",
  "key39": "5RyaqRdqJUYoSZBFdJxi7GsY7zJ8hxvEFoa5Ew5BL3pGKFKZrwX88qq5FbGZvhJGieJX34gjq7VZuDqymLjvFszY",
  "key40": "2BDC3CpgsSLCAygP5W67SAav5rZ7QqTaabz7xEmRC1ZfW7qwToE4YGVXRDBy4XFCKy4XBC2rTMtMGK2CDPLb3FWq",
  "key41": "5BcTE4RoEuHZnba9tAiaM4DtLRkKpK6Q7zRB4nYYbcmh7JTdwMcLrGxezWjB6LxpikbQBPYgZEXnQKVU4zLHfAbk"
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
