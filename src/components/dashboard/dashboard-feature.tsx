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
    "4PWBPChAJVpuSaqYdvwNNJaASZ9DsD8jcKTiVtvakmLunvotGSEEXfStoaAKoqcEpYJXfmBFe9ZRdFneLLnrCwJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqNZvT5NNE7L3k66CnVgw8eexF3FQ7LLkon8CkKtea7hFiLxBye2cDUekWDkTptfMZRkeKFMawm7b5LWwjmakXw",
  "key1": "4nHMAvhtMvq1S4HZx5kt2y4BRUTf851a8pXpZAVWdzsqJvoPVXLJSWiNkyYN2nP7XxbGK1zbkrV4yZYtjEf3KL7R",
  "key2": "3nBN3bwE1G52dE6XgTED1cUCTcDRmm2o8uUwdM3vKbFNH867quaLMqrttHRZyfrHrCsKPKVvX6E1Prj2vfaQM3qf",
  "key3": "3ux9rZXsLKFtCABppRgCoc87xcywubrX7C1FXUfQ89xveTvEbxEyMRj9CKyQQzxTV1fwwCnMZVPaH8YrH9n98vGY",
  "key4": "5LiwJUJGtcuoPQkBCUHgLwmQUEBdYFnjLiRQhGG5T99VByRCmpwTDGiEoBq9sGHAtVPWuuoQ3nURauPd2TQN9UQQ",
  "key5": "3trf3zyNkAwbTgCnyrxCCBg9RpZz9FWUNacYEw7RoGLCX8F3yJ47zY5o36g2pGGuKBV7mBmWstaUP5vPcuYMgJWE",
  "key6": "2KrUER11CGy5NiSmmAVgQM4YPX1DpN45YG8zxt84V9c6LacNx9jHysDadqk5bVe1S2H3Nv34WHPwsYygujxaRN2Q",
  "key7": "5cUGeU5PNaWGMxvjxNeUBVDN7K5dVS7rZJzFiFuUmFLtc9rZjPoCbZn3JS9aipAVoQNr9PBhnJ1nFFaxsHEja9rx",
  "key8": "46JXtf1sMEvyYn5ycf2V1Uek5PNi2A5GDHSVeuztUbozmNicjXd7D2Z8MuReJkX2AMvdq6iRkCK9JQzcEVpGTiF2",
  "key9": "4iS1C5YUtZretLMh2xocaVg2QvhXSwXDLhHTdKWMhQC5BsXG9XfnenqVqBNonLMT8M2r2znJdqTj7EMMMzzLXdrj",
  "key10": "2we8bdt3WEKDynuK3jHnYkTxBGyFHa29wocNkUSewi37zouQGChPDWiMe9aaJPUgkddePCUiUiqz95YAj3u9V4UV",
  "key11": "3zvoUyj6zBM69o1BQd2ZSdB9fuWbU5QbnmduZAxb33xXYFHiKjrumoiaQNExDTzRywQUW21Y2ULcfmst7xzEinfK",
  "key12": "3KAmWDrcktsrU2mqDnmMVNBofzSVcFkohdb9w6fZeyTPKUKoXGor7ptUib3fydzZ36AzMnt4CXYciSSANYW5hPp",
  "key13": "5uJZdpdyVGTMmgh5XRUuJqUBLiQV6gmRym4NtKwqGkw1vo3ix2Ct6mMR9sNeMy7qoaygtZXmv4gc36QeRcvT9QEP",
  "key14": "3rqZxRVPkr9UAYQakGD5zHymPJriSw3mzJAQTzEHq64h2dcXC37yw1s2VS72WYfhXhDBWK6zD96fpQuZEhZhJCCj",
  "key15": "4zF6wwjkZFurdXVcjHhJMG9hHZGmHY8adWg8gvtdr5hhaeRtunaYHuEAMG3edxpEiwj55tTUYuKxLc6f4jKKQKe8",
  "key16": "zacRPKWiM3KgKJk9Xx9vetZFj5uQdgXGnVkmYtZJG6BRLE6M1o8qUjrtSsYNuuWeLtZAxtLwtQbM9XjAK31uu4x",
  "key17": "6iiJi6m4MDhKBPfZHK7ur8xxYgaBW2V8Qu4QFjB1KxHEjpc7mWkVBVRWZRxC2s3E4zzd44C59mkBviAC8uU58J4",
  "key18": "3VQ1cGegob7u8VZJgow4JRBHCPNS9P4bLj44srVLHgaYYxjXRnKWgNhGcUBHfriv7Y91qgJ2VMQREdbyTjx4VCC7",
  "key19": "3QNMzuUsbxZDC4RHMVDhUkgmbnM4jti9XTvM6SonDQNEgkfWJtMUhLzVXpznz9RrxYJmKdrcJ54UF2mscYjwxT7T",
  "key20": "3Py5zQ8UtHK8jJADSYmx8M8ave7nVzZDMN5CK4bgX1zvCWyTyAgVWVb7JcXSVVZ5qRtP6WtBDXHWELeFqFsgGyuH",
  "key21": "2D4DK5hNUrGbdePHyt8fLuUjGcvpXjwVu9y87bz28DMMhdRjktn5YGpVL3av18wT8sG8PapaEK4DhcqN2DruEYVZ",
  "key22": "jEMvjtKhkdwob6CkSrgvLRaGTWyC6fMabM3yemuZKWbdfwEehbDF8ZoxhCgStnAmESE7Hhjtkwy1mK9EmqHK3Uh",
  "key23": "3ESx65cm2cWruoTaZPv8sFtFCBT1ANV1oCZMZsUTrUyVK2Vif3H2g4iJQqptFmBCSemBrYrUPUsunPCakpFzvTTZ",
  "key24": "3ZogBiXepXcAwqpuzzx55dLVGYTzLGaNmy1vbYiHYdfAUd7dHoLYnyPNpCovGyVgbTQmMLV8QbTXg2uVkcJXbStw",
  "key25": "4vLsFXpfsmXQNhPprcvnL6VQChWLVop948hEizeY4LN4nkki5ph35tMTo7jgjss5e2hFvCN649xoSRKVqALiLKRn",
  "key26": "25G8E8si55FjcABTewGFezDDXLJnpXHrtYLmYrfwVYwVWXG2FDbQxR9y6jmAw9dtwNVsRBZyMbDug3EuMKzQDW85",
  "key27": "5peLpWMDKnxNJxCvi2ri6G7d2iu17kkEfThtGaXsy9BkxzLzgg67dSUzjjoPKMSJU4K4HoRdnGc2RPf2dPeGRzoi",
  "key28": "49iQ6DFKS7BoM6CMgfmz7NJKtRroDjBfqc3VbknM1cZDbUtCtnfBkgYsvZb5YkFdntjMsV62mEqzW1fCtdHiCtDs"
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
