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
    "4DHVEyzY1BvWBFKXMLur17CQMRVMhWqAmhcQpzwBoRdm3Gse8myMCRHotB3S1DPb1ZJ5vVMV7htKrvG3MmjfQMgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ALP3dDZE56pwRdoQcaXdsYACVFXzFhUnhNCVDajPxH1bkXVRwHRcdDY5D7VjLkQKWKTtcqgPXCWeHciwKpyjnEp",
  "key1": "4zeF9Lz9GuSpxtazDoAG5APpK7NQx2hFD1c32DENeY84TJ9VQLaCNrjXjvwQbyF7RimLRio7bLFhXmcSK43y1s4e",
  "key2": "2y8GxS5mLMeNpSqFRh1GxWnBede4KyxDy1JQeayrbdS6dgF58tMSWXj7xDyAQfiKdy1C5wNbbjGVt5j2QhMXL3em",
  "key3": "54jg6KtWF3jaswkUvqasc5gHbLSeJMsQs17fgkFhY4ugsFBREMWzJwCTEfLbqLsKcBzkF81pxYY1yA8pDKXJ5ouw",
  "key4": "4RXdgkRELMSgNdEdTvuRCFNxQD2kYRJkhFJriYWiousi5sRbuR2N3RSqE3quw5V4VnvXytkdbtGtJZQR7HRg9fpZ",
  "key5": "4W2darYvfwr4F1Kt77vYMLjgDTTwhjLwWyBqLoG6zWgi2LcXj41Ry2PAsZQ8VERKu99wJHJicGtDZkC91cAcdZVq",
  "key6": "U2wgJTEV6Bzw1BDHGjuscw7MPjt5ZJALSx8CQcmgut2ktvpSeU617T4DVzibYgVaMoJvVvG6YLL9nTP3JE3dvia",
  "key7": "4Wty8qhY4sjsYgEbWnrTGwEAVJZRcwCYB5bmHy94v4iadAZbugC33J829P1ARESjHL8kKR83VPXG41CxLAzMyuJK",
  "key8": "5JZ1CKwnux5n61WnZach4A9NBc3eBZxoG5KY6D5BEPdKBnvHUn3XBYjPKRZxneRpkF6RAvEfjpWt5wtvEHQ8FXyd",
  "key9": "286R1gMCgPrHqh1MCNVw5USBjkENH8LQbrXTck2D6jYnCArWm1AE6gvywurZ8ALTtfm6vQbJ7BmxHZQH2JHGq9T8",
  "key10": "59yKRLtSNdWMBesHVXuwMWmriAoy9EEF8Gz2MNGMZBar9eMjdkpVCotFFP8hQJG87fBRAZJXJTUJAJwMJaRYLrZM",
  "key11": "y1XGBqLAPc4sQ86GXgTdw8gFdXqfgNKJpGiarREDdMawDgrvn6155jLb1Qa4jxHsipFRwkkvW5byp1NGAWdsJAF",
  "key12": "2KyMUSBHrWXTypqYM1L83GvzQesxFPr2LE97ECMpE1au4bk6JF8EQGQ54aUraUmCW2XnSb3EP8ZuvfmHRMbHPjCr",
  "key13": "2kQyBruuVYCWCnaEUfoWHouxLu2zCkVhfcub4Fazrn4gfcc7raLw8RtPMjR51Jf56zXjhoTazsDRLfUnNTMvsB55",
  "key14": "32jBHG7Ez4eePHwKBDBn9waQHg2YRTuQz9bBoPkd2R9XFzSp3vQ6krH2PoY2sfbJoJBPtSikupK4iBMqJp9sCRq4",
  "key15": "5AcWqt8UMjqoPzX25w5zTbjyhHxtNngBsQ1Z1g8L5UZ9hQGSUUKKyhGWypfX4ojaxvVEFCvmTXcgzK7Z2W5c4GSS",
  "key16": "pPGSVmEEGiFGcCpMfGCM22QMCGgfBYgpXRV4Hy5eZjnBBzLoQQLZGg1DVcr4bWWXfLHEfWNxbcjnsu9xWQUvWTY",
  "key17": "LXfSqxvkxKDaR1hTotFjp34MEbNczajk2bTXiXzY8aKV9jmUn2T9NveFfj8YueDKZYkAwf8KA4gCfvtFUv4A9Rb",
  "key18": "4YARxdf9NyZpEaGYJ8duN2PuGEQY7wbxAEZmdTjtwZ9gwEVr3GC7AwESHFZz3Tg7s82zCGea1qtNsC8s8UQiB9Hb",
  "key19": "5UjVyojbpFof1BzRQpsAeKsL3MetBTHnSjByAtXDxqu7otadXc4kdckPmPtR1pW5xtcFVqCJzqnSVWbx2AcaD6Qy",
  "key20": "5p4iz98F3f4iSqzFaHudMazNp5T93qssMyE7v3NjFo2pSSwz5VthYLxkLnMWVSusVpmbZNNA23CeVXqNu1hqi1wK",
  "key21": "5TDgGyXDPcrx3EBd65G9rnFwQdccZnK1GWexXyXJnJGxRj5xB5VHeedZWfdzirJUWAW8yokAQtb2AAfKwk6rHkLT",
  "key22": "3LVZrDvC5mzwyHycBtNzUBqEmNW5sL9fcp1DL7iffHNTdVm5Eo7sY6AMvEJLm5wDKZNLoGbSBuGPAAPAGDKTbTJV",
  "key23": "MHBUU5DAjdGAFC94gSRqrz83toTdmHqD86ybwNm1iKL3mfq9NjGTnwxFWfDbVDz3qkvn5bPsRksD4AKtx51rRTP",
  "key24": "5x7G9J7rjHkV8ZVeiUmsc9GQMQfX8no9xffJN8AtLz15UppiT2CSwouF3tLDCW9dhKL7eQotiofRNQc8jtKJmvtS",
  "key25": "5ygjfktGCdANZSDSikz2KQ5koZbikePzHYh7hJDG5LBErgi6JvXcSmiF5nHu5e9YNiauboAQfJNnvp4vWAgZRu6q",
  "key26": "3cVbdvmed9LNvguNZDpNKbFM32xfs5t64GcN9TwroPJaLpew1FuZVD53ZbGZ7PFEhsobPyN6S1e2rW5VYquhsbSJ",
  "key27": "2mXGbgEVB1v8Z6i8fWQWCfErJVcJb35xPrHnxNAVBz5bVhWNsBcfkwEFqSPiykRgzaDPyEVhu1716X1D4mh7shAn",
  "key28": "675YzxFCnW3uz4Xz1vHpffWoJwYvbzXErurC1oCQFXAwarrXbPhP6sm8huX1fJyba37VazfzqfKZBNGjBLav2HMJ",
  "key29": "3s3LCFPmvAcQeHcPu3UB7yo7nv9y9yrwon26zoHekiad9fw3NHbncwfiFdPrGn4YiymVw3b7h7rH9H8LiDK56zmx",
  "key30": "q5xBWmYyFQNgKz8p34wWh87DBwPYoF7AQKHjgYjNmBAQvGFy5HmZhuvStf8D6oqaTTLthcFZUySDh6S59573S1C",
  "key31": "4HipnncLz7i9oyCgTtMwobKi38ndR5VHqadz6vSYAWQmWL6uEbUGahFbwGKQtj4zWgF8U4QqYppc9dbpk1PbTYLi",
  "key32": "5v5e6n12HneJjdme8B8UWekeJSSzJixdbGkLRRxLd4KBLKruQRg4cfV2A5mySy9eQrwYnNbUVbVgteeNXEAhkeLB",
  "key33": "4VizrZs2ZQRKLpeAkFG1XSo6tzm84KFzP6fNDLzAg8P4MhWQoVvokAzHo6Hb2MVGTW4zoDp74uitAgfZzisPnmqC",
  "key34": "H6mcWPzFwJuHRBGF3cwFTLAQQnK1xHzfX2xSXHfKPEie4PgJrCbp3KiNFvJbi2n1GBoaeDzMABT17KHfonbCiCt",
  "key35": "3Qp5jPLCSGL9h8TtYQkX6iKKW3WpcExPTNbqmERrj3MbgHJ9rmdftKbD9GcZKnhP5KkJkkckCJKnHKy7evidP8j4"
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
