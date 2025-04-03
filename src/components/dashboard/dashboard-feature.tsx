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
    "5pCKNqExRKiRGgG6xEsYG6DmaZrr9w4vKogHp6NDkgj25mAb5rGaAYQ59zB9aPEkdU7eSdG1jd66PQjeTxm1epat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a6zAnY4MJtupa5eqbzwMsRMZSgzanEDgsjDUBPrFQv8UbNpifdYDoee7AUY9YVitfRqaBWPhZGweadGTcFo2X4S",
  "key1": "2P1e1KYiL1fR326D2y2BLem746wBxRUfVh22tEZQJ6ScfQd9Sc1TCQC9F8vStJYZGc8LpanEkFwPG5C26WqaqtRw",
  "key2": "64pqF1Ee513crgrrf7Qob8JXTVeGeMHs3vWqGkNz8K2g13QiHJKvbSTPYSpbSWqv4418jLr7NGS65rRD18tiHngm",
  "key3": "3kU2ZwQES2hmN1tkXWjtuAU7CaD92DQnrDskshkZDcn3oKHLti5xcgqFYnzHQWY7MycxvZZCRSg1VF4H9SyXypSq",
  "key4": "4XRvkn9t5B4fFPxdtXndWt4g2jQDg5cA7yTvEHMm2DFRkLZxU5Mxpfep8Mgwe8nprQ5ayPcGLHJNsT75meBd3DK3",
  "key5": "4zF3Y8jUyUaD3SGosoEDDoy9J5mW4bimzcqbkH1XJTHbrDX1QCp86unxPbLovPYxd5TJuMUpiHD7BXo8un9V4BDh",
  "key6": "5As69nGQ27EshJrAhiyxzw1T1VgLccqkkEqVTRaYRVDcrCSMKQkcyLzFBGekErPW141M7NCNKBnGqaH7kbpgn77b",
  "key7": "3GnkciC381B6QqqN4ekjU9ke7VNXpXcd1e37iNnwbCqguZ3cVDLceXcw9eT3wUSPvHtDyDL3ajPiwMqZXHMwTDG7",
  "key8": "Kdai1nucF8un4Ga5b6oTNBVMrsb5tqSXZ6GZXnBMPPzdv4uDGJ2vcyKnJcYFm63a99wjEgTJ5iB2XkEo3bLpKxW",
  "key9": "3qdhMMZzCiDaJf4BQZucRHuHXYrpvXBnpYjtLQKWuiBST3a8K8nGo9Agbgdz35mjQq2vfYaTuC5Sf3GfAhyMJcGn",
  "key10": "3qVxXp1BiUdUaDZBrHktWjeQbNAq9u4kd1scgBm3Unx7FXrfoXBbUwM4gxcyuFr6rfd52fE2m5od2r3AmN522Zm5",
  "key11": "5Z71Wa9DLKGwswrQjapgJkM59P6kpQPqWo4hBLSakkMsmqoRYiZyCTQB4QquR7q96Zs5BDs9CRSg5Xvp6NHSLfLj",
  "key12": "PkFT4CKCaTxixGNzAHNh9ndFrEv8UV3N5NJGmLg55jFo683BWr1G5UWPC3iucHw5C6uc8kpD5z7KxGSzQmP9D9w",
  "key13": "3FS8JQ6DQZ4GnVoswhTkki1U651Ziorp1oHQVJdgdTfgTa5DMYyuBRweFAnmK5hSk65YbYbr21ZaZsANMbhsg25A",
  "key14": "4VD7aBXKDMWC2hntehryu6JffziLhLA26dbKM7xQTS7qR9dZtCSopi6uVuNFjVkhdSaJaJNmJ6cSXk3PbFQafaSS",
  "key15": "3twNp5GDD3rPDCw7JF8s1mEX5d1rYPtA8yKRt1e5AaMAqmY8CTUi8HG8hXE9Lxu3vbfutEDBvaWkUazLnX5nAJXE",
  "key16": "4X3wrcAdTAxEUUqJyM6rC9kGPuXGNDsW9DrK7LbgYJHZfbCVLDz4niBTfN2KhZtR2wXcr5KXwmq2DUbCyU7EpiFq",
  "key17": "5zdtCMwRzyah2yAm4SsUfCckjCZR6aL5xJdJr3jvbU4tCvvjMhoGzmxYfUeBTozS5bgE2MH37RkhfFQXLycWkYVN",
  "key18": "3Yetujo84tzHcCXY7qN1Wm6dCoyuTeGvLBqX3DVhyW6iThxb1oMotyVMYnDwhic4eRBya37d9CwsysKdCkGT9SzU",
  "key19": "55MBpAn9X9D5E53MwRqJhNTDm1zAeeBT1uydEbWFWpgw4VTUe3LyRXVaDtByEMCNsJJZuYi5JSLtYprPvgJCXQFq",
  "key20": "2rekrWKAyaGx3WapUbo22z9moPKs94tT43JABbBNnPTxaZuu5RWi615xfuV3ZE5rny3uYexD5vb9JB9tVPftvyXg",
  "key21": "61VoT6y7CD3zG3xSng4trtd2GAmkfRJfybutMS5B3mpNXA7GCqHtaGxumBx5a5c7FzEHH2LmLvVWRQof7ybhYFzE",
  "key22": "sNNYc57reZd1WLbX7RpZcGKCozZ2SSoLHjHXQbdJoUpyvBTr5pTJ4LdrEV5ujSjTQTFnXYFrJYD7cfTsS5Faxp2",
  "key23": "5TV5Wr5iFJv8TQ7V7GSZyYLSRGaV2vikrtQJvDSTuoaPSg3EWrNmSD7oaeGKS59dfLqQathK9A9aV7pWHyJQZmUJ",
  "key24": "2CkjUEVVhrA4AkqMeCu9nvELahdjuvvi3TGajAeQnPXu4ui5r2Nh62za5EgTE7jy4bi2mgTG8ZT3L1eiGwdQWWV9",
  "key25": "3jkKNfpHNjTvbU6toJmTM7puPHPbKpPZpMFhD8v9EUZCPq4mzmsyVqr3cmmhcqGDUymrHhBnS9EQFLsvBQ7KW3tE",
  "key26": "3xJN8S9NJpvY6iALuGpGoF3nBJ29jcDaF2FPGJKufGxv9ujKdGWjbhQeh3aeYRdqP6Cp45UAyS6NmcmFMahdcv4s",
  "key27": "4HwAS9fwR64b5pCAgvVcW4p97tddSYq27iiJPWeLBq6Y5wxZDF9xshF6gyds7kLb9ZVYz3TJygGcV6SqVhXvWwLR",
  "key28": "4ZT7eLRtfHKjrRDEuNsnDsuH9USCsdYgSR5xWbuEehSmLoGM6oRooSwtqmv2ja7UWGUsvnvB3iKDDFnE6gyckA7Q",
  "key29": "4V5ko9TFAjJtYgv1NdVagYJWGdCDTv4ZW1Ctopt3CbAzS7okL3PUJfVFY9D6WDU7VGBmcKWJyqiPsxVPxVLwZuF9",
  "key30": "5ptDn47U2Z5zke6sDpFSJUe7ApEkJJf2xMuQynPmcycXd19yMkHYC2AhtLcP14PpktzGvGRvKDJoycYCydryzUZv",
  "key31": "2juFc1gJsMf4JmE4T2xRCYs3KaMrG6DFgvbV2QP651EkUypvjmEM8BrDLV2TS8a7z6zQX9RwWKY9stp5xm1t3PhQ",
  "key32": "bJfbAcuV46eAaki7xSWviR5Mc8DDZhxeCS1NE53yURoX87scL5EsamqfRzoDiz2ozXDHfhTRhLN8fen1z11Apin"
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
