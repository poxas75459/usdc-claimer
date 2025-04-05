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
    "npoeJfk6DQdNNDTWhLzkssFRM6rWpyn1hptpS4MqWAGKZbHXBGu9xmQH2m63RVJQ3k2hBY41iZkuu13z9dSEVQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcxGG7YSWiLKAMgHYeY9QRQoP7rni8pRf9L86Bsa8a5dsFveYQ1HYuFgg3CpqLMHMH7kFkpEVP5RoVkRS4j14mM",
  "key1": "5hjYDEJx8vb4DL19dZUL8YzVZhXiUFmr61FAdsiXByYpFb5Mm9CaD5fF4N1Af9yYJPsyRTWHBATWebw1dHkYCPmX",
  "key2": "578bGe46RRUhRcUBHqCu46tztr3BwAGAjvxccu9xRgpnKW4R9gLmYtnm781dGiJNC5JbdxYPrrEnhEtSofgeQsPr",
  "key3": "5zXZnxWcfv91td7QhMhbiJWjrcULaEEAtd4g9em57Q6QGmTUiJQ1bkjgamkyZBwAXS4bSA8Xc1Ytokt8LshBfXoe",
  "key4": "3ZqFKkb4zewRS113uw9XFQMdVbPvCNH8Fr2tFrbtPVvc97r57MmuLMmGSmKcMqFtAxKcgS2spZD79gfFLmnYFcwF",
  "key5": "4okBm6G1itM29NVLtH5hUm8BxUSZcNm9S5RRVdge8xMXiKVQa8dnZbCpB5Umt4SYJhA5rEyzHTVxfv2tnvg7oyma",
  "key6": "2Y5YXNkasUDFEtZaDpNHJtPca3sWKK5X1LHnswUMBVutTNBHz98CL96Cckx1XRiX4TXKYLEwYRxCsPAP1eLAqs8m",
  "key7": "3eJCyVCSGM9t62dQRziuLY5G34tctgPsRkD8YtvGC2DBq838ta5mNLGBZz9h9pUNM8Q1GJvpy8tiZS95QHx98oqG",
  "key8": "3pZStqeuGxGV8DuwMva9AdyUD1CjaVcyPGDoX4QnMTqXpRtVghJz51DFzxsS2C6LKuHPLFQ143PRQqMV3uAYcojx",
  "key9": "AaCaHH2NVtJow4zx7eHf8hfrjPV8WFnfnVaXVL2wE5stD52uL16zjENQnMnhmg5ewvggP7TeBeC6DhpLcGQCkkp",
  "key10": "aNEQHNAjP2dh5Rzd5BXJRqStXUvb5RjMfr9Gz3NBSbepVTxUtYwRZUstz7Z7AthTrYpgWYj7rHxsKDr1c8MP9ZS",
  "key11": "XHeBUvD6w27JPhd9uAAMMzMHtGzSqciMJbeAuiMSZtRpLjjVEkspyuHapoTEJY2nHc2S4oiKmAJms5nU5CyhaRp",
  "key12": "53dNWrKdSWbWEFjUHWNGFEnPPctz9tWWzWAib18CbeoggPN7XQcuaxzbvNRZfhkgpepygzeVexbbFZvJSnJFEd1f",
  "key13": "4Y2nJLFGEgqfYEHM8u4J28ozNL5FkDQbx4PtAUFUHP2Az2YxyDhnj6br7SUComnS43H8W5wu3uRzgKt9BJ6ybqEz",
  "key14": "4fvGSxpW3X59SR1xpLZAVdNXMd1RUJbSchJvYNoFfbPNuywzFNzFvf6pugqEjdkEUpKHELXe8C3HYZF6cgwWGPTp",
  "key15": "66UKdKbkzx77Vx79m1UHHEgqiGVr1FRh7cv8bP73wgLC8NscMvJkwW7U7nbVpeHe9kqK13qfY3QM89pQ4KD9diZL",
  "key16": "3sNcEeH9kJzZHqcCEp3kZ3mJU5p8j5tz9DvvC7fEZpSzxbyzKWhSA3i3wJXBAPAH8NJYBJCx5YsLesDbXjhorvgb",
  "key17": "2sLuyvEsQMaLTcqUfbWsd9hEbHSXAAHPVaUSgTT5dQdPH7j2BCkXqn89Qkmqq8CHy4YXZBnBRn6nDVEyFDx28U7G",
  "key18": "4baaT2Dts9idd4tYaqPqfJTWbFXsRCedReh2LzpHDKRS6YofhY1v6BXMgGGnmGSDsChPJkAiPMbQSzftMrZyr147",
  "key19": "2DE2vsfeZnojccNMdhej2rQNj4dgVm232yHi2r5jUYZnmwpYMh4KzmKuYhKhC6Krwt5HbhnNg49MVue6rEsaCaQW",
  "key20": "4pzFkt6gA9U7KtBpFxVRXZbSZiiKJpT91DPY85euNh1YRGG1oCmWNdDGUkqx8U9UK9UNDvxe5Um2ZsALNn44Edoc",
  "key21": "NFmSFwyzcXZiJeryo1qthFUxrSXnpZGZJJuSaWCq3C3ckrBjNKSKeBWF9ZcihNcPh1NPiYG6EEDNohyrG8kAn1e",
  "key22": "zHNEKr7aKBuhHSMRu5BueZrvyf6XqasWvdqxjF5XeXAwchLD2vPgG9QXxApnjubnRDXqFp2Vkm3Z9agmBkaNpj2",
  "key23": "2bPXDc3F5PTrafHn3iubuymjbYKEWjX1xRpUPpjDqZxyiCgwH4XUgKUiDJ7yfaAjXbX2x8oDAFJWG9V9yQFfrgbp",
  "key24": "4LY4KaZKMKj1bXEH8o2rgj32w2vbjEobHpsgdPbgvmyTJaK8gw9nUhUuY5FCSrpWcUpjridqp2ADsKJmgzY6S3Yh",
  "key25": "3kSqm3tD98L5mHRLbHcJDsiBL9Y9wgP2ZNCh94bXsq9Zpz31tkobzP2Uf7QrgSpJeSaVv2iMgZu2KvvSwQPAJ7xQ",
  "key26": "2WXAMuG6oQcnRys1hdMYSbTUwDAJ761vKVNmebHA7BV5U6q7wapPfNC7PJT3CyjRsdc4w4w6CP9HGFaXnV5UZYj8",
  "key27": "5263rbCrExvuaKb1FEzaAaXmjsS28X4fTSKLer5T1u8kjkcsExPP9dDbotgjfV2B46ekJ8xSMaitZX87DPgwEYDp",
  "key28": "bM7nv1aUL7kYBkCTmauSn75qoWsZEkayLVipJyQAMtsWENfAA8vf5dFBadHkJSWVgfZiuLXoU1vggakfS5GToxa",
  "key29": "rHUnzQCFWqPJJHvcXkDx7qCq2Tuxo7XBP4REQ71qtMFb439jtToHez5F21HU9R4xXa2Ed4KKNkxLyBF6pGXmrmH",
  "key30": "5ocjDseW8djE5dHYfvTbD34kqN2pnEEiuuCLVB7YFGgJDzZdCm6huSDFCnMi4UPbazRvSUPZaor66P635j4Yj71r",
  "key31": "53fzzuMjMuxgeu2QqsFE9Q1KfyBu4LQszZLytUnU8U5iTwTpxxE6afZaboRmD2E5pqaBW3urZgHT1BhLdtxoFAWR",
  "key32": "645qmsS1uhc2r4kmephPhZHDZ4wZHbkbt6mg97F49U2FiiKEmUNzdjaVPt8rLWJ6chthchMc6D521KfZZuA36uq8",
  "key33": "4twKUzmcgoawTqQFeDj7cBa6Lip22HtuYLamnSBfj9r3BHzzU5PR9u4ANn7L5zc5MUgZxDPwfERSymndC1xf1J15",
  "key34": "39nAhNLEsyLsNGw4N56cbHyFJjkZJfGCueWmXYSPWkVf9c4WcjHRpwRzLdMZU4rbKRpoQsxgRKGCjtSnjaW4mpMc",
  "key35": "4wXVPj8tHyWvouni1FJ4Ctb8wtuDmHAqRPeJ631pjHbj1rwoKQvHFdUNaZWHfipoTALKTxaJQWawAtyb3ZUekh6y",
  "key36": "35hDLNrsMPxeQtVDAeRYARJddniq4GiPs2xP9VuugfEc5sKbYBiPvGHpyAiy9jEiN1UdhJwFXZY9C6puxAFb5MHg",
  "key37": "2kwUrWRVYG7V5ABNKpUu1B6yD3pURvEQXDvCpbEDbHWXfXsxo58uGUGe8irA5sYih5N91FG45NsLtZZfv57oXXyj",
  "key38": "9GnibExjHUFNYCDLkXHw6CRzZJmL4LzWKaGMdsS7iq9ecRdBYX1zj3cjfXKKKpXcM5ExbBFZ5od79FpCMgoCSTj",
  "key39": "2E3YZSxDWW56tSDs7AHHbdCKzb7gwtvSmb8uicdT2tS9mRVYSAhmJvPtDnu9fcMqb92TZigGQNhPuZ9PeeqkdVMt",
  "key40": "5HE2JPQAg4foFZg5kQqJDK9dYxAP2VGBeZpmLs5Hm7P5viYfR94N9ysG3Y4RGg99eArL8yipPZCP2pqcGV9fUKKx"
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
