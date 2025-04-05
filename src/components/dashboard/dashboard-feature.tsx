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
    "3bAWH9Dng6yHv8vVx8NYGjLFywkZJJjXHKdQcA1prfdNEBUbuPDv28DzfCWBj3PuVpv6VWoSuoyaf4uhZuAiBC7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "migmr86KrM6ynyVUuYzkgqk5Lv7dpvoWkp4yv9yt2eSAv6RSAWsVjKh77RdU9V6SXv1bh8BqqUv79i7bxZdwrmn",
  "key1": "48PCsX4eYUvU7ys6oD1Kb3K7Za4zBuruWLmfsGbDnSySJ2tLm2tFyfkd2ogiLKwxJhcHShG9hnzoiigAMy4wYLoa",
  "key2": "5ZpaEBBrbn6kzEVJ9YqmUAdFauM38fDxhyYmTsqARY4AfPpZYeMGqc4y9voFrU8sMGRbJmdTQ8SNxKGXDRj9Uza6",
  "key3": "47CswmDLYuxFLmUBTX84uJ4mcVkpwDAYvgZCG11hbi6JvPxxoy5xSaTq22axkfRPAyVBRFiyxrS3zgcXSexARcRH",
  "key4": "4DzpouvUeMfkLmCyHZFjAMSDb7vyDK2ftspW5D8no2naK61phD9RHg3Kd2ty9BNYoCWQPP58Nir7DiCZSHg4G6ub",
  "key5": "27YrQjtNgSPm3EdkHd42rS87RukpVYEwxQ2z2BdLwvH1tj9SiyB2rTZ85Nq4RBWpqHosg5ChVoxBbLhP3HiHg2ag",
  "key6": "2XG4UPdDMa7zdNLwtBptnJakZgAHzs1a2VL8rWHJ5UiP3d1xKgsAae2VmqsdopnbMmviLVTc9LoqNJAz8SCaSdkX",
  "key7": "3pmovEm6Sv8md8BYxNg8PoUsbNcMGwXKB7G74sSphmhNYyer2Lmd88sQ5sex1jtPPSkW5K49m1n7dE5sBVwxXDCj",
  "key8": "JnEvSpK2B961W7w3A3ZdFKTnrVTEv5SphXhpoyEJ6nozASx3tmQey7vdsM75B6262CGyNdd7qf7AyVCL3pZLNDQ",
  "key9": "3P8aYMJxwgehtxX7h6eMuQZ75hg5h2ZQCHeFQJTuPNcctew4A84V9R41QE9FiX5RXgtxroGRzMAeFoJDkUzYxwUJ",
  "key10": "5gRardR6GQ46RzZMwYsVutzU8478Ybf5aj3MGJv7ouGKL7cRiSKdLdcvASnMYM7bS1T4HmUHkLcNimnxbNv8W4xD",
  "key11": "2Cjq6XGZoJTeJPXPsJxcCDhVvymxfpQE7HS2GEBxUfF88NrykUWKm11SmETwEK3VTGWsXJiQcYTsFfMGQofqxfhm",
  "key12": "39KvzBZBwSoZ2WAphwFGWJzLjv3jV26haZToyu461ro3w8qCAPwDW14Rt2Aa1u1PMsy7xbR4C827VGncVP94ZVVj",
  "key13": "4Fsdv1CubTZ6qpUA95UjmmqQJYnDimSvb7Sy53TsqtTgrwbh7KP9jtYwiZLWnVmQQwvyX1KipHSbrMTEaxbaUARD",
  "key14": "4EECsMkbG59ACMyEUTRR4YDHJ9MefXpWiCcTkf5qdkRhADScWsEtAQBApyGfx2pESYTvjpAiiRmW2b5mWgf73nq1",
  "key15": "2RA9xZtJK4h6zntzus49fG4w6sT7qNcG6hSYDdN4t6m2hqwA9ugxLvK2Rh4mLsFLeGbkPihfDY7xnTLYWvwmTuYq",
  "key16": "2GgoKb9p4x481ShCBFRGoGcdVEzvGdKjaTwyWGtUSdbWh2gnXFvcXLGLkGN1sXShqwLoboWJgP5jPtKyvt2kKt2a",
  "key17": "4XVPMJ5o6DtwqBkwAxHEfGNAS94VTZsLQtY3N1Kc88uXtY5TQvZnahALVjEzAbBB3HiTPQEVtX5GH1kcTaeKQ6uX",
  "key18": "4ihRE1dWVStJCUfJPSFu2r2beZFJ6n6EYxHY6hSowpkdMm4hnHqWanVTMqYrjPz1ZgBfzbXa9w2XMNNDYiknmN8z",
  "key19": "u9WWzC4PLUWGb2UJsYBWUABhcsHiRdxbFEE82aAB4WsaGSjyTCZJCxfmbfvmzfFaRG2xDcZAif7wkdrnsbzGyX2",
  "key20": "3j8m6DfRANx2HvcLY6WmecbmmWyGCu1VVj8q9TqYCRvX1LMQsUcSeFqJw3xh2NuZ54rAF6PnJnZzoJ6vxd6GWJsp",
  "key21": "5bZaMUfDPjdaWcRGrkCey2tSCTy66VTJmC75WWJZkG2VHBLTLydjYsthhjeZ7skC8e4okYjvvX3598m1oorw2aub",
  "key22": "2i2eYKAWubipJ15JYMCJHdAtUsFf9TW5FPhJn2nfGnSLBnNziNfNUjUseHSyG8KQReNPJyUNocPbZvLzgKAf5uhb",
  "key23": "49r47bzMP7A9vYcsmjduCjLCkxMakEzXHoRRfVC6b3Fyi5C8w8QVCceZwfpLKjC49qVVaeCLEm6GdZeCo6A3ECQ5",
  "key24": "3N2vRU5mdgLWkGh8KvQpM3TvQXuvNPe4bfJzTY9uvgrW4K7vvHsf2KWRjKW8UhmD4UdDso3EzQKDJn7Pr3itw8E4",
  "key25": "3tre9bjbufBUW8rCBeqf7Qtt2HumkKhxHjZFfuJeGfe3QyYACgM4RRbBzppNyyZeZbD5vh8bKHmoeurx3yFYaJUo",
  "key26": "2hRxpVhG9Yk8CTDYmQ8vWQ2Q42vMgbg9JjepZt6Y4VhXnBKbX9EAUwxBJKr3Avr2rTxjwQ3KKsK3jJSrre4bkoNj",
  "key27": "2ToAuFnU1NHvztSnoN5SPxEMv7oomGzXGXvDcx8cbP23c6ghMwcjE926cBYDGLMm1eds7mY894THnrU7nbzzsf4D",
  "key28": "3qKdd7dsFoLqTNPxLb9tChqCCDu5EMNa8vwGksx5N9AuSywoNzf9qGh6iXVSzqoqYXt5C9vER1Jr8rBRUiQ6UcoY",
  "key29": "4TAGdCF4NaCd15FrfxWUqPqTatbJyZS5d2cMTnX1GjnfvwvXh5eGVHx6Hf6QvuDo14ApA8D5Nnn2aR65kjY7oJ6U",
  "key30": "2M5HcsSeTRPHMEjW5qykHuscauAqdcWwE9EGmxb4wWwdbGyGyhLZrVCD5kLcUXESmv6zYbTRxm4Zk3L5i8tfx481",
  "key31": "3A3LqRcwMT71wfbZjf5fspdBkmYh3UVdrL1ZeQPrUJk6nXJRtWsyPNtgzgRs2j82fPLNXBWHLzaNHvAcTP13bhUX",
  "key32": "5hKjue9jyrxP82xj6SXVURAajSLAV9EX2ocN2sV4nD278CZNLqFCnMgkfLqsXg2HnuZxGoyk1a41iNHa3RaeeB1v",
  "key33": "5nAi3XqWhHMDnfbYhN4ny7ioymTvaKqNXatv6iDztrwohQ3G93UeoteeJTMCqZH9xX8eQuEcqdCrQX2gapZPKNne",
  "key34": "63SQPT1yurAcJe5T5GncSu4BWbYyJ5NiTuyVuiL5ZKdMm5xTYBbowzyVxKKPUkedrBebVevPBRexe3cNV5CDUvio",
  "key35": "3jL2kUm1HV2a8BphsZKKZSBhh3Y6Fx2RsdZkmHYyEEp1UTUsQJCCUAL6TUQpTmxJWuZs1TGE3Dwy756mrpwMNHQs",
  "key36": "2qDvysUdQak5XwoToyxsoyRcnKvLQ5Wfvyv5bqSqAa4Z823tBzz74z1n2rHR4AfL8u1Zq4UskuKUFLeomxxWddqS",
  "key37": "6W4LQnheL2HVhoNjE4LemcQ5U1ftefcZPcZckreeXr4vY3WWmjvTWJFyiHB1qb8MfRw2LxKRkHu5PQuy3m6VbYQ",
  "key38": "HGNR4EXs2rMzaeuojU7Grd71vSwVkJX8yWMPzrDBhYyzPDECKo1MpsSHiL2SbXEAVxmPZVefDSwSr2DyY3Ry7T7",
  "key39": "5uxgDg1CMrW1VarRtTmB7Lv2f4XvmTvsATXY26BPMTHvomYF9C6yijmckum59dXfEsCZY5asSiNzUZq3VQRyRAU6"
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
