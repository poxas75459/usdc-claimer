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
    "2gjjaAQLJ4VBKTasXuYiQgJN9eaizsZrkMcJRDqHWx326jW4e1CsAEsfxCSBvrpRfGDpfutTrbTZqLceNnAerCDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tw4E73KRuGG8cFE37LYPkqfMXYkeN4UKMVPCVPHK1mi4jrtydXokuHwePZeZrxDzE4u95CiY72N2UKW3Zj6imvL",
  "key1": "4iZ1vSiTPh28oreez9jptJGaAGyLaEFT9A5GWzXdt91PT6cMYrk77ViBWctT4hH6CPJgVZE2YpywH3ZLzw6u44nD",
  "key2": "C8g8wD1nQkX3VCQAJWpMg5wzH5GikjFubDQR7zT2fHXDeW2e5GXS6YzwSncHmtiX4YLy2GgxnRaUmbH7Lyazu33",
  "key3": "4SLH1sLcBctcRFEXb4Yf5k64a1ESqSpBSbrShZgPbgxLrTTYFYRyU91zP26PnxUCcZzwwB1j7ZpkWBtoyy5BEtKb",
  "key4": "5umfC3nt9xFE7oGCm5Meju4YcJcfPjhgh5fY4BL3F5175p7rjAAxQFX7JQGQgLywyez8D2FAMYtQUhKaqdt26pQq",
  "key5": "4HwGhAVUbxGQBKdnznWiMPvUT98coEu8dBvKGp2JkJjKEQn7HDTL2pctrWp3ydwuFQYf5RSevwnnU1St3Wm4AcJL",
  "key6": "2C2HLy4niWZveyBv9ECjfj48MDYBNsNfJZonvE1jYqVk4T48pLte3k6UqMvNu6ojQzEsr2FisBDKs5tEGzPWXhJL",
  "key7": "qdRMTtJvnb63xDRWhXUk99LaREs8bibyppYbXNZZSDj6t9qbUL2p7siDaSRGVNfqPT59vBwB5xwgpJh8hhrpCHs",
  "key8": "5E1TRP4n19iSKvuEPdJJeaQpXtSgBUytqYAMjE5UBLfFbdkzhJKB7jKMFKt3GWtiGxKZ2XtBmVrRetDhmE4uEdYt",
  "key9": "2s41yPieKmckbqvPgxjsQQFkRFDci2oTzh9GGEMr5s1R3tNSYHJQ2rHWfsL3Zc5qg1AAhWRjhU44h1XRzjn4FTJP",
  "key10": "2gsk4cAgM1kSPARA1BNiZbMcATGWCdWjPM8gYPFRF6MFTBYaijp4dFtnfhFkNDdsrBWK4JkyYs69WY76gsquLVok",
  "key11": "3qutjPJ2TKxXSRuDHYcxhzPUUMh5z5GvaJgaYneE2C4yoV46oWoczHnGuEFbnR6D7h5yrLbGs5XecfbwH3kagTS6",
  "key12": "2HrXGygW1dfAWMKfLQ2AtVhqhJPr1zfD11FZfMpiaoinmCGw1mwrHRPpPTiEUKaPSaykzurDxNff1PiyKPbr7ypm",
  "key13": "4qxxTRzbD7D61yp2GH8a7JoNxY268vqEAGsafBQVYk6YHemRcFKC12EErr4QyQrvdJgFA9xnKo7BS8SMFzPnLWs5",
  "key14": "4sBFENvt4RkSioR6pzotNzc5v1tnXs3WtVK1kovEXHDdogL8YLkTgeQoh1i36NM6ceGw2DNf6KRWahKFH5VZpPKp",
  "key15": "5ZEvudczqq6Z19QC9ehhtE5bUiXLoK8oWgEnJdZEfTvi9r94yZBGuHFTESRTmUpRFLu8GPoRtKUb8fgG8P1QDstY",
  "key16": "BKivesRanjwCKdBkUU4qyyLoHHrktPhHXjgydaQ33KoMoTQSzzMdVat4qeFXv2Z9N95nXQqHW8GcAXFxmz2BrTL",
  "key17": "MapBcuQxxszPqZLSP7LxRmdaRqg7qTFQD16emxm4QA1dtG1SphrTJhrmaNFjsjETFA81YoqWKPpz1rnSw7fh6rD",
  "key18": "AoYZ5TZkZjaMjjLuoeuYj3VJvRswN2fZYhgjX4Xvt396qQchjgn3SrYT8iiy49Y3ukaAp77Mjmw1SqS9727JYUh",
  "key19": "R7wMF6UYUE3pm95w2HJYgGHS31QdjSD5WWQTLUCHa1tdkeMtui1GaHkcPodSgVyrRm9acZcRLyNDnmfhn9FDXmB",
  "key20": "4B1SLpLg5uAtxPpMBUKa16ab8xiVshMRXZVdodrqAz5UansrsHmn2TxK7ys1yQd6eYfqC9PQWuatAsmCcYJXiqAo",
  "key21": "2MfNVmhoRokcyT449e22fXRd3yMRCRiB7ra6fCMPvWPoK6WFway238iakXJFRQEiaiqTMEAwp8rUVhWFbGJ7rsFF",
  "key22": "17ziJREB7xGfLwpQtSmxvz5Gxv9xmZhwmcuHBSfyWiti5LK74J5yEq5VgqyF7Zbw4E3tFX9CezXneD5TjojN8ab",
  "key23": "HorLoaFXcCsuiYEBwoCxtYv76Bp9Qf4YHE3ezqnvHzCqKjkprhZrzt1G5cd2DpJo8doS6nvd4N9CHCsJp3hjE7p",
  "key24": "2b5FxYn2Uoyyt7hVPhsSQiqVF5HoT39KAQt4Na5HXTxSpmbPSWv3MzAJn1FgRYKbUZ18RfnNozL5ae59W7PDckeH",
  "key25": "36TnpbA4KEfKgC46Gnfh1U2qZeSXHZGzQAL1Mi5LYJrWmKjXpEhqST2BvM5XjshcCmmQP1oMi9RqhFkMAXsjMMXL",
  "key26": "2pqx3JqNa449Zw9SQSSs4sMAv65zK24Dwu1qC6Dk6PxB4utPoLWxSRXo6NcMR5UPNXaNpZBCprHdgsdtz1KVvaDd",
  "key27": "2q6SsVgzzZnhLR25hnFWgemboJMqNt17jd9NqKKAEbmLmsLSPYim2aDip5kZp7eAuS18FbUsFVehE14z6bSoxygG",
  "key28": "34cdj3VUaQsJYoT5FDx7Xd9VLmCcbENGtc9qnjSdUMBPe9kw9c3ZcMEk5k8hzMtkqcVVy612TSaxazwXY5QLEunp",
  "key29": "5N7VmCHay3bytkgQK6GjRL2Ym1kmGjQVdWXzcbJwfcJAKUS5mEFsnGEpTS8sKoHx7eVbok2HCZdnti4cTbvpxeXw",
  "key30": "4oUhTSb6FFkmVFGFjnQzHYzSbDaTrwcgpfA5LJV4DGdceXDuztSB3f3aKPbUsgT5N5Z4uRAL82iw16C4Ygw5wnBv",
  "key31": "2u9YM49T4uoSGCGMPvLwgWmKuCk1qivJnrKQ1e85RpFHhKPdaKyKZSGWuXTXeL3YNBLWs6YS4DcdMLAernzvQ8ov"
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
