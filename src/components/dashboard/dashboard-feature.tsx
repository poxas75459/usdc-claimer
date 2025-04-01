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
    "3xDF37ND6bYUSBoXU4FrP2ZSrpRodztQ7jCHaZJBQp9q8A3m57dUfdQsEssYg9BECZvRgFtFWVSbxNY3BXHx9rqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ndv8hrghbRoggD8LaLxjPgreXBgyebUU1HoDs7azNx8wntgkeEUorZDJ8PRGQgZ6seDXMHFM47jz6hM6MeUYZ81",
  "key1": "2FULTzbyuVXJGwqK1jgC2YbRhbQ7pZzTc3CeffWcteo44AhqazXGsn6nhusbDTHr16RGEtGp96JVUcWvf2VgFEdb",
  "key2": "5ymd9FMeHKxvUPECGntw5kHGXsVatcAL7mS7Tmc5UAsAPHuTx9EqjKWJbLYidTLVCieZvKJkGZMGvAXJkNeWFEs3",
  "key3": "5HVHQhyYRv7GXpvULQVcy6A5mpfRzYBR8CdEDWM6JM3X5Y7HM9iWM3qnWrSfyefPBax7rr9srZuL17CRtUgtDicF",
  "key4": "3pG66DMEGKwpAUGykjuPceMAbJCb4rtPT9trWvgwFgG93wsZCeiiE4aQiEaeRBg1wPKjijCRavoRrEXqoYK386Ym",
  "key5": "2x8dmUfk8ZLySw3Htj4Fh84GgwsqZ4fPqB4yxUQkR671PAdrYg5RbuU1QYcW3FUaRg8H5mfRGnKa8LBLQka7GeYb",
  "key6": "2GhjhYn1Z8JX6m3LjgE5waSBAoAv5UcFfV5skLMRh6quDmP6BYydSnXyDUArnjraC2uNhEsXC6sh2kYnZacZMKJM",
  "key7": "5SC5stjbp3DsEmDfW8NdTDC7TnBdqEbVyXJUa97db3VxxRyTGUqyiWjxTzGCQxVYyMG4BgX9hJSN3o7hHKk2AVGK",
  "key8": "3VUfExhqBdRazhykno8pzjrYzFnktz7kdxuz5arSzzTnALcb3JcJr2YYkiwZhyH7H7BeK2wgqtqZWXUvXkWKNKmJ",
  "key9": "3cDaWzBaSqmz1oL6AEh58qf7FoVWbtqcdE8UM3Nkcn9cwzoj76k1K5ynGDyq2eN9aJPsqkXN23dLaPjXN2Q5VtfU",
  "key10": "4AZZWHqATtsuD5SZeLqkkiGwq9YHLWRdC9hmA3QBG79kpj4JJuUb7ac7eNu4WygyZjcES7K76WyPHJeye72tLmuS",
  "key11": "5g5svfUoAVnTnfDz6shwAv6WBnE2m1JPk8dwxpzJQqBPMRTnnpr47k3HkDe33zNMitWgwNDhpJJVkQVLHwpvf4oe",
  "key12": "4Q3D6QLCU4VdXYz1sAocs6uekoJShVRBHKz538WXcp1yMf8ZZyDm1uq4Us8FaSJjUuy83wmzJYKymuFH2g9RUBgj",
  "key13": "L4rtsDVWAWTVoRJUMCDp7M3Hop3pfQpiT653fBXDTBBQH1W42jyNrYiDRw5zHBiwHfFRW8d1SCWwTcicX7J9CiR",
  "key14": "mKGnrFhMdNG4TWvPnZAFcnKLfquSWLgstCFcizMmnBMKEvVJrMSfS2UpFPYWue6v1dQM7NxCb7s65LWTRgN9A9k",
  "key15": "3UMkC6K2UFXqLqJ92uUjLyQ4K6EmoUYgPTWuV9xoKQmuPKZDUr2ij4WUQVGAL5avGbiphe72FDYKWgvBXPnhbwdR",
  "key16": "2yHAMAe7PUuwQdvi8WwnWJJBu33LwxLPnGsuJzHVoYX9bJJJf9ZVPkAsDggRusNuan9LJenAGPB8bWSJSGicix6T",
  "key17": "2dhq7KGkn7w3Xce7opuvjzWLHsF7ucH2erLEK2xdi9urJ9B7axy99UyLH8pKbA7tejM9jJSfcm8bDNc94ZJboBY8",
  "key18": "3dYzbo8bworXf2XMqKRpgajKfUMcURbwYqefZe5dxcpwiEWM2nQVvgJRvcGaqdpEpbeY6EydPaKzTidtnDxkxyN3",
  "key19": "5Am6LY6UuKupjv1jz8EcvtC4VLfrq9pSHYJ9KQG5bfMJcvtwV8M1dfxWu28kGv9QzFpgxJp7cptyDpD87JtPtruT",
  "key20": "8MrqBCdvFLQ5goPf5scJ8LbtBrqAMkTa3hRvNb47XU8S1hgGn5nQMQZdbZcUd1uSL9cvpkhpXuWr6z3m5tYUrwx",
  "key21": "3mGHHLL6GPTDy4GK7ytyJHyTuTk8UPg1KG6B13Kb1NAMT4LGMp4VDvVfCxCgw9edmNmKpnEG8bcAq9B8VSRud9xh",
  "key22": "WsNAnwcYtmMUjUhKYHm4m5nJxCPATjrAj919Y5eCHYrsDUC2grWhHn8R6fR5nbtt8cSTbnJwtPQa7ChFFKNjJKn",
  "key23": "3Ec2XnfYnhYvzfPPNaXWh2TybNPfwEks5bUru1TkBQriadJ2RjtSKcW3S2VCtLGjaiRM46H69VEAigLz76pvUZ1H",
  "key24": "4RCSquL3j8DnCNc8nEVnYELT58aDQvmAvQ6eT2TDM3LNCTYmcTNkmVWxA43ZR2RoXjw3Xfor6bMaM61QapxkHSPc",
  "key25": "38PucCensteBfPQBPtbnMq5eXVYaNCBb42DyBWkVSxQ2DCrkrZPBCzNbUnVrVa6W6wZbUr5RcxejuMqmQt3PfnQj",
  "key26": "3KVHrUGD9zTqDZnYSDMNAWRs4uqmyBf1WcqrM895mEuTrZ8XRqcoJFD9caaSq9nQAU4NFRZStE8WUrCxBzHkPT4s",
  "key27": "5usLU7kPUnka7G9FnqnPoxvRG8ZsKJkDUd1ai4QuQhYYfgX94B42H1DQMGD7ApqabU8Dm9v4uSJpvZkB9HFFQGgc",
  "key28": "2XfB8hNs7e9stNKu1fsfvdzwVc8yuuHaWbV3ecrwFUGSG8pameM7FQasTRTDsF2b7xeVKpao8QdDS3inWbCDoDUy",
  "key29": "2zm7iP7D9R2Wfe5QtPdGtsaqCxj4QQChpedm5LMZEMHoQbrRPKjgjyzSTfz1e9SekyV3DApHcqVqq7ir9nEwLxPw",
  "key30": "DW2LwXhPfRrHZtNv5CFL1JQdPzy9BDT6oiBQuHiceKx89sTxTSAc182iiHUnh6neMsMVa9rDGjov9ACWQveZXib",
  "key31": "5mAJE4zUjpsxyzF98fmCTn1NcFXGSTTsgnwzLMJJqh1o2HQS7CqzHNJPb43VuH6pCwMkHRkeeYvMxNy9YSMgjB4M",
  "key32": "BafFQkNgyis4AckYu9FavHENDG7sUudLKU1K3KY4jiat9FVXGkic22XecftAFb4Pd8gbYMgwKzKd5BkGx1SPWo2",
  "key33": "3pUYYrNuWvBEirLNZYU3Z9YvH5gnjZVnQe7DNQc1cn7dQgrHaBmNeiei4soc9LqpiD726GDQbvfUB3iAwg1L8hm5",
  "key34": "4QgYPnyh3nRp2TuSDr8fRhAYC8J4rYyTnziikrWHmHhfbtkyLr4nRU4BbCmnTBxtehSRuXdszVACbxNyHjtCVukN",
  "key35": "5KXcY9owW7kVEsRfeB9U81EU9wMnVxektrCMpUayFHMxiJtZmJpWTY8nMPmjbEGYQdLPBsxjrArvcCB36DyPtM9q",
  "key36": "2AAMryS4eAsu8Nf17m6YpEFVhtNPEE4wwRZ4d51ByDPhAvJwATWXZD7eTMdw3zGAvvXrg5ThRXjXiSqM14tAbyE1",
  "key37": "2jQbB6YA54TYccbpTP9q12s88QG1tbMCwxXz1a1ju6hMqCw9ThCxSyPLPeMa6FQRsZgdQtTF2GAAAbsGNyRgUdDU",
  "key38": "5EMeJ7XC2dHwamTKvwi5QjTr3MfQtZitw9YqThARGJCJavaPc7owFmetT6dWHmCcXHUu6NLpzgEUqMYgRkqELngA",
  "key39": "5orakNDKasSxHjFP2rPaNdQttRAHqbVFfCxte8NsCKHEV179ptnWci8349U4dTkmnem5wCxnYGimCCWP71xSHF6k",
  "key40": "5txR3J16NBUVDsLpHTAm43sC7QLUozMmJHJ9dVxWM34Zo5jUsFAP3yE1BMTWQXFUGNbrWXNtMqL55Su6f1NMxFPU",
  "key41": "4txvPDFhkJw7tsjuHs7FqiqdAmHbnquimQv7cmd4bPJHxg54xnVbUV4apVRWtYtVxXLyLwYTmasMCWPEoFvSppRr",
  "key42": "2znzYRmmnsqNoiJhswrSYGhKz7U2DqNtXDRuwa31U98mjZRqRijjo8gf4Wdg4UKgFkaHkYyw5pXpgoqBQwB2MwQE",
  "key43": "52hqVQcZ1qTfrmhEpERYTpYmriyVJ839ajhD9ftdzbagPY6LNWLNaYMi9nhsbp7cEzviSZN6VWKQ2XLwLCfjXn2H",
  "key44": "22ovadQbh4Gxxunr2MPEyS48GqUFcsFDRbgPtTScuexZhXkHNgPTBsaXc3iKkfKZPvW9ikWcxEVGq51zqSckRdUT",
  "key45": "cqHoZPMRC7izhEzMpzGiTfZiiSMwHohpQBK32F55pxMdvbDAB32K3v5LJgo9bXJKuhX9MXjfPkzGcmKD2p6BPje",
  "key46": "5PdmP4sKk3hWtBJhe78CUJMM7MMpEfNm8t1G8FLLhnCi36pPdVmcUMVezz4BiquguAJ61DdghG3TCEnhVNoKFwLT"
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
