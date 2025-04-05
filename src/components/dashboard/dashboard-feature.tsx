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
    "5Z6MQFySzrze4da14bXg4qLm1uD4hU2YWyyniZzKHSU8WAaj5H3LDHpAWGsn28pfYRSs4n78SKLrSxcnMcbhVnsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kVj9AZiHCyvPGXwqn5AcYkLg92wzqujjWeRwZG66H1dYHNhvwxM91V4mRX1TZWWjnr8Vy65YAtwz9T9yBXwCSxK",
  "key1": "R2mtCDwAiB2y9NW84yKEJ3S4wKKCMUKtuCShkgor3mv92zn4DtS8VqycumhL3KDPPx6Z2bv111Bg4Jwy9mn1dNf",
  "key2": "2jYTtpSnyTvXAXgWk4axjjwk1CavaMb3o4k4noNYxJUxamB6wa5tGazioW2MFpVNCkEQuuPxVZpZi6BXuEpqL9eq",
  "key3": "2kzKEdDC37Eozo4tYa3ne9gJmKpJrRnqN8PBsUYjMHeZ7ySqqgnmScjmJesKoorVEYtvgGnpfxQDjNsZnJMLP8tX",
  "key4": "3NrftgxC3JJoNn9dK8Lhd81x8dYfq7caW3KMd5ifopZ9b9r13PKvMJGBmvqmZK9MdY89d2fCj7TB3YFFUPEEP6rg",
  "key5": "2HfA9m2wqFtZgBaQeE4NwQbURgzYBv7fx9tN2rzQpSJR5JHGXarukmtxPo3MSNacEGVthNwAFRt35ViHRmHXK4xR",
  "key6": "5LFuP4L1R6EzJKPJBfp5jBSedE3qpUa86yQDVU3RyJraDvRFs9cnesAkRhSJYL2PxuRBQmkYcpH41Y3qRzZbB4R7",
  "key7": "4WtCTjep2yHnyL7omxQVzkcv4m6XsGoygUFYoEUhnj5DpUXTQQ1Kd5A91C7nidXBQVsGxckjEncM4AGFJwcdFWiL",
  "key8": "3jX1P7Rjx2y4htWrDVi21UcHitgTziFGbcnbRerAJuFUEKcEyJf3kWjFAX5QeiLXa57CcYDjPZ5D5yUoN8koZaRV",
  "key9": "54EQoD8YWja4Qq7zSRh3Hs8KWTTjbkUVAvRm387ygAAox37EqApxE1Q9mEijkPoctfUPLGawPtBxL3Rdu95qvPTe",
  "key10": "Mm4B5sSJ3KnQJzQvqTpTUECDYkCSxqeJpDpcpzEJbHozzskApP6PgdUNP2PhqUZUFQqfD6nfdLYor1xqZARohLt",
  "key11": "4WqwmvV1ZWfKWqPJ6UAJYPKc43H55LzHkX1vEbtzemEjrM7tmgEwdCWhvCuPPqh7b9kJwR2xLaSLf9YEKELfU3Vq",
  "key12": "576pGi5R8PGfmTYyDdfXwymhY63tzdbYXBNx5NSVukWGqgSxnwGRUaWGhwxsvyRUS5XHyiwfua1ZCsWfZcYXvZ4n",
  "key13": "5s7y9REMjv8mHBDaWjSQqdsbKr2iLFdSVHuidmrAb99mubGEsAKSDtzrW758MXtUm4SqhVn8UT3t4uD694bxkYqx",
  "key14": "4KmiWX58LwKAw6jcx2YpBPpZQ7isF3KiSezRmcN7QL7JjgGu2Ar24b561MEbejFtqYb9wHfgmvthz2Tr41JrhBw1",
  "key15": "4nivmHDdpGojAw9PPAGyPMmMbKNnJiDPfXf5Mc84XxnajCLLDZBEkiV1oEj8ZfFt7zy1Qa1gnGK5R5HGCHGACfNA",
  "key16": "2XRzohLtrkWZbVCug7hjDNwLM9ASoVtSNg5JCyeTCepqZRFmXJLwBzhj7pSiCw753UHjU9MVmxkw6JxL6312XvkD",
  "key17": "428ntb2MW7L4x3Ldz7R11JjSTfFbEvrTyTZG7wFUm8BeWfLU7Vy47CfXMTzSo343nGiLQqE27Dswww4cp3eTJaig",
  "key18": "ujPtTmboiMR6bJRLPiYkZQPgRFqaDzkNSFMQsdpStm8HActc5kvENm6su9vNPTD2dGgvPYHWBaZkUC49UVhmWHt",
  "key19": "5ZK5VqQUu2yEwi8aVzt13j4fK8oTX33hgoagBLxSGz9xNBD7kCzMJPEy9vFK3AE25FY2rAUKWNMvwc8Nx7hJXpMr",
  "key20": "3kMiULKEkAqrivoZt8Ceizsg5AeoonWqd5CQjPXPovSHtvEGpZW87RwRqB7XrBe8x5hr1WTPkoyWyQ6e1gBqPajn",
  "key21": "3uaZUT3UkWre1TaJ15py1pyJfF22eCnStB8YjqneL5WPRY7jhFHEKDFzqDNqJARPGANvyuo8uZWp3XKbqzRCSNqf",
  "key22": "4CuHkJdiMomJRCKfy6VgqoFTQtPsPVG93kXQdJWsXtoKy491y4g1QyTPfVrY6r2vhHZJvq5Jzc9QwUMiuCuqMv1i",
  "key23": "4mvRpBewvhqiyMqB41A1TRimAeV9Ud8qKLJPeG75JepSjFgNN8JhSzkAFVkwHy21TZSuEN7qcW4ABvVEbww4486R",
  "key24": "Y85HU5nFGtGaeSrghx3vksnn6mhwmFTNzugSYRP58qfyQD2WdY7gqak1hDukjyD62GBYB7TkZxLuMcPn5aCyKgr",
  "key25": "3C85NipgrxwZCAET19GzMXPHNSQmexgft6nr7GNEHTyDPQScJ26oM9ZmCBzxFsHFYuCHxYrmznnwcrASKdx8y77f",
  "key26": "328uqvF4XDRQpwNj78sXM3gJosaYge4tVWfTGZPKge3rpyiJvmf5EdonQfu8Hn3BgSfEW4R7b1XTqHWQk8LNn2NN",
  "key27": "63XBAQpqB9tc9mXFSeoN8WR4bvPE7LmiBUaugrBEy6kJ6Qa2RBNB9KtwwYjwfDvUgg9hh3TGqaLQmmLhRLsKHGFE",
  "key28": "4UKrNkANXeE8hacrtEFdb6nx8sqMGki9cPzFKrPjKQdh8XMeppfyNtLQUD7JbyJYG2C6TNF2TgfG6BZwjbkEApTs",
  "key29": "5tS2YvNawetXomkQmzhtfvZMenY4LXZenVriwgjRWcXqwvw8EqD1HAx5N7bzXfGkRyfFxK93aZ7Dh3c2WKikKhn"
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
