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
    "3f4yu3QFwXhPp3iNM2ok7byNspARi1PV7EDnqkFqL5vHZeHgnv1hRSBJecZ8173Kir1WHJxKjMzAm9GG9pWYBBQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TBwfnyrTj666MEwBU9zN6cJjAGKaLBushzCn3X5p6AEptNfZsfGHpMGu7NpY2xL4MwPY5R8tqewD67ZkeqbbLA",
  "key1": "5nwGtkDDYfDft5Ay3zrtsFyBjCJmSaeXeZ17CkyticC461YD9nACS73eMtQwB4UL2FtuaZWvRwrKJp5WHpqTnBxq",
  "key2": "4fXrCuEzkVZv5tBTUy3UadyiAF2XzEBJDSGsT5ebC8pmjXbDn2za5AAivk38xRSCtukoydKZdjiLSbLFZ8LqHSHN",
  "key3": "46tqmPFzqvkueexToyDFq9RViPVqMA9eSktYkMGUp1L9igW3Uuv6PyfSW8LgfCXPQkJjsWPDkvKgZeqEDtjy5jkk",
  "key4": "5eY49Pq9gTgGBjNKqEVkb6KCyzxTnJTHfsZ3mgzUFx8CJWREpuXUMfb3iH1EQDY8CA618L2iDzM6fgR5TLvyTM48",
  "key5": "4kSDkUj8JpYLNdx6fSMjEAuBm2Vu965FfjRkT4Qn22MFrkCE8tZLoJmKSc7p7VBEYVZ3aexFDAX9FsPJVY7vtomn",
  "key6": "5HKj3nZrXBbiSQWjWZN8Ws1PCqZkGKNwg8JNwzr7AbL8xSiiM3fFjBNxeDPTCMGrk4gzAnQHhTbLm9B2wsrVUa9Z",
  "key7": "43RSmLVkZ8yihygSJ2UzkTaRoNT8NzNx6ke8V7UpTDpAHPmby5jVZo4coFcDdCESKPGaEvgzVLkVQEozaa8om6CY",
  "key8": "5qroB8kEY9zeZUakg8J71xWwCyibkUf6jEHH4aDgqnncz1cXWgHVyFdmvCiwfwzvYARLGh2NCc8R1u5MnfeH5vMM",
  "key9": "3x3bnW6hjZj7wrL9pfXZE6AUEWvNGtaitpTRENmELYZSu6ZuM2zUq4BwGp9aCabHy5r8pmKo5hstVGdDsMq1pL7B",
  "key10": "3ajLxGrcLXet17N5rPsfzR9en4fgv9sMqZ8tBJwMsVYySfM3qZkmY1qCwmxvA3AEBcxsBibVwUvDvmXme2rudhNQ",
  "key11": "4RD1qGunFs5Bmu8wvdbQFPazC55ZpJ31HGgzN77ZLAtTmvAypbLzPzk6kbYMyYoVDajccfMB4gJHHyFtzi7kmVm1",
  "key12": "Rocpx6fJ8vhvB2cimP3PcfukLnpmPZgKzPeWTLXw7GadFBh4nrmzHtRjef5Tr2hWNm6aJUQbdCqLQ1vhKrPxVrU",
  "key13": "5tzJZoLRQ1nkxqauxXMvMB9swVUvpwCHRogJRnUHHwsSi3W9fxpbXdf4kgVcvpqWjT4oDUKnetCskAKG8ZRPPxSQ",
  "key14": "5evDEHpUcdV4mPaF9BZNwozaEiGHPPJa8XUTVSE3KuzGNcDBzF8NyDqG8C3dzBP3gAdMy4havWJAEqHYK9FNoVjC",
  "key15": "3kndhZkYvhAHV7t6Ytxx86remJS4Bnp9CWeDV7kNkyCBY16PNKTTpHDQiaZ4PiDNsiLgv5dmZ49u1auvUPfAG83r",
  "key16": "Dcvq4DKLEHTraQQvrNoJfAdCQCQMMBS9ae4gfesYaGsAzDEHSQaBFYU26wR7bCjs5QtTSUtJSVCLXDdF9jpwvbJ",
  "key17": "2sTessJRvXCTe2m4oH2csjZcYnFHpyQtMZKoEKXQRzDforn81VwbUeKpss5knqZ7zEoLvq5fyfdkicWChWQgDYhZ",
  "key18": "2B1rhVir5iu9XboLwj8gY6q9gsu7x9aUPLHKJHMnTtxwFXwfRKY6oyqndEaFuJjdCXS9JoBJ3sWH6PtdJ3xNScdp",
  "key19": "4qvGfeaqDC8GEmxFZTmyZ9NVeS5aQM1QFrXFqL1duHg21CAys9zmrSvUDxyxtkRoSwWLwfnt4tUYk5ZpiLkXifLw",
  "key20": "4mNqjMDF8MELpbWm4XuCWuo6GdyNx82DGLV4D7P1QpQrh94u4hqPQ5uL8pySdNTYfF48mzPuYrFUEYg5LiDu2wHj",
  "key21": "5NhPiSLBWJgXx7xHG5w1b4NLwD8f6o5TcbLzA3HmYSpV1FwtHDrKdPH9wJivEZdY6bXPM4c2XP5U7zNS1AxS8mWY",
  "key22": "mzfzzj9cXufVmrcQherumPoZRvuXdnGsyTyS8MZ5ExWPtR2gnixBdvEQwUqBEKTAcnZddGdaS8B1LweTmTSt51M",
  "key23": "dUCkKe9kCnKLHJUpUwVDftcXL1ZkHLqaEDCyF6LEV6Qd6UA3Uk5kJuAurZqS36ZVxGy2oLmhLvZCJJSRFbDWB2s",
  "key24": "4WsJKnYZjCVbBKzMH9D1XJXpJY3nUJnPTSzGiZ3m9bgNThXE4ijH1ydYuw2pxutWPUeNjzw5z79TB22PpY45rKUo",
  "key25": "5jgwhm42mfxuDrf8C55mHy4BWs8h3niWTYtX5Xt1cLzHUbfyzbuiMiJ8KaeyhCmE62kabLrR5CvVxhdyXq6RqU11",
  "key26": "4n9K8z3LRbn1pmWUMryxsBL5RJHFUZJwjzBLU1jbJfuazxGZ1RA66aZvHMyrnM6CHE4r5XpWpmk3j7soBhJruY4W",
  "key27": "nCHYQiBeSVPb8KhUtzrkj9EkKzgHGDhfTsQgLbSAhRrYa1ig2Gvhtr8iovoP4dwXZ1fBvQMBtvQxvD91MkcSGWu",
  "key28": "5kg5jrFsSSbAoEb78fb4dggNutGZF1bxHzbTVV4EdcyBS1fuWkyraxmfJx3wPCgwv6gK4EERaUX99N5wq6uqQgvo",
  "key29": "5QZ7ndD5nbbhsASWrrP8f7BgXtCz9hpcHKRJupMbMcMG9pUWkvMYrKhemudbbyrrTy9oyjgGcje3wwgPNWMiSthB",
  "key30": "4EsjJhETmdet66hofSDPUGxGp7afSPzWXzosoZL3RVxbJiC5mpwbuw3DFKU4pKPQgDbuVyBeGaY7rhqcXK1pMpFw",
  "key31": "QqFgTG2TpFWi7eQ1GgRLBdBi22yt268YsSUgXHDgMv2dzXxRMuuinRmop5sF5hTTaYxCwSxs8JbQUsW9XWhDzj1",
  "key32": "2FCMSc4ujkmX6NBjBPrGnn8ZxwZhCUazrZuNRWuU9dgsAUzoypncLBXwk4V3kxQGfaVGv9JzB3zy5eEohXQDaKoq",
  "key33": "2GgYcSZPmbDwFwZUtCjpLSuy8XrbwWB4QenxQCopckzJvdd8JBkshkxpdYydScqYZk3NGB4fFcA85EiNfWnaxFL2",
  "key34": "4LM7PdVkuJviwsenX73X9T3zGk4JLjKCVGDXqKWtPGKuzkHeqL5Xghym3SzrrvidZFVaUknw1FNnnGADd5CNE98W"
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
