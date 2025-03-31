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
    "c5igso7Z3UnYVWyDoUnoq6x2wsd8n1dXDSnngczphuWDGiPTDuGeoPGXSjgYtBdPCxnhQiS19s3HhhUTMNCrbcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6KwmUMvAxAT1Y5Ay6g7g42Eb3eshd5jbuMXXkWozm2tMeNDdX7JP1bKu85EYxNtnu667QwWZsGZVJcEEpNe12Q",
  "key1": "3ytTJKsXwYzpnoft9UxukxUcUfvSzaxmBbStMqzg1p53hu3QELvXGTackmtoHDTUtn37QjSAFnshhS9x6GV79h3W",
  "key2": "5N1ZnYDbe4echaYbFc2Lzqod61EAoQnwR7sVEPHkJzTUdE2LBUNEZrxAUFgvzBfM7WgUgbExaFwFwgkhUxMoQxtn",
  "key3": "2iucCTQVaeGBfCKp64sZM1bwXkWTjhHHJBMUhWRnEcpDxxiKTZZrXkCdSG17UiNEX7dmf13hWe63KtqkWDvinGW1",
  "key4": "2dgEZe6hf5Y5sM2FMUo146YCAxhZEwbi4H1bhnWvMKeBgwBcgJEKjyEWUgufG79ZSCFCpYnF3f7G24FLuY44xZ9e",
  "key5": "4HoLHbFk2kY89bmATWJzL5Xo3azg4asgyU1ePC6uo1uKJ7xKsWByYZBCGtSLFtoi84MCsJPrqv6kvT9EZpQg4j2A",
  "key6": "4rzfk2gDwjaQdHmNMFjDmfHtSNdCXKhPNiRifswHUu6geUJKDxF4waEHeGXf4XduiXBdDTStAGUA4FwhEP1tJXi3",
  "key7": "5NVGyU12bQLRRsHKtKHpVkJQwNF7GkihjamW3RGgtzQmeHbiEHuSu7jsXmPZYTkW4A9fqbZCQcjHVnv9TypSve6i",
  "key8": "4eYXtZTsVXtNJkBds4Z8uN4CVKT27DDea52oSXSAWyuVyJg27P3hrPRUuvtJ5RoxyzubkiU7AncbUdC6AZ6qpDAh",
  "key9": "3qbRTDGZcS2mues7EybywENvKueqSb2qZfYhwRWyhNumnhFVEuv2cn2pgPVFB4XcWtSNZvTX9njx7q7FioafhKUY",
  "key10": "23eyartNWGZsaGXj5bD1ymkRa63CggViagYkdbSzWixHrAzEbQjPWLtkdgjgnPFh5gPE4QQkxnzuo6KfXxBTG49J",
  "key11": "5HsenUsgGUreZ4AT2dXjQrCJ75fc7z6YDKRDq7BZgnWDWX612F2nzsdjBbCkAEhgBxjFStdcoY5uTLbXsCe5vRAS",
  "key12": "5bWKgU8DQbCbS6XNHDg6cpHfLTiiewpWi51s9qfWiLr1nP617D8fVdErKzHahUY9FTyu59hR2SAy5797JBeVPU8K",
  "key13": "5bgiKUfy7whHSZYhvy4peNosPP2kD2s2X5wJ4FYKCLZoNKA8AnBZWNgzFQuzWCG1tdKKALtdpPUd7wg6cJu3Nte",
  "key14": "3tiqAxqnfL7aa2uVqvAn8FgUiBp9exqX8FPWqJqCm5SQ7qWMMoDpp1KrtD4aqbrBRUn1FRDF5J179q8FKSVcT3pc",
  "key15": "5bWZ2cRuBbxECJ9JaNJ5w8gthuki8TJDnUB9RfdZfnsB4QBuP4APdBBFPsLJG3KsAtMc4fPLjJPxZ33Ub8GdUynK",
  "key16": "SN9si15uvrGoNmXfVkPHcWJmqaX9B47PQoooBjd33AXLoLZ316TdTJRwi5dNDXSCAa6chZ94nWb9DRSkGmVgABv",
  "key17": "4NGHY9W9susp1F5sC8p7NbVfzPMT8JAuLsSmTkWc6iauWWNv4akVrpGvsgRfjUL637PgXzTXGGUpjEDCfZ6yFLJp",
  "key18": "48v85okaoUbYAR59j1Gko4eEEQ1wmah76oUNfq4GacEYmgxujN9hg5j1Y5XSaNwRg5benoKi5ckcX447YtFhWKYy",
  "key19": "4GkEHPW89e1LoQunZpprbqq5G581P19ARkWtNgZTzAm5GAK6HYQDRZoNXZP92eCw9tq5T53iogHJ9LYQbNt62xEV",
  "key20": "4TfjSASvvPiycf2wKDYwkGbRPNkq91wL35zdeABuwUYrR46jDPSMjZXLKCFbvbitBnWfjCgvgz3WbLrY3pMQcx8t",
  "key21": "3Zrzyrpbg96qY7VJviPxHsvj2N5mC1KZLLSGtnDuqswfF2Z4vH5FsQ83x3d5rAK9RSEZAMZhDWh7uG3k9s14iEru",
  "key22": "53tppvfziGe9z6CrnUp5ZJD5F1QHJddsepHZnEaNtFPYmxjxiMqZQfoQpqcLb3Cak6LpvPr1eCurCngS8SZULshu",
  "key23": "3qP4jSjRXM2uhGTxuUNjQBbrJoC1on9DXGYoEjvc3ptVmWokhJepD17Gsdh76cm6XQdUYq86gbocj77EWyVYbzqL",
  "key24": "4yDSrYfqnhrEF2ejccJGcH6Ei8USwXyUAAHd34iQBgLERh8WrdM2Ev1m6VGARMfwvaQAtZ4XWUMLpQN1pLBWaEXH",
  "key25": "5HWKGHXNyLHREjMUjCsvnPFKUGme5u9fDkPFjuyyY5zg7jUBKuEhLSnuBoGa2L2jxV1YSnUJvhDJNCRjpyUb8biL",
  "key26": "5cjzvHwbDHzZ9Lt9QqfKXrbDsGhBvG1bEihHK4MGGG9nko6rUMKmYQ4UeeBBnBmBwiexCuNZME51gNatrnxx9dc3",
  "key27": "2MYaYCBa51EYZP6SfvSgYMB1ZX6wLJLxFJUVjvfm83HsPUP8PwAskscXgSttYCkxSkacwu3iaTkJxkXYwUeNW4sZ",
  "key28": "5HLw6QtiPCuCmT5hMnpkT9daDYo8DC8reCS75N1Nbvv9pKBKcf1Mtevjpuwq3e8WwVJ96akKTQ9t5YCxMFM7MrUV",
  "key29": "5LHpnyRM64zAuLXinSQHwiw2Sw4AxHvJEvuNNUsWhbx7z9Yd1212JAXk74dQPigZKMuFwxPfRCqnNAFNEwpw1Bxk",
  "key30": "oHypB7A7eJNQc3uNy9YFWLQe778PYMzkA7JyZEgadE2mqLYNKFNxnScgXWDyiWT6dsRYbjgmevkxu3PAvXgrgaP",
  "key31": "57sqnHoWJvKwHDSwgANUrY71dPUZx1N5mLK8mzAqvPJ276WyhWbfbV2VuMkMarp6Xiic6Uf4nHdnE7VBtWRg9Sdh",
  "key32": "3MFrvsYoRbKGjcZcmvXtsVMs6Rj3U4e8UQcLgu5EkQtod11uWSU5Ltd9yxifqogZaDoWzDFG7Em2KX2SbFifY18c",
  "key33": "2heGgSXK6Xn6Vtw7VMXYb2fab44oN5Lk8FqdB1i8sh6yKxLJkbH7wGkYiGwFTnSWjKYY6tJ9aeXagZucr3ur9FYP",
  "key34": "5fSo1MpYgiaCUeSLZDEk8Hw6gjXk9vHqagqhYZzZRUfzxm8hUJvBXKoYssPgmmKvgtJZgFdZwyHp1hLjDi9hMjFE",
  "key35": "2ssFr62Ufjt9VPR6MunoREnj37dWYqJFaMfAojxyqJon1YcCRx3GqY4gUfh7JGGbXzUP23CbGf4GLXySx4jFFsMa",
  "key36": "DxbXgGxGgaR1ZXJQ5oxwf61kf2gpBbD9bty7DJjFMdVCA6HEgwbmkM9JFJsmoKV1r4WTjeBn5bRTpgMvRwcGFWE",
  "key37": "54CWXrvXcpnv4GS1YFBUoWYNFeRvh4ashsbEsCH3Js9jmUj7M2G7a4yVVw8vTKdkB8udWmNFMx8obGZibiakxtif",
  "key38": "2WkEKHBh36Mqj6RXuucfZwLsscm1vxhgZngdjPYJbF7ReZkcDiUBUE7mH1JXo3tBCzdSaxu8TV4mQP3BuTLuvVZr",
  "key39": "4Yjuexr8FpRPisFLgDEWvhyzro9kGd26UmBZVT8YtzkQN58Yz6ZAYvu8sAaCfrRs9pXMFJTknczAMdgN2nGkXK6Y",
  "key40": "2ZiVB9PnsWrLUWU7XoeCq143qqufrprykBdfg5iVDn2FTQFdnQmdRPd2AmCJKWz8UwREoHAXDvyGL87QidZLaHgz",
  "key41": "39waSp9KjznyEVgmB8Mz7SH2vA4H5w5bLvGUNH42y4hswJjUdpoYPFRnmhRTNzZrFXX91umdbukgyL143S3sTnJL",
  "key42": "4bU2E8oDDMyv4jmu1SfKJYdmDNvf4fNJxFeLdMZPyR5MaW6p4JJUF7aC7HftEJDruAC57FRCFAkAL3x2YKASYJPQ",
  "key43": "yzweUrXbDCxqhEuiZ5XGqPqccA1xfBdb3HEk4QtQuV9z4xWuv8NXEK4pR7BrVtkrgsqxuuoXZD4n2yjhbtkK47a",
  "key44": "2X8Ewe9Hw2jjqnCLyjyBRfXXbDUPAM92JA2Pe2KiuARkMmcqgF1ofPyyBCZL8oedMMyxGGBuQ8TpiZ6rWioikww5",
  "key45": "UeFoTwAtJHGieg9qgVesZAYSJFKqAAN978wb1rFG4pyqHDQfgjwPp5UX1dtgwgd69jrQCE6Wr5yJRDHXpEekHbe",
  "key46": "2UVzUAGbqLE89E8FevmeqyvmXVZTRmNMX3SHExMuyN9u8VgGyrmZHmbwCmQTXQRiVhGie9gfrNH6vWrVryShLcDZ",
  "key47": "3tBwanoExrusBQ5hK3saiyWdjJr6M4R8W6e26YmAyfaokJaVY7QJXGcaqLUA4MWi7yQD7THHtq6joZNEPLP6BkLQ",
  "key48": "2Scm4s3jsnicM7fzBQnmgVCpEKFeFG4BuQP6WTGqvevungMXnJHSAPrD26pvb1w1a1DuE9HMRsisxPDnfimZttRH"
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
