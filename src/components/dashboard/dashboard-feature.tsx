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
    "4wo9uD2Y3pDRPbY1WcJLX5zfFTdX6dxQW81rHAzcMAcQWeYoSvAoRE2bEQVGiQzj8V8PZXqZZv3hufHRmZfYDR9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdhycXB49AfLCJBptD3XDHH9jxx7mUw5bfYEKkRe8LKnu5FbLbJAoC8jQknSLAhF7KqD5DqRxSt4fAkFtjv1qPy",
  "key1": "5SR3LXnDYNjsyytAepCjf53vXPYXG9cypBJS3TLnZGJAUEh3hYBPm3y3HBbEA4ShcpmSU9ug1egWBM9QGSfmuxNi",
  "key2": "DGVDepXztsr6vPqKjaQ8LCAag4WQCwbhRKz5pT728Zi26pGmxc3YzUwZdJqaXTChWtKqbykkfDFZkSffoyDsPXk",
  "key3": "3gWozB4Kcd9ToC5uY1Qmvb7fWrKPRZQTTp4DX8XYeQM8gudoqetn52grrzQuqxKgGQgMyF3wUE7KrQxt94nm1dLg",
  "key4": "3WPRYYmviRD2xMgsr92LyFkq5k2WXoc41ffwcxoZeEQTsXaHFhSYaFKizMgwsM9DeupQXfBbStSaVJkGVz5XA8TZ",
  "key5": "57QQN4T8nogYu9w6qtpr7pYWTeh176sq1ti627Tc6dLujc4sPe3NAQhkbdGZZWXunJd2dAWhgfHaye5Ny6UEnYz6",
  "key6": "2YozRryLrbUaVQsRco2b5ikRgaKD8Eu13kK5NUBzEmmMMb93oTaoMGozMGt4tZuTnqNF9ERbWCzRT4ZnGDEud8V9",
  "key7": "2zGjDCrhat1oQdfvLy3i9GsXNwhgsKCvrxAG4dRXtuUEfm3mcnSvrvwAaYQ9E1MypaXcfxZkKUvkC28FVfsvsYHv",
  "key8": "3Ag21EeCpfWTZy2s8ghsm8DW59ikdTnCp66WubRUFWiwjabgQm2ifYKdZDjs3vX8iGuon38nNU5rMvJbaMnRQux",
  "key9": "5EHX4P9cQSXEE2WyUet1c57Lvgpq4STRku24kupJ349XkJDvAyh2TGZTsxdC1q8QM9JX2uTTHa98LkFv7y5QXLhn",
  "key10": "3WTzN51tC2HZ7u6s3DExyhuGoFWzzESXvf7dgqe82s2fWPzEXr6CFDMq2wrm8NTmMM1AyLGfccKsir2RsZmmYeVZ",
  "key11": "3ekaszAkwr1LGjGsXyq2geEdfAuNTCbJmEw5uZTgJbi8TZ99KAynqYeHTATtgqCp7brJcE5vPTPakrXcTNWDam2m",
  "key12": "37cEuRkm4QAipWjMxxztaME7FDqbyi8yqE83yUF6djHXKCaMZW8CzpgkYA68qDecWEVZ5ntf6HrxmWRpMuwZsiEY",
  "key13": "4yJz6431NnHpgzkey36CAnKaT4NhRZWxQZjbRzbXydCcqxaTX4eeRieTLhS7YG89m1wvTfLWofL2GNhpRwNq3EpF",
  "key14": "3kRguKoHmD4AjTVDNYCwYWDg73fLmaA8YbJPbiz6CNBM9FARJJFK1aas5Be9xRRA6zzxssVpPF9z4kNQxzZFDoAh",
  "key15": "5H9CfUUHLZUYAUmL6JRNw86Ge5giW3EjfdJ8AfmU9YJh7HpTGmzSCmeSiyqSHYuANeDMHaHSepz3Vos4h8Moeg9G",
  "key16": "4JzVHkZu2crriGiG6Lp9kmBAnNjDEH7j2W8131agzbGeEVcsH1gKmriugwrt7uG471oVrDyLDfCt5NxihUAShU7L",
  "key17": "4khdaxR4wzL5SH1x9a8XZdWtUjXLj7vPY2JpehRR1mnxYAwzVHXhrSQnvAavgV894fJHMuqJXpFVMX4EJbXRxucD",
  "key18": "5W1hF3yUnKxeVdUWL374r6RGLdTCkZDB3JyKKhs4RQYzHTB9xgtPupFidZngAdQCPApJ7Z4bQjX3XYVYFhSNZt3N",
  "key19": "3mWq8tuQCrmcwf7ssyo2g5jbRWxEGFbnpaTxVNuWWWMc5qap3BEokotuwehrG83izCeC77kbir4wJSsBk5e4CVcr",
  "key20": "4Gd6Sm4gb1iADkgT7DBm3XmrDfeMeeZ8mtwsjPxytRLcrqLpLXoX2cykYenML6thYW2wRwL6pTFLPymJSuC9odtt",
  "key21": "2FUnkvn3bidvD5QPPqJWbV9UWsoyHQ1MJBEhqWi1tmnwgJep7zsFwRJsRCtpUYANFZAos2vho6YxoN1t2ffr8Dua",
  "key22": "4sdJGQLfHagh8fvfWG5PbPQChcmRXng93QysWFNRGJmMh94gDmFtMxpWhCDmsAGCNcGn2vVQ7eckYH4FzhsWH9ap",
  "key23": "4YZ4fYqiEBDg8VbTF7FVfaBkD526cVuKWGBPz7ujLrq2UiTe7tvsZeJMDCKmiS1UaaU2awtFp7dqjdDkpSVDS6En",
  "key24": "9HVw92wLo1WARFq6WRgqJPTtn2YLmu7WaYfcP8Vwu8PQEYMWBhXy3A41obLiYM7pc8cxi3BPADcLqP4wBrbMhkj",
  "key25": "3PUBu11cnTVddpKMRDwKkTCUb2H8RES6fbRNkZmmeEAL9XUBddnnm5qovmVVXPr1LgEjUo5PV2G8snRKJurym4Ks",
  "key26": "3fjBgemHhzjcpy21qzBhAiLRjzFuEbJYETKhwE5uzWwPRYtQCuHjzA4BxfQTBsVoR6AZMgFZ6GMRDRuJhPNTHpKM",
  "key27": "2C4YV6Sy3xCi2WS6VzVzTVJ6MnkVwdhuwnTa5YtEggEBUvq2nd9ZrBkRzzG6w3DBLFFeaSsM1AkmyeDQBxpg3KyY",
  "key28": "2X1cowx3hRCxBvrXn2VH3AKMrTtTsSbxxHvnWWx4EaPXCvwdND2xYe2F98AgsGM2YChVWtyshCb8hPhqVXjbcKQ6",
  "key29": "3nCShRoKEesi1kSQcG739KZSSphXinidigauZmY4mBL4ff1azRBQASDPPumvQgJgLr597QT1QDNkhbnPVLaMZcsx",
  "key30": "59qSxdQwbJUsNtg8inMsm1LXzTmoeWCtvskturd9nvSoCQbiUicSBw5JYbCHegznS8SqFKYUremkcioUVHCJQS3U",
  "key31": "3nZxVSbQDdngFMrdhWxhXuFpBovCSJXGXmbjbBCwNYmapyes3VnoPJ5rtGJYzXDNm9JvqeEmfJaNN4wPZGYQbStd",
  "key32": "3dq9M32GfAawrdUjH45raQhSUeqzuFDt8cek9opsqeK2VDMLYai69kiGXDpbR6Wk47VnZdAZKFzUo3Qq7GLMeooL",
  "key33": "2ZHRUkKcWRXVUVnFUWG18wfkwEUh1wW3wu7hyv4WamU9NgDfpD9cCtWzDQMeUMZpLMLuuugmw6LPqZ9uLp1zWzks"
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
