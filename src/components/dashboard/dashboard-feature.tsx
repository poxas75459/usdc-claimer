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
    "4A5kvGKrtgYRYetnHseSbHBXC5DY8CFTnTS3y4qpDxnTFiLcPMXqWAnvbpjPFMPZktpxMxPZAJArayXezRR2r5ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3j6q5VFcjBozop5HHhpKeTMUd6YfFzUKwhdUhRmaJNpKxVUJqHwptwCFifZmXHU8XrYYiRy7Sze9AHM9KFTbWN",
  "key1": "4UB1FsL92ioNkmvkCGBinxVrTHQPcM3U2pPW3e2nc6oH8wTKhVAmidRVC872omT4AtCors6U28v2zrfKscrLtXrn",
  "key2": "5gtazZtYAbzLKDt2ReUxqDLA3juAKeUVSS5T2kbzSCNQAdis9rBxAyvWn4unLh95RK3m9KGJxsS3WiGFPT2zJuDk",
  "key3": "3bp3zhvrcTzLua3UHH3ogbp5vzhPT6QDgDqEeqrAiHXpo8S2hsT6pRLGJNF4Lfeo9Du5Xoetv88f2VcHMWVLqrsj",
  "key4": "cNTrhwaX5fR5M5UHiEofGh1ZWiz7dVYJNMpVWSWt8pheEu9AUGfcSACYF3c4cGkPmrEfXWXCcgAJxu3XRHE78ur",
  "key5": "41MEaLFpgL4ff4HNUy5QFa6pTSA59K5y9RRnz522LqhRttPWCAcXEGftApq87jyRNhDcXArqdszpwMG2HYN5Vxis",
  "key6": "4GhQkeeakoKByBTup5QUpt8YUZ1gFHRMvAmbJU5VokMgQvgu2kb818Ep1tWcUFHHX98G4cQSyPokfpBCn8zwX5KG",
  "key7": "33YzvZVozRgXhcCxyjCwcakcW1dYtpMrUui86PzaettRBgiPP91b53U3bLrBacXa6PqZKb12m2GPMjNjoGWpDjei",
  "key8": "4oWFmPNV7PdqEHpRq3YDsVSyjuctNgFqFf5Mp9dG8qoBKaNGJXUjv6EWNrdKQS6TT865ZFedAkGQ6ac2o4gRCD8P",
  "key9": "CaSmrxUwte1K9cj3apKAF8zoEbsXqC83Lm48fZHZkRbEDvHQ1Pe9vNFc9T5MNUcvUXQwtuQ3Mhvv9PQDtTE4aZK",
  "key10": "2pBk1BMWtNb2pXZarx4xgKhJtDtAR47iu3ymYWNCtdSPaKgJvmvDQgPeScHjt1XPPWZoAj9Hee1znaqS5LbmA9ep",
  "key11": "4FEUMNHcEiSCfDCvm8KygjcsmRUjWkQpFjfCbCJnW57fdFzw8GEvneEdw877jvVsFQYBsiQ43kchrhi9gvUTyCa8",
  "key12": "2kWsttVj63zpGbrBwnmnWkBG1EMi8LCea7y7KBwLzkdzNDXeFmtYTizbebt2AejTBfDgXQwAb74k4irHafwLsSkR",
  "key13": "3uh5u2rQnjFzK3cH6k28AvW3tpXNrdZuSTafRU31mjbFsT6rzD8WjK9kh1aPQwNyFgsqwavjp6mT4sJefVm5iKCa",
  "key14": "56Ejcvkj99vFQjz5H4Q7F1XwBqFhdHDhRrv9edMZSXqKK4g3uQpSWRiLA3evN6AZFfrkb9C1rXX74jqFwCLXStGN",
  "key15": "4rDFmKvovE42c73zYaaM8z9TNe2rqzUeLZ4mhvWHacJYUYryeyj7sREGndeQTgXhR5xwHtVAAZkxKVSD1JvuCzQH",
  "key16": "4jdkPqb8JSSQ6ftPc6nLn7jFdPQ6SrYW2Hrd9WXHxuAWhXrLTgz8K8L6Pwe35qNyKuogkt84nWtYavuQRGwwiBfC",
  "key17": "3wUj6Vvf76v44puW2DwJ7YXzcTaZ5MuAKy8AVwuzBRXLmQDpXcZEPw9FZ438rx865YJZaysFY1hX9oJBCTvivGwa",
  "key18": "2aZbQ7mitFNnd3KxVxMEzpkp2JkVhJwwVvxnabckJEjTCq2o2a9TPuEJKt2n7G3i4TRZRs6UF4DouRZDLtoSDpXa",
  "key19": "3e5H9YbUF2L8pPtEhjksfcgnCJWt8NcHecewVaDntECj8oNh4cTYggqGxUbju24YnQWvri7zLf2CTYXzWf2Wb2nF",
  "key20": "3bBesnJPF5ewXo18fpt7KTTK9o7cZY9r2c6uw82GcsPV6xm9MaPVzVYMhrgj2QGgxKzn5XzieyFmNgfqZS7y11uq",
  "key21": "3iibqr3edALqPRGzVerZUhkZu3i8xEezUsjmYPkgfNgeMmsRzNP6298mUcLehpn1wGWCmZG9oNK55tVGm9u27H6o",
  "key22": "C2RnqpakRaXcL5rC5Cp1yJnjS6cxEPGFwJD4uFczBjdxWes1mqx6kHPXoSwk93DFxFiA9JVadYZjWRrKB266ujJ",
  "key23": "5ZxogsFA8h1Ptyj3eHss5q3BYE5prEqqUm7rRi2nbNEvnyTWHsoJe6PsvVTbExGH1XJcTZmjJrx3vsVpTUgARyiK",
  "key24": "E6aNe8qe5fhP5quKwNujnasCL12Sp8Gx4bnPCyyqwCtgdTjnng7khDTX2UtB35E2rKWMQX4jN1icxW69Mx3SjZA",
  "key25": "3NWwqqJE7JMFEyynkWemL8GTDFbAXc4B6xDBZjacsFXKuSwiaCq4WXTgVyvrhyopxDWQHdKHtiGxg4jLP6UKxwcz",
  "key26": "271rwvWUvxCww7PXcGkBxa7peyk6GYKj2of2cXPD2Dc84MxwMs1KJUWrZJ6S6bdpcBRnw4HDG21KL57gSkckTPVQ",
  "key27": "5fZWU9LWPmsZ1bfLkzkyjYisMji4qH3SYT6JtZ3mxf8Fromxva7iLnT3FR2647e3bU37eLge4TRAavjf6MyMEcTg",
  "key28": "3nunueb1UdKxoqGhQGbsmNCPRSVaYpxEoTorapVf3jr7EwDYkKXVUzuptqaUhV8Hjt8HyFWjjVUMVj8EQN8N49rR",
  "key29": "2yrQRqJrTnEwcRsaQEdzcnBSdrhfoYMDG7q9SFpYnzhvGfQLC55yXDaEZxhWhkqNgd1j9GR6LfBM67VYQpskbm9P",
  "key30": "4mPthXqz7pTF893mKf5EoSa6iX61YGjf43PyHYpQiu3tcWjdpLWNrSCba1otF8j2aXQrh7D3yJa5fxyUAFmLNwk5",
  "key31": "3VuY1Mj1xJqN3jrpnUKwwuCrxdKeguRf8VcD5NxWdRADP5oUZjwRDssGJLRRKZPAFqQd6foac26ZqoBQG9WYw7TW",
  "key32": "iwoR9aTJG5gpgsDmjsgbBnUyWfojQj14sTc8vkTfn9h5u725PdmmjTaK3TYsGkVvbLG4JtmWo7h2pTJKMNp1XaS",
  "key33": "5CokdfHpKvzHt8Ge2vPhrxAwATPDaoRziQR8QNUFdC5b1MgFjasK56xXmN8v8YTa83rzPDiib3CG5d8bdnnKSYvW",
  "key34": "3kF7X1CNCLnS3M4QgBxXpFgtfC1zmtRLwFZkVpWsmWGGHxSAr2RGQAjKrJnFnqxRDuuA1Y5D2vJBQtddEYFTCXTt",
  "key35": "2gr3uUnpVzf4atN1zyKar7s1jVPrNKAo3Sp2b8emJ24YwqGCaUikxcvd6oTkxoPvDvfvGM61AdXrFksm3BD1Xp27",
  "key36": "4AvpLA1WNqnRk74K8AMzLeCZHnMikvD9BM81Se7zLs8xGJvVoF7mhVcVEH1guHD4D85zRzhP7QTq8RF8RjqnB1nL",
  "key37": "2gd4xV6Z9rVCbmTG5ttjXxPenmsVjvyHiJrVjEh2Mkzzp416qtghc7z6SVyUBJ76PbeqnVsEwZFfLwcQbTMg3ZWX"
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
