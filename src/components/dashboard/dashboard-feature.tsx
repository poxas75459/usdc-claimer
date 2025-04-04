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
    "3B2bZPsGFgFvqYXGuSScugncTfgke5yih18okAnQiAHn2tgiRz2xeS9YTJw7yYiZ6QdWyQxfGtLFcUPipid1XMQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39S18RwkUGvvpTMBbW6ZNXbe1XaFLcVUZQkDAkkMYespkJwerEfQz3DhA3mZPNEegAgKXDW1WksnKbPXwQyNHFbc",
  "key1": "58epD5eDqh3UhD5PKk82LXUngpXdB8WedEyASbzyfn8SwWokaXsipJmjBTtoiE871SEeyNMiuoQL4Kwx6z3Ubb3E",
  "key2": "4jpjrG6T31uwHukjkQXDjG9bx9ocDsLqgcWxekibR75jc1CvyK6Ex9RH9uWL5KpmSetm5cjWhrmEFsL2GoexPHF8",
  "key3": "2pgqvY355VW1Ej6xUTo5LrBFxhrjQxtJAC1DXm2dy4PS5v4Kve6u5XT9JerxNgYay6aLou67UU3puf2h9jusFyUx",
  "key4": "3eeE7BuqbGcaDL8tU7vjpM8AzB5UwKJwehcjtLaY6HY4ocEea1HKf9bThusayz3wBw9wUk6jCpFCkcVGo8mYoqJZ",
  "key5": "zrcL2HrvveHaMC4LbeL171kaci6wDwBY7fRyq4YCLoEXe1knKPXbmvoYPdx5DLwrWLcTyySvZ1TVx41oSVU7beU",
  "key6": "4KY5jZg4knaahxg4ZP21h2ZtFMKHbeGRjGvQvPH7J6nDn5WAkAfHxAWuKf9msmasozEFtth4aK1EorbFd8CwUG4j",
  "key7": "665UKbu4XQHks4uptTcg92XcY8SrAx8s75yUN3M8eXHUxT6Ux33NmmMxSARnHuPNxaTFZyWZ9gkFNmw1dn98ZQu",
  "key8": "2dQmK33DYoxSw9UnxqGNr6wMD4jVdwsfMeYuvH4xPwBeZhrerWNFZts6B2sbmitEcEqihJPuNUxTGonQ93XCQBTh",
  "key9": "5Eyu1YiRzcAidznookMyYhuyvj2neG6LSx1PFKbSeQrGCcWrnHoc7jf5zsnBBEE1LXThw9Jium56WeWq6M88Tua1",
  "key10": "4bZdmJAnC1QxBcoF7Fqb5sRGo1W924PmYPX8Q3Za8uCRMzo8GhiJ7LpyEJ5hwgSPwSjkSnRDv2qdGCWZDbsMkhiW",
  "key11": "3EPMPBTbDA5nMXVdByDNiHxzc1CEXAvjHh9bHvkYqKqd8t9aLNzmD3aXSggVo4DUXXqGMbxRd82bba2rpJi3ozez",
  "key12": "2FqkGMnZqzdKMfUxd1GRk7U26aL8mzpV7Kgc3VFRyiXqhgTX4JX3A4N4ZQb2ud3mRC8tLDMyXQj2CJSyMvDGidYV",
  "key13": "3955dnFP47e48HKbfe4sHJY4k6fq8KT7iUtzDgAT1Tc3jfJbHppD34iresvTwEfSd3Qm62cFD32Z57ntBSP2tx9",
  "key14": "2qTskKXMjUTzQxe9E8pooGDyrqhddXrRoQeDLwN8hHXNC6tt8kNFYkqCzBSrQW4D47Pqe2KzT55RGFTg8BbUHPyK",
  "key15": "Ac1LMLak14xVCW33FAKa6Ti7TRAzgRiCudjuoasXmGhNkfm7uWLBhv87EqMkAjrxHwFTezcSEQwsY6e2zzBRJFL",
  "key16": "2MiaWQ98tDJEr5Giz4tBBfA2t4tGizr1xUXdVQ2BStwHNPYAQrvDWgL1xrZ1itW8DaCiTgyXmDJCmRj7Zbs26TRB",
  "key17": "bmUhJSzhAhpUroNL4gxxLZQRyPD1dJCZ9dFiBxqpZDr1yi44brbx8sG2GjG3gnTgmTuyYdZoX2bjhLg8E2gpPet",
  "key18": "4Z8aC2keKMc8y8Mco2yKb8MfoZrqA1kvs3a6cBaMdpAiaG8KmzEaowh6RefoFNaJXyupTzhe7As3jBpCX9ATooff",
  "key19": "353HyWZg3zngXGDX7afvdVTpNqbYJCRYE2Zo87zigR27CGc2PgPpudxMKtLmixZnUoM3MrtT5AznJ4SKfYMLR5Jg",
  "key20": "3UehErnoYk6USQUDB9wdoibHwmAbFTzSR7aDbAyWQPUfjEKw1hohrcAZ3BEui8sXmQxAnXjEdA3UwCew7jehyzmh",
  "key21": "4zzYddok7zZEWsYENdNECr4Gp1HpSX8ydQkMBbgF5UFHY6EggVGNbWFzbrocv51aairVT39SPndhCNZiG7xveJgx",
  "key22": "5KtwSCvFvhQBUTYW5JfZQvR4DNrtwU94ypBRRECsufjLystc7PwXWznAp88sfn1yH6p1yhLDz3bNKYbuR7tCBnC4",
  "key23": "4v1JKe23PBpnWdMtLuBhDzNWW2N82WyJWyLGGW3nDHQ7LsocDQQEfxkSD58Ts9UbbQEMFksqExSTHzHa7HEdw2yK",
  "key24": "4UgoudCXYcuvM5JEW4h8imXJshyMvabukZgmRtqhKBJ57QbPQu1HgGtzcp9YrHn5neruDDDzKHiADFKSnjDraZoh",
  "key25": "6wmxHyvcvx3Hj1RzqcUysXuspEpNNw34SENLRiewhtVPPdbaGKiRUjZPZrbRoDk9vFAqKEVeB1dCMYtb3311WDw",
  "key26": "5VgE7bKVmxD4s3kEy5RBPQB4DBRZjyR77F2cBcLSuxGi9PqsVVTgc3GJ3DbNCbVBtjoZayQ3jMFq8E98FvP7kTSH",
  "key27": "3pQM1r95NpDwn3FFqf1KLozxZSV3uLvDCPUXBka4W1RuqK21uTggXLC8yupRh2X5y1mRbwyGjPATcHB4A1aaTpZb",
  "key28": "5LSC3p1vwdRfFjCcbdfUCVZ236eBPaGoCF2FvUiXTahtgP9oBkgVJhpA17FysVPaH6fMBmCQRmoTSz47dNo92eju",
  "key29": "2nTzC1vebsRAYjsjV81QQCmUMZbmHqLWVtnLgYtXTTydKRend7prkYnvcnnGxYt11gshVwZiH1ugCo6Kz63ZGvGo",
  "key30": "4R9vJRWLNpo2NjC5yFhJA4mhmDP6ynKKnefty1s4eJkFMHTWnSTeYS17a75kgu12hG2GJ4sZ5utpaWtsk4DG4pxc",
  "key31": "3EAzAt4XxXgNU9RmjL6waVUGprdoKUmyFV8pJPUrgwZK47TjfsBnCso37naea6e3ZVMS9AxFL2KkhN89tgNUQVnu",
  "key32": "2JkQJxPKatNuVQFA3yMDMm4vGXLCtys2uqCcaebT2WQ25h8JNaiHS59BLz9vyHP3sg5uUeEmQK98pNStrYpvxH9r",
  "key33": "4xnqSxztEw14JBKnZixBXyxcrZVmVELrgiNhVK3TJHRAEaB9yrneRQE36BGhbdczmbwqwKMXTcJ7hG8tVbQpTqWt",
  "key34": "36nga5CdR9JgysVcRvzw9bknL7kxuoxG4nhjZAyXn7wQttkqBtcjezQukfvGGvRRDKFU2TjaK44avHjKnVtu9F3G",
  "key35": "5coitvsgKpHo7qdeEpsG61ujxyNdBDNnsUSBFeHzf5YeRdSDNQrVwG4AdsrnmxEfoKk9U4N7MQxhoUm4i8djdoVG",
  "key36": "5wbpS3VHyNx2UuLivW8Ec9MywwQJKUuH6UGNwuzYfBNeksN86AwyTg9WC9WW2PppoHBmYoxtMNWQM7wM2WvpdynD",
  "key37": "496KpgbdaLkGJ6fAVT3ZJuEjW633HSzTTDa8FnffN2ptpPw3zVPuK5M6g9ZZ5kmNnfqyXzUfEfdnqrMK2SSV6Lod",
  "key38": "3VHh5c6cRyyjyxYLM6FBNFXqqnno9Af3qx3drQhaA9hvpxTdo9dAfuPAmBqZuYoQiX74QYN8XgVLudiDy8QAgEpP",
  "key39": "2UEWnGXBopJF5oJNWmFwoYwKn7JohzpF7dsEQGWxKaazc6U8STEuxf6LGwV853QowXABgRcwboSkNq6Y84LsmRAh",
  "key40": "2TkoGoKJPu1bepN8ftAGWtXMFa62rcCvxXy1MVKWqxfp8bcmR45EWArwaBwapZ7CevCgP33FuHUhhR9wevRqqmPL",
  "key41": "47E1xTmmc813PxMdXk4A74g8BX7P9H9zAUwNnNekXErar5RWihki3Q1kEwTyLrUAWjUiwDpi1t1ojgqbHQbshkvT",
  "key42": "5MPVVyhDW2tJe1vnrTte6oNMD6SigNxSXQu9EEbV59UtLtG7za1Rh53h3vAVX5pDm2jCBYNKxHStkLjuK43orinh"
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
