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
    "36uPoAeSq7cr6xVaACF8KNPe2AMUKD2YL4jTdPrkY2zNqiZKeZjoxVPfwUfN6Y43ECXWB192JWVqzYiouChFufwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HdVVn9E6txLhgfQzbgPUpqzUCxPfJaTUSz2eXv7VKNzYyupa2FAG87uYRjEeTnjF9Sqp5uewaA9GGK6Py7ueLgf",
  "key1": "4S3eekgm4yFaSJj9VdbX3y9MvnRbX2e1dKDBD6R9LFH8sWftsGHaBFBK5C1jxDDY4QjP9e1xWoahKujwBxvjMrzF",
  "key2": "U18Tk7yco4rfCL6siAXNQDfrdYxmih5fq3gFaKUoJPTpWAyXyPkjUPWRxqdwX6h1HEGW9yK5Gb9fQU6HqQn7KxU",
  "key3": "2y9CnSxZdkXuPSBtPKthTGWsyiVPfKKoZaXSwjy3pBUQr2HdC6sYP7QU5jfrvonNPGZAvKkmPUUcsiGpnxAcY1Ae",
  "key4": "5sbMJ8i1N8XrQxR4FJXzXG8hRNf1WXJcX6mbKJg4E3DBPCbymu3PzZPXpx5Hu5RhSKN8RwTFC7EoigsvBS5za94y",
  "key5": "9Tyi8J6ZD6PK7gZLW7GcDaVAPPzH6rpdtWxGK3DCYr8TcrAeXYjLNQfs2bScGfonb6JtsHqdtXRfWcaTY3h9jHj",
  "key6": "b9hfA8NJ2vsNFPXuUWNjHRU5FSVHMGxE2rqDvUun3n8FH8JQmNGJfUASmMsaML2j13jddpmkdoNEQYdkSVXFd75",
  "key7": "4681NzfCrTSmcpnzqFbK55U1ndeXzoZtXr58hZYEMRdKsMuTjzeav6TUgYUmGqGRJQUa4XC1Ky8fubu2iugkKDj8",
  "key8": "4xi6yrWvtprMDE8PCG9MF1CiyFzLHq1Qxz68CaUrTcdwEjC8mFDkzoWTXVsbV33YWNSSyPviNQtbYxAviAQ3uzmC",
  "key9": "3tmvJwaRxm1fEFpYEJDbudV2cDN3b9Yebc7pFk2PbdoR3wYAaB8DebuJEzGAmTGZfhjQbdKBJQF5sbnj1f359oXo",
  "key10": "5xb5K2pEvf3qhKLn7m9caZE5UUDoTiVfM3ifJp3okXWoHmx4wbthkzeicD6K8c77mpqHFn1S5gBCZPUjoXhMse9r",
  "key11": "4ZVVmeJYcgVo2vqLX7BHrxiVPG8ggW22SZJmvbQQhUrVMi1sk5fs7CoFjxw3U4sbsoYXFE21PPJZUVnNLCwXVxC2",
  "key12": "oL1mZ4CVEw9cuQ9YXrfL48LW8YFNky4MvBompwvj9it4R5eq1LF4p1y4JTCwkqMdCgQ6J7JHFimdFYEyUqT9FtR",
  "key13": "J8FBf4rzzS1mY4qseYry3FPpZFMGy9PpeSCRgzrLbqmUigF7a3nvuqLSxfkY9m1tQq7LMgaYBBcBPXnEJUY6Gvw",
  "key14": "xtMWxiw8iLkiECRPCeBcWWmyw9aPh9b7mtvDfxmFBSksEVgwwPBkVf55jwJ5wQFXXmFwwtZvoZVhHcAxdRxeiyj",
  "key15": "65E9sw5LqwoU6fmxvmUxmPQJ9MLfzD8EQS9XdJhq8H6CFgdgJFMwWU3SHfcuVThp8SBr86n4M5E3x33NHg1F2ZMh",
  "key16": "61RrCh1bKhRYUf5cSmonYJsURFCZMpGqCkKf9cQdg2b9vRxWNFXkN7urCjGYdmYkXAHqsVFz8MddtvxrrsCgdYQL",
  "key17": "2QttfVVqsyTMYGiGLshEPvK7ZFkmTqXJUSoWUA6vhaTTURMuKbmEfe7GgqtW2M8vKGQUzvQygiRcXqFSgQhd5m4V",
  "key18": "f4VEzLzccMHkcMwkiiLhtZdc5pGejQfZtnMfrhaTyQDge1rc2W5mVa9eKm7vAkYkfNpERPuJDViKe53kHCsEwya",
  "key19": "3QmpLN13ANqWnzS3WC8RKJcNet8Pc2gtj2DYvQxJ3KRKKYnW1duPrUWiAyKgBkzWLcXxfkmbF4VkUbRuPqBPHCjs",
  "key20": "4q8ciujn66aSi6SGuFjnXET86GkAxohoPEKAxrzvdoLTrPb3vs4b15q8rmyTHdbGEWWf7BDQA5zKiLnZfkxUdJPs",
  "key21": "333P8hM2vBY9nV32y2MxTfX1Qt4MwKdQGi8A1fg5GiEXJFJmBNLQ1J6PFeY1uWkKir9tUjN1wk3dHNCBa2Cjb5tS",
  "key22": "4yCNxC5dHEhNjwwiTX447p57B6snz4HFYHTMcunV2DgAH4VnLmoCUvpp6y9XfvXehwRkwjycsqPSVtvT9ZTVXRER",
  "key23": "2AGSAHkxF2ZgPYpsx2X2Ufs25PVGakRmctGsLFUUPbeRDveXjZF1PhqCdagcLTFG2NP4kYeS9TCFREEDND7GLkF",
  "key24": "28bibqDD8eXUirkZuFrmCqFcMffCaFgeA3owpZGFV99NAk96XnjYog8rphCsSPR6xJu5xdGWe9xVdL9tqgZmHbKq",
  "key25": "X3hAYQU1N2JHpXi1kYbH5Zib5X4mCgZGNsK6s1e8GqPhYMvbDdLh2Pqy6y8shGcpN8bNnC8wDsZjEQZeuhhSH4Y",
  "key26": "5Kr59vTeDNJkPbYuoRkUFnBSTU2g9NrQP9X872ChYp3YtA7ZTsemiPz6CPaGvMTUdVZugycWa7BpREm9EFgUJMrU",
  "key27": "5SKwjcT8p4gfbPQnhbyfZ7GZQZYiZkdujC5UsPdyCi5Hqez8nWkoJinZ2LNbGriiZB52p4phA8CTBBrGeDkw25Fe",
  "key28": "4abJC2YMYe1zVLbTXmySZt5WvWntKD7yQg7KAgEVPUiHRq5rqdNjCFwENru5eg7cBkuyTYuyhiM21BCXrg4Roamp",
  "key29": "2jarm9XpjHSpLLaoJ1DhfvRxd7mWiAdcG7cJwu6cY3UFoprYsQPiewbPd2w3KcdCeGufzbyEFgvGzNMvJ1MXhU2t",
  "key30": "63d4qhhTQZQcQZ5R6DF6ewWfw921kEmG4SQsQm8P2itF1zQdgUbLLTxjeHJdknnzBYXgKsMYHjWi6eG55n9WehN2",
  "key31": "4ojGDYPjgtW1GFem2V9XTswPtjmcXVuys13cQ5FHGXYa6gBsn7bkTttcUv4n5wEnQgzM5G59UEJcye7h8gY8em87",
  "key32": "4yVPvDtkdrrBtCJ1zeTg7ekRcYYyyc3nvPXveX5Lbb6srxeF48QPAN8tqrnqhQTLJtjCjdsTjhqsjv7SBWyR2niy",
  "key33": "3j8mKqHMQ6ZqH8VTyWVA9n41NBx467fXn6WqokGnc9k2Jcm6NwjqHLStp7NAFgxixJLWzAup15doDCFBJ1C6azZn",
  "key34": "4SxEDszmSuDGJa1XjtwuTZZkKL4J6Goez3uJDJsLfYJjcd2LPe4HHnE1XqtRsNpsnfTazAPaDawvt1ofYNrFSBYK",
  "key35": "4bjWybKEmYyqUfvrCMMxf3gUtxBsbmeySnqQHZkDBhuzYvM5sYTxQg8WQxAUWHZ4CmN9QtcDETcei3LdzbJ6vfNv",
  "key36": "LmCAqxM2KDk36w7AAeZWvnWC87SPHNTP1L34gFsjZFDvY4MvFTAk7SEHQDB47rJBir5MTLKcqbbb2Gn2yGw5fPc",
  "key37": "5w2e8b7xicpapaqvUFZofccvgmyLzs5ZvPTrQG4F86GH9AK4fDYwkrcAkYuoCLituF4z4J5BzKx6k9euFhDFA1eo",
  "key38": "dMtxFBNuTgLEpeyduLsNtWsKPB8m5fPm359b62rjTzr5zZVqGTkFR8RraAXCeKPyz9ttKZvTedTdY9UpXA4JS9V",
  "key39": "3RowKVHgxBzJywAJEitC4xGn4rzXQEvMQ4V1BcTLjxKHVuJk97kDjf8DL5Xz346aR7XVeVp3Mnpd8xeXCHJegX5e",
  "key40": "4o8me7zuw86SBTJCETZBbQXQ3bBUpDk5i9NiG6hCS7hMez5ekecMGY1zNP629VYqRmkDFQT6iFZLKjC25WDPrCna"
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
