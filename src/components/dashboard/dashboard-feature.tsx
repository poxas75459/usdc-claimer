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
    "35FFEomwb7Mwmwqz927AfAv5xeBYwCB9wAMgUa5Po1nJLPq1YrkXbX6yDedC6ynn47dKdxAJHwTX8DqVaveVBEFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQut7QBTCXiQebhBciurk7A3zCLvtS2zs22kY9XfMAZ71kDbTisZChn94nitofa5yhqEpTwx5Mu4k12v2XjkSgS",
  "key1": "3Zbg2jmzQdJPSjGtc6JZu3asR2dc8UVytXwebU15b4ZyLtcZNiaDS2LSsyHSJxvXnqxpcWXtKyZGkYZrRJ7ZNf5m",
  "key2": "5CgUqAE1wtuWMoEBqwrQCVrgUpyRew5aMh8V5rTEPugMftVNRscGVbLavULSSTkneM1XncmBEQu5WzBCyr2KqSRj",
  "key3": "5krYsArYsC2svXLp36Dqj6d863bwLieJoevKXpAddeLzhVB9rUNfLfWaix7X9UhLnptBb8FbeodDw9BRVc4pYnHe",
  "key4": "5G14eWbGmn8cMY87RQa9zNg7GppdcPZY2zicPRhpE1KKVFRatSAHsN6y8Rs74GnZCtySpYzoJ5ZN9HV25mu6VP8S",
  "key5": "2pwv4LPK8i71ZqPivxY2sgmNWz1rYQ1WwHRuAhhcrByvmFA1wxs6LRzJ64gFqH3SU8iaCF7LjZZwvV3jh1jyJTBq",
  "key6": "4V1rucx6ymowDusHhpsEA28KvUrGwNaeuqG9Ajww6jUrnWspBnvbUdmiGnwX7Dc4HRJfPA6wc5eUeiKM9oTV1pfR",
  "key7": "3xzbu2XvTDRzsRgmruiNFrBrmGUPhqMJuXmqQVroN8jtey4876iYLDk8r9DUqVs84vL2PkhTL81c6X9jWY6MGHJo",
  "key8": "2niwVq5ghv6RqXVpfnJQKvSKA3z4A46HjFnb6k1mtgPPUxdTfq9FctpruL3kJTmBJzHUvXXHYUV5vNyuuKA1DKP5",
  "key9": "3rSEsCyMn5gAZo6WLJeB4Y7PoPgX21j86MJjRhtBvZE5ggysMD2pHk8ivGbdazfTEDdeWo6LgHzF93UjeTRNRNMq",
  "key10": "41iwLTAFjrFFVTth9JqZg5z3xpbKB5ZeBeJ2hhXCQcsqjfoAfGzw1sBHNU5hqGSdJi4P9ZpJajrx6wUc1FUJMHfS",
  "key11": "2XB9sKAoLsnR3SqZU3xwimEQGSaqpYSVt2wnpu148WGaCGW4bRAJ7siWyWb2g61giiDpE52191jzxaUPaWqs3Pin",
  "key12": "3gkNR5g9tZSTL8FpPacHcYxXafDv149aC7VAwkWZQffApaF9SgZFNR9hNb7LWSj2VC7sB59xBymALspjs4bTP1zf",
  "key13": "3JErgdjYV3qM6VMkYzGyDg1Lui58UDErHNw52M9mUCAdZFsHDf9HySnqnNVfpDC9A76JW6cKTCb5arcGQaeJ8S3W",
  "key14": "2q2RMNZi5JCJr6Ea22Hp3dzvJapff1FLkcdhKDgXdECRxEFrffGEtjK6cDMggH3Wa7gxtF9iGbXG5g5kKnAV11VS",
  "key15": "3Gc3JSssJDNd7XvMXEz4Kr16pf4VgT3R8gUGR6GtTFUMx83wbfxhhAduLgUAscGV2cXbD2siVxszwLugAmux8SuY",
  "key16": "3MG7LjTUD6SNvmMRB2MQoYLne7cfoBZSxXom7JbvbNnsc2HMRFvUzwD4PXTXNjLb7KiNSpA8umT5KKyWu3MXB546",
  "key17": "3AD6K62Pr9mSLam3pmXDqHhhTCC7ywcgtW6Nq6RxdxfnyZPhksiHityJgXaSCJ3mztKHkMQZF6MfCRhJtLgmUey5",
  "key18": "1YDC3cccz5ctYu3veHgJZCPFMUvHf5tdMtRCM1JJiQPVsSac2WpUshHN1GBF2Uu2KLnuAmqKeDhaUzwMgmmJ2Fn",
  "key19": "2dJ1UmbnBGB56kzzZLUjDQ9wJ5owCDCyaF4gnCo5yrcZu5YyMUpAZbUGnV9DEoTn1ygpKfjhdWBhB2VYDhkypYgS",
  "key20": "8dWwys6UGgxTihu1MKoesgz12jjByWR8KSyFtPGq2b4ixuAjCyUGn8AczaZmSVaSTGJGMuxmsvsXkgkNPvB1RFL",
  "key21": "4ryCTAC68iNWcw43iRf9ZbBLeTk4oTrjJJcCw16UUn8Jh7S6b8BMVnLdUGyDrmxxvAMCzESpsyvDT5rJkQXtEvsv",
  "key22": "4rrxQFydSeXG57Zb5hESgDGqj9wJUKhW6mjT3GJg4rc8gvYmzKkZxYGWArrZuESuu9eLcfHkyQo7DnQWgSuoNikY",
  "key23": "XcYreqxLi1WW8NmYKT2uuRywg4C7nD2gYisY9uctMo5EjRLoNTEcmhFQ22z8BYokA4hN7pgKHbp4BbZRTTTKR7o",
  "key24": "xUNB9yR6jBZg4apEQn2VrvwTcQWSpkLxhxb9mmbcRdd41tgseNHNgZnKX7bcC99RZc1RDPH5Mfyt3gJDVhxDLmd",
  "key25": "4Qm3wqNvE6HUHH9zpZHYbS8HbVLNTdSthenVjLbHmmvTthvdEVhKQi4by6gkJhXL8MBiWQ7jxi1mZPkTfdDqbHpG",
  "key26": "4xzB9y4nur9B7WXckfknopYMw3q2vxzC7ZBTeysCrce95soAbtawvYXmh2e8VRC8KceSNEwdWTaujtDQBDgEr75p",
  "key27": "2Y9wAKVK3Mw61yjex5uB4GXnsbB8rbJDup1LF8vZBtpmk44d7qU1tELTEGsGSmxM63Da3pZJKLWCJcXZDjH3Hax3",
  "key28": "3GwChHiy1gA3KqsGTg17hbJrCxbKQam625HV7gFgxaUK1Z8dEwzBdyAbvqqyh8EewAhqVqCcrp9x5ouoAhG6juaC",
  "key29": "wKS15qNjDsqrcrGXC6MQdbcTGXgyS1qeUNQunhqBws5wVYwuXE4MwTybZubTWH3khr8Jh8sPR3QdLzhPPMajcwg",
  "key30": "2q1GT5VZ7kEq5gm1SKWT1NjMFByzsPdvYDyC4nzuYjEsQgAacBVHb62458HsVgNbXBqbJRj5YuY7Lc1okr14uAvN",
  "key31": "3BaDLxEmhbqjgf725bE8a3DVZb48UtPr92eJzeufJLx27Yhw65u9ep4UrzeHsdoLcTDrzBzeL4pGmBQvfyfYyz9E",
  "key32": "5GgfVU3VvmD73y6esCVYHWJ85psXrEV6zkMC6tbMoLsXiMgEXkXeaGc3LVXtNE3Nhq9r85LtmezRcB1ZXg1HuRK6",
  "key33": "3aC2jBahdyDYrunq5GzEbjr6PiVCdiKcJ5TmDYvJU8i2LbYiRqnPmJNv8hdWoZK8ZSTBqv4M7eJPWxhToTwSv4dt"
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
