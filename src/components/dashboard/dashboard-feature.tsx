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
    "4VjRHrHmhkACryBiXNVgESmisG9ffjLsWDsQwB7FUhLDgHVfJpGwMZ9ozixgLF4chofHeDH7hpHTGfpoFRdjUptU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CU5tATMzeHaAnpfsSLcjmWdTBxzn7sP8avhSDyE4tfpSKoS1wYo3XRZCN3F4tgcytqoeyWvRLdmE56zwRrL6x39",
  "key1": "2nBSufkpYPRAsNyepjiQEDHU4JD5txkcQCjFPGn4qEsVdLJdF1GaYJP3hhk1zeQUkdTDMHdbQdcvs5jpKsDAHV4S",
  "key2": "5uuLBb3uUXPZtEhAg4JmDBUKRKq6QDemvizJ9fWepa6jBM7hPbwP3Ct6t5VJK2896HoHDUoGk2N9PW8HgzdoXffF",
  "key3": "4dxAmWm5xdd3eGurR5z8ugDNzpu55mpwQAuNcG2rzNTUxfRze4HRjUnCdxnPQhw4Yu4wY2nvSD45eV8JNhnvgwk",
  "key4": "XqNnzmgnPAmb1SEqHKRiZWwEC1g5A2a3PtCVxwCbJZF5qWdCDrt5qk8RKwuCEHstDQXtH6gALsNgmm6vfPtcxRz",
  "key5": "2k2Jba7VafT5Z8wQXusMAF8nGrxQ4FxxmtjoHa8xcHbPjBM983wgUCU9V6N9GpmGuq1mhg3R8s1P7T3evBPfBCbk",
  "key6": "4csuVS6M1FYrqDAGFTsukeKp4m66ZybdAkWAEvTAmJEoxmKirN669eoHH58TdHLSKTUV2NgNeQ38LY1cQpjuJciP",
  "key7": "4Ftpu1TMkQADvij3A6ZMk57jaKeeBUoZyLnFzL1ZyThnUj9gRqLzwTPawnkm4TA44WCbuEcnnRyv3sunpG3B8GLD",
  "key8": "4pmr9YHzussoy5p9GUtRR5TpXbrux2wcf3Uj5cKpEhTcGAjzwbUeKVwwJnpxsbRE1v6KznrLix4qNdw1cKQhqQyx",
  "key9": "22JqxNtsyQeoHcqqjLm6G5XsoatJHtHZ4ssvbQu867ryjfULMTwSJCxw8vHtfmyXiEPxw9pCPdtn7antbnWeCqMQ",
  "key10": "4VZwFZBed7yS4WLU7VuydspBexjg5hEwTXuFcu72pkhYDjisJ4toh7p1mAWo8mdkaP2fmAXpvELTpm9NzuSV447w",
  "key11": "4fpC7LktaLUbEzCzQHP6b9EJvpuzdEzE4EvFWWjT64emrpndfJDeAtKnzWnxCUZyY5drehtjnqkUJxzrRXce9YkM",
  "key12": "5oaAHXKxq6c6EPDrjpeJ9uTAdYaKgbZkPk9fj2qZ7EGSDGjuAEHFbN85YRWxiUg3itJkPD61GUj3Nw6NMN6693i9",
  "key13": "2WHduweFreGvceA2zR3amiut5MMKoPXPR6gP2ojFbqTqBZR8S4fB9yqzxHri1zCSTarEnCCSYqyAoWfhFaqAkTLT",
  "key14": "1coWv1mmi5DLKz19VYLqajYTzJp5a44tZhwcChHN8tRrXGWfoPA8eqhCedDaERSwJAiE4QTiKLV3kGh8jsQS3Dc",
  "key15": "2RhPcxY9Zhi8YEmwH1TnHDN4pCJjUc7nKkruHAXnw7SjUGtRuSxNXccJdxxc87fPRUZtf9J5uuBJznNmcGdLg78T",
  "key16": "3KU8VL4TujF4Y98xH2uBtrPriMoXoM7J37soRD5yneTcVrp8fiApdTVTm6J65Bc8REfgRNTG2Z2QBKa9h9kH4npQ",
  "key17": "nvZb8CE2NBVbVb5dfj8E2L9B4pdibDj8Fz68X3JWwBh7rgbgWPX2XUxUXLkVokTMZX78KanymU9gM8Pi4udHeQV",
  "key18": "nBDM9JmEpC73TS5GZMxMPrrPq266MAsihaQvCDUVsCKkkpdHrApRJ8PJyegk6Y1UAA1io2PsFrAAYmChMgryHpd",
  "key19": "55TYkL32PxEyP8TCzb3yzReBwPwWZkYq7y4K2udGX3F4SQ38FfKHdo1uF2TE1sbxi6FHhAXnJpFMxG3MFDtgM8DS",
  "key20": "31B9uD327rHzWDQAabWBGQ1wfbfoGbTKDET7jWHSQQmqTFvUQXscDFz5883sVZn8q74QBhwdxZZrdPMPULS7CV5h",
  "key21": "65wm2mgtD9PXbDt9PHEwzekzn26AZUuE3TufWtaPnTgbkTbRDMsLmGE7Q5QFXqNu7ZYysApZe29gyVsBUNbHxRWv",
  "key22": "raZxgNChNvHPZ4DLxtgCEX9rTpxsEqq9218TgJLM2AJpXpanJFJqLxeDSNQ8sBNMTDKx6vr1gEv17ZUaaZtMsRu",
  "key23": "4F3Wxn6DE2xre9Ze9cDw3FsGeeabsc1KU66berm97NrQjM6t5EBr4xVPUQZnef9B2sg2Atohytq8HAUAj3aVhYNz",
  "key24": "5cjeZeH8cEJTpW5UWxj2yv3GHbAX8g98kpdbL7VE8gAp9fUhEp2zNJZ1vocpAtYEHbSoe2ad6BPhgLKVZEXHxJrY",
  "key25": "52x6QZs657qVoodk1o7TrLYK4r3UYVygg22k39MgHjxaaQAxgaEA5MhRutnxmsGfJJMxXk7nna7x8hKc4b5iN9r9",
  "key26": "7s5B5EuTE28kNu2BMbCnDq4pXJsviMb5cnXYbiTeS8fDozTQTBkeRwAUcUE9WJCDA8ahYzq3pWU1dxnoBrwSU5r",
  "key27": "o6gfpxJZJxrXmbGMd5mgjtGTmprGk1v3LEfFF5YY34JiR5VUEzWhTop1Bh1rAtJWkLWAYVDczDonL75Nux9dYQt",
  "key28": "5QHbU8gNTNhvPwpzXxXCJfT2XXinZn12DtAfmrLV8Wjkea8cswD7oP2XwixbViWFsqpDxsEAchxqfCfPLftYPdyo",
  "key29": "5MUhMNLYAayokyjbmKFx438mzhr4M4XLMWZV38pqji7jKEnfkdwqnerUpDQWKpXfjudwUBhXAqZqsLZ1mYsBgufw",
  "key30": "XG8sxy9kmE6gCfAorQk6bvepjQ6TPVX8MKhjD77oEqL7bPKYM4kRp2FhzLNQqfjQ76ydqwu2Ka6YoLX1FJRdgJb",
  "key31": "5fYoMB8NwzdciaivzEYpFQvMTup7hyXzsBWTJBxMrdXBn29PGVLgcLR7Yf4mQKj4M233HUNyhJqujZ6Wh6EGqP4a",
  "key32": "X2YhaKGf6ZrS7DnkzMTXQBnNAbuxz2Ptep7SgCc45MfNayk3kySpHvfgNk1M6DEMK2P222nT1bHZ1HkR7dNGc39",
  "key33": "3mWsqowCbFHmF9bKbNHjQva6psnvLXE9V8hYg33THXnuMJ3ESVYpaXQnszwN6mmLYtBHJAwTSBeoBPGMGigqcfn1",
  "key34": "3BwT12sFzx5TgG759veBmKyoFmxarCc54xzrG9T6MZMeKoJMfkVhcHLUb1bwdMfQVM5jajzeC24ktnxZ1Texe1mb",
  "key35": "4osHqXVJyBCuNJpEYtkXtygquCWoPq1gY7ofKy6k8c1rAWNqqVGMMrXAGktymqF1gbmK5a4jyerfELXMzboiEgUz",
  "key36": "3Kga31z6GkJfDckctvet33xvuKrGZB8kx1PDY8qKwCdK2Mq3vgxRkipUPLNSDoEdcn7EjkV66v68X2eTEHDbH9EX",
  "key37": "4qjH1YPsShWAuZseDy1cvoFoAck6SMD68aqnVNccSPgAqNUKhUX4GbRWtwMxV7KedXotAfuDVJHFxctVfm5vM3g1",
  "key38": "ZKkjhK9G37KsjjVucwCbmYfDJGe3ABDNu7zqg482cens7nKiLTPPtMm9cyzpdfjopw4DPPBvsqwoHMx7rLzjzLB",
  "key39": "2b852FQJKeBhB16TQAmthTsfeYSKNqoFxKA6WTM838Upu7dDfnm5F4qgsXUY3JdsAArg2kbV3BDGtLojCmRb74Vo",
  "key40": "3C88bnMANJHsovbPioNPTkAaHzKLhJTDM7Js9H6P1HpX4CCwehfJfFUG2VmgKvJCrM7A4xoruuLxatSqdgNuzx8e",
  "key41": "4VFS4Nm5UXV2hSWT6cfremEndCfXYQNpBXjZm5c1yXWSTnTpncup3mn6fPzPpHjAihXxQ2aVRAd2WZQTDPSEcEaR"
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
