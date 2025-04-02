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
    "4QfRDs7kXz5dwAgKTb6BscvAtryKVQ2gfqWU4nwjAnqPu1vY7VamTycRmMZj4YAJS4m5CUmGcEXws8vzUvRbQQsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42SF5WHaVANkfJp3zcBZoj5BfESFFdBS12uGczEpWcnk9G87oL8hsDQGpL1Xqzis8HRHRnGAJUbhWsR5cKpkQ74W",
  "key1": "3EfaUj8pCNKVkxqd3jQrxpjaoiyrnbUy9YHuZkgoShFNQCfTBa5AHYB9YiukKLgVLEGG6xiab6Md9wNXGEY3CU9z",
  "key2": "4fHoF5RfZZpdAgPvnP9SupjNXPtewcZ4JqdCg3BPhktpEtH94twyEyPpSRGswHKJ6DDVw6eQU4hmWA2Sjv2qqsk6",
  "key3": "2ejGt7LRoWTFxeYUm5VoFHcabXKb1WeSs9NYFN3SNiWMUjdDC9FpxkitKWMciKtp84VfFNj1ppbMULHZibrqJWpS",
  "key4": "124Jk97RuRzK2NyHRfC93u8Q74V6Rx1iwgf3ytXZRqAWqy13V1Xgk4VSSj3ZdTY2Fttiuddb6JKSuaZSbJgn9S2E",
  "key5": "5GVh4teHsCBifKgodEnyMEPssg17N9YhECGPzmy1WBLtUugN7H7J5XnGHgrtNtqsiPLPrEHwN6MvFjwhfysHgfqr",
  "key6": "3hKicVNPzuNWDLPFFyYNG7mT3dGgyRpBHg8DgaHqKvQcTSrjC63EN3cM1AUYb1hNuPoc9me4yoAKPkfpdb9shHoD",
  "key7": "3NXn6auXth2qm5ioUUViScYSdTc1ciMKNQ69zar9DiUSvCj6ocfCU7Rhg9UtXTkGPgrAd6gUaP959kH1WcGKeLg9",
  "key8": "2CfDUNXPgcus7sYcZrJVqepGhKHwYAgdV2jyaFrd6J6zqcKYQMNXPGxwk2HbVKUWEiAL4Mdv5Rq5q9YYg49kdMMT",
  "key9": "5yhGkWYWuHaPfV8H3AgbPmMtqZvxuq1P2Jkh8GoobEjqKqq4UcN5TLmCUXB5wLWGz8rfCFmWnsZQ9V4zXZimpKz7",
  "key10": "5CxwUQATbQTCNyN6mCzPt5umQVUCVt7GypKBoEk8EjWg7SwJp4PT6TRMyUsBgfmYHanyYoVZFG2mXkx6YSUqmGYW",
  "key11": "2DtUPNSuM1DmfGk26uxskiMLJubSCBR9ykJ8gEoDDoGdPNUdSuNKCVXEPn1zXCjb11v41qyPT6VcsE9Uf2LcmbJ7",
  "key12": "2Mk52UcsRDnA6JWikZxGqcusEC3cxYp5MMoJhYoDgqkstbszzWzMDzP9VrhmVsy61b8EuzCYCvhnZWLDvxvMHxzP",
  "key13": "5DND63k5vhXpLbEfuw8TiKSdATmtGZvcxNhWxE6AmorE9Cq5ZSTWaSo5YbU88DwLjHBWnbEQiiW3wnjsW4ppJBrE",
  "key14": "5bMnnXC84pRLuWhNt8ZN8LNaN65zCCuY1NQWezkcYp3EbjmookEmjk3Ck5W5898a5WaH9qdPMER8yj5gir1ZaRjK",
  "key15": "3mxLEYySDZCtnVYi1Qc7dDyB6931xxBZesxvgysXQw8BRUmzk6b5rgtr4vDGyohFDSJ9CgZqERyLSkihhAw2YuDv",
  "key16": "4h5L1u1ZTGEtZRecA4GvwC1hbu2E7bTSVLqjJF9gTnm8yBSfgX18gG2jLFTLVLZFEb6bZdzk94FjrpaQrPbAzTpL",
  "key17": "uLVacEjfRY7zGN6Y99qNPVKppPNUvThd53WYjT78aM3NX1Be1xNK55T4Cs2zsJisUy65Ug9FdqnGeszRUUYSXpt",
  "key18": "3CEs2ziKRPRd8kqUfYpWzpSYCriioU6rmC24Z9p3akrJpEyLGfSHAbxhfVoCgwTB7Ud46ronB4EUaWG9BRz8xqao",
  "key19": "4CWxdY8RaHX25Sopxe25FXine5F7hDA888U45JrWmLSi4RTDUZA4nvge2etkTfABxouBCWWmeq4pJ7Lcy5Lawk4t",
  "key20": "3Upcdig5oPQN5zPRQhX3LJfiXcoK893VHGYeG9UPzbkbgtzLymo4a3SerrA44YHpY44bMTLJazJQwAwxvHv4DkBe",
  "key21": "5Zvw3gdv9M2sb8njHnik9crD8fVMH9VMVsc4ngTvGmsaLBUZ2S88ZnqBZy6ZsJtDK2y6ropris8WJrAqGNnL3KvW",
  "key22": "3XHbz9K8RVfHkXewMuRNYrxYeC9ECrAbkiiUVNvXgN6ci4vtZE9xeqoLUQS7tF7FXrb3ahXEijKW54vnHPADb3gS",
  "key23": "5LoTxxiWH8RJzZjfVvPvjedRXjK2hXNp8iYncREnJTN5wDZw82DWAi6foMG4LBU8uNzTFVxQaS4YNczhd5uQ1B8D",
  "key24": "5toBfCuF7jQiHpmTECAMcAVzWFeU6zEpv8niFZAecvkJwneGyixPtNMaCHnMMPa5U7xo6pC6jBMKqkbyXr5t7bz5",
  "key25": "2ewMxoox1nuqhC8fqW9dFmEJbLZmKeN97L84xwh8V8XsancciggRcMeu6qjYPncKHjtcE1guxSZgyYxKADpg2oRV",
  "key26": "ZHWkRz3mMjdNicRA7zh1ShPEyDhr49r2D7ZBekwVCKgyKq2jnFd1EY8G17TaUuuQu9Hp3vFbqfNJDjghFYicusg",
  "key27": "4GE4m29Wp4JX13ipiqbG974PKSgDY95G2sasdquDf7ALTxQVbq8uhdvJEEnSNyWCJw5G82Q1VC5vphVsgdLGb9kC",
  "key28": "2vXT817Jn6R9nezhGdRLXYYtfhAJfFc5J2mwg1eFAnbz3AhDZoENy4LqbPouGKiKcvXsC6jE4bSkZvkDnJXqSt4V",
  "key29": "5YaSGGfxCSaoXFTfvURfxghfuhzGB9xKjCAj1qRQHA6qWqVewFmnERrV34Ew2Er3qKmwwxMdFjV8Cf1N59cnsy6o",
  "key30": "1p4QutFepD7S927M5ebRPy4EheokB7yYbFL7XYNZtbaNTUkbJb1xPEWx2buGxLpWR6RBvpeKGQoQkHfkghKrnUC",
  "key31": "4y8ZRr65ze95sWpRCQ5bwRf1C8t2FC16bpwL44D4FtzL5uTajajYAX5fERCiRvc3MLwNQ52uXe1UFMjNRYmqCesg",
  "key32": "e5ayrQEsDsgarN55awXbjzxLz8i784bx7jy6JMuApXkghT3yLf7WtF69jHFYxcCMjBGVkaACffw49YdZF6eL2qt",
  "key33": "2SviRARDe7QhrQtpAujrBEwRpdLYuo8KVbDRcgGeQe9HSsNi17j3EPZqtEmP6CZbLBQj73w3BQC8x2MCDGdaD2y4",
  "key34": "2Rgc8NLkBBAQtQL4aAFiqvQ6BCzofb6vqeVcCEktet2t2HyRfNmdmsMSkXC3dyeurSLTuGmJmp9zQhw1wQKcwGhh",
  "key35": "4Zxfs6P9wkDk3SRuMfPVZJ7ycw2B4C5xNXu7eGJxyAqYokQEyMH7AY8t8afvfrgSKB5Hq3TVEWPCBoLPfW8VgwXg"
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
