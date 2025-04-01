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
    "3dHqYhtsnK1LBbNJQJJw5t8ApvDusAKcmKVmxCB2a1FRiPNDTWL2sgu73ouA2oDv6mDemNvjFD6eMQr78si2LE57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DvuhQQaJFQo2PRBBEM3M7ndBdXYXW9NiH3NL7bhdGaqhKd4gZQz5TauLDaNSPcAveKxDF853K2ux4z2PusQQB7o",
  "key1": "5Wgj3pNorJ53gPoHznTofsRxvUQhkvp7Kf8AejsKBaTciTzvjGW8QQirx9ynhP4uzYWmJnQGJ2eBP4TdH4MU72sq",
  "key2": "5i7yshtbvXfHzz33uLDQGZbhN9J54QF7EKDD95WiqXkGHypmr4ogMhzevs29acmxod9Gnd2WmWWcuFi4fYWJfcnz",
  "key3": "2txrN7EXQfixDy2i5PV6x46ZeGpRsD65wwwXfeduUL1aXtWBCT2vUC8HddAQgEHEAGPRaLzcWyHZBpoqnVL6T3oN",
  "key4": "5y6DikXbhuqJhwmSQRx7A982YqUjp3iXQJK4raHAnsi81NoXLiNodz4hC4oh1ZjV4wsqEzfW2ef7gENaXrcjufT4",
  "key5": "48mNa2GWk4CTYzEGZBAdSespVTEqS2yUJEwdKa4GxBZdBjbddT18gBSCJM8gBFSaqEtiw39QaZs7pF2MGtnCbxsY",
  "key6": "2kvznvhRNdhxXc46GgaHUxhFndj3BuGdNZavhV9uWebtPaxVi9acESm828zzCWFzFvPoFgHbWx6BGX1qphaNXzj9",
  "key7": "5Ee15G1ZAZ1iCaqfTmDhxjrWVBq8tD1kvXYLyD1nDZ5cdjT1apZVTXcgK8K6sYL6PRtuHJ2EUYXfoqg7i2CmHzFB",
  "key8": "5mZRs2XHt7zrXGy1R4cKrnQkw2jp34PB4CzZhhpyTzYQc7kprUra77gfdm3WxyWZybMUeQUQVMnfBgHSbyKUQ92n",
  "key9": "4jYRpymKt3MSRbCLC15hv9HKiB4hdEfJkqkffAc9N4dFuRdm8EZizNKxuq4RN9mpmtcATwtG6v88uQUPJtQSqZfL",
  "key10": "AArJjD4MRYT5jr2Mey8uMR6AbMKBBQbh5uEy8FE1NWCdsJHZh6nznfBQz4WwwcCzFYm8uBpie82HQUzKPcBHVuQ",
  "key11": "3EWqb8jcPFTBz23t9ELSKYP6Dn1m9SnqGQLXfkvuJmuyHMBghGpkLVBREs3KTbiLaxrqVkJRxe7RjsYeg6ecGXc1",
  "key12": "4y7RnjSiuoLX8azFUinZdNy9Cgknf1yoKXhHVMfYkig9jYc5GzyHtpMrmfGgBtRNimeDhBnKcNUD7Qh2578taT2z",
  "key13": "zKHQFfbGuYuVA9XSHSEDnU2zgXxX6SmPTA2nq2b3A3FFddiUGS1P98Mf3GkdJ5kwQLjGm12Sj5F8nJv8UbTi5Rp",
  "key14": "2dmKQGj2jbJByK7hq2LoSCkMZyjC1YX2qYo7Y7DtDRPnQ65FAk6gzyq1wFg3bjtBdr92wEtr8dRggjY2apHf2UxP",
  "key15": "2YyPy75AvMWByz9M6qTwgH3wAuKk5cfMtzMMfdF5u9KwEKXYqgkY3wVUyUAGA51NBsEkJJfFpAo262GTYfyAWXiJ",
  "key16": "3THnH7uyXWP7b6BvWRjAvVGc7prSFFeMAwrUkhPEDSeZsnqyEK25CY1aSSBBQWToodMckBxfG6zHtiXgU6GCpyxB",
  "key17": "aSJsV4UupdMnoTd83SBT3fJaZQQRbRAjVAGVwFWQZmFSAsysJLTDRaNRjeuXsHtYgeLmaKDNMLQrNjd7mvxc5yN",
  "key18": "85MXrrCJJGsQ1ufF8Egayy5HVdPXksv6DrLjXQ8vwv76k1Tba5uCDVrv5eH8hdF5Hf2qz9txkAVSWc8SWvaytRf",
  "key19": "4BFHGGtLjn5WyNxMrFCG1XtsKxtgaLpA11uUahhFcWeqyBWgswRMiJ7fYaqtSRBYeAkjNiKzjdVY2yto9b9XSfax",
  "key20": "52eUkrvswDna6PLF9Mhw3Jr8nfKcnQGGZmG5P2rPMMy8FA43AavcmDBdqi5QQZVAjmF5uQY6G9ESkD8gKL26SmMi",
  "key21": "25ULQHaXdUBE8uYGJfV4Wy4MKbJPQXgezyLf1UcSa7VxCssr1RWKSLCrvyMn5DW45oGfKxJwY9JE3TzTLDJBoBCf",
  "key22": "3CACoaqfvsn7CTphmUXg944C3nnX1AEKrt6eXG3t5DjucX93zkr1GsgH63HW8yjCGynuSxJFes9Eio2bWX5NXgE3",
  "key23": "5LZjznJ5DUx2S1NmRPgnndVA75TCsLNAijfKihz1GVxqrJr3bMuc3CeiDcPzybs3tAssan7LVgrb8KBDLtMt3hKz",
  "key24": "QMVuA8fEFYPbz4rTG4apCLk4HCrQGLEmZRQ1U1SbD6TwThHN6HfW66unofQc47eRjkQYQpvYq1tpAnN44ZP4fWv",
  "key25": "55FNwrVxHSSL5vD5NQMMYNotr2UCVocqpSRejmfjv8cXMjfNAXcjYaKKLG7wpb7FnVg3ntRX53Dcv58Zy4NPTXS5",
  "key26": "3uxwb211BsgSwmKHfQgdMM7uc4k6mdCAKuP5h61p4MSNeno4z8X5abf98firsGPrS7U5pXaDNcF2bwaXB6WRTVuQ",
  "key27": "tjp8fd3EUhDfwi26BADwY5NdhKyAMU7FfvGPXVeiLGUCjnN7wVQW3Ut5dAnba5Sxz6g3GrCkcV6AgGXmGf8ran4",
  "key28": "G2GN4KGjfhH9tH6ht66QSUn9ZUro4E8R555utnoWMzEaVTLJstCNhubc5ALtHzmiktubXxUKBfYE1GEjWTkZezQ",
  "key29": "2PcoNZCiJz1Dw9auMfKq8dWxag9wdsbaSy2GK81m9ZNkpa2ZRmGaKGjVu25XsRaMAA5obWGUW7yTde4HwdshrtxX",
  "key30": "qGbnsHpDu1uye8uoHvaRW5e8nC9R5rEdLHgvjdE6tEsr2dhNE9NnM8zdaHp1LMV2EbP9b1XGswMGs3utrk3Qf39"
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
