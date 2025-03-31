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
    "PVcQgobJFjvdzvdCvcHpRZ4GMZcEUaiQiAG2UWxC4U6A6eN1CM74EK66h4cboohbNfPRDJRf6Ud96RU5Kq41Fj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rv9v4DdX5Bxxy5LGV9gCUwZUCJHoDZsCQVixEGbqv4DuQXqrZXrnJL9D5V4nAqsUwqseR39dbgNeGfqxz3wci9c",
  "key1": "5RVMHgMh4mMmhX3ZuPXr8oxzJP41Hd82YgM5r5JA45xemP9Yd6yfPSaMD3fiwMQiwL4eYAH5GQGSQF7Hnq8ixRqr",
  "key2": "34mTjNLaKBjYtAL77ZxWaHhRmy1qc1ix6YVRQseUqc2fyoYjRJRCotYVsgBueDr4svjviTqQkz2ckpK1Q52MXxCH",
  "key3": "4nAfvJpxRGh7TtUVY6iHyFtizQCTwceX8m9ebSFvDQgxKrXPQ2ugoxMBvn3qcMGGKiKKKH7FtyrPax4NT4fqGqMp",
  "key4": "tDmeRzYZpmchcQKGx5YBfsvQ4ofwc3unk22EMNzR1SKYUnx8GHy3A1prTwzUxL3YPSQYM4ci1KP9Q7cfdWEn6ft",
  "key5": "3ZMxaCgRRWDYmNexcpT6FvkCmiCemFnXKJhjS1KCBh79KDjx8SWWdbQZ5Pa4LCH9cCUv1aMXFo4i15HrLwejoHS2",
  "key6": "5UKwuc7oj1Kkqnc69F9tGxHJyNbHs34qqcXp24DznWfJWiLokDnFzwCB3vQ8gpwdxPdFgYfWtjmpCd491mH9tW81",
  "key7": "5yJFb6vXZV4xEbU55xSugyP3LPqVVYRc8u3XtwjYYyG58YzoPRjS3VwXp1qSEDepUYajy6L9nENPEYWAUfr7sp1i",
  "key8": "4mnn9PzVVpGvKx8EzJFixdpHMvHYWsYXggJmYmetRpka5fmkGBbvjWRn1mFD9ssrPj59KPZK19e9H8tbezTWrVm2",
  "key9": "2WiQDShXWgFpRrrgeXnz5qsmPREy5JoxAhghLFd1oFpRwXpx4HQTkRb7Ke3Fo9KnvMdQ3RGB6eDBYt9aEjN8NGge",
  "key10": "5CRKv4sgFWpsmrL1Un7QA9PVfig4V1XRKPBXncdkfDFfK69ZoMyiKxtNy2rUcaK98N683qeYjSKWXkSZ3SJk2FoG",
  "key11": "cTE9J2ZdFKx9MVNyEZTmsBE7CFwh1YTWhtSn4X3AJkaNjFN5YG34YKGzYTunHtTDoyRqfikyqLFLT6ziXAvmfcs",
  "key12": "2XegtWaqLf8ZTukuKbbN7ewx3PB7rFgb945FX8iPAhmKuF5KnRUpc3vAW2iArdwwXbqc9EMP4GDqHGx1ZGmhyQmp",
  "key13": "4ATi2WF6kqgdNtgWCeu6CmvFoQ2iDW8Mjdev619QzvZMewHy8QfCmXfRJ2m6mgwT4tE3h25EZx5zPjLYi3SXCQnn",
  "key14": "2t1jTdfWgtQTSxrh1ew1FeZiuLiDZBPAo1Tinx9mMsSPesWWvDmw4JfQwhHN32YeMW3cAMD88pBkL2SPmE4C8qqq",
  "key15": "LFZHPuEtLDUSvg7g6zazp5Pwkty4GTFcoybU69Sg8EGAa89CjmBFRZDj1fzs5n8Zmro2dTDGv8PG5UkZeVVRo6V",
  "key16": "VF3eV3L6k2aXaw9oiYGQxmrf9HwKVyzPN9dwuocnnRAFviTvmYrLT5rC9zKPjgNx8xYfjpESYuoMLEzC5vKHL5M",
  "key17": "2qTz2XDj1dYfGoyEdtZohRbdYyegLdGgQDv3A7Um9oo4ScM9Kg7g1r8e8AqCMtUadqqoa7iTggWGMZvw5aC8x7w8",
  "key18": "1ZAJmxZGNqGGzWbmT6gR8vsc4P2Y6F2oEiGRHo1SLFRddT39TbPqJJbmunoTWfSL1NsSf2EqoEwEDdaEJsbW9f1",
  "key19": "4rnWrq4j8aPiC16nhyBZ2KQkjm9YBLBbw3aJXYSmKbRnUE2M65Qsc2TTt7DpJGTzQH3n5d2Pe3iF3x6ponFxfWDZ",
  "key20": "4pGckGiCUjUCPq6uKKgRtrxx8gu442CAXHwyN5ADwmrbb6qWpgh69WexB1QzH8wbyEbk1trTZJVDkLwStR3rYGi4",
  "key21": "3Vy6TL9hg6EoS8dbqafcjEzvQ79RQiMCqej3TKdcfHVfvVYG8tXZMSDFpoT29xp2nTrbD2N3FzzGwTVCDaxAgkH6",
  "key22": "4x2hYpSWD6C313zNNqc8ZCb2Sk8De733dpS6FSG1adbmX79R2GJiHDoc3jVXgN4DFoXVUuiMyrW5ejXpo6hQ7kg8",
  "key23": "2848F3CVnLy49KeuKs4gKbHEMQPFTiGUayD31aAPUhMMq2GpGN8mUqk8p85sTHQHcceooGfhdRF7Jxfn1KS45SU1",
  "key24": "2ksaWW9EuH2fpX4wRGWXN3nsk4HhExCnc2EnpLsAdeA2a5dWXkci8HTLxoWH9J22AbErScngGesgL9rNRtvanYbg",
  "key25": "q8QxDnphXfM9h9wVjqBE6n8YU3otFSgbsUsTq28NdCtZnuGgWMFkQztYhtxC7qDE6Y9EXfYSHWtL8DQmezy7fZq",
  "key26": "4pq55noHv6H49EtJ28qv9wGSdFm7BsaC58Qw7ZkbfB9RY6ZUtfLhR4byTkgKAcRdXbNHiTnjLQMiJzMf2956N7ws",
  "key27": "4kp9NycBdKWcJpPhB9xLp1rrSNnHTsTUeYxsf4eS6yA23gdCrox5Eai1e9q2vNvoEsjAaCggdyPAedTamGBGBbZj",
  "key28": "5itHRiRPAQaBy4VXraQwFUJb6xYSAnbHFbWNuCuLgESLKVVB7BcWaaNgwh1HCXtd6mjzKA4Gm2YaPqqrbKxpfxko",
  "key29": "67Rp9cx6Lq6KtzP6J4DP828wj5NkPuq9DCt6MQ35wDsqFwea4a8A769MT4W5H1tzk2hsAgX87a7M7vrshJNjDwFu",
  "key30": "2ECtGzW8KLW53NQxgWKqGBigJtEkXxUQqJ1gzx8Sa9e3YbnmtEq497NL87iR8Ly1pDwWUC3yX5VLuhxUMb7JrMZN",
  "key31": "3J7YXS5A8Q976As2J3coaeb7at3XuvyRpc6yht2QakGpJzXvuYcw1sacGwMSY87pJz5DJqhy7GAcppRtGvHg8cYf"
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
