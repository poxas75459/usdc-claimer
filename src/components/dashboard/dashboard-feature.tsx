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
    "5qKDiHSe2rRTXte6Ynp1ewe9oSYcmEoCBY1a4z55RqUjNeWr2myJs6rfvHVym2pEkc6urLwkLyzrVJ7Pk584T5EV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zr6cD2RWPFVPVCGb5zQym1ZcUJJjKKdFVauex9nCy4WdekMRtzFioqqZ94Vb8retDmev5CWzUxk9YVwTufcnRoW",
  "key1": "jZHTYBNHjMvWgtcSxQLFUCveMRFV4BmznuRQTg8hwzm62wbEFqBh4W4oVZBNUFMCfJ9orc37z9VNiEcawaRH3er",
  "key2": "5G4mX1tNw5z8ZbXJtJxh7ABunSikNdSQLCimq46UjeQmAofen6zcr4EmVdUXrFtPagZvjh3wdTHxzmRvNZvMzKdQ",
  "key3": "44KYkR3zW6tmxbyyvL5CBAvcvJRwsSfdyxPsk7Wg2awRCkZk6KVNUqttertrBnSpzpCCp3JrFE7gfNxT2eXAvxmm",
  "key4": "3igKPLkjuGPkogLiHSrvHhoLLcX9i6qYcVCKQcz6WwomWQyLgfpkexvpPAC7VTmpXsGLDwHnK9aR7mUvbZmmLSo5",
  "key5": "2WhRdYrizqSyXFgRBQQZfcohManPTjD4ckMAygkwyudXyHd3KuUvY7nNhSG6U9wtsNvhvhp1Cp97gMRdzrvXweZa",
  "key6": "2gf1RPYxUQCdbdJDdFhwfnDaF8WLr8y9rF2NdyDFRrKEjwmL3XjNZuqffH6rWhsTbXLzebZUUqCBBHD84TcgXAL7",
  "key7": "3GcC1gizgmjN9zPjX1LwNWPeZVVMXM965eL6xDUQgPSZqwezo5jvWUyVghGiYFFDxuy4FoUWcKpLXwd3Pa2TbED",
  "key8": "3yjkkU7qgq15N8WCbnm2oymQ5QxWAFzJuCRghrKbb5xe7ejdVTQMGBdPx3Jn2NErdCVyvNy5jSg1QPrrgtcERcRT",
  "key9": "2NDVGDYbq7sDEDziuqthZRGX5u7K5Py9PFuvVLc2hEkJtknd4akmfqaTyhsi9af1YKED59WcKb3Nf4NFMm58FB1p",
  "key10": "3MsXf4dh4qpFtLZL8icszUtiBp3RFGjNNKKwfSwWQrXURuZwz7rKCRTagzPbSMK6gqzeuHP9tVZ6CSmjZ6S7A1s3",
  "key11": "LK2zJfAJPoMULPku6gvB6EJpQk5sUPaDdqzeB8kivt4HFcRPXXxGqPP1X64i98wndavQJ58HaK2mVgUsPDUsKj9",
  "key12": "3JCz8jFaciFtkEfqtfL3UuabDAFYKtA1WEvCoBcNrXbDPajWuYKEvpbS9HMSCu55RcaoA8HUmrHNf8atStPV9d1X",
  "key13": "5g18pjT6vGRs9LpjTXBVDwdajcnFboczvK6irYbYJYZJmrvnNaNLmrzkSaSBZW8zJR5EU547jkW8Gv8Ybzwg4DT5",
  "key14": "4RDEEFZkZt4KbSAVBWjobJNsTYae6upY5QcofB7DTA7WX7fWyGaYVMRxQaycEPBKsW4rEvhVJk3FygdNBtGpfu2L",
  "key15": "2XvQHoPy38eLX7h2qvjnmFdovBykccGpSe4EnBxqpUGnTVMvMQpH359HNN3CSTZYzJy9p8G8aBJsHfDQ5SGD7pVi",
  "key16": "38RwSXeiZs3RELMcg3drpYYxznzAGZZbDmKHCorBjPeH2vBnfMr28dZwLFqBPMttPpJbAAfqRegkpbWFsxvRZNAr",
  "key17": "4sspv968PhfAyxw3YXzigvux7vtLFzeYkVDtdsEx25Lt7LzKMhhtXfMTa32M8w6P96kkeWPekLfzazKJUH9Uu1Th",
  "key18": "65PTL41mzmYxgBJvN4EjEshr2CwwVYN5cP9MQZsuqyKvRweGhYnjWn8656EUBdjqLBsbzRF6rtkM7wV1hbkcHsrJ",
  "key19": "323TvuETMDvuHGtDuJo4eKVAc78ZtCb5Pumcb6bSiDdPbvqzvsmeoKdjbrre1ncN9ENKxe3YQFt18WPqmHqJ7tT1",
  "key20": "4eatB9UL28qyQiu2NpbKNzPmhMhoG8m4dZZKxKTibE2mTeq25YU3r93ixdzgivMx3WKGyZE6CwZXyJgq7icG1zFn",
  "key21": "4jJhywLtXmEXGzwPxhL2wa3ysLfji3CZXPdbExoCjxsGMgHnRjp5gp7sQDRwbFqvY7oTWVHH37SAguXcdnW5Wsd2",
  "key22": "47ZttZpWxSfguT1c2XCEPsSo7uJTPENCTtKg6aH2PkMhv7RA714YFYG7cuVyJqWAPM3sTwcspa87onaRsDujKKzj",
  "key23": "3QGegmq6vzfxiKL5jZxNEm7XL4GRs4ScpxVqJPNYsca7XkA7rJYjNpWqwwvjEwAWk6oDQThMzNcphXDPdTs42WwX",
  "key24": "21SNpPUUZ2cq8FeJmSfEtcBh8jWBLX5LzSSSnwz7x1oU7meRdEC5GKkgshMdXmnGfRbYa5bWB5WCBKiipQXGigeC",
  "key25": "4ArLqYAJzkFKjiSF7ZvkfvJhw3b7N1cHWUJUAxmaH7NaE6AAev6NvuKxMdeximfnCYVUHjkXu4cBbPa68rb3mGCZ",
  "key26": "2KLB3rE8Z6E91kUYsm9dXsw1eDcwy2T6FoDGXYGgGAPpHSZALNnQhyfrysebFaapP2V7y8whdja8k7tqBqmHnWgQ",
  "key27": "4HtVeu5csmes7psD5fX5nf4fjNmJVZh1TnwjUQN9SwwxbMp3HCSH6zJezCS1Wtu4Mopp1dzfvVdGmXhnnGoMoqpR",
  "key28": "E17h1Wbijz3A8HLDX5FjKCbxVpZCqnBkC8szB6n6tKnqfTA8JHF9579bofUuZ1sMoB92yFX3TF4ZPrmbBk8csGa"
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
