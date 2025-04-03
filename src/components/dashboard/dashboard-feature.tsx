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
    "y6aKr5DYPStH7jfmzEgU3EUHjcHiQGwjSpkJHWJTwe8Zn4pE9wCapiHMFPesQnK3kzhypPUMF3FQsMAq5pVPsVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUKLCS4YyXYhdcchUbXmLEmQb9X7oMzKxMnBAM1rkssAQaSqfiAjPiuZkUkX9GuCnVwp3CDUUDi8XSLBnqWv19b",
  "key1": "362v1cRcwFAhTZ1AfPKHaCLzNn1PMgWuNTM211sCCYexeX21GQsGd3Z1ZJBFRiXoJ6xSF8fHSjaj2G3RZLAnDsJy",
  "key2": "9GZjEX38wtN44q9DPz4B87Q9bC3LTo5ERbb4pEAFNnDgCsawbumLF3LWDVV8rF9KWzGsYB5PdwU3fyBRQjFyuX5",
  "key3": "2CkPLQCYNoMg5HVhWpntyWLNDy48YuT128HpXnsszUrtrdcv8ZEEwkxDi1DSgZC1ARr57ejCnYpazdXNnv9mTXtg",
  "key4": "3Chqbi9EaXzk5E7iMUj9SipGKboGjMqHWoH6mLBxLrdYpkgJvYBbhiQoQ6mFk7Kj6nXgrTCD3MXcVrSWqw2LoNre",
  "key5": "4B3osrW5Nj7JyrHLnDYmZxWnnixLrv2Xio8hQs2e8V4XZvs5fNY9daRUyFoxugCgPTDk82xe1UC2VSSVuHuSAZ1V",
  "key6": "2fNUuJPB8uiDXZ6zfUDkBPpuYDqxaxeEE7xj9jUg3AZUTE1on5NPmC8TPNwNWiM2aPxUA6e8Cno71V6WE9SkjVwg",
  "key7": "65B4ZoUBWKXxKf6W7rAND9dzfhWzqLZDgPTbRXRpmkzYr8okRykR5nmvdy598MNsJJVGkSfNSbgGwrMpn187AUF3",
  "key8": "3UKnhK51bi9ALCZbc8aHKKHSWTZ1J3LZFaHAUqS888gudS5ZSHjZSNEKdr1wLqaRzL3MkDJTEgnHcqGuZvGbK1xu",
  "key9": "3zS1Y5GJdixCDoxX3i8EVp2tjDN6MGYLKvJYWDq7SLgLCNTTSBLYqUCR27ZFKHwvBKSuSppB58v5GcMBsQM1tXyC",
  "key10": "57tjXUYSV4tDkEDKKL8a3Do4wp1mDPzSMNDGJZYFVpytL1V8AxMU1kZ4AnWzmB7X5y6QxcELBKeBgFCEcRmczmzR",
  "key11": "2a9KtZUnVdGLdvYDDnJY47y2CEW3caCcFuRbQn2gTcdpP7A7uqCrf9RPsQigvg12exFouwzMbVWrnm8C8YfKg8xF",
  "key12": "5mktKimXcP5uCeuamXare6K3BGjT2UnePHE9ePeLJtvKFbuzxkCdhEbWdMYHPztnJiyxLfoFfAWYwpMRhgbj7MRY",
  "key13": "2jy6NhpNz6ZZpaRKNZXkQ9otHL1JvDsBeEsnPeejQ6GHvMFNCQXEeCUpiwzcVdj24jajQmLuvLJjNMt2bLxdaSMG",
  "key14": "4SmgzvymcnCMyMKZ9C3zDK9VxZymy7RdjSLLRctqfrby4zYrVMYEfxAaHLWFDYmncatXuv2CdmWUhokNNxUMpFDd",
  "key15": "4uyF4tfKsYuYUbX6SG5BNA7a2yAdxJKmvUjqy7j1cRu3AcoV9Dq2ERJKoP7kcx3QdPiYH4bxWdzpvzzeVuvvUL4R",
  "key16": "edaXwD7VxjUTmnhkYkrTf7KKEU8E32MzUcqi9C3z5GDMD856WgpU2wpqYLiyZA5pb2J41n6RrW85qfCv5nFEeeu",
  "key17": "zbmhQJDTRdYdeHEBZKg2j3Y1ijg7kg23mbTUzPcatxWPjWiCsBPWYnRGovTtSfTb5VpaFCkL1hUnjasZibzNjGD",
  "key18": "3ug1mdxF1RkXdiyootBdY3C6CJTV3jPpA8kF9pH6ccWdNDaCy3SVbjCSwt83SfzS4prsociZTk8P3b9e9tHLLZvr",
  "key19": "58fxv6nqXyNwJKGXwVyL4zNaEH1Wwo1MdvhByVXnshNg2RUmrsJBN2mENsFZKGyAwQe7Rgzx8FKnHWiegCyTK7sx",
  "key20": "4yc8mtrEHb9GrjtcDbG2aL2QAGQ6mKHig4bd7W6zCuwwAJMeu5nhKWQRCJEnZytupTCeE4Y3ShycdFb8nGv2daYz",
  "key21": "5b9cdCz5RCjH7cHH1D58hpUFiz7kguziXtCGb27J7B7X6B6NscCSgZj1yq9LZGRcaQpE48rzBzmuUsSKGesWzUWS",
  "key22": "4uPgM39KKF1pD9muJvfWSt2tQeZQs2Ub4pEwkUtbuhCfZSK4JjcrLfZNxDhMBE9bLGVnKBQRm1RrytxvXFZgpiD9",
  "key23": "3FAgDEJYJmHck5UFcNg8KPrWK6nRsL8MwtR6NWY2QdmeMmkj4x7m9Q3deGicqPRBR5ff7A84eoKpvjSVqmHSRVcd",
  "key24": "Pv4bHttFmvRGSuWZ6nNYseE9gZoZDYJK2XmipPgjhzvGHfZK675yyKBdzXhgE2YANGwBXWK454raQ6KmDwWFXSV",
  "key25": "2jubjVihn82o9NTV7LobjkgvdpUBapcSpiw9bqzFtyavBvq8V2hsrTLgMEHPuSh8M8hFAapZL3zEdamHorMndKs3",
  "key26": "3xiQ18MofcxqnmxQywe1F6gfNTpEfy9ZczsJdyRV3igiCxWG2TcC68VkuN1vBBX9cZk8C4P92sPYchZpEowVB4UE",
  "key27": "2q2c4GNYAnM7YGgnTe6QsQzSkQWrA3KgiHiR7XC545jZvs59UfcCYH3vCrWBvnxHgGgSwk26tx55Q31wGyzZu8b4",
  "key28": "2qCCA8Z6ZSTQzSBgJrahcKrqb7VgMH4sQNxWSS9QwcXki5uKH5TJ4ceBntBhu3T4JUcJuUQtpBw5AHfTfpL2zCYB",
  "key29": "3mD5Mm6FfkWKDv2dAA8EuYp8aGWe9Tg5Dk2Juw8PvWwv2pXmfEx7fjZGFsctXeZ2mdtnoTHUEyPinEPcq9YDig5M",
  "key30": "3EtssGUkdjM639tuHXs4GgRyeYceUap6BgRevYvet2uJ3Xa9fNxPXNNydnrJ7aTVBYW113f7UNXkBoK5k8fxruaG",
  "key31": "2YMuQjMbGZmFKnTsCZ7qm2HvzNm3gNVgfGgzpVEmp9b7XsybE9FMHwhsccXF5WCppXChVU6wJ2PquAa2u9YZCBTw",
  "key32": "5t4CKvxWLjPrf2NbyRpMBcu9BMmYxGxfWbRg4DtjWLbzk57Z8zaYN9GTvtPjGxomxTAamhU3hzvR5epSPnPws3Li",
  "key33": "8q8eqrTLoctYWHnAVSRxqbkY8uKg6vGofhQHDHivgZEJwdomfqWcR1zmjC4gHUy3jbyyfPNqXXFGCd3n7bM8DaJ",
  "key34": "2wXxLo8EHwvpJfksdUXz1UM7pxtvNb6nt1AQEzAmxWG4ocH89KHN4J2oL3tP8c64cKkxawVSmzdMdaqT8L7vk7w6",
  "key35": "3HoKrVZP9eKN2Bi3WkUgAjcSstZs728ovPpE1aStMYxSRPbsPBhKXvx1C36dRJakhC3e1cbE2jDq5G9zD53G4Kfh",
  "key36": "2f7BLvyMkJ6yf8hEdo3tD9YgTk6w2oMV89qedhYttHwMZN6fAr2Xt9eqZ8V1FNcikXHDfLuuPrT5K59AVGA7NFiG",
  "key37": "5qN3cUYxVNtjz538AWChtzoNbXNrTkAHAKoJ9g2b7a8s69jS9tC7xmqsXueUqPTACbA8PQcm25Eg53Whz9qsY9Ea",
  "key38": "4aePdg6yNLYkVWgSp9Vq2Z8QCZwPswbyWxoAtnW5Qs4i3F2fCjfzptR6FY5k11VAkTjngEhJ5SuUfA5TSgf8AudQ",
  "key39": "2u91VwmZRCxmFwPEabubWsL8rq45etDK6mkZdWFYJ6p87tA4L62RKvjivDtEgaYNwiAbvNxWNiDTd7vLMUtFDip7",
  "key40": "3xzK5Kt4nM2bMbTyU7ruCUuPtoUGUq249crf5FQ9wGUrHfd8b6EPyaJM3D8ZDyp3GD9ZCWvHozfBUoYJgWQXmDLH",
  "key41": "66YYhDFLrQoXk61KrXKoJR8wNsx2YvLK9tLU3T26SgWBitD9HXeUrW3XRW1VTeFpmTKhBhWDvjaUGQmssjd4QJEd",
  "key42": "5qUcJvV22QGt6aHCcPiM7sk7JRbbb4mKJqAdvH2RWmM8TkZZUHY9hxpPYN7okdGQpGGdLWZcfrJ2xUgtvPp257Rb",
  "key43": "5c3tdoZWYXW7J79PK6wcFofU7iWDn7e66nNGMwNxCigRMRB4jQmH9qPynQRMZNUTW2usZLHwEPtmxg9USuGbJkq6",
  "key44": "4MhSpJFyneEAiebT9zxJeANxCsbefVQ2RxBVoB3YHyeyRpcdR1yNmx5kKFiHUdkczx5BkGUqhY7QG3PRbLwEdni9",
  "key45": "3dchu1kZtgDAr3MMFR3NTp2UmwA6ZDw3w5RAB4SUSvU8X2UNLMSp3ApZK9awR7mVUFM1akkfEjhUZPadiUTBeRo8",
  "key46": "55m9JeeNj66RdctACsfL9VSXecA1HCGC8jgopTEoL97YJVsmB8iTUe6foGn8JjJ9pacxxgWPuDTPdUWWsGtGXqgG",
  "key47": "CH61znLTcCbLWeitRHYbL8oC59tG6Ys2GNUFiqSkcAstoa3hJSZk5SrWBYdrWwA6phai5KXVuKoqwaQxTpy18Sf",
  "key48": "2R1DHFH2XRHYZve6V3YQXtGYx5xC1AMfzHugcZPHSmpQRn74zi8UbHReqNDjT6qpeEBvbgMP2mKh8tZMxZuSSjFR"
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
