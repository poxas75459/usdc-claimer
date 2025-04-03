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
    "38ofeVKSeX9An8LSuNFMbegLxwtYC53BJYo4gu7YQ66JyAvRcr6UwNiZTcvyqPi4k5xVG3BjNz7hFU111Wg44iBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jmtMgyUfL2GSLrXm4PWjbXr4FDE2kdozZzdqTWUtVbdmEGq1BXgYfiYpFtPW12mamZE2mQrvYdQoQuRbDxot5kA",
  "key1": "4AQxsgLzXynE8H9DdagLRRgzQqRDGnUxGGEjUStZ6fzgXG6ZyoZ7vVz3Yx9T28w6NeL6WcNWWkMr6qsGCUgC2iqH",
  "key2": "4ZZyuFBciybSgUjD4j3y4MkUyd8ACqxeqeyAqkkV2HVF9FKFGcFYhs4TV2Y15H2HQa1ALj47Np6SSexivGoEM74z",
  "key3": "52Z6hszuugqvVY2kTQ3V4NuETDTWDAYTGyoP4SkJ2rb7h1vWDRYe32RwvYWh2Upuq4DrN1rQs9E63D1iLpT4SHYL",
  "key4": "58jBQwFDKmLxpmPMwx2meKJimc55a6k1iXHVHzSNEBDnCXdtfFU8sFPqWs3ADrbhZhvS51xBMk78HzmFfhNPsHPJ",
  "key5": "38nTKubQ7yueNKKwKhHfWLV3PxjxrU3moQmqn28UytgyuiJaTg1q3yfcHFqABBracHRD3xgzkbYZwKP2oSzgomS4",
  "key6": "62EprGE6zKkpmaZpHpuTZif9KT8U3LjaWC6q11s1Bok2QWtvRWXLuKrL4SMWiBu3QQQ8uVkAd8wbQHsZigsYubpA",
  "key7": "3nMWqru48wuuVLnMMFGf1M1rXG7BMdWCbjSc1wxPo8XXQ5UsBgVuABsTTotVMuQFedTmxVCKREgk7epeEGJKAPAw",
  "key8": "4TUp9L8zu8kiJKNJ6zEHxJcNJH5gWZH92xm381RoVFWSSzG8wWZeyjABE1kfMKvC4LtfN3qmAmWEXVQZtkv8xAfT",
  "key9": "gMHQ75Sh9vvS6MpWTzeBNkBg9GG1kbak8qirxkqYX2yxuQTiZ8QfugDYhLW9zRZRVWKwQwCeziuC87qzArkbPBy",
  "key10": "26QccjzhfANbkCVqayYs8qVeWrkJ61Bu2Wi3GujfmpjziXkKpTW53utmkwNVPZi9aLaYe9pxxQbVY2QQebdoTsg7",
  "key11": "5Q81Gu9o38z9VBEFNY6fgF9APG6mqbJUC94PWj5VMUcL24LBtdtxZs5eDYsjLXw7KFzmAMsLxjwQDmD7Sd5oGDhd",
  "key12": "4tQSXyPK8FnsxkngMCoDUGyLmH1hJmZwLQZ6JmBbtfnRBXmaLKSWEvN2vDMTqRyqVfSYc1c4FCmXsQFASDyNS4nA",
  "key13": "3pViCv9Ne9ZnHLy9gkQ8LBhgxUsvJG5xZ16TtPCxUVrfxUaAHeHS6F2PXaWGARjrUjKcpoxHBRmxzcyXk6gDUGen",
  "key14": "5xHczWp1tzd6d7XDwVD1zBtnTM8urwAQDkVKmnK3voNhsZCJ6v6QpAiykq9mGoi4peAuUwtynMBiqHqDb9jfrrD9",
  "key15": "4F5h8U56sS922JWKKX75Adudcngi88F4QBXU4XxY4yqbV6ZshkC69FWDZ5SuzbdA9BqJws3ud3yHo4U2v8i4j8b5",
  "key16": "GZPsevw8WepbRKXG6BihVKcnb8wCL47afBRm76dbo8WJby5UVzmmLcHdom8qUiv2so5TExMgxtKXeFCqpisRNZB",
  "key17": "3qFxGaXxU3fyF8qMfRyTR56v5aiKQtFAGgUV4otek6d7tL4zB3Rj527W7tAyAAJjw91mcuQVrB1RD34BSjFUqSpV",
  "key18": "3hTvSgrogeDDdtfk4KxF8SWqgVHEydPnhZA3c8iAR6gi7WTMgwZc2zpU1UCtC2g15Lh99TD6azt92MCjV1sDxhAZ",
  "key19": "2XgcqcsLsACy44Mq1YCcVovpV2HokQy4Vd5FLTfG9MUikk6HmHmSBNGcA3p9twu7BjuiqWHx2wfctzcHiyeoQ6oe",
  "key20": "28PRXCBNAb21tjsn4xuBygbLw7SWN473JP4aNmAaA4t6aTAd67muZ6z2pzVz85q7UzHW2yvTvjVttcFHTHzJFPFk",
  "key21": "3i7q9ZSg2ZUaBNk4JyXbEqKow6Uuq6YgoZYXizydQM1uJsLWsmwj9Dj5wnfmC9kyg7T8z9xaxpgDXm4MmHS53tqk",
  "key22": "26qsX5NRgU36tu8cAKmXg4b7v4rSuAagr7sYWPkzz1u16zXuCirorAbkqudxgSktipmnru2yxX3ev43QQowrrR14",
  "key23": "4K24R27rYAdLabzxuqqnyGY5Rc35FJ9v1E3uNNzPD1dpdBst5DR495gEBVAySnAscqPZcCSoCinhDVG448vnVxs8",
  "key24": "dMe1gjWUEiSU7PMBbAmDZDWKLi36BM33z9APtMW9gtoFn8Jw4ytVzv7yuQsFNXhDEZQe1WWH9HJJxTjDfAxTxr6",
  "key25": "5bKHcctidoFdFXNqdd7zbPjXBwSq7q2DjNAQEhS1chEdEwKrFKogipUzBQLNQS4cNxdFcWJRhVuPd1dURfKAnVgd",
  "key26": "4aK6rbBrGGM5X94uPZvXXtoErKE9zbXfjGFhcYsFTXazNzwX6ioVRshiXpZArgwNBRXSaqNQ8FU2vPHmU4PaPHhp"
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
