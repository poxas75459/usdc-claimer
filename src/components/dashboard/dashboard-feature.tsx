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
    "5TJgSVtsBrAqWwj25esN3sXWLnvLUhoSkCS6g1pwvQV4DdEu1YzYTLi78BaeNr7dR6h7RcRRX2peGAmKfV89uzEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYzENMTaV3RE1D3qxjJur7CGnozS4V3ApAbqvtnkDaDY6oTrSc4Qhu8D7iB8tXJt9431YYWoWS9GnA6HRqhSrAL",
  "key1": "3JCJgXAhYaCmBhswnV3dnaSttUJHC3oy29rgPpSCGxC1z6JhjT4bQHHdXE9S271Kv1qxvEMNguvGqYqTWYJfjPWP",
  "key2": "5LcG4UVpxxNN9oBVFeMG6hMZsSFj5ycxwJMDm8SfEQ8cGvJneCmUqcjEiXM3H5Scy2X9y4Do3xK15gQSetUnBxxX",
  "key3": "2H6BVgYnNQsg6sAibpQreVm9H4oJ8CnXwMVfpBvK4eAtKBUXvbpyQ2nM4nbwYsvhet3QKTPvVxvdtwfvFc9Z1oV8",
  "key4": "4wm8x9UewihefvKbKgunU7YmviTfT2hmsqSkyuTmXYELUK8aVNCM7SX4uiwYQaabffsmNRRjEUTPfRnu92YXj5La",
  "key5": "2jPx7onZq5yq6Mc9JuvPhRWAbecq1YtPujTff5CQUcLn1pUY5F1kLRF1sBfbpgDhCfQ6XNpPpq2wB1eV9HHyCd9y",
  "key6": "2gKSHC3BLh1jrxA9FXmo4DsJLFb3nzxJTSQF2SkCXisoAcP8wGUczBGU2L33Zy7gi1hvvgvwG2V6WdLE36bcNd9D",
  "key7": "2oX5aHWe4xbdxgg4u18RrPgtcHg5Vrmx8yQ1UkNX34k2hVHxhzNpwigmHesQsEsGkFmCtVJtBUaghmsBiRJezZb7",
  "key8": "2Yed6LW23rWAer44MrnTvRKduL1NDBMoWeKD93KPjFPxwpLzeJc4s3wBQ9LVGaFL1Zo2WnpiUDGp8ZkKTKLyPw31",
  "key9": "4QSN3rVSpzsezeoFu6DsbXMj8vs7aoJ47vXFFJRUxV61TqZq8Tx3B1KFDsSNxDafcFWW3pbcPrzMsx1tRnhMSg8L",
  "key10": "5duivtv1CFuHa3zZsuHUkoncgaEZX9zxenqvisXqQWVfwLBfAUaABJi4619BDgNt8wME5kYSmHyw5Bi7QFXGo9bX",
  "key11": "5JQzfpk1BRV12mnvX3p5VWscoXPmDZaeZrw6aTZybzwX48VxtHgSZB8qQS2Qjg8EhvvX8hdHyyER3ve9gKe5GDeB",
  "key12": "3XdWTmPpkTpvKoKJ2ymiGDPb9RnnHqvTUW8z37eeJqcmA6vihE9kQAVdqft8Vz7LAyZMyeNUwomDXxbkyDnNxYZB",
  "key13": "4ZqYfqVsdtDqHFBqdYpfCMij6iQeMnRfw9QRBvckvdbovpAvgutptVK59pQFwWYu6GMq6eWLdxPLcVUfEqdGcvK",
  "key14": "AYnV9DW1dV6UhvRJ1DHrPwgtcEWqP8z2RBsEHJoA4rzPjean7jQBJVi4BV6W9Yfep6HrzxFpAigvFpCZ6uz4Qbh",
  "key15": "47H4m2K45rpuchZjZaFQLpsrNWX6Z1FonKiDucVmK4pEK9KjeRzY81cNCzSun796dCMn6HgXVGa1MJkwS9QQwdVG",
  "key16": "2m95ynSRQTdNhC8qorNu9iHaZtnzR3hLM82mXW63Jb1fe9YJq9ohAdxoCLN3Tqof8FTZjjUbReDSbxDtW8a5yVwd",
  "key17": "47XM3X7e424guSDQ1EtVSWh9VQKjPxxwBsFVTJ8VHKKH8J47nDxwbycp3axmXGWu1d4JT96SkKQesKongaHC1era",
  "key18": "YyBqRuCpf3jxScVUE6U297VXr2BabhzG8hcAbcvHQQpaAfHoQ6uiHxsjthgoTjTq8ZeTEB91QfkTb8tmpo48Zzn",
  "key19": "3UZ11jdUTZPFmeJ73ZtJnUE1i5Q7D3TkbUuGWKPkJVKQR44Rjj4keDR7hmMvfyDdRczYXsq9auQTKwjpNJZsdVWF",
  "key20": "2WG1WixKLG2MBxE2a3MmtxZWWnFYqdxfjWMbRDGHZsPTEj466Wg1FNL5QqYkU4FRdaiw12rggQHZEfE5pJy4Q82J",
  "key21": "4dpN8pkRkK85E4b8853FDZho9D6KUq7dCyBecjEzoU8SWADt9UkeyjaNyYVFUGPh7RZk4Sw1cHkGtnb2XeNZCVsg",
  "key22": "4djs2rsYojbZBfmdkioTgXGD3L9gLhmvFMJppo9RiJJcc8DXZxYq18j3dAx4nvma7CjDaU3grutWURnwvioTx3hr",
  "key23": "5K51xNxxcCHi2t24bqmVHXT2A43Jj5Gpw9r1DySbXzSm4dawHBPhZqas19wo16cNSXpfMSQqVMxQb3oEDs71Xc88",
  "key24": "4LcWG7YFV9XeaCNSn1Lifg6zWwXQXffqPkVJ4xd2ugnmN6mfWXMnHHXvs7fiP3ZBrf7uFpgzvkAAztEprZNc4EwJ",
  "key25": "3scagV4PpKjz94j5mFtvkTCEWDypH1hSR8weqP2ttyN4GF8TS1pcKv8H9aoJdJpUxUNEcC8mRGC8TT2wTQk6aqpL",
  "key26": "27YdcGMiS8qMoa2b24rvNmmq9WPSubCrekUCLM3zjx5UtGhRxbo2xVB84VNeiYKyNJ8MVkofJqp8ZUY5bTHj3Lr5",
  "key27": "2wRu2XcGzfeJA47AaFDiVC1FjT1WrbgiGZvna99JNCmTZ8ogwPcxjHa1fe4L5iKuDcmPsphLxa4oRZRZUJ4p1c6b",
  "key28": "5qxnVWBcjp49UhAfq33GUeyFiKntikZqXXW1j7A4bCW88iyFQDaRwedi48ppor2UhNmwnXVW5QvLY4rZCuSLxZLE",
  "key29": "2JCMCni5S26xBmiAY4GQaD8AqhbqypTMoJ1vZKkr4Cg7fpoeRZoWZ1k5DhTkwaBiz9j31HPBQZWYWvTxaKLvcx6J",
  "key30": "2wRB6HmSfiVM6wyNxyE19Eos4r5yPyYHRQYb4fMihamSJRVp5yLPSWXFoxQSo6DXPhpyrf1YMYfNdfaLumptWYDr",
  "key31": "5r5y4GW3PYQ5LbuRvRpkwcFVb3GeVxEbpgnse1F94oi9AfAS6nFyiTxrn7A5dHRneMmd5e5sAyfnTfLYHWSSEiuP",
  "key32": "2SeXNsBZwib43CCvHWP51hSH7r8Voy6Bt5BKy3tm8A4SB2y4MjGrHE1escph7BpCpBa9ZryDnU1UdQx9JaCU3cjp",
  "key33": "jy57C9ekB6aCiAXMxG5r6SbWg2qVYriB8s76WwwvPkv1nbsk2DuGsGyemrW9y7CCrvBm4SCW534YCpqe3SVKLha",
  "key34": "fUig6B8YQpNLwqpE1itxZscE5nZb9sU1Y2iwzzJZuPhGhs8ZPXjEHjSNiHZqpPG1eRp8MHGnjK4EoNrKdvJwofQ",
  "key35": "4oBpzAQqJJjtEi6YSa1B8XoDr71PnTAu8zHN4WbCvp6MAzQWCBhWrxcsa2ZedrGLvGASAkDz8frv9QfkFWfL2TZs",
  "key36": "59qmAQD4B1E39PnCvYtZj4WY7DBi9dKYEYUQqR7QTg9BcS93Sd6cL7zUSbDtwDhqS3wL322QEV72KaDb4acipTHg",
  "key37": "4CEvVuHFC29UtbRudqDMLjzuNoTsvuhfjYqymj1i5AsTqggCtvW1C8mbKDRyCHj7C2nBEQHek5h3ChECJt2PLu5a",
  "key38": "3ewU8JZaW1sZ9kcGiWguzCkCMeao9zprrwgKm5Wr4ZVt7hZmK2e7HaXk2A8hAhQftL9Cqz1dYVz7wpSi6srSarU4",
  "key39": "5sqftbMSVaPm12vnBth3Zsrhz4MnTSdtHytMdUPpyjDcvEL98LLoT79sdqzhBBtndp56QhoxfJUpW6BYGD2zRQBH",
  "key40": "3ijyeyH9omtdh7hEuJhmZVFnXTPZZWgBjAHxZgcT19DZK1ymUXg7JpThTtJQv8Yh5gSR2LhSC48L2FL6QD6LncQR",
  "key41": "36PYk3wDRCbBwgcaKNYd1iLPCM27JfAACAroFB1Fi2grwbF63fz1D3ZCiiXGoJMEFxJAMUVYm87tNjLgVLLxxTNS",
  "key42": "2FhUBW1ronMBRZ1aHZq2PdB6pQgjymSaeh1fgo6ikKo84RoXxPwx93NDjtwiv5nFXHUZQVBzTqahCi5ykk5fRSnv",
  "key43": "ZsmAwpXCCtgYmxJXSmJ1cDL3dHC46bXFDMWXVPTsDFabcnJGDWECg8yikTNF8TPmP54z4WesRU7WkMUcRssMJ1z",
  "key44": "27ZBDPswZgUmxxh5XTi5cXRQjieDN6vh8tsGC91cJtufWrwSCLcXfG9FSKpSjWPFLMrEeWzD3d7w2CidpGQjyrws",
  "key45": "3rTtL7KN32aKtXogiD6xy2nEm4NVks3MF3bU9EpiAzuwaeehm2Bdhu4N87s1UV8DhSiGwqkXvSnSvmFsuQmdkxug",
  "key46": "2uxDKK65LhAQyUoBxPevjvPqBQdaY6EExyFqQMTM3R6SC92paRemffV8AWJdpVodjayAwgtzjFiPf8dCJunpaTXp",
  "key47": "3FVFPmWzPB9Q1vCApNS3yiLAj2zurWvHD2PPoLrGoLRCgsajt5L2oX3yE9M8Q4aHAGDsmzwWTJdd3b8zzfZoyzM5",
  "key48": "5Zfu297cK6s7iWZ4SepGFn66hGubWeGdpr5izNqtmkFn6sG2xWKqC3ky8uY8oZsFjjFDMeqXT1M6caQxAQNPV4yX"
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
