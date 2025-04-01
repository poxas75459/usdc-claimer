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
    "2rxs4MCGfiRNgH85uLrda5K4F9Fe4RXePuC2BZBSCvh7CdBkSN8CdLZHh2xZ93cFbtqT1faG6tMqQMkxhvcEsNXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WovQovktE7V9yjqwS3ArTX1NqoBgrn7dUqs9MnjBRGvoxnrGhZvTaqNLAPFMZ3Hs5fvyXuRPYq7b8MkZ5X9vkaS",
  "key1": "644VocfBoDUr8FTZFTAfYWvEJ2WJotqVisqo9ox6YiLVucGWVYaJgequoShunWrV8jBuX9sKvohhQtKnff5srjVr",
  "key2": "3hzBhKhDP6Fph1VkbwqFqnXsqzUCcazrDgXZou5ZwAjs62RYrtBLRXxoCw79hKbrko4UVy7wdU5yYXcWHW9hpfzP",
  "key3": "4HfyGNm8yXcAppYis37xdB4Ck2BGJbJ57rbXiwk7Xe3XZPaqLKviyhHSqMN3Epm3DmoVnjhxyBUmqUxwf7ugsLY7",
  "key4": "2SHPR4SbyzFBhd1PCdnBrxBWqRN8Abncscdqr3kh4Swf7gomMdy5zBpHwUFfsaSuQNwaaaahpCDoD9NAuoR5ETDd",
  "key5": "hCoikKYgRHkGUgSW9JQoPaHMH8H6iMVVurrbppA3Zv8v5bWL1sNpMMQXCTAcyZZWHPTmv76PMo5c3ix2neVaT7Y",
  "key6": "p9fm6g9TZwrjCroz94DisXyhDFSFVsrT9awJozEvJjBzeqvESXsL1aqy6C9N86WyQ4BiZf2tWMFQUvpWG9bJZxg",
  "key7": "48rPDSCtnDRrSEznJadFXUbEX3Tv4rfYRZud5kquwvchmowA9StezNnqrHGRBZGZV1jsNy5ZpdJyv331MLenBmQn",
  "key8": "3P4YLqz54yEX3dx39JANgDP3VSmhqcNuY2ZCqvLwP7jTBXkjpEhrXfjSw8oanokkYevwMR537HTVN23CzZMgUWCq",
  "key9": "628wxsLfaCsFjoQZSgDjx3j27QxcYsp1V77ZsUic4ikjiAwBsNi8UpD2DTXKSc69CBgW4kDdtg7s4cfJ8Egh3H5Y",
  "key10": "3xfGDrJ2iXNtr3PcJJA9apAyNN2SizLS1buAaRr63ePNbbgYxfoYvixseKjchpsCrkw6aKtNZjea9BgwF4SJRJfg",
  "key11": "23KaJbdkRoYHikwqE1JrXYXV8BpQQLduLsihJ9oLfGoNGRiuLNrQGdPY2gj3HeE52zcCzd8aaAgt2vb7kiJWxPKJ",
  "key12": "2BgUZLnekur2MoEEza4piQqMvtXrtMRToVJuU8FpCC6EJcCRjT1jtPB9BSmFk3MSszXJgTeAXkS61eYinGTuLhim",
  "key13": "nKU1WhZprjpiZZDVgp3GQP1eCbJQqACrx1fiZRstEydcpc75VWYQWE6E4g2tPRLN5Hgm1FRPLQ7JrRUqnRztvMZ",
  "key14": "4BmpxYJY5WvEuQpob6HdeJjhrAPiLjzNUSQpyAsR6vnTTCXHjoeuHvfSAF1DrFvrJrEFCTLZqxGBBhutgMh5KVPi",
  "key15": "3Ek58BGiVgT1A9S5tGpwyJoKT2FVeHt63ZNMicGrDm1Th4bKXB7oAvaXp3veurWTzZBZSAEHCHX3vRyLLSVGa7oa",
  "key16": "nZxRVmnVCMHVCMKqrFaTmhsrmC5KUQNCZnoAUmkLMyLpENuRdhmStP9V4EcXGNQ66k2ts5SBGuaxMN73oX1siEF",
  "key17": "28j5kRGqbXZxV87sRBXr41R81hFRBBmf3fAjDpcBGvBC1V44LJ8UeiyBhnX2FhpbnyVYXs5ViGZ6GD1hx354x8hw",
  "key18": "fEf6huZANqW9tWjdPp9dumJgKa7DKZGoMjeuBHYtCj5RoUakY79QTwzmAL342f57rdLpA3o9Eta5ZrUHVjNX6d5",
  "key19": "26xqzM98n6oT71ARu7jpcS4PsiHjuU1PVh7Mn4bdY4n4A77CA31UsdMLRUX5sJt3L8bFccm6MrsuoC83WVkhX3ST",
  "key20": "3QAfRpdG4aB9M9uh3iLgf8qC9g4iyByiHC8b9fp6ngdzn8AjGzyhcvHR7yema8cKUgYXvbfpBoQNP4Hg6qsptAeV",
  "key21": "awxJkhSmQCPENBUkjmm2jQFc8oSfKw5jbZUDyNr2W8as1avZzBD94Y7XqHTNMDg21Mj3HJ7e779eisbcdenSgyN",
  "key22": "5utF3x1jVzRLTo8KwEzCZZR3gUPWRkMfqfdBstdogv9YGZ8fcjRq2ozvJU5VRbqi94NYaabyAMaZoPPpcC1r9bFE",
  "key23": "3ZNyctUo34P13onPFqZxZgZeLaDxuCrUWToMvCurE8F4wpqM66SbKHJRt34oiQEGQqVaQ83B5nFqLpgSza93MQ7Q",
  "key24": "4YG4eubpFUkfCXGCLaFixnnNGivmR2EwpoPs8TzcTeshWHfzrgRfyUhSxn6SkqFR11wsP1iXfWJLjm9cQHTowKRh",
  "key25": "4x3pXUWWxEXMczxEAjhq4iMhsaBCshUWu4Q6QNN4MVfEcFwixtGLFLKLEsLmyQ183Zp13eDq9EdxdF6KHxX12EJC",
  "key26": "5Z5WKgbWDs1USY9PaZBAWnKtwyw8wcLsecJYF4JFjk6QB4vfbpG5dX2tTBojMnqSUbwZmQ3EaJJGceBogvPZwakA",
  "key27": "2J3Kut3NtMwmYgHGsV9VVxhidXMkztAW4Q1tY1wq5ys4ba6SLo7Hnwa8rqcC9acQPP6RVKC5CnDLRj6Uv5K6b47X",
  "key28": "3neJEsZ5iQGPtsm5pTd2o5vv9rc57HVz8twtmXcCRz8waUmstLz9cT3qj9YSKen6Fq7zc6eACDiiHkTqkJx5sDPc",
  "key29": "3m1pqVcVPmvkQoP8aTZ785fDLwgQZq2EkcZ9siTtrqimSWRu5cre5F9kY2owuVbGkCjVbWXmKsBV2UbaWcSUB5Dx",
  "key30": "tDAc2V943wAGafkQP82xo9kCmFqkGQ58X1BDJyibiFYkW5BbGymWY6B2YpxpognHscTtcxXk2mWNRrWa17BwckY"
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
