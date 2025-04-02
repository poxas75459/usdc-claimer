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
    "2EwgNZMT1s46XHde4CWNe9G7nPFRuzGWczf6u2MvtyUrfopeyC7wqgFZFc2C3rhtXAXhsKR25gh5BATjxMuJbsbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zpue2ksvk2NTFsedmNyesmT9UuFAko5DuQ33ftDEZht8mBzFvoRspCBLzaZgfxYL3VPA4Hmk9MqJ5RhEEy68Vas",
  "key1": "5W7RpUsRkNkphvVVVzEhzbp3NmLwAE5zFmhTmFn8zJ3aqHnK5JMDLvrTGDdo82o9How7jdXJdtYCvBj15UGGuoXQ",
  "key2": "41w9P3k82bf1zL9ohnSFtwGXk5rVZHSUcuGrKdRdLgNWUktWH69Xq34gpYtNfo8n9ncMKeapj3nQXvoq6U4MgMg2",
  "key3": "4jxJkSg7vCDXtWo7GsYvFHzc4wWNR9Jw3tJZKwQm61vKzxMWQSmsNVBP8hSvJsyXtvcsTrcFzfys3pVvaSCzgVSe",
  "key4": "YxVbjdZQUELBzVgm9ayBRANZcAFTQcWak6fCquvboBRkc79Et6PpfqzK5DyMmUZS2AfbGGtvJNkUkBUqzq1VcDk",
  "key5": "5ofKv3MU5tSw34hNW6vKp2Ejx8vXBwVcYghzDirZgPLYhnyZxm8sZgbBovfd4dAaBYZ2dPBLLWq5gXwiqwnJ5uB3",
  "key6": "2QJPVuBL6P5pbWphuTYQtYfZ5ixJpMkpS3gHF9y1KCm3TAG2dHDgQody1x1p8QwE1r2447Cvg1PU8FTij8UxPtRW",
  "key7": "Q5hKoemNs6sfLnhbfsg5ng1rCiUKpAWCYMXqb9Rwfwhv7UmjJXKU6ac37dtGsAt9pZrkkiuJhAikPDMQDef5Ubi",
  "key8": "3FT7o1VVXRMxCApGGKXd17WBYogMNZ9GBmsRcunUmJcniEMd8TiPAAKBgkswnJ4zeoKSNesMtjVWR2z4gScL8s1n",
  "key9": "2uJro9Hgj8jJ5taGaRVP2YVEmzoTfcmZoK1xiuqRr8vvuvyPJZAFxUSzVE3YKuetFMpaMeu9DSqiKm3tV4RVuvZ4",
  "key10": "5jXgSCQb111CBXZ7rW4ZiGsSdgL8n34XaiCT6oH1iNicy6mZjLU2LJ17mFHRyVtaqRhHvjqnrMH93NQyAjtUBra6",
  "key11": "TkNrr21BSYoKL8Xc4foGsJp53eX3GDCnUF8GNeb9tERdw7tpPv4fp152Lg8jwWS7sb5BEvicsniEVyXGXV37GXA",
  "key12": "5ZMxe5hypzarMy9jaf1z2LW4YFsjQPWootms6fuVz761Acy4snZngkqxJsyw57H1X9MuYGB8GXoHTNRBXD6zQ98b",
  "key13": "5WEyoed278wUnEfUdS1Po2ume8F3qmHucde2bktoon3pWx83rhBuVRRUVxHwvCy9GXMLmw3WThcymwH4bgvGpzp9",
  "key14": "2S8hhGYi6m4xHLhNhAxFPCxocv9d9R9Lqvm3QNRh47tBFvUSrHunnzPuQKZNTH1V1xbYRhNhj86Tr8fjPsA7gWTj",
  "key15": "5917zkNjMPsK1QDH1U9Uvkk6RQ8jVfG4hBnCeXXKd6oBEgwaZRrEmRgkRbHQ9MBxZ7tzPxsotbevQWAWEqtofrW1",
  "key16": "3FK8oyzqtD6gkeWm54Vou1r3eHbAvMu2qdxzsA9LsXngY8MXraxWtN7cRjfFRGWeMB8qCKFALKL521mP25tjQdnx",
  "key17": "4fDB6SzK64FcoWQyXWQVnBuhw3dZShZ39jYwb8BRpGxSUXEzQJ1T8jtv1bQy3AsLCQYC8Cn7QYiSCCqpUwsiySXN",
  "key18": "5fEBwqApaHMLETsvqmeaC6zidnWk83Qjdo4CR1CXC2KwYoZYuitixUEgX3wtUJaNxL7dWcxW3ftdH896LXTMaS3J",
  "key19": "2nC2kGwquV9iBqrbz5GEsiJj3pBbyQiqtuNwX3TBfRUjKaQjAQHMcy4Z83Bo2V16AkvjaJDYPsRg2WGnKW5DsXgN",
  "key20": "2NSCH5Ltq1FPRqsVRDyb6Dty4cmrH9oEJudzSKHmK1aAPDxtpKpH2ENdEXURWRfYUhENBeiUmZc6E8SXkNN26QPs",
  "key21": "38BYZ42B5mhUMaWT8PPhexRyr4aDY5ob1xLZQzjBZtPh8SyGAhRX2nvmoGs2BfiRfvKXfkaH3LJrFkxP5MghD9cw",
  "key22": "2h3jGKkjCeiFxXMNEF8nVLFRgr6BwJG85PwLXwXmuTAtn7FfnQy2fkZ9tCm1bEuUd5VmgJsSsoQEJQzQ99uN5cJP",
  "key23": "4ap3p8KEKfTt4Mk4psfbSi1CyiLCcxRwbkkWN3dcdYcU2Q2t5PcHj9A3aaY56CzDtx8o9g58yAgd1mgh9Jcxt8Hi",
  "key24": "2JkqWYS8ZMoDend4uygGBA9345hT4oPmTPvL5pbPqntw2dYd1fEKU3Ntm2ybzttNr3GAGQh2VAwoixAbhdqETTuf",
  "key25": "2MopfJznXkvFFCz4YmqXCFpbgDTcNfAkAvHjA8X4xP7UKp3Qgq7wyyWFPdZLuqbWD7x5sPLgtpi6zpbBNtsK4Wru",
  "key26": "zSTiTb6fqdvUehSd3aRJEuaVBqUh51gKNZAtuiTjLx8Pag3NRfgkJoJwAgZV9FZNDCrK6Dvw4YSy9fK4WrN63FL",
  "key27": "37A7thDgPm3XukkJbX2JEgnVhBwCDEAamBhjNZX8RVxfMJzAfivRe7FjTp9sNxfkmR3xZzqgkJ4wpeBgTfBHxaEY",
  "key28": "3MdSwdywV7eK4SNNvk8f5fjroiTWxwEXs5UQ1UX8bjVCmnmJEfws6x8RVt9RBxGedmhs6P5KvU3eVN8LtHAozpxC",
  "key29": "2Z83Nxdhzw21J8hqsCGYydvznAr3shUpzeAGTjv1nScramGSAn26xW9JE5vonN48Yv2KcxtpY7GyT5CBjJSda9Zj",
  "key30": "5AyNSNz34qdk4L7GmDVfRKpCCrGT1qYKi1BFrcEXB5qjFisV3yK4i2oJNk38GwL9i5Q7mWponxCY9PSCknuLDK1d",
  "key31": "4GvV9E9D2optWEHGfYEvzcu9nikgNbusF2p2WJC38wYbwvDm4mfW8t9GjaSxnsxRHU9maRTvxHAssxdDqHXVj1XN",
  "key32": "5YanCHu46eEdiMfcJmVPDDbMmYaVyAYr7BJvUVwQcjuYGBZtBoggS1ycL6gC2uMsqmRV9yJqa7hLj4W8bwxKUVGs",
  "key33": "3WnAgWYMe7CnYtPFRLcbFaEiF93hSQFwjRuuen573DnQ2XJPCW1XdLcy9EzafucV7UrNFm2aprnDi2u5nCn9if3S",
  "key34": "qFJiVePebaYTe88FqW4cVmtCeRGKZe2yinL3ZfBPjoYppC3Ur2S8xQTjTZ71hS7mxR7M1ciQjyWMf9vgnTsFd7F"
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
