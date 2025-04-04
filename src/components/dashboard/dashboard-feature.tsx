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
    "2GMy27Tqxe7z7M2iq4Z6PpPQygA7wwjvA6oy7wzJwCYvpc86hkvE7UGLTAk2SPoue8fVnorbsAMzoUnixLibTJL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQwDBpVspLxyas8PS3wEYC5uRH75mAKemM5DwzA9dbnyPSEuahVHHfk5HYhHGSJeus19SLmqm1CyG5X6USUBoC1",
  "key1": "5vc8VFDuxZy1X1GZ5Le5uYVozYpTstDEqJhTkB8eYaKUAsFvUFUZLU1DnoRDNSsGj1wb75PwTa5LeXXQGKqqanNt",
  "key2": "4dwD2xqeCgA2y9VyxspFuE3KZ5aV3f44oueZ5T7T9hqtNTNFN46ddEjpY1HT8oJRifo641THfGqb21UCTbwB76JC",
  "key3": "3jRLfq23oScs2nK34V2NJwaL6woqdEWL4fazCCUMnt2fHBmA8bfSdEXwZEfxT8aNAdX3yyyr7XZtT7FJu3vHSpEN",
  "key4": "3GaHgjVt5qEqJLmvj35ipGcTbaLmg6zwqtvFHcB4NXaknW9mUmnciq86djYkrNkLLBukGZZn3PdM9oWWrEvZw21q",
  "key5": "2pXbQyfa6ioQFa6JEsdXy1YCr8mMuDAHCFw9NZHutp4o68r37EEyAgYeEvqhqBcttvm3fRxgDaJeicdP8ap9uhoL",
  "key6": "4kZ5pMQx38HxtRPHjaf3w5zYs3Pgwn1MBWWmhFaN7VBVKi2Av3F6zfgKSqow81JzB6xfX2uJ3RDctWRQWZQGJZPY",
  "key7": "5RxUeKu4svd9NXs9Fi8UsqYDkRmkfVrCVp4bcvEYU4hEzYhP5RwLUvyd5WysDG3cx6wVQ94R9GVmxQ7Yzu1mw8vG",
  "key8": "3276KynxtDE5kGX1eSRTmHgweDFrt6q7dAuCVBuU9BpxDHkckePdgHBjMAQGKLH7owNmt8i2z3k6VvzJV3kSN51c",
  "key9": "4BmV7He1hwLH1C45ErRvLshxKvwpNEY7YTJ6B5ZhChBciRXKn8CvTvQREAYn8hoyfb1oHRjHgDhR5CduND76VNMn",
  "key10": "277MKBLArNfWzsHtWWzjk1BLkMBJcDuFhndeMbELkztRj1TpYdyWg4qqwVxj98QK61SjAQ1HmkjRHFDKNBEVJUtg",
  "key11": "CipCXfYScrD5vbfqZr37cU3fHhPYmXA1z6QeKekYFyQesws2MtjY6At2B76eZCBFURSgzCAtPSjofnaizJ3jQQ3",
  "key12": "4enBfNstJbGnnhmAts7nnZoCL9cHCQK12DxvC9VhjM1uEFBwgdDVhm8d9cYzpZTJRCaq9TxZveS5yzwE3CbFVkFi",
  "key13": "5T2cxiaXoCRtT12oxoUerbN3B6EDJtd2HpRuEn4CTTBeYPvMuqjUPjdNMoef2yDiVwyujPRQKU17RXwWqatuf8Ng",
  "key14": "4Mx55pnTCR9ZKjdTXTk5RDZDerRRreriggkEhHsTXRNG3PomtnG3WGR6CxH4CFbPLwH7jXt44rTUAQwYn6aMZGMB",
  "key15": "5B4MHUYMkXxGiiJ1vUJczYTBS8aHvMnnthepVYjWfzECXCt9hJffwSuLhJtqyFNzsKzHCRcGantyPSWYaREHv4j6",
  "key16": "4gm2mcNNupeFVugudCU9M5XbihZjKAt2ujyTVvYam1axPSefxw7XUHieQad8gCQ7WL9pp4NTw8VSb5NdM3iCsHzZ",
  "key17": "m1iRuPayJL86ePnNzB77QrQ9kwj9L5GFEcgZm6CFQVgcbwqCx4bv3h2PBNkVfYcKPgzpzgBp6taxK1Wa7AKUzgy",
  "key18": "5HpoiKqpXQbMHDJAoSSAnQ3YhjRbHzyonsDY6rRKCD3B6763R3Wv25pb2UkPhnh3o3sWsKa9a5SpTYrnk2Dh8GXV",
  "key19": "2FbQWZaexCuMqg5oN3Hc5KrkgqtvxpUHiyUquwKbScJJVxv4Qj2k4PsgLryXZvzt6P6iwhhkj62s7kxgB4BPMFBE",
  "key20": "TbXcTzTt2vNCvnHzmUPUmJQGA4PQhmnFRVQh4jMWbCeEL2BhEFPwQf2a3mXwUhtaXt3W6tmC9nDarAb3vv3wbX5",
  "key21": "fwPp2VmUh4SBEv5vbC6iskKuZwtdjC3qwaeHfvh4HTkYjf43VxYgCDGtyQVnnvd5UPgjZ3reAesaufGnPrVEvxn",
  "key22": "3Mo6yfVQ1Zrnh8p7Fo9r1chpb4F42FMJfJ2DcTwe9e8JN81JroA4THiYj9NSWPs8ApiTfz81hq2VNmADvmvEHDns",
  "key23": "2QbaoouZiMyNn1fhhh77AFB7ZpqrbUThuQwDqvvuyQ668sMH9xXWFcKfK2RAh4nHs5yj8qcZDytBhtHm9Ri9eJGr",
  "key24": "3jZ5J7YJZLEdqeXqqCuVp2b4JnPp8SEDbtpkkwAHkcCMzQvUBKaaqvDoP7nayxXhXYVFSFuUDzsghSy318iMPvMn",
  "key25": "61uWujwr5FHnpvtdzAKWk2iu16i89RJRXh5D64XVq32jqixKGDdCcxDk3QZ5XaYbPhEz18oDzKyDAiCQ3DwjuLwa",
  "key26": "4QQPn9Fzm1c6WNvGpWsTZap5MxoJStYFRPiNLAiipYdAmQwXQL7g6KraK5f39WuEhVWsFA8iRVga4Ua6aEhfWagu",
  "key27": "uq2QpPrsfc5dPyzRPHyHVR9DFDYE3Ddd8XWyotDGHTP4YfLaxUCR2194AEF8Bjvs8P774G4UGUpGXopzKxUF9Af",
  "key28": "3LsLUHShdve5dvifXv395dQwcr5inntuScwrFYabRf1bZn4mRRtWf5EAND6pjpatEN5u8ys7JwE9fK4KmNVhqbMw",
  "key29": "2ZzCFVURurELHVKccG2KkjUnMC4tiedzBRbkT1Xq8y2zqHMXzPjttmdkiAbaBmBxDFKGbnybfuV57bVuWdS3xj2",
  "key30": "2aA45Kdfgg8t91Ver7pKYYrDsz3c81pQbFNwDeSCeBiarpAvupV2eF2Yo5LhVeK8soAZZ1nKZwHqA7EWHhwrJx8q",
  "key31": "5uo98uSnQqfSjFnwhJ77zBQFwieBe4FbxjpC2wRHKqnRYeewWKdujq3umoRcS6nSTfptqqX8YiDytg5L8yYfta5H",
  "key32": "AeZpLPGrKd8w8WhRttYKjUty2o24sv4fbAzekWaQStYjVC1NnDhJmg6n2tGXpgh74wU2MPGUkkDs2UktUoRnQQ6",
  "key33": "4Jw4onNd4r3CUboCgd5mEBpbUv49E22ccn1xvpGeep7gGzfi1DCujkMetMKqNbhvzkhnuLVosk1E7Dx44wN9az9D"
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
