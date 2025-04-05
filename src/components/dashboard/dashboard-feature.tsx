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
    "2EGduGZfX4B3yfoLf6QBrifyBNcDgnafTb22cfeZ6AzZSNbT4meHqHxd5w1e2T75fjUBEJGKqKUyaqBXqRdsaBAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHCfRuua17A4EEW7WQkJix8MUPgFpdhuT8SrUZyqnTtS5nZSbt6oRZoEpBByfEKj8WNHApUVgS1baEVdkCPB5Ns",
  "key1": "3Me8MfBWmkU7DkcSFps4NBYMdCDWtdvaVcwXwkDcVsd9n1pbujebAgMbpZtFDoBcctVmHew3jLLc13RvUxPmpWY7",
  "key2": "4GKiGAzDUaG8xmuo1p1HSFHEqJj63JtNALg82fWV7mdyeKecr28XWwJwP52KgV3ES8UBcLGFTMe9hpV3Sfh6qRMf",
  "key3": "2VQnJGdJf4EYiNcANK7cihwQEPNrfTjgGvPcfMwpXvdKWEetsmB52dpCKb248hHMUmTrVmYdd4mPmWb3kNzXyWcW",
  "key4": "5GTar3YMxWe71gNmDDW7DHdSFhd3bKYb5WNkfh7w5Hu8eAxJj8t4QZYwc7Agtf7tnXPa9jWtGiMEX8m3NshH2689",
  "key5": "WbcraTqMQQcXYbRMF5SYtH6bJiHzdUYDJ7KatmgmGV4KMVt3EJiL1m3xoZW9BrMaP8qVQ9D7Rq4Fdr3uJ9akhDj",
  "key6": "56uSYJMPPmQU7FRXw5i2mtbF6f4yXGpkmtYy4XT5BTxxsmYQNsm5F3w2x3q98wWRxbGYjmD4AHZEuefVu841W3hw",
  "key7": "2uJSqojuT5TpWPxigLnEjATG5JgWcfs4LqUaVzrBcUB8syweGLBnfXz6AqVPrxHQGVZBXWuUVk1JgcQPSLDbk9N2",
  "key8": "5j1FcymTnpsoexDpBGKPZijagPS1fGAjYkzgHzsuinHJFrj8ZVuarWGZ8zqE6Gg1TzawTpztzwcdkQ9Ex8AWPejq",
  "key9": "34mZ6xKbXsWEeoy2615aRfcnNqiPvwUiUDHZsHJZZQGkeKGgDaixZWfw2zKr43WJiB7jJxSMxuSKdbB1HSymWb8c",
  "key10": "64vnEYv8cHNyNNGVyEUJ926rLi9UFuMvkrou5ALm6NecHTrbqUZaaA15v6cvbj1Tasyiy1Fmerb7WKfcMxS7uauJ",
  "key11": "53RRk3xRd3bcyCMUjZAh6Ui8qdYkYQZkucA9hcYEyWK4B1wLWL1Q5owq7CQzYZGmwmzp8tExAJN8LsyGi5zgAc8f",
  "key12": "3uAw7WkjtHfbcKQ5Lynr7cb3EuaRMouQS7Nd7wtJgBN2SQunxWN2KMgbkze5EwswaCB3Szz14dHTj83uBdg7tZGB",
  "key13": "38V5cipVxcPQ8feGVZEEyv97pa4JGAJ92GeZT1PFcBSv1U6nmVxSvx1cCPojtHxaSMCHyvvEHYFBDekiLWjPD7Un",
  "key14": "3c4y5xzcgmh1KBY4reMZU61hdTUk6uwd5fvPdYpXKeC24jJFRCjhVZWzCCvfNaXGDLzvYdXoK8a2KJoaV9E5a26t",
  "key15": "457C9UXxFrL8iaQVWPBTKebpJFTWdzRZJcUujWFNoUcMEE1R8r9dJoVqHCDdYfHLvrc8QCPg3Gagr54EQaiPAZv1",
  "key16": "2CxEZr973wfvadK57kPtkztrRGJJ9Q3QAusRin2ZqASEZ8iqdGFZFPC3ZUGE2r2DZQ3UgVcaGBu9izVDZ97Sm8W2",
  "key17": "35YWsCZSmtJjhY2vuhZEdjDQ2dnYPpjgr8E3PNy4qpqFFewhPZXMZHu2P7Ss3uS2VtP2VnVzR81WdqWs1MhKv9Dg",
  "key18": "2aXW3DHXoywhqsa5h52D6JZGB8cCpuU6APrqM8UKmQrtw3syxLbuD3co2br5hHTYLBVJWAJDgb2x7PbKLkzmvFEs",
  "key19": "3wUfEfriCi5hHZmF4SBosbF8oKPinJRzbBe5sLvEib8oRyRaYpYmMGtWcAG9aBR4ySMUoYjdRAgRPyCcifYE4Xed",
  "key20": "5Znx4J2YK6ZB79a5KkGDeReL2V3mPtu3tfBc9ZJyU2WizpBFghkC3B4Tfm2hcKQkrQSH5N51UkZxfpLqVEySquaT",
  "key21": "2hLNdod8Yn5RMb4K5iMPKRbXjbgNFfVQxgaHwn1kRSnuWTeXMumx9JnZM48ssowiiVLmtyTQYPRLazkCAtP3Xao",
  "key22": "CqbY18dPiQCxybbXZMX7g24DK2KyPhA5xUhEFDX8vnW47dC6QZo5BjFP7v5kq6DHMSV3f8yVKunQDn3WCA4KTuF",
  "key23": "MGxYtgooD7AMz9ar5Z1D8Lb14Lp7Gq2XSMGHguKwPmFP3T3nv9iQfZFXSSHTZq9gagNShw6tk41gA1it37zKmUe",
  "key24": "5AB2jq9tQk9gR6k9jHu3Nkdtq3C1mGyLaw2qeM89ppMMkrHou2HARjgkhaWmYpSXPHyEVYnYLyJ1oKX94GE1zkWS",
  "key25": "4YcT2qUQKsuWN4ZK8m3N61Q1CB1Rc2SwUbrH4o9DfvRzb4Tr2Qd9CaJxLtnuTkWHuCBKthE7uE7ZrwjTN8TNdKKw",
  "key26": "53AGzrC2dVC479CLM3vnLytD99KuAvowqK9ScJTs3yPcfB1E7J3qwNua9uMQX3fCP3G9AqhhiQzmExZ2kgcuDrbe",
  "key27": "2BGdBtxmuJffBxSg4JjFJAKmf1xhv7ionyefnxZz667PcTWHGkgZMA9kJmRezB3SsBN3cAmNtYAB41LZms2FXduF",
  "key28": "4JEQPgxLT8sd1tMDdUU5RWfo75vvy3o96eu7jnMaxgmhQmbLjdjdXaH9FYd4gzQDekKfPUM9vpXRnNU8gVKZCtKn",
  "key29": "zEtDCLVZCRfhpK8Qa3KZ9dUWAEweHeQrf5jPAkn6WvKLVDXkcR8kkirVtCcWjFbysBJAQKFCfvRjxsjfpx9c1YN",
  "key30": "35TTPrETdtxRwjEDsSjRHJba2RX5wM5oRGyxFL543iZ2dh8RChSwcShsuLx8AS9M8Yq4BdgMTtfDoWtj1Qpuu1hY",
  "key31": "wakPhT3VTxcXggya9GatAZRwr5AZsJJ5KVB8k8qAEh8zPjgum6JCjGYEzEWvanrsr97QoAr5gZ8CkyQP3Rzd6jE",
  "key32": "321gv4MYqt3Lf4PHdvTwKv6eXFkeA2b9TgLxk1PE5fqrv5qZH4Pai62FmwdZjZfvW24nLy2cG6Wb4FDxuhs9VuWG",
  "key33": "5SDZURQU8GhtxoWBeEdh4biL4w5W425bxFmyePVwuqzCtWumuSCzpBjTUJSw6DZjqfiDnsKK3dt28vVqLWNzaeyM",
  "key34": "3Zb11c5xPoEme7mLmtr6VBpB18o97oHeG1FPiwyjQGNFVzxPmd9DGXPk8Qas4usKYYrjWUukceqHEKFmPPE3J2Xp",
  "key35": "3VDr78aWpmsz56mi64nkWHcrGNWS8dAiDYUvQAKeAtCeWLL3uv7FBR5a4Hvb2av73AYNJQ7TMyRVfBHWq57qbnco",
  "key36": "4QHfg6WJGCv8NuHE5tbXH1keYpH7TJJqSJ9zh6tzG1X4BPRLwApe6hedwjqQZs8DY5vvPNyBmJdFdFSdu9tr7mBX",
  "key37": "4DqV2eMxnNC6fGb5mCZswUN5opgdCXHDWAChf7XLsCfDcCwNVUNSqxcPKrNiq49iozNRDCz8R9z8c5hanfFMhHop"
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
