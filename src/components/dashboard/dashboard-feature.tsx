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
    "575AA5J6UPyMePuc5xLUeDPpXtjH2ygfr3TwZHzgrVKLnMtRLYCt8pkoizQUCr1a25c57WBnkGEgKgzornu8gNJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXp9g1CoKLiTh6AQLeWj2TQ8mK8nwMGLfyqqqrdcBUdvyp41hAe1W1DQfuC9mV1XCB5z1yp4LzgzMSYo7kK7hKc",
  "key1": "3grnxccK6Z46rtK9dk7bvvHLRPsqoqbLxrutNRFMQ2tj6XgVzq4poA9Qu6CvmRvWAwaU67MBdF1zZyVtTctjtLtx",
  "key2": "5hE5BgaXwtT4pK7LtwVg5jpzrGmtVXMaXHxsrqfZyWmupuGG4vv1nmP9NwpJz2eRvChhMizvWghjc18qKQhg8Xtp",
  "key3": "5y7hSL5GsDWwZHeeTMEtDfW1JopF1FrQkSjKHWASdMcNcCXvFam35sap7ASe3TozLZ7S984Jufyf1t39cWBH2bD2",
  "key4": "5WfE9hdRj3U6GFVksABbCn2zkFjxvSkRWDMbWmQgaMG1qaaLQQHtcbcSbQNnEEbEQ75Lvg2GEMZoXsxNGQysZZwa",
  "key5": "2VUxLaDT8uqotvgDMXyG6kv2xr9cbYP5qrq4KKraYQtuE7uhnkh2kV5PdYQW5dP1w4JTGyVUnaf5td1hCBhaxAw8",
  "key6": "5aFx6CQt422s6WVou19JcvVbELfMnuHoyAPsJToAiStRoJJPvW6KQ3FYitTqubfBEQfWDxGDKCraM1MNbxS1WMPy",
  "key7": "3Ufxy6RtZJxbrb5eqB4kYqVow1vdwvQMcMF1xSyTQr72kh3JUDUnYU7UeVTUqWDaz6UbBPEnpdZEo6QyZKLLwqC1",
  "key8": "3oTTjfNkt2nqhnsM4cHk9iFdWKr3r2ExxvSgLLxhDk519pKcyLBbomLBCMBttn6wigpTxzuWKwdfdqMAjDAHmsmK",
  "key9": "5ng4WAgaqabDXYH3wsixbmifT2irQCSJW45EUoLMihmjHw8oBskWrPqAvQF9HuUJCUNN7A7BnBk7SiSY4XfG17EV",
  "key10": "A96yt9FJ7zqGQge8QL3mGwa3nHxMWgtxV7scmax7CijhpXyHGiQwKeWFWTXYhDPHEL9Kr1t8ru4BYYEYCgitXsB",
  "key11": "2HEKaxxnBUaT6JG1yEmW14ELtYmEoMU2TGdGSWFtv62NyoeboYXeJnYo9hAn4pk95prXYCRS1C6ajvWCJfUxrJqh",
  "key12": "27CzraMiTNRd9HKKLZFonZYu2rzpYL4ZDkZByNCCKZgCBq9BKK3zJYN2TdPKWf9Kydm5quv2bur166v56FbcNPWv",
  "key13": "3e28yaeH2x4CkhFEpQoR8Dz5WMaGFeDAMbxFKMiPdW29hrNQbigGE2U1NuCEfizUSUUvZAeHaiPynkqkBNFXiSc2",
  "key14": "4v4TVLUNTAHafbVQ7qWekQCn49PczL4nLsm52KA8DFaf9eHoGpXgqNYVw3s8S7s5CGxqpRpBShTY9Qicau6wsZZs",
  "key15": "34zFuNHm6FKJ4QGT27BYiR52QtUeWovMpwubvBXnhHftN2YDsSKtR3P6Sheuvkt35qjuBdrutDTEBkhNiFb7myxs",
  "key16": "22RPZzvjaKAb5ZSRGFVpr7Qrh6iGDJrYu7sTx8jy9QpmkTwQ6XuMrrHoG9M9fwtfRnaBQNohZCBoDwDDanFiWTnX",
  "key17": "V8fo6ySnzWUTXTQVNLYS8mJ2skNxshpy2HrohTeSetruaRJ2EfJbQFK88bEw4smkwcwVp581pePrKMRjjoniRPW",
  "key18": "64Sqw1f8FSihEHVo9Ea9p8EH9eCxLXKq81WTAHVsY5vppM97X4mxLpg1jV1EfbPMk85r8b4SNWjgVz2d9pvMuoNi",
  "key19": "65WRzjtgU2y4PaRRToza2PhG5fwLrvyPUeqaTMGPXuxvfDDzR1ZqNTTdPECeTWLPijRkDbwWrwzdyoZ2YJABTqUM",
  "key20": "w1i9p76EAzoYG8TC4nFigj4q6wcSrpUfyN8ZaG2cQT6zABCHpjQGUR4UaNye5bm1UCkVvAJNaRLNgrwsbz73bbE",
  "key21": "5UmjfygZnrVsa1mGHH17wDzkdiUV8FooPhYtGyBxs9s5U9hDmsHJTY1gdFgpbhSY9bkUKhiXRjaUWcq9MguN5u3k",
  "key22": "Z7kvws5f3UKYekKgYmqGgvMVYVP5TMLEFSzgTLos48HtrXqet3XYLwwVo9vpHCvdxbz14j43YG6vbMtWZMNy69y",
  "key23": "5W8sTah96UkvadcdgKwtFyTHr5GvhoxWenxS7Peszn3givYrq5KxVooZc2Zk2pGQ57BmuYwJSq9xWg2jpMiWPxtk",
  "key24": "4yB8CmFaoY4ygM6G3jQHR87i28R1fRdu3hgaqZFkusiTMiWF1LxPxMP7Z2ymusYxvnZGk3StN9RAbXeXtLA5NfDU",
  "key25": "3TuyknPy2wDFZhK8gcaUW2QrEvHwhJLzrreZ7hoR6eLqFsDnarRkGA41QQbndp8TpAFrPz47AumxZFWZK2TDCsxk",
  "key26": "4Wtzr6u6C4svMNzca6A7R7xcmXnXF6jZ662WmMJjEHpjnpkR9AaA2QQmq5K5XWm8xDfixyQfChh11wYhR5hvM6k4",
  "key27": "4ugR4VPFvqhGQSoEYsERea4sXs3DzDJqePTU6uCKBqVe9igEjDeioiTM7YXQ6EVY16FjDdT7yKjJnJffb6y2GyS4",
  "key28": "4gQ5FusEEJsC4RTWDCNVKwrXXhjoCAg9yi24oBfEW1LRejFqXzvJ8jMKHwg2WhTbDwiwkXZyuDSfgZYjKQeN4yYx",
  "key29": "ircSnJfydmU9aVsH9ANT2NJv3YKFMZd95oJgJCEd3PxkidSHE4WNoPbHPteFiTna4Tnjg6wqLd3nrMsYrSt7Th7",
  "key30": "5kWzY8mSf8dAGjEuXB8MBC7cNAFFKXiAJaTLgwAH665ZWhBUh9QVPdHZLJbY1Cgc5JyADc9md1MxtfPQv6PVBzvQ",
  "key31": "Wt9N4eEFdjd4sBZ5jgQa6HRZQrX9BLFJp5R29ZnT3xVF6K15s4xwqwkjEhntdtBzXdnDKG5KKyezKRmExi61NPB",
  "key32": "3MwaXC8GHbXqW9QG6oA7Fytby7jGXZrWhBnvSNxU2g79PfPapEsUFAurdNh5y1k13qmLA428c86T1Vgg2J8Fv23Z",
  "key33": "YuPvU3RoFZ8B6iNBSRffnuxyFcgAEsikziwGoCUKopEzAgzRceYJd5FLiCHh46tQ3mYkhTCKxW9vX2mzRP9mWr7",
  "key34": "2MEAo8yhzBG68o7RHmWx7vZrggzqtfuhxAj3hrx8gQpFkQxgKM4ExKwVZD33VW2KMhDV4tDAMcWkucTDA9xLXuTe",
  "key35": "qox28YKfpD1VymaoztpnBhZJaq4Pm69on9oc29ejijA6BAdMqpoK7gouVcHL5X8QHimoZmXvnjudjoNrqhBQXZ2",
  "key36": "5TMGSYaGuYXrhpRhXj2He6RhXBc53utpyDmC22xvx6anEADEpVmcWKTGwYG8TCWK9Fagr5tRcGRngs8VCo2fggK8",
  "key37": "2eazLYjMMy5nfZ1AU5pFDr4zZGy4sRiyxWLQZrSUakUYpo5PB9sw34Do3YHwtxdczKARULwDR8d9iX3yUBHw2qtY",
  "key38": "2vGNfUwZGxgZtmRZ4GLqJh2ETFrcwYwtHR9jrzrZZrzUcmvyCsc46pLcW8g3AaYB4ymxndYrgioFHMm1eA1hkiax",
  "key39": "4XuSsVStTgq4KKL4kifBuvpbiZtndPEG2pqaLYPTkokd2Fb8iV4YDEtiuqwWYLzkuLry2Ns95NEdthezzavgTLDH",
  "key40": "3CTmx6UWMrDXarXhhEfiUNyF5nTvhb2sKgY8VYER52pE1tJZDLmdnaqS9nGVAYzKcrN8s5My8X34Cp5ebJf5k1QZ",
  "key41": "3P4wVXnuLhJnw27o1xG4LC7WygntBHo8GgWprV7UMqctuRCDytbQQdWdaD4y498Ejo4kyWbGG5MmX9FXgTN87hHG"
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
