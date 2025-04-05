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
    "61KipS7qjkVcWLc97hYGSkBMLamz7ufpfmWjNL1qeC98SvWhBR7m1LoHGtebSUDtoYwBuE4Eyi9HyVQvSgimfSqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecJTAF3UdHvfp1HTAU9ZbRhEdmqE4dB7iHFwSne3obzeuqiSvuBUPncLFR97VYBPLAywaHSzFbJ9wPVN3UY8XQ1",
  "key1": "4FpZ1pjNjjx2JgiEYheRVtYrrwn2WwVaFLQF1TYs66kBG8NHUTxAUEycpY5PHoPsDFRrjexwwBMUJ8AcA5jySmWA",
  "key2": "5gV7ZKXDUsEsGAPAtv3WuK4Qf94J1UxDASLRA14kJnwLa64HppqY5eTSCLNrihT3nDj52F5wiZVAwsxm2KHuQvFw",
  "key3": "5uhTfCHe9g846tSH7DgZ1FGDwVXaJJgawnDamDmaqU8cdpeLS4P85spbHRyRsgsXMcryDkyTj8WLYHsG5QP56u9C",
  "key4": "5mk781tb5XZP3mGQsJndYFvnfBKPrRMpPjFkMoyn6wPdDsHjGZS67j33wR74mMhN6e5YSAwoE3EjqVUW6v9T68Wm",
  "key5": "2b8wk8GZj82K7kTsiXr58Sif1XaHgZYH2BpGbrAX5vcTtJFrXi6NDN6DoNbZSwj4pXGREiYjwbrGhPXBAWKdkvzu",
  "key6": "yq1tpWPLPf3mXpnXZqQW9Dj983nY3ARba72NdM1vdHShU3VCBQ1esyPy13CP6ZoP3iwVXX1zkmf1jXCZMNugS1e",
  "key7": "36v9DeWtKTKtUTasXqVKSZZXZ4xAYUtg5Ug4CnqboDAV3nqF4PdbnBAnwbttcYK8cR83DNz9BBn6Ly6Kg1vWNbfg",
  "key8": "5WNQvpRhtaysP3Gc82KvApfX2dsQ2s8oQXKKAYn4f32VRtz7xbEfWv4BGZkk8NJFdQqn9h85zNWQ78gc6nXWrJyQ",
  "key9": "49ZfEQbKxcqPPmWebxcvGHwsTxtdoRLi2qC8G5DXGrLRdKUpCdjHrQ6ifET3f9mHWiegC2tLApG9Chq2Y95QmM7d",
  "key10": "2AhEHiUnq7PbKBdk31TYyRbfb1rVCaPLQj27nsN8YzzK8FjGxwW1QGeaPYHSe8fTfMdR717kksYdg99MTPb3v1aX",
  "key11": "47NwwvPL1khuVNea2qjwK8Y2Mb95APQDu8xjHp3eKGh4JXZJQLj5WnizBcr6sbb9MCwSbxtkaNcnGdjN6w3Vye2W",
  "key12": "2sCxdCcEG5UDPijekmj6BtLhVARLzQoUsYwnYQXpNiBrPJh1sobyH8fs8y1tWG4E8t7QTCjYHTYsmUWcABQo5m29",
  "key13": "4t9tzsqxBLQSDXBcsuZfpVScFUJ2Zwr6bL5J63keNGf2wiRWXT5tavVS9doDYpqZMs1AXgj7zsdTp4946aDWiG6E",
  "key14": "4FkoBjoqMjvhjM6y3pCBhhyYFrcMuXpppVwVYGfraRZUAC72AqH5JhUeEhY7XJXpTDThsDYAuSLxW5QFwurpZbmc",
  "key15": "4sDtcQppyGNor5RxBvcTrQmw4HxRFuWwUKZTiTj2ScRiqji6Jpr2z4CuvQj6SYCuJ6HQtAEyMgyWMatdA7i95wfQ",
  "key16": "5thTrbRooKkt5yE8vzdEWdPg2QehcMFSvTN4mjdSEw18uUjfo8x8g8zTZa4Tbw1ac4sexSBNpTeF1F7Z3yKMnL2S",
  "key17": "2YkgxewYB2o5CBdvrDubpD4ca52H1mQxQY3tborgJnwzMdiqHKQ7nk6hrbUADPJJvJ2WUgmYYDa5kRMQosxugyAu",
  "key18": "JoJteqKbjTXY7C7iL4i9uDYRmahq3efBs17HnoHtUqnMbFNMftasfYpXQmPaUw18H9Q1JnUcF16ePcyap77WPzh",
  "key19": "3AX2aueYh9J5DEAwfZ9GU5mHbUHzmFXVksTwgoCxdX5ew2iArSeTrkpvfYQNGoMeoVjV2hiV9ttLyyT3qC3JQZ86",
  "key20": "2eDfJSythBv2QVGAegq5cGBFHmbnHyJBTWNFPuz7uLPz6Hi7uLtKBquK3b2ychNw5hD9uNQ6H7QyaVqSRxhBq2M3",
  "key21": "5bMMHMDkpNLXqdj26tqrRUXfgdyrhbMVa714QkEAj1RcY9APMMrXP9vbKQHbHfLfVCCg3pGthVwp9Bb66DS4KcGY",
  "key22": "7w1re8Vd4L7bA5igo9JCyMsZo1ffCq48bZ8zGEUpPuKLz83vbVrK2AsD7ssjzopqx5uCwQ45LTBRqPpGnzDXpNA",
  "key23": "3rQLtqWADC6vqg8SYBd9zkLrDa7AX58zQRkSkt8HYvA89Wkv24SjKK4EXPQ2K5MkWABnnNj2FyyrLtEFRoJiuJyR",
  "key24": "5NZXyNwmQND4tttSCFuxjyYqi8UWQaBWUj7n3eJPJMADYG8ys8yRmtsCJgkhqjddEN255Y4g9ABes6eYBghhkRAd",
  "key25": "3MzKNkT5kkV8X5Rp4atLf6su86W66nLibUQPLUdoCLz3yJuUcMECQrkNanYYFxJCJQL72xo9ELvcyweWybBTZrYW",
  "key26": "3bEdCGTXknJEfite7e9dqkJRfT6wF7Z96i3goc3v28WZ4f3vdMRna4orWnWdeur8pV3whNJX1Y3arQjjBVpZqF7U",
  "key27": "2gNPasHfgHe2e6TbbPRASZuWQtu6usH2SWwJpb3ffqt9QzAQQSvhiiRfFyQvR3aAp7uokQkGuA4GVFX51xFW2M52",
  "key28": "7LjWE6nayeGiw1qpHfbCrzMsZFtoJuENCnEcALWeGC4nxr9RspdR51GJEK9NwodtoNMqjkutNGjhibkH6iGLbkR",
  "key29": "wWNbZ7WL3BNiF1VnFDTC4CCyNGxNjp8cugYKhkmUj6ro4MxyBn5uSBmsqXeknMMxFdG8TX8Nh8G3MK4Um6GtLdQ",
  "key30": "5JaigGcRDkdhom9yhqVZXuNHKL9yG3v4t8JLgh6faxTXzvjhdvmM3TALoHrHPcZ8ipcEyEYuucFaguwSWfkPcfZc",
  "key31": "3VhZXAjmKukVZWNSNi7Jrn2JfDABPrFHWC5CyFRdwqp29UjspNBSqYdNhtxHdECQP9fHazCLWnX8Uanw5dWV7NMi",
  "key32": "3bPTvUUCMfNrGhJpBr94sUeNMYhxcngXmfaCBGyPjcgnV84SgiLFTVMgtjxXt9EQ5LbcbSuEeVzSq3kidc4dy5AA",
  "key33": "3q7cF3gB6sRybbQdMDJkWVTLfKuqK6rBQ2mcSaEihdV463QjPgL3yiWC6UP2YBLGv3VHz4y6a92ny9beTNBkmUtA",
  "key34": "3uP2yL7kA1mU3DLsNsDPyRVotfsqgbdTHqgucd7vFTLfZKtVCyQU9n6YcgaSvPtfZuEKTtgx2BsWCqZeRHxrkAHP",
  "key35": "4LBmdRb7wZTNz5tj11ughZzEKNjLJzAAPKkb6YVtytPuEmQ6rJ6MyG9GuQmECSy83xWKscyLA6J4schmjhA42NRt",
  "key36": "3qEermydmt9Gy95SzHkT6ipZxU7Gd9qxgFAGoXUeXn93vsgD5WSpZZqWakhd5cE2y212w4NgLpxXGi2HiMkbcHg",
  "key37": "3Nm3hzGY5ZxbaP5bsbLAgYgg2xmZ1f7YsnrxrmV5AJJSkhhDqvZyeTNC1ipnQFPZvHma6XMZELrCzec8oNm8HACi",
  "key38": "56DUgPvfQLmu9cgx1MdCSAr4GHPhLLzf8wZfmG3fpP4HUsFmvNyGaMp5CKTPkBeZSmNBgvd8C2SL1db8tFfECZ7t",
  "key39": "3D4pjvUXAtLaCBnD87stLkBY7cJ2DydMwjwp5bALFVR7j3ebFS64qp8Abvy7EXS2A2fdzA3iokoqiGJLivcgMRLL",
  "key40": "4uEo5njtECjHEyoBU76XPy8fvBg42tubDCL5ttPft2ws1pvA5289xNxXPLDaCsJiQLtn6QAYQPqKQKWEwsqNWDvh",
  "key41": "42hbctATsKKvykrw1FP7h3LHYaeBeNn4eTitLseJEVv7XbMitugpy3hXToGJWLdTkA3kCwLRnK29bg1WZ2z4Wj1W",
  "key42": "XkxfSGhth5PGyuFSnQ5U6e5svi9DoetQgZ12ExGFXpzLotG5qwTjmE1TYeBWp2XRsng69tidCHq9gZhfj1PPQJ9",
  "key43": "4n3Xsfb2xy6RAdD5Fak5QcjRPk8QZMAa7zwvu9RtA7T3xhjw8d8YSH3PkzJrY5DexXQFgApGAs6XidHGYKfyXB2R",
  "key44": "34DWd1tQEshDyDXwci9izFuW31B64JFBtvKvQEhLbBRWzxdsU1CdN2D2XZT9A78iS8yF9FAdaE77UoMAJCut8vp1",
  "key45": "aGnASqnrsRhBZMMdQC85vKd6YLVXZDt6GqUK4a6jeV58kipvzD7uweXkZZAE9dppu1C19uu5cKx1f4DbsRvDQ9A",
  "key46": "DLsbr6FuQjVCWWS8ESnegkzrT4NDEw1dN4HbS3aFdZCAVPz79RWtjdQEzMucKyZEMBJJkwXaMayauKDYG5rAZuF"
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
