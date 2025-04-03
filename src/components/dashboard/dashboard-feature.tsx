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
    "2An2Gh3qQCAtU4GpPner5rT1VUGdTJmdRzsnbj36zNTs88kQVdFrUqET4ngKSbrhYP1WNRrn69cjDAzRLwhDaLwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51YBSTVGMccqNZrrVXUP38EYsGUqiWojznzgoGWcJg6JFAhfThy3yszr5H2MyuY9mWEtCE2EmsDJBJyuJqyAVwxC",
  "key1": "4wTKhPpRY1V6hAS7gwfj4k8KnnYt2g3doD4VELJ4Q3Bake9fwBJL8N1c7nwvWdYmWW2mbyi7K4S45bWDau4SuKMf",
  "key2": "5r2ea2F8GDmCimW3qsV3SfybvmdgMqCZGc5rxnD4MxYBgZrKayF771V8YgaqV5fCCJXRjVZToS5rmM4NWnZdN1fn",
  "key3": "2jeZHeiY9N6B75b9APr9AkGXMD9RwfWjMkR68Uj6xtSgfekb3QEmqg8Quo13adKZJZvZjXwGD46Kghx7n7FqVKWG",
  "key4": "oPsSN67FY9RN6KDAais1SChm3vF3T7JAEeyCztCLET3XfXDkADb24L1jGKSHSHz4d71qRtYkVhSXmWT8Tk34BG6",
  "key5": "12969g653Rvd2NN6zDnua3tVaPVoqpAq2VY9ATufs8QDzQN31ocUHCz36xVbRsAhgUdpaGuGjb4K4AAWTJ1BJhMo",
  "key6": "3Qmy7WYmCKqpUvu7Y3KCsNSRrEDQ7zf2CYDNFJe5kKGoApiz1tz73eqJcBcDNF7w2XSy7rkdUbTX9XDUQijehkcb",
  "key7": "3s5gu3itHZfDm3GLMRb1RcbQma1i1AC4sNTtQtmPqJigKwrRRN92mz8zecSFEaSveic6MiETYgrgyeYz3BcZtt5m",
  "key8": "4ZQE8ntNXtN75DxYzYyo8or9RQ7nnqoZF22exJQy835Md54DosK1fBQWUbeiXN6MS8fQ64vQBF8vwsrSegp9VvCd",
  "key9": "22FDtUxNEx4SEzSj61ts6psbQGqb3gadrDLUVDokdrdkyMH9XrLfTsrkoP1zZSpLxtCpjsutMZy6UsRLfD9B1ny1",
  "key10": "2cioP1W8kamkMN73nUNuEEozyZkVUvvDomZjQSsJXs8z8EPDxDNJonWbmkwB71gJqS2EpFATfJjRmjCuEFWKD65c",
  "key11": "5eztYpS7BGhcfZ7ie2T7xf2W2sDbRo7DirvkngEDQpxLMmqc6A5i3cZMSVsKnD1ryZVRP9zXLCGPmGXjVVdSkU7X",
  "key12": "1aeYLv7be9cbjcANV3YkxVVbEXottGXmz6PYKGU3u9PfGWSJYJdiAPDWjPNE8BMqBu9DeCvyKafQyFQtrVXPgYB",
  "key13": "4JmtDsu9HfKYNXmEe2vzSdRtYuAJ3D8S9c9ibxmMPY14ykzrZcyaxuytMU9xCXoYQmUXgzAkQTM68woNjgWrqLFo",
  "key14": "5abnSR2KRi723DNB7G8CoVeMBisnf3o4XzNjEmi4Eho1rhtDgQsaH7sRytnErcEUcqXpnE8xNzA7rSYETLrdYMzy",
  "key15": "4kgKzmZZARddCrWg4ad6ufjSr156XmCZABh2jGJVhN6SGNjhbz6NFpAAxecjXerqo6WDJXfWJRZMph7zEhsfcUZC",
  "key16": "wWWamJ3T5ggj8XY9MHKKy6UfhTYuAdYg1M4dr1cYs8EPuKYgBtuPFA88epvu7SnfJNiVHcdAku6Pg2LNpw1sCH6",
  "key17": "32r6Yf39wg4T74CDhQRBps5615U8w24TMJyARXGoE89R2zTUkvNzVDebxGRZWjDyhaGa4DCd7rKSnJYxF2b2K7hx",
  "key18": "5y7XXjkksf3iCZKRA6stvKdeQjJ3pDA9fest2bN1y4Xp7hZ357h1afZXrDySZTYUTajHHdz67ZyyRnL3Z9K7NWCw",
  "key19": "3c2QdcZ4NNkQ1nQsPsYhVT9a8HkrbWh288NuD3BVFcfkpKL4zeVEDTGvEiP7pNZm15mppP9FFLz6VFN9DH71Wqr1",
  "key20": "3HDy67D6d6AWtQiYVWkkvHKpjz5RDumRycKos1Ue9czr4s7rGkTUmfScPKaTcwETKpg8FgJQwUEePyyiYQLXTwuZ",
  "key21": "3j64aFMyiBSLbpWHJ3Na7GAJYGX9dKKU6syjPii3igt9VzxjSFvQjMmhKPcvRLvh4qc31vFRmSpHSp9bJR9KkXRG",
  "key22": "3H7nfuBxTTTTjcdnGVJV9bhgmHMcYYrCz6R1Vf6pRbxQxm2jJRgCXn1pJCCuxo3ctPLbnnEQoBcGg2nuYoNNRxP9",
  "key23": "3Vbsjofu1xLBGMha5tnCCdoGSziTonMtjeJRe46geXuerpXAKsvotu2d147FHD9AaY6LMLwsGQRdFZryvPuMfDyj",
  "key24": "ZQoGyT9EF4Gykt1xmKxsAWdvQzjRihbfPPaaEaBv619rsA5wahu1SnTETCRMVj4LtZHs32jYCij6qCWyBVf9GVu",
  "key25": "2bV9XWgFGqRMMDKuYn4j7Xiez8ESJDJwijMdrrM8ou7TFHKpysSwQ2ga8ZBJP3YS52oL2y3C4Uu2qwJ6AQxhMA48",
  "key26": "5wUERhf6kMt5j92Yn9aVLJRB28EGXyDHN6prupp5wH2NEC6kiv2EYXj6C7HHQuGCo5JBKMQAQxYRsKRdmJzy3nM7",
  "key27": "2sv5xaQaUz3riLh5cHC1AvZExNzPGcvqGEneHdUB6cy7t4AbFanPdnELYdbNXCD4HYCws6TyHgCpjvFgRZ9KRhrj",
  "key28": "zKWfwdztgEcoXTtSd4WHSNQoiY8bApsTEeVVc6sXRcjyRgwXfvBcTB9eWP3db7Bh3EkLaw4JHSer9hJzXUkq36j",
  "key29": "5nV3SosjX2X7oih5zuAgSt9ggPXVuEiQm9238TD4dv6GsDnHqyR1WJ3BZp7xxckcXGdfxmRDNf76pnSDiB6tWE34",
  "key30": "4jreMCF9GEz2ssa6AnubHKy2ogYRbABZjqwCpFcSjuSN6rLig5x2epkgeafcFupXiKwuKgmfAaWpHRN6pfWMEW5",
  "key31": "4FNcpv2jueJC7LjVWLacxRjx6zxtS8NbZMxLbVNQJEBHDu1rHamRsJDE9VjJ9sJ9LN9NbFnnGj5NYCVLH3Vx62QL",
  "key32": "xS5rcimGoqcSpb3pKfUsEjWKJqmxkr2YMpFb7AhExeac9knv9LBK346ay97ryXR7iy6AKgi58JUDSYuctryhmSn",
  "key33": "3sX8i1y3qwoXdKV9UrKRZAxiS9wK6Spif1hPKqRxNBo4jLffGFUoSvCVqJqqXnkckoNpPuB5tFVSPoZW4UGpsqCG",
  "key34": "2cVbmfGKNcsd2rgaAVqhepQ5KKZ6qU9M9WLjTv3Txro12EL1ddFYsMFtyJa5Q72dN52XBANHzixbWBBMXEJVvoX8",
  "key35": "VMp3BZf6h7XjPY4NYer4ReboKvGyG7gSyzJ4U3sAonbVLJRnCWmBKURWighLU4YWLfvsvUQHvUeJfExhbkkckRo",
  "key36": "3KYNUGkSUjxPh6WcToZkJmYNJHBz7tEiLsVAFNC2kyn6G1VFbbcwLUoaQTHvDHXf17fPaVGKPT1q4gf6Rr8KmSBk",
  "key37": "5vSqYn996HebXxaFCzuJ9JZ1m3XNrKDHCo4PzXgnYNrwNeWwXVSFELBvx6w6xLedbAibqqN4QAJi5Viihq6ufhKQ",
  "key38": "2h6KqNA9E4pAngeGN9BSJK1MGkonb2gvjUDMPPGE7yK97ts93CEFqyZN75qZLVaF5m7PBrR2QYuBde3B4uMS9Po",
  "key39": "24241vak57iDawc9W7QGZhHbn568jJGjPFshZoYVzAMHPu5tpGHU2nNS5EvFTdjuTBqhav7bfFUTrauxiSsEK913",
  "key40": "2DrjX68oqHY5UpCkno2vYEHcWaSsrqeB1HHWfTRRx5EKAnLTa9EgiLdn45yFahgP8ua2vJVXGngpE9iyZjgrVaio",
  "key41": "2TSSwYaXLTE2TZBmPtDDLrazgxAQKi7ZoY8jBbPGKCB8VpV1R31EFFRehFPwo2XYoRiLkEhzWhq7RHMxu7CCi7CR",
  "key42": "mZF6z1yAcXwGGFbxayKg4pr3pL7kAd5QAnWMYvwhF9g2xBCNACcSM5kjigMwSYicKPndXrp4N4dLb7XERXgXu3w"
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
