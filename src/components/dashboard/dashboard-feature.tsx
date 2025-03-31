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
    "4Vm6a17kBSu47NLysrtLGkWbaS4JSSovxxqVGv4cW2A8iBB9Loaw9AtDfVuTJKyYwmfXnqfbUvAsZJS3nKYDNfUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YG5D3nZJn6Rpahmexb3gwFeEhx6xK3njSKNxN4qdtXvwH8jdPZVWSqtoVJHk7Vmx1qMMxfrGHQdoxx2jzjBPcDb",
  "key1": "3D3TEe9DRSyAUra5595rnMsvsoD319Wng1RByhwZ7LeQX8B7HDa2iHhpgJ2AvDxR5ueVy4xBiNRkFvfBRu1eYGLV",
  "key2": "D4h4PYWDezyUEkyVBSwJKnXKJ3iV5y9d74oeyZSUB4zJShyuk3zjRNeQpM7PBiWkUhsvp9GU5HTUtTdGMGyJnP9",
  "key3": "2H44hLTgnugjghdhhpcLsWmCwqwyWzjAeBUchC9YsByuBZJnAXi6z35dbjWbWVPG1A7XCEjKGiEgYTbNg3pgpHSN",
  "key4": "33b9UqDHieTRHieer37qnbDcEDK9RLzAqHHiTSSyeUr4qMjpYVidLE4RMDzqrcgGzsq9MDvp35B8afsDVJ2SPjdz",
  "key5": "28uz1me9B2zfSk2ujgGBUHjF9XrsmfdT4fNsTKh8Pjh9b7kGNfANSWxosc9u3UEq8fmBQP35zMbMQjCtNDM6uzrF",
  "key6": "5TR2kAPqsS65NrAZ9pnWYJHoya4sw1ehhrP5VrbPPhGNd5i7eXHbmnsbhBgWsReqHgnPbz9PEXPSTGd2DWazBHam",
  "key7": "4n3wYbVumnoXxxHCDHdiLnjggFL9VzMQGPsJmrEDZW3pMMubNsdUHW8a4LVv5fq95NDXueXbqQSjsBESf24ZatY3",
  "key8": "5tPGfVGYyUdRNd6DGgHT5vhDvVQpmepyfqpCwFHd8omqjH3fCthwbnUMmKE4YidVJJJLHsCEPwzEBtUztfRvxQWc",
  "key9": "4FN83y7x3HpYAHLzemwZ26keLoXexJmJtcHXGsabZvejRee2ewxoydK5SzNDp5YbqhfdsLDwgZKMxXi33bQ6nD2p",
  "key10": "2z9p2A8Z8qK5TKnNA5K3wadxxfrtnbGcMQ9DVEVjmqeE9WTENSjMZGyuDkw11YS1Bpu9fAw1jnboiEnmJPBCP7kD",
  "key11": "1F7wNLeEPhvRxjjTDNeHLob3sz92SyxL486U4hnNKYaaM9zo2sLvxV9rJ3922TKgHUyMM41qTr3cL95Xk5FXuUh",
  "key12": "dqmqFzQm1KLK8ib5ULxHggmyUJCcnZsK2ZsbPFvaUbZeVFR2TL6vpAE47KSd6Zm7LEr2tG6xoEdbkZaLUB43gJJ",
  "key13": "3cwzuZxzKiL6HdPqNWFG4JBBkGDNWCn2dWTrotXHgdiAgmSmcN1YgnwxYmSheShiK2YiP3kdh7RWee4uL95CEZZ7",
  "key14": "3pm1oDfzY4iVLoxFr51THU1Xqu14kRYSH78Tx1RKaZbzh8sSG4G2oS4DHVrbFWL9CXAnVSGzpbvgURRy6wWWswxq",
  "key15": "in7vBoLLNn9neAGbXqrC8Ut5akJGJAS527e8iyf7PTAoFV5XRdoo6YLactaKCUrxAz7L8xDJgwiTMUdDxBMYHPx",
  "key16": "3qCN6hv5vnYKb49Kd8sk692mWwqWu8vG7AaFfQaDx1trHfmCtZf19QfrKtY8Uwqtbm4a4JRwQGxqqEUn9VvxyCYK",
  "key17": "nQq7taoZtFjMfrMahABEErxTaVxmrhA2DFjB1yxfY3V9YKhf8KSa5yYtvpX6RAmksmPz2NtfDaLfp6gpFeoC6Uj",
  "key18": "5UPW18Q7sJEwkBZUyhxYxN2eWappcZYxejA4tVKWRN4GgyzAGR7ceLyjQhDL7KQTivpwW32HYyVVVxGWmx14NxYS",
  "key19": "44Da71TKdsJX4J7buB9SVDT4yLF3SYzYbQ4ShfHFUmftEJ8k8DAcnY2CkCi2ou5Ss8XG1w7MeFCaKyPYu5NQ1Lky",
  "key20": "5Mq1puAgBgjET9U4BcwNyvhToQ2w1Fyf8X7Cy61SfakfY7eTYpjud8pKBa317FeHYmrbXheSv8znEpiaQdnSeJFa",
  "key21": "5agqJv2LBR2R6xWcYidy3m5j84rhs5HSB9igwZ4XrFty5iQsHwzMkjDUTuhsknoqDYd8MfHdoNp9iL5fFKBXTRHA",
  "key22": "2Xjb2MKk9wysUvmj1CcRKmy2oZ8jaZc5Tffe1uo88BnZhJhQmusSn9Hr2mGhnhJMgqaFzkZDbMuZLvyvdc3HNRS9",
  "key23": "2yNHmoxHBTGpvHvkACGqARWrghELUdjGZPX5dJkBCXbSmG8xmJg7fhjSp18d9zYsphuqeFgFDZDTW8aKpQe1VY94",
  "key24": "578JVp7rsbqEYRMK5nA8SwLuiyqRD9B5vtXDCLyVXVUrVUAEhL2BvUyU2gZSzBhUaFGMnR1EHiT8i4Dhv5fDMqvX",
  "key25": "2jmiZNcKK3zJq7MpxUYvmMTvHjNkZB6GPvdgDhYQoGevaFqXpGkqZ5gMymmn8PX1sLr4wANr5wBZBLsESmLPEQ36",
  "key26": "49M2NrVr5nfLXQzkP4UVTfduzBsnNknLVXzhZdA6VJ9qsN6z8sXEA2CpHeu3zB3jjeVU6PySox1D9Eaqs9RoWv3j",
  "key27": "c1c4hLeP75KxroiwS4HnjBkLzh9J14DWuRJWq5jCETptt6H6HSBNG7rnaX8BRwZ9QvW3WH1KmNv6pqvvtTesde3",
  "key28": "3QeEEVdt8pkvh8Fw662SPg6znoKG4EXo2Ft9s6C3sAf76hG8dUwbkGbhpGLYGsBSXYVHCQyoDw355zjyrrMYtQwM",
  "key29": "5hHMqbEPDSe8sdLfmdR4MvSs8cqNWH3Fd3bmAVwFiLogKn97pdmfrbp2a5BtqpnprfvPJtWv9urjBm33mcSp3ifL",
  "key30": "5ypMUDvtgjJWWpryBBF4DEY6m6rqXk79zzqMn9peN3qzJm3LBRAmZ1tbL5mTSGhFd2ovSVh9tNNVGsEQGbL9eYNG",
  "key31": "mBTkpe6Dz9qrdXKbRmQdBKaisSkvJ7rYwdzHLGHmWHiWJHKd89c86djenSfBneXQakLkzQPXqZxQPgR2BGviB2i",
  "key32": "ViRZm6ZVuX4yGroa4eSKSZAWhxCKfDuTL2ormq5xGjMchFqqkCAxF9whtGLE6k96CMBF7TPjGhWgwZPr4bbSt51",
  "key33": "n7L6NaNsoS4qBd1KNHwCpi5FqmhJcpNXj1YhSzK1GvfCNjsxbYtDB9ChCN3vxqJ3TCmf3GXUJPVoEWnyNiLtGZd",
  "key34": "555CQS6nt6iwsrV57iz7Nh5gfzsSgqBZVNLMjVNuqgqZBc8pWz5fRjmfAmD3q4aN22mAUrv8Z1RvD4ptaHJ4LaWH",
  "key35": "2sSaeN711QeUjrtiqbC3LUW64ANPaL9hQnbugVJMgPCfrqJodAN9xjnAkQ4Nu9ASSTGveHDTxt6dgHnq5BLCgnSG",
  "key36": "3mvE6iHqLHFga2RcswA7XhFMdkNnTzL694RcapEk7h9h8SLjoVSggiqa3g2SRk2AeKp9aakuLXG4UtkeLBHr87NX",
  "key37": "4AEge51f59DN3F5Aj2thE2cSRd1Y4ZohgMrvQtPuLeprvfgeNLVaxXaWJQZtFuJ3z29xEr74cH2XMeDe8kX6ZkET"
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
