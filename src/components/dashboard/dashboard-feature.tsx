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
    "2PxpnUsZ1Q9EbMTwn76gWGw7PcBerLLuqsxbgssVThuHadEe9VjHUv9toFTXKGabXVAbWm9simtf5VGn32bP9ZDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yuHrthUAdHYpUUkmf9eKkp8yLsJdxE6c7Vku6YLKuxzBiTTFKaBDCBWNdrMA8UE9vebnQAmTyW79K1BSFK6zcXk",
  "key1": "AGHgxgsYG24hCAJq5Wng8Tffo6Aw4Abob2je8ySFRuQnaMtcuzP5EBdmERQqd3mKWbNUwnve11P28v71ZSiepTu",
  "key2": "4YYC3ryvPRSqkUDeKttZbUvdQDBEP2KM68vJdxaxtf9qzcmCx6VFAVbLbfuLucPoX6hAyyW1UbPWm3XGce8ndZib",
  "key3": "3dgxPhjwHqZfH1GuE99sAPzCbvMFBtY76qPhnKxuwoe8qfu66dpPseX4bJHtz9gLRCmv2bDyQXgCpzK8dEQxCEy3",
  "key4": "5wxug6mWo6BVkwNJw7obVqo8UHZwjyJHFy239mQT4GjgRcnbuCuEoXm75WoBHWMnKqGdFzQqSK4zqAFVVVQEnstT",
  "key5": "4iLG2JGdRLvq6832NEhHYCurs8j7bGiG6u6oDAzHdMkpQmfTFq7K7X1U8r64vUFUnwVCS9ATvsxzktFvdeoDyUM7",
  "key6": "3hdA6FSRzgNQYAU4s3Tp1zqR9maZ5x1wd1Pj1cVbSUQ7jVHvNfCvDtghyFJAV3j5ibjryxc9ct9zwFpYNR9Ago3N",
  "key7": "2m9b6cUVekMgffHHCn3goxkQveCxh4EC9t7BXosU9ptSL4eSEHupbwVbpfyDGL4oQsBBd1DJm3y8WmQm6fmiLcmW",
  "key8": "4VHxKpZXPaeYvmGFWQKpSf2EAP97bFY8xCY3SMYMeYrYdUGYopzWScKrA6xUTz9Soxp4qZsbQh3MMHB8aabmFoE6",
  "key9": "2XmM6FfwkodjKGBj55xSRyUwB2EEMXCRhUF2QvgewNDiMdcn1fdsdgb1ZPPDvChgLx7gViAkQLETEHRmT7zXzeej",
  "key10": "2M5S9pX1WhKDw2Zfmra1mPativ7SQh3NibYc6MuwZRsaivyZ488CCaWUjV4JmwX4fTob3HVhBa68xL8NBoM4fKPq",
  "key11": "49tU8g3tL9NnSYFTaZbJiwuZ9wSWoe8jneeGHjGYJ6eVx8NJEq2DA8poxFzKgPmMUQZJKQa2dxvbKQh1uyGSuV9X",
  "key12": "34GtrJVfyamm6NKhUKhbGYLhXxZv5BeW25tCQSK6SbA5AMcgjFrANBahiV2BBL9xBx8SW9Sp2A1JKqjHFqHhK78S",
  "key13": "42h78Ku18NZb7wnYma4145RwWnJwQ5serivAB9nSDpJVxikYss7syY3HXF31L8TPLHJJmQZiJqFEFfxuHR686QBj",
  "key14": "4k4vBpdRUMRWjdqimp57tG1RYAS77WQt56HnX5uHhuwp8GZtYqEeE2QhAsUoGMhFh8EC96AqTAEQPiwVxsSJNAJK",
  "key15": "4kwKeD2ZxzXvuMyAs7iatj8usU2QcRLDGwG3RAsY73fLrAAi4o4tw2QF7kAVCCEmqG4w74eKmXFvHxSuNKF7jYpE",
  "key16": "3VabH9WqTzqcMghrwRKThrUeTPN3PD21auhdYAi9aCAk1LiKpPTQceVUgGM43DfzEVDwkCopbBJCvAKPRDY2nhWJ",
  "key17": "4F49osGEvnC7k4n1NRmFwuYvdqCzJWkJCG1KQ3Bn7Q7KWGojH9PuwVZ53PHn6416dX1LJXevtrXXD46FZb2xkmY6",
  "key18": "37sSw12vUPegZBoJrDETrSS5bcd4Esmf55xdFY3fg6ceUhPvdGhiA2Q9Ep5DHhwkMnP9M97zKeUiRUhoA8BJVemU",
  "key19": "4dt127azT6MqXuTMoqEJKCQHnLSgrLY5VxZ66KCqqK8zCacbxUvrPYi2HHn3rioHngmCSzpt8vM8ZV3NrThaegc8",
  "key20": "4HTBB7BzPEsooYRdMk6bCiZVm9ZtNxPukiFCaE7nGyTG5jwtn5UYcDvAzdHtDtEd8HqtsB9DZEyY9ytZJhQ5fuGt",
  "key21": "5XuThd6GVY4bjmqV8U7WNhiHC9QCEvbFtkc8H8MrsxFLak98XhNkB6VkqdTnh3es5T6xAWfPEgep43mkbxHCV53c",
  "key22": "5UrWuNhU8J9ZXHn7ePw6EAXtb7SGCGjLvCB8UZHYPme9CBNU55oLTWKksmrxpvVGM3cyqJSijSbktMWJtsgFN3am",
  "key23": "UQF2PvsGbXQHZVDLJfGXoJH3TJ23aehPrgkLSEDDMtCvKStFBL1nG2fJdqm7f6Gwk3mQYXydSkvxJLYoMg49YfQ",
  "key24": "1Hza58BrkWZJPmARnHVrmcNtey2CNLqbKfsf5VAadCBG5TZsg2bnKgkTLSjAQcFYpNjnYKM8MaF6UeS8DqyHVFB"
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
