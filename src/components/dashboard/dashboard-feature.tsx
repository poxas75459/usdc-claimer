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
    "2pLaMPNeaAf12tQU4UHkwZjuMkt1yXVxYaQQxpaLHz6qZ5Me4TEFEU1nqZtMwBj9toYwzcpfqNGZV5xMwB9hetxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23pgafJw4e7ZyUrg3Tdmsj9HSTxm5DJ6gdjTu4mS13Dfq51z1fbVgJu4APHuAknchWJSy1C1rr3Fhhw8HGSUYx52",
  "key1": "2H8w9x4hSZd9nPvRJ9SVuz1izTSj2CPPrC6YkqmiQoejDqF3ziTE6df81268Kup5A9zMMs42PWhCwSU7scrwxK6C",
  "key2": "5pUb487rdQRF4MSCgKwGnWbYcxgeucFzmhZdbey7XzzfmBwUsxJZnfR5M1KeoEAsNVTKZd84AqhJkYNozGz8EkHK",
  "key3": "2ZbMgQvbDzEZcaE6PaMyhxKSapd5dYjLqW1mBMqC7MUvaDTFregnDm6dz7w8W4iwvXvS1rDLA1qWUbySP8WJJDEp",
  "key4": "3qttwWPxwHY1tHwVqiLrk6ozyYK6nyV3uyZhcWguQMo2yPQ28sktRwpxNCygHzTdjSdZbdoPPr6nExHbu99dMssV",
  "key5": "4bQKVTebgCimeHhUP9SuT5tyKGgujsq23m4aq2parW7czkJqbyazK4hrotprxgydCTRi8by5ep8Jx43UuibPewdM",
  "key6": "2oSBxuc3G63jiQ3Sso7fVK7Yoxfn52MW78M9VKHkkFCB2BVFEhBozBEmL6NztFBzhwqA5pJdvdtoKJmidgGdBFuh",
  "key7": "4F8y1UYj7mEyJ3PH748MZ5967Vf6DmXg7sciHjeJHaTBzyViYzGwccKUZJpLZmDjceeZNvSTTXAgJQnoxmHGN5ky",
  "key8": "2xnY1m9bQZQsT1AUunqRohKHcnAwNqUr11kQE1DQT7BxgzHGCktBZCuaA9uxcM26Aa6EQJWKmoB2wZPq99ikrAvD",
  "key9": "7x7naCUxYimrSSqL4NxyX6P2ZWcViy1F1F2gV9efdaJsDs7TWNVnuoYrHVFisdQxWLDzmVWc7t28WqVNKneAU3Q",
  "key10": "5bsDPHGV5jQqiJ38qd1utWrfxy4umEXbzT8svZxLNADu4JNfqfGCUKJJRUrS92dfK9CQX11GrzDm4uMHUzEbmxt3",
  "key11": "LpjwX2aG6u26GMsKqMk74nuf7ec3Z1V4GM1gyDCpbN9oqkjMDSA9ymkM8vAQFfV8QNx23UqUsFsY6GEN2ieTGKV",
  "key12": "4LoqbauAo1ZQ8BHBKDRJ1dfcCjZy1zwiPAx5oe8px3sgDSmuGBGy76MiHQ4qgB6ZZs2vraHiTfN48gZgfQiVzY5N",
  "key13": "297wgsqL7Nk5GU6tdELSiuKMvjpeyRJwzGmJA8hCjMKLnAu1tNU6XKJBuvwFiNqKm4krp5tdrarMh4N8iaXXufjP",
  "key14": "4fV3v9nNMz8V6eeA5DztQiXT4TKhXyx3Kh4JEyFaqgcnPoVQ2ucHh6N5siSvqYjt2V6cR2usKRfsBuaG4kZcgnCN",
  "key15": "xfE4h2A1NfFCzMKtR9dUkWz5tszDuxnLPC4hqJRaDeM6mArbSUT9sYkPsTYZdEVwujZ1EH4F8GNCi89oCvFT4Fh",
  "key16": "3pCiuiu9pz9BrB8kLbqHZncTBwg41CZpDh3nghxBPJAaDbd6p7e4Est8yodGXmL2XGCjjAiJgVjhz3xpMun7feg6",
  "key17": "Azsz6JXyGij7XRVTQC1Zm1kdB5GDRAW9UkP5rSNU2gEqoPTaVSbmdBn83GTh6XyvqxehpBH75vQ56FrHczGzAXa",
  "key18": "65NFufJzgfV1GGBytH28y6zEW4aV46DUigEKKegSManxiqEr1VhNt32CC47emzxQG9LEAuzCqTm1BKeZKEcDR7q5",
  "key19": "3qGR7U8QYf7t8M9ew5wgJSGRZZUze8L8Y2Pyy24YvdAmEkEcvxasUBsHKf8oFWpLDVMBRouL4ucdL8J9SDgNzms3",
  "key20": "3bLeNR84VVkSH8LgPBgyX9miHdK6pvbqyBdcHdh5xMijMpi6ysQrzA86cJv4LxXyTK6CxJWwEewV2vBoKdVynXxU",
  "key21": "3LYdWv6RX4kGgiocxEcq6kL3pDQ9r9a9jEdWboxWauzqiKrGfqf9WgdaQbtUFRThvQZa1PUmveuWtvyj49fAC8zc",
  "key22": "2psTTUMLU5CZ4L6A47PmvWwbgcKT7eQy9TWxHwhrrMEJvhTiG1eiDqKyA819Kx5hSxr7X7eFAbxxk577HL8mabC1",
  "key23": "rycANNYfJMsLM4W4wqeTyqoSXPgLcMZjY7wMMs9LHToGbGvdix4apaAAkbTg69g8n2RfzpzMV7qyNgNmgs645oM",
  "key24": "2pCBiqJbAqUJkwpJBCSB9AC6nKQe8LLxiPGxnVDxGfSt8vXLQfwHVbmqsrY5Y1FGbUbboG48K6kafqS2NoJaMYue",
  "key25": "5SfKSHRH12ohYWeZqs3QZkM1YnYR54Sk2s5bEkoLXm51xqPArTuFETmLAYV7NuzeNhbrPRfd3pECk2nLfkGBLQ1z",
  "key26": "45S6Uc7gSETTuQbu1hBQhDZrAaP2EgsbubGTYxdK3S8byjeyD1QhMEGNcUPDf6yGM9SQTTEYSJtmVXim8EwCmqF4"
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
