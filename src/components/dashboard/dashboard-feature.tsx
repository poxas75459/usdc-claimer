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
    "mP1bn14PBMUWCTiZLUW4M3cy118KyxYYid1fbEBqGWFxVmCG1YtV6FJtjSMMcdy6BUP4hTW5ViVPLC31JfTRQBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R5DHthEUqzmiRdg8BtMveRhGsZqpQtKx2XZfEAMTRWcGmPcGHXb4JjqUnyjmLqxzNUDAZjEpEDGoZ2Daygf6xG7",
  "key1": "ZBLoqZ2dKP7MTVc7H9yH1DXmmsPyhFhJFbZ7xmQzxDFWeXaTXfu5kJVV2rarAYwFYwPb1bnNr8cyNrG7mDhPo29",
  "key2": "47U8ptgCePAA7RVZapoFbsTvBqYDCPHewbrZxCjYmZw5z1rRzVNM4xqqpdqFSu6SzmdC6Y6dqNjSyuNTubcqUHEk",
  "key3": "5psiZC7perro1zh57JgFRRNY19BL2MYx77iirUGEeMjTYzNc45JcLaDeGzKVVdHW4kNSu78L3uL2YHqUJsbsJmyx",
  "key4": "2427aUHywYzhY1K2QMas1BJo1t79oWxWW8kuZG6aM2nfZSUdt587mumkN5cJXkC9BiUnFpyaeo36DXwKm5oq4Tm4",
  "key5": "3DnYSagpTMRrU2ekmKxwoQjT9qo9kdLweoeaK5gKt1kb9GcyiXWSct27FpwTQUnPiyFLXMju8xJDVcauVoZt3d1n",
  "key6": "5PAvgbJrYFvqppYDFahuh27c5AqWfR5LbYDrVD628yaAuvFUQfPaB9K6toAqE7BFNdi6cD73iDUKWwAd9FSjn3gS",
  "key7": "2rijQVq2JwAZ4YSTgWeaGHcCM5xpTKDgNbmx5rMho3f31TBMBBfGJiKtanWZUjEtWU87tqnBoJNELiEGCSTWBQiU",
  "key8": "6dT6WMzE3dQabgRdHA7ivdSoRw2He62LjWFC2TSa5MQ3qLscAaqEKurXmzeEXvpVYLfZVjDMUN8nFWUcRiFfkpY",
  "key9": "2qfNEWNos9UB63Fjvn6jHa1wx33NpgLTekCnp6PQwfxgoGjmhLYhtwMDhCgyaCMoomYrTkd9rBKxi6R2AkXGvkVD",
  "key10": "4K7KaUhLnEQkZL88izoY4Z7rKMFvtZvTsg2Ec1hMqgLSGxzZYyueR7SWLFoTsDXC9rcgE2XLs3cLVHDgubcdrZLp",
  "key11": "c9oaR9urXsxGaCMyjRE8fqfM47xraFq66HS7X3x6hJ3YquLkM7omXehijkmwz2fe2TfhcQFtvhrCy85Pn12u7Je",
  "key12": "2vNEUY63dZEX5LGufpJpgSrZK4yYHd17pP6nPj7jGVAdYxkUfQTfuzkEavXPZEmP2dUoKfBm2UtnAZcJskHDuAox",
  "key13": "5E9qdLo9LaXfiE8ABDdDcxPDdKvFguK6kK8n32G8BPoqJwq2kdjPRKeyDXwr8i5STgxSvFEkq23QfoD7zQqQZS8c",
  "key14": "24kLnSNVoZUuCq6fPZSBDteyZG9pKyPVmr99c6ED7BphCh3DiaKzNJ7wPCqAKdRNPj8GkAQnFhLLLcxEgXdHXbNB",
  "key15": "2yJ7xSy88UUcut92LV4mGpaosDLDvPVRrxy9P2yoFT5nGnPmLYaCb1KUbZ2RvQfpfnFQshAF8MFmJ4JVnJLX7wXt",
  "key16": "Zm9fvWmozfDFoM42KkrSRZhvXfGXf2K8aEnz6DQku9Uu8Y6sXPNvr8fAGuQhKim21NDuu3h2XT8GXFfKAgK85Hj",
  "key17": "49KJamZ6S1F4YQ879F622eYSiBpCwRYyBrkzDFRSjkUfPjCvtmsqDmKquBEcdAA7V69raKoqUisC7RZLqR5s9T3h",
  "key18": "2ixVruiuSrunYpuBYveyiqMYqG5dhSvyucSuXGCmbpppERwZA1GS2sMxGaoAtSRjBUtLhsQvSw8JhqmCh9f1Lj19",
  "key19": "kv5McCwemjGxnwSsBwkVLgK4gdcSmiTLgGezHJBTJbwzL1Khd4Er5K99eyEoNyc7CsiudTwzNSK64PMqRwxxQ8A",
  "key20": "9cjzMH4EbKHAUC4W5LWPDLEvUHfK5ieEZZzzA7PgiJLXxUAbQEsmpqon9fkMWtS5A369SDYhb6rsagSWfjtnkns",
  "key21": "3zw1HT4gpaowswbcURmiBzNckokfJHLh9tDauVfbcjj4C9p8ZxCYteS2tj72XoVq3LjdiStGVaKdVtgvTGPqeJ53",
  "key22": "538PQKAb1G8mhuutkH2VHvAamZ8GjqpUKr1dDqCMRQVvSe4N7jzyJZJ4A2PkTawaeyuaBov3cZwsXRfPiQnEztat",
  "key23": "3LWaHhvJRS9ah7M6XeoueaQK9PhNbAjj32YJ5UJ779QYcfmQwrkmQnKqPVpjJdLzTqKiGuxQ9rRMfKugDJZuCkub",
  "key24": "5Gn92krfK6Q75GDJweqby25dJAiMJ2y9NDzZ6fsabYBKXmuxXYtTbknxwCZokBseV6uxm4HF1Nop8iQLAnC4aG5j",
  "key25": "4t7euXSQiiMUPMKkLKiRf71Ccbv9Xq62NHfk8pUhekEqedD7rJ5gJuqBMbPHGtH59jJh86fksoYNsKjhRqPamqey",
  "key26": "Ao7LA9PNvzr6cgFkrq87y4aBQbVukUkseL9nhawqbXTMtzpGc5yzZC9tfmdNAzknk8cUvEtVyzH75f6URLkmVsG",
  "key27": "5tG5yCwa1ZPgBUSNycqBNgCY2XR6NBLvKbDVS9Y68AZPP7btGt8z5WxTgjUSbMK4pCMUbiRMDZzJqGjLqdvJbw7",
  "key28": "2jk9WuhfnyYCbEnrnuNmyvtXND9KRDLxbY791zD5A5MATPzMzL5vj4QfDpLrszSHqY5ABsUpUB8UeRgqj9tyc8Xj",
  "key29": "gKo7gi7sqEBS4uBeLEfhMq7dTmx7Wg2scpNjjY2aQisp63GESbcwxwU1VZKyGa1WcNkJd5HL6nwZZnbzSkcqn3K",
  "key30": "5bRmSfhvB3hVoQrtXsy4YrNcyrpGdvXE5giwEuHs5xCCzRcUj2FzCCStM1SFrf1ujn1FP46UFyvMKzuYHiMsduY4",
  "key31": "523xTwyJAQ4Hhhfztu8mkXjuNthLBCznD9BNS1iSbTFdxBWvWb7M6TbfUaUZkm9LvixxiByGT8fcvn2Yu7JrfRj8",
  "key32": "5y3657uUjvjVgG9KQxSm3XfYFYBvSVTegUuqMp7dwfkAhYWsqSukpemNSRigmFw5EKDVVzigqqknYrtW9o8Wcqvj",
  "key33": "2M4YvgPwQM9sfftapNf38z46YPPggQTEpkEdFjxQUkwTDEiGLbC7MRGYrwumVcX2sko7hFz31LweB1N3rxsKcw96"
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
