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
    "5gB1T2EYB9sPyVDJMBxM9LsU7RK8nJhNdj9LjpVgyPFmyhKBp62hcros41sAehTQUM3eRyJpw3vwMvQggFmsCCFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DqLHUDHUyn1TSr3XLFgyCYKPXViphKRbt9w76EacmS7QHE83eCCpWVavLwejWt9oRtZqskzBNtTCVo5UJWk5nM6",
  "key1": "48k9HkGfcwYAkyg8i9kQZ85jfxEuhr7to2dVXAHecpgCwyEcAVai35Wy3eNzL17hfMb767eTT48cLqwWo5AZjrje",
  "key2": "2CfqSnmpwcBCotPGEHdBWnRo9WaKQYnGAZ1XrDpbECfipHWosP4nbbUADMwwLif6nffqdSSrnz7yvHvdPZpshwH1",
  "key3": "63ZZZv8VX11D9XHEhWzNReNuzRfKvWoZM8DB3q96S672sHQ6BbATNJqNWSwXzATbYEgSJqzriP64E959Ym2wnzzk",
  "key4": "51y78XxSJTUNkQg7jFdo2VgHNHdP13FyD9MhxJYNDzLZyhwm7EiLjBGdt1LibvRytuQd2TPnfzbJ3hoeFYUmzdge",
  "key5": "3azB7cxkKgVVRU9UwgfBYdrmHpFeb5RqcQHwVw5G3iNbg3CCpqiv63rzkhXMogtoVgKqDpwUSa6hXfsiuu27HVF",
  "key6": "3XcXmqY8KD25SHaa3rRMnfHTEpi9C5xmD24m2kLks2XkVnKD2A4TQSQwzDquPmBgeBvvnPB8SuVmwgjmajxnRPRF",
  "key7": "4dNNtC5Q3jduvXBZgzY6nZBfuC4UnRcrjdgZ2dEspgfry1MknUFDJ7t6AUSFG26FyPk7eFCtnQsjuzaumjVF4pT1",
  "key8": "6645E6LXbgYhVqEhpDjqJxqQPC3KnejPu1RuuTtxb7jfjVNxPZ3fy2Jt3BvNQcLJjhj9BvXApKzUGYAfdWB3iwGE",
  "key9": "5ETzKGy5WCYY9tJrbK23dYhMrksosnEYRtqroWKMAG7czpXc4nja376ugnJL8BYBNH2oAsy7trUhpX83nwixmKY1",
  "key10": "4sYj8kUYjusgob1ttiNVZmWpNWRj9HFnD2m2EQxkunXDAYig1fqhZ19VG1PdEPYS4hwfQgc96DfgV9dv6aU6EGyz",
  "key11": "ArvMCNw7nHMvnQ978uZ2cyjK548vc8G7AK2JYiZ4kEBfpmXWUWdfKhXApdN2fuTr2GgK3hnJaBAXFCVrEcXiGkp",
  "key12": "E2EHfaXhTCxyWQxHAaZNqPh5KkP2TkJMBQZsEbEUcmYFT5R2qnwbk46NnD5KtvkQtZVYj5yaGauATKr1B6iLHgC",
  "key13": "3qkQvTQ7RhQcFxWzr2EEhXSDaqcXSvfHL2cxtnB2ddU8L21A4MzcojS12epbaypX46duwAiJGKhU7g7ZLtRL5RiT",
  "key14": "3wbLvLce75SbysTAExUHgM6nKRQajkXnh6HZKHgmoVARdLKLJ81HbmqNf6s1EtmKkt2QFx9pLhe1dWK4FV2qobuu",
  "key15": "3g2A76vE13bSnbHxRShoWPBXNRnDQ4ranoRHHtPFDn8QRciSxebxeegkhXR3KHriZ2kEHSuN17f7swYs64Zceaw9",
  "key16": "4yd6ELQPuCRvTEDifaM7FvsXcFQUvrmsDNsVWzV7dSTSkLtkFtQu5PXvVtoya319HCupdEkpZU6KUB75fmAAG5eD",
  "key17": "GNGvSKtbPn5vzo3iekx2tD2rLqGTGP7J7LW7p6L9hB4QSZjZPm4QQAFefigcJTJYUZhFWL58YGjVb7mC5oEEWp2",
  "key18": "31Q6L2ibEwwgteJQF5RS3j2HgcJAWm3giEcTiqFzZEg19vQT89m3ycXELC7GZzuc5trb6chAHXvkWvNdRmYPTmY6",
  "key19": "3TJEQYTHydezEemQegHgdPpvGJUh6LuLEKjKDcyMzVE3nopFw8hMJfRk7cC4fUuHcPNhRTFMF6fHWmUerADq1HLq",
  "key20": "4LBqTaMQuw6qtpAFAuyeC1zriV67EwLZiMRVB8gef1zqCdKKu83j7z15KYfAkSkTEPKzhGS8Sjp5RXTTVZP959tT",
  "key21": "33TV3pV4ZC2if8gTsMJtLWthzqYhB9tPhhuBBzx7NwwwyEUyJ9w1aR642VpK9g1xGXbLYdRNY4PSVo72H6Wx6J2C",
  "key22": "4UY2awr1s8iw9kMYzhdzwQCNDLbp6XHuAXscRXtftVvkVS6cPBts39NTCuKr7EoCqYBESyBo26pH2KGghag2uMBh",
  "key23": "2qSnR8XBjxyTrfq9CP3dcdk7qkh4PSSUJPGyJRhoEMtskWAMYDdyUNJmX9Rj7WoKVxu42trRaJtWpZpzxzG978b6",
  "key24": "2bBusPwCoR11GpdNosP6wqedhgHNqCdsU6VazZnpPtG6bSku9hu5ELRDMc1jEh2imLuiCs7BAhoniAkMyqAUkSUf",
  "key25": "JYDbmGE6X4sgcSkJnD6pzkdKf5TRYVcSPqgkNbezXmyWdnQAL2q1wyefyDrLgKUxtK5aUKJ9hqvRxGtTTs9AzTQ",
  "key26": "41oJcjCbJVde5AMWqC3A9VaPxa1TgXEt5zvcij3FwjQvgkWCHRRUk4d9L4SCAsAhNgQwxVsKcZwRZH2wxmiKw2vB",
  "key27": "4CmhogmCAF2aqdCKev8VkUcCkrQBzVhc7eoZc1pqDD5VWGgKqsNmsemcuPixd6zDdYpvqjmrT4yYeDoFtfkHSwjS",
  "key28": "4rZi58EoZkot8HMhDw9NN1DHzTBAB5X6So798r8tHn27RDSdBVXjGxLFHkJMg9g4Bx7eYm33Wvb7gg2jRZ2k2tPd"
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
