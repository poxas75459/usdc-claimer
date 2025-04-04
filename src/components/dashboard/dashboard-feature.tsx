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
    "2baQ9e8jU6FAarKusiHj6LMpgC6xA5ipiwGDiA1ebWz6AqZR36j97VT4pm8aUDkc19Mif9TAyUYaastf53egAGqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UnnVg4qkKTJvLzKT2HSSrkN7N9hUiRkSQqFb43HA5FAPcciebUEbjwCMcXAYWgLpFb6rmqzGxZd3qtGMGiCqQ8Q",
  "key1": "3xn27PbQUoPpnt5LirSPhDBkJNRhz1SKC4op71F6mYAdkaaErjcLLLUMJm1LXttx7gGtPRMmwJwYqWXgCErxRUM4",
  "key2": "3wrzmJVA15XiomY18XVnDwh9JMypjqZxz4EqMG1jazMKwRTG12Qqg7hJhMiB2bp9SJtoP1dn2uzPyHYBhrfzCrh9",
  "key3": "24mpycqKYvNyqTKRScFCFPvrJdiYgw658gLHKhcbnVfWfFbHP3ZB8x9aSixBwufuNKMDULV5tGpFdvF8is7h25T2",
  "key4": "x2RAMiMvMgjMSuwtQ5nbR41Xmhofnvd3DQDC9U1WW8NbBhkmUwEPK5ajFN6ywS5ptcNjFC2nvJPLyQbGzUrtYF9",
  "key5": "2PSwKVspQvbuCisdhfaFZTBXKTZmBR8QvocWUXyQSNN2BK1TjvNox4fzGhwioZ2oFYLXHpcZo1J4iGUibu4Vf6Rq",
  "key6": "231b4GFq4wDaMc1tAhHCwgDfGSBXUY5ouLx5FsaKQ3Z4arAx4KZDQB6BD6J8xhPJv92bePpJLJDCVw46t8ATQFWt",
  "key7": "3zbWoW7p6RQd4EAcfXuWmp34brS42MhfGT5L5npcMzTzeX7PokWdcR9GWaY77nwTLyaRiBUGCf4jYXesYYsWbVDV",
  "key8": "5oHNy2diNXpSKdFf3DWWummRvA1am3ZEfvc5du7DXgEATKrg9tUzxyLTy8yqfNhXxzSc1WsSGzPziY8mB5vxNKQp",
  "key9": "sdcco6A4g3yR82262bvijNnSUcyVvoVGD58VG19k3wgQoyaBWgjuDgX8bdRbQnLcdepg6jBeigQozaJ1s3mZcVv",
  "key10": "3nS9AmqvG41ULR4JP1QG96iH6jVHMdgRZyi7aD3QiSpxk5sXaW5NwSZU657efnN5K9KuoNbaNgyUWNVwR8TCC9hH",
  "key11": "5guWM8UVJxhBkBiK3FoBukZsqHyeLJujfpBk4GUMoTCsLAYs5kGsezZqNaCGc19oaqAu2XUZVrixXCy5zaTbUHhn",
  "key12": "RFVEidXsAbwQtnsjMjdmvmaH7TesDLjjTg3HcZBRHFHkgnokJtLthCJ944CGUGmq3Vpdxwq996MUT7UUyrtUUQ1",
  "key13": "5XUu4yZ3x1oEGu43Uu5ZEGZ13L9J3xEaHb5prvWvLR3XBWZ6EMGmkjgw4GmaeV2NNr44UxJNK6B1rZgriHCnYDis",
  "key14": "55QBPqjgLaqsNVrkdQSr2kdUWCDoXsGGqRjDMdAyjxKywjMb4dWrmMg49re1uaUDa6oqWEeW6rXVMvjshZzRYeXo",
  "key15": "4fopvjrPxcsg7u42GddDjJT3ZevahE1SCeT3yDvWBHRTH1SzR8ytnwuhfoY12NoPhQYcKiaAzWYfLVtBqc9VdVqF",
  "key16": "2Hytkhtdx71WJqHzV1RtwVAJRDf8JBfattfWsRppv11iJnssHgwJcYxx7x6CgHpXrpzNLwGuxkdnmrNkWq8yQ1XY",
  "key17": "29qqaFUpLo6sNp8VPA86WkUbLz88H4hEgoFcGkr5qyYjwg2GJKFcC8yZjmFJcxu8tA6Zd7qDUy9cf2f3U5hT4gxA",
  "key18": "fyNUcQa36NFn1gd4JaCtBaTWLgQeYRpKQVNdjC6U2nhcfT7Ex9M4iSoRxZbUPi2RjXtqStvtjEubsVdW9tmV4Ta",
  "key19": "QEJT9MXn9DAu5DaUEGMJyny9X2i9U4DDZ2nPoKnohFfxfe2iWYesV4t9QsTBBYqWT3isXvS584WFMoo5zvHoDHx",
  "key20": "5x8VM1XERYETTUnZSddSN2nEjK55ajJa8qBm9zW3USh83e2tG8qZKfddWQ1wgUYE2wAYWzdrgFUeZ33qQ2nh2sXb",
  "key21": "2ARLtX8m6yrJrBmvys6FXBhqFkE3BGzwf48o4snYmuXYwhJxyQNHN1WeQYy5cV7TTrq7mRJFzwY4vyKQsFF7mvmc",
  "key22": "5n9LT1467LkqDGhxE8doCr2bvSTcfX7wjZbKrzUTAzFouJri86iNdwf9ZVAcJpng3UpkAw9svtxadSMeufcFqcT9",
  "key23": "2vRUdWxf3dKJ1Hhq6cJf9YWnmwWfnaYAr6MBjKCETndFKY79aVemZnsuKRCZKj8TJSgBpb3A9nYxfj7SrChdJDsL",
  "key24": "3afbz4swV8sLqX6QZ79iiMRh2HaaP9ydr4iEoJi7YvttbmD7n7kXRDvspzaYUAMQrKaqJfS94c4dnjJHXgiwvDDB",
  "key25": "2imF9fpuAHF2hPj89Eq5ATWKiqLUH5VpjzN3qW7AXfghHtMDu648PnwLyHxbUUFLrvAgLTEcy2XQsChTEzXSKjtR",
  "key26": "45hTBgjCAHvenm1PsftMuacW1WJMvec64baa4BbVruZu5UpKN31zr9Z9iZEQ54Seda14zkETJTs4NFZ4apkjvd4w",
  "key27": "2TqrndoKziqcqMPKKT6CxkfSaXKraB4Ex5jbogoMr2EK5NYvAdwVnxqaMnijUtudu9o6M77vU2VCDFztofHtDMP1",
  "key28": "6To8G8PhN6Xj97NZpvcpYYB2EHRDbTPZhXwGD56fuTkdfkD3MxCntWxaW8Ygiw6b5oBafXY5Sd5bAPZbbUwtoGZ",
  "key29": "Vi87m87hLNuzeNQVDzK1BmGdhSm5M1GWXQP2wgN4X6TKhriS5x1jgcmJvzxtXmL36bdoJ7P5EXK5tCNEubpkccV",
  "key30": "5trwTadWv2EHwsLTXamqGSqzsdPj1n2RDaAgRQmJ6XYUsJtwYggpDhT4PdbocWU6hKUDKk6EY9MLUXgA3NjeTjcj",
  "key31": "5dAZ61pqyGccpBqSeGNJaVAbdVYwhwuixGF6yy6wDYwJQH1UqJeQA6wbhqKqg7z9f6T35LmFG33CLtMc3ah2wLBr",
  "key32": "4QMx34AuHEDz6THHQCUxcV8mBsfrduRZKpXrxhRME6oYcu6Q8xixiZ1kCqRBo3D7QBMjfbFkPPS3HqoPpAV4aHUQ",
  "key33": "33V8beeitkXV2iobzy71mghZN9QL4zzCjrFMfrkwaSooJoXXNPMfYC1RTTiSjNZhcmy1BANdSdZJKkX3CeMRFYvV",
  "key34": "5KNqxWYLKh5aHRaakTRWny6vYsLB5SeXR4RXg7MG4bFEAjC4sd5JWk1FJMEejAYbeAYK5crgakTSDNtyMZrhdhZg",
  "key35": "2EEVtkywoFxwVtmwgvdnNFtt7BX12f1EXjaGMjuyRWVRhzCBvr8htJqSp3t4bYt5TJ6aK9HRgNgH9uP9Uyw2geLM"
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
