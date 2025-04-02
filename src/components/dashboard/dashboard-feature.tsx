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
    "3KKu3CyuTY56usY8QL3R2Q8kh5kj7Hutw2wHZ3aaQAaBr8FnTaoevdbHH3M6PeikNEQk5qPK5Ymeh9We8mVAbZgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SV4edJp43osv2SfBXZbtjAbMKcJxEjwo9KDB6H77NHXLBgQE413Y4VifKc1qtTdEFDAbKqZtKJcKSqJCFFjQFdB",
  "key1": "U2Cr5McHEL5j8aS9wbr5PQtd4THoBHxVgBXCKxHp7WUX9fPuX4sX7aVXtVWL5BqCTNKo1syeGiPyebyVvNr5a3F",
  "key2": "4f5HsX4WNPhRyVKrFGKmqtuaCttwsGQorBVUJ83ZyURRhVcLzmeozfESZHAnBCQxgQUdNXfgzFD7iZM7rDq3L4yw",
  "key3": "q4i6r8P9dCABeEpnu3kvMLk2vQmDqHDKS8zxfUjF6mMPhCtb8Un8o1YQ6b9rPMetg3bW3HjD5EJFNsjGtaCLP5B",
  "key4": "3G9PVV6vG76fqgpVSsdk2H9zXgPsL5jRNXV1SagMN7mL4x91WNHGFFrZvQJpdjwfkcDdUH6XxfYJXddno4vNPUBe",
  "key5": "2MxsUKLcHyG21t4nr2M84eQXnecsZCAkrcE2jtbCzLuV1wFDXV84MQzwtKjxYZMu4tEHP4tSSzKbyTTKrcPo58zh",
  "key6": "62d45d4Vj6tefX5kq8JRm6TbZPtodSPoqeHrMw1NS7yNrM8GCEKY8JHQi8ZucVH6jsCdBjrdG4RtzVddyQWwwfvf",
  "key7": "W5zojsPGRQWipTADcShiX223hvPR1zL4crtUpaXasatRTzYAhRAR3d4jXvZSeiUY86zBJPjMjbSsbVpj3Y3jUJj",
  "key8": "2peBoqJ3ecirwm7833yMQq1vBq6F1jWBgyVka6CH63PiLkRQEGaKjFyTjrxcGeyZ8dpyFM3idZzPmcXVwnMTMqp1",
  "key9": "4f2DHGBvxqTNKqvHs3TxuxZhFZ8jnm8xHcPShB9h4nrLiuq3GmptMNxDvgLN7uEmAcJTmzUoBzFKtttQ7rkvzRP2",
  "key10": "39kGHy8xbmbUWcHnrs7c3jtzf7ojVijThqsiTgguS8GZ3jhHqwNMLUgUGWP3fXZww7HP8wiAmEaetZWhic8cDoSU",
  "key11": "3VzeBKFvXoBf1qwqUJvtwrtcsUKsHgCWac1ZJti9VN32bGQEzXGm9gRiwcfq2xrrDUnboo6xtsLr5jhmJkSpGJC5",
  "key12": "5YhurPfzUmK5fCs3qo1c8EWQg1i7mkhL5uPPcUQbnHnw1JXhtY5zXFy4TkpeKe62YJo2ecpWo2MKE3vDjScCm4c5",
  "key13": "5DJsjVmTeN8grhkcf6oPvxqfksRi2fjhu14pu88xd2C4rBxzfzwQaK7ztqMKM77JXePaDyDrDNTvLaftUFhjHeyq",
  "key14": "4rie9KzZ3FE5M7M9m8X6oyN8gbpK7sCSgCnJB1SBPqEfezEpBygT1ePCkF1UYbYsotCLsFUgxYTEFPvo2B3856NC",
  "key15": "52BWbhxjbWx61fau719dPhuDXzxFf7tC5jL2Th4rWTrPGnwGN2w8jJ1zHYskP8ovRoH5Z1ezcJg8tN4uYFeQdADr",
  "key16": "tEAASUfHJVDiarBVthc64iLHRfJiEa7ggErRpG8ug4Tk81U5HvwoVN26CvQA8d73xanNoAWLSGLRtTXy6HNKWjB",
  "key17": "2ZEpybrFkvbizMiYgZ1CDqdGqWRZKYFMG3rGHNqwLTqtc1wkUVBjYAqAsmSAinhvMn62vPwYqH5k1vAsLKw6Lm9t",
  "key18": "3KPQ2sAmahJ4VZvn7e9n7ZUPmuHLAHxVEQqEZTmPrTmqzccXY6hQxBecJhBjBXb2SXJjM7LXLXD66j7i7S9gwemL",
  "key19": "9PxxoDkKTfaj6L5exnD9BCreZcgcYnkfX6KysUzLtUXoGzrjNbFQha2Cc9TQURwJuhE6Hj3KPmSiZCWxpP5RyqQ",
  "key20": "5va7L2iJPHQopdBxzBhNcKSAYELMTKr8rpuLVDiSX44c2fsNrsk3VcPtbyRspJV7sDFCDNur9sCex65d1vXb896",
  "key21": "2DJUb61o3xG1u9cnhYXoQSUsLQeeja8LJbHduC2iFPHcZqQn7SZm8oArXoKA9ntNEqs3foR7VCz9NYYBgTe4haxx",
  "key22": "32B3ekmw61mhWu2QhNMnh59nGZPjjcKS12y9SgAPcnnPaT2M4FkSW6xfPB2VNpTd8cHBt3ts9ikUBLHEhnc6GxW4",
  "key23": "4PuT4mG5WEhTn6BHx7t1zu7SHauTWj9qf18JivDUHszoPTzgZ3Xt81gr93bPW93pxEzVZfr5HYZrRyUVD2ukDS1V",
  "key24": "52uyMqcWbdPxGKrvFLApnCG1TrkoT5PVuELK3YSpAcoQE2ytJQKgdbHUPQ7P4VAXBNapsqKmfKdSykNLz8pkVWcL",
  "key25": "pxwy1dGKSKNPPgoS4Z2oAKCHa9MCDgNJ6UoMi5nvtcJLqxt8JtpXtGgQXLd5JKxpjTMCESPFE4h2dSXy11aVJnD",
  "key26": "cC56eQvdmHUeUvaYzgpYhFqD9tMdYfkhyKkiTZXsftoZuaMja1GSPbo6TSSzpgAN5xo1EXSiifyJJXhU36cTqGW",
  "key27": "5kmJjsHxvtwUy5RBTD6Rsyfq1NLuzv3kiKJEtbSZfwCK3BF6vY4bJvkX6hxrmNCLSXLP8H4VwfTQDrtRMXo4Jbz",
  "key28": "4TrRnKRNz1JPqxcEoQYB5HZzwkyzXMCH54Vuvx7DziGomSMFxDrrbDAGHffbym82eGV2fPGrnLSSSvhPe3byru4J",
  "key29": "2Y1JeddKrfcbJzxbvQ9REqiK4rxER48TRar4ZLiiiuPfUDHxm7M7PntpzUws8RXTiWTH2Ja2MEoEkpbczo8zQCge",
  "key30": "4fsVvpnxhkvFGGYxaRs7wM8XZDxsWAh9QtHopgtSb46R3nb8E4VKLFQJeHk8UhxtNkcC84biGQh2JQv7kJAcXEse",
  "key31": "3BFccpb5Zwr4YihPx45zZAYCFyyLXY2ULGU4mRo7ZJvTDJrXYpLvjdLKyCUAnNEipvao1aUwd5EQLuKAMSaZCfFz",
  "key32": "3Uzgdsopxj9EiLLAoRva2HHwmchPds8UQqChPqbnuKMeiavu7cEaJ3Ex3TJ8oddom89EKAaNMgFDYXsBeHibyGeB",
  "key33": "2aYUfwp9SNQAgKy5srSNtsfKa2KXYXhkvertHwNmD2zvXgmKq4iiMuvXKsirwZH7MCNHd5Bja3QhUE1ngi6zeAKu",
  "key34": "31GDuc5E1McYbJ9pp4R6mz3UXCLqdGGa8QGGY8VhgLMXT2YZfRdb3TUKfbSuyN1e8244JCmnCKNSz87rqprbCVkb",
  "key35": "ixJerTNwzs55cMnsYy48uQpBTvNTY2rfti2xGREAjMu2iu9itgVuhUoGTiygx5LAqDohQKSz44ShyR6BYkxXDD2",
  "key36": "2odzU68dVXUn6bgAmVSBTQK5imCTcMgZLAxQkFYz7z8TWcLJ24hgUVNeJMDjLyCbBqiWdyZ1w7nr3ECeFbYUUGpw",
  "key37": "5wf1RBJb49KjERiR992n5FHWxiaVA26Hu74xvwvSnKRCym3pwx6QLKdwzZN5W5v2urZNuHndxD2yKdRxCuG7uURu",
  "key38": "4ynmPQ3bJMqeakVnG7VCdQR8wNZW8AAwHsekxJux7yYyTnmc76v1WKzAeEShARpA6gd3Pn8foY7SaL6peT29w2hV",
  "key39": "UUvRBkU7MJnB2uSJzDBbBv1sdHv5bwk5o2kQCXuhaWdSWnBiy7gzW4Kde14eEo6h4Dm8HN6dBFxuABGpZVSJVjD",
  "key40": "4mDtUc2E9QnFYcDBjiNEkFNStQUPDdt2KhELwSSAzkSA1FnbfwfvxgTbL4m9nLnMM9QvLgr3oe79M2y6D3EY1GhP",
  "key41": "5MMKcEoSnnVbej8Cmgm7Rz7RKnHDRFzNRMhjmHoHRxDkqimC8jwUMtBZaQFoegPmC6ZwX3EpcVJacCHjtfLxBP5o",
  "key42": "cMD3AMXexK2fEf6URjS5AoQ9hiM773HeRfXi2Mkdpc3A1Ef2YugTgmVuWFE81XyE5Hw7FmbgmEMUsgvAdSc2mop",
  "key43": "3ZF4rfgmYsj9MBs86SKaqMa1oL341ZbntyhcWFFZ9Li99vQpuTcRZKJmRsVVCMJnfDEgyfoXT8JEfvwDSMwim9PX",
  "key44": "4nDoxj9b2eUnDRGh4oJwMA6CqUNWtpUzAZDgb7u47wfHUJQhC9CgqEzSFanH5CeEyFSY4RfHZPYGxom7Z47tnjrm",
  "key45": "58DDSsd8T2xD8yZutF2ouhY2FGXpQwpDowAJY7qoCRaJMMGmKJZt54UkPtCpQkQ1GbeiyAQuVJ25ehiAvZ1LfPj6",
  "key46": "omFxFaZGEfbUdAwSjPeZfHA7yiR2EAwXUrZ8oSaD3BWjDMmU3ps35D42RdPwRmzRif7Qrui3TQTCqbqa6kXctSD"
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
