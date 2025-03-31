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
    "ft5B4zw33YeyUEaVEguR5EHp67BWwamGujexTTjoULFidN5123KS3vFptDM7WGJtK5NfVYKJPoiEHqm9p7afRhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQiuNgwrXf63ngnckBes5E2NhDE34XtJDRUv8YB3W4esehUSfyksmap2GW1mwT57EJt3dUs7ZyvDo4EwUoWgQbu",
  "key1": "6J8j4cMxbw3VBcqbWwvxzkxEqzzGUJTRAomUhNkQ5PxoTTmqcLyWnP3wMGKsVdXxahVv2J1ASg5yrnvbrMufHxv",
  "key2": "YLwKhHzZdF2SVEjbFTQ8n8Dti7oYrKYGDBcZdSrmTfeCYXpgFk1RSPhHxkza2rXW54UHENfxa8jPTgF4j1L12m1",
  "key3": "3feiuMJJyU7VLmiSHJ38nQg8fuQaTMcN5ZqSLgQYrjtguTYpAdJdN7aobDNo6a4xmVfCUrQdzWf87VieZbgLYkYX",
  "key4": "3Wckc8SXFv8UkM5hxv5PUPsEeVY7zVkgdEbVoyYRxyfB1hWcPss1m9Trk1f1DbX7SUuhHi6NnqNk5YUT4kbKD7Tt",
  "key5": "5fE4iQ7mtGWLfZ56zuE6sBRd2ZapEmD6MnMsKLZVdhjPk6dDQ6sokUSjEcQmPxCNrG6AwJAU4AWyYoxv85gEdogp",
  "key6": "339TQHP4MwLeeA23C8kpWGyEqwmG71t5QrVjed4KsdeUqbKbNXX56Vcu1nqApohnRubZa7GRP3Wmwb7dTkUjLhrk",
  "key7": "2yQqDZsccGKeKv7473WbMcNoucbpKTMgfihfAbvUEuupCSpgVwyExeNqBRycu6YzuJ17tvNAoTgjFYqrgrnwGosC",
  "key8": "4dxuRpk7pYkZQg1tm7iQunZHykrFDHTpPfxqmGigKa6vcWbEkwktV4pgaYsQ2pceC2zvpw43FHChUvw8uWQLBfjg",
  "key9": "3jQPZheKsQZd1ReUBi5YBxEiZ5pjvWDrTh7WPSz1Qe9FXGTnSFYZgUksAtpuxvhXB76VNmGXx4DmhvNdW2SsSPeM",
  "key10": "2QARMieaeCY7SgyeepnJSo8SaXuABgS6E2TviVStJmVR6RnC6vxc1eE41ha6e9MhfW7faCf2sUVs6DjeCMVv4LcN",
  "key11": "2bnRDGGouxMNbjdafPqL9hZn8HQ3EJ7UwPv9bj9YHY1FasfC14nebB4iAbeevLfKnG3SeWGwVneAWJzRg8usN4or",
  "key12": "3dTpehfuriPNf8fRwxwMUZBn1DjCZdHHAFn9sRRrzvhyNd1hYPH5uLU13t9tAKTqEgfTHzt2YQTdZLZzdxknf9Ne",
  "key13": "2f2r98Tq5a5KNWbfKL6wU3J5RLGwqxSR3XUP9uUK6FbgMfLL4wmhxggasNVarMjYyMjJHKw3xkmAzUEvuHUP1SUV",
  "key14": "Pi5grbEM6py9RSzoE8ed2XBBKNjxD6Zd2BamToUGCDZjudd6aLbQkbNE8QY7DB7z4KD3gYd6yaQyGtYasNXdird",
  "key15": "36Abwsc75gH17tpEUWCqeiHrgnmikYiysZr8oED4HbVKe5booecwpH79UegWEHJQyqN1bFEjyR5oTkgK8RAuaQTJ",
  "key16": "3wnUPZNwdREXgH3qYKghNDkfAVStfikTfF3eEBurSMtXHWnNQHwQjp39ePywuDiDZhGnEmHhxs7Hqe88EGVXPFBJ",
  "key17": "3bpfm4sDZQ63BLHSYvekHAop8vFCr53zWpQyeXQFgcSXEhq4igXAsfWibgD2KbsdhMRJeUvioPmbS4fLuXvELtW7",
  "key18": "y3Zq91qGvbJFq6S5BwwU6ahWTAjE1ibbonqajnpaedh3VeTDipBaN7pEH5K2tLLs8usTCQ6fKXQh9rZYCibx2Jm",
  "key19": "qekDdZFTLxATgCAK2HAW7pWXsmoEH9RjEwPwCUpjb5UFakieiJWTYmB2trhCdX8YvaXV3wVQ76t5AR1wsMzEoHX",
  "key20": "28Bms2buCTnqGAvym42yxgSXyfxQtAUwwfTfKLNBRKLrPnJiBmojy4mxiQSWmKqYG4J9gSB48BVygMDU8t5RNPzS",
  "key21": "2G8gJVWe23FRruvu3HKGVEgwEFAbwJdScyqcXsPTnmvV8ggjQ1X9hQG4gvGTnR7evFUDdMF85QUt5Z2kyaojLoyp",
  "key22": "4zC21jADZeemSYSB9uSCRwwt6yCxkwH57XQguSGg1nxsHuHmDfY2DkuFKgDMS4WHYrqGeakUTbnqvL8t1vBndCDW",
  "key23": "5SijfKFxqTxpdEG9RX72gQsZVaBuCE5W3ov5pRaVpTRgv7jznSA92YAdf1BB29t9owNAntBwMwHdUzQYxJvQiuBC",
  "key24": "3uSSz6RSQDJRHjJsLcgFX2baFcZWAuQbzsmq8VzGPHEjMPF4uxZp9ihjW9hJaAgF777i4qnddttoWBNN9njbQCip",
  "key25": "3vRVGwy5aP3G9y2tWQz77hdvkwBvtyh4YSb2zmjzBcBPLMDDZRVq9UA8rBuDTiquc85A88F7jvbNrjQJmHVLmqex",
  "key26": "39eTfT3k1MEzRWQNZ475QVBZKioU513mnWWSZ7m5VjtT2PUf2goUFbyeVUX4FDbVANkGq3zpDGUCGix35TsHMLzS",
  "key27": "81FxaR4CD8q5DDFm2vrewkkxhV2vcBdfAd7aW2mdHj4U4zy5gHnV3BzoiBu4PDgRvJmZKnEC7GJvzMX7Yrjfj6J",
  "key28": "58uuQ9SHbA9DZvE7HDC3mopXXtrbyj6rWaw8UYWgv8sfE1CwmcggqrnU9MuGa3ikwGgXM2KLqZxzN8ibhJiMtd17",
  "key29": "2hhKLai4QBct8kiKRefZ1aw9TqHJaCyht9B3VRgh5QNEANydCPALcbkq3QZyUUbygtbRrQXEKBWi5ANjYSwbMBMT",
  "key30": "3MA18hvJnqvpAYXQPoYPjJpZZGTovRq3jZTUrMkNEEDcdtrM7MAZ1AhQWDszpRgTg4kcM1sY4BBn7U5prQ6uaMBV",
  "key31": "4vZBzgxX2oyNokszDCVq6NfdKm8Wf3QxkZeFHhGfqAEMqPk7rhSZVWXvB6SQGMd1sq3fTFFn1krvjCGTWoQ1F3FF",
  "key32": "xSETLJTiaJRjwcDbBuphvBvuWHFrbsLCMVkYWGmhXqwk8yD6odeQcn4dZyj3VgVg9Mxrp4WB4joH6PM7BKN522X",
  "key33": "8CC8N666HhbPEDLwDAwbkoGSjVFBxo9WKY6EGuUyZvJYgAkjjLgpNMnNqSVcncoMLLtfxPoq2Hug7YxcCUDQSaS",
  "key34": "jVxaj6RrNcRzWzmz2DGhrZg9ZL8WzZm8zdLN67cd9ucFCSWg4PATpBPDa5cgy9wWC79hHM6XaiuCKQxBRhM4CX6",
  "key35": "5VU7nqTvPQWcC6yDmfKD6k2JsyPZzw45bHGeA2ZviC47QQXZdaKRd1p4NBWF8hnLb1WFRHBc1Y2MA6b8FQm6fbkX",
  "key36": "48xHsAa5wQPikz7yptBGH18i7gGf2tf6KYUoi6wnjD7obYNt9UqufiErSUZ6mgssMa9ikBi3NCu1RB2oGauc73HH",
  "key37": "5kUs9Pk73wRiXq8d1qUTRnXXqB7Gimy1EtmimxC2K1J8w9mX7aeyYbaeFkUBLeTKkSm575Yys9HK89zQXHPqeXnv",
  "key38": "3qpQDmvnXRtzobCVZrXV1adW6QrP9we7wQwuLvtTuF38ghsh5EjqPHMBtFnJWEQJx9P1inEdQrdyZGqqrv7iwnUq",
  "key39": "5F6aUNvCoA4z6rhSNgqU4PJSw2bDK2eHY2cv4K8LAxKbDEpsY2ggf86V2vrDJFowqEqXU5WV1fsRKd5KBGBmHEfv",
  "key40": "4QeZkeNWe3wiNqWxdtGoRdnfJYwxB4LjB8nJ772i3aQ7MCtDz1M17spahFdRBDeVU7rNSvhDUu1dbCLLNeWL8tLH",
  "key41": "5FAP5zAwHsu7UFDFtPxFv6LXBUK3MJuA2VhSPyBN9a1TU6TLdFoTJk6VZosC2JfEnKbCUTnSwVidCUVjMLDbZkhP",
  "key42": "5UwHDrxhTde9btbkyf6DzABPknE7XcRpbfXjJdnanHo8vZ9b6Mkq8HMpwrb4TKubjE5C4oLPF18bpkvXcvFLEdja",
  "key43": "3woEFP5MWcb2djLCgTBQkriEHtFXynF8xz1UeV68q5kEs3qZGtidqpFKVg1Xz1daSfFtLMcoQgFfqArtPE8KQLwK",
  "key44": "4J1Y2tQduA28eUYTuGnVWGKTGkhxmH1d4SpHzMp29m4ngVxU5TgDJ5niL4RbJL9P3UJbReoLXryWTHJE8xaCGrXL",
  "key45": "52uKuykxzY6gAU7ZA75T8xfyvbJnnQ7B3FXarjRRuTSiSbNABvxaxuCwQZnRcDXVxKDvNTvu8pC2qaMNQgh8gDu8"
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
