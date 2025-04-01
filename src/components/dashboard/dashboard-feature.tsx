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
    "2U6PHZCxZNZBVZPQea7E14zWZXAbG5cEvdSQKzARjbJ3RocC4sqr5KLSiBNTWJDGMTRSHyHxzmvNyJGSwqGPPrfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xSjYErS3eCa7D2R9ATjD9cPRbPBsNktSDGKBYFnvHcYWBhD74tsagcW6ekvwC7kUqnknyEgG3Vm5v2761dDQrzg",
  "key1": "5BYvQ2VWLCKSVie1y8rwqyheKjoAzM8FTWFjfkxhag9gkakYvenfFDkzCrR7iQefa8kFqqTC79LeveE5yecucW3h",
  "key2": "yhcnjCJH6UNnev6GVqv6gX727fmpLmzgswUxJebpn5tKhAy1cgoQZVKAfUkU7j2ksSGyH8JyEN7FHECvX1BJYsE",
  "key3": "3Zc89JAd8u48TAcER4pTth7AWgzo9coJbuYKm4h55kjNZpWbbUJFLuAaqN35fijHTixVrTfzNYt72Z2XMKeDJ2q3",
  "key4": "44rM1enjGqPKgPhgPJ8Pe9kiWdZxzhcMTMPp4KQwAuEFfoDGsJSar3KavmVQueRqDLZ5PWnJjCNFZeoA7UFseU7q",
  "key5": "4FuarQs6zmjmXbkcQZdRQVpGb2wEW639uTJK8esSE3ykWj2bWpHHAxQxrGWQ1vZvnkMVmZL7D1HgofzbodXmAde3",
  "key6": "5zUrMd2BKX97ZdwkQVW4HfefkVVYmA8ryE4F2kLH3N8AbSkhxdCkaMtMJpJwzdrW3hkq1pL8EqtMVwqzfpqLSww2",
  "key7": "4gWPPVtbwFYVi5q3WF4ZZu8xZBjKGHnEndmBRGCFbNkuKUL3HUZPwm9964mtD1Ny25oaqeQ35rUbo1M6h6fNuWxs",
  "key8": "3NbdYRcsokFubVKyEDqxqZsKepaxWXKisizUCHX1gZNUDuD54TwFFifkNafgQA4BxQwYPKLR15p1ZPPLjWBwN4YJ",
  "key9": "5aZxdRDj9jU8FiuPzMo7QhxJCQLaaVmct4SLfEw8aXvVktM8iDEjLusRFYbGsGMbVZLTtaXuvMC8LRxUJmVAW3Ws",
  "key10": "3SLcUwu4xjGE5nYsHFCWdjBFN5THDBQrcTvWWkkfdk64KgzixUoibCjudR5v4G95i4WpNCTXycyokeNimqcY8dw8",
  "key11": "2hpLG1oeGYkCPuDV4No7T8ZpSyQrtskSqwrkJ8h951ztrBpB8KQHMJbycx1ugegcFuMPC8rBt8WzZ8sizpLE9xx9",
  "key12": "ixTQ9yQ4xEFVDGLKw8cfNqynqzuknR2sZWipCQrSTjuyq36Qb7ugxbMiDwrfSpq9upgvTvDZwrEV8d9qKJ3e13t",
  "key13": "5aSz41J9ya2K5P2BDKUHkw2jjwuK7sWbAVW8EBn8LLpLASuzZEC6fBoCQKsnHsGvieryMi5Pp7279BqvJhTdLcsU",
  "key14": "4SPdgr2ibns1VbWhbCLw9GBJro8DweuAXaZyFioWHKNfAxogpAFRBxZJnkt6EQ8TcR9XRvAQHf5G978dBrqwhV8B",
  "key15": "23ayskw1bGiUcTzERQhKkFN2yXyL4mYgRwWyX6qKPj9LJ4V9B44DNzbWHDwY2fW6t67QECD53WfGsPd1d5Xqkjpi",
  "key16": "674Fx5LPRSHM5AEdQD5LNkwck7Nnxm4mHFXiNjGXmBQAskny6UopgjFGaR5cvxuEa31JtckThZsxC9ntRXp4KaH8",
  "key17": "wmLRBnbW3XL1daX2D2uYLaxxBGCDZFaTCM2UpxYNyETeiddRyKTRJ9wd8PQTiAof7hzzyRdchTbaPaH8fiA9E9a",
  "key18": "27gwqekQJxzMST7SoyettbQ72YLkGumn8D33AQpX9QDRFbxrHE4YERT7iGYr5fsUMPWvy7Ry7vbXYgJsQFRfQHwe",
  "key19": "3ZV5q274nCkeCt5aPbUiJV6BZouvaHbyvLvrMWtZXQsctDMXTFuTPWefMpZKx4wi3y3rLrWxDrdhe8GcaMN4XyLB",
  "key20": "3P4EQFCfnPsugLLvhabG8rAV8Vru6R7A5btsC8UK9TNy5o4peDEbRUe4SRG3JjR9pVZJu3TvcjmTxcnyyccmq6DB",
  "key21": "vC6pspdHi1z5Smtgv8jcpxe2p6W4n9CxmSrrXGVbSf24YBjbCtxd6BvuPQELYSCDGMfJ5RFkHRtANgaQuNUxJLK",
  "key22": "2okSswDqi3vaRuoan9fFT14mw3vfupLRGMaV9yo4YAd8ujjgkSmhvsKHW1DCvXSpU7L4xiRCKggD48o1NYqy4YY4",
  "key23": "5D3CvxxqMXsC8NBUyfzkLBEwQwKUXT6Jc23KajoXt1N59tUD5g6fzne8dkSaFzcgFwUCQbBpo2N8p7XAxC4dCocu",
  "key24": "3BkhnXcyJZ2HDehxpXL9328QTx1UoKCStJEiaDCRkVwtmZfrwD8QxtLgXM4z6SUJQLxnKHyGBbLp7FWkwt3GPAac",
  "key25": "3dt6gCCKsxbtyYaoVigLKwimQwRHQQRmXkEJw4KDDiMksNmZRnnwCaGVCn6zu7kfk4yjg1qyWhMXccAFpkE65YDa",
  "key26": "2hSHv69V6FahEHQes6ff4HrVCxyjqxUMT7hs4QdKzoecxmqvVmhmAidsUNVjdkchLQHsKj8PsaraFwXf57p9GwNr",
  "key27": "2SiZxeDRgFzcPAWBps2rzUnRqA9EADwr5g3Fn7BoRTkKW6fbXWaGs8gfff2tputtXeFCTo84HpbVVGcartonN4FL",
  "key28": "3N7zAfGJ4QT9DqRMMAyaYntJZaxFkWAHP8p92tvmDEyhhuhB31iRNa8iqGHi7ckn2zF7J4eL3EvfXUrqjwTTpPky",
  "key29": "Co5C65QJ7Yi3psstSLuqavvBrg2wLVdY3DrCZzXitz9KA5DJsqcUTWT9ZfVjFamP3AB8VsP6UaC2CJaAERS7kRk",
  "key30": "48HUgDr7QZPUqPMkuTXAiczauQR2m15dj22j4PGtckEyixTbwuC3w68LqJ6rT7ZTaXskFiDRy7jwaw5iZfveTXpg",
  "key31": "5nRbavb24fEK2boPvQidBpP1yoUAWrWVfXyWY6Xyvtu19j4FTy2qvNTaSmSTyQcPQ4wfjRijHdLWiCZVdW24Zmz7",
  "key32": "oYWrTsegJKTpjcXVJSnbrw6bXccpAvz6GaEACJPi5yYVyFiYR3Kbr5KPjVHJNuisBCeVshp5iDRPH2KfxnWdr9j",
  "key33": "bQzoS3TPP2PpGHYek7BT6EqQRSnFFHVbnGrGfbxcbUycGer9xfyDJSSuPY6SHzg7d8yG71WBMhghCXTDUxsecc7",
  "key34": "4CLLkqwayR5BCGE4WtyXq37gK7SJzAE7QW89Dkx4etM1rKkcpUfekwiBmTXNEesZau6rnPy279zZKXgRp4DTw2cR",
  "key35": "4ugcaNrqCrCr5HfkuNbaazLafcgx9Du8Zftrd4muSSpW24VP5zQ3bPU2LauUVpzzQfD4YMyW5QCpLAvLhe33n7oc",
  "key36": "cauxxC4NSn1JQMHkw34pZMhMoqk4juD7UFuRTn9UFn8DbT8tSpzjsWEobyH7DkySbLmDoRHcLBAe3A2nEchbWtx",
  "key37": "5qFtyBGTh4B7Ssf6hfCvT5NEYYNyvhrXZ8J7qyc5veUX9WZuFF6qT1Ha8HeM58WaRFT5gDJkGpAsVx5mKRi9Evzb",
  "key38": "4amLtuYRRzYgqyh63t3e2iiKnAVRGAkoTAH2sm1pQMTFyiwzhyBbjrxbBR1ygBYAcHBqnjisx4Adkf9QZLqkhJ2w",
  "key39": "fW6e8uvV9AkqnQBHkFxpqp1UAZgiwX8ts2JdMYgaAhEcJBqMWtdYJzsi3oZfQRFzA6AxyAQPuEKtGq5B6CvEH9x",
  "key40": "481uJwJnH8QBjEoxFnuuPFivhuywxYCgW5kVGPCtnm1VQyyxcxfNgQSEGHjQvm61e5EkTznikzvaNaVJo6RjzdAw",
  "key41": "4vJADJp6VxP7iBv96tRnxToi5N9ck9ouuMj5WKCnaRUYAd53TMNY696tKVL6QsN9H5gR8vUcHGY9wevxFuFBb84S",
  "key42": "28vUn8itKfL9hkbix32vUxrtZjq3FeCRJ1SZqcj2w9M5yEXE1RSq5t9Errk2MCB8tudWmUk7mCsCeXGjc2prusww",
  "key43": "4WSDew9ryXn7DExoGZy1qkc7Teaq7f9C5oJe2YCbKPjCZ6jZRzZnFfKvTU5TLF7MEsx5LEgLaCFfEmkKqYHa618m",
  "key44": "5vuBD8eXWtu1UaPjvHkodBccJQeBTDdD1Y6VJeNjmsHASaCwhNsWzQmepRrjD3bpnCsjzCEGyTZeoT9PaCpKVPZz"
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
