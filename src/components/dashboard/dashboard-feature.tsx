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
    "65bWkAyu5gg9Banj2X4ZWk3J5uH1HwDVFf8auB55dLF3qsuVrynfH9RLrcetPcC5jowsq69xSq5eaX9DvbE3YzWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9uya2SFQsZFtTM7kkaGAuyQQKK96U87RnGRf4V383XrbwWdo176qQdn6g8qH9a5bhn7Kg9XR31cBEsMSmD7ArE",
  "key1": "44gUVFqfk6tT9XacAmCj6DZAEMAiPjzanCLg52gLHtoTUMzuXMJnCgFZ4VJbSEEGs7q3CdGAq45nMCVNNYaGxChj",
  "key2": "42WT8zDMauepvysmj9NaWg9Mt71Hyg7TzoPX6iA8JUwjbVYDi8dNtJAbGXMM7f5AWv8JqxPwyKLAjkDPf54ShF78",
  "key3": "2RABEeUx3vScxGTULHSrFpyYJE5bicJyojo5EmJSz1veAAwffEJdk7UQjWfyYytfF2gKKvqNsYMCJ51LrvzSwzgN",
  "key4": "zAF2sdw4jPVwcYXBHn9zHeig9UkuCmgsRjU52uky9CiMbr7Cs62XzmMf3EHRczaP1rZ477azYJoYB8k2yGKHUru",
  "key5": "J32BDwWcT5a5GsqWEPWYdUHBVqTo9FJDzVegmnKzXKjV3SdBjDJstRsdhwU5d4JrQtufFNSHhTKNUxWpxJV6fZG",
  "key6": "4ea2mm532JgckUkB56a5tfG6JCi23aDqMe3gyQ4oJ3sRuqXqy12hDfQitUQPvekGuCaNAMpiWrXL9ShVVF5a4efD",
  "key7": "umiL5AE92T7deyynBMyBFT9kCphakjvPbK5R3nwceN3pnZZTyYmjN7nqKWeW3cvCR5wxgrRdxHswrS6CoPegLbb",
  "key8": "5bXU57rRsJ3ZVFCEKY2dD6TRjvQiXvzwB9SJ1scjWLZLaCpA73TJLNDfUD5VAY6SfyvgAXY46evDypRLXTgyD35X",
  "key9": "2WhpgWAg7rfkGvh1niJRGZ3KqKrJghGFKXHJrLfzHB4fZKk3JG87dtHM3crhL4GxJQMscZ54bHbSpwhQURw6T35r",
  "key10": "3B17F72gDysQrCqUqFnXmD9G1ynttZS2ZwtRq1fpgsB1ssEZokSZnL3SeMS1RHKmArWAdX6v93VTxWQhACU7hMZA",
  "key11": "2MhjKFFvxsCUmQTe7dn4JdruHyTnBspA8EU2YMjTfdUA38RwsMuTg64qHJo1iFMfyDcU17ZVXrSLZunMcdoVnrru",
  "key12": "4EX8BzbGo3NhgGCSpApWoD4zkg3cGZec8drkPdmyTChbkn95sb8UzPaW5aRTCXxyNvyv1APoHxodNEfSnM8aybXp",
  "key13": "4mzimF78Adac9eH6nSNwR9T9nTwWn1xkQq2CNTLPJdb93hVaQ7FzDWBzv2CinPs2LPLp5wpTnXxRieP9HYjhPmag",
  "key14": "374vxysXLjitERMMRKJZfLSZLRiwdXGMfc6FiYpY8YamQ8MqPPWGoYzEx3bEEcvbE6mUjsqhceCnn1S68UsuMSMT",
  "key15": "zJ4buP9kjSGRCmPUvZUskov5AkHwFzwapHHVRxoAWHRdHNVvPNQMAGaYbjP84y6MMQDVCofvXvGRE3eczmiazKP",
  "key16": "3fgZv5hSvmsRtyhwj2dcZNUrR8Y2ZGKgXj18cM1QZxTiDeCzzAD5E3Ri1jnTkH8AdTaBCeHhSeMRtW7ZofV32fuJ",
  "key17": "2idqDJmRhgXZqCY75MJaKqDNCwxQshuMUvhxFhXaWsxdfmGw1UiervPi2MJTXygNaNdiy3HYisEe5hQiFCWZAQhs",
  "key18": "3TKfWisuRRy1Ek1p4zAxFxX1UEZqdM39hzNALc9Uayvbc8JFScEFEC4ZA8Dqb1HCNM2k7BgEqbeDQrdYA62BCY7D",
  "key19": "2XeSSbH1BJKVWqBeBhzc7skejccc7rZ13gPoT8B2pHFqr7781rc7pj8zLwXEv9kPTi3sCE5qbz32XcaLHaygPxpV",
  "key20": "hh5EfNU4YphMtpTGBrmyJDtjWvevRHbLrDaHRsg7bUJrwn69YJL1GwTg6qJpydwUhNfTr5siXra767yXHQrvEav",
  "key21": "34pdXw338bkmZwGW4aTJfX44AiR9QaW9x63FKrA7UZ6i2BaZ5f1LKDbb35bCumTK7Cf52aL1Zoo2nXhL5WrurAM6",
  "key22": "4CNHZ28qM6b46Ru3iBYh6JBruQQu3DkzTwJA4wXg9zGGs7P2pMF1ok8afqsvT7fyggcxbzjE7kAuF1zNiEGE3uNW",
  "key23": "2cpx2zv3xQGhKM8mUJWnnKUjZFPGVkBodC9EXzrZQJRPpdc2yPXPL1GVvpbWtBwHr8yDUamCBhUR5e1D3MKBBePa",
  "key24": "3eJj4tGgUePyuBDM5BENNczALvGBHnVn6LYkNUwJKyTfUjjc1t96VCpBqHZUXSv7eZwQBXSuxToa6tRrhabD5DHY",
  "key25": "5Hxq23MaN8EBRCAMhrtCtcZEsgFQTLEtrU8YkrVyuTuiy4FbCLNuunWmmDEXBbm5ux2fqZPJcpEozaM6amNfFjUk",
  "key26": "wQ6N78Zoky3aeCi4sZjfgcq6sQ5ZXJeKMDXUByTJMhFvpGEwzmmdbbF1nHUjpH7i9QMxofjtdopSkx8AogL4jhx",
  "key27": "5NvSGCRdpoVD4735QCt2KeHZoxoFjJ3RkffFHjgG34x9LVNuor8sbM9dJQg7FqENPVM85saeBsUoxD2BiZ2mx4QS",
  "key28": "4s9kCUPkz3BZrDBRVHA4izU8JD9yZM9xG5EFEAmWn2oVUjt18Qr2AYHfdLrvX7EqP9214mi1BLpHphbZF7XidysN",
  "key29": "FEZdUzkL6MxtYbdDXoKE5QVbwk1BMx2dYhakw7U8iYr6piTxB6BELY1YetGU2pqmEo5pyyL9MPMB1b1FZRHQ7Vb",
  "key30": "7yR76inVKqKZAeQw96BAHStFKYJJs7sPX4FWJh9rMw8pcbyvStQptNaN6tKJnYteVEUnJAADDihEGGH4w2p7Xe7",
  "key31": "2H5vNo2dQHH3Xts5xmjZAYY65crA1M4iL6bxuFFQRnDsE6KqtsfEEKFXnb61adHVj9AruwShr1vVvBEdZps3qb9e",
  "key32": "3QQcGojpxfnzF2ZRTbz74W4XuMsct46YVQkkXoUNH1FhyYGS27Ysy28FgVY5Zjb2AmshNSt68qVQqkaoNY1RDLoq",
  "key33": "3ujtWycfpTtXCiyMN71N4AcqsFzcJEH9ZDHueSSwDBP2skfHHvVd7imzNfgdp9snoFVNCLUhRpgtD2rJbojRxzr7",
  "key34": "39tJ7BuDRk2iLmh4PeVVizzvvr7595Juvckqk9EZG2JJr7W2YH2k5WmazrGyD1okcghRhKFWTTBkPPYuf8EWJCzy",
  "key35": "iEpUWg9YGG8wXEkUWAPnH6EdowkuejoFAsbcsLhvqMPfftwuZ8fysdwNR5Zws6b9zozgf957vrs6sB9XfKWydsE",
  "key36": "4Yv9gcaX8Jeq3wKQXDEFP3EKStWGhhg3VD3oee13EQPwnogbxTntQPE1K36F7U9kUeoyNUL6ZDkhL5TfTUExCyvs",
  "key37": "Bm8ffe9uRk4mPyCxxeqqphXsiTr9UWj5i6ztusXUwe2NwtWtcq5KV8gUzfkwNg8NBUshLKZWXu4HkgsbAL5NAFf",
  "key38": "3HVsShmuRmEJTYrsm1vPPmVMXSwq2LNmZMQgNstpSexLE5zuu5ariFZ7hnvLssbzdPPpLUsisBrJ7VDaV26ovrni",
  "key39": "4D7q2w572odoGEuknthHVWjNUiuBtua1hbyi8H4UhGLTUfXJUGpvqnMSTcRN44bUGSzEVaEmY1p1q8A1ex8GaRU6"
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
