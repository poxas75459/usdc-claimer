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
    "3PTeXp6oTCWMnB9SW51EFsvZgQ5NJReTb62pPswnRTPoxE5djA9kj8zntFgQSXcY9bBweSqtPgFDP8571q7kFDui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ywBAUSh9kMjHWzku8wp2Tu4rB254QyGb1bLqxqgWWhpMeuCUgQVFejpjEG221AiXVaSnGcmtPvXRuteRtWwCqdU",
  "key1": "5gr3tFvMj2pqh6EpFGF3eGKx193naQmkCN8ZtG8hvZoHbeRcqH6UczZKCFMwaik4w6sXz4PqYsfNFp55qfpKPMA4",
  "key2": "5fcd4j6BXnisQj4H4ypQcg3CPGBsWmqHt5FtLxhyo1j42V2VQp8w5haULotBoDpXerg6bhBsYP4V4XDesUPR9Gsv",
  "key3": "358icPaXXcgXbrY28HoQDsN5gf5jdqBiQi8tncRoo9HpnKxGhQY85kWABrEVaebKoN3KZg7jjHnVcNtK1tdYYjgT",
  "key4": "38dHG9zpoXVU9LMBNMuFc1R4veZX7e82HhJ4449Hzut7ymW3ngTjoB6AkGqhnck4auHRf8uiLAByhwJBak7bMiTH",
  "key5": "jgUaD8G6jxn7aAb7jjkBjUf22L3XLGUpeXYirNaNbzYv7CVRrRGMFoCyGoERsTH4sBP9h9t6UnUT8ceByP7avCH",
  "key6": "4XJjJ8Q1FiZn63rjGKZbbb26SjbEqgv31mx6U7g1EkQ5vXF9q6n3etyhDeRmm1yLSb6JddFVw9ystPNmM8Cw4KTH",
  "key7": "26EmiyNppZkbSBqVVhKqp9A7B5pkkmqbDTY2xsFt73tETn69tpyWce2mMwZDLjqFfkhFTxdxHmuRhMQtgm5DXRDq",
  "key8": "3W5UJi7MuCj2NqmVo4hJhdoqVhHPbpcN3ZkQLM47G8YGMDPUaauhKaydDGZMfvGsBG1fFswt9R2iac3ahXHfiJdi",
  "key9": "4zQzRBHu4WtcYM9MWkAT7vYNMN285tBaSbYn19Az6C5Vhd1TutFstfeFFPBVZhAcLfgmCRU3T1df6bPV97PfWysX",
  "key10": "5J3wzykyrzEqDChB5kYEbEJn2H9rjCXRUnkAMg4hPEx7Fxk57Nn4LytkMkrXUcysDJ8aegbbv81PCuWNgS5T5mJ7",
  "key11": "4edpxF9fznJCCRydvjSW9gMYHjkkgaRj494GNBMHYm9zXpq3tCXdnZ8AjqgZTYnphR6WrG5tq2XU27SMaNrMbBMS",
  "key12": "4vnSdREUvaS5CTN2GLH1RRzX2cySPwekLNaCMTirWsVfCqAt8e2auivwF4Km2MhYhsgX2cERsNkxmyNh7xjcqLTz",
  "key13": "2bwgn9qLgTGn3WgkWQKs8DqB31DywGMWeCTtLkpumE6CJv6oKLRXrDxAdMsGedPFJGM8yb9QNTRzfihoDdHJ3sWq",
  "key14": "5jVpRSZoroqHtZwNaJHAg9YxEREB6MwgXuoYBFHG9AVFvbhPQ4uK2VcVp6offUkB2AowCHSA81jDcREsGMQoNp2e",
  "key15": "2DHib3GzK1uUppP1EtRn7ceyrGd1S9ZgqkUDXhJA4PJVoPCHTSfevcSRVKVLb4uuPco63F5uRdrECz1gJi4Mk7PW",
  "key16": "3vAnF3XEdbiVwNZMSL9thDZ3DtUH4qcoRWBcA7KQvJKSxfFrNoTxF8KyECHYiYRFBbYBgiWrXp8yhytTYL94HQEa",
  "key17": "39xyk3KTT8YmaUbB6RJZwZTSfhXU2MwasygoJ9q16wWi9zFLvnyPDS19vRpaydtwWQ4zRbYSJdGV8A4RyY62vwgn",
  "key18": "46UpzcbvVqYsNvXXHaQrEd6y2RDT6Be1uRKhx38ec6ZUQxMVeEQsmxDjKvWPpoxXMQhkgao9wKUrBH4TMHivuCRA",
  "key19": "5fyuw8Q5JcujmbRhn6iPUG7kK5B75j8KHPsqNetngo8S4FZFZmg2BoQJKSjJfRsUwBnPJ8xgbEQTM1vFM5HpvsNd",
  "key20": "3b1TesALKUwneRVxrFpzWmg7395e7gomqKZKTrjvgNDKv1jDVifpuDzSzJsGLyRiiyoJzQU5oJNEA6jqpCbrS5y3",
  "key21": "5MhP2RiHJKWevY3wF2hAuggiZbeWan7ZEPyMrWGtvQcBkQXij1R7kt2iiXufjo5221WuKxwnCHSJPC3ZuJqxRCsa",
  "key22": "4LGbJABzV6LJLkmhsgXq4cGLVAoCCsmR2mRi7fcurgq9WWyihe9NLHNnbooysv5d27SVGzwVnRG79b8YWJjCHaUr",
  "key23": "b7aH7CfQD5zeJoCYbBhsXQvLgcFGSXNzXRqZu5AoFsMuhDMqK5wDG53kHSZY18FcXQEosDrsEiGBiVdFx4ikLQa",
  "key24": "3SyCNAWd8bDmsAkQxGCXUFXUXd4e8Xrxn1qteL7gjJHUTQFdc2ELSWQcD6CaFEVi6HrbaWsTcjwMVj9jHrVU1Hoh",
  "key25": "sq3TZU1UyEQpGeDtkU5YTiKYkSmhPon6x8ZTiC4RNteeEb5XmjYjBVUZbX74b1JxL8pWLBzokUEVqmxM48Gepdo",
  "key26": "3D8QQbJCecuXmQSDJe2VBzM4JysLr4SRAc3D2UE6ept3zR5kcNxDjW81Q8rP7P4KyVvDWyWAJV6FyPnFncZnAvDx"
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
