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
    "9EiEkqaeLxb7kpz6wHMQWyr5wR1GLjFQbhGKo3KPcDYKP6G1jTPsyaEE6kiWa6atvTitGKZAZnwzuySv3HVDPS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ss7tx8u5ytkBdFppPbG7ziHNz6E1awUjT1iQBZ9FHXkCRjcYENvT1QqThFLZ7aSUktrjdSCE5qRnKP1EQogbbAR",
  "key1": "5SNq3VYxpJKMehhN44X9a3dmS9qhxwWAUHqH5KFkY3AeH2KTmY4TK6WuA2aXAkhPVMRBcfGLbpH2TSsi3b29meeT",
  "key2": "2N53uyLU5yzJLqSAVDU1AyG1NWcVfKczcWp7cJF4g6ww5Cxymv4f7ZvZ3e9djfnfz2WxA1njZk5zRfVnGcfM4BGp",
  "key3": "5Q8aZNdRAUWoAWi4moX346hbw6zb6rbTupy1Rwah2KHpS4CMAWZV3WeMzwAYKP3Z1uwYhAS3cHuaAfETHzkUpNtp",
  "key4": "2Gqt57V3HAaQh3sumVZuh4XHuhcauTpPXyxGBmudGFeioPtNERt98gP3oBYb5bt9Bf2SgqXcYLbfhtYpBTcmuZQw",
  "key5": "49pv2A4qfurA4ryBXvnyJXSBCx9oGdi19osfiuPjDLf8o9wwxw5JxESYTxDfiv9GzvuGX641WpHosX3XkK1Y4fn1",
  "key6": "2r9BxeZNwBzP77fbgj2eJxUWsBAKB2KsJV2zQ7GiUE6jKyujuaPmxevjJLSJK3s5gQESivmb4aEw64Fa6KtSjgsH",
  "key7": "7695yteRis33g5J2FpaRR9d3bakfvVDN87WZKpuxr2pp7bCkev9yYUGPaTAhAtqqSeVktcwdmRLs3WtktZsie16",
  "key8": "5H9zyT6Vh1pqdVsomNjRdCY8Ycr9kWPH1mXNeqwg11d4MNqp8xvsiC2xhuF5bhc5SMpYWcm99S27K74SpLCLuC7b",
  "key9": "3v8j7TsD8wseRbjoEgjWbmALYFfCPZ72V5RVNVdranEH3jhBLopkiKBjHwmPLpGKg6zDj5CxtfNrKwbGfUppiqQ1",
  "key10": "2ZzoR6w4VzwzfZzN464puDrWFJzSxGmVyyAhxcM9pTcKEd3ReUXFThBQar5HxCN5q5Tu5rjhk39c3SXD1QGyYzip",
  "key11": "6jGkdywUuWhkJqdjYYZ9JaczoUYV1JAHkQZvfAnKvxgVndH9WSikWuAQuRY2RXJbAyXuEt53CaiKLiViV32Fsqa",
  "key12": "3UpauZvFRtgg1FBSS2kWKpTGVdARn4rDamXvQHaA5a9BPwsyTgWdfPYcDYFAu65irjtNApWhZBqysHgP2yXgXBFa",
  "key13": "5B5qBw9zHeBuoRz5FxLuJvB1NuY7FtbNts9NWPHNE6QYoDQNihphnYTnspSrSYXM3VdtdgDRvCvGQiB4xRXUvyKC",
  "key14": "3HDsTMWVgxSgPv63Y1PXLerdoqaGNHTUo4qzeiYaoGVinwrx22ejTm4yGR7uEKoc3T51eBaXez5wucihvHP2opcN",
  "key15": "4mJfNVj1aJCHCSHdzR8aYLxyUiHpo9A3PqtZqnq9U55VSkMvXJWmYQSRzTbGCDCsH2yTT8XjbSf6T1bG2HieSYYT",
  "key16": "4xdT4hmvWAnQ8cRNzTeK2o8VJCBbNj6o43YtaLmLpKmXyzuh2V3EpzPLurz7YVoeRom7FPbzyX4J8Xwz8VCdLiVf",
  "key17": "4qijSxe35zea5JQWHp39jrZ6bKNzUaWTgmrrzksujGUyrYc5jcSfpeocLNYAc5B1N1TLvYDHzvf16QjFETNvJcRY",
  "key18": "4yDoUjFuN8X4rPWSWiJrY18uf2qLgjEjWXM5LoerFs7SpHhJ3h1WhRxLQwHwDXmxDSJGUKV2UMAxwXShrxsAAsKE",
  "key19": "W6zZMU5nLnmWJEcbfUnqQPtCCfPhkboXG1egyfp1K3oypkKpVapvRnv9NfV1F265CPiL3onytzCyQyWZzqNprWV",
  "key20": "27wkDK7j1Tv2f6go293eAbGacQdKeitdjTtaya3vUioWvACGfkW2y3J5hRoCFPsUikK9f4fNHHCVbm9mkagNsHVp",
  "key21": "3GFknFK6cnTXpxyoNsaHp8WNoAe63yUNgPMRdNgdBJru7Up98x6YwVn3k9xnvqhUqJ2ct11wSjnegiF6oUo1453v",
  "key22": "3HvN98TK1RK21K24GMzDzFxckrVUvQnqcXUKKvfyFQwfMfa3aJDJk8zFQ7G55QnXPxxVvwTTs4jmbdGqE8uZZyqH",
  "key23": "5LbgoWiwcW2izqm1hwc91TchJjzAUNfegpVwDCtd3TWJAygZhpNQdWCHNnoNWHmbgeDDEw45qFiAjXDiFj8Z98vS",
  "key24": "3w5hvQyisB1D8cCNbibypvJEbkyGroeZVkE7dUsJg2PA8st6WquSu6pAUtCGsXBiXs9k5hR5YTeuKYb1eJh9Nhdj"
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
