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
    "4gT1MUu6ZrRHm6FEQD42NhLKVs8suxTdvQq6bHBsRsPRJjAYuVNiXGzgDUqwrYLtY8dvC7vXzeSmTGL5xcr1wvFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rbG8QGp6FWWaCgsDeN4TRHq5tih5YuC3NthL4ifwLSx3CKfLPSS9PPjZfCrWgRgfSnMVkXYERuNREmbheAEfq3f",
  "key1": "nojjz3thxUcECLrXygTueYBxNYjXUcWJUBh4KNNYcsKxEiyDoaavpJiBBgXgZySKFoF3uj1aLwmcR6WujKJ9r3n",
  "key2": "2WyL5kzC9jSpL8gMDACZjnqpGBhsGrFrhvKAjfTADgQ6mVxbQFbg66VnTFdFsS7tRjFAuZx31oh7qoDm9cZQs7BE",
  "key3": "2wm2kcyTv2yU35YGJd5RQEQb3uDNSnbBLnsbxCUArQBvcCDBn3gkv5G3o5gSgGXazwQJhgib3ckexZP4zQzuPgNQ",
  "key4": "5fWkKaHfyWDqjayASTuWyCD7W5CxbhvkMrug15YWwzGyykkEdfEYka6c39DftCTry8qJin1C1hpH2jp3uKH5tYRx",
  "key5": "5xmCRNm9szmWmVyfhNZjtdjvJ4MkFaZwZDEEWvuaPMzjJMvoQ2v4nRVDwm2jJgqbeByiwau8dGKGJoW5h97PjHeJ",
  "key6": "3W4Jik8Jn6MgDYdFo73FPQ7rtHRb62kDVLCAetWCnfuCGgTct22sMZtmtZb72heHFhzDrzJpXRiBkCzoVwNLdMdH",
  "key7": "MeNP5Qvan9bMTDTR2S59XU9YEFzb1AV2pYm1JU7oAeMB3zLzUYPRiUsUHGykN6AYm2ESSCqf4gjTjva31c4Gk76",
  "key8": "3zLpt859M2zxiMHs67YYeBJSHExYcjsh9Az2WwpAUnEXq9ixUMGu3tX7Sqa8Gvj83LjmfgRyk5RL5L4TnH7nXYnP",
  "key9": "3PZgPKhggV9sHKmeCyDD1UCXpg3vEd8tRhCXzpFwX5FouXdDJaqLWK7LE7BmQTMjBufgaBiTDJT3T8QXTU3mYSEx",
  "key10": "3tqPMo9ugjLTv63tyCYvX3qW1sMi4R1wHRi4iwtCbHg7yJ7AVGrKyTsJw7MpqhLrMaHWB1LYpheJBMgx9MCtnViE",
  "key11": "5HUKWdxvW9vE5thPCmqKVGYamux23xVwneyUkkjNJjcsagX22toygBVMJmpUu7ze4HEBnhFSV7eBtkgxmSyg7FvC",
  "key12": "3iZQyeXd1gjse67LvhNwekWN2xAdWS217MXWHffg4Rt3uLGxrdWR71eaXJ1C1RDbD7Q5sceZ8Wze5F69RJymGY5u",
  "key13": "346xPt8goNLDKAbLPwmx3ZDnb34cX63nf3T4mHu97ZTPytn8DRtCQKr9vM5JSPSMYk6kfBocZM2Ws3b8oYPtDSKV",
  "key14": "5N8oG2xjfWDdRtXf9Dejh49DNLFoxTGSX4PPMLMih2K39sBkc4XFmD8FU3whBAqwdAaKU64rtuLVsDgsrDFf9R3Z",
  "key15": "53tKWbryEDFHVPJBTcYqr3jXyicGBp9Se7PXn4RXGFTmy54cgo5AyZ2Lru5TPpT1eVVFuUzXRhr7gCMq4FrCbLa3",
  "key16": "3LwYbNf2ybe9paPVwVLrYmH4ADPNQVPCwL7pNDjhp2JQwKiTKvckTLHoPmnxz3R3FvP4B5fo69LhHzLrpSza4fHg",
  "key17": "27ag6RK1HoQPJiHoKJ36QaAdqjsonAH542eygFH9YunNjKeZEsjg6g5NUNDPJ8pksYZTgaVR8e1WAzysfeSsKU92",
  "key18": "2KMdTCvgUrrFmNskTNcRXAJgXfmhRUMzjhwVTQNCqWci1RiCx4D2mi1rdfd73HamN2tG8xrA9sYfDgbSdip9Lsmj",
  "key19": "25fDTE95iq6BfVTqMCaVMNRtCoZKAssMqK5xzrtYYe2kyJGtqLnmwKr6vZBHrn2LQpCmFirmm5fYzh6zq5x46Lep",
  "key20": "4DbZDXYDMYMumaSNXd9eymtGAaPhsbXrwYJxCwsRXQsBUswbrg6zaz6ow1PXn8R8JojKZou6gGVSwY8y95wb5HX5",
  "key21": "27tj3Wrs761BFdcapzDJtzJvYW9ggoXMgAqnHpRqVBwFiZKTAUxdb1qanW4bKBsss7h1N2dk1J8RL7eGSVatVxyG",
  "key22": "2wqRmSQ29c3jZcZHp8r1UaHyrjmwcvdhgKjA3MMibcXEPf6QvoriQJXibJMRJCgrzaGBya4dzWae6NX4bq1fq1ye",
  "key23": "4A8sAS9xDXP4SRocqPawp7fijHT6Wzd2bsuA42BbZNJ5FtcEyruwKEAnk2PctPoPxrVcPxC82EyEcBvnkGUGiFt5",
  "key24": "5u1i98gbTwCvth7oEf4pK6wcpQykYVnKRjuUTrPAh4i94h2q3EbNvuz79QSJMJrDDzCjXx1BWy349aRHvhm1wtdc",
  "key25": "39gRhrNNupKbQwvuVEYhQkNbU73TcdZBZ2YEBicGw9N4KEF9nUMBoWvh7YQbPZ2s47Ti7N7yMRUL32vrqzAFuqCQ",
  "key26": "oEkDk7XtznoT11Y5BgS6PSvFhGcXquBKectdxyRipZR6o5ACp4jNLhcpb4MvKHtsbQ6NSu8bRAvet5PGpbJ7mzY",
  "key27": "edECPmJgUFEQhNbPwtfWfcVjytPVpS45BTKM4YLKqxpiMtkthkTPje6GYfkVGB9HBbj1fX79DV8qEFFsgqXTWR1",
  "key28": "588zYLcP5Zd46FFw5Tc4mKgjgc49R4jBYJ6AmcTVSrt4Lza6s9Z2MeL1E8CfaHmsMdUsNDTBiyrtjBKMXKRfCszr",
  "key29": "vfPBdtFwR14WARSJ1wgdHYghJUvxWb1ybjaovESgtP8mAbzDfe56gKXGQzEpGCkUUfwVZc5uScmGTEjpuB83rqZ",
  "key30": "2VgsZgAdXsjDYy2AHbfkGyF2qW6Ns7pc6e8ua832FtJ4rFQMKLTc9yv81mNtQyrjYUep4QTxHm6D56NSG7DeRGTb",
  "key31": "47SJpAXhazF5j61nF4N91ZL9nZh2LoNafFrYjdgfCwdjqL25VhmP6tHLruzSTLdUyGuW8xGsUSF1ME5kqASHWCXm",
  "key32": "5xsdYwtB5ywR8Gnmx3fFbMK41w1LeBS7Dnpypg6SRXDqNn8NnYRW8HYoQ8R65DpMGV7vjSnyGF1CcE2CYPpai3yB",
  "key33": "zkEYjrHnfM5JqS9vLhZFZfW5ztVY57VDzLAwkcGjYQymZ8yhecwkxGidefckbLrAzec4pU318CVu8gvCxfYHY1U",
  "key34": "j8pVQL4xRZ9Ssv36p63PFkFdTu8mTUNN5gDGbuzRTpojaMCsnRECByePvbWCMWX4KynuUtk7gEyzjHXfE7xqLWY",
  "key35": "4KRAesZVW3ATjzBQMe5u9iSDb4J2Xzwcnx9viKMn2yUA3uPNEBoiZ62WUowCAPnMpNPds971pLDvq3QV6VmR6QRv",
  "key36": "UtArJGUAforWEX4gbk2ejXy7htZytKpdWZdZzBX1taPhyKwQYNYkF9CKtECUL8DyP86GHhbbGqpwyPG8eS78wvt",
  "key37": "4jHSn1PPBYkhF5YZkCV6SpUhCRtLa2f4wA7iHwPPh6Fc7Ww4VFnopoTJhdzr12cyfe2sxZVwTvu78qnuyc1Nc8pB",
  "key38": "65amk62A1xSCSpPom4RJ7zGDsTa62FDJrVXuPi596RbWchLxw7YYBR6VzZThb5Hpwc87ZrRjHvNLFCafHPUubg6T",
  "key39": "55HPqkxDfLZPEvjijN6C797fxtYVVj1vCWS1Yed9nVoSn7CV6s7Zu9aiXiroMYxuNj6c8kwWC7Mw9LpUANHCZ1Ah",
  "key40": "2upSunJKxuGvA7prHvim1Kj36qHDZog12pzrc1Chzs6zbLFfENn7ndPitR27rxvDSzu4PuYBHrTRf8g92WU5h56R",
  "key41": "6THQjuyAYJUXqCXXNsssaRjHeaTX5CdMKRSqqb7ncHFvgvJSGuYBKcwt7DKPGvbCYCEHLDkhjFVxYy9XB3BCPTS",
  "key42": "4BopnfuX1MQ4u5nWgCpoMksdn26djqrDm6PCe3n8HdFpdwX7cd1ycWQM3GBXaQxkbJvu3mYgqrRXdJsVNLe6Dhjs",
  "key43": "21EjuwKzQSbUPiq3wGzDg2kLvyxnwq25AGaruw2ixr2K2cwHxqh6iG8JPceKKgmWXmF4ePNLWXTGP12w5xs4iCQH",
  "key44": "3cAqUhNZtESqffsSSUX7Wp6LEouQAMMsxricPC99KjwBnXUNUXP62PLyScL2v4zjG58PMvxFejgp6X5GLQ3x4MSR",
  "key45": "5A3v719z6RguENRnB9b7MeqigqD26i8U8WJQkfzk82fyx7oGgNrrtPvR1gftaZ5hAX64eXcdPGPPaixEUgACQJiN",
  "key46": "33FsEc3symNuDcSdi6BWdP1H4ks53G1zmGPeGAs4RS9VYLv9xmnxkpEipdp9JnCoaUKeMLTnkiVnw3ZopR8hm5Hb"
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
