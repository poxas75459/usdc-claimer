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
    "654sdazbjDcdUhBPfqYdkKZZfUUSecoUKyTWjgQTVGZzZLAHPKY8N1t2ZrnVkQaRRjUu8TBqkN5zvrd2HXBPW9iT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztBFzGQxUdwBFEGG61gz2C9FFpFtPopbxTmtq24PaqLeTnLpKWBQdJVzRrZcX3FXNxauvZJiVcBN3C1vKpgLxup",
  "key1": "4u8y3ZKn3cWwVsHtXk5e2ysPBP1GNBqzu3FwpAAHQ7fZEPyRn6uL2YYxwgNCJGpa1XdHsdG8rbyfHwRwyH8jSvUh",
  "key2": "XA9nZgAXVRaEXbadYxyepHeCZySRDrw3niCErG3v9y6jqV7PfVs7ztpLAiRqEe7ew8bCkaENjJtDqt55doGswiL",
  "key3": "5WT3sLmXEiCc2pCDZ3Xkew8vRPmT9kzSMcS8Xg9enHSC7w9XWPBdeMx8CGueDkT9SBapbDosXHR2UWAnxTAoZqKD",
  "key4": "5VRUNp8V7JcPpjPzqUrb6eLo6jNwFq7Y9PVa93gtgTDAcKrJ5TyTtkPewUNFefotxF8HcebdxY3Nmm8XJZZuAY4E",
  "key5": "suFxriJAYZJtRNJJPe2QJZS8GgrAwaeBzgXtMWi2PRrwE3iovJst893AnCs4UVL3Y8u1HhBzSTwWgBMQQPHm9Ba",
  "key6": "4rTP4LS6hj6PEVs6oH4gJXsG5K7tFLh3RtX4LCGxQtctBnXJ7Vm8U3xcxwAebZd8wgzVpkqyagtjF9NJDuaR4ke3",
  "key7": "2gV43eof7TzHEgaysJ4vGZvCs61mewLCMTzvdgm2JtdFBQxWSpmu4CBcUx1Buh4VEg1vz9N399V2L4wMEoWHQaxc",
  "key8": "52oaDeVUwWfKkcWahV5b6doV8Z5wv3QWAyQLkFV854jF31e2c89h5pwmo5mhHzYepxRZJDjNnVu8Lz4WsUAdr36D",
  "key9": "64nmChy8PENMiEuzqkaziEzJTEhMwsjEeDB85jTmUATiiTRt5E9N1XVqZvQcQEoMswDK8xEkCydHbEWbB3enWCDi",
  "key10": "3S2CQJz7h7aqCqNzZHGZ9r5UyeX3ShfH7fGpP2jqJtMs7n2dnf7BJAt4wdp3em2x93byUz1WvcGk8N6LVHqHhxye",
  "key11": "8aGftNehy71UKLZrfRgygBYQzTH5fXMDEdMqh59FBEiRJPeFMPjefkc246LCuTvuSQHECnhhfT3sGp8TfDyqD6n",
  "key12": "UJqsPiRTtsg3Y8NhShhM5JfhibAodoFW5nyzBgxL9fCTEkwrzNzj6VRtGLacdG2vmERTHghHGaDq2jqXoFo9SMm",
  "key13": "5AXxsHzpYCGSHnrYXqau5PpKfF6ejYBhzWvNGYE7v5fq6WwQ42JZXituaCH9ZvPwfnJh775zZBTo5SLrfwNHNqUa",
  "key14": "9CSCqMVaNpmE1Lh1Z3eqN6owuRD2t7L7FJ8vroankmKm5AEJ3JNEy5iTYRGpFdaQSohyDSg8v8GtnM8TXWAPP3s",
  "key15": "vjcz1ZpSZ26SgsP7BgDf2wCqSoKU1VtGcPszFoyHNg9j17BdPVYCBj7XttidTrXi1X7Y6jNQubHxsNJnZWgFrk8",
  "key16": "FLUtBsaJoAKApWLtyfJCtihWkzvFE6r4McSRmrWqhDEtF29sx7gKbeNMiDRLWuHBkh4umjxPGk2xK4tYEPQbCcD",
  "key17": "2M4aB4WmYG1j5Sa2NpqAAXeBxbRYwLLc4brRms9BcHom65ShXSRH9EBTvvqiwx3vHECnrjdCUo2ebExvg4rpkNxX",
  "key18": "2Ab1gPmECNC2eQ4apA1umkvE8K8noy1KVR1GfpsNY7rhiLkwpDiijtV3ths3YQiUVs1oJ161JJfx2nuH1ccD9qwB",
  "key19": "5Mfc6BdHrq8h9v5uwYniAmgxkWzo2QPXr6yCihug7JByQwk8vz8Vr5tU1mYeS6WL6rC6Hwk2YP6V2x8upGjyqsMR",
  "key20": "4EbxajYgkQVJu7Lc7MUDcoFs4cKLfvxDwtMo5XCpAyUy8XS4TJDn9upUU5HjbhyEgWDf7RoERrfXAfi59AMErRRs",
  "key21": "2cT6k2NJQxVqFweDNY72xdAMMmYvFoqXS9mE3PwNK5125wxT7m9gUyAbe7drrr2WbKW5kvfd1aBVEHZErkf2VJpE",
  "key22": "5i1wk6wEDwRDW2A3f7dv4YKiqbimAu2z5Rkvnz4LPR4rKjWYf1m6y8JrkJhGPny6xM9ysFts8ScPc3ij99JrZJJt",
  "key23": "5kJjsnYnmXc8DacBDS5ZL4R1y6qC2dR7jRWuKTeRJpFay9nDcw6Ez8h6honmC4KYcB3AT7btifiuDqXJBwuJthsB",
  "key24": "452JK4i6gAAg8PH4FafGanbmo37vwvVGTHD3MrSCP7vLPfy6k5bhjtiNFPhBXfHMDSUoCMj4RXyVkVNQpCGegm15",
  "key25": "5t5SQ4xmoWVvC31NthjtLx1GFkN57T7Joy28rR1Caweuaj4U8pW2MG7RrSFezxwqN9nb2h6fQjQ8v5jXghG57niQ",
  "key26": "1ojtYMGtdbL4hZmq6EvcSrPfDtVFrv3yWKmvRRP4fhLRqA2VniyB3VfVhC4Fe3Z7MetJHMFyKxZmpt4JE68CUWo",
  "key27": "3DacnifKmu2NAjVJPHtwrYLeR8xxzXJExfMzK8AWo9NevjGGfBZM7jkXbfd3Saxb2vssE5zXtTFTDFcdXayNyGF7"
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
