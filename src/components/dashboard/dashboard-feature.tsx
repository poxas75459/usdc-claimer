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
    "2r4fhdETXGxdAmWZtSVLJV6WMf5brXum8YxMwoDF6PiHBPmxnDrquSfVPpG2mq1mvM6ewm6Dur87SvADZ6k1Y8dE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjm5SEFXopA8hZEwNTsQSTwcPJhhgXmpyb1bnKKDpmPxtEU1qqB6kmZQo4QNs5eF8mFqSbN3fizcat8d2u751Gr",
  "key1": "4AoP2Vnens9PMSdwN81ceZPUvyGDBSVe2RGGzKVgfzuxcBkjJ3Xavz2hXGLHtfpua1Uv8P7oFStLLQ2CeauAu1ZG",
  "key2": "39oS8DPSe2jwUrvQd3oo4XKGxGXb7rgi4t26K8XKYztmtqsDirp7VN5oBZpZ6QWFpMRxs5J8WW6SdZwGp9U8TqqF",
  "key3": "2HmASKD9Yc83yrbnBKQNokkT3V2i8LQUfmgA9tQ6yGyTmvLio49U7Pd3tfTa66DfQA7LtNkLffQ1WtwPNL9qJeJK",
  "key4": "5JS3BdXp1FHxpeKLfXXvwkQdkrjkZqXYLtyeax6rDifB9LHRV1JKDMywaWnZRYfBD5ZQaQXhGKcB4w7B9tczxnjd",
  "key5": "vFsGwn9i73qtGbq3t2x2jwmqyz5XnaEYAkJFMCkH4yPhpLyghJnwrNmPXRinWCid6ksFrpxV1bdZ9RUtVarYeGm",
  "key6": "3waqiTwihiDXQLCGd8iZkySvZQsTZjuAHzU5ELqZ1c9TbrncMUConrBKZmQWCNmuhfDgSaCEPcLSaRD9RrAwkSUB",
  "key7": "5iJgf8N8wufN8WWqFXuZepuozHRRUEBH72sHdwc4tQzZ52gWmtoG4Amw8NamFaLBcxHkPmJUdoLt9GPsqoxoAJNV",
  "key8": "2GPRuUEPSQeUy4Uobi2uvP79jCGrPtGEFCkzWUttju2ZywBsSLncV8bcd1wh7bTSZutt6UbeJmcf1u6s1XY4oknC",
  "key9": "5LPq6StEMkNpq1fqvDgE5MnsoP5dEwDwVkVmcBJ9mjC2t1zk6E28tQqPTwcv3dyyUsvZVKc3HT6VLYKKMQcyWuJ1",
  "key10": "5by6gHFVDjp1anx5ERrzczd8Wbyxuo67gJHY1trMuFVQi367YqyazM4zJZx1Lp1pVHyH9dixRYduQXPEyRppYfwZ",
  "key11": "1ny9FXs7TBfsPeyidLnbQ39HUL9MiaBqKaYLnK5rwo1krUy1wju9CLrDGcVACApLF7xd4PBpML8fyhUYDQPZaob",
  "key12": "3KEYGJM4whxAnDWVLU48ucbr7Ng1Gg92PVtsLMNqETJ5BWq3gJuSBanBhDs5Aa32ggc99zmK4P199k2inTDDzyg9",
  "key13": "5jhkG8fNtFnQ8cU86UV9GgX5Vpj3HXXcPv2iHHFS2rkCtH6cVG3niuuqn8SCmoGMjUL6srsZDwYuWzvJNCN2rJNr",
  "key14": "5rW4MQGbKS8QLLWBmPHktfsLsq5qMrYZNADmrVjXH8B9tTrJ372KAxXYkbGWKjPqfp6K2b5yFQTx4USBxeUbm77k",
  "key15": "2nZexYXQxA7gVqq3eRPQA6ic5ZM1hosXskUhAw581CN4NTjpkaixkXW5hCCui4GqGz2sBcZxpCAkTZHwwho1Z66g",
  "key16": "4FVCT8Kkm5LnwkJREayoFtDXkWAfjt9Qaoom3RFnbfYaWNTp6GYQpMZB4CDm66FLJRDuDaEJ8xGkn46czgSMVroN",
  "key17": "4rGu6qt2dux7DxG5WZjmfVCdekP2Vj3uAY8g8TLfMgLxBQeaJsooKTvQL7L8NySKK49zJ2Xm9NctPdu9wEqqrNKM",
  "key18": "3AKGVAVR2gNdWQX1uNjA7sHmyJWoJenZuTHkSYT6VfrNcVQpkcBRfYPvWJWhzCqrdQu1Pet3xjrds8kX14HLaNS5",
  "key19": "54cfMiYuq1zEKujkY9irzDDNvqR2NEBd3VLgYZyDdrJwsU4xhcwhZWEb87jKi77zk19Ua97wUZPiQ791ftzgZPPh",
  "key20": "3Gy4Pby7sPj1kE4GiuPfP7JtKKffLAt4KoDpWpVoY1E4MTWPj9rEkTvG42h5vErZRENoL2KH7ep2GdY287EaSpid",
  "key21": "4dj4mA4Zr6Z4jDpfTJ2YQBkVo4Na1EaFugmRW4SvL5y2PLspoSff4qnzw33x6WzHa6fxQuM6hRq9Scyx9DU5oqE6",
  "key22": "3MjoDLgD1RMfbScbPyLsn7wR5NoLWBrUbFYbfnxr7BDpdpWAf1MaPZkeqQ88XCeiu3veNDnWBf3LNwHVLXV9DvRc",
  "key23": "4zMyzxTfGxfhZZnyz9NiokyhvTfpBioKxQRD1CdMPSoTHr9SpBQtnCiJW1oQFakKVk1dngBQYvgZLoQf4vB1atAx",
  "key24": "5TqXkEqcBwCY5VFMZGvtf9TiUbyCnvD4e8e1YvA79c1gvsxe1nYgJ4BbYu2wGiyMFcmvWJNZLw1g1JUCfwE2yxQ9",
  "key25": "3iGFms2cNF2Asx3fUhQEB1v8DE2mEniVjiX4SGxtmuemfzb3tLU7QmbNkvVzMn3Tdj4XXrCYtrU5o8FVrE7mpzaZ",
  "key26": "6ARYaBTyc2HJ6bnewQkS23E698ktrWt8gyq746Me9hJMDNJSyVz2WSp91hnQnHGzwNgvaSfu8cu4mmPqB9PiXGR",
  "key27": "6VRZAvsbYffp2mjm7Q4mD4wJsYxCYnqcGPuwQj9iHrTKdoBFv8HmjkqsDEfippGtTDdMRWZd9m27fBhAQYrVLrc",
  "key28": "62j9VwRG3mK3sD4og7vr2aYFtFTK7s1AxU3wc4YEXDtBuTsVKJDSBBUc49TaES9ifocC5obr6MLNwnnT5w5DxwDs",
  "key29": "2Hri8LgcP9Uc6o4Qsjwx4cZYLSx29SKuAKKFR91v7RS8kzZVA4QLGjDifb7897M2yb2GeZeCMheB6HzRGx2mJd8S",
  "key30": "4K7qA52AveCVH77rDqQCL3W1LbZ1h2aiZ6UjzvgNhka57arFDrwp5pS3ByVV1aB4HxCGAys6T5RtXjGzVueDTuo",
  "key31": "2hR12FofLznQd41kiFdHxWnCfP2UZwXBwPSTcF3BmgVZpdZKQjd6SsDVFkeP3pnud5kBiGEt6j6h1ry7hwWx4yzT",
  "key32": "2tCmMMho2T6R1BwPBjizht3Ca2aiocJwvxoX1FacVChtUp1BQAruUQXiN95DE9wGcmiF5xueMnNCo3WvXqxFWggY",
  "key33": "29w8kv6sCFmf41SYn2bTtKUFoQKB4AvRA2f9txLhZCEVVSyhSVSD1BArsw31tfezgQL1q2zsBqqUaMWkeSQJsoer",
  "key34": "3zXSC8Kwb9SopsmSb2MmAWMSQivroKKptLtdneCmvUfuS1AxBqN11fwbXHHGuYdRTJQ2hqViwGxCuRPjR1ATR6ST",
  "key35": "5df3KgMZGSetNsZHX6mzFwC13GPiv1EZzi486zy9qW4BW2QPUthMUnLAaRPrhDxtKzV8MBxJGNenX4bzAUvHM3gN",
  "key36": "63Nt6TQCHEcoXNarLW5x9jrN4VBkf6f33qdSBZ4LRoXAbS4e3oCutLYVDYuCD3a84JxY9Sk8cwcVgh9WDQ8ABCmm",
  "key37": "3uJMtd4s7AV39egy8Bt8ckRDfoJPXeS3bRzJRh58waYJNEpaMMQrs9B5FQRj1FgsFmQB2nV8ELeLgdmyaCsnmbwQ",
  "key38": "3KD5iVLYN8Ny22SGxr7Rtnj6baCnGm8AZDqexb86u8D4tFrF5Qd5aBRGY34Fe9Kytv9padCC6yhBcjnh5DaQvS6K",
  "key39": "5PbG5N3Pa3i7tQcQMggdbQEN2Lg9ApE7zuqxupj9zbfrYjzcDNNcgr5c6fzo9DNBmJeX6v1BQ9EQDbMpzGrFTZp8",
  "key40": "2iG9mpkBB77t65xBvFZuq3MQntJUESrqgs3KaHhu8rGbP94xFpD9W4ujHRNRtf1T53UXjYpFTFnBdPGTY3ir9Tbx"
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
