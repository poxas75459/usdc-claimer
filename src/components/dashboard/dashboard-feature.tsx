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
    "37SK9WDrGeCUXLJwjtTr6DsN8h1z21SCmpGp88Qp3uZ9wFNdQBBd4qinWSWv8zxo21fNYXMF1F13jQ66To1Unc2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9Fh9qHZqJMe91Kg6gexTSKNf4ZTrtE5zhNzdPd8EgXgy2EWjkfYbt3wdXahKcRWxebnHxiX1fkLn9gkAdy9v67",
  "key1": "4B3vVqcyoVCBKHBim8BFxgMEA5ubkoeJThqkVqK5do4DxTD53pJXQuigtwi4LhfTJ7VRY63Rpee7tG5ye9bEskrH",
  "key2": "64x3LsLNF5f4u8W2KdZXu79cUqSL7NF9P3wdDo42fYsRASGS925nEE3NtmXmakYcmYTrjwnmm4Tv2zwbWNFY3NHw",
  "key3": "2MfJW5Bqd6z1oxG4RcBMS6VJB5NrrQ6oet99U5qbYpcbohcXeFKMAyE2WBii2PVdMCUxTPidhqJGYCi15GYQidPq",
  "key4": "4YFvCAf8EqEavJAj58hYVYAJA2daPJKCYTEzEYiWvY28XyRZvEaSDw7pAsgRaCyVexqQ4xWtKCMyhGYmK1NxYfXZ",
  "key5": "EUY26yDY7FQAGcCDmprap8YZYtxN5nAVdXQfXZHbsroNi94cuQYb3mRgAHMaXiNf9phs1CdDT4NFXBf6wetoPuS",
  "key6": "AB6JY9cXx5V6obWwdFXkwqzQVkk6Mab8uf1PRfdNXSxfkNDaHo4WLAXL4dyPidaKgPtnUeQNRddvmeg8wJEvdLn",
  "key7": "2iZ7TU6ibw7HUGqcYsTxVQgDtzXUmKkvtbmmLREHxsQqdfNRPSznY5XXvkBkmffex6VLGnuxZ7T9dW8gAJmEsEFW",
  "key8": "4mMG3hx24Ba7xuBwuyDw5sR4fc3Nd8zHN8fsXnQLytsK2EaFoDtD1L8VLQ2pxSYaxbFhXV1VmjBfkdPbwkkuiNxF",
  "key9": "2oGFLhrRpvhxV88a8FTj6ZYzyn7xZBZvejA6p3vt29fjED5DntAhKWEtyBtnSrswerxsoGLMg3kp13H9h2mqA8Pr",
  "key10": "2UYUg8A3Hyb4KSQiLcmgPjZkerRQnhh1GqpSqusz7oQuA4b4LR6RKcvKAUkGhZdkQVwVKg7oqRKfdXeWUHBNyPkM",
  "key11": "T4FskQ4BZw6jwgk6RmJRFeUFWG5DxxMGgKfvWXhULAT1MouP99XNVSmeBzsV83QNbZSpAgoHRgP6TZ69EG2WnLn",
  "key12": "3uUGeJ7cMc1J5m854DxHjA55mCyLj7LY3kb9eTSPKqfdNAgnnni3pfX8buioHLUVyXdSAohSn33oAzFBcBsnWkEA",
  "key13": "32wtPCzUeiXy2qabkyi1ZHRoaTZ7H6UbZJyCxbMd2qEtuas27HKQMc63LXNfDyifc2gNFx1iBpURzKh8EEfwsWiz",
  "key14": "hzTFhnJ1oZtN2tttFctZFb3FaYex4qa6gPKPWVbNRYMWHTixCmeEiexZSG26aGfGjnGAVK7YTSGva8aDcsP9qX6",
  "key15": "4bTEdqGGxXUbE9VopwSKrAawHytr5CFLF914tnZGw3braSGSdn4GdNvUpQiKFn48j1xM7mk2KKHcPWriQBt7bAKW",
  "key16": "3JD7F1v1u9xq3bsHBaADSu3AUvWZaZfQ5G4PfARBcwgPkBCdEVfKZ4cpsY5b5gJk3FeYMUbX53JgHtV6sJ2LG5cm",
  "key17": "uQ1qiQdxVJ57QHQXckkutm5f4EiYf7h7yBrUha3AgcrLmVcztz59hf5CSUgznwNT1c9fdaPYY7GwbBjrSAg2JvV",
  "key18": "5ckV1RRhv7bgemyszN9K4SKH6djB8Dx7TYuCrCjKbYeaidjcegUmvWSHoh3ccuXYwyX4425gugSysRoMszuTZjBz",
  "key19": "tCUzXxervQ5mfxdGZR36SxVRzwvvqrZjjy5GDGRhP5uki1z378T1ZFWr2ZY2iXkbNTsvkj4JNRignUfYmVrFeuL",
  "key20": "5wUm658pzTyMGKK3f8yQWHqtXprvkgftBB7Pd5yH1Hfjp2YNz7cZndifVKTLys2c7gKXxUyDK5aCkkF51i1F37z",
  "key21": "59UewmGprySmLcKNMg7tEW38DjzJFQARrnKEZbxiD1UbxxNwGvyoLYDcbNSmX1Z3Gked3xrXpbWXb2pU6bp3USfx",
  "key22": "2CLsHYquS7LzwKVxjfjohwNETAfxPDBy1u5V4axcsZko7YFAkHmvZJkSWLLieJELRtE7zaCKSV8STJNLTkf2BaGB",
  "key23": "5wZdUbXNvxwvVSc7zHiDSR4STabKxZYQMnJm2j1W3jpeuw38sxubj9yKobKefDKsHTjgNHRri9q6VBrm8CkycoXN",
  "key24": "51h6PxSds2yvRtoY5uDPCVypftDmpiadt8f1WRaa99wM9iBPkPBaG6aKSZSvdAGcyd4e4fsLw7UxAN65Y7Zt67Dv",
  "key25": "2bY1muThjYq7hFBocQseEUMvadVjtajRkJVPo5Eh8XWUGWbTUmYM8KGnW6hdc6BrBTkFxPACQvu4M8ajnpj3Xg52",
  "key26": "274njT8AS3zMBdt6knvgDJda9x4K6v4Q6MaSExgBUAf6yjE6msnJDxmsAivmBWGMEgQbh9a9MSiCFUohwF2WkFf7",
  "key27": "m7TQxUqn5qateWrTmMJXHnfC2UJ1wTexskiYA1bFAfY85CbvcCoYDqcFF58tbWQuZ4piW5VBJBGLLasASKnYatq",
  "key28": "bqsY98cX3H8Fm9kwTmPzee81oXbKL7vqpomJMvEuj3LTwcSdwXGsmQ7eqYibc6DzGx6qLUCwo2kY7LHaD5FgTVW",
  "key29": "5GrQHfHHjJGxy18NU9NBw7vd3gxL2ibAMYUj6TNgCeeM5DkZB3KxpA2WswxamzT5raerMpKSB3BjUiX9NJy3fTx1",
  "key30": "M6MFVDFp4YbrYuXo2gPeEK136Kg8GygkFBNhfccgHVDksUC57A1MDjVDjcL5cRwuBFqk8H8gvXXnCzvuqukW8G6",
  "key31": "5ao4qi3sGS3kk4CMbo6meiCTNFYeF1CDhUnidwimVYQAa8vU3sUHFsLhpNBjjnKi9n74k1ns6FTpJM7yyyRyt9NQ",
  "key32": "TSu1MdP96kasu48NJgFoEMP4Y8yRMwRNbpDWqqAtP6RBiNBfzKK3unhCUkDht4npQ9FdLtqATtnqBj2DUTcJG3S",
  "key33": "5Teb1jKyPFCQEw4Ep22GpKAqDEvjuGZCjT9uS3gcjoyiNx4n6f4LsymaLegCo8FTJYLdgyYrDCu5cpjeFfwdtird",
  "key34": "2hgoxpj9DDoXPPAPbhkQDFS8Pnb1mC3zFAWigNedzZJyQc88YBtEkZSHwzo8grYuBfbqVCH8N5dGHbJmxrDHpj5f"
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
