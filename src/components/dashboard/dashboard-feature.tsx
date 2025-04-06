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
    "37VLQsZ4h4NKaQzbEC1aebisRcWUePZoixXdmdE6pF6KeHyVzyrL2nexhSiGWsZx7EeJeqrMcfZeYY9oqrRqpnbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uyFkC9n3LWLzEbCk6WrtQnNRG9zS5oqA8RQQLp7GW9SksiRaz6mKJmJFAXmBVqsNqWRAQGmbgQQuHfJ9EoRL6Zb",
  "key1": "2ZTMUWYGbeUmWY1D7zD9eC2Y1roDiCPtRNMiDT1FC8XA6SrZPApaxCHGYS2FtrBmGTaQCibmattM5U2hz9iM5R9J",
  "key2": "5mBrzmq373t3Mi9fC2VhN3LdvqeaEcv1Nza5ZA2KzbTbp4ygujmJyCEYHpusZPui4qztQ5stxbFvGWBtcdooyws6",
  "key3": "3jANDH8HucXN3xXCv6f9Y9ADjztYsFEnNJoaTstgTvKDxaw1FyCfTe3GDSpJJymZYLAF37Ke4xdmJwRgpuWYzUKV",
  "key4": "2YA5b1go98b9HVCukJML24rCAkUULxFtksH7zYUsAAr4122thYU9RWEEp329GbcFGDE1VYWsgR7Wm9siJ5KRhF93",
  "key5": "2dYhYTGhEDZ9wcyaUgoyQSoWBZrF9g1HD2rPVfKsfkWb8diH5GfsMiGvhBRN1QkzxeeHB7jwNXFCJn9NiyRvQ7TS",
  "key6": "4wC6hi3gvYTE9oM78BdxLBbvnc45NyyZhGHzWkEnvGTdgbApLyqMVXgzX2G5VdPknbjnnxoxeDCrveAgb1R8xq2k",
  "key7": "2WWpcji3ZPxLDVm4RLMHpAx1sCwzpTWBsxN8hZ7TcnmHvEboLBGSgqUuyuSBbhyRLrvrGRsVZ7wPnL7CMGRsnEzz",
  "key8": "39MoSAkRV41NMaRkJ3o8c2NbDttwgC6bizfratjixgiKwrFtXYzJwrvBewmRAK13VQXxk9AgHXonirgbovGADdth",
  "key9": "1SVLbGnQouy3uYuQY9aa9kUoAoogHwMqhQgQxksMUWwu4TXBQ3sy8MQX4PRcLXgQ25J9jdkDvpgfU7GfxR1XgDE",
  "key10": "3cZzSqTnH7b2nqiTpXfvBKvW5cSyPJwNoY5mdqYK3QRLop5xCTfvc4QqqL6P8rpxB8PVkcQNwgdMbb1FcqihPHcN",
  "key11": "5RtrkB6bamQHdg66U5SqHPEiGfpbYbnyzT7PzThFX4JwCCcrWcvtkj8WPRbnYE4X6XPrZVhYS4ghc4aMnJxJzqAK",
  "key12": "3BuTjW4adh4txHQvhy1gqHjo9hSWEVZTRtjExqtXYeZEEvezmufDh71mnTaEittpNwdMw7spGRhh8VC3id4hnhyY",
  "key13": "4guN36rJLM2m9YWSgpvrRSyo7fXRAuUopSDB9Jb6tprdGzqM8U73Jacf32pL1pgdNGdrah199ZRx6tQLmX6g7tWK",
  "key14": "k9cZdxKT8QCoS7UDEU2mLX85ZBsKWe4ULZoFpbFNSkGsCQduKGoUP5SyKXJPaBp1fkVdzgEdDS4p8BP5ophSeCV",
  "key15": "jqf7BWMVYoHgaMYsqKghzi61P963ce2AQCVnnEDqMexRVuDEmdRvn5frzfMCAKVUxWPPayv7csUmepsSnvcgQef",
  "key16": "5hLeh1EjHFHA9otRudjpBuNoA1WqsspGJMxrVxMyeHQzF23JUMjFaXERAzrT3jLFLEaSqgttTwWYBtsy4kK82ju1",
  "key17": "4P9BwoW6a7JpL28uy8Kpiun2PNzujBXEiFirM4nRZtNcKq6GyBk9heL2Ng8fBt4J17yrMkNne4TRadLJezegSkYP",
  "key18": "4YqPuvgDSjAhXyqsnFnMmxYP66sAef2tdzmKed9V9h8omQQn18rpUcbhyh5Vtqn3BQCFz9wepyxg4UvmPTgDTFQd",
  "key19": "gRVKBpT2tCvsYqLtuFrcPB2HsV1PpowsJucA5ypkbdtBzRfVnad8Q4PVcY4NpoC58mnwF2yxqdiy5iETtVb3NgJ",
  "key20": "3EfmPPchjSmnXMZwpFrGTzbKCjZiwiryySkLbu2TBQjkMM68ay36ywHMi2MUGfqHfsSxutnHJ9aBUmHPoREAeuGp",
  "key21": "2EQvSzAKX7aXTQkBrNUpL5xKwWKTiH8te14FfUPq2oMGozNZh9ZqykCDiWSmbY9TdjEGjGm3BfKfvRyKN2qMxJWv",
  "key22": "2wPjcg7hX6BbGg4jSNe7p9nfMf31YWGjgDC9P9UwdvBoh5hKvsTsiWqrcCHR2Bcydzei77iFBmYmS6dSNebH3X8W",
  "key23": "2zZrX8tFg8WjcKNm3xhr627h3dD4eikAiydx1TRFnELR5wSQYRryY4qqhUWvRbbAtF11C8yenejFY79ume36qLLK",
  "key24": "2nz4ZLHsTsNTd4iDgAj8LznGHRqgqrQaw8xxnKutQSFubvhs3FExX1hSEPFnL8QmNotxrv1iK8tbnRXu6KeN5MLo",
  "key25": "3vXiWGHXxpZufJXSHYdC2ahATX4JeUb43GRcu61ZkfnEQ7JWqTF6N1h9bYqzvtgu3sSHPiDvCBkzBU9znmX8VmAp",
  "key26": "4DHJE4NQR6dkhPnCWcJmBoPoXVKJY7pnjVYGSj43nniAhia8XZXL9ooJfUmNacxQ8DCQCsN9SATrw4wf8HNMZAEJ",
  "key27": "44TkzDLN9YqyTZvrn8nGzNA1Zr8cFejaMzmUr3H99K3d1trUgYf7veycQzPyhmYbJ7K4PriUE7SxEuaJomHyb3Ko",
  "key28": "4QLCkv7knudPbDjxsmjR8nsG2hYrGUnG4RSZH11sd4K7RwtaD84b74Cb473NkQ8LXJQzT5oetHnnA9sPCC1HmoLY",
  "key29": "361nJNQzdz5P935L4rbLKjqp8CLr6zMV1faBrgtmUgVoxMizj9N5azXAYKviGdH5Wevjr3dkhRkXBNZp4m8zEkzX",
  "key30": "2zELR7gWMEHwA7E9wYkx2LbpRQEm3ya5uA4pHT8qytyBcYWJeaZvWvyvexXDSsbjK5WZgoLUj42K8QyLeha7NPSq",
  "key31": "45eqdf4xrx29rLkS9GvUETY7RYShyWLLFk83DHt8E58pPp35iyWccthUwEkfNgC9JGMAjtouEbfrSnHhmBqGc6iB",
  "key32": "7542chrU3Gstz24iG4eX33j3nNJ3zYJcPQtEpoGtPw6jYFCrRpsUDLntSkKsuE1PtYc4Xe6qMARFd8Ck68vRDj7",
  "key33": "3AyrneXoQr1FNaDTou5vyCVDXPAnCD1YpJY2t5ogWbGq2EQmyUQhDLgtb47SHAE9YDEQFsvHq4NihMvcss5QdWeM",
  "key34": "5x2AMTXb5Jk8eqXoTcrN3i7X6vTPaDdGuNwv5r5P72bfHeXBSXyf2bcg1Zwr9YsGnJzmaQJ1Ei9FqNQkQVRBk6un",
  "key35": "5F3vanLbvcACrKi2L6u6sFGiBMb3CbuNtJdwdDXKFwBM23pLrUT2u5ogbPJo68buVS8pHTzYRC1AvY26kspR5JSw"
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
