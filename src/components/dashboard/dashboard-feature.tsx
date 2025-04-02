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
    "t3mxHsMSHrhBisoSHdNr7stGQJPm4mxEtQ1Lui86qLJme7bL3F656PYqE1NcvWcvEkhaWoq6fVks7K2EKYUSJtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZWY5FQbBqx4pNgGg6PQC54K4fwE2PnJbLw1x3ixBK4AJBwKJzG4YNzQKu41LvGX9MwUtfAkZNdn7RyZKZSEPWv",
  "key1": "5HHM9q6uimcUV36mHLVEnrpSiZ3h9TsntuwsxcQq8SuxLmPowcqr5x183hAhisdZ4G8yfxXVLLtpVsBg3xmAPUsC",
  "key2": "2adVfhAvGGzzc8HG6ZSPRqfe94FLDSwcEv9pyMpr21ATer5R5sK3eXzXfY4kDPU4KZmmDsTQ88FbSwzBSDa9R7aC",
  "key3": "zhBfdqDPeXxQ12P36bAbyiwiburwY1PCTNfnSapJbeX4AtGHiojD6pVoTYPoaZHWeBQKwNaTZPWcGQg3Z9JGuZ7",
  "key4": "3FgjkhfhUgPu5RmYNxZv36dEXXGr2qSNsS2DMezyb1xvfDoBcofCfe3CN354CM6xzdgiebmmAkLzCnYFr2M1JVEZ",
  "key5": "YpBL7XyajRypoY7PWQcmcDVj7F1YKp75keNebecWi3DVxsf4jgsAojvRY8HcXQXKj2dmRVLpNsCeX5UEGWKeHXt",
  "key6": "4jtVxYRwspWyKcJGVQRa6gVaYkeqUtfgtzTxe3EW1TVFnxTq6bB6YVuXdYd251edTjhV2roME7mXcYiwyNJ3EMcv",
  "key7": "2ujCCqWaFAUELMu4KPZxsW9CRwJoAMZhwgrtmLZyh7GJz8a2hyL3NzXvjDNs4HTjVm6vJzEg5WHnc58bhj56ATzi",
  "key8": "3m87CLf5XgVdy5Jb5CYDf4mZgD6tusovq6UWb6KeFKF7Pzj44YSMTfSV1Qd1piEPUhZeStqHm1jDZqEFxMhZTQnz",
  "key9": "E95mL53hv58557ro1TMannHN21m6V7RTfhH5Z5hZz3G1Haq4KMWfBDACSNXZLCovxZH4cXSeTgvcAfkuD4dxxez",
  "key10": "5p7GzBTohTgB22hBMMeeP9Sa6Tz1mhZGV4R9sMdASimo6Mcj3uSmaGaDetYJtvBNDk6FRCvemnZXfD5EWVQgJYPh",
  "key11": "4C8Y96eFLrjJkGMV9gjD81TzvH29brABFFpHXcJMnfp9kSbpKp4Dg7efpzmTocqXdWU56nfTgPZdeRTsb1GqQKDS",
  "key12": "v7T9hYueniBnyn45MaabLJ6U1k6ERD9Ri4ud2HD9oLrRvynydswXAonqYmkWxqJYXE48bchqtbjRGragDLWjv6h",
  "key13": "XqFTGrhuUfvgST8Vwmk7BrsChk8dPURzUXfnR9ycbD8d5x1BoqMe4xNFpHgBXGTcMNnMLzaUQy4zR3KFVUgiHNz",
  "key14": "3sXRZzDAEvroFaXzfbh2TxjtXsYLmqgDRgjyrLvZUmCscdJF6bdS1ikLdW1gANVgCkmqd7REK8CtdAxyUUNwtvyL",
  "key15": "3DztAAauEuKCqd9us2MWnHcDozHZDdKKYPY7EXF2APvDzsRjX77W2prmPJWS3pnimvSadzG3PYZMPYABHu9amKea",
  "key16": "4JS44vEXmqHnkv9yywangvrNT37dpyR6CAj5Zxi8SkpAQHD9Y8p9uvC4Ws1wKEkGgw7yMTHeaSpBDzKTJMHeF6mu",
  "key17": "4Do5YeziRexu23Zt3w94nWA3ijkPREcreodqkoNyFxFpRgkW9uNhewJWtZV6u99Z4HJyiUcrH5mPsBMKja7SYHe4",
  "key18": "2QfGiMEP3tNZzMxerGuFLh8PY4TCcnNmYZLm5vkPjmcXp1PHNFgcAJAUr2JrBN3DsS9CfkkMR2esS19fS1cMFsWV",
  "key19": "4zWNFRV1UfdGt7wtwk9ozFPC2xDH36JRePeBmBWzrYyFGxoMefjrragexTGLXotKCTkptFG4mFmdn2aQfPRy66gf",
  "key20": "57sjgKDVaRe3iXp3bRUGWEHak8g4HfJ8iB1mGDy2kzWz5tCK6EQ9GguWxCFq3JiXSXsq9RmvuLvuiVmdkRKi927u",
  "key21": "4uSURoZiBRmVJ6pKusNmTS895QWL5Kwboq93JKnjFUobozeC6t734mAt7R1ke12KAvvdP8pYtDmPXokGf7qzHXF8",
  "key22": "58N6MUJ1iHApHwUVXWb9xn29Zcbaycam97FXxvDMbHY7TZ8SdVPQWmUXDP9tnS6LegZA49EpSZBBtNhqkSVoUYPy",
  "key23": "2hKwZkCyENgubr8YxHachhFLKnqEJbXit4kxi8nX6Bd48y1HkLTmroZUoPZ2wYdpFEbYUXBNTeebM4s3ZNtwUvpg",
  "key24": "3VcLMzEq2qfnZTzgBgGoMDm97qrj5EPWmtvqkx1pEJ3nUbrXx6p5KBh3CWVczKFxzqHha1nyMLepcGougdH7VrNM",
  "key25": "2siN6itfgpBcpwUFbkosioBY1c9aE2A6YRiUyYWHGr1oCx4K66fU13fQ3Av6Nj7QNZuxdvdsUUeaajmhT6xxxkkC",
  "key26": "2M8NQ4pJbRvEDKbwiZXxJWwghifBuWgFkTaSXScQ8JkeFuMnGCf2k3wrESBHx3y81gF6v47trGfhpcTiccvgH4ta",
  "key27": "5skqYFJsS7CTR6WtLKTDKBX282s9SVfLkfc6JyzPFQNy8H2yXDMCAPtq4Yhh8Bohy2HEJ8WrHKpT14fs7t2awpq8",
  "key28": "5MBeoPYBHaH21du8jCqKtz6JWqtu34QRgbZys2uCGiWA8uAULrcTK4xZFzJp1AthmExbePBMYw7yY2aMRP1a6qbx",
  "key29": "4beiZZWtHwtCrCH6XoynGKBwcwpDxUciEpKg3ziyTbqn43japfJzwRWMGXrqXhgtFpYKNYQNnYQsDmhQjnp198Fu",
  "key30": "3fKhWaM6Ee4eYVQgBWNxS1n8XMSPb61HKvHpGmS7py6MEBBXi4ySp89m4bQe6FSj5nHhA2udKYe7hWty4s7H4tFr",
  "key31": "texwEdcSoVZFqmkwxmDijKCarRUKMg8oWhh5YWNJv1UqW3t5gh4WxfvHmEcGFYBD4Gg2TMwBwiT18QNA6bhYvKL",
  "key32": "qhx73WLpbuRnhBzsnc6Gtqzy22x4gRjeHfaMVMFDSuFjgEptq8g8fEfzDpbnRTXGDMmJRJVaekiBx5dnxvLWYpC",
  "key33": "5cpsZw1yP18eaYXXESMteaaefs3MpoCV4HEw1Qytm4x8Pn4a1nJrtuM2rtZ6TyvY99tzTqUy9TtYMQHDfjdzjTb2",
  "key34": "3kfV1LUM8SJ5BZcDJGTTPYhY7MAdgn7p6xEBbf1hfgBGRv8XHKoQSf3Kr832bzNHcTxadDWonXY2zyYafzX9Hw6d",
  "key35": "26aCoavEgiRGYADsJ2MQYSYHp3j7wefgetgbxGDYp5rz34niUSKo3ZMEA91GMNjCLXkJHNQLdp9jG22sACzEohDi",
  "key36": "25shbnzdwbiF46TdUPaMrGdrERsp7MARDRk1Xh1gieTbDfU3zE1Luu5aPNZmjPTTXjFtbYD3qGD8JPZLqtgubL8v",
  "key37": "3JHdywdVsDXxhYuznt1tmGTF6T4aVa7XW8swpsAWd8i1DewGMXAP6qtDQBeXcbdZuDfiyzfLRSZjjRXWQwGJRFhy",
  "key38": "3Q7KfcEfXUAPfLHJAaoEdKtqvrDg9XLtKB4UtsrnBcCc55AtxP6EHDvwRpmGpJqqsRXwwhc1ETdow8hrH5z1ptsj",
  "key39": "5JX3JLdifnRCi6nigN1wEe9TdWUdivAh2gkciWsVNuQg3fukgKpsMyJLNNpp11RG2d6QduiijCaPXd8nNi1ZQJeU"
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
