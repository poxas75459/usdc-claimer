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
    "PE8mGPcqa55Bosw3DAhnjP4AX2iUH163CHZ2Rc9J3HqbDWupkwpGWnUFf8aAKRRfKJocg1aNLfDXXB2HDf9RjsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmqMCJftUVscDEgCqzZ1vfQ9EQn9sfeB8wj7FjUZ7EUmZ7ZdX15CszGzMQywCuSzGieTy6U6JVMowF2oGtcJ3QY",
  "key1": "23JUuuFCfS2fnq237Jy9SJ9mGRRiN5VmJgrScDtPZSG2VSST76q5fuMPCbATznoTVW7BE5XLtuwfcKyLqfBn5RH4",
  "key2": "2buSNeHg8dTZGdbq54CkW9TrnQWzY5uf869XFYjTpEE2AQbRmWSRRYkY6uz8kb9ZyU8UsQUzS3egAsRXbmUsby6N",
  "key3": "5xpi6CVXvEzUL6pCTJjMKrE6VaTQwPhw7Jpw9bZUw9ib8RVamwCuJFQNeHys33eaHU7U3T2Yy2eEhdvfxALQ6bXV",
  "key4": "2tqpxms2yy1A23YzY5Jn8igm3Zz6WntvmsxoYEmzNVkHrCe9mnnyQNq3VPz6zJhfr2jPQf1DGJ39oMSXTeweH6sh",
  "key5": "46W9ivdT6erzxenTZmckDNt8U4Gd4pWoPLqzsDxb8vwJf2ipwXf1qdW36Z1fwR1dA1LXsjZqQLR4V7tSjNgVUmbJ",
  "key6": "5pFrt9XeQBCRkfrjEDVgZyofY5PXD72Vx8ytzwU6S866C9hzynBr4Kc5ZKrc5VboL6hTW1JrDd8ZUzybAiGHEJcz",
  "key7": "4pyyQZxsYZvyVj7aGhjGnmd7gFPjWc7gpuBA25zEp3tqD9qUybqeM4Us3AcJGpDJwFgfgCej6JnEbE6SJVjuvnPM",
  "key8": "2tzQhPekevAcWFheGjqFmSa5ywipvGQSArdegcDWP1XgnsgcjrKq4hYxSzJHJnMWK7K3yAXZ3EEPm8z7jeYryT3M",
  "key9": "3idzfnfDxieZeQ5vK75cc3kupGfvBDPHRWHLqfZtmsJR9uj9Fv4EoRVTyCwCxq2NFNE3hgUpmPFCEwgpQvNvJ5Yw",
  "key10": "4dmDjVBre77xssC5vo9r4bu3SQjDMJ3wXxaQNXGdESqfKq6oT7YekQ52XzcfZBEbNREjqpr1a4B86pKCgoCUB233",
  "key11": "63CaWz7W4KsyppezMvB22tD67nsQaMnXRSunomXx7pyqQiMunqj6tXULSZ2QN9smTf4swFTJkARWZQ6ZuEqkS4UB",
  "key12": "5M5Vbz5bA6jV1H3v8YFQa8ac7ix9QnKvcMxU8PurwzMHNRnsEyK718kaPZ7Xh4m5N93bgwC1iWsN69dZjN6JxvXd",
  "key13": "2JtPC3RHDPNJ9Wj2wqi5Y6CwDkz9yQ4dRgjqT5z4nXDTvBbTJwL6ePW1ZbMHX58gvDt8DVG8sBo5VnJPmzw7QW7u",
  "key14": "4Mie7S4Zr11S939WjBDFETAAAwfh7gkudk8Pc7VHquyHppwdXPLMAC8m783tZpCBr2gu5v5sM9wZMX4W2SBBgRKo",
  "key15": "3kWf9rgE6iViveSw42yifxdTxE17ibQYW6ajXvTPBAgqVThFxUydz6HWMTmM3s1PZfc1caZ1qmEcvuthszfNHf5R",
  "key16": "mKefM8SjyKkSZ9sM86iP6yzz8c4KWWCE9yNAd9qQwm2YrLiUbqD8bkDJPaWaPykp6S1YR9BdAyWMbFxwPwCtZ9c",
  "key17": "5zMEetNgAVuJD6TdX7dPnkcEt8V6y9Cb8UFEcWjK1dqpAce1QEu4oqbW8BHgGAncfSwPdxFUQnsadGJyiCDbbBrh",
  "key18": "2P8FAhzCGUCt5WEVjzTxoz25T3DorcJAbXSYSNSFQJMKUYMngCaVVHbFAx9NV9ZWAynBu2bDJnMfSxsxX2SPsDVo",
  "key19": "2JbWjFYifmYsKhYu7VuSguXFnA1YuSus81Enn7h5xx73PmRWfMta9XC4HeJ765iLzc6AdinFyJ7XJwTd2GQwd7c2",
  "key20": "5S8fb9VgWZkb4aUuo4bEEYtv28oqfaFPEBZoPJmgAwoKvFfPPFPrxbRky6dmbXzv5VDoKFG9R3GDTfAqALmPEZFP",
  "key21": "VMxFVVmzU6LuMvS3crytJjM6dbfREX8qL8DVJx9RRPiDmGjtQzc4Zvmt1m5cwMs9Wcwp3ikJ9JYeeMN3dNDyRJJ",
  "key22": "2H9PqaEq2JtS9R3iM5oCzPiBySgwpT2dd6wBeFmpbm1worfYYe3gj4spV3GySS3AAcTQn556JxdUC5RJbVyFWkko",
  "key23": "2zF941vsBWBeV9geRJ4eGCuoprCJzrb87QEEP1tLge88PK89J3shcqCEPEbeRBX6qDRAZLAZacS4UmZBbo9ASdiW",
  "key24": "2AvA5hxVwojppQhM64RwpxXc2tFEowfvQnM7cVSfkARa4uARqvdHomZvJXiRRKYGAtkjv1oMjzxPoyi9tXJRjv3T",
  "key25": "5pZKDdLUoWCATRieXbWJNk9vA245Zy83KU54sjAUUDVQ3Ucg6CnDmDLd1hx5VVpoxgLNrUyZWMTGfaCNLbAkXWP9"
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
