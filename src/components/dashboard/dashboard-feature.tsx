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
    "22eCN8THSZZgYwsihrmp3QKmqtpzChrhYbUaQnjfnF1fcZrRiKAfxFDLHUq1E7F9qnc99LLdAaux7HytojTHuG1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jfoB4Q8pSiphfVpcK4FEGhAf2zzFWizqfznnc9CWjGQuYDSVsrQ7uVcMAFPqZfjAcGC8rBPmgaegrwwHXJFhFZa",
  "key1": "5H4as9QQ8RCj4yNNQMHCpLvbF6YrsbpF6TW5toEczuoSsFYmDr5Qqqj8nFFSw1LdN6QpKdzbY56FcqNDBgTNrH8A",
  "key2": "2eZzUyHgz1yVpqEif4rVqpJugisBsr5FjnRtE72a1NMyYZRp89uSswSjKojhfHGRAxJf4T954Jwm7BAD3sM9JUvr",
  "key3": "5TL7vekGarZkPctCzj4rNnSapNA6nMFgAKTcr4Ad3skh7GHVy2t88mBHctkzebtCWMzihRwhGdXV3FuBgJKKa6oN",
  "key4": "5wUbtPZPomsJybiRA5EqKAZXpY7aFmDXokKSz28vvAzjpL3BcnstCbxYp4FkhxkZWToFjsMdmkHt4KfTazjh7KRx",
  "key5": "2qEQVAoEW96nqNj3FrQyDZdHwXysWgrzEh9TNMa9Dx2js7tyzki73imDnpFNoYcmYjrQtypzaVrmvRwtcDuR4ZHS",
  "key6": "5sDULUy7vmgho1tVrUpoGEha8QTscoZmjFiComeAc3onYJB3m6d3F2vmhTmUwsV98MAdYBJMjecQKDbg8jn9KaCV",
  "key7": "QNY21RhgXqs6vw7bMspkVSAke2aRoa4kx4aBxujo2JztbzAXYkJrxaEPduEzH4RbeVNBw5PTM815Xof6DFUTMoo",
  "key8": "4pU3KG9EsZs6jhSc6iCZgfRgTqJ4BSkteMsLP6hHdQxfBvYsbqxf8DJwzmJQg2cH2L2teigW3qHVTCNXSQNuZVp5",
  "key9": "5onqnvmXC6ARqhZZLkKKE6FpdXhLrpG6mfyPVQSHJrgMqRqhVC586AeScUfHFrmLV3WxEPascLknXsv8E3121PaA",
  "key10": "25uJrpXeeoMQkqQiCTyYwFvkktNmmXr3A4uRi5D4JjXm1VjoPKETqyc4h5baeyX7TK2xDnXvNKsuPtovBftxFPGB",
  "key11": "4tr5yptVMCP7vrS6BZjjHUyCtu9m9yWFvWAuYSzNHSGFJpV2xpLT4WLrrUzNmRkvKnKxFA9kRz3ATkXbSEaoTfai",
  "key12": "4iUj4Uw5oymeNt448hcKNsdrtHqq3EQX9doRUMnwPqbxBpfJ8DoiWNEGoZCwbpeRt8CE7teL4Xjrfm5ttCK1qLpo",
  "key13": "4X8Q7ifQ5HSDJUNT3d9Tk1H3yZGV3Uyu95MsBjWn8QvbTWWQmKTDPGhcAP1iK4TrqqTqp54MzZC4kZo1ruhCFs1H",
  "key14": "37S8hGBzEAYio1rqtqnPnJncGivosEJDK5MEY53eWFDTWSr9b842AMpdrEqNfUrqC79ytn2E5WBAZP5J3zRvAMc5",
  "key15": "4YWZcrmX33Qu6VbmDqDFyeYUgKLiS1iHDg5cz42ENBA6MTFVYQtWSoN1dFRgr6a6pm5udF4C9tnBkcX2ZncGTBq8",
  "key16": "QWUk64TA3qAwDGFEEHYACsT38WX3AgZHQXaES8pR9Ue6WYeKdWR74VyUGCmTQPYVx4e3Fah1pferG4KqczHswTv",
  "key17": "2NGN8vD1TmpWUxubyJTTLG2vbYuHpAsKUwjZUTARUmSUFVYhrwKsLe9U2DNFVLRsVrbhKzVWS8peTc2EcPsNsT8z",
  "key18": "2kuiiJTSrWjKjEv2M1gWEAZSynHXeyqWG2nEMNC58NGn1dEAdSxNRXUTD4kJ8o4guNk1TERdQhZ6jtvoRg8y32Eq",
  "key19": "57LevprCymhXsKzCex6x7zev4CgXX6dkuBwBjoKKDK1Duvfou7TTVcPU98AYrnC9ceK4iMkufFBS9afK26f9LavQ",
  "key20": "3xfi8kV5R93aeZ9wwUjk6rNS9sFkBeB3RBrQyVVHjdto8LzYh3KWfkn34xGqtUw9UyLVPD4csaj64TNyGFxpfdgh",
  "key21": "61vHkt51Pf9JzKjgQs2uXeq3WPWAgWfm9TuLQt5oz8enZzYJXZDAU4CM7BfM4R5jyCUzws2WU8ohveHxdEmmYJUA",
  "key22": "4RJs76h3myNxekdayXycPbeAyBG71QgqituTmicFA8idFfsn22taRs3JbaXPQaUmgxQAVPa41uFBo6P88jvjZrFi",
  "key23": "44C1xpsnKwLU2kFNEGXNCnKezECvVcPm94i1QJ5zAkj3ruNznazDWBzHSLia1kHgi15r14RWnC9zrVamKJX4eozX",
  "key24": "5UXMwXke8CByUwzzYmFj5nsSp7j8jPXXoWsuPK3ynofmrMwvCsg7AJgLUNGYW88Ma9pqPC28oi1VrFhUH9FNr5Rn",
  "key25": "26y9F3ox6yeMyUErGg818SJS4KbDpSkUdUQPq6xsyYLkZwFgMDPxqjRnyyHNSjrF5yCb8qAxZjgBmKennyKCS5BT",
  "key26": "3woXKRFxBktFDizgWzrcKN1eYfvsv5GmiDTN63DipzB6Zgmg8E7xffKHMzhrEamqbsTjiFFaHjpStBvsJ7fnrk19",
  "key27": "474n1gBX6jKUn7KSjhztYiPk92bPWLmvd1yjtryD49hau5Qi6aarEQRWddNMriqxBA48MbkJUCKULkyBWZWn3oVC",
  "key28": "3znvpFzqy3UZ3LAkQ7HoKzXp6No24Y3fFY4DpTyfn4u4bkV2ksHR6zMkZ7rKTWPw1WcBc6Qy8NGuUDAugWdSqird",
  "key29": "23mUYGxfE8N5pUQXkFDLyafToi3CVKt9cvp6ivZbiDC4kxPfVoJyDmFizTwR1aMDpQKQfUVQceSpm9ED5zG98fbt",
  "key30": "5zV9JN9c7kUFQjP9kdZYqhmXiHUiE69gspPvZgFG9GeePwT5xjsmjkbFGEbpMJKQazMMSGE4xY9F1sRULn42AKrF",
  "key31": "4NQ3sKAYGvSUvd8U9upxELxdRTdNYxfvKAyY3uhNcHFfzr1Sd5KnoPJuSuundYT58dp4E62gtM4qm7KKGFrLk15P",
  "key32": "2gwiidgdAKH1gnnkiS4VAvXGdwW9DNWn4rXHFiSwR22Zf2pMrQgFNukJbSEoQEUM7mVY9ZhFWx15eb9dbXsDJM2K",
  "key33": "2ZVuvZCZrrY1qeiTNofU415zZijZfVqRcmNx9PSUYg63Vv6DM5uoBmhr7hSEydGmnBr6Rn89iGcX4mZXquPmosdd",
  "key34": "EFpHQ4nNAkaxqQRWd2NKtyA6jUFUeUpDWxC8mCyNXJ476M6oKg5H4238gfJBVe15wjEbF5wYwRyT7ztBTYUBXLR",
  "key35": "2XKD1Xdhtzv3RDJhzHLDg8e2GZJ5jSav6aA1XGhJ9Rd4CE9JRjxhoSiZz39qYX5ZZRrSaGEDQk4z6EiFmUfS2cRN",
  "key36": "5W3rhgKPV7LQjnEdSzaf9gkqiYDx3kkqHsUXFS1HFL5B8aohjxuZSWZffrTXrPGW4vQoKBvQvDy8VzeqaW3zxRXa",
  "key37": "ZY6cQpL87hPeKJPS1iXSyWJMKMkAfSkWrgEZzKS6cjyPVipsZJuJo7AFrUuJ1zbBMzVH5X1t4Y5frhueqGxpuQm"
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
