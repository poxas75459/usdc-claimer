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
    "32cmXxPtcJTexQjysukTsUsBPJvasUuvACM5QPrRHhMkqUtdWtSkc3M6X7mrvsBDmwq9QeRSFdaa6uY35XQ2gMpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2vCnzFB57LQsmMez7yxUvUwTqjNP8KpKUTP9D7LYfyXiFaxYdqh7wW8VzgfufpfVg7Qz34TbRZCBtuN6uTx5CV",
  "key1": "3i5cxhP6Gr5BS5iP8SQyTWKrDioB9wUuERaiBqqsCY4mKTkjAzi9zzF9sDk1VVRTfRKdFArV6VbhFb4nmQPhbsVV",
  "key2": "LgN5HcxvL3sMfrC9miXqH3Wdor5WbruVL7jUeyVd9ApswCZSMzv1eLMLcGWaeKnYAWPMfC7GK3BvsCtTUSFQPwS",
  "key3": "58iNegpGAh8B6zqRTz3rfmE9jAtseYKpU3WhvYvEXGo5TS7LnALVs6m5ZfcPVvUi1inCBBVfPgB41w36W1rwmz14",
  "key4": "sZUA4C1LPV7iwq3mRnkALLpRDgTWa7A3oYf45u1QRZtFPLFDCqf3nQtj6VhK1qwPLFqf5Q7ejae5LCk8AJHa2Ze",
  "key5": "2m2CMcYM4mMyCq928gtF1qDk5Ji5rcTT6ew2wgcD9NUykvZK9Z3JWwAwrkiBB64cdVgh81pxWu2bYD3EZFiVdrvf",
  "key6": "65Z3Y3W4U6qgHY2cTXZ9sb3B476teqp25zX9roThUGaGFozqQdRo3s5Z8inkXcqcGdUWY2oFcMo6Pfy7q9gBKWiB",
  "key7": "5fMoyTZ8P3Qjyp797beDB5vB83aJ8HJGyvNVLdafupPFBnQ93PAddpYpLJkLgEx5xBM2gfYmCUYxQbVCUPuJK1QG",
  "key8": "zahSZ8VAZmvFSm7g2W6U5TJm9xktQduZ3xvFpgwGZmuh3vmCcDyw3sQCVha62Gex3vSmen4TZxb6B6hPrJM3Fpm",
  "key9": "2TC7T6QkbZAjULUgVHPGpjsYzxjWbopYZtHLGbtMZGAuQgx5EQx4qtgfRpsp7ZYiUeGqRvc63cqyLhxzJaeMZftG",
  "key10": "3bGtrbecbfyGkbMt4dPgj3tgRZ7sjPyNBE9we67tncZbmnjaTVz58g7kbTWsvX4HRHJgBRhiHGPLQwbB1Z7DyCgK",
  "key11": "k5rPgQa7RF7tVNCvX8UQzFFCJRiBuxcAFaYbiFrph94rs4nrKFoJYjWw68cDR1rsvWAkRd6B79ykzeJeSPKAE1w",
  "key12": "672NCKevvHNyujT3pfntC2SThfbsPkH8RdSafAGBq2yEVt5khEzXGnXN14VYn7r2NdeaKbm38E53GURQvH9wUeKH",
  "key13": "Lu2kePTDNgkXRk4NroFvTXK6pVmaPZ5jBsd2Gj7vXWw24V6fBxFeY7KHBpu8CE4h35ynhqyYnTVpB3KQWdQxAgE",
  "key14": "BAL2qZKsPYQZeLNeDeivEvynz3mKHJwdUZ9gGfXFZ5uGsiVJrZjcsdCvmFJ3viA6WzXjDvHUBCay4S9HzGqBoDz",
  "key15": "4B86NNsdY2skNxqyRHKD676ZRFffAfarr1AYMYkrZfnP22Hn3ck4kguu6D22THqtRazrpjDjjVqsvKe66jA8rWjG",
  "key16": "4pC2A1rkmo3qVd8YZNyGFYaxmjRpDhchkaJLpCqFJQdD4CCCPNyEH2fnx6gHABX8Fck1xuTEvHzbDUuWFy8W9qPc",
  "key17": "5nm62r37uc11QxeSQ6vshAimaNPGv8V5sDkh3L7ghguMdRhB4DDLn9WyFN1hy9B3XNFnULRJsrBahnarNeRfjkWD",
  "key18": "32BhhBu5JrSq43CMt6oMd6c3hTMz55gGAi2fSfTADbBbKzKdDDeC8EnA1fLiwDPokUHooV9tStE2y4uoC9M4SvnL",
  "key19": "5eJj4CwfGD3dZJMUxcrinGUnc5ck3sxo6TNG94Xo6jQjVhDU9ndEdaddVRamYjfccFJbnSGUQDvLYexCaDD31D11",
  "key20": "5TahZD63qJrRjd2T6Mf2nuiaUREpc1YGwCgWsmUMmu79Am49jiegsfLUoCtPa9WJNrqC6nmh1eb66Sz7uf5tkFA5",
  "key21": "2FCugNk1W4c3hrXpmwcPKwLzYLahftNYxTcMcGkWhX2Z1xsfNFiuG9YLcArMk9GQ4KTytgFrsCNVDBNmYADgPYLM",
  "key22": "4shKG3b5t2cBuEdnXb8r2F4DNM3cHuGWCrHZ5dtX8FSFqRF3SsccAmkm8u3XmF6ZbVDUSC9V4WVNxYGXEkLcLKGf",
  "key23": "38qVk4S3tZPCsQpoq6NmGVF5MfsvLqwnhyvzML4aEkgXaPPtRX2voao2QPZXsXopvWWyXUwHxWLB9PUuEP6GXWnr",
  "key24": "3vt2g3XJRaazDC7AWxiDCSWMRj6qGBdbwxbrenbC2maUEdyRaQ1GcXKdT3xDvC8DvwM1exRXDobHRg1ZYs1S8Xsi",
  "key25": "2b4ATMhnCzdXXKH7QgE1x41XYdstsHMtmauGDAqgxJBEhBMRXHqkitvwVoNT2uMDgBZh4A3Q9riuAmAQRh5cyoo2",
  "key26": "2nXdMmWKC6dGQxma72cNHsCyhwHogbnBBtSfeLGLUQ5brPwnSV5LmMXXC8QwwsnazJuZYy98fbiS8mr4ZPMvj17E",
  "key27": "4ceFjQ4EactQq8YCrPW7QWk6HzwCqxcckD5bonbzDRta7nRZUBjq32nGK8AK7Y1EciNiNL9dd1iQuBxErB4ct1Ra",
  "key28": "2Le2wK94GS6aLHY3AyacyrYnGECfWTo1hDtc8FYfrCHXFd7bCjCZTin2LBRrN2ahYFacHC6BY4kvpJPCVioKdq3Z"
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
