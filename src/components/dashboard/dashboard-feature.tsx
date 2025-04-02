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
    "z4dWeh8G54Agrm1T2AFevKix2ahUChG69gcVrRKA89Re5ud6CjWdECey6jvJetrQAiL54qWFqyQBSXVGrEjymZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PD5hrw4hpxfmHdE227c6fMFKaCoAWN4bP7hPkEbYcTrHqJGMbTvKSsa4eGXh27wA1YTGjGFqSQer5sUVSKQyokf",
  "key1": "5Ax1VAKzs1QZhZjrGmAFheW6ew8vX82mvowHMzko5dmXbiXKZ6C8DKSPJ634JJ6iFSy7PEZvp85wmc9nLzz4fJ6p",
  "key2": "54EbrvNX2CWVicki3V2vqDXzdQaF79Zy5v9pNaQJngxjEpuYyTrNUses8RStJ2ALPf7y5xDbGutWaguv42KXotSH",
  "key3": "5jbstBYKAAnh3CCd1DQkVB2jtje7n6EA6MqZpSeZUH9WKcbAszY8Go6pJAE87tNjFWzNP1M9PtPujGMkv73gkBQ5",
  "key4": "4LFK5DqxfsZfkDDfdyufy4fsAgWqHs8d4hZ23EQW9a2htqwVKDtBeuASaSBgPJ2e7Hgs9QQSSFawd18baFeUXdwv",
  "key5": "3w1v8JnUmo2YbgAxfNJEHa6jgBsbYcrZkw7Ue3sZcoa24vEd4ee3HfrwnJ8w1DWzFyZLfitWTmNPPghz3tk6jkqj",
  "key6": "3HpoPBEAGhZCJLXHuv4KLx8CNwTGYX8kusysyB5SEGm9o5ZPxLi6bQwm4DmxXWFdE3qDgFtHgESCKHLj7BX9iTPB",
  "key7": "5LyZYYyJ2AVoCqvLym7YjbqpXoGZcZmJDhni93PdJS8rmiiopdegRhXSAShfoMEE9BPAnfKtSkPQ8YjSKYgzJSp4",
  "key8": "62RWzUFpdUGeGJUiM5LVRKTEssi3Lpxsytzaxwt7a27ThdBuAg6wgq7wGMwZPqVmT3X7c1FGVvnNFHY51Zw84z8S",
  "key9": "2n74y4eQZnqHzissoNqa8y9ub4ALKoWr2UbrZhQuQZ7MYgF1Koia5VaXHB7QMWNYiF6jKnQYaR6c6VdCg3VPCf7E",
  "key10": "SxVZV71w4PFrDJzRiSLjn6V1DW9eNs7P5U5p8LabKpyQ4ibaQaShoV5ZtBYxH2p4YdUPABqirzmUSCmMSTcW2j1",
  "key11": "2PK7vFuD2gw99UFgKbn5D5Hry5aC2FPXF9XV5D9dtygqG8e6booSSZZA9mzniEgPrun2DPwqpNjcY8Rt2PYaRQzb",
  "key12": "32FJ61NEyVJ6fgNj8hxsspNpHZ3ZrCNec5eqx2JXkgD4QKj8VBGPAgh5x2voG2KXdUvADg9KQvKSmBgtfH3QHCbZ",
  "key13": "3HpWry7LiLj36WTbMuytcxmwGyRs7TG2ko61B6Jgk3KiB6UkQkRCobgtQFPmY4t1nsnx46eoqKKe6ev2W8CbPN5Y",
  "key14": "tbeDWPRP6tEqpEQ8g3xzrpcWndRo4PoU5bhDWfGoDdX5a1QnzY6WNKSnosRKu2fseEqPxRS3kiMmgJFaNrs41Kx",
  "key15": "2djduE3zM2GaYEprfAu5Cb26k3FR6BBCvd3B96nUo2gxgFEea6nrnJAR6EZCk359r5Akqfvk57hYcpoho7x3LHrx",
  "key16": "2qPyzWW9CiXgTTmNAJUAZ3bsXoaKpBS2XatPog7ndudkwa5okno98qAExrrX5mfjYAcz8UFY4LSLjueNLZLZUTbv",
  "key17": "5GcqV6nrdDYXXF7hJdMRYre2mn1uqwsxZfBYdatWLhtdDB5zuvXR4pbyemk2A5KKH2VJDR34aqLwnULDJwA7nSCq",
  "key18": "4EsJrGSV7Wj5JMSapnLEZeRPr8sMMBZYt8mQbmnqEcYAVtFEQdxfGgmxxv5kUC8wACqkj7Wn1c5ob3NGJ65SwMWx",
  "key19": "3sUNrwDitd4kUhykV83F1hYtdYX4xJN23TjqKCurfYhEJSz6JEK6Nqa8raKkvmdKywKtAaMqWKmfZ93ncXcY3fSb",
  "key20": "RyJ1yxVpE8o6wo6vEHoiJojmstZJ5EtdhxZqfqFmuCSsdzZgAk512QWjJYiukd5xMKvqTU9CHjpZfZH6JADxFGp",
  "key21": "3gGxJkQA7eKxWGKvmCdgyZXjcXHbDYaLWCXNzAEuctQJRrGVL4rRUHnrLDoJGcDuWkZpjo99dZ6Gct88wfVm6sgA",
  "key22": "4JwGrnHjZYrdZ93Uw2DnATEiFPic5tfrXwtfNjpZ9z4E4ABYskJdY4XC9YyriMe1JbgE1h7cZJyRmPCHjHUChGxt",
  "key23": "4CRdpXteWbvhsQFynvkmkvZ2EJU8W4zutXzB6KGtTMJHZMxjFv1vzaWrGqBZzXupRjXRKoHhbKKVq1CmDZqWsVcb",
  "key24": "5SoEL8qcZe26FG7xDgVp2BNb2GRm5jjZtES6Ko7t1KgrokExRV4b3i48fALC3UbzSq6ZCa5mmEF1YCn9SXS4zmWs",
  "key25": "3MgvSzxJzp39m3VdM2Z4NYmtHZ4PMFzEcyiFvQmKuk2rmSBGfPfrfMFe8gVH99Q82DKdJeezevTBzi5QyYqmJgFG",
  "key26": "8eciZrtQNpdwuqc2kXshXeAmrdnJxA6wsM2m713sa89uukniuWUK5h5EZNaPWTocdKKj1yVanUXr7shvUbc3TD3",
  "key27": "em9B9RDvxcC8QyXb77UXrZ1saErxhqeYwAAim9UZeGXnw3uniQV7p541H7hEaWYKEC3UNuWCwnkiSSvSLa37HZ8",
  "key28": "4jMibnVSiWvaGUnHHRp5bbyXJXpqkrXCeUJojEWZYrZETAXYMw7NTqhjQjPm1jgeHJzqHQqKsTikzPXK4ehKxU9c"
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
