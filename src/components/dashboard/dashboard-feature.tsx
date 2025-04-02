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
    "2RqgNYEDGKxpu6Ry6xPPJTAxxdTWY4s4oreM2YW2gqGYwAopsimm3swaY78Dx416VzruPeGe57Uspm8Ux6k47KkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JVPLYUG1Kp8ACdthymZXAXWUDY8k8HAisf9W4DqqodXjchySZwgTULzhyecivLMGcjgLmNMbW2yYkEKZRWtP8Gd",
  "key1": "3XKrooK5g4x52EgLZxqCsHzqHnKhcpWNgR18mDhGMPXQaUiDbzGpWHLDkePrAQVS2U8jYGKWkJJzYBsfZf8xFLen",
  "key2": "4ftwi4rfjhQEeYAZjBTUYKJ8CBAmESPXiRYesNqExK9akFwRxwRjMcFyyDC8b396yewMpeghng1X1EooRMivuPr2",
  "key3": "4WNM9ufjj5MEmKa2TzoEpNUknyVPqiiDvR8Kf4jBVwkFf1EeGN92asJocLTzbxHc1Grc9wWzB1tjdx8gxmoMcV12",
  "key4": "5P5pYeUug5qFdwf4nSZHiSyRLo6o6CdpPykdNCahdM512xduZ7snHgeeXr7yNadXhJpZw9z9u1X3DNuJP6xWoWR4",
  "key5": "4i8rWeEu8cUgW6a5cZPDwGUSBV5CKCBaKuL7cQuwBA9xyxMGXWiWPLsN7UtdPBidtyyTAm675XUHm3tQkqYz1KJC",
  "key6": "ajpmwXdpE9xL2AiTmq36BRrqFhegSfjcgzL6nDZzz5oQLV89t9krDBsXvZtFNZMkQUg4jFh4AJx5kD2DzbTht5E",
  "key7": "PmZwsKTux46iSd4xtzcbn3X4sNoF9efUez7zBAbrt1mZ53Fv1kbd1XJ8iMQ8EauqSHH4DwoEMKU8NY6kUESSeuu",
  "key8": "9hog4Hanmbb4YqpoPNzWRM9jxfYrSNdvXnw14aNNAJUCXF1ceHZkEQSz21Q8eyTvGxy2R8v94yH4fTuMzAiKT8m",
  "key9": "235ZqV6GkA3ZfhdmJqpDsyxqRC148cpuqU98uPAz5dYd7afknRzf2c1Rq7X1Fc3GNG2pc17ziFNY9yRKisiCC8Mw",
  "key10": "4EemQBkqLQ9ZrScoUBjCojpJYMHMk77vQe2cbzYmLkiN39ewFoqNggw2yTwQYJ9y742wCTnbTMSqBtum61yjSZYv",
  "key11": "4mt1N9vx1P9VkDpgaZtKEW7qRVp62Qyi8cToNJ9bzy4aqPVYPAuABFjjUHRqmFziaqy7xBrtDKq5xM21KRprNgKs",
  "key12": "5pTsvxC88K85TTNVKF74WJ7LxGEhmDmALmux9yfWau5zgPnEdgxJ3Z93qNmiBMdtWe8YRyDu7xP9grtqAzj1GwiM",
  "key13": "3fGJ9nG8apykhVR3VfREZWUuJWWhq4A5Fd4tLrDvC2SR6BPoAS8H67CFjmd82ZKpABtzsmzoBT84oNdH6XETj3Rc",
  "key14": "383N32JQBXm8oYx7Ai25GjLQMcTUonXPG9PKE8npemta8ULb4Cm6zv541p39zZqMMfCEhHMZaf8LnBekWiUoUnMh",
  "key15": "3zdmYrrNQyPihVyU8Cf7xewfw7kuECy7CKigJPjPXFe9FxmbN2NPQpMR6GbqHpYD5NiF2sLgqorgUpq7LV8q7qhv",
  "key16": "5h2zPMu2E9mfk8MkrjCBdogNxpwSgGmWNW4zK7A8Vh2SCDQz2oBVfSX82Sc5A9nxTr8HAdiAKbg41NmMaipwVdzq",
  "key17": "9i71fSmA7TfD9XCH842QSSqJmdJtXA42aBiMRtm7Zr3FntYjYck63Szrt9YBW2Z8htFD7bUy4skt6yo2x33jqC9",
  "key18": "5ZAqcqjMiutfvgS92rmrvGvjoD3iXmRjPxLFh3wV6N3pBNKUwec78zokQFHJptyk4Y8Z9Ju5doE69cRzaBhPazkm",
  "key19": "5eKNTQhPzMXRb54E7bTAYJ9BhAQGCLQ7667Zy48fww7yVoJUDTeC38R7cMU1jnmso8i1RF8GbvFHDJukUNo23Trt",
  "key20": "5Jw94mCB2ZpFfPssyPhpBZGFSM6Dv8bm3FdEDnRM7cxD5K3iJpqp5efx1cZxzCXUMYFCmXMPhEgar4GuBBpjbXhC",
  "key21": "3N1N5giJ6VthgG4Gg34eWDCpXCNXRXoJEgpgNFgYRif7irVuCFMKnn42DEKmooLd5xGxATnAhssmyvJdBUxMhVXp",
  "key22": "2rkadryyfFc8be9RMYvDpSqpr2n8fDEecTRxh4T4BfvcRcKW6MtkZq55KNNpEFo5uyajGJS2Vn5CfZ49rfD6XfUf",
  "key23": "3Baar1jv7i4eDbL3LuanEoXJbSQePfCq9D1Awx4kSTE6WcWa8LJYdmUa5ASdraZ8gLvBCybAkACKW8kmPfkom5Ng",
  "key24": "21xVLJBQy569HbdYwKoG7ZdgnBCvoZXSFVfEfjDmNqapPkbpVk86P9b82de4SW72GXo7ZWZDqp49Hr2zSr8A9tFB",
  "key25": "4cnMaCKdfgXoY41bbfLWGJKCio22vjhrLe9fP6Hhn5KQA2sGzEG8PwsZ4xZWYo4PcZCg18FLhXNC5AkGLxHxi6tP",
  "key26": "5ZdguvVvdkCmhmo1k3Viq3i4iZz92NQaCXzghEjqwBCxe1ZMAQT6VKjf5rKemuj74G8ZzYYZGtKFjfVmesigeH6i",
  "key27": "2GubHQksi1D2N1DnxtmEjQPiSkXWB9yqyjMvABRtWVstqpKwHxPY2f5JyNnCW3czC32tUy1zxdgcVhXx3TA3kguo",
  "key28": "5fSFcTBfmkT9VH6LWmjKinHPCZhGALNsua2c62QNgSm4ZiG8txCRY23YZQjFw3DtxJTbXwyJkpjFtZ9V1L3bxeam",
  "key29": "2bmHv7snAL14NNmWvoQfvJWBEv2hWfoiy8tJv6RH8pnXwmUmJ1XQkm498sBnR8FnPcupdYthvmE19xYa2fzHP5gQ",
  "key30": "5WCrmDup5fPvWxg4hEc9s4qqUwv57mQiLnmjXknDjXchPkm2tDWztgDEAfkuxUCov19cYKy9MTWEW5TdhFjSXdge",
  "key31": "5u3VerGZsEUbdH7WaaM4M9kQfEE4pKk7FWVSwKRZ9Q6hxHaTuFsnTUhJbHoyg9pvHaErtb8sr2xbcLeA4BiXXn4b",
  "key32": "3216t4t4BaBQbDKzeM1u6taWJSmDh6T6LugWDTLNEHc6gmGZgbK2YZCpJVL1uNfaC7ZgbVxUje5Pj2t3kQC1TNUq",
  "key33": "3Q35Zy8Cz2Mh96JQa3UChLnzW313Dba7oaPgdeX7TAkjFNxHgxyP5caBKJqV5Fn4Xt5my1S5Ww67axpXJ5bHc77x",
  "key34": "5zq24XbJfZPZrc6L81ozz1JdDsJkWLJZvbtnEWXXniMhi1Nzek95FADWKYJRDDWxmokPhPUDzRoQ2f263LGJimCB",
  "key35": "5sWvd86CS21Vv3B3LRBU4shsxkSVtfmpS8JDDzBBFNTTRyHMLtJ2UCJz2yypoEdx8fzyxqmcMp1LFnfEFCvi7wuE",
  "key36": "3MWDzMr41rqgh9CK3M9V8eJdsdA4LvKkmnN9HxEMkkAT5XkMxG64uH9v7UfHWQiWeB6yu6zBG9CbX4KQynkLPjwv",
  "key37": "HNEzfpT8DZB4maqSi7PC5ovhheno6XDrc2YeUt3YzxxoJUBjBCb6XCHVWp8JTx9S8pV1VEF9jUSzNjT2jRXeh8R",
  "key38": "5ZmiMAhErpZCtoKRbtBahjwqV8yToH5Wqzhfd1TPMdoJm9kFSuJYeidN7AXHLNxsRbcQyg6uKu4o3JF1pNCwALC9",
  "key39": "4aeRZ5WXXQy1wAijeCyWd1ooEuKZxDcXTT5cPjocSJWRvYaprgYV16xmyyBjB9wsWcopviPX3Rv5MM9SkLUjV9PK",
  "key40": "3UTuedS7AXsk2w1j4B7yMsjtYSZAYpiAwd8boQvnsd4MoZgHB29svPE3nzFcZ1SUN6Q3yUzNssFRXMmYyrxaw8qr",
  "key41": "5FUeVUtu2w5gavxdwkWKZdynUvgaossT8x2RLhQantYq3L7GnxbZwbEaMzxVBp29yab42TFSBQXKgqogyGvWfr8s"
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
