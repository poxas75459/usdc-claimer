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
    "3d5JyuGLPwieYUGiaPzUCtfv2HWSnRu8sFtZk35qvCj1gobk9KzL95cePHRfxTmnVHkr4nQTmzDFznAGwazWcZz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58MbFwkXhomCn8kyaxL2SoRDNQhMeBX4wtSF2Z8fa6KaTZUEf5QCGjpaZ3mnRkSLPtq8nXQAy3zZWPT4gZFFVZMM",
  "key1": "5z3bGKPgsZsVRMCD35qfAQy9F6UCxmpvKzT37HPBVjGw2zy2cFMkAorN1ouf5G4cyWp8YeJP9ecBHNGqiXtkd84u",
  "key2": "5ebPyooCxGVtF1sPd9BBjvNPUFA1kc44tApzmR9EXiQeyTftJZbH5Jy2xyfuVd5gPRNHhbfE5YNjC2r5BH8HFjYx",
  "key3": "5W4T6jJpsymoUeEFREdFRejqKBpmtUvRyPW7vqs39Qthq61rpphbY3eYTTrX4Z3FmA7kVJoARvNwiQcMX5uz6Uad",
  "key4": "5q9iQDWzdquBf4ewwdFkjHRHnCnJFUYDUmDpQDgLVaripHMYvCbgwFagmfyJM1YaQib9uDptBicxiwwPcmq1JHYD",
  "key5": "2hjXtCRFdH1UFyzMSaCskLffWuxeinQDQKiDifDPtMez9qR4neoX2yweqS8YPHAv2RE1zsNB5dSRWD1dSsVCTtsj",
  "key6": "3AgHp7fgpDUMcy6f58NoGqWSpS8p4cCoFP572ABw27UbX6No2FMvAPavHTdMa53yJ8gJVkFVr4y36FJ9TFsmn5Zr",
  "key7": "5fSP7x6qD5hj78cRyVDSxDcPgadt6tKATCNNUebB8qoY1jNFhSPoeJAjd9gcqx3QTEUD1Cr36jr9U7QxHFPWQPP1",
  "key8": "5iVu4m7nCpuqP5oS6UJ9NPz4oQPJpZRx4L5CkvdvXSJr2otYMmegQ16x5FdtTeKncxXjeysgzMQJAqjjQSP1tPKL",
  "key9": "3RHWsytaJcoCN12kdGwkvDE3DVjgZz2ecVjC4H4RytwoDrB6oroaoCq5NLi9FFsFRSREevBymeymFj5rFiMjZgBS",
  "key10": "5L568AqdyHDWCLADkG5SaUs5kSiz1VhHScg7Fzr44ymwuTaNXp2yeXcusCpzCH27Y6ExP8EounYtEzFZ6ubqb1uF",
  "key11": "2Ux119eXmxfpyHM6NjFYsX1pVpmqDh1tJiZrK4nTFQUrquCptC6Ltpdd3mnWzAqWKK8VBB2MKGyR1PtSp7YXjua6",
  "key12": "5Yt5JA3YKyznKANJpBLV2qdxEVxiVGUwQURsL14vNrKHoJ7K8pbRETGtkwbxrEFvNgA4B9kDWGZXwwFYB6NiN3kq",
  "key13": "VqEkBWCuQH4cnJJNendRVhtyuf8m5L9caabd66yoJFHaUMyf2kPb192nsF2Lrf8y7sDscYMyxrFyQNsTHxVdU9w",
  "key14": "4ZT1YJe6d7hcxWf7y8cAAWzPSLip42x3dHZjtWcaAXMhpBdRbV4cJaFCGJZkjGV82SixetCYeeJRfdr5SrSfRusC",
  "key15": "2fDDYwYgY8AFkxC5dvFPDiB6x8vAkHbLRbf29KW3TJkAD8buC7u2hkjhPAToXPkjBEKfoHAS1TxbL1w1DQESQpLY",
  "key16": "5KrzZK26g4xv17aWAg4U8oLRKVZxgRJN9HzrYq729oGVtQmXaszDo5U2zDefvf4CKkVxYDbrWBHSUAWgdQMskDd",
  "key17": "5C5gk8KY2AjM7ZFDv73HMNJL8KzkQou79pKz3QWp6MUKRZEBGLUxuReKKHhnZUzFmc9JReuAg6nMbPRW8KGC11iJ",
  "key18": "5K8UupJhvSbuMUsE7qbc3GQUuuxB3fwvDgSGTYD39nzPseCbaGYUBoJpnfEukyHzGE7PVEUvoxv3gto27HE2NPwU",
  "key19": "2SsU92U4u3kzvMo7nMhSJpCkMSV4MmQYhMfNpmLPxqM1kEcjoaaJbZ4MHdvra5NUFFGkp6KxVYhP8py1eBFRWvh2",
  "key20": "3adBfN46gFTyzkWxybYHFjhq9oASBuh5qk8aEZDRefH6uoSPxcz89X12AJGd1UYNy7bCebRS5x8wxdkHo1XtgUAr",
  "key21": "H3uQAEvmPxjFbR8qKeNwT1fFzjFkzq6q5vWBdsH3jNtZfCSqPiXtqBdJ7ubx5XgECGfTNK4MAfBrqHj42r2Ufag",
  "key22": "5sEkN2HDXxe13y1MAFtA1sjZoqBUX9iWy4DCpFvuWSv31er7GSWKkWfc6dinDZpnQZf8StmuGGEJ5AyEh2kxDctC",
  "key23": "3pRXLYdAWqmDD7vWianj98wo4subiLn4PdKzCHQ748VRv4rEJttrCTWLYzquVcjxqLH8Pro7GXTczAqT6RjzkEZG",
  "key24": "2keRv42zppfLLxCzoy5xmXYPsZDs231cvgLuWHpbFTQ4WinvzyEP7ZRfKsvYQmbPuYmuH5isZSRQtYB74rc3QJwb",
  "key25": "5WazhekhdW9UqogHFFybvGseQJcnydqCGnd9JB7xxNSKHHu9WRrpkfTakLxvL3PcQQogpf9A2S9w679jr3oLSUd3",
  "key26": "4BvKpGJtXuAeCwwGww5YNDt6WATwYKHMaTXsqeDJU8AmPZfcUJBi8u1h7wTKWwf97do9FPtp2zxakp5KJQ9fbJEy",
  "key27": "52vt4zEHW8wxarWZFbBFMxAJ212yfXWKq5fcwSw3H5o9BUHEdL6Y1mDAAkzbDw45hhMa2odd7nPoR4TCLWe3uxEg",
  "key28": "2nSC4ou315wCemH1thkaHefryptk6kdbYZ3J3T2N4tRnCakbUwZe5RNuWympZ2nUx7fAre1St1bogvCknsHnGNkf",
  "key29": "5nb4LXQHv4reVKNaDenxwg9QUwQg8gGJATwGxa4zRFnjJX1H8Th4mXNm3S148fwyuVbbTdjmHmkwda34TeuzNHb2",
  "key30": "2ZVfo368Y1MZqCyxX2SoPaMqVsGnC4vQPKPqraZPVCDzmdfDhmdSzpGZWzXv7tqgxDDodWrooAvpkmfvhcx3sm49",
  "key31": "2dBxGU1uaKzVKaN6rKeRUSuMys9SdSeYZ43Xz5KZsFCc7g6fjY7ReQrNcFzvZ1zDkwEa36jD3eJCwpznG7X9WBh7",
  "key32": "5Fc8jUySPuCBdw4XhvkeHPnhWaBsaWmK2RTEVkZnCvKWV4bz5d2B6faLTMfDGe26GCPz8ihdp5dtLGBE1bDCHuPT",
  "key33": "ByzBSoKn6948yYfwH5Yr9XFhTEJFVdgcGYyyrMsemqFKDYsMhqQ6XZ2BkQo1q39XMKUUAcKzL3Pjx5vTLpWP7G4"
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
