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
    "3nXPGEsGUhRowxX2rsUmsmUXzNYyz5LubQ55zH94QeRJJmVAGvsyzBzWYbqVAySVFHXHsmsGm92tFC2uM3QreKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xj7vpyPjzvH5fot5cfp2kWSJ9BnT97ixYUMRBnCVQhb488EJQaeJ3XLhVra4CzJthq2T7JZVnh4hravbDq19uUX",
  "key1": "4MNSx3MdfgaFZT9yCCHXyk14mDWMLdXDYKLW4Tte4JiwBkAXmau1GiBUgqZkKjQKKS5owUsNAW3SBSXYm9UkT7yt",
  "key2": "5oPwyCRk8rkPxB8X9oKCbZg9LWiWeRg7SST9b9UbBL3bZRXTsagfdx8MeTxKW8ZsdHj8uCLXeGF3RBWcTknV2fyG",
  "key3": "5uisbjMpX6Su1t4rp6fnFmWn9mfP5EPTvApPne31PHMzkx1PPSC5szvvGEMff1oVUmkMaaqWFxvP1CbYjuY4rjMq",
  "key4": "43J1Rghx8bPuWHs4vrm6pyri2wGCZq8ykNTW8Co8k1iXo5PuKp9VvFRzn5gnPNWr8qmtEjjj5dd7BzK9KAsKdG8G",
  "key5": "jMGbj3HgbDUVd1FasTEDgYknxeNFG9AhZFZBr12eSGmhHZxzSpe2JDEuJuHuqbBwJHs6ETnNiJUxbGnR9rmiWN7",
  "key6": "3McWtejfWVv8WF9EJ9Dvsu46wkFqMLZ9FZAeqM8Zwu8aVtYtV2Gxw2BY1edU8LwRRZggUkcRJ2WuQdfFpufdrqno",
  "key7": "2YFqHP8vyVzpbT9MD3phruZAJpGgYXdNDrHEUPoXk7gKzSLXqX7mFAGk8dpFVWssd5QpQa5Tk4Eey1aUQUtboSdE",
  "key8": "5dThnx4CE8X4SgcSXNv8z2Fg7UAuwceiUE1WSkK3BfeD77xUTV2Tr3mWiq3cLjvSebajJ1UuW89oqkf6zy5n61cM",
  "key9": "XwjLBwjRKgdVr5TbwSiLkstLaF8sXL24Sxp67mgDNpN4DsMtr5x8MD3muJrJjstgx596yRU8aDHiUqhYygsrL1F",
  "key10": "21dv36J35kKRHY4YQR4ADpkasbMbBH3DArQMVLjTbbBYF3Ko5y9JXCTnFaGFzZQrB64X7ueUg2FP4kBHj5ZEkCdG",
  "key11": "N2n91RJwCWhtgMX8h86m1qLm2Z5VYEa3C6XYcCxjY7ngRfWSXxR7EFngRA7HPrn7rYw1J2z7hTjbGrQB11oKLC1",
  "key12": "3FYyDbbBYTUnU2ANqx6UbVxzkzsc5HRPvHv2DfErAZ5219PPTb6UpwbZtQmRy11WC8ofVUUszDEgDhvjpXE6C2Yk",
  "key13": "2DDwzdwQ4BW882fCqetvu23692mj36StPYWggJR5ZUBrDg6UeBYEZESE68Ne8Gnxsb798t5xeVLjrmnLpZ6TNiSf",
  "key14": "5aVPbkLoAStr7ja6qqg6ck7DSyCdKXTdiTJzdUyksBWsUwrreM1Uwd5FocomcC8ezTwMozchfwH2jLcdCZjE3TsY",
  "key15": "2S9iypbw7Sjq3zBhvNXxyyezwDqJ61Vuy5UwPd3cLVwvDkDfakSYjefkBzNDzW3jLQjCuZGNShUFG2jQUiJtzbrC",
  "key16": "s6cz6w5TFSdy8i6c9yRnNbRAXLHZjAh75JZpAxFcfXnqpDw5ksEajAxkQ1kYYEXRm6YeDW2X73m68cSSTFFz8to",
  "key17": "5vk5LS6PGJ7e9suZYTnYB4qpQXAu361A53r9FDWdLENjCNcqCUAhsMG1dHYfcKAsopzncLx1MWNpro2quvRj3dkX",
  "key18": "2SWKh6qodpLZGgWdQdjyqWXQ6ocGmecCQvANCcKEUWvTFZV9x6YALk7f5ymUF16XA2MP9zb2mnR5wmx4EcKqsazN",
  "key19": "54cNsKgP41T4hXxLDEjWh88MutRRZcogHPpmExN46ASEvUxhApftg8rcaATrmMbkhBoWQWLYnu3FQuWhr2UVzkcH",
  "key20": "26RXuxfKMqk4gSw8CQ5ddVbJaCZYfQG12cNjKs18EsgDwKKEm4Jtk6YWJNwBrbUyvGa8AcXnyqvsafM8L2WLRDyC",
  "key21": "3LgzQoQ2VquuZ7YR6oQrh8nsM16ftV6nGnqmsckQgj4s6d7UmHMBxcYpQBpKELT22cRYhXVMWEU2Cbgfyxarsb8",
  "key22": "2B7zPNhcapgY3ce36rQzqdupKhEHP6HFKpzYBTLgzsMoncQN25siJVAzmyqYbR7cWfDUgMNqYo9TRFdTGWkNvD21",
  "key23": "3HxmERHiWTWfaYdwpLs2B8nsDdwdvjBwrB65oKLkBLNpBYV11YYx9C3XDx4RQbdqCFYTwxnTKLZb4e1W1VsgQ1sL",
  "key24": "5zG3DY4WjXTyQ78VrXAX6H2yRTbDKjNeQAgkW4ayzzh2kNLNkVBxBqFfbsDQcZo7gB3JS4fB2rWGKQmPc9zGqMrd",
  "key25": "CBuEiVPggq967TSyKPhLrWHp93Z4q8yzAvhL4ESaQ7hfychABdMVhmZ9qnVSU3sJoc3UjoZxfhWTRUBef1VA5WD",
  "key26": "3oofKmRWf7xshPneTdd6bTBddcJdGD2oFnRTFX9dddGCjj6SADNtVoTVmwBh1PQA2tPe4UE84W1isMsW6XvdntCg",
  "key27": "2RYmPuxmJhPNffUz9RC8cefhSuuVpmnqYB4sJ5r4hSLf6Yhe3bJP8K9prSSZziigGU2bEdvT85nPmS6tcm81LEbB",
  "key28": "Sh5D2bW5F9znEAn5Cp1sR8v8yW8HKTxQbanZoxrG1pW9FzbxQZbXd52JkzH83TvyBtzYdhsfw7icJ3zXL7X5492",
  "key29": "4ad8C2jR4gAEZKKMJt3i6iGAWFCxiE9P75Hx5qXUYLPMavjKExR832ypJM2R2E2xBEANEBM8kv5uUfwP4zR1oRev",
  "key30": "4fVHPLh4T6GCwCyT9Dc5NjFuEvCKP2HNZheuBtZXKwdz6bw7vh6B9u9xtZ7G1RRGPBGfFZyVVkisLxRysihiybrd"
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
