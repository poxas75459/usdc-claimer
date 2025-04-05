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
    "zTHRsHVTRgacfqSPnfdCqocFZz3Dsi1SMs16E5gS2bQL38Gv9zRvME8qRrmecYgNYmqBnpLiV4gwwcQhd1pTvbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kdSrqR28aZbUi2Rd6amxSMvMXnXPRrDohGUpJUx8DDePYp2TTTGe2n2PhYDWrdNhEfbJ2iZDMazHeRpoVHF8tin",
  "key1": "2ZwrZmGywF5uNXpd2ZaUSPDTTS7k65oqgM9mvXukUoyciFf4JSAycPuxoWwqBjZZBzo7XZZ1ZcSwhKa9qnbqYSya",
  "key2": "4RDebTPXs9C6kNxyU8QEY7sqZyy8qb6Ti24gTqggZonovciy3aAoiriNZh457WAKS8x2wouywXrpMDkJzLi1zAZy",
  "key3": "5fQ1M8DCsD5Lhj3ygfhN2mczApEjR4n5ubE57C7D84dRMKmNQfadFZfHsgRLsmxQTSX7wTH8Lf8SYuGo4YPB8c3H",
  "key4": "2FFLciHEGMqK4Cc5dzoq8GJ2g9Pxme4sy7oiyr5FdYveYtG1XdWjDt2W3iNN2UqHqCtFkX7K1eWBA5imYDwGvmEX",
  "key5": "4REtWwyhbrcLCU8rk7AkQN4XsBjgfS9rN12GFEogeWizF1qLsYMLqnNGecFUbEQPYSNrhHzV9Hdaiujwo1PVPwCr",
  "key6": "NA9qHYzvQ7jqHFvNydLKSLCFmMgM8kPggPwYdwDrVUij9daDGyjzBKoquQ7bgvkrqMn1Xf3PxR4t8FihZFBMSR1",
  "key7": "2zGuFSKxFpHUBL2EEXTmtNZ54uwCryL6oLBZpwLxdR376kWySoTHeXnuFfd8mQ6VvkVbDVG93X1rHkTJShNmr4Ki",
  "key8": "g63ujwfopYGD6iCogq2K7J7Hms7ETDmyu1TqAwknBG7x9PTBHsQGk2cokgZm1WSGJqnGfmFPkMrsuTb2QBFqwPc",
  "key9": "53j3CUbDiHU4x5yvV5SW4SVYT7T7TyZiauay12kPBQojcGf6AtJGGUnZKPVfKaV1tGsraC3acwTjCSqj8PZ2Vfjz",
  "key10": "ich3x2w49CTbUDa4ZZqriCFHC98ZYiQYUAUWPjCPisomR3JEQLUryyGbyoKEcKtA2JLip5VQzzXizXVet3EYFJ6",
  "key11": "2PirpYM8uCBErxm1JC97zpg2sx1GwFpbUPDNzUintna54o89p2CJMfLH8hUcKWZHcZ2fnV1K1wH1BRGBxJAWouF9",
  "key12": "65kJyia3cqxMxb4swFL3BLNzZae9ffK6DdJEqCFxqzSPaQ3i5GP7idjSmBRgTmyHoJ8KwzM3sUgRxTYbbPaRA99w",
  "key13": "5SctTRKqQGJESxFPHsvDi6njgUUJjcMXk2aYW2Zrm5fim24Q1JkuzBP2igevPujSo48Ganat7qAr2jVkBXmbqhTD",
  "key14": "4hsqrPbqW9qgqKc4DVMNDCCFXfe1gqYdJCLm2S8nKNPYDd3FXRqGtrUimhgKL5WywLX8PF6nqc6tWbENFM6r41yh",
  "key15": "5sHJCn9yG394sJ8tHwnb1UYP4Gr7VNGkJsHhuB7BmWn5NEPnGT5vVK8kn3cC1Yk3fCDYyz6WcW9cFZU7t64vd7hv",
  "key16": "25rXL1o3bYTCZoR9PPDCsh7VxfFf5L3g1N48s4MTmoXsoXbKi3iunrZKyRmJRJUPMyHutPEgh3TEMY1EPvkR6Mr9",
  "key17": "3ax64htdA4S8U5s4DUzQYYUDof34BqXghJ2Wbj1sqZezZDYgi9AgDfDvQJpoqV2v3TBdy33CL9v8wyTkEcEErhZi",
  "key18": "1neLpAVxAERnpKn3MrkUYhBR6AejGDuohinDVhYxABRQfKcKy5QQs6nzKkNHTySbQmTTBtz6yJMBvXm4RyXY4zw",
  "key19": "4NefVomW3E1uKc242PAmdrzCp62YrpFAp6NB7pMGDsA4C81uqLqpZibRGh15UwtBgZt2QsmpkuhKccBtqEfreMtx",
  "key20": "2jiZgNTWPkbigKQotkCovcSLoGcWk6kixvpappzcjRxtdwPX8uhREadfGTkLPzsQGhLuvYirtmoKq5T7raEN5fmY",
  "key21": "22d4ZqDi6xMzzn7JTzyBsHMdpuW7UzJv2tNk57KyrsxGrafUCd5uqeZDURyibxJ8wf3tBaUaMfDrGVgF444Nm68j",
  "key22": "b5T8AgL2WhR1WV1px58dGzrs6MxtLqwJo7GphdpWjdqripZQ1yKgiibBtZvJdhFYGSSERUBW8KW4CUZaqwdMKJj",
  "key23": "2qvwfSekJBJhaLpSxa813bJaFWsQi5LcQFpuhfUokYGrJucrdqZAV2tttkt2jtUxjrhS6sZ9feN1Q3wedib7qc4",
  "key24": "3ucX96JNcd2WJVSNrzrYh6T6LHmi1jamyAthyA8UFP5zeDhF4BaTgYUS6Ag7Y3GUQuE4bKyHfu2fp9pUmGKGdRGM",
  "key25": "k6ZdnMmHxf68BwrNYVpAsv4F1a6uqYqwyuspDb5cSrr6xL2Ac4hiAcZHpDQSVxSZHYvxEzaR2sXnrE6m1fSq5s4"
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
