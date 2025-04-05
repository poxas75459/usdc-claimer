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
    "fhE88YhdxtJCGNoPChzc9TvomX5wKftCqVSVLjGQBc8aKcVmbcmeP5Ywcfakv2vVgMWeBBmoC62TEFEwFaLf4q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhQTz4ByCFjLMYBNYjouEES2aRhMwGq5GJRk3gCEfjcw87y3CHs9ZDVCpPbYYpgkqqZirEUaW6YLWVP2EggQte8",
  "key1": "5JBKQwSpXbBJh4Ncbvc5ZRF3qttYKXzW3pe5YyXqUrsXZv451vzP25BDnJvhkmWsQxJsSVu2dM2BujzA7V54Dz8W",
  "key2": "43786JPsiJVdHkWPDcXPhvA6fvmaLZiTmnwx9PPL1JL68fNzzxSDDpWykejcWQqBiQAipUz2qooTHqREpbJM3cPD",
  "key3": "4fvdnyB1XWvjSFn5xmvzHZZndatiBf7hGrgs88pASfYyP4WZraK39nAfHCuhvqhKXqkquWyH2b9RDvSi3YhFdY46",
  "key4": "2BS83egkftvHWEaNH3wwwiFaZ8zzkkW2euA5SaLmQNavQg7ejW4ec6PFZWvFWn5WanEi2uMY7rDfz87At7rCnhCW",
  "key5": "3761SERJKhcMPE6m3ruistEqFT8xePw81XffA44foNPRXxHvBCyWKxDwiKmPJi4ZXdenuqwHaqivVU561pE2EvsA",
  "key6": "43mfjfmNBAhjn8HU56wqbgzHYjRnv8w2MTFubKkKz47A8qYniLFUVHr2Vdq7bvTRbvQDg2mgR883tAD1vRQwSTEM",
  "key7": "2Psru4CN6mvCudj5CCz6Z3So7BEtWqVK4h1ivtBrcTVLebbwMDwzRWLxTu6o7qNHk4K4fSnM8sEwV8tcnW6eqF93",
  "key8": "3DmQb16c3744DZHZCdsveRfd6CQRxHZdN25fHQpLjyiskEPyLeSa4m8yUFUMh81sc6auvmExBRtYWxc8LePAV7AX",
  "key9": "3MTXTHe9kcpDsNy21crkJxGoxC7BtmWNUrt3ZXck1nDfLAqQrhDJfFdwiKHMnmHFMgz1qgR4wACRygdzDYoTSknY",
  "key10": "3wQe7Sv7ovrB8v6f653NZXYWGdoByXYhNGkvratUmgRZZAQtuyYF8kQmztyx8gxtAMYvBNMDfa2HrU9spNGyZC1Y",
  "key11": "5tRb9e7KTBrky2K6FWa8iHXMFceEt3mt89nKwNvMBSGX9mkzSXFAZwgvpidaD2Y5ECW3okUPtX5Uao997NQxsiJx",
  "key12": "2ZJc6LtNFXqcTPs4GcPBBda9eTbHzJS6KC7P7929pNg4tyCFGiWibnXPjMJwJUsYX5qU6Sg6c9FHBWkqQzfC6YhQ",
  "key13": "P6Ctmkjgea8LTjAbfQm5fi3gc8nrHFbz9dZHEmxo4W4pGvEg81J42uCqnzWWbkcvxWgBZPQvpZk1YJSCRagkiha",
  "key14": "32WFDFFoZJje9BkV4MzBfj1z4v6ycjHuGLidyQe4QkW8GjZ3C8agqREbgfSkxYDED7rEk4a6NuibGWtE3o4BYy8K",
  "key15": "2FzKs6s3Yd6TCeATsBTxCDy1sumhaMFrZ1RPrrTf74JTmne8jUq9pLidr6Wz5NVepVdwoNMvnBiPAtTEmdMj8HLo",
  "key16": "2nsBzkcBRCMFSvZ1WKgjvxvjytyWbRxPZL83kZMPDLRdhK3oQaRagc6NVdUHb3zuBNHRuP7nSDm4zPjNCGcwv1kX",
  "key17": "2qfsdYeyekk4hfKGbzLFqdUsq3oQZfJkhV67yhi86QKK3uBhUQyE7pREWEHGEt111EdQaucE5b3yVCjRuKNmwhZu",
  "key18": "3xx6A3T5rXpkdomxHur5m5A2g3WPu3Krs3szMeuVLHVcTAUpHU4PiJQG4pzmThssXh4vjQP9iKkxXy65hRLG7PoN",
  "key19": "27uXkqtEYD9siLJNUGPmSezRbZSJFMuorGi9yRxb8YhWbMhCEJQ5Hq94xhL8zwShmeUcsKj6Gu3xNp9jy8VBRNYz",
  "key20": "28YSzZ5xwti5PtjdbkMvcT91Hrbsf5pUUAkvkMk2KtF5TDxYc5AMoBX9LEyg2mVMpQATTHbvAK5gdhiT4PrGpGtu",
  "key21": "5No5YXLxcNUBLiV55r989sVuuRqkyDrdp2QNm1UPe8ChBu8ZUFsKzPKYFvzxXgzuuqQzB7isr4nLDZLjiCXdGW9L",
  "key22": "51FE8bbAtSfF8ChhpXxPhNjxykbkmwLSYa4JSSDK6L35YYr9LFDxLWjsYy3CiyTjZXHY2hsdEDxR8AMEgs4JvrRe",
  "key23": "5D6Zx8eUcNoEia8AqL7fjpgHdCmrcDY6SWr8HNPhBmX8Ei5PwW8BvL1psUcrr9gs88goRXSNzFBiJquHY38Eun92",
  "key24": "3Q5o5z7sosvC7TDybRt9ABGJMoTb7JYiQ4CopGZmAN4wtcPwGrPfqpUNH8MZHCNjR3zRQuWtJRBzts4HFvqArnzS",
  "key25": "2eY2SdcMiaoZSDvmxzkUxYtFHNCFPe6xjy9bBXPNimaxkD17wPfBdq8CgDzgxZ9RoHm11HMh3z4G3vXUPPgLpPvj",
  "key26": "3vEXAg75DEVdRwnRBS2y9UdxKNLjKkZQn2c4Ldmm2nExdgZrpPnkcAg3EsRbR2bawpEoVKaAU5dFdgNWS2hjYzxX",
  "key27": "4pzpecuSvwVfHD9JBhYtrRzTZqtsuAJbrgo6NBF1rQM9JLNVACwSHyX9DsVV6uLo7WAhdjLZQYXF8WTGZXgAHPKd",
  "key28": "5cGFzoLAVvqhBvLVN4AovC4BDiT65s1YwAZNasVgEWh5SqzxxKupriuugsgAHJ9JPhzRrBAcjJnp29MYc8SuVLYg",
  "key29": "24Xpr7fCnxe9YBGH8R2eBW1pRLuJZiRAq6H19ksqWPYWpSbovKs1eoEEePAN5dVXTNaWCpakPN4UzLByAvXZtcuh",
  "key30": "4pSHH4eTCL1di3nzU4Qu3dJDyVYX4fxqe8VchXpzXRpUBoVHTx8UU8rHJr1n5dMuxbtFbR4efJN5hsHQpUXnabgH",
  "key31": "2Ruvfp6frBFVciYi8qTfbN1SmwmVNyzYnxZqf7mUzrjkuvDFzjrjPJkWMjES8TbX6o6FJ7Twi5r1e5A85bj4d2Mu",
  "key32": "4B5KaknKFcTLSNUFUb4mgNPUnXKr4DapmC7EmRGTGCdiJqSSCxH5RudBirkTRyFNs8Hxp3RRTieBjT3BUFqPDJsF",
  "key33": "tsVbY677KkhuFexwRvFc7YDzBPdvEa27Hia1dbLTNQFszFnFpTh2DZxN7Ra18LFmFeAvgkK8RSYSvsCCLyVHdvQ",
  "key34": "hVkJVw5KFQJ89aKXRCxRNAtPDrUS4G2AdGVoZN1Qi7obiBwTnruKLThXZucdjDZwcW8K5tNfjid78xVyMzryDwe",
  "key35": "3Lg68iUYZSnA7u85HD32hnfUjiynMeK42RVgQVn6hgNbikjvVb7oonrSNVnqoiD6MRqkCYhYjZt6EYkhmZsWBebA",
  "key36": "2dKteKgjViyhJeU5beJcs4dnjh5UVqfzCmPj93vudjy8o8n3ijTwcjqN3q9rkcvuLaoLDCxh2Jh3bqakPqCqHbkG",
  "key37": "4XVt5FnD1G8Q3ej1QhXaowQxxRtM4ZxjBKXFY9hodwzGEwnRGtjnToXW2JyAGYomuihhb45KAfH284BQiNJSkhYD",
  "key38": "4bmNKAaqgrTiJgLh7CHFzYi2Y6fi4AaLukGuxXmEZ4fSxZxCPLg6xMhWFnm1ZtBBdEvEv8GbuEviF9pUhbqMNZDB",
  "key39": "i3VXJb1WxBcigSYCBnoUcsf47akUoiBR69AK3BSVw9VJvE9HdN5fi81mJtncVe9y65HYbB8oVQPnMLGFgKYoqG2",
  "key40": "3AQRsVEUcyW5C45P9guDYBUXdpVGAnWKcG8LwBfbUdCsH6Vufj13eUZ98SXKW9vYZV1eFd2XaaVa7cRswWkAA9vy",
  "key41": "2y9FfTDqa4KowaYpMnzDrQYNaYhBNqiwEF6Vhez1fLPej5xwWuMVz5WwNCjzFCo1Vw6XLkuaxWAz1eYUaWCSd9BC"
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
