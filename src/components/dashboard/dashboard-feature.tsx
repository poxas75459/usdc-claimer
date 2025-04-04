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
    "2oHUBtcfApbJxzkQ1d3BJfMBGW9YDE8cf8oyeYGEwe5AXhbwuS6zVHc4FawuEr6w9sq3Vw95Gj4fHXVMohkxCa8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZGrLQhEvQdNLHhCQYiu8ba7EoPHjy34jv7MLA4yqUBb3Bngi9i51nePtjLk5Hj1R4UWXWRUhJHJtWVwZdFh8ms",
  "key1": "2LUCJ1KB6gSVzsbmnhhfUNHLV5GGp5FgkbSg6bLo7YhLLzKvxC6QCD1UPWkvEuKGvmQdsREj3iAQPhawtgweSKLL",
  "key2": "5n1PrVLzbFtL7JNXfKQ12avhkUpYCAVN3jdRxKHN1SoFJrYe17MbEgf6sTwotUpTWpvRQhbRUVkCRb33b14aeefC",
  "key3": "5WEmw7nGbnLRaAV42cEDNzLMBmRBe1Q4CoemD7AhLGTLdV18B3tqttaybt2TxYwV2vpNCyqM4cSXRHmGwdsL9fq9",
  "key4": "5H2TMAuxuGBso3Sc8tif92U4FYsJ5EzHaogizHRX1dmYFS4Ss9DJZ4K48V6wY9MiLuedXybiqNThj2sVtvUh4gNy",
  "key5": "29Vcm5r2S93gJ5XbLiKEBvuHTEE4yXe361MJ98Th8RPv5qp89iFwdd8K5caixGGRXGiuPRvC73Je8PQvi5CHC3op",
  "key6": "YUxZKeRTk1RZEDUgs9jzd9sVccvTR8vHhjT7MoLgPvz43F3yPjnfrriyt6jGzvTtELh1LgzasJciUuT3MJ578aV",
  "key7": "5CateMGGS8N3fx33n1svrmUwZW27RYCZZ5yunRDRvFfEYv2bzLH7g6AfSvQqJJFpdfS9CoToQZJohoR98ZNWQCo7",
  "key8": "5PvhzZ5yiFMit7onhF2RnARg9s4iGW4yzg3yyJvkwBRS199vTpDbi33fQbjH2JG7xUfgcQBUH6NzSJ48Lseu5pFj",
  "key9": "JytABMXwDqttRZPC1za8G64BJaLi1bHuSPviDhd2FKmwXLTjviDwgjdbAdMkEEhP3fWXQtjnKFRwvhsSvKXj1X9",
  "key10": "2jWdeshSdDJLWTbFy4tciepbVawXDGyRwQgZiiFKCLkUWoJaGgt2EkAJgafCMcf9WPJrkXFNvBw46F2mYgaW8Xvb",
  "key11": "4nqWonhRgGb1taqqsNiVAhCnHRenzQAyig2NfvmHjrG1tQYX1Ce7MohaxAhkouUyC3RVyJyxCnQh9rRZLcGNxPeM",
  "key12": "4bLYTA4bF9Sw1xQxJDuh73xp5WrgooKrm7u5Y7mjSrNRvgzbiKwqqy4fz95upiLUrHZxj7MVY55wbaa2yvdpZGXA",
  "key13": "4Dupt7inkAxbcjgUNCe4Pm4CpVgHQG5qNqHxD274REsUX6fj9SHXpkfLDnPRtrCVcL4DX5ktF2uvxoYhr1fMTiji",
  "key14": "3VijTCscdJ7wsXVwSLHVHq7ruVsCMuyAqjBjWRYnG3LZca5wHVG85DUVHaiyZpnocAHjNafCDMwo5o6v1NUxRZXZ",
  "key15": "2reE8yjzDK64CBiyxVKGnWZwk6dRLpAx68t4HTJFtbrm2VEkruGVfuCbkLZnbDBqkiYqNYg97NmTvBG6XbtveFNX",
  "key16": "2p3XmuFP25FvQWBrJ1S8QKsN1pcQgrSRx4rJ5Y54btiRhHtMSybcFjdjfWXprxmoiMHGxh1UneKfRTGXRLgncmqt",
  "key17": "5ww5XsmPBQNrPnfrj1qVZrwvMucZocbVw1FAz4Mkxuz5XPF9cNkEqz9mypr5LKoMjnff5SBHVgYCbpgMmmJhsmgg",
  "key18": "4WDDtZ7tYP5BP5iTYQ1zPD5iW27SCHqcA5CWauBtBFJ1hSioASFvbcc1rJC8zv9DHycbs9GnaudLo15sdixeWUqt",
  "key19": "nWALe7yyGZwyBzQCqgf7GgH6CAjxwChAHk6B3hE1n3Ju51aW4re27NeYDaPV3bqmiWrNJk82KwxrJsHozkraPS4",
  "key20": "3xjkZ4oFrWLPbVogDrYwPqrVqTDmiEs5vt7iyrenRacwExfSBBZLAYTMPKFc2FRgioqQgcU29vpWErBoLbiXNCKM",
  "key21": "2cjWAqsBd9Xu45TYaHDH6oxdSmeSN2ovhQjGynPJB8PSNhveXqPPfJ9GFSRm9WfgqsdDWoq3LfA6v3R8pSEVopT3",
  "key22": "5DKZyRNR8RrmsGJTzeg8k3MYJtqMnwwTpfyvVQ4mvSWNp7WWvxiqzzFaxDPgfNciM4o8ag7UhSB8ctpGLtjGq7CC",
  "key23": "5ad1zXDGmgsSCiViCYAStDuD631hajbBovrvR52fHbNtexhg1KcGA1iJVtuRwgn8UNepBzGRXRjUKRUrjVKp7FU5",
  "key24": "ice9qMewY5ztZYWCJ4guU7m4smw99ZFmP9cVQnSjUTozRaEMLzRRJxdLzoXzhN5BMTbLhSH9a38dKcX7jLnDEev",
  "key25": "2En9yeWB1mSskrYYTPqCajjcnmCR5vnJGYJd2131MDrWJ7L1fmwgyhCps3ErgmUcVT5qgDF2vHxdWeQZmZXa9fhj",
  "key26": "3VNfKArLU2shtEgc1DNzMh1VB8ECQGENxSj298hjKsJuJ1u2jQnvW7DCKAo3giGAyyTf97vuohssWppUWRbkvcWL",
  "key27": "3XacoYMJreSykhm5pDViuZGGKbGgXp9qmL9253FbxEcqEmbc4nqTfkNzTM9euiybpJMM4kg7j7Yi8GmmFaUPYBkH",
  "key28": "2D5eSter55MuANjfjTDeiqiT1FMNxaLLB92JXsUrGhaWjxDLYMHMazkHKCWuLFyMyDk5jZQkvkV7bW4dF9Gdg3KP",
  "key29": "56dhhPSu6QNE7Ne9ffbuvgW6RrXnY5rErWnu39qRQzgkZX3LbfebKyvLpUHUBZcrC1Rnrhz8UjnuKWfDJXTsQvk6",
  "key30": "q44LRU9nAhDaZn4vV1aWRc7DEVYNjRiSsVHgVFMXpjDhk1UfQ7yWLpy9aPpy9vp2yBJE85Z94zUReWvVisCmaeh",
  "key31": "2kbERzWDYekxZ8bDCEhvcoKLXcEC2zKiLZxRdWL3SWvXVovbTnD27tADqBh1YByPeggM8Ui7HT62eoCWLLwvBb7Q",
  "key32": "4TSFCnfyfKfzUJCDKXSdTKVDxK6AnmQ4iFoyWLG5rRYRY1dpUcAs2tioDsGyrwoUKzcvD6RemwWTEYySrMqcHDvz",
  "key33": "2o687axGv1VvwsWiQbGa3GJKvV1ayf5A12cdoHkvqpaxv4cS1P44wJzoTdchvvVN2yx7fKJoWapeXp6ckG1krFBB",
  "key34": "4SgD2RDKev4xrBVz7RqQRjU9YoARWfRj9kKdv3tizkv91WvyPsXda2LCsGkQJfe1QFUJjbD7ZngDth58BmP45mwy"
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
