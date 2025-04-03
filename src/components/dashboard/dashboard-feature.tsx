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
    "4T7QCFgPaUdNRzg2UXs6wR3rdV4G1uWkeQfocqvXDkasodT387RP7bxRE8oatuut6SBiSoi6ByPvcqSUGPLZKpVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MagAGYobTUqZJqYaUmDjEHtSVqiVoZLHAxgj1BdzfGbVr1bHhmxuU6aFYaDDt2BUni2HU9srGGxpNTfzrqC29oF",
  "key1": "2YM91Ry6BReFXvraRsTTpb3zLUiuZy3assEhx55xoGNWWkMQh4JzRoo5zGrxV8FvBaHWoVNj6h43o5PV2obVjNfy",
  "key2": "sYLJvnnyg76bSrP6CKPGsVP7ZMd1md3eTxoUYmfZ7udofxkJ4yd4WzzkSSxnmZLz2R3Nc6qAHEJivN3tDuzpBoZ",
  "key3": "WFbnt3V9iboxStMZ37YDsxQfyHhASbGeb6ccAsvFUc1kATPthC2H41Bvf3FU19KNMVf829DiV9oqbmpDtuvefTd",
  "key4": "2Z2MZKcx98UTpshpu6nh8tW1RCpPrWyuvPWV2tZYcvJeovz49EdNaFnZrfvofK4DD9o8nfqGQJLukP3URwTEb2wX",
  "key5": "hVGYYVkE342CQSj3dKBmYCQfvrPNq4hup3c8rUMPGEfXkxbKnECEFpkoaHReMXbBfp1evpWFgdTrkQg7Rtxy5ip",
  "key6": "Mr1DHXHVh6HATHSU7pZjacvLVkxpxuo7pFWV1wu9kZAAmrcK6DZnyGYqQLBNynvNe6Nx3LLRn8TYzwZZHgiNVGa",
  "key7": "3yxUfaMzxDmoQFYxETgqbNvM9Y4k3bTdTSPNfdxabMuWrHWsnnKWnPV3pAi8MqmFEBcZiMak7yv6KhaCk3yJdpu5",
  "key8": "4RBReSiBQ5sbL2APCyq4YPV7RpuG3Wt6P3DuynmhZgfbCfrmFsP72XWBatv9GKeVtmNbrpw9D8gsbTWW6xademvi",
  "key9": "z5GpLJnKekSPFevzeEwbgfVCYPf9hAfC7WbByrKqp9Di9aX2YfdZBPTbaCMToNRuFPUZy3UAzBrD8j1yitvUU9P",
  "key10": "odwNyXRANjHR4r47he4wy5y94C3Ne1KBGTBc7JF5g7Wp2c9iue7HunB5VAm1Kb8gWkQVUHEUgfKoobDNuue7SbH",
  "key11": "4oRwRLQbWxJ3rEJghqufuSkwpyEjCCAnt2BvkT7j2PYYTQeDxPUvVjPvbkN4adiaq9AFJDYEHQHuSsmGgaLCpexu",
  "key12": "4FFbd1Anqc5tSjHRDsqhv2DZ7Bx3uvXKs2KjBSySe5unhL9BNerGe7rKUsRV7pPR5gaLTtx6wV5t9nKXX5JYeG7h",
  "key13": "63infA8X3SBgMsVMTuReDBujzJP5qfq2uFFFfBA6gWmzHLNgM7cN4kFUtspk6rUtkbaudQ7T69PEqGbtbS4xQ7GN",
  "key14": "36aq5ycF3eHRAfGLGALxhCVUuHGomhc9C5RixJJPPUGtz3rLdSYLEuDwmV5TeZcNJn48ueAnTCW8rv9vEu3mRwbS",
  "key15": "YSxnKvY2X3nS5sHRMLAgEcks4kY3bV2B8gaahf8D4n9w5LxPLhgAziv2Bsth2GH5FJ6NFZCFSKBXuaexb6CfUYo",
  "key16": "671NaeKTCDGMxeAA99nqqpqwxcNGVSJuhgtL5HkJJMPWnMWD3WSRnU6DrgP6eiDGctU1AwJRons87jsHpcZ3cqtM",
  "key17": "2CSFA5rN2d1phqfEZKs6eNsEVs5frQxuV3xe6rRCTbH3mvjDVQXy2WbeCwVTmE7doJD58WNvaQ2HDGdaYvrokQeg",
  "key18": "wgRe9hw671jmLsS1FgGzEQHMMfQ3q4xx3NsAue1BpmdjUBGsyPNRPb6tB6z3pWSUKeATNHVWTJr9ygfuj7hJ663",
  "key19": "5jvMSqJYCQZD1ez1RfsGsBFtUkua6M7vauFPPUmndqa67kSVifKrubuoHdWCqZWx8uhbaiBg46N2ChifBs69WiFX",
  "key20": "3ixzBRmjN8oDGjnT7cC9aGcVyYyxP2h7rTa9F1QWB7WNpSPAhHMtmx17nP4s6QUGhHVknDaLYPDUAFLd5NiAKcVb",
  "key21": "4HH7apmnRyVA1AQgMAJBdTmSEXUtGz34MbBkYwHAfdZoBr4fvN9heJtxpUyVjEytTGP4TQ8grqUwJYqcExTMbqug",
  "key22": "2pVhWPZvybPkK1B4vTkmrMhmhbacVcUR2cm1ZuUMEjAfBDm6LjbhzqeKC91Ai8ZRbBEmWDoUrpvaNgJALxrmhEQV",
  "key23": "3d4jUgsgKnNxxgbbYnR98fGgqcPak5qTFdANBbUEu537xUoe5jnnCdQDxPFsvFCBg91JWAJpnEUFVgy6mxZ2RHEK",
  "key24": "3u6B6w7xTzgzivhcUbhP6C8YWUuCdSmMZAXXYTmoZaEEVkGEwcWTP6QBUUmJbG3kSwhrqbt5dQZPzXBSExoK25yY",
  "key25": "26LE8UowZt2VPRckwn6Zrt1zZUQcNLYosJy1nQvoLCDKyd5F4iFrmnmYLz296m2KSicU3bQfCNHR1zwn8RdqXsXJ",
  "key26": "37rKwL6LCoDC7qQW5YSkQgt7wSg5ZVvAJv1UmCR88V9EChtj75wYq9mbWB1KQW1Z2RmL8iZCXsBCAyqE3eARzSaM",
  "key27": "4gDPZzKQNciMw4wNDdV8rqsrFH58ikR7VMLX9Df6HV5bDJQqdMKBJhDbXqBXkQcGquaJ1sQ1EsvLQZQDhmviUpJE",
  "key28": "5VTMYbFobhFTCHQPNAs83gcBYCr8jYewSZ9N5yWfoaZtKszXeEJby3ys1ntcGbnvrzv8U8RncSFFK5tGtTbU2EG1",
  "key29": "3bmNY3x5QMXcXzpZMWEtzrtv9cdCFWZa3ZrBSjQhfMvzesaeHrVFTh2HYxgt34hVbcLTCzkEpxmaT46h9TvjmTUf",
  "key30": "2E9LYFzzkEgWt3KpH2Twa9CuansLBXX6VpnNMtBpSgMWGEodiiTzsi89MXaFzHh7FJXJF1xDQfoEb9ReFaTDmADX",
  "key31": "f2Sc9FXk947cUEqCHqodrF2SjiWQQppdAXaKGa79KEn2Zp6a8yHsG4GnHLjna8XWNM8673s1M2ee8ucoNDAW13v"
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
