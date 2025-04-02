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
    "264QmaL7m84dXP8qoyo5BiCmY1KPVusNB6orHHp9KSMkC5t9Yd19rFtKKZweTuVqUGNDGbxtUqMiMNdg2BLKdyDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BhAt2gEJj6Q1mwd4S2agwcmfXyGxrZf2mfFqCtzCQeEsDFx5wqt38CPFKVVhQDeJwfWhGaZhm5oTwQf54XNLJqc",
  "key1": "2X1t8KUZJtuUP9EgKdYzgmxUF8A8fbL9YeujAw6nE6b7aUgBYkWv474rgsgn8aRdiEUvjn2K7HFaZgVChuSe65tV",
  "key2": "4ajpApSJiyqThY7jwLXgPvCviiwn1qiyv86YewqnL9JXjcTq8H1ujC88MHoWi8gdPiY5uuDokEBBxXdsCFLJzFtt",
  "key3": "N77SHVxSCx82PSvmSqS4Kod2WVjv1b2zDg8CEPbThppbey75efjNr46Ei8qd9SULaypZZMUtoNbkGs2AKQt7mG8",
  "key4": "3ZpDDhUzSaFZL1vaMsfcjDwvWqfZ67TVv9paG6ULCG5kjMx8BVzhLRWrnxAWofiq5iWijAHW1Np72VtkPYaRXpMt",
  "key5": "27YHYNkncZUDHNfqNQ1nTbpThjF835a6UQNNEPPEp8FZzLpjsewehdayrQj3Xy7PQTwvnibdQLShUPSw6tknBvxG",
  "key6": "5dwdXtTFimNeTQgvyN1WgcLj9fe3iR4EdUE1iZ6oAqe4aauTkTDokPP9C2tTd1RAbHJLQpj3GkGYpgDsZ9PMqEcV",
  "key7": "959GV1UgFKk5MVjJw82rMGFxKrGaHkmHLF5NChNX4QA49UaTg93sXJMYmqSRM9vLehaJSU2R3P3g8NmUFNgCARV",
  "key8": "ddVhUeAy66w7uXt8KS8Nvd9Eg8QHwrqzp57hYzQUVVsWm9vuro4rsiX9pWe6W5tezfn3tG6rvsYi98YcXf2PKJB",
  "key9": "36V4wRGaGA1k3ovhTaHy6h6DubCHYX64qw16N9s2cdruFiMFKraELvkYdTZ5jYdSfK7bMBADodYVyCq7b7HwHq3k",
  "key10": "34MNSHuKgdR7TETWTJSNRgwKm7ZS2bqAeizomnh93BYbhbkya9LqnbMMjtw423ZzmoUV3XSnk6aseJt9Zdu3tayg",
  "key11": "FMV8fCZPnWr3KGXgP3gUfYHJsZ3rjuGWD7d9a53PRZYzmvV5xMfnhgtujX2Q6DT4w8SzWH7kUdXUSysGBuUwnBc",
  "key12": "jGk26XqXH9K5QgPEbbndhLRhDnWiENNCmJjTWEQKbuhmES8YAWGGUDRrUGv27phWrtaF4i7xV1XhuGeheqs5Sm8",
  "key13": "5Mb4FPbJkrarnGLf8xGgYfB2SkJDdeJ9VXWDw2CbvbjBpAJpdswMj8fK7cNZsJVmfkhYAwK5BxJvM9HLT64Mt1bB",
  "key14": "5Lh4ruxzr1q27FS3PgBotDq37zp5FPKPrmAptV5LV5u8Vi8WezqQCHTWLE4JmRASmBKyDm3crV82S9WvQtqhb3UG",
  "key15": "46M6gsqmmrDXsXe4J949qALMVS8E9DBiv1Yp93N5qVvFFvf4yrsdNbZAzmNxfD11t3CkkrU8jWEXgfxuifsciNVB",
  "key16": "rET8o53i8ZN9dxTBFiNw7fe9UAfmZd8dJpkVLyk8QhNtDRBiq8hjZcMbDygcz5ETjw3M8zFDqx56m2Z2UN5Ptxs",
  "key17": "6BwTAL7LVztZGFnmJKjMDJWh2VdzGYj2DHpAHEa2ic26hFwMMcBpY23oHMuJmHCpmXZuYJf7NkeoY7fZcRFdHhX",
  "key18": "4jjWq3EHVjnacFBHbgTBjbt4hScuTZKgW3gocNiZg9bjfF8GwEWquUUGJEtprCc1UY46QXAXxY9ZxPqqGVWNQ33T",
  "key19": "sDjUM4nokPAYCtUC3yCGFWsMnErBiz1fY5YaYYL8jmRtHj9A5DS7wKWS6UbfxxiZJBMiKTLoQimfhZcQ63oZnJc",
  "key20": "4cdqTsxE6hvxbCLJVAb5UAPHbmbkFwyDGpCbv4kbbqM25Md4ZAz6TQwXD8HA5N8YcgXLwXx2sNmRAT1RLkAFbg9k",
  "key21": "3WBURFFSLkr7q8TeyT2V9a8SdRHyvxLeY4umGZEzZrarZasCj4GdypiPELRocSxzuLDU47A4Uhu6cTWfAcoDGK7r",
  "key22": "2s38X3BgyqsoJAKv5BqbnHYAHqm3U2Ct8bAUQkQ8pwCZ7W1RQY78f36zGWDjLZNFXdbGvK1F1qsHogZxZ5hXGfoK",
  "key23": "2mAtj28FYLE5QWu6jvccT2ZGJz2u7N6YQYdReqC7sB15KswtfJ4PSkk33AbWfA9sWSosMe1THkn8Vuza8SFzEvoM",
  "key24": "22Q9ZZe6cD14efq5yhJUBg8eSEzWhwtTMDtDrxUCCaKiX3KS3mvhFufYoa4XBDbYN8WdKb7yut7iJctuWCQF5W2N",
  "key25": "58VvihfHCT3tZmDPyUjzeqoEQtf9kY4bPetZJg3JoHwp1aAoZwJ3ye9QV7BqZXdrHzBMMn99e7qUFiHAZJCSJPxW",
  "key26": "3JEpix6wxnka36jAjectc6uUxmz3ccB1GbxsAnnoypc7DFBjXQwcZ87wXHocygTLakwn9oiMoVZ8uadtivih6rfo",
  "key27": "5gRL1k5Jb6KVRjLzxsWxyWY3CgMgHoBRUjnwipKg1fhQqkoPqkbSh7zj5aZaCRcSdsB9TgavQVWo4BV7QbBHH1cW",
  "key28": "3f7miNuPTXdiPvwJuKiZErUp2Vvm7kVEsDS7APZ9AisTeiXLGgWQVUoP2aTL3dMs2aY8sG3yMsqHKrVPZ9ezhto5",
  "key29": "3CA9HYxDvKLY7WmiRqB8MSKVChErFYFgbZaT8MpvC1wGhXCKK5935H7ttxVXo6JPvnjwhtHjTy7m2ohzJgXnWMjq",
  "key30": "61Fehcr3eghgkozupF3BCW1Xnw7yyEzvz4cPB1b3gwZTjXFSZMPrvm4EXu8GrbmVaE2NRmpfqC1J3pnVrEx2YDpo",
  "key31": "48zDAzGZgz1EGp2FNiEYUCQaV4gV9JoJgJKC4C4qRxwBmCjmQwZTiBBSEiYaP7iQPy5KTDGBem8MPFFR2x37HY4c",
  "key32": "37mw2Ubtob9D6BCMBDUnXst5xFQ12tUCEujdCzibK6EbS38CZ6dqhEVC5ZXhwiqNq6rZjFNctETqkmAwyN6DGKb4",
  "key33": "2a6MMHQ43Y7BgLRDwixVBVjgZ5AKt8TzYqXxRthVDH7Zx8Dx4ZaA9D7eog2tBtmtLfKdk4JGRJJJ28tBm12TtfXz",
  "key34": "2NftmzAJCYpQYhTDmdjty2nRNYnbwrsxP36KhRN4AvnfC2prvbBacXWu8bxg4Xr98ASxTPugfLwNGVg1Nk34qTpa",
  "key35": "3Fc494wx9XEF8Ft9cX8EUWMoZKMmQMRHyccTWjQmuv163GWKxJSN8xTx9FyXETpcUtmWYnEAyGpUShWaCuR6TrNZ",
  "key36": "4qEDZd7yvmRpkNy7H37XtZzzJW9PdHiobn7LVqFxMs6tjCvXWwHyjiPeVt8nhAtDq9rtnmcEmLBgQdyP1EUT5NHj",
  "key37": "47ci9pNEvpNsW9vmMHkm5v2ZXLaMLbWypRKLwjYLs5A2U2g5pchBFiz81oNaTUwo1udsGwj4ictRyED8G4sn9Vtj",
  "key38": "64v8Qk7C2fKR7LbfPWoSQxCALJppuHFH7XsfN2CBCRQtbSFxaBsu78sHXgiexNWDizksCfCpDRAKh3iX73KBSuMg",
  "key39": "2npLttYgQJvkzekWksxBioEVjRhSeKQcxwfqokfN5izZQihoUjigoFYFWs2ZyEULSJKnvF1qbf8Ws28SsLyYVggZ",
  "key40": "5pBYXY9RZPrgbxGtnkWTUECySSbCrqLBNUYbKsah8pS1t3ydeDMGW2D1Bs19e39WjqLBR5asMxGh5Q1yALyEUXFU",
  "key41": "5ZoT2uHTbinNCT4KyzvFj4kXgSKffVdxJhPfNArh9VfPQ8SfU1JhLJCyDDVBfUaQfptGcrduZZJyiDzkFPiHDKc8",
  "key42": "bdQ7kpm8bwJ6cMBpi2XUUYytuxcKEZAmbXJTPXA7AbR8F8rajcPKaZJ71j1uPrMnXzK6nvPmFpyE3me8onuHyRY"
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
