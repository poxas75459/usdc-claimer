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
    "4zVq6puDPDwbYikyYWejbr62Hun85838cAfFq3pd4gNcjkB4AxQvsBYd2twga3YzfPGAthD93KYGZnZrUSVyZXTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dt3xWKjWnkUCJEQHK3tpGNNK1fx4sMW3GFQxGTZ2w2y4RP4p4Yv933SJsssosuDipUJyNxqCDVcoW7LHJfM8yN2",
  "key1": "gUe4dmgJB6EDYey6mTRpoi4bAUoKJPmc9NpPi75yHPf7FYeJwFan56Wdh2qfgRAb6vaCcAq1fWKE8VVUDovgR75",
  "key2": "34DZmHNkWCD4WUzWmVmsHHCyLjEPYVmckpMBaNvszRdEiVfbUdSZk8KRB8KPfBozSqhmY1jYNNq5MAD7sjFJq1j7",
  "key3": "21zbcg616ZikTkpmQ4AGftA9ZwdK9m3rx56eFMYPVJ52wcmTg77uBzFu779x3keMLx8jwhQ2MxcT2A4n6JtPN3B4",
  "key4": "5ENebwz5tTTJ5WHGpZxo4tTfZw6vzpMEtM73ZZZ6Sb4H9JthwCqQLhBkFjG8SwSccrA6jXQJBVrCEwyBr1EanrLp",
  "key5": "3mkq3osgNy7vTYF6c96SNAiBKpU5rZQHGNUzvTYUnNG4Lxq2xbnbJBYWZNokYCKfnuYJsBc9w6QwLsfa3d7eERcF",
  "key6": "5Wp9CmG7cPHZdzGYnDUMmTNPBFdPa9nZ9wacBxSb6G8gkr1KTzgWpkrXCLarX2oj3ckFmpr8VNHmFp3xRd68y49f",
  "key7": "4ZJJd8iP7F1YPKR59ZBSX8ykKiXQ9zn7xe1TySitP7p1Rb2BiSW6GwNZ9MN3hTqdjxzw1GEfgFfRaXPUJgYpHGtN",
  "key8": "2PEZXFFjq33H519wdYVHJdMqQHP4UXhzw6rBmNXEYXCS6pEiuCmGMWnnC1pWoGxWa2wCYfjVzC7KWtoNT3eBGDUZ",
  "key9": "2RL8gj36BqcKRksYN8H6cJqS7LEBk5zvQmvGnc6zBHYXkJyU6XJiMTqpLKnqQ3CMqewCvEHxDd8LbcQUaMLDtPpN",
  "key10": "5hW4omZVsYYcVhJcfButP1Lzwmcgdob8bmZwRiJMLd9ry5NWEWxzEksNY9TZkrNKF3PgPpvvTXyhbF2SdwgUYdks",
  "key11": "5Nr4CXez87Fky7e6xBKyVxKBvjmt8x91Qt4JWaM4DruUxP3ibbPf3cA6WVen9KNr85Y6z4mQ21zk17A9GzKpeqio",
  "key12": "61zcBssD9M56UTPs91fdh1SMmXUoDNVhDwHDJxPyQfjSgfu8jk1XnqqwEBbiobbnxTbW5Yn2UZyLNPVVpCRSTtSM",
  "key13": "3E2vjyvMYDnpEK29y8UGaXTrDk25Af3NmzBNsTUjyJRLwYGCbCGKMFQvB52L1CCaDLytPDzGWXphpWrvXhEgSAuF",
  "key14": "2LiJFjzLUnoyQGYLiyBRyiUTjRSyBu24SXa3hPR4ubL46TDCTos9KjmZWHhJJAHMjMNbAhp6oSNUsDYqvq7JM3jf",
  "key15": "66h2254Fut9tXvEkPDfy2KkUYK64icaTsZx1fPVvkrkBzJSeYiFjbPfNqNBx4yFwp27vn2HqMYM5qwZ2pbTrM9CP",
  "key16": "3xF2DTyhPQVuBfaArjKC282LXqqj187RwYW2EdKEXxnXXgciiRP4mcDsqrW37LsL66sFSbRgCtNLzYJJYf8jYoxB",
  "key17": "54H8rCPv2ZvBmHK6RsaET4hdshW5csRpdEB5Na8MzVF5iQhcK5fzH5iH9aedij5xGNtaCpKtuSXsizUUCgCMzhKD",
  "key18": "5fPuH9n9biP7WweY1yqgjGT9Ugb3ajr9jPwmvMkniDbyCtRmFRUaPkyrqzEkyYPU7p925zzuvWUa4NYkGjqYn8Mi",
  "key19": "4p8mSikF2Fcr2fy9WfrKigEvhp3QSTKjyNsnZcWcvq2EGPVoYeEfXYJBosLJKixXcQxrS59VKZ6GL2spsLszihqr",
  "key20": "3LJ7iwHkFxNbJV2eyQNm3f1a3eGKykC3Jo5rcB4KN8zVr8MccbSyyGJo9r5DHWh7zpsyhNSHapHypBr14NS1Ck4z",
  "key21": "4KthVa83niMt616VnL5xoFgLo9BZcTvHhrcvnMXhURbxqeoAyqJ8JA5q8Thwh4n1qqJPuufwn8iPMVjpuTXp36iu",
  "key22": "sVkM9E5dLFPJkhRjdQprvXofANmp7LobUXUPMqopJZ5Ca1wzQTH7mYT3Bn2UbHU5nbJLhuJXaW5X82EH9ww2xnU",
  "key23": "5E2Ltv58vyGoL2TZdvWFDa7EMYvdcohpywUww4JttVsGjnfBVA4m6qc7xx9F14cBzKBCYExgdPYVp5b8Kqzm6GRV",
  "key24": "4bMJfqHnycJ1A7Pk4QS6NUmKmoHwgkxJ2jVLRK8siHeS8WeAksWtV9AMWFNH2VzzSPrWQKyf2eqARvF5oVFiBJFB",
  "key25": "2WtVH2gQWr8Zp8kxJk11xCAcmws4GFFqWFCQynN8v1Lci6AGWCKUGfseoDYg3CVAwmKiNEh71wjijX4VMfR7uTe9",
  "key26": "rkShMaqrVGw9ERfhLErMs3QF8qvE8XC3hjFzenWp7QgfiE4eiGd1KGKbwEHCEUsso89JUm7TKCpJPhRf4un9uLi",
  "key27": "4b3CfCjamxhpKGwBbahXJrZWawhCkz57t3uNdfdxsX3htLiqR14dYiiZCPT5ZKjfhCtqnxpu87XZRJZeuUMMKgVL"
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
