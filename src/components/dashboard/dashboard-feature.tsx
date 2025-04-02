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
    "3G1cqtQ3Dsvk9qRNVV8HttrfUoWYUQswiqAG58NDi4wdPb8Js7V8m6x6yeHsAF5L6vJ11TP6CEhCkURuvyztzy4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NaLFY3ksXPgh6riEnNT8DYANmpHYduwyr12kSBGrhXQRtBd8J5srHqEbi8HWJhWGYin3xMD3VgKjMqCbRR7rrVt",
  "key1": "2ZVjg9NX99dE8JiNV1fdNXKSZoKPdetMyaoRahPa6L7NUX1gR6o8jTzPNqXqL2VzMuN6Ri8y8HYCJDkecHUTivee",
  "key2": "4c4fwy58p8oUXoq6vkSMgBTnWaHASEvhwfSyjGh6VQiPXTnk5x6MszxekuWssHuZgwr3K6hsoTzHeSrrQK6GBGFy",
  "key3": "362gUFcmNRDPs4SRuxPMsoNbdZ5d4VgchZmMdSSG9gaJLmweCLZdkFJsNkSmQFF7zFYC2nsEwxQcwca5cgcvMQpc",
  "key4": "522RQEKKiKJUCWd6dopcrmsxCvMNEBx4oLknNwxRGasG4VGS5bKNMmBRt6VhGSW7o6deoHEW8Kwu1mCrqR5oKsvz",
  "key5": "5VVwSiA6dKffZU5vkegBPGPrbyP7QAvJJBgei62GjHd9FGANj5p5tCYKPtq2YRMiaX35ZnP9cGoSqgFzwEMJBnru",
  "key6": "285jLEZJWByFJg7Y5q8bS1y1iHBxpfrBtwnjDvRw2x7RwEQfTraSGxosc1esJ6AxzfTWHgUze8RaWxHTvgUVZppy",
  "key7": "b1KnUPK3c1dMmnbndBqvEmSfBwdorddxTJPSe23qYtECvzYDguy9B4Qix73GWTN7F5TGf8BGrBSL9Ajm7JF8RPM",
  "key8": "2gJU2HNtXtV6iFt14fgZjB6EKiu61ePADmLfAJrt6aAAmKuoYaZCwj5uBWLqWU29Kf2KZPs2XYgU4axo1LCkQNjT",
  "key9": "3BxQL9p73SWnr3xQf4AVfFoUNETTC4kQpnP7881RuHWMYH9HMCxqN3UwqggWh18LVToZp4LS2bqN4UKZM8yzgBhs",
  "key10": "2WCvj5dGCpVBWbrrsdeKkpXAC6opgjEPunJGprpqRcMSgr2oYxo4v5jPm6y7LiCxRZbKDaWk1tCeCyheku9mWBqc",
  "key11": "5mrBKSbskTrN4gTMMbkoE4RGKA2u6tysQaUGdxbSEsKCvMNZqHpeZp5sk3QiuugLCXdkcyx2Tj9uZZvPDTeSfZpq",
  "key12": "2cxCMoePTtXq3HeQbEdEqb23NqbgXhL9KUikpjLujgv5GN1QjGVbn9v3WbL2RRbU2DrRtfD7cv6dynVKKCZJEemR",
  "key13": "3jybFVCqqxzf5bxMpuZSWBw6QNCMb5n5CJHf7D9Xg4Lanyj4VppCYcH4oFFLmw2yZdbnzjdxrhc6y5EQZSE5H3Ra",
  "key14": "CBawjfpjC6bvxJhzb9Wu5JLPKrqNMjZFjPw2krp323z5pxsQRbNdEVfZYy4CPwjU3sWgv9zAaQ4kTHcKrnr7cps",
  "key15": "4ciseAEDwRVMK2ekoTPxEvrUTDidJSAYDhznBE2HC1bpj7gwgozPmX6cKXdeXYYJHapNPvEc7egamirWSoWmAtnx",
  "key16": "rqgJC27rjzpRB4oHyRHeqZ37JzmhDJPa5CHqhvJL8w9JXHXRAWzWMdG6Q9YmLhn5pX7FMWnD7f6EwqdFdEtDPmK",
  "key17": "3FFKiTJb5DMXtpe2qA2hPSbfBcqtFs6k51D26HTCup94jQRF6DDqrnhL85vZM1vntpSca48C5RvG5eEHjSmf3wij",
  "key18": "4R7H6qswAtt5Ti6xrNwFgivbKW7fvEtZhNXg18oQ1d81fT5HooFuLJQqyYhQU4mKPRf4X9zaiJvYfcqGx43y6vH5",
  "key19": "2rL4vdVPqc7RaJNASRYhSF4rYHCqUz1FRyccV3PZdUj9Cj7oNUgFYJHJDmbcu1hvGMo9TxKvkTuK4bWZyPuSPRXX",
  "key20": "JtKN18SMBcXYMH3d9avhEeqqMxcrmR52BqxioSks4NRJZG6iawUzk9YVCgAFnUXzk6J5kAY4bDbB3jBiv3HAUr7",
  "key21": "5PV4hdMw5U85euKLePAJhZdRoTCCgvR7MJYydb1N4btoM6oPnieN4eQ1eEnvzxtQE6Ez8DqJim2KYGYPDtbwSgh4",
  "key22": "4tkUz7ECEtnR7cdKfE4AmQYqnbmDzNFLXgB8rhpRvcC8NaQ2DgRFnkiCEZMakks4acfHoTRRdeF8B648eL9QHsLz",
  "key23": "2gybuzELEC5PfiAFSTW94ytCrz4KYhu1HL8H5dsnwVQBEGpzj8NYBoWZnLZKrJZB6MGf9pdV8T527kBk5ryk9XKX",
  "key24": "4CD8JN2XTNcYy1xPLMn6wczV4f54C6p3MGRonCXdWy5icuPfAK232KbFEMP9WQrq5BzfwRfteDqZFSpowAMs78Ft",
  "key25": "5rRqTmknF2K2RPJt4wMrobLnyGioVE6TFVBnNbEk4evW1CdnMft2keW4Bee6Cn17EQgqBhbPQRUUprM21y8ckrG6",
  "key26": "4G2ACm39j6TjRmwbbfYgB2acSxay2ew6HNvgGBtEG3rb4yKCiwXRGqmjgxeRhLbJ3NdKgBEB2t79HxWpAYjyveGg",
  "key27": "62AH1uMs3EjFbXiJ5cNfJhaouJhVAXiuarimu55Zawo3fJF2ZvPLk4kqHv3usNajHVKVv6nvBhpXAdxCFERNFjvn",
  "key28": "38WQmwG18gF8LyLRuYq86oBXWd62MHg9AiMC4CbsVwjrLDTzHQcGp16UBwbo7jZKnmRXesh3DVL9ii1MuZanzPzs",
  "key29": "4aypvZ7DxLVQ59RACTWjVpueob3NhXHPkuR77ZWrQrwMPkAg63DLDbLj8dQiWMbz2fb42E9RJwrRNtMLi7LzGd3C",
  "key30": "kdPMbyCo5Zdwfzzjg3qMGrSmN8pGTAWxkJkwehZPNUnTxXJ7NGRsbZCyemWV1cJr5fnU8uKQXgEzS5iEfL8pPLA",
  "key31": "3mx2hkXjomogHLCmvYGeEu1SQTdJUgxXmrMnDYut8eWwnrJYTRMa1eRpe1YwSeDE9CjtiCSQJbQWZmrmwTSMSQbb",
  "key32": "2TV9KjSbyU1TfqxbR1UzGRhG5NEhBK1c2iG9Ew5sAvi8etFzyacCSXLMaeNByA4Sf45NyaMfCVGyQyUgwZEU9FKi",
  "key33": "iRLMYH98jctwAeiKNvGdq3zNJjVysXq3UgPCiVXZEVeqyBrAp1YyB6BXgQoKmgSgpTHLU5k28d6DMbyF1qQyEmh"
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
