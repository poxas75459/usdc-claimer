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
    "5n1uvZ2r2CKDd5quqiNXK7ujmpEryMDjaB9uJAfuB47Jc2ZF7T6YYduFETwsJzfwtXKt9Puy1jpaW8R89FRbvdVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLyg7EjbDWJuE7Xuea16DBukyXQHbF3whTfciSQjVwbkVRPQ9FtwyaaU7Co8rBSvKHKgmE1RTi79PJRzh7JuAy5",
  "key1": "3mB9SwXh4y1jjwnHcHWwVmNwQtucnDbVxgPCTPjfqxA5r7KmtSZ1oqt9HcteaR43kYdTeyjGgk3K1bFU1NaBRn3W",
  "key2": "2Rj2xrVP21qLZAtPA2v6cnjERVrnR9BYZBAGov6zyRKS2rQiykVNvZ9FJqvAt1TnF2AGUVfALytZAC36Sy2S6HZz",
  "key3": "7GzE3jhK5tV7T25v8EJ8GsCm8QQt6ML15fYwBhcDaNAjd8mg9qWNpXRQfWxxi2F36vf8EZxrCwn8zXcrZhv1Ke5",
  "key4": "54gSuS61qmszbVW9sUJ366nD3BRr6bzzoSDxjtJcCno6DdKw57GCJXfahG2VR6kTL4KBTibEKDJiisaQcrvPuELH",
  "key5": "5WhTmgVdm7koh1P7ah7msJZDSgMYhA65SzuXtFcB5UXiWhUTLcG35X6hWKpZtdzsGELUTzNC8CyXZLmpKbRbfb9B",
  "key6": "3qurcMP9t6KQjGnyCCFV4iEMjVbDUsUg3xB7qSZQ116CwWaA5CGmB48ZEzjx4dVN3WAq31tQoA2rjVexYeX6xhiS",
  "key7": "13h6xAXJjWBKPXES7PgFguX8a8fgow8tacZkR5C2LntbPr9eThtdsY7FpnrMtZMf1U3Y9rm34RZxVA3TE3FbEb9",
  "key8": "2HdpGUUbQ6A8pi3wkvq72ybusyDrvXiaUj3AuriPKc4EuBL4Jb7vpHM6S9Jf5booqMg9oUMxuv1LvJNKy21xrKtZ",
  "key9": "5gQLFBJxjijdSKn26wzb794c5D5MkuFFZU9W37vodAx5KdRJ5jsxzEiSK6UgzdctCeuEg5jQvLafvarkXTCBMjcj",
  "key10": "3SVkzYy9rH3nev9DE125xYVffrseqiz45uH9VKknTpuXjMECccgUpXVvqTQwnAVjvg5dnK7DzGvU9Xka4yHceug7",
  "key11": "49vRjtW7iFANqSUDYMKKe3SrgGmBevo35pU3pzE65WVjSC84XpTQ2BwJvmb7uC6pXsxacVvLFgKsgFdp6H6AA7Lb",
  "key12": "SrqBXmRRD72oKgz8Y47GUDnpudwWBfWTqthcQmZ4DhEQNRU2DYXph5Kf2JHZbfQMcuXTNYLhAqtpr7S1zoRAspe",
  "key13": "uSndoqcYwvWAT9x4LQSWu2Y77qcHybTC6wZ3YyWDmfoZRiJT3eHN8xkKnPcor1P6U9rmWTTT2wEcR6QSEto7hHz",
  "key14": "5oRtJ6NPCgtqkr8ms1axv4gkRrZ8WHMF3P4vQt3rb8gb1fBdjAUSksaYazKmJKXFk8t7KmYdLUkZV5s6i1G8pnMh",
  "key15": "j8aEj9ErToDYJGEqEAkdTvfD5SkRj99zTVXoKcw98ewoQNFwywwnfPHsSiXoyXk6YeVHys4yHJB1PfTi5LPrkqS",
  "key16": "3eAWG5Xo1wcJjtqVzqDSSdr4jDNDQ62PoD8VfhSy3wb9BkxrHAbtz26z3zSpr3HwHxz4m7AVqnuXEK5dSw7JSu3J",
  "key17": "5Jp5rwEFPtobFAQ48c5LnXAD9sA88XVDMya5TxYKdExTvQXokt1maREQzdYW9aL1bbXjbDc9hSbJCtXgoajun87F",
  "key18": "5wThivWXHPhoP5Py34mxd3DW3LGhMyx7GjUcVWgQs3ZywsxT3iRPVQq6Xym9RA3fENqUAVoKttVSmw3FmFDStgFG",
  "key19": "458N94pzDrEoHud1DS5HuK1efC2zFpnAZ5EcqjA5zvc7iU631q8qGsN3H4gxoJ9czgXDRgTxczb95y2C79EGo3fN",
  "key20": "329yFLE1pYbofvyU1WqKWjh7CHPx2V9W1gvoqSvzkQ7YFTozqQkWsgN5qUhLaD2YBJ9efXJZF6t72EP4yymWS6oM",
  "key21": "31VGjpCVkFXbumfLVFzuVwqLbkmygzhBHjJKf7kFXUuwX2QrGZEYiHNdU4ZAgCS8FrJqhQ8KjEuoSaiJmsNFNQzA",
  "key22": "4HSWjhgsqNNBufqNSBsyffehZRL9H52BeYWVU2TtxUd6cped91WRWdJ8KJpznJeq2xGhZT6nwRHWMDTqnm32w4WN",
  "key23": "3WQQCN5U4HN1a3kknHBrs4Hx7XKgESKACbAjqoNC3aM9vEhWWQbTQxQiMPndGQtpAdTgRSBnzYWC7WaVw2D2vCgy",
  "key24": "2WpXoDHz3zHjcoQ2nxV5vCzsuj2GKGdSM9EN96uZtko7zzLwP67UmMdZwvjfduxiwpGrp27ajmHEyLzp7mkgCkVd",
  "key25": "635GEiAJWpMQDpz6osXJTJvVjqtST3wvHNpUhwSyq5ssckXNy5P8K7Jta6gM2d8HbhVUohmGxKjHMYG1sSkCFvZf"
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
