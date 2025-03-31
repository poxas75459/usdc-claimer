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
    "2o3rPWjiTuGjnfV9juYR1ysKrNAJvtqL2zCajohhEi3SHfMEjoQn3EYM3JwEF4foq18K82kq8H66V2YWRbeEidfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xc88cboAVsp5TfYWdACqeAuSyJjw4vvm8HTejoAs8GmeFuH8fB92Qx5B6khnvjUWbxLzv2295jaVQMcnjBxULQa",
  "key1": "4qxPMJwXgv2QULyzPpsdutLH7MEM7gUecn77Asccs5GVdMrBggjYLVy7Lat2RQfgBczLLJy2udesHpG8KTaXEQ9k",
  "key2": "3w6u3kjTUNg2XuF4wbSEuvdEgoDstN9AWEPazfmVdf5iwBT1reYNfZf5mit36ff3b34WwZWE9C7RpG2YHyJrv1sk",
  "key3": "5p1iiEvu5tum5sQjaR4EFFoxF1e7XsHoVyueyhMmthc4BEUAo1nNgJ7MBiJce6tEDHFHZVUYVNE8hQbnF7VfeZYc",
  "key4": "38wQAAVsfSgS2ahQwfy9vq3w172GmumtxFH3uUdBQ96f9qJcopqwtibmtHiemUSPRuhTgxXGz8TrNFhDyhLJTZpe",
  "key5": "2pNwiZS7gs9xSKPmo1pGAHJE3PPxe3w3n1dBe6gueTRD4k7SxpNQDwfJnEHGW25aw9gEa5TaozUDEuFPTibwVEwJ",
  "key6": "5yGWEnZr7XzdAHNUSP5xBU2PBLsm4kZ48c62z5kZ7a9sKtagBJwWjs6RGPv1k2tpj32xDeDmCjr3PJmsoEfd3Cz4",
  "key7": "5D8uJHydMtywk6eriCoQfFM7wAVgETj7B2h43bmJyJJC5af4Bx2H2DfxJoDG93vfTJAisfbEWj465eHiqLZvXiC6",
  "key8": "39VquCepWygvJ5ztBuWekDfVh4eZQHRoaDWZnQgkG8Aa25mDggFRapC1UQNNSez4WehnEn3xvsEGJmXwv4nh1QHY",
  "key9": "29yVehccjthsDnJJWCGce18aNKEsAN3Hxhn2bheDCH6SuARVFF54pot6TVkNToxrocFpuWAX1wVhKkm6bcASFxm8",
  "key10": "2dypg3UcPbjfjJ1SkZH6zYTzUEciuSTwhCWVqch4BaPfWxiifU83YXpvaYRk9Cdtb6xfxT9JF1qbwhLLMaPtJzJp",
  "key11": "2TZXudTTSmDt4VfHQA28WtGECs2aRSyzvPgo4CjM1wxZGGbV4HD6BUeDygVWgZ6n4PjNrKAPMK3kqL8EaJg4ioYp",
  "key12": "5TrkPTmrmraa8ssbFYz62nL2mS7avDeag2eoWQZfRidPDjHDxSkbLLZiZWSoZQn5mu3vLyFFQX51nmUT79ffW8Hn",
  "key13": "4znSY29oPspS94nL4pnpir4yASDSMUrDA7y25apn5wx14zt1V4H3yLBjvRfdYqDnqyJ6kQ6B2CZ2wWbEfFMNrTdZ",
  "key14": "3Vn4XgjdyTPiNnpSmtc99gvpTDdCubxzMP7rYoQSJis8hvGHtJFejkcNF91qMR5wQQ3UjVDQzQwG9YC1mScDWwwn",
  "key15": "62dRbV2zVPFeACjqv2kkfSYpVr1uWVAdWd37iJxTpT5fyLUzQuWEWim783wzngdu5uyjsNX1kgnDZFG2iMgsNpTi",
  "key16": "4foQMFfuA8gETQphYKNksBjT6FDYpbB8j5no6WXS3Kt9CWg6GJkikNfKrDhDmyokeBaeGNDKuGLqiojN38PUzYor",
  "key17": "xBwbymuDn4KmVG3yHf6GqUCaAStM521hvEwG7RqdM85HJ7NEkiQkAXis5MJxmT6oJSnRdPpWykGwgWpkh59FJS3",
  "key18": "48QivriE2Zwx8pxxcDdciY6XowzdSuKukaqonSNqMu6boySK6MQHX83NU7V7j5kMyFs5DZ5hz8chnQSaWqkKWYFp",
  "key19": "2uAxcfhkXWhBi4qBWazcpCVXUsJbVoBrhcnH7wzWa9FZioAZ7XeqrHppLKJ54DmuFHk1JQvKZ2doxytvmjx9onEk",
  "key20": "5c9oeFPsqbZdFrMFzWAQixjsuVQZLj5n4zLwnJ5xvQSpBUjtmL68hRkEByqfDRFPz9RoLrSwG3m7yCupqG9qyfCC",
  "key21": "iuojkbjCuPLRMQbchpV5bNDGDPAHZDu256Liwi18hfdaH6Q9LUM4EzhezKnYV4gfzNLdcB5akRak6CkaXcdS8DC",
  "key22": "5khrYxEgtBLfv1vAvzNB4q6y8jumAChryX6wcK1LBifTfz1UjUGXmygqRG1ZWSBpPkSFbfiAMLs4nn79XMU1LoUi",
  "key23": "5cAyh5j3wHbbzpMgFoSySRHXoetTTpKdQxmK3gjth1jHhFhgNKke2woNzrLNcGrdrk2oo7SWTbHTXkmPxuJkiPy3",
  "key24": "55acCtMSzcoh5nhkbyf3GN3LNBy7vqgs6jLLe6YjzCEP9UC4wbuuQrZy7pUY45ZY6VKGaKcG7S8PwerWaSFS2XSB",
  "key25": "33rDUAX4W592npCM5wB6f3JeEVSSpqm5Nbb9WtKPn54ijqa4GjEfZh2BC8A9ZSWhxnJWPHQK6mztEuF6xo3nFrzj",
  "key26": "2gH2tNMMurt4eytcDkpaBByQfNfV2aUBiuJ2pn1SHY3uP2NUW66GFNBn2bKwpiUzEeN6Y7d4bTAAdZ4oaRMk2Uy7",
  "key27": "5EpGgdRkDNKXmbFrHbLnnG9xqcEHLCwqLgt8d61iV7GU8XUd2SVn9Umi7wgvQHzjUZPbQWmEZt3k7sfj3sgad2HQ",
  "key28": "3WMQXb3b91dJQLjmfumubYyA8pv6fNJ4mWrZUjta7jBV72ifWR5bV1o9WZ72JeX7ufmLn2Am9zc8UL4qz8xP1Fd4",
  "key29": "3dfixpqTxwCqh9Cqgscdcfa1ayTqMnW72Yuik2Ls1jW4vuTEXAEE2hnMXefNGLEoqE9nwuAqDqUrfPHePaHnpzk2",
  "key30": "28952pz6cy8qMEDvb7Z8SBNXFHuxmhjU67ADtXE2w4EZJKGSTVvVwFo1sryuW9dfFkEEnTpyBEsG5V9KDDEEBvrk",
  "key31": "wVWpYT6j8cbo6F5izFXmx7xx7dZg7YDSetPNr4rgnZQ78nBCQJ9knqZ2iV6hx1GnPVRUW3zdb2Y31t13ZtYE1cr",
  "key32": "5Dwqvt4wmpc8HZwBuiwhDCo6W2bfBizFgw7FaPvDC3mjYfF11tZU6epTuHBVyNVVf8S13nyr2mV443zTJXCNn48k"
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
