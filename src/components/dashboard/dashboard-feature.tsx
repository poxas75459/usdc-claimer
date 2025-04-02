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
    "313Ko6JuBhVAW6BTByeDhyD4XL2rwheMGLf8YMHxq3Jx4Skg5iD9SPm57nq7NeBZ4neFbBdFPtVPfU2M3LTS7L3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yi8LCKm2jpBjnV7q9QHraxiAvWq2E4aZ3zvqsemwUzUHwFqMz9M1trrni1fHgvXVQ2Pg7pTR7UUYm2T8qBRAiXK",
  "key1": "2j48KNL34QhFXVzaRNzcNSGYhbiQbMUUk2WPJS2mSjdwiacsgoopZGXgJMy98huDGkwb1ENSyHcdLeQnpKYnpBwq",
  "key2": "5Lvq2P45G64xNhAhiy3BwxYhU8wzsdVh2tXCnFs7veHaRg3F7fzPh2vXwavsdJ7FAeQwpghCuJqpyHePxYJ3iUz1",
  "key3": "62sJKUsd8FhLWoNzAiHx5pRmqZM29VkECFqaDU1HQAvbkY4kfjZZrxPyFUFH8oUAphcyeHQ8RjPWacaU7F7MXrwz",
  "key4": "8yVBqRxCfKoh8kXcyBxmTi3NZtTmGjWxZ31oScUwXWsjmpKs8tFmaQxfMvksSjpbV7Qiy1jP58kMrhRFWjpvHGS",
  "key5": "3q4WdgVm7VpWun7vJmX8xeYabp7xGi3zqvwLS8oAxG1Wu8GUHKR7pE6Juqw983CqGXazCNe7DVGjHgfLszaXkxp7",
  "key6": "2Zth8cHCaQDYec8iXFMMy5UdFSVjxbJE6259fKztzWDde3YaBq3tgf8AyGCrGaTYXTEF9o8z9ZrZp7xysgHPKnm7",
  "key7": "2hm1eP9FPHVN7Bsa9gJj9vbUcomrCWSy7TfW3L6KvDNchjd7FR5ii6KsnZo58duR6c2jGWWsoPXLCkGkytSy8gQw",
  "key8": "47EFT96XXWth1TwrjqEqzpV7pPfwF2J5iPoMCKprB2RNxo7XnVF7D11zUYFA8fzWBg4ikQVdYT9H38S6vtcqqRMb",
  "key9": "23YytQhJcxmp3E96hmNRfk4kss825trwQYkRrQhnoxwTRpHcuyzk6ASLi1j9rcUCiVjByP6AAPQHmw2tAmBVDgFc",
  "key10": "5P2kM9ZZ4VNgQzmnpL2jmPq7xB2T1j8R4A3cEM4rg3swmZH18TCextgTKzxr4ZJ4fAYwb1iKiuqWqsjLSrktFap8",
  "key11": "4aCWkA3kme3MH6p1U7xy8euAmtnubHtjq5Qh1FWfY3wCK9YJE85zjjHCV6nnHm9MSVLi9Pt27LWb1yZCbxJJkFub",
  "key12": "53wuC1v8UiScJrFswUu8Qd7vCSpjud5NxPjWCFXmRdtq95UKrgoXpRzjiwcrPCneryCjFXXn3sUBZ6pa7LeSVPcQ",
  "key13": "4qTKiMcvE6P9tqUn3ka81Vv8pLZs59f4gk8Vk82sMfyDCfZeted7hkcwGrGwP4YCZAjxgw2UXrwQyGwkcFFkjLVU",
  "key14": "2q5KNrfE3GjLPRRuRC87kkTaWwfHrxAtj3vRnS4gkJxPQxJqEPcjTauVyjUWmxbTZqeS95j8SJF6wKANhGkWfM2A",
  "key15": "38KD6tcSUew39x9B6eP2bHpWzTAfaNuLhGvYfmMk3Ab6MhDzc4ZtB1m3eNhov3J9Z6KfRp3DaDhkUfgkTYjTRLTd",
  "key16": "43nZbwZDVoSRMwcVB9FHgDexAqRnZqBtumGbhBYhEUEppXe2x38Xtp5Hkz5Du7MpG8Ua2YAV3YEooEsrSTwe9r7S",
  "key17": "5Tt6XM9xxPj9fZyZ2RaLjueeXHNrC4q5EY7dxmsTqoBEoMR9knUHKC5Hb5y3FxJRMBAoZ8hXhoaQbRsHY3cEadMm",
  "key18": "57LYSXyn21LU3bvCqH2ksVhsBQxjR94USi4jW3fUTqjWSvV8UzJaP4RSCnFrUYa5CkgJMTSCtSnmTBNWedeuJieW",
  "key19": "3zi4ViqrGosXA7zy8qF9tFS41p7yavtcPkz8z29JgCQt63pBRdRYnzoP2EwhBo5oZF7EKeDBdPCTjhn3og5aZocz",
  "key20": "2jCaqGZeHvVvoHJZhYPJNJWc1NBS36vKWBxQ918x51Y3rF9kcs8GvapocGuZgq22k2zmKjawP1ehfD3DbGdPnwEu",
  "key21": "4azhFmQEmrCVCtzd4h2rTy5htyqpo6jAuymdRKqUvzQrUGfg5yZDNkJ3HasQnu9N9PnmLRWuUeCTMBZe6fc97iNf",
  "key22": "4Z7U7jzZbYUFNTH1UZQa2Wks63nata9dXy8HTrT1ezbXxmV8MTwTZmMxwkSyJS7HHbshUSntccsW2gLG3g58t2XY",
  "key23": "4ecbUDMJD1EJXvNxFVW7ZjMe3U4Ub88K6PanTZTG1FVTf9Eo9rboPoh5FEfecG7DJsVx5iFLbDMgk1UUxf5Lmide",
  "key24": "5eULb47VyzZT75VBM7prhbEBS5bQkmZjJBiCopF3LW1hSmEKkdLRwLs2nWGJSxDrDzHQhpHPFv6rSVknKDzHRdcX",
  "key25": "3yNdHN4LLPXvUWMa6JoA32r2nhoPagFwDhcy2ZzH7MGRKoEaKrgD5CtYJgSe57RDub5yjzvqxDXhZSFPkDnHhEzt",
  "key26": "xc3LhwUfMrLQqZ38WkQdYk824WpZBmKE7qUbdnAguC6ErWgEpriHERCoFgJkfyBssgoZeybgw9K1BjujnvwcKBU",
  "key27": "BH2jY7TaqNsBAYQ9vdv6emUjn3q8ep6bwiXyj5hha7ZjnEorhLPPiB9wDD8H4ygeDmfBVfrNW6XG2fYm2HjodSX",
  "key28": "4Behpden44GNLK92wPGsdUtiydp46B61pD7RYLT186hUYGNebyakmBfCPutBAX7o42mYw5P79UMjnMs3Nc6Mqh4M",
  "key29": "5SzA3eVefKswrmg9D8A4ceWEY98M8jaV1vrKox1KgRuMU5QqBAANGzUT3pPdM1rTKwDecJvtLx88a4rPAD17jsX1"
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
