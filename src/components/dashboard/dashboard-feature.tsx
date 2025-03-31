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
    "2gvTCFGDKKHBkhW4zWJ9StfL9u5fzqMYEDEZ6NAF1YHCSb4EDrs1J8ZaDBsMgZ44e3io1V3eMym8Cbn5Bd7mQsEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzvVyGEUwsN1dBEwUTefqJ7ogGngYBLDrn7vZtr7AKMz1ABeb8AfL1VXttDXtP5wn8cUqDtGnvfEqKWeKRzqnz3",
  "key1": "5a843vK4oqoxiE9jsxSoqnCnb6RqLEYAGLurXeWySCJLtumwVR8Ry9J5qZ4gCFrFtfYHLouDjFeKxMTEtsva8QxF",
  "key2": "2kZDsEU3C3LvXEfS7WMhFyRUgsSgAuD7ZPhfmnMqNQLpJFkLjjs1PmJ7QFvHD3wXziReCnxtCGAieW7eVoUbN3gF",
  "key3": "4G11ta8gwgkCfWDpu8q8t18QCLvQT4KFejoE9HaCRFYcUhkWFNFM58w4NZ53ZcPALMHZAb234GNHz6JHHMUCE7Bx",
  "key4": "5aEk23hZi8FK6t7tUqV7mDpFVsBTW6QBBaCs5rSZAXN7JPTgYw2H7SJ1ZzcY7reEUkiegfgzgDgWLx8Q6nhSScqT",
  "key5": "4Q3NWdMYMP9UadnL3pAz5EozLxnBPnHLLP5cBynYQtdUSgF5e4M7ueiEnF9sCmNhDNH8pj9b76pi1Srmvak5L1Z6",
  "key6": "3Mnzu9NbYoDML1GxHoBAebfBL9aX7cBK2y9e4aoKSvMjzzZq2QhV2YC4K565yrtMDZzYvdRpYAKSTbKXKKN29dbX",
  "key7": "Jjq666M6GrHFzcBx3zpvpS1CYEiFXjvv1HEWPhMqAF3v9QJ363m1PFxLcsmbDRJhaa2jVLfiQ9QNjG1UMxq6a3n",
  "key8": "4c8sqXcJtU8Q9d6VKWKG7fr15aecWzXuWTdX6po3JHBzKisPf7tftPjumSjkXAehksJJyMRRL4zFLdvgt9RWjHih",
  "key9": "4pK42nnGszRcPXFPA15BMnpyizy4ytJXt5JD7wA7qWhDiqBBfWpJfR99ZHheAKdQcD1W6v9apQAKsXsWjiTKMxRz",
  "key10": "3LdSrypEjCXSN9N9pFtfJFh65bDFnkynyZTeDZavWxL8gXXebe9wGTjFS8fn1roX5hPW2RKJ6T1o3r3e3mSCpXaS",
  "key11": "5WFqBXb5foaWMkrBLWwYUZ2x3ynVjSpBcsuhYjwYHdyQW5DLU3SUmCaxGxWndk5n7tvaTMX95FgPYkQ6oXEFQnF3",
  "key12": "65wAy59E1k6LPTAkddzFcarDv1YmFsVVJBrHancvcEsjEhSe9Z6XVPCqMJAvGr7gugpw4GaZtcymFbd9KKN75g7M",
  "key13": "5zYuifGj5dyZgfZbfa7zWPtTdKBPaLNjYkRzBqJm6q2NH7tV7RUt8hwgSmVeu3d2WVvXrFxd8MzX2trmZpxeNzhQ",
  "key14": "5Xx9gb8KuhB3NMCJxVXCVxuPkz4k2thgkmqYBWVyv9GCoHcrs85aUNxPa8SzJA1X3jeXhApnSepbRSCtfB76Bp9v",
  "key15": "3p4xP5WbiWxvDfKeJ6jSCqiSkcT4pXzqdL6efpehXMkMdJx9Q9bDUkCpDFrDtCxcsP51D4HTXSfHchQ23GzTcdkK",
  "key16": "4QBojs4npX6QkgDJhhBxWKmSCtPKmUh5RfUAB4B4je39cPVHusMkzj9eR3aPfAj8evfFFptgq7JU4VCSwEJVxBSi",
  "key17": "57WqrCvuBYsmHMr9PJfDG7Ff8o9wm2A3f1E7i2ngXJ2gqFWpK5d2SQwdVcRqaQABphkGSjgZx19JagCmPspM55R4",
  "key18": "34yRt3X3Razvvh8fAakYrozgKXzjXyRXcqcm1S958tUfucXqGqXKTiM165gWSh1ex8mj7epBzuBc8YgE2mFxihY2",
  "key19": "4bWebut5BMLdwFuRjBkmZaus4wAXCUM9P71bEsZcTp4ktjWKTjuGYcfaPMX2dCGHxUKKFMWXPGPZ5VJ5rCXGxfen",
  "key20": "epbjYBvLo2Rmw3KPLFzBUm2iPRkdzahLVja84FQSbodUJiwarnyWHGfhtWL8zb1Yi6GUqYRq8gbrMsDA2RpHehP",
  "key21": "3i7mdLvVVXCuxYmETBkLaXVDLtP4ymBVumTrfwJJmVuFvLNvuvmm6jn5Uy2szXbT5qnzM8sF2nMFsZR8nMKN9cYQ",
  "key22": "5MayESttfH6acQLoPbfbKaoDNWMwjr6G68cGaxypyX3ovBKnhqXNpEx77UfJTVMJKxJ9GRMEJHBGtr3Lkemf94PD",
  "key23": "2rXPQKDNjRftcFFnBWhjGDw59c2NnwMF32EULQcShnBn2HibDkzphp7hjQrGRTCRLEKhZYPbmRLUaNU5gQrsNLF9",
  "key24": "4CKVRHrSs1NR72L3ciNVHBC3bX7WTRJtLkrkJZWaG3nG2SBPcitxTsaTzmanqikBqnDNRJBx2vobt1Pu5Wpy6YHd",
  "key25": "2dokyrMfpHTMvUwpHF79qQH1Y9tdN8zQphX8yfzNTyE1AQpfBfnWYjZgjdeycvZKFph7ToVytYHx3zxi4yjXtnRm",
  "key26": "23uFvHoch8QWYCsxAGHHzTkaP1NjjnMsWuu3cuTbTjFmAHonoHEZaGcJYbw8A4xyiiekRUo7qu3KeFGtqB7fQxNG",
  "key27": "4Khvxd27xH2bhk6yWuKkB16GveZ7ESbAGnrDK9LxVgtGKeBpSHCtdbNzXvtBqW4PUNxZS2iT4XaWkvt55H4Gvpu2",
  "key28": "4fkXnb7uSKHqrkq6oyhyX264QKAcfowYrbXExDVKSZRWeMEmBjaee525deT9Pzidex8UdZ8SHX6y4uQCkFgDqCG3",
  "key29": "23A8d9VSXmvqaKcZ2vNcaAekZuTAQ8XUC6H2Qhq7yg3CAP2fbX29Hk7m9iy9kv3GphPeP5zhHhSyHH579w33vL2j",
  "key30": "566WzLTz5WmGnYpWmefBwJbaeQqSo9g7zxDctnEgavWSGcmuYofxuVdcXW77ugTAUpgnxmczPwqLiMznzbZsCRM9"
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
