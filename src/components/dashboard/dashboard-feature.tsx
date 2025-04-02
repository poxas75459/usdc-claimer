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
    "mqUAiHgu5XqHCrLC32RTgAkigzkCeBfFGRtuQNcCBdfUCc1ejxycu5VANVwbarogH4H9XWrVS1QLUQ9JoVzB19f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22eT5yDEjt6rMdSptsWdQgb7rMAswZfyg3pXnY9xiuagtMtLns3meYEG2oZe8yNBV3bkp52Y4oCXN8GajbFJqLeZ",
  "key1": "3miF5nSBHxje5kjF1MJm7gXAwjVGrh3hcY75eoHRu2CQgsxtXZrm3HQsLcTMrBFNXoKozXUjpJQVEyjpr4owD3wU",
  "key2": "4F7uX1xtgCB9HguuhgZp7mENc5bCwC4mHQxXWHccnpGZt9GrJ8PCxGuDstTang4Rbw4jRjUVY7tGZ4E3Cpx5rF1K",
  "key3": "4kRdDZuPFewU9fF6puDnaAUJ3mJTAiQUZ2eNa9HwY9eVZh32S7CkwA1J2rdQcVUnskEbqHwUqicKxorj1b1WF527",
  "key4": "5CCW8Rc332cbqb2xmbfu8CF1NRFJX4qk8tDokboMuWFuGUHAQhoeGzPbXCWT4e3ifqaVouf3V57stwUtoCmwZk1Z",
  "key5": "5NQZzsuzTCZcWoHg99FUUn15T1pcj4W38mZYwQDftuTgpHH4HqxKpGPLPbjnEX8DGp7xukfu98YaKpzxVEHuUDUD",
  "key6": "4ZJPb6dYQVFK2AWrCcwqrwvHDFREF6CcnbqRFqSjZPBFVPit4Mibmmp6m2RQq5YHS9U7o7o7EocWs6mbgeG43GTr",
  "key7": "ewywY7XH13pj1o8AdnDz6TPD4CvFHThCnifxdR5URGDCoJHrTn3vAvRZBw71y3u9gx75mJncvzuBRbHuAEj4gDC",
  "key8": "Jfx8ySXKnxHiHbSBNgAmyThXysexZMJmmymm9f5m88WzRBkyyHrjJ5GHgS54WN3LiBmc7gxPiTdqmc7dVozKGPZ",
  "key9": "49yVQxkpuH24FWfhydBGKoCDTfgvMroacC9HfvNw9T6csTTUH9rHdNhfbfv2bJdrqDJpatxTjH5GBHxcv6pp6mAh",
  "key10": "EUv6iXpjSMVoxAG48zQEh3bjK4VcKGzWRfkL8GEUs55t9TusN82e6wzt9VwTV8nACtLA1nF8mkX9tAKmGf1MGsM",
  "key11": "wuiwxUAuQs8jXNauGwuMgvmwx1FVaRSh2dwzLytF2KqGFg18zUgbBQzc4Cv6keD1ppHpe8gC5we6KZK1Xidwmd7",
  "key12": "GwHCt7zPLRahiZuRndAb2AHfNytkPpqG6M6CPsFc7FWdt31Co8ruM4TrVMX4ApefG8SZcNbtAw6RQfRYz1r6mTX",
  "key13": "2PFT7amFo1Z1RppGCMmnF1zxSMymMFd68ETBej8woXsMoD3Tyvcc6j1mByJuCsVUDhWTL5ShnNQpWvhybizWfRNU",
  "key14": "24xi2ZfumGBTuAGP3nnXoKgaqahUE7sNn5yrkCe9TwoRiErVwm85oxf19Yc6FoAJqYMsE3Uom4JFJ3btsmGYzDng",
  "key15": "2PUWJGiWG6HnxZvrUpkgytkAwyQXEKMZfwNnemD5Yky7pQC8PYKbgk9QWCtf1avyvAM7Nf3e5gPyzbXDvHW273dL",
  "key16": "4w6vuSyRMKiABF8KuwdPUWKCCiorC8oHetHurzQC55ib3kmcysKWhKkcWg4eXB9fdUMgL2DTMAjhht4xKsekgF6M",
  "key17": "4jpcqQrKuy9nGfhPjh1i5hswgVeTTz3pDkQuWK9GoZ9taCmbDZv1cZhTaxPFqPZuaapgyKd9AfxEZoAHs1SBZFmX",
  "key18": "5iRu5c2GRoJfnKAxjpiG7MuenotBT8GgBRNt1yp8JWLHxriz6mBNtKcueXyL9PyjEhfSLfNcCMdHc3Jjr5NsyDtS",
  "key19": "5tzk8oVcj13CM8vnooWGVardQzEVeHZMkbCkLfLBEJFtiEnZzn6fMNfUGXUCFQV231tV9TEs9yhGeLNo6v4daPZa",
  "key20": "3RPF3DEnEypwk8gHDBtXKZiRGZqg1R3yqECXJW3XF8MrzkKWYetNzqWBtjPbgBoVbA4R7EKTDZR9zygDCxEBiFE4",
  "key21": "4cirG36rXq6fUwCZSSmKWx8tZCTAUdX1Q2tMRHNVtMwZx3uQTTCvnnhv8KqPCb2EDXpEmkCKwtiW8CDCyeQzjKoF",
  "key22": "CtHx67eMzY7d8bkJnPTpC4kQD4KQF4zjvYFixWDZyC5XkmHczNMxSvHPwHc8eEGgkSF75EVAmHZJsom8sw1ofkv",
  "key23": "2MqY1BUzYToFmJS4xMokJtisbGBPjLYCx891CnscebyErrWBiqKZFAQnsWFeMbFrSh4uWi6H9Xd28HVXrTzCvk5",
  "key24": "3JVWZWvg5pCapjYSHj4UirbLUiGz3SsUPjn8YY3tAVHZrCN8U6ftmi22zhKi56hGvoc1ifSQ11SZJEtMPYEA4XZn",
  "key25": "24e75royjEWrUm28CbeuAteAsRcj6hU4ofeAFACjiRdXBSchz97Mu4kCsSipyroHipfd6aaehyFWZSA8NxyznXGf",
  "key26": "43haixeMDQuNXatPugtZR2ry9pLD6RM66xkp8zm851jPTEzRcjyCsDuMQLiq5f1JFw9RpyhNmSesFhVkd9A1BhC7",
  "key27": "32f9AHN5DcGpFdYZJxCHKYVU5CLrzaYqQqxWEGBxEi6zLhdoqpbTmG5cTxtaHCSVYuVEGSeenkHe3nr75adc5nZf",
  "key28": "2rjSZFMkpGTfQjEW3cEJMV1WGWbhbeZsfNZJiCBC9EWEQH389XmdXNc37Un64Se7uQJgPJHm1RX5UMEwmhPdd1Dw",
  "key29": "2rPJnC6Uyrxev4vRvYbrLhdWxPDzW4GC9WKiisWwtgcyLHNGYqhXd9iDWYoaAe65Ddg47Yxsy7B1r2zGErLTitJw",
  "key30": "WQ8egBXYKQBxxWfphHkr2dMR8vMz5H8bt1n8m2TXwJQUseuciW9HVkj9ujZVptm6cE1os94t6ZrvzTAZkkEnbse",
  "key31": "2yPdo5SJMTCDrZAMEMyP6CbxA8YnuSsj99efqgyCcadTSafx4pKrsE5FmG2XAEsTWGSprtCFx9pPRHJVdHSDWZaL",
  "key32": "2pRBWNtJQeHjYcjbrCccaTaRyGenU74ZrW1WK4PgRBhHQiMQa3QCZUtSP5CCRNFGwNxG5BYBEZwzhpWX9wyUh5cx",
  "key33": "5RCDjZRR7CreyBoAaCLmWMhmRfLMHFTyFViNYrUU9C5Yd66XGeLvLvHTHxRmxG5wXX9X32xdVgP2eoL39vfZe68w",
  "key34": "8tHBeKeVPXZKpjKeEYMFNYGSpghTKEtViSZeGsd9UxDB1Jzy6R7rN5v1EcpcX7uNAqArWTRb3NycDARmYhzfEGp",
  "key35": "5u37w2VmPN6Wj9QGgArZ3GrRaSWKo4mkm5n5SxQLtDRXinFxqg9J4UW3bs1z15HUp5DJhT3BLapW8ZraQVabVFL8",
  "key36": "4cSnEQGoXGRbGE1uaYawApws1K4x6SQuS4FyFUs4YJUx8Q5Vt3KTYbPUjnWeMJeL4jK6ziJePxw8VpfQZ9mRA32P",
  "key37": "4jDk3ZkHmCpHB9Tvn4fzxFL2iDry622CU1dPjvVddMiQHQEg5iRHepqrYJLnLuMF99FBx8gTd6dsgBzemGbJiug2",
  "key38": "3P6k9TRXaC9Pqmau7J6vMYjgcZWuPQ8zWjtuLuDLmfHG9PzS5ndncdwjwMu9nExpRNYSafmt2sEbmXMi7h7tefBR",
  "key39": "2PTAqcRVyqP7H4Eoqwfmp5WzEjxSQJT1d1kcQjmxpkiVKvQpvaJjr9jm7jZgT6ymatb5dPcVAiqxMJ6DvrxuHsz2"
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
