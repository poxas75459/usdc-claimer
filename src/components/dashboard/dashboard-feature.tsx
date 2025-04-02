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
    "5hhGjSuNGyZTMb4cJ24xk5B4vY4CSdQCr2vC3e29QMp5YMqDyPMSFJxuwbHaHRGAvBm5qXJhtybw1ebh3QrmxLJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W7KEnfrUE8iqugB8Rpy4cVEUNm58BwWiVSN8PoTZe7f5f16jHe7tXHZBVf7xj6G8yYvJnMR6yRfXG6Qr1fdbBUd",
  "key1": "4d3ighnhhLaTDiGk2k78Up1yKQ59WayqakJncLqNxgk97fneiYTZ1AtbYrQmWkipBirRmtqagEyqxXLR6idcnesK",
  "key2": "5FqMyopjo3gukt6ukRG1UWK63qfqR6Yr7XWsSPTpn7zLUpgXHHf4WvMckAq61w9xSUeMV1qjtEX9NX9Cr3TyyxeW",
  "key3": "56wRrncPfjixi1GZobQw1BPBMp9rsxAwCozrsEV29gJJYzjUihiHJAX3fVYL9dreBydztjp22BqA94RZY3PN277u",
  "key4": "5YpApcmXsHEeK297SFdqTrTk7wxYpbShg8Q2bbHeKedbA6weP3Ww6Ab7B8CTF4e3jL5R1XFwdtGbtjZyJguxNJ58",
  "key5": "5p28wFiyGeZAB5qE88zpfEy4SDNcbLEgTef3BMQpbWWo552hc6P2DFXhmVQjFATiD9mDWpXU3fAeZTZP8uueN4pU",
  "key6": "2KYfog21PBDb5kPj5Y8FF2zKZrMaQ2eqwD7D9qWPw39eERhL4uEAFJ9ZXXwXJ2LZY3pMGvpgtkfmFVhw3F1rLUjT",
  "key7": "5MmozX17RUWGEBvaYy94EKARtCVpzn644wgvbuXk9aevjKJGQi8iw2JxQQjXuCS5Q2ygBK7v2BvBYcLrCibZvFjM",
  "key8": "4wmicE5p9J3yGxVoZ3JLv8YmjkwWhxk46bvx5RrTYVBZaDbiuyAxXGU3aY35ckKghWC8pU48jN1cX9SdRdSxzBx2",
  "key9": "JswntPmodivnH4oEycH5f6PDxCf4XDk74LHLru6khJZexKrWz2TnnXfVidm8BD9Jr523unmCAPxxowAomV4zTg7",
  "key10": "2z7HwBw7uK4ZSi16baNY5Ta8vH2fQjvZegSCBivW42PrKp4HfhHFPfrBJJYQDzf3JkaLki9teoXYpshFmPTEipFP",
  "key11": "2TRPX5QA7oPCKtKZM1QTRXzRe5xAdPg6mjLXisa2KvsAF8GfNjvXZm6U8L7f4MqQJNho6qUAavyg4UwGePtgmwJ7",
  "key12": "5woogcmT9oHNsymtEvEkvxQgYff9AX2P1Wtbnqasq9EtxxupUyjmSMQKCCVXHEFYPxp4z9CmV59kAq4XX84J4cWg",
  "key13": "inDUita5QWd4eVQ4UzwAWdEWkaP735khdTpL69NXnGSyEw2pcaKAsERdwnd7297dja3vi1Wjk2brXJHhsqdgZVp",
  "key14": "iUxr3zYEgRTKfMk27f3UVCtPVvYdmTNyp562pusCi2q7SRh8R2JqguiwFX3mExbeBjqGmQSu9S529cwn7gVFKJF",
  "key15": "26fDDtCguYGyiyRbyAnE7mYQQm39ntAhn4hpeyNQCVpiqCcX7ja3DTbDwjnUg78a2GAXCngB4ncdqwr9TsSSYrKP",
  "key16": "2R1mnTfJmHaYLM1rw9pXq2GtUnryUEpHsf55sevknSy3d3GkMjqRzaGVTCsFnss8ofNaFptXWiLpMuJEhSheu3bu",
  "key17": "BbhDkACVMURokQ91ZCKRxvxdiVRaZPweAw1bxBkiGZZBnCqTBw7x24nXoQubFaFa3AA42UxJ3sioBsSD2PQXAe8",
  "key18": "4v6DuLAfFcj1Ksh2ELG6bbn7vDQ533aVZjpQThgmdDZsxZMQR16Z1emHZqvcnWXzzjZPMTHbthZgqkqx1toRWreL",
  "key19": "48isfwHRXeTv13hrdobrtFCKtFcKVdLS9YTRG9CBzS7cFun7AuHVpfVzsCS4ViXxzXuRe5hNoywqzQvwF2JvpS3B",
  "key20": "2uyni85gfAroPmKmAy4xgDUZdYmVbppHQDP69Z6dMoKpMu6ptqhhiJtGNUuEEa7Nmn8qbmeZu2PZVQeCasV6GgNr",
  "key21": "cXmxneohMvzfQ2fCuGa6q4M2DiF8AXDQBW2hPjQUAvrFC6q6YdxMCuzPvApRdGKoyDZCgHHxrqXULdKpkjgWcHx",
  "key22": "4SJHhjRaWPWsxvdYBFrQkGPK137cMStWHwvzTjqeXgmJJ3kcR5EV6bUy72r7o7U3jyrhbCQWtwSjmmqz7gzG1uga",
  "key23": "5Lgdawx9L62oGrbQp6TdPweDvV6WYBS9Zm4xbyfZ2aHmZfAeGnXZ56wgg1a93JUKqTZrWgfCtJoHYsjwwVdwuY88",
  "key24": "4jvyEdaAfmdVwQm829dxs2QgmrxcnvB9ePbz9w2FZVQtuYqFa3dBB2ohVwVQsigD8p5cyfusfxnfW9q9JbKS7ZLh",
  "key25": "5KaWf1M2UAoyn2nqnVKmwZKx8DScgShsWtFbi6DEdJV8WEmgWgsfFfXBea21zZXsUAWRbCaDLZJ5KWgyLTpjuHLQ",
  "key26": "2Ey9bFV2irjbiXfzySryNbbRBGgt3QrCSqjdZp4TGauqGbSasP3iTksLrop4QTPZy8MLk1M6qJe15RkDUezH2xB2",
  "key27": "t7CKq4P9Qu3nyhGPuAw9yDCyBJ7rij5Yt1ZRP7oAQAPPbmrKXf6Yz8sYnL5dAoiKufGXx1ET6p3dGFPPetre3am",
  "key28": "4hwwyfmrZgcxPL8xyh7gEnXMxFuYj9U861CcXgUhxjm23hPvTJGe5wQsqF8VBrT2hHW5L2amVvfsPGtQDHdngsV5",
  "key29": "5H9wTAsFfsgMCzSsAeU4yvmWaSx28oqJ3qPX6vVFVFrvFSwgFHC5RQHok8ZLScLETRdR2hYVWw4ZkYSLq2r9K8uF",
  "key30": "5YfaWpVbGL46Ltxzf41hRFnT7ryGPi5sHwDvsY4Vy87qXZWeCAu1Fw4wGiSfkoR4ErH87ZnvrUHAE5cXwtqi4tvd",
  "key31": "3SVC12YUXZ2c6HFr2ttyY22WwSsBRX9erekooDuwD9tp71tdsQazJAcWu8DRXCURKxGM32jc8R1KybXLR3Bvubfg",
  "key32": "3ikRHFWwmmQ1g2zNqXeLkEZWDXmF2K8xzZ2QV3YjGXmD9kyhveqAAG9QueRuKsidbu6QEe6djv8zb3w1dcdgfC9n"
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
