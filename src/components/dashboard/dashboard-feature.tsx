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
    "5uEkqQyu6LMBSPmP7SFnpv6EHgFMGw6BtYzJwDLbPpBnnScjDNT4YjRrzypvozPZvCScn47WHH9JgmLJrWSJu5fE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JKtzwWNmjvwY9HkqDg16EQpdzGc1Q2QbT3DXWyQCD7fftntkBxwvkbAutgoWfeJqKnjhaf4oKrsGsBWK9JLURaX",
  "key1": "37riV6W99SfZawwF2uyYdwVBSZq9aSQyJeQd2jLw4WY94nLecRddpsHGrHjrWL5EHuMkoV7WxPC7YKPgHyN7ucMb",
  "key2": "3VXqYaUYh5RM9WtBXgWocZrqdGQCsScpEwEu7DBHXY6qgkiTM2t74u1WsZHcmPgggc63LN5s9DKYMYZaXz9NahvK",
  "key3": "Qko82PzX5QUXLf7AsKaM5uxnz1BHZarkLQ67RaywxEZUU4urm8Y3xXPsEk2cqWu6BXJGfk8fP5iKMDaqf6qZEzM",
  "key4": "3HRt6xAgThaQDjpqJQuHqZCVhSrmNytSkyy8CLrYNC554XsNES82qmSQxx75neWYQnJv7DBDo2RSaavzZekFAQUC",
  "key5": "46aFvQJHWs2SqMGZ4CFYWYQRUQpEtsZPEZFukRTUtbujHAzfLxzVeJQqd2aga42JeB47zsXDGFNnqcjTeTBvZCtT",
  "key6": "UCDx9KZVXVR4j9UGxvmt3jDBo4PCVJ7vTLCxGHJBL5w8MNhGH4KkTtzo9sFPvLf3TmQBJGYZzw8VXqxds5RBcm1",
  "key7": "5tceUagk1uvL5kZQoQSzDpAsi9AWw2qhuC7MnKMCAzwp8s9toT8j6JTevcV8w3wWq9nVtqVTAWfTth5KW8rEBPiP",
  "key8": "53mYVVh2xi7VQdSvZ1ZanNN3z9RWfUSL5qq5DnHNgpcsmV6nAtkQcyhvMfbJka4g4yNk3zs36jbFBWFe6cRxh2g2",
  "key9": "4WZ15HCmqqoYShfzkKygXqZgVbA1KePutq8gg74Qt3kwDJAaoWeLvzz1NgALrXmJ8dUAzXmAoVdjnuinsLvZ8Tbm",
  "key10": "5o5XEj5Vn8XbthxYuqzWaeUat7srHPUkuBWEXfAht9gbCqFB1SAQeHuU4gWXqW4mB5VSJ6pMuxpUjhsCse2GEPjV",
  "key11": "3jdxgPDrrojnFQuKSimiV1sJT275zNEmevByhZoQ7UxSuxAKf4k6Y1Jg3mnjZDsfLj7j6gW643DfppA9C4hJZNNU",
  "key12": "33Ra9yXFhkPVQRUBcLAzTvzRGM4R8SncnRA1QQjnP7QbDc4PQsQkEzJTCgcFNzNhfnx8nz1DaoTJpdRNQDwF8r6g",
  "key13": "53c8rVSSPp4qE1oQmCHpwtbtQe2H7DNH9acHd6F4bFRC2Jq13u3u2U2SuJpYfAjb1g8vRmjMUgvdy16FQ1Sjze56",
  "key14": "5u2fQUmsxFRKBuPyhDJV4Zs8aCvzDawoZhy3kkooXzyeM6FAAHDoVYwDyMTsMX8Jok9aXauaCRWFSL3h3x6XBSGz",
  "key15": "3TGKwutHGVVh12rZutb5gzNtYt5MiGPJJwWqqrS9DgQ51mp2AqWc9vfVHfQcPg5FnvXqPt7mPnXLo3Z16gnvB1zA",
  "key16": "2Zkq669Yn28ZyKxXvjeEEzLw5YRjaL4RdrKxyzqLrz4csdcbisb3HSGB5HhEpGjV5EBBoR6YUXbLEwz4HqWkwgT",
  "key17": "4sKYC24q8xuB2XzX67YB6h9GnnHi3Y2T4PQhJF5jVFBENxqQ7zZgKdVsvZCYCvDYt8Umc9FWreuMhLGQ9DAGeq8J",
  "key18": "dCUC2GaRXzMeBZgJeQpgVAevTFMtyEYZe1LWYFFvoFPzhhhL4vDpdtZr66zDbwRy4tHDFWHjimTNWB5mhqSrdiR",
  "key19": "gi7F9TvncUPTziEQHBiwWDHqa5Js7GidrUA4WP1vhbuXDn3YTP9jSkaxSMXdbtSpu3ZkjZjWB5C84bo27wAu78q",
  "key20": "3PXCCzVnKPH3HMV1bcvtaUh29i8cHpBT6EjJJvuHVNB6oDr6xPWmDYr6xXXzJM6jvpLV5Sb5b8eUUZRX5XuTapcz",
  "key21": "2jrzDLwxY9emekC2JVKNc6mmSpAyd15i3zeWzqkdRwZVvG2UPyC7bNK9RNYZ4WtqujzfdS4kUdMgpZxpd5xxrB2S",
  "key22": "3oMbTiE8CpzgQozvTDJcoXAkzLEiL8cNcPcuygpzZFgKy9RrhMRQE3XkcyxemVVphgyGhD4TPRb832KY6LqU8Yy5",
  "key23": "4XpLpmJoPTCHY3wBV5M3Ph5ccYHDYfnq75XZc249GYrTwFttXXpioj12bkm5J97gDTBkirhoWjUs6RjRTSPVMLpC",
  "key24": "4yb9akqb686kgNyngQ8BF1ThFWYaX8Hnx9U9RQi6T9gihRNN2jjsiH1NBbY198WXQGy9AqJVZJJKMGbJh6dev7bW",
  "key25": "4BEwue2KCfboNMoyimAfbh8yU5BZDiq6QG7NqMcqVS3PDeLDmJT1fXhaLMEgJsx4NPaLu7MUFbqhm7siakug4QHw",
  "key26": "2U13UTPneLvZfH5LAHruwyYkreKc8Xd94WMTfRq5b7gC5CW5aN2j8R1j4u5gAgjEEYxJDdUG1Z6bK5iAyQqEeP2c",
  "key27": "39WzdXHfr7yRHji4ujU5vTcuJ3dGfH86giboNJGMLegB9ABYtJnT7PpLQd7Vezs2kmgyvHbpDS56PNQj2rSEMyZZ",
  "key28": "uKPJELjGue9L3LZXHFXFPaG5fFpAQ42qhiasyvDYkn99NfV3m5X4JztACAYJw2zktpmdhi6ZcphTHNkjXhhbTaU",
  "key29": "rjo3DucGwgsYksdnaXKio5KwNwXaX6ZieLvYABqqGxWvLxgWdy9LsxLa5bcQTgiPVqAPazufaf1yPzizejP8eHK",
  "key30": "3aHj5eMq448xksmaRn9FSgVrqhXU4YzbQLg9PSP5yJKW1dwPe6uzcbyG4B5nK3ukMAPMNpkuoR1Ew88RfguQeT2v",
  "key31": "5jDL6ZZwqo4GkKPimxMt4uU6K7jJtVkw3sNgrSc6DU45rwcPT4Y7u6zwjBphmhx8B61HafiMVMw9Rm5LtFJayVLf",
  "key32": "5j2ka1L7gLfjoxgHJADuMYboQkAeSKqobWAM5gds395QV77ZZQ3kxSXuYFroF1zgzjuETyoqvT2mY87LPY6MvSGN",
  "key33": "4ud2dRvNPTfanpLZhKBHdiCYWfxF3ALfcWU9M823Zsu6WCR3icij7MsDsugP5Rmh4T6bg1RFWU2AXcpXbvjggHf2",
  "key34": "2Cakhe8vSgyJA74Emamtw1HdbuRXnBNkiiTK5M6Ak2sha7peJVBzCpu6PDhA6hYbgACqAhp2miTmtTW1RL6mPPYh",
  "key35": "5bLZ67hEoHWexftWBVZ5S243ry9rsnYi3kbdbqhNz5C3aYT1C9BnTG5KBTjnAjuGnawVCqH19Y21tNrY8kWWJine",
  "key36": "4bZNgCZRCteEzyNmfWvBSTtP4XMv16U2JjQDTXMv3cKu1gHqBDbP9W8LELdKjyqSLCLKMjqeEEqt4ogoEcXhP9xA",
  "key37": "249t6CPrc4U6y5gUgMgESTYjdrA9fj7i9sGYcM5z1KDwD7qByErrayxk5Ltw9iRDoHp9VnaetkjgVN8vSqBEUXnc",
  "key38": "5PsSCQTqLAAsAKs3KLEY7j3c7XVivip8XgNS1XnCH3GACNfXwhFMu6aJQfU4jRrXGAujzPdhTi5VweJfdA3ZAra1",
  "key39": "5n6YAcC4Qof1UnQmK3TEx2PJaFbSKTdzG47g5LVGQpRGEwjrJJ61naMSpBZ1xSeLrRXLGTYxLNtcLyK9auukW8so"
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
