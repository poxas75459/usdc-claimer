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
    "gVBmjqpr89Ca2oerB6NahMB2P1rTZQj8TfLao8ENcSC2tWfArw3JNaQatdcdHtYY3i54yZBaWEz6nS6zza6QLHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHzaa42PhPdcTbPPAsju1qwkCox4rtoeCtp2LYefdkUEji2fcvrjfWTUoNVjC2UsMpP5mtrv2Urhti1j2V11zSt",
  "key1": "4CS4j1nphXWHndhHFkKTAjbDApqy1opjiGQnDyBh9ePVoLAb4FgfGWjTVeYdaVdcKcrsZoonrezSGWxqhW97WW8Q",
  "key2": "4BmGwGp6DRbNt2LAbqKt3quP62oHAfrZ5QeQTs7wDYEdiWjHiiCxGTmk5uBaGd6CB65K2W9JeQ7zDo8hJCdXwexr",
  "key3": "3g9HBpB5bipJgmEbCvduYsbZPkTn4fKsVLof8C37gGxuKeZhivsuxZo9BZFymsmg39r8fbDry2d62e5WYKCs2AzX",
  "key4": "5SCa9SX6PAdt4qCegzFV413CWh3STwMYa4a9Ako9WqZdr5hxUrjXrcHxinqkwtnHcVo9WHAL9GFnXmUCjSYnvnvM",
  "key5": "8RERJzCggwN5qiQuvWJ9UfQvMiqukEJNRdERWWFJ5UuwQ5McExTLjACwg8E6LQCNJBAhDSYucWtDu6E96Uja686",
  "key6": "5GaE5CFhwDgAcaVwUi9Zdj4hwfabuMBCLnG3FJ5KtzFjcoaGDPHLcpGttCtZEdbSSCPnvFAvkuTjvJ8fiAh2xxNe",
  "key7": "3G8JVWWTNhsgz74Pv8wCwGQpKS6CTQLcAZZ9xmejw3gxtUKA4AnukwGY3KvBhK3YDNzHHb7q8mHEEn7XTydPoA4T",
  "key8": "qn6eTBGk7Wnx6v8WSoTEC32RwfBm7VF9F55D3rnrJNRmZxjiyynXqW7gGbCYyGiKGH2dcFVPZ5dzo1X16rVj2WX",
  "key9": "47srHbFA8KErZK4aHztvzrmXRt1HtDznoGk2DMJGd3Nx5Ytsdc4mouHPxEXMHvg4jrKGTmx7dpUsXUSSM7pDiFfs",
  "key10": "3KGTksCd2ehRrFPYSULeFJB1FX72TTZCEQtksEcHszUA9EsvhJcJoetRqtJB6Y3viHUEPKGE4Ni8vFzcPUQpWb8n",
  "key11": "24BJRNSgexmpv2oUeJ6mz7q1dVAYe68ercSuGgrqYeAtzkSvzw51HpwoYhJbaYmMwvPxqjpry14NicVrXLrJbdzR",
  "key12": "4xb5z4pevxvsd3our3BghcXspaKu3k5wKvETasaQDhXc1ckYgkYkVXkz5eqhxdzVhVYHTRH32kfZuqnmhobX9B8u",
  "key13": "36Gd8CNBEEP1cMU7rDqJdXFkxHZX18Gyt24gQRi44XvpC3HqWB26PzGw666T2ozHux4iax8DSzhPMpeJfxCskRdC",
  "key14": "37ZdDkLiTehTaYUDWGULtB9SvV5hdmNsy6EfXJnEqznvo9RW3zuH5zQvDanuwj9x5ec8KMDSgJoEkuwaceBiZGKf",
  "key15": "2cdVcGSNTXwD5bf8tQEj2meWwpVBCx3urc1nBLSaMzZhrcNeLrKGFV4fFo64zgGFrrvtzfobbfEhuhs9hp8U64yh",
  "key16": "3QgYh1k8so3SqWpKR2bt95s6RuVRCoMujqYzHKZay6Uuf9by5RmzseUWQyUXy1YJJEhNREFbzakc1gJJfsvykC44",
  "key17": "5T5oKehMjXXSdUVmdoxxDySh7yeJJJLTzNMHreqhZP4X6XD84Bm6LyLWsJAFZricGG5JgeHxLRmwsTuETLQSz8uS",
  "key18": "4ASXw58CV8Cp4ojatzMnxpvT2eyuTwtLnEycKywGSN8VZ3whrf849mza7Gvi72MkKZaTBHRgmKdG9BTnD6raASmp",
  "key19": "4y8AheuNuhXdRaKDg25DZwmoeLXvBZ2aJpaDtUCesKsVzpNSQSCM7nJRvCxn3VojNiygqw8roxbeBrjqURuaq7RP",
  "key20": "3vqN769XjyzPPdxHQuNsardQFydF3gxaD7EMqCGKuaumx3QkJozTAUqANNqh1zSY8cqUK8XPFHwaaVWC4w9drYG7",
  "key21": "4abMkZbCMR93zqCBLUL7qR1Ji8EWekWFEKyG2VDh5B3KoUNHSrEde1zwVnGgwogfheytF6Zxu5nP1DQTFPbiwDS3",
  "key22": "64rMAVHyfkhyxsNfYQVR2vmuCgECMEJbRtvys6H5RF8N2t63RtKAEbqchvUM6DS923Po4uinh93nVuw9hs2pSTYr",
  "key23": "3MjKg1ABPNdQdHEv3s1iZFHk5zUieZmFTe27Ajt2HJjhUqoGEJivqZHH4vo7Ks5VRwi3n5UMMHjoYfRTgNKmPczP",
  "key24": "3U6mrFkZb6KLpVpSn8CjjkuCitUXMkgfAoCxiuQ56tHG6hDPjzpqYC6YQmqzB9dFV3uGmr64XoWi59ZyuhKsovvq",
  "key25": "5BwspWjDmrrUJAke6iaWMtyHqeNCy57VmHGy3Drni1f1XfQyKDQ2NuQvYPDTwggw6Y9MVCP56DrHhGgi1Tj3sojh",
  "key26": "3xedXJHpweJ8obiwSUUiiAMJte6Bo7wASk72DaxN2ZUGAuxiDNQB2xBnFWK1RUD3a7aUbSaSjb5civL3HurHCfjz",
  "key27": "5i4FS7Sxxyr5hzH9Dp8aoDCDFMhRFdZyhRx16Xa9m7uWaSBkq4jBSiJrmLdM7Ys4CsMv3sz6UTNpdxr9N61QiKNs",
  "key28": "pRBDdqdK8Yj4xu13Gs3jFnVq2A6ssn3nyoVNZW7sSJtmGDAmW28qdzjeJwfWkuhMGGnexqttBZ1tv9XWPZXZETX",
  "key29": "2UYZDV7rQeGrDUrhvzgx533DrX4iJNwEKBQkE68MKmTfUTc2wismpUN6cDNEWos6U74WkXobF81Ew2fpQ9Xjw9VS",
  "key30": "4gr6arvQaBRtc6y2CR626Jbm5eomkt4XeKHTqFTsv5ko8WtQFRZfBW4LHU4t7uxVcc5U27D44KTfEqEVjGogTox7",
  "key31": "2oVkCnoEcWLXgX8EFwZqBL5hRHgSExKRmeMrN5eGQcYricYxmcfSTNV1tLD9UBKesT5pzD5mDshueB8vC2H4GboP",
  "key32": "1237gmtpY4EwPPdcxJ1udpPBqEof1aNRLhDtsCCU7duAdCye7giBXDe91akaZHrAXChS413PPEuGZaL9aT5DiLYq",
  "key33": "5YmmBiA7GYZcGyEmCYFExmDKt8LhMChom1CHsaDSfkCL6g6r4EEVaRasrA3UrZbzJN3BwaW5SkfXsiPeM6nSy6nP",
  "key34": "w7N6LXCp63XHi6NeFMeKpvUqxcyxR1vB6KEsVqDy3NFv4waRUHk6d7agR2cEqB7sRwvVMd1RZ3t45hM7rUoaEX1",
  "key35": "2EFPmMbkvBA8wWp2zHukp9wcLUVoQgUJhGvvPzqUZEmCh83DFnRnWgDeUWPESJ4CmZiXoobDHddL5qhTVUw5wpxc",
  "key36": "58eDABev8DcZkHpfjkoHNUnSt6XzWMAP4NgmyUU9x6ca79qri4zhno6QEmoiPiuFe6UnMowvbGxkmgtfCaHTqjN3",
  "key37": "5HPMe2K7fHx8RMP6myubh68GVosftnDuKmgTMwfGj3vcW4ozSjy6s2BM6y2W9UXZXnoj8ifN9h8z3MrvQ2Faocjz",
  "key38": "f5ktirsiGC6yozkaxWdcsqkBXMDkWDzGSt5kLioD8Kroa9fYrG65YpLqAVMVfUVYmbwGvw7A9xMn5VyPQja45Nc",
  "key39": "5Wtw5fEqMCKBcysia3w2ewFY6qVCUorzdw9y92HgYuaBFcw49XpiZurGAgufWE5UBif32p1DF6oNMJYrMBSFmk77",
  "key40": "TuxMKoCEAvK44PZDzDXHT5QY8ueHN4hZJ2AMdaLXvacmTXKQ9F9PPY3FSQhk4oizwMjXnfZ3nzLfS7gCv7vanaF"
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
