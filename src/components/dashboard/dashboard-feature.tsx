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
    "yZ4uDAgRqjZjQ9RpDJHetaTKWdAS5B5pCnHrCMxM39v4kymc1j9GTMHW7D6kjXgnnhpx8FEwZxTSRF4UfyCqQj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9yGahqecxUmYBhjj6ty7Q8TnNfiqRfscvMc4ddkkg8wWb7382H7yJchHmUrPfcob8aJVqtdGyd6nxCLdfALtxH",
  "key1": "5DxFR7CfdJzESXX9a9XsFFUk6YSS4XPMXRMQojZg4xPPQp9Qn71ZuUgNkFvtr18iux83ADzSD6T5PGykrab3yr1d",
  "key2": "4M8nrN3FCzw3YXB5hBHGdY3SctYavGrbiR3e7D79rXDMGQm2wNQvxwxm9FVN2Tq7d8d5CNPdAWVfmY839ZDZZDwb",
  "key3": "5VfKNZ77MKwLSj1KRug86x7vYVvHNuWQn66BwjzE8zVhEcKvSNrurAMgV2aMBSQgXmFQPTTTETAftUHdTPmUqNvs",
  "key4": "3BCxHN5VuwtG3Fd6bUtJPSF4rwncqFuwDRqUowr4xEtddPmRbGbrzwAbPTaXrbWRWYyk81424kxF9CrqHbK8Jmgj",
  "key5": "bJMM2AoDscPKv4cdYKiRJrMrm9ZjticFW8BeNK94T6o3t8bEZ4FASdnk6ojZUtenBivDsow232gZJGPo8oyyACD",
  "key6": "6onnGezBYAukj5JPd6yF1it6J3WZWiAUbK637pAjSfSErAP7apq4GvX1vP3KdLZ1hJam6Ev4XejfQjfUqujosgk",
  "key7": "Zc4KJXWGQpnRYukhTfUKonyfbpoj7dNn65PysCcFpn7PkLdKc9gypdFhAG8DH7wNqna9K1Dz6dgEznRDz1SxPDL",
  "key8": "5ZERgS6aaHywnVBse2UiP58Ca8jvWaGQJQ3FxnNts4Cu7fXzCqGHU1mcPFYbw9tAEL5QrgKvQvhyvVKZroBJjQ7K",
  "key9": "nHTmHegymQ5hdSCAaxuvx42VEXp962ujYHDq7KawcZuDxCgVLh9QJrLuW1eaCPPisS7qC9EaSBczjXBMRat7o8X",
  "key10": "4xES5Zy1Ts2FHJ1RjjXiFcr247vtDkrNSF1ys3aBBQswWi8P2k468nGGd8EGeJ4MkqSnvS2aW3hDL8cADMYkRsfd",
  "key11": "2K7JV5M8gmWANocjKnRQj4U9zzrB6j5dogodvnt4a2xAXhP3cFVYdZrj6XMZRUftBXmQruPMrKUHBGrcsydfHxvY",
  "key12": "5RSZqchNJJc2CKjvKpVrLVbUNkq5Yy9JkbbAcq46XJYTtBTPxZfx4yN8YCFMrqNQVYmGoHrcxPpykcG7ZwouWP9o",
  "key13": "wnArhiJSKUkJ39c2xXbzmUAGkXXbN8YE2XRBReaeUQmpadof5wCsT5Bf4byiTBuxjNpfQNbNJ2hymae6ZAUsvzQ",
  "key14": "3MCaufDFMozF9ZjkNQaqFMVsVYvX8kmLHs2YTp8zQTGNZ5fs3NvHACXohgBroeRSJ52xEA4KmzuDDveHyQv6KfU9",
  "key15": "5YiQdsfHVPap8gg9oiePvq5GakysELqRT8Es6rBurMkxEHCw9fQqrBF3zYQgc6YRvnACKpSFyQJ6LZpvFrKStez5",
  "key16": "5vz8rztAkufQF87rH9aG4jWUwPy6YrTKwFA8KJobEpNpnmcEjpW7eirsdVu1Nq8MyNv29BLryvCRroTbevarhBoh",
  "key17": "4nFb8kx9SaJgM2nwsjkBV21tj5VC6qEt5Vqk9FKbBxn5WbRer7NkJYbojAiXWqKHKna3yw1Az2kjy1jJFGyf8Yx3",
  "key18": "24ZKNEnWb2X7ENfAD7wgZ9sztJF99woqLrP1M5J8FeoTNd9rQi4J4FkVAPPU99dhaYRCCPNerk8q5sxdDy4k8MdL",
  "key19": "2U1aum2tBcTMU9VvHh4WM3JU7ZcNbnJi45VxUXUGxicV2kdyzXYjMyaBXv6Equ7WZLrQnXF7FPk4mbNXdGv8sLkx",
  "key20": "2u2hhKRU9fraDD43yhEh16FkmgD9zRHUqgYt92sN5UndNt34aoxybaf1q8C9LNySQpnpM9V6WrvqVLXN5h6xR5AT",
  "key21": "6ggVkNNCZWKd3gtHDiH4Lo2gdguf2BdbANKjtbgSxhxZ281KJTcrK28i7Eh14gmaVAjp6pv5MQXLdKQfaAmew87",
  "key22": "7qFoTjq81DBSXyZFuAQnwSJwRkCQR3QKGxjRbKNUAubzkWRRnwhnNtsCMjny4Zgx543KmMz5zTEY3DhCJBq7pKZ",
  "key23": "4wUB88UYfknTZ8vorT72ftV5b3X6HJjGv1DUcsP8CuR5z2odQdo2tnTSKMPyHGuBJ53wxqY3mQLuAiLyUfGA4pQm",
  "key24": "346tBHX9KAyXGNYXTpfi7Q5WAqtJZPM6W1zcoUL18R13EQ91GbKneP23GFnu8ZU4awaJhQ7TBWE2hvZyHuGoBafA",
  "key25": "4aK2VTdPReHQUejsK1S32AnWdq5B9E6WeUWnSPFC23ZWdf294NvU6Cy2vxXPrFsUbExyy9hy9K2U5m3VYbWiKs5J",
  "key26": "24EpPpC8hGhUXBSbmS2vwQSLofr6DazKMR7Xp3GgP2kqu36jJRpfueGjMgE3eudnwSYETypkPFXEwn9Qwb4h4hbi",
  "key27": "2Bow9tjbXZPdrdy4A5JHPeMtd9iquPLwXBZwAvYgX2JBzamBMnxQxSm9eqRHPVPMbGkwa28jdkJgtBnSzvSEGuAx",
  "key28": "3MjAsmKpJQRMofzPnJUpPgvv5zbvwmnjTmq63gMiohzJhWeGqGDRyP8ECgLBx3qpwgyimaqnFYLtDL9BHm3AVaZ4",
  "key29": "HreegpJnfhySh6DR1V1pUzKSGV3WgEwQMeSmukbcND5LRT2wuXrLm6mJzpdsTW5KFEvady764vdYY6mGectdARB",
  "key30": "pvWTUVKUB49KriuTTN73XMxWsec6PfgpzRgM1tyYmqScC6vrk9Y3k2pAvVZz36BoVaTToJo39T8RWh359Je38Df",
  "key31": "4A3i96YKTZWLjncauYnSynatienveZgNqhcyTBPrpJXotAwEHuwv6ngdZTvGhk2zQiprcPGBfZe4TSWvNhEz2RYX",
  "key32": "P13whxfBfUgE88A16o93mdc2eFte7xt9GEAc5WboBqXPf4LT85G6hUETiLE2fY3YqJQKda71o3Dar7CHqkHtPqv",
  "key33": "491aPW6ZLiVgQAADn9N59w58bmx22hhmH5ENCfE8rkzpzuoQvuHLY2aFW5tboLyMRCGN7VtQjBEW3FhdTuUefmE9",
  "key34": "37g5cbhjSUxYtFiwcWzFaZrvATWc88sZDBzesHyAG5VjjvgSkMxyWxyUHUZQNgchm7FmfB3ftqpnj1TxuvnDvs7o",
  "key35": "59hgtydFKED9VdWhHY5eUSs48TVHy7Z5B6bBPCXTYrqU2VoRcspDnZxweWrZ7aM26NvE6VPhuZQe2Z34acKFtwfK"
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
