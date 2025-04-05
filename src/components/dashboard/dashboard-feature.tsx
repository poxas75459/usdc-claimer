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
    "4eRuKPX2RPe8gNw97vfHnaeUgjRkv8D22hjc3marK9B6u3PykrkALGn4BVyWAz31AJW2sNM7S7UFPQ1a9zizz7Sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QvSQDU996Lsb4QodkmagcxWq7889ZEmtro7LHpVri6YMMxuFPM3xKhhpBCUVjnzNYsZ8fVA2nWNPUAHANAarRWa",
  "key1": "2NX45mA9vvPnCrkFGETeHcCFVEa7KRaQJRWaQSgQE1zjFk6JLmuutrC2xKizPZEP3Zco9F4StUJgde7A6ZVjvWh8",
  "key2": "3NgtijRoa7aRUGp23M9DLUtEaXCG5QbXCgLdm1g6JuaDY9PpZPRNQkB5CcztXeaAmFtNvMFK3vsVBYGPARvVVukL",
  "key3": "63ULQuPWdNpPSFxtSSNzXGp163ssjbVZXXDyyvRAP89efwhgS4VZFJKer3j2sWwsAyzS83imSYmvbrSt9cuPgShZ",
  "key4": "3MCPmMU9SeQycvxbXNNBzbZjbJUceZfKy42b6mkSVVc5EHMkwYCWRdQcRpXPvQP6k8edJgGYQG78HmDkytHW5iEv",
  "key5": "5x3NzVRxy8mYqTbcAjAW47XfumMJrZTCeRDEkiy8TbPK7t1BHAVvXPdD3Jh2U7yqEj118aTM1adV34C9WSPNBeAe",
  "key6": "3pxXqiTKQj79eTrbj691kaGgbuY68oVgtpjMJ4wptoUXNVWmeqNabRt2buhrewcygKwn4DKfPb9L7HdNa5VBfxvC",
  "key7": "4AEEPiefgjPk4Z74BKm5NVCvyXwQEauqeUriuvQy1A6sohrLc2fwXEW2SSq2PAzuBcooAuFcGiB3HLpCSZWVY7wi",
  "key8": "5XesLSE8gk9CCgVEGDFeFdTQs2mGMi74k19dVsFbsBbZkGcPngcx4i9xvrgJKS2yyVahRkxsa5mYGt7q84XFx8oW",
  "key9": "4ZCy29Z5x7WhuAJbemj9JpwmH6w1oynYhfFbjy5kwa6xr42Sy7prYHPfR65piftZTPwhfHf3tAR2jvnW7XhTPSeA",
  "key10": "fHZYxGfiYwCC37UpyoPM1jL91BP5oqmmMe1fqkUUiGY9nq62h2gSP2Lo6NFyZD2wFDpWKMYuRT4NJZoZEaK1pQk",
  "key11": "5UpSYMrqf6VmPqA8WJacz93HA12RMbj5P4D9wrQAwG7NSbSJbXureUa1C4tG3kL74Ldfh312ewfUDUtbTcYW8CYg",
  "key12": "2ifDmHYyG91sxN9Z84FKuqxKFFc7uVzQpDHTf3aGZWrgEU782FNxBmVAtGb9ZdvTti2weeqyxk7xj78cLL9WyVA8",
  "key13": "35FDKXBFjsWN3eXTu3xQdCgyYH3RYHGtMLbSrhQmVM6TMBor8KDFw55gKwM3tBVXTfPd7ejAZJBfGYjw1yHfDbsY",
  "key14": "v39QF7VJnEp56U9h64QPJ5mZ3joRLkScUnyhxksJwJocv1VKdzB6WdwV27ZfHFAPBqmg6VaGvK9uDGRzXyZoHw6",
  "key15": "3Ux9neVdYZhLCzsZkvWsC2VecFkAzauJM2ghoQx4hXv17i9VJaQToKVYYPadFFUfJ6XMQuZbcxvpW6mqgCrkWA73",
  "key16": "21CP5aGSr48RRGkiQz3ThxqFjAFSYtWep9YWxi85KFovhwmUJmsNeLqqfw6NymNCqh2bHJAPgGm8igG5xrSXHRqK",
  "key17": "56zV47GbhiyX7GiU8Umopdt8XbibcshPdEK2C8Danq6CXLrS47CZHttMtHciBQpeFz7v4PpbAZB1NzbSpQAaMVsN",
  "key18": "5G9EQcQE2uLLczS24TRi3S9cFtDkrF5oRtgJXBsVyo7BmLZBgfieUNPdXgKydzaVsDXvRq95iLfgcKaVDcxadmDU",
  "key19": "5fDSQrJa7UQMKkwL3uZ7Yug6vwnZMjZYUs5Usr87fZk8JD3Y8MZPwoAq2ZRSh4eKMqdymUs88i5pJSQ7dSEZA2ou",
  "key20": "T9ayGLEN4uigrsNXv41ikLa4agcMxM39N6gQeQDj68vie1vYgGwn1wLFSAwFQHJ2EENJM3BTPonvgCNT9HLbENy",
  "key21": "TfmN6ookzQLJHbGXenBgTdtTedKmxC7BNMffgmVoq1VRbEhcYd2DVaWSc4kNEzomsnstcFZtt7Snbfe8E9cgEiz",
  "key22": "2MovWyPmX2UeshYQ7vV5DVcedrxirsePkZn8nNrEw4Ry4wvjpx1eLfhzRX9X6L4JmMpUTwfhn3eDPcab1xWF9ffS",
  "key23": "4QGBfa8N2rYKKNWp19k8d6paRsguBvvFg9F9NQfqHq9SHGYdRPYvcaKN5bpTFbQAdh5DW3s6Fkk1g1hhxSkJTC9y",
  "key24": "5zwjU3QLnReYqmjLxw2apDQFPgq4rv9mXn8aktTHLehzZpepu7HqbgzRpLRN7QzbqH4ceYxQJjosG9DnPezEhKRi",
  "key25": "5eoN3c2ajm5UqepRtnxAZDRSxXZKn6pYHvLZAPiefsWa5EZS43ig7mquH7xMYDUNMk9nXVE8g2m2ieDZ8GYTZ27g",
  "key26": "4iykJH4cHRe8TsDrJgaHNDYd2gHRufSrcqb7iyXWTZAoWDunVB2kKqLEYppmv2JYQbiUDbAm9qYhyMD6v9Pgax3Q",
  "key27": "XgD5WBwHHK7J3PdPjFUReU2QbZ2JfxgC8K4utQusgDRtoWNfYCqmPQLQdcWGQJhrFjsUzpqePFTHV5SekM8rd9f",
  "key28": "5PJeE6haaBtpFbrzNr6U5iAuCKU3v1XNBdbddQyuKU75x3xEQLWACHJ2kmi9QCuw9syLYtfX7gRf4UqZDmnec3rU",
  "key29": "RPZcWXu9AbnAEEyWbpN5zYsVNpVy7VYUcco7mU9afppb5yqzj1MHsA1KHoWwG3qCRv3azgABVRNSf6SPKwtbec1",
  "key30": "k3HkpYRAGZ7mR5Y1zpg2DhwMnabWjhydwH21s6BPfBEEL3q4FvKjDsmfFJYbu9vmJRvtqiisyxxbfaPTRcgeS5u",
  "key31": "66zxj2ypfpbmGhQydX8WHDKFddNkQpprNjWkMCunp9L6RA1sVikUEhzPJxR7JFfgpVwTZYzMUX9Ur6rKeXUjZaVi",
  "key32": "5F15uCSBavp34XeBeLDCeS1wH4KAyE2ATppFr3rJJ5kZuJsMp2NVXkHdBgJNA1E9Bry4T8JXy1i6WsmrFi97QjxX",
  "key33": "3Mkckj9LRX5G8Lx4kj1UcnGivycx6tuYVJmw544PVqUpq2xP3SMGqaxxhq7yY6Jm27Jua7M5tNgPdwqb1Wtsonzf",
  "key34": "RQ7Fy4KBmMwiUfnnen4ziAdcVypQT4co5ERkqcjPGLm3Zktp4gpbKZnsMxMb6bAQ1i1BeAfbAEfZnwvvdU5RRnp",
  "key35": "2Lrc8rLap8bKxJxZxTJwKYnmkNEGNVViSzLFP82FiMt8eKLDonmS6KQpmNg493uBTf7ZNz3LDpao9bVPz8P5Sw6T",
  "key36": "5zGYQZCc1GPFjkJmvWMS4wTTp7aeHsKkSoqrTXwAPERaEHNpHfHF849A3uAkYf5zd9Fg45mc6RZ8BzreDTReD64z",
  "key37": "hv5aG4Z3W2L6mgWnm2EcXAL5MneBu12Yd96Edmy4Bu1sRfMhBP2CCZgCfgJyuoZAqw7QJabX9T4DxCdFPLADFKJ",
  "key38": "3iQiHGbW6Z4nFdhnyJKLy8SxCa9na9uzb3DQ8NNCTYXP4Ei6w6vijwx3h2nQKE5dtS49F4MbjBecag2ctQYGj9x1"
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
