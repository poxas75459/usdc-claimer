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
    "2cCVE6zjS1sBkcQTqWixyFzheru8u943hWFTz6rTiLBC6HwgnJobyaY3x63HLAKb4qrDNnzQvHV4E5CJL9E5yTjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XRMJjcjdxQgStjjmQB9AhrGKAaDh3sXQmYNA6FGizebzrnsmii7bqZeZvYecBS9iLfoBeMP1eGKZMzuwBMYj7nF",
  "key1": "66t2avzEnNocHQyjWS1Z2KdHsjB1Vws6fxqHsAZig9yi5VNMCpM7bVYRiS79QvFm2517iYkBr3Axtj2raMcWHQo6",
  "key2": "57wVXFZwqs2vVj3iMzmPawgpP5SEzNuwLbAaVng9AaZSoHtCg58VnhWHZyYLxM5qieoCe3AAMECfkkvSFrkoDR9A",
  "key3": "2S8d3KMsZEtdzcybWpYqAivQWNnRFVC58ZSxehMUKb8z4G9xUkACPoi7yaPiZsGyefB9vsw1uFiVxLqQcHdRCa1N",
  "key4": "4Dw2uBbVf8h7WK1JhYMbSsU6SW9pBPcipM974u8ANVGBXNncfejn1gVkkQT9GUJNfTpL6g4StdU6AHy6zyXmNjkk",
  "key5": "3vHMbpuTLrvwdTBxuPQSsixLf4w3jPoT3ajp6JVRpo7ekMoZxw4uJzZ3J6NDxd3v3pm4G9NWacK7JDCztyKx4K1g",
  "key6": "2pWm8vxZnCTZAdK1aitu9pDYyvQvrfDuXzeQAcr7Vc4Tnzd2d7d7oJpPwT18gbSHqipXFzzsvLTVZKKvaaHQ25Rs",
  "key7": "2P9FXpPH7G5Ju8GdUiDkfEc7kPsHaMakxYM5sXVxUqEALjuQm8NM4WWCHWg1t4Ensmk4iitiKtJ2EBkTxR54fLP",
  "key8": "4K3wwQZs6xEwey7CUFZRd2MvpvV5uoiawmUrRcXbLy9VG9o6bxVDqCTxZEHNDdMWAeBVKnpnSzPuTXBWkqRopSWG",
  "key9": "jfYwMbDmJg4NWbMpWDEMbG5cAZmrsoEtFbXofDnZJA7owVnUM2rgpw8J7iVZurRuyyS4Egh8pBP473yERZ1GxXg",
  "key10": "4KgN29NKmAGh9KZyDcowPm7uYjuoTT2WzU68r4o98mKMQQCpzj6PPGaPySzve5M1Zr9G5DyJnmiqCs7ZvmC9xptA",
  "key11": "3uFGgn5DiCoU7xfC4cLjB6NmCdK44pW6jL8zQ11jUfWupuyBcFqnqU4Byv5WtJFjHm1vF6NgvNf9aJVFjAhNyVxN",
  "key12": "46EcBd9fTtwt4SwNtgeUYucFKxnS8CMD6oFmcnYj16TVyP2wEbZxEbXzEnvc6gWHuaLkqD3wTbLeZE3Khd8hC872",
  "key13": "2tThqhgw7kbkohA2nSS8zUEsyhqzPex39ewc8L3Zkmb5LTZCabSievJQLWEk1pVXGb14HedJpdjDH9JZY4oujcS1",
  "key14": "MLfWm7j4BDQtq3LQ55yhs4CJvqYLGse6urZ7JPH5Q1YLFADZMJ5hsgKsTX2TRSp9273NpkBFj1am1NZiy9rUStG",
  "key15": "4V3o9e3bJBKBpJFdxoGhzD9pTxUtymFsmpxfcCKVW2uGLqJ1KBtiPikjojrHe8TKSEKTskBSYPqqQcPwFZRLdows",
  "key16": "4g6nZy2uMRfpd5gsCmrikgzAhsWKnpz6PuC3CepMRGRbh5Mbjy8DKkLQu3QGbccKRabgDWL6yYyT54sSCV6br9CS",
  "key17": "4D4RkAYD39woQLhQ9D7irE2rcZXWQtgX6fSmqpc9Jzm5HVB66zFao1jw3uCG2r47pv4wG1Lp2Pnhs2x2iCH5RQLb",
  "key18": "3symzaPVDsqewoxZA6vdQGiuHUSyU4qAPK7NnWHVYEefuFsqxBUmqLFSGFh2SVAYszWQPLxSDgyHJREPEP59MBNK",
  "key19": "5eDxPPDu7YJugTsmjF1xpdigne5JftnPS5HgdxG86JNgTsV5CM23DAzdS3Nm8EZLmmt7RQ9Far51N6CDBjejA7fe",
  "key20": "2MH81uXw9Tpay4hbqF6TY94LmAoUNwniT9wVzGjjMeHVEzeVFZAL7uzLpw9fsk2k2ZRt3efTWeq71TC9b1EHW5mn",
  "key21": "jkbcDGcmpLffpLzW39W6o3XYy4FvuKXvbkvbaYS1warMuhUCY9J2e952L9fh3nmjr63iRScAF3tpAJRWsVqxcDX",
  "key22": "2N8rz9NqoigMyTsqPWLBi9Fq3LyxQtRQWJ4JNbRqhifrE9Ns4VaQ8RFp9XJp3Uf9hukpzVKVzxJNj9w1x4W52yRz",
  "key23": "hPmLPFwFodn7jFqmgAuMxYiusEs8VvqAChmireSAVYVMDLku8hHhLutSy6BmhL9Lmc2q8gGhBzKQQiH8osgxUHD",
  "key24": "vAzgYpghEdVmqUi75PxX7p2mvgoaaBs8Dvm3C3ENe2L9bjjZio2x3HUF5q8frRjfVPViNewNfmsQSn3G8yHcML1",
  "key25": "qUyrWnnYfPT8mhMtYmkdPvUNT1BHvThte8k6ne4Jz7BsCBW3mMrv2otY8tvxm1iXGr9rqsbVVCDRCx4gAtQzMjt",
  "key26": "4uWcSpRu795ZUQr3qBV5MD5YVj4tCdjnH6bL5xXD9SFqBTtnzaVZ3gMwz4RLgyPvs2UJkZWnKLbU1B5gYbWjQ9iX",
  "key27": "2Q1HXZEGrBunFs62oKwbkeXTvs9EGV9CcfPYiszKqBYi7wR6oKVTncNo6fueL7JE8QxDkipertfiBmssUNhhbUS1",
  "key28": "2n1a95JLcQY5fnueR8wEmNtj5Pivi3nNw3rWC4r8MVmmpp79KXtC9uwfpbpo1qgxp6aqSAPvGZvvG3T4GpJB8qyx",
  "key29": "eeXT2FLpJg68Re4mUEC7PL9koydwHatShJ5dYxqGJUX7sDon5Qxh55FHQpRtppxskkxLXyKo1zGG3FYu6SLPHys",
  "key30": "2MyX538Dpq3oApZGG3QtVyD4jMaQtGBPfJEe8h2jt7fArCxq2Jdw3WMR8VDP69DjMQ2MbTYRPgD3sCCutHxoJTFd"
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
