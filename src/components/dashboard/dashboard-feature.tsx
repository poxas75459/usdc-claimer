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
    "5artZahzTb7CZ8vjf6U46rF1AHK4gcNKANWD75LxFXwxVMHMRf5ZuR1Mc2or5tG8PwkTkc8i22A7NzjwMShaWP9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjRhSrd1BYqetDKfsaGKFAHqR39PJG4ekXJvnq1GucFaBxon9hbfvE8FsUh9ngbVAvnGmCcBXw1tbWYbqdvj3ns",
  "key1": "3ixKi4vjMCPFmb4tfxY8VtnQcDCQfnAzQdcMv75zTyDTi3hDV2gRBcTt7uCqHTur9JkGpXZkeq1pJKf5BJ9ZkAfV",
  "key2": "4zUdETyjDoi6hFWJ33mVPsYB6sfik115zJLyoji9RFtHr8MWVJBWMixKm7M7p13V9bCCtQRdtog7UFHNhynJH4aF",
  "key3": "5WPcbtECXEeiE6nuxBUBTUfgDrmK2Gbnpb9HEem4iFg4xNgTfDcpH38HNo86zYs5Dif5NeoAxdwQXCqzDLgNfQK2",
  "key4": "53y5VKZFmYtW1b2FQDT9dAwHyrW6BtsywJMRdQgWhSnUg3HqYqZc84afh7NfYYmhGKY8t6wTpUUfZMEenRVjHeFd",
  "key5": "2U1vYj1jro7DZWCCrkr6aLBTfVJHQ37F4uikRFrqPZKVL1Q2J6LsnZEPCeKSnYTGXjFxprCMUv9RNw3DLyAbgxGU",
  "key6": "2Zy2u7fz1DtABh1gysk1rVktB55MZeSvoXf66R2NVrJ9TkYFQCgJ2XCXQb6z5XpbuDR7ZXiEuHHoPMUqFMQzgEQk",
  "key7": "3zkszvdqVAoxcxRuaqFZ7SZmG7FLyxqNk9wDW1AzbiaaZpFGEDZxKw5p8rSDV2dY7W8g1w2tMotkuAvb5A6GrWdK",
  "key8": "2xvk6gBHeTZXx9Fp6bptp8yXAhau1F8GVrLXJxNx8Lf8QEsGsCeJr1zT5v7vtkk3GSwg589D3urDqf2yEsscHHhB",
  "key9": "riJN2YugNRJwaXBtNp4VxLLWGJYLbXerZGVYhJmJjTZVLrhk9SD6HembwrF76UtKSi4scmZubepTXi8bYTgQs2C",
  "key10": "GNVFYf9N7wuzRoCr9Mrx548PfWp9NkCQ4fGKA16rsHPVUadtmwTaCFDHQdNtC9PKK7NyudpD2MNwqXYe586tGqP",
  "key11": "2d7EMDtDS3bh3zt95WZZbSQ5ieQ1WmQbhjrBUjxk4wLTkLtzePKr4BS29PsB33fFMpbhm6C6zeM5w97uwqfaKw9W",
  "key12": "2BvXNNvW8nMX1BPm5na6ZSJzqYYy8tv4msTjFHrWEiGaoetdtehWRuUn4B7dvZB7xL3dEKMA1c2kMFF4f9b6vVPC",
  "key13": "2uv3hgtwjApdm7h7EsvAUH7UPTQtxXWQgBZH1be1ifZhCD8RGQerAT34Pi9SV8E8dHNxgy6frdNH6NXuiromN6GQ",
  "key14": "3WdqabT9suyw6Ybxm6HBdsVdWFHLW1qcoNSFxeQeAYNYRrJpnERUi3DT26nKgxcad1rAdGEfBGPCUMXRVKRTjqz5",
  "key15": "49Gn2DofRBdBXbySubeBvaxkYbz65ruPdW2j678hT5F3eYtET4JHztqkcm4wvpdH85fJSsEkB4GRa3ZUK38SEKQw",
  "key16": "3FfxSogRqHyGjc89EoEPzsBzAoxxTjkqN4Hb2k5P317Aq6rp2UdqjRY7fGEayY5LbUpTYL8hwqsdhQWXwmQRJvHE",
  "key17": "65c8YtnKxuwxGCTzT6r4hEhxAq1HyqTgEiXeUoR9Ej3d3K3H6h8JRkuPy21jDt2dGkTiNyRnexaKFNigPdrYioVa",
  "key18": "h5YCp6WWTMmiNV8gNU86agGyxk1Xd7fnYh6HmVfoo3KXtJeey5o8rievnwzoSh4XLMBJcv1S6b55dWsCwBjk794",
  "key19": "USv9CqLZXF1bGWxbUEkEhjZPFn5LHvdJukecUxMYKc2eVqGfMXZAYR12mMm4VA7abNnT2rhq6mVBNA9tCrPc3YF",
  "key20": "4V6cnsZn4zC63wE2HepURbBGmxXftF6UZVxDyFpRMweBrafyZhXAypJw4nqTLjNyMVdbiKvgZKwESVTGwvU6vwrs",
  "key21": "5szzxyZMbMfkneFkPeGxhsWXrYeXpbaFCDT7mNQJq2o8ZWrEvD6vdC6DdiLGqT34LmzCuzsiM8TDgjDK3nnTJGLN",
  "key22": "2cZANgr85KV8fnXCDdHYNzDE5r8otE5zJ8RMZrnb7oGujA3ecCwt3ZA1NdEoAFwFwajrP8vnmbJxScudAAqbdn8U",
  "key23": "5a4V8MCGvPgzdy6XCZfULQrkc18pZ2gaS1jnnph7JzBFVBTz6qGaZb5kfQgVtvzZfv6tNzrwvtxGh8UuQrSmzPAg",
  "key24": "4AqFj4SK9XU82tZX3nBJr4LQw21jDaRR2iAZn6oYN396dEhCqXPWRncsr67Jp6sPsHCKrWDsRi69svGMSMYLrauf",
  "key25": "wNGhNT9ZYfvD4wmETCR6Xf7wmgx1UPANgvP2jQKndA6ismf9qurV7VMBYBoJBSojtAJhSpT48YSRUeniSwtCmAW",
  "key26": "2oswrj4xSq8cLLLzZRb2QVBRdcKd8bcc5pnuPdEu5AoQDrSEGHrVD9RByHx7ZRZ2ytJxSdVnNNY7caUdPPy3Ata1",
  "key27": "2v34Xdsad6hRV3JUzwgpfQEboZK2tgtNFoiBWdCnC4Asd9x2F5GBbGDGKshqWWRmgeH3eAL2xsoRkJi8MiPHYFXa",
  "key28": "29MDz9Th4zroXhRRx3WmHTTDFc1sAivFWoLZWRUVpcfzWmm9z3KQi9irP6tsQeAnXpCEf4uwAr5jrrU4WR5swRJW",
  "key29": "GSSmDiKzSYoJsbPpbeJAP75tCk6ndupwUWarrSZtzQtpgpYJ5mTKegCgyus5LDaqZikbnh3wTrb9jaktBw5DXrn",
  "key30": "574tJLGQfUZPCvLqJZjP6q1cu6UePr3qmTp6vdwWPFnWydAbHnSGK3oBeeaMTh1evrFhX6odDwXQrXB1WS4foYCq",
  "key31": "bFkYZMQYRzSKd3ZoLp9nKpthRRLtRyphRn59bwoGFwmVSmTXo6qP6peYDwTXrgWoRX3nVrpStqDvBzkLfM6MLNi",
  "key32": "57nY7vZXtAw4HsjEh3w1mCKuRCVMuMgfJZ2hASyTQ1aJ6VXymVXNNH7mdGpLznYBUscjszSc9Gsq1MyLSYBszhk1",
  "key33": "2XrzyxoZKugxrWPrDsGUG5nddrPXVnWi2EP8ZYzWGKg4iCsWK8jtsuK1ztWJRa4c2Cw31yveGzswYrPxhgQGq73c",
  "key34": "3pyYYA4jBG2ZGNKEgueFBcqXfWmWCshFf5jC23roUFZ19LR62bqLM6DWLfMfRZNHJhoZAznWDr6Rn2Nn6Boiv5gZ",
  "key35": "3jptWwKB9UdxS4S6v6PzZxwXy8jmtxDxgM2bp2mU19UNgcjNcdxDEUGA5Qn5rJzFa49ELYG7Tq9VMm6cXCaGbP7Y",
  "key36": "26AMeqxDpfUqsjgj3KxP5Df7Xcv7C6mTQWpoCw6budQ6QSoDZQMYa6qP6FUmBKyBNGMJoXFdC1xVzv3whkkJGKwx",
  "key37": "5WDtCJqJ8cd9FYGgwd9jY3JtW165cz4xH1tP2JBBcE6V6yE8LnxxZEGCMtsHBDZkYPHLzw1E9BaHyTWR5huvDt38",
  "key38": "45XDxLLZXJpj6DSe4cSEJWrYo7hk6V9pZgHw8D6sUw1pfNqYVZ3AT94ZnaYHM1wtnEtu8kaPuTgcaGjssbG9LYkp",
  "key39": "5H1wc4mLHDjsfpxmYC7azsd94pUucrSUf9gXBLomNCYqtMpCAZ2yXhKEm937oetj7nRSGckaZvCTJ7ej1YPiJs7G",
  "key40": "2C5Uxihkygk3pMCPD1j9TunxgroXLhkxwKCtnQ7zyQaPkmmuw1fwai24KqiK8YXiQWnuFKcWW1JEc4GGgnCfWbTJ"
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
