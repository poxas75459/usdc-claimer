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
    "3rrPQuZz5Xu74qbdu3d8GuPCG3QzuZeYqBodTmAVSpUNTYBGLXGBHPcXnX6Ugm7hCJzXYxuJcefy7dL2MtVUBtWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9EZDp7GfPUXk9ho4jyMoM16P8JrmtaWT8QiRyQkdGKQ4Q6NBbMgWdwoNPbjqoxrq9icpNBUkSEcJrMZNUkVuiq2",
  "key1": "2YxGfo5pQfVfkGxnQyY3ZiFcVCwYxnn8CQuKx3CUUnR4v1p9SuT1Z657vKuU8eGibZtdu3rTNEiMUzaikPM9x8cJ",
  "key2": "VcGYaJSBuVkbi3DmhSPmJCdnFmSa1TM3a4uhssYK93zuTpLG1BSpwGqRjexvGLERNausi3XrkUPg64SxgQtD5Hd",
  "key3": "4FrNpXmZ9RUYgNjY5wc8qXYWAkYeYBmQVAfbwhUDkoxRV6eLEyXvGwxw7TzE1AgxEE3cU2Nzd5gXw6yor4Y3bGEv",
  "key4": "5BafAGmAjYv3dxeZ5NdwQwuWni1Qt3TAnfdjHrMUbjuwWaPrG4BqZc6DoSRuZmrG7ERVrrEer6xiXdedaY7JQqMC",
  "key5": "3SohQLexjoakJ78XdNqVR3jqrPWw8ePmj4KqwsAkgHiVukb7aCb1PTen6T7A4tzoZUW3D2PrA6CwjRZckHn1aZKH",
  "key6": "3yuWu2M3K9BLbGHMbYsaNfbSAsmTtgYwMHbsYAaLpwb6R5NQgfwk5aBQR6x1kXjudUQyNgoP8eZHmnx794TfY6dV",
  "key7": "3Xs6B3HzC39EvtmDVkgT5nS4FiemZUznaBgYhWsKb3wpKbyWDDii7X6gyTmoUxd8cBiNwZeE4usCEQj3RER7VdPg",
  "key8": "3C3oYAubznoMvEMmDCAemmGvDckNokDhMQ1koAKGMS2qo1AbMYUbDjkndxeDhJQLXqXdFYugybkSN2NFpMr6hLVz",
  "key9": "2XUwWtepYVDFrwWkiHShZxS5rHJ4f7FBbi9gUh7B61WhaVTBK16rBksjXzpccLJBTuR9a5knPRoWwnHHMAg8Rf6Z",
  "key10": "32r35hshqZoFhRF97Zz2gdRJw2nczsS9eYvAsXX6kh1ni1TkGjdgKuoMWP7ZFZfxkDyB52fTBcb2MM241R3ANa7m",
  "key11": "2SfyUL84J5GNG3M5fjsWBgLKpQKyhdnSyPFetAYK7fLYJ7wSJmzxwZh3ZkDwgvfVod1mNRHAbqSbKkFneKAZDfms",
  "key12": "36iLZfEzNZjqxvHeFjFtj9CX1k3LeLuufgbzobE3hFKKzBh3JZXWR8dfDeUEWbkjTucmgMTAt1MVGsUYgW1TEdWv",
  "key13": "2mxfj6wRRG8oG4m8QQ9aL5SfoQWqzht1sKSYTr24uPCXdoa4Uz1HNddmrFrQjyhavW6axK5uMFvoq7s4tX1wJawd",
  "key14": "57GsSbSdZY3d2eVouh7RgmSQraJqy26i2DoPv8XWPCGDPVk8fDZ4AafQDt4QqFSCRKUYZpDmQq6Ny7XfiWp7bW1c",
  "key15": "5NoaZZBG3EhBq2YKR4jEVYHfJ951Y42drpQBqivKUH3y7fkwMgfTjsJpA5PVV3h1Ep4TQ8iFLnwDANquogKYefKu",
  "key16": "8FCKKpiQ3unXsEWyQa1Vm4FWNLyYm7yDqt67MjmYGrWKyf4RmPgcfjDP7krMdHX6J2R8YPnnpQLsimJAvh6DYF9",
  "key17": "31cuu9iF3rXEP3ke5geNAzNSQk2CnBTEaBNJz8jJzvPQeFDGo2ahfSWgqCYmW84UBiuMjq18k43NKFvTU7sDr4ZL",
  "key18": "2xezxbRLWaiZdsWyQwUbuBAjDsP8i5m2wYK69CYjdMQpBDuuVnkkeCUDRGY4B3Fr8m2JDQSyifrJ7iJREb7pUEQu",
  "key19": "3w9UKDhM1TvYRVPeg4cYTqHnq5hHZUkCkgQJv5bqSFvqRyGoV5EwheLremWwXW8QQGbkgjmTVJ25FCGEb9gf8uPo",
  "key20": "2QwHgE3NEHfmwL5PBUSZUjs19Jg2huk2pZNXNeWir57jRQr7CiuXtPpsMzud8ncDKuBtidfg1MdNKcqjSuStsMfp",
  "key21": "4xrMy4W2ExVr88Sphn4KnMGJBc5Quvue6DwYSTXeLaBiJdMVdfo17AhV9stWDN4Lw8qmJT8QB6VYB59gvxBrpYaa",
  "key22": "2xqNxSu2QkCbEiMrrL3rXPPpCVm7EMLSQokkEHLRSuJYuehibVYwMY83Xj8xJSowNsZ7AJR7mVmVPJBPcN4uVFZ4",
  "key23": "56xr6zAU1HBBtysB3JZviyvAKGnzBVaAqU7ggJMhyTgHz2xM1qv5J9eyHCjKL2CWex1FQo66fTL72oeRceC7fZMY",
  "key24": "4xk7XjZdE3S7RWaWuJHFvCsNdxvoCbpTKjkAgvuFj4Pr37YT9VKYf8NxngxKpdZf1WoCtU5MykCTcaNwgqRHX6n3",
  "key25": "4959Lytte8V7hkjLXEvQyQ3FAVYkTVYPDpVyDKzpmyWBfMfCd18u4m4j1fn8gceUkUesZqsDesJkFDkyVkRnavfW",
  "key26": "3cmcpM7ttQ4eSbCcgnJxFLL1X9vwG27FSULxVHMt8DgJ3VnRT4y7Gz8qWsNvyLapqWbSxoTU66ZMifTk5wzpR3qN",
  "key27": "mkNrBXKzZxp22KC1bUNru7NCGMdn1jDn1RHsndPJX4vvCUSks8mNNtd3xdvRPkXbt4nA86XzCEPPra1gjo3PJ58",
  "key28": "YMQPAG1BNuucU4UoqNbj4dyFmdCH6K7uRt5YpWPVFYzPNEgEpgoWEQq9j1XaPC8Tz7ompoyLk2MGcKgEpcXUcgc",
  "key29": "tx5QY6EEmT6SAtTboTkRRPmNCr54ucXR2gYryzDYh9GFy2mvXkWUh8qWWUp5YKYHinPVta7d3uoyGEzrcxaduXy",
  "key30": "3XYWu8yf7fbywkMzB6wy7JXymiSqyowzcHTum1iCvFpNQRpDYyosPEKYT7L78DhjvbQjC8fc42HVnTc17hdUTUhM",
  "key31": "3gfNbPQDFHJpmwBwjmLmtffokcQDbdEn1KBaTiiq9BhJ43UWbVQndUMgAYrKTkdDVypuxnFHuLyCMeHpzf95rfAD",
  "key32": "53wnE7rqo2nu7yxpEDa6ZLJsiDDNLL43rUrHFwEc3watSRNuDNjPj8kfky2inTyn9WTDar6cVfLn71XiWMgMZ1mT",
  "key33": "228pV8o4e3bPEkFy6fHFKaHkHWWBsFHNmooYcgfWDR5sjF8oGDKny8CzQBnVMfuN4z9Rv9WDjq76tLm4akdsJL5P",
  "key34": "2KAuNgMg5k1zf5Z3A2wnniQFieQ81tsYofH2vSR5d1jAUWazgEDGZNVrugXkNoRtzGhndTZUeEEdLmgrVwjwSQYj",
  "key35": "2S4Kz4YEz8FEm6A89vcfnrXLG4MHPjp3rFqMxQ2Ps1tSyqJxmppMPqD5JGjtebymwzjLCWcCqhEU6nKDienVoMa7",
  "key36": "46Ku1XcLs5aDY2XdMSBJQRaAUVLnfaH5uGtGEBATJkBjLYcUxWkmqjWEEDDn3vRMTkXgJzpgYbRophYo53ibVMf1",
  "key37": "26Yo5BhxqkLEVTFRiaWBr9maC9CrK91Nt5eLJWU8dwvH8n1kEpXe8Do6LybWJgqEMHvfgLVbca8Z39gxHU1eNWZ9",
  "key38": "4GWak8nSgSGaX4UVaWUajp5tGdkgLiHyaAUiM6qvcsN96tKSdCrHYqfyez5HS7ezQkqCAS9XK14KqT1MnwH2Eytb",
  "key39": "35bmkCVyEisWEidVkrHqwqYtwA3EVc6TLqt7jkKrtRTou2YTNp9SBpHSohGLWHNRmfoTsG9qCrAHVNVQ6oRw88HQ",
  "key40": "4qSKY7vgmHakGTPyZXTcchp1J2yXq29bDYeNXweSB3qALe9fQJ3jYdZoy35g1BGqWiAzrGsqjvp4qobYvNdDbHVm",
  "key41": "4NqFFGJ9DxftbrNT843USoZFtQmCFP5YofLWPXmnr83o7TkjAwrhej52eTssyaREr876UegCHnnXzKCoR2oe5uGi"
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
