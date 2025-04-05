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
    "4jBqPT55VYM6MPQSACEqkyiZNvNHE1WzFsyrou6B5PN8Vx8RmePQxyN916ZRUTnpwwWPLSYf7DPdgFRqGGpyvJeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GiNys1M2HtYBFNGmpDGdKubRXJSp26EqLppvZbwXuYbBiy5RGHWrHsjyv4SmniBJPvbxeXht6L4THMRcR1W8xQf",
  "key1": "41PKAgEKRHektzTLEkgFXbPy5h3YpTyUjxnc6N9en9PapG4zRCRbE44UbwA2TbpbSPgwoYWCSY6Lqw5rbhhxLGs2",
  "key2": "4AjAHSxaXAdEiAEHQm67h4iQaKyp6ida9xnzV6dHLWxSjeZgNd3J6inuJroXnTGjF1BP66VKzqgZd3iBwoH9KpDe",
  "key3": "4eYV2wdUg4MmiZY31eJTmZc28u791FsgNtWgF6kdMckjnVWbPvB7vM1x4qBPkojnykKkqDhgEqF9DBc8t5EYy9vm",
  "key4": "4fEW5w8AT4GeW42iwSGfZmnfTVPi2NQaLZHUgSq5nLUvDGtRV7p7vkUV1AsKzPkCBpNRhe4o2gXd5Xj4MM6RKhYb",
  "key5": "5dLj1LXJRzzJYwUwhEnJQ5xavnmLdidExGzeGAMDaoFj2aSzAuwKsUfCXrJyQ8Fa7aPXGDopCV1bW5G5HnT7Stdr",
  "key6": "2x8f3H6GTkqJGWhCKKPM35fLWa3DAQXqhDxzn7wZieqmdub59nA6PFXdctS118Ao6TAXHtd8GAAnXp8mCqPaWKT2",
  "key7": "YyRphXpoSoMKixEojES9UNTGYAMQFoTFZCcrnb3mMNeHPdcbkVKxRFrxgrkyHd7GAvYo8MjbKxCmVxte2X326ea",
  "key8": "5MnPqGQJtaNYe9Uozr2c1Gy3WMNkFUBfrnhof7CRFM7Ug5M21J8x3hwhxoVUCt79okWEBuQc5mr7VAHaGREMSgRG",
  "key9": "5UJwBuZXbDJinGFgUUnjtjVkBnCoDxPSmLiVYSj4GC3RGkcEMM39Zvk7wRX5HbEYiA4wacp2QKt4zsUV66Vyi4hD",
  "key10": "5LwCjBJJhbGambEPam49FmE2FV44XZVXiTqeQRpykQz1LYbdgS46AtV4QHFAYJkjPg2GaYo3pEUq5WizR5Sa4XwE",
  "key11": "5WXJhYQm7YwJcgYab3uFZrUHeo3TxEk19tgndWE71LsLpbFmAXQEHnm9brfqkEqTC2gUUnWTSDijqEhaXt6TQEyd",
  "key12": "3Gs9jt3AqDPAMLafipYTwa9ptHhvicgPhnWK94H3YUaPqsrRPLbKxLgkUEELsywK2tfWFVUS6Dhxb5AwoFgEBceN",
  "key13": "63hMEW5joAwd5rkkh4xUcr2FkX1qougysK5SbzzxNBea2bN8zJhBbh6vBLWbKnwbyJL8SVUB2H31tZoLZ7ZiC1kT",
  "key14": "3jivFpcbo5PgcXsVTi8PBzkkNh5FqAAwEZ2w4h6XhvEoeM13gnAiXsRiaQrazaSWUcyy3uBFQo9HDpSSpn4PFbPV",
  "key15": "3QPREeFbMENnnSij1R7qNaUBy9DsERoyb8nrbwS1KjmfPP587aMZ3pKHztnxEEswMmvMG1teQhNzF1WWhzvS3Zyc",
  "key16": "2v5TALDRdmWDyqzSdahnSnuDhUpy1HegrEhUWayeRJ2RVbsz6kdwXQn2Nq9Fbgv2EP4vjaURFaPSBfDBAR4mziR5",
  "key17": "3hdph7iXHr6TtPPwfCAyTWQmQ9dGUvmK3JDrCqPaHtHSkJKqC8TygstADNqFpwtMNKPZXiRerchpVWbv7vErGUeh",
  "key18": "3DKKPx7BdL4QvcFzN8xJyhRaC2wqKxxvyM7PGqbeTq9yaqzZ1xmKMYogav2Rs91J5RsYEJRx1TtFLtdN8BMc3Xhx",
  "key19": "2haJpUFn19bmBkSoPiZ2ojXEjrrmT5kvBz6dMc4nKHhGACZVnbBe529bRQYgqNgJzV5eztd8PNFucqmLrkdvHmZr",
  "key20": "5wyiWFQ3nyuNV8BxzQndSNkJBp879BBv27cM8Bw48fUZyUXo5Audp34xPapBCQrTfE6cwrwEJLY5dyZMHacuvoDr",
  "key21": "5U7iEozy6c8QM51nsy17ipAUiM26sLvLVKLtjjNkpbtUHgfD2d9o8uP2MYwbUxnHX1qjQudQommkHHHPruUcHGB6",
  "key22": "4uDzBUAGUzeRyDjPbH23k1tXsgv8pgXYm2mhCvJqzuzq8wasmqHqMf7tUSWVWeD7GWrfhPqNBVPoiLt2gvoSQZeE",
  "key23": "qLGnRu3WPPpfme1VBv6bN4TXLBMu6pkonVzqy8t7NB27U84neFaBAa5itjfijng3mCDwaGeG7Wy8jdaF6ofyhvX",
  "key24": "E2AfPL9BTg3B9CtCyWPyfkb5BXCA83KbjXAMJj5nFZ3oWMAM4PzCwFwWeyu1Q8QJC9QLwTEYW9SnS3MbhEhMHtm",
  "key25": "3vrb2Z7D6fffrmLEKwB4naKA4bsdgRzZozGw94GQXdBVsqcuXpH1zVkTmdzH4G3xWrD7V9UnoTimvt5nH87FkMm7",
  "key26": "4XhtnCL2bDenNGttFd3EUunev48CxHqVND2wQG74GgyfBTY6ALEZGjLgNS1cLZHZgUZneoSmF85KsMih8ET1cLdK",
  "key27": "3BQfqjiJt9o2UdbanYceEVXUyim3E4JrDKhmoqoQ4NCQnKJcoERYaCM8xdqtaTamjMdowv9eDuqhZS6et19XHAbe",
  "key28": "5FSpej73LppynMfVEGE9yuAdc4bVbXMg2k9wv1H5mBKjvNeiJSYMTNXAu36jSH33vj9pZc17rMNtQtyDE6K9UBG4",
  "key29": "2y9qt4iVmdydN1BZkH7J1KSrwxccw5zDi8YHxGXpFViWEuZZ6G44mPP7BLKirev4ETVHjxcWCrisb6oPnyGomAYW",
  "key30": "45CNNbF9P66VtcbWMie5FSWgWXecGKKugZA1JwFNWcwsfkrcEKTUpsbDYPjikgECTyDuWPcuiogKTJVeMJafQwnz",
  "key31": "3VTnTb7EtFtDcGAPYmmXxFSjowAp3D8muTJAX1LXnCVuhDMfw9wUkjQFiej8frpG8hnPkrNn4zbSfBqLRBkCnVCv",
  "key32": "67bE1FceqdqqwTsQN9edAQ6pRY7N9U6tvjBjYGZT3HhsqzZAWiyWYoftNMFgpvb6nAJB2htNfYt6JS6AMr97U2TF",
  "key33": "wj5Htc3QJ8hMQyNP4BauRuzvg5weT6QGs822YPoz84bF5rTxNH1megthx2XNVC8jBxw3QiLHe6Cg12trR7vnrSz",
  "key34": "529W4FRP7R8LUw3hS3ext1bvysRL7Wc3kjepKzjUD3UxnYB6ga7vbcTHhUH6ApwVJQoUehHh1gQjUD4HBJJ43RC2",
  "key35": "2mJvgu5GTLZBVQAs3qjW7W7ZPZXeA3zM62bayNfP29ZSzvo2ReSDS7GFHTpjc9nKenuq2wq5hA9Nza8KJBNMxsAt",
  "key36": "3JohdyHFJ7aajyoLjAyWqkWuCLG4ZaiMURkKGWYynUPrsXYZFCWWdzLSnnJixVtA9DFqyyewtHmSC68R8DjA2GgZ",
  "key37": "2Ea5M4R49gSHqy5WEvcE8PTh1QxG6NVNSABDo4zk868KznQTrVB4SjXqt5tgDrigHR5N2wtUc3nVy34KC2ShtKfE",
  "key38": "GxdsNt16rvLvK216GTUfGZGQHaNhYN7f1kHZg3puyLWnEAXYZrpuhLEdExtmU7fgjfqJiLf9fZziCDnNb24PSGn",
  "key39": "2dyyiFfmC9HXegh3S5cVAacKBahYVGzW5xXT9g1Um5MioStt1YBinDDHhVGdzSZPKFrVJVR4Exm9gsHb162pbkno",
  "key40": "nz8M6gkRToV5R3NpJ7hwpwHkxWVuymHRTa7CLefa1GFS6pjXFUH2TmemoCABspX75T2Ac41dXD5Wv7SkCPvQ16P",
  "key41": "538X3mfUX66CwPZHBCuUwR3MMh7MGHfzej6ZfD4Xsf6on1mZDuaCbkkSzs2bXoLxnbMosCxuEhqT9TgFe41LwkQM",
  "key42": "RYv2u4wTuMaaa9yxX3j96UsxCHySCNCvuXkt5fXvn9YBcLWwK4DxrPYtBYySeSuPAePVUtZQEY5Z1V4VFx4NRf6",
  "key43": "3LtsBXFaewBcbNwfG8WHA54NPSLjQmWgN4svewKSX5MJQrULYHjPsGerC5brN4oTo6sHZh1zY9HCy82N8bNGh4du",
  "key44": "5CozZ8mPdjTM2eu3aQja4C11QAmFQV7tC65yNGJAsPCoxx9fM5YwSxRhABQaqb276b9wcATec57dy5KEXbhtGbFt",
  "key45": "rf2j64G4Ef9vttKNN1o1ByEouYsKBP81mh8JCmC5sKZaszShrxDD3LcKmohtfYBQ69jdSk6yY2N45T7dJo9jh8x",
  "key46": "4HSE4c4ZVaJHnpo7nLVQyzuzy5LZK5SbjEH3LwB16X7FWcjJY6MDeJD9Pm8SVrKWdT2XU8CNwxRx9GMpY3kP4gqw",
  "key47": "4J5ffbLennQtA2m7AuJHox6MRtVccxYSeDEVN4P1pQA1uXmMiUZ7eJZC5MbvjVHpTN8TMkrs8v2E8LtrY3uuX5ao"
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
