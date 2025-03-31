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
    "2ke2zawLjsQHzTp5Tj7s6wm2GWk9eSRkiMJP6PAzTuVn5qgJE3VqHQEfaQ3a62KpmaX2ZH3xiGH6kz815Hjh6cGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UzQDgYJuD65GD9me3hNLn8gzv9Qjyf2FztMnG8zVZ4oXZ9TumAvvNcguBaCwgdqQPs5QsjEvewaQB5vbYJMwmsm",
  "key1": "5emhhqq4YPA2T1CXgiptWefLzjyhavQCkxwcYUFbMufDGhLpwd3cQTddG5ie3tmAnoPRD5hWS7DTkv5Xte9YavEU",
  "key2": "65T3P61296PUY1d3nQpsNQNJXgyw74Rua9sFEzjDfUnUoyHViKimnQ7JQtKHDftrNEHBR1otRRJHQtvGWs5ooufQ",
  "key3": "3jXb5GR7oDWcDB6vUtSYAsVuPZNDRsyC6uY3gLf1PtTa8V7o3vfYY5qrXnQLRTaWM3bwept2N4ZTywQyn8bqHo8u",
  "key4": "2QGqDosUyrbTU8GoUsDH6xXQM6urrEPQWt93aMKtvxysAHinZvLnaciaSeJ71c86XrPEPgmgE17L2tqjVgQCXGxy",
  "key5": "5pVxDHGRZgHggxokCzfkAQGDWfRVqPuGUYgEPjXcA5YDWiffEckXVViZYWWqjbRiEAtA5T4Q9Ew2ropep48GPEGJ",
  "key6": "4WDCRQuwXMK5aguFSPrdVhowmarWhPpshsWtj3vPCEnxCTTXFJHuXqMQLWiqUpHXGAWrpxmodyMQeVCrbWasEzir",
  "key7": "moMuM8szdWNEtpRjZ6mcoGULuufvg9CqyGnBJz95E2trDQcmLD94hCJe4CnFrC3FeKH5jLw1CsLiUSz7UmnQYtm",
  "key8": "5VBAKV8ukvRf5PToWoefrgg7zq7M54PC4oV2RNKZKPj5qxngDaMM2ksEXMEFmGChntYAbMvjFPUFq6wgXiBnaJ7e",
  "key9": "4tScXRBnbAZKofi7mD5r6q25RNPDPwKhktsx7WydfkEDDh2C12qsBSw6NQtMzHe2JxX7PFpmcHFDFG7dMAyW8jHg",
  "key10": "5xrekb8HDtPjusLeSehCmJb5DLbGsmxnEWfcZauTB4jUJCG6j2qPXon6htx11Lm9EWgVs4rijnggjimmPbpLqjTm",
  "key11": "5tG5iio1n4jbwYJBgxQsy5FrmnWoQKDDpiU1YozfxKVsHZTXhGqYsdbTcFcmnS21M7rFakAfpo6GaFnXeR9XBSK8",
  "key12": "ZgpzucLBzW6UBdHqoiZxmKFfwrdf3X9TghL66qxCuYvKjgBe4MQZiWMAacVnF92jRmyhaRDx1ZL4d2Z5jUtBvgN",
  "key13": "382gMp2sn4ohMGcsJDwsiwCQ5gw3NeKqZPWGLRp5e1rK7s4mcunYi55xFBeMXdRASZTEzwDskrNwbe24zAXHbNwA",
  "key14": "5wVT9A8EiuHeRybZ94S2yCMeX6XQhC7S1cUNJynwGxsSbVn8QGtixt72e8dZZw9WZLM1LHYGNEpsUEWzDGGvKqnz",
  "key15": "4fs7csnPr62bq8B8xkwgK2UntfbGMm41FEwbeRqzqEfFFKDvxYSwySErxmgp2zsJ9p7LxCp6kKUBASEcWQtW5zZP",
  "key16": "5sn7JVyUj4rmshmdMX3dLZSquxZZuPe6HApN9pgw7f4GSed8ZrTp6uasR4BAqkAhDxhsbDcM2iaGQW1gxFVezzo7",
  "key17": "56739hauWLBR63co8FqcsRx4EMhnHCgAqP3JaVDrUh4J4qwC8pc3Uz78EGXNNPCdY7URSuzdwMe3u4QtpPRKkifn",
  "key18": "4mvdrqZrZTMWhTEoNaTogSdxUoCfWMkJCLiE61f9iRSXTBKSvukoiMty6wisC1hrd72vHSYRAbmgrH6VV5gprFr6",
  "key19": "642Rh8A9h2Dw4DY6HPTN5TZPsp7dpE2k7k8aNtRLwsggn2U86t82FQYxVXeBYQBmbaABS2xiVP31CfLToLuKSRrU",
  "key20": "5HQehcG4112CQpnKSfzRTwvhbDpr22yj5zo99JMWWa7LMLMkWRCLKpndAV4dhKzjcZZJaibdafdq4tBzw71bEJ1a",
  "key21": "4GQrVf5z7rkFW4fHnbmuLbzpueBV7X3V1ocvnVnXpKciCSuw5sMJ5mGhQ21TExmzS7TXr1VNhRkvnyoKhiafBUAi",
  "key22": "39yvu8ywEZ7SwZua9otDiQiAWZ85JLNT9Ciqe5d2tH4bDrK9uFmAFXeimaWk48wXSKwJzD3TkNNnre7WxPAiwAsS",
  "key23": "29W4S3HudR8ASc8pxx9ybmeR9cUbkzhuLxjWAuzV5c9Q7PfNUL5Rpa7nQ5WZCWSaKf1gTKf76ehx1pWhvCNSjo6w",
  "key24": "CXKReLTLxjby8253wjKLcQbjRx6aWoQdeXF8nBrGadsGxQdbeyDjKH2zb5YD2WiYuou7ZfqVYYeHxsYvJVQFEVq",
  "key25": "5M1QzBBKVp9gBeUzDexNzBonJrLXDfbw3tbAqfVajg4xVWQtVLzhEyMocNH6tgReprCTSDXGkmTnDCrGAnEpwfmg",
  "key26": "2QggV5qYgpr9i6x5k4MFcCf2fXPE6yCndYWWuMAD51LWGoqsDSnQ2ga7zEFFidibiEnunMzdxYPAeHFVgHpYRaZU",
  "key27": "3koSAdJGbCdL7dQyYpCGbTJKBZyPMLF9MdK6DLvL9CppzBJPMwHE8j23PkhZU4mNkdNgiruRzNHhyAwC5veqQxSg",
  "key28": "qAtA3QKQAjpYBQwFCaDAeFH3P24R17fXm7oqtomeZupqMJU8NhhsHMxGJx6igQPNUCG78azRkPptD13e2kar4L6",
  "key29": "3faszvFSVHLhDE9C4W6viMwa7wvFscgkFhcdy2snsAjKN7PNqHnFrhKjyhMaAu2TTGFEb61eyBY6DJCPsrMZ7Pth"
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
