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
    "4o7oRz8UR8VEQtY3a9y1qhMPwRAD9Gtb2U4zc1gq6Hj4FtgiFW4nkJJLKuPbZ4hbnf6t7E4ygdNxKihtxhfpZGyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JJHiar84soGLG1qDWL1y9KoNcCgWsa9eoKQZ8B2cxWLd28VFox9SgdXiW7gypCsfTkJvM39hBoRezqbdp7ZWn97",
  "key1": "FoLuM2usrGoaiJFt1zhQxZFcemzznvhkt3wfp7CaNjWggGwsLtn1vkEjN2iys5fSnYxRRcVnmQa1X1T9LhYc8WT",
  "key2": "FjawDcX1WA5WhiXNVf795vWiVogHnwXERf835vEuL63GwzCqkCL4hxsJhhxiZJoJyDBfchNhL6PrtAWd9qJNqpn",
  "key3": "foBfp45rLn2f5PHDvC7XNoczP6ovyU4NUtDMsw1iVdfgFZ8mJCtmek5tCnXWDdAAMc3kyJ79sok3wu44aQZjHGV",
  "key4": "53hmnNFTV5aWRuk1KdZtB2vghYasce9Fhk8NbGFN2mbChbnDukpRkEAGpYEg6tP1shr5T4zN7k5UFMPjb4iBJuz2",
  "key5": "5RWrvzDxvvkeEozJzG9Y7kyHzUT9KCiteAth3x2wJLLUSqqrZsUuki5GjNii7ak5ZWdbPyCCpTSVMDqBJ4p8pDGD",
  "key6": "3tGZCg5eaJnwzrQPLrUfj4jEXwNLjuY3ztXSNFZMGaHrfcpemdWoXei2yhfbreE6zC9YC1PmrHw2ZsUyDBNpWbRL",
  "key7": "2ZwMraFTwZfvdFVJsCh4iA2g2aJ6chwmRcWvciv5pLVRS6u5ukbQwwK5mbwZfKFsk6BCtQBZMnydAsnVikRnPTZ1",
  "key8": "pmS4fMj3a6fbkMHuhrhXysDsQ4YBQ6axA3zTGTwXsLyg7h89FdU6apQPjTmdkPevgp6TfxpGvEFwvAQevjNK2mS",
  "key9": "3aobi86mkwimDeviHYSscQiGqzSC2ci7vWbVQjMVuLBQ96qLencVXsRWCAapgLB8WWKAaamsMPBeQaQBmhU3zUNk",
  "key10": "5gP2jngnR7qQc7ZN1su6vrFREfxF5ctW1JBKDNY9Xk2HyJGMNpWnCKWytz7N3kStEct8zdkreaM36rrAcaTTrrfy",
  "key11": "4ZBKCp1bY6DeXejkkTYgHP1QQbq4RjEjUiet92sEY8mzuU7k5DEf3RDZk2Rj9syyNcUJ366DDJ89TXgBsKLRak19",
  "key12": "5yHoiaSZe1r1LaDpqCSE7xvJqJMhYo4kfzdUTih94qcjwT3bb4GvNWDJ4A2mGHQHcG8wHgQXxazHfVFFvieWLiLn",
  "key13": "3QBWnzDdRg9w7wJoJmK3WsoxrZdFMUEg2gFXtoCYvuLnP95yk9jzPSBLGzUATdQaUZKvFtwpkhGs5E6mugXRxxSL",
  "key14": "4MQsRVXvqwyPWW2rUArDAWCuDM5mzThBhGiJn5RGjoeAhc3Us38NNh19bBQD9jZdNV6fUZrrx7EWLVpqP1fKAWns",
  "key15": "2uRwUPWpSRxkiTVBmZHU9qS5Rj8K45frE6kSW93gmuZw3HnGyp9iX1HpgqayHEmg3fEWEnRAVKUZvUDqa8RnWiuF",
  "key16": "2NuPnVg18wLTXAVHjYifeKQfuCKRoDhK5VDwkLtUHFEHewz5BA3bsb9jEHgkCaqYw4UW85JSF1P2mj9xq4zs9hmH",
  "key17": "3fJDYCqU8XrNETsQCBxkzLrceGvuvW3GXXFqThewAXPDuztQEqh7rNVoArhoZcGeMJ5vcEErJ45UgT1DdJ5DXtNp",
  "key18": "3a7pbgLNUyRgL9qKjXxZUFuH9xAyAm15sxnarf1Gkotr5eJfayCG7K8kQpGYjr1tgKxacpVSwqrYregL5Pv86bvp",
  "key19": "63bJ3tCvgvqenHHhm9tP1vzgXNUpgxm3tF5UWTLjtaXdn35vkNQG9M6xerMere2y9g2iycjYzDRXGjG4qeW8cCT6",
  "key20": "28gN4jL2GABtNJ4NswnYagsXdTscUTeasJUypscmUngaxML4pLJeHNTSRRu1rFxqsSumzAVd2qWsjKdTzZyZdGs8",
  "key21": "2iNeHreN9dXAmseqUMNfCqumyHyzMTch86JLhqpdKH8vH6asR7qGMrQrWx5EmCE98ofCLAjvjbYfRjwt7niTPtf",
  "key22": "2ZmthcPthcHtyEsYmrAR5nC7XuYyUwgfGYhMhQxZkseFCaZcZZDVHNgYibopm7fjDHpxWHm5BPu3m1y6jv6MRzfv",
  "key23": "2FQ8GA8HaV3NiS8Kds2TYcZH7uuK1bVWfpRPtZLo61vhHqBcxS4KWqqc8EkmoGMAmi6vFvukczVGhND8gWhBZeYW",
  "key24": "3YksRtFcWKSkk8NuaKxgRMzt1nKHhrzwD7sVtSvAEcWkPgRD2tG6ukzWryFLyqinqdB4uUbc3pG42aHfUKaXbqWt",
  "key25": "CZgXE4K2er3KewuN7aDDMpiQx2yVxLVfgdqD5VDuMzeWZ9Q5WQ8YnhjLxJqCmpud6HFCxrtQydXtANF8MUjmRZe",
  "key26": "5tbLShurX83fptwVGPobumxEqvMVVAwBMfEQDPLEa7fo7x8EbPWj66VREDsQK4Hy7K46ikxAz96T2WA7ta44nt4x",
  "key27": "3j7ChjBUvXyTwVg7dKGy7n7NHc7QgWVAJT7PuGhKfZ4cMRYXDAuyF5V4NDtdgcSTRAPswzY9S4r1qKn5XESbMUWW",
  "key28": "47FCBTHhZ43tpffqQDe3XA3fFUsHnymQ6qvTSmGqBe8YvQewbGYhHQTmtWGMhkh85j2KNDBqReGs2MEYhMzK5tKX",
  "key29": "4QdwWF2B6ZvvB2pW9j6dpu7xkifHxPfmVRW3SmKPWZaX6n4oY7g1irAXrm9XJfTQsczpHuPvKNvuM6wKzh2Mymjd",
  "key30": "312P9q6kaVa5XGZjaJXKBBMgVTphwvnsrDNN9ww6sayZe71s18tng2yNhB3ztQ2jNv3v6dHQHANQsri41Ho3pTpg",
  "key31": "aUE1yihwhMPJt2TMsrr1ZtUEitkqTvDmWn8LP13cGuTqBMDDSAv7nxwEXwJLjvgFYfwQLJhr9q3f6Vrf6gSJ1CR",
  "key32": "5QeH7NNDzetNaY9oLYLNXxf3jRnXBHehgXbc3Gz7fBXDA3NdkCrrnYu1NG9DG7SMQkSLyNUtJrwauayArD6N5bkS"
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
