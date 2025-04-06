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
    "2qAQWkiKGVTmnkAaAMeCj9HHJcdPYLZJuvbNnwWzbyCdN2PMNVTzfDeNkHqYhee69J5LwWjWXxkzLMqvHyJPLQFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F12NZJvo2qSnr3r8oFmEckkbpQpSmVocGGYmmgy1G8MpypgY11mbkvFduPdyt3mg4QBxYdvuwzNuJmXVev9qJSM",
  "key1": "52c4fB9mqcFVr4sNxaoU4aK6dU6eKf2bf42q4xwnTb4n1gUaxWzKpfGAQeB72wW4UnEJPgzacvGd9nZJNAZAXMMt",
  "key2": "3SUFNA44oFeZsuC7WMLUAVMVyRK5CnM1tvCGthwyRh9De7PrgDpV17z3oi8rxptQjSGEKBD8cBPLEmXEfsEJV15f",
  "key3": "3s4a39oAv4NeJt6Xku7rvYmwLrFToGBHbKnqqjrVCgQKrCdntcPJoCaTaA2PiWXcCuNVsL2Qq1mrwkxEcU5c41t6",
  "key4": "AMrZRr7vGGfYLaWA56CSmov4SACX9Vw1bvRR3uivyFgWAfWTivyQ5RuTaaWYvt8eeygHUqYz66YCwv6hdiraKoK",
  "key5": "3rFcA9x9JFFFzxEPtQHH2zCnKoNn5cdwtqZKAyLF3hSTXBK2i8ca35SCSXSpmmVcQ4DEvUBm1nmMZvGLdFDuzxLs",
  "key6": "3qgpeN1s5WLbyjHCbPbotcQrGr3UY4wN5y4K65tqFzymN147CSWGgBE73EdgiVYsLRtr9t8a5xPavjTgb8B2RX4p",
  "key7": "5T5kLvUQHDYBX3ofDvDnuYGk4yNdS7TP8GvrrwPW3wgobmG4cdu52Y5QpULi7dwMNTuB5YappC2BaHP6hA6eehYd",
  "key8": "45UqFLeqfKmmduUkYxxD4iGMdYz4gRxP2tq5bk95aSP2x1AyAJxkZCHwrZmvbcgwGfQqizDzHfP3YrCP1QZygNUF",
  "key9": "5WyPQ8kQSs4ntK2CiyhCtobYS7E2UpY6HxMcPM7AjkHXChBHGv24HSXvi7KDHa1hghvh4SMeaLoJPmNMymADjhtf",
  "key10": "5rfSyUNhXJneKwRrPhpZcvedRbqS6iiWHxZQ2xR2NjueKNGdfXgj5hx89dkWPL9jaEjiXtJ6JzosWXzEF5cnFqY2",
  "key11": "3KhGxCdyy4f9G4qHY51SXZMqBdYzK3KEtkojYeffdgSoCLs86bh7nq5ukHqB7N6uJ5PDYARLVXj54EqpYhyBY39x",
  "key12": "2fDMutXnx31ZG9uorkDTj1CFoTEB4AHFAkNvThkKjbZ1XsUutQGnKSgwxEkREcX8EpQacwwa9DydKisPSAp2ogf5",
  "key13": "35dKCFUxbk7rmhkhxu5Tw9BUSfemU3kJzTbnPfJ8wXzetfWvwifXWiHuSG9FRbZt2yhJPqUH6b5DWmbYyJf4RyfH",
  "key14": "4DftkMdRYbKCiN8iDWcrnhg5PPo6RuwRmb5V9dLefTQvGDMyJuNQvuHjUkTzwoEEVXY7vpGcSkXdtJ4Goc3xgd3Q",
  "key15": "FyiDrmziwenFqc5yLggzX2Wj4DnQfEoNQVPqyFHqDv5spGct3jRyoU7KPD5XCuuSiMrdcfobG245Bp348oxCVc1",
  "key16": "36xqipmp7mYaRu12YpBYCh2ZuQKMgJ73WoabUeBtt5HvUF4SAjvUmkCAZuckLhfe3ERELe1ZGgcWxkbKWrbcHeLx",
  "key17": "2dpQteFfuEzJASZj7JgKvTE1hvyWD7cFmFiXZ6yemgXGhVA3m3HByYEkdVaC8imXa7dBpcEGQb13A8yU7Fo2K6bs",
  "key18": "35oqnVWcT5jkxYpBtFbfQLpg9uF5kpzF4Q6me1VpXnjpxN2XLiXA37h6Yh42LW44GSk5HToeCkbQnzS1Xs7M33tC",
  "key19": "5yYJtSQpRQ7AAJT4RCyYFQZSR2qXq4hRGf26VZZVSn87PXyqFRmhnYrud8f7EterMmbAWLZvNBEBs86Ktx1UWkJU",
  "key20": "24JgWrm5PkyU2SU5H7hGEpduo7baeRvSfCaQqYSmYbMEX2N8AnEcgVHE2VY9dYseLgzhug1GSm4kBNW6z2rdvwVE",
  "key21": "5vk9Yy8gvnevtLaDAbfrs1y2HfMG9e8uM7PCpAz7ioMxkWCDEvRarTsgMKZQuafz4aXHyH68JfegNueiGhpAmDF4",
  "key22": "G9rbLxjsfwGDVzt6bS5faY3YHdYGrPG17zNHyWAYg1EpLRENvsLo5jNex3FfTKz3g7GHM1eD3MwgUrJrxXWCJxU",
  "key23": "2RNQLRrwjLf2sTmTbq9zYghzGBhoC8axEZx5QzSCHN5A6SqJ6tTvFNhZut3Af6ALEH8cPPAYxWt33NAhaST9NtSN",
  "key24": "PQfFLfuKV6eq9SVnEU1uMLa9xfWBiehHsPP9DCz9mnYzLSBNXTsjMv4C6vtvUfLgyAaaqiV4d1Jo33qg2DNmzJQ",
  "key25": "2vGvMNKvdnZU5rN1cSywDnopAAZNvqbWtQpYjCnLGJAEdZsFYSrdU1CRxLkSBNUuCCDZ1gPv8itiH3JMr97EJGGN",
  "key26": "QKGGKpt116r7DSP2hg9HGhTouMTuQi2ayz7brbgVLiyVksBQqokiw3gK3tCoUF5gHXbkRniqnsAYYRcF9PqsbKS",
  "key27": "4j3epSwtHHJHTodWBiFgkaq7kyiX1vYJuR1gg1SbGwWMPkH9Q6Ls1wUDuM7JXvC5kwfbskUi38TZJ3V7vnJLdkQj"
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
