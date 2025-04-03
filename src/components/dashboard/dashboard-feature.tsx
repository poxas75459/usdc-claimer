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
    "27nK9B1X41ajcZdLwUaTh46HrZsh27VAXAUuFwKXimoDw29foG39R62gduHtE6P6u6nTPFyfk47m1RodWqRv7vrr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vp6fhFgzL5TtzRoVNQfB1ketJQC1TtZudk1n8H9kGXxJLLtJi7VR9BrRYUrBWxpByuU4QTV6Htbtwzjhc8JVMKt",
  "key1": "64aSv7cSLhNTuEfzjG6iStu6qFok3eK887TdkqTMGNU4mtZ7EHhz243huzujVmWLTHP5xkxaLkFhMxfTRbZQpk5z",
  "key2": "47WgN3tcHck3UnUJas7D6cSpJr5LcqyDXKdbvaiXrqxRXCo5PkVCKVZrKUTmZvHt1RHa6sZREEQ8iwwLSZTjGSTc",
  "key3": "2c1sSzFMb5UeHcv33xHWPsYQk9r1fugT61cjPNvUZic7Ce8spb9eb3oM6KbpEqgTSyX61J4eeHLdSh6q3FysuD9j",
  "key4": "3fDx5tCTBUJgVZMqRqNewqSBh34g7YeegSEXs9VbmTuhn8G65Bu9iHCSKCyZ42VekLJ3XuKdTiqoZ8kR5nB2s6gB",
  "key5": "4eqiAQcPZgib4ZC1f8NXKfo8xBUoKydqifrFXRtuSZMqSHu1sUZXZUk5VPuv73ESwo6YuFKZTnhMXQR75t36XGK4",
  "key6": "4oKYPHTdRbcwYmceRAFrLy7JDxLURykes8rxLMaKxaxgcBARAwrtufft3Mu268Mqme2UG7xtvyhqmdebeAx3B6K1",
  "key7": "4upn23u1Yxkuw3YjQRdoh36FzVRwVZRP8bcTp6rbm2eqk2xmyVvJDNi6iJGCNu3C3G6jxm5xRrH8VHQkFtNFct9g",
  "key8": "2CnV6hjHo2Xb7cFgHffWLdsoo8sS6VwtrBC7wcGxxY3vEwCpmurQaexfRhG1gwCvtHnH44swX7bZSnCPChRDyq7y",
  "key9": "67qbLMCvkgiFgvrcazguKzf6fbNzvXJwVy5FjpP5yfcN5eEUta37u7wm8GjvoA56724pTJjE13yjFAwvjK1DXyGB",
  "key10": "KVrhYSbAbw6PmALCrtz9y3wRo9N5NvbtgeJcD2VybKKjC83vzevfM5zX83uC2w17apA5BbRXLzFFfXmJBavtZXB",
  "key11": "576smpZiNyZPbF88JoufJ2qjJ1D8fWYppdShsPARBD31ntogrJ95B3rrSojJqnonxjo4WwKt571Z3pA8gEUJQEdE",
  "key12": "7WkM9wxLrKav9CRUL5B6esXupYByfEkmiEZTZKA9R7gnieM2KdqAekG2vV53CJFfWALuLeEyswCYzJVFWaReLjr",
  "key13": "4kdnrN4AaESoRS3C1jrnYzSxfNVVdSt7wYr1SUtBNPRJ1cr975jDd6aKy8uuQejz9QMeq7Avg7W3pavvdR4YFp5Z",
  "key14": "4xEY8fGd37UvzT3hyUzqA1ExmuxfoR7DcJ5ucNCfKUWMzfBREVsNtqzDXcdxUx7LoWonT489KDfoQX79fBnrMSJn",
  "key15": "3TJydhq99r77ZNawUPtiSzwc3VHTNodx8LXAeF3jwrfHcuRizvSQAxYwiKsK6dzsxasrZP3KqoHEM3axhy3WsPyJ",
  "key16": "5RNBZnrxREZGgPYYeBrmr6BTrhwNXbAGAi7fxezdsZRUG6Tee99gaHf1sB83v2qB3PegvR9nXrKRM3gb8twcDQ87",
  "key17": "2hB87dtXZGHy18aEjRzXHm4Tt89wvYEXwpUVpupdrNrgsUvrsjuwFsHeL3jGFEk37zr38L56tmnNpd2yP3nkGnM",
  "key18": "5j67wm3Ygzwzv3a7YuhfhD7pgoGLgyhKrNjfVDGCThgaH79e2hXjYo4UJugkRETtQnYW4WTwTDcJUKZuQVJGuaQF",
  "key19": "3ce5979JdrM7zM7SjEpAeLFaNa9rB8fVRMDFpoaEdrx141GCySbPuPF6RovkwnimQSPh8xmk7VsUM2V28KYK1Sc8",
  "key20": "5WD3VLk6rWNUdB56H7vmt95NNABN4Wt92AV6LRQP8xEjfLsCG9EBGwp1XJ5Y6teJzDiG6thWyan7MWZDWsUnup4t",
  "key21": "4nRdsh3A2zvCWhFsyoCAWpJSXtiqftEDyiPEBSNS5H2RCN8yyoE1BR6CTjJ7Xvs6cdxBghgN56qPzFAj3CZHUSc5",
  "key22": "2tMmbqwDHBwxyjpq9PFkkhds7A6nSSn29nnjJr81V6nrm6PoWpDAk8w3Ss8WETRDj66q3vzT6xJxNqTeca3JCdHb",
  "key23": "5AYSYBqxB9A4KStuBtbSe1dkR3a2675bVRTua5hJYdYsVmCSdaPA6cSc2GFf97PqWeFZfLWrRQptTwEvhmVtAa2A",
  "key24": "5g79XDfNxUgKQ3SfR4wGvjUui2KhLMcdDHbzNHdoVg7KFrGf3v4Lwj7Yq5eCLGe46o4G69N27gGBGkM5t91UWiQM",
  "key25": "4cx7x5BxxfLFcSNiVx2n3T8aDvWCR538WqqpU1kbuFwFL4gWNCQr1c5221rWNB7CFfWbTuWfryygVu77nhCG5Atn",
  "key26": "4c6hLhwTR9YPg7NpTBu8Y4f46exUaZG8L7b4xGHju79f9qFTyRw5hMJZDZdU9FzurFqWgvhumpErvTeaJZiEGB5c",
  "key27": "2gfH5KJWkeH3uBCeqbALMgR5qLWHgh1sxPZKPyw6KCazDhRhYm7Lgee3waY5QuuDxbyR3EGeve6pQ7LdEeegCpRP",
  "key28": "4WaNFx617EYyQrMnxgtXafpby3UDfMj2X7YkyCQK91LRMp5hWgFT7uAhxf2X3EkLGa8zBrudd6itjf2yeqKf4ycr",
  "key29": "q93s31MH4NrcCZuiEuag2fNRaYhsskpGTmYfuRgHa5e3Zg4o4VaidzqE3UY5Fqbni2vRa975yhgK8EmtNBMyhu7",
  "key30": "vLEJpDaAxPV7ejTMMyxhdogBwRAvdrvNHFzZC7DWVxwoVABcxejLDPX3uoeNDPAGPiiTtmmYd6g5vxBFALUVZRo",
  "key31": "3gKTD3R4CNbw7HjJp2m4gvMFm82xWqPk6BZEbWq5sH1Sgy4FCGBYgvyznXE6xubxZwHKoJQxMoBWVhru2gaJdjcm",
  "key32": "2riVaFfpjN2FdJ8BEGBpMP8M9uD5yehDdkXQqw2CKh4M4QSNYUSGotVvQAMvTZb9WQoK1pkGqpQsUGc6aRMjTdHm",
  "key33": "5e86d4vaKhTFsCZC9etJQUQjiLPaa4F7jM4owXPZD2a9xN3aqRNWKcoMyG3HCswupvgdt8UNgC4osEWSDa2T8vDm",
  "key34": "2Coosnq41MakfiEqZ6BAozLP29Cb6RCx16HUHP9b9nWnStqVXFhb36f3NpQLknzKpoAudyEqL1sY4wcRhurnBB7y",
  "key35": "49XoitQSGxGswj7rSLHKSwP2APQxDxVt7xeggfTQ5go7FSUZQMfv7yJdkiKRzsRXoa1vA7tN2kHeMbeiyiL4LcBL",
  "key36": "4zUSnmQVoGReemdp1mLBnVG7Fxju5dVET4DUdWFcu3ahAGgVdRZst6NYdpTh1wbaP7txQLcDEtddV2S1ywaUEUup",
  "key37": "4rvx54QGAp99639bSi5s6WCUi3wHPeU5Q4adahZLSieEX9PhWsNV9LgBG6wRjKqmQLVZqfCeNqEa83VqSx3eBEtk",
  "key38": "3FiMY7cNht1PQN5BHQA9975Ascnrqu4CtynQiEx3gSoMbGkVFxqJpEKAzsg51Y9uxHm9sZAwLiwLMgLxSsC4V3A4",
  "key39": "66J6tCMewzgWr415kzEes68Tx8jifgjdwTnusN4MEkxSzJe2vgrsXxLUiBMMY7r6trJ9EernMFpUfQz6K3ihhNYx",
  "key40": "3AmRNmv88YnJexXUcis51Y4zAzA9d58kd85EKYa3PW6PEkRdJtv9c43J8QqmZgpTqo1DkgJveyJz6n61AFy5NPVK",
  "key41": "3zYZLXqj7BNnxftRFPNDDuvSgnunAb9HpjPAQXJQCTdpRJ4uGn8Ldg78joDiGub17hckzuGS6H9xBeP5GcuLNsps",
  "key42": "fZsYRNqmgprWj4BWdEYTxJLnbQYKmLzHJ8VKmUVrPQnGDEaszeEGnZZx1kbruyVFH7vtFxgGweDMGxL3PmfNkWn",
  "key43": "3iWgkE5RtncNJybJiKmYwUQbh6vjha36mWoAeQmz6oZmQRfXD3DsKo5oakSik8mZJFDhE25T3DCJkLtjdmtDWzSr",
  "key44": "4mnLnXGu1fs4LJUkGYyzhZ92BurpDrkruQnBNuiSoA4WB7u2tkFtSKERfV5d5qyEzWCPJoBuVZn3c4EWGaxToXN2",
  "key45": "EcYv59Ev4tZk3ob8jCWcCu2WdJJBV1rNePRFAymmsdzep7FHRjqJKyQHJXSmgyTS2CAzR76SwMAKCRhszjYVR3g"
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
