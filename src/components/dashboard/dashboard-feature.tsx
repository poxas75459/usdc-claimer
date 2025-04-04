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
    "2D5fWL1iq2AmBnimQCD8p898eveNeHqtvPpjLLY4ahjwS1jqANRbFSyxb1G8LNECRRCV9YnyvxqjUojNq3VckKgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yrEwXhUgV6rYy5VAyuQ2FGUTaTWP8sdqiaTqycNWpF1CrKDKAyhoyaR2AfwG6gQm5W3a1qD5iWrxRo9trULKCCa",
  "key1": "frBK2hCdhtf7vszmPFd6M55KmZ6AHCkkjdTGMZXJUQ65GtxmT9tkY7VVVtgaKNtSruvgQZqQhnxf5dRP5Hi1CeY",
  "key2": "5UKugFvS6WAZweh2F4dF2KwyPk8bS2UZPQvmVoD4JJAEspjxoeSfJEEbnh1RrDZr9S7uwRaH66HCDJoaWBuKJ8r9",
  "key3": "3i6mxVPmED7cw6o6GC1Q8zuckDy25NkwsQU5yvCNBz6Wx4VbxneGBKniMCoJrTiYqVoxg2NCJQESBwbdRaY8C3uX",
  "key4": "3UcykijSSg24Z2mq1fhVgZU7Nok16NMEM9W5tbebfNjntf651nokU1dvsb44vwENzVfFnNaxe64Cu1Rhadj5gqmT",
  "key5": "tFiFt8YTv9uEnpTpZA9TDn4NptRZEp6CLXWN3NDCrthNQ7QxJ1WR889LNGANXMgQCnbmfKj6B19qUu4EKd16ghM",
  "key6": "2FNZ47N19ALeG8RFFGvhKQaSRKzgtYRHdG3UeTTZfVcrW1mFgc6RUhPaKoFEwrwMuMsrRBPLaLp7xFY4LvmTRAWy",
  "key7": "517KSWk3VgUXcpJ1BT6PkGseSAvxF5gjHKkJ2K1JemAPpEPcMVhJs8KQXTrpgxSaxd5y93wMEzrcczhrZr9tHfX3",
  "key8": "j4iAcEqEcUQHKbJx1pTWGutf2jKEzWR4HPZ34vXjTwurMkMAWLBuUvxa1RGtpb8EnPnzEUNMzSM8XoQm2NX7nej",
  "key9": "44eT6t5twsPdHj9zaTeX2GUiBjrXweQ2JTtoPvmbVwcKAHFGJY7vKwi1FUGJbuaP1GEd16i5PuW4SQyQzQovDZ8m",
  "key10": "3pQ927emU6Rre7qsgRYPmCvdWZaM4xWMtwFrShzvhPJBCeY9Sr1y3wpFvF6wKD2vBYbnWsCXZG7Ux9GyLConHapE",
  "key11": "2dysqjZzuLoM9WvEuDds6Q86KqPcNaFiVe3hWDiX2Uqo94bcqt95QYthyLmmHs4H78G9Xhj1NNa7q7pxwoEgp7Py",
  "key12": "KQQu5yFK8oaSCaEhHF88cGrw2Ejo4p8X7DVn8o7Y1szggr89DUfSAGTuUtxCN2Y2NYNnUamGa8uPhmep84CLtf7",
  "key13": "2KWZCBj5cCQxnpPyJCx8tMnA6PiTFfLbmFMfK8ZLKGdMMJCYFCxAcqp1wcYeTGKMLELcaLWyBz9JZfWpXcGu3vBH",
  "key14": "5CH96xKtJLFCEbq5c5VPBce5o6y3DV1Wj3ocYBQyGsHy6rLxsGt7ecBvkeJqM7a2aFLJyQrr4N6RE7BRkoXPAyYV",
  "key15": "3YYTJytW7dobje9pdxjUwHT5eJEN9ARDK7iMHYbRn2omzEq7uK26Q2NprsWpT6UNK7WiPkuJKzFWibwungFJrgzP",
  "key16": "5mAU1kXDdUDKTbe2gQaqNJzZtVm2sz7Qtc3Wr4ugqU7rSiEHnTWbCtJr6tnYejeDcgvP2DZTq6FLFPgpsJ9vpXvW",
  "key17": "2ajuYz2oo6CD5GZBkQcYKgPJTyo1HWhEZNModH6PiptorWbMzgcacvYKX2vW3zz2D4TWa3dsAtkPqBu2SiVR3i3v",
  "key18": "44wEYiZHsSvQYq5ajLmR468SB73eiDzSFk7gjFtyRDKM6isTZkFoPuxMbVihfwRQUzExjmYB4yCAyh5LAzgRGgXk",
  "key19": "NijKhR8YAEDPZvo9iZf7fPGvp58N1W8fbavLwY39oML2kKvhYwf12sc2TvBTwbMrLJB4CvegwvQQoiKfMPgwBWR",
  "key20": "539bbiphak6uaHg5iPWtjwUf2AFGmTTa57fsgXh3zBYwrsxLPm6eCfArWFt3RtnrW1eYaQUhR3rCz8LRSMuSuD1E",
  "key21": "3Ju6HxqsWUaXrCiABB3Fdn9UwFvZSWmXVLwx4yevm2eKPYRVPoddja4JPB1mfgpPBnyFjdFQxJ75GjM7GZV1nUZo",
  "key22": "3bBNepW7UAfBnQ4eM7jFyej4S51QJUXa4WmNQLQmNvYrqif8GrX8KUgVCYzmjogaUyqTZ8zXXMZbBrg31sfKcERp",
  "key23": "61eG8ip8zkCFgUzU68xurJe2ssWDtMCJdEcaNYFN5fgGpTpQMavvMKojE2R3T2AXyquVSiLdrYCGcZHcppCG8Pr",
  "key24": "5CNMGgNAbb4aKDQNi7VFhiuwHUE5SM5GnC1j7xFoftv1wodC587quNjpxJK15QQ4fLfV1CNzjX8TgcCeEBYXmApm",
  "key25": "PQ6w1me4YaAB8LL55RBccaiiqqCWtitrwMYKC8T9sNBeFkTDedLwHyRngeqK2jcZiioBGkF6s2xYHmpjF83vk99",
  "key26": "5rMnVBikMBY5hPUUAm96WCkRWD3Gc85MUzLcxyL35o6QjArshPoUHMsfwKKE8om5tPeDgfw5LKwHcMrfoXpoPqTf",
  "key27": "5CSrWCwP6LXjdcAd5qJaF6h2i2ntN6eA5ahchUvqi23nsJuWRDeZTGLUJNKfSkzmLznfYT3xCKowBqvf7ezdmcNw",
  "key28": "5PdFjdLHrzDkjEnBwL5nk7BCfyMpemU5WA1wkTowPevkFWMLg4h1n6WRffstvxDXPGC1cK2ZkKckxDeKtQB2YtCQ",
  "key29": "46pXTecfC91FmA7irguzimJmpDTs4NarGCaKr4u2ZTd5XzRzRXVTWqQV5FL6z9KYy265YjQcbdaESEjtM9LUNmo6",
  "key30": "4EtPaJR1UTirrzQaJPYyBD2v5cPMyKUjki1gHGi22TW4UbKx3ZwxpmATCdpgwhofhuZk93JWYvggkDsLnCpKZ4Sb",
  "key31": "4bY9V4SLffdBruHVU3AXgEmrFG66ErzQcozt2h52JtTMRDaDDUafusCsDnF4SraUA5DPf6xS3fRmuqAvyGz712kn",
  "key32": "2TsGpwPzWD898vaCqoajxDyPSAx3QZgTCskBH6gohogXsBbszRLa89SKyaSSDygyBgJ7xD1EZoW5pCLU9GPsc17E",
  "key33": "55t5qvEKjv3oiK2Tny819kRVCcTypmkHMaD84PEqihWdjDbbxcGjYU1JsKras7Q7aTkqXjuyw7y1Ft8R2CrzN13f",
  "key34": "2oB7q89GEgB7yxhhXzp47pczddW3cpQkTL9Gi17FeUZJzhSfbmu31ameuep9FTtWms6ZEujw6nbXdmrb2GTKwoQi",
  "key35": "3yokwNdNSp8bTCf27ZxFGzQTYPpfAvVm4TLjyXHPAoUax375EEx8Hsh4xkHpM77C1RLoaofUWv438QfjKoPHRNvu",
  "key36": "5aWv5NR1SwcNKv5fz7mQJgniaMAYk1XbfXxN6jQGDR3YdVkoev8dEMYnobmE6qC1bYrSuhAfRrVDaNALQyj5LFZ8",
  "key37": "5kbd2re2Shsf1XMoXZywQsKDmBeN9oJSqKGJCwk3mMehzNMRTQ9oYG4cmMAxFhpLioeLZ9sjhfdqZ8GA7t7LMWG1",
  "key38": "4KrNCav1CXfv7FcWtBW5RfRK6ZToZ85qDkWToPtHY8U8e1x4o29cjCH3tMat7W7w3hAvbeVDdwm1NcBF9bNYR9h4",
  "key39": "ekH6ttvvYBW32YFYkqTWeVdpqmSKmWo2LV1RtsR7bappdFyeyH1oSebwup8RGaPmaG3bTBtJNS1toPnnqv71W7r",
  "key40": "5k4AY3TVrjK6hw8CL4iQu8RoPLYNGq6Q6wo9ScoaPCBaFixEw48kb8j5QhPu3Bi6puvTMhvWn9aVMFRzPdNpTsRT",
  "key41": "5zSQ91JoR4LRDQ4d9bG3mji2X27Akqou52X93cQf3x43hhGvAFU7fLqxX2AfSToAB3EGyPQeo7Tar7aMdbA4CH73",
  "key42": "61jhRECSF3K2GpGEMBj7BzT7yDhNheBDQ8AT86nF6kqWcKEzig5RKzjaA8tbmAEphiuRPwqwmYo75PqJVVBX9J8B"
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
