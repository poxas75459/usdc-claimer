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
    "5KAkw6JXGD5fMCo2RNXL6fDB13fPecz1GsRrp1QFYfwUgd664TbUfVLWLrXaHVupxP4EuyDJLs6egBi1KHyHnwKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2VJRe4Q5jyGXbRzhxBPpL7iruMMGmAEAbzC9ksLdn38mqHgQLSF513LWS3TLhLkhVcGuW5onnkbYzQ8Xum9xZJ",
  "key1": "4twvGm9QnddeUc9ZDYFn34PdjzqPFaDhYmqz6oVRCC6eZUjrhdGWBACsTiGs4pGehJTipA1VkaDSLTWjqU7kEiqK",
  "key2": "47viNbjQ7kuep8cmn5cy7GmbhWiPCZ3CwZmDtKGXv2ND5F9FSDpCxxvXKzrxjTD2TyD2zeNV6e6XdEa8gKFb7ghD",
  "key3": "3CZxYcjJgGpeDwShiaQ4df5dmftNN1oHJeQE16X1krg9HDLXPmxo5CF7WFjEE2QxEtmcdY5nnGtmAXAQy49uMQsc",
  "key4": "4ekpVJF6VcYF528M1Yaxb4H2BXuSxT6VSMkwUjV9sijjvRuz3NfABsZgwtAPkbyGr4pVDg7ZtZMfKP1RqPVWTKzS",
  "key5": "3RgRCmQEyyePQgRSSVkFjgBYjiPvJbvj8Hy4hmvKrEvqsQp7yy1ioQXuRuFE4YGxEDyKAw4vsQyZSX8P8wR31qdM",
  "key6": "3kuiJnxLYwNbrSryrB6RX19L7BTFD59opMfMYR2r7FsbDxLzaAeSQnEXn343EmyRJqvqSNw2UPxGYSqiDUojbj6w",
  "key7": "zKGeG4LRochsSxVUnhBFi4zsopygnYStkphoRP6ija7ADNgkRM44Moef1C8F1XnQ6cLhrucE5G8pWWUvmtHykkj",
  "key8": "yhX5VCsLa4urzi4ZqptYypQX5MxQ8t4SHrLAzsRHLarZp9AxBaZeWsddbyFWTVYjFwp7UoyZk94pPu29YDdVN2y",
  "key9": "2Zd6e5X9CiZaVwLCTiSSiSGeHCA63yY94rFJQBHfTGf2SWYJEdaBt6JgT4A6gAZguXAiMmbjrZ56qLYskAXLp2fQ",
  "key10": "jBvRMZ6cvRkPVwdYmhjuwwNoiJF7FSQUu47y3mY3hSp2uFw5CBRTxx3EUb9yB58Ga8RFgmCYJ6nebkFtBk5X7r8",
  "key11": "4jkRJSjURpzCeJW3posJvSomhsDMdV4jnzuHaYjbrDwer4K8JTWqfYQhy5eSxeT6uJzZmQjE3rgwbhdXBGACiAdE",
  "key12": "44MvzkVc7onsZ72H9FKjMRXLvD1x6vYMUNtx2fp3ZnGQVEKAfxzWWxZYkYcBe7pb9CafcCd7fYtAU8eiJ73UYvEh",
  "key13": "5jg1rrnGkEFfKzVKqU8p9VFXz2CE2sXnDM8mYFzpoSZtUiYqxKZ7cMkZuf9DGd6frxTfAjFBoZbNVBnjjC6A2ovv",
  "key14": "5nYSoH53CrnpcSgbe1ZDWVa8f8M8ZoCeJQg6mPCsy7zPXc3Ps8Ct6S9yFMAF7Mr2tGbP7zChT8nzD5MUP91AURMK",
  "key15": "2pD4w1n7A1TPn1sQg92rzsL8XynfSPRPUg5UXXoSxLUUeSPGsYo641PHbYdDi1YudgkhLD8tA9zYTy1wfvwojrVN",
  "key16": "RFmqmWe9VRx5AGEw3mHU6qbLzz5a379iLTmJXhfmM32DhnuZvZzGPHswr9bLxLb25z4BvHuNYeeLTjC3td2vpWd",
  "key17": "5thyeS6HwkNoJ5EWzfU81jq27WWPxciVAFYAKo3G1QLm1i9SAuzA4UNetURHvPNLiBUMvPNFxUQfSh3zPuoSq58J",
  "key18": "rXR4HEeZftrMYrEJ7RXsXzGYBPrzJiCRSm7RednXjQtPL7tMHuCL6qDR7NJMS2e8m6pKcFqpjJ4UC7j4ZVma2mH",
  "key19": "5aZjtpZB8qZQntxrVQ7cvtrZN2aAV22Q1UPHMoLwXZMLABJinjLJ9FCmUp2oDjA8iYerpMrYJvdJvNDJP52pfahq",
  "key20": "4o1m6DhiJPw99MMHECE5BFP1y4wPi69pq2voKJG814k6c6SGAknPG9VMdNAcohpGqNXykAitW4T2WQHnfrxFcrKU",
  "key21": "YWGEo1DrdGcWw4uoMbwHKbnXrmx6zHpQNBMtUpT3cFm2bYT1BX6sQsuwYSM3YGVH79sq82tahqRvbA4Wjya5UcJ",
  "key22": "38HKJKjhfpoqZBH6SDo5CcVyH4y6Hxvqg9ZrZs6z8XCUSy5Edou89SVZFAV8e6msnY8CHKp4B4LTZRb2xGNqUF1D",
  "key23": "4BJXCUAnoEVafphDJ6RcpPVCfCCCAPHzFSSr3xqmyDDLq5Jd97NnqhvyyDnYkW4JV6DBFdAU72kfSSkULh62xH7D",
  "key24": "Dyv81R2ipy3U1YqEUMncSVf2qBPHzn6GpXVJ2G5h7L88vRvirnfEv3AY87Jh2xT7cL6vnBXjwZogXKFLSNmmKkQ",
  "key25": "5b3D7gJfi5SsyxhvC5vxiAguhUK17cS5N4vLsq7RDeAVt6oeNxhvAM4CJhNYjMQxRoy1dMYA1JEzVjEazB4ZbVsr",
  "key26": "4CYZn6bS6RpBgVMJfaBdigGYG94NFzido62MYvaR5pcT2MeEbRa47sA96AMHpscyXhfJevnBGWT9Ng94fDiw3WtZ",
  "key27": "GkMkAW9GpVFWFmLaAoka5SEFXfQbrFdeksXcAhBTn7G5EtiRB3nvw2G1YaUKfMwQmDPpEArT65L4Vo9HGkpKZgg",
  "key28": "rYNjrg2cKXZxDyAKfgSkWcP4G4aXzXG17joXhrnTR6BRWrHxLBHAUZzZie9utmwhrJ14iWjD5jcKTN38XYn1p8P",
  "key29": "2nfztmNC2Qwwnrc2SPgQV8UVH2T83bYpMWnWV3gMv2Daku14XTzuBY5vxywbFbvUdTuF6UUnRrkfQjkFbcw6p2qh",
  "key30": "5N5sFKkd3qqjpYdBEfJwUXVTv37kMvaxctsRfr7M2m7fUXUe9gWkuPtmRXnLzSf3hNYojatbhBd6SDhnmZUUDgK"
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
