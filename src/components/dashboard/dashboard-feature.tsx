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
    "4DM4vnS9d5Hb2FDySHJfcBFmYfyWUYqkXvuvfeULPpSuB85cnCLGFcsj3Zs8mzRx3WfwNVE3kFyxDrXXRjNGNgpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CShuw8B62h7NNTGJXbP6cVDxF27zSogcdzBn3sA5GekpkC18NoGu14zGZ2MG3pReaixN3FMpj1XH2mcZBGotfLC",
  "key1": "2gM92vERHFYZXxy5C577SaaY1yVjGvSA6Q2mq5KgLj2pipaooGevG9VandaSKtXn5TB2GT6RYAKPAcMF7Rc6N9yH",
  "key2": "5oTDpRtz5fXSNRR6D8JFDGuJRjAfdFSwhe8XPW3qAW56bdBXdYWZeHAPEKNg9CdtnFs1f5tV8gGhK9eXZ65A8xf",
  "key3": "22BV8JQLDJGHFUcrLyhvEdWpG3CBBYr6qd95r2A5cL4Bab93AY9PQLhKNMaXoddYFzwCoM7Bed7JpdJ8NL5Gkgxs",
  "key4": "Z1mqhKv2SiEXAfD1UizNEFtuzidhGhPNye4cBxNndxZjQqPbt7Jp3dxLbjvLzrQXHBxa54X3dqFD34H81qKwtn4",
  "key5": "2gGCzW6BqL9UAZmUQu3Qxw8Ea7DddXBA5TUxUE3dE6DirkW3Ny4n2yUm4RCrZn59zY3V4jEcrytQzBRBeQuUJJEj",
  "key6": "2Kznwi8PbBzUTxUZQXmDoNc6RBEmCMceQvjgzMbLzzDXy5pGNPKu6xPQpFrb4b4XHRMxosCnp9PZEDnuZyWa7YyN",
  "key7": "5bTnqAK1w8tDbXVj9iENfnC8ootr8RembA5bKH7TRpTVT3aKH3qfeNiJWJSAzSR1Y9zpU9qPdx7F9LpQnKxmVbnK",
  "key8": "2eiEwKCzha5a7VcMnkwJF2z5fsdW5k5gfTtt9iyK9Vrw2b4AZuUjpQ5vTaa7KDhZEUExN72v346i39TA1983cWFJ",
  "key9": "4EN8uSU8hLcD978QBYtxESdYxyksXmhVQTUmG9n18ch9Ln4sNDAvueKkFSiKrXnfNJKDkLRRbts5jHixbo4XNKJ3",
  "key10": "5j1UXodmTYVxW7tgZWycFSfMscQoNfSDqs6qSjg1GL7EgqLBCz9iSr2Lvb1rN3AscwGa5PpvYYTeFBFtSrdHdcWP",
  "key11": "5d7h2RpDkqhtfuCWCmvX9tM3FSyKhV7ec3mchLAL38AQhaJ8j8bJARTWNDkKtunviyJveZWBUfwUXugExocGYKSb",
  "key12": "4CqjbGzxKofCEMN8eyZnok62CPoUvLoo5NADj4KWVn5jRhrvnbz98ejJZcxmYLgf2RJKRQ4NwL6GjDfnX1WrkSHo",
  "key13": "3vFov5kDqDU23oPsV6WumLopZVtNbht9BfYfq7MtdpJJb3xsYJLTaoqX6D569YSm1GMnpSj2gzQC5v3ZrhLJFRcN",
  "key14": "2gs8sBZs9Gp3Zv5pjERi5rH1Dv1BzjAtZjwW6DQKBVex53Wz1Ma6fjuzKBh45weQ6BA5HVGoN1S5KsTsCPVjHSec",
  "key15": "3XMRy5Yv9x3rUPFFsHHMNck3GDJB2HsE5UuaSA6FgJTvPfPkCo6cgq2N7ENJHV5njcGXCHZMU5FyirfiMmTpMzHf",
  "key16": "j8UibcirF6YRwejVWesusat26HtfcAiQcmPXqktxfjxXDiPJ96CcS1MQjKLrfJarjhwTp2myyHSskW69xvyuAZX",
  "key17": "5QogH2YL1GdmWkfefwxfTvnvKSFengKXeDdT2x7fHYgRGYqYykQghQnCWvPtzwUcV9tL7rnoEMzcVo2b2mxrxNoy",
  "key18": "5kD8b7vBV9W8dQQwBx2wMyYPrk8BpG2yAx6X6GkY2gjBqYwKDcvob1UFbwHoJpMBxV8MtXq612x6p5Ngbsz6THoU",
  "key19": "3uXCH1URMUKSC8qqVGU68aoTcYEUespyPtmqgA5tbeGS6NhPx69SqQUYr7GwjHPF7W4mDyz6KbSnpZRHuTRx2JN4",
  "key20": "537sPo5mKt4MKfUiyvYccnDyEUHBZS6NcPnt2N8vYioFnpQhNz1gDaQts1N9zMuT9UWVfDFazw28ptttGccM9Mqv",
  "key21": "2oXirrM7iYtoyXtsVLmqGQjtsfCXdxp6qNonvCA75hLtiMKg5SXgvaS6UgK4MagadcU53tZ3JJD32xbDrDWpe9WZ",
  "key22": "2AtkoksVKd97bH9x9NPTKp6FUoTYx1HUNHcBKNJxdNHRWbexU4nfvVr8r7QFBwRK75H9rQ4D99pN2mC1PfDMddfu",
  "key23": "gcfa5zimLyL1UzHbL3bA4dZEHsj9Xr1hEewmroceMZq7te3wGExb3CyqXb7WGapw34Y5KCpxooqe6iq1gHY97ke",
  "key24": "drVRW5ZineUrEDAduRGaQYf6n1YsPGmFzUVi1Aa6FNgypYvAXXD3iH6tUh6tLtqfNyLU2aky91bLCPxnX6WvLo3",
  "key25": "3LSY9YPDuMb8F5e3eFkSzcymExtMKTQ8Ye1vdM49VtptJLpjpmLhcFY59uEWLzLJgXcsBXBfNKVb6rorw7KgbcaH",
  "key26": "5KPxoHsuAS44HEK8FqoGA7XuphG4bMbJWNP1KVtb7Byb6EKuPutBCMVXHyxjbP7fTU8wL28kSogYhwVFZViYLuki",
  "key27": "Jgcjsn1GZAbvEU4AVJoamwpxbRsFQhvYyBDYAmqHKZQGG3U1VL4a7fFzjr5NnLMDQnfdxoxNqmJNJfDBZvmfqA2",
  "key28": "3vcwG9zsZF1X6V7jXdfMMzcyX6yXewtLjFfewh9Jzac9PXqZLUFYf4GQq881AbRgA9ESoDCkLCgBxTcBFmiwDz4H",
  "key29": "3ph6ehypgKaSHNNaeHKettsJ9Q1jcp4fzEdVw9EEJiqXnU6oSMwheDFUZJsabNZ3kGV8Nf5FnnSvzz6Z2CfWJBWw",
  "key30": "HxbZGf9CAXSoQdp5gudMikYpjdaEJoh8i9PX16qfg3oMp6PmjLY1h4q27QnYL1fm7XkY8yfRakzrmwfzYV61DrM"
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
