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
    "4RQS5mUznTQZtmdwskPrLpVcjf5bPGaLMGTbNW5L4xhK4Dv672igeGXXNcQm9sdUFA5R1JJsbAjiS9Zmpx8mHFLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d2DWAb3umcVv6rZtkxHSa32Kjj83Uj4YugMohNyoVqq53c3h3AmU2DbMvcQYDgvnUHgUwG3UHhnxn4FAoyUQfL1",
  "key1": "39LpZrxQrqDUZ2smcGttWCT3tgV2khVyP5JsE9kDYK6XXutPjX1BaNLvKZvgnV513Uf9NsptWoniueH9cUqwr46R",
  "key2": "55a4EAbA4QNNojkkJ12uSGUjchaFfdh9Pu6P1rmvGijkFvWqV3DjTVyPidgiP36mVV8VH4WZJxcUhiqn8Zoy11oF",
  "key3": "YSTq14N13kbA4XMpddGW54CjNVvnvrHrrVtba3uJjDE8FV347dGq1LdtSVjSTXFG4WzcXG1nPfGbB5qQYnEiZ2N",
  "key4": "2QV7s2rPj5t57yYNZBb6nx31gg5uFJSsiaKjEtVi4iM2sp1es1heFKZEngASqPUNt5693TxeggppCFWDA3sF3fuA",
  "key5": "5fP7LE4V4BKsJhnqoDwMfvgh8rCgPUybz4U566p2EobyrUbnBKhsNJh1P68RbBsBBV3hW3arAfiyAHNuBLNexhD6",
  "key6": "67mVQXS484eDBa8JcMA8g6RnrEcuPqXLA2QRmxwU5Xahu9piuJRudAJWmdXfo5D9Z6nmkfi4dZH76SfwMXtikiGf",
  "key7": "4bXoGeRGL7sMtPC9HbUq43eDZgvNwoZzqxcPcESi4qfxF7cLSkAZjzkJS2mNVZU2j7ZZ23LBA7GHKPMyyEhn6e8z",
  "key8": "2SB21Te9caPRotEuRfPSTWPqzNG8oF6TSLB8oyELiVZEus671yhweoTGTCkrwTqBD9bnAePem9q72mc4oaqA5WKC",
  "key9": "5qPwRsuvoWER6vZXnk14uf6B3NTiiS5W28XLnTWL51HsEUtaJ9XVREXDn5g2EL326RqnyRStKv9J9T7av4kYLzHx",
  "key10": "PQKZ5DA5pfpqoL5zeqbLLAvdv7Pt2UBE8yDWDjUvM2CvxVnXHQ4e39vGzEi47ibgMpSgohyPgFuSEMZ1ScEzkxE",
  "key11": "AbEoYcTjnndScDGxZNjfbSGxP6tsCFSDEQVgirdsxGFUSn4ZxY3N2SQj2q11GQ5MnFZJFUoupKizqQv4W6EiMRC",
  "key12": "m6B51wWYWA9x9trc7E8wnc3omCBRxFDT9ZRxHRFaRzK1AcvuBuz7arqjYiqTFXSni9mQBS5thyG8aFqzUPS2NG4",
  "key13": "34y1KRJPGwXkTbvcx2agBgrt5uFHgSucdSjykd59R3xonMbXNaR4tqMALzhKmQYMe3n9mLuZd8HuwD9MeARdDVyx",
  "key14": "64JFZsWewoHGFnXLDciyHS8WNHrBKmsbYfADSLNMX2Lm1vFDtJaH23PbGZAP7vsEH4n1GnVVZue9XDBCy3PQrwhJ",
  "key15": "5ctNdNDQuDQN915AXPckTXzG3VkjQ1Sztp7k76hWTHWbQVL1rqNxoWb17QTsnN7tNipM56so58XPjUs2ZawXCFb2",
  "key16": "2JDg2A1qDRZxxhLSwAGfMe2rwTyzPovfxF81nqQu7ot65zg9nQ47gbi6rv2N7MWjbNGpLPFwHxhfzjHh5Maug6a",
  "key17": "5tVyT4eq4kv1aBSmy5MFxDQmeRw7v5mxpbCFW35kJfdFoEHoz7mDjZZ5G3jPqEdttwfW7xP6TabsBqdroLBF3tRE",
  "key18": "4ttbLqcdoDBMHyNYfCo8VJa2v1TDuVo3fRADeBYRMhLQHM8qQxKRV7pLUSY6nNri1dykF6SLf9StPC6cKaCP4bdt",
  "key19": "2GZkRKYrQ7YKfTK3z2ag3Nb8gBexqRDDXRRqf5rF4iMAnqR8iGxNGCrBx8pL2jG3o3g6ieMFJmas22LTmDd7meeY",
  "key20": "2sZivnLVnR6jL1TTWc1g2dBC8gGyhcziHuH4MrD2Ssus7mqBFYhDHzuV2jMwar5oMCXotUpSRF2zL8EMX4cqMtZF",
  "key21": "5f4XzY8ycjsD2mWoxqPS8gHTSy7TXwsocVm1BvhLSwnW55r96hjddMtFWcEXdS2kpnaBRfqQfqFaasg9cDHBh1tx",
  "key22": "dVDHeuqVK9ecP9VazCLtdXjH7cqmxFxmSQt7huu5ZaGUsqasgLoyqkH1DoUmY9tMsbtSJxGCwBysz7XCjY3YmxH",
  "key23": "47iPo2JTsoHehQmofApFcXV1Zbob512qECkS14JoJ3WLVpAwbRKZVun9RSdECJXvL5c9ipwADgC2JV11qULuvRTz",
  "key24": "5PZNV3GfcMJJx8iFds1HvSzZXxMyA3R7j9rFU6Kt2v1nG6rsBnwEhi4d2QsXssZ2F3EJgAVrX95H1nbHLWegnooq",
  "key25": "GaNV2FSRjFdrSNZzRZMnY8W2gFyHJbRYmozNyzAvB6JSUqt7YYUwuoAMduHYDzSjZ5s8qrBFfYmvgcrZ4o9Enym",
  "key26": "1vZ2J6kK74St1DuWnXFgMjSgdwR7Wx3A1zjrL3QPqs5CBKpnoDCKK55sBfu3YnZ3mcC875QbUJ7qZkLWm5vyEC7",
  "key27": "3z3pbxcec6C8JWsSwjgg1FJtLVsWiuLwrs8NM9HHAb3d8d45fG2EkhcUDDEpQccCKaghqx29YECjugUVjJ5Xqjar",
  "key28": "4N59qaDPfHahbadJ4sCHiRLbhYQB8AiDh7xtaW9LWBmXcvmw6M6dNAQb8dVee8VhUiJB9Wj2EnBgQWr1VKHqHmsf"
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
