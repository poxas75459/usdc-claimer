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
    "2btCU4w9K36KE7eEAFj6T2ccc5gUEGJmvxVCHcidHW4MAD8TEf3Rgwup3FErmss9XYyPG12VvFWe2jn27jhjQsV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqQy6tjcF9RnVkShue2QXKzCSz4SRcDxxMwmKDxA1cxnappWDQg1Qxn6NGSUpGovPMsDTV3ttqgga2WNFomUKS2",
  "key1": "GjXpa5DPgP9gVdKcxwcHaQnXVHJqJwuuwq75ixEHYV8utqAaa25uvNd6LP4t1pYJKzHQfcoaeVanMnojhy7hvKZ",
  "key2": "4KJdNrnc6KUqwfpo8h7f7KpRPkrUrgiRgsu7z3doe19uPmqvtbGQBnVNdXacsX4LbCCaT4HUdJhhEkjhCpZg6c7C",
  "key3": "2fkE5TXWbdLHYJiFWXXmEhQDHidMvkktaE5PQ5kDGw7ssAQH7XttWqncvoTP5uHFjyXsJUF1pTXQL5awEA1rFJsE",
  "key4": "5GsmQdSEiNF9qZSRegGM1X8dCPoESqfFcGhmKxTfMQQRk3kNKYVe5kSnDXwCgdWWowbEJ14mshzUqZ62JMjYqJKm",
  "key5": "YfJFfm9gwBSeMTChmHtEvebT8SZ7AH66EknNRKuhjmWXBd5xm1Q7wQNTXKQ8X9Vt65UV3vhcrztF6c9VrFLg8VM",
  "key6": "3XJ5HnDjKXdneUKS5TtJNGnieuPPvgtUBRqch2WTZd1o1oyyCgPVttgTHbhcvKapAWZ8psJ3SsBgJDgVtVUJwKqv",
  "key7": "2T5PRC7j8hddp8593oJc28FcncWLerUjKDMeEP6eBB7E9Z3N4iyJcXBQm6f4S8QCBw2AkENPmmi42ZYHTgNCnJKC",
  "key8": "532ZRkYfmKAxvGoKhRouUs49yvLTMCBaJ2WtEmwXWehB8GaT1TxmnRPMb9L1x6XwT5o1iRU9TZEAo1ZRwGy6KoCj",
  "key9": "cCAc7mDg7nzXMp1EqZ1X7ENZm5iuNdfjMH7BzBfxRjHBQsaiuG6zim2VpAFs3xGBsG855w57JeL2fULigehk3jP",
  "key10": "3kQ2uAvXfqcNtie7iyEFmMD8onJbY3csGT2J4mQiYtX1aLgXqbkyCeMnpRCe1TMxh3AESZjFkoweSDisvWY7UtEn",
  "key11": "5PgFUSo3vkqZLBZVwVPNcLJR3WM7CYUGjtgRHjk6F5snBMFpUJkJ1KwA1gwZ8MYaXf2MrZoJW4nZP3jDcpDRZifo",
  "key12": "3sqv1WYr9HLc3FwBntnA2znUWe7mzkaVdwgMPTAGFoRbs4xBY89DpniyWhvbztwPbZfAKzgj7DLzLXqGCpt6wvVQ",
  "key13": "4RniUfYLTPwxT6d2gWbSYPfs7C7kHuSvwZnLMekWVspLLuifJ4SM7TJBaV3wd5tLw4NARV7VXwQx2JwuxAkTzx3k",
  "key14": "48XBqf7EPs3nPXoZXjjR74Xzh8SSMnqWWTUgnwVapfVSmNPeAQqMBNWxqScm5tciVNrnWoSJu7xD8Uc3prgMEPfh",
  "key15": "pnFfnPAqyKGA4K9t9coNjxnjBpBz6qHMn3EQz5Bn64FNRnWeRcNepLwF33VubPmMFVWyJpnLn39uGzzStvXezoz",
  "key16": "5UywG4GdReTBLmQgmWfcfjgMN5fxUiJCNN9qbmT2P72AJFZvgAe7QasKNTaY4yr3py3wYtLVc7PW1adALacabzrU",
  "key17": "3pEsMvn6WsUo4hBzsfbyWdKV5EUhm9ot4JdhEN9gP5jCGZWA3DBWwoLxKeXStcBLaEKkT2JGEZKoTWXfg3vvbsi1",
  "key18": "FWmQYhAKA88nYdthWf9R6MKGwAVUkbUvwP7oxoTFH8LGLaSgcFkduXLnFTe72QPUonTyy1NdHZfbL5cSZom5Uta",
  "key19": "3uEZyXXhRXNFVsHzF9rismLTQQCfQMkLcoDgMBTbATtMux1Kk1ujEyGNDutiGNeo6A1F6iKy6Ei5Zb9HRNAGy47f",
  "key20": "5xS7qXsb86UYVBCyFP33cCmJBFM99eqhJqjtNLrKHXPB96SKV9J377uVi4DYG2XJvaotPbUwf1MTvGDNbjd7JvEy",
  "key21": "2L46N49j4zkLSUe1MBuPS1wB2KuMaxUnTbaX5jA9u1idTWNyQqRQWcwiyEJPHR6vBC3XVbjfDxt8Q7eoWgng1fYd",
  "key22": "FRW4UsLAD39ebhANYeXMYV8YGq7DzL2vZsdtbwPnLUgzAY2WXQim9uQs6N5JKUKZX7J5C32W2aD69WQN3jGmYyT",
  "key23": "5yfTFv5YQcQmymduwMqo8khVVetyMN6pxUKemGvwFW7RphsEhbazFc5PyNoB7E5TSnSg8ZDV7WYVjRaXreGZpqYT",
  "key24": "2ZMQcrazd9WdfLSpi6rQ32WbDxheMp4Yyk6ZUpz4ak4jFEFHvMTyoUNDNz75Mhn5vJKSUFvG79DnAGwgqmV17LYy",
  "key25": "499prjinhLRtn7h5FaeRxJPjPMuBtbruUf44KeUSU8ZmkfuEreiQsQNi2fWsPL7e4o3JHxEmwKnUKfmtDijBtNrN",
  "key26": "64gFqegXff4YBjGuvvrR7ULgsgSEXcjLkUy27LeybpHmDR3f9vT4HvUYMvfYyqmPPVqvPFWENbh95KfaRRQfJkKZ",
  "key27": "2Tpx9Y29iah752cokBLeLZLiwoz16w7cJzaJoim48ToJYQVaMAw5Sv4zBdEqbDPs8yLFQi8FzuC6zSGa9rjCtMWY",
  "key28": "iHT9Xd43bmWHx8aSVsAG4oMmpCydVn79W4twCgdUKUpdwGqWc9rDitF4SD4JS4qosNFNRTFdKA6zkGjLWy9uTvB",
  "key29": "5yMxkCnYdqvUpa6uyHVinofKnyLXhbtPsBPVdzTcBAec4FZnZo3AtBLjQ6428F313oRe5dCto1fQnrDERNcprG5m",
  "key30": "CMdn31hbwuqrBnKm6MLqsvT76mTq28Lv455ix3vLkZwK8PFgCPjfJqxbcjubqpG8d4RzhRY3vFxyga2cPToFUFZ",
  "key31": "3yqz7FvkymiH3xdBgiftZE2bHiQLCKZtYYEftL4WcZso8dPP7ASD3tg8PNV6nCbPXaf8FLWnYNJtPYkbY7Dr46Sh",
  "key32": "4rLYPf6xrNKa5y2MZ3ckL2fxQWVx3cyzfSdPkVQJJvNDe3G6xJAFRYDPvu5bnk3tsj5929Kx6AqbRpu51xzoERVz",
  "key33": "2TkBvLqU7SPU3o1F5w3j84SWY8EmnRG36dGw1ns94j4HRk84mwkaB2TDkTbsMeWtWPnR99ef5P4TjU8WqnEXgt2m",
  "key34": "58y93moEoB5Vkm6mPVFEBT2BAFyaY6psZkga5LKTH9Co3TiTPgiPqiQ1eapg5zaD9eTD4iq3nVmf786AC7QhT4nT",
  "key35": "4cQmC1GndN1XYuxmknDmeya4uCq94XGmEQSfycR7WtXX4T9sHHNYM4wWZm7MnQURNHq7zFU2PQV8aEVGPhXuAYb5"
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
