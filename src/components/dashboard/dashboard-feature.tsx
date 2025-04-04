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
    "6etvaw5yVDimFWmevHAi3wWDfnU19UmTG32Je1sJ4iyV2qoTDhxewN2GtnhYdvqeJg8wgpN6kmYRtmHhQ713a7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGBrBfuBnapHXbPTGzyeXwZbBU7csMYond2zx2N4MZX6aNiZRWYVSFZzuiXjK9a5tjUiKjYgucH7DLTsVb54Pwa",
  "key1": "35VL9CUNNH4NhPBU93wH7U1DCofebHKM9siiPJQxujdfDHYnkFFxVPoecBLwR4gaPoZEarHZ3MhvxCMFq7b6DJF4",
  "key2": "23XUxGkeTV7ToQ98UBJT5D2QNeT8ZZE6C1rLmBsXvfCBny6RzSZvvLQ5bcpZUcUfbZKkcchT8o4kC3VkbDXs2FfF",
  "key3": "2ArVhv3dh1xmMvyHTDQHqHb617JiLUuq54vddtdRYSJ9x4YMH5CS6J266NUohZreKtuag1m27StAbftzQxEcAABr",
  "key4": "2KJqDwq6P4ojAXyUZpZTVdiEf5Hmejgyrrihxs1c4DHMwwnKRNZRb3wnFX7z3aBvDXpAnBxeKKZSwXkeGk5zWEAN",
  "key5": "44PYVPHJXTdDYJZgKNZwqG2kWeTBsQ2B1vThvqKxXArFG44naptVTpEhtwGx8LV2XfLa92Sie8o5DeSpY7tqjMWe",
  "key6": "2136jDYJRbGuTzUZ5zc4r4sryGUuroq58HPFU5nRZbyjHsSxF7LtiHjk3Y2kBCcGndH2NinLzdeJU4wPd9xz8JZB",
  "key7": "5Uo6ZkQVXDzdfBFxsoxJ2PUdyDjAf1HEAoX2gRftyvQ4aVqakUBKzcj4tLJi8TiaS89KGW7h9YeXAD7a259gr8PL",
  "key8": "45nLYCMhvDQCwNiojcQaMFzCBwXdwjyUdMoXPjq1XVrCJ89Z8xE7q2VwmfKjgLqVmnPAwwu2VhfEiM8RzpExxF89",
  "key9": "CgEJyVtD5UKfFUZzXzFbcA3B28Ay1poErrQVVJHbgpMSeNE6wR7iFaGBkA75tTnzTknPz7b1aHHAXQfJwEWTzs8",
  "key10": "54Gaa8NXQrPgt4gVrL2EMgcoPPTcCMpGzrfGjrcb2XGAwLVtK4GzmHjcuuxTx3yYtCinwdA9EkZ5HyfKpPVbA5FG",
  "key11": "58Q47TSNTxdDPffdL4nn3sBXxt5fxavcVdB1gngqqPzbizFFwqbjtYg4vKJJok2dKjP7n65kFuLNh87pVuHN9u3n",
  "key12": "kDBcVXfi8F9aAQvQw4t8oTK2KqqsJ9LDrvoHR2LcCsEAZxjQMZn9HeJcVAiCGfxSGNnYudY6X5SBf7tanqjeTHN",
  "key13": "5jYJdjqhXCfJLHKPfpUV1ifKMtAwzySF1LPwGJDkA8pSQdKV4MvvYJ7F3cp8a7ohrr74scbjVyBsTPrMxLxEWLtZ",
  "key14": "uFTJMskWmEMbxtGmbiCqGcg5EVhBopTrmHVTAE37qkSrT8kuXRpxsrh1Q53CKwpVDYyGyBgjHEd1tPRaE8NebKZ",
  "key15": "TjYQSMEHmBAdye2jbjFjko5hnSWX44DwzeH9sZwgKG5GqDivDojYuj2ocn9HsShQ6AaFTuBm7SVpiZkBWS2dBrt",
  "key16": "4MFeRpWQYmax1zhSpsUZ1PKRjDJdSupqzX34SY2fqHjVVdXBqh9hPi6Be5s2Zvz5sSkYgJr8icKMGdju4xRkEF5Z",
  "key17": "49myT2mnThDGZ5BB88d2MeyyZu9D7VidVuTAcBZHRvt9UGHnMKwTUmpTP7nJj5osZFunHj6jL4G2MH1yC2KUEn79",
  "key18": "5qkHpKCWM98g3FqGK9jHbrk9NNTewAvN4C6WjvDiAK2xSw6pjqswWTsQvt5zir9BegQHZaEbNFD3gDG7bieNx3V7",
  "key19": "5EnRQhjbtLB2kq1ff73rzK5CXq4ornZ42EnJ9yFfNBfYpCCciGG5DxzFWmfH71YSsG1T1ECM3fDJoZXtdkT1ASXt",
  "key20": "38Tkm1uFQ9TEXUVMGw8tsRK3YtQvT6RtFPrbjpUtcbsXgwoEEBkJMmtbE4Z9hqpYhWNx7joTfGHhPzKviMtYxnCb",
  "key21": "tutdWVfCj29dAtdnXKWUnpTQWBZJWqXtwTe1idhTGjbSkH3PVM75XDT6mKznEozCjHsCwttESumrWSDPVSD3Wyh",
  "key22": "2AjXdoLTSkU7tSAkYZ9ZJ8CMLVZby2hLqNSBDZ3NiYxNiTeQ7KAYu5Tct5Kw5hKpEA6C6oeZ7LZAk9r5uq3u8VmA",
  "key23": "54aJVuSfbPwQG5kTbbFRvre4y559ZbRH7zGKRGVu2pLsfnGBa98HBSBwNXzn3GtP1nHHHQKAQPSeiVn69h5RstKN",
  "key24": "2mPdjKX9pjRf4Kgx7F1QiATGsnv2RHtJd2fnsRMgjN7H9CukUcQwcXwQPeacPXFj7HBYJcTRPQY8M77H2B2UpwGH",
  "key25": "3HonAqHk5cx6ZvMY3fYGXsJgTAsAcc78aXLgmywuWKK3sEEK9kAF9FETiJRJC98tJsB8noU29j7yC2Hh7kR3yM69",
  "key26": "5AdPhc8YcLkDsob2yVRJ2HFNSNzktLYAGNxt1zzMtG2dtz5Ax4VcN3JkNJvyaqybF6LMCErV6cL1GjwCqngKinU1"
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
