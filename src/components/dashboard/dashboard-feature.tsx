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
    "49idsFgfphF4noqmRq6SS5oNfUZ8qm61A2N4JQSCaUuSmkDwQMVHBDvKiLBkvFnNfYfJKVj4RXkqEHxs2errjDjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7iF1RAopNxtMpYsuT1kMKDnvm1kTrQ1oNj8LADVe4VT6LR3314xtLvCjc8CMxgaf7Nf1weERkUAzfMmnt352t9m",
  "key1": "5AiF9BcUG3pAwvY7DHnDNvwEybUtSvAnWgfcWeC8B8MmEjatQKWsooWhgwakB7xQxjrqxTgWWKMaCBnNorQcXvTp",
  "key2": "S2Yt5W7tQhkiwpp24wCU9mqVXgdjTSnFD1aMoRn85Sbjua7hhEfFpZoE9HCoARBgrLtqPTbpn4Fhegvsuajymrt",
  "key3": "4EP3UM2KvdVZDHAGH3faeVsxMjuyTyPheMwTTDtwqEXSKghBcWKFn7GbA5Mh6NVAQGYmQF8T12ZCDTQmyj6pte5Z",
  "key4": "5vrcqq74jBmY2SR1ctopAVP98JYKwdF6skHaTeYftNZnu8qmxZuKBYzpMcmQuJ3bSoFKgqEj2Xzy7UVtXzAPqWuj",
  "key5": "61xpsT1wBYc7B2SbedWBBCbLquMm8FxHpR782a19WoSahR9irwjNsrZmezmGHhUVa5XJKG5jbkG92bTTzyQXiQx6",
  "key6": "3xDYHnzyL4SprQzieTa6Tq5DXuD7NzMD1Av5rJZsaVAARyfMPttRDvcxVuteBn4rkt83EJnbULSZsvM1qXKxJ6Ag",
  "key7": "25y3ZCMu3tgWYTWKiJyLWYtQPkGBjsvFe7npNwAaCgWa9TxcbiPjQZAYRYigGmrV4MTrgZDs9NKLiWCxnjGVCm2T",
  "key8": "3CH85zSvzZsRoWADMGRAEuPMD7QUd2EzSGA4X5GJiAZf1jVZBzBFBKRtj3t9XG2PvCiKpauytCKGzPFuf3QbJR51",
  "key9": "2PQaxxesKcBPYKz43PYMy8xhMRsp8dDuQu1jNsMBogS9pLS4p3cJV6LGwrf96esca9dDkaHmMrtHdsnc673RWcMj",
  "key10": "Dp5HfRJYomJC3DnSG3qdapN5v94zhsmbUDTgjGzbHA61AmP4R9QHefC5cmDXw7zwCzWcaZ3cgra6nEe59n23wr8",
  "key11": "4G5JgmWwpMZhKnxW9RxkAvid56uHnt9RFgGYUD75fQfghbakRaVhMxsyogyZAtzSZLUbE1KEbhpXxHDS7d81Ftk7",
  "key12": "34THWokxFqXVvVmcLeT4BD52t4HxX5hqBHSuw4KNanqdDTrrWtFW6yLZn6Y7oQFide34pw4NSpMS2oWpThvoXDut",
  "key13": "5QEN8gFwzuF5FgTZRcf4PveU49LabWGzyNsRteBdYyZnuXK4Y61aXdTsucwQfRz7RoFFXe2ZaUebydmPQuFXChd1",
  "key14": "2bKxbXTkn4tgp476KfcfedESbjhsSQVNYLvoPY79jqzz66TQuRz1Y2hgzcEMWARf9EJUCkognrcCrH6uJ9PoewMp",
  "key15": "43DrUcNFhuuhbdMVzoM4Es4vzHKhSNmrpUPfYEwvHyink2AVckqNd5ia4HEbG9q5VTvcCdVbm1MTkp26JBKbRVmb",
  "key16": "22LBjaFtewXGUQ6xSt94fprTSJ2WTejDvcQFaB3wieDScbgAvWvX5j5XxVv5pqwpHBmFjbLjU15KtkfhrWz8tfrp",
  "key17": "3z8PUceTxT4brBgoLZkSMg5MCGi3Kp1YWpetdnB8FiTYFFwRrZmZyX3AASG8mR7h1aPuv8GApcoujoJt9HW66CT8",
  "key18": "61AV5NDZcHPE2ca9BbF8W68GJmo3ggkARKVUyAnjLJeQSDwoMw26wghGPWB7GYV5B5vY3Xe6sp96a1nQexGGhd59",
  "key19": "2BHuWMxanGxJaZKowH9gwP2TTPoEu5QMimBbN9gVR3PV4oKHRS8uvhZWP6aigQEFDjvSHdzGaX1TN6ZKyspRiFYb",
  "key20": "5agK9sH1QNNoKQTPGupfWCHTd6cVPGEZeW4cogo78jjUdjYJMU3YF7nAz6sEjY69Q8NqW3p9RsuM8oTe8sU3u2XE",
  "key21": "2bhN367VWkEhfcvXcbPxemmvemCjF1HQNoBqetWndiNvktAdRWJyNdGCaZA6NUEy8v2bJd9FCnUSg9ukeibXay7A",
  "key22": "5WTvSFVfFKy5apEGyrQVNv2P325hd1oSaX5GeiRKvzwt6Y2byPqu1sW2HkVguaZBviExxAqkD6vHwLQkY2STeqyD",
  "key23": "7z24xpvh1KHbDGXpBRdGcyhDsmY5gm3EBjJe25L6PGxrKgYkd19prfLoxkx21hxdUihfYe86cw9fWFt6RsCXySD",
  "key24": "4uX7DYcPPb6oJu2Mh1qj4brNwp5XwiuU1LomD9jDd6narEmZnf6ZCm9VRZSfShjYEEEzJrrgSAZdY66RQCquYhtz",
  "key25": "3ELMAS8HpmkaW6eQ7NY2hVFgKUrhh1pjRZdM63UbMNFbSsVgpWReEiUG7GDy1jEq7KutMorLWtPE6PTC7V3Yx12f",
  "key26": "4tDTwwKzzUfcjT21B6XAU9tDJBGTuZCDfxhwNc61QxGQVEzfTy9ieseAepDtqKdSa93xKEKsTEbpWPTjr6qteZoY",
  "key27": "4u2JuaLTNtJq8vH3RSWqbz4iz7XtTh4HQ5pntmbXuG9rg7KNn9soC1ThcucZ1YNrBf3wYn2BumTektiqRajYkkYz",
  "key28": "4PYnS26K87RfBGX3E8nkXJAjBxmMRuDSyEKCsY4FqqP3i2W7Rn9YHcP74RLAVsMHenZUhot5pdjvwbdKCVzhBpds",
  "key29": "GsdW8ne9x6E65ngWSredzniFxL4E9Ftag47t9J5zcjibyXCXUZpxWx2WUfNv8Tr32mLdgfbNTBrzHkQ9j7LGMS6",
  "key30": "3v7FxsfRfR2Ba1LhvuVyguZbsbbKz5W45d3wokRWbNxzxuu3Qe6B7YA8qWKLLKHDvfCxNQ1WZL4zwQLG49NfGDdd",
  "key31": "2n84RHGH2w4MLDYvToKufZyLarWXSrnvVfrBAvWeuB2KTDFHuTTPgD5DheFmsCSMTzxuAJZEG13oxPRQWv2bfLiN",
  "key32": "iKU8Pc22ifJQYAqVHsTxYi7b1qz7oxP8TugyoJWo3vRujH4Fomtjd7rx1Yx9UGEKrqXWZZ5mmuB9C6xqbEKBAAf",
  "key33": "2o4cdMB64nCFM2ah1noAJoDp2wec5Fa72jFuUKABTtUj1f1mXABKuKSkTcbUnici6occGZ59Rsbe5RzPnSHQF4ap",
  "key34": "9mqUJoiCSyiiBAfM3C8RYnt2CJsP9eDaropPeofJAG2DLP9JfmaGDggaNpriuVy7s8MzeDhyZmzAvTriWpsCfTW",
  "key35": "3ArZvjoohAyRaptwinpfcSkiatD9jaTgSwwfjxE7NVnaqhU4eF8kYNncEzTTxkV3KWSZkTSU2VGDwp1ftkPdVzjW",
  "key36": "MdH9uPhhjANJvtkxiyL5zxz43eQnfsbpQoxt6wDFtNdMokjDLg29Lm9cngf6Ffk2HVJmyEnK8nAo6F3hhf1bYNJ",
  "key37": "54Va4wZuZGHRBrcbTbKyRcBvxZ9Q9wgE5pYgAiFSQHzLsb3TMVwePmJxwgbhrGEan5vRJ5nEb7PPVc9iDgExJC4r",
  "key38": "iequ49ocg9aqjtc1yTiHNBt3MqssYYtEBpLNg1gfCVbm4H9gqwBmD6oNwiiQ1CLr9XH7ZuBir6wBviSN1Y7FM9d",
  "key39": "3B41xq7kcq7yzZAYyBJ3xddsQQtDLuj6q6qR9cA7WeLZ3qinjeYoSST9MZpWVhxnhCZNQS9jeTDN8TZcgkV3nB7Y",
  "key40": "2J7aNHQPfTaSzLToLvzHpG8W3zQDhhSP651xURShsBBqYXLRdqyYtjnxMTK937RzukSEsPK4X5XdkLBP5zbRzTSt",
  "key41": "35nbtSaB79tAzHQiuGAy4g4wQ2uaGoJwSCsSpYM2gwXdsgdYT7vRWG2DPXJd9vxi6Q4cFxRGiK3JbNFZfz2yp31a",
  "key42": "4yUy58tfHkD772qk1uLrUyPmb2zZPGxm1wRdj6Nh821okB6LaZzJ51FQLqVbxhVRAFC66neGgeQrnSp3pwyMMQyb",
  "key43": "NHRdJDaonqfGPMEC1bXKEskubtoXzHwCbVaAZtiheJR371TaPtcR3Q9rEuQSZF4GTN4Y8QUyToEUjCxW8SMBNWj",
  "key44": "4PsEWXaApyAyDFaMLeb79iAADPUCGB5thogcZSTmt98wkBRYc8eiDKBqnxC2CFzVRDExT3dhwB2wGMTJ35XzqjhT",
  "key45": "pYAN3BDxLXgw41tj7XraTMNc3YqfF4WVniw6riRTD4nAmusrpFGMW9EWFqPsJcj3ShRWaSZ1oUYDuUpyLmJXX6b",
  "key46": "5RVreLKjRL6d2E8E6gVMcUHxPgkRcXM1tiyQRqrrxjFQqQJ2HZaGBW3aBHmLW2KDScP1GsVwjiVsYHXa1qZNB4MX",
  "key47": "2FeKFRqbBKGSfHaJevAsZv8R2EEMzK1F99W7mueBnBjZtLpuBKRDeFT3M8VytzkznNZgmkhzPjhGfWmcTs3E4erb"
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
