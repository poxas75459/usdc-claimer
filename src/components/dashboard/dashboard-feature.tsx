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
    "2KTtKXg6VvNmZwgHaNz5CRhpbDdka7ZMejQsF8vTLFgCAbRnzjE7ktyTrujpifbj1EvxuEJ3sjMXVkfCUWLbTgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtJHnRU49QG4mwTnejEwMoKabLJ2vvFenwhj5zFZzyxExuc7MVis4QSBCz2Khn2z7h8AibxVQnMxQfgRy7G4xUf",
  "key1": "4xp7zFYgV4vCoJGyWjy14j4MYRbMtFaTTGtNzMPov1KVbYxEY33LqSjUd2YkUS5YDqtkKpm7Ux1Q1ZaQrhLVgTpb",
  "key2": "4WacZJZmfta5Comzc9diZWWvkPhgBcB7PM1E2zxMcYa8Nt3RfLMEmXJAJDBr3nXVxmeicWBk1rNQpwYkgzfMvZgf",
  "key3": "LtJ7a284kBVvCwV19W6WkRNPf1jC5aUXpZShZe2a1ggStNyHQ6A1qYwa6bZuXU9xbsXt21YiDxRxFEnsA4PPfCU",
  "key4": "5Wb9vVJFV4p9xSMRKe4g7v4vTAE8Rkfu663qU7MCTqsypC9TF26jR4qDNbQAvzabqKAj65Bhmymix1aGSeyycHpG",
  "key5": "2562NfN7XjA6wKwLY3nrSPthhxs1U5Er187dTdWoqVgUXoPPzvMeAyqAyv2sTRrWaovtpCtZgSSBsreYJZhw9hhC",
  "key6": "2jdQMTgBRqrePp9V2wkUtpvTGSFFyW4RWjsfKQhEuJYfkf3KyWmfCG7ojd5TkizFdRo9Jh5EFEcyhUYgj4S2FVVG",
  "key7": "N5ZGWCLZz2tkroLqsccu5xUpL3sjDzyMPA8hxguHCCMnG1DDLgsWeAcxxQTiVr2RowX2WguaWdoLo6pN76eracP",
  "key8": "JcDV1uULEyfdo4UoYMg399Mmd8GTz9hhP77z7LwZfjT4yrMyH2Rr9GzKpv4JQsDgNCv4kinWstC5WshAK6f6uwp",
  "key9": "YXDBZFJsPhJuuPEdEKZufGE2JZrE5n6dDVTnm6WM1zWuS5SP46ZC8CeB5s4UKZbbeN8NWxgWUgXN3GERCivVWeS",
  "key10": "4rUKQv4skxRR4af7669B8NMZKk2vxThxg5dC8TsT1QYqkUsvwE16Gq7x9rRoY4makvQHWsCkW6NZcGJu1fkUwHH6",
  "key11": "xAW1vfuox6VPGXoKfiDZhHKSk2hF4WD5L2NRzhkFEXEnh88uKyGebaCyYx2wsvv5WLUbjXHqJfxvkNZ5F1cGFEA",
  "key12": "4nkM5pFofeA6oGRSHXt6oH5K1uK3s6i9BuYcGYuxmbpHGrYWG5pLEKDb5k3LQHhS78jcpJpL6X9r31nkauNgzth8",
  "key13": "ecbTotPQwsRhcH7eZYnJ3ch2payuqakUFnXGgNSawkqoNRgAskFtkjciac5JfNrpQbDVcL8ujnSWSHNotzMVJiK",
  "key14": "3S2XKvSEjdfrAAzM9g651eYxA4Noh6vhDy5tzDvvrLQab182myddX1Zwu6WbdJyBu22m9J2SPzBPznhr8GQGYAxR",
  "key15": "3Pjth2UHSXwTutQ3JfRVykr41g5As7cDQPQjsqfKTebLrWESaZxNYre21TQksfhChqVYadm48pUFU13b4viiEb4M",
  "key16": "4t9F8coxWgJ7yLE1aXGGbYbTRd7kFxu4BMM1asLNFeTfPyGaPmmThztALk8ZG9PmcuryityZgpU7ZHnh6Bo726zX",
  "key17": "3P2KsKkqwMw6kYpowGSLP356UjWCzzgLgFuqfX9Azbj3TTkokjDN85G59YCL7jPAYCuE75PxaqqeUb4Hu6CUWoPi",
  "key18": "EQwV5giMzCvmXSvXxpjiPAvwBXxCVrkscWbzTKbgu1KJCaLJz1PNgdmBGFpCKxicjojn4kAoEKMbmgAgPYFjqec",
  "key19": "66frvHi34BkCTVCea9c4bFh4JgTC94cbwy4MaiYYMTG1aXhhgbSyyFG1tuTr65ufTg3qb97eb4eEeyzysDgbqNSX",
  "key20": "2fNx4ZsCh5fiwHnRLJcVd82aQKVRkRfhkcfS6xiqsrCwiYAhR1je52NRS66PVkYwi3MW8U3BruPdRa1kHFgKkbpj",
  "key21": "3NJEdXYsJY8qUYVATKvPYKtyWuz6xZ7S3EvmDyKXgqHHQhH4cnkgDoBaHQ9npBLHE8LPyoWuhWQTdUMVHYQ7xv2g",
  "key22": "5LwkzeFhdt6bVu3yuPTiZbC3NTrJZWqQeP1o2ZumD3ZvQ72t1rvoDMBsbCAvNuWbxoyGso1Vkg7z4R4mYFKGs9us",
  "key23": "GTDZEKqJn4GYpYSWMh7d62Dk4sgXaBgXdeHsoiBGLmmnord1Huu8wKdbw21cZGec6oX2bQEG3QFYDquJJtYrQ5Z",
  "key24": "5p3eCkp5bDfLQb8de4MZ7z9tdDZjC72iTFkBdVjK9a9z1hPxxqkW2UJ69CtVdDBhELpBbXBQSrEAXtfouT5L683e",
  "key25": "5aJjtMyHJt2bb4j15u4GvbPkx6uTxvGMWeUMBvnfYx3fNgrN8EBuiRnRK1sQcC2uWrtS8ahsEP2ey1M72bww8gNS",
  "key26": "4B5AxPL9BLNaTWCSCSogbMa7PMSnFnqng6oR9EwU8aTdbxYuzxjvEcixnF2aQmC5kcVwmDM7ZVknmXjaaddTDGJt"
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
