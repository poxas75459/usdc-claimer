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
    "5X4ukbMd4oybAxoR5znicHDxMBF6N3idyefZquuCp3znz26H5TXgs1pg1x4CWxfBbKUDDQnSh1VKc5jZmqZyxFJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B78J8BG71LLnqhwpQRkiMnhp8tWKDCf4zkef3cMud92GQjTMEb4FBFai2Rwzkos3Bjoo5QQhJAWDLQwJUDWjG82",
  "key1": "55J66V6aB2zEzamiSZYGurYiKLzA2HAMrNLDtfaJLhgRQ3FU3GfDJFnkVAwHx2nyxmwY9bSdmCS9fTPaMEGuGC1u",
  "key2": "xZaRRzXZbjcWSbtjBRnspAeTrLLS54VVn8fMAyDR4JJeXhJ6z7YR3vF7KehpHWQfxZBN6t2EVVhnbHJjtQY7x1r",
  "key3": "7FzVYwCigPN5tzTaeAnefkRnfoaCWFf2w45tN8hMsD4bRxoiBKK6hwkNehR1FohWHpAp2F1QKeDW5c8HA7XNJhL",
  "key4": "3sJKyYR1HPEzPywD9vBi9j81PCEYu9pFE7MJkkjcvhDBhzPRTwPmCRwiSW2P4oh6NRXmNsWZKy65o3XbWJMguKX2",
  "key5": "fpxnusFuN78VGm7jgnHeBqmDEZBXRRB5aewZz3xrtoTgEjWV7x3jH5auWa752AnKaqNsscrKthw2q9UjQvzRLkq",
  "key6": "38V1JD74EQhiz4TajqgDir9pchxJz2wvXhgJH5mxygBBqna2eebXzdPQUkfxiwxHhizqbPyEdTcJxrEDNkBiZTNb",
  "key7": "2cxLq7CAzoe1CFgFX1zza8rBagmD1bdnpXMickjorW2eRwFtF1z1j197N5fTnvPR8942xoqXnBvSXCJhbHaDWJ5w",
  "key8": "tZ37ZyATjmwJjsjqfb7xYxmCEfJT63AWxo9s27s36jXQj7PSij2wM8WYPKJDBmofNCgz3V9PDQvkFceHbjasfLy",
  "key9": "3vh4tyWfycDvC9ySyPcN83ZTcEUbG7akUWwxSwsHwHpoYdQ4tZKieadgjhV96ZCCAcKyCHFsrSPo6hY2C7hCMMay",
  "key10": "4xTbfAETtLVDqTxrRqaA3nUwYaRDEkFb9sCFVihT6URcrNGr72kv8jMHZC424K7zEswXwZ6MqK9MkvjYSd6vNNGk",
  "key11": "3MetjPgxbzGESUNEnjjWRmfFgAHdntSAJYvg2x413RFBqrE51tqmhK1ZVPaUo8cWh2oxMgbsgkXekaedG1SnwffR",
  "key12": "2sTbume7k1GEZoxwcYj1dEtMFtuETLt17n9nPYKgrnmnPkzcng5Vsk832uh755X8i5BJErvuKAr6X1ubty3qBwLH",
  "key13": "xf3UkS9nEYoY7Tp1mGhWcVAWHJ9QoBKnopBfXnd5CA9KAwc41YUX2WSLm9FbRJC8J9FtsdpMfvCB63fACctDr8g",
  "key14": "5wgJBP78JjxuMvJXtpUB5iyRoDR1UcqfskcvNcXLJ3unWMSYhCewx438vo9xQGVabYgT7ccuW8MxjG3euTZ45tZ3",
  "key15": "AV6G2hzuHQx9xQdDgYNUCczkoCQ8aebynQNsg6Zf11w4q99fFCXCYjd4pgfzGRicVPfBppdW8ostEbqLd1Q7Vba",
  "key16": "23gQrQQSLKEFdfp8ubM6kAhWRRKAadobpU8LaBzHmjtgdogDu5evY5DufyZZi7KpHr3v9Z2NuBdST2SkRfYUA9Po",
  "key17": "3samMDCnmHn7tGu4uYovnRUVPXU6SGGmRUtSgw1WyZpGWagGeztHM9UCXEH7AirA29hX5Y8dP8Bf1L84QoiXSot3",
  "key18": "b2gUWAwV1cPDw4kSheqmpCy4a8cMNM22ME5b9HGX2545WBGRMjWLGoZAwBzjjziywUmyL2U6agnfwWLZs6y7rJg",
  "key19": "6Z5t2JZaqc84z6pBoiC94dk73SiTbX2Bn6VTVjexzZADSQwkbcdwyALDaGopnDpmRffohky3ouS5NZTMwGu4DNp",
  "key20": "o6dbq2c2215vNUreKzmPVGP6TfsAke7ZTN4GDYEtuc6g77io2ido2NRDGQJ9AtWYSsFjxnQKJ6evfbMUxoTVYAK",
  "key21": "38t8JU8fHg5rNnfc7XG7598b9TbJLUK25TdqpzGs9ZY4WYcmZc6j3BTZHEEBiz6gJ1vZ4ESUX6SxYTXa1P9G161Z",
  "key22": "z2xc9ZunGwBZLNENxFPn4hP3k343L32hTGSKBkRDdUV2xexT6br4xuWkyh2gdNZPuxdoYuyj7uMNvXFoEJuzEqt",
  "key23": "nLUdaeAUi9JH7HmM32c1h4HU78XFgcUL4HLtFtZde7y7CLybpKMb9Gh6m4FDCuuX4ZY1uGCv1hFH4oVs6YCTTiJ",
  "key24": "3gsT8rj2k5nmx3rJyGoXprcJcmnyfFVjrFiC7TxG3aoeiBCsuVHeeHrwSgnKdNb2gAeR11MKWNNVyQfYShT3nhR1",
  "key25": "5yPsfDJ9f5yqz1Bb7h1L3Nq6VTNapVnS8gmrJHFmho2a12yWbTax4JVb37oay6ZJgobAJm26cELh2Yt9gXQQHiCG",
  "key26": "3wLEBPbWaxwzm2BqbJX1u2YCFVATHhedaoXMfCwH1yzjbdW63HEZMxaWCEJZjQqgPitkvbgCyQTKd8B2dSfPqerx",
  "key27": "2iDTB5Hy1UKqa3eW1i54aLErVSUiRmCaM6MGkQam1ciHXjZrrjjgGRHoSkR26v55mZinbHNr5MABfXYfWYUKTMhy",
  "key28": "4TWwEMJEsMSXshtJCRSBtLHqG7X3w3Jzn3Rk7BX6BU5VByp6Kb3YPwgB89GfKW8tb1JhZ5qZRsKfmKfL7By3wvkE",
  "key29": "5bbJqgt1BxwrNe2Cw28ZhorRi3XLnUBy7MjuTARv93RekUEDyGyWZDHCKA9Y4w8hhzvL9GZvpvuhhJMcLwHcoUh5",
  "key30": "297P928JT6SsrqrHQvWCqavm13aL8y5sGePaHRLvAkhfTwwGU1o5aRTjohUQ6Yd9Mwo652uS8yc7aY141NidxDZA",
  "key31": "3PLuxCPHXzcqowtqUe1GHK3Ff6qJN2EHQerMUUh12L7QdhNeezXrXxnNrK8hc5TLWxEQJKyWjYfnFBdqjC46ZH9g",
  "key32": "2hDgBjGAtqbeTzoVWKVUCsnEDNMpbWe8tr3wRmzsM2LAbKNrdU2BXK6wgZmAvxt3VwyYcG1jwjMHqqSFBJA4pnkN",
  "key33": "4sM1Can1ePcbbmVNpthxLhHyvUgcDrRvJ2aX8EK2NWp7LeUudYkzGf1iwL1ZGYiaGTUjQ5qQZrNxSYXCMg39FNV9",
  "key34": "aCXt6SCNvUTx6y4AX3Q194Yj99c86m8NivRzJX5hQeeKbkzFEr8EoXzB1pxsYpkAJ2hiuZTTCwtprRDcYxYztju",
  "key35": "5rEyp9R42iEDz35snLHBeihazC4ivfJ6Nw43nDfowWBJXkDmCde4nojAPPEvmexoqBHvyMVEQCQU3oVTAUWzHcv",
  "key36": "4rwFLXuCx5VEG5HUeSapRYnrPf681QWAR3RrmTWosoQ7nXAqJqZio7w6cvmJW2tQApbRg8cQEe4eDrmsmsarYWAT",
  "key37": "2VQtwU5PGwKtha9qYxh5PpXWjBxPDKzGBxAPfqJwdAALP9TFU19CsSWdTpZy4NtDcn9jWy2dwFFBfjqGPk5ysdu9",
  "key38": "4y4zEymR4jscpAp935CSP8y1D2KHF45W3QbhLk4jbwKzwzqAJLJd77ZD2LQk7jxJbMy13cGnqzYEVfWaSf1yQbnp",
  "key39": "3mgQPg8XkK32yUV5YTYd5wDCdXWpNy4Ty1eZioaRG5mjKCbCFW3YUpS8uLd1ZwWRjuxjqzK4SRk8dQB9uRrgnHX2",
  "key40": "4ZNZF1ngNr64LC1t8A9diJoW7AREBKCwxpX21PRbLY6a43RJiVWZhwPenqZNhjF3msfXHDhUa9qojaQs2wzUHrVK",
  "key41": "2sSka9LCW8tNzzxFu6Dr1dPcVngNsTNoZzSLmWfD9PwQGpVQMvvXKiZFZs4hZZ3Ho46UZECQJ7uZfhVxsTtvBfZE",
  "key42": "4xABGqGL9X8y3CF7Ugm9nELH7WVEaMoLBZurjYNceezECzeymqTGjTKwGEhsfXKYmvb9AsTQUKhcWa5gx4qgyBVj",
  "key43": "WHpFXJ8GFoEU9vaTXt18tXzxQsP2omsqrYtMmoLqXxVSQhA64MnRcZZK66zT8vxM1H9uFNrG6JFWqtjZbPAZ2pQ",
  "key44": "cbmnR7arnfqJ756w7Ndyvw162HPfb9cYVeMuWchjoMFWh3NK5teRhAJXZSRGrxNGCNbg5uRYCmgzyzXyRmUveCT",
  "key45": "4H9aRUEkNxCcXBkVVNAKV76n1xXsReo1K8fVJPn3HsmTAvxWmmKhFrwiSwutiverk4PT2gVSAsQVqXvCNGmXibyQ",
  "key46": "38J2s9SQe5HU71H4SE56k6vqXDzM2zD4GLVRXeCLuLEg4M2Lzd8TtfHLpYEogTtqKNrwWH1ZWsHCDWR6jrhsjqsD",
  "key47": "tj7YgcWhkJCbsapsqmREBFkkyv8pHeDttbsnuZ38c24f117uU7uERksPtr5y4T634hjiCrnDiWBoaPQvfhq3jMi",
  "key48": "4hn2QMzdZVHCxENd6xuAGBKu9rY48b8eTaNiBUkr5ZW7kbgNRiDqnAi2PWKUxpHnkhJu5XzgvC45UsaUihe5Arv7",
  "key49": "33GYkb2wvki8e6FV15T14gJarYi9PYtoJc9LYmLcBBKRyUJjft5TFiieJgcPkQq1Yhj57cu1RxZnHEWUmbcZM8tB"
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
