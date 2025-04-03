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
    "33kcL8hnGtR9uRk4dKCF7RpJFfxJdmiGFeiScNVmiBeqWt3FyntpPmpuPF9VFmKsGg6U4WvBU9KUhpmEgoPkSemr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEAqQRzqSqrqCX1hygipJH9CgnsNAKgNMV2mH56D7BiaJh2eaqykjemUNFAp2hB9aeY8rgHd17kR5nTTDdbDzkJ",
  "key1": "3rkkjkGJLwAEz5DMPiyQQckJcxv4M7GM2KVSsV9iM5L316EHvsJizJVdjmPTuETfwNMmwPJGm7PHX8KRKcKoueP9",
  "key2": "5L6yMEcbGbU1Qykm9GUJ1meHzWbECz9zRdawdKJh96yg6Tiknp4uDp5t1QArNMqJumNnyUFfmpt1A1SBhq1oJhXi",
  "key3": "3WpTCWDTxN2bVR11V9AiktS2K6MN8K7dViiQ6BFA7aYykCvYEFbW3BjsZqsS4gKtxLmUpzPdgWppZi6jAygLCXxt",
  "key4": "5tKbb22zuvhJC3AaVqDPUugSUjJ1qGA3j6ST7fhnB3X12tTiNfLS1HL2GycUWPdZTYZAWxwmuxyVReH7FpphVn3f",
  "key5": "zdKLJsQwvMxHCoPPo8vVTTnEYMRP1m4PuQjTxnqE7L9YauwjictDKjQ2sbqzj46brvpzTEjYYC8JWJdT9YKGvuj",
  "key6": "Pjzb7xjMt7MjsFiE7M6cx2GLj4M8d5gH2BuYrqurWJbmuJdnw3qYBFknCsxdnRELFX9dihfrA6DvmTTEzTPyctn",
  "key7": "677xU7oZuUewiD2yGSoxY7Jys7d8thqhw2WR8NcyZE59RBAGyvNzES4g12vaGVg8SGw13Rr2SYtpnQJwjozKRmEa",
  "key8": "3VDKeh1vxnBudLMD84esekeoz4HB4B27dhFZK61EKFiRr2rgSq2FgpGv7s3WfAXBRenHAK5nF5B46AcNqs5JkFmU",
  "key9": "X3PTZvD6t6PFkUqkh1RQBF7jUVjg9t5Da1c3ZYb7KLgNLwa5z5FTmuEAChgz9PWsW6Vqvhomj92P9hrGphR7Rhc",
  "key10": "4TjM8mvSCtZxoe3NAqswXU8kx9xMMvfeQJ43QYJWRjoZxJFdLTxKHYdnnweSd55gAfQFzgD6gbzbhTGpGhLqFd4Z",
  "key11": "4NxcHQXLffr5aUqhzk83p3Ta7jBXnayehRwyutr9ExC3mUB14kRBcaSkhQej2mmrEc2jjSwMaQVtwPpbxzqRZCfh",
  "key12": "WsPdoQR1vk5zg3aKTZyWW1q3XEPZeTJjSpfQGjL4Mqp3jgDskyFk4DhhTMq7YB24ixi3nz8xSAzQKv3WHDMushP",
  "key13": "3ZZjW5E4eMT3tUEimSymAGZcT5GYXJaQM78iYTXWSX8hAdGPpzpyeTECeMxHFqg8yCfU6QXyPMKM3M4xm6Lv8U9v",
  "key14": "2ZtjWE11e7Y2fetbxmQUaUdJCsYKh46V5h2GyXwUawvuXc2rjYU2uVFdkg4ZfL3yEUv94677StLmvYAgmAGQCnem",
  "key15": "3gnbSYfnC7omnckg9sFPAJedsYtVvQhetBPn6pWPdmc9E338hqPDY6RCEkYxeULp2gB1qAXc2ESTwQcpH7jd9FmA",
  "key16": "4KuDqjd3fnGnErjxH8Eggt4657yhDmaWT6X1Uug7VfJ4DidCpYSZ8F1qVVFDTZRCUV8skMTdMSbT4pu8RzqckYgU",
  "key17": "G43PNMCHfYyt7tSuuxUSsRBfdiTLMxaF7xYdkjzJ9E7hSppwCjRFnHTYptMb5VoxF8birNErBTBxhLbEeBp2Xx8",
  "key18": "3Zq1qYbiLhaX7JhwV2V5duHanvHzhP3kx7mh2zJZCvgrUx76zcXd64ueYeYWrXUh55QLM7eDTDC9hV4xfDYE8KXp",
  "key19": "5Q61n6GNfxY2Q9je5VncYeSeVodFDxyEtHYVwHgffDRyjzzesppCNatgFuChJCrAnFTYALgMqR776DU1ixsgsj52",
  "key20": "5ct2ZuJtijL3sA7DnGJUzsg3ZfE914YLufjjWaoEUdwvRZTVSmbAD85UKb3j3NLXKb7nDgbgbh4JvzHZt3zoS6kr",
  "key21": "3FUb2SBcA3gRMjHc39H7zM9n7tXFWgusETMfMYU23skQcmRujrSsJYxePGk9bvziZ7GQsFnJNhEK7p6CN5mVYuNQ",
  "key22": "2CTBhRBjZa2DiAaHXXGCc7zUz56PwYU6FYRG6KT5YgdPjTNE1oDzZAYUgtwLv4RFdMVLUyj9HUJAmKjQVZq3uKwz",
  "key23": "5ECBSDqhFLKCkA4r4c4AbKnFn8KQ6FGW2dyWLR6XsCgJkvgXUxxaQcZF2v26t12MeumbLEx7Suj4gJdSjSVUaeVF",
  "key24": "4pkYLk7ccbr6bSLjdrddWhaAt5xw5ASmVo59mNTZJ17vmh9Nqf5E9kLTcqgjaYT3BJpno8vK2UY9NGYi5PefGc3K",
  "key25": "3mXtzc7cmUL7UzXzR3ra7mrhxBq4wQQCfJWcXUen9xNb6SxRuUTxw4xzbXUTE4ceVEpbMejxmiWkdPNfu6FrNKHh",
  "key26": "3PkMS5DEz9NGJSZU3PPnXmFkm1FWLAcmGbJaaTt2JXGMSSDhto58o6mVY4HuHH4nFyLpwcvPZgr9e9LQehd4a4Dw",
  "key27": "5S7A1ERGyd6wnmSj6BNFZStN83JNUS2JwdEZicVJRFWP48fPrNwx7MsXof29H17HjGpYdrkz2Hh1YjomVKWwrpig",
  "key28": "4qb9M2uAP3ehS5QkGabWTQTyCVbDVR21kLPPQyi58pWtXfafD8bTuQUjzxu7y7uwute5HXKGXvadwSQLnMXJFqc5",
  "key29": "2s4u6XU84bQce5VCrrotHLd7sBAoBZCkUMVVP24QN3YJoU7E92vf88k9e8EomqkTayAHSrmsgvfsHfNt2qZTegcm"
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
