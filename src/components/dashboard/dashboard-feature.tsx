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
    "3banBH3rbZPG574twMD9V8bhviDKe2wH2JM5E3xuqebDWdB7UHBUoJDXFyKuKTH99Gz65tj2aEEud4ysNDZcRv3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QyrSfRRCjgcdMbXD8AzwwjUQN1DjT9MKyTfFf5Nb8vCZnMkrYN2JTjHVkjwNtKFRkGHtwxZaxXw3Xn7Y4tzbeSt",
  "key1": "iRYcVbgSTpPbya1fx4MasFHWdhkCxHnbVAwcnRyp7hRUih7FsSJxjmm1TKEHBZ1kPJcqHffzMAZECJ8C5p63FPo",
  "key2": "irUGoBQkPgPLvYZ1yvxamKL2W3yPNTkES9dqtgdNdq8h3Mbjqr5VGQ1cN3M3NtpoZY8zizd6z6BsfVurGEG1XvM",
  "key3": "5a1fMT4wQ7rBjVYexzeRy2Hor1ezRrRJEfYasRUooqzSrBXrffgtWCvTQn8AvzkFx7MsZNFNj4aGNKXe8GVD3765",
  "key4": "3BaJ9H4d34Cdq73YgtfLQPNRya6MxstdKULjYBLdQNAsRdGrkwojexJmXEAqDmDCvJcxzkma95BNXr6jcxGneYNU",
  "key5": "3S5CetpEuitztVGhRFK61e8NsrHaz2uTFUpiRsK2igdBJBLSdEyPnGrYDSkdtMSFbj9cjniJaYuqfvsbFqDmPqVd",
  "key6": "61UFbF8JBY4MVNk2XYtnhPePan6YebSSMsYDbvUhgbmQEtK7rnCA6YA1Nrz52q9zR2vFk5Lcncsu59eHC2FoQxPt",
  "key7": "41hd1Xe1LVAxdFgKZXNVUvNtFReRdS4dbgyA8tJxoLYX6f4oE9EXvNjWjANieowqN8thR1pUaUuTQfb59RmfLek8",
  "key8": "2555XN3UbQctBGnUjkH5wnUM5VqQnd6Fip5mdE2xAWwD6X2PP13eqt4gjf5WTcw87UFd7exdqJLGdbwCp3ztTRRs",
  "key9": "Ta1XMzmT2jGVrE7SeZuav4r3XvMEsr8Ps8331aAgzRfkaPQnk6MVaKLQADqWZDykBAqRQtCFhbDUCg73mgG3jxg",
  "key10": "3D8Gct3oE4ZRbWq1mUd36bwQntNmiLaYQCrPa3efcTNN2g3ZpoGrrBgMHrSDp3eog8KDUd3R3ocyYCdiK1QjwSgr",
  "key11": "24di8BeyjEbTa6D1kyBR5gu6XFJWrBGPui9EEaNdnSPaCbtXHYzbFRBbDftqLwL7cQwFXyLGMGuA31eEfpeGpZvv",
  "key12": "36J73EvSSSNGc7L4Bmsfop77wSMaAfxraqdrvUjWmNJj6MC8ReRtdzTBhaWevSbcr8oxXvNPcihA6A5oWAxzW3QT",
  "key13": "B6aeVxyHHGY9DbBeVatwWg3NXHPCHs8xotcyDn6iTvHoDLmhSvp475xhvgnBRUkAMTAXHxwxp6QVRn1Vd3CAwQG",
  "key14": "4aDhuzgTXzeszuPgNF6kEK3o5TXvwmQWVtK4DitXBSiSjeTvJnHDTjYgpU78nQdSVCUH7muq3ty3yCrSLsHHudpC",
  "key15": "666xHmYLAPzd1srHuqHr6sPbS6mqTx71psWjK6A6JgzSo1frbuARdACt9tUBx4gx6z24DmHCLhp1Y61sKKv3moky",
  "key16": "5rryt2hm3qKzJeL7MfzJ8GYM3a8ixPwnGdP1N1gPmXx7nDkjDk8t8rFMtAJoByTyiawpj6fq5VX7UDzrG5axFFDD",
  "key17": "5R6RokmkAWXkeYahT1r9QRZK6Uhhcsx1EG8sYjtcKehNbWPFcsFQd5va4jqmkEds9MgHbJShKf652eu3zLXo7F2o",
  "key18": "2QcdAe85dSKoL2zF8HjitgE3RDeT6N8NmNurCLBspbDY4DTdKi2zVsSFTNdFzZ3VDE5e2XiDcy8YVY9sLFRGXBwp",
  "key19": "3QzbatYMszJsFwhLDZsphtBuYELH6QBXupwHQoqV1Ybc5ScwFa1wE752mQ9DxNZUVZ9VvRffDa7GinyuPPjob7DR",
  "key20": "3TEqm7At79KKobxq7mCYzXHijfyAxHa4JRdjTQ3tKxZy9CCrBEtpT32DYxtj7QBfYQg4GkuJF5hNipm6PrbaCwJx",
  "key21": "4ySLEPErHJbBtizjuXkneKRQfpqABTDe2e7tC44EVu6d6o8TAkjHysCGpSGMQtnD51tceRT3LKGKsDfPGskC6ngc",
  "key22": "RsqvaWBPXkdod7FBnA5814ymaT9cxgQCQeAxv8BxdwNKiDD2QPPH9h12aLRrBFcuYd4p4x1iobxopY3kH1sWwKN",
  "key23": "2WzonZJ572AumcAySjYTLNtPzw8ttvf4gknnepToBoS6o3t393WCFUY5MEECNtFka6WtvVe26jmAmfuKKgWe82et",
  "key24": "4KyasdFEA4y65GUtAiiqqy9othMQGnyr2iQBcQBeh2sG3xexF9SZaaGZWBd5ZdViL22jKkqgTU7maYTDdV9VhyXL",
  "key25": "4qhwEAdzo9f3WL6tNSV7vEvAu485JCMX7jnWZp9eYgvXRfSgAwD3V3HGhPrmWEPxaNj2Vokima8HoLFNepaXVokP",
  "key26": "5Ja3Q3vNb5zCEZ9wMd74oeZQhazJR3Rgewz5fZbqFnEdU4SDC34EkwXGiVuhfCdxrJt69mgAi2Cb7t9aZTYQsZdf",
  "key27": "32HJbQ9S4AjYAU1cjCRkmmGHuTgBjzJvF3H4gSdALY7kofxJG5Y9uTRADSjD6wVMpXwG2ZKbRvwCmhJFJCXFFGsm",
  "key28": "F3D6AMoAcVtG2ETVnsEpPTXEiGm7WadN64Tv4S9xBBVgN9qguSEnPgrUxA2hxDmzhEEqdt3kxqbD553CqmfJUwF"
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
