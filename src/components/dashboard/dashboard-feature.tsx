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
    "4YiDG9A9w9rNV4G9vJfYvGBeFHBQ15Zt99hX4E598zvZGTCZxsG1H3kuUKQgxLG9jko4BP1v6fxSeNCGVceS7Pov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HCZxZEPahaFqdatZ3pFMgHEFecDMHyHei1BxCeZtJcPpnmku5zwGDPQWMkEpyYkaq7wfD1tWEDK9x7YAzgt4dyB",
  "key1": "4k17KxJm3bxmVSqSnRimwEncwHPnLNcUuPUYRwFAT39U1ekeaGbgRG6iqMQzA1EwBq2aQtn55mPNjwBSypvaav6j",
  "key2": "5yuj4D8X4SQ9gixHbv3SK1rJ1NF3UiSPuQ1qRkqk42h6EYJpRsyL3AR6ir28CspxNWH8H7fiidtFWyz9CbwFxmqz",
  "key3": "4BKwFbFWjugzjVZYMkYvVcR9d8Ex1dpBBX3gnhd6Mxs2nBqzGZTB5Ufk58K8fnY5Vn8pBwWaf26tTWRjzJ7CskzS",
  "key4": "5QXoc5eNZuhxmAfreRmRrjkkPsMxSbc8Q1bCLyEvfJyv997QybPG3jYkfQEF1FrzyFCoZTB24njeCtZ7snidekhQ",
  "key5": "4gHGHtyFhzA2mj4xvqgBbUYePoYwvjGoVbBo2zRcQt4QEmheL4iTWFgUJ17esoap5aGHo5LyXAT1zMXaUVcCNui8",
  "key6": "599CLuUgCqgAbbDVdGWog1U5s9tPRSqq7pkRnmQKeSWzZBuBSNQcLtF9m2fd9kjBP1SymeUfpoRgBtFASQMFHJKx",
  "key7": "2gV6MNkDFVb9pDuDs9BwRteCt2hw1Q7nQycmaGEc64JSavNEcLnCE7FHfxhwsjY9UCHXQFiKa7CBz7TvUCMcbuwQ",
  "key8": "5fD2TeTauzFu936F3HQ1cnV1583W13mJE7v6bRaRwLXNMVQ9t16StxbGyMrGHUVBqVBUwHPGt78YpSYJ8TjaHRDR",
  "key9": "4o21SPMcoVXVGat1YDPsyo2vQdCs9cQ5PFEG7L5etzrMny2TbMMQzruygKjpicgFz17CN3reRiyuMcqq6iKuVdTr",
  "key10": "5Qhv76H2B8a6DgVswd8vBuDBMKFXirAiNBJtpRPLi3JeaM8jHwZg1RsNuNzTwByGCjdN8uE2mRMbhoQSHLNx3yy",
  "key11": "4HUPBqmDSLVALEf4F5TQL297FqxVpcVeR5DCtSQrnD4c8n4ErCPXc4UPqYJ61G5goCBNoNi8idkfJyQG7mohNVY8",
  "key12": "4YQCbJRz8jSJ4YDcAkK4Q1y8hsi5PasteWThk2tnVj3VVcoPeAprkCjUyKNNRowwAHsv7r7pv9mmr5SxCkT5Lz8u",
  "key13": "5XGSNkZUvdXi69hNp8Kn3Cr7LBeXRaKNMtCuC8RFRdpAgtmqMLLDqUZyKfDrP3obW9bXN1Zc4EstB58KUMu7oGuH",
  "key14": "5ywVei9GDygNRGQDG22iFPg8yDQiE7wwd922zTLefYC5qXyuuzfR86c5mZ6ePKq61qQuRFiow4vokvtWNYZiYKNe",
  "key15": "4vFS3eieoVYg8hGnrS2yKwyw2pwyKgoYkPD7NJLcTefX1HuCzRHmSXrVbXwa7ae7dtejzQgt4wYFLpRMDaHuLwqx",
  "key16": "LXWi9etvounfqSdFvMZYFniaQz1bwaE3ZnZ14pGUYQkXJ5rVYajBgdfHotanLQQR9pmR2jg2EkhUT3BV6zUCt6r",
  "key17": "3w2V8naNJxEUb9xwNLm4druTLtCwn3ipnLSeLUQjzPxJt4a8iYL6o8RXGAHd7ie2BqvmrvccC9KssksdhdCV2NLP",
  "key18": "S6ovjpdatAauRPErx7ph1a8oCb1GA7qNmwtQEucwc19Q3KB3UNmdZbA9gUj26FfH3ciWKL2k3ywoWYJWnTKUrGm",
  "key19": "3SMVpk9KatBt6oy6a7fGHAyuzNj2iQG3HcLnqAy31bPzrRSFCpCmkM1dfKW5iup3ivqLYcgcPZuHPjVK7zBrodEp",
  "key20": "5Xh3c1cRDPP5UdCAMNRG4NxCEtCUF6RUK1uFZegr1jSAeE5k9uLkAPy1cJw95SgAZa52N4BZvDr28xM65BwvTUWj",
  "key21": "2b3fRh1Rn8jrsAdA1HMXKtBM1PATHyu7HdsEgzV4rQiQUPg3JaALSz4J79EcsCQjDrWEiYrztuUzodM4me2nnpEf",
  "key22": "55Mc7vzANfP2kooSfoHTGZ8Mp1PDjF7FHKC8Ep8x9g83kaQbaGNZcr6wPS7qzAz4P3atgVd3tnT7HBQKXYJ4MmXa",
  "key23": "51Ay6GsQ69isA7tzfaeLXLUs1EERvd8P46BjQ526ugeKVVsQEP77J19KAqrjwPmjwKSuGRg6cW15cvgyVBdPzNpr",
  "key24": "MbEGegzXJFCiR6TYwRPxy7feT4U1st1NR5WLn7egtVcp9BHSFygJYFi9aY7qXH6ZjzXnE3qctPf8GPnUqr5VuMD",
  "key25": "2Ni2YXzk8mnXE6AQq8oxc9QrsQPM1Cu7MUcuYZkke8dCe8DRzERAAKvv7wWoDcxMuxSZh65ms5vg1SdKVQAbKkwt",
  "key26": "5cGLrrHF1u8BqTiz7EKpbBydpy8X3EnWnuJ3nXPMGKKSXjUJkXSYZ18ZqrRp376CvtVVpAKZjaFid1HEWr1o2Eev",
  "key27": "51yU6LZe4aXiLJ9PzCP9tVH6cYLwmdr2VeWuuPhmi8LC6QJSBCqtQdKWtGWbGFZqYsFPtvRUb9dQRHsGnq7wsaLh",
  "key28": "48W56eXfmfj5232ZNAMpSgwZd7dv6UBUygQwCxXMiZUtS4P7fVMtsBY7pZuYnC6HfLbYAirPZKUBP8hiMXU8j8NF",
  "key29": "4AbaRv5Luud4T3Q1GSyuPghj9TrU2faVzzszuXxJU9VHMFFx1XkbRgxzLdbM4YKRPn92LNTB9nNo3AhJe1rH1fsY",
  "key30": "3HwTk7zHJ5gHFi5QYfx8Um8ZjhxSZBL3bX9f1kRZ3vmNAncxnUoviuWDUSWfp4Z9zVjK4SGMfZMYgQrFQPCioLgj",
  "key31": "253BQwDmWZ3ejmoF1DVqjcRECCVrNZzJLk96ayHRTU5LDm2pYxCPh3xSfj5urdtfT2yXkondp2tY8thmzQJG7YfG",
  "key32": "ceNwMTj9biqPqreNQ5kMrnrnH5CQo7tCXJ1AQ2YbGvaA53NtxnEjEWyRq3UXbvTBrLpw9Cqo555coD2Yz3PJqmb",
  "key33": "2pzjwYojeVodVdg6NicFprJncMcV4j8G8PQTubmzGjeLCc5jNwgxJc2PzrEcVbEQwXdSL1gwVX6rL1ECmrxJ7q6",
  "key34": "5r6axqMbrsteq6ZYnMKkMFAKMuZB4nYGhSZSsZrAytCnaL3TrdUmAp72vnJLfSdeUwidXz47K13ash2mwCFqw4rS",
  "key35": "2EoGeijAmRuxusvFQLAFc67AhyzVLx47tJQNU5RHwjrKWPhtbFoJy7J2LzRWDZgLyKbjP9znhjRtvDg7GiSBSF6",
  "key36": "2H4rHfvVShNLdkVH4DY4Kxgdp1bbXzcUideVSmWD1QCjx221WZnTkVqnmksG9nsP5hBG3HgXWLt1c7DvVMYxraV",
  "key37": "38hYkbHgBRT3tomYpDM2sJgiYdLXYEnDf1Aodav3tiJYMLezaLyLwN1Cv9XfoUb5sP2JmeYWugxQ1jw7w9ATn4QU",
  "key38": "2XFTWC3fXAg4tJzAeiT2T2JZFMJb9UCi8s66CGBdZiA3n1z19UDkatftz43A2PioeTqNv2CA36WxzJaXJP1v1fYj",
  "key39": "3YREQGqwSfXL3U3tvJWEefXgHGox5gofY2n48GMyExRuxarWazBQfg1XuWnP16sLgxjZ9QgWNyXXgMFtn2S5PMwd",
  "key40": "3c2facxSq6wmiv6p1xTnDy66Py2RCZAt45PbRsUv7om45dQ6E6CBzvckGUiiW7qXhcpQNrudxmJJNpZY1gfbGCU2",
  "key41": "4yaGUHscV2NQJ7B22uzkN2qxxrMLvGNKZwLF8FFVBVkLVJPdnWPftBqqYDWgbSv3VVRc4s8idfRJKf6jPCGM3gpg"
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
