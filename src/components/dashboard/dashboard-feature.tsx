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
    "hnxJxcgWRyi3MUn5q2PXp9i8cx5oNMbrq97BgwSm6syvd7Ca2GqBLYD5eUuM9F4RbZVGCdxPjZKurykNJtizjRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Fhb4v5QgSd3eQRuHFFE6D3Er3hNGceM6wTBRNTP36fUN1qR4k4EmEXvyyktTkNWLipkBKm3eX1v923UkdS4yfG",
  "key1": "625iSJ2DiH7995LemruYuY5h3siAgHo3U7SEifNQ4sya69KDGHeYoy3hrJ3z1NsFKC7dftTEAQgBFhCmwP7qyYjM",
  "key2": "2ShVYWkmxwatqzFvzbF78JnrPa28dUjLjPYk3AuAbWLxKJ7fhziwSv62vkiwTicXK7orCFY2bgPBNtkch2wWuvop",
  "key3": "65r9fm4tRnv4XhusZi3gEQ8b642NfbaLWUgV4XdxrLkVCK1MNA9wmvsgNCdeRLFACqyss3xsBgawzePuGBhJeFRF",
  "key4": "5bg19e7bWQzzDSQysD6sebhvF8oqVvaF6RAbApP4ceXpCgxV3WZtGSJjaTqA34apKzEksFh8CPvVumrbBp4BhBGz",
  "key5": "3sACBUgVRUsYPkCFEyQG6irbUwTZCEd7MYMERq3692fgnBZduLRc2nkFi421jzCSYrMVv7BTpVQ49w7bbv2j75xJ",
  "key6": "311w5S7cPH1hrW7SyoKJzRLgR12oSZrmh4DDyoY96334Yv1h1yBzKqrm6o7FXYBbGKW7oZp3pCfKBJ4HQNWchJLx",
  "key7": "YmG81VeAibgW7pj3Km3NgvAncMHS7YtVKdusRnqncYBgt2B5P5quaAmB6DRZLeUis2yW1SZJNFL6BXSa4TnYTY7",
  "key8": "j4zDMnwwyhB3fGwtfqKGwvEyU9TeBAKiHBGVs5cSHQEpUsjXTntZRyRH7xPYL39DkmDbCmev4ESrtgK3CF9aWKC",
  "key9": "3c3FEzpoNZtWBMEhhRM3JU8r2hHDSaLHyTnD7EaPx1SUrLbGv9xWSXTYDaYQTjzEjC52aPN12otQC5XaLYuynp4E",
  "key10": "3aWpN38rVP1Ea1ATV6U2WsVZ69efjGeahWuinYcRzmj3oRBNbzwKnfE8WUxKMU5w4FE4bf6EuHZ8fxLLsyJAiXWY",
  "key11": "3LQyMtNeFoMftKf8EpuCRWJnQLLqEG6shbHuVNqKKjVVP1j9MeYfVXnBuQk6eRZA7GsmdUYRs29R8MRs3iQRJzce",
  "key12": "jH6uqXcJ5PNfD9T4R1RZ9A9hyGCno1HG6K2RXz9HGGCudSsKsQkWTvJizxv7gSotDEUpNKyrVBdk9NpkpCTr76h",
  "key13": "3EDMNx5YYU7mgd2UV3uaZaHHaRskjwMg6dHtW3PjTeLE6iuaT8hr11bzpXogFEeEvkqDhHqcvzSjM8PCBsLAbzq6",
  "key14": "3NycnPS1NdYdf83kHHjC5SpGg5k9FW8NZau3bPHbM1siy2HNjvVfHpyyutuKLaQzJmBuyyX5Vs4F8rWRZwfDVbK1",
  "key15": "5zPuX1KMswFkGcYirWTXtcQZMCx282i4eNH1g59hrmGZhQWyZpYKyZuLjB3vi7rvs4DmV8F9gSWhfypyfVk6sHzY",
  "key16": "S9Cg4zK7N8m5wELsmrqrjDLRCuen1wVGeKM6JayhvjgsqrZE8MWViQWVZJVXbGzGYpWBDKqwKb5ia4cxaBkuZhE",
  "key17": "u4M9A8sSodEqjzUpND7pPKTZLHA1XLiubhvoDwgYqyDqdi16HDHc8i8ZZSxUWYRgdYEGpvYMuhTbuRykhDVr2un",
  "key18": "rYXkJnaGRHu8DcZjr7B96a86sGRt6iyvL4aEnYVYh4CRjGSP72tDosvo8rzLS2Zbj9Ghoz1jz9uviKh9nvvxK9U",
  "key19": "Qcb1MiZwpWv9K9JAcHSUSuwQCKBdR4N3BDnitv4EbuRqR9LvyFH6bmSazt2WmCUsADcxocE4XV9vbsgc6d7cLGg",
  "key20": "2BwNhQgs1qo5aUiVmQmEUJz7aCuUJsy1NYoPJ2aZFscop5zii5yJ23cX4Zj3HCDUUpyUJMwLV8oaqg3nKcqiAXMv",
  "key21": "2Y5431vKLjMTKQxWjaBDL5mgtJW6ZEBimRoWKmogZzWNnTYCvf6e66YKKU3Kn4vQvDRa6JrzSCZcARxnJbSbRx7z",
  "key22": "NbwbDerDVWwL4ZgEb3giqa2WAj6TEGvsyaAbvt7CTmyKoQCGEw3NuYa4gDdqbXmWmwd4TegSiGbicuswUb8f9E3",
  "key23": "45ARHMcnpZU9B91bpm9NXMraVKZkN82T4mndrjiqacZD7F6XNzpc6GZoPmkUoqjM2s1KRiN6VwmDaiXARrEjr1FX",
  "key24": "3wDsraPjfmBixrDteFHYAdA95zmJdQjVRgcD6XuDBg7YJQBdoU6qQFPiVKDiM5LRSZdkUyEuovepUF6PyujpExow",
  "key25": "2Ccc3eHpc3Wjk8QGegNk262UkpYzXPHvNjpPcPEpk693qfdPt8pTTqNaUa2rZXpjUkYnS3AKx7v1GV49rgn72VMP",
  "key26": "5E3TvV1fAywjtnukBq6SmXwkNQG4J9SmGh5Gkg7tkSLNdR3G4ZKHonZP5ksZxoF4iAUMkEbxBeW4HAeggyrBG33V",
  "key27": "2Hmdrz7yHGedfoZPfXuE1AGCp7J1hmK65TKwv1TBF2tPQNnzjfRgzY8wkafgqWFnMUsCcp3BMH6qcjZsrFyWNeTm",
  "key28": "ffDdZrwDH4Ad6jCdaW7E3pbWowRXVvU5Hsg4a8mRzYFrREDaPeVAW3fBkxrkQt7QzxH3Qou1KeBrs3bxr6kLKwj",
  "key29": "28AC5z78FQCgLyhxUkhmBvsNLM8Pty8ZpYcpj9MPhstCVSvUzJg25E6DCRVEyvD81qzFgKb8T1G98nAGRJCabimz",
  "key30": "42r5CYTxXp3QuH6vuUKVyuBykVK9Vn5rtXuLeQNBdY9MbCf6sGTc2k3LVZw1TgidiQdVCnRZxuyHpUTzCZkG6MXf",
  "key31": "3MiC3bx5yvJKFncM9FkQ6m2dC4VhoSMpBRjggrt2v7tcQZ63VwvcVko5PBZ7S3s4v2XfLFGG7dVrmy5ze58FW3fp",
  "key32": "4gYBSELyGUyXnYLi1X5VoU2k4ofmJcQj4DM97Ejp4YPyJbGteWfrLFramiPmxvcW8nAcdm7Z3A89Tvvp1Xiv8hsU",
  "key33": "uZdeut16T7Jk83buYkxCRjZzMaFaatv553u1ahsn7RwvU7V4Ntg1g5wXVpg98XHjki2mXYsFUfJH32REk4hXwfc",
  "key34": "3s1oFyyy433Voe1KqH5uqTs4AN3DXGGUMwVq4M7E7yy9Ck8LjonQr8xY9BNT11ozV9dTCBC3CryWqRNUWnrD3aMn",
  "key35": "37MuXKgCUFL6yy4EA1rHjX2JpU5yEjmb9qkpRbLdto6trPyWxXtLk3cxexSoDYamwfRejvDdcmfeF9Xigv2tJSrg",
  "key36": "RCKFusaSirUtLadYpVcEd5BScsLBurSqWnwL7yr8j8TmvX4ticMzMABdn75NqCiqirCMLeGomiiaK2h8xRSUo5w",
  "key37": "4qAqSdnXDARxEYVQc3PTw6cBn9M6G8oTByWdPBs7XhmbHjjGq1g7o1YVVn1fry79Wds4aqCxUnwxPSUTbjsuTDcM",
  "key38": "5D2aeuCeRRPVRTfEcYFM1ineZr8WtaxEGBeJbjG9Hk982sbeP5AweT13iYv4Yz273nHiHJHo7xuTNnMdRAe3vww6",
  "key39": "5GjMHzLEXYqPQzduyU2z4pfvHTPa6huLZHjcLNupkxTuxz87LGXLZyhqoEU1gLYdAoSBVdpCWACgocZhrsBYRYMS",
  "key40": "37BUoScaa5LHQ6Mntdg8bP2oFaHwGWjP3rWD753w1CyTkohaakQbG1poMmMzAtCPDpZoXn1cC6pegabzWAoQWK6a",
  "key41": "5wf58rSRL4FMJmPvWHxmyUCSVbSjhQWmEJybiwzH8GSopvTExKS33NguAi1EE4msQgxCLdsExsDSgSr8oMFxaTYx",
  "key42": "2XToGLnSvs76g9PjjEe7EUun4KGHhwU6WfWMu5srRFj9JMPRwFMfMLYLQH42WN3ZStgJSXSFoTQ1SJeEbrhhcXYz",
  "key43": "4dBnoXsNPD7fFP8wX4cZLE6eW5kWi4nkMCFF2pt7ktsS9dRR9NpCP2FTdVDDVgxFDCeXuWJ2t96CA39R2jzdysQe",
  "key44": "398CG4ksfr6L2vj76zNcvpkSqvnZEf3PqZcuZXvukpLSmSMLiBBiBUKar7e2DNAuMM2BSuWK1mzoK5Cx7Snz1KZz",
  "key45": "nXqBPnr7a6sqBVgnBkhBqVJHi9xSCkay4GEL3ZUUooPHzKzJrWy8tyb7FWsJM46mnBonpELqM1ZhQfWswkr2rRz",
  "key46": "3H9PzGPdwPh5qECAzyzMNy5k99txgaHqtfjfVu9KTpnjC9cyNZFS6VNUSE4r1vM3RxMgPx6aru31Ea1xGAWvAycD",
  "key47": "4DfXWyr1HXmTwdESDEpTzERc4Q8qHseYM4JScXEpTPHo1RXTccbBxqK9FUrBVhku62Nt3rMFZZUvgtgTi1t2mqKg"
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
