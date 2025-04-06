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
    "2qAnwhpvJvx8ugEoFgyzLa2YDp6JDAtmZZRx5xUHiXzMY7tQAkY7xuyToFG6tsMP4uUzYGtw5J3qxhgg2eDLEBNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28PpbowNdeTaAptD1f97oAqKLy6b1eKHiAes6Q2AXfts7T92gSrFGysncuCFdoLVHfMYemi5R9EdUfgMivXtkA5e",
  "key1": "2q2e9xQZFcpHMSEoQH3u5EveYb5wLQbhvSBomoVJDtco7c54quwY4gXgv2SS2wPGfvmYWkFiWFG9sEM57ofk9Jao",
  "key2": "2bZDzsgFUAcVVAndgfxSksahMPZtBsrMFdUNXAwhAgpcGtq7iwMgzFAifR1oWZtjCtGz5anLjmaHsh4WLByEokb3",
  "key3": "3PnMuX33bfTj8wEZfSZqWTwB45GWMFXeRqBLjtPAx75EVKKA4gT9rK2hY59nr9XRKY6kFpcbx13jbFWyuCTakRRU",
  "key4": "L1J4zHQEF8wxDrJX1chMkJFTrL8SsmJPoHwBjFmNQRTrZAynqKSJRGvRWN8vRuM13umeyq4h96QpFXMNhhWyEh1",
  "key5": "6234zVrLsMund9hvaHWMKPqxU98S5t7WqWubgDXqXD5ZBKjJZee3AemrP9VQ7Gq1M2n9qLUopsnvJMPhqqh5mnmn",
  "key6": "3YRhxknWA9bmquXBWZ3Dum6ksyZAHXu2BS6w2GRgrXtezSZXgGVzg2insuh4ow5aHTfdeae9ZK3iAjjbCknoQHkj",
  "key7": "2WwMJhNPvT1uaCQkyviVzUs96e7hgHdJQvVaxfpRAsXdJUH384HVZ4Jp6qgQit6QKsjqF1dvwHRaGDuEMimF1Roc",
  "key8": "26jG2RqaimEYpmXRjc3orSR9WUa3brKJQtDPhsdxXhs8a8WSk8DG44GaCXYhekEypAe7JMK13yTq3xVnwhxtJ7bT",
  "key9": "4TASHanQqGeJJoBuQdQWi5kG3DiQvjGszKHr8hdSMsNypSGEzFW3EMC1exFG3FkGz43ErazLCdZS7o95hRgKVdXQ",
  "key10": "5KfYD567Hm2Wk7kbtmUzqr8ZorAGMumMPutLYarBqY5drJaejpC83KydmDEgUrrYDEmVwj1UooKRLCUpKNcLESyR",
  "key11": "vFou93HGTYRN7yhg2WnYVnfVXcyajpm4rxMZmZjz1jFgSviWQ9BfFgxPVj2ottfNFnP3c1ui19rWcDaMSvuPsTp",
  "key12": "4887vxhnfEnBKeXUqwT4KtEFRxgJJMjGJako4fgfYxLSQ2xEVysYgVXgbyrPcCkMx7NcYJ9oJksTL8sCppYK7sWV",
  "key13": "4FXqEC4LETQnE2aJCmQmsW9BdhZ52bDsah3FFw7CtNwwTZf1xFuCeaHKeAA5A1pTeyJw4AfT3sCiWWvmWP8upNBc",
  "key14": "HhkxXdjCNTud5eA6rjbvgPmnR9uSC9izVZGuiFVSe5DY1k9Ubh2cPxjjCXvUVMgo96pUKycyaQcgbuYH774SAP8",
  "key15": "386x6ekxAXyuXFfKbJa9Lyk6TM13vpQEwAPQ5i5J9R81ZR9gAeQLUA4CH8DNG3Q7x1Mni7bfhfYT3oSefakbBKdA",
  "key16": "3n29tigdWpkrbdRLGkjs9GnLeukP8sCfFLLAZr1ZdM6taYa8ZnepgfRKEhhacMmWRCes6PcxWRwKopvauUsiWzxX",
  "key17": "4LR6d9p2amvuPYvuR3mAyDAEDLCTJwgMoHPYktdh9DtcjpZeyst8eB7EeRsbkchjUphwors11mz1L2qi7ueUsfWL",
  "key18": "FBRdJ68HLVfQwgQzF5rrUjxoS7YnVWRcm8fWjFekZzte3VqC5pV5k7BAJ5E65wV1eCoYow9eshmxeWr1N3kyr5Q",
  "key19": "2rXWktaYuLJDMZGdEKMpt6GvkgcDs2znHs3o123EzayExg8Q4BgDCJnieE4jRbUCaqtqR9478aqPX4waF6uuanqA",
  "key20": "YNJaJPmMfQ4kRpXM9uW8ePqexsSLSyKGGSACdWKLhH8dGWwobpt9mbYkK7ZftVtfjXN6Z2nAdWNG32SwmQdLrWE",
  "key21": "4RnTwy7xJi1pbDSX6MJPoAQUmMfmbtjBYB7bCLS2rUXaDbX56semKS24jRpD487fW5KFmfRm8rkMopTxz8AeBavf",
  "key22": "5qVBK32Mis4oEsyx2Yv9hVNRPG5Wrfz2stCNpE6L7pA3xR742pcScNp6MdNskk5Y9kEfBjJM39LsFvh4NyJL3HAt",
  "key23": "GLqAcPkFZM3UyrJViWfHaZFWTLALgDNqTLTRJLgZygUWmehUUE26BwmTEtNDb8oMwrQupgucooK9T4p8BnPHg7X",
  "key24": "4YtHsAaW5rzEdTqKknKuJLwDuxjt1BFnvGyAgeyPtZVDByLhEhyCiogom1CdkujmFBrCusN5dsGw78c9LwJSgPr9",
  "key25": "4uLJ9pezBh4AqQcguRPeq7XoBtAuqbiZ8P2bXXGdQecKDfU9V53nR9jCE1G2YMGMuUy4yTwuPsr8k3FK1dKHtMtN",
  "key26": "65qfurHP7Ldw2kWAg2wgt5ov6yYb6wS9nRaysYggzYRfCUzmCFCk8SXfbTpMBdY4KkREHPUhXVUDXPYxXUsAziDN",
  "key27": "2uEXj2SaQzttVGvo4XecbnohYLUuc9qCeM6iWVyuHbciRUWaqgLXUGHnSTqVAMeRZPzrk7FGRkqxEDuCuDMboUDt",
  "key28": "365we8LDxoaxkhcDx6xubZNLB3PRGt4grSZACZboGkmYKjzdDtHr9XSSq8jMqikRv4yMrZPPDGV6f39jo8jvwbTd",
  "key29": "21jW1db1KfvF7yThZyuLfbXBnJbEhGxHDEorct6pXnHahKHu3caL8aAXnYeGb6vqBKmtNVhZfVoRGyDHAGmKK3WP",
  "key30": "4XQHGLKdAyiUhedgGrgMbBi5ds7vkJS8R9LntBrbByGuUyGFCBSXrs1ooPmvBRsjLUBPCFMQNHU1HZJqGKosSmjR",
  "key31": "9CqDwBtLqKBsk37tXJRA48Fs45oBz8vME72Tm4kaobpoQy7h3debaJiGyiMV9DKzG9QVEhB1apasV5y1mhDWySC",
  "key32": "24o5zGzwY3sGxksExUpQ3M2CHZHMVGYWr95UfB1L8MmSBu3C23oZiVYdSsHLqomDwMHDGPHhbGqQouBFhBjLehMX",
  "key33": "4FDdKCiS2m2EHjCXbkNBEnFr9SjuFrJuVgBQAdffMVjMy2fae7uHpUCFtjaZuxUZNWo55Kk95TGSNG7FexJGbtsT",
  "key34": "211XVEpK6whoU5qMyR8fjk7Cy3MCL5gn56hiuNEBfwQGMNyJH4n8L329wZB7rHTv3z5DFA2YiS5e9E8T5YgNAEfT",
  "key35": "3SDgGpHDi9CrA9Xkf5Um28G3aPeDxHvkDvQSvycLWerV9diA2iZMHk33SURdTA2CxDf9Kj2Lp5Z4Xw9Rx6JFWX5B"
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
