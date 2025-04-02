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
    "2Aj3k638Mp2yiYqQab9otRgf7nRCGiNc6HbJ8SrAfk6RL1oWjd98EVL6c9VbznzhZf7pFcVqZgVi654Z75NZxHFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uQgNYfbzoMgKSAZyzJ4r7pwfC9p2vJ2UmQr7fuPoPVa1V6wjMxygRtsoQmCtPiW2W1xkKoFMN7ySVnGCSwRWAUY",
  "key1": "3ZFXChzphhFDfWwKz7wb2jbTXJFC1SreDEuXAn5R1AEh3oEuVjSpHZLTWanRKSK4P7r81DTjZi8r6BKBPTC6feMR",
  "key2": "2FrgoVoumJkGCaYUeVFmBavaULSE8oA95eQDNdN6MNbuQFPAKhXBuwXEWcrR6DxkqyqzXeQgedkXc99SaJGe7zM5",
  "key3": "4eKdCvZhdwHdrzRt36RbvVBoo3r2wJv29nNK1fipeYReEdCh2CY6yEn8gXZ1yC5344WdoRTvUkX6tULr6iP3omxs",
  "key4": "3FhiZ4zmS4UF9Enj7coa1gRy3N1bvGCF4k4hupio37ZyGDEdUxMSpZtZs7HsmRJpkQZ9FfQ9p4zwNeJMBzJNeEk2",
  "key5": "5CEMN4a3aHyu81itRFJRprBqsPJ4gEVt5W4MKx8sNqJQpttKXUa641EoD2gWy9AD459jewmapHXNmhKRw41vWmQf",
  "key6": "2YsBBVxmQ3wepJNBvvgmb2sPmxDAGuvR1eyEKkEpGt46EDijW32pjzVb4cxsrsmCjTTs3srQnZ9y3fZR38swAe7m",
  "key7": "cpxNARV3P9ZCmcwsZWBa8jwhpLv3rngxky8gEQrrcVZLWDELcX7BRbevy1VsukfiGDqzrkGneCEWwMEwwhc1iTv",
  "key8": "sYvw9uWXjDPycax5uMANrebLwDvVPaWVyic3CbUW5pbP7dh4eJ8V3dHBr98VhXNjpGYPPTauDTpoajA1wQMZWKV",
  "key9": "iJ6M7jrHoxo6Urazs5Mzueem3m6HvDhixXoeJf3LtoYrhkoGrF9GapxFoSy2ovni8dDJQ5zpZv8FcQcZufyddmq",
  "key10": "58LWK7tAqH9QJH85xTZ31buJ8EgsMwsTbbuKnvRbVk9xSQUkverjtWs1qNuF4nVAyxHjMCeFnyimBjnyb8xeJRop",
  "key11": "3wu2XA7VTe1EdxvXenqVUSQAoE9NwYA99nZWDv8WViqXRkEAhaskmr7UmVP4GpBWdCCfjXFDYGJuQQN5KkA5iu4F",
  "key12": "dpJEsEgcFgP2Rk1iDqJMFm3f8fD689XCEeFU2wEbZtXCLEMByfkZVEkxbft4Y91ZNPCoCmtrN7kRUsKUZomTZdR",
  "key13": "fU7AasMrW2KubZGtUq96Gvfyz7EjMLmDoJGqDkKS7hGG3XcGPeJCeTLipexS5qGms2Stw7cYbbmsPotHUhbiwFg",
  "key14": "2ZBHNXTYp5mbc87uo7erNsGhsx5v8Dsf6pcAyihxK1hEEzZNMB8KgRUzs5dNXxbxQTjCcKeGeVPVxgtKUvmFAn6Q",
  "key15": "5ZyXDSSDqMvKEFoK8MEWYevLg4zXrxobFdYgAPo3hDZf4gBxLk8D2GtzCNH6DeX65BHAJayXjeLLNxHy5tPaaq7U",
  "key16": "2W3KewoRYRRLJfehTeKxWSwvk9i36SaCVv3MYt1cQZ8HfQ7oFBgFCXqTzo7LcH1zrumTigSUx5hMGM86DcW2E7q5",
  "key17": "5TwxZk7eAFuJnJdWjThv4XxqGfmwttf2rGWmNuzV9LBb3wjeWK6tuhjbkyZsDRBnYYeFUBsPyTye6M5pB1QZCq1t",
  "key18": "2ey4k7hQkAbQGrsziGkVJZp5gun6qk8okGpyX1GzSsdKg6zm8ak1yFyF56gUugW1pn8T1yBudsHJzQ892iS2KZse",
  "key19": "4nXcmrVuTJDcN82o7E9d279YfL1SNw95N1ZTpQmH5YMGSUQZ15zD86Vc5ZwBEhUzPE6KvZLtfqFFQ3YdbgfFDTwk",
  "key20": "4vZQR3CJVCVAosYpVDreXzFXc47Bn3uXZVHMtA2eTxTtHG2SfitnMo6PUpwCpG8aaM774TyK5iJBo35YZF4t44im",
  "key21": "2RfE5JQrs29WAyDn4NDQpMdvZQf1wBzAqemYdC4vFq7jPRtZjNcEWeF1r8g4DHNXv53o5paefh3Zb99URhGoVuqu",
  "key22": "5dKpG3VaC8UmdLzuhzUp5xGXiCStoikRBm34d4hL8mHSfoyFk6NvMWZGkbgsW4PzTep6xwb6MTzBRBpNd24nLXeV",
  "key23": "WYrvdDY6YiCmrDo9TgwgtBPB74VwVNthnWMM6bU74s5tWnGLkqt4YU2mFkt5kb4kt48w76YnA8jqvZN4Rce29js",
  "key24": "tSxS7vtmy8VsK7Vne1FbeznSNQu3ViAQa6NfrzdBAL2WmicxhaVtZG4R5cXofD3hPE8NhTWmKUnVnJgeExgq32C",
  "key25": "3iPmCAfHS2fzeZd3LrCdeoaV6i8mXV5DWNx6LToKX7WN7WQrR4uuGDpX4gHdws8H8RfYaBtaqXo46gmjEsPnpiRZ",
  "key26": "45nDoiAGnx1rYzPf5PDatXJAwZaVar6Gk2bfdk6vtf3RM7VspMmeYhs2W7GA116SQZPUsR6kTLZVZC34fLs69WyC",
  "key27": "HwMLpzyMNSA6dfRznMgiewMLyssz7PJPHMD8RRSV7A55GxaZYVWW4i6eCUrbgtUTQe1X94dgHkw2mrq6hx7pE9M",
  "key28": "3VszJrpeiaB74uTHeayQzDoLCPNN5aaAq43DoaRVAjaH4S7sbtUqt94V85YDwD4MtTE42MupqBFdg8N9JiUkiV9L",
  "key29": "2rCurqiVJRWL52WFscLvbHAfsFPYzNS8zVbXjsBnhLtVCcZLWMk4CgT7ci9JNFkmBfjuVLhjqx2oTPYic8auCko9",
  "key30": "3KpDiUcLSAFpEfUTfoDAMw2UXmzrdqjtzEQGG6d2d7v8nieJatxi3JZ8RdteMWdcEd8qcQcaVWEnQUmo4hKPbwby",
  "key31": "5rpobaAUkQMMDaqvQg24ryTL9nP4Ki33gcvPQEXp7qPSmUqAfKW3JNsLpM5s83Jj1bx76DSqbpS6rXpVDbUzL6kt",
  "key32": "2AMeJrmQkcQfWGcWgtik5o8gQBJ8qhTfD89DRC4nbxobvbCbMQA4n7fzu3w88b7JNSirBVnTe3pwFPRAomeVUbqS",
  "key33": "Vvqj3vpD4zGstvtfTRwQHBK2LRd21zqTcBnxmg3CFbyoibq2nKw47MkyFGuZnyE4PTDLkHjXVdNHxzTBzWjpbRa",
  "key34": "3sRMh1Kwiwv49VsA4NoPeZHoToTzASm7PiTxG2QnS73jAuZ2E3ZTC2aLBkDKQTpZ4ETnNB5RckZAgBazSm9WAawk",
  "key35": "n5TwdbapcJYkZucUjbBu2QqquzEoqWsFDra5MQhP7NQarHwqWikLTPGwuGbjRsYQhFdA9YFZHfZYMHCaBYjHtzj",
  "key36": "33wdj4bFRQHRrvUSmEHS4XHrUjnWCko8UPJJiqevPBoK5nH6Zr6wZVGuE3QHodt5QP2T8CVwyv2Jqf2ebRsAFhkM",
  "key37": "4Hq8J9PfQa77Z8uMLFxUnrbjeuKsdJ7z4Ldky3XAUvBd19CWceaRdurZrg1jH5XzmGbHrM2tFr3PahP7VuchCYqR",
  "key38": "3YmseCqvcd26QSyCcktvi2zrQzbSgvLsuyyJs6dUrReMdfKwzzsiMnU5wR8ShfdHqiK58XntcJ3MMiYTRBNpJNrT",
  "key39": "R6G9ov6gYrzoKWacsqxnUa4Ke2phLre2PWFPGoWjnQyJwewFF19quXDzFU77svYhWx2A6nfPJpgbpwxNX2bYvd4",
  "key40": "L18Ke8FUoSdZx95mU2cgaT3xYW2B1Zp5VMs8B4poV3Gjs2HL4Fw9kaMq8n7MT59W2o7qVLkSNsLp5CdpL5j2PCU",
  "key41": "44Hn6VbZwE96PWPZz4TwK7i6itrETq6A5ZXEJQcADCKPrSq6txLMmz3Y7qjA8uB1xAhhTMbY1G1jmtBTkF5mMmWc",
  "key42": "3xYyFoLHhihPmJ7wQRnjEEV5QF5uysipCjCqPmUZSccFfJ7cjz6Fhvyo4dQC9SL6nZEgtWPYG2GNYzUPXzUMM1YB",
  "key43": "3qwABkBbsJz5DEkXCiksY7Tt8bGwoxxhA2UdDLFfe9EArs8dktQT9jAVXJhh3LBsSSqLuT4BsqkiJRQTPkzAMk7s",
  "key44": "67eWDycCJTjqdXG9LDDjSDrKiKKSyTk1dj51TSENs6paZseb4RBQoVwg92zs5anw2yr321pnp2jXsCs7dF1fp5Lk",
  "key45": "2QRxat2nQSPXGrtUcz14SDSapDUGYouDrg4oWLxVxwB2jWnbvGGJ9rcbj1KhzbCb6fLxXzjk83dYgejx2rZiyZRH",
  "key46": "5N17LT21aBk8dVD34k3upFUvPny4y2w9ijD1E41Dn6YCoE42XDtY1vNXYCmf9m854hNHkcMrqNKafsdvWwUPYf1B",
  "key47": "56iqvVutvevcvEiwbNsGv56GzgKGkPFp5aiFn6A6SdYKLJS6Phpi2qRfeiYUHFLWH9WQsk9zXJ2rnv6ChXNHPqzx",
  "key48": "2JRmdVvUYSfefpvTjnno17hcgCKuYorp4yvf6CrUy3mmNT5e6fMBZhtHRsraTU9bYBK3ZyUy3ekrSLnhmrb6WLUc"
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
