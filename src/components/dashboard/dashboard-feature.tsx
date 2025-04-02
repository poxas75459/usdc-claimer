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
    "5QYgNAXdQtyF2FAaa3jfVtegmrBsqBKogbgYmYiewf5hVKXe9JDiD4MhaamAYoUrsqNJTUfg4kYZChZSox9oKmP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U36yfxona5WVwxrceQ2vr3zt43dP3jRMjnTZbUzCryicyAqERJeJJTmCNTbVAXjt4odxAFB3jEGVcZx4VuBPtYq",
  "key1": "QERMgf3VKz8qmLa2ustg5Z5aH8yDgL4yHorqepCddSAgEizyYcjtujphztve6rXNBnxVfsGiyMtg5iy8jG2E5LN",
  "key2": "4mCakHTfqZQcfA43Y89TJZ5jk1gfPppfgDXerFVqxNzfqpfEYXLVjEZQjp2Xm5qanzgCVEQwRD9GqidJEXnbFFpF",
  "key3": "536ExVyjyoNU7gxywjkmzZMjDBo6HBpTowLDV6FCkW7ZKajAE3XkC2UhTMNDXZ6X7qdzaVS97FEEvz8qmq1jCSTt",
  "key4": "2vyh8aucK2aR5CBuoQskxgbUZvYJFW7DKYgAfeLCX7xc7NfYxWwraQHw73c4r1z8wMaGk17HCE9M3YXbhh4EVQYA",
  "key5": "LY37aFLK1n3RW2zHpDXmG3HStaRpAg3ALujGqawuCaUxebFHmwTe5sXt4NP6h5wieZ2UySnqSpB5nz1RfNQYdPJ",
  "key6": "1iZyVFiNizEcqrggLf97EbFKDpS9Jj7oj9vyJahJKQ1Y5WKPF1PStoKQ8VeqL3xrRsyna6xajzpynWatW2ZZDhp",
  "key7": "2QAaBhD6xEqtyZvJYF5qpahCcc2qWW5ugBrA9uAqWQDrXogLdNvR8k7aXAEB1xEASRu8HjDkthzndrN4aV9pYB4A",
  "key8": "4acoz5La2Q3FdkSjjynQ8VaBxFn1MKfFqMKaHzwEV7YbzPZSnt4v7nTeMzHAL34HcGWkLjk5r2Nfgm1K92YxGUTv",
  "key9": "2LVzetczk6XA3FZcF9hUrihLioeGFaabVjG2UC4mbNDqSfmPVd7mchVMdBzvpVjb7LLJJ3TftvcFvLuKsSNEAK2N",
  "key10": "5rrq1HnfYY1aAweDSLoVgRMQeoB41Ks5dLtQjYz8kvFq1p3qu9CtwGLWDaWypoRwYuUpcmSuWhNy4gap5jWghi9V",
  "key11": "3KsyoCh4AJD48viDsg65cRXSPjYMK9yZWKAEPgyed8BLi3HsXnWA93ajew5WJKD6SzjNvM7uqetwjBisgUKP39Vq",
  "key12": "4hZ1GP4BQ4E2aajVqU4K4EgkjJ4NJEFL9pVWXLKeFrqXV7i8tFkubYTe78oBDobteZVE62h8ZTFVJb7QmpRUGKFH",
  "key13": "5pgc5FpRbc5BdMdK3yKJDno9fpKqjEnnKQhS3SA8fLk5yE8TmuqCazSqomGGRkLdechWYxGmLjWyhA1pXT7oMkJC",
  "key14": "56S1GQTC35zfqtnw9MuBFDt6UJTfrz5qaiK1me7wb2zqiaUSx99Furqa5iRZdzEtZisJY4XxK9nih969fEWAgwq8",
  "key15": "5oX3C5R7FnJy2oriLHVLLmpURExjwn82yCqEiLtWJDhNq5LYvAiNaPZqueAg2nWQKrWpoajt7RgzKroeV7CTHem3",
  "key16": "wE7632vzeiRRPSiSGKfU176S2Y7hiGcxU5TfwjURZA2daHZijbHuXUs45Djok1qxHSr8iUze2GyKRvg3moZRoty",
  "key17": "5C6mXbv3MEX4MwmSqS1zCiPNG7MUmECpRFr4d4QbQ9hJ5ah9iyrW4zLLBWtaCQzRg2fUkn1pcauZYyTWYQDiTyXu",
  "key18": "2XnfbkS1ejoPJGjzemsBrnZMReAPCkSjveqAcK15Qf7x6CGYS146Ufbn7kjh3gu979QqGvJVCJVifpLPtaZsmNBU",
  "key19": "2jH3a8B58U4Xgxs9eEJ39CBhSM8Q8fxvrdxbUhqNZJ212sSbf939Epd6mzLeKs3mCoqJ2y1t9RDp97rRzNiw7ph4",
  "key20": "4MFx78EeU5hE4RzGuVtgZGYuvZAqe1PC3bEzJPPourkqL9W5rVFatx5YJkr4LvEtijHBeESUvnGhGfD6dNvd1XgL",
  "key21": "5rEkpj9hRHLrbHYMe7H8S94qov5a7WX4Q85eQDnYDVygTimTsqvPmQjX5oc5njwnYtqoeyL6oPkpceJT66LrbDNE",
  "key22": "5jjvcWBrnm8jpe8fddNpw62wS2ZusbWGKeHgPe9CyPi11AuY2MjHxSyzvht2faL7GV3BU2Kq1CDpH2ZSCvpJUQqs",
  "key23": "61VxEEdv9oHCCoU4qrEVwtQtmgH6HtRgfCUCocmEsQs3mgEmG6LE5zBcBByhAbCMkXyZDwC8F1tse4CjV3TAUpmL",
  "key24": "2h34BiEGzFTQaJH1YrUGpb1kmqtWdfkPb9faCgiAbBt63TvicnJ8Bn3RMhrzeqvxwEo3bXeT7ADXEohdQ5U7jkb3",
  "key25": "4CYZEVefRezSuiS3fe2uUE9X69UvcBAeDrJyD5iqX9KAUCWbnCtmChgVW6aE5vWx8bYB6Tqp8MEPbbqwbFY2VnzX",
  "key26": "3kUSZnogyZGNKfGpZjapPHrGjgDXqMg9XLcfrmGjJ7xW33k6vSPeTo5ZrX5sHXAS4E5BUpkhqQPZytvZ5aasBdKw",
  "key27": "32JDnwYTpEvnkfT9bRbfzvZqi6xVpm44fZN6ZQkdbJZPR7w5eRhHvqFutykisbXn32bBxJD5tcxziRnKMm7TX7wt",
  "key28": "Wtoc3FCFTVMpUM1RyK981gJYTAXn3yeuWb2GJWVaTWR4hPyFjyYFNF1FZDjUA4kbHRKvqkS6xfLQ1FGp25Rpne3"
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
