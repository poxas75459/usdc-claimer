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
    "CH1hmCzefy7V9wtd8VPBA3w6LsVdNAKFcS2F4GbZvJoNdgaw6qsHVP9smtj4PP9Dnnvspymh4FKa4YZCaaaRBGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dujiyPoYXLMWBKtisKRAH9XZ7uFeeXDufxXmTw92mN8T3pE6WUyAdMCByERz6dYfMgV6bYcBfNnEtsj291PxMLG",
  "key1": "noTKbiGB6tsW2VoJgcXXM2Afv5aLzFL8p1WguZ7qBCb7E6t5bJeowRzTBhf6479954RpgzEbi8Vfk3kSFVnHbH7",
  "key2": "3MVPyVvr7F3XGXqBahooYYi2pEPn96h1yHEFLW6uuLTB74X9zYtPmWPgnPiJ5QkskJLnLthzEFBFSGZPd3MydSDC",
  "key3": "4uSMmgD3r9jcuwmKVRU7aSwospq7dcgUn57xfqpXY2DAmiBBTPPSgmEfDMLe84K55rTai1Yq51tjuDshVbLFF3Di",
  "key4": "5xQcXkq4b8yAk1b9YLhepSxizbgQYfBnr9uR9Urr7SumJk1BkKvAf9NmZWGdRnscwURrNVaZANbKPExL15aMHGrt",
  "key5": "4yJwUg8bDFhuGoEctWGaFqRNCRQzWQMz21gBVzZNUUe3ZzY4iQ9VEMkG3A6bQbBMKj1Pcm4L1jhDQ3yTeEfMtdoM",
  "key6": "yV6MKGivnarrUENMptmqqUzRyrsLY7yy37qExAmXv9TpVvbNZeqYc7HBUTZpUiAGhF34LYXWzaZpcmgMsnu7mvW",
  "key7": "4V5uUJYLD3cZJvT52P4oe8sRWzWSgBTkj1ix2vydGFxHy78QBdG4LbjxgPgcr7hQB4eg1qHR2V6m98svLqwwdM9i",
  "key8": "2XBT3xPao14S6fqs3k6emXrXczaSfZZ11BsC8NTExhTRHGZyxdRCHFr3VTcPtze2uuAJrv6iejuHzwY8dP7BjmYP",
  "key9": "JERyPsdcy2BWDehU8N9KaqvHev8txgyTTwL7UBNZUG4WdANKdtUYmKtSvYQq5aoWLpdLUx9WGwoeMSKBhnpcK4F",
  "key10": "2wQDfxmTzbNyZVtRmjjoEZiCsKFQZvfwUHuCucDWArRjs6eNSZE9XRHzEw1Shw8j22MySh4mSRqACizsb89VnHPH",
  "key11": "g8XCB1S5NgUrUNgR86PxCRP8NeyeMojUHfqqJ5c1WBZtpBcQoMBV6DU724FBuEijgX83oPpF43MjhFj42N7aWVA",
  "key12": "2sYkWPFs7UmjL13hxn3wswcKLfY9fLCuYf7euS2mCDvTvUPYDDtHR43EKH6acGCaqG31MCdYHqbvqMhi9B4qYLBW",
  "key13": "HdiDrxBC1ZfHvqakAC7WXRejiKmCJMd8NnTizvu6ErxzjLsr3nSzBCD8eAEBvqfNVi6RAHe4hZhyryWKnvfLUpX",
  "key14": "cSqf3dZVKX35NzujvtuZXCe8TUmaF6LFxPjGxhcVL2mnwB5fPE7cVKSaH26hY9LYZFCFcymJn4sXrag47iguhJA",
  "key15": "3zq9Dbe3LBJ6sh888LPkkjDUiR7BhT1c89LqCmVkXsymBuXU4Ge28iQnzb7WT6eTHTUgpD4NzwgA2Nd55Qe6749x",
  "key16": "4AZ2EgmWEcqbQ68gidjERZGeVWFb47XmBo1QdmaxY4oEKcT49DvSLus37CJioLBkCMuHFH6A1Wmh9DGEyXYzEvoC",
  "key17": "5WV7QiCQMYyvvDUeS5YfNizzgUJMnpdMXu32hqcYzoxaiQ5pmNN2H26prRPpooDdXxcp8D9bdsbU4Z8mdcqaFwo1",
  "key18": "5C7h8EbMXTjDrd7MNhRgZowfnoXxafvgvLs1JPVPfcrRBwGo4gCz8aM4fjnCpkSzDfMFVTbfpkjExHnc2EhYtpw5",
  "key19": "PZqoGiNnLyckPwYr4dchcwY36mykB5X7gJCNiZrASZGepBGTEHCXvbB5RBCzm3Tx4CUiEmvTPrHVaxjJRS7G15g",
  "key20": "5RPyzyq86yupWXfSSsrQbj2qpYMm2im8VhyxvNyGam4NkGbHjQ6G7NaEweMm46hLfGq9Dzds5vuNtxTcs8Fxkkqw",
  "key21": "2Zu7JiVG34HqndjQpxHNkc2cU9RWHp6ostJwhAXGbCiHaZrv5VFzLhNtGM2VFv17KyW3ME9pGvcMNwxQDngg4vU4",
  "key22": "4ru9uZsw2XoLiCb5ua9BXgaGBB9wRY1REnQFPogArSGrrf8DjZNxqBctxjQW3QmpXMxgV4c4JYnafJ2UNNeFqCe9",
  "key23": "31ocMP7kNHV2QS1efLyy19nfhhnZwkZjnQUCfSB92m6JPW9duh2tTmPpN3YWzSLxGJLDEyGwWQ87Qt2cBA2uQMNS",
  "key24": "1ViS3vFiwzX48p1iZEiw3bbM9TecZFsTWd2RFbN7cXL1MNcTkjGSvzE8JVUUco313gmWwQk21nHchKUkb7PZbh1",
  "key25": "xajfvChXrjudxP1EBFgCEaHo6h39HB6TkV1nqTaYeZntMRznD5ACcZ9wzBKezuqB1LSqB8HRHJYhVbe9BPYaEox",
  "key26": "5Vpzp9E1Myxowr119bDGLyWPf1caXytmQdn2L4MNCDcdpdqo6mmXnb1vmFFrdzAA76WWug7XRyR7xbMfi7JezgCg",
  "key27": "3nBWcUbH5PhTKp3XK8xfBLCYg3MuqrtpCD68fXVXcjgfvT1cKo7KcDqirDiyyofVEP9qArLaD4LfTHcDTobBig9u",
  "key28": "27fv95aKizPgrBPVkzKSgu4DuCKP9fZSCvDE2cpHkHVoV5wypk4a8udkdwaHMMbXZQReVSePS67pbP1ZdoU5Eyp5",
  "key29": "3u49e4SVbuKDbwaRNfaN4qZztDVHcF87o3oHzeYK54oMkz6Xw7oYx8tZkq7bZvAkFnazLxCqEqmR2BCi6zAoCRR8",
  "key30": "2GPWwv6itsPPrf9AtmYHm44pefebXe7XLEuC3AerTHMrHxrU7Y6SkvCajvbmse2Ym2M1Pp5Xh5151Uuc4a6pTMjn",
  "key31": "2LmsYojnRnv7ZT5UiJRe5GXokbhMoDY3vmMKFEJLvwVg7LWtqYnPYcMeTW1gL9vU2AwMFsXf446DHuXxLxdrpBYh",
  "key32": "2MaftHPeXhrq3agEenocc58AF6cGvzj5p1LDY3WzrjXSDhvprCrJPw16L2hdCMs8BFRztH5Xb2pm2GrwynSsAhen",
  "key33": "2hkgPG7KeEuJ9rhAPXw2kLj67VoEHWav1YZ2a1j2D8Lm3dCZDGsJ6M6QZfuMaFk4hny23Ani7MxvfSJPg7ew2eCo",
  "key34": "PUT2JwnVWuqrJRGsVkSMwzfz97Y7ZFu1WENFYq4pezj4rnf2zLu5rRdr3gpPhGH7Jrwaq194s2yVJaNPW7DaJNu",
  "key35": "4MhdHWaBa9uiznmmCL5qumi3JceAD3Zy9DDA4LwYEBKQsW6N3qW4XQ9cDUPGqNwJQHET6q47vEmP9jhexK9STj5K",
  "key36": "5SkwETKqTGSoNTk885PhegHnxkR63Ht3Sg7LskBb9CFRLQxCongRSXRZSEDVaeu8Fd3qVq9wk83BDPcspEqSdDdF",
  "key37": "53yVMy7fcPry6yvhHu7uPjAMsgKzu8urQHWM5mj3oLyPSw1aQo4DxPJQ9nLcfr6gM8NnNtZhAXcw8Ae1R5wWeC7X"
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
