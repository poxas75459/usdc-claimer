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
    "2oD3Lwb5htUevrjtCDcTGii6snnwWCSWuQzWodj8BWTterLtYEfuGcEN7xTyiy7wZrUT14o5vgtHz5TrcXoCFNnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uGPAhZYFCKbVgDpQRfL9gKrRnFXG5HeCRapdjswXCDh1aijPs9W8sJwbj4mCyMVV7Eq6MqpXvcqCifgc7JxW1q8",
  "key1": "3m8neK8pT4c41wTb2gggXBz8Qypj6uX9Fkjc8PPcu6sbMoE3jqXCSS3qprDQVnNdii5dC8ZmEdRDoFtrGcdeewn6",
  "key2": "4mi57JCh999upJsXA9RnH9AdA7JNHSZ39rWBjcFgUuirhrfSp7tKLfHhugDArQSNSpz16KJUaWkLkAxt7ENg9dWn",
  "key3": "4kb6Wqf6Ke8mLaxZ2SV5wXNLDpUeZYrKkWJnpSEhhVbKTcjKXYhyY9QPDP94aks7FSvXCHaqTLK9XXEHSNvC9s9d",
  "key4": "518LxUdJJdevBQ7TDoG69Y1ksuiBiwSALw3T6hewEb2eQdYx4L2yWV6Demffq6SHPpxUoLERvtGjnVBE3eQQinNG",
  "key5": "5jBMQwxe9j44NBJ7JGq9MNqgFhwhtEXcorCZPdq2TyYyjJ4NT8vL4vdxpd6B3P8fTx1DBrxLeBNXmGH3mNtnJc8L",
  "key6": "66tkyMXESqyYFnxKHkJ3swc9dL6JkmjFFwmpD5ZxVmY7e4j6NTWu5kbE62365tjWkCS7Lf4GheHJBYsNtKpQDGer",
  "key7": "2ze8okm3JeqqUHHKtEF9symWZDQ9FBwiWoLYFFmLxZBPizxRxhzFcXx7NTXJ5y4a1dRZ6cNap1Lvo7mrsSqK9txx",
  "key8": "3axskpwPqCnBZLnbuDWmDrRVfz2Fzb45EHqmXLKPvAhmaQ3XQ8j87BFfJeqAQz5nWdT9PT5tKYomDWYGEBG1aVLm",
  "key9": "2aTjqZ1fcrhBiVK5hcswNenXpBY6FfadjLjCcdzZwdGjhmUZo1QTTpaLM5W9GZbNkuU8BEMM2XAnA1kwryZeGrvT",
  "key10": "59LsCa3taNyoHEFm9u7G6r4uxxucMWPAkVZRu8tGBbZRbLWMD1z1ivWreWQBZvJmfANGjhj4zwaU7qgYMjTsEf4J",
  "key11": "3AR5m1AEfxQamrUdb8QtrDZPpboG6xsxugBELtCoMH5hTa4tg7YDgat4aq75k46zSczJYtYRuED9iLcYwJQBXud3",
  "key12": "45GmyrbntP2psXnBLEayaW4SKhZDoAYmVot5CzdLHVCA9rizUh2yjmqvFzFvE1nWEg3TYDkCfNDXvVHTmhNa2eeA",
  "key13": "3kmjf1pEY3ztZEKVHCg5AeF5kCeEGw95ReMBiANnvq1G4D8XnCboNVjMSSeKYisgfCnXVsG3Kcf5Q2nZdfEFp72b",
  "key14": "2WVSy9EAWiQ8wWHqobYPKjC6C349iddbSvQwtXa1C3ecFjGFaKyPZ8DhRCyDvAxYq9fxUpthBsQJ9WqQu5nCjvcp",
  "key15": "21G5JbLuBhvG3C9Kv1f2eCkohzg6RpfhfqfsxXfzojwes6zr7H465dMo5pe56hiD1yBWfSyJdeuZnM49jQCFyabR",
  "key16": "2MjA8hMqYzAeru667xgMLjye1nayCHFRB2j1BzPZgHj1xE6xy1KJzExHSwtjxsjoAsbmDCFAYHAMw9H88wodvPL3",
  "key17": "3xaH3ynsVrMdC7y8Dfe7y8moYL7SA5dbjJjFrLuLegNhxsvdP1ky7we9CouYvz7M1ebSoDLBCjEdDkaZyMudSmWN",
  "key18": "4iQ5sA7TBWFkZ1iiktGkVVLWadDRAQ71bHoBsDZghNn5LtsAvVVGWUwAsa3dv3DtSpsSQEVpyiHdg5rAUd23fzSa",
  "key19": "2tBUXyFzE6rTBkdjSf8KjjeM8pNK3a6qkptzgYu1hBWnvjkhCjaqyuyrK8J6MNbP5E2ZALjitM1Tr9Dbt5hy8kWR",
  "key20": "4mjMM9NVAFBaU3fwdymL9HADXfbREW2RYEFAGekXevYMXDyKiyk9e7tWoZro2BGbnjX5JcDHs9NhPhUPWiaSqqg2",
  "key21": "2K4FFEXxQtH9DoB52SV22VES12x5Yrvd6wdthgoEWEh539E36RTKEDa6cBLFztiFy284cgMdBnWmThNHUATD5qML",
  "key22": "2PnoC48Lzcj9FRPxJmKMDXYxs1CqYSJXXUkgjzgM65ztdZJMzkEgcEUPPLN9ko1Caod1JuQbWGGzX7DdJxas66Ym",
  "key23": "3EQtB56j4FwYVRqGCb8GM7R3amk6zR5GGfhi3xah9svahxau3YZaS7mG1NkWv2rvXXvqTutaG3p8TjJY7Vp4Bx8R",
  "key24": "35cJR43Mfcncg5LC2a1p4twwZ9GjbajGDpUFqpz4UECFkG5LRE8V4cBnqMaCUbJuD8mjaUMB4aFrrtqh27zYzGxX",
  "key25": "3YKo3CfRRQCQAZA2ZvDhk2t3TScuFznZX9yErNX3r3vwyiGPLzVnHc2bbaQiN3NgHPr8Z3GfLX4f1eD7Nk4xwTJA",
  "key26": "3ZBjC3zWA5xCMG7yKFVoi2dnNuPVuVCDBg6UZ5nVK77Vcq3xbaGLUyU6SrKCCeXr89x31tm5c5wL1fH92MMLuURc",
  "key27": "5PTAcrbZsCLYqNYjNjXnyQWS278ycKVuTUUQUBA752rZnkLUcVPMZifAPP3B8mptCKW8b9TTG9cBz2jCx9XW8y5U",
  "key28": "3BLNMK6uCWQvE8jJzcsukRmuKyNHmWCDJLT2sctgJvhVBmwDHq5scCmt419RfMXdVMut61n7xjP6sDSryFpcQ8dL",
  "key29": "3zLF3d9fuBQAVhG1drrqd9M9kHSurPui1eRtxfKusgdRRc15zpi7J1E32p883yamV55UoAYtnzBk9JzcDxz7S7wH",
  "key30": "4UnmCTMpsYUaReR5EDZp8o5PcmU7i4vQe5Myex9zaXfgvhNPGfp4zuvVSemgoDoTAdkaGop62ztGEweKUEDt8xB8",
  "key31": "4CidpWieUtuNFL9snph9hbMujBHgoGEL7V8UKESYE4ViSyFHK2q9FuCinfs2iGaChynMRGKKh3mEFtrmgeaKMgQH",
  "key32": "5oTBiNVq7aLtwAjYTE986bTwsbxAMBfTZcitkpuuZjBnzf1LmbfLkZUApgb6wxj9H8So7JcJYR1SQEHboTbzuVQM"
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
