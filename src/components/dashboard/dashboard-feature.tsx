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
    "22GRRgPxC3GLeaYz8Z9F2P44ifTmwGVEhd78LPjEsCkXx1zZE9acyExVhCKpT64LZ9NZzJADzasa2qjX9ztLSVuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJ1XfhSdQHNQrxtj7Fzc7t1krTwM9RxRmTxDMwzPwX6gfi87kXVyNWBi6VQRvzP3qB7ZjeZkYxvEKnjbbta8Bdw",
  "key1": "5Pk3ArFvxKi6uotfyar3hu4huDc6GTpmBnMyHoyDSQEZqFc8Vaf9Lmf29zjRSuRzf64Kjg4bqcckHnW8EykHPdNN",
  "key2": "2QbDoGAf7dGyn1TU8WDSF8CMJaMfTywGaFDRiZTRpF46aMwMEUdLbX7zZZwZmLXzsqu5xjNfonMkdTNqBZre8xjt",
  "key3": "22DnMZQtqVypEspBWjbciTqcXGiVYYACWsa39ASAPPuq1FfNGoW2YkXpyKhBR1qE86NwGxFfQQqPtspW61zPSE3C",
  "key4": "23PVVV7h1RkWadezj2yV13Sknvm2DXZ6NVWNFpGubcsmm6MQMxueHLrNFEYJRaAe87VGmgaw75hrDEVQC29kWqir",
  "key5": "2PYiocjgF8Z5ubm1J1GuLrxDguKQ97vnyry4rFCitsB1datEAQ8k3udQsqZrPxEnHQXKPjiqTBB3oSm8c6yZ5hFv",
  "key6": "4E17g3CEWG16P9DUgPghoF5vkr5VbGxTtghutfXooTj8M7os9bHDiGduwYTcyLyk5ep5PP9H4BcunQuMfiAcvDg9",
  "key7": "1K2TfiCtU41ZgFjv6Bv4Fs2igsrp2u8iaaEK79rGuYeBFkWNsisSPMPmR4xgQUHYbyqmavVKgews9XacNdQCJLx",
  "key8": "5WYQCZLhDg9Y2GtVFauu4VJGooEqyTS393pUDsZocZTGXabt9XbWTfqgJbCqAZAuSCYKF2trwocWf9f4gtSJMQ9F",
  "key9": "Bpvftbb2okjZjLLMZLvu8WwXYppJMT4mUvf9rQBJNMBfawdHuZ313a36fZ1EdX6Le6Mr4G2bGGun1nXKGo57Tzf",
  "key10": "2v8PkxnHjGvKyPT844sKzi9MLyAkcjsA5rtCmPtthW4Lde69tHXKu3QKyZCqPaP4rGDpt4pXADVnfvyWWJcSbWjp",
  "key11": "4DyHyJyWoPUruTiMvowKsEuDLZQVSMx3muMUuDBdj7gpXm4TTavLd2bgaWmxZMxSqWmSGPemRsVNKxnphqhkD11J",
  "key12": "38NuCRmPNCi8fNr1AvcYiWmPxLzTDdxdjPcnP5d1b5va2zAfz7TThba9u1XpNArNoVg9FVZU9emjhENjF5VHuK5c",
  "key13": "3fGkieKyyUmdhhRsqq5VgN2C5jvub9iXibTPXDA7tcsaAUqHCtAKfUJ1di6K7RrvSupyHsttPTigkvxrqxW6JUMm",
  "key14": "2deRQyNFhXALHLWQ7gWAmp2MryuwFXBxCWYvZ5nL81AFHXJKS8YceF2NqTU9Ube7WYXSiQwU2DgkSgdDwfmCrioX",
  "key15": "2fKLKNb8YGtYFNuGHkKqUmhtqRi8ACKM3Gd199kwKQS6MXrxhMSFktDi31hXQR5XEnKTrhuNgZo3Yq68GmFhtFjV",
  "key16": "3Tspqkn8gv4vzgRqphd9NVUEAwSv4snXa55L43KWits5hFUAqshU4BT7RoxKUT5XNUSXtVwfznXBkfqnymP8PiQw",
  "key17": "FkrRTuHM3rKaDCPzfu3L1mP8F4GSriEDtH2dzMVjGDh4JKJD5Q8mYeRzsSu9EN3AiS4X7rSusnHjctSgjTbsFWj",
  "key18": "4UUJUJhhrVZUfpBteysyoLwQ2Gjuygp4cozDXpQMF4LqxJyHkL9UKGm9fqBqjW7hNJyiRBpVwz8tFmmu3SBsVvVp",
  "key19": "4FdYeDem6ac83Tvc6TeWJ2Ywj2happ5BhgfzWu3xipPrzzQzHHdkcqr9dtHb7V2J5hUoWszu5FFeBSaTQ4DYRzZv",
  "key20": "5VkifUBnEiPdvyLibj2Ay2S7pVjtBtoor3Wn8wYSog6Rm5FQb6F7hYiQpRnc4Xj2fo6wkPV1KbcJQCBDXBXTdfH8",
  "key21": "G52XdH39T3b45FkbfhgpQBE6UdVUnsLxJFkZCXAqSeMhH7UPmFzQk4nfkvXCZayCTjiyfWCeGmfAR5yT3hHxHD5",
  "key22": "2btsWS1wuLJGgzMYjABvRvzfk85Qyjuk5yCTZtegmn6R3QEr6oCgWRfnKvkgtaRHQs3mPiq7ajiUKLLoVuMNJ5mh",
  "key23": "5kb3AeCz3G3ic7nhrucpaagWf76f6pP7xHRUt9SXhfuoqsDWR7i6EgSEquCVzAMaJ9BnHeEfv4WqrekY4FQtKwgP",
  "key24": "EBhpRFFuaoeecBZskRyFie4rETUaqp5dNbuvZpXtTXrzj4cVsEEhbPYAoT2q6TVoDvUSdVUCusnTmGemTQjXtXN",
  "key25": "2t4eHhdELHAANfuF6wzZBJLPfghsUYnU8BT9A8zDrEAsANTNesbK4NXznJrZGTCxdcfdvXQKYbRJRfqQbDYpMy3k",
  "key26": "5SKHaPUKajNHtykEKcNC9Codq34GMgbeyMps2HXCtBEAZDHX6b3TmidQcyBf99QPtphRSSvFjthWw83RvBmdoG7P",
  "key27": "bfnghfTToSRt9jD8SXietFgbtrJwCs25NtmWSnkKBxZSboDL26FtcFy3wAzz7TSw5UGY7z6Cc7Gk7XPsJjuv8n4",
  "key28": "4U8hZoN28naiJ5R4zdXV7oPjGV1PqCtSFS2kTZemJGL1d5mjH3YKi2XcYtBANJVMb6CbQxTFGgGRRnq15URa299j",
  "key29": "2w1xmUP8Uw9EBZkv7AsDdjarinCtiUSwUm3NNm2USZZ7Cr2NACviAXUiyChJxBigV6Gdt9Lred9aEyrPNYTzBNMV",
  "key30": "46qwVYcSYSN5fqwssuVAkfywfKk7dRUsgDJnP6BAcbi4kcNdC3d3ZoXaB26kFgk8g2nNVjECe8exRdx253EAo4sF",
  "key31": "4pCU7i5JyCQmDDhXqWRMtC5EKiS1K4CQSE3jgs5cdJRRGcybrzgMXnWbkDXn2BaAbrJBfLcrAMji5UBHMc4V5uoQ",
  "key32": "mzztqCPbmaopEAH43zRzGYAavPN3d2gM9yjZCuAJUDzZwjhQfErhxWSwtBAh3CoR9w2gjR5Jt21KeaJNQ4AcKU6",
  "key33": "38bm2eKNC1kVZKL3FhNfcEXCum98fZK1c8EiTaERd7eCGEMhJcsHBL1k1KH5JDJzxuWw5KVcxLDZBq3BStKADHV",
  "key34": "3RZLC3tNVJ5tnUQGZ89NpfEu9sNC4rjVuW2455NSej9HXWe8gfbk9WP5zW63jQ84TAdVuRsbjbY2CqfCUXRSGhBH",
  "key35": "2qd7FMxDiaVN8UHGa1oag5jK1W1LXrGSc5ezTFd64douurpg32hcxfK7FdYZ1QtT48M2rYZHKneuGSBdLzKW6YQx",
  "key36": "5Fg6tcbMQdAASF3FPviDC1KC5S9ihdviVgmETm6vX8aBCaebHZ4XFnKo7JVRvJ5FJ7FrQJtYkPaBNVTVieUcXzsn",
  "key37": "3jyPzXrEupTC13z538DUgwETfoPBavTps7gSkMYT5s51y6XVkt1W6Dg7zrWCWhnMih1eRxq3P1jKF2u2FV7qsPo3",
  "key38": "2dVbJK9FRF9iGmJ2ffHUZqqfyJmBXaXpbLFiYy4DZNh3v25CSgaCsnNk1ZJ4h1CRtZADtDjpf7MpvrumbYE8MYAT",
  "key39": "26BAP6tgJzdsmiNTWN4zXeXgXzRVjXDfeMw3RZrBkCubCUYFvyin2QmzX7abnr6gQ7vvUydhAKrNf7oeePq5tSpD",
  "key40": "5JBasEXqwN5CujKdU8LgSASPuNmDExn48Rp59mTGa3mSQCC96GkGgTA4msFw61kMXAUqCffnUzjfyPF1ccbLHEVK",
  "key41": "66wXe8SVVAw6feHrSzroAfFXBjSrjnZrh8m35NpLLcUCe5FoPegeHBkfEyPUmmD9RcAnxVzFafZhpopGmZPawfjy",
  "key42": "1MAKGXa9r4pm48P8HwDXQe8ZKZTV1EFsehJ3Vx76AkuJZf9XtNRxah77vHGgU9RtBjH23SWxffx3Hon6Ba3MdwR",
  "key43": "LG9CJmL8CrfGT1m7x3wDA7qKmEH21u1QrKSv8GSxmBr1J82XgkvpQRJUBi6uR5P5FzzuazXee4iDXob31pJ57Fj",
  "key44": "5FSa9jgknu5Wzo938vMMdqRL4nvSGmsKjFdwV6ZcmkE9HH3B9t2rwzLGjWa1o1KFiTcbU8w2Nn9GwBMWpPJS1Ead",
  "key45": "3N1KXBF2zncGFwB9s3NR7fdvwxrHDfiFTdiqfSS51kGoGE2fNEKQYJebrxAgdpHmvxuK8Zg7J1noqgFemHp9yqHt",
  "key46": "4dv86qSCFJV29mneGFiP3eLzcd3676ics7pucYJxjrNsWt8Nv4of41gKLFzvVJeibVWsQUbV9NksPRtU6h5W16Uh",
  "key47": "wgXV2bA5Tvnt97SZdJWEt1LQsjLuWoYqay6VbXfUbGBVHHtQnBMAPNm8nLFS9CNB5LQzeGdtEqCaUnM6mpqY7Kf",
  "key48": "ZjJ1RcnfrVJdLzA6tsC2m4Kezt5od1NYvKkJLcJ3fv99EDFPszi9bJrUj14jofAwtoLdw5uybnZiQpTWff7hgAA"
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
