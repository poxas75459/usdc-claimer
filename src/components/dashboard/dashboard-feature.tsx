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
    "4PiSz1nxvD9o65RpWk5fqKV81kLyNxRyqZG5AuDKEDSSF6jqLgcBUkMj7f5j5mMLuLCHiDgmDzMYtWKTtd7a2qqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QFW1jzFx2A7GbiNYQ1unidf5ttzi9qDFgGBsY2FetnqSaiLQjmdpAsKVovP9SSDdJ52626JtkXjtpvfBWJxK3kP",
  "key1": "4EeMLqnMs1cvgAigm8RmNtw74tNohc94a4F5SvBCCQTV2eX96uqVQ9fWViAYMHjVQrXfannHx7gse3ffcetq13Fe",
  "key2": "4Wbk4F99Jd5gcPYuMg2Beyywp5c1SQxdWR8AKF3odoGZDcqc1QJGvgVr9t559tAYA8SZqhXNDVFkpL3iDCeEHDUL",
  "key3": "5vMmY81RLC457QuzU16psRrPiMK1QAHHeYH3JVB3vPPg3nRET1NpeywJC8ESGg7tG9PjnAZcU7wTURrqAaS9cXN6",
  "key4": "h6azWjQ4tHE7uyoBfufkmoSJRVLo4hxHvKmyGczsr9LJxRUwkYB5wTqw2ghTaoLq14t7LmsFoBtfLVQaMVjt1pH",
  "key5": "21VVp1YRTVwnd3Wstu4TBeGb4xf4PaAk8gU8z12mPe2CrFJTLgjvrrSR9YQoMWjgxnGvDqftpr3YvtfP4YxrMeix",
  "key6": "5DHpSQjPPeFwtcLxsbC4kQSpyPR5rZVJa5nqYKuYUEBGnDtQ2i4k9EWWsmKHGLhhzm4UgN47SiKYee8NtBKCQakv",
  "key7": "36xrim4WV2PRJeBxJTHmexX3e6BjBFBPn8u5qZVdwjFp7aeKKoE2hGg7HYPmoWnxYygsBFZ1TrtXpn7ByhQ8XobF",
  "key8": "4qBm8G9etxV8ErMpV3Fy7688wrHMX5r1R3PSgVSDTQYLBTEKdKJw4iWFEi8j8W8E4VWsxhZ7N9raG1Kos5q7Kwqz",
  "key9": "zqpRUeAZ1FtcGg97eu4s7yZCRgyMbgJuVicvZ1VH5v76pfwnB5KXGuc2V2qbq1EqtmVgJ3SvyWZXQ4M77zB6QCx",
  "key10": "VQYRka1ivWdZGekjmpPQuosnZfEGyBobfPC2XiunKjA5pu1V5Ho6i34UaQoyqYSmKmABrcRkE6fXBWrRfWXR2A1",
  "key11": "5gh8h4PSCGwnZTANXScLt5QsFQfkbBnVw7kVLzqhMFPWKDgRfSqEwm5DqzHfwcXo7LWtrNiruEU9cyd45fHjKQif",
  "key12": "638qTKiZ6e458e8yKi2Ts8Y8t4HAao6qDeLMXTikTU3xpwiCXKcmUw6dXUgSvqWPPN3fTokxTjSUQ7xF8cNGCcJY",
  "key13": "5DbPPyKNZD5TjpSqtjFrqmHPQCMN2KNYgBTy5LqLErXH3iYCLoyufsgqjjntk1s5fNouDDXHDUVo3nuLRrDwP7jm",
  "key14": "38UUeLb9b4jBpXx5a8qX1w71m1ZMcsqgDkz45ZambBipvf3TYdEn9DgNsj7A6amgoMqJCPnzxC1CxERyYG9pD4YK",
  "key15": "3iPmURkQ6zQKjJhK7ohwdgHL8kSqZQhPF33Ch7TbiCPsoaKd3H7MmdMgUzPx9YgYPtSTQ5rRbwN3YEn2h8Dvoa67",
  "key16": "4TKD1cSGJWwdZUwHYq7iwRjaQ3wWL8gEwK3jgGkJFpGdzthG6dpXDRUho9UMfjxKkRVPk7EQrwwzkMy32pzA7L5r",
  "key17": "5BET374upCCiR3Fw2mx856mJeYJrZpzjRb6scU6NDYNsyaYewKZMqQQrYTf7kmHxwMK7qEFdFyntYusYPXEy53RA",
  "key18": "33vjBJDCVZb4h7kjWbz2wiau4pXmrKi3qrK9vFJ5TC5yZKbyfLWYQqGE3zDpGyg331mjMRfqDG6RmhWZ74LubJ9",
  "key19": "3mnP4YSLm4sqj2gttB3ZreLiAv6WiNrT7NdGWY1i84zHRFGsWbsAL14NuZL1X8C3LnxypkL48TmF8zgKeZP1BwZn",
  "key20": "2SLzpfJg2iXgX2Logr2hES8iRMXzm7RyvduBY4NVqKWi3Ywje2tTfWzJkJp4YRUMTY7UEknoodLgc1FZQaTY9Yet",
  "key21": "4cobNjz21gCZtwYLHVdpY4hBxhVcpsUWB6rG9p7ZUdSeDhkgSWDzsSFcfHEuavu6t2HYQg6Js6pcfQpFTQTXde6b",
  "key22": "49hFPfPpH4GCpKXcSro4v3BKrZZU2XsY6gz32C4U4eQpu9J9uEZCUPVR1pt6UTcpth61V6HLNHU8amcp5bhuNyxY",
  "key23": "2nGiS27abyKwbyonKb6Yoqb9bmK6xk7yMJG3dNAXcQaWw3jv3gPE4ogULsTvwzecjZzfHfGVtnDTtzGDKZp3jx6j",
  "key24": "2cYazXmSet8WBYGHhLvLLp7qTaCQbbv9bcDCKgbh3EFRcabKecGRZSkPow21skWZWRCAtCbxZpLjyfj76w1tPSXo"
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
