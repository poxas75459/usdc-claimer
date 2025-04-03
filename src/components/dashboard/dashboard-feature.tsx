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
    "4SmToMcgkpt2x6VLPiM5SzZPHavYq5FBFjZaXoTPqgSt9wvoqvgbveHzTa7hztWFYwUA9FXa4BHac5J2vdGVCpZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cXBBDGf9Ng1qChHYPMBNR9HGnbidRVoewREwFzk7xAaidCKqBmzyqbd8kT9KRtDmcHv3PsVYtVvsS4dGF13unyd",
  "key1": "TqmtAhytzaPDjyVVWhpveo92XMcGrEkzEAnwTgZuyJL1AnZ4DWNSYsvVa76DBN1Un1mGBN2aF1HK6jSZJKQZiHt",
  "key2": "4L8ATmGq53uHQpMBxknLx1UQQcShjh7GTDx6Q4RN1eeTxxPCMQqWUahBHkYAxeTh4hpbEXRHFpgruEP8bUXnVTt3",
  "key3": "NfGrmcP7vpfuDA717chr4hFQt4TmvSb6xSiWPW4YYYxmwykRd7sHDro4S1G74QViGpwqrrjbU73PVA91cD4DzHE",
  "key4": "5tvndLCAfvW4hDtkMFdEgcxYcP9AuNnJpf532fhTobXbvYAaVcLF7HTNr7ZWCEG1peUt9Fmg1Z2gDHqcYAyM7Y86",
  "key5": "3tFq19AAy6ywAj9bmNJKmBT8PhZUmxZ5UKyZEBdQSqQFvyDCTXtmTytpCtvfr6R16w7XEmHgdhbeLMhb8ZoUGvtP",
  "key6": "5k6rx6UR6NL76uauDjrkc6ggFRPKJoh47TFLcSao7Zpw61xc9nrKemAXqCmcy7wEtPUYWYpQAyjcCFCk81o2wZtD",
  "key7": "2xiE5PvTNtMgCiHetPb3ZGibAYtvuVRR27zMQambvKTxZvryKeYCZ87ckBRvqCE4eq7cSh4BU5ki5VjUqW7arBLV",
  "key8": "4cwUqwibFtB6gTG3noQS7TZL71wNiWJ5F8Mg5XLznFbDWepY4LELqvq2iFPiLpxieUmR6Upm3w5c7yc5GFiM3mXe",
  "key9": "5R6KAnVDChEpjHn6k4JgkZ3EiwMvHQcY9zWKo78bvzzn27tgdUxAsrtJM17HmC1zL4rFA75hWF28LF4foFCXLE69",
  "key10": "31oewakm7bbAbLAwy72yHQaGnCDP3QGZ1eWvcXm5wpwhTRueC5of1xHY9d4ectqp7sj1QfRXdHfz7qEmZEzZKVX5",
  "key11": "4XcLonBGftrWZM2dx19xsVidqfv1f7LjEj3xuFn5SUcAgxeF58uutBq9oeoWyMWdSnULAPAcDjDUeLoU8FYHznGg",
  "key12": "4S3YaS4n28RVmgHaeVwYpowz7nyrwwBTgqckRKp273m4aei3wh35sk7ePR2wBUAQ4tdoF8DKAqNZPGwmcDBmbZRt",
  "key13": "5bbNBWpeCFWBcgzJ7BFwqARbYBVu9NzgNR57ZwA6HK1sHvhrzDhfTougi5NfPTXDvHmR9FmC6qgJRjGgj98LEMTg",
  "key14": "2Wzr946JwGznT9AFMWsvV3jbtuMRB9cv9aQEZcZmZFkKV4xVhzAczQFfSYBDLEiA5wE3pQAeQEoA98Srx5HFgSjp",
  "key15": "3Hn7c9UFCiqqdvpsaWhmYpZtvKohV2GMS8sJnSiG8NdGqUpobnQ7EBEL5yb7iT9zunMnMD4yQUnCJcnSA6zVqJpv",
  "key16": "2gqiMuVdkbQT9zs7oTpL1g3YXFnDXegDCT5joVZrn41LkGDa4VA374SEhvVxoe7wLPjABx3XvXDLpWGp5D4FKuy8",
  "key17": "werb1Kvzx6x516ctrURG8KknFLbKFco8nUSdGmAhE7ELzUVFtiMcUGKuVXZspSMQmWGpBZcmqmpr48Mrpi7W6Y2",
  "key18": "QL8qTci9xp5FFZT22F2zqcmGW72jJ1BzM4TQJs6T1tQ4jDq5XcCAcpnrT2uRoHJDdKuoevDiNyfvyKFvsqfLsKb",
  "key19": "5NYznW8gKA1QCe67V2YL1PM9im7PWyXurLLEhZFHQf63mutaEvuF6JnDTps2NgKTgBRgtCfGRf24uXqWHegfoUQ6",
  "key20": "FHbMrCJzdsqZJFuLcaeQSxhSS1NfvNfjEgxExqkmmLT9w2eUMY3KPTL4UdFsQWsAVBPTPCZV8Q9NSGU8WJKAQdh",
  "key21": "tosfxdXwriGMXHL1F9Fed8jvMWiyfhRUh5pvisCkC5Us6wiJ45Z9Hg3nxJweuWQeTF7SoyGZouWwYNqbGWXedmX",
  "key22": "4uPGVwihfBATmA8gocSvYm2jbmtd8c5ZY2VR93Grz2BcSUDsLu7svUvCXZHJbm62vwYC2uSUYVcs8Jyvj6c2PN31",
  "key23": "4u3bm2FQu8S8J7w9cJfYwcaKAmLuzrmbvH5Fy3CvmgNEMjsxbhzL2Ef1xBXqjSDeC4dSWZWbfhMkpKy97yxuC24E",
  "key24": "3Vf8Z9i2nU45ZroCt5gnj354LF38gyfNXQ27xosCe8ub7KtM52PSoq6JjiC8ydcCRXvrQF8feBz7SNdHYxt3F1ZB",
  "key25": "4NFVuJeLwqKiw2qJipfB8AMY5qfdv3ufrKrhPK8tF7f5KE39WkN9FtnxYGACxvpZW6LdmYrB6edUQjN38X8gGU6x",
  "key26": "2ukRZLEDqdZQ7s9Mp2oobGhMzEVB6QT7wQrpXzDLcpQK8mUXj983TNbdGF1h7f4gDnasB35QbWmbNPdevt6wM48c",
  "key27": "4pvQGZVwQ16JgqGvhzQKVoY4yGGes5pyw28ENjM9k4xkrnsES6emTiucUoyJMf54QsR4BKgRm346NBD6s2Cor14",
  "key28": "2NU97gV4NHYrhegptWnX5VwGEq2X4Y8rKdEz5z6MbV9uaoUzNTSZtC6zHXFycmfEAAJUYtNV6epEgMNm4od2iFPH",
  "key29": "jFaeYUuj6fQSNxTkMA2DGcCVvSfpnPXH1Bzi6KcKfGfZeonupuCVqUK64Guj25t5K7752FHfzSaKEfiJJXVBWyq",
  "key30": "4YkNXNaRBQ5rE4eBqk2AhPdtRSyVgCNJseBvnPsVHnjV3qXJcq4qjj66QNkphNpjViyA19F2Crhd9TzaphQmizgR",
  "key31": "4r9dUMVB2hxLhk5SETDp9fQFwsWP8FMmbWCd5Yc8XFYvLarYZd2g9QKmuBg6FuLGGS9Mx8fGmxoTDY4PMRuWncsz",
  "key32": "8i5WYBBEUUjCtJoJY4EUk7boW2muTMuw7Z8BRgb6jBC9bDNSkw4qecQBaB3jd5xkiJeN7tzQJjgGjfAFJdmoFov",
  "key33": "5RSmgJLuPvnNFKuqEf5aX5Cy9efKeDjsaMMbJiLAQQgie3NXnUNZHsEK5WH4kVDjNpJr3Q1jS7SxMW1xp4HdSePZ"
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
