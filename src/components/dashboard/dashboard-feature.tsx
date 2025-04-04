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
    "5JJ54EteFi9w5JngHybrFhL5xJo97jMvZthf4dNtwzz6qXGD9u99Hstd1c9GGgSfxeVaCZwyUMVYQRTvG6G57vgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sjC1MoJGymoBkQcwida4Hhg6Vym5KKPs4EyZ89STnBxLmffxEFBZTr7g5SJwUpLwg7gVrexX4L6Xz5JdmWJ7Fx",
  "key1": "4Tevzr9LKyexQ9F2FRXPPWTL3qrJrcyTi5FKgDpcR1Jay8dJXfvaDokhVnidq7U2drxgeoBPWRHufP5CeG8bCngc",
  "key2": "4s2EJovV5H4bRugDcJcDZQQ1SDxuKZiE4LwbvknkoEGhRWmSLo5ErTdRQBfR4RWecUunG5L5266HpXpM4gN9tJ7K",
  "key3": "321Qu8QLRpceAYEcbmHXGhPLuCKqRtdv5tZ6bJshHCxDemDKD9mToQn9TTWX7RvaFu5dAWtxZ3kCn41G4PeKd4XE",
  "key4": "2BnN9611HTjSgTSCSE2awmRGENt5VTnoE17KuSmHnf6hHjhcwx8BFxNXhexWbyR5tKQE1knRvdyNRUb1uVUHFsTx",
  "key5": "5NDW2ekv6ebXeMJqao4XFZ6NWL2uh8uHYYwRpu7K8jtdx89yaFxfPnXkDJkZA4hztbSAvCdM16XT1aMVifU6VKpK",
  "key6": "4nWrpEjHM4KP7FFSre7rLz2sCYfaw9cPB2GVGpNkDt5HMydxvcVB5BzVjmugaFhZ44HvSciGoswP3gH8D9xy5QrY",
  "key7": "DV36ViqRgdTZLAusK45U2T8LZe6Vg1k7YU1DitKP9QKhndd6qK6djgwKEfVpH6dkZKWhxwPQ72qdyYABazYEcuN",
  "key8": "EzW8rA63CpYebhxq3sr4eK48PvWjqe3c5Z9162pDcKYckr19YYX34ZbuzuvDoB7FtLA3papm7tAtqJpqqa9UbwS",
  "key9": "5WdL28NcryrT4NCXGhCkKsECAousYARGGZ7yzviwuaweVGxHcLhFuGZBqkcQeJq3p4fjBsjzsnVH36E2pZCBg7XY",
  "key10": "2b696Pm891Vm54VWoPYJGZTP14wx3eyQm78kmt6wutdqTKZ1M3v7e1qqNK8wH3uUcfCoxe4yWvKYtzKWPg1tzWB7",
  "key11": "5ySoXfAnbPy3LWfixmdDGaoukmUH6BKSmRfFZBoumaAFTdr5h3FqpSjc45x9zLYzDVaNWPBmiZoa3wjKfXz19N9T",
  "key12": "5wNni7WucS3NGAc5XVhzBy7s3wdBM2Qu8ZQNWjU9ipbr7Sj7ngquJ9wGZwYgQartjjcnWK4b3SJ54NCKJesxbR1Y",
  "key13": "dSJkJF4NBrsw26XbWqiBRWafze3JVDivkv7Mqd9thtTTGofZABMmE5EZowEsHjxvAhyCmH6LSx1DKQvJ9TDMaBR",
  "key14": "2x4eF7VG42YPTxm6WKZJH8uNN5v3qaExNyJnvCmNEM8JTwDGSzQkHGwnP53wRz8RF4MrEbLLuKzgK7LaakSbD7uj",
  "key15": "5rLebq827rt65q6YeH4mPP4T2ADTJP8Ku8HnyudnP1KTpLH8iY2HscmCFogJxXLjeE3w5m1oC51Y33REzfkCqPdx",
  "key16": "3kGSttJPApwTkjtdZ87ZpkRWTnv3b6yJQR28jZ68NdhEqzyDUQeqK6roadcBc8rtqd3c723JxB3k135pezKAu8aM",
  "key17": "3YnvMk5y1m3YTUMCQXSiWbyKLKmHQnsp5HTMnLx2HBWSTtU8sc26Xp91cd3nmUv7P9jwwYg3D1o2SteZgEVivgdu",
  "key18": "27YTZknn3fcqpKrahLgLEYpoqUfmgxxwF7Sqdyh4hBhv1J9HubHVm1nVXHLmaLCSQt8YJZQrD8sTww8oo7qQosV4",
  "key19": "41JiA1W2xDqwXTvGHmrcL7bpip84dgL9RjTaACgGvLLgm57fPHobzRUPRmgo9NzuYHTr3bCQagkVKyqFW46WUMpo",
  "key20": "5XPQvvAWu3Xv6KqEVkhNeFK4nLZSiFwciMEBv3cesyqKGfN9oYbRDT8LjaLqV8U8cYnpbuBE4kG2TwM8X8Tm9HMw",
  "key21": "T3uaBg5qhvAdDgupV1DiVmMLRQ8oojswWQtCKtT6vvifzfURXwEdkSZiyFoZD3atMzjWvTHna8VjA8MEsjMyjEe",
  "key22": "4TgXqzpvXXZ1PM6aWmTqiKrJVV5ocUynUVH7A1KyeMFzPRiQpJ3TTvyURrK22KrdFcDAMER78RPQ6Mzvq5uLgSRY",
  "key23": "iJtJsuamhyXvsi6p7aguoKT3eiHky1XkEqxSpdyWGE1BYJdBEX7cn6xs3WFMkVtKDvYgkEQYSHAnccrw9TybPqz",
  "key24": "4vKt2e9pkswxhTqCvjoYG4RuMm278Gv8CCkhwPu68pw3JjTpnjvcq6qGiM88KrVdfvNjt6jVfrr5QMf18kjrxBDN",
  "key25": "67ohJWqfogWrMaLriMpDoUpFdasm6NAAe7w8riwv8wCaU78XtRJNkEhpRa6VijehjDAWspDNeWLSyVxRB1hVR8zR",
  "key26": "Zi5kL4ykhyftWtSkKYMPqz1RrmZqtGjQpPUWDuCFPW1ecWgQZ8qD4FCek7tx6Ztw3vPr56kAsT2SfTP5itJY8GG",
  "key27": "4visam9yyVAvZU6VGfHcvfr936CynFYuCwP6Df9rGC55asYP6ju68uFNqKam3U2oHDbhrsqeowfFGa696VS5ifwk",
  "key28": "a7RD1s1A2uzs8YJQ3zYhzQxjX7RdYdqtGvGn3GWTDf5e7QXgxjBkirVrPop2y1w9cyfEt9jKgTc7gZQqmkvVwNK",
  "key29": "5Y4oMRAx69cz2btEupzAmurLjdyzfRDCdQDE28JzrcYBoHuaXqoQYd8DXemtiTKBPdoorbuQfN9WpBssiNwzryr2",
  "key30": "5YtQQLZWb4nwu4M59uqTFNCvAip2n16cjYhrgGmyfFgbxbTApDfq3UJVKmJ6WGJ8R29dYyYuj9XitCgfbd6sNAaK",
  "key31": "2go4sfNpP1tHx3fpFiopLh25NW9h6ik2D8XVhFVKUS4zQHSGT6wKGaGF3QK1XJiCdRRLPkWpqNMT17HCpMRrrwT7",
  "key32": "2dsCA11YYHVBe9X2KqsuMNCTA6WEcofWRnWBzNJTiSMCnEE631pPdWq8HkcJU6A3tTcryzGCz1JPRAKUUEmYouif",
  "key33": "3P1drhV3qSP2kgWphJWe9dkwJELSH5zYA6S9DSUYLwcvUdqNsFPCJznHkpR5xQUykZJx1N5ysVPDnaGnSD8KEM6r",
  "key34": "3SMWtoqNeuuQBoQ3SZPAgr81FD6VWzMVf3EZDXuvSB2DecTBSqi6a3iuGxBX3YKXSCUS91cJcwFuuKWpa5yUGDKw",
  "key35": "3EjMBFpyLSv98JW9aGeKSEtgBPxRmfjUch8B8HaZkEAtJHhMazXz1yqefJkCE22vhanBtyiVZxQfNsJxWNnagWY4",
  "key36": "X7W3cFbjFQSipPBdmNyzrQawXGnNCX52gGU4gShZJvauwZPRVRwvfsg9f9keScnjuMnEZs79ntzhhapjFfmSESB",
  "key37": "Uy8wqHyaThBv3DNWoV3EXtFCNpPPwWAU79gD4YCEc9dT5GVCK28Jf6xazUohzSsHbx8QxpoT1kG8szXyV1GAuwR",
  "key38": "5tRyGNb8ruiH2twDLgB4Lgwn7ss7h52ob1vE61kcVMcTWgZM4Q7xxdtrUjUN55NtTX4UxdJZ1pBN6AtQMeDehNH5",
  "key39": "5Biyxd1DdxSihFxA4Z84AdyGLUtkyFncqaLKH5xezeL5SkjQT9iwzqBa82z8K5D9pq9qcd8DJNeZErorFknzJdMJ",
  "key40": "3AP7inDs5bu1EcPvoLrMneJxT1y3WHDqyQB8p6jGzspr63kdGDmKcgUhMmCNwqWbSoccNrF7wZewp1EZgFckeBxX"
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
