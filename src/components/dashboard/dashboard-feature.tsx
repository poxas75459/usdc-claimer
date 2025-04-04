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
    "3XwEP5GVwWFvEcsgHEt3fzvJ5VbKUcKURCZTsKydsZGBGNt789WikCVAJJSEF2DdxBwquD6SoCgoaAZiN2ZadY78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYPD81AC4HUb6Z2nEX4FspjF4SFNDxf2Dt2vqndeY7kEpaG2MBQdBsNT3g92MEzdppq9ZDbRZwCyPUCgKiaaLBq",
  "key1": "65HfVnCnxwzWLd7yEVrBBE1ZigMuDc3ypZNUnoF9rXTQDU9nJ9cU4gguWphkcuuHpD9CMVeCtz2NZyC1qXdLnF4S",
  "key2": "2csAZChj8fArZYXWcbfrNPm7geMYpGmW5ASxuSy578DuzcfTQzWygbxC6QysJwpTG8aADCMtGzviHQFeM8HkcBm5",
  "key3": "4wbYz2yDooDX74Z69wJKryGNLvyxz5cNsTzw9AseXjQqvMfM6d9FWQVvxckgs1ESmHNCXVtz9crjjmkSp2ZjFJGs",
  "key4": "49EuxpKEzPgKbuPgLgB5PUjuumeUx2aSUPW9Fks3EEK78rwpbPxDrmXL82Lh8cU42guT77djuuZnSsRtv6Ug3MEX",
  "key5": "GXXFyjR5BxvrTfZNbxwYfP1LSbZdYw7nPezASzkfAUnCe7ueBVdKDD3GmvvjEdE3kn6arozUURpqCuVCEufz2X1",
  "key6": "66xBjotD8afWQ9fW1DEBeJ1mZRDssGHY6gDvzk2X17AgmTwj9QtDd72WXFGqHkmak2QX4rWgZwnxTnJNLougMvad",
  "key7": "57uGFG9tDbeK5VuVfPY8V5hWYwJ6gxCrMkxMKCmdTKTDpGozLHfuTggDdYaKZNTJWK6SbCYKvh5znsUH2J7NgCf7",
  "key8": "3Xe6suigNQEJ3BUcGBvaV2EVWQypkpxdcbQB4zHu9cNyyu3BquatNiGh4QJ6texQUNj6Gd811voHJ8HtBYJGZoYG",
  "key9": "4bQC2KBvUzoJnjE8EL8dVNnNPq97buAiPiKNddVuKBZ3JStHWxrGztNX4mqREBL2ie4iapEzshXkrT57W2rrJne9",
  "key10": "wPezCfLTSphR1UFxciwbJ96YwjRsJQMokMA8s81uhicaqhb16nhoDsdqwxTsh8fCmJyFyyXoBDpmTcTZkMxKMA3",
  "key11": "3Br3Zr5w5bSe2jbnTmLFrstyZwhLhoxX6kcoZm2Pf1uczcrQirYeZ5TqBbSdaEaWpxtYB8qTi8VFJbmxxA5MZuTf",
  "key12": "2bf5spadn82Xnu11tBSAz9Qs1pxf7Q4RkTYcJgXUHRWP5DCq9bhbHi3qZNWaUbnWMDcxhN8J4eqPWQh9cqY92TPj",
  "key13": "3hKwFXoHpidHtvqCGxr4MAxKzrYrNqtUe2f28qA1EZZERssrvUBWk9NJRC7gCnuafo3ey1Ac7uZLMwUG5rdfSAFD",
  "key14": "75QLm5xBHgZ9EDPZnLkYXamdvCWhKUxbECV8wjKCWAC6fwJUmaSM1CdWxxwWKBiP6SKocY6dgMv9VWSP8v6qmsZ",
  "key15": "bz5XqjU8GkiNa14RptTRCmzQwSF3AZamfZ5RBU6kKHWniJEeZeUmnCkEAhS6BjenQwmnANLfydQYo6wWqGdT5X4",
  "key16": "52g1PQBSfkjZGLK5TWq362uX5gnHdLPMvJGTdM7McVu9vUrDVY3RdTuQJqFM61h8g2LHE3RPw851coFohZ1iLy8C",
  "key17": "4g3kmrq7qqHESLvH9wemdUFdYQfqoTv1MqZagDr6jp8KnxRT3xFMXc6YHPdsMnpadeVbhtxzbBkyDgsnazRBCuvu",
  "key18": "39hQeXo9kPcE5SVLyCuTvF5nvzHRFjWYQoD1Ztk1Shh6658Mbi4EpJ2nV78r3Qd9qoBoaeDiM9tdsrn3V5SHBvJT",
  "key19": "4S8c4tz3xy64ZUUTgHdH4B3Gscd6M6WbjD73iXp9ok8EBr8bqt1Ae3beuYHfSVpih4bJm5tgmJ5nRQqQ37Mek3hx",
  "key20": "4QrrEbvTfsQpkaX7rMphncPSAdeYNJFwX2LJ3Lz8yGH3N9VCtNy1PXCQUN7Wtrpgktm2fr2A5wRbwjC93mQqrwjg",
  "key21": "Qa8MMAAzTeQ6V1G6HYtTcj5ZfUDq66RiYwXrPi4Ufd5jTXFJBS72d5bazzqyyKxajMEhssFvyknxQGXg31jJN45",
  "key22": "2azFiA3NpVaFg1Cpj38GoKcc78cNBTp7yn4Ud6UUc4MzJYomRodfQ28stpfkeP8unmdVsuwJPsvAv2MGSybn1TxN",
  "key23": "32HBkdJ22isxsEgNbtdnx55akhMtTDswwMZTRjzmCrfo8wsj8khYVsJqyK5fizZuKEpKWmCX18VQquUU5f4xV2Pr",
  "key24": "5GN9dYoGyAhED399hWgGQSnFjT7C29BeiLxnVeBbZYDpj1yFsBhZWyDDMfdxdTCHKE9NUXZ96VtdsLCtrNA7jWsD",
  "key25": "yTyn6rBjr6ZAirwH9nCqMRddrtpnpLYeBg73DtW1PbFNFM2nGMgyJHRjHo6fM1rrXMKMYMJQbH4ZbU9h17pxSdT",
  "key26": "4pfeBMtYBWmhCpq9FbuPqngSH8UDbh7RZFjzCqYPm7fLhZEyzXCpcn7TH1FgfWoJ9e8yJKh3A7Xk8GuotfirSyuR",
  "key27": "5tVbXBpmjekshZjq6TnDkcr7eziqeM4eyP6YGLwNpGcwSa3AVMaMRDmqSDRchP5AgeNHwx9HRzCgYSVuj6KYUjim",
  "key28": "8j23m9ncqQhQGRc4xofYa1Ap89hhBVeh7j9BHBZ3ggJbBpLqVuE8keEQrEQ3sTwBeW2xpUXGdWehuUfYZKTko1J",
  "key29": "2xZbux4UVcuHog2WHAhq3SWWyg8tHJAHhbwLcLsPSfn8K3jt8ZkhnYGHtUyZu2DQngGvGi7Z2GRsESUddZX9pnYa",
  "key30": "9wtfExBoZBaw5VGxkv8fTR8sh76Xa9Wk9hRD6TnAAmKyWzz9Dbo1xXQyqpfCfxq6fJEpo6ngUr6Hu1CtovjPtvN",
  "key31": "521QxFd2v4nh62BMKLjHjNEo6NXa1NwThgGY6GJi1ZtQq4nUz8mkqt4ngE6VnGankkNqPqPYXUvwCG3bD1J676zn",
  "key32": "Xv5aTpDfceHBRab9y78oJFrgRGf2TJAFJ8WLTHcjMAQroNXPSdKSCjQNF8bp51WL9rRQQMzHitPhGECWQ5Xhhu2",
  "key33": "2GuQCGRFwgJ9gpDkiPRX9t2iZvUeR7KzEZ423tgyNQF862s7ofZ34fbzDMdgnRDLmwKovCG32dLGechtv5zdJzSH",
  "key34": "4rdSK23ZB2ZNqwEmdyT6u2SmQfMogy7nnd9a9uc9BV1f2spC25Z8h3Uja6V3sJywP2LyxrggE6Qh3RJdHDzswLzk",
  "key35": "tJVh8AZE4JaDDYm49nV7f8Eekd4sbXUbP5TE1fAZq9HsTjRwfz6wEjmjquKkbzJYpiX1AFWWBuwSkL4WSqYBzhc",
  "key36": "2BKcRQhKttdqbYf7UxWgFedBr6mPddKJhPFmcNFXuutR5pH58vEUzaLgRdvK5YGWiqkNh3kssAUMYuAEqr26r7Yn",
  "key37": "4BMmpNi8wjLbVpAwRFrBsyZ37xSw5nGDXTmT3AmabmnZg8GjJoR4p5EBXj2AHuN2QdqnozDUkJ2p2UNH1tKgjerb",
  "key38": "5EosXYkM2M5GdtB5sW6hHzECHPiUhESSHZXSbzybG7SoQDyXj6ejqBPyCqk91gVWi5sBt2RUmvaZNjdSCwLJmg1r",
  "key39": "27FawafqNw9giEbH7qaw9oVM67oDMg1mq5j3cDa2Zy8JZxizwAAq4vnREczQQxiPrCo8AFc2QwfHpTqtvuwBX5e9",
  "key40": "5KA5wt6gB4i8oeyBo38pvhZkfQfxsrREKZVqU2MoWVuMiQQPkb5zmdca4Nxb2cNXNvx8oDHQ2iq7cutVvKD55uDV",
  "key41": "2PUD7v4PjZJaRcuhx8tRrCyDiQacPn4gH3GKyz8455q2pR3fcuQ1B6ZXQv7Tv3ZNg4VjRU5aBUDiYATYhe4vaCz7",
  "key42": "263Uv7dgE2FdYvchKqMuVuAs2r6As9Zqwh5QAAzYuLj1nCeBkaMBApasbiq59yZPp1dA3ihtGxQ9iYBxFpp6arTg",
  "key43": "4GBZc7SrC7GMivFtyz8mpbC4GQtAFtFWhjF9cVm5wYk7ABpULfwCVEFG3REeSuuF4bHXYP1JXmgaDN4o5CCFyN4g",
  "key44": "2Gs6kkpDfkSg4fVxmhZDQrFXfmm7JqjPEDYFHewkGnFahdNVhSnc2rS33nrfNG2KwnKjUhqBrQLWUiR5is6Vi9UJ",
  "key45": "2CZnp5Q5DB6tfcB37DKgooSh6YTdqmWq3fTtFjJ6EWrh9dXrL83EFqjvH1C7GRanSSCXLxXUiHJ9DBBCTR7EHjQG",
  "key46": "V4a2VDw7Y8EJDNciuyMZsMGx6UpocJHXTmks1AYuE7hS24i2gREfMX7aqoQYQes7JwijnRgCFxP1cta3fLp55vY"
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
