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
    "5PQhbEwmVktkEhAKXJdLogBJkeFaorrvEjWHUPR26FRGxrF8XgTdB6q9eAixSbdhVDVXyxHjLBze2rjHGWhgFsfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qpZNqV8cZxDomXkHfZLZsP21DZeaQR15qS5xFKLhyjHx91MZt5fim3g4DhhJToJUYLnMVUR1dcQXmrSvsqndFjZ",
  "key1": "2vD3sCnKoh5bwK8kow4xRHoDVNz1oXaCDpUnZHMfDZ2j63waNMVhfZzwVSt6EQGRsX86Xw7RAEyjES3oox9oN9wS",
  "key2": "3nXUYpH1j69gTqQrE68tMgtJbBDq6ksvYAKv9A9d9eXnRUfeawFqDT9gnBU3qcVpwcTfZwWJKkNAR4qT2abA8gp6",
  "key3": "4R2Lp8gAq5xsq7j7jJ8ajFrWCa6kZvnZNT9HQqyWNQH71iKtroK4EPeRYk2SjDhomdifRPtDPcb4buVj4rEGMYTL",
  "key4": "2HUcUEVUgKHP8NBVrqQW34puS43cpvWRiMrWbggN993W5iW2hzXBdgFAVik5kL88qvD46emLvhFw7xem5xKN3H2g",
  "key5": "3QgomqwwVipqmr1YWR2QzwTrxoEmAoNckh711nbRbPfLztQMCtbWDE3o5TkWFpRQcw8emhGL2mTQk4UoCVYVCEf4",
  "key6": "48heWJhbzRndqTEYW5W78YwrFqCK1A2qHXYBbDqM5rYw5ptf5LyJNEnXnjQwt13afXiD1LKMBz1cQER4hmDJRsJC",
  "key7": "3RS7KYWWFaNE88uoV9KCChA9pThLekhMWUmB1g4Q9sHFyPYDy8JpJe7WAMBUaVCggodxSHXAPL62E8eENSojWZu1",
  "key8": "3z6vpdxJAy3WbSPqvcDPns8twCc1jpz2TG76JBjKDY44dP9ribUMNSc7cSWa87DmHkHPj5zw8rvSpMwVUj4QMf6c",
  "key9": "495hFwLRdvVYjyiBA4TaM115tpxqCpETQ7gyXDcEZL2CBbeLP9yWydKi5AW1CEFSvJCGvquBYJPSrFAsKSsMoZAw",
  "key10": "3mbxRd9wmjbh8Qc3Z5nMB7fKyQkgxxHexNY7pdnvHdDx9Tns3kRNDGSGTiujNfLT1CKasFoQ3erJJjPg8Ezma8he",
  "key11": "QjvqyAbpj6kJL374fvZ2VFQf5Drs1kevT3upQMiJct2LZhPiVtv7jh4dSm1AD5Zo4pTH4RPtwxvTQwBnVgdaSeD",
  "key12": "4CtR4yFSQpYjszxNed1mrFV64fU42xj2qpFEKKBvDJHgePvaUHeBYfmavetxG5TU4mdkdzs7h9oZBbZjQ5eMzN7c",
  "key13": "4wMupg2KS3fYNkVMUSeqAkn1euHuewh8sKuoBgHDDT2vcmQ3DWWRFXiPmCXLuzSfptAtL8M9PXJ3WJNiNzpGtsGo",
  "key14": "5J4rfPtjuwszuaFP1AyueNmGkzRc7e4b6ENGsjk6wRa43RHXS8fwKxw7EXKzyFzUrxKr98tsvxWkWawoSuHoU4kx",
  "key15": "h2hRBtHWAZ7dhBWRJjW3zbeW7EAjYiv2KgGqKkskNgKSQhvCo6SQaZnhNnN6RKeP17ToTHUrwrGF2gEBpyU7bJk",
  "key16": "3BsWpAA9MUjSS3vSGUDUNapuDTSeQDLoDoeY8Hi76VFfsBqK4QtZ9vkeQeE9xFb8pA4a5d22Ew2zPAJQUXqSPFrV",
  "key17": "4pcEuLv2zbU8FyDaqHzCcgqg33BHZsBDcJLfHpyQDhucT3DDAcuvLLssNSP23rDxMHQgK31L7iBaUHNU976R1rA5",
  "key18": "4o5Azxba9CKY3FS4HoucKm5QgxD4KT9PS6QZt6d9bD6PzfET6uHmxtYDPfC9hePGpp3xfZ26q3L4toMZ9zSsjYSU",
  "key19": "2jNVzUwcaQDnAMC3uUa9E9jEQ5obvCQUQJXJFaaArey6M1bXUJ1eMTnBjLzYqUxLgEJ3KbgodaqcJMR2DCeaEj1H",
  "key20": "3YnixyxjpWqUCevHfeoM17GmcfTEyyN5QYp9nxSeWns94fHGiJPvJN6cv79aGgtPsMNxc69kfM5bMeBrZj8kQnVW",
  "key21": "4fYCEifPEVzAD3AMZVZhujWoXPLqrxxz72JoTGbGSaXtoKp4FxEPs3X2vVnrumxZNu9aDnjfykhQscqrUiYHZX81",
  "key22": "3ude8pnnedwopL9rAng1afXX6tqHrSWcPnXAqvBVpH2yi15H5wjaKqnGpw6yrsoZv5ZnYBjmTCFu2DkJG46fhNj4",
  "key23": "4CuQNCVGjyXwHNL2KQykY6NR5ggzCRJ89YH1UbSFaM4JRfdL5At1TBJHbvVVS8JvhkCTYeq9ww3nfesyjUe8k1Qe",
  "key24": "47ZyXYJpPvH7kdDfJqSYLoaD8XYaYyDWgFg6Zu6BeenEapGUgVL7MwpGniByZTughtkZQ5W9NC8fyKjMEC3NbBLn",
  "key25": "2yZKNm3gdDkjYoerZJCxbU7kJXxKxt7raKHHfqZq3UV4secHUnw8J2ffqjPzH4ragQAhGnyxJs1dTJyNZpMDjnxE",
  "key26": "4i1XkhZB8vNb6whY6VhMs9UcP5znjfhKRaoCTwHtBcKb2mKsBXB3W9HNmGMvf7LiJUocdPk2S4PoVn4RT6Vf6mM9",
  "key27": "3Z69giVuSFufy9vmAiuonMTBD62KNjsE5fbDHartVUhKZoBMjujkwLwvwv7RWcJtRHPtub8umoaGCzTHyWVpFwoz",
  "key28": "2EuGdn1FA7eDZ6oJ4UyLNN9Ft3r2fLNjUkVwYJLxn5F7ijE9mykuDPc8XQm8wdMUSHRpvY8NCFZmUVpsqWVXrKkP",
  "key29": "5Z9KNCRRyuV29diZxEmAsNoyLay5LT6ooPjXKhUDvDozzScRyzaBx3PPBuyihYL586mmfgBm3butfjSHY9Ryb3pU",
  "key30": "4aU6gn1VSjes7NBEn9QZxD1N2ra1E8jA6a18thkeESt5wB2md3WdB8z7HBC92CW7qyT52QSANCr3d67h2TzeEZuB",
  "key31": "4J5ChMbdQkmnDvibhJRwXrgSx5StdzKgPZjF8eVDuhnreqYkZa5ugkRtiUYCafC3z6qe3kZnzwDxBeFw2oxNyCGT",
  "key32": "5nWKyxoGF7CxxayBmA71VWhzgUg1kqGa24HnBokJtpNhLx7AfNqRyaPxaPrJc58FSZPwFNsttGt9Uj8Mb4oL8yrw",
  "key33": "zRYCj3e6AkaVMPWXrQbxFffJYeVkDZgqKAZnvcpXBW9sSFEzs8LgtbXU145xh5GLxe6Lt42ayv3ZJ4AW17ku3eq"
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
