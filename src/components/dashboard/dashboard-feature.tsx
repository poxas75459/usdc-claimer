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
    "5t23WCzUn5Gzh558MsJT7dtxX46DCgeVZ9SLx2sKmZgs2aRZz8QTdLZ6WwiHbs6va8NiqWxkKhhnjXXFaU72B4mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XeF2eMxQTo9pzzjhGMhtsdxtpbV2BKfzJEm1bWVHfoAowXHzzu5S7cKHeVno7aWLwwZBSJqDhoSsgBBbVXkHqte",
  "key1": "2KgKePtqoBm69fNDjgFU7KPRWBXYtV589F1ipszJgL8JAsVPdn8UnGmYaFnkuJTNXvM7KE4ryJENE96aBTeauo5U",
  "key2": "2qHnypbysu1kSpWjTb8EZ6NRUCoz2VxUQGsCbggrHPV3wEHnXMypCECJknHAPf9Jp7fVQ65HzcgVzM4wXrHiCR2C",
  "key3": "BvPiA1DEeVB8pQE5YZbsXbKWwFEPX8tZx3FQkAKj4W3DwbjcCstP9h4JN58UcWVYLJqTGTCDQ8EGj9S4hH2fzqA",
  "key4": "643pmEMpLco52ysUeUoqomnKKnAu66Jey5SY4hxYHWb9rcVMnKS42QNkx4EU87GNEFSAHfozoyfWEVpQhH4ckWBf",
  "key5": "3GZ32i93yHeAzfytx9nRU75FVAmvwp8k3F68MjatYD6wsPzQFxv2dx519vJteauLZBFiSobzM9g4MDg47C7ePEbH",
  "key6": "2EmC8XqFyyVv6Thauoc8VLXxZnvPYokjJ1sdYvqGck5mvgCYraNcnZagDUaY1yoy17Uvu25qtjM5sNTKBWkF6JCd",
  "key7": "29o31tj3dTBRVqR8RCR4V5FZadKjegtKqwaN1y853nWnq3iZzNM9w3wZULFijr4KiWqdtHTtnQEzJCSqiNW2bz9S",
  "key8": "5oT9aNVWcKM3XH2cw2dktdR2F6VMtHs47LskM2z68bhJjn7EKQCEHtzsaesTAjfQnRMoLAwLoptbSxjMHLahXhSV",
  "key9": "46D7AdrdhY1qZf8i9QJJKo9wsd9e3TZr6LakEKPyb6UTDxxx5T3cf9LehxZMN8DZKMnP6tyJQ7C8qwudVxeeESmk",
  "key10": "4x8Q79wns3WxGCFNX7HZyrXSC5WVTgPk7MJ673y892BnMEasuyztau12P8p3B8TpPk32E8Mqrvm8Wfxeju6TYYLh",
  "key11": "5sBYcfdhuvyj9mTHAaBx9opjk7PHTrfkd6o5JTMBBow5QGnBXxx25zyDofkWGFhKCAaqXVKjmxmSTHg9FzwPW2Gb",
  "key12": "4ga567KY8U9TqK5ZRkeZNjdktEGCsx8PQxwDrqjeqnzhSZGAgvhtpb8Qvet2GuiDUJ8X2KpWn2kxrrbvcvHhCk3S",
  "key13": "5sMfFpagc1D1hvYM8bVw8ufHFU5bac1NbPLkU47XzzxgyG3wQXZrtMkUFTL8KANsxkGe2Kynor3jHKHhoyA7wpED",
  "key14": "31fkKAceBDx8XC9gTd19TRMWUPtvUGHrCZsADpkuJid2YiPBJYQcUN9PTGLkCQVczb4F26n2AQvDwQLuKGMWC23a",
  "key15": "3S9ue9D1cvb14wEFGduMJMwQfLfqi8WyyM8D7ZeYJ4UEFE4y7GJqV4Qw5VJpKwCDvTKAQNiWkRe6tpZ3GaGcxhB9",
  "key16": "4EPBby7rbhzzFtFKC6V5Z7uuYdPoMix9etc43ByoPQPjMemkrWmEw9CH4fzJaovmy6FnmP4QLaYK6QSjPjDkqoeU",
  "key17": "yDLHQpwYQcEbUYRibDQr9M8Jbig49TN77wBgJ3vFHf8E4bTMSHQMvkC7hU3rwc65qSjsoXzz7nKRd8JhRs2qork",
  "key18": "2CUsu5a5oNizx9JaF8j3b4X6kPRWJBotkq3HmyfocZAUzPNJcHbLLx56bRjGVeFRkr3aac1LoyosPnTcteLtfZ2C",
  "key19": "61v4wjxjrSKWK8GX4qWYeEx8155zTvydganuJdf6DWuQq2BER4GVBGXqgN71WB5RA3eTqLbxSa69dBPse2iYvsAV",
  "key20": "2VMQvBtySyi4DBtauxyLLC61SsCjqeGV5WoNHNMZzSpyi9h6e6QsDCXXZWS51qsvrWbTAm33687RvK8fVjMgzUY5",
  "key21": "5mZ1QETWboHjLLFkd3AkzkSioLw1VaJNo4MDJfaL3h9Zq6qTKoeFa8zLUxRDfpmBLoPdCuc99ooZCF4vHMCd7J45",
  "key22": "2ZbN69bQae3BhqC5avUPHDHCguHW5kePtPRNNynJ5S8jHPhMsuv28SkJ7K1VGWffcVip2GttXRojikJoJeL35ZJb",
  "key23": "2JHEiP5iQbjdVckt8uxNsqyLUFBydkr3sujqador41XJuAPfVqY4qjrxw21huy45PrGGeXtjpzgV7ak7z8AxuY1p",
  "key24": "3rosSZ7YwcFiGg157j6xxd9U9UbbYwD53nnJxM4cFMUgP5mS66QXoHQHtwozFXU385R84FAMYzxoQBXvsoiJiN39",
  "key25": "3ueCtJJFwhJPuS3fxrPzWcwUw5yyNMUiEQ3b3W5FVaCmqtW642eFRmgd15szN16aQkk8i7mAwe3vZhzHJquPbizu",
  "key26": "2yxyg4tZ8MXYLmaZdRP7TRjWG4cdXFv4VSULmnzNbGfHN7Po4vcSKeacJwuMYxm7P4QeNdBRxYDK4ohimQyAVzVT",
  "key27": "2eDi3gRjh283o9EbHzt395Urc7f9YWn8N7pWL2suyN5oyA1wL3iDXN7gBnyVc5ViK6JvqipTGDiR4m6N1VQyRQLk",
  "key28": "33SEFTzNoWwWHyETepnBo82fsJP5TE2D4afAxQTgvXSay7ViYnpDxSJmbxFAr8brgMaNNYwNWwA2V8RtvgASLG39",
  "key29": "5LgwnFTmFcrrVeQUqad1C3UeaAyyMzYrpbCM4Pi2Aww8Ze48ovSKU5NFmRnFBJmhF74kaVM7HDXL3ECm5fzeG5hK",
  "key30": "361FyGDXBjmKfkgN5divMRA7EkceALsxj1V2bLCiTtJBSmBepGDEPEdGfNq43UWZa5pynAtFrR6o1YCAXcJwpuHQ",
  "key31": "inhUh1XvrVdVtp8ZjiS9nF81UJ1mdChmh5P6mLKv8SynkzjxrNbiVKsb5u4sS9R1unzu3jR7jzMyo2pBEVgfZUV",
  "key32": "2ePzMsy2S3VwRBxT34z6BnUC2xd1ZFcPuAuB6KrxmbkeHwe6sW3bigDBdDN9tc1reY9Tap7HxfJiKh2hLYNxdroq",
  "key33": "2zoPkm1kSa4kBSizFRRBVUJVuJoRkKt4qWrGpCWHHQfWpiEW2kUaRucJUa3pWhDGNnHj8UsVPQ6GZ2mndvkjiA9n",
  "key34": "4JBCtrafVXzdRzhPUpWNsevTQarG5iWhwULmEiVA2ennTN7FJvopTbeiUTvoCYvR4ywDzTwzzQxJZMx7eaRjL5Ma",
  "key35": "3B53rihvSMJC8VPabSuhEkJK7tPLm1PJ4SmCTk84Ffj2e82Ld1PWF6eLfDeHk59LVws73aefBd6LXiL2EYe4m7WG",
  "key36": "5WmpdbgKfvv9Ek8uRf23ccEVFPMTNCSuvjA4r7Yh4nAS3aoBXk6rknr7QeDKFXVNhcrsBcYy4D4Xxi9jrUeqdbAc",
  "key37": "51D2p1kduvA9aTmuavzpPwU3Ns9b2HVZEXakrgQtrSin1YGqS7CEeaCXL4Tnme6Q2ZX2aoLQYEnBGFqWUUNWuGYL",
  "key38": "5cf2Ro7QQJbMVxiwyhVjGSDqX9ZkYPsfyQrgxhvsAG91VZsmrphU85DfBfSEacq1y4QYP1ByoykFhaTpjtRvLfz5",
  "key39": "55GVSrcMnUecpHVSTcoQ8qKuNSaKK2EMaoZDEPQ3149ypTeDMGvBbFJr6Uo7NyQnu76Z268efnXU11Nuxi84nfS9",
  "key40": "wpYaF2qPWdtABmWVjCFGACqMDwpFeb28xwP7MWQPXxtgXdcDucEKXN64c96zjvcgcHeyp51ghMKGMguMRQsbpp2"
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
