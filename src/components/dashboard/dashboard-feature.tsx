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
    "4RPc2y9W1bikGoFcDBM7hNspGrgJouTRr5H7ZvT4Gum6ffvkxTbmXkYf9DAcfcRzWo76nSRcqTBqQZmDLaYhA8K1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yiqu5DAh1vdGGfDcdNksAK177iBTzPh5eXGYWVfzMvVJjhKaxBx7dJ6rvBm9v2hZsQdWmeqJDnLebpkrcHVkzzr",
  "key1": "3KYhG2Ax2dfJGKjVfHiVNCFoLnYccHR8KDKmGHTv59k6QemPHSFPEAPNLTgWyPM7LyFWqCvdcaA8jSJko2s9HWiJ",
  "key2": "54QpNZdhNWpwSFkahWXi8w1Epqx5qh1HpLqtxeSwZFq3TMgaGTDkhUUb1dNRhb688ZGTea1fBGaXLhuJPzyviJN2",
  "key3": "2Fahesj26S61RFqTxboaUTgMxokSX7Edi6W4RYtu5nbx4eftLqaxK2uWcRvK5x5ZvmrbuReCvvmmSZCudTy6Moca",
  "key4": "3bQQv5kZ1fVQj2jtf7xBkxUGcGgF3WaECGss9xD6jEajvFrS4E5f1muMA7KSJRyLs1WznUXcbmzTnyXv1rpbAMES",
  "key5": "2rguvqLKPL2mt64mFvgegQFyf4VxRAWWzdCLHfjuaphKnB5P7QowLGddwYNCKWKqndJrVxaEb785D6NQ6D3D4FV9",
  "key6": "48gHg1X7w3c7casswrPJ8QRgcHR18s2dpSKRW1WKSAszYzmyrykhkpmExLjEdoJ2RkrJTHDGrxa1X9M8GJ1g6YHH",
  "key7": "51a9U5FyArRfh5AMgFMHSzNcdtDxr57ptwAkQh1nwBfQzbPoPhzAKfB26YWWAX2NX7Kpe6Ree5kxRP12BcM6trki",
  "key8": "4oQiSaDKUs5f5K8Uf2U8vunsYsyoAoBbgGukWgy385uFs1r2fjv2D2XKRSfMcfZur34yC5kxhTwZEDCzm1utdjdx",
  "key9": "3ZGPWCCeCBENDChq2Em2JVQ7YdxhXFiv44668t6fgjoSryiZhfh6mrBYx32hFG9V7BLzM8BvmAU5qC5hKrfuRtYg",
  "key10": "4qpKEWydy1M1QGurnSW28pCjnNCTtMZLEEkMy4GWCdcUdztfUPU2mJpjSEr9QcYgtnokSn9QctQampPFykaAD8iJ",
  "key11": "3P7f9XL8hrELQ9eXFMuAgQSGCEMm2XuRbCF2Q2ZCxVBFxS6AzsCQS32gWTjKqkmX1MjaBYaiVWoq4RUxhfyqq5ef",
  "key12": "5cWv4D3LPPQ3FehQaowZJhuja53rMtZv8dU7qHCaqSam683HCZHWz5tHpiUKTmH7XhZgz4ptSjVymxj5pF9oP62q",
  "key13": "5g8vxJhRy5VZRWagkK6VDb6YkgVCHDz18h9uJ4qWYHjrFBkKDPHQhwcBMx88jaCB2D5q3yRtuXrU8LJD2dL5E3zh",
  "key14": "4DgqRpwh7jWyXzyGc9N3qMjfc7MKs1tKHY5UbwRRc5rrAjxEojvChiYeQV7oj3dfeQghhRnH5UeVSXw8aUqAxJmf",
  "key15": "4Vds7xmbt5P8gjzgz3cbinfCT24CKPuZ2CUki5vz9P8cabKW1bXpJgnfYQQEzmLpxkEwuqCeUxfkf4wiieUt2xtz",
  "key16": "3oCVAcBdVG6b4spLxTY91Q6PQ2ZTo6AnKRs6tu6rNXwzyLw2N8sMg2GcXufoBoK8d1szHduowfjEjfjTNQXTs9HT",
  "key17": "zyTcaEV5EeAJ5vKH7AXRZnGyY9qjgaRSnrMHnapEuMwhhmNgR2cPfqgx5nSBVRQ8Jkc24ppaZ3FfKBbhXKhqJ4y",
  "key18": "3EV2iZ79aDCaYk2Qbwdpp2AtnJGGiBQwdLAi4C1Cw1QdMrWoT9hmTx44jzBgofRK5DxRmDetGkFCFve93CapuRkD",
  "key19": "39KvhdoZzJ2w3XuVDES7vYAGydVWbiA6Coakd5zM9yeGCWvKyv11a8oPbyPDsK6W1NqrBD9doU5Q6bx6Go9a9sjS",
  "key20": "5jR18R5EJeZkGdr7SL5bJeAMAwvpm2T9eZp9kAHQWGbxe7pAM1vqU1XC1EfeNnbyXMzyMDxTM2k9EwgvnCMiAyVe",
  "key21": "WHzyxYNnAHYiouGeRGxuFznkCQL5uFP4gmqvacDJFNAE8WVuvYfNCA9Wfjw1Gsut6xzSU6XtdxL8Ni8oDrHmuy1",
  "key22": "iSSBQkFz8NrHyZCB9kSgKyMtiCTF9gfxHiZ3HVhbt2RxgQbjVBVVBwftEqxxZAPnsQTdMpecdV33kQR6Vnwgm8k",
  "key23": "55vfmqbD2MTDS4gCzT6ERN38bXb84jW9ZAhUnbEFbhke4KgJK9iRu9or1dSi3PfTZtL5yXQQFo4mvjAgvTErq5r5",
  "key24": "5mgtfZMarZsP7dee2hNV3i8ZMaQA7KVgJ6eytNRpoXmWX4Kj4Zx8Mcmkb3nansZVQJJqA2QGVzBVaUuskGkgxhQE",
  "key25": "3veHfJaRJRSXycEbmzZFkbfVqiyo5SeiM9fxwHdkBcRwpC1T22rQ2q53LXADxX7UGYDn1DpeCtcUyx3zHUozY6QX",
  "key26": "5HVJaCuK54FQe9Duf4EPked5no8HPXXohJ2F1eQfd7uMBwAFS79YeE5RBeW51AySY4mUcw7pJUgXYiwAauD2TE7B",
  "key27": "2BZ4RYLS4V1n2kTr5MUpbLMi4Aj6Zs5JGpUbMM4rwqnpFqmBXgmMXNzmSTK3rB5ArdjmPP316bJ5ZMbJnC9og4KP",
  "key28": "3Cfr6QrvSdaQqNu335XRxfCRMJwuhmmvN1jDmvq16k3NyLKHEhPjqDMapGQnXPSNgFdqtFrtmkdrThsYgqfVWP2C",
  "key29": "4fDV6kkbij84TBk6A9nHNDuJsht8ee4KJAftFEEUEmbxy4kXndhLNA1DGUqnkJv5JyD8Cq1R37MWeQdsmffPipHW"
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
