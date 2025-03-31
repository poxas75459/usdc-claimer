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
    "wTY4kyoJ1PBCeaTU3QrsVwH9Kp9A1Ru7v95j6nSydTw72iNsff4ifrAMPLBWAKsqrvS27mRkpmtMJhwCVAT88Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ArN2oJcYidUc9bFzUfM2m5zQ3cXR1GUsmJok77aTFR9Dj6ujAYzboYorWstYwnCB3mq3NpN54G8RJQ9emfvwZPD",
  "key1": "5TJ5UhT2z6QoNWqbgWQya53GyWefR2Ed3FHMuqN3iS3cXKRgXS1NWbsEVj4BVvNFkmeuGL1C254iZ4JL44s8DZYi",
  "key2": "5tLd9izPYyfgTHc54pewVh68V2XrJqr4Pc45XXaNYuSUY2fYyM4e1Bg6RahpXtkAsijGECYU4kpbkuHy8THP3szr",
  "key3": "2xYaC5MBEjkiXhjYtwV5qfFHA2FTziN7iwKnafWTW8hQCzPLmSUEMesxXeVsPa7tVBCtdB99V6jBHErtkgWxaHs4",
  "key4": "5tjcdVXS1JakPkB7MS7NYsoc2yc9h7L9FtqzhcdJoZddk3gpLpKAS8zrYu6CrRPftzs8CEJr18MqcjX9XdtaRVcD",
  "key5": "56KFkxhg1gnpGL6cTXFqQuJ1YPBCVFTJW7ibBfF31WMPGPQZNcuwnSNifV7X5BiNyrnCWoJYqj8k2EN2n4aDmUv2",
  "key6": "5ifyy3b7W1p38FhRLQCooKUg3pwaHUFe1DjrFyRcAuEBZNZCW1pQqa1SA7nqo1opzYEHsrKfLy7owFTcZFRy5noi",
  "key7": "4yWqxHLnTf4LHxLKJWM2b9xKBQit2zjoyhQrWbu9WE4KcFnYsxQWrydxY7Ka8suR6XK5kH4zY9Yd4Z7bcKc9nj5x",
  "key8": "4yHWRe1kqgu5wrLidZ3e8Y5NhgkKgVbPqB4mZ8Lr22ibmkeCTHUREtNpg7zTEqkP1uFRDEYENVzAPW8PSsL9CyVZ",
  "key9": "3T1PBxsUuzAviUCYFiPy6EjdnK1din4KyjHZzsqcy84u5HnwUfwW2JWNSPNM8kNNKVCwWZvzDfsgRehcPCrxdSRR",
  "key10": "RQsvuTAKqt8PhSsYTLh5bpzCi5xYH8AFBcESDLktjbHCsHbX1aFgUQuMd3YmnnmNiNMVYoCjr12sU4Nn2KpAvNh",
  "key11": "3av6LiDaWbWhryUMQm54HK5jhkFQc8pjmdcCzBTnPK8PxgqCUhmBdj7388JqgdqfsRZVQ9DyojrXtY2i5NSSkfyr",
  "key12": "5vNLFCi5LfjDxFCPfeLbffTD4kHrQE9VSDp9A3oEkCAM2hXsiSciKAfvXipD8o7T6269zbyFK19hMSEqz7MoPGNc",
  "key13": "5fJ3H1yAFgrxRBY5ZAtc54bDbB6TQZA5YC2dyRtHmrfqSTadR4HobkHqpT3xeGQiJDToAKumjtk2SNmHrBYDGHta",
  "key14": "23XExjFMpVekBhiKZg1Gq7jzd6Ja42WSev5DSefCXCR4Gi65LbQKDyVPP2wmsjAxeLDAVmkgstzH39j6zSvqte8y",
  "key15": "4ZiwJNgeSUUtjSKWnSFdYxp7Va5kLUemNqksmehz6TQ4dyKbCAfdKsZMdxpXQ3gcjraUkw9WRvQLxuyEtQ14WsPF",
  "key16": "55e5jhMXgYg4jDhCpNRF9x1LGbf9fvQd64Xg2oe5E7S8sBT1bTxVepAyT26uNJVboWvCJK8SVDV5SQj87sNTH2hk",
  "key17": "4Mj9xXnjEfa2xzUFVdHDUPjpEkiWd3Hi1Huh4xmkT6YM5EjrC9zqmcyGzy7WvsbA1Gt1BLLqzn3UqVhYmfYg9w8a",
  "key18": "5cZmYMSRuwPAwfUboGiUT6gSC8eoj9FVHfuqQTaPpwwHuxXYUTtoP3vghByqFp3fDnEMFf1WGTqAp8nPJBByMLJt",
  "key19": "3esaNg813LDzNwvvw7NQG8MA5o4tu1SSSkTeDcDYW1tXzt94ioxng47CNbqNJXaKoXgZXwajQBSsDXPtSafso5TA",
  "key20": "jT9rVMvCuWxqdLp2J4JnhhfbrdxoemJpgaq6maGP7J382DWAiVq5vKBTvWeaoxugpSu4VCQtEzvQgipbyvfRvfV",
  "key21": "3B3FQ5fnT3H1ABmPwEv4XuCRRK9wTTVfnEmvMLsKfEGEZCTFxdg93TxqNfKH3pwqS5WWy4aNo3D7fPCiaUm4EKBq",
  "key22": "3PoUVNH8USEbWm9DNuXNX6opDTKCHDLdywr3tWGxqmNeGgnntJCHo7eUjxJ8GXE7PthRnwshuMWmNg7YMVRqbhbN",
  "key23": "2TqiSK3J6J88yNKS1JvhQtWQCE8P3VtfzWvUPf1A2a71LUTUfwZ8X67rojbPCr8qmJGKayy1wrMErje2txq37zXw",
  "key24": "5LdGa43PbT4mURkGkUGKaqmq1rgw3U4e4eBCzYKGVVKC7oTuivBS2giJQw1Xy7CE68cCUXbdsXfSWqXbcn7qMxNf",
  "key25": "dQpm6vpKHNPiUXPqAnuDJAGoTr7rWABRoDjVaS7LwyBfw1m7HFhmRxH3HPB8piadjGWoRexB656qF9Zc6vS4mkE",
  "key26": "2akd7BJzQY7wDTkrN55r4hJrwdiEAGE7ygFYyrWMKF612M8XoCmPAwgACsmPyDK2wxTytB2DY3NggyVkQtyzedTQ"
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
