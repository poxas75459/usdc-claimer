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
    "3bhCkfmPQAVfdjGc4SX3qEA4RqV2HFPBoKv9nFmCY96MseuZu2Pxp6hqVyHFwUv2mGy7G83RfdVxSka9BWP8gtUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wXE37WFSEghReLo5DcRkghCLAaHuF6XBzT4scbkjKCKCmRv92FRfx6cPGzoPzFSgErgNpJLoYUyCKfqx9iVBfS",
  "key1": "bgp4LyKetpuGEt9ozVTbZF4de9qdARqZJCMvBmP7DWjJUymEHa7UgnpanrjMcviWv4vhKtuf7P1ER6sMWgra73X",
  "key2": "5FP3Wf5jKWVnF2ZrUinqmhPBYndzAJxdn3PheA92M3jtHShVbXiGUpiLmMi6ki1d1rztooVENrj1wKpeZZE47tbq",
  "key3": "4VGBVv7UfycC7P4rokZDYwNab4MvcT9r6j59sY23KG94CM7VeyA42M54VVSKmHuUmfExGFUTDfnqRuVqUTgc1mxp",
  "key4": "4xkGAh4yZYdwpe3ZxWocTiHdutqrfqCMZvXNfpiyxpJvPUHdPciDb5j5GxiSMMQyNaq1fadtxbWESnpcGMJbwrNx",
  "key5": "2GbJr4UnEKoaHdjVH9LQiWW4Cdz9hWCzTQrg9nxTUUxtyGfUeiG4qsqrhARTKpWAzvKTUJg3Cv7Vbhu3FgS5bZJo",
  "key6": "2ncwZBVkJPeJjE4n53dK6RSitGZ4mwR4KMvKpqGmn2gpJvuPK3DqqAUhW4HMTnevgiiSRAwY7anqh1u71q7L6Rn4",
  "key7": "56v6oxghbB2Xk76anw3TNpAjbGqNTVjnZ6EdQf8ZNHrr1fajifrRFmMrgrNpBP3mo74J7usKb6qWCctDeg1w1taS",
  "key8": "3ndkR5bgAfY7dFZ2yggheBtzjvCoevkVifqJu3u1uMkxb2ntXGAvdjzSDWEN3ahKgsuJb14ChoZhDdGpaSbKA94s",
  "key9": "2cidCvRpruhZNxE8tgrvw5kdmdrhkMujFyKu3qY7wGWUwSkXXNUzWwCEeovRGxoXeKa2JiexfnHQHZaWjagrCutF",
  "key10": "3mpraTrKz6TBMKozHrZJkD4wYEQcqvQPA52g7ZEQqWi57wi1EdzKQGkcPZvy652g8Ua3xHSEmFJ6FCkfy5WRM4QL",
  "key11": "5sWQYaMw7E1aMfkU2jf4WQjmDdr7PGLRHsnUJZR1uE4pN255HnqZwCYreupARifqgTdyA8SmeBHcNy7uyUQriPmT",
  "key12": "3ofcq1NGGaXmmoWvL5KzsfCEQ25NjiC2q2wYNABcTySHof9q9hMbawvCHp8h9itHWxbsr2N9iPwqbLbj7LBV9wuS",
  "key13": "NupcVw6sRa2W9qBxvc4y4pD9Lkfg8YiqYXQi8Be1azGpVk9DpFRKAt2FTzPVoED6TSc2Maz9nkJqe8uD4hEipVE",
  "key14": "4sW46UMHMDUgXL21KYTKhyAAy7BJdMdRisr94ZezRFkDNvhUhf8u7fjC2mKLMGZpXVr3Dw1Mn9UwqG45JyKFq7jH",
  "key15": "zT4QAHeXLAzsCATxVbwojZMdHMoWpidfd3xSSKJCcb4rnZNKmiudLAKWvou7hxrDPNWJCbVAPcAszXQKipHEFyd",
  "key16": "2DJiuysuTNPQHkDccG5M97Qgr3Y8njGGEhE66mK18mAxQLZakvrtTo2BsS8JkVZ3TFwZUeVFdRDCAaAe9Gj1YRS3",
  "key17": "64iULhEHazDZUXQD6HnhZnW8p2mHzVtA6xEvyNpay5PLVThEVDswo4XVPxMzGCKaB344at941pZiwnA6yaRJXbiq",
  "key18": "4Jh9ysvQKb521zLKG5FkofgraH7uv7yqTHPBRpioSNgwRPwCmzUYtjwyG9LV7EPjKEUpqQis6kBdqzDAtMSuZEK4",
  "key19": "5WN8H1RM2XCdwgzCKXoGUQAEReLnnSaLPYrnafJ85UjhgrsHZeRJwNLugfHJWjM7vLGNsvfZ1PuCtvsSQ2g2ooDA",
  "key20": "U7C3SA8pe5cvc2gQfvxVHNxVQjhsgmAaEBcG8QThFsRTGDxkoK9NrDMRjgB3oyyCJKZvq5rEajaG1FbCpja3qYk",
  "key21": "2hLNdKw4zAqZFhET2AfjZmwn9m17aKDyCWGiy3pAPo6kEYZEWiUwGbEiBHnwopSTzLc52SfCPmcLWx1R3JbZBzZW",
  "key22": "2kC1qmfaiNpz5nLtQAGbh61H1pJfi7ZkAEzGaCVMchDMQacv8WP2WttHNaZpqZrT1rVZc5Hn7q9mZi7q1VxYXBie",
  "key23": "DFRRYcxnbCcmbKAxmfW9LPMnHcka7o2a4zu1mepageYALcoEa4icsiweFZQdGxzCNe3KekvhijXBmZdYuLdq1b3",
  "key24": "YezuHmsp5kytDwowsnqLrp3pdCHTxjQLcTjnuWEeUF5RKFBi32q4cpF1dwKzLJ3BvUJtNzqkzaequHr56LHd2W5",
  "key25": "3ujX8wWh2sTdKFfoDozyeZvrrSRsX9DbQNeEvvCMmgnnwaXB13aJuECjAi9TG4LRmXtR5rZpSsV3rpQejMuxvsuM",
  "key26": "2Rsz3kRRXtY1cjdJRB2ykCdY3fHwmBkLdcAEKdrSnyxGVGGjK7TEaFgmU6fmjA8KMsSh6DFKHZ31ma4mKSnA4FQN",
  "key27": "3xVcXj3ctW93rwyn3dM4pkiTwitrzCMJv6aMynSPYJhNDsw2tLo47Vta8dYUaFnFFKn3YTnaMBFgDh7oAZbfZvEQ",
  "key28": "3QKkDNixD3bbGt3SHxwxU8c7jsWc6y9HmJuuUPJsHkVkungZYZxB8pzNzUbKbWPDDE29dLxKSLrU7MNTuHUBtz5j",
  "key29": "4pXez8SyvCc1UuDgGMJnNab7bCyzTGqWhSdrozxDQAV5urLKPLNqPfjfCUcswzKZnirn9goiA3WB5QLDbeyWMFMP",
  "key30": "26BX54bh3PGb9NXsePYZmQyfEQEdjkiv3EXnirQtxTAA8Bk1HnKBsaqFuXVwzYTW8m4PzD8PVTxMMpM8KpMxfiKV"
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
