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
    "3qyL3iRiXuSDU6Ly7pjS7GQbZfDpQPzVWF5KdGugUcfK7gbgzJ6SoE5jh7yCSLuNzurA7jtm8wSR7KWeT35brqaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCm8qeLnsfSxVv3ZaKm47anHZYpCYeKdNqQKRZzdwJdxy3YvSm9vLhjxotS96gTkWwaznhTE7AqHHP6yr2d5Qh1",
  "key1": "41fnX3dqnRUX7onExvDaMCMWDZ3FTM1RSmupjduzAuW9ZFFXiYnikSU9mfJbxJUNHZRFVBxjiT4kLs34PRefSLkg",
  "key2": "PfpJyn6BNcT4PMH3iMV8iwmCkfjCbgcwZ2JFbS9W4YuDgEyMBzCb8RJoebaRLaAY4nPQvLcdZMxKbFqRS3Zx7Uh",
  "key3": "5NapoPiJwqQDgSo6UJ2mt9ZTi5hdJj4iQfB4YRiiUHK2R3nAJr3oZSzChTCRTrSfHz1PLbKSq8dgeLLcQE1xYQ1M",
  "key4": "2xC3GztCJAG4mCJYpgr4WbwGiK33Jd3DtyZnoNtgn2jYgT6TX6LEqFLfv3M9D5XK5EfLSH5kv1EKz6dDMnFAVZd3",
  "key5": "cxJxWS6idzFkB5s7GY46sAyJ66a8M3yf9PQRbj5Ji6P7SBN5XkmZktp6yWopzS3jEcy7H8TQiaRyWkzn8HBNLG3",
  "key6": "5x7xiiK6mfYTPzUgd8hwt7Gfw7ej5AdNSW11DVGRxFjviLiCtnFLtJFtovg78Y2hZ6Ak1oGcVXXRrsE71u4een7s",
  "key7": "naU5Ptz8j4p6W1g1f55JmmdCsn1oKnF3xBHwK4AwFc4j3RJVVkYxwHXMXaQ5mF6zRPotDd7tPcMNwKwLkaDvTkm",
  "key8": "4gtZ6xn1c2JKoFEUNGq31KYUdDsnNq9Q1NmBJfPacq2z6HA9VxU2tJE3T58kxXEk6wBVnjnAg98QA9yyoMEe9w4Z",
  "key9": "5kFtT34GjsUXA2gep3TZxABYY522KYz4i7ZrK81zKWMK1FockfxAgqudH8fumR57kQkUyNmduPJGjNzLBR1LRH36",
  "key10": "2qYSR4k28dB1SnXLM8KetGcwdTrBTxN9mPTExfUyCcCc5RAZpnBzwhJSwZYdwPXF4qZHS9Hgsqpgg7RDKQeZqrK2",
  "key11": "4wQ5oFDB6RfgiFYefHUqKhMVzWRp96HNbMdDAzB22pukvy6hMNUn968Rs8zQh2sd9G9fSYcAP5w19WphfZo1PpC6",
  "key12": "2MdQMwZvVQv28BvKPqFQXMZS1gs2HhThxwpn5jCT7D2XkFYJxV7X5Xh16PHW7ugTno4GKzCpm89VCU3RykmgA6x2",
  "key13": "37UD9YfTJ4Sw3M8FYt5QnBNZn6WddarYEkKTM32yiwsQ7cSgYbT8KTUNB2fx3rJAfwryHsNLQpVpGm96CiozeG8G",
  "key14": "4QEsVWrvpAqQCRgHAGmc7yTmNtBTTh3BTvqvGfoZtQaxP8Pu541uAjkxes4xLDMbgPKQ34DQguVSWHqMateHamz8",
  "key15": "2S4ThDU2htwKoNX4dRbKE4fH6yySkmxuxxo9NocPg35dwHoC9srxdDq66gwXSqA6hDpGSiw9scGF4jvD7pTFs6Ai",
  "key16": "3X2GFS3qquWyYumJMQQQNL1naK7SnREVCmHkcXBozX9FoUgknotyJZ6S4U3wCWQ865nRURw4kWCwpA5iKgGjS5gi",
  "key17": "h2599Ymuphgxgi3pcBcnwWxwNrKoRf3gS7nkVF8drgjP251feXt24wNNptU1UxBB2zzWbJnp4JQ1WjxrLQ4QjRM",
  "key18": "2fTLqVXWYeQuxJsJjnxu8iUUQz4tXzmDhqictAAKNhaLxhvcgHhVjF4ShDLD73LEeii17nJiRGKBEh9FFgjAPhT6",
  "key19": "5QbLP9kW49uR233J5ENCHRNf8ur6ZDXjDsAsqrG41KHHJZrJjxkaZU9g2pgdyzeLtbsARzQmHaykwVUNig1VYUCu",
  "key20": "35Jg1uAkpHT3QXc78TeU86DFt8ApbTers5GnTvx2SCnj4GdsbV12r2zMwZQr3n45edkpLzedTUBPxtWKaXwGfPjc",
  "key21": "57FyRrUEcnhvCXoPQi3xCPr995zb3zxa5A7v1fLwUTtEmFZRXESCguJo77xZtqifav6J84rhXjQYK4UxazaRATyT",
  "key22": "BCdH5rhkiVw6Vyj2k1EdJBUqHcxhEHVe4Kg4HEN6MK5U6tNuZ8hJ1Rinr3YSjR9GBwoZFtGejJ4HpjntA1JCiwz",
  "key23": "47ztAwXBPx9S5Ki9QAx7Urd7LWGJE7kcj7cFRTwZ8NyUMGv1o5pp79FsmYTvYMNa4m5mFxogry1Xs9hQVcHrTwhg",
  "key24": "4U18heMLWU6vs1K3Z7cqe51pFc39VNREQ1XbwM8NFWpppfGoB6d3Mq1FtKSuhLn6ZQ5s5oHZVMqrmZBeMmFqVQeW",
  "key25": "2gkLVGWyy7g3F9B7yoDcDMc5znaCvDgm5czCDyLops1xYyVd9yn2zc7szaDuc4h7oK8SnTj6jXAenW3ePv1bzgwH",
  "key26": "4t6tU9NbmEHHU69HDXkXBJRxRArN7Ds4BLe9928BUexBJnVCK9UQejG4PRBLX8Eq8b39xb2RnbrvMkT2fKbr3Y6G",
  "key27": "5U6s12wNwAcJ7LhTeGmTRPtMpKhZpfaXUc47RZMKf5Pt2BiTPTgANcCDstp2q37mAJBtqRSHMkx2JuvApLBqJ61p",
  "key28": "4Xyc4WvjPTFdkt3KEzBHqhvHCswBmiVNUnxvskh6hD86F5Xd4G5EtcRB67KExaznbRa15H3x2iV5p7SusadYyxQ7",
  "key29": "Y1KTDjFSNCUiov2GwH2VAVpk2kj7gs7zXAJTiXFv8HArJQCJa6YPVeyxrUmi5y25t9infyLrbN8AEyqEuQSTM5m",
  "key30": "4VdHrXTDFVdiYpT4ex1vd3uATJpyS73Uw1oyW8Mv4QShhLrnFBBTbkuEXNjV1ZsKpMpkJXUSFe4741Re33SVbRsa",
  "key31": "455vDMFyZFDFcLYyexi15QsUcZexGPT32vnaDgPjCQotLBRka38qAg1HXJACWQ2UDiEvbhsq7btved4VTu2eVS9u",
  "key32": "2nR5EQtjnXAS3BWtLcnjNZDkb2vmFFSbKk4zedzHfAU1yL4vTp4PmtT5XiUFSruFRmh9Ae9e2wVC7Red6ZLStc8g",
  "key33": "5gi5yABkFfKUgLZmjkUdDUHPLJ3g55o6QwX7UVdXaf1FbjmsMtie9jgNi52MHA4MAN1B7JsEm3iHEmEYLBExmqzZ",
  "key34": "4PwMSRQvQ2FXKVRQcJksXbwWjmRGoNudspShjQCMMJDG54YvVsN9yyQ4WMXNVd1hK42LRVFXBHU3VGDyLNnwdCqJ",
  "key35": "3U9TZ7ruwuGgkRbasJvSZH24Sy3am3dsNyLz1GDhxprSgfjrDzooRcTYuhvF2ZGc4ExHtLKDPT49nWaMPUyj7FfD"
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
