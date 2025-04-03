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
    "126oEeihTrwcruBi2yiaTjDJH85BE4xuGysXi81bg5MVoQiyrMAPQ9gSfXEYwxNdUeV6FRh5bTCNTFmG4XZPUgu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "477qthwzNLszSGjak1DdEU3fn74Qixn54b2PrurVnBCKFMwZQsq5YN3JKCMxxrE1fn1oWPzuEzWLZirt6TBUsEBv",
  "key1": "4cYhAKRtDDYm2TMewWiE955EtYbQQUYng82Muq7Ejwd3Lje2iM9qq8ynX3ti5tiHhCjRKeMUrTp7dpidgJoM9Bpv",
  "key2": "2a57m7ZxikHBieMb4dSkM7ERw8cCbZ7JLfN8imEUt77NhHpVYozDZpTPYVGsAWThsxC7dEbYKH8djxTgTXqJaEua",
  "key3": "5VRPVBpjSye1QjdZsoRT4q3dX9EF6zQMh5K2HMrCoKj4xF5z3UdXDfSpY6Cj1jJLRrguswmJ3RRpUVVZdrLTBgvn",
  "key4": "5nB9uFC9ywBQ4EkDn4w1GVzkW12nMfhn36wPeoEtKf13EmDDAKxdwXnwJfRQLbnjNPZ8Nr186G3sKGo5dg8pMwoN",
  "key5": "4qu6aLkvo1auu6ExzYrbRC7DqrA5z8j67y4fdQFbf95xPDM3Rt5Mxzyvh6h3RtyJmyfFaPbPEuJuKbhbkRrZJN3A",
  "key6": "5BJn9hjGUzV4oPaAAk4UGe1drT6aeD9tGLHpNC6aNtKyqGaMXYRBuvfxgfwSxXSdfJpN2MCviSqgAx2hcTtzv2hb",
  "key7": "5CwKwt5qbJq71LYQKtjwhf4f8KPYQL2vYXEcNZQ5BDooTEaKAfZVr4ioywPQcpbvkAkGK9XP6fa4du4mY4NmHSLP",
  "key8": "39LwFMwn7W6yX4sDJJfGkH8VkfeiRzCnvUSUEG63itNPKU3dTwirhQx22aj9MbVaVFy4cudLQN8KAxZ6Z12aZn5J",
  "key9": "8a5vYDXAmqPSV6nTPLfLwCa4pUEj3hEYL2st7ZuHNkkFRsA66VqHHv1Bn4oy2qjZKSM32iC59zgaGD4jffmuGev",
  "key10": "3eYjLe3CGjGsGoKih6MixznYMTdHxBDxrgTseUNHivjD1YqR9tbcqNwmSBfNPRgJZqqZ1tJVJjAzckCqg8niwNsS",
  "key11": "2fABaE7TKEn5PhByHWxhHHcubq43HP2wUGWgQ6HxbDRMZpKidCLfr1kUJmR7ATywS7qHu4GYHAdJ5adyTYGkFHdr",
  "key12": "2AcJPFL3kB82n9gRrRnXirFQrVrR4iFuMKpAWngjoLUdsEQVUZpMBSgX263PFgbkQ941ANw45v422j8ntmHcbp38",
  "key13": "2HpLaDHPxhJaE66J22QVNqAJ6GMUHKwXJ3Rk3i9kZUC19hZiR3QSyrihbAQpzbwZbQZAHdtXrF3zXUrb5rfRKe3K",
  "key14": "4xx87G3jc7qU6vY6RbMiX9TSzqLyQyio1EFJb2N9qw7hn84FmLwzy8Lrkiqmok9FELnkWAjGERn4jcYoLVfyHqbc",
  "key15": "3ZDWjMVwuooyP6zKDvA5Kq6ffPmB96VH7j5f685RVh6nPPKFQeJLhpaP2rsjWqoDcYrMQFoiXFjp7tTdmfDNFWQw",
  "key16": "2VVsjdFfGbwb91b2Yn9wP7u4SanM7GG19A7UxmizBHr3ew6FJGAniFZCCVCEnvnn9ddx4VSTSMEkHc16tKpHA2C5",
  "key17": "2qddhuYeUGLv4xYzgQ3KmE4U3Uh5JAxuVZxjUr8YnvEknbzxeE7mVeHLPK64dmRfdxKe4ReWiPS41dGH3ZeDVuC1",
  "key18": "2SxRPtBiTKxssQrvpdRWz3UPuK8kT2J4QzzfNQHfF2gvDTYS6UNDe7EaqcEVJurkU63hFKPSe9yUkL8UUUi5Vfor",
  "key19": "62kRPMQimqJRXY3Wonn7YZjM1xR9DY6CztpULJrsiUvy5joiq785BCcUqv1mZTXdTdvRs5cSxk6QHpNamzjMJSQm",
  "key20": "4cycJcRVAozxnoSY5PAjSU1CvDADvghtwPzTwuDW1U2Pqbi654PjoaB6MxGurnCCMpx7ZqiApMyagvDfQGQPJ5Yi",
  "key21": "46NksnH3La2sUC7kZvP6AnZQf4uuLJDAgjKRjyRGUHdQ32pFJDTZ3ZECpht2NcfEDmx8xiAvp7mJbfchrLYk9ph9",
  "key22": "4EvNwNM5n8DtJeN63uaUaUq6etoiA5afXanRq51oUFYFmRjDUyMYURQGDF1yN44GGvZnf3NuAbfDeUSUCoZNWtce",
  "key23": "3788gMetfP5KLRypLCTuxC7DXLHa93oTvDSrzJ3V5seTDJKtGJcTzHZXdh6Js53YfkpmXmPUL59phPURmj6eFaMs",
  "key24": "QV53LKw5QxMiWzzTjMdxV5axwJLGq1XbzKibaXvxAZDrp9pypVWZuzT8ZDBgwn6Zi5inZCQnZYLTsqRTQK7SRn2",
  "key25": "QyPASrCqPAxk8DheSuZbAUT5GTPEgz2VkbicLv747VgFBHBqC9kgSa7ECPGVahMQX35aW7UwCCLNo7eqg9qpzLD",
  "key26": "G5QgRXYEoVokaBzyw1EjPdAgkDKpjR4H8tfPEBXxEVr2ufZsKUXfcSDhi7YyshxQ7jqN6ckNe6wvox4ByzA4ihX",
  "key27": "2VzGeAuPTREJCEKCMnuYJmfg9qaDZyKNusCjWG8zYCjoUE8jhUXnLwxcuB6nFCB42tUS4VDQ89ub2EY1d6CYLqr8",
  "key28": "2rduUsjopT8HTj7KMQEVVdEVm12GrZnCQ1uibQExVVLYKs3HVQw4ZwCgwHfuz6tuyhtMHMabeX64Yt5SNfUsqW77",
  "key29": "BZzRbhiLQhSd8f73gpbhhumuDGGMMsrQ9emgRsEre35AbG8YqHsQZkSczuDNCCWjvA9DbmBbnB8j9nhUMw284je",
  "key30": "5HD5afH84PCHNULTrM91nCyh84vru2t5ypB17bDAYzbkH9rN7ZQpwLmsmrHZmNAPzE631kWUQX4oDFDmSsC1gFvv",
  "key31": "QkBPEKXHjjcvyJcV2CnoUFcStCLCXJmHckjNPi3s6STfTqT2yBEsGgbezskEEbnw9HxiQiHZCyrJYypjHnDekMU",
  "key32": "2cUFU2vbHSHDNKnskzioLJU1sDB2CWESxgC1rcqYsAm96cWSUhVF3zy7wsqLKS3DKSVkuQS12s757nXousNWZsPY",
  "key33": "ejfjk3aiCGwL2fEVpYEL8rXPJG163MsZVwbuEmiMbHYtXky2hUxt48mKkhSLHY6DR5mgbpRjiohsUh4LToMWVSz",
  "key34": "231x7d3DGGbjfaQDeY2iGJJpACpKeZEBiUxr4MspARA1BMNVMEf2d68qFM6wXiw1Nvbi9g94eQysvF1BMVBUHwiQ",
  "key35": "42ipz1qSXcdTPqFYTTmQPFUBNsdGTB5YdBWsL2MrX6p2k5eKwSVkrzcQdV2kJW951dFRupKUqsfW3sXg5b9xM2c",
  "key36": "MU4YKYz69PYKtxH2G4h5wajpyhJF2njdzMknWeFKhNSgQepH7uZdmL4zZTXaVcHJLvoTS1HhTAugDhAsnXJBWyN",
  "key37": "5R7hXzFrv9avSW4B3XaHtXvFZhpKF94Y964k3F8nXW5xEVBGKo7uLXpEM4SPkdBzN4XnLteo6ZgytEhvZWV1uq3Q",
  "key38": "2iUjifaUQWivK9PQ9ZV455EPftYVaRjArm3Ykv2Gae5V1DDFatUJ1VWkkAJAMw3puMmm7qBJHrzFrJVWAp7GdDvR",
  "key39": "2dz44DCnJUX99UqHTAua8ybc7CDt1GRg1wFWr2XT6zMFTEs5zN63CxeYLJCvKxAMvzJE3ZyzJ4LYGcPgmL95SPg8",
  "key40": "4BMqrDGBB5tLeXExFj79xPnd2xL4jCakAuVNsRTeZZa6dQcpZNYRy44gkX74zdSVRmpsUfqu7nKadobKW5SnyjV6",
  "key41": "E2yVVWvAyWVE7dBhMtFdEn1NHTyNu94AhuHBJiDfPHD79hmh3cPvzyrFBhJFERG4hE2cUZsUgqtkoeyhs5DtB7M",
  "key42": "ruhpmwiKV9EQ2mFHjcrJVW52DV8R3qQk55noJwYgToCsWLUSZdjaZ9G9nyNb8egLE61wu4Z6NQzHgVgYBq4qAhY",
  "key43": "5BiCzrMzxpepenm5ugJ8B6MCMq1oM9ybmYMtTeGDLwtfQ1RRTWtLMEa1NXZzwJbduzWYMTnbGYC65QiUQ8n1dRo9",
  "key44": "5Af5ApvErLbTiQtF7yvhsp8rhYxvLfAmq5Qewoq6xVee6x7H3DicU15WfNMELUAFd4dQJwDGNCwYLhvJXPCT1ht8",
  "key45": "1EsoYcWxh3Mx97iXp83vbaE3bgFrQ3gd3LRP8SNZC3RyNMktr46WDc683PseXRnmFVBu4SE9M8pTSCwyNXct2hS",
  "key46": "57EVqHK2xH5Ykf8GRdwU5h82dHKs2JRUz7TpcTxyTY1321nPjDoP4uogeVn5o3qvzeV3HWHvZdtLhiDoDyLWfVTB",
  "key47": "2DDGeihSzExK1veZ8Gar7gDe554P8QUN4Y8Z9yF6h97p44UHDVhHdyWRpKWVHxhq4jad515q5ocqvrc3T8m3etk9",
  "key48": "4QEgehE59Tz8eoKuxKd8Zc1ZrJv1XLNrnyU8cnrsKQpUJJQcFqy4HkUtZn3L7xafPGSuCyQ2UH3r73YqoGrcE6vk",
  "key49": "8nEvE1jpm1ogqkJBYmLtG5TDrMiKALud6BYcdf2kqoYkGPAVz84VrvydP2QYBg7GKgM7jHpdHfLZK4pwUxB46iE"
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
