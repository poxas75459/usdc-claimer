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
    "5gz8FEfiSVqv5EKxzQArQWzFh33C1aXyfTwUv8FvBHHHAteWyg5BxcjCXe9UaGPNoSf8LfNAvWjCsXww2mmhqB9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AStSK9AbAyubzXEXcsT5CripLuATdRYRFTbC61eu829FRHJTF6H7o9ANmZk2jHt6CT37JsmgTdtqbs1eesrjunw",
  "key1": "3Tr6y9oiCKfn2TdpRSkTte4Lyofs8GMyUnJ7K3RpggaUZqBiFiBGtGtiU3PmWAMQ2KE6rGs7HJJhVkmgEAwhDxEE",
  "key2": "35DjUWDYX8w4UvXL66fkyPYS47bQNVwRNdeThpDDUMdgH3jEsBsYn5wFXmutNxEqRnXNUx5mfLuSKudbS9YF9CXn",
  "key3": "ad5NuMJXuJE7zaBRP46B89MPnoFZYNajFWDThQJ9TEzLCaNCZjQeMFcFDJzP5BgGrRgoy4evdr7rhzbevWEC9z1",
  "key4": "2bQBGiE9w6Ygbn6L22xBK4h31SGN3MWacj23PUsxfrCM279wLBjwHwLtkVzGWbxVpQ7GZ4hZGhway6N5qnga9noF",
  "key5": "5URkkqjF7bXs77Rv7SoVaMdzmWsSmKfPZnyumK1M1NUAHW1Ko1TCrkj2yGEmSxGk1joHWkCabp8jp7ZPTHfsBqYR",
  "key6": "4ikcjQFYR84umLLKHdgjKpbFm2TiXwc2McD74eNuc4UQHURJVdE5XaeNFjrdcmFisPeyZ31ZR1Sfn5cHRTi7D6n2",
  "key7": "CHrfHdc3B6aKdY2CQF3xcy5YsMdD8DrVPhosetd2ebrcF1gVBruiToYLySsQSfyCCaCJLH4RTh9WNo2E5fiuNCi",
  "key8": "5JR2EWASRr7pMVwXbvEFgWQVRtZABSrdf11UpFwHiPS7zAmAN5MhxKXqmSamawwFXDfJ221F13EPdiUp5ipZqQg3",
  "key9": "3JW8mD4f57ddhx8VkQ1u5mQCBjToQKNCkZBdat7sACcneXomY7BFd7E7HEiuubb5qfMj2DfTVZGjp7V9sEUThd5M",
  "key10": "26G3qSQJiY2n7QF2tPT9FT6yTCiBkLvFHUQEKJJSLi1KqWGREKvi4y9EMTL8YW54pMNUzmBD5PJCmAuUUvZrroot",
  "key11": "s3a3VZta3PUKyDB3MxkgWrsSjW7jW3vvwdMyPRc8Qduaei1MTvngEDWoLzcUoJH9nemW4gHeS9FqHKG9YCJ5bu4",
  "key12": "2ARkwSKPj5J76mtKiByJzZxSnx7KC2d6v5QZ5sxobKimwY5Nis212Heo4XLcA8iesQiFcu6E3zQYdXhT8ARzupDB",
  "key13": "s9p3zK8aGcXENf7VdbwS5uho5dd6ZqAP7tADGYHwft2GQ9NzfKekDFhTHsCPrBjqT1hyqjFLNirPmS5Qyo8HMfF",
  "key14": "2y6UYJudEVuyFfnxuGFce54RtqDzTUNuBXtrQegVq6HYxSGf7ZXkP4hJp323HZaGcwUybyiFzBxrRxABSdzSWyMR",
  "key15": "31r8mKSuNTjxoXxSZHGxm9JVkS66y8xUkYkYEa6pKtdWmQZZ43A6f2zLdo3JcvAnmhPv23rE7uvjCRkaeWqmPYtt",
  "key16": "4hG5MKSfqtoXkorCyACWU25q5oBUMdC2Sr4J7ZMNKEFHyKtzZwxHzDXypvPhd1MHPgWfCxhSHk62zxqVF12m6KpB",
  "key17": "t34atM4FpYcyPAA7MHFAso1sSoJRBSGsbtskXHHupGT24pyeykVVUQ68uPFxADgeKBufCg4GW7rC4Rb5hjPB1M1",
  "key18": "58efEvVN9aWAfgWg9QNhJghojfszqDEqWftbinELn4rdf6SL1y5gxuBFfX9MUqvmA17mPDfaMPCKcyZ2p5jJt9oB",
  "key19": "3uHpdse2ekJUFjPHyZkET4CghMAh3abBB4dnjn5SaZdtkqQWY1mjHB1b6Am2ikjqA2qEK3g5kmPSSsnmeW2Vdrkd",
  "key20": "d9jqXMGxaubELpskg1NX7KRNbguB5KgChoc5nrKjwCQrPeCG5nDpYKjh9zZDJwjwS6QhLQZSLkxrhYYLhe8Ec3Z",
  "key21": "58K89M4e25Xbe6YXY7AGaMaj52STcFFY6nLe21rxWjWBXsiS3Wq5SnBGJoGRHBdFwxUtQYbXsfnCQxEtBAg5sFGD",
  "key22": "5Crp4HKPNc9ET7buui9rcwPcw1AQhkswEJ3FgpzKRobkVTa4xn2SMHU2uCbugJLbuFL54Cfi6Yg2mxvtVz2Wvd4t",
  "key23": "21K3mp4qzh1t4JDMKxahEsYhHftEeBcVhubhyNpWem7yShZnyt1ygK99MnJVAsthVmsQuUVqG3yEnM3bp9v12Pfq",
  "key24": "2QeiJoz7U1Fz6mSXPyVqdeXx6h9RGDaYVAnefhf1zzz8rFMdfYU6dF3JSusNNFUGWmYW4nQxxD4VVkKgzeEeTynv",
  "key25": "2sFBsMymcQ2MM7QrbYkPoUx9UkNgfMYwNgZSTx9GUTef4gfstsZsx7ai4mbapQPzZucQ8nEZQ45nXwAhszuVcnvT",
  "key26": "74AEpfj27ZVbXNjgijTVTwYK3jTSwWdnswP8aCucWdAZrmdqMQkMh5fSC3aMiSJnehbkPFCpYshnGTFhcg9PTJs"
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
