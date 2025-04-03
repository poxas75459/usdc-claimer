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
    "Nc9rgqYtLAvVgHfSmEFmkmxfVvLsm8ek6i2kaJh1wiM3YR4GLDfdwSGaWs9A52Ce9yUJ9tTxVBNaifNg3zvvBfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PqcVnNcnq44SomkjuL1JadJtBMJjdCt3xv3qQ7yVaAaGEyJPeDxCJDNSHGRdj1LbPvgn6v2ue5hoLTxEFtpHByp",
  "key1": "2K9CDusiqVe2hzeGsxmap7Ni8sjacGP1CuDXEpMWkJWqpSWDQVt2i8s3fKKFA7H1U34kSgkSEvLJzcNuKv4jJBqf",
  "key2": "YaYWDQeJQCG4qCTDRE4uPyJ7RJQoNyXGr9guEJHFYjvF7wxL5noh1hX68uDV9yQTZGhCpgQXREiBNEMFqy2HPuS",
  "key3": "67o5bBdqyfSRAaDfFEXeWetQgHSV3SeHwAr8iSZCxYrKyCprv55vxNTriBwVQBmrM7h68By7A233xoHFH4iKBeFB",
  "key4": "23iGycKSxLVAcjiN97k6s4Voo7qpTi5JpSZewYWgEuTU8i2CHKegZuvbNYjZnvYVXgLP8GknPrm32WBL421NcWbP",
  "key5": "37K9LhwzP2MwdRv2xZiKWqVwKoixUQ64ZUUeL2PAgBBtseFPrYxr72jJFJc3wm2214MnpmqbVbYD4HH4UgGB6qiD",
  "key6": "3vqFQuhcEorvx5sKU7cfZWoGN7ueJSZkfviKxSqSrbhGg3oz1icZ6vuvkKGg6xJSzepGEUkJGdKDXp7iw9DNLdkX",
  "key7": "4vKHDRecQCbK4mADYs1bA99f1byB78dW991pUAUH7AMx9Z4pE6xzdQyKuLVyJ9m1uc5GJRCv1nm9GV6CbakhB7k3",
  "key8": "3Q4QV1MUBoKafa6X1sNjeCXZ4kYUiyqhRnH9PUTcLdxM9y9pqJCTgpJeDpdvh1tyGU65DLkz5ezo53qyRHzg48UM",
  "key9": "5nGQ5USLkGjTgW33eQHVPAQFmAj2FU3nu2aFhbyz9WuZDRzfX1iWg4RcvPXT4dzzPy5faA2iQVFkZu9WczJn9BJR",
  "key10": "s6n2B7bSJvMLKarnxsz52vGGKbXprT7EJ4NcmfA9PYtw9eMZCvfRfcroPdC7dyjokNgeY9mhpwYEttjKks3Tktg",
  "key11": "3vfWYK5mjAsmRuqhDhdqA5zfhnBPvDUyhjkERqcp7MxZUsVsh7nMsCgkPsXp46txptZTq7nfSZDnXvMz8cLdkRUp",
  "key12": "3SyNeKzoMQpibuud9bZF19SCySYUxz9ATzJAZdnBPEQ7vjWL4R7iae4Az9s9vTbMopJDHXBnAqQKsScvvTRhqZ72",
  "key13": "58ztiDt8Ls2iQ5CD9YvF1fZWC9rgn1YSpBDSo7vqEURaFXBzMj4QQ4sSMCuLr1mKguAisvcBWbSiMnivvjzUg426",
  "key14": "YuNF6FjHXyv8UN763STdgqZoJuLvnG7Hg6aMNeeG963xzwTaLQcQz2rAJrCp23Fna9wDMouatw1kxZR5YqbKEHB",
  "key15": "5H8pW49e6GeP57siJbag1i5LhTXgDRhVWeh3MfC4d7LSfpvRmUYZtnWyjo78Y23F8UkePMfQUWKL9DgWt8bnyvCC",
  "key16": "2HpuKwNukt9BxpyvGeaq6B37M28SiG97DKtGrVkhcSshPDtnve9tSbxWLgewySkRh2ZdFixtsJXxpgsQ8AgjBkhs",
  "key17": "2DV6iB4Zs4xkRiAnGExfN3TC9ngESP7xCYfNz4vVsPWhm449yHFNM9yYGfhpgHeQeMgTC7mm2yMZFNfS5zp58xZ9",
  "key18": "bBACMS6w9r9Yi6kVauocBqSYuQRDHaeRF5tAAB7Mg3SV4egJjT5D9q9fMr7ZKXX1JvhQaT6z1LRsCfeAVbJ6acm",
  "key19": "4GXC2jr9xjDUtp1zjAJDjtFXSDHYcr4shAqgzy4RSt5hmW486ENjcw86EegRK9NoDv84nguAp55Rttza2DoKwqfU",
  "key20": "3YfZHMS3VX88SR5rwW6uw8z6xWXUHsWFrW73JB1bPZN4RWu9BBTmVPgpUv2JdH475iwax6JGnpZVNwn3DnppVDxU",
  "key21": "5uJG31RgmKcaUHvp8vP6HVBRgcxY89TvpyQLXnwwcSv9nv5uRw7Bv6ubZFex1VkqZNKFYXyTUzFZgmZL2pCEEHU9",
  "key22": "4KsuFaXRwrzKrRTMufQsG2oPhDWzSP1pXYdpEpT9r51dyX843FWZCBN5n6arx9HbmsXSAFzwiGAUXWC4F4izTddn",
  "key23": "5s6iaph6kgDL1zwtzCoDk3uHA3WKvtDLD8AvrzyvNDQFhskj3VHDBRFoXU1RM8zPgbsK6MY9pQ3EcDpRaGhQbecS",
  "key24": "3p5uaLxXarU8r51bC7wnzKbptfND7c7dkxGkWqMotxbUesin9yyx4FeJ9iJg8TRjUVn72v4MfdvkTMBjgmodoHsv",
  "key25": "4Z8Qx7d7uBnHaGsMDQmC9LEKp8P2QHR2418hoXZTZExt9qw1huXS6AGwmaxim5ErBBrFD7yYCa3EdtKA4gD7tFph",
  "key26": "2ccoWKerdZxkuQ3uf2ZRpFH4QWXyjEUR3wrZu4ShNGAKoDnc1pvmn8xX7Wh5pcPH4hTLKiaUrHYydkHCA98KmvqF",
  "key27": "3TrYnqNqtKUzYKBenAr47WeAjHwX2QBD8Jwce5dNy9ApJbyutRLaD7fncFVXTr7LSbzJaG9S5B6tQcpjQecgaGY3",
  "key28": "3VLdErKexQw2GnKZJAtnWvUCKaADwupqBp5EtVr6z11ZkyGGBRYTkNv58YvH2ztkFvbGRJuVVnhNumhNXNY2atBV",
  "key29": "KFEmtiDif1kGnmDQA917frJ2CvxpxxHn9XmUcnXvmRF7N5njwB5w9ad7crWBhRsgubRQW22sxXq4cgdWWDqSXVN",
  "key30": "4ZqJhwZ7sVSFJxhDLEj5Lpv7KAve2jZnwzDYR7948rjB8HfmYaY7EmQuppdKE5tpQ6DbBKBc8C775bixai4GeQLM",
  "key31": "3BgqABQKd86UMnmrC6dZUxZ1JEAWipgamXiGPs2ZM7EsejdgbciBCwudb1mCSxB8nwgUUYgs1mH4fzyokbSNwjsM",
  "key32": "FAoaCTEB2we3SEFnvqW5aAjxLb6bk7Muc5AUr1Y5gVKTrmo9phyLqqMSJ38qiy2HAaMGaNNQrpctEpMdtupFn6n",
  "key33": "2V3HKycrdiran3ehcpPi5xCFBmrbkrSMWWffzuyVNG4GTboVXzmk1AMbEYujvdnfTvfCu3VUhLYeau7dYFioejmq",
  "key34": "iZkYv3t6qXwzdwtsFhDX2FXDWFPGc4qhWfAwyYvUxNsg4jRfBw1d8px5ZihLTq7LKb2pDe1KHgpF1B9hhh5rAVc",
  "key35": "F9YWP6fwFHtBCbw5GCotoyt9EM67BfcscNC5iJxM2vLHYriU3A7Yqrc31hq4cViZPgM6nhdMSdVkMpPLDUMipWT",
  "key36": "5vTHvAk12cwqukCEekjZqgAfbt6ZXCWba8BfE2Wa1JLkpsX9msaV1bEvjinza7hT7Jbb66QbAfVmuqru9BTwNfzj",
  "key37": "2ebc6E3JwfpJghx65yZ5gc5QDNfLuDytCU6iTjzuq1jzpzEHmgJYeY3vu5mpjCgX5KW2ZaC7yXjezNVZayKLP7af",
  "key38": "4Lx22T6QUsWTJzRXJ78Uy1RN7cphs5w7peR32varNZiKmPQfv8chYPrVjd5s3Pjm2amZTQB7KZXgph3XYAvrBWaT",
  "key39": "2b4djRSkaAJx1fZj52qy38ZdL3dTSv1UV5FShmzqnvPhaEGCnTyETumYBkibr8MAEKzEwkPaXFQJX7rE7YUCHtX5",
  "key40": "SmhiwtREavVux6jfPBganpfJiQhBX4wvkAWfJ6RvXhmrkEjxFoRT5H9iKuCfUTTsL8tYujezuBaX1XmdxAGG9Gy"
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
