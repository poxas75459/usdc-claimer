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
    "nC7WU4JDGfpDrXcxJ9rhTu9fVea2F8ZtEp2SQ12fzBpMaeetH6vtCe376SYv5ndb7k3TpCWmh3T2xEFekQX7ENy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PHjxwavvf7TgKEHQNC5UfLvRMPeDs6D6emGjNKAeaHb8VkybUQ2bVjqNNBSyKkQkyC6qwkxFw1DGa8qcjnH7bLt",
  "key1": "5hxSxRXVVetVnyXVzvLRZaj2HK1nt3rJA7j4C6jBKKsx1aJNDWtikRVzLWFy4VUNvUSw5HuuS2VfFEKQhnNFvvQu",
  "key2": "fdfShsfAWbVFFafeQuyG8FTUz95ciZ61MeaaUoZ34vWX7q7zGagkYcptMTP7SiRYXefkKMCvtmYYUv8aB9bDS7Y",
  "key3": "uvv31xWe9uar9i2cC7EBXB73aG6MJ5HDcL8w46DyV2S9BU9L9CrdLtpAgRUMxJWBXEXw8ztqLmPb57iuzvQZdKM",
  "key4": "5ewmTepiHcw8DZUZ4QcW5pUnHbS26w6Mo4Vh6Ck8Nt7arbTfNG2e7QfT2xwvsRqRLYRkn8Ad6WJuyYKrJfF5SyRt",
  "key5": "24iDW1dBUTbzVbiW236xEQwsXnuxTr56vVDCrtosfFeqjwxZrCqPJttRXkvfVPuUu61HG27eHvEwrLHbMe5AQPAD",
  "key6": "ohZP3JuN7WJxa2raZYQg9cYF515f2HfnZHTEaRRR2bFMvbvrmweycAu7JBm7PzNZCEQVKBPDX5o1E9WymoqmNSm",
  "key7": "4nPj9ZxYLWHFf2nDuKWYCsTsAwcHN5PX7EJi2gEMcSKCDKK9G5BWJ8bSqsUwxn3TdkDnm19SwGzZSN3Q1kfoB98j",
  "key8": "66xtQs9TWVBPrcK5ypQQEmHMnTibB8CguMcfpC1dFS1L7nrDrYsbQvDJfyg3xqURhdmxh1CpFxtj6Z7yug7J2biJ",
  "key9": "2nHLUYoq2q9UWxM4yyXEfyX7j878szRXnXAQW2prtSm73K9LFqkexNj8vcjULYsfGjnW5SPuaREnrzEQ1JXuCGfk",
  "key10": "21LuygYC5K6ScnSiq3GTw8yv5oGvEJ2EVjt5HEnc2TV2X43zzrCh6va7rafRzCyLftdjqFrG2gduFDa1mfyTCoYW",
  "key11": "63pghZYXtQbRfkrga8puEsXHAZNbxRiUk1LwnYfy2yY3ueAUatfmwfXkgm7Q4gpeSTE9DuHvYZ4hpmYKhNTbRf1x",
  "key12": "3DV73VeQLxiJ7sAwqByz1KGCJS3ywYdG7wWpFUFkYvVYQxyzaPAGQfJQgVA1nPnK6DqeCYRRfK6RNsek9Sp2TiX9",
  "key13": "5po73Njmi3u9z7DR61TwsDURPy6hVB3pcbWupioiPiT1ZWjvDt6DP28yn4iLMKwST4YZvoBJf9UbP9JyB3bYxuLp",
  "key14": "4gxPc6FpJ6c6kYRz5VDYnG9Cx3jDgdbP3rvtBxxXyGz7FRjB2DT1QJmPJzFZrcJ3Ls5eNLh9ughoGJBwq81Vy1nU",
  "key15": "4Z2ctmk9pWQew7gTwPB4x2PBL9kzBwPXg5SkBxoS2R1FGR8c4S2qN3pmm7KfBbdodaoaM3DZcTahT4AzMEZ4PB41",
  "key16": "5ckgr7rGyan1cH6GsAELCJ9PJSYTXVapqxnuzJMSw1epZKoh7fBDvaFyM2XHnjvc2gvt9YMmBdPpeFNPgRrM9sjj",
  "key17": "vbDUboHPmmfd1ZWGyF9Gn7xP7nFdadvAPigvjjJM2SaEH58tER8fLnpWvsDHe3H5xtkEDWwEFJAxYmEhpGNpfqM",
  "key18": "3VGJu3in5TjcZRE59H4EM8eSKJfy36t7o5KVKytrbWWBTDDvYp6siFmbWHWHHF3tmDQosh68VNHrEv6yAbhQ9mVW",
  "key19": "4EQwR5AzPXCX6Za5cUcGY2u6nLxwJ3NeNdoa4GWLwCUhe7JSfgVFgFmjqL1bqB1LEThAYauc55FE8QXYGboE2EJV",
  "key20": "2QhbaDMAYx85Au1HQuy3xVURn5b5ocvdA6QdeoUdbUhTWcW59NhsoqQ4HWMsfPaEfk8UYVPja9RgQxC77hE8joXM",
  "key21": "2p55dChwW5VTLdyWzqRapySRj7rHt2NyRVsd6w5Gb9kMPdKU2a3nJQop8VNDG1QJywrFTUaEUDQYyDE6boWMW96D",
  "key22": "2NAekiRi7ove7CZDXbBooeNSg5XrLJjQgkCdQjjpGstcSgWxhntpAC2LJXLHvHn9eUVqsyctcpx34AiTKiE5XwiB",
  "key23": "3J28AQhY8VtpuChXHUcxHoepKEQSLioAdGcfWJgB3zPd2Tzx5NeFPYPQ1Li417998W1nsFWwM9waUTy16Y4QZub",
  "key24": "3fhWpjq8Y3S5DSijQxz6rKpp9jhGF2JwLNbJGHLSMQN3TbWvyTotkMpx3GViQFZ1pw33FbtnzNBRmyMvwB9oVGru",
  "key25": "5vRxRpSdY64pV7L9i2oQCyk2dAbS5XDDBSqybh5UVHoUDQt9WEMXjPXFA9oKyarMuRLdXKurvNgeLRkCMdyFTn5r",
  "key26": "5xVEprop6w3z7j1oigBd17Uh7Pvw8tKu5siAfMXE6We8FBus8RwG871fvE1DpT11zw4wYtGvtuntmcJXV5m85Pce",
  "key27": "2a1ZJpZgCNSTzpRTmdu4obA7CbC77LPNDYRLdsMJHTVb7zw734CUapWnMfhnmWKo9L17DzeyskCmQ3LUTpbor4BT",
  "key28": "zfuHg1bxbqmcEMHJr4PFL1KaYJ8Kq2252Wz9cfu332wE81ybsAckEQKjwbzxuLXyQeoxXHg7BeiwY2j9CXRv8Mm",
  "key29": "5bHT263tapuNcL2xoTBuV7thd5dpaBdK3kX2m5hhxK54T7bUCA5VcbSdhDGNY8sgLcNrzeAWKMAjbZzd81NGWYSf",
  "key30": "3nBzW74ppGf95dEKgEhpcHUE12hRqZF4yQvF3tUPMEZxxLfZtJfVW4gR1XHRFhBfRMjmb2W6sziDovjkicTXzAR5",
  "key31": "sYx6UGz8hTqX6FTWhiCM9eaycPrBxsb8Rhhmpz99cc1fCWufGYzcdGTukGSNUf9ed8w7bTV2tzpepE3QfSXty65",
  "key32": "3ewcAdVrKHudqmGGRLgYsGF8SGXTXMDZeRPneqgGy3H4f7W23bhBM4QaVHhs89Rztpb4mYsdGZoxgLHWWzWutYsG",
  "key33": "3jcdsxVk43Xk5o3Mk4ppp2hHbVE5pq1p9KLprpYrahdtHEXtKPY2CyG8BDrcZ8J7JcQhvhSLN8z1Tk88von7FHZ3",
  "key34": "2CLRockdqZHNRn6QQ7L5NbqRHk8hobFJtNSxAhzd3bc3Gxt2diGwD2iEfJb3AUfFMvz4VcCqJbUKs2UVnQLhMVTa",
  "key35": "4uYEwVv91LoraoQZdpThKFaNx6ieNaiD6rvV6bUXNktGCuY4NHpTMDtge1ZXyvqmwfxk6FsF657SoT7jQ24XH52J",
  "key36": "vfseAuQYXNVGAGtncKZ5ZLJ5J6Jx7cjeNv6RttvMLb4LBEFh4KxvemReX27BSj4jH7V1mVqZCw9aNhXrKwpw6jc",
  "key37": "NMboHeBxbGCUYvA9ZdK1o5o9hezhfV3tqJcBX1ZrA9CykPREdspJ5wsx2yT12YrJSDs7wboLJdumvkU9pN37ADV",
  "key38": "22dsTnHBzzFn3KJ3gWyPbuJGpspR4CGAB2F7ezW8gkHbELPfCuhjwmsgLxURvJ9wzeCTnqTxuhp7djhztRFk7yos",
  "key39": "3qys1c5r5pc3ACDHUvtKZzqw4FCjtQHPkuiMTLjVvgF8xXPXjYyRan36iQsBNBCr1Gvm8SMa7ptb225bCeZutTd6",
  "key40": "2W2ZQqt4dWq6rRKWc9T6bAAx7ueWyTy2MsJPuD4BBwKZcGUWqSL5jVMJgr75k76Y5FjXyfBVFxmqoU1dEXKfn3H",
  "key41": "476r7zKgX8VvtzyzuiwoaK7bbDLUhkPMtmGAP34s84y6txpvyEpnuELHz14LaHex3pNvG3dqaV4fRwAqMermcqwB"
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
