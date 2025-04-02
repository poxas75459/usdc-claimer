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
    "V51vq3YxeX3Tmf4Uvidq8RVw7Y2Kv7pEVrRY24WkGtgqBzBa969WJsQFUWKmWgmqu3eSs9Ht8TTJXQFgKV5fgH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r6o6bMa2aYeC6qAcU6pQWHbh9tPD4KwdojckpqWkmfSX4XK5e31cFqW6xGfwDHS6bifBYxmeqPhFqW8d9FBBEcx",
  "key1": "5Q2rB574KySnmbTSwywsMKGyNRfrhajED1TU5o4FpbWVU7qZmvU8WjZXee9rAb6MCg4PentyW9QccGuX55cFLjvt",
  "key2": "2PW3gxntHJE9453aWDmqHbsX4KdsGPV9hFP3SiBc8BgC6qfsAW3fGkaeZA6b1cZsjS6i7uRyywpUSdjxLUPJKYT3",
  "key3": "BtQZANQHVopx7UzU9daFXcnc1UAMyMEwaiHmrFbJmCYUvK85Ea6T7vx1qJ7ei7qNWoYfUDCr2oNf8z3fw6P7t8g",
  "key4": "5T1ax9u2zZ4cL6A4aET9oK27BNmXhTJT52qyq9m1Sn64t1bBM7qWjCacpvaCgnMQ9viZm8uuG7SjMG2QV4dX1Eag",
  "key5": "ZMcMQdFHKenRyE11pWp2dyy4zQxE5oy4udvdK19PFf2deqbuS9Y735ZvH8uQnXPY5BddCq4j4FJbaPZ5WmXqUWh",
  "key6": "53nVGwJ4at2XDSVKxsRr4U4sfgrBR7DCMxjLJyUv5KPU9aJZg71W62roXicq8Tc38AL3pdtDoQE8LFa9wzDYs7Mq",
  "key7": "5G989EiJ9qMtMhzrpNCS4PQBCbRTRsJxyCmiP1PNCkyG12G5FCYgFmegsFZZH3DUFSeYxXVu8xpdySgr1mVsrTb5",
  "key8": "21gUyLd42T1s94UrromyymygkqbstjQVyELqCncN6Gp9jJTmwRAaGc4L9AQ1R7GNp9GwLGQpnZtqrQei7JJFkt6H",
  "key9": "3zfSHgRwunREALGZ57VTTmsUKKBMo4Hjqxq727JzcdEMu8g1uQe1UHviQJCBPP2AHMasqEY3MY5tkZaQN3VWS3Bm",
  "key10": "6aDMB2W9kxKT5ZreJD5aLX77qZTzZQXibHBfUsJX9DhHqk7HMh3VsLpKty9XsxjVkLs4H3KmJUyJw9qj1DcGoYK",
  "key11": "2sK271EVrDCpwMnnNHyRuVvRtYVJ23ykktthycxFeTeVt899VrPn5cbTR8GMyiLc5tiz66iw1mhJaYtKGFiu76pa",
  "key12": "5XKSg8JfDTAFNnNK6nqzXfk3QG36Ak2uumQyTXKKD3q1uPMGhREg8uwh3DdDQarxarH3p2xsaFHbc1h1G3P4xk2u",
  "key13": "2niMY9p995Wdgzg5G65nrbApAtYHo2RcAuDGWxHMdHd4CFca8ppdiQHhNfM5NtANpQLKZwgkdvhnHUdsWjhEnsT3",
  "key14": "2JjRwHrJxd5VVf427Un5FJn81cxa6gGE44rdBqwKjt5ygMXU9V7v6nX8JKu5sTAccodMtN63MnksyG1KzTsxNRPP",
  "key15": "kkNDHfRv6xbf2peeGsq4nF8LSKz6rvgLzr92NPHp21YF41PPsoZFusJqxNdBrqJwE9e82ixxAsFjz3mCPMPuUYD",
  "key16": "5BWnTw47Hg8kMBoTQdJVWr7Mv5n3tHJXrMbQ4AL8ymbTvPLmSJy1qnkE4XWpLTd772BCNN4ThN1mXDHDqVsEGs7W",
  "key17": "555zcP3i9PxjFSGk4Av5pp2tCvwHbCpiieUJhbPUigm2HRRqhFDMfpq4Kyt4bp81X8sc7gm7zKWH9SLZFBEfyqDv",
  "key18": "2AnJSqatzvzQj5VsXGmnjJStJHNwVpJs5xwYcTK29guESNPZaegCLUHgw2DCzSitV5uoLwASq59Xsp6EXvjzeNTq",
  "key19": "5QNhqLNBKcEHt1Z4VHX7ZC2AYjetEUDjG6vBmdMyMbDLJ2bAoo1FFmGB3tvj17VgCKR6qhc9rWPF5RMCBZnp4H5A",
  "key20": "hVZf5jxLwxqRhotoH5dKxz1mErXNmEB55A9df3GJmN97yvgnjATwbQDeQpp1jZeaUJeb1Q1LfTz6kj2stqk8i1C",
  "key21": "3RzV2cFUdHKt4MPXnkLxLxiyv3y8EtT3r9DDBRBT7mZJC8cPAXRN3vh5DhGoKS6HZB5Q5cLEK1KukGaxXDzoQdcM",
  "key22": "5jirDrrRVKjaH2Dwns4WoBVu5GuGf7Q5z5TQrdFuJ5DbrkLhm2FNHZRZumrpRX6J2TtKqSrYNom1GEotxdET9t57",
  "key23": "3zUFa3JEuPxDdQmyDxeNAonc3NgLzV1o2cvUZNnK56P4EUjHUcyzDodQ7a1acPwCknxY6ZYcZYxmQ3wo6iPYbhJK",
  "key24": "3reoP5PpYQSgcHQVVuFsJEd5v3LvQZkGevPx5Mq5kKhfg1fGJzTVC9mbDS7rUS5ESTrKwkg4hLQCCDE3AjLSa9Ja"
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
