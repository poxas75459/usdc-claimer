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
    "2QowfFbRZ4DpuujykDnKyWfqvJ1yuu338SbcfSaTrbEYBDGi5A7pv8rZ8mHZm1Yc29RqE38NStjC98sYAzmQ3qWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1DJHpvyhpPfaTh5VKKb9ztGjTExxZM1suTmfTPsjJW1JMagbiwM2AUBETL16qc8sVtYNKc8A6trGTmmwDh7sq",
  "key1": "5LcjGmP6QtVZBn7gSPYjaiFrVhwUBPSbPpts8RQHmj3YExxdrkPqeBiwRKugMeGin2kZhk74CUy2Tvqw12P6iqWh",
  "key2": "5ijzDrCMeGsYZXmh34eLESBseGDWfkTmKKQgVk4vFoAeKfkJpwMSY2wyXX7Pwecg1B5qDySehT5KMXd7MnVijbbo",
  "key3": "9491YFoo4NnbA8pymK7PL7dEBHSMPbyWSgJ2G67Lv6VfduHkEMk2mwxornnUf1xvyVDkzRr4qRAyviD49BqhiKx",
  "key4": "sUjkZf4t1eRKHYi8aMJFTM8h7ZUvaQoMstXQWAt3pC7vyLHz6fu7zvip6LmymzFyTRxzaiKz2dndrrqtVZTuvqr",
  "key5": "58ZNHWZtecL9w84fsixfC1oDJXFsKjQbSkfvp6UiiGJgJjfNvTpQzDfjRfnRZTxqp3NEmSa4EnPaew1pPn3usUsS",
  "key6": "4KFCJUxRhFMwGbzFxnX2XC1UXjsJdgS7u7icGY9QipzixH9asxNxysCHUuZPw5XsQ13Rh8ovTw3GFjJvjoCKJdNm",
  "key7": "RCr5f1BpBDEZKjLXzob9vxeRmpX2BbdAG2CiAozsP1EKswLhRqhyqSfP24QqvJFeGbt9YmbxrWnykBWDUFX4BjA",
  "key8": "4rjjtbuQ9Q2deQdTEh59X61sPzsTTMwNgvDtg8TkwHZQCyDih878Sgx9iMVZgMVvF7ofATA1sFcrpYG8sTJBqeue",
  "key9": "3B1NzSzCJMg2RYbXpSVwiALHuePPUJHEiSWnq1QjAqCxWyk4GuZtNXoShscHKX71t9UATK3QYT46NqsGRq3Ujirj",
  "key10": "23s87GTL5qcibyYBASJDbBCWze7y6LBBRkrFG7LH4QCtt51GDLr4hxfipSRCdGhyPBHHEyHFsqj5RNByaTfRNDTe",
  "key11": "5HNHTgp7A6aPbGcGrWVJ7waUwox9jW2XcBASohE2uuA8GXpxi5VTNtEbE9w1k6YVxMg2YH9uU2KQC6mBMroxfq8e",
  "key12": "3gvXLdJ1C1sAJJEUL7v1ZtMiPvUBXA9XXSguD13xvDpr98K6LLnZCaZXCXcJKaWEQP8L3QFrXUEgA6UjdUkCDC7s",
  "key13": "4aBZddZvNi9GYmRTUEHhFHz9g5LSKxsYNawwEY2cB3KgooVBhmmjDyYUE1AAJSBJj97hG7Y7XicUZTDZzY1kukVa",
  "key14": "GHgJD92cqtnpv2y2zBwPcjRC9JXetj4KRwWRfaY53n84MFyqCf6X6RyJaJVdexyfnNE5pgGVtpVwgJFNFnD2avf",
  "key15": "ukZoN6tmDqFKWCNeeJ9Qo8ivkqkKGv9VbNtXS5uFApCzCyemouYbTYtGdMnb3mVeYkW1omq2a7VSKdzQPjZ2Adj",
  "key16": "VbJ6jW9h2qz6y167G1kkC6Qh6nw8bRLQNHCh6zATqT9RKwX31xGnDBZeqPUAtL2rdeaU6UaYFTVTAjbrGxFh7SM",
  "key17": "2ySYEXVMa1sxT6k6vL8iw4vMjEwaoymj9JQ7S7CLtkFd72z1myiMHDVC3zep4R6Wy7cH3ieaB6x9WPqQQHdKtscF",
  "key18": "47g7jyW9UsrVb3wohFL9HRZa8u5xfVEcotbaYpJ7Nixt79q4WgJZ9wLuqWbwbaFzq48XffPaE1HTboSpsajSvMjh",
  "key19": "2TpKiS2mMCw4sAWynPU2vZEJzcED32PJsRgeSDuU643VFvF7Wi6PzB6jw9WuVwazm367x4rZw74DcdL3KUHcHZjN",
  "key20": "519qoKs5hmAC8GGHvDu337mVXxC6V2UcZvuicEWgiT6pHT5QCZGGnmNAmU2oaM2wJyow2sxGxr65112x6QT5fJQs",
  "key21": "ttyENoX22EQo6dgEmtuoZWvQ6dFHaBvSHSw7eZXVS73GhnPkEh9USJbuiBeqbcB3x2GkcPc6gb6pYxfTa9ni4Z2",
  "key22": "2gzGx3F4C5qQnUB6nFrcri7aMLwPKCn8ZK9RShoqycCcnxsAA7jTtsA17bxo9Upma3HpYVshD43212Hq2H9jtnBr",
  "key23": "ESTLmZP1aXEYPTtMneDCdtYrGxPfMvNUbppkbfzNQoni7vgjpbWtBZkLAu7J68j9hbvCHRUFkXx5AzzV4KTBei2",
  "key24": "WaAZtJnKA9y3T3hf52Do5Fmvfk4dzWfmTgGj1hFqMeJzFnrvBiFSePY3wfMWbd4X3S5Gpc9p7XiFonACcc8Zr1K",
  "key25": "5c3eU6waKQQfYX5sJpdm4g5pUjNMmgXTbJrurKwGDAqmi8MfkKNyww8jnTMGbo7BH9a5JPH3BuLYefFtGXuwfpnG",
  "key26": "58DttDorxM4S2kJijNUotN1shAPPU9C5ZpmVyEhKNqDY9gAW2rygpuA7aqvjqHn9DNKk4ovktn9xZWZLan3T6c6C",
  "key27": "5oTubQDNnS2ECvCYZFPxNCdBsKiYUyrNGxX95nyi4yJcEVPxnAr4ghcccSMZeYJxxJ2Wf2dJh2avGkVErPNBX1tA",
  "key28": "65g94uS5NGtkVV5po8WjPKpsRaoeywDQineS1MUGdY633HCuUSNLtn3Rv2f4SHqY6ZiqPYW7b27gecTwG5hHNGGF",
  "key29": "8PYGqbHSWLvPPPSZKEsqxBPY3g6k2JuWNxVnpTavmiRESGXAjFSRdT5PSuAjxjfRgAJigrRxDkivFEcBGMxrcRf",
  "key30": "5GPZLduAGUNjU1MhzsyTPQ6kPRKNJaao46fNsKTa4fucSMKom1htCcueSRsTV1fCa9KNfRY4HFaY74qtjCGzWzKx",
  "key31": "3u1NHpbG4yoWavLbzQz5PxJxePvS6fTUSDhWgYid2ErBHphXVHT2K2LSzYY96wqyUUkNdbUNhJq4wVtxu2KDCY9w",
  "key32": "4EfGBcaiAw9QKpxVmMQ9gk1GoVDchnsfNeth3be8zF9MVCHTjJuB6tzP8PoVHfkdTi9tAk8mdoK3FS4L4p8NWvM8",
  "key33": "5v5rKfDmYVEEnbprJVmWvWfgg58cazc5hGnGJShxPsUxu8PGX5RY3iXDsuJsAD67dcmd3QRNK6djLdaTDDL6Wro",
  "key34": "3oWkPJJS2z3p5Lz9KWshYotSwecA2E1XGsopsnki1RPHTbiE27Ao6hbUP1cv1gZnu8eYreitaaGRMdQdnkkjNTiN",
  "key35": "5XRLeC7MbGhkX65sU2rNsbMt6RtQ3dkjdCLkiM65WBE8oHaqHoufxiRH3jeR6xLNinwN1rGsPa43TL5KUTfvZywW",
  "key36": "4rTp5FZ3CPLUM8ePn4fRxMX59D6fwJUTenHK7qWiCZVDmv3AaDL8LbTYCUe6cCgEhBSVBnyBAgW8WkSxXXX6LyN6",
  "key37": "4VWxWaQTBX1T2BPdgyR35BFAAtRduaLLV8LXCKdQkedMF5K7ZgkJZ9hAj5H3YKxGcYFfyvTVHhgrvvDVdRJzzJLG",
  "key38": "2QBbwqj225km6EArWeEj8JFSVujq7Le33uKTcRJd3NSuZLdjXzyPkG5PeV7joBk283F2EUcbFKnECYcigsotSjyS",
  "key39": "oJEPrVfMD6qmvBTqGGT3buReEAWfSN96chHDLmmEhot3wTAo27iSQ1YMHjjFx1Pio2UjLqx9AfxoYQEHi8HZGuM",
  "key40": "3MdK3g2cumPZmDMcWe5MXyJNePkkWLrVJfewrMJzNjQdxN32xqVwWZpad7Q7ij2gMkLK1bPpzMy1eDuQq1kCaLZ1",
  "key41": "63zeTAAATmPj5wujSBXBJkFjzPqKmTj9P4FrXRUPT8ZnHrjHgEGJkFvAPBBNWpxwyNPjuPf4WsZrxH3bFiJmnDSY"
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
