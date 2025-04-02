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
    "3ddeurnA1EQqG4DifcDBtbJ22f4gB4puHDh6aLhYZeQyuNs6BgqJVEumfpiUuxFNjvnWnSfJFZZ3kM7n85zBRzyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rKhqddGCENxj1ixiWnFGNCBfKVow8ZbzyiFYEYFoySQ3s8DbA1Q9cDg7Fr2LWZ6nYMcD7E2bEf1sWipfkkLKnGw",
  "key1": "vhLEm8sMGby4wmAApoGoavCpyVh2EYVa2ebm4MtRkqK6cqPh76TaCifszcJc2tMjeSvAoJHRmkp9ptuiDJjvEmT",
  "key2": "p8p25cjFYaTXLmRNX74tF4ZpQAqwNfgSFHBNrXAqQ9DQCtpevSNjwXaUXRaEMXdE9hivb8aLRXQcz2pCMwJk7jU",
  "key3": "erZWSWeqen93A9SSLYrw1TjECagTzKxLT6V4eAFs7ETauGK563KAVvrPBeyjJLdzHBBPNHxaqDXrDr8NGGn8oY1",
  "key4": "vkBd5EzS634bAGvZyx7uvfMRX6iq6LjA8LC1HkmZfXuH2smzXcu4399jwyZyggZ6sEioWmbLdkQuKFSs5QDvqqw",
  "key5": "5gDvSGepz5PNDi8hN2pykdHvZiSctGf288k3Edy6x6s3gJ7cB42A5TmMLvbn7e6pjXRK1vSEMJa4ivpTxSBPFWcV",
  "key6": "3CY8P4ttDXLzM9xJYVEse2sENW21Pa6T4gKtXmJYK1JGB2mfXJk3yt9hHApSZ4VdjEu62Rs7vqXn3E2zQmyz8RjG",
  "key7": "5QdoxToxXYPhBMiFQxGALopEo68Uxy5yXsfAJaY7ZKoUiDfMk4r4uBZc2S29VnufETW5W1e5TBdjW7t8w2spwp5A",
  "key8": "48pe3eatYymZRVHyhch8DWQGiF3AoqX8ndWcoL3jvrtnHMCtZXmqRY5onNsS5gHeHx578zTzMhfbtPDjDnxYM2JX",
  "key9": "2amNxr7r85GUQqZ5WYSWsuJSg5Kb4Yc49m9FdrbcWxbZo149cAkfeAYRTWv3rbka6M3tsCS8uk57XkhFGCg7cKmd",
  "key10": "3edPWVWkRP5UQxsi6oxjJomp4y5CfBJXr9KFwKVQti21cke7ShzF8EYAwNi3vSiYiq8opLTsT5RuKmwMt3tycy46",
  "key11": "26RZHgVBmByhUuuNbXBQpyUa8itb8926UFZfXU1N4uZo7WUhPCiFjviMYftLudKTnKtYw5r456NyJCF7qT7UiiAv",
  "key12": "2WYfoT2dTow5a3r8TqA4bXiRQRKSUyVTWC7YPpSZgmrS3JpdRjhZvw9wLJ3zoGEkirLDSQzZuE3Yumd7299h771d",
  "key13": "5VQKY19iQpNf15wFFnvw1ecmAqucTxh1MPzXUnziMwQxAuPybQoNiVw5s8v8X6BnvgiX5GezFp4vwVFrSadMVcCR",
  "key14": "2xzFf7kBTXP6HyZbCzwAXLoYCWV1dDYiFrRPepfbHSUfHuLtRobxTtfrhzy6ZKujpDXNJJRjQRbhRjfP3XSGnwzv",
  "key15": "3J95qsr4Uwz17dkGKQaixiz6ueHAb4wqcuQJ7HR12jbYCm42rUaarmWn5SWtFhKVsPBvN6s92AZhbZ1tXBkGiJzw",
  "key16": "9fKrPrPDjk3Ntr2EJaWBWf1nYMKzbDnTzog7sb3KQ5fnuDgyu2Ean21TM3d61jFgkZLc55pKMWM35o1BSubgVDT",
  "key17": "3GTvVXcGsM2cruUgFFTee75vW1EwMdcStGVcaVTj6URmBZNbhkk1NUFS3EdDzkwcjors2jJQbDKE2U1AooTmMFji",
  "key18": "2rjZNB7H1bcaVyvPndgzhsCmDTyA7L8p19bNtx7Jkp2ZrKE32uV6XfNrSebjVbS7XJv7cGp8eyHjE9gvAouNyuAD",
  "key19": "61ELQ5TLEyvK57tadxbuiK4hzjhyN6uTnqXTYKMpa3rrCCXhAAdv6k6sjApq32XyqWk8DbPth5tkYg74J89n8Hu1",
  "key20": "2HKHHBk9KPPXnnSQCqWWnVYS3G384w6LsexsuJVAV7quAUpKGZ7vcbixUFBnsbt3LT4FBXKH84tPRST5LeJwQzLV",
  "key21": "3bQLXJCQ6BDnmGzMszsne5hS4dkjHnGkeLwY3GkeRyPLDEeDiL7nYbbHyU4Hbx6cETQ68vCCjm5xZUmck6qgAGVR",
  "key22": "2yBsWQpjqn22fSJQhs9xKFEmQnBZ6g17hHMoZ6A9YAzV1bnFExhbpjJ4yP63ZHQNXPqwy8b9gDKByRi7BjkAB12f",
  "key23": "5MWPcbLgPxhxtNgDsNx2Jc9q76tAJayPBLXt9dnkAydtmxm1yc7tDRmuzaqquPJoidEhVahkLdfjeExKiyuh378a",
  "key24": "3HSJ7M6AoWEF4q2hSpcCk5E2o2UdYxDeHHrG9bBYZ5FXhrP9KcTjXpw27ngkp1mrtuPx487CiZ52buCtAtFaz7S6",
  "key25": "2ujyykSNVWEjXaX61cdn4oo3imqWe2uQV9jYt2prAAbWhTCy1ckCRaR6UJNBwi9EFbU9sD5jgkSaLP8T2WatS23R",
  "key26": "vVLqZNNzR6y42QNCC1gSdsXdF2ZMEBgNw5jTqgzysHEFXvnFUFnRUUQ3nLNS5TpgH54CoiokLLt2gghbsxBtXZ2",
  "key27": "2vCD7g4KsRHVea9c3oXvSx36NRmiJaPW9CLG2PBYxJheCpS2bThtTezmG9qmVQBBFEb3t381HubxuftQ6UQX8msB",
  "key28": "3xjYX6efkeAS6NoJNPvx71wYhAdmm8B9JuS9JYoCfwVcVPS9Np12KneCPafQ1tb2zTEEDpfsKAh9j4MxD21cG92r"
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
