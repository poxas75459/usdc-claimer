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
    "3oQ1LsG6DZJTx5iZthp79R96hfWntcnDXDf9EhFXv2d9BnK2cvRjK9UfN4MXp5VhUoxxLEP9YT42PyqFFZ3dK9st"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aduu7qujdZDMeL4hBd3gmAoW8oiCXPpW9UdoSBsMHVqHrisnhEdiKrjFvb4wzwP7wpjZMueCB155C1NRfs9faqy",
  "key1": "Dygs38muuTdJbwmb3fmHEsnRhuPmsDgfZLc69isAnq3hCpS2JEJkYeay5cNHZacFmN7HxbiUpEznNKcdEaYSpuC",
  "key2": "61kg4hXDUq2NYANxnR7gw6DfDxtjFi98xm81FX6UpEFVA3gqnjH5CkTsuF17cGcZLqn3SpXkHe8HQkb9BRJZXLdC",
  "key3": "2YuTVRnTkzcR8uCpAZjhNUKSz927UXQBACGnPfZBo9b669NQb8y1y18pzHdJURMzGeHfY92kBihAPuS8oqmb7z71",
  "key4": "5Fkw6avx7jRhzVRkKggwDr8z8nTxuXRtVvhippE8Unqb7eovWhFzmXX54kHDctFHKYu8tJY647hMjfVkfyqqnhhK",
  "key5": "2tWPCMA96UDvDpFexjmYDhLdPXCnwFhDMUW3N4XXCeXRhh2jZwwt9QkDr16igjmbpwXmakXXLLjyzDBTvoo1CAd4",
  "key6": "3TqasomET2YUfxzYvhG1GXRLtoXWmPRH6ABSmHdD1JerkUehc8RbcdrcCKxteDSXrLvYcgom91aSVs6SsJP6iwZ5",
  "key7": "3mCZx1mSQ3WgYZtcV1d1QwaqFfnTX5V4ozQ892TxM4Q3aMkd9bXehmYKWHiftTaxqHsTb1NbNRA4bKwzj74jVDkA",
  "key8": "HaBhja26DcmqjREfknUDRRvy2gnmK8PNbjFKBoZLY7HF3ChnfXMCVBXhAjcDb1GDuEcgRVYQoXEyhWxfk8oawMG",
  "key9": "a1rLAX17fd9wu88dysvyV21QvYBPCpt85AZ4HNuAtvE66f3dMTs5eDUubtbvp5NScYAoBQxat4xTMMa2NSPGtLS",
  "key10": "3nYbEDuXQBK8Sd9LvwavKsf3J46FVDLNzeKGBKXpFmMPDV9JKbjcuKUy5kJKfvV6t1YANKsMajsb4GxMH3z3ke44",
  "key11": "2rMFHGb8p1DD4CtpArtyoEUERrDh3QdWjzfXD8oGtKwy7Q7kNRao6kU3c7wJ7WLsozyoTZuXntvohsSVEZryCnTN",
  "key12": "2sACy2oHReqbWLCvuCsYTSsu2y2ehJfi1uQYVmMjRAb531KLGNs7fyLnGm76v3YgbUsm6TSuEVzoHhE73WtJunoe",
  "key13": "JLaBVmFSR1kFeMgXv9Ror7tnoSKex3GE11cdCkC3qxz5mhNbeW8VdMJE7gahAubsrxkagUbS9VB82J5bLcMNsc7",
  "key14": "kNLGEWvUWWuJRnjP4Z8XFPADmQZqgRJAuCcygaAU7GyzVxgzHU87SGQGpFkSBwbd5ZjZTAgajjFwsdAGfAq9fyz",
  "key15": "3XKtBcuUKLwgrWpcgmzKxjo9SLL2RLCHCD63YMJM1cDwP1JctG8HNB7f2gFXWBgnhrK3zJEQEgdq6q2hP5T1znF7",
  "key16": "3jWFjVAn4QyUuc2GLRxU17zKECgFdZSBL1boZoM1ZQGp39k6dmmhsJCdP9JaebE2EhEb9JkYEr47R4P3u8i39Gcc",
  "key17": "kwjQn6EE73BAzUUe9RCG8sK4qYJxS3NXNmPZ8E2Ahpt3FUriBDkvpnpHTqWx8iyrrmpcrVUrjx9MBExBmWr9jgg",
  "key18": "4CHknFGd5VxqR4hZ5G67x72ARiHFjrVoEeowct6zo4Vv6HXodBNVdqhLxJQXBHBdML2epNzCy66tYEfu9d8F1dfL",
  "key19": "2Smp2FCNDKeB2C3icvnMCX4rfDHACURiyuT9tYaiBCscGF96VXY8n5BdoUtZci81bVRRYctxtCEGzPW5AEsKBtFA",
  "key20": "3CTRxVHcH9PpdMXuMs665FPdqsyb4yhduQRQBcmYXUb9GGh4Twdi5iTRLeVayXxWGZ3scsvi5Cf72vDR74HkNwJ4",
  "key21": "2VrWTJbVvEVmh6rZKopNuL5E5USVeK9umYMFLNgWtpWPnNVcB2qmcUtj2teGprMccaBkjYikKcGpxrg9n8aBGv9G",
  "key22": "5FUGgQoag68VgzLWzo9KntMXfx37eXFBdASZ1qsfXYZXksyZtDExttgwhUhsfAruhcy75vzr21tv62AGFfA3tfYT",
  "key23": "3spjpZQLR9XAuhsg4wfgY44zC8m2SzsWGejBGthJD5GzwfyQAQp4kGNiREk6L8rDTWsAMcpp8mZp97gXARdVqvyZ",
  "key24": "4NuWqrbwiehQWSnHiaNyucBdr1cojJV95BXSuJ8k4yv61UusBonyYoA9dnJqhLgyzgPpwUyihJmwH1QFaXKHaBXf",
  "key25": "22FpqrASKUSKMkwB2qrBDTg5sirDQ6M9bwNX79CNDgyfCVQhpNyJPLJY9NHbXoGDmT9GAb1rvvQasNhpwVWXU8JC",
  "key26": "3hLSoZs7S7F7b4hNZy7xWYzZqsW2wcSaQwyDA6LW86MNVmY9T7cwQd6MsFDch8Kwz9pmwyQNYkzjG1QLA5mdMequ",
  "key27": "2MhLHaDph4ZPc3s3ENsUYrn6J6HoyB3Cd6uzVacTxitXHSbpe864erTnWg8VVn4Dd4ZvDszABrfi8P65rNzdzedq",
  "key28": "4bLc4HhU5qE5JX8RJeArYYkJNmEY2APybtcGabxeDB5wZvWuHdApYEMerQ7JGWrMoEa2fB4ut1PoVuvfN7nSEjWq",
  "key29": "4yj4Lq3FpGQDvPnmJ12dwPKx9DBeRiXWbj4FqeGk2AoLxApmB8zNPVHhM7CBpseGpuvvF84izx47CRngkkX8R5Kt",
  "key30": "wySo9tPEsvott4RPPCEvgT5xogASPg7mgtQE9iVPSiK1o1RaQ5hTr1nBo4S8Rudez9aViJBEWKXsdduPtMszCtH",
  "key31": "4qb3RPR9YodmozmtRTyWE3ddTquFLCxRq9LBbMuLETE86qg9Py3rSAVbwdh5EqKk23xR29Z94TaNdsK4jKg49PdD",
  "key32": "5HWCfie1uKBDCy56gF7wkJstw6Dxhym8fxw75maCPiMeQNtsGavuDgs1GQd5NtLkMBmv5wEiXWZv4CoS8Ly3FDzX",
  "key33": "34oquBq3664tj8cBFeD2bnMeJrVmpv9dp51TeEJNZyBMmKc3fan8gZ8N3kCrbaUF9WHHbpXcoRAN8yVi8jqB2XDh",
  "key34": "5nTUUGk6EYU9jZNfbwMf4sM9Z2ghigqg598angpeiULA1cUN3sBz5GkCQN3YLdkuNBEPSZpQQT7bFGBfiZ16JgLA",
  "key35": "5fzbv1TAXqrGHgutJb8WnfEHihr5EYNszH8QGcpxAqcN8J1Hih1koWPrUmdoBx1MYZgmvVXyUfM13JEqhY499HfT",
  "key36": "4Ho28gXYaKUc4d8EjtjBo9GGt66XYCeC5f2uSgUziSZRPH3HQFxDZxhy5k8pty8ZiAK6gUE1Vf3xyHE22PijwZgV",
  "key37": "3mbLWJBafTkQ9bUKYMkdqyaH7KMrYNYmVdUqhrNBWUtDSan6xWTFC3FiwnNczGyMDaNFqw26i4cPeUJemXQGqyt9"
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
