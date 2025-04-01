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
    "4omwpLFwp8htCC3XivZw3yxhK64MaBthRmMSDDiHETA6bCbGGn13BvEryp8SWGz1cH7RJctZdQgALoXKTNfM7Gnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UDoK9wg5c7jmoNpoQygybqyXw13etv6v5XNJW3NqHTj6CP66XZ3qxcfde1wcc1MY7xhsGBDAeZFvCziXn1vZriQ",
  "key1": "3tgMkPEfiL4c8HprXJDwQvpMGGxHc2oHoCS8TG5ww14iu3BpUWSA47zj1Uh6ZGuwe7bu5qkxDXNiibfZqbSrnUfq",
  "key2": "BHsWnQJaVpugxpwsFW7xkoGYTp4yB8h2m3CV7QAG1jsueSGvZ4wP3VyqkKtNVMQPDYyLjK842QWu6qw1CmP3aKD",
  "key3": "33mDMbaYV1Xf2jbAvqjkCgSEUnU1DT3ACrPm7AypAfCVeGMMJk3DZmkrscosoMcrefxJyRzL6UcHSm3zzwWFKaUu",
  "key4": "4PC9teGH97sVWDibv8UBs84gjk2i6oHnuLGgRADpJHZYLwt71b5bzEK4mD1rA9vK1DL39v5FuFFjfhJVmFoPAaGS",
  "key5": "3PoBzHtxs8yHU5iAZkVkppLnaRZEanvSPwLnYAXV46Cfhf9S35CFPdCmiw7eUty2TGJYuC411BksLQTLri6bMF5p",
  "key6": "3Eek8sWxWfWzuRUMuDEnQQvKx2G8suViMrLaJW4L4ip3zdBeYhwQhHSP2ue7Qmncyv3dDwJNCYxonRoe85Riouak",
  "key7": "Jf1GgvFTPqVqyNtn21bH2EdfCc4vBGW1WeyXdRHMQAF5BMfA34f6G8d61R1nGezRGYZ6gkhrDWtrpPRht88rzmk",
  "key8": "3uWG9rF5yGVrEsreVJXvPDRdkXyvjw9wivMRA282AtFyetUcE9kAc5zn9hFdyAHrZHQv9EnNtkEKYHXo7nteDBQe",
  "key9": "2VgacbEp1MkTe7GxSgMGuMNfoaMbfCnD7Z7zx92NfgtdNTYLdnHB6VwHhNZ4LJD92mPbyZ5G4Ch94vSisTKLuYMC",
  "key10": "3mWD9S4rZpQjrT88nzqAQWdGE1J5a73VmuYax8ER9yhvakAeZssowWau8LfVdZQjckLS7kLdzj3Hk333MdD3aWUp",
  "key11": "5ayJNWQFKHr2qsnZTTNt7L8JytCFrw9YgSaiXG85QKzDdpPLN4b9jX99MTBVPKRey2ocj5yoM4d4HJLLRidbBczz",
  "key12": "2j6A6Z6rqwY7ygaePvS6Ht1ocPeNCwcwXD5dNTPwfWVBSbW6qrekbWPRRQE1fmGTxSDDHM9jUpkUfY8jTB4WLdad",
  "key13": "544vfuj6AJEtdmCArpAvM617hPr7nnENiJZG7CFXoSQVEgCqhEpXYUxYgM1yDTswWNn6JgtGwpBSDchEvNh9mPkT",
  "key14": "2qfaWrRwb8GidLnCw2ptiKefJJ95rvyS7tHMMrnD5rdCdLyVYwssBLhZ2zTyuFpStj7sN2e2qhoJJRVqi6H67cpZ",
  "key15": "5dwYCKxohD38SXDQQ2V6iqKvyno6ftw3ibNqintkWoKcax8wa7PtuAT7BTrUpLMhcEyTKUSjpXLWAsvZRmSzG9WE",
  "key16": "FrXR7zXK1XZsSMecicEFZud6Vr95PxqtiVbbcV7vNDDbf4cK68MMVPeF23dZ6j5dxRoiUaa6YPQmk8G4YksJLF9",
  "key17": "3TeyMYEVmG6xXwYLxGyCcWi7N6Z3EU65WA7BE852voEdQxEzuiv23F8B7i8SuvxUnqLqsEHq6KoWCcEktgsCf8kx",
  "key18": "tjC6eR6y5osw872ot7YUu6x3QQk6uUe1gNvNyqmHqhNUsfwTjhCkYTHKpWeW17KvNJJannXMpBWWgwyfYkNKcSf",
  "key19": "3UL1hZjxVgKV4UPfq2cxfmXVqkm8XZ6kd1QvQsgbkwRsdTRv93cdLTrCB7h65zbtnbbVwC5VMAqXxSRthH8YED2S",
  "key20": "62NK6uFxRaoKL2G7RQfXSJaBrcDPf65ncLmZVsaafbGEogpj3K4S2EUWPg8Ha1unuYbSs8ehUoe6EYWRJgQFPZPY",
  "key21": "3xn6diRKvcupDCoRh3uNW6wYP8uf2xBvqvBt6Devg2eK5d7cUkhBW54wXX788LAjs5YvsfKiVXgHebDeFJM7K46Y",
  "key22": "2gka7Aup5njDc5zUuZxrnomaPk1uRgkY4pjiN3DvTFDrqKHeudxV9moeEsF3ciaq5HhYona1Hxrxcpwk7dcPnB7h",
  "key23": "3Pf6Dwb5i8fpYmjavDnAXSN2btdMNijGUjrqdsivCBBcsDwFYuX5K2EetS6vGxqf4mSD2qVBo5o4LP3jXzYinaFu",
  "key24": "5nB3PXJYSetNr24Sfos9ruZgXXR9ekpYUnqZtFkuM1q6jZcZaqVgxcz9EVPhELNMb7SuZDWtPpmwXwk89NbHxfgr",
  "key25": "azTfkJ6Bm3WFkLrWaR6F7kZYvb43hqd8mL2Lu31ygDte8zHJLEQ1eVc5Z5xe24fCuhnQ4iFW3ZgVADSa65HK9AY",
  "key26": "4hm7uJ914Bv5BYndTqPRfrdrMLGBUyhBhgVJxLtCHJeWBv4ByqcD3A6ypRmXutis2v75fAbFgiD5z3Rykn4Qtdgx",
  "key27": "4BGwdiw4zAaBDS4qDKWf3EFWYzDb9izt9QC8sfiuGeA3zzm81uxb9gNf5MU2WmBMoHCWjfVQLDWY6yWp9iY5oNPk",
  "key28": "Dy63KDnQUUvWQsQEyMa32YttsLdXGrCySwXHWfeQtxKBS9426SodRbGb4oa2wXNvNoq4nGRskPt4coHSJZjCzNP",
  "key29": "5hZgj8ezFN4ahX2V9Fbb14zy17jXpyTFbYBjbfRVAYb7xHdkVvedR62Bz4j4ZFhSRywmLiCgxon32Z1UYPfZEkMS",
  "key30": "5eTBt4xuPtCFi2izvMXWeLJmZC7Qar8mYktqowzv6diAphjfr21Gbz4yHhsBMBget7tLvsXEtqppXkYYSZ7Tvjwd",
  "key31": "Pg7Qvm4f26XmqVYrE2VLRDPjgweQ7BYHQUZK18S4yS3MCWCyWy1yrNNTXwaxdxPASsXA6ykeXMHZEyjzbFc1xGp",
  "key32": "2E4Yxcf49kfFxuqVf4AiW2xyQbrxefChCqT4g4uMPumefSmMtyaPfTnqeTEW7J6dMFCfZDemnFJfkZrGqCRacRbQ",
  "key33": "4EfjZauyX5NHNbYMTkuCGZ1MDRdEDHayZAhUhCuPZxrB117cbeM2excdMMch8dKbpUxuLnSsFgwA1mW8Dn26FPVD"
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
