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
    "4mVS9SomMfJiKkBBUhYtL5R3TXtLUTh64JTtAzjq6Ti7inXcznbuuAXqmLv2DJitB95jGovsEcyJKAEBwzK4fhjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y8nB3P9fvuYYwEdFRiNCPfx8gKbsG3vjW4drVd2rSAt4nUPm1dE4JmKur7fm4mViZN6BZ4gKPfdq5kAHkwdjD4",
  "key1": "2hjj7nZdq2W8wvc7KmXYByQCRJoMM4jDzatW15aP7HauSLfTNNaAdwRPtbe2RHY8K2VDg31V521cgSuzL7r2QUph",
  "key2": "3qW4GhEKXzyUx3xSM6vfrs2CH25TxiywFiwwtCpF1R435hz7krfaQkci3tSoL5CVetJJSLvbX7WfqxCiRo9AoYG4",
  "key3": "2THBNw1LarQbU85iq7Y5yxMrmaHJf4DcC7kbAp4uSYZSWYswv2A9MEttgFbPBE14YpdLcJXy9ToAAHiBLrSLVT2p",
  "key4": "5yHu1udh3hdxVF1Y9HcCmskqrHsELdAEtjN6MF2Vb11npW6LQfF9U6SFSqwq45jnFwDoe7AdrbZM87Vgj6GPeQ3x",
  "key5": "28vd4E3jFJDA1ctsLDZGukzYK6UFEX5JzfUgnQF1yBKKrKtLHpbKtmDg5WcjEcW2NwVSZsWgHx394vuNFWdV4TsU",
  "key6": "47kv5coxq8AkYjmQLqtrb2B3GByh4cprTAgjcgJ5AftQEbds4tpEhpUs7eAjSaKXTgRsCrGBQAeLhHb5FH1zSdxd",
  "key7": "3YAiNcKs5Q9rvUefTv32VufU7t9QYTmcRaiuNRG5r7uzwpDYzE8rduSRnXwge1oDw7v22gRvEx6p8xZ8hDAkthKi",
  "key8": "3jN6BNnez1rTEbJT4TKyBCu6Mc13HBQrT2Ltsbey7b9CyjArbfnRtxjG2fYLvdZoWKaSPVYUwkuHu5NTLztjbCeN",
  "key9": "ZSTyjhNq2Bpq9E6WmFXCnLkMbtvgdMKbYWiG2VAN3StXuqSQGkRB8BkVhAG4VX4BLPDPrNTnpn7ddrw7cU9CJ9t",
  "key10": "3neYKSRMVMDzExPrFVnfRT4eErz8joPjbXgR7XyTL9d7SSBgrJwLLLyxgz3oMa9sbfoeip2zrYeUXKxTCyvB2p8Y",
  "key11": "648oeBitfykPjw2AqWw4sfg9vmUScfkq7Ma28rP2y1QcTVnrGi4wjLyYrEdcgYP88GkKMxeCq4ECQz2UGwrfwXNn",
  "key12": "y51TNo4Yc94JA6XAiUSPASGbJbvKwaxJcGD9Lj8rzMV9shXuQgxzmFUzHK7aaq5gToH3Zqk56FCBWZAGdUP2EU5",
  "key13": "2d5QF4Ne2Q8JoNCyWd3F8RBAEdgpBSJAyw1EPvKVtKX4LYnNxQck7r66PaayoUPfB9cvrMjrSv6oGTevxUGFW5yy",
  "key14": "2Bp8ogVkdFX2Tftk9kkohxENgGJkKK7RJ6qa7v6Jshvc2R5pGh4xUB6AUpqB9mjZS1HFkY4i2utzuicqV7jmDkHo",
  "key15": "54NsJCMyGjUopxcivaNmDk5xuWsRDkWaLNCsG4dUm3xb8tyLPTQrXNhkgWTC6NmTUyCCrvxgXgFmfsQMQ1ciTB9s",
  "key16": "4c9KEq6CVETtchZ6ayUBoVuqJFZ9PHZCgd5qdLhnKrVD2kJmo33axP5ULzfjc2FrEE9j7i4KwnswmQP7DM2uAXQV",
  "key17": "3jox3a4YAzFTFSsMmBjxQrs8NZV88PEkGkibiW2mZZBvraJJ21aT6CWBZPcQ16troCVRVRS3k9P5nMbq6wcJyVRP",
  "key18": "y9Gr8xgcdWHniUUCiEzN9RHuXQgJ6pPGCW8ditw5VEW2f4YCzFJYgbvXagibLaWKxAwCxH54E43QGLXxeLR9HVw",
  "key19": "2ocz3AxDYJpW1Dh16KVoNnAwBHeXiXQeDB8NPRM7pabmuCPUuThdxzq4P7N7AjLm52D9DfFwTaJLtpQ5yKy9ZSb5",
  "key20": "3QAbd1BzQ1xubg7uyfmKpC3D71CgpYRZRTZKjdttBhRvEW8om6Xwo7Qbe2813H7BD7Y58pUqDe1VczHZkizcsFsN",
  "key21": "4VpckG9CdPdiyg1EuXmTLhpnzipZoKizRT94huaR8K5m8MC1udCpTVTXTSCuf7mgcfGwMV3GACW6wn7rK8G8AFj5",
  "key22": "5WvzH5i3eu2ip35wX3oXevmuEnP8ji9rV7e6SEQg9P4mJHbYAsBUZYs9WGCo3kNCe9tYB5DBRqkiVox3sk8nAfQ4",
  "key23": "39n67ziakeMdeCbqzpWB9qWDtpJkxb2iJzwTJ5pbaGtRfsjEqiD4ZWZ2WdB1CiwGwmqLCoKcwXZ3o2ZWN9N4VA8c",
  "key24": "3UNo8Z58dUCRhjxTtUqWQkbUHNvvbHxRzRKfZFxasGskdiu9Z3c1GpnPfkU3rqGqnSXfKSgH43pu7jAcgJHWos4J",
  "key25": "3XRTf3HfjzN8h51NfzBFH11rJf2dXDMZYEqKfc1N3KrKks8Eb9WfgdXj3GHTugGgB1tbMYSZCTUkdq1UXsZKtPqw",
  "key26": "5D2PHpab7BfbjhVhizncUWhtTm3dk6xG9Ctt1n52dyo2Q1jZ59916uQq9uzcTNoktPSCzFxz42qp27JBXrrnPgK5",
  "key27": "QEAQUDYr2DhrFUYUBta1aHftMkpTb6v7BU3mqju9ZJJvH1ZvnVzixJyBbmm5M1DBGxqBTWeuZfsh7cCwFF7opC6",
  "key28": "59HMCSzsNKm1PU82h8cqBv9nkMCc6x2wYgnkXstdvFfw1Zmoe8z2gNVYUjnMBjVfASCid7qNQEeQ1TNfDQD8d2Ym",
  "key29": "2aYHuftypnQYXKwyorCnZbitNusSCUrQHgVeLTFAQ4Wt7cjPQ5FrHo6kCKBAbrRphvYkN9HFw5CivbNmgTdiHumT",
  "key30": "nPQRRZdstXZZ5VqpSJ6Z5UwnC6xGgunaiafwreEscaD8rbwAtVYgtPQU898bkx4NouezuMfZQ8EBzW3fGN6UN7a",
  "key31": "s1yAJsXHcs4vatSzsVxHB1YnhvpKMkwwuLYzUynKrj5Srs4LnuYgjsR6qoCYPHnKoKFbUFa3kUqLBwTk24DgAXD"
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
