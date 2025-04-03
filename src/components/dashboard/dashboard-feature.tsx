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
    "3CQfDVG5iXBGu1ykS2HZcKaFrXkcLCQzqFUefNicSmp2DETxrHFfck8Xa8HqveZ8ZWU7MwkN1MjKndQs8oKefcvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQ8FZdVNi838MgPpgLc4hWhvgP6F5PiDq5xLhJz3DnhPRRvrAADXLy3KnuddXKS3LN2F4p3fikUKXc3nx6tyPt2",
  "key1": "4zDH8yaCgetHQ6Mfd1NDRRGwSCvzG5QJqXc3mYeKvqiY86RkykXWCqupteixchq5eBcaYNbkM7dqcmcAu7NZY4W4",
  "key2": "2E59gGWhT4aRoyPN8Dndk1PWUeUGN7QMTQ5jHsT17xPLLqywH5K8vBaWXUzn1HT2S6rDYwyJEus1PaB8aQEN7kzh",
  "key3": "4KQm3KNJaixUXpnoGXLGf1ciJ9kpaEeYKicK8wYkjqtTtWCa6x8umWvAVCAxMUAQbcx2TqkENcT1sLYnGAihMUB9",
  "key4": "3pQdHGxi7Dic93ZYKWi2sLbhsBSDDmLw525U62JnPgaZXujBEWUZb1uM3EhANDjLS81SAUEHf9Xp1pEgQEyfqStj",
  "key5": "28sh6NpK76KbMYAfi6KDGBF5fw3o2PMHqeFMGoijfnVtEkfm12PKpWBD8MrNzSHWjiVyTxHq75TLraJTvjqjLDup",
  "key6": "jU9aJvYdaddycsNLW5bQAJ1ubzokvD58Fihv3Sz4NQ6FowMUUew3mbmPRNuYU5XtjeXm2Nw2Br8UjQ2Dcc6dBUq",
  "key7": "5wvHVGahoQ6Wy88mXuXfpFG82juMzWkaWQkrrdnWuNzsa2eN1eWJVwaKzUb96tASQzjLDoFqUKVMGbhjjb7ZRrGd",
  "key8": "gvZAMJwNXJ8NVZYFDYb8DzUQUNkGFCDXAiatKe2PmK82Y8w85CQmzmmvSgxAQyHJNEWtfBtwMWyk5vjbBVpzJkb",
  "key9": "ZNizuXjCVeALA15STvCfCPG56msfkXqwFgwmFHbonxYRvGr8EHifjFCxepnA8CgmSAaKnZH8jMZLuMLUVQ5WJMr",
  "key10": "5xWQcE2AyykEcmcvnRfc1rFwmt3hqsVyWsqsXCT1kreE32ejS7GP7QqWDMytEFNHkKD1AxvHgsDuPsLEtQPPywA8",
  "key11": "2bfmnPf8a2AvG5bF3vd4amP17XEAtXRfznw8jh5fMRTP3iTp712YkGNBAUyFnQrHeKAWTWhcJDc4n3hWkEobeLUY",
  "key12": "csmNx58YGbjq9rSdk1fZ9scZ7Uw3EH3fB3h8fZ89D6e9B2DRXQ3bpmqvujPtzLZj9zDFWkEmxjH1nYXbTEBsUf1",
  "key13": "5T77JxmHtMGdCdvkF2WULcceMjU3SVZBsECfHkLqPr76aHB7eyT1MZ7GmbDALTTSxKJfPXmSJTGWEGqMqbPwWgUA",
  "key14": "AXzj8aHZKYmzGT5g3Ajo7HmiDvjLTBDtG8seZRDSE5ShBdJWrhrPgdM32vQHPKoRn7Ycyn4GZPiB8SRoksgKkzf",
  "key15": "JTkVZm9RZxzTK4cHrdiUqUrijxMxubBTHoNnCNsb5ibAe4Y1PLQaTu1mVfgWfknucXssqkPVZVKnnT5N8RZSWYo",
  "key16": "3BMcP5bbyhMatrr4eHpM1eu7n52DJRdagGbjmoXgegbJsTcFS8gY2GhwDao5ryPg9RHmkUym4KRRX2hnsdqHnG14",
  "key17": "3aQuFBkuUAHAyFP535v6nvRL3dfP63iwqstgTVqiMMu7t9FnGLk3a1NPbpjAmcGX4j7aM2TirEvkkEAdAktr4gFz",
  "key18": "4j3QUXkhE6FefKHaTcvhqvVP2XeicQTmauvw8boAuwpxGj4RP4N2BKPaqDAJhkUD3a3NEyWjbV9VMdi5B7RuEyNW",
  "key19": "c6GcJ6uvBtswrin4KsCEPVYG8VBqVE9wmFLWS2tCtpprhcsAB1UQY942sw1DjsWCeo4Wi4PXN4dCsEaqhQpJKhM",
  "key20": "s4Xfy24spRtTBQcTbarfhFsT5AvqWm8zby98pFcYbaSK1fvfix5FEy2aKWMFQUaww9jpzCV57zTcwfacshjoSfe",
  "key21": "5WoWBpXbp69r9m2fTViF7gN1V9MqTjVnRVVkKBaz6Fg7zJQATBqLidxPpF6N4uBBiKp8drQsUUP4seA5X4sd6E74",
  "key22": "4ey3ccMszcReuDKZBib5Yz8royN9Mb84ZCtpqjmnPEsTi7VYGHwCoVmFtXFEWUwaapHYFmGPgcDKwMAautp89yYE",
  "key23": "2vopF9BduiHjAqLLo6s5uya1qDnDoqrooph8RQNQKBfHtkYLurMuGnZYisdb2vBj2hNPGVQJcTq3ceLmKrzJHxW",
  "key24": "UhvsqeJzrpf4JMeDHn6B5Bn3XiTHYp7AH4hQcKwyZRLD2tkCSkjvWQpWSER6e1SmbiSx474cKHFGE3Ej626tXCn",
  "key25": "3dLc9DHYQvkyrXHzUm3yMdnCWqp6w2UAXjQuPNHKNACKEv8EhCWeEcFxEkVcuh9QEowsXPRNeF8WnjbzRyUBGbHW",
  "key26": "2igzqWkuYMZTA6krWkynsa5zELP7EnY4XNds23orUjSVZqsocA3BEQmNGWjmsubQvyhhBvKnzA3NhFFTCWPY6Y3U",
  "key27": "DEU9oBth2oSjKKdLWQpR1MCkCPwPPhL3sfUjpMNL5aptevaCSFXQCjEt8cqUFvTF9Jh96atDMBojtsrZRUAVGaF",
  "key28": "2i5q8ncQsjEwrCVQKPfQVu2WK7nz1cWfRtoyd1nG74BtXL5tuinUEyucDeMH3zMC2YhRxi7eqjLy7QPGwjM8E5rZ",
  "key29": "34NkmDurZqSv6mmQxQWFzubDRgVidkxv1zbgvzSGSes3DSWccGQKBNruVc6Q4FbmVuQS7wTBSXJ6BBR8ubYVatDL",
  "key30": "2okfppCPmLZBjdD9ZjvL4DKV34bo2ipT7xBKyBBUTNFWUwCgUMqBDmaz1F1Cz5RUvB54ipju45CDf9Rfc8UXjr4J",
  "key31": "5TZCF3J3ZW1YdtD4v9zLMakomYXW196SdPfUhMmMSoBZtERjkaA3jaVHQFkkDaK9BbBDRAtvEwvtQaizdARb8RFR"
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
