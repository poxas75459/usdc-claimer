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
    "537E5sSUFNHSn3htkzDQQt2GL8RPdxPxd33Rto4p94og24nkHsUkhkzvbRjh5jnesfH52i7XArCCdQu2UKQAjBXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJ3ABrAfg539ucmes8BTbYZdnQBcGTmVv5T3Vgg4x8ZjFM9C88N9y7W9oMuU5zXJHjXfS8mKiy7w8YjSLp6JNgh",
  "key1": "4MN4nbzUsq5rqa6p7HAkLTQtFSLXBZSRwUpuwuptLpSZe4pd6iZZRWbwez3X53THcqBTwjpFhxDyrzQKuT9MGDYe",
  "key2": "5UzTAEKsPt8cofDeCJ1v6ABCtFEB6v77KdYqrLVuUQk7zMukTqQ1PY7WXGLTszsS1tJsLonRG3ginWubopBryp4J",
  "key3": "53Spd7CeDaZUQfHxVWdcJpoASVhuqnoJYa4dNs6AKqDERzoGbHb1bbi6uCKc9eBAn5GQSXoSHAKVxEBaGk8AmRe3",
  "key4": "3M3ECc8NjQguoyeDzuJYZDA6kARS5Ygd5qwVTb5FRhPJF6iksWSqZCQajSEvntfPsMtNgZkBTv2yocNPpiwNDiVp",
  "key5": "3uR6eD7gT7b6qxwqYZ8yAyERfsDahwnqyTJfTydQnMegoRobNBfY3yUK9h4FFswP96EWmnQnXArHFaLiWz86hhNu",
  "key6": "3aLSo4rbDVyQ137mXtpT5eywPeBJ1BGJ1PPkffjJR91P6LxPxdfawzf5h2BjyXr5CsPoQ3d9QY62YfeUS2rm6Gjm",
  "key7": "4PZQ6kjXoygfLx4yuBY45H8FVaxgcc2EUan6uiG2BcCr1ajkbTVoFdpNpuJL8hn7zKHYsuCjUF2tgfL4mfQpDCvA",
  "key8": "2c9wsKj4rEx3Md8fxicJsi9czWzhjt5woLDNa2qpb4CMR2i5oacvKR9NNe9M7RT88E5387KM3aBFXANqypuGsvHE",
  "key9": "Q1MiGDuvXP3L1NswD9JSgyu4cWRUB7CX6CShPFp61hxFv5s59ZooWahSxYTS2H48gt2sXs2euG9RUYatX5biku1",
  "key10": "5ZN6wKS4xrV6xdkFs5uQULDnWwk9cW3ktLicJ1qG6m5B2qTzGuULD4QvEASrHAWN4n3bDaKJhgbWc166cDFncf6G",
  "key11": "5w6zAVCRXGmGmpjmeQTr1SRrP7nBWhpUsyqESBaf4VLQxdoefoSkbua2J7a85jagxsnv3G9pwomU6UREvkcgxgJ8",
  "key12": "2NeEU8kd1qjHpMzYjmFG6eVeabm7Vpi37FxnYiUHMX6zZXTG543FW6VTgRGYL5mXttre5dz1Fr5oJTXMsKfsXfrU",
  "key13": "5SuXVZNogLZbQnL87CYFKxWbuzesXZVqo2fNCpszoBcB1RRXB3EHqMcmPZSuVAAf7vq8YxiEkhz6hYLVeeqaoQ5p",
  "key14": "3xK6R22JcD7tuWhGRp7YGhu5aiMFfdzbrzurwrRsRBFrGp6sMVkjB9n2p6QQU5dQxjPMBFAdeQ8rPF1MHxEM49N7",
  "key15": "53f4AaqLmdxcdaQCYdhxsQ3gJfuSMRUGmYV97p4GMzb8L8Qh83eA41hGUsq1gZYAatucAforVR5nHZWNA5WeJXkS",
  "key16": "VbPLuQnzDEuw33G5zBQLV2EPamLaMhyDBSsijhuVE2SDJPvcyVX3Ao6eNms9RAwsHuR7wBuGvt9g4SpihH5Xozw",
  "key17": "2cYxZoMmTk8D93TPLRHbiZ6Engxv7ctTT2eM9nJCLio8VdET7o5cWnwp6Gp7vyRhC1gYH88UuLqJVNZDS4f4RcK6",
  "key18": "3QLnhaRtg9m5eSzSePnqC6XADxDkrCiD2TGPBv1S4Ta4tcpy9fER6zPj8CRPXfowVpcEz45KhLKH6K3x3HbPZFwy",
  "key19": "2BipUsPme4ZJ7GtinHGWMaYmbJvnxuJECvqgGFE3r4mCatqHSwyCxZdx3j4TE1qf3dBT9h7h3zAQgFJ9UbZWyXD3",
  "key20": "1vpDuyBwGHR9gWkjCGSURuwfwjT623U6wUmW9PyG7bzby51QF2t65PhKDZzKMwfWLym36fKHnBEmKFhz6HQdoo",
  "key21": "6ztG4kpA4s9qkiKJ4acq9azf1DbcVa2SzKCU1RA23igaSEtghE4qDBBcikYSJiaLwU7muR473f2Z25cJQbrQ3L3",
  "key22": "39VN9HUvPdDfLeE8awcPGsgd164BPeca4aewTYRcevFbaMjbiZmccxYdNZLaREoYMfWDD8zC6Q8XaAZYuTvwHdTE",
  "key23": "4ofSEhfrshPRdAGjMgeysqnjMhY8LaRu1cg6yR54GUGPVNQLgeaqLaWHYKZscR3FbhVi7fA2ptpz5azLMxq5RHz7",
  "key24": "2FKfksL2oNPkiJQBQPwu14CR1NnHSNRRjVPPuxL7cqjo4rWnGHxr1qeJvvNDyj4vfnkjXtZaRrFXts3TXmXwgHUu",
  "key25": "425TKHhPD3nSHPmU8FyCxwxWyum7zuYfmXrtB51CN4HfLpBagA455W4AQFmCthD34iWxNqqUEonfVmtiCQh6aqcJ",
  "key26": "5GV6AkAgAEyuhp5Ujz9sHhKHuojKCKPGjZPgRxYGgW4jH3rapZ8joAQFJw7YwMqiZCLCr5Cc2rE3KMErwHAEvYB7",
  "key27": "55v4jv9GFyZ6FXbTCY9kNNWxAXq8PJREZKyyTQGJ3kPxRF1pTHE7Gs8DaFykzngVx9zcNZNFUKFPWL32imH834ws",
  "key28": "48eCCWpJKyiK31xpcEXaDHeFPjRvWJMgDsnn6YiBZ9Ta5kuissZ4BNEuLfQfFvdKLgp1Z5x6ZNdBha173map6MFF",
  "key29": "27vCFjb2MFEEfoCFDgPmED46ieYX2vNpiE7bTZafY2BpLqEg6JwBq1L7PLNCRNhdkRJUQiozY28pzzNbE77hdthA",
  "key30": "NBi1t5mFuVynW6DRA6kgLqbPfNqdfJuyutPVAXHEmrENa3pEWj9WtpVQGYMPyLWGykmTGb1ZXuY7idDFVfLJcn2",
  "key31": "f2bFZwEZqTdyS1oE438NVyhZ6Q5vNbFeQkqy55TrJ8WXDgX1SQWLeyNjXztjJ3nQKTo5GRhSZEXnqReHp5MzvAY",
  "key32": "3EGNF7mFsXUrXaZzHUBRsG34xzuAd2MHRVEo1Jrs2TK6FBJ1c6ZF4CViwdhRZaUcQcPcsTFUZJgPfCBpSjtoqPQP",
  "key33": "399jL4XPps8V9zhAE1ZMeYXVrLoTXczqnnXyBb9txQNAKQenbFbP3xsRCKpakDZyXMd3LRyZw6JM6gwnJt7cAGZD",
  "key34": "28WfxoKcpCpMNvezKz8xdAQn1F3Gx5qG3Dx5U9A7itjLHdnWxfXqboRhVi4on3DCsC1QrsoadBRKH3C1QFG5fQ2z",
  "key35": "2suEwtqnDMVXfewBPUqfqZp6sGvuDnTum2nqW4Tqoq4xA8XncvExSZEcJJMLYEYM5SwYvNwPXdoTy1Qkqdv4fn2d",
  "key36": "5BQwwiD65QLMHvfdKfVVpEfWg1kYSNM9Dbg7VJYCSwUY966pCJPSyNq4snNjuYRb1Rqs1Hdc9p9WRv9ezaiGU3oN",
  "key37": "4Uy6tJ8116z9wqZF4GxpcYZ4GNCfcJFDR1r96ReupQkwuiN8NPpeQhy5Ws9osPakfPgmnHnYamsBMUDCykBZzagf",
  "key38": "4hdoFypn6wrjv1zizUGvyipWWRVgTh3hsHsFGp9pj3fHM29SBWwBMtHgGWtp66Dyvha9Rq2wvHHuQTbUChZtrify",
  "key39": "5caWw8LaZUZNChNb1hrNvPYwi8mSMMGyBqE44SwGKWX5ut3YaudNJoQfXmdRD4oBBoBdEb2mC7U4BjhrgzbVGq6F",
  "key40": "5ttFJQYKi1qTw6utWvguoWJe6vWhVbfSaFHMD7r9BKCTK68H1QFm1iZhCSdpdTVvCunYZDgx1uvbwZ2yDBaYvYrj",
  "key41": "2PZ4TogZg88FKJ5Tc7frW9W1Veco9UMJAwb9hSpSJ5niLjWr9xvBwzESgGaxipWpWCGCWbZEQUyzpYBoMq67bEU3",
  "key42": "33FP41RTPj2XthZkNn9cRZ8ynJeXJBSNKQxGU11KWHePAz6vKoqFffmZJemLQa3SgsdfVSiSZm6LhwYGPzEhDpPu",
  "key43": "31vCTRLt9K9s8ojVjmqV35mxgYgYVGLHpdQ9eYvDRpvubxooSdb7rWb3ndQt6sxyx9g9wCiDk7zDs5HdrhHYtw5t",
  "key44": "2sTSToWQJXQWTVkXCo6PXjRUE5Tyhnf5yEJXPhUFKdVdt3F1Z33btwEzdAXF3ybZrhYSv23simaJ4rkmMdXzK1pc",
  "key45": "2LbuqHcPLj5fkjzjxdR8Ucd1LJyHmjiMc4RDhYW5QoAAT3gqc5gjdD3sfrKXFfCAwr4rNbH1cLdtaAKfUmMPXnCf",
  "key46": "4u8MpMJnWcsdrsFm2jyhbBrpV4Ky9gYwHVfJqcrt5o59c72q46xH2btdsPkpYP36jUWCkJYRPNQy7vPPJKd37eSs",
  "key47": "DtNXaAdcu2ifjLjGPdQbfnLL4fzCJENWtV5nYvaaLh9M2Frf6WKRG8RAeFkLY229PXyXBYiXFJTxb33XXT8VPcN",
  "key48": "9pp3QLe8Zu81TWaFiKo1mgxAbmCVNFMj4hfHqmfnrdELoiAeprDboJaTf9DcdU6R3MHAVPW2tnS1JPGDDoh6cit"
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
