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
    "5fnGFaE85K8i1J6c7xmXDZ44CePiEy4yp1KCvuXZXWnAM5YATmyis768pWuskh8wcU4HCxbxcPm5xtboqWdM48kL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8UrkaPuFUNZuDGUwPChBQg79xWQwkiAqGqyJTAbGq1LUGxKu8W7UYTFZvNaNGa7gPw6PS2KYgkgdhj4NJqb5Tt",
  "key1": "66GznoqjnPDotYcx1Ko7KKhuhtjxg6whrmnrfgooD89rRaSgfzVPjvEdxijLaucDdex74KS6d1AhwsPPnUSUBXsw",
  "key2": "4HuRuyTdATAAwmAuS525aogRkC6fcXSaHGGePCcrG8dDdGm4YRjaKiZ9zniUz8oLsXdaHKS6BNUkUU7oWpNbFgy3",
  "key3": "22CDxE8dHzRs5b2zhcya4uebRN8x1oQ9nTybX9VoKiRdi31oY2bGxRQcV6Jspvn7CHLsXhWf7Qex5upVEvAfF3hx",
  "key4": "2W1DDf8q8DHPvCYYxXpGBS2pb3cEFfV7vBfDZGXnT2FxDt2miU9vVcqmbb98CDBYXUXe4BW9DZCunu9jRwGhe3mN",
  "key5": "2na1hjeNVphZQDTpi3kq4V45kGKp1HegiJJ6JeCG7MxrYZoHUkAMikwGWUCni5JdgVEqt7qUzrcZFvywzYZK2Xbg",
  "key6": "9yWs872HWsenDvr5TeUZ2YvKWFRj7R45xUBsASW8P3TDBtgJGfjpFCFjDKVoKvbgtEo4fSqpTatQnDhBYqVxqZJ",
  "key7": "2iTB23Nm45dtKMqxLXFuAsWo4RfKjN4mxumvD32EzC5Ko8kSCNUpy2XaBFxz8FB4FFdnzXmg2ssU7a2WQaE8JUMq",
  "key8": "2oZ4vGearJGJzdLt5AT11V6qnaAS5TG4Hno6FsNoNBu2KHroWbBUyFiPC1UCGxFTmZuRazzHMATKin1vKtifHdA1",
  "key9": "6dGW2zMBqWdWKiLg7QMnFZkr4NKexCzWjJWJUjFbX91ECuGm4xfATGfPgq6QyQtjGETyv42SopvXnr91XKRSCRx",
  "key10": "2MxaxckRop13huiBBtyke71rKDbsDshXUsHcXJ65Bseysa5bLVHhZpPeh4D6ngMu3hncmnbBsurThdTPuz2rTnky",
  "key11": "4G94fcAGrnpAaYevfwHjrLZQtMFm5r25uD5KWvaX33moLo9r5BiNBPt2Seiu5gKQcgNuWBJvFfJZkTD5o8CoFQLA",
  "key12": "2GqhUCVp4GYqP6Uut7WDtmXPewLvamLA4b6cxeg1S2haSBQxTG2iC6RVKdDtN5esedPT5LUefMvWD9nUaQMXFHGy",
  "key13": "2mozFpJKKnKBL7KG4eVk48cvrfEtBmtBe7D4MDdgFyZ62Lcye9jNaaGM1wjUsJzFUFjjuZy3WvyLtChJrKixEUK2",
  "key14": "4GgGfHxUfX5DAcbeRAuQBEmDx4jjECtjHekAYb1ioukX8WfQSBJrPQ7dENLdN8EzxNDmn3wHszrpNZStxXeGYxqy",
  "key15": "5REE7V2jKeZz7PtB7qFDLsX2QH7p4495ycLBGq1xtTFej2F5zDdMoFTu5qYTErs3pxVgqD47wemDYYEz3DTAVuyP",
  "key16": "4aP8zXGSLbYhTMem7oqGxhuHdtccsFXBuPqftMhWZ6rknuRwPum5cwC2CuDM6anNSBVjiapgucS5xM8T5yRvzKJo",
  "key17": "9XvMgFBFP4rLMRsphXyWncr51DnNyvbRZDt3784Dd2m1BEeb4Ub6rxFzEsKR5qJY2vGEwUdtfUH3Zcvi4feuo2k",
  "key18": "4LgX5ZKF7YppdziejQgJxABo3oqQTQ4rMud1bgBxsZJur4AUHaDQKqXo7MbRJuj1AmiVvPdfc9yc7Ko7gLEGUJgV",
  "key19": "3NMdWw7aobSctUQfjzwejvvk8NLMc6svTfhtX7Y388C3zUSA7gRT5pZTx8ceZRn4NCXDDaFLA2F1HbJnFH6d5rqB",
  "key20": "3vwLPkhQGe1qGa55rHiuvTbLiZKA37PHxj9pWzcLHBUScxCCHUbw8CuwBSTqfvbZUYJHKQ33udFYxKaXNhDVYGnR",
  "key21": "cpaiWBHH2V8Lkj3g4iY5cfB6LVpij72pEScdnVYJd2jsRukjFH66zF4yhdEFjwSF7DnpXXiQobpkxgUPkiktV1u",
  "key22": "2ozyuhuNobsHrmSPgcAM5nnG6QvdjKR1GUXhf7Lh74EdwdD59f1ERFDLQL9y2AB4srQx7ouLziWbFtb71gp2SsZH",
  "key23": "5S84XQbGYruVqfaNXAdpiC7Qck7XLW3Q8tLTfpzVFoSVhTBuanRqawsxkiXjiFJTmUd85mDUPjmooHgHdaah2ost",
  "key24": "53TtnDzuKJSLUbAcDg7hYcNK4FoNJyqWkqXSJQr3ND6mknnAU7PzK5p1PP3hiS2hQ12q1BARrsWijeKuhXDK8sAY",
  "key25": "2VAMLEQ7DWQAcShtTPd6igm3HCEdFCAddAmw55TH9NM5uoKqDRAqPKXALRa1SHMuxBHPdHByRivbFFrjEZ69bFqZ",
  "key26": "4Vk3G3G8kVpp38ijJDzndoaN7uHGpUjLUQwZb4rdJqgBSe9gVXeUN9YWrwutp2KAYQHudqfW3zutpjB9jabErtcb",
  "key27": "HYkeiXowqRnZarRYueyk75RnW2MrMx63BDbCAhzxgwthmhr9HzpCTEqZWh55MoQFqTJejdX8ULcsgCRnuexPmwP",
  "key28": "5gekW3upkV8RUCMzMUisSYvA4MWyzoBRiAMD1v7tBLjdn4abB2xVqTHFXvKtL1Trennk2SKC1tbfCnraExvwuVzs",
  "key29": "2HGogLx8qd8G2CTNTYx43JiXKfSpef7bwzQ7tVMZptn2wLy6fe8EESqVhwMn5z659A1MCWjA1n2q5a9o8QHDwtUZ",
  "key30": "373HsLfx28iJWVRzyF2n1NrNdUm4JgmAYCxPdp4AfxuULnsCMFxcUcn11dUPCwdLboJp6B8PXmnhMQHx1ghXkPxL",
  "key31": "2DPu3B5fzpx4JQiYKNR5aeZX5v5sfEVpETn3HUY8bpovxEajLN3svewast2SCKCivEHEQ64TQCEt3mZ9BDqHuXXw",
  "key32": "26t5J4suuv2HrivRnK8Au7ELMTp2phiRMjxZXv6K3dpbKfKXKor6wUn6CZG79uANStH535r3hZSRUmQJpreThYiB",
  "key33": "5Mf217we9aLmDLH2wMPaJVYCz8rXn9eFDFAFWXvjhB66WakFtp4N4TVVdTPgRZFFVYnuTrum6bsEGfKXviwrigEc",
  "key34": "4MDehrytPAvcA1hPpeKdzaCbT4iQJYoN8p8ZQNv9BnEzPndwy5oxYGZHdNw7omdP8NhUVXkxxoUmkA2oR1V74sGe",
  "key35": "32pW6o6GkhriYv8w4j2ovPkxNEaRTo5Nka5bcjGQoeuJZEs8qturz54W5vzGmtmhrzxMK9hQoTWsxJv5hSt9QuqF"
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
