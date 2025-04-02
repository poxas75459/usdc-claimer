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
    "3m1TX3Uf8EqcPn1JsXocbrggYcGzw4ZLn9crtBcULmCYsjqztLnc8hBxjLVtMA86e6j68A8XT4qchBRA7HTLvCxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PRWwe1SwfTffmSLgpJFnHasbdqfhz4ukszPJ5SxExbAHNVLnzpicFoNR3r9h5qbHhsv1677Y7xYsCCsLizExPdo",
  "key1": "5pMsFDCycHeF7inrJwS8kfVsPHqbTbSDisYXzMAt6DvEeemj7uVgM3sw9PLDXkpokcNUWwe8kgmvk7WNDUS4aUwm",
  "key2": "D9TeLejsKMGt8dfTdEmTKsqkMMjo8ut7XuQUTjwiHmarrcdvubuJD7Z4g8KcrikZtx3HQ3MLgkjdFFW4hiRgPNH",
  "key3": "4ZKXGnRjLFk9nuVxUZ4hG4NJ5bv9Jtb9N4EgdVJVFJ82xhKZ4DZE4pduU5HQd62YK3nMmB4LWTXiefN3gkgFqfSH",
  "key4": "4AHwf5Qtg1gwxtsTymRZqYFwP6F4YLF3n5SpijPQ5jANWSzSgt8vL1yTj8dQqCP6vcucfrm5aSaiCvd9Tt36g5Cx",
  "key5": "2Wse2vRY2ZeVNeCDUYQJbasL4MUkXRGuS1TG1QaJYwFAdiigXE3XM2oBqpUB3TRuwi1QAe5CJJpiAiWAJM1EGqct",
  "key6": "46U72BYn3NLJFFu3JEW6YNeY6P9uCAmStyzrAeF1vgJH3qnrPwQTVmGe5cNGVKusrw3zBPbJnwrF5QQEHnucdDaG",
  "key7": "5ueN9SVpMCD8ob91YVDiqr4iQohaJTJWB7yoYszjK2DAchjdc4okoEr4EKSnxgmkwVtDLCNdMfQ8rHq3wBU87BR9",
  "key8": "RkPPT4oHJVsKhzFJqLrGbbCjv2wiENQ4CeUccz5mbdwdbgdWWQvPnkPsJ4Gsvm3CgL13J1xRLdVjHU6YtZ54a6T",
  "key9": "3YjyJKVqB6Q6hMS1jJZtz44XFuDvyKwUW3MEVNJSx6NeHeYTbJBSySXhF37pi4WDQAnbSm19PytAHTn3ECFpe1NN",
  "key10": "5Yi7fBMRwunS6V9QeRAjABUTQx8pXPM5DHGXQe7T7GA9NskqTD7KEAU3taMwcSykqQVUhfKHs6sXWn1Pxefz1NMY",
  "key11": "5WhM5RbGTjXY5WGxe7bN6jjAVSJhwaQqrgHeVu5sqrtGwhyzRs5ZhY6NSdrUUhFrwoqVLae2Va9Ccs8zw41yMg1M",
  "key12": "24BiZLpmrVEnJ8tpNqaRPS1QFDKULcZ2FmYx87LtRCFHESHF4NSukL8XYiYtfRV5Doafo1wKzcrh7YxeZKaofLYS",
  "key13": "3artL1GgnmsLemwS6AzY2wELc2YmoZjmGEUE9cYF1t2xwbZJAXj1Ut3s7r1zfK5BDuENHoVF4vqCHAQGKUjPaEvy",
  "key14": "4eu7G2Lf5MHT37pk6Qsdm4KjbBGuvKcfYAApyadoSSv8gvd69Ex34mfqYJmFzZcjVquPo1n7vTeYfk7xzgpuioPL",
  "key15": "3QjM42Qx2oWgzF9TVt5Mn8UbVc9ksETeGnofBnoWnJfgXHhBdGXB3AYzmqxbk5W3Kn3ZLDymwUtKgu1enK3Vqeqm",
  "key16": "3uhQj9WprJNmZsnaA7j5EwiNzHHip8WQcYuh5dHU57cE1sCYiNbZhJbDx6cr5tTjv6grBnKdGcfiEdDdn3NiomHr",
  "key17": "57yEmYHtcjVLsXHh6mMhe4QDE92kf7PSqRzn93oTQv3NgTH8zMVVWZLe2CmkuppQU6X49v4XMQGvJMGFm98oCQgL",
  "key18": "4NiigKxwXUJfNrjjfNzhNdw2D79dPnHBwrk87SDHE5SDZjK6wrLH9Uj2Dfif4isjmjmSXW3tyEUahPZtiwKy27ij",
  "key19": "3J4YLDSoh86D5BN7pYTAwqGoLx7C2CtF2GfuS1YZARP5cphUv6SrojKXgFbEgNq8Bk8Py8iZFfFTU9mMQnVUDKYB",
  "key20": "3bWfgCp4x6TL8xVK3jVTyTTqVBczj5KzjWvyA6J8kuJ1vt3BAZZ5tBa3x4TpZk32y4AcwNTF3BUJns4P4YywqhPz",
  "key21": "3KKHzJtPKcYJbb3LZdxEXESs2tYh6GtGoY4nCzGif8qJWwVcBq4xHG4gmpguv78y5TCxci6K6BaCMXK3owPLNpYk",
  "key22": "3a7VV7wFTBG7bA3qBQYzAmARNf6Hjqb1dJuhgtVgUsb5gxgnhwqps2kSv6DgXN6sMAjfbqcBNphxJCn6pc2XXWcE",
  "key23": "4cajLztEK1gaRPKnQBY1tFqbBEecxuo4FUepnsLBh2pV134irrrdp9PeLjkuAGigDgxvwFDaz2WftZjUo1MivuRV",
  "key24": "2SCBdodYW7ZSsYZYkUFp6CcFsKpZKst2rsPPbF3rcG3sTjQ3xXuw7siqwgwrddQmcEi6dfSLup17UQjoCNwpo4L1",
  "key25": "dVPhQ8kMo4DAm3aSnWKUssANL2WjJA3QCTqFfNF77CWs49G72d24o8q8JwES1iR4FBZ9s4mSr34DfTpRBrDVU9s",
  "key26": "BvKrQaa59Y8VJP6kHVnTsTC85PXVF4QVDqugrRtMgSb79pBZ1N3Uaw3xKy5AcRmKjKkSYHAhaNS2jc2FaBpSXEH"
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
