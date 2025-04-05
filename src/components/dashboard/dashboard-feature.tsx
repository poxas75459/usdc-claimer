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
    "48JHMXQqJAknKzXbjiRdAQNSeJNzxBrDgkse8d6aVAvXyd2mW9xwjSqqiLdbeuNoBiy6VhmPYpA1AYqNxRwL6uHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfGzW4fuvM4yWBqxuUU7XMcRmgZULVtioJKdoyt1cXcGUGD1o79yVopevjYF9qhZ2Y5or25zPbV5LgshjK9PoZp",
  "key1": "2g4iCfq1k22ykNuFtNjKhEwZyGEHSEjuXrUmiGZpaT2fmZGRbFnr5UMRpqMu5YdpMj5fnMkh5c9yKqxxHbT5w6sR",
  "key2": "3MpM6BTeRRFxzqNQHZiQDwbToihbix2oocME5FMboF6UH36bnK8cBrQPSYp88P3HGHTZJbrXWDuGmGx91kb9pzGo",
  "key3": "4M715nL4Y5VRk8dL39xxVuUsEXUM4a966o2MDaRVFYWgorDwqdXspPhye7E7rmi1Qgz6Lh6XcRc9J6WkjrLz5kLY",
  "key4": "54UJFg5U9WruEhw5hBMS8ox2U49M24v3JFe5MLgkWCVJ82ss8ZsLG9qwcjv76UWVroivNDpE7PZCtWEucSKG7CzG",
  "key5": "2YZcqQ3vT7sBysFPF3qT7SNLuQpf2J4mu21PKXry11n4rVa1MtSWwK3xPm9MwCsE1citYTD9afVP7LzPqhYYDUQT",
  "key6": "5RUbN9xuM3vjaGdwK7vZs17bHbJBCDDPuQz4XntRJgyLEfAe6UDSqsEzCNF6hGsxUkaYr8ADMuwZ8HFT17eYZG3a",
  "key7": "2GFHciL1y2tFQkAxb7YQizGLMVyzN9eCn91MxgQnPcZUX3JjJWPmuNY21swJSubxTq6vV1kp1UWMTYSbQJE1jMje",
  "key8": "3DJL6qNvH7Wq9a2GaAESARw7xEg1PGqSmbZLb1UqguUy8aDt5ysY1xZRwcQGcpouk1TDUL7GJXL5ReNYXKptS2Cp",
  "key9": "5WuYpP5mtiZF18cNqNomg6Kwt5vy7qAzDz4igYm11mfvLFtzswxGS7GtAgjfoozudJS1PXsJ3DGPKGUDvXrcTx5w",
  "key10": "2GW8rYNGBZo9dnDMy2SVWxtX1UHLX1YMeAhNXRoRaBkXA5NdxX8dPYqi8mRfQ7pGRcP6qMfF382EC3vkjw4NATiL",
  "key11": "5tD14qX63njQLz9Dzh7mthzJXLUzQ9yQxgufZRqC1BeGbpR2r33pwTUvPgAe79mnsuVakxKkkuPxR7KYZGejguGj",
  "key12": "3uU7SpoP1YFBdTGes9a2EPNqPpMLwUuQVBFWnTZLCjuFeGJ14DwWmJmrXrpokLiUUVreLrH8JuScckbytnqUU3dj",
  "key13": "59pYDJ638Tg1Q66923HWfzvyRguur3tS7kTt5RPGWG4sX5whWeVH4AHxeJdKojpqmoCty1MkC1onPeXzmjeBWCBX",
  "key14": "4yBnzd7qwtLcNUVQBTytqtDSv669558vMcoG3B19yyUjSQ1NVF4bZsqKUWyGzewYxtCtdTGHDTdnN3BBiqErmBaX",
  "key15": "2CzV99ZTSALb9e6534G3AMoiAqhhX8zzWQ1jDVGx1yhtnAtkDXfVpvbfjGJkhyydLXbT8fwZYfAiwDW4eMbtrJWm",
  "key16": "5DhTw4oPBRtXKhwsGAZad9SG4yUn4STM3h1Pzpimtf3rhoR3pRrDhuRb9SCjDAs94XCGNSYkbxfymARXmDk18Bhe",
  "key17": "2haN8KtLhFczZ79YTn8ZWQsGt36ErsAQXGzhUqARJ71M51xkYfpuxWY3Xj3RM76eDWVuxvsSZ427gXANoAMeyn5i",
  "key18": "5nWGNRJSQN1XqpwAATYYUK9SjMRg8SDbHcWi2pxCNA4Jb2gPkoFyFYd8oEzgujWSNpkYS8VKX7FbA5b7wx5VfLeH",
  "key19": "2zuLviPpcL6GwwrfoDyLhMqWYaCqfYqW93aZTqnVBoz9EGmfcZBiAi16q74tyqqyQ9srJ3bXYERB28w7EsFYQphZ",
  "key20": "3KPcVTqGffhsxXu7M2yxrXsdXaZNgZtS2asPXohDYXQEaH4QEEDptaHnemytYG5YJNWXAFVdbJAFqsqiKGoz3EWm",
  "key21": "3VyTYhEamUg7su4mRmyGNXD7Y3WkZJzWK869aWiZP3cU8bAD6dar1E1SfhrEaifmiine3f9G74W53c5Dju5cLRgp",
  "key22": "4Z4X7u1emrWEmfPGgkqXA8Nn18dks1VbZoogEapepeaPGazQwU9GwRDyfNebbw44sGmRNDvYW323svBjp9xRDTf2",
  "key23": "3VyjJvdEmvo1Cxjy5AcZKWbRLeUPb2sZefBcCjCTQoupWmfWmuL7qA2UXdy2LwLknUBJ8z2zQxyw5B6AgKKWAdK5",
  "key24": "5YNP42jkUpUSaCfcLwgaYoc3XUbauiV4B9JyQdu57rKWUfrVY8j7t2424WdNZiAJSnyG3ihUuBReDLHW4AUdsrP1",
  "key25": "46jLbZKub4JgiXZ9D35b49UxnJFzRRYzDEuk5RhRVCoRQVqmNxrX7miyRTLLWEMSr4C5U6PUQk9BRM7gV1f4eY3e",
  "key26": "TQuuWMx9Vr7MGgcgCmkubSVg5iZKBQPawFzBbXDpVosMF9zGi9Gi9re2UC8uW3chEybtUQFeDiyjbqB5TfA1jmh",
  "key27": "3aPU2AaJs7hacQnsEncdRZZ7Xn8DBvgBHdhVuH8vC8edQAEJQEKDmnWjuShWtYUa7Bp6eqbMGXLnU8aSnbxdFEwU",
  "key28": "5PbpKyuRoH8yzSAkFmetjxFpWEFFcHGoC4hwV2hDFs59nvQGTM8e2EmuBqoGCGeAHMCaD4cfUB6jJguDMsGJqsLf",
  "key29": "4Zg53xjZhib558H5phDHwgUEY4BbN89Boe9D8wphS9Bzu8YBVTGYWF2cQN95HARNxccEPzzJSRV9YqHDahCJMgtz",
  "key30": "42uAV2e2CKR5pVhy32QkkyLJxUZbagwAGtDBjAMXmBXv5zNFuqTVtM5tTaMaxr9ZufcCyrisKHxDvc6W5z5RmdKV",
  "key31": "vtVdoFyjDfQeFcMuMtHANGrwZvksNDT1pWgk2jq1BNyLWgXXUAYF76MEtMoLCSvSqpFKJnyZS4BCm79oY16pVrY",
  "key32": "2wp4C92iEWot3yPMjBQXdsPKxz2jjudsfEb4j2FaGNDdC42eUviJxiG2HWkn3v1dvbtr9AHPKLHbo5x6o1iffcZB",
  "key33": "4FbjuuFXc6wV9Qe83fE6YQBGGACjayHTiEFjQguUhyFqGE2hPDYkiiZpS8kgPG7uy6ro46N8cFpdadH2eo8x2C24",
  "key34": "34NrgmJV291WZHHWeBXzFVTE4ubGTThJEZ4gMABe71ssBBqgrqcWvsjAGDE7aQL3FaymqQ2XnpDhSpfi94vaY31A",
  "key35": "3P65X6XtM4LAospEU4ZxhK73x7AMfu31J47erUUBn8cFj9VRGVbjxGD8pE2QxfBQLbKQrjudS3Rr494AiZmFknTx",
  "key36": "3PFBYG8x9WnYLyE441ZCynBJ7tyZBD7sf1xF8zxc3kjuxNG9txW2xNThhogY33fMARa3PFTjZmJ1qyi4WFTiJKqh",
  "key37": "4WjyZwDBs3JvXMtFpT5Yyg2KEticDa5ySkjQrdTwdFiJzavsov9LKNefUTrrymcafQy8fUmTKojNbadLPG3EXDwy",
  "key38": "2wFb3dYYQ9GixvULeQkDsRboRiaADt1o8KrbYGmp8cLqju9jHGBUUdvwkBak1RUzyUCAXtxpwDZwosdyp4YdNWnE"
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
