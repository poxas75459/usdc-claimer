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
    "5TjB9uYQMA6UoE6xgwfDsSb73q5LCuwgH8nctSJ4zwu65TJQGCdsMeJC5uWvJsgXKiDqRFri5f1WKJaXmr974rDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLezxRHr3yMKgvQ3K8amyk6spiNN1NnZNnGkjQK7fJJs17TU3azoxuPgbW95wSqjd7KEAU2ZrsH51DgwLH7jEGL",
  "key1": "2JafNFsYftrjy4jkg34LVJEhGjLN5cc8SBGSjniSW2aLShLkGFeUXSgftf1tpkzst91Fcv9S3kUPxG8E1rkB35VW",
  "key2": "GghHcv3ZiCvjrAuRdBh2EtfwxSor9SL9Xuyhrcxig25aJwsQrKPSdqyCFauMb7HZPHzxk3MP3zT7tmfQjVgLS9P",
  "key3": "567FGA3iDD6k48aTCJuB5X8zNp7Gucp2FYn1oZfEVQKAgn18EavSXU9D64GNzJVTNFR9mmDTLi3ob9R5MHwjVVXF",
  "key4": "LuN7Tu2KWaz3ZqwesjTARuFYA59Uf8ky15aD9rsoSHQzKn6GJ61e9hg2ETC76aeQBxU2kDonExFZQSJRQYdJzrN",
  "key5": "431R1tJjSDijQckBncfN2feyu2cd4QpfrStcwhf9vno9SQUAqA46NYGfXVXCc2K2UxTESDpzSvszPF6cZc48uEJC",
  "key6": "398g818L3VVWJCW7VcCMJwrTif5CsbGGsDCqPePVDCraDFRqHWKJQRwMXdXcYHh9kakGWVaHBpxeFNrDZ38N63z4",
  "key7": "3wV3yQCa8s9oUcPJgD9Wx321HwpGzk3CGRS4Zyst5N7fzdmrWbuVbQUrHi6hzmj1SXVdy5miFWkDtaVGAyA38hCg",
  "key8": "4BmQ4uWgbNJ9LJHYRzEnJEm2m5up1C2NkFL8bhM8bVebjpppFSRZPLVAD3dMVau52xkdpi9bviu7zPbNWQQAT1Jt",
  "key9": "2SfWwZ4cGaki8rQTWFsSRVXhMnZ14xDEbq6RiCbToM6fDrRcWfj1XhwNZttmmckmUhSjnfBXNBZZiG3KjcbNZ5er",
  "key10": "4j1b172nqvPdCarzKrgT2h7u7TpxhCak9YxUfvAnomDjL6DqbyhL2uHJyW8Bqdfi841fSPHxAwdSdSLvnEhpFij6",
  "key11": "4Nk5jyQMS926jQzGPXqo2seeTvTyuuJve1r95M55JVTje6EcW3yvm5rUZW3U8edAcw6NerqL5uGT2mQ9xh5Lsxsn",
  "key12": "5WPVvPZq3BFqMH8s6SNWwnMT2C2LaqRnxHPMfcexLNKTqsq6P1wCLY67GEdWTK5q2iGLenEUALMbDfYKGpfWTpT3",
  "key13": "5ifjspgQHsBhN6QfYzXnVPeQEeNR8NZUDnzek2ShQNLJWRDfeP6e51X5gAFtNupGvum7jNJERoVLjiA2TBcgRMdc",
  "key14": "1tJQ4R9QmUBQQgB9yRgtMtauocP7BefVHKd5C2qrvJj1p4m2GVsYEztd48LUiZ1nDibsPo6srwKHXZ2EZAdAoUv",
  "key15": "5QAXpSXnqE8yaJHbwXXRsKxEFajtFCqXeQ59qsLfgu6uDpzEKmEfhe6T5mzJPzvhkBohM2JWANKMr13bMpp8H4sf",
  "key16": "2yF5YCydzHtUBGbUnPCrTnT3XfuFMUkbwjTFRd67nbyMDkwGDFqCTiXUpSDvPVpMPDLeCrArtEjgHLsX8jW8HYZX",
  "key17": "5XWD7BswRDhQh8MRxUbpcCKRzW7Ad5tiadv3C3aLjbQHPztUczoHgtDxY5KcuH8XMTS8huNQNJ8utHSnxxbfGh8S",
  "key18": "5aWGMKGjQ2xfTmgEUJvVtSbf8HbH3wDku66Z7gASAUZVwKeyrDmyhfWvU7wZSQmqz4t67VmUBST9QyxUYheT6a5R",
  "key19": "62GV3NhRHem9ZTegPpnSGTPJDXMNPVcyoCm2ev8r2bMzzpXwK75ChsMSkF3vuQPsLR64c6jXu2N1vb1ZU2TA5naS",
  "key20": "38D7FdfwCDsqW8i8MvYyfbva5UQQCW9eZZmwjCJ8ta9o9FcjuU1g84P6tvqdcgUFeKyfwsxJREtNkTLTFciRhKwn",
  "key21": "4wPHhqeei4We3PCakuUfs9D4YQrRZXtWGfjsZfJnjeDQWiYQfnpWDHkNneBqvzashrGKoQXe2jWj8U87w12F3sc",
  "key22": "31dneHqbu2ChacB6TDbZ3VHRw7Rm1ADs3EcakCHXjHpcN5YP9gQ7e76fzAsxsE4u3jLrZk2RfZwNUTFwDJazMUGs",
  "key23": "3Q4ibtuHrksc4voZRu6F1Y3jRnDzkbkLdEGTxPT6oPtwtM8t4AShGh6sB4vD787suf4kwSZVkoRt4SWreFof8p71",
  "key24": "3Ee8BtveYi98vbB2rmK4rw9AaSkHxG4Rh89h2PLQPBxNrrUBsK1Rk1qGCMAhMYjGJBZ7vNrLxQxiLf3e56UucApc",
  "key25": "jchNfjQ54EzDXn7d4Mq5dxgBNRSqFKGHev9QVmJUKhFJQcPTYHMQjWgr97bh6L1Ms9z6GzdgX7CAFCGuyrbqwGR",
  "key26": "XD19fiYqmr1fZz9ZSjzrAUb7oEuVMMCm4jA85fgF7aqj6s3V9jPPszejjAJLWUSUsrQYLqLMiNicPDmscV38rCC",
  "key27": "cKBFcHFmU7ie7XPff1MrRhBEP4TANwXStc4WaV5srwoAihAHTam4cQx4oi6o8tx2zNR6kGamWqnockPz7cRmxrD",
  "key28": "2HDiKrUa2qjuyxudNDAJP95L5byELb4BRsPxbqtXSPPbUxojtcBgpFtWRsp26t1AhJFT9RaUrQ18upmVxPjdXhxe",
  "key29": "34PAgWVsGV4TrD9qehWHdKMikaMVNcN54jzFSLG1xUu1L1YmyFtvx5YY9Lvp1cMGdP6poXkjeTugVBmmQ6wbPZjr",
  "key30": "36wSyLA55LyZFiZxn8ttyEkoTjky6i4HuJTTrJ9hnQRbeMokrjuKzFPVJsbbQns6b5Q9oiFyfnYvVXuTsMLQngXN",
  "key31": "4GdtXFLcM5RszErcWCCv1UqCYWY21dXDCcU7Qxsg9JF5aLcQ7jdTLCHV6qFHtzjBacchXf497SmFB6F6D179TsXg",
  "key32": "2Xs6mzDT1iHy1YJm3VDuWd5oyrep19VqzhrvWVFaNrD8REbPE4Qo4ZYkRiQz2LAiRx3UJoWgtd4R8FCGT3E66Ueg"
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
