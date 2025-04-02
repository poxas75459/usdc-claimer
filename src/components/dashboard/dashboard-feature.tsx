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
    "2S2iUMK1Pfak5muyTHabCcrVZY7jRL6LtRMPPt1ByiJv6hVzxrFe8xvRRNK5xpSnatcz55YwYYxSBNvfsWY6apo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cD1TxAMUAjuU4YMQcjqY9qXjqQy8acRYvt4oe2xmKeF5aSEPxYi4QWSPUAux23HAwpZFpC1HpGDgSKvWsEwmURf",
  "key1": "2hkmkZ4CaK6ewikge8WFcXbQhVug6HzCFQpbuWgnKDSFj3DHCJ9Rfe8CPhedtMoZ3XCTteah4kgm2CqrkeMUdMb6",
  "key2": "4Cb8BCFj1NoL8aRrbP6gb2yTfJLtQsFyRaDukESN9u5jzKWXFvJmxkgSxbYAFkKBMKxrPHDDAJygGVGW5GnnVFws",
  "key3": "3u2ianirH55GAxoozi4FoKaxqmzAYGB1aUugR6GvXteTF8xWsSZC9trsiR6LuSPXtzvGysuD6ny9wFmv5iTQvbst",
  "key4": "Ze8WKFYtdYGVnZp6gHiAcQhV6zTbNWsTdqgJmsm9Gvujg3rz9FTSYanV5osijACTyN7t8XpXmbw5qH2C5WtokCd",
  "key5": "3J6VhzvUzKKMZkRczHZt2Sbfq57QJ4JsgHzBT7k7DFBKWPFeeuPFBNXzik5nQvCwYD3K5pELpU3dX6XeB6dybXD5",
  "key6": "4aRNKshcyZv8mfiEeKwEuKmcF6KCGRmJ4cuaSjgFHFx1m198ktF5Ka9yjbQCq4zBJYuHH3imyUT1b1XiLdSanA4V",
  "key7": "8ymqdtHDANPr8vDqMt2Aiq7V2gs96bZsY3zShL6hXntfmybQ8cswBxu3Jk5bvzyLMBsbxbb5qNo3VmELAPGydLe",
  "key8": "4TLSc5QLbgXhabLAxYx2bhmcLj6EaCUvyxknuzEsaFsiVk3LvnbWKS9HvPD5mNfwsqMuDcv7G67mvougXfFkNSbK",
  "key9": "1tDAPEprxaHiFMYv3Ci3nL8sFgBSpUKqApKHXpBh6LVA5L2BZd7JjwdqbffmuMLmvokvDyivAFiy4znBNyvt7Gu",
  "key10": "3ZBujZwbpXbVwY8HAg7hRD14uy8Vk9R6b1xaG7wXVsoUwcLeGhhNaDVZYUkizF7ziZKHd2HcWGKqV1iEGtQ2z7KG",
  "key11": "2Ki6rAywQ5EJqx24jAVgpoW1P1hUr14YpFuxGukzTmrg2RVQJxVcGGMW4AQdE5GQbtZzDopdcPaKy4cUN2RRwiPs",
  "key12": "HKNBtvsLkAgMejZKLd56U2dGJVU77maKixxmZHey21nvuhNMUHTLaFbP2EGwdtH4suiM9WBYz1wPu1K5MHPHEmT",
  "key13": "2MKMBN7YUTy6RbVgFvgND4Jv1jXJbR3thWRBqHQeXEfRGkyXD7cmA4VyGW1dfFJXGHnkA5bSQDHWPH8Tiwhemw8N",
  "key14": "hiPr4RDEWKEpebAu7DeMxwjKLkkPZyahZL6AnU85fuM76u7wDTTKkCn7TAp8okNupUKAwmPWF6ELFdWnGC9qw3U",
  "key15": "YAy7MXqi5z8Ak6iXipSLuvndJr86QiyiMopFi9CPT1nU2VV3WZDmZ9JQNuvnzZsZmMskzoBEPdLoPwahyY5tQh3",
  "key16": "2xxJ7jiW4Z3ncVBPJW3CVBjJsd9G8TZjrM6GSBRqkYPiDkUCRyWYonXCv7hQBRmJsHpN5TVa5YsFVNcZWCUYPX7V",
  "key17": "JBbZWrosJaK5tsRjrFtPebrAX5gP4aYauFJAMQu7Km1mxCaeMnWJkPoz7rD2Zm8sYZGqQhd8t1oNHEbLzMTkACH",
  "key18": "5KicKiAiQrkNTpSJvidYfURpUVnNjpo356yvUtcUL59r2Xvk9wUaYVjiSzm4LSM2D562zVKYMavfKwQnX3sj9VWb",
  "key19": "1y43tLh5WioXNeELHDzS6Eu6j3KcukoKFmfB2cXVb8oU4eYHbp4CNrVJ2Wgxoo3V2ie3yR2Z2A9YCYU2so8ZUmr",
  "key20": "2PR21o1z1BXDrnnQvXHCoepKCEAty1LaEZuYBTQDQZtdoC3kdSmwSBXvKS4mkij9S8iM91TnVULSrHHDkT3JBcZ6",
  "key21": "DgbaFWiiNkzzKJYn9HNDPbeAtiAoXxKWJXAUyJRbvRM14e9vxbQLWxCU1wzLCtdLQ8Gt4X28muUGvFMpWaPPJ2N",
  "key22": "Fg9NDdvsu6YbQg7E4Yq6aYBfZz6Wh1wMTR7tN4wAog2taY5zDXsBE4hjT6DPjteqSmBsKg8kQCiTsMWBTeukq4L",
  "key23": "5WbigQSoxmfFKHGf3sHNDysB3dRumkVdAZt5Qt5E2YHPfZUBefMxzNbU8QV8X9RHSj1wgXgsyCKKDzoye4S1Zxo1",
  "key24": "GRnuPH1jd4WgJfK1ryQkHNWyKwiX8GE7hPaHX76Ks9DbtU2c3Pb9hq6QADQe3ycypcM9R3bJvx5cBm2fsfynL7n",
  "key25": "2n45MBkn6q3dQoh4wrbeX67nqhQs5xAjjjh9azqoDc4QpeoTHaXGUwvt74kNfWmixuvSjwLE99jYRERtDB18sr7Y",
  "key26": "55gYi8YBHqeUG2QFsaDhsjf4odXjKhNrtqznCdwi89RNMszeoJ4mW6dSG6M9LCGXrm9ro8yEkLMw42gFVyMLz5vy",
  "key27": "23WBHpVgW5kCe55iRvY8EknbyrposjfrSBefaEjtCSwaip9y3N5jwze5MWWccCkeGQNHziLnnWNuyTehhvUSaAcz",
  "key28": "4XkFigAuGGq9FPtE9Fz63S3rBYeTEcTeenJpvxcWQsf4nScoJPSJ4qMM2DAUFUwKumQJXV2vp2f2wEC8HPrxtDtB",
  "key29": "5WAf4nu1oxGHfx1JrnuE4vdrF5RUwErPf7U6uuuvbUWqxhGyHYk9j5Fq8hEQEUr6GRGertFY7PgW78SCUwpDLWRS",
  "key30": "4LK3PLnSy3L5FWvJpV1185BzqWXMEvJ2oeQnyfGFgJcEziuNnPqVnDVSLsy7kCRLd3DxYsTnJaxTUd7h2DMW7fBB",
  "key31": "4qRAqHw5ycFHqavbo3nPpPoGo1ogzfyKQjDW5nxpfwGT11yC5RAVeH7BiL6PBYapVgFYc1nRxc9UymCKS7tGzsgz",
  "key32": "2hA2rJwiVRajFeS5meGoqSkM3NZuye3paXSoYEU4VjBzufxWBpLSmEUUJxFA1fP44Z7CBUFAXB1M77AU8ZeRHQ1j",
  "key33": "2J8hmw8pJkhRPHGSs3bLfftLMmcMwgK9DrkY7cBVpWBf1E3Dfj9nonpkZ5ajsLhztFE9ZgzoPi84RSt5KwycWAky"
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
