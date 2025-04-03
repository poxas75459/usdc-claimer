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
    "36q6bwCNCq8LaHtFaRHygPMwYDSVEP6oetzsW5r5qR9ayxZpGhrr6iCgsKqWUcbWepPJdPe5M6BkJEaS62xJ5EAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a91eadTiVmk1hCHmNnbn5E5BJn2ow3pBZmuLLiZBow1FQ46iw4j9wv6aSJqGtSxB5EFb9yXuhDq5JSW2q6Eo1Qf",
  "key1": "38LJWura6APSMZnWo4nGBCjJdvnAYS5N5S71jJWCWrnK8aCLtsRccmw5QZPjxz9Dy1s5Yg55dhhzKAFecveNFX1T",
  "key2": "2ypAAeXTr2tjQHQNZMM67UMw1RhhbHcXWvQzStsgZ2qpYZfA6FDLMXMyEsx6hcurxo7TVyHwpBPkCQRZpSawcuMV",
  "key3": "3JFDwDwDpDDkR3CdfcZQ69kz1A6xNrc2h6KpTHEGo7U1jrGGebb8dGX9sMkw97j49GAcyxStSHPo2go1WePNaKGZ",
  "key4": "3gg5NLW5jHipSYMEB2doq6etL8ctntURTvfJDzyLpi7yVMUXpDa79wi4FyPpRguX6aCCABSbFcELegKR7bX4aqGk",
  "key5": "4LFrwQkTpmXmAaw3HQ1phXxME8SjYG5RjzsFw4x1F9q2K5RXnUhswzG2Sid5pgMxMfy8YT8BDDVz7St3RLCL9q7z",
  "key6": "3SnyJU58LJ8PZ1eA2ffbsRavVZ1paeTQSvxm9f36RuhzzuB3EVNv6VpbJFD9TTnHYMGxnkz7mgv9u6959bxgYPJ5",
  "key7": "4p3BA4zY5N8cHDD9L8hFLSmRAmobuNyv47uHZCLgHnYuchBKcLxbps1iTtStzM2t9wBj8ouNSttJXAobwaFRQ3Ka",
  "key8": "3jVfbXWitToE1Cm2G2t5orqKAkFh2Rx7ZEZ3GXABQZNcot3Y6H7PjbJNa7bbc3eoFZQx8r36UuZCDmN6yJgLCAf8",
  "key9": "88A5ETb5E4tiZF2Na4QxB947CC1nKeBis64ZLW6nUvu5ftQzCiCMjc6atQdYfpYbsDqcn2WtEaRuVpiFL7YZ1uG",
  "key10": "2yZiydTd4hhW5wjybrVNYEm65fZRKwyasQN2P6zdTdDZJSUKJw9DokYHLWuXbxSRBseTTHQNr9YRrxdLMrSoDZp4",
  "key11": "5nyRwSMng4kf6EzW2w8fio3iNPPmsJUYkZWFfnXnKZso24jGqyK9zgnt9ennGG2HxjgsRx8sZ21bbQZH2eTVtih",
  "key12": "541z3aZ4BJ641WkuCiypqRt5AMq7ZkjuqaQwqoso5xBBbCVzwHLpL4n7wRxePxA4CcggtxzT3js6YJWizfm3S1QM",
  "key13": "5yh5ET38MVoU23TNXu4Gt8skj4FyYAeJ9XudozKmrcf1k5RjcMXtDtBMnUVkKBrshj1dCXGeXTkyUXAjxThr1iqe",
  "key14": "57FoqkBRVT6m7JuKxQV9WvZk8wpBJmDWV986QapVcKg5Qs2cUGui1c2XTmeSsgtTrCxXjBiN2Tey713N3pdCjsfw",
  "key15": "28hnYFfnhFMKCk92YNAKPVDzVB7XVNmm45VPUxYTL2LKsPSSkYfnaRLgMKF5BLgLmmekXjjD2yc9eoYFcsV3pdyy",
  "key16": "4ygu9nZPE8zKUVdb3QEVyxRLBAr2tS8RpSfqmXRwG9inboMvQHyq3F4pkAqgzpz8rL4ZCToULYsTShZXABD88U7p",
  "key17": "2n3ZU6Z8dtr7jP5sBm3XE8ndhVQKdP3MWK5hmtFXUbVYNcRYRVMEvVZrFP5DJxZ1W6Hgj5zEVyV7k7fQQq9v9736",
  "key18": "2CkxUH14YsEeZCh5R9LGWn37oJbJacq7pnYk3GFNey3tGxWxPJJpVbpJpyuV6GPLjFSf9odCHseY42UsMJxvacZm",
  "key19": "5uWyrAvMAeLPh5ckXonN62KZivaiDwn5rEXAMZeZn7EygWK9siMKkjeNqBHeSZyNF3Ab6DNAKjnk5rvmz5HVsSNb",
  "key20": "3ykDB6FcGKXAEUVotLdF7mvboP5NS2gMFXyqDBSaVVYFLVvMmLziayGKddNhgvagVzZFGSUMx4ZQmQgmjmZMBozg",
  "key21": "4ByDMcDECDBfsvk1mpiPTpXonr7uGsjhgMCwC1yqkUXRiw8oMxR2K7x5Kkw15ahJRcSESqo6Urt85yynEKHk66R3",
  "key22": "5WPEahur2VKCi23RNM54GUxULbtL6pkaL2tGq5pDvX9JbKC74ddDGVGjJEkNJQCjg29Uq92erbWSgZmswXMAjQTc",
  "key23": "2cUKq6NCwMsdHZdoHUykZ6Rz2Ewab2aQAXZv47NE4ZM7T1bWBoNdTk1hsfsXCFrE9Dzokz3bpRo9wFk3rTyZnyU9",
  "key24": "2FVe1tb89VH3ErLYR52w22VCXAg4UFdRJsdNmnrBrXYLuKvbDMiaXXnpvpYSW8MHudgBuMKptmC6VzsmoKP6JWye"
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
