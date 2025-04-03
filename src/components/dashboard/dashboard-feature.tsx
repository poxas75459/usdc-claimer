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
    "3bNg6fqmt3igKvanKAeQXnpwWRL1aJR4QZhJWyaye1trXK83qqdB9keqDkRTEE9MLXHBAJLGR8SspYV13Yckcxre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64xZtuiKhxnYbT4djwUr7yTYEy3Mg9GuMkTZyux95SZmNkj6qJWdzFtMy8idSdKGGY8Cu6YhNZAQf6P9qmeRMwva",
  "key1": "4oUyY3ZmfZi8oraSsvLL93CFMiZKz2anspgfkxnh7u8SFxRiAjd3as9GxoMhbciDsupUnNL4ELBkWVmNzDAzVYeN",
  "key2": "5PCkDE2B2igN5D5VKbxtwUbPj9cWijey7VFgi744oBbpWYYBD299ZYSSRm4QoxUKHQNk3mV9mdwGE9pJHpYrmCVZ",
  "key3": "2Wp9PVSy6SP7BnMC1G4iHPG4PyGL9ZnmArPNnvQxzxhmZ6Np7B6KG68dT1fRRD5S88TUtYUnVjm8PUAeT6c8sZ5c",
  "key4": "3UNLMfPCw99WTZcNdqpHZe2QrJJDpjcXEPrSvdbzgnSQuU4MMY6AQLb8bQGaP5Y262mZBdcUfxvoFX8G7xwDzaK",
  "key5": "5KvPCCbW2KpbAHRhiBcHecomhoSnsmcAYFXxQmhAZbiEXDerCyk8Kcy2vLvQkwp17hsGnDqVE9FXnpGjbH8sF3sX",
  "key6": "Ps9dR42pfZLYuVZsPWrnMu8TboP4sudwenXjkdkwKLLEUD1K7eF4n8KqoJndTTwTTETw2KnEtnpAahZDRrWuiuW",
  "key7": "4PFbWGe74kXj8EPzH93JMJSEuvSpJXsubzKaULhqiGFxTz7Q8QzjosPJDgDsUQiA7kVDxrVcyepiVBu5bAubih9P",
  "key8": "3LouDvXWVnpjBi7ibhJKXkccv7XgE87VDyAHPqPZcNfoRLsS5V3N8g3QYYEwmMtC8KSHbs9NFjXGr7Vwc7p7YqYT",
  "key9": "5gemF45KbkT7ddGG9MheLttKAc9UPxhzTkgLaA3UWosh1fPSWr8q4kcU8FZzPqAdPKka8yAo1Tj4CDcxTHxcSYW9",
  "key10": "3eQvjTNio3pJgYqrRZCGiBxYRhdDqxdvEe5AVyFeDDXLV5hTsVjkL3wKmUSym4jJHXi5N9zfHN5dQNFB826ULVQd",
  "key11": "3wDXXSjCTGup7GfQhqJ6ozqCk5j7uUrqdPGCiNtQnAevGAHyG2NNJRfncm6MoPzpPL4HCGf4efbYeGiP8imnrnof",
  "key12": "26HkJqoEb5ygfLQVxTrLh1h3FFJRosEoaeVCwvnL5GjKgiAGBEJhuu7hbgTSB3itpiUyYR5CGrJ7yZFvS99BGsUK",
  "key13": "4S2e1ZTgfefTZhphm4qpTUaRRk1kiXxpy21oLds8gTfGuvVA1876mew12ug43sgurEHwP6wya3sDKydmqoZDJ2PQ",
  "key14": "4jWpTL6CbBgv3b8ZLs5ShzpitFc4cNfxMBSRQ8DyhozPh4xJ4a2fciEFj412VZuLR2zchyUUx8N3zqniGXrX9oRU",
  "key15": "QdKk4MR27AWZnfKDywSmzQK3GppVtWryfWsDRhjgP4bd4JLcWh2vBJjarzDdbKzLse1XwkdQJLwKrVqecgji9L1",
  "key16": "3CPG1Shbrw8Qf9zHRs4Vs943bm5GH8S1rdzJy98fAxY5htqE52vTkYNzuSokfsfS5ZgUTuUf4Nkim8m4zZ25TgpQ",
  "key17": "4Z6BgC3KFfKYS2Fe8CUBFpqkta1T8W3xzYG3FkthX6gUuJiqSgYvYfPF6hycH435ioP2HaZSvpJRA3C3NVe6Z5RR",
  "key18": "u5TmK4tJxdwEbndAKiprXez3mKBhKqaN2frF5v53htnsdq2buiV5f4wu57fHEBdbz3j6eNyoaqxRhM7kYqyT4j4",
  "key19": "4FtYG35poTQFyJ2jxhXsPWGm2WcUXsXSATv8Bs1QZviZkeHTtF47nJ9c8YX3mJkpkPHK5brL4Wrqy4v9NmCk8kjJ",
  "key20": "2Dj89JKEpudYX77tnCMMxkhQjHnQ92rcjFaSEhcVjTHdzUTaxMAP61hZx7hrHkoZPzzNAvFNuC8TX1upLGKh55jU",
  "key21": "ATLaNX2CBEGabn1SQNrFJkcow5of2v1qhEqg5Qj3a4NEq41fzAELQodkfRQ7RCwx5xs4MeFJcSRVmf6S2Ut7MLi",
  "key22": "2BYhvPNctcvKBsN1FDh61t6EnNeX4GLa7Mw7SYNZY6eiAD2QRWcQ4pgQdW2eY7PPQtbjEYD3ivKCt1ekDQSQU1WH",
  "key23": "4r3QTFzSzR6CY9inmnBEs8Z2vhPRy2ujwnwd4c1X884oXk9JySUQcjwcGai3edVFgK7HHXJwyUq9M7rNxGWbf2rU",
  "key24": "DBBweoZ6gJLPtNZHJzxk6EdBnCEqTNb5omgwUh99oPYpMXLtd8Yfa3JqkcbNaUocYjRRYDYnqoMWwH13RY4R3n7",
  "key25": "4iTAL4eREz3TnNyn9MSYD3p2bucwDeDpGNXRDdBC68QLgcWtpghsUMUqz5h9pc4cysyFLKsTT2V8PJx8ktirrV52",
  "key26": "5MNdVuRN7atGoobL9yfjzUzUHZxKJAnde8HbUYRKXXaoEdJ1kWnfRkbweX4d4BkPR8JmfuS994iZMuR6XUFAi2a1",
  "key27": "5PaQ58rpoFsSVh5yCQ47yCXAc6ohd2qsB8RCZK7xvsQ1JCm42sHVJcUzw2C7mjpduvqy2N6WCU2qbJPWykBwiCBb",
  "key28": "4ccJdwmTEDSxRVXV6XpFAhg2ArYcyNXvWkxdefmneYEmZqWvFU7JmXuAGRV9vZRvxs69D84ZUR55USgCsPhSLnSA",
  "key29": "33auxUuENbAaTmHcpbB78YTmxXsFiqJsRi1ioJ5RETbJDzGgpbDG7BoZVSx3sdnw3G6DpSWZ6d2k61q7DvMnyaT6",
  "key30": "33VD1rMFppdKdUDv8HTpABownzjEQjAHQNbEDWxHvENKqs4c5Qzum1xG1yRNB7NeHBgpStPisjEyB1CJHRNru6hB",
  "key31": "5ejji11sdsmEBVsQuPzfCKwdVYgoj5z9LzPqMs9nc8XAa7CcU2GT8vYCeUVkXgVQmXaYk1sjAFPqke8ZpNQLCqgd"
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
