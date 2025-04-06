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
    "EKWFMT14S8ApSG6pFGisqhC5NQB6VEtd35mfCzqMNrauUEdprbjnGrixrRJ8YCjNL8gjYUcKdmmk4vbRDNsETB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUVPMfMQfc4TxSMk2uZFN1vNfWJAJ1EcuR74xgdYj4t3EGqZb5mypgWZTm3LEMsXSV9whSUDvSTqFfZRDaEXNj",
  "key1": "4FcMsKy8ywWSBSDtrxT4HbpTHm5W4ueoupwh8fJysPjrvG9DPpJdXE4HyFz8Dq9ht7XwTboWcQ1T2joq7KsBC2me",
  "key2": "5wBZF7Rq1eJE6oxSq9NLYMdM1EUb4eywHJfCKvV8WBAQMMushcMLKpn96BCohWqtuTZsCDXhottjjRgfHiBgt4cx",
  "key3": "34r1W9jNH6ZNhJ2zTytpJZ6MoU1QsBnpZgzxWgnciFKeESRQDnatPceZEsVmmadQ3KJq7QGp9WgJ1dzZdAD4jcVM",
  "key4": "pZZtZyn4q3VpaijQSsQ2NLxqacbdKbMRD2bwABTMBPCmsJ4oZH8Fd8pPCVe8oPd45VKkYvZPK6LKBoPbvxQFHKY",
  "key5": "3ZrzpSdwWg1iUcE1sjWWhAp8xjcn1msUpU1VBjjB16CFpmPA7PE4ApZNtR9TmQ9Uvcfbxs3uyrM7DEAuAoBzTkMP",
  "key6": "36uWkFLNYVB6xwZH8yuwFf1vGUJbwfLjf14GkRduQw3BMs9VJxMFYAHuRiSpFBGCZ9NsXVgQFa1GJZEJwhnn6Rrb",
  "key7": "yT6gzoeibmwHExUkw3GhF2HvwhzDLoEQ2Lzeec9cNT6XYX4KXbiuQzrPkTWd3ZQ4ttPGmrWo5idmN15JiDVYPqz",
  "key8": "BiwuqLDszePLBJRPYGsmUo2AJ6vNbpUwEAZsgGXQE2LqsewRa4AJFKhWEWTYuJDYMvmnm2C8BpS6cTTsPLJJuVz",
  "key9": "4436Rn5EqD5q7wjYjkCXHxrzvwKKjjvCdwAhDKGzSehyDq6MG7kAPPmhGqXX7sdBD8kJVq9kXkJvS7dz8rPYPc1e",
  "key10": "wFPUARSja2qvnggJp5AF1JfQPqWGXzsgf98gwgEYgFzaMLRzrdqnCTJ65MxLKjXwnWjKSXs34QQF44fcjaAqm3Z",
  "key11": "eMtgj4HDoMjz6BFs5PoD5PCLrjVNNccovq6KiWVcVQsj746gJChDVGaZTLXzzuAYpdGQhs6xTFCDekL1HqRKLeX",
  "key12": "3DwnH3YrdTLCRaGiZ7NqyKUjppbQK4j1FpuRQ6hYkGbfzbVrBNtaBgbbk6ZERdHJsFARnY7yEsQofD2RDtbZrCee",
  "key13": "QUqroSWCEWgpFMnadhqaeJ2ht75zpRaF5TZMqR9wiUt4Kj1GwMR5wrBdrLpB3EwtU67ZcRiwguQTkyjYuGiVfxd",
  "key14": "62MwhRVN7v59ktZSCuhwVo49HQr1MuZBFyJjc9fQjyNiZkZWbsuy7ij6esCfmbnkmEjAVQxa2giKjA6fUiuTpMv",
  "key15": "3aJF1S8uPiNrNTeHdJVEQeUxD7VUotYH4HPKcu9x9V5ekMDpEwafWwU2WVUZ4EGXqyuH2fcKsuQB46ZTSWwLhH1G",
  "key16": "4YUABKhNy4dfinM8wZ35tjFMsV2v9UNVcMQniM5wocmxLyF64J4sCvkDH2nNo8c3VBEXZ3gnLXY9tBJbrpWTf1Ng",
  "key17": "4WzHnK4EAjpxPjQ5N1sQrTbB2tLNwADjmfKceSejg3ccrFckZnw4w1r3wF4Auqty7DRAyGaugguFACcCdiDgUFf9",
  "key18": "5CQWyjq5BDjnMnpujmasVuUZ2v8YML7HwG6Bk2rS5Fn8i46AJbt4dLqpkJ1jRXGVS4ReKom6apoTQDrv2GbKEqY4",
  "key19": "2eo2vBpnVSie21Y5T8hcFS2sx8ptFhWYy53uKzN1jpoFDLVGxqtTFKrwszitQvpGJcVWpdwamUqmrLkj9vsjBaT",
  "key20": "4tzPT6mXqs5bWQv2GKLpussandD2SQXtDmem9o3MyGA3v7YNBEEE219BTvqj3Dnyc7T4zZ2zvsG1UwQEQm36hSU",
  "key21": "2ornScJECoAYCndVs7MCJKrN1qHqNokzZHCQriX6gxzmR5ZrHpNxhsRT1UBCLCECaraXppWHYjgQq5UsdEGyDRhv",
  "key22": "2JQpzU22AmZtAz5CEuvGxLmbnwgwmiNLGpRZzkA5J78NkhRSynLddKpUBWnARfc1cfzzNjyHeXTrqjEARNXWp1Ap",
  "key23": "3tShB9CJFgEDqPuxuS9CP1u58iSWJ8rquW7dCK9FKY4bcSQT3wRcg4njizpT9gKUqFpsFZvrefigiyF1L3xeBdXy",
  "key24": "5ijLMheerhZyttXpmzvZaeAWwmaudcE7AvfP6cWe7Fa8wtjurukLtr2G6n7qVTniaFPSjzvEePsbhvGJUQ5DzTqB",
  "key25": "5a6PG3cVtB1ADeDVfwUFvvJD18ECsnN46HwECPN65J2xeRLNAHRpzHXFzWz3HSybYvKGmoZeU82DmmAgnJFVPHTQ",
  "key26": "273gJALeVgBHuHKtyC8ZJ8frQRYDpxqJYpiqADkxnoTbyssYEMSivpmg4HEbe1PjzruHVw5mNGoke7iqL3mdRNqT",
  "key27": "24TRRdiCoNFQFhLDa1LGDLqJno6WpDC2fAqz3WLz1SyPMZLZxTFRTTqUpU9JT1LDTVsezwyPfyZVVfmUfjTebm4U",
  "key28": "36qTRgydX926D866TGjhgFA9buYFJj1cv6mNmdNYcyVNadfbSAtBN2dbw2Nku62HUtVQBPJxBL4924MPfMoSnXXD",
  "key29": "5ti1vgxaBxe1z2y37mUJ3khPrkx78tDiRWFfA6gt4iQAcNqSau6ECKMTheAqEk9WXM4AWoFX8UjHxqXXB57VvLHQ",
  "key30": "s3kQ3tdY6NnJoBL7PnGxRvBWrhrK4KSkzA71GWqtmY7FdR8T5AJFVnrzwcgG9pCuF5ZtJx3s3CTHhbAFw2baHUk",
  "key31": "5HRCgQN1CZrZEBroWqSUF4mPH8nheCPqKwGubyy46rmQnXvudH85MCDct625HokBb6zMTskG3X41ha9233LGG5PG",
  "key32": "26oLivP7P7N1xbJG3trLbjToeqQ5tF4Z7FEHqnMQtJCyGJoDrovD5ZomPmBXAa5cdS86TFPs137AwYi4mpWZPxWL",
  "key33": "5J3EGQRfR1vFWbuPSYP2AP2LDejx1HhaRY1MH8ZxMKMwqPzDQKEMsG2WFL86FjYDkDwDv2dKe9mcVNaKhDev6aA3",
  "key34": "2rndGHucPAXWrbQfBUjwtHskLDQunkkX3yimtW9AkU8mvwu5BjVHFdqn6PqUeHAMojTEFV2Yi9GU8qmpXpsWNfPS",
  "key35": "3pSLJukWjh5cofCZpcNGqKWiepfZgzR2hicjD1xD6aBZp2BwdALhfdb8F1TjRDs4Lbm4D5n5EHKqRAM4oj3uut71",
  "key36": "3z8wj7K7tovjHdLBauJxqtEZi5zkndfy1Ti74LRjQ6CEycmSqyT72k9mrkCZsyRvjWQizEHEzoCQvsxT8x2EpQDF"
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
