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
    "2jqvYyen71247CLkCoKnXB1pWYep55dTKzyUCHE3EJGdbZe5UUHd1GxQeMgQ9W7AdkCC4GRKH61QKPW7vaxykrvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w52gB3CZZ2vBC1iatwKQ4UGqvufPBz1bQtdzSMgaWTmWMkfekcb2MPWM4TEFMmb7iG4fUVkMpwDmk2kB9fHWkdZ",
  "key1": "4ADy4CntEFrD56m3dcz2VCLeRs51CFShRoiYPHAEXYRzuRrrFpUitE1ym4iT2Po7F7zMCkS51UCPmcwJAUkWzdeM",
  "key2": "3q6u5vL8h4xkVLu3DnPnLs1tRSAMTY4wDtVQ7KNB1btdsNQ6wKDAggN29EEGC7i3sLtzAx2s5pkSmypKbTvymKY6",
  "key3": "3KJhstnn4z1AjuyKgSAPG2w4igHZuBQAh92QCKwDNoNhuufGSnFdnhPAs4Sk8Qqu92hFeBh3yauheipykSCvWc9v",
  "key4": "61xTRe7CarrdQA3e5gMp5MtrtMGzMtkvnJfaqQqw6FqZJ4WZAMo8TH7hfdN6wNToYqFEtUhDi8cFhc8yNZRBVb32",
  "key5": "2SSx3hykL3AxLbA5szK9SZhMaEZWvuSwdEYU6LGeu7FeEEtcQzoP3vmQKg2dEK2r2WjsVG5RjxPrbnGR77x8kwGb",
  "key6": "5myMxJsEfnjgbhfdpnhFw4nRRbg79Xnfwr69RpBEFAvhGitznyhTZprf3NfWfvDR5n7d7T6h848nJupzT9TRSg64",
  "key7": "hto6nKBuz19Y1Xy6sGbcW192Mjh7MwoMgEHGzX8Qf93ghVVPnH5DEMCFFsPzVuosEs6588EfvNRX7emdWsvEK2Z",
  "key8": "4MrZQFRpVbpT6Q6kXfKBLHyy2srp6ZxmfSSLHNmr4TirwB9eraFGFQYtWQcZyrMYcXMGDKUs7xwv4NDfxGaqsowo",
  "key9": "2b2MRAFgHpz5Nk8mDeYSnpuRoY2uFZ7q73ty6q6kEH3dnSfCfxgPS78dP1AV2wPvqXphdFt2Zhowo681edU52ros",
  "key10": "axCxHqggyV7fTzAfa8Zf3V3d28YxS2MHUbgde5HZLhPWyvajamtLHWjqYkdzFefHeSfPK2JyaP5Ai7JNPmvgWAS",
  "key11": "5xMAusm9SouDRppG6TcbeELfgopCgqXyXsCDCk9YQHwYBkFNZr7ahQbwPKZ1rHCHouw86WHJAGM3pELvaR1eu7wA",
  "key12": "2zF6X9G7DA9LeKG4GwyWDs2nSn4TH4HRf6Cq86KtQ7s2xffF6XKXca4z6V3oFFFY6EhEPusUZRMKxsbd3cSxqn51",
  "key13": "2nb2Y5eMeqCpCJYQMz7B5QAQ3kNZ6jhAcbW9h2V8Ra3NKHr6k9Ys2tF3y72nB7JNfNFaqAuRiKSamUKuetcLi8uC",
  "key14": "34qq8A3knnhBKqhDCBLHqosfMpVzQZpipVfYM4FzBqcVCETwSBwE2NeZEP4TCC4UA6yxNC7r44XeCFrGBh8SGd38",
  "key15": "62zkowFAdmAyFaroXbw6k4EwbznUiD3HwdxTFuP3YMoG3qwvf6kf4HLFt2eVj72wFSY5LLF2KtC7XJWAS7hckvg3",
  "key16": "SmYzEDkR4NbP2g9ztAs248zyW7uUfxhWroFk2TQEZBE1ne6Y7P3FA5Y6DiFWq4qgmNNqrrUFiCv9LvrfUCkvjxF",
  "key17": "55fJEaAHYm2Ad85LSFwYc98KbtmZFjhaFinAJ7iW3nC5SJH1K7Nq8LdZPN3HaYRee5EkNVYKJaqPofNPnxbGEBot",
  "key18": "565ZqEsp5CQTMyMRhAGDKGtvSS7KXbhgA2ke6mFHNrW19rqHbuXSrtqVD3wpGE4zdQAmwQ8yuLAG6SZQn1CZMd8X",
  "key19": "3HRTjYLryAjTQFMv9kkxiPVQVvkURXpQtR7mTknx7TRrMH486psKU3bFGpJMAMYEaYAM3Hr7bde88HHL7wSk9N4U",
  "key20": "4gJh1Pr5WTHzEPcYQ4VBFJoXGs58UYK1LhqGJeBWVRNnrHXsmhyLcvWCdD2ng1BiUwidbQLzNRN46qqg3Up9biU4",
  "key21": "5nvX9s5qCCBW64S1D7R5woyiiBDrW2j5xz3D8iRHYFCU25D4AwjRU1tY4uPDYXawQ4Y2ErV7mu1i4MWxghQgeCnn",
  "key22": "5H1W9w9pMgkp1STKt5t7c1SYLJ5PAJbaZpRaVJkPbjf8LJ112UqQ9pnSz1XQxPWDAP5x6LfyS6hbum8UbYaZ9mm3",
  "key23": "3tc3oAkmsyxqCU9amahQguvtxwPkwFXrMq7FTzGY1d55UHeVhGnEqHJo5fZrpmuudsdhKQYvSCi13i5w12Qn64AT",
  "key24": "2Wd3snFUdzsD3z98tvZEPCGApa76A6yJkqCdXmoftfFAQe7jaTibkgSjWVVJQ6Y9MjCM4Q7zmjL8fPV3oXNNjDKJ",
  "key25": "2GzMHxqqFigPhvJqCm5kr5ZZoXS2nqa2DYzEkLc5RjKt1THgxn46Kk87HysAnbsAjL7HeL5p17RqFw3FS4SPyJs3",
  "key26": "5iUbHF1TivZtKNLWEw5zJ6SLWFpdjZXVZtFdZaNF6ScMXiZ6cTTUQhoWYrV2WuRNFGkVqhgiBgDsx5AzzAugwWrH",
  "key27": "2Wo51fkjuf53scBCFhy7EnZHc7mhtjGuJvEvdfMxGsgWUFkiXUy6TH7QEhDRz7RHCDDMexT7iUHYjryheahccNmU",
  "key28": "4x1Bg4Us5xaAnrPS8cWnTm9Bh97a1ZkdCS53ZdL2NRGm29T39RWViPCHouvVu4RpZaxTMkrXZy19iR9YpUYtYjEp",
  "key29": "3PgCm3JGQ4Fki3pQGe8NuosYfbKQriQCxXUiwD3TsQXQNTscxjiBihDMT6R17FT9bFVfr3J9dhnTQ7JmgiU4AZu7",
  "key30": "48G8CuecZhDi594jZbQSu8NUBo2nEzznDsmDzRpqhrY8obJmPsExVFJDWDzjEJDp9tNcQhb7reJbajGJPYWDGL9j",
  "key31": "ysZX4moZkoZ92G4WF33HvCehhyXzXsys3qwRhR7wMUkDSBpMqRD34mThxfKpAX6G8aBx3LmUQhJfjScL5a2p4Mk",
  "key32": "5nLGvvy6rEy3oUhnXqMbubT9Xck27HzyK62UtV8Yf2mynESAS2bJXZ9D4S8guWyp55DfYZcVAMkoDYrZjzPaKpB9",
  "key33": "24fyLUq5dg42NmGFhXiMwykm2EVNWNg4Wsqu22zGjPrpyaWVsJRmTxvAKZ9STArPQznAUhrsLN8T8XACNoU2aaac",
  "key34": "3tfEgBxsXBeWD2uAHtY4NPBd1Cqe1WU9ByhANCKKmE3gNMkxdBQCitumhnqxRUmMh3bkz9WttDgf2EYNKduXDt4A",
  "key35": "5ob4u21hfMs5KiRhS7GxckiLZhALHWae987QD42gmK11gXF2FNsHLeiPr28uALaihUHzT7jcSG2127iHnAGErHiS",
  "key36": "2BcAi6AzVr6dNg9oKkLF57pKS75bH161RVVXgD8g2wrvzLE42zbUe5TMRCMVTBFS6oDAoV8DuP3CWcf6ffW5vc5d",
  "key37": "3a8cZrpwMfLqii48vBcmNEfxDANrtAnjdncsyjYzSf3LScQW4Yf5oPerQnnaMZszhLhC2tMJyNvWeGNditMm6EAv",
  "key38": "4v131pTJ4YvrHdgFjuPsVqun7JeEHWtfbYZW7EeuPmuB5etwaW5U1fdHeZdUA5Xo7Hy2StfPbjHeaY4WqzgFxA6W",
  "key39": "bzsmQ1AwfqJxYVSAHTNL57EuqxG2gX1nqKZLf5CbQ3aQ2tTQ1b4KzWtarmrq9tk6fa2qNVgjjarz7SF27FspWpW",
  "key40": "iYovVxeBPUk6SJcPTw4ACNnWFcU2L6oUPFCSbuJRwg4eDNJyawWe4Y3hnxe1D4jr4L2UuRAuvQJWHzznRXRbjxS",
  "key41": "3P6Ufwx6pSybhqr4Qg7VNgYqvCjxpy7n7Fv115WSg6Sf7c1Sz5T3Qd9jusyXXTwUzm299srL59ey9geDgXPTu4qu",
  "key42": "3CF9JQU7XWNPo7heNx8pGacskAY5UesqrZJ6HcWCEMb4Dtpbfy3VFcTMni9bTgFGqRdfNFob6oSDwunERQnEDwqk",
  "key43": "6Ms1jbJGFiS9rSHzgEuPRGG1sNj9XrXMNqeNACt2w5ALxqHFvq6Yc4Si3HqSs8ZHMuCSNyvBDwrahBazRaWipNs",
  "key44": "4UCVaq7rX6zPbiR52smrnZXXAsPj7VEHmQtjnypBGhnBQcrS1QfwnKyYuGfFjeCKLipfnC4r5cArBf2pAdQaMdDU",
  "key45": "22CemsQEzBFenfbCoMrH4zN6VrhvSyBaHrhaBEseN1x1ga4nmodMJFB97rbEx6smgNVqBszs5n4PV1azyoTsFE3o",
  "key46": "2qYmyhHmMktV5rwVrPPDp3ixEgRTUHXYHYNLKcRE62GPLSWtXMXfA7mvkY2iNbeBuBhW9cJAJwXr3P6LfpFTCBMZ",
  "key47": "4PqvMYPgsh2L4soMgZPLxHva17KVV8dgK4fCFwdTSLUV1oLigS14H7T7udvrxwY342M7RKrvXw9MWN1RQUxgGS2J",
  "key48": "VSsZH23DUR7BbTBU9L45yTaKow8Fa8serTGPT95qfJqNFobzzQgCRZhksNSfh3q2BMr7rQZeop1ZfdNEMsedvjW"
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
