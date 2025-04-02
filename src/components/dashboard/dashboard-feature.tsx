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
    "124a74wXtC7MffHm1fVS8nAqkMqWqihwsJ3MCatu6C1PdfoZ3h9B6D8W5wbGxz8Hq7Nna6jYgDUVU7hfZnvzyekB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7VVtRxrAWJ3ZPzP3vPDNjZEutxCnEKLv1yEypxAV6hiTHCA2GGmwJvfkG5SGb7kR8Vh27o2QxacJD5FKnEvrN2",
  "key1": "5ckoPJ2kMvL4n57vpazpYxA3EtWC2zvCa4msqiXnHRUnQf7ggfG7vBy7bF6TCsY5W9piunbkMSnnMqgeUnnaVy38",
  "key2": "jKJeEeXcr7gSM9kni5sBitkSRtL1RL5WHVXw4rZpSC6hZhH11yjw9XjTtUBbPpdKMrd3RsK4opVcNJABzLcCJsZ",
  "key3": "3grQzCa75G8HNEQMCgBZtJYMVHD7FcHLu7fHMAhFLFqWVFCKvSKZaXDm7co2GJ6LPsS7o4byicVeoHZuHc2Wgg91",
  "key4": "4Vv3o9YoEXB4mHCAxjZUTLEn9L46vQYfbp1GXP5LCtLqeGFCqpisudxfS131EG3Hh2tztg9Ax5AB9yFDoiREgKit",
  "key5": "2kuZXHX8NQsNs3ePzXGNUuBj1P1qsyvMHHcc6BtCbbVyAAKNCwjJhRDf9AtfiwMygtWGx6jsULgZq5GZV9pVD3Ek",
  "key6": "5b1tW2RnbjZ92XsGyezZ5pcPSxgBQwfGhREQYUMwY1u7nSSFs1k7FUbmxVzCKJ5TCdKehR7LqZAaP7xLEspaxsY4",
  "key7": "3ohxNe6ofb2yfLmn7qvdt9117dRxuAe62cDvhb65YEiU5aBcEnoeFFMaevn8AN1toPUZzuDrkQWz5ftkGhPS6f2d",
  "key8": "32GuxFZsBxat1CTC3rBm3yWWF14jAjmh4jTsPRSExTZ7KuUVPzYLrXfaxVqiH1QY3sJ5Vu7gNJXVwDjZHwKxg2nc",
  "key9": "5xW93FVtrvCG4L1NUX2MYt9KgkHTnYekLRt5oPZuvVH4XmA5qZY2q9XW61bBTcf6UsMYGQANXiwCD7uZtcjLngU4",
  "key10": "4huMsdvw9T4gxXS73hdpbr7GsJohn8LBUtYG5vbkmrc5WzFrjS48haKjMvexUsAkdDCP32HTv7yBVqZGbzYd7Xk4",
  "key11": "S2aT3vpWuTFvf8ypiYYFoq4oUvH3Yb67q3vjd31ovEt27vaZV8n16Uv1ihf5EpBcuG2g9YfYQK7kjRRqpbd5skE",
  "key12": "5tX7z4TmDf4Jsnk4WBPeEJzXWn1xSCfsAcsaWLSnoxnuZtAUggv1aiwogbbFkheuqHV87H1dxmFRtmsCqkBvdkeb",
  "key13": "5Tw17WGpK3Fjt48e9h1yoFhTNGxVpRV7ZhixANdL99uDS3wyNA8LTfYBuHSrT8uc1K1nnai1HzrsFognjt9Yiws",
  "key14": "4rAkdxzz22tET45wM4SR6D5qKPwXBXcYLPeLBNAHQWiGQnpAk65y3XvNxWTjPDpRRvDF5FMfGQ53YgPDUbbYu8WS",
  "key15": "3ABbL6vDADvW5PoEoJ5cTbD8oVK3rUSGfxpN6xeAhp6fqEmscN8JRkq1PWQvu397kiz9T8NFaT3QCgnGqbPCbJuz",
  "key16": "Vou5tAvL5NNY6BcJRKDqwQHp6yDTapY62rjv6WJZmYjim3htbSZh1c5cE9XXNE8qkFr8fuxYQKHGiskXKi3fMdK",
  "key17": "5AijtLGJqbKNXP4Q9QWbaJzN9UTLR17bbB8k14JNiwgXsxysxoXGiW8tThdHqmJ4hmLmbVYAFrgRq498RSLYcts2",
  "key18": "4zMcbvQ2FkJUvaiqZKJywh5F8dXqmv4TR2rYZHDfdPUXiUNxudrSXbk4LMZAivzQsZSrDCuPhYYhviT9ibrW6BMX",
  "key19": "3JPLh5BbKbgT33jSqX9aPZJeGLYtAB4KPPfz98GrmS9XNegw6gbL6XfV3hsS6qX8QrJfof2jXQ2MfAiVyPQTYdc3",
  "key20": "Qzh3389KSxNVGSfLZgWM5YetjfEm3cbUvX7zozzbQcdE85Zj8eemqz8GnyqeYVV4hsh6w3JfivAbYx2dNmnYWk4",
  "key21": "4Ypsm8LgmY7PiV514BrSz2Wz9RrhznVjeX8yzvHqEgyE4KC7FfimsTCqyzwbLS1Gm2TgEdgnTha77VZGHJ2NvPJk",
  "key22": "2hCg8KxodN35mqEstU1YqeGkE7PVGBRYTmfXh43Lvef8Lc4qFbtvb6tGcvSKocEKVdfhF4Fjfxbu3tnQNyXoZzpb",
  "key23": "1sBfpwTpm8C951oGCBfDSKiw8iy6Y74r8fy4jgddRrWE9ghwJYZPE54Ed11b6eNVv9jpwrsXDQfMt9fAxdyxZnQ",
  "key24": "23Qx2rxZhDtcwufsV7MzSiyeNy5S76otpQPtGQj5F4NFyqPKzHADpdTNeDZPTLxDfCtmbyCPxTw8zhGT4F9iXgg2",
  "key25": "4gamndWdPSG9TqLC49dYAQzEWAXUo2FxPerAEAsYqkxnvHKWnGj8oQqK7kBkbLUhtxsR7icyTFNNCqQymKBH7EcA",
  "key26": "37VakxFkegxgYgsSo2ie7CQPfmdMiN9TLGo8jALK8g3L9umH7V4fCfNUntEwAds5gJMKehBBzuW9CzD3x7vMXage",
  "key27": "2B8wt2e5jRFW3kHKzd4Aca4knmz5KcPpkDBLCTPssgLiqPQ7uJEvNKijBz6PaoFJ5jL6ZgvSTEwgpHTuzf4JvKFZ",
  "key28": "4tT7VwQ2SSk9hJvyfgFTQhttGcVvw17dvYacEm74m9EA4rp4RCHtB4SznNqCigfSbFu9rW3kFEngg812bPscwDDH",
  "key29": "33oZuafBdu12mHJ7KcWeQTMpqECgTjZZ1KhAT69PyLuFXsSCAcFywXdqSP23KKAFGt2RN8yn34SPUwPgPLNFQ3uj"
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
