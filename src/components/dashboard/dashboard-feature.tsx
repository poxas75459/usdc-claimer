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
    "2Pii3mtJuyXu39ARrXcfrtyNT1gSBBqDboAUXPqXGe9hqDUKnrvBTE9Uh6iASmz3vDWnqLVcY5wXBeWvLejDPwsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hk1Pbh7hGQE4uW1dcoWbF3LrLKBpFWgFcp1fqYaB5pctNxfLjrekV118MoXH2FZuEML3YB13Q4gn7L8xqp6CX2",
  "key1": "2GQNt4NRJAN4pTuXczvmr2t31HzxfFStfzUc3bZvot7d3g7MJas9ePTa8CDAmx28yGyemoBoSSAAL9FqTrsY37Hs",
  "key2": "3TL5JxnXu177116cCKr4kkC17Lh1rF9nHkp3xhhH9XMC9Yrf8DDjVQekqD8D7gxXbKGa36NNd11tJxr6sE66vcWH",
  "key3": "bPgUMuDKpdFXNcvi2i2D25GsZxRCzBgeJ4D1tJccnPxMLYrftdRwsfSp1JnPufkbpe1pw1N17miYRARpA9mbjAd",
  "key4": "GF7SySYsM1nLL6ZK1p7utywuCkgSFjoqsFPChMN3kXSehdoTvqSmyJDPCb8775ai6VE4RzZLCzWNzA5yJ1j3FRa",
  "key5": "ihuuy5APDnSaS8AFPE7NsK1Mzi2R6DJiXP6ciJGXSBE6CkgyjnxzHcWH6ep2QFG4BwNH63YD7WieyN5RZtw2NNG",
  "key6": "4Gy9twgHzUcnFRCcjZ1PGm2RnFN83o9UoHWvE3ePW4P2YLJGwuHsxXQqAMBAcf99Fmdi15Puk7BFhZTXr7YRzwYz",
  "key7": "4QfCXKHErLHH8Eo8CMuGP6n8yBBZGFx72F74CxhejqSzoAKNurry9xWVzz63eN5QQpCCr2RjGS8z1LcokTAKV5d9",
  "key8": "5btkHSc9ZUYXxKAwfSunr48WjeEw28ZpCPRyZLKeFL4GZvDZKTg6uPqQvdLGqpFEoLwxf4Kyq9qstXse6U3cvAwR",
  "key9": "39dpexU6kgRYPXkx8Ye1YGcbsuuGetqBkKdtaK4pNhoWymaFGRePg61HQ9p8qPPPZwn9NW5LnrPyApvqc38FSoSQ",
  "key10": "5MN1X2pC3dgtgtGGphDLc1WWUbrgqSWxNS8ycdoWPibLDS6vX4yWE2p8jPimn7xLxgPXsVi4oa1qoHQe7cn9fcyU",
  "key11": "4qg7rauovRbyRrxsUuyfUS3VuZgHehW4EbZ7hdDEiAGREDENNJw3tBi3SXC9QifQyCS46AfPMFoVbJQLV8mbXWKN",
  "key12": "jdWRm2eNBx9YnCMjyB8WHHYsthyQASwSAjMKThtvSUypmY4jQ8gbioonztPLbywSxHzLzNN2NiezU6KK3yrtv8k",
  "key13": "5mXjn9B2RFbQEtbpGb4Rgx74QuFjJKnMA4barVn5eT9bYN9Xe6F2oHMW2nMSV3yTaQDZRkUnEAD8uU8JYppPCXcx",
  "key14": "2wwNbkcDLeGNhU6zSDitLR8LzRJEhygRDwML5A6qoPUAXKsVyrpjsCrjGF3n8HTRB7niwAD3P4XwQx3Jqdm9qGVL",
  "key15": "29NrVtmJXVtoXMADK5YFruzgaC8QZeVikfsncDP7JqPbf84a8joVAUz5ZeuKNNVkhbQhLAxz3RTD9ScRNobM1QBZ",
  "key16": "2Qz2wP493ww7yNrzgVkMeRPW6NFAjRcjdmG7C9a97mvtmW35Pyk7s9vahnLceLDkqDxRmsppVG9msVrx4oh99vBk",
  "key17": "3DNQxFHT7FmexZMyjjNSeLtUuU5pogDAgz2AxA64BgaMczmvxmkrs9a73Xr7dxgr1CEEKX1dNwBWHJyB6UKCiUu6",
  "key18": "4LdxHkGB9oht12Mf5h53Ee81YzTnxUzQLjXJXELGSAjeWSPjeHkHBKgyMYFinbc2f1o3kTzw151YVFLjcJyYs9mt",
  "key19": "2b4hxYrMs9czNTDJiMA6WCjwhVDD9tgYXezPJsPia6bhwQdQsdkYQSGmJPaGZ6XxqCD8KTTvorV44gt4Xd1JnyV1",
  "key20": "3FeLc5Ai2UMjgFmA5qZZH7bZbH9LojPHdoX3pP3T6oBZsUPHCUpUZvA2c5LVG84ZeVcMKfPytxzNJRirELT8NN9H",
  "key21": "5QPJwL61j1aWyFj9TL1vsUvmB2Dom5wBM2ED8hsBh5Wn6jLESiMEAkn34k9JZy9e7aM5MZw2PBeEVERjBSGu2BHQ",
  "key22": "2ZwUQ779z4gTP78QfwmN76syTEhyxJW2GqMXZN1KcUpjZ79oe9GsCqP7pCzVbHz1m42NX9gYyTuYP9hpwdDvuVzj",
  "key23": "2ujGaZ7aaB3ZofrV4iXjWGXVTiDkHxPU4adidAVdTVkwnpF9cB95KY4oTVJpEVXVGCtdqTqYNpC9cnZ7GQEptUMS",
  "key24": "3vYLLhdEYq15UxfDjDoU9JcgN7M87pVgLFzDercSYFM7SHpuqEReuKEuY4HzejVths6wP6jxVg3pHka3YFoj8ps2",
  "key25": "2yqQUzECBzGY1D1MZ8V2TY9iipV2PRaTarnFNJXqz5RWQUs1pq8sU7GB8sctMQ1bJqhztnu8NNd4BfJ8PWgxxo5C"
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
