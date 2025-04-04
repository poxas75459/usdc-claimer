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
    "5Aiu3BddFrCDJQ7Jc5i9NthkzDeKa6aQ3Nf1LtJGBsEQzVrRGEtr51yF3WsPFMaJDSjZjgCDhcQtCVMrzLzadtJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57d8picPnYDPMYtt6Q4BK26yQYQr3CyBWzMTtvRjJQjn6gg9MpxDX2uNU3HvvtmQoCiwPdBRf3Z8mUwcmVaDUXtn",
  "key1": "HebARGYWbwEihuyuAYaEBDQaqUSSyTmMXDn9ZLuYwjuVbdj7DswzCjGm7uYti8QxE1x6mjGVikF9Dnty831U9kR",
  "key2": "5Hurrod7qwmNBLWWyHRoRwEZod6TY5Awn25z7GBMxAsjzQuQZu8h4kZyq2XosA3B1tWrWSYwPbPqvB5UGeMgpCXh",
  "key3": "639j3QhQiZHk7r7EqEH7eSTzoeN6CWE9NfRzBc7QuzdxRYmkFDq15TJRknFu2EP1DSnfrVP163ATGqFEAAPLggiS",
  "key4": "DvxucuQ2c9SKcav4z7Hzq7ZfAWthuReVMQGa4tQWXn2Q3U1RJBLkG3zNbiHMqWNNsJW6F2kJjqo4Fy93WdmP5zH",
  "key5": "3b2F37MHAn9mJRi9izAyktuHkv1Lgy8tX2RPB5kw891Ck3zY9SoYzemk6392Rykb2jVz3Sk3vPFkauy5bCVoQPwS",
  "key6": "4TAnCkkJKdakugUTgASQjDqufEqQnEZhR7vDQrk7crjkx7sRXAxEKeCZo1yezMNfNXmbGbukCSGuQqTtSyoSj1qo",
  "key7": "4jFxiwPV47rPug1WbjX2JNzbViMxHSQVvt64KLbUpponnWrc5FBuC3RXnU7yHwSVnmKfGyaTqsS8kb4Gfx1uzE2G",
  "key8": "3ZcFCZFnkZ2JaibeYyWvcRXh8wqUC4nVxWqRyF6mauphqjMDmgvVU28zibB9LXxrvWQjzM1WLWMiTisJSBxSELb2",
  "key9": "5ANWAoydHWAaKpMqn9VgefonZh76rjzc6PrxdEJqLnZT8Fb2sZcb1EQHPCeAp9SV6xDqsuSKdriQiRMei4dFNGPg",
  "key10": "5Z5RpxxYD2RA29AEJ5buJrPKrTq771HUvGe3oiUdgLjWuaPyvVcH2USe8MzHyMFi6qLmZuSa6zUB51sLGCU4EQeQ",
  "key11": "2dqJ4oLSUGQS5RBynU1F6GtttPbBaWyvxMsHsCKmhe69ZLrzWG5Eheb7F3qZfZUDT8VFtjETTzXbWaG2Hy3qrcTy",
  "key12": "658R5rb3ByC4Kt2AZGjvwyoykMX97SmtRniKt2UEsZCGaSgCf9Q2UsxMJAgQMzaoPmzb4Hr1sWXb6f4joztN37uX",
  "key13": "5cDnWit4zEZ3TJbSadrLG3v2hvnjkk1Fdo4uUwP8o3ZZWStNdqNVYuScKMMpFBgPtLAy5VMDVDELavH2LizxvUUN",
  "key14": "3ZjnwiapjFPKo39mnmhzLUsU3yQU942e88j2EcpNJg1hAMgGuGyHEBo27QSA16mMqq8SjQrMZM4272vAdGXFBTVp",
  "key15": "3Dg5zEXZAGQFGuKgw5Woo83XJcFarbfiKTK9oQNZZztdTYEsNKyRcGKSBaUC2JCPCTf2NwZSTW1Yo1jwZR9aWCKc",
  "key16": "3x1tQXR3FhQeBQrXRMWCNJVopWT9yLjqioZwJKwkwvD1FaaYGS1uiKz7nCWeWWjNbQHY5dmgBVmH9QAx5ASBg161",
  "key17": "37GDQjBbEwpKzmi6F7DGFRWXGkx7ybcQvhau75rN7bYGVpfj8k3PEpieHwBEEG8yqacbkmpyKTf4yCnENhgW66ZU",
  "key18": "E4JeVjHcL1bst37rgAkN4oyRKoDKWJbjMpNufnH3XqgfSfU8vfXTqLeGe2r5qk3p4FJtK6t6krt76JSSyuAH5ki",
  "key19": "4b8A1w9Ge8HvXo5wXtaET3mpTFaTYk2nppUS927WendAfKbjVZvFNGsDbjWp6vzrUEHRqjQzsN9WyaXrpFMxatLr",
  "key20": "xu7wK4dkQ3rYTZZQDBzFCWoGSrjm1sFH7NHWJx5Ftd2kPQEtuf4SZHQTabvsxd7y5hrkFLfHxZC7FJU2zkkdcr7",
  "key21": "3jmeVbU3b2bUUwecX216AqauqPfgauX8ZQqdiR58orfAhng4CaNtDJxoMiahiE96zPNAZzNptQmsnVYT9GUyLdLf",
  "key22": "47dNa5rysC1C1qNwSeya4NKbs4XqYse425BZSka6Bi27yXfVF7CgMQeSyqwgWKmpkZM8fE1ruYT5hg8aKF7vS2A6",
  "key23": "3FJ5PGkYk4KP5vS8MZTNnzkgs7VezqUpZ3EX3KVksH7R1rkZv6GsLdq52rRKBJEP8GUCPGKyET45eBp9snZ6PYCH",
  "key24": "9Xnxiw1GM21naLNQfodhzPVUnv8GrHRMPBxd6eaGqAFrSDhWjP4TtEwyrfiPxQrsQgYSRWD3vBBvPs98kpsoMvd",
  "key25": "3ePyKGwHQ6s9M6sGWmhbYKmjq8Fntahrgmwczyga93d1Y32edtBDcUgBJBsqdAS2n6FPQA7VT2GVoXT7ThRymohN",
  "key26": "TSW2jv1DEVRUhVidmdUZ6b8nTqmsgCRu9YaoyE4N9e5SYk2rPifm48cBYiQmbh5TGx7v5teiB3UJ9hGDzA6MocN",
  "key27": "2ajC1Zfcjyfg42wW8WWA6pBUGzJjaMpawRLHwDZi9CU6bPkca4sFEqxQXF9Mzvuww3SxDNA18qwsH2DqhonGhvT6",
  "key28": "5A1x9xMaPmsdzCKsDnMd1eyEjhsr1CzZziu76SqiuY4TtHgWfiMqxDJHBhXRKEkWjvrGHfeawf8t833JzvcTGTsC",
  "key29": "iYctbg9osQ7cpDdisZiSXSF8HucJjYnZVY1aexdzFZSJb2gy4X3D2jTpsCeyMK7WDR1UJE2WroFokiCXMhp8HHr",
  "key30": "3oyAYHZXFV4sS9bWf5M6TgvWbYzm2TmwKs9uoTVH1H6Hq8BpXKLGGtGws1nfBuDGWKN3MKyYXwRofcV6mFe8Ajv4",
  "key31": "4jKLNeKoXSRFkh3bpTKmJ6tpztGKu7y4m5NDFwrTZoZ18MSmVk4SAZPhE4dGHaujEQbkvipvniknK7zPAdWNsSe9",
  "key32": "32ictFDTNGZdYdXs83HhwAMSUDFr1RxkD6cLtnJA7CGRWHFpxjhfG8Z9DM3Ez5aXKhReC6SDz5seFAMUAXWQSJ76",
  "key33": "3Eb2cWZjnt92dc6ygEqzF7sV9wG6zh2fdRvWUV5e2jH4rMdP83PjHV9TBb6Yrmcmf9NTuHJjtvkExPcYHbkQHzgx",
  "key34": "3kwzDaaF6tfTPWX1UMXFEqa6xsthq2gFqzBYvjiYyCgr5bp4GnUza7DKQT198TfSXYVVvpVkUzJZW1YRWxuoBVdM",
  "key35": "HBSs7sWw1oruk9JzJT1zAJfChXHK1fwo9WawATEnLDgiQt42Vz9tvYcidaHR1iSuEJebojjPMPCTjVJ88ZZ1wpC",
  "key36": "2hqejdNvytXHwX2gKUMHUzZqUdyw21LQuati1R8NyTQsWjp9GUfjYBvrz9vMuD9Kn8T5n2M5tpbxoy5MvyCy2fLX",
  "key37": "4cxWKp7HwvXFbDZx7ayQnSPaRKj6jqPQJnityU5Gk7tig4t741EkigGeGaTXbhH1qdWFAJKZkRfVhBw3RXG58vb6",
  "key38": "5Zte7xDBpNf8V2zEMab9uh6f7hqpWwe5o2DbJb25SaR9ZnCkBRSUEvxpTUjUS1VgVyydKmtEnsxKPzCHgABtWVhR"
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
