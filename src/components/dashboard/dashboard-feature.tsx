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
    "36nPV2suynTq366Msp5FTqySHty4dJZW15fkKCLHyR8XkVTR5v2jmerqbsh6mYkjJejGLzgyqVx8uPjrLvsD2Zm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55capNQuNcRs5eAsYGaG4k2aetWyLdHAtkk19RZCSk2N8RkR1iVwKgGNbShMhXAQArAt1MVuaz6MTw3k9qhrWPMH",
  "key1": "2FDKqdASbHaToAMjvCd5s54T6Urbhi2QsZoFxvt5oqRrUknsueow81MjGyxNiDLa7vHPudKZE2cg8Kd4isGZhHgg",
  "key2": "2EPbxfgZVQeVPFGQ29VHzkHCMax3qBqFgyvxK1j9Qa2L6KNYEPXP2QhNV4edYDC9DRaVkUxckTHjFxCkyVyC6HBC",
  "key3": "BpiNHCm9hV8cpTFuNCVbmPpwwwus2qutfvBpntDLW9mWLtuoxrEmBkxES1wsS5xtKvmrfea9g83ohjmbYNPCbsX",
  "key4": "3hVZLMpN8GtCVEXxxdfxhsDm2xmTZVGXyTCSzNYbXRsUHEcWkUoqHxDdsDGPRnKPGs8cXKKP4DDXBcXNWYsJTQos",
  "key5": "2YVsqecJw6owYmV2Nkk8rSwRjs9ahPJQZXD4qw6NPSgjuzyohidw93asEWora8SkpqHz8yhxbExdsg7rq59PKf2b",
  "key6": "2S5wphyjPwDP8K4zGaLN4ggdb89zAz6nNDb4DjcrpFdSTHNAAnGNCzHB71ZsnLfQL62xmqaMDpmFVZidposJAi1g",
  "key7": "3tLKiz7dAi8pAX1NLWSSBextdu7uG9ZDrUsZKS8X1fbyzZ5GFcn74zSUKx9KodTcDFKuo1ACa4bCe8mXtKdenVTA",
  "key8": "2j5EBXXWwri3zv2daMx8pgjQzrkoEwsVK1pLEraRqTDJedLX694L8ukepePHzj732hejYbh5V5c44nCYbNBPgcne",
  "key9": "2c4V2oNX6rk3n5KXxcuDcybp7AiB8mutBsviqHGf6YBCwDdCzn2CaJ8M3Go8US1sxkaeB3yQVet9UH4dW3ufHMzK",
  "key10": "3KMqy87W87JMt2HjWBCKktjVt26HNFETY8kbnRkUrSSYRpTxCgJhmfFKsWTNeP1CPaEucpHFDiXZqz6bSxPcAxxJ",
  "key11": "2jEgvJewifbiRxJuPimfxEQ81Be1WQ6fbV3zRCXuDknF2xDEADDjDyfAGdR1vEMhFZ2d4BYiApAzQay2sgg3RJQu",
  "key12": "5X91TpyBGsosajrwpMXBBKmdQsQQrRVj4LoikmfLGy5Mn9nb2fenEYSnwMS51gBthFCa6zfz9RrAqsw7HKJKvZEQ",
  "key13": "Xh1DjMhqb6abqbySAVAL1UbAtPq4X6H1SqJwMy1KF1xFiP6eTCMHvKdrfqGCZYoTfMdAMAWfASs4ZKYAfQoS9Rm",
  "key14": "5X3PU3LafoduHqyttkq5S9HH3EDZNF53nUKWgBacTxSyhwZKQCdD1gpon1SMiu9JM25oBeJmPvyxCffJaxvpjZKt",
  "key15": "4GsrZFqxtJ3Ss8h4vE13CayRWFXzHhsWLjKSNTtAXJCwhJcu9yKPXZwMJwQVAYdhUpUuQJiRqAcWotzh6PJFrJTx",
  "key16": "57X5z2Aqfgy6dFXSd68zEWvkdn3Xf82yX8STHqDopS3PgFWsDdNo6QBvS4t21qNVbX2L96YdeAHnWyi62z7p544E",
  "key17": "g2rKDFQoC9AcTempQNeNCUcNcjpeDhjL9ftniVy3if6nGXokd5fNqfbUPn9nuZPw19ky88cUkj1Se981Avks9zR",
  "key18": "46Nyew7WyvwRABn1tc5Zh2LjuMRU9ezH3FtrSZPuRchvDHLJz8S1uzf9PA4S23p4BWa8Ez2dNYhLpQCb4AB8uGjb",
  "key19": "RxxEvzT3bCEM7441xC6tU2gQ6u7m3tSHb1XCxmWiUWypctMzoLgFPZozyfFhT9sFJDQ2E4zwgWB4km4qvHUHSQH",
  "key20": "4KR98goPvdwekXFjvQz7RgkJPoyWUaaM8RvPtEHBfuEhjnBKjhaiUXdsvifQzqXKbJWMNSf1iYp25eP4CyPint25",
  "key21": "3hpE9qfBBLxHRhtxYZmRHLjtMHNkWHdDAFyhKwyNux6C6bT24Y7knGLA8tZ6CpzrcSRrPXKPsYdUUrvkdzm64Vbj",
  "key22": "3eeJQFbi47VEpSVXbxs5MQgaLpREdYXVsggq9jYumWMd7iH24rMoWez7NWZnwEAwoths3mQKFdNgBfZgTUB1QdQo",
  "key23": "Sfes5gnVUFRiFLPpcsJ6pAwghjSvdEeZEwwgmWiAf758dx1ZtbBRic27Gm6LiRJn4Sne3dKgaYfBNnSdJkFz34T",
  "key24": "2DF4TCwRSK7tRrnhpDr6nQkWv22t5qwprVrCfxEybm4hyxtTgdgvK49wSBiqJzzSzqAf7yyf1jsN2frhwwLd7uj6",
  "key25": "4sg8sB2oER7cxB7sxcEMEq1834vBF6PZDCefLYjdrEHiZEaPqKqY2VGwuXZPdBJhaJWNYLJo4d1XFVcnshf9FbaV",
  "key26": "61RQxeGkZbJXivBhc1ZpbUt2AVeCAQHRK7k5nuh44sP3RGpEfFjQugh9V11uQDf8eXmZKyD91ahaUCWfWTy9nqqx",
  "key27": "qDYmSPApcnNnxkZ7eZczb5jQ81zW5Z4LBQWhPvxRb4S3piR2eKCFCvJ6qfFSAoR6CKkiBKmgT9qdCnCLvZtSSSs",
  "key28": "32Lm9ki7TNqQCU2tGbvt7LwfXzoXiqrbKRNM6E8FGzV4aVnBdAQxSfHjwGz7QESxSgjv4YFvC4tdk5TPg6J9g4Dy",
  "key29": "4ai6TnEpzE4uqkR87WicSfycSoGCuvJZQqatP6S7H8zRXsCBtz5wBb1KZFDQSwJk4dPoXWcXKd6PPTwUXU2aNggH",
  "key30": "2gueEcbpiw4m6Q339e1m4YXT95xyYYChujFv7Wwpae4niJiiG1kQK236Bc39eSmudky97NsCzCLfDumWGL9SmcKB",
  "key31": "126aiA646x9VBS3dbZtBXVb6YSLapxoPH61zHnYdtHcJ7Ge3CnEoug3sfQSWbpihd5UiPydcgk3SwTo1MrrE7S7F",
  "key32": "2iR923vanp2jjVJMJ7henAChM48X77Pdn5a2wZvu9Ar5tVddLFL7HUahqV7V3UnzcjcCY2CSsuSENMmL6ifTLYGB",
  "key33": "vpKki9nyefe29dumgB6iTa5HfGszwLwNLXjwGiT42ohQbZc6Rxfebq6RNeVD7rttjZtumLviWMDtYqhEzAsSQSJ",
  "key34": "4vkd6eurXHZErWYfEA9X53G7tyTpFnjKv6TGG4xaAGcMUzXx23p74k13M3y4QG4C5nFcDhLg5bQEUc8D8ADoLkQn",
  "key35": "3SZcpUQ6mSRKE9Ax5r925SprrcAdnovvY9FGnfx2Tvwdi1kY8b2ur6BpApV6YDvVagV5MXx5ky5YJjAEvrx66ywQ",
  "key36": "31ssDfadk4cqJciCNqxUaUhAjGsXXThGfYZnDgb9c4zdYxvvRPLSoDQ64nmYiSzKo3hHipAhd5Gqc8XdXLFBZ9Gb",
  "key37": "4je9u4bRJEhDoJni8gpJimVp8LFhMq8xLUVATAL8AavztigQtDcs63PVKX8kS9Zs4ULg2WjsJ66War1MDQmCRX7p",
  "key38": "4TdLGyJQyzU1bs2EgujM3652m3SsK7XzCHz2U7Cfn4QVrcAxsYJHkD3WX13dczkHHeWSb2oJs3w47DgcAKz1e1Rn",
  "key39": "5UJrqDDmbvqZTHsS9nfAk6raB8ju1ZPATVMRtsFjLyisHKvE9VjBxxZkdKknPbid3ZZ9VcsXbs7aN2jsnZqmfPij"
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
