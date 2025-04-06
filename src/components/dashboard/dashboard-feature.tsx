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
    "3RRb7E5pb17U88au1ZMkzrYvK4GNaTBEqP3zYaUjfVmWeW1A8Nrp9zDV4hGKKgq8nWBhgrCBrDfWYECRDMTuJwLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQj6T5Kh99M5BRZmenmxVYdBcTMzz17LkYEcgVeH16kYm4eoW3eiC8ie1QxMqDpo52QsoMAwydfDWs1qFqiV2ZN",
  "key1": "3gViCwLgAVudTUgbZK3dByDQL79Ym8PXFFTBjYWoWG6GmPHEHe6PopH81SexsrYT2RCmNd5e6Hm9db1ZTCFkLuyQ",
  "key2": "2jWeAAdoCrfGE7suFp47Za4tTVHePBrz8JxqFe7uXuzqDNEQvX9ev3tRbdop7NrGrDu7Ewf2LWk32bhU1ze1urFS",
  "key3": "e1kwLWvJNoc4ux2TSzMwVY25xB2PRXXHmEeVqPZvgx1dkxXdkwoReTJK7Ft6xUiPW1JJA735wAHbynYZk6h541f",
  "key4": "2BVHLGXafw2tbEkiWTcGzooP4Z6CeM2t7U4FJaU1RvY6Hdjdh5u3KTXNDKadcZq1cuqrfDDL7UhzXL2ovvZMNxcm",
  "key5": "2koyrvoyhHE9QZWgjAbuYBZCLeeLs4LyVWfm7HUFoRJuQyHiTrbovpBEvpi9sgqWFMRnr8SBMtMNro7uJTb66AUG",
  "key6": "2nXztRHSwm74TV1KGBoz8qw7igbEaV8SPAD4e1L4LPFM8ANVrLohpXzCBtM5KFCezRrR7V3irjxnviyVui8MFS4x",
  "key7": "5oqjLNHGdnvCJQTeTH1XwctebPiRF6bGTeDwwRTkkF9dgHxLkeyar4oUgdhPxRpe9QKpz1oKagu9GrUcQarsqshv",
  "key8": "4mr8512NK2hbw4aJgQTpCx3ZY7UqqnnpZ3ZtEKWwscGTzn3P7H313G8uywfmzHFDUkzLCsNmMmFhQ5FZLWV7Xg3R",
  "key9": "337ApDJ5cHQrjNoBxMT4eEk7iZDQdKYYvRrioQXNrhW9Fni8kgAZF46d8hEWhNzPMhR9WyueVjdBCbtRyiY4XkCF",
  "key10": "i3P7iWGKRJAKGGMcnyq6AD1nCuo95m2cGuwrxMPNruxpvLfayJ5aaL46Z2NbYjG8EHnkH6RwvME1rUWkMx4aNU8",
  "key11": "2gSArXeTnwGjnMqHNty7fezXwzDyK7VA4VEL8y8enjgiDBuTGxUuAAEJATrdvBG4buwkBnvzyZGsTKuMjV2Vit6n",
  "key12": "2rWj28u9CyBh7ZLp7ykiuW93gf341DLkTvSrYoEssX79HotU4szCKB64Gtno2XJTT1afMzUQJ1NkwhiMNDtH3sic",
  "key13": "3tYgRNRC2n53PSD5ErgEBM8LPLiWjKJq9k7SbgLoa6JNWJ5My3HqAAwAQkX9za1fQMQPY8nRb8TkwLpJUxxvSxbC",
  "key14": "2dM62ERW3rEYHMcqQZVykorSYSwvqvHBMGxKgf99JryCHSQ8oEdxHuPJDgZsREKPJtjE5GJajcKig66g7j7ZUxQi",
  "key15": "itGGxjdH5KDfu6AmHaMASZfJZe4gx4u8M2A7o5gzLfGDyWx41mKHBtheffXS2u7wYtVrS9M8HsQuG7xYScyYgsR",
  "key16": "5ZXjHQneRMs6jrCCSwfUSX9K9QpEoknAmd2ViHCnj2uom6Y6DahnfETxZLXYcs9qsvhttjwoYiVqPHRbTZmcy4XS",
  "key17": "5insr77RMi8Y5fWLZbcd2oguAKhVFXhHqUu4DT11fA8APtJcg2BFnz9nnGK43jH4W7vQn6ct3ck43USxAqsQZy49",
  "key18": "4V1pZ4evQ7NtP7TDCVre64XwNGW1DP8WQLULP3jjpeDEECzh35fSmBMKsJapRXuxwXN4mEeSFw1bZ2HYRHTdwtpw",
  "key19": "48SKWExyJLPhtmYJqXokoK65eCNbLQijVzJVrLc9X7J8JGhSSRKVUacQQLkJ1V6KQMTbgAMVuEL1oVHsh3px8JJj",
  "key20": "yj4akSMk34UNYgDWoqHpcoSypjrmDmYGPekXkzUSX4zr9EY39D1DKVaiqndRnx3RcLV9A1pVs3cDNjdU7oNpBvw",
  "key21": "5JorgBE5zWchqiG5je6wXRHFiBBfDJqqDvQ6Hoy4Vv14ubfHJ8ADU2hBfeeGMVJPjeV4VKiaozNhZ8tATPnq3abG",
  "key22": "3DpWM4n9nhkssCbnqHTRsXiuPJDjwZ2njxe944Xo4addW4F77ZoER6qyJYTQBhx8JgSC7X91y3pMVCFnV7pC9oQj",
  "key23": "2kbsKx7fwuMppYfruLevPDh49jGyVLCwAmttKWogYzrEbwvnbVNPyvQv8PV92iKd4sr8KY9ubiLXyz1xGXzaCieG",
  "key24": "KCqasUEtiAge3CJgkesHYLkw5uYqhX6QkFtdancjEDZDgGHuV6sgQ1N1zbqgrzNe8ixNuonLSLt3pdaRojede9z",
  "key25": "4hVCp5bYd7vbmyqcXCxtKiqPsjQ7EmjAgeuheHWN8pxVsMb1e2yb5jxPmppHnaSycrac1fya3C7XfXYrJDJLsRmw",
  "key26": "363r1mV7ro3QEjYqUJ3LFhcnLkcSgkaGju54pCJRxAU1FP9ApevZVZiYycDkPZNVJYXK3kSfEjsabpFo8iVeET3Q",
  "key27": "23vJEW9c3cdfTcUP6MD7r9RUouHqP7KUMwdxotNXF6nKCVjvPnm1MkgGsjc1ZeX2gXoJrD87RfQf4AeWjGnLVSPP",
  "key28": "2g4NhY7iyFe8tVq2DxaVtieJTqz6ZbeXM8iWvgZgFMefAiqMVzw3xcVMpDrunKMefwMHYpHQfzww8mxRKNkceP5q",
  "key29": "4Ntt1DiZswteViEcNYmYuUVwRiUemCDwLpL7SfqVez5vVVYxfyiSbh1aSdbxD8eK8wdXZnyQEdfvNMXk1xwkuG3F",
  "key30": "5DPPfYZ5976jzmUtFfNdjjoWoVMfdSi58QkX5hcm9UpAsiFs9sH7gh3Sg4No63pMcWvryU3SoqMRZhfuYMqmYPsD",
  "key31": "4peSboY3N548ZubYM6yw3q3pA9qzuioeSX9agrrTqBgTeWNj2bjnVtk7Q5hfa3CNqzs1rQfPDXanLzzWcPTfMFLe",
  "key32": "2jzeqHs9g5TjDSZsDWvQmWnateunFxsyT78BvRyFLmQRKs2YEVB6qcB8vRR2MQP3K5mKtikdD8za5qgjXCxjRkyR",
  "key33": "5Tvpgqibp5hZrnRgsanZhFqEZDVhABUJE6DrAnGNJ9ERbGDeNdtk5QjVAvcHegGUzkQVnDWEupR71w7yY7qHqDAn",
  "key34": "4bXKtiuR4j1Wc6z3iJ3piTA3pLuAPfyCFXFeLUyGZCk1HVCrB51HCKcjPBDuPrWX5wHrWSppMVoaQ8Q46EqzX49C",
  "key35": "3jJjBqAwFacvGAL1V5DidVgHFE7wwiajYTemNk49zaXdXz7Y8SUAEbDnPvKnpnBiFQzBbL2qcHBsexzwHb5PcdnB",
  "key36": "3EwaviwKV6BLxosA8hWcPsT5TaeaE1TRt5c3xkcowAcbTSziuKAriddG8Mm8a3uTVYsaeVknUBgkVHyXJvzxf2Em",
  "key37": "ch1afXsUtkDDmuK9szayQ1HxYJFUrUr97zMASiwXeNfKPHyp5qztUCxk3hVenXCteJnKwuTugtZCcuYsASZMMSY"
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
