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
    "3GTEieUDP4MvNKvWTTE4jzANdW3bDSyFpPGxCysLtKQd7izgsDvYp8z7pUfpTkqadnU1mwXaM5NyuevWk73U849e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMMkXBx5TwXxY4MvuiTh4LwufcnUifg9BHGaGe5nWy9hoFCCfCdo8TMbMdj2AdEBgVdkL1bPQWEoMqVvSMzWEN",
  "key1": "3uyAURhQs9gp1ShDdoh6vcMzb8NbTQgJCtM5Fp8DqADfEGUsiS8Te6wJupTxP8g738SbmkvGq4HTeH4H8Rez4iwK",
  "key2": "5HmPZCcWmsLMTkQg8BGBdDyYyQ9mLUYF6CTBwgmdEAPBeWet8pKYz6eTbBLq5DKBkAPqv79VJVNUUXLJzwpJorvb",
  "key3": "3TwrFNQWEiVCGtJpP7ei2eQYRTYN8dYJ6dXCWhW1tiYETajUjmVjLK1X9BEKUGiEgFzNwUdVmrKUJtbQ8Uu58PMS",
  "key4": "sfJf7nLp6s9V9Sng8DNXFUjKGnfZ8zst8SmcUr5FXDFaxmgvwbcmK4isajbpmS26cDPZvCjnhzREbknEse6tmP9",
  "key5": "2sfvNAiR4meMY7QxJjCCdDGUTMyFqeTHhVXLSjYfeV4tufAPWBbFuG6vXeJ339jfAsj2GWi2r3G2CvaBqfZWB5J4",
  "key6": "zAk92JiENiMDr3WiFvxWMdZ2ex56CicKtwia2vVZvoRzy9jSNEYBGUoB4zkoMGwTA7tgiRPyMnqprKrqAzNxRED",
  "key7": "67C8uwXm6jy4w3iDGW1jF1VpStr3CXd7aaQrDhkbPRmKNtLGgTF7Vkx1goUM4Z8rqEUphvAgU3PCREGmVJK1NFNf",
  "key8": "2FAVnoh9fHYNquooFehyogmEZ2LHRhz53U4FJcHMAgC96TFnybuPJUx1MKfw9UZxrnoGw2HtKkXbWaXgXk3PxH14",
  "key9": "mD5DLNPCzTr1mc6ez4qVqmNreHndpKhNSJYKzbYxoA4AUSbokToYFzfjsbvhfjqvZ92eRqtZEz9etgZGQrhW7Q8",
  "key10": "4KidUUWL4BsZHBasgfPgqnFUs4sGZ292Sbp2x9tLmC8DriL1pMF6dHfZEmCNARqFMfp9NNhvDymeuUvVQctRv6ZU",
  "key11": "5cCR74dZTZmukj5mdiegbUhvKSZEA7EK57KQsmryxqonhcyqDkZqAPG7o6PBxBhErMUgyKxwnxgPQWdX6ASPRTwy",
  "key12": "2zV5ZoQoCkFnatYnYs7QfcZCpzioL1NvskSs8rBVKs7se7dKX4K6zXqus7yuN2YDigEoGh7MhrV9zaC5VuAooVMS",
  "key13": "51QTxVddG7dHX2y5JkBS9vAd7WRHubinhc7hYVa6mK5yynYxbcZLrPXpx436kbjSRwHW4EdmWdizd7Nb7uBmqF8M",
  "key14": "5NxYW7f28QYggfBhzKxv3dF7Giy2QmWRSmKhSZvyBVSvnoDxVdsmuK2FJAa4uWS2P87Aicbgddc65JBQEV45uSRu",
  "key15": "4UB3q94SyiSP8SKBmKbb3tjKhpaE7bajxdZ5G96G7EemHHTgqM937gTkYmR5RZHm3sprA7qYJ1TFsLFVzgFbpk9y",
  "key16": "4JNwWTiXRWQ3R5FqvpehN9pNYWKq19NsBBC4ezRZTxarpkXeyBJBNVxxnLxu3sRj3zghvmkAGVwqZ9NHyujGFYqr",
  "key17": "5icxaxJbLFktMSQjY9FEvYicxCfpwXZKUV3xFSQvnKLMrrUjdY6yR1RvXL999qLG9xqopyAWtE37LgWWb37GhJ8h",
  "key18": "3tCJ3zs1fnP2RQH5K4Bw7tr9TiKHPVxGxX53PrpjDTUVHQraYr3ZwtzrBARYXLBnrHZRLbkxyhCw1VK1CF7pMTYQ",
  "key19": "4iWVuAmA6qhzJAbPWtdxCTN7ZDJmc68xxAtJYHc3NeCgias317WznuyBMAAJ8x6U5icLJSSsQXiA7ajeDPEvmYNi",
  "key20": "3iy7GytubgieDXkEuVyvqsUBs1nL32VumKdCCckqXH7nDq8BBjcPU8QhonNV3JtKvdrccnCsxDnsNMXZgxgFGnQq",
  "key21": "qCJ3k1Kysg54hsUxqDqwqbu7dmfSwSxVjmepf618LALFck5ijVU4cTcJnESHFUnf8h56CWfNxxgkXM4kA7fKBSS",
  "key22": "51TAtaVY2roU41NGcaSccGx35uFci7LxPJB9zotLXuuzYNC5JntLxfJ8XjaF1K3DYC3yarua489fY9W36xXseUtw",
  "key23": "2raScQEXLYiNqnCYBVMXCX7U6dwxJSWDe5tmwGMFoYfuMkxf1XypuyTvjics2TyQ2PKLSUmgrWzkjpxJD9Z4SQrK",
  "key24": "28vijB4UbU6jNbuAELdeFtijiHeiDrjtcycuhaHm7jNKRZqCXG5vTCQzN5kK3fjQwpx9ctcFgWXgRfmAZQV1myHa",
  "key25": "5KrRoNoFwAEu97Pw9cMEUWijo5Goxk7g6DHAJyW4bD7VXBVsFvpHUg1F3nbr5FH8eyPgjbnwrAYyCy4BFqkrCP9f",
  "key26": "27aqVZJEEYWC4aVs25ADTE1U57vXSiF5dMZGEmFJCFseEL6WUfAFrUFeD5Ndumeid9D4iXXof5FjTyAHtBFgSxbN",
  "key27": "4j2Vum3iW1GDLTHVQ4QeQziPB24PV7KG7hqLFktJ3yGZNH3UAa3rbW3ofmTttiZ2XSMyQS9qaCTwfG18199hQta5"
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
