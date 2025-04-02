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
    "3ADrEBRWrAzrEUk4exuiPpyBbLmP8eo4C2dav5ezVvKRCyvs1MxrTAMDjTW5VE5tUjeqnC8SFaRu8TgntXNJPoQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49byg1ZhoH1q8Qd7C7oFsxPnSuywBMoUo5t4UHrejBZkKinQSB33Z4JeCfS1Wi8Mwt7bJH2AhM4KKRmQXvgj2mYd",
  "key1": "3rNXY86voKgbHSJV1xnHpDNM1EQRjWju25pyuGRA3f5m2EMb5NRoPDNGFovEYYG8y43qeDDvcerBDhh4q4KBXp9g",
  "key2": "UvNg49VNDcjax7bhHdmPRGktn1Luxnuz8TPUrSJ6xFpaiLXaxvJnPZS2DnfxvHT4i6futyzGpzTDfsGZirqiZJA",
  "key3": "4hbUBv8UYAbfYPHZJ3bTGLqTDv3qrUFVL5vhZvmcov7AsuspmeKnqo8GcTJE7oyqRxbKLh8w743ry9cjsQMAJ141",
  "key4": "5UuQ5AWRVvXJHTLHjprKoohnyye83pUc1mwz3srgjus7tgrzRxgLtZTv1uxdkAzR8z6xX4UxoKc6uPfRr7y5CyMM",
  "key5": "2ukSRs72wV4rCxx2mutngxBXHS4CufjsfWn8F9ycUzdFexZqWFUPAoJHdZtmNDbESkajkqwM5MziBi1kB6W1qbR8",
  "key6": "8wByuTSZV3xNMEQVd8PUv3FbgXXruS4L14X4p7gDqdaBvq3GY24TfAAiXjcrk8zF8pysx1j2BbnSUm8GzS1bycN",
  "key7": "4aVC3eotGz2ArbPudZveyHZGYUp1pNVsJzXQVfdFdKeH3VsAj5fNJNLT8zAaVBSNtXiDzntUTM7gqcmAyrQQHDYN",
  "key8": "2XBAYqzBLvaKoreGWLYcyjXdH8TxRmxbq6tppmLFEdS9J8BQnmPg69XjhrYhBHqu7PpQVEJcWAoLU7ir8riJTwxs",
  "key9": "aSdM1nVAKenBD6hnuHn4Mi9fV3G5LxVvcxcHuoQaegiorm74veLPbxf4hAiucQuw82aqHSqCSkWjjKUrwNPkruJ",
  "key10": "3Ua85NjtrfzAK2xUTLan4UtuLThmTyFm7r5fhcYWhpFJKdFwT7fNdWkbNa6fi1T1HZDpoPBJMHae4r1YsZhZ3HGn",
  "key11": "VAkFuNEayCi7ir1T7HYFL3S5ZQVGzwHmBAfK99pki4qR6QB9M24Ke6qRDqr8RTVGqaxUBZvQhRm5swB9gTTqYKz",
  "key12": "3Buud85akWmjottArLHTj25XjdD4M8PnNzWWVoNdwRbeVn1a44Za7yDgQyL5EybyuuTHoP4nGrgsqH4qRD1UJJR9",
  "key13": "4tHBPKGh93KXa4zrEovEivgfW5JxsL38uRAFEzoPdGsqe9NeyzLVDNR9YTcYHttuZfJyyeE1xjJoJ8Rsf2Q7ozbv",
  "key14": "27dZHx6q5B2yRYvpDBiLhBJBdsFLzDUwsw5LB9c7G3UgjuubJeNCneQbJ7TZ9e6khbv7Rx4mfy9bppd7Kk4FjTRy",
  "key15": "2vW8nTgehoDX4wjVbHms6JsiRSNCkbRZJ1YyXNp29t7zReJwoMBoziGYujqPy9eJmGsS8rY7ekYEja2vDPLxAwwz",
  "key16": "bwDS59JF4pwDxcjkbW48t6YTyUXqgRDrfXiSqkQ9cAZuynpwvSiJNvkgnbGh3cw7Psh4gCHn5CDNTS1PD3Bzk3W",
  "key17": "Gywj3FChXXfpQ8xLqM5G3bDvkWY33L4VZmWJSjH8bNrc1RKdx8J8Mj9BipMtFWesCSeeko4YbQpWtt8Jm6osZ7M",
  "key18": "5i4yXKvdpMUaeujgxifymaN9SJyJKR1PfuvGBCw4c2P7ExuFmhvUDagBSTSW9DxDMhUkk5aLLsHyDRsk6rNX3yjM",
  "key19": "3j3eLqQDjcr7yzvydb97XKZeTG6yyc27DBQTsBeKdz8qBZ8vaqPVndC3TCU66X44uLNtPV4wyvVUiVzgsYAPaxWB",
  "key20": "4PE3z5S7sVLGsX5uZhECHY3E6itADs76y1dPZQPAYpW9iptBgkPJyQD8929yhwzG5tt5bvc5drgiN5FNMdFhCUov",
  "key21": "GHg1so56S2Qq887cXemzv79cS2QPFmPRX49mxFmQHW8jDvsJn1givuX1rpUGXk4f1EPhBGxXGeWn9zgyV3Nc2SC",
  "key22": "575SHXHdbzytqc6pj5z2V2YM3ViRfrigv3aKLqYnYd4VpPPZHAGvNMhWdnq6Uijm25NX3NZWnnkCDAGvv3fnD7mQ",
  "key23": "46YDgCTqdRb877wvFySmvmbVxtJoXy17QJLKscnmLKybFZb2AoeXHKzCbMJonXgd5kUyhQ41mamCK8XwankwT4Vx",
  "key24": "38rGbKyPJMJUPG5m34EPz7nwVrYa4ysmsgB9paQ9DHMbaqcmjuGsgLWWr4c7z2ttUz4t3sQRxaSbcvf6rpkhYeUq",
  "key25": "51QqGdFMaZRTvV3kFTFs1fx89Ec5H7SArvpB7AR1pewMxFbAj13hFKyxJTXdKH2ZkGcS4AYGSUWw3RynsSiSVgUY",
  "key26": "3NBmXcjR1Srpfd2jPvrurtv7eVQcFti5fXJEUKGiQW98Uvp6amBLP46oH9RUpAF9eSp7K2q8bTs4AqN9GgQKg2SK"
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
