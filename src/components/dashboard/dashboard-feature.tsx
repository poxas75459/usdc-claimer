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
    "32Vyfyknk4XJxFL1HrPDhRHm1b3MLjK2m6qhrptXSbDvVnpsiFvpnvUB1zaxnaGUwM2kAPrQqmDGUsoLrQ7o18Pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wp5s3BFQzsDRWxFtNz3ia76eReAaiXD7pw3MobN4w68Ape3kNbVdNhT67CGokpYFxMAdnRL9zN7WRJ163gmcyvD",
  "key1": "hywSqB9NzHap1eVSjW6ePBogHKG4WX8pv6yywWYsKqpQ3EGTaQEcxXx2tZ2CjdJHbG856NdjnwXYeyNqfLcovNY",
  "key2": "4QSkJo7LBtzfStFmBiEEQZygZ1stZWw4pDTx7PbaRYWugDpG4pS9wihWJBAA9htZiM86m5Y94HVXsnDMqQHMsceH",
  "key3": "29V3KFjFEXnuSbd284K2HJ6AEhpi33sa7DLYaWhrnWHZ71KE7MNMbHfDtYynDmXXdetKCrwGSRSzYePKBL8jE8yk",
  "key4": "2XdaHWRYmCZNuKkdF2RsKD4G1URL98QpmN7W9D29W8VbRJBuq6mUWC821SidtV6rDgDHNLgbyqTcd8ic44AVRHcQ",
  "key5": "3afMV3Mv7cMUEioxdif9ppoTjpRX5EZ8o8ntiFTZ8XumojstvQurAzinFWLLzJDa22xu69Fgga3oX3mSSqu5sNam",
  "key6": "5qyNyF57ZRsJ7tq8nYy5CSUnciyu5P4DmPpYZBWpw3hKG4f8DKeNbeUCXn1PacSE5gAZPtKwbe3x13kJSmzRrgTQ",
  "key7": "4TKAvU8r44Q4uqdgny3HvXzs5i8RC3VUhDqqZWUPJc2xwzctwMP7czQvm54F7TtcUizQ87UUvbbauRqqTBChVYPK",
  "key8": "2mM6PvCPjqg8ozwSRnToGQb5poz1LqvmmLFKNkyzE5D73STBNjgZf1MetfimSwazJm6Aw6oRdjEWnyyGMTifG1SD",
  "key9": "bZad38huZjLGLuMChc6WbG8HsynAjD2q6L15PuMFtRH73R1S247dwVAqyoX12Jt9PJhL8q8DQ1QsCRDrcXnj6fG",
  "key10": "ryys5D9WvbM9B1yBEbCgpvn2r8YQyoLZFBfb24zmTmShNUd8rkRU4VrBkW7gvrDDBmFf28evpf3ZskceFQm6Pmm",
  "key11": "4Dui9zjQqmSByDdUTdMESQarfnZTM2fXDSmjwUvmRLHCfxy6AQ6AuvK1NhGUhYz3EEG1GvfFEQ1nuCHvUt6tDkrs",
  "key12": "4VZWcGGFM6wqfki1CdD5ktsjrT6uHV2E1tAJ6A46cH2Di4wB7xD2EEyZjYunH5HHpNJJqjYMXmRTw3Ck9Tf9jGPW",
  "key13": "27qj3XSV1p7sDfHaLCF19NTErs4sbPswQgYdXKQurJu1SxYhq7BRfBPbKfZHFeKxefiuzwknVpCnf5LDPC45mDYv",
  "key14": "4m5WvWNwZZvA9SeCzB8e1fGLiSj699ugc2WEmJrpxonCUXiaTYnAmAb2nARR2W8C2uFX6vBhTP8vAA6oe2n2Jvej",
  "key15": "5sZwNuEqGiyfpqvHu9gmKqnB8JUAfsoqtsio8heMuRqDE7tBgadVFLBc1yzgzJjCJdADgM73frqLAWqdGMTfRs7S",
  "key16": "3LBC8u7HsEafZmqwL57y1A8jsx2NNPkQCSegVqwBus6MjjQjHfdZ3MfuPCbyWX6XuXgh8qUGizMGyQRjPoconYyi",
  "key17": "4CaKNyzhd2MjDGAve1PwqNFAHsuq7JEawpEUxtiHc5Bg8WWtuYMQQJMDbN8hqqt3HsRECWVJeWNMiZ9gADmHnT7K",
  "key18": "47rmUEj4dXH96knqBFaYwQZdrW6zkyGBhkMWn2h7N6vWevW9nwVBLsbuk49R3bQnq3wrXoqTgo5xf13ic6GYHPAL",
  "key19": "36DZEaBBUnGSHTgP3ACY4z48VV5AYtTTgDWwxhSR9ZuYyQ62swXX6fjHo9Nbb7qexDQR6xvWxxibpJ5PUKTKMpEc",
  "key20": "2WraA2AmH56ichRQkLS5DJY6JW7v9SBCYKyx4T1f75bZDJ8xxsVLYzxoN9FBVxrfi6pCL8JP6rNNmG7bsiSw1TNX",
  "key21": "2oXexdkMfvZnFKyaeyKhEnpNw3UKwpBhPKLWhnXXyKBWerG6yRTQ3eaejjNrrqY4kb3efmTd9ToVWTepsBLXpdns",
  "key22": "5dbmVFbqT4YRx7nZ67E2waXSeymjADBZf87QSmwpQgrHAqyhSvPoFRY8Bizqg4YwjpcxwCPis3ePdVB9T9gLFd3i",
  "key23": "2GK6nFp54ds7hP2pPvMMrgM3jhJtQo3Xk68mA5aTeX9Q9PpoPUfUDnF4sjFNJqCpXqtLNUno2c6uLHAFinKfuKwA",
  "key24": "3b9KptchM8MJmdugQdqsWnQ2hJ2XoPJCWb6gQT4B79V9xKG9sBcd4e1sB7V9bYxnDjEgFF8icJ5ZcRvRvmUHPuoF",
  "key25": "2pddpUuTYCbeuqWyTvD5w6pB34Z8eKNZQL5x8atxdoK4RQ4x8pu1TLmCRxi8J9tV6NzcUa6xpvvNNboKDPTKgL5Y",
  "key26": "4qdiVaTb6RuqLmMDkezYxuKyhVGt4JpCRa9yeSVutAhknrHxcJxZwQTD6ebASQuB4FRyCbd2qCAxPgTYCEzuP63q",
  "key27": "cHgm4KGEseLxTN8apWcVFHuEuSx6Mq24FBET4JAadKucKdizGTqzZ8921Xk8SV1mQyvEhAChavYhW95CgTL8YWg",
  "key28": "5dTenA5FQ1LWs73j535J2dHPTYmyiggoDrdtAxmxePirh5AnNVcr7EkexWfpRGvHqKdKK3VpYuRcBNBRgE9eYmmA",
  "key29": "5bvkKgVQRuLJnT9nD7rRZhcid3Yp2gyjF75Ecsoq368rT6ZDQwiSwWGsKAWLF43vXLc9BPch6uAQNmpZJcA8QY2Q",
  "key30": "4av7atyYBSDcABmBqJukLVxUkUDqbLBw6sdVAzvVTLohX8VU3iwN2WFHghChqnUFKVvsm4GaoH6L2qkRnPfxRHW8",
  "key31": "2Jq46BFu78bPNpPV7xMYoq3pttDNLY5tR17bZ9dd9C3sNoKcBLM59u8CsrGbXEqDGpcqPiArh9TDhyMvD4SHbXCJ",
  "key32": "4vVApC2SjQgrzXgjqumMJfDkG4wwBVfEngTkqb7m9cRG123DEuQ9rg33CeUUBZqMUv4j1ZoTvFynio1j8PUxGVmN",
  "key33": "UU8L8TLD7YXNFUCk3CxFMu9pNSLRnamMcToCeEjUHTj8Znd3cSuAeqAB4MvNKMyje32kuRgRr4F2Z5RYGzRTpBQ",
  "key34": "3EeeM9yLDuKEwog9LsYeEpNt7nVdnUJVqqR3CkKvTFVaceCLdwhCFYmDybLK8Yht2fLxBbwqfdzcb2H8cxwFSz4n",
  "key35": "4U1hvT7BDPDKKEuYpfnP8NQDjp5CDqgjd9nqTEpGYccSEtZRcux6hVs3YoMd4XbHoLUdK2koTS1YKvorWRaWmcwd"
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
