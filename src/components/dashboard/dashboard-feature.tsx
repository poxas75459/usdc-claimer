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
    "21eXp3rb4i6MQhoZeQWbEzHw85wEtUUF9L4hTY1XmGVZ8vvbmFm6sc57Kc127T6h5E9VbdLzMbVpxrra2zBXKYgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zEsHQdqTUWqL6LFjSwdBnxx13xpii1oE4L6PFP2qqZhQow7FLVXbDTVeAjA92BP5djJN5aX1GnaULEzyMu3kYUA",
  "key1": "4sUL3ocL9P4Q4VZ9z8EGxACwADvAE5kupqTZ1rp5m6b5DrcgtyCBzKgLFAfUVqkADsyvt9WGD6DAZRisxrz3e2ss",
  "key2": "3U3cxBJLFVtjx6uUuoHtrUeGvw7FER1xWwnVHpEoCfeK3RprB2ZYhYjCJ4o4Bzt3n3489ARZaAfRzD2gQUo5NExj",
  "key3": "3RwhqYNUapVc61CvEKxGpSrShPPKvc5HRgbjnF9GH5nKzmBKqeutgVDdqaaamCYr5X48PmdJxiDP9nqqFuczQucd",
  "key4": "49sCyYLbDqLe2M6oobD6mg4vHstCcNGKivQJ98uCLtAx6SKeBk6zoCkxCqnYgjg8cwXkTS8oGBjo3F5hSrjix23z",
  "key5": "u922ueZxwbsEwPQKQkpbEvweXfbPS45hhFpvu59AB6DeGM5s4qPoW35ojp444hUQ1Ebds5PYo99xwp5V84xDMyY",
  "key6": "4PMffyDnjif2rMRZtLTSdYbqM6e45rUTUe8yFRWk7DJwPmvSMTij4VzPboDzEzBhSNzH9GwknApsxwtfo8fKQDZU",
  "key7": "MfEktWFqDTowfBnMmRB9RXtnArydGVyWY88eZLgJgdN4weM51G4d5ToNPF4TxAwoyqDwM7tMDn5AvNa1u213Z84",
  "key8": "udFtm87trgguvV93ypc57oksYaSGuF8ZThJcsjb5HVu3gnHGAJ48fKebxaJNmpgeTnt4MhedtwYQgwaYPgChpUb",
  "key9": "2nMy21atAHir8AaRY2rYxkhpUvvsFLyxfxT36vAFUnco2uQCatF85emMP83TBzm4uAAVKaybUb59d5yMKc95SZNb",
  "key10": "4aAAEYFkru5oX5eRfXWmN8wpLSgPvnEihUEFqab5Sgyqjs9M2JfN8sb4ykR1aoBnA7GSxzghRKACRRXqqQr2eCW9",
  "key11": "5VN3z6FKYS41YCZ2hNv35aZE3Qk8943XhV3tY7Z7F4UdD6rLKR4LcEtbcHuAZW2jQwbNtvZqtZUKSQ6Z3dcP9HUS",
  "key12": "4wK2Ti122sycZJxnDqzvwecyrim65VVopXbWMFSYYek883U6kBSTh8AdZq6vHTUd1Zp19vvgYtJkRVnLZSLtVJ6q",
  "key13": "V1yJXczt6Uc2qeoqZTqz7RcYquqYkLpxGshDLdq2WHrEm8HBT5L6pJSCFdNyEkvwDbvC87mtYxorac84edAqSqU",
  "key14": "52NVBbktq6s3R1NeXSynDyQaPtTky5NsgcpXkrTqpKCu6PmcD236scU61EBzqFtntnB9gfGU2JxFK1dEYXABkctv",
  "key15": "iBJRGE2Ehr2en5zzCnVquFUewriLTcq75eJ2mU5YEuM3tcp2UH9VNrEj8LEHw1GPDKX6zuAGH53VVzHuGisfLsf",
  "key16": "2mSCxtAmZphsoy9g5jdTcmQzWDruQ6R6G18KZ7vj1eauk8MGCu5GsEuEajKWfsg5FmpuhJKXJ5FwxWDMtfYjpTYZ",
  "key17": "52foGu4kne3m7tZ74fiLpPndkFR9dac5RTg9T3eWofp7UR3oLpssUvRf8vvezThgksu7scESFq5bBKJoouhQDmgj",
  "key18": "4kAvF71JzpZQk3DrD7U5BGr8KzbTuiNZpzjvigA7rYDaDcSFmjVDtnH3ZBYqpCk8HfWFSc4Qm4adGpezZ6scBqXB",
  "key19": "3Bvhprd4FbCyWsG5a2QktMyWEW2iMrgH8AsGDcJUSHzMBYPdA685pM7o48BhEysVHoNSkZbPPNWXCazFHDmrLEJ",
  "key20": "42oaTBjhmegxZPMQydjrmm6zdk4gaHWAGgPbvYZ1vEFYyi3dVHViziBzpdA6nGqcQNBJP4LykuyZmbk1j24Tsa1H",
  "key21": "2iJ94hxRDt2dEATtLYoC6zJPDg1ins3DR7QCngjK8RVKQvvf2F2DhSJX44F1Sz14RZLNXR5FtpGSwjpjQKRHuDct",
  "key22": "bpgxV1jKvgAqbG217vPj2nwrFgFfWi3fgJXHDZ3UgowsDuZspjhn2T36NNjkexzHzn3zSdkXrnKwpfC4G6ic1PL",
  "key23": "Jd2o7HKrW2BZKiacNgzitaHukePDjFJR8D3LwwjRAi19dwsrZGAPndNDSpmzCAEn54337GYMwsnqw3rA7Q1GHRP",
  "key24": "2Bct2mdYYWD6atJuJdEZ2Wxves2E2bEkFJUkY93AvATSZaShUFu93AYxjSqSmHR8hPNyGC6QcJmgkPuEGUkCsfkr",
  "key25": "3LqpvJ717Ya1sTddyCGjEAH1vbr7XaRs5T2Jo41Yj9TctpFTwrhLFwhYBvD7HjPfZuGnUQgY4a9tjkxtTYJ1FpjJ",
  "key26": "2XCCgjNzpKBqYs42UTUztzqVjhkeExey6zvwTBWSzKd3Bx67M7TDgNSZr9DTG6wzQaDf7ZiFyYTRM4eb4NJB1JUj",
  "key27": "3iNARxNayHMK2cSZU3TB4VRwHJqsgA3Kx519cgvsMajqN3TwLbABSmQQGqsEwAVNYPEAkgSpcxDZGAXx8FVZLxry",
  "key28": "2Qy42YfHvmFZ5bu81xD6bx8naR9GfhfccewsBrANK6z9ZGfH7ewSgDRzifJGti3JvgthKS2FXtgHzQzdFVmKcd2N",
  "key29": "66wq6fz41pfxzz5ZXMiECLmnNH32MFG1GQGCiEuXacrBM8W2kisLoGvRRWBcxZFg47zg87kVPA4UZSautShQ7KKB",
  "key30": "5Bm5Mkzcx1FSC8xP5F6AsbiGagshyswVFHEmTDGufLUDhENmre288auAEVf9ym59pvDt3cYd3XsmTopQKFKEgwgF",
  "key31": "Dy2B5mXYMp6fRQUU9b7WCRuufPZu9HsevtuRrCEErsaU2nxHeWdus2W7MMPV9vZXrk6pDnSZCV5cJ3sXEP2BFtb",
  "key32": "3agy1VZqfb7R2tXteKQj3kmcqkgnFVQAfQvFTattDFsLhpsR68XCyu3Putf5oztbRvCgRnoa6TYV5m2kCVmJUGtK",
  "key33": "4Fvs5tBtvXRoGnxRG3hhfLb6rsLMWmayeCfiz5mHtgv8yXVuHmGeRKkvX4pwfwLepLRzY4LmScJEnEXogiZeYr7w",
  "key34": "4592PF9kYxNQY8DbGcWEYh7LQ1v1bfaRTFytgqvKzPXrdWok8sJ7HT9FkZRjDgM8Ymk7eoPq3XiwsbJ9UzAR3rFk",
  "key35": "54v3bPXj7mL5k5wN23Kf4um8dC3WgFFR3Yc671wpUVGCWvs1ixKKnJRMaEAEyBAhTihCpx8EQTtupBTreWk9Sm8b",
  "key36": "hrPXx8U7brqMPHrY2HnZc7YdzTAQ3LRyB6eHN7Q1ZyHVwYRJ75qm34Zsfc7u9WRVpnaYCRZ5BcSZo6iFdKDweNc",
  "key37": "3P5m7iSvnkR1Yo4FLsUJ6owcdNr4eNQTeT9HHPt377baYgutPzQPyH3WXGdCcJrTGRYwyqC8Uhj3NSeLN6PZW4WA",
  "key38": "2pibBY6Lri83TNWweD1KVjthXjsbYka2dkRFH7gKN2VnPVwMdt7Jz4XhsdKtpZydSNJ7CTGTBgnA6LsR5Vr1rSrz",
  "key39": "3N7rn7yDGdnBLfiXSBgSfStRTZ3qANpkTbnpjdVQFUKqHmMno4VroJV4sxuMNzSg354QSU2qREZuWEJqwKqUY9Ru",
  "key40": "2nm6Hu6bk8wKrfz6BfDSs48XHKMBv8VudbtQxoM1F5647X9XV2W5VopiXNJLWLRDeojSsxi9kUjvqxcfgAK9KEEC",
  "key41": "5yxKaJsBExhWJ95K3Y3ZW1baxysq2NZtETFudvoW8gmhznuDS5nD7xAnu5rXJ8JiH3L1J3DqXrXvELCSCf1krqzv"
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
