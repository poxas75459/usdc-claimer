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
    "4baacyHM256w1hUDvaZfTWqhacbnMSrLnhQN2xqSbKn13hbHTbE3G1gFvy3LD1bhsAeQkFs4c9ZmeCDWRP39GFtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pqQnkS4bpHqJQM8jDuavmvs6QVZzpB5fLMnJCp1b6CEA1BpnweYj3evFaXVM8P2jeQR3J7vCmtAhcD3qAo2euV",
  "key1": "3CozV6MsD45YaL9hcepdxZqZVKPfyVvMDzBRuQgSzVWVzPUwFtNMdvg4p5qK6g9ToxPXCbJtm2PLetDjF9UWfxDy",
  "key2": "untesiW7MaSt21Na6dLT9MRZ5gNCkZ1nGoUq9V3h6NYw6otYvJyUemWpEyRNYWR637CiZ5UrmDLvHkqPZSaWDQn",
  "key3": "2rRknF8DwkuznTSTEHZCBx8XFteLYLWvYLEnY5ERjUoKvHPMchNquZ7xgEv6C3PK5V6YP3QopGkJK3SPGzVRnme8",
  "key4": "5iw28W2NxCTmLcsMeetCMaNCCc6n1jLcYVtV5i2aYZoh6VXWX8ePR7KWGgXrWTCe6TsTi9HbyFmK3U9kKJTYyPxA",
  "key5": "3651tJPi3jXBzPtwA2DdQtUDgdRfvYNHViAs2QgHoppr31mooG2Fzj3zUvXr6SF3WiQZWeyE5TJxWCWbNz88bpkf",
  "key6": "3JjwkwWA1q263N9AQQy7Rb5vabjNPJke6BbygNNZ3fsCcXnftdWhnGEZxmp43bzbpZzBmU2RRNZNgMjS3X1wTj3B",
  "key7": "2EmD5wcAk6gF27gwe2tpPKP7m2HFL2e3YAdgvZqkY6sN3gP7eoSmrscM5oLE6yWS3SWJMeweeTKw2pD5UaK8ZE7f",
  "key8": "4Ugwvbit8VoEj7W5LdgYU7ZZwYeYSzpoGrjJiB8xAeVCxyCtVz9exLuSWdNS9NW5LZq9ALjYFNDiabo2fnL1Gs9f",
  "key9": "2u5XyFSwgzFFN5c4xUtykqsB3zJtHpYZmXe4CUXt3gvWZrbgSuQ1j9hEcKui1RaR65Y39v2N2T19NwTrULFUwuT5",
  "key10": "jsZzu6g4npkM4k6rBnAoEyHfAj72ycAm1LEKceHpfAidquNNTuKNDJa9hqkF6rUyuaorVnBDsgZYnUetTXBe62W",
  "key11": "2JmkSTXANo9YGiGCMBPSKSEMxw8ncKmish5zTkDNEYQtSgQjGmuV61zsNXZNUoZxpBVmz7MT1D6Pburuyz7pkFVS",
  "key12": "4toPMZG97diibVxRAde43Y2X9xMgmxMZQ6FVhhmHnHFgYWCKX73s3SM8HkuqXa8JFyTYbkw58g51RhMGKaEysVrw",
  "key13": "3GppzDLXx6AaCZocv41SFh4DmxenykzYU5Fey7n2JTSAg3cU5SjAs98YZ1gSUghJYcvhJCR9cH46wDWGy7Hv3SXR",
  "key14": "2oUkuvYb4Wh41SxwPifrkzRMHfjRm3oCXniFskdZAhvfNGpgerFpuxdJMQJXEEBekegbEF5eR7qfTYLxM3Ld5WQT",
  "key15": "XYz6td6FwhwpjbwXLYqwPeASkp77xGFHsSfTAuko4eSD3u9KpLg2F6AHMyotA2Xyms71M56cpjFqdhUJ4KCidC9",
  "key16": "xESqDXEmFCVxG65YJAejEQz6ncPK5E8VgFH8yoATAdwk7V1V2dcps5z6PsQoWmK5M3xaUgyNXPwtu8sXKgZv9bA",
  "key17": "2cjUpoJQTrDPW4CCLjonB8vLe9orKYwFN8Bioih6ZQEyJKqWuVTZqrcYZSprLcFQu53UQ9skNS2TSqKBxAdcbZbM",
  "key18": "25ch8PHDi7mvQKVAJ92eLguvsajHCRbqW52Lqx16DEqjy2tyA3K94zWmLXLoWPFTPeA5KMoUc4ska3ADpGU7mctf",
  "key19": "4vjEFkv9DaRicVNqD6QJ43LdTttL8vXa3P2kEfzVrDCgUbJzksaDxvhJyuDuyxJb3uAULGZQBvE25QZYbDvupWo4",
  "key20": "2wQWeJEqP3KQjcnzT7hvDrxpe9aRpftb7KHSsJaDh2GnxvSWV2hXrzGxWtryYgyWANq7xnzu5HYniqSVPRg2y1uT",
  "key21": "2xtTDHbxGdUsnaxpCo57PrTCwwMH2EzJg9Ro8Qp6MhrGWCxz1xmAgXqk6MpH3DKdRxe36VWP9C41aUXkrHpGMYib",
  "key22": "Ho2mkkmYZjkN4wfjGM9sX8JZH26umoY8CnbDcKhBrvQF6GrbH3Cyx3vq6x42ZdSxgwP4o3gsJRoPstrUjDjNPiF",
  "key23": "3BmEhqwfN3Xw68Z7yGLGtHPj3MLyhRP8a3A8px5GyktK3jzaXXQE5SQqz6f37r4nE4ceVYx242HoZeseaJZwq3sh",
  "key24": "47xjfKruWZKhPxqi9hsb53pQdP9UUT84HqyYqRW3GeZ8Ma8f6WBUnw3L5Lzp9un8Eumv8uQHV6kPiv41UVq7wPSv"
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
