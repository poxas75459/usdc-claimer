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
    "5tQYfcGeG2ENEqvun5zSt8mKz3A5dRER6dmUcqL2ZvQBNnArznDvNFwTamdkd5UD63MXFsAPRi8KKNGnX9FKzSju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHfFNbxQpiUnbPmsjnaXkAHv9P6EW7H5GEQa55SCgPqPkKhNuEsQ87zLxdTgFCsSWvTgmetnv2Ydw6ShHmD24Bv",
  "key1": "3St5fQf2aDPtfJyF2QwtnDa77ueXnDSfYLRp9BgdqSaHNhGmMofJtePVQwJBJLD59awKSd2JMD6e2Gy1QopY7BF9",
  "key2": "4zVvASQYQWVYJPSpdUordeqVBsyzJcnaNtx3PxjLetv5ctzPKaNA9DSw43G75Jr87eE3Cq6K6N8vWtbwPAsYXuQb",
  "key3": "3EJc6ahin7WAuCmcNKTb1M2z7j7QKVwzeShkfmqHyVAPLJ1tChsKwkEpZKPXRNJtouMXxsJ15NsvUh6ZCWbAP1HW",
  "key4": "5rZ6ViJc1N71mtuzNh7WrvByWX59U1Z9tb9jaaMamR17WoKBaikiPMLsgT8adYz5zT9i89nVYYk2dxTYBe2KWH7E",
  "key5": "3Nb6oJQBmnnoYydob2ugCq1Dq3LeiJeVd69z2nxWq7M1fcHaNq3sWpReWEzbiVzDtvBUJKH5e3qJxu6PTJK59MiY",
  "key6": "5KHB4Vsfgi432yKdt1rdz6FJ7XsPV6F6RCDkd56UjVUitvafgPFCAAVF5484hvkjkV96jnUrbjrzxtCN5jxYKGhT",
  "key7": "22aHDYNYHHQ1mNfhpMAKChwZ5Few8sU6n1UjeXwNqEh6HEtNvX6jdhoAhaipZikFmqD97FsSLr8cAhX7QruzU5gu",
  "key8": "2sf2xsMwek1JdjVK6L1BgiG9hzRYoNzQeM337yDomfUq5tGpxh6JQkdfZKwSzNScemXcaJqYKygnNQngXPAq1pB",
  "key9": "5LCh3Vi6yVB4EwKZZQSCQ38gK59iCbfkbosmMwR7FrBthBiwezfS7pn5KoMYpdmjrd3T7q7QfUiqowYnXCZ9vtvB",
  "key10": "5uz87jVDojDjVL7RakhwV3HkMz2nqZqqjDi8KpUp5zswzVWH5TLQCAoYpkVqDnwrfeUM395QCB71gc2dohWwJkdM",
  "key11": "25op24q6tqAAt2k4YKJt729qSfacCMw37RnndmUr9ZRPu9wg65jq8p5Q6tQKvYCcf5WTqQtdGCTMXohsjFKrJK7h",
  "key12": "52RfJs6CHUdg5XM58zBYyhNTtueVtZzYtWXtyxpNr6KLJ7p4ka15GG5czRmNGJi6RCnEePoc71jwy5Uv5AhgTNBw",
  "key13": "2ZvNfhxixVfWgtjc5oevDQN9AkjkarqCdwremK9SYUh4nHAkm3XmZoQrNPTvh8Wxfp5AcsStshbMrBo4T1W4r3s3",
  "key14": "5wFXLHiYkYX3yKAeBSveQPyHozTLbcXThzN9LdxjTbLXFAPdxhaQzK2buU7a4p63iLXtkUQmrpSb5HmhqVhinmiY",
  "key15": "4kc65XoSz6egzCKp1U2eUccuVapBorsdfGDfxKF8FEkeWk5aVq7gcvrDds4SLCRoa1LxdHHPc8VXSe746N7zQARS",
  "key16": "5crHkHyWpF8yjhBaFQy5JxcAX8zRBnvJUH7NuBHK42HV8qrMLTCaKFNX4NbrR6fMQeTqns17avcWg3vhGE1pkNrE",
  "key17": "64TpLEE2ZPrvhfAz51pynQt6wMctfhdGj8jyqt9xQWQUi3YoZ8QPbda96nSGjbUrhof1bw6tFNqCR4LR3NbGGVLj",
  "key18": "4c62XXKvxHJ8tCWmTgULFrAf6eQJnkFnDk7Rhcis17QomXT4JXTGbQufRNASL2vCjT6LfrfkXgNF2GeowjYW5LSW",
  "key19": "25x8BP7xMawB5o2ckuvdLf3MmYoepVse6vyxSs3sai1jjsKHbREpUW8hNXscTTwMZPLiNvLK2kJyh4b3TGHYPT7Y",
  "key20": "2EDymyWZ47noZEzZT8HDTRJgwRDJJVoVmtQSpnYdUCePxeJRoFNBCbWS3MNKgEutpfD44khcwkQoXFZn5uY6CZkV",
  "key21": "2rk5fXFNEdNofk1yUx1h2d2qUMNrBBxjgcXnV3daqdkV1Q28DV3BgNZppeRAg9vy7YzSo2CqUJetZiaWnJLcv5y4",
  "key22": "2af8iL4yed2i32NtTBmUSUf7U6E7qChyHoZ1BuAKea7LP8btynf9txW4jMQPSdeEUcVnHPQSQSDirY7gg3dNqbKV",
  "key23": "4nn2xtfE9VnsnebrgozGkzsP2m2chrAyPffttqTLoxv5Wg431Tcym2USoasc42TWtrTuZhihn35xNm6PXb1RxYbF",
  "key24": "5uEwvLRS2JyzTV3J58wndSxSYRTqL97fu8Bsg2hZ4aioATx2X81FaFBbekYUFTJV3PeLyzHepszD72UUNQPviHxC",
  "key25": "2ER42Chig9MtNxkU5jU9eLFidHXmCppqQysqbvUcPpnBmT6AWwCJeCSTLNfD71i9WTN8w7D3dkXtPUeo4Yicr9Rk",
  "key26": "4x6z4PeU9FpZCeBmCiH8GviQQUkBcwbN3Pc4AB7F5J7WL5MTFxHCWLiqY5w4DqPng3LvbmiHpXDatEeBQCnzm1KV",
  "key27": "5RNSCZJpbvc3UfUfwwaQ4etTKgP767pLa1yBNHaN7FFn15dhnfcWwX6JoCe9rEWzqhb3PnSiFZwn7X98VQn1rcTB",
  "key28": "4TSMWT95AiUQ1TdPSPed5BJ3C1aWJ4WGBPE1wnvc6FCrtBx4tzu2rQFdzTnJaAg352mUrRpB16GaQW3vujQFtdTb",
  "key29": "659E4DSPstWrYdbyerotBxQPTsKokuXo1YQkUwsxzA3kwuXfL3QHLyzXcUrQpLfjfqghucXaAPmp5NqyXV9U4hqH",
  "key30": "2QSuS8XA1nSNjNqLdjBh6qDrf9dQ7YFfUDbAz34ZCT1Nft2paCwpQ5j9YpopVrh1YQrUhEeYL4owjg2yHPLLAcou",
  "key31": "5GSdyrvQs96BWrJMoLJTSGn2AV2JuJ7zeNT5Ymy3reYNTf1UUEkW2e8x4kLcP7HimNRnF2nUk4AUdymr1N5LWg5G",
  "key32": "5AGf4pYacApmimuqkaefhk8SmXV3TFKB7vYmXSJXLmnTN6w1unNSddC4YCkgfWmTewqa3nijLynUBAPs1Mfn8UNh",
  "key33": "2T2DczDhveS7NfmCtpaE4VKRvA8BzTwn4DCEFS4QiX7J7JaBz5pJiRTCXe9UA4iadFYjWPLmhtoFQQHhjydv7vpy",
  "key34": "5kQrX94UZiiQfhVnjLJEoFsWHC4QuUCVHWNJg9mdPwkiMt6PknLJ1iNifhjmf6T9VFU1VX98DXZwLpE2A7MBJMo4",
  "key35": "46diHpp3Bq5PfeAKgC7JkDoK2vWW4XneF67f56oLCzAP6p81ZQAovYHBdPRSEgDvK15kUk36A6ehA7Zc9aCHpid3"
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
