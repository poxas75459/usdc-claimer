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
    "4S7CjNjSgBQJRanprxcmyccPyrnDZ66j41tXU2i5o7RRRENxhyQy87TvkpnYoa9EDYQqcUFxZVqpHNAmGu5khjwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dMfujFSqXY825UVjCazR4dmAfKLiUsLdELkzSfFRJkDk3QHiWnUKJL4fnbczhqepZB2jDbw6GCmEPhTrQRd7QZZ",
  "key1": "55QkaSFcSkrkxrpfBHQxnTgCuUFaJJNGEcR2HiXPixMmfnsZyYvUdp9wQ8iLzfSnrMkn6jnosebgBrFmfhnEsfZc",
  "key2": "5sT4k8tk7BLVA4PWS4NBf5yvDLVQzJSpfWMXnE4JjmNng4F61taCVLHeDGP3CheRpMTMTuuJdgJbtTpo6xUyMWtw",
  "key3": "2mQp898tt4sCLHT9odKJJuXUuLw1hCpuzZNzvRDs5KPff1X5e9oQkkgMYUD1DGQuvpNTgMskSghgkKTwcgnhLPfr",
  "key4": "4qrDcoNnciq6rtsddKoCA6ux2SFZkQWjSzxo8vkXp2ktygLrVZzLeTvbcfNmVJwUAyFVg41zg8MLsTcDiZuzvSg7",
  "key5": "Xj4tH1aga3AFhJkB93ppom94E6QkHFV4SCVa7sEYgYqGQ9tegh6CArhwJa2K3CphaomfH1sjStcM1Tq3bWUoVpE",
  "key6": "4mjLAunyQ9TzJx7ZNgho17EXSSitDJz467jyMuDw1YUU9Y2JFchQmtLQrswDS6wZKPeV9pMVRd6C2RCXNzh9tZdJ",
  "key7": "46KkcBa6vsfpTcRev2DZ67XaQD6zZKTLVgs4BJia6dPN8jVMgs3JoJtoB1JbyRgbKj1jvdrM8BbMLxuGB9gJLSVu",
  "key8": "V46xn9WMtk3VqPDxMteC935swrg222tZ7Ztds1rAqyYmvAq7ihoVmmMGxNKCArkzpATrz8M6xGfnN75SnaR4RQu",
  "key9": "3hJu9c9e9REmZMUSQp9rh6t6xNm5XQ4MS6rfmXk1YPdKGH8xh5CdrdW61n2PwiNb2TWG2BSE6C8vWrVviZWHGPn6",
  "key10": "4uRkwD8iGkAdrZUzfZGXoxuHLL1AsA8CvuDqWAqZEXtC71eLKg21gZPxHDurQLwuTLZLLm9URtFs9EN5R2YmwWsx",
  "key11": "2xua2PJDMoTWabwaexmM9LHWUyLdDvW1Gdvamrq4aaDkKv2SKjAc5dxrBajEGH3R49ksp2xxg2hLcjVCUJxozx7f",
  "key12": "Pay1GJNDvtT9kiPnhKLYNxqrF1mqLruNEv2immqgnkamuXTCqFLZvyXe2mBnkarhghLLTf5jZgp32vAdBKPmk9W",
  "key13": "4w2JjEKduhHPmLHR35iHqvzLyTJFVH5WzoNQM64HEWeKVFi1WnBAt2GjeCuVvUZYVUzh6STxvVx3KFmP646s8smu",
  "key14": "4SR6qo9a4g1j5QPVxKhFBmyRF3rXNdVBe7CqUH2ME2MPqFNSjFRvyjpkiU4xFZbEWPvxW446bvRwzAvfEuTahiYa",
  "key15": "5dicyaui8NCZzQrZNVsyrVijYUu1wjSY44wwh4ZP3wWt4NRZn1CfAVLPqzvN8GRY1aWYJWf9Mau9udphsMZt1GYi",
  "key16": "2MjFhRvqc4jNDgocx3WiQJPCRW4nQrsy9NkjdC7mKDPzQrZnEUi8PLYSxEa9D7XLCKuJ4ipob2DBDeD4kv2JaR8Z",
  "key17": "41MRGUVZwuiH24o9exg9k6AFLdUc6hsbC2CdpCQTzV8EbjsS2CL9bP3fZ2qyHMQjJAH9bSDirzKVZ5yRqvCSixf9",
  "key18": "5bgHwsNt2AawZANnBmgWuqMa3qq94cqsHu7si8p9mGHqXhZPqre3GooteGxxNXup2WEBNbjAR3rgeAdw3ZrrW1rf",
  "key19": "5XfAv1bzdfcAByyAGx47NSgm9eEFstbkJxf53fceofEKZ7LoQP1jMSkKq6gPW8c76nohoPFhnxhNYMCjjPYauufP",
  "key20": "25mXSrBqt1Bug4zzuJikQaq4aSL2qbtJHr7tBxhZ4asakCf58iozZZijEEARQW35f48LEh3wqeMuTd69UhyfEL98",
  "key21": "3TRDuAhbUZsqeAcZX9e5HPAHB6zLtagDwqMaNyufsPaAhrPneX2F3zvEVSp4QJnAXjwyg8v1725qh9oTCGuuW1AL",
  "key22": "1bvUqa1yiB3fTyccCptcNAAD5j4bzydwbcmvadrK4DkHEBkRxrh8XjTibCX6jt4n43PZkxxz6AmgmqeqjV6L9SH",
  "key23": "4EDAgzRcRECmFHC3CbfnpGRnZQuWASWxpTsg2vNrWVe7eWLyi3DsdJ1xrejua9dSeBaWGoDGL4EhZTUggasZcdWd",
  "key24": "4HGtqgSbdsCwAzwXLtAQicrDLk6Wh6KzWWieLbAsT8h5fgUQyxQpXY7jKy4uNxBnaaPavNB45Ds4wrBZ9CjsqdVh",
  "key25": "4qzRH3JrzrNqUkZurxPLfYc9BhFvjV11sg7pPJYAsnwuYD6B7r2N3hb59EobVwvDv4MBq2oBZgL9TTegJ9MrtkDe",
  "key26": "3hhRfMp4qVNE7oGLfttkRufPEqWRexk2kjbjMMDcysgz5VPPrD7S9yrnRXjoyKKD2fpqZJyvb67YoWixn246fzJZ",
  "key27": "5925G5bYsRFAGb5GiRuQgYjokyo8fPEUhDLxk7Jmw6ynXiDNuK7pm6W1tDaAdcEuu5zSaZzyWXU5vXQ8vyQvFY1z",
  "key28": "4T7h5VJpTgMpFqhRv5k6BWwkEvnEgpRjxHDPo1VzA9gfxs3wo38Rv6mdSf4EKB9gEaMAouVT91PVA1bTbsgjHBKU",
  "key29": "mYVRWfz3PPWLEsWG1k15NMwtpBgvezxm67F7tfFDwg7whQcAB8G8LxatHybrSNrKvyfTuw8dXefapBo4zKNexCP",
  "key30": "5EcAkxjxwuRA9xrtqqSHcvFG71NJVcDzej3cV4gpxG2CAXEQL5ryqXvBwyZ6wtFLrGtukRCdTLUHeSgiFJwmApi6",
  "key31": "MBzE5TtMSkeqSt1vVgULmEU9YfDBbcH73KuF2DAzmTcMoDozJYa8vYT1JU2JSd69uhcA54Y3EuzJbUcQ2SCztvL",
  "key32": "2gcqvzwxrreYMeEfakSwvbwAJnMGHqS1KwafXzmy2SACt7uWpDyFCmhuNN8t5b2WJkZMLqGZTQAgqQCCjkaXGDK8",
  "key33": "WxyQmVsf184hGHe8h9MDeKKYawaaWjkwxHkmJ3GVy5sqADxsJxYRgK2xWmjwWANFACTtVvGgMn8AS5JFMPhJ1Ld"
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
