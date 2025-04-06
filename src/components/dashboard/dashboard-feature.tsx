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
    "5vPHgozHLF3YCrkRg9VYdC1AL5scTUCKYT8c68iL6Teu73tphfyZmsf8vuXsaUbcu6MrXN4qYsgnpmGZHzGXFfpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NWnrzvzPtCckHrV28iobT1g3b6NssFvsrzPkTXYnmWxRySUxX8Gt5nGF1TV74uTqUD5cQxDw2cNkmndrf35Nrg",
  "key1": "4wQX18UczMfmN4F6oezBNu3GsVMuZSGtTgWfmaGDo3hyHHE34JSDBigrTnEsMfBf8Cxy7BwrtBQZMMRgHrNxVWD3",
  "key2": "391dhNLB7He9jZ3XPgK4UKvHPz3Tyj51X3Gcq7mjmmr7vyeDNbhBfcMQbhsaMyo2H8ud4tLX7rfayzi4yrVg2HzC",
  "key3": "3k1iVwaZBUf7fR9V1XDe5J9BkUFeeqF5eCZfB43Xmy8VR1Mc66CyW3ebv7du2f5ZNAKEdiV7E6SXCtPXp5PbuRsW",
  "key4": "5N6dBnEnC4ge2sV6Ah4D2amHx2Qce7nmprBxL9KeQyWMCETa4S3KKita1zzEvM1EDWHj2QMZCjou6jYQ3sf6xfux",
  "key5": "4DtJRWfgLMyhurrTzUW8oryxLVJmSjjarjrR4Eorj7YmzVJqJTh2vRXh5XUfE3ULdvhiag3AwjC2WhzkianjK3eK",
  "key6": "5d8TRsZsC2WnHvNzrPutYsCNmHM9MwT1XdQRDtCPcmDLvghrmrc7fpXdFYW31AUCRDEhvjCovdkLiUJVZhJB9PYc",
  "key7": "3Fh24bL81cGq94CDM223bKtVqAQE4KKMmceMN3fDosJ1NH3JwbsCwA6EnSqPtHDSXjxTQiyhyYwoQhN1QXac8dvT",
  "key8": "NJ7oeoQzyMq56G7ajptWmM9AzD4tsrxqDH8ZHAw1Dya66zCS9YNC7DAfk9tqrRsmE5SJ6r4Dgqud1uKrtD6jGq4",
  "key9": "56oPLmuGihXtCRwVytZQit5ZALWTbtKwgKgp4bGSApgek7Dy3QBtn6eppEzqzwwwYBVpNNFkqQdHbyqQKLnfcAx7",
  "key10": "2ZVvU8r1TUv1DAcm1zTVMUnbhiu6Sz1H9kQKsqTeqJjP8PPpXtVfUhg9bc8BJuKJqYbcDpw79LXG4GgaYkkECd7g",
  "key11": "4MqP6YWwN8mnUjR44n5q4wLR5gEKaG2YbgU9rRf3WHbSpqK2BBrmahMCbfcDXNgBzwD61VJWx8dqQBgjTKtLh4MC",
  "key12": "5XJDwfdzDKjKLnzFkHc6QPn7K5KCRSQmZT7qUWMYDHvKnUifuaKa65oJeKEBKjoyoM2z6p7m83sQk4KyaJhbpZa8",
  "key13": "3WdjEyBKic8kgchBLGGL9Lo35UQcH1DVWM75Kbbb95175DKiv1VKQ8vwsYtDmkGmBqVEiVmZq4U21gGiUjYmewfg",
  "key14": "2uQh5p43fWim2iQeDFjR2b4p9UfT8eRrWuwLkDvFLqZjYonpABFaVNUPGYEfjrF3zB6x8qdoxW7TGHdx9QB6YxsB",
  "key15": "4G6TGvJc4qYr5ZZrherrUVZjRzYcJGKmvedzyZgbTB1kyvsg3ouVcQiqkkrsGnYx933Buwo219M5uXBDB29S5UUM",
  "key16": "4BAdf9FkSZQEqsQdjyuFAF7J1q6KBmFFKXRLYxGRXNAuUzykFf2JTVAaSocdYcd9Jrhtk7ZwzknqFZSthNxv3fv5",
  "key17": "45DaF6y3bArpXJEUdikvyjqNzoJ3tBtFML3Yx4QWScFRvEQbxgf9364YBXmawZBXgobZnswAhvnDvggbpPkAy6NX",
  "key18": "51jM3bk2bN9hAqMchYGJxzo3E4UDe4P1oiXJtXTrjfEkLxQoZukGGLwGybTjMJt23oZJgRQJAX1UxWhHvmPbmaaM",
  "key19": "5Fj9Jx4ViGoNCuA5WPaDKUgoUmmwCewzYfmzQExFaUQyX747hagCMhTdfRyYa9Tyt3fhGYfqxrnBbBPdA4UR3nCX",
  "key20": "4jan6DdEBDqJh1nBJcm2ZrwBgZy63DJSucgCTHU1bG9Uj32YJATkRtQKRgVYZZzLHK7u9gRNRJbBX26ZSLDrDi5J",
  "key21": "wGc3qWfC78rAGJAMXSR9Af3zkpFwgLTW5fLimQDfU49fkby4DnSyx9MW1mctJmaTebHZ2pVX13zUKD7tWmu2PFB",
  "key22": "3aN6WmscMs9an6hhTdkhvny1fPSn3nM1tHGQpHTP3A3zareNyTXXVM8ZzZ9vXXttzyUHjowxrPJ9mkMs1GuQvew3",
  "key23": "7hJ7oaQmJ62GVfer5wcFR7d66cxXo4tJBSs91aG8oFkFjWZeGWgLCYo46RMQFyXPSSUPcuG27ZqXGpZ572qKKeo",
  "key24": "4xzdGDQbaU5TW2gWdRrdQR1Y9wRut8SfiMAyqXQt1jyW5ELz7xe1Pvk1sDw4qNygytFW3mvWeQMxqRKVssgfnp1e",
  "key25": "5biKUexhvsYHopWD75cmG5MQ8x7c7ifLjY3jnKdrQCaDD4YRU3nj8k6TkQejmNduie64dUtSJ6PNgEio3K9TsXKj",
  "key26": "5qDaviuXAVwuC61cYzzqRdrBktHQzPUqATXAmCbbN2K9pT6zu7cQrrJ9i2Bj8TW5e9JvyqeSy3U4gL5feaXuRyjM",
  "key27": "V4fdG5Hb5VxxDkP5oBkJKZzFwqqMQqmfoeaKjvBJLNi3LmreaeQCCu3p3PdZXKXzXKtUHGKRzDjgf8PhL2ohYEH",
  "key28": "24dFqRoDz8L4jEpyLkhLnzKGj21zEYUhk65Rvqy6ytXVcXpWHzmYwh8bornQwEWPvtpC6CN7YxCqSu5kxXJvgTex",
  "key29": "24vnwjAijVAPDLk5ZWHQd7gLmLmq4v1M4Z8MuvZQUY68a4d5BLhPBUxyiVbGNAho8fevFUyLViTgJXi9oGfRHiDj",
  "key30": "641DtRBFu71MqYBKVduTKvLmNibVJdy4Ri2NwdjeX6wyQGW2wGRwmT3tmvuK7RdgSZ6pQ6xAEvhDwBn2LySzBQQY",
  "key31": "FmkCMXqR4imLekrXbps69xFQyiiCJRmvnQ75rkmWo1dQngAacCSK1Nzesf8BCc5P5L36cw61VcK4YUMxxam5Vvg",
  "key32": "5RJGeTvveSN2hHMD8XgXLUViY1SDDsU3sWrfftZSr93AwxU8LfnJvJ7QYtZ1xxjCYzEaHBfbqRo2NW5LCZwKrb6g",
  "key33": "2LvQVVtu4XkEJdVHRkgjwvf7yoCxsQYGT6D713YcUAF7HV4qWf6QEtF2KXH2zWiCKYpXdAZzgHprwDoa5mUXoMWh",
  "key34": "26MAu1f8C8pPrTAhGE1cQJYDY5vZNmcnZPfJVPpcdjmCLuAsx6mv7soprrtaeSRJ3FZctYcHzXgDNCZ2qUu43gQe",
  "key35": "2yL7BpXWaQFkKC7Hhagv4fgTECXY6ExfN8KTjywqAEACeQLc9XCpy4xezbfwgDVZo2bJWWzGp8aFaK6j8bBBJp4M",
  "key36": "DTZohJCVGKpaUMxKKgshAED5zKctoCxLxRdc2oyJ5z7Tbec3LDvR2T1bZK6qui7L1e3rr4xxNPLnwLZTnapqrMF",
  "key37": "49RLRPa9Hf9ij4ckbEcm6etK6Vi1ZVzGXgxPB7mKxKnuUortsdxXNm6uE2Jj4PTkYrJk5ziy1DgCBGmdaEoGxh61",
  "key38": "2vgXVvA5a25cjLyEG4m6JnXKEnvkwWmKURfdvApsbgWgkBS2qfG786yzPBxDV6Rcs4sKXw2bBrmmhp4Cvxhx62ai",
  "key39": "5YRFxqwDBHyd9SmX8zv4EUdExwKhRj7BEdLT4XUKTraJWz6amwRzC5auW7G2Z8ZDN4ZNGU3BwwuynmfLE6b7oaKq",
  "key40": "2c2atvq7vw5pGDo9XMWsc1t9S5Aovico5LWD33t65QKXDctsK6oSyXiNKhdLwCrRfP9dueEnGNJDbpPEHYZHkLtL",
  "key41": "g9nBRuqLHGRZCSxAnzyYrBdSa6opbd7oP93F8MN3Q5gD7BsC4MxKScNCtC7j62bnpdHuQ8fmnTaLh6YgkyQcPoq"
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
