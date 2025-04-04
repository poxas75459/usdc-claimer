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
    "3zgQvn4pT9fJWN9Fh3G75Pos2aq1Xk67CVGtTykjj2SSBAUgiL2qDGw5Z3Suz7oVRxeGyyfHJTXjYkeg4M5hifPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iZr5oPoaMSGJEpPWbp1g3qPsYiYuKdnuNbRqUQi3hKwjPeZ7jj6UQkDskugeDPNHPDKW3or1uAFiH28N1mfpi1D",
  "key1": "3LZvuHUYqE6y7H5vmZLCyYxgLFphsncCpTL7EmraQLtkNDHntoRdavFWkc4KuPkYcimE1Z9HFr9wyS96FLDq2ZB4",
  "key2": "64kj6zQ8LhPTmyGqEeLdWGNc155AQMckkhypL67jLL89bccgznr7QWtG2PP1Uh56yRdoHZDo284SxrG1YhQoLxcn",
  "key3": "58wbbdww43aFiTgaPXfFCuK4VWjJ7GJnisqAWp4muvwHQEdgnycszshPp9r2eduRro9tuQYwdyncbWs4an6TiZ9G",
  "key4": "2AuLk6oqdRi4ANDNV5nk8tV4zH4WsJWiFhhFtU1zF5d3wyQkqzejcdKbqoUdSRjrDjNPotiLijjeqKJYx4XasVY7",
  "key5": "5Xdog45poymsK3dzWhoSChkJ3NzcGHRdLvLSqLaA3Wd3TjLuYTtLBYC8PVKSNFVdVrXuQgnkGUwrgb3us2v4kBvF",
  "key6": "M1PWwLRieMnPEgXJnFcDidL67riQGTYEeQikEK6uSKyUUYZghnW2Mgjpk754rQvq3ZtoXZAZRKRDR5hQ49qpWsh",
  "key7": "61TRbnDmcpsKvkvQ2mYM35mGbJQ2yYchFK2GJ4S31nVpnnQsm8wgNArZuxawtRbuS5qraz9sGqJZ4WrPZY7qkjwA",
  "key8": "5oRkkdEzTKXL4jJ9W7gf3jLBmohPiUKp1nGiJQVoc8TN1P1RGeCH8h7gebXX6AqaX3PRZoqXZ6x7iESkYvJM3UkN",
  "key9": "4hYgfCY9anQbYP8zBR3iDkKwUuomkyprZynQne8fDZXYaWoZbJuYSH5simXGwEZr2vMSuVZNWuAZPFvJg4HDxrZx",
  "key10": "3svC35aa88UQR58DKS8Sm4tVB6974joyifvLoQW5WteFSPDLAataiB3LXvxJ5yq69aT9zss3y1hxqncsT517P6p8",
  "key11": "4zrBKeNqX9TUsonfk3Lm6fvDgm33gtZNhtSg6TFC7pXokhKvxi8E9unu4cndH2Fn5EbF9aCdwggyDgYuhdEc1QD8",
  "key12": "TnD95HzJRLytgfnKN83NWE1eWDDXt1vbTvpVEuLs9UwSJvqQQaDk4HWYJX4MQ44or6QkAmwykkSsoyPyciNokFw",
  "key13": "3JrCgRha3QmWAABZktoNVpuaiA35wPpjxRZrKupkFLe9jb7C833wKbtjZzCiCDgEuymMY9VcCK3kQSAj8iDcjZHi",
  "key14": "66xwrUQMWMxJhKyDfYSdXnuWCgR1yEQeUZtuZN2wLmvKENbx87W6dpVjJRhUP7zQ1KjvrnkQzGj6cBKc8FBFemi8",
  "key15": "5XiVu6QvmnRaDGcx8wNQ1JfJxRTGECeJ3Ve4Dmi238aGNNx4QPUELgd2Zqtxc61vAhL5VRdifuTyHVYqTGuGtc9b",
  "key16": "23jhYrhpYvAhJHp1ezggrCkQ2UAEPEZvwo2TGQpKj6XWN2puYxC1Atc6mBmf5M1zKQqbcqiSBqWG9rdSVMwCP8uc",
  "key17": "2wgCZCPTCe8EX7Q54bHdtKgVBdQrSmcxth4RTUJQjwjEGTyXWHZM4FGL8V8V8McrH5r7hcck7cr8SbDkAj91xHzt",
  "key18": "4XJHDyBxxZBwuxX82CRUbreko3c7SprJcJ2D9qQYKCfeHwxo7TKZKYC53yQsTXokUGRtVnMpJw6tn4uhxASXEBvp",
  "key19": "2g5H1C9cddtiFJqfYmeHrjaVUsgKJwHtaNcyqrPRdSTioFTt9jcpr1fMRpiF1fsT3NTtdnSbvgVp3JQEVsZvr3mE",
  "key20": "2gRS8NNw7sDyXBhhJsqT3cFaGvta5pB6KaSvZ95VYcMo8fmcb7LcfQJoQS1Ps2ekPxW1j7ZmqhnKHRW2iXcBDpVK",
  "key21": "2DEuzA1hSzQcaAu7trqbAL9WdDNgu7TA3HWwG9HSB9jr8FSK8XqLtzP4UiEwUYY1SL6Qd69MWaqKREYmPVMtVC3s",
  "key22": "2jFrSWaEd8HiqRRvRk8dEysLdUug9c7vzbRjJSzDMSqUuuqkswSwLRXsfteAqc7LPj12s5rr2jLUa7cLPnFRSkSJ",
  "key23": "3g7WCbgSeGn5No6EiKCSYWWBs4noEfuHK72M3fRVnvVzQMoFqocfWz5cNd4FMPzxLGXyQsUtG2wv1CzG2DNHSNRb",
  "key24": "4RGRVAE2Uak2xHFsUWi4BEE8AojZ8KDNMYaHnGrBu8xPWzeBWGq9tJBNbLvq7HgWBSHsHheKvftwW9MAPSDrJfnL",
  "key25": "oAo5McyozsFXb6zRbksC6SrxF2xbmiSdo3JxMwrJW4mMztuT3Gab6LtohAY6LDZRQLonjU8hTrxk3Qg1vmmzfDu",
  "key26": "64Rj8mMu3LNumG1ChogL3RPxRBNBxLL1rg3TgBQXmjVJ5obSjLwhFMgv6rQD4TRZrbMCE9qgAMzgRRT5WLszcFaj",
  "key27": "47JTrKkELUpuHt4y4EZZody4PhyDtmue9VtvydG6k9ZtKMQMVQA4DZTCPWbM4fZFDrRewK5WKF8vyBgKPpJGA6mr",
  "key28": "3PMiRFJjL52FFZQyX3uCcGxTCcFY8U49NBvVaAv6Y1G3GpejMwqF8dio1p4N5vTwEoQKpYvLCiTvmpRigKPmSgkK",
  "key29": "4HccbbdYb7HTscQCasWZmb9HPjaH4sbrU3eyXQJjzaKteMFfwzTebQBK988vUS2v7co9ss8VNvzBWJNzSxnUtSEf",
  "key30": "5CHDy6YxEP6hzhasbbm8hpmMKb1uPRNZoMmgx6NY7FUuxY6o6hBwww47uaLKxjgsFXK1eaHaUQdotSnRbRjSAHXM"
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
