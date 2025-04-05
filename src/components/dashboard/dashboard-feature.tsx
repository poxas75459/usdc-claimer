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
    "26iHhjurkTYWWytQ7H38qe4rcuEYAWKSt8Wx9Yg7xZeT7Qm3LCeBodNvF9ZdZk9uhmDFg91YW277kKNH9MrK26iE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhE23t4crwW7FsngegrzhV83o2f5DRdJLyd3hDavkvdFZqX21Mry5aLEQSC6EN2M14wgAxKHbiC81wtoxyB1t1p",
  "key1": "3SdTaytVq9GrVEw8ub6wHgbYBZqwADRi4hCFvn4PhV6MM4NZAPs7EHGSQqwk8ENXwyYANCZD3Fe9unRg13d1wK5h",
  "key2": "9ZTFjRRX6MbYhCdX6iTjiBdNAGBYQokwYkiFUm435mNGvZYvjTu569o799twJw2bKTCLqCM8YkrDzaH8f88raX3",
  "key3": "3Vw3cEPoXtzz1kPJXjyBeXrUHSqcgEpK54M6SgpzYmbUPWbg8BmxfKXhXCdAitj11KSNNswEP5Qv6eAviMVAt51P",
  "key4": "3AKxtokAiLDqEtUSYa2qApCT4DCjFgVdC9VbczvP3scNoehSPL952ZKu8v8kPjRoBnwitJNLtEsSP2s98b2C5apH",
  "key5": "3Pp7KypovaTF6GP2sWvGJwCMkXLdxY4T2ejGA1iEGvKhGh88Rp9vxJywGSZZuCg8p94BjwoTTmRPpXpseVS1YVwu",
  "key6": "65mcnkeFxciaTjDFjCazBGinF2x5A7TMez1KrLtdNkNhLasYrypDSVNMRgsunwh2vCojh6Dez5pEuZPtHkHraxLR",
  "key7": "5XqPU1N1H2RggqPpqEQosg29nR2RFQiman7oxfiizX9qS15ErrUrMA22NQuTPgva31p6gL9tDTeizDJKoLtjWypk",
  "key8": "6DUMyQteBjtUvj9eND6bcUsudKs9qu1xdXoZDpUPT6jc8v7xe9dqTTQK976y8nhyQjhxTJAQYqudsx2acLmTzNH",
  "key9": "596PFwny6CUoi4wq6VoNwVYi64hmE3RT51BHbHY5eQ8J8v1BVLdXn8aQgU9yotGkNB9iqAKQonxZAGk3atKVEdM",
  "key10": "58XLH2jc4RdmztAvt6EUTQ6mEcbnQAZhukKynceTDPiyV7gxVAJvMsQiTVHf3ZvGaiiAbYmh8exxoyWrJB8Ynhqg",
  "key11": "2jRpnkAYBDtYvQSAiYBAaaKffiE6bZceVfevJsn96EnmKmx8EkEDLU1R3X7HeYFNEWtfwm6KPwriraPqpmswUps6",
  "key12": "5yc5JNdcY72Vos9u8Tsj9rEuum35ANzk6XRy9TXasjD8iiroxKX7odrPpZxN1x9NbdERWRv4ViQk7gToj5VrpBnB",
  "key13": "4QYbwMjyv3ahP96UhBtZTjR98F1ih2tdJrqS7rnXYWwCA48EZijjuy5JrD4N9zNbtQf5TnQF3tusMMWCF7V4g2Rs",
  "key14": "HhMYKpxEbbBqHtzxUrc1ekMybnHTufVZJetqDGfc229DRPnwc3BukdKMmtAwz1eMHsAroe4Ca5Tj895ncJDET1F",
  "key15": "4aPFV12LbY8BeFoqH9MYuwsMeLvHgBZ5nuDNAQ2DBZFgeURVSLopmE3u7a2sRXXxGJd7dT2PHQEmB4uauqe6TCay",
  "key16": "5RwcyDkTDHBKG86LVRPrWUzKae5MpbePVdrCzwqr9eGuYvHTip29x1nDra7r6vXzVXibQrKXkj8Dbb3P8WfUCKkA",
  "key17": "VocbhHh8wD5KwGMD7UB4gxRVb3XSNQdBtWwoi3GdmqTrqcR46vFCh8YxpnmjokmNRBZad3zpvztiFowsAeW7gVE",
  "key18": "4pwhGtjdVe8j386JEa11yB54SCc1j5QqzcC5zGYf9Z4FzFJGHAg5BF2SKEF2xw2VciMMSZ3CirSBWjvhgzn732L3",
  "key19": "4wvUzyZZnj9zWYSNerdNHHcA8MdBtG3GCujna7157e1sTnrbSiHyJEyXqyi2XDrQWE297fd4EAd46m7tuWTFpvHT",
  "key20": "2ychut11Z81h7f3SyoDFqKX1ijMHnSYzsixZ3MX8TnXQXdhfHJ7Z3QgkbNGuHooiHB2tm9on7deR93cNr2w3m8JC",
  "key21": "4RbXQMBzLEtg5WhSVD5nMdKKbDfR1mpYXb5oCN5Q9ZaoxbJVQ53P3N2T8iQjSngF3jqYiscrQAh65hXhJ7y5LZq9",
  "key22": "5DLQ8Jgqz4Bdgx8MjSV9vco2bo4np7g3VrQtaFKLAz4WAaKCKhFWjsh4TrLSTgNYwC9whpvLWrSKWsNVEHbZ4R8b",
  "key23": "HY5cEjXj19e2KNptxza3JeHbes37mtvEnAPCjJLu4WyfPY97ZVXFW7m6jq85ftPFUSUTzqt2G9QrQqyNUv3vzKY",
  "key24": "2M9sc7UTrVdL7tm29BVGeT5Tv9VoTKNXSCRtoNpP6QRgFQ7oBiv52sGgLtBVzkcdrvMckjfq5PvRUUwF3SFEMvjf",
  "key25": "b2WjBkKFMUEJkg1jKraqYP8sB92neh3tMpjF35smAWXQuPUp31g4AbJ8Hv72r2SPSnBzHGy74QyqDJG56RbW3XQ",
  "key26": "4UA75VTpCJkZmjDpfcVLQhzFu3bFNfk8DTVJTtWEmsqgo3xtejtrb2wnHGFtTHdyiEA9hSjcxC8XWKuVnscEvVAn",
  "key27": "2E9TKvgi9hajqRvTWxGDRipuh2f8r1dUPA26vhnw5Yw24UHbWHmxqvD18J4WZgps3LjYfC9pwf4dWgXJp15BsRs9",
  "key28": "5hWdrZReW3rp2hVbSfb3ZDFvvcZYQxdS1fnkARVvTHYbgKiYJyphSoaCzopTavtsZpsq4AP4sNPmjSZEQUhuz1Si",
  "key29": "5u4wK6TYSofMoXFT5oLntB9YyjmYNtahpDdq8qRriGEuPZ4Yf7Tqh1gAPLbjakNmbeTZoEo8cQ3k4SsPCZawuEsR",
  "key30": "4ycP9w1PcTMb32apt54UjxUgKiB5TVh3T6Jyixc3nBsGPwAWdotsDyGsDyPmHHcweWR7BLbgc7p63CFD3zSvN4Z1",
  "key31": "VjE17ZfCfZxTdzVZWfnPDnFKuweon939Z2MaYvBJDUq7mT637RaDNJBnf1nmhFfRS3ZWzPVdsYFrLX4jjqhBtEE",
  "key32": "4hpzLtEW6N5UekrAagsLvk93Gppe6Qm87Ju1CxyGZAh8e9aTzNqo8aqjsYF66KY17pzwDrD9YkRgtm8vFeGUhGqZ",
  "key33": "3SbZpcLEc8EWUJkRDKCbKKAH68FUyKADrvxcw77ZZ8rxHu8Yr1CMeB4b7j9QV3hmb34oNxfjCsCyBPH4k8FvwjmF"
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
