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
    "2vGmp74sqsTfzr19p9QavPCKcVR94uJNw5XBQYhvMvrYGnhc5JgQfBKJ1pWBSqSDtCkrHiHRZ2dbwwCPtZGwtvku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PHYoKbJpEVnWu3HwdwEeqb1NeWgrNKzDskGfemtpw54BqkRtEjJDD9BDUQ86KChUkMA3HL7izC8pqn2Nz1imWu4",
  "key1": "43RYaW5HZosPPRfYuGJTDN8ntFDGnULETQirouDEesMAJhtCnocDQcD75Bk1gqW4VRHjyp8cHSrzoXBx7Z2H8TcR",
  "key2": "cGBcmEphNRWcJMUEumTW2qFVcUyyHdTnePAT8z6b8H2whYZShKSzmxbJfv3PWuHQSBkusfVrEMu9odEVg4PDgQf",
  "key3": "53nAPwySM38dh2LiA8sD6nDxrfcQsk7cHBGmHMoGahCKHRtJWNCbd7WyEy7R9FZ72FDE5vCLPtCVtnRmBkUaq2uk",
  "key4": "3yuMf3PaNxvjReDD47TGAPtyThsF2ir13zXeF23sQVkVmnBnit7aaLpShHQrTLx17kCdmf3u9PaXErnRvpjWS61b",
  "key5": "kZvhqX4LcRM72vDVXcVPaWyBGV7G2aXvCYd2BxVcPVgnQQjMuCSpENgYi1NVbXKtxBJGePkf1hRoNBcvxmr6GWH",
  "key6": "w5xJmCRM3eFDCbDd9PMLJdNz5KinzSGwGmWq5ENWACWuoEj8SqfkQdFPNEj4cFLzdw7UfQNqCBJHgnQ59wyF43c",
  "key7": "4gUg2ssejE6DEzwKrSrv2zuuWNuUL5dMtRA7TKJixuHtNBHuowXfjJNzMamkxd78pqR4m4uc4WmPRv4w8MeqN3q5",
  "key8": "3Zgukw9WFuRhj5AKuaZZMYNhRvtVDxx45NRYSGohnADc2Ho21vVuByMdqZzSyryTgpUk3jpnrYtdgKDj7tJKpSJm",
  "key9": "5f1TFxX8KV1tobYjqpcijSQLre17oLoW9u1KVm93FGy7PttZe1NJwP1iY1dbV4ozQPW6UHCzfYUiTZKC4cd3FjyV",
  "key10": "43Ewb8Tatr52cZ4XRF26GUsfBxW2ZMLjc1H2n15w1rdtK3GKXMopwWhc64zomdnpvJjF33ukrmNRStnWmdzJXBPJ",
  "key11": "2toRaLSaygCQgV2GiYodB645KJnD6geuaK6oPAz4UM4qhEHKTcQjANh4bSLe81wNUrbiSLbercJJgvXFYxN6fMb1",
  "key12": "43Wg959t7xfLuB3VcbSVfFdEH1Qew8JweMUSpyHLhFzzPdVjZ1YDG2G8JeRbaL2NBGwFM4KXHrLjE37CKBm8efR7",
  "key13": "3kmijiAc49Y28KTFdUBMDwijPgaoWMF3WNcorvB5xwqv23RLttm4bgts88MU7EgJrqGQVNcNB7oH5Ko4DVTwXVsu",
  "key14": "rYgcbpgrMrQ3BgLTRDjXGkh6Bk1EwenGaozLVJqNpQv9QHHqi4UnQgtLQBbz8EsriLAgVeVn1f9KK3Rct2iLQi6",
  "key15": "4WtCQBHgg8d1FwCZBGq9Qa3CWkN3PDSrs5wRNSKWcX8H4ZF7Wy8L1SPYVr9BFPhWKvkc5Fgq2zDgsQyraMF4Dqdp",
  "key16": "49TqKV7RbGiDFESMfHppsu7sTqTU3Z28ZEbt4oPxZPjsKKMPxUUNnf9huVMU2d2fgmvy9YUrEuELeabjkMAn7fqw",
  "key17": "4YvYTADdMCXRqUoQVDTdRTtscQHnKPoJikmpTYSFcC8Du9CWNzWFjusxx7Az6jPLRfSDm9Br2fhBrKVASCBYsmNA",
  "key18": "28hj6DS5734PG2Lf4S2KCK1g5qLFTHuenkxG2hRwezPC5GkLqTJW7dPwPi8Utoh1mSQ2hC7vznuWuchK2vGsg7Ps",
  "key19": "4CuBwT5SR7zzxEEggz2y862Mkeo9jWEssKiX2f6FfVvyMNkBSdkiTWsrUWKZfxZrkTtrKB5Vcb74sZenqsctAW5K",
  "key20": "3QasqTtYu7Ejvreo9p7YS393KMo7uXYpUXPrnawU8qe54oTK8KnZLYinihzNwByuVf2T4sDf7NMDeiXqP8iabjr6",
  "key21": "3LxA5eQTPQvsqg4NYomoHb3vgySepgUALAQaxBec4KcNrMDBs55DmhKCM3isJm1hMRnurVT6Hz9Q5tdExBHSzEYU",
  "key22": "4zfUVfJChH4oMz3zrPVW9Z4WhMNnAh3cECHKNBz1yHJMT964kyDYu6D95b3aocADX9Bcvap4VdLJQahkdSipk65h",
  "key23": "23T4KbKLpJYikvsGwVS4VMShXfm2jYaLnY3bPTYUQo3WpVb6xPm1kaVnqSKZWKZvkPz9kMwNyAkzHRwFoahWdysb",
  "key24": "GFMVhdwrE3cfN3EJ49mQwxN1Lx5fBszsukKk9eLMai4NqpxG2YzHtoAXr6LVrTaWyoxdvzRzN5rELuF28yRVjB7",
  "key25": "2YoauGyMgcEXpwYcTcXujVGVct1XimXsA9kXfdSJfMcV2S8E658u5jUMHzCTjDEq2UNNwcMrU7PvgmSMSn5c938g",
  "key26": "f2vi9SqgD1XX4j6HU4SJRBhv3BvVgcYmW6dHfPyZnTDrA2cyfDJmmtMKT8vopofd7oceWRk4bhLxKNcyTr6but3",
  "key27": "3x2KsRArvD78hGuhEuQZLwBSYDc1Rd5XGqRt7s9eLZEkQ7PMXCY4eKsK8rHGPjFLxwBCs6fNZXXy7aEMo9bg3LM7",
  "key28": "2LCNb6SSUDkB1kNS6sKC2uQmxc124pbqzaLG341Dy5Fmf6HV2mJZvxigpQUX2BCk2CxhYCBB5RaiJ8BWVhEjy3et",
  "key29": "5KwcbFXNDwRuX7kEWUsWeFAwFvrJmXF6MAwLVxukj3YsynMyu9PgwewCGkwYTfAehbX8KNm5yi4re7bCAEmyg5y"
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
