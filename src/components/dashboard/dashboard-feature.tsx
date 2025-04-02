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
    "5iPVftpQNdG4HrLeJTyM8kZ4QoFUXFeQSzL8XW2AhiXASvBnaz8sxpu99STZSCM15M5LZ4X7Qc2z2dKZhN3ydu4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YFB2miWm3ZBBXZ6WjwjUfW9GjT2K9Rd2E9kvhuQaaGkGpFgL2cvSuXMUQQrpy9fun5EbmqxaFUkg2o3CnqHh4E",
  "key1": "KdnGB3L5ApVdYyuDyNrBaXE5KmZC4dcTLmfzsQf4L2suXTZjs9L2H5vjrspfLV5vzcYghkUvwaJPJxBKSc1z467",
  "key2": "2vNYWASqoocoDxb2UF4KbGE7FSAVzrSCCJXynHjpw3psYfYmP12Fzu33Zn8TQLjrfE3yaZtFN4gcmhUJJYNqb8Ay",
  "key3": "3FyQGtdbNZKpA6GBNbEohec9aJSu92W8NSBFhqf2h4eyywMGCeVKFhHVkt6jp3g1UFrxWLrzia6L9tyoBbtGNNHi",
  "key4": "5QjR6VD2Rx9hUHxPTsKHLj82axKrwekB28XMZJKFsPiNgKrg7wfjYtcqXenn6WYRjC1CDM7pupCsCisghJMrvTpd",
  "key5": "514vvbxJMvp4F84W69GGwySjMGShdd8tM2yi44diE6Jk1pGir6Y5pGwiT2jH76k2spdSuAPRBykTbwkjzmjJ64Wg",
  "key6": "pHzTiC1PDPMVtFY3vYziuxsocrHkTAS6WPqpfUMANkVJCpTnK9Z2YJj4RooUcyt4zFsHVKPt1XgDNiF4R6PJ7nA",
  "key7": "4EWPrJzSGec8v54cYjj11zVZfsiB6vRy2E4AiGjgbFgtwyqpefKdXN9Js5fqBxvzPVykRLq6ZNib7zQskACBjush",
  "key8": "4wSNUL2jMyHtuReX7tkA7Xnh2WNdL63HRvBfemg5nGLvzRsAMPAGQyKnqNMUQkLSFSKegnmamC3cd8iMVipPdHD2",
  "key9": "zHKEhKU1kXrMHgVXcyasHxGrK3hJuoRefsGroBrfKkwoAWGMPkkbrWHg4GCDykE9AMZo7inmv2WoYYd6FaDZJTy",
  "key10": "f9hZe98BfFtBW377sC47uQHa3qMayB5nDkTeMsESf2mqkkKrQ43qurqLGq3t7nFEscRkX5pmesssYkPpsLbQtDJ",
  "key11": "3ukwjJ5JMh7h6ysZu2JSJa6gL6TBUGVEkozLByhYgtiqgp7b4axWV2LjJwYaqAqLZ53tsWpw7dw9DAK7Q294AJjc",
  "key12": "5bsU9q1cHuUy4EuvpWY3ZeWhrF6gBkF8BKAkaJTzB5fXjcbe2biBwqFnXtu1kAszedbP9QLfr17AnzcE3YknCdRa",
  "key13": "mpSmEcE7VYWzWwggpyVLhjZk9dAqywWQbiDQuyXZWgcAkURExY6E4byj4scq2Gnx8mnR6TNYbuM99zM8bomFf9o",
  "key14": "1iNao999YJpMN8MosZMgaMcJZsCYprWj7nb3mkzjG4AJYHymfrBSvgLDkFgjkVXjc4BzaRyC7dY3vaN8Cns9tav",
  "key15": "3H1RLKVbGezpxidu1WR8Mg9afd8CfKNBbFkUULcARcdYUY7hLmaKx95zT9WdezJRW7T4UtAT8595QqQjG4iNZFKe",
  "key16": "2j1tj52RZwv1GRShmPorcTRXmMANRncf7Xdcwkkj8oQbRcXCiJ1KR2DjBQGwSXfahZ3pymmGbG5qN7WgbJkVxrjj",
  "key17": "4Tx31ZczR9z9cc3EGAdxNG88pcPCgdcugkLFwTEHtp16fCBFKCDDAtk4PUugFgKuhA46mSQ3CgComcdAAvM8fRd1",
  "key18": "4grCXts8xneRRVNzHuSvx7Y8bhGdHy1gJFyff47wrLKaemE2omhZi9NjTvZ4XYPrLtCCHTei2KurDgq9NyC1zY9F",
  "key19": "Ni1CwS7k9YnWXqB3HBnMnaCQZncxrPU14jTBLBo5kQR9Miuta69tb6AMp3GfjfyD3sUse3qnQjefzYRV8Pz6aRq",
  "key20": "2Ct6XfyWXFbRm89F7BtjNk774eMstv7VCd5HCNFP7UhDmMUS38k4giXfib83jNZtav39EJirS4AQBgYHZNvRURD9",
  "key21": "4wNiwZawTSLL5sdV6osrMePBhmwY4P6jfpaQqAv7P3Hi2sddCs2YFuzhiGxvjLxjjVUZsKpRpLqeTiu7xQQXtddo",
  "key22": "4v9CNm8Rho6B6iDu6Zsnu6gmWykGDowDEM7ffxRjB1hxayrESFktZizFsFANvLgc4VmG1NKvuJfAvYqw1qWQBN6P",
  "key23": "3SxJhqdw46TjMuKoAUPhXHC4suPLMNPgkunTE1k136skE3yHsoWreH8fyFYuK23f5Js2qTZwGFSNW7Kfw9uwNLt1",
  "key24": "31pHjDUKLj1DE3umNeYTLYBVgyCHZdhp7qZPLSXzvZ3G3u9XphPPjCwiSM6JSGNER3KdoQtzgUyHk2qPXaPTHhgy",
  "key25": "5GZRacGve1AXnd7g7DgDWZhJ3xNYRBTUTsF5YSEMMYCYoHVD1Y6Mryn4zuSVTRv7GghcmXw8Jt5ZfF9C343t3FjC",
  "key26": "nhstkHJUdCMFtLeLwjhYFrPpj8vkJgBe9NDungvHWcpbf47y2y1spe6NwUkwputS9R5468pNzrk33WxodDJpUWn",
  "key27": "4sjjc7wmUMq3h9xuNXxHhbnGNYk8XinuT18c7wwhUeu37PX4WQgdYAxwbhKEsVEqnPyrvsK2qPtrFWtpAFvuF8XG",
  "key28": "4jHAeor6kFe7d2xWYbcJ8yuNKbVhVWCdXrQ999uAE7DPLS2TSr7FsGzNoafZCVNf7eojMZZmivZXxM61Y2dki9Hw",
  "key29": "2omF8YnEM1Cp6RAM84VYVPxGf5KwJr3vpmGjUYbFFf7EP6NDtZkqbMsKsRMmaJTFnfGKuWsJYHbY2ou2btbwioJo",
  "key30": "51qFk8fx8i6GZq3WigNZskvWXDSTaUZYRnVwE93PJFeNJCge4CcZkWjTGoGBUpnLYdRRyKbBVKcuTF6HxpmPRSKU",
  "key31": "2M2KQxk2TMqp7k8QE7GZKjNt9WRNyJ9CFdLzU6bVBn8NQmyiad7U5vteZmvFkjsWcr5JifPekR1kseHp2k8qNd93",
  "key32": "24e4Q7rHdXUpDfgxwC34ifU3rRknLEc3f7bXcJ6Y5qiEFyRgcqG6nNbB7Kt3CVDJQyrPUMKgWqiUHGCL6mefTsVB",
  "key33": "3xAaNDzkGQEEBnYbNVUkyLcyzvKFhbj5d2fVnZVCftuKMX9sRe4URpG1tdqRMn2Pj3ei2MBm4WFL9N6bx9PDfpZH",
  "key34": "2jF94iWT2x2DfbELBJH6YRtZB3TVB2jh4LA6tJM8gzXTALi2P7qbex3zzP25Fv8Rhnizk91JFcJd9hdn3hgjSUrD",
  "key35": "2BPhK31enQFdTC9533PQ44KjHXfEFZUWgFKuYbgR6nH1EJyk7R9JtuagWbvmNQTCMFcojHRLTK7UyNw1ceDn4weQ",
  "key36": "4MbNES2ArVsbg7WCRJzgAbA1eDQWFtvcTXcJxmCZxmdzq8SWvs86TrGM3rXPXC9koP11hCngefeDEivV4jfkJh7L",
  "key37": "4464Vhyeh2etehjgr45LFfbcB1PSUBJbojxVHawk1RTHN9gESBkzDLM1SoGePB6ies7Xfy4Uj5bdvXo6V23iCBSV",
  "key38": "3vKS1wtCHJ3yeUyqftgf6rkbHAJxqAc2u5d2PPWDVSnMnnZeys9GoXrnRko2whLW87mowf8Yg67d8TzoZNGuTdxA",
  "key39": "4nwrZij5DcAq3L8NLzU1okmkR94YeAG5YmvdAexaBAFaGR54HQEDf9eomgoWiexahg8oZPeeBnxCAvGwinRVXd6Y",
  "key40": "4N6Zs1gw9v2B36sJh6MDkTkV6hdBkvj2BdTtrPqdr5jNDb3mvQBbAN3eaMSgnXJQzSktsDXw5sDLUbPL7jh9bRhZ"
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
