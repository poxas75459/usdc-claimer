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
    "3sMheK1ViyEd1vyoeRoYzn6vB9yCxNnPMbTCvshU1wKL6RTu35EN6JCnebf8NKVSdnuXPzddejRXiT1gDR1j9gb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wN4paSe4vtWyWM7huVqyCqBeXX9YKUT8tHkjUZynUHqcPMEyK3dXNK5DKyJUZmejhXfHKMsnFnpxotrCBx1zfmc",
  "key1": "2Srzn6upCm94Kg7WnHa6gaogKZfV2eWpndbhrk9SUKcbbK89Y52FAHp2Yfaa7RMm55tk12EEypMsYw82ghJ3UnJP",
  "key2": "27CxB7jREDXebi2vr53MqVScSmSXQpcVs3Z3BKjG992xgN8tdeWrKzjvYeXe8e2awK955YpfUzGHwHDpDNgbRy18",
  "key3": "MqyAfqfeU8tbzWBGGpz1KZgy38xPzx8axHbjPZ3AVwRCMXBmTpEhx1TAyAciBHzQWq3bHfGTHpb9PTuWeWLfiw3",
  "key4": "5dkzb1ekCqYfeb91uf2W6YbJhvmGXj9tGYYoTnTMLAJWjivLeGxEeE5JmG1A6iEogKwnRWzwKTEtohydR5kpHngX",
  "key5": "nFiAisdZtEgXeqt48AZd86BfG6Y94G4VXVDoDChndNy9WyNeeGZfNe7NRixvasheKobHKdZQfD1b44cLmXFaYUa",
  "key6": "TQAxJnmK5EpwscdTGXDpCBwASm7iT9vprj4MqRH2NQrGkHFPMvc9qJkWWsFDNRz8HRnN2eTM1m41EYf2RHyrjed",
  "key7": "3EAJd3z2GSQkk84oo2j69qM3mkzo9oX71RgshcJPNabkRuxBdT54K5T1XK41m7b8JBe6MyQY2Ao5sBFaD8LJFTgx",
  "key8": "4DVaiMnwqxbbHA1XkPxXaPAQ2yA5b87CPhktAjBvAFaza1EWMdhA9Siq7xzXzpEmDaMgFfxBWfdzPPn9HDXyMjvC",
  "key9": "5B7gJVMT5pZhxiAA2kFrpEHMeFTAHm9N7Vr9WHH5osxgtrEXvMGN9hcTvHCFjQB4rinJ7hhEhosJtf4G13FjvM4f",
  "key10": "2mTHMBsxh1dRkBv9JZDbczeX2yQLpivebU7tyURafDu7XkErzSscn84Bj32WikAZDDcs9JqSFSRx8cYaFimUME4B",
  "key11": "36Z25sHxtpf15nsYuRicBW7vbwMbTXu7ChhSBkmyagYojLA52wV6CvbvKZ6WSCnKxxUwdEPcBxmNkbPaymCBWuvT",
  "key12": "ARakVNo3XNK5JrjTWba88GMabH8cXGABYxxAVZx9YwR6eVriJ8Dms8tH8DxitXC8L1MfM9PTtbJuodpWT9fxPT7",
  "key13": "49o8u1zTTgQmbvoWdNf6DNdh5xQGQMNef7xdPHJJCky6DbHPp2HvNCSXtW1sWXARoMKdAi2bRys1nY8rCGheD8Mq",
  "key14": "Q8s7ZYLV3VjiGG37Xhqhv2H6qPPgvpKyj16ep8BGdPd2PAqfyCUk1yEyS5sGhNxDtMKixfYN4FmKk2XAoMoyK4R",
  "key15": "2op9xnjkwGyv9Goxpz16fnr9qxBkzvHsiifxrVTsSzdZebHk9PMUj7Afh16qwjtV4oBy3jSi9NhDM7rv7FQUtcoM",
  "key16": "2CLc1nstv2yoqr8ZFuM8fLeF71DX7yQJCi2FMTumv7tYhAoGamUHjJTXCNcBJp24CKSPBdKhgcAnUdeBUW2sqLFy",
  "key17": "65sxeztja8UamdBGr8Q39YZM773dkmyafbRjhR4MEgFyhhh5uSsB3siTYwySksz15pXunprToCPhL5Q1YyEyRX3s",
  "key18": "p4Sc43oEgwA5x1VXZhv4KAx8qzbVvMyDZRqTMAa6geeJN6A4V6BYuHHSCmGcfi4HE42BXwNKJsy5EZBxJ6nrLmH",
  "key19": "5oZ3RGEmfyqACF6pff5kUx9X1moeT1D7H3jcmqnJdBuo48qtd6R14M2LcBEr6MwbiCDTsoxC7LuFp4ie8kmZsDNa",
  "key20": "3ksXMmJVgntLh45Bc8bp8jYHzWDiPKCinX7b7Z8oQ3NB1XCZnHoT3ehZMf8ot3UgbFQoPoxF1aSs8EVafMxb8mpA",
  "key21": "2SyptwEkoUgARP9W1VkV5xqnGxz1PmuasUQSWciaVc32dWZP9XxwRHXzyRqGD9Vrc2YbnNzYGVpSEfwPURcbekDK",
  "key22": "4CzY2tuniSr7zgc2vA2ri5FrNiPbpMUbwaNr27eDXF9Eynv8vqetECagWZLtoanY8KHxJaWaj6vgiQNByB63MCzu",
  "key23": "45cTURNRmzsPSsaGAf4Efs7TSd1icK7RssajwVWqq41kwAoBfPnagiKqyuzU2q5DkraXEGfUYpBn8tgavGi3WfVU",
  "key24": "Q57BbtEW6uDHZjVxmuConEoNbfrmZEVCeQaJYaZzfVdAtMz4DHxGEFtU2fyqY9e5XX29Anp31sqPecmiU2Zsx1U",
  "key25": "oZjZiJoU89o7ULm3vGKRDVKz49Xm7zvUcLkwhBbtmneLgx8TzpMgp2Gsa76ZXmLRtYqUuT1R3mnUNyKyZpzbDgH",
  "key26": "2W8bqHwgv2XnpxuB22wG2bBds4K4EDmddmKDJr1eQkck9rHhfeJgDD3JVMdp63JHzFDtTMC7nDfchk3oMjH7fVxq",
  "key27": "u69UA9WwNxurocUWRWa9d1rZ4RtSVw4VFP4zLHrVhLKNGAvrzfHvUvEvMfTJobcsbxyuEhfaTtSvarPgm2kDFe1",
  "key28": "2ZzHc7y6bwnKK4VRnC5MJP2wD7XJph7DfMNCArKjSQXPrnPvuDtc8M8ivfTdjXw1rd3UcaPPUxaX53wzPeSPNR6q",
  "key29": "4E8XTvGdzPfkEqdKcV95BSFU4w3jD65cBkGHXWApA2pA2pUqjgX3s4EVYvaFXBK5Rw139CnC9o4opyQLVNXhXEhA",
  "key30": "2pD6jRHjhpZFSAHkJu2HAUg5KGRNmiorqJg5TxFrPvcqW3Koz2BwhiRvXtRxa12xeVDYUxKhoTgCUh73jUs8njvS",
  "key31": "UWZiqRrjgjTdWHtr5JGAXK1budeFcvYcvLCro4Jjg1bV8P4mortKriuyFCDZ7jenpfZszfbsJ2YX1LNfpNKPuWg",
  "key32": "5LE8NRS47QPhPNUtoWdmZf8AVgi571QaRR9ci7JN5bTtt5ritjALbDDLmWQuAsu8A8f9FT1ug4ACMopqoZrhHs5p",
  "key33": "4q1C7fiMp8KAoVfNccFCk5BqpUCyqUjcD1BMjzdBxDmumBQ7eH88jTkbWJM4gmPQQxnGmtX3J9EtjcxARvm6hUKY",
  "key34": "5MuMkBFqhEUN2cTmHdX1adwCRyeaK1HWqiDAosKHtH9msYzL6iMpeFcpm3QzYGjRPjvYyHDWiVVQGKfjoDV6AWgS",
  "key35": "5VRHEhXD2ASxjuJwhDGexPEgBLrmQ6eEgfyizgG6AKeJjzcnsoCv5AUdTPH8v3g8eT2XgKGVb1rFFb4X8iM11Hmi",
  "key36": "5LMFtS7bXXXcFcoprmgy3pBJGLwYrcNiW9b2fPybEMtYpjU2TUCsBntqAVXN1Esu56nLpn7miuDkThJGQXCpCo7a",
  "key37": "58VpDHXvoYjH18vmFRBA2nrnibEdFQUbmJqom6SKBNVzWUxZRT1GwiyTK3fHhWJX4JTXYqYDTHWiRf4PkRi33xpk",
  "key38": "PWQ3gZTfch8PjxmbEWJDJhdGdWcXA9RRpisRiZBCwgKazJFQUcbQhsU4SZhMjQP74AeJbcVSYRCGrQaWsp14dtp",
  "key39": "3HdxrwmUDFaS5Kfy91aKCWUY7bxDWHVjeJT3k1zdjv8wAgnzTKBaPxRZprYae6CvghrBDmvZCCbD6biPoPjNWFJP",
  "key40": "3ii6wQRgTQwUZyC7PamR8jBfb7QFRjkFkXHK3t7i3npAjF2rPpdBR82cA1p3EMgVdrFQdbeAwHgp4CmmSsqmn1h",
  "key41": "5XMY6rBEdrRKUhey2wRLHRJfRs55WacdoDNSb85omGUEPLdS8JFkUp7Ve111kovATBCU9eRbDo3rPKbL8cQWirtt",
  "key42": "4jBGwSP9qa7Cky73kqjGup3EPLiMkVH4UxjhjpNXV7Tpu6sTaEnpCS3qWAxpMLxUYD969U6JikZqPi2WiqmpAEyK",
  "key43": "52zDh6azQTp5rg77gt2SggvpcgQgPLuYG7VrsVpo3jD3weSz7uQZ7nnMAfEoYFxLK2PwLh1QuGViKLHwHSMPwYkx"
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
