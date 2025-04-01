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
    "5C6BzKJD3jYHjUHNSTr9WTB55a9H5h3cTE9tYofV3sBDEcHjd9P8t6uYKVxuntK5zzmB6pLoHvwhhpjy7TmnXSTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z6Yu9xohFPM5gkpz8XeDmL1Dvf9GP4cJxRS1qrdKpNHgPSqeQVQTxt8m2XH14NqktSDA1SPzhtarJRuDydt6SCQ",
  "key1": "2uEKSpBEFKA9eAuiHZAdddZpu3WZq4et5ALhBgFVwjahrdXe8YvkdhmmGZvsnnZ3q5VzxkdG7eeJfi5Ah7dMpU3k",
  "key2": "3oUsCBRrczgz5zrDEGdKzLG4vQ78cw2AGpgbuPyYRDnWPTrnpZptoVkDbxLzFvGdRALDFRve6ceRrqJPeF16pGVf",
  "key3": "4Q3ykpx54HMrRiPAJnbGTQsiwdEMWeCJogeynwtCxAf5JBtN1qgg7WGtvDuVx6FD3zAUJzU2VSZUYqoobiViUKs3",
  "key4": "2nv12ZK9WEgiVCTFmCTCJz6cBwXNEsXw5DwAXQtc6CGhrcjyMAiqCPM8nijMrtv6Qwhib5DYmgBqotvtxVp27CVb",
  "key5": "2UMEZm985T14kiQwy1X4WtgofBifwb8K3moknxVejo28yR5hgsHK4W48RDai7Q6Vs6yQVxvNzJpyq47bh7o1EHFS",
  "key6": "C8wizqmYdQhQVq7DCpxL94UFrhYN7PpiYWYdxorA3mAUpsya1kvf7ogSCYVPBchyH3sE4Rb64QZ23qDippkUiEM",
  "key7": "4EH72Beip2XEpwxdfKdwCeYLaKnazc1M6uZfmTTwEv7L7xYrZcmoGpyZYdYQMkgCuUpGoXgpFvamnwbvtEvE4Lp4",
  "key8": "5Cd7nJTDRyE4GFe2ypHsn6qgQfsciSZWBUW3siagMyuGykbzuKEbuCk6PrLMW6J1xwqUNLEfCvQCkSXeKmTBLPmY",
  "key9": "5wGndU58dZv6ZbQ7Eq5TPaNVxNVdtDvBjSFpV9iempkk6LfaahaoMpTetWN5wRjazNkwpSbUJfDmaWvFHxyDaxF6",
  "key10": "3gpxFFXbXRsbVxwyv9hkaq9JC6k4s8pjxdDfUwQLXns1JEx7vKdDqrzQ1w4EFhVur8drqCGvs5Nm3MxtGUYnjfX1",
  "key11": "4n3Lxn77xWEf8FHwHDeWnkzx7MRknGjsfnRjAFkzzYqhNLEvsJHbzEKiXtEr2qLiQQtNG42aYbpSFEARzgVuBKFB",
  "key12": "ebqGqCkqDkiYEdV83kXA6MJXefKTBxPZNSXDSgNuigm9j4QzijMjWHTSbNvC9jxSo6hTGHSG7KMB4odaULsd8ns",
  "key13": "5wLZy8pbos8kjsfnFk26rpDJRLUxV2C65rUtD2HRcbeTV6awLuPSigeo47gS5oiMN5vFP9AaE32NanGUQSXu1SMn",
  "key14": "65tevhwJWEdAibL3PXkKhBhyerd83cnFUmLtRuYsk4MjFqiLmt3MqPLMeBCyxZiymHNi5VKqV5TbsM3rcQutyJYP",
  "key15": "2vhK7FPrNSJd4tmgMSmdT2jgSnYt94FcH3LUfu5sYdxKuVqvJPQpEWYKcjn41EZ8S6u2MDxdddwKZ5WnhpFe2vkJ",
  "key16": "4ggx9SX84b7525t6LJbeKWHpKpH2kiYgb57qeysAKW9FC9dXrccKZYvwbrwVASAUFJcVkkfCWuu7t9jDy2Wo2Fn3",
  "key17": "3LfVkR225mSBpLBZt7XaUHBhAS9fGHqqqiXYWkYBTDsFpzhc7ynvHzgQZwi773UDbnSDzHBTwSv1hPxjCyhKpHyw",
  "key18": "tKYqe1V1adaznAMmeN3Bkq1zwStNCX5myxrMpfGMkn5WaAscyof4r6Qje8ePmUvU1p1arr3YFjR2hvWNgk9BJoY",
  "key19": "VuMQTdesgJQEbJKz32RiyShX6mxMuM7XhJxi3e29oXULG2HPp81V76WSiDm1dMHJ49VS3a9mAk4myDPVEfRdN8m",
  "key20": "8jf96sZUXC7QL91Vayqs81qZTBBfVyWo2bHKjnpGtGceYrZfsekfmnePAjKoJJ6E4AZnnao66Ge8ZhyRwdLz34f",
  "key21": "4zSS1NokZoMrznAb2tYP9X4E6CEz3LCcYmjgD3hG8CuwAakDGSvbUQa6tt9gr4tr9QTWPaSFwvHA29gHbXJjthXf",
  "key22": "2kzYf1vteAM9x7oXMSjS6wqXYJVummBJv7WfDQfKQ1PdGmybEHu42X3kQGYsdq7kGXEaTSaRBdLXZwqR2creGQca",
  "key23": "2RACYN6hThphgpaP7cVRnRBKZPzhwCAjR4R6bGz31UiDJ4t1oLqvyMDESWMwXfEQPd1pT8t42qU5j8dq2FzSACJo",
  "key24": "3RCF6oSjAbXgRsg8oR4CriSYAUEadapAzo5PVmCkRLfDioqFTWGGJFcyUHxPBgHYeNjxTR2uBMDP5JZptUuhwJjm",
  "key25": "2hRRxwyoWRS6mh7aQUvD8DkHvpr4N9D9vxgb7gf7HMXSBChWpPdJoPE8gU5XMH6GtRkMZujCtFETwUvvYsP86Lvx",
  "key26": "2LccPcSiXGdF2pNyKTc1DoKtyjY3Gsek3JDJZNANhxbQuEXbsJLG2Te3ZLvsmNSmpE1QeHD2CmzzhdzkmJyRSiPq",
  "key27": "4sTbhWapMyL3Gaey3aTDz8z21hLu7buKMpzevBuW84CMXTCpGJMxUErA14g11671VyXKj975eXWipVJk8AT4WyP1",
  "key28": "3smh2Bofmp1uriJrxddWgjztUM6Dtvmu6B6Xno5QyNd9efQ12TxtQenU3k4CAY67HygskpVo2mGRop9yY3tWeYpn",
  "key29": "5c9R5MCSiuW5QCGqmbR5QrKdAZy9ZMUm2ZtMNShyydGdnEienACibAHE7iUSsCwvo7kMM6EJBafUDuwgFH6kEe7R",
  "key30": "2cnFgBDuqWQcAGn6v3dtit4cJYWZZJYZE4D3et33VK5S4zLPtZoQ26WJRYzsA3uVoUjo8WYi7y67SN2ykxRLT7NX",
  "key31": "xc768Ne6dCAcvc23Mu4hKX9kLCB4XLkJj6z9SibYmFfA232k5PHB4bww19XA3nc9x4iabF9Xkv9nFCF1CeeKoSR",
  "key32": "4UJd2eMmsD5fxT7TKKiXBTRCq1UAypMJbB4FS5xCByunkpfVwdFoJSbqVmQRfQFp15yEn89HxGGjiw7PZYKCNSej",
  "key33": "RPYxd69DbJeDUfazk7ibgvjuGBPJiTgP6FRa3naLexVaeutcmSdcoHB1roTwniLCsZ9wujhditvCBWRrA6eHzbE",
  "key34": "4unuL6x7PnZ71rjongYm7Xg9TnZZsfvEFtN2kgL6RwnS2HmB1iDQmReUVwrax9cP6EqnMXDy4BtiseG9YWwRQ4ng",
  "key35": "3NXp9rMM9stwFinT2TtZaHK2t9qh6QwdtERhgbx2Xaet3p7mncGYAsJK6db4a1gxCqpovxnF6wcyQ4RaL3k9ffag",
  "key36": "4BX89ECDxKwafLYgpRJUQhbicr9XbsJD7WWAWiBmU7iSAMotUkGsyEFiYyddbwDoEaUknmmL7FCm8yDuokgzK11H",
  "key37": "R4azTcX3btSiiRXqXGtog1SdXgRmw5XU57fGbzmNhBg8A6UZQbXCtRnTU953WXTWKgWz7E8WDF443MHazticRqm",
  "key38": "63Ssd5Py1gWJXVQ8Fob4MTQ1RsbCrM7PKkgG9kKDz6YoG4RgR1Vg8dS5wTsJXArpzRc1PKtGNQCL8Y8ntJVY5oK5",
  "key39": "3SRRmZWB6aS8ACxB7GopkuGXL8w2PhuwRbdqMCF5pzWbD8AF2YBHQscVmtSPxnyZezHK8osdJAvkf6L4WRcg73Cw",
  "key40": "2dw76uNbz3i3Jtfisd4JsqEXUyYN7QgyCukAEu213Xe4NpWHi7xHocm6QC6H3CzQcaiMwRpt6mdru7Yt2KbW4UTE",
  "key41": "2tZPcB7qwxwMtVmK6wWec6xmXFwhe9wi5MiDn9aKjcct4jhSucFAnQnALfEUdzawsoFGgZ9GYCQVyfNqDvhiRBa4",
  "key42": "4CkkCWhVHWLNXUNBCNHrm7vFJpsyRtBU4RZuKgonBvZcpwKVwc9GCRdDvMNe6ov9kqKzxBj7UDTTTgtDnZPuXANx",
  "key43": "5268hvAHDY2KrYhgJCoiHVvZCxbdAvRHh77MQ3571npLuH16LsEEXqVkJdYYgHsVvU895gj2QTEPxGHarSzCuQ95",
  "key44": "2HgRWJgZvGJz5ABUwyvQMGKKW35iBuQjDk4JhvDbUEL1YydmVL7eujz1CfmSq5XEyb6fju3eXCz48y86zHrhE9nc",
  "key45": "3v3Go2W3eX6BczvjtxVMeokmMuYevRme2yK9Pijzbf1cmQA5WsGnyjmhZ5Wcx9VxP6y3U47HLPX1c9Ti5vKJxLMs",
  "key46": "3WBASaGSJKMJsZbM3nmzXNhRt1cnicMGgivi2hu6Stt9W2fTE48Sbr6yPPLGnsMSi1Eo81gpZrwYNLhgixbvQKwV",
  "key47": "dnb5EU1RmARq4dgexYE85Kx8qF4VQRzmpdWYWdEJRevjkipFwfiYmxtHmAuvACEGviWGL2XKGuhh8sRr3cbu2mo",
  "key48": "2ahJoqYwhRpD7saPR5iwZkAS3mAVTGKNrw7eB1L7HNLKj3GCC2eebZ6rXTSU2YP5jXYXHHY96aKkn7mi725uizy",
  "key49": "5qwYb6Qs4heAsZWu6VqGGqTMVPmtPjL6tkkx6EZgxokReun8qJU2bep4gdizhawRuhCVMnnMXhxsS95CJmczDaka"
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
