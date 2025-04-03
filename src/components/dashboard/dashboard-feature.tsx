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
    "4tLTHuWaqyPY62tunTCM8MQoVZBV9rreqaJ7975EsfVJFQTdLKxesXkx2ymsstuLYsKNbzsXvCLyJHx784LqNPYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGV45LVX6DJUWGXivyGXyfSmgcTJrh7hQHGaFrmnCXUxyjEQTobsX8GoQeMEYprt4PbQrrk4SdPaPAwZyhXw9eF",
  "key1": "5w6fUYB89sYGFLTPx31Y8gTXLAf483X76v3SVu5VLFfuTrp74bhN9Hsgn8cXbLNh8kn78Htzj2cKuaW6wETQ5mF1",
  "key2": "4mzYsytyptA9EKwiob8Pyhwtr8TsCKA5taKyPZC6G7hGWJwtmLRfL1QKyxP7KC54PKhj6TheXvG2US7bnMKcjEcJ",
  "key3": "3u9Mi4jgdMAUpEoEeSZ94Q4szBEWNtc5EoEVCxc7rpuxUnu3qsGxiMjJBPQACiPBmSZLQgWUx2KChoTkzhrQz9dF",
  "key4": "3pptGPxvosoDBpXQXWigzqad3E5AJfcJ4zY2rHhEzFWMfDrcM1c2Dn4FnwS8DieStCJv6N9QvFo5rZvPextpsVTy",
  "key5": "3P4eEWMEzYimgy6TdqtvZXKbX1Lj6iSwq2ZVZrZnAYtQeEwoPc7UrwTm7cgoRKqiHwTa3m38j386PgUSKQR6gscr",
  "key6": "2nMV236MCKXY8nATdKwaShpLDGxnuCgXBr3L6BPuuea5oAccWxSJdP7rD9Bkm3bUwtbbkFhYPw5DRNEJbqtBUv9r",
  "key7": "5yLs1DyP73HPuDeZgXBLNSAwsjFK4786fVY6fmjN7bbNBMU1sqnGqhYvSY1QKAYQAfnFyHntjXcW3CHcLvqYqFzq",
  "key8": "5HMzBWc8B82VPXG7LpHxRJVk6ayLaVRkMj6wwrUZYBj3HcQns1w8MUhXChTHhm6Xb3krQ4HmbsaQKCkvZQzcBSCd",
  "key9": "5sUKrqTYUEe9kFjXUTh37nB7NYV1XH78LZCN8YRagPUp9bfMf9fzbhizaPeZN3b5ACN1gzZXamNvqPwupK8KznMa",
  "key10": "22FVA4KmxjsVjkeSPh5PJRgAqvjz3UKNPkmtLCwW7JxpRFSanLiuYVoxbmCaFQHbsJwg1yK2qLVkFARqpsyyaudR",
  "key11": "4VTnStJu3SAGkHVqW7Lad9L7xhDkdnP5TDVQwAuj6oA5tERBzFPwBcKJsficRxZxEm8dVb8ZoYtBp2xetnZitjMv",
  "key12": "4SXhdPk7Z93MbNpfpnrpYdSTwJ8UuhTi5FTDgjNfuuoSYWrfwe4JUV9Xv7nEHW3K9w4fUkneZTxCgx4JANWasqAH",
  "key13": "5Ee7hVJ1EzGHq3DXd1k4zsj7p9dZGqDWtJoy9eew3MpUyvypQo1YNqXdWpsofGn63RbtqepfhFweCFtsgaSKDfWL",
  "key14": "kYfcC9ek8us1RaPxXcwRDezdVk1TKMUzzvPUi27y91y82CRqKe1vqTmeZJZi29hbhAMnN9biSAmiwHHU1gvYy4R",
  "key15": "5SqSymNXia1UTjzCDb5n8WrdYjAJke4YD2XLgqGQQifC6eLCKCBG98fHaQP8QN7xZ7nnHS6zxLJqXLQp4q6i3fwF",
  "key16": "53x63UR8gTCk4Tqyzx39AdvA9f4WosyHs47K8tpX8zedCcfURMYtRpRYdTaSBPnDU9EnY9Edy5N4g4QEmMYDHKNZ",
  "key17": "3JuyEH9EoqY3kT7DMWYdbNGyeZvGShgKU1kdBCdFr561BoBby4BmUQ4ScNex3sknCoZgtWkDFfxsRZ1DtbAYDqka",
  "key18": "2W3B3s4BR3m8XMnNvi1T6HLC55uGdyjkafKAiCyaRUihoUrXzTw6QwVVsGfR3xJPZ3vCByo9NXEXsbjTrgGCfNN7",
  "key19": "5LN13DwfagF3tX3dRV82dw34Ksr1U7FHer91Bsr5rwxxJAiFcGKbXNQgxqwKinVV89P3M28TiLhspNUnB5dz7ky5",
  "key20": "3BbSmrGiFmsmw3YGDFSQDGfYMPCotapi2nL5wSPdALR5xkNG7MQBKa2sUKv3u6mnvDBYWunS7UDAqBnXSKL4qutK",
  "key21": "5eRfGSvDFC711TLCgNvA7cYRcpPzmSWmyeq6FqCmJmP2Ck1Xd1GCcta7194iPGJrbJchanFphmDeyRw6RSPuGb8B",
  "key22": "d2xF4aFtgd8GYpdNzm5sdygrEnXWZnjYTB1EQJ588R1MjXwcPcJXHZGyZon7F7kYZ3Lrgwiimf6o6NRPsGT9pZe",
  "key23": "4b4SWM1WbJvPzRfre3QKP53Dkp6MnQqA5Hfc2bF3j8VTxS3N5k8E6Jpn4rJ74thoELM4PiAT7zCAhHxLyUC4pFGR",
  "key24": "43e95NBqbcVwYcRqUSYHAnKC4r9nxfpJhpGTMbPifFsAkBaw14GXkmvSK6xGSLZoYc2cRfcUygNiAfFn8Xvf4wwG",
  "key25": "43GgVEcP5R4VSqjMpoYk1s6Y7G6FFVE64R9Ldz3gsW36PZBGBciyAjRuxB8jueke5s523LhFFvXDHVBQ63VXhJ3Y",
  "key26": "3hXLNej7DmdfpBkpKPnRUJLdFaXg9dTFdvv6jUnN7VPFpVZCrCPsSJEAkeBjkKhpHUqo5mHwxLYC6q5jT8mhiadN",
  "key27": "5uyv3UFVippfwYE6NXng3dpDd194TgmeGuKtXTx7ARpTvqK5Ty5nu8qfNRURQhNDowosn72s7ie2uDpyFzjT6TVU",
  "key28": "25gcjQUgTcPytAbsQdrGgrqQbJ2bbQbwiMFeW8LwpiDNJXgdBckUiH7QnxC335R4owewQzWC5bWcNQz4ujkVXX6s",
  "key29": "3vmZ7FUF7nFaq9uDTEZrxupdwR3qCN8ojwMszqgzWbURXc3hLxjXt7mELtb1ymUUenC4AVp17hmmZ5ncS7ZNYAg4",
  "key30": "nZVGj6bHcgia7A6NJC7ySzJTZ2PuyHXxNVxXiwVNcHdzhWKckdGxgQi4qSswWJQsR4YAqvhgwaeEF7BDi8Pgk8z",
  "key31": "41Jw2HaXdZ43HNTnHQaRGKBVGuB5BjtEQJuQmSxCsYh4LtrYMGxgoXZsDniF5AVnbNgdxd6ZiBUJoqQNFae7s7MR",
  "key32": "4Fe9Huds4rrRCgPGJoAP9N8mvV6k8ZwG4vKDxVkLkWdHTFju7PUMWVkQEfAc8LuQmm7iMtwwKBorT7P4e47ym7Ef",
  "key33": "2enctUDzULnV2YAtC41etaXPmpGnFwyDQzvydwhUwXkYoFE8nAtWs7EBw1ZaVZEV6ayBXDSpYdXWZH6eE5GPaEsL",
  "key34": "32SoXb35Ur9KSopMbx4q4wr4mnLfT5Zugg45xxrPRzz9cJ4dGhsnmM6zQH66DkRXZBhmTGpxfgWpCSPUDtBQrhZP",
  "key35": "2VspLEfDBuVG4FMucTDtM7M1Ypa4cNbMW8FhjTJYaCMdW97DLywe7511ZFULS9KSwVpfzZPpiyLgSowELpAp5v5Y",
  "key36": "4KNfW3qnwj26kJSLdEmi1p8pzALAHumbL1FFMtjV1RnvPvpWRw44AbHyhVUDWL8jq5m8uaSRuVqdNrwoweApsG5F",
  "key37": "5jA9GbXRurzZdCuEiv1znTxWrGMVmBHGtTaTzsXTj79XhKGeLjqCX9J9Hqp2hPStwHrvGKWDcFmZWgBZCUwGgp6P",
  "key38": "5woYEusogKbhonrRvKn4HHzv5vGDt2RrCno4qghRbtKoEAbcDgMt1dAeofN5DM72K9YExHrEWk3qYP9R3DCbV5qS",
  "key39": "24P7tq64oZqXsz9BPbttp6RYvKJ17cn4jF4nfnDJxezmdzfEU7zgiw8cWWYgfEAnnPJUgh56dHWUGtxkBBpZh7qY",
  "key40": "3JTMRxZEMfGaLNy6aJBRU55jZR5xQMmzesvJ8Gwbgw2Ya2E6VSuezyggbQ5qPWz5wEkRMRror5SbasdQPSUamEUt",
  "key41": "3srMkGnVCAYeRBJoLP9cSYibXkCQePE8KXuGDNTifz8m791a9amXyfiFoUdw88iS3YFKZpfW6sCxXg5Q4fvDXML",
  "key42": "4DPzuoMa8XktpoWSAFhjgfxDFDjzrwcP7DaX3CYmLQBdkAmcHrpne2fCrejH7J8HC9h9uDAPwPAPjXYGzV2wTYDS",
  "key43": "1iM3HXeAyZkq9MMZMyWJXN2x3PqwZr6JwZ15GxB5yvemxphsiswz3gTMgRFnXEoHpVH8RxvFSThXoPhQzkEnYKk"
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
