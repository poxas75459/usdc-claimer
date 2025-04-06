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
    "4FxtT8NLCfivUNe8P22dSnz93mXG4pMd99h8EyKspn4xRqiRoB9P7RenXDtAk952A1N9jmFJ8sbcpfTxPSxsPVgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhWzWjjC3Gz5tVfrMubf2EGFJWoZtuNqq8aimn6buTNAFKWad3kocDo9qPqszMTdbQhgAPG2Eim2aiFp9zwru96",
  "key1": "ZHiwS4edsrxvFRHJyiLWK1yYYJeyQq8tRr86FCM52QezrEKtqGmEdVKHb7MZCNVdAqZqwtms6Yu9bw7PPpvNmNh",
  "key2": "4d2R9hEhFTXZQ2dcMbkNrGcwHdCMEJscgBwS1T3jzELgYhXSBmsoKPWYQVCzmdW4E1Td73cyEUjuX8TeFCd3khBo",
  "key3": "3MPrcVTP3Vnra1TwXUzjKfU48xR3e2Nbq93xTVfZoRSB1HEfnwmAbJ8xxRir9fc8qj3mpEHKkjGwFrQ4r7P79wxW",
  "key4": "5Kj8yJweMqYXLzArZhtg1vkcUQzCxnEmED1vrufPToKhqe9oDXTvspZcYNsqsTNXhhTQ18Uejk9iDWqXoCXfSD9M",
  "key5": "9BFMb2yCePFNpDRCfjA3Pnyf1H7RxMfcUka1eyt6YXdsB5bGyhUmy7dCAhHcQKxmJf3p2GhHdDYWgvePCDf3bGA",
  "key6": "2gNRcLML5sapxrGS8XBhfSXKuCHGs8nKbD9TMVTvJmsSGyTstDY9zPfck5KRcRjNNTGrvRUkyADam2KqsEpMtx4G",
  "key7": "36qbt68NGzPFctTJRm4MB5q4vDxvXQGK2hFnRerZ4TuUrGQ9SZFtfbMSXaVpQtky3tBCCxEo8WGWYdW2qNHgsfCM",
  "key8": "3bkkm7BU7coi9ZoQHCMu73ToSpKsAwUYaFu5kh7Vz9tobmLmAKd4Lb52vLpgxGEWTtY8dQYWbQaBGWjNiM8ejHfC",
  "key9": "3SSsboVsX4cG4KrfCDekLWdiPJhnxduDYdx16zJbGPNgbvPLbcxutJH5apXeMFx4HBqvuDLyNi28xtJjaZjoR1me",
  "key10": "2eDoYbCLZLvUq1hfgx1ypsMhjJbFrSA9GY2DLLcz14aQtVmb2CtVRbjz2ort4VhD13T7H5oFN8ihVYuyVAdj3cHt",
  "key11": "4eMK9EomuK7PikbPBbo7eoUNyb7Yp1QdRzfsFKp1KLXa4sntyt1Na2qaeA57okrxaMqPcyVnkjCopLjZwRB22mme",
  "key12": "66t3o2M2QHtfgUyA4BNP2YTEiYG9AHeayS7Jo2m7zTYWLbUMrkx5YSyMjfTM5JaUxBHR37BkKtfC2ya5E2627mn1",
  "key13": "dTi4M2h6CWuipoCAZXFA3HSW7DHFjaQfmGDKVBCs8sNPzySVE4mpvLgFjYo7NRZhyeqBU1kxWx4WTUGc5tbJ8uT",
  "key14": "61KbKex8KHPhvhRZP2gZKDe1USntkP3ivxh57UMhAzeoo2To1g9DJGPnR1eJ524H8Rk8p6ddvdGVe4TXzvfpPpBe",
  "key15": "2UwagsGawEt1RK8cnKUsScp3k3M6p4YqeRsbPCrLyDRyLpUiDeVLFmvxiKBuFAw4ygvH967zJ7r1sYGhANDSJ1YN",
  "key16": "3QpwviDTzxpfczxVfPy7RoKCNEPxok97Tauo2Nr7gpV9Mhn3rm6wdByL83URLyey1VDBtoUhQ16BaKbfFNZeg7pN",
  "key17": "5PDdTvKjzhNu7U1BA1VE6EL1NGQEVLympKameRZdRqqsvS2fhYA4QMhi5D2KNye7AXJaLp4kQiGgyCWqxWW4qFEn",
  "key18": "5BE6T5mJetZqKWmyE1quVmAfr8vxfqx2xG5ZaA2UFoTZD4zdPvGZuxPhaMPKhubtgaCVNhrYykTM73GnxB8KbwAL",
  "key19": "3YtveYUderrch3mWuv6Nnkua9HRPnkXQteBGQw9agoXdiBahbPDjU15vq4tt8nEmnaFQPuTQQ3D7xaUbeU5Yy2hi",
  "key20": "3LEKt2tFEtPDdjUDmqREmH6JRvRdxjtvAFfMGbTMaN6MpaggnhxRgmJSsa48VR3sYMXWYGn7GnLqfojmXGQUHHd5",
  "key21": "36fDXb9hN9yR7m1vDawz7PaJxSTbS34WXphbWKHRNMkmjPX1vxXCyee7BwYWGmKxgRe6HK8rgVfdK3Zd8pehnY4D",
  "key22": "6ykHqo2vGPHCxqVi1MSJoZS8o9qpu9uwrWxvs6LLAjUnTxbT57XUpvhnqdnJX3WghRb5xxC9pm52NwqomvDYxRA",
  "key23": "2vZbDsveU9VQPNUHsxikDS9wimDvfPa45Kp9hDtmvrN5mm5L9zZf4XNq5K9dKUgP5poKTiFXXEHvvBZjEFLpHHfY",
  "key24": "59kWp83nd2Es9M1rk22aWYnoJ2wkkxDoNJbqzZXRbMT8Nvu6MPqqZFm88UyLv3Veb2GjKmSbnzM9S6LzdvBVsJz",
  "key25": "41DpXGfFSvP7DXeQFhR1e9dwefMb3QGrd13v7LKLNFRGWsavo6r1EQQSdPxQPujqioeR2Jeh3yEnsr7fSSYdQZLv",
  "key26": "495GcmbrziXhuyeSQ6v49BCqFV9trsxGS5jpU81zG9supji95h4N2731DDU445MV4iATztjWVzLubzBmEzHEHWvy",
  "key27": "C1c24uzJgaaqfA8mL4866jr6rAPQj4A4yEJur6SrKLhFxwMibLFRg1b6VFiPfK3DFXy3XKR1jxFeaV8TNu2SEN4",
  "key28": "4SUJvaR2YA2G1VnknLqe4nFLM2AfbwSCyYswQuizzzPVyXPKAUrH6qHjBj9v1gv1sQS31DooUDJNL1V4WPfHjgPJ",
  "key29": "MMESt5qK8Ap6jfiifgd8hyQ9UnZm6cCUovgwbfUizg9obeVCPgX65iYwdxzbv2AYG7KioLqts9SMYcF8uj9dUPd",
  "key30": "2NeDz2akj4KK4PKNEhKZAkYBNtsL6XJEhgtQYCqzazczZp5jKYkW7dkfkJ2auurhQfWjT6rAW2GXUe3bYh2vvDx",
  "key31": "5x2sFqMkdHh8y5UQqLRnp15EX7QsjPbbxnTUPicndgc8vZCD4j4XFRMJRboU3r4sEwTHEPHwhS6mtQ8E9GWgc9jV",
  "key32": "5c4RWKH97v9tBXHSfjAaFURvCM7Rd4bXWFvTHz8ce9LxQyzy7ATtC3Afu9NSgJZX5cvETMdgEJNY3XvnQFg11GAL",
  "key33": "4jzJwAnRrjb4WTNeDgGFte7MVRybEckiQpP4FPkwPwQyosntdfsVWvM4NkHYPMLipR6YbX6V4cFsyN6zbbPajqcq",
  "key34": "ZCkqk4AuhSC4JsruQdq1JKPsEsdzmfUAHqkkQxMiykhTPZjqwVbVwnXpZmJDHSxP21EtGns6cf5NwjU1P8hV5DA",
  "key35": "YUXJNoMvT9D44SioLvYfN5UV3QfaMCKxXwLJdHzwPVxH7SjQMfCwzTzReZRrbXYYat9UA5XmvbwRPuqX6r8NWGP",
  "key36": "Rp9jo7JE9XE9zDzjdSTKxWDobB8f9r56N3bEskutPEstLebzGkfbvc12nM7kw7SQ7sVFppSDixny3BRCgv6rE9q",
  "key37": "3jifdnWHyjmnoAyyCcWfuW69tbbNSZnnbVZxjozSBBXABKNGWGTNW4TN3a4rcQUYcwSu6nJuEF2Eq8F85rJW2rmY",
  "key38": "944ngdvYfbM1q5PvRuafD7Ddb8jfLjmtf9FDWnskTMKYcbNDviEKu9dNDwUoEKwtVangjz6q7sFJBGs3hNjgKiH",
  "key39": "4JqciLFvm15QtvRm2gpcg5U85iPPb2HN3Hd7hFpctR62mVrvtA1N4D2B3z5dKEhF3EALnT1NZujBXat17Yco7Ysp",
  "key40": "5CVLYxjF87Tyn1VJgmHUnHiZ5VkvtTrcYqu3viGJbmh7u9vpLc4GkHyfiPQgynAiVn4RAEd6hNJXszxFPFsKuH2S",
  "key41": "2XJfCNXR9MhwgMcngJKjDtfLNSg9PtErQ62YuuALz4hrxjwt9DwPKi9tTdds7Q5hgQa95igadnx1qRmguYsJtLrj",
  "key42": "5w7kto5v1y48JDULVc2CRmEohGhPTKDyxCsEJGjMB1S1DSErnMHtYtUNQ5yXhdsudHUFdDkNd6sJnKwJHEHz8NiW",
  "key43": "Zf3JkjKdmAzKjpxwyu5pEZii5yqc3MttiDuqyTGUMMYiWRF1UZnpBuM6SQHVuwWM1oXLRxbFLoVciJXpMmAftQU",
  "key44": "2oTTf7vVFEVyLdYVFfNqKxYitEHmxHuWwr4cxhV1v1U3VBFze4ykoKYZz2u9fB9v4XASirrmxd7NhV4Bts77TweU",
  "key45": "67PyYNRGQe4oUSVf18rmhm8KeaMHP8KrLmCNKPuu86d5aX2Tp56R7ehPiBzqK9LUAGwPbeMuHoPhLHmkcPjgvK9a",
  "key46": "5Juc4iURZ44NoU1zoSDQadeyWRQNVUGk9y4aM4BHoKYi1DKR7dxdsyzbKkuJseP1H7rh2b9DpDrttLu1qDMVVy3K"
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
