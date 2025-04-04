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
    "2Vyv18uAZxLpNf9iB1RUg5hTG3XBDYZZVD5zw3erKvPQDmG1W8MEMUdS4BHXgjZbQdjdJAoDAqoydEN6cepcH5DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jn1snpGqet37TYn1RnPcDWyHELHHgnTHGkpNptD5g3bZXgSoSeiGqeXJiPg6gJjGF4PNRYKBPrcz31CDF23qQnh",
  "key1": "2j7mNRQ5RmWu3FzernKjM1kits2Prccg7FzaVT54TPfioMgFTNF287UPaQWHKMqStgAPj7CMZU7g9LprWjhLhi2W",
  "key2": "2z83zyMLUudbbhR44hdEPz2njsrHmsuhf9mwdsZHchnMXVxmArqvzB7SA7qDYaPNKSGCkSQyYWGaXnAgUKkeVbYt",
  "key3": "2J1dTYNXV5vxxT2y9G6dX8bxBe6axDu6LCS6x9fKUaTSnrLSVM526rkh389NEF4uQq2xmTBfGisdCewvY59Tb32r",
  "key4": "5p1xqEGLKrdNc75dXQX6zCye6rfVfmoC42KcrZTKW5JcSfDmmuvwgBYZZCtHtwrCvVjLoVH2rHgZSxSQcxKN6LQp",
  "key5": "2aKvBG8G5rC8Cx2iPyeqqv1C7mJnnF5sMZpvA2qDprcDjCoYGzVAQPdGFmbaxH539TCDKD6KCnREEBi5XzpvLHPw",
  "key6": "4MVDw6MZgpzWGJtedAhzEuyhLKVMti2RVVowATbpy2jrdMb3U2ifkgUE7BfVXuLH5tbsUC514eiB28G9cWzJLAoe",
  "key7": "25u1Jpi8ngT98HWB6hwn6kYZzRfcsGeLcZdRCscdkMhNuXUKvkCF9AEmnRfBWXmvXkr2FcV8hv8jLfNffi95AqZm",
  "key8": "4ncCAwGjYYSd8BAgrY7kbYv1N2sXxAFnvVUe4nMypHRzakmzxRjf13daEirUhNXHe2ZxJwQFa5hQNn3ooNiRbgid",
  "key9": "fUYhVL8Na2BXVmtM1oBzHqFwizGDavvx6b9kNRYrWhfbLLrgQJkYLKnLDTGuYp8eEokpxhNH3Qw7M2GvqjySypi",
  "key10": "22F6YcE4CaQyLnrhmdDf8QqTrrSgKRto6VH6EK4qiN7sNkyAiCD4bCyFo1HP96VekA4SgXma96H2pXnNdbY7kFD2",
  "key11": "4AbL7H2RMhfarabUxQpWQNjZ7BJLLz3LTJPNtpJFfzWkYkH6s9bBt3nBVEWCSpCyJAnrbAMM1dbGNQun1CgNNBp1",
  "key12": "3JD8PX1t2Y2oCUTXyu2pq1jgoZxsQaGPaXagpDWDEPh7sARMWU91ybL6PgU98Piy47srPzuigvGR3QUZrTD74x4N",
  "key13": "59YPjtbzAAHztHWEDxSARtyWv6ShznBaKWr3KcwbaAkNW8TdX8e8PYdtQd9HKDatW7pBdRMzWjxgcy8TJsP41WLJ",
  "key14": "5qqd7hKekVLP131TTm3Dnyzygg9UNcuXB4zBGYUMHdrWaSEcKSQnvLQ6oN3c6kHLB6mHY9HV3FYGUmTAUkX8AvG1",
  "key15": "2eF6XRBUj5t6qNigjXpT4wPXDNdyUWbehpvgFkPFFqhR86wKLJj5mhq4KBDqm8YaCYx5Cut9rYREjp1BMLw8zc8",
  "key16": "2xAHjzGvKtr433PHVMRWmja794zH4pUeSisw5A9VxtjijmM47MLwGDSPfrSbr3JSBgVFbHxHtNPoWujwTQ4znKD7",
  "key17": "38QzXa6BVCCVRr19iBzoR34MvDNDqJNDKpsd1kHbwc1o1Mwo2zfh9sfHNtYJHyhELA7ZBTm9KGARVc5eeD6DR4gq",
  "key18": "43YRzLtBT1Rz721bP85qZx2UNo483emEHQGA8YwSNJ2ve3bjzwb41avoMyoCMgUjDopFrkJjJTCnGgDGBodMaMPE",
  "key19": "5czVmZydt1kB6rimHKtQKAmgDnpBoifWbheypjzcAkaDJmDQf1HLr5wea6nDL2t8CqAWZo5aGYNezMVFvtq86PXQ",
  "key20": "3AX2CUAuVLQ39GM9z45421vUDZnA32EwdRWAk6kYFXkH5vHDqMHnJUeJorzLJJzF5ZPsE5PkGtER8jbgzXVn6aL3",
  "key21": "5pYdUa2tXFV9onUYiw3wZw8c6LJB5k1akVX4uXZC8U2f5zqhHjvfvbUohHaqKVvGhqJM4QauiJSMtNeKGhypGV9T",
  "key22": "5A2eNi99jE9iJF7e9vEnhFkazFLUDqUWT4qJu9g5FTUoPiQm2GgBNDR1YDGhYAdCruXqG8A1HsCd9XnVKZ4198eL",
  "key23": "5AAKe6tH9n25p6dv2QXnAdiYNPLmioVNJ9kyKgjteAgFChUtkUpSzrgT7hTTSGbyeLJsr2MUcCVk4yevQKoxGMsw",
  "key24": "5ezjPy3aeiuXMT5A8HMMwcqNu2cZCUEh45QJy4aCfP3yN5Rvfh4fWoA5VHQz12mZrkane83vZQizh3jttAAmdN23",
  "key25": "4iPdmHfdaymmTL95duq3CabbouAV1ERdT1LaUMCcxHkhexwjVMSBJ2JKjEeXCaRSbZcFAifSF7RmxceXVRtDDTmE",
  "key26": "4rfczzbGqftj7Wm9ZDVxtcxaWghkYdNo3ND62NtTifRuYiLe4eZ57QZCQ6KDWmKAEyvzANMv7h8LUsjwynGcfe31",
  "key27": "5nDK8toqfrBEXYmPMQHwfAphkaEAHbTniygxmYoRFmxhNzXexC6foiM96qAKsxe4r1DaxtXTB2cUc3teHR2HHvC",
  "key28": "2ugNENCTcLfVXq6LPZkcn2B4QpsHYBoWeYtghHE8yrUvWwBmux36z1RJZAwT5gBugmpP4mU4KLjwmzZ3BsUdib2T",
  "key29": "STinB8XiRjYN2bDtx5Dbkav8x6uqFuJ1SdsJhQziWhFGHiJvzhuvzm9LV2GCB5Q5mDJvt4dZGmgCaSR5aQpgrLC",
  "key30": "4iB6iwTuvf32dosMfvhappeAwDrkYvBaa5UNJQsLDS3wKVXCBYDKHGmeeLDv3uzKGbN6jS6t4j9yA4YwQBzYo7hf",
  "key31": "2CRN95wHfmNzpD6y5Rmwh9Cv4e6XEuX7p6Fss5VoJ4St3i48n181uoRhU2MPPH2C2msKuwpTLnHwXfrPpZRHswKR",
  "key32": "4bpTuCxzbMD4971XAqkmxWxEmrVZkteELEy9A3DjJKqA8P1cUwuXfHXbpuyoqo49DAZJ3Yb8tmCvix71kogBwjxp",
  "key33": "2SbtyoSr4afYHTBRHr94a2VzMNrBmkGgxWTPNcjwGWh7FvdjJpGWFcwGRRUR5k4bChTYCho5BT1D9LHvMeUT63rB",
  "key34": "evfYjrnPcnPF2abJ4HVThBaV3Knfyz9Ro5aur2RZULxZup7NCMUm47VA3VLZPgHcQ1VPNDTZz4fMa24anzdprmz",
  "key35": "5C5nFpPrAjH7TbBePAKf9UypCckYxjUKHSuM5mfpVDunmEK3PenjBpS7ByVQxiqe52KgLVVP2PK969h7VPaJPF4e",
  "key36": "4EXAVj4x6mu8TjYQNEJnVoHWzZPt8G39WnALz2eSxsgWFvip343gzwrXZyRLwfTxePgGxEgvSZAVC3dGH6jAt3zg",
  "key37": "5N3fqCjBC8rdKrkqH9KBtrp6bzoW8gPJkNReCpAD488AtWxSnW89D216kmd8enERiccHnRRmWL27vcRc9raqvGw1",
  "key38": "3mNUCAzUN7Qe9nCwoEznmZksH8vSUpRfeSvhDUdySzQEoShhm99d6oPS1uc9wt359E1VYFTxULj5zGX5TqtMiAXT",
  "key39": "4TojnH9KDc2TgB9WPne7Utxq4mxCL7zLnLfxtCt9SXkMGnfVkSx5Gvc7nYAX9p1hLANYyWyH2GKnuZoLhfKNMzg9",
  "key40": "4rgVYvj3K5JRy8G6Vkb73aHyjAyNJLsoVWwoJzGFksLQkoKCHpegR6P82Hkyj62eHAwZLuR346sBRvdtNdkzvXkW",
  "key41": "4S3Sd7RpZJXVv94zrBpSCZjkHiyhEFtnkHtGsF63ELgDyV3ANQyqZjALG9sQopWd9kKHAvwBjRbLdgeZLr7rpF79",
  "key42": "55P3rsXotTDt2GPeHPKwE6x96wHx3MhuhnLamKgfbDSPhChj7tgkEV5CHhLyK9BH2bfCakdcRGiW6ZGUp5aYjqGL",
  "key43": "2gFkfiz1J71R19yCwqopKeSmbumAZz4A1JmGa4q4WqAYVV8LWZYE2igM85879rb4UwFQgchhPCUfehdygJHszEhx"
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
