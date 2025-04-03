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
    "632qqCQw7TYgZvMngSiB5rML1KX9WtuTemGg5CFsVoq6gg8cMDr9g6AJKnoYhjRsqPKRgzHctD2KJd7kAmkSL333"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jtnAx3CW2D12o7xDjm9eaacFCAqKa5fackibsKwa5AEkteWGzcuyaPWnq5KyaUrtRV5RxS4dgAst8RQRvxLPqXC",
  "key1": "5KULKPnATUtPXuzwoLpbkdwhvnvUu2CVAJXm9KEU69vSt3UduPWGgymFbR2iFfnEYJtvHDgtbwZdCtxGKcmYegsM",
  "key2": "4RgeGbgBrc5qTFuBCELhJq57J2RLKJLRZV2V42WcFFTjhxjCH6LyF5t3WeUpBPW4pFguEgHaeKaFdMFUny2yMVrh",
  "key3": "2edjQj287qgaRNGHVtVm3zotiv5Cwg9FWtCyQVjjkxwSes1fr8TWCrE7RCYraj5M481jUusiAr1Gp9GR3xCpJmnK",
  "key4": "AK8z95a2NzAraBp96Ko1y4HoyeHuiWUie8VbMy6GYH97qFSx7DWsVvcYM67Pmi3P48Yqx9GQN2GvvYGLr4T2orL",
  "key5": "3WaiTpLDxkjPUv2zSgU5U5owDDhRMaaHTBiKvEo9TCYPQe22S8rNkisjSWoyYnctykwnpCMgwzd4iC4jHa6CP2HA",
  "key6": "5pi2XqsVpm8Qf9VL2HgrhWhaV7N6pxPeNPY4ixet7da5fxfGiNMHrQjnonmHzfhGddZCXSzs2uEXPDj6wFY67dWS",
  "key7": "63D5wDKC5G8sPaTvzErQbN2E2rGLMgRoPNAXNM8dScXuM4PxQu1zH7QStFnQQocKSu4RZXHCb3iDrJNa6nppubWb",
  "key8": "4Z5VeRKNpmvzedpvyGxxxPLh8EFJzM8xGpSJs2n2rYAKC4E1wBHX2eN3b9N4kENt3qVwv6cjSnB8MhopHGxsKNDr",
  "key9": "32unCp2Nkq6pKxffp4A5u1kYeHkciH71ntwXLoSKHA9XeqRqfC2E8wo5AQJvS1XfqAgwEFpFbwAR4C6yFGPCax4e",
  "key10": "4vwQRHP2vWr5wt5TTbHqQK4Q1UnHM6MuKabJECJy64z6uLMmAnLCqjxUJiujUoJcex7hFH5Xd7Ywe4W7CdqhJKCh",
  "key11": "v6pbaR7uCMTRtFmRf1FHia82uRpWdPsjhxib8gT5KVB6wcbd9bHWtQ83t7dV9sScSmcEQVCie96RDbU4KC8HgWV",
  "key12": "4d6kgsNKc1Gdbxj1m5ub9yFNpkdMZUM36oFjccQyzRHbYG7y8A6zFiKGZzM2D7xfGozmSnLYE6xXYionqS7yS94V",
  "key13": "5LV2BSYQ2wSFXp9taxLi63CemXQ3EFHCSvRLESLzACZGYwCU4rdpyJs1pGbX8dTkiUwyLsBYA7L3xWJc4wV51UL3",
  "key14": "4NjsKgvGsuqDHGeYryuhnqjxEo85Hd78gj8oXvqWkK5L5QuyRTXZWDxaxHfMv8N9V9g2Tcbs5pqmNCGHMXDYssW9",
  "key15": "3kWEdpaVfnibbLuJ9vFLSPrLhakpswZSTCQrKoux4xrHeim2VmVAWHekSyzPatNvUkm9uPrMJJwSUzL36SsQBVB3",
  "key16": "3iBhwPu3bAqZmwZz7zcVmvmZxZpdehK6LsdcT9cqkfocuL76ihbvuikw9gBP5ntGsmSPnSndDoA4WA37CCHZBNdF",
  "key17": "oQRRvhKDrjgWUrxgnMBd2QAdLLNqA1dYA5kuXBY7K2A5au3NrFSFWcgAFfBNunbipTtwdCZsu3CAW18sTE713bL",
  "key18": "4iEUnoHmtnfPBVXmeQASV8isXruKcVb7J5hT8qG1ggcQbskX6CkWWrwuGnuZha5zCega7geGBapzarnLLyXyDwfw",
  "key19": "jPVPNgCessk6doMG9qGafPfMVM5sgA4qixtVTsV2gktyCccQE92XNSKAY4P91fqWmg3PKzkBq6y7PP7XZeNw5At",
  "key20": "ibjEm6ZJbzbN8ynXS2FszkfyvY8tm9s7yo4HjwSJNQQUNzeEWEoGiaboZaLipoyJC5PYj3z3wVDDKBtQynu6Kni",
  "key21": "3NJhtNDL9MoBw48MRC7YDrJUWrRHSpr2zq2LckWhrndmNrp6xJ2LahYknqEDVf5jsQZShGhumLJXwtNVoXpJnvRb",
  "key22": "4AhnxbWyfZLAfUCQ53x9GEaZ8TanigyQuX5vGLNv9RZ2PC3cPS7a2qj3myn73fKJpy3LGvBeJqKibXuUyAEk1mMX",
  "key23": "3S2VqcBj1NSheoVDRfK4mWxWLFiJtxReesgXjbp4ZeatateugwfEsX7n215AzakmgzsYEJsY5nNeQTVgHtcwTFGw",
  "key24": "4wtwjP7A1ZUVBKDF3KVPFWsqdQ28GkMJmggkNUp3ngzs8P4KVPRo1kVCHkUMQHHxSUiJt9T5coXHoFJ1czs7hCCN",
  "key25": "5Zd3iGxxQJzzwt1Jcj7Ss9aESdVLXrCgbxbwc4wmUd4y2pAE1dTmuL36WKriZBmzBQZaLG2JNDwCZP8SB1TAjMTF",
  "key26": "24zHc1qPCeD2f6qad3fTQU5VMkoTkbxsBKNNCkdG6pPA3dTfvV788gtsrYVHvEW7RQtFdDizHqsPdjS9zRxXvzEi",
  "key27": "U2VWjtEbwevsBgm1Mhvf4v2J3aMLCseTirxNr9dCx2XKFHe6wM7gMwFMA64xFhzs1TwJG7zNgLNcrzfvGi6g5V5",
  "key28": "5j39pEuH3kieFiZXaJqx9C8iMACambfTZAWTBjiH75dMwZ8nTbPg2tSFVPNQMnwiBd46zo8emrkp7moHRkLfYgB4",
  "key29": "2Wu7JAsR6CyCtD8hx4zPD8PhcTMxerGHGtRdMv6JXTk6dRi6cTJYTEiXqeo1HqB9fH3Rp8XwdnpTAiKE5SBnd52F",
  "key30": "nd98FTNcka9kXykHyg9V3htFAQmxQRT7gjYCGRibpQA4rXBcTdCfV1JddWtuSHtgTCh5m9vj5B2gK8FmRQUWTxe",
  "key31": "rHinNXDfRkQZHAZRok13TAfLBW9WXimqXDuJ7bcuKpfdKnkRwGdz4LpQcsbhs5shc2ZXY6iScQPGxXYN9CBaPdL",
  "key32": "5d88ky7TGSFMipJVEaqgpfeU418FtFanrJ56c2E4boL293TQpGygqvVh3wypxod5Bb8UoqDdeRDw1469anWTjVXP"
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
