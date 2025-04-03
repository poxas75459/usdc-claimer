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
    "314cU9PuTtPv5w1eKJhyMtQ3CWEKk8wxugwqNL2X4x8LC2J6rmf3yjynuGu6ibrDPajqKgwJmz6J2AVfkZQTDifn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqDXDcm3Kf3U3Bh8RA5LXCVhxXX9N2gZJeJWVayRNDq1RwtWoHNwr7tJzZ1fsGNa7N5Sr2z3RFtGnvkTMwcuCCS",
  "key1": "5ZXND5U7npArRMVxUZkEZ5qzKSdA8nn2j24SyrauRWfkgEUnruYh7BgaqzigMVps6CsexPTvimABXFtAWHvYMoxf",
  "key2": "ipVuXRt1ye1x3KP2Hgk6v5Ncu9empgxo3FNFgvNG6e7EwDgdKZ3n21DMHgSxVtxLux7kN6my2w2GEzLbTjUPPMQ",
  "key3": "3X9G7F6GzES9AMViRKtyVeHe9ipXEuGA47FTgSVkGoaRxpFyxW8NBBMNi22g8UZNi5tKFHbwjpjpTX8cjueTLKVF",
  "key4": "25VwRFUoZ4TT6gnGPmYXJeGCRWogdBsjPXKxybvxKSHoLwSUVUx6TnKGyUpZtwedtaC6sEmGBSyxZJw9Cy186Fx3",
  "key5": "4GUCQF9Z2EwU9V45fYBdP45zzpThpCrh82VGStpYft6R3Ft8dJHsUXesaPDiYAQTDnuzozk4nmTmiAm8RP9Dum5G",
  "key6": "vySDBNb13GWw5XCxKq7K3Y9xpbpDRzD7HYfkws2abkoF67HCes1fjrTcJApKB1HWQ2bsy4NjQVHaeHX3ePHwn1E",
  "key7": "2CT3RYT3J6XKwYFpx5ZUkEb7ts2wbTueG5JnbW6RPUQGP35tXYSYZmTMvdQarZW9wg23Vd9CxLFS231PXZsYak8B",
  "key8": "3zk1yXCXcDJTmvzmygcYb1ZKmoLaKLqvwgf3Lr23ceVfuAzjygQHwc6KP3WeeoEk7MzKTXnJ3QovgURY71gX4eDN",
  "key9": "2hr1LGvmNCjCWmAJyfhiu6HBBEunm2umuWtCMBmTFzTxUMV1VXiVG8r3SgXUAwibvsjfmqUxsq74JcX8dQEfvnGL",
  "key10": "4xUyk5qNWTTrrJt4NiQuz8KnPsQTNBMRJbDoJMNKwLi2VphL2MBFEDJUri9Kai9Pyo12Vi3hpeCQAdpuWPL1Mfyd",
  "key11": "23Jq7TjjkHxcmrNoMgcFgGVGAHH27m5YaUFxcgHnqypoPcnS5kRWNoR7zykunX2P5zJs8MxReGNmMMFBitbioWn6",
  "key12": "59senY5SFu4khKkFJZzuLpr7E7JFcPxDZdGUY3nTpjTnZCHeKBXptP2qpgH7Ackmq3b862aMHs1DuRV7jyEGFZ4L",
  "key13": "2CMvhh3wLxHYwd2hJzxNPEPEyXz73TB5KhyaWM3DmHTmKbTinj3AxLXmkZMnRPiBjtb1bb2nxZn25zHiJQHsYDgn",
  "key14": "25hxw1z3EcCwz7FNYJe1g1SHJa9yRfRwWnyw9PPwi6asqEiKPCBMJhpXvPNQXfKVEk6BfArmTv14kfztJWSYccr1",
  "key15": "2JZ4GSXLJG8dMs9Zf2B8bL1jZNDr6fjYe1JcN2gAvhLbhBsaCtnk77owoLKmnmrnrHANPCHsaeqLB3qdnHFexgdR",
  "key16": "uuDq3Lf3se3YrBpSUh1LxGzS2BPQR4wTPRSy6fnyubr6yAp6X4mgmQTck8LVkrWcUVcJmWow3xYg5PKRd913k2x",
  "key17": "2MaEaftNzVHmiLHsNBgishVX6RbSLreXgACumFszgBoYCkjUftDteoigdmTQUM9szB1G2Lh4ifk2rvPbazdxainc",
  "key18": "2vJNhcbsmvUeZhqntVWfUppqXFafCNUwTDNodgH74CoJHatxa8JV1ki9mVP3uhSEecB6JmGv12aqBrQbxy1QRgNc",
  "key19": "5J8ibG3rwsE9PJaCcXj7uev7vrhz4qTf1r1pRd5UAFpFWCVSBTYEQjpCAwrZ3LyLcEAY3swBFz561wLQNPKFbjbS",
  "key20": "5HUe28pj9LQgL5QUVxrvBAKf1pVyBAVc9LWksa4pAuozuuhbkcxYBVtNniD17hX7J5YLJ1R9TUoV5jz8fLafpmoa",
  "key21": "2fraqgJs2jTYix9HrtGsqUd2peXSfzTfzFF4orwN8btzWrRsGgCpaUFAJ2Sr37NnSgyro7UeSxrg7zAHfaD1GhCz",
  "key22": "55BsbfB5PNQyVqgPQNYJ8YhehnQVjcBeMgcgkcXVx3rWLk815LefHvDVN1pLLoscxfEw46zf5RxDkdfyTkQc5bRV",
  "key23": "3acWKMmrELdxt7ojzTnuz6ao265WaxseaQSBjVeuqrorCsa6Rs2eE5QQQubB2XGFqtGPq9egCK1GcL9hmKh8h6qx",
  "key24": "3D8crkNugZ1uvWxwDVofmtGEEF1iiBwyBjFLKNRUun1mrgBYC4k8eDzrmFewPQj4MbCjWxw3XtwyzNSQzmjPPMo6",
  "key25": "5FFU7yKMM4jjhdvfnaY2xXs9Hevc3xZ8Hn2mTNfBTBwCKdrvccD3BTLygM98vRorWFpvoPwhT9jJrMk7sTr46qio",
  "key26": "5YtRptnBnVG4LvQvowpDWBWCiwH6ynRNT74bJMKcdfbvHmtAsXUzyrc69guTRhFzuozi3skweEyEC6oXBGabyswm",
  "key27": "3gHKZ9YENZ3KmiZkbNEcv8BRHG7cQEQSP7sRgPNx9YuCS6hwWph6kGYXLXMghFABSqp6ugh6iVgrVyQqdTZzzqGq",
  "key28": "31xZSoXKLaaa6r5KNNtty65nnkWcsvJFN5X9mr1mE3hL6AYEm85zpQH9UVnmTfKeXPTeJkzR2yvUYCFQakdFT6AS",
  "key29": "L8UemQx5d99rJHpUMfcKWQC9rRNpUircnonXsSjc3JeAWFZWyKKnVYN5SvMquxVyzk7YYNnRKVCkTeiFvB1MnkW",
  "key30": "2H9nVAKLZniddY8kWQ9L5hndnhoECW9cZUuwL1GBWyQzvycxyJHKR8enKDYoXwkL9XZuBVtq8guhr1eJUkzkYeD2",
  "key31": "48A4VQ3VoFiGqsYDaLXiyhvDjx8i7NSUJjEdr2adP5cVTHTPZgbeFX7o5q1xgi2d6gfNZvFqEKFLVs6itW4uBRBg",
  "key32": "AJHsEGzhEpeefhUru8uFWwiKccrbYNQVbmX8iEqag7LWmiHf6XFkayNWGkwkCbAzf3RaQUi2i4Bey9YRGoKSkTQ",
  "key33": "2HQEpQmqiiyaYmEFeFjTMFwELP58HVky8Q79jvteZBD1js8rReJYxnHWwDdXSkKWxt4SukKsrPqgHPmVL89ve1gE",
  "key34": "5zqBFaiMBVMY5gcUc3r1oC5LpgBk1tU9acpLmENxkzaGiFFLSwaL2U71F3BSpLaBWh37X9LXNDfTwn499m4dAfUk",
  "key35": "2w48sSCDjVncd5oaUzZKZSpybhtXCf7DFhPn67Ke29nuF6HjCh3pVZFUTVuK9ZbLyVcGCGfEjF7WQn6koiRNfFkA",
  "key36": "2qR4ywQiPiTgDawAdCvo7vcR1BgiADNx6ZG3F2j1RXpTXdgaLKWGCuD5XABJGjuBZ4vEo7pCNqPchqogGSFUwyfn",
  "key37": "3kfVKijoWhz7mSvQjNiL6pisssbF8dK968FBFxRRTUhNVwgSqD3YmPUn721MqvLLeipvcKN7zaHS1VorPp5yYh3H",
  "key38": "RAiwyGvJv2Syfv6GS5NFBr4eVZyz4oeRNqfc48tmZXtUqSZqdasfMHqG1hPKw3tDTibs6w5iv6oiTbP3idJJAuE"
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
