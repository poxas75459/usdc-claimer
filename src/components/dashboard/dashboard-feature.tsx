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
    "YYv3swrGEbLQXaBdukJ31Pye2g8PmFqPqLF5BobHsQpnDX4kKLANw2ktaQLMVzCZJiMCtvrCqoxAqV2sugqEtrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFQD7MrjYWGPka594r7hC73W5FNJoHeBzxaHmph4jWqihxD77zmYtbZ1W8YUEG1KkYY2PN9ZZEywrhBbABRtVWZ",
  "key1": "25qFvEG9NGFYfBztWAviue6WveG233W9JQEoZFZZ7pphVQPZditcaCmRzkRNsbqm3xodVCL6wrjLqMLjsNSiDtAo",
  "key2": "jDQPS8cW6oqrgdV6zkXBx2j8QksXr1zciMZwP21Tu9EfkhQncCVAQ54u2CbyFLZMHPpsMydbGKSyqUmWVRo9F5K",
  "key3": "226mPbcUz7f9F6q95LZ67jeWMocZfyczYSNnpGaZpV8YBdAxuG3KiAY9GHbhKwskx4hFMPWqyQXyJWuooGmUGsNJ",
  "key4": "59sWpzr4U5icJ696GWRjAyPUBUqbzWd8f1j2fKSbSnpDga3XCjxLQ5R845wxywqfRQJ56Utib1S3tAKXUuv1cMUR",
  "key5": "52gVKi7GUhSAEwcwBmxrU3UQ3wHpie5kXqFV76bs2zAVpf5RCrVzvw2gp5fkDjHJj2CGoGVWtXdoqchJfuqLcMPX",
  "key6": "4hFi9ppLhp7vBDcmDoy2DTixxQ3o4y4pNdRTxvBJ3qoLGLvHU4qC2xaxiLd1pZ9QXx9GqJGYngt4EqFKg6Xw2TkR",
  "key7": "2djBJTTyBqGwiMuwJrizdjd8rSLFRyiwXt2VjGMBviU3ZsxJautFyvLP1yAvqD7SCgTaSUbbZZxQqmy4J7iTuU5F",
  "key8": "44D56XasGwQYM15WpNknE9oxLimBwMV16T1HUKwf3fLM7v1iJWDQqES2pBBVGzntZuK78sFYnV1cXXPd2fGGCoYL",
  "key9": "3SeKvD4z7xnGcRJFNYiX2XAW79L4dr4dbvkfv7BmnsMW4KNkbKWnSLFMSrijxnQViAeYecggZGWNckZZFThhnLDN",
  "key10": "jQVxfDEc6qKYmXw5Kv9bWwxgW9CdYxEojg7kxrpmkswh1yRsuZVAzamBpUpnZop1EfvxTGuCCbF345kH3TjW5QQ",
  "key11": "yMoHyEZztdarQo1tt4tfoh3xBKRptihBiipKgALsmt8R2V2Uv9q6PkwujfiiLkfj11rvcyJU2xSw45cCcCuXBjA",
  "key12": "296MjrS3LUJehYVxKCU47PxEpPUdu11Emmsa52akYsrjiGtbDqvS382Mk1vqR6gzNMwB1VvTwm4YFpP7dPHjTBEP",
  "key13": "2RCNYNJgUxPmFHb4q4Ac1bhZoir7zaqpoWE4zsaygzKRURCxHeXRSt1tZVYfGX5GJV69uf2wzVvcqJ6QRVXeLCNV",
  "key14": "536aYa3sXwQ8ipUPhFHmaAiQ7zieyVjDQchhY2sdq8Nz74yThBSjzp5nD3BfAhuD3gXBunprbYh1Fq5Kj4kxG5A3",
  "key15": "57zajmZiJ7WMMMWLaLbQivvXCtLsd57uQmkLFkcRXAL9RpwbcH7q8PjeESkNAAXNC26RvHG4xbNbr9BG87axUemp",
  "key16": "3vDqaHNJpobrRWwaewzKp4dG9Au5ixn8nPUfCvqT5auXNeSBC1agur9cEAtaD3oCDvdfC3Ei5Hgvi64f7XXXWjXW",
  "key17": "3AYNZi49HeDDLWu43h6nJHWsWnFf4CYirPnztNdjUmohNSY8ArUQMW8teYF6M7CX9ev7eoEJVszU8JXQvZyHfEVJ",
  "key18": "8fmk9MEsx2gSutAfFwVw3L8t1GXDjvkpbzVrNV5VphhVw9Mr9RCkmACqxmabykXi8mJ6u89z9tWkgNKRwVJv3Yc",
  "key19": "5uwdXEKoSa4d3K6RYsgjw548j2WfsggWDsvBnNbjKKn4jTzBN2FMucVqtsZw5dAJyiv81fh4j7pP1GMp2qxzydVo",
  "key20": "3RLdNWTauEXYGBcND4Jo1i3kxpy97znpCfHDwRGP2e9wr4EXJhwPgXEw2zMxMHMMFbCcjb84Pcr6LDF1kYA8Dj5Z",
  "key21": "2KA76DMEnLXzAXzmcu2ykbB3wFiYoikC22x3e7y47TTwEbQLxK6MgUmugJAqj45tcXjU2SVYNw5NiFHCYbDNuLFB",
  "key22": "2LVCWUreHFhkoAridLaqJmyyKu1774yWEW8U9brQArj7YhP9pqYPa9Qsi3Nhe86anondMYeCrXyDJEo7ZvLHRCbV",
  "key23": "2Bn7A516khXP2VhDZiimgAY9T8GqSbdzuYwEYfFnvXhFWXgTMPQGiUx8Tgm97yHFxHkCSf2dRkpC827zNgK3bocF",
  "key24": "5dkS2ZjPRLS85VYdyL3Mr7uBuByC6z8NbxMVC7iPdfkVYZvuuB5TAxp7F1iHofiizjrHNb8noKQ3dPNmdau9vHEz",
  "key25": "4ivv6MuoVG1pvNdsZjy65ZveUV11sdfRfRKiUS4W9toEUwKdguFMErnnvDbX75mVaWimZ2VEPYhP2r9YS8FZ4Prx",
  "key26": "5A3BoaCpRLYRthXqoMwmDRKxCKrZXeg8vyEVb3Lvj9dhM8QBFGPSMJhDNheuRtx53nqcG6wWeqauME6HSAMZxSCr",
  "key27": "4UnqmaWJqBxs38UF87wRha775GhMzieFckSJcWSaoXUFy7Vr3Tv5RTRWBAoqHvRSDuqsyaN7RpK8NnusSSZtTFum",
  "key28": "62ufYDQvvKhAeFmm4FzuugBrheKQtkRk3WFS7B3yLoshyqx6GidZruq8cR2qdrjnaCfw7X9e2g5oWod1oa12e4iU"
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
