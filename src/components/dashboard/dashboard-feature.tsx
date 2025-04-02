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
    "4xSWdrubrWDiKYFpy2TA2LVr9zhdu4meFP19kQuU8h2nuWyCnqHwuYaQwoou1WjgiBHBvDYXgGt14hXaNFJiBzzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NiFLEHngKsN73sDLiMwYmkmybinaLwNKQCgiWrLtBKJeCNxdPAJLfcC38kTTpAtFLaVbrsK6DVMhsbYe1Yx76Go",
  "key1": "3sQDsgY3Mx76dVGvMSrjcGTFBXLJx5pnG3xCozqX1krTQFYaR8XmCv5p6BYBSTW42P78wNytrcNxahKGPm55WpN",
  "key2": "4oHHHR68zfXaFZT1a6P5Kqc6zN5RR1QphKJqGAcJidF6EuXjr8TR1Muwm1R5CpmzieLGXhPxu5GyYvkeGr6sZ4CK",
  "key3": "5kTCZsT9PHfwkUKB2HKy5JypHBoCDnUHhKj98ZTyoHCrErjTwcxogCyUCBFLRhwdnrnmiBbh5h7ZWSxGw6zdxnyt",
  "key4": "3zHG1NnPYHYG9feTWHnXGooM6CRfLqntTx2xdcWMj4RUBdgCRjYB3QxpquEKXehnjqGEdihZb4DWPytcpanrdtJL",
  "key5": "4x5rm4xJFF73SCG78Yh2cTnemQAnu3ff3Z7wzeySVCfXSurhmD77UgLmF1ioxnqJkM4UZpfprmBDANa4qVgt14Zr",
  "key6": "4aneK1iiKJ5RCvtSBu1yZv64NgCVY3yz8X5HJN94AFD2BkCxRLK5bc6xkn69AwHKdfZg53VvPNx4zFPnGMLFTwBo",
  "key7": "4NpsTuEB57WDW5ktbqKgYQ5m9v5vLLmnCp4HqYQQcyLt6xZC5HmuKf6JnJ1Pc2uCHWgQej3ex6jj1g3zXdwZuM2k",
  "key8": "5cHaK4ziESjUkbqj5yAu4owHpuhY6kMg7tBiSEiX9x1Qhb2CHBxubckgWziipGothY3TauAUhuGPZ4GsW6qbwxSS",
  "key9": "2NtoyvaNcPNT8oqedfSFFpLEgMphRG5vg4TuqMu3EGahwJ7kq9eK8hRxG52MVWxV7xXJQk6i66FAT7dU7RoZR3uq",
  "key10": "3YfCJpbzNfsfHh2i142TpBi2pmxHCciGkuKXhuJdya3ZizMPiVPY6HR1ijH7hRpeZZzJ4aJPUa8tvzYcPXwtNZun",
  "key11": "5ErJXv9qMMVBQHS47MHC2BMAkciWvhzYzKM9D8ZhxSQr8NBBP1pG4sc8wrgK6LVypKsP4bvBHxHJVBPcxuYe8hR3",
  "key12": "66J851sqhsDXTn7oXiJ6G2H7HkjLpw8zjK4ZJ1mm6hrAksDq4xvumnXQpb9wRaWuJXuYKjDWYNsgHmhJZam3owWx",
  "key13": "56fuHmnHrjZF9zr3W86d2naMmZidwqAxF5Gh8M4Zz3676yGb5kR5M4FaZhQ5dy1ftxpVwL72fKRXiN4zEZH3ikt2",
  "key14": "2NQQAVeWg6nSoF4qgSrhDtLeUfBsJVX9oxkS7kVRrYWgwLSiiMA3WWuPaAyoErc4K6FvmX4dy3oZoUgg3Nk5xjD6",
  "key15": "5jtFWtLZHwB9XQmxckaPbSMkFrPfaAyfpLMxM5R9otdRg2R79Jpa5TTU53owuBfBcGe7HqRQkYEqjDUivumo9PCc",
  "key16": "2mzhmnHCL22E3Ate43WvGo4RN4sUfgFRRTyEicJ5UBG5GrZhhxj4J327EeMR7JaEqThjry7eK8Vfk7SQeTYoRQvC",
  "key17": "4M6LGSAAuXmQ4QjPNUbnJwT2iBZQuuowfjHSMwCqstPNWvrKb69sqrkkFBxEywozBxCyN1uNH3bxbWs7HYtd2EvD",
  "key18": "2kANGWz4j2uYj6pyN1ivQ2B8XoopWa8whkoRfoW5YfE5uUyazL96mycwjH3Qb9URchFq3SrQ9tXxQoB3HjDYqjFj",
  "key19": "63NZoQYLwH8tHuMfKucSyTM26z6WZvnKL7yCwGmmJe5xLLYTqvbxST9qq6NsNFVHcCfTi7AcLZUDnJUchzEbfD3c",
  "key20": "2REcVvpnZcw3t1dd8ikyDbsBm3VP98NrGJagJbU7bB381FudnHLRCxAFUVgioo4JEhd3pfVZFdmsPqL3DsLmCoEQ",
  "key21": "Q3oP3AxahJmB7QTVEmnzUraJmzeuidRgQnnWL9D33wNcPpQQZHB7k1dzR9ErjmcazSPsjKsbKMSXhGVy8GtGnTv",
  "key22": "3a8akYdM66AJyYCihU6vofjR5aurzhe4j4e6Q3Yg45q24vhVzkCem54cN1cdPMiwEZRVUSs6bitycQy88CuWZAwA",
  "key23": "3nztc8BMyxXriZALswcAaeYh3FPy8nS4cdKEjH59ufCtTo34ruT3CC4K76oYrBzeFapNBRxfd6ofAi6WKVnsGXUt",
  "key24": "2Hyi4MbAnovvASJP9Lmp5ywnzjt5mGrNutUb198DZfzCtqVMxPRrGH8gs3h7ns53psAbL85o7HDfwwDHAYmu6PuD",
  "key25": "3CNWoXkrS6MP7diXyUNnf4LjhqoCPDK8wkNdC3pSuXYZJmuZXfGsJr9dvYdWi4fMbCuuycmo6Wdt7X4SfQGDPtn2",
  "key26": "2k2LMe8hEbcLFVZj3KkzbqFPRmPYh9NQ9E7kCPRNGqh7Ce5CaJmTv6Fq4n48Kr7hcxqih9Qf4TangndvNBW1mBtL",
  "key27": "4wVLJKv1BX5y6Lo9MaEWuuycJ96ANsgVB92AJXodhcNzoQRJocR6zNQhkMQVE9UTFkkGA1jcKiJaGpuPRGUNrAR7",
  "key28": "3B9FB6FaYgiZ47YGJtRNKY7vJzTuW3JfZ51TB8DyNmbWzw6XJtWzTcS2hoRFJH57aZJ8p4iYhNoXh1BS1juYFt3s",
  "key29": "4eH119NKBgoCZWgeE8gTUd9FEXqWALzpdkLCaYethHaoxNU2UorCKnXcd95GcM7rgRcPUSWPi5yKq9XDBv9YF9RC",
  "key30": "2Y6hprbiWGXhxduyvgwv87BZGoypRgpTrEidL7tRDNMmNS7gxMVdrVy7rJjLPSzCDAFzGXi6ip1mw1Z8DrxqX3JG",
  "key31": "P89553jwGiVHqU2mjmfbp6pXFs34PwBhokLmKP31Wk91Hq1ZCMCkTg4kDs4M6xrpSjgcT8aWMym4939WmkeSDy8",
  "key32": "3ajFq1Mq93kmSRKYk19U25kPaxeKmw4Akh7JbDHNZPq4WiX1dBpH3pdZ9ceDML8TTw9dhwaCaffoc93HhVTMLq1J",
  "key33": "2L6fvDS9khcabTjEoSUfqmyoVVpSwGChziUYRgaMvLE1tmn8CCXRtJp4T5Gt9UM9xaFLi16h7K6m38qmFfpNFRyh"
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
