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
    "3Po1CTKXoVATjqGExxxGCKQQXUSLfGeVJpXYM5P1EQmtj5ryqvZkcva38AG33p4AaU9owgnAZ15dR8cP2HsKWJfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xtX95yW5aZMKjZfKC7XwYpy3kBHX5EFfvVmaF7Zw29oV6ZS6sA81PqDTwNEg3h8oWfyqoksrM4KZ5i2GBcaYFnw",
  "key1": "Hr1xwcSTcG4ZYnDhqAyhFVp1CMnQkRREinQ62WMrcW4bf3vJCY2P1xqzykh8tau817ptUspDcG6QAX5tjUpLKbD",
  "key2": "38ZFtVRttpWbHsfGfYdqYFmnrkndq2M1VWqSt9VjDqcS41t4jxP6dmf8G5YNueNUgg6X11TyP8fVHXC37oJhHNYS",
  "key3": "h9jVknHZNcK5fFwdfuZbocFo7gYEke49YWK6x2T3jx27EvTgXjQB3u2u8VvtKtDFD6U2qSUdUkeBzgMncUdPSY4",
  "key4": "3QMGAQ2R7a1gUg9jKsNRRMJApoAa44iczWqT3xjVtHiheMiMpTBhRYE7fqRSWnfS1rqQVLHFMYWsje7ZXrpR41yb",
  "key5": "2RH7jADAKfwkM8oZSyHrK4kMNqc6wEsDqcCTxASQuE3XeCfwaELjhryps113RYH5o91o8P39j4X2ekrexQZ9sYTv",
  "key6": "612Rtc7SkBsPwMcBpn6RPNoGReJ84pFwYNhQpX36SUyteoq7WhbGJ1mNUWEFWkG4cnb6fa9UwojgEVrTYVoRHcxn",
  "key7": "4AMMcn4rejpb11YJiqy9e3jd1BfCkhoNsyAhr5iobYWMC8wHZtJsWbmg3v5rKDNoPJnzSrJWarwxzHnnaJFD4kzz",
  "key8": "yixftxHU8g47TrPaEsL1SDKpHcw6cG2fb6LRtTBHiEKQwUVbHANKnyHVS79rAd3kduZXmbsdMiWrCFEYaPVNFHo",
  "key9": "32NotCRjvcUha1KLMSzZeyqdcR2YU6KVc67YxQXkyS3BPqu685cJQ683gUAcEdU9UpRgFujJq9MkTMQ4MMc2vxsn",
  "key10": "CqNMfMHYGnkKgaz8DwgKXvPUCddfPzCjnV6UQy2wiqcuFu7Mx5MseRA8KfMi4Uhc5NceA8kmbabYiti8ZCiP55b",
  "key11": "mmGX2TwhPMgEoY1tbHrK4ugcmGayDEuANw198PC6fvUiyaVGXiJ7q19RgK9qvoqwZfci1UTKP5rk5MgiNBFuUcD",
  "key12": "2isY7KSMxYCzaoksyxqoMSnndXdcPXJpJCnBDg6virsXpcHcouWLfNBSVdY413kFroY5HuYptriKDPSwum2fjgDu",
  "key13": "5J5f6Xnoo3b41ieKEVpfjYzHxDj7kwRqgU45nUzCventMtZ8DQgpuGw4rigMdnGFHQMJx8b3LKPvo6bqqGkjWdKg",
  "key14": "3S3Za55vdAaS5EzBfabWJQmCepw7mqJuSJ7kHUZ8kqwfZWF4SGyxgzcfW2iAcgnLRRdwUWbNUh48WB9yut1Aw7Jw",
  "key15": "3qh1JcztjHCxKeks2DtM3kQv1yXWLooG6zFA1eu3Ng8WRE9yKLCJiKU9fYyP2btvXpPPDkf1U6U7TL1JJdvP6PBh",
  "key16": "2pVJP2ADyqL6CBwBNoeRbokQm3AqXSgw3PBzAZh85rnS4fGYQ4MsNUahqj6ULX8QGJPcfdaTawvMrvcv9oJQbpt5",
  "key17": "i184LFDSAuEWV1kCcus5fVPT2ot7goG598rYoe6AnCpnpmRY2VtVhwEuYg1rbYUVDhcbTueUwcZEFHxQHwTaUQt",
  "key18": "2QnKmhVdKKkLz6JPMSxjJssmpi9yxQhzXjDmgvsHoFAS19sGUdT4y4GrwLAoTSSapy4NkAkSohY3hh9gfudEbwft",
  "key19": "Wg2mYkAFhUgJWcdE5AJGxYSpXJVrXiqsuMVk127pxLQscoZPfpRUA36yHd9tvHhwpnpoo7pM42uiKaAR519sqYf",
  "key20": "5PwPai6heSmm9ZPxxVmxVUZcgqwAWbouj1iCghYJQBW9zf3Sd92DMS9Zebxj23pFfZPWYMJxyH8kz24wxjfZA8M4",
  "key21": "4M9WhAr59akv4iQC1uzEUnB8xGCaYeewYJ4cYLZc26zAK5cLxsKsWC54U2gihbsAf3kS9LwwH7mk25bbveHAQC8o",
  "key22": "844TadKEyx3QMXouUmmKtrQ6DpUbYbwVtHtP9nYcPZmAnb2fnj9umENG8Tr6RTYVWdvxGWLyrvk6GdnAysQXkuL",
  "key23": "4yR5n2aCx2j5JRUYQzUUNV1yeNyZwJBsNEAoNrQjHWRrRViamtRHPKdazc6bkMt7gExVXcgF4A8NRnd6DxDY1Cue",
  "key24": "2CGrob5mZb6LFErfmcZJSiMy9qm97SjKt11w9neWc9vFUoprDHUVLbk1bx7NrcmJwcJXHyx3LTV77bNijxxWkR32",
  "key25": "3dA2Zu62Yv8ra9mrbTRmq3sT7TnGGUk6EVTHfMrXNHQW5PH2wszWoatswFfCAceSEQtD3GmhsE2gR8QKGkYgjJsz",
  "key26": "3mhU1gbnBxuY8GWxn1XSeuADMv338LBsa2suhbeacaLm9gHq94j5xhgpa5PV6uZVsMJiqt8jMPsWNQkYH9MtusDE",
  "key27": "cyn4JH83RrxYTS9cxXVdQhKRu9Bx2JaoRv1VWRrfp2tznBC1fsDV3BstZoZu7kkZBK7rk7KuZugaG5dvvKXKG3G",
  "key28": "2RbsFbVFNYdhZsgPgNhriLMXx3zJmm1din6W19DYkzUMgRJGUqUcWGqFyqmCkrxfvmpDXo5WWsB9Zw66zxVYk5Dv",
  "key29": "536FLEVTWTiF3zbP71Y5a5ubWsJEBBTJ3P7dx63CrKPYmsGkdbgrS84rdcKuoGrzXt4RTb9VQYD5JXnMLifuwS5h",
  "key30": "4UAZyPZ7jowacRw3BtZrNEMEZgmstimkbzxc8NkxFJxYggDLcc7cCX5ShfHpZZs7tB9N2a3cRZztZaMd2GBi4Sid",
  "key31": "3Tg24u7ExbmziC2UcKckEQGkPPp94wnAY252isBs3vFMSvFBWaYJXDFa15rMWSBVf6NpAdKPDjNXUSjtWd3xzwYa",
  "key32": "3LAAHBt2qnjkRguq4G7dQn9DNmHhsU16sxZEWe2ScndeD6uffW2nSQk5bfYJQJFDq7ifMxGQbfFjXPhUMWD2yQmE",
  "key33": "2mbR3QnQAT1GgFEP9S2tsy51ZDHNPZgojVHrKFGeVoRnrxpcDpp6aUsRQcPKgBUu3ptsXHjycU1fGNgRVJQfF2Ca",
  "key34": "3cdBif5ttrcvz2jdHKVWd1RBHFMbeaZ1DkdKVgYMpXpJuWfdeQWKt7LXxG6jrf31A73f8RkyUBqz4kB8KaDLRttQ",
  "key35": "4GYu2HesAmCBTyWoryDCDRkugfDBQXBJfPc2Q54i2cPbqJqh6pceRiCHD2YmWGTH3KaKEnpDvUuwSjURG5w2YAog"
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
