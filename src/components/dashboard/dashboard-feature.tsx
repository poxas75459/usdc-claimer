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
    "5TMezaVcEAFhFHWuBh4h6mAVg4yqMK1ezfRt186gxC5A3vWdAw6A2aWCqhLHvXymaPzFZx7dANBE7zEQphKs56Bu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQFELJRdbdDm1f7XRg2zjBVvkHr2Zmb1KCKSjfXMYyCCSDfoFHy6Mah3GXBjp1gSakjoiCgUeaLezZP9rv8C58m",
  "key1": "2hNdCQjXsogEVxWz2wjkask7dsKea1p8wqhDcmsnjWQPTcEpLCEtzHY2kEpFaubNjLjJuP942HgTyXBmLkCaVTps",
  "key2": "4QWjW66pgLnpecmkQ7mQzsfqFvaTW1Fh8M4hP52r5CSEfuU9wqi436iFEQJefwMfxKwmVVXZRJA4Ra43Rq27DwS5",
  "key3": "58LVRxYwgTcpMw9AYuJYzdqcUvN7PjAE7fyHwRgr8mQcKupe6Kov3uDzCdg6D3spj9gUowieawEyH1yes66nWtqA",
  "key4": "2iqyLUVc8u1L1r5Xr1GHfGkaTSi7ndKDV4etc1bkmgyZcxe6HAB3nZvPSQFQfCTS5QcpA5PavPKRBbLyfMEiW3rq",
  "key5": "3Zwu3oUmjaxvP7muQpu27TnYoPhVU9pNWRMWUteYV4RQ2kM3JoDAAm8MFuHMTVfxFTfUwzrfi4UNNLGVY83QHsio",
  "key6": "3YqETeEMfppP33qvykxVtQrtvKcD2eSq5JnFeXahkCmnLdz6g3q5N847ip7Bjip1951Dmtb3E1ZRWua69x6r8g3e",
  "key7": "r2cG7J1GNe64RmmvmfavUrJNyr4YMafLdCGAVTkehEHhZTKoFFfuzK7b8nKMYvuuugvbwrP4rdYJasDBupd9YRA",
  "key8": "3RQen67ry3q8JvEUmHQNRoTWbR1D7SdjPThDCgwve55ALjCXNBViWTVFhuj9DMFqQyDLZMqnZGS8UKiNXTZ67gQZ",
  "key9": "2kCSqkkoY8damqjk9mZQGQohszxEwnmBqMyp1EazBJjKbK3bjR2gwDgd2RpBTTPNRNq2ep4to4RCeCyunheF87jD",
  "key10": "3fFmT1AU5GKkRbLgig1d4yAGmHjop97jL6Z84fMghHfEb9S3YTcRBecHkm6NKNXLzQ2WBXb9frwtj4DAQ3NVxyQ6",
  "key11": "5qjFZFGdL6ZgDN2j3AA1LGy4jzxajJBg2fky8AoYMnhLfPrwT8KhaR8h8zgSBVLpwN2tybk21J2JpywuCutuhdxh",
  "key12": "5YQVNsWbKZ6jhJgh86WquFRX9Rt3LkLH12JwKMfBg18mWkUjbtHFptxshcw2RURgaX28KHBi1hiosnqrxCN1EAyC",
  "key13": "3NeGbNiV8XpsuPfkyvedo1QovGchA22hBzFiRx91TcJkQehy77gCwHXEXmSMKSqofa5DV2ZGKVUiXcXf1bWd2dzc",
  "key14": "43DrR2KBxJNWNovDUNTn5kactHXFHwjSp6GjKh2XeKWi52zoRi1aiELHX9e16bMbpWN8j4AZbCGsEyLAD5xHsw3B",
  "key15": "P1XttMudQTrDdS2CEGjUo2UzDuEVTzuGoPy5UpJ3wgnF7posC2x3rFfLupfzCaBk6ZT1ViNMgXwMb5j8cY3cJ46",
  "key16": "3mXthFx56LNaQVy44WBwt6UWbzn8euQJcLQ7N5bhbUeiF5mxKZfVXRqz9Nzuft3saFLMmrncoceo2PcmeQ35grph",
  "key17": "4fMqzVSUpdm9qWg2Sw3H6jThbXA5FF1CVwqYJGyPu2XakE2YxDAZGZHYSf1pWHzGHJuknFQPNvhnxJUcdLonw5tX",
  "key18": "3va7E6GwYdnaQWstSU8jD5oJsraARNCpWCQTNjsySamPgC6pkNrrLyyjEojV216D55fqk1bfMVTRnSSXf9wyfHE4",
  "key19": "2f9iNFfuFJQRADyh1QaJkPpyezViyZEep2CJ1hftUw8fmsiBAYXvtunkgpvqGSLE8ka4A1VCYnro6sU2o6grK1HM",
  "key20": "24uXi5cPPYgo97SfRTmgXawYkf3vfLxrpkn4XSQSFiQsDmY6dBuixEPPpwYDFYuhonLAPAkJn3UxHzuf4uMi5CCP",
  "key21": "5YTvTtsfBNUABUpdko36vGEJmFoRguQUJN3g8JfkDPUFRS6vSuhKQRUyod33os4WoaPNYBCwerxHThc685vo1ePP",
  "key22": "4bxuEhNfWFwD3ucBmfEjrSA1D3YW8JNzbc4x7nG6NGmRAkVGt8NxXmUsaFj74WK1Y2QpJq8emHoEiLGVFU1HeLky",
  "key23": "tWTpkF4tP6cXUKWsBiCtkZgNGyeV1hm79S4NkugTD63iLfgtQoHmFVXSEQXGt74NMvLYxp4yZ7VYmK6RHkyWPFb",
  "key24": "2xMLzVLu9dasBwGsVeGAhbjbrZEHdL1oWuehHCe5y2UpjW25KPaqBpiyW7yMW7cWjvEnBEYdxdLyAt4v7XtFtDiV",
  "key25": "4vQKPQ6SmbanMHsmipvC7zLDuYQkM6xJoJnPcwCdN1iehzJUJVAyYuPstFRTeCtdka7K1HDxxSkVefASjuxTf2FA",
  "key26": "4VT1JpCdJWaU1BeWHNUNiF23xZGbEn8pnAxkWLEB5foB9zowwu4QmEEZUVQz4py2F8kaY3bGNaF8AJv73ScURV27",
  "key27": "qGYF3ufV5MsLT4AqpbU4NPyAEQsmhpcoYHSjJ5eDQqjiT8uYHvTRKck6F3vHbKmG3VGhrZpd7bqk2SSdqwPLGKf",
  "key28": "4x3rzbrWcRssqAjhAMs117uKGwLyDPm4oCqQUQrxHptiavvJgyH12sKTDqvdkihToHRGzZXshdoPnVQHcqVmktE1",
  "key29": "5b6yuwNBdBrWsBhPtALv4JFfexKH6rP4aUKHCK1ghP5HxEGnNuJqdzbNLaFhhgocNTdRtgwuF12nynWCqEq9kWDB",
  "key30": "3iDU1mvGzrdCo6hvxepgZbZz3w2KR2vmNTq84oEt4emDPVk8wXGtiKPP4o8YDomPupxhu7SNmyKkzk4tUmmuJqBN",
  "key31": "5FhHo3Juqmdomb7YKGnWiM2pEtCBpbesULfeZWsrCQEFQFA28CMRN3jBCLf27b5Wi6xZEy2Fy6ESEkhC9SQbDcDB",
  "key32": "2aZ2Ch6qYdnuM4HE2ziVmCVGkipSfZwxv5V8vfYquHpTo1Ny1txyx4S6DsyCmEUJ1yD6NqfWps2ABTsNzJ1yepXm",
  "key33": "2aboGFL25L1pYbWCA99sDMz5GoeBjG6psWjuf5hJ1VXeSJdwJZdfarZcZpzjeJMb1zL3F36JXiTwzujjkJzHGmhf",
  "key34": "NcJzUQo14TgePz4N2hEBDrkJ6knKTHXy6p79uLUEiwRBtHXwsRtHpoBs3RYb77MS97NDaAg8e5C4B3ZDBEQRwX7",
  "key35": "3KJWzMAVkMC1TgmXxk1SNZHVLgykopGKLWFLMNu5ShCxBYnf1dZwrWvk63LWsY1AXN17dqa86DytUq6YfvssD1o5",
  "key36": "3oRdddYYzQ54spFAHHx8XF7rc9NzFJGSSw2tNLAuiuC5ybzUqMTgzfwPSkha7pgBRWyND1kKxyXpZCYowAoyY5tJ",
  "key37": "2Yr4nkdWbu3Pbr1FWmJT7tj81ULwDaYYT6ECu2YGgs2EyrJ2wBQe5PTt3SNLsBbKwQzriSfDoE4Hyss8YNN3ikJ6",
  "key38": "5x47yWqiH6fcfzqH2en95iKu4EpBh5VAzg2Gdm7fiqprFhm1A62baWNxNJbmL6cZ5hCjYmKQYdMViD98oju3YXWE",
  "key39": "3R68TQRK1zHrCgrDa7SD67qzv3sGieAUu39VeqNCKicSAkUe9SM6KC9pUVBGiQWSTqMUMDdT2zAqSP6HwUYYtd86",
  "key40": "63fL5oZqsfhUMHfTxL5mvCBpwHQ4XDD7pwAx64bWThQsv35jJZntZsuAjUb2wtYEgG7uFPbQKzg7xiv8EYXthYHL",
  "key41": "3keZpVhSvi8uCcu7w21j4iihCwyeCM2z54Ck6TVqJUQJVMBHXesq7Tb2jDR1NCwd6xmik97QWqLmZRhLKEydd1Rs",
  "key42": "2QqJif3uPexGw5543NnS5SQi7XWmy3j6SEbVqt5LeXeanv5p9NUwZoLbJrQfaehjgZgmiHKe9xvjZf9YR87bX8Sm",
  "key43": "43VXCwf3TAqHP7VoBsSKayn1ZgCj55ZDHxjwiNUGitdocbHQqvajb9nAVQh6EA9sce8or1X27iszDGGptNbHbFdk",
  "key44": "59NwYcJQ3idLMweg1vpUh1T1h132pmwMrGR2BDSbbpgmupj3YakC6LKyqedXMwir9Xg3sDTTXBzjiFAykAjLXBAD",
  "key45": "2q7TBVxWHC17eAEgfFkBDoZj9GQxVJYGcoEQZdpi9HeLJsSKfdqtyLUhqEdZ9D4wEWvhbAL43KhwaBvttqV2oUuW",
  "key46": "YCRT5W1w87Aoq76neECCix9jNkzjDBb2NHxXmgbJvFYkCjZtD59J7JXN8vShaYH1yfwHMTiXPjWwsWZaNhuDMaT",
  "key47": "64sV1KV4SvHLagBbfUxJkG24FFN3RHjsDozzSqihQyZJ1sVKvU3iqWg551Fney8a3ZkTMgVQ4iyY1whyxobu3oT7",
  "key48": "2zGtbuTHCzfRxDoK7q23PNwXtX8xmHKG2vU6uUByTPsBsXrG3xefv6q2cvLtxtVbBGQxhDwMuejJgEUoUQ7d7Geg"
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
