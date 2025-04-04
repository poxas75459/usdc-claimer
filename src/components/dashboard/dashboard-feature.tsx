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
    "2uxRQLa2r8asYn7FUvi23yTVZpWAte3b9E5FbY7nZ4Dx31HcmhmEFrMzdobWqkS5TR8hEjW7RKLZWW2RxWzSXtpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hE5rB2jH9vDAxDtFP2upkohtwiCqKbU8EQdkLkNXcXMVWDShyAnN7gnU2JkZqYPXNZ887WSu8kDB4D4T2ZHu1Bk",
  "key1": "3xGThAbaLtFuGnKbJi8zx86kiZj9U1FZHTvVfYZugrALBdkz8SXA5D5Qdhrm34J6wrJGgeTkZMtKHAF3MendM951",
  "key2": "5ZXHKfkFnEP9g52yrYZQcpgtayTspzQqSLJfZ2bMQAqrRw3cHkpMZ5rjgTDFa5jXwLyCn8berZ42vkyHyZXWnWEx",
  "key3": "2eUQAaGw8YeCe77D94qnDC4XZpUJjkS4SktWATb2uAYnqVhNgDTWV667vwxMLFD9mPnA4jtFTTxHUWPffcD4UyCk",
  "key4": "4jwYUFnNL8jBcWMZsQRx6LbM6U6qtXAFRLJF7KWfhs1gJSHz4QKWEZGhV5rzrFLUqps4TtNG7f2QNNjquLZUVSCH",
  "key5": "5YVNbtf6oGqjQDYJv71ysUoH2YVBGv1Vx2s3PtcHcGT5DkTQSntLiAeXhQntjdr8fcizRSeTYnRRc6K7rp4yBFzD",
  "key6": "5MD8eHgtL1zN4duiosoAzuCoetr3gV8qrVEXoiyc2YDAuB2hYcUBkbtCubrDg94NH6ZiPNdRWnvhVrbNEKDv5rct",
  "key7": "21oWpTw8jcTd9knpMT7a9xdVrkMUFT4XHA6b1rJYLTU6Vc67zuQSHM6uqTyao7oNsAtLcBn66CiPPTjsMyEGHTCm",
  "key8": "4X3nc3Bbqf2Fm3bFC2fwptxQx7XBvGZsz6pq5xzohcfhdk9AuBCguYXSCNEbfkHtq4FoXTfH5dQeGwoPppYoUbEj",
  "key9": "3vGsoBqEgRNZnCb67XsgiHv5C1jsC4j1BvYxtC3qpBDJ4tB3zgp5rABwS9PkHk91ekwHwqDNMFgK9s4587SKy7Za",
  "key10": "yxYpMUjUrmrqLZTetmQedmUXp7QTquKz174utr9SDsJY6YZpU7vaahwRumFC8mHyCjcLXy4AguiZeDp1wgHYo4b",
  "key11": "4nAUUXS84c13eKgPaaW52ZJcQujk1fmmE2x9cwNgS5pb5hCE4uCunRGLS7U1K6s8LiWemz5FSz43vamLVXtzfDhB",
  "key12": "29KtDZcnKj3mAbkZet5Q8DcWNMVJRXBgpC5NoR5Jupyiizb3QcwpqCeCiEcbgADgSHr2G9cVpQscbzjocbwcwbik",
  "key13": "22UbdBF9f7kVHx5a5M17WTJ4fyCFUNN6QyBVUFj6pXgSubGyFALQqG1bxTZDGV6pPAG1BHDeQUxBuxeJhhpPFDvr",
  "key14": "GYR66q6xMFsaNWs8EZqYyjKDErU92qTMUSMRh9isGPayUuyVrMZFkyimBJmyS1SgPJ7SZVAtk1wuXJYH4RKKuWs",
  "key15": "5TCz4K3a7VEuCMer4Jn2KjXXUye4DmLYKXbxcdnyF3NphATUGBkYc3wjJKtr7k6XpCWt2YEa2XY9JFSJ9UvTCVJc",
  "key16": "3sHEkPeeUigy8RX23X5G537uConqHvBRo5w6MbtFibNssiP3h24L7CCddFbFji9WrzttZLNtNAB5m9j3jieHEDrU",
  "key17": "4su8BUsTpev47c94WvcktdmXmD3i9VJ5jokD6NoTDLYWdSaXg7AaGjCSc1M7hzzAsjcC1yERxJRLPWym3ZG9hGma",
  "key18": "gu12BFa8YA4CwpySbkWtGV6Jn1Tn2h5EapMxU39yxcTHbmkKjDwEBhMXCrwqrdZUGhTTDeBUxisJz7asYqq8udb",
  "key19": "5r56QcENnkDDyJfrRQfVFQe2tQd8wGCKkR9P66GEeipeVUo9X8fFpKx7B5MCu5CVtwK8hyi2UYdSRiQiaGdPgiUH",
  "key20": "3qMAtrKT3iNp8h7jY9K1jqLMT8Ge4v5J9358KSizjCYoRSbzDPdBZeL95KLLGmLbgTRWk7NEBiHF9Lckd8mHthrH",
  "key21": "3XK6ThvhGayVj29TqrF6bNfiZBmqQBiiG1frx8TsQXzbWWRmFWRooKrb8HH6B2xgsdUy3ow99wVBzgCDotnz1SqZ",
  "key22": "41a4i94F8VoHngoZjXbvz6Ptc4cMhrwzVE4yHd9Hx9iyZRRXLUDR8DSGrpynaGjaTnWXKfNhFQquCjPzu2hFN9rT",
  "key23": "4jednXUWQrt9LXGUVP1HxVZy7vJXDJaLKAw1CHfKY3P4sxkjACqCfU51omFB8R6Fk3TfyXDoXBZjF4iS3jMuQHcL",
  "key24": "xzZFCN1yrcB9WxwmA46NrDPFnGodJSkhdaAKKwK8Jvykz78dY594whddcf9q1fYP6WjiPFxU1T63tNSWkMF3vLV",
  "key25": "32tHwTKVbWDzb5w5FZYe4Sv4i6Gs9xketJYWQbRHtmfjzny41HdGETSmvmRZ9HEmMPrBfHPX2dLQs2ovzLcscnq9",
  "key26": "5RnaZnW45HAAHoBuF7id3ue8Rrx1e4sDaCGNsRYkzSbfCun42P2Q6ydHBr13G2QRSmBbrqdSwMzWzDNLNKDQhVB4",
  "key27": "5tCbQfXSEKxMX31VVmpiyuFFNyfpcBusQXYnf2hP1NdkMyDSZyLwoP2nKvjyNEcyAegsVMs4JqzbeQyAsz4ZtdoK",
  "key28": "3dYhaVrUQhnZpfk7NksC2VMRZNH6ciA3rPgAkD5A4iKMn7tgR6puadFTsmXDeKDDUmTkwkfvPsZ7yQg7Cb2fmkx5",
  "key29": "uCi6X7JVkotJUUbYatvBZx9ukYusjUrEfS35khzzBA9QFWz4k8u9uyEnyUhDtb1QAqtckrrybdWBoB3xTPP9a8K",
  "key30": "3wX5NNpCHtTGodaQ3RYVFw4KcroA7ZowLzaBz235gFKHqBVBu8DaNbSqku3bzdhjdnLYkGBBaHZXuR17SiWn3ApH",
  "key31": "3NZtvGynUKdXx4783mbqJcEpjbq9E8JofD4dcMJURf95ixKJNW7mzTxkfZtv1ETCEhk6Q5y7aaMFhBYkNnmbg35o",
  "key32": "5V2TiUyiTwmh8NtoXCRqs18jNaRGr2GWUCvYc7TMqc6RxhsS9wLmahpvhvGwZuQgMnpguG3he9wcxmAyZuKho8QE",
  "key33": "61xesScNMQyftxGnMf4XSTBDLwK6YANka3SJttSNVrbv8aaTmMVnvbxRW1KjHe32rJZnK7w5ebA6AK5Rhm6bxdMt",
  "key34": "29er2bjPZv5w9r5ovSNeDVgvSXx6tGCh7bwNd7zPmzoEXWBxU9KjTshMvLhTEYKLArk9L5Rmv3oDXbC22LHc2ueo",
  "key35": "5VVe3kLTbRp8S7dk1irWs8om8q4C4Bj8sV7HpQCLLvXR97fWYPrLj48VCr2VNuyep7uinMMthe1ZcbVQBRaNJ31p",
  "key36": "5vJYv3dwwYoJfesha4TTvhm1u12mskcVrmZ9jN9e8sZ6neL7okG83GifVP7uBt6VqUm4L5bXbUe1gauwRWmtK5mL",
  "key37": "5YtQ8jbiX3yBkXvVjxQ77eBdvhvaYtvW6g99gVMsPrBnLc5mP3E9zK7mHsRtQ9C7hVqBA2w5AKCBkczoKSaLmnV2",
  "key38": "46AZorZ3McmbKy8jtTqyWyhqRgRdXFUC211UuirYxRB5io2HDbAA1cKJTHFuaeLwomZ6ncbvJJYaPDg239vY8EnS",
  "key39": "3UQdRj8bGspaA6jwSAKzwqtP3aM1xdnJLv2TPNz8cECT5XPPoAsSk8CLvx5DnBFRC8ULsjVtY5omtk7XhkPgcH4S",
  "key40": "2YLnqaFq9tDWxM5it8agRspdypeZeZpoGhVRMQxUnHhqtCrfB32M9uPhrntyRto2E2FfjCHpVkFqErPcX4c5Mja",
  "key41": "3QA9xbwi3ByJ7K5nNc48u44zdYNFSGyG7AGvXBQL5j4DFPjeniaz1PDjGTZkjsNCxFUV247SAwnQLdDj1xD7DbKj",
  "key42": "i4hMtQFtRP1awyjfzt5PqUkkoj37F3bV8UZtFs7j1SBibFn91kn9NgL8ngiXvo6J5BDQAU7kHYGAFvuyz73Y77T",
  "key43": "3qSbVAPLQnkwuLwUBXXNpFCbUptequ3m3uEdkDSKmzgCYvCt9XeVyQiMhwn2nZVHQnDxepxVESmtraMWeMwLsXLy",
  "key44": "2QNjymTPHAye2WicAHVi2qt2PBvgeya4Y99AxFGPaqe333UFxytW9KQnFp9XKat6xj12GANq1fHoRRJud4tu7WKd",
  "key45": "3VrP6H9GrzjjHQHzperSkfwYjRqnP3D6QoCdWq2wkXb6fgaLZPYkPCYPxuQhK6Q4MLTQxVKN1a6X2v8iSXPCEqqJ"
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
