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
    "DKbozTfzNEWV5kdTvqvgpy9ycUVsUMyzqzzup7vAhH3QTLavmdWCN7ZYYMzKdd56uz7HAaUTkagtx6ZJmQWSiWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPGeUMT3fmbsAq6fZk86DcQGhsHV9FiRyTL5GsQTf4j5T515AyKn7Dck78SiMPXizt1Kci6FmNugxGKUCjBc1vk",
  "key1": "3Mv2g87dD1nSArzALt9Mw3VgnEXC2qr6nEnv6VajVo8KSjdGEvBHpgAA6KpBjjWoaZNW8MbXZ8V3XrniJxGRNcEF",
  "key2": "49QiSCxY6HAs4xiYEH3oEELActAKKnnFh3j6PyeqBuqi6HpVmxaKLVZEtuJRBkiPzkmWcXmhqMHpE5sDkZ5vvnPw",
  "key3": "2EvtBk2HrfGDHpp2P63NZuT9RP7JxSEY7rMXoCBPwTtuqtAK6ifYfgcrQxjgTKMZsQNbKPDBugZQu9euy9CUwzrp",
  "key4": "4V7MVDqoALUTusMWoHV9Eb16ax39SQE2m42ZVNCm9qfcjA42zVTCdmssqEvKLLS4RiTSKT86E5FVbVTd6Wrygvi8",
  "key5": "2vh7Fotb8mvoSKhJJc9A8U5zyod8AruGqQemjCK8YiRhBsEsNH5iYxgGVDxvt248Uo6WweVXu5LEYCMww8Nc87Wr",
  "key6": "2aU5PKatSybRec815jogPszwR8jA7trbRXBHocEqAMWig666Hihm9yCAu2N4pGSH3jXsxsLC2yGM9aCffncNgxdM",
  "key7": "33C6sp8eod5RkV7CqZGMcK6t4nJmhPpks1pk8KDZJBQfXDfduDkDhM8C3ZUEWEfXwzVptXcuX21kixoYY35kocSv",
  "key8": "2Re9nfrYssASm6QUb4oxHanSVqKz9scRBZa82mGpg8xJLfLudU8YjAvQJJLBgxBp9QZmsEA82yxt3hy8FMPDMESV",
  "key9": "3gxdKs2mAa7sEDDN6yfh8bHLGuNKMGtbPwMwr7iaK2qCrDx9BLvG3H4CkcBDFgDvWX1jYEcPLw1GQJxepyZchQ6N",
  "key10": "44uwHZqiwTvuG7qfRqq2wdkJQdcJNL58dXMwKB89zKPkSZxzBqCCj6JW6PSRiTJtJjbLBtWzToztJVZKnYQEvWRj",
  "key11": "4LQuD4ehkSLAD5c9HfYynMgeMxgSxJkvTPHckaAtdUn6uTwjHCJrtA8NwkSwfpBFeM2H1pVF9BZsVSbAHRJQmCrm",
  "key12": "62UQP4p7S9LCXvs8oSF9Ymyy1zy4H5nESQRA92CmNQvUb9Xzab6MBwsAVPXnUqeKHxMw4ahC47EQL6d4GySD92NB",
  "key13": "5eYh65sWDsTkyAk5hAfdeHLM4n98d9mViGCTsikFbLGak9b6AJP48EUwnnsC6v5PcwJqTaSyvEFraSuLje9sFUDz",
  "key14": "514bFKnpdMy8BK9KoBsqTu2jUz5uCBBUopKx1oALPt5j4Fmorkv7E9exA2DpNVErKP8UDeR9hSE6qvLz3sHdAqCv",
  "key15": "4ECqMGCBeh1AcyTqJ39gHdXH4zax81AiJJYzrngJ1JiCYa9Ev1rzUdUZttumyRumiNGBRNFwKsijYQ3r6ZJXRW9s",
  "key16": "526Y7VgdSdUHmnHoip4mQ28Pv3Ca2Co7LBBJvMwAVY2vi25giyXFYw1V5b2zPREokjMCNFjDtgceZzgkBmayWJJK",
  "key17": "JPEKh4xrAUzPfJ85F2uj6tvnTAdyUM7cDAziysQdeurxAvEEgc9ThTFGAyWT8YAzyu5CtFvqxcU75iPP5SCog4N",
  "key18": "35oSHsXt1F6CidSnVZKFg7JdbKPcf8JHYyzHZ641c9DUS5VgHZNoYBcCET6a3WbBkn5dAvrjHkQ5wwEvSsp1qiCF",
  "key19": "bKj5yJ19wuVLsez9A4SD2cy6EvQvtJVe8S4ivTEP29476uBHH6RxetpfU3CTvEZ8bMFHQmXA61XkigXFmeXnhd1",
  "key20": "2bDKazBDTW1YtHaqdddjxxp4i12HN9VY2nrDwjbFi75zdAENRenh7v86hLonaFQp1gtAvHtc4ktbo4Wsrpf5mR7s",
  "key21": "5s2scDpbkvindr81r7CS7bt1UHXysjmktmtpc1cu97q3f17ZCuRGB1EKP6zZzztCndYmEw1p6Ey2CUckBPR55tEQ",
  "key22": "3Lo962yeT77oM42k23JHyXawuhX8JQ7xh2Z5vvVSVFRMmoiyHbd6wC1FN5f4vbaz2sAZqQmC9WGRAtZ1Qq9SM1Wo",
  "key23": "4AvMnnKMeU3Sx4TBphHzt897de2krow9BPAxgKLfEHWoDzHSY1k5MwgYyTMdbWjW9Vi3NhsZeA5kKEvog1WhL1zx",
  "key24": "5GNmEG3JywfPhimFvjCUYQpGqA7j4nbn11urWbDdFAhuZNjDciyEKHs2wK7tcKM3RLK7HS4xGVjTJ1NBjb4Q8fSS",
  "key25": "3bZbcYppqpj9RvuHzTeV2tsRscX3YNwHn9DoWJ9oabz4Qmagr7d2uLDJEpE3mSJnzDpBa93PMNkT6rbvD56V43ti",
  "key26": "7UmSJY1ZviU3fsxKt3zYk4XjeUE1q117KDzTgBNBM9bBo87iY3rZYXMsL4Y2kzijHng1pLi2xM7c3htExvbhQRm",
  "key27": "bAwE9HU1zirxsSKxtD4iZiaSXaTkLoMuQJ2Hz71gbbXHM9kk177Pf5ZUffSqpbnjy1bFuv12JYJM4wjXpWZspji",
  "key28": "5nKi4ENE3TUHa6U8do52zWMUfmmUoLGXzLPE8ZqPLdGQxZUDvZmi8ra728vAFbhQE2wGb1f16pGF3cahcznP5S3r",
  "key29": "3E7vhV5nuKfLeGM32YFp2YAoq8EZ4NNLVy7Bv5y3tyWtEDBk64ocm6DCFZhHkP1w4Sx9whte8ukBTaxPqEMvi5CD",
  "key30": "4b4uDxPuz76jah6HnLeVka71guLcef8jushS8kkAorXK3uYKZAesvgZUSSY6QdBW4mdXqk4SUBbbtZqhynUZfq6Q",
  "key31": "2w91aMXbfC9y3AovpNyyAva1CZC4AeyxmFDr3hxTNCvFVcb6dnq2V6e2Fi5q4g78dNjcetCEvBgP8Vaeu5e52TSD",
  "key32": "2m5CqAKsoML4kZBVHVYPC2AQeVt5asKYBooefjaZZbKxv2ZcCu2RvsSJseAefWTLwRmG177oBzwW5APRqRLSAKKS",
  "key33": "2HSjKHoFpnVr3z22tqKXqArShdmNeCsuQtJT5ZatshCWpW8TnP4C8q977e6sJnZvoaN8hGAFC3C5ofNhmss9vyds",
  "key34": "4JeGUB9YEZk9xuFoA4uaFavgg19MFrWtvM9MqK2BYNDeDQFb6mCiH5z11mL6Bu8oWd7prGGcLzG9E7f4RNM7ibYN",
  "key35": "2zawAyctEVkH69gY4cfn2JqKzFwFysCMRaHhCHyq8stcnXACxUk5QSGNqK5Y8NViza3vAUjR7U9FkRbKhELDUmLu",
  "key36": "kE5UPibWEe3eXmZTwhC32VANTkr1wN8wNTb53fSk89cUoUbYzn7GtLjFkeLDHfwiWi7gSt3gBPaKt81NDUeGV9p",
  "key37": "5cxbRVctfaFcYGwzfy9qakAPRWL5VwLJRBvCK9BRGr2yW5ZRXGmus1c29RNx3E2e1CsPQRF6tM8qH3uW16Mi7Nw1",
  "key38": "22PUHc2GFsGmW3gh18yrK2cxgzFNRumYrTY8LGagdu3mztETvwMuT8GB4QwYRbZKQg6mHx6K9698rns5rfd9boST",
  "key39": "5Tf5ipG6mjbYH5ABT5EpBUV8nuXG43bFipdve4vCL7YRj9D1GEeZc45xANYHPPHDVxWWnFapNDA7CaheqV5pws5a",
  "key40": "3tnbe13S6QZN4o6tc5JvhcoonSARm5MaSxU8f3GGhzqqJpEMQL2ahU5WJ4RzNofwQMRGSzmmRF76FmgGNMH6oCv8",
  "key41": "jKwRnHcWU64Nx4JvmXNGSxFQeECEv1KsxigATGcPbTMumYvA4dFYVK7HxmMEr7xj74W9irSkJZaaDqNvtgY9RqG",
  "key42": "21MtiFmDJKB6NtVfgpp3tAjCirmJVGBfwKpUHaq9T5WquLVb8uWpf2AaV63982siNHR1euyZyPNRyPMRcUWqBHi5",
  "key43": "3CPjnVbtQ2X3V9LWYQKm5s9vBNy3MTDKZFHThvPzLZyZurcXDH4UcmaLnH3Nutxscpy1zoybNPuBT212ZX8BFXWP",
  "key44": "36BdAFpa4Xawx4TPZeCLru89wLXHDiptYJpzASs22fT2VULrP2TZLsGNnXkc9C2dcfzY143CBfLprWMUAYtz7exv"
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
