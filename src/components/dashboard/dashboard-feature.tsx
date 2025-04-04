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
    "MdiCwDz9P6V6WPwNnyur3U8MCyWT3T9GptQcsLWey1cPFrpuVTBinHwZmmga8zKiBbtEAfHKMEHywVCScXXzof9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d6qgDxobcX8icAd58VaBDR9dXsrVeX2jB3Q6hhCJ5UpmUWKZ9zdG76snJ3SnP4W42LqyTqDcuoALZHzyviMqQMx",
  "key1": "c4FcuLVcX4TA8hWyY4E46321dSdNMkEKzLz8pV6AFi4w6p7nziPdFjrzwXi9BNbGLMC4U8uxwWpSaQTi8SPoHcX",
  "key2": "UQhnY5MZPV4jkxRUq4d6TWgGp262kzgMJaqFvmDXNXXCYQhvwPTqojQZGVN7Upw6pHCnmTwvRkVycnVVt1CgrxH",
  "key3": "2D92KqUi3k2MVPGZQzsLwVWu6WJhfBP6EKQeGYe2XRduAE4tXRd9RrTj5deKruuQ67B2ydCQ61ZZMGa1V1nk5qMC",
  "key4": "2UWXLdTTSpFZDB4RfQfiZkQ2UR89PGuEUeAXKUduVabvwfu5DGfsK5MdDx7ogAJoVLBKGcTpHW8wxXjtgtqN7rXt",
  "key5": "399LpKfcSL8YR1fdKFixCX6XYr88Z4348FvADb2BmM9SsnZkjfB5ZB32LrY5oBR8C7qw74EWKs4YQuuoZRXXdyRa",
  "key6": "5k4fCDeWBX42ZvzPP4xzSNVEtoZ8w5FSjfVLRkGitSNqmQcSt8rRmYY7hxpw6V9YmuJ7s9WYkESNbyPnF2FDBR1b",
  "key7": "5oDcRmPbi4BdaVVMtxvXL6572bM5nv83oGdHsG29S4TnykAwWHoNXjwHSaMZad9Y93VvT79y7XXz169nuWwUzuUB",
  "key8": "3Zy3p5oyBzi6tTBxJnG9QX6LXfY5vv2Yoxm1WyfHzDPoKavo8pL556yvRFphe1a5QAs7NXovHLP6VtzX6y2KCRbT",
  "key9": "5JczJ43XRY4w5eAhPuy5ZhvcRgepFKbMz4pS6MG4oth57vVEZj3e7QZRsEbmghpvTQmmYy1hgbufvHxyWwD8UCv3",
  "key10": "4HVrh52vAoR4Sq2JjsifZo4UPJkfhWbmHZG9hVS74xBe72SQmaoxierSVbiLb37q3ZeVy3fUrNksTRzYtyQ1TS5o",
  "key11": "5WvD4MiikJqypwLBy1RppE1SZDMqtHRqp4JVHQAeifSNUYbRxZWoWJVnKZop5h6WdrDEG5S6NBe4PWSP2mYT4EAU",
  "key12": "4DMSiYaF9HUsT3PWXAAoWf8c9MHuDjk5r4mHaoMBPszeADMWhW1zbNBYY8aWzq9xXY8RD1QXeMsQVbNMdshwEcLZ",
  "key13": "5a45KsWKbFJzu2gfeEMMqrCMgPaEiLCvgL7DXSo6wp4kMkoeJc7zYW8qmpbJbtYq3uZnWww55EZzbhH3tRaXR3cp",
  "key14": "2d2xMFRjAq2xHAM2ckp177yudkF4XpDKsQ6AwG4syBZJZ9JyT64eSTdjKG43qxJHxU3ax4Xs1A83UDqAfhxLLpe7",
  "key15": "3NHckqWL144LtaXmdPsaMAFTmNGvSfkzBBQ8rxnzZC9DPEfPDDCC9kPU95AqkUY7dZB8XEm3yj335c35hv9yWKLK",
  "key16": "35m8FifK7W3LYotQqtLGdjRRhLvK5r46uPToVo7KasCFJm5HWka2gDoH2k3gqwAXagYwr479HAHLExBHcsimgJms",
  "key17": "5qN6FDwP1mGveYDodgNNJYAtFXbMU1kyLKgTYTR7qysMocbUVPWF9o1oVaKqcL2upqihpddrPNT2opQXG227zmaH",
  "key18": "3JJpEdDuKyPpSuLa1zmo22vnNUtSPVVdb8kYaiTwFSaLpKp9LMLGA1W1qEY2MLKtQMzMfEG7cUj4YM6ebEm1xaq4",
  "key19": "3zVArCAB61Xf5buj9c5hfKUuogXc2vxhJ2vSEA5K9J4MfWRrmxzpFthQWha3YZd1t2N66LbTTBZ8BeFHbETTUKaR",
  "key20": "2ZfUGG5q2KAhMmvPvf3L2Pj8RRURPpmXfvq1chB6yXEkRUCoSQfhrCYfu4iyrrER3SpbU2VMhNEjo9vgmmtWWjY6",
  "key21": "4dH4gpTLn9Huybdzwh5VV7tn8Wtq6MHcqQZHxpTeVUCpUNZMmT1Yi7kN5uWMnnoqJW97yyw1sFs6Fy11FBEQ6RX3",
  "key22": "XvszZWXDxZGHg1D5ofjqyHFsgij9ELaaPhGdR6rziMNjvQY7hHmhPPy8kuMJLEgnyfE8BzJDay7bLJdm97psAME",
  "key23": "3y7N1KxZoYzBsXHmdeChaCPR1MXREeDQrjQjuhbDfZxSzJHb9d1PtBYRpjnZ9GAfTKHf1Yv5BnYR55gvKesFjE73",
  "key24": "5NY4SwDXp6NKSxAqLbWDatNPf241DdHpdgLK7MoaLfuivMNNPYw7yUf8BC8NKtjcha26hNdAs2USc6dYL7WbKnjB",
  "key25": "4BbtpfEFK1ArAsLSAX6dynKQq7Wz95LPzWoEzP7E1MMGFH15JzQDzDmtG3emDkvk9PWKLmcUKBME8GwQWxdSWj5E",
  "key26": "45iLXf3RDtBnhbxMTrao3ZiNYsU3idf8prqv2CKmLM9RV3Pnh2wd9Pz62m1yGcP3KyhWrKdhpLUP26cyNGbX6tzp",
  "key27": "48VztPc64jBmnXNGUhZF6qBtzjHY4FDcobbgpzumV6vpwSbWkzH74nyu36WDrJSz4AtT2AyvHG3LjwuaLFzqPS3D",
  "key28": "46nMkBZjGnHD9NfZ7WTK3jmcY1P74wYCJy1efCNTaGbQEgjx4tkMgirdaaVkTEqd3thAdXoLz7c5js5npQivvyFB",
  "key29": "2biHHc3n6cYihxQdGEmWiaimH4MRu9aacgL6zYM7HcxLq8yWPpj7M18GEDcyVrZUXhitoc6VzK6HSSppw2qRWXZC",
  "key30": "vdAeaAscc68Hp99Vf7DpsM1U8iG2CbHBEj2bRVbZH6vAKHGjsCsoi6hmChLa3MZNenggiZFJf7ZwzttK2nwEQpc",
  "key31": "4iFGbTXyKgFJZ34KJt22zdBK8ShMcVuKsZcBaAf6yDatahHta13yBZj4U4HoSW7AnBFXEPiV3NMM9BKB1DQ2Ab9X",
  "key32": "5WfEBWoYKW4WvH7LPkaQWXR4JtkW6znrpyypAobsBjQ99FMqMXH6wpasyBQxCfEWfx8hvJskxJfDx9WmSt6oLsRM",
  "key33": "Ht4w1XYnsyG2sEXRs8F2tPQYdBDLakCi28f2c9ewxW8aErMSmzBWB7HEAuBcdxZLbQi9GSwDq2vhYDcirySgCcL",
  "key34": "3RFZNjXTQJU4oFCk71GaRA37TozfUhMbxJrLDxunXEFqpJLE8Pwy7m4bjJYKq9tFxWnYhZ4kV1wERziVBJuvG7D1",
  "key35": "4rQzTiq6gDLfPYnMqY9xXxpPiQQ6uN8HogLHKtpPydZ1kDW5YGeUruaAwyE7HU6cXbFgsEHwJD5BQp1jfavkwQD",
  "key36": "C6UqTNBwMrj8cRdm5ZsrKAudbEUCzF4Qj8j6kANEVNz8rFnRQX51V8HtipnYw33Q2qqVpwFQ6A1d1bqx5cTymQp",
  "key37": "4zrgf1X5QipKV7iB1QVBbfHXWsu86ynTvwKPXfSPdkqhc5X26JFLZrLhhaKb7W7cwrjw5tvniLCy3gjixaxNWRr1",
  "key38": "5snxFztCYDyUMgGpat3rTk54WRcu3aZvyCXn3zTcBM7L3NL78xF8952Ef1hTdDcrtLNxXCRJTXKcuun6xnASq2u9",
  "key39": "h4cJzWoo2jqFDBGSWtJcZiobVwxHbuDWu3Sa38ifWn77VRZUDtPHsyCj4gUQxw1yLkbwubivspdWT8eQd2CisBg",
  "key40": "5ynVTfs5JYQFAaWaRJRmuiDELLAWp6xTKAfL32qazN8ornzUCRAf54VVuzNVckRi5aGSzTs99HpugZeqXoTc12Fn",
  "key41": "JW6H4LgErn9kvyjct1jJsruU7KQfZUPfcv9QNFjpd5UmNvu3ZU14PJN7y68nLnSAzJAiP4qZ9jfoPsu2MyaCgRP",
  "key42": "ozmGGGmWgBWhBFk6BFKVF6wLozvNcUZ3mwWMsxox7931v8UjeMvtoKzF9AJN3ytVarqr5kuCgSbmnMYseca6bbP",
  "key43": "3B3bCWLbXNgV1hxktDQA6kcYr6H3foWDgNuxbwHsSnYrhLRRvt3KGkCkSZiWWRkSKTGb69Jib4KcRrzwv8KfGQiN",
  "key44": "541huncxmiGQm466aJtrHPt1AThXaEWJCc5Zp3b34dbo6JjPjFvKoYeBH51ijUAGghMGFcU3KsuyRUDn26dcrNst",
  "key45": "3XtPwwt4vKSMJuBazee2wToWNBkXayNta5wiXG5pBKn2Qz3vDYmQiXWVcSZxv1fELuzBCKZhXfBmvU5F1t7syT3v",
  "key46": "33i7caG84waXBzD7GfwD4cui3HzR62adPe4Ya6kk89sno5CJ5UB67BqsLsx3zYUzjhS1xoRc5ExFaJUaUWK2PMf8",
  "key47": "4oWqTuWGpgW6Nkr1GtJYmS3S1Dehe51uwXRhfdsp1fv2h3nicDoXkGaCvE1fP6cQTPhec3UtwtCjKvcq7sSEyuN7",
  "key48": "4Q5YnEwKAtLG6ipRmvj4nHQHdVTM1UXCAwwaCTbYwvXWW2v2vrjZ7Pa7uAt1xRkpTMasW5mKodpnvpuNqtstNKGy",
  "key49": "wxDgrCXNn1BSitL9LfeffHbvUrsdy9Dp3ogon3zQJ9t5Da4coPjiZPpDmNFS2523U4SoJpS1ubu5gmCqH1yMffM"
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
