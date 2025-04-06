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
    "2G8eug2EiRcvPJvpHvYewWRY9ZyCNftktCPxdbx1aQa8kt3YPyzbCpZfBz1khoud15E5rYpbh2jJ8szasb16xvxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ww1onrAkCUohSzDCCfXKfzar7ffJFjGfaDyQjEr4EFkLX2Ch2jE3LX6HwBYvfLHoEXbyNewknqhMiKwqmwwJZ3c",
  "key1": "3UD7zEDs3M5s1C3vCeeeYadeEzMEf4Auy2YVuZtAgLjo52GwD2QEztTUbjLXhhiMhSrpiMU3KSxDpEzb2ysd4d3s",
  "key2": "r74Kgxqt9Cc6vJwjP9Tz8QrRUVmMFRcbkYaDJq6eLVFUgLbJSifcayD2d8GPjYNTMUyXkXaBwnTi1knFQajGiFc",
  "key3": "5MkaXk33kEUrrG9rFSwMDFm2jk8Z5Dg3FUykNhMb8MzokgLa3Y3rA91JvyhstF5KcqYpVQrxEc2g3oqCDBCNkrq7",
  "key4": "5mNE7nNnsUyH6zsEK9snVkW4pXzFNwdWg5VEKY3ZngjshEdGCWHets9ekAQ3MDSkEZTSHpQv4t5z5LiZS7mAgDE7",
  "key5": "2nYeRTjGoK1dwsy7UV5Bibo6N6HragEN8e6RRHGKKtYf2Z4GdajPQGh9muT9yDT8mp3TSEeDLMpDPXjWchSw9DBZ",
  "key6": "3kunew8Zai53deS1W4bcgVbVHG55dt71VWBAPtY1NLrjJ6WD7A11x8mRty1dCRm91o5pb3R2jxFTR5oW8HpvquwE",
  "key7": "2vcANNkofFkRbQXEajWWaDYpw3E4h9wDLzPLcMvh86MiSWyHYk6jpR9A485F9dejezAhtjwy51y5C9bSPEFm99dJ",
  "key8": "5i7aeotaWmEWnRGxWtgDQfwyCGEX9vM9R4EtmeV4rtrnXxCfPhwZMct2Dvyyu4AbfpUy8Qxr9sZ4Fh99r1ucp2vu",
  "key9": "6WNb3XkZhESXRUCN5cHMizFwiQcgv7bfXPTEADz4T3zL3JbcMUbYgMKVytBCbFdVJRjvwxzCoqBgrQVaZP2oBWB",
  "key10": "2dpD2CfEkLiLpRU4evTEwippTunak7gar6HZs4kixtmLmwXR1ttCHAeyrBGhYxkdoWjNdawYLR1box6rn5vbXwtB",
  "key11": "4HuEnER8EfvzdV8YtrJ1oCLpRpgmrG95wofX7aL9VZ3kq5waeMKuhhJw6fXzzxSuKKRQXbBr6mYnntuhpjDUWcmf",
  "key12": "3BxuuBnBZtQsNL1VZbyTrrotzJi8jbTz2HqEBgFqMur7YrUG8Fnivp9TKhbmhDr7y9BJ3GjQMwxya4XSVJVxHRGt",
  "key13": "3taumWeJkmWrdSuhJuU8F99HBgJtgdDXLQzcHYTgr2jX4Me72RafrcFkAYRVggLjit3bWtYxYCBJrP6KsqQiQSJA",
  "key14": "2uGToBvz83vLdWSozkMk1YAdwuZkrJQmq99qUqwCtjXdE1m5rXNKPL84Xx1nAZ1GHvZyrBvrx3zTj86rGg4KL7vc",
  "key15": "4nUAdTcc671BKkLTwE2vcuWSAYQZ4qck4ptE54cs2EMp4FsVF57p97Pg1UAM8RmQGeTDB9LQeM1UMYaeWFne3kgB",
  "key16": "2NgBCPaq38aKzbTJ7dtxQmtnVYHbcgZhsRkfCwmDzcmhfKJACgmGprDaZP6kpqhbgEtksCK1xCqfBgrgT6W7hnQP",
  "key17": "283yXPCmWmsTXNeHmb8bUX9vhgHZaTprtPZRiS4bUkhrMzKn8YpdoC4ob3QswaPXLQoHAXofhfAVnRYXJHSDWRZN",
  "key18": "2KesytnAFVSbqfQhiuiJptjFtCY12fKrHF5WkMa1gLKTmVTBVD4kkhVJLGtLBCHuXRaFC9CzKUxLyeo1SESNYWqF",
  "key19": "5EYxKx7B4pA2re9CzLkXRpm1RyT8W9fVVtQketLiaTQY4S3haCYmAi9aBCUYzRk8NfFBnhoL7uFVSd5vyPoYsbTr",
  "key20": "5cHVtKNpqgCpfYQbGGkbmFbHUwiZRiK6H9JqKW52Lp3EHMmuwkLcYLGj9Hfa9eDrLphbMycmgvvqgkEFfy4m9AUy",
  "key21": "4WpyAjbRDpU1iu1CHh5aNu3mY7bHSqHnyFP9Y8YPt3Jv91wEMD5cSNMYioGDYjHj4uYjG3BE24LnejdVvXkkgh9f",
  "key22": "2K1HfSsoyuUaagk37Tf4NxEg2gdDhejrTXzDPB8jjWYRUv5P6sE9bxTaCz1T6QmFXhSDEso8xMp93r5n17TokmEY",
  "key23": "4Bsenu4NbiDVbh4uZ9x85cmynZUQ3b5NSSacLVP6qu3kCzJ8Wz4QbS5Wzif8xTdESPmBUE6ZJgnSgTsWxtvagdQt",
  "key24": "31psUHYCjeNnXY8vpeDbDPsGggqffSKBXLz2QPZywuSX4M5Kakzz7YuYcqaPNAzawtYvzzhvY46ZMoPHbjawwvc4",
  "key25": "64UUt7MYjKJomaofTcAkdvEPWJRvUTPC6sW5kx3bDVes5G9qj5B6rUUKg6cxkvnjg8iUh2ymUtDAzZ82KgE45Mq7",
  "key26": "3Knd3hVvffCxSgnVWRfbxy1zt7PKvSYNvxcZZ81qEYBb6Pc29dZXLAZVkDoJosna44SvvbSZeB4f7DV3ftwBWDUR",
  "key27": "3BtC3mwvxJJ7XbTJoyrAJuXi25ASxaDdmZR54jWayNppgZVvKsx3GDQwFDViSrKs6HkiFRBDVQaEVtT4Ayk2RsxP",
  "key28": "4tmuWd5skSB94fCKudZitgQkzeg1S1i4aJ94r2x9u7zioh2jtMEipSbHd9aF8Nu5VLkvBVBt4iZ6ZzAeYdFzY1Le",
  "key29": "3Kvptbr6NuvVA3m7qoXDn4Ln6oh82ECxjX6K9BduGxaM8sXv5p1o1M6aCtXaxuWj3ohiFsdvWWUia7vMQ5VG2Mrm",
  "key30": "5wApizFvbKyHsm19CMFHgvUPnZuJjcZJzG8Ej1uVYmnvYqezXC5nbsydvMh1GrKp5dvzwNe4hctEMyv3cRFhsz7U",
  "key31": "3kiR4nZRMQp7Gqw8tPTAbTYe1chQXPDYoomRGitmpRSLgrPJqWFnfXYnRhULRVuGe1d6nBgnqHHSAXg9dEE5EBtb",
  "key32": "4ANTXVSmp8GdYXYE93o8JerpzAAFNP2Lx7xDzxwK98zACxUdm5PLixeoaSi3Nq8W8pDpFCM9YfwxKSkqnm5YpNuy",
  "key33": "4YwUuqvCnt6tD1By2SfcfNUN1cRZ3ftKWF4eUSinEs4M6RifAdrJsPDs52UrweY77qHChZVnrbY5hEqZrs39gMsf",
  "key34": "3EUPoYpgKiDwofBi8eKp64HeB4SKYFCkcafBPa3vy4hUrK4a9ZWLwKXfescTZGQboF34Det8Hgr4tArcnT2U7NUu",
  "key35": "2Yfo5QT6ySZsSC4VDsv4kHnG8zR16aYuztz3sa94Ky7UNfaLZJp819c11QjChUNJF8SXRp5hEQHvcrgBmzQd7tVv",
  "key36": "4iCM73X1Y5bGE1wqvFE3Unj2YjVMjQH8We7yzB2EM7jCEZEZTgm5qibcajZbSH8akkZexxXhQRxgeNDKdLfQhDU8"
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
