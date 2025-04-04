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
    "4TzKjvMiCFnSiyrxFFmyvzQi5mz8HFv1XexPXY2aBsJ6fSvb8uaCxUpRv3dkX519SvGhPJVpyuZAU4oKNgksLZFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "77ynjthSUDhyf2Y4MHZ8MWB5QNGgpxGR42DX95vDyEtB5Nq3CPEhssg29jQDxxd8QtjXsgpeZyDRu12zQ2YVb97",
  "key1": "5SFnZdwQkHRdQCtSXdwybwBDPheBRT6QUxfmEUTBsGTahvnmo8EmMuUe5akJr8qxLFAoVMk85YkdKAgXkFgjHYhQ",
  "key2": "4UJ3yaKg2o6Lr1XtJt9LB1wfJvaE39TSBj96AcH6yi8BkPnJLmU8yMQ1FD9x8sAV1ubkMFZbAFrLi1TQS47Wafxo",
  "key3": "sh1YUMiGadLWPqWMm3zSmGuf2qS9rVkFUf8mzXUGXJf7CCiBKruHiG4yjsfzJysGVNvJC3aL1q5tXNp2sYapMFg",
  "key4": "XvdVH4cYrdYZha4DhoKStDYkfTDuuecfYmFKwJySBfmWsSgeptL1vQnBEkdcBKqZSE7GQdDKYgLgNVCKhWoWxiN",
  "key5": "4cob9KXZU3N6BmdYLGxM8RLrE9cVfhgpAi244wVbmRqU2zxijd6LPELy5HMEvVxefhHpL5UGBSfwdyRDfaLdUuu4",
  "key6": "4cAyc2UeEKgQSgavf3CCpvQNFvA599M8LZMKaFwyasBfp5YFUmxYGnyMj26jRKsypm2suMJnJZh9XnZMHQWGnuW",
  "key7": "3TWtvcRi5yNeGeEQd2F1oASs6xHjNGeKN7gX6jGfNcAqVPfvnK1xheLkUyiAYs6BJHLP7agsde3zcdo59YpRdQhP",
  "key8": "nAyGX22HtJCzNjJq6Ay1oES5wcwFvwCeDyE2Hjbtw42Q9n5B2QwBM6wiBYYsBU6N87gVuacgu4PZtatHKLBMMua",
  "key9": "fN2NUi1tZJCSiztoqFpKcYp7iUgqmKDDtG9mf3EZymEcnmVGMeWHiQY1BSRTtsBAH7cYAYTmGqMp8jnnKMAaYUY",
  "key10": "4N8jTVkK6FQuwJmafEiH3sBdVMjxkNypNXBm2vDj2pk5jD4qzVyh2gNFurPnCwcbMG5h1TQJdVvaR4ENdtDBcnEp",
  "key11": "38BYQb6pNDUG7yZ7MiSd2ABf12grzaeJHVYtcBDNFYmpi8JPq8tgbEuioHrLH34gassFL2zETBvgSkUcnKi5QrH5",
  "key12": "4aH69TBoBEaNBx43hWgNNfGLiLicVJ2FPCeofBeN7zS9SR7xVc49Azn8itotma56xBRJEiUXidDNBFVESKSFhz7M",
  "key13": "48sSCEwHDyJZd1oJRrWrSztuMxLdGgax9qWjnaJZDGc8ixBhJTABZ5k9NEPWFxkCHXonqZtytjPRe6tKd3VdLmLc",
  "key14": "2JVFakBQq8Sjz1pqcWJ6Pmnp7XL7GvYFzBZEKQQeZiMdi8yENSzuE3fz7YDWnSkrjZqpz1b7UrhGgVSrhagfSpsR",
  "key15": "4pTphhsK4dxzz7s93B2Dtvd4ux3KY6Ga3orvfKAeaXC2N7T6MCyyUDhJ1WH4v8CfBTzdw6tk7KZadiGHe9pgq7D9",
  "key16": "5J2PMjSAsPQtxpdkcHTTG8nuBp4vHpG8gj7pWLt1nbxKJ6DGtR4PsyjRVWCMenqmtHYr5aGfxZRvx1fU9EUq3rXr",
  "key17": "5cjhbJaxS1YsP2gwUYaxJv6UEidrJwbH23dJCfgENoJdGU5SJCLNiq2TtXYKdntgaGiSvbMuPtWctovbCpgrytXq",
  "key18": "524TJWk18hDUGfEUVQRM4N29PSGerpauzUSLTeFL2W3EmfmAWRfMn5DZm3xoX8cnba6ocbMhU2e6eZjZYaxGCCui",
  "key19": "nCz8tTM48kQCXKEx6ULPoXk1JoLc2MLbALgoBbRNkxxyca5K835uyFw8gQbfN61NUQAWnPF1bp71HcvzR4ucLVR",
  "key20": "3YG36Cti9Xa9YoLsLVpxM8Uk5yXE8hHAxD7zWfHFAf95jxoiC9yxnqLNi4n3WQHCu4PuUkgrS7DM9YmA6mtA8C3i",
  "key21": "5PheXaG7eNw4zZRsGu5fmFVdrFHvkzMztTwttvo1PoothtBwQZSSsjRX424JA3up6C1GuTZX7svayrnfEiu8HkNy",
  "key22": "57JAV6gjt9UiRKzkmv7TuSAGN8FaNykQDYyLdqoWhiCdtisyQkNXS1P3CiRfRnfRed1nnbAsgrBkQY2Nn5vFhmqS",
  "key23": "55B1QkHMC9U3enHQ1XPdf9egBRkar9F6PXtaeDqg4Aoz6xJdvmG6x6bmY44L9vr2hLYaZs8DVLHMnfMohLMPCjSf",
  "key24": "4toap9noPvbDCjAQPa26aQBy8feL7JEwwXr5Gxj1y6gZEVNheoqv19xGUUj2y14g9kcQ2zz7xHUbDbRunBwhk199",
  "key25": "2vp6Bgh6Ne5kakTkji2nxcMALpfgRRrVX7ec7G1nMGB5cWacw1ka7GxVLVFf3qjP9BcHoVewBMT1ptF4tY5yN9jX",
  "key26": "5p53AqzzbZFKb5NNT1ZW83fnKcN8Wsub3PX37Nbkr8s2aDzQyG7LKvLc9K9f9Ga9rNbShngj5jczbkuWc8fX8aLu",
  "key27": "2MLUUjxB7fQLUKyXJcKZmT6NBrS3k1nfViRs37LbLyvcnFwzAvgd32qcSZmY65GSbdY2mzPUW9i1UawuZwWLdCku",
  "key28": "pckPk5Jsfg8SrNRi77HrsbRaGLt7rFRe2TEcbvTFHDRfQkAf9fPrzrLeizPVEqP53Uq7NckPtW5E5JqTrWUDJeA",
  "key29": "4z6yNcJWi7APg7d4khHtqqCzDNZtqRUoRSsngYnw5mYYv2gmbyJnMaG7jun5pf84jf7rkoaCUqS8shmBzuwC1app",
  "key30": "3apDy9bCae2LjikM8ffCB6XNh5cuYdGoTMttd3PbrBQkCs5Ct143iHAUwLzfykZs2U4JsnsFCLPA8ZGQwDm8LzCK",
  "key31": "2PhN8vMPQSQYPpojokxrfyECmCYVArwaCTmSBC7zHZLmtQ4A7oE5uS1tztqdB4orDvKQiEsBbSoMGs6xnBmZQCAy",
  "key32": "5jugoN1R8jRAvAUCtYiiDvLhhDDEYjUeP7naVvaxFWDAkju4mLHdYz5viUJWpRPjFo3V9DHouCaTzpt6ECzvDTDK",
  "key33": "2CG86ZNfjJwPjGqTUwzC1VuBECqP52CymKZ8DHbrf536q4Hqs2wXBoPuokcBmNcfdQa9iARfHBf9cMDMpmRNkXXF",
  "key34": "4RsMWvPFTMp879Vp32NPZo6U5b9vUgFxpgup7yDikU76hxA4u3oLJy7p5akwgrZ622RiCPXwGKEfFh7C4pUQEN51",
  "key35": "5SWCvE3hnmQKMCYzbqZ27aYdyyz3rYyxkgJZTn3kCUJ2iW58tPJvKi1pbZuFoSNjDvutmkdYGS5zvDmQDnFx3yb",
  "key36": "235ELFADjTTHPJgHL5hsm3q2PDyMeg5TJEWWtJKuYiBYHpsjhEDDD56qTA7teLWRzFCSsaWWRhfwSF1CfBftTMKv",
  "key37": "236AhH4XNGBpbibS5KDZfJqVVf63BpTvXedcWBaiP5CSP21N6cC14RSFXWV3Hu7HZ1qqGAHSJabd8P5kPP9DgjqT",
  "key38": "4hr588zYxiqxGchLQjhpA6fQzxn2q3Bs23dX6vLRfYmrmYhcXeiPDhLx5VFnZDbNG2rewfq9dNMfhLDoVPsJsyQ2",
  "key39": "3nyGsY6kHSK6wQK94QGPQYVzC6xQaiH7VKhnxDtZTTHtJfxu3uXtTPKdKWuZnfzbEUP9pa8Pu5WFez1JXQ1hYM55",
  "key40": "Wh5g2RC5LNSBckKoF5fZ1ydWVS6ZZP8gbE85YAQxiAydMyTr9ZFVVURnKqoeCtzRCDukCuoDdg2p8WAsuaP5ieV",
  "key41": "8cfXfpo6dSGCmWe92KtNuVFjrdLkUywJA9rkdnn66xHv5HZb2hzYuu8hKGz7kRfuKCpxBdWMBfjxPr4NiYWsHPy"
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
