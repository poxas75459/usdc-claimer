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
    "4U7PXSa7RTeHEnCkonYLUX9Q5YS7FPJP8yXrPzKd5TeR5ZQTbVfAvsgQrUcVk59MkyuKfSzTumcTx27j4t5u9a5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9HEJAwFBQYJcVE7ULkF7yYdUkVzBK7kSgC3WuVFUUXQ7nbPse5FoZP4pJbZudRattCC2X6bypjewFaVKKCJ3KC",
  "key1": "5Jufw3VqFEJHWGQ8xqUd8HonfF6DVgvQAX8JxbCGTeqB1Jtu1KpPrFVEkyGSHTYwtLf646KHj2tz2pTRnyQt3Bzc",
  "key2": "3KkogkpUYKadshT83nzMT2dwxK4yfQqdYuJqsvKatrfZjajT1iRWCLAqosYwQAxg7H9oZqkv4x3xF2wrtWi8KNpc",
  "key3": "5tdHVs8cuqopkbfVPfGFjnvvSvu8LGKYoi5HXKt1Avb7PdRDbrJhz3E8HUyNAAk5RH2aXKA8hza97rqrLW68aFbd",
  "key4": "2e2T2Dodo9MBrS5nDiq6maeGVDfXta8gTXXbyY2KC1Eb15Sm71jpjB9gKmujqaTQncmCAvD8EPGypZLu3D93pf2t",
  "key5": "4XtnMJ9nb2PRqSyQ2DhfKR1LkAwwGEeFR4989aTMCcMoUmmVA2rJpSzx6PWYyb9ptFUeogLAUPSto3xzyPPbXhDc",
  "key6": "2eFd5Uke48Y21gb3iSfDKh4GhyybM1tan6bRqaqEpx4ytA6eLoypcPzfWYT5bNUxTC5kJ97PkNHJnKJvDjtVD9pA",
  "key7": "4s1uviBuGeQo7mUiuYhXQCke1Fjnfu9tiSr8KrW441e8NWc4xTGruHE5JfR84gfmzeFJrdDuZRuLiSXAFuqYiJ4i",
  "key8": "2vi8nhAEjYHTSgwFFY1LbtZPA3mBNCy2wHBTNSJQLeNkBM5gNBNEKyhDhGuUZ5WeebP4MfuNu6mRFsP36ixx47vV",
  "key9": "a69Wx5McT3VEMBU1sKBKqVC2rnjANrRMrhbVRS5nq8VyoNhmeyQUKsQMaFQG91d91DRrxzH1WtLcs9kfUmkNkhB",
  "key10": "Vi8dhAcEmS6gdi2jXk5AepfGF5DrTyoeXoEGYKZTPznrV9W1GECDdxt5UGcMKs3HSoALpQiRts4YYpuAzNUTzUQ",
  "key11": "2v5hijqZDkQmFJxmMaZNNyv94AfJwMLjLHnnEbfpGQUz2VEtQqrkGpwaBcxTARTVzPuvjumvkhNQGu8uJMsa1DYa",
  "key12": "2UGCbpPoyNn4tw7JG8ZSWzQ8Fetx1MPHmUnTQyLcAW9xGMx9NfbuM8NzxvZ8QA2bvoAiRP1NtsATJbATegMTzPWV",
  "key13": "43zkjPcevR8Wcygi13rPq38VrQs7Kb8j6DJPrYeEMd1TRL8n5iFY7X8mvReEvXiKWNT64phQYoXBUBmb7edyTWq6",
  "key14": "W3Yxijp38kLcBaisXAB3dh6Ddq83cJiARTf2tWpqit5mXYxENVZBGsUcCo1w9DCd88LQZjQo881aEcWStfYz9pt",
  "key15": "22w4uvJZLrUeJMScsJxooMvbLLH7ebmBACsZ3xrPd7asjczhExCUFJXkGN5trWok5D17R4GQMiAia1qPB2Wv5cBe",
  "key16": "2kcnaTyyPHpespDWMsabHvGKh8z7GuLEWDcTtBEdrNPwtoKf8nMyhsMQ1A9w2pnyUy4KEjpXTd3wwfxFiKhk9HaJ",
  "key17": "3QsVAqwSKNr6SMr7r4s3jeqaxyg2e6oaY6LTsadixDNVFuh6JMgtdDkhFDEWYkfhd5k7NKoc9beAASjYP1a5xY88",
  "key18": "3D33MpV6ZpHBsAcvagFG3NYatHnb99o5rud4wBMZuWUD7K85eYe7nLvBLUZ3sj5Np559QbduMfn5csE6dvRMHmMi",
  "key19": "3VdZp8pdpuf7b4685txfxgDvdrr7xp8aAaDt7zRJKnYX9wu5Rkj4iXrBdjQFjw31s5cmoFenimV43gWRk4Kjib4z",
  "key20": "37jvGq8JyHsdutHpNUfa4wMaqmMTMWuesCmL75YAXTBAUechRnrP6FjC9zmisLswmvzyds6Dwy7hfmYMNfxvqzHc",
  "key21": "4FdnWSPcGGTDA4EQW4WR46TbG4dti7HzPATZQNsrM9G6NWbvgPp2NQphSviKrHrLi5zKd64qHPk8tjVQuvJM7zNJ",
  "key22": "4agoC8iFkMvWGa2r1Q7THj8ujTEqbh1sW1KahdRVX8LsV6416TpQH2A5aREnJCinhQoRMGnzk3cZKrqKWdmHZ6h6",
  "key23": "42SUgntkx7bTZvWC3uGqdtvCqKV6iWhaqupY1EwDEWbekUc5SsazfXpE225q6gsy3219CK78rRvaRT9epBADA7Ze",
  "key24": "2dE5mHVYZ8o7n54fFqpHG5XR8ntvfmdxAQKx6EJ3DyV7MuC1FomyHsQuxEQrKSDpx1m4zsEjjXqWt3bQsmc8MDBK",
  "key25": "4NaTKVSLmH7MJyyYA8E6XMZ1tLyKvYyEFz4szzvc5zRpr5T3C38EMipesgvVNLcLydpMwPkQFb8cFGjRdRoaQwR8",
  "key26": "anPKLkXZEMaF8ejB8z8ZNdkdkDcXvfM6At1RwCTvGnpN3pJwxzWwMrtwQzkrhYzxEua94AKuF6HEoCohCGA2P3G",
  "key27": "oMiV5EpJXDKxD7szrREAwmRiWYhxHjSFjTCSfKooM6ykDrVdSLkT4E65Vdwv2cnW1GTNWs7XjsoyW9iDTPmAuyn",
  "key28": "4YAJ8Edcyr7HP8m3hNe3VLUTWpgtCknPrEMzEuch1FRAkzFjavZkNsLCHqCZ3pfNV4hTWg1iYYeuPZiYKZdBSZaQ",
  "key29": "ntm1weswH6yi93KB93rhTcEQM9iEfDAkt4VYUT3oVvZBgrHeyEoVde7nhYJZPpntvqbBexXcCupTcM6VabMrZwc",
  "key30": "4FCC8hTjZDBFJbVpJueRhssaDFzRLJP5AUNJDV4bMGw9TTZPaVG7EsZBmjuqxrLg1S9Z7okFZ6KJ2GQrKsmGNsE3",
  "key31": "23TM9CkcmFWitPAYABiokLpkQf4VaU8yvZ5oXR7JbzcvnZwnGbsu7kmwj6TETzjVC4zEQc6GjZKfnZBrzk7eUq6d",
  "key32": "2vriiyKgCgZ56i9ASQPMXMUVTQCNQ4bdGVsWiovN8TLF4Ru1xS6h6xNBd7DqwamwhSjGQKp7w8WgQyctWC6g87KD",
  "key33": "4ozg2necMxjUwTXPuJcEAAv7etuXtHfYwRU8ekU3ED2hSfT6V7LeUGM37Cu5YRgqFxz1imHLLZNg9VMJdeseNusM",
  "key34": "5CAKAunuCs37Y1jpWGT8aRF6VFHpAGNksRL49sXqJR5fGkpcvJPcAVtRuDuJ9TxHpKEwT2Cybyh9qdHtLKqWyNSH",
  "key35": "4EQK2rLwZJnXyLh3qm4nhqLdZD6kw2oM2SWrJsL4QEnGnPQgxWamoNhreXyeb1A9bQnTh9hD5J1hjmDwqPjhLd4M",
  "key36": "3oPidsmT7XnSJgjpo4vGfFcuHvLJVUPeBmKucQrEVscJJEd4e26Bbra7MTXoeRn3YyP2T3TNXRk3bKFL3wze1oCz",
  "key37": "27aJ683oqD8d1LbGhaTgjnn7zRCDm91NGxqx1b9a2YUdRu1ub6NQ76of6sKoP4yFJtZbNCGS4aVUPeZmByYQo8Bo",
  "key38": "4vgJcKur9WnY1qmSbySsCux22vweSojWS8AN2D9EQPg321nwgSxPW1oLMCbwaFBJVqeMqiiJ8ntMFQUcJEMwWY3Q",
  "key39": "55fEY3GbXa9iDTTs5kPUdGnX8prvhVY46wT1URtsS5Q7AKoJLzNzj8jtsMzgiBsHb2VhHbYY3GTFc6NTWKp7e7MM",
  "key40": "4CAkMseu8LMFtEzXksvESe1b4DEnJ9C7bJXG3sQ3uSSMS9qhjN6j8RBi85fUsunCBCf5BoWvMeEjxqPTCGAM729Z",
  "key41": "4ZwCataYC8bWb2ahdro8eks6yrMbCLNftMiwEjJ97KP4FHyapAPAdc13D2eHZp7PyogM6UVQWBU76iPVaVKJWEx1",
  "key42": "36PJyatRF1fbaNwe42QmjMxKNp8kKw748sZQXTRwRb7HThTfomErfLeah4gTxyVLkVUQjdgscK8iAnwYVcxbx82S"
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
