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
    "46AoRifvqrHbjUxYLKcab4TxF1VoqVj3YSqUAHNEJWhTDrgxFWjmZcRH9Zh8XUeACx8PJqmgPwxxQUS64kSF7XUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwPeYx3KgihrainLeYz1uwRgVKELV3gfbGUYupYM2QGfxcmLrQUQPcfPddyhzaXJX39mxgxD8hPtBzR4xP4bPUy",
  "key1": "5z1i92cLekxkZB4jrrwgwURS247ZqNi8qyWUjR2c7JuajnuSbcDusPmqQ3s3ZWPcLdJhCFNHuWkR92cZ9fiaKzyr",
  "key2": "3VkQvGEW5arPdKWNmgyQwiyhjT9W6M7FfNrRwf6Gc5ET9U1wXsXqTzRTT7urSKu7HcXV3ro7Y8fk4iacH1MjgbVK",
  "key3": "hJL6rvFCY4wJPKqLQnyjJM9K1rBdWoytn1tZWLubFkbmqfydBNfGySexKZAK4eiK8kY6qz5MSDjzTxbAubkXnUh",
  "key4": "61gULBxbZJr1sA6Txg7h3pE2XKdEdYoPmvb42dtqHKGecZGEqHDXvJm2ay6B6ZqhvvTPSy9BT2QLyQV43VYAZXHS",
  "key5": "2bQ6uBvKeqtMgydPt6FD8VjczPzgv8wfqjc3vxKdt7ooGutiER7Hi5gRAyahAfDCXJYkoi6eg22RZUXdDtvLan5X",
  "key6": "337FRgwhQE1x99aXafs9TQBYGHb1DC9qaoXZvpQTuzwTpC8yP1uuPtBB7pTKFGGFmMuDPqkAutn8iLae6S2zxeZu",
  "key7": "z7APSUtoJ5xYmTSLkZTFwoKmZMoDDFWtP9xNfiUxE7SyFDC3yNPr1p4NcQ4tydGq5yPxvJ9yuK8J5qkdenXYZcc",
  "key8": "4k2ZdQNKzHBhc85ePVb36Xn99PvxAvbXvvSXThfQ2qAEwNT6D6eHpGrsvY42XA8hn6tgRQ7PmivTahM49Uczrx35",
  "key9": "2Z6KyAERApEheLZutQcyPBWCWeu1fFLzXHRoAhmZR4fYS2mHyS34r864FyBoHX77GdJcF49K3MQSMt6DdLGrVmnn",
  "key10": "2TzXahroP9raU3hPe3wz2sZ589jMKYWqeag1WkKX1mXhjSLsfbfSS2m1emcY9RhhTbmR2JxEDzCrKYhm4gfM5Qvi",
  "key11": "2WCBXckPAp2FqT4LGmEU32FSn9VGDNiVD4MafJzi8W7seLAgSRUKQwqCt4k1U7P5oW3mWXpkUWCJxJaUvFD34Fjb",
  "key12": "2TcQ939Jhn8RKt5jj3mv89iMLGuDKRQWcRTdzWhcfCbkYkkr2fWqQZTCHZrnpkK2QM4GovYawDPxH3e3b6qu5mpe",
  "key13": "5FoPEGJ36Lv86YBiF2Syra68KYbekoNBZYa3F5xm1RGyjcu9B5gnTr7Xm7xf1FxzEzkXMkWkaKGkiQmGfyEUwoMt",
  "key14": "3hmzYwASYqLZ6x1gCsGrEGHMT2VbAmjhMTph4We5RkvNemWD388oqXmQuPMEDXDpqHGiMGM2ga9hz8QDMWxqwEm3",
  "key15": "46TQ5aTrciFwYjD48EEvNRqgmvhz7p1P8w1hBuis7Ufdb7EPLauFQa8tMBh2AsrPkXYDs7f7UdAUwx4j6ND8rULB",
  "key16": "2VyTMBQEPzJchzsz9bjv5Svef4FDwNPZEmH8JC7Cb6yvYicLGFDKz4Yq5jdJCHC5a9Cpp2o4JSi9eABUzQQTDHLj",
  "key17": "2bLCeTqzbHmWxNseCc1dsCqgYA7DHn1W7KJMr5Aq2rAi5JguYMJBeZTXn967Nx2H7WjV25zSsLBBGUEY6Tjd5sJF",
  "key18": "5QsA2QiLmy2TxiVCUUZMmEnh3kTyKLUkVvMD8z2NWpXaP4Sy4PfTPMubeaJxYcXxTnxmWzqpCyXQPmmJuSbpdLaM",
  "key19": "4owjCWC5xy8ae1P41bKBMpPCMnV7aMzLPAfgmcDcXaFBphJPN46DX2TaoDn7j1svadq3jdNnerzFrxS9dYM39vQX",
  "key20": "3VPczahunhhzXuyPexe7HxYMHdmgqTutNnX5msDiMU9ZDT65abV3DVsjFPGjhQ8AUWNvHGEUQ3ZSTwcRpP2UnqC3",
  "key21": "4hAZ7Y75aP4iWGaq5hvYCAWJ4CdV9MjBBfu1Fwxy4jKV8VapvVh66sR5EPgDMvYaBWbmMpnWFv99SyM9yxKNaZRu",
  "key22": "2uX2jnGbikhRq4RL9cSH9Mu1pke9qU4cQqfwbyHAzSjDrMVpAwTa7rsn5JQyqJ6VWkxB4dpAMUi5oJ1pJV1Jw3r6",
  "key23": "w3cqWpzmh6CqDKMKJqQrFuUv265ihDHkRNe9GRrdK5jckqNKEtWNmguU9RfZfPG3HWpKkKRczDt6TQzhzSrQ375",
  "key24": "4Na7bRBQbAPChwnBSNVbXtJba7ndFL6vevWRX5FfMdi6pCXWh3SEJ1cqkv5JDjPCq5aBD7WrJ5CULt2hYBbDGT9b",
  "key25": "4upy3bvVZSFui3u1Xb1Q6vquEDNd6varrsvMJNsjK1em3n82F2ZCvCKvMnazAgYZjwizc1GcLL8aJ33KXSQESMS6"
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
