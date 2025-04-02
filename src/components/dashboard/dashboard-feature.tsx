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
    "3Jjh7DJn9EUQLSZ6K85mCLVhKyFyt8kB9eKMLVXBzJHiJMDH8TSnyCXhDanq3d6Yo2viMSE9Z8wsh78DhES5mJfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDxXXkPswnttyvmRx4FrRq2MpKGXsgv436VtNr4i8vPBHikkEJzYCJS3kcoj9QU1FY6mzWFV8tratCXqY26HQSQ",
  "key1": "QbjHQPMqeUzpJb61srGoi1ovV71troYfNt6ncxMku3rcBHJYsBw4RH6xMEVGBKefEjQehv2Bj3LJhhdWyFJLhb4",
  "key2": "4usTXhjPmiwyJfi6JFzKj5dyBwEPX3ckkvrSqybWVS8aBvrTSEJ5tKnBZbaUEggGqXde778gZvamMsWJ4JodX7Yb",
  "key3": "25mbPjx1i3zsUZUAnowamw4voUC2ioqX5UCyNxymGHC2P1rBeiFd8RhWwg2Lyr6JLgvjG4HcZwkvdCZvpBksBNB7",
  "key4": "4D6bTtxD9iu8VezpaPgMzj6mvp1VmfqWU2iLemFbY3vX73cVJXMLnga41kPtHi4QQ4QdCwjmGf3zxasp3xC6XN8K",
  "key5": "5GL6rBtJdSsDfU27T9g8WASvhjgE5423ivWReqGcRZqLosxE57eK8kyHtSNXsD5pBg1sjVHaipniXMeYnLKPvWtT",
  "key6": "3dvXEXNHtFM8sLSsN7kdngV7rk4kLyLiDHvbtUa4zzq75RqtfdRXYBEYMtigTTaq6hmpnfXRpvmmtGkjkiGHfYHA",
  "key7": "6619STFP2PNS5osXSrAJ98arwezQQMD5R4yhCfH7mmTbv2Z5SoNbrjjgnbZ81prKW1rFd3jmeNLezQfB4sZ3roXU",
  "key8": "SrTyxN5LpXWy9rxRBANDfSyhtdpi85XRwWbbxchcsrRLsQByx8VxXY3HFwZM6Fwv89mkNMjUZhwdPX2L44xUK6i",
  "key9": "2aVR3AFSsh28pv16RU4qEWSwtF68V3x4WVGpuvnaCT2CkFmebGovceswhcyBN8Bq6v7HNxoJhXqubZAGeDBjNHVV",
  "key10": "wvuGy7f3ZsUnEKAcFVHDgzaDeDEzYKT77h2MYCkFuqYj7c8j5DNCtk9q7rNyUQcMFErhwLykuyby6NQzLBJsuMf",
  "key11": "5qfDCVgSb2nV7DT3AgnoXg825ZKDQ6MJqGPiwSxQWA6BhvR59X9yx4vGyyKSmrCptCRnPs4GrUnc4mzi5PmsvwQH",
  "key12": "kfZsTmiqwuyv3ftUoHF7MyiALedQMahVf88gKaRNahTwZgLjKDovdxFNuV719WHi9tnVpDk6154HnxNAWZvPJm6",
  "key13": "rjMdnLZ3NMUHB3YPsVH5Yduc1A1RNZhDJfJXFLvqHGgeYZYfTPEAMBG49AQhH4juyoP4Lo741mJ9SrW1nAYHa2K",
  "key14": "3GbSU3dBYNZqrDCkgBiKiuEoCFE1p4kk9vqWFek7C76jVKh4KJhivwJAvT9FSsLBLogtshDszVUQTcxLBMtooTi9",
  "key15": "4XYoZFu6DGjbSRCbLb4xsrneoQfVNXQjCMRg1RqKQyP2vP1KeEZLEJKACKLnSbHHFPXtTrcMvxdkmUD5Sd79VwU5",
  "key16": "29A6u2rgD2bpFp5sREH5L7DUmNa9bgysB7fxBzDTXHwhWo4feKqbL4GrQwpm438QXKgoGzf7mUMxeCoHTwptGTue",
  "key17": "4pUkUh3m3R7tfTqaPXmDx8eKMyoYfkVcab8gE8oxzoggLiVijDiLEmYeLzZpm5vSPYH6N7WcpQXkSfLBqNMYC8Dy",
  "key18": "2unX7XbYH38Pd5sA5AQ3cuVVXYc3Y9ieQNL1LBfsFhYVnqpbqD2G9v8zk54KsgUj3BL7dQnFTGZt2D7NZZhrwcWv",
  "key19": "5CCVRE3RfvfJzGrVMRZopN4uNJ6shY6515Eyoi28TJLV5UkfZ2FWYfk7a9eN5uXPdgETDJQa4BpNH8kFMa1p54PF",
  "key20": "2Vy2EZrgakvhFuU7gr3gvkBTSpjwjHSkQPDe7J2Dm464WW47f8BPT7Qb84dnnZRX9M5FVZwmtbHfzn9BfJtRyErN",
  "key21": "2Hg28XVtUgGX5RnTgqfhQBaztYMMHXRArbLyuxgLzETJ7zKsvYEWQqLNBSiqEmUL8z3McGoiZxZdJAzAKM37c3Sc",
  "key22": "66QzmLUC1WqeS9itaNcJ6BRWJxAua38jDBVwh3p8sANHXyAuNjLvBP5kjVVng2iMVBB1ACHCFEGLfkcjKbGTYWXd",
  "key23": "4p4CKq1xEJcC6Lubjr2DXS6Esco2vHHS9wCcqfjSxZmC2kyaeW9nhTdGnjbe5e34pbT2su2TV4eRDJ8RLjVx2N7z",
  "key24": "4fFMLgNHU16bTBiSeEDgUGQKjWtUdMoTMnSFWoYB7N2EKT2A8Jjgw1dmBYkcRJjdofQ8vh69sEr9cMa6GVaS9U7M",
  "key25": "2k9qMyXg5YEWmf5GsG79gt1qKU9hUw93vRcq65d3Bq7awGeNusyDphLeLo6x8nD6YrqbbgRbKLAAnD9XxNpR6Yeu",
  "key26": "4mbn6BHEdcUxGmdxWxKqpMurRFczDHSUz2pmTVYRVctyvebRujaEvWjxPhQqbviwvyviwEKqCDSxNggr7TmNyDDm",
  "key27": "8PBUqzr7PMeTX7minhL9kitVgHUTA4BdY6LXzL7nb5D6oMHmqp79s1anTYgxgHMZYPdGE2tzNcSXzeVjPPxyhGW",
  "key28": "2yuRrV5AXgN2LCxyybx5yXPHbNf4i55K2gdewNFRPey2Hdoh2ogMF9MT4pwycnPwBzkBhMj545LBiGpWiEKQNLRG",
  "key29": "29ys3HaEVWwYNrfga2eLNFeQQ4szPjnqWAs6GJnzec5517H1e7UN1h23kdQjuiGUBJFtvWZugeyzMHxGe5CirhqK",
  "key30": "2DUu1XeaNR73PbJj7DDgvYmMjhexjsbthuTUJgBzSuMJStvdkMgcn2umW5JMGisWEZhHekKfgQb3TbxYZoaSfqV1",
  "key31": "2bts81MrhfR5EYAbUbTs2TWDU3CpAaPDeRzExWx7ELyKqHQCS58JGH3yQPDhNB9GZj4fgydvjncKhhRbg3vY5q6P",
  "key32": "sANJVxbLG4svMXz7bsWh4NaxeKYA3graSe974vuaynMZDSVS7HAnmdyD9PvmPUSizmoqmqbbfg3E8KFRbwdxcYP",
  "key33": "2o6r6538BpN3B8TC2MpqRFMvGqfYz7fYeDSrrRuEJQ3s65GooEmhzaDbiYcGsaDvkihc1MjyKvfFKLrsTVehNiHw",
  "key34": "5f8pjjyAE6oBuuyQv2VoGykM5vSMpCkScZVS26zFUNmZazCjFCuZYb9yc514ubewosWwEcar99nXeeRycBzmfiPU",
  "key35": "D625nvf2vtAj4gofioLkN9cw99QY2A1vaSYSRjcxyBZ3qUECxH9gyu1tsWU34oK1ERWdKP8siQFx15adMyrWG7a",
  "key36": "63RPSZyRG2AszHjTa3sHJZx7SZ8sSbpdqSbiby3dSRHk1aVWc2hkgrXDiwqHK9RQ1Xd96moViXq5A6xMmvVXEj9D",
  "key37": "4mp2T1NTPY5XcFPgdqvksgfWqsdtWPo8ysiz1bZxqZj72cWGgBCmJcpnLaFc2x2sLRyQMDzGyFwxFkNP5Rmxt96x",
  "key38": "5ZcWeH48aHzhUxtkRmEXjAsEr9FaJNeGjQvqc1iCMdjys7KMLhQLuRNqNRRBJL6DA17UoZYf9jcrRmSZbTpnfZDq"
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
