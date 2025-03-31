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
    "2F4VcZmaXbR9S7RzMgHgsSvFNy7pEiJ5SZK5j37ct8o6ySkYm4zaegAJg5srhuqAk9dy3W4kwR5DK6wqGG7sjfR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mhVBWXyri6PNiUmJs6dtuMdfiHt31tYbSZGJ6XgcWEGLRpz6hS9bXVXZbHydQXAVZ6yyQMi69dLtVZjsNLU7JjZ",
  "key1": "5NcU9T2Sy2PwHCHvNa4PvvxUHsb5cjapfZCE6L5UH2DmhGkavaiSgGvVcBsMkejPeRdLjncqjnX5frX3s38XY2Sm",
  "key2": "2jbZE7AsYZ52PbecF1Pek5Av2P2BwmCwTwRor67DScxjUHyzr8fCm5wieLaAgmxMLBrUFP4QXY3BU2KijFvjAb6V",
  "key3": "2dnyah4GTydM6SZnVqesyRnmwvw9KLayWic2ktfeY8veaBUp48GFvsyCo1TBoJqUnJqzc4Xi3ooV3bqh5iaqeyS3",
  "key4": "3x8eq9Uoqt1KLQr4ngioF8RSPBd7KjDCgCxP5d35sypc5szN3Jcb1XrcRFt3bu99X6Vj2Yn6PiHAHQ56Sunerd5J",
  "key5": "2UW4Fz76YeZE7V9GSFLsnpjrYb9EvqVTatuDfddP59P8bYg1e6bURenbNtpFGz3EsrUDiee4mr5EoKmF2qmrdC9y",
  "key6": "spHzGuWJvpjrZcZJezTZvNvpZMQG6esiHH3tt2mucfdhG8NGVbnnoyT7VRHXjn1ckn2vfZubuRADim7L8ADhjib",
  "key7": "5aDZ629BsbB2MGGniiDhiNjD1PrCFFofifTgmxPxo28TXWZ3XPzREHKSGtUQY6vnsuXyDsyLWHtWYzRZk3RuUr4P",
  "key8": "4gPWhtshUvFsM7Y1GoPZ2VhazxpVTRw6tVaZHUm8zgj2zY2JVCcvBxGwCEUTytjEsLqXxPEdQ2n1K1qWbxKaARMC",
  "key9": "1RKDHu92YJWwtVGQMtvGooRPAtx8wJ5Egp8WQgYVjKzfW43UdpNJQXoXUJSut8hM3sTQ8rzenznjXsefzkSbSeA",
  "key10": "z3kNs5D2mZwVuamHPoiwrTXiSfTqQnWQNAXMJBF5CqNGZwbU6rUijh6Un8wQ5PMSmeHkv9dXHhPFrMLsoTHXT6m",
  "key11": "3jt6n2AmBqMzupti5aiJaDKrY1hmf8Kiuhno4bJ9iPeiT4uwBMgnhCZcY9rMjW52EPv7uDHAzXiEyLcvhpQfsark",
  "key12": "5Y1KHwQPWCuGmSJBgFSBwEm1KW3DvSoCNkk1zaRvwpP5rfWBsGgjXT7r6SrHTWcYaQ6JMvLemXf7GyGbP5yj185c",
  "key13": "49KJXAvYpCC4G5WV2RSTAA4ynDo3GwsdtutR81LsQ4LHe4HQsSR4rkTZqxT13hD16ensdFDxE23dSbM1eP89GhUN",
  "key14": "5HkjBbLtnw8zfUQ8kAHm2eG9AGumTPKvsUErZwrjhSETtgXz9HnU1efNjkEgarZmtYoopj3QMZaAL21eMdBo4Rz",
  "key15": "3G1ZjyhVRim9tfpDHv4GD2EgUX86viGaD7rXvehTxPMHJzyiwcc8LxPu8XoHX81J4zGUJegn9wwggyhYtEtRmLV6",
  "key16": "2ykCd72JrLt8sgjSdzeq3qkJNriis81Er2kYBssxoUPQ6fsMGoFyYUAnqTRsLW2FfgBcLwtGaeKXf29t9fdmNKz6",
  "key17": "3gfKQCa8DLFgtwLbgFs1Bz8mXWZPJJLhHhwrpXRxfeJVRX3RyTfcfA8kAveuKRs3iCbGP1bpUheRhaNHSGMJd1uA",
  "key18": "59UNPZyVU46tAhe7QJN8LzPnSJ6ax1Yt78thrpUWNoRGibp774xXqVu9mjPtVdBZhWhZoHN38buRppuE11FdidKN",
  "key19": "4KsMtC5jN8GRkGW5HQAjB1ry9zhm9czoVc25rzYYKvjZJPGyS8J7SDRYAbmBPK6XuyPLBW5cbi4dBNC4VvpJR57N",
  "key20": "5TnoxF1r6fbSmref5exqsnhcBqUcvhvhVZmXfCm7UkE8S3j4ooWXbFAWHHSxzRTUuk96ZGLxGmsDsU6MHf33mP9j",
  "key21": "Ey2oJg9hbg2zh3yDKJYh7FsdG3nKShSpffJ5p7FJHzdScbyPk12o8TZykTMzfc59sFvJXfzd9wDj181KnWvpya3",
  "key22": "3qZSQfMhjRcwjFwwhJ6JJAkoCD3XsavnXB3QbBCReKV8MKTCTMfKYNPSNtN187kN3ENEoeQM81QYynYs32WTJH8s",
  "key23": "5CiB1uoooXC2zVbL7zY1BnzAT7Zb4CM9JCBLrLsphugWxKuWrhy8oC5eahgHgnhNwBAoTXnrsD4dLsxhXkxk6pjL",
  "key24": "66fTGb4aLJVVK4hK1uaZ5xHMA4fMRiSSFksuhXthdPKiDSoxttrDxkKDYaH5Uu5hpB5MSXBxanasKKsDiFeoptmu",
  "key25": "jL5kjCMjK7tw8kAjjM7UCic37jg5ZU9yxM1FXQuEWvhASVUfKFCBScahowvMt12EbNw6QiwqSqLFCDVYY1M28fj",
  "key26": "2mEbiBURg9zosSJHyEjFWmnXgvvMcTpAxwBeVYMhBGTKoetgvHz43jXQRecS2LTW7fGKZ8VPsogvC3F5fdbV3F4D",
  "key27": "5FE38yZJSPP131DzA1VU1hv44oxgyfTYwKYNA7z5uYEXCvXuaehSawLcaRhB3heBSEdzDQJavw7FWdXzGtFtrL6j",
  "key28": "375QZabMEUYiUY8o1RVLh8d554oAzWjmeJwv6XdhpUKTfUkvcEsZW7uSnDxPDXerBFsPHXgurtMsiZgTAmUMmkZX",
  "key29": "3xoZ8KpWCvffaJChrpUdtVnYgbLAyFFQtbymxER6r3MkKSBRJtJyXX4A92oiTnELshyRDubVd81CQkcdF5Mvrw9Q",
  "key30": "5Cz9iYkGwTMohktnH8PBdgXAGFKaHtCHJsj3oohrYP2aqjjneZQadpjAyn92WMAnjtfvoVYBQ3ryiZnXYLo4d3Gv",
  "key31": "5hReZF95HXgYutyLS1dPv6Zc63EyMeR9n9AUxKDFzXYBm9rWstpj5X6edHbR6V6UMN4cZpRqW44osnKpPJE7V86M",
  "key32": "4gUwDP2wD1zRJUsFmBBPbypu7ZbRmMiXY7TwQbxpNMuHBX3dNx4kNcU5SvKithGpHfWV4oopk6eXYWn3Fg8Bssya",
  "key33": "5LFPFcjQsRdR7DeiK5rGmepVyBxKHsXeokgPyx2NxzKYPfqeATqXkiYeMnBAFZU2MJikiR514d8mdG3bMNDNCdJ6",
  "key34": "3W65Bij1Hy8Sn17xhmZXitCPnupC8eTD6TbJYLyVXtJyiQUedsXpSzTSfeqj4eBkAJjYwAXdsX65uZTkFJ84hAFq",
  "key35": "2xiudGHmgBYdVv3UdTBMkP31hwDiGH8q1hV2NkK88difDzv9r9k1w1ZJPGirxVooRupEubCJDBkTL6VpULzyQVZo",
  "key36": "4AuBj4sMhDXYtUj83gAhApjZamcTYiaso252a9Mfk6GoMoFEFZVmQkkNvD588kvr9U8Sr5XfViM257GfeAWEMjZD",
  "key37": "5WGbjXPhApcvGZDY3PXxyivuqd5KRcFfskXRvwY8zqRu8oNY86r65KDucQPnSQsEy99bkS4NJYe9tD4CsXgdvW6f",
  "key38": "2gQmbE1w1BqUVNWfg2VCefpvkZD7q1q9rCttvt3YiUiMgPp7P9HsRT1AwKN2LVYaBQZkfj6cFXBnKhxFymcxNLzf",
  "key39": "oPguFsWyYjNz3i3MaFPzYpj1DAobn1Qh21wPVLYZHd6xpGnCiXsNbat77WWe8cd8t3yX4KgRXaTxVEErdYeV3fk",
  "key40": "675btcYZvu9kXooWfHJpLRmA4G5UTcdewFGPQuj99xQKHuBjCo6Er9Cimtn1C9mv6yiJhqMx3njseLuMUYXxswgV",
  "key41": "5FD6DMKLzeCoAReTkCjeBuwSqjnCTfEPnWTmvksPwqbMPB9XhYT3DnjP2RNn4tfF7ff1oKL28TCqzfJdp3QmmPug",
  "key42": "2bm9SBhcuoBkAFtdj1tAsXut72qBGADB1GDhMng8bxqfL1zAkMaWcZFURR7XoJBVDRuxBcRodjo446o15GQ5nV1P",
  "key43": "4NotZJLLD5By3aYbCLat9wvuib9WnWynp6qoKqjSWoqf22sXcadFe1odfV4iRUTRxkY3NDCNG1CViuw1SE8ZrRyD",
  "key44": "eiiZV61XWQpGN31zYpVjVBRgEpriTqaBr2hD85111NwfQyn56kRCnZbyYxbAuJTYXomoRpV8r9JDaaAYNqG2jAW",
  "key45": "4PYMd2iumfZE4rqe1FrBH4UzBkTHZPpMyhUWjcj4fdhiQgSg1UzSy1aKGZJGqkSfyx8LkY6wgkDGboEHhqnQcPYw",
  "key46": "3LTv8oVXnz6vqvVW8pC3k8VhaL5vhqovucdkkETde6A3nvVZZMwhfdxDWpTofPD7MLFVhvzw4Ro5JWScTgSWJc7F"
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
