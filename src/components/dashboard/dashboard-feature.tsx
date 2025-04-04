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
    "hAdMxcGL27sZGBunTHoDBZhshvGX74Row1eb5x6VjHszECi4zGcpdavtf9oPkrpBw2c9qQ7pfcUq7QD9Lm6Tq3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iscriBw98gLePtRxjD9knnAiruTuBV4roR8eexSKcGCwzubF5Xr7cV14odkau1jSC8hrC7e5xJR5WgCnPfdHyYD",
  "key1": "3jEG1FCAEZrnStcpRBBvDcgdmsuB2h97e9prn3DasNKNauch8SzJgX8BNJpadzYsTMMiMks2BhEpidtkUEXVq91c",
  "key2": "3PUMouCUiEvCuPGUtxqJSBuTE55tQfHZzcMGWbh2zM4eq1V9V9nSTxjSzE2g32aTjmgvgTaLRw4d1BoqRML1EsZS",
  "key3": "49xnwEdMTp2tW9ZxTVDQhhdyJkyokzLpoJRtRDtZGcx6UVuJDAjYt6w3mXdoDueqYSeqKy8SCzSFkFwDmXXEfHHU",
  "key4": "3HvmS9nR4vnQNTAATRoF4WHPvHjVmrTn3BKmAnA9gphbKFNegk65zXtrftwzcBwdMdGa58NVom1vCvTTVRcqkVC7",
  "key5": "3fhPReTdoUUjyK32HwaYu5YwZ4Ny19bye3n7D3bvq8YaAxRTdf9ZEkT94582npdkEfMogLAdZhzrch8hCoHbQBLT",
  "key6": "2uPseCywrhkeXymy1ukT2kpbwbbwL6YXhKXFk9FDX9Kii8WHFvM7M6euQj7rLEpB8PPR8QMPVAu9c5u9UtFA3qc3",
  "key7": "5efAUpGnf22yz5s7nxYqaho41eiMx2QiyAAojC35dCD8vQuKFLn8zHodSQLTxM88nZK9PJvYDiD5VU88PEzNCJJa",
  "key8": "4SsXtPB4RFX6EeupiTQYiiS2vb4ifnmFoNUCEvBhDsb2n1Dgz12s6EF6XrxyKNfVcTtXEtUgCsNhxo6PYpmXpmoC",
  "key9": "5R6zPXf4vr3AH2rsxywHdRb9ZsKXaZK4hcNB7XjvJLeds8ypvoNJa6pcVXaGwcKnkBWHG1W418uyEYPThAWteDSZ",
  "key10": "4cuvPH4iBSps27bzJyGwTZRs4qjL99rX7tNUz4q8iyydWC6x5ZWatdx85hvyzrFZFwd6cbztvvdY2tDkntGkuKER",
  "key11": "52haDjMGuZQA8DKGjDh5Rmo8TtwAAAy5jzaPT7j9pFD2Qyv4fePnPkcxoCBoUfCKZkoXFvC8o1Nuuk1M76WaEKwb",
  "key12": "5t97jgzzj3jbVRPR7uTwjBasP9pMmGXQ987w3afGcJ8poKpHPrkSpXngwHktpiTUAPuXF9hxDjuv7HzkRnkP5s2a",
  "key13": "2NkJqvazbWcXZMG8s9Bs2LtFe22sKLQ86ac9Dws3FZcLKqwp8hiFMDD9C55Kkq9GBm3h6Q9JfM5Asw9DxgASkCFd",
  "key14": "3ug8RoBu158kJCnzgr7HhXRNqfCJWdynTqF7RvqQBnnAEDf753NfDt8bH1M7aCgyJ5nAfFeknNUwLKXrWhqawBYC",
  "key15": "2VPcGKcASqnMbRdKZbXQGZqeDiVTGdAHuM2QzN9FGWaZubwqjAd1xJNGnQAjw7ueP6Cn8Yh9vCCD46cyzeD5m9Lo",
  "key16": "2feNjq7tXAa1RSCebsFw6x1p1baAg8pxZgt9hrW5sfE1R9nJh4LGY9DBLzLs1RKsfs1Dk4UZzvLwnZnMpu1XU1Pw",
  "key17": "4VRxv6oiXQ282aPs8N35MbeERLua1Ghm9YLGbb7YkEuEcH8wjK7op1rU65Ntu6Hvfq2mbh3uY2ouYuNiTYmis4jV",
  "key18": "2HpKuipaGR9tNrzzS4ZPMpE8GFMXmxN2di2J11QkMFoGcDt6Kw5AVMnam5uvWJxaTtG8KbkYZB6DQyX8qoyR991H",
  "key19": "LcKVGbLaHoKmP3aLgPvsfq5GkxgXGfEyVFqwqeks3Vy7iT4nh4SeV57xijAvdYzo3XYDqR7UC5x6nCxiGmEmfM2",
  "key20": "5ZYYvZ77AtqaTghevagB3XmDjPbMEdVBpW5LWmbVLNiR7BL2c4v5kebn6Uo9Zda1oT1CXxnF74rDjD8nLiaYzPUm",
  "key21": "5MR8PB71z9MWwKXNRirTFXbnHHChMXkRWzSV7wTyDwTxsUtxP5yAzfLR8fZhpQbBjnAcQNgJU4fQ4fAj8PU1Cv8F",
  "key22": "5xWgXNeFSY84eVAMFjUw3pb4uuAHp23WoDCKhjZCu7GJRomtRtSVa6W8dPapdsMLsVe1SaVnDgzsoCeBKNjG7Mbk",
  "key23": "AMARHygSDWH2hdN97m9BoE5fGxVzMFZhwzbFwxP57wZYH8tj9SFCv3y7foof1gmim8GpdzEaBmG87ZnzLW6fG9R",
  "key24": "4NzfB3BMp3vHPEMHNnKPSfCFPT96FPigtGpCuboULAo4dUFK8sjgMpKedJNFdPXzJTsiVjK7GnFJiDJCpZRf21kT",
  "key25": "3eJ5eEvKurrCHyYCd7WxyExrpUokS2w6HY7zc3SD43QYBHg2TkFCx3hC6ZKWF9sEpRJ8ypdmksJ7bGCuCeChbMdg",
  "key26": "sgG8FBcqB9MKhGMwkmyrVyoZFHapQa9GGGKvAaGNn7sYTQLLWgct2HVCCRMQxLkcbXqUYVQ1Dm8iH8eUqYyeBpB",
  "key27": "3XmNZJAs3UKHCPNJ1ibX86NZWU6kyr6ZWTvrYu7FxhWDq8nQj63eSgmzAnZpnRSUC8VZcoS8BGj7b6FTar8ukRLF",
  "key28": "2kK64FkZjcnn8Q9kxufh5YnV2195LzRBAaz1pindqtRysgyNDpqDzztj1cMBPhRxtfCWHMfwBmK2iZNqzzSk68vU",
  "key29": "3JqbBm3MZe7aAiQqnP9qCSYZGi1Jx6jLn2Ju2D3Dt5BvUPXmEU3jSLujCrSRVhQfRaXuJQBtQsKfyf1dcsZs5Ak8",
  "key30": "4fN4DT5UxJ4BMA3g5Md1nsnyswe7K8EKqTugetNHEPJXWHB99823gSfACEvns6XNRhcNV8f4MkZB32aZbynBHtBq",
  "key31": "4psbGpVtwkxq7HYZxjEFvjVnUnD9eq7ppDMKMv4R1UsEMDU8UhXiRsbyoJSCD3FfZx5K1k6GuopadTtsNfZyVYn",
  "key32": "4UUJpVhv1hSXJsWwxehQr9Z3WmFGhcgnhUJ1iTEXoKKndZaQFDDqQZsqHeYRyzjZCrxk5pbUrNXVE7RFx6Mp2Q8a",
  "key33": "2ApQzvMakfvEehwWEHC86m8ZMuvHFTwefg6WR4fbi77xPzGSoizdMVxeF81QWSLhTnnYuRjUm83kYQf9TuebVCot",
  "key34": "34ApLDmE28L5TgeE2aTicdQge8Ra1Th44G42hGCwqT6bWamuiapfzRTSmLVHNnbFnKKqU5eqSq1GEWyi67hFAAiQ",
  "key35": "4t7gM4uPmRCpp5x7rBUK3nXteFos8tZ594RsGr3uYhVDErokQGTv6VXQqZM2Traqv8atXPP7SXWnFw8QP6nwUdrW",
  "key36": "2Hg3dARBsUWiMkCGV3jrpWaL1zxBS83kvpWNcF1v5aZ5sLikbKRpSKSGu4rcCrz82CkgCRBJCESdqT3AU2yDN77p",
  "key37": "4XdjzJfZPF1zutTuSHSXn453pGS7Qun7HLL7AiKbwvf82159GCxnGC3APXpohgd7nehLA22HKaoy4buVRysomioQ",
  "key38": "4iUNgHAXL6LnWMD7zbnnBfb6CtYpZdqPvHST8AdKiRexaymhAjDVxsNxfEBZ1CohUQB4Top8iYUbtZNDQLPHJXNn",
  "key39": "5kKzyeVmbMqEywJA1PDntz9i8sLSodTD4oCEeG7mb4PFX9jxFkFBVuVS3iwDUEcphseumGqWmF171ZfdcJ5iGryc",
  "key40": "3AE6DqiZTtzNUCFvtgGvuUMyMxh728mE1LNBKB5zXFQLjEamAezXqskUpNxXvB6Pzag2ciBsq7Q1JLtC6jffRUbc",
  "key41": "2LihA543k42FpTxfWHxvuT7aj6sM9qTNvSDfi2vKLUh9NXyZCHDqQf3e5f2FLXYN8uh4UxYoDxoMaAnDvsCtWZmt",
  "key42": "4ifuuaTgwQTvo4v7qScZBXM6A4EDWMLkVQnRjZMqvpTQse6roFE6W4p8EZFwz9odJ61hzV73uY7FBb5wzLE7pd7L"
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
