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
    "3Mgn4q5y5DZnzSvMMNHVNtuQXFYWSgUcHSVeZZpGLqR99AKcJ2pJMDYCt8u18AqTnRvHsYtJB3QB4PZqWUUjvVEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRXfHmJ6ReYUD2h3oyLFSbomfZyRaANon1UbU15sD6rmDxanKtB1LP3jVnUPNAsUv1YsaNNRqNvgkcQF82QN2qM",
  "key1": "5yYPpx8u8Gw63vnANKYiSyTutqhS9LnVK5nxu18NQrPzCCPYdeARy8JNS39mvKEVcrgdoEC32d96HFkMgkyHCoMf",
  "key2": "tx2AUPY2EZhVkNE4kK9ywTJpH4qwfYGTRLpPmdYXHh81MGuKymGiRe29yHWZG1tBS5adCvvw24q38NkBDcNWbTD",
  "key3": "5idS6JcKW4VUvdhpcZxdW8EuhTziUxR8AnJUzNjsBmSNmkVHdyX8ydJFpYBKA2yfSv6jJdWq6XnnxbTobZ7y3HqN",
  "key4": "2SNjKPSgJJuA9ojSGVuCAJ4nfZpgUuuWRfaM13iBJfaZyyeLRr4udMGW2bF7R3jdd8LYNs1YFY9a4USHmqnEQRGj",
  "key5": "fqo8coNakwaUCAiXw88Ms85cZ8RNs5Lwn1swqLJiqtZqS6jSpfr3fCY48ssu9hPRG995RMeFCyezBvCrMEN9oeF",
  "key6": "2qad9gNcFvMiQEaEALSJoXoUeV3z1MKbo827v4TJdCXnWJHrhnGaZJ2YAiy1fiqCUe3LcPXh9AEbRFFfVZ539zD4",
  "key7": "3BBzYnW6xN6rAnwfDSWDz8VNFkL31R8Y9Hk1Yf8QWvbckqBiUdLVyzcotR8xvGjbWqC7dqqtvKA7VQ1BUGuzV5RQ",
  "key8": "eRd9QryChuH7soVoBJxcNMMsi29FoasYquwPegRLNpZUUKamehGi9pYJPKs5y3J7vz2hKEmVSNFEmzjBJy9MPLH",
  "key9": "4fCTydnMsnQLWbBKqthGXiUHPR4MXvmBifQmb99kgTDPexdmJmBRefKtBBXpBb4jQQhmF2L2mW5Rtx6DWhHXwWKE",
  "key10": "2geSzLM4LPUG8XVyaPcLRwy2CJCEkrtcN3fRTamzLCFWoEBrmRqUTCrBZHAzj6An8bH4bLjdvx32eD7tutD7N1AR",
  "key11": "5R42Nci4PcJt4PJmVqButWMY8uXEZTv4eEPbTRenTs9tDrJJW5hKZNd61vSCCL1aquwpCKMUot8y53a13Ln8rLMb",
  "key12": "46MHjCfH3NGPwCcNBX4hScqAMZXBAhp8VrvTDHFBMo33aQu3Wg9cxDapsHNzo6SvdCbQqV1ewFnAi3bwba1NaYo",
  "key13": "4PFUq9KEhxQQh9afdhWFMCaw8DXdxRyGA1GnZn64tVKpfNvPjHzuNgYTVJw8qCtoWw28TpqUbHimBw5wRyYE4aw4",
  "key14": "3ou9AVauBgQScMd3trZ2Q5ezb5zhzcyGL3A3bgRTmHZYeQWXFGRu6jDpZqD7zzoBXeJaXa12MxttqJXy2e9f6F9a",
  "key15": "3wK2m96q2tgaLzchfxNV6WEz24Lvw713ZfzoXq1KGrSfiyg2pv4XWWLJAwvtoQCRwBdWoVzAQS71TVxsoUe4VLx6",
  "key16": "4BQXmQDBHH4PqXdbe9DM4RpScrQsJmDSGJ35SnYLTZUvpac7ofUxGcaYToE7BxBMgfWUwZzziSUkZbXWGERF8vd5",
  "key17": "4iWPzDf7AbBUo9YggrJSriv4dyZTX6wC9sGagFy6uZwjrseSWtatxANVbtwjefBngZpgookTPvJQ6c7qZhU7oKzY",
  "key18": "cNkeFud3vjT1SfnaLhCZkNeGBtcRLSFyqzkKv9pnZLvxa7eukcNUgQU7opGucjLiTZ14oWNn4cEFf3RgYwtbK4W",
  "key19": "3JrFNfCag7B1ucMqksxStoVzTTrLyCrzcE4i2uxzAA5Z87WeRkbJVHv2uC4GjFqJ8Ave6kuEoj4H5NqzmeTfa3kn",
  "key20": "49tsf8SwYw76jnDhBXixhxvDGt6jzqoHMxMrHUH4MkvkYWvMfRgFxe8ozFHuqmPdsKd6tsamDDC26E2CUdiPuTHL",
  "key21": "2MHSbhtdsuEqr22oYjKmXajXdK6ZStbpqqtgqu1tKfiLhhuUDrgRVUQcJuncWKF3EVnMKgMFWLg7pmczAN6RNmkQ",
  "key22": "5hPV2ZfkgEhAXzo2JUpYK8AEAcpnUzV9oayjZBWBFiJz1DFuLqKsCzf2ThVKtS9cWuci161pihWqNuQ1JapD8Cb",
  "key23": "632Jk3eSKvQsheeBtwRj311mj3aeapY1ESR63RtACNPSdXqbPSUDjVSXnMTdVsLer7QHuC6z9PbcnNHw3YftM26h",
  "key24": "3LQWbZriwk7KDpRCmZWGsBxfXzKvcaAxhELcDZQEf3RknvwLcnYUhd8G4Yox7i2w3KXAGJjzY35x3beKEp2usn3m",
  "key25": "2fbyQFiRpnXoBMwoqWR61VEir2gXN8mgj9hFdakyCw7bFEHN2zdSTczHRWjpLhbFw1kRtWZ8HRzo61rRXeYsxQaD",
  "key26": "3cUVXqdbH8YUqynyNeW6pztq1bqrynHtqRoEWgMViGGs4rKhqcJvDkWDaGiZS5ZHtPDxTUeMuFc91vB5gMrUEQWR",
  "key27": "3ZXTVASKRPoWggAvskCEVAJoGfyQbgJM5x6KBT27zpW9Z4SsMuD9o6228XdijvyXaRj71Z3829Du4KFT9uw3R2fB",
  "key28": "3VP3b8gFBetukV33bVDv2KVby6FdVLDFqC7K4jBgXBqubHxFWwDMrCzbAH6qECcdXoHP27tjBAAuzMY5t821g7wx",
  "key29": "3u1vq5DJfJSLqGRCLigJcEQVcknV4NyaHqdmQeUDLVgF7Qwi6ar6VvuTmP5ZjUpdSt4PnCEjL4VWDcGYojwdKQGQ",
  "key30": "2xEG6YqwSqwP9WDfSv24vHu69HL8Phq6CPELw7XtMyDKDBNLiD4tJMU7PyQ7gTL416cro9nLoEgzGd3T3uFiijuo",
  "key31": "22mATcUFf1rWAxobfNsFBtrd5tKvUoFgJmU2cPV5Dzm6v3NWExghvCxm5oSREXNm41iTEhKHRi3nSMAVMi2CYmid",
  "key32": "5sGUwkimCecDzjsUiqjJ7XVgZEuK2UvA34yJ5k8GNKczijWteBzgSyhHYQcoke8RXNXGvRPN6GKuyEevBF8rfyhd",
  "key33": "5XYwHFhvqJukZweyHFBYNwXhH9FJVSxA83XSVnpq85L7DMdayjpFn8WjrFM9HFceZFJoz3iiBXVKFdAEkg7dzZfP",
  "key34": "5yfddAWmPJgG6QEAMBw3VJ3h3aD5Ax6pbzWshQCqasHzXdmpYo2mxbPZRwHsggvLq4iRsHj3ysE3xYMge8j6iqfd",
  "key35": "zfH4f77tbaQaY84h2v65AsRwBoPLgERebKJdaGLUCL5KTyELFJ5U4xfHVGghrnYoxx2xzexEzdHkzNmwNPbi6sY",
  "key36": "2qhvruRXe6TyGpNiD7XK2N72B8cEEhxPhn3pdddy8EBkngoUyHB9w55D72LD8qui6twD31kxsYNoqgchsLcacQVn",
  "key37": "59UTn1saQfMGpQkwh4wVoy2zwJpL8PmJ4BGcNgG3dEdYsEttDBbfwcUWad3LD5fJrKqxZdapJRPJgJLTTxLJLFMg",
  "key38": "NCoQ8NFFVjfGV1NyVZWfzWqrVJzCdh4ZAy33pAVUMdBGVn7xsiio53sTRVqD9zvLHZqNqczeVkLJQNmEYEWsFco",
  "key39": "4idTKK9D12c6JvUTf4uWoMS6dLY6ZVVrMMnvn33Tk234fHdCqqaGzT9UJEbQoddfxZ6WLjFeSfr4ATdSVtVRTcwP",
  "key40": "3SSoqvo2PnSTJvFzHdqtcjjB2FLFgmtHPghaqZja8sxdd5XhoSxAWm7pobgKW3fgETRCqdXedUHaK31rtuYEkszw",
  "key41": "5wucuH9P4e8j9ZFZtZEfv6j9amuGfk3R2vUXNbMjqNMjHjyyDLdCWtiEDoBwzbYyvYrpymfu7Ty4NutR8GaihRum",
  "key42": "28Zfu9HeaoDPaSj2PXrX3YdeyVisXuKRJeJPL1vMVbW8z3jKUFvuKc21wVHwyaWAMkeznbQhKAiqq9SfjV2yKmET",
  "key43": "5jn7ZJxLcaThsowmveXJmaqoRzrk7bKJVU38qoBm4zCK5Jt9b7yhfpD47BP5dpNsLrr9MB48QnS84dcoBb6ZwoBH",
  "key44": "5LsbVzFC9WdEm7oxygNGVPHHzsXtvxqasKUxpATjdB59vHqui8vwd3N8mRUnuW23NmSuw7WC7wfr4uDfGpiSkWzY",
  "key45": "4LbGy488vLZgd8Ffymi5MzG2GwyDCqj5qRMSjeJqDVisjYAr1VJfVHkpsma3ARgwTUgzKpVpUrxByDLHDnB2Gvzv",
  "key46": "4suGNFXddReMvoX7ftn9riQb5JPidFWMUGzDaUUjxS1qAL255tuagbChkLcgZXZjtmp3MuFXiJ9n97ynQPSTcfc1",
  "key47": "54W6W6vevbeCE64Vu28MfkXHud4GzzmsGhVEFVZwp86SSdcv139BPME2dtWXp7wY6igJoZY93A5LyXYSnsnecMXg",
  "key48": "3Ec6AMqTVvgwF2dMMANQXhQ5V8yLSC7UENzrMW6ChCZATvGZ7SCgYm1n6Tni81s6chv77V7jp41t7mz6PMM9Ssc",
  "key49": "v65jPPK1rKNU719my2jFLqcE7cAGydEpcgSZzTTw4HCXThvL9yM9tWiGUexQhCN89r9Dr35jDxH26TsJu98azKK"
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
