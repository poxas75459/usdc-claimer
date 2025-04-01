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
    "2bNj79pPhtWw5XGjuQxMzchGv3aDGLxQ41La4zSs8aA1oESAyhbeZXmpScuK7MFh3F7wYaWi2LY5UgaUcgAfeUZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xshQzniiR6ob3i5WSaJ3EA7UjX1T5HQWica5mwuC28VYcNXAJ84V313wW9Nm7RSCywa1J2kWit94HsK1k6VpMdg",
  "key1": "5cp8uo4gxfDX6feWYVs9L4HnweSdDWMsQ8PnTNj47RLQ2HXgoWJpYJaJ4P4h7E4biQECVkEf3QtBcN3VubrhS6Jj",
  "key2": "5HMzrCgv4BVehhyGdJP72KypNiHsAb19yBEwcc4HoXHsPSk6BuAY6bF71HTxprCcfQnSxyUhmBXEn8AV4YNnEJtc",
  "key3": "3aUVd5f9tKdi2n2TPmCjxFNEdHf8rgEVLGznDp5sfEdT8WUqmjR9YChC8mpcdciMVfCdRF1bMgT3WwtYH65hA87Y",
  "key4": "4BNmVJ74oEf4HEsn97eSSSqMkgTvkJ2JmRo9PUBaLyzhG77uScAsd2ccEP3CwyHr9ZuctreTAk8d8VHZmP8MAkcr",
  "key5": "2rk7UNV9bWbFzt9stMtysnkjJavdv9CbdUKufZ3p577kFW5pEiEYJ1WUS9eLs1MxWYSsvvA43GhQXiQb6izkfSeR",
  "key6": "67A9pgCG4j9JoKcfcKxYtXf9hcEgi9eSgP3XqnpMTrPjQSSkfeJXnAsgwoQ1qvfPCAzSnDpbdi7jJ7BuWtZL6nL7",
  "key7": "3Lk7CsCBrptnHzZWLg91v3tMmxAZKCrCzRr9fQ593XfvBhGMSJWY3U9kuFdogZ3NMzo2bdGarUgQjXVas5f2nv6e",
  "key8": "pzNybtRvEfT5Z7uUGM3iA8KoFXPMCoRNWXdirWS3cNEs28LSAwudjSf5HkxHFU6QdqrpSacBX8bnsXGe3q3Va6J",
  "key9": "4gDNrcn6ZH7Ta8tomf7bUVezQAFyuuMMzuyXd6q3xypqhV2Em4cvSKcCzwWJ6EWouQxsTrnF3fp4J1E6Pf7cgUJp",
  "key10": "5CDvtykK9kF2XjbiRBht2qdQtaWdkD9rRxpiBxy2dngarzuT6DqZpwEeADp4keF245hf8DJb7vooWuJMvkXKRz6i",
  "key11": "4zSr3z3tZciEPxDtT8T2PrG8JNR4t1GuhWiDhZhKXeUiRi6pm3WKsetNZ7wWavPzqPzSr8c3Px2FEmpzfVvH27GH",
  "key12": "2urSWwAkzzmKoEJ8xT46GwACm4MNgLsG4LtVjVHKRZcKMCNTkDFiBkFCm2kWsNRib21t6dKDaiE6zzJ6YPAAy9UR",
  "key13": "4xcyiDgS92zwSCpUeSSEqxGeH5YVAcw3tjRndejntxdZ1vibKYqM2a5sv1dwQPj8L2g8MeGhGpCaPvMvSyZmR7Vg",
  "key14": "2XxyWHn1RoYjgTJJK75zBQy6q2rWB15UsHHmFU7xCsWsFuJ3cnnz2BuWruzhMeZ5vf2UqZonw7UmC56HVWskKyiB",
  "key15": "2ifyYb2R98aE5iykXZRbjxcuYRLoNsRi8maUqZaqncDiLEzxyG38MqmRrAQEhWcZimZDPVCPN8CNLW4qCFwwtxGJ",
  "key16": "L8uPeHoeBbFqBB2FJ4AQH12dq3qgbpswwKVkEk913k1ye5hf2qZGZ84PTbYRc3Xc8HbLHYD8r6oJQcAjygrmY8X",
  "key17": "3c6pYfCGD7LGyo9YMhp7ZeS1pM5jCazjXgNcuhag5Pk2sy6VtP7qdqPbVPDyua3G3137bmSfr4Rq1RNSFLxVToGc",
  "key18": "4vRy619329uwUa5ZnYojWnXdeP6tMk5YpkkJN4Qaip7bnYtAnqcZbajhDTq2GtwJ4U86KzBo3Kex6PUb8ubkVznR",
  "key19": "4QzkEFjipWUrGtUowPbKhaoCuXkYnGpWBWPmLLd4z9p75aQKwtd1sd7gQMEviJq6XSdJSnW1RFQM8awRxWxdw6hW",
  "key20": "43N5BQSVeuAH43fab2RJxqQpt7C6c3rakGdZJtU44wHjJo686TNoEkNzMgFd8ppyewcQsckNBtVfZkZZoTA8PMDo",
  "key21": "2hkyNrZ9EWk3PYKykWHhuiWMikRPGeJmRcUwBmkoyCARWz2SZfqwysJkEDHFC3VavWv5421fB2juRvha2StygEdA",
  "key22": "2VMYUA6JkJCGg4D7yQRJ8zEprh5GvYn6KCJYtgBnFr8Tb7vpVDNaMd4azPmJV6buBsexVLLb6jePEPKe5Grq8FJb",
  "key23": "2kP6GZs8X46WRMndwEdbJQ6wxf5DcMCJGefJZPBofrmA3joy3tDcKAN1Az6BJdb2yam2heZ3Sxf4dxFqBdZsGYdp",
  "key24": "3ZRAwYiz7pNxwFnk5xRsE1VMepfQQpxwhkz6guQuJGDwq5CvE1wSr5W6hv9YdYFtp3xhnZ6eCwneHMzVB8Sp12so",
  "key25": "3ahifibpTpKMgLKp3fCJhuxtQJLUMThjdxTL9mnrge5WsgkL6ahjJae8RpMNcn3958giuAJESbPyRYdWH1RVWyo2",
  "key26": "zs8wSppFhT4K7PiZPzmXe6qhLQoLAeiX6nXjQf38B55MaqEbRpnvAQ5FcHrE7Fa1L8vaKz6MM1gVU9ZmSLYMUFH",
  "key27": "5kYGwLAQ8jK1dEgz4EphSNsbPXxnbsBM7d5L2L1DWd19BMF9CAMoaDNqp57ZHkTvPkV2aL8TLcHyMWigeXJJrLAg",
  "key28": "65kTRN1XPdMYmNiYZnmZwsXjYuEZLozkxUjKswU45RKeXdcXZDo9YGibecyUAHmvREKEPZHpNUPPEWhxLGX1S5bA",
  "key29": "5zM1S4u2MVdB8QcosFqViCLa6HJoA5Wfen1G5p6fG48sjFYqL1wZeQ7DjE7s9ThaBFPm8qbrqpM2G7kfUAdoWgRF",
  "key30": "4FLzqSUGW9tRM3jPZQr37WcjMN4dEjkpaZwthPwqztpmoybbBfikihjecLXvgZ46Eax5h7mLWwbpKZK954BnKSqH",
  "key31": "5YD6VVHJJsSJm2JkfNR5Y7SQei84U6kKLcnBkG6rgtVuUF6hFW5W1EuEArSaPqR7vBNfJYUg58Jb4qU7ghy6brqH",
  "key32": "5YZZ5eDSjowbJLRU66Sr9LQ7rgGvt4qSdPo9QMteCmc5WBWDNUJdDYo6cku6VpAnmQSniuLV2UdZqn4dAHq9Lg4P"
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
