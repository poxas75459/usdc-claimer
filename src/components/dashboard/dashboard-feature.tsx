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
    "2uCJKgZcT57ygvVCubq8AXYe4Ex2ZuoDLRqoAhL4uWTeNjgn9tY9tz7chE4ToCNn9jnG15n6xQ73awhcCmbGd3xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umtf6xneSpFZJFU1i2a8HzxLAjfHyY1Uy8M6EJBesMqbYSLi6LKoxAHhYnUFf1EqbXT3uAYR755gEQaJg5Gsags",
  "key1": "8jaP7ZvAHZcb7tTEHaX2a2jhUd7LUhTmfFvg23KSni5vjtrSo5aeRh4PFQKrQAxY7MLWCdGXDNgkNELj6ZKP1wn",
  "key2": "42wfCVFhpxZLuDSkjEfFGTDWmrAz2nYmKw3EWd9T8S5RXB8A8qhAN2ebYnjCMpi3rErSCcS7norm8Sc94VXo1HWa",
  "key3": "4FNBMKXBi6t4dwPLbMDR6p45swNFbBfaML92CPNfVFoZQeXTR94NytLhTkYjEUqGsuf4N6mVQufU4GkoWRjA7WpK",
  "key4": "4SdhmwmCywcvgtjjWmEwJm8fVF7vKGfWm9H97egzv2t25majDN9rMHt4Vh5eyDE7gwUfiec7FbXQT5dndeBAWw6n",
  "key5": "2KgGpxH1vqrUwZrcw3UuupVk2wA1bjL5UNbF8rt2o1R75yPcZSE3R9svjcVjoHjLAaWgv9hApKhm7UCY1CyfPdcA",
  "key6": "2bCsmGi84hyKgahrvuwKEmXDXRn5ZM8ghr65ttNHhCMfVfDadDHLsexhgXQEJTDrGov532g1KWGWhgTmoXcZrkww",
  "key7": "2vHr3puk7RLZWShgkydsiQ8zfx5rNyc3JNme6Qxu86UrhdksMPLm34835p2bi42ZjBf52E9GftVXvNruN5U4x6tN",
  "key8": "4DstCTVo8xUFVh3PkLL6kLQt8US1ypU3nhpvAr1zYLeZUa3RvaRDRtAnxyCeYLYmvC9iPjhqENVWhN6oSa3cbJH3",
  "key9": "5QX5a9YzGWrEYcVUJJYersf7WL5LYCJd28w5JzP78ST5LgGWkLWRXtG9r9uxpyBJjgc26L5b8J5DYJA4xX43Y2Xa",
  "key10": "5RJfdVsmvDai2y4VPA8D5eCNNQspwYKp31x563sNfu9XkMfo8cXbRL1Wo3YvMaFpbo1JZbzApzakhNAwHpggzzAg",
  "key11": "eZKEiBJXuerMmbja9uhHegZWKo6uxqfghLqwhhK3VSgDAyYFSpKHRPECc3cBwD7i1c3ds9FmKWHToRuNsFHPd5r",
  "key12": "5vyamp6iUYRr1Zd54J79YASNqM28Z44f4rTVcWPcH8d2jdea26r2paMTwynxr61zZNjMnCL8So7nhF1bRz4CWGg3",
  "key13": "i3UCwYkKfFFk2YgVbk8Z3uQkgnazdHacWeDR9hkjaYTzdeq3jgvn4M67sBN54puQ8W7fK5XxgZ2W1oftJjwhsNG",
  "key14": "2ULHpFTh3KddvK34WkJRGdYUyU6ZsahfbtfZADBg5XGqTNmwAMM5Q7rTTKf3bwHjC6q7qU7piMXv3jQAwzYme5Cr",
  "key15": "5JViT1WwRjQBAgUru9px1UuUiRgnWdmcFySEeP4HLZoYRWiVXhHhRVBC5J49UFdqjZAf5xKVDTfdbWLnP7DUiqkF",
  "key16": "34nuWet5D8SRqdqrpB2bHESMxqe7TVodhhuuTVWgVAAVyeiPv18ch1wFbJdGrGg5v7VyiKNDaXc11Sd4svjkRNv5",
  "key17": "4CVD3qMJPqvqtSqyqosGwfzgomDR6YQSFZw3nekVpqF1nC9sy9UaEAL6NT2hxbyhVcDBQfkSTNQcPkL6TqcwRwVv",
  "key18": "3yBenUtNBBWW7sPt8VBJHR7vcD1ZaJaego5iidFJ23rmNc9LKerHvsnhJbkqEtPwhxsrmSvHsNUQVR6F2jnDoSb",
  "key19": "3noo9ia7bY55trTnW3ZvJXSaBHEoVUXezoEgp5NNztZbTT5oG5nUj8xN3ptP7W3DZwiANQNYJ8JU5uRLDFLZEnEQ",
  "key20": "2C3DQsKT7RkYm4kn5uyUBqnqgobwkKvKdaB7SaJQ6k42mnsZm5mdLvp3VHnWj11SWfEm7GqUBKDkayxDc1V7mKgP",
  "key21": "3YaD9qqhnFaLWSVoJ4W2ssCh5gTixYtU25sVsH5wkpVpPJf4VxZ33UoB7MBKZuP4SGuqRn33rS62g874jgsPt7wK",
  "key22": "RUt9vJct8KHQqEtu1M5CjRZt2LTipT2QRXuFz9QDCtPPD394SBkh7s3di886xdXDvu5kNRiCRiY7jpJP6feVxBS",
  "key23": "4s1ogYspeNJHJnPqowL1g7RqqgtLoR2cZrHkyas7Z56iQf6xwwj4tzkRuEXdAUJTNvUmYiJ7p7PViAWwTJQCM8mx",
  "key24": "2uzdUBYkQrDqVF18PJrsNY6kgBVbSdzz84KiykpQRyktD3pp1SSt6D3ShQFdCbY5VVu8L8J34AgrTfym9XumMLkg",
  "key25": "3oyuvJi5UqU98jr7YTAAM1SwjffrSHsVuJtKfTw7RHccYwRTD2FwrS9FwDae3o6bXgPReTHzqDifqCovBzNZWb5z",
  "key26": "3uwKXzhsr1iFjp1yFM9HfVsBqzX542XvDMj2d9Avo32xnWzCatFRvbfuCK1SorUDP49sA6TXSdCbBHau1mkYySt5",
  "key27": "3HdYHKuNBxub3R33vkUuLTT9UqE9D2uWxfdBZq15bCNWiEDEGKZexGJog6KhSVZ7CUenR33E8YcDeCXJwy5AbZTG",
  "key28": "3xXxLXbTMYvQRerf6iXC7mYTjzG3pLS7g4nQZtG9SsbQVjnLXtvgZ4eRC4ddy8x4n2x5bgg9ErH3y878ZbPwfUtP",
  "key29": "5DqLEKRbB4D7w7jyHCuDjdtrDLZFbEbz8KvK9S3v5Q5w9cppf5pq3XFDBkfcTuohtoVfH9u5wz15CxeEpMsv5Vgz",
  "key30": "53fv4ywcHsrRbKjJkeG2yndKaW4GqFtFjJHj5i4nWhYBMJHWwUPtTWy3gd8NjCiV4v59fjJsVd4dNSDA8TpCVoTp",
  "key31": "5vjW3W7ET67A1JKvtr7u6wa8LHhrzU14xaSLtqcjSAZC7Vgw6McQu2rkF8CbJ56uNurKQfNNotAHMaHcQQXqpTuW"
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
