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
    "cwYFtkEkKthWu5nhsVH3Bi7he7fHic6LCKJoTbTz9YP6g3kJv3Cx8yhEp9YUa3njpfHoWfCmHir6bWfQffYmQPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7UWREc36kx7afr1JEgZxVJ3ZXZJ2YW12BWCTAkcs2DofBb7xt1Ktv21y5Vs1nXjPiV7LftaRLxNNvdEXxmaj8y",
  "key1": "ML5KSJBZk8LgyASKvfXR94j3BVW2a5idQVQx2nqxsQ3yVBbgDjkfvtj1XaKpethXFQq4A3epA3sWhoDApRRhxBD",
  "key2": "2k25bZsKCKRPVY5PSoaSfp6ufWYSkJgbod9VhVeZdKp2MP6LtkyXPXSw5J44ohjUTtEkAoahedusoszMG2bfJyov",
  "key3": "22ra6S6wNJ9vjYjibEkLvP8LBx3AE1o6xviezXFLqm3ugRiYVebzmtZaMFvgJEN6vKGzzKJ89L6m46HnZNuCFk7Y",
  "key4": "cpbbaBcG2iBqJPdQ6H94WuR44Kk5Apz6piEcXjUS93LxyvkXK9z8XY5pKFKkSZiJru8dWV5Nbv9bm85k44rgR1S",
  "key5": "2SSyARdqJtoadZRBJDekBzoERjpTSMKDmF41ou2GzgjuEhfdSiLf1KABMXAHZQBzPhzKGxyLs5CWkB7AN7y16EkR",
  "key6": "5KjJ6hVT413DSvRAcVEksL72sQtvEiu2fb943vaYMzcnPM6gZ6X2xPLmybSm8JS2Tzt9NrmP8C9PhtLW9JX4bzpq",
  "key7": "3mXz79tJovViXn6728kFtBe8AdcrqCdkjnKREz1TgByXBgo6v4GA5NFYh3ezejmRxH33LNf7hW2LPXNHyGAFzgCE",
  "key8": "46gebKQ43yk1xFgJYpuwCLfi2ohGnHP5EunETBGgky8a3SrgRXV7VyyxgkeAqXrbhZ4h4jLFz4zpLt3nx5ovrfRE",
  "key9": "61Vxz18tmQ8iUxc3LzA4rpYM3ZAsXYM3jfsStBEHpGVM6jPnvdPf66buDBfRVz15B1VMGU6FzSoLF3FT5TQ7tk93",
  "key10": "4ehJ1c4JG6oSTBc6wNwB3RvDbN9BomBjB5kqN92rVG1JJcAtqdi8QbAyhTtcdcWpXiVyse9k1LSU7FvDTvEzW5oP",
  "key11": "f3HLKY5sUHEBPDGSU1Zjt1F74UQagJQcaRjASKn7Utjr2gZapSThxt7WYW1RVBWEKoLPrEGnvA26SLmmXd3WGX3",
  "key12": "5XMqLJW8faLs9eGS5DJtvL94jU18tmacnT8m5HWfbJaX7D2bksECCtXia3WCrh6hV5ESi8CRin6xQzE1yyaHWKkC",
  "key13": "3NStdQFGWQ4gq8Ho8KFSTb8Kgpn1jcdYd5D7P8ypsz8TUZZVDk9EFUryp4G6dyf1vHR3rmWwNXsCgitsNN43YftV",
  "key14": "25sDhMuR37ncUT3eE7saKPhZ9uT8B4RPXCmTPDUm565fEC6FRfmnFv1SSRDJpM7u1Lxd4m9xYwvJaM4go8YYtdjQ",
  "key15": "4bmNnA9E38LMiCLA5FgwjNNVELDWLbrxzRGyLv7HW8Wc9mRfDRMSMSk2CKdBNZ9UreBnbkJdMFCzrM3fm1mvP9X4",
  "key16": "3kAo9ZfuwK5vfKoNRmkRRKYpEcosLiFr1kXH2ysDXK5qiJPEH9k7LdTUbDXyrHMD5Y68C4JH9HCaetDkEtpMda4P",
  "key17": "4oR5L8Vc9RPcnc9WPJsCdFx7nwjAsRcbaTVCCHhaEbhCdorTyD3dW8yQ6b99AtB8BMDZoUbje7yMbuR7WNS3Fyur",
  "key18": "3Kx2Vdt1E8pqyxnVc9VoTRqqAKddEEKJo64iAQJXAHQwekwW1dtCYwTbJP1o51W1op7vNb9GTGZovMehogu1ZBLw",
  "key19": "yAMS5wTpkT8mDDScRUHpBs1tRaczcatSDChz2nUyFnY6e11gzDBhUioUNqWz7pECSN6XyVkzoPM5RuYk7pp1Pmc",
  "key20": "4an9UcKTghFKXX4bVUR633xK736VaNATd3mAck9PiDfY7HMab6vYwwYGJvgbj2q3GqP7n4s3yT9ScxdHVV7JSmX1",
  "key21": "3HJMJ28yQNFHNFYs5x7ydnRgxHZst1MTyqefTXLF7yoCBZMMzZ9yMA1Pmp2ufKc3qVGCPdTzGXtiMyMfTYUqC1ME",
  "key22": "3NqPSdeL15fJUGzYwhpSf8qY8EGtD8faCHYMvRwnDmquBEwSdzPRF7cs1SpuGuLFe6ZQSudcfSer96hCViVG5dEU",
  "key23": "3sPQc2Mpr9fP7LC6ptAtWy3YhJhoxGzbrYn369j3QiFQFXv51PAv85jRnhEwMbXhXZSwgoz2wLoLkXy2JbD5G7c3",
  "key24": "5WALica1HwYksnK9Gc8ZnfUGRufv61NFXjd6odwCdzTfzfqFBPkNLWtzmWXKog5a5oSZWXvgxuM6E2cMEPwqGkPo",
  "key25": "2abTP1dXnLFy1aUVFvqxKtLVkqXs7vzrgvqY8NjUZLt2ejWd6VSG4m75zFQfErtyW5nDjkSxjcr5LUWKYGKnmiSa",
  "key26": "2EA7DjNyGdRiherXSvgVRZaFskQokN1zoMmrvt6AtNJB7W8UcJ9uBoHCHsoyQ2iGsYFnCHA5HFx9gmgUcBgnTCYK",
  "key27": "2dFVtdbqc5HnShjsv54JJnfZcrX9QbPEHmRFnRAus98R36pu9BZ2q8viSWRfHk362YPRm1rKP2S4Q1NVk69Z7BfZ",
  "key28": "2T4FH1VunB7kR89cKQnHcuU2njVyG2NVr43rADKPcL1K4H6xWwV6TCpG6tPPSRxKDSiMhMxzDHQFtn1b3Vp1QqqL",
  "key29": "gTniH2obt1uQ7q6mEWQeRXSQdxq2meo5EemqZuiFeddtxGxnpUzJ3mfKCywb1XXY2QLz7VgekT43KADiReNogJr"
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
