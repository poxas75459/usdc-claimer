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
    "3sRjxf1rPGrh41GJ3uKSjdK9fHAcoQpY6iZzqV17rn5kJnZa39jQvfaz4dYsmdCLkQ5QGBV7iJkJ9D3YAaSMBD2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yy4jbvii3AdbvWFNrPbPoeNQc7QwARpWBk9u384ZXk7iF7W6YCqb7NfNsxSV9pzeRo1eBtMRkRePmre6yCeV2n",
  "key1": "2wGNaPSrQSbHpcsGJBRjzuBiF1qEz7Nofevg8Zmgn4dCLJguEuViXuHtebMEKo3nRwX3AmAsdzGMYpN28P7XQiBR",
  "key2": "3d6oF2ezYBDMcesJVfY6dLZXnJxu63m2cBH2mb3arPVwGiVCwkW8oXoTQTnWhknjSm5qumi1NrEmYKyKt1ms29hb",
  "key3": "NLMiRZJGdaUrUe144d2en4pYs4cLMcUye9GVhjRHz3R2s27tPa5MnqTTZGeKT54Z6DmwDKsYTwSQqa7eNZ2BPC6",
  "key4": "5EVyw4dqeUKjFUAZpLWU8KdFzFpGwsxL2hiLJ3GetLbkg3rVuRnrywLDpyz9r2Dg6m2ot4qZE1Zov27KVMbNqd37",
  "key5": "5dj4zVy1KBXngvUpMA6Jrq2qJ35f9CS9Qz6uNPRmfYwGvURNY4NDWr1oCkTaJ2UHmiPRCCjVS4QAzku38uDJPzyb",
  "key6": "5a3zxusC8cWndEJoak7YgxDNe3mMEsKsQCw4wSaWjKMG1bhbr75TADk28TGD2w8CpTBP4watmcumTStoaeJ7Ywba",
  "key7": "26E9dmjoE9CMocA4uAXPXYKy5BvNJdBqMo4UNBC1WNPCJ2tA4LFqMW53753fN5e7jHyQSk1dEN6CbrtFSmeTKeiR",
  "key8": "4k3vMy9JPTizLeesRigyrSktDwMoNXhFjDxYWgJVAcsq1Yi7k83uUZcXrukeggMFBsRWnftH2FzPWhCPh6FHbARp",
  "key9": "KHp8F9UDsEiVaxZkGmHAyo6xuL22oAmLzrod5pNf6aKid1agD7Biv4sGX1zcvNAEbR6UvoMxHDYhVuAARyFxbqJ",
  "key10": "L5BjEGz4NiP1A64xXrCwafbhprULdjgfdgrdwLuSj5Nh4qkuExomdmNd7TJMKVjzJiQrfA4Zs19FoJ8EX4JdiK9",
  "key11": "3ckc1PLux18qc6uWgadw8mherJbyKj9SmMgcjnhpGgjz2kCpcsJzWJAyP4n36NpXeciukg2pFd6oE977bLuBgNWN",
  "key12": "4S3gyVLmVXnoLhbRsy5K2iEok7adAsfSoWMntV3vFPpXxrTTg3e6pQQLRQnwQXC8JGsb8SCpY3ZciTYm9GVpMzPK",
  "key13": "55RK58Cz1DRpQWzqZSXpiMfwJXVee5fXQf3H3a1XN4xunVqKvpL7JcjjGCAEkyQ6WCRyfUri5YBpF4Q7jyUrANhS",
  "key14": "4XdaoQohp2Rp7VLTpzhsadviPL9W8qLTmQ84AoEejEsShdtZhv81vpd868vBZvikvni23epzWgywh5FDGPHNKyvL",
  "key15": "5Z5RdepRnu1qvmHtFH6vh55gX4xaCa6qvZio4cNN3fED69bBNkKhES7vYEACWmfDY2iTHdTvySVJ6T1dNksmzfo7",
  "key16": "423qHGLinpZNGfyxGMuTT2zLCAvnwbf8KGcYUTsjM4z3cVcNdki269hAgQu8eA8EscSouHU29oQT9zfaUzxkpfjY",
  "key17": "jwp72mrUG4odKtCdHV1psq1BA3ciJ2i6sR3RUG1MmuXavzCKEVgMoFD1ADoTCR6WvJn4enEx3TRo7WFByghqTsp",
  "key18": "1MEq317Mcpgp1kWbGFTSryyL5u8aU9iMZXuP2EcRyNjqr2shhgakhBvJCmYcLmzMM39kc72tiBpAZ57zBdMAk3h",
  "key19": "5RvLNvYpkKnsRX8UVN2D9UqofrWQRAxDMruf6jkdbDKKreUimbpJYzTqycuVhSfPjyEmT35co68FTfupDQu9sz97",
  "key20": "674NJT27Q3TC44De6zauYQVnTyCoC53L7eF3GYwrZArYvMYyxjGP1fDHFygzAtwkGKtvnyjEg1wf9LXeaCbmFZu4",
  "key21": "3gFWrQsioBihLd3PrqnBc2JDtJA66ysoKiWVASnm6XcyDtsbkRzB2ts2gzy29ZuxdSAJUbTvrnFkBJ9uoNLn4aJp",
  "key22": "2y4d2YPE1z6HXTjJGTLjWmmjVBPdtcfTjU5GqQBhWLUnoKFL4uqQWSm9ZveTPBUJuhVKLTDXe3ii81mJLMdRjZnk",
  "key23": "4oAseAroYybteKtu3X3erbU12Ht3YWqdd9t5C633rRmAvtshvFg67AxK8cahYdrSBVkBBoQYhPTfcRegipqGvZrH",
  "key24": "576Wc4kkXBRV3PjSSV5CZ1u28qvibwxCeFXP4gQ6FVPCd9ZXz9EnjktsftNziULVMN1semjEoyQ3nBhRKLDsmGBR",
  "key25": "5Ym2K3W6zZYpJBsXKUc63AUL3ofXh83gVtnjL8ECsUypxvQeZkSe6H6xckn4Q7D1if9SepbBMnpS7i36U8rw7KxP",
  "key26": "NhFT9HkEZxPWuQZiNmnq9NnT5eStkE2bffoUaeofXZcWnuyUi85Wo9nLTyShL3aS4AcjQWB3EkvJnAyAy4kvoUd",
  "key27": "5egipJaZ1B2qBuNLFQoUHySb5oyoEEacZHymF4FC3KNyo8hj1BWeiBXm2Jo2e2WgtcKbny5imVdTrB4FjbM7aesg",
  "key28": "5hPwa3tqS6onAa4ZszPHFwJuTPjtmpMwDg9SUXhR5ipwXeFBvFwuziFPzoMQF4KuGHBa8g8CvBguUqRs9gAEBZir",
  "key29": "EYiBdRZxFhVpnGvPmxXfbMhxypTtsXbtUmd3LxZqubqpKaDkn7NuRjfJWz9ppqERyCh7R6XtMYEro9SHkQXunjf",
  "key30": "57jS8NRf4gVesqFCsBZE2VxUtyKr5THNgNyQRZzbMUdJ9irpa5KksEQQR931qzXLWBuPoyNRmhoQMRYffwScxLVU",
  "key31": "WSCmocs2APzzx723DVNRsVF2eqMdmsHxAqA665pRcVZrwUqfUFZFxotonxXUVSfuHTDwbKgVkPrK1m31SyJpaqN",
  "key32": "2ErXM7qNix7ZTYjtrPriV54VKEEdWeZxDufpoTMFh4Pj6rHg26NQt8kSoas6ZnRyEXDMGWZEG49bbVzfg1PkXvZY",
  "key33": "4t2gpxUR3sHEX1msmxK8ioKWC39EBUtfbEnwgVK6YiRh8xozp8asoBtovukGzLsURDRfNjRBgRQXUFHfysCms5wa",
  "key34": "5EJ3vncGEHz1sXMpXyymi4kuNoPsrYbDcEKf4E4jTwqN6LhySxsrwrgfgSs1DxNcyCW1ZRqYF1Phxw9t26Nkvj5B",
  "key35": "HpzubVzeHD4owiZdAuTsVwRLcq6GeWAuRNho4SofyJRMSjmurLdimah75hyF4CcKLP3LUE9xyQwCouTY7YYaDGE",
  "key36": "2xui9KPNeUE6zgJaCJtiBzvPzhS1v83nnqL2veHVGKoZagcPwXm4R7hxo8DDu5vQdwXsn728ycFNHiUj5giTX1Jd",
  "key37": "borHetZiRpxFSrUxqUQNS7hnZha5oX1mSLt1rnxGA52XjM8nxMHkKR4aJKuKjugJceMJ6UrYX3r3Z1gzDa7H6oS",
  "key38": "5uuynXTQ2ws83AhV6rBfzfMkFiWjbjFKFzdUNWj8ZChz8f7w6cwAZgfNR8bsaUwkbhP4iRjofn9HQHfjGUfcfXpE",
  "key39": "3CWmmGX563pNMcgfHcxyXDwT9xNXKUwKc1GwnaXKkFXQxN6qQfNiDf4t2TJe4XZcQKqTBe5jBc2hXLURGkp5KmCM",
  "key40": "3uQHugSApxskDpx9MCT69EpHgaQRtBdjidW5ER2kU22d2RukP4ELjLaodLHV2mgahCfbbuJRigArgP9T3wyWb5Ub",
  "key41": "yqSGuoQJk8z673nCqNbF51zdTkygTMVrHC4w68TfuXneByqH8QxnCJSbo78eWsieY6cYi7iTL1Lba3ZzUcGiPtJ",
  "key42": "mpc7SrzcT1zbH19LBMEaxLMJvoVfBpwkBsQVJhihgN9WfqxJtyeXpfudmEBHEKQScsk6UuduLMJziJn62pPnpoU",
  "key43": "4xN59JqcCUPR4GNUV8N7bgHuSEXNFPgXZN5NkunTiF4ZXLCXF6LpqtfYbn14N7ZRCgdjjwjwA9hrftsJcFXyaWZj",
  "key44": "3XFBhP7VP2qqFBjo27ySgPUAWcrHXfEoBHeop89UCYQ2hxg1fGKZhzGwrSeRnLTMZrLqTqSS6Tvf3zLPQ9qDKCe7",
  "key45": "3F7dL8JCU1zYWaPAq2Un1HFaYU3ecw6dsPxvwZroTi1qqkURkPVp99zARmJtXt7pabpQvNZLB5TGZ8asdk6wNdQp"
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
