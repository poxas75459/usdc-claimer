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
    "3H1MkyZ2HHjbR7YCRsgQgA5TMKaGSFPEW77gGr1HJYHBWt9Eq8VfNvCToA7f8vKZ2qc2o4VaR4VZ7EvuRLCetavP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZrestJSyYBpSeUCT32tcgy2B4vXZmQVo2TMcBymq7Ld8FtBt8X2AkkxpJ45eHqnkaJWBxu8pNQvGbUworgMPSCh",
  "key1": "sX8z2UgakTVma2kfPQfPNqnGdW5JN6LwT37ENDB1JRNUgpqBD9jbjdm6RX2LZZB9cDEw7ay2GSt3rdC4R1YRRdd",
  "key2": "5QcRFCJC3RtGe8TKQH1SGPM84VoNjcsyfTLLg9Ec2CQHqt4mbEtxefnsNc1e5yMt9rxmBZBkDxNGCi4uKsaJkjc1",
  "key3": "5AHtgTjjWFsfyxFHs6tkoK9ySfyuvnbaY5Lc8YTdWXJujysAZ5dxb2BRGwTBLSYaGED5jVY23fCRem2hXB4a1EeK",
  "key4": "2sr4u3aFVhcjfUSaGr6xPEAnmzDnkhxPHb4TLysU6P47Qt5sh6e885BUqhQy9bJY3TGkQDFfTnKzZQuAD5sEwrYw",
  "key5": "4KDZwiaNuLHUCYTF1XauD4mhAh9iV7Pe9wNNtqsEYKQzdhHC6aEwFFqEF5SdukmZnPcsFr7gdU6nTEnGxhVwFW7E",
  "key6": "WrLJzqvFZVACzniEV1xQncqoRLKfQktebt7xopTiUUhysCEvbWvpg3RBtiVBDHfQhVdC1iTCxZKmV4Tn8LfLUYj",
  "key7": "2TvKvDPRdPbjzocgUhyLezXRzgjB7gS6EUDpE285TQCjCrU7AgAn2FfK4gBrcDRarVBUjvTWeZwWZdDXjtofj1GP",
  "key8": "5n4DiYqARZsLjZZcwvyDEATkPvzTBfdkdeUkQJYifco1Zqj9cJVvmxpyijU5uBXzToUKgnwpnZtviGghcZf8UDma",
  "key9": "41JFj8LF72ZgikXZpTmWjdcV8NqYFLC2gr4TeHwbwebBuuyHtwKjpFFePhHs4UseqWb9Xym72CP1Y95RfyZi78k3",
  "key10": "4c7kViLaWaJ6xTVU2jkQBFuEwNz48QeAdN9wvJSdu7zyAC3LfSZixjN3k8jf8p6ZyJj8Romm7NbbXuBo8eg1LeL2",
  "key11": "gwtgL2DKDKzHwacBT75cMaxgki4U5yp7tDSSUrkT68LtU5NumRxfK2ns7qhEULzCKdUrXB3QG7fgapvxmeNK8sc",
  "key12": "2wxP3yd7AEbKZ38eanaGWDr3bzVLu1z8j42mr2x2FBWee7YXN5bJYXzNUcRXaD7797nBoaUSJkwcozCegrpc2VkC",
  "key13": "aDQpJRiqNckBhnYrNSFUrD9rWpfiKC2TDorXKCPjcU7sryMDCz5jqrPuQ8LM3qwuKdRPTyqXx8axWEMninbgmpp",
  "key14": "3RiGhSN9Wu6CM9A4oNsyYFfEiDxwEfFdsiCUMH5tQ3cxFBgJiabtJPM14CLxd8xANfJMXhJcm2dCY8irijxvVxdo",
  "key15": "4L63Sepmp8aU36FrN2SeXWPij6e7uHA3nSzb5muVzNqaTqcVPhKK7TPy9T8hz4Y3EvqnG4zjD7Q4LFVef8geTaba",
  "key16": "4R56U4eZp65frzQr5MExiapWgNTDBhfSHW9H4QVNshXuhhLu5qkbnLyCLzSt8kpE9woWbrfywpXzDVmzqiBUEdsS",
  "key17": "oSHckZZZVrk76PJgbfbEmS1J1e9rBEvcZgrSc5S3tBU16iL2gG3rYn7Qx9uDfuHDFmGgWhNyJ7adkwPiJZ27Kv6",
  "key18": "26J9wqtKTXfj31omiMHTduo7omeY3Bqmyq7rBHmaYSo2pdvbM6kXeM9bSeeVP7c4rT2WFdXxZdghjSvbPFuCFwSW",
  "key19": "2LGvv3exU3F67Ap5vXSUVJxiJwdb3sj9eSRtYhhQ5ZYDiz4WhbwVi4Eiqr7hnoCqtnuMVjQ4TMWq9fNhBwZ4kCyY",
  "key20": "2jXPeF3emBp7M28Zwj9FjdagqZk5f5jo1WEQLLbwxe3S2b5y3RDfVymsWnSm6w2v55f2wsfLQjumw28Y9zxzvedW",
  "key21": "4oVE7twXsxqgmNmohWWCFeUAZbqQ9y98VbNViM3z5fEukQeMziEJuL6FKfUFBZ8CN9wQ9Y9KznxJpPRdDD1eio1g",
  "key22": "42ykhw21WZoy3d6MriZk2bc5Kv2KNHwZ4ZnS8Nyynf65JJ4AQLvvioaD1YbEXAayySfAs4WPHfXYpzERxLnXfCEf",
  "key23": "3nt3JnX4rjtYmY2ffqiEZkU2bYAz5yWnQP3xjJfFci2orvDZwE786efCuv2pAVa9wgddRTJk9Y6EEoF4C77YSC66",
  "key24": "46ywkYQyWhdNgP2zKateXHTePKfzUvt1t9fQAxszyANHsTGw15FLHZGXQZ6SFBXHQJd16FVejvc9x1jX7LAAJEm4",
  "key25": "Fmk24PqnNg27e8q7XdtjXqCThBYZmTQR9XL8YViAqCofUQwuBYyLJNpwUTRVAaxaTGiK3cWXjyPESUgYW9K3SQw",
  "key26": "3wTeU8iEhdEPNJScudtHa2EC2qCKWJWZTB4DmLaQXmj9c1z3iLyKM6eetkvV2cxJs6yCLgg3pNsVot8J23Ua8wNK",
  "key27": "VUBYsHVvTZgQdK9RpwxnLScHw6vrLUm5aX4bnB5tnJgQREeSmADoijWiiAmXkudZ1spB6rj1N52kSKf7kyWQ5X5",
  "key28": "2mFMRyhqvZiW7NzGpewoLN3eBQ2xRtuSMYmFCCX3mtBwokYUMjtDFM9vuD6mNp5AvhkgsryYNLVyHSB4RyVvTvUg",
  "key29": "dJpBPCLd3y641WFByRtQnf9gMNGk77QTRNYjB46jWsyuhXVWfsQS3SKNQ9wH8j2ZhtLCLttPLuwmFC8AZhpngov",
  "key30": "4zB3HqitxRv7sZcuVQRVqxLGkmUd3aKcxu7PZtdDiKb9CWL5UcU4mGRL3RoHqxyAoGRE8crJECug85n1TtotpBhv",
  "key31": "2knBGJwqJDE6ojLuv3kFkpmVkQyciJgxQBo8FMFPK7oY7pKBe1acw5ka9nsmEtChM6gExVHeU4s39HRpuF6cYHoz",
  "key32": "5o1MmVGZy5SLuUYdikTy7RsT3jV1MgND92fn4ESYhqf5w6WFydSMtCz648YFR4FWnmP8Q3V5TjWhpgpPhP8HURS6",
  "key33": "JWvMCvZmUoBxApB53wjJm1om1b8jkn8egr7wWMMaXxZpsaTFyoEdtYj4oJjk94Nb7khX3dXEZeqZ2WNmod1gvS5",
  "key34": "55B9byJXgp9NK9bPkNTeT5uAs7nH2gGKSCoVAXy5gJ3rwtLegbHtJewn2D5C4sN8jzHCCJHAxxm2YGAvG2kx1bS4",
  "key35": "5RNsTQtfZhStjXwYGFEMoxz293YTXa14FHBaSJJgbAd2mXcfAiRLn4vhogqLKsjC7dSq7EpZpQ9iM36Z97f3Kdde",
  "key36": "66vxhvBkqQxxCamywoSgDs9phmMyFnhxhAPPn4W4Bdmjx7zMHfkACRP51TefpqgigN8tgQf85C8HzngXSWcHKTRb",
  "key37": "5vcRCZsxxNKYDFj86tkrR2xCC5f8rfaQ9EPDiH47gn2dDSYKnnhZsRwXLiDSU8oGgKXiCg63B9BvC8qf1dWrvjUG",
  "key38": "2anZkY8MCRCYpNKrtHZNq5VAkRYqeHUgUQEZNcyMbMuVHsH3f2bximeLjnVyqJcYcL8G1b2wHYDBGcGiubck4zYS",
  "key39": "266gEz14Po383FJAj6rkSExDRtSWEULEzTqjxt8sd4t3Nn3zpkJgBR3qmXDD8HRYmt5uLTK6qDwyCf4DCq1QW2ZM",
  "key40": "zFFihu5tGVBbjZaWiHfgAwzBkFsjqtN2TUziNkmoyE348KiPh6EcXduAy3yb6cNte9rwX5Snijpa44FaykJ2qR2",
  "key41": "2gUodRri2UGRWbt8FjaWaJ2UoFBFniMJLFf6dow6xRka7KQ1ZFHMk61yUwsUqtiXRmWP43oAjyRbcTabKNbo2mpp",
  "key42": "2QCpvJ8N8o3yRwtpuYNMik84AHAdHEXkYUEy6DipHLC9Teap3sVGqnpJ7MffZwwPKdVZoJsQ8shyJgT6huGYtNYd",
  "key43": "2PAXnCARNjTkYm6nyUnE5VfxkBBc55SbuxPAK642XZrMTRrEZ2LKWvdWNBCcPL6NjPZvm7RCHH9tV3ABr4Y1bLmn",
  "key44": "5LsgGs1NR86nKP6dT1kHVEbbozV4hgainozZwn5RNYqsA74KE1Xjz1WK6GMyd9vNKxusWPqh2j5dPBwguXHsfari",
  "key45": "4DiTysVNX11CZJ5W2w6dUU7v8cQFGXYTbofD2pUjcUNPKDWy3ZbFzZkUttsZAuHs1bsVMNbqAb3okCHFxwm1d6rE",
  "key46": "5cVu1ofHDgYZLG6mjivftuT8prwq1rjDS7LH3oEMHTKGW91kSH8QGbdtCo7EBTm7PG1LMt7yEpvi6sKe7AhwPe5k",
  "key47": "3Fa3L71iaqP77TA3F8viHD3nQX55kQVcsrqBobMtqP5tqeWiqeGMVNJrGLW6ZdV6gNt1UQ2R6vbD3voS7roUHUBy"
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
