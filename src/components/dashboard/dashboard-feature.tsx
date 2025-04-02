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
    "2GYPAD2UTmn93Kqs1axYD9ZgcHSSB5QDWwSUGEbn8WR1R9vtR2SCRqJad41NQCFsJ6fjdqUmeSTsha93USLoFkQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxDs3BgGdcS4RiZZ2po1BVzqB1RkHUU5DtF4rFva3Y7nygcDi7vbyHrLvNdMPYQZ2MmJk5WCSWtqwiwabJtCkZA",
  "key1": "2UqaRWBNY5M7Ym8kPxfbzdunhZmVp5uboAyHMXEfx2VZfWaNa74WhDw5AF6xWqDZYRZFjWZ1RgwrghQ5xJVNdQkP",
  "key2": "3mK2pk8CuqjxHYQF4aHtqECkevYqNbc8tBVopRMX5GnXrRQDbjjwv1G5QVbkLobsc3dvwoWavo4sUnJTWcfinFoL",
  "key3": "C21KcAzgXNRL1EMq8miaUM9WAhwyFHLCamPuKbaKP8iW9zsg2cRPzT41iwvmiFroqPfBEv3M51SpK9gj72TDfmp",
  "key4": "fgm3dRwqqzfgs55bbABtv8YY9gcBBuGMQ2eDqakANQqPQ9P4MBC1o2ZSjP4DmRZSQCYKurk5yCyivdgpQX9nVxJ",
  "key5": "3TjKdgyWSxG1mbt1HLo3AFAhPckbC4KDsgBEN5uUQ3VubXzHaeL7QQxoQ1h8FFqw2h1WUMeduNwyiGb9uVmoiUhZ",
  "key6": "qNniR8u1C4fH3ncAYNHfWC2UoGzcGn2wLu2NYJEf8VBbaCn2os7iywkN9emDoABhukA4k4SzgpzrBftLvCmy26G",
  "key7": "2m5ykPahEJVhHpjYVCLpRxvUbnpegcgXk1DqJmLxxkz5Y9JqNP2BJJmwd5WT4yit9CJhQ8b4bGnBTHwuZrFJYG8p",
  "key8": "5wieoCihuXui9oVRnhHLvhuuAq9xHL5YMZtArYwzifEGyWjTN3xX9VTwG84ptypNz2DxvfPKh3qeWogZi8YrGxg8",
  "key9": "4hSSn4247Da4WeTR539Z2EifTC7fPsKVf3QkZJdaqweUrJvdAsEfqb9CvMsjrGix9McLUMcT5Q8yWJ196udsgp5R",
  "key10": "5h3Web3mwCjp7cjgi6VvZNMqbYbCtQDxBegRiLcPt7ny8xo3kBYwBpnMz2KNB22yaCYDqwbWeMoExJn8XG7YArsB",
  "key11": "62EbkBATmYrF9tRsUFzD79nKKH9qitaUori3e58kxQWDLxZyZCcKJnQBwajc1Cag8JCoVUUMBVvaza14z5NY6kC2",
  "key12": "2QqwpYkQukd5vC7YFogvzzQe47CZuNoNFLGJs4bfm6mVmwEznnyvcYSv7QaYgmmybmGBRjpdMEViMduC5QL2c7jh",
  "key13": "5xTvoshenmPd51X8bndxLp5Fa1cyZMpkCaWtDmrNynSzaowEjFXaP5hvD8jNmou6gHT6ZygJVgXdsdyjhouvg4Lw",
  "key14": "3dcLh72K28xqW3xbqktPQHFQaDgUHb38xc8fx8bwitkv4yp3VCeaQWFKMDZaNBedRWigMB9e8q7rjgpZy81dDdkC",
  "key15": "2nftDDA9FrsPQdgcAV4VYvUoF5utMBneKAQinp7pi7PTVxmys1E38u8cC7HX85XHVwvfUHnmti5FJwx7TWxQQt84",
  "key16": "4o3yDj5QocXZ3DXNAfRXYy6EhPV5soY5FLTf5JutE5bjpCEvTcJdTjrJD4BJUfn9yiuTcLNKmaSFJrDSzQSvUeot",
  "key17": "4CohqCz8PgQrAumrXUeKJyq6522ugSbgDt7fuzGz6ifozq7AxwUsEX1t84BGkcZ68hVKBtFKxPqzZEdKSeJgsZhA",
  "key18": "4f9EkDtFUJX4Txwf2Naf18yB64scWCEjBWXpP9jNbGzsedx4KrAM9s971RnFwT1hKLbXWJ8t836evgYdyixXtnzr",
  "key19": "4fz4V7ouXGbDnTEH4tiyiAGRa8uWF1Y163gyqgiZxo8rYCawdknWZcr8JQ2RuwhWKYJc8Ju3zp8tzY9KPQkT8kcj",
  "key20": "3p2sKo7e13LvJtuGcpxLdUxtCGbWWwXmjQxoTy6gNSPSmuif1xPMiXsCBgf46gjEV1GQSpQQGbzQ6Gd8ne5dd1D7",
  "key21": "3So7BksuispqyudiKZ96k6WpNHaG8NQLTMeRBr9GiBZjh4uhMQAV7rHNa3SzJg44f6qTsbUbx5QPnjALCznZNM63",
  "key22": "2m2KBQH3jj5A6tXHkvjbmjqxnjE3jugkKRM3FvcCcd3NJfXSMseUs2pBKJUamqAkRRCUwb2YfGXgSbvGYZ47SQLN",
  "key23": "2BbmuxomGnSvrbJywi1jnno9qjvi7L79yyjFurFRuWBzw4GVXfL24pV1kzFVRKcCBZPgAEvgKEYq3vMunXpbZ381",
  "key24": "2pkyaije9PgbiSWEUU5xAkZp9pMADnnALPazDoHzcFiGKNURHozW9xuisVNbRr2mC1T7vW4TfCozUNkzTQ5TRpJW",
  "key25": "65PKkseVHdk9Qm81p3yPxVqQjsaAZTz52dA6xdj7Qzd7kCMig6tb3x71Wn4JKcqL1cHMqVAA1fg1rebvnaxa8YEr",
  "key26": "42r3JLE6ydfBBganoKk4ptaNdrY5ZxNcN92f5eUB37mE4G8Uxne5YdXBXRAZwgKbZ2ko5f3b7YRXaYTk42x7N2tx",
  "key27": "PNaWGNgYyJ4MJiuVhc2EiVX4TKGX8RXm2LYaKB6gdbG4x9tGoAtvaGPLviceiELrbYjFHH2cmEiBY69cDLTD5Z2",
  "key28": "4W5v1Ff31bPAAZfiHe595S58y4sb9sJ6iGNceQyeb9dr1K8hqff7UeAd4JetCuX8KTdu5MCfiSbMySCenBZpzpdU",
  "key29": "4AMSm88zN3mCYPWJSmVzC9a7zNewwosxq1N7227HxjhXv2mJroGpMYxWqDy5oCxwroYhkRVVRSPR6pmHKDiv1W2z",
  "key30": "3eWPQUabN5urjxD74rcki89bhUKM6m46mAeTbk3FPYHShsdbZT9eFRndA7cvTu8xphe74eWWLTCQ4V35dSjkDqT8",
  "key31": "ufB2ei7Cg9HAM99FTjGwKYW1pSaZhUvoQwgekz6Aw9Dq3SvtrRML5KCjGAzo3iEuKYHknz34QVb3pvdqSRurC2k"
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
