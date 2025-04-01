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
    "5f4NY2pm9oBdXFqqFnK5xi3PT3fx6N9y8HhdTUBTdvWwuUZRLim1fZtmTPYDkRLUw51g4dwh8NDCEbAog2W8Cr5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gESxfWHXHqkgfNidc9hJ16VTubZtqZDkqhCnE6KAtDzA86cQmLuHzuLfSJB6hcxUuSRDnvP2WXYkZtPmkzpRiAm",
  "key1": "3meKoDFp8NLhdx4ucTxCELXMqsZve2N3BzG4bQbSEyneGiY5E5i4qxCNq62hjoxbwToLqV6eG7YJ2tBJ6DRHZvLc",
  "key2": "4M9ZSY5tJxu6FiznAwS3ub2XHarJh4zQRwYN9T5QKGF21bttSLPg6UqLdQzGxGPiLXwZf958Hr2sBpt4dXeMfur3",
  "key3": "5m1EHHnJhYmfai1NeybucrA5kMNSwif2de2rvnVdpMNppMvDgYxfPv97ieZGmS9jcHsHVfdKgBe4FXiJyREBi4Xm",
  "key4": "3s6LQ8NUDGHb4T4YEt63GiHNP1N7Dt9YZmwMaMhh5c2Ci3wkLvBCq2VFrUUNt6Eu775SaaksrgnwYDmEpWi4eqPH",
  "key5": "3qSZC99krVFnTTT2qDqYvrtPgecuA1TDzMb79GC5rpD3jDcfjtUrPdM1k6s1KpfkoZPAZUmBTTKwkwycTeGiR5hT",
  "key6": "xXCsVoUQsjjjUUkHnDZXNWoAUdEwSFdbXWH4VPD4u7yxh7iMGfPLqRxQnBpqmsLXfF7uq3hbpka6RMs4TBXcPq8",
  "key7": "2U9n29o2vNvxTAHC8TZmEg8KSqSovCCRZG24JWJJxJdCH9CfZs4kFi6ZUAdhWi45ukCPN7bS1XEUAZFBq42zcHSv",
  "key8": "2xbjh9aE2RRc5hcRo7Dn2Gc7BKfjbayxcM1iArXgmkvJCoXMDQ39n6VGPNNGU96R2CWzuyAmcbVevwm4s8TBQcai",
  "key9": "3iNcQvFaVJ2nZq9io3f2waC5ALTwG3EXjvJVGHKtc9aeAuoPhrx9HVpaUZq3wn35eDB3wnxfXzjKCiRMmrHmzjSC",
  "key10": "4mdetqLXUjVrQwFFqtSV6aZMZt3L1V856yGBY4EtNHK9vyhFvgbhGWeEpnXfkjuXA8tHGCzqJuCLz3AEbCYkuY18",
  "key11": "2HMKfMbzrazidEDoGivv8sHN9pSfvcKnst7RqPJuRDPt9Mbg5dArVWfXH4161j145X39pKmXqLLtunA2q5oh43jk",
  "key12": "4YAhUBavBG7jQ4ceuxtEZTijeAHgYZBJT2cREFJWb8NTZFMS1KNfZei9inCUakoYwBx4a3cEf4WFKkp6htebm2UN",
  "key13": "2sRK6UKkjB7BDDoXvApDV5aMDR6Ph5zHsYXqkP5HNdG8rAAdoA2QE6j4Z1p8QKvG5T6yVKddxQBLFRaDPrRsET7y",
  "key14": "5XbEt5Ewd9CampPWDCP9W1HYJy3r35vsw2UhbuAJDAjjVu2y1o7rHtv8GqC2Ki5Ax9orSyaBhgZALZDEcGGX4LZA",
  "key15": "4nHbxCsULJCDEWDL83TUMzSU423vvp8R8421TCVm6SDfa5xsCsFQAzLpmtpweUC7y9imvgkTk7a5VCwsb6FnfZFT",
  "key16": "2aQhPng23H8gEM72yUSHV1Z4XGRgpwcdbuzHkdNiiBrAK4KbwaoKtDbbFZv7VTnWXJhtzQqfJZTshecqjhBUnCWj",
  "key17": "2FXSghxgE9mqCRtqggWChYmNNA7KsgUasJKcoYLromg7Uzi51GC2kEkyPwnYXDsCQPPD9Q4cwVrovPftG7E24Bci",
  "key18": "VZSGqp5ZYbxHDLWmgswXWZv27S9bZe2suhG6CUCo7D7d4p9p13nR1y9bYFiwPbp4nAkgSYUvKbyySF5MMvWC3Aa",
  "key19": "3nNHksAbGhDxCm7W7f2iUcumBWv8LDMkUaecmyov5uTt3wmUMwhYH98hjta1RPtVQvnQkMzbts63MaPR5VvceAi8",
  "key20": "4eaUij47GmzERE9vUtWepKsEQAC4b7eXS5xNmzRFAexkVfzMCDHv5cFFGon4Nav2CRkYr1cDxcmJJsfbFRZbCd3D",
  "key21": "3tkvgWnxK8XoqCKtBvLNgRiR9BphQwghXCjBir2BRT4qyuiSYoxsmEnU78L1VrjaLtgBUdzdXRtqz4eEoHzBEvgH",
  "key22": "3MNCstiNU6aSJsFxpiRKgXpqniTnfYMqm2BvLBtHq5Zc6bJjhoXwHghtPrUNSndsjHk2eNdg49t36ExQzARQpTDv",
  "key23": "2NASbbkaiyBNmxzMb9rowZitBjTsbH92WPoAMqcaY2ZPC8HFDhjWseizas7mMgAQRNSnoKTRyECr2PKxijQUJ3kD",
  "key24": "33kKjrTUYS8mEn4gsTq3KKg9PEr4LLz3GUfz99NYeUiVifrjMF4pTDUqoeP383YgR7NMBwNotDrwBew5jQv8mWfz"
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
