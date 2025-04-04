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
    "HpiMUtV7u4XTnP8jS974V1no7aDHsdGZzr59tYoLJZBPiZz9Q6KHE6pGTLyGS7ijdcM12et2p2ft9W1DMK3Ykpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WtpJ7ZZR2Ropy8dBDnhNjjUmZgobYRURDjbxTFrt2bSPBsVc2u9DTHiGtNNYqajDAm23U7VSHLxudfmCecb67BA",
  "key1": "4qQWB1Z276XkspSfGE5kug86gpzggt59v7rF2qiSvhfENGj3QppQ4ZEH6p38eWVTD8UvEikCrAYRFhgkcAojHVyc",
  "key2": "2hUk4tXVpSjg3iD3anDHQfgq2ryu8AnNsRS3pTybN1aaV967wZg5ssRPbDTMnbKo5RtNqHRZ6Ene1rwViRg79s7",
  "key3": "33JJ6xSheCnjmU5LjK47Y2n7yu5fxoa35gz7hiDxScdBfdVN72iiHGAkcifnCBpV9ocFqUDQegWRqysQVZEFo1kb",
  "key4": "67fJykxR9p7U8P63zq4TSuSBGkh6VDAGm2k8f6WwYxN2ZNrjFd7iJkSU81X9pbynA14xGYdzaxyJou4XtEPihdy6",
  "key5": "5VPAb3Jwb6upK5edZVEVffBDcfq4rwuN8pY3YxxEYVQMNEu8XpdrPmq3be6hryYg7hWieCyattjqMDKNaCiWPrqY",
  "key6": "WtBEkdEBMoNK13dwEtHJBa6ZNYJ1JuAu5WR8T7LozHvmkxttx58esbmKp25SY6kUqHtp4BedueWiui6uXTD5Kpq",
  "key7": "3riV3J841PZ6i995PRtR2WyWBttoDsbqhaLkHZW9xQxdn9u6rtxN7WWj4eVABdiPxt3WY2UxikhtE3Dzmt2NjmYq",
  "key8": "2kMUnCw74b4Y4o8vfAirnrd9DYWbxc4DaroZXMfQXjA7chwNBDzxuv3DtmhgHiQFEsgXMEX9qhJ5j3XBqEzJCwaA",
  "key9": "2igt99EMEWezWPpD8dLXAFeTWAxx3G6gHbiJ3TUXepbs5hJncA7Wm4fhLumxTc7PwENMYf1YZJaNSh9MGPdVjxTY",
  "key10": "55WH5iBT7u2gmQqbKXmBWZL4rGW9x4eSKRrM6iwrt6gJ8HwLME7cJRs3AHE3GL5iSZr8iY4SUEshMCVEMg8w2r3G",
  "key11": "5rppYRoSiQvzThs6Z9BNWguH8BK5AwdzRw2DHYypb1jVpbwnSxp8QT4ME5J6hq8HLxTNGEAZpbK1BAaRsg7WrLLe",
  "key12": "4x8yymV6yh8m51922hGD4YwGJRrrzQq3St6hqLx2cA2pAQ6XaekyN2FQSpN47Ga8dc131Zn4rURtdLqEzowLHLfJ",
  "key13": "63NZyynMKym8LdUjFyg69bT9WQZfz8LFyVy388nHUSRa1LWq9CwmbR76gB5hsE1k2Z7atag1ncmGKdJfuQYWL7cp",
  "key14": "HZzF2QFQBFWW8pqn723Q3bkphiSADiDkKT5KFJ5Sicbhph9twsMzp1EYDhcDcHFGLnBYxk7t2keP6QcygeruTiq",
  "key15": "4hDY6NtpKdtJz2TZ8WBh14LNrHuGir3KATYpkZFLUn25551kUdDkjuMQZNngVoEc32C8z9YcdHjbb1XhoJRd2w7G",
  "key16": "5pY38GD2Bm1F7RcaouDECZc8aGZCRMPhptAYsEjvFdDSA7sWPHZx4J72bga4VkGYibSFMbdt1fKDHGZ7kpzoyTSb",
  "key17": "3LTBivwfbEmQ7YdJcnfh9uu28nqEiqe9122ogyRsWNykFk8hM37gptFSJAVegexJTP7ac5ccuzZ15D5yV8Vy7RQp",
  "key18": "yk9mYrvrzpgs9RU3mxVfV3pGYj9P8uuKL5TmvCtD9K6ZKxSkAKYrYCB7MPSnjFXciXbhBqKXLSYpW9ho2ZDcSGC",
  "key19": "25KKVMDWcabfcXULSqByNSywNZxVUmakvJYm1guZ7bcDdihWxFcWuNE2DrfQ9JRVe3kg4FRKKAQaHvohodNkFpiw",
  "key20": "2jLEmUckyUMLWN2LrueaxiFmpeQGdjVfkYWouLz7XtvP6oGoAFoP69mkg4L64MFzXUgCKHz6Z55SQGdyBi2HLEcP",
  "key21": "4uenQ2oGrBH38okLkPjXMjcurEByaUDf3ePigfZcJ7BTNrk5FNCyCY96RNNTpX7zGtzZosY6SyZbX3fNT5yAhVjh",
  "key22": "2Lh7AyMg6oZtATnQ4S1CM4B8wjZKgQZj3xaheMsTKewWzzp4bPrwqkLvNWK3QwUMz9CKppfnzA7Sr74pVjnMcrPA",
  "key23": "5fVjr6eFPpq2JunzxNC8JTogzP8AanjC5uDMUkh7LoTRin1D2m4m1dWo3BQua6QCCqKi2Eib6JfDq3WdjA8BJ8Lf",
  "key24": "3NcxKSuF1CsNbJS2do3KM6SByjW5jdVjdWHt8ccHsgerGp869RYhKFneHRMd59a2eohhH46GMT2iu3Hq9bhAgSXr",
  "key25": "5CHetuG9GVxwok5B7YYFBKseBpBPdyjzkAoKUtM827utcTYiAvKPhbN3j1i75s13MHhcSGnaTNYW1Bo37LQ9uYvx",
  "key26": "62DjzhSQHWrnpz2TNDUWFWUyw5s7fvusGNLw8VKeeUJMpdnipFqWDWgKF5JxdkzqtDZtShSqBQWrhhH21xkh6Px9"
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
