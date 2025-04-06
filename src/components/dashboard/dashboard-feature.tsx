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
    "5pvewNd1J7ERSNEnoUbMWfkqPuYnf5ZuTWq9yVDg3MXsT88UGm3CyzEBSQMrSB5udEhrs2SsmUq9jSPAhgK5GdSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qMuibvG7fgQT8duhvhdhcJrukK32jZWDL2ogEny8xf9QcRjE5RQvXwrxpjzrG2dMuhfeuJHJpQCHJMxuYpYQVZW",
  "key1": "q2sMMR83xcqajuySZXyYqvMAHppFCb36aYbVdwap27vyWNxbEXd91SiMaLBcjEWhGCMS7a1Yb4m5FocvzaCkUhB",
  "key2": "41hpCWejSxREQtLoYuN17F9zd5WG1jiJEb52At5HWnei4LTWaY3bnVzA1TYF27EdrYiYhgkZaSi31Szk2d7hzce6",
  "key3": "3otgY8FU81uQVUiMLBvknUDkLU3dQt3ewc1ff9paFYbtWgsjtmUVZgUaqDa4dE2baE8cmqZ18XXqWZS5c6WHD2fT",
  "key4": "5xJhPWfJbGwtfwhJ4CUwhEo1vAJa3jLZmdnVb3qH1AwNYrAZgRgiAptxrT2u9kpXgwpCaXkabQafdK8a2iJYJb5",
  "key5": "Tdcg4SrwX8iPGa4gyBjDshkrDCspzSJHhSKnXLmcrWq3XG8CAZMGhzTWzMTfDoFEwpCaR3ywuVoSQZjtZqYJcGH",
  "key6": "5jH5WB6N95btKiTtiaS7cP12a5ckc4zTh6bE1t18eGTwhgHA5pqQFuBwzVnH2fAmnGMWNQ1W3rakFeyyADhwSLTv",
  "key7": "3uKrZndW4Ji7kLLbPHkWqWjVgNwmCE3JdxXyB9gcpHkvdJ5uRDrw1S3TmVt5saD2dBhBsrpids8gGVE3jBpLf8ZX",
  "key8": "3oUh45qkdUaX4FSBMai6cYTiXLmfD3sgkUBKmw4DtDqyqzKPpvDNuA2A9JcbNQrxNdFKwqrXf4xt2nv3iJ32bCGt",
  "key9": "2z2BZQRS39JAgGi4apnF9iHCupaLJx6Fem3s9YbtU8YnHDA7M5p3Ku3VpfYgHzyZh7UDmoNqbgV8gWSJn43BTUte",
  "key10": "3rn1TPX5PVsWjDkvqTR7LCzchCH75zGukNZUhSzfo9GyM17UkW1YpXTRD5nY5NvPanAL2Fx79t6tDPhUQYGnH7XN",
  "key11": "3KkHwmuzmiVg4Tk1hJkGcEVB4i1Mm6J9iYmpABJiouLPmHxuhchULyTwz8NKwR8xFsnRy5UrBymWzaHBUR2foBn5",
  "key12": "g5QGombpRe3KHTTc3dvHNz6gZ1o6oBU5fSAdcDHajSkTTDbusb39oWtupf7SgzESovQahihuHwALudzcuhpNhxP",
  "key13": "4rCipFUztLp2H8G1EqVvpxaWisKa66S2n6S1iEjBZXbM1V5kyg31UgQecsJzMGQMQjqgAP4rax5M93oPgSMj6nf7",
  "key14": "3BCZAmmjdU7EVzie24L8ytzHN67ccGompWU9mZX1MVTGDznNiwFDnMUZAJNVihvSNorgqTTcMyrVB4JEHRyJVxJt",
  "key15": "332V9zy88Db7mkZrzZGSkAFhfjkJkrPgk9j7YPWFsZ6mXnptVqsskkjjn4Kh3yLjBDa9ch5VL6tif3eZvi6Uw7rg",
  "key16": "4v73UQGXfa9JY6q3SZRr5GwXig3dEc1EJun27YcLQzqNMC7pVMNHn7mUg8Edofh33bAHwbeNUFiTm53gGaApcui5",
  "key17": "fKmW9adTojF7zR4U2etgsTHP6tgCKSV2We8CzKt1tjkK6nJtPpQ78Y2EcXTZ4V1kopm8RB8DdpgKUpwHBFP8XKg",
  "key18": "A4GgheHYnz1uwBUwikq34F5FTpF4iN9pwgtoPzkuQDpQcDGt1hz7ZqxEv1YvL9YYsZW4AxxUvmtH3DnC4D7YPHQ",
  "key19": "5bM8oYzaAwMtakT8vqvenRsV4GmPknZy4QLnCcxD4uB3kzARB4riSMBeAHtPZEjb6YZ76NgvNaZcLcwmWJsBhnyd",
  "key20": "4F6tVYj5JQasUHJ2huecK2HJmAiT8vVgj9y2r3rTZUqM366pvbDQGCXwvS4N4xbvBXaeEMhLFjBbqgr6BSiNqdL1",
  "key21": "6hvCAtcuVYmmYCFhpGffoBz2JCzapkE6r49occTeJHpmBtc2ypam7go2W2pB2WQBy3gKzxSQgYgsijAHZMMiRjq",
  "key22": "4Drd2XKRhGQb1t5CG6K8tbt7NmopDuL7B8akEqsa9guW6rG277pJjAtx9gUJEz38vbAJWMtukHRUYpyAUosWf3Qx",
  "key23": "67esJLQT6mQ4vEJ7BZNmbNHegVeGLRRqL3fuonWUGeMNijmozeCBPa8CA5RfZoWyV8bxd86jHKr9ehjKGjPdwefv",
  "key24": "5GT8TDfEpyx14CpcRSkFGK7i2QK2gJPZrYwCwFAvPhtuJD77KNNoQLquNscYLirFp8ALyKV2pFqvgHLbsDbzwh8P",
  "key25": "4SVawuZNgbxvPX3eRTtXyYt88X4uhHSpeKB4oJXwDywZ7Lec5mCGqrxtJk11ZtfFVr4aHXxsCiAVqcvFxyQn4M7v",
  "key26": "4V6LrxQaaK39xUshK4PkaqDNtcT8hTyNyJFMhBkbfr77aZvC8zNtFBCsFL691V42ZSYHSLFxcSYdn3whqTuJZW2F",
  "key27": "3WzjrkiYfWNbspDLekiobQKKAGVggyGC9CGanTUMT7igeLQRM2ZJrk3JSzupTgzNnq4wazZiVSa8SFZPrrUhZdh7",
  "key28": "636a8r6wYmE75FQLP5DYs9KyrKEGjPyRtxAtr32gMyZmoHpHtVFwZQDYeHnDzKwavYmfPuiD1dJuu6YMmXJ8xU4q",
  "key29": "2L8VvCaoXJoPEBixRdWpPwn7rSghPSyxoPoia3WNCAceMYdn9KYJbNT67KPCx2eyw94eU819XP4VGL9VWioBgkNp",
  "key30": "3sjmEaXijQv1wEcGdD4Lbx1rTYyrCJq6RErJJZ3rH5BNBt8GsumtkH5V9KNCaWTip8LV33VmGqT1suzFNPBTSvD8",
  "key31": "5EYxDFjAxaJTjBT1SK3j3xfse7sRAdUnFyQ1iAhSV6NNxh8FF3rFo48YYdBcmTPv2Yes7ZCEXYmULkaG2gonRNWw",
  "key32": "AYi3fQbGE62pryZugX2cxpXyHSi86yPZx61QAL8QC4dBk4zv965GS8WJCWDPMBcTjuMkjueLQpJPCUZ4CkNqeMv",
  "key33": "3Bjth6sNBMk9SJGmRvLkLCTRKicNYQpjeY2vCavyv3zLciHutdbbWfv3J1HXQJ4tP3qYZ8iq3Djy5Yuxi5Wy2DPh",
  "key34": "5G35LHBcDow1dDZsddx9vYn9e1Xj9o21MJy4a5AcDXrDKPSf7Uh7q5PQNCWUceDwQuJBNyiopASaUPY7dc7X8Ss7",
  "key35": "61ctemA6BmVG4jNyJ6m3nBJL2Tti7VvF6w5gtkGJwALvGbPkojGeeboVW15TbH3L1fmSRKdePaH2Mw6PHY16KtHH",
  "key36": "2WtdxKUg4yrvfBUnS2rja2CV5QeD8tYBPoe5Kcng8eXtr2BDNna6EFyVm16tHniZEjDb6JBjZrLkFWwC79LLkhWD",
  "key37": "2f4P6cNqJdGHUhMNbQ64mEVedmyCf4nvEA44bj8CdpHVnjykYYKpcpYf5ma4cuAGsfHJ2kweVXvdYrULBYksR2Xv",
  "key38": "5k7f6mcCWUVQRpNB3qi8dvV6dyEjQFUMJ2boHaPHXDM7kSeu8i7n1CRdP4UY5YF3APFYKHRhs9ow5vwnkh4m9357",
  "key39": "4Z6dJ5KQKpy5pw7EkWe8cPE5ZrxVNRRFcoKBojCteLhL3XkLmzpDofHx6iXvxZc3AwYPd6Jx3dWqH1xGz7RjUrsf",
  "key40": "58CXwqeNjRprDRJszoiLjQfoHhyhHTSXpt6rrmQk9VDGpMGpMcRzb2x1jT9vtFYhi7NJdAMkGkcgu32A1m963uGz"
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
