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
    "3TiLRpmtTuU3gL6ArTYEeWfMffNqm7B3zQkWLn7o1zabS6XnHN6fqCuKyvjEyQ8AMH22A6WHsqgQuTJ2Hx1PRpoR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xq6FDzf9LvuktXzGJGP52UrGr6H2KzgvTG28Eh9NNrMRjyDCCuqApw4vcV1tDB3edUod4fQ8voQ9DeYPhLK8QYz",
  "key1": "63yPSN1ScpdQNW7KdgpxzGyJExgGZPV59JXakmwhZkvG4bvyokFpn12Hh1pt8Xqoswd9vxarcHiWCNu7s9mwPaqL",
  "key2": "2QTXp4hQ9LLDovDvTJBewFRXhx5fH1rNSx8hqzmhuxJ5bGerKGBZyspGwY6AW8FfbMXoUDjv9wdL4JQ8JemsWLu",
  "key3": "4nxzFKi6rdUsxPvdUBnmFy3azEHjrGkFwG36FvPVjbNruk7zot7GDd2JhquB3RBfRtHDg9v3syUB7SSvC6ozsL9i",
  "key4": "2HJrnfBXC6U93LPBwrxYCu4qKcKQ94nV73aYX8bjpXqtdvcqjf2MBcc55r2Bb9n1RN6e9Tqsbh3mLavabcKfkGTn",
  "key5": "3jknC56kyusuH4iKcPdGYd4jQeSmvpKX7Z6W2HNZzRftLviHRZHihReBiZHmkCjqp2UYGdzYbCuZCSVaPNeQrwRB",
  "key6": "3PmZBPgFGVq83QAunbw1TAZi8zi2PBxcWRmYQqTwJmfVQhGB1fUUvyBppZGohApPysLWrbzT6jJaEMxLWUXZFPRX",
  "key7": "4rCpLzUAQfr3WGvRPzLt86ehE9ygeqydLGdGNnj1v2YpWVT1A67HoUzAxGw2AQhytgCqcP7LpX62gXuCeVQebz2b",
  "key8": "5bGEDmjkG8k1G3vY918nfCsucu4gPLKM2PJ5VKurWkdMFdePdg39d2PgV4tPdHvqoaKoJUvP7KdEsjwCBkb5zG2P",
  "key9": "484rZjW9t111Bwz8kbUsyidvG7Eo3FnLj249r865tm6NqtThMiCQf5SK1aeGyQSaVxxipwKZCRgDc2oGhSDaZ6Fm",
  "key10": "5xDoFSv5MW2ToRMQiD1L8cK8naAmFuVWXFxjaNX5hGgWrQUWnku87Se5SkqQyK1KGGARKwEpxqmDYHQVsoPXpdNb",
  "key11": "5ucVhD1jidDmtt64RXZKfv3EkxGUNL3GAshHiWFQdhccuM8nfnu4KRhPhpewNjDxXt7vvm9MfCrJedXPoc3awBB6",
  "key12": "65pmLb9n5mYUJEWqm4CfYBuc3eVUhJN91Qo7MdkPkhrn46BipqK2Lzbajv4eTb2JhH5gFJyZw9cS7Bi9tRpjdmzF",
  "key13": "44zKfsg2oLtQrN8dziXf9oYcMpQtmcYMBnBU9irgzGmLeD3iywQtmSutNG8NSk8TzK8B6uqfrdichtJsu3QTFyub",
  "key14": "2BpdBxN7xNPbvBAwZ5APHKWqSECwFkz4p3yrGGKseaCA1QgH8dkp7qevAPRrzbze1ET2v3zFiXsb2L5P5EViJHFh",
  "key15": "2zsZkBpPKQ31jJENhSMM1dDfhjQBb13W1nGDasNd1mkSYJmKdPr31su1WrEjWtrswhrkSSmi23ueSDhYVUnBu1th",
  "key16": "4Y1rKRsmb5b8p27qUXPdjz9REqL54WmFmk9w23dfnDCW4rRgJ2z9gBzNjZFmbeztLF59EjfwvU3oskw2VV7XvrXo",
  "key17": "2G3yCCUYevtUxausLFE8s1K3rpskmKxbui1RQ6pj1bAnSzwuGybsuWCRDb1YeRJnyZZ3xM36QzpXL3UANHiSNeAo",
  "key18": "3JBxWKNXaujUdqbJyDRQAwN2VTbUhcfEeS4kDX7xJ5yqu6JgjucyBRnRAFg2MdiadXeGQNFbiqm5bnr8scG2JUMi",
  "key19": "29PCb14dFJTstjTqPqoQb4WAmJ82NGsJkcJAqSi9oek9YcMGvuuDjA5SjUU8S8WFMhZFAvomoPp5ADasERW6EsjP",
  "key20": "23n4EiohwTQjZCSU22arWh615ZERP93CynPBzBLZU6xtMrpihvQUJr6U5ziedmQLhVh28MLrJHRsctUVZTsrEsUw",
  "key21": "3E5bFkRdZZoAAwedTymroBjbjFJWDnKwCxwGtspBgQ5DusV95HpzP3qGtpZ5F4eQEusqV5YKqEgdMUeqmRK7anTU",
  "key22": "42KUizbyQzK2W13CCDhD4nbH3FupjurQRziJKvSYdqd7m62i7gHsf4BtHGPmV86SMhAwy6R7buktchnvvzpPWmub",
  "key23": "58zzM4dJPKMEWv95gqinaSo9j2uJeqp39uPHY373fMTeJEKGTsrGYKHPBA2L82YWgt15kDNtpzN1oUdbTqy25b9Z",
  "key24": "4EVAMSKHjjbUt7bJVd6yQyru5ggcorfUDLaQmheLSJ6P7TnRXMnxNU6AEewtJQseNTaaL1wbPhZ9YQyYT3XtBZcz",
  "key25": "3dMzpovfaHBbbESJbUg5aCgTaCYiJapddE6FHJJtmJH4enz6aYBe6u32V8cWjNPD3cu7x7h4yRdq4KghMJDgLYDX",
  "key26": "4WmDvdqEtfRBwXNM1zwMd95rJDiyeKkqRcNrEhAjmkzkXHtxC33kSCsvVXAj4HwLo5BQ7jVdES6kozbyz36794ou",
  "key27": "45ZsTaoB1Y7vWX94g3SGpSh54N5Xg9SDXyuJ1QcCNcVuVLUPzDCVvrg7NZ1n63geArHXkFNLMh9hpRTPRbWKUANj",
  "key28": "41eDj6bY7UzpQHXybxv57VAd2nqhhNMb6p8pC3yWVwgrbZUuuBuponJtFP5ax4xt7XUFRw9hGz32rxmPcS4qfzTo",
  "key29": "KnW6DWbDj5dtjiEVFwBMJPzdXWMBoqYkiPRvzR2iyhLnd4yj8y5cMe87JNWxNGp1ugdhPNiqTzFAKRs13ukWVtx",
  "key30": "3LVZQf1WoL6eyhiHN5CmMrceQyzYAuo6RSkzKGB19Rr4EAABYHXfk3YaJccR227S5VTefi24e5zqYwu2Hae6VaFK",
  "key31": "3aM34fxyrWPAPdLCG9Ry7AvQoejoaaBBWaU1VxhRRauhNH9BcpEXGC7QLwuCSGmeVcD8wwVtUC1bsMHgnPp8u8fc",
  "key32": "2K4VhXjPQcedDoh89ZTsyAtvsEBwSTFEEqk1qsBWfmMXk64NMkdQ5vzDuzWHXke74YaPTG7wzFQwDQZRtsUTrJp6",
  "key33": "5GzU1uz5FUZKucJ3Xd3w4Ghabz2eE8Lgz2Nrz3WwMx1m2CY9u56Nph2Dj86djrgtLDKQVAcLd5Hmzg23N4KN78QM",
  "key34": "MCudChxQWtSvbKDWH7Gmi51mP5kTU9hUwe9FrJNd9XsYu84ky2umwQrW4kSpNTMGotMGEZvD8HfXrvbSXWgj2VS"
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
