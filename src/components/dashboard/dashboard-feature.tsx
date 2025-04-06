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
    "21K9A67tMS52nSZEippwSAFCYv3tA4pVgfXgLHQRJZpRqr8AzYcrvjC9ZuPwBU6cqs8FRCfExkeAPQ2sbrG25cTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqcuHvxmjCAcSsNaydDFMo9JNEJQ7aziSz2KY88VvMzbX8mReTSssy3Go3sXZMvoRniZbzTFsBPz84QdU8ZRN6M",
  "key1": "Af9ueUgksjbFfPbtLZFKUVZWgpL3beDXf8qA6qKuSVfQimWSPfUrTxba6CjXvYMA7tcidhsFfV5QKeRKSwJ3z4L",
  "key2": "YigrVXyffYmMzm9idYPfgzAWMbFG97Zx2iKtXsQvVvZGeSWpk2bbo2XT1A4FAqnJ1ZBSZDdtA9eKHXhRCrKwVfq",
  "key3": "5yqv7AUHY9F3mVby6G2Shpzq5CFeprz5kmoxXzSsfKpvCMhQB6V4nr2syiywTssTzdP2gncbKH4z4rXcGLQkTs8x",
  "key4": "3xHLQvLwtj8QmG7W3dpMegabzkTUV3sgrd6bw7hjN4nY2k9hxMoawQq7rorHJLuBVysV6dZzKDB5y7JhXcXchdqK",
  "key5": "3EQvM2C8t8eRMLnmKDKmMo3rbsQ5NVU6jgWXxXq6e6yTped78DbZcYxs5ivDpMcnzHwxpisMueq9H691g4mFXYge",
  "key6": "2inAkZxsCT4No1Ep3rY6H4WzW6tFF24UjTdHw69XyB4Nz8ciePsH5F1vnaVDcTi3vvu5RWZoQbzvUcAmmz63BQuf",
  "key7": "5QLxe1pJsAENKio5dA7yhMRaXHy3uGDrSsTKab4xvrd2Pvb9AYiibfKjmGV4DJCq8hazoMFDSYgk9jimTUEMuh4D",
  "key8": "4kxM48AkibXR4n6nN3cVABt3QFi6qWFs6bqyzw8FtLAZRT1kKF4GUEoFhGeRQ6Fw2qpd7cyxiz45VjLFQm1G4wLw",
  "key9": "YGabcDawDt5nwpdXrjA427M9iCuRSsnu9ogdXMVYSmSPv158gi2NCKuDsS87VykQrLD251banXLSrGYNvqiHFsb",
  "key10": "2t2bj1b5NtSPM1nxkLCQhvKK8UPZjNS5Axw88DmE4mY6uU4GD1EF5rujvcrHEKGBfgzfzuSWVZbhQwnfNmTkYft3",
  "key11": "5HVTvHi9V1AJApPvoL9STyXY2TBL7q2AJz2nsxqeeZatis1r2HP58BwVmibTsNDLJMnV4Wjh9by2RRUdJ7joDiCn",
  "key12": "92WHGGs3c4hooP9B1dmTykdCSfzjz8Wos9RamgDighBnxNFk4eJRxFcr49Z4yYzJFcBrHXSvm5fswAeeLhpebG8",
  "key13": "5E3YGxGvy5qmEtHr3GdmA5VwTJ86MX3F7BmYetsmVttWCjpCNT8he71r8b8bttGg3mrNtSDhvsXMNexNFQptSxJb",
  "key14": "2zQyu6CUdnhdnPTui8CMrFgn6k6C5YHkRdVJhhq8UMiwGpQetC2Mi6k9QcDKTiV6PuyFQCkvC53i1ocuLKY7ZJyk",
  "key15": "233LN3vWoGK38NS2etkUeRE3rUYmEeLnu3kLFK4Gq5Ums4ME4nNbVPFeHP95FfvdEdWUZibmpYsuPkz4Y5tCu7Bw",
  "key16": "2GXvLZQiVadUoukWyPFm1WitSJiu1MBrVBZhox2dJHHj75RsQUsGue3u3mqWZtrz6JyB8APciexFojk6DWZDQBc6",
  "key17": "4FZ7TbDRhW1sbiVVe5gaYEHxacwi3tfbqw9vcxMgN6XZe6rP7FXo3AgvtXyDMxSUtqNwatGnxboujsJtFRLjbohu",
  "key18": "5TZTcUNRpzdze5Ez8dC1jsmkse4CYkyt1es6pk7uD92Y1ziDQbUo6uqBFSzA8RxFvkSNQur17NUArWBJ9UkLksUX",
  "key19": "5Q5DhK5ckDyRmGtCcbWDXbnS51mawnFcRu8sGPjWBv3pgb9SAKqRLmNopFsVY3pNY2Gmn8osg1q5eZajy6pWq6xq",
  "key20": "ckGaPnpVoKkBjZTpHm3DrwwPVoiAojCHDuaFfhvavmF33XsdkHWAbukXxMuo1NefwuaFDBKcitFr6W6dUNKr3uy",
  "key21": "5rD4XySXR1b9SXSYahMEejzknNtvTj9EUsnrtmFKKBkwkFzzpmfUJ4DQg4zkJJRSSiM4XA1QtyyYRc4FhTNWeQB4",
  "key22": "2fzo87ec8JtaXiaxweVuDmwmVP1bPVTbs9za4QRAuUCQqHZtivGVehKwiarRBBYfafHKpmc8iaFaF27dA6ri5LhT",
  "key23": "4zrUPRVjgoYsYWu2wd2x7RgJsdd9QA44XRGAVWgNbxpRwwh9gmyvBni8Yjzr19WN7wCgU1omSH5hUdj8KmE3k7Wb",
  "key24": "NP2g7CbX9nmAeimRsoarK1LpKX1FawEMD7RbaPP6N1Sjy2EcxBrKsXoNU3pPFKqcMh4yh1pAZ3TAZopMCeQi7sX",
  "key25": "215c8k2zWMVcLyqUc9TNAUAVLAAxoHoJ9JPE15XQuJjWZDKAVVwEd2MLnt6v4Vkw877vVcHWRr7qKQxuahjP7NF6",
  "key26": "2gMkeg11q28in6TKiacLmhv7bdiu7LfaYbCZTGYd2yuLyeoSzWCUKT8jNTaQaqjkPMLq4FLjPZqdeiBAJ3K3cGXi",
  "key27": "5LtHSYTXhT8YiJBK6xGM4AyYCM5ZfHNNtThKKcrEigBqobg8qxbKXMY3aKkfoAVXKyqb5LFSgsmGT1E9GaFaWFUx",
  "key28": "3MNaoCULGCg6LKeUr32tYNtsXayBH3MhnBXED7ZPUzWZ6Fc8THWQ6E7m94ENcS56dMx2BZBdC4LBUwLpngKViS5Y",
  "key29": "64ds5xMydwb5sAwgv4bJvYm2bganL42jPug7mh5Xg88d1VSAJDxY5H26ikxJEkPpSSRYFZ5Zrh9EuTeEReDkNQBM",
  "key30": "2zv5FY8M3fUsAErsqaK7t4NJwUX4Be5PAeURpxgdHHhK5YWhZ1XpY3HfEskBX5EerzmaqFvvjXWYYn9k8t3jaKBK",
  "key31": "2ZwnvzyzRdsa2doxZWZTksPs5T8wDgAD5nnNApLvMuEkMhQqbKWCNdYs1DzTvJyLzdCmqTs5Pn3FYrxrxHDUN5HZ",
  "key32": "5WQpQzpPjnVTP2sutX6EdqkJg84bWuMRouERk7wm9YsdrcVbWjsDJgsEYN6hf3snT4fD7NJAwnabQo3ymW1VXsSf",
  "key33": "2toziAmZ5Wdtp7Ze5kbyJLYHQyHQg6nu191jNzjaUYAmK9kFWhGgEVr3ygnzLBM8vExy4LCsVmaT7qsWUgLVvtPv",
  "key34": "5swvAq9bd7cR6LSF28inoCG2zsebY4VTasFtmLqvkTf8T1LnvxoKrqMTQXedhDQAFjHUAEdTrEXa6gUMfmcyUuGL",
  "key35": "9TNA1bRa4s6kgHkEKd9AbCQF4f6M2W3Zr9NymFJQ7tD4F3w53xB1213EiYJ3jYdPCu2m6tjbDbw2uJTrE3QF8Ns",
  "key36": "3bLxHrkYkninsPGu9dY7M8gFHZZLRqMSXBbhSSUeSXYJVkJxzvf3WjSSGUJJVcftXwLR4MUgTRAM7r8yxtn1Ew7f",
  "key37": "47cunacXCzUMVyL9bU3pVsLJfXVYyovMJUnmFaNSshraQ8RRjLt4918Y2gtKNjKvQcmiTYpVgp7d9zbqch5RnDyC",
  "key38": "2hx7N5T5LAHpQKAy6Mdg7AzTohz9S8VRVHaz8cs7EwA1xF4eSjednAxWZfauGMKd2ibrtv8PPq7REcDME4abWx7v",
  "key39": "3jYwLFo8vAxSVXVFHBVAW5GA83hrwnxhN52NPN9WV5GccPHsZH25HE85Ko41C7ua7JCriRXyi2QMQypwjhSWzon2",
  "key40": "rRQW1ybPG4ibbFyV3jyDdtpjQCpAQGSJLHNTjbYR4U7iTMDurARyWk2eEsKmaaySrQmbTeRGt2PQn7NkHXeWkTR",
  "key41": "5g6cXBnXNpMnKecpYAn1U9gpZWJCcqtjyGCXfCQ8uXVbVWT5QYQqDpUDhBzRydipPmF95rbBt86gEvxeGDgH6jfC"
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
