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
    "5keFdGermzc3KLRNhRTrs9jjMdyqwbjftaPtc3Gz89rf8G2tVDNCcH71q9JSFbG1dac3WWCmyicZ1FDmN66X7gt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEDmNN1SnfjB421Uhm5Eo4qjZ9LFxPYHhJMzAeH1biC4f5nREjWEqDCoDqvnNfsE3VKWC7bCVkEbJ2yMBNNoVYG",
  "key1": "3UeSiNKYHaB2CQ4k2CmFKFJKWVEZSL9xctwQK2JZ2QLq8UYi9B4nvh4FbpQXDSsoyrGmYFTpT7FJpja5bDyyiVY6",
  "key2": "3yesnMixmw7F3F42iqKgwnzmQKMVeEN1mCRhJ8XfgtffFhxLwQKCw3xuV4phDniZC7A25cGN4vm2i3V3sv5Bk9a5",
  "key3": "2ktwYUGQ2kdSKBQ5RsbNDhvQmqy6yVHoVruQSzLM2ipD8Hkutup3cWmRP9AdbNmd6F4ECTT19EH6vwgDJjc8zBfc",
  "key4": "4d67zwUCJnvHYgfu5qpbBw68KHSR5Jy2tAgSw24aoyitqY2csKLnyHG9pXprCuRfFSacuoh88vY1yjLcwH1yjJpx",
  "key5": "5mYYtWeXgFxUJm9Vpkb3Gfmmzn1k2ptmr8YZpmVBmsVEjFVZDs1Yf5i5CAZ68sGb6fmWrn8FN5QCfZvAL1o5emNf",
  "key6": "9quzeg8JkPZCKEoEeQrnNrGh7w5baW6V5R1yukhJot9wBc5SuskYfo44436DrxwNg62XFtX5RcBSFSdhbmZK4F3",
  "key7": "2UMQ6C2JW1MfNxLXEtxMCrmVMJKomffZNLe5cfSi2kYwqaW6XSJ63WHW6PidGyBYNmzFmLWf4fxNRXVp8d4HSGmk",
  "key8": "4pwH5GxAEBvfK9sXM3LS3gjFZ4vBykjas32PeU1emGet1jauZ3bN4At6Hf39wpGimmjYkHBEDbkWwwwjJh54vWuW",
  "key9": "3TEBgxu6bjuiRu4qF21wyUEv9udvpL4pVMJiTJjFsBeQ1QSMetrdHS89Hr2eP4rzdamGXxVHe874ibn226esGHtc",
  "key10": "4fAQqr6cksnaGk9UBNhdJPLh1xM5rSx8mpPub5vJayGGuDoR8qhhFDStEnBgvhq7bSxpBmrqDguZGxVxT5GDct9J",
  "key11": "5A3cQZrGTD7XtWi92SdVqwKuZa8quCnT49nwYqcVA8W51NMYH33p73JDZAUMzXpVRra3mPpFenywAAHDRiXVR8go",
  "key12": "46o6miHu7VaEfSi3E4KSEgswGdUvfCxMFys7kiFAWRY3tbwHHBjkCrUaciSaynMZs6F6faoVgpsSuTPBqkL2LNXo",
  "key13": "2RygtDF3yRcmfPB1FUFuVxPuQjX86m3cDDswvJkpXzTBY2GvWfLhbPGUhJAgnUokDzQNmUeTeiUswx1vb29XUdEg",
  "key14": "286xfLTBK1EjnUoFx9aQ1VQ3JCJ6nspWHfd6x6BazRBFEVeMBL7DUjcPvqGd9WSyA8ztftm6qTXpJfkqrbXHtrwh",
  "key15": "66PxZ1f82DmDYnfJN6BAoGqKq81xaxw44QDDGNJjG3cE7RLHu2zwN2LQBKaWKTV7CYduCNpW9J3MieLHSVFCqTHx",
  "key16": "4SQYddswC8AXAi1BvvehPJStVvS9DYuAQYxiUjriAcJqY7HFGjJUKcfHnnZ4G264nx7CGw3VrfqBd14BQTN2sP5m",
  "key17": "55LnNAsSnxMKe27USfUQWRAifbPJ4NqL2ozmVLdiKA7E2XJYMFVLLdAwxpk7vzRHppZVzXzSfi4G7D5oi6rfDASi",
  "key18": "4jZ5TtkvLoBUsHVtWizpnRj7LHZwpmfd5rr9ohWokL8M2evSqZmJ2piHykuhB1a15D4XSfBn1nCqLsc3UBGqsf7D",
  "key19": "4RMfHbt5Rx1xnP66sXEujPQ9XUz5Yeq9G9k8ULUw8sm2rXpQrYHB2JvT7pQWdfa8zfA77Y3efUQ8t45NUKardXPD",
  "key20": "3n8Rryj24B1j1VRpUeeZ943VNpxsEdSeRcUS3B2FNAV6yHrkVmYrxtBdhFJfHbupn5qgMFjtUFRocMRvbbFpB96K",
  "key21": "5o8K15rBqFwq5xmos4Sf5cyiNVRkABvYFPTz1eB7oCFUUmcukSrnxsqNFV7K6qbfrktbngNkuJoNQsQrVd2DDjtR",
  "key22": "xQ1bwctAWCpFv5kAryRWjMgVhiEi5dAnQH3VHaBhbRo1gY7QR7XEoJUE7JFYcgWCNiVz1wFmMouJUZGa3CMNRrn",
  "key23": "5VY3eeWv7mWtbALnWbSDVrWch6zCQEkAD9NoYRFsCDRhbqyue7xGCepjbDEvSp5BNaNkFyJ12vEZFgpFzxwfUaJa",
  "key24": "2mvhvhAeHjzLecS43tKpjoUJdHhoMMNucPuQ3weHhVkWjncqyt9Ud9WLGid4sTJhCoNX2YxG4K3HA43nsduXecEA",
  "key25": "nju94Cy1oooy3vNvRVApQSf8q33oMFovZP2SFx4pykQXiDsxhu5cNFGP8vGBbEs6tmGSwJZViT9etVRzyVKRBzW",
  "key26": "x2sTZn6apnkDY51GUEhnmMeB2NSsV62mtW7p5VbDosRY8uEPHsLij1vdXQeMgf1u8jL2hCr42FMo5TYaeQK3tCE",
  "key27": "5qQi6rcowtsjPaBb7GSe3e6NbJNEcSfuzcaVC82zJaSpSLoebT9vFi44DL3r6ZDCy2Yui9rDpgvfnscAtXkRMpZy",
  "key28": "8LiEAWYx1QTxFrt4jQs5iKRh1Y1na8YkxFbTTzQZLsN9rVaoErzYowSUdBrnVKLMhQNUNmeST9jg2Laxq5bityx",
  "key29": "nNkb2rjbyw2uiJ7Zg2roEi3WBCSosDdqWfbq3wRyEGzMABS8CBqtNQDNc67Uacq2ZUffXvLtnm7vj58fnLKJoRJ",
  "key30": "3kVpr9DbUV1XDsHyRiLGF7FRJdDqNX56LBNtRqf1QmcxtwkmXgooxdYEYcJE7iVWZS3Dbi5YHW8oXpoL1iA32Mcs",
  "key31": "4xyKfNyu8kcscT8mQXMmUTG9DZgcYohrbneuSguJT2U6YBH4FkAFuTmkdxB1AA6PmjxjVDiH6Pv5gFuVgWpDYrCL",
  "key32": "iRY6SNzEgSw3xHuLaCizR9Ltw6r3NWjuhGhNJ78LoDAdqXWpgDXviKTfD1MrTK2PxBdX5Ej83wsdk1E2HrMtWxd",
  "key33": "4y7oDCz1yVQkJXg7Y2qQt75snt8pKM5VGEM4kNMX2T5b5q2MFCXi6ts4Sfjagok8ndCAZpyF8TgafHggvXb8b7bB",
  "key34": "2XgaobqEa2K5JBQgexsPiCc47RiXj9PC2hnpJ49N4umthF9aTjzftPGkH9kYeLzi7Sg3n7yQM5HKkjoY5oYhBEdp",
  "key35": "4h8rafacihCqYuPsmmMLuTJYFLeGcgLRyCDBwLVGqb3qfgM3bDb6CX1y5nbk7MmARCM2RgcK9Cocb23ayPLB5JFi",
  "key36": "3jBPQoQJdWiKAAszWjz5nSruKUgt4DFEYEMk5HCnmugjB1FRHmAt3aMPU8h5S247dLfkyCzh2FsKHMoQShmmJgiB",
  "key37": "523AqZiyg2JM6KszvPbsPeraycw5w8ifMxr7yeserdE8B1TbgkERTFJWq4QGDiiUUWKJM4xtT1RZCKfd5b7mKj5V",
  "key38": "ZkTB8D9nJjvi8pJm8UAptYwoH4JsSNRPuTACsHgVipg2cU1V3wHCkuus2QbKg6K7kRefFDDAACL1CUpfoC9qwXP",
  "key39": "4NF7pscLuP8kKi3HkqE57N1GvHNex5phYbYhqKU51D2XTTatWSTK9akViuyTJX3BeMjqNTUt3NccZteLcWj86spz",
  "key40": "3eMuaUcMVmLDivKEK61NxiQD7vohNRdK9sedjfo86qKrZoZACcXxcuoeUad1wwBrii8cqgYuMr3R2e8T2eUy6qmf"
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
