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
    "3ys1X9NNMggyvEwM8RmFDNtuvz5AebbXr2kdTUmqk9EJRjJkCrxBsUAzpH7T3fdC5h6RDDajf6TD4CBLQKapXQzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J1nX6ytKxvj1XxXecszy4KyjuRdKZXt74EGcXFaWQWre8ubgDU8u1Qq1qZGBuvGsE3pUDAR9kJJkRqq2JQwpX62",
  "key1": "rLgHmfWAF8r2ervYAgZ23thguxEcr6mTD8AFKxNKJ2yAHF7zQhmwwNW6H2FFKEzzWiCeHLZY8fk1WmG2XqhDCmb",
  "key2": "5PjY2Jr85a5cfgKdHvsaTXZUuFcrZgSkrJ8e5YrUnQwweZzExRXRRyoc5aCShEGLtZR7phpqpw1PTdTGsixiyfmZ",
  "key3": "4U8g8zWKuBAYdGBxFCskzA2oUksrZijpCk78U5fYFPNThFSjhBE7ySibKmk3NZzpq3G7qkfvymVitVKHGXxZYSFK",
  "key4": "3MRf6hfiwZgJyEdBDQ3dohpVuUH7XJozVccysMazPvc8NHNygRNxjP5x8ioDuBqgq9qcJBm1PaquGG8NxGcUYXeE",
  "key5": "4DBCNr4RyrSrwzxJhn4PgmRn5cj1nmuaituDaE1qiq3ZYaEWkpyT9zKJnLUQwRhRzgxSuk8Yca2D8uUDiqMuQnKS",
  "key6": "2MKzDioENuZ2kzJmeeNLmSJYLKa9tDmHofoeGCFDv1cgTNSuUMUheQFWx2uhsVVANCinrMch5pcQGu5yWQyG579H",
  "key7": "NZuUUnQzc3wwsuL2Pe8t4mhoUJadq5mieD1VrxbDJU8MPWYWQacq2F8tkfgrxyxPEeNDv8yi2Z8VteQBB3KqoBv",
  "key8": "3ytpZKDwL2k15gaGNuubMMt3f7nyp3WA1zdmX9r1Ez4RQVr9vfZSVcVWc18P2Hjid2Rqp7VfzkrEddNq7xb6ojFX",
  "key9": "5MmnZjUFRxtuthTurK1xeNzprb1xgDRAPkyBbtc2q4h1DwpWYE6cRoSb18gMyn6K1eJBTzcnb6W9umrptp5FeZg2",
  "key10": "52vdpbHkBT4UPcHxtQeT3NEN3dMGTpvEehkiGrPhUp1fX7MPPVQkAJZWj2eQuWRPug1J9gK2WiUDaupNxNtJtQve",
  "key11": "2MgVamgQGNehUrLvwSVTgbniZMZR2q48QXaEtwGqRkpeuhg96ZfiD2AB2ygRG9GxtQVcDfAQdNnZpHmEdXEYKUpg",
  "key12": "4RNj9uy4LNP1Qxmrk4NJJud46WQR9uqThSDikwCrDdvQQsR9qFEpuC5hgJaY688iwcu5DDwgT5UnReBYnURvWj2v",
  "key13": "3GPK7gUUtTgq4681JPmnPUbzJbmKuz68uZUnPJMbsqKzAJk2ucrya9udnCk59vu8eT4re5WVRCcuw4t9txqTQjk6",
  "key14": "4LpMGqmA1yAo6dtrFw9rRYssaJzP7d3XppJSCiCDbCz3R1Be7p1g2zyrTwafpmYgQgtids5bu9n9Ckmmt4pKjCj3",
  "key15": "3Wk8pRMAec3kG49YJQtFjVubhLJYdhAVyVXCF2zGnCJAghWUhTpzBVLbUQ2prKNqZHhRk3EoSeucjUd5t2VJG5wr",
  "key16": "5spD5pP8m4fQYMBgs7bmq9Hesskhz55NDucyn3VXLUdeQ4E2hZkuWrMrffJ1TJ1xtEJkf3KmKZLPRkMLbLt41CEf",
  "key17": "5xthhriEDcGsxNMVAj212x3EGSdgjVveaVSy3G2Pf5fHKdgMX2sF1poZDAfQBDTPPxV1yTC5ZmwBPUMsrZQpzcgU",
  "key18": "3Ly6ZmXJYe9vhyCPWvpG4N6riCw51NkAzbR98MRfcnWBv9R1KFSxWzrQhizUdHtzgg9b51WCqGzuHp1cEfGnxEjo",
  "key19": "4spKw3YHjN2QdjmzWmZzWdRWs9LUdmzQGzUBQSmNBXqnovaHpoEr9an2LNjr6NehFhzoHZgZS5io6FMAnMiGPfRa",
  "key20": "5e4KpoJeJc6W99PsFN5Ue5hCFTJzdzQLu96uwmCdQTY83wP9pHmuRTVpZ4fgHf7rYoSeCJmFX3SxLbBkzUmwkkzV",
  "key21": "4Wmq5ELS3g6JzfttRb8AXL9vDj6a5tLwBmDeUFrYQKYgEvQqgtTpGg59HqMcW5SgAeyZtaY5uKwWvYmkCv89Mkqr",
  "key22": "27SBPY5ohfivfzeDpKWteXka8TdQeka3R3EfXdwFgkfgva3uRR8tdkS65MXV26mVtRxBQ3eM6bPsmtaRHtXrAafz",
  "key23": "ogAzYBbQw5jjnKmpyQCsMpr8FyLWUUav1zwHynM4aNN3uaZi7xhe8QwBkMCzSNd5s5tsQP9U86KtZySpdwho9Fd",
  "key24": "3HvN1A2KTsJTj9xcbztAjMrJh3Lt1rjELhGP2cGg5sRSkCktNcALFQD4QxFCeriKeEm4MhGC2TqMwpWRQuQm4Uah",
  "key25": "2Y4mK8z5MEZRGXkpv4vqimYsC7SeuNtRv5LFry1AQsjQKmNRh3yLCd3GbY5vecuJGi79HLC6oj5SSZ2ikqVyNgzK",
  "key26": "53oPkx2dgD5yeUun2jisHjZDNu9U1dv9JaLU4XVtv9DXW9FfTGo5zXiidjTgtuJHfDmcUEbb6Pz2tLtqfxMsZMa7",
  "key27": "4vZxS15NroWert8ttq7pRFi2sh61K5ESZfsWcAHQibXdX6rgKtEPiJnYTuEPS3Yberv7ruzs3ZhYJtkHpPP4LF6w",
  "key28": "32dy4RReA2mbMQ2gjksczU6SGiDEcaSCMrJpkFTVhBkWsuYjS3Qa65GtZj68reGGCYYYUeTUQZUEJYKkdNaWSn5x"
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
