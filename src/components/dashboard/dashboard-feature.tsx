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
    "Lo4H1S3KM2DksF2aTrUr5ssTt1C9oTG9Q5k72uYNh7idC5b3iLe9y8X7vkE3VsMRNCDZHcdR2bKUNiukAFY9Fiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRmsTfyEqZmnhW7d5nAm71tbWVgQSVdFNTLVRWT7u63qYstVpr9yp3Tzc2AhzyruWQyZxorJRWRDkK42UibmbJC",
  "key1": "4cBz8Aw89yrVWcwjciFDw94KXzQ6iUu4gjNpiYQuGwgFXCZMXejuohGWZAQkka6Ky4q13Ruue3B26c4sz6pmn8GR",
  "key2": "4kBxhj2XEDqxTZBveVeLaG9vdgmw4vgrLH49ijnN7csYWQDpiTHVt8PisUBGFRNM8HFQ69EqYsSZPrwdhQmkA9Te",
  "key3": "5NRUjK6Tk7GyiS7s4JBERWzR54TXpxYENzet2vmPPJS94gferHDTQ6d33fNKPM6vkxMonpWDuqaogLcYJgS3bv8X",
  "key4": "3d2AWZFv9WwG2NG4TP5y68QbM3gLYK2TmJvnsCKyfi5FeroCmgFGZvisPSqs72UHSQ2ADKCBAWaRefd236fnyoqA",
  "key5": "89unzUaQ1LwFDYgLAFNFSNEmCVov57NhEswhZW1VZK7YHrd88yvTtiEb4surQWFdCdP3ZC8AQUiU3Zoi4Dqehwo",
  "key6": "5APrGiX6hyUcHQGj1yiTK8WeSEtE4GMJnyxy42DqcX3MErV1UPLBU4kUFD9eTaMykEBdpw72Z8eaW8HmAHEQrW6q",
  "key7": "3EJFPmL78gq9HSMdYo7z5woiVFJ9CwJujgPa5Vkux22ucb2q5ScyJeUjnR41yG91gCDdggyuWzdm9HfezfpSgwXJ",
  "key8": "2Z3wfzmQdyKnreREDP82HZuXvJm9t8VWfUYv6pEVFR1sTQyAc6P3MYb4d1wUSqS9i39fLYNzAfJ5JpcYRdVgwKbF",
  "key9": "4iW1UtkAjfammYB6awKhZrHCatfT2zMpdnyxmUsKSBtW4PMqvLp4zo7UU1C2asfkEDBV5HJtppfWcFKsqg8kDm9V",
  "key10": "2b8L4dWLTQt3fThJYCNpT59zGpKKyEo9aSmWDYBGyRRNsmGTA3jTJ1WXHwu6o5xju7a9B8Biw2YQaAjhkxf8HzfN",
  "key11": "25VcMWZcwNbizJZdgzChxQnWHwugQsPZbsBS56iZJFK1Q6vL6n6sAczYCt9x4RZ7ZLP7Gnt1vjmzvH9r7urisB3r",
  "key12": "3DoX7X7yt27N1h1e6ZRBiKgsmzv1UJxMY71UJb332XyVMhM26WdrHpX3PFTi18dbG75gizFVVVq3YWUj9rFpQCkR",
  "key13": "2HJmFTMcF5o6H2rMp8Z5DmZdYXrrUyB79FfSJzeowTGNDBjF8rmTSFA4EqftiNRfhptMfnuxSvQKazLDXQtP37Vd",
  "key14": "5LKWxNFNyMA2ALYT4GaHm1HQJo3XzRheoXbXqxGuCWwoQ4i2nNJdnee7fXQPRK2bt36nETnDeQQxgJ5BqW72m4G1",
  "key15": "4ceZtxFqq16ocV2tjVK84SioRZSXfU9fzpFMhm8YKWrf4ChXsXWXrx55sT2c3eqoSGV3YywYVSfFv3yiLyeRQDvH",
  "key16": "2GPJSSyNZZqebmBjE2MGXos1ep77oYhrkcozW2NY7h3RjspjTa6toBanNeGftEJfTCr7JpbwUerd6nyivfnNMJsc",
  "key17": "5FVRqurKZxq5bV7cfi7froWRuYjueuUg3Ad7tb42ypS57soHYPSaJjgMHHFQAzW7fADTW3Bk7bBRJnCJt944nj8g",
  "key18": "UCgCaMArVQeB99oaKY6YkJKfMDS2Cnjt2cfshaCu3aUgPSrhKaiCyV2Heb9ekxtUqLpSBWefGZMME3918F9mvFe",
  "key19": "2cT7kWjmAXYf6d3xdBJT648v12R6UusAHDVcfQVcnXqvNUqnB5YLzxstyjpypMSz7gQkMYyaTUQdZbfgN2eWFyhQ",
  "key20": "2ckycFLokHoBiXgyogVF4MorJ7Q9a3SscEt2fuvXKk7SCwiY8HPuubiDZ6RzWyMMJcG6J1Q2v8GtC3FNmPR9VU2m",
  "key21": "2iaRtj9QBUYZ4nUYh9givwLeN5Uxt4sYNqpmFDWVkCkHEqgLxH4z4DQCpS21wj1qVgaUgjWJcWdAixRBKr3vc7Lj",
  "key22": "hmwpXCaLVXMsnMrPQsNdQRy4ompPhYLeVeuz4HGDwdXTeBX6FL1QddV2KEjavbZ1XqbRnjzsRfp1jNGYUExnmS9",
  "key23": "3VNCnW8n7t2nTsMpGrbFGzjGvcGdgSW7CwMwqsnwnTCZZMfDFBQmUbU5omUxAujJ7jvdtGqHpsKUV9taZVbAFFHA",
  "key24": "5NCpRb41ytKmNCSZBAbREnpRkJ2BZMvTjzdvtMXDi8kWVtfoGVfMgbL6s1tiuBw6D367RuX8TBinRCgQHJJX5xRg",
  "key25": "3o3GNvkhSsDDQP8DKUmie7hpMujySyBrfctz3YYiEd8tTrWd6MCpwCgGG9vztU4eb4wyMZomTbDNz81dvq8dimys",
  "key26": "39FQ7oU6ec3c9TLV86UN98jwKYDGrh2mxWqbjp3bPRB9kpYVYwbWPdJ86vnJgk2ZNEwp1F8Q1a17z8PeAcBv8n4j",
  "key27": "3VaYyuXQ17hr5JDfGouoTNfnQn4vzgdcDc9hvdrLSs977HP2ELaZC3dvjB2cdhVCcS34W3K9mUXRSqAwcnexKjL6",
  "key28": "336JBFaNzx6d4FiTSJj5tHcfjDrxB3fNEE721hQ94bagLCvW8ShYnKNLmrvstJTieTcFS8XFBzU3Km58XyLF5cd3",
  "key29": "5Hc9fXRecnTgxeWZCXYhVog2oLFxy6Xr8wwzzcb5dRGrSgbNq8JH33Z5VJjBjW7SAvyvSdHo5R1EgzYWzNrumGUh",
  "key30": "3gvQzr8AKwa87q8vdE4TJjCEsAUVpG5b1ydYZX9Q6bhXkHbUUCAW9s7UDUSC1jrJDcobkQ6B5fMAbVpiG7zfqUh4",
  "key31": "26JRuLDjNJVBVUAafhFnApHnbzfjoPns7oYgLoHoernMQPVaCpWUAoDpi9CgbN5ju3Bkk3avBdph9cWmMdmRMjps",
  "key32": "2m9GRC3Lgr19QTfvoqfnPRjRE77mjTXw1n6d7s8GcusaSRZA7GjysBSAaQNnHs3YP98oXkCSwcoV7shGrmHtEg3H",
  "key33": "kkesMyqS9WMsCSVZHV7eKfMmE9ar9ErC1rW1Mmc638EUabbqYAyuL5vy6kC5EFaCWLG4YH1EBwurJ9MtNkKGe9n",
  "key34": "2sGV2qE2qEzjQGgYDozJ6NUwerhYVwYHWFWCxvGeq2km8e37mSRBDjfYJTkZinFrgtnpUf6pirUbVwuCCX2QQGHq",
  "key35": "2LUfEDKH7JWD1rp7V21vhaus7xEcHkdv9TPgtDqbYb3MsakNBc4vKQq6g6FUwEwrAQEMaUxCJ8CaoA6XLZK6ASSv"
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
