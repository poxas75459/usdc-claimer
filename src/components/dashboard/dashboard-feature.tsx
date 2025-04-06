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
    "2BcLwFAtv7FHf561n6Ge4GsrGMSVREGrGDWUKp7mNCNVAfPQASY19L59YBAcAwZCfR3otV3QSNxe1dcZwtU8Ut3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UR1ukRGQKQn82C38dnqf5EHaSb2KkAqi57r2dRUPDKG9Kmdou9yGkUinxoAo4A4b4QqMVzd4DuN8qV5FJVCYDvq",
  "key1": "3M8bRh9WjUAq8MiieQwkDCY4VYCYmwNnodakWoruwv51i2ewEKwRR2QXQLmDDbYK7Suoi5hfkN2BLSHWrCyaH1SL",
  "key2": "2cEdkQHLm8A3h98U7YvivWfnuhjnNsd6esC3mg6fkBokbuTMsCw7pE35hqDCnZZKGsqtyrbG4EFRqpg3Xk3C78j1",
  "key3": "1Kabwn5AsZF6NsFzvkhuDce5M6m1cXWmhKqJZMVURXuaB4oAkNtCTft5pDCHX4AzBEMfqFCXGg4yvTyoVKkw3jX",
  "key4": "43sHXuSZtjGSk55hDtzvCiNwdADGdBKyYvSMEMvyw7Sxf3wxLFbhTWQQTsGtX4xajPYmbZ4SFuoD2C2Nu75Bsa6E",
  "key5": "4zNZQahcDuxqjCqdUaR1K94DGrczbbZ8PqvDXLmPBghETqkJcbcF3PiQupU2SYU5ocbBkhLYVDLbauPPuNQFxzXg",
  "key6": "2BnBWUw5NFFzeABEju5Rud1yAnDFCNrQmG1QXLHJwU9kmw1bwdkoyGbPG7APWeEvDytDhbGkZU89zTj6neTk44BZ",
  "key7": "3Q9DTyLfDjkGuvJBMz4hd6M1XL94VN3wdy7HUPaP1aZ9jXdiAXiLw3rQPBKUEzF5ifUkkPQhJHjnqwH2N6bRFc3i",
  "key8": "2vkgUaxKrJ6aojGearn2LGhLumkJRtCYR35Zg843yyaGUKjg9jbD2nG5ss2MziVWhaiDxVAiUM68sdD1WjfTf9yn",
  "key9": "5URrYTLY24rmmPo4XpJuy5XCHKuQFU3sL2xeLKptdJR9HtKrML3JioLVmTwsyY7T3fqEaHPnAG6E5X1gJrb9Yt1j",
  "key10": "5H6yetoU5XsptBnVFQPCgf59yxa6xaXprRWPzjNKfLzqzLWXr5k5M6kQTp4zKRWR3PbourLN9bTnAc4kWGdep7JU",
  "key11": "4c1TxUicw5FMgMHr3GDSiqwK4aUpGaBVXByVt9xKVgWu3AjGtJiGFamafJkC6ZzJM14SwNaycSrEAidXjXwssj4K",
  "key12": "C17S5n8DSgcvp7HJKcf885ZNnZNECfKShwFEVkRY7xL4hePx1JUpTyxSLonJ2K76AbGic7Bv71ZsauZnZoBamaM",
  "key13": "3g5XDBV84GQ3xPgZ9RAmV4uy56mSsS8wGcw4yqu34E9F7Tvbo4L2BgLJSWLwdXznRb9yNcugjkh8BnpGPyzBDVLt",
  "key14": "Hz4oWyonDPZL7tAvDARfjNEhym8tRN91k3oiApscCh6pUbwNYLKPj5vjGQ98ezt7Mteue3y9tyy41QCotvQbebh",
  "key15": "4ycVPUgZhHittyBBVUMzyVumMEZ25PoWNSXLmabiy1Qv5Vkbxy4JVPVijf84W5ZJHbVS1sHn3cxLHdyb8pJ12AmT",
  "key16": "3eUyppfvCK8vTFcRT9GqyBBSYX4b112i4e8ZCMtfCgs7JFDJqBCZV7sCQApkBmnt6j5V29rfJ3Yuk8yt19xXqwG4",
  "key17": "66tETmcVH6fSNqzechhymZd7ENntC8BgKT843ZwcR1McTP6McUgyCKnMZEVPntNJMkmKABLkUhpcnZ8fJ4ni8eBk",
  "key18": "2tfhZrHc6BJsxcw7hyKJ7PGkTqzUqcHQdRtVUYieyj1RVRaXjg4h4EwWcpqjjcU5hx7q5tLGZ6zHFZjnip7jGGrx",
  "key19": "MrP2W6RPE8UUAaSe6j9Pguq6cMaj1Vg2fqgfUEU8ga2LAhGfLL7zMR37QN6ExSoA5siBxaCikdyLWbjLt5kS6ij",
  "key20": "pM4Rt9t2DdonX5iNGF7k6MoymcSw5d1Mjv8oTZtHyNdsaE9c67y3vUYA43HGe1cNd5GL6CwdCdAMbpNo3zkyb7o",
  "key21": "4UmQWT5G2xKCLARTMT1bCTBQ924CmQeJ5w4EqP4Ru8JsobbcMCXhg9vHey3vrm5LCW5SRVesodJdv8A2bWgu7A38",
  "key22": "2Kcg3a9J3J6AkK4mCycRfTXUw16kvJTBq7eUdfwhXeg1zkvSTAyDVp6oJCcGs93MwHsdeZqokvrfJHehQUEUyJqX",
  "key23": "GxmmBrHp5pJrZRF4YxoHXcbKaaAResqq53G7bSkxCZvun6CUfpGz6PChV78No9go5afKNtza5ibjbcPAB29jcrj",
  "key24": "3M2wdV7gJqoSP4Lw5c7CSR5nWjee23cBLb2SqRkRW56tiwEFcNnEKenrtZPyPZTE7hetqEkdFzH8A8yX2Z8Sr4fi",
  "key25": "2XEfrLmZCGU4eMsQ71eJQNndMeEGSt9hktfVPS4vLqyrk1CcTjiYty7LhFHui8s1V4VmpyGUxctfCiFDUkDmtAe5",
  "key26": "3Q7xNCHcmsFQuCcAa4K2w1JeysnhMm1bX6E4dfj6ZzocKHdLYsndaBeuXeBEmKXEKCWAft3t9iHJkCSDJ8t5Prk1",
  "key27": "4Xywriah5qP9hz4U2kirypLXwnkdyNCURK2dGGJsF6gKjtMEbvt1vz883kxyPZJvLHw56g53GFd55ttnkQMAxjn3",
  "key28": "2B4SKxwE6Ly3rxCFZQN25kdQi7nUvTPL7oXTVtxaLXR1oE6SC3PMGQtFZ5ZwoXAYK2w3ns8CSsX1B3nqFoSKurKU",
  "key29": "3XfED4g1reJbcpvQhjouLzoXX3Bx7yZGJgWWeHUvCrotJqAhXzzxrTS1z7uHokWjE6a7MRD6wCuajQCFhXZ25x9h",
  "key30": "NhQWexZWEaTsvah6D19v1CTthMJZrCGSyfMKNqbhgNgpDAwWPWt3XBnNPdsC8Dv6BWhF8dSmtPqhd1pK2ynncVL",
  "key31": "WN9E7AM9mEXZwa4c9rZamkDfZuHfBymcGxKFKU6nMzm7dknVDcUoRy3hRuU2vwzWuYjH6qz4FtenqddvF19M9G4",
  "key32": "3mCjYB74HTzuWeUHPwsyHz2vL2vLaTeXFGXFpmfXXSSVuWhEQ1vioSCxmFBw299JSr7vvmVP7L18r2MLwMsFXLDj",
  "key33": "2Akav88j9ysXeJrJZsbjubxgJVju1Fbtw7SLNR2Bzc1BGfkcHxJsVe9hhvb2qFnh6Rfv6yDrVLH3idHetdRuDr28",
  "key34": "2EmAJRuuaw7rPo6aE4uNa24nSM1ZSHqL6a1TbmpQycingKgBHuCx1cSyr1UVSmaZCcGpjWmGshWdqdDCpD6oiEA6",
  "key35": "3PRA1nAhMKrVbo2HzonU3k9HQBq3oTTDrDUZz629QdAVpV7PC5YMusSqTjgh92kvLfSkRGwW53DZq7U1V3rQFFXi",
  "key36": "LhX2dsyfgk9nf4ARH4nrWQ8W24g7owmqWKvqVHj64FxJPqq5T4rjQhMX7WNB8R5vMqPmT4jTjEg3XfXy8vLBfcb",
  "key37": "3cARPxN9XsnQbpFUgP3f6NqPYXZ82BLGBNz1mJBAMycmNzbTqivAXK8j1dsWeQXSsoWbeAR6zSL5jpAeXDYwjFVz",
  "key38": "rMxCWdSJVgoCF6QEQ44vkMDF79aqWGsukvuUPwS68PkrdA3kTbRJnErtJrceAsxeLGmTPdvoroYQXcDg5rL7U7e",
  "key39": "5qDfDTPdjpK5i4jzBLyGR8Xyxu5UCBzPuYaTUmxKFy6NAd4STyuXXXAYkKddSYdT4B5ya7nL5pGp3rtgQnUXnskm",
  "key40": "2vbCJaqqfiwb1Fu81DtdiPHMPxZNDxX7rpH4PhFfLTd4o6SqVL1iYTs4kfaJevYgPoJCy9mrDiWDmqUYcPX7tU7u",
  "key41": "mGWdZ4Eoko4wxnwgBxdSuNJDTEc8gXczwTYcHMhFFVoXG7yyx7TS5ms3gmwA9keVv6FCQxoG3KdZK1LrkuXqWMH"
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
