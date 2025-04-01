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
    "3aJ4nbLKx48QqBPJdphonRMJ9Xk1xPdiRmyCoWe8DUgaDJauPfh7oEgJbtR1bZGyzxUErx1e35CnH5GAeT5GZLe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zGjDpXKmQqYAwT64ohcGNQkk2n8PwWG6ZfnQuUr5sxBwYRH97PYZpv4Axrycdz1xbxBi6FP8rXF78BWftrViVWx",
  "key1": "2tpiu6a47WFpe1NSjGjvXYq6Lff2iSrtF9TNToPavami6XhdKZvxL9p8qW7yr9LiE6rJZFCUfiysDsm6oyXoueZE",
  "key2": "2Liva35eAVwUQLTUX5SmEpsjYHBRzUbbiUuWTgciXZiDDP3dskkARB48gCX4mHaduKrYu17M2y5m6VEntrvCobay",
  "key3": "3APUpioGdkWuZeVbKswzgXN5wyNtS4bhFZRTSZzhrnmNbhKdbh972RdsPvP1a48bpfZddaT8rwBQDBEqWoNpnSz",
  "key4": "2yTroMqVpiavMtusC9gkQyqYnPPknQeHrYor1GPqF4eX7JRNM1hnyjZfwtgw4nb4jhdRc7q6cjzoGgSwTsg369hL",
  "key5": "7F36LWspzRjeQB6yC8xnNm4WN5YL3sUymT68D4a33zDXvo4k6dBKbCB3Sx48r6q11ibXKj4JFEfWadj3eboAKR8",
  "key6": "2dECsuCgRCBHM2S9FT6R9k1bfkVNMVW8VMyjp78kF9w8UsrY8KWnXdUfx5rMCPZBLdxGo3ZTmKK4DkSm7hF6d3xn",
  "key7": "tSbVWNrcVEvcGrkfibUpbnjne2zFgeWWVcAFfp5bBa7ATL7pjsVRbbExjmZD2jqenFFQN6Bs2upsuST894cV4GL",
  "key8": "3rMVVkBtgTJizifp4ZGSKeWWpzDH6HsygXv5oPEiqJpvS8fciG1anzJUT689krvCdFN7voCXAereVevjzo5WAuF8",
  "key9": "5HmM7tbUsrSgjZXyMvzs64c6PN8c7UQXWKcmMgy41k5KTNTkh7jzQPM65AErWcZSbjjiyxYw9nsgVZFRed3z3rE9",
  "key10": "4VPjEo24o5yuBqvSL4HBwKi3aiL5AUjjY5B7Wm2mFrkoWxSe4vFRKUjYmJWNdRVtfexxnFpqFcFjMLSt7aMmbSeB",
  "key11": "23Lo92NQrgggSWVVyapTac8BUZYXL8trDNsDd7dJHy5WaH6sX1SARGaCkjXjfUiqFX5cX5YjaUx5nHF1V1kGEkQA",
  "key12": "5LRT1GvmPqpPx79VmmbarH5jaa3rpxJVYayuytbNfAjw1u5JGaimGwLDzBcMUM7YPxLYHTzQ69WpUpNk9q4cmipH",
  "key13": "4mcrGQu37gPpq1iz41JsXX8LtZs668F9pT3sMxxSMiCWoRyx9yEcvQUJMoHv1LHJpTfJR8752kF37HvHXL6AcDqi",
  "key14": "44TQaBXLnKkRYB1DpHd1GJGPBUEi9aqAZJZ2BTsVuXCcwk5fcTbX4F4PZHmsXte7UN8JUWwvYWMUqLoZ1qtkya2Y",
  "key15": "1nhBZVG6578vNrVLw71cxqEfJ8sX1gUzDwEs3MGpHvsqXC5QTRGTiBWbnrxcrB2PNuCShoBVtQ7rNF8Ew8ciFPR",
  "key16": "4xnn2dKqXPsiQH1GUWba3ToMqHUzqBLbLeUGeRDNKJZT5t9ccNJqoHu79hQg3BcfVHL2Btq2xTJ1GwzkDWZWgS3b",
  "key17": "2MPWsmPmGZ51VsihLyvMY6GWC2GuiFrASWUa1tBuTtczvVM2K3oNbd5krvyhhYVX4DBFce7pnpQSuiMH8usR5R3j",
  "key18": "3TDas1b6EmJHASS5YpDhNoTHifYp3FCwx52uf4YpxLo9w4vmH7eGbMJVpBiRsiHLfJDkgtyYzQb4CWTKfNmRjnhi",
  "key19": "5bS2DJ761RVtTE1MZYGiCPYizhYCoq8Us5Eho7WvyR7qzHYLsppjRVuKeMrAdX7G9ubwxas78sCftRpSQhmgRLBp",
  "key20": "f7cMVGhiApGJmsCJcNPsPaAkTkCmvvGWsTA8eU2mxQyQcwpAjsY2vAXi94priYqwgqUDsihq18EnV4FVA2mX1PV",
  "key21": "8kNVRESAEftstHWX9KifnC8YTN38yXgxbwe6uZJj5hmFQxGmnd1F1JJTT5BKGFRDLTT6MaZPYfUXbqAkXrWzUhL",
  "key22": "Poihiinj4QkW94o8SBopn4VYuP5gNxwgMRNdpnLDM3aLvBr2zg7fKAWpokaqPgaFJCPjkVaKWESwswsNzZ4SDmg",
  "key23": "51jfBrHi2GHQtBi5F163vqXpAxnrKsK9xmB3kriFW8utYuU7Dnxts6GoR8bcywkzKzDaU5MSFLis1CBsyVvoTTiG",
  "key24": "3Y2enZT9M5unrp47LvsoSV8p86DCzWR91TZKoAKKdcV88rj8ouQ2Ww3veGgfNfkxBeAduLRhZXJewffCfu5nGZ4x",
  "key25": "3RAisae1azZ95vfGyRJVbWTQYZMGk4rQ8GJYBbPeZ2E1tmebPtz6GX9gemKfroKo3qNAuzuVxFEEJ1nNnnnmdaMG",
  "key26": "4ipjcngVuYphfWmXEqF1i7PfiqfZkKhuhzr7SaEeyeh4bWYVUqRnPhgGFFDxPcC3yc89G9XKjoipwQB4sa3t1uhW",
  "key27": "2jPWm4pHBPbR2bQtQqUT77deqAT6zvHBnC9Yrp8XLNZPSohPVKf75WkE1QqjD1Lej5cTSnXzbAuwDK6J5FpZFz1i",
  "key28": "4BgtVohsngbwrSN21CsnbfJ4p6tGFFd975eMoBgVQcLxsFquDsuqk1xRBiT8q6ZqNuNEjFZpUsNN3NCYtr8pCtU8",
  "key29": "3oBc2kY4KU6UYs3HtUFBMh3XhczWdE6cRYDLe8NzVZQdw3UJog6TQW8gEYy8nt64GffGZGHKLfuWLZCJF52GewY7",
  "key30": "4uSNoMkQt7iUmak6A1HxSnMrSsf8Ptm4vs4HG78bQEqog5maAkvnNEyP9j3X9xfre5fYS4E5X4ge1NVmweTaCWZY",
  "key31": "4xEo9Si7Wk1WBqmUUarePGSVTMrx6atPAJbd4GsxzwKueJSLY5zJC1qUzab58bENsJgQyKiMRzhCtnsjH1S6PMjQ",
  "key32": "5494ZsdigXC3Tf2T3ima5bYE5m2qKBNdwbXeBRoTWpWWQxkbwnFm2yznsrhYzP96CY58CVPqGWSVhoxzp1YxbJQ2",
  "key33": "33KEryQnq15Ny3ittSk272HRrfBJucJBG3TnPUT1r6cyuBGgkG8eb2i7FTk5YiPCgq4QLiJmaTYoAskudvjDnttK",
  "key34": "4P2CHotaZ1Bv7voJjZyY1fRY9ue9EB1WfqfjTUKb17oB1YZwwkXdRdyEiV4Ma7RjZ6agED9F15H8SuhWHVvERCCF",
  "key35": "J773xZYtuwZAV58FkBYp1eyURiPVdGuaSknRav9idkwsn7hTBKtvLQBq4QTj7mZYVWiVK65CNwKHrn1NRtGbFmD",
  "key36": "AdXHRqWsgm6g9oMHdWBv3LfyY4b1Z1zWLBZ4r5JhFriDzTxqwAWzPahcgPx5DkQQZQSctzp3TbPJc4NzuhdhyXu",
  "key37": "63oGCntLtUc2GD45vHB3wuVxRTotaEpacUK5A6FaYtFXjoc4mmqSzzFVLxXuibawtPXv5r9f8oAnCxuGKMKwKAGQ",
  "key38": "4JQyF9Rw3rFXey8WcNgwPskoPkn93vDxXCip3FsLtfTnw51NZCu8Yxst48ekfcwpuHChMeEry7FdxbEE6EXUonNf",
  "key39": "4FiYkwcES4HL5zVZ1JBVSvKMiZNVE3hJ4QQaxnMuFu5njWeGepJazVY2ywJ8zJRxBNsKZEPKhrr3U7GF3Q4thsMz",
  "key40": "3x4Gt9Bjuxt9JDYuWH3oi7bwA2GXVtN3HohZb7Hpa5dPwzExd6NdBqzySWwJEdP8jbnF9QggBSUbAoYXrjpNGaba",
  "key41": "3R3pZZctLaGbPq3kLxY94cNxj7Y1p84zXshb28DqJwCsNWyV4H1VWzt77excB71FAQHXbvauGvBK8ZdxD7ogqEJ1",
  "key42": "3VvwX47chsEg9E8pP3Xe8k5SU5BVcyb3adM2zuHBJKvhdr3mT2LrVGWe5LXSzbwW9gXhDhCkzdALyS6Pqd38v3Wd",
  "key43": "2w6Gg9Z4yrPW513sXZ3KvTo33RRAiAqDpMUHo6YwqbfhZmZqAoENNSEVi5AaTDsh1ufMUiT1Vu8BqJLYV7a4K3rR",
  "key44": "3hh1YnqjziMDvAovZdjovYrBxazntRTh66wK949xej3SS6x5C1PCaGnk9uK3yZcGs3E5Vu4S9vDJ4qnzNj5JS7bb"
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
