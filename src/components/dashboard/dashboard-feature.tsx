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
    "3HEhBc9H8XiLysNxD6WHYomkesjYVihVD1cW5gwyT1gUjFBHjnaXKc4Da98zfAXV1TBq5ySVxUBvDMzKLf3SjJML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QeUeoGV3YSeNLYmWVXtxBKxXCJ31mnjDLxnnpmMUmP9ZaYvE4SfEs8AyNiosJ6171omDKfMJ2jKjoj84cCGQHFP",
  "key1": "5Gu4FyiCBGqVVddtYKN8LVj3744efG53C7APHyymSX43xc3aFoCuiJv1WSqfk8Fctt8QZWcKjTWSKe35vRXdTFGb",
  "key2": "i4fk8VidvYp9zy7iUDUWR6Jsj1vL2zDDipEKNLLXPDHWrhb8vZzG5MG7d2dD8gagJVNjUPEbznkWgdKLz1v1oGD",
  "key3": "KnuzhStrZuperpTCYBZ99cWC2WzgG5oh811E8yGHFyYYzqRxcP1QKxqerRiLLZSk7s9xhpg8kg7Xc79B2bgpvFi",
  "key4": "GoushgycBSFqAJ29o1EER8sBZXiebuWSNahaCRLWqY16JvBWcMKwkrf3gHYv4mqtbrGExkbAZjYMv3K2HEAfqPu",
  "key5": "2n7s29wcPpYPxv5zjvibtk6KaMryyEFnFRhgYmkAz65UxJJ8LAHc5E7DcwczQ3ZuZp9N3FKagB7xtbkWv5peBYRC",
  "key6": "3QfdeqRSqwik5uuUdSarbHTwYu4rnRHavsHwSsEBtDwbADDoTqSF6C1VDP3LR2QEuFTZoRnGjQrCpbUzoQ9XGrhu",
  "key7": "52juKytkwpah5475vBFywGTCFGQqcbXnSkcUfgVTxLn2Crj7vcH4BvDVrygqjbotYM4NCvecnnrCYgXCYQuA5Reo",
  "key8": "3rC1gGwdh6nxiAAYHLJAB9yjtYUzac2rA1YwEXt53rKgReedk6zC7JohrDAYnCPrtNQsDkNgzuPELdvJVKD6dAL6",
  "key9": "5ASCCWFrjM1atN3tEzgzecvyJQfcs9HLhZEZausftioKavk8hbLQ2raZ1jZ1Pu1EUieGJmniuSJi9HYK3T7dDqgT",
  "key10": "48LzUgiSYYN93Yz3Y6WGH7ovDuSX7ekGkDUT9acrn2uugs47GAYTaKMqz1LWaKza2jM8Xa8QJNcYG4L9jz2JeVcp",
  "key11": "33jMHx5LADzY8tGCM264ezLzmb5CvUkCFyHgcuPA75WLC2SG5nrQaYATPaYhQr2CkZz4DWPi19FZc6miWHjti99t",
  "key12": "4kQzqms3iDtxgxUrde6g1GujmCPSYJAZxHJrFC9nDkZEwQGax5JLuQRySFFFqbM72TETTbdg8zAtYnSQtWriQgSs",
  "key13": "3SWMfJGaFDnoo1prd3AZFsg6P2Qg6DvdCyPmQ29r6W8vY1AdqoUDFk9UPGRHVUkBUsKhhBfAbkWFy9BD7NyLJco6",
  "key14": "2113KJJU4EB2TEc9gWP9DQEVCaw2V6XUc47Nu585QgTZpGFiy3XWUaCMooHvK9XyFxpmPzkJwpUDCtEcJpc8w7c6",
  "key15": "66B9sm3CZBYqEoy6KBMLGLrc3MZva1HmmCYSCruELXryBXRYwKd2V1v2c5Pet4mBMHhXh7jRaEMtSdsRKr5kFf7j",
  "key16": "rfAvDe9DSS7smrXYeLcxWVvEdtonNSxjm7RQ5Dk5awcLyj4TcbPox9HKErZxDxQpBAu6V9Ep3ofPYdjd9mXGpvJ",
  "key17": "5WShJqxmZfNu46muMDvqBGELpZ1NRvSsiL9tuvGsagjRDSGpbCmc5JwMgJxnNUctUYE2Zc6zYzReKKRNs28vBiTw",
  "key18": "4UA8yu8gv5TNdk4MSFzZk1wMaXJer13MLKKqPAyLNTkPV9L9ZpY1u3kdngkqn7r3MtkQirKSPMR1F22XFq9vRLan",
  "key19": "HbGN3DbQHdjSoUkjXLjCcKRhSb6NowkUxxcDZAH5sS2W4ayjBUqWHm2ppUs2UEZCR7muw83sNYGyy3kXseAp9nW",
  "key20": "DXyD8DWTAg6QfKnFwpo9SQJ2x1q43JDZBN2PzSX65e76Z3Ywqkmbqc65e2MnkqpEodBW5LwFWnb1nFfYCUUThSW",
  "key21": "Fgt26R1wX1PjFi5GahimjZ8iEfH6MNJKdaSJqD78Bpf8C6Ng3EKwrgqYyasFaiSwiG4DvhMqGVATCoZXiCokdNi",
  "key22": "39aqRfY1dcgJo7DmRNZG3JPdkGKA2mkn8BK3Xtp7bnoov1mqT3ckk38xCv4nKncwCAsyEdR7daPwRqT6dN1PGqF9",
  "key23": "7UXYHq4M4BgL2StxdnydnQhGJwJMcAMzCLEeZRaWDvFSjh8KrGzrFW1tvPod7stGodu11SWHAR26fvCGQTnLAHg",
  "key24": "5xxuu5VSHUaJQ5MouvA1YRigLGdFCzAPwAdy8uWUizsFjgpm7HXY9Khxd5dwgFu4fpbUBxbjao3df5hQDubkNkjH",
  "key25": "1GcvRJyPMyTpmGguXtodqstugzwqNUWhn4B3FWf6yRDzcejuoroVVWb9AurCUUFtFnKvbyeHyfWLkbo6Nm3LNdP",
  "key26": "34G14yJNMMaUiMn92tTJR4YT9e7BRyVC3HKz7QoWR52jtpNezicXuctrpc6KckYqJk12ePUWWu5fVWRbNTq1cTUv",
  "key27": "5GLGtZgtnCXtpsr1N9BQgEnjnRFNc6d26BvqYsqGaZ2vdX77k8f7dAWznjs7vq83GawUgns9DnXaUmkYXXkQ6cDL",
  "key28": "hb1NnnwjAnUgKY8X7nYQsXY6iaXCJCBsP8gPu2ScNbfBzkuDnWvLVMePSG9ncdtEnV6XJi6eJXg9ySisCrfvzYX",
  "key29": "ZKu352JAULP9cnzs2KQSgtHGqxQLbh2iLmTpQzvXHTaYZ4qe1ibU95MH7XnajtMyXLmAz2VSjm3NCJWoPYEVZte",
  "key30": "5pxxYj1rk3AtMRr1hvCiwNcVR7tGAsLmDcS3gvrUs6r3SPjrFXfcbu5jgbv5arpuYpsXAFFuCAxpcJrKCt5s4SXk",
  "key31": "57ymRHXVYz2Rb2gJaKKUEeXSMJqGDAxnhRypwJRXuDvwHFKoTXYPFT2vHwtHNXdvTTgTJLSPcde7VCSwmkdUcp1B",
  "key32": "kqKrjvJapALJoQYXaSgJ1mZMNTYappSEEMnL3kqrmNiqrXL6dDFo6ZHd84Xnb64LNykGBRGDf1mZo9WRej4ZcER",
  "key33": "2cPLVPwJm3JKHXYwHS73uj1VeZ6etMbn9tkPjJaiKkwCEKAjKQiQaxxLTJKxxnGrW8HSAy7YDVeXa2qayJUxuUYA",
  "key34": "1qXHYo4DepJexVtkKxTw8iP8oeSo3hgdXZ9viYWCcUbeXmW5nzp75HZHwKATb5E5GdwryChyhz4qNNc4f9sHqBQ",
  "key35": "3pTGJzqi3quEFnV8TJ7SsBrFuwwpGkSsfPvtinF79UoAvrAa8NrhdR69BUoyw1tFYmtxcBEt2CAtvwVgB5PSLsBi",
  "key36": "417SfqG8tJd2j8NBV6KnHJ9WZzWAcAinokPFGLviLTFKZfTPoCj9DWM8mEsz14Mm59vp9QURYsNCVPuH4K31BYWH",
  "key37": "46Y78H4YVzcZQyEGaSHZeXQNnh2nwsqtvo6cnbnveEtc8zfn9KNSzLGHz3LWN8BKU7mRAeaF2wKHd3otSj5HUhxV",
  "key38": "4g25pBKAaENUcQw2qRMT6T2yNBWHxm7CzLBEzvpV5M5MmQbu3wMwJ9C5SxTEikfDAdc91rtCx1jNGuD6GzQVZss8",
  "key39": "3tmNtnhB9F5N9znJmtyxmndwE3SYjcigrjLUZL2WHNpvPtd9QbD9kJ3eUB5xWZHw6GTuhpa3VVbfaZub2BmAxK6j",
  "key40": "2PjxACTb4XhsTkW5SFTvuB3GrGqbdmWS7yzeCqNw1HzS86L4XRBZR1srM4p6azPtyRNoXoQbBKtbnYgraUoinVzx",
  "key41": "3fj7MsbcZkzFW2CiaipoR2a55J7S16XBYA7FSqLBRB62kDZNNdX5sPWBhMWEyXACKQUJjUBQmzu9MqfmwMRNnekK",
  "key42": "4bmRdaRazWG3anqcEbCHwDepy4tT2Rs8bQ7NUZ1a6BcGSWzLE8MbFELPyL4bfNRYXMb2KFn2FeSxK3iMBBCBVq1k"
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
