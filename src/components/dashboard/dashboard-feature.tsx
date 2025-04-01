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
    "2BGnGv7HHuWKyydGy2pn7tS6wAc1fiQp3e8Q9CeaM6yuL1DQAXpN7HhwcXpqUGGhqa5t5KCnpCMKRM6ojN5KVGpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SbY9ohmkhnTunPb2jx5U2wnxtP4eo3V6Di3PkJV6W31kh1tznDH3cmQhT4g1tzbvxV9mcdXFd4ApGZN7RwJoVC8",
  "key1": "5Nj1MURDzrTD2WHMpEzMf85tr5xoVYoPmjZCSXkkRJBJhCrxcFZCdq8Vd1N3zRuDjZVeXweMhrYtWCAGkDtgkzMA",
  "key2": "EKKucMw3BggRQ6a1ia1hKxWR9BJqmgPdXDXDjKhYuaP97TwEZoG5J9sU6jXQLn7MT3GC5mvD4nE8jW4KfXAu7fg",
  "key3": "56LBS43e6fQ1a9VE9bRZ5XkvFMVJYzWSaqX9Urmqzusa5qsYYpbRuPxYA91v7svm7aubj3WPr27b9zrZTM5uMBZC",
  "key4": "4ZJtgmf5RiUzXoFoAzqety6iTKgWNRpQHGdKcXn3yeemThEnHN1VB2rNRDaVCBepSjFAvrqKMGG8XiS2yUjSkh19",
  "key5": "4hADjuDXE7auv4kzVFQ8kZ4wR1i8uhFgkSo6wtL27sSb6FRLzsPtknYSjLoguYzu9QpsA8mKwzRwmrRsY7yurwh",
  "key6": "DDsJHzShwJ5XEfZ6ZKyuCnDxMNcf7RzPPGiT7d9VRvEts6J5PNKn3KEWKG1b1AQq2zQjrGHauzT49zuzbFkJh9i",
  "key7": "JEpsoVRaaMD37nMaKdqJcoS3acFcMDp4Z5n2zKs1nU7U5eDhTVUagCkBfHXteBYqhmk59Nng7sC8F5FZBQG69K1",
  "key8": "5SZk3NPgKgK46CHugS8BxfDy5PawCrwq1f8DRAZ1x7EjtjiNsjbTrEwRZcGqRC4mgSAub6zRV7s7GpQq1YKN8Jbb",
  "key9": "2j4iFxVpKVQjdkWmEprfY4UAMYtbfpr7nKNhDsti5MtaQK8FxphHZrA9xQ9786GFmn1eePpMFqVDPPJoY5K1ZRXD",
  "key10": "3q7wzqD9QLRcHA3RvjAprKgJC1eat1wjEqzEd7qgZxR9jyu7SzXzgKPa8qnxpdXWGBWG6JgL1jwBuD8PSFW833eF",
  "key11": "3aDGetXkHZDnUGRaKrxFFjW6g8sn1Rm6LDAj9bWdYPZ6SBHYYveLM4ftZZtWTgSQUHfLesi8aioNx5qDU8UooJxd",
  "key12": "5i33LzraAkPY8WrkRAZ5WuTedKDTdXjVEH6g462Hmh98mziKsVwMdoR3PfxxkPeExaz9T7VgQPXz2zyL4zaC7uTj",
  "key13": "3eqQvp3gtesfUdESHLUSwbmuvP2SPeqP8PmnU5eHR3ihXZXJafNYH19PvSAXPENGRw4fvVUR41B8EjLCZ9W2SPD1",
  "key14": "3u2b1yhupCtMwXNVoszdCzk6W9vJdosSi9sPSjAnHTG3e5EX4HA96BPs9DfhZ5KK8FYmHEiULc7tXyWZPxiLJyJF",
  "key15": "2sNCBEakZUpCkdxJN2pUnkU7diDPM22QDrPoL38vgQds1WYLGwZGpU4cvNeFb9kB3zk2U1xe439yda4boYAPccEA",
  "key16": "3xdfmJGd926AXSTyXdTFdadJvJsQuTSto1MoLcz5V4s117RGiwpsbrMEvfsqRxFVhHxGLvgvmWihwU3Y7ibAcDUi",
  "key17": "3iaRpEVfwYpXaf85BJugkwFYMecdjhZn88Fs1HD79CSVKS5KRT2k2ZAtJtVGLvorvfZfmYjsWAdzwJvc7jqyCEGm",
  "key18": "5sR8Q45752xaMPQvAWJmxjSBGYURcEycTFTG1MBFZsuAeNt8HCuHxemLHZono4RxSunFD5qH3dv4VSX2zgayrzNp",
  "key19": "5NFY3zvEZFAKggeKL2ceU9quy2mb6DgP9zQHQk4jo8RQ3NJ9jgceiuaGmsZeU52VuC4kPebq5Ta7bNA1cgy5Avyt",
  "key20": "3zGLB6F67BAUtBAqpm4TJETwXkEvXxvKJxMgykFrtQoMTz8Ew3wiRaPS1WngXUHe2dU5x28PxnFeBSyqS1YC1iyL",
  "key21": "58KHtgwSbTz97S7ieLbJeQL5MoWyc16yJWnjfjk5bd2K3zyGSnUcjAVpzdc5YK4QKJM8Qb1wJDF24UJFTASceEoL",
  "key22": "3TPWyXmtetXyp8fAfXpb2Btzs7GUoi2YGNECGdjcLnMt7GeCuv8wbQQnrdeQLk9PdEAk1d5P72UKRYHqrAsmj5kH",
  "key23": "nRiqQhkjxQVyite2W5Vi3SWUnvjj3sf4WJ5f65AVzqRpjLAYBmMRAXi39QzpT2dE2Z2ZWojFJxaQ1HGXCugmJvC",
  "key24": "353AANvkiD2wydW3BzADtzq4FkAn49PFNhv4EaSH5y6LbwMGL7jP4AG8F8N4Lp7FCMDFZK2SEC8SSjAVvxaFPmE4",
  "key25": "5jxkKX2UNdDZqgARnZcaS4Z1MrJLUSZT2RMq89ApyTi9Ds7GzTjYLwurZYDgcuh5J1pq3wDeRyCBHjbrtBLdEoJo",
  "key26": "4RsZnjnL8DGQGmsLuPyruQ3AgReCaVJMfsb7YH2xeLkbxeW4vSAbo8T2EMK9Gabx5VYz8tzvZzb8kAYBFxAwa6cR"
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
