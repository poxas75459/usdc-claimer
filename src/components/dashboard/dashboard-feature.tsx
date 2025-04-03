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
    "4vnkDy6tKCfkKsC24ghgU2BkyTB2ubV4fT9WtU5J9i1PPnG88GiXpRjAHgmdf5iNV7Ci8cPcQ1CCv82DYiDDfdXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XbSWqNKSWV3zT1wmDp4tW4ohiwBdGNbYSfQsZUub1CPmd1uqpNRCuoQR3kgpNjjDdTqDxjQqrDgD81rhZXDvGna",
  "key1": "5JMUQZgfQsMAFwNPZjE1d66ZXwn8modEDRk2S5mxs9dVH3yCRSJzH6PqKWQ6htQPtUw6srFi4Z7Fi2LiYuVFDuUt",
  "key2": "5E3yGRccF6KzvR1HcrQDM8eJPYY4UBZKmW79Ko2zkTB9wks6zxQoyCnExBJGDXHqBvCDTguurwdhuXZqWDE4X9TD",
  "key3": "4fh8Y6HpvbKGn2DJCWsitvYcwAcXBQTXxQhS2RLtsW3fySeeQc8sYSd4cgV5WD8RWXopjSADKM2aQMgDp6L2GcRY",
  "key4": "34FHqwhQDVGWq8WT2XNTQkoZey2tahcdnLcDypMzxCAzWJKyzGqxvu5gXrPZe4u74HWRhvCooSAwYSuiTjxUv6rv",
  "key5": "24kmnGtku6BodTPwuxVxpcv58pULnPjUqbK4xMCTQcNHnJ6rmtU4ViGDgkQyK1EknGS1QefYEBS7Fcdzq4kxmvgR",
  "key6": "n2xq1okdfM7fdz1CtSkKBLxqwAUffeBvGfA1jjxUULMaV4vPR8aqBeY1Wgn2mvFN4K46p7VAksJkxctopDns1wt",
  "key7": "2pGhaUUsGKXBiWi3U6Mx72fGwMKhLNbQCzX4R82s7RQF5DKDzxo1GSrXmvBQKhhYuCN1La9rsPVeCkKFSy8iLfcb",
  "key8": "4aLysK1uthQET66Uvs6nEYKb3BdCtYLvwVS7QEPUpW2TkQEQWDPFWeNoQGZdFeYyTkGJtmf3wh88hCu22rFDHoUZ",
  "key9": "4U3U6pq3KHxsLTfdCNrqd5VmZ2jaKF2KJWDpA8mb2z7yBpfXCCqutStjgWpNa4XJG9pfwnGKg4zxzKd6ftL37SZJ",
  "key10": "2Ec7AjUFnjUeGjE8Z4XZ6GT6hhddmFggCEG3zSgM3Q57Ssv9Ccj81rAvFA9nhEfS8Dxt5W3BGNfzxQn8KVFfsSzG",
  "key11": "31CuTRk6vCEwtKkztWfkgdFrmXwgcr6JXNymYZMpshwQieFnhsyQ6pxA8wM3kLKh71C5pfKmCqYdxB1aB6zarD2o",
  "key12": "3TkbMEon987Z4kqxo45AsNo9hLpivgcZ24noVmUNSgyzrY1mNbdhG1an48BipkKEuTtJ9N5i8GbhjJ5EvVyaUZaF",
  "key13": "5GnQWp3jaEhyqHNqHHky42dSraeUP6BhvdoEiqwsN1DFgT1at9p4K9m8e9vGkhC1awcg6crnYDvMqyqthdfHToT6",
  "key14": "2FiCCpN8iMtvdbTMqfhr8u3FWN877kDHj2TR4qaYdiGfGZfZW3VYy4f2uEKVNDywXvjvLBxatXYne68Td5tWonC3",
  "key15": "4EY1GV1AwW37Ze6gcyWonn5uCWzPEpUQZFXiPzE5tP19XrSX3XpRQ8K1sJ3SBXe2J385h5TCh8zoQ7BW7Aoi1cTA",
  "key16": "4C8sNFwypTFmntshtEp79j6PzHonuZRCwg837LKUB4LmMsUeuzXyxEGJerHG5qArYcvX1a32pTr6efAtH8DufJKa",
  "key17": "36XRcrgovDLw7NFDhEminr1YaenSZ7sy85dHcYNRya18J8fVd7yZiXSmuo7StA3GSpGcDynLoFVcHowxgru47bW8",
  "key18": "5wY8XTKYx5Woa3tQDQiYYZ1gmcdSM4WZVP8mp2o1AMVUVPa4wKuebBkFcjEoRov7keFFeyDPGcJCoU5JW3Xz5HkU",
  "key19": "5rQh8XDYTr1PWtBJTaqQmUy5tbLGLieB73ZboUtTnfzrr44JW4BhMyHQ6jFqcPjWY7Vb7pakHAPVY3xB2tXVH3rc",
  "key20": "4Cq9BXGaLaRk948xrYmou78MnwQCzVr5USS5igEuSaXZkeZpwtMjTGwno8nzuMV1JEAfDKQJa5YE5hCJSNvyQi1d",
  "key21": "54w3MjhQkuipRF3m5vDVyzGXubmgCvtFLrHCJ9x323dExTjqMEQJM8FnhgMD532D7nhjZREE6Tu2K2y1sMZYq7rW",
  "key22": "66c7kcUwuEqJq2VexoGiCpKudu2RzSVTh5z7JWA8d4Lc4chngUhQ3NANB1XnrtFhivxhmowBJwvjhbueGVg93gXk",
  "key23": "4zZJAApepeySp7hSW6xpx1knv58CDgGQYdXQfvrApQ77N5x28U3dj3pPut5B5vwtKByQzoe59hMUukxq3zj3c6pD",
  "key24": "5PAAv5TRXqNC7bqDriqnNYudRWUoQoburzc1Bs53y2GHb7xHgYuaNJiSPFSjLkEgr74otBSZhinfdp7rQh1EgZJG",
  "key25": "3XPnFKN9WBoh7CqPLDvFkNTRjrwrrDH2e9MwUcNdRqEiqUDLEWcfpoqz5uxWUp8HNehW2wYoNQgfbFDGY24SRikz",
  "key26": "FS9NTsxsxwXGCz3Gy2WcJrfUq6AmvJQ3GUyB1nKgoTmDqxuxTWPRZPHj1fXvik1Etf5bZRH2kEQSv5bJQAJuywn",
  "key27": "sH8hgs5QRU49u9dMRLeV7jPgAB7ZpsDyLwBqVYhS5S2pNSPGnojLoUkdGxCWGaWCrnKpUdxtEPQY2fKtV99JLCt",
  "key28": "59cVwgkjM3H2ibvXwR4xKXFDdQe5ciUvV1GmsUjJfbZSNXKJ4LnAabSyNsjNGJH7ibcPe5JsYx1VLh7nTYN2nT5Y",
  "key29": "3k9oNFXLgCPPvwGBbK5AYPtEbGPZwEf8DtTcjr461B8adiPdj6U2UqgUc1ihom65CemXvXQXJRLmRSFSQPGmKDne",
  "key30": "63prPR5nL8P4iknWHAgDohg2LFWMPiSf4XqcvjbbymawgxZUJvCTVhewbo5z5dSVXbPed3pZfx8butus3Cev8JuD",
  "key31": "4z6mE3wXA956pGapyjZTJVujZyt9BbSFPvzZjQSXFU6sYtfazReLt9QZxpBd1iUNa8jVNXD3ccpd9P6Je4Zb2T66",
  "key32": "63nWC5XbNywEGiyNFsV31nVEUzt7mmVfuReXan3eJa9687TGzJy4woNrWEsTqfsSFWcADUJAGExyvW8tQNiWaumE",
  "key33": "5qj4pvo2cYaDvNHMjFtE1Y2zYPAc6yHDTEnvmuR6wePRLKHDK4nuNxx61qcy5NZ3CzZ3fbEui9NvmgL1Q8kC17Dm",
  "key34": "3XXjMF5FKM2C4nupsfWocCvq9Ye3kvKRKzYbEvJH8tgWR72QbwPyaEnhn5D9SLZPvwszA2wu84dTSSWV8wLTap2j",
  "key35": "4YhBcKLErUVyo4VBR9MjHpShQtRBi3L2ZADKnekSfnDoVfWUdNppvxqc9heQkgc9KbE1gTyqFz2GsBu9YHkuKgWM",
  "key36": "2TCT4oRGeogYskhtECzNydKnwrLFrp49qbXLVSirQ91gAc9CQrQdExKvYaqQ5nwLW6Y14pc8mr3xT6KDBwszJc8r",
  "key37": "4wVyKDJ5Dx5nPwusnsiJkV59ZhtG2Sf281PgALWRegwU5AjGGpoizyvB3PhErmRTxNeUr7JE8gFEz2p81tCfSui8",
  "key38": "4A86V9NorVv1imucYVoQoY22PfhsLavP4WofKeBe6QakYhp6KtBAwd5y8s7AnYrEzFm7LgnKzmDzpgAAGawCc5SJ",
  "key39": "2vQ43uZJN9BxsHpLdedQWjC9j2D6h5q2ysLJpDLzB4NnoDATXYgLmDk5fzwseCXPrBb34N4qwLWjnakqtqf1hiJc",
  "key40": "Kzxgxu32pKQSpxAZQ5eTGVifYmPh21aPi5usRiWfoA7XAM6poSGVEdK7PebHQezabxWeKXTK6RrAExrQ8ZvM1pJ",
  "key41": "34iYRQx3EUcHSJV7G8eDPkaFRWygR48RYMxJMb3TLEBGb8XFBbxPDE4XxLJjWQMuBCqSRyuBLcGML4VRQgu5AhEF",
  "key42": "3J4RxkE9pF99M7ovnVhBdWa7Fh4bRa4tdsAZV5Ec7UXSUgY1obEBKpTLuK6znH6JA65ir3Fbf3yRHMsp993CEnNa",
  "key43": "5QtAnwYe7ecetY9z7jENBVafVUcba9zeJ9rzMFHRs64fuXUjHnxhDL9kkZS8PVboGe7DRjccDinhhqKDedLsYBeS",
  "key44": "2rqzQYUuW4BqojKWXP6kFqK6j1a7wB8Qk3LN7PZKXqjgFcCYhXHWB4a5WvrqoKCBDhrnbPUWVjsiDYzAjS7wSfyE",
  "key45": "5M11VCqs8Pz6LCWJHq6jZdFbPN9uEZKmaiTuMBnM74zASf5PVH4i5wLBcdHLeM2d8T9LBgm1km2RX9SJJpjETpqQ",
  "key46": "2S1TtDakfJfAeT1cYJ6cXnbkwviDzG6J311vZ8H31i26CdHdjS6hU3pd5HdKo81iG5jyRWgRLvqqquudcwgESEwy",
  "key47": "237CuQKFX2jeLrwPqh62bUa4DPFpUpRxpErPr8XDhW9mDPFsKkfxSrxfpAVtbGq9oY16dfXM8GHsU9nLtAEGiqnA"
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
