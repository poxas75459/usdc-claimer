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
    "2seudko6yLJbAV27eWPcksveT8eX5tqCjGt8gvWXjNRKVGrbg4Sxp5xf6yGm4bDBK7xXv5duToCXDrajSZTjv2kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJrA7NCUkYjJqbygQZbRzkuVMHwAxRB9PyvfUFVjxpWKNiFasKZALm7tqFVUD1uEdWnRyYvDJs7dLzdctquHtf1",
  "key1": "2W4CXnGNYxwzSGzCbD2Vu7uv9DKFFmpXpJzJhwGpqLJevVtX5ijSMZscQEo6zhEgfG4z3rrrrqEXWaVJqLDrYqEa",
  "key2": "dUJE5iFJdvfSRCxMokP4FcSbtzzE9FcA6jYSEJVFdxoRpqDgPEBMQMYji6fixvt9yamC3uhFJWYsVxQiS1wdnZQ",
  "key3": "2q5ehtcHsSoTPnkPTZF1N9AdgbJZWz1WAtMsiZfKumei8TosMBVtSCov2dKkGeNpShm4kddgvnarDz5KDU1LTB4b",
  "key4": "51hyJJ5Ug1cwTQAAu3RDqhdk73d2uipM93SdwiHcMTrxXjUV3qNqMaiDcM2VHWS4DNMBoSF8yhatvXxr3P4zN3hW",
  "key5": "4KCyLsfEW1M2QnyjERaFVbnjU6ZE8TLwRWyRt4vUbxbeEZfxUkXumS9ZHQyH15efct9xMj8nVeMkoUNStegZ8bQJ",
  "key6": "4nRAu5LybdQ65JrEdJzvu5Kp3WRW5GG5pmBRjhaW2VkR4B7qu1LX3QPn9FcE6hicmSpHRpb9nuUNNQrq7BpgUumc",
  "key7": "24ZMFsr7CDW4vakd3cEUBdeFZwmEh62QbT7xTUqtYquN4dkhbiS9LY13QDdJDyQPeERBV1U3FZ24kZ8KCpPAsirT",
  "key8": "4ykf5Saza7WFSDAq4uMTErz4oLjM62jJhxVDB9WM771XWmctJhNCb7uU44HttCeY12ocMhGrWyMAwbqXAh2PX4RY",
  "key9": "3UYvvmD6CaDKTwegi15zuCbQiDacdAk1QrbMXACoeZ9sZu3LDVdqfNC6C6usx6zQrv8zZmQDH1oJwkTLUMhDVqJA",
  "key10": "2LPCpHzDTKo9w9rwGjvE7TuaA9DYdobKQA5EjXZGAZqNprPoDcLha8hLhKbAxMfynziAsVpmN7Je6xNRKtX3Crvo",
  "key11": "2FrRipbgWDv7ProPTcqPJUTQgiqu2o7oAXZ8qNs9pD2MBoyh785hWbd3BDcXREozaucFvAec78E55Fi7EtAfHwcU",
  "key12": "2Vg7vS7Qn3W78fu3nLaG8NDNxzMhyPB6D9SpyfqqU2Vcum9Q7Y7PbZwL5bgpjzVtmRvQnAPQQQsb9ejVJCt6BhH1",
  "key13": "4Dx2yJQ2JqsDA1GnEpbMTShZCKtRAjQn3iKm4T5o714G89JJ4gi86DkcU259BTRNNXWEFnLYunCduMHwL3yYEqt1",
  "key14": "4Z7miQcCfeu1qSq6kSBGDkLjnLM4LkqV91bn4ggwZ6WfftD77bruzQvuCA3TtFEWWbgYtNgun1sFNDeG1Lc9E4k",
  "key15": "22G6Xe4yHvheKnNLRqRN5jvihS3NjU9wxn6pftveDUjXattCX5Kr42umuCcXYdXkPy9TgFjU8b4v2oZYwJezXqgx",
  "key16": "4XcgwDLJ5bod5QZhdAw2Pxkk3z3WvfBmqwgFmHTjUkBbwK7KBgEai87hAHksS31woEAtkGu7B62jxXaf8etzKrKR",
  "key17": "MbAKxBmmbrgLwT9Khuv9hFknTDxdsMkpViJNX9thEphPALTUqUrrVNhitUgvGnvDpskUoMxL661M6QTLPV2Xf1s",
  "key18": "5roBWSdz27pW7DmSmpthcejybVo4fWWeY45bw232eXCfrDfU2dVRsMp2UR5H4iU8svQdCpd7aN5Y6EMSyQZeSQGu",
  "key19": "4BFghaSvvFobYtZd1hsLwJtpMV2ay1iwK3cY5CEsgAki6LY4ozgUr1J8S5mgyAdxQgmnFrNCtLRQwxk2K279Qw4b",
  "key20": "Gxa2ucdEghT62NuunZB8eX92LKp14UAp9ZumAa1wJumvcJhhMApgLE7shAZNvK71E5BZLM9n9ExtNCFSaxDKCQo",
  "key21": "41uifXFqTAJsNvkcSb14zs2yNZfAWE4QN3k7zDPeLQVg1artH1gx4kXwykrUVnrtYZjaRD7s7cQtxxDDbBn4RfmH",
  "key22": "2m64GGhwAwyk7FDvREy4Sm2AKxFzyc8qfNkRjeQzcivvdg4ymKGaWgrQey2hTBQpYy2JZDAMLc8SWYvYTekRkSQ3",
  "key23": "4ubxtbxP9J6SeuZTEZeKHUP4PzWTALFgfVPKi32aWtoV7Tm1swhUGMx2QFMP4mFu3MLkZVRdkQAwYvF5tThNf1v4",
  "key24": "2UdXQqgky44kwMsTi72MhyAt8FW1AZ3oZBKpDYxsA5F5iZYBmD8K8hAPMiXnLbX3mf4X1wUFaYegVq99t8M7GK1G"
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
