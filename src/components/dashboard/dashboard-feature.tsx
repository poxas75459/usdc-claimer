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
    "5aTBgJMyDE1LvGjHQh64KoYF1RJn36kFStQ151xynucDaDcTvWqBbpEMNT8WDSGDyKRfjnds5KJbSMPYeKdKUyvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAMJAyE5bNgHYP3J7nk9EzQR9vq87LbcJjpAyB1Gwny68bV5NfPSNvxktmPtjnSaPHcUSJp1B7vK5LskK4r2LiN",
  "key1": "4JcefmwYPW2crqWUWhJMiXpmdDsPzyeZNK642Dk6boQSKLYFD63WwBT5LFK583mKLCQixKKzv83B3JdmQmzvTNBa",
  "key2": "21MBdDvgp9SQWwXMbGRaLZhrF87Yit86bScRnky7Dkw2eDiKFiEis54ZA5cabpbr5DKoSovgVQkoLd7d9bXbBWC3",
  "key3": "bqbADkbByAGq5VwPetRSsrzKpeaGiH9MCSWn19TmynYjqhVoH6wWPYnMasDZYjDTrXGgU4SygYDatuQwe6g2AT2",
  "key4": "4cr8a1doupr7GFR2QVRvpgPFZjoEbL4WNZV4bWCmDc4QochQeTRhA1tscTWVqXcPr3PKZ5i6NreYL3HoqsXtVd3V",
  "key5": "2UZ7nwSxJ2ij4B3QWz7ps97KH8VpMwhM1hc4aZTi2epNH49DhgC15FXki5yv4DDENcSbnhWHcBxSSzhqgwbb81ZF",
  "key6": "21GagB39FhkxWrPi4fwkfcLYSKyoSDkyTbzEQXYp4sru59RXBaPjeT9q2jtoTccittv5czMGD6bSZAJGxb5WbLrV",
  "key7": "3Aoibugv15huQHEwkJV25Do9Wf9a6Tghms6ULkXufjjcijCTAN7UfsdoUBEtEbpqTcUfQbFzizCmKDPVpe9gGkUz",
  "key8": "5zTyUsg2mxm1t36PWUBTD88cwS845WEReEi1SiYEhFWaDHgbtvepurKg6qgqDZJ6i652hRDgg973x9FSyqwfMiJk",
  "key9": "atsBWpLvL4n3g2csa7BmPGtkPn3XT3WzaQVxbo5UEJLVfoDd1R1U1kLzZwTP2yTRhDfNAY8HfM5hgJHzSLWuYUB",
  "key10": "rbaCE6oMgvueEhqPH42KJ66GF7nEfqeUeXfYgiJwbHgGRQ9asqMnFzVmhvPKiWq6Cej9ppWpvJwe5toPn1r7XRX",
  "key11": "2P13MCWbCm3gypQPyoE2pVw9DiEpjDky9RzwmMZYSKfGw1JPkwh1iktLonjzzkQUxso4HDBZva5E2kCa9nYFE4AB",
  "key12": "1pB9ch6QxzTH3XD9J9UL12De36g6sBofH7erVjPGJuYKkKTmTBRSrj3RYexwsLPt2LESmmTVy8AmtP6E5zRBANn",
  "key13": "259ffysGhsUmbskUQPfA2G6U6uyPYMwLa6tvutPGtQACpR4kzkdrCBzALxG3sQdcGFWhC1yhsDiyttiTvU7mh4wy",
  "key14": "3ieJXtc957xhaURzagENWwCoDvDicwzMACN4UwWDWKHW3a4Ry6Hn6ewTtKQJHffkj7b7P3zchJuCXFRZ6NYdepr9",
  "key15": "5nPaMXGPr6cdLx8F4TPZVGpAY3B2LaUcfzAHxAgbnQb9VnwmdW7XprkRfdP4ngPLwMjNoWuwAX7o7sNkdbhMQXUX",
  "key16": "2DQ1kYkeLzLmy3zsefEEPPuDATSbG3WokZENwyAxMXNYqdiEpTyPecMsj79UfwCbPDhDbQDvB7i2ymYZKhX3jjbc",
  "key17": "2nuf35VJ6KhzgJroBYehdRBR9xrTmZPZwV7WSE69Dni9L5FaemTg7woLSxi6drqeb1iRJnTiSGfN6qKWT3Hxi5pf",
  "key18": "3AYrDdHe5e9F6zyccE1SG3cbYrd4UaEC1ZQmMcHQYyTydtnqxiQ5QSsvThtUnRkpZB85By7ovys1oREekUbYoScA",
  "key19": "5mwEQeDSj9cnpKhGm2XwyTr8bidCeNUDKwGSGJ3GCt6Ag7Pc3azw5rWnckJyrt9ShKSUDj6E8RykPGL5MjFmvf8v",
  "key20": "55SEKg8eim6QZ4zVC6GYnjTHuGRo9N9nNhWezyyR2MoYsmPtvMn4xXnZ2E5ETzjhwNy1uQVcHwixpNsgx87h8eon",
  "key21": "4J4CUTQCPLV9r9kRD9i6UMcdpsmWtfKGjaFyD57xbWHL69ZCng8DCQQrJCvN2NHe5TarNJP4j5NoCAK5v7fnc95L",
  "key22": "23ipiCWUUNMTSSEsD2iPa5N2yCfmuZSszXPrAh2YTrjHHX8ghShtjTBzAAhp43DWkmnQMmyY2SJqnzvZ8hGpxa2g",
  "key23": "4WPWMi6jVkFKoedAamvF6v9AQFCtD46xHhB3gdX6impE3fL35pWdDwU2kJVAAskhK47hrXjzmDhcZ5xcMMMsMtdd",
  "key24": "4cWf98phtf5iuTpVymBYiuFdJhtEeHKEAvHucjnspxDWLaL4XjzkDNjbuAJnaFQifRNedySJCz2MzBpLuwd3i1YN",
  "key25": "xApjYhrPFbcGqLqr32rGLzK5z7dPccYCF6QMdFvquNPc7wVacJMbCBPT5dDRVD6VKeeMsnJXf2cmii2tRjzAsig",
  "key26": "2B221B65Eg264Gpp519aiFF7ZyqsuLtQiGST4SWQMhvFE5jekEmSMfAZMPNyvD2EuGdpSJEFukxD7gQDGfqUQj5a",
  "key27": "5UAud4GJgTmEyKv9jxtP5oLVVakyrGJ6nLgzNHuHscv1uhitx3j4EkMTcusDULfusW6cp9WzKfqoZQYdGef1weqX",
  "key28": "4txMmXsCdWhCv5cZe2LH9j65o3skmiRU1zhH9vVWbp9dwfYX62aU2JmMMWbudgSiRfw3gqc2nkX7sN7R7iDXpD3M",
  "key29": "5zWPN1hvAen3nMxSEHCMdDa8wcAR9km6hivpnr6nnAavWTAz2UoNW9GtgFUcQ6g5xE8emhkbWbmFgbvgi3crp4Y1",
  "key30": "2dUJpunhSwCu8Vo2UPM6iuC7wLBgCYNVAEwdx2V4zth3NYH6DpRDsGGYtJYZ52CqCBTFeLFKdhxsYwoWYFz7bGyu",
  "key31": "nCkoU7EuJZLKdmWgxte7F9FoU4rhdmCQHa3qYABi8hD57H9SjjmCioQi7bCku33VPex3uNLdx8iZkotRrvAmUeV",
  "key32": "4ciRmk4GcMtNGpTEJU6FKmJVj1hdcfLtcwjinLtBNKDfdvMNwiVUZ8mK2bG7KjvtaxjzUVqYsC5pNepegCLiXPvJ",
  "key33": "5iyuKPCLZ441cDfuoHGNY7W75GBkWif5625f7hGqQD7Fj29dDn2kTSVsHMpNN2JHMUYZdqvpddQSy9dzYgFnUDmH",
  "key34": "5yk5DTvb2BpS7pCTXnpPHL4Rev2pyLDkSGJ346yyfjdd7vQpn7WWhM3HMjPRJ6gDVQQao5ikRP3iRVd3yQzokDUS",
  "key35": "3bj4TrwNUxJ9DqVDBVvMPg6V9CbBoyfxx7JnVbYQKiMEQFgfLdaqq5rEPxYGi9fsVaTx7XtYu8J2UJBeNM7UjDm2",
  "key36": "3Mv39P4NzzE5qVRjAoA3qmge4ohd8pgUcfWCuHx3q5aAHe26kUC5DRyHHvWTBU8oCEivm85o5FPz2SkVDyWknRor",
  "key37": "33GnZiP3EsSHVpQUf37H4khBUMf8FbLSCnfc15J9ArC88hjBAYRRNSp3N81iF47BDFFsi9cxmnp4LU5JkVuYasvR",
  "key38": "4Bvwwizz97MrMfwkR6XuuynatH38tjiJQPJiFddnXK8tp6gHgJ1LJaeKEagy1sNsK24LTAND3i2bypgunKpDjPwf",
  "key39": "2Z81Hsei62FcpH3e9wsAM5r5hrUpMPapSYd4xohetitxV8J6r2Lib5b8da6ughzW5Kvya2RVDQ7ZKKifYmuZ8BK9",
  "key40": "mKoMYPnghBMnDhEKG7ixZBTtsKB2KAUB2MhtK3tRwEFfkgZCuBhC5a58R3v92CKWCK2j8duDC5y6yo2DCdVjmNM",
  "key41": "3ExjVKTfRsYyjerV4pR5rojKrUiSsQ8C77ezWUCLigsPmRiiuFvvdYh1znBrXiqrv3TxQeReaeQp4zeDYLat79ya",
  "key42": "4gKjHzZgFU4majZLkPkbqprzzmwZrDrtkb6BH25W1aSKX3nScRUaVb3mrRMZz5KLoNAamq2yAXj2toTof7UEvdKA",
  "key43": "bgbXaZwNRHjHyKKwCswEzw1Ju6dw7XHshFEq2cQpKbSqUQAYrrnpzNKSSuoqbiZsJrKg4mmbU4ZcpKWpvuxq4ga",
  "key44": "4RQBmFtNWjd7T6NNTxFouN3TZuvxhKcdn62ZxJrTdv3ZDanVpeim5n1wxYA6xYMrvzVpYkbgLyu4uZ3f22vWH4v9",
  "key45": "3tL1oEiiFY1YfZQKgma7cEeEX5vKT4QN62JfSqJhSDv8uwGfZuTqL3tcyuE8XdmJ2UgbmgkpPLTHPiTJws5vziDT",
  "key46": "5WZBqitzrU946Km11CHSt4MELfDjCntycTrAi7yDFCAj1RqJrnMd9WDP4JW3ww9kdnC9N33q5i7J58ts5PimaxUb",
  "key47": "2abjte6di61CW9xWrbtiCpHjMijrGCsb5QRiRM1CXXcx3e9MJomdrMMzGqD3Aw65rswGwnfts5pjsA9SurYDxbAm"
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
