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
    "5SWsLAHAe9gXGSQuZSHA2E7ZFmqkDLUFbQtUR8T8zG7zKWcUsZTDir5KJuSuo9pMaT33i6nWeBjhu67qyYEpxTS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJamv6rUt2b3WwqKsaRaWDPCMBLLYKTc8A77XwY2huFezP7EwStLZmEou2MXEKVKQC6tJocehv98DrFoHpmPSNw",
  "key1": "55eLLrnK455s83ZN9vXJS6V2rDXshAehTXEBzbSkQgLfv1XMtvyhFzqD71Z9MS7Y9fk18V33VLBwjiLLxBLpp3cq",
  "key2": "3hPNoV856HvrCryxDe9LFi2RFvzAF3jWPZgWnY8vc7XAmoyxU56jskgkEx6QuUx34jvjrCV7pLfv9baxXKVreQ8i",
  "key3": "5HZL1CjZ9oiJnFgq6jYhDLH5DyAcMYahDdDsA2oASkVcF8gUmj4bXyzwfJo2nZg7A8WmPxMUEGzNQvk3JyrFeieq",
  "key4": "2qQT6afd2G48eQs7LkEZTptbUoTrcrSFUdihBSgBupfgdJ1SpTWqpjvFAniezCZL2ejjP1hsimdvLNMtR5mXYvJ3",
  "key5": "2pVD16qnE7kBskiSk6vWeurehyFZ1mD2xm8QPe2EAYP1xtbjxcPZwSNVfnBayBy4CZWcFB5wmgYZ4rVjmt1iy3DB",
  "key6": "2Jnx3FMJoT4Gq1VnK2SiALoAKhzyF3BJq7Mb4iehYKVdwwMBvYyhL7rwHz64gkACTqUQ71FSazkTU2N5M89KV9bx",
  "key7": "3QYiKinfxrWQBYN2cu1hBrHvoXhkPumoTQ6h9KtYJp8Pq42JtZ1cfvoJtX61y6zJX5L3WJbUWNZEAY3GfHoGN1G2",
  "key8": "2FzPgQCSTrD4F9qjQJKcSy8uuJp2BzkJCjR2wcGUpeFE9YZShdsaEwjGjA9vFQTYKEicHTXhw73q4eX72EfmLL3N",
  "key9": "ejtbLVeK79qqEARG8rWYF45KNJqe9YazoRALGwqw8EXM5GY12y8YWU1RYk3upfRDCeJsFX4dTUFp2BGwmVc59bz",
  "key10": "4zjHggKrncmhFQos12dVitNphwUsHVePZwcbvYjuZZrZ6eob5AaVY4wDDSRGxisnPfmMzR8dpJyqnyJoYRw1u8E8",
  "key11": "5pRSzJV5m4TijJxg1ELYo35F94GKDi38gmk31iQhnVeh4VCBF4EzAN2vRCJ2YewaKm71GCAzKWhUycRVNm6w8gm1",
  "key12": "ppngs1ww7RHB8dT9LktfgdvcZNNnzaqRp7DnFuroVGdr3S4beNZsxoJkXnBkkerNSyR3u3f2TKnfiZBfZyq1Mwh",
  "key13": "efKfSrvXtNJwsPF2D2auooc9PwhQki4d94uPdhGPnUzGJ6zg13W25GXr2KevZUViAWbu5N7NeSiHjCpuMfGg3JU",
  "key14": "5hQGL7BhSFY7vCP9ogpaAgx8fpVt3ucUUXXUtuebCo6ne4kZrrGvziq8ZdWC9uRsgs8eQjeoheg3ysG6PsUMaLoE",
  "key15": "4dvTgxxzZpPbJLbZ3UVGZuoyDiXDKKQn34w6KDjtN6EUedSBB3riu34ASGomBW1q2KCEW34EhUFXFQzXWerd68gy",
  "key16": "5s9Pzxn8Yrc514H2EA5Vc8rEQgk87m9Nkf8RD3U4dP52tbsPokhN1FYxmrtmnBovoZi4EdQYEisHon6te4t2WMhN",
  "key17": "LU3fQLS36dgFpzxbWLU6XHbyD8bTUFdWUQbbvNdc5ckKKkgYKUXBgZgCuYSLLST5UF7YKqnsnYtZijJKTiWi8mC",
  "key18": "42amnHT28kN2ZnWdhLLPtpnTcGrcK6ZccqykDgq4Em1WpFgLeMLRAMXvDoD2NDR5xyKck6qgvckTZXj6QbgGQ2KR",
  "key19": "4rdegkZtc6sHHTLy1hMgs4joYcBmLJwnnnEasqWspy5ohcPUSCba2eKEnq39P5VfFa8uhSWUjvvjiHFnssmrLPpD",
  "key20": "3FZ5Hnc1a7zkYMeMg79BLRd9utiEAo88CfC8Zkc1BhFNP6ULikRy7ZEDzN2pqN2ob3yH1LGj8rWKLzJv7Y8BbEKh",
  "key21": "366Y4daipuqRCRzFn7sLp4CyoxEpp9tJvF3TP5111gDZmCjHfPHSUrZ29ss6BFnUwG18HxkmT8PuEgt61PotK44o",
  "key22": "nhn3AP2UssqNjMa4ygJnRaDASPCjWBDWrhCAxVZXUi9Jb2WKTfPUVu1pGvwE9NDB7uMyaxxFPJj1UQ59kmRct59",
  "key23": "A2JrtD1GEZH4WWXvZfLKuMzL4gKUPeUtkL9HM1QJU3w89sLsVzjncUF4oaijJNqXFiuGn4bAFJbsUSZZMgeYPbE",
  "key24": "4wQbR55ELg5eSWLjevVuwwjBXeyTujQGN3pTToRaVwiwKwU7rbvRBkbDomQJCysce4UrUYo4T3UVCQ9Dmbfgg1cu",
  "key25": "QSLdDbcKi78hAyf2rGnStY4ztt1bb28f6wgDoNCa9coZKCcjcZuyj9tjaAec5AB9kLL8obEYrE2A7dtqQzaTAoR",
  "key26": "4M5D96UVCo29BoSQL3AqbRpUKitX5rmTvmCAYYRYVLbSCQErQ5mFHQJyLySrywYkxRNWdduJ1U7Y41ksV1v4xZQ7",
  "key27": "jc9cmq3RyJN4y7FXLFKr5vCJhUTeRMo8HafiUjReEndM4m7jPV7Jhricz9yBGiTGCYKP81wkcZfgPtqnZtvjnCf",
  "key28": "31hhdPwxjGHfVciKWHFaFtnhBDTC4VuSRMBgS9PWagXe7es116YP8GA7FS9YpkDknzuhLR6cxanyz5nySctn6H9i"
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
