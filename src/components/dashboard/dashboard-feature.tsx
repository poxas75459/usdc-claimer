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
    "FpGi2vf9LVJGRGZ7UjVNM3dRAWYVgmYSB4jDLvqPiFWU5hjX3BKRCgNvbSiQvPmqNZswt1h5et4U4W27MuoyHSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Qod4szdmVeokhGvBejGUvLCKT4MTFDR2Moroc5EryWER4GWb3ve3nq1W5DTScsdqFBmp598H3FLYw5ybhWA7Ei",
  "key1": "5aLpQMMLLWSvZYysNMkE1HqWrVSz9HmRVoTwsv4kxXh3fq3Gj6uQdJn31onvjRkp5xRutwKZ7k8kjVz18VyQG48A",
  "key2": "C6bU8oqHPVaDFz3VkSxiSLJXRCaLkP5gvv5hxoJU8CzAZEw6yJMzRJmN6MkoQMHw6BbiQ2hNcnw9g8mmEhx3ZzU",
  "key3": "v8VxdBe9BJwzXMLYz4nTh1ctACKpPPCcXr1k6SfBnma1tk9uTUAXbtFteDgrULbqeV8LEaj1XU7nPaUx23shxEq",
  "key4": "52uM9z8LPXxwrK7zY9HG782Qfd1MiPX1wtmfnGg22w37wP8vaMApKD7hhjye1QdPZSSZDjHXEvZkiRq9T74roxFi",
  "key5": "51WFnXBAt4jf8AKZHKygPD8yB9VgC5iG6BqbajHTi41pgVNweKg4XkaRGpKR1qGzXFZkcNDjWFfEzBY8DSaVViU4",
  "key6": "jgsw2Q6z9ofBEg6ySKwXM88jfWxyy9KpBXHuTH2HaoArErrti1vUwdcwxapo88R2DhseZn58Jx7RWwE9xa9nuUA",
  "key7": "22yzLV9CkBXTLwncoCCGwy6aoDA363e5mYEsPsZSGCDPdzbFtexjSYj1GLgpv3NNWBzQ5uUGybeieVsuCrPzGXk5",
  "key8": "2ZqVSqCY93wbKrHZgTQbG8Aj1WsMT2wjifSZuH9dvv543bJYNdiShPLC5c9c8XrNbXGN5K8HNxMVUb7bnbMJ6npo",
  "key9": "Vvz8vhkXuEq5UA8kKwKs1qVBw7u2WdE4QuFpQjappBjMNovsJk4oGJVTXAHo36K7uXEVmutXMWFZ8JYZkX5BVDS",
  "key10": "22FDDvRQ3BwZwVCJnkdmRuREJq49Q6Mug8V864hNfyy8MfcqvJ7HEVds2TfT6pz99CNF2rMm1i2SqeRLVqpJfKMk",
  "key11": "4z5gNkHAStnW9WZYjfwXF4AUL12gxVUG3oQbD8UXLF5cxXDVaHYoWkdVUr3uNR3EBDcbEog1bg9nEBymJVXsgtm5",
  "key12": "5MLq7Gg1TWBE9V3yCydSFARQz6wyejsmWZ6xZRJd2URsGd3tGAHuun8HyxgWTXaSF658oACA4G7deGrVoLygdhau",
  "key13": "MMMkCupNXve1VwEzzW3zcoUQdReq5Htt2i6LASQbzpgSkR1pzvDdzd7QE8i1qb2vn17RxZwSkPe2XVKwAy5Gt67",
  "key14": "5vhmqHGuhXyuiKnuMz1tXC3cpGKo1uvR1AGFK3TX15A9oGEt1AqroYn6vRysz97GUTY7CENCFXUprDSEkGdbVcvF",
  "key15": "4s37rRYZbN6yaVBFCq6jYmjB8UpgPf5szhpzMb1vHcp7WpLW7TZ38uKkWfG55p7K4QRBewAr9zpWDk6Z2VETsxHz",
  "key16": "4LJRu5dFHrBz2zPCSCGYXqUTPmDsG9rpT5PEPJCd7ME3YkM1q3CynWYiT63fY1cjzC44TJKbX8pCBrKVjcuMAdTP",
  "key17": "2RJ4RARQt7mfxSA4Z2yNX9wKbFCT64TAVEe9mudqDSYWdv4U4nyYSR7P8FWnxWMCEkZc5PzgqFiZQzjrAgEwWYtw",
  "key18": "324VcfezjNDYokQAwYyZUQ67xoeoL8b8ArroxLtiYWJzYRCfnSSBnZmNeJUfjxo8L1vKdQSHrBykqxizvAZsFkTU",
  "key19": "3G1sbZxKS7QD9KnEhKjji3ag7B2RU1BChH57Prchmwjmuw1dNCMQ2U2FT2cHhwQ9qidAetFgeBjAAfCDKh15dHkW",
  "key20": "4TKokPtys6PpxzQh2DVHZLRMfHRVMPo7a5uL88iKbEnEeChxRUF8efHMuq1apWJVSxoZMzFXgSt21RPn14u41gEX",
  "key21": "4E7rZ97ZPGgaYYfdwPK6jwJYojB5Jn5Fz8cRbZ6yNX3whqZ4KUxUQiczbKtUJT4xtsra5WTXpDughdnTAzXA4UHb",
  "key22": "3xY9D9tkD8cCivtiFY2ZXbiPCJpuKSovPLYvb9Pf3q1bXFbuTiQ5BEhZwFaU9tQ9AfWaURHZgGSVaAJSF5QgQbv8",
  "key23": "5Xis7tAEAXVGrvfR69q2Uo4gk1qQb6uss1iNAHUfZmRmFAiaZ6Twr4jYnAssoBLoSTJ6TgoQxfBvJCR2bHVJeUEj",
  "key24": "4Fc8wQYcjXra4F55Wj1j9G6ripF2cbTV7CZau9GBeXwkN8tYPCQUmt1friwL2vvGAqhAt532tXuTNbv9ZzaFp8ij",
  "key25": "GCmiita1udSmNS3RedKmBbLcxVJXHt6uG1n9jugBxNTJcJccCAy4BBNQYGWJu1EywM1fGhY9HrhCPfj8kuMgFDG",
  "key26": "4qjzf5PKEzHmyZas65xAgkwTF81L612xbXR8kigjCxcJFLisHP1pa7BEKzopUZRMJTzKPNbZxirUjHFzZJob7Ag6",
  "key27": "4twbTqsarXKoYY8hUWKnU16Uf1W2CZrnzjr79GrrD4w1GoCaTLG9EE2r1j1c1NuzuXZesxfTNZo19E3jkbQZZhiL",
  "key28": "4tx81v9MmhSehhStEVCqxDNGLgNJLXvQkuKb6t6dzDkpsYUh9MbTNAXpedJDVNtykSdNkWKoNDjkzLgsJhhVytF",
  "key29": "4cVVyuBeLCU82JSEMyREMAco5VoZx5VgYtToYq8JG1enM8DV7eG765oVd3svzTgQ7oXPqbLmhcp62Vwpf9TJp1D8",
  "key30": "4dNYD6jRYRX6gqKDvhpk9TWJsexFfGNGAdxxq1v7sMKzvjH3aFRWvhBCK3JaJv2j1wmb6jvKe2AZfA5RxM9GRS89",
  "key31": "4ZWVyzpT8ti9DGHtKeXBgukDsZYiJFA93bM16RcnzRufsc2WSTTFQ593uuLBMJc1zPwwzhZ2PDx7QuA7iGKXwNzB",
  "key32": "67VpXawBnjzQDxdeP5wHoDtzEBk3fmoo5Tf9a1qSWXmgYjtYhNAynW5nsFnVENFkmDNHE74HZFYeexYME5UvDmUv",
  "key33": "3jFtjfQDCKmRrNHwp2RCPvPYe8arQv8RZeNdJbrfb7eMUWMggK2axKmNv5Jbk5hsVDP7XtvxgHhJKFvhxSLZMhDD",
  "key34": "M1hzXDe8fLrhNXwUfTtiWsQpYBbCeSXVEJQodqrxiWaf8fUG8d5HRqGG5AgPCnRarLN6VzSnMXE6zfwt8MpRYRF",
  "key35": "48nBheSUs7T2MLgqbTTGQgh6DcWZ19Hs6MFZskiPGNdaX8dJCKy14cGsSvVWQEAG3aWDm2VLr9Aip6dR4aLCoZ3F",
  "key36": "jbLeeUvhCzSPooUJdPEnf9veknYfTCB6juezP7XgvvcRsMiDjhpgzrtcjBsjGxPwu17vfXdnQ14KUTwvbSM9HiW",
  "key37": "2nAXm1AfVVAiyshKEu54w3xjhCeRPQkvz1dnCWEM3Eu2dk6XXVX7YNcHnue5RqEr5czbMYSDGZZ9gGSJwAC7CPpJ",
  "key38": "56v4mu449bno94GjNZWK7qBuAAncTah9QCJxT5GBCHXtFszHtn5wQwBcmTAEis7k4N1HyAGLULn5Q1epKjNizPRB",
  "key39": "4UacdFo2ZQDT6W5qE2A2HLJ5MH8E9h9uNJ5R3kGBYkpi2jHsAz4uScCtvWqyyCDPgM63a4iCAqZC6KJakB6qLMH8",
  "key40": "2vwkMthJ7azvenvmTgGyp4BLfuBjzcUKvYP3bvdNTSnyWtVCVWUMrCEXW8PGxpGTRqa769wnaY8VMKhiwvdCtygy"
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
