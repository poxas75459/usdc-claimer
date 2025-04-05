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
    "f6DMeWncY92GjuC8Sao2fYXvcMmYJhe7ffTB8oK9YfGb8VriG6pHKzSbwBfwLxEjR5E29rvQJ4BbeBgYiK6F1xG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gr8ksVqQ1LisrpyjA8wepwThh5CErVL93LRZq1fA6rGx5brNBJAqvsDH5nYhpXmzr5jbnUoob5MR3pP41GZ9pQu",
  "key1": "4MEfRwibVR75RqTM1dWZ2VgUf61fWieHHpZTE6vBEYuZey9Hho4UPJaZoNh6comPdUMqJfTaECrWaJuYmBPDrRf",
  "key2": "5J318bYVj2G7pCSZKDEZHcy3A139xhHWE4ntQU6kb7AaxUmjTMTt8Cj4pxPD1CUU3Aa6dS7ggtm1NEJcjQcDyEq8",
  "key3": "4pBv3SfynQqFLbHNkpradQitozV3pXJ88JbPmXQY6wJReeDsUMcRsHJREYFyM7LynwYAJVLFaE6CJUoboKCUU3X9",
  "key4": "Gjq2LvKi91n57rNdxdsPGLTREtCt5TzGbZB9HwGMF6zaMK33BojTWrWg2HgkdfNrHW44DuXPG6Ysa7C8DWiHK2M",
  "key5": "7gGzwvym8Gm7qr7GTkQnHcpvbcb3xLjLPuxehq7PULEggpjuiVFX5PQUebhGsgU16kZuGS7hPGXHu27Vg8uvYQd",
  "key6": "be2DihkUvyUws1SGNG6NaVmmoqD4cSYt3j5Kckgc9LADoase4NAA5KcwJujgPCNyq1iPq8Lz5823xoDXdug7u9a",
  "key7": "3f25mjXPJ4zt3BSmGZYNTQaxGwW3ft4BfAbmgeCQAecxAcGepHsfeE9VXydTGATRqc5SagvkB6ASezJbzBD1Q8V9",
  "key8": "52YejbHbBtYVux8mYBWWneDwqsAGeWKudXN3qQXw1PiKi94nCbb8cn8o863coP2gcMEuanuzV6PozRX7wV1MC7yS",
  "key9": "2TfG8QDjRLAiDmZxPJXuVmQQWiWVKm2CRqmb6keY3DCCrvGXFcCamtoAJVBg1xYjeWJtDKJk27vVWo4ERbnpa53f",
  "key10": "41CwrkeuGrSnae6daPokHn4ZSDvd7YSXQpzuXmtd2mQkpwGyGtTgC19dwofbhpZ2bvoTe7YMQATHo87TKs55WTSP",
  "key11": "61j8PtfFwr3CELLsDxj8XcGsuqbh1HGoru7xuE5fzP1jREMkj7stRa4Lyk9419d829cfdnodcq8VVSrfBWjcnLT2",
  "key12": "271hzCRkp1z5Htm94aEncToJ1w7t9XsW6yeMMoSwJpM7AApSDE1kKuJdsMiMsCG13KeHUxPxp2VxQGkQ8BSgAnLh",
  "key13": "443QzJwHhh6Dhf4y5J8agb4zNZcUFD5Mmwh2spmTZgy2nahhT5rvmuvMXNT6qpX2fYfUewvDey6ijhVs3t9yux5z",
  "key14": "3J6kibwcGbuMu96LfZvafN4dYdzMbrU5AfjKk3pPhbefvk8D3Gg3VsGmiGYoQWgE8t4CwpqVdCz5j9Ua9uVV5kQ1",
  "key15": "4dEwqUutxWMxWp9GkSQkpJNiT18CJ8MRxZ5S4venqcNSzzoP3UEHgviXZ1GnX751Q33Ztf697sawYR4KgUkKfdoq",
  "key16": "VwDL5fi8nDdheHeEb5zdrnxbxxzLBAZ2ZamrGE2mudYPZgEFEUUgiAE85sP14rTozXZFKaYNM9fgkZRBChg9mKz",
  "key17": "D7LJhCmvoRgRWYdiomu97AU2ZLUh3x8mGmBNANJcvEXZxiaWEo2isY9uWrMATCxTx2VyrBAvRteXCT6yjVgMvYu",
  "key18": "3fN5sWa1gKjQ6F9mSGRMcbqyq6BL3WiFgMZ3hgsFAALb7KbckS4cyX3bijjCzLsmTdzC5Hp4aLbngQXbTWqffCpE",
  "key19": "4jVTswT8yj5PBGfAWyaHQc1DnBxW48aWimzmAAZUvBsNLPvrEye1HbywwZnTUHGBbRdsaC5sZCVycSm9qvis5eEF",
  "key20": "3Cg3BSELSCpgGwisnzzerB8A8ajjW2N2N4kPkgkiQqw4rAjEmjTiRRcWBs1EYggCgma9kuufCzNGktRcGXmWZQqr",
  "key21": "PWQVFsBipiyZfffe8Y8RwGEM3Ut7DF27APUeQX7AMa5Uj4N6U1rjUnj8KCpMM3invjNz2bSSg941ZTwk8xzQWnY",
  "key22": "53MZDjxbaN142sXHT7S7V1fYvM1KWKjGT5u1GNWPyFDNVjthMHjKid5sdjZzNzE6Ke1ctc5tdG9p6GRwJv2hQ6uH",
  "key23": "2TRGuHzDMGcFMFDtiVWjivUSzoVgUZX42aLmpsPQAQGBi48CGUub5MWTSpok8Czx64D8vH3ZJpFWfXnzRXdeLi72",
  "key24": "5HLgzXsYwLJw1snRDKB6HH6KPALACf6W5bzixaC6P5RNd6DTPPVj2qsdKHhinUL9z6LC4uG6G8aG9jwHJtRoWzkK",
  "key25": "4qMsDBzsQbFi5yjQxzFN5cJ25CK2u7ijJyKbTW37TniYtGVtx8uzLPpf66Rg2cvi4NXamtEde4WTV1xeZurKqcoG",
  "key26": "4DarYZ11FtrUNDFtEtEsRov9euJ11f8JYajqzxXESp5JKBo6Av8UVT3WH2dpLwgSFGhuqPNmnSraoETWZ3FWmx1v",
  "key27": "PA3Ky9UhspwcSEJuHDRWyYodPe5w51UvZbUyBJ1ziMgZkEGZN2KUoB2kQxbxWoJfbY86N3gneDFXWCvf9GgcNJU",
  "key28": "5r1qctezfdhALGZd2Y4qvLWpQXXZydcFFWFwBQaeBZvKEszuvyJKcyFzVzs7JzoLJGemqMyY7WHVZW235pG136EQ",
  "key29": "4fBvNaeRzPutjvnusHHTdVqDZESE5r1pAeaqfJbs2DAD8qVnbZzeGY6oQg6ddPiN7d52VVtwceNj8MNsj2x9MRfY",
  "key30": "3yjtvJ5cWCj54jLWA46uvXX2f2sMLmqNBXzUsyznSSpdv52JQgfL8XpLvbi7mC6Vm8HNuHams8aBtLDfahXPp3St",
  "key31": "3dKwWv1aUAkdCLa54jwpDUDpywYjrRthnd3yqeoMXib8wPDPVkQKZPZSaCqvDMQzPMLMDBAWTUQhrrrrgKnW3gRK",
  "key32": "2VYhWe6JBy5ySpAzYu1WPnRA5KRo1feMWmHeRywRswXpR9nSaM3jbn5K44aaL4ik9yGnerEjGz24ciWL3NFMvGqL",
  "key33": "5gSAu4kTP39gh9SSkf5JjWZAuowu5GmFdkzR6UtoxWrr3wMQ816rNmT3frb6tpmpgLJKz5Kzvmidx3yH2JBe3pTW",
  "key34": "3soJJzM5BKwfK23mhPDdiidfSteaeyUdduvfwYajn88Vh2BmrEgoPVtmV3ZSVFhquGZJEQGcuKjYd3hjXui46Dmr"
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
