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
    "t7zy9SLrRZBRMMTC6a48h49KjL9pCxD9hCCWKHRbJvyRK7i9WwBqiN1MYteRE6K1K3z1vxiwnChyHXEvBiAgTEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wcLprpMZ49nCMnWoF9Dzg8P9DtJXyxh9SSBYAVZczsgd9Qj4eEBBSoFcnpatXd8MEDeycfwPfFwttP8qy7drZ79",
  "key1": "3YUnyC6K3UKvheUo6aEg37E7o6gcKnsNGTmpPvfdefuvmo37ShGg81QQZQvqUvcYmZBV1P9gKhVyqbbN5mNRA21Y",
  "key2": "5N2CNjkRgvLdEieV1JqyEMm2ZxxgyXyynf5qkafwewSXWn2dh16fzUYKC18pUsKdHNVz3B4jAqrEztFs4BuFFMEM",
  "key3": "2pXozcKmWLY4RGemn11EQdgtYR6NcZf9cdhjc4VmfMSxaVEjrx7yjZi2pgGgH3Da7kkNDRNCBK838kTnHz5NEnAV",
  "key4": "CdM41iCPa27NHLNwrkpZMvyGH2RjqHnHqhEkXoPao5uSiXHSpUUQZAZYXDULKFpnTWAyQWVWA3uNZsNGXw7AwmK",
  "key5": "5f3wDD9ym2BCybPmCy2eLJjpSr5jjZMg2dfxSzw4ffZCVKDNRE7F4L1V3uPquxrCeDhwGvU3S4baSYi5vTwMBRj4",
  "key6": "o5A7HSdTWZ9MJ95gMx5KaLFar2tSKUGMFd3FAbBYAFqKNrsLCJmR1kmJaTVQsPzaghjM5dmE5rKGvpf1dkfADZZ",
  "key7": "3mc7nDTHA1kdcXtppiQ8wwnAb2UJgKLfYnpT2jRU9CVnPsmNNMLtFmTaSG2Vda9EHirmPZL4HCqdmhR69Wn4GzQV",
  "key8": "waGEeQGNzXb46xAyCVQfwSWsPCqhUPipeC2qn3KCxCPTd7ZdhMKYVzFkkmmBm7JUG4y1bE8RSbasFSiEsmSUadE",
  "key9": "4P9g1RcrMmQT3jPjdMdReAJmShtDW634TKspT1p1ryo5Px7WDKWRumbDEQvWjgdUosUkQhBbwSMPw47FwscPHQJJ",
  "key10": "52vf3yZNF12UvoLR93arBhFnyASewe7hkTn4mQ7ctpP31iBYgsmrJi144B3ZmVuHBdUcgKSJVmScSX4MHBRxX3W2",
  "key11": "4aJuiUYtyXTHPA73WPhXQaAQSu1VhEhsWKbgVq7gZ9GGuYXGLheFEFokgCUn8TSDc4RGSqQSXnZmi2u3MqpncvX1",
  "key12": "63C24iE8rPiKaimDshHcehtPoHRq2S2t9VrAVdTAXMmdJWiS31jD1AWXhJnRjS9R3MQb11ecS4aKkofrvF1u5Y92",
  "key13": "4PQLyMU8A8oxi2dcrVBz5i5wF2faPL1vAYw997HzhLHKYnNiaZuZh3PMLBsNGPAwpyCmU7RHZcSe3yoeuDDBSQ5v",
  "key14": "3sXFeDyM4U6MFWTrdaCb1KpnBMgv8VbxdAhNNEQWDnmqBijdhvSQWuGomPfSGYdHdK1NcDvkN3JN82MU9gVHnkqj",
  "key15": "4BaxN5Tn4nPdKM5b3UcULtua35skX9uKidvb5uc6jENqWgmYugm1XNVZxDYv3F5WxndQGUGh8sWzZKMA6EXCowGQ",
  "key16": "39pRMe6EnhchU9ZU3onhKrMs5PFkUQ1EtRfqZjv9FRNuNe4WS2m5QRnQ1YybFZ52ayZjGhboTADFotHFqCzpRTds",
  "key17": "5ixY1aEcGw1oKTx6zY3xB7B5cQE8tfRrrkyyAoRGE8aWyxXikPTGSipwGZmnrTu5sENfvtJxtHHE9D5aeiexqRZG",
  "key18": "ePa2JguFe1vVhC97mTuP7P1GTepMQdKSmbzrh5xr67Ugsccvsg6KApDPsuz742ZWFqqdqcnxu3UJ3ebQ1LLhMyF",
  "key19": "h6WXjTGqVJ6KL8EigWthzB5yb162SysRfAy6FVfuYppvej9iYAyjCQFRnR67am3DR9Zh1VsEcWY7YEWAKowwn5N",
  "key20": "4cN7Zv5C7BNty49SjNNiEeoKc5TwzwawsYPbXB9HoNfhnbnQ9PU1hm7tp84C3gWCNTdqsa385UQm6dgV9efUZ53L",
  "key21": "MWP17p87u68BDcnDtvN2YZ3grNKFERs3qTYyRRSwJm2xzjAwdhXPHaWTjYjnSVnQNJn5XX1ZX9zPoACqyivMjN9",
  "key22": "2HNKWCfGd3CZyQUcxTHfs8sreStDq32trpmr8L6uqhH38faR2boMmSUF7Fq4kE3nEubDxaSKLrANonMMf8B2NqQ9",
  "key23": "2tCPePuPkwRwrxzs7mz7dzmJhh8wVtwsrn77BcNRjPap4ZK8TEmA3iSVRWwpyQEvJ8UnPrT9zQxL9VT6aMBgap6K",
  "key24": "Pg7HzzV1DsDtp2Dvx3cGcBV5JZE1KVj7zjkzHyDzRTJHHtaE8X2ZU8gcFfveAbCB11iv8K3e8M58VAYKcos3F2j"
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
