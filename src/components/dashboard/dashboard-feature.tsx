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
    "5VJjMTABJzqUoKFFYwgZawtMbVtSZZybuMhHvnFsMLenZmBZTHEtsbLEMSwpqhbFu3Ewb1Xf1QEMGnGbNf9XjFKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53gTcxTPCp24iPW38rvG2XGvVfW5mr9ZAWnR6Aan1T7t8YZ2uvfbXHhLUr34L1rfMwUHKyAwKXiTVixxWW4ihdQe",
  "key1": "LQyeY6pvRifbLBiWNAj7anhSjYtRnNWU1ja48GPNYrxMHH2DNZdqAjyjoeTL7V5rfbbKeyDHa41gYeA3znQ1sCr",
  "key2": "2Bp459rBoMtEo3eCkjtwNnMYFxL1bsB3YQFzrTjdMWBN1NWdHWq8NC7wisUYsvGRZSPpnjxPUCdG1UPD32TPM9LX",
  "key3": "58XVfKykVaojFnL74yhH5rJWgAwya2TVThcAD5q6hkbEscyPi1dEtV5GMYmehDJ2PtapTSyDcckFHzf8kgC7io6b",
  "key4": "27u3zfBZvHLXz4yuioGZcPyvLimjE1VQ7JGmEq8h3FEePg5DKofR2KyEvEF6pkWJLJTaSSbYzAM1Mj57wd1BnbEx",
  "key5": "5cpeTesE9AnYoDegUjMM4g4RR7wgTztaNBQxQuwi3wcQMBuhFEf4LSormgA1bNzNhFVZRZW9PmDxPmL1errnp5jJ",
  "key6": "4TEmcWkUjn1snVLSBXhpzisYyKLTR4mLrikQY9hV2qKXzRqMDqvJAAHXPaaXDcQjsCyeFGm81U2551oYxXQpfhc3",
  "key7": "5CxdN5VCVRnSxjESGHi4ZGLJwBdL9nQ2f3j37npdLXJJf1KcJ9WucRodCeVSjnRuwq9kVK2GWk4PLbd9fc6xENvd",
  "key8": "2Eb54HzQ2Vhq5d4XETERg4AAMk8ECkPbhsQaKohL3TShPCS68xhpdW6jvEw3pTLYCdytnn2fDWa7P6VQqeNSn9vY",
  "key9": "659vTrwR2FAHfNkWLhrcanjANvtMtetKYiAFGyG6sVc7VtrRRUX5rP8YR3z2QA3XdosHfir6ytQi9DhKN3c4TNjr",
  "key10": "5FzYrVWaaJjPwPFoQq37L7jThPiZdHXkYjcQxiKUcUKnBN618Y4joBRhGXc4JeKxBAkMKKskxAtqLVRJiZ9bAxqd",
  "key11": "5GX5zjhiGjy1Mz4vx8kNuqr9wQUtUcHpJ5k6t4sUbdBrngskbTv78PD5SztYF2fhZm1NvhK5RE7zv7Mtj9mgZqNe",
  "key12": "f5LeZ3FKqNHyF6uW4M6CwMe1NVDoxBgqsUTTgo5VgGJbkn3Jmw7DSo76WUsUGpeEK9GtYAexHLM26STqESEAMam",
  "key13": "5nWdmhwQz6xjx2Vy3ReDQ29L2F3kXhJ7m7rRe8v1kRnB1DZpU9sxp6nY8Srbiy6v85JN96yt3NmuvXyntc7Wsg9K",
  "key14": "2tpebbMn4rpW5Fh61jNs8g5z2fFTsT7y95R83wgLEyzRz9atEvQf5W2kPhKAUJdzKGjKjwJMNwFzc7QwqUgyDuBT",
  "key15": "4eVtHY8m4Q8SvqM19M7k6Myyh8NyYWMYHcBZeERqZmV45Q6hZU7eba1kiMBjoEYdkAa4mFtqaAa99h7xJwxkwKb1",
  "key16": "BPumzQa78dEr79mJDprSAJ6dVSVycJF97wXTy1TJ6WK8Z5GDR3GvN2yZCbf93W7DKku6Vpvdk126PgRA7LCTVSZ",
  "key17": "2LRhPQ4Uuov1rNTHSBd5EcBkc4uTSS4oyUZA5Y2QawsXS9DvkcFn9JTqPPQMM3FufUBWN4mvkFUUykrgyF9p8s6R",
  "key18": "4JiBcvyAk8UeuHYKrYoxbBPYAXJWYw6n4EfbSz38VaH1yq7odzCq68mQeDFxZA3Qr9kHULy7QZFsB2GgsHo27YEB",
  "key19": "5Qt8ZvFmWwXEpj3t1y6RSsWe8YJmVv58KbEHRPdTdgsdG5KEqy5mFZhM6WEiMssLaUfpKaoZMSFdvQF1xkUtcSk5",
  "key20": "28dJKt3h5rYVpfTwLUgZuneS69bzFrbav1mGoN5qwuTWTfPewkHfGUZcqz2PEfXuWjsJoJdcz3apeMTE6nHanojD",
  "key21": "5NzUeW9y1PAFBFqPhn17kAvnUc2q1Kcs4sCKfTiDsx51SCVrRsw1AG6yH9E7yzk2EjpTezxynFVRFvk9C8mCVgmT",
  "key22": "5fmHVSidDCA1g1Dvva4Dey3zckWU9yaYsUeKA7bzYA5W2ysWVFB5Y4sXRmcwL4iopWwvz8G2k3JVQrKcFM2RaPRn",
  "key23": "vQxU2s4ZxAsEbc1VzitYhPvKxnYr8ofG4ZQGTfHWDWMjwHG2k65f3kkJkHEzwo6o91fu3A29YV9sDYNpbuH7Pv4",
  "key24": "2YJqjDoanzxa6Wsy5ounXCBC9iGMkzps8vBsVpEn2xxcjRmQ5sSD5S9yib2h86rxS4Brw3UUJcY8yJbfY9NUEURZ",
  "key25": "5zFzwjFUKoTVa7rWrsDDyfX7YbTRybXfdHM7Dm51HqkscJuQQenFeivvmg1SMibmXKuahf9tjkEoNfV14cEY5tvx",
  "key26": "5Cmv2WZpAX2C3hRP2ojjSABgRqK4svnnER3THHX9XjfdBePfrYafvHNTTQ1YXQrmvnb3mEy1DJrzQbBYAfLMXTom"
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
