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
    "5GvzQqePDmVVyYysQZ9dRyvk7juiZtvdMKeh4LdLyZJEJZq5DWoLeqqLGTVmobZ89vLySPNwL4iLtPcm6hQnQVGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qmS9sDSH9eF8w8arLZ8QELKEMB9AvjWSWBbU6Qm5BMvRVoX5LpkT7yBvnfCpKv1g8qxt1JZaUJ143uscSyBZv6f",
  "key1": "4tYDK3kScDSJNMDVEpCZjuwygcR8zMKZSP8cDCp6tpkha67XjQeRpQtB787B73JiryLm6meob6JNUSLbKCfkSNnx",
  "key2": "2tWg6hNsqAAWTU5gQ3xBRfcZuherCT6JkmphDoHyExt8qKyvPHssZG7SZRZoSqbYHyJMwY2wHeASti9rycT3ubJu",
  "key3": "2gkoaj2xqjpiAyJvtAGM3RncXtR6cyztGTtKf1v2iPGjZ7tC6Uawcbd33Bfa6J7q6TLX87SzCXQwDGVbwMCdqC8m",
  "key4": "2BdkiVhJDsBqeYzL2diPd4YtpN5HHkCYrN8v85v21zcPsvfJTHeGWjWqKULDnV67Bfri1Fx46iH5zT8VacLUL8An",
  "key5": "4Aj1Dt9DQ7L9CPLKXJVGvU9EW4ssczawwUhkRW75i4e3VRUjk2sEWmhK8Z3rttUoQMhC7WncUXMSSFa9hJLNHuWE",
  "key6": "4Ti9kCzKF8bn6cUiJPZXkksPqn8bm5jLvaq5nEjZsw1PQtS2PWke2ufNjrjkBNNd1k3DDvWSnUhP9huKUpJEcgkj",
  "key7": "5Q6sPZrYAwdZwapuEJpZ49TB56EKwLQRF7nD6BudigH1ZGx3K4GUAbfuN1chJNjFeQReMavtoeVLbptkn2wowGC3",
  "key8": "2FGp5qhucL7QJQ6ZcA8xjtrXSmxT2YfzCzA2wfJJc61uXgedNAzmZsethoKDgmmSadqpfXDvWT9RNDY5Crchuj49",
  "key9": "2P95NnQhqxLC7ZCkFM3hXPo5PjCTf5EVZiaESNmbpwwygpfst98bsZ2a3pBwzXDbKYDWXJtxYQNWZvsZ3HindoaR",
  "key10": "2AQhkaVLxdqVLhRrRP5TXGL8sxKh4W1F9BTDAvbwcuTbZDEcXdLympvJqXhuqm7gMXbMUQEQf7xhsngQBM4VsgZs",
  "key11": "2NxH4rExJxmTuzQt2WiCWtw34Xpe1ACVmrwVyrSRiX1J7Rrc12YbS6DNy9F2ygBh96oZ4jGYVXgSoc3bzV9LfoUP",
  "key12": "4Cp9pAxpSZB3kdb59RJGJdHrF9eEq66iSkf1SFuXDrEctfqbQf4UmvZXvvkpo52hQiwda6ZdLCvmLA9mBbxxSQGd",
  "key13": "4spQ2NxwvKg7CQ7xVYiJBbayFDdjkpWxTgYoLCRnPZAGbkqrJJDyQoGJYzAcaVaXimjQbv1fCyqqmrRbTZsqCRHj",
  "key14": "5iGw6FtB91aMBG2jroJa4SUh7snreS41zqw384NKhxpQgmtho2K8gDrWmD2huyB3gwCQwKXSWc4Lx5wm7dwm4Qhm",
  "key15": "4Upokfci7cbi9jTgQTgWmKKmHYCA8eWhHKGvY9AuGctTj96E8MnPAAUwTgw1mQrQiKSauGHrnAcRJSjfQvPXV5Dj",
  "key16": "5oH3uygDbKPh6pbiwih8PWBmhwUmgkn5J3eFKgjquWaZmGHNv17weZqFJKB9Z2tZJnvoPNVRpm2CRkTgmBw9HUVT",
  "key17": "5W1HDLqvkWc7ra8Ya6uitc9jJCEbWKrJq55Zh5DYNvzKxMqJrEh21oEEwZaCkp5vrLZXGYuMZfPGShmA6ehAaPEy",
  "key18": "4B7MK36VxRTCW4eDm4WmS2JZLNM5hu4saHKhBZpvcQdTHCqS1juJQsGk1TX5wvyGaCxyvEzcKTGPUSqu7vwAvjJr",
  "key19": "66X5exjGjPCEafxxmwzWriM9LJKDH8YfkysHcuCh6oFnjR4kxFJzDEUF2q3SAR3zChGHUcj9cVtBE9Ez46YgeefK",
  "key20": "qZ9VmxAZPX6bhtrLAopwi6xRX63FK6qJkkjP6szY3k1G4BX6EBCf8c8n8ZBrrMUhNpfQV5zv7wV5uAU8DHcaHAh",
  "key21": "b7EBnqPzhYivpqhQg58cyyMiM9yuoAo5An6JLKTN4TDkfC1HDGUbYwHoi9kbX8nW1NxzfYQyiBg6NBPstP8E3X6",
  "key22": "Ww9izN6pC1MgiL67sJ9iMgx9hhY8F4RGKqRvVYKciTcakV3E8GuP4cKW1BxeXv1zovjFzPF9b9r9tQhjSwT2vGp",
  "key23": "3PVn1uZ38JXrTNvsijiXZvxSUbw2dzPTjKdStnfXMUjepqr1UzpeLQviXx96pN3RbpgmoZuHoNfYWTcC56hqE7xC",
  "key24": "554f5gdh7qBbFUHsYgTZCHcPSiiZCy4TjiTmEGNKjy9UzHXYwH8wLNVjcFdA29yeLJRL4SCKqMPZDFCMAvk55cr8",
  "key25": "4YNvHuWjZJZBYSUdgB9PCfEyyREQxpU3axwWntuM94scqrv39BuA4RPNPWPPu9RjQHonS6FtQPmzwmeK6xYcMznY"
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
