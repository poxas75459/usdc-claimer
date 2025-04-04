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
    "2uQJQvn7nK1gsb4d94bKaVnYynVnEXFSa3ZMwyfQvkYTpEnfJVt5qPfx13TT3NcY6imNfrRXKEadAuMEudrPkwku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Jr4XCGLXN5bniZaH7FbUK7wn96z374reJswU9Nx3v72fcnrhmoxFxRwL79yWsWJM4WTkDC2EUJMhxgrvw18cTs",
  "key1": "5dcnQ14xwqGKwcm3sqmcBQhQnm9TZok8LDsczD3HYuh6hs548CTyTeFmHPBSrXKvF4tc3a6J3dm2nb4QTnbPuipN",
  "key2": "52YaWoJNzYtCjK6TWsFMUpAb575ftJmA4tDrbupJag5F3t5V6EE7NbPNirNvQia9JZbiozVnH1oioVojLJsPH5VT",
  "key3": "4SDuH5WY33LCpZUEVp7rRX9phNaM2dS3NdwLQEbj6bF5N2pp77bLo2M7xM14YeGSaPH3eGcLrX8d9Bc3Nw97Twcy",
  "key4": "5UWaZ2Vj5R4LZNeZ4CHHd7edQndvUDMrxzuPXhHYaD3pjHd5mnG4nrxDDoA9fXnuCQPGVwq9ZyTbiFCViadF75gR",
  "key5": "BKBDQ4eYdedCvynwAKcVjkgShHFTpTFh4gh6UjXn6dRhuUPyeUXBYthNBXFiTL7d49A3Zgj6us8GtjnL3iVUDsD",
  "key6": "2MPbZQqGqpBCZ9z9RnoCwjBEFTqq6DS9D26t96vKE9962PiNM8sJ8yYPHNPTP2SQ2NaTpEzvgyHjFvpghFo5bWgW",
  "key7": "4wxWxurhfbF5Znk2CFmD3U2i5C1wxtJGMVuJgsruLQrHBhCkB6feca7Tr9bMaCb8PihHXyR6yv7Z3TbVpQBXuo1G",
  "key8": "rSswR35bPGGea6dMUwCheEpRt6RsBYEvkLMqA1fNpJuurAQkK7h3uCe2PxX2chEKgSA56ri1hHwmCAiCM94xsqk",
  "key9": "5At7SfWEV7uZG8DvvDECjmvFbSJUKQzCAU8dR3Xo7v2jYcK6SkJmYX7vyZn9oqoaSkH7e3mYEySYvikaJHVwECWj",
  "key10": "5ozgzZLkLrydNjRkesJTQLrh4ErWivJoCvgBjwMa2K5bZPw5K68HyKXjvDkaz2uSN7kRyeZfbFzBtzphEs5CV5Qz",
  "key11": "5J7ZHNA7bshW63fycsG3dhQmp9WPrYZ3dRsQRyehQ2SR6KdnMNN3PFTHDiEwPmg77xQEooYUkbk3tM9GkYi8Qe5",
  "key12": "4oUTw6pnHDQMNq1oxFvMTdRuWWLf4NuN7eVc3MLaBeeJnuUJ6sjP6Bi9kGpAZMtg8f2wEps1cnYcKJzuiFFcvJXi",
  "key13": "3g5AmEZ4NfHZYHc8Bii8qJiSded1RH4M6KCDvJ7tvwMd7y1GPMUPfA7PhGRoCuXBjaS1rrBdPgoA2Rzq58Co5j5T",
  "key14": "34NKtXvvYUNKw8pagHJRJXBxkPCSyedaqATQTq6YG6mDcWcYkBLmxwzXztixiBZMXN3DEHYhpcuVG3yKJTpqToHR",
  "key15": "3i8oZjJAUxQqPW6QRYdgEEgnPwPt2hJ6bPRzoexsehRHTAyNaHSwRUcg3AQAJ7NXYampvS9ogRkfmDTZfrcGdbKP",
  "key16": "4NNzcZpt4TwBibQC2onmiGinVRyoVt6Wf6vib41YXL1EdJkFexCePPX91Cnq13t3ZWACRzCG1igqpQtj29qy4YKM",
  "key17": "fEWeJ9HtPiFDyvRTk6vdzmqgfrZFs19sVotgC9f1kykHKQzfXXKxGsjaQbVPnEoCpHXde2rqmAR9Wye9oPVuWBt",
  "key18": "AD6kUcQspbDpGDyYUpr3abesUCRbq7s2PY7SUCjVwaEMWcedjBA9KLktVBZ7qkzfDDmK42vrMoCVfwYTGmFpiHA",
  "key19": "47gXyq2Ean7y2j4ATyCWeVAE2YqSQd6QSGMG7gfKDFyAk9BrJB1XjFpvcLyHyFdEL7CK8463GnazshaBEw68wfLb",
  "key20": "fzW5Pw4aGLbAnPechASyRs6xJBrtiXKNByxDM7SrjuBkzNH7gKzVb8URh271b3kQoo2BhSoDCNfaV4k1NLqdQsG",
  "key21": "44XTADMEGR3KBN62X144wrkpzYJMpDhufqLFW4UofBGkW873kF1TVGtg764P2qJdcg87APGmv49idqcRf35dNGTQ",
  "key22": "4D9bgYrWweN2uDkp4hPH11NmCkrmz1BZFPWYZsCzJcwouFLCX5r8ngNAnXqhmfLzH5cWBXJCMKxyWV2izGZ8MdbG",
  "key23": "4qQ15oF4TDqa4rJSaproPgKbf7mSzaMKt5Zu9q1atfkDov6wNrsTju3Vw6q2PbTwkjBbKFHqfAkFZe1BucrkqsHn",
  "key24": "2mmJ16wEZc41VFAchFV7dLtdAYaH9VmkVPLWsxhoyuzjK3BHEqTXmka2FtbFscvfG1ySCqsAeT7z6vRwdJCYq57G",
  "key25": "4X6atZyToAPADt8VdDQv28q96fj9tX61jbzDXkPWozBPYAbVBFWx9ap7waNEEveMdB6uyscA3efC6f1J6DszK5Mi",
  "key26": "864iAD4XfhR5VoG8vfXPDS22xtDyBgsSNhb1S6zAf3zjfUoi4hB1VVo8Af82TjCCSmv5qDVSfHPy2dJpmhytpYs",
  "key27": "3kAvFDb5yPB3iiS9pm1xRV6WAhma2BT5mKYQYtKJfvedtTLHPfVr4dngPZfHKmXXFWShasCQTj1NVAFYsMXZyTbf",
  "key28": "2ArUEYxgbDRsAMGUzGe6fyKR9waGjM5wsWArg4nHjPY6x14GXk7XyYXEqd33XTDENb1diW4id1ASR8voXdx1t5Pm",
  "key29": "3EXsYZLSDJXSpxmHAGkPmqW6c2KEMzZz4f4h76hYBowHe97VDYp6hBLVJdVGeEBYeygvDK8bp4tGk1cq8WwXwCkA",
  "key30": "34XvfVnJTwSmt6GAhf8QCm1pPdXDQJ4QFrWxkkKrEXu7fmdncJoh3ZNq5froJfs9w1hT1WnpWVq58yJ4iodqq7NQ",
  "key31": "2FSZY8yE42b558NdKQCueSQwdHSygkr2qZXjejSXayFgpeeYvFD568jAcuP1eN8evsSunUNf43ACkt3VQ4VJ13PP",
  "key32": "26CnhLSE2qLe3KeqhgfmCsMBDHExdUup9QKWksgpvkrgbkuPkRhoz8cyksFdeHsBHeu7bPSURQVAQCME9YjgSkDA",
  "key33": "32sAcQVfaVJD3cTWa1tSD5UzLsxGkYYdV5pRqmYFSQsorsGhkBxPckFUHGWTGzM4zJUsUVKBnjZBd6Ga8Pf9VFAC"
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
