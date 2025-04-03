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
    "62z1BkusyK2AEWk9Z38K1P1FKYLhrNx2sQSg2RXuFhnk7Dk794RkYwEyAGSxsDVzqRFPpM2Ya3uogFcCXwvQj65H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YEkzMWM6zcLVoxXnBb4hcRHgSUHHuE7VwYCQW5fdnho4ag55aJ3x8i87qWdoNTmhyfDYi4AaieTC6obBAH9ZsGY",
  "key1": "2ZywkpxLsG1c4PHVXYZoLnVmxruUBFYuvq3QeSnicN5pw2iDxYA7mtPfJWaQwLKCsAD5gewh8TTzYo9yqyMCrnJx",
  "key2": "26aZRoUUNfNQXBDapHXnQhRrYG7JekJHh7aLySKzzsc2dhFHXsEbbAQak99zdSamAZkWWw8WNxdGxFMtAsYSbe9W",
  "key3": "43BYuCUDuZwuFiY3oaKBDFBcEyha6kniu4JvxptzuiwFkhHtTwuVqzLtt7Q16PUdtACZcUS58xvft6iC8h8S4mDz",
  "key4": "2NCB66JwR6FrGNre3r2Z4u6y9CFqntWnV5tQB1NzLY8eoqFKn4XmJJosxUxPsCVGVd5FYjoaJETcSKwkWKtKexmv",
  "key5": "31AfxrAsbwYerHXtBW7o953mJHPdpoWMacFenbN9Ys4pLp7gjXSb13GoKmNVoDN4KHmrGdSVLhUucRL8xYNypTJR",
  "key6": "XGRnyda57Utrmu7DVW5YvNvARD2CiCCxx2J6mASQg9ij9v1MmEnMLeVPYsnBLbzg2PPSRHJcy7SkS9k6zc6erRW",
  "key7": "AvHFJ2wyCQyfb155FKC1vUWBgJKiaJwHRJCdLaS5MUj9NEBz9pfk14P5jm6V5VQU5YMYoSAFQB9a5oycFQFCKYD",
  "key8": "2kqjFcCmNbqKN8Sq6y7b1jsDQaVAW9xR8SY4ETXgHLZS7NUgbSVWbTa5BFaEAQPCLoPfPSFbtDd2hW1mPF142Bgo",
  "key9": "24E4vrzhvNTEKrZq951asEF8p7YSojUn8UGJtHKtWVCqpUJcxuepRvt9zGb9xQbEmfWg3FqVrRcn4Y7WwQmLkGP5",
  "key10": "45oMfUqT1kEwNcHbzWRfFGZb4jPQeESP54BstBFhJe4s3tuQpNeCndDszN4nJhwrVGiJTbJ7HJqoY2Djckkw2dtB",
  "key11": "353CGgp5UAGawZgzFnAaVrc6DTCWq5GTXcovQLiZxVEPGqqdQKd9SbKeFzBXyqXW2qxU5RuGG8Rp8Hwk5W7craXM",
  "key12": "2QAEMXpjxdpLc9dkn3noHqwX4pQWifmnLbYxM1114GmFj68DxTUwnerzUtRkskT5ZdFTqny1MjsRpJ8bWy5f8Xxq",
  "key13": "5nBZtLiEc9LDWmm5KsENTsCppUkuZoN1iTVPR8uxgxzEYRqTqjopfXt9vGjpWEU4a6i6CKcfP2pArDuKHSdNMyvG",
  "key14": "3EHj2PypFEoDM4nJ7XStKK3VQcFV9prAG1WBaTeowPoMzWNw4P7N1yMjzkrsctrbmhg6jdaNtA9fUVFHjPWgaVma",
  "key15": "4H4V8yYkdmZKcmXLTYeEnB2PgnYzBRhPPocig5KtuoN34kqi6QUc8WCW6jgCwvuTAbdbfY8T1HdxgeCD2sKP4yWU",
  "key16": "2tSNXonB4ww5WAS4vapX2wc1suWc8CMywCd3kLARtkQPJ3PenjguZwYjG31pdGQKhqyCNNbQ5BkVaQYxcNU1ekCJ",
  "key17": "TyEHrVSeZMPUm7QpFg9rXL1nZJKTcpUdUgWcdCGvxxVWoEfUkhvdzjpAQkZb6oW3zGjfQNHDdKky3hRA7J8YDop",
  "key18": "2jFfUbf2bs8Uwrd8vKsdkrCQY5yzS7snz9LMVosURWUs8C1fUGnQu3WK8guW1SqSY5uFM22gvZfKnbuwKVUSGWvZ",
  "key19": "5BKgJhN42s4QucC5GCaaHieitok3rJRtRZQbYp9kSdeYtySrJE6p34WJ5k9xhvV9y4BfZcKht2uAXr8Q2dz19S5Y",
  "key20": "3rEuK8g7kUkjyuu5PJxHfCbgqAJ3aRkBtP8VvscpjR3n3qt7G5C1NUy7PwcmGmCEvo1TF16zuiqC2ngJjeY8fT2c",
  "key21": "WEKx2BxJ6fuTpeK5SPKnMpgM5cXV2JuimdTtkQSLC1A5pBucW3jKjK8FEuY1aFkFZfbrJRkB4tv5D8bP2GJECsi",
  "key22": "FuTT7LjoRd478SWEpFMiTCF3ssRh8EAaXKJvNyAsQe2Mo1KkkhizycvJaFbouWhBAvreoNwGgrmeq2FEh1NQRNJ",
  "key23": "5ioeiBZNysDKbR4acmkZCitAUW86nAMMBGnKcpy42P8jymsqfK9qQuPVhbYeZ4PnZDMuoyoufxGsPKG7oDFr3VBe",
  "key24": "32w9h9HTzVBeUG43jRfmhXEjBF78jYmHXXw5f1kLBeR5XNgXSJcnDvSKntCUHPmjKm7ZQVVLAk4SMHnLJcrUqWJ6",
  "key25": "5HvtmkqDJTx5LMnRLgoFvA3KGV3AJJmkkLx5y4VApB3QAVLD6ohCpCNv2pYbgJhNGhTiSwWSvW7GaEMX3aGApMGL",
  "key26": "5RsqgmrjyL1DpBMyZLmVbjRUy8UcVz8tgJuN3MHuFXGt2gZcZBeend2xvex813ped9vmnBeyfqFoKNmSHspBTeeX"
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
