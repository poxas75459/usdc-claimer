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
    "5827ipZVc9GU6yUZbHpXmh1qFsyFCdY6HVNwKY8dHYx7r7zGgUxvJRDBgXaXyipw4dT2r2Vvgk9EDz56ZTYhAcJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S32xo4s3WXPbN5AkYwT32aeZh5xtxC6rBhCEgy2VdJ32AcXhmhi8W27EmPxcS3Pt3SDP5Lzy8Gtyk1bX6EptWJZ",
  "key1": "4cg7QyKCC8tdnksouqTRyuSxupsDMg1c5NRZ5tum8rCwHRpxAhiDuNH6GZtgMbAwvmYf1pjJvdw7QKAY9wUvPNah",
  "key2": "2DtPzKJCUeTg34L9f6XeAR1EpjTgtKxjaSm16xqZvTJC8rgRbRqncU6h8SUAjFKA6iFaEJCuhrjDdyGDXDDitdsu",
  "key3": "5yNGh4XuNZH9yDo36hWSJ2rQxCXki9EpGFEsEr9KUeRxvj99219so2cg8HhWFgLrRp7Cu6rSp1TN3fKE5zTNTJBW",
  "key4": "2EupC2ETXqZ4f9jsVC5JUpp8LhMeqM9HfY7cMLNAHc6Zt6WfP88VhGLyepsFxHxBP8Mzh3Uat8qDVpxqDqhFHM3Q",
  "key5": "4KUdQrMyjqWG5ZFiYvxtfAU2qgrR3KdbdnYPVy6Fky86uNnSui3utvmgULPnhFXpHHTniooG7xq6MoQjfDB5NpkR",
  "key6": "5PiAeWxB8YkDBwpnJjDtgnpFTawEBYBzaj1VN4jLk45aWbKKaA3Ze8dvJyNPFHZ67ue8NbbBS7aptxqhVRqpKte4",
  "key7": "3CLCAxaBKbxdNFfaWwkkQY7AVvVNT7gDqjYY3SyMz5D9qth8r5gcjC2HWhCw7KzpFgvnksXEYNGNc5gRjw5sLFpF",
  "key8": "5ELCFimj517GxAsKi4AxMmJkcPCMha7x15xFhaKStdf25WSGVpwYHvJ22PM7Xmnt9HjmN8qANHgK2o5hRhFnqjKH",
  "key9": "3GQk3UM5xkVfArjAwSPdSu9cqh3byp4CA5ZDvV57VGKGm3UQ64Xhc2191os7H2kvkQEjzR8ayTRNbvZRfwFNU4JD",
  "key10": "4wjjMQcMQbF5c82bPhX7mos4yzkSYwN85YZsXfsKCeSd95Vqhu4hb6Hok2iPUwa32vhRNK19eckiESMF5qULKAUf",
  "key11": "221VKZ1Cs1MfHiACMrjZpz7fVsTcXLrYNB2gbpegTYqcqafZ27b84SvGx2SA7HgdqtqQ4ghy9LBqeigDpv9M9JPH",
  "key12": "45ydUDMSyK936VoBEZnKi1S6NsWK9UYkXjhKCv4tzcPrs5jyFmVYqVXVaH7tQok5r3yZMcqpdVxzM95uEh9NvjXk",
  "key13": "3FdUmcog6kqnga3YJFpB88by4F7pLz2AXCG9k3x7vN4BuipmY6GsMG74Q2L5xN4vUyyKnhXXX7bYcdjejhFP8t3V",
  "key14": "nvKNkb9RJuw9yKoU9GqDqGd7WcvVtshWWjWZxRUiDZuAyp8chPKckvJ5xypbuCjZiM3gQaQSaayvbPztRbvgFyS",
  "key15": "5KhHJwewn8pEbZZeuv2uV1xvAob4FLr9R8AyoKTTHVx9xrhbV7TrKrqUTNs37azaFPvvpE23binJ4usKugZY55Ko",
  "key16": "2f3mNTxXbxwk2W3BJHb7Nv44pqT9fKo6exgXWAUr6GWbYeXSGoh9hzLKhPj9kHCURwQez5qPFwuhKxh9mkUHQgqe",
  "key17": "2JoLkDaB58j8TjiFofFkTx5YYi4D3as1ihiQ9NkFZcn7To1bmkDU1rTS5JfJ6HK1JGNU5ihVSk6gHF25hyc7oui6",
  "key18": "3n6zgf2feQgWNhJviZu3CBqKdx92ayRN2xmHmrcVAhhBGS9MQqcW2HMKHNAs4bcm4pUWWtvQxeC5L9rTkFLpns2o",
  "key19": "3h37SKwWK4VQ7MNhUDNsyYR7zxRTV4mBX9S5qaLmVrdY6sQ3xaJCiHvMVNWwRCnJErf5rU4JFjS7KpCcQ5K6nb8q",
  "key20": "3RxL6nVZHD5og8Y78g8tDMgTjaDVK1P1Gbv911iwp3NUZCJMD5f46heEy1qNRRcsAgc3ix99GDKDZz7huugEDUpm",
  "key21": "JQU3VZ8QArjoTEeW8nPb94bDZhC2oU5szVb3AD83tvrP1rqQsWvLnEYUoUR9UW4JA2Gob4d51aR85ibV37Bj2b1",
  "key22": "53jkZUfuRP6yRZaVAEGvwjgMuz9mGcLjmNPihEbX1KuPeX5E5KxfR7pRtrxxkxbxYvXgpjsJ3WTj9nckxg4B7UBg",
  "key23": "4G35BKtUZ7JpTa4UyGgkNfJNwDYCPgmYN675zF8HRaRzjxTyi25YAR4A8hhMxuVkK8PNhaXxEh5jnssHtt9655JP",
  "key24": "4pcPbxD8sDKx8qW42hiEfvBZgVada2HsM8wtAUnJnUpr8CT58FnjasW9wn2m2yLhyE5ciGCouwNAuLGFw8goWZJA",
  "key25": "4wTtvFoxA8LWmhPthha9HZvmzRSWeRcwyMEbGYrv8H82VChX8p5ZN7gzZ8Nb5TFJKTkGh7iCWjjGtCNGwVJr4DNP",
  "key26": "62KoaEtxAv2B5ut3dkDLtin8AQpYHUaAAAJ5WgA7ZuvJVxUELX2oNHEts1LQpuG4ab68GUbtQUYqQoL99KBC6PUq",
  "key27": "H7JXBsTtX3pPa1mYBq91LQ1UmUHVtdJvaBQBogJBzhuPnVxLLeyugWgokteR2WUd6FMiocSqv5XsT3GTbqsBtdX",
  "key28": "3ZCS3eDZkxLC9sM9N1oBdmNCePC38P9rFFw8f3UQoG1uSYKFkfRRe2m8NW8447uH28jrtBoVTozRZQcpgbmj57z1",
  "key29": "zR7GHD5MwrReAPr949SgvSsDQZqZTvogAsH4YMeeRwAp9gAVfAtQEVUszpTSmfqELEn24bWPb4ZgKP1ndRtbTH6",
  "key30": "4fKBRcnwaSQedpTFpoETDSKnXrzsUWWxTQmYksc6y7FaTfyDEtCQxVYx7httNR47cZa9mAZbwu6qm1hcj1EkLu2Q",
  "key31": "27G6VeSKQRKRqLqiKnjLJjmdCYNuQhkXsDRrHDqMT6gb8AtuwepLsiNabdNv8qXBY3duSs4NRcCA94hxojGRpyBN",
  "key32": "5EBLe8V2xVLRt3VEj2cpa1BNg9HRm2zg25u54BH5nLd5Qzam1Jfr4HSPsifVh2P8Nk8A6HqzQJGFkk76Eo5DKyz6",
  "key33": "33tauFm5GxjKPsJtt5YBvAqnq66fxBkDXcx2z1JXHNVCrWsY5Lx8qwfw4WzGFmdPH9d4XYgLzyTPLRvsYAvBcgvT",
  "key34": "3KBaYbARqK6pjsEzh85o3A41a95xFeKHCwX1Ve4hxJYdnGs6TjaBguvF2Lpt6Nkncs3y3EnRPx7D2fNAytxw4829",
  "key35": "2fws6JTbfE6rs85F191w3M3esk1qisw84zWvdWHnXWpfsgPZws7SPAdD1ZQnfnhAnGiTHTEmoRQkxdxugqmWqn68",
  "key36": "5S5FAbtHBiVZyRydvc7e678toRcZLrdYWFFkuZqbMBz5ANgettw8WdvrHMZbSnmzrMUBzNYsivEhTuWQbfhX6w13",
  "key37": "2xbAEG1FTDUP6nShUy1FULcCaAAUTiuNGreRwRutshbx9PJvz6mgAt9aFVizvjRx4VCkLv8weAuh6ZJYBURss9h7",
  "key38": "4sb956L8weom9uDAC7dd6eXkJmkYD3DWv2PLZe7NWyAfdzfZ7VAoP5vfnzrzMibqH1DrfH8GEwcZSLCifPgRBW4t",
  "key39": "3MD9B61Pf5RZdjdTdnjCaWuj8jfFrgMuxJL3epGkfgXcQubmpMsAU5MmTuNbo9YVc1b4kSsSTtnK1YGt4ZwaTZuT",
  "key40": "2gNxXekvYRWddvvdc6KevTW53VdvGVLMiNCSLuNQ9Wbg1praDNUVwizEhc6BdUVhtZSJ7WUmP9u9ScjQFcehR9UF",
  "key41": "uVhpRE9BeeQmGP9mDaeJuwwUweLGgrdbNcumEGsNu7kExPZKhrdWKSrgStEE1GgdyTUmruReKkrwUSBiG6K6ues",
  "key42": "5jJTUuCX1uqMguwN3hBCt2GBnbTapYmr91Ft4MeVzjj6sJWkqk68GEYqxQHB7NC6f3TcnckVMZzuYSxEbeBavtNN",
  "key43": "66nGZxvRcrsEyPdVeXPgbBSL9AcMuEtwEaYnzREnYHtMjUN9TR9iSUaeCGJdwH9iU37yD5YyUew38BYpAkXL2RkU"
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
