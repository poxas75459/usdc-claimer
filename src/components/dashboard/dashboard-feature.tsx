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
    "5hs4hBFwt21kQXs9CLce5Ns9Y9kkcABVt6wbeZL3b93Zqsm7JgN3anApcUEpT7qWbEhitjJF9jMbKafKWdJWwGyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K2jAU2enKMpaSrCoDN7a7xTNZpDArY7gByX2ddafibXVPmkm8GYdn9Rkz6M5c9sY5FqXVV6EWym6yZq6ZzHKyXA",
  "key1": "2CMezyxQ8kyAYuS888KjeWkZBzUxQdh3vCEBnAA6KW2tK9xroW8dHQ9xHSmQiY1y6gu8AjJfDZbrhYVxZQdvoLd2",
  "key2": "36MuLowaZqzUH7b7wSFNGqkAMUEZ5yVGTnDDBbnE56H5cKfTS6AhxyJq9skqKk7Ts6sNrbipue5rV9YUdvAK5vtJ",
  "key3": "2DYsbHFsEXYJUuxjVGCeEZ8NrPzgBmPZ23r2wNs9F1i9NSmjpjfDqYhdGxShZjNszBo2ebphkHEwxz1czbQ8A4Xz",
  "key4": "3QBU8zsFtc8SB2hdC88T9FNoB3Hh5Aa8LxWKypbegmNmDwxFeuQ5h2wai1jJ3n6vX62mhCF2uX5aMZ3suJcedmsM",
  "key5": "4ABLDDZn5MvaeT2bVxg89Tq6wJLS4HyM28bVTKqeyvRid1m2UAzJSvdq2TyrdneSnm1DXBGsBfd7WVKymwZ5nHdE",
  "key6": "2YYwJBRw3j7KhAhh4A9VWAeoZRTr43zQnjmoqe7bGCHqdxGAMtapwpR2XJLYErfMLivGrvwpVhQYMZeuqwHaPQPV",
  "key7": "5jjktrFLMDbnFJadnjyjbJzRYiY1Ypj9unBtVZ1SNvdWDdKX2RdGsq13SW6pynEMY54PjkpYF5exnwhNLFp9agHt",
  "key8": "5QPiTaQSdeaxeKCv1GAKW5xktA9sYxVqiFstWnj1T8RMFNJSvoC4ZL7Yu2mmnQjyPBQWPRS2UtoYbCJAKNeSK6Rb",
  "key9": "2aCBbAgw9BV9C7taRpsPsHqG5RdH3rbUHJPV4gknJnAZkpmqtnebLooeh9umFioywowP48p4iXJkp6smTa71f2FU",
  "key10": "5a4RRWt4LnAs522SNw9iwuyi795s3Pox57oWifqaK2XPLAgZZoWwb6wkugqCMtF1jPBEiF81pA4cT18Y3V85mbXT",
  "key11": "5NdS4ZgrJUyrNSwAwhkh7QbM4q1nHysSKy4HJ1vwE8yVrrFsQSQ2HjCQNtFC147iVzPEDhT57cdeXHv2pszrDXE2",
  "key12": "4rJUjaRftmcshp7AkrUoaZMYKYsa9BB2J3tUDThDkhfGydLqpzKSrvcKbnV1pZ6oYfyovKWJobn2qsaJfqhq3UY3",
  "key13": "2eEW1QpjBmooAjAkmJXE1qaLDpTewRu4GaVeSrjk8KmyZZRBfB5D5XEPrNL4BxZ31Z2s27C7WuuqW4rnNC8pZLyX",
  "key14": "42UhdzqoEKhkNLjKBCQLvijjj4EGcPR7QH2oc1LtQVaYWP5GgMCRT1dnXdN7fctDGRtpoC8PeqtvhPtaXqX5uZTD",
  "key15": "3jwQHLewsvNHfgkPfg7C4pdugqnZ1yeJ9hPZBrpnWs2GZrPKL2tVnDA5E3gTZLeWisUDwNiSqhSPimPyxRbewbtX",
  "key16": "57PQbq5kTAzCUv9FXgEw74ScxHKXcq4sEhB45N6nvbtMr2PmCsY7CEBJEhLDtNzNnU2HeyGLQ1rcZ3HQT2L4A4kF",
  "key17": "3snHm1KF12qr1uibcedDyNL1CPqRFfAiFQvXBsbqbBWUKyhbCoeajc3JQNBFs7JWnx2ze69wt1Zosr8Wj1NnnSLa",
  "key18": "4pK1MJcGi62FpkV5K884chjod6SzSCwQ9twTySnUb6jHK2AWRTK5qqAvGAQDXo7ok8fStxkdmxAFx4CosZDjv268",
  "key19": "4w9D7hsVXVGtM621qKnUdHY35ovK4VRUbzwEkQG2E9vRdVdwwEKq8TgM3eVg79qJjQQtgVQ5A79bXVtQCSeAM2hD",
  "key20": "2iv9emfUTML177kVpAD7pHJYH1om9ytiVuLXuKKdLfL79b4Cz5yArNgpZtPEZGhYUL4LfhqB2UtwdVumhEbsxjRA",
  "key21": "2PrfP8HN11EvTK1AgBmMZTZw8XEKXaXxcQZQGgCKcsFPJorAVbqSoQCxzp7MYM1U4GASiLBUhTL8Bf2fMhbY1BBe",
  "key22": "EpkCagR1eW6Rq7uEyYJAHwsRMb8yXSXWvAUSMU6EyTKuLozMsAqxSL6gR5stQzCJeQU76EHxcwEkEodCeAXqqxN",
  "key23": "2PBegXLgqKP7ZuJfb3WNSXNENC5zVN8w5A2q3ceKJQCP1yve8w6DL8XF2dV7q2bq37oMtwdA7sMCsb7osaKYoQ5m",
  "key24": "mXDToDkPk7mQ4cdbWr7nVWVNs3rDXuTgC9pFpEX5MgcXLsMo17LsLszjiurdLo2fzjBDkrxur3CzfxuPqEHPwT6"
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
