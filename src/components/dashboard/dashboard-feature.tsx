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
    "8MxBNtUnEQcmaU5mJMY8M2p9VtkzRz9EgVNCd8PgNgwgDKz2jxmmYpYHEFLwiYUTToA7cN6bgDNfQpnNSEmKn3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p6xq8FKST3MHpASmCGPuKqjYFrnNBkKMqS4MSsau2Auv8v6NsVFcJsaKJAaJoCewu4NxrPC4s3cY51vZxQ4BKMp",
  "key1": "3VGQpCB3oU1QGwjB12mfJ3grHHXMzBoHGukUMMcUgGgcgz9ku64icBcN8AraYR8nXrknTtXCVQMKTb65uKa4HD2C",
  "key2": "5PRk3UrKkW4ZPgVcBgmPew1eRJXTP1ffXjtPntV3HziA6yG5wqvFgZpz56Wxgn4psmNGCPUCcRFdAxe8howK1Ccg",
  "key3": "3FSwPaArb6BHjZrKe4h66ocCNr9PCAcpYp6cNLRmTQx6gKmYkpsRn4zKTWkyXV9siwF1iDok3fnvTAVS5wbr5h4J",
  "key4": "GD95xzidEpr7GMQikC5GNk6U2BZ6RsTY2mBDvMSZkBGUqRNC5haKtTjJmn9onAcJcBa8Gvu9APrGDfxgZEgezxJ",
  "key5": "4AyaH5vqETtVLT2W8pWWD1aciaQzFA8U9VwUdSGZg5weemsEjFtAo4F69JT87FLC6Qg6PmSoySrZzjxxaD74ZsQX",
  "key6": "htcLnBDSgfQ2VTr53ypzWa1xosmmprJvNJ38ceA6Ym1eQ4u6mHzKbzpgDSedQCqPXb4R5m6AusmsxfuetdQ6BMU",
  "key7": "4G1H57DcB33fXtYAf4jaXogbhwExUqFLPcfrnQqxkVsyy49AL4uxrDa4yqgSy37MFRYZt4bZAysL6cJTPPZTqTPc",
  "key8": "5kFA3KdJRPGkvU32K8eBSywpyoCJW8wUxQ2p2qYfC8qka4ckFEyqCGXvtF2cSkWJsSsnaXTAq4K2MnZtg1voi84U",
  "key9": "23DJUHb2wcA7sQ2ePCcKXMprUNwiZ5CdE45Wfd8YMhbjXSZ6MsuW6MooGGQnaDiYGAfh7rDJUL5DRwPHbxhz5A7D",
  "key10": "2WmNMbfVmBXGF9GqimxsZ1HeC47gEhySswwg4FAphcDeWWXPtkKxwUPPQ8XmN8TMqtujZtaNeuxf5hrR48kLzHm8",
  "key11": "5UxemL7riN3tc3R1nNFJ7nCw9ZvvEmFBAXpdbdaZVUFktPiXHcAgnRnZzarKkn4mDDsmEwG1GVXxL2t6xofcnkV4",
  "key12": "2RRxxZqtQWzWAuHD9NBssNB4ULa3n3pFkSkAypWYAy2Wr5HWjrqRSZ5iZhQeBNzo3EgzFMp35sUSQKWm36nC3rAS",
  "key13": "3wwYB3VxQLHqiMYmyPEWLv9X2ya8cnNSBQb1XQzzVm6bPHrxq8mXsbMXbb1N8n4CvMdUwELaJdvs8hgRN18mau6v",
  "key14": "5KyZUdgpMZ41kjbUQpskEARzF7EHU788nShARy6SQFPVxcJ3uqNzFYk2AvNt7Xjzdd9xghKJKoVAgwsdk3mMP5c8",
  "key15": "3y1fJdou6pcFjo1CaL6TCeBMTSuHexmpMmWKRy1a1bpFhbpvnrrvB7NSr2Yty3KN6taoQWs4ygUVVGFAefjrPU13",
  "key16": "4vjMaagjEsQTPWvSbUsfmSdPQLsaJVVkfPhiBg4XERPCVsf8S8URsSTvM6AynLnyAgqGkYPKidYhwXjx3uZJa9WY",
  "key17": "4BCsbTvQydnY4gDCpJF8LHVC8uQj2Y6KbKdkDiLSt8vf8CXhB4ZQ7wYFCDczcgGPvuX8WjmXLaU2qpyLxgnL1Pgo",
  "key18": "4v2D29pj5wEbjmgArqpBecY39FT9M7ZcRXD3fT8NqUbGFd23tXmMiWhqBX4hvuf9GJ8ARh9hNaQ4wEf2ytgSfVH9",
  "key19": "3kBrnwrd3L85Abede1Pq2q8L7ZkYxBdFcStBy9AHFmWBDpqvVLhhddKUvz84K2kFCYu5HntipUiSC3WUG1TkmS3g",
  "key20": "5PvQQTamNq2u7km4nDpEKAk6kyUd2LhjunwzqwpoeZFb3FP7LevwgDA92SVLBLDZraf8XUAF76FCEAjQKNHTJVgx",
  "key21": "2U75Pr4rDg6ETZjAbg7DT2uoHYs18hqp55jN77dMWmf4U2KdEZoEbrVqyeLkxAJzn7QEta1ACPbCuA6CJuSX9fY7",
  "key22": "3s9R3Vipeg6CZFko6Ms6rwG9K9bAb9VyuEmKJnBP8jc243Qtw95XQizYbnqXgovZ4oHPDJDTUE671bh1iQdDzPUy",
  "key23": "23dRdjEPSQ3iboo3Pddu7fEZwwudx9X3V9hVzDhLfzihqcMZ7BPTwmNFAKvV7dsWfw6jcuLPF15AMQxB5KAqhZZy",
  "key24": "4LdXNU8TvTcNi3gyt8bhSKYSf4uhNFJYJ8A31m68rUfwEEPWiTS4AUpVdCbc2weYRS6JQkV6hC87MsbyAtFmXgjC",
  "key25": "5AYanvjK1cEq8yn49ajL9idLas2KtV2Ua651PH7YBemRSkHpMk5Kwz37qLjQyUXd64HQi7dL3G7XLv2Ugx85Ufwu",
  "key26": "2LotckVea9sU9zJbhKaYQpeKW6iNS2BsbpHwD5hYxaXSXdpDYaKHwD3FG5ckAZ7TAg2eugvRn2B2rirmeh7jC5qV",
  "key27": "2RoQLaZDxRuXNEfH5Nm1sf6dNqB4GbTNYe8zHaaxPChuri4Am2bZ3ZyfKrTeh8SJGbGh7zz26nX7iH94ks9QjPM5",
  "key28": "YbN7XyKeFGDE9VxU86mGWatSdkQbfYAPPC1EeuxUR9eW2z6wweoHvorj1j1SRVM8tqG3dwnYjMP4zVBcRphYCKh",
  "key29": "JkRBMDp5qxy349JLxWXbLASQBi3xNVGaTMmdseiKbcvAB6deBzabHVmHdWdjECU9FiCvDzFdF6KLG1iFkDmDDrL",
  "key30": "38wVm1n55JqQx9rDwzUqpPxvQqN229Wiiq6r7M5jq1GxmokN3LFMvd8BzsTb6Lxisnn8cciDwiQZ5pKsB1r2f1nw",
  "key31": "2hogon2CMKenZJkAvsGQoUNXpLtdmRd2xjUWBR1dTif2W5PPbSpXqevMVSCdVjswHfLrLKwY7j9qaNKeHfw2nH8P",
  "key32": "xkcVoEX6DS2vAiv74uhfBXbRC51E4WHKAwACfWs7UmbA9Dc9HawRDQZ2G6hFQpBER9BTvYGG55LAsvNcfeDpvVX",
  "key33": "KciyT1RmBYc9ESRRu5yGMA7eGc34TJe7k9i2np414UjrE3ukSbF5LfnkMP43DBk1dbSsRKJdV5tfLmSyQkL8hVA",
  "key34": "5eEeWZTtLhBmgCBofjVoCrpJ4ytmBavLaDZxr3ZLbdJtSfQu3JPKrM6re9Zh2JwynpgJywXh7jBKhnpWWh6dn6jY",
  "key35": "2jvqYHodUKs8nj3myQF895mFQbk2ffCmkvJtfZ8CrRGjjM17GZi6fMTBtH7QHdXKZ9LYjs3m9GN7ETGaKVg3RMN"
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
