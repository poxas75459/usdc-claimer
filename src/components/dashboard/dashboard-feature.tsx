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
    "4o6KMkQWSD8RAS4A12cw446zCRagsYCmgJL1iYm5Qtq1Wt3t1qTBd3PVe8jRY8KpGbceq5Vr5BoWLQdamM8jgMy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d76cSDzZo5VbP5CFPxbeUAToWs4Tej9uALCUofEEbTwSdRGHPcKVAxzpbqbKkHrEX6sA7Ay1XKe1fgqpH6ceSJF",
  "key1": "4ekz2nEAJ6k9hfYRaP9Gp2BPukGsApY8PVF4qR9EwMvR8gmHmTmoG9dRbEFpAEE2mPwrPJ2U1tqB2dANuN9gaHdc",
  "key2": "2wmisdkno48eZ27AcGXpaLEMk4L7jrwghA3JTeFnWGZ7gBgHMHcvAtptbss5G8vpLufqahMrzQkndNTW2FnpbTtB",
  "key3": "4eTUbT8UVxgNpnne2yJiaoKLgw84t1xmQqtUvTRNJn2egZDG16gyonHWZAje75GY3FK5y4p1QgXgrPjc2sGYwevb",
  "key4": "czeg4b1y7QHSpxc2TjMNqRGDzaagNZgV7SsRnnm8dAZqpj7MRpro9T5T4NoCmfXX8BjuCQ364eMpeQi8CoY811D",
  "key5": "5qo2BrvScqcybzo8v5grTrkNo18L8udZn6gs8wtJW8cbuc9e4yPTcnHKpNLSJuBXXRCpnVQ1AcHmepK7iSdaESs5",
  "key6": "EhaGDAPjxZZySBKwbE4scybvHHN53unPMnm3uRBZT4CRSdWvZFFksXokecX3QVBeHQH1qpb3TRpFNjULWQsQvxn",
  "key7": "ESynfxQAaY1jh4Fm2cPiG8RUTx4kWUQHW5WX1hWNMyrD1yXCmmdnffaC61kA14F8MVafqqM8i6NiwjUvnzfoS67",
  "key8": "6ScZZKtyuxGzfKEuXfu1cuWfVrvH53WFJMMJiAjQPSDpA98KqovPNquephWue5HzYZVPLKJTyEh8uyk9tRMgJht",
  "key9": "3J9pgxNTFK53cdT4h9yYCULa5jXLv6Xb3C8f3p8qJZeNd2CRLqW8nnHPJX4ibtheqWT5bf5jYnhDsTx8uZ8BL8BL",
  "key10": "3oZRAo6BWj34LT8jZ31j47GSsZdbVzfKCSvsYvjBbukJdfSstGD8t8GGhvgi3Wq6iN26b9H9BTtRErjdjAokx9BR",
  "key11": "Q1yjSH4PVdt4LvKf79tWk4fHwW9GJFt4bmmFEmG1c6rVHxPYrPKttePecyifhNDaRmrjEqNL2NA6GRdZ3nJ9dem",
  "key12": "5hCNxFfD68xE5QkiveE3xb3rKtEVXEF1gKjZjjEqKLoNkmWNNmeZTPHH7Qs4B33ZaJBcwY2hycciwSAdka7oVc3x",
  "key13": "3xkKvwPuSQvL2WXsWESfj6FqXZFouJpU3YtizueWbUBLgcQqn7t2Q3uQK7riVSgVEerZhKGXDp8TSB2PYq76K9RJ",
  "key14": "51WSvBzVhjAbBaRn7GXvq4PrBXT2niyd77he9bJEJgp7EKErKEBWeDUpjJnEg3NfYHpJV79MUsPv3x1VSHwo7zUG",
  "key15": "5SPumAFuFhm4byjVH69tLc1ozbFcieATZXpNeR8GSeSNryien7LsPhF4FhM6ot1o48GMBQgBQqRnzMsJ5fDRE826",
  "key16": "nzwuFkeKsKzWHKV6bP9xDVhxEXZ9W2eXxs8PorbJDcTVxQN5FS9TSepGiJa7ggfJr9NGBYUsnsFyrNo7LJRvj8H",
  "key17": "37PYabb66yemt32JrDSuVp9ZHp3qbAM4SGCbX2ykVcYTKG3Vxih1L15Rccf1yRqvFoqGtsDBYXfX6x6NSK8RVesc",
  "key18": "3NGUkA8YZkbp9cSLRrEZctRP4VM4CpMvUhtNL4TpWqTFLtYW1oJAHh4hMNkACxivorYgK7gMFAhPNdBUzdHtV98m",
  "key19": "38MW49nsSmRo2L5JeELfHNmGsyhPjAkBwLRNM7SFqLmwWKAVYj8oMVzHQzUU3UfpNCPHapUhnRycZC5yEgoKqjgx",
  "key20": "2bUqzxMrdWThFdZjvy6KumKNGcDFhJjjXgEPka3WjizYNTKwd4DkUR9SZQbheQfvuDRYHJ5WyvpAuX7XT9rBJjai",
  "key21": "5EJGqxsbaNSfdiEqtSJPCJCG9R9R6dNan7NMaeuERioA9RDy35UjySXWFQ6PAfBYnYXbSZ3mCJebQ84ycT8fMAY1",
  "key22": "2CjRFCmXxUXvcWxxMi53b1syXHgH73uLZxb9ye1vzvHgspcwt82AR8an5oTbJUt2KU1AsCDebx4k7XqurgN2JQce",
  "key23": "2tASZqun592F3FUgUyAVgkBpkEfPtqkjrpfRnDVAmyYrEPipbQN4AdkRcjXKW6C81aFf91nEQThFprbHcXFxYHyr",
  "key24": "61x2Tin2d66M7ETiJfQbvZhyDn2zGNUdnK2f8HaijMDJLS54DZhgWVXxGnZfF4QgRXXvdh7d3v8UXFAW19XpxSZE",
  "key25": "3s1LvJFe7ZT7YUH8G1Stwp7Vj9B6wpbURYLWpmEvKWa3hNJY8NFU1wKbEHbEa5fxt9MmYF1vaSuyst6JLuQQRLYn"
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
