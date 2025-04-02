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
    "4eAoQEkFnxd7comMfcbQbYkwogziq6o5Zv3q1zTKQe5YZwHPinqYWVZxEnwnHz12CofcKCgrZytVAmnwXPq4UYnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PN8qYiDSGc6rLeH4KM68PGX4xLrhReJzHyP9QfgQSWT1LsB537tdSVZdXzpJCftc2zanjyt6Q8dBgGrPdkVWnid",
  "key1": "2Zn5jxvG94vJuvNEqga4WrmhxBrS4voupx78NLJLRyyCg5z86ds5wuvujvtvKdtjFikhw1w9iNp47E49EgNsaJdv",
  "key2": "4Q4mioZYo3GWpfMozsb5wygSicFFnzZjoDQNsJexYZdyLWbRWw5GwqZeNNE3QVjic56LVWwao7yvA3pVhpa3cBQY",
  "key3": "qQdNuUAxV7xbpsN8RVeYGr1bC6iY4FikjmQLEHeLxhb6LMpPfC99msqLF9Rj8LwSpfqsCwPbvPodPap4PC5QExT",
  "key4": "njuySq2ruciGFqqfEymm6JBfpdKC7ddnKLHX7W1oTXzQkMpedM5mZSVnRJ51vMTfnExkkbs1VfAhu68FPPe8fjo",
  "key5": "65tvqUqLhYWySte5uGg5c7osNH1HjeoFWFBv8xvcZBFdCrUF6VaCwh4gLKD74Z6Ld8jpFXXVHD9F3JPKxd8Pp8G6",
  "key6": "4b2pVn8r4NDddd2sj389N9QtUFZbGpTc2munCn12adFoPhibq5rNNSCSHUr5wJkD6Wd6iPRVz46hKDEk8DG19mZ5",
  "key7": "ttQkL714u8xjjJdPkby2if5tZP1oBh1gQAe8XMwxkRph8HEUvuftARgepgfGp6PocSC8AXHJdqLWxZcjnufJv81",
  "key8": "2Keysv8wRqtCxa1U4EdTmu3DfAD3FKAdnBgitNAQryhCBR233VE5J9yZGN4em2UbWwGxzeENAidAu9rgzPJBjfcR",
  "key9": "3wSkZgCpcJYxt7qN82BES2QR82uGmqDMTA1N7wWhMm5dJ6Mxdy5ZHGWDR9JaMR4RCGzhvXhD2x1ZJ6cW7vkxcY5v",
  "key10": "23vxqKZikk8yWhCCZSqjxQLvcjg137vMnZybJvFgH95GjdWxYmy9kRR7ngN5QkJwkor9FEDqPJkPbWXdpSdDydJY",
  "key11": "crKgjs1nBUeKhkZMV3v4wUemRx1zYRZVQkt7bM74X9fdaeGqpf3zNVxDau4wZuF6T33ivDuj9aeZUAjfRYDtQx9",
  "key12": "QZJ7b5rE7HepdXNjjty97wVXCNJWMjtYq2jiWSDZGgVg7w6L74QqUbxhCYYnzAxQy6ZaVtjxSfGkbxwADC4wwkZ",
  "key13": "5rcrZ2WwghjdS4Zu9wQTFZd8UuawpJpgeUwtoAhrTB7vn9bWCuXTXwCxhtR3EVYbNyYoye8BfXCkJonKyNTBGyMV",
  "key14": "4bz8RwRNyXRA6cZoHL9o2vTdDcLuz2d9fKqHrQZAvqhR79P876tKsZ2giFn6M7FQesV6wBdBvSofjzRibS8L9gM8",
  "key15": "4ZqujAVcvfiQtBgayjdSowaAeqWq1tsCixwKZDSzA4Ly8bgbtS7sdRdqZVVzDTgoQXnbSnChBh1F3VnGgsh3MvaM",
  "key16": "3yF9kTDurF1PGygPkuHp8aL2Vkqmg9vfL8JyTpxuoHjkANQsZNo7ytFAuECwTKM7idTCmBTyzAq42LJkssdBuuh6",
  "key17": "2xsFoSefe2ugaNUYzSyLfMfg8inGo1ahUyptdqgUHdRBMDetttxbqbf8ZLcyvHM69Sfj72AoxV9rgx3fRCqi2jRX",
  "key18": "4pPE6f8x49k6JgipMZ3C7DicnJLXFst8u9QdYJnAKMfnxytkkCbSattp9NTGw1SvLVNik9hkabvzuuayxypVijXe",
  "key19": "5H6wzHy3jhnmEQPsjoqpprbD9mqNAsMhtiwqnSzwu9nV7pit4Zf8BETpZkrDcNad4gAFRw3g4JFqeGzMwGhXwkHH",
  "key20": "f6wqyyUu7VVo6NWxkc94SksUcEHqQpFppC1dq5v76YCAFiz7Cqo2mqSpfQp9jpUD44LqLMNKDtwuA2f2QDLoQJR",
  "key21": "mBKaXQV64YLGUsuA8Ku8PZYBrtii1VRiFC6jRRGH1DWzRVdgeGFwRKVnXkAZtRM1EWrAkf6BgS5KxQhDyFT4PXf",
  "key22": "4i7gNSszJCFbb8nKGPJTxkk3655LgnHbKL7QmTtBXCosewrR2nczocQRjtrskq77Fyiix2ydmj5ooQ5PSbYq2pLe",
  "key23": "3FLa861X8reCWSf911c9iqf54ZEhwJpCE3xtBMkdsV3UWBW83MezNbj89HwfbPQF2R2N2UakzyC4rmXimyXEaGLD",
  "key24": "3yqhahzKqmfrZE9N9gcA141H9eg79j4vzwm9yaTc4jxBUNLMxBigJdZ5KKFDYkcK5nGy93VgztbhNDzPxrXyUcB4",
  "key25": "56JKbKK8RuvkmAJWohB2QsrKs5eV22eKKRiXR9E4nvpU2QcWo7XFhWn23Yt2Lu3Xz8UNFr8hf6QiGrJ5PRBZNVqu",
  "key26": "48sAugKLZb3HMrACUAWe74z9DhZv5Ut7uXYycKip6CDs6vYbzbVESrMpoFDe5G4YRpCAgYT98qzuu9fSQXYPsz2H",
  "key27": "6425MuwF2pGgC2ivVRSNxiwoVtoNZMTUrXNrELTeJN6VjZt1835XrmW5GtL9PSAhMDAneSbt5q9bWUUqjWBBn2nF",
  "key28": "2y2buN8RezkLJLX39YzBYAjbSenrtMPRQir4nqsQbkjMLrBdj6UXLqENwjKz1PHUau6PJ5C96hrw82Kdfir7Hecx",
  "key29": "5rqVeW8jvmPoNGwyqJYQityvxj6i3XykZuEGQXkDYQwewhDnCVUBmWeEfPaD3UkzY2efVGuApzeYqYEn2avhiHbK",
  "key30": "CNE8qmFmjMr8ReKeKBgpwEHvJv3GuNfiVFJqW2cMUyKWNTYsrkes2CQk7Bg8BN4DrXZNTbNmeYbT98Xg1aGNSMk",
  "key31": "5AGb3ftjh3MrJqeLvvUnz27yxDZiJZxb432fUpqBxZjncmQZmN7r4NJp3UE3CsvMDuiUj4oMVMjaqxthy2NsCxTM",
  "key32": "4qkNYo8d1wS12dijmKEDcCXQnCcf3Tvi9Mi6vWpeFGuohCTa9EJT3CsHBYfgg3H1Y4tmmwythAxqvnD56RwZvE7M",
  "key33": "3U8CoqmDGndRrqsQgiudJpzgmX52tFkkoHHLAzRsNgWHcwbmJtu7AJrMEy7f9yuRehvcqBcJbeiCn8PFH68dncud",
  "key34": "5VHiRAbnxKrb91H3j8x1jaQZRVGjzrGduGPJeUHxGHmMPoVhgG8dFrXrcByzYLttu58HCM2Qbuu5bQcLmzZB6dWY",
  "key35": "53VwGQarziXsazuKQZ3R4uriBipzGgYbmwXMSKh9NYMNedLm9ieCPQnDvxa74odwTbw58GNytKdc1gwM4yHREET8",
  "key36": "sZ8tpYYRAUvwHBjxDg1y3CNcNCakDwYxgPfPATu8A3vyzfHDWej5Z3DgJhCiVHi7tR68G69aRMPPHbe4yxDFwcM",
  "key37": "3hqnQ8hh5vFyS32KtvTJwuAJW9JgUY9sHfu7zHsNVW4zyrYDr8YjxKb75J2M7iWT8fHrJgR9Hkv3wHDF2sC3A92W",
  "key38": "iCYr4Kpq6gn2jfo1shJhe6vWjgkuUJJj2Kx8YghKpQhq6kMHHTJfEgxYu3BB2GPpy8Mtk7o2bzvzpdPqEWoVU8R",
  "key39": "mo2sbovsvz2N9dFT1TtWGd1p97MC8HpLzQ2Z7Rq9Y6WHFkFd7Q2UUWQ1vZnw43SjZDZDC3aLSLjZBjRV2fWtbmN",
  "key40": "3en8muqyNoSVPQLgomUSDPxP7L28MFEmABMNEgxUVBHpf1GzeNCyMzHWSJEQZGUEzb5PNpSxD7o2JNMYGqZNApmu",
  "key41": "5VVXMWL6MnqrPbjsGEYyMhDZbc2wkWNTDasjD1kn14xFUFLMqagLvq3zxyQMzWiv6ey1RHMu62amG8NzgcC9uHUu",
  "key42": "5w5caEJ2cAGL74wnJ3U65qDhjRtmJCJ6s8MbjVorRVKXnaVMPr9J8Vtbyw6KyuEgRDz4PoP6Fn7JfUFTg5gbhpyf",
  "key43": "4k9yysyRFUFTUEURRPcomZ4eP7F5498TDhxGd5tbY1RrpmYb5AaKLZRRmAd3t2GEwpRs4nrQ5w71onnwzT9KFgiw",
  "key44": "3f7cZRmX7enZ2RidHCquhEiXhNLvwPRHwtb1qK3MGZg3cyPiYLqevs33SepmR75xX43w1y5SgNKYFev9njKh68Hb"
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
