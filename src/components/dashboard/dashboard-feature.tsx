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
    "5AVkJKgTHS2aW89zoXkfPj3vEW7SzRs7boQGB7GgyvCr4xGkBrezw6prMaZe7qyNi1VmGKrZ7mUeyQX1Ky6sG3mm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aiprzXmVdcnC6xxUTUd9Ripw6DKmdEhiKmQsQ1FQ48ShnNWsp9nXaoSbYtzWCmvrhoJgfeAc8bCDUJn5eMaw2Hj",
  "key1": "3dtgPN97kQru94BbsKH76wzHi1U1uoGZA8UxiULPu1owXEWn7z5F3VjjuKMcYhQPX985EbpsPNkQ6Gc34E46wYQa",
  "key2": "3Y85XyXD9jBYZSzMPCu4nRjyrN6yVEHg3oAw71u8NwX5MWjip8p3E52NNbdU5BxdTsfvVv6HtH3wB5x6z88qAK21",
  "key3": "2TXDqcLDkntfehFAEjdpUQRxsyqSQXUfQcujgte2FwStLr2kLY7bnovUJZ9pSV5oANSYSHyt5HfhHS1g8B8DHG1S",
  "key4": "2UCkyrjhNmT4JCkpb3Koed2tpJpBrfw4MzdukDVXMiVHWLnKj5dquky2YYqnG547rvaWqCVtgfznf2WfDm7KUXy7",
  "key5": "2dPA6uEgUykdMjbPG77RZH9Hwgj88tJkMhMxPjSCkBSNSVmdDWWtVoekcu2c33MfoMDHrRn9tUJ4YuNgcXLjrB8M",
  "key6": "4dQ1u6Bz5rSup1Nj8aXtSqjbTLdhMApNXJS5xTZTh6pio4M5M2Ejts2CTDoQLvkvPffRWezPCwnzvgdYPj6gvYTy",
  "key7": "3cSgKYKpuyU5VvpJwtujG1jXzJjZDHzyhTt2iBP6inskCL8xtdeAheFtptybZLXJQXuRukvAND4VTPP74VXVnKgT",
  "key8": "7zB3bZ2AMMzcFbXRF47utXPS4ajwtfDXxKNtvsewNbSp2LcPXhgJ4kToNhW1Vai873NMhbyYXaMj8nFD5Dq1QPU",
  "key9": "64Kh6KeKJWtCicvv79aNAnA673aX5iBf2Q2TxCcPeBScgMVgkczFdJzasi5LZKpvUP6FeYfbtwuWmwQum2p6kMYR",
  "key10": "5YeV9JVMEXqWW6J7MqJDnqzJMQWfxYDRCcepjUHRZUB4bHSBjvcGmPxrTJxm8yeP2MmMEE5MFtuh4vzm33MQ4Wq1",
  "key11": "z17RiPJXoa6375SxbFLd2iWGjF9xcW7KvGmpwSCYzBAtGuZGjbtcoUtzbZTEibW3eMQz3pfy1fefaPHLKp3KJRn",
  "key12": "5ReHU3m2AqH9JfuTzzd4esvfvXWxZh6J383RJrwEpayq5SDjpZDLRQcYwZ6GxGRnYi559ELWjN4GRmqQKphE8fPa",
  "key13": "4TNcVdEWbeKZmk5nXA8HQW84nJQr8q81urqpPnedaw4u6MB7G4c4XppnPB5ucni4QcxuufTBxPxLFLPjoqfqfsyi",
  "key14": "5ECTcJjLq6cdwTVsn7HkMit7hnghmu721JrAprhnaAxMJnGycYCnjWSWEnsdjHpUmH83v3U3j8mnJZJsE4ec3SMx",
  "key15": "32fkaU12GkkcMEabkH17Jz9rNdhdjcCLNHz8rhNvEU7vNeZyFQYGXDssFKGebAssc63dfF1xMrdqWjoauxEFYQi7",
  "key16": "3aHHXCK5vAfGvdphHaswPU49Xo4oCw8QApjJBKNc2JfobdV5qvb9Ns9QUYCFvvMTB53pzLYtZHvQTzShWm2LxmPG",
  "key17": "37zn2rsCU22zSKitJ3KaSCRumiHihxBaL5WKHqNXEiKLqXxnYVrZXy9zhPmEcc1ndqiTDdSTL3bnXrhhE2mHFZXK",
  "key18": "57MR89SjRLc79PLKopUz2PdQdn4Pkii82nrFezWpfZaGfVh6yyx9YMPMHYzHGXHvt7PgiATrZ32FpsK8uT1gVDiR",
  "key19": "5RMs9fMrYqc2ZW41vwHp5MYvK1KJXv3Vbos1K3VCJ9dthpNvjQRnDEVsBXzBccco8yGkAWFyJmXemEpBDA5NvivK",
  "key20": "51zZr1Dt8ej95MWemLxKeYohpcTYxsaF5gu2mt7DKq8fXRWeSsPPEB61VjJTmX1zxkrFwgoF7fo4euxZJGPvQHAo",
  "key21": "3XWHC1ZcauMbiYxXrqjequvA8kxJ4KoWYvkLsCuvydP5hZQEVQGNdVqroXQi3ESbedWevAqPAB1qFPSWAs37Y1Fu",
  "key22": "5xgbtxxKuD7QKinj1bEMWNKEMo58NMxVDBKV3gaWAm8qyDZ7Gj8JyNh3qQWAEJyvekSKWRFs4Fzkd1gUjgRKR7du",
  "key23": "5JzQ9H39GF12wDtTuSsycFF4XDea77BXj8KR3hUtRdUWxaQ1CBUw9RxEmq77gj5WgNnWCYj4KZxKqisUCPx2oTek",
  "key24": "5UhvBxrrFr4B8pkBdUNKfghJATbbcySsa5e5r4xWfdKPt9WDP1rJoTJuJiztJBwUZZQoqXUGZMKGLTcyUdseL71L",
  "key25": "29YYtvY6VQspzk24tzn8CK3NXTA4Mesud5K7LtXKDTB4TJDst1xfWMQwnxgKRT66urkCccn8eNvu5aHaSsLkLi4i",
  "key26": "3vgoJxYKarrjWyE9bTVSS4JUnyErHzwhBiu1Ctv3B4UAW2BWjSgfa6uTSTFiWWrFABNS436veMtD4W7cTUC7zU2F",
  "key27": "3q2JLYb2AjNeFYTT2Tbep3JKBnhJ1CnZFZJdYVYtgVCXgJnYnyojWcVBiWsPqbM2faFiqBEBdtE2q1TRQUcztWdt",
  "key28": "33ShteLVNnMMSikZA9ze3S8DDoXESnvKTj8vBh36cbx6j3gXYUnVa6KRPm66BuDkptt5nPr6adPABHrnrEBQKn5n",
  "key29": "UE1VK7LehydMPxCE4KGn98UPj8u6sgAjYNLtbAKoaNDz9GtavREhhxEuGdRB8QLbk4hRCnTSqjNb55JMndAPXWg",
  "key30": "5WgXv7zNGb2aWso6cqjvV5NpkzHkADVGVij71mjuGCKEcnaqiueecfnQsHdfEexJ4cMjsXNFut9Ydt4iG8QxSUWZ",
  "key31": "RjwRFwGGFbiWAM5XoTniadzF8G7Z8v9GbgzrwgAhWQYXYM8kD1SZVWQkBQwJfHjXwGrmCxjMfWTjKdCwZz6dn66",
  "key32": "5pBr1A78JqeHDQY8LkBmRvMWqQG5GKvUit2RoUiXkAZnRFST6HvNKvaaqm3UFaj9hTa5ZTXvkj1mSjrtzEcrg2DD",
  "key33": "ko6ov6RhLKLgASFAnsSH3gfENZr73vTK1D689W1C1ZorQk26FXq5pdUig6R3Zt8jwrmWBWRC2RDp4SsdUQd8W2b",
  "key34": "2bSsLgfrgg1arWYNCYWrqhW9iDdeVhZ4A8RZgE92eL1xcrdKYz6uBTWVZc4Md8hmzQZM1uo7BTcQiDTBZTC41d5i",
  "key35": "3EudRbZdZR8TGGpL1So6Ts4B48rSdSmYrLbbPTkJTKjBHHaguSBjpC2YXo78RgG7HUhWwPrDchu3FzBwvdP5RxnG",
  "key36": "4UkdLznX5966Gk2VbPnSwh7ydiUfBnQSMqtKHfiCxp2Z8Zxw42SWXfaSCAJj46HoSVC2A2y6rQxYTEjjE9VC7HNy",
  "key37": "fae1Yd5XVrxYJ7XbVyBjSFKgNsGeFNg6dDprxSqNPPQE2PVteVNTDxgM4CiBFFyMB4s4hXuoFAmSkNPGDroWaVh",
  "key38": "Gk5NL9kzPK7ehN4UZP5Gw4RgA1KFcMeqCEaApYNESQoZfeFxMZsNygbY5sUh27GFPbVNRJqZGdt3A7BhMz3oEX6",
  "key39": "5FVR5QZ7K57ghePpqBk7q1u7kpZikC4FBVqkociA22Q2v7bFqUqVT4e9xKyMJiCWznKQJ6FCbS3wZiSmGM9dcscV",
  "key40": "58Z8XfV7RFaKRnUPvW2TLYy2HhhDzZnpp8d7a3wgCXkNSZ9xiP1XV4rxGQ6E3Ej6Y18n4P6nxV6Xjx8sgYVxgUWm"
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
