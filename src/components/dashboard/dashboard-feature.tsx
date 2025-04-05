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
    "5C3uDSNKddHmpJjavXje9HthuhYdNzfoCsJgUgdGp1GCXeGex4fR9Hvebsx7231pCkCuX7tVwJ7KQTSsANa6ZtDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D1RVLjTasE6a9Us3pKq2GFZJxNNwwfSigoQiF6VtqMSXiU3iBgj74VQcugUxa1S9Y9RzyEosPgz9bbbn2JA2cgN",
  "key1": "4daRoWvaSV8ftEK8rM3YkFc7Y2HWTms2GDdA1mAMCxk4S25i3vdFvZgzkKHzfHcwdU51FKcQnf5u6vQ4NxyWT8c2",
  "key2": "52WMbi2SDYzumHuuaF9dginBvGxBdREyvFU59hpJ3vChT63K99ksby1PsdawTjucVF4eCGaFuu3N67Ptai7e9PoQ",
  "key3": "37LqffH8vvmpmrpRKrEqtdvhsiajmosdkuBzjCfkD15ija31kYV81Qtz5ui6Bzi9GZKVczeBzVF9HEA8K6cfywRH",
  "key4": "LbQFtTZumohYTGJA4LBo44g6iB7sFaLBZuH6eGUoCmib4DcnLvQzdzZiouyvmLQmMsT7LHnzoxKtiAzuvLoj5gE",
  "key5": "2eiiEe5SFcy2AVNPcuPiEYqtQXJjxKiVHyc6cgyF52rNR3ea9fJrDDMiCNBixmx3YaHrrkpjX3s78RfsALjrj6ae",
  "key6": "39itQorrrrnwR2w2BZTtkf8Wh476jsGwgQkWq44RGdkeD6R7LFRBqSj7xruUmK7b6AmkZczP9WL1Gpv72nXuUnkG",
  "key7": "SkxF8Hu8x5xgv2sfbSStkqcRkptEBerspkJszUFeRpeBGA6qZkVFP8T5RXDirQUJq1o8Uyk8LacdfGYT17A6muX",
  "key8": "43FheVbJN6ACnUBo817cqX3zBXaQqp51Duqs2iL4QhWo8SSQCYDKVfPwAskU9pdMLtc3DpDQ7561nXLbMWLYfVyE",
  "key9": "4kicZBUJLoRiBERvVr2tXXjEuyDVBZLgRVa7ucTZW1eZTWfJish3yBDH6tgBDw38vR77oSekM98tCpLs3Pro2ndT",
  "key10": "njWW3LLDTkuSKbfGn65K1M3P2MTG14ixvgVVRbZzFEBwgRR34eKqBqbc6nvroPFLPx8fwihtL928LX15vzRN4Gx",
  "key11": "2AH5yMBrnzbzndGxPPf5o1NDc86HMuBWd1mfBksTS2Tvstf6PkMzDJagW84fjX5fCk8Pb8ZnY4w1T5R8DTX1Tyeo",
  "key12": "25kDnv4TLSdwtRuo61HqvtikyPkrah8ok6SwdQqJYoK4AM6YEEMZ3F2QrBAXP1TZ9u2X7T3JiZgqin36vofcDLna",
  "key13": "2GAu2sJUrQJaFGcu515HLC1nASk6uTp1L1HYyi2AvkuC4dCA4ezsgF8kkZ7mRYgcvrCKU9Y9AbknQurfgfPAFj8F",
  "key14": "3oGdGMJR7KDhW7EQmGbssgpMJ1bG1aw6YCZDa9n1MT8eUKjrxe1UYz6T7zaFLnxRACYzGFqxpxPSyybwaTYGJn7M",
  "key15": "29aFipsAcxtX75BwbESfBZi9bhhKUZYZRD2C1jSehCf8ahSPi6Gc7bS8QqiCL1Tr7dbjZ6MLAgK2uuzSLZa58ZL5",
  "key16": "4RXTK4jDv18WomVZDbN7pAGoHSKwgRqGyiEC3kdnJtUY2mVGWGqmDn45V2LF2rtwfuEfJ7C65Mo5uVtVVt6wyvva",
  "key17": "4wubm7w4CwEaoWodrb9eJwVoNaz1i7s7VPs1ugy6UCtt73CouzZXJ2eG4kcQokVd7JgPcyjy4phbJZVufbudB22G",
  "key18": "2Lyh2R3mMACqCNack6vQ8YYNE24FWfc1B5nHwSpkvhMLAeHWbiAw1TDgyceUGLxSK5Z24KGGSiDYRQobRjnUrtRc",
  "key19": "38EYLejAkLu4qT4m6JyEdtmPsx2PT6PFwXaWUm8dyX1ETNtgZFP37kMoFf1FPUkvJGbb2LW2vfN75GAiti6WZner",
  "key20": "rjfz9XUASvR1Y1po9mwKkWDtSF7VnXme3HxA48ByUEyuN8bGAP9TZmUtFXXDYJeWQL3EeXDBZU8Y7Ewwv9wF2WK",
  "key21": "4bkHgtmucQusLv4XK3kPPfTCnUuKngU2J5DayufWLzQwW3gGWKLSEtFepfgLiqm2YxfDbpfBnhWtakYnMLuT4iC2",
  "key22": "4iLFbATeiS5DWQrSdgg36SMZcDbrvQk8nUy1C1FdhuKFz8Hwt95RcoSRSL15cDNkjPFBPxiFaWBRBq25ukTY4kGt",
  "key23": "3jKbuqJJG5CLni9NCftns49WrR1n36F4kHzsS7iDbRsFjg2NV8Tpjqh4MHeF8zcVcFL28FWDqJZyRB6NbkaAzp5y",
  "key24": "5e8L8N7DyHJckXjz1QuwA3McJRkxwuwXSu79MD8RxMp6amjrPecqCk57TeLHGuRF9AeAB8zrALQsMEvqCkW5YjZh",
  "key25": "5A5DjsRJEmgofoTtCp6VpFSh6nSwppH776HwtqSTiVbmfnE8RsBLSCTt4MfiQft99ejwYjC16dsfakvuRySqXojn",
  "key26": "5unoJbREtQqp2N1KYbKo6mTNM9pNSXuyUwLH5wV7UmRFvp4VRJKnHgsZqMaznCvNdLsvgRGsHRNkLyzGyaJoWDkJ",
  "key27": "52VqvA91QrZJzeeQNE1tXr2Kjxni7rtkvYdaEpH9oH17PiMhe6wc3apx3ucc8koPbF7H9cKRZvRGjFYLFvVCvb7b",
  "key28": "3v1wUGM7984JneoQHTAD4JZzqJfpeNzqLWwGir3FdARvQAL7rn3YKLzgmx8UHuD6XHVpkvDXXza19RcYpMUQeHHF",
  "key29": "2AtNGd9zihgng9z9aDAQKVH6zgDaXFhEByAky9G3ijkTwbEmfbTCpvSpt1JGUnLFwuhg3cSi84pCHRYnqtFoqUyB",
  "key30": "oXciZ8oXvr5srQoXfgpgMXRGaoVjKGsRmkekPDMnAxLMXFfP1JvWyYMfykSHgXCUgWv5PTafrTmti3A1z8SfkPs",
  "key31": "JLW27bc8XFCYA14XrUv77dERX7Vihr5oGV8KbE6PCr4M6gYVzsDUVAjB8CdbCAiJs8q4Wkm1eUtrQunfAy7Bx1e",
  "key32": "3tKFaS1d23WnsBWeEAVBQgCoDFwNGPgRoEhqBxajNEoXcXtfRBtBPEpqKfYCNCBnWV5pQWmevyWFNR35Nhu9zdHC",
  "key33": "4wbxgrqNZ2duYFyAVwVDGBLFFpfPEi1aEeiRUG4duMPaYzrFndLc9tePhU9XFD7fgFAwkWpJVrjkrk3TSHu7Cu3a",
  "key34": "4Zv8vnfJtjPc4sZvpmQsEsCsE3JrdVXNKKQSEVaiwwbP1fipk1fJBa3Y9jBS9x6CaeT1wExnvL9w2X6Qnf1CHso5",
  "key35": "44XfB9ge2uEoGCBrBGe9ndvU3VyCg3Ps9MwnG4ob12N1nRWGBAKVQcqHopfewKoZxUwaCVQ5HDipitiyZ4wcWcnA",
  "key36": "54fAo2Y7iJ7jV5rHG5MKBSXcU9EqHB54yNNozmaS31emdrf9Qv863QChJtf4VKEpeagAofKaN4j7BEbfbwdSMVfy",
  "key37": "54BkTa6sPwAc5YS87SLkoXqwzUMqhX4wTNQfTTfvuu6XbosUZhaLvqWe1jpCExBUCGpgzCTydBPm5uXw7GCpZyWf",
  "key38": "L56ZTY4C7cKm5HDkiSCQjCnJqGNB6gGFLmN7cznXXczyR8WQfHC9EqUcRi5ffLh7yigfBeaJ67CdBvfpdSKhEpD",
  "key39": "5zSjEwJci6kZz29kVgqTkr7gBJ9qpXMExabk4Y4ktL3A58aVd8JJnoiSdKinTncfv5gLpLVtg78kXsHsSXGs5jHr",
  "key40": "3XAuxo1HqmcD7x5kj7NvsQHSiStWsqvrjyf2PdWYxy8bfNWfYsCm9mVpgdqEF1XVcpm9Vq5cCrRGfxPjGSsqANRS",
  "key41": "2ebeq4KVVWgKEZ2EwsiAtpvP86ghe1UCHr7TH6UMEoaS3LVuPJS4qfgNgRUiXzihuFm1qtNrwA6cXX8f4kdwvJaq",
  "key42": "674AmfyztGHBQRKWcYFaQFYeF3SGDY93yvA1zWdLjXcDxEhMsfCHQxvoPx5hC28PR6UJB9fskL4wStmkzbddqWbJ"
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
