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
    "3UxQe9PUNNwLSnduBsGEXeontw4wLmzUzHD5jxF5bvT1XDqRx5sq2kysa8BnZzi6jyzi1HMnXsoDNVFjakKUtU9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PWEk29JHoh7gE2mWJULq7hpK4akCe7iCTegtdwq5hFNyWTn7Uu3ikUe5E3Zz2TyUJ6CnuFby4ENTGeZgftZmQqr",
  "key1": "4kVDMfMMKDyVvJtAX7Yh2heC17LXzkFcv1PHfmTCFLa3VLDyDTKjfxv9QeyBiFgcGNnHGQ7rKMoKgCeag8wX3a3u",
  "key2": "5pRLcd1jBVcyyQmSSZuHikmimNQoJf2KAwYsDFGF41GgeS8UjCJHc7MHjWiE5VhU42DnJrt9unEjByLLE7U3x1gk",
  "key3": "4wNddmmsRCSHUZVs3snAfxHYH3pt98HJQg8KPrRscC2w3pjTAAfzfRwt6kAiCt8b6MdS7BpkDatcbb52bWMYFfwo",
  "key4": "2EW8uAFBT2REVzg7DZG3tSTNktxyEGxCePsBXEiQSB3UEFJ5JcP1pA3hVo2gkj5TFRT5J8T5RmYL8pTyJbxHzwmG",
  "key5": "5Qi6Xd9HmjfjzmqiqxQPrToF6fehDNAxko7gpXZ1UcxX6Jsq36mb1HtQyuJ2tqKtpobWrbV3oFsjutT1wLVTyENg",
  "key6": "2zw9rA7TgdKXoSqh4jbBZoTanBPSQEoBnqvkLzmmrkCbuU1Hi1XKRNpCn9Vmj2xtoJVausU5FWEjZvye9iBsw1z7",
  "key7": "4eynSCsih6649RZJh7sUxm6b29RGkV6HTHUAEvAjykFL73zsL4ypcpngkWgRyhRHRDhY2RuuQTiniAhdyqEjbhEB",
  "key8": "yfs3j7nTNA1BqqH1hM5LSS7LQHxBqbpKSkiN64CoKi6FDQohDyyiFcqbuNUEZnLnU8WWJzyPGuMWiZY2aaA9iTT",
  "key9": "3RUUDWfkPEm8EVgZuajhWd6tux5wgT9aXpNdV89hJUFXSxAZvVQw2CrDhpL2CHkCWRXyyZy3ACYhWToSgWLtQ7fo",
  "key10": "4UjAozR8EwdJgwjrhT5g63tvPtW4nnCcdJUjsPGXTV9ocJgDjwigDk7gj7JFhc1gEtfJ4jhnoCxxAbNBHLny94V4",
  "key11": "creY9UPDkYdyjq7rDQg4tDGjB7NxVwRxncbRAUJWVH2APcF6d52EUYVM7WMhzmZmadRViRVuLJYku2EwprH5XrW",
  "key12": "2WYZfeHfkKrNogkgPno1wqE7BejHRaZRKxDcBt5U6S4TYafLmZ1vFijXbSRySqBpQYdQqYqqxxxxWC6BB2BARJT1",
  "key13": "36owRfa77HA1S9SpPYQ7uHpiKJ8SdnnKdhhZEHfePs6QRMiftmfq5YoXvTePZ6ZA7bmnRkzGNGzfjiKbr6SKypQM",
  "key14": "3LUtaDy2jQdDYNC359wrKzmyPWLSCaL6vHG83MyixGHxAWegiFCBaVTYWYywD2RCbAiX66wYE1sVPHekuJGFUSHt",
  "key15": "668sgokqJNBwwfGiYmopk3BX3T42Rr6p842ejXgS9JhhU4nFa9kZaoNfqRU3p9X5eecYN5fraTw3kkpVKiF26pKn",
  "key16": "2zxNYTPLebpVE5sQQstSwUYzos9eFEVprbcfndcPfnTMtdzLB729FkQgszhTr5C5T5asJeu1bwCuB26jugcswiYj",
  "key17": "3SzWgwC7FxAx78dWBb1yJy6G2dY6zdVom1Z7fg9TEYpFEvHMFFE6xg6DCGNHg6At49M7AL7RHfxUraaSboH6ZHsy",
  "key18": "4wntihWmunwz1uwprMbEV47YLL1sdzUQkEUPgbKmWTmAhP89Ww3619RaN1MqPjSQWCvLxH9fVkHNmi7hK5hsuNZk",
  "key19": "DxAheVTVL959hr81xY33b5JbJVB1uWn2WWg8m9svCjyaHPnw5uamnsm8ub3ZLoKtnDxXyd7V11mXqoNb6dT4YDr",
  "key20": "8z3aDSXTB5ncBuC72JXYRQpnutcupTkGUkJPiRHqY4ZaLLCWu5anF6PfxDKHPdH5nh15Jw5sNazkgMCaU9waSXM",
  "key21": "5NoGzmnmoW5cS5bsQ95KwKTXK77nTNtDsiXRRAGhSyATB5f7tWpPX2BvKsRVmCG7vvr7h2PR1d58ihiwE2FHEC1Q",
  "key22": "2U9JjRw3vD3izzmGMJLui6GTgsQ2K2Qqi8gcfP4yEo3hfotBFpysL3qzHUzQicjGZMjuvWWXvVGiD1aorYgSDXx3",
  "key23": "5WVrNzxR3V5S8X6SyVmT78bePB7w5xD1cR7u55dan499RZZB6x7GXhRgwAYzpCEtRWUgSXEAsp3dHSDDa4afTKUt",
  "key24": "29TDXR6kz6ZVLT32F1NNqkSW1cGgGVJqsmVC9sHd3uvCuNrh1HhDCWgQajvNgezFutMrTDfveSuyq9veoh5tCadx",
  "key25": "5VZp4VobLpg6Qchrijf17Ue65jYFDjubTmxdEyRYUcgQBnwijLcNSGzh9JUge6xDGQfQbd1H5UKcKtFzBLe5uDqS",
  "key26": "5Kmd8GQcmhwE9YWRWtPGVYvNeUNXzieHxwzCT8e9PXtT3ktpcZM1ZPNuus3zbeb39uC5cTP16xMyHDXAxiReecfE",
  "key27": "4YbCnaKQ2RxZZgRUB8dXtwVnBrHZ7YYECnRbkpHibwRD5BLmPFFTidU2HkcNAbZ1hvtVdU3TdzvMFEUmDMk75Uy8",
  "key28": "2RBjWjwgGJA7qg8BtQBvFmYGVpPw3Bt4qVLoqoSPVPx628Hq1pXwJV85K9tFJ8F3WLzLHq8hwg4jmQk3athWN7sC",
  "key29": "HwX5QSkpmNCFz9ZUdbsskbm4rQejepjBv9b6VADHxf5yorXybSvcNfPwS7NmZHFFzMh6PgEJ6bHUtQkQZ3HLeWG",
  "key30": "U2mp17RLMYJ1rdGHwdgLV7nk8L8DzrAXw5MHCve1LXsHP8qanSEcbjjSoVAXSzoR93NJ3Yin49EHVEfuKRyPR2X",
  "key31": "V2AoPDvPPwGgBRXhtuE5BiTxkWmGsghk98omDw9SURi7Txn89nvCJW15L1ms83NydGmrBzcQNGy8U67bTjhtH5n",
  "key32": "5FiZ9NHsFJrWv4sdDUuuBorW6v8V4S1gY2rczzQrgS6eg5iWBXBFg6y5sNKkb2oxuKh7SbiT7i4RoSEmgXUmryes",
  "key33": "2ZJWKMNcjrtqev9ZY9Egm36Qt3TNqQ6pHf98Rt3YCCaoBuYdQctWsGwxER9NvwtqDsPGgAjuSNphmwZsTWbCNGEa",
  "key34": "3MxtBpsE9XE6TEq2JXwDYJ4QbCXBHVogixxPSejgoiAUgeRuBeuK2nEchUZUGJ8uMKC18dZTHkQHTXNup93FqTn2"
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
