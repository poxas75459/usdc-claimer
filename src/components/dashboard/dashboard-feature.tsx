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
    "2ietjjqEssbtJwCMysHqDH4gUf6SsL8ZdFbjyCz8p3sDg8HuTfAWNwJaPhFxAbLuQThZXXQHiSxgUNVnPVbVACzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erSf5ztJ4hFKZAxBoSYaCjBj5wTvZCz84jHoHY6VjY4a2qbxhBM8BWjTWy87d6aytAJfoiQpTc3N6zWzg42EdSn",
  "key1": "4uuPm5WTk7Hm1Q9STQg6Yt2dbM3e1K4Uu1cjDBAqnEdFkKPEStVnnLBWj6AzFFnzZexVjzmtN7qaktKXPZREnaCJ",
  "key2": "3uqW9LRxS1FwjXGRLgZAJ1c4Zqmzk4BuebqRcyszruGbQcoJ7CZSebnmD3UYaSviKpZTs8UbPayR4bRqsUcaekDb",
  "key3": "46uUy27D9JG46JzRc7VQ9YjPRprAhf4t47CsB1u6Ee2icgvpM6s9e8oU4y5dAC5ZsXzhRyaPJpH4GGoo7BTYPoGC",
  "key4": "5QNSDx6d7eRGgHPrFyNYB3vApQqAC8P4rzBgeYEZkqRt1oY38bXzTnPH6i8zY73bLM63HRDvnijhAkeMk7Sm7C9g",
  "key5": "2pweZ8nAtFTvNGXVc2dodxgkqqFAzpkWpUsj68coL2fEYyewmNCWexZCj2vYETxpLn6SKRVQJ4y27Jm7xifbxnpW",
  "key6": "5KF2gcayvTjC9uDktHgE7Q2Je7wubxKF1g94m54GA3MMMFQzzakxQccVXE3i1n895BWmuVNQZxbg2zbDvL4LCyGL",
  "key7": "BgVv1ipdnPThmJNddLxxvqEAdDuGjFHR2t5HDDQtapHpQreMqpcrvw9SLNVJ7Mw1RwTgn9VSie6Z22WTXetFBH5",
  "key8": "5ASyS2ufntDVs8nNKUTbbSWgxDJGLsdV6zYVi7YSvEZbRnM9uhP42Nbq3dLCBHMoAHvQth5pyq3sgkX4pW9isxZM",
  "key9": "2HDtFW9xpWWRuJFWvRjDwDbMJ6SMxe1RDa7vcuB89aP765YV7Z8ismYhB926qCnCNmNba6jChbTkCCAu1sYQRmno",
  "key10": "4FTnoRyhNYv6gy5mjFFGSSXY5HjuimzgimaPaWroUYuNKDuFKaug48fd5jjwgzoCGVffZpunYQnp98z1vo7KkshJ",
  "key11": "eY6cmGtkWN5nsRWrYLCBKhfuvi7tNATG6kzJTSAFxsbwo6HcZkomPRTnHPU5Zmk7eTPr7zBY4CEbHMJQxzAeJCs",
  "key12": "3KurVX9YAiXXdEEYoqyhG2C16VQoRZf3Bf8TWNK5B3H5QY72Wd6ndYwgMs43aLXTXdsipttm8MCLF3bTCtEc25hD",
  "key13": "JJBrmLYsqwgjieAyc7y5ujGVWpuzmkZqwgYxxhqTUNWx8ao6vGFtSm8xijRhUqG4Z46kpiMQxtYJESdBBc6GUCQ",
  "key14": "3wqJBGTTxptNnYoVGABMRHbAiUEXgQQKMLCrARLEyvG1RCkA9yen9WVfo6tUtEQdkQyKmwbpHZSjtYnkgffoFcQg",
  "key15": "3DKDJirqh8trwp4bYMwxjZCGStwsTrRRMfAdqcw66hQ5KGZoRaT86pDfnzdRqmmXwG1aHaUHUVacN9zdXD3uHg4R",
  "key16": "5EWMRGn3txowCoHe6j2RGj8oKGMCyc8S9UCXjVcUfPFKeWrtvSQ8GmabgkB4c2783T68Zso94nTn4NUKPmgakZWS",
  "key17": "4Cq5wRfWHCFfgNmkyGn7wmfXDZMyGfZVZm5crX5EuoQXb3tU9GT84rjEj7KSjR1q9amiYcDqKEgbaRgBqRdWb3CB",
  "key18": "63JprgJC488DcCQruKYAcs88qd36QzeEJeyWo9gmR22ATtDZMMbcnCbjpPakcYRTXaq2e8fXcQEBoEFHEk7zX4ng",
  "key19": "2dwrC8wM1bd8V2wG5xiSXtcy68wRxJTGC7Zm2YBuz2y6fDiHGKi2cF97oY26QFo46NjiKhmaer2CqPLqZXwyyUH3",
  "key20": "5gLxFNMed4n1Yoxb72RDkHD4yQryacMAks7aZoZQtHD6VsrC4AULgVvVLpvst7NrShDBR6hLSmmyBXZruvUt56Rb",
  "key21": "5szLN65E7cPWxCHbWhuuPA1ZFhNuk2jQaH1LS9TCGMadWfF8Q6vXSbNyNmaaxXZhvw87FMzwt13T36MFS8CuQANh",
  "key22": "3rWRqbWTL5751YpDyL6gNhWDH8vp16EHoJ1HLQBvqfQBxvbMEtciqq6FhJXutoGqKfgk6NUJHmLNpetuec6kPVR4",
  "key23": "2fJet1HYSjFC9q3wfFRx3T41tTqYZ434jQp9pWktbrmQ1Snz8rWhAkKF6a5ZLP3uVudv5y4ePUcTtsbVsroi8BKg",
  "key24": "3EhppdUFLsah4p6c9qsBZxxGhz3hVm1UCiP5zFveMkaZDVabc2M4KPQnhFuh8tqefRm39QTQuNabDd6nxehY1jYn",
  "key25": "4DC4RbPmc6oKdkoKvkmC4DgNEq75Zui4FhBvUu4ysPgu6urJ17UTeLfBFz34hXv9KEqAbCvF8fajaoHwXQKBHEHK",
  "key26": "5xDhB5qjTpH6sF6jfMKmbhBbF4vB1XcNm6S2bRxRWd5Ccc9BY9NpQrdSbwujZDjacUr2Zf9A34aUvG3nnzVjNfX",
  "key27": "5pZSjWN99SdEHMM5jiSTzjVrkWA2s1EzvkG9A4zt2aFm5otxZee3iE9MaiqmKmdn3NDWcYaN9dkPKDddHLmrnUWw",
  "key28": "2ojqvKFKqrCSA36mrQ18ZjRXzpPiF1j5jqLEjw3X5xWupv9FWJa3QE5ryQdmVM1WKLVgTtXmoGh1uqoDY7P5jVc",
  "key29": "5XbLLaoWGnSwRs8KMiwQ6DfP2hKk2SQH2BY3hQatTVcBS8zorYpQtHidKpHQaDD9gA1vkavMCWUoV8sFxoXwJ3P4",
  "key30": "3osuMbu9YcodME6VP7oBsyBokMRKLMjPbCuFtBJrZ4f11PdPQcuAShp535uQWKGj7VzdbpEkAHanaCv9PKqRy6pG",
  "key31": "3cC9HArFVhzFb3hLAigSH2Ayo5j7X9Le5G86qmBwfDaknDwVTSPagRfQNmpJy1kc4zWWa7qRXsFtcfQTG1K4X3Mu",
  "key32": "XpqGEpKU2nen4icR84JCsub21ERiGkuNPZUWLxwBthFSZY9ccq32Pn4t8ShBYG3b3n5tcZWA2wEUvikHzbEnsNa",
  "key33": "3qbmZEFxd1SdTYtQLMtEZ2myTnDt2qqyHDA3Gi5g4ZQvigoiGUr8aGpBvuZqCAezp1tUtXRZRXe5EMb5DJZSnBgR",
  "key34": "sYRfUFc3kRu21QUgwTtCT4PUTzDtqEimQH9VnL1WBfPeAiGJtEQBZT17kK5yaEupAskQsCoqWghLL18uZXXSnfx",
  "key35": "5fYcK1WjKtypGrfVHqmxnzEwjQfvZg38KEHDZNV9me7iq8qsq3R3fn75LSY5VRxDYHTr7uhyLRL69cw3rYDDnx5v",
  "key36": "NsbUgwsP9U8EhKGD6wcLjNkD6GeSHW2ihVBGa3jTJuiwZ7gVNsVfGUJgtCsyFtieCEeneSiPWTq58PqVCkj12T5",
  "key37": "3FrQFiy8ZpKg8p1AD2PaDSYTyHPbfAHBDLTsjW1ox6KCSpZShKJSSo3d6uvmVUkTu3fgauS2XqH31Vbx9HKJFNdV",
  "key38": "5uwR3sPZdjbCeXiQkQK4Y9bvZg8FVwDJFxAYjJEJuqezY5NzJRdvB2J1CCCbFJAp3LnPG7m4UZ2jEiymdyYiCs3Z",
  "key39": "5j7Vneg7W5R3X1Upb6xAfrRarVR6zZMummq97ECdUTuaBAeGpS5i7KvbWGT3yFVKDHSpvSvqtDjowbHaPzW76e3k",
  "key40": "3KNgPhqJKQhRmRPeHc1kHUDZyBUBh7NnYAjMSQwhBwjDdn6WTVp28v8bvB9JQNkpnijuozSKTYnnGRokHDehikju",
  "key41": "5JTgtDBEzywvV4uVjnXZEohL8ssGyoQWZARHh2EsL5YGrBwaEjQpKHTQhCV1jE11uC7VtsdWViUnnng6kQfJVeg1",
  "key42": "3rG8XQgvucsYrtvoXvk189F9si4XpDff1keXrpJuSAaQYPh55qPW2zCjEp6szG9HR1pthA34JpZNLjMbSh9pCXLn",
  "key43": "45NhC6yo1kGdakVohmxHFhbWC6Gdhww2PhsTLGyJcAzdwyZjwkcTBmEMsFj42tPmpL2CTfzYWZaSvAfRZnGfdCD2",
  "key44": "2MMBCARniz5kRNjqtCs7JEW7kT6SzYwG9Qe9Rp3mA5gFQydM4t69M23CDHRLTxCvV79JZ2ESC9LXBiJcKLqdi5xC"
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
