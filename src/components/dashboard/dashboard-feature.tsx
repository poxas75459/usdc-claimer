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
    "2GJYnLwz6iVQZpJjRkcUhXt1h2nWPXheowUJzbymMfhi3u2FtakSSgGh3F5Y1wtH6kHvxhoMNUybkJRCyaHjq5w5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "McozhqwqUFupdNydcMns9gw76G7pv93kH8TsZZ3tMCeDqCMoxvkHHjsERqw5oSqxgkKVu9czrR3jmUmGPp7LWrw",
  "key1": "653Qjt8UZYP6RNUYjvJMqzsivqHNEzqDLE15oJHTnYdyUa8u3exrw8MU7exf6P1PtmUPB9hE6K6tTUZ5JeJUyEYp",
  "key2": "4xkBwzGawtza38vUENZouXzZYEQPxUZXqGcUp2B9AX38sYqJx6e3K4yShqUZC76jb2ZmSR8TBBTqU72mpHd1A6TF",
  "key3": "4qHXwPrnPPM7L73wEYR9nVXXppveyhrGMfhevy3Ky9ANt4Ey7xLRAGUoWXkvy6YGy6erT183saekrmRUdbk2e9ca",
  "key4": "u2yC8ehckTEZb2FdBizHpiK98GhEZyRRcJUFrfRwpqL8LEacumdXCWVsJ3zkEewqmeeHL7UgjPM8f3Z7ia9qaEU",
  "key5": "32n2XpmXNHevJK9vfsZLh9vb2QKSGKhfR1ERudeYQKzFto6g8uQkpf67pFwZyZBR9St5Nm6Nk9mdZs4VDPFvmoXa",
  "key6": "cudh3QugtwZipfRFXZNnrnvLVVyvWXffp515qz9jUBL93rj2yDs9CKNuHGT4sKCJsrwFJrVCMPW3CGCiH6jCVuL",
  "key7": "37rjSBpn3VZ6LVKrE6eQxhstXXz5LMGEVySz7VsQsR5mZhRuVipPBRy3XUB2FTMQVkn4hdB45uCd274xXNauj9hK",
  "key8": "5RpLDniDt14GBf28aWDqdHc4RKmnfcSbgpi4b5te4ncbowBPqfJbYoQ1ayWZBPsbEZ1AAzTKHk6od3HJxR749Amp",
  "key9": "2BKKkdMFBq1pgnuseSPfBdwJEky4ZddjKkL8RXCjzfdJMfMhGkgdDpcJRef89boA6mMpEAaiH8vP3JTtg2rf7mWZ",
  "key10": "2LBc47dw9u5AS13Ft24KNAn6FNQh6fKjLbaqZDNaHxBeJ8FS2MvhVnXa9sJdoGiPrseUzfLwZfjNPebyQ1x4GA8s",
  "key11": "5woAsinFWJEN17WqhRLpTF297NHPM9zxQ4TXjQcsNiAG5JMPxgTZTRz2f66mpwCVGgUb4W6rF9csEc9gNGNJC4U9",
  "key12": "5xSSwxH37XmqWrrW4xgt4Lv4boPf8ujvpY2Q3sBAonQhmxsPMJ8hzFKt88D4XwM5FUQNsJGGLHEBa59K6tpSTV7y",
  "key13": "48MVZbcdr2ogTqQhMc4RHH7mKbLv6aMQSTTN7vJLsQ96c5wMJpHCVqwAuEJpe4DuFDCgZxrbGHVnuhKQ4c7ETcPP",
  "key14": "4B5X7S6iqTRA1EH1iAk1p98HYak1KtxFE6tzsh4S6ibZDVQfNwMDQuXhHFJ4FkSL4ixqdYc7sEAPD9nDZy6c55NL",
  "key15": "5Xno9ADq2YcZEENxmevTxgz3gsC83LYqcGYeNUDWMuYTKobsUVnDiyzC8cwNFwHA2nmLeqZgoCrsui2QKp1K3U9w",
  "key16": "4GUxKuBZUKhhsMvQB4YYiU1AVB7idtdcnNpo52kPu1Jkzmyd3eYLGoXTrNeeYMKvyWhNx2EoBqZYsfuXhXaDDW8W",
  "key17": "29aftfdG66WWNmUDqV9weLqscRUuYXubQL2EBXzAC6FSMLL26NThXzLyejpBzqxB7aezWX7kpWi1NPSgeEBpR792",
  "key18": "aaJ3Aoz7Pi58LtVajeddcr1TV19FX5VSb7isSiNQgiedvYyCVtZ6XQvYxpBzCa4AVGWfzVmy9zLHoNv3jipXNS7",
  "key19": "2HgQM2d6nM5WBFadB4BAb9iVzMfYhnSGeo7L2TquxibthPg1RLBuHpD8Z7MrKsoW4C59zFNJUqryQEJ9Lw49NVv5",
  "key20": "4GZQPLmCf4qYMF3uU27fLfMTJHrZCGSjypJK3nx3sN7atCZ2Sn4ZWA1Z8nwMcHj5tVJBBoD5nubQiLrJnGQS3dt5",
  "key21": "3ZCWhURctgx2fH1cH8HnMQi3HehfmgpxzWafRy6Tspw6tNE4KzGCskM46p3JN2VxWsJMmZ5WBFaVayaAw3vFmVc2",
  "key22": "56bE7BQy8sZPYoNNdRL3szSxzM6LeDFHP8uCVpMo55w2nirNSAgW5mQzrSRafXsvKFSBfJGbeEMmh1os77JsfWjJ",
  "key23": "4PfMJ6bawpa1KrUK7dPd4VosvjKLjiQm24BhqaWun3DPD38HecwDWhW37kEkkvgfBNwy14yDVFr1gxLoJgSuKAT",
  "key24": "2k1BzczCPxFPyfTFEDuatEdrX8Kba7fP6wYm9CqfHEhjSKn5zVwUptKyLndJZrAgjaZZh9ufMENwsKiTCFrB8v3H",
  "key25": "SpSi92merNhTjnpZHmGnPYR83LEPK2kdXACjxiBGtoEQbNAC2dKLkeSaYrSe3mWqVVAUGPVrTKyYUdfnz5MQd9s",
  "key26": "2FHp3cWg2A5kDbs5C5ADhJNopNwvCzAkCq3kFYaHaW1nHXjovk8VN1RjLeymo3hBWxdcpybF6egAvq9bZ4DbCgg6",
  "key27": "24VwPmqpxqJqzVa9bfLqq2hEkTxchSBLqJ6v25LKaadYVrwnWGPBrTteagBXCHQbSv5YncauD67hCibcGsNZBhg7",
  "key28": "3iV3L2GXiz7oaY94dTg3tY23LJu7HcaRKAQa4dp8HJQ9Cm5tRNiA5b26hTETCJCqCq5QAShhPc7L69LNKE6u6K3P",
  "key29": "4doECaWZquPoo5UXQsjAZz49VAEiNR48wwwF1JVqmnyiSaBK2WmsHhWPyaCyy1inTzgmpjK9MM2avkrMWU8Rzwr6"
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
