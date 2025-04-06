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
    "2d863XoxPzy1FhvAYCDHyArKfoN8yzFQ3FX2QXJrimYJ3AcSx5DEoie1vfbUxJRkNnwd1ZWEQ9zQd24jbTKT4JEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SMpj8ZPormBejXhqmBsyyD5dVAAUAueWuhgZw2Ac7zwfczWKtivXhAXFRYUq2cRXvChXSRPK6iH5K6KapW2fSeT",
  "key1": "5N4moE8udSDC6mJWtXrUq1V5j3atavQmNNQ3sYifEnysr9SBYQs6FCJHDXWaR3gK2cVeDTTQctkHegc8nCzUzezx",
  "key2": "2yvSHWTxAwA2kwZ8GztNyn4VoqjSYWf6h72fazeBjNg9ZpnGqdogsE5ag7UQ5DbDvuZdV9q2bTm2hupWAQEuTp69",
  "key3": "23VWdFQsXkiqKgWVSDg5uh1LksuSJZ5FTcmg7YuMwntAfRUshWunwnSTrEnXmoSuuz8K9XpyPmJ8S5z2qEaGQzMh",
  "key4": "5rqiiLYCV76s3VKQbBMZuUHXfLZradsbZKfVSfGsohdwHU8ZCKc3BHkfs9qABZJYoHzagkP8TXHynJxLT2XsuYe6",
  "key5": "4b6hvLXMo61PHqyNSM3ovtGUsxfB15CDxQ6c8YYy8MSNzaEdDKiYd2t4GK9WJdD96dNEP3DYd2WVZHYSiTvoX1CW",
  "key6": "5Byw7YRZGZsA5NvuX4BFYa4d8QArjGwhQtpHZB4hNcVumuVB4Aq4o3uoht53hP6sF7NASHzvSMC7txXaxWF2vAUt",
  "key7": "Jg5DQ2ZJEYZVEPxuYxzuQCwYMcbg8wJAQKbU5qB1nb4MhFEWDmWJPNTNBUpModhe5ARzf3G6efUCpL8dwvQ9oLp",
  "key8": "4SuA16XeYyL4YY5BxqaV9sQLLc5Cf492RvPGzeFq5aeeux6hYmXmrf2YgVznQUH4cvJmSAYy34bXdPfb5dJqB1CN",
  "key9": "4bgijn965aBj9Xx8JxfGgdRFr6Q6eZdggK95juzZZXj8FmrptS2wweZ9VqHuGyC9vDHqgJpEYzV4pwMaYCNibUtD",
  "key10": "3tUG4AzMoA3rA14wxCTFVePHP7XCPx54w67nEKTzKG9zZmfnWNs2ggJ2AHUVCfPfcxp5CqsoHcnwVESn2PbUhcsb",
  "key11": "4SK2s2CVz3u1eLCwdMMuzkjfm3ZJthCMb4tCjtayqddpXQdKgwNpAGZbH7NYN26vSraF7SdCKxhRhiSZss3Sdy9S",
  "key12": "2qkaeegbtadsAhgLaVwMgCv79MX5BVtVphQhfuYUNDBYUzkGNgZtPNGHTQ5X4NLRrpGLcP8QTyN8Suw3J9Ps1xzB",
  "key13": "4NQaZHp7w5Zx4ZpUVvkHTLaD22w7msZs8PeL89mzvavMMgHfzG8HqYwyRT2z2Zs2qjAqGctqN2cQTiv3DfMZjDEr",
  "key14": "554sAgX8UCR69ju1Mto782QCWKB2jPfT3aCMxhqcgwiTUmCwxCqPdkvWEBRWXxH9165fF7rr1C7pphdrcyPdew4Y",
  "key15": "GzmLvk3Kyvw3TcTvtmPMoSCZef44fXUYHPzXKg3sxvhrYRp71TYjcAnmzBvpcxmibfrCLD9kvdgLa7tBSgWmeJg",
  "key16": "4MqPFxMK6XStu7ZHTRDrqp2VcGY1LwDhV8JUSQSjh7whtLo3PkDSPFLKYwHfTHproQnARZ336SZpE6wsES9kZfUP",
  "key17": "5W1GMCLXuMBJiFoZFivBwAXEhJbqxidsjWpPGuMywVc7bPbX2jnrXzDsvA8Yxx2rvCcBsYt891Tg3F1uPEi5zeL1",
  "key18": "2AAEApcuFtgeABQTPX5ca3t7d2iQp47mqAq4TMAsvqMGvVjFE4VdPfgiAQGjK8epPmhxxZBxPam9GgbprVHn25ta",
  "key19": "2UjtoEEB35867Eucx9M32QBWZxpF2qrDdXaDzs8bTyxb8TkfLDyM28QnEQ7HWV5Kjc2LBz1khfENJpAHY6YJt61z",
  "key20": "2akuhaWedvnfWmgo3JzFhyiG3w1aXVB4daNpQdML1DBdQjhHbfRg1MnJVm9tqJoXa71qo1iQhJ1HeAVmzVbhrQ3N",
  "key21": "5fySvXJnMnsv87pjDgGUXDRtrZUdRY67LFCZZd8rmLfgkMfXbUDYUCgipiddoyQHhc15qEvCTDLcCDHYPERu3MpC",
  "key22": "5XzTU51i86eLtcuhbx3FSVmJ9wvtKRWi5KMYJnfaFEMDM7hcZzbmsk4DZBViue7AcrvLJ1BLVsXzbMXrpBXwWKMz",
  "key23": "2SzbLoAhcAsZ9reaeZgL7BAjXVCNpQxAsE5zfftZWxWtdq4iyyiyJ13XJKVgsN9dLgXrvN7qxQnRSHy52Ym2KLN4",
  "key24": "4ttECxjwu7fQcJQKANf89QwHL4QtgaMo1PrYHiVfVCk5iYeQRfjLQYrTbLETePppbQGGhreEqeMu3TVUn5no6zTV",
  "key25": "zzfKAoxdjbbxDMRsBF5JabS3gF6m667su8XWRRvo7C8fpdE46u4ta6kxvybvbrQjqcZDRkBLGvCq7zACCVsLwBz",
  "key26": "5WLAXYctFDpLWZdgmCvr3VS2a1eaxNg1spSND2w21SbJ3nMoseLBW8vMzVmPc21j8W1hPxHM87NyN6EuNqzpD3mg",
  "key27": "2br49CS5bjTNAJss5xu9K6smmsBftLjB489B2xSKZHCmFS1EGcAf8BQTzLutf1FDf5JoWfhtv564uhZeaFUUV9V3",
  "key28": "4JYzcYWmc4amxGTP2TK5M5eZaj5QY5ATpopc4TBbGumQDjED66zyVXogJyWmftbGDJGrLXQjiZsAr19LGLB1wtpJ",
  "key29": "5LbtTKNy9fd5A73Dmk5xtSrutviQMyExN75GtWDMASLP9Ez8ncG71kQCYQjF9HbBWgHnvTq8pZW4MpeV6x3oDY9u",
  "key30": "2Rr2kWe7RFGHkybe6Hmz3U4bZ6AZBfv1bGAtox7HMCuY1waehXESdHeJtUJUiKfUn4rx3k1cPF9pdJAh7zun9Vh2",
  "key31": "2bi2CrDhE9DYZL9oG7ExY2F7qpfnvjqhPCCNBh41w5deN7hzCzisZ8u9qVR3znmS4KkXSyasgrCT8aZfAwtHZ9m2",
  "key32": "YmSDMH2uKKFPViKF4ahE21ffK6srM6j3grjjvNyNb223Rf14ycd89aRaTeaaJzDnG8TT5SJxWr34H7qZCWdVRnr",
  "key33": "4DmrU5EMv1hE7nZCHWqPhp2MjSj8tUhS7ATEMGfsg8nyJp6MUyhLMWRoNEAjNrkZea5KA2kGHvUaqsNjaXATuQo7"
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
