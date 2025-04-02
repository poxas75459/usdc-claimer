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
    "1wj6tZ2PK3BQV21E2PE89LEnw3qPGwsZX73W3NUxwDbDzQD6AKkxdUWrtFXEMFKZoBYtjuUtPSUTDi7ho7PoiLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ffzo9aWFsR767vqqLWBUwUSFHkHc2TgJWx2bX7QKMSz3USAwNnu9cm4mmmJbHXScf3rhVaCiEhCH21ncyGzKRfM",
  "key1": "5A3eiZDioTsnw22steQWMgiLcqqGQ8JTSewazi3Mg1PNBuNwikrrMpThz5fLFm2CCZdC642W8V3fy4sX58FK8cc7",
  "key2": "3CwTX5q7yafSy9okbTpE3TCszJkMYgRtEXVjfZgDfiUajnqDfeNAXF5Sts2YkqnuGgFEdw9spueyJjaa1Wf7mnmR",
  "key3": "47JkeGKT2N2R2ZzALg42VVVtNmyZ9nzCaHGLdmXtaatgJU8zQeBeky4YVNW3Lu9zntKhNLPguUN8SHELMiPSBUvB",
  "key4": "3DcgtQVcTBaG3rJLW1Lv33SJh7K8g8ERZp1J2FVCGcAam6MsbH1aGgxCXqFeWMaxLx84DR7XEA2y3ggynhhCfXHK",
  "key5": "rq3oJ8rJzHm3VU2cgBTL2fZSVNBY6QLFMYj7dEzR3Ua9zaPSoNJ2UaGRnvbHx6PyRXesEufNhCHu256FZQnSXhQ",
  "key6": "3MDFUQS45fdHYP7CxB9G8PFrUZpLPAKhomGccFvNJLQEsW7efenEzzN2DPxZz83oM9Ef7ESZ1xQpsGqyXrHfG4fo",
  "key7": "2jK43rDBna9dYwmDcfyv6VWjok8u2VDmtGiQPJagKQJPZcCrTF5hPQzfoiyowokMKprv6vD6UQEZWJDhtiUxESA1",
  "key8": "3QTc5aX11MKVbSiEAvQ54yf9GiQJZPJjkX6QQcswFL6FXAS8FTDoMDzEnZxzKxvjmGH4oHsGVRZ63pGiRvsFFkWr",
  "key9": "5nSbpTQMtX8BDrPf5bXGGggNDH8SFsJUrnzUjtgz39RTrQiUMNrGSCjYJt3FndqNwv7VEFsv8RShunxLnWyDcqFv",
  "key10": "26UokD4G4i5FifN8hKAaQW66mzS646oB5CLWm6dFXzrdAG5JYNzq4iKLFzQgmNVCfLrsadGmJkWpRrjD9ipKP3sV",
  "key11": "55kKkUrDjmV4zumwYtD9qjRPpjLv85Wt8NsRhFRX5sANYGRPw1MabwF18faCV45hRWtVjzWgLALkdD9rM6aHwq8Q",
  "key12": "39mn6YVw4xp6RD3hVh2EmBA87muAWV9JApSDWPkG8iEppX8qbsxyFDwj81sT7Pnin4cJHNuoM8dLf4LinSRpRocq",
  "key13": "58LxwFyrFsEmYq59SMdFjs57iwKw3oq8RoyzbxATQHqjDkcV3bQxbTNk9geyoDqBYMaDiK98Cz4q1nRAVH482YiN",
  "key14": "4sMHbAEPe6wftPNcGiCR8LdDekD6sXtBKR8wL3hkuo8SLtaW7AoBPag2EJnvRCvAMUZZuUd9W27qGM24d1cKz9R",
  "key15": "w83YWub5Nz84iWADTfmJgoux8Nnim5tXfFVu28Gf6i6Gsn5e1yKXLp2Ug1uFaWECgRj4gnGSyN9uB336yLK6oZk",
  "key16": "5c74ftLyUp815gySgqfGNxzVDTpLid3dtfegVECfo3SaLM1mt7VXiEApyb5fjV4yQvdyEVZmS7CRfvL85PenfefA",
  "key17": "5n1CCRn1SpcJxV3jykvfnMwpie9PKCj2Tn5X4cvRcJSERJctkgJLqS2vB414t2vhoDxnWgg9ZW6UUJNGM73BHHK5",
  "key18": "2y3YSAhNLEPsSDKv7sU7eVyZmVoHVzay8SP7sKTUyEf3Bqg37zeqKNAAih6th18DgzhFXd5VmcufeBHBQiccnBxa",
  "key19": "5oAKZu14m3ADXgCdPHRezHK5UCZNnWfU9iuC7hupWo1yDdxqktqNG4pXNYA8jBhui5T9EpAHGKf7nhSn8yCK1jds",
  "key20": "33jsGAjaPR7FrDvc2fYft3KMkbLde3i8V7kKrFToPmoMvn6bEUEDe41CpEyPBqRwQzk37CydFGL7X8ViT1yJjZi9",
  "key21": "Aa6qGaSmpUSRAyzQjB6AEFXb8wcd3cD89qhcDHsvAu7q39wWXgpUB67T1ceuYs5HR5THJgAL6zUeXLtsnxcRcbN",
  "key22": "5fEvVe33eCStTL4vgNgSSEtm7htgmbAFgaD4xTJFdbEzmd8NcWDNwwLZ4PhsDiMExyEjXHWC9k1gNrUR9CzUJDuh",
  "key23": "5h4V9LVsmRmmS9PLU1Uto8NVMxWnwbMwihb5HBemb6VsGETWKsVwMG1PSoiP9tqJRYEjL2bvZm74FVMnv1WroMV",
  "key24": "2fFSMohgcANG6JZxjHMX7k2f9BtfFgsQjMQ4ejN152dKRTYUxphJUDzcK4xu1cZC5DpCaxvLJDK2Vo5v3u3Vr2Yi",
  "key25": "32TMP22WJK4qTuKZkhXpAw61kL8jAvhzQGbLL3FzyVRpDp27ZTVaCn9wU1tNPfLJrAGG43eue82pLV442C7vcd8E",
  "key26": "2QQHoV59xxZTVCDNFMD1eNx7NBMThnDkPydb9V4Jqhox5kaKWS6YGkdESJvHb4efgG6WZhLqT4aiFPbmAiXzKkvT",
  "key27": "2cLpw9M1ZYGETXGHCgZ1d5JbAvtCMeZcjnhwxDMbMEGXXoVDBQuAL6AidSRDovpEXemXByEQMXaxhcNSkWXQh3ru",
  "key28": "3Qx3UaSdEAEid9ve7Vu5jEA3qyi81Thwxa8gWQHBjmsom2o91RJDpLhBjqHjMvh1ocNTiRMPXboUHoFzNyCbC4JG",
  "key29": "TDjH4kuRxo3GvPQs9PS15NFWdgRhkAgJLDVguj7s5UCYAGSQqDvUr3oyUN18A9xLX27MBELL2YyVLEDhr4sRHpX",
  "key30": "2b6nm8CeiAaNMzvF4k9vjRxWsxzgpjfFhLzMqr93y8to8RLbsz3pkxZB99DqhenjwkuWk1gVstFco26hEAvRPoN3",
  "key31": "64MJLVw9hBUiYNqkhcqErpUKDDoJTdRxQxXgxCw8vEZKtiEwAJ8AMPboPfi7rSn7xkejCH1jTzcTiPcMwXWKx1ef",
  "key32": "4aeN1VnAcWkqB4qcuJ4ytrBsC66LiWcpT6RiQxZvh9AKDBW4GLzKjauYWnFMxQW5CHhASuzpQCXcca7ZgjYwH7cF",
  "key33": "465MFz7sg9hYCpFHvc5sjG5uVudVFHDqSJdxVLT1ShAiBBoow6XTNfmYRq8na2E8EqK2p7ZYAG1XSmRFSNuBbrdb",
  "key34": "5XM6yo9mJ2c6EyW1TBXbNjubtMKFAL4qrZjETeJedKCqLnhU9vXuTLzgqefKQxfuNqoh1svVNWNMoRCCRdjhzUjq",
  "key35": "3WhpXvQuXokqzySRTiQou3ews2q62YuY13dLdkF5RJ18hYwAkhjoPjbtXthaQp87e3DWWgN8rYb5HGAFjzST9fyN",
  "key36": "48gpzMGxzhWuG2Ds1fTAHqiszMnbPi1V7W2ZMDwqJ6kprpP1L9KkiFRPk8UfLgyFtVfZHDqUNuKQFrTVAoW4t7pH",
  "key37": "2EpR2AAxZZhtSRUvnUcbuhrTh4JYN9TQjd2ZJBsLk9WqzdwfTB6pNpxBCM91Nx665xz1QeePodeP4ubVqxYhdnoH",
  "key38": "57bNvCu3dbFYcuCxpuHWh8G7wLcJF7EM6hy42sw9VGzemfjxtbMBgEbkn7kYv77m1gNqgzqkKSRsmdFLSQCNV74K",
  "key39": "4XdRjoHbHD3XBXtWgsSbZ4c49dj8w1Ei9s3u9qYUpuMwDHpakN3NAxc3PrX3dfnwnjEAhyh82CkDDCac5BixPwF3"
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
