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
    "3daMwxdm3A8UQoDtB5NfrykZuXonqqzuhKVrs322fYbjgVf8HQp4EYbitteyoeJ8gdrX4QVhyjQkeZfxdxsHNMAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bx83e8P7K9qA51YnmcFdsg9YCDRfXE6hL4HaXCiz2dNEWH6MPrerrwNiXfnKaStRDoRE7LtLX9Raz8QxxbEdFfe",
  "key1": "2JMpxPXp8mRjpmUg115f5e2Tk6b67xt4rHo3n9PPGdukhEmHSWXZeGx1QSxAWpWH7RG94q3qpt3CaugUzioK2KQX",
  "key2": "38NVNng2no3kCNKhXX9sQSFVn1TrzqXb1CT1AsKWKXkAEUuAYkWrPf23CQ61pYZXfX2uFooSATwnDB8mWn7Xzgs3",
  "key3": "3sVdJy2TVSHpApSK7DhDJoG9hvq9D9HiMhsQiy5U9WurMpFqqabfDtcK34hjb7WXJNxWkGDg7Jts4V3rr4qFcmRe",
  "key4": "61YBPopqBJjcbLzHDWwP7dtDjToz4qa5vEXfn7MxA47bYK6QCneJwkWvb988obfsgYo4B3RgpwayksvshhdDDDLn",
  "key5": "4kfERRSzBCZ8MkYvxHd3HjJtGWPpcL5LiDUNzzFQJrhsGcJ2PDmJbyCwDwp9Pnx94geHRsGuo7nuyYhbZM3h3NXE",
  "key6": "2KyCWD2isgE5mBdcABMCRwgmLdeaiwJAf6afXV5M7KBJ8HdygyddTMZ9vLGpyCW8Tp4ajxvRKSGLBX4d5y2Pd6Cw",
  "key7": "4d4KMeryuryCS54Y2ueYQtHqxgGsFGiLUst7VbfEG23iXPRuQBZsFYxf4XLGX2nrzuorV9VmnQsRcUv2jZ7SdUwE",
  "key8": "4B6g26iKBfVmiBtNMezUiGzBmBGjguyCoVyZTC8U9QyC5zDS1DRGtDYcufMyrT42SQk7WsZQ4rKaDahT8n7iDFwv",
  "key9": "59BUqdA1nEM8VRMq7Q8aRKjLMbZdFZLorCDPTLhjFkoLYgCfvMqA5RZE6uBmkZ1vZX9WVcAgZGo4Q65FuXo25tJn",
  "key10": "67kTK5EqpqPpDZjj3WnxGi6c96xNdSWLoViPdmtag1fh9qEP3khpF7mNF8oTSCZ1iTwkUKbDGt6osyDbKrWMRBG7",
  "key11": "ZvgcHNbHRNAGSNVJefHB6iYjcH89LvJzmyU1WTntnpcrm3XyN1Gz7mmmJ8XUDzuvd4oz5xmnPTKeymDHgdNcaTd",
  "key12": "3P9qZKBJw3gA9nvraZxqGkD9wUZ2uPHhqAjbxEkLwDFN1nvuxVDiZqLaEuBrzVBiVJ1Z2cihLjpS4UwJyrkuJtho",
  "key13": "z9j7Cwxu9UQoEdXRvixkzgprYfoYwfV3yJfusEAAZ7DQSNpoK4BSuC1wGg9KvqmkzCsqHD67htaRt8NGCyoNDG8",
  "key14": "4p7rouP6LwdF3kUSTEdr46b7cKQGngk32rXcQ1T4yccxS4UAnmYKU6qfr62rHJHyMDwsGmxKnzjziN3a5TCZ6Ley",
  "key15": "2DXoVy9xX7qwcppAP7x4XbqoHoVNjuYjuwUa9j3uSt1wSTWL1Q7W7VzYQN9qPjPb6ZUULH3rrr9zMTkPX6oGhW7k",
  "key16": "4sYJGDZtyQQ1LRTCVJAc9H2bo7ht3a1tNGxFUxdXRjBp9FYbjRGGXdMzUnbDibRRULcDAmSQrK6rTnmCwhHr1JHu",
  "key17": "4q8WMHavW4FsmMoMRoVbfxE6o579w1HFmuqxBhdkbFQmFKgqiBwfhhchNBvTHJKeCpmkc97RktTMja4JznEovPDC",
  "key18": "4DhyVuCPuJcxtegQ8kzTohQqStFDE7qbzVCS3ct6gZ4z3W6BtubfDkCNqeNdrHRMF6Y3htdp9ByfduKpmur5vPAQ",
  "key19": "4sX2dLbnpK4XeEfAD4SNDP9T7q55Ee58FTkVHkte4ixc2Tq9kW1uMF674HR2t6yMr37Cd1hNKNpvJFkRa4PVwe6G",
  "key20": "5xJ2Z9rCTJior7TBkAtEBiukEMsgnzrVkBvhM1NhJy4Ek1kDXY66EJ7mxF39eb6btzKdkDFYLPfC5bayT4QGFSwv",
  "key21": "139hGF4oW9mx4nV5HswA2uUmYaU5r1TdxPjX1ZwgmL639zqNLQZX3rqnxbiq8R3NmrLmArJES4rEWw8rFyVhg8Y",
  "key22": "RKm5K1ccahLYMuJ7mPEPz3dHSeCTiK3tFHK1eE4A5dyETwTm5Z9xhpX1wLowtNPUH1GVXYLhR8ndvPpP3PP46ju",
  "key23": "2HgF2QQtmwkv2CSaTpVZCLzBLPhVuivuZGQiCNojei3sBRibqD11mie8hqbj7fvDH5UmKTWSu2DaYXrxbhg1gQ3c",
  "key24": "9P5PWw1HEyTjJZTDnvbe4WQTN2SscKcHhn5WFXh7dqYZAXxnPWJ4hR6PcrXiGzVGoprt24doEcuuNEdA21c4XiT",
  "key25": "5SsRyLoxHzd5dDDvkBuHGmrKBW7zecHUqzvN6thjyj5aPi38HRbCXs87XxN3StyeCzoAkPN5kMULJSAmi1mJUFbA",
  "key26": "4WD53bwr438UiXX94rNTvq4V89oSRG1yy4SsNTWr1C2Muin2gUPkj4MogfgFSdvLkTQLL1chnpghWWMdxpgVwecF",
  "key27": "3536JYWrH73JCM1gUCRxL3QfJXDxg77CMiTidRNa591LiywhbMswGK1HsYAKLaJMZfH2ryePuazyaFfccQXxNWTL",
  "key28": "5obfYkjAejHwLhRt6CenUDXXqmR1uiokN8EpH1mvgncpkND7yFJTCtwjFK4rNhnUoKZYgaDEniXifVnLasD54fgh",
  "key29": "47yawUfnbJCNAvs12RrpuwQEmydJBv4RWDTzXVqRwC3eJ313nJqXWJjrfuLtoMUsG4pc2qwwpY36evbSzaMauNjN",
  "key30": "3DyEgbs5Pxs8qHbE1Mgpi8G5DKawChLGvJPim1jrjp7T2hWVRJ43P8GHgFnKCgtvYchR9Q9SzS9MfYy9AKTKRQpo",
  "key31": "4yZCHEXaLSCwa5swhdAmCNAHQLaBJbWfpQ1WCjDUjT8WP3gA6T6LPwqHf6HR1iCqXeLdawt8ym96A86XxQizScie",
  "key32": "3vxsdjCucuJTHA5gezPRHpWF5NM6vN7eN4qhqpgGAbCZxuUymPucNfnJ7KQdmf5bfyNQyHUQo5ihidwnm3QVXNYN",
  "key33": "4YWUHf1TPzKRCMFV87jSf4GXesHsQJZtGExuqeqBToVz5GG494ycRAFLzYg5YCjMT8j9KfKZxY68mXP8Hd13pRNg",
  "key34": "37dWMfKJHWUmYrivRCZLffShwDUVwXetxAsDzoy44mry5ry4yPxPKGygRJXq5i8xU8qBGtC6etRjdTPRZqnj3UQQ",
  "key35": "3kiA5Szz9Y9XEbGhdevKJ9MtapniLXdhE7W6XhVzzEHFcb2FZcxUSc3LH9ArFV1K3A1F9m6m3uFSSpwUbcvzu1nP",
  "key36": "3LrLTKe725Kt5XtDYafd3wu3Y5w1yY7GYjK6sz4NaRSM8vhzTsau5Hfzmg9PS4GRSjuQtGt1RVo5vKysjPFU7Y7T",
  "key37": "yUwgrm6EtYfWoTpL4zdVBSPwHEZz745H29CR52ntasFpQTtDSe2y6jSTeVxchQNYKBNEqjs1anYdFFEh4t4dXk7",
  "key38": "5QfobGNKNo1ZKF9oZbGZ9xNPd7BrKBCKWd1buGRgcAii6PJqbVwuFCVaReRiupC72otFb7spFnX94bPkyqr9oYJD",
  "key39": "3EBEdEiEZMqLqADpfKC85gk8iWxtUZUoTNeHhJmgjBfmeBiG9WB4YeYiifkYj9ERCZWEr9sXZyeDumLhNqebQ7GC",
  "key40": "3XeeEquCQExYW4jCj4iABzvCfYJHytqFv5Lh7SMu9X1RAuQUQi5jm9jCuERXxph7FdotbxCdt9oefzMrrTnuzR29",
  "key41": "2A1THgkKe9pse9XouSVS3gyGqSyPQSzzg5GBUX6FvstVLunzvyD8xQRSwN5uLAL19o3oFCGGUKoJ2MQt4Hjw1vFc"
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
