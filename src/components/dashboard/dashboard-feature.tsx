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
    "2SkX7Ka8YtZtshgmJLkph7AXWNEMfe1rVKxEdjbK38VCv5Aaj66aNkjs5KjJoJoebKt2MU2fLoR8XhiTdSskehcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mUAgtvyDf3HmgsQuKDKhhm4ePtKeku7HBVPUUiGPo5ossMnRQyf3o8HD7r7djurnT9WkPmWZF8PmZPouHv8BbK",
  "key1": "4kyAuuCFLnwLAwYsEv5dm6yXfitVbTnh46tw7e9w8MC6nvKd1kgNUuT9XSoaWHSJR7ojFaXza1g1vX9u2BRj3Yar",
  "key2": "5xQjQmJaFNRrN7MWoBhy9D3AC88aiSho1Faja6HYEQQg9wMahmS1ELTb9TNxjoReeU5BNRH5DQ6ZtqTHw8Pv5E12",
  "key3": "2UW45TJcAwDGL1jKPEF14KSELjuDUhkXmbhRMinyiDxszTyaNyQ4m4yL7ZAfPTTgXqsPc8MJym7LMygyEjjwkRYh",
  "key4": "22oSeeYpjCfUxJkQxRKSRTPap9GcMxD5ZB5oKJZeE2hvLb2k7DCwfYK1AFy92NcfAPLrDQXCBvy8yREbs6F87s59",
  "key5": "5ZHrawotiC7GWoj6gDuUj4yCzZfRaCpBurCZdzoYEpKpD18o5qLSJN9VigPg2ECYsDE81jgN12vf3uVUkaztLiHf",
  "key6": "5quSWpMoLc1Lyxk4HoSqakog3r79MyCNaHeMKkzAQt54srHh68v9r5jha88SGBJM6Z53xpxKjXfTePK1KYVFxV1u",
  "key7": "G91eiaoafrBvK1FzAammFGa4Tayh2h8eigD6VXe27b9y5QVJJbriKCdvp2r99BSD2EjaiLXccZhV5WWioHdVVad",
  "key8": "59aQsJSGSRGf7K5nwBZkT7MdMkQwkuw9XfrCc3Ffc83S6eQwKQqdgjrahnN8RRZtpTo2Baj3Bj4DiRwUgGE2WCvd",
  "key9": "53aPw7dGMRaPQ56FWYCDfYqi15CLjB8SM1UCRc4qThHQhtjozRZoMKAVSw9A9pS9RJ5N3QHa12LSGXV1n59RtPxB",
  "key10": "5us9UTnzjTUPUdRGmHARmsH2YsgrMK2LHWSWqpheP4KPs8BuDMKk2zhpPFwzFK8nAkeNVfxBfUqAu3wrBMSxTLh",
  "key11": "2GyUhFhKqTwoQjsWrdPZQy63kgyEW1V86u4xB61PxGWkMcjk2xcmPr2gneURZTEME4j2EhfbjrXQ8RNGE98nESJx",
  "key12": "5EMQStmL8XX54JoGN6V4t6Scf5qQariGMpzyGe34wcYp9ZF37BJS6tb57ydzigHdxzQo3AdPqfd2KmQSpQ9Bi3fU",
  "key13": "5nfEkHiusQwaT3QzKetwts5mHYARgEUDmKxRGTfKCkbUP4xY4fqhWp8zXxBqC5oYPJrUFP9MpoHzQ7h38aQTfYbH",
  "key14": "3sF6sQPp92L9EtpiMjY399zbBYkSqcV5n8pTkYQbHYLBXFztYY4BdgWfLW8HN12EsgFsfcXnCVQBNP7BxEpLgDfH",
  "key15": "3PCmqUmC9R3iHqRZAZW8qjoyHfQpnoCkYWUVkuCQbjbWvCpjMk5CQzTNDG5jSSTJAZrS5KhhYDMpHFCjaoXEDtGC",
  "key16": "53hHuKYJf8VZUaTrCk5LpZgupZGyKzHkSRnDcL2aVyzennPoVJq2T7oUBozY8xfYTkZ9UkZVR7WLgfms4ZEXp6dg",
  "key17": "53TyuQts26ewq1iwUuffbDDfPcss7yKWQPPPC6Ku1VmEn19cMYND6N561bB3bivs1CbmFRHkdr6jaxBmdQ8U1XES",
  "key18": "KvxZg39B3J8CXsYCU3zFAm277he42V6ZkL94bAqmLfRqAp8DdkJ5nHLnv9ytzBQWqdtJwvHAcAYHxDYYHGBvJkG",
  "key19": "4Zr5KxFqWbwQqBBqnQp2t7FNFyZH8CjAW4SmX3YCxP5G49uWTRadvaA9Vwinu6o12V84LMBc4aGMDWst4iqEU65b",
  "key20": "3XtSaQ8JSsNpRA2UR658cFtYMAz6pqwi4PAMXtqsmvtrBSn4RkK6bSSENTz4ug3V2Qf7awe1YpFZsLueXRNChAn9",
  "key21": "3pyRZ9HaHjq3uAMk75NHHjoaWH7LUBrXqdKyLEBhoKPiX5MPsu13BRpqxoyGV4LaGgCyPw7Q9msKfn7Sc4bvhbQg",
  "key22": "5wuF81MdmJ5L1cTrF4xjsr3qrAzvXMmVRGdJP86PaypmWask2k3QdWtPHWjyz91RjyeTL9ivnXy3BvvrqUmPfeNJ",
  "key23": "2bj1RRPnUGkHLK6nUtVhoBL2oabo4acpD67VDtZhr1gJVCoa1bzvAnCyWQWofKeQ8YdfFy9w5thYLogzjmTi6WnD",
  "key24": "38xdZMYYahK5u4rtsGsjok7dkdFMNFvAJ9FYyste9SJdW622xeDEbWjAjmbrhGbG71WUPnuC7a3tAywxWVD5pa28",
  "key25": "4SNmefz3kWtwbWgnHt5iZfpwLMQjKGoyyHW7Xa1MfX5fam3x418oWYgTtHTHxukhb5cDWKttzj4rWCwB4euxrbuz",
  "key26": "24eN5m26M9uZ4SjWQ2rFiLnud7d1cePeNSSHma6Hfv38zPdWVTyDfzCg15dCcuwKJtsWwfNNYFiXWNU5zj5AxYR3",
  "key27": "2ieWBgutWjvAAXxEVSpoxNzbxhzhqaFoZ6in5dAekJ8hHBzEfsLmboT9qkXG4cEcZ9roDM3gopWMgh77MD6wc6QG",
  "key28": "4BgrMoLzqP2nuGqXDNtgwgUMeo4CdjgF7ivsWNSLZSgMTte9EDMzmgTzTinGkgmWsuGEDrPB4VDtUDjdk4or5joG",
  "key29": "BrcLap91zmxWjX4m6DQGoV7nAzzSoMUEn8GH1DndQmZGJZHAmNJdHfDJQgea7CmPsJgxsFLg9LmcUmPBk3YCaAc",
  "key30": "3r6iFdNvERfW38wKodVBzDXe9huQ51D2ZcEzRMQVzQTd7goSXrAvnxTYnXcA6UmkR8pr4E6hnSdSmbAQQ6gKX8G5",
  "key31": "4TaxMkh3M6A7icQ7KBmFRq4ajP8rCcTT1ZSWNy67qw9nhwAPpMjTRawexAnfAiro3CEXanfZZmqQD1CguL5T8Bw2",
  "key32": "2MF4GNoSuAp5mNAtbPzzjfbkYJQr4bryj3U2vHa2tsuu85w9kUCg8wBwCEFUEmg2rznmRkAqJq4vSsr6Z2K4aNx1",
  "key33": "CA5LaUhEmxdoXUjeP75k8rfFsk2JAMR6oMtHwxZiwxrbBZLYJBy9jdwr2QTkzpoNFCbJsmLY9q1kbdpBp15jfU3",
  "key34": "4G2gEo1Brts4QQdynq9YxqJisEN8iGoFYCrWjoVCW8q5t81tUmHyoV5nvkG9TvoPgejdJeL7aqZiFLxJLX3oDyJn",
  "key35": "2HHme7Lqf7zZRbiuTPwqBLitDr5aC3FV52VVDuTWJjXtaC27WEQ3S6yaXEJPn3inSLVxHKiu1r8vdGA77xrseh4e",
  "key36": "5QEm4bjxdjg31hxR68eTR5uLZ8UAx23dysfwPfZdD7B13Wr799EqUenLNtT8cSNyJ9oqbbtmtwxs84MrFpMJwFZA",
  "key37": "9PYDPAB1aYzw2XiTwxUo7scmF4pL4aZSEvxZp2QgMGyXDpNpXbW1UufboSfCpDTz1U1dXirvrN75339tZ5PExzi",
  "key38": "2aTABm87KayRwFXLMvLT9vGYQpKHNm6s1oDuXkjrYKA1sBQ965WE66M8VGKYhZP83aKdTT9AvvDPKZNxDMwzgWmW",
  "key39": "wmteZxqXL4NmCg6FTwGu4D3q2NEgueFhBVduRjhsWjdApytVbtwzAHJ93uiLZmWSLjA4Qg3wxV2UrmKw9iDecw1",
  "key40": "23zcpdZQxiMVjAdpnghZoKZDeKq57Rt9Xe79Hcp9wCAGuhRiiyrrNmwwuxiRCJovjV1mpiXR92CoA7Q7ntPAMiNw",
  "key41": "UWPKgJ1VMBCR6u9DtjdCWn7nCmfNpn7AsxFmSy3SJShUeyMdqRNSX6BMfXE1jWHkueNyxG8S8W1wAFZGRfpek5E",
  "key42": "C2AM3UtfkC2WrrnwESBTqNYUbtvEQNskLPaRhpJHCxxe7xomitcgYKgn4LeNP77DbZEgp3XuEFJahbsyjeSxR3W"
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
