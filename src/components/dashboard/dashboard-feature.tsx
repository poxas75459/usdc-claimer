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
    "2mzfFrZxXjuedjojg3iKd4pixGakoN3JbBVFattsJV9Hc4VifH9xW8Ue8ZKCRTAWQtycU2zpwXqeViSsfGPg1e4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvq1ZEfr11oMrD9eZJ75VPagJPEMGEaKN1gfKTMcpwSwqLyJvFUqVCUw9CPG8AbyetGQDm3Rq4CsWxG4Joz5RYX",
  "key1": "5EqJSyvPA9QNJvmBNnGPztJEFRF9YCpskGLVAqohY8vEc4XxSfiLy1Fk4d2vopDMWgcSY61B2cid9LsWYk6Z8UuL",
  "key2": "37bvanXG1freNv2m9UZ18LsaVistY3TLhxxYaW7qUENFPLzF3uTWWWCTsS3tn6bXFBbjBWtsZ4DXnEXiE95tx2cP",
  "key3": "4tmecXDa3iRsooGu4regJXvtqYBhC8AqfuMAbJoTd1eLZE5yD6kxrNJqz3wXwNUkW5VmPmRik3u271VuTzrHZHG5",
  "key4": "mMSMPjDW5YUmyGVoC6AvMQdp6j3DcPrKxo5pVYtNSxcezPSKxYjcc6bzvKxkJLEM54k7QLXruFmdyNnmfYvJWmc",
  "key5": "1jGFnr9rb9vsE5bogoBgxXJFt9RH7vMpqWJFGSaa6P8tACq7aXcE5aHLsD8a62N1VDTSPB99uUsCjvoA3sDaTMV",
  "key6": "2VYtxbKoK3RUysvZLSiq7WqqTQsH6LfEbhh7Z7WrmAM3JCHhdrKUqp28nRRDnQ9UJGaFoUCv8XWLL9SRfCbThpdv",
  "key7": "4gZFTs1NTH41c68cYPkdFTuGK6jj3LuVtanfBqnUNjH3dFz2CWdcw9Q43stPm46bkrjphbdpEPBU5X6j1EbqnH1j",
  "key8": "55qpeAcQaZkJmSBR2hPLpvuVq8HmVYLPfVzzZ1BRWNraG2DGvJ5x1AaStMNJDs78GW6bcvoYyqyuf4iMTCvf78pj",
  "key9": "2DMVUSdyCi5Hox8i1cSr5y9tZgTRVkBtxSmjZoq9F9g5SEgK1dGWdzqeh98ZqGKCCLxmfRgBGeZhBTHqZmhWTiMd",
  "key10": "bv4CnQmWYx8jrHa4qWznUa73Zy8SriYKZXFBULkm3u5uvUjYT16DoiJwevRekSJoZwys8sTK9gDV6rm3J5DqakC",
  "key11": "5AfqBqCJHYB3vbVgM2qhqtSy9W1Wco8w71qjD2DTBuYtyVdsWkkQ2gFT7tsDzZGSSsnGwq6vEDTQFLq7cJdAfa2p",
  "key12": "2G1ZXd68L3zGLF2q5wLBTDivmoynNVKD8xcSqqqtNZEdddi9SmXDBJKanQ6dC6cKDPMoHfaXEgwqgWbnNHnWo6RR",
  "key13": "2XCtMasbZeKZkJDRSGdKS64GuP6Tz9ub6faW2UUfNvKWg7rm5pefTSdcdDjzSRUR3Maaa5gN5gM5CiSpRXC4Rn5X",
  "key14": "31ES6T9GZSdJnBn5i7Zvh6gVYFK9V7WmnszufZirhFtMmRCLXBMysY357M48p4u7PiVGT8LR7dHRnLdzPFTSsWn9",
  "key15": "4MaNVswGdm1VQ6wedMvMr2LcGa3RiVhULvzZVZJvX1K7okb8MLS5iB2zU7L7znDPeWMQsax4z1LoSF9YNnDF5RMU",
  "key16": "2m6rYzZQoa5gxS5C5Xtewtu1bUitmCmB5QtCtHC7zRr4UP73oewU9Q3pK4PEhiKmyZguqiypmD6vmvEKYcCzW1EF",
  "key17": "4By3zfDBbUuvjfmAEWuRLqEvKdfRBSAe38NPRCKfJ5ezevaA8L42wLk4mYJuwYvjJarbaNr2yvny2WeujfJM4YKg",
  "key18": "2jiE8Y8iWuBbgVKQsjZMUbqAKeS8CjsjRegPG98EE9RKNFXimoG8GkTfm1WK7VYsJDGFBevjSE7oJy8JZH8SBtGs",
  "key19": "3GRjWjZJ7YT5L4frNbsHuS1TVAPiQDooZs7qRES6oECiaHAr1kBYzHgow5B8dah23Jq4oi6yEt2QrFzTSRbSmiAa",
  "key20": "36iXtMWSrqt2mXyszJMSKhGr6Z6Z2HVbxkNMshRzPU4JodAGgUVCq26h3YS9D3RzhJubgg39WVLfc8FWBPNF84na",
  "key21": "kisozEciMtPwW5TYsTewGGbuVcw6Lc5x2VXJjnRUW3hPzA36Wz1nJ2ucztMa3rjp1LnMYsB66eA2kreg9fv7NVh",
  "key22": "58GmhkSN8Qjy8NoB7KSj1Yp2og6xieX8piWQrgZ4aKzneQxpaxu1ctZJm5DGSuqHXetPYVuLEEBMPkoZqUNecBSe",
  "key23": "4puQcpN4KnZ8qV8YiA3pkuboTrUoycNhyp2b668mkwPack9y859VkkKEYevLSwzLvqWkBvew2UyyTP9xhcmVhvW2",
  "key24": "xQSNzu2aTNKZ9yevSxKje9QbGZbBf4VNhk9nnLaabQVQnSb7SjyebMLoa6JRkJeEyhmcYsM3jCQEom46sjbF5rx",
  "key25": "5zkVUJkpFHQRiP2q4PoJ6DG38DF5DneviedbnWPfJo6z6KNULr4L3Bgk26C7ZYHyfqnF4KLEXxhkapowY8WnBUSj",
  "key26": "5JcF4UYQB5j7acEuNYRb37CjMHhgLK4xX12zGNpCihuCzHpDJoNzTsfvoKKs6ZDGGcxbYUczsxCKghJJZYETosML",
  "key27": "2TXLTT9hpE5hrhUZu8SpKCZnWsChvpnT69DVaJU7E8mbPyrv9t8HHP4WiuN4rALkYtyQjNJ5z6Zp2rY4GQ7gxsjt",
  "key28": "2kW75K5REZZ6t9d1PqzWue4vT1vFLz4CQ6G5DzRzuyV9iHRn5GqKDgSJGYJV77CjX1Zd3Y5D9zA8PsonZ33oZJ3z",
  "key29": "3YPRZEiSfWfoeMcAi6MBRU4chLi29dLgmT51BQytwSWa1oJQ36hQmQhM5cCRzPVv8L4PTJ7Q8CZPYL9SrpngL6Z1",
  "key30": "5GSdGVhiz8xxVini8gAovX73pi3SDdMcv2zb9vojHaKYmKJ62eM7KpEFSmNxMKL4TudiMwVET1chdByEnCKcifwE",
  "key31": "2AbBygnKgyXKE7e5PyNDgAaBiboWVaZHLb72fEp3p7fsmBrgDCmhdUygC13coccDmu49YJqc4Mg1MKUCg283591S",
  "key32": "3cJxnW6VLimVt1mxd2JdH5jkLvDkL1fAvgnhdaocdFcihb5jZGcQDCcRK25fHqpHWb7AyQvARcPWUKXddzRtzPvW",
  "key33": "QCXPu5iQaVFYnEh1nHKU5988tFDorWjcRnjpCgZe2QsESSGkr4psdSkXu1SEsUa8jqGGBvUYBrSrism8aMKQrqj",
  "key34": "4uzR2m2iy557VvFCgzQGKJNJupRWtsh9YbAE55mUeLsqLgPu1XGDi93oY4Feo4WvvjzkzPMzysQmZCUECfsZwXdg",
  "key35": "4eQtuckmmHBKoAcqnAZ76zsBgnKtbWhvAwLnXv7TPkzySydy6LxGSfcEE56YP2i3YTbV2SeBypfHj6EPtjtjV3Vn",
  "key36": "o4fjJ34LZMQod3mjeJzdrFkefCcnbgXCRwFD5Bu3xJ2ugoNmehkiyezz4qW2TGeMSbZN2N3H77RM3WW14fJ9nNs",
  "key37": "27xeTUpzaW1p7bArBhBmJ3WxFMttZaL2iJN7BhVfrKe3KrVaDxXqXhFR3BCkHcH67ydZCeDUpThjCihhntZYM3Fs",
  "key38": "5AncRbRVCZLPzy4iMedv8Abh2yHhjbFBav9h9zTUeVUeKt7cYJQQA5MQ6b3HnUUVZ7VA1gBPuTLjfdb6MoaVoG7c",
  "key39": "47rcqpZxSYXn8V1n6pSt4tD6ddcWsC5giqWMDy3nwrGozahY83M9z2AMBcCgSKkHFoCm3kmdNWDDJcDdQ38qWKpT",
  "key40": "42nt4G6WBvqFYHf1Jex9jwJGDL1gCjLn4yHNh2cfrNPaCeoMe5dKzJqUzgJpjM3YQaJ2S4zE2iWXSfrLcLSajQDH",
  "key41": "3RMgpg1BDHdoctHJuU2ycUc5WN1qyjnFzVkSPaMhrd1QBj83JYA3k8sfBQheBD2p3ZqTpvCXV6qY5vs8gkrKXoBA",
  "key42": "443kahgy3RsQyE1QVcoDzgTTUZfCaJZKC7rfEUpLwWu88E7BDrBvNoz745y5LPrESwccWd3bP1MjizbfiepfWSkA"
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
