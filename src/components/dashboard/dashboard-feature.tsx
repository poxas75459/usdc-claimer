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
    "3Zzj29bvSqBebaHWFUFxugE23omzNjYkz3ogfvFVLHkFbNMeB3FqGtstz9HFDthMYoLCJVkwP1Gphg7u7VryRCLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ha7FuVVd7xt5MxpoXt6zPLvvSJND4d981LiDaE8zshTkZdHj9KN1MMZFnzFTAgD4KSTaTdnNvtKKgwapuAAELS2",
  "key1": "4kyR2woiaDVgaoWnMn6dJrLt6Q45LcnH5XGNAfimXrf1WxL9AkzQTGGehzFynweKnBg8ZC8sh2n2dZSX7r2wpXpv",
  "key2": "56xY1hX2MP1gJhfVNz5ZvtfPyKCQHfDHMnoBMtuhFnvVDKSQSm5LZdYRw5eYMq9TALZEfxvKxd9Dpy8P3ohLSXrg",
  "key3": "3yxf1LcwwdcwDuXMGaGCu5RQK2Z7nXjU5wRwFMd1Dg3eGRZNwwHqf8vw2ymAueztpycVwGQKBA1yagUxs6MU8M1P",
  "key4": "2yVv6acQBE8xnMuUevpZucLKc5fp5naPuyPvqdDJ9gSfpWc5y8qqUwDdi3wCiY1D3kc6btBF8c9aybHgTzuZHs9v",
  "key5": "4PQ9a6zSTzRrfpddnpkgSLqfQmgjYPWB7p3JY57GCfvWfrUqfnFXqevcan6mXFfJxLrxeCnxeX5vAFfMyWggVuqW",
  "key6": "4wnnnAChEqW2DVN7wdF9QYtqV7mn2NkME6ZCQbDE5RfPUKQFR57CFUya4mLapLS8me8rFcQaWNBhGYfY6ei6dDVk",
  "key7": "2xQFHLwUzxNjnCSEeFWRMpZMrSoXmcm418cykGXyoPzWyZtpSeLXw9dUApLScKydcGMYaUc7LsFrdbPBDhpedfz8",
  "key8": "5UrTvWD39CuS2A6DwR7WdpdgJXYMRTaBiUmWZytnSPCDA2DrbS818ELnc35WRo58m3bV1nfmgcGeEhEXUHQzn6qE",
  "key9": "2JDvikzHVCknBxhdgJH6mduxvtrLMEURdskA9RttWxVN637nEkWQUGa4s1ChcqGJzXFoa8T7zyzwZG5HyF2yqs4K",
  "key10": "5Qjv1tE8hUaLrgU6bG5YPx9Nc1Bas1wsaURBLo3B5MMdUh9L7mns4dTJVMzdYWJnRQNN3iFL4tYeLPAJXq1WQMEV",
  "key11": "4Xdiu23G94RjGq5W4KoKcnc4HUkX6tBUjfyK18QwbfJd2nUPHMaioLwKzFW2VzVgW18fjp8gPX5GDFxJpaqNdXPL",
  "key12": "5pX25fcx7aFw7P5Rwof2vsk1Ryk7xrdSMAwVEak5q5jWr4yCRNyJcP6ryVVt1ZxLrEj1FXkiLLyuGU6u6NtFUjxT",
  "key13": "3mnHmLhYmLwaes1GYAbUoPuzV2QwfwqeaCeW1BHfJTy3ZNq7M7x9Xrrbft4RaydGwzgUcGxyf5LDviyezsLDnS92",
  "key14": "4YVFBWgy4BuUPzHR3GHUViZ1Wmm3WZSHrgYQ3pez49XZCmmXL1jwdtFaH4zoNf2HqbzPQWPprAXDsBJSnbABU6JT",
  "key15": "345WUScsNCKdVRS3QUvJcmXocAx8jiARRodqAzdJxY1kCyETqkUYGYKqwC9PGtPWR9kmDNM1QV6iBF7LrEZscrji",
  "key16": "3ndon8PwwfBVt2Y6hWdgLj2CmDDkAasSxaMgpjHMcRD9xY3Pdz29mtAX6DR2KMNUiSBPYUbKCEgPQFmkUobg2Ljq",
  "key17": "Vj1F2DQj5Lnd8McRn4XXABdjJ1Yiy9BDYhgEk7PTn5kSNH2f1E6UW5j6XUQNkVa2uQLAjiPiCET6MvnArSKpwz9",
  "key18": "vavNT2AQM6bZfv8etakoxh5Zf6gsBGJ761WLEJqP8bvok6bKqzSvibU8na8XRbAUmnQdoLyJzw6xpc4gZoym8mT",
  "key19": "5FMem2AwzHaXtw5XEXBQUE6PobimwbWyAme26e8c8eK2mya8ku8i8dBZhbyv1QjKN1RTDGxUUenuAysR9smWWZnQ",
  "key20": "4s5rjy2umwME1jM2jFudATXPUJorKtkUtZcRiF1r3VzofKLmUnsigETWPuxbqu227hSUSRtnsDKzYDDrK8MNKR18",
  "key21": "4B3purRcrmaXmu6r8xVyFYa3GNhrCFgHBC1inMJSUkt5RAVaUjun1QcVtrw1QtkdnpBsCBNMb1qMH2jwaYofMzfz",
  "key22": "3Q3rHwc1iMAo5cLyQ1jLf8EyXU6WMLDgXXXgZdkECHMArGQihVyZMC7htKUfjQgwiseTBDau7Dga7WJBeUtcvm5Y",
  "key23": "3k9cRAYeLc3PvFppAqSTNHAyUWTccF8obfdhgGiwwapWjzbaiXzF9q8f3J1tivadM1xV6hSPUbAFNCxu2cTycTyk",
  "key24": "5K1WhE4fFjFChrNvAm4hNdhzAK24zLSawdKf2gpVQGzDpi2L7vXck8CmPvbcUPUpMYTkaN8NtpomJRoq61HFgz9p",
  "key25": "2fSQxcWPpzitRX4tdLn78aVWtZe78hhG5HbSQwRitaRv5cUSpb2Yq25vdjZLdqd55jvdnVAA5M9fgYMahtTFCuPL",
  "key26": "7L9r5tBUdHcumXatRuCARvkeJ5xhUF7ZLrSvT4e8SCRxRo7sSBnegiFNAcMQXgZ8aKNqpiGpqZ7MQ74P34Q7p7y",
  "key27": "2QLaaHKbxShhvhb2ucZJBszyQmBgrMHw4nP3hXsiJFrhvG5DipV6F6LJZT1H3wvTeVJCFzE8sVyT8g1qyoZfEBaw",
  "key28": "26VLyZE6gxAcjZCNjTVuW4YudRHuS1fNRu2EzF6DUF1UBGMRw2AkPiZ7Q9hXoZpaQJ8usRbxjMquu6QVc3znfuta",
  "key29": "5CSnfmvkAoDnTsHXqWovAxBbnL3YcGqiXnrh4DLGt7sMDFeCAPbMR8aHWRBNHQKnbeDKQudHzTpWk9PxGkbzsXz9",
  "key30": "gvLGNbGbWFetruzecXycqpcCUNywqZ8wzigs2pXBv3Sudfw4Sf5kGQvZFqgCrTxaUNcW5tGc7CbNvG3SE1LJb6X",
  "key31": "22TTUqozYitAyz4HdFs7gUq4f6YosSGDWhWqo1pasx2bMaG7DsQ7S7Mzg5Yp3ry4qcJ8fH99wro4t2TVzwA5wBQ1",
  "key32": "5nzFvUXka8cckqfAvhUMpnCWseAsc5Cahbk2VmkBD5NB8evUAA9Zgkkae63jvkiba6u7koACYCEzm3qS134KDGHe",
  "key33": "4noxMuR9bvEp8qbRGwZgXexhDWQqonpxDbp4B8Zg4o84HtyAC4ChR3W4p2oV87WaAEKoE2sEX2mQaci1hBMuXExF",
  "key34": "4e9f3HSiRH7TA1FTwY9RZoL8QWmCVLASQ1BJVYvUybbqEgBgGanLg6Kaun8csddfHUhyfSu9XiS3woVTNTcmHwhu",
  "key35": "4hfFnv2hqFWhuUPEtc71z5PUcpXC78TppU1qFwjfMhUzb5cywzFNK5TQbQmReLkSt378BURKnMtf8tM3N8cuQCfL",
  "key36": "AYYqVjthUWQ79wr1r8j6aPupPz4EntNg7d5KfDEBBYn1SbWJdgUZSpGprtJsLx4pu4pZERfgJPUvrhbm5rWjsK4",
  "key37": "2QW5JYwmujDSpb4h7HSceb1G4RmBXrd9Xcoj9DthbW4xZombqwLK3azw9MPYfRfEnpjZrkvxjBoHiFMR6bftUA13",
  "key38": "2uHKhZjb22scmomtLmpCGKR4oLy9ckLR6WrREbosSeCgYJvuBcBPozqyGGA6frVVj4fNQMUx1CTQh4bBoryrKK4b",
  "key39": "3SsNdmce6fLVHwbC6ujBUSnRvAZxZ5CiRiw3sH7LDVm7KQzhbHtYzNG7jWYonX47qPsdtYCYG1UU99tF5YfuSTwz",
  "key40": "3XB62biDNZ5wPPEyVprdhQWLja7HSdsDBHDUsvF6RozBJgETCqD9KQNbmp7fgeF44w4wRm24WJCxEnwfrNELPe8t",
  "key41": "527DmRq7b7EfbxoFd5Eyuj1D52L1xCSRnd3xip8wBzoTRbkP1BKo9k6fL6Lg5XXeC6SVRr1q8k9dqX6SgJcpyJMC",
  "key42": "4MXL6FL7f86Nm9LHdfNmY42DEUTtsS9xEU3u78bEh7CbdcWAidquCxGUkx289PKUYMMBU4w57k9vUGUnVYo2k9tX",
  "key43": "5qD1MPmXSeqwxteXMWbcBJp69HoNNvMrXvbtimX2Ya5mC58XQf9ZMQqY2ABCVfeE57mXHnrjqkAVCogTGnDeUqz",
  "key44": "3FXvAZUwzj4Jru5ZBaBaUtMua3dQf4QAkdQWMrgc4cm4rCUhrLfvgp3YvUneKbwuMcZkquAftp2Zsqncg9rU6kXk",
  "key45": "54SpbF8yghKsV4FtYeh4oKARvyDEoiw9MVdz4xPpkUQq96jBypCo5p8au4mEz6EZFY4tmudd21LjFur3MusKMqtP",
  "key46": "5MwzzZMH5HHzNfV544hhnh1dajCRmQyejH8hr8kdqdsFDxYoEtTk6AEJf4sqhEtsD7yFHJ7ZXy26xneH9mUdNjum",
  "key47": "4NLy9KZasvz33i11t2vXvq4hZiLG4Hktb126UfbyUnbssQP87yhSXTCqmdcj8baXCtTck5M2MBxPj1q2P7yue8cu",
  "key48": "42vcmeYSiFmN28HrYUZc1hbHb2w67pDfx7CbTzx7uE5aWyBg1LsFe6cBhKXzwUHbTA35rUyQvnZoAsz3aK9U9Kgq",
  "key49": "2F9HaRiuNNVE9YQWR5JJiQF8emDZJCnkEUQDYfdmyjjurTpzjA2oJcKFP5xfk5uUH4AqHajR5ed8gqQ6uJMbvj5j"
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
