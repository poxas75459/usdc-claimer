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
    "51A8P4S4XN8CMZhuFMrMW31K3g8QM4jXd7P9sTk9PfpmpGmjsLomomqAT3ik8Ge2ifkdpfLYVZKdASuxHTdwFXdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxnsNuzULUWP9fQSvw6ALESQSszPHGFELvVg2wzsxwoLFZW581pNzRiQJRUAM2U1Th2fZJhZm9S9WnHvxSXZ6Ea",
  "key1": "4ZZ9XDewR8L3uueCPHen84RBQKx8AeYTSK1KdAR3eeMfUF7v35qboHL1t9dRbUsmqFx34CWvEn9EyMZ9vzeQrmnF",
  "key2": "5sMosaH4i8yJfmmKbxKWdwRA8dY15TTT8WiG1Tr6U1xor6jWYYEPnF7yqkDeFratkSAzWFyj5ytPe4JFESTfzhjx",
  "key3": "5k1Lu1KFBoQnGGm2BmcTA1okKKdsSoRvY8xPMRBSgict6A9MM4rFZU8NYesBsAzGNkKaUVgzq3XqS6LbCa511Phq",
  "key4": "2KUQdc5ARCW4vYL9zfLJor5VBq2AvDbdUAcu8PjQdVrijsV1LMTC27Z88G2HyiQ4RhkSkDFvnaeqw83Fjd5x6yak",
  "key5": "4JCbe6CsojpAfNJsYs2Uper7gTWF36aDSnPQHBEJwr47Pka49sUbDZsDm4JWciZqJyTFTtc2qbFHM1PeNiMMzp73",
  "key6": "4jmZnvR3BMManGevcUoNVoCAYrtJgB6xqxMMKpuwAaTzXqr1N7GBJF784FxdH6UzV9i3Zn16ETMByjxZDSW3yxt4",
  "key7": "4ejy92N4oeUwNuizKPBw9azLxD1A46kLd2XZVYFzSAZ3SycbGQEZoWkXoMJL1Hd6uAuAhGLP73PeTCiRKJAoxsC4",
  "key8": "3KYoDoq9xNH94P8DUVeEXFUnUDDSnbRhEcrRAyrH9Z96grp4YkE2xenZiojDEPJGu9ZP43kcEYHpZGZQvGkfmx2q",
  "key9": "2HqVM1PPEmmrKYXRfvR4gVg3nbRm487S3noaBgSqoWVrh9aDheyB1sXeUk4KWJZMrHcjDP3uqudJehrpMMHQmuQX",
  "key10": "WE4ur6KVE2pj5Ds3XmTdcH1wyQG4ukojuWpbmq1YwcZbKBuP3TbA9H1zqBByxcFpyNKXApX5phffmmqc9R2zqX9",
  "key11": "5kjs3Pvg51xuQW5S8Y2j9E6Nc5nehmdZ2fqhp7u9eYRMZdo2wekGCyRqi4otJ1PDNqGv7hmscn7HdiNS6bhM8oun",
  "key12": "4ed3uRYN184tS1khtFwLetjRXfjvsGggx9fnXc3RTx6wsUocLfSp1eTqW4sxLyVinZVF9rtW4dj8gTPv8a86V178",
  "key13": "48Lk8XfxaNt6srND4X2JtqK7T1kZHyPDD5RiAXHCeWSGA3mLwHZ4aEAg5QrwHjF5pmR843nLMLWFJ4m7B8duebFe",
  "key14": "3UmkEKd9vQBrhbpdsxUysXtm9FUWL6gqAiQbprLLbMFaBwiGamiShdwyjNF5mshxksx5qNK3teEqfD6HkqvgYuyU",
  "key15": "4g9wP6c3mvEFsFZNJcCaa3f8cwbdqL2gDpmMWAxgQEHpbGZz3VUMPxVEBCsswsd1Y1eaQjtWwsxm1HSnn2SuYJVs",
  "key16": "4ERHsvxwWjWCy5qmyyr8RRkqxz3RvpgS4mvECZ87oREj2HVQBGDUFQGdviwuUUaUaJepsz74XHFPh32FLJYCZ351",
  "key17": "2hxa6phdoB67kFw7NKpxMq6HQXkQpCS8hHHk5kG6JrPe1q32N3GfvBD4JZcUKdJi4b76GypwWo6Ru3vJiRZLLyMZ",
  "key18": "4KnYybkVTJrioAZqXgosQ6LVoV6x1L4RkKmx2DT1wh4SamBoHoDsRtp1NsYjdF2DAQxA5Ksk925yghxRNyDEUYWR",
  "key19": "4i6dSdoE4KkaLh43vmnb5UwuHiYANMhSNmmaEpqcRARqjz8DYoPZbJs238q3uzwVWZBuw9ewY4nNBgYW2mbCmdSK",
  "key20": "5XXbh1h98haVv3Kqnod8Vbvb5WKWTQnzDFpAxZMVtk7zM1ng8qwzghARawP3Fhgd8UuUHGtfYxNQSoauAwcYqi6a",
  "key21": "385bXMVYYqsHmMMonDJfmozmafGFoP5tekoPbrxQckTzkDQ9saz4WEfFGBMciHqDAXLiZxrzkwX4CrfszjAEncEs",
  "key22": "5bHcSUWkN35reLCXiJLBX7uV1ZHQC6YGm3YaBnF3R459Tj4dnjhBoNKmbmcRbRRm2hr9stsJTy3J8z31E7DVNmCp",
  "key23": "2GfrM4cJf1fjf6sLy8cgumg3tg4QDJdFZnbHFABh9Zj8dqmmDT2yEAZ7vLNfS9TSybtRUnzQzYUVigQe7QqPppfh",
  "key24": "2E2go8ABhBSkrydcW6aU62cu18LFK9zcfXSjmC4offbZrXjxv48irUKV5Vub2XY5Qq5UVHuFLFeX6zofvJtQsh9J",
  "key25": "4UttHQTyYUUfHRgqzfhYbFRRSdeHJCFb6LNj9jCagR6VYDxDBBJWMB6g6sGBJeWtXuK62h7iZKWasvxTeeaum1YT",
  "key26": "2tvpLJ9yrWbexh9yyxhYaiKMNbV71xiQ6kCyukPBKLVhsgpkyZQ1BDszuk8KDo5sCNJUQ4AeNHKVYCDwRgYSaPo2",
  "key27": "3tuLtXsfEtbfgPJbaxsUvbnznezg1VABp4KG6fGw4hVpUzgfwQm7wSV9YgmayZo5GZWqmUfgVvghtXGxpiuWeRAx",
  "key28": "2i8AYHfKMK6mYCeG7YN38rfmy6aqDQySoWGtaNsFPUdcC3pVdxv61W9ncvJnybDyKd3nA2su7h7kBnxGMRBaVsNi",
  "key29": "4FPUYqpBbQ6X7MKNKa1tumk7fRHN1aEM1837Vk1PVVmfoSh6iPeneaTrPm1Ga7PniUPQb5BYfrXvaoT1rSnabYmC",
  "key30": "4o7AJx32aJc4bcbRe6JuKZ2qLKJw4Xzq6MQuHjAn5UKFScuhXw1nGYmU6BVhBSSA3c2E1ZrXjQPLp5sNXAqxF14y",
  "key31": "2FksJmEbCkNiD3sZafNWpNqgeuiRHVQzNdeC7qYFUU3bDAjSXB6mtmJVg8wAZEK5nLB82gyXFJ3fnCyFEmeLjBzk",
  "key32": "4L8KhpNrBpQceWPNn4Unm3S3aZd5JDy8nMJwKidUFFYBv52uToXXSAygEixFUMTLDpKnjWcjFnWCmomGwji8WsAw",
  "key33": "5ywvnU5Sf5EayFaeFFKqcUfBAfcZznf2r4Gv73Wm1BsjgEHrgKGDCBm8JusSA9AZUae1LE95wj912ZomJjDSDRzo",
  "key34": "54tRfH17ezHDe7g1bPLKs8DzT4kH4ji1BBmbcm2gzUQ9VwRQFJX9moZvgnvV7WPQeKXS6mrjokLvU8NpK3Z8mbJg",
  "key35": "ceAaFNrkLaiifNK6tzk7vJAsJ1bF3eBhCH4W3WhK1NMwNasrbRuxJGfaU9Q7T4Ps2tA3UD7bZZfqenRvBNSWMTZ",
  "key36": "2DmATeoJPgRBQLhpD7fuYfZhbdAyXFM7A1VWeAErx7Z2endLPuEYeXEVzn12w5DXVMXW3rPdBMyuftzAU5fp2JKA",
  "key37": "2nPfoFkM3Y9z5bfh8vibipib3ZtYAvvza3M9kU52BzCKC8GEgpVTJtPudY4g9uBJE7RXY44MS9BroNDHv7od5Qks",
  "key38": "3gUUjeZtCRgytj2XToNEymC9iimkTYGC4xakWoVGQeRU16ct6nXyxSDs5pYkLcF9UUwe7iS4btLn3W8Htf3Bpoz8",
  "key39": "dbmgKbpTd3Cy2VoAkdaZACooZmyq4BXxBXWgyquSHZiLK2ESPMVADrCdu49JmyuK3tk1swgYdTsRSwEewrZDrdv",
  "key40": "59Hgi4ZXrhAi9rXN8nc41UCUBBU8sGTW4cQpjaarZw1DgYsHPQ9K7PEAPYs2Ury2AeTuUgHyXNNGdTFu7QeLx4Hg",
  "key41": "3yAenZ2m68wYWVbPpRJmZ5U1YW5A5dVpaMXMyHu5k5ufwWG8LnU3RxcNuoLbhiBHfM94xjiKbqki9G4iokMktbs9",
  "key42": "QJRtB8QPcPhuy4cJHMvEM6Gtmw6TCuiymkzQrsrNMVCiz2FXB3shfYRGvBpB2JHL4YSeDbsfG1SMBC3xgdJXxLs",
  "key43": "5bP5hDSysZMgmDQfrZKgUw1zQPaezZ413oCqETiwhiBHp4Zyb9MouuNvZ4r6i1qvbxqUxg9y1CVqeERhnAXMw6oC",
  "key44": "4CZ4z2PPYSUdhsmZ9rTvrnRPRdBT6tuM6Toy5mkYpSLZVJ5rd11xbQtZoLMJ6nv3afGGrczrZDcrHgbVVcHdUvGr",
  "key45": "2szXwTeQYNbUXPmUpWP9f2Hd1roJmVcQoZvRPMRdYTZKf1TvQnXRjdGRLSY4n5XkvvGeVPa9ACGsh9sazZuWbRVf"
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
