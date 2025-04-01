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
    "35qvZsh2NEPiBGwizi3Vs2eYXjvEMbPgr8G65F3KaDXjipdXfxiCbR7EZZqH5UY9bVc6RrFUoRXwrMo1qPNSVkRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vyQcCRWySbk5Y1iTiwWbRXdz6oSZqvboTa5JPApSJiNUQjpBAGtpW5dwgC62V4yGztCY3uYaHib9kYubmAu7Hgz",
  "key1": "5LJJ6Kaa8QgKY54HorMXjL1t4QMY8U6xze6P3kQKqRNoTKtHUBPP582PixDVRBYv4MhdcKreyaUKd3e9PFiXJHY",
  "key2": "4Waw4K9gsmtzYuMm3Ap4zLD3oaEKFgmgHRKk6VBd2zLbyL91DGYPMgKMcMXsMHJ92GSh8MpLA5vepN4jGFbg9iTb",
  "key3": "3AEBnSZX67LYU2pM5zMdaL6kNCYtsUhW6xTaQCfpCYYZ4m2KKU2cRbYw3BQGCyiqDMtn2oxQaENqwZUuhipzhMGE",
  "key4": "61NWvvmihSJAPdXCAn1XJ7L6eKDNgZvAwutmpSDL6wmCNzHcWbaMJDNuWEdZjBuNsjHbbgqWBPeeDeMktGtunQ3k",
  "key5": "5rVfDE5PyMJ1CKhzUeeAGWoafq6j3Zf2dPzmhNQmYpUq71aAchwwzCn1zcANgpXzKVGSUcBt4tjKx4kJxiqgWkua",
  "key6": "GuTPDq4hYyBDUrnm9zHvyDowfueRktGRqNrGbu5Ywa3yFBtWXLx5Xa7oVd637WHNoMaCxadfCXavQzUyYcYskRD",
  "key7": "5WUt8yNWJ5uJVfXwfQ6w8dXYt3vLy9Q4bZ4vnVR1VZLVsRKTHkBtbAY44VToeZy5XbXm1NEKeLUirqruuXEfhiMT",
  "key8": "3RjfuC4uUnj9NnEhM2siaKDaHDzsY4ftWHWLmCsdnV2y8fHAUVu75Aw53Nj1gPWpNqW29p6QVSwCUqsCucqwyLsK",
  "key9": "4vXPGdwydWUDkk4kw3thfUpoyCQoBNDmHiUrHSYcgUTsXtcVjEoW59dfav6o7PH3SoBj95hYN6bJLHk3axg3Lr8M",
  "key10": "MvqgijdAsQ5nNFtN8wdYxDgNuVAPvXPU4tNPa8wUcHQztKfaqbDGHHwz7UN2RQWo7qh1VCah4cRG3xDhszp81PF",
  "key11": "5vsVHZKJSuB7dPwDUgC5Wxjxk6xczpSt8zVEdqd51cNpXuab86qNTeTdyDkFKBJcg4AxmgexwxC8LBTSNuXW4YNa",
  "key12": "5QmEKiz24vXZVBk15kn4ivk18WfT8LUrjJpr1wFdP6EPAXsf1rAan8YM5tWkxZCgXv4vmy1qLXKCXEjcaJ5vYnbp",
  "key13": "37UxYCxYts7Zg4PHRJccinUcxxqLbXMm4iorGJBQoX5jnf1tEaV9AdLpKbXHfu5ceR5B8LcfGKx2ftkti8D3BrF",
  "key14": "4n3H6jXxcRgj78NzdDrToMoMNm2zcKEeK6X9vweqh5uPfmSTDgL8cjB9CnYaTYn14XeTxzGnW8cr9fkZKnhenZrz",
  "key15": "3h7SWi3SWoaaw3DMNcpXkWP8LVm8tPJJRYuXaXbbZd6tnkyzT9YbwPru7xiiir1sFMtECxmmiprHa587Epr3D22s",
  "key16": "RF4UppWc9nqSNoh1y8XgTX1Fvu98XERPXmAyq6zuAVHWaATyjcBgEMqJsgrRZJomoykFK9PFJk64Ve86sU9GVGc",
  "key17": "5oubZKJtJ8SXvAuzPEoQAj9AXigfcarWxaJD8UUWLQkrPRLrUMqTupWB45RPwjAMo5rM8qbkatT6sNJPWwmvWSVP",
  "key18": "2WQuomhqmxADtVjLt1LMM1K5QZcxuNGDu3kCcuYzb9R3thMXjHzicoo7oHqRLxh4buksgrn2udUCvJS4vKjoUunY",
  "key19": "48HcoJMLvZd9RBTcersQsL3bf8rD8Zrf7ishPF33vBNCraeaGHiduz5LaZ2cuBpWg1Xr4MLCvBzz1objMDAjjVrY",
  "key20": "2RtXVvQRsrDxqnb9mzFARwbtXXsrCgK15FKYh2pxNv7KuSp82shUWEmVVQNCgTVhqacgrbiEFSYYA8Hs3AqgL9BV",
  "key21": "3FndQJ5DkPdyXtBPVLe3u1gSutH1awTjF1oXTfDoNxbBcEHMnqJxosg7FDijJs2eAWuXnxSKjjdqMXELDLk3Dmut",
  "key22": "3z8L31nMh9pRc2YWHkgb4ihLqx6Q194ggsoWGP4kdGYecuBxycmKVCryFAHVkCgTUQYmEbPAmzQCdVs5jAMsRz6",
  "key23": "akFHSaX45B7szygYdSAXntMjXLN9RHWLZXhAb8caHih2nk7xzenfdBg1LUhWNQhY9mmt6stLhouxGtcZS3a4Gyg",
  "key24": "459ZAfFeUUtT41FRZrUuT81m6LapLxZnj2vTPGXYkQvHToaaWzGv9aapgFA5ZEwRmrAv8PhLvDgKvb9Fp3x43kCH",
  "key25": "AuvxnNq3L1Ut4hbCgXQSyABukmeBKrMjGfbAMCbmL4fpZ1HBhMFEtYKnS2w7skNSDJZ6GH1YhxW8MA2vPVV39bS",
  "key26": "3SzFxoffhFcAkZSiZdSvayxojZj9xH4QkfY7biMBP7RQYQCXsCj8E189pcwy5Ha7Qtxw1CmDYCmrXuk11Ej3EKKj"
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
