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
    "23Dr29Yr5zDkgcPFnDyLUo7tDWVQ7474NLCjB7auYXxTTZNYvq7GvNddzeuH5qr4fEEi3PyqL9qRbMFfV2GQ2Eji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2433smmsuzAiVvdC2euXetQ5sshVMnY2FDi34XNPjVnEMcUovkwsusDfrXn6DLnqXMedvGDQjBks75gTmKZeKJsZ",
  "key1": "5bht1tveyfCF31etMrDBYNUnscDswNgckzMLvgXLN2pSCzPFczhEVrR9yEThqCNs6PmGTkK1CQLtwD9ib6ZT77ZY",
  "key2": "5LkBHrYc82UHF6BAwXAUdtKnQhX4iqambh8GWZqN6MwjmybQZTMofs2tMQ1strc537f9gbehUryQY4rTJizokEHK",
  "key3": "BXgfSWLaY3TQHg7sh4TLxmAGh5gjT5NF9DHogpSBZGqjM4xLZYCUMWwxps7p8sr7SJgg7QdJYDKrA23XCGzSRna",
  "key4": "xtbe2gUtKNirmCqWtMibcuhJyX9TcuJAKzhUnojtVaStWuKLFtzU9thRXas8bKnmUZkihdpiAGzRz2EgiC7Gsbf",
  "key5": "3ViA1bujGiypic22fYhdxFBiMKWXF3cpkQXgristzfAmYNSE2w3gBPjE2ALpx9DXsFyDh1jnZDsSFsobRwrLUkYT",
  "key6": "414wkk4KERLJNpEhQ7utoEKCsQZjPUEjXVxK7DXjVCssNSf6xMaHcTV7jp1P47csKsCWMNThi7Fh65DsiM1MoP95",
  "key7": "4fFoZDBDkNgNqiUmRjqu4j5Lh9QkCjbXP7utZkBHr27vjmciTP7VCKkN9akZhZcu72wuSjoRELCtNLgxfmVdFc1L",
  "key8": "5oU9zkkxpZn8MWVQJFb8iEoH2XzEqLr1XgdsEuC2Mh9dsuyLNQR57UWbeBJz3xx51zGdhNu4xLWxwfZjW8ovinJv",
  "key9": "3xAj5fRHmgTmaueinY6Sc141U2v5SjUjmzWuAbcnQusLrebKe2eebv8e6ZcsBmh8PpjGYqU9CiN1mVYn6d3H22Uj",
  "key10": "5RDAeuqmNWYF6utN7p1scWHpF6d26xrhtbYNi1G1tvf4tMEnzLmZ5vqXpSxMNLGYwLReeTp5RkmrAzUfcHf9jSH7",
  "key11": "35bGcczvpMJPZja9wfZW6Rh7r7S4JF8ZKCifjG6YZAegNCmu8y11sHGBLTiBuVgFTEDzbsnYgWauwgHUNGScdKJa",
  "key12": "5iim1fcdWzc8PsTYbtLc5xDnUKbpQ36iVvpVzQSoYbcUjkP9Z6fTJ8VtoVy9UYNHsbcT4Bc7KtEGseFFQAyT67e5",
  "key13": "2jqusr7tAz494B3yqTdruJkLZG5yvCwt1uAjGbDLJosWbZH1uZUJ7RnzPEDbZxT1cdbdTtMpLXeu1oZnsetDm4cY",
  "key14": "4B5JTmfGf8PZQbCbYxNm3VAjowCa8b3b42z4xkdUbYmce3neunfW6E4uwJKHsWE5fyMaJBBwGUnF3XHb4sztj7RP",
  "key15": "2Q7hWLtwpCvcdrkbyqJbVQDU5n5fAVaJ1LJkBd1oBTjfaXodTKekKKSuc8gFp6BMMykRG3XHKWUjTMfSTKt8w4zR",
  "key16": "2kzDYuc3S1Uqzc1tMuMb96GpLdKuwoqg4jNnpmBrmCgLuscnznwp18FZ1jzdByygdS9hJRTWUfXU9x6G28t4wcTZ",
  "key17": "3kscVGUjnqXxErJ7RV4Bo1inshdjXbJaFK9p7h3ekyJ9sngm9sAom5PPUkAaPoNKtr3G9fGqYJCWqhb6MRq3NcFL",
  "key18": "3n9HvYFb6k59Xs7h6qjfrA8WkhFYXpegh5Gdjv2gmJ3x2BfzzGFFc73cZbA76jfst6RWevuHagC6EG7k61wRm4YE",
  "key19": "2v5dZ8TBFHSSsGia3v8LtBiEBrg4V1yVevRqAs8pR7yVgroo2fspHVkpHJiE5RCfLMMPh4kkqty4hwKpL6EWfcqr",
  "key20": "4NV1ajSJbZLHZHcZFocnj1pqQcJZxMT8ZFegR5CgHFpRh1XFHffCE9ZXh818svgxfugL59TVJQy4rL3hbvwmbiRo",
  "key21": "3Jesezu2rguVEtThaFzSB7Qkh9GkxFUn635JbPJS2RGDg26wbtHDia64NZEj6xYhuuBFFEyGnC4sZoZTSuefAHrc",
  "key22": "39aYkGVTvNQjFLmpXZzyexZcFpU7r3HQ4Rrr6vkHyvB8ZU5sBGxnG9Bv2B7TzHgjaGE91vpLbgpDyVfRVeeQoVwA",
  "key23": "4WCPoAPtuU2XDT4AvLHgi3kQvKDCqSLU72ZHeep3La9PV24Eyj3X7V5AL1z8tXR3dndenVJmRHGEmGTfW8ZK5L4S",
  "key24": "3NG1SmMTn5u7sFQPiKdvpqd2pPMFab39TLLXigYWjRN6vWvwzE9twGHNCP6Hr71oYa8GHBbNdfkySETyDWrSCdGN",
  "key25": "6GuifTF5yXYPofvf9bN1ynpcABA4jzwg1ehS7K4EJBb2smYHguxBUhFysM3G1aHepZVqMkGwE1qfJFRVWZjrgvN",
  "key26": "2qnEWsH6zVC7x5nV7GqH1LrCFdBXr6Tk7JWTrYeae3g3DaxA1kPMMshTkiVBQR3zG7CndAqHMMbKdU2A6k5v8EYC",
  "key27": "39iKqjELaYo3dbqb6uaAdyvZ4HqpxsxYnbgAqpgv3QbPDc5oTDPcCuNED7JUJXPVYiMgvoLJuRDi5n6XHxeiK7iR",
  "key28": "G3MtmFPGaygPwKVrc1BgEqpUo4ePRWWVYZiEEYKXRAWsZzdTzq5KFTU9W8qx6diUrSdhBMG7oxXei498pjKrRWH",
  "key29": "3ih9sTcLxvuTbEXSeQn3cKSZsNj5jYV6pbpo2FgQmmgJxVLYhxt4xEFqEgtqKSX16TJjsSs6vtkaf7Xpnku3spTo",
  "key30": "3Jm9ZySTBirzyJDCWDuZxZMUCdQ7DCGaW8ZQn6P3KYzjYT6gv8ofpZzgZefSK6hRXCPqjZZEWpCQnryyXX5XkCNx",
  "key31": "5LaS8NAppeX4cmC8n5L8dd3cjqH6LhsXUwzyLt1wLw1qapz3MUgpqiZWZmzUxuscNU39md1rKyHoim43AnvHgK6U",
  "key32": "57X1ubZMZLe6Wf4RNJoiCira2e3uSFRd91zTKaXg1UBeGzBtMaa4LbpbJsGsbjjBevc4vEgQi235p8iLz2fmW6TK",
  "key33": "5ZwoFtAduakRDEXULraGBt2yZqnFhzUXociY3ALJ3pPuinLACjh7oLE3wzwxq8234S6ViuSGRSyaxNZDHTtFnjj6",
  "key34": "44rGDByGNJing5ZBT7vMwCMnV6SH3PrSZGdsgrQYVrBBvCsyFriMgwZ3Do12i1W4GkEmTShNJX5sNR3We8jccDVf",
  "key35": "b1MF99Di8Z5jkjT415UbxiXJVdbrW8oLfkf27XhRHgg3fJTrsNbuCTUYFhR1ZXPt6fdmNMmS3EZWX6z1wLUNERT",
  "key36": "4Ju8EHGA5dJhFdi54EALXnTz4yaPHumQvCofZoxEbf68zKV7pPEkwduRRF8rUreLGbDxCjwPffBA2H9dsEPgCAfr",
  "key37": "5xYiyq4ePcfWs7xEii56wzb1tm3VaYpWxiVTVrXuPYrLUx2mEZHawh6jU934NmXFbnZrRkNTXQbVqQc1N3QhoaYn",
  "key38": "2riSdqJL6vtXUMDuYfw25ryxyuR1A4WbHbsA3aT3WtLdB9b2yXP9piWWpkk29Ay1kD2tXcfYAEHNRzh918pmhryM",
  "key39": "36iH8ftSZqpwMBVosngmrnDqZUKkxMpF5ff5GuDFiRs2UDMWE1VyPYyhufrpzNugtfp1NXijv1TfH2Es3oDz11Yr",
  "key40": "5Ffam3Mizf4xCLj6vWRGuhRBYgNJRwdLNd6TrKuvYuNVveyTWcjQRCoMGhwbpBzX4uPPo8dhCjEkZXeccsjbwn77"
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
