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
    "2EUnf9gjZFV2Z4U5ZmasUqnAyMBXjs4GNP4pPM3CsNGZR4nhNn3qdtKCrNxDoe9CCDM3X8L6zdW6A1W4iETCuTis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qq9KaY2FkCVw8kzy3Qp67rjV16snVxbGBB1mJST177hGfLYuPR7ocTqYnDBoaxMMCixu3X3gTUB15d9TpeTa4BB",
  "key1": "4hj37XoMHKBYeHtUhqxBT9HGD7BcBdLRVF5YwvKvep92CX81zNHqH65RP8dSD426j8Gzf1BphkDT6HTWRGFGNky5",
  "key2": "3Ng6ABJutRGUEyWVxD2QfdoJrQ18HhKSyo3rpedCfnvKTNbdnKUAo5ziuYKxs9xygoJ2wCP8P51fmVexuaoELa1j",
  "key3": "4TFNcBzDk71ypdTact4sTEbjycmpYZBcuSs2f3jWvuSDuDtjhw7PcxintyT8WeyJ8unJJ7qPBD9qBysdi3zVjVwt",
  "key4": "4G6RTLxoUPRrjuVjRsxQmhQQeVv1omT1Sa2c3QDSu7FGeENdQCTk7cLbUTJfTNTiJQRH8odo4FFpBxQM2CCbLSTz",
  "key5": "48V8d3nsVxRPyk5yojaj96kZkH9N5XbUJLGEU6rmMveEJfudm55ME8DjRBWy8ncebKmoA87LY6W4HR1yVo3iYzYq",
  "key6": "32SCrhahgNLMLREUs18JR4WFmA7GzTHUfgd11QyQAcebA8wBvye8XPEXaGGA6GoBWdJ7gTMY2dbs2vCw4ibHEj1y",
  "key7": "2LnDnwLD8niJpkkFe1tpGP4pNZUpZbuFVCWCwaDsiu8T4aHi72iuQfs7yNMpgCtWKHcDRPRASVwhbJGncqgaVf9z",
  "key8": "1bt4GDPrRzdqpJ3BPkwrXAgeCwv6AnbeS8KDvTKhSg9To2XufsX9KjW4TiYvbYmhCxMB6JwmnJwuYfdDrbN2sPx",
  "key9": "UzSgbtjv7RRhFxEnEquw69ZqTWCQNFix3ppUqGn9NDmVYkXGfCw6J1fBSUK2tDaRt5J9m9Q6kFxBuFWFdKonSet",
  "key10": "49buMMQSscFa5hYMYvGEas13NKp4GZQ8eomABdRNrn3JnsQcCcENZ8qXET8rrGsoEqWNyXwU3KDNEiWntGCudKfo",
  "key11": "2NF2Vo11xN8vi88ufCXz8y1WpB7BqkZJjhB2ihRxXgK4sQY8Urk9xp3hFHzVNgRMAuAwm5LuWYdc8nnqsMHZzAgb",
  "key12": "3B7CeEyYDYphfUqaC2gcnuEiRhTCvYxZyPacLP33sRoPiUCfMvv1fca44Z45r6NtcJGydkRRZmZRk6SkV3xsahXu",
  "key13": "VrVW2swb7xSNoxjYeCd3u5qBXG7dfcivML3Bh2oAs4C9SSaD7HgAP94FmQAqPNcpo48wCzDLLyC3iGcAoy1rPTz",
  "key14": "2t1UBmZEnr26vLmBiZMGjH6Mbmf3w8wYChkSe16hMPLqu4RHBNNBhb5A2wVuDuc5rSto72dmpqReTZwi3cfJPPbg",
  "key15": "2JriRdvthbjBpsHSZYsVL6Tsg4iZ6b8xxyHWWTEx2ysDxt98Mgv3BJQ7fpDuS2rg8ric5ofFabYV9hpy1R19Ei8n",
  "key16": "5Gyjt4qwjr551EMo6L3zFRCy4nnETTuQcuyTfwHH9joEoBVpsPYkZRBAKq432CqQzjJGunoUzRNrcwC1DLtFJxVA",
  "key17": "4eqTy3pgWic2a5Ne3Z7jgH7XAbWxZdBXHa1H5NePgjHRM4GmeY6tuQHUEThmcasrrRhPuFWZq4v2q7iG1JhFsppa",
  "key18": "5sCJo5r2r9UA6hqJtGx9YZdqx287z9hqDYCz71XhzJtJCwKjUeeEZM2ALfYTKavZf5zUxbPyc4mDfbS7Cfkpg8cy",
  "key19": "4Ez8mD3Bbi5T7UXmA4aFfHioWw2xmQcEByDp48B2dFmwBRH9yC1Z5AduNTJ8TXQt22DeZP1RwysyN9PGmRYzYo9S",
  "key20": "4yU3DeKfBY9kEBtrfVBATue1rQN4k8EuSR3WTEFHhATDtvUPgPsSTEV4qadDBZ8cez5YYTGuypm4gpSGnnnetYiw",
  "key21": "339gw9cmvKs1tNso57djyGuCiciyCieQLoKHX2BNXAodxe1dnezJtfQWXXycxsFpjS3Zy4Y7HPbaT21ztNRvYVKC",
  "key22": "4aTQhZ92bobAmVFUjFDiujxUQqtrvKAk2PkvAxfngXQXQcScvYc3oYKuLUSC79svddJ5LqobiST1WvR229rg2RCK",
  "key23": "4mUHXpSL1xh8quADF7ue7J4vSHbiQzyUykN39vLnq5nHRA3A9c3N2wyTW7eXtixhWZi6Kw5tmmD2oX3uuAUe2B9w",
  "key24": "29AhuZ3mnpfsvgTc8ThXdMxzed5vZQTxL7dsqypCVmEFrg6otWn7B5rj179awW8XbX5nYbRTJkLnfxVVF7pjAP19",
  "key25": "4YPPvkgN2vJMP7tkj2b3iQrKwry84KusbgMvv95FbJ8fnCPwcd89QtmHFzuqdfqvk41LE7PSM1eJqc7eEEZ52g4V",
  "key26": "5yi9gz4JrPmRL2SfRnnLP6FjW4hSeiV8igMf5QrzTL4naWNycebU9g9yS3hdA7uAbSnLbADWps2a1uUWJrZU5GKV",
  "key27": "5vWRC6nPLSurvjWd57f2CH5BFrUt9F8e1kLzHLjMxwwaL9Bpx74YqcwrTJgiLWisp74oxihHCoKn4v7dxF7SwG1D",
  "key28": "4dSifPfCACXoq1uyanz8xsqiatUDMWdSqjzYALkcZgjnsGm32L43ep4QJ1684tnffvUkN7iTpcMMRz3aLonSiQme",
  "key29": "5wACkwEPZpsnJCsTSB2THtRLErkHfrGvXeTTDKy91CY2JGTE8rF7LouLT5Rs1rkjDhmV6zG9Rtewf9NgFQWRZKyn",
  "key30": "4xod7QWLQCeF6itXE2AK5rRpJX55K1JBX7jqmxMhskAqxsAEgYDLqLWjm69DMXt2qv8A4kZbDJ7W5KT2Eccm7CBR",
  "key31": "MqcxBewWvpbiMt9Lx6aePGr5rnAQPgt7zZYeyUoUiSC9bFLupFDfoWDizAQBt5t7VyXng9pECzpuvikVYdkG3PE",
  "key32": "4dHsbok8xCoCJPfUqmDv4aTxanfKGSbvqZLuP4ZqDAADEQUwRiMb8579AnfbAVM4keoNScJh9xrPVjFBencBXU5L",
  "key33": "3yKtcKu4MobiWEQZdo3VNRx4bn5C5s1LCBmcin2yNDoJqkSAx6v2FTMi4Yoy8oFnp6UMhTfjkrJDpEyZjD1LSFtd",
  "key34": "4GbfAYontDfvhnz6g7v3pPpq6zD3cKWuf8x7fsAm3Ef4GX1LUr7oefn5Fy6vRaoLd9PcUixU6vg2K2A1upZkxsr5",
  "key35": "58GciaQ6CmuCSNywqFJuRSfCXr95NeKojp7BXDPZvw6tdeFpBoStdLu2tLEqU5ZePD3nsq2NZUqFbUzmiQ7mUsHN",
  "key36": "4QQvpUafEpQAqNwxppXJXRNAxG9yHHeo1ruRgtT5W6v1XjWFvUJhYbPqKjHTbh9QmBPFPVApketDqhz95XrLSKyt",
  "key37": "4r6JMP7BtrGE45UFR8eNA1s37xKVg2FPbi77wwpbqeDLMZhHiTbf26wgsrMojXUA52wK8G9poT6dw1Gm5id7KMAp",
  "key38": "5GXEAkozMzKMwRzG91etE1DqJ39Sw8ChCGzbAsLHwQod88SrrGn85ERbzGRZDGqdWDFYKDCSgxSVmRWKZnJevzKj",
  "key39": "kpLzdHVaVqxdqDtwECwuPsgkK1Gi5S4yn7LvDB7Q5bt9WKQP2sdxEzRr2yWd49obDyMAbDFfYqqT52TaPT9TVdJ",
  "key40": "eMWjZ4vhFRr2otGXPFsyr5TanWxvpm5rPKhTUeH1wduAUfAmAgVDtx4eZWfCiW5G61RK5oeUFP6eLvxTrX1MHHS",
  "key41": "2rgQHiCDwbxzzBLWhZF1FFgDkc75fnzdk31jKDPWgWQSrJ7uHL2LRBLw7E24gtRYPTim9HNfPcXhBMBJeEV5UKUV",
  "key42": "61758MHUE5Bza2bspTSFLBxNJWn4vzJVE4uQ2nxTzQ6bgNhaed7BuvimhzRT6HzbkxDME1dns3jqgXuMKATdwe9Y",
  "key43": "3FJUMrMJZwk63xTemACrpDSKGdPR4H9pjjxzwtmhHjjSzuvajdXfh6N9Mazyf8ymj7RwETGFK8DJAqyaiBDHFfsS",
  "key44": "5pNgdeo5ZeCA9wtPDK8PG1GXHW1YoczdxzVxyVnQ8ZYP2qW4NUUuk6UWhbhz9oAUpyJLtRRMbTtykom8JhLYNruD",
  "key45": "3XRN8sk7fnpXzCdJNg3DWiWZ329QAkBWQNBptsfY62rsL2HEoh2WAGJGAEVXDcgvFiRYnWSWsyAj2wdYugkuEuN5"
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
