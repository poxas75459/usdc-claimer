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
    "3MAjz1uqWrr5TUHdbrctgcBLqxTVFK7kYJNXyZn36Lk9aSyU9Vc7nZnXBofvn5nTcR215q1kT3SzwPgnDfBKpLaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ogMrrfTDQx8iEz5Xpc2ruyS22i4NNLnm7K4Jni1zv6vCfNDpi59Pt2BUKCdeMEDXrb19YUg6kR7c5ToacssGV3g",
  "key1": "5akfpsT9QYwHV7sZ5PnFMoC1esWHKBrQsB9nSNVX9D7ujfNuTZugt6QxXyj4WbdVsteqqNDvUNwWKuhCbtbkBnWo",
  "key2": "599kH2JenaZEMf4C6LXMKzcvEEqh5hTtJnjGHNFwxXbF45qBzBoLYH9B2Am2ekyAtAc3ERYy4V9DHKSk1RJGmJ1Y",
  "key3": "3sscVf5CyqKMHQKAtFEUpgkfkFKhRtsbeF2qZxX6HeYrk4a1BVs166tbfrgwqEpUGLKBtdaM5BWc9wS1EJuGjAYp",
  "key4": "5yPd5G3zjkgh5czsu64xYETqqcX2Dmu2dsBEtVMvmSTp99cvUcXuukSMfACMwua5zrqf5xogV5fBuDo7ukA3Lhb9",
  "key5": "562B5TuLKdXg78TCuvPUQ6NRENz82tHeJfemJALzkfi53exHBbj2zsWwycELm1mR32i9mr5ZCw87YUs3wYcsCd3E",
  "key6": "HnUTLFQRFcdNZcqJ4gV1VGoPtp5JdC635ZRvRcUK8MrjfMEz8QfzaKTxe66UTyp77hFTJQqTHQcfRsMTx4n2kZv",
  "key7": "hRZbDjQ4tEopraYyEyw7Lznx1Kgw7hZSwd928PcvJ4UsW1HEdpJp6C4s2fA9MBRJdMpgyDkNVwJP8rFpJX2LWYJ",
  "key8": "3eANoQj9SmrXvwY8bmRFD5coHe5a25M6ozYfgh3KotNC7KZNfv5vCNdNgBaZ3v4cq4g7AiUqw2SH1oezkzTQaBdu",
  "key9": "8NKekLFuyrhUJhLFLGg8C7CsTJyPUgGJu2jpsN3KzCNZwKmzfZ4ahVRw3CXBCeskzZ1ccHTGh9Xh7m67MtF2CB8",
  "key10": "3dTxZarhLAuwRr7F9T9sG7xoABpwovKo6UuoMYmGnv6bHKptNwzT3qdo6sZt4v3EWhUx1R9VTxx6EVSrFh9XrDJs",
  "key11": "61W4jpvsMk4vP5JKwfgxctMLd5E7K3BmSTwD9P1A2k7jkiF8SDMxtimKTHTSy7ZVBnqiqXkRDDT3Wmn5pta9HX8n",
  "key12": "22zuTJZfBt1tXstCoAaux6fktCG31tzMTcEz8FtFxV4KJt6hoC71NELpGgJRG9MpwKaJnRg2HaTBiQQQtdrfpgX7",
  "key13": "62AXNeGfag6kMkPc9qj4MA8FbacV2bCrQuQXx9afWVENFEGf1o8AmX3pvbaiBZXj2ofzrcq3Az8cU9tT7boif6c8",
  "key14": "52Sh4JbK8b8G5hd7JXHVr14h1ewm33gLFGsRBiKccSrJBNvYS1uhS1rZv3wLSnX53QGygrLVnzHjVvqaVR8TwsJc",
  "key15": "5s8wx8gaAWwSmvkXs4wRGgCYxiDjxZvF4QNKJAZ1SSddY5iYuSkmDs9BjXWBzwvU1MnjoKd33DTxFLXJPLnpzufD",
  "key16": "3bsMasC1Ky66eY67QKCNZ7iTHP3KCbhAZGnmUqR84d2z5qKdPEZN1eZKQwv6CEm6333trLsj87Wpf1oEPW2oRPLR",
  "key17": "37wPDHmj7vxpGGYqqe72gtGuerxLq5C9e6J2LoepaYjY8fm7NLmYFntG4spkSJzTypYXUWm2qFfhnSQ97pxwq3q1",
  "key18": "G5zAajvfrzmgXignE8n6ST2WW1Vxz5vjVKnL9mpRSAT7T8Aky43THaWwpGfMWKu7TMKii5xAHFxyCBGdAvoWRhe",
  "key19": "2EKpPZTHgCxSBqDdQmEdUXr37FtWEJ7iM66qTut6QbWXTWoJYqjArGpbzWWsEXoCqCZyNH1tBtGcBFA4MeP49vh5",
  "key20": "3PujVSyKu79aA7tLNnQJFN14jVQ2y9zftFgMFFYfiqEHYPkigVTgXa2MpTgCieoBGegXFMMoaaVoNFKc1sWeA2qh",
  "key21": "2pju1r2cfTSVzHCG3Sje33ssQrN8uyC44NDFNEL264MauW1xT1e8JMa79D7PzaTKjBK3A4Ltg3vfsUgpPQum6q92",
  "key22": "5cXR6iyaYuZFmisbCfvubMV2kBEMGGZ29tHNR3p2te3so8bkxDEv6Sd348EA4TedJ72N6t12vSM3qe5RYx8rLRfE",
  "key23": "54zpjbS118mYyMnDb1ksQshNKyK6o8ctK7J7VutmQxkhEiez9gut2YWVWNv9sRMqpb7dBEzKv7DfPDotEVXLURXv",
  "key24": "4u4cXrW56FJ1G7pA59nnjgKvN2nVApUN1bGsiwcUvPHQMS9CeCyhfH29s6Hns4bw4NcSzRSqwCEZFpG5J3kCkRGX",
  "key25": "5yrHpZNZQxNFrpFTsWMGdzsoJuLyv3911KdCsYYJCwqjG8hSQP2aCceuE7P9bLf9FoQQ7uhbzaWSQGjfEv3DGhS",
  "key26": "3EjtM2iV8Y7NnParpMQsEjXECWjuHXmEmgts1jQ1ZCPadBLFJJFdmg1zTCWQcsK9R6XCBFtWF89ekfx2kdeFHwRz",
  "key27": "3JQfkd3yuxDRwXj18QgdmMMQq8EuwxyVCPGjtBCPBmMiJBE1GPuKDggNZ1CYTasMNYQFPD1MzoHU969ohD1XTqVg",
  "key28": "5YA9iivzp6YBqJ5cKKQK8wV6PtDmdqjXCMEe8D7qdCobLan2p32sSAWD9UZGS3imSvdBembCXKMHHGezoTyP8pXS",
  "key29": "3TBiJbRr2Ny2ucm6nXofoJCVTAtTVyXVos9rfj4VoEYSWaRDNK2uQhfFBUQ8La5mzVgQyh15sspLApaQZ1uHhqhq",
  "key30": "39onAoCjdXH8XNWV497eJNHSLBpXnC8xTGAJsV17e87J4bCC1ojBNKeg3Bh8dWa3B4TkNf9Y1mvP7HonBFRf7CeU",
  "key31": "aFr9UU9jHmo5ChyKdFi1m5ynwoZuG13MTqkz5uiCAKdiBZHpMGxsLp8dBpB4jLWfPGPXdoEdSuy5s9Jyz9fRXN1"
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
