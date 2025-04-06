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
    "5vgwhTeV74366R5A1zkQTbu2U3xtM99FG7Qsm6SLiV9CqCEBYtQFtCTgEKwr6EupsgVAYgEr3gXhSBahHnP1XjRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dzAGzsNvcpy6SLpMm42c8KmyGpT119mBswif4HPp9dEaBT6FKniG6ASaq2fESALr2GohsPXM3SFEsBBYTs4LsyE",
  "key1": "gB5ZAP3gFvCia42ffAPqN24Y8RQ7HsSrvBmNcq6YScu6FcndorHEfFt7Uquw6N76a6BoWeCscUvkeHQeNFUm7EE",
  "key2": "398H1YNnTJ4ePJGu5mTS7DkW25bPAd5FdttiGYZD3VeFdPx79e7UoQP8B4sFQrM67r46K4xL58NQBctAaau9omk5",
  "key3": "iRWQPSdXzpNn2TwejGuNjiJJbv8DsK3PkdceY5n1YDtVaTkEU3A8FG4rUuxkGDgzfr8Meqvw4MfTRDr95zRaX9U",
  "key4": "4ePH3tt28GF6ZuARQF9dPPhR45oGQdFzEJ7TS1ERQHNf5eaZWQ7Rs2DYQCXFQ4KsrppzVBsHRBCcVVCxbiCPNNU5",
  "key5": "5jNzUvVT6MoXnAb3yaPasKspKRfPvXfqDB9dhZFiCe2tVN8MNWmbcPPUMzfEadFLQqWMxWUfXpVn8KFKfcuNm17v",
  "key6": "5PM3H2UArx3ZAjkTqjSGCJF3KzRM5op6ZauW77qqh2oqxbeagbFhWGqfSfoKyLTfiTYdKVF81Xk5odqCQ2tS7WbT",
  "key7": "5WEDmrb53XX4sbDp6Za5etxGTtJJV7sxUnVPuod3vEtuvKeYPTEJrk4KbzVLNP8grXpJoywWjmsJfTe14y861hzr",
  "key8": "qJDpCS5dk7uXHUtBj9sqsUtNg3WraXnpsi6rpcP9QjSr4As5QnSkjYL4sVgeUbLKbnQ1w3EYunA67PhpyxL4ptJ",
  "key9": "vk6Y9HmHjun9pmLwCmCuEHRheQV3Tj3SQB4MGrha6rb4JMUL4DS8zKffTKMYBvVwape4AMoJM2rte3P4eRAkYdr",
  "key10": "33mqB1hsEF7yDb3psLrMaFycDHPof3txyNiWPfuv5TX14wccTHBAaAmon3erL5RTDuurUnq59QtPGPNyZ1NFVSkY",
  "key11": "5vtuZi7C4yugRrR5KBRxBSMPUU6votAcAFCyVTHGThhFawKwrSqWcu8bBzHzW9c6BcF9bR32Ttr5EFS68MNpvGG8",
  "key12": "4NuRjg8MYfANWatA4zeX5xu1Fv6ocJhGHZK5fKth3nQQuujCNCeYoDUvStkdwUuuovVWmud9YCC9ynQ7GLqgYnTa",
  "key13": "3Xa2WdQQ3FQU53bdnX4Xhmz7aRTSGWtz2t86pRrDgWeh7NgGvzYyub6aWMELWG8qkxi4zyMrWy3GsD9gHN1ebZiK",
  "key14": "2M6X9RqruzWc2WLKkihu7zRivZkLk2imrfzDQ32q5A9suZFGwi5pjidCVB9JR9QUCyW7hNmPX3GEoaaS5bN9i2Fu",
  "key15": "5GnEeWjDJAoekvHxTmP7VkNUe3h2uXxfD46XYgYdVUXMUQniGkT7NurTtndvLyvhNgWhFQ9W7wG9BMGSL7dw7XfC",
  "key16": "2koF6eA8gdUDKZVAH25mQJnskTWBu9SLSEX9GZ2ALjKNo8Tqurp41KLNkdtoeZEYnAjJNQoexgW6pQTv8gvKFqpN",
  "key17": "2bMeDruTbsCpbQLFZqbdpUFfUG4bwJ4ADLDUu1rx43EuGjKr6TQMu9x7VxvNYuq9g4gj4AkzGNHxPdbbqqzoJrgU",
  "key18": "EiVd9FtdnK1DKN8xg2yJ9EALLeW6Q63aJVki6HDsSgNwHrfPCaxmpwMZS8kUyAZcsmPWfcc4RQn3SmpjPwwyMn1",
  "key19": "2tYymZPuRcvWB5YWtDYEv16tXCrnTfdxHaFt8rKMLczXbPT3K5q1rbWUF8gtYcUY9ox4H9rPoQ84WRG761fS8NiD",
  "key20": "4hDF7MQZcrzCfwEucHtmmVJLvY4LGvNFDB4MsVfJnaYBhUcaHK4BzrwJt1Rtmj4hudTRLY66NY9prg1BFRLy5vG8",
  "key21": "VoMcGPUZFybLYXVGFohBHv5DBH9EtkBXz2LM7TsgXXceqaJeJUdWGaSCeupcm1DEYKwJspdjsB9qnNbxF4LBSUM",
  "key22": "7vY42jLbauot9kfdctTqX1ySEB1ukq2Lfa8f1JyW93ic7v3bbX7AwzeGkfQL1AEqcCPqjHPKQiFcV281beKXmQh",
  "key23": "2Kmw6MGU4dYxZVYXSGbQBpVDjkmcFooC97WK6Ry9E3XVFtF4pmhEHs4n7YCgtULpb2CLnrM6gAwrf8BSk7YCccnB",
  "key24": "55zHWxEtZh5xNiyXpdpLGnrZV271wXjaq554gqB4rsvboaRyyasbYL8LJaAbdk9pbyUhRmbjXuSErdk8e9tBXj1A",
  "key25": "2LaGHbYi3nvsTN8NrRJUMZg3UHeRwA2VXXTMVpAQm1BLzLwzU7W3TE29QFeKaiPGfDnpzszs2GPHwp3QF4nTsj26",
  "key26": "255qZAarGGA4c2vvkiYPxjB6Do8oECzrMAFHru6nAJjtRXZXdkvvCJ6R3dcNfJ5smbWgeYgzSwPqHbyrfiiqPWvA",
  "key27": "4AjbSrWV9UESuJJMN3fwxAKcnjKFaK5Stfs6BJ16LhMr7HhDafPPfjRFXeb1vvQEcgEzuJbFfz8GnbGsrVUJEubi",
  "key28": "4824LMh225cCZnU6DA3GaSz3NSo1h6XWPRd5E4EqyKEM1uPnVHKAPjzujTDDDQ3fCKV6hh88daFSBvKvctpaStQZ",
  "key29": "5P7XuvMVghZ7HwNQBiQWBudshJh5qiiSuPjier7YZBUtNQAHK3HbQZS131eZR7G4UdVwpVgmdQZfAqKqt59QkZyT",
  "key30": "NGTpqAVypBNr4q1z76Qi46ZyJYkUaLY43JvuJ88ZSfdQqL7CihH6eSa35KMAvZmdZt14CBBbmrMW9hz5XXprgv2",
  "key31": "5bwj6H1KqpyTuaz6wyvq3Bk8v2qaEnWHwfgV45wj968pEV3cd4GGmoBnG47PY8aGdXr3oBcB9nxgDbo8xNSDHeYr",
  "key32": "5hGQ2fgmpfuKSUSEdmhrwoDtPGoijHdSFTcJhrU9wLFTJhNhKRGMATJ3p1NGYa7foHAoedp5sqZjPuQ6KtpQgyT",
  "key33": "35nFBKz4zcGHC1U2pnwBCGZavxBXYBGGHatu9ZZ4L5RXCkcfsCaPNnDmoBkLEF5iFo6SH9osJ5f5VYbr81iPwmVJ",
  "key34": "4zPNL2L9HSJaea1jGRKszqHC2MBquLAsiVXSyboNw7aFCqb5GCQaRNNDj5d6YTSRAv2tU3KpL5tZ4ZFvgAQD1SCq",
  "key35": "5bAxBETBLkyA8VUGpPJcR2cT9PAXTjgzAFNMhiqHekxW2XQR6ocBwmdaNAQPPDpxtRBwbdELDyguJXidP7zMSBe7",
  "key36": "DyJ5UL6M9kMV8cZkQC91yLgVwQzucexGkxkpEoKT2b9YbrrrDyccG6mHx93Jrk261kJQDDFXhEA4upzPLWmGqYL",
  "key37": "4nYoFVAo2eVgPfQHFAQUsYkqEvHAtGSQ9sqyAKkKEm73de73B4jyzYYihGuYi3fPi1e32MwAtrnLtgW2k7SJMMJV",
  "key38": "51fCj3KweqN27cJrqbom6Q41BLcAZ2EkUghCwwGVWcpXMWzqDj6A8ResUxfKoVaBgzzQ1Kv6ZkYQzKWj5F8wJ3WG",
  "key39": "5JvFAzkx8oMwoPKrP95NS15pneSY7RFiFrkY1wMf8fANnG2Q5YHRWJZF4g9EymNtYg67L3zbKJD9crL1h1yUDHuV",
  "key40": "2Lvrg4b6EgwcYs4t34ras5Y324MM6eZ7i3j7kdio3dRvxsta1rBwbTa6CyKRpVjY1dXk3StiPbj8G9zk5wvyfyx4",
  "key41": "5cbyinPxVxdiCxAMs2CoGSanmXmputX3GNM4gm41mfp3h7kpvur85r8AfG1Yn2mj82EKXhbUmhS3HZBrWkSsZiKu",
  "key42": "3c9ToAAUBDebqw7ft7BQ3vGQu3Mm9SSTBRuH5VN1RZY1eXktX9rbAc1HkSGFswXXRPTrSvsiwwva3rWGBi7sepBA",
  "key43": "4dCRVvQhviEJPvEdoWdc8LcBHazNMauFMtBWo4vtZ5zwx2ris6osbTDPGdYvfKoF5pq8R13H57ft1EASLjcYBZDa",
  "key44": "V3RZFuZBaRyVgZdWQmCQrB1Nit7H1zpN1txFsrWLe9tqfEaxMixKXFPDGvMos9KpUG8HqKkTifyCiaHte5UNvFi",
  "key45": "5oWNCHpU5hCiS3AzELRsmARh6SdUKGoueqRxBAECh1PRg6yg6qe4dJvGGoaqaWGZwCfyAjVer2G7ht7kp47oGVDD",
  "key46": "5MDUrY7y3DbPuPJtATuQxngfuCbdzNVGNP81Vv8jQMzBbgGsnw41VntDP3yAvffaMksCarEWmanHq7h8Dm6Dfyod",
  "key47": "2d1BKQDz2PEHJcNZcJe8pTWhAWSSZvD1a4ZBWddM5iyZnAfJ6HgLTRKu4nE9gvUL3UgdvUcPZZ8LRZb5DGNLf3Mb"
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
