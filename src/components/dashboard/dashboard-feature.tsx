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
    "4r3fTEKrMoxknzZvt13gS8uXQNFYYBd8wCDqPNSrXntP9p9snWMSPpVKwSYUvzd7wqMH2ywY89rhZP3mYsbTnkPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c2NgqMDdWU2eKC6Wnw6PEAnG3QJmPutCDESVJXFD7c6eBX6LDjWzZ3jLmCSZJMKB7k1frKoWZcmh3kuKUC28fPJ",
  "key1": "NCD9SrV3cSjgStkMVmom48Fn5wRd2ZtbmBmJKsoektUFumdjbbfjmUKzWzfSB8aMHgScppJbi7zPqPk2mpc4VM7",
  "key2": "28NVBGkkWWczKFk5te3bEAYpNg2DKkSa485FE4t81FaQd96rXgNUcNASjbc8xd7jzfNP37GRnesboqzZSfRmL3W4",
  "key3": "B1kFvNARuNc7jmYiQ9GafnZzSUad9qJ6B8TqdeqCEeeeCmMrUdiT76N4vxpcF7Uf7Uu5Ry3tVVyzAZz7SzCutdh",
  "key4": "2WfC1KUBYbNwxtMwFx6VNN3Wme9mwfuC96VBBnxqZgr6qWvMVLMc9Gy4Zskks57PfZ3eX8ojaFV2PkgPGWGFxVHx",
  "key5": "5mDzNvp2Ma5EMqYfe5QYC2X9HsdkEQHc2WtL4Ku9BYFymXdt8bA54R84fZka5L6TYgTn9WnB4RHET2Y5T1KKBCgJ",
  "key6": "9fsSPgVbow4GsCJuE5Hbx2n3RB1zEhdcb6hQTNKbA5FoDatJfY656ZN1UqQ3UT1KB4pFRX6bMaE1SXedey9sJXB",
  "key7": "3tgmTKo7fSknuSRfzDMFeDp9ZbctKhVs3SzjDnuL6wDapmSGYtSfcbb2SpKwZm2zrsopmtna866kM5zkgbCEzVXg",
  "key8": "4qESccChjaRBXE6qkKqsYz2R1B5JphGn6ZrVgHP5V8dS648qG8zKCUmZaCdGG1ygnRjkxYU4jBARw2ggRQshUSAx",
  "key9": "1TnCZQcsfqRu23UkhhKcxiUdH2JorVNLXw5YAYcp9SWD9EdqYJuQC9Y3SJuFZ4HdAg9A8brxmkpaFa9anR7V1Y1",
  "key10": "4bFXsb9WnRefG94YN3PF2S29LR4dD75dgVdK8eQYjFDA1SeRyJcaxEbKrF7sobx3vgRfii2JXjH6m9N95qWTLkPr",
  "key11": "3uNyGkH6Y4D5Y34JrBYAW1yAufNUCczKHGaEHhWHxBWbYf8Fh37ZWqME745WPAvsGJbJVLg6wkR38nPyDeQR1vrk",
  "key12": "a29bHJBNUrdJRksgMJQACdotERHZgdFxNCuve1eU6GgHpB44kDNMQAJqdugNMWD3CKjZGRLqoMHQVPRrk75Kymw",
  "key13": "4asgochgWGU6kdpWkMcrpfnGs6kpRdVefSZ9xejJqpshhm7zDqs9Jo6tkpQjqjvKpbUpca7hrBufBvjYSzTj8fmy",
  "key14": "ytA1KScGU2KLWZRvXHKqhe92XizPqQyUpf5nW8qLhCQYnbHVkjKeGVwLjSiccSx5Wnsbb2McUhouHyQoS2pL48r",
  "key15": "3WuGvR1rQrkooXiZvJRJABc6UHcX3bByBzedUUruz114Km6QPyLV1K9ueWKhfLDfadQ8ZzB6RBEbNfveinXqoG8H",
  "key16": "MTaPP3JaRqXfP7rZWKt8G1tikyp7qMC5J5XxifR5uWdFiGj3ggHyB6vCf5khp6mkyumptsRbv8BVn2XjjCgJa9X",
  "key17": "297ymdBEfQLoRcTgaZtM8oLfqPGYbAQ4maDFgLXkEc7gj2aKDYvjJNeYFoujnZwzQGANDJ5484Myz5mY8F1rX57u",
  "key18": "2PZuwged5HYt7o2ouYaWFjieJtnct3KF3mUWFYGiGPjiZvhM72Xp48cUCS83bFwkZNz3ymTxuu4T4gc3q6CBJ7dw",
  "key19": "46psC6PDaF3ZJoVtXPi64t7CXCKDJ2Jf1sdw1txsCFWWZFR48vEZM4pmKSqbVEqbDzeAebZ2rNp2UpwiMM5RrcpK",
  "key20": "46uH27teve5sr6QsfqjcXULerGaecmBjWjySZR1qEcpJA1Gr82sPtXWZCzFLzG5MNCttof2LwX3FReqDSRw1RTgF",
  "key21": "3fLM2TYzTT73DwSr9Lik1ARsfVi6yiTugwJMuXoJy9qdpgoVtHGgHFosJgnTJiTdM55MGkMNHJFPeCQo9qfdHGjT",
  "key22": "3xPJLAUGcQAJ6U5TLizkEueRKAMYYpTJt7EffMsQofyQETz5qAu74ECnH217fjLRoF97d68MwnvjtNUwMMb7MHNE",
  "key23": "3bpWVBipW1pUx5iL4krCDPKgPL3Sw9HxdEmeQd5uGZVr5bhQCQEJ8Ed4oXWaHrNhdi3xGyp2JezmbeDca7atVETV",
  "key24": "4wMgQ5T95Uit56Cj5Fn82TULCvioEMCUY9BGBStgrwnLSxjW1nAczryDBLxKSnXGgHNSRHNnXRtCzNf17TPdMnw",
  "key25": "2JGL4mYA861rNDcj75E2sKHddNJmi9bhuDnrfnDeN2iTAGQsS7EgTGn1dTVRAv8LXjUryB3Gr2hTReGHN1gvw6Bq",
  "key26": "dXJ6hYjeyBd7K3ebJT4GMybn9LNAxVUZVaKjs7KdhKfrynKgbbDmGSyVM7hsPLsU1J7v92odspZFVFL54M7GzcZ",
  "key27": "6uiU7wfFyHHWVz7CySyQpaMtDjQ1emouhetL2raRW2rKGJh1fxeAKaUUrL7aPHQNFHp9rAoM2Dp8W7kRx94PyUV",
  "key28": "3tLSRQjH3Sc8kvkqiQa3dWekLBsizm8aTGrhAVdah2AJEtvM7JNy9ZPFmPFsBQt2VvVSrjcAVZSoH5DjzUrLoTDF",
  "key29": "5MRmCpiM88FcfoXQBs6m3SyWPD2nKqvx4yCDmAvXh5k4Jzbh39E3uw837mjuDLZKJDWcbd5gvSRxeF7zwgWRreFN",
  "key30": "62bAztcQjh7eaQCXZcVZzeaVfNtEVAACyzwB44N7CqRaqYjfjRtyEhZS3ZqLhmB9vovRFr7ZqzDRzXQ5GsHQKjVL",
  "key31": "4qpyo97pfcLHaWH3pYEsdtS4ZxmDMtn577MaZTLP6uxZHLRRB8h9b7n8VmDhMvjshavBMQVUegeFomxBDSRSbH6B",
  "key32": "25kde3Ciozxs4PTuSdgKD9aPr6baXnWNuPNQFCyi9vQt3SBpYoBTaVQfCoipnYVUJitMVAzzULHnJmiXbVzeSjFm",
  "key33": "2MZ9GDYPMAMiKuGB17TP9V6hAy2rbvWwXDWsaL9QxkQqzsDpVWTG6SrNokFwa9nUUZEvi6r9pUR8XX4DGcfdUBcQ",
  "key34": "42a162AU5zWdg2HmUhMEm59TCBbqNkQR8NgmrpY3k1SZFE7jGstn4FNTqxJCmAD5KjPJpUrfCrvJ2XGB6eQMHLu6",
  "key35": "4t7m89vb1SnRhn7ERcuu2UhmVQZc1Ef1uP5iR73yPsrUvMiqkw5C43r7q9zGur37hytnDiyvbrq9qSaUDWyBqQJy",
  "key36": "2kNneFW7LJwqxX6rqc6MxSorukvssk3JL6FdfpKKg2eLnSm8jvd1Hyd9HFnszwX4oEbYKvzbtPk3YCcZ767xSuvF"
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
