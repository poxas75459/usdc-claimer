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
    "CoArtmCN4wKKJSukiqThYUAVmGCwcBsErgQWNBrPTbxMVSb9X2GytubU6UGCoJKi8LVz7rH5XJ9g1ZpobmDUPhG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELLYHNXXNBmTH5xP2xqzcpECmZXjk8yAe2NhV7nBRdbJngYZxjUTYmHG7z4m7ZbXDgWdPkGMoaa96fQniKZzyKd",
  "key1": "4wGzUhU4MRygmBnSsEtRpwbhBdhjnBpUuACkuKWrCt3vejsoKgExvGvGkD6iYB2FtBr3usLojUMH5ELmNgNXSt4C",
  "key2": "5BXJ9cU7mU1PfLpZ9Xi7zm4LPeS5gTz2fzM9XuwcFSVxUstmVFKMmxcF2WCjKCMvQFDiTcttzaUg3H1tfxNTPVSw",
  "key3": "36CWbsqyDDHFCuYw4ZYMcvyWqNZvwA9gh9NHDE595DhNeSxVBhLn8UeoQsMSwgtDYCGmfEdVd4khsaWyRYbw8k7z",
  "key4": "4WBqFvn3NxRyMjZkmb4dm1eTSQAayioUQVEe4kCjpAJJURvtxxbri4ohSVNCL41utjyCAQFmSFvz94VZ7wvqTYhZ",
  "key5": "3wezKRrp9bJYfUrf54F9rpuigy9utFNyGh6zx72qPePGQ482eSxj7AnMUdiXC1ywKsKBMYuaL48u1mZUdKKvXevP",
  "key6": "5NFKKUvv5FzYtjMeL24DnYrErJPTB7EiM1beoUKTgAPrJKF6R3oZDmF7kgFKfQWymgZpSemF7A1qmZEyiGNspD5E",
  "key7": "4qxPJguLrDL9qqeH55XPANPRWeLHtE84CTCxzjm5Z4KwFvYv3GhvhskrZURcSWjYPudygNECWgmzpzvo5vEcMe82",
  "key8": "5B788QPaWYXDDpLNdzoJPMAPh99omSqSAcMUVFaRUSHiKUSrrotXLUFGtA9Ncn53jU2b51wjeqzxoAhRYzbimni9",
  "key9": "5g4fetnfTkiFJEG4h2Cj6mDmH6EYbq25zc3zhQcY8KUSjWgF3JnsVbY6QW2X4uajxZKgJoaZWf5bip6Ho12AcbK7",
  "key10": "2QnHZpPGMmyFxyxgLg8FU915WZ2dwLxz58Vzxj4EzzywDj68s5K4XDGJhg3QFBuEoDrfRnCfddkriDJYgRzEUWQD",
  "key11": "65qaLyAZng8aPjUKKT3zEcYbpKQgWuAARe1nwsHyk8qMt8rqGCrDhR76q749Vg4oqnfQtgfD82FuVQAV6cR4yC2r",
  "key12": "2QpKQfmjVWY6XRsjeQBZKqu8BHnfg1W9XzJ5cmeesBP43ddYyHbGoWA2jCi5BxqrLdPyZS7nif3jQiHiMWAHkWKE",
  "key13": "3XjUpHsCqMM6YXAUoAGxYY1dmKqLJpHSYSqW8dZAEwMHZBRyenS6DjpFVYWfHRJiymmCaGpQUBnaSiRzq2neAbA6",
  "key14": "3q28LQPoopWKgCGeJ8ae1iJH2rN43mckZPtR8T26HE4HvMBFtysVqdHxPMeHdMsij3y19e1hTJqVbE3MrKo8R1sU",
  "key15": "2qjNhwcDiPFYZQTHb6tX4XETjXxxRzahQbLVumWcEkgSDGeMUkgQNEWKhoW5aFKGAaax4t1s8sHByMuNemPByPET",
  "key16": "3ghMBq133Rhp9SSuP6LnvjVomhfKS8GXsHnQVbez5kLs3ALmx6CiBPEHMmxq5kVqhy1p7SWW1W8khTpRDrHyCLRZ",
  "key17": "JZyuRPdo16eJDm1VLLTqAidBcRRTLjb42SmFfnadcbWPweJ4tjDS4NGiKCwQ7grA9JnFoaL5hLhw1xfein57ope",
  "key18": "5vdSH5xEaAegfRdwWwRi4RS27BYT4RCHstYdXkRQgyAPKWAwZvKNBSATkXnGpCxwxHsi7UUJfDVXUKkUKftMSnCY",
  "key19": "3KaSjxVMCi3TFDR9zoDun3mGzttNGdrS11Nnr6hqMWHP1dFXs4SzT8rnbm3cTuzLNuLAa7uAxeJ4PRdsTybH7arW",
  "key20": "2b95nt3kWrALM5i9ECctscUk2HXW62HMVNPBxbvhvxyP3tE1S5UfSZ6urRpAsKpLzetRX5L3r8NXEudMM373VYpy",
  "key21": "znKJP2uaNCwM3WsV8ejbk5zzBhidohCy5AK3Hgdoy3rPhdF1UYt1YCq7XXnHBhLteKj9rUm4ePYU3JBepw19G5n",
  "key22": "aGDJcatoZuas51zUvMRoWcsJMu3E8GCyZCfUV7qU4Nugi4eynHGBeRZPXPUZZvgp6dmvmJ1dm7ws1L2kALqkigF",
  "key23": "gmydgFL3mQdhe9SFzGmVr3Lh3Jurph5iDaCxjV25nGoiWMsVcUSAbjPLQZJLdZMFaPop22xNpVTZmWpWmQE3Y16",
  "key24": "X53re3ZyQcpKEWRTm4XKoFVLiJUH2baCbUHPVxmiGSFFBcPPYwaKgag6dWgRXm88bUSXB2NFZWNp8eGVEg3vgxE",
  "key25": "2WGR1yWj47pqSbVv5RrjG3unAPmQcXAFB7nVp3YA8UyJmA93aDMH3769Q7p8vYJxmUB2GShznZQzLDp4CfWhE6Zw",
  "key26": "4izmA6Csxy35gWCL3RoA8sM5MoUvyT1f6RjkGVn88gRHZ1Hpk69BRMZx4DBtvfAV5oLNyZrLxG3hNyMRV7i46NB",
  "key27": "4ztRopk2ttn8YNM7uutcx95hXjshTPdd8hoGCJtnpFcgCdZpFn5PUqGiRA9o24qqUhGRUgyeD5E6EUZsAhx8ZVr8",
  "key28": "2tDJ9yBvpyoPui2u7xrZNYvvhsj9xXNqetoLs7oXdjikYpeFn9AQu29Bp4A137ZANhwwF71FCMXsHpQjfVxLBhmx",
  "key29": "JmWf9LpH8SDPmxhV2qDCxMKzzAdkPgpv1Ckg7yTgU3q5WHYc9UUi5CrHtJX1mYJYDKH4rDD4nuLsUh6vKohAPfe",
  "key30": "3Q6JNXyiLZ59DZPMnQuhP7KyvK7v61YhxooZ9uHnYb7oS7FLvtFPbaRJgNHX4AY6nvvMQKTA6zhvLQynDZ5gHZq4",
  "key31": "6488inenRuKDd9Pn7Gj14LPQkQrrgy97qGaUBMxb15QA8rCdQfPYSVY7KrMetKz88pY4HaziHqxYhxX4YxaV8QxL",
  "key32": "3VxTXqm5joH92nvrVwNtbTeprAqKna76rh6JkHje1EkcGSq7zktkLiYuGk6DWF2THq9Mt5VUHZtVW9dnBTAx8jA9",
  "key33": "4kzqVBQ719jwAbnhq5Ey14yQJyGE8Jt4PhikpNkh2ggtsu4koF4iiwZi7GmuKg1Yp6PejvDwVJ5QD9euQiJ7AKdF",
  "key34": "2bECxJrDmLGUYuBv1koqzQXy83X1so9o6fQnKeSs3micmYtGxuF8QtC79Zk9fHfN6aJgiBQZc28zDGBWVmsx2zJw",
  "key35": "4UmXBHMjSSHicS1e723qJ2YoVqJRU1Mi4oxgJPf3kTNYnwW8sqRJ9Nr3WE3uYCrfzGLJM4drJtgJi5WKDCUxas7c",
  "key36": "4LfjetQJdddmVtDDZiMH7bUSvy1Uyg3VYUBSprnnawuqS7Wx9ZSKCxqHsAo8sKW15yUH6LHKUYcPJ43jJMLkZZnP",
  "key37": "ztGsp1453h5hqjFabSBENeyJfYZwAnFLCRRdEjcPiiMbpjmNKTByzfmYypmaYHe7argJ7XW7knBA6mSn9vk3MHQ"
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
