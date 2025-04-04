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
    "4apgtDjyeDcxYnRq2xd58gxjzbcrKkYvwQEsN7XUbLG7YhNszGpMZ8vmS3wMcKB3DuwVesxT6b5VoFMsB3WCay3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xqTxfmit8YkyTKdQfzCJvvAfeSo9hMXUeCPiNjsGcinpkLm6m9MSuEPA6bfnwHCyr5eJ1aN9LUbDSoRqH2gG9CF",
  "key1": "3x38rxYUCGUzcRokSLtQ8qMRdsmP37rksVHy1nLBC19zobnFtdJjgS7D5FoTmqm9MoEUqYVaYBMcNujGvorCqdbw",
  "key2": "5BNGoadoWDfa5iU5WEpi4g3zWXnLmxnMPuCChhwHQdGGpztSK7xqPPnnMquxezNPwQGYwSvkQJGRjHjK83Ja8BGC",
  "key3": "5RYJKphCUXCZrerichFkcS4iZaJiahaW1qS8mdTNdGunhMJLk9jdNeZRkALMkmFPX7kstcWaVnqYK2x8jQEBHnmb",
  "key4": "2vLtyt4BP2eYPvQhQ9F3SMrS1i1T1TQyNPhrcsYzXbvPFDTYzwaxvkStLoT1KeKesXfjZRj7nExiEDrofyPanXHX",
  "key5": "2x12KwDgo65dkzVCyNqCA6RgDDiKGAKqbsVV7CUK8vT9d9xuSCa9z4SESf5chzHJas1gBYQmwAMUVRtEV4JnWATS",
  "key6": "L33uXheD7hw76jye45wk8S55Vp9TtGRWU3ggYYWdjDLP6QYvqCxbcEF34pBA3PxMCVAdgaWaZSuQYM7uTzNiQSD",
  "key7": "5C28sciYqf21fQjbzDuxcaMoKJ9VxV2h7QntbfEVwda5eRfLWbs8pW9ATsgA9So18A5QeJAXbTDkvCfQAD8WZ4js",
  "key8": "5dRXHR7bMe9TfhW9Hk6Gg7sqxVzSt5Ms9SHpgE9aHBG6U66ycqZxkEkqnffoCwLjYZaU7pW3qd6rLRfihkEdXGzS",
  "key9": "3wCp72cUXzdrfcuUxdeoNpS4xapHhAHZQDdafZBkyvnCEaXVmXb4eUBpJcek7jSWaVDfFC6adBBKRLcUbPcwfFHe",
  "key10": "2SotZBDcrBrj4r7yKD4TFmNSaiS9aQXdXxgGmPoEg1SsNdSUSuMxAghypVkKY6K18gzWj44APN6iAqWdTCNi6EjN",
  "key11": "5kv79B3apNcsnDcjZVKnXJGbpnbgwgmqQSxcD5xmkYVeVaumYRT7N3TCKnSPpWQtYbA43T31Pk2ZecqeV7ZxS7J8",
  "key12": "5DdN9i4vtsLAs814awHttyLZKLeKVyNNe3tTAscB9zBhg7wdy8yLUpWord3vbpmyGAEjzsV35eLQTfgTVSwNoXRe",
  "key13": "2HbrLmzKaRuu52JeAUkVJyVa2G2TJVjvcviC1KUwLr8VW13LddPSUJzbam9RGjxspyM5UyEULozjp2DVrDLR1Dfx",
  "key14": "2vrgunN9g1UxnbQvGGP4vaEUQpumyqMgtHjacmc3pPJmKBcex4LEhaENX9R3L6b8rfW6HznbMKHm7KMdWmHwB762",
  "key15": "3nHiUVgKrocif3DoAxhcqvbCi6sUE2L6bnn1o8nNj3WhdPBwGocKrDDuawc2nRhypzd1JaSPVYaNTKVYac2YrTTx",
  "key16": "VmEQ2tE5Ymy2XRpYyozFHUbc7hYED89N8pFB45Nk6mQSU53bZP3Nb2VzfS3KmV84RqapUN2dh2KgYMZ3UKhXMU2",
  "key17": "HeTZEN6qGhvLNojaRYkRz6JyvtQUHArZVnhKzgSwGEPCFoxm2JB3CeiroVKJKP8XxYqr6z3jcST8p6QjrNpqjLu",
  "key18": "45mARizaMi7w1w2EFVqzgu223fa1WDVn4XyKqeXUeYTFxbCpXf6t3A8WJ8pfcLMgcWxzvVeLXU4ZbBjwfeDqqCKm",
  "key19": "jtnEpF1DayQ5sA5tU72GTcJTNm5a4gTHn1E14Y7BChDskF5AKh6ofRME4mAqd1Cp2qTitjaT2iC28629D9X96H9",
  "key20": "5qQUsckvsoHtAbF366KZ7mVBkXMdVrndmvSYXijecXjVcxJZABzax7h4rQz4qcfe66GDPRg95279JjRntP58mrSt",
  "key21": "2EPzjUbxyqq5Sj3TMSRvJqinyybRUnH5bL76LuKmfEs3t4R4A8aavceYJnwv19Hkzffak8FiPVGoNQmJ749mWu5z",
  "key22": "f6G8s8fpXHK6pKww7Fm5Xdu1mBVZgCkCyRqpCkNKi7xVqP7wiPM5vgba47DMzWKGQa74iMrDdQ4y8LV49AdiAAh",
  "key23": "8gH3Lju5jqkyKyUhjMray6K9dLMdtgnS7erJ8PYxFpD8GjunwjPcZfXhhPwUWCiRwtbD8CBpELHwhQGZmXzvoDJ",
  "key24": "x93UTp4GAvNgq5o6y3r1Ng23vJAPmBfkMwnnCtfYjyXEDmEeF3YnDwn9dhfHr7gxdvtYF2hyMj5PA1B1mrGTjsy",
  "key25": "3G8MmeBPwvoaneSSdPtrkefPefLYzZPo6uV5o71pVsQVeymPhWNkvFWwkmdyTcNgDCaDf9RrvmYz4drrxhAPmn3r",
  "key26": "2wBpbA5suzGSGXZ5cL1JuDt5foaC5zfntVjUnJkDAbrT6N29A4m8ytum61E3Uo7GbfdxEjv6VLepMEmYbsq2X8tX",
  "key27": "ETU46DHCZ4M8TmwGuunjQ8Q9BL7ZFZYk23LXShZrGgnj575gXVwuV8wqfoTqo2GWEH1VdtXey5ustKHqsMXhMRd",
  "key28": "3mDRgS7GHFASdAPwZxLf91Yj61M7fZeDKibnzbBP4JHpsL24EfkiF452VWyY1tLLNPQ19R62LMkd2KpbwATEx68c",
  "key29": "2TMAjK9T8n7Y8HjvgD3z3rRbftVWsRDbVB7fPPiGD8gYPetMrEQT7hKEBLqbLV4eLEQjoZTATtde4gahuSfzaG4a",
  "key30": "4oo3Ps3NH3hCp72iDaJdiaSgTKGucdzEjDkK8VNgsLrg3EBFxwkVNLopyDPpAShz4GnRdjuRirt6z7mNpqqYfiwx",
  "key31": "4xcMMo9o1muvakKtZwuiHe8cRtbDgAyAKdG7dZoVvLsca3wfUspJoaw9nVfriZJkJytVgJxb71JNiSiLwuMSx3YF",
  "key32": "5be8boAFwQ8ZjJzMNFRdMqgCvMqko8EKsutwMARBeUPgT4wAjfMc8EwmsDaQu6SZit6ux6AcpSza5TMbKue9MgHf",
  "key33": "kTMrCMNDDBGgEgY9byyuGvE5xofXARp4SnGrt2GKtuSS9P9CAP9sDbhbtZeFMG6RSwh9antzxFVSqxstHcv3uyJ",
  "key34": "nB8JLuZLLJ1wZQrZkKybLQhZqDpEAPVKcLseQUvwBVDdUPGtTE5n7YumikYCFrWVTanmq4H4RiGZ5TyBNqDvH9Z",
  "key35": "2DUhJbjtqCeEZ8CQSFsH6igutA55bSrMqv9ngYQrhH3LmGouUSGywwCHC1WvFwrfgtXtzqBRZdg1iKQZLyA6g3vM",
  "key36": "SPUe28au3Sigg1NXSXax3i7nY1JyR9MkCT7LAutsPgeQbGukbGC15g7mcpaCu3r3PKPeomKB9H8JyAsifei3GDT",
  "key37": "BnwFaYvpC9dxcFAdjTn5akU5aPHeSX7uDkQh5MMNqdVfqP3dV4VospTWV1iEnju2YqT4dnhDsWNhiNduao1pxuj",
  "key38": "3PSBkcGM43vTgHsw1s4FKQtmMqNFWggeZVR4MPB5otJ1hUA85hUTSN3cPkehT8icc5hAodMTdYbVSKcKHXUikKKd",
  "key39": "2ZmQyeYG4ZFoEGmduJQttHNMCNRtSA4fsnwp71kXzMRgJJk5wzxC2rtqrtT98VLANhVgk62TTSkXz3xrRsBcpYXG",
  "key40": "2tYB2EQVsRBnPCzwFXN3qEvdgFekLVM6EPuV5EeQmifLcgCoC2jPsWrK8EgNGNRLRT8qhztUft94z1CsXoH5cy9W",
  "key41": "4vA4NmFYBZE7ZUwRtC9PFV6UU5gpSShZB5JvUXxXFhD7eoHcq2dQ1S5WpxjM51TK9T8APB7pWtyVYRC1yb282qeM",
  "key42": "48ErMtan77Wh6Zv8mmxHVyMQRCgKuVdHwA496Jc6Lh3oEFnLx7v2E2MAcQY5H7QFAizLZAW4aDm9B4YeapxC7b6X"
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
