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
    "4giXWpDWh2n7Pv7REgUj81DPt4aFp9hZ3YNVTSKZjvYTgyBAEnwHTYn6yfCFchMcfBiSS6zkBUW1117ABpWDKgxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aZmuiyo46vscE5HCH3HBHwrYcB9j9JBpmpqxf2EKoY44c5wbEwgX3NZ5yN7EfcGwa8gpZ8hESK8romAXXTP5nQy",
  "key1": "2ErnonS32rhb9jkdyXeV9Q1ViiYU4BSegsqT59tS6Lv73v5fBBXQrQtQvWQcnyUAnzvKCuwxp1pPPgo66mEMFznB",
  "key2": "2cLGkrveFLfW3PXJHw6epfph1Ne3WexCKdREQqPRQFpBw6ng2K5GXkQcsjZqM4xMu8j81VqAzBichGYqXZoSweq4",
  "key3": "2yqGcERTiMWWdQHhKiHErgbzYcA9axwibZgskgedTViy1ZABWx6D7JgFkrrQiKsLYfWEzY3HNdxCPZcWwCVVCpBZ",
  "key4": "4gHYHuxfibxGA34RRATiy1QDxjWHdGGTgaaR8NGYEQS8TxBZWqvqvCqj56kXi2tdv35C9ixiGhWd6LR6duffw6zE",
  "key5": "3723YpaiaL4cEefmYVRRVaQhY1s2uwpPpyFsVzgm114y6y3zJYi7aqwbLQuTjBiJGKFsb2SrXyQsnhQmT5MG7LnD",
  "key6": "51nq4hw1maq2BJrRhrmii3smVSwEMqju4ZSUxUDL2TGUAFnHWc5qermpefZMW71qKjtnADq6193KYdVZixU1VRE1",
  "key7": "3pnP5g3soYkwGU7AfE79Bc9dxtSMBzsyb6U7w4tcf53X1uXgMyYAWoCvMujtNGa22bnpedaqWFG7FfyDUWkPvpCy",
  "key8": "3Ts9BCDsbUq5vv7vCzB35oWDyWca4ARNiSi8XTApYGP34RtDifmgFC9iq6PWwSHJBdN9EoSMzSWCmxgFK9P77rK7",
  "key9": "2NMs6gqwcRyrEdGpoorVW1ULpGHhC5V4UaY9zeCm2P1cHStzNy42Vh3py9uhC4mjB5ZmCthcVgj8hmW7dqwzufwP",
  "key10": "uvs5VS6Si4LBksHC5Fp4GqqEtqhrLUZtxcQSCgLkicVEvFJcwkpEByg7VVQVNy77tPfN5aJKrACk5KKTFdV46dK",
  "key11": "3BfLPAh5HDnZHbau7LisBea4sRuawDnuQWAZNE7Fvc9HyJEwrRzH7X5FxyqtVMH7Rv2YgUjkY6j7YAusWkcQnXaq",
  "key12": "3DkJkedCbh9AR3UxXNjnymPnczmERCwhgU3RrhgECQbc392E6f6sRuih8SptMMknhKvKW6YN5Wfc6ENtHQ52WjEV",
  "key13": "3ELqZdij8uCyKnr3FQ9J8bRmJF12vSip2LA34SRqd64ZRGPzswiEp1UwPtVUtioipeeAZXCBBRuaUxhBVAbUhcRi",
  "key14": "vDbF4REYTXPFZ6wJRxNz7kn5Y6b6ynfMtTwNHkT4ztUHe8hBUUjsNCobSmDmahR93Po8r3G61LnkDCQ7uEV5YyR",
  "key15": "3UdnUTVXVP67dGnWWsuUEY3H5VA27GeAErXK65X9TK4rFpZRm5GfAmPc8Ps4EkXuRFAUtkDX6zjKct4fh5fZKahU",
  "key16": "3W6bVdcPFG1YgYRn56qhvnyjufjUTSE7ZdrjhHJwCoUF35ovXUJGnEJRkfgwTXoD7PWWLzzhrdBHNk74DLZiqGG4",
  "key17": "2ncpUWykCq2JXnku2kf9jnUD8dZgX1u4AbMKGQSFJV1g88tnpM8tWSjvEcuRQ1MjFDNuXAZL8PkYKuyzZeBF67Dh",
  "key18": "41iJtyuZezN2fAkn96LLdKCxi39iRj11bqe5NRhzqFNBiDouD9tGq2Jk6ziaQ7PqTH2ZxRuQt33wqJsJqui6xKEF",
  "key19": "5m6PTvGnVd625ZDiafnno36VP3E8wfqBr3gVUxzHFYyVmweYCayf5DWYAUyAnBfL2w6Xu3STasyG6sZ4gzkBWtrB",
  "key20": "65XrtbnKMSrFYnVHSJpyUZevh4fjobnrzeZj29ERAFbXkHcxPHsCmUmR6QRqgJNq5XxrXaDtPwWkqHjRMWhynCpC",
  "key21": "j6kzgX5SWAbjtM6mYHdLjSniEjahiWaYGpeHLwqmDs5BguST8K5ogk7xquVqbKRceqPg7oXVgcCof2vfseFEaNi",
  "key22": "2iJ8fL3G7dBM9ar2NUCbtdoEUEjMe2FtFUzcSRrrKiPrPErQZY7PHCmRpitz9HGdUPRe6fJAQXPbi2q4rfaMq7Fs",
  "key23": "3ziv9CPVCd4PtQ79aBu8WbDRk8sHat8Dbq4D5NfmWfzAUmrebLrEMAWzJ6yEJ2gzK5M7rfzXWJWQpiiqEm37kr3s",
  "key24": "48Z9NytLnpe2hbmEAUXmpda8U3xaQ7UKyvJS9zYenxHZXUbEwKcBmo6oofgLM2Z9QAfVZsg4wfyJwbJSe7QTGEuK",
  "key25": "3RLToY9Jaky9EPoDg3TFDKxfrwnCp91UzCX5K5gntR8pV4y7jshNDb2xsWbZZb5VZ5q9o2jsuwAptVexY3mc44DK",
  "key26": "4RXYYnU1NTHk4BVbBReQNdv2GWPnXqB5MrNEKPrMs9Pn76NnVPYREG3H8HqztqNYpKU5dcPJV2B7Razrx1Pi1fFX"
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
