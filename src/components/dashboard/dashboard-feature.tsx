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
    "4q1UFpHH7xpSbeEdVR2See9Zk6FZWDEpdDsShE7o9U9WKusfDLTTq2W2zbzgTkHUWWVcGTu7VA91ZugbptwXA4wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MHyCsfW3gjW5dHdrbEgeKemvP8XsBZgyWBKuKnLj6MyoNGcTGDM8vpPn3eXS1bsPhHayEwsUyKBxgZFkrQ4uby",
  "key1": "arrVkkcarC4wUyLzKY5Wtratyopfi8fRBEif93emoywRfQ49zJT7ybFAFtCXhrQnbsWGUjy8kyUHMWgZzbmYfvQ",
  "key2": "4iCWEr2aMjkUDRcRXZoEs2bDgHkELdVsKHMtULW2QRPwZk7LAho73U2ZLWVUU9rCjJjkg8Xyo9s13xB3T9EtqDJP",
  "key3": "zY68YWZEsFCwigsAh1y2dXbPvvJmBLsVufiKFTmouuJXfw3joTnHZRgGx423xzWKh8adUMP9UVMT1kzm7Zx7KCm",
  "key4": "66SeW3LWJxATEb2FvCuqMLRZYKgtHHznejUdEdikffFt5PXRW3vrLHMLVqh1wxD8rfAQfc19xT9vuncYN724sVBX",
  "key5": "5BP9yH96kTFAq4iS2UndSMiRxKnBBt5N87pS7aRkkS5v9XzyMv2c6WekKT6DXpr53SNsutUguAryeTQXBjuFop2n",
  "key6": "5dUBj2296tcPgZ8JxhkJwB2tquwnMhsdAumnS79iZuQCUm23AMo4JtJyXJjA5Rk4o6cYpXkBTR6A4HawPr9BunFf",
  "key7": "3GiaNoYWDLrf3ikj5Wumc3irkiLCNfxsVzFnAcFXvHNFemV7HQRKXhaCVJj6Ah4Qu5UNhcdcVdnFCNmbAVovw1u3",
  "key8": "5JgpsbHxe7PNqiNoDU9Pbc4ns9wvSeR2citx2wQ7YMvEDfKbQWErQghpHcVTxUQEQkVhcqUyWHdJmqwNCqEpruP3",
  "key9": "2FFR2AZjWfj2Hf72MxTx869rLAQjKPprZVyozYTrCfQ9zX31pNhg9zVckS1QsYBTNV1TdWFpj1nNGCPXmkydZ99G",
  "key10": "2Hkq5KyU2DyBvC7n8BxYM7KVmfwzwuAocrTHCoTv4e3snBRczC2nL36CZqmQY6f6Foa9GaDHNA3tqYBYwQduAPtE",
  "key11": "5TMrwMCZWU914ZZar8bCmmFPZT9LjhxHMCx1nifoEbGt2xE3WjKHaGcMdE4WfqN95EBN6ZHKhWC1RgNUjG78DHmr",
  "key12": "41BaZ27jr1GjhAu4pTj4jabnc6Zj3wBweKvNHsazd73GF4W3hwsVu6TAeAJLBnnWMmfqVTCxBLARjjJtx9tvaQM4",
  "key13": "4wHiWKVy9dqA1QaFMFjk3GmL5dQcef7uD7FAdSbM7dgiRms9zMmNxq53zm8LPmiP6vJeuLFpLByVC9dLvHXnhmDV",
  "key14": "gGQwiapNpwU8WZwBvkQHGcbojX2PUjxM2GYS1HNuXqPrZ5ZnLhNerPpERQfnufUYngHsgFfiqsLUraipHawZ9mx",
  "key15": "43bDiq9Qoj6ipoMnRBdVFegyLBaidWSC761vrW1JhrXSgtFgGdbYmfywAFCHxuXfg4RfoxQdELAXHX2whkogksyM",
  "key16": "p7wJUGA1UuiaSoj62caKXMvso9U4A7B9Dx2TxoeaEiX5bRUpop9HwjRQhwrm3nVEQbbaBLMTZe96gG6xNSqwuQ9",
  "key17": "3tQKfcqtijafX69EqXYwV3K2JeohD9ajfg49ZaqxCuubgjd5kNz4RF2Byi4sbUkfWHAxo35ro4yrL2na2ZLhQSWr",
  "key18": "79FLtjzGpxsXDJxz6m9RTfpfBuzSVPP3kqyXr25UeMor315trEs6JAeMKKEWMRU3vvk4CiB3N8g71CCVR1aqoxo",
  "key19": "53Y2jj7YWiiwCh38r33YNGGkiquLsvwduUsRsRJvuxqPELLQ7JTCGqvPVS6UQM1BMbqSTvUVGaPCDEe1pUw2keJ9",
  "key20": "3qB8KN2gd9XKe717StfAfR44RSfk4Ya8ZifeEKg3WKqwLAHDBHpNp8nPmBWQAuAHWiRhrjGVfkZPCoeQNAD5s3fq",
  "key21": "65oUqVKcqBnkocPmDotUfdbqCMtd3XczWHSFnmrUtDMN9vNiTzrmNdeavJ1ALMd6BfvPH2nM2SJrqSqKW8YKx7St",
  "key22": "Gt8P5ammGZGzzyYHzXqdgpy5d7emsaBsqY8Rm7JQkQG55KtwN4tQPNE2yxNKgX8pGisrtzgwGRSsZv4b4GzyFwc",
  "key23": "2ctrAcLoko34ZMQfFSZMX52Lio5LDhGi48gRjoptcFR5WigWk7voTLvk4wswswH5SQvqZjNnPJFtMKB9BrH67iGk",
  "key24": "3dSmB3vDHvDSacNCMvDMRi8ijFrE71FDWHr9NrkfL25b5AbBw4mLJ3twLH7GFQrfMbRcwPTeB2WDWkWp4JkdBaYo",
  "key25": "3HyHpWbHsFUf2p39vZkmGStsGdGsM7faYmQdPpr11fJWPSjJwZRqUY36dSX5Bw4QAk1DFFGy7fafSKq4UzxVKuvv",
  "key26": "9wuiWHrhRWfzqAJBei5bkoVAw7X4LkrRAzaEFqE38LBdwMPi9PgUVNGAYqQkHgGmF59RovRiWxCKULzEe9dyCPS",
  "key27": "4yGUKCQxZFHhDbFz8xLG6q7rk95ogpw4ArSd9E94hVCdmHvmxx731zcdFMMvPhzAGV4qziddRUvxjg4YatyPbRTY",
  "key28": "5AV7wyCwLTioFe9VrAEUnTrarPix4gKSt5QZQFqysQez3uNk1g71iPhZcnrXsjLc8hmvRUJMzNghcsFSMaHF545w",
  "key29": "4NQgkkftaCtGWeYvtR5Vmq92kBNRa7hS1U8SXcLETVHRRa8NfzB7xYVPNbxy8AeLRhb8QBgBmzaXo8VAcJDDGaor",
  "key30": "5VWZatjL9DZk2nuWXHpuP7XpCm5sbG2CgLuM6Sr9YdLhKKSAFU3GGtSpYRRdYUrVCSME4mPpTXMxiYpbLnGbDN8G",
  "key31": "5hbj2ZbPq7b4LydY1MVoaVYL82FGVNQe3EjL6UoGmvxJezpJR1aGof3BZzsvpMrNrVB6kdtv3cYuzQmHGBCTSU6q",
  "key32": "5nQ7acSMCtYXYNjACjYAV8C7nHCcYdj1VCTWy6oeVgEUdYgCUjrV4cs8MJVEDDisPZnsnnxGH9FpF9WFd7SmMYV",
  "key33": "3f3puQ37xNCKvN7F8sMW3Svbz7xussHKibpNcyexNTfzSXF4PEjBBp5Jz2Zj1TJoNYothuSXBiHo2uzEiMX5P2xU",
  "key34": "WjDemp5fMAMG26iTRRkYN3C2rFASYweYFHvoTjyUvDiEVMR3XUkuUcAC3s1WNxAgevynf31w7V8pUjQt4TEzbvW",
  "key35": "5gpX2NJbWfzAP34AUcKh6nvd2E41ZG6z8befj7j1VWQoQyhqznNDQPSdCxQrbnXYVu2cHCBZTk286LqpFTj6Mobz",
  "key36": "4va2ZBGDgL6EQNmwFZiN3WzvK6rbCZ8n1NvJA9LSoircdYHgwwgENX3VJuu6GyS15qVWgc9nSRDryfhvxApLxVSc",
  "key37": "31ABgAmCvoXMaYVju722tY1KYGbXk3mAT7a5xo9RvhuxBNEYLRRGZWGFcncXpJchMmyDTxB9jvWyfp4jzzZVQzLg"
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
