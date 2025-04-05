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
    "59YsXHCKX4ZXfD1354ZqgoPHm47ndaD4DEMaGseG3EbvBKdAAsxQ2AmoEacNUv6tnYyCTer5i7GTPVsehGPFwYvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u7y5FbQWf7mmsbHZy6scd5gsZcZvyjQjQyeZjAqmgxPiwK2UoYqsCoGJusUXRo9jTGDiLKvvJZbMhDM7z9YUYQE",
  "key1": "4yqcARMWsQrd28YeJS3pZD9AKb3QFXGURPzXumDxsURTQRBpuPWqyyxeB8SF3ZmeBi4xxGQzLk4NKZp7UUiHD4wy",
  "key2": "4oZG4Vma1VJdG9gCYH3A22vJJr5S3mDBRGpR3ANYFWGNShiZo3B25QVGPuRCQtPFLm93MRfecEzz7WD2R2bMPTPj",
  "key3": "54ApWLXFEKPrRh7P3qK2auKkshVYpRgtiRLPmt3ux45nbi75uFDk1fxgs6SCpxoj5JoceqbQKZjbTJuJusvYcwBJ",
  "key4": "2GdpLcLzZe9fWseYQLUPJQhwmNyjcW8kiKTDTFSHn6yiS4ekgCGkGRV52btUjrr2Y7qizbigTygU9Z1sWrMXBQ45",
  "key5": "2Zj44BGiy1LiqBA3bowjhR9D6FpfbwmPtjf3FTWRFk6EDwxUg6Y6AdQaanEfELEZuxdKMdYgUZgsCyZJ8XeosD3D",
  "key6": "2hVoBDQb9BBQMSB27qSBv2fvmBcyR6JxLpsAxJ3rC1eWUBLH5K6ut5JF94E8HK56dEm4xASFgFN3FniBSnSWHQp6",
  "key7": "58RP15ZS6CTHrR9koUCY1GkUJZPTJ4rcmBmC22heL4iCnx71t4bLKFWbyD5LQe1kvcT87tjc8jaNfyFjD2AiegXA",
  "key8": "4tBwa6ShbwmEfb1t3q77vt69jdP8oPLPHHc3ZfuZLeHh3K1DXUjMcmXTpJvLbPVjsE1GUPNWP9QYePBsEhBEMCiF",
  "key9": "3AovCGKa7VF8iuX68XxJm28n4Xeto6TAoSk8xZPkGtyZoHWt6ynsKcTbjY2L5pFoHQnQKQ8GEWo4jnUAxHf53HCq",
  "key10": "4qHyu6RmoXJuinnusCLy6qArH1eSrVvwCYfD6DAWmxUZELBAoHbhbWgERp69mqWcU9YFGjbYJS7GjCg9B9aHJFVr",
  "key11": "5Kk5MmHyK52Ks62zacrJxn8kvhtrkqF7qRb4HPvjzDND4XcUQviP2hCQGoaHjpJxT1eMEXyk1iWRDtHDJ7nP6S9R",
  "key12": "2K4xk4X4PZpibWYHCccfKitfWFpUonharcH8xs4xro4uAKAtDi3jc4X5Dtd5SED7pQYFVaypJPosRkp6ZHBw7DBC",
  "key13": "2nXxKvRb1HSdvAKpQg1c73dbFpSEZURbbDNx3UAimnLwmxQw9ZfnnqHwVGexb5esmMsHDq32WtUHPiwzEww4NDaA",
  "key14": "4Wj8w53n51MXMbYjp3PP2fy3PXS8QuFXs2RuFDMZg2R4VYKPNzj1JULSWKkFi26VLPhyzoBK9VgiBobgjyPjfvP3",
  "key15": "2SBNkzmHMURzQxMm7KEeCrQHsm4eMkXHaUwtoVQwzphbWA7gjut7oHG3LSpLSBysRNQhumm484FAkbb52HUGxzeh",
  "key16": "3xHipN7cqDYCCxTXJJw9gxLPfkVNEBJwyVxNXpLHhVydUwGDh1qANcYjr8BRTahkEi33Ck8cjhbFtgDqWkBSZkmt",
  "key17": "3KfnHaPfxNahN6YmwFzVGMif4jJsjaZbGCeRbF9Vm1g4XzzaGbAPnMzFGprpvHweRhYbVUPEDTYiExjv39Fr8u1",
  "key18": "4NpL7VS7KDxYA89hPTMGAiUDoNQkuRZnorCPVqCFTaBxdLN2rqwtc4BmZcWuY616GwMs9Jwi4udPBvMSRBm9JPGz",
  "key19": "4psjBgb9YkjV2nsABzJadBYgfvsTQ5cAX9UHYQMFuYD82RAsu3JypLhSTcSuGCZYd1nv3ufam5AEN9Vn3uH2VCKa",
  "key20": "2dCyyJXP5ACgAGidgUAm6Fv7s66RsiftxUM6e6qP1hMXDFnKyf1aT2TqNee8wYLMMWTF1a2LF4yEbeREfZd7Y4WT",
  "key21": "R3hVw5Pyuu6VVi6RN7VyHTApkDPQZjcHyg5aAXccKhcjq5tBDLFFNAZpQW9HcZdgg18yzMYg1CfqsfKEno3gyuU",
  "key22": "4M7gQz62EwZEwNkksU6Dr6E8UShgnPfJtw9QkSyDQV87dBV4E4EcCUAS95sLo5Jbh3mJwpdw2cJomVAheX1S6KNH",
  "key23": "5CuZcwhqh12JddncQGaZae9H1MCs2qHqjVxKcnLRGq3xjevjLzVzDn6UvTVJba2rNhuBdkvMxsimELrdMbRu6jmN",
  "key24": "Ad7yYUY6PYNSUgsqLCfDDEpyPGD6WH9eqLbqhAiDsT7VnihHzu9rLDY66A7maP8bfQfbUQhd2w4KyUP5yhjd3Vr",
  "key25": "4pykWnxaePXA3nMiuA6qpGwuLRgW66XuNgPbQX3C24cs3tKLQnMx5y6pa14CwCvd4GEX8WgBNz8c3H6t12DzgW2k",
  "key26": "1TFYxKUfxNBNQDb3YSBcCKEKoyu2L6V6Mz7VCCwKRy73dsMfkZ5rMpd5ZfVxjNMgr3xY8zKpSLJb1wzPdf2dk7j",
  "key27": "3mBWxgUNDh1S3bFNv24RxgqtMKSZdZfQsBzDZVuecohAEssocRU4EKEvDKpsoCEnHW9zGNBc4X4AnW9nV6FPBoXn",
  "key28": "2rpVqHbVtW1Kxa7cLQDt3Xu6TMD87PpK51BHAgjz1CqRmmhLkTEXbpUdm2rgFGFM8mZujBnRUhsQQE9JCZo5xe6b"
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
