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
    "3DUJ26C2sj1ZrmyfVH4jYuy9uftFXvJyg6TVzYBonLAXyxEFC48ztDRxkgNjR5xk8MZWUzn8WFf6xXChmVUx1SE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54KqH46p6qdfhMfi2jrosrN4YAiJqqukAJhZZQdupFAEmFva7uEcirhQZX5iixEKFxBEYe6c5DcQdj3AfRSiZE6T",
  "key1": "53XUaUyNgapVzUVLACcFygQzvf4uBPdEPHPktPMGFDoyuPwUy2PMhywCbpfT3BoPYRe3XuJCHLPfoqmJZXo8koAL",
  "key2": "654NPFC84PfjuDK3Y1tE6CRFeBggk25fyMiquX4x5zY3TFVMUsCWDbv2aQi7a2JgWnW3KcdjzZTgCPY5Mm2s6fzH",
  "key3": "2wMyn83xRNwDJSsEwdMCGtUR7fWKUqdYEVCEjZz5vM7Ta7CgHwJ1ZVZKduyaLYYRnasguzGeBmWDBvkkreTuUC5R",
  "key4": "5WLfCCL7xgbMz763eeQMXMTC3MFytKB1HGej6xyN5Ld6jLAk9ywJJFoZaXuSJXeoiTkLRSj18hCXXHg6xne1MEZT",
  "key5": "2TEcs4C5knZMvPwaTagbe3Vc3VrgG7s7UPGC2VCdQSJyuh4eFwev1mjykycifNCVHEnRNZDpGncwRe6kcQt8izoZ",
  "key6": "54iQJr3hPUCcLcuf2LKKfTFUZUN4t2ANpeR1PzFBFo8qKEAD41eFDJHcWt6fxAF11TfdXz61bYs4My2XWz9LYMRt",
  "key7": "3Uysa7KzqXwHzd249uUkrHbpuoiJZf3ruuvwc3He8Rb8ZULTDd23jFP7j1Yy7McG4QxxtKih6QEABNsaWz6jHCSF",
  "key8": "4gzaEvAxMxSrAviUrcm9LdWJc2m7pCbxd6E4PDEBjci81eWBwXsUVEXmNYWLeqyZtmuWmW5RQcPMTcDQP53Ze64f",
  "key9": "32zGscp7HFh83W73LY1SmYAQpGs8hnLV6F1USiZAw1vuHHCJf9y9bhR2sbHyDQyq9bnEnqBu4aJGRgb47CG7HvAP",
  "key10": "3hT8GkYJGpMgwxgvH1ZRBbp2ZGqETdLEZxPTHmZAd1ChTuCVXbKRv2DtWchxq9yns3hH7nJWvfGBYehLRWHZzLCM",
  "key11": "4ysoPSznUimBLi4KMPvwxyTwiy125BEY117r2kxoJKVvFBC4B6D1xJWYinWP23go3aGa66mQbHr6ZEtP8CbBHZED",
  "key12": "5qU5U3oQA9KEwA8sZvMnhZDHmsJ2s4SPsD76vxnauydTttaPAFsP3URghMQQpg96osUSRm4Z1qjvRz2X7FC8FzsE",
  "key13": "acv39oVjoypS2qaHjqPj7Zf7iFeYnAwxngijVJDQ8j7gj8AQMJeU97RTN2BBhiMh9ggV73LoXNfWCYeV57DgQgd",
  "key14": "3HiRPbeSe6RwkPjHPTyBpuPnm4LvyTUy8AkA4hhK3RPXVHR1P29tfYBDKwd1Eg1Rw5gENhe3F2tVeZp4rHz8xHkx",
  "key15": "39AbuJfCzJUnBN339fNDubrmXrhD9ewe41B5GDRixxc8NrYQR3FBb44RK1FTMGkMW3THeTCs4tmHqoPEAy383jtM",
  "key16": "4qVSxRAuzzfkb2Nx5ttjEmXKwnTimukSdbUPnEBRCreZEooYPxsxPJDyCosXw2n6osxFiwnG6UzqLMNuZZEXfiiJ",
  "key17": "3AUgYzbRPrd4VMcA3DA1BGmDN7pTHmaz12iivgW8NVutudGHFZu7dX4a2NQHG5Gw7MBR1YzoqBbutFJoMYTAF1UX",
  "key18": "2Cp77DQTHqHjpSFffV9sXWdwSP815KGMeBqCfPkuYjCCvctraTPnGgjj4XrKxx1HV3mecj7WoaNYwP8TsADxEQ5c",
  "key19": "5mXz9SZNBRh9FWnaiReC9Ug9vofxLpihPo2gK2Rwp4kRQtEuBkWCmJvoQAV6NcJs5azTbx75xCDq5a1AsR2cMe7B",
  "key20": "2rtnVgr3DV1EpNZ52SixRvzr3N48k4nZWQo9PcfHbYE4zy77VAK9hKz3ETiADV2EtThTrN26QdVYvJ1Fypu8G1Tx",
  "key21": "4JPYzndtafTX3BGfZkBNDz5UrEgq5gpBSpeFpkgD5XWn6hJ5bsoVSNXAfutDF6zhWRboCMdQke2MA6ZMWCTCxXaM",
  "key22": "2iNK2Y81Y3ibB2u7fu8xkH7ykyrwj8rdMS3MHcv83L6GBVg3QXAY8MhVgn8jKBSxCyHW4t5ZtC5ihghqAz6PYhyw",
  "key23": "2EkAY66waLQ5LkztimARsgckc1UTqko42gVJmqiazWU3zRLXSq3GidhZzxKcXswJfi3wC4cTMwnPQnUW7LAUpWXD",
  "key24": "3RST958Uqeco6cCjJRD5knbEKVEcrzfzVDj38yPBwJAYGGEWCfZpXCqt5YXNnnTLU5Vqoivf5fHJDywTisbZv6Jo",
  "key25": "2PRZCzPSyXhHWE7En6RXJHFMDD38J4abzjEiDADC4B9nKsFR1Kbon4X5FefYooR6fhMm3ts6o6eYCfPBJnq6fWJz",
  "key26": "2yrwE6rZZqAMY5rGJwLidEX7ao51mbDp5kZ3oxLDEZfdw2vGojfnWaH5smKYnB8q79EKxtxPzYk9HDgW34LPe1JJ",
  "key27": "4LwQyn6UCKLz2XRZGzBtgaUezM6uWmEymqfmk89Ys3hgjZMFCoXeDX6cAzMMAimssEiqoYZFBBeogYsZUKRzcyc1",
  "key28": "5Whxq4RFvCHZb5wAxvYR8RTsqG53ByjXDttEG3BWJm5BHfeRoQkGo4S7EC2Ujn22NC8n4ho4viaHAig6GmmBxKHM",
  "key29": "37XgcyMHTQJ59SUxawfSqmfpZvnZ43JHZgVCMNZBqz8QiutWA284NSKvYBXBH3K5U6PzNQhwiLT3h5SBjhr6aQHA",
  "key30": "21wd756frFx2CuL68szhCFoLmnR2ttxfaqvnDL7D8LtCg7gEJ43dcvUgnSty8jUGH8vwDaFcCtEFoVVAhggSaqxr",
  "key31": "2ifuiSb2UnbPLm1JbyJTnByBqTm9EMQqzdpG6vyXyo5do3yS92tYs3uaYR4NwM9azbW7wJHgqdcecuAi8MAqCJtJ",
  "key32": "2N43ULJiiVs4uvKu3uYJHqPLiXmpRHhnZxR7PQzLmekUYrLbvLSEwYzcGqpXPvQiiq8mUGad5r51NEpqBf6sakiJ",
  "key33": "4NisdCFX2vuNrCaZ5j1PfQ6vup9E17YNfzMprNpN757YAwpjo4Thbi39gcHXJWTFx65v4bPDkZ19zL1iVZhjvrAr",
  "key34": "2ax41doMpTVTPqnzQ4CKB5drMsdGNypb8tD4LqmGwYjWDZDnCUpqVrhRj38fDomv8QszzmLMey3y1oaA2tXwPiC7",
  "key35": "2EqWo4oddDtHrGnBHq2w4aTUCGKNcbtcDmtbv28D7akZHBA4aUEfH1M6Yqxd15neqZx28UYp8wVy3hKkhjXBiBf3",
  "key36": "5WainViAS5PoNo7gmXYe9uVVZUvwRobN5buB2sRrq1AiR1FS9qC2X2VJGzAvGRacSc97XanWSUc1yPyxLj66YPGF",
  "key37": "3JZx3xbSZRX31PYwZ42VQQWuUxv1dHmssjT9K5juVEDYfqMzuuFXqYU2P6BHWjJLcKWYzaf8qVUeyXuVQN4qpoKS",
  "key38": "5wd7uDSbMNYkk1pBxQ834oXtecJJxSmLps9TV26wajfqb9DCUBCHPVDq1B51g67qdvjdPFMgaW92UhNwPC1cMbBf",
  "key39": "5XbwZG8T2Ebw2edBv75fSfVFqYkzZQc1YPiH5EqMFPewVc2AeV86HXCygnezfanuhKq2kPLX9RBjqJcgLiVwksbq"
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
