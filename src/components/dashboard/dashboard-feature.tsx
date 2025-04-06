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
    "3CNwPyBP1ydkVpCdb9tEnCc1U5GcNDXgxvXJmrkbJEyCWC5c8jh9nttbJomC9BnYkqWK91M4Pry2gpj3Bu6h1HBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bBEDUUCNoBNWwM5v9KWdkZj1GvoRwrQhqQzWutBtKqUSd7he5M3AwULqUNNWkM3Zyey2cqBCcm9bqMbCLgJf34",
  "key1": "3YgawztfLZnat9sstq3CCgmjfB8eivqyLjMvvB2FUF5pvweGPXyv5REtV9PBQzoDQAKZLPTx2gXEaUjJcebfpRAA",
  "key2": "4mWoydu8Urgoy1Vc22Qu2Eor4ZHamF4nRquwRZ3map1e6JWoSQDJzGzC4fPitvrZNpk3Q5THKbAeh8jN7vYeMTve",
  "key3": "4vx1pLj7ow795WPZpVFG7JmrHNE7LyMz8LaCUEr58gQeuaqWDiudhdmHHdxz4xxt7DtbDdfjrUoXxWYWpWMennwS",
  "key4": "5hSK2T1at273VfhEvFgj6g4jobmY1wm1khNQQK4J7grLXKegJAhW4awNCamCfRVt6GDoNMqEmfBA4LpCxHreb8ao",
  "key5": "4pcSgHt728xp5QgEMSV6bY5nbi8woen1t6jEMZxD7o2p5pudSHmy3aXimtZzr7cqLV2eXNnNvoetiM173tpd3w6L",
  "key6": "4jhny7Fi85VjgeTVfZFH1hcuFe8ok8N6uc3tpSyTenmDSxyUiBapxWseraHLir5NSzgRyR85KUveWt7UNKSK87Js",
  "key7": "3tmSdCMZHW3gUggwDzSpHDGWZFvM5rrp3LNPdcFQVudZXfE9fVt3zoGrN5on56c9eSDySit5Lmq4UnXMTb6rQBHH",
  "key8": "4Ds5WT1EkGabVv79dfEcmTpUFemKGdVTcoGiWq6UwEStpUDi6QXyYFuZVbidCmpmayLspqLXC7u51AkzBvkqg289",
  "key9": "Ns3SiWFDfnGdCbDYdN7SFVLoumGwEdTDTJRBGUcjsHtseH3w1rY1eMmbARSywtGhBDcFXJ6fKLWnx2q2Ly3srjZ",
  "key10": "36B9XJLwi73MwXP88BhHCN847mBKKMqqfCchkZ11tqM9Gt5avqz11cn1QBEnqm7oAMWmxu28ytApdbvaXCKDCyf1",
  "key11": "3p237sRN393yiyKhz1BHqSTZHsco3N53vthmAsBxaLWSLQ4xronPqDU6wcqYujFLPayDMSjU6YCpUheNKutvVBJo",
  "key12": "21fF7WKvqicEFqpzjizgD5vQ7RcTBMqEnAmVY3cWaxMPNpXAMtNUume5b7qtjS8ZKJRoCA43pYr2Hwo7jFX5xL2X",
  "key13": "51VP1t1SGesCE5ZThndpAZtx75hobnDBKnFqKwvZGDgoQpJzEgxfH322PPpKajtvSzvjJCsPDBANrk8xFM9vNREg",
  "key14": "2JPWtKcSSKjJxbgmPmiSY4BoBTxn2xpVgNFrSf9n5xxqDz2UXx7e9jNUSqhSD2Yo3Rk8At1cNzmo8z6iyNCAezVN",
  "key15": "4opSj4kQ955tRtHDKhAnRHzEYKmpVzvSJAsecV9uhBWQHqFvAvpT2ctzxTMhMt4MQsvx4kwUwsAEfDaSNjLdoKQQ",
  "key16": "nWDBTeQBQ4ZGkHUETdJNAYkQPiRWmKnHL2e6oRozyuPBC1EM7VCxjXkevkkyhGge6jcKxrrwoo5Y3EHRPJFuicf",
  "key17": "3Ytnbf75U4QYBrT4oixADSh1ahnGyB9Sb1kAbjhvHqFWdJT7jqbmqTnK7wS3Mf5UH3TLaBeqwNbqJ1Ccv1ENDhdr",
  "key18": "2FRSDddzHMcRMT326Tt7ANGdCF2qt1PLZGDucNChp6cErLsUyjJfsXnHz33tdttTz5fjxAPuW3qWGgEg81ypqScV",
  "key19": "2sgPCSzZUWVQmNLYwAijXT4tFxc5GZjZqVXSoD7JvP81bLhJ9Z5WTvKGZ5veMHiU3vJ7x2XXUyCDhHpGMP2fyifV",
  "key20": "fFxerFMzTvRq4EMmeNL1wYB3NzRUxAMVZGEQSfQoC9HqLMSzQ9GNYXjTgWPRunxnxHKShAdh3vWvm2EX4LjASDk",
  "key21": "5M166tvvvds3uMsweq8hS2QXdgHvhYi7mBQMS7xJt3om624jWKQ7vLsKK1zx64WTmeDM2KpWVPVefvedkiWbLUgX",
  "key22": "3Gk7RQYk3PXka6XHQaqbNC8gYUU9Av4bfndMG8yg5QmM9u1K72D1ZCeCXYwKNcNjf97cxUEAPHfKzfJQzRFZRY5f",
  "key23": "2qGcyDkGuc7iK7eqMMjwonACHGN3yjmhRanNR9KpE8CQyGedKuDczdpMi1ifXoNEmZN86fA6hzRgeWnM4F6mXZXJ",
  "key24": "4oNy8v5Ts7jiadPUsh2ji6WctZpGYqSdni8BnQvqwN2gLFRscecZ1Vwwmn48p1bbJCRjyoMQtfMNjGtHe3vvUsLX",
  "key25": "4bXt71HnVrvbZKQtMxfLuCy4xEB5EcE2izDBP2GjjZtZdXJeNyRHFL436WPGfP5GugVCg18wBPYdUiTouA5Z1yge",
  "key26": "v2Eh6gG2JUszxRi4pLvPT2ELFwr9RG6ehZzf74hGAzHXSb9AWiNt3wvJBhpURNnpVuH8w9r5esma6gRLPmgjSAc",
  "key27": "2FiwembyXLjBaesAudmqFYWZyokdE9LnMP7fiFxJybVZAmPgfLVSnr2cmSjdMJvLPF3F52dvWGwJhczB6XtDHsup",
  "key28": "5K6nNzsiRdLq5GZobbwPmn7JX9pyJqJvZigX44HbsMVagw914RaWfWmKvrCgahaxXy5eNjyze5BuooL77k4GUGQD",
  "key29": "5GLGEFv5vzjrLL6956sjCmpy6yBhZp8VY96JxJHd9s1i2qVmYmuAM7fcPDNL5JXk3hpU14vrKCiCc3kTLFS93s7G"
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
