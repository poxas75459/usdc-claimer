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
    "5hBv2HEn8KLVTEPzhGdfNkzQBy7Sd3dK1yDZEBKC42zmZkTkFoi4yciMjyF1JtEm4zL1hLoZAJTT2jbRF6YkFHwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ffj9SYRgwv54oMkxFQtgqa14dtTfGkNgnx9DQ9xqrXXqR5p6L7mE5vfcEjuhedyNq7zrZT45gfP4cycDT9yPcGc",
  "key1": "32GWPiEBnH5uwdaMb2jfvJruXzPJoooSdokPcp64bX66deXJV5vW3rzAR14TARQpqTdTnQ1YifJVuPAkyeDwqREq",
  "key2": "3NLLsoXQ78THyHnkxFaCNH5ryoyhFA6EvbWvzLi8Gxqg71DGjuZ9NkL1Zyr9fagk2nWjoLek4VStUrGoKP3MB1S3",
  "key3": "3myKh15VecA4DWZQJSvL6yJCzTJNW788QiUUj4Zj5QcPhidsXt5qBt5Fa2SwsRGkbqGQ8PxQUjKKj91gid6dN3Kn",
  "key4": "2F4VDLnV8WbvxcKgMwXibECpL6tzBey7t5GGtaR8Q8qE5aDAL9s8UuypbXjbwHgCi8QEm5c5KaUfxKQbrazGasSi",
  "key5": "4FwNasYP38JsQ4h5yYJ51pwxWJdtq4k7WW72GSG8kCbHsnvS2s4cMAY8TaUyH8jnDs7mv4PzB3kqByHUmto5cUY4",
  "key6": "ke1zUDvEHeQ8yWF8aUg88iBSHkGcfeejfH8FCk2LsAybbfZkvhhiFsTQ6kSp6Rd5dUcCMEt9mWwfoeb513Qit7q",
  "key7": "3gWAktmmZwgybbHuWowPhdFj8n6hg88rLXHf8JG13wfyZWK3hPuTsLmuet4qD3iF8vd7YknzZ42pzU7TfrGT61Ve",
  "key8": "aYF79ngKqMB5SC98GtKJT66R2TBWXR5BPV8Gyoa7UfamJdE3g1JbSSJWenDDGk17ne3WcXPKULKq4yBF6Mppa6T",
  "key9": "2wCfKyQUk8iGYdeNyM8PvjgTnDnZ4oXP8GYdQJFd9UG11hPQHZ2onxPGsFP8kpA7nhodGbPJrzjXPXcHRqa8bDkU",
  "key10": "27jUM7ks6sE49iJZ2TaCUrk8yMujhmkCkoMyCtmyfvTvoVoduvqoRyqWKMw1wzp1RVZPJn63tccnpzts2rZ9cLbX",
  "key11": "5sxwiLrhxBkNJ8Kgqb4LdwMnsoS3wiNTZRKHKnHjw6WCAB1S43muvbmTc4afQpZ3f9YEV4jRqCKoSdJTAUqt3fTf",
  "key12": "2y6E8MqZ1mQNYJnJHHATYMXF5Y8QXBiN5BFF9ZLvXzofjDV9UFYUGrYDLADKMZ9oQ7R6rThw4pQDanZKYQjVMfWf",
  "key13": "Dt54jbkbPSgp5fmBg6Q24PummDZzhu9BkyP2f1bf4hjrRRf552xEqjeFX4qcK3PBSFnSMH9MxvmY5GtLcWobeXo",
  "key14": "3UczPWhiaPMCzecEo45NUf6D48tE68b1QYCQQdH1ZiazrriNKjoGJpshtSUoG2vHTDja57mRmqxsKvQ4ME13RHcK",
  "key15": "2djtgqsjdV7Kp3uiv4T57LLqrBUNp5FiSv6YVKjGCEhjN7G3PssGJUZ81wQhmV1RqBRjRZ8hLmUuSupfEkA2AatB",
  "key16": "32gsAwok8u3FRXHQRrQ1Eu548mcnkZ8ngAAwoyfQWMwmhCs7G4rHmmnESBrqDQRdm3XYR4L7GAhv6gANSc8DMVkJ",
  "key17": "HV4KprYnoA8nDUQkTvaztfh8CCRPGKeUEhQVYpkAxqwidcBEzok7oGtVd6J96N2qCtJMjHErdWJN15xNSKFizv5",
  "key18": "255hpLnXFfpS4P8EErC8B9r8eoCqS7saxHC9QN8SqCLSgGv4yB5nwqxxjVYeBpMhmfuSnpejaMfgRpXeZUdD9ypt",
  "key19": "4So5wadWYEhrArp3t1GpjevGS4jbVFCXLxXRa6q8t4sewWoWM9U1BGCTNqFEUqnJRzXqLq25oQ2bXUigcviw3Ltp",
  "key20": "49Na1xhM7gkWdwytYCAx9nvXTg2SDcdQQhZPhFpdNH3ay3kbiXmv2xocAbiGC1HuF5pHfcGLgPMp8FNYFrswNGt5",
  "key21": "34S3e5oUpuNEEuQexsK5NccXfxwcpgUeMwzsFicGyxBrUBMQiwAS41jsQR84ViEupgp3uLgGnN4tBqg8158XEsFt",
  "key22": "SxiCrZ28HMyGWaXbRAd3QCwfQKBXZevHJDUCVFWV2hDVpCLPt3Wfpk6pz1pfSyji5xupyNMriEBtV5Dxg5Jkdn4",
  "key23": "4Wce8DDFqvVgshpYpJeWtApWZDpajWsH5cMgBR5LYAGXsxVfe4UiS4crpXrJc7NqwDdPMJj5j91EWTZKNjKSdroe",
  "key24": "3UfDcxv8A7NVwReMRREhA72xnrgXwf5QiyibSzWVNaUs8E5d6cjUW8xepWSzQq16cXSkg18ZVgQopXCySjuUk6Jj",
  "key25": "2voXNW6atMtPPyAbMtZRg5GqLweXVtpSrf7eSwohhbF29pTsTwTEX2diSRdBeA5TF3ioRrQVcTnyyN3BF939KiRG",
  "key26": "3wtFFX143FkwYJsjDMRT5ubVBq9zFbPdwq93y5nYTQNjt8ynFLXkHHUDKhVV7b11NNmeqJvJJ6HcEGSRjxbXpsAE",
  "key27": "5vpG4hEt7ziufzkhMCWXRZLHYinvcPYcw9zERhb9VAQf1NHHQpzUxy7caaTStakvdCaRHQosNQQc9KyL8jTXNnfL",
  "key28": "5VSsHpofBNLNuyX3vmGHjUSCxFBraHQyYQnC1iYuceQx52DiQnXQkwDYhLLJ2UdYsrE1GnksJoisa8pAF8accEeD",
  "key29": "5nnTpimRteQkrLmNYxfEmQcCZmMusDAfDo9nFFHog4UyRoHJ4B1WxkrNtJQ6uCGAfrULknxDbMcbHxwF35i6iyaJ",
  "key30": "3RXh8CnHYt2C2SLRC5zuK6PxwmBTB2c1MuCNWvPMMDvw31S8YiAE39KRM1viQchfxEhJKQFAQxBCb6AXHrWq9Rtp",
  "key31": "NRxXJt4JhKZEztg1cnCgNAy3N8LFnXapWqrbRgBZ5AVrBDjzxrkBBh7B9L45VQKtYhukeUiTuqWkyRS9TUXK3qV",
  "key32": "3QKXecBW594t7WtEnF3h4Q6MJ1VMemVYk2xV4gQfS2qYH2VKyJ5eUgqnTnuvBSUyiWiWgNh6fepdKH9S8snjqKx8",
  "key33": "5PXVZB5pgDVmCRBCyEZRJFdmqJJAvA6gkScpx1t6PCS9UKV79D6BYyKHsWFSCnMhgtND9oSPfNYciQfqYTGNZX1W"
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
