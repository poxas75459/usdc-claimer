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
    "5bG3Xoei8kLBy4rvNVy7MXiQtX7kC4hhQyimmwbW8dwC91bn1RanjhXGmCHu5spW61bkWgsNa6TDH6XS87QZ6rDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQ2goXijKmnA61bb2hBBAuuixDWKiadpihkvxcXxfUpPKPnMU9Ce1EivsSXeZXuSP7u4UqJGzD3jyWdziqY4aAv",
  "key1": "22tCA7imE734nnpPDdzQhQ2NR2bxKFAcDferx36exNQjeiDH92j7UhF9Sm54DTWbvqaUf4UJmLeyPQtqk56ean5j",
  "key2": "2DrgyWhYbRVzbQyaq9LofDh3Cqv8VH1fp22B9jLjuxMqs5UKqiUoqo5yTRzzHDhSpqrmD3hPN5TxotRNMyeJ1E2M",
  "key3": "2NmYypBjdnHquwy3ptmEyHih3TMqJDry6LNyhKj93HYSv7GSAKrzdButUceNauAvUVndaf4tDoSZy8kDWVeddm2h",
  "key4": "5JYYhWVyNTpo7CJrsqocer9G5KxEs14BrKRB3qaiGperc4nGnkmhtaSDfnZ2Ywak9o4qfM1wTkEJ8dm3D924V6PY",
  "key5": "GtVUDxULS1XrYxehJ818tmAFaYkZBk1f16rFbyXmjjT3sQAvSEhpaxvYe68umDYaneZN4kPvRJjXv7exm189eg3",
  "key6": "4LUh1wRLnHmrtu3UULDcaqR3MvuY9JiqEhTXTx1dp4WLecEJBAAGGPPyCBDZ71kHiDGYKPXnJ5ZJix2E6FhuaYbf",
  "key7": "4DFMkxMrw5xk2gUPYfm7VGygaGjkPX8dGC25fYpAnv26LhXGHBjVdrPgcnxPg7KwhcG4456AKdksENjWPLJQkod4",
  "key8": "5eL8va9v7Ywd9hcuFyioNxqgStuLKfwGKkMu9xtbvhp6mkpxaibp4JbBkjM8Kr7sBXQSRbJcKkjTBUW4rE7eZfN6",
  "key9": "Lsf5ZyEiMCqLmTQWyiBpqDSJixeVamceL1U39p8pPntRXtkZuMbXTWKiiCBV6cX4CeTB5BpJgwrqsKkh7mSPmqJ",
  "key10": "5hZP9vU3gLvspw7rzTRJhMTtxoJN8LFWDq54peDwNUdsK5iMPvzgFQeUc1ZJ8vkYm2obyjpJ5YmVY3ZuzugW2VcA",
  "key11": "45CYDaKMkWU8EeR8ga769ProV1LD5otE9TSbQSzWfWyx8WmqUr6dFto766mYeir3Q3LDQ6gywHs5o2ToJ5M4ni7G",
  "key12": "4oqQEPFrDmfhf2M8BPVmE8KwgSDSAcarS2XwMVVs7Md1gmbD9vkWBMhmswQk7jUNY3wR8CcbAPVwBBmzAnMdzrUB",
  "key13": "38tQcDzFSie1tcbKLp118uCxFRh1XvKVbwCtT1LMUHgHKCk78rcLb3GGMWzj6xgWsq2f6N9AgfP4uisfAzSzZBcS",
  "key14": "3pLakNTLGZ582q8bGibFYpWAS3P6yoFuHF2jvtgxox1VunSk55KpoQiFtcMvfbtDiTyHkrdcULek4tFJLGCGYjii",
  "key15": "36mjjDTdKGiJ2q6v8mbK7b7aaMCkBGj5S1KP1jX68sMNREwGxCVKVjUe1jxcDV8DmC2mTPwCmj1QYStXMNvLoyPB",
  "key16": "44kTtDjnagE4C2sVb2hefDGHTH8cZQVhPqoRkymcRKrtDfjtFtpCTpRvJrusJTuwz74MYp78FUJ1T5WxWMRYWBwt",
  "key17": "5KAdbvNBHdXG8LXPXTAPzTZeDymCAdDARufZj2e42bNvHtrx7PW2t9cbx5h5yWftqX5xYvhzDLgXGwtm9VL1qbM8",
  "key18": "38mCEnCffGXgX3ZJJXZj6yknZjdpcvVWFaDhWq4McL7W41vW1NKqV3UFgZkXg99HikJRi9zdQ6JSuTj3DxA6aHhD",
  "key19": "2zLrMfkpAiQboEJbdho9eAz8FVRWmNqxWZqfknvt2FBYLc3fRHVhnnUertSAg5P46PmnRGva44f1txbmLFsA5kSj",
  "key20": "4GndMoJ7CVgQW3FgLEftYqmd3qGLHUht3kxuNRGbzvdv9GYVskQdcQikhj42GASpo3Ju52xTN4oomWTK8cNPZt3K",
  "key21": "4etQd1HRUtT8otgAFx7UZajr26NDTBLwnfU5yGsPGeNhQUgPxqFoWW9LAS9tWqBjrRqiuzBeTpxmDJHbXfnWR5JX",
  "key22": "6311pBRhDQRNjmucK1zEfurdutrXT8gpKvtNifECVqszKAVRbBT1GFPC5tv1QECQWnxfGZsgsPLPvtD6J95Wo2f6",
  "key23": "5CwBMvJUK8HShRaNUDSj95zbFuQsWrhmPe3Lj9YzPiCVDReMapdPPcjfc8PVVdteXiQNcDiYq2fTXTyW1MtgMPzv",
  "key24": "5TUSZKtSKUkyKoyBR8uZyeF12jq53sHLFzwbUKwDCP2QCxotzqAwtFgbXZvuo6oBGXtnW5RCo4NsZd644j49K6rW",
  "key25": "4Uc728hpckJL9F7yn2Aj1FrjvxASCTkUVYutNKN5f9YH33uBVr9gP82BbVW66383tQ9bucV6c5bxouzvazAGiv3q",
  "key26": "3rbLpsEASSTjTYK7it49zURd3a8nEvKeEB3vsGnZPV9YVYrqrCFRQt4ravKxRy5JhcuRm1agqMCJ1mZRcg3jAvXH",
  "key27": "2f8dAaheHviicZpYgHWFWKAkZ8vhF6WXvty3ATMbwVx57hLnd2GhVbPBh67Pj321xp4XwY1SoVZ5xC8CBYP1KhrY",
  "key28": "5Jpv1daoYcBzm6A8jnaMUumRuJLbQnNJwpPDfcUbw3ymYk1EhQiobWwnyrUAXW3VeXVmcjDoh7hNAksQFYQyP1X7",
  "key29": "3iAU54XpUBqcZ9fUGXwn4ZuRqpWHRerwzjjEWw8jv6znKo97K1z1UkYXGhqfWhRnKm2HoVZM1Kws9QhhakXGjyn2",
  "key30": "281PE5LRTDGp2hX36rkrvYNLwRNw2WWHRWnktunhVDPSpv8pRHxeDkxNnjtYjXCdZhKBpCMm58Et54PhD8u7WzfF",
  "key31": "2kW5X8VTrx2WWzWnHFUkv1TSrCZkHaUvDuacBgbB2jQxFwbgn22qko2iwkwmkkiRud3KTwvgiCBrWTGCf3JhVgAb",
  "key32": "4R47SZz5bVJjsUqBBvksVk2KmsZB6TKstDQmhZ9QPvoF6YL775y4oM8TiyLvh6tss7xrXhbCYsXacMSDTuodqj7n",
  "key33": "5NwQ5pGibnYfMesDnGHTRvsCTL7ewifjz83RsU97dWKRVzRDGPi4GBCof8Shobn6XsFugAoskof3KX4gxtmLtPNS",
  "key34": "5vv2BLUwT8fC59jD2d5GuSc2xnj3u1v4ebPpDLfEUokATCyVjqBLkwD4ZLymRY47T2SYNegX5xnx6tLpyEJY3nXt",
  "key35": "4dm68aGBvaHrr8Sdx9trptY1aZyAkRyYB4HWa73UZHAqWsf3KNpUskmpjBNqadBEM5gQV5harYv1ibAM2DYcce8C",
  "key36": "4p42XsA6LT5wmacdmUDnPziLGLZNTdFn1RbdX5GPGsNeGw75thvgCgsqiiyuayKFMqtJXxxqXizkrfbg7o9saMTG",
  "key37": "2iViLDK3Zmmi8hyqLFyS4BiUS5pxBRjvSqjfNJQBkvQT8zCfb1cfzXe3pJDb12BE6EARcy5f2bGKgf5cf3t7ivuo",
  "key38": "4oRHxUFEWzYZzyLE22eY57Pgt6xsu7rQPFiU6kNNZ4estFxtnF7dGYrsuk5XkfjLQWeMfnu6uVtDdQqZ8hNGVDPN",
  "key39": "2x33tzRwmYZYjuEjmvvF9x3TsXgYyvV3BxTefwqRL2eMCZY6psdqR9RTgZEKRF7zuzAMb8dcVsY6c1poHuwLbys5",
  "key40": "41P799rnvRrCSgZWZCmwhRaegPrb2tKZmov9BAFESrp9hjEKCswCrAVF3L6jzmzf9U96BbuZnQMviqmoNVpCQZmU",
  "key41": "5oZ9jtrNdRxJLwqLRWHBHNdobe17XKZxs86ULpUA3Fo3AVPVpHucVAxRgjSy6wXcZqYVruokQFtF7Un5qi6MuzJN",
  "key42": "4qC7nH2XVxpR8rWQXQyNbyo9Zrj16PSQT1pnGuzfAqvqgBWzQujs8G32nrrS8N9n3pcipmCbCCVErhchi7ABWqb5"
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
