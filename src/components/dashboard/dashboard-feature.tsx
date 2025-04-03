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
    "3UeZgXFH36WpkYjSNwVixhbQbQJF2ZTqR4SMigSv3rPz96CyLaPpuGZP4iLvi2gjHX1be1rY4HQMyqE7jvLb7F8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcHAsiAVjBazFHeKprkAVz4Y3HNHtqYCdakz5Mm5fGsoFD4f98JLWhAvNhSCmK7kE58EsYkd4LVxqrxgv9FwHyt",
  "key1": "34nb2AxJTf2T7xWQ5nu9juVEBjYktWnRmasLznsuqWHARioEWvpQjG25iSQpGD2gq6zgxfTLb3rjePktPqFAADx9",
  "key2": "2ZfVfn9M93TdPhFCc4YexfJJjBaFuoWgYz13KJsVjmKa8zpRpC8YrRRmH67Bonyx1AkwXU3xizsJ1o5SLQqGWkEs",
  "key3": "5f6wbTVbp8XNWxAxUXsgQtDPTcG3g8h9TsYgtpGj4xT6mc1MeR2A1Cj149veGKmMA41i5QS1MQSy8hmStizA4zth",
  "key4": "2iqdQSzCAv1SFQs9quRXcfuJrxEUpkLCqyCPf9qcpJuRHhz3Vo2QvoMkCgoQgwJyKLyPDBAVaDtMkogmyZ7V8tx1",
  "key5": "4DZd6xYkN4BZ6Y6wkHVkZ5a154VtfCYpsuGPKGG6yscezDPPbptz5GMsEHA9d7xHCzQDRQJT9TSwUkayLiviQMu3",
  "key6": "5ZnBSkSt4StEDwc8aY3aEZrBbPcybk7XemZQrAz5bA21aqLVimHsfgo47FCDWDookc6RrGhZbDbFSVZXnhdaZRXA",
  "key7": "NCG5ML7Q3zX7MSmxPqre8LeNShdxL9aaiheHV9fXrrUX1BEXiXkDS2DobM82RVN9SVpxwpcwEA2YJ3aFvum3bCv",
  "key8": "5SnDZNdmwQrSxV1aYNpRmEMv4aTzciugVPeu4dZBt3yhecqYHsXDKAi2PSCMe2UgFf3YwsrBhKuGbDmAh7HFVhjb",
  "key9": "38o2THnY5BwJW6g7JbGuTXJWpYnkyKcDsNMPuZaphght9vdvvgYf3BR8JSZmcygFR68i68A7nEnA5WGkkAgDPfpN",
  "key10": "2jwJqRDUGVzkw6vawUt8ND9H5x4n8qrDnYXgZUKfsij3AR9KEz37km8iP1Mfgt1p3aAK3R6dnPFLdi9XzvJ6WcX3",
  "key11": "4doUtHubLgtnbeDmAgS7thcE5wLDsMbyvSw1iSAa7neMStAyo5k6ubhxGey5ze49tnFdiywaeMRAeY5t7hLgSGMN",
  "key12": "61oAVZjv9iXpusXCG9izJLcaAwUw15bv1WRrxFTaGBdVLYLbjEWpRyU9YjJuAcB743Mbtjqvsa3HkpZ8KtDQaqQ8",
  "key13": "yDpK7uH5q4GGgw6DwJF7CaaKo6QkShYyZ2EAPrKwJD11vCdUzKwRjfyPxy43YD22p6TTFDjKR7XDqgBh1GtfbRp",
  "key14": "5o8NAqxgHDAwkkKVSgzx17LZgGd53FDmdY4qjNjMaX53jfTrY56vk4jAEEa4y1mfTEPbqZHtt5ostSUuSLn6keQc",
  "key15": "hLYfamkoyqTSQjhpH6EZaeUfifm1qcx2MHLzxZR7Xx5pUd2rrap9hnKQx3QzSnZFkFgF4W1m8ZxX6VNkiqdJcgP",
  "key16": "Fjm5S3Tbtgqq354hwNcLYZMhr11B3d2JKLKp52fnVeu4fDigBhAmuCH6ZmNeZN59dF4g4KdMWr9WVNVLoBtdriX",
  "key17": "2tr979Qs4iEPhZ4a2A5Zi6ToQ3EZM59zyoBzQcWV32AN1c6paWaYz4ZjQtSMAD3NwnBdzL9JEur3DSMNoSDGw8qL",
  "key18": "2bWwhDbHEqshNBondZMYy6Ci7PWALaEHiuVz9gw6EuXt7b3CC1JLzQHCSe8m2kGZjZKJ3fKdaxdhQHA7xVYbqLn2",
  "key19": "3C64Tf8heYbKCp7xLSQRU9ZL1hxFZZ45kaS3KVzk1UVUjfKtG4WvBVLYx1EXLuKSffzfuJP27EVz331vrrjuMarq",
  "key20": "4cPFuonUfJEg2m1qBrApVWXiWvT2Vh4sEp82ieLRLezGnx5XTrqfLNXrqH2YhdiFNo8jnRTsmbToTWAbRVzZtrpe",
  "key21": "3uH6keb3XQ9K65TB1Jo779XkL9XYypAuv477hf5hnCXzdNAsJVnhhwnyciq4jbmYYq1WCbY3nMfqw2yXsgcsmCNT",
  "key22": "35bpopuvQWGPdLK6hNHX22RwDDTqqN7D4kCZYBTKk4kLAfwqk3vzA5aLTj6pLQCmQkCuxHgQVA1jbWyBWNnoyszE",
  "key23": "3Vp1wEN6bYudgNApYb3Mw6du2FMgL7jyhVUr2wcnDvY7UGZdSsLXR9PLb4mhAcnDT1BqEmkbUbhxyAQWhxaTXRV3",
  "key24": "5eLUub3vMLXtcrqkzGY8Hj7xQrRmfujDyFkBw4kVF3DHKFcB6wRcw2k5c4GpyCSUrN14ARycY42GmrhBBgL6MaoZ",
  "key25": "3xpUMDuwFaECu58LqQFtem1ENBMptgWeWnsx4f5kpN1emf94WBki1ogawkkxr5CbHGNU2mrpLrkZGRUMwhySvzPJ",
  "key26": "LbiByPN3BkjuYcaDnXP2quTr2WajBqGYGgDfiEmPFywuaqPmDcwii1c6UvKrX4fkpBRDrzspEmZUmUaxbFY6gy6",
  "key27": "rs4R3JkBcCx8a6XUx3m91Nbr19LhPFy8e9qqAVRVw6Qhd29E6g3izqeGrj6AdS9QsLkbesRcbDZRiGD521iGCCZ",
  "key28": "5YBKKBaFd6HZH9xboYVoXWFRo7ccPLSzBLuQNWsPogaU5RwCku4eYHQbktr5t9kkeZjsZ6GsfyTyH4URM1FynoPM",
  "key29": "2qM43bqEe6iKgn5m8nRFbbyTumAGjtdJsDDC1QBdjguw5s1w8vgq7mv8pjDkczG5dwmy5ucoQgGqEA2W1utQfiwo",
  "key30": "BzeH9ebDFmbCwtRZAiNEPqbLByAU2Wx8BVTzuyE6hTddTbY6PRdxFKZWNKU9WUFZjX4uuXzScBSxT2UctK71saa",
  "key31": "5dukoTSEeX88rLBg7mY42hjmgWLKJmwHaXnepXeFeyw7cvhzsq6SpmxNjnMeNQqx7zMLtNhc3Mofkdd4iWBrdMGY",
  "key32": "4Gia2YvZjvpGosjQT94LPBTJHznc3wXifXPRjASmvQn8DV21faZevsWK2hzR36YUod8xcYAUGPnKedG9LPpco99n",
  "key33": "4nEKJDNNPYo24ZRbpLWCB1ayDsFkYhNwRjz8pv4dCdv6MET2rT6Sz9XzLGmxWZEP9b8E6S5zuq2fjQa55GQBXGUQ",
  "key34": "4ZwQBfHiMPhk7DemiKu57tU15Wzmyuui3pceTGZmT3EPutMbJAbQXD1f4UGao4HdWhrSi3gu1qYCbihwg9pgXZey",
  "key35": "8vLpsejkuwgshXW5CZXguacjnXfzZkdpKUGSwQLQxAeMURj41PwF9CxbyfFzYcxXjANNUNKMKqzDFL7SYNN4L2w",
  "key36": "3a32nSziDcK1qm4xfwrEfiqiYU2yhR8wSSvFCEEGDfZaZcJQ1XrZ5Kix42QANzGnPoJQ3tH55y4fqWBjazX8zUR5",
  "key37": "5dGTKvb8oyrDYdzkkymPsdYDSLR71QEJh9uZmxYqygGbiU2NNibbzW9MbF7WtTGSNXFGQHpzvkrSBjsiVKKm1w3K",
  "key38": "4BywY8JUiGQbHE4WGtwUTZvB5GP5YT6UsE7ZwzFDapi55fhXDfwiRjCQNx8XKoqBCcBvxWwCfjYfrvsgnAwxDXjC",
  "key39": "BLFotBUWT7eR8R41a5K7UNqnh2x7fW6aNwqbthgVM3q8BpKNjEr43QVVqJJXUfKAjmuuj2sUSzW5fjwUDKzg4uN",
  "key40": "2oNwDZRRAskxS9RUfFB98mjgURoGmsZT2beVffzzJpq9X3viJ9gNx3pD5cHofMBtU3P29DpsZDUyFocWm1nfw8Ub",
  "key41": "4uvBthWHe93aJ1mFfkVkGwtJMGGbHMCqm5U5q5P7qGT6ok4M8zG6Xr514DzuTKZivQ8sKLXZgP1etfutLbzhwQcK",
  "key42": "2ZTdPwbxK43wASUcs31AvdtaswhJN3RxFdKG7SndK36HnR5oCRNhxjCmLPozENe9tX5TXq4DEu9jwHswkWATm4s3",
  "key43": "3CiC4v9spomkiHL7tg7NY4ebihdpDP2PXJ3UsCZNgEQdR685JLgKQtmT1tutscjfmZmG86wesucbay6jANaEFBpT"
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
