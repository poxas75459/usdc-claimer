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
    "3k9QUepmDAcccKTQTbkUGywU8jmoMBc8ZmZTsbhkN9TzDPiW3PagXy4Xq9XG5Da7vKTi9pgJsP1KPjYxedrMdGHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21iySZ4gtpddopNxLuDFA1x5KBZNniTtV1N9mrBcv5df8kv2Ub2jZQn749x6jQ75QLEAYn5ZxhRRUPEtdtw7xzWo",
  "key1": "4EQPAahHnaDzpwEzXVQrHAqXase48KYZoH8agHPRnJwwSdwSjcj7syRvdZBK3orZkhWu72YWSD4EnZLtGTEXSqhF",
  "key2": "4s2XA63YxXxDtePjAQMZVHvHL4xqEE9su8RqpqJoPetUnUFtTizMavtwUTx1FuL1g4zgMTGu2obniAx823NkCN5S",
  "key3": "57zjzhYnE9zoFK68sWXDSM3gi7Cr3YYnjXN3VNby2kUmb1Bxv7SEKwejVtMuLsc5NxvbjC9oQWmG4Sif6KYaH61",
  "key4": "YkBJfjVHHKcyFua1xhC8jb3Xh3vY3xdUHi2ijeBVjsTgH8646jsWH6PnD9JCaoV4P5tQqpm6RTPEwPYTYicFqfY",
  "key5": "wdMxteYyrZ32KGY4xEPnH8Rt8t1AXKJMus2Rm9UP1FEwx2EwmEGjY58277vKh74HfQjDyMSkfUs4JtTZjmfZLiA",
  "key6": "4Cfn1swzQ5QtmrwdaJRvA84USjgeq4yoz9KY4ncuM2s81E4ywd1kKgEHAT7nbtwHSkAg2Ky5TjN8vY5F8JG65gAA",
  "key7": "22CmARLKo91iZnuMbcoDJara3YuWufoXrdWtmnMaGc6cKuoSriK88BfGJcx3ed3eFtrQzYNMgrmPghp3R1DaWNrS",
  "key8": "5mvhLvEThn9ZZrjTx5Um2NeHErgBS49LrD43rhY2SANHjfVbzcCoT7pfXkytLqbrGgW15LZh8yoRBhTwbwaKp3Pj",
  "key9": "3pP3RtWLKPdoHbfjB4K8kVEEk1j9NeRW9jqcSbpdcQP7U97wT1UmXnEFZamEnCxJNo31GQRm2EByNVUhyGFa9Auv",
  "key10": "4UUT8Q7gaWPRgE74tmk3YA1TkVZUJLgwnmdce6ucZgvzxKbUP6rPUV9hdF7UN1rvogAZsD4bWtgA6nPVnZsWBH3S",
  "key11": "5B4PNPuebz14BeHXMavs8N6zN483Rpp7i7Bkz5E6ERVVhEDP8KSQDz912BpMWYiz3da4cCk3BapREqsB9W3U5rDm",
  "key12": "4kx1FpY35Bz5fq41gWF46wWoZ2prHjDyVVmfJ2VtHmN8vxthfhBrTSV4KE9czwCw4zj7xyXwoeqJP5abxoMWyL9p",
  "key13": "5XFytgsPCLAePdwrSJeg2ddhdCgDds2vdQHL439gZLiSj8f1X2Kjt5rE1H2QCyfuyZ1jY16XMBLiFUNzdwgc2jbA",
  "key14": "iFpiAbf3eTS28B4WYJ1z7PB7u7NakREv4mJRpDMqgfGoAmkBKH9ZV9RUrEaCek8E9vkHb1WCpqWEk496jJsMmbq",
  "key15": "WDHi7fTfKZwtN82pUekzaCme32kAxK8sW4cjwABLTaKMy1cQfcFpRyuLgj7d3EHPb7FL8KchmYyhQsn2eJR1rbr",
  "key16": "b6JbWEs8MHdZGNDHLhdNHLodsrzs7jZbMdG7NmiXfZxymN9qDDL4vxxyagUZN84yXG3aX713WStBDU6aVATxbKw",
  "key17": "2Qwj7bFcuQwBSzn4edTrspP1fiLgm1gyNcfmWv1Gzuq17LuudnFjMZWGWjTp3KuKMo15MPkKgm3vFW9rpSPtzngJ",
  "key18": "3knDkcuAAsGCNn4ctJLAPWpAXXiefEShXgyxDT9SK4G2emdBneTud9drFvShdU2TMHgcfi96sPZy3jT5TDqfeDKn",
  "key19": "4N7RQtvbW5q252izvF6WzULx9LoDDfpbjDz9RBBhvLog76BowV6eeXxdye3aLBuff9Jq4QGNy6xBq3ar6yajyM6K",
  "key20": "Xaf8pXWsLBgetQBFPDHMDiEfaRU9kSUyRKfqykCj1MduKiZLEudWyY75gf2Jf1t7HRPeAn7Y9nCE4Sq29WRAhcW",
  "key21": "4qq9fQ34qj9HJA6VWLXv54pGKhQHvpYs3otgjGEyhYd2kCnBsh8DND1HExc1oZ8hdepzJCc2SSdyRSVtstyLGGBH",
  "key22": "4moyQmhrvqqMWZKcxoVwevwFvfLU65MU9GMqRLVgjU7fozgh32bYtXLQB8ANNoU9tBdN2md1BvxqvLZQh1gSSASR",
  "key23": "53hzF7wAt1oZ3zymBYMrFaP9hnnvyxvteK13AEi9PdCfAmEKj8EDyy1CH8i5FmVvuZtNiyEfBNUi3vLzSFbtwoQn",
  "key24": "5dkzKSCyPUTasdPiMsSpiTqbtYJ75NF7Jei6zos5YDoAB59gBf575YbpCGvZE6gg5mjXcUUGYECHdEnZ1NcQyE9S",
  "key25": "Z9rYbH9Wj3azJgzQHPXaPL9RUKp6vTtovr4GLPiKzkiQunT6YiieFu9HJN7KL9VdUmTWTK1nEBSwJTtAD8dZQsn",
  "key26": "5qZUkaZxdkW45XGU97yXAbCakxF3KE3LFtbV4f4q4mPyap1Rej5KrmASP3CqYAaBcnTif7DZYTfLTRmbuwQmiXjx",
  "key27": "437RXCsopf9QYLL568S8zS83tgZ4HA81pDJakXhV7HBURfJUUUgH1HuDdUHwdd7PJxLZsbnhQMFrDwVD21h8hix6",
  "key28": "3wziJempJKGcwYKQHfi9ezj3oazdxJaSF12w78auMDRYKWtQJb43H96aEjnz2918aZaXJEbHajjzezdUxnufd9n8",
  "key29": "5G158qVKTCrVNCJiXXQ3UAwPBwkyosyP3UJW45YNx3S6g5j1y5PAFCUJVLJ1wGPNm7cW88Zubqr41bQDQjKu5dAV",
  "key30": "nr1wSUvvgpXEeWKbjR46qWiEyyoBnfMhN9dtmfAT5GMKJR1TQmKtfyEQzicTrNUR7R7gup8us7Q44VSXiEtJNZN"
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
