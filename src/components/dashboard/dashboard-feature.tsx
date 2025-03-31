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
    "T6tJt5eFDRp9WzKRttSqsh5LNCawBCCFH34yRyUxwBBf7eGZnqsyCnDsZDCrPJT8fnkLougN4NayVK1YAKPV8BG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bDg1Nh1rY4bPNtNbLFAvY8mrp4yt4RZfBZwxtxCAnaiQ4UbXfYZa8JqrJdKNTWUuEvSDP7iF71e1E6dBuDfuT46",
  "key1": "FpYtZPWZg7WJMR9ZPPH9Z4QwvzYyGjFxe8yUDvQjFCLassx4CDc1vbSHMnLAkiWQrSicQecSGSQsMdo1LYUkLVa",
  "key2": "3Wry6KZcuFL4B7JtekMSDDFD4Fs2ZYu9ti5Qkz16u5VCbgixLrvXmJVE5BkuwWEMhHKYaxHbv6eRz2SsiHrmgPaY",
  "key3": "5oFvbVdg6FR6MtUwfFh1kmin1Mw6SfEhkQxGCkJeYih5tUvYkT1wDEJ8ps2tCoyMWsHiEULCGRMtztAm9NeNzCjV",
  "key4": "ncJBLmersvssyf9Vpp8fdTELC3gw8NQN7hE2Ecfjjv69m3dPWGGxtfKyiRv1omNqFvc6PzXoMDXozmVSkpVTGA8",
  "key5": "5cn4uMDSsmbt63UdBwJbGSKm8do4nJNztvaF5ePQrZXr4jVrbi5KhcQegDgZrA7FqUq8QiKFwfHZAcXDVwj5GC9y",
  "key6": "4ZX3336zwAXB4jrFPoJtppTyxwHk5e35LhLxquqnXUKGDcR7YDScavBpgBWEVkFwkWRqziNVVyoxBWx33QjTtXVd",
  "key7": "56Rqbr21bhgbLAWQCkfqSbMM8zHyFZnkvUPo3FKvsxDgQpQ7Lq7hjM6jRBwMdL3eAHsV4oBgYNdBk3aA5um55QBY",
  "key8": "2A2oqZuZ4SDavyYGa4HKVHrYVrFzzCzFBpbGSyeH6Awj7QsZp9PhFUjAA8YvYFjtzFkZfYJLSn5BYrmGfm4p4RmS",
  "key9": "3xWfYu2YULeo9EG5rt7GEwywGjd6jegvMXTQVLJxiYPAJVwBLpe4yxWvrJ5edTNGF9tXaLQGq8Nfx8r3TfQtoXiA",
  "key10": "57BNByaRix5d8C3hHhDhDbV1En5ytXotXPpgEgGJtSxVQ3VmbjKs9Ycee5mjzToSCH6nE7A6JE4D3yqcvyVgmwSb",
  "key11": "2ECM2xpnNeFTdpNfRmNW2jH1pLspefJmBwCwD29jRgw7Jt5iN2A4PdcwR5dU74G3FUSZNJHtmBYN2zjczcXb2fdG",
  "key12": "2GAMHG3KuzVfmb22cvr7CPEgCgM3Mi4skQqaHooHYqGDcWimxUf2H2G96GENyMWXbpbsg7bvHHPqLUi9b5nxkfmw",
  "key13": "3GD2xzNvFUkp3m5DR1zY4x4eqmWy2ZuhiMaHz2CAiktojxDGUR65ERkCde19uU1vkWNDyYVHV76rtjuZJM8aa75q",
  "key14": "2HX2gLhkEKteJzcU6PoYYSHnBACyKFJPmfWQvzQxkU8Thu6XJc3GRwz2MK3vJuMawNaHiGixtxcrug8mpcr4AwNf",
  "key15": "5Rq3zM79m34geXH1Mq4rm5T4Y5b8rY2jX8RUzwiZMDgRJ7Hdccq9zvXMEuUKod3Zp6CawpQdKjeCrxXx5h6ns5Gd",
  "key16": "4HtNsBPPndCEHpMgrHPLowd7MiaPcwbtapSJ1CthJsRLP2ydbekCy68aFso7vsaRGeTrUA986MH2bmQDFMtn73Hz",
  "key17": "o1CNGkziq6rqdUXq8oHckHhX8XsAQUCUVrKLxwrRDet3ceHHCFxSBaoLGmQsPbpHYUrQhRYEEmkgWhmeLL3ktEC",
  "key18": "4tSPp9NDqH5mtsAd6SH6okmyT9HDJfTznmsFVgbF611yV7btUMETcXb2wULKsJdEbEg4kZ8Zk9RQ8L3akaE2CRTP",
  "key19": "5CeTbawejkSiC8tgwtb9VWohFYYUcWjZ4sYEHri95jQyh82FE87kj66dVTyxb6futmU87ygj45z7zCC8wN3BwydK",
  "key20": "4z4byHJZ83rNbizugF25R5FXZPavk1P9gYTpYApq64VHt3fQZFMi7AcNgyZxJbzJSCVo5RKgWV2SpadTs6JsYm1M",
  "key21": "xQ8TH3aqubd5KunKLE9USgCqikshpNJVwt89CZW4XkqLccXXAAfDncBkUAWfLHTbHwoyEmpVfR94VpND5MQeAXS",
  "key22": "45cC9evDAnR9NpN9E9RxdXBTit5wy9G8skmsD1QxbW3QXC1V38ts6Vwpcm4zF3ABigY886vLLjtVwKDdK7P8Kt3s",
  "key23": "2eyDWQ68RinMvHfn7q2wET93u38p8EZx1fzja6D574fvPGEBCvSfazPXVKrEvaNZw5ZNezSEBRWuzg2Jm8RmuBGM",
  "key24": "4iEJEG8Yy5mYurg7Fua9hSJfKsPuYAX5do4hdxNvHRGcoP1B9h54gfooyiuCZoD24YhNmbQDzrNYVfjZ4XA8M9vw",
  "key25": "3TmPC6AiRJAUXTx8GVpbHpZHVGRg819uEfKYZmcU6GFjQCfXTogJuNUwEgvqTyrPYEG5MZSwUMALBZsfertMSCVT",
  "key26": "2HhKkzCaNtmohFufg7RHhMriNRs1MEazpuVZCuSxofoW6R7jneLAMNCExKA1RjhgQ188AfRrhd94PbuUL43ZgC2M"
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
