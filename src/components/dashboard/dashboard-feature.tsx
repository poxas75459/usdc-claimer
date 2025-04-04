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
    "3d4NeiquwBL29NrDNFngXNL1ourwAHLGSxS9HJtWjmw3yS5V5yyqYN1t1XyGg9mVJXuR3b7cdCDAtK3bXLVhLZB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PtxbTSyWiXkipJgp2N7fQsnkrHcJseoNjCqXTZfE8zM9CZCHbA59gtTyDJa9z9taEFayRfYDchHDYa6aiLZJ9un",
  "key1": "4rrTSQSifa6oMS6CyprKBRnpKBBaqSRqECB1n5Mtx4FHg2Cek2uM2SoZhAorQ2RDNBmuuGrgfaR9gGwA6vqrFZcA",
  "key2": "5BYkoUwAzR2XJbcxAunjC5cbB7czMm7Rv2w2i1EHXcBFZH2ykEhgdqbCi2yiaLZnBsqoURrAvPJ6FJV1rz3Eqp5R",
  "key3": "5HiFiuacnsyAigayv1YJ83nFH1aPXWUEL1m6xRU4u5mU3c6PpKgrz29px6xBNiG3cUaPYqtrezpufbNN9V9QHeW9",
  "key4": "5oRZ3L3aBPKBQ4D4FFV5xh3V7kKZPiWy9hAMTcSz9rwYCjxo2sqd6BCXEjGszAU5PPnDFckRRH8K7jwNNmVq1A5W",
  "key5": "cah31VLiBkmXC2XPkMHUAQwBhtQ2k2LzLaV51NNepMYRK43Fnz1bvD5mYmkQNPLcozPzfAaH1VU9gP9K4peY6Gd",
  "key6": "9ke6xooALkvA1gV99rM5PpicYzPTnURz9i9nYPsrnRPxtV8hQjzqQoWYz7ApiZm8SJozwQeBGeDpTNPyqXoFe7x",
  "key7": "435azZwgLD6oKDX5U3BddMAbz56CEfSE226Pdj3Asdpf6VaDU4jgL98tDiaZLYspZ1burQff4FrT3wGoaVLCcvPx",
  "key8": "3yJx31vo7F5LKh2Yvt25SAyuw68GZYH81ghCXABvkiGX7KgYfVnpfsJaEoeWLLd5pgJSGBSziA3znBZHEWFbjUq4",
  "key9": "2tJdQBiLFKaUhfv5unaEc8nWYVMrLmoQksKKphwtu9q9AKdgxqKfY2fRpSVstWgi96WfsjghPdBjdyswoLWjQtA7",
  "key10": "3jfQdxbjW1hP2jt74zBK93yMmYgzDoBWmVdGC2iRg7cX7uNg9orwEs3ywqhGaNdyhkqgoqGmiPZvwNfTpxp1HxZS",
  "key11": "3kahj7R6duYMcgtfdGkuXJGjCe6ac9nS9FKRLzwL3VdRVqw2VNW2JojFPHqXMaJPGrL8hwCBGdY7RVmDbRZkUjuw",
  "key12": "2eiN17VsuAfrHsMt9EnDGtZCZToyZyZfdbyCCa2iRGRcxVQkcyQnD3ayCjYZMpPwBEryohHKk3P8S7GiCshw3zRZ",
  "key13": "2rHeu6sKcMZ5Ec1UyUYMuqMHwjBg866ecrHrtzk4aHHJvtdY4THxPG6MsHbDHMNPTmg5j93vwxHaVHuFPt9iCjjg",
  "key14": "5CyNqLGtJ23RkZVW1RvkMp8NKnGYBzMc3DupcFkJNFpWKiTBTBDZweap2psp7BT6AWoXaWMGpATHtLbCwRip1aE6",
  "key15": "3MfsT5XKhGtiHFuD5gUEvvzfMvMqTEeNjXV89BQB6sAz8WSZa2pGK9ndKk3dhniaXto2CxDVhWv6We1rekwqhuYw",
  "key16": "2Dc3dYE3rLVaVYTxzVLKF4MouxDzhCX9pmS8eaDDDnGk3DoBf6p4xvHhdG7i4JqxdTCJXYqTwTo9ko8erGxkLdAr",
  "key17": "4erpWfquc1B2cyra3kGcvpdDJgmsbeq5P7i9wuwcVnQKJD3TC8bB9S2zomihnGacYJxMHsQXfJYWRq3gJ91y9ACH",
  "key18": "2oQjz3HobdkUGgnARqTt8fTS6sqAhR8ebTgVi1GSkYs9t1yvHmLNFvpNqXn8Wmf17wxgXVfQGVfe1bP8Kub5oCnE",
  "key19": "5zuVfa35HTysDbvNDvyxyPU6NjpgjPxWe3QcLJErBHuunHHQRnDpraseis2dyDwcEXevYpjnK4tvq96ToTDRviLV",
  "key20": "2X1f5kaVZzbMuhNg1J4Bu926GS1vvy7dsXADUnu2wSv39YN8xBrB54hdxqSfCmaehQ6FbLwAiVXdX7p8gMrpAPt7",
  "key21": "55jhzPsFMHFreUrFf2wsZzF92bRCaRHh4XrsgdEPwEB2CMC4SGChdAKdsKZtb1bsCsNjHeeM8XXxrnSWmfipPNWE",
  "key22": "4eN7ACv51D4UkdxAbR3aMvar7HUu3YiiSpqu4hCTJFLpYDd7AafzWtmtpkxSC5ZKbcQrjB5RjJe2hVVe883qv5T3",
  "key23": "4FUcMqT5kvBXdiYhvvH1FNF5KZamtxMEu4L513AhtqUXge4bMNaZrw9TSi283NgMsvMkSCcmAVbTKeK7hnbYSk9C",
  "key24": "3inCCF2yCqAZ6DdfTyNayStaCDaKPhMrjqrow1f4ypeuSRZgkG6tRwX3xnXorv82yxWJ2qfa5ufra9jqqMLwZG8t",
  "key25": "3kH5wPJuvs3KcMy9inN8aEW4YyHmZSqGae9zifoLntZsjW7LdycKmFCcEQ1FfHsN4zFEusvziwYfHThM96TZXTku",
  "key26": "66S5CkFCJ7DeonybgBW2aAi8RYsycKY5j6C1bQcQCLyqM8Tat9TQFjMfxL6cts7GEtMtbUcVc5eAHBGnxWQrPZen",
  "key27": "61Br6nkNcVV76sWQM447ze8Hveo82DFCEeWMsEUZmckpew8QioZGWWxcdKsY5CNPAw7Qu5NLw6gVp4N5mte544Bd"
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
