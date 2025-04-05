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
    "5TzrANAReqCWAw4cbLuQVckXvGKFt15qb7uQ54GzMpgy7yDX7pUZH3jfJL7YDujQatWrqW1qZ4ynPBHNypLdjF8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YH1Lc1SvRVa9Sv2Wk2aLeTSZTcema642oXToWLbuXkSwHreChSViqgVydR7iND9uFA7z7uVpoXRajBeqL7nQQTb",
  "key1": "5jgNkPp8GSPJpAQUkraih5enJijmDjhiTCcdkKjHG8qgg8PnavBLWEcNbJPHfMXoWwBsxifNcNQNUb896S514Jvb",
  "key2": "nUhmU9mf1oasTksLzkU4avhofESX4R57ga79PRUGmcZZ7QzX2bBGSXs5GXX87jje9QxsMwRBmv79WKELhn6cYZT",
  "key3": "5jQTHDpndBZhvMMxthofENoTPRG9MPiRTxNxKvaXBGsERt3CBeojtX8eyyzmSGFTPWY3HWMEwP76NXvGTg3q1K2",
  "key4": "3N6ypZ2otRwU5bxFLt1RLbzrU3TgzLPSG7Y1P3XRmLL49yasNLFoXmciGqgofcGMtpUAV9MPoHBw1KvYa2TQ1rXU",
  "key5": "3fmNpbfWtzv7UWg3uXLJGmNYJ8Zw69NjNMhcywrWP8Z9Wy3R4JAArWjzSXg9rrLnsFrcUR5naTYwa5Cwwii5LQKL",
  "key6": "6394C7YcCr6hJ19wMxab2C6aq8Xa9yd1nRLXNpjUgYiWDxMojjB8uUM9Y563ny2Z3pRSeeDUEEzRoB2DYuDfkToz",
  "key7": "46Y8S4w7QKqrbqrc7arScbxp4HMrdQKookpXHvrz4y21jJARUWBbujUhqVdDoeH8shHacwZD4WWCFvruqRe5XVG5",
  "key8": "592eSHyGGPWML1zvNz3wuKyss6PUYLVAtzX9gvqCc3v3r9RFkUimZgvV3HvaF2FdUkW7DGBCibQCnX4QwTaNvNbT",
  "key9": "3npe1WadveSFpcfy2qi7Ra2ooP1cH69W6ZWRNpHnJ7ZrT3LuSY8ziDKd5pUER5HXrMWioh94Esi36vT9vK3SPCgf",
  "key10": "2LVutvHBx7v8vLJcmkyJoMShJ3GZDEamE8yj4JUaeGtiMAsDVriHfzUM1mmWZG9jU8H4Q9XNm83Gi6PPFL51yXfV",
  "key11": "AZXWDM2xhkisU2JSTi6uxNVPcaLMU5ZZ26JtNZjT6aWNPjcixw4Dq3cdbxEYwUbnwnBqxcSEYazjwuMVAQuAtRp",
  "key12": "4ZpztzrqRZMHYkRFLm32TTKYRaP36dnYFbNne9TDo1Z4o6P1aNT8airAF8uPxrK1we8vhStB9a7XoENFMm9Uo6sN",
  "key13": "bzKyboKMAksHr679m6oysYy5vnGGugPXnhUAsUUAqwYVYVTe8Y88qSeVrvEYu8Rxbtv6DPosncnqazeJpxqxRym",
  "key14": "3eU8Dv1FkTgzpRVrB6Nx9DKnfyniEQSWeBcvArAMfzpnMnxJj7XRC1v2JZteaBCt6UP3nySXcN3WDwzL4nNoEQB8",
  "key15": "41ewf4qwGC1nLiDny5y5FohjeZ2QWh4ZAjkV2Dx3TK1pWVEWSFR5d6tmc4dHoZRsw9a2RD2SFgcbruM4bG1o64tC",
  "key16": "3qDq89uGKGJrrjEKoWgYnLxXwMbmkAJBH8CUWnaJfKhHNU18wdysGsF4JpGDrs3ce2SSnSQ2fdVo5EYq9SamStw3",
  "key17": "5UU4QdpnJ46YvTVENHQjxMygHcECU6jiE617XkJJ17twdY658xxZLusYtQgj3DVSbu4PzWAiEGMErng83BH8YELs",
  "key18": "4hePtMrv1hwDvFYFjdm3A5GPBK2qgUmLYqBfiCNtvqFxFu1YVWU9ocD3Q1FAuGkmyBgTKZ1yQYgvBMKBhUxB2iwU",
  "key19": "58dwa4F9wtFingWNAaeTbmt6Q3eQrW43fCzCXXh7LsnvT3rk25Eux6cVtfHom74ZWmbK6njpwFrUZH5pmAbmbUqn",
  "key20": "5qw27anEdK8o8Bi72QZjatBjezkLSF3WwKAZuZ5tYzTX1y7S4x6bhxb2EuWx4N6vqcqcQd5o4bG1mwB1gccZWbjF",
  "key21": "2t9PoPTn9v5dXouY2DeHckRrqvdbP8P4VJQ6EwPZmRsztTMhKBsgnzT5qmQUMHnjZ2ST7r7Nbrzb23oBfPqcc9E4",
  "key22": "44q3WcXqEbCSsV1ZByavLRx4Ba1cRwnVaB63nVFLNi5toB1jpNk7R6bto8WYY6NdN6mGjm37rvrDC4zbc6oCUeS7",
  "key23": "2yKnvVokeVQWkueb1kWVCUpPBGB4ztdWJg1VTZUPETBkBCAxo5p6pH4VChJaekyL3fcovsEQ86xscjVj3CKRKumw",
  "key24": "25XFZ7jkLM82J3do5MT1rP9kji6M3Pg3t31JVTTyG7eZR6BAuPwjPtj3NZwq6fVKmWXMAnjE4P8mC1v1eJX4ieez",
  "key25": "4BV846gcPS3uPBicQ4vbyHHt8RbakMee8Vg4yUpNTwp69NMf8ZPWMtwawjTaLrEJPgPpmHv2V8Tr36FZootS2zWa"
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
