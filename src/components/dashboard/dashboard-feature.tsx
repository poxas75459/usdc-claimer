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
    "5w6YB1fjRxheNkhfdtWqoqjRzWaQNmfZpkrdYj4GoXAkbCCgQqceXNBZSfXA59NWPkNGwajh5PvWTx5fnkZTbjB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnLqPV3moPGHx7ANFUxNRiEbSp3KEbNhhBs2FPcPZa4VFjFGhMdjqZSt3tgPf4FrgpNHyTcWXLkwLiD7N8gquac",
  "key1": "SSQoWSqDqdw3HFzAaBMqf5WbFm23QEWEiNXXzMB56cLjfC8m7tFaFtj6rkckYJgiyzu8MMGNCuo9ghWSyWfV2kX",
  "key2": "2ufBLHRaefnNcJRhrtgT4XRd791nHp1qcTTXnDYLFZkSoeCsy37oiUKjeZ8boaEfn5QwQ289M64JgKvsYMP2QqJ5",
  "key3": "5ERfmo5Xw4ntUJKCrTcz7uKKXtr7V2krBKaW1nRiFsQMmrfFkcnrpTXZD13FPJTeafdVV5iMzB9tCRME939h3fN5",
  "key4": "J18TpBCEQywjUWjTdCBEcwuQYnutmRVcsq1vuEw7ZLpWJZkFPoxAfERSTWgubu3CXNURTFtFqgsdQcM6wg7sdA2",
  "key5": "4PrAKS1HrjshjT69z3xcVD5vyQcBhopfvshyX7BNbhjbVyaYyhkhej4Y8cQbY9W2V7pgT1ikSrt7ZPW75WryYiE6",
  "key6": "4hWT97JWFfsDwQsrwt7zx8sT5tfd3jKFpcoDEmV6Wfy94KiRpfJaQjXGDP9SZHPUHABHgLdQPzXZ9aWUSEAz2yqD",
  "key7": "3mLDk6V435h8zYBRmr6oy8LRegdvcTDzAfPnFrrtXD8A4wSY2LG23PcJRdJhGiPQHrhduUbAmEZW1k8thqDGqnN7",
  "key8": "9wnmvXig3vpqfwxjbmo1TmY3sAcU7dPbLUc3RBJtupFDkfqhEHSx7RVYhVPsqxjvvYS9Tpx54QPeFF3eMqEh8xY",
  "key9": "2QAFGs5wVYQc2WLLydMv1tcGeDovGzvbNkozWU6syDtMR2gGwbdfvXGqhTbx6s439ZyYqN2HKzc9UXfKui1U49uj",
  "key10": "AE5NTWzvFCGJ2fNwRqHNyizCasF3Ab7TkrRJVGb1Lmz1LPYqN9VfDZjFhNmYJJDkLvFDDJMDxDYkREiaUhEnheB",
  "key11": "5Lc8D9iBxFjSXorJwEvvo1orrXMbessMxmx3ViQi1XKaPc2g6ZZsoAQcT9UV2mKNu5XzgxZHQ1PQ9eNVwJ3tCvVq",
  "key12": "3N97TRvp5mNpCoidmxH8xj2AGoRaUj29aqacPrTMPNhYeg2axfdNv1HjhkzeVdDDgfu834wZ8weMKPQ7VyEojnH5",
  "key13": "c847jFjM6WbREL6dUs4wczVbeQX2PbJUq4ZewW52BQEu1vqqNFSFTwZDAEbJ5XMbRR9UUas34P1KfHCr7AChbVj",
  "key14": "2qziWrQ6BL5M3t3nVDb6tc5J3g7QeA8WH2D8V7Vu1p5CeGi765Syv2CfHRJiyN8JUZdCsuBGgKKbeWWgFzjjnrPb",
  "key15": "3PLrWskworHifXTWhZaDd22M7troWrPUJSRizYuAhc2Naa6qQDf3iSs9EH3efbQidULZTDGXj5W1paDW6tpe7j4A",
  "key16": "4JhKvHDJJsnAo2sPZTRtRtZZht4pYbfQC2NQvYQ6Z2FE2F8JqWvYAPPdwcKimn9j3JARCcCeBEwW6sWHAX6rfHwx",
  "key17": "2dYgirLV1vVMDE8zK2g8aBDscCdu3NAbX3pXxTnWRif4ka8PvZahhJAKnphdAdkZJZFFw4vy35Gp9XmfB27ZMppK",
  "key18": "wxHE76XpKMz2bpN79CfjRA9gnir6e9wPk4Xbfjv8u2YaYe8uqv2DceBibzQGhXnZLYR1n6gwVVfLbNQBM7Xs1F1",
  "key19": "3zt2t51ZnmwoFBBM3hyYPkE9aESYtas4xThfAMWz7pcVBUPFxJgi5auN1NtCx3QTBsU34QYTUSRrHo17bhTbH5pn",
  "key20": "5erKnqv863dgcdEsPfcznWcciPJmC9a2i5gmPqq8dGqq5zoyfVUjSNxggaR3FDFQQ1YSVH9CTGpczoCktERoA8N4",
  "key21": "4BgVSo9FURF2anv37ofUr7G1VtnnUCrBMGnvZnQD1sCEsTe4AkgkKtfb1g9pDwckjKVjmLoxXLuG6K2AVwGCba29",
  "key22": "55jAyGjfjq3GXyZPNfTZMqgT7VgtBcnMP29SA7vKPYbPLogn5moeyc5twb1bKarmHkKHtHmevbYJYAWdTcx3x4sT",
  "key23": "3DPpmrQrZBwUCUgLoSg95kqgDkhuX9sj29voARQ1WV6togHNPy8RPfLxQdiqiJaRF2nU3PyueYmHUEP55P7kF6uo",
  "key24": "4URobhgGHVJLQAYx6z6g3ktumFoRgwPXYb1AroMnVqv6vj9yeViHYdNtyxLxUJ9v2HMuQKCSkUW21tqmFYbFVAn",
  "key25": "2zu1pAvvePfbejfUJDfrsFKBZV2UvGS7vvjA3Hmbj77qxeAxQZtCrTpQq7ioTEdTNPnEJRe522rDPaKCSLKojbqi",
  "key26": "4VDgSTA8zJue6PkNUuufJaKvkSsQ8mup2EpvqX8rgmXanybL5fYyDKzVT9T2HBbFiYnz3ofWuTR7DGKttrMnS3f8",
  "key27": "3PadrF859f4HxjCSMbMnjNGerQ3NJScKp9uRn2FBUQ5L6TRbvWWfz9SpnPrsmJeoqqD1Nvb2F9PnLDF1yg5y3Fki",
  "key28": "4Btb8EwNJt5JfwBeUHwefHrBVuDaAiqSU3sm5nxwHNJ8ZRafno2M7ctJHWiU4Fnw9drhntqiXwXWKWxb7RaMcWRj",
  "key29": "22ZytoVVB6AwayR4MmGXbDRnW4kquBXv4oxZXDd6VqEh7eSDDKG5VHhyFw5iWennYXrYMQxMsNNK2CbS4RpeBG2T",
  "key30": "5tPoHfT4JhzqhzrMXsVHe7eJNJWZMLcBmev6YBCNmo1EkU32QDQ5c1hrrmJX6BoHnoX14m4hJ9PVA7xGYRdDaV64",
  "key31": "XhxxXYNidLpQD5qnGvB6bkCCLJMXjG8LHnvGxyZcQrpTv5wXsnTAyFW49EeTzK9hnaeMjhtBAkmNVNfXrLdbfPx",
  "key32": "53ezxa17mnmPEGPo83wXA6hbMCxRDiVGas7GjQzaxFJxrKZJAsimAZG2oGStzy8KXNaLiNpzTX1Dy9QW7VtmffjT",
  "key33": "5iTQDWbZqQTaLDi8wGyNZzMQeoKxpPi6USsLJb488RkWmPYH2ALQJPAEvK3cHZmPpvcKmRkCxLrjeqRANwUx6UxU",
  "key34": "4RkCmic5uH4yzK7PVmXw2ZNtz4TddnmKgWupnrPgVfJxXeKepCBNqTRxhaVSxktdztYGHTMA6fycbmdqpciboH7y",
  "key35": "TjzYmZkNN2YkiksKMWQUxYC6ZWs4fXCu6N5iEozarQscozkYmTimwo73R7wHnuwB1reaxkoUe8DoCe5u6ZhBdLi",
  "key36": "3fB5Q6Rt5h97KdMDqgwAz18AHdPsEjENrsdHYBfoZCn2ZXPXPow71fzWbV6hmx3DgDkXwDmvVsSfAdvJBCMqHCyY",
  "key37": "3N8KgkZ9MA9ZYqbH8RffTggW2mYq4nzJR7ERANCcSqF3GsYUKe2f4fCzX3Kq8FiGaAmgf15qALPEVVvZeKZBXJav",
  "key38": "2WyW6xmWau3vJBjPV95L4k56y5LcGUhAprmS5SiGEQD7proAcL1KCYKhM9HGtRKRCNyhMz5Lw666RW7PVc3kjbc1",
  "key39": "4Z2njsT4i8Fob3i8gwATFYqzUPPvhE1Aqewg2hMAoRkPweXop1XR9FNagJ8ZkVKxmthuCdfscMmgWtNfxfqDLALT",
  "key40": "2pLPMDtbsTbE8oD3X2VtE1czzWaxesnk4xGT1aScWug3CC2sHACBD7AXgptCzUNrqfNVLKBFuBmwu6cB1f2DB2Da",
  "key41": "5dvRJh3WnTGabZUAZz2YaBQ1HtuQLM1YZhLmb9m28yMGnEjKMSpiJkgeKWYTVE91EmwP3H74JiMVPBX1Jgnn2S1D",
  "key42": "3zstAFSxfZbdzEx6a427MBDjRDawdTrT4WB4yc9wY4mras6MGi5N3xktobVpvdYtBLr5DxAtcHH4qTZpu3KKGx1u",
  "key43": "5FZmBG7GKGAHB47VRe8Yw9VZq3qbmdZjn2eQFooNZEKFzYCnp39b4UUSjXayCUZSBW6uLwmEUxNyJKGga9K9FD2v",
  "key44": "3f9cgERDViUEckigd2BHGHJeGKnbxYMw7TWJXHAHAkNeKk1xRD2ASZQdsEKGEViYnPv7k4WBZmmtWWwWzMhSRyET",
  "key45": "5H9UUptsUo4JHHPkE2dPpLxFGn83mmajjKo5zevAoN2CSh4EcqZqdFTRqpE2NYuxG44xKf9U97KuE7bmJrh5PYd2",
  "key46": "4iniyhVUJMkBhpy6m2pJVRU2QMYdnXrcM5PmBVG3FiRRy6FdWg5gkesdn7Sn95nVtAW7ybfm9WyDWBAuNSzPbN6N",
  "key47": "5yqTia3te4FfkQYh948NzcxuFW2aQTFqKWj7FdKDN5KJsdxRwjTRUVjSe3ou6UXE9K6vBbQuYQqPZPL1yhATLM7e"
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
