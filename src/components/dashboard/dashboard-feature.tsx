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
    "3tajdATriyR92r2naPauyZzLnjTub7C8XubiLXF5PHHTkfoSF4cpKLJoCDHc3ZekgPJQDcSB8hKKqhE4ah92szLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tdh5jiUo3iewHyYqx6R5kiRoDs8fZY8ZwXAL5XdytTs6kZmEdvmvxzV3NSgA74cacYTH9oyDw28ackU2ZqVj9jj",
  "key1": "4g63BZG1mTSnKEY6CkMozscKRSTBmq51oAbxYELaTHekXgYuu2z6S26mqvWpp4c3FNi5ztf8PHg6kxoFcqBXoW4C",
  "key2": "b5GWS6Z3Zf9cb7BJrMdTUHhnkRutQmPDF9mNyoJzZNeex8j5HK34bXLCZSKqUhgbSj3BLu6tdh6RwzyUeTPyDLY",
  "key3": "3761UUEjudYR7odM59sVuHLHxoLbFhVH5Wf9UpwLYJhqnLL4aJTDcDZT7vet6SfPESHgiSMKjab7vG2EzHub8Xwv",
  "key4": "674dp7EgRGrHQze6y4XM4NHHdfiy5C4NhYyEdF8ks6WZcMKdw9Q9S1tVB7W1koyMyWzi2jMCRv8znYGMHkzv9vS6",
  "key5": "3cgnkmpeQPtAqzQ62qa5pAm4ehC6rKm1dLh9pR83VgrFxPEaBMcVkwxLHXAEB1dLTd6qcpgc3FDqm45v6n1zzyPF",
  "key6": "NfZJpdWHM97D32hRX6sBK7opSJtLBCN6w6zrsatb9eCRRzrbiS26mEEiAabnXeeotowsM87EPv8AVwXvmDevezH",
  "key7": "3sgH2ws6tijN8EipykCiMRhekx8tncdLWPs3UFf8KeWwXPHdNXZNmQFiZuuMwD1qi4HYajoJjABtVALbnBemziuq",
  "key8": "3NrwRVDgtiLDHU4MKd8a8CiwPSxPSSuGAuq7FNXfdoAZZ7Q7CLzJWddVkgycZfeBLxSQRbjW4CccKkQ3KouBpYFX",
  "key9": "4XTKfxsAgeuZFa2gYz6cHBB5Nr3Him7KqmnAwQKod95NGSBuDaUntkPpY5HdLFsDY46b6eoZ7Vsssxha6DotH7n2",
  "key10": "4KujfKrh319RWv1u1sTxNMsTBaBor3eeMPjyieriU9oYnbgY4aw1Mxzn4Uak1oyGYS3MQs9n4t57L68kg4oKGRLC",
  "key11": "5q5WYTNvFuLC3f9jp29DzssrpwsmUtcTXtppKxS42nTp3wX4Fa8AKLR6ErzdvGR3nRa28t9fMUx5KCMF15vfGoVf",
  "key12": "5bBnnr5jfZLgxRaB8pvzjUC7X3daPK6VG41bdLJmbgfYwMB9DpyGEegBwg7JBTSBb74zyBk2HNxqtEPzQ12adqqE",
  "key13": "4KRW3S9NamD54o1q3QqR5Pfa8pV4DrhigzURGwzJHcFSjQ3Mh7JoQ4qZt4sbcuJLnfqR1YpcAJjt1Fsg1PxWFiiL",
  "key14": "4PjZ63DCcarb7ykteGexBmMBxTRNk9kreSPhvnmXXunhEKycAS97ncETjXcW8xgM9A7M3jufogo9pMwxXihj2PcM",
  "key15": "zqx7Fy6sp1Ci2yVeKUmnP2cuhQMSc2rZSFh8A9RAwy9sKJ5RD1j6EbuBWwvH3WrD7TCbsqxREbXTzLfDXvWGTrx",
  "key16": "5YbsieMbS4rJCwjNRCemjKUeKTZWdhgT2fVLxUMCkQytRnwW43Vwcou6txeZzQKQgivBawVSvw2p1qQZrgX8r28p",
  "key17": "2jcjnDNT8boFhdTiDFU5wkVNm61zHADTHeEcoTNDyFZnrhsGjvyvZKs3b3gpYuhduwdKzLdLaxH3FWZuUFVnNuiN",
  "key18": "5jJu7Lh76GB8a48zKetjtSGY4HQAF8Tf3LANjx8CqVoYK8dDZRjR1zHNUK8wgfvTAwrFiHEhtS7vfohHJF6QWF3A",
  "key19": "3sj9qXU9VDmn6PL78Pr9eGiUYKHjjbf3rnvXDekGwe3HVf2cfPJZ87UJcGrhAUiVhXUHexFGzgmpMQ4wrhAjE8kr",
  "key20": "3jQbcUipFvmzjcTQfyMp8VQtj8F5ocoDAJJYJ7qaW5rUYWwAydKLugqLonXj5wcBPKaVUsgTSJfXSEP4xSyZ3CU4",
  "key21": "gCpe5Yu6FnnFph1fJEhkFHC4b4oz9r2ySaS3mWTS3ppudGsKPDxWNfszGiKz1eKwuZXzdSwNbUGsfR6oTi6gqkS",
  "key22": "4CyzovzKjd1ZjC4qbi8PVTvUzrhAkRNWrtBhPqNpwmskvjnubXmmyDSLEWS1od94cA4sguafRk5L4jJoKKy4QsAF",
  "key23": "4Bg4c6VXM7mdRUroP7MVW3jqkKRgcX2eMFqhrpktMzR3YUYYCrSJG4zDWCeK7rKVgtVCjWAK3j55fxFRcpFHi5ZK",
  "key24": "4WsrjM8w5un9ZAYG8mvg3sgKnmFBSF2BSs5HkbzwX4RLc7Zxwyqz2Dnytp9ZwqJ5p3EsXDVRkVYGtZVCTtfYpBZ8",
  "key25": "2XsBE39G2fud7KDmxnnsUSHACHKDCrwhJPjKjKRHizeDxm3vPBQwyRrBACzFzrfCR64fMN8zJWVXcmpkwfdvjMn4",
  "key26": "3UisD8owP16WgD8AEiAQzM9VEUp2oTV3xGEn9uta2TKjs4eg2izPqhbNuWWNUAeuVSgaiGz8hSQdSG11HLRLHchG",
  "key27": "4eKMpyRym9KwtN85Rvo6CwywjZkM58YgfnBosgT1syLFraCx8C9YNkqNE9AuotppHQA4Wf4f1fg9bKnRHUARdUsS",
  "key28": "5DXJkAnKk46P2AmH2LfZPTXQdEsCZs5dosS4JgoxuN3yKgU7S3DCEA2vX8s5v6hu2BkwBDQMxvhNdg4m6912FssP",
  "key29": "6tEqBy3XBZxaYGJ5ZrAEXVXeiirzWi1Dgyvj7eqz8rTSWRCtPZW8WGhSKTPDFP1eiAgevH4kSRLQGGv1hBurnkD",
  "key30": "43XvL2sWBmEbZDvVs9E5guk6A6JGAUJda9FAA6xKugXwnTXKoB5eyY8RYowXN2XFanaRB1wZNLCHXCiBjbErJtgA",
  "key31": "2DES1GDwahb4ucSgTyJ2ku6R7k4UhXRqxYdvnsgk6aJFdbedu5H9Gwu1RK5SVqVDDNxQKK4Hp74wZLgp2NwPfNJu",
  "key32": "4fW463onArGvHL1EZuA9t5Pyc6iav6jDcRTqBFp5E1rQ2BwiUUWBTAQFCkf7ibyF1QBqbZkjyXLB5Er6mECs2z4D",
  "key33": "4VFDSeHj4tNsqYiknznqq8P9iqapLmd4da3w8LUUGYquAfisz8fa6qcMYPpQq9g4yc9J2oVxRJrESFdnazpaXsHh",
  "key34": "2pkBXaAvHpRMv3h6NNnzXMYQMuJrWUwvi6sKKoCq1eXSkHjVRLwanuoZijBtT818vrfJfYrzK6uux6v5c7ZJGASW",
  "key35": "4TaUPHfvMvBrm5Xww5Y3YnCeJEk8JFL7uyc8YCRdvYF23JVHjA2WwYMWa5ioQBa52x8cyZjC8XQS7F8xLXyptrxA",
  "key36": "4WfcqRV7W5w7826c4C6ZK8b7osQr3dHcHNdijCQVWJWsi7LDNRKp1WkADm1oig1YbfTCvqi16PNkGj3BsZeMsVv6",
  "key37": "3hx4NrSHTXKiV9P6e4Ke5NMvuMKNVCFaifHmSZdKYZWeMSCiTWJTVzJRdhqcRihtDfds7FEWbb4Uy9uATVStz4co",
  "key38": "2crs36Z2MmuaoeJhk59gWK42nQypsweyF9oSY9JgMdzS7yDMJ3EgSgWQBK8s2BxTzdGASnGkGErwwTaB9ZbUGgve",
  "key39": "4Pt8E2ZK8bj5xM5DvRQYjMFeGmbvpF3cXVQezHf6rJD6fVnAr1WB43EYPSzzPxy82WVmXLGT1d7Nm1d8a1JYwRB4",
  "key40": "3cN6vPXEzVDVqY6BE4cWpawJZBd373KrcayDNZR58GiXHBB9TKPajfi4cVNumA8ebyvq6UPYs3hrj4xgaraLZ6Aa",
  "key41": "539oUKJGMdw3MfJkQvYACE7qrWEBmpb4VhBSET8szu7TrVDa41frxFQEJ7oyVZDUvtytL4by2yDf6MNMLMSbrVUC",
  "key42": "52FfLAYPPojaMeA6uDxk1iBtdG2deo9cTQhU14f3zBSXDjSYEB68rZrBgoJbgwGUn6y5YzTPPAVDsxZFf9PopMB3",
  "key43": "66CmriuwDeVUPqiWKhnuJvERaQ5kUN4SvJii5ZAgvWpQJAYueXux87NwYspzm6fwkevUVhmAHMPAQXcNv4A6HHGA"
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
