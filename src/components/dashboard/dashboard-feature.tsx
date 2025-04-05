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
    "2BH563CmfM7K3gQwEUw315TdvBU2G8EXWXEaAyhMrbBXNmdWsR5jNkN5yUmqfP8aMQd2x29LZncVBWuiUJ7feeQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBw5A1NfoRBYptYorYioNF53YGvRSN1jCnyv8aDotVVTSiJkgAQYHfUqg9tTT8VMoP1QZzN6iUqn3stNrjmSCFm",
  "key1": "5qyXtudXDAnWeh9Gnaj26eJo4uza9t4tqkjUh3ZNxUezBLyaPymDcuCoi2eGYrB7QD2mJtXEzdamcvdgE4J2B3mK",
  "key2": "4aEGa6EWYiPhStq2ZBwZj5bw9pQTKvBCQECwfPfV8bFsDcvhSYJQZceXbcRTzw84A8zLCMBarS2W9CBBKBCwKFGM",
  "key3": "2UpPohfBFsXQQn5rLcgfLnGYF9gdQwXBrGiRtRtYH1DFyzmV1jV3uPKoyJdhQXHsXvhf5wZ8uj4dLwMoBMxTJNbr",
  "key4": "5mwtp3CGwa7FCMYrVyiCkwT4oU5TndWpadaKiBSaEb4rYPbcxjbT5g3MosfrAnKWb3cDBHAPrSbVYPAZCZdp9oBa",
  "key5": "35tnyZj7RZ26EUi7WvcaEB4QEKfzUycct9CtsyawGnrTYGytWqGKzPvJkMYSFG7Zh1yj1exRCRxx8BxTZAXWR5sd",
  "key6": "fFEpkKv6rCeuwrHxgKhCEBTSe9gaUATYUHb5FkBuqdcKxfQbkuw383r9J6hHhVhT2BcXRFzC3GHSoLAkQXbnQ8k",
  "key7": "5vbTyR592vpaEuw3aiwiCcLKjyzfCXp1s1RUXerM5VpaJnxcLdWwBB6ktoSp7dw7Ltrq1tMo3oXdX29Tvddw9NNP",
  "key8": "4Nc4btkXK122vsF8zRr9oWXz76GfQaGocCSKGyrEfLjzV8ZyFpxL62SAcosRAEEkTT8u8cbh5wJRaMSkFwSMegqZ",
  "key9": "54LmDqFnATsTcmFMpkfjD1Ms94yGb79whdkkJs51m2NUF4nbpjmDpQyxYbyKN9yVhwUW9VM76cn3VMDF2JZceigg",
  "key10": "43rGHTdL2YhxXYfZdBqw3njL12apHG8jd5xG6j5Y6XrJ5i42AxV6HLZWyWWK7b1DcS8PzUkyGyDfEk9hTBC9UdL4",
  "key11": "3ZGgKmMm7TKMxktfEpJG9BX3Uwg3zeYcVBeq1zBRMNT4c5eVPNoti3c1KV5TsariUiSw5a9SJ2TrnJioPiZLtzuL",
  "key12": "4wwAHTnTAXs4nSgvXnHhUjK4XS6LHbY3ihyxMxiPp8TdgpEHrveX8D2ESj5PAxQaSXDofxaeCxDobY4xg5PijY1w",
  "key13": "3y4psLC66AUFW1tDUXQ8Tr6kr83AvW9QkPvrgrZEvs4opMFYD9ByCKR6WobJfbUfZJ2tjWLz6suvnhp6T56jSF2w",
  "key14": "5XmLKb3tJWW3pauv893fxnFY7ZmkWf1JhVBPwCp6qF98j6R2byzBxfTNvn64KUduZKToWhZ4XcHk3KyFaxbxbbhh",
  "key15": "5UbpzC98pPKnFuZrkS8UauWxWKj2gfuo4DhZyEPhCorAstjjMqzWMjfQYY6EsNyVfFWJzG5KstKZ4inerWUF9fCR",
  "key16": "4D1CsH2u7TPA16Dvk3LHMLp9ezM1bCi2HXpzufpERpmBXtqxyXHcsbiWbNZxjgmXXj97uYvgrMdsD8KkkqQtCHEQ",
  "key17": "5og7BrFDgaLhgyX3E49qjmJbUqniUYa5wBEiUpYKFwZjon1WwoJRWNdJkmGFG73s1q1wcz8bATDQA7uoXkLiZCJi",
  "key18": "5jA5W2fX8ANKuV4ykJKjJm7GyYEwnwC1UsqPCnT27bMUZY445QHeiHN1tYmHmiyPt9ttJTAVZprAt7Etyxdz5ViL",
  "key19": "5Jd8AtgfW3sSZxDgY3X5Ffn5kAFpsvkG4gFd6Pp2STPk5ay4WMsMU1Pyob7k4TL4pvotx2VTPMk1s9NreDBEJoXq",
  "key20": "5ECmKHH8LuPzaL2q7J61SM4kjYjDTgLhtZUeSJCSuTBCi3umD79Fb9YXSz5gh62UoS2EYvaovCU29x7EeXk5V3YZ",
  "key21": "2t3iXWMPwgurXksUMVHaPBnjkz8gD3LK5gc4hBSPKyZ82t695Ss6zDuWPoJ3j1gZxztQKTXY7iz8DHQgk6M77Jzq",
  "key22": "38KhsE1Kc3B1EicfwoM5iEqNb8yKUXuAdf22Vwuu1a6uU64r6Du93TkKBwibNLSJXv2do4RqsPVmbxgvhZ6GpB3p",
  "key23": "LSMCxe3DmGYrNDqwqtwqD1BDFiKYRXcWKrZjXiCPGV7q24B1eZGJNc69mDPEhSVsXr1XXZyqkJNDfc55a1vXDiu",
  "key24": "gFBE4e98sJBT7P4gTdQSC3tgBg8NYaRxPQHbdSP1wMbMv2yjMmmW1DDn6U1c6SpjXmaXCg98FmypioETqSYhfe3",
  "key25": "2AyeQsVzwhH8toFWFFu1mFe5H6NRfvsrzmRFoFGvydMx5jmN5uHgFCCy4nyxFfGiR1eT8VyFTN9NjrVfXbiDEvQk",
  "key26": "Huiz3A3FJPXigwmdc7Rb6TVznvNSY6mtd5c7r9t8TyiGJ9jUNcs2VRn77QuqVG38pvyGYpnaMALbSr8WRH6Cu11",
  "key27": "5CmBvgXVLAAQTGeXY596EPi1G3YVm5wqi4kpP9Ank4tht6KGv1coHriupJTTLyYEkHVefHMBRvrv7gqvBUjBtap3",
  "key28": "2ZodSAf8xb1o81esyKU3aG1zKNRGEFeLPf7xvvc9eKALMSbdn3inser6HGyJgw1XWAW3tpr6Xn1Uj2od4bn5y5uR",
  "key29": "iyS8mn8XsXoysUgQ3A2Mu5pfVn9nLPe6EnnDvp6HR5RYDgF9KRJHAsTRBo6Gc5VGtWzZXeqFqWEHwnG7yaoCr3K"
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
