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
    "3kWcXfqYMwByTLrvPzkb4gyou6uXo7EsdwfXqrdHeAKGUkRGydpdpNtAxKSJLdHNCeCnBjpwfZTvxnpkbwHFi6Xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v9t2qy9Wr79cpQMWp763ktfjrb7mVVJnwAgjN61ziQZUxaxp3Gw3ZfqmgaxG3Jbe93BSaqD9DyQ8XAxBThfAa1a",
  "key1": "4AJohxrzfTcMxsZWUzubHXVifqwLWv34TrLxuBqCT3pzoeVW31YkV2riDKcqQPDcZE7Ck6YCnyNV5Uidct7RdKPs",
  "key2": "4RfFW8Nh2UDbaUwdXV2UU6co6vqVcjdA5Qe65ZZu6b8cXGjVnx5odrv5NpNfLjVoXjJJfc1bunimjPfsHEfZ5ZjU",
  "key3": "26RXFKzAbpBvnSdFehgmtr1BSkSTUBY3Jp8Q4LSwc5AEcbBEbuqy4iRUGv3h16imTM57XEqVRmjZnSNnCsBgg6rH",
  "key4": "61Eph1h2pXKhNAnVp2NCyhXtddfge3XDydcAzXuoMjgDMM88d5qZcA5ip82wPSjmwye6BEkwEBtux8ErG86kSyTk",
  "key5": "xWGMTAnx51HjEh5g1HiGUTP81MJqZKPR5NfM6qu6GfVS4az9FTe6s5gCou5nJHeKAQ5d97xeTfeEZQqJJuZhj9d",
  "key6": "3Yx2kQ1mo8xN2Q5a6NiiqXV8A7Qp2ARThXj69XbHQTwTgrYaFXDBjdqjEp21bcrrWV6jnQVRwPy49FW4uWxwA7j2",
  "key7": "wuWdo6224LWnoBJwL81NFTcPZUjkDh9vBdTPK5QsaegyCVGSvGwUQzELPzGikHfYASNK2jE3eAgukNUKKFKkApc",
  "key8": "4hxdZgN2mH2KUi6WFDExeCkriKzagrman35WXHgiaToXoBSSLHFkWVJtTc9NYQ6wTsMVyA2DUabCJAzDU2tQRur3",
  "key9": "41NDvKQJ51zQV2vH4w2rHTfbuNgSVuVbKbzD8M3GFNv53agrAqZhAcPZuyPsKwNmGeGfhfqaKmhXVK5zVC8Z3p8m",
  "key10": "4yt66ryzbLoLRrsruL6EJkQZJNagSo7ymRwgbqHJKRr1dfWmwKke563bd8j1NsZTrFRz86cro7tPN87SqD2oUq7o",
  "key11": "4of8TvxqVFUaGDRdp6TPLwAU9DwAMRzLX1rBmALEFJG3gQSzUh3qMtsAEs3UMumf9ZFfctUPgwDAv1TTBfkWRD1P",
  "key12": "2AX9eBLjw2ThXvr3eU9EYCusoXWoJL17Y8rGFYz3tK8VffyYyefb6tNquNu6431vFasW8EDoeBm4js6m3TrbUoix",
  "key13": "EMm6ehV7BofLtwA8SpFRgUvD7jjVsrYEZcK5bW89EkqDNUm3JU34cfDfuUnAoCxKiUPfH9S9HmyVHK7EtZsDUKU",
  "key14": "2HpVLpm3KLpJd9cR7ezZdv8VufZmrrC1FXJc3u6gWy1ZXvWYkRV2aA2fwSZnn6a35faQ4RccCaqayvNNVgMNeHAn",
  "key15": "xPMxG63BqczHThDCcH7eKp9JdLKot8U6b1HSKNrUQgZQHjKdeqpF8QsyA12Z1uBtwsPAhSSELpkEJpaxUQhHhBT",
  "key16": "2LjxyrjTAsxAZepypTdtU1VHs9b35W7Kp9jmirQZXhzq4uQ28ZLknKWqd6kRCSCpKkZHUr7ukTK1mt5Wp7bXPNBv",
  "key17": "3pXvfpUHxpBD5Grmh8N7abfmhy3Xi7qbPV9YC7Y1sxQPFsgr2sKSST7wQ7saL8RLUQWusBj1RiB54cowcNNEWMDd",
  "key18": "5umZFZaj1Jgh7y8B9tygJQoaDim6ewq3LPw3gggNypWSxRMEMydF9j2UnEoBZzeQTqQFjuYFHCY3RYGN1H5JNBHL",
  "key19": "HBSPRfttYm4aYvdk35S9gPQteccX9qEKtcawE4AcCGi4ANMkKHew4oAZ4gNAhdrj5quAtGKKERnXSp6md8VK6Tr",
  "key20": "2F3gjog5ujGPZ5tjzyroCBn3CSPhvRMTjcsqT79Kb96FJn8zM6tY1cUksyUD2YEQzLLWrVLMfJWK8kCm2dxiqmGM",
  "key21": "3MDaX9yfW5hV7oFAWR38Qug28YhhzoY2fpKCkVVDBaaXhg6bySqB9jRvbyExNBWSno9wfd7mAJxqE7SDEi6GtvCm",
  "key22": "27dAfJm2abR5fqNGp58iszTYWCbENV6J2XMJWnVtcymZaCQgiaSZVm7V5G4VcRT7YQ38iLaXACuvGA6j1n1x9xUe",
  "key23": "3isfLiYRW2AB7r3oUJhy2NKBWMZtdYYm3M5L5KgiNC3LkpDQYtd6p2Q1NHyXN2cfmotdPZ4hL5CCpSJoA6Wxg5Ch",
  "key24": "3N9Qhy5EU1kd7nKWC13WS1ZNqSraFTjyNovrN1gZMVXy678jEFjrV7J9qcDpdhnChadnSkJiyYnLhFd2vcyPLNv6"
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
