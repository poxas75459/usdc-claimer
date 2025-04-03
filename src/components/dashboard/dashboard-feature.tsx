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
    "3t4Aj4gUnUqWS35CG8o95T1Nf7LrSh6WfrC35JkU1cRHjweanAJHV4v219z5dz4sRoBJTtWB6dyxxHMFN7pFWvuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRb2QBWKa3s1RjZPPo6qH4AGVjtsG8nvEYiwTXUqssRUe5wHaQLCSXMEbJATAW4pxzrC5T8fva1dECS3F582csw",
  "key1": "QiW39Ucak1S3PDYrqdiw9iDopv1UiL3ChmbPT59Up1GXjNvFRzT2bMUWmNSJRHJvFXTZNdsuBv1UFGFA4oaxEZs",
  "key2": "3VKSLEsuPHxQkonT8CU27PWShRiLnpWLcpyLUaJnyRnYvYLnCtTrXiBqjPNFossDtFpf1nwMsuSRWc4soKWMJsuL",
  "key3": "525PgXrrdeHWpyEZnr8PRRMQ7AzWcQu7ZGCngL4EdkipzausZpNTy7bqkcLp7PjfZJhH7TzYxCRmuJTZXRZUFp2j",
  "key4": "XkJbb8TdEs76KE1awHA96V8fHW9GU7hSox598NDVtx3QYwtS8EuRsaHLJSZRxJabU4Mu4YhLwxa7GMre8yroNHw",
  "key5": "371siM39XvMi2yEKGaGawjSFgAB84MRmarhoq3UwhFfGRtV4ZieJj36J9YUWw1Uh7UVCwBEfAKmmVEmeiZ6ksFK1",
  "key6": "3RM1kWAfrwCeA2H3Jpq8RLncBnEDrxiMxJ4VmMEvStmuZr3DPB4rahdqjRpmAa69N1sVJYvnhYaDyVJP8fJgTsP9",
  "key7": "2V6RtxQwYqoMCcanjegdy1uGS7H2oukqkPqcpwyAJhEdSCY7AQfMRmEerebgiG9mXEBiwjdtgkE8Hfj9hn5Vn3vQ",
  "key8": "3gvbMxvNMVcYFRcjKujK4NrdnwkcAm1YNyfrd3EBzLfMuFMTTm27r1vCqNM18K6fcJH54vLdDg7RgDT4t3RwytTM",
  "key9": "2ZBcM6TCXcyGCab5gGP4QjGugm56fcmENYBJwCGUNd5pFZU8Df8b66PiktmW3ykrd93X9GQK4D6XDGTvugLqs6RF",
  "key10": "4NwaKAJztMCXXQDKJucHkKVhWVAs1CfsdtiK3GBaEXCkqjeSD1pZphq1bmpm3x1iy1XnQ4zJqz1FA3KyPsGCiXpC",
  "key11": "57D9jMY2Dst4KseE7ejh4ADWiGik5eATAYjM7P6vkLUhdDZv372AWVAYFdTrVVARCrH9QEbZDRArLX35j2iF1GC7",
  "key12": "3zL1nF3XoU6oeDA3XHtCawWu5pnNL9WSHfKBzU98yS3y3DVjSG4HX6i15xYosRkffMmHEd1S2isNSoJFeTpp9AGN",
  "key13": "b1EVCFj4KcTsyBLFgPiYYUzCqmzKkPSC4phsrYb2bLaTxGEuPErRXWT7H69kH9GyLj9UaSMei7hAM6QQGh9UoeN",
  "key14": "4KPen7KUGW9R4ujFBYYWMboh2REpjiHzyWLebkbis31nbrtvtsbhuhbC7Fs7c7Cm3xtDdnEbSJ7EaYdcUgQdvuaQ",
  "key15": "59suLDFVdGK1Qa2F3c2dH78NjQiTdGHLo7h1EiaSzLzCvSkyqCT7pbrfjCbDvEn99dqRTJhYHT9Ym6ET8cT4XJSh",
  "key16": "umogVQVknSRhCP1vywK87XwWFUgJgQXt9sNbu4kBdxRPEULvGNnstcL44B4GgiiV9UApgu31MyigweqhV23KpCj",
  "key17": "27ScfJv2C4x5xLRbzd4bB78Z14tSgPQy2uV1MkNDn1dhV9PYqL5pk9xLaoE3CtKdfn4pPpAHzauQUm2kRmmX3nyL",
  "key18": "5N1rfMeCZNsnq8mKar8Mf4aAMKCdakqr3GEC8TN9Vr3RpXHCp5BmZwrka82HQBzvozES2ZRRDuW3SdvhhZf9P3zZ",
  "key19": "5mquCMMYwi4eV39kJDV7H6U9LtqRdpdHaXqJiAj3mRTmgXTRKVX1NbJ47M8grPXGUcqcPTzonWP5TL2dSVy6tfbX",
  "key20": "f2JhgksqZ1bVxq6BLWBMhQo3y9M5fgfCT7AuWvRYbdw1GsBnNB3c9m6Jhs1ZF4kXjwkaHBJksUFa9nE9ncP77kW",
  "key21": "331eFxd8XJLn25wazQDiqWpoTvwRCn65c3jmX9pbNooVQp6iQnswGZbGEiBCNTdyji18qiSmbjhNrA58yq3tUske",
  "key22": "5xNRmM5PHHoW1vJqidN8bnBaRuTKRLSBr9qddsChxNdW7s1x22PsWN3C1TuhfvBELdKNsjGMiKaZXgnS4GE7Rfd4",
  "key23": "2n7YwDf8hFUCA7j6cratHqKws4DEveMoz85ftFbcfbBiCvKhWwktHG9k4ZkyUGcihruMYEUPkWBGgi9yw46MG98w",
  "key24": "5UeywUh5f2e2YmTMv8zpHnvAkVY3z5DigBNqREEKKw2hgsMHgZUocKzrkuVnLcsjNfXyFeVGXk3nXCxbiWjcMDNo",
  "key25": "5Bq39GUEUmmFefSmpYTVZ5WcNReqrgTWyuVUyFuF3t9YdjQHdiQ6r6nQ9VJsn8RFU3v6c298Rbbyz5XDLtfRAWQR",
  "key26": "64Jw1NUCATq35LLHBjz5shZx553m3HxjU1NGK5sxM9kiYGYDTtJ57tBQoDS6mxyJNVymxN2L1vsLXnAHJ4UEFoje",
  "key27": "3WzGMzbr1wUNYCcUsTTZPgpMTegFNSykGFiaU3aR4WRfEQtgt7bHp1dy5WA1yLxCVkQ5aE4frd8AYvBahLweTDdh",
  "key28": "58aDTsUXXCVZMTgxELVw6KoWfsq2jEyR5W3aZN9FBBsmBN4LK5o6C9E1EK1JQHixiQKuqqgBP6MAhjoP7YRrpJNP",
  "key29": "23fmZH5Fop1dkMTor4MTAUgZWj89MEoQqn2qQSdt6rUxcS1BgdagSFtvpd952f4knk9Mcxe4wRms4RZnxL5QgJtd",
  "key30": "59jgC7z3dzV1yNS7rYtVWfbbYjoYLh1MFAwL5wzMQJ1EHNdkBsDHuAtL1aJM2Py2xpaA84iT3yTCmFF2vK11JxVG",
  "key31": "3mBdigRGo6wgMaHmEmiqiehGTKKYJUWcEBQUiPYw27cAg3AZkAiAHvfCGgG6NbGWAdgZMfPAgqRx8NPXRCDTsDYs",
  "key32": "4TtRNLP6ffWhe7BRMpWxNC1qnMTbJezaSzQcbQ98wb89St2E4U4PBgr6gf32tCHv5MXGXYBxG4hhG6pPTdveWpjR",
  "key33": "38ouNMR9x5Djmnk5dpvftKxMpp2Kk84UU1asAbd7ZaakGzzdYt5vnarTzoATK1s1mg8T8xS6Z3oJD3KiRqn1WwZR",
  "key34": "5Meb9KiSyKdtqfWT8J7mx9wKtEsAs2NYav5PGVCATjhFULYr5EkGSgXGqht3zdFsxnM46VERwPMhNmun3zYDK2z5",
  "key35": "2WybM21d7F11DpgAfqyxLXgdHaxoo8Moud6BuQq8XsuwEoYm77RpjDinovHXPE9emdykM74bEhAkQB7kQBWZoUxe",
  "key36": "gqx3WUjMPTYrZrP4YB9TVzEEaBWbZB9w1uHnw4vpfFeB81xUTGuPaTDAeoa7DjLomSf4n3kHSM64C9pqh3rkSTa",
  "key37": "52KJdypucAzbqm2iquocLS7GPGWkyxPuUZmchR55RgiFtWhYMtbTqm8difAWB49y7g9ryGujBYp8ybWZ118c91Bg",
  "key38": "4bSSs6Dd6mCiAhNriWERU86wudNYumaAABsuGDsJKW6M3SB9Wr72KbCfhZfncrUMEo74MoLQRnPrYH9KoFJFVJmb",
  "key39": "3vePvTEcGiu4MaNviwFBRtGiJBXXvGYGtEufBp1JNGrSR15djvcEXHnoN5qquY9mi9ovtEfSDeseYE9ocETuKLJY",
  "key40": "5dTNG1yZ7eyiSqJQwXh373tL6qNQ55N46PCcaS9wEJtYa2REoE8zU9xQnVqhCt84vwJe6YtegxeQFP8XF1hnc1Eq",
  "key41": "2LwL96AssovHMpJ5xWJ8Tf7t2fVjTT5rkMQENJZw7yBNowicFb7hnETYxvpgw13BixbEn12oXDF4dAh1cfNneLM5"
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
