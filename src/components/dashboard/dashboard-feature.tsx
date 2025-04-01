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
    "a8utS3rPj6xgfu6PeAXsYAkSK6MNCecvXrXPRTURbrQzkTTXmqVa669UzRqaePyN1zuvmbzaT71oJ2ALwN5BjYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HFHKJ7pmQ9KnsshicWDmyg4qXKPavYEzveJUwUtsEGnJXSejBUtESgiYkAMAcY7V1k7JKUyCFXEVd2ebi1rJNKd",
  "key1": "74Af2mcrFS6qQcPCY2Y3rkgzZvEM2zHUNNFmfnWhNM1kGUqioDN4UsNijKAdFraFHGBTCKUwLTqWtsSm1oUtTPu",
  "key2": "215GDimfNmuJbG7GftfTzLvyXFtTz89gfyax5hV4hLrwguFtu953PQT9ZFbLwe3DjjvW7bsz7QxjsbWhd73HwbUf",
  "key3": "4kcTTvnchFVk4vxCn57YwbvJHc5JPQuDuyFRkGFLankpu6vfcUn552ogs76sijQhCZqi1UTMZxV7bbad364D1kg3",
  "key4": "5bPzRzYyf36aa7GQ54tF9ccXmbU371j1htopaG4tpJuS5gwUzcizLX2B6Kz8MFfJwc66nhknmmD95DeuheNM9R8G",
  "key5": "5kGGvYNvYV7Hi5fn33uSNoBLwetsu8vyCkeHABq2v4Ws3SHNwWdXj1BTu3ZQBNvmro8meK2Qe2tiAnnN8ii5pfaK",
  "key6": "31nGcZWbVNuc3DXyaTAFCzV7LEie4GBxzySumvm9h3jBaLEy1BhKaSXTafESX7G9GUNUDbDCpEbxqkdaaomUHx2Z",
  "key7": "3FdVBi2sauSSpWVwj9GEtLZYqJaQpp4hXP3g3LwQkr45sKAfdAQgua68xxf1PNK5N3S9Cb3jVMfZ2ZCBA3JKgAQD",
  "key8": "3xyKx6ZABkncVAQo4vXC6kU55ZzRcGcUyjxCBFDfptFbbUcrGydu1UW75okETV81an1R2b3oxX4TXQVVuMDcNn34",
  "key9": "4AiuAgunXENGBcukQdau3RJwtUZED9GjhCBc8EbWPqpPFepQia9QdU1RDfUEXQH1Jxh8LKeVvBRhBSobLs7x8R6z",
  "key10": "23x3RwStC4486AKE1uRPGsYXiYtA5DGFizheSvMi12GQrhPvKb3ZoEaF5q62CMMBoqkFTYrXCZtTC3TpxFyrQmJN",
  "key11": "4uQ7p9MWaJp14nRaSSvGAL9LcSU6B1k1NVuzeusnGykHiFSZYkLriicrz49itikqzqkXhCh4q2fXRMJ6GfXk6UNk",
  "key12": "2TTDrHoW2FZsFNjhBos9UQbw2W97A68bRyAQfh5pcfUCpgVPCDNeEw3Y2WvWtR1wboPUPCqtmiaMqgZLJYMDXMYx",
  "key13": "D1MsifzSAztgMMFC5nKUyWxxp9QLSzZp9svLRCDYxcuGGbN3N7cijozBcZCRvswSMxV2z1oq4AQjuKJnoQZ3itH",
  "key14": "4vUUKU9kV8XcM8n7fqgYKbkjSBWF69AkmgPNvX3fErX21QQ6fCrrgJod92BxBvkZUv13duuEnQVRhENqCvnzQhLp",
  "key15": "hFxB8CkYsN82Sq2o3CC4CxcgnHRyZ1jcZkAcAb1yeuauRd7Xgz8LaaHjyQRVTmDfm3MrpvXsZMoEVZpqR3DSfE6",
  "key16": "5AKMgFjkY2TjWo9BPwhqwB3jBdzKxpqpT2VNDcMWygb9hwNkf9rofhYXQYbSKz1SvjiT9qrtQfeVNy24SGaMtkBb",
  "key17": "5E3frhqgJCheEajaYEEaCYPiTZsBdN2wpXk2D7ypNeiDNwemHcmFoyibRHW3VrGqn4L3FbwuAFM4V9TiDBwRYvnd",
  "key18": "wt8LEYBD7j18Rja749z7hqjSKWN1w9xVnms3KTBzjpZwvh6wAwPxD4c5CFciTKEwDnNWBkWY9evJvz6JXfGCwmz",
  "key19": "2JX6u9PRKRnqmxZLePy9C85Ki2VMFg5qg4D3mvnFouwx6Ug34Gh5xGt4obT29MU76hKMrAZMb4q5rfSqU8PAVzte",
  "key20": "4pw5XjHY4bfcgBDcNjziLY1NZ1pqP7iejNm9jTVDjjpA82e5aBjMWAfwLv2vE3RYRsvHbosNbqHrxqm3WyWeAWaK",
  "key21": "31iAMuPRU2QwhcXmpnoC9VfijHw8gprU2MGTXp23V945eZk78u1Q7N2QbyGQGtKaRXNcpGMHXZ8J5qEF2dvqHwa1",
  "key22": "Vtbzadm5aQmG78NWY5y6RqZVVYh7h4z7tPfR6WYjYYBZeXhUoPEBhJW4JZnf8orXK7AzLGE6PB4Ve3BG776rAmN",
  "key23": "mFDZi5RPiQZiyPUtUMD2HHSwpRbxhovjrU9FMazjKX27hXh6qDjgxiovm2xDUomM3n5eDwYKdBYKeu64gA8NJL7",
  "key24": "43Gpyqa6mnzv5QL7BDRTe52U7J4kcLDs17b7zyXE6AWz7M8Ddwyy5PCvErJiMSfS5EKwnWu3tjvNxayZaEbAeXHg",
  "key25": "399FdzpWTfNmo63TvML2c7heuwwPNm35A4peBaBRZ6yMAsW8VRYMjSZsPBV3we2eJjc6DSXtvKrzc7qC92CGzFhr",
  "key26": "4ztTAtadX3j2Sq7q9w9JQsj4QNJJMXFdRAiArmPUubSbpC8tetbdSMvSHiVThymNzPipvYJtZzK6gmFpZiPUA4dR",
  "key27": "5o2deDJ8KHmSSk93fMjR7fnjC32aD9dGfq8YnYanRHecWpHSRNxEKiQ6sPEqtRxiQbUCAhdcJ5hvHYZAmc2WZ3GH",
  "key28": "3W7fYxP6g4PriTdopDwDe3ZpV2wSGogyUqmXBmytNKXELyTsPwq7YCkDPvYeQmh862QBZCRfxz6t4QWuTkiHBZCB",
  "key29": "8FWUtHdjc9jmoHB7JzzDn28j6aAzti9AWJYtu22Zmoyuytj75EWqjju5m5jQSqb7cbs3r38ZmoPTBLEyL7dfLCE",
  "key30": "4Tb2nG5WdauC5SUCfahmTe1tKDoPV7onx8e2PbWjuY4uBFGqRgdiWk1ZWHCg2uryXERUPgppfGeukwkisNo7TYt",
  "key31": "66tD2wmUojj3k7dAQJC59EN6hkwRwsSHWaR5AqB7sLxs8Q8RT8uUH92uQV63qUDcw1Qyk8Acdycui7S2EFiyNCfX",
  "key32": "24QSEEQVVMwvQ7StmhwqvUmU1RbdixRrmVHMT2Qgs5XTNggQ5P6zVoYBnZrK1dnyDT37hqw3PNyV53rCZJhQ2Hts",
  "key33": "2xyhhmKreP15zkCUVpJosh7z8Mj3MKWBGmKFCEN6dJKbxRZ9jG9ZcMQnTgNVm2wd51eF8LtNrTS3fYBtzBfKXezK",
  "key34": "5HmvXuWYkgh5hCFbPvZnKLbhq4tXdtPJGLTijLgFE6QgH8DZJasGhb9NBk6ELRXoL5pLRDssDf6mexjQV7nPDyKr",
  "key35": "57MZxNVknsA3UgV4QBHnVAHEsEVgAi9hBdietmhYbUBuaMSBp1kEeSTvRJH6voNmgDKmrKtP9V5oYr6p6YiUvnWq",
  "key36": "3kQABWzuDNkC9SnZNe35uBht5HzCBuSVcmeaTvTh2TLueWcpZ5szwj2ZRrReXU25nBNmr6ADcsULuLWCYjjrQdcH",
  "key37": "2t9xU5pZSupcJSayeeAC1YLM4Zkmska2V26N4Zz6hZkTVz7kH8Fgg3BiaHQn4uuYXcUg2hqb6wY9B7Fbaek5mDtC",
  "key38": "2QW4nPhpyFLKuDAdUJkVHWD2tT73ptLf67rEei1Z4ccE8H7GXHUdc4bFNkwkqD7C3gcrVy94dp2D2AYKU8EssEDm",
  "key39": "mvbh4my9NYkDLgRKh3yTuiANCCM6saiPCHMDfURD5ZAXAMiZ9afuTo5PftU89zJo2K8X8q2TMPGrtmnRAjcUurC"
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
