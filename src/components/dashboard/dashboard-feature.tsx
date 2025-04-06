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
    "5F4za5sZWgxmpPBqUmSGFcxwVsmZ8mJAxiF3WpFPwRbnxcWDm6iLDUQESELW8vMJtgJkLozSYKeLTxNf2JroGmFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "234DSwLmuMjwAG3YAZwMFCAthgJKKKhvcs6dtBJWP1xiXKYdekY9bpS4XAT9jyXpkdMHkZ33a4m4kweuHBEVUEJE",
  "key1": "3hUB621Gft3eyGJV79P1PwHNk59XJUs4vUCfiWLe7jXe28xS3CpELVpzFSufUwc2VuauLjD7NRiPmPmvGfXBMoHk",
  "key2": "3K9QngZqVjE5yhyHpKCZjW4VjtHMYSDCiTvwxX5mbQ3xEXzwLiEiNxgZuCSS6JbmEC5VmkQcS4L7B9VNz2nqfxXY",
  "key3": "5ynK76ci2yzUuUT5XrZvuKPT2jEbpiapLnSHosV3qfpdztbVUsVrSb7vhHKz67GmjiSigrgkVaAsKQKsvAr5F7VM",
  "key4": "4PayD7YCkS3Bm81CQQP3iUmspQibRwVyMv8gvNXwUtnbmTMdofkGUhUXF5SabtcReu6eoW5STXW6FXoUg6vCXx2o",
  "key5": "3XBnDttgEn3NRcou4mT8BBSJ8CTN5mJTKkQfNYCsBRVmhx1ZJCWnTHsz33PfFnuZqqN8uMAcABMoCd4VU3BJ6MYk",
  "key6": "2pQLf5iNLt3wR2vf4VPuksLk7efRomnNi94oxz14KAH6P45CwVKFcQX5YmMeAwvzFHeSF4ipp5j9RuMxzzRtqKen",
  "key7": "2HrR2hYCzscFrLVrrAzJxLHBBFrLVgeKkYwcVBPTvz73rWJSYQt551CnVQxL8dcSUAAYjZ3kW3q75AgMVHYAiyGp",
  "key8": "2a6TyFMGGJQJGw8QULbnV7ELgsnevWnAozqBENhPNh2zU1fUaSNVwtDTDqgdTp9zVxFC7LDWj5keGFFDaXwymb4f",
  "key9": "4xEsKLJbUs99veNgGWYb8hCRpnreog2iy6EMRJBai36sZMwsS1cJhYyKiU9c136ZdN1BjMX1ZDPiuaD65yh1RKk9",
  "key10": "55Kch7cdxWzjzQgrNLVh9FUW6dXekMbATeDA82KfH6Lv5nZrcd6DpLTbgXQt65ziWDAma6htHeHL1K6uPD2tciW8",
  "key11": "5Que3VUj9Cu9i96QNmm7R6nSJenhtTHjGQyV9Efqx8EJXJ9FDa8yxRFAwwSybMiYoX9qpipNgua3hZLwVmH6S29z",
  "key12": "3ECMQNvSVTe6gNaECZEtJBumjjbzVVMMpLBzDKkt9uFPcNgmkqbp78H6QE6qYnnD5E6qRxYPzJcTGezdHozjsa6A",
  "key13": "5gXJjW9HNytu5Y3PibzUimEipebJtTEdKZEeefqafrmhPBhYFSW8YMpBDBNtoniQyN7fvz64FvngtaJmjFEw3vd5",
  "key14": "4wDN4S19mDc3LYZS9UUe8fRG2vHyCHrVJVq9kyuHb6YehMakPNJc9iQwSVzuL2m1TrpgARPzZSjDiRZaTC1eHpAD",
  "key15": "3HD7gabidL2BGRnTbvjBfMVUGHaPzbkd88WW7GCygZrYNKvACZ6CDRPJBZhKu61rgokJVnpY55bWct3yX45BG5Rx",
  "key16": "4daAtHPTGHmC99Mb47D1hiex8gafoPD7kmJ86XRPP12hHupJJUT5s1QeNpYvgcm8PqEPsoa2FvBBHuLQ5utNB8K9",
  "key17": "5H8aKFuFuTGwaQhXejaA2FHpDcKhX8fTioKcBaLaGbvVABnd8kK8xkfQE6JoML9DzwLLXMoYTXsVgtoLKDrtq56c",
  "key18": "5n5i6zzTyyXMD9x65dh3nw1f91pWMRUJJQQQFYsbTNJYMDX6u2NiafATa5V5QDcQNDjN1FUyNixeiC2mQfojvHjL",
  "key19": "U2wr9ug5Bttz1mdjRUAssGQDEDTCrMv11yNNHSXZ99MD4EGCD3SMJ8PfdFZQYa29MvapDGEyvSD9EmhvwV5LWeU",
  "key20": "48CgxpU93gQyTW5i3fu3QhRPEai4tqnHGKgcX4ysgnMA7PNqhtY2WVqbJVqHarQjHSoGJVBRZQ7ZRTQf59ssPeNT",
  "key21": "4KyJxJVdmBodtG7EHzAnom45wXBUx3Ykf3hSgi6RR9o7WuWR4m7LCPrERGghMsAfWzgVjHUajpnc6DQRChHxKrJe",
  "key22": "4N7q5hspWroQmaqNVv7HQTKRfuFRFehCwuzecTmnw1tpG81NtrR1begWSkyEBGKtn6G9ZbcM1z8HsQoYmYnVXAUY",
  "key23": "2gLjMpUVfQxY5C45BmX2Q41bgEzoW5NJ22trXGTZisrKhy4prkVV1rREvqTGHy3U1rsyry1yQ7T94Q4VRxz1nnJQ",
  "key24": "5j4SxhHw3Miw7JoBED2drbJyCjEbjR4obogY4CYLCSvZ63GrAKeY8YLKo8GFej5ehpAqXhxayndqPiBT7QkgfUn6",
  "key25": "2KYrQgfDko5ZRCCsMY3nTuYzAedpYCFdY8ht7deUmo2KJSnWTN7dmFmfANGDW8ABpB4bkEvnjsfkG1suQrgDwHiB",
  "key26": "4Mx2zbtMRUB8wJuPyQcMbjiLpGXodFaATfjHSG5FfbgAJmXwEasoGf6heMA1q9vNqYCM1zNgoZK9WqvkB7CjtBcc",
  "key27": "4A6Nd6iyiiuFxyLPTYTzVZKj1q1hpncdgwwB1yMgy1f6yKSj4XUsrT5iAmUaWFn5QgpAarV1sRXtcebPfpusXWa3",
  "key28": "26EtoM9g2AYpqj8v2dDQ2Sa448NgNNUtbbgvLdq7EmaDjJ5gHfucRUrHJWZn5AZLjjSUZKuyi8G84DVZuFnmDVqv",
  "key29": "5DSdWX7BnG5Uvqn6NSTbdjeAmFk92KeTsr5U4oTpHK2Ppiv44SqN8eYRZw3NBq4LNoCmJvFcUSoBH1jswEbCeukp",
  "key30": "uHCf4SaLRB6qrMURG8hwKvYf7quE6RtgzSVTumHekM717SbobRmQWRwCUzSnQbutWm7as6DuawHfBcCHLDdRiu6",
  "key31": "52TDgo7sHhEPC9JinQwoQ9Fk8SxZC9ToLwYhcFR39eSwB3fEKX4fZQqzat7hnq39i7VpCQwhGn31yvLsAMPDfKeM",
  "key32": "5AG1mum9QEuXYWCTKYWzqWCbiz66KjzgyakkJ69TSLKHhM3UFhbKLjybeFPuJexP6xptUTk9pQ5U2Rb1YWYNWoUx",
  "key33": "WssYQdm45jPtGafHjAWPpDiVQ3hsxpTCsPAmnXiHHfhp62HfTwfFaAFZpq4FJ8ZjiXMELBHJXRDAWtWaaufkB8A",
  "key34": "282FyrGxRC2HRLGCtQQtimVTVqJmqJX5dSz4dMMzh2aYbcAJn43rZn1iATGv4FCmigVCx2VSUBNy9LtU9D1ighYu",
  "key35": "2Lw7fyuNGfFavPKAhkw23aMYZ9RQnc8CbXMUqcxLEqdPbwEnrrLS1vtZg2PJ9Smomx17C6fXBdJSMnpD1YBuFCxu",
  "key36": "3ePaZz3Em35A186frZqpAjLqmN9jT2gPb28WkzDgLwgwiYggtEdaCC4QM2bZGCY1K6Kwq3xTfYDDTUpYiJBVkaP",
  "key37": "2rvfs4AyVrKNeJY6HEP3fXTqHCKFdUNqrspeG8pgKqjdom5zquKSTuqiKoCtGE5TQ162aLKDEVdyHJoFoBctjrWv",
  "key38": "3icDX7anJuxmsUMiCFhQSBqKMbSsw4zhHj5HJnZskPF12VqWTya68ouaHMKBAQ39JMkgR3DBiurgSPQ2BCrjDcHq",
  "key39": "5J5J6e4opmGbZ6NhxaaeobhSUfL57LMGSwJqzk6wk3kWRPt7V8dU4YQdX8FBmQBvK5HKDBJ3b6JDAKz41ZKQMDgB",
  "key40": "4mZ4scJtNzoh9BmVS8qZQMGLBdRvnftsC5KxezF1tsbchv9dGKFWmSGogypGzWhqjKGgCfnAnx3By5wTgCiFr4Gf",
  "key41": "3Uo2vfCt394KuUDcuCK1JaAnNqtN2KANMHkTknvuyvMQuuxrE7uw4iGuTRzBGn54b9nmEmXXyYnRPBPe56dEEXaj",
  "key42": "PQtd5FMxtpemtHm4Xfjb81nrNq4zygJpugRx6CRoirvBvZpBLwGK759dnkK1GeGmzKdZ6p3hVPzAWHzkJbiVAu8"
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
