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
    "2XpSRNJKYqqiXXczBsfAZmhFsG3UkKu547EQ3YrVsNeqZdJonPqjxjFXwez9T2EspkwzmYWkXdoMdApB3CMP5pxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Zo6dZie8NCLi8G5McV7GnrA5Zh2QrUcSrACSjADYQNy4tCqcfnG9kBatAhqeK6f2cJwtsn19v4VPB2N5YucvGm",
  "key1": "2pqAGNtqqNMyZFmPPwq1tkGrnBsyWaLCSrgSWXjqnasUBapTqXn7Qo1Qut3fKQjKsbyf5GhvnMJWVBeaNxjJTwpv",
  "key2": "W9MYrK7UVZLy7FfMe4iTHTAf5rHfmerYnVvcscXCo3TKLgg9hDnGVLyHQFSSUmLQYzpidohHKXZzrLvDJRZKi9u",
  "key3": "5jUuikVkPHa78YFUyWcBkdgkG7DrTuWCksw5Ew8fKnKfjYX9hvfNYWMWygvdh1UjoGet1HTWUKw5ddggjmVXz6bx",
  "key4": "5Jn94USxgVCWj968vWjemVcFLPfdqQCFzCoMmTRf8bFBGoSSGw2DQe699jo5z21BynCD6yu4XaXd6vP3VxYAkY4B",
  "key5": "Z1UyG1gs6cLPsoce7UonoTDRaH31vN9TXUwkkUPvEAbzGYrvdwzb9DNCnVwdqv1HmFUibUUd4ARyKQ14Fy4NJy9",
  "key6": "rT3YZw8kTT3gqPC46RHXfRfQzA3kzkHF6UjWTv5KHo6KEhEYSRv2tJPsC1knPHadHMbBY8WPmQDyfoU2ttHAxdB",
  "key7": "5TEg5K2B3Gz1jy5dzmFYmuFoAu35169MxDA6hwfLVQsUB1uKRzs1f2T9dUzMK2kPY7i7aENWpTzgPVhRVNvy713",
  "key8": "2Z3KUzpFtP2R81pYiFHM6geL5VLbhr7a3BX8dK8iYTZkswaNHzcP5UTkg7gKoprdTWwcPkS17v1H47MFFTkcbWm2",
  "key9": "5PEKDWaXk2Cjk38gNuDcTx3PYjMk6sm9SmcTTrdmX1mZPWqwugLUKV2t25j88N5Ww6QQTHrVuwq5LQSNhNxmX9LZ",
  "key10": "34iQAY63gr5oKawTsWowujndvPm6dUegFKkqaBPVkpvb5zW8ZX3cGneF13FNvcbDQRqmu3sxTvnsUJUzeNGp46H2",
  "key11": "MtC3ZsUJGEmop6pXJ4kHZLuiB1NuBES4CsP9tQiYV8Rh8zWm3TFRbEX3397Ydy3MfbQbBdkfyK7PRegKgHB46Gu",
  "key12": "5SKQpNDQMJozeiCCrXoV323uvEULxoXTxkRTpP9YWWJrozsbcWRcnAMEEAfcwN6Wbqwqm8t6eLq7dtUTxaJd7WUR",
  "key13": "5iSgg2FEVKp1GfEVcPzmPqmTvvmLi1Gb7bVLCL5Q2pMCozG6QrLb29P2iNrrSkHPNBSwVaWiSN7QDJcWhCwZLwKS",
  "key14": "3ecgWGnv94boxeLCtcHGMN9nUax8Yiwovubv4dTYbE1SLvwvV7KXrxd8v9gZ74jEWMKsHqJ8zaaDTfd7MrqJw9vF",
  "key15": "3J25hFRwa235nK6X7Hpa9ABdaTNdFn7vQo1WrFvTLC4AHUT4Db2somy8pvcqNfsKfuYRwPch8kGVs8vUM2B8pH2M",
  "key16": "3roRynBw2s3FVEWAER2oFW14n2xz4PUPwEx2SnRqWBSwGTrTTsr9ttmZ4kqi6La294pwL4fc6xuyTusyFqsNtBQk",
  "key17": "632jHrQdevaor7jhCwWfv6LXPNLEdz6YdcRKtocJ3doq2HWyAmztn4RLZSpPLYNz8BD9vHPPpmzFKcdX5jc8f61c",
  "key18": "2AknpwtV1Hw7kWLYXH4o7DnEPFatGQKisLMCe7DFQRPVeUgvoCksx9AFPuayHoU1aVskZYCmdiFUUoNJ4cV6aZWM",
  "key19": "32HCM8xko2gc3Xro1YxHqay98p5uQn8dbchZhsq3WEqspwJH6NnkZL2uevrgeXzZdxHjwaZyYZHSg3cikYPMky8i",
  "key20": "5QgdhcTr7hB7heghUv3J2u6mi6xfyB5v7diZ7HZSqJyppa8US8e17Yc3R75BWKhJTvrfrm1sH16dRo3qZYVje347",
  "key21": "vZUkJAxT3wdNjhYJ9XFHyXZC8FgXGAc2N7gNrrLkCxRwo93PiommVNzo4dDYc53AgA6Bks6gkd83zx3GBG5w4Vt",
  "key22": "k5pLSch9Z1BhQA6J1NzQtgYwzisBoahbqxUzidfTvG5XYNJyoeTxNg2wuLsMYjAvvFShph9zKAQj1qRjDgXHSPH",
  "key23": "2JMQ5DA1sETax1HR6GVgs7zJq3ELNYoDWVzV5eJ2b9YiTATV5ZqzWeekg7RdLFxw6xecAfCkutkhLVnGXqJ3htPF",
  "key24": "4sNWKJULDxjD8BiGDMC5HeBVtiifmErxseTRkqjtdHCt8sXtBTXfksPhMkhCfYNebBdubPF26sDBoNkAJGfyYguh",
  "key25": "3XAhbsw7nwV9oRaRaqyGw6NwUNMm35CCzU4qLcvEwKAv2KWKn8LrctXuYCx7U27FAAdYqNNCYZ2hNWH1maw3MkX1",
  "key26": "4XiFBTY53KGm1qKXieg2EqtUnGwDqYZZ93XqtCG5VuUU6ho6kdcmRSVgsP4zUszkRi3vCrZygQYwGutQ4z7Vj6U8",
  "key27": "5uF82Sxu8FW12cR53GfLZAYZka7iQCKbP5mZWXQWrt6FKW1kTZMQSKpd2S9mAbCt6bW4EngnVseXhivYQhqEXkZo"
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
