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
    "igysNn2oJkUmndzEWucXzt3sAijpmytxPUdQtfHk636mZFRt6wbqUKadr6h7Li7HE3f4hA6YcM9dDvxvZfmTyxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gPmBK88RaLQvB5SWJPeY83KZfZW5LUzmKryvieLWnt5aEynTGmxGPVWbve68cjYr5RnHZBeFyBtRrEcFWMRx41r",
  "key1": "3qBUept1s6mR4tYY2VP2nq2giS78khwHm7kSeX6EcCW5GK2PtF2Eie3c1BKoasG9FMmqAVZaHmun1qz6GCfHxiUv",
  "key2": "2dz53i9WyX4uMRCUCkF7wRvdQHMY7sUzbhKx6z7azA7itCp8G58PvDPBpYvdxYeJQCzrryTzsQfjhXaHqHWhshvD",
  "key3": "3AhrLgmXZUSUR33Aa5chR1qpSNCfCYeC7w7EFCbD1yzd8FfhXfcybPcnYGwN1Mp1datAUfkUPPyEDfocQBZ4yCBH",
  "key4": "yRSfWGhd5hVGDoN4uPJZofzH7HugPDLZvcUgZGqN5LwM1WcQ398gkGz7MaADZxUy1gt365D6aiRBqrMa1Mo1E5f",
  "key5": "4c8EdcruVSV8wzrJyRmKL4hCZiMPxApYWcq1LDm3mGZAth3e4DN3fZf1KJXnkUP8SfQ7jS21ucKPYuEgMDg8dquE",
  "key6": "rZEp7EdiduV1XMN9TZQzM4WhPZbJu2NtnEmyDZFPHGr3X5DnburxcviDMoRSvxZ3BtccbitzuTTDucLDYcRpHz5",
  "key7": "4twM4Gff6Yt1EmK8XMTdeJwWAqoTUVFUAH5eD7Dz9dxoHfp3fLpghf2LuMjbkWK6a1k3rzGxemwZ4GTnroDcT6P8",
  "key8": "4m8xvdavkeCdh8TrKmocVuVvNzGDSGmsdFcxRsdC5J2GDcE8XzvxUHXJmB7JjYwf5cAdcyfvBhRY6DSfRxFEAQ2x",
  "key9": "2d2XBaR5Gau9KWvq9VnGU3zBdED1vVhBqBwZsWPu8AaASsoHabS1QbuJZ952G5cYU1pCT21L2gHzZCLjXfMpvsnY",
  "key10": "2mBs3mHv8BHnbFXVkq5eC5Pr1vnDDFupeFai4Y32t1uUCrzCC5rwLofcJvtBT3Qseh2EL8nNrZZ1bVEcTNCFCR3j",
  "key11": "3nh2LuU5V8GfhR4Awf8GuSpY67BzNb31kLe5zBsapnjVxKrb9YhijTQTvWCygAjh6UFy9aoMMRgkZ8hmwHPmQw1L",
  "key12": "oRKRCGbGQyxApXGvAe7xMftpUr33CtY4QHZmoZrfATCACQNoyCkwQ4x96PnLAJgXxpit3kdTQgGDcxVZ5aZ4i4N",
  "key13": "3f1CkKCALJG6w1PzQr2gj7vyf9gaiBah4QVxMnts678oFz7mm7RCz6ZfLWEkEsxYXCoynruEn8qyYmwJd92jW3tV",
  "key14": "66pFiqkcJ8vENQsQTqPZD3CZCYtL4cMzUAsQbaAT7K9j6KDSJupPv4wpBgNWHmaC3rcBd3LyWfqcATm3Eee7rvjW",
  "key15": "3yHGiDHi8CDcSh9iwytwheVRsPqLtZFfBDXHcmNpuJM4ruK1X7Z2xNTHc17WmDKGjb69DU3oWmAsQX5tmW7Qw6hr",
  "key16": "4HTEuDNbGZVo8w5gFMiDaLtQa3qKbWsJsNfdNUb8KxfSv2x21GthuGNWHA92rVXjdSpe4hCLyYyGNiYEwLrF3Gfp",
  "key17": "uMzvYdkVu2HcMptbSn4CktD4TuLqoxdpRkYW9qj8osffDjAMqEXWaF4ofMWt56Na9eTDgF5iSsm56Zi2HSKAKQK",
  "key18": "3ayzAcnZ2mzQdPMz6utLD5WtRUWGMchde1ekMsBp2F4mt8cz2vwEFRh6euohDkLGM1oj3vjw3PQhVdhompYZ1ec7",
  "key19": "38cLQrYJyyNg1qTfJatVmhZwnFqfcnnVhBgNg9Q9dTP2794wpF2HyNEmv9VBgX75x1EF2HLXBRPHbFq5RhQ4VmtW",
  "key20": "4Th5F9DNNecqrX2avHyLrjccDxzu8MD6AdoM34hMvP5ia4gZqTfot1STmokUL1Ay2Mebi5biuDdawRkXHs3VJq8w",
  "key21": "2jvM1WS9fio3sDqGCgFjU77uJjnuwVQ6joBTiFiJ5crbbF5MHCAXCxtTbNKLyG8a6AQAyeJSfEVCFvYyp3LqFFhN",
  "key22": "2HsTZ9yaqSezVun1TeCNwu34RizQWj3EkFTPRciH7b3zwvPcLddTCDUipLVftuEB179bdAcL2RyqkhhjjXCG61YG",
  "key23": "3YKZduupVrHvXXPeN4fT3f4n2R6NEdNAkeoF7gg1Jya3ZqhoeLZAkwiErPfSTDNzspRJyqM1ZCknNVumnPqNepyR",
  "key24": "2wUifyeGQeziFG33y3PHbyAoo38JFR3UMzHoCTf5WZ5YChoU6HNPi7Ury8Q6t8jMgMu4Zdy9YJw5AivNbgVnxo2o",
  "key25": "3M5rQ6U2JMWH7xbTrFqecPEy9ZxzrNym4hj237WtTsNbHpepbvDRijEWpVkVHRSHw3pzB9iJgvVytBJc8UozfPFY",
  "key26": "2qE6aLXw8psEju4czjPLtZY5nngpxoah3TKPq66RLQLp2ft1kvMo4YUHVKMN6Qkss8DY5ymK1PMts7Abq5m9HD5",
  "key27": "3QxJvT4EuuXnSsYVahF6mHc4FPa4AEVppM2xk59kkFwB3SdTwk1XBLbHa9hfTsYaQrXuSFGSuSb1VtnF573zcuCd",
  "key28": "4YXrSj5uJEPUtdpnWM738THryRx3rdvTEmcKHRpGFjEq8jezHHtWWXHxZ2Md7n16qDL3K1C4My8tqCAcDPru4GaH",
  "key29": "2s92TzaZxoThYM7uNAwwUTjgCnpwF3S6o8iSM9xsNrDVWwmVHe6PGpKkSbsooEkCUmLm4JeXprnUf9341hijEpPT",
  "key30": "2h35pJgFLA9Gr6GTfnqpYQAJWSzLKbzZ9zuMKQrt7ooLaEZbA12eTT7wzGxrNvd1gbprwwEkuuX6rCNu8bjJ8qVo",
  "key31": "5mHWjoeiRdiddwjJzqLZUA4Z4p9fZjbQadTLwyaDqUHMpFkjsY7bB8JZciNgmnqAuwfm5gXXh8TFw9nrKuytiqdV"
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
