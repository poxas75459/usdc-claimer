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
    "33SFbuGNiMhY8yuRXJ3sjyxbuF8WgdCCQ6Cj47Ghj7bystQMQh2ycRqTvQpkRq3havEJYgdveEjwLBVTwmY5ijix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EuWcMQrB7Cab9qVUT6tRjDjf7zA1zfXGGVS1skmZPkoLRJ5zQxgjVU3W1XX2M3UVJWEeYuTvpmo8Use1r9rUTWi",
  "key1": "2fqoqAKf9GjjVw2NWwtTjCch34MJgbHi5cRBYSzeZ849o2h2kXgRgucJ9eMroK95NBN5fkbbcLfpQzi8ofufFPQg",
  "key2": "59qxqYQjHuoxHAcq53P1VnTT3xWycLG9RYVomVbiCKXPA1nwAMHfoUzCAG8d4an3xX6yhgYecMurEjQMb7L4AsGq",
  "key3": "2JpJHWpvYzjxLPViJVAZ6kDyjedXuxddkedSrswg4xdUPjtnK1FTnKkig7MniNH57r2Z4kLaMqYDPPeZTZ2XYrrR",
  "key4": "TqN7PsgvZYds2V7HH23tq5Gwx98qBs9NJHpqBJNVbDTMbT4473RXLXs5UBppYYCemsDUHzaf1375EgYMq8rwBCG",
  "key5": "5zttne6hKCkrz1K9xwHVN2jKkrs6W1fdhnfuhxTB5deChXmyvLMAAYnryrDHVDLhMn6dR5hbyZgbJLQz9CMYFuAq",
  "key6": "od5aGcmufmTWRcbCskRYcVXrUcddjvwcCS2AbvNwhsWXFgaUpfUeZbD5aLyrHK2kFuzdpTprKLfeAmRrLJhREYT",
  "key7": "uRv2oKvaGiw3HhMtjW5NdBG6ttWLPSBHPXTNC4p2fPYGtcswD8bCFGVoMmRJVPmT1djJkD3RD2xebjLHaG7stGY",
  "key8": "4JiWU9DwUdrrgezbJsFUk2v1WYFnSvYG2uRcAH8tHceUoya9RMmUsVzZ6uForvP3iVJwpzhHPrpPgNe9SScM7mXm",
  "key9": "3jpVUdoQF1X5A2UM6pmQRCULgdbidh7NdDWnyYrPdD4QLkeSwEXmPCDpsZqNTx8y8kG3QJMhpfJ4ZcX6raqAh4J3",
  "key10": "ddrkWJZZEMZbJiqCueVNJC89yke88jtiGdZExCCB7M5iyb2N13WXNsks5GvQUX17q4NzRVZ5a7iKaVfvL8Qy6Np",
  "key11": "5gTFCtEw5PkyPeYi7EtvbYhccrBY7UwqDzMVexTy49UAAjivpqkVaeeqT7VQAj1XFQoCM53DJhWq3e2NcRXocS2b",
  "key12": "3Gkfim12bhXv2F8ntBPbkTX3etgUX7Mu1cftsEmxKBkkWRipsMyJCN2wNzBT4JMfz29snmR91DxV5vEYEss2PEc9",
  "key13": "63MNw8UF2jSeCWis6cBpYzKebT7hQCLE8BWs1yirCPxa7rEESF3H4o6eqp6K9p7XcYVX1v6S8iYb9FqGzguN33KA",
  "key14": "2HvkUTgizoUnFxJA8eqLnvw417dQNMTwSDPeuemqQyzAKoqVC3DjpDcJLqWosmyRueN6RkeX5oDzqLDxgovVnKYR",
  "key15": "2DfSPwJJcztMYRM8qfCYg4e5kStzsaYr2VSDccKZQeuT8MYT94hb7AaT8WSeVtEABUsptuP3vCBLpDUMZavSV3Q6",
  "key16": "2VufhdhfmW1GdkeU4yS7oFmyJd8BuLFC7ttjeRr4Zd5T8UeeuoXZ1WGfKEmKf5HJKaqrcx4H2Q44aSk36UWYHJFg",
  "key17": "kCwLBfqh2jWn4kQ7KxkWgw56bYcUAL3ovhkyc3XoreJ7QPUMUcUP7vUC4GNzMTG4wEhjetocH7CWLAfTbruA3ft",
  "key18": "4wC9FY5oxyRUPM66e8skk63XZsmdrJSA5zRuDgznht4oJXqoDxcVofAwpzDczRUwTshbt5wbcrgQo7dMYv1K4j7d",
  "key19": "4Q5kyz9E2WkRuHLwwfboyxbbKoT9v4F4jCmUrVAn1NgcRoSqKYfVL1iS2QbZ3oV3Sy6eU8ZwfLSagiKMf3xcdfEc",
  "key20": "2yzTky14UMYFphLiYGN4hne8ANKhwXza2jpL8hSRLLB9sPivKzssNLYG6XFbeTeVRsKvPbpbG9MQyp7pbv2jCYNe",
  "key21": "5ui6TvpWfRbsatjaEwuF2zcEmiLrkAvz8ew7BJeUgnCtdfV4uZAktc4Www2pKsRkLYfw485WfvQ1MA7TdyJe8BLW",
  "key22": "gUBsBoUDmEABa26NDpXyLmcgVXvvESFGYHwtSwcMpeZEHbDcHHCWCYhNsftX85AEccTtBtUReUkhTS6Q1YAZFdy",
  "key23": "25PfBnn1kh2yrfzk1MddVNPCozVWhP1q5BEYoU1CycoTinWEhonned31Jyo5q8gW2HA9XyHcoF1XTB5KFGE5M7vw",
  "key24": "2EyQm4EubT1AhyjAhMtgAxuQTcHTNVV4kJ3hHqeMRc21jSxdkQpQ8PWQks18dvopqEVLTf13rTMoee51VNDsfcez",
  "key25": "44m59jzAyi4DnzubhZRHMQgBJ9wggUDsa1REaV5zPWrwM9oYpmnCXbta4Sk4uWhABBYb16Y6a8a24sWLRUpUctzP",
  "key26": "47f8wg1EQEhQw6RM2wAnnbEqgYjjP3PFNTF15CZKzTsbBe3WdBQGVKsw2ir18GmA7VujJqjYKmmnsyd96e86s72b",
  "key27": "64uDte33TytzsgtbWnJbebrf85pdg42BLh8jT9KJK7rnpJqHEqHRjoFFY6dL5WWZpFo1j9QMQ2T7NdWii3zvnnqs",
  "key28": "4TtAMRDEsWbSRMPmgFp1jxW6dqZ985m88VMfEfjhr7BtZdGEF7QbEjaipsryq4zyoHgGxjpKaLh5JeMBKCntPxiE",
  "key29": "5XuVd8fVope7TgH4o9EAyHGr7qTFzL6xf1C4ecVH17CGY2R94W63ghVWp9Rvhe9RP4vE4NtnpYGAjY91v4dapwZh",
  "key30": "5AbzcKnm32Le9fmLpmfyhRueubvzEK2M4fvNq9frmVGtHTLGEUA5YNw2seUukivBQ4EoB3LwiHzH1FDNLJjwinKW",
  "key31": "39vdmFn4FPz3g7wx4GmFW8dAbVeBnivXfMyk195rDUJ1WmsjcD3dhHR1wiXiR5G32YMQmckCskV7HvStrXwvtFtK",
  "key32": "oEZpk8zJ3FUSCmdeugHFC9cDnNjkjk2F2jPkZa6NjSnwbLb2U8ZiooHwGgC9RZPv36HYFyxRRXxz19SAY4v3zbW",
  "key33": "h3RLtSRHnAjjmisxB4j7B6uoTDsn3fjTC3pY4ZYNbzByYtjtMp2xyusmPZ4Ph2b7UVuTkL4vVBsCJZAewRTZqor",
  "key34": "2Mju3LfFDYEWMpJ1Aw4qZprmeitmRxvbZJf3L3oTFu5eSkP3eSDeYXX6nRRAFu7TWMG44BZKe82eWebB39Hs91DZ",
  "key35": "2qdQTxoT1HmzFJdV6idLKAQmSzi34Zby7ip4v7rrN7btvtLdWq55WasAdaqduyVN2VpBc69HKxq3AM1bPfqp5WME",
  "key36": "4n8WN8j82A2jyC7kNDcrTfUeoPiZ1iM1yKKuQzdQFYouNu9NJRgzHtFdcc9Wx1xxCRg66jKyxjT1KRVAn7gE845m",
  "key37": "4XzEvYRpkSm7qJcFkVGvfiRspgtNZXT7rWFJ83ih5nFWu9UdrRugQknWD7FHwv53YFjhnqNc1eDCj8QPAPoJMYWA",
  "key38": "2Ps2dEBEogSXDFhrHZqz94k5uzexqT1zm94oJrnD6aQKXZrzV9qyrzn1tc6ejdyV2K4dCR9ZYXH9xUNBik4xHow5",
  "key39": "4kioPbpXazg85bthQu5C73d4QB2NKMckfoQeFMHtM77SHsxS9tuVwvQfNed3AchveXaba8NHZXNyZdVdEea7HGGd",
  "key40": "3UKnAjDJB3pnwNMpNbV3v1qozUhuydZaNfLSrjQJUEaC7b7nqNeHpDWuXuZ5TmeQrZZKUigiU5V9gcTEfdX8ggHj",
  "key41": "5PuXxyW8Mg9TR7rCHaTPyJJ2Y5mCR3yBMtqTr6gR8tmbavNXaPEjSH1MXXnWVmMzJXmfTpdzLzWQU3DXibrV4JkS",
  "key42": "28sWEJ5i19Jwc5xDoVZEiQUiQ54vUQ4N5FnRa41za8AaqWPseKFkrxr2DkckEruiF13R7Xo7ms6SfFxHTCRBRSCU"
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
