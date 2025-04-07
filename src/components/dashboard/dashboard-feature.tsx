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
    "SttuwG2VaodTDNW4WTQigZbCxB9quTQHTKMhhRDCTMMZ1JaWZWdLu3rDZjVRaRRUGa1e2rhfsXQ3sCpPt9cqagf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZnMwpWiQmdXbysRzjs5Rk5MaoZXffsfRGLxjSvxgtCNWWxSoeyCHJcrVr3ZfhiaQn985gkR3DcFVUbwJGrU6kp",
  "key1": "222TuJHuaz6mwRHA3GAGgxhaUNRzBAvboNYrPakBczbyu1tsYeBgs926wj37XFp4fw5b9Ko3tDdu6xFvia4HUFY8",
  "key2": "4oBtJQAL5Lxe3RjXCE4dR1JMgnG6eZ9ZuxcQYsCv8QbBzqe1vqENwvQzd6ETKNo9ubAZRD2bVyPsm7U4R7Aong4W",
  "key3": "3BWNjZVMwg8prxN6KKRzUXNUSyrVsDjwEnvSANVC75vsAE4ngKHomuduEa89HBv1M4xz3abNVuLcaCjgcM2wYyKE",
  "key4": "5LQXzFHAo74TDKLPMxCsfXv9nuPcPkWupkdcypDwzaXSgVdFNR9PHax1MMGut2i748gtqGKpX7RVQYjXShmLnMZ2",
  "key5": "2JfqnPSi31yaFzesFAMFF1n3TrRuEeF5sH72eKeB2TAHdq34GULk2BahNoV5P4wnNtF5BNttUmUaFcXko15s6NSE",
  "key6": "T6r4mtWcAHdutnukykbuKAqAU4cEFjrRgCEnt7HamJ6Gxxfn1aXD9hWhN5GDcKBoFyapi8BooFjZRFetZ5cjUMp",
  "key7": "3dW8guPW37ncnJnjyws2cWhQ2UgbT419YR1sVzvPgmLPaANVS4QsMV4nAcL2KfGhUNx3g6nky5dacFbJVZfrvZNK",
  "key8": "2Dbdh6AZqQEntSzPFbd9d7gAkjkpb6hJLorSX4NUqj6tzCNK7ofbUYpoi3DyUbmpymkxXEFjLLJ9ScX1JtpnLvE4",
  "key9": "2NGVioYUX5wHqhAb5TgqQQayD5fdDYyLu6BXsBAik9TifLrxByULoJJpMocNVhb5PRyYXqFWPh1c3aqi8yXX3Gw9",
  "key10": "29EqkWd4RN5is8M5L96J3o96u7Bco7PhjiTtZAhz2dycucGHsx5Xp9Pz4jzJuGhCud7TYjUU8srTFt19wgrLUNPH",
  "key11": "41dwsUgT5cpncWyP9VaebKQn5agrXgpZSCxthHsgqn9A3SgtPSBu94y7nK2NFhSRB17iEgxknPXniicPGsyhhMd6",
  "key12": "3oirLEYAKggzooYf5HgYhNhsdNDnZrtVvt9dZDVyogKu9YMe5g1xyFrE2F7vo42Es3RkHoExrFR26xC2SmQGxamQ",
  "key13": "L1s2uiYLELEimX6aaB4koLJ2JLMQJaXZTkqnfv5X8TKsvxDPEeAkVesBLpXRTz5oxtFBy53fsZRiK9DG7cBkn3u",
  "key14": "3YEM1at2gfgMiEwNfJKF5pj5G1Thtj4ERVjRMtd4J5ddw6FcbYEZjH7efz9ECmtiTksnx9bivA3etzUoREPUwR6H",
  "key15": "3MX5ryUEjQk9UBpBGiC892LkVD2B2oYN54yBDZhgMHWWjk76KgeaPgYgJVtBYzRoki7RTZtZYprEn5eDcexvYmrq",
  "key16": "44houq5Kawb7koZZu9HohJcAcxFRhc97oSsSxVanEjqpETDZfTUV3daoC1uP3dDk72oGgm2U9T8UkNJ4SdegL7B2",
  "key17": "31nac8Xr4C6v4pa4j7dmerWCeaMFQXfQ9GQSh48n9HuwhP14zxM9nEMuQxyejCJmW5Y4qWBJ76ue3As6CjLVdtJ",
  "key18": "4sJUG9HYTzAndC11sotDxP7KFToP54qhU3VG5jq5CWXrBhP3Dx1wuPVpR1gvqo3XeEfMfg2Yf8LAE2Jpy9tAyU47",
  "key19": "ehaZTJgWSSViB6g99sk3ArKg4vcnYBjD2fYjTM18vRuzMggLonBcvkZ3yxF8mhJ4AKrPX5hxn6rq1FMudZM34b6",
  "key20": "21pjStN9Bfk2vVg3oYc8AKymVBK4Mbdoj19qvzRa1hNsobqKHG2ZdXAohNhXwQMQGEUEjhn7VevHDB6aEiFwDx6R",
  "key21": "3XkzZSD2deKDJtYnnwF89C8L7YBHR7Z83ebLJ3VU2ivcQed8agJgFiS1Lc4RQZUTzYzwVy8LVcNvHVCFk6FxyoYk",
  "key22": "2EnA9Ns5pCCqeuvvmigod4aSVdnFnGJdMKh6F1bJ7MyuKi6JhtKejsu3zJJznfkzfpydu2CxuNq4iDcCVMnRypxE",
  "key23": "5wDoc8AbZLSZnM9esyoQYTEyfoLH5mE5sMd2hnaG2u3NX8UtsRChYMiNMNSqoostERdf7gfJt1VhhoPHwDTL1jRu",
  "key24": "51VtibdPiU5A3ZzCEH5C8LZaEBdjzgoweT5zZxKXqJ6R5w1VKZ2enYDmUF9Rnt2zXH7TLGdGTVVfryd55vJpPwfT",
  "key25": "3kn59WZLi9MuesowdWPhve3tqZPVjbi6223hAPe9A5yQG4XQB5MDhx3EyFKJEdySerQSS2bSGMsXFo5RtWn1GXNj",
  "key26": "5kHYd5ATQ4m2oKuGbDjgPBmgKu43ptFfgQDoUvwG8732RGv9cVLwtvDUy1DJ6cX3448X981oLPpyYAxEBAo2ZQTp",
  "key27": "5N8dvxa5DL4UaN24eohkso3g2HoGftkDKSD2Z6jm84GynWvLN2Ws3WthhwbR6KN1raz1Xd52RfPkUVugj6mgLvJV",
  "key28": "2rYQEMbFfe11ZzgXNZ7YxyeHYL817huiHCVN8phgV7Umv6s15NZgtfHJhBSu6nZ3p4dQvqMLuPou1242kJQhy6f5",
  "key29": "4DsKKdDqMsDbmdVDxzuPPvi3fcdNZJjkgJRwaMqNDzjktWV14Gje2BfxJ2cKEMf84HuLmWUrBVQg7vrhWHpeUq2y",
  "key30": "5HxD8kXhondGeu7q814ePaUDdQft8iSCwwxTS9YLjeixu8Ukd9GhkkwuL5UfrCrQ5LfkhZrZG61W8MV2PySEHkUS",
  "key31": "GndESTSDzNSy5sEgE3hagEUyk1wS3GmEfFiDv4RuSDTxp12RtNdny4gFaLKtmFBkfHx7TnYw8wEt7dWFM1Zchrb",
  "key32": "31G6jsyf6aes6snKNJR1B8x2iTKvgpahcYjaEQHVqRq9WpbDLEYd4tF8RxsbcXZpje8d9h1CrViJ7tQQJPiCmJ5Y",
  "key33": "4nReqGiTTtqVb6t1CfKbCp8FjwPg5gVkrmGap5x71cR1fEhruGVjHzVG1e6UNHsyox2DfPxx8M1LudwE7PyKTDZx",
  "key34": "4CzcgaRLcrUdsKg3F5JLH7u3362XYeFn11is2h5FRpX3xbuERwu4BkWAK48A7hfBiaZF3KYPqUJQ4ounWruCsq21",
  "key35": "3G2kMBNL7bJJG8TG6QXuF8pPd5ML5S2nQGdWKqE3GwrKFXBqQbxpA4m5TN2c9THB36rQ7bA8iXzQxKdUjdobURXB",
  "key36": "23Qfdy1kT22K6FCi4R3K2ACsf2WKgcvCnnEso1kfXpGo9iHopjCFSMmeTMe5Z2e46VWxCqDCsgbgw94ijboY47Ev",
  "key37": "4GetJ6iGowbrZMFKcNL7yJPRvdw9NHo97attVFMAfagc8M2bdTUEw7ty4kpUZa2JkfsvFcaetY4WfVVysVeDjmgJ",
  "key38": "4fePArzxHbzJ4hVG3m1fyi56oQW9z4WbmKwJ9WrEUdFtyvymLV7hDXyBC8FxskDaF1oACnqMeJs819WpaAVqw6gH",
  "key39": "XxdeDLXLcD85EFM4ZSCz4ZQVf1nGV1HnqnCDxY3VTkD978CBffjYwAqmZRRDz5Jmme36Px57n1bXNWqcz5SCopE",
  "key40": "34rhCoeYBhyjmMrQ7R3SVCr7Lg3VtsmA7LdAVeXnQM4Ge57pyXfUx4DMDy2bBZsTCt1GKmPVtLXmPbgCjMMxWdTJ",
  "key41": "5VSRgXASFSpSt7LKCYAweaiV5NYpRoaqGi2cX3AyDtF258DibyVdmz6kFkNzfsPYR4pVdTciCHBkGHT5WFvKznjr",
  "key42": "4SeeXGUnc7bhvFAw29CwAeKtdPd8amf9SMQMevwaXYh1Kd58DKfPraN3hszogEVuoSbUNAf4KcC345gU69f7RMxp",
  "key43": "5snUwUSfYwm3jsq82Fd97DGms6GDBZPp8DcLw8kHKvP4ut5m962AokRJsVUe4mV1xAneB1z6pZUYDVtU1kLf852F",
  "key44": "3bvsYGEP8YABMuSdrcb6riGLpbn9UzgjXQA3Hxx2FTzAtcBh6wJ23aZzf2HfDmD5VZX7LKnsPCwFeoKEH1NXiiFd",
  "key45": "2NuxybgH1WDdBYXpE3y89KwquNXyjra6xKWX7arEoXxDhRGtn8ZrYhPSycidgFMkFqEX6Gu4y6McVKDDF6keJWkd",
  "key46": "4cPJqd3jeE7P7djusyjL3D5eoBm1E8oGyCkBWG3Ax73RZR6yXa1V6pGLc4CB28JKTngJN9Ren1ywG8dwcsQKtJGN",
  "key47": "4YfNmpKoFzbwZhqLjifq84XrJ5hPbjLR6qWcjdocbRutvwCecUH7nCnAcaQcCS15ChU4rzk98GsnXT5LQFvGpxEj",
  "key48": "25xNtEZAsnw9yXyhBmRSRswR6daTUNswYkoKpV5vdXXCweyFDfsfKQoWs29TMQz3oxSCkjYFAUcKMdhUdbW6A1Th",
  "key49": "mTb21WntH5NSNGnkaze7Pm2Ljbsq7hXzm3TYy5FUXcPtJjL7VSyHF52HQcVfxgEn1hp1Rbc5cFFob6SSQhfvy3x"
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
