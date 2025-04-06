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
    "4hRWjCMdz4uinvhoYwzUm2s5KhSySVMb1yJWqDd4wTLPV6yn8LygP25iPpESM2JKYtdeY1oiXgWx2eamL4DbgVaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gmDfcDeRPsoJjd5vp5owU6CqtNTKu46yzX2wKAbWpof3B3VoSYQ55H6Waqap64FQR2LBGgqkwS2c9dM1fPSnoPa",
  "key1": "4D1FZq2cWGg35xwXbMH2JxAwg6waFVicPNaokBVt4u4EhwQASGZQwxUoUGqZiQM9EfRUEL1dPvj8MSAqicE92pgy",
  "key2": "mrkLqg2Ex915qQ271Z8KG4grXrRWZR8aQc3tq5rTmyNF7Rg3RnmKRoNsLyHbCiC1Aruxyr6hEy2skw6PN2pTEAQ",
  "key3": "3zZHd7JcgMzooXXnwe6LktzgmnegH9WaQwXMzk1GfDyMy9ihuCDk5VZmbkfhpVFBL6Vn78gVuJvEGCvMzWhwwq6x",
  "key4": "2vrhZ21YkF87JyibHMvBxaSRs3W3YoJNkgk69omynJnQ2wN9h55nopwa36rmjXSMpaeYpttiebqGdzmVfuLt2Db6",
  "key5": "2Ya7pL7A4fQ6ZzrchSoEKqwbPxTagkQdRrnTuLPLR4SqvQDaGaCo9cdhGzMzEqYzpqRLFZUrWpyRuAzQ4xyrfXna",
  "key6": "3ejr8KAXes2zr8RHn1jQZktc35wbLHkakf9duLVmfTm3msMbsAGVx8CKRgd4VQTwzAC2p8cN5H1HDRfUMQe7qk6q",
  "key7": "2eFeA3UVfyiiitEU4BVcz6tNuVwRpptBh44Ak1peEnTa6wT4WMgdYVn1g3kaAuPwtDnp14F3P7hFWoXZbVyyBdSg",
  "key8": "Ewga3baav1b4ZZHJNVPKMgJ8ffudVXqcFaatfbBAs9hZkG4QkJTwLWH4cGnJrZ6bxyWgWgh4VQ6HGoQHTW8PhiP",
  "key9": "J6fMCbZVYrqNoGcuFCgBy3W7ZbyJmnqVFiHwNuma57vvWgjGETS2SJB5SPienZgg36ehiK7k8DSL4ZfKKn65Yns",
  "key10": "4JuJpLLidyhr8uJMdgDYe6f4cngSc8MLRs6SJsQwH6CKmUwbmi2wYpinkuYig4VYvqYreWcdnwCP85Tz4GKTM9hZ",
  "key11": "XJDrZVC5hDmxtDhgwRw1ejBCBpc9QFFAsPEGUix35fzjryrfD5uigXNQhpSA6XS6RKUjDaTzmEmRKMhHEcWcHGi",
  "key12": "2F9ZdT7k1yvunD5A4gpwo3pBJDK2kCM3phFBeuJTu7ZwYvKAnnEaeMAkHN5qA2HmVhbscmHUn92y2ufQhzyV599V",
  "key13": "66B4Cpsmvcp8Usumpv9tPPsw8UgmhQZKCaegSsSf9hYs8h2nhVRs62cNoD9bFynVSPP68mMMu8AVugroGpPknnkx",
  "key14": "2VnXkrUrjtCtszKqSXnjfyHiRid6ZUwdrRzyohDaruABrN6tDRguNN75D82W6zgfxh31RLtjDAHD9L4e5BjTEBks",
  "key15": "EZFZFYenzC78tK5d7wzwxhVRdmBLtruRSuGjZUm2gf1qmi1rUdYoWDAESErr22auLEs3gTAkV4pmXdhMRgyCs4o",
  "key16": "2T6U2UwAL5pvctYqDB5qUC2GtUHfBaRgbSeiG24dJC1L9oHMvZLc2RXRJVhkQrhpcsWCAZjNRbqmBSBnc3QWgxoF",
  "key17": "2QXT84mQvqdWfoGTa9UXtBTkGQmgUPjbhTGcSKU3qjo84QZF8dJWcVfm4PkFdZqdxYn6Gy73CDpK1ytu1EaFKgPj",
  "key18": "5r6yKZ8DQ7SJRU7wkov3Dnr259kwuqq3rLU2DyvPdvy6ESFXcuiH3iGMyVNDswjYqytjSF6e7ukBNG6GsmqeN6g8",
  "key19": "2gKAUKFGaxPAB2W4wsNoXsncW8NPZGHBqhUrF6kVp8jbpaff2LHLi1MnqvY6ZdLGha12FeAuqMTUoX3WaNtkcjRm",
  "key20": "2CB4WutpLfZG36rdgLkHFfJGXMHqhBrqd88MJh7QXHrFQZHtxGCUisz9XatdDH1KUsU2xDe645aFSkEzScQnsGZq",
  "key21": "5oQRvw6K9Sdyu7KgWw9zwBYowPatG4hywh7xSoJpRCLLaXyNyozfj4Q3cFQBtZpogrJRwfAt8WQoXX1Yzd4pTs3K",
  "key22": "31GgStaFHY2GBcwjDgKPu5FTyo1N5CkjK6kUJqKXaAnWwCPTnipk2vQhRC9WRQR1BpAGZE3JHZCijt4h8WPdsWAJ",
  "key23": "2MqQVkW1MC7ZTeupiP343LvtU1TDbwxrfC2NybXdiFwa7HtFz1MSZ3ErRwWPzRTCRcLU3ERA3W6ApB6jutZ4LDEY",
  "key24": "4nnami58dozLXkq2mcJym2xpPrmj6u8Z9feyvM5QxXkQj7ZqFCFRoncf3x41jLE8Xb1uXxMkUEdEEFYPKzVkmERx",
  "key25": "5kyeFFDRVnsvoWgE61ry1Fbc3Ez3sFFFQqBqyBR9iWUjUJVbdrYoxNWcM12PX8yvuGB5HR5DcsyrDtHHMB92QXUg",
  "key26": "4HhA4GeuKqCU9Z2MXa4MiXGFayAXaHv8F8rGLzya6HAmXmSVQ6PC55N6LADi197bPr5BvuMpVSU9QCGrFsbxepRS",
  "key27": "27zGqqJvdFDNvudXnFm4afecjYGneAnpDmANakywL3wYSgrvdxTBVnzMdvaVhc1ZTwdTopJE7HA3tuHcsicxCTBq",
  "key28": "4GjnkyApff99AWXsqsrzqsJ3N1RGbUGGUe9C17zVmFg6SXFtCPBXS1NTQF6PCwZFb8iyGTU4a8Npz9yDTMSw7rZ5",
  "key29": "4cLudQiPrbeuc1SMPZzUCCxA4eA1gnufnXBq1dfP3YpSAgRZCWMT4wDndSjcvmjWjS3tqNRZPfuccH2Mfrmbnx1",
  "key30": "61vyyK5CdGEciq49o8TL7RSy4tddgDaTBMXGTgXEBKNixQqMMgVdc2efi14SZBacjJkGCQQKmDSBwMyVs22xe221",
  "key31": "REC2RVKRYhkeSdt7Qfpfxyb3z4vWudFYkFdVizo9K9qqBYXf7z4apLDCZNCirDSdG18C295YNo4KGejdvMCMNtj",
  "key32": "4rePtGGMP3nhFeXnxDojj9DXksuBAJPotm6iysSENJLnyQTJni1Ue6CQzRnaSv8eY6EamkcbKixaDBvhfVWiw77t",
  "key33": "5DdQApSDwqZnfirzyjZFuz8Kkp75UQZ4BmdWujGvWJW2RLJhP4oyZVojmf7x5khM23HCYSqrxt7mtL7SYjMjmv1J",
  "key34": "4QQH8srZCvGJnSSxn1whCixpxXNNV9SWrwnHpkswqQFMLY7JCSRUxDrFxWqnrYteqq5kJEo3UGu2YeSpX3RczFTV",
  "key35": "3WyCcApVj7WV4ySPSPeWKFRiC8SRaFcFGb64RYv5gVLoyJzi8BCBYmCGJq8C7Vgm3So4Rnx1U5qaUV9W4F5c9CqG",
  "key36": "2cH49QjWxT3zU3rEoddgA49QPnYm1DKfrTsc6DndbWqaJgNyV7BWvdwQvuw7AdtEKVGxyxpvCiyPZWstmpDniCj4",
  "key37": "5Gir4HhxeLSC1AZwRPKRcFmdLCREemNDrGY45PpXk22Ms4eJxcidXxWD7noULg8c9WSnM8QAPtV7rcafjYKTA7FA",
  "key38": "4ATKdZAD63RkXfgDWprbSF81vdSuSsoFYcYhLdVomvHMV5EBhjfo8JTn1z1HHDQrHwGgRXjsa9gNNJm6aHKDzuno",
  "key39": "3gEhzGBrrHcsULo9GZtpwXfC5zzdpeZKGqpjVksk8mhe6BjV54NbG8wbGzix8SE1LzP4HuwCRmznRqmD8VKAubnA",
  "key40": "5CWoQ6CikpTwDaj1kHpMFBbkTjV7HHKkKV7oWFa5FRyYRvvQQUd4BiANzHjb1Mxduc1XpPZSGT2zHzTSXXpp48Sa",
  "key41": "2ixbEvueTTeyyVxazHhKDw7EXV5njoMhVXjZLTiQv4Y1NUMCugnmnctNbAewqzEPjpUAER1cVwBGNJKZk63rrQrh",
  "key42": "2TYm4ok1C6kVfwXxHuKyGj7m5dqHkCEJK1LREEDN7exzWtuz8RyzdSr5sCUJSw7ipqSULwHWuBYhPLzpDREmyjQx",
  "key43": "3eRB5zK3AcynxJQt1MUjgStK8mArBNppUB45mHAvNj99NtGUNaVGySFMgLHEcnCCF7YSW8vaZjBNzLjDXwq2bfzz",
  "key44": "3gLVgRTQrisRc4ThTSnHfBNPMemFdmeB6TBvauJJfNzpvfacahxBCFZ8ZDyW7XZk6TcCnzVqBHhpe3rGt6zBQodw",
  "key45": "5e66MKPKTvx7yGgpSbWB3CfQYsVwPXqN9h84RuLnCcbHb3JbMxyrbAfbfjL153AcAqnVYm8Ym8uuo1tTLtNmF5yY"
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
