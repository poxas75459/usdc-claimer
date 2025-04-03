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
    "66GvxdtS5fujVXugSmyX4b1HBtoPHEqD1qfjJRCRUuQRuocfg2yqATN6g9CrmD7Kh5YdovCmVNNzBVtFdfALxEgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFL8W9bmaVdq2JPTVcpBxfiCdSAVsRpTEHDRsyr7hgMNchkjE6yxeBEPwWpKhXwa8gBa4nGZE3xENrUDTf8MQcN",
  "key1": "2SgGn8Eeo8bxzkWNrNKvtUfdChyFNwRYkaBnkcJ13B8WJBs6mMjJsnFUHEaDqu4QpEiwGmK1WLou5hz5JUkpNhVM",
  "key2": "2HHihZBHxCnq4jZqLMEdt6QfzGxjE7wfYgURjmezB42aFDzLQUFuLzVq9uSrxojG7m4LwKFdayhubxJMBF89Pjpg",
  "key3": "5nte9mH99APr4twE4N9YC6LepZi54mqftw6v74ugTvAksPvWTkxTG93NWoXKmwb44qSTQACozAVjeim6eSb9rt5n",
  "key4": "51Wk6TdiTUv4BCve1mZf3tncBqP7nUug19j2WTDnY3iHjeXevTeKEv7HZbkC1V89PZcmXRQ51whXqRApykR39CWq",
  "key5": "4WjUqUedSksB3KNhFrmX8KvxGdErGWeRwWpQ78xLKXwqxGc5rZx7XJccdDThyQ3YxfAJZVJZ1yVK3pYHapoKifz8",
  "key6": "2qKKmSsLgPiCNoA3uGVMuQbfBxcQovZ6wTUGKgxmxQwemgr1APYWBgmUuw2o4vrQTm2RX54CXFGJpqvsKwcmthCa",
  "key7": "GntjZS8WALnik66t5i61xBWk8fXCuBSC5WMT7fZum7EXVyBeJrNbQCVh7cmeci3JDJsWmjYnXwVAP1WEkNExNoh",
  "key8": "46y93LN37WPmcZgYArjfXy85vqR63SisVB7tQoMBsTZfDujprDiEL43u2qEhdsJvxtzcEayD4SnRGGAp3B529dX9",
  "key9": "taQBwPwTz3VTr2myCvTrk3X5pcWbJdAkBHPNxczEq7xoGkT1ADZgZYnoWsBamHvwh1oUBybLcfdi5Y4uDd7ukGU",
  "key10": "2zocDPcz1uMJZvVRa1TuWyNafsG4TTFwNaoJ7cdU46KFSPEo2hu58ZfCCsREnckAcMn1U3QgHSkvgVgT6FwZA8s3",
  "key11": "2tKUX7QnPHk5uMgJg8nwYSXsX9TgLFXzKT7tq4BQkp3zULUBLYxLMJQuTMJWXBifmEAuSmAfC5bgpMnS55rh3dfD",
  "key12": "3bpNEdC4afJgv7aGtvNWDjMZUKZcguDsMEHtHFHreuS1ePNQdwtX7oQA9ndeNXanfW9U5NjQWnhwTHCu2oadEXsA",
  "key13": "3jRPPddRwZ6PWQFJ5GC5gZm2CFX2Wq5RAWgqrzXJxC9siRXJ5YTVSh5m1Ks4QhoKfYCXVgxmfwnuUSukxHUPsLTV",
  "key14": "64i9fEWyeRJom6gWLNAAqq6qaD1DGqebjBHg8rTw9xqpm7n4GZReZz8C2VJVP7AuP9sKWnGiM7w5p44nwGV4nY32",
  "key15": "3NfgsChyLCt1TPxXWakmntqW5AaRuuK8FsUfTmZnErLgcRo65m2GPNzvzhn9xMBNQz7PsbfAcXYahepbtQsKyN2",
  "key16": "ZqRQLqXxs8DEfJuvtXM7c4CfQ51EPUHwgR1d3DW9aycYQ9D3rRDcvAu26UNyHSUvx5Uky1pyNqcJdtGUpLhDur2",
  "key17": "3VQkJW5e8pSahBf5d2Dyar9Mb94W7Hjb2zuspcAxgT3qLd45wsJo6825dPKvmKYmb4ob1rJPeh5ej4feF9SX4kLo",
  "key18": "2iECQKnF3YAF7M12DiaE7ZV4WoZnCCwcnZPnKheaWzz9V3nfD13ygXXXKPUs7zjbE9ML7u91oqkteVNKThJDwBwm",
  "key19": "5JR94i7gteBCrqqHg2Q9QFj7Rcy1nTQbbsvTo7xCLJ8KaMvx2ey35wkryLYaysbnw3eaYPv7wYfintG5VuksewYL",
  "key20": "gTVN5nTiA6Y16NCTue21hHHqoYvM1xfCZLQ9Tt9dH1eGhb77hK9UngDfrM75gPYR1TnLvzY48u44H9HNqvXi9t6",
  "key21": "45wZQoQLRpYYVaBBdqZaicNFdPyvq2Riv19yA86oR6sFEcE6MmFVo5ao1qwP4X7n9rgH2WZv4DXb97EH8VBaj6ck",
  "key22": "5DDADSjCGA1HvHAsjufDcK7XALSFC91kbawAA9VbXjC8hbQ5dHGtZkJbFfoWfvzJz2mRgFQWhGb9sYdCMwmgxfR4",
  "key23": "7CJ6D1Rc8oBHW4DUbZxpmjVTKxjXsFpjzKbt5H5tiTeLjSfj9mu4GNu9Nb5Hm5JjCuZFnyjRVUTQSnq4Js6yatF",
  "key24": "4T55JVmcxFzmuP9DWwABAehStkebaWAySycmUCsAG6L5irAzbhGmySSQupgy6SschTgvUNxKKFxE8csBjtkqidE3",
  "key25": "3iyYACUmvB36fnXA6h6hTMLBr6tx5hLLv79CLYsmW3G3uAcseLXY57zpzCn6yxHrfnMRbrZsoV3QptcELrwU1kSh",
  "key26": "4AZZ3qftELTCbCPNhk5K1FYrcvDRL8JwvLgVinKQ2SyqarNqp2nJtASafd3LVEajwNFkPQpyiyi87WsgMP64Uq7p",
  "key27": "oBSzG6H1SjTuH4ZVW5suUKKQeSQDggMB3t9uar4U5BNAGNj9a81MbiNPQxncob8nBhGLMKQiBVe7Q5uHdt4s23F",
  "key28": "4HA2ppVGNpjFRgqu68tbpjT5Kr2fA7yTemFkEY1DPW1GvtymNfLAwkUT1yYKotowk9zBN68CmnXwTudkdQbHgwzR",
  "key29": "NDrPnFmYvZ77iKdeJHuN5cajiGvf4JXhzGAq3YSPgCHB9YFeccUu27CGPpQLwp1y9uqA7z2uqH7cGgJ1KqwhHZP",
  "key30": "41e1tbKmvShC9J3tQLBbm7VztmHY5tMjJiuS92nmCjx8dGhg1eWjSE7Z5N9xDZ1Pz8nhCDzzZi64V6sJJ2ZawCyJ",
  "key31": "2PvH26LYe8kdWN7z6TAaRGtjDQZqAaKMGs5aac1kYQtzuCo32hT37WZ4frKfxtiqw2Uzp7YPrJE4awqivmHi1PXL",
  "key32": "3HxKjUsMhm4hdEBQbCJdbzCBbSASPTN5f6QkczcxuVfU7HW7dj9VMgB9f5hrU8etZT5JfeeuvUWdMAPpcaCZ66CV",
  "key33": "3KBuzjGqcdMnsiLNJTJgQMG3CxtEhscMrhXAs2BbUwJFUihdh7nZdtHS567W4Erxfc6NpjdCed8u2TXybdrYYWu9",
  "key34": "2A8f6pAbUSREDQKnzpheSiNAbeaRsbBHvM3ZUF8SVEHmdcVfVn4ppexrda2suegZy4EFT2PSDh5nTRF8WjJR1gJW",
  "key35": "4PSNAh2VezEGmpEDdTB7RWf72GC2WKHt3NpsN2CGSNRknTxnymgJjYE9EYrugqMpy4ntpw9SqSptShcTUSh67sdf",
  "key36": "3f6rGevL6PQRcxNQgpuSMrixsBLzRC6c37oW8wJG745WSMqFCasxtY62TLFkSFAifHcKZE3VVpCx7eUbu6JjM2Mm",
  "key37": "FrR8xpVKEPyDQpsVoQkwoknzy23Xy7FtMi1qAmW7Ao7f9hFewEDeSywHn89uDWkFErE9tmQfBzu1GjNFqnXNzax",
  "key38": "2SgU9jKMNUE5CVce4tuAEVbNp18vhjwbTo74RqUhWVtiq84szWRtsWBMAhYtsT4JDLNAhkr8q67RhUjEfcugsKJC",
  "key39": "3XRVRQm49KZx9xXW3A75aiKFLNZdW7BBh4ddy7cGHdCPeRHfHBAi7zvDgcf6Ywisvw43iHRBHn9Vf4SPc1xyrk8N"
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
