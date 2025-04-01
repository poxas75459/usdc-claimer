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
    "2tYbm9kQwNz2njx5ihqpWc7bvuxGXALQukqFhHd6TMpoohMQy8JVyhE5JBzDzRDAjvmTseqBUGEuZQdjCXPnV83e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TGcBdZ74fzXveAwTXfWZzPYmb8WbV3jQWFgXpcjpoHaeBHgk3ZC4Q4WL4eTscr6ZXEYVXLAdxUnRX26A5GL8o4",
  "key1": "4dedFVkmzpXMGgRAfbKDex38H7uLQ5AmRVjNrU9kFTNAegsEyPb1U5wUgqusAQxDtxK44EVoVymXwTcZmD9yRuN1",
  "key2": "5GVBa3XxbZLoFkgscG6UHspwoT6vVp8X8u8wvr4rVW9Qn49vHL78qLkvni5v5LNBwQX3G5R3umYNVb9BHZQat4Hx",
  "key3": "2bgbS5e1qHdkdsYfwpnNeqWsTPoJaUqR4BTZZ2ddQe2L6f1Zg2JGYSedjmfNXaCKn8iThhEa9kD7LvuYJNQppLNp",
  "key4": "5sU3xp711AMN5AKfs5cPj4oBEbfqtaP2E3KrnhCoDhUTxy528mhy7fL6XKqD6MneYMisWeWKd9njppvTNMDJUFDs",
  "key5": "3EXEg7LF6sK7bGeEDnSX5cPXYYmP3kc34Yft9bq4yk8pVeJeQY9jw42LsHKQLbr3WKJVZ1SKtrwsYcbDEDtSt8r",
  "key6": "633Cyq3EBaTtDrpG3BHam9BVoeA1b1DTyvQJJGqiqZTLjMxvPh7AwgDhLnxR7uiTmUeFz26U9kLrgPeXxXaQyNbL",
  "key7": "5BfA4X7Tq42i1uLgGCDMAdhEaXjsj8uFzqsZ2evoGmUE1SCsheY3EF1U3Xtu9hvLDsmQBYCN4yMrL9v1WdEgV3q9",
  "key8": "3yTsTmJkhNH3zufPwcGuee18K5ski5EttYyAhevSxadEsLsiHhi867Ln1DtA6MpaTXpAKpuNxyKz96nh6WYYJKnt",
  "key9": "5VXo3Ps7UyAMMJdcTp69183Sn4t82ZAriVAeRMouhMGmfz7PGSZsW2DuLhsr4DF92woSukUixN4TTy7N4aUUsE4J",
  "key10": "2aYBNZbLG9j8Tp1E1UtqT6ktuXsJvzW4RwesR4XUtQV8uHpZRodZxUJUwJoKSgSThKaaZ7feX4egfKaUTZDdHxi7",
  "key11": "2isELiK8ENd9tjuib8B9Vu4GGxJjeLN9bRQRzRYRjt5c2L7gjUaPbkMto3W9qxdRUDUzjYs8XwCrKsbNd7L6yqK",
  "key12": "2u2JvwuFGxyjEM9ujyNJCNgVuX5fzYRSpweZTDtrxQdm4qiadeVx5qqQ1WMdeQVsb3nUtH6A6Wwc2j8VgNXHbnq3",
  "key13": "22e3WP15bf5U6W1z4gS8toMUKsuZ34GqzckRTb4VxM91yqYp3o9K9zERSUgnnJuPGZ2rtmENbTmnnVx1qS1xjMxv",
  "key14": "3NTKvh54GpW9V7d2Z7ZctKctHs2RRSBRiBwSZ8U4Yqh8JrHtietww7Kdj5wwWLYiHJZGtvEJEwCULtk4wsJzTfEe",
  "key15": "4znUVDM8j1CRZaCBKL9kAcMPdwc6UDtsHMDREfNtPe8ySEsSE5WJF2VuiKt9Jt6Joe9NwiK8G6YyY3zRExoTRXC7",
  "key16": "qAS8PTZCpnio7pgNBjwtFXfqcajBogNpgm38wF3j6w5Rvwf5tbcco4Bd3k98URavi17LJ1FFJmSP3HxPGMsbDCR",
  "key17": "2XM5yVzgfcKNUNPpveL1QHz4BWMijsTZ6SENLsuGYkYjxgsdgKU25bEuCFCD3w9E3eJYFYY8NWbCv1WNTeAJsUp6",
  "key18": "3pTGSyfXqfLQZJbrci6QXnfyfXcWKtycwtBaNjg4e2ftAjpfxdCJMC9Y25eVinBmLiYoks3EG1pm5uAXnXmEXiuu",
  "key19": "2s4LESAk4K3cpZdrKJb9NNgb9dN7YdBwt9mnvArgDe6zLDwzfte2jWqdRkChgVPeQnuLVX6ccyR5kwrRLF8bgmYa",
  "key20": "2rSRmXGYRfkpR8NN9ip6jGReT9Sm6jogo7T1x8meEfDQTJGhvM2yufWiETPd9sBPDi5jTMg8ANWAbHtYKEg2AZne",
  "key21": "5UZ8TjD4q6MYbL3MpPxoztxPG9PNeTLhSw6AcND49ftPhFyeihLAvxdUecDSgPBVRseLKfUziZygAyW9DE9vAkhu",
  "key22": "3iazCDoUiYtSGM6RhyEdAY58Z2KoAQibdtzDPoPbYCPA4rbp8TuLvkLfTEkMvoHD8PW8hFYnKK5wLGwfC3BhNGqN",
  "key23": "5XhUsxtGWZphUcn94YKyBb9wG5Cb3efytgCESjxFZfDGxj1QxeNARfXcdo1mwQ39V6deEy86BVoXem7wL3LMLbEN",
  "key24": "wztmFpj4mAQVSdixoKLWdG3WA1CiZFZxXfnGs2DyoDfjVvCHmjRVZ9mqSnRmTiTaRJRSFAcHpmbXKc7kEMTEAgc",
  "key25": "5fsafDGNPch14Wx4E3uMLZejSombck98fmfvWtokeGSU5wbV7WdTX6dse1xbZ1a4btBekTLZRzqCHtkXSXqXeQgf",
  "key26": "4QrVAKwobE3ptAFfHybxvFs5dSYkSdDxAPMNb6X4PD4FTtQxjHDYmrCJSbxY6cxsaxbCqrtG2NJM2GmNbEwLmEEg",
  "key27": "379RExZmJk6hyQToPbbCw5k4E3p1wYYuE5ETRuMQ3ugighKK2eb1Crd2k3EoyjDqUw3oJzef2e5EGwASJMTXZf4W",
  "key28": "3HcaT4eZ1an18YcSGNdoxLRF3p11xTm9ByKoAU3BCprK25iHnk7umpu291qGHVLg1fsiM6revnYurSKVzcBY9FQa",
  "key29": "2nH5ZMDFxzKuTdm9rq4mPPb8wYzWCosPDC2ddsigPs9ht7ZNrRmEwpvp2zSVweQhYvG4yRPtAVoeg27Es47rYGmB",
  "key30": "2DAo3zNeTgBkryxRqDXEgNJMUr43DLcirmU2HbRX862ot37crinHiQkDrA5dfeAUBzhTUSLYa9AUCoavKEYFZZgX",
  "key31": "62HkX59aF5g1dyEwxzvGAVFDDP91NgavqdDaSNApTutqp2YvskYLHZupfLUB6wV5gaM9r5hRMAHQr33tSUAGSoUJ",
  "key32": "34rYGKCD1LDCHo3vAyEyHHCKLCrqDEckKhdhie8ZZEPmQfr3uTnuqaF3w3vEMgheU2MU1QDt93PM8xxnyRFs77NK",
  "key33": "2XSR79kbWhqNE6DdL6CtLZk5yKnJjw1KPr9ipXbCjVWPWY3DDZzbUeciRYzXy76gG2oSqmZhcYfHhye3XmJzjg1m",
  "key34": "gahATGKJc37RsDcuBjg193LPgooQLRysXbJsKN2SMckndXkDeyKtefEhCCZzFsEUy2GxBq5CTm2SSMAGiBPbdhy",
  "key35": "3GC7BrrrjHdqokyYJsiYWHTXFc66Fhbkb8yQ7bSbRZ72YSt7aNG5NQXfWK3uopQiyjo5iNpPsjrHuTq4ETriga1r",
  "key36": "3D21uS7zepFAyqaKoMoEhb47LTGicC8fechqbAnw1fAD4vRL2q1za2pfmsFfQeP8aEj4otMXDP4NPHnCtZBc5zxu",
  "key37": "2s3VuRuDJky4dfsNpzCLLuJHmas3CScXQw7zMURXioRUKALmevTCv9E89Ec9xXwRLSqiv2TwoqiPR8p9L2C5twF1",
  "key38": "3PXTQgrYRKJscTvyykfBziEHY434dDXE74qKTZLnjvhCm1Agr36xoeQx4TdEgGn56hALp3g5SRDUwdtJGinodnGx",
  "key39": "62XXGQPs2LPmpKCsxkf2C1RW3kkRhAgP7985VrVC2sHJqeiM6f61uinCxzTrY7eM8qyT2pRnCM8yEJuVfZqMcMRH",
  "key40": "3W4iAPiY55U5LfghzeHDdbmGRv7RUJwoRmDu89TuVww9UHKTRy9rcXVk66hZpcdQXqT8WZoavHGQWZvJWExtWiQt",
  "key41": "48PZhPq4ic9UB3Ptsp34btmcsJUexgS6g29FFAwrre73BXAJ6fcK9rfoN9M5pRCkVmLV75eMRuHJvs6tAMtDqZGQ",
  "key42": "5oZ83UNpNWkRTpwP9SiLDdtMGzxSj6wLjEhsrUuwMiVEDp7NPzqf7ufADidbJjKURkVrNJp5pfi5xv75fxbMpqLL",
  "key43": "2SG1LVFkfyHoAthWU4B24WJ7nYRb7NK7X2fxMUPxePppz7XDJTJHGsYdaV3V6SuXsaY8NnhvhTuBEa7WBHZQKna4",
  "key44": "2AbxHcqG3Xnhp7QtppYXk91Dceu3YVz3jZQMG8PtNKHLMJsjdrhs5ycjZ3xr6Z73iN8nCFET9sJZQCyad6TGMNAG",
  "key45": "5aHGCUaxBmazQanhPqofuhfZ5k6K3Wz4mk9fuLQHr9CteeAwRWAC6A5aXddLDeT1b8CoWWijWwB6THshdCrSFH7b",
  "key46": "2PQfSSyrpFRbF4D81hDKznS2qUywJZuLsUofkqaS4LsGfYecwhMbLx3xLRy942cKw4CFhfqezd3R23mzYCBppdnw",
  "key47": "2vaPMv3N9WfbzhBoQSUBKhbwwRaKJZWdwiByh1DbinaocyMgnrweTtqbzSwpgjy5BKCuJrTvdrD1dUdCMrxNSTC2"
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
