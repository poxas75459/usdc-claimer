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
    "CVaPGRTBEDJ1j7YCVLoiJmV5VVyPKWwKzYJD83u2KBHqaHsCqPSQvoM3Pe4yHwKNLm9XoNYMB77fVK8WCyUnGww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z1ZMxj5f96fE5pcgoEsZNMN6xRBniX1unMAVFZfJnSV5rUNcBB4GiYye8jxuMgeuTCfikR2YC2opTuYC4nfNoQi",
  "key1": "2175th2xW7d8Y5DjJPfxuGrmCsDdhhnB6Fvhpgd1fG8V5zRjHPouFDV7gAHJXdXj3of62kCNjZ7yjhtJYxKBibue",
  "key2": "5ThKx91GqWcEkjHN8SECm6aurk26eA3EiH7cUGusDxwqbzdUuecj57Lsjzeya4GpQSSY6HehAe3fRjTSDXcrfbQW",
  "key3": "27DKwKMfmqdFa9Jq4PpCPuX3GNme3mxMXbajwLRi158GHg1JZxH1iQG9SHhn21dws4RpGPbnanxVwjzdVYzdxxRK",
  "key4": "4RZhPAXexkvE1CbBcAALv2fNS1CX6KkB12JcNMYGVR8Fynjocz34BJ5bMvene4pn2aeVNmTxy1CDmtzvNLkGhSkk",
  "key5": "3AbULQLjkJdL3PhKK6Xy52srNoDxvZstF2L1h93QuZWabbJ5EoZgyhTyCyn2srGVWPcdBueyJnWqUuaoVkprikaf",
  "key6": "eRN47HvWaJbQn898VwCc8Fv7SorEDQmDRFr5fxyfHgrzuMfymC9nDjM7s6iBAKxNgGZFbhnwQArb2fhrXNeoQaa",
  "key7": "4GG6RK21VQFURyZUAJxGLRpnd3GhKsH8cigk4ehSNhZmRGfFPywuhZijHHuVaPsRRXGHb1s21SmF9E8Y8CdM5s6J",
  "key8": "4agfy8SW4yD6ygGqtCUMbrR5K9kYdHaDJegsG9KiJ9ahSAzdUzBU5QhcKW52CiJ1iqiuwQD8tmfjR8tfT72NPUFL",
  "key9": "38VymWqwwZgtLDS29ESig8NUV4kxpVyrZ7r3d93tFtgmeXegrVB6HGUkrB9nTAWL6qi9W6vpmmB5BMQNe5C4umYy",
  "key10": "5TPH9sQ7vYTn24WMFN9Pj14eqPeEXCQDfgH8JibgmH9pfLCWxFwrRHjbaoHhQACRHraYJmH9qK2shnp86dqxQy7L",
  "key11": "48EMZR7jqPjcpCGDFAAMRzSUuvnStkHXKiUcSocpQCH2ssovWhs2JmyXW9THsfXXgrF9cfX7btp6uAS5eUV1duUu",
  "key12": "4tUeutqs9bHbm3quurXL5UNG9FFMWBydoDvwEvECJm34C94jbz8RmAt9pFDXu6Ne8Junq5XhJ7P7ppbTS1Rindmi",
  "key13": "62qneqfTde3in4z3CxtWpJgY2kxDXuspnJj3GxifhwVVJiGzYqB2Tz9X6FUd7WkBRWDdEav4oJqjGcMeF38FjWBg",
  "key14": "5UNs2UNGLZxNJ9gqr9uANnmLw9NjS6CascvbeHpArVaqAqixEpRPYrqtd4pDkV5nmb3gCjBaHJSfYNqJJvkvJ4wd",
  "key15": "5zTnDPeVuskngJcwfS1yigtdgJ5qxdJJsvGFqG7TeKW8bngnHL4rcDeS3FXNf5mC3iEZW9p2V5biRtpjfEUeTDsX",
  "key16": "3DAptV7kpdUzJxFWF8XUJTu1ftzW4buiy8Rse6454zENUx6JZ9hRoifNVQaViRE6ELvLei69W2eaeFTAsmo1fcqR",
  "key17": "32YuLpPDXuNcmJC9GwzEtiTMhSWLhJc7HYubhHU3m3z2kHpDQgF1WLd1QRS8E3SBwUTf7KR85sUmGVB6Wv6Dhb9Y",
  "key18": "2Bo2qfyMrHPrLyL5obA4hacFRDMT9xGPXZYCvVi5p7ENPrBKk58sLEN1ohKPCS5kEKUj8q7H21Ue8QP3PN4JTnsK",
  "key19": "3noF3fApfEEkSivfTj39E9x2UUHDiU9KYWCYns7muVVopmC1d6UG4pVq4GotoQ5PP2kKhnxkZb3FBMns6TB7bLTv",
  "key20": "2iXrWBrv3vuRTcy2mLom53HF4H7MebTqMPCQBXDLoDUZqwz1CaKwJzrgMTPG4RXNDizUrdYxnKdrE5vrofVLR9cp",
  "key21": "4hLJafCe7pg56pzEtK5HB3K9CXfj6SjFMVWmfAYF7CXniDeb6mcBNwX9pvV8UMuVBUVY8JDUDyKn7CSSsGw5LWN9",
  "key22": "3Evqkn8KpXMdysX6NJeSU2oY6CwTzSDNdGd4zdJFews7BJEh4ceJPEYq6GUhb8RTDcL4aw5GvSjHZBqcT8s6XFGw",
  "key23": "3Pp1PxMNE8XBQjBWL8Tjf9owBE96r9aDDeEtFoCQVvGxSBTrXxg5VJ3ZaXso1yryc29KorDMZLuDJKjzKtuv4VSm",
  "key24": "dM2jxEvetQ2aSJGHkpjPhpRykC43kgCmFnEmf36MgWUWzGQ4CfE8VaCM3cAunb4KAB5Ngx8wbX2jYEHsfqwFfiN",
  "key25": "5Gyb7utqp5BkJhRBWJ1R4EMj3u3SQKXsLGBxKLnfTDTP7fcmEPZU3fMThZkkJVtAt7YzHdnxKq7u28WRihozfP1D",
  "key26": "3DiXpcFJZXL9ePkRoVWPeB1BJ6znecnx4112eroincqv8ZqSDSsN8wqW1VH6DUxTbck3LArP1Rm7iRzsnDTtEpmd",
  "key27": "4WRaTCdYkbB98KhLTHn62YmcXVpz3zeg6L43SLK8jVz8WChoQZ5PJavk9RK4eGi1xWEFL9paZVX9k2re6RFJBq1W",
  "key28": "2EG8eDbkJF5jt7Yy5rc5doY36N3gQEg8P4GvpzwCRMhqM6EwYUedN8PTg8aMzKrUKq99AFPyzcficbzpX3GKgKW",
  "key29": "3cYozrNxhYGYgPaRZDML617nRBt4uEMtcpTJoUBt6unjLdWXDnWwhbvJBiCMysPh6TsxGf8nqb3XhxvuNkw7iLVv",
  "key30": "5qEPS45wZTmiGohsozu3b7mD1k2UpwXG5h2zBPq7BsTmfHAsyVnfwX5543F4xdJHdTHFAtbbJMVa5iSzZvQ6WNxK",
  "key31": "4KGKktzKTQMU6zcR3zjMgQU6jngab98C4bdcNDmYmj5v9u8VccESV1gJnzR3gbyhe4HUFeCZgZrYrQHPj6Bm2XJ9",
  "key32": "62Go9iafsYtU5A74oxXAYKfFMTdeFqgfMEGaNePLyhhFqWKJmvNARsDWwdP3aHhYjZr6P4F2qUgxkQ47UkS41MwS",
  "key33": "2ZdtNhAFR5AYgBikqYtcejfFTp1UQYBrtbBAYDrDZK3qH8tgAByphG9d8qFMZmbPYwG9pChrGQNGp5G8H7HKBdt3",
  "key34": "C1B9eQ1oHL8tVT5AD7HJEGPNLMYmqUhkAZGqSf8LsiAEnP5L3oSN1mkcGNyQ2Toh67rhebvAecrqnbMbVrXevTU",
  "key35": "5M8KPz6NpAmVicigqfVLohR44KQJiQ3btrJf1fanzKfen4trCoSjUi3v8oz5dBogk7dTawEHm61Z7Xx924iPqFig",
  "key36": "5ySU56VnTB3xJs9L1jHXq2FGt7cN2dtoMD5q76hFRWmXLxPX4cDMRB93myQSUizRfESNcW7uknbr1Pcd532EFNXY",
  "key37": "4RbpvPtoQ5vfiKpH2U8XZHMAzgeJM1pDAMH3qfHeGWgeBcigj3xqLNycLwChz8j1W5NDvKwykWqr4iCLJk59ATqx"
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
