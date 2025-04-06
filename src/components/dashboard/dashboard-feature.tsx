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
    "4MhxDhQKSi84ocrrxJBygb6NLzsU91sdhqwbozMCja7XYqHrXxn8DmV3zH1H2vCgaRGYFhqpEXAj1vbic3Nme36y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NuRMNo3ASfMthce5BXfF9DxyUZqPbqebNTvJCKSzzccQTbCwBFJXz9VJEUgXJ5w6HNEmeNsGobNE76GfghMKyDu",
  "key1": "3rEARSS5RJSb2P6cnCoCyk2XodKBuhj4XsYK7NZeiKr2L9TxfBei4qNiQ1i9EbcFhv4aqkP5XkTKbfvRL1mEduTj",
  "key2": "2y5LTxB9jgMFaLXWA5KPRkmNgHQjRKyG3PdvqFP2JvayUCyn8vw7hDs65RGMJwHBiSDwcrtGT32tSURR98C3XyQ5",
  "key3": "4f3UZ6xhxSZCV624jkuY9CHyPwHnBWsqcyiEzPKjiaxBsZQPnNpdCeMyDobfWAYPsycZwgdtr9VZ1SwivCF8RkV7",
  "key4": "3qyotY9UwQs6tJRJJjFQBbNm62FpAfQGbHRqoHhVzg47hjDqsZjPakEeMyhQir6ENAaLLz5xA114PoLfenZqSvqY",
  "key5": "3BZhUNW2VCJhs8mGCXjtetJy7LmDV83schCHHkdoz7LXXFcvtqGfvFNAoc7qvKHdrzRDYWs1yS5MgHCVX6U28jzi",
  "key6": "uBPFggfXxjbwtEHdLyHnNABDxotgRL6wCi1AWPGmJyCBtMDbhHzPPS8TMrMqoub5Pjr5katXcTR1C9WZHwB7bTn",
  "key7": "3hMCG7cTM1AUy6pZVAajpbhNYk1LMEkBo5JP49ymhdQMkgH3QHwicrCsmgeNCw3qdphft4kj1Fmt36q3ykTHfZ6e",
  "key8": "XEUGkV1H5pjuSGhPpGF599pow2YWxmAMecrWhYpmPSncQxBn2ecPQoCL5jJzh4SrZjsDVcQTY5WUfon58YJUuym",
  "key9": "4WS1d4XvCXzuk6tHRKJr6yPTVWUZytPyRW5jTSTNnopousjJ6AD5qqpvPbgS3ntZ9jEELRYBLPZwBkuNki3gaCe9",
  "key10": "3dht8He7Ye8MvbJuQaeaavbJCtBYTzP1TqTvN1PgBaUUvM9iWUjvJKwsnnJtyVgvaBsvVg7ZENpHWsGXYZFkVNWB",
  "key11": "4kSdiMUY25EAGTMX4gg7cAVNHt9K1XaWLo5B8oE4gPsrKLK1L1CUYxLMTdVK26qh72GomssFTYsD9bYokPruFaSt",
  "key12": "599E1335UZBF1n46HQyMSSBA7baKXFzLxwgFnFRTTRY76gXBGayYxteGzR82xMGDw3DWJ8m3DWw9vRSY2AhZZn2m",
  "key13": "3FVkhdkLGfpV9RmgbFwVAEgjwU8jDGxtrxSrTMcPeAw4dAXAY8KPzJtUQqrwyv4HY9ynJxLJzq2g4ibpR2jyMMGK",
  "key14": "3b9GoAeR1tnGE5oW81yHBSwY9ZPB1h7FWFfG5J3RL2TVPnG1RMSkh2H4aePtAnBmVR3uFTwD8YFjR3cTM3NLr2pe",
  "key15": "qoVuiGHaFnoNp2yfLKST1AsnipXqYGWpcnmvZNNkQTYZfBL7eGYgxrQM8zTWw4a17HVuMBzhLXiBGFCdn77DNVQ",
  "key16": "2a33YrFxukgdf4LLZL9DvJcjBc7oZGBWgVcaDTy5FuAie6iyGby747jsmvWgKGgNt23hdWnUUbtScNWtsZ69NYAK",
  "key17": "5gV4GCg5mfv1MrqLnatFoFPXT2y1tJvTEbCTzyR888wCijeYhxw4YxcixFzJ7y9JYpxh7KAs5hQ8Y88Kx7pokyFs",
  "key18": "2KPe1ZUi4V2Qw1tJKAjEaxUEcXdF3M5bKq4Xd5iWkbsPnL477v5rMMRab4uB8unCcxCvejAyE1MSM8A6YwWQMTdP",
  "key19": "3wb6avqA5tnJZDRXpwfZvP6WSMuskY8P8FRnvYA4vn5kHhg2kcbcu4kpmqe9iBHbVKvzhHC6Ea7nRGMVnfxo97yi",
  "key20": "5wFimF2ZQpW57LamJQ82xkMUwLvEvw9FJqkvCEGsBSaD2px9h3eFiA3qnyMdLau4YbECpP2Wb6wsrbPDkmW4kjGj",
  "key21": "4tJwmx8Ei9dVYoSJrD3pJNjVBVN54MLFZ8GGjzc8eagQ3yMtuA1eWJctEnmjXE8cMtv2SjHAVVtNhZhwqFkzJ3Pw",
  "key22": "3PCgGsLGjdKJGf3JTeuu1DkL5MsPQdVKaEC7jSQrhec4nr4yH1tJ5bYVgdrypfU53b82J6uQCTRW7VNKrF2SyD7J",
  "key23": "5PTDZ9L1npXe5BTXw4gkWhwPAvBBpDKHuMxGc9yJYByVmboohUNrdvu5mKWWdjWoq4SS6erWZZYxDWrVCtFDHUNQ",
  "key24": "5E1a2K1g1yWTqUpqjNheMBofEVqAHnuBTdEmPt9XgTkmn6S6HKBsgi82yhKCJke5CCxSxE4nuPNtQLLg2Xn5Yyby",
  "key25": "28BUkS12gDTeo1mD3ksFTiRFqvnYn2SvbgewZoaJX4rDtRH92Bc4ToJp4RTECtDMe2QB1LeTjJtw61N7hocKDfci",
  "key26": "w5KyRrxr7UZk9QYZjkX5KryP5pr8jQfpAfnumLQH6p1ngajc1Nwdvf4XY898NLpDnX6xPzdmqjXSEQ6K5gq6uRp",
  "key27": "ULUJBQZmGzZm1R1mvfm1Sq4zAtNK8YzfcV3krbF1twGSBU285tWszsPo83DC36yGuRbk9rpMWUKbEmLWwJ6scfW"
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
