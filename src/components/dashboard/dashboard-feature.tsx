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
    "Lgyd5Au7nh292HWLiHhegF5shADB9WcUPLAaLMuRwUrknLg4VCMybXeTUxkRtW8m3Lxcd7KyEZ1kWwbUgwADudt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7SK5Gt99cS7kUfhSeYcoUgU3D5Sz8wuecBZ9YU8HCk7GrDrJfgfQXv4C4yVcCFg4NB6Zi6vJ7gZCHMhbRYf1Hf",
  "key1": "637TBG1SNyjPQuWSignAQj2BxvcGiiN8qqb57LotTjkPaDRAm9FGQLynj873Zdhha61RDeVMVVf11XyX2NBJUnDM",
  "key2": "3xwpbpTXioQ8JEYEDhqLMBsdcSn3sgF3Rhro4XsrxrLzMeRER5BJpQvssNjcKHPZJDRTr5Vbojqqc2tjtzXGdPZ9",
  "key3": "GGJM72kJyx6mKW5SuLG8XG6mzSjXek847dG8B1oXQpTLkMXenpSwv4WQ3bVzewEs1onev6jDvuqgm1oNVENb52p",
  "key4": "41TT7DdQkU5nqNGYxW6nk2KikFMxEP2JRChWh8MuzYeAD51XqehUWzdMGTPzBVp1MH8aQ4NkrpCAzoiF8P7YabEQ",
  "key5": "2Bz7yzw4YBxaz26hQURepL6VMFPrhD4EguukJzySEUtEoCVYmxjsiy42DX7d1Pzy8npYmq6A9iYea4wWF6J3HFqU",
  "key6": "4JVdsiKgcBwg4Nb9aJ5ATryEa2moCFMzcGMnShmhdNMEcF8JQR56TBuc3pZAiD4CvrimTP4AkGBCNcDadTz2ir6M",
  "key7": "4n3xK3ctbxiNvj4Sep8CQsgjBG7x3QGZ8Ti87xxoVj4znWUGWPBxm3WvQZjM4R671aBShGmE7fkPctvncxvHocZX",
  "key8": "JqeVuFdx1oRFfef93mfiLdbGewhH9UuBviyW7zxqYhFqGVA23FFrHSVGhV9L9L1gxqDb1dzhkDGntdhQXC6rcLx",
  "key9": "3STiwF4P7sgSWfvyS3S7WqWRcMiSUc94WEzzrvHMCsUeWEZqVRjvNJkobZVqgLFSoxv7jwqJDiHyxYY8Sq6WbGe8",
  "key10": "2DwHn9GcudtrmVHRyULHF9Ukrhi3qTKt45zGee2dhYwMtESaKahsENei4oHhLfG2RJtKcdPmV7ZUHufUrJykAuAA",
  "key11": "2zbyDxohxw35oGBjPbFVJ4mdSLq5o4oSXYff6efCLWSkvWCTthx3GKav2ntFEdzpqJnnvXf44GYjrtqrhcYnfHfC",
  "key12": "4D7tHGmXdH7fjnQ1pA8iy7pzTLe85dsUi67ZMptsKVU22HuT5BCoeXCUZENFjHr8dKKAB8htpuFif1DmpwTydikF",
  "key13": "2hVswnYdySnYD67TM3sr7PziGrHfBY1aLpoV1kuuZFjfcAuSUH7jFKSE4pH1qNAvaEKC1iyzdnSdTRTc6byx1SR4",
  "key14": "5Q34NitJ7HShJhamT1GQdB3Gsk3KDMJGVnpfWqw8eKpGEeSgCU2uJ7hWgH2tDjYUDQVgSU92MiQFbDR3AcXJoeAS",
  "key15": "3thNQG5qWKWdsQFvCZSAssETqembRuMpzVa3oZhGvxYnJeKjxR6SeUsXWdPfWkDGS9svuMGDHtrqvZdkW7eQuZMY",
  "key16": "4HPqY8vDXHzNeBydDL7J7NnqpXf6Fko1b7TrmcKhcpf7ic5ba9n2ajaxkLVsss6LpnC61TheHiZNEntvCgZAy9xb",
  "key17": "5oL8RgH15UXCPuPy3K7SJBmCUf6tU2W5Ynt7q3Lg6jtgmoyFbzr9bZxf2REwiU3TuEtUnwYVbSCuGcQKPRVK5aJb",
  "key18": "3KErSWmBP9JZd89fPNbYZEjftmZssypdiT9vxBHuLxZ9DyDx8RREF9Jz18Vtgv5fQx8sFLyNW33Bbnj72PHCU1Uq",
  "key19": "3oXgmoiCUxPpTbfnZ7wVqxVLAMTJQtTqg8MSuRYN942tzATqTATB9ascAXBteNM367F5YimQkjyn8y6tCX92iYBr",
  "key20": "3yuQ3fLKXhL1HBBiBDjwwq5WQNAZ44Lh9L4byWRu1C6p6BLv9RonMgRZ5GiQUqQsbCbH9Sfo2AvyJRvcfNiLnSZF",
  "key21": "3fbBcdMkajnuF1xzdaPcjiVu3t1op6daVXgZb1pRFqektcDFprj9dGw2AKhHjJMwVDSwwQfzMQvGdxz9qC1FD8Fy",
  "key22": "4oaQbBz6kgjyXkf3xkpTBJVv34qe7jzo5FjFXs929bihsdqn38yqHAHidnm3sDH6gS27yHuLepjZgfaQRyraL3xv",
  "key23": "3PUWXfoinn4q2S833wjNpRyeyTQ946fvR2NK9upk2gi9F1ugPUSQzyKfTR7wexLpS4WvxhD9JPRuX2E44MJAVYNC",
  "key24": "bpCmT42Dh4hMr3a9LyswDuWucNLPhDAbT66m2hJVqEXgfaiAgSCh7DtiQ8jDJUkyuJMD4iVVBjuan8SvKygSuoM",
  "key25": "43jkxjsomPmZyuw3AhUdeszQRxh23Sjz5AMJ33brDHDKisF3R1S5PLqmjD1fUtELPByiN9B2N5ptXe4fFEJ49LtX",
  "key26": "3Y2WrBDUptZUrdJkzMKnfHPWycHkofdPYuq7UMx9UGS1Q7azsxRLZdU6XRjUE9K1RTS1NMkfDgahM8ARfKvMQQ7p",
  "key27": "3uoyVBb7XMKc7aUKB1UMjCJ8Sajh44TjxSzCDbkwyXtHAcPTtYiUeHNbYKreip4267f1fQDurE2UyQ7KcJ9GNpR3",
  "key28": "3PbhuWChw7tzBEaDg1rPiynkGhrASsskTdPnKjYfrApWmnXwYM5mbZZWVUg2n9Tizw9XoNzMmZSKSibqB4fg5xiJ",
  "key29": "JXMgSUVhYtNiRLeCK1DgTjGSxMLtF66iYPwWteqzryYQPsf9r7udTcjxWfN5MUnHTrJBqQ5UPnh6sScCvQQNgok",
  "key30": "4FnCp2Z6R1mLefsifKETZ3NFvXy7EfRuxDBayPiF2xCCTMfYNRGWwmpx981DV4Hhihgwd8nnimreNWbt4kX68jJX",
  "key31": "33cUFnfRuKKzUyUja77tKzHWnEXLdeELLrzrsrdNLnndS9GouXYkAYVY6k1W4Fasd6en2gnpdaio4woh6SXRye4e",
  "key32": "2NZEUFfVczZCBp69S3fECcCHUbxtYTHMf96pFjvtxCB6L1n7cH67Nkdi7jEAzHv39ZMYwfmLivKfhaYQqp9Njrgo",
  "key33": "3rfGvYmVNn3vzbhDwA5Vgr5pfM34GSCaeJFKqAGnny3msFHHfx13r2exbgKaoTJJJwdRJLBohogMdzVk3JkDoPzA",
  "key34": "5ocnYbVbF19hsAXrmCEq6fNGUW5o67NVmGdoKTMiFbXsNHQqbxUYr4whHbWmhKjQc12QxU1JNC2Ly2TkkcpHDwVh",
  "key35": "UZSjHuhb1SYxFT328JTQ63zgjt7KwXMUzy6gSjxUpG8ZNgRXwutbv5AEQYkhtXJnf7qK3DWa8bq5neFkGtnfkeR",
  "key36": "3VuqoyfBiP7ZvubfsQjjECo8NR65evXd9ccFuPhHAZJjysZUobnSH4XAPvHPXwJ6YEcephJm5v9a8niXEBkSXbcw",
  "key37": "5Fu41Ks35nTvodyxgcTnL8C3Ppxf9uBjAmxpUFXj7zW84EAtAbCnoLuitjAZdSToNzGTe9ubRVe9vXBq8M4pWWP9",
  "key38": "3qCet1siLgyrz4xpqBECgwrsEEsy4BGSYFYNHw3Xn2pXaUrZ5NbiiUke5NiRZS8oqUNHUmxxvoP7n9ZdvCzPGT5H",
  "key39": "58qGdb4bSM1jC9qCfMdtUDA4DRsTPiqAU4NbDpsLUDhAdEZmhChm8sb49HtVp4zA5S4CzXYGu4TPEPN8PcNh9tr1",
  "key40": "2fHrb7arx4FAEwmNQwrbS8jLqnGpkuxAgj5ZAGQDUUodwp5LxpkuhRVKaMKkXxb5ZXX3ppKdGLEyt4Bkp96STC47",
  "key41": "eyP3x3MwvvdQt3noiXD32RHtMrRUExMR3EdofnEcmmG37zjDKca4govqzY68vo3kfz8sc2EA8CvVPQffHrpTMSq",
  "key42": "4pQuK31P988pmvoGgpYcPUpe3ryee3umpCCHNA6AY3yRh1TFuYMcoiKgiTqagpwCaV8qyvwQwEUWonRi5VB6GLYt",
  "key43": "5SYFjjMknGJ2sntSueihkRNP5woypUdJBDmJpAtGtbFaacj8KWJWc71gSQCz8jsL1sTLebaEqpFcEmmw2nyPv7kV",
  "key44": "4nTMRSxdotLU92L6xzUHc9tujWgCWEwGfZn4YdEBkzbdmZUH2bANmbRc1Pv2U4cKiQYXXzLX4SbWuczSvwPBtFmi",
  "key45": "4nvMx6QUmiuyH3qAAyBgct1cBRU1W9YQSK2CXgwzun1CQMkToecVGzJADuNHadgGQZQdpC3AQXz46whT7CjUPRiM"
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
