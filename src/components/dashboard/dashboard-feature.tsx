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
    "2VbpiJxg6TsgnQKjW9gv7fiy5H46Rw516uA4u4FETWi4d3r1W4BS3MHgjS8wsS2GJsEDvKeX3utV6xqhhc2FU6rL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gQ7Zkwc3yk5EgiUAf44WxGQ35kuQRPJToSJ3unWdrJXbTTVFV5Q8gj8rGAf2G8YrcDssDxJnGnv8vkyR5GkS7vc",
  "key1": "64qGTXX4ByJwubg8872QixhiSAMVWFwYfypJmnsLkYQ385b7xQiZf7ctZBxo4rci8o8BaZFTp5GajE5ZSFfBNaM3",
  "key2": "4Np7jcjXQtjSNwFFGNq2QSoY8vxek4LqJY7jfBPG9rNLngLfALQCjq2uhKyif6sW8EhAUpzqoTbrqdMYYDgepfHR",
  "key3": "4qBCQ7RRsAoAjgDMeoStvTkwJKMeYsNtXTScfvbXHgMvG8Gs2oZt3pwYRdHHMDBsuHc9HcJ3enrdynyAEYbzGQ7g",
  "key4": "Lbi4xVN3q8wzRrE4965CGV1FE4iAuhYNdPKnRVNiVxEKmJDJt7L3wGD77F1yowwz1H57VrAQyTxNoAJSY6SkRGm",
  "key5": "3m5UVk9xnixByfF7fBkFtaiLB4wPsnyZBGJTfWHm4P3hMmhb1RRiKup9ZLeF9drEEREUhkzrJfG1oDeiAJ3Y7HZA",
  "key6": "aFQZmnA6G34r5dhAZJThK7BoagT57FKtgEA4HKzn47gWa7M2vctHZtFfCG9PPqSqZA4vdHJSTJCiVoo2FEEp1Jv",
  "key7": "3Lap4BnFAHk1A4FPrV8UKHyZZPhDqJSskVajMW2qRsBY5Cr5i73h2r41Wqb5YhnAwXduwhiowJ2L8DJpDQ5LXCYa",
  "key8": "72SZappupkmvDqEbprrxMSvki4nJxCnJGdag69num8fXtFPVNF9zndcphwzDvYXJ7ViUN7SmW5pvw2ZX41uBU9k",
  "key9": "3KvsTJpaY6W3xsmB9YutE65jsCtBZSoScipcbBjGkvS1w9ST9oXhg6G3rWi5xuB4bsAb4g2ZTsrdRJJd6dFGtnKR",
  "key10": "25BAuxTzzefKhy2quxWbprvBdx57TFD6jyNHPVyzE2qr3rxYtaeEyi1fETqMZKWQvjTtNyZ1MgdpAuWShN3k48nL",
  "key11": "2VNwJ26qPPaLgtu6qiyxsD5ewxSC97NdFdXL8J69i8GuTgchV9BkEjDUTpzHrTxMjzCvyRPsoJi8wUA956pPLss6",
  "key12": "65cmi3g9YCkJZettkfNHBYTy3b8MjqKhMgUtUCbJ3mTGxWQnnw3J5uaYtEa5KGsVvd4JdhYhPSLtZ8zpMcKqtDTF",
  "key13": "4R79XykTz4vBmRUWKDoPpxxfafJewtdnDoUqvLp8DcCTYkyTgqt7ScGYwjGQRkGzSa3LijSfCAMaAvLhzNVcA9aE",
  "key14": "aQAS7tHnuxKJk57V9ct7eKqkw8xmxnRL8n6w6vNjRvUu9RwaHNfNMyAYtESgFwKr5a5Tq12sT9BjBPdi6oxFt6j",
  "key15": "34tABfnsnL5ExJMr7p7kAtwkZqNwNfpMch8yudj36V77DZCfnD1M6qrk7iw3Qps7YyvftG7QuFyTFiY6KERWT9Yf",
  "key16": "4pxzzQXYcECjA84WKkrZe2hC8xEBLbK9pwdV2WNMvFXZMbfmaFiXUhKpyfmnRRyRL42m6X7hyznujGs6bs4yDTU7",
  "key17": "2RCRP6oWFC8ZjkSvQBFFPj1Pakxy6QKgZhUmwKXN7nchRbBv8zUue8Zd6vXmkPYjsf6ydNpDVMNeVg3sNZFU4T1b",
  "key18": "5Ljk4ecJYbXP9TKpv3RVVRYQrP4azXuhyNXQh9mbJHJVaQ1Sd25XpkZwg9dznhjeydqsSGozkALCrdS8mNszHHyR",
  "key19": "3gsijFfcC3e43Bbte5LiRTor44g2Tykk2HLa927MQnBUG8gj5FJrboxkvB9gCRkAWTrQ3GojBGTZhdU3pqtbZsd6",
  "key20": "f14qKPGzAbAmUGUwdEhrz3EvZr5k1caSWsPAT6eVUjURpzndMYK1dhXhQth2ZpzYbtfDxbZVfn3hVvhYRP7X3Db",
  "key21": "2GWczBvUmxmM58PFBYDX1vVjjepgy9L6uAPSnfjLw6ZowJ6MPtiCK43XYbSEAHjysF7orziycUQESsYanCSjnRYu",
  "key22": "ncpHwg8rE3z67BqA2AsK4bxQibDoESExuHTZzhi7CAdCz5x8X9XxnnbbLem5Wbb2X2M1CYJfgEqBTdMQBsewhFj",
  "key23": "5RZAQt7BxnE6dXHkjCrShQdoh7VWNURytMZuowTFvN2HkugDzt6Yvfz1JsM86DbWCT6ADnqCf9JSegGEkMzwdmtM",
  "key24": "4k9BR8UnTwn29aSVUaBC5grzLkv5wsi6Z9WxyD2ky2CeaHGzUKEBfQA3Ga8dy9ZB6xKHHgHGin7cgL5nT1rtotbd",
  "key25": "QxuUFDpyiswtcTzjJyWNnt27WkoU1oQCJfb5xLq7T8GgpDF66nxQJkQqqkX7eYxsAkn9fyNoyXbTAr5Kd5ejZtw",
  "key26": "4G1ctsftuYceVpH6the7zv27dDH75GnMFaT9DPrSivkDGNLwxfPPyakw8ZfmemaBxc5eSPbwdY2snTuPm9xwsxNa",
  "key27": "36ySwd2427U411exY58By4d9BsB6KacX1GxHjvjMFjw7wvujrt4mMH1TzAcyrqiq6rcsyMgtekahd7MgePZqYchz",
  "key28": "5mnhu9khvgZ4c3R8HhFp6tWbwcpGpymSoy2fceMSY3tu6i4WJYN78uRme7VstsnpfH88ygxYiMvtD46RvMe42Pg1",
  "key29": "64R3asR7phVMj6JEQ5QzwHTBdsdxHsbPMWxNKy4ZUa8DnuWpgPp6pdVycyaWmwmXNs9eZGfhrXajeY3oNAEg1XvF",
  "key30": "4AdKt8X8dfSWbPfwa96wwCda4w6TUQYdPRiL1cfYpBDv8TJSiskjVtX4NEjDmrqDMoMRBWDqLpdcEmxKLLz3XiDN",
  "key31": "4LC1yGE1aJLbChXxwqMjJJfj8NRAdQq7mxBNExTzXZsTg2tn3EsCwiQtpB9YnWkRHxLbh2ai5gjUxjFg6V2D5iEs",
  "key32": "3fffXn9FP4vvxCBFkURKffqFGp93JSmafmvwbFhte9SUNSWDMoXHziHFLtnBGVPmAmwYnt4rwba8U8HUMb5vxXBT",
  "key33": "5iV5U4rNre3Yk1ST8dVAhjwRZtvadT33pNfQMM3dczsRuYbhvzrTMtkQHayw2fABSoZvPGcZL38zFkY1QcoCokKx",
  "key34": "3kGjCEqbf49VPuZ9pAjGKToAhAHk1d9SoqnwazoKrvNAQA7VdLqpnU3sQnx5wVKkUDhgVMkv6MQTZd41gM2qSETB",
  "key35": "92FpMPBuMXkpCEghSiGtBkve4qRHdSzPSoUJQirhZpxQwhyqvzvionkkeRPXRqDbcNhtfxWDemyLcm1fjwn6zuo",
  "key36": "xAwSvvgbxumcP9ueMdD59GrVyftDki4K8qXgw7io4x4ZaEwVX8k4kGPLZYeEAB3rnUB6nypAYpdP2qDeQf8hR8D"
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
