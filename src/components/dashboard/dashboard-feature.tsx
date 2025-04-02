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
    "59umTmaWrY1tEW3F2RkDv41oZU2NThYoPyVT1cyCdaYJtoUCdBPZaktCLQZTvwsq8rVWmJLdK9VDLnMkwffuHsLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcbcmBKAgD1SuCaPjtaAQwFWnwnmDsYeAqv2TBHaCj3G3XxkXwC2TBC5b63ZEc3zC94nCqui1en4wpT5zs4tU8u",
  "key1": "315fshbhRCNqt3VUUM2WyzYSZ1gt2sbYmHLve6LwcCJH7HH8Tp5eJUj2GCPjJcDNoU9DzdokoHBG4FfRhC2pGCai",
  "key2": "4oD812VNJ6E2Z9kqtTeYc7FnAKvH2gPf7oCpr6UGSZPBCfrtNbt1z23ysqWPq5svrsE5PeBhb7BKQknWUsa9aWMk",
  "key3": "2AkKbUiMHEtN28wFaD1Qwmmwgj9JKBsyALSygiSXDUo9PVEDcBP8CJHrcZAEXBMJtdV78XnxHWtVKAk8gbcA8qwo",
  "key4": "42XLXwnMgRLwr2gMEChaD7ow6pnDz4KZN5s6zmZm79e7D5LnituSBRZE6jBKAbuiQRacpymdh1nTFH16SRrKW7ey",
  "key5": "JEYGs95NMadvNYLpcYmQcYiV9AcXDPsvxsyL89ZwQV9kK5St1ypVeJwbs8ygSdoxCxLVMgr2rRQMHH19sxso28A",
  "key6": "4UPW6yQwZ81iPHSV7g3n2au4p2ghQQW2k939rszMuJpq1TMvN1ZkDiXciRjz7vQ5QWeT9FpqaejQwnSZw3p6NiHB",
  "key7": "5Jt3tZNYc6K3Vsm39MUwQd8eT8sPAMX1AMsaeiDm5UEaUm9ScBtLt3rhPPMsPNQo7cqy56KyoxCtUiBr3wkiFV6Q",
  "key8": "3AKd3Ad6wxgy7siz4npgJni6yjhDduKcfRHkS4AXRy3RnD5Bup9sr56Sr8G29vBVU59u8UvYVSRC95aRgcuWLHUM",
  "key9": "3YuVk5Ji26xb9XQp7V8VPh3vj41Nw2zMgAg5bkahN4UbMMcYefoq6idtWL1Kk8upHb8gJXtgqB5WBFcEriYhCEjn",
  "key10": "3VNJtmuRqUBht9t4EcFLhqoUDh4259151Ub6MgPLjPgs1kz5p69RTnj5qrWZUY74peYSKqMNyHN5dJeFTYsN6wL9",
  "key11": "QHfv9diDBe5Rxj2XoD8GSPZv1df7QEF3QLtugJdPFoSYULnK23RaqRtHw4689SCXs5ZTcTogULeRExiJgbK2s4m",
  "key12": "4w5PjWWjguZ7jnBFLabQbYvbpgDgLzYaCSWzcoj9RTiK4YDCuaGXUNAAvJPsqTEkKkqTK3fnhA3V5KfPwU7Yt4Nv",
  "key13": "4FBDV7mZuKdgfk3JhFATvsNiwxZ9er7AMjXRHB288kTSHFfSymVvwdJ8dGT3jTLRLPshqeHd1ZfkUPkFaPA9hhQD",
  "key14": "66EhV8VGu9LHXfPctbfWuRJ9sK4vfdN7bnvW8grh6MBcW9rTDCvnBM1xsSXb9GUNpWSRcjmAdsUdzQ3d18tfefXK",
  "key15": "4FGSdwXNBFJ8JFu5NS5xB2MsUbZxawrDzbxyUgstuXfg5cp1JJq7dzj5YZKe6s7233o7aQXHCJ1J92Qshcnw2X3T",
  "key16": "4CZysL8nGTQhgKQBzEuLSidAcTiJJHUBngbunqUzoxdjR4PBTRFGp8Kd9G2CosEDByZMnYwTKZR1N4WYaB3j79m8",
  "key17": "96d4kwpaCpNQ7vekjRXrjx7PvFoCiQ2WsG7cVxBH1htarV6e43AiYAuwJYEGQtBfNkpt2t7mUYQZjnKpxbnL5FX",
  "key18": "3juDYnUgA7FqzDrwC1YcUPQQLRqRuaCSwAN5nUtJz1BdUpHuHYZevNwGbsYPxdXaw4yiPn7oePdLhzH9ANJ3x83j",
  "key19": "oStMjpHWGMgxTHwdnuiD4foHHRbh1wHbTt4UcK8s8FNPN9eaRg5Qe9CyBRG9JUAdMYLKW4SpT1YyoJPvMeWnqCM",
  "key20": "4LyySgh6PKFZ1FhkksztSGA4V1HRJnQQUQHpP2n7Nn8WtU5cPeH3etFb7bzXjrDY51cE5Wb7fKBjhGYdEcGQmTLX",
  "key21": "2pwFpuo6mWV2gx9ouao4b21ksizGAVJ7hDZxn26MoZtcxtRtRnNqgmuJSjudz1aFpDuJFUkiJcEgFgQTA9PKcdxG",
  "key22": "3tSYbQpRt9J6cu2pb4FwME94coMoJ3WktfFVrsPxXrjP1HVSL7wRbcr4S6UNkj3WdhFKWLoFuiiRkvj64fthAir2",
  "key23": "5ZhgMFkC2kx1A89HQsA7rcmPmZysdwjNdFmLvzwT8rqKLh8GuJdraeP45Zms7Xn9ShenPt3Sbf2cwH27GArwbNRr",
  "key24": "KgSgSET1gFkKDCtJBo27AqYQ66PEuLvKN5Xv4xKRtDPRo83iqfYr5FoFisainHDeYLfXaa3sSS3RsgUwiJSSpG1",
  "key25": "3dvoUhnhAngwgNxg7zwSzm5sM1gsyfG5Kzw11azueGzMiNfcsLnvthP9Ym8sCVKRLbP7x8hr2ENdWMnpBWD7K4qN",
  "key26": "5p5qtkrEXGmFiGFfxEgt7YXwhQcuNayoExuwEAruzq8s4sSiFy1P4xF3VXWT3gX2zWB9a1uhAgHk6Zvni74qtvXW",
  "key27": "5e5K9sT19YbLUeSuutQpjthofkmhZqx83vTtpjAApS6AJ3EVvz3WyPf4HhGuQdza5GpZkLgvk7rS8xVqn3Q7JJ7T",
  "key28": "3KPkfNVb2zFxtfX3vBNemcYnvC3foMdmFnMEvrLNL9QDXZKA1ZxhPqF7fbG14uXDCiwBE1YdUV7sLjL6Z2PZcf99",
  "key29": "61V7grtCHTxCceXFJXrXeBD8STNAL8fmCXJL1A2Vv5GueHht4zFZXkXo8dpfn5eNriEsMNKvEvawY7aT43jo17pt",
  "key30": "4wU1jj5DAHBy2ooJk8vDWvzxgu9JwV52dX55yqDtwbkfUcCBkPDwjj6GkF1DfAYQpfvLbXMh6GJARGemZG1QJ7gB",
  "key31": "5gmBvPTsebpDNR5pvcGLhYFxfXo7Cv2Lkpcx2Qm1TiAxoCfM7rQ4eB9yssFpyL2LtgDj5oJ2zy8T6FrVokh8AEof",
  "key32": "2dZkoQMNPUyaNyfeWwCCbizkn2gC438dmUcgnSM6tJ36K5tHwCR6wgsTJEC4CtZYwbmJQ5L1nhRQDGtpguEAXtbp",
  "key33": "4YKgdacCcwGanPo6vSKmaFhiunmQxPoKxmdjaVUba52jE1LPmiyfk78EHx2yHBofZ33z5aEUhdKBVLAM4zAbAtHF",
  "key34": "3WL4B6TjcCAWX6G1MsPSqhkBkytSptftE8yJzgjzZWETEXthLc2Vi1VAKEPknS5AoK7UUcD62Kjw4q9rzrCYEyeo",
  "key35": "63yzWDYUC4FGatjG6Sg3gNB7bF614QnL28s4hnfwfmmvrv73iYRNqGEEw3kAT2GPnTvJAEyheA1Y4Nw7SMHfW999",
  "key36": "4TxqErWUYHRURjwA8o4eWUYonC58inm2RLptFhkENYaQsXurynA65QoeXJFMaDczva2jUnb18Ubtddi7uSwp4QjG",
  "key37": "4JbiGnd5hiCAvYbsnDBEwL1XqYa5ZAZJrAraVjv45g2Che3TjDAoCMfD6qUm9hjmDSr7Mqb15FQEfhrFmJoFrvnC",
  "key38": "3xazEi13w3R3B6EaUiYpGRBopc8yM69CfiJmYY353dzLPG9xUsnwF1xHGaA3ScY7SoRN9piCKtFjMxD1hbpNFxM",
  "key39": "3Nt7BLTk7jTaL6DWchdhhzYto3JxQ6NxHSwBt5stYFiVtUc7yfdnExq6vBhpaKNjecnCiyV2AeVduF3m6cqDuNrh",
  "key40": "5USQ7rZK8Zp1CbTTSKVndn5yShJmdfz88H6d2pMiMBmawExxyPbG9C66Qj8BtFzgnJ3Nsc48tJWgEuuyW8y7pU2Y",
  "key41": "2LrwDifMY2mZePwgqT9fwtidwJ9cF9BGAuGFQrWW9oQ71GHD8wLLbJhkdaZ34XpcByfSyHST11ABzZtB5DqMPqFz",
  "key42": "58vK7Y8p3mQJnKWu9uQCKgBhrhF2HqyaiFZ5vbZ7DZaG1gYY6eT3V16uWuY4hPoLBTpeAmV61uokcVnJsQQA9b9r",
  "key43": "5GM9hW4mYm8f9VHbWGrjoPNQgyyCTYyvBfhMRrDR1jRKeGiU8NpFC9hfx2VhNwCFpsGA1KNjVg2sRHCm9SBDrtve",
  "key44": "4trYAvm5gdWZsFpzoRXdzWz2j2zKTE3f3qNGWqWm7uA1SnmwCHPPGN721wUqgBAcTcunor9AzNW33MhrAWRVLpWi",
  "key45": "5dyZwPVNKX8whEuSxbLemAAEKbWq3sWfYQrquA1obuHza6zu72yYsxjVYhVByo7bgDgpVVgRJ6VpWNbzRB3PkZvj",
  "key46": "4xvEpcFjggcieJuxn7rr4c9X4NtiAs7wWUGer4AFyJ8NVCpu5rgedF8YjKFS8j9eaw2PWiQThP32kTMa3Hfhqg5C",
  "key47": "2H5tqDd2LxuMBefmpdzqMpyceVNJSaDty2vyCcfLwe71AdG1hjUZsiG4sSbhbCPs9vCTGcADkebRASqTNL8E8iwD"
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
