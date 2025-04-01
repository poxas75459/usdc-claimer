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
    "5MSo1bugdCdNN1cSbL9FjAmJe2rnRtwwwvi1bdzrL1ovJ4iDG7LKZQm3ojLmSND3zj3bvJbeJQK6Xy1KzvyjcCNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MFsvTV3WpdCyH3BxsZ7jxVZLzswN5ucffvAJFEdiAiKnr2yPo3SmoW7N9QVpEqc3SScwFd1WjM1d4yGSNwb8fiN",
  "key1": "TxFis2BiCPc2VS89puEVzSCazvaJPau1SxCrRJYh7d6MQTYcAYh4TR2TgnTtsvyioLmJDn15DcNWeFF7rLDV1wC",
  "key2": "2Eyy7CvG6uZ9zPnSAGeDNwXQSLdNJE8zJYBcxCq37b5UpJZuTqds7hmmfqQySCrB65LEvauGMoSghitRTDGc6r3V",
  "key3": "4mwdMD5xHiFXv191eYENuwjDwZ6Ajdh7YiEd9nMSRPrQEQoXsiKFoTZNfpV2zrEcRFWKAeKqn3cWfggkLao8CW6j",
  "key4": "rfsoWFGuQJu8atipmaxLWK8dXE4nP6tsE3rDD4LGv9pHrJHaps2Y2rhAP5XrRNb4hEPNg2UioaZTTQzJY9yTJTT",
  "key5": "66EmA7CBQB8tnFKQwMQwN1EjxBxz3ejXLTf6o9BVRTTGhfgziJRRzDXxoPf8N1AX7VBp3w3jZ48acWXVtzZxXsxN",
  "key6": "4YreWV7NsgTPb7NPtQfG8HMfnWbbN1hXYnzbxjcevJjH2bVXT9oADvYgrBEUpofuMT8KJAcMpnK4rxHwnrdf7GCB",
  "key7": "2LosfPj7PDdh2nTpjidzwBnuAar1gtnd4P7a7QkU9PXYHahZxDMwve9vuwNm39Xfb3zFQegGXjPgE2SLtTBZ2Ka5",
  "key8": "3NiigAhF2csjr4hHQg7JJYvn94YQUXgpexr4n1RXpm6z4X5Ep3WE5H4821CeCPYc2i6ERnnViHXM4LRMTzyuJEH",
  "key9": "HVQiYDWY8XcL9n1KuatJwKTvCV28qNVk6GDtvj6f2UBpBjwPjAahJX9H5zHeytZ8PgYkjobwDHT48PKaSD5ZU7U",
  "key10": "5YQKE1mzU4wvxx9GWbEM7h2MMrBsER15dwfCTR1T9mqops4G1WeLeXSNEM4N958LLxMS5tWF2G7h4giuPjnqsZLH",
  "key11": "3sGw2LffiFPi96wysttcmm69CxKwJrmSxPMijamEUUaRRsiqpH2KXB8i8ktoH74wboiD7ieALSP6a6U8omLUAAus",
  "key12": "2wnYxMG7SWweYBGpuKaz9pPqhK1DuGbVW56pAXMaR8wCMUJg8mRMuEcPk3BTc26on5745urqGUq9Yxy8CL6e6Fvr",
  "key13": "Vh7Se8gKiW4NAsBUEfhadSsBczSt6Ja2k92g1EWwfs1KN3ZCnDqFSPVJwpjpmhPgvPsdmtFjLAm9tF4vRfRnk6o",
  "key14": "22XMqLqRXhYquU25dHZcprr1G416yV1F3bsNyXnmTL7Q8FQKzcLTC2Ka2DQrAfM5kmgvq7Kb2id2mVDeSRSsLviR",
  "key15": "3UDvi124hrH9Umhx9hRE2Msvnft7UNeubfBH8bBn83TDJRFJFEGrNb31M4UMLHVnw9uMn1va6vZUMnLkoCZod2Nv",
  "key16": "4X1vQw8BW11N8ScwNPvE2ZEXZ4msqWAidYYD5AtiVmhpAtjGRzY5WAFZbZAkzmKuK2EQXDdXQMVXknhLehgok1JQ",
  "key17": "3KCW5nLEbZL2cBzFt2kPEdxrV8ZNLWwaRUDQeXjoQbo7yX3RQBjiiukzCQHcNCAM8N5swktLm9w9HXUSj8xuTifg",
  "key18": "5DkDaSdM3yen6NUqwTg7prkzxv1xMBeC6vD4gT684fPjD1YNMqtRW3SXM3QoARgt2kTg1kLDJLmpmgCrPGsKgNf",
  "key19": "555xxKrQL2kS3GiKvLeuyBjKSQzBMdeMqMLWiN6boCW2CbuXQu1hnCcnTLdnU9mGiGrdxFP7FsESKvmwchU8tCuG",
  "key20": "2B8JSYC4czJoanpkZF6vTw2DHa7Ngu7zTsyqiBSWBHoeoZchcotaypfKVaetisaDxi5zZrgkVM31XucxRfZEDhyW",
  "key21": "58tn8XSd3Xim63s8JRuGXFi9czdfY4TN3J9QGm3jHJJZUaMECBxYfCbytHHUsoM985GJDyHpXpC6wp6gjnWEV5nX",
  "key22": "5pFqYUR68GeJj4cZFwtNCTg4QqgSDwZ3VyrizcGaRVXocP8vyGeU44E53T6uni9aitassa8AWyRNEZACqV6T2aaT",
  "key23": "2msyvZY28AunC7dtftjEjESq8KEVYUydTQpfcbjDvgEjKmGZ39DQLM13XZdU4CiaF51o3HD7VMLEkdbG1Kxv6X89",
  "key24": "5ZSW7ASbRPfgXbUWeWmLFnk8hgDcpwafpeAPdjC5xDH9aA9PtxqvVyvtoPBQACaHuG1hcHn6WSNm8kP16U597rAJ",
  "key25": "5kGGYsfePThmSe2MUvTKCiVX5CsA5RcqDC7SkJLsdigNo57EFwPRdMxP6iWMhgFvGdSLAbhTVQ85hdAagCmUZDdi",
  "key26": "36s6gkR2SfVVFEerUEe7Gnf8WtcCxC52ZvH2sQ93e5A4g4zNsH4MuGrUFsC9p9zNmzWSbJWvFpyvhahK2JF1DdyU",
  "key27": "5nrG1CQTGw9p9KPFDGfKQjHdQSbfst3xEC9QoNfEesrCJZhXzbHTcvUEXiKwtKidmCSYGSvCJLXaXJ9YZ6ZRK8Zq",
  "key28": "4AQ2EHUUUy9NR8AjBc6pjGjoDbqspbYCATLzEYaUAPZ3RhTEvi55GeS8efhMVgreAJXkGKz1DeHLzaEVstj9eM9d",
  "key29": "SaP8WM7QUxSbmQjwY1xJkEEGAW5LqsZ7w43P5y9wmMorsN8FRD8UzcvqSPYY5y9wAuWVvDvwEEoJ2H6TQRXqaTs",
  "key30": "55agNApF5BbU3BEgeBta62U4acyCzoCxg4cUxThvkyAsWfK96KAWkPTa1TTcY8C1yWo4jDmYAM7q22Fm5zCBJdAR",
  "key31": "5ihryLcms6LG6ZTiADZ3kHXyXSpbFRnQxnpQnYZF2ufNuEip6fvU6z3GxLVNCjKLk11k5s9eksCPHHKSgqTjjrZu",
  "key32": "2kEtb26RGy8yb7wEcn7BDCHAVEpgymrJ3agYfGmSbbtAQucbN9uUkyWAcFejuC6VxXzBACrcVZov5VcHFpvNvgc4",
  "key33": "57NKCHAGyu4nZBy2LyWhAoE6MsqiVhgBnsxTocSMhvJhXFyr2KQgbjxpTbjonNGFJMaurk495L8dQEk8tYdXiX5i",
  "key34": "43oWNKDrfbUpNEPYgQ5ZSTZTW4reEogcz6XSSwrVuYeqTghwvdgZxUY4z352VE9i8MyLMWzaZKoDgwympnQHMHRs"
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
