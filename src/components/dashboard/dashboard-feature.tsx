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
    "52MtMc4iUsF1ur8JD9LepfK6TgbTocvxc9FvirtoC8NzFUZMqbs57ya5U2SK2TLckfVEpviEDXV89iE2Nmyv2aTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZsYHYffRDEicnqfyND3PhfXQoMx1MFim1U6YNa7JQpUHCpV864asBSToRpnnNCHAkbfYF1NNXWVpMKcuSJZSep",
  "key1": "3kKHYGAGL1uqq6CZQpe6i7tS2kjvXYrfsieTcsFsT1S4z4ygHEbvgARqqy8GwEehHUGZehRtQPExPjVx94bHCfCz",
  "key2": "2U9tKv2ZzPLcGX177bYy6QfprfBjs9hpRygBNQHEMmi9VxgMQ58Qs1PybZqxQ5ZRwzsggK8CzDHguChHb7TiqCjY",
  "key3": "2z7S1rWKU9cCNmAhtv3CVM1sjh3PNPjK4snm5YYcJuyN2Kg2uKkkyHjWEEkFcCDUxJhPTP8fh5Yhh8p26EMdSb2Q",
  "key4": "XtwuvViadT2uvtM58dcpbvBk73UxDDLzvhLQeM4rPjn1nkcUyLtT5Q8vgkj94FZAJVXhSCvYSorGPSHbSHNYg78",
  "key5": "3N2cXwWhC38CDVZwYwr3DhCSFtVgzSUZH737VBDfAU8e1jcg5boW4Acfqq4GE29wePfsKnX7Mm8kvmN8idMYRV7W",
  "key6": "2ahK1j5dfnmcEMmr4kn3V5LHC5et26AfXdirBUhG9WCGPGiey3wRVq3T8ZEijqXj1GYbbGJyXEwFVEwqyNGU8wxg",
  "key7": "4JR1FZNuiLCGwPMfdXjzeqtZoL4AZGUfdPj2K4MY4bpzVAYkWG1RsV4nBEpwGkMtt5bdRd17iGZeAgWtmVH9cJuh",
  "key8": "2pqwaYQFZrYukqkvMEQaDeyxBXEAS9YXfjCrbjUJwVjjtZiZ6Qr6RB2vxdBYyqHdFHQkp15KjXgKKKfhikT4DN2k",
  "key9": "3SSyB65DZbt6Jahgtc1iBy2QPCwXe4mDbkeyvrZSXB7ARvVUqvM89haBj49tUeHkXe5CjgrvmRmW7oyMpoFsKfAM",
  "key10": "5JbqmNMNrc31RDA4kueP9R1UeJDfNaVrKch5Qam5PWzx92NqCfZxkckyMmSe29FjzmBgykPfr9GgnnzG5RMt2CX6",
  "key11": "2edWkim5NW7mSwCm1QpRuK7eN9SURioHPjpX1AD2X5Thg19ks6uNWKPveDWcQea7ufnaAhbw5daBZUc82oqBFgwa",
  "key12": "2JacGuq5NhpfukBATdnQ7coAWjFShad7XajzZ3AZTSmFhDLEvETCHrkc9EMZP7unr7J3TchABa6KpymL6ESPsSeb",
  "key13": "35ohJkYwxmJyuNvL6mM6ZbbKtSJqqBQDyrbGuG3Dc4mVHkzt4uYWdcoyNZe8CRPw9C4R8UyfETqJ8tdNAcfKrKEd",
  "key14": "cadKndQjfa5QJ6ejJmCBRcrVSZ7yncFxoTDd4mvCREjcMTz91qvVasA3GUAwGpggEZk98HSdi6b9oF2iAa3QC8L",
  "key15": "4f72wqqwrYTrQcrExAamGQW4E7cSAUBeq1CCBBnjDNeYFXQszsrGXLfBzj6rFqV2cDpx2ipbHjAVT9PzutLkFUPp",
  "key16": "4oBT65GqmQBuHDkxw7H8JYcqKzqbG7wjcQXD7dbsV9WtAFN4za23kfaFPLBnxGUooRTDxQSoSVm1Ccjtq2XmQU7W",
  "key17": "5qW8W4AsYS6zsKdVMNY2CYrHiNQ4vz3qn7jTBRasrXSAcvDWSn8vkcDneGcTGuEKNsmg2VxXPY7uNk3rau1Viodz",
  "key18": "34HpXcPPSrc1DkdnE9kMpWsjK4CQkLvZFjkQM8GaXhvM4HjXEvctPgkLYLAa3Y9KgJCfrXza2TPL6AQV5FHHrQrh",
  "key19": "iArxqcLRLTZvPLtnJDM1KsV1VWEhTY5bg2JKfPEh1nDUbfyoTLocczrkc6weR4pqwmiwbhL4E7Jf4gY3x9VkkPx",
  "key20": "u3NagCkfN7tAjGAVPFz2onisbLcMsYVokVYDa7JCRQUg4hHTSdhX2CwKywdX9EMWudbeVfsSfMGEbjq3vVxudZo",
  "key21": "3zFK5vV3AtenGJSHGYGHp1j9awrfLamjufHMw6TBToJkDE8ci9URKkYdiwDfT6VYFniy4Dzj7wah2cvqDdVNyGcc",
  "key22": "3ZrZca4et8yvQdddyWiJHCYcodRrJdja47v9omd7WMtqkrwDw2YL5HUhPqydAufzvk6tfoFwBvrSwr3QMeaRWVs4",
  "key23": "4VJn62GX99nuncgvYUVVQcVTnu8KvnsT9fi4dNzXLgo5bxS2X4fwGWafVVJuTQVKjzojWZN5AKQ19qgRKx9AjbZL",
  "key24": "4XL74phj33ourWu8KMPhBxxGhKfHZ8iUZSs4jwjoEqPnnDHPyVd1FPM2EgGskHyt7N3nKPjCtskSZTPAT8zb44bp",
  "key25": "5smx6kG5cx7aEooNDUa76qwHTqHS5qscmX9D91UuS9oYPNwEQwbxkxSTADE6dyPeMMPqShCS7NFRJeUvtD6e8wzz",
  "key26": "3QCJ7VcnLsBKkcK1nSQV4z3zNxf4TReB9sGx49nn8edDirH9MRNUvfC1jr9vnadZVcXJKXRYUs9oFhKwQSQygpWF",
  "key27": "7RSpMvMSPsfzTRJsWieVXosxrmhP8YpSGQvxhBubKmBD86vry4YsbJUbHQmhYSu4gzuQ5GiHmgpS1cg7Dk38qVr",
  "key28": "2deznvKn2SPvwu6svBueJfPdmBWvoRJPxiYYmpLKBEbf2VKQHft1JiiFAohrnzZZeZiwGMzdm7LH4b9NTUcjh4oj",
  "key29": "3M2f8G29fjM7Mt8zfq7pdwofEtNSMQC8Gx8ouxEZZW717jyJZejxruCKiLZVCmFmeEGnUNUUJNWxdRDpJ9efyduM",
  "key30": "2fWYXr4AXFFMcZ3vBTYvWBDUi78TxiqMWCDKtoJv36CiWkBqDdMDwejtnEAea6rQHNjKBBsw9fca8N252YXy6Bwa",
  "key31": "65bHwHpWKQxxAzRHLxDqg9hzrH5tYj8akinHbZo1gNzNBtXENH7Qmowio5VuDjByj5bycjGhScef2mnhPkkFA8P7",
  "key32": "Qe85PzS2SvpHYAb5RbKUzNsddLHpUs8iXL8vYNXPkxtqgx4GvvyC3VmpeDB6hxSnJc655n9S86yueYLfyShAoya",
  "key33": "2HW9VJzqo7HCmwA9KBAELkPsDh5kYmy8A1yxJNU7sAksRewXBDuj1oR46DDMQa7qfnP328K1AXjqBcjLWXeCXBRi",
  "key34": "5dV26NrVuCfMWH6wLihE9usHjLpLbzdrFqjVF3VGS8F7t4pj8XhWpzrY44MBv9iwM34oqwm4jB3L2n5dBMp2uPWa",
  "key35": "4sy1LtbcqL3ai6nZz3ZduwBgVQKk1HwCe91dD8jSwsshekDfr7mpLVcdqwYojaXJPaHYYMx4PJtvcwjjJWbSW7ST",
  "key36": "5EHV7SSU3rqMwaPW3T45X6xWTUziVxV464ueQPi629Go63M3hHkfUSMdAV2ocr856kry2jNBymRzBFgRCJPa5tYx",
  "key37": "3CPo71wNWxq63GsZN2psCFvdXFQFCxqr1ZECqNF23JZibVfKHD2Qj7U9Hq2chi7nnypasPn1XmVyjKPZmn5P2iCu",
  "key38": "5Ert3LjjmtHRkaGRjE84xDLGc8MLFgpW4sdxxxYE8d214snjUtFiqbnvtdcpxXw48eD9FEWbK8Zd3m7CtkyPRZuH",
  "key39": "5HHDtcUbLCggdHxGQQdRyNzeu1PmtjTH5k2wnyGe7UHazwBBE85HxeDumLjGmXrmUzbkDBzGiggpccqpitFsa2nR",
  "key40": "3e9B761PJQEcbZbSuAVd1wbsCLdrCs2hxmYQTQ2oWLPHYiDGZ8X1ezw48FeaVKYScYb3rbFjRKeefupYsSGbHwYL",
  "key41": "LXdj7AFhoA1ce42J3dQDLd1pGeoPsVfwSdEun1wSVU5Z4GnwWADzWMF9f5KV28uUAVevhDTeoDFwMaC1HcnUmJu",
  "key42": "oh8HCXzJXcLQMoFvxWS8cz4VLaTjsMsDwQHvPUzXysgSLdHPA6UPRA8EXpEeF4Le6j9WbCM7YKXor1tqeRvHc41",
  "key43": "2oZ7GtZaZ2fY2cp7aQAK8zos38i1RQWq7bKQPMSPjM8z1bUPvHLSJUHsjXeLhV67JgEcNvKx4wYUNJDXRnPLtVHQ",
  "key44": "3NVNSY3r4qszN4vwv6H3GkSpxBM36HmPtwP3Zgn8Ju6nsV7JoBJNzL8G9CdmtGkFh5cukoaXHLDMaTc2jUYAhw75",
  "key45": "3hST9eJRySKb9Rw2aj5Kg7kjS3FKf1syPP3rcVJot22xRVqWMvReWvx5NPDH91faSbCqedMTu9FwrKtMNw4j1CDt",
  "key46": "Teoa7EEfp5oT3y2NXV3WfAEnzg2jiUQijhiRXpTid7zwU9AzjHHWHW38xgaU9UqWwoQm2cg3UzYQmY12gRVaki5",
  "key47": "27YYxowkmZEvZjv8nMC1aJM74SzDuRyMA8zsCaxKCXsJk8NRWLDaATA9bP1hiSSwTqfBL2McWgZ2UkG7n9evFRNm",
  "key48": "UbSXEbTfp1zyyd8ZbVcJ7VedF1zjaHgGR8Cz39FgZ9eDesFg9HHjvaoKMUbhUzjw4H5HHENs6idQL2x4a4HveHU"
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
