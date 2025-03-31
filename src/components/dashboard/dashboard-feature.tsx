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
    "3Gj6tyvdARjANKCf2Wd1vkPnAwsRNxfDGrtCyWfvLvQuxewSWj1MsYkU3NoRPiGB2DWhyKdBFpTYW529RbSchUuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjvkrDeNjNK425SH16ASCKMoHo13vBExXC6fZeRZvudJP5oomy4Xt1sL1QTQigs3Tna2Q9XV7rVsAockcgxDebP",
  "key1": "3dwTS87skU1x6w5cFXiniHjV75iqLZibwA62pUZ9P4RQSbhXHxwG8zwf98hYLchHxQT3Fx58rDQTKFr5cB6V2Hth",
  "key2": "56aBUaBFgPg3LSVm2sspBLk42Qznmp3qv3qypLfZ9WGgJGqA4Aq2yMkA4LYKyT8PKn96XPmFnFkaDuqQWUuRMJSv",
  "key3": "5T9RPKsW6FKcTf9hyL5jxw3nTxT1hoDggPj4pwPubfyA3f5QZnfdujX1uBvy5CsG7T2qqo8Vwi2qf5ZsADpMHNeU",
  "key4": "5NabWD4Bms7rkZWQe6RpqH6iPZnqd6jSPo7Jc9XLNzpU9rdABFWr4VQDoQrf3SVXswBCRHNhafMtXi4Xo69XJQRE",
  "key5": "3n46HT2h5xPWQyQ7Tk3WTMRf7yS4c14swm5LvuFu75DRAsLzawibhzL3nPFgJ46F3wkxApBpGFQUrbH95dwjaad6",
  "key6": "3Qxh31mgSWoubqNvxHgTzXo7YFRmBeQRpbR41P6Yz1wC9bEAJEafgwDikMrnvVpSAX83MXR1u84egXCP2YmQjnqL",
  "key7": "2EVcTW2Ktbsd3sfYQw8AwjeffVLzcSHXfCfSgZcBPSdh7AEFy2bAYqC57Dh53zMBMnFzsvd7hroHQm1oi92nGPpN",
  "key8": "3CtuJA9kh9x8gyDNUKvE9Pm8nRNfXgnRiuTKxzj4syuu3HZS3Mwn7RQ54y4dWLDSeRycRJQX8mzi86cCzPwcfeqm",
  "key9": "3JKyLhGgu6EXkXxT53EAF1YksztVHybNSZNhr6PmH2jDNJs8fMYK2HEgq6tGJpBGRGAQd6jVgidZjDdKRMwmvJ3K",
  "key10": "3m1UVfTGJQSK844bvsW69Pbjsb3ihsfbcWwDz4MmecjfJjksEgqUDCBLZuxvZzmNFbYw5nm4s8wVmEgiMoWYUWzE",
  "key11": "3RNorb96tdMHgjDtAyaoQnyn6csbK2a42v6SDocZRS64fq4HcVHjCjduzCq2WN8MRZYt6pAhQYUNRtH8GimM5MGB",
  "key12": "39SbiXXfzMvjkXMH4kYr6JxGH7q8uUfenQ2Eb1RZ4UYVDCqeoPQZ9mhsh668hhDs4BkSLwikZgmdC2h4Xmort1j",
  "key13": "ySDRK4NcDTCawaBrdr4W4nwTkQ6U9KBDRFrw3GRG5E2brVWLLUP3d2NFgyX1fqnSJSAa1LkTaXxUeKxzzc5wUiH",
  "key14": "5Tzmy8Yc7GfEn38yw3ZqLGc7nY8U5zJLVDkaedzau7yiS6PV7gHmhUPfGMyiaoZyvcMbw1zE6a8fYvFK641wZzC7",
  "key15": "3qsCgjafXHerYUY4DJpp9W62xhtL43wzBc3Qyjt6ifWqZcEWqptPHdWpSRKCEdRiwPfbN9jQweLNGLrJ73W8kae4",
  "key16": "5dzXKzfWZyXPgwVWY7sX54Q1Q1T4GocAWTyKwPG1BuQXbUzHQJbUiPfxunrzs6Mzf7PZbdWDrqzNxDDk6Ne8ft4h",
  "key17": "XmdM7c4wRGiEqHb2M6Pqx1uzAwVn92rjL436Qx9sBpsS9g9h96ZPu4ynMPa3rbsTbqdCPY6mthk2PnMDcL2yJ38",
  "key18": "3eVyYwyuedJWzb6fSmH3mKNwrHQNKRzoRGtkec4kygyPLAR16V7d6ddoFWQaKjUgCDi76brHidCdeirD88M9gcSw",
  "key19": "Z2qy9Lj7T5fyC8K9Z6jYs375YWb2TLoiSPshEs1S4rBkjLk58x5g8W5JZhyJ3GKTMxbZ6Nfgy3L2yDxzbANTrGr",
  "key20": "2JAakSSrKXepgEcnUbGWeDRYmuSGRVASNAypy9YRX6SZhNQWGiH9VYBrKyQQEQMF2M4tDbBMgFbdzkcgWmk6dKJr",
  "key21": "4HFyCAbHeVtrbGcBmXwvX6cHqxKzBZCqTngQLbsQZ3egbszJgYf6EXNApSSQ8YavCVK6GR6NNmjRbWKrJodAbvnd",
  "key22": "5US5s3kA2CWLFEuTYtpbKVV4yLrTkJo65DUmLepkm4TTqVnV9GKbXGDkLut332WNWzVsywyT9KZC5vpn6ycifqth",
  "key23": "3AX1N8Bk4uLQHXccaSnXKyo9dK6nP82VfegbLTU4wS8KC8dJVHXfgZCQgaTg86tn4wTkh2Nt9A7VhT7iekZYvWX2",
  "key24": "4RnqyWJ5k8bv2To9T6xRq7BQgHQHgPYzfv819VQ3Xs1HbyrGfWfVJwZaMewWmBxjVd6xACzZzuQSVWJxmTAXCAXK",
  "key25": "2rhvh9j1Rn2XZ95VRsR6gRfeHhEaKVtzCQQGpG62DMcd2Ctum8XVxVoxnyQErHVASuzrrQc2n3P2okMtFGYZ1CKT",
  "key26": "4mzsP9pRX5NFHEXLbmqtyDiZgmjywKUCBw4vXcg8RZE6dtV5HWo2JGrTnoVj3s1yHM3RXRwDnP1tt9vvhL6E9qc9",
  "key27": "nt8y5WzEw7oNtLYsixpVP4iLPcC6PH2SPZ1zTUdVyyvujkpuuqe1xmBifT9WWS37i6H5Jnu3G1bTaQJ8hEthKyZ",
  "key28": "5BBfQpd6kbaLQW2ki2BeLLeGjWfFb7o4hQLQDuypmYQtyVY8zxqicEpwC5Jv9oJwayLzzAA7hw7TEqpdvxAfg7Ze",
  "key29": "2T3DrRba7zRg2XQbz6bcmnPPCbfmPoaWneuNsJtW6WSLR8TYjeKj3QzVUXNFFi7Q9WdxQv1DmPh455kKiDkft4Lg",
  "key30": "2TBjB1xmRi5nE9niNX5myWpa74TxazTByvtWNEXF5Hb4Zr3hN4WJgh5UKticujFiEgVs3J5XY6QZnC9sEPtpaa5c",
  "key31": "5D8tRP4W1khjXG2sTECQpmaVqCiEinibL9iYtCeECUWAhsTgcUNzwX9LpkTwFGdjc23bHzxFcP5Viy6rk9MCH2wo",
  "key32": "4BkbsBJbnrjEhfTHPMcShzMcC1SjbQJSgjxkBd3ao1SkzztGjwtnZ2hrs3xekkTMuNPrRvs3bPrbfSpBcpLvKC9m",
  "key33": "3kT9YrvhdeEQ99iBiiXqrB28FnRBWaNJaofLGrSkoWXvyYkURGKH7yYRszUZMFS5TXhUWmpxDRZSHLnqwXpWKT1k",
  "key34": "TPhhDm8U7Yj8K3k3bRp3EiMFHfRNRkmceTzQEDcpZpb7wAEJC2mACiyKbBGTF9RH4E3ro4qJxAs1gBPWG8Ux3rk",
  "key35": "4rEHqu5ZX6mm2vGHAUfjiiHXJuSiEJQZtsSDwL2jdUB58Y46odUkKP7Aq7RtW2BRa44A1drtazbkTPaXKYLyb79Z",
  "key36": "4Lp6QA8K5KsAF1XjRzgyDAwXXD8US8trNnxjSNNdppu7TmCn8MVUfufsNbhoggD1owNFuT4iUXKDHktZ6rynJoiv",
  "key37": "5Q8tPCJpZSAVzR3zeeqFN13bLRN5NMCt1vAkDrHnH3pF7LnhDrdcsyGVUSJ87xgqWPmfg1ez6zKqia66Jx9XHEYV"
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
