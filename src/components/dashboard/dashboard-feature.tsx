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
    "zoU6SWxKhtLYY9QJzqDNYE67PcRiJXbi2VS7i9QgxQoQqdA34NqRsowzzMrAuLv7NZLyzPdWxj2Ff9o4Vgr5UeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cBzLESfr34dx93pqoPXPktmPsZCP8wzrDpbRNqKvtw6cv9XbexSAmpg23VXSqJBnzMnUCyL4XzjvCeAf3sKGf2r",
  "key1": "4q2UxRvk6mRiq3ZEWeTNFKUTVCfYFYDhAr7uvRt9NWhS2kSCrdDrb3dx2xtCVKPvWPnB2DQiwbAb9vTxqeWYxmP4",
  "key2": "54pncuRrY6NVJ2CHgxFEXGTHTQcyvZKfpEGqoaoFXtKRMqpCirHnTFkJP2YQRQ1PVCtZqp92TBVA5nesnzB5qiSK",
  "key3": "2zt5EcX1y5Bx7XYJeK8Xr1o6XoAkz6aF1hMj9KNBoyDcU9n9gJSGbeh79QzQfeyiK9qeQZc2VAVyunZdLWYYZwjm",
  "key4": "3JCYRL4352pjYL2NfoR7DEpDKbj1wwn9bxAceBQxjYm8WtmmbfhS1EkoFSqQ7Vs3APSYxHdW6shNtaftRNytvLE7",
  "key5": "3eiTkFSZnhi8Jikk6vxtyLb7SZ5TofcGMvkEdwrGXwCFZ3zcwGS9MqwPFaYYfdW3dLExBKDWvgmjfWmyPKvWE4Ps",
  "key6": "7o5MCWNKXYr5cVzTQvQEwREUeU4rJHki7pVfugAeppn1ZxrdTqSXovPyRtsPL89iT5pq8KNSUP1nnCF1zAyCiR8",
  "key7": "4zvgYfuRUbjR6LdEtk2xGoZwGMJRtvU49EwBxTuyHAyXv9mNA4M9hemzL9PZVduujMFfU4GfM9PcHL8J4BYsdtah",
  "key8": "3V51Wr8VTb2MGYqLrSozjrquzzpiZZKzaE3yz6p7ycRbvJEoXjAHgLVYJ43davFx6S5RVEpB2ghbBfXsZdGyPtwr",
  "key9": "3DjxPrkzoshde6h2Atjh1NkQSPXsBTBnaDLTvsSFbhmetwKD1c9ZMrw1cs1oj97SkqtyGAkEUnXz6hn9FsyNXQzS",
  "key10": "45d2yc6n7rJAuV8YGqNWcmtK2jeL7CcAqLTZ3oQYx2Uq2Gk1FF4PSnhm3bKjedxf1PGkMjvgEtJm5tHtM2uyKYZj",
  "key11": "3qtbDM78UbBQz2ncVRSEPwaxQgb38HbdkkUBbmQZZLJR2HH27gxkfooDcjPP9jXNafRgAWiXBWiSQqkdZvhY6pbs",
  "key12": "PFnd7MGHXDoqmpkGA7DmdmmYWtLhuFf3LJkGYqQsQ5s2gMej5bqCxSGRWsXNeU3ZLcwN9C4LTQUrZ5xPeZT4j5h",
  "key13": "3883PSaKVL8X9pYtDmWxKzuyGJmrFjpMnYgLBpj9SaugrsoNnoUXeZEf81MZnWnBeajNF5csvrXXV51ftPLqP5ud",
  "key14": "5yrSRftGwtUEPRMBsrsHW1NnkSKbJDa1TijMgKqxCjXwLFk7SD9YBvgekL8HKLCPE2oF6u33pcBghBxNS1fKJRpS",
  "key15": "5mH7Sk36RoDUKR9zHNcDxqHLkR6BUYv7qsoVSfFum8FGEq6k5exQ2RVNKtDWcYdfni39qc1fwhSZbqgy51V9BGhr",
  "key16": "2QizRu7Wv9vq7ea4buotxdhzFBB859NYs5FcGnxgycsDHNSX6JyAnQuipVjnhX2MNeqZkPZbWwwHphSVtGg5ypNd",
  "key17": "2tnnBvxPa2mL6kj2NmDeN7aAMSKHrTK8qNKPk2A8p6g2VmZRKuWJjVk1F6kpUSYDRK82pLr8WDLozUTWKmYgH2uG",
  "key18": "3cLLCP96Zd1Wp6JmZYkb276HfXSUW4YMGNeRLKFfed33DaMbEpqtz8bZg1w8QtKbhV7f8uqVi4eesJMcr9boHtni",
  "key19": "2BE2Uw29ipSj8655XLtpRZJ7k3QANzvbHHVz1ENY46HnZLFmCmRP96qaQWu9Sv574GvwiE1KUt62bH67FJ4QvQWG",
  "key20": "5MzFdY63KBjiNRwDAsiZP5cYto5ZxoSSB1KYe4xMXS5b9EWoiJAsTugZ34CKMBiDVMkvCaRmAFMB8YcjNQmi7kZX",
  "key21": "4f7QJFTiTzxZQxmnmHUumM4aM7gZ2muUYHV8dJ2CfJNW5K1keRuGAbMNSpXZyFpdrLnyPcrKY8SnKB3AkYyK47ay",
  "key22": "4ipkC8QaA8aKgamydoKaZtnA1HVLC5NnBotoQU5s2MEKFxhKpyurkwdXVCoTB55tD2WSqotx14i4i17tTNyuwxM2",
  "key23": "5xsJZkuHVGSzdiQhGyt5PmZ8TwLLBNuCWfefGisCe31YbPcnUJSVnmGuw4Nj5SHbUF8vRCE2e96HFjpX6uYXC8aD",
  "key24": "2mh4XrduMxY4DZq8WVLb7fbFA3AWonHxT8rTTo3zYudDiDEPVqecJugrNXWkwfAFhEEfcu2LQ4WLsoiqzxG1yfW7",
  "key25": "5pUQzE26AT51aiSuNGGNtr3SNTpqbEzV1j1pbqNRuXghP3sn1JjHjqos3qtL1pfoc2Mkoq4EEZBUkoFTm1acW5qQ",
  "key26": "42wbL1hoNug4biJLGnCVjUQ4jtcgrvasPaKxuQKvPEYwxVXLnAFNNPZ4QGZYDQqTnkk1W5GR8omz1vy3ww3qn2bb",
  "key27": "2eYPPwyVm5YRBF6ZmmurCaTn3oHcx9AaudwyJpWso395MjSjNTdErGPci2tYTVhB6wa57Jjy1praNhdiuG4XTTcD"
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
