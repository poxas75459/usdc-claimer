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
    "2tsDTR7S4sqdzCg83rAB2ExW5F1N1Z93pYzMDoQBwk3NHKXXUjUbk45MtdcbGV719S2FpDaYSHeo9sGKguQzZw7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EkKx2kXjQz9UQ3iUjrDhdbUxZAGvnQLJiGZKFyvfYprHrwWGoyu84KddT7AnHnxKF3hzxqMghMxhXJL8YsQDJ28",
  "key1": "7rA1Uwz9e3TbFpZC4ESkqvzTELHMvmCsTXzfKqsk67iWmaBB5Bci3NYq4YGv7k4JwtwXS3fF1Lr5RFJhnBE2X25",
  "key2": "5zaXnwBAdr64UEi6URocgTYiLyPfiXCR4ApssubJzstXFTjReE3UUF8ZRE8DZyX42m3iikzVyqmyG3jXygQmzXUN",
  "key3": "3cvH3Sja6oQAYMRMynMQZ3cBbsZ8nj9BVayWEtfUPwQRt7tvGPaLuch1roYZghQZTzMaBRcU3pLEEu1PwaQ7bWzR",
  "key4": "bE41Dh55y1XEWDJjXeHUe1ZjmG93Yk6mr7egETykPbhzoGQjPpCsqYdAYwnbS2VuJukJRAcp67hMUTY2txdouxh",
  "key5": "3fxqd3qRNz3h2ZyHbt2cFRibMKWAy49D2xCqDNwHrTami3jgJNmLSqGGZRUUC6268aLM6DVc9ej87HwCQNNAANSp",
  "key6": "4fqK7ybp6cqmt37Ucu2vQzwT3kDtB4UqbKh6UqCgogP4nqGEfPfZ1dJYW2uwbPQetXaJsnDkCkn8txTX9acvSrfs",
  "key7": "27YbEwKj2sNDyxyCodL2ceWqW191MYihifn1YJnKQKHvSbrVmCgNbaV6wbxX3mAVoawmFn3koufA5CsLzpXSoiBn",
  "key8": "4YyHVT6YRBwefWptkVCZxLUryc76isEzgdtH5pRgD7yQ7NiJbKrCANhEeCbgaZoCuoyjBbnpMMw1dX9FD9gyvN1f",
  "key9": "TMbjS9R82spP3P5hn2HywRhphbKFg2QHR17KPtEVERcYfhrLhFmGQrVraKZd6xQ2naqsGKHZxPY1DQ92u9zBAeb",
  "key10": "2TjShgcbaczw25TkMzkC7Qho9zcumXYQFcntQzFKVswWQnZgjephD8SuDPm2FacPb66LTaCRALmV8kNeTW1ebJas",
  "key11": "24ZqwZhMdLo5gEDH37zS733guQwHP1gMkbAQnqDECUW3MuBPCLsqbBJpCfVZDrugcJ7LAAsv2bQk7SWyzFWuRZsP",
  "key12": "2g7cpW38YCQQCswvaCgHaSML2uffm5pEoq6C7Lr1Xh7u2zkKxyizEvECPYWAWXk3YBQG6XBgKorRzwiPEGcPJ65W",
  "key13": "43T892FQrYJ5WbjQoDzvdThUbqAuBS9XyMdkcPSDcQUtZHmjvsS597p2rDEJfXjNTKtH9B2WjJdjVe1dBd3Gqw1i",
  "key14": "3bLq1cW5WnAXAkHs7yhYtbPXmg6k1HHbQ879Jk6Ke2X2D4d9MHhv6icUvBAyLxQjRwJHM3fboX5Y97Lr6zPxz5vA",
  "key15": "49KXjQkxjGrbCC9CmuPf61pfezewzfLBP8L1YE2aguuSnbx9t2oGd6zNJNnLxNoTANndaVuhD8ibtAAYuNmCyCTj",
  "key16": "2nnMbmn5dMjuzCLw57ECdXgZrPNLCGzxoAVcbF6BuYN53ZWzcEjR5rSyxQayQX7jeCmu4wEbu7wdeowTY5CQKZe5",
  "key17": "5DcKQ59ajvXxwaskTCxpAyLX7YBkcGKaAsVTXDE89KJ8GFGpgSxDHRRHCnQrrpuR1EhaGzMy2tQAZAxd2xAydoph",
  "key18": "5ZgM5nMmxzcUnRx32Vv278LxK3ScoA84pr6ifo2m9ZeJcknuZL1qrkwoFWfQhYAzPt412gHryxt2cVSexL3fMXnv",
  "key19": "3jhHJcnHAEJ9YjjCzT6ubicr84CDyRpToadf5d6wxxAuatdrFzhY5EwTKVN4Ct7CK7sA4Zj9Vba64ajdVHruYiXG",
  "key20": "67GSdTajB7TrHbTY3nu3Gq4rhdCM8f8VdNWAYd5w82MetJkkwFLNhFgdMpKfoCtHB5qeVysfwuL56yh5SzwnkANU",
  "key21": "3mbx9jLpQzsa5hWrvZhtGXQsKDDD6xLGDL6EXzu9J7vcR6bjxSxhWESrHtsvaJpTznbahqYRCB6QiYAKegCtGhgN",
  "key22": "3s6LKuT5UnijHn2ZmHBWpVqsiLBrkqnv9DYeiQBSfWWU7rZwyD5eZcTf8RwRRLG3r6Z5ZRAAanSRVqbN2e9sdqsq",
  "key23": "3zTaCE3r9vXiP4Qa8w32Cbe8gXooAgAAP7pRH5iWn1hFd7eyQEH5ygKaLecqBxqP956ADHpCksewcFDHPr8VJPFQ",
  "key24": "4ysanLq2Pk8yP6qn6durM3tfgn7SLVXSEVmi6dcBou5bdAJjea4sc78thzWxWBpBy5P2dVUCtCZ4E4ZNvzVMXhKv",
  "key25": "3kNiqiW4NuXTvdnronh5U7v21ABZjJYzLnra9xrvnfNgBNThSMubrM5Euqt5HWJwjYnytfcJXY5d7FaGRWk4qaUJ",
  "key26": "5w4j4iZDugfdMgsPR9j15TjbkCP4PuktfJweGmmQPxo5J8faSQBSUrgQ13dKq9f96AejWTmTnmmfnRH9u1LQ74TE",
  "key27": "4X7nvfXozDWHsoCVKLZVcKqxVetnQhgKiXPNsC621PvTwyduba1JmxHmkSSumtj8nbhrs29iyAALfqDi4F6bHDZz",
  "key28": "kb9HqE2RRgzeSUfa6APBzXW6f8PkSvrv65sfpn2QyLJdz6kLSXp4ANBPSCjbbReWdwdG3p26qpjg8fEaSU3Hi61",
  "key29": "3dXNyLEL8sHR9xfr4ozmcBNkCxMeZFbkRqduPpwEn2FdcimFeZ6kQ7rhQ524QksckDVJZ1aGjfMQ9rFziFoh1h5Y",
  "key30": "55awnr64msgWiNA7gFLqZNDM9WHFGs7mBSbvrLMgMBUguyv31v6zhwYLQ918eFob9JGqbAF6RxkWJffpwedX6ou6",
  "key31": "5Q2oQTBJCkVnMUWWJw1zKwMB4zoaibdvkGiAw4uqhuo8oHzDXuCwGy1XYAA6vMgeWc6BwP767FN4mVw4JEJjr5Hq",
  "key32": "3zKUpY5k8neuE3C3SHGSXeoeFzKiMwevzpVfgCj8YHZF5mCTrjhexRba3v8L8YJ4pa7dn1ejMXw3nG6jR7U7kMwv",
  "key33": "3iuCcY1btiAeLUqeCczdAvXhohf3mUgphjxhLkYfChCRZVVkSYVyXUpSmJi7STLWr7QgzoYokbrfZJ8Dqzv7A7ZC",
  "key34": "5dQE4EWhaHD8MkCibuKqeCyq4Dgzm9mGPs9VqzStuy8jSiLirYYqaG6t3GSPeHScweQkVBMSKDqWZY34f6b3w9SY",
  "key35": "5Ceup7A2v4TsHjrDfDMNkkzHQDmSUd9aJZLvjLaMKE9H5Q9VFAsAxCdVDQr3F2db7hYteHSUaPYeauq1WDeKqUm5",
  "key36": "5TbtG6ms5XLws4bQ1RrAXxMTCnexonkVJf6iLRBha3gQNx5ofyyU236m1PQB4rcYYtD62gkdxSRikoq8XUatS8PC",
  "key37": "3UNiWQHapg9CC5CGoATTP3KhLGoPFXAt1TMWBGXHwJ46xqdcGJknuqkcuPQ5nwHffrbZca913nLhno4KdbtYC7ft",
  "key38": "2tFeug8kw7ySQ1KjBa3qVrBKU4LMPEFygQBS4xUm5sjn1CT5teoJtSvkySscYz6kgSCv32vJpu7x324DEGPvrNMa",
  "key39": "38abjF6oU3ujhUGcGM7PSTp9AA996uyQ1VKQfRjyNURkiAAbHQUwHQgd5WBifZtA3Fmh9oNB4K6nxTbfE67pRDXr",
  "key40": "66LXzUJ2GgNTTdusTydTcChVeMrq2Lwinaq2aFtzucWD8SCyUGixtGFS3f8mzQouSdVUE2ZHxPsGuyy3ALupLBN4",
  "key41": "4BAiwt3gjb8efYMSFtsM7FE5cwW1B1FtQ4ajsUwpKg7VbjT9ntHWoQTpJdAPLc5gMuwxyuFARDTD3sgtt5gA4876",
  "key42": "5rGDpqYnpgGDPGMPmz8BdEDQTbYN4rkweoUkdpBzJn5Txmf6UCBEZ9kvgaEJvze66GHPoGUTYWa7JZRq9axKNhJQ",
  "key43": "2oxSmgspuXyzzdhUN4bATvgNkimJwXcnMVcPaqvJDKXBoVER22TugtBQeSzraSCXSMZHXCeVd4auwb2fXZ8sTj5c",
  "key44": "5XTVqDZRQzBe1TuSguTg2PXLugPXEAJWkz9GPwR87AooxswhFf5dYrHXjAqEWDx5q813GS1L9MjJLMeqzWaPd3zc",
  "key45": "92nFjWLECDKQtsSsVRF8cMFb9mKTWX5ityjsfaq21fTBuRSHYVSv6fnekEWpxovytHz31YGJDY8eQe3dNVMnKYU"
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
