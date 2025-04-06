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
    "3qgxfDJEd74pweAFvkmhUCeSimkL89rar6qC6SVVqzwYCWkZjx2eJMLbkzyjwF1JUUX2TeHVWSzu9ok3uXHXSMAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47yrboJdzmfnjKtCZQAjpXru62GXP9xnhiyF6U2qMarwiZ6bhvvuV7zG4UswcRUjxWPDictcMNiuYMyBBGiRZd9K",
  "key1": "4q45Z1Xx6pLS7vpCpkcZ2aZopTb6Vf3kAqUqUnz2FXKB4rARqicpwYRvfLQN7wjnz5k12pTbcJKFaDS9Lx2WBQ1t",
  "key2": "65ys8TeyZYzqqhdy2VgLHPb5Ri7Q94y4USzSzN79XU2xDfCZftsbn2NapWcfqVFXDQF8tYMRdh8ng9ze8RY6oD4e",
  "key3": "3Qn4ARrLeBybRxqsXri2tqhTKmVExnwqFBRF8YaSmLdonScm1psfjh52yt2tXz3advMPoiC6TgCKowiu1tAuhwJN",
  "key4": "4GcNmitutuGu16nSSpxTm18mQiebjdzPDfdDoDnesnWzHDvNy43oAqq8cdZDR8nyGnkhu5xT4o64k2TE4aQdRvNT",
  "key5": "2pzeyRJQgWtGyq7m6a8zspebxJEYaZLwJn8m28Lhq8MhUpxMU5WccHFMngSQZzqxLPUviS8vrSpTMtMcqHbpStDU",
  "key6": "5rQ8gvZEGbd5fUwT7Dgk71XhYpgy8TXG1ot6XqK1AxUE56b3kZmPrEnzza6ABijeFEqfvvwfvv1zVtGuU6GNr2rJ",
  "key7": "2frjFgoPMpoH81Uk2Lqwy8rd4vmWN88uoLE97cZGmcT41TE7fmv8yGuZdtGntdp1cXwsYkcBMVXejG1AJy7HB52Z",
  "key8": "5UHXpBC6FNuab7srDzWScRXB9eYTbbNYMbMSqPd74otBEJYcX2JT1EoC2iGwtJZuFXQG1TBegzj2c3nrBPGJeYPn",
  "key9": "41NwU7e5q3WA1nt5wZKZE4zCNThDdKHD6bvtYQe8vmcNZAnkmtSFWcnL8UxZ4kcjCvK9GPZmW3jbAua6rVSqPSZs",
  "key10": "4CWjtJZwuWnP927bqr5Ged7Jdb8J7knvj2kgsJ5nq4MmF8nEKk8TbaSV4qHRhvzV6gvuvJmsCnkuXGcNY2nV3YcP",
  "key11": "4ZViZJXUrTQbmtNPN2UM61HCyag6jBFmWv48iwLA5g39UJj67pCpofzNGWp3SCuWsk3w8brLroJQsZiAxm4QsTiK",
  "key12": "uuUoxDNC2HXQi7eotXNxeLdDmgUTAquq6HsSQJjZAjZDah9dhtDmnzTdLf5jMoBuy89KyZXajn4pmhVRYXtytco",
  "key13": "61S5jTXsNiqpbQiajh1aEwsZDareyaNNLs2Dp1aGXuj4vimuLqHUbqE9YwYiWNABPYCtaRYnayBjPfmQJx3ywbJL",
  "key14": "ZeuJmyE5uCNyPj3k6AjPheN5ZxNSjnGwDd45ovAZVBc4CGLSWyBeGPqbj5Z7v5Lt8NkdmjQ3H1p6ZAyS9vsoFEp",
  "key15": "4gqQasB8XwC81oV2ny6dWrEWa17a2jVfe8yWDnYgzKxEK5fSDevKspEbGdN3CjjCgnchpeZKz71Cv3z6VR1auErn",
  "key16": "4DCZbVVkEC2syjaRpyvfH3WikaR21Ceo856LRxnhVkkuLuDtKDqScPW4qcdo5sgvfsmKjQdvU5CHfmjyfKY14pW7",
  "key17": "3R5GWBzSbrtigCxMEe8RczWkBiHCmpKMGVWm43kqyfxZXySSkWbSKczR7S9iBa1c6V4jNxToMZA2iQtrhqw8p1Gy",
  "key18": "YLymLi6W8XbxFHkoj1foNAW9e6T4AKqcDz631Zw6kS6Gs18wibrHuLQZkX1QtJZMaT1tC5171qCc4dEHV1KoysH",
  "key19": "4Mx4hpFX9jTxWnNnz2J1NidgPWZEBrbznB6Cr6jdqHmBbEMRdQheo7tRmvHoMoZNjjfQLjMQMMPpJBC7RgahuAjw",
  "key20": "5tvbRjL65tuFbiciG4Z59Qr1yEYBWgMkfSbzTQk52MBFE7auqwXfkUz2q7Pq95JwfQ8DPLRfWYHb3qZ1GnLnig5V",
  "key21": "wbVnZRskVeoJsHwCBdeVCbitjVsffZxoWRtujiNWcxC8jLTX6xuXBJm9fXcmitjAHAqmU6akGTEGtmRzWjochG4",
  "key22": "2kiui7UJUKefztaEZqLpZ95MBwoqWmwCi9m1hYoGjuHaSgoZN9WKfN8GGYVJrnEiaLS1sw9BU2uEhU2UNjzXoAHf",
  "key23": "5CPf3gswtmdi4w6j4JYa4FhqbpyiYifk9nud2QDx5tMuoWbS2xaKRsBnidmqGj2EWnWT9AwpmwANnFxL6E543hHv",
  "key24": "39iq2BkgkG3NtqZFMtSsuTuQudoF12sLWBdv9TmRvSAGiX8Nnfp2JvdjkcGoS4tFgrRK4AJTaHMkAuhxmG2Sg3SW",
  "key25": "PAwkgBbrdwSbfoDQUDtQwPFwtKp8WkXmYXxpD3Yj4kB24wLXcehNtdsxRK8tUPjzqPctp6rPWeaFwmzca3Th8vf",
  "key26": "4iBgz9fVaMRNRkBaoxu1DKc4GRTVfVnqMk3hXTHvPrzzZQ88nVs8CiRPqTo5kYYXNrBHA1oGWwFscYjoJ2cyKfgJ",
  "key27": "5ZYN9WA6MHXzt9mbrcgCSb1fV6quJaUYSvkcoEXnGrkhN6exP7dRdRDaEopTJjk4du3E9demNiVMcjvnyjikDvEY",
  "key28": "2kGNZt66EmA5hmXRVjyTDGSsbgXMHcgVAyMYwK3KoCHFRESbnfMJd6x6Wr1wkDW7venJ8GbamTPbf1T8wZdwNWm2",
  "key29": "41VSj55PE5vvkkcLYbj9VxuVDA7d7qBSbJGUzzEjpZDx8EmPGANzok51ETLtAaawZ2rM1WXN2Yinxre1WXK3mfep",
  "key30": "48ckTPBtT2KVZ3s4zS6fmwaHvSDeHVAd34SGbV3ApZtmjUN3zPohyfx5PmFsgWjhHXWT9WX7pgwXC4ao8JzHCCuU",
  "key31": "5TFJ2XbyTXep2ftAz9rYo5GM8VUz4LJ1QHWTfM5q3qeXf9q4pS4VGDQ9DyDiEC1m2AQqmqWb5ibMoRtGzYJTMn5P",
  "key32": "5tfBFsLV3n82fWvXNjWqgmTpJPU1oyBQ2HgBmpAGVKSPYnWCrmGc9EmaG6VA942E9yLqzoKfXaCj4k4Z9ViZ2imP",
  "key33": "65r8YAkhQaarM8cJEZ6VCqq3aHAzmcZKbcUmEcMxEHFBM7LyrXyD2WuoakALAdFtHLm5Uu1QKaAWaMQJxaaNCmkz",
  "key34": "RdfDb7cHJpXrH7tZSshb6Dz6CaA1qzaom2kuw3gNByzpKxiTqLvcXdk8HV93dLbAm7Cc2zeDQA6t148T2NtJY4W",
  "key35": "2xsFaQ2sf1YMYNsK7p7Y1jrb7it3xTp9JomMz1uYiNyUG3Zi4ym217DZLtwm3kePj5b8WmBgquKCiknSFLCDUEJD",
  "key36": "3hiHKXNKRh4PjZsc6ALBBjatov9k7r9m1ed2zA3tBMYJs5XxUbDXTir9SvsRA3Em9pTHq1ACF6JLW6H81t6cZXcV"
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
