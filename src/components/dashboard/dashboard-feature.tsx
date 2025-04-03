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
    "sU8Cht3X6G2xBKijYxQXyGKRgRTbpdoLhtjmLjnBDYKKtgwBNAzqYN4yU9QcwUfd26PekfLLZDh34vzFp6na9pu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ETqZpkCnWU9S7zET9md8D6e76AtMcnNssfW4PArrLJP89oJCQjZuVPJ2zSxRCwPZaywoZCBA9Hfkj8YKLvuQcPQ",
  "key1": "64y5bCFxvZogaRsJvFsY8cmRVqz8J4TiksYdJXGpmrLgdgEzWc1CBv5nWDYSctfnvfCvkWg993uwYHF3E5zBz1Hz",
  "key2": "fLXTaSkvcPobvHLVxdKgPPCbPX3zFtiqArnifMKMuycaMx48KGirqT5BsCvAr7csQUcYgB3fAcw3M2c7yDKwjff",
  "key3": "aZPkRLTLUt7McUC5qUwnx2MCcqTHi56qzUeFBqxhc2AoWWgxKVNNcCotP7rM8382dRJHk7TSixroXNAV4VC6QZy",
  "key4": "Ka1WGhr5bybwJmCRNLdMP4vH4w4e5FnvTcwN3VAZeX7CbHsDTKwaQUipndTpd9Lc6ZmKxKMFaYm3hEMKAM2bDhS",
  "key5": "3Gi7ZwhmVXR12hYbmkcQxuDRZZdjtWtfKfuqmc3mBR5FPg9h4yCrz4V6FtVDzjq6s46osRpZiUjLiEEwTwEWK1yH",
  "key6": "4z4o2de2HUuiNmDpRY6QosLBAmbv7tk2RU8nWQYBEvLK9X7YoGAKfjK7sgSMhodn8hXojpW1cpNMCXfRAe76EWcH",
  "key7": "2jWReEQz6KeAqCpoURUrdv6fnBgP2qSyPKgFjcomAFyV1CHX2U3dVCviivT8AhfAQTJvenDUDaLJ1sFMNAGsgQ1K",
  "key8": "4JmpgGqWEt9rc43HbK49mKonKGauMuEjfbmHBKoCHhLzZVrjwoMBdiiAT9s6mCjqkvQ7NJ1ukajW1w6XCveEjsF1",
  "key9": "3iyMPaXjcnppCeQyq7x3qAxf5dtMpoAdRY8T9MXCBEThJTxLYfK1TtXUsiNgtrZx5TnAWPZt71ASgR5ggM8SGF42",
  "key10": "25xswFsG1j4xbfMCXcHRDwSbY1nm4ASJVWwQTNxGscbGrYB3UVfLDUCFDJmYU4ZaaQHC3b7rqrjvkMhtiQsUm3du",
  "key11": "2yPnP7HEzKub99WjeHwDsC8hdfTTAT9xeXokwWLN9Y56uGmudFcbis1KQc1SSDkn1ZPdEwCijcv72YXP9fPyV6Ez",
  "key12": "5K6nKGjSvh6xsuAtmtb8B9TQLgcZSnYnkeVrT1q8AmxSt8bEEJDf2NHbhagKeNxQsd4xFB4TbdNYKjd9b8JovtKz",
  "key13": "3We15jS1qxHhVmcZMc9VrWojRAMtMsX48GAvAPEm54FfejYJPdN4ccN3abex5ccXMHY8MaDfuKX5VHMkuXUBAsz9",
  "key14": "5fE62je9ayZQQB6gd6ohzgFHkVNqYdsNgbmeaE3hnfQBMDz2ucZQmjRQoBgdc6NQizRmtLjyTCCPAULRQ4YXau5S",
  "key15": "3jehUvLn1syrceYf7LqqHkRTeUwivdwJ3PVuc1RgxSVkieASgNgsTpGimsV1YTTM6SHEQvoMD24khNrpnFQbHdtL",
  "key16": "31tdyUkUvesbp8QswEqUPYVBr6eutjnWGrh1D8GJieYN7jpBMT3yrcphAUixcD6CqrpggGifv32pSTk3XjzpBqG8",
  "key17": "21GrEQwM56DasxMQPcAqwByuXC2FPLYAbVtFEoZBMgzHTHaNkuQfF8nToAige7Xx29uM1iRMKrm9QTjbbhn1Hr2N",
  "key18": "22wTXkDqVbrqDDmEDhA361w8AKLWDnBW3NVpKBF8QCRQ1YCYwmUeYdmekTnZ4XPs8CRdsqb539ANQXUkXXSVLWgE",
  "key19": "3abrYJQzrJ6WSC7zPug6XcqtxeQ8m38diXCbNWihbyo18FX6xe6Q6yZ3DxVrwPQwusKZDbRamg6pus7oyTXtNdw9",
  "key20": "2zpgUNeQ8VsotrJrvTAnBEBuyB6U5UH6Xgzt1WiSp6QunjhYZXYKJ9MF2RkMEavidFtAsNCSQp5TUXs1Tkr4Gd79",
  "key21": "2AC3LSd9chnSjKPC7dBdAkTs3pc3yHNE2sQMHbcfxmPZMtFs4Eq46NDWG3fXtggJgYK7cN4eJ1g37MB11oCQMFg2",
  "key22": "2BXLKZ9qQSh6oJw7DLK7sjBFvc5ezoJm2dgXwgBMUepLyL3R47EdWQfTZxj78cXWkwcp9V43T7dqc2afJW9jx8ZZ",
  "key23": "3vzTLQUgwKyF52rqgrNLjZB2bmy21ANUL7rV9M44wVjYf1rGLWY9PbNjXMxwrF9FdQE8W1grzwHDwgVMRRnQzkup",
  "key24": "2TJEyRbPDCveJbJxPttMCbH8Bt7ABUuAQuUoMQ2GnCR2iqfhtmdVm1DRsbiG99XBuZLJApvEsaP2RL2gpy99Vr3U",
  "key25": "wgnaAAetzNbQuA5PnPZsHYgagovgSEZUzjKPKZuEivqQEsb8kiK3icjqLJUVAeiNpdipnzTr89b9uZ5juLnJsk7",
  "key26": "5fpb1CKRaRfTHWDXJM8FqfyjmnzyXPM51WrKpZrYecmUJ9wKp84ppYgqYFkQcXR1p9SHN1HAzmzTyfc12PJuDK8S"
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
