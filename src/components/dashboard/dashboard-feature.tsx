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
    "5qRuyXaemrictKkWEo7fncTtue5aqpmPgSCJjMQ8EQaCrnzPcmhFigB9s7RHE18pQ6L2vvbvfimDx4CdqzsyTB5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXs75wYoPpu9jPCBNvCwLPu328M2rKMEiMbD8f11Hs87QRSZqVHT3si1kNJr1rn435j8b1QTDZ6fdroLb4cLZSD",
  "key1": "4iC9mYVLZKgAqrCkBvxg3TQbD523ojdNZD4d8N4HRujrprvAJXjRikthgqznxdks4cuhR74GuKuBuh2N3ygrZPYn",
  "key2": "2wwX1Fgj7am25MK4QvezVBQJ1gZo1ZpvCQVKvpQcs18KKYmLjd3BmKWSeMohohMcQEZXTvAxgpcwNwe7nQw1EVQy",
  "key3": "4eyrjAPKX3Ni35F1UwdnewWCdwdud85Wc7YqLDDSmwEWeZ3XTpnLETRFxXJzDtM2phEkMc6wBTyBp4ecFU9WB5Mq",
  "key4": "MLVx8CX2nzZihQDX3r6sTDbjjcSiWLUYnSvBRDDBBQ5NRSNgxPdF66sJFLwDYiQy6EBSAtz9hYRLpab5wx8UNex",
  "key5": "4y3Fn1gNUQN6FxEQLvHHHNTmDDaYHtpTaReynnvgstsjPfcfwcoXP9hoisg1ctuaJEHm2MEfYPHrJKdutZnVmkrS",
  "key6": "3U82F15MPhaaLABGoKVPKwxxDxvkYR4HyrVRiy2xfHtnCSujtxKqShP9KhbDCZfviHwjxvTPrLCmYun9hWmice5x",
  "key7": "415y8iACYRAUnpUCJkDpfpeQcNw6C5darf7BdLhFE31aidjZPLzaetUTNAE3ym4kaYKydnp5SKn3Yzcus8emvmT1",
  "key8": "2EK3WfFYgHcf3AHzytro9e7wcEFsjEGp8FFZtS2QExrpQ68Yt8zZ6b73k92SNEjtmR3EBD2K2yvAMdra8ywyHYEY",
  "key9": "5oLtKCvhWC4yCcykEhFqktxXjz6HHB8Nj2kxtCWkVJHXJCcv4EfFWC9zLLhQwQUYWRZpzQdoh3FQhXBU9eQWQp37",
  "key10": "2WF1HWuaML2et5W1sSwXiLNPD6gLgAqDWcV56BuXJ2bv2HrEwYAsUBHYtDKE1zMJRGgnT2eMJ29qVmkcav499Gro",
  "key11": "krf5WqBQNsh95hcqGKZ4zZ9HcGkVipw7GhYNBbePaUrFp54gfaKUEP38DmcrNKGLMKcbM7L3vuWDiQwx2THWa8K",
  "key12": "5JPYP64nQYC28jpfTKuSEX7JcML87pygfBW1Nx16jXXDP6NdfykTXuDF3jqX9UeC4rmf4PtZuCCdyGrz38BD81sW",
  "key13": "4YaciyjZNpf6aRPt4VSCntbSL7xRvFfr8uUNDpBsicenKg7Da6Rnwt4QpFVmYaJAG5SWFXQ3Q1JzDYRBBjkuMq7J",
  "key14": "2n86GSGEVgEhMTXgRa89xq7f5yZ1EHk1AxfKDKVjhudXPTsgiTaTpZWkJGBtdhYVN7sc5gyZARsax9x4Hhvi6x3x",
  "key15": "5AjM1ia4KxdkQvVkmxB3fQjA69E4Zu9yPqCL8pxQP2qUxhtuM4tUFP9VdCEebiqZJhgt5CWSHpvkiR9gbmLJjz7",
  "key16": "4kCWq2DSsbteCiAB39cvu9k45yysKrYg7q3c5zkciDFwQbxS7a4eAQ2vnoYCLZ4veiXgo3HBUAGr8HFi3Nf8eejv",
  "key17": "44EUpNoNgqvAPL8ec35CA5zC555upmyn3YPqhUWijA1dzC5Ucasqcdn8mZgyUpwFCC5CUjQBQNTd9zFvEYfhFtVq",
  "key18": "4yTZzTXXs1fv1teMqrjCWucgbtVR3LiokxPZMdtfSFX8Lqz2P5UKZktd3MQrG1Hgcv6fUbRutEAgXDFwLaH9DTmB",
  "key19": "oGwim7VuKkvBA21TnfvpH5aCztVHakqmgio6AQvhCB1XacSWiHqwPoXASNEjMCLQceGA6ep3PiYZ1Mb1TQ6yv7b",
  "key20": "5mJ2GU8Enydj5tsDLemhUUB5U7AAffv29Biyx768cjQDMT6m8yCT4DUvjHw8ykj2p67Eq3nnmLrHRf8AAzscUVSo",
  "key21": "4gARLSwRssaZcWB4CX4koU1CNAPurnLj2d4ozybcRYmrFgpmHn38joSmEM9ggtjARr2ifqSkjhLv3CuDrZYpUMYF",
  "key22": "2u1W3wgyKFkBXv4MxNSsuoZfQMkUwrfrddcyDaC5ttvc8wUU1jgqZ3erNoULsrWbNzCafPJXhjWW4Ud3hnYXuXHa",
  "key23": "4d6R3tBu3Nnqpa5xj7HnNtAWRrUNSKd8DsE2coZYLgN8TvqZHsV3MMg3KHhHn1dUHSDNUeM4x8Dh5xCH2amt7Kh",
  "key24": "2JvsEgpss9E83hdn67HE9s1Bq6LYB3jBjkrm7NAZDyoF5sdmt1VBLJHswXVjdPZvejFwrFqfpMVp839zfhZbFmCn",
  "key25": "3RbuXxnKk7NwoDMpW4xpoarhfdz1pkHknCdNg6z8Qmcj86MjWRLEbu8GEmWyVXVss8yUSjmvP17TTp9RU716zWYu",
  "key26": "1i58UgpRevxJsHQJNp6iNVVvUZus4TJ6JPjwRR2EgkmZMbLxYCdgRwzYmTDtVFeWyxwgkTAamhipg7NkQewRkio"
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
