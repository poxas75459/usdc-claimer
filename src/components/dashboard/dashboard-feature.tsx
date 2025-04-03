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
    "4ZoZMpjnMu9XEepu3gUZ5Yur29j8SQzS8HAdFV4wr1HTuRAAgoE13p5WrwgsjRk2FcGp1RHZYpU115xd726WsRsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFsSt5KCgPnJFxgBnqU7AznMRaUyMVHBQ5B79couiqsuHTHNihDd1WFCCU6wdyRmYUBsbba8FKaYhJhqnt9fd57",
  "key1": "2pu62RKNTyjK2PXsHfNfxZW8VJhekB6GwgZVxccJid55bAVLJtGjpMWJjkfU3E33nCj4w7zBAzTu4X2uxyi2BUUL",
  "key2": "4JJahVpV8Q3VHAvFuCfpHfxLLoaTHLgpQxyY1HYDYejHkWUwtqYPfJSK2JmKvWPwWtKb7TxfGQvqtrmcCW7Hve5D",
  "key3": "3e9k3fyDkhFJHrsAd7WjmvHPpKhHzB2wFB2TNzkrQDioGHsaEvRwxnWXq42gnRDN8bMhADBXhkgurHewar8BRBwi",
  "key4": "4FTJCEAtTfw8Xc5o7HQJmaa4PJ23cRJSjL4NQvhbzxi2Yd54DYoSaxgEPL6H5AT7JEShdpZRYFk6iYoFbFFGz7XL",
  "key5": "4DkHwgdzDs7GGuo9fj3wLZNCCSufYzsconxRzH1uNxSkK261nZXpjrt7inc9toSfBSEdums1mqZJ1n51g5kKNx1b",
  "key6": "4HMgKFmLWgjYoELMWxobNSg8ZHvheY967Zi9vKZjmcGcggu462V71Myse4ABNkRBdHEeo7h2pSX3KAsToj2cS87D",
  "key7": "2C9sQYxFKG7vEYyEwUDAiViQ7Pp9jJDyCwFJtYBoDQp7FLHRALRhhbawwb5YfnLu26LKWGNkb2sLiqCSW49d1phr",
  "key8": "5ZDEKcPLhLLjp7YZCNunBzVGsAxoV4qQPj1XgP2NV1HCpJwDFWDHGmZGwdJUyauevKcLaNXvxBawcpC57JZTTGkN",
  "key9": "3DqMLe9H6LpQBb6M6WdCo9SJ42U7wQHQqHW786J7hxEFRKCJLc862hrefr91GWqhzGTKgwfoGV6kZnC4UY2sAqTv",
  "key10": "4vJq2JLjVPG7RHi3EEwgDMvspnXNmp76B2yof7HHPmCPKbr1qRgiRiXeEvjvzPvCHjGodV9RZQUvq7Hd2zNDrZMh",
  "key11": "qYtG3hN4cFYM7uMgHJEGvnoF8o36DhQKsNHvaEFeLZuHNYq6pZs8JJK52sZ6jc1KXttiSCXy8ULXnWUsjGEEYUE",
  "key12": "4LAjATWqgdcELcxFv1JU1fB1aJ8GrToixdDi9wQkWm6DL2CbTbrNX5nFxmSCJf8XSrqLGS3Un4vWR3YQit7FZdQC",
  "key13": "ddda1Sjj42vRhD3RLnhnvvrpMD1dZ1xuKxhWSg6mq4ZmMQi35DgXtQMkMNkFSENkdNDqHewge93TTkKaX4bfs46",
  "key14": "4ucDpA3HpdRZdfU1aM4TMF5UAEkN17EFfghCSv8tWG8AjNGnrRrvkYJwsnp47y8fuGUj9jUmj1wSZVTAC4cYXACp",
  "key15": "2hLwF2KwfFJHUQJgX6EJu5spcYAUBPYqZFwqdS6rsSbiAvZqgWLcW5GZHuqjucY7fNVXazcqEFkPF3J24F4aJYgc",
  "key16": "4NvYNNCwC2zrT5RwxANbqXYdMgT4vs8utHsipabwYPyXHSkmLrG1B6U8V7RjLiUZHNPyS1z2jmUeXbFzVFyMSU6",
  "key17": "4sVVmodsZst86iyYy1QKrduphspxBezfTrkZXp2F6fvVby9UiFNM6Db1iDmn7XsC8SJRg17m6ys6eDXM8iJSQCF",
  "key18": "Fa5xqd3R9krCkYQqTVVxK1NEia83A92UXAxJSxyxinR4jZussjWsn8CxZnaDRRjYoq1ky2NhxesxrCxyniRhGkK",
  "key19": "4ceueJp5GWoLD4oem9XfzSBcecHdEqJVfCBPj1SbjChPTHZ7UCfm7s8qMwVA7AmUxwjvU5qtMcatYxt63KVBSEHT",
  "key20": "4nnV9zPZCrJwf3USpHcwTxHurZoaTnMQ4E93jVsM7Yahrh9pXQGWzh6msCQuS9dEHvNbhq8k3icuKDFmY28r4uGT",
  "key21": "2psCcfBiWVG8bhNaiaWHZDZmLkkaUWJm4ANFH8KRc1bLNuRPiE7UTch4h8PAdDf17PUsjaMs6UA49scuEcGg9kDP",
  "key22": "GXMqa4Awii68sYuruaXdX6CD2PemVCVpPkQiqbR9dAPN7byVtmcgVf9kGAmkV8CyA4u3rjzRcitWpwj7XHngHLP",
  "key23": "61behjS1HSPJTWiXsaaoHPXK59kzSQYaoi4euJ7QAXBjUXtvswgqTE4GHZGRcsK2iGNXsNisPN5cvpmY5S3roFuv",
  "key24": "4VHAzgdZ8MhMFBsQms7TTxWJVNhPKrnnYR6R6wrkZ1YY2nezcMAkYuhhxxz69AroMegqUVdF8QEjf3z1hsrjTsWR",
  "key25": "3kcNthy1VMwAKKYd38x8Rbnvua2T8wK3BVn6i8fkGX4qVG3eRKKjWcTeDwJdgpQs6QuNM3m7azPGbSSWJ1U27KVm",
  "key26": "5sgg6ggF1Gq4TL64r3LiXKpTPUSAacu3fTUcmWubr3iBmJTuH33iSze6kvEHqtiFi8nxYfrZAwrPFsJtJ4hx7rEJ",
  "key27": "2BoNctJGGH4w92pMiZcKeJLxTrYSV8GUXggTcWjwcTHjtX8gw5U89ot1UyNGUnsShCN3crsXBHoVmWMhpEmQ4rmR",
  "key28": "4hUFiFxQt3aHrkQjcZxhsuU23iAKhonvqFr66wJJCtzkNspSpXfuJd21SxxSBdcnMcZDB3hddvY2SZuvSoXv8BbT",
  "key29": "i2sKDvkwXa9XbUfzhGi18yVT5UhUrkwP4WptoMUtuhhu14G8TS4eFPrhR1XGjyo4n9JWe4wGi82jTHcvo71YvXx",
  "key30": "5H8BQY9n8t1WSWwdBfxgCGDQ5imYfwpLiNh4WJTYtez3i4ty2tTtvbYito54bBi4mk4NDjDN51bGTJm6VExedeUF",
  "key31": "4PA2gz6QAph2xyjY7m3oKnz7cLj796xhFXSfmCT2zYnWkmz1YhMET7dCjeExDck1HzHHTPPypFeEaesviYu18Nga",
  "key32": "48Moqcok3qsWWEpAb4qgxzmtaLHXsuEC4iixYvWqt3Hv1CoLcEb8GW3iREBD1UFVfWFg19kfBNUdRYWsy32jqbBN",
  "key33": "5MszrYqkDor4Kp1zhwJ2dTDV8bqy3mNk8KZCGCbq3GF7nLfHpsnzUQ7zrwWJS3yMJviFKzPHQ1z1okWR1hRzPP3d",
  "key34": "3q7cuWuv2pMa6NYPPgCi6DvLzoMy9zAaAHHASVRhKPLJTRbzRXi9KhhDGzxBvvdfbnmWEvYEJDGN79rm84zcB8tT",
  "key35": "2SBBLJbTLmobfXcU8mSTBu77BzE4vtBoFUzDJ2xfMHdL2KPTsHQQNy7vwu1KWWPjwjcqmvxqdM1wT2VPTk54Hqqp",
  "key36": "3nTVCC1UyH2uQSPCV4j5pisEKi92i6NxqWqdT1hU4ckm6zfUUW8vYZCsAkrnH63JAiWQnuqQLmhLrCVBGs8GfQjX",
  "key37": "3JZN5DqBqNiCajt5GRZ8MGoufJBgBSyNK8ovk2JGxtKK4GAx11Li8YXMSkZ8hAQBwBTgKKCiq2Ak3DA2yJvpDg96",
  "key38": "5Uu4mFhX6MbspuQ9Z6JENoWtMauto1CUkme8UeC1DayezwnVti84KM6HzKw6bu185jQeniMfkeFuDG9ACkL6BUs5",
  "key39": "5MtismAc9dtM6Y6ynrCsD313RvYe6PGHLX2ori9czvXfdw8CVPhpouaS8Qk3zFBosWLpZJFrXBKNXr9esGd45PMG",
  "key40": "3UVYGhzwoCFJ2xAhu4PBwmHuSvyTFPvHAKG4YxKJ38dhWAqBfmtJ9tRmqyDJTa9CwW7W2Fe9mb3xmnxZLeXdSc3w",
  "key41": "3z44LHspnUPS5zcAQv8VcRGG2Mkt3gcowUtVTDXnWg2L1GMEtRuhmfyBCKJSTETQCn4QhiPZ3BMwNCsMysH1vuiU",
  "key42": "3a8Mo9cC28vpuiDG26Q7hBWtpSaLp52aSPFmFkJnQvRsPXWMeXq7Lr4o1hpktVLzpYF4k1hcGcHRfm7AXoGWy9oj",
  "key43": "4yJcZkXBjo68m19tE25roKpzAVpR3bytJt912zCdCWTPJK6WNPzFetgdQKbsp4kFPTXa5abdJyWUQ4LeNjkkgoYv",
  "key44": "3JCLRMBDRnzU41ZHPNJHw2hmRm64Yrk1GxGxpi2cAL9cDhua9JshXvTYqtiUC8MbVaeMSJzEN3YfjwTh9Kf8auHf",
  "key45": "5k42Kr2UVqDxAbyvFYZRh9EgaAJ3F1V4TsSKbGhFfMgXYMLazoj33An6dYvMEyounxsu6bVZa3vM9TFfyjD2ZQK7",
  "key46": "2zUTPupvAAqSEertroCgUTDXtZNhhSbZQMDyKi3P6dGst2ZHSK26CE2vbzsiuXcVUadh37Lju8cMrU1XJhvCkBzK",
  "key47": "k3W1gM2hvxsJvZHN7gN9vLJUgxuX5YbB3b35eV21YncR5jYHeqFMDppAR6wg4qy8mwqyDBTwLCtwENqpYDV5dZc",
  "key48": "3MCMrwciUCNFuxTKY1T4bNaNiHGnXK7vnBBegoCopyJ4hDnE6r3hiX2UD4W4537ZQEhFZhZD3EB9YdzFJN4pnmHR"
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
