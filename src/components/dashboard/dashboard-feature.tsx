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
    "45BBQupRNJetrHY98VBj3RAoTMQraWoivk6ju4E4aBoZ9cqp6snKuekwRN7k6hLF8RF6Hr17BKDkYu7CKGH4xy9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRR3zRt7D7cuo2ejrjuVLD4x6y1noGb77d168kd3y6HAYbWxuVLXeZvSg5THt8TctmX9idvYmQ7vuGyspas5R86",
  "key1": "2YB7pmaWZiErniadm7je92Fw8Mx8abSLVpTvGty89cVpFTAeQhfz8mfYvqDG2QgU7Wr4GbAY61VYk4BQKbWUtrG3",
  "key2": "3nqjUEykWUXrxMhk6UM78VmE39iWvpeKZuJQrvNT6Eg9MbfKc2HqYnipQRs9R571UFg6NJNSSrpkRPVtNYodpv2w",
  "key3": "431xKBrcgmMBZDdt8tv5xBQkzErE4RYN7ij5KBJhMSSqhSdg4sshX1yED7TUF6pDro8utBcyVJikNqN4Zw2oudVB",
  "key4": "2epFYHQfyhrHsfL5RwHSvuQ7dgWXM84S5r98ESdg648a6CgVpA6hoiBfuXcGE14SxVu1k12ZmrLdJUTm6883WHCP",
  "key5": "1cwRqCTAZ9ZNp7TKdTXY6FRvbCN3GgeZDkKy7oVCvfKkdVB4ihXQKJVrcSMUYbmyt5aU6DP7hFFGCemSzxTGH7t",
  "key6": "4guE8oPRz2CnddFXJKLf4WJWhPFXhNGf3m7mU2j66dvWYhZ1zyHTXgYrheYuU5o51GpQ2LcLUeaRa3Y8D3YRT1LB",
  "key7": "3es7g1oeU3fNbkyEXpFBJukbe8oieFtDQeDiUqwJV5TADUHQxcj92yp7mXapdFbvWz4Zex4AT2d3duepqHxt5Xd1",
  "key8": "WUPZtWorePgAoEY17W8FULABzjQctGwHXMQNHww86kAMnCttPeXujZWywxKw1J3ztbFHC9TUiWPFQj254CXBmnA",
  "key9": "49CPeBTZv6Yt1fumtywzMkB6YrcZcu4AsCVkb2TyobqyjWhV6tB9iP9vt33h8nNhPy1EBtkw9erPc24zj63HU2aP",
  "key10": "3GRsWwUw72t33FNNQsGh8JhDFsB6LZbhr5o3NDFMByfFLHdwYzrwC6zpGSxWpehbxSYnvmbyiEjjMifPv9DioEKN",
  "key11": "5CiTMfj5gViFjWPmrXwTWrs6sxBeWw3o8XKTqmdBfsfXCfwbL4srRTMQe2Ag4MYh8MnGHe6HhfVpkubT6gyhAq3G",
  "key12": "Eu9woU77NT8daSGVFJrrBsMAtr9dxNvAEbMqVNB1KJhYrne64e8UCEZeeZikj1mWZ1uQzv4uBytsi6pXWBtcMAR",
  "key13": "W9yvej8s1fRjXfJ82C4V3F4S4ozKqzjVfBjCer1nY9yfSaVbMJsxs5sFp9d5qtLK5B52tyQLrUWhTUUa8jKAbMC",
  "key14": "YzMpw6sAsExBXfHXehyjMRmVJWUpXguLX6hofvWE45iDf5vPcw7moGCvRbqjhqp7ZCxn4oj5ErtSxLFkixzvzg1",
  "key15": "3VKZ8iUzi6TzjNcqTsjq6M6KP1HVpxvuxcbUCMKQn3MmKYSxGiFTubQKNkBd77zF8MyWjzXsNNScSShLnSgwmaQQ",
  "key16": "2ji6LefkEsmb7Ezjx5NtjQhrBLw2Pc8Lv1cv337qvGLvsnxyByoxinSWXonN2JfzAtcnyMssKyo6DDFuxZG9ofFi",
  "key17": "5Eg5c174JAx9ihcnNMFjzFrtJnycFjy2xoMTfk6Z9RYyavFuVoisqSDzauc89bKHpmuKDx8mCiDUGxdsPxiXbJgz",
  "key18": "3jEhfrBiebez4t58Jq1Y46yJVg52ssXFg5nQPr3sTdZ9vufVNo8Kk8DfKA8GsxvmmYpGJoKFabtaD3rb9A4T9HHU",
  "key19": "4K31ViASyVghnsVm86wiUwS9SJCdUjvCajsM7zetxUg6YAXZ7ud16g7ixr2rGS2uS6qnp3pm2FfGaQx36ogJcy57",
  "key20": "4aXftSiqpBnNh76LTsnWMgKhABf4pJEzFGiGmwbf2UcYc39oS5yZRHPpM2z5WrHEQfT8rrMqMP2V2VZY9e8tNPpN",
  "key21": "2RJLxEdGjkNDYkjxNaYLNVUXzv6TdNioH76W7Y7JjkwzEczD7pAMncfgkDz2g1nVUVhe3KvuwPmWCqQg7X28gz21",
  "key22": "4UdKWWzyptzpnq6Rv6kH8vDk81M9AgqCxFjMmML769dvgzNz6YBEkYRzTGHeij7eFmXdftQ8AHgZPhAGwnJQJTen",
  "key23": "2Rx1rNW89BGniWZXdkC6bG6aTqcV5m9hc8wMyRQTarqXWMa3KmAkmC9CJKM9iA5qQtxkTDzL47N2iqWSVAxfFuUj",
  "key24": "A4ei7t1UPxY45FwiFJ33ofPWuTjHdK69VfTFyoqE44GBpZKbAh6bjVukD2rNaATYCLSaPfepncFSwVEPZnGEsW8",
  "key25": "4FVX4UWRcr9uinonW2sJckj1qsdqXBKoQYHSx3W9PdWSAYZE7KGfj8Fq6BrixS9Q9M8DgxFEmh7Dy3TLzg8D9wfX",
  "key26": "3q5pNkCfJDN3ddS2PA8N18Er2MZKKfvVQi73AoYUUSDfFNwCZ9fzbga6Nv5V9jDZmuHZHuSNfnPQyjJ5sYAUPhPX",
  "key27": "243WfdVrmN3foE2EBXDF3UgetZmHHGXE6UfmJgX4kEPpMgzkoxDHMBhv4QBPtujhdBC4b8Vk17Kha8kn1odxLEGV",
  "key28": "4aJ4PEFLvANArgeG1GGjnsLZP8Di7qfpesmRD4BnsSN8hDuBA7e3oXBorNjqTmyyNRwLeDYJT1o5dunVqyaERVN9",
  "key29": "3MznLmgZ33ZLaMTCRF7EARpRDqFWKX3ciDc64ZrzUzTDgSZgJCdqHcZQoNurj7ZAoQTUtu6WNAVAj8oG1pn49ARH",
  "key30": "5EJFkXAGbTvUEr3A75iDUwaxN5ZRRHpuwEXYoA4n6CJSxVEY3q5RphEUPrAXYkWVSxDGVpmZsowWuzF4vXCV2R8s",
  "key31": "upeLnVNSAmUm1H33TN7uD8V46sz4qBFUQrxCFQQPhJtDBLNicaT5pX4RJmbnvaSiqXmT5KVvk44iWF68FCJcUT8",
  "key32": "2WnSz8LU6kKyxK75jPsrAESvhzLnEWo9JqguSj5EBMqnCe9RdRKcujEimVr4KbzB6Zp3uiLx6BKuEzGh6E62fEu",
  "key33": "5sDym9EBU7D8uYgYFiVz7rs4zc38qRDiPT76NREe8oXiBTZosbATeERtzLm2Zg3Ycz6DZ9GyAEZYjuCDcZrWGsUm",
  "key34": "53LxiEg4idq4rq5gNzZJVjoEMEdKZtqRSML2g8u5qAALbmJZKtUDF7pMJtW821RzQ5axBvX23MiXLsGWSVPFg2ho",
  "key35": "5PULj6CqNu48CU3omWsaoGnhpKGBrzEDaK4e1vjT6ViCM3VNpC3gqvTkoBHuyxEtH3KU87F7bjrmeUppc3gxgBNW",
  "key36": "48FFYPxUBdxeCrarBvvB1QdCgvykzHLdjqkeSp7cuFaSak9NiKmDBjxuvnBf3Lxu8iEAZJm1YfFXJcyVxWcHa7oN",
  "key37": "yuZsXN6KFM9htRqnY3gBLFsY5ZMqRX8endcZ3yZzMs5h7DbeSrxUmo8JHE2yiD8A8W4ypnUFyBz1ANmRGg26rYE"
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
