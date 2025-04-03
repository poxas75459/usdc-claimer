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
    "57PYfcAccPeB9ZRhGHjwBxmAbLbNNT7mrHPwMaAB9xwdb5q1UwdpE8nyYqKbtAuQNvcuCLrHjASwGEm7jntgzEfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oc8PHMRpij5FF5eUgBmFGVED6evUMwQawP75nVCcwPbSgqhRKVFqnNWzFqPtNtJmPWvBvs4NGSeP4tF6nahnRfu",
  "key1": "3qQh738RcrZs5cawjcPdYb15vJjZ7Kr3yEtmc5KCQHgz31td284Ar4qP2uJUmEWLFADWauLXhdadEfiRGKnXEVdZ",
  "key2": "5t3Qq8ZJJr8RW5Kh6KzgAPS7axiZMMCHfZm8pUd4N5T8sBGbLnzTswsfDqvz3vcWYjXWjivGZmGuHvdhbfDiVUDX",
  "key3": "4RtDcBTLi9s2vzvKvZUwQDcNBuYysvh8yW9HuVFoyCgrZzkumiQ8Ssf8Yht1gPYRuuR9XEFZ99MMGrtEGewtXuU7",
  "key4": "mCopa3KJ2L13CZ73LNjf1qY9yVzecG9AKWMV9ouitB1ecJCYDrjeVVbqc5usLMMXkKXytjQx7qh8gtnGovWLg3W",
  "key5": "oYGWsQbWtRCDmYrH7NjoTgxHLiKchJLBk7SK3kerVaHV6pjb4cuKYDtJV2nh3nSxLkdUijeUN7iphkGM3zRLBeX",
  "key6": "5PQVsaXpL9Gjz33NxYJmvXEutuVebd3Cu6NQ1dQAcBgRDw6QxhY4ySXb3cEFvb296cnvjpTadVUwiim8PonoEVad",
  "key7": "4DtAy77wWtn3w4xJF3czZpHjEtx6BgXkjAqCmBuR4exoEtTz99nm1dSjAQCQ4cE5aAfPfgQQUGsrATmsgkpLTWAe",
  "key8": "NyLnfcUNn6mfp4EsF6XDXvLhPHsT4hYyE4KQUdJST3YLjJE5F4R3FnHVLm8KUyr9iQiccXTynyhGLcToPm8BoLT",
  "key9": "599dFhbTFxXLkzM1JE3DWNz1yejphJVF7cmcjMHs9pC53SNMWF44Ew1kvn4sDPMzjdFmEmw45PDgw6S6Be8PeE9q",
  "key10": "4FLegsZso7fHxDZRezq796jQcVoQVnKyD9PxzezXy4wkXDim3G2Pzfb4y9XhuVwtDLumyHomfMjQ1wUaiRjrDwT4",
  "key11": "2ouFL6dL1oqqNtPhhHxoBe5M5ufvHwMweBi99T2KDi8SX5X7H5R1wuJbnvPHBeYqy3JBjtqLTvb473h3oYJv1moc",
  "key12": "5GDvfZRUmrVVcTjFbm7TYryCwfTRNJZQdMc1LVzXL85saZTDUktUetcYRY1tPQAKkLEdrfEvwiFfBgrqYMjyneV",
  "key13": "swFsBzQ3tYHwrWCPyPwPaAbsBySC2hgxySJriq2Kt471Wd3ExktW49h2rAr3WWJnYdoHwNSXSgpP9Lm1pKPfbaH",
  "key14": "3Q48XxWMZPKxsGJdPzbYKudVWqBYiVUQGz7DxwsB9gRf4XDNTy3gmXRcC9rRoSDQrcpSzS6M366WYx9fBkMBaKKD",
  "key15": "3Fs9qeEV67P8DSWZtkCrfbyb7mfKcEHGhFbgDkBn2qCaAjh5q79KCYYSc9M2ZTKhstysq2LqmxZwJA3ZK2S92u8H",
  "key16": "3e7RN6cRmS3fqygt63xeRmSZNv1PU8VpPSN5NjsfNDtFcfbW29qFLhRfH5pJQp1xGF9muiCcYHqYu155M6D1MhCk",
  "key17": "3ixRcdid6ckyUMsYr8x9Hf4GMZWek2Tz11FHA7CDuDs7wBmd8McvueprMTE2SdHzwhPN1iuCvQ8wM1WpckVtGyjb",
  "key18": "5jQMXzo7JTLJ1aQZbag9qWzw2157EmW3eb253ojxqvb2Y8SgyN5dSN6VvptNaa2BS5yV792bgmsojcgFuZxcbF2v",
  "key19": "5uHdg5iXcz18obzM7qGy5g2xuQKjFB46Agy6JwZ7tZ1kQupahGEDPnoQKLxD1GYZ9hBNeTB1AHHpnTg7KQb1dxRN",
  "key20": "5X5ZHwBe5UEkTwoNciyoDUKNz1YdmbYaHxjrCKKqgFSzuiNYFT6FHdZkTw53PydxHCNxorE5EKSZZ6npKtYdDnvn",
  "key21": "2NYG4DWkwmRkiAHCLCGvGSGkJJY3N9fGQRAivJMQ9fAn6pzSHqey7Ls4S5Q5waJZHhX8VThwccs9CKrLTKeYT37z",
  "key22": "643oSjcuBQLiYZ4WD5ZKoGvcnhVGUb6PULrEvNUBfyZ4pM4mavF8ypaUdXtkXswHLNj6fuuum9z8hrGXpJHFuuFB",
  "key23": "471sZnBAzns4dQ3oBC3ptDEn5SpaCDkJwqcF13b6NYeooVFyMvjiqNyrXa6r14dYPS8rXELvMuBdjLHNwshL9LmE",
  "key24": "3mfW27GwcTxh1Sik2VZdUnY4prXynd3S8pAzpyhAd19YcipWudX7KtHMxorgfnaJ1H77HcKT7R1su7NJgK97eYjd",
  "key25": "3LN2857U1SKYyzSXEAbVc4edaFUKUcPKfK2idpvKU1Y4mSWEvqshEknhQY9zez6T2v6HxMTdLGXeMb5EYuKypBCN",
  "key26": "3Nrr1s7SDfRWwfyh2WGutYYUEodQHir17pX7Gr6qsiB39doRY13gLy3b22mramEG3jSwvnCYkAQ1TV4VGgp4iSDW",
  "key27": "5rR6KsZmX1i1km5WHzzDga4W8sCKS9amLkSixkrP11J2JdQwjP9RrjDRbMUGb8xBzCmT3pwsCv5KPYD8zkxHwFT4",
  "key28": "5ij9YfURYMPqpYxdx3DEmRD5VwGyqPGo6SLWQ4qhHhi5c15bFupteaGf39cQf33kon3KYAxNbrW5Utr6dXFkzqm2",
  "key29": "5AMGGLKD8Hi9kECxQkdxMs9ti4fZffm4PGuUXspoHJWC1ihs9Vj8qZqiYnSghjf348Ewjy29Eux46Vw7CcfRdK7P",
  "key30": "wyjPBEbTC6CuGBQDepj7aEZkE33U3ZtvKKvsbpCq5xC1656K6vqneKqi6uUYDX3UYi37pPMWFXdvCnb87xuRc1L"
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
