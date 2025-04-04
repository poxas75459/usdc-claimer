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
    "2Av6jz61qoKuXb3pHFRayTDJrmT4df2MpxSP2p3Fy1ggxfvTz64VtkeuMZxL4bbpG6i5bPu7hrTW3UgcbvoqXrFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pa7DHdSD9R93W6erByU3TBfGfb97dm2YEoKePjwG27Ky6RR7CcWVCfGETS7bRb8acWHdqaWLqDszmxR8w1gF5aD",
  "key1": "47zSdQ3PiRj8rW9BFNHdXK1M7bkxx1DERRjLyBCrMnweSq2TmjRub5GuZnFShCHayWBkjozQX37iL3P5BfGJH1Pv",
  "key2": "33FL8wh8VdA2ULdYdVZc36ukR1C9NGZ45RPmCH7yyA3M3DxTCHNTiNidjbZTFXZgzsfciNYJTbV9HsJiCQo8XF4A",
  "key3": "26WyGtUKzQpTY8SymBiyLYMf4zh5f7yMs9zFqKPHZJXAVJzBh5BcjbH69jWokKxd4qRrFwugUXN2TSpPvXQDrtKT",
  "key4": "42Q6nJq6JKmeBm9XaDURgaHgqA6u1LWC9fvBkMattewZxgvCFUHdBcP4jZfZj6veKH1Uh6quAmKZvr1bNjUGHeWD",
  "key5": "3cUbhNdtox5zqsCsybZUUJuzFi8Y8dp4PLM5yGz31yPCtECT1HExjokciPchWyck2rfCKvKCtoAkdT8sDBkpKe8b",
  "key6": "5c11h4oiqTqKKGQimxiH55rgURBnWES6UxGzY9BbW2CAZyWuFTJ1o2MrqZmTRr7sQgWupH2pd9dq5JzJaqs9TKr5",
  "key7": "287mDJbHg4sECacqZMcBtcUqGJK3btqtkDKX3Hph78DoUqk4CXwRxm7C4aTqsAJRiV2DrzYdVtSpLFhk2uaqZQYT",
  "key8": "2hJF69KLRwEeU8vjZtJSyhtyn2j2qhoQP4AtCKRPHkbjHesRG5c2dEQ1PvHWBQs16t5tgV6r647sTzmX7qP2Qi4N",
  "key9": "2CfeMCmBBcgchcgYGb6UA23S6qYjvu5RtSHB1wxVBsxiJ4zjoTQFn1xP2C9NaJbP87Sd4TkpD64t92DYLG9fLqgG",
  "key10": "2kkt1xewCAQrKH5siCQo1PBebznw2MxXVj7GxQ7YYVNYjoFBGBHArExrxt1f6Rh5b7fSvG16wG2cKaBHjzTZGLFi",
  "key11": "3jdsmgN8uKWv79d5pUSQqU8UcebF5xCoWF9wqGrn9HnXYprdqzormeokyRKRVRVUFnQmfJiJ6zQEjBdVsxw6LPE3",
  "key12": "4P93BnvCdfukiiTT5Kp9ZC5r1vGBLDk9cKD7UiUH8QLQ9VALeDdA7CzYhnxBw8LjnWdDJMkcNKP8E2u11YASQm7b",
  "key13": "45VQGvhkoKXdND4uPBFFNTffuFonaqeM2JFosG4TMdyzDCFepLgWkikEArecqXz963ugAUc2EEp5yWBqATtmyc6w",
  "key14": "4nvuFchtrTbit26dqXSdKEivr59WmuwNtG6UVTVYEcYE3Kehii1rAPZSEw2dZ3bntAPwWjDjxbEHDe5Ckue3e41Y",
  "key15": "5ZjGhcuMH12ym31VwZYdzDMj1ppF23GcRhnpAtJbwSJW8Dze5zkmzi49XgdLHD7kQ62nm4rgo8tmV5Z2nx7DkASL",
  "key16": "3yWijWrZFJYZ1ZqMNEbpLmZ4Xz93ywCjyKC15X2wDJfB1ozX3YJaYQCQLGGkBfFzJD4ghyg5z1z8rc3TD7Em5A8v",
  "key17": "5hdwdMCQWimYWsNPUYt8WD69CaaBkKUbDu2V1AwUVYkNCWCXUgweYksoTpyVQXYUM6TxKMhMjsdnFat5sXwgdyR6",
  "key18": "5sXgqFzd6ws1ynifbhfNzwBcQLGzzoktYwPxQdn4EgmyhcixiLTWcoGWnFsjnquf4Sn7S34SPC8uwiNUEh1iwqS2",
  "key19": "3eAgzYx8fxtQnW9gG1AQGNsQfjByr5C7pRuGoiSdzHm5neCgD3HQpekmEn7zrdTFMVjvGJGuogbjmnLXtAxWQ1g7",
  "key20": "3fsxCwK1zhVTsdeuBhMfkbA4aEHwqC2TwBb1Z9EL9YxFFt924GCtJ9TkHWFYoeuVHrReA814AjCcCdCptGFBmPyK",
  "key21": "2GoueAFbJXJqVvvyPPcGdfZ1CNMFYzXRT4Uz1x3hkayYqYKFCukf5K5MDTdLAAzqKT7X8ZkT1rB3aVp3bL1XN7hS",
  "key22": "XqEsRtwk5uqBpUYyB2oXaCLovcqs6hSNfxagZRVW7jHboymLxFdJ1m49YzaJSFEqc9a54npRXpZk6CwzoxZPM93",
  "key23": "SPaMmcp9FNssswNwVZjEJM9vuaUJ8PcUL5ZRKZw5CWdkr9JnjAHu78FayfRb6KM1YuPa53RSarmJcsoy8qhJrWx",
  "key24": "3ySYUpJ2gfMZj8WLSyzacboVjRsAuJ5mcmZUjHcYWfgjo8LWZk86zWF4AYVAPfgVaTQuf8dkkqev1dGpDJJcVBoq",
  "key25": "3W9A54MKtDu7TxtChSVkR8mixur4Scbk8pQUpdmDw1SnKwR8h4WRwu1xPPam5evhKYQis4rTxmc54sq8uyGc8aGr",
  "key26": "38BZtFdHrzjURD4zGTsizveaEgWzUuTp38qsPK9DMbYNWFcbfYZtc1RajzavNsjZwKSD8ndJ8vQJtjtfQm6EPBN",
  "key27": "3AcHzjoPVDSu1U1cn22BN1W29gFX95MzsJrMx4tx9KHfFQmHHFJau4TEM4tw8T1raPgRmh556WqBhxdfTEUhG6Rt",
  "key28": "355mbGMy3sEFonumebDgFHUjAJvEbcHaepwhhAV2rxGUzKC1zwt86MA2DocEWR7UjgNubnPqPJFzU4jTNN63LCvB",
  "key29": "3LYC6FB3RXinLBuYQmJYdQSmRsHuNFQTvU5zgXWnr7ADQgXi2zMjxbxdGwFUwv49VAyAwQTHzjM216gFr5wgJrDX",
  "key30": "LekuCLSEpxmsEfMxCymQr2rwXmbAaUGjRLoyeABdZJH974bh9EDvfgQM15WhqSHiJ79wqiSVC8qTTpwcixYcSUv",
  "key31": "5rHfZG7EsyXhPqYJoWQcY2TKbPkZZ2qJnqmWTgdqZiXqpqJwC9GvCu1Rav7iArMRMoBo42PDP9BWKYkh1nbmv98n",
  "key32": "2VCQpg4Uhsb7LgznyoDmUCGZLK5XJ51xgcExh98HNeCnMCTCGYwrgTZQAm9m2bqWDSknKREPm7FQuMpaTtmFSG6i",
  "key33": "661T8Aq4gKrrsVMaYYd7f3NMfmBPXvaGMCwC1DB96Tifvom83uiUgTezP6horiEENM8k1op3sXzzUC2Tqb5fAVD9",
  "key34": "4miK6UZ68XZsYMu9WMGZpNeg7gnLcBE7o5EK9kKfUkGsuVqSUzw4f53XPVr4HS4VCsaXLvh8xoM1FoRG21tfjdw",
  "key35": "oUQv1oZmAkLWNCp6hfp2PtaSBLRmPDZSb38qPqAZqtbaBtCMFGkywA4rVmjPESTm58Qwfjz1yv4cMvh9VvcffDs",
  "key36": "21a8LBJefFsWa8vREpzmjEyYQ3UqT5Jxfi69PM8SUG3TtCEm83KvpgJjohocoF5BjeTmPhzDoJpH51q86E4tVzro",
  "key37": "586EkqJdY82YFeSCaW2Dkji16fr9NT8Ru6GRjrn8YcM3yd5fk6HU7ZpGzKvUGyQpQLEigm2kNWvojTP5MivNa2ug"
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
