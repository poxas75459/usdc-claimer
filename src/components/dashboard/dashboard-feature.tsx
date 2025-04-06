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
    "2K5fk9Rqhctwvytbj3fMxRoevLK11gWc8FX3MkKcfwBUWfuq7C7AEyMmH7yH7LLpwB5QFczYnNr8CG3fi64Xgg4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zzf253WDLhcLiW2irTg4BkMTxKNZcLhWbHDL5nqktnovG1pQy4Lf9K3nWJHEE1uj4VZ9mcP7JuKo4dQMLJNUfXh",
  "key1": "5z8u9nukEPhiwAfutL13qhmwpQmsjb399TpSoMz1dxaFtKkhPSrXaPT2mjHhkhKAFfHLxU712VMkdWPoYSTTiCoD",
  "key2": "9izF5zLhQiZv4rxRWFRYJLsfJqmcKzPPJ9qYdTtqH7c3adrs1FcrxdQTiq4yqe5miYJUkjkx5wfD7MWsvTSgJeU",
  "key3": "2ykj5uGeoq3agmRw5MbnjwhGugcgPFttkhnQLFMw6kQfwXaUHNtFRxujLK9yUvcULNTnrQLs6PZUHYkZ3pZvxp24",
  "key4": "4XcwZ7FPeCpvAf58RtrE9UgpzP8zMDMqahxRYvE6Uh6KvanGouaN17PYcXXDbA69aSsR9XdAxyhMcfcZssgN8N3Z",
  "key5": "4PTRc2urX9zQMXLYsms9swkNaEKHWhGFkCygSLGN8GLMFGShywR4xE18uvwk4dxZyEA66qxyHAVWAWwGCNsRzvP",
  "key6": "5BoSNR7kmJ8AqXPUqFPhu2sc1rd84BKpc8hwykN2dG1CNaiKri6biTevY3Dcryqnc1ktvtBMRRwqieUCp6Eje6cc",
  "key7": "3pTKZVdgKY4mWYRRqdVdQFHQHvSh75fQ9mw6sMF5CR3CZfG6VDii3TitEd8rZGxtzQ8Mo3fZRzzYPG2YRR7SCwMg",
  "key8": "5gjSXehABUuTSUJDqrW8EJc6ziZdJapjrxGYB4xD4dnYVMZNpkRrRCo48R9itiAGSHYhxD9st8q6D3UeVzw4uGYf",
  "key9": "58KtAMdpEgcmWWJaw3P2F28J7FRmG7fP4E4Y4L99wisSY3tbTdcR9riVjoAThuGHbP7CCJwzfTJ5GARPSYtNmwF4",
  "key10": "52vu7nA7duYXVoam93fkAJMTnAM3cWBXf7Eegw39hxDs5kabzhFNfMZgtbuKvLTENcTjcVcatCWKZATKQFkGnLQX",
  "key11": "BiEp3ViE5SQH9DMw1wkgbLAT1q8JAUgDR9JRWL79bSzDTxxUMJzrfVLggzTb6nZxotYH649EvDWKWjJTVZqa4KY",
  "key12": "5hySJJon71oTR7dxYqNwrcFasZGHgiv2DdqpBepnoz3zvVKKbnSiacg6VTjYv8WmRCAVoMy3nxqWKwmiQoc2Tdo7",
  "key13": "2SKKXfcHotwetfntpzz2wWcLG31By1FGxT8NSrAnapVGKyfS33FK2ytxLAxZV3Yi7zbRnkWwFaEXMmpD5mbviChz",
  "key14": "32VztzSKYtH5YGjdsU9ay8hLrp18M3MM546K1U1J7iGTUT4cKMrwpaGEc7NnrWqcAzbU8VYMjJFwKytr47EUit78",
  "key15": "5acV1VRFo6UaYVJKvwJxNAoxf2HKaDx6VDb3ax6cXmkb1sSCx9Lb4cvfoWugFQqkRoUN3wjRTv9LwNCxbM12BjQw",
  "key16": "5yWH2x6zRzJwcdWfRoq494HhDu2c4bvHbcWKvAb7nnA26VArU8gMEYJPp19r3qsTMXoQhQr95hHDLePbMwtNts66",
  "key17": "5qg6i5joUV4rArcnyBDyjCUFk1f4YmaHi1jvxTEzdtpQu127dPhjYQ9gajH2QFCJpDL4CJ65FfRghuJZ4b8Na2Fe",
  "key18": "4B8MGh3SF7qBQbzuos3uNCrzFVj2td2HUqN4xsmrwnAsh6DctnSbeJrPiGRNXoLPNvT6sG9WNnnjuqGfwJSGdfo9",
  "key19": "62BjB99LDUrC2UZN5hh5A3GfpHw5dRjMESzcuC9T6cAB3iQLRtn4Rz3jG5NdT9D3MdWNe9wKaL8kVysq5EYQBS7o",
  "key20": "2VhiAfSFBzHJGW9b7T68FDPgcvRywoFg6ZZxrGFnayz1kGpNvCJcj6iWHu4D7nQEu2Ap57vMLuJg9NgovFHivF2w",
  "key21": "AgC4a1NDYRcw38bPUjirrW2QoNEWQrMZSLNohqxK33pqsB7PXEeop8RAuavQKRZ9MrtBsjdRs1BCJQiaKuyWJeU",
  "key22": "3DBNiwDKg1jnUsNLWMsvc8bzd2hsrAVCoaKwvjyRyHjGRi7ZnJjMeuaS9HqdaM2EzxZTivDapcdr1yBMaTpNrHYL",
  "key23": "3NYE4tBzg6LQUX9ry2qH7aGMKkd5BiyZdJ1hz9PcakVSQUtUL9FiuvcFYhwxwRDGCUB5MuhohCqrqmx8j7neP2jr",
  "key24": "33twzcG7VQmyGYXfEUun9LmASqxczeSZdYKFNqW9jABHAqf7GQPt4gKDdwD81ShkfZmHM8YJjQWmheF7bKA3GTVZ",
  "key25": "4ciqD2Z5i8TRoJYtgPLnZHDFATGuPrHGFiyzoMVe8Up4eEAxcmEEtyyCctVeHd4SiKi3mo4WAubUtqdD2L2sciZL",
  "key26": "5orqXreYRkHH3m153DNb9SLu98hmrn9vuZtvfmg7Ba5PcBEvFB4QGeubWHcxCR37wCXghbC31jkEtxnYxU8iwCMT",
  "key27": "3BFSmYWSyRusLgwAfFmdiwUzeziRh7Y4NFWLwsuXPc7Dvmd1pdxWWbs8W99nHLJhdGZ84xRKVMw8kXvBtfUMi4DV",
  "key28": "5X3ksm9JfvT1LuZD8cJYHBjo52d7REXjrAYegy4DMjwpbyikvzwTHfPD7etXL1o3mXcWurLodizkyrj3WwthAQfx",
  "key29": "612PvDC8yk9CyaVaJD634STxX5zC1PrfwmJjNugVq3zuxKddB5s6DBns4baxZQcuU6pGSiAP4XqNwrgyWRN8JJju",
  "key30": "38y6iHWoCH6Rjr1daHMJbbbQY6BQb4x2F7yyBjGWYENMhQUMeT1rA8sXzuujr4hWy7eqCKfAphwescPG9kSUPzd1",
  "key31": "3G1xmeMEK8mJ6BCPNE3wVyFDxSebSiswhPbbSfuziSSegRR8QiLuqWVkAeoeuRjanphQpvAi6HqTt6QVyLQw7s5Z",
  "key32": "4HTSbr23VQLCjFDQ1XQz1R4gUXNFTDp4JCkbERcuihd54XGPDSii79rQWGdFaYTYCofqrjaK43osdHXx1VFX8Z8T",
  "key33": "4sX4a7DntZyRnTX8XeZL9rMbf4Bzfsny4hasDbEYngpypudqGxaTHrDV338LU3CApvBgqmhrzFTbUY2DvUBBtjor",
  "key34": "aSHSczHKKMUVrUBBhGvJnSMwcP94xvDb3ieXbpsERejwXZVULv83NDzD5njgRzdpaWhEqEaWC6qMhsWZRusWDbs",
  "key35": "3teh7wEhP4o1DhyHRYarAgHKbqfxJYoCVkzg5N5BFKgoVPqcz35BF62nuPii3ZpV5qWUTkogYdUUitP4xUZgPiYz",
  "key36": "5AGPEXa2xrZo11MSLRWC3YbPHVk4v4oT3NB4Bc85gDy3g4vw32s5xZbjQGDZe2zoPdrmLMw3jCzhsp1rYVNQxEV2",
  "key37": "NRKbyKJXBPoXD7WDMu5cVZh4q1C6cSLRv7JeMRpiFk3HnLxAzQEV1dP38RKe7YdfZojj2CkixmFbVumd8ZW98qp",
  "key38": "4RiGuYTRQoWuH86YPY2M3z7kjdWLJxfhKQfHX6kMQhysUBYYPXH4V3mUcSnQ8j6FLsEPFsqx5Sxzmeg7xoYSmj4E",
  "key39": "2JxfNZFUQ7WQcQ7ABN9DtLsLLsAxNkLqjteEQTbzQjRZkrAmU5ZNyrU1rZfGMWkZm73DzHXa4AfXaXUhtw2AfCvm",
  "key40": "5uoS6SihhLMBgYC1C2qCcCANHGdnYNxjj4AdytxXuWCEyvcvSyv3gYwWzHLQZE17Tmnkcqco2oHum2ZETzgkuBkx",
  "key41": "5SXC3ruqrobP9Aao2MACccyPveV8T5Bo3uj6ehot1REr74Zdxc91kKZqchizq13G6uhTQgNHrcrdrT5EDrZzd9Yc",
  "key42": "53tKu5jzrbD5JWUQw9NTzUnQJDYw6XVt3KAiJhkhfY1XSbbnLSKhWBkRNfNVZHFQzJnrYxcqgfs9Mfs5bu3d4pm",
  "key43": "2iHSXxzVLd7udwScR9HK69qyH1m48fYf7uiAtMPASb6fG8kZ4bWKbe1jgi7ncLuCCN221HuesjB8fTfuqCUKbJHS",
  "key44": "33oSsKpaBgVBXg3Emtqnge2v8fV3HoQGRnzJQ83cBH3g3Jmhx4zPQScxu4ycAAEQiUR3D4Hg2RfG5bnsci3wk5ka",
  "key45": "3t6HYWzv1r9PYeNpyqVDtTTd3FsL134c3ETr4hYCHLDvHLnsAa44rSZxkSM667acAUXtZwRcQNT5ZaFz5Lu8vRjB"
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
