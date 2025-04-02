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
    "WEKKL2v34KC4wDUxbRdVC7bDtQ5xRgQ7TFSjz4hkqevob6A79S1FNEqkq4jvNLh3MnR1LaD569MvKH2KFMJzGSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GxmvpJHChY6eSr3prd3yR6sX3dcfAkkQ9bo3ZQo6ykBtBTJWAssn8ceTuhasQR5BqygGsGrYqh8DCo5bpkDze7o",
  "key1": "7pZpyQDeweXZYKN2gBRcRXAR73yUw2DNyHR3WZ9KoUKLwxJv4MgVLzgA4SDQsnY8vrtYdQ3fJDi9Z3Lgc5bhiFh",
  "key2": "3pmSc1qCqxk1pWbshsotKUsjQn15jNGutwo5Vqrv1N8oLBRZzL8m1cTHU2wgkM6cXQgvyiWPLRSUcQSdnrra2SSb",
  "key3": "Wu8gQTpCfUyD4CsBfDVQuKvteEwrtHLadwzZ8kbY9zGj5bXhCwnkrcyTQF2fZMJDRTrRRWBdZ5pxJWGxcc5vdxE",
  "key4": "4f461zWWw3gtiJKv4keiJ1duo55kbZ3yaJ4ecDGWrR8bjpooKkbUmKgBWEdYHXr4tuuv8cbzhx9eeoEnSdWJCumP",
  "key5": "3Q1MWwswxgSJnzm1JnStXbmFTPZY28oXVs2Gc6HvyhumzcowNyQt46LHTDgMiGwBvJW58wSyU6WHGzawpnmEYQUW",
  "key6": "3zH9KqW48a9vpbujEE7Wq5DAWQyhFGLTsJsPUqa9G7WfLPuVPJL9b2xzm3BsxarzYWonC3qutuWHJRroVeKg4ty9",
  "key7": "b9W7D7YPpuLeRYHDBoPNMaULPLNnghk4wDtePHtu6H5vpcKzUFK49YSj9a2NXkQLk5WgtiT1shCjRmy324jRArQ",
  "key8": "4F2KuJoEAcUBnRv3MfjT4PgN8Dobugh2k1cAKUsxddjAg6ZNyryq8bP2pUyeNSPrnNiiihY1J7VXQuoT1mNjZksj",
  "key9": "4L6Aas8sSC7Q3z6ac4EaHChUFsZpr9PmYqanz858mVXZzBxBJRgpP1N9dKxig7snW4jqeLCdPp7TxHehw4x8bFA4",
  "key10": "474yMXX1VNfwGi63BaDp9GJLDQDNBAh5XPoJvh5H9BFLBCKVMwFGrE23aX68pEfTZyo7w3abyfz3Bf1X76DGq5U2",
  "key11": "2mB7A2KJrwmW5Fh8jwRk7qHAG3TWim5gxGXJGkVChm2ebdMuMPEdR3brTQe6SVS6wQ764c2tY7PvLKeeUEovZYTs",
  "key12": "4yHehHoLDp9nXr8Dzm4SW5Duke8f7kZcdpHjQ7sACjwy5cRwXAMT5vPKAYhwSndQnAw3mRR5sBDymhXWQSZEsPKF",
  "key13": "4V1s4uHCiJspTpbTz5Y9mH5QWBPxPqkqv5iaR2PANRnPeNRD4nMxLmH2s38XKCaVPFDGUh8moGnrXfK9MV73d8Vv",
  "key14": "bfmQZXDPfHZtM4iniqcr6sSyWdcZHorE2snNg5r4XH5Pq2RvKXgTd8VzKfmx5xCy55sN2K19BepMoadTQ189hLB",
  "key15": "5GCmvHSPkWXEDS1TYQNje556kcHXJpNWE88954NFTCpiv7Cv1hUiSpY5Yy7JjmXb56Bs9uKsZpJTrjfAkHjZFjZ1",
  "key16": "3u7G9uMTjfyv7PhFxuokrq2qKZnyAVkR7oxsTkxSTr5T1SLgXKwjQYK3arfok8EfM1YHg6yJ5vRXcZjKTqnYS2QF",
  "key17": "tJi9S3ev41383E8UNEFkNGTufoT79axCFdF9q9DSTvxcwypxSGhHhz7FKZNhTYrJMMyXg5J7phoccta3kneo11E",
  "key18": "3SNogQ8cyMaRDFy4NcTdoPz3GEY2VbKFhDRyLGkRSirLkuTagk976PMmS7svn7TZty2K8eEfFmVHuyfmKiC2FwMc",
  "key19": "2JdziLveRXi7GocfsjkRcssB8xxqeQjbcQBhd4cLfnEd566fV1Q6prVGqdu1F5TprzEfUBQTt8yVXiuUuT3MJp1A",
  "key20": "3gwdDFQZf4yd2Xziv9jyHvzW1mLUsR9s4uEd4dVB6LowfDghqUxAohPzGVXTCAT6YPXYGoYExjVC732rSuk9Bupo",
  "key21": "cn52voazZ8eUAT8QDRnu3DXcsjGsjWT58h8Q8MUr1r7kyd9dhdPthjaFKhCesKkBKqVAaLXKQqSNoAMq5Atzdke",
  "key22": "2kzazxMvfsXSpaYUDg4LEPRPhNNLVtU4CGpjQ6hJYZoJ6ah5Ux8We44GLPDTBHvXWdvpDc7B6dRifvr4KdxXndqw",
  "key23": "qs9b3MsLEcuLgztunfa3kDSNsA4hSEPpbPWQP9hc11kc8kdM3ZDRjPCkjC48o1hTAvAVKEJvs8Mn9sYjNUgbcjE",
  "key24": "4ctPRYME4KDGcm3zFamcMCHarmYwS9Ak1twmT3QaznzPiXzWGD1dynQWVkT3m5Xb6dj66bMi6jWG3taD29kKDi2y",
  "key25": "VTBnnLCmRhL7E5KpTHRs3sxgFKtgaBYmsCz34SnbVN3PanBTMiFxyVPAfTEkFUPWmXpF5m1EJcr7SCtvNEoSfQL",
  "key26": "3fRjLV2wBxLnEU8fnc8yhN7zVinaivNaX97cwz3B2Ys58X7RyekzpgjL5mVC8P4fRsK2uwCVcZ6ww5mYWk1crJmP",
  "key27": "23FBiQ7JfFzMoZDugxVEx5oaZDXrnD5jMfy5YQ1w998YhzpfnuNB1WDX781szABXX93n5FehPSGWVUvjjZ9Y5Y4n",
  "key28": "62cBtTuo6d55dQDbk6ZsEotKscwTNSjo2Y46QUv6Z9n4QMVWiGC8FJutVSZBC89SswMb8DdKqsxnPZ1W6UddR8uD",
  "key29": "wN1xPfdo19HDNdtPG64V5q4r7xEAuZcT5sXNeeCaX219G3hg79e2ckKBBd5aQDWj7PVnQv5BSt2urKzEZmGRQHt",
  "key30": "2p9MHTCJbVyuWEvE9m4N19sQ1LuU1VNTE769jvZNtkfCfpBvBeegkcSXugLMFfeB3S76gyPPJbScPcM2BQUX2D6g",
  "key31": "3XCPFdHkZnuGwATC26vRpgoyJ9Nxbxtw6tQThbeWNXsAEr1qE7L5fvJGCQzzMkiPNzUWXry2ZKacFHXKwXj3cQEN",
  "key32": "27TzFZ67GzEtXRpsmgLZrJv1UcWgqqbtaHZfn6tVJPU4frZ5cXJVFA5Wf8mEN7vUbx6LU6456CZhvrTZANqVCgwn",
  "key33": "rD84nmCVac8BD8aNMxSmFmoW2kpz8Uo8Kakf8K65bqma7ua1PbKC65crfjdjCoGnZ65SkNw1DtbEwnokZgm3QxY",
  "key34": "2z2x5QLir3cdTCuS6iwm18DtyJZW2aNwGECsfPW5uZJZV3ncdLRT5ABTvGkDXNFsPq2Bq4LYsHT5QMX4vswtM2pC",
  "key35": "34qftmKFU1J6B8SiNUVCaXtrTVRRRZQk5EGDsGzteWn1Mw6oEd1yGrMNeFrnUMrRwGnMeXNpXeFfg6kJoWpP5kRh",
  "key36": "5cXqWg4YdN4sYa7fFzdjjM5Fttguj2n4yRPn49KPK8RE9hMY4nn3KaFjiwdhbKeqsdk7UZoQjxa7E23jNte5wcr9"
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
