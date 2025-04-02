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
    "2anYyZGgTuV7JmPAjVtpACymNGZZTCPXxydVbdRjeMnwCAs36j3zwxZkKPb7VxEgMEiBuBFcqBAoRQY2QVrTZePX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kp1EYJuz6yLKzepi1nAf2S84knMuR3WoAwNxGUTw8HBTL7ECjVoDFihkk4woie18Jb944QFSgLeT86SNd5jec3J",
  "key1": "52MepMeDe8x3CvbkechJiGDBzF2QSrxYTDMG6UmBzn7RjFQEga79L6PNiAd9SKYSom1WChFPXZMZYm6y6BNxSSew",
  "key2": "2VzkrfW4UvhdmB7fpiGmgxjL8rwoV3dW1g5F4XDpL58DhSvkdJUckHWRPVNTU5nJv7XzWVX5hE4hd5nD2uncAMVa",
  "key3": "vvvWKYUABcCtFkthoJ85GcnrdjsYUYYpAKiB9tztCcvKCLe31TBgiD6ea52BD1pjFiSVwuvNu7np9SeA3jSLUsf",
  "key4": "4C7D67nRTCr1DavWJuCWnNfbM5ve5zA3LeiuuFfCZQoGmdbkk4qfWVDjM72xV5woKPA6ubzjmT9SmeZqfCcN4Qd1",
  "key5": "26GJRcURtfNtkxSR6Vh3MUHiQTW75rwmo89WhAN4yVoXxsnbDpwnRJx3ggQSt9AdbAsq5mkgegnrBHNBVE3d8Jdz",
  "key6": "3U1eeHzFMu4zoP8hxdBAc1K3LZ6jQayXKibh813pxZ6Tn7YaYCzrcCouH2f8Fgsnr4pisUSKTGq5sn2yb4AFYnc2",
  "key7": "5jukZBjwrqfmxo5ft7SLGkY2YvcaWaCoi6omuoUzyZzN6t9MyjrdEV4iPAq5BdNBAnFQKM5RFEJMqFwKAGphLi33",
  "key8": "67oGJHLMSYHfYr8VxDPYR48DmhCjMJsDnH5jrwgD2M1LFCnXXvRXQcmGhNNKy3YcuryRayehSaVmTwrASUvTYdte",
  "key9": "5o8rByZHLef2ETK1eVztED8X8XrAbjhWs1EtPBuQx9wvnz23KUzvtR5VM8EKQzC3PCanvuiiWqENkNjGTwFC1NG4",
  "key10": "4QqHqzGNmQdRCojWawEvpWwpfvVUJvkmfzMhhFGhYiXpreHHRFrshqo9t2rXBBdrgBJht2swHyz8oxoAHXgBLQPY",
  "key11": "4bCwpXXLCuyzJCJdhzZVaZS4D7JA1V8hjgp2VHpUjHffEBMbJKe1oensQchrV7Zjfqx8MeUS7dvYj3wjkxzgeozb",
  "key12": "5iFRZhbdHEYX87FxHVJvn255xvsAKN92sSBYBzkRvo5Mk7KgNUnfYxkAf4RmNJ5WTnXvuUyeNVCWCx9CmN8rRKpB",
  "key13": "3Sh5gj1RZiMSRBtAZrrm5Q2M72F7JMNaykJX5JKbTC9xAveJGdkc8VE6o4EVq5mE9yTaabFXxc9iiVqaq3FDWbts",
  "key14": "PL714SAUKyYjuCLBcuaCt6htmD6mVHWZTD2s5JuF9BQzeSWr7PchuSb6sRjciTf8YLgz9wzLJoevBaZnwHURb2a",
  "key15": "4g39wfLVqxGMTM7eiNVd8bmk7ukXQvengf5fVx45JaTy9oYcfqfzKdsXUiPGsMmWNJ399vzMJgP9wZzyVjaSnyg5",
  "key16": "64xsEJCjzuwbqSVx9FGCFssxMJf9YLhEW6ZizkoxgXmEA1v2BkAQYtzGqXgMvLycy2CM1sYkYtkbqanwSKdjUVC2",
  "key17": "3kAPcbxKnoyBToo37C7wT43aWTVFBKaojRjUR6ENJ6vFv8pn5Sdk152nCa3YxpwPLVwiHCsNY6C9McTVfctM3aGp",
  "key18": "4c8wHYs9KDXrXWvcGNjGh2KSdExvvpqoUMPr2Se8phXRBMygNPnYBrzRKwPEGmafNWw3w1PMSKDVtGi2KU7yxHN3",
  "key19": "3f2E6fJkw5rUrqDKK6APaCwaSWR6fmXiD9XfFATufZaJr7tbL6FsZvM15pJeJtUbY51ELZHiLf8hk4i8JeCV7YJi",
  "key20": "5NgCztBK59NLpinftgo1wEP6PbMMcjTQ1AgfkVPFqtop1KJDmJ4DSVavhhn7bQJNZLWfzLtgDBRJ3Hd7XsMecvpc",
  "key21": "3268LH9Q1g8igewA6BPkbQpaN21aUzmf3wvm1X6TvKGrXgTd2qiqGSmRgBtepsF65Yq44seXC4Q8EtD3h4C3Sfz8",
  "key22": "4iSSUKEhGJcwcKviu8LXLery6PZn72heHXLffXmWRu4YBX8VQpczdtS1Qb5j76xk5tRUeD3ppTSPp15J6hEojj9h",
  "key23": "53AWkizGdAt4pjv8EVRArWHMnswxvgy4X58FojbcCHzWzMQmCZ2LFGhrLoFGQh1aoWkLtjvV9EaBQW9VrvN8VcjF",
  "key24": "3caKMppWzuFDfLaATZMRoHnRYDFYuedFEPvudzq6dT1BZ7d1nANcA2S4UFKWL6F5h969UGGxXTEchXDT3zoi8Ccz",
  "key25": "3S4Frn18rAFp4KA2xfQHMu69ivNruMVMa1pKwGeGm5xzV2aPbQ7ZNKGgY5QHbJpkM1u6VMjjQWq1w5TqYVkvyka4",
  "key26": "2j4sqRqApZAEBVN83TwPbo5LApuGWbiqZD8Bd3qPKvGJKh64a5Pm7zLxd7xe1qyzVhD4BYABWLspAt2AeXindzJD"
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
