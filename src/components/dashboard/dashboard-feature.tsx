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
    "5JAYyxU4MxPtxg7nDdwFP6uWBDm9RF9HjgzNV1VdTQf2J5aQJqv5L4jrYhQ5uhg8rfPBx7uBqNTrg7ntMQZYc8ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RyCANFjgipBJhJyEtRJtwgrWoUK7tN2yqyvqR1yeRMQqXSmsKNcUTC1Uay9WZrfNhSDrcErA9owDZij1VuhHRCX",
  "key1": "aAHpJ3jJufJNE56mD5tN1F2jkczwFj3j7E8b4DgQAGdWBxoeiJ6VW6Bf1SCTMB481jV7bSxQTtZqFiP9AtoWwzT",
  "key2": "5v15SJqWB8U9L28EoiSruKQo92TKjF71wHwTr34oYYrqVpDfjL7SvwexbyVu2mmSxm1Nf9dVmYUzJGLXogha6PHg",
  "key3": "5ZcAQb4wVgHizq6KbYeX48L1YS1nsJwUswrihxLxtj9bDZYAtbUWD95N7MW4bYJ3ey31BgqNWsbzvsiZUis8nTzu",
  "key4": "4KytaP2B78y9bzDq8VQc5gM5xm4NBabEJBnsKwt6AsWitCCFUwuXz6kTjCTQMonwyE2E6WCpZBejFTfS2vEooqdD",
  "key5": "Q9K7qs7Kv1nFP7YZwtHmzHxFnpf6vs82DcK4GXBfLKGuVyXs4dTWcXLK1XKfhMAthDSN4unGjLUdXKknYf9jTMA",
  "key6": "4KUo1qYUD3Z4eGzvX7QpRZ4pnU6BSUb4DRN7fPcvCDkyjn3t6PrFHvvsqRjFkweRqX8og6GvQYaV93eYkt1rXnby",
  "key7": "47XrecXy4NRNdN75HiJRUBSKQMiSsKaeZnXw2Zey9yrPsh6UZ19ebCY1D5M2ZwrgFq7Xwu556iHupQWcSzE7siQj",
  "key8": "4qyXkWRQ7RDC5BctJhKzqQ6yim8s7YGRRcpPbfMfXnCNv9DBA5bTy9AEKjHw5ZceywDa8AjpPTsmk6NPzYrVzrYX",
  "key9": "3cEd4Czio5VaFgHEaGeyeC75rcrEQvTvu4ZB6ypaZ6VXgUFTeDpKxVZwU6qAv17CHFhG57AGArk8c9Z6jqXXXUBb",
  "key10": "3equPja1inSdrAW3roXE697Xqu6nLB79vHqXHCgmWRMQzLAuamux1kNoDGtdDcruM74XhupZPE3hfJvY9dEvcHr7",
  "key11": "5e7ZwR9TSZ3deZYwekve4QEaMFBqHUNJAPXQHndcJic1j2pRgzG5yiiz4au2ozienqkc1MJrEfD89gvKwQriFQDz",
  "key12": "2cY9WW3L5rp5yZwpMv3oD5uRDtrPWgz1TUcFoJqd9heCiZLLeeAV69tZbexjcdqePC2nw5kdAcJicj8n4TKjgTPE",
  "key13": "2VwPt8kt5JgkUuZvJMHfskmAGEQMAaPtCoWX7EXrz94Twp4GFZ6nLJoDnZVPahDFqzPCWS7SmgU5VEC2ez44tM9y",
  "key14": "5LcE9mcW1NjYZbyErW5Eq3d257RyxUSARE8tHCE9uUaN14LibB2n8UuA4djYY7hYve5sAPmFnt8qxxpeZjxA2SHm",
  "key15": "4vGhhVPAQVeoFZQeviAN562c6cgdKK7Wo5rRy5ku9AseBDLebXJMo2Tdx1aKJHMbdT2heZuhLpZj5VxghNwZeQNX",
  "key16": "5sAvxourNeT2VLocDPCv5CQ1sdob3xFRr5ipNc9ECffAecGua4M1myfa1wCpn6yWa8927CcLKh3qCTZUHen7kVBj",
  "key17": "2ZYg2gjeu6MsUDgzbbNGZ7HHWiMpBWmMexMRaKeHst872AuRnSU4YgMgNoaHuwgkXwSgTx5DNrhNJJRsXZmZgG2M",
  "key18": "t5uFStUbn948VkTJcvtiekUHwZC2zcxX8TWhZ4m3MSN8YMeXwG1gycA1h9zViNRjsZrrKW9nhvBuX6n6XKLVfLW",
  "key19": "5BQ5scuXKWSMaF9zjmgiJRTrFvXnfNk6RsbgdZstRSGAeCoxqdRTk68xuFwFUA6iZq9btwjLoGZse9GSrF8kqeqk",
  "key20": "66cbSHboV9uBQeS4TzWs6kVjZ54WDDuGDfJienrh8oc55f2AbDct9cSFzPs5F7CE2bvRiQBDVTuFoMB2D9GNky7k",
  "key21": "2mFsTsSTEWz8fwgqb9pwv72QAejiEPzrD4vK9z1E4EprpKPtkZfGgkCT3mjJVf7uABgLUc32EJt3FUKK6JMYtL8z",
  "key22": "521vC6wkZSGv1xQcUGkEDVxTa8BLBJdxGLiML1U1G1ZyZQT6Aazz7vEeuPtLbgaRKJneupdHx3v3sf7wJDoZui1K",
  "key23": "3MgFrnaFUhAMHZGdkLKGbRqCmXSjQZVuikkacAT5kXsX1u7hrQw46Q8f8HAyKWEnJYtmEJfaZRkdm89dSRe23kgC",
  "key24": "4XQcNp1iUBf2N5X7rCEfQapeqmRfeZraDAmmfBsvkD7XEr1yNdPt7UPnVfffZYsksYcGt5zEq9XR8oAXAdHipUgA",
  "key25": "3iqRojtr6F5o4iUjYJB6PBYDxfRmcY8nXPuonqXbnbTo5XcSvudDbWZu2DCkyZhhkYiYGVHADrQdZPhqV31goSjy",
  "key26": "447wqobHXqGSLJXZaSKdEDpmeV9sLAHbUxmfd8vAwgPRoudeaaKDDXUJx5sKFsiKZRFW3sgV9u6fbkCtC1GR9hTm",
  "key27": "54tLeCqeRZbzE8ZTZLSw1EvWQ7mcF6CQJNBH3viMbyJSq7KUduEmfV57s92xyffm3D7yfsJHipk6Su1g63iW8WA8",
  "key28": "e1i98qnFywi3vky6BwLJnjs1AYXs5WQbpUZv3e1dcGPSTydKS6Hrrt491gPXrQ1qaPiW6J2uZWryB9HUN2C5vNr",
  "key29": "67ZXCYjn59TWuwJ6HCnWEJf9ir5nS2XpuZ4eaQagVKCpNbeJTNhy1XiSdQye1P2yg6voBrLM9vfepNxvq5jANYJq",
  "key30": "2q7qPJTNptxVJsqSgNxAkxy8SiE2bJhz7EKQdAFMucXvLXTfMfY8r47xtEF9g5AqrdEcQ64SaHoEbZv5UHbzPoyM",
  "key31": "5wsZhwDzMchSZgLsN5FRdAR7Ln8fBUkSsLMjRVy8BisisYoM5BV2Sj4cvKQtbJRvSi4eP1pBQRgoe7Byf7cgxs7o",
  "key32": "41fkWZhUmAABvpVvmaFWqGzQkrpE5MHB1yrp9sNESTBsUE2XDSzLeMDB4g96ePHKH6HxuiaWBSp4Uunz37pSm3of",
  "key33": "4EQ384SBuPWqBQAARWpXewcVLzcn3ruNmQGmNhkFuXxpea9iP8rJ8Qe89jpftbKiVzNEF5tH2zPVHzpVJcQyjBAL",
  "key34": "5x5E1Vmz3eZcMAPJJ4xvK2AoHQp8YKBXtVcF4ya9mWTtNgaUMg2z8yFoybQ1nyJi9PDEdBhDQ5b6xhFuAUsAozkC",
  "key35": "2bjmJkLMj4kwmxF4jPPfVUewmcKf2petszNRLVBeKSxCCjSSDJf4y1VrDGdiEKN3cXnjrQAQD85DfKHTem8kx84p",
  "key36": "2ZKneC5p9HCh4yBL7BvSQEGEV75gnAvKw5s8QgeUzaUkoZEtbPQym446pknW2sBkpKG39nZ9RkoJivfoPEEaYKB7",
  "key37": "uKMNiCKZqa23HDrdunZgKUJ8ZEj2EdobvtgL7MBNa3MCUpixusNy7MJxFMhH7rDu4yPYeVWT54V7q5Dx4tmDcfZ"
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
