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
    "3ymHK2gmmBiAGFBSdq6zPZojETxdp57SdNJ5or2EkEFoWUndkLSR5s1imANxBGwih3J88DYhDpTkDzcMptUE61wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EvCbc6SLN6dmPyh3BiqjdSkMJV7KSB6S4yaZwWDoSvnJietwD5uTpSW5mhz7P7bmQfW9GpA9FeqDUpcnJiZd5AL",
  "key1": "3Ms4BFZWqbXHv9zT54D5WkxxWcbq7Y8zmW825zEdFuBYEyTEXwnBriDKaDCxaK3F7MaCjdHA1SbWyb9vodgArfTs",
  "key2": "4r3boRv7FAtJVMtdKPpg2naosCrzQ4FFfgH1VVpQfUSGm6f1xTnhx1nj4yGGdFQgu8E46UYGSY1Z19KiK8hc1bLd",
  "key3": "4ANTTtyJnmJAcKgS9yGQBEZZhfviBcRgEM5s91U7nzQTv8sSHZcwRmZdbUvMcL1vvp6nboEuGKLxt5AKoQvMbVuW",
  "key4": "4sgpEyp7PXdES1KaLvTJTXiCV2GJqUZAxAE4NVRivm2tvbTTmjZnkQVH9b9w3yzunhZ6T827F4AsU5E9iw7TDCip",
  "key5": "46Y7edmji3xY1XZwiF9cDTHdrU1oTysJsbRVf2hvHZEdVFiJYNTi8UeQzN3P64uzurKiGRswpJ3CKkchPRqEdo3Z",
  "key6": "3kXPcef7TMSBQ3ngbTSHT6CidU3CFxuojukxqGoHeDUDGBNPH9RtBjCn3hyxRatcT4HNVVeb2Ddwdz6Cc4Zpy1fL",
  "key7": "JGuSLqSX3JCk1q3NBwjVTRBcGiUAcV86q6awfnDhb6eKx1QTcEQe8aQwFjEHhNXe4QDWsPR6XqJSdsL9VkmVRpT",
  "key8": "hk7avVtTbY8cuBe5dVSmhHAtsibvkbpwZLsQY4t18nLgLYj5L1rnvtE8pG8tCtVRLLjNxvqazJ7ZxAaSbhNHPNk",
  "key9": "4zxe7XWLXdfhdfWgcJQso9y8XDewawMouKjdBrq3ndqJshrkHT4hXWe1LVLLQv5DaqbJn81MC3omsRsahgEkDisS",
  "key10": "sVSRN75zGu8ZETYExwGL8VCYpQiwNPizJwzPYLn9DneqRuqodjN5k5yNb9zUG27uvrccazpeXzFxqjDXL3eRA6X",
  "key11": "2TWJEaTnQz895xUfdJdZd4fS9MVHWAP1hHbZpgNGRJ65moAWZTAJUoBoJCAwwjzytvhc1WpuMKAU6Kkc8C6zZEq2",
  "key12": "2dz6AsSo4QvKNP5jXUfnnikq4bhVya1YQrxVwnShcDMQkWVJTMpydH9Ms5xVTnZkSyQKAuJ9dgpC98YzXJTzZJJP",
  "key13": "2jtrs3Ra5JiFEVD7vB3cNET294ZW39ZWBd41YjcZhfLAtYpynWwKYfZXXUcgvVGqSeRqqG3ktNammeoYRTESzfZC",
  "key14": "YjXtoaLk6biShHSCdFShKidBWqEfH8tV1r5tkPFc3LJsewVJwX82bmAuE76LAwjhvYpX3z3JdSY2sCeeogbRMtj",
  "key15": "4G6MWYnYuGV77xaEAjYSoqX4K7NijMGHUjxrME7RLLqGA2oVfTABggdrSF2uuDqrmNWyxMj97NVmTM1qwG6NgaUL",
  "key16": "3xaReR7L3uUUCcJz62FAABRN4QxEJDtiUjMS9yk3a6TQawhzez52suctBHiKprwjMrjyimUjMpFJ1RfQAg2GAbUy",
  "key17": "3RoFSVUopM2Z5ZdUfZkBaS5tCABsCNQ8Kinc8W1rnWhvAjaT4u7oJQDV9hyLPiziEV49aRYWEicoobYx7QTgzRie",
  "key18": "CuuybseLYcp6KrbLySqyWJcye4zagxoKvi4JSk2zDhFCjZksigBVLWiUFs1KkM9LVQKEA45hxN89M9GoEW5mNqU",
  "key19": "RXYePS6Q84AFKq3Pze8e5quDWgWyYzvuLqPPMCuGttRov4C8Woj4LvEyQUoNo6YKkrbPCBe6mca9uZU5bPbkMXR",
  "key20": "uB8FhFBgRKwBN5aW331MigHDTZSTh79Eitkd7azGGFiiShCnWKKbyyq5Agy22MqLaXV8KsXJUp3Yh9vuqAW1oL9",
  "key21": "2iD4ULHBJJjbECZn5eEVs45q3LdSF44HJnCdad8vxJrk9oBWaZukzVzCT1Z73HRWG86jVJZN5CUm4BHkiCtAyxL4",
  "key22": "3AUX6oaeJNKDCCyz5LZzuMZPnEi2MyAKb4W6cQY9s7NhKPVz5dyTrrc4jSvQo4tUmP3esEUbTcVAgPbGWuNM6zgd",
  "key23": "389CQzQmXW2GXo34tJavhoGbpiAyRYGCY7vqMuFPCzpDnF8KNzZ2oFpUTp1XU6LSdLfoUnUY5wmH4hcPNi7Zwi6m",
  "key24": "95CX9KmGMNJuMEigWXaYZJLmt7Aye9dsQFzhXaa1PYDGCa8Gw5ihr78BXuU4p68gae8Pc89LTtScUDkqyoN6Kms",
  "key25": "3fAtUYj6gp8sEGCsTKoFNoNHpv4oJ8oU8wLcm7ZNuVR2kk6VFbyvPoMD7qr6NqmwjU6E6R4mEyAYbivKiKschCEs",
  "key26": "3HGxrSmWv7URX1K4LUy16DL1DUVLLdB2wd4Ks4egZFck7GHisEoV5YN5NKYhkPE7sixTyh8yJTtoG48CNNyn71fK"
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
