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
    "3mdH35oEVhHBUaeCpJnmjWsRowq5iY6nSPhuzA7Q2fSEqPFsA5LnpmDT92pKCyQjPk3PftfJUhM5Svjq7AUnU2wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juQdXsAqW6dRGCMXcgox82aPd6BWWiznAQbjVwNYKSUg9tqVKgathfiS1mcfgyxHxTzdu5Sfs2DPE13FfzcAb71",
  "key1": "2ErBzFFA35rtXkBJuHLeHFSt7YMq8zyVGhTMnhSvZsbQUxcEEU1vNDaSTtnsm2Bo8Mk22UQ6EbUokq4wKb3dGVq3",
  "key2": "gC2Dk8fTQ2YAyNq2MG1w2QKHdvQskf2gpLQrUqehUsjFdWEN5MWrRy2C4Vna6XQcXuibF789a9KWKZnH8HfZqLK",
  "key3": "5Bq2UzuudF6jyyVjL3G2qeNTupXQu2Stg43zapzK7fPUj8kp1ZNwCNVcxKP1XD2Ai6vm3mppzHpCinbGacfa2BCk",
  "key4": "47GEvD6WZmfRAKgmqAppz6ah4cZ4mv7W273DQUgyjtr7q8AL5hKp7v6vfJKAafxnVNdeVxfRJoW1edeiSEJDK14N",
  "key5": "4kstu4v7EbWVjfaaBWuTxVJvSVnK6vjeCD55VbMJ9yqd1JGZewGC6Y7FXuMHxHYGSfuWWwPXShbfCMEeNnWjZpcK",
  "key6": "5vWwVeqiBBH4jqPUSkfTcEDgBgw8bYoEjJQS7oXit8iXrwuMQb4uASZTsnNddAnFaobFWoK9PzPaews6remQ1nJQ",
  "key7": "3JBasng6qU5vga7Rkbez84qjBmxLmgmjbVLmYb4avzf7Yuk9ybFSupcarXfWdxcFDYQudhddPRKTo1GpYyEmD9rP",
  "key8": "RNxJkr9cmgVBr7Wf6AA8VDo9PVyTPogsFxKMWWH7GSoFoDkX2wAx7iiQzM3ob53kvmUYECMZoxgugPjX7V1veL4",
  "key9": "2cNm3mDw1qNurtoB4ewEUqmjUU6u6ee7TF59sRRQGcufYQE5Ykfe4HZrRgFmW1ymmLsQHDDm6bdPeyyDCdNwFSyw",
  "key10": "3UbW3eQsTDqPX72mUPyE5JAVRecBxTEmeSZ635z5aVugysuXYGYbJtmfZ3c6U8DE4avUUzDVuenDaqVSSXADGAdE",
  "key11": "zpyXMEpiWQUbQkvUAu3j28audjpsTb9PXvJpeH7xij74RkdwQnHyx9XQZiSZa3SkzebnR4F2hnzh6tJPPteyFAh",
  "key12": "4YhxyFGUNyub6N2qDvDrYDWkyMAvKM5ExfDMc1QFzW4GcLk3FyDAdwMTG6qABUZfrPRNyDhfXjxgqaoqsgJTeNe9",
  "key13": "5VzLG2bMDiqT9Za2iu7T4YKi8LMuufHyswTJtodgZtgXadhzKvmQeNg6beMFbyu7yePAyRnTay3KqhmkMfvT123x",
  "key14": "4acy19vEgWZEh79vzwbucqzQG7HQRjShzMTwvVhqvLSNnE5asF4vZRtnrZmztbb6UFU36dcksY8hbsWCmNprZE9M",
  "key15": "5AzV3cD2anqWN62G9SyGPUtY3F1MzY8ihkVNJc7G6yoYTtDixC25MfeQiVb6Lf1yaKhxR9tVJZgVaZBRaBNiDzZY",
  "key16": "56gf4Y1ikXUBgzQoWLUH3YmbeaPmSaquS5wirywD5QmCke8JEkCu5b9i2oZycuVJ9GyiYaCsVVwgjAbzqwZdXA3W",
  "key17": "43F7WATxG3rFdUgEmgnHqyJRYd1T9n99BUy3i125SnKTQ1LA5zFKK515QruVvRRSfFust219Nn8iGqjDNYBNdCro",
  "key18": "3Vnq7VGgNzF7FaRf6B4Pbe3eDDb1cdsGqD4br94QYb6RjFk14ZTgkEnBp89EPZY1tk58KUHbbZXjCwCBxqZ8pHvA",
  "key19": "37MJ3SzZXUY7TsYTJoUJfkr8gCHusEZfam8tBiiGfi89xjivVAT9FN4b8DSvMWjjC57vFgpzfZqeuJv5nYrirusd",
  "key20": "4wini2rTk5PmX8gPoqEcKDZa58yT1QrU3z4AXzjYB9nbzJjiZhHkmfjCrXDfBXurcG7HtuRLxVuX2TdZFLiU43vB",
  "key21": "RRdRRmbx4QShx6WgPyo3uatREvE5LfjK2QSxrWgogMbWWsAq6cHCFY919t1ABu9yHQaQAG1VFDsfwbELePGpptU",
  "key22": "2YdXJWtFLp33Ys8gDCSzv6zE7yqMPH6DwY9UqEoEHUnt9iPJgpEmXqcfqWa6N7L7h5AzdQUMqqn85gJGqka8Egmu",
  "key23": "2PP2y5FBhHBkG5PKi73KZFys8qiZryD7hFfoT4rbLdowXz2nZHcXV7rBVJ5fFw3kYYhfbu38CCv4xe4QT7PMXLHH",
  "key24": "55Em54BDntLXa8o2Gy7WfGU6szn63WSv5kztH7caHYSVvw8AxPupprdVmSonzFoNuWsXRteorJomhBPbLsAVhNHS",
  "key25": "5ZQzzEr2pPMCjkRfsYnMxUxRHoTYQt8dkxzHogKSQnAZ7YipFE1pP319rnaao1sCCkRjmzMWgNwECg41AhkpVyDP",
  "key26": "2Zuceao86Tt2wLAmjzCiwrurELtmVXPHmycY27wtsakCt2i5xmEW8ZyFGN54Tz4j1bN8SDbBCFoMxFGmkNnVZLDm"
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
