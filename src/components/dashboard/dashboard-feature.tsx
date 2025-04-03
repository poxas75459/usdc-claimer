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
    "29yWj2gwhUZWjSPqW3RJg8HhZtZWiRSpe4y2E2x7fD5VvokcyRHBzy9z1uSiWf1Dt4omkCvxHyY2PuHnQmDNbeyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P21EBTJPt6cK59tBRa9vRwJcjYfgPSE3b6ynfs8S4n5SkDCodQ9uerFpeiMQP3wQVryx37Mg6QDb6TMV2p5wvaP",
  "key1": "4Xk6dnQZJyraji9Sjd5WLju67tsUvFuyMrA6tfsJTzKaE1xv5ppvpv4HTuVw7nqBHNFDCDAsHrb5Tu8fqhEVYgZW",
  "key2": "3s3n2WuHnjspg4TMTKP5CKdneB8yGNv8kygNETQ6BQ6CgHLXPapvjeMkPm7ScSgA9573kRFv33mpsFYg3xMFJE3h",
  "key3": "39DokfikB6YLfXY44jUeWcmCRjXWRayNR4LsUbY5BnbdNNYPqsjRLTarLbRjuPgmj4WUWS3mKqRhHo43547s5Lik",
  "key4": "2UaLS3Zu3GLGcqB2MSxz4pFL8br8Fhb6BqiXoHuit65ULqeNYkLLSJtDuntpoiLJEjfGThavzgB22Kh2YyM12Cbu",
  "key5": "9Z1NqdHUmHB2ScisTJfFAtrbkRRWxF4wssUPM2uPV3Dau7NLJvJHCW1KQnD5EW5nmJZwe7pQ3ud27W3HeTddDRW",
  "key6": "FqEJ7XKB6KkDQqKwhxpS2kGR6HgnRKJ1ux7C3K5sf3v6VCRcJMp4uRpAfwDUh2bkoN4d7P9VNMMUoFXMiFoyCTT",
  "key7": "5Vk22qt311q9av6crJs4o2G9VsCr45oCWiAfzFChmrW9DaAvSuBLXMvu5NqaRxJU5e18U8qCVkxEAJFW74e6v32v",
  "key8": "5XXUoFjqJNd9r5NQ7q8DTDaa8KudmEt59wjVfixopb5y1PhEXjBygvNej1gxWE9xtnTq9nG3rr22BucTkxk66rch",
  "key9": "2zg41ejAcQxLRBVoDGfc9ZL1HbDdBYKzq3Q6hHqPpowWyJNjppU2z8tiabrT3HjsDsELofwgqVwJpx9ZYJor5Qm8",
  "key10": "jua4fnC8nJLfB5pYQBBzDfsV8RzzQZc9TaVoEXKie71qaTQey8AKqtA7Y53eju7huwY5K8RqseC7fT4dSHrai2N",
  "key11": "2RDuFPptcsqjjhQi4HvA4JfBt85PLf1xPfULt2kmeAuFxfHd5tPJPMQpKL44MaZwLNtChPWYtq7xqehQQErRhjw6",
  "key12": "4ma853JGMTMTwGpvk6rimdmgYbGAvLpnG7wzNUVGCRdbBjNz5KgFU83TMLu7sC8SqcfWcJ6jNdMCpN9EsxKNLfkT",
  "key13": "3dCpVX1Bz82SrXuwzjsD8bmRbUgNoRVn3hgvwEy9Ppr9e9D1LpNYiH6wxuACkkPChNQRd6WkouPJmjqhkjWi3eJA",
  "key14": "65NP6vmYEBf6wP4LnRhSgVcVfP77J4rT156PsziihEQucfVfXtUfWtdm2gfDcV3NAbHMuZJh2eXnPHo5uTkERZU9",
  "key15": "oijFnQpSqRkMWhHbKRbpy1qk33uZKdy6BGKp9KvA4UNpTnuW4S9YYCGXFkWZs7VimCmbRvUgX1nMUYHJL5DraiW",
  "key16": "5yKowwikVh1MxUM8Y5RMWEQhrcU2H59zo1mgWQCx1aheMiLueFWDfLqQcYNQApeZN7cNvr2dAoAMX4fGBPHuiUY4",
  "key17": "2KpqJU9H7szwUwrVgCdwq4zVAtQYVaEE6HxxVfUuXsjGwZHPSw7W2Vyg498AHhQbZXPUB7NgK5P8o87obvrhnDkv",
  "key18": "fycAxULUxDDykaZ65t1ThLZdPBtyvh8iC2B97soPwqA25rMBBAN5mfr5c6padyUk8qjox83rq8TdRpp6TcLrC3Q",
  "key19": "46hdgJJWFCsL8dWsy4Tvf4tetitNLTEiY6uHfHtTm4VKFkuUAvkg8Ph6hCcequWrRygJcBj8EviPTUGDWbcUKC3i",
  "key20": "24JvgWD1EhKHXYxUe9vo8Jeru42PNEqk8BwqKheSLeRYCqSZy1f94GPAXsYnpeXcfsNR73dQzQDt3zT3TdYk3j2s",
  "key21": "2RpxsqWXgSNhVpDjRuP21zafyM5dQ4Kzy4fy2fGTxnrookhHvjHzF5BuB2vcstZ9PPq22Sqt5iw3PcANYGFLeLmz",
  "key22": "4Dq28wzGXk1mDwEYdQgYvwQuM1Rnfr1MBdkmNWCoxoERYzc6i6HgZ6tVU2goTVKaEqaGzXfmKNWxYiVTJdzCY6Qc",
  "key23": "2hAVnroY8EATjQUSXuRgedyS8maBhVbJ2NA2zZjVnxU8Xyg6HFJGRawBXq1g2Cg6T44xxxRg28ppgohqzykG82qp",
  "key24": "4CotNkpvSKgK6EAU6MrrX3uyHL2W12LdK5xp4QHoxkEJuLXXM5ePewFpE6gcmx6cf6cZvbFQz29DRW5e8CH4EREX",
  "key25": "Z56wYQW4KPpnUYwEg6UaxgxyDpEBqsYaBTtQLJzcNVPQrHAPTMZgvA5g9HWBPE96K8hVLbxWutSVLKUgq9Sd7ED",
  "key26": "5yLkQEbJq7qWP39afwSmVJXYFvkp9MifUu2PdbeNfbgWaZF9UdKGnGPRvgf9GWfc1ShcFCnaY1yPi7D2RduwBpAj"
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
