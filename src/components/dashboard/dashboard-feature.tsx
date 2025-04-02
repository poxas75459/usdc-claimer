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
    "4GFFjvRDuVwJxRD28cHvn8Ltz9eLkBdsbf3yV42cXdKriifTnngjgatPFsCbxDbzZoAcB1dxicXNSFMkCqn5KCVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Ljg5Ria11DCJsNsKDbFUTuYMEnp2T3TUTzDJHjP4XuX4dznZ6iAdkWC8wvEZZzuyCTwgS8TBUxJYGgQxMEdd5B",
  "key1": "4ttPhuFhkmcoRwPU8sVbL8e4Dcot4hk1rWHmNXWHVP1BLdRua3vakS4t3FhsNHvxNLqawsR2tUBS82m9tg3JAZbu",
  "key2": "3832owfoJxrKYwMPhyhTc2nxJHsjMBUHog9inWrMnNFRbL1xk7N3GLNnvMn1j7zQRaVACwpVYj5G1JmfUZvgaQmH",
  "key3": "65j1htcD1XEq8VppYa3GRMbnRTPkckjvYX7B6WSL7fxLznAod3KQabHAYGPGnbXo6nkbEUjKL454KkmYgktug6k6",
  "key4": "kxVEMcyTvEWijJLrgyMSJn7m7C9Zjd41WyeRnNCETyMoRepBrRts1svm2hHfbUW9q8JQGaAF9oxi85UX8WdkZoB",
  "key5": "4NZ5aJ13Fy7DdMQHy8i1PGrJ2JmWpQLpBRXT5PEW2HZK5q4fLZaNbxC7fR9oQ4WSQ4HQKVZQ2FY66PxUedVw5z6N",
  "key6": "2ZYiUiBGHvzX96uRs2UR6FcHfqs1WMKmUD62bYB9gWtnXaA5W1A3enMz79MWHVA5DrmefV3eLRfQ6hkR8fq6dJj8",
  "key7": "5rzUyGTmtnD7r5Bif438D6Ve7SUGSLzteLEWJCH4JMyYVopDCPX1cfd1UQfdwguwGRKwTVYJzynW8nKrwP33ZX2d",
  "key8": "4oZQZiqBVS5cHXjod17HkYCAsJm5y3hssQn1WmT1g8vSPHoq7tz1jAGX1YhwvvUNXNCVekRPbZBUdbKiwpudxCCD",
  "key9": "5wt5xRbhEUYkLPJFL94aSSLs6zaYA6K6aWS77yqdPLwHNkSx8dwn3ZojpMQA4sH4uvjS11MaFKmVt1KERRpz4DYU",
  "key10": "41wejv9zoQXDfU5dCvKGy3maiH6azEGEa7of6QyfqQBWwUKcvT3JGVtvTPa1FEJ6eqtMfMCv6Qoo2tFYgBud815F",
  "key11": "5mPLo6oTaX9HVYjxNMkaVjgoYqaMASoSsWd6913Lt4TM5wqV4sHDmGTvrtudYjYgGrGSeK2brp5xYzMZy42i6yVj",
  "key12": "2Le7LD6nNzR1D9s7PLhMewVHojXFFLnrXxGK4q1wY1vFQi9bMUBnDGnfY7cFfGSi5RBCGVGpa7Y5ckp4HxDFKLtP",
  "key13": "3ciYLsTkbMSYEYSbj5U1GEE43voVAwE3Hc4zxJwngZz1gSDj52raZuzJgWgtmcgZ5YZ8ze2R5Rju29R5FXmN7M4N",
  "key14": "53fnTQ6eN9Mq84RkeV7TXnEA9m8RjpS7VEM3JWpSQ8Hxw9xbrjwjsCykdFVfXbekuCUG968B7t76no6Tbn4y5XtW",
  "key15": "2NXPetEycwRbf2dHB3jWEmjF521N2P9EUfbCsMii1LYYxQRDSCK4oha9jgCZkQyHqwnvBYnf4nk56TBporH7aWge",
  "key16": "5HwrsfT7Q3htVbKefmtE1AV73wvLgnQWE9FmcUsgFjF2zSbBCyq2BFq8yxGmJyQu7xmZ3h1kPwHGdz3LoH3cx9qK",
  "key17": "Gz94sjW7pyc1bkx3MG9EtMudmDFaPV8Fz6DrM2uZJWfnHyxSWuxQKuNgJh9oXQrFALyfgCdZxkNW7Zs3CweF2jx",
  "key18": "61PY3BwEvH2UQTas3vPVJ7ExjfCEm24bb7sZECUioRntbT8Je3dpyFCgv68s4Qje5mP4GCNWRtvFakn7hLPtTz11",
  "key19": "3TuBcnTtt55btuR35wvvGZRFjsayVU6XUXBLMWK9VD9gNvpskVtbs4bb1Ahs8F9P9zY5NvGzDSgHF1dYxUSEKfop",
  "key20": "5o5KaxEoJeZvVgub1iyExeqEaQkxr8rW39gdNwiXfgFomXKwk6yk5yNffnnueLVpZnCqVkk4rBUPEtdi5J3CuaRt",
  "key21": "4u9Z1iQUaNyz5V4W4uf8ZJRd4Ly6GXXey7DzWTCF7RdVgjemphoqwwM1gkqLJwjwepRCXgmAxNFpL8QTmuA7eRcB",
  "key22": "41jW4Q5KCZ4JCuPMXiGKBDfx3ZbcrKqXWATvbagg37XT1iSNxsq2tFCmP2AFbaPSTEjbPhtp8RJ6BUhoDrjaNHoM",
  "key23": "2sUF7kn4akArwcCBrPCSoKQi9mQtpxNexFACWYyXh3w7KWrU3GA7KFSX68kSaiE9SAQzagh4YjGfT3e1mcLcDhEH",
  "key24": "2UpbGdmd6F6MfsGN9aEnLg28526midgob3kToHDEDf3MgUKEbAJvm5k8mKNPKmTTTXiFhhjaTVBngXq811RJkbkD",
  "key25": "58Az4ecQ43KWrEev9yjRw4qCEkXc3jaiaG5jZkFis7Hg8YjHCXkSMsQAm6aSpCyNHF2FYgT5Xfv43ESw5hfvtNrr",
  "key26": "27kK7csmBHBSM2wW6oP3JySVzZSTcQWHWggDnc3tjvsfMEaTb3pkUYT8Tw9PhqctmPFpp1mGZqfTUPUtKzwQ6qYD",
  "key27": "5pPE1vAaR5NbdqRhfsttCsNrtpVjrxZgky7sHHCKrd2szZCrYzueZ4v1BjK7Fs8HKMRR3xAEtgsc81VGTeBCHnXd",
  "key28": "2k638ArnJsP2Vrt6wwV4KKHiK7K3ndMDw1oRpbxDxA2St6xzxrK3dAgsEYCMBcdJw8hWpSrWMgVDEZc7ova1fni5",
  "key29": "53so37ygq2nNHcCMGRFnwi4yKFGAn9dEBBfTtewFrRRH5bxfRW9cBb5s4t31h6C4Mp4c8DwbPVPkC57srJehtXDT",
  "key30": "5Sy7hPD7UjAsYSWLYsBec5hWtnESqcDdxbXL7Rcfpiu2XUo26sYKx3jRgfSxqhMhC6K7asf2PrmyvttexeoyHb9f",
  "key31": "2MoNHY7mxX3y7KeHgNR4TCvWHXbQnNH67TMvwVyway9BsmFvMXidLnypmwXdmWhXE7gxs391A47xeE5CxyrTHpUs",
  "key32": "2PyhFhzRdECT56RPd2zBVuWUGvHrvqhn9uziEMGjJsVyCA6svoqZaYax6js34uQyu9eTLB5GfFCED7z44vsC9ZVy",
  "key33": "4r9TwbCSnLX2TUGRBibTE1heu6kcEoCcbshX4qUyqkjpaZ9hGjTzvDugkJMTSyRgFKS3xCtFMMeF1EZTmrXL2JyE",
  "key34": "2kH7h669w6rby1NG7BVPx8wYhqbgDYqzhhVsn48UDo8ZeFdqsRRv83Cj9PJVgMjMXJCDw5yPXDHVm4HM4Fods2Ct",
  "key35": "59FkWYD5GVGJcdjNVN6rE2K24MC2fhiN7mZKVXNgFDHWAMDBXjmmycwQawxLs87f7X1eF3iVTaUXpen32ted79X4",
  "key36": "RQjerwy3VyMqCx6CBViVdKbuqFb7iAd6wKX2o6ziDpiMLdaLrebnkEa4Lz4akrrK8yH4srbtMDC7X11zmkpqL5X",
  "key37": "3raKujosnNrcvwjvd99Q4BoBNb9f82yS6vQXsKeiDXVyT3o6mb1n4cuigBUKd3oMJZevfC17Ef58yia8AqqBY4HQ"
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
