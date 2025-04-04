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
    "5takZVwk8Z24pL5iLa3t22bpByo7UpkKrVWjoTorjQ5SqeY5E2y34cvJT2bhufmAJE2KwTKuPgM42rCvCYyqAuKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obdGtsQodm58LqNeiY7rZtRjXX4fSGQcKQVr4Dc42c6jTu2BptwjdSw31Ybn4Jc7BPFEYbxgL6enT1pXZwsirJ2",
  "key1": "4KHWVRu1V5GdQBmKv97TpgNWEXfMXdoaTba4BieshCJFWyHupmi2pYmg7fHURNCtYPKZCWv6a4YmwjVwLL1kyyBb",
  "key2": "33W87qnmyMwXQoBoyecLocuhFB5WCK3C9uUMpGPJ2jyyeh2hDYGNDT4qN5MHPruTcgujxtZAixDBxh7uGZjeGgoQ",
  "key3": "eM8RyJ7G1sSTVYnDPaMXMAAXngi4DiduhQSQEXayissTKPzxRyqMSJ34ZZneWyusQFSZCrEEvYprHQoUBhKdyhS",
  "key4": "3mxoxrUxUFVfhmxamYVrpZPQgBMskhYKe7kFLCXzwZpZRHtgMHqXD8ZKE132JaQUJyebAoCpJJHyNSoXpXA6qdAa",
  "key5": "32Cp8hxoEqqJxfiQs6V38TYowbuoNY3WFDfz7gaz96asdpCR3M8bmECoU973riRdVgVj5Yi3BixRz4vxkmDDY9LU",
  "key6": "4hiHZWPojGADF7kNpKXGYBXEYPiBikqN5Ag9nx5sye9mRFM8kunXHqsPV6BmooWA4HRguR3Wgt3t5wZHF1V1AVX2",
  "key7": "T31Xyz3qTanS8fQN9BqPG5fbvhhDfNs9FU6r9cYcfkrf8ReKvfZGND1vhW3yjgUdTe9wPYWhA7fM3TunusV7xMU",
  "key8": "3rnqMgKeMEkFyEwWTR8CSWLarXQkFfMDYa92fDSpNvBbhjYR6hYRjVbHYYg7PKKUrL54UvLf6prxT1E7mi27Xu6U",
  "key9": "n6SPDxwAFFBEfW37vtZdGy92K9iToYNwnAUbbJgbKVFTwnFyu4yoTzp92DSduQa8dPjHX1UaZHB7uZFguZdkUN7",
  "key10": "3piKNxmkMK8NErNpR8fiSAXJmDybtFnvjXkv76rVQLKHgiMxXhWqRFCjG5Rjev732PPmAxtJbSqTsEggd8HCzG1r",
  "key11": "LCcw65AGH5YAbBwh1P25pk4J6qYT7pSJxUzjx782sp74Tbt5x7mYyH2rQjtJJJ8ktBt8XHbj369vDkWek1dTRvt",
  "key12": "4dwjz3UvDqG9GeneXV5z9MojfHfYoLAxQUhUjssdDN3rFGZS7gACUjEXtRVUmYkzSQBaLgPYrpx6hrubBKsLc4NC",
  "key13": "2TTAX3j6UnWettc2uc9ARjGU6kqFzn6yPe29fvGg9PKwBwCh4MWgQZSHRF9ktkTuSBxrw85qxRDMhmzuEWmhnFf4",
  "key14": "JhUJDab2EqFr62WGxPkg8sdBztU3bENofgPR3CUE8gmE6HQF8VAsn9XN13PtTpWiTghgkq5DJbC3PnKuzjhL6BC",
  "key15": "65Ef5u5ini3bvNGj7YhXhxFDxRW7HfyAHyYXCFJ1mkUtMpcZvFLz55zpUPWiYSD44JsZh3Lo8rLFNfWWTBVepuSB",
  "key16": "25bXi6hzEJB95zPJFUhy2cs8xzSbEwLvwqhu6fMAjCo8dAT14WJY8Tx92CWEHuDb7GKJE4xhX2k4RiuvL7EBp43P",
  "key17": "2qqNNazBbLtZ27mLJujYsdmpkatfjczJ3kiTBoZyfyZZtx4voUJH5Xo6gnKpTB11W9fsrwW7Hp7RsvDKpZVkTwEr",
  "key18": "2ojEJ7wceQdY4xgPCAVWN5LGhuMvTsLHU2eY5WoTbNdxKgpPcUZQTKzkLuu6eSRKk6dXfq3P7qrAUBtxopgaWVe8",
  "key19": "2tR5KgAR8FvDZ4eru61dtHhGgugFqXm9GL5DmF3gL7WZaJL3EmVmujTc92s4HvBudyFEsKibtPHJrwzVSvkVpAkZ",
  "key20": "382kdeEpvkQ8HphaAZgbXwBj3iAFfeKyVmKRZKkxuFw6CgKeU7P7ARmY9nrTzVioH1Lg2Xhe1N3a1pd8yLFxCyeu",
  "key21": "5k7ZebJJVsQSkmLvYdvRBvwBut2KFMuB6xgCGQBQEuRRcfH9oSxQhd8cvxW61b8ZWsV2iDUymNkLb3Ph3tLiYwac",
  "key22": "2gHbYpMRSCsHnCxUWPs5amzrEqq6a7ApRg7fPmpuxUVYnqu4ZE88QLHN8EGcKsXans84FHaTM4X5258DvjUdU3aa",
  "key23": "4ATMifz1HsvaFE2GVmD4DxDQZVgwH6XcDYJNNuFRbhLuszcgYvevwCZGWNuQ7QcVYBuGGSjiN1Ps4pvJkE1w9fdE",
  "key24": "5t5B9PFtzyPsoY3EpxdeY533NdPDtcr2N3eetfKfUi5PD3PV2KZP825Eqqrg4uzwF7qGijhumsXYW3ddJdb8KyBi",
  "key25": "tetWJVonYQMFzcGkuGEErtH3xkjykCy5KqdDzKX99ojM58eTDrhjGTVEtFKRBc5sLs5pjtGJci2b9WAmkridMvq",
  "key26": "nCEjvX6Wd4erHxTNCysvWN6QsrYniJVkvnr1wH7EfZN5p3sTgHe3gVK8AmKEa2Lb6MUJZGhoE5yqAMhNCUH8aLj",
  "key27": "4pWujdK7rkDRZuGjgKDccaYU6HJ6ifmv4nCRfjKw6rAy8VozB9M6CzKojgBewkaMzaPS6ZHNaG9tHhD4yX81umBx",
  "key28": "3WmAHyCghEDqcmjj7VcC6cuGatUUmQ84RW5AWKGyfrvqVjKLePPCtCzt6ohLEj6cPGsZWbxYo2Po3cSXaQMaZ1j6",
  "key29": "25jdZUiYQD46TE3iD5jbauogJ7B83AmzP1jio1aozHwzjHyGZPsF2MBBKfjoE8YvMHFt3xmcd2CKDkRivCBm2TUk",
  "key30": "4S7SB35t1RuSjhRJHRM3GMaspyAfLZ4PEsMV26hpxJQ33Q5wvpxv5k2mR8ReKoZqnPLW5VLykAV2W8ApMmXgCDd7",
  "key31": "2QB6z9eHXhbVGq46C4V9o6A2h7jd7Tar4cEdQwv6fc6A94goQGrSh1bULArwEUPYfGmED4oVReuZgbVozBEZbjN5",
  "key32": "vMYYjbDjbpLaCo8F9f9jcem3wrg7kpeNgdomTrNrLvsmfTDnAWDvM7VeF1bC1kWqkf6UWNggpkPhLQY7zwdAx4V",
  "key33": "2iu82krV36T4i1NoRDdEbUVZ3gubPruHkkLaqioUi6cdEdV6PpMmtLAbwu84HMTfYTTtwPdBwJjGw8gosAi9LZeM",
  "key34": "4Kpi7k9SESfPKiQuhvLc5jjB6gssd6qVDaYzQEBS45xRTb9wFnGXaRqmqHxWnXTSjNXq5P7zo1jPXDXcNtRPuAyn",
  "key35": "2NW5vSuV6j1qPL76cGnMkFxuRN6JhcHuENHdNkkFPi4nmeEBhxEuyUgV8dsVg1Gn1WcC2boFaCDCteH7TjdpPMFd",
  "key36": "3hnEfqFhFVY5pQEfrrEcUcbS5vMhpAja9KdfTnhz3yQhqkoTeQcEfdCqB1ZFDjn6WZdfWCgQKpUxJnVZxjiGyaXX",
  "key37": "614jMuyKgRgGq2PymhuEerBLwfSAY9kpcuG48XVve22qQXVBpzsMngYFbhaekXgMExjAKjD3SY1sDLxqurgzWNdX",
  "key38": "5CKWg4JVYH2dN71bgJPFPCxH4hDzNdvPR13PkffoCG977TWVLt4zxpfaM5G8kMWrGrKSts5zkrb3PdZsrMpY6f3J",
  "key39": "4vfqh3jfr1RxeKQaNZLyKZGC61BgUtioHnE75eTm8dEyyEvc3h6q6m4Czp8tQZPFoj4iam2avxPe9L5cQrQyYGNm",
  "key40": "123TjtkjJYjMsF2RUzEyun4gTYe2hqwcjMyPEoYDTuQ5Whitmg8NGSo4s7F2YnRY87tD4qL4rH7cpymD9eVLFFKh",
  "key41": "3CNpNaDnMArB6XxEcY7QREoy4ebDY3nAs67tdM2MrPBs86idpFvVJbNPtoRReBo5trvfTo9wjbkBYmBSZnuVR8Sk",
  "key42": "CUn2jzcwRKrU7vhbSq71uXmRBE2DfemC83rzQLGhNnyNooDnVpVnG3hEPnFG2Snbno3i9hcJW7vSUtpZhkU13VV",
  "key43": "8VXVkFenahbeh3ysq2snhPXVjGn5oQ3XEkBohrfnBrcU9s6ZqPndsr1PGHNHVQ7UgYcSD19duUsjB1Uc5wF99Wn",
  "key44": "5ogSMFmvfHvyegcntXSGzLSf9sa14gj3gem4hHQnf16X1KpZz9mERD2UzR9X5u3dBCUb34Bc495KhSNY3GGH48JX",
  "key45": "aNH76ZnGZHtwPA4MXTXc1BE821EGZomRGepNoezKu9crWvwxHckJNRHtGur9eoyiEh6qkLmtseKXzZnCQYjBntx"
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
