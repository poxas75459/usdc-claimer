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
    "5yWPhAVaPCCKmvu1fJqLjw1UFzLnN8x3eUBTTpU3aWr7dEQBi5tmoSaodjQmv9J6dnrShrwjcxBUCBTug7vdwQoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBM7JcwEjwCQYd6GWpWeJdSpiwuwU4SaxuKtiwEuu1BkEmoGnkpwSqY9nyR8LgieNtoPCQbmNa4HvRvbARcE5fA",
  "key1": "n5SS4SksGP5dd5i8hfnc72FR7khCwqWWQGrrFCzg6y3KcsTKrYAgKLZmf2K9j1YTTSxVG2McQBwfqk6KEmgzSA1",
  "key2": "AvG87dUvLVGXyoQ5Gi5uesfwyXSo7dTwpZyDoSqhA5VtJGTFhQXu2mLK872NE1RF3Cc22EDhgcjread75UMb4tz",
  "key3": "5GcD1hMGWwcC8VwvM83hpyQako8mwgywBBZCEtZVu5mNh6qqh5Lhpj6LwkzRiTbcbAmdUHrur5kFmoQs9b6iwWAR",
  "key4": "52G9uQtyJUqGZ9TdFtqu8dbdCB5HYu44SKbMn6JqFfPceBWHLx736M2rq7x8JGLkPVfKmufKkN5W3hizeSHy2ACR",
  "key5": "27SFxCMasdVt61BciHG9jndaVmsDzkTMAkyXLBvBh6HMiCbKrRcfkVNpg3M4UNeFUF7y8zpxd6bTdQUVzHpuk55C",
  "key6": "2rDMQ8njb543ZXa1rkpwiPSjoLFpcRFtWKg7hgVvdksbWG6T5nBZ9W9JMNQrzuCHGQD94ubWnteuwUWsq6ALPXzD",
  "key7": "4rBE3zPzq3TrLgeb2i9ves5Zze5K8R3wZyvhp6FycKwX8gwidUfWQwDEkdHCqLJ81PdETfZScXWmZCTsAfYJoUit",
  "key8": "3PWym4rGWDiavMvyannhGqpomk1AAMC5upHmV91AHbJ1UBJUkFU1J8Nexc5dwS4vXdJyDgq3mH3eo7KeCoQeQ8KE",
  "key9": "5uiQtLsxHqAZjXx5LzRUQciJmRJoVg7o8oT1ntm1DQh7J1dy5xMWeHdrw1P7zAfz9QoQ7HKAWpdKSVVKMkCWEDbN",
  "key10": "5koFBV9BmUtwvymwaAyFKFvWeFTyau3tvTq2n6L5i5VRuL2VR75W18gBKg6dbN4rZnEB5DMUCuTNZC1ZCA3SyWoN",
  "key11": "4sHYBpgVA7dPYFWMv7d7j92zr2DUxsVnbHwMaGhEoW2AiH2SA9WByWsCH82eYpb2FMwnYgk29KNmrs1QvGfCj4tg",
  "key12": "3vF9wg8xzmXVV6hjKR8A3XK9toZu2gdZs6Di4TST3FdrzEBeTaGmYVVLgcgK4x3BPy1TvKWnHY59tx1h12zYVDm1",
  "key13": "5RuGTwudzB7ZrfYyFNGmR726hdptgUXQVASBQxfWAt76SaVNqxBViKkUcktpR9JsYqTx1WPcfua7e6GnuSsJf2xg",
  "key14": "cECyKSuYXB9JqFJWDtwZzDPhSBCpDp3RAi8SyFBgmtRBSFL8ZqUobajQNTqChYG1DVGtbXqTBeC74n6YkHbMNGc",
  "key15": "2iNzdPA2ERKaZZinw5w9Vk9dg6Bo4Zjs53F6U6AL4zthH67EeFiQSVWVVZL5YyrfhCvPBQhR4RbQ9VSUKj9rfw3g",
  "key16": "21YjYJpqdj79SJuSJ1d7PZMihhXuVFDpYL5wyiwPbtbBqwkfxqa7YkeGR7kWoksdpCeTuwkMQvpVFyrTnpJvc8JV",
  "key17": "2F29UYkaieFPUxbKbZUZAcLoNXXi7XE5X8nhfhVFDLcwTNc3BuDjmcucZBm6hbfcGrgdJZh1bBkVu7ze6QzoeArz",
  "key18": "655dinUWwrNcZ1gQJ2ZbuqNaZ71YFSJ4VuAgUXgEdkCVrDd7cHbiWwEwog8qYtCvPVvDyRdCyRxMWg2i2WgMM9Nv",
  "key19": "k1J1uEMjZk7jJ4j8DFyKBcGGSb2sNm7XjcafwmyKmUA9anWXfW1gebhC5H6XS4NjpWp2F3CRKeAoydFhZjgLrk6",
  "key20": "FwL28UyzmCdqxVkyqA1RyrNMzQFkqyWULJHSCRLnzz5N8Ff565v1XfTDwCxu1RLjwhcGKCoZzPpAAmoDcAjJhp5",
  "key21": "5SisEjWZvVzvmKbUaWPND8s3uQ6oBnGSUFBrKdpktiWMVPn5WkCpRcAsdFovDMHiwuXGLDsQHexhSFJmC1NPeN3A",
  "key22": "3s4P2YbhVPUuNzgTzJrnkUmy8SuWmzvCWmZgMe78tsN8CyWh9sqdeqbXhgu1yERW55RLn8jAwHtTxB2bhTFqab71",
  "key23": "3ULUMVuAoA1F6GVRC1HqS1WD3rmpwa1A7gBMYxoguTyFJG9M2PXf4FspJinKwzw557FKE7t7JiiDL837w5A6vAEH",
  "key24": "5BnDdmDvwMpkRS3FopDu1SrETCzxojneUpfgWF7ppiFuDPDurdfiS4DfkPEFZBCC9tXKqiReVKhoSrevw5vw8bEe",
  "key25": "5WCFajF89Br6HmhahoBhomR5Lbgoz82CpAT7mJmaqds3qUneGyJM5HzB2gtaLonX6xXs92M6ABjgbLXkBxZp1ncn",
  "key26": "3KEtLDrqeNCQxHAeyzF5mTWBxeFLEgovQogdr9TsD5Cy5mTeHsdKrjMKPs1NuyjgJGaVy6VquKX1opSRnZMXtebQ",
  "key27": "pTktKt2RasPgBVWuoArJQJ78T2a25dGjtdeHh72p2YrDx9ipgKD3astTbFmTTk4BgkHj9DNgfkwPrWtVeK6bLZ4",
  "key28": "4WziBNRabHWytnae36KSCMuQ8vamB5YRoZgYAjLR2pXE284CMrDgPuF8PqPx7gzf1bkqku9y8C7ngrok9Rx7RaLa",
  "key29": "3rYpX71ukB4yDEzcdCPWb3EyMVf8gbbNbfL92NePemiFSJSdqS8JK3zzRzepxHiSmAggGH6S2WkJ5mZ557b5d8JY",
  "key30": "2DEUp6MyzgUg4ysXSaUQa2VDs9ZKfX51ywA41fP3CdaTpQnidE63jhEcq2G9xbNnAAy4m1oeS99WoYZNzn7KgPHB",
  "key31": "2VaWT8vtdFQkaZ73YXEMrPqFGk9nDwBuWja3n93Kgbc7DcRMbYNrxFDSw1QCX3eKmHs2JPhjiLzSNWA6rY76gGGK",
  "key32": "24fyY56kivcheVYqe726i582Gwmf1yybBPSwxu9DvueFvueWbcyC9khen9YWSYv6UywLFbkJpJLKeChXYb5Q9c6n",
  "key33": "3sMMfS5Cc2SrVzF66u4r4Dt7SehFk81uT8iqVDWKGdB9NoVRfEnG6vNL4ZhqLf6jt5yqrSB71fdnLwMzS149Sf8S",
  "key34": "K8UHGnLmLEPKxH67yekBY3sqPhH9j5S84ra1TnY3gacZthNLF3G5mtTKSmQ2joHdqw8HFEqK8FyQhLCHaJdSauh",
  "key35": "4QvGimJotA6CWWQ7XeMFLXfAg8Kub8FZJqn85DzvPN8aB98SDkroXkfqrF4UBL51L444vcdpKt2TpkBUhDxHDkpJ",
  "key36": "2CsdxXKENNZFmh1TGtKvks77DBbQmYJqKCE2J5d1LtDQBq1xPkJ7Nr4F1MV7HVXHzWTUYBxR9bC7iEzEeTNRsr4F",
  "key37": "5KaZ6kfmuZa6cFrFSjCtnh3ZuWK6m88K3tzmfVgqoHKR22N2LG77e65Lz2PZTbqM2CrWifLHDsERk7ZkxdXi1NKT"
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
