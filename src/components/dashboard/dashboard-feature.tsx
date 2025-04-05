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
    "5FKZC61Fv7WeKJXqyM8XenZQCzPuaVuGYrpfcaRabPgeEH9ugGEFWys1cemGnd9fymAYVoPk4VhJMBCM5zdpWtDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E3jMXezeBBqoCFUMQs5mJ3Sb4hMXiZB58VSxNk5umXWB91ZMUxxarPnvrYF68znC4XVAt2UUqu5bVzCfHr3HBY1",
  "key1": "3dBEvDy9u5bYTUYhiFkB6dnLHmPWzziLxUAueM5XHWz6bi5mT8LfTmRYp7YYNUvCNSDSNQbyej1gTBWtcF9aCYhW",
  "key2": "4SaYxoBvNQq4nUNz7wC5zeVzqkT87f7YsHhnCh6AhySampwD77KFY57GApBxMkJwwib6uzLVQnzpf2A5F2YxksSt",
  "key3": "47gt6JyyDNWnS9itgbTcZVFdL7FtzpB8roYZuyno2tAdTzYYCtVbb5unqH717d2a9kmhKBSf3iXbzMNN5AQnxfXM",
  "key4": "5F9jSKERxjXEAbf3WoeDnnRiWZHsXoySLw5DuX9qwDwSEWxyjbDzKYeokgDb32Q2gyjWF8QbhLgucgMLYWfEkAUU",
  "key5": "4DPerrd6kjkyyHNQtmX6TNKAt6ZWQbvU1gA8mjygtvekR2q7ANajG8rCDUFLk4UGJYh7SirRPFzEmrgTveVhRuSH",
  "key6": "61JXN2PUj74fjch8JFkH2Po41S1ouo1wV8DShpmEXis9JnXWWk6d39gd9sdv6aJZ8Sf8vurmCxa7RrhgsDKRvbvR",
  "key7": "wYDcFUVbhwcNhbBk3SvrqSkWETBzsFPX6WH8jDACzzgXRoLFfpZwH5ZHN2jZYYbXVpi4fseJtrUBN6LosXcP2Nr",
  "key8": "2EsvoHSvmGZcVDHeFQPjwBkRzaQMccCaDeospXCbmSCvREYszg7o7hSemokXp4yShGTRC9X8oSvzvUGpVdUjwQtA",
  "key9": "4pvCKA8nw5X2BUBiUNHu8pwmcK7ktfVKj2LjCC19gowQpQZMRfBVE4AwA2sRKa6oXoLHTYK4ouXqvHaXgqnfASTc",
  "key10": "4gAXqMgjziQqfUaTDM5MgQGPTyX7tWr3UcPSN8ZwL6DniFk8jBHnS5mMweb75dpG8MhpgL8n5vEAyP8xytVa79W7",
  "key11": "2VE8TsDEgtc59syWcP1SLwn5mQSmNsF2URBptXqvyQFahE5rZS9iyVUDewxr6774Gz449uFWR36dwkdxDtzng3ko",
  "key12": "8K6SCToe3e46A9H7kaUousvzwQ2eGCvQwdw4GMEF1Zmd7cWZJoovZmoM86jKzess7yF7Y6XsFu1Pcn6P6m16ASa",
  "key13": "2Hs61ru8CUZzVtWyJrrQP6goYGopuak3dGRNGYjHTqmJMVjjqfSNYs52B6vYDTKAPypDRzJ5K3F4poyTa6udvjuD",
  "key14": "4UKeVv44poFZAaQ6GCxwnavPHrhB4kuLiAJK4Xu2AHwjTJy4ve6Dj4VbcCoSn43YH4QydGhi49G1m1iZ2F8RKrcQ",
  "key15": "3tVbdQoa15YsLg1XhveismvxtqF3Zqq4SrnY6wvWnPF1nM8pgKgPiAmzbnFMZKjt69GpoHMTHZd78HB8UNZB41PX",
  "key16": "3SmQcJEAN5xCboMTTteZWBaj8euSfFJwxMpP2X6K6RrNAXs7p1iD7DZqW92ZF14R1B8CHYPwkCNpW7PkwmvvRF9z",
  "key17": "2CxjgTrhSj1hxBkqBx6pDYGVLQff6SnVLU5hynWREuGtYETuLVUaWeC9S3x6qmuyQq1MzoyqGr2quwzYoiwyJsaY",
  "key18": "RLAo9UYZNVG7gWVmhC9CgM7bBLFdEZQGAPvfqPFeLCRWFETM1A72fQhwf9YhbHSewhVxUGgmR8oBDazCP8XsWdc",
  "key19": "5etsuoARpcxXWgU82SGwcSXUwqubv6M6P1jHzbcpuaNJD2n9khxC2cUqbUMhZY2VxsrmSZvboyGvwCuJs4yfcBmi",
  "key20": "58AWK1yCmCYF8XjNFiVZCCq1DHhhqV7ZFfxQMqsqtyo9g4U6VEgJBjuAvAApSnhQiqMMPWsL7BqVDwK1EEbVSGu1",
  "key21": "4euxFfm5AjkjB7cLhq6Ejvmmw9C4ofZ5hyL4uYmJ7GEvUJMJkSQDGEDYGSbwyBX1TQmWH8K3eQ17FRYwaq8A55dr",
  "key22": "4xD8ynN75HXoGbYynBUDMYHoL3AnFvZrKJJQeMKwYR5oM1G2RKUtnSn5GDXbryfg2R2nmnpsfB1S5VGezvX3aRX6",
  "key23": "5sLD8HLh5U3hM9V1t9tNGxc7g3RtfD4DtENWKyNG1QcKdrjwMVBGiUTUJaTPspFmWx5xVCJsWc6tmcUWXzBbZkq6",
  "key24": "FfauYbuThEmKtrhAFETBhGDp1eiwZxyHZh6KsWwfjnoS4K4Rwmc1koAr3E2XHZi6HwyFWBm7Necdd4zYooQtnG9",
  "key25": "4nH9h9eobvVnAxk7bryBC6EZGY18RL41aRo4cPH3b4Rda9LmhRhAhGSoNgHzqfYpFPwnG5zcp8xMzg9GWKFKgdoN",
  "key26": "4h1x1CTPAAr6Z8coC5JcfnTjc9vm359k1KF2ghEVaL6TYhpXbdtQMv9h5srrGVKBBN2J2cz57TGuJVs2q8CKd7cb",
  "key27": "UgDU87tUN3Wh8y6DSYM1L4Kk5MTcYGgGw6UgvdGAgiWqRrwc4SBMZpLfxVdCAC3QBRFjK9jUsZtRNd1awNAoCno",
  "key28": "59nr2uipkFWJUWTfsdZvT1bMv12t7zZjvJ3vcXoGTkQgjjpvgHnbxoawt37WSK8cocXV3HX66ks8uq6ova5cYuZQ",
  "key29": "5o9HXgHG2GDCtLbiRWUyiKMKCnUwBNVFX7JaKoq4mPydsehWear2S2qq3DDNgxFC17DC6QVr4bWJPSKEgqcCVzPX",
  "key30": "4HR9JgontMRtS7TMk7M4gkLHJmrseud4YCsZ7ScM1TkW3awuM1bJE3QXBHJV4vkw5yxtFETZtWm3UoLZvCAtf4yZ",
  "key31": "Ks6AsbEoyHDJ9hqYtN6NBAKEE5ZgTRQXpXhNw1hy5EpCy6J762tEBfUGuwRGBFeUD5JKvA6TMBZ9Kxcr5Z2aLz7",
  "key32": "1KyPTVoNmAzACksEDnKwDevD1MuawsMYKHs824ZSKznxmHK4uqcqkk2yXtEHVfCEbfHcPvcPEfSgPUxrY9qAApi",
  "key33": "wvPFyQYQ8FqTvpiEAmXY66TW7Zg7GNnG6oXbYkNEiPHYAjqxNNQtmWd5LTKAWSkK16C2w8tMVtrtGB87xgGt1QD",
  "key34": "3HqQD3DtBEuW4Go1g9N3ujb2Sgr7Kvj43zHRWgEmSQMarLXTXpMxLE2aVsBrR6HUfh3pvNN1qFJdhx5kbjRzXuct",
  "key35": "5oSBmyeHVfubZ2DnHiwtKkCN9em7vztq6ftqE36pYrNXvVveg3rfntqYCBqxVByy4nEjRoPsyyFbbBV5wSYMtYkU",
  "key36": "5G3c2FutdwygcihDpJSMYpBEdoXTmj3eJfhJUHhYRwyYF3JF3PHyqz1KJ83yY1jyxR4JDzBWndFTqL6LDMbMhFcK",
  "key37": "5hsdx7JJuPoduwqkTvv4Ju641bp1gyathwApbhgq4dKGUaXBhewiqsQV6XdrSaTN3X5XH6ndvHkK77sobsr3fwdS",
  "key38": "3kDS8MmzFVWV3n7CrRBGCjSo8Um8YY7PSibdi8LXHUtkJqUcq39wnh92zpzXejPbP4YmhxBN1bb4CQaSyQ1gkzAw"
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
