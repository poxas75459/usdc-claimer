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
    "f1aP9eD8LjfnCgP9fXkak5DPPRoB6H4tFBvS8Y5nuSCcF18w89Gx1MZHrXUXHQzGFUfE7Byhb4G5kZcjBySX9DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRQrwqtcVb1rBJrMEjWCuJnin26FYjetbkEa8URaDSjY4t4fZE436eUfSb8ZNEpfSDcvoiojsQYmoLDtPTmQ51h",
  "key1": "huncYTKw1cQiAYfimeB1gMvUDwy3Gdz8BY3pqbiXbED7Y8nk4WJrMV5mv6tGzS7wk1bq59YQFejwmQiBqWpDhdt",
  "key2": "4AJJKWGJm699DdFwRrHEtoR8gNUrJP9z9N2YF7aFv4sKwpP5ycmFFpAxnMecprtHRSxABcGyf3kVUgBg96CrGQAC",
  "key3": "25uAEFi8Sz9ZwdCdJZk1b3vFS8FzvSgND5HJTd8JKCrJ7yTxMbF7vMSxBPC9y4igcUwz67Fxgdfwm7s1MVhSkZvC",
  "key4": "5xSYzRiSpvgFBAhhgjC1hzxEeCNuQjuKAav3x4aBXJaSVjgJ9MtHFcR6vRZuBoGwtZtaqYzTKmhzy1pi78nrenf1",
  "key5": "5aYmMgpFLZ1qUMwC5ncVkSP1mkWf2SuKAdWE61b12bfd8d8Vy9Zzd9zBQPJtYwX8GkoJgMVz8T8pkFjxcdWP5wrD",
  "key6": "3ZB4jt78kY72UR4DXUy6xHf9WxQMCFQhuDJKTFBEQPpUdH1DB6HZutPTUsbaGPKZ4cn9NhivaHw4rjQArsZvnX2g",
  "key7": "2xZ1r8iLmtQqQ3UEjTpq8ce9tTUyunE7Udnqvh9R7MSrRxK4eQ3LTzkv6e4E28RZs9hB5U7cT7K9LLM43DyY89to",
  "key8": "5HEAgzVkJ41X9MJc5yJgJ7NgY9cksb7v974marqdiVQooyJNWbbTDAwwt5vntGEiK6turSLH1iRhnxZFYCtL6sKc",
  "key9": "67Z3y94wRQgM72kvjUTxAp1FrXcbgCWfkmN25EwY7DD6wRqoLgZwvL3Jz39AwMusMrVtGtsYoL2GQuz7EgXsuFV3",
  "key10": "5Dvfh5ojTXpJMLhgh8qqG6bsh3AGWHp8XXx9r9TSzitfjN9SHHxF87GkJUvNYD5vgW3k93hBTd4cZM89iA3eGRVD",
  "key11": "6gX3Z7TrtvtNjc1D1Pp7iAikRFbH5WFDh8CzfLFW767UTgLhCrfHcMWw5Rinih85JT8SxRD5poFamXX7ApKgtXw",
  "key12": "62ATbHnfho3UEbsRRgQdUom4o2uJxRXBbc2UqzfkpzZ7BUjre4ya82JSZD9C37mA1igc1bxSFFCP2gyf6h6fTzL3",
  "key13": "2zxopb6aQDRxfsy5m3aNVsWnNs4BzQcqYsmQ2Na9LLxfNiN2yQCFtYKDpxWymVnDWX1caM8guvTdMc835jrNow6c",
  "key14": "34kxpu8v4qE3Q24WdbCo1TWYtwijCfnQi8vNJAVod6YUDXhpe1vc4m4pBiwG32PbbhSmkQJUjn76zZm4YPokGHuo",
  "key15": "3JWkJUsbg2oY8zG7iWLh1nauCnrpabyNQVdgWMwFDa6FvzK5aoVSqmPhnZYeUzAPmxkVUETMHfcCDzggFG4WBs2S",
  "key16": "5tbThoCd5ViyLLfMCJW9v1pmw5C3PvsRwGqFpjt2kEvx3cttP3cWkuCnLpYcXurmccBWqUUEdFAfQNjUygoVQ165",
  "key17": "5meA5h34U21ZSwKkFsQaKWryFx8DXpc2Wr6BLbDGJGqEdgT85k56h9fZXiCFC8bQ8besxwCZpMua9Fyppz9qMBLv",
  "key18": "3bApCbBUuvp1af3AWjD1qPdX3nWSt9F7Tr5JDrs7gDmAVqnt6BHxm4Fqbfu41G3rhMQEPSNMvtAyrJQ7LbLq8cxe",
  "key19": "3f1FdFo2KBKqf6WfDwaua9gAwBbY5awVQ6mXkK4mFozF3dZ2suioDEKsF25qzbj3aDXu9bKBrwF9w2dnnbNfRz9W",
  "key20": "4NG3rh55a7VfQJn7K7zN96oP2YJCzqtyNoP7oQGa4AiW6jccUVmZ31BAsVhJrEtgfAkyMZgcAe46Evpt8mjmRDfu",
  "key21": "5VfxqcR6cDy4kBhb8XYY2p8tNfZujb4tCrQ7jYzhBP4tDzA1LykCoCCByLRG5HGxyGNnU4qFxur4t6smPVKEA1w6",
  "key22": "3fEmESDkgf8Jvgdd6Tx7o6aA3NP7aaHE3EaavhR8CYoRwkC3syxF2hrABFayrAFvdCAS5kZ7FMfGJ9rmoSnRDafe",
  "key23": "66zCCAFN9LEBzoiypxoftfEvTUdZykv5tjDPm3bVfBfWffJ8Day8ML4Fj4fo3C7cWANaXdmCS9vKrnWFg2t7VRQ8",
  "key24": "53Hqb7NJHQdAUBcoJUwFaqQ46CufMQYeqnxr3NDAFZpT4xBT7fiJG6fUzordNrXZXztGHBzeZjXGMYxXT4rhL846",
  "key25": "2mrEGbBiKppidvK1dbghj1jY21NoqajCHcDmuHs6peNx896sPJiQAs8TjyswT548j1sXssGikQdwbC8km1GG7LbR",
  "key26": "5G8nhoLGep8aWYJZLgQdAn2tpfAxJaUD95QY7RtdcsaX36sCccg2W82LMKnkhACTyySehoio49WqgsjKTRADCG2y",
  "key27": "5Cz72j79kppBqh86SZnTVCpwHNkcVXK24AabiYYaG7B8HuouQPNuWSwXpjx9HESkD8eHm7Dz1bfuFee8c1dYVVVB",
  "key28": "f7XV4qLpVgTBi31ukJomB6qZTQrGGfEbiW29ErWcCuqLkWJhe6s1XrfVpF6pHHz54MPL342BaAqFUPpzZkZUKa6"
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
