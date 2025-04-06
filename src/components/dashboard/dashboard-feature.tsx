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
    "3RSodf1xVvZawjo4jEg7rSCT5hjwpqYBSGxC92UBiaD9mAPqXSf3w7DgHBfzWiB3kqUPFwZkEJKV8qG2uaNeyJRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61iTh7wTjJ8KUeobzjC11Q9PZ1XhLX2ZD5Dq7V9QsycvLfd9RfrchsjFzJVYAfHg48RdPurVZz3iswzAUV1SES7o",
  "key1": "efhBzgho9RGrtGnYeTYg1EJncDKUPcpyLCpfdrHyxyJtkKuaRqx7bHz3NYYC5SXWHsrf5rMWsu4x4SYj73Fm9xD",
  "key2": "3CjiZzqas9xsxxb7grR3F5CnNzAhY7tGvXZySDZdN7eRJFZnL4qgPC2rzaN9nvNhHdNvSSUULegwqAnwBGPtveXj",
  "key3": "5uDBDgB6CtxC4wii6JiC3HrGf4nWCPbeSN8aUQGefiMNjZ1jtiy5jWzphoCQQa7ScjkxWSNsxHEo2nGQGLeoTQPd",
  "key4": "4Yx2wgst3PF3EvpLEcYQkxnonL5WivRervmrzYDzbSfcdArT48jcC4bTLofTD4AviofhUFc1QmNemyPXPRk6WMTA",
  "key5": "2eBUfmAoofR8wjsMQJjDn3Wv5gZFhk9nuVx56ZzhdmC43y5KBqtYVYhS6pesvCmQNcJkqyENTnRcEf6sdXmFpTp5",
  "key6": "26gDeEpcT6CkszXUuTmGAL5Quj9yxPVuoYjNfoB6AvJ96k2ovL6XQrvKmXw8HFGdViMt2g3UtGmVD8Vp8qFC5crD",
  "key7": "oY4NDnWfHhaNxLQf5XRZwxzF84byzaEBoEXAPmXfpbL3GmTvRypEjUbwrhxbrEq9c5sqVyXQAGTFd3ukW6tc5Nw",
  "key8": "4rY994yMhqGMgZepDysLXNzdFw31NHVKQr33QWpJKRBQVHU5CktrU6afHM1sCYnKLrKzRjRZQSbcdgJqEzLJLc8B",
  "key9": "49zSPKtfuYNuZ5guAcZg9oaU8QawJEU1CQEe1TCvusiYYM4vmkJ8oazgYNdSU5FJm5KXe5HHRSFfowFdFpdUKzAx",
  "key10": "5b1Ps5A6xAUcdoqPyJveG2jNXb9W8uLbXHUm96DibWNtubuHBdbzaZE2ig6WHc9yXvaSden6zLqCf7UFPWYSbfpZ",
  "key11": "4ioPppw9G5z1baqwai2g3uLQgnYQhU5TZJLjXSGGgWK5qZjvMchVMZbLqZUMobFnC6LEeWo1P7wTncHLUpWsNXw2",
  "key12": "5xJL7ZmKniqHbxHroWZskqo9egmANYNGbr3YSz7Euh5CCvFNCngCsb77c7Jt64dkK9vTPcCbHH1RYgmf2wWEdsy7",
  "key13": "6kHy8w4nwr8Vdq1tK6Po5QuTPrUHjjKKGKY8HMSnuYiVVT8W8WLCecBfDMiLTemPg5cTr1GekVoj1472DdMn11T",
  "key14": "2hTtB9zU3C5yX8RZQxgTFyTGmhBZqwNiyd8MfjAuWVFLvjQsH3qeUYuTdzs7yHk6FShhbcWcLLUymZbe7tjGzvZa",
  "key15": "3bXofPd9q59aHUQ8CtVmYp9bc6ybVMQ9QCvwofqWzW6KbF1MuCVmmNKCyuMDjC9ppRymjxTrkQxvHX85mQFc2n2h",
  "key16": "4GQGqQJWtjyJGxAdweouztpvUZSHHwbcvaxB3CabH6X3VW2d2Njczv2ipJdfzNGg3FAqRhLmoRdhRzR81gKP9X64",
  "key17": "3rNk3eSdxse96rmYrsKkBGcgtP95iMTAE9JC2PfazLnGYXYEXLj4aRyh2Thr4fui5b33aH9im7LeAL2vpMsoFQBY",
  "key18": "5NTAfovJc1APYSK3Q8jVXKE3Gp8d7tBjDXNpUqt2UmTipT87Pj3owqkgGoQMWbcSHeek79HAem2MGXQfB8kSoZgQ",
  "key19": "4zu1LSz4uEAGTd2dYWrFF6TPFKs3wpLeZ1pxDjp8hVwpBpyvAen2zeZUhfj4ZaKFMZ5gDVhiHrPkYLSpNR3kiz9d",
  "key20": "4A65xAzeCuFHUojQXYkwTNhZZM6AS7v6GxQ3AF7TwtyuGirjCFgabBJM8hQ3atHJYMji4ZYWBn1hBLPpYyqVqtvp",
  "key21": "4CgLzRsSFHXzQzZVXc3rFg8vTh2Yj9YrqQF3pqnY6YkKTZkB51NwwNPqdwFrwuuuqay6uk55g7ePw4v2DPycvuT5",
  "key22": "CGwSHKHxosiE2FXiPQoe4dzYj6y1DfaYJkBskHcMb6sKtrVc6dT9SF7aSkkqtbuw8vtGoUNu9nRBbFYbWHjjLqM",
  "key23": "5RvhJgP4u6naDXJvVQrmCxsHu84Woyn83D7c9VFeDWpa8sxNVPkPBu3965SkAP68ZE5y9Gk4HXRN1kZvPbDPVgq8",
  "key24": "4s9qdSCezkdGuvfb82hnoaLeepZiD9Xy1CG2gC7NnAuEUTrp67xbXSEWWtFfYNSZdCWi7q1BGxr3BWJpPEpWsPuX",
  "key25": "3xQJ5H9BnKjnVSM9LAKffkgXuEg4wGLW1t6ogTwiqr4F2Zb7kKsciHarb7B7AMYk9TZtHjhRq2pyNud6zdEu8TBr",
  "key26": "3f86cTvkB6k6wd18y79NwZBoXyueWNphSbeAEC3L3enTTtnSXATmbvnndiph9goTMP5Lkt7GCBuQkLSvbDPrrjUS",
  "key27": "3pMDDzvotkLCWzVBDTNvXiaEi7Qc1dUiovBtC9qRmQaHM3B7wNMwBj4J756aSnH3bfdF47MFijLSe2Hy6UbnHBYx"
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
