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
    "qNCiUSY8vh6U1bEVx9MjU37CdVy2Ah9pC6P1c7Z3iYH3JNTRJFsN1Ymt1q97FH9sARuueJNddmEAT7sTqdci8wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29niYeFYTkz861UEzazo2tKPz3C1ehNx29CU6LHfmuBU89MKyqFm612A7kEcRwrF6FfR4mVYSJ7KgkHRzS9JrH7z",
  "key1": "3dYZ1uVCbA7pbbGC6j8M8jeQfvvvqJXUcSJdaZmCHSBZR2RaFvC4qSZDmuAQ5ykbPYPgcNAH3ficwKtP4eS1QgGj",
  "key2": "2Y5XqedFXV9kRkdQzhtpCugzqXzDt7JV25dJEkGqzHj3S3tK761RBkPQtKQMJ3JtjDfvAt8ExVv2ELDsx7QPPe6h",
  "key3": "2iqsMLMya8qK17i7ovE4ncVirqF3xsKgsZ9beNW8ezaAmzwv94V6rGY9d46YvG41L5tcrayWYS2XjM4XXo9m9jt4",
  "key4": "85nDZUUSUagjkQXCSye9GZADXNp7L9RzVv8q9s5koeshKD9En9P9vyNpUjqnAd8voHyQfDJAAhqEYc5ZT8hUza9",
  "key5": "3zGQEBoFNcdMF3F8Vm8zFebSodx25j6vcLAkY5keqycCDK9FWn7nvtLvzyuf8WBNiWkYpBXpsodqGnFwVeKHYaB4",
  "key6": "47sAE7cwZvoeo2srPtDsZiabnNLu5zasmUahEszraX1aHLH2an52rbYQCfTet1J8vtkTSzkWX6XTXVJNqE6GYpim",
  "key7": "5kQDnvcLE12Fe5SbRkCPqZnuatn3KjNj1UKgr7p1o6ChUNo7qpeemrjHYxASs466RcVLoMGsBX3EaDZLohrH6VHL",
  "key8": "4dEXBTiaibBTkJeTYcqbk65KsiqJVVU76RVzy9EBHAV7FW74h32YDoPwFLQozXLYtCGedHzhMpc1iXE3FwKrCsaQ",
  "key9": "5FbsMnUBjcAZFdoFqfQK8enjmUnQjFmjbB63TtF4BQC7JvZbsjW7TSy9RfixQYg1GS6aiRuRsvLrV3K3bftDSZK",
  "key10": "vLFaakckVM3MSVZd1v6qPEGXpo89Gh6Kkjx28iGDNZUbi6Nqmy3qHfvGSh8D2AxybDXDh7d95PAgKaEUTM6YsUL",
  "key11": "5LHDHTyxHJoY4iNV6EJW9agyADc3YCcorvVbBAKA2iA4X9p6uCBpgcXVe8HEmEsStvvz4EjhHKKjX2jNUEUyp6RV",
  "key12": "52aoN5m9dqiCiAe7pxCTJtggJaBymb8yxdS2mtiDh2i9JqR4tZ8FvtfSvR84PWfX3tRpAnJG51wYVqqCwGnyypwQ",
  "key13": "4JbwSkERNbC3mYDvpSiD1RipoxFA6CcrSUHaNMAVBSC6tPzufSU8bPhAMvjFSL43dGBtanBZeNY5nu8BpSVGReNu",
  "key14": "gntM2ee7DaQoJiixCgpo8quxDL7eYmNUoRPaxJN2ymxNBpWbgBsTepeq2z6fKKpP8TJGbHmrXB4P81gZMmKFnhE",
  "key15": "5eCj6hTJaS93nfkCstHD4GNYHu3N26wYayAzRodQ5rGuZF1Ywa3jaqCwmkPaKKMh51oVsSY7MAKgfeNPkqSCp1bZ",
  "key16": "3nGu1DSgaEUHs2rnR58np1aWFsBet1E4WLZ7SeHaVmDHAea54cZwjsqA6NtmeiyZh3br8aqgdxt4Sk9qwEAAWAxf",
  "key17": "3N4AmqbgLaQkwzMsBYC5hL6gUS344w1rXceP5pVCnQbtW3nbpkLKi7hBAxvELmrLM97Bfv147VXfvaTuAAobntJv",
  "key18": "5KxRNdQR3Z91dhJ9Xbasvd9F6qokn5q7ftgV9CZswCfVofLRgFXUDK6K3KKTpMfNJZH5w7Gy9gyNUV7UsGNC61k6",
  "key19": "3d3jh3ahtej9SLGqYzciDeBDKfewtnxard7zGDusfHjMdot9bPoUoVbTXc9xTpYnjKsJEUpr3nmyXHuNLKrgcLHt",
  "key20": "5hdYSBiqv5Bcs2AQjX4PRWA63d3HRNUUqMraXUtvQyhSRRsroP7eiF8TJ4cnnJdnzUbRVKFntvm7Ykmz3BJfUzDr",
  "key21": "4Y1GFwKDV4qwDALHk2Faev3s5iCcby1dpXtSeFSDk4rVbZ4unvU6DxK1KrBBeTDoNNZf53hcheWzbkfCzqLvyVX7",
  "key22": "47Rp9L1tGTVa4huAesvCBptfixy2Th2W6JnWZQQC3MFECmks1ghDpC37QX93RQsXvsZTonqR7kSmU4BeQLeoS3mB",
  "key23": "3RdXBtqGhyVSVMmFypPmf4gunWvFKtHqa2R9Fj8ZwcJkiAaBeG6Lwoy56YM8dEfnr34iffTSdyajYZNyowKaBFhJ",
  "key24": "2B8H6a8N4DB9c51iLMYMzoyCk2KHwS8jUFRrhZRRWqAbkNfVpyAqTTqdbHCKf9vyghksbTxNaFKEjg3L4S9LD2KF",
  "key25": "NGTTM5tLJJHWAaeQSyU4JiwckuViuT5ysz1V4q1iFSsK5UkBcPwtB1XQgwYdEpDGH2CPjAWQSPvbwMCEbiHN1Bz",
  "key26": "5hUf7qeWdV3qAzhVSU8J6xVBLyUHYXndV3QX7wMSGB7Wf5je9SMbSd5M6xkZ75aZeRVXPNCtqxFc1MDr5mvPFxX9",
  "key27": "3wAoBzyU41JcHp9PpXYHyzf2ARXQSnA3ajDAguQ16nyBRECYHMNxL5HMnagUzYT7sQ9mYf8yLKSN8SS3fenTPeV5",
  "key28": "9YdxYgBtaRiB8KZxNuECmvtwcyHjCGSegMHzFh1HBsy8ogXCgoy2SSxvAb8qLyGPpzkwm4ZmLcLFXtGmyoGc96W",
  "key29": "5CsNB7UnR3BkYbwzaF6G6mDgFLMyShRe84r2FiFAWCL4rH57dppke4dE63EfL8NHLW4H6bivabB35tQXf1C7wYs8",
  "key30": "zB4uKLqdrvPQFrPT3Kt9Ur3nmKFqeqjyY5QboKztrHRAYFGTPj7omky6goDLtWQGFonaf8CqW4hTuPwBHc8VZ8P",
  "key31": "37PBjhZhP4wQEbxqobce9mGExhihjxdGcwEFKWFwvzG75JJkfhnThJUoz1wpe9SMth9ZqcvDceVoAyhvyrqJjiKm",
  "key32": "36veuvk7BKgd8aCX9STwQ57c2vuU7V9zyiGkchoX21TdwrWzvcpS8GFLGiUJdbgwTYHPiXHbA9T5iMZB7n8qL7ug",
  "key33": "ptkEgJz4KGWaBAWHhagTuJ69L36uxfAJ3c9uvSy29irdcCEpf7Q1Bmob6X94VbdXMgsjkuU7QKgS1BBzZNUGMN4",
  "key34": "3E9VvLSBuzufcCHxmE6r5xSr9bbTSf4LrpysT12PSdtzTgDA3ksWjwenjHNxYxKHKmZZf5wH1i3ZDisLoKpNNZ84",
  "key35": "2eTgq9Q2gS9h47erFstkpEA3GVNjbPPot4Y4uBFhCd8JELmgUqbNKQ9tzirrwa9BvNJdFEUBWErjYwzrKj4uXLGY",
  "key36": "4mGhrXR2yQnoQ3b9tgroycyvSrHjQbVG8Xp2QWcmU41ZkXxEnPSuCxok8wHVAGHrZVYUDERKKkjYx3SbecdNXLxV",
  "key37": "3Ne1owVDPWZWpGkZMttEabu6UchDW8MFv4bBjQedSv5He58krg4JvoP2Fpj1WoJDBgqsfDnG2Cm7vp2VB4B4x1Hh",
  "key38": "4waixwFsuiqNurbdoP4eZ3BfH9SWGdsGGAfkyf51mWQ7XvuUkcH1Xm7HxoQYkhGG944wxwtEoSJSdCjEdxWBiNpp",
  "key39": "34DXccHroKRexG7fP6V1dVHvPdcbmLm5M6WQfRDdGVnVRSz2eQvwKykiqJY7QWx7MdyccuCpratX3ADcycUW4wvc",
  "key40": "5kcxPVFt3MermJSPdAHv46YUWWP9KJWmy5QM22GRRV4hn33mxbpSshPiEX4n2iWrWaaGzaUMewMwrqnCQa2EGuWv",
  "key41": "235FRudtzUdazej3c89oGM2Yqe5oowQxhm6vBd8sZFMyoXt93yhpkkJEPtksvQQjds4V87maU16YTrndQgWTXtHT",
  "key42": "5sCefi5y5xCdYFHXw1MfhyG7DA1Kk3qsTNuVSmi8PYs2rcMWAvMfMBHZpnn2vKrmKrK9sHuamCbzahwtRznEcGiZ",
  "key43": "3wGubb7mFiagHEaCf3fZ5irPqe8SiBUtdPYbG5r3xZ2Lwnt7WgpFphL1KZWsXnjxxMoJWx6hGogM2ckAXsWobpjg",
  "key44": "2VVM9fucHJsjV9JVJ5gpCFYyd55CjAWQjtrLngDD8ch8Toudq3eGXGcuoweahbeQB8jeSk3X9TYbPVNG5WT2m7DY",
  "key45": "4Y59tgQE1m2Qc3ugqThnaz9gopHFoBB8AD5Wao1DSTejY4R5HRf8qqSnXEN5bti1QDrcudXbjJedUPuFgEAUMme9",
  "key46": "3hNCH2oujEagbhXaZNTe1LuPx8yDZgVVqvYUiwBkieoZQGRgZd2PWQMLezc7ok94URn3g68c5veus8GF2LhwffRS"
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
