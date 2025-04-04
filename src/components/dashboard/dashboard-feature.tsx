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
    "P8x91ujqjwx8EKtSpNw5omgeW3WHHc7HZyAjjeU2k7sp2dbgNeU7v2hVCPVsUAVEJuDoxGRXYsN7F7m9ZTwV5Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nDtZkSs3iXoDne38mBkECwnfzHSpyb5N9SPdES8Bnka7HRM24qBjhd9AgmVXiMtRU8rPsVCfyFQPVjWb6DLd7SB",
  "key1": "4jgj4Yu9Ridb8y3Xz92xgBrMLzH6WbFUugkiPNanCC9QetsQffj7HhYkcTCEZrKMWYjioRncqqESfqHpTtc9vQua",
  "key2": "2KdYrgdqAqjuMYzCQKrXUxjrq5qTu1qqhYQMPvE9FncRY5pYE4rTLxiXX3uopcqpBivNcte4fYysEfBWV9nbamP5",
  "key3": "67maHFk4aEQN2K3StdyEm1qXzoMxk7zhC5ntwjfcVRgZaeVHMMHVsfykHKc9w4SvqK3pXoGmcaJb18szxuN9XmDW",
  "key4": "SmfEmfrNj2dXoAgAMqLFmohhA32QGk4bDjVvTR6DdAU5FinzaW4bTuKSvNYTftEJ1VgsjaPxx31hVuyv2byMM31",
  "key5": "2vyAKhZhkm7BFQK2vwqTmn763qVxUU3hzkhTsw49tHC4cR9MHzejfNbJ239NdodCSFiZZLQfpLJNM7bvAJNMJPfr",
  "key6": "4q1Mv5L9tzqMn3nwAjSTUnEp3aHGsSXwrxrZFtuUZD78TXHhmL79t819PTVovJ1Uig4GLKpmTiQvdaxdJcbBBxVh",
  "key7": "3mkrnwSG3RKbf1Mbsv8QJmQGV3DJkUiC1eWmLgMMHZS38V4kDaE1RJTMMPefXjh9nZEdnoSk9J45Bygcmw3aHhmm",
  "key8": "3JhXBeW2UkKCwRAT3HRQ2yimof3T4QCpCoYc9dFjrf3mr1Monc3KE8LA9HPhmYVJMwTdTHzq7UznzZJw1vDWFr2d",
  "key9": "6my7p5i5psvzcUKg9RU5EsYYBjqtaqdao8wewTbCj2BQYXvHZhMuq8ap9A3x4RyrTkaWGodKM18Y9iLe8TfuK5t",
  "key10": "2yj5ffcHVJTHoDMPucjebFzxqF42NurWB7C5qbTSZS6yezrwrJ2tdFWGUwgzURmMxiddkWX8Joa1cHoyQLMzmHWa",
  "key11": "2Ns26Xi5JvScf5hbpwTny4gZLknFmkggxyt5KpJA3jwPKmD3HtESF2TVGJjPugsvWoJX1T3Bj7BbAPitvnw4m3BW",
  "key12": "59VjptVY5S1bQJ9HQKpeUmLCjyd8iHPfZgr7oTHaKQYKi1QxPK2irybBogfo41LZWLf9Jxy6Gdx7u74fYujMPBt8",
  "key13": "smA6fATwHdKLrLNGuJvo7p5jmv7mFwx636XRwLaJufjxJVCegxEw6GZND1R3QvGV3HDaw3HS9cFTvtCY6Q3NRCa",
  "key14": "4P7qC1k8dforWbyS7gNjMc2k3Kh99TqhvLL2T7foyjwPeZBJq4tSAvrQcbb9ejTrRTc65NQEDzrMWKJsGeu4NBXX",
  "key15": "5bDXXw5juuRTXWt18m5dwxWn6VDWVvKqvLP27dzCykfVN79Rt5hSqYpzfNVrRou7666swsRtFXUZH2cjxuoA2w2S",
  "key16": "4tnGsmghfsfg3ndc64JezFyBoanePGXz7PqGExe3CFgan9TckDoMWyp6nH9gAKK4FDRgTnXAK5p12sk47FkMuNLd",
  "key17": "3ZDCr4229LuTHV32n5SGvUPDAvKLtsx5Lh7ujN8SB9b7dKfRkgtwBYFDyH9Vv6y8Wdzdkyo2wPop7VfeyXTTQj1q",
  "key18": "usP4fF53hhtxFbXZuw9ExgBFXf5U89ZnfkEgZrwrVzkrAmwA3cnr6e5oDeZ3ogMFdcyNcbFozJNP7X3VFdLd1FL",
  "key19": "5D8ukeAATadadKqvEsejcmj4FYBwus4gYUEwTds1EArjgkPk2qWz6o1vx45tutxxmQ5SQXmtSVXGviRbZSvaJW6k",
  "key20": "f8AYkxepyT2Ly6DNRTow8wBfw4ccx9PmR2kDLMpWACHrsKVaHhVAmpDet7qTWUofCWvBbBN1gMUHHY4JD4deLye",
  "key21": "mzQC8QtsfAXSXk8ZjD7VEMVKsRxXGV5tTJDcoFmt5vBvPJjjPpGE7D68P5yTSSD5eCAbabczHo7fEPtbcwXFkWd",
  "key22": "3kF6BUMRTDkhWDxa4jGL43ymp6UMempV4DfuN2iCJVvh7dUttzYNMeccD6UEV6KRLaVszG2aMrFYj8TDpk7ptACs",
  "key23": "2PrMqCsFk4wbaMb2XifCPAhZFhJNyaywa3Q9XNXBMX6zLoMPKiExYVcJwzV2xjb7uArvSLk5t9GCvzCrVyP6d4Br",
  "key24": "m39sQPBR3M6LEGAVkkcwusBNvk473R3mrzftNY8TVSohAbhHcGkmsijsXSUJdoRL2mAFqirR28zBCiNzxNZ65n2",
  "key25": "674PPEVzeie2UHCgGu4iH35xq4nXtJ3b4pzFqgpnGsYfi7vAoVrVB5r1zvcU6ytfZV8WLGCzYb8uEjhro8vKsFnc",
  "key26": "38Fc7L3A5SYWhXZ3MofLj4u9yL9csgNc95hwBEd26VKS54vi7QMcxny7N8Du2PAi36soJSviEbcEcPgMLdymghXU",
  "key27": "3wjFN6xpjPXywApMst8svQusPL9yeMaF1APMwKb7M3jTzkzrFJn4LqsXA2SL5LzZ5odn4krG8M3T1RFEnAuG1V66",
  "key28": "59WukkBxqvPWDFxbrjGnKepV6ENEd82LsuWfdUfsd62d2dGL3RmDCtY7DqZBAdNnNeEwX6vHx5M7nCCkXWUZKmzP",
  "key29": "2WN38CcMj6qPwTJDQkpNkAExbh2vRgT5pxe2mX4DSyooPyuwnryFRD6iUeLV3SYHZWCdV2VSLPvgvkHUfF3vDXnE",
  "key30": "4fKQWqkTiSSMAbXoQyvvreuPWqJoFgtnDLDmpFzTmc8qZxuQLcWZxvhSmLwyX9MhHNgT4nL3JVckGmBGb8oewdoR",
  "key31": "4csowFUukDHTuKyiHr9ypGAkW9TZA29J6BtC2ZrANughMEnsif82L79CQAQJtXSn8e4eH2qd2KWAbdEXAK6oBWHJ",
  "key32": "4xtKsJURPYTMwYfxY7sDK9aTddmWo3MZKshXFfjSjDkUSmaaATswPBEWDG9hnsrFbuw4KZ9ymGqskLDuEULUy1dQ",
  "key33": "5AJLDfhoT1jnNGNaRRovh5K32bfvREu7HMHLjHYeUvre2FZ2GRrBKdcUrqpQzDv4waq2SYYdvyqBUQrdiuh9bFr1",
  "key34": "594iGQjRGCqdSpFzb1ut1QH8Y4E6ZV84B7pAqoo8UbpxBxa9QF1koQeTXQQueA93d3GDdhVrmcuZebKGbDae7nSm",
  "key35": "5vGfS5K2bQfR5ye3PNa3zKRSKVZKC9nrjZvuWGu9qeDCJZgGhWVtsiCwTEZWT5FUUn3qvDCHqFjGUAL8nfidHmSE",
  "key36": "31JS7DrETPh2P8YZYuQLTKov11GKx4mSvcxMSiWoLQSkyJp31xBMp1Kg6PgRvyX4XyfuqMPR9rdv8Lg1gyiyfHKK",
  "key37": "gAVQ4FDjUCUjs66ivzvNqH4MxUdio15pE4MqHCAVPvzJ7h33Jw2dm4NA5UFtPPvb8vCaauqc5A16WV7vT6Mkz8a",
  "key38": "5YgbLcSbihw7oBH7MWFjRuSvSQkvbHi8FNCTmsA5rrknP4vHoDCAGujpqv4mzH9VpGiizSBW9LrJLUAUQeGtDrqZ",
  "key39": "3Yc3Xr2CQk1uVvvmdTt9xe4tiFYa2GssioLG4PsrNQTaE4zmMk3wQtgNqyfH4i4pFzDF33i7o13Gfczx7Akt7itg",
  "key40": "4xXLXswgZqSnQBtPwME6LQyHWL5NsMH5Tw7cgNf9RYwtPnYTFe5JpmLz5pVLkHNwv71tPporZyHLQgPvuycR7gPE",
  "key41": "3Q7rcHsTRNxG5vp2fWWS8JREBWKh3BgDYMP9ZkQctmUu3nRDuixMwdL1nKpUkRRgBtgCoyJDA4VkQaWvzzT5XZA7",
  "key42": "3QV5njCTvAVNXZeJAirV4m7YiEDiRjrNvw2zGFTPc7pht9noyUce5czsJ9FzgvdSwcWVsAJqJ2jH6h2BNMgaFyuq",
  "key43": "3bwec5snSmgD42Sq9jHPitGGrEq4cDPMACbrTq3WK8dkmUxkR5vv5vrAb4PMbkr244Ei4FwyKgNpSB77o6v5ds2v"
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
