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
    "FZoomUZJPkxH1oS9BkfZT6LS5sv5qHsygtDBrsv5xhbhB3TDGDYAvk2aUG55ossYQi898wuBYLduf3uwfZhzt5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4P73mksS872TxuLY38ZAwZVXDQ64Qbpxntb3MbMvd4WLX7nhQR5CSuuiMryYdYSE9jCFbXW4pVYMk4Qt6PCAHV",
  "key1": "smFZ7yVh1W4u6Xz2oG4MptZdK4JqMUptCyndRabEGh1hQAf7zfZ6GaRgTD1WyNmvT6REDA7m4po4CfvawXBNmKy",
  "key2": "49xx8BhaswrX6bordg15qnBoNDwf2dw7P5axippVcL6NTdUkrjzZxNk14yBMJHUc71183ZjwtPCkpfxtgNtmPyqf",
  "key3": "2aj5EKkPxAwHJHjGo8UZLXmtCkMLtkpXqXFBWfjr8rCF71ibXXDbefjKGJJeFw3xh7bwjck1y7VEbQhZz8iRbVt",
  "key4": "4fSgpKxbTPPB8YHxKyUoEtWFeCzDRXTgGzCEGnSmQFJJDewPRYCGsuA3kdzDj9XSWnhhjMuLZJdDgwT7bSjngdJR",
  "key5": "3LXs8iiJRDKRnLw12nUGJohhcAfVYSut9LX6Eq7YUr1jz8otEH3u2jreuUVJBM2fjupTgjH4XXS4sLVcnskccGGG",
  "key6": "Gx2HsNd9KBwfWcJLWP2gr44qBBXEDtD6nkDqEt3hrwFM2zBYBvbbGNEtzvJshYHKFGjH1yakvFy68KBdToNB3oq",
  "key7": "3iz2YCyHnitsqZaVkp8b9K7qMUfdrWmxMy4UGEjyjPLH5yJv9y5NsNYhsV1hRFYKFFhw3wUj82zyEkDDs6gfJPA",
  "key8": "4cRfTjenRjBEXwLGsT7YYaqqB3xn27VyBxgVSTFUawmwXjyiBzNBFpyHnkSwNaT5DSFEMNFocnwAkuLiSNeJxhXY",
  "key9": "2X54mqsibHoYfWbit1RNYMbPYowPV6cNAFUSMumMyWtY76o8dJz85Yw3ULJyZT99RtdfPictGmQ8nPHPfagzGkTR",
  "key10": "4fyUtYo2gnxqLwifBRFLDGWJzUVxk9Hp4Jg6mMJFcB5uRnKkVVRsdu3gZbhjJJmFNQe4YUw8cTmzYQHSiJsZ8V17",
  "key11": "5QxXf6Q9TdKUunYuRLaWJVT3BFSvSj5T3hJnBEecPUF4PAZaVhhXKQfxYL398yRye8R7G1cwthaAHWX7hAmXxf1U",
  "key12": "5yMeauTHWru7uFwLMcUdXJdhQ6dhTJfWwWoQRtQrXREjcGrxsjRwq69qT3LAi4mydZoELavmgUQ5cWFN6WvjbgVV",
  "key13": "5BxxRyVtCDYYbC16TRF6Lc6RFNHhSVnUkp4W86hRbX7CYSQb2Af8dH3hoZdQpm33vtXdMsfxrvY4fPwtJvYxSpYw",
  "key14": "2qn53zctH5nEYLyn5LTKQLqDnE35dxQBbjfaGnknRLgT8LsUyYmbZiuiJW5ux3LR3t3SrHyTyjhCSqHg3xc7HntS",
  "key15": "2qJxiCfrUJ2FQpLuKzW8SZL2FaGuG4nTqcFuaqsPgeoud1WpCp9stSQei8XKB5AVuYB36icdEeajYPq9s6ZALmGQ",
  "key16": "4iC9CiFRviTqzVW7TJ4B7Zn2gsKWjoTZA5pZP67t3P2X2AXicESp6gUbdxLE67yXdzw6Dh77N6bnp7T7kgqmH1dQ",
  "key17": "Js9EvoDwAgGzVQwkcA6d11DD86VfR9tLHZcBLPHBQR8TJQYwRrzmmCRdCXUkL1ZwbDAoSHvJgj3rPPobMKUA4av",
  "key18": "3LPxynkW9BVJ9ZQ2XADhLP5ZCYfjRqcuwD9dvgtLW5n1rLf2njCfLbhTxLK9Qa4g1oFxzpK5H8hmnkwfByhNzc1r",
  "key19": "5pW6pButdm3BaVqqsjc2v8JPtnkcaB5hz6NjbmDmpXexc59kpDJwDFtB7bdHidKamPKn54yq7XFqUAHQHbUi1Suo",
  "key20": "4S5h374EvQxe1U4opmPxEdhupx1jwVhtu4UBFhkxmhKcZFXpbYvHAiygP1iTAsEXUUenuPEJFvZvcZVvfDJeo9S9",
  "key21": "cMsJSqzWJ4z32qLQr2HD4BKd9YHgeLmBnEfTuDruZKotxxDbZ68Xrso54PoTKpXZz1N6oXVNKB78Yw6w5xbpPeo",
  "key22": "H6CFHiC8gjFR3FTqEaCJFoNCFuq4LT7UmJagGL8DUQv832fo6CrLKLFbABCfwMF1UB4jrvCFbyxCzmAdV8ZH9gv",
  "key23": "4PnU328nXTf1Bib4LsEyU34BoUARibyhfgCFbwPgQ6DDShbwjqoA1dp47f6xjBGLyNsWxCrfAa5SdKpr7kHkjazb",
  "key24": "6SSYNbsoAC82PzA92PHw5b6bkSmWaMPwiUrrcKsrFAHyK4V5H9GyofrJR75BbWv9t8WyyyJS7jVrZMTnesD4bbp",
  "key25": "vft1A9w33zq5wtcJdvY3eqrsMyxeWJZ8PHEGe44XDLE8Hi1NLGjX7v72KE2RVuH7GV8a7e6a8wMGxE2mxsNa8EH",
  "key26": "3pFdGvu2iob4rLchWHAroFQFhSMydN1r21dm4reiT3gKfGJBjck8YNwq9UZuqUzXVb8SuS6YFkNEfZ8xMLyGaWEU",
  "key27": "3cPd5B6bNNLmYa9txTEK7FPAmzXqB29Q1ZThJwUvxsUeMPJX1K7E7Qzs2aFqzUErLScnbAd9w7Ym4E4dtPTwkNsD",
  "key28": "4MgujnDkA7JKRi66g5oN3rczchN6D8Mgh9BVnD5xrwMnR2Bvgs8iRd4ptAJcib2avpTpHs8p4xprW6dmC728eRmN"
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
