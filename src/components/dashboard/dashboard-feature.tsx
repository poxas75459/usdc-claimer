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
    "2esWoigFarUo3ujaJnUNgj3a4rXDWFhP2b9q8JzHqe4Ni73SW7zaga4xGQE5JWWWTkksAWAjQhXNy7858fhDabe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQbpjeLSmdNnAe2MNcRue1CkKX5sAXdk9rnkoKmN6Lwa56cetRMXLVFY7EMRjq1KZk2shirUENBMD4cAkuzi6we",
  "key1": "2TPaYBVRamw4qi92hDddSiB32oc1fi6yf3VosXtaGbuFWVmvhiW8vXJ6SirLPeQep7oEydSbdPpvPRutF565m2Du",
  "key2": "2gW7HsgRq8M33SZv1NE4dpRWPKVvmVv2orHJVt5v6tR9tcoCSW3QJQjfQzP9nEw5LP3JQWTx4xhWxa3cRh6cQoNR",
  "key3": "9cE4MBSvn3XGuyS2ZF2ZA8q6f35ieTwa584BamUvSBBSkDbqgWfE1UdJ5gHBQFJv7KC64WVSHrmRSN3gBgkvqoW",
  "key4": "4FBQgtxAKuaZ1KBLw7BjfVKNCCCBWoHsCpsiFzJ3X7QJ9hQrRTBGuQP5Tp6ngFi1Z3EfgCc49BKkHWCJakpxJCAJ",
  "key5": "kmoppGNqVb73EHf9FeL8BeLtV1eRDaoAJiRmnujao2szKiKZLK4rXKcY5yMkxn6tSb8dccTsNVXA43kzP6jGY5Y",
  "key6": "Tj6k72esMvV5MqMPPCdFdkvsR43ModMTrmZfQPKtoSCmsBJuwCP9qEXnsKKnJTZrAsu3F8ENquDqbBA6FGuyGeu",
  "key7": "5SzxoHgxnS2dn7j1mHPD2bbFS1uPv6H72B6ooukz2vmSW74QbVhm32akps17ugrDdMxnFxDPXLG2vifUB3n62HSJ",
  "key8": "rdk5M2tsB7K8bUuUfKnMrz6wG7HiWeWKPufGnv4ALxYDg5SgfqrXJH3rPqLjSCWCBsr9FmEtLdYGWHxa7HaqSkj",
  "key9": "2cbYC247tguReEmFGERsqGBvXCgG9jihbXhVoD3Caq5zrf6Etx8Me59rqqtJFCGpa9Ya9ye8w9iztDchk4ZSb4N6",
  "key10": "45hTWFgCdaahGaVFT6zUinw46GU8oqPXvQAHE7eeY8T6CEZwQkQEef2FgowfbVKCUCkhmnddpDEaUrwktAgMjWRe",
  "key11": "5Tdy9hytEQeevq573BdSkt1uRijFhTDvLFjqt5RLicCxAdwNNfozeDinx8KQCpaYuKkKC18jS5YurAgxoEY56irq",
  "key12": "2MnkkN7sZz4NJu6Mmmvsb8TrxcoP2dPxZG5T9ynbDUq1JipJ7NkPqZbmnBvEN3ecHbGk4GyBJmPScrskHQpMzNH2",
  "key13": "5L17Nv4GUTHbyyW94veecGJz9zxXf8TvggCioNYcgWcDsGPuLEdHsiqeYbCaNzaiJYWd3Ec3eUCV5VETYGuhuupS",
  "key14": "61BuGyF4iePiwoSzcxiF1NNWRuigCk2auyQsPfgca6YU6XXpt9jqm6ujyk1F1h7Ae9zFQMrDN2xyRr1mazJAUUVr",
  "key15": "4jC4xFvx8EPrNm4Ja3wPFNkLkEdgFFVpU1QUWe2dTmb4ipQuaKG6EB9qoXPi7JkNtadsB4YD3Ak29RQmtSwTourY",
  "key16": "4FG9VfRp55WvzTzdcSZLyb37aJXZh9skgAez3Av4wVUV5CPrEoTYShBeQDMeSAk1WRSPpdg1BWhh7XZcmdSSjKZA",
  "key17": "FGyiB6KqJMpqeyRGECxzNvPz29vTqrvFSMaD8ebfbkKycZAggbFbU7NfuyhrRYgCvyDeDWcexX17GDVw722cPTH",
  "key18": "4XSCuagEPVFYNGCEnR5i3fUA7kEwncKvEipRAWzvrkGC9NNGBEyCWTpkWmJbuZSvDCaAyEcCW78Chi74hFYeq2Hs",
  "key19": "5q4D8QqRmYVUvhWP6Kfu5k9EUe8efEs1mCWgm1dze9pDKrt7FibzAQrnHE769p34xZq7uK6Cv94dzq9enGgJNQhJ",
  "key20": "6HeTbFDrLwhSE2VJStKsVuegZrUacqUHXXBCYk8YRTGXyJArscUa3LmHDCF6FpvZSfuNyYAmpn9U8SQDfR1aXHn",
  "key21": "2CVR8tWVjd8YpietELkjvJZBJGWz1whrTnUFxHMn7c2KaWq22Dyw8X8Nda9dWmbqGuisNiCYn4dLRxPBtgW1oJg8",
  "key22": "31jJGzHXcetYQrVxnLa3revinKu8Q73a62JTvtJ8KH9hQGPJvY4CV654aN2rMV8nGAvm7FXiu8CDWAbQ4eT9LMfp",
  "key23": "3zCuwrxqbwPb7MdHPC2eZEcSVyhtYHZYFYv6mmCrpBFyRSNEUxQYgWCaLjkPocFSeTtnNT9x3ALMQqdAdiCUuPPw",
  "key24": "23vxyCygobHT8TMCaDzJiMtUeMaiFT7s71iwzkxyMDVBvMKUWPqQogwgnBjjx54BkZtDA6NKS4DSDvPUehuJMq5x",
  "key25": "3kbgrCuA7LV7dkmd8APUpUsYp2D1i8zZAGgTsRdH1oxEwxyprALx6WZh3mjXUnQtiQm21a6zZTysHD1uptaDLasx",
  "key26": "5XJ69zeH19FfNTF2wN1FmwpM5czF8uKikVgv1a2yhy3f4g6QE6JoxAm5UxmXgUxybGzPnTEfpHZac9WvTmu9dCcv",
  "key27": "5PYWDsz5dnxfXpNHD11v6tDNoU2YJ2nWyHEtEcsKyia8CbiYTKPrpgX9C55TNdtFkjGXEdATYXx8WbcT2ZW4sYcz",
  "key28": "2ozqT4sfXGZ6L92TFQQDTFv8MiQti1duDVZbJDtiEUAP366RQYzrif8zMVwQpEuhjDTPPg7G4qHwfDu81JtdC3JS",
  "key29": "58JntyLRzWyjBWPfh2XWZ2vU82RbEWURMpK8xguVZ7BPjJcUzp2m5v5PVw8RPrMyAZ5AwDMcm9H14eyuUZpMTMbG",
  "key30": "5xomFrLAwVxsbik4TLezrVz3i8CctfmoSamXaD8dzzrWkJAmfpcSghtbstc53gPeH77Cj96RFQBLxArnhzJ4k5Qx",
  "key31": "3cXMupwpYMr9noocXYAtgecnxQjPrD3By4K6aWdbhAGsUuUvNq6FsRPxAvMZHaBzYXYHget9EzjEufvMcexwTynT",
  "key32": "DVo3DPW5usvQ81UNnpDEDJAW2uksWfc2C64Urh1uNrrc1GgpHQbXVtrMMPmkDJ13wzcD3yogNi5ZhZjYR7gqBwE",
  "key33": "jd4SWUBjCWkKhrxs4w5xhN84UzuGhhedjp82fPXvrpLN9fxwDdvGz8ixVLfy3jTEWh5s6JrWt58nezG8qLAT4eX"
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
