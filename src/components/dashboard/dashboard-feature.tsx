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
    "4np7MW6JQW7AUAw9zWhG12peZu5ULZwRMHVdmcogjbDwdTDxMbL3fJ8zRkESLexfwptaHV9v7bv5fZsyqDMdQTeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1xw7Un2s1MkLGN2qQm8mTXoKtK6izrtULKC1cqYvZnTPck5VxJv3eD6zxphZ6LrBFdK6y6dHfMsmQU8cLDc18f1",
  "key1": "5gvdVPPAk1xyMUPtvZfvLeWkzUSg6bDQ9o6aZyJQ2VCWcRLTTEUC2hbvQquWjhatGhUHPjhUzE7hG93hTJR4sZdq",
  "key2": "wYte7KQXsbc59S75HU1WKPCyDWE2UWZsihKydiTRYuw2EswHMsbVeJ257ZbTFsatZrtRtaKah83RQXU7tn5qJpY",
  "key3": "2cyC4oGSa8PNH2oUFy2PPMR8T9yPNiStYNoW77SbY3FWTa4DENiNvEz5kyFVvuXNm7ZrrgdZe8RxzFCTy82g6iR9",
  "key4": "4xSqQmWjUNWi7Bc553WibcrB7RaZ4X7irskoHE3aWEBqDhL5AYDhAGTj8eTL1GW6z8175VRtWzoYUKc93oyCqa9o",
  "key5": "2qGeUBSTcnzZeUQUeV7S9zMvtDKJU5yNMqSE7MTW5JupXEg1E4xK45W5BrgS4pxJunSboyvNHs32NBjA7B73ga4X",
  "key6": "6LeDXNRFBkSokkofwNWkCEQqZffJFy2Vcxk7B5VimRL1kztWTEwRZRCqG8LreZCcGTcoQtDpWYW67oemVeb9FdV",
  "key7": "3xaJjXQw29b5Pnfm3RryCdU9tP9fFfW5vzHGhmtpTveYeEPTNcBMhxx5sSUtHDZELy7NRT6cad4umYDk4zzCzrJ1",
  "key8": "4jGroHghsqXEHxVyAJ83geXFz8PmrjnwFN92cuTn7NV2xSMtzE3jFRPRWTAsoCaJZ3sZfnUaVznYVmXP4DJCEXws",
  "key9": "2PMhsXc9TkLnLHJvMNkdLBHgL6tZ9My9afXe3sQZh6VP7nq8dTrVEjo7nAvr4p2z9Mn7ofPiiB4Y55BP3RMPGLMp",
  "key10": "4py7z9yX2nRFw1b2GsZUdPrJhQVqv3PyAowPsyrfz5dgJZecAQna3TzmsyVEo3hG6HZMWB4syPnwyuiiMEXYr9Bb",
  "key11": "5FAHqCy3yHX8PzKAi8kCbB39dk3EGGxrxvTygAxXdmcBP3KtQurRQieacMRLj1SULmDrsUGP42rLyehQgaZ3EwuF",
  "key12": "3rjribJy5BktKDf4VoEqbeNVSVjZd7aroLqr45pDoDev7ZGx3bDT3cLnq8sSYPw4RxGaDtjepaQvig7t4Xp6eDJA",
  "key13": "4wnJ39xLmwDxTZfZcp1gaLkjtanMByryv1r8DF29ZHuWdEp2c46PNnfE3dcHQN1oDqN44Vs55VdXtMhDtqGLTLiv",
  "key14": "2wSZgJQXHewvfPRNHL3QUBWhiEeM9QACBov4ACWjNuwHeNtehyuidVhoTRLd2XMFQhAUgYmrmsDVzR4WUp9WrD6o",
  "key15": "3CmZTxWixPf14SCkpArf3Fy597gbdk1P4EYoVLUUJ5vMMjKLEu7SxCuDc8Fx8cGGq8qDXNwZr47JeYML8BC6dBeA",
  "key16": "3BxgCJB29qWEkZJUckRPtErETXRJGHHtYaLBDZJdYSAHm3Q1whrgPqTm83KQ4y9BsVZq3jtXruizorQr6MCGHYsz",
  "key17": "5MZCSxQ5isw7yaZLv1HR7oR266M5JeLtaepuhdcV2zx53NmKnZnQj8z2F6SYirqLbPKo39Z1BJW3hxUuYWNombdS",
  "key18": "oquSiHBgED2UKpFMUMhBaPXvuZWaC4zo6uvnMQnNY4SfRebH1MoRoGbsAFbZBmVY6YHspCF3P5PiJjK1XnNZB5m",
  "key19": "2zZabZg1wHdTgQXtSMwWnVqy3hwZ9GRWzsSRMPdeeawLqbe3YiT4Hmx1no3JrkEqchagptFJnUeF4dTUXouZhXcc",
  "key20": "5gExrGbn6EUc8DkCLpfntGa4Az1jtBD2odBPnaTu8hcmMcy14arG4us6rSHgPmRwX3pKUwmtkBzt4NvQh3sMmggB",
  "key21": "7b5PqFRmJ7VBKYTFTB1fwC9a1hgRacLnX2v5uH9fhtfEtRSoMZxHFhDHo6sJwU8ZKZeie8MbRchUEiwTHm1KYXf",
  "key22": "3GUsVS4KqgxDZT3dstZjsjVjcKHdACe4Msp1TiN5NfuadJf4rd1CR7oZbFj472GEk7YipCEwF9zchKxQ5ixZAU1W",
  "key23": "3TrW1DH2xAK75vWLfWTtLtec9SqMN2q3Ff8XFYfjgVz8CBRXtQzqvW53AgXvocdY5vkg2rGjWjDkF9wGpTBRuFPT",
  "key24": "2qTszXURpyze9Q4EACSsarR3WmYJm4yMSCRmpQzabS4dYZCk19oirCJqgFvbL6rGMqMGHz712qiT77CxqTT7s91o",
  "key25": "Dd67rN8p3PMs6m3sBH1eW8LvEEWQ1dSsMjTnnvLgKv2nfaH1pEkTBrCQ1Q1zYWJEiMTWeCSwferQiRjUnCkMaTD"
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
