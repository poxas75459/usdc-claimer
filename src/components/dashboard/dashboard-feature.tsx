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
    "zQXSEJUsjXb5NzwR7MZ4Yq8KXMWA1m1mWicHQzwksLUSi7mEZQ7BXQwcdTPz1y2eKd4LyKjhTqG2Lop8sQDCdhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5en34ffDQJaH5mZKPL8HoYcVhrwwHkk8F4dHTBCmd5dGDNYhCDnFe7MvFPmhsdjGXaiyAhJY9D3FNzkf7tFRYVpA",
  "key1": "58ieGZCjY7dSbQFvkNLPtv3qTPhnp5fQEhfB4io7kUCewmRobvBWbsLwRP5g8p1kN1ctPt6vky6sgYn53zNkXva",
  "key2": "cYh5scXH9ftJTA7msDRXuNjS5ZxDvqTLZdJH8nZsWBg8cRDz65MHDZfoTk1NVt6bDZ5DCFUfsykfTSd5AX3n4ZU",
  "key3": "4z7VPL4YqjXgN7JgC6en2mEYbFnkQochurYkYkqTKUgSEswVoEDMUDjTjvB2pyzfYYLAhSvfQL7t8icZpZukbUg8",
  "key4": "5k8ZK3BqfUYFhwFsT85KxqPfCqAJPpwWLJwztJQNGaBdq5bfWN61BZxwj1wc4WiKQinQhqzwWfaSeZoi3mr1HKUE",
  "key5": "2UL7G3AUvZwGwnRydZ6kyc2ck4WtinMJTv4AwhQ5a1qpV8vTgEjFwgdoyRg3HBa18GF9urZJum9VELdC73o6Jxyq",
  "key6": "5utBR2xeEupEv6rQfNWd7FQ9KqKuT4EnSmBUckWof7TdNRgQfckPLFvKnCuaKR98xnsuW8gmiTrfgqwAVD45PvWW",
  "key7": "54t4ovby42GcvU8J6TPnC8WdaamMsaqcx9vMcR9nxn94GPB8sFm1aa2Kd1sybLSasgKQsr4sMG2mskWfxktDxhbV",
  "key8": "2MHSq2XNhLrJu2sC24DqMwy7Ucu4xow65MURYBD2sgnojPxBRsxRr1NWHFZi56623Ys4X5wAdHRLonYBRJKW13nc",
  "key9": "hjhAGbTGyPqhXqsT9PNfJyytd7zz9eqP6LjEgMybZdGtZNKNyeDpWaufK8q6h7GPtA6LkqeMHL7jNCCYjPMwYG3",
  "key10": "62oJMQJHid7SyFnvc7tNA4FP2DcaSt3oVgS8asTVSNXx5B45qPWX5qHdAZrmBNmEtmFWUfde31bnmxAZBj1wKuxH",
  "key11": "26xsPurwcnvNVokgaJ5L1yCajRZfSx5ndg6HENVyofhE1ZdnCw4kvjqUZtxzWXGSGdMAvZzCRfRaA7jqhKTC71Js",
  "key12": "5XdHNZvTh9ZU1UVzBK2E8M3iB1QbToQJe1wPA7iCmzn6xoKKKWCYmZmE6PjWh3pGa13z64CbKJX3UVWvJTkMztK3",
  "key13": "65i7FJLiBjSMMZE1Noypa3v6rgKzbuGbT2Zys4vp8ykYeGxm7avMiVHRRmMFfiyQu7PWUtqeBy9QXM8sEw7uzBFH",
  "key14": "3DLLrSEAkcsDjgfM5WYEvEu8i9XnEXbiN9Ez6AZeXiENNDjz86mV7U4MvQRr66XFez5xUv1rikGn6wRunxzgTohv",
  "key15": "3Jvz3nETk1r6rMezQpj1QZdXjzhvcDMAaJdisk1NS3ABLyvodcXvbpsDaF8X89v2bSuUYWSDFX3tEBbJeRVHJvzn",
  "key16": "3CzNBQFG2KRRc56aTNLhAUbKg1oYeHdSYfymBUbe3Du9ZGusn9qrMuDABzecTgm6g3kRBWmmsjseaJKdqBPF5gCm",
  "key17": "4VCQ5YZnDnnGsi4aufojkQd4RVf4C4pEogwtsp1wtDU3WnWsmExSk415WXKD4S5SndyeA2SaBs3jXjF1L5rHtyhi",
  "key18": "DHwSdPKBwdhCbY7TDfXopHjMqoEDDhMB2DV7oDkejdx1euDrXZn28yTp9HrjBVH6Zjffhaf5a6sFEkp6D8f7eQm",
  "key19": "4th4epoZNNDDh7NEfNSnjC4VQvQz4iNnS312dDgNHq1gFu1pABhZ1gSZuyWqPKfFxXVXPehPoqMc6J1VDhfdeXVY",
  "key20": "3NZP17qF2mXBMvonap2jqLC2fZW5XzNaUT6yf4BsrMBgUjnnB1twdCWzZb5skndC2uLamh5jWafcB146SWiRwAs6",
  "key21": "5b2Kp7HzmwxW6cHuRhAaw6dnNet8rFnXJPDnBEovqeckJVuDGb63au3K2QoGaWVkJG6v5F1cSL7CpZ36L9JDNXpE",
  "key22": "3CmYTP5XhuoGrRnipEwRCFdQZJBNj6uYK7i7Cw4YyneZ9v55uJ4agyGncg5sWLPxjCHxawJDtXNdGP18LWzkHm8B",
  "key23": "3s6vYimNBGUjdgLeZiB38SXAtNwiaYnLEVvnXn7F84up5aRj1MfKjx6BJ4rhnXJErQDJ8dFovQMEe25DiWyGz22C",
  "key24": "2DqovTvBTo4XYHnuRadYZSRRAbW3nWTcgBDUxhKsm3K7BHZJo9WoxhQnGcZiXcDPnZWgHYefAz3BVNbwJXD4b6M3",
  "key25": "4aAmUbM1mUioj4ZaZoYfMBTiYDk34h6XzigwtxBEKYbYf86gaFGCo3TNG1WPtRhtTBquuFcTWvSgse58wJvAzy8b",
  "key26": "45ASHRGJf5AaTwSQHbPY6vNpchczzd7cEnvAbt6RUXp1K6cj8joDSJH4Yt3LZVJwhpDYySDh3FmxgYXCrFDxJwb9",
  "key27": "3mcsYLcrfnrgQBCGbadEAqfdMMHsxwU6aCnZDnZiHQM4XkPc2UFq8Znd1cypWbjE1s316EgFYYS6L1THr2kkndcn",
  "key28": "2DpPJ7Nqoj2zZQs8GCw1rm9NEuW8ngjVctqcfPbtNFLTBPz1mXE3kHnXXSfaW7zmxTy8BHRNFPGddsRG4jJkqdDV",
  "key29": "22nmGpn5AfBS4PMDdh6R9XMYaMWKeR26xtiA1Jgb2raXnTKiCJvhzwfghECbXG77ZCcdG41EJBBWRXneJauXorye",
  "key30": "4iZPQLvXyykLsYpyX273VNz9tKYsHhWNxFjsmoo1jRejhX66kTiXS68SjNfTTVjZMcnHbrBng51pGVQzzaMbJrSJ",
  "key31": "2tiRukmXX8wErewbEN6jD6sKGfPY31E1Eqk26GbxegTuqoRKfq5M5eRMTV4vps5URzR8VPtfQKLgV4hPkwS7cWq6",
  "key32": "xUHUfnorcXKSYz7E8w3yWpnyJCC6XGRLdVZoVsdKzikUrqJB6wR6qFnS5QRrzdqJSCyeFtcgmbGaZSysFzgC9oN"
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
