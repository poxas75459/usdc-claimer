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
    "5XP8fx7KRy8z23x8hD3zuYFDAEHdG21NmHKjHFvnAVHTBYMkk8aEAegwxsqzYHQ4H3FoJnBmQduK5qM9Hdj7He5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MT2HG5QY3P8nunRmeL4yBSDws1WRjRSBd2YmRi7Hn4c2MnZMRcjG5qSwDdR2BC7vGJ3jHNrwcvJsnqkqFdg1p8p",
  "key1": "2hfRH4MZv5aHXbsaUJSVqEJxriY2uRiJSZCwSyYoTeQ29MYV816EZXLG4UcqVfAGBS4dLxLb7oGQ5rvpbnJLiYRr",
  "key2": "5AHSN8HkpBWWsydvNVG7Sapgx5e9RNqrCjeEfA6da1SSUzx34Rj3px9gkr1u1yF3Gku1Wk12CTcuLui2WfQayfHz",
  "key3": "4zZwjmPLJHJyBXhKst7RWgkVBNV8r4howmkXMDw8v37Xta4avAnPY5zr9Pg2tU8gcLyYdPV7aQseRhDfdMZkpAKm",
  "key4": "2kSmi7BhhboheC8SBhSxY3364sm4uqcuVSge5fcj4staXsLsn7pMa9wKbBcTAskEgGStS9ZG7zzrgCzivLtJoFug",
  "key5": "4vp6W7xvHH3cTrt2M19xvCN6mxgxnQmk6WLNntsVoktGeRy7gjHBn8Kb9D6iKZaWRHa35jr9cJ7rgHPcRJdHXAF8",
  "key6": "333195mnddWdrBABSzh2FsnBgBuiA9KZRkqznMvcBN1i6RPJW3CcdJBPz7xvZgKgo9PfEgQutmi7Qax9hycdGvRU",
  "key7": "3qCsyaXTFcQmMWKCmk3EwXDTEhekLPgJPg6BwXxYq1WZsno6xV5xnHkVUmQpJB3sCAwUQbRYTRAbRqePuQpV9x4C",
  "key8": "53EWCqy45Y4RZzwaDn2nBPAxNmeYfoVMna7ZJoYE7W1gLTSg3ZBLQdMPj1TD7Yt2HJUWc3n7KUx9ryLFf2tAN9RU",
  "key9": "3XnBWNVLNm6HV15m9d2zPYpBRwRVF71F8ZpNXxsxFcofrVgUTKyKDsSBxKNyQGAYvM3ZGLWumZJ9BLC4N5K4sn2T",
  "key10": "s6Z4bF3r9TuNSGfjdsx981DrbSYYuuy2BpjipfCR3oCLv6K3AioSdMpmtWwqSzpNQjwbzicyU3xqLygB8SVBmb4",
  "key11": "4K5nkY7CqJhEusoFBX5GYYLBFgjvV2qrqse13CatYjJfU756rf8tYBWimtLxUbhq9Pu5NhJoArSh1UvMpdhRrkZ6",
  "key12": "5XfvXnztYgC3kTgQCMJgkxhEnUCvGi1kEBq6KPo4GZpoh7qu1yivTfWvHKCnnfPKALW9BwgKcdbDxrc7gVPiABb8",
  "key13": "5WyZ1ph3mSZyxy33bQubgso6w6SZn9CPnFQoaA2J6aFbDbzW9qNBzUh3hkJoz9yfTq8ff7kto7dz1MeXhte6eokG",
  "key14": "493FXpAXNjjgHwZhMqrjAaZ49dx2MCTnxm28Go2Vc4fTcYBzvzek5ysFYBrqUYaq4nzc9ZSKgVuxzRGQzRaUQ57q",
  "key15": "27imnbNh1k7ERHA611QQr8huXgd5nJnihDVkPsXGq9q5xKYXo9hCzHwdcSSZv3Jka3LS8zk6qVnoRobrweYgFttS",
  "key16": "2gds9iunCU4UsuT2uJyBz6JYcTSnRAs1p8PUPq9VWBpkgWqVgrBfgzhdHJLdj5B7trXEJKDaWTRNMszycJKPPhCY",
  "key17": "3XcBouE6jMGnEKUc9i1xyEwp3o4qvSpGYXbcKgHdPTiFX6u8GvSbcmqhNukfWrW54wp91WUNAyExiMoS8CU98bXo",
  "key18": "MTfzHt2kwnfpX9g4awWR9qw4FxZzP4e8A1vDrYzwAaCuCBheDVsopXpQ2AfkgYQQXHBzHnK2oFVZ5QnXRfbZNH2",
  "key19": "2g6v9sEYxT3xfY2HbCRRQwsUo7e3TEaKjtmFxAUzqCLqv6g3M9tUEqgVyR7m5dhJyxia1mfS7vugHcgkGnXxs5Ti",
  "key20": "4WUmXG9JYPg1An8rQoZasFnHvw82hy6fdzwn3MiQiKq1YN1cVEAvmEBjHZ3rhqudzNnw7XQ52d9wHjwj5A1yjseP",
  "key21": "433gBT9Hg6LDz7RqrzmbpxDQG5kQB3FAKFqNbdyDdhFZs47skQyjHr4w6JyAswhKL1cb9RsoM6LH3rTMn6fDXzfV",
  "key22": "21MWNKTmh1kJ9swjYnMkXCHPeQpmePMPGp6jWK1MUdM3skvvdpwUqyNnYrDhAwefKvu4qDPFDVcwiJ2VkHHw7ezM",
  "key23": "2a6s8rCbwiEHttP27dkdSLkC9bS1jCCnzdzQhZUZMjMkRgUnpFjL7ahoKbRt5Cx6HVAjewa6Ww6d8Ljxx65sUdJb",
  "key24": "4N8RCBy1dAzXpsampTB4bDTxQ9d6CY2h4VvDLJQHJVE2wJ4NvczXuTZ9Tdfbb8pRSb5UPu9GBWSxdFaTRs2kGwbh",
  "key25": "uayGH7AsAmBTmt7XRpX8bF8u1e8ZZ4Xu13BuJ9jVd3KEjRyWkiBLuzZrkyBs5RGDSNsyt34z35mjPoiqVaK2CgU"
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
