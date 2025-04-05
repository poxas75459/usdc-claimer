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
    "3sWXZtbNrQsipC3Ac97H6WGJu3a4nce8hfaU36fUkBMj5G4kFSXjKxzncvbRysQbdB9xTeRSM3iN4WikiPUMNbo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJSreH3p8zCdYJqo4VjvqosG5xzSymiXDAk1DW1U12xMbmApNdZWahyvnhGNhzf6rs3xxbpoBY9uca3obqwNvsQ",
  "key1": "3hHD8QUvYhwouseoPCo8QxnDEYdc8J4JH6U9jULxeNw45uWq6jXNoeoaL2F1BrS2V1EwY9yPgXUaa61s9cPQP8eG",
  "key2": "47fUinLPSuGLTADHpEG5a5dVJYhbLMNjYnYCobwqcCjnWucudQiWCMDbXfdz2j1WvJ8FxqySHyfptwQ13aV7TdGB",
  "key3": "3KET8f2w26cNHYKijJ8cqt2csAzitgX6hqcT3nbt1xBXS2Zi2JaM9ScNdDaHh5XdqWFDi7715sZDRAzgnXMGxk1w",
  "key4": "3e3KfDej8tCMCKsF1fRZz5TLwZPzNTQjh3qWoNnuTGArq4j82reVBkRhgghe1AawpGKhBs3oPC9cyiefWL2bsCis",
  "key5": "5L1seWuLFR1hPnToMJbDGkYN4op1N22tZbG7aL7x19pZC7m5Mbvt6btNexqwzBvz1JjrULjM1eutLppoByZap625",
  "key6": "HCCCU2J5N79gq9F4vs3eqiM1zqqNdELtiDv7GHEAZgCErvouMZfgYLtJJgC8fHX1rGnGHHEAy3MfPg5G7bS4RCF",
  "key7": "4zEuoJTR6rXCdhy7ehCcJmXRgsfh82kwqpzaj9ei4nYBBNFd16jhWBxW6x4XfvFGAgTQAb3qh756wtmDBZuq2E7W",
  "key8": "oRR3hXnTa7NDAa6zEod6iKJpJB9xT5246mUJacvE3ihnkaUTiDPgF2iFd8ptSYaZGHwWmxbgMFWro3wmtY2r7pr",
  "key9": "jLhEUv11DT9AAbT4mXFxTCaGRAJ8VdPmVchCddMLLvcs8YPaptaTM8z1kX8Yz6JDR4ZLUSKbJyUGA53uVjrzDTE",
  "key10": "2En2ViTeU4Y936tyPPCmg6TAvkc5hQH4TsBDG43DTkaiBh7AagKfdGiiZweG8sFJcgvNLEQERSTgzkqd8rjwmpYB",
  "key11": "2gUpT3JkkWf2Qdx7Xa3X8jteDLxFY4C4mdEVs3A5RN9waoXG7Rc3RkvcsfD1cxZ5fhJpUNoomvJP52NSAE5e68Hk",
  "key12": "3dn1bdnHUgz4EYRPi2q8ydHXYuPhg9wsFKnBD8DcGf7xPzNEBtYJdMpwUowBNSiqZFkih8pjLiLxKe4zwdL64GNy",
  "key13": "5dfTDGcCx2R6eZVPi4Nwf1RH9iC6RCsv3FGdMJnvpnrXkZZBMQpBUbjhWuQZ1uc6SJWPbacQYWL5tGgRx4uGZA8x",
  "key14": "4iMqGrU1wEV448gSC7vL8kMR9jyrSvb5CWWWXNFduFRT2jDrT5rwaRpfsFvacWqGfBZS7CeVe8XU35cTUBut4UqA",
  "key15": "33SGxAbiYmHCcJCuYn4NMZpHkRLW7aHeKrFWumLu4jYpBccMPsbuQGjpDfTD6nJ3QKCYvscdeisv7Q5nTyQyVTvg",
  "key16": "3JU5dch5MduXf61wwKqkinpocrK8PPpVfCxG76MToyifFwQdF4A7gn5fAJCHND2MWE3R5TNHMmQZ6vRJ1oq1uDNw",
  "key17": "3Tk2BptvqBr2Zh9QoNHXLb7XqktwKwVhaonSzHd3yBY7g8ynZz5umggddbLFJMg3oBsimm1pE4H5geDyhnTKjJxj",
  "key18": "sYHjinc7Fc6ZnFBb5fgJU11VR4EmeDfEeuA8gYVKjaGL6W2Z2p2Hyn8tWMNzTNJbBE2ad7LwRM4MbcpzXcuepZY",
  "key19": "3peXfjrgMQ7ftxsd33hFUpxGyR9uu8A3HvQSrbTtF5bPCCTXAUnr9qX3StzGKTQV5tbuGreQZFyCbsw3gfdemdkt",
  "key20": "wttSoq5Z6LKHC2nsm7Zhnfaxh7TmtS2FDMkmE3XSsKtxdgLzg5HYChdJy4SQDz61aPLoR8GtPcDzzTkYH5qerCH",
  "key21": "2qs8xgxoBXTxc4wkzeAtWs4UDth1KiNU1aLTEGQrZEeqgLEvQJdk9EEvBMMDjUipk7HHx9d9QPxqVjf31dJGb8k3",
  "key22": "2uLYcoGkije8fDRtTwrfvz9uoehMrTge42khJeTtBQ2QPpAqfmqiie5phqAysyLYNuzeDkcJvfGcyCaP1Zgq9XCL",
  "key23": "22UCAAytKo6UPoJViJNNsxqcGZsA9mC9BKNWZWfMfzodViddFYrG7qVYzi5JP526BSSMX5e952DJWKJzULxeD4zL",
  "key24": "46VMf4e19RN7iD3AD2F7ejLfgVt2MaK3RvChhewA19hokMs2FK9fFuSbQv5uWzfjQD2NZkjJwWbo8h6hV5cRqcRr",
  "key25": "3uJ7xE3d6bAY7WybEdQp5MdpK86a8q3xMZiVRGu68Rjg1Q12nv8pZY5oyX4d5ssd4BnDNUkkKcgA1wCP5nngUoqm",
  "key26": "4pNKbkMG7edDzEhcWLtbzdLpij9EXVRni4LL2t3NSTEbdFiGa7HPEVEv3VFSFwREuCYQaXUWmiJXi49ycVY5rwLW",
  "key27": "4ME5dc2LtBrfptguQoW6B8zzEgNwtqieR8acmj7CtWFnzphbkh9bQBrWUVDbEvnLK7warS1eUJc6BtkdM51yMJT",
  "key28": "4Z8amhgegcZ7gTB8Qf6y2wNpHUwuN4kuKyAVaTW1LUZt1A2TapB5bwJjoaaomtwYcML6jJZfPwUYCoxZt8f12wv5",
  "key29": "4HWhzi7ze8CeRHeNa3Zuwx79VsDdEBdUsdRGULRtgcMHg4jSNH3gL1A1kQ4Hghtm5PqUTV8S6bZNuZJw5uqJsjBf",
  "key30": "BfKpjYsXb1icDUpAwQyrVi4FSa8zEoPiRb1ZxycBe81egJjjM28wrv8nSewEVUXJFXKbNhtHypokixqv2S6sExi",
  "key31": "3rfejikNcJrjf45jmLoGVHDugxt6Qp6EucDDCJNMggrHMiBRaLJNmLEk6ZRLVpqwvHwDqqKjLJDsrGANHZwtbcQ3",
  "key32": "3JnmnuQFEcCfvVWJdHxrksVyqYoqpw5x3LVRB8dnBJtXpU4sBKT79MiaoGZKqwGe3mS5vZDJs2dZkt5odoRmQQ6F",
  "key33": "2yWJurkW71HWZrc3qTu1aJ8Bpc78877Lth4ttPqPpmwWJA8JHwiWHeGaDyd4xdNYdAC4VZakfT3DCgpZnM9DcqKH",
  "key34": "2e3LN7Ssm9sKYhHnLjLpzqhjFAKcgkcW3Ez2cqmTg4bFoKh698x7oxUUc4enRkg41eecYbVGAFpPJ8DMJ2Jqmkuk",
  "key35": "3gwQQZM9UbFvKrTjWrNZVd46osq4YZBz8hzjjqpubvQzJyaGUp8axME8cRoTUxKf5WoPmtkMgV7YBi3HgiywesmF",
  "key36": "4ZaoKbMFLvSgMkm2rEDQArQ3bstpC2XgwFRZ6U85a3uggzj7MeKY6er6LGQKed3ZtdqSi4RMU3bdkg5E2F8jjTfM",
  "key37": "61VwoYebZPvFmCoyUExNp9r3hCfpYAGRPAmGzRAKzrHFee9e3GMmia1vrHBW31dh5mUdb7phjWDt21Wz2bHCdR13",
  "key38": "5B7PxqtL2MrSY6ME848Cbj6b1mLAEH7bRxXvm7HDVDs7TUwSHaeAFQhundfPgA5aK57GsF64ragm3Jq8rGdAWoFT",
  "key39": "3RZ96dkkhyA7umMAYvMVpEfsuhPpKhs67nLX6nHYfZEi2KK2FcLcH6GHFQfWxnweuY7NDyZiXFuJtnhbrRhz4HEQ"
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
