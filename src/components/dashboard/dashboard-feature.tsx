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
    "497uXNRDziK2m8e9n3g7CHRhBunJyotxrstv48V6krKyuN6JScKwLCYQZu1mVMa3tWpw4sbPQ9u93BvJmDw2JZQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KLyRmfkUaA5yK6fzPcTWb55JHcnqHYvh8TF2qxxSw6DVBHvXJP7N6p6sBzjfi7aYnX72qtowwrBLjGKnKhxPTh2",
  "key1": "4hHbMXEr2ZWf6fija4ypdLcARhcN24xbdWmxRAn2GKzWra8ALsEBPBXFKgQVL4H69sQe2KG7n1bF1b7YkQUkchsP",
  "key2": "5XaUyEeutRGBnCaPm38NYnZM5Uom4eaTFpLtWUoE84sBLAqwuwx82A5VRkif4Bo56reyckgekz2Zzbbu5SDigGiZ",
  "key3": "TpimbNNpUEg2kS8ZnAdNx6F2ixAJdxHF5GChmG4g3KY7dPDUkqEu9LeZbcJkyFVoNqHavFuuCWW4PVsTMi5Pe3q",
  "key4": "2itDE44tXWHZBdsDnfB3VV1dNGQ3KR4NmEXpsMaXTi4yamkpqmMovqEVXdzHCk8tX8aARYAMTmPCXScTsv71iaHp",
  "key5": "4BSw4MxaVFWoXxPoK4hsLqH62HgQVrCrDH2tGJBxQ7FrG2fxeiLCoQLWHyHQ9E38fAdHDzWCPWwHjMG8fT4tStAb",
  "key6": "2w1eWsb1BLbwNyuyyc4XSUum6dVundVPXDLE5WEHVe9tombhLU21Cu3kVfVyhG3djudedD5V8qP4gepgazXKu3oW",
  "key7": "67Aizx31C63Y2nGE6AFNAwqEvJevcVou3ub4YbNjo1fqbUD6Fuj6gZf7mLRNBrqywxsxhsxoSgZxrz39m1XtjY6o",
  "key8": "VxU5nnLeCjzGdhJJjG58BZswbRLwevWqtMUPiHQYtMLarsT8vgDyiCUMQdm74w9Zrw7HfQkQcefBwXKjmyX4fFp",
  "key9": "5j5joJhmgeMvYqXPaXyEjvpNqYudUYxFL4GmCacSr55xjJaSKxv9HARy3jiBCLv5GgL1jX2DkT5zqGctjhwZpsMP",
  "key10": "4Nhi9cywTPMz2n8mwwNo8mKH6rqYVWmoRibh1XY89R7QzMK2m3xByrM78WJRtiLrGG5318f1ghmi3aF1Ptcf82d9",
  "key11": "2Q4AfVutPXdwEsfArzz2wC8HBmsxj7aVyLewGdmQE5St1o4k3b7nQz5yC9gdPjN2oQxTQyHhDWDSRr2AkNsM57kg",
  "key12": "2CntSeDyyCzX9CzXPKUhKxg2VJmFdr3povH18hWLUz6uk84scENyLm7hwvEUSTYbenB5epFPVDXAxiXzMdBZCJV",
  "key13": "5dwJax22thfPNHBGx3n6kQLDbDcASa82FTEAHpGbuTZKCuerzDHQSaQqFGE4CcpQAMr8xxJcSmoGqCSVfvVmZPfK",
  "key14": "4G3usKrob8DCPZkQQCZD4wDFfA5XPZKhrYDBuDsuUMgZVCCYyssmoWjmdncaKpWwgumy6HSuEfWCx5nENPodAeUZ",
  "key15": "48f27mKspj21AAza9ESKM7UgfFcrRkiTUQGiUQwC9Fsxr7rtTUYdfUra8EuHxTJWjt6mwpWJ4qGHztaqLrnG17t9",
  "key16": "FCBdsvQaYzNeNdohN3vQ5pChwm5EJTChd7zBBf2GxLiJGX87ncCZ5wS6wPXyBKQmuECh5dQ3vqUitd9sDnM2CSH",
  "key17": "5j1HxSTPJBEG78Eukopk8WwrwnWfiQapCnaaUAR2beLNEG3pJzXBfc9vtVJKi9rxvHCL77rQDghz3k5MwrShieRv",
  "key18": "beg3N1ArFmvbjjR5uXp5qLWA3DaKSuBvJzaqWK8AUgfBH3PQQt71esiaPrSchvhhdg2BGq8Zk24imkEERBP2RAz",
  "key19": "5JUPoRBaF8skEog3Dh5dYV9Ny5tBLDbyjnrZbQ6yCwBY9MNYPXchPsPpLWyHwRvZLnbxMPQ5i87Nb9sizSyDMJc4",
  "key20": "3LgHB6BL37JQHHkiFZthZC4RncWsh4mEwCt89FBwR8GMYMTtcjxThgZvK8EyFbQNCd4XmW4SxBhK9Hxqsvm8NXyB",
  "key21": "3siJamrBfr7tVjiSZbg2J8zpVB9368mWa7mohqm3xFzpfojwjbH15CNfpFSwwDmKJsnhdgXV8h9X1qSkhugpqmkD",
  "key22": "62jeCewrZDUKPoDqa655mNrjhjsfv5LypUP5RrnMsAfnzR3d2Lq3P8jRoVfUwfc8pmP1YKvH4hY8duahrXMuJe32",
  "key23": "2Kx9eMVEhAQPbFGSwCKT55MvxdpwtQCx3WJ89hS2U7W7LY9rpwH8ow2KgaNA657UVRQPMT7BhQu8XDgrApACGKPS",
  "key24": "72FBtBZWJaHdrqJAuRQRjPeWKgxDyThPCbDqMVnTYinQ4xqoemW2c8NM5hGmFgZ8HsGpP7AA1orJjUoGESJSEmN",
  "key25": "28o7USvNUg56AkmNqyebjJoVcymxiFJuJnoH5Tzg8kWDJXE2rS5vvvN8xa9HSiBowY2tDNDdy793P6vGiQq95axb",
  "key26": "44h5rkAerSqsXDSoCdYqjBifdb5zmUevuoxEUW2xVy3XS1G3JKpxcLHT4qd6yo7gNnPRVngdcmJYD15T7QSid5yY",
  "key27": "2119NcyHsjQa28T7tM7Ke8DmVVvkWT2BwMcek2SMzuYqctYBo4gKN7EUwLsqD86TRBFJZibNUEAHyWwEmBEhqivw",
  "key28": "5kcJaGRb3qhsaWHJRjWgN1cMJcNEEUKFUeZMDVZEGQ2QHTP6LGXYxAUqpYrmFLYtii6fquZGUgbkNaASCcpSkdcN",
  "key29": "27R6M8wyTS2QiHsmAVCikWgw3qDALC8d2z8fojCfD22GCGuQiYk7enwoJKo9JrgRkZEYs1We3aHtkYjSEDSqiqLo",
  "key30": "3v1CLMBxQLNtXqeE6NvyGEfffkfbHCtwE8ER6PuK6pfAfN1wNghogpJnmK8B8KV7RLEXgTjnzfKuWyj8xRjMsgsZ",
  "key31": "5Yurn9xEeBrud6eF4mJkacq9NEW3BkqJWnKeEnFLdtdK5UQJg66FEpjSRJfjc2KaxHGsL4dbTjdeS4jQcuAk7Mk6"
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
