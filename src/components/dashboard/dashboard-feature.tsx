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
    "4j8eJnbavgR9YcoJCWJem94udChczo6urajS9pPyQz7E8BhHtF45Nd1dAUKnNxA72kmC2sr41DnGvxJDb5NH5Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwJrGBTwM9Etc8wz9fHxEn2WPP4NzkcKJL6PkQyxw5WATVeY3QQ9FTfu7figwB27Kveee4r1229DLwJ9QR88ppA",
  "key1": "2wF3Shg9voFGcVBvUUukiKTkn1YuGWLUfm4hPwBdSEpzBUEd4RG682eWrDq1BTRVPBP5Nm3CHQrKet5UX7UjwLpW",
  "key2": "4Q3G3awSiK9aVvde7xuTAVhv5gS5XHCmjuuUkbCXrw9se749eotFFJunJj18jq3WpGaxnHGeh9T4gBWWd6Qa78vG",
  "key3": "4RZfS4DjHfQYcAbKr6HkBBsHqhzPizXVPbnRJUpKd14B73E4zUoAf8MzKrf3zYFjFuiXMwSQefXfYzS321eFbTVR",
  "key4": "49Xy7hsbAYPvPxtmW59gdRyzv8TkAL3tRhRtyf8afLs5p9hc1iXebPD6NwXtpYa4Tf6JAM1NgTWXbB2c4if2BUiF",
  "key5": "4iWU3xbRCZWcF8fuieqmNr8sFQ4eUTRi6J95PFkAA4fpZY4e7PnfdZpMj81fJSHHksYDDHMVHkpEZMTr7eLXDpsa",
  "key6": "QG1Naw7M1V6CeoJCtkbQr6inCAz8X1Vy5PBf2oZBFuppMaUYQMe4Gw2wd4KGPHmM97QJTsPVHqoA6p7CLpXSTam",
  "key7": "5kYpgvaWnvaLiWPNzQUmXpRtwpcqgwEAmFfUK6oENGsgurQesTm1U868d7MtkkRQkq2fHjX166Pv2Ax6GNEPwSzQ",
  "key8": "4QoJQBLvxGtRfakuwx3PxLh4LViaWfNGeEHNL17rYWdNvqixzUKT7WjpaiYXSbG6u1R7XuruzVgmsYNoRd8Dpa1N",
  "key9": "5hB9x6iQNdG5oa2Ddn9P4JpmuX2A6SRdve2msRVT2moktyfu1qWR9HzvjJmEVfnRc5L72u1cZHGhstrVxuHbnMbd",
  "key10": "4vjWsDDagLBvXMTddmRixFT6AEadStLLAT7eSRG4Zzk9mnmpvc6KLwYLGZ7a5xCCCfT1bKN6Qiqm3SLuusGaQjFM",
  "key11": "2qffVYMyjYazsCTUQr5B1WjzJ9Dx9hj2iGHbZ7bxPgXjtpopobPV4ZYEm75RWTGj7CVa2knPGDtWrptc3usj8frv",
  "key12": "5LBm2PRYhuA9g8ouL9LT3ceHgWYdqAyyxiH7BHFpkCnLGcA2F5oXBSAnL3y6tFS6zdz1kXAvyoCcbN6GQ77GLD3k",
  "key13": "4eicVZSZwapCy8wmkqur36abydYTz4y1mMFekB6hQ7mEf8bDj1o7xkkAjQgK1ywYeFn85V36TSwPxkRMww8LyZng",
  "key14": "M21HyC4Xf3EPWEAopvcZXFo3LDNnJ2Xm3rRZvCzYJLeQbWYtTB8dgPs1ibGRpaD1Tr8UGofmSx57iA2Q8Np1aCA",
  "key15": "2Wip8F5WVUZJXQgQC7tDnBTnhisbyopAvbMVLHuwvF2WmSiZGGKV5tBtff5zFSMBgaYxYkoGQo9zxETCWWf3K1sC",
  "key16": "E9dEwafbz5pGeZypdS9iwZfvLotj27s6WtfsMyZbg9dkK7itdxRkStsMxMPrLhpwyv3mmhFTDpTwRw4LoHd2taG",
  "key17": "5aVP2CeL2585nvYjjex9jmrJEBVB3WXPBGcQsK61JTg89FvCHWKtj5Vfu88w3KNTgGFwcH7hdxL5chVVqYgjd337",
  "key18": "64CsuefQX6ChbDGxPfPc2g2h7QzmXEnwcd8BGrWfzumJ51uRdEVDrDM9bgX9YYxuhizPEmrygSVey6zCBzdfbA7y",
  "key19": "5y4VnBPxhsiZZpCAVvv9n6QzrppVr31FQXES98mQdriGw88KssU2sWaYM9ZNAkpFAZoRCFEjouK2TVFTbpX1z3fp",
  "key20": "4aCsEvLVZRMiXiDiA4wwYkeEvAdtPBH1dEJmfQGdwFC2sPDfdDDn3n8UygxDu3W7gT78ykhkdTd4LJsGDHP3GxZu",
  "key21": "4zzanReTmpy9vY7JhPqvcJmSeuSx61AM8bwYyMevpY5vDzLVqtZLUprheT6GjS1tHGJAtqUBDmvnvTfLwhbKWvZF",
  "key22": "Fw6oSSABLncKGmn7K5eHeqRsPWLtsfRieBiPdKdQv7qoB1Gwg6b39pcfLhj641CUGe2x7XK2abHLCVe6BVhScYS",
  "key23": "3TjTHkwhVzYHRLq28XCtLAMHs1zsp2QdFW7JAtYygdQb2cYa8Nr8BLZ3n1K2Jhb3vZFewUPExH5R9eQRMUec6QX",
  "key24": "2CeUV6P5AwanzyNe8HrtdP9Hw7wfmaRvnPqTNn7KPKHJJcxMrGw8RJbWCe7jiEtgVdiZL4yNDHR2TYko9xzA6eq2",
  "key25": "3D2ngWC2UetvMW4bAzh5KwdxxALDXDQs9KCbH23Zjpiunnwzf4xQTnMVpQKNtqWmLfRuUvhzxb9aK2MkU3FK87Bh",
  "key26": "3xyrp9cWxvGgPJugkbJ9uCTkwgAKKbRGj42jyRZsKMbT3M4khy1B2QgfBLsSiRYNfxRVApDXKfjjbKQimk7o56Wr",
  "key27": "2q4F37dXvCxZeDz6EJUdayuhuTTTpZogF2pRN4x1i6PpHKRUYS93PraVFmT5YwfoWbB17fxAEHDD6WYpJN7qaSvx",
  "key28": "tqURGKboZ46V5qZnJv58bzxVxYavkDwdAZeYwbzcyorkRJVH4a9i6z3ggnmE29XUnJWS6JQPpJYBWE3sswS3NJV",
  "key29": "5pgZW5MqqsfK5svA5buKEq9eUAg7kUVdBbicu3Sgdmi3qxEmRo8vfkHX3Q4XEaDGUo3jogNpPUBDjvu2Gv845X77",
  "key30": "4AXU4aofYc7zEA7Q8EAsLGpizf4zES5RykYH2QHFvhT9mMUSmcYoqTivW9FApVUrAd6arLyVggecrTHyVcJeUgcG",
  "key31": "38Q6YK82Bros9MULYkPz7RR8TJKoezqV3BwDUXwtWH3eNKM9ZY66kK7J4A5MgABds8S4TQteAAEqwGiPzkQeqzpm",
  "key32": "3hmvMkovWyrbsAqAQFdLmZUVN5Srhd5Jt5hPGPkStg7cYeWvhvUkCp1fMUvHq1mjrHTom29V5RvATCvELRpd9KeF",
  "key33": "4p3DvJy2NhDj1po8cVvZWajFEFu5nHW9ChqZDo6u9qDkypcTJuJpCunCJasQywkP2akMa63YYPPmmbTZyY4FnBga",
  "key34": "4a61GjjdUEDXxn8hwrTsyBWNC12RTQtuD9WPnTw4yWuMWqKqxuMdYciFSeMFH19rZQZUr8DSwEkp7rjCrKXUdg1G",
  "key35": "4Cx8mx8Pm8f8LzG5Lg1YiRnUuXJScdCywvpfWHLKgBnVfZ2v4WydE3PGBtDtA93d3oyjUvYwHxWWTGUdSEzAwUue",
  "key36": "5f1fB47Kzfqq9uNynn3xEsAeHRqeW8xPfhfiZ7bNcWRdum2tkdwFwdAdnKcFVsRz2XL9hGZ19CFPw3zRTiVpQfnk",
  "key37": "482xYHJqetkVqh7FAZSrYDbDiZuio9VUiNjxGGw5W8EDEcSzi3CdNunx4QeesbwKSJYX2JrqnLoyUAgT5WKJrfDf",
  "key38": "46PcygEbBebYEo6zhNBh4dNDhYNzDnxYCmhHUQFCriTeLMUWKd9hKHRujNXBairu2kBQLs7wbnyEe2cdyD5v7UqN",
  "key39": "5AAeCtCtUFyQFFUg521g6G5X4spHXWWot1BXdqtdwThhpJhgBFhVKfHLibF3zKSdaay5PqLqUyLqfsgPyr1Hkhri",
  "key40": "4nQ56Gbw5uyCrC5W3G1UBTaiXKdWWEgUeMM7S3kRMf7RXZLwPtgsVGV64BGT7Dw5gfBctZJPsi3CCBj433VRTNbx",
  "key41": "2tvAUWpKah4gcBaXvwMarctb98jo9unojxjWepyJRs5nR7riaSXwx9t5vTZbhVQdi6XZVWExP7ywCzUgtU9upGJF",
  "key42": "3czD7PYQD5Uy1USreJfK5qJME6rzdYK3u7nwUefy1jPtYjivUpd5J24ZNoAfdBCgw9tht6gZRU8sSGBbHJ51ciym",
  "key43": "4nzAcFky5rJNWFLuPPoYuKmGd58AA3fBvCsDsEeMes9W7oEy3GoQ8nmduHos4gBKDsoGF76R4PUTAHHeRSinvdeq",
  "key44": "4JHKrT3vciGJTCx7UZoZih4y7vT5gHzAX5h9yyqUBQ3jsz4KquzWyVzE1dLyyWnw5oc1SLRAPxa9jpRSdwo9iqTc",
  "key45": "NkD9dmRS5bVfpoG8xmjPKEWXi96ZMP71wGENeMttDE1UuC2SuV8dsnfgkx3d1rshu2Dt3NQziprLyeRYDDphDVz",
  "key46": "5c7sJe6qBQ2QtCuGjkiutaHvqJXJUR6onjryNYSE9cVrbTsHeF9cPEbLZN8rshjRvau8e6Zw2gSRS2ftHE3BeaRc",
  "key47": "yhH3UMdBkFfnvMgVtwbEHx1L6dDRc5MEkAzJdtEprwCJiMqYZCndqLmjTTr8pATD7Bzu8v66sgXhUbyorxvdCMx",
  "key48": "25YoLXosMYVsc2gmKyqKcrSnjf9NWYGkogaA6f3ahKxxjjd4LYT35BmTJ4Srar6MmKUtQhjaRGS69Kf2Dj9RtnzP",
  "key49": "2PTYYAvEyQ56pyS7k4B5DkcYkVA9jXqbbnt4Z1WL1EVxk1gjBJNfysnSH86rPfw3RVNrKW545br3vr4zrHFJQwYz"
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
