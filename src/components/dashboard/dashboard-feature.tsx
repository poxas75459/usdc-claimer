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
    "3VJimf5BC6tHFUqGp16vxKYCqMEmTUBR1ZwmS7VZ95o3om7NQ2qw1kU84FwmSy9hiy1zxFo5Fy7dFCwAzDyyWoGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5swBnMgNK6ybpxtZteA1be2JSJfPT6ND9dJ4HHXsfqwDTDYmtTivhwe4vKPPjeM9eDGYReTTgj2vqQ7SiHyhK4GA",
  "key1": "463JWV4Du9kKrfkJaYfATPgaSgDUy7bt4Y1ZgVaKCuMwp81pDpMxEVY3jb3LGE3RHxo7c9sozWqqurMBJcCuhxVt",
  "key2": "yy2ZLYYKnRkWqd2x8n2Av18TxZnTAJaGZ9vBZ5x3zSsSjSkEnEP7wFSxw9Ky5JE4Ymrqb6MtY2XowzCgm9pyxpQ",
  "key3": "54K3jf57SySb7niu2cTvPewF1FuNsg4Peyg4JbG1qQ3P9rwsLGcUV9qYXkqRzCuj5TpCE5Gbe9aUoHUks6hShcwF",
  "key4": "647r129UtwFtZQFrofFB7RX5w3XDpunb1X2Hqd87TzqLCQHJd7MKyxTe4vzsPHbVXWKsmKbDWezm3XFoRtK1noF4",
  "key5": "2GpfFE3q3zFx6jtsPmSHxUqBSxjVGzgWuU5X8zc1setXwVxyaW3B2JFpjbWpGRZn63TzhJV23QVDiR7GjnWW4BgQ",
  "key6": "2yMoaL9kVAFBB5aH3rC69AjzQW4RMA2qYtGXNekvAuPuvjN1jcF9GAQe685dKrcXbToUa7TgjonMNztwxv3MgzAS",
  "key7": "ChhmQc58pubXuX9PwB4kRiZuk5ZvC1fgNtSPH6J3bYKxH3XRR1EigTB9hk18N3mNS4KVUyTsH6w8fMcQCZQjX2z",
  "key8": "3MFnF7FjFLz3JMxYDnDR8ptciVSEJxnLLSj4VWhUiL3QCmwWbr9LjkieBVWWDKz6zejuABnEKzgg4n2shCBsahBb",
  "key9": "49C8V4ZzqYLSEygCwq5ysR1DkgFknb8E1WgC42nWbtuYAYHfG5poHqAcxnuFnJBsiMMJApX4jSXtCNfnsJv4KJHG",
  "key10": "rUxNoTiBDs8jF6jkbLoKrYs8wvjZE2aoWomm2Vq6grCeZP1ZH9vPHQarUAAJNkedGVuB2avLUFVmN41z27CjpvK",
  "key11": "4kh5V1ZinTGccpqVff2KkDFRp6UTytQGJ3ikHdJXinscm9cwts6MZKEf3PYJG6rc3UU5AFvvJbC5wf5gaT6DLE4i",
  "key12": "2NUFcs9qRfepHjmsPSCfjeJBL7xv7LEDiSnVWP7CLs6UYghPjeW8Qp4jrEBjRtQuWqYq14B2etfwjrRBLaLiCJTo",
  "key13": "5M4H1DXCBfxYqyqYx6q3yPsdPnkqCHb9H8bTvW7scn4HjXEQ12CXGQZXT5nzyFbzhjYyuannpC1WyYfqdEAjhfKd",
  "key14": "4P2SJXLLFJzuHhUMzGwsKocLNSs2LjHaYCqMSnp2btdDkgUELJ8w1nxHqZXW3kGeYaYiLsE9zUbGwAQbBGF883kn",
  "key15": "3Ej7QTifkNPAyj8MNXGCXR9c12x313Kbqw1ME5vv2GwV3jsSgCLbV4SZPXyeavAndxH4rYCZwpVrLyNWKu8Rj4F5",
  "key16": "2rx1mNSzc7ACsRehgRDfwdKVMurjWnTUcHjzoRVupFnzZEVEEzpPeKtvH3kM86ZxXh5jVCmxkosz91TCSGdjHECE",
  "key17": "5QcURDbCZkpwfK3syXeKwpQv3Aj3uxCLMK6N25oKGUwXpwLcwG5GB6HkbsgyzaUYjHjWgrZuR9KayCerN3z4afWk",
  "key18": "2JggWhfMkSbYR2kH5cP5fSxGa5GAwK8DTGjoFSFguMJvX5QXbcVu52UsQgZp7HQZKEAY5dBwTR29fDHpKeq9H6Za",
  "key19": "4JNBuTvLp1egFQcrUhJRXi4nXVAFtarr3qGw9nBwvNsAWGjnW6t2St3WsWRrRwxAUko3wtjNmpHSUJQoir4soJFS",
  "key20": "5t3Jrzj8Rzz9xTHHrbMQ7iUUF2SPFpu3SH5ZE44zYJHA5ujj5oiu3Mr1anxGkuzADoERaNKFDGPzAYfHqJZy7KPW",
  "key21": "A8Ty9EMmonjiwhJwTJSsT2GiDcPVTqPS74b9MhXuWCnY5z5SbpLHjpqGfscVQWrJoF2aLz2pstScmg14EivpX2V",
  "key22": "p6TiqSxVCpgV7LYGvrxX4ZkvwoLoKv1Pm1cB7Wc9wrFNvjwTPZzuE9Kx9QgswAKAos1xvqSg7oU5AiHWbWnNSmR",
  "key23": "5AomgSoyvi1XdMJpXrKRPANgEzads2CY3hoDLXVFYefKi1WUvkHdeGRkiBRVmAzdhfdQE3xWFhooCQZLSkR7P8Lp",
  "key24": "xDCoxhfhGcBdPVR9BRRLWQsJjJXvsNvXTFaEjwNobkowkQC6KcGv87M2PDzef1X8GrnGP25M9fVy9bGshRWbJTo",
  "key25": "NBN6PnftQmABbju21NJwuPBqk18gUE35a1GN4GmK8Gcc3Xz36hU3cXvaVJcE2C9EY1ChU8U4gTwV8xnpLYePsBZ",
  "key26": "4Wk5iSrLBunvyMpwoNbsd66XwD3kimf11fQkaRtvQsNoRcXfTTMB8L2vVXNo3Y1y6ouMFZx1VgH9a7FAw1SJCBfa",
  "key27": "5SEQnnjN56CECy1NYUXn1AreeLzhYYRK2EEnWmEpPh4G5XCAN5e4aN8FdPg8HwVqe9bjC6gtt2DSG7xmXLuKcC4h",
  "key28": "3KGhgFUMCA9MEsrKZ5rpKWnpCJuE47sRMx6X1BhZsxmpZkGWVVRaizsVVrrfgwwrXJpLGr2o5UfhejcPL8YssPFD",
  "key29": "2hNTTgA3sKyeHgu1zQ8gN9xN5989qENdmeNNzdRtrpSjUurtJQaci5uMvdtEbfvGWm27svfaEHDK1dU2vDJhFdzG",
  "key30": "4HbwTN2P7kvb513uU46Xsm74ckykefzdKuhzSUR7aHxf9KmZXxpmKk1HKQMEV8zgKF7egWXPYRM5ZKUBtczXWjjf",
  "key31": "4Nz6fWDaYFofdVvmwWFvbPcZrreNRg4kSAbvqQSCSs7W1wSee4ngxpWybwaC51dJL9xkfMaoQdhMTtv8EtxqZBrf",
  "key32": "Lu4XhpTvmdggSYjJDHwbW6kLm2uidUemcYUiWTHpyzUjM4hLu499gJ1arJT8sw8R9vjz4medvCBpFXvfZXmKh8n",
  "key33": "4wHqxQ9MYkFz2MV8xK4PXbBADqHQMJx8YoeSeHCSuXUguBWYRyKWfpNDNARuGqj4wUYoGs7GeXdXsQeSDX7bUdhD",
  "key34": "7doDfCdEDwCgDqMGQ28ijXphEKccFz7qQQv3jH8zWrFUvA87ZdGqAPLc1gS2Rg3ZaWT9L6WfqaamUKevvnsqTZN",
  "key35": "3UWubwDQ7yzKvUEL9e56saJGJcVEDBqW1ebxMu4iz3nWffCh38pqXGUkYNNaCpiZsRjRTSkWJ9SKuhTEMjgQb7p6",
  "key36": "4FpREZeu68gnnWMXY19m4mixbKUM6Djc7DyHbxYrxB5chCzWeSDW7EgzD47J9CLdzAcWEB7zPP94bVM89ytvaZuk",
  "key37": "3j7GTZ13zm9rpG4t3qYo8uvWuNJYHSS6NWtaYonhrtwLZNKRqz4isX61dA8NoJp17wZEWZ7DUKd7CzY56J3WLsPh",
  "key38": "356JsV4y56LFRiRXKHU37PQU93K4SFu9MYVphAN6zSSyiAVMCPgiuVTyueu7bvv2W32ChJ5jHJzxXdLqtuBT6YbE",
  "key39": "5cpaSWKvYK5VBC6KCY3eyr9fQAZs83egRLAzfDBT8M3vv62bJaPzJde5Lq3kvZ5PDt2w32wxxhYFbvZkcgPSJhSv",
  "key40": "2Wjs8YMfj1MLWkfwSANfTiJrA5AWZbebQQUMzFpC914r2uHKtvZfThX6mzpxdotGdKy4Z9kJUMPywXHiNWr1X8cR"
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
