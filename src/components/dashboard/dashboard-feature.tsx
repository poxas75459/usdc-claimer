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
    "35KEdZnVVqfcd4ibFJn3tEJ6oaEHcSddp5zzfdwzV2eqHY5ahEwokDmKsNhWk73ZXJ7BvyAbjaf5YiJ1XKqjrGdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "616eJePgUzehnsP7hX4YZ7twzg1EaPMZK6KkeyMmujH33EoMT7RDodKLcMcbYatKmsSZZTM7p7Za71t6QvrBoLw1",
  "key1": "5J2Jccp3tKHafxmZScCJZqhdK9Lfcf38ro6eijqfTvaUrn8gt9KP2TjrfzW58WuDt3x37h5aG7wFjeFyfZMSmFvq",
  "key2": "2zeGfVB37KYFPU9oRSdwf1XALXBfFUk5BzwvZv6C2f4tNQW4FHXkUEDgfNr5GqoRj6h99R4L2Be8ymyfNrFQSUSm",
  "key3": "4Tg4bGHzimNQujvbZdKzpk47sMw672SS8xpkYrPHVkdawhZ1PwxLJJtTvMCGtFRGqzbNxqfBk3QJ32XvNnCkKpAm",
  "key4": "66jrztZB9pCDD2XVinauAVoBhvFkexwiURXiTQBFGwE5QrRyoV6gzpJKTgwUAyH7FQdoEp3DrDrwSLWBQW29hE3B",
  "key5": "5AeeuM7AHv1ZKNwCD349VUn9VAUHURB1ogdkgSrWGkPDU6BJXFLqTBVKL7NncAha4mE2VYnpBT95xZxvqxWJy3W3",
  "key6": "29d5QUS3im6fEorf8CNoyE1PGBWr71HyXk2WQq6WYE6Mx24iQxHT8pejW6VFSfdmCBoJVwnvvBne13AvDxceFogu",
  "key7": "5FYNp5K4twELj4ueNUknKGFXmNKgzXhfPzoW5LwJ5STHJEpxaBGV89XBvGnXX8gmpWp8hqntX5MmdearhDHJkaDR",
  "key8": "3ftjeZeh94tgNUn8hBHqAnG7SMTAH5o74xyLeRrRP9P1mg8A3Yv4K8UxezGChD4975iTA4YckF8sxPA8m3efzo7v",
  "key9": "5qxxvHAaWq867fHAHJZz9UzEro3iZcDhfWxLFNfcnRPSqdVRJeANtFFUdH3T3qrnHvLmr58AMvq6aRrT6t6Hyaoe",
  "key10": "z17brUa9A8U4q9zoRyGSAEdmHNKRBSmRmyargpepTxFTjULUNU2Hu5ePkXHys3SRSmp612AmYTBeRD7SgMnF42d",
  "key11": "4Mx8PjxVeGJWKR4pVYv7Fix8eESokCsYLTBRkSFcSFSEpSQxBLvU1gVQJr73Qjbupdi9gp1vFZw58EFWtydN9yKW",
  "key12": "3BFAkjiN9xhDJKryFiXpQErYRYJ8x4TyuVZUTCZU4ySnVSD3Ct22SaNL2FroRT78bWwbFr1LWtymAGbEbt4BZsRf",
  "key13": "5Tdde7RbZzCzmAHJgVtwcxi4Js49SJe7PB5HUJiHMzhuWARbBHZ6mSpsMzS1wvVDm92wPbS72nByivggSRk3kaEP",
  "key14": "5jqoyNSwkrPpPJjA4XcDmrHs9zbCBdW934pDkiqyKwRoybjptwnb5w2KEHEL2rp7iaqfSWAYwgBY5UVhhi3RupEC",
  "key15": "5V24wR4oMQnQmgSHBGSyk1RhLqD6PJ65dAKw7KMexj27KDBd6qccjqoNqTT3uioAz8dC3mkivwoo8LXJLEbVBeLn",
  "key16": "2tfS81GUm573Bi2qwWGzckpGJ5jsZGB6edaiR5Gid36sX6K1dvh5NvGaJq7QHY49ngo1uXCftBy2QNRsKWUAPh5m",
  "key17": "3LaHL53ZapjKe1ELaAL4JUA7Y2r3PTA3dApqT7ZnCYvjQvLHFaX3x1cEYZFPQpUwUcLNs3UiWPvuwDNP5TE596t7",
  "key18": "4ofb4aVo4c4vPnrLYyuJUQmEsjZbVQWFcPTioEsFSnjxBkXRpuKTvuGDgdhFtJV1ipBEvPT1B5T6gJRPLaJcgx2R",
  "key19": "4MDNSakRwp3AZ7mPdzju7XfsHv4tiwB8U6kUxtM4cfhrX3KQCSZry9fyZ7J6ePPtZMuoyudWUwaPhUHdM9cCPGSX",
  "key20": "31FCP5fdYaoLamKccH756tNNvHQxS5JG33Z1FovYNpy89qJDGhzFeuZDyu6EsNugsYyF1hV9bAZ7BbqmNtLHxcNZ",
  "key21": "34joSaXBDc3hDJVJKajrkKGcctApobZfVte4yccvpNiM5DYjxQHGZRKH9X8DUHpqqmZtnPpEzMYukWPEXRGEiE4Z",
  "key22": "Jtae5ztCpMcU7iwQTcGUYY1JxjMWo2eWaZsNeJxtkBWJhGNq8tArFBpN4PRwjrd9KXzyFVUgr5pG9ZxWXHedwxs",
  "key23": "4aXJ4wXAg2m87Uf8BMFYcy8zsp3KU4E6HKjdjdX2PuQiyYBvh4DhadEKP68dbE3Q2ut7YUpuk9vbCzAbjhLGqpjy",
  "key24": "aMDVr3gpbrALefrRgeySPc9NiNgqF7h6a9wEDYt9gw6pdvYTdBBzFrydC845kiYjvT9nFWPDAFTjhXPbscmuRaf",
  "key25": "36EMsSsJ33eM8bF1veTa7sGYKrvjxsaiiUwQ5GWVNuVbr3F8XxvxRvnjMCa5Gt8BameSBxKqbpJy5r5Umvwfukn1",
  "key26": "2haVqHbexcNWstZJ4xRgLF6oVm6cwXh1YyQbn48AWcaaQm6ggheeyf9oq7ha82XjDvtjCescAAbn9CC4sadAQwxS",
  "key27": "2J43s9TU56Sx8SVdG2eGcZ1Pa7LgPVjCaxgHsPLBd9DxWL6rwY1bjXZjbBJxKGBfyvoWUGAZJJQrNSKDiguemB9c",
  "key28": "57hwW9AoFZdnr98xQtxsRS5hA8CaQx4epeub2ucKGDofyTuJjyW4XxLWsYUsCSymkMJz9dUYNn9saNSZJg1ymBah",
  "key29": "8rSB9phPYUCNuigMHQh1nRdgjrGbw45hNrWKDymETnTpxULwTVbxwz28xrYMqojVbmUVNv8a326HewnaebXituT",
  "key30": "DEQDvWLUfRL3mhd9BheVTDHWz6bHYGEwQcoyN3vBM5hk4QDuc6eGJxeVhqyBF2HLfiLALgzivSigDTykioYi9vS",
  "key31": "46uAAVW2Thb6xtRYAFzbnHmdXkztggM3h3AYFJDEJMmKjdmqULMqTpzbUTTSQvKKk9qrew1BJwK6BpK9N3dj7AgR",
  "key32": "5Ur3CLqyFq9LhaQ6NY3jRv41sTWoUktkdiXToreBXJWFZ5MJXXe22i3CX7NoexVsYqd5ywazPkMfq1XudDnzh2bU"
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
