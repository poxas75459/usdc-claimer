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
    "3fCTWA3s9tqADFzyXgUL9p5TsfstcwbzzRsFD7r33PbpXkzhoDTmjxh3Ru2nq9cq6zgCtgbkdeBa1RTAdg1zrAcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evtBT9xCSPNAozZB8Uc8wkLzhZWey7TLK6MYs6tVEQd1wQbmn1FCb3Ak8Vjq8BYC5swXZLEXZZKExGtWrLZBhLe",
  "key1": "L7THUyqvvi4TmxwBLvPsSm2pa8DLuVdwdJCKhVtwn93cr7Dq6QiRWXywhfsgiGT7jq5BmZS8KjQG8RZvd31XJPz",
  "key2": "5uGa7PgxFLwEhmNjcLvXbHwBpqo1NewTgZjPnCAaAs1rqNpJmNgRNzAXmbZEd1ZBCZTJL5y9h8fQxgxXFh5JBro1",
  "key3": "3VgWwiyoNKjiTfNt1bx7EezFAhRKPh5FcXMgsV9FPRz9h3rmdgkNeDA1NLqEPQjAXa62Yn9tj3pAwSUftiMyjarM",
  "key4": "2kyx7sCRv7acfBpoQTwAS6VCs3DbDMc6xNsmoC19WcdJw8GeZCdQB6351uAg1DXD5Ave4Y5o9LKPdZZWaLnUVvXv",
  "key5": "44XhrsopCqDuXGCN8eM89PQ5vBdCzHwWCUb2wtspjCEQ6R9A3V1PFGNuDH4s2vDywBBq33iJoPPypTnsWYcxzuL3",
  "key6": "5EuvZBokhsgByxJe1a2iBqThcAzmk6Z8U5ZefpWnRWFkXyaH3E5xPFDrKA4aGwfQHr4wpworUm3NvtPBGZzbVKGP",
  "key7": "5pbVohEBTyfhpWshTQmNgqzAddJZX4c38EUqYJteANVSHXPE4Z61sVibVP6hPudCcxiWjD5wzpUGZdgtcHjgZfUE",
  "key8": "2zisQYNUJMHrErRPwYh5UmpKKpXvAn7YzPZRsTWW22JtGEBc6u1eeZhXQCR1UvxbSTAfVXBMoSEfTuPUn3QCsT3v",
  "key9": "4Tg6zvaUBgPKN9r1psRW39J1fmHXpL22MyJSs2MZpWHvEYfeKwGBgYH7g6ADg9RynNWjGcBqV93v9CE6WPLhzSMt",
  "key10": "2TrCL1tLNm87jkngnZ3jArXksuDKCB1rrRLCXUVLw1ZRACkJWctmVRTmw2bG8gFKof2t19ffByRNXZ7EK5zLSUfW",
  "key11": "5a9LwNGRv2M7gXd1eBVuec8FWw5wjh7Q6jyn7cTHTLkBASG7HJ8bkXcsLNTbHDcTxqut66ATqYW1vH7C2s6wVTgc",
  "key12": "XZrbwZ7NMEPUKpf98xNLHt2fbTtw9Y7QJLDCrjLwZCjY5L9VnH6axFEBVESDmyKF2oCftpRJiRtz5yegjG9Cvig",
  "key13": "24hj6Z5YmXhfgpRp2mdhH41KSdSRpQE8fEkkymCY2sRXeWXNCTT4ZHzmhxfVZCQjfNtuxR6kNd2C9iR4V47Xdum7",
  "key14": "2kMmP1JSu5Bu38hicFeLL8EHVM6XUSnERXE9ZaisL1joDdkpyucsSzg84Ag9KdbH2aHwr1obyN3UPrz6yEgFapHb",
  "key15": "3ZFL3F6LNnfPCyhxnHpPnG6hi7urSjimk9BNRYEeB3EM58cTswF4WesZsJHddgVr7jVhJw37GWToPJKPecNsarya",
  "key16": "4a5yErEenxyYWdus93Awi8L6Q63ty7ekWSArn98qQWvqES6QM1Cgzq84JYQtkBYs5BVZ7kmkaPDMb4bKerN7mANZ",
  "key17": "VsAq8nQziiM4WbduzpuZbcL5KVnsN6i7CziN8pCyFoqEbrnub3Rr6XwBT8nZu8gakeGCsqeDKpYM9HQSk2Gz3JV",
  "key18": "5bKr1fLBxipE4hyV1dWM51w4YMPEW2ZpN7SRQiqQP9epcpGjd7Qu7cRNurNU1JN1xFp6rumySvBXPQVpnsKqseqD",
  "key19": "4kycrxwwxNn2GBAeF3BTz6yBGvfxoNBeyBzKAoJwE3kPqTDzZ3rFCrD4VwLWJgxXhX3X4v1WrQAkSjAAnwG2KFTD",
  "key20": "Bu634Vv5wJKq7oHC1TqT8eHrQsbrXAEXv1ziTn24rWghoCWueMysBfg4WFDwFyxLtbdQ6ts9f7VwyacmqkdAPaH",
  "key21": "2Mo4ARWUBFUx8tXwwmGA8REWdfKLYAACb2xpEHGuVewoMKkT3bigyBdNPRoenHJbcsurQk9rLwGbKyL1N4MQfRwv",
  "key22": "2iGZGfaXV8jxL5VSgdpoxnL9Yn66o8T4G5RXgBNQU71MA3pre9jYypPAre8LRGUrszX61NBJ7nKWcfLeikW12Hx7",
  "key23": "FQWrmycpAUF6BMwH9kRby6LWhroCRQupQeS5YEqnjzygt4xk37FytFeKv2dk6GWL9uvK6xxMYgpwfKPb4LCd593",
  "key24": "3gXyMuzXPugkmAjpVAf9HB9tiGLhDRTSQRYwLMGTFg3qRizjXWRfTqRtseCvhSxcZEUCa4GxLS8t958X7CSFhxN2",
  "key25": "4qUuDWvguQynFPxBcXWruqEW3c5JEW1Q21VFnh8wvGRJTpun2L1e8gwNxqy9pBAw3V8F23SsLXwBCowJxv2pfZ7r",
  "key26": "49UGCC1BGX6qT67AF5mRCKw75q3wkmPfxYshvSWeTiWajRKjH98McMGcduZGqgGfLrfZ8mBtznd3gxkjch7hbHMG",
  "key27": "4JzCVrv5ABgfY7MHUc8ASsXSaT7e6eoeEDMwaUJEx7fBt7zJD98XeQTrmXY4EZioFmXSKJ77gdgKy2CSFS5JLfPp",
  "key28": "46yw867ByrzLaSaFFrW3c3zq3RXES86pz3micAL7TYpaECJr9qT5wzCZuiCmiY5CByvRuUTLnomwn3SgSkZJjuJa",
  "key29": "266Q1hj2r1zkaEv2Voo24zuCkKKSZtR7RobwCPeUNbLmbBrzyHe3mEQ1hy2ry3ZzZvVcPB45KekXtSiREbKmihMb",
  "key30": "3SjKUbSZceHCxLJzo1SCo9qoiExyQhtC3MzkW6qiCyA2Pfow2wiDonx1MkCLXDib9uo4o733Pd5ffT6EK7QS5Mhf",
  "key31": "3xnXU8nump9z74ikmQ5mVbfrA3oqNxGCsFYCQPZdVrhF7xkW9eNKviBxyDyM6UYfbAfbSSTyMZNysz5pCHeVn9ej",
  "key32": "2Q3PLmK5rhGEiEup1pbsbaTFtobiybQ5jRBF88JDYy2TXUXNJZwTppc7Jz9ZfCfgCGwCsBwTyTjJ8e3Ct9dNbdGQ",
  "key33": "3BVyfrreTR6DYCkrnam1LSpLzPsk1R5JRiEZoJGuKzoQe31yLJUDn3EtW922DjYBdxXnTqb1Tvrf941sPgPTx7qR",
  "key34": "xhogyNC7Nd6h6wXF58g42VpLo2up8XUDYiMViqLs1piNKWSvepHZswttAL8N8M3bdVNmexcw6YxpSjNjYHVDDeH",
  "key35": "5MKCh17YKNVAxDaV4Eyy24KMJnLJKUovvNE3MHbKkQY7UXhUDbDncTCSiJhVErsfQZ1KYHeDM6MAhHWetpHn2z4D",
  "key36": "uT89G3mSdNFZSjP8rvTjLXCnREHL6AGKGQhyRmD4RaAsY9rMWDHfqnB7Fe8W88hHzwFczE4VUExHo1HG9bzSrXm",
  "key37": "4EBN7SasnYH3gLwBAFnbz2YEUFCpA95ZsN2uEy4qz3WDDnbbC3NPGG2VCXLCPzL9kAdBJGBfPTuwEoZmonuQGSep",
  "key38": "2kbVfoqMs6w92RQVGhgBFGxQVsp3q5fpLoZm7UWGtcGRSvcCq8fb83vdyKNH5qQXUCJVfAahsKB9j3cWFWuRjkCu",
  "key39": "28fbpLSEKLSpy6cKcLpuBuLARCGqVMgbk5w9ZndipwGdPNen7ArWsNCzFgGaDvCL1t8uGGomRCMtSnptMyBZKFNU",
  "key40": "4SXNPq4Sog8yQtooiPxbFoWDUuRA7JK7JWttu3QZFYYmSPTq3YAbFzWhGcEEJ8FhR4EXUfBQgbpWBhRkrMem2Az8",
  "key41": "JSHzzGjSb7cn94fooWkZhiKXL3CfWj5QpXbtB3RSAc8oZvaHTWbQkAjz12CXRMD2gUoJUvfc71cpkUVLjUvmFTE",
  "key42": "5hrRfE3dJWUR4Q15fypyDwNUnDHKexarXoz4pmAN6vigoLNL2qxdyFFHQzsGPcbUMefWJktbjfM4GezsP1jmcq67",
  "key43": "49obY9nsrPpbofvPpo9bTQxJvLacho4GnmNJpZR3qPNCQrF6t5gqpFqUCCv7MoiRAjAFicyfm5fH15ou4iu4dU73",
  "key44": "4H81szLrgVa2AHfxEpz9YVsCk77v8MH9YZDFRQagx1TbSyBpvkaDGe9Cma1nRphMQeQJmBcKPoAEFxvuqDEi5KRd",
  "key45": "5EznhZiAxs5kvQkVM37nMh1pCQhEKMwYXWGx7jDJmzomaekN5wAyyzoWocGS3hweKcjmKcTX5WbgDH3aXYAxWLJM"
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
