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
    "vYfzpm4ofcCAAzVrE2yoXPLRsb3ucfmgLvCMS58FdbANPimBm76Y8dyoTPVMxEHQTad6DgEmjMJFADzBYj1Sdej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aSs23RRe24QFLp9Qoojt5UztmjykFPvsADMFxajwiU8wTdwx7NyigQtnd7KFFUkdGPomAS1DXFqVii5mfWXtC7E",
  "key1": "44PKHfhbBEowAioCGJE1XpqmBBiPk8PQYpujgS1NN7ze6dxxTQzcaEzPi7Kxydi9EHivnA3QdTKKg958P6RHaG91",
  "key2": "H6ETeSmyvD92uJHQZJeRDaeJCtzJodGbGtghpHRNLeXAYFYt7DctHh5Wxy5HPJ93x1gWwZA5uoFAoPpGY42YGkZ",
  "key3": "4xappSNppDARMt5KrkihPY9Z3ChiH5DmPmn88PcxEg2cgqMyk5rbFGpboZnL6QR5UzgW4PGKzDCa6nRkGmoBcfhg",
  "key4": "67JWf5bbJuv9xkGVxcJsp6R2a6A6qPcm5LhwNTTYBYUdFaGMiwaezTEGRsWJbX8xuAo9gZUsvHCYdR8Jt4Qt4X8S",
  "key5": "5bpfbmzRbWGUaV5kBSotxmZkhtNhCamRwwsrTySHHXghy5jy572sehVVH48UXZKwJF784ShdUAtM27oKt2QUgwg9",
  "key6": "4pqsiRRCDLAPaB8iMXTSKMZUPykMaFBAZc5FN2LMrzcpuvxZqKFA9ffkF5an7bQk3h3Hrd253Lc1WZSeRFiRVvF5",
  "key7": "4JZwxngeWj466fjaPzNSkmDLK7jW3XAuKLu4T1rHg4ZHb38fFnM1PLdmxKeuAfRsRsUmFjS6SCQJLQidiH5xzqrC",
  "key8": "HM18urqP6dQUb7FENTVdt9JKjeXSkUkkGjDcEikspbYKUNH9hhj3XwUgqEuXp8fNvY3duKLmJHhZwEQU5VT5Fae",
  "key9": "dNgjuveftZar8HYh7Pv91CEvDrmWZ1SojQf5zVeEcFgcHr5gVNHYbLRPf5z1M2R8NEQmitMRxpPmzQbvuNPCZhW",
  "key10": "2RWmwfA6bnSzvRL47r7eL3GUjWbxhSZpQANizqrehHRdvYcMBR3VLfp6SiPYCokeep5ZocFgayBdDrZHSm9c14Bc",
  "key11": "43BUiouC9sZ8pQFKKJUnau3N9MEXt9JojrYHtGNtNVZuQ6eXpqKkTw8qLwg8DrADhfvpBsoqjpYunuXVkVHqqoiq",
  "key12": "3MFa6DCpjCiRomxu6vkYUYZThw2HahNhmfYhbaHdv8ohUqFjaaeUxJp3fENqdWGUUJBqPVDW1wsmakwKj5Xb9pV1",
  "key13": "4ZLwq8W4HNkFGmBvvxRcLQCHxhEw6hmaJgJsw1sHoCz4WZGvnvAQs8k4UcogatgQki9JkPWoRvfEHreLomUtrWex",
  "key14": "3nbB4SZu8h6C6Gx8jfegEjbp7kADzA3g6hjTRUfqTDBc2T76w5ZG22MxHtFNkDxama2k6BdtKeAG7TxZakEpu4fV",
  "key15": "5oR5nRbd3XSwMj3AuGD2NfNTACZWpb7rQaD79x6KnpCPuMHJWmEDb1Fae1yFBGWoTJLxvvsoQoBEX9pPAv5vx3HV",
  "key16": "3ycJj291BZA7ubHBTf2joCBA76tZBadgCjDEktcfMo3nFsErJ3W1GzeDqeCptcCdYUqTz7nwtB6H4DJLsGWhhu7i",
  "key17": "5oNWWUwLe6JuspHm7BmeGaefPE9utjH8qDFR8HuccoX8gQh5EcXciF6LsKUuYG9R5Y5Ua7cg4SSxCbrQXyTGZdHc",
  "key18": "2cvs1ogh9oaykUvhsxjH4mMM4snzKEianZviDcUbKZqXSau5FNrDNxz97spCnDrTYWSp1V2ykGg8NaKxwFu9mmcJ",
  "key19": "599srmQ7h5MjriNZiV2khmEXc3LzyUtewBcLCBtbq3nHcebL5vuBUNPFyq4sgSL9mQDXyfMQdc6WDibuVSxJGTe5",
  "key20": "29di13mLCTUFQxJb8LK8GNP55oXctnQrrknnaCNKjRN3ENxc2xkMtXkSzs3GajHo1gqU8UsY8ivGqSbBtq7xZKFz",
  "key21": "4fxNxWpLseZaThj8xpnKcYfMmrMCWHxHWCnNZBeaSAPViQfmcybmUxbg1sJpB2rLF3t1PJNfxPHmJSMksySPaujT",
  "key22": "5P9NdxU9kLiX7o8vUUaHcAZ31wJX86usdGe7FnWRCVbAk6RCXRT7NyDe2XARbMQc4LxXvjFYgwyYq1qZVNdu3mpx",
  "key23": "2Qd4LVQPJnheVBbbXDU81x747LFrY2Vjhichh17oXac8h8VSD4ogL2PWDPe9aUgSuzrfJx7CuA6HuS6Tt4V6y4VG",
  "key24": "7Rn2vYX4Bdi8wGWSkD3JoCzn4iAV987T2ev6SfibqPH9SuozyRh9tmd7ZB7dCML1n6VNrAMYeZtTHWKC6kb7Gk1",
  "key25": "ZENCrFt8Ljh6AXYBScwkGDUKfYVgKgvnQJD7knvBLYbxdHqzKwpmttuSocRUCWtTJ5Gogms65XQxjnvn6HxwnWi",
  "key26": "4B7K42LiYZy917yVXSkDKPKg89RuqvUmiCe8xnQ8TH9EjrdhpDFuSTi5xumQYGA5S8ed2fJvJhP1jgsmUipyyGXK",
  "key27": "2i4sAmLiNiwJnCvEfEvJGGh2aWBJY89n9tzUBfWASVyWTYydJWDb2ukdtK7Xntd6yCNqBX7ixqc1Tj6dhHAJSzHA"
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
