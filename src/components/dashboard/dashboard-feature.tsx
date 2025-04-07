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
    "3AjMryfKmHWowA9rg1fSEan8CuymJCHQypiB2YN24VY8pyNZ4eoLtCdusXtX6zDWVRPKhQUrpMeLcpVMArhcULxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXmxRvXcxgouuEemb6bv1HqopW1vLofjnL3uWMbg1thXmgoefGTiMhxTn2QCtcRwdaBzEGUVPXLs4w6VMX7Zg8m",
  "key1": "3X2JMx9z8bG9u9acPKuVhzDSRR16DLgHRSSA3mUjqPjPGwDNVeu4uezGHru4dC6y8W8WWJZu2LEnPfgPbL1G3nrz",
  "key2": "zbY5TCcfeEwS7QovQCHBFeu9qcPh3yq5F5mMURg9ohwbHsE6dQmXSVrqrePy6p8RB3pzLq8mfCSADV35exhZhLy",
  "key3": "5mabyVjJdH5qzEpCcYht9pV8VgVQ9r6xwsBubnSxcHuocqy64roUnPEXP8vtubUXiaE5ZAZ5sP2yD7BuEF6AFn9U",
  "key4": "3ME33hsRZvr7Kqs7ZM8zAj8rj9FxQdXMTF6VHHbM6gL1B6HDao1ubyXmNhwTzinpRyRYb1xMhGTE8efbhcJ452Q5",
  "key5": "15ZDVmkVnysbXegDi52WETxbcUX6D3SFXaV6Rp5JxtM7vKAjgAitzsPU8qb4T4z7GWGUa71CGCqTi2Rx2d8GACP",
  "key6": "idLMJyUXXczs4jMC6CQGBxzRauN9R2SXWkBDcUt1k8hXf64yA48FSEnYnwfLiRYRh9Kw4GKFkcZqkXnoqu5Gfgh",
  "key7": "JZ5TjM8xuQKPjFv4J4wafbtFnYNixicUPPkeYcV9GjJCQWrJFKpR1WtUh4YBfYKvSrm6fH6bMiLBKdAdU9Kw81j",
  "key8": "2mCF7bJezUDBmP5v9p726JVnARun3CCRz9bjr61fHwtimnoeUSmbYWvAuhi7vZYJfP5ynzLpt1AfRsppeDKugxWy",
  "key9": "t2KtK5xpV5CYcnULtH39undZUcFT6GaVCsPogmUMzsgzhnSYzgHiXNaAwy2CLNQosomfVE73FfR9JpR1a8FxWmE",
  "key10": "44KNwc61gLA75sT6vzeij8942mU8Wm9yFZiRUDjQ6EZATQzZF3SAhcMi47SzDwJhx4n4QeGg7bawmJmCzJgZkp6X",
  "key11": "3ncsfoW2L6kFsu53oCiXn8F9XfVUcWoFwBGkyKEtnkXkFLxTJBh9BvmiBS1wnjPHV2u9mhhsCT2ZL3H5LP8Uu1C6",
  "key12": "5FY6f8j12fhMAmmNReLAnAo5SdYeD8mePX41dP8jY6hXpDKnD3weniPBKk2zZ72uebNopJFP8cDaoZYaPLXNvoMw",
  "key13": "2vxTFTTXr3paXErgX2Wm67p3ZMrDb9E1wTnUNSq7KFR18Bd6sZzLE753jVtciQSGsNor4MCoJ3XSt2wxaGFvx6RY",
  "key14": "4rSnfjKh2Htyopw6bNZA5wSwwRaQTNAhjNrGSDJrtAJTuagpLj6xEvCxpC81jCRiKmv2QYGbEz6QbTMy3THiatkb",
  "key15": "38ebhaJkebcz4SSDsFYfBSxrx3pRfWgN7TVK4LHt455HXpQkqygF8YikuTsR7QUe4DTZoxNG1Sy4kc85mtfmHzHy",
  "key16": "PCNkYpoCPQEDMBnCjGcZrzdziTTrvDN3ZhmvbP7nQBgqbF36fSngA1CDiBKwSpf1ku4U92PKry4zrwpWsuPvHiG",
  "key17": "4VLaueMnPcXexiBKuPs4twEZoM9X5ehTs2dVUCKNCPr3MSp1crPjsQsLGx1oVMe2dvRgKyAD2DenqJoWB5rCnoYy",
  "key18": "5LP717ydQexnomvS66ES4UQWhGyEjGB3sFsELKN95DeqX9WgQ7fkwMtiuxhhLyMeDAr7M8qzdZ1xhYrVkPaVBq34",
  "key19": "3YiHwzwtosKSnGZQLTNFkG4BHwKvYXYj3dsu5uHW7AwknFXTe4sfa6AczK7hSJArGYfwmT5Qmf7a2Ui9mDH1ewfD",
  "key20": "4tPajjoPkiLKkUFHHjx7nVX3Rf5JQpLUxtaYHAvFJiaCwhkQfh7FN5EPvdhLFd7B2T8UJ2QwSc6mMRDL2NyvWrsT",
  "key21": "5bKmVtVc9vxC87b7iBy9n5G7Kbnmn5EFEhPTnFUvX8tWgi8zzwki9zewcLhjhsnhKa3euNHjR59X71Foqbujzrta",
  "key22": "ivef7aoSH9bM8McQ98brFSu7hPnnHS6vGfzFT2LEg9erFNTErCJV8RY7sxYBhwUgJD2Apd42qap5Ji9o7KDDfTE",
  "key23": "v7UYFB4nnU93gBgAiNA3jVmpYphrZT5GXGtj9ooJrff2kA9AHZDp6XrsVJA6f74mLU8q1rUuJ2MNoN338dKLDPW",
  "key24": "2Xp4x59A4GGDv6GwYoyb4qwai4HincgQhSD12DSEXm1Rum2uPpLunxayHMVmebkxhckUmoed4VwxkA9tmE9PDFjX",
  "key25": "3tdUc1MUhU7wJfeLv8G2iHu6kW56oseMp2VDVdkAFVbZZcC3pCawg9zEvshQnHdn6keBt8fgvda7W7zGLGtsYKBt"
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
