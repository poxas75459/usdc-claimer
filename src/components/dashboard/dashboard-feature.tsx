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
    "sAheuf3o4FHiSnYCkHDTDGz7V5QsLTiyTrHj5DX6GRuiZtJnBkuToquC5dAiX656tqtZfcgpaKE3XqWJGoZRMUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64HrHE8v8iRZ27xsgwzx8AnKc8Hd9QZcMq8XtLXRwHbeTH1nFqjaYW8XwNKdN7bc7Rmu5w7atzFy9ui33HLyoNuw",
  "key1": "38AQpYSQ5JqQPZoWi2fhn1fU7QCLu4UAWJNingqRR7dKB89atC6UHmSUjK4ovJ57zSjJPiWRp7aBhQgN3aPoZFf2",
  "key2": "5bHBCVM6gYdUdQ8oxxNxKPxYqb4Jckb83xKoYj77SzTf6EMTAahnmDv6oX51nV8ESfXiXGBb3zhjNUJHC8vmZUA5",
  "key3": "2nFtLyf3zmxSfCt6Uew21zoivZgj1LvYdDGDJ8HVTXbDHunVTt2sJVJuNvbr81a8zWWQnYvGCNgQM3jPHsWFDJFb",
  "key4": "4VrBRSn2ABgbjLC34tAtdGW4LZwmw3jDzeJLCwSuJLKXBo5pQ2TmP7izNL55do2ezWvECTdJqZHMf8Hx8EKpin2u",
  "key5": "s86Tg3XAJx6vgixFFVWS9wAUoBAirYArhyCkW3AVfdN7np1tqX31Foad26NJokRYn4LSq31HF5mF66mLAeY3CQ9",
  "key6": "Dk1TnL3B7R4ELXJNf5Lo8V7AVG86Pk2LbjK4hVn18h3YjBe8NTh2wiEdaUdTTeq48yBFTGb1PBb1RKvvWxnQR9h",
  "key7": "2MgtVeQ51V7ZLTwByvousU7t8ZML36mbSFcNPFrtY6AXtxJTWf4EfPKwALFZF1uGHs28TA2GN32o2KqYwuFwSSG4",
  "key8": "iwub7ijZC1P7KThwVgwERLZQ1et1mLdE1iAt9KMXxAgXBEcdUaSUbWvxqCeiFsWgvPktWFEFhuse7MGFDsZ7tuK",
  "key9": "4Qd7zdwasfP9ohv1yc6hFkRqR5R7PCgSJPjA1qQCbCL4LMz916c4YdLxG9PZACUFYT42rcNSMdaqDYK7kGF8Q8j5",
  "key10": "sqhKeLaiiBWqEyusz5Re1TodeRFN5cSBwB9xGTHGTAPE9KZCAzi4DVZm97qETJaFRVfk85mg2JyFAxnBhTh2WUX",
  "key11": "2Geghg1F1od8FzyLXqHKNX43Wy3HWb4GTEeT1ynq6B47Kuhb8ejhoFvu8dAeRrCF1QNY6LPvueyfKQEZka23Ms9Y",
  "key12": "3tskyx71Qu43GHCaod6VsH4hQNtKiqzjTPCa1ogQKYvZadKvZSNR83PzzWMmFozxfvuCzVgGeCGYTo7se5hJdD3o",
  "key13": "e4ebFfomLNuRNfa7NQYo2jPYQaokq1UyBbsLHHtWVNkqMHC3umj4LbRB7i3US15aVdqVoQ9pYX7RxGtb82rjWcH",
  "key14": "3GzkaDF2yyMaMNkSmWRYZx3Y8D7NLRxoLi1NmGKropmE4RoqKG4dzTBB62h5dezztMBKZrqJwFnuL9TXBoP9W3Gp",
  "key15": "3Y4sPo8nkzDusUsQQ42W1DtNsiGoDEL12UFaZJ1x9fFVarVew29FAdAxmykRqSGL1mENtokEw3n5q29g9naXPdLF",
  "key16": "2S4gS25degYC6XAG3yYdrczoP6oxfJrmMt1HTT7Et97SsTjoDLTk43LdswnCUuFm1AEcTVBbSitoYA7zgsAEJP4y",
  "key17": "3noWSwiTxfGzaybYguzzARTT1LNTqP2gxS7qG1qKXsb1msc16t8kNspPiBpjFsiagoFN8VNbaURHaeZoT511cYZQ",
  "key18": "3Knyh2V2VYNEto8HRDSBX8ceSUYjStXSvjQWnAGZZ7uWUpQrHZ35TDdphucJ6qmWYYUbYFGzAXK5gCLa5pK7U6xX",
  "key19": "5DX5u3Bxtw2JxdwVHW2sz3rUhEVoPsvz8rNWUHpBdsVQ4XBKmH5xp8gWVCbXxSAWzSJcX1EqCubNW4cAgPiEVq1Q",
  "key20": "4F7Hg4sE3imj1G3XsTGcrDhbwSR4zpiLKATG8Es6zCJnuMvSrnLyHphjKeHx9WajrrHA71UJDe3Ptz7eRSgZCYM7",
  "key21": "22GASHGLhoUcCJUdKJHEBV6fCUKUkfnVUPEFdDSn56Ao4hA4KAbGw6bA38i3dxVku1deWvvPc4MWPZ77jgB41vMr",
  "key22": "8c7tRCetTcbdPz1zfvJKbnGZmw4NVbEANszJAyE2rngqfa1v6z9GTaxvyNPZkSGeapAGCi2G6hrP9WPXozBuRGA",
  "key23": "zADQ7ofy1J2Spo3Rguw3BzoELMa2ZeLPrgPCCB86k7VDT5vmc6uHbdYw2KxYo8a3xKJ8irp3mSJubYr5ECcdVYj",
  "key24": "5fpxUA9Qy88vnwYA8JSraRSj1YVRKLLc71u3bxcGeWQLZdBmKfbkrS8ugMGGGrpq79XHTtgxm89JxgpJ7nxNohSL",
  "key25": "3MLfGjjEvPNvEknbr2CnXUHAHTFVBjbnZMoDhF9KLfwJgr1RB7adX84Z5p7JAgUiJLJLuxkwWv7pkFsmDw8CUNzT",
  "key26": "FTDBb7H7FpA8Zen4MRZREYNdjvPbPSHD3LLJ39jhPVoYh52DfuXZjDd7yFrSmrKc613iNguDPKXZuxohnt9QZAe",
  "key27": "4W5GQ8eXoTyFEnvVDhsadKrFFdoPDHdnoqG6zPLdGfoKDJtRA1zKK1Kbg1tgdqvgZThgi3zKgDnw4BuxUDGLcX8G",
  "key28": "2Tc3oCQB3jEbBmU4cgEUeqNLhBwC9WVyGTCmsY6Kb3X4Jka89m99zdYJjoGgDtHchW5YTYj66NWnThbU1KCUuACh",
  "key29": "2YqLLk5jGeZ5x1MsnD3BTEcxAYgtLuuLq47iqTGudjgAnmBjfXSwkW9UaLs6mXeUBBLqZTxg3wKbxZujWRYomroZ",
  "key30": "eRL1rE2wA3y2Era6DNKGufg86RUV94oA55VEd8UBidEqQq9WJGgKp75rrT2kfshD8D9bNeSusCVwGpwBLS8ffGq"
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
