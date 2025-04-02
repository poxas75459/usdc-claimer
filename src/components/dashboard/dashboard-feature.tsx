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
    "3fLj8hdKyu9MqKQmPMibfAVvMpUvfa3jUL6zPQUtJGPz9W4sFTFTdPS1m8dkLtBhLxBH1bU8sMLRfRU2n4RKiKDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xfL3DKu6vtB6wGmFXRpEqrrnViBeNyNJT86uPt6arWWQ4sewWAvGW3ThtKApWQ26NdDwpD1bZrstoiPFPhLGXkj",
  "key1": "5hL6Zu9kXXfTKmL43E4icwPkasXEV1j69VYTz9e6UQG8FU4jd8iG9VYjE8JqUZny5WXKXEtdfdjFfaF2nAu83FxV",
  "key2": "2rRtT7emRX93xZig4rc9kXmhg6VQnG9cLUURDKAbTuLvYogQtaz7NscYtG5EU61H8TokUPjfgvDZtiX92MHsKr1M",
  "key3": "34QkKGiGbuuMvuZxXRF86nMxrZHMC6YDnVWD6nJbdN1JWL3GH5BBowNxd5N4adzkUfBZQRcDAiwPhhz65P5tJYfy",
  "key4": "4X3UW2TtDSaoK8HVBYsRNBeqYUUNwAxLYgfNedkNicTi43ycNCWgw9CTgh8uXKkxQWfj32NKBf8c2gB6Amk1Gb1D",
  "key5": "DBNrohTs1eXQFAYghdeKB2qGTYLsaj96NiWiDrcGXqZaZHyaKA7Z3ZSjaQxc8yFKDrxUwyFb4SxDaVP41BiZxbq",
  "key6": "5i47GBP72AidQHEs6CFP2LmgwJ2jq7sCC4ePsNdwvaLCFcSytHP7hXUrAw1RFmNhUy43wpuU954imNv4MvCE2Cbx",
  "key7": "31jnhFWqHemEzpLPt1k2z4Vh1bG2ccwoQcw5SyL5gGSLMeWdeCZMRbU1bu3ZnoGqLeHsSY2CjBAFDnSovKXTkN2i",
  "key8": "5i3jtgbGiedFkTyBMXarzub8TL3C8kCKNkYBUqsxXUyVgttavWtUy4TK8RcLP3fNpG6ikiaHCARLuGewTqa6yzzj",
  "key9": "2P3DBHeiwWUz58BRpqR6qQwSGsyKMGk7z9HjRoQmQ2Gaq14j5JMjrhdQnsdtFxJLC3aYBNs9vUFqac52r73LzffS",
  "key10": "3Er15nkQEZfZDK7VpG9FzzKj8E74BEV4dh9Qygkvkf5ToyPMXZi8aCW25GPyDRbuGYXBYFxhgYGf6veuLSRDi4c4",
  "key11": "4D1gYNFpcBA1tR4kzjGJPveiPBo9K14H36yRU3kdZz7o9MMKSEj8RMrPqK6gSXriu38xDm7n2Mxmn4BwbebBpsj2",
  "key12": "rYwLw1FuZ29VLHhJ9wxwae9ZEkd8J5yHVAqXdSKhnCM2DvLphxx9vbhaHVzRHns7Swh4yKnMzMn96t3AeaSRHZg",
  "key13": "4v4FPVtdAATwZL1bnubU1nEKKtGNgSpGW94XGEVXda7bNdtuRUDXPMgKhHN3vCwzzLBf96GSJiJPARpucgnDR78Z",
  "key14": "2GCZ1hdAMKPbL8d7VfTx2FiXacRUxZeYVngDDGiu9nZstnPEG8tdhfzZMxhUPYegCQRH5JcG6kqUwR2bh9SvdXVs",
  "key15": "2uDw8YEXLoADq5vQvP7FAdM466Y7QN4dad7gvsSBLznu2crruqfAgNsk9LHnohvBdtuEiLogLWTLeKaDTsoGxxbY",
  "key16": "57kEtZNRrRJZwC5rSZvVsPGRdAm8ZLSu5RaaCNVJxvD3GBSRDqmcejm8uJRECoKGAkdf4GmJQczBT68XdTpLFWLh",
  "key17": "3dLqGqfNbQfyhufXyGv8zLeucm6RWKVr2nYRW6Nw6ghAHzBSrnH25ZkEoaRbtSizc9zQsJkxsnqT1JohVn6vkJZF",
  "key18": "faZa3WpcvSsansU2YCb3LwjcKyDmTvKgF1KjdAbhgNFTdcMRj6r73oqVhpsrXY3z8Gep5TnonSH3HmcqZQDvLoa",
  "key19": "5pmSSLZvHy2qWykJGsaaQs7X1q5yGeQLqzQppm4E2FkJgvxwz6fKC4L5K6kGNu9TDqxQyYLbpSLPJF7soz3kRZtj",
  "key20": "45Xuyg8rkyGSsJGAawL3QJAF8eRdwKbofQxC2evjA5LCUZVCW1Dbpfb5k1nbFFYaSH53MP7ZBjkVFERVdpEwZ8gq",
  "key21": "2n4a1A8cgZwaG1ZqUie938wFoMPun4Cw9zwFMKmmQ22fZM5JMx3RmiJTuufScjh1JE9UM6GK8wSfBxPsvX9s1ZaE",
  "key22": "3Gr2kQjyrQ5JGzca2mQP8smVKvDeBTfcUANCuyLPPFeJ9eLn4X2cqhTs9FpZYJK61U2ggxpH8VuczUuabmQDKGRv",
  "key23": "3p2CSvsAQYZ5khYAbTyuSNba9rpai1HqwzaevLoqc2Dwn5sq9gTLujFKbpFejFUyY9YjaWLKXexNUGxbok1SWzks",
  "key24": "5o3SjpVjqoyoKZTCgKzUpMosWqnztMXNk72p9p2SAdD4sgKQFxTTfpSxXpPN56kU5V6inM6WszHi5aoXjpzn2wtP",
  "key25": "3DE7JUF5ddrfc373CTyyRT9czHec8GGUaDEX1RrDtU3xf9aNocJbbidsQLoduuvZhNat8kghdehfbxbGdYdXM5TN",
  "key26": "fFihDPBxTDPzPxS9WtJr7Eufet6eX4Uz62euphb9cDmC5wRJeCtfaE1pa5N8t8TTkRsoHwsWsGLEDBrFty1898q"
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
