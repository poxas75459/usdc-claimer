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
    "5JJJQ4XcbZy7JWKi7vLi2b7QUN8EoLxJ1XoqQuAfFnYRgPTPZ6KAp186bzeAmtyuG4GbfiMVaU4ztJbNDoWfa3Nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TUdfUbKi3LkWPA3nZKoYydJMvFKcjsmxUmPkwbDQzeb84FPsNe43hZUhqQXuYGssh943hj5fNLE2pjZXA1W6wir",
  "key1": "2c6xsG2qF1WyT5GbPDw6ZgcR6obJ8Tpe9w3WsbKjLgfbUWuj6nYu7s7eCS7SHfpbRvBoZBG7TRQZi5aTmbpn2j4e",
  "key2": "2MumaooZwzfRQ175vSDC2BPtnQqARM795j5L8KqrmyQkiMWRiR5vdgKJcYd17hLotsCKckCmb6GZV3G3mPDXC7nU",
  "key3": "3nwgoAqnNZ9yRkqkAmYHzARjw8pYhRvTx6yrUjgsvvuCFzPPTWC77NghhEMJMvF6ZFcMdenGu7L4Lef9SSkX7Un7",
  "key4": "5CzB7RUtzwhmAx59cqbxE8Q2zowYJei9jv6pjH2jXaDnJRe9WKiZeqpzFYdUyizmVwQLJV6Cft9Rny18Z2tWnApB",
  "key5": "2fNHrYWASd4ZMrkWB1euE9872vm3c4N8EWBzwCymWxVEL7LGERuyX4Mq4RnoGUqxLAinv4mV6FCyMECoA9Mh9DvM",
  "key6": "2RSnuWGuHAzYQovdpbjwNJNzYjzrmQVZtzUNohpLLkSs8GUuS34iXXRhE6YKB9Y8MwWqt2oNDXCakk9kRCWr4mEq",
  "key7": "28fcyaqzLvA9edLKWLbJryTomuzedAfvUAAyVTFepqwnwAfWQV6kFxnEWAhWJ6BQwyMy25xKvgQBshNrGDZJAqgM",
  "key8": "5dTFLKzxGvr2mhA4cgwHRYsViVsybtD5rvkrRQgUn4CX7rn2N3H1zfRrsJrZq1NrF3khMZzz8g2mz2eCFgPrGcm5",
  "key9": "2tWFUVgCefdLU2mssKSJ3Q4EWV7weBuV1jhRM78Wh8SKshR3wDhZMqD59LUrbyxDGxt6Bo9S1Vp5jexCj95mF1sk",
  "key10": "4hysL1Qw71Qmr2Xe6m5UzHohbZaoSFGthHdJ93y3JBJMMAn3bFu1WWi1ve2Wz62F53qxP3wkU22PFrmUXk4AaBPN",
  "key11": "2X8mD5JXvacUH9PpLymJ4kWzx7rv8ogUmupMmviCP1fmCuUVatDSs5JwTb96Nnytr5uZAmsmsqqYvGfx4S1XzqJV",
  "key12": "2Dow1Vf8EkGjEAWC1Jy4GSkTuQ64pC3Ei38P7YJTrADPNJj1vFXw9ypUP81Spjqrb6RzvHoxf8Xe7pm66kTJXnox",
  "key13": "4S9DqPvRUzYBDXyhNe8S6Y9KtfjceHV5HTeSZNQBK85bPqbTW3R8cn6Sc7HCYKCCt7oWwAuT1SzsfjGzmZm9apku",
  "key14": "3BpojSpq9yXi6GbDavVAJUNa7EVw7BBE96hWmPoKzp4hXWcG4PwSVbnz4b8aAfjPPVAH1H5hwTcXaQA9y6M7xGpr",
  "key15": "35aTmRDbz1wEba2RcC7CcZtkqZ8qwWvHxKfPrZPCyJGCPs7jvaY5G4RFm3jxb4iMjHMBZB49CioHsLHkJT1G3Ue2",
  "key16": "3DdqkoBq2uwpQZsNbXVQKA9v9fqD1s46HZ3M2zndcKe9m4YFhdUqmruVY4os2yjanfHKPQeExayB11QxXryJcy4H",
  "key17": "4CiUBwBj3Swnk6CMsSnCsbv9wx1nxDCuHcmrcumwo7zAXacn6TLFuHk6CoDgJXNmk5AktwCRqKw7V9GHuw7CdpBm",
  "key18": "4K8rvhAazDxAkrGK2D7rsNj1u22dxoa1zMhg7Pww6FydzQ2EZRrFGri45tWsD7knZwUZ5DqkmvNTyfnkEnxmE9cQ",
  "key19": "2hZTQUCQE5ycQ2Sjt1Uczzv5huVUGyT6LSW91rTmzhCztVbpCNnoCp2D3VXZHp8vjDS4rxX1ErNeWoBMhgquRFUY",
  "key20": "59Yj5kKpbiv7wsUacEwWPzjbmwXVibARYFxnziKiSD5pRhgpAgH5qjSBhsKoQFhqytg4ZX9BE5qgCqiqyGSLVqee",
  "key21": "5CK372jMq8rs6fNFPzrCe6KFwJXUY6LZK9qyrwkmfs3RY8unqbr4MKVBKi45Zh3tLGNZNUfaV4o5EfSJwdie3DUn",
  "key22": "PQpvEDShi3Tp2jQE9pjDQWcfWatZwkAHYsfDzcM18SCagXaSzkUbkutU5vTscRDn2LDytvETPgtW8UyJq8u1Uqv",
  "key23": "dKHftygTXWXDAvWFQDkDFd5guKHJH34xwGQnGirhBkYxLRjAvu3DmNnPnbKyZ2jsHNy6Arg5hjLFtuXNEjTUYPH",
  "key24": "3iXwbiSNy1XgnQnkV7JFPf8AhDB2FYEUGkRXt8Z9CVupUgWjXv7dEFGbmkDziL8MFjdugauvSUm8HcihewETk2WW",
  "key25": "3g6cuuxGmxuA4JqS796qjAB6wNRfavkMSBeseW6o93QjW4LuEmZ2mtPHf8B5TP7yZjhgWh7jezL2fw81WiUFG7cj",
  "key26": "McY1z5komsRYysRQfdDGAhcdg8ZZ4X8r4dqh2aCBsX7Vz4kHXDQHbb8UY7AeQJR7wo1uud32RGEo8V3kdaAcNQg",
  "key27": "5DiHAu467mqNoAdzhgeURdvgPNtgo1A7H83PWqHc1hE5X4KNJQCatB1Tf8qNn3QpGn5pfLASvPnbBGnUjMbkZ4Qg",
  "key28": "26nTrrFJhXvRMeH3tHUsrRbtCr5B9YKuMCGc1iA1bjrirw2EA9XfvkdKUTfW1tLGgbEt5DqtMtndErifduuuoYt9",
  "key29": "JfxdA2mff94s9aLcMZb8nS6co6n9kUZQ8Bie4M2Xc41sTuBSfpA2XfwhKBSEyUyMqFVb4B1UsXxdRw7UoUbXapQ"
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
