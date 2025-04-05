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
    "5AftB7PJrpGZvmKno9mParjmimK8YQcMG6FNtNUsxQjXd1gSo3S5iTscLzSRnXmm9DczaPhD8jFZ9on71s3uCU6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cdujfa1qECxc2rpCY5ik4xNsMR888khfQn4cA3U7F1SmhE4Ppfx2yMbDezBJ1FsTbyvqP8o1dafj5k6nrFXDwdK",
  "key1": "2jfsh34apdEJNMvozDd3W2Xx6KT3gmzpZRe5mbpaVCG3zHKoTAvivLCYDuAPUwgoSK24qGnPwsrwZGJSip9uiVD3",
  "key2": "3NUjy6tV9LkknHrP9MqTAJmSEuBz5mHVUahtc75nZvk7mKJDnfEcFWB9C3Z7nJZ2XcFCmy2nALKT25KKUpoFnW7f",
  "key3": "4uPx8MYSucws494vbwSbENNXjVHPiaF9ayfKzDp7BaM7BDdBLRqZD6ZrCquc7VSxJbTB8emhgUe2cYPS3RAqmRHZ",
  "key4": "4bovv44qjVqjDTkbfH6mPK7y7kXigQPgxe13kA66tNZzJ8NFEHtvsc9P2fteBBD1iZBCwdLD12ERSYbBhnXkhZWq",
  "key5": "Br6KgnTnswoTKanuk6Y3z4M1xcyyWGBAFgT7BQA9Dihs5XkcuUU9bedUPJv9nXN2SpSUK7DMQKTwDu6EFoYZf51",
  "key6": "2TkddBTpw1X6r2bgMkKximuVngFK4nwUAY7Sq3W7ErPmUri4n75yoLmMaRSv4chm3Np2hSAEQJ65zTyeCWTgCBbg",
  "key7": "45AY7uzWzePS98A2weJz3jy3VZUsgDaq3PUHu6X31UBrXKmH4juiguGuPoS5Vbby5tEQsWWWEFyAL3Ud5oEJNNdi",
  "key8": "38FbQsyc1v7E4UH2KRZtDJhkE4CP27PWDRnDyWC9fGeEL7jkRLhnFRy7A2wA1x6pcspNn3TgM1vVGL3R5mprrArh",
  "key9": "597sXk4pKpAGrWE8vaTNi9ymbUdPpiAv9VKZeyZ5tzuUn5YLKNrCnwUKuH1Y9NKivGNqcuDbEEriEh4yjpXHC5HW",
  "key10": "4AezWi7trtMX7cyAnXcVAZP5pLC9XX7AdoojppBUX1umAmzDhWYqFHFC9jNzocP8eT8iNSUmaSGT6gAAEtK9HNoc",
  "key11": "4uN3PAfcLdrWU1k3i1pbtusbByixmtr2e9GhZ4NxfZBCQd7DZM55GCNttoCUw3CC2bZcx13nVWXwfBaYqGWibrjo",
  "key12": "5cmSY9tbAEgpv22Lz9M6pzgQfWoN51WD3hMvP7wFvxt5k9pbHWrb7C15N335ZpLUz4W3QNW3Uzqt3yRe27913bEz",
  "key13": "2GAzg5ETc6v32KXtXLj9qY7N32ZW7YDGUVpWuXa8JfTCra1KKy9nB6TXvxmv8iRmQJ2HKQ8L92snT99evbD682Zf",
  "key14": "5cVoSJmC5ei8FTJpZHKRdMdMpYgKntK6oJ5JbuVtg6wpsG7tQ7vnL12mpFdMhDzdK6i4n37gWMMdKXeFtJccNGMp",
  "key15": "5pVQhFaVzTjRsHVU1ZS5UpTvkWSK3DPhncA6zffYiUF5cUWAw7FGGx4aMJcUEfTk3T54cGm58D9Bt1f8G1rtLYMQ",
  "key16": "2LjDy4Dca3HRyRi9zHGha9nShs4jpvNazCbJrB7SKhvuq2X3v5AXeq8eL298aMwJj34QEhaZWwMSekf2e8cHRKAC",
  "key17": "5EbtFoAqSNp4XzwQrDUGQKDSWuentS15aikXGuUmttGNNaUhuQGpCwMMY2qYDE8WWSCbp2UJ21FrdyhUE3Kdic1m",
  "key18": "5edGt67rpzP2Gd8Dp8pzhXF9fAHzAnc2nJj8mQtP5wpWBnnDmiWTcyRLWKGwYQogpwbZjHPtx4Pj37qYVCAojkRc",
  "key19": "2aC8ucvZFRpb3ybmyooBLnEWRwq8CX8XQT8fYqQ3ZYmhgn2sTcuXoYJvSL77zfAyB2xegQjpVmyh51pSbB3JjHVK",
  "key20": "5yr9kUXbCfn4gfcDTuzM3BiT5ikjycPYPSYadg6M72yHgH5JYPnkvkzADiMkLZp9odqs2LrLGRhqQqW54j9eSLJQ",
  "key21": "47FD4ciTmevoeW9454NMpZZ3fG84mChy3WtB3C1Av2uPxTZQEUEFUP6Uwj6s13D51mU7rjHJCcr7GPsPfSvD4tac",
  "key22": "25bxfVRsKCAJkuK3C6VESjvC56UaZSLg56ZCSjTFcgqM8D4hke7qakJSahAJnZsha2eyaaPrHtcoz51eFdvUcKYi",
  "key23": "3E48oQfeMja4HSwL1wr28WGhZz4d1XTDntP8Yvm7KmM6REi9EbKcQwajj444pfWuDfWkug1MppNEC5oa9ZrXqqKM",
  "key24": "3puGee7Xw372i59MDy6NvqQ355Gmc1wyUQoFTNTKi39HsuWaBpYRwhyEnQMrw1ux34pgUhQTFLVDyVm7dXcwMgLC",
  "key25": "55QTCmRsTytVWu1mfRax1BuxoF8pG3JU8SmS2Z7wWpCRS7LXdbZkNQ2dKXPL5AL91KryVAaGsj74UV5qTyU24TMd",
  "key26": "4pDNdmMGt9Ws53gZuMdrgHKMABpXpEV29efYsoUUuDakAVtZyHs63TjCLFgMz3QdsXPSD69g2vMSd2ypxyTGXaTQ",
  "key27": "5yQXYUViduuJfi1QLgVgD5r4VUxL9PwaL4VfQUkEMbNSTRjnfk5FB4YacuinB7JeWHy9hBYfWNxX6b6kGim2F2Td",
  "key28": "2yQAUDZoNyrxBvyojxRnaZ5F32sAygo3Pwjk6K8NUDKPC6gBMpTdVWzFQ8Gv1XcRSjGfQ1gAys94GiHeZqw75gW9"
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
