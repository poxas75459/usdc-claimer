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
    "2ed1h8WurEkM1jCVupJycwwkWFJArREjUhDX6E5Gf8647UYoiKgeFyG4rn1oYGsFsmgANXsjNmV7r59tgYG8wdNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fB1jEMUbJa1RKTSzMSsgaLvEXMDNu12X2Efcn89kgU3Y76WUBH5sGwnEmwmizjkGmrTVyZBXoMpqwPyDg7g44Ri",
  "key1": "3hRPjrDsyxMTvXkrsBv7oc2gWsPCSQgYDZBbPdp5vRvw7woYEKBJMzdt2AHMCA2ZQfvbXV9fC5X8A87PYT6jrsB5",
  "key2": "29DUKKy6NHXe3YoGuZy7jxn4fw5JsidVnWgUwfURYr9Sw6ocvQZnpyeabPXyKCLBEynMDVwkyY7TNQf2ZKAoVWmB",
  "key3": "9qk7bmG2RUyxv9LeANiEMByF7cZMmf4dRh6ZscdbfkRQs5cjiqNfbEw6M5tnM9UGwYmKoVcnNpL8aBRWopTRBAM",
  "key4": "yoAvPoqw39qj91t7hJXswaL762QPW9GEsE2VvMKDWzDZSfYJDT6vopKiHWnpetJ1frTrVdRBoVw5GuzM1XFgLLk",
  "key5": "4EbiGVfMBxQ4R8mkuXYDykQBZWUEdbsLVvU48XMZGswg7ReBnqXWR4eq1NVycpnDPiaxoQDouwkb4EoaZPpJN4HN",
  "key6": "YpvcDtowS4gTt9JMtN5qeABzqrKRKeowt1L8seahj3aonhJmWRxegaSXNGSY68n213eWVDmCiRc2rcm1X16q94s",
  "key7": "292BzwB1bak6YY9QZYWwxdqc3Hk9ZokjYBbWi4mFEFFDyXAkVekcupe7iHC7zDB79Wmy62YzEgXSW3Z32VskKXjw",
  "key8": "5ttdKmE2t2u2QFG469AvkSMMEFy9dcxU3EmF7V2D2WnBvACWZTBtdiq5K2RgXeNhXRvhoQHGrQcKRfqpayHzGLmT",
  "key9": "3J8SqkWJRhPRKNv14hE7ZHxASAUUehQ7J2JLLZTZXweTu1WkHGGguRvUU5JUiNfqTqfW7UxpMYwS372tVPHam2Lm",
  "key10": "3MoMKqquaSsMVPXnkzRxd8KjazJLGenZ9PQMhyu1aEG5xztsii9YmYGjV2WK9mALbtFxdkY8bqsYBrGdhH6x2hRU",
  "key11": "2xzHTH4VMCNru4usgj2SZ2brG84wnfPKsenGCYC1fqA4iDicMzheLueewXbadfuBe6VzZYspogetyJZvEKAnhm6A",
  "key12": "32WstoBT8tZjbHohdNmnePMzCMUmfMfUQszYYSrV8w1Z5qEkAbmffLkmn4igKXiaLdtWK1r11z6dhmPp5qQRpyQU",
  "key13": "4BYnmkvzhdFLqc692Y5hVSK7WWULpcxQg6Mqc1rXvvsbifFy5e6PQ49XMNJquALZBgD4RDvEKrr8WCDkJpHcX9pc",
  "key14": "5Xtc1Keum5cHbfTSrx3NVQWjhR5xpuatibxicSVch8SkLDF6a8yN98b2jSk65Sa51b34DBbnfYjDu1RgV82jTbAj",
  "key15": "5VeYiBfFbZZRKFzry5sCc8LdxK5Zp9FcoLYGRN6qL2h5pCN76JK6s5aaCVgQESamK4bKBABB6zj6DWWSWoJmtHuc",
  "key16": "2rYr43dGs1eA5qLimBMq6JjR4bUfeWTuyh5kwXrUVqdpL8ZpTf2nkpEtdiqAGYU3zX9QiwSSnwC6Ko562HroZGDH",
  "key17": "41eQE8ju3tfPtFgmNH1M3Pi1dLj8eSUGa1QdBFJ5KmxJweYWSjL5yv9m7K9ksPohxFhEE3GJ3Ds7yDCUg7zTLUMu",
  "key18": "4toXyePqPk7XhUJH8Upn7EV2eMvpaVUWWpcy7z9gTfQcZHDEckWsb7rRLWmbNtuoDHLFPsd7b6P6ium1Jnr8Yyfc",
  "key19": "FyBS1aTqUcTruhDA54dWnV1CiXrjXMtk3erPcW4M8ER89xYkhTWmoPDudzFYnDLTyP2imtLTAsCkb1LJJvTdDG3",
  "key20": "399HaJXEB2RfQM7WJcyZ6tUrhbNXw5ZvLRu8BiDbm3qHGUkjhV3rB3694AXJLndJ87ucBGLjV4SfRBi3oojxn5bv",
  "key21": "4F9w2qNdaDc5JYs5ZWd2XcE9WmxVm9QY5BPWbXdCaMJAVJ7tkY6vEpghTTKZCzDJaVaURbwMpYvNtqVfZ5rpiho2",
  "key22": "5HCpVVqrXGAL2XdgS6sYy2GpLLLK8EcTo63fTt2sTFDrfrp5DMDQQSzCjUN3HR5EWfNP3vb75vghPN6z6R5rXqCK",
  "key23": "p4UXji31T3pbSKy9PFH4HMkbjze5ZiX2kerDJgpHQWp5JXDrJktfmkYhHPbKCEWWVcufmE83YaShnAYgTs8o9x3",
  "key24": "4Gi9ra113aVdVBoJp5T45Hdbry4YaEtToEfTNNPFh4AtPYFitoY3CrD5PCVmme9UBvN5jHcCozs5AQUetzGqdFYH",
  "key25": "4ukPkdqth8pdsiLUsQKs1q587HLkmBgsB1hCrc2PkMNHeAXAJkCMJnAG6fhCgtsd33SncNLKNz41LBHkbzYtAaHE",
  "key26": "9RKmUH5jN8py7kF7kchUKshRR7VZQXPFZiTToqsBftNrn31xQjWWyG4PrXj3nGxCybN4kWJ6Y2TBbkPpYmRZ75c",
  "key27": "4XKKvfn4Ltk37hSLtpobk9TjcomQstMnkCintvjtEdWsp5QQrDv8LoRkYVyDoq3ENvZnwYuGjVeYd2qxXLq52bUh",
  "key28": "udHVtGBvAAFYVzaysoKLcKkJCgNV8j8ACdibUSuLyvNVFrDnvvJWvHZw3uHzEJxpmM6biivpuTGTVcvtYthd5pL",
  "key29": "5R9YkHTG1pRR62Mirxt3bUaZvcT58cQ6WVdHMAouNT1nPreNtjtKfA9CfRTm7srQXdgAh83e1wjmY8cnxPmPb2kH",
  "key30": "3GxVUuZ2uRy8rFwXiJVcrd4ZrUc3GGHUNnaCwK1wM6JH8PPa2W5XMmtbMz3N83EMV49RQrcjniY3TP1h32h5PHgk"
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
