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
    "28SsGy5rDREMNw1auZqNwrFfAnNZhS9gzqrU4yvTXdzbrZBTG5eqgxFLsPVyRi32XzMqBSP3twPPsXnXbzLoeMXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iz1tCg2qLnMBaFyBBgrXXm7WU2JSQhWykiQzJJ73CFeVVoZKw6yuXLRXzUnMXdCVHX37DpiyAvaK9et6q8WjFis",
  "key1": "3mEDWnMpYXoCT46zFpUtkbn9VzqLftPK1K6XC44F2QKvQTidkYBEDiYbZMhYfNL9rCtkcsYLtxALAixAE841QfGN",
  "key2": "6gMnCjsDgyvUqZkRyE3V9UQ2K2T2LQocVkzYutEu2tm5V81HmKgzZE7LJ9fykrGxGtw4AfMav7MUt56X26ehPa5",
  "key3": "5nqY4e13Khkpe6T59joAUxtSNxmsziPz4YDVyZvXGHdEYEadjfjjQ6K4VtDM1o7EVeHeVFbAo2DPjvsGDmuiuE1M",
  "key4": "563s62heguzrX9929PAFhyxt2qJHT9ZsH4zdDrVFoZCfEwZwfapzwZvBwMLWDa3SUiZA5qmxXEfMVP6oPszZSSKZ",
  "key5": "4y4wBd3WAr5JpEiErJUfJv3nJaDTFPiVjD6bk9myzn4JWjejjf9QaaLzMMF8eW8wYqCButTMNhDSsVUtgoPrt6EC",
  "key6": "3bE8WKYjmTzBSLMe1yz4DtALgWMMpeRF9EESrVY3ftND6W7oopjJ9QLGDHgHrWzsSxs33PNN3HfbStvJwnsscktR",
  "key7": "5mWs9ki27L91aiiyPrtVdPu9RuJevTopYXUGJj6LR3jZX2GVFWYq7LPqcKq4MdxK2b8Fo8pC1tbBAM1C2AQb7SwZ",
  "key8": "3A4JMorMoDScMijDCKMMtangadmct9EqjkWzm7iB2KN3gVKhJqaXdTq8S8YQpMewSNfGNCSB5VHQ7pFW7StqVwLg",
  "key9": "5dFNPtQiLge7DFGA7MLf7qypBM3rbu49D1uhMo7vYSopVpsTp4wQLRooBzFsGdmWppwBA2J98WKZvrc25Cb7WJ7i",
  "key10": "G3nACj6LkvpYkHy4Nsfvda7JfJu9kJnvBLDxNLyb7cEFMfhosQRXqjKwfpyJ573mk8nejfjeVLkLFiKDUfEBJQh",
  "key11": "24THjbrPS6DxfBLnoC1cX1cuF1CbXrX9M8neFrdmUXeJRBkES76AN5JVAYPzBZEcHfKubWoHMuhRqw3e5dDESqYS",
  "key12": "2hhXtRoAziAio9CkF3krfGLYgXKvnhKWcqNDeDFWN7ehnN5J4oF4VofZiQnj58Joeye4unXbmzZybVfpbXXWvsqj",
  "key13": "2C1nN8YgPXLfRx379TENyrZVmvgZrX3oe4UM2uGaG3AvWeeu1Yeb9bTqHRgLecKXqcT3E1KVnGwGHvd5foUrZqmX",
  "key14": "4MA8kMiXEPZbRw2QfjsiZhBij1JeH2ARKbyXvm7UfWpx86ynFLboEFtsDju9EDVDxxZCZqiW1qdM3bZjmRU85nUV",
  "key15": "3K3kCbRq47YJLDxNtXCm8sukLwQTjcPFVWS3k4fzrhmLsXCDFKiqVzJpspcs49gWtVL3NkzWCZt6FHYEQ4VCMdsh",
  "key16": "5gEneDbEbn1sYwBbqsFaYQBvxVHVLkWGYYbpeiYP6ivvnFJFgZJLRzAppdRGAAmVbJQkiwfy5F9PaK8ZNGmDTaVq",
  "key17": "5LxHMp5kbB5mTAF1RbdxWsGYWEz9ssSouBWd8aNFexTXSGEcU3BeF7zWeGazKY9bHmQPSC9u6fPuVrpi283yyuv3",
  "key18": "oyybki1CWotGM1wH6BL5gWGnPBjS9GyZfFkYYWidqJPfvDA84EvQpyAK9G6RJHgPVEZUsnFJ8BXPMgRTCQs9Cv4",
  "key19": "5wp2Y1gLa3cJ3BvjD6yJBxtKh6DcxvGeDhSByenREth8iWTW1XQjBp5s3ZqJNEm6fyR76QbcEiHSgZ6YWhxXfRFQ",
  "key20": "2pbSBrK83K166TNDNGV9m7eDpeJAwAYCxMKbRAWKUXDHQoHKuEVRSvbnUCpuQiApNF5KimsgVz5HEG92wzqv6grm",
  "key21": "3fCvYaBbxzj6bN1i9vqi3pGsok6srKpV93VUZ3uHSsH8yPzBZXuSEpm5BkZBqFkFmJJRN69UECGKW7k686un8WSy",
  "key22": "4r6cG2aD9DqL3Mpz7mxbHjZYK1V2b5SwdGCQ9gR1xELJmTgyZGTKVZnvu9iR6WfhZRWTc1eTLREXgvfLPQobCrxw",
  "key23": "4bpeYvZ4PPe2XLtuphEUGMJmJELcyn9ErUDPRXYSjauGitAezfCdu2shWWGEmCaChv8EtkbjTTcDqFNkChtFbp5r",
  "key24": "4Gjev6cGfttt24RaRxkzwd1Dkk4UPuWRdWASFUUyzNLMNDs7qtcybuPfmuxkXo4ktf437hxgnjxWX7wCRbtarR24",
  "key25": "4XwFFPKG9q7xAT42nVLKjcahg2tFs9mPV2jDAiJ6Fvk2jrEKRF4ZCrwxq52iYR1fnqR8DoAwbgup4UsASzyadMtq",
  "key26": "5mZjwbNguar9BMvoyYieQfyx4cZfrq915XGJrPim8y1mpQYPFYsxLURUHVQt1x8teTBDLeoVTiGnpWYywPRNBeQB",
  "key27": "3n2reUUa7q2uTJ86uZ715kdLAT1gvKdgPcoa9iPBqQEv3J2RZV4NEAQSfzdyWfcEADuhG66pLy5YycUybH8Vc1Pj",
  "key28": "4p7iPhxUmrKJQmUiWUG1XbRUtU77ZJ1xAMzRgc1355Fu9UbYh5i6Pc6pECgpzUYa7CXvsKZvwRt6jak6o7HFzKKd",
  "key29": "5wik61i7rHX9refTEFHHn6ANWeg97JMwHkZMcvhaxRg8djAjeXwiHcRbxnMAXw2K3S5i2qEy3V1kbsZMAAd9LCCc",
  "key30": "4A6DuXk1apcpKkp3BdbrG7LE4AZthHWQaFuMUTpkXWi7hau59PobSuwbmdf4FF1VgEiVGWsyMadxpPiHomwDHBnF",
  "key31": "wQaTHq7AYLWaLHiwRmbdFbx8A75vfpQ4SQ7htwQzqFjHiT1QeLPec9wbFDTNkgFnpHqVHN21QRu7LgifKxSLWm1",
  "key32": "Y1qgyMfmo7xQGphLFy6hueDL3MPn1ZwrxkNwaUk5AonYVurFaHmUEKHKnUQEu7kidbsyfkPG22piL5BKt1WBVUT",
  "key33": "2iJYpXSz3tLpBCS7KyYBPvEVivpGM3EhHuCGqigj6Gat7B6xJUsWEYyFq6ya3xRDTn5VE1fhUkxuk29cbMPZjjMD",
  "key34": "4wWRmP7ajbJrRkXw43RQSQDjT8mYxALzEy4EDv1Tyqqn2n7hf3ZTCRzeuUHwm1E4Y7aVcBoQeSvxbkdQAub3E7Dh",
  "key35": "5ycw7JF9EDBmp5JJ417pRw1Q26rAnTwj67oto21NrumYAaQDNR8eKDRaT3ZdRp88BRJiaL2ENeca2KDNjffFGgMH",
  "key36": "37NcvbrJEwvyRS5X28jsA6HLwgW6PNhttngnxqvjmnUyWW2hG2tp2bRreuA3bEpsQTErsXw82iy3G1muu5ehxbwx",
  "key37": "5fszuk89LgYKuazwsWP8EpFqkg8HR6nhtTxeGEA7VR9Jd9t7jXXr3Q9yPau21p88DFJBotcLuDhcvosGgRVhsqGr",
  "key38": "5Qboyw9YPrJJgYKNgBqu824Rcj1K2gsZp82baqLRUksVtRtQ7494TZhRoczWweyy6DrGQLXa3c7nR11X7C8C7yPt",
  "key39": "3f1nhxZpLzpaJfd4hhd7H3Kr4yd9dz5kKtbYW9bEGvAKKwxHV1LSsHbiR4q78Pmb18oYvJuz7gGHSWAZLxkTszPr"
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
