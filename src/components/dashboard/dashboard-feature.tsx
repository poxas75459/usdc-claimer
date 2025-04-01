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
    "4hZbyAvVoEwgnpCKf85zqSrT1CXEnhgt7x2sA3DiN3FgdcS6q5K7geQbuo2HsXmUk3PLCURY6abTT6MpxgDuQTzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nckf8Jq2ZfXeYzsmF3cwK3NmUWBtfUiCy87rd2vecCaw4KZHN5HvMrkJkATRp9YDrNLAzB3Syb1oz9u9zqGssY6",
  "key1": "48QRkssDZQGA6RY8u4yRmUx41PrhuiuBKQVJkcAWsQLLYA9UUZp8eU4AgLps39RRrxNHaegjDvvHrjKb32PMjM8G",
  "key2": "2zjtRTsnWMuDtB6tyQr4ndX2aXBiEhMrQpsQH9BbMQjcWnXPzPM9ti137WjTMDz9kQvPTyMyyV94ZJ2h3umvYjHq",
  "key3": "64n8fwdXyLQPNvkHGVT52Zv3n4nt95knKwEBJSKjL571KcA56rqpTcdACMhppHBkfoHKRVsWZyxCQm36abo49hsc",
  "key4": "4gbMWnAcMmn7PmnwSxxVDJaQfZf44GeX4ryXfLj39vBnqgd6qhwkTX5J5Giw4mKAM6SAwaR2yn1CFUkeMzPfz59H",
  "key5": "4qUsbQQGd79yb2SeGKtgHFrBAFFR6UJQPsj58rqBRB72EF1SA41GsxMo6CsMZ38CNkMv4KoFhziD9GefG8kD48jY",
  "key6": "5fdcT6nK3v634dG9rdy3UGGe15rrHKXt2fqcTx9TTeLcb8J3auCPxy8Rj11roDDiPtz3bgiuKt8iUV2bwsrctnW7",
  "key7": "oLVvMKVvYcBvkeS9HcfWeW3DpMp31vTqFM7XZrNPYLwWwPVQ5fNNcgsySCn8aJA9WiWtVJiJJ5Xok1PJHojn7bB",
  "key8": "4rkWtwAxHBnAzneWpDNL1zrmatGtSjPKCV9tttiPSEQH6u8A7wCCkPwSFv8fvETo8e3J2L6roDPXdh6f6o3PiWSN",
  "key9": "VjjZZt9TijLVJ9zLd25EnP9Rxqg2it72zZDnmhrBDJZL2h2k9uWZJUJTcZEnixUk5B6upySCDJN9SasZkKuSB14",
  "key10": "21XrKbLXGuevyBFk49PrJMrGWjDtNpNhvgWejk9nxUrntGz8fxF1eX4qzEPjyms3s94xis5w78E8Wof8omex9usz",
  "key11": "26fUPdLcBE8Y7kTR4VjFxYAnXZLpaTUTUCee2dwzdu2nwwFDp5BWgUZ8hzXhVxNB45mjHERDzphCDRnBS9KwcE4U",
  "key12": "2271qRNuCsr9fWYrGs7EYfeTi1jBGS2QwRZ54XzgnkkZs5xmSnuBCPhrwqXPvt76LbwwDoQ72roexyG9436rttLa",
  "key13": "kJ92gWDUjXF36L7SFHWHRCCtunUek8j1eJxKYxqQLGbQNSgiHLLYuzfbkS3FHNWiEQRMsLmLJB4TwrvmxKJ7VYY",
  "key14": "4kd8UceC1HRaEuEfVNHQo3APLmSSqSKNMvanzkoD75qWdgRjkFW78wP4HDWSjNfEKnyqr2yK7XykE7bBn6A9uGby",
  "key15": "4SnbEqwmRnvCsgPNu6c5dYsbYBbwidqBKhWQNrzZ97wPYjGLFQ1VfbdjCwHZA7H9hoRcMDK9a8yZXNFnNNjVMqXC",
  "key16": "4Xxj2k6jbZ7fBHx3R7kf2o9jey2Qpugcq3rypsNzMujeD8YotE2hUuA7KuX5Z948k25PkZ6T3umJ4g3RRpW4zDJ3",
  "key17": "4KEv3o3G5cLfKbSsenJqh6zMkFUbyzQXTMc2ZgVFfU9u5sJ68KGoZTV2VGGcZpCpyUgeDgdBwNWJjNLFAXcFnGec",
  "key18": "4xv96HLu4CZUyxctTP7QxbKk7mrbLE99vpyoY8dLFsnh251FiGWQEydbLFviktJoo16qAeFyWqdpqw3n8DkHsC3t",
  "key19": "498DnW9TRsoprVVb81tzCtteS9q1R1CKCvUndkNhYQSESJddvGEbtRZWW4Hgkts3fXE36UgNrxCcs3KpqsL8VW2i",
  "key20": "2QmFEeLGx1brJvFNsX1bKW5yvxsp6UpvWQAWdJYasjJmgMRjoj4rVAfG3xNsNioQmNkBcuRfcLc88Hinh9FD8e7T",
  "key21": "67PC7uhGZ7n8Euy8ikaE5dXdGU11GaVEnVwN3Co7vaM7LngVkn7fBrCqjr2StPjQNoA9r9G5VeQd8tRPoRBrbVoM",
  "key22": "3uNk2vXuWT2P1SSzEx4f2utgKS2Xz3P4D9XHr6QyduAYnCKqf9uYYT3kN5xmg5W5pQDoLSyK6ar3eK9DQis5osMk",
  "key23": "2JprjL2qLuRiGbUPSXnWcPCQs97GmHs8LpTyHc8njZFJe2jq8id3Tno3QrBJDTyFV2fWDfnRFqh8TB88mnaBfLK1",
  "key24": "2WZnRWLAYgSaKdi5cLiELczZ2cMKteL1WMwyHFRAWLnwpCZUYiEGqQTpmyvhSRQewYWwvxF1GTqpSqt6o5xqD5mr",
  "key25": "3aZ3QXvkwVNmLLZHMcakXqXV3hT1wioxveEtfZ8uA4DknVnZtsBsGiLAEWQeWc1ym9fceE3u4dBbgbbTwsuagzf",
  "key26": "634yp9mGE9Wzktrs2DnMRxTwk7nU2QULSe2FyrxY57TUwQd7JWreDKcMa8bi9AYxo1ywezim37H4nVesDtNFksCX",
  "key27": "5UZSrfEU5YgtNfNp6HD3uu5BWFKiBo2sQ2MhtDakGQA9tf9CAa8MDY76PMnrVvqh3VtCdm9uDoThSQp2Qfvrt32F",
  "key28": "2WEJWZr1ph1QGyTyzjFxNHvn62Nmv22PsA4iznRRXsXkPqYhfiSRRgYS6ogefaei1SgJC1hb5wAYvsnQfUqAcK7N",
  "key29": "2AbHZTMimCf75mtqEPYczFGi5jbDwFSNGMdha3EosmygLQXCyJ1PUc2DdrnR2qd7nTkZzz8fjuoFFNzpkkZHLUqP",
  "key30": "39t5ZNdB7QgW6MkqvPWjQNyiMDVkwB8xxaRevPLmx1DHz7fncXMcztsEBVo1Gnb6jdRXneChiUBbZfw58dhQAQc1",
  "key31": "5GkML4U6mfuoWmHAoDuUDDGxoGvV51fS9Q3sn21raKCvBPK7Rve7ya38YsYhmm5sJ8iDcbYGvY2d7xkXZpPUfc1z"
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
