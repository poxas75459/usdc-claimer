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
    "iiq5K1VRhiSihiaehfugmSfChgEb83FomBi16HEknRnsBjPschs6KjyKDJacNfyQ2S1Ene22jbs8cLcx8dntSRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2csA8nMUqFArQS6WbTWasAkNbVkiPM55yrHjgRAivGCtFk8hjJ7MdvzHSAF7sHuhtzGVxVXjNUTpWm85Tb2hvP41",
  "key1": "5K6xJ9faGvK8uKuW7BGu34A7a95sETR6mADTje1PFMKzLq9Cpqacvg6wn5T9h2yGeDVz22V1UyCGaKLt5tkKya8r",
  "key2": "5q3Vt1MH31f3X2ZGcZLyS51GChEupugoT8WaBNst7Qj3ijBVLYStjEJ65WD6ceXddzWQwMXFLkWmjzqu7UyZpCSp",
  "key3": "5Z7ioWtzxbHMMUVthJEHKUDfprRjpzKCbbASjwGZNKLFyiKXfR8kpZsXbbTa1yHxGNXU42UQ2iW8HZDB8SMnBtfK",
  "key4": "4WmiLGEUADTgpLA7FtBBNqEn2ShqpaJCJmYSz2fGcKWcanGK9onFV1Vk424uN6sEzoSLJ6QXTxRCHbXWA8sgLzTz",
  "key5": "66DixaJ5j1db9W1F1gmHffyiRda9gorLH8o6DZ1qwjibT2Gv8NFPNpEmpSQZx68r5mZ8guWGA6su38skn9ZRY2Qy",
  "key6": "2M43mXmxnpX3FrWwNA2Nzs2znDN3QG5DUpsPpx2mF9UyDwfFoSH5y63hWAHwpcYowRezAUCi654k8nPDAJBJF37L",
  "key7": "cZnwQXrdiymL37vG3YkW1eMSFpX4CnCD1yw6Tx9jnsy5uHpxh7PWmP7K9SRciXSUekm2i6PL9Ce2LcUxBaPGMMr",
  "key8": "AZ7vDZAoZKxFbCoa92tg4f8p2G6os6cuCd85DGYetJ7KmnCzNzK64U5JWuMfhHd13MkMHb2r8TSo4Sn53ByAQHk",
  "key9": "4x8KZMEnGKYmSBC7rSmAMYcRFy7vBCktV1D1HcLp7nEV7iQcsgU3S1p4s7HYL4Az7Ya1qP7DiA3Rma1Zcaxo1Sr9",
  "key10": "4pghMaE99Nyp21K3FCjNKMzrRpBWDJhVhUm2h1gLwtcf1gTd7L9VWUoPtRKgXTpb4HfeRobpN5iaWu8Kmc8wvRGX",
  "key11": "5b6jpnkagPfrxcyua9meTsoJoy2SFQCioKfbvaCV4awnpxMoFrEktGf6TjQzSJKGHBRjHG5UhVbxNz3YWsfGs7aq",
  "key12": "5MLkQUy95TKUZRn4pcoyGmnQLTmLWnuir8V7xUWMEibqVrvWdufYcbUA7Q5giiRLr1QMnsz7wTDxrtDjrWhEZkLG",
  "key13": "5z5kZD5ZpxbbhuJ32EArSWG4FTmPYiB7dtkF2zh9VQX45xFnFi5Vx235SMeEtGrQHLJaRQB6rCSTosS39ZbcBcEG",
  "key14": "JrUwzWL4qrFKmmhTSSf1HcKYBbzMKgTTS9f74aeHRa1TyyktdfZvDtzGAYekj1tT9HCPtWnordTZhSLHXiG8cjX",
  "key15": "4t3M7vznVWR7sTc2UK6ndq5rk3kfdgWL1BUrCUWqc3opFjTB9bHBbLuk9w9SNsrUoeemxAjdTygDPNdKWbyPiN53",
  "key16": "5RmQgUfv8FyhnDHtRrJvXKvYKakBAHBt2cnVVnmdZKnrDss2vjgqsHyyRC4FXZfUBfa2VBJr7Fi62YYZDVcBqnDi",
  "key17": "52G1UXK1Lb7qUGcwRMTw1ipuUiQuvrYCALFWrxDxa4861dtw9gunFvfPgrf61w225AixT8cRE5y6CNE6Qa2kTdLj",
  "key18": "5sNNpgj9BeJLWcJUhedxo2sWVY6p3bbw8GE2LNztpt486CXNgEbcoQepNfm97S7fywiehbAfRSQNcJUQoGiWZMrv",
  "key19": "64Qp7UTUqoEJWum2DEzZCinQHcDwrudc8wPypBQibt7iC6vsYfSNpjRThp7QyUn1geDv9bzgqLjJZvZYHdEUy7Ni",
  "key20": "3SBT7ohMnbnj2pBSSTPHPzh43agjeiUH8khgrM94EGqMf4WjLLMfbeMM573YJDMYi4W5fjkST9AoDN7QWTXf6pak",
  "key21": "3ABef92GAisEPr3UirFxXY7h2iemG5pNfZafPFr1YsiAPR8QneFLp7yRZecAQ6ysqtZ213XcwkdUJv3n31jdP7Dv",
  "key22": "9fxTgL1gpQ3AxggcNj2tnvC78TonnaDxYLzJiyjvwYiTkXewDXk138pVX9MzkJxgEqDmzDFGUNbgz7ZLARDs42q",
  "key23": "zFhzosFEg93S9yG2uErVkHLWuE4Q3HwtLixecRWe57kHWxofTSXzLAD4u4sWX1kCKJkBgFqvWfiewMmPRzr8sjF",
  "key24": "4KppCNzn6VEcV5YwkNfP3U2op8FBk6C9tqX5mSyLLYgKL3X72h87TzGfiwuTAAQjQezVUL7gYEaLi1mx7KLCMkrk",
  "key25": "4kJ425V3ZMErx6RBjosi6moJ2NEbuVEk9DtHFgNBbyAwhEFrhTkoUZB7tEdQ8rQ66bsbqoQW9dDYeXMLYU1RQ7hD",
  "key26": "2cBTk2z92gKUDy71KRtBenfXUyq8x9r6QowN3WKZjpuKkEP8M1h51bnowiZA26LzNypCcUasbDRK6jH7BitN8XYR",
  "key27": "33oz5HmMmNxsQ2NfBRbMRBhappC2Dh3wpPzkmWZkctjJvZx1wMYj4ZAnZp7LbhbHQF684L9bh7nEsarxVmY4T5KQ",
  "key28": "DgFNgHcjJA7XX4UTrMdt4pb9fdLPqNpKNaBFWpqh4aWX1i4eqamDM3E5PwDsn9ZGZw8DMU2bvsBDvVmjJxxfDPZ",
  "key29": "4XVWAH96ajYQSm31SRGpuffNUT49GaHszkcwNgVeBYPsKbpgjv8jK8P3L5Y4EDwDEpNqzRv6xPdkr5Jkkp5nQtJ3",
  "key30": "4ZMjmvVDjhnBDy5pPFwKSCt4dauGL3nDcGbPrPTknjBG2veaek8vYmAtFsSptfbAHWggXLRDyAdAZoAqhcx71ahT",
  "key31": "YuejPy3oZGDXWA8H4kTiJkfJBaHC3zD31EJ8fEDX1zMHjaTDmG98e1FGitzrMjFdwDkyhYKk4wz5WBJYbZcabxn"
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
