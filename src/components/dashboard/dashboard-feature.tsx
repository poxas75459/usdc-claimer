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
    "5po5PLuhjx1qeB46HTh2iLNLvDZ27FDtBHJvaBm8kRzrk5YtQzMT5gRcMbNxbFH1RtoJhbbxNSjv8CZVhnGUzRps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmbXJSxonQUQWcMLHA7pC9miN8hdsKQRxGsXWFicUYBLL8zPGz2ogtsqM1wifTRKa6r9BUtf5DCft1Bi4yFvUuW",
  "key1": "2AVq1wbYy8DXrmiV7HSUSfk7idFgbQ33N3XnsHYkzkJpEfN5Q7dRnkpbuxt7vVEkujRZzbwgYkFGEA2x7UdVX9Rh",
  "key2": "2MLP9iEFXZk7mvW6iZJPLyaP69neJfxeWGpHFveYfur2A9PKqphsf4vYjmrcSVCd85b2qnEXBSVKYWQA5DjTKNt",
  "key3": "ttEvfcR9ri7eYFbP7mQ2NDjbfHDBWK94S2YC7HAUgqnqreeRoA8Wa62BTMvjukp4youjAK9DH1krTojbFqnKAXw",
  "key4": "2SXQ26DQuupE8TxX1CYuVDxvsyDZ9L19LdXASTTbAqLsJhVgXwAZAiwPuSws3vpakQNNiSd13SLY52YDrTRSYG1A",
  "key5": "4UstyuVcQSS2CVT6QSiCbwvvMbff5hBzMw7cvCeNVcJ4xoaYvhHM1yoUnKWaa83EVbEEH2VmND6Ji7V1B3fS71bf",
  "key6": "5AGNG9F7XSU7Nteg6DQ5bfkFDZMkA1inYkzrRUG72q1jzb3T2WgzQ25TTMx7fRvtJEfixiNUWppN33vMuF7Gdvb3",
  "key7": "2eFxtVKYND4SZ98dhcnreMvJSWj4pDjoxHSSyKh79c7hZNmqQgZnZwrUmtnLRKSU77RCx4RtRUm3mMW8JE7RCXmC",
  "key8": "4GgZW29rwFvTyjkCcSqQkAjwDJxe6fk9bajBpLujmpcYw6zcmnTJFXfnoM56nJUbVPASoYxQdZTgwxY3qYzArcuq",
  "key9": "5fCY18C71ruWan9P5xwcpYfSi9XtZFX1QNygi9f2qXTYC6z81w72YBTGWeQfjp4yQDRJEviRdSAuYoqMx5yefogS",
  "key10": "58heLnT3S7e71VtQxQMezxcRHpGnjf8GibbC1BwyCpnP6SA7jUhfrCviovqyWh8EDAfa3kStcxsyqw4gKJ2jBfqe",
  "key11": "3cy8m8T4XMbzPMZ1fij2bqB4HTLin8vkdk2PRqT7q3frUS8qxfpHUMq3dPJfEY5NFv1oxfjq1rK7Sw5oKsU8FRys",
  "key12": "3Md7r2zdBdPE4DVX1aTJeUURrwgvBMGkzMTdvxB4WXZqLd6nvLm7UB7Guq2tgBBYCchUdHrtAJ5a4pnWz22nt8GW",
  "key13": "5Ehhwfxy8tayrCAou9osbkAm66gWjBhUyS5cEaBDJqDF8QhhVPaqXnmHfmLa1EBBQ7CTP4PsevcTQpi42BapEwdU",
  "key14": "2CJt5naRkqkbc6SEHNH6Wb9yd5AFCabZ6gC1EDV3Rxyu7cYYRmvuTabwTgRKGJtNrURE7zZHJmbX9fQooQXhuesL",
  "key15": "223oP9PX2vD2mdd4GgE2txFUyp9vKnsn98wgrqBMf8ScFXdaoJzLKmkwWMgrz2JNZMn2NaGW9v1kfSB5tantV2aP",
  "key16": "2mXyTHhbpZPVr8KpUR8YqKxyQqAUvQUWmTxHBexMHEdzJFSZwBbYb7oiZUUpn2R4yA6DFLcMVtF5De5Mt4UGPQmU",
  "key17": "5TRPWE3zadrscPi7ApRJgLXd3U2tpWKrUAuqgPzkscye6EU8R14noVdSjcTQqWvXTnoAdmmZiync2iqKF1n1br5Y",
  "key18": "64BdBwqanGuFoUJzxHaooMrmNYB9iqEzxyfbfbCB8rQoRURzJLeT3JVr8FEJMa2i2T3B5GUdR5QQmddrvL56B9Rg",
  "key19": "2QnjJTwwhG8g8QEZNNkK4YqLSBoJKsEgzcYwJXobjq8wssxdktfm7fAiYnx3Su9zfwHAy2mVwXHDvuARBBacg8Ud",
  "key20": "2sBouy9MPxTzbRVFdFHPNfUEM2BWbnS5krziTrPF1bSshYG3yb3qa2duvyzSpQwbK3dhSAi3rM2MRYtpur57SX8j",
  "key21": "3xnjTFqvaDpYwagEky8ikhzaGkqCMdFRQmRL9UzTudr2S5DWfB5Yt4AvCU6rWsC66Di5uf4TXsDASebQgeVYVoF3",
  "key22": "67aeTYfxvnh3Dt2N7dtJ23zzB7XwMJs6TencKPscowN9jthtmJeDJh9wehGgeGg92b7zEAoQxtfqcs8Ed8pSLtxB",
  "key23": "o7NdP9APSAbqeDWHQW1DMVu8HY1dLG5UtAsCWJaT6DV2rJQ8Unq4p6RTEBGnpH4XL5PFnFoQfyP2HnUhPLNkfMu",
  "key24": "52Z77E6u3oDpjVgiqz9ybEor4ENCzds1PLmvxhZXWSLMxUcteVz6Yyd3ugRANojnB15dyZm2XbmHr7TCDNukZwHG",
  "key25": "2SDXVwzM94b27sCqq7w7HR4iaSEvJ1uGoMerJye5ecYJubhvYn4mTU5MRfLMvqcYULzPdBDso4byiPT6ECVkyHWm",
  "key26": "4k3ssjYXM4aM5Tx1vfgxBu8XyVV5Tfjvhu8Ssk6i91hmdQBU4B5NnsTTZ4CZ4SviukooMBwS6Ema9aH9hpvKHdGq",
  "key27": "4gzSvFBHzbEBYRT4RW3kGsRCjevC9S9ZJkr9nmCChWVR83zoY369oHuwd1ztCQU42LmEsU5jiXjQL5fJVxjq7U2u",
  "key28": "3G8XvuVjHmHvi7YQHA5TxSzSmesXLgUxLWuyfJu2xXyPxtwByyPSGnuuyiqy864sPsZwHXanjHt5HkLVXWf4xHkf",
  "key29": "55PDZvB1oS59h3RAB9ngcw1NeWU9V1RC1tu6Bz4bu8NDMfHaWkSoLiUrfJcDCwgzSwPHZYqCsVS8tyfZvkrkrk37",
  "key30": "5WPLjDcPQkoWmMR7sq9bv636hoLPip4htysDYk2dcaiugqWuDfaCAn7oS9XLLsKq3knDUPMGhsAXMhuSsMpgKn57",
  "key31": "2BKMpgH96X8cVZxUD9UPvWSLs4nG6mLPzuwCqBp3LS6qrPS1GzdccTYaZrg3qhVho4vPrp3RAZ72rLowLHUkyq3w",
  "key32": "5CDPtwkKV5uBgTTbmBA6XKSazxKPVJZQtk4Dc2qdd3rtH2kpBphBUknQ7GJ6E3xHxEvDCJL2A7Fc6PvKGnfRXJFq",
  "key33": "3YXVAjSDiEj3rjc8rsz46vkL78wqVbumCDusymWr6kKwdMRfUSjWDfWWa27BrPSqWncw5MEvC1Da3vtFKhW7Zcrr"
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
