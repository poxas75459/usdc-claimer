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
    "66kzVjtY9RE4HsdXJxsyjCE8hb9KzFCppzfKAqe6PcCdJXmvuoWU441CUJZZzUSQsJZGJD8nqiMyWHJbwcFWBKar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yrCVLUhPencu5qkGPAt6YxQnDCxCkVGkcLpYsDPJNjPz2W6DjTwwuHmcFb6NzzCN6fomcW8pqjoqP99VkFHpMCo",
  "key1": "5WSo7V21un5AThcMgXrmr772qAAfsgGwXK8VTsmkEAw37R9f3ZNtcf7kPcacbt8pbYTJJE3NnqVEFEKtrDkfGURP",
  "key2": "4SH6EwLFupjWKvJCxLXa2N3FNGYVATzoFpLperfnVtNSwWZxKQvLyGTAfi3DfeGtb5XkscULiq7d1GDKUhoJuieq",
  "key3": "MTPdhPZi8gsrJgQoxZ9cNuvvV6nmD6x5APHgAG6YCKU6FVJ6JEPEBxNJKKUbC4oMjjFaAVLHvnXz5uCqgAb62aY",
  "key4": "5Me5Xy9nDsVr5Un7y3nG3GkY4QhpT5TrZHY9vGRDxMG8yHDjaMfBUo13bHrz4Vm2WWjF19DNx5p7yWyv5pWMEVno",
  "key5": "KJzxkNFuacUuhY81QgrHD6WY2uhPdouKqwiouW2Koa8kSmM1Ahc13ScKpvFFyxwhgsCMFDGZ1cfmVfG658XT7Ag",
  "key6": "2vS5W1vGRzdHUKnom6LtiiwzPzdXyhZTTJFfVZAa6cuH93DT5TkL1deMt9mfZMbLKVEjPRWVQUYZ8rbUeZ1NGNt1",
  "key7": "Wgy2dqFCNrUS8PqnNTg9bb2DBSypgWjN2M1LuyNR9PZhVVicdnuZfztQijamj1sWGWiRz28HCJ4xt1Smqt1GV16",
  "key8": "2RRVTEoX7SfAfZurvRmPSiXKBZdwHdsrG2gSspjSBp4pHX5G224ymG1K5pyeWAD4bZCggnhmDkJ3PGeAN3rxX6cF",
  "key9": "2UfKbP4QZWY5b21k9wnW8oYnJzsJsnYtAR578PBxAFx4naF99xBMoqzTWZD6VLaeC7xaUrMcQPykjKdTf1AJPpMP",
  "key10": "32AAmVjh4csxFDXyyNVmjEmsnzN9KV2rPtAK4EGS1zAbaMTmszLLxqBu4ow9xw5Aunxh5As4REe1jC6ybxCKkAZJ",
  "key11": "3FP34Y9iiNB9x2TsyDoUqs9MmxbFFvSitdevxoX55JA2qCxspiUP3JJ4TWcbX9KX5rZRg79eEfr7ubM9qRfVppz9",
  "key12": "5LqkR14Z7FfD1GsmYqvu8ENkHmRbZBfDCYdsLqBU8ZsaT3T8nsVifyUYCrPu2ySo2mksQi5GuNEE4fGQAq8DSaZK",
  "key13": "4ikFj13RuvXXekjKUbFouSrJDz2xeAALt3Xkxc9RVa2ZqyES582gN71cgmobXMDp24kc6x2gdDEjHaLoc4QSS8FB",
  "key14": "2bYsLUSYTGghQpaQPbsocCM3AURNVZGTt6y2wsm6TZcfxNgTiDUP5TPvsLAAZxY3qm6KBMcVd8Wh4RHXxopKWSYf",
  "key15": "39WVigs8tN9XA7ocyXYsywvvVTBnSoSkLGgG1S5Hsn4onqJLu5iAktKnXkJHMXioyUPuL6PvmqGTLaQdMDCX5yrj",
  "key16": "hBhtggq3qbzeY17D6f3G9YbGoUhvy5nJRPy9onoajSLmjmB5URm962XLj2iHjGcnYa7WYbxP7BJwUEMowBocqYg",
  "key17": "3FzQQYUqvq5AiwmVxtL8cLzoSnXApUHyzZAL2m5uyMqCXiwKhRMUbzg5GA6TV7a8WuoFoGZDX7w6Y4ZDGRhgpNVB",
  "key18": "BiaXp4mfp5ZbzvRZbSn7QZ8HSx1vjBGf3sMB3s1Fq7jagSkntikEaGesUL9TBqA6YKpftZEf3nhMA51RyidGGPN",
  "key19": "3cQ7gnH3btFaGgTXh6kXuVjFYJtpFdotcVTJz5gc3SJYvSSirbww8YPX4MNkR6nxZxREvLN2e141sMYntuyMiPwC",
  "key20": "sCcPkzQi58Kz93MRHiwGPd81Zxg9J3z9VWrA3i4vfqijeQ1TCBiJ86S1CYyZYxeN1RMu3qGoW4VgSKtHednjdeE",
  "key21": "3fXa8KFKMDmoi1CBE5yFjjDcxsRMiS98SMj6ezUDzhSM8ivRqSKbvwNsS7aDptjTLDXbe7JJpeEZai3XBq173zSx",
  "key22": "4CtkB7Ct3GemVnhRTxQ9mtcyvarK3dnusfpuX3Hh2N7HorXuHfcCpPVfQfbp6AEePuiTe9dc6CtHdkA2vNeygw7h",
  "key23": "53r9Ey3MuqxV5SKbiaunBK9t388Laf9aB1FzJCtNY85VFDxHiNacD9t2SB9STeXGPozgKNhrzS7myGKKvMpEZjv8",
  "key24": "4mHeYRFzkTPYAQEAX4HNJi7UGxLLy68ricV2ofSLNpXLuZXZEwH7wGbQtPo7Se7oTn2jLFcPbv9s9VuXg8DqiD3d",
  "key25": "4ZB6eCkGyEaoLHn6E91tCx62UFikcKB9G5DVsLYrArbK8qbrAeynBwwXF72oS5JZUdYcNTKA3s3Lha7iCduWYccq",
  "key26": "5Ytzp8GNzK2Tk5WV5NsYtpgUodhod9eZUJJUrTNWSQXZVDCrZNVkpLchhTWn32AELAH6jz2t7f4z2dnhJ1xRzwzd",
  "key27": "5nBTfvjxvsNzkUhKHJ8dVcrV9Sp4immRq72Yv2q6JitjRGSw6GvqYiCLHpYaG51K27sAKbrcHp4qxUUn1pHdwVrE",
  "key28": "4SDQem7r3VXznXF1yWjjKVKcjJbGmict38zrXcULswxvfY6C95FCwhRAysfgWeMkmRAvU7cVGpkcfUPZtRo6r6cp",
  "key29": "2pAwMnDqbG93McJ5H3PuZeeN82LR94B1X5ARZ6F2UDQETg5tAizTH9mbE72ePnm3CocRoFYLDQyBaGfbF5KQYjFH",
  "key30": "48h38WtbEzB1Z6ERgFMDfzi8mbN2YECfL3C9PAj9cZSF6bbWGieSBrdgNbv9s1AhhzdxhvKVfoSr27Z3GFXzSVj4",
  "key31": "4optkv1yT9NpBvSVz8un73V9M6HEtvBqQBCWRJA6V7uxpXJVUrDX9PNcaq38qi55FbbzGat5uRf9bzu7RbgFJVEq",
  "key32": "2Jv5SaY9HSyxMFHwM2suM2EAs6gySzAXW7UZi2eTnxBWSPDSGiMBdRkJrpJfZVrHAN4gY5ptWU2dVqNFBArDnjTV",
  "key33": "4iD4my9fMRLWSNzq7jyM678fj6g18iVknRSF9KaVBzWivBG8nSnJqnATTQZkTedpKHvKMGk9tBCWRS6b5WXtE8c8",
  "key34": "bpeKmy2ExZ9Rbv4gHVorpgHBqmWBTbYgb6YYDMrjYv4Ht145sy4JEPJ7uYMoDRGHBNQF8sRJ7gRpz77kS6F7p5m",
  "key35": "3UdrXyTVcj6x91fFRYYVpswGbT9YNEreYw888ew4KwWf1WGLTXmVjiKVDKcX1Xpfc9wt5StSMq5yyxXGsGyNzWB4",
  "key36": "3Tn4eahHJLFNso4vUM363qYW8PogiTiEQSzjHAxQGNT2GcEGkWLrZe8tdb5BkFBf9JDjM7DXZRQpUPrPUSpgzwr1",
  "key37": "4Bto3uAM85TrrGiiwxw1Nd33jdgQdPaYXJUwaz7KHFwUSx7WuXTC4aHHVAFyQvZwdJEH1269pd8kyFCvzNTR7duy",
  "key38": "2gsKpLQmqx6aCNuskk6Tfky3EarXTVAKjZHfDtpqECKYc4KCHJpSuQtTYmntf1dnD4Kmk3jM5xsYAdUNYAK7RpV6",
  "key39": "5oAKX4d178KSAdXe8ZjdJs85aH1Qiz2Wd8ipEjS9MqCVCEx6MVdtZDY3EWHDh3b7TtRqg9x8F6Bbgne9MhVSvbQ",
  "key40": "2rYgshuJPjP6QMSWVamdpf1So5HKvkcYaMnmcXtL2pW8EfFA3SkiTgqzWNxsUMELFMdZJ2K2281sZoSJkuAR8FxE",
  "key41": "5aEad16vQgroLQ9KwzNw1LnwGDWez3PwDuJNPijHNUMvU3ktecSrvDWseNi6ukUq4i4QqzxShBKC8yocESY7sd7H",
  "key42": "25AGk5R2CUfQkXkJxBabee87o81wNTCEQKqmaTmqHDxpJL8Q4DHjSmgdg4sM1iZoDNe2SfPA8eDUY9ymAiDwnHxB"
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
