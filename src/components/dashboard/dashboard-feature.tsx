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
    "2e9TQW5wpjkA5DkzpR5Twm2XYzaveGiF7w9H4G4dhN5xc7qGYep5fMaiC6L5M8uvTMJ7WV14TLm2wE9v25NcbWf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hogiZMhjGUG3dgjiUnYgkUfupncbVSg32ewWFXoEGGK75e4imxia6bpZG5vRZaNUh4CT7475QPDuGocNN3Gpfj8",
  "key1": "4uKc3n878E9dRLrxLUGV94KhiyA82EkfrVdNUF1okdyT1ppWJTxK6PNa5rFjsreFBJ7ERTUxmM6YzZWThSjZVU6J",
  "key2": "4is4dQjwDNWqaTkrDwhVAHMS6u56jd2oq4hrwqnUquSJvMgk6w5HSVb3Tq6mipW5j6ApvZvRhditwB4kdpFfKwiz",
  "key3": "fehsyAXVy6EFuuSvUmAQvyoctJ6yAAucFyWrHDvschLP1wpNMGcFJPobtDDtsERbhRNqiBHsgqEsbRehnUgPkxt",
  "key4": "t2miuvAj48GPzZE3LKph36fbYYw2TbX4UQvu1TAYoKtvGYtvTJTAz3TSgbwNNYZx2ZbX8Fuk31xU1VAPeMce9uB",
  "key5": "3HwYkuNPVhu48JAbLKw9kRUWa39K2muJzVSeZmwsqwJKqSby6xyau8ZkBUXV5jrRHUUs3iEMog9FatJCYZHjtefS",
  "key6": "4aMZXaN8RAgg6ErURdPrBqDFeAw5rDcWcBG8z8qH1BMsk3yCKd5FFQwYpRgZaePkEszuJwANsGFJcqgxXNmnLRJp",
  "key7": "5nfKDKJLuSTRKvQpb2hN9P2gtMYFWDEqD73LyXbKDbtcyUUzgBGXkVUM8A45iBAq1qibX5kPDcF1HDSRSuFH8rqX",
  "key8": "246t36WrgKKxy3gdJhXccToEbbsbzSSE9G7XnpwiLjPWhj7XNJ9XMiCuZzVateEM9PjEgPeTW5Wg6geudEPxMUYr",
  "key9": "3LMUfbcVgKEGBhoEmvAx7pu6zUdLnBFvh4gfQddc6Rd7KSHyHiKDDvwgM1bbaqH4idQsiBA4XmpKxCz1jHksv4gS",
  "key10": "5FrrSmASUQQk1iWiM93RJLeRzeqzwb9czsUDCnb9uXLkVDtn3rVZwdfpcr3iAV8iRF3GSPX8VuynzwdUE3kcTRJV",
  "key11": "5Mei24usSFbAnm8AxodffbN5aThkxmKokg6S5sUkL74ME3LFRVUtcA14pZXKQRm13E2A9R6jzT5P8648b5w2PC4g",
  "key12": "4evzZjd3gVbVnSuF7CoVvXBscetof85aiM7oGJzKCsmMCvuKbtQr8oYDvuhVC76x5vKqmtBgPHHQf9L258Vw63Lz",
  "key13": "65Ndjx9yySa8WCKNPEqhM2V2ZZTVYvztVVAcF9P7SJNL7XLrjVAg4HH1D1T9yZ2gGQhWQ1zha8DEhdzeFQzGeSHF",
  "key14": "27e7WiNoDCQ5PxBxTZ6pBtwn77jPiHrG8nMEJ5PpcdZemFgXaxFYMstY1cxDeAjeJcDABkx7xDxR2o3DZ4p71VbW",
  "key15": "2JkgE8su49mRR3t3ctMZq12GzwTbGKZqDWyD3VceH4VhWnejHV7zpMyCYiGx8giGoy1uDfrCDEgfkRADip1s3My4",
  "key16": "46TcNyDLcbhaNGVQXmhKopis2G8ndKLsaRF7v21UfvckEUoKYiJNsbSUapK9Hjtus5HybzcfAqWiQcakzKTRPifa",
  "key17": "2EpTMFH8nX971vh9tSZYT96YiKdeZ5iUKcqfy9jxJhg5csKv2p4GXmwVpeFD8ekiXRavE5uUcffmqXGKvLdgnz3r",
  "key18": "5tM1Xw7CwiqJQM6zkwsLTR1UWCNMZGVMYGgzwURLPUeS8TQjR66LGmUQXxXD5J42g5h51vGdCrKDWmPdev52KYcZ",
  "key19": "2YqtJvKbGuYXBkbZ53RtKp7c1KmKSEvZuwsixEJdmJ48Z8FxZyTGN7jCPTpJ8otE4rz39QmmP31jKncTdPwxzcAh",
  "key20": "31LmtT94FCrSo69rejUgWapitydxSRLKmjsNdtEGPQ5Be4k8unsQYmL4wbeSTYWxRyUwFvToXVEWfd7fdtw6h5oH",
  "key21": "4NKrsaCZeXpKiYFg2yBvJhdPNCNUAQ6TFommVe86yU78HbWErnxhP2HtsujP3P4auijYFgmwCBdQC5L975mNfeqy",
  "key22": "ucoZusN6zZaGsXVozyFHMFQnBnu8DLeppckFp6LkE6A71vX4Xv6k9jJLiPwZoqRx3ZQkbfiK2ew8t9QzBZGVhzn",
  "key23": "2mNTCn197oUhMPywVwPnwvBwMxvkWXCfQxroVMUKeyC6v7Uhst1YF3DodZxvfQqwVzfWtMrY3VQAuvzbKp8Ehpyk",
  "key24": "4c7FPvTHrb6s8iDtknoW32KJj6cpcb2Jt2MvpLrrSMJjQySECvzouzhA5Gx1kT2aTk4mVGHxaW43dB5RbzoJeZvT",
  "key25": "5tDiQP1iw2CWAG8ij9PCYfHZAFBGkV7PLXLDDcxowddzVQaDsSLtBfcASkxowFMqyDLYGSEaezZZScgZggrExT25",
  "key26": "KtzEd1siSA3BkCfZJTfz94mssj7vNccHv4SarxeSX5FgkZgXUXYJUcdavHKG9A2pM4DSgCY92ZvshhtaSgnYWMG"
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
