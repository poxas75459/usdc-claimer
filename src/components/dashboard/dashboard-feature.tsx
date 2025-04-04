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
    "4XTi9C8U1CAXp37RqFA5LfL48hL7agm1T5sZPZYo9Qr7VaTofFKRFv18wFfTJkU6Fid1SpLCJ52t5kWoosniD9gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SP5smnZj8b6PqUcD49BtRiqUTmZrCriK1vdkUmMCeDXqsjEnF6A9GQ8nhxFKLaPwmPPkjZhES6vhoSs1XzezVFm",
  "key1": "3ExhWKpxh76qmCieJ6oXTfSRbDa5qU2E1nPWdjEG64NBFJBdHebX32EAFQRQHJ4AN7LXEhoeY7MQDJ3HgxiQMWQT",
  "key2": "2UgXCfFuPMNiJHRwXoLG75SK5DA98c1w7FqvXJwonxBrcZ5TFaozgtUxfiHZ1stB4FeyE2Vifu52Z9i58LrHyjma",
  "key3": "3UBmRq5udG6zCzh7AHSorftCiH6ZetJLcnuBynJfd4MY2yz7GJg99ppJF8vcPGuEfZFVHVi4LdJHMhx4AhsydUHS",
  "key4": "557qoTFnqbwAH7Bb9g6BXodSc38UbrwJ1qsYMwbGi6Ne1nERYy1McWeWFbLpUDW3kMha6uHrANa3Q4xiCq67EPj5",
  "key5": "2SRCPWqTf1NJ859sHYn6hKau6D8quUYKmmemGvJzEML1u8Qe6pW19gP2hGfEnhLbfdC2wRje6WRswgiXUg8YqYpZ",
  "key6": "2vMoyvJXPbq8sbyjAwM2LKYzSLCgACfhbmh1Z9rzdthxWo6J7e1TJSikC6L6ZKM2jF9B33JbPHeA1bxZZwPm8Z11",
  "key7": "5HgmoZoVM5TrqnF4Qg9ebfdoBM9Avm9r2xh9rUb5kpxyyWCCZSieVjYXQhrQXwczvTCNuzdS627GzbxH3VZGEoB9",
  "key8": "3u5G8GCkk6ygstvPif7DkCfV4sJvoknTdepT4jDi16hvH8DS7hmTvj9yjb7tnvcgr8Nt4bvXzgK6sJWUXr6GzJCE",
  "key9": "3eCznG3UU3GGAipm7vcoeNTsNBPoU26RorhEeGjBhqj7PhsXWRa58n6ZLABjqDwRuPBZVHDzbtWymQLTa5QMqUqn",
  "key10": "5C8ba71wdwjcnByaWeqVmi7Qji7rcSp57yZZMa958r5Pm6DwBpVjSRTjNsDs8vtaoLTHKLnn7gmWyax2PYwZJK2m",
  "key11": "47KNbHe2Xdw7D49BA81Np8tsGf4NbtqiPUYZ2Nqpf63HKSi6PVJfTiJTyXsKDyTxhTdtQ3hhBb7FksUaEHwd4YdK",
  "key12": "NjTZdGtfFAur6QZgahDfr6hCJSazBXRpFFdAM2JgB8HrUSAHPU9cQAJCVNC9qHHiG2GLsb46stwUZrnkPP8EQnX",
  "key13": "52Gjaecb9XZFS5gocRKc46V7kmiNsTqxALah5WfnemHHoWyEQyZtaCSeiagShvvSMhhbm2wKZ1acFGUA6hGnJns2",
  "key14": "y4CdmiiDni7VN9t4iZG3fipmAaRFwwe7v6LcC2LVysnLJe8VgwPTRF1fMU9J3J3r4mMfHctqQtqaiD5ATDGmBPB",
  "key15": "4y3GRWXEDDmJU2oJcucyXG8hFGrqHj1R8qmChUUWcr9z3cvvSF3xGy7PAHgpfvs2nSuHh8K1Cvyj5tP8dL2nsScM",
  "key16": "4XZWctMYhiqHhMKGLt4q5G8FtcE5FpZehiAaDnBXeQawQv8bKbtWoSvTD9Y2vwaK2J4x4x2NCFnonCob151XriAB",
  "key17": "63sq9pRyMB38ZJ3gez7TDPWEY7se9UqnXGy7954cHudhAeBkHB48AXNGXtYVxeKxvPAz8woyt4bTDhYxev4hsqHu",
  "key18": "5tidnMDZCHyPKQA1bLwRtPSVTZAr2HmGQZvkxNUPtAMMsgNoW21XKitTC7BcTHPpN52nXxCtjreyyehfFAQK6wYQ",
  "key19": "Dj4Fqd8iUpWssx5U15qs61LwCAkDnYUzMG7g338BKDYn1FjKTegZ3CZqLtnoTGiURpuQ88tdj3DU4visVKHWHTZ",
  "key20": "2X6WcY73Mwc98Kfv2bnXL7sbvasfcJm9qkxygn3ur9Xne4Y6EZkPnegZTgwU8A3MKgAkuYa6xWs1F7TN1JXesDQ",
  "key21": "akkZp7hnNAsNup3SrAvss3xxJ2xdpaaxvWWVC4oXVYsWKtPYfamVizUTwrpRjfNuK3daLaBug2ajQrXnQK9djxL",
  "key22": "4JxFusbs8x5eUF63qU64RTJKh9J1gJtkGmN1ogw575kuVa2wbVWjHXCNyCxktZ41ctAa1i9ZGVTobmHFAR4ohgy",
  "key23": "3pPoKp2CgCqCaJ4V3Dp6aFP7oVrF8hgoNU78sZt4JUEy6zbrdfKCPbVyo7sFncSr3Novb6AYVkGUsyuTWTsAEHv4",
  "key24": "4BH3V6mXZb71p1DTLrH7DETRRKrqy2mJY68GdB11TiQr5GGCYUYyt5ksUAnXZnDZMDbtpL174iKdxrs8FN7BkRjS",
  "key25": "3YenQhmdN8WLhJdSATRx2FNk52h2umeMCmQWuRUKknSGrAUiThAH14hvhZb7QNcoMUAJMiVjsZS1J873HCt5AoPV"
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
