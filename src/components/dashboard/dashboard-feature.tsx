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
    "hswh33qSUPHqF6gXR1DkxBAqtkeWQdeFzQtLbiUCXyFhEoo7aa7hBQUYBjyfinujrp5YrcVaCmsuQP7RhzemEiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMSTpedZwb1DbNcTx9AMZu3DK719Km4nU85naypodtUT1qzJTGmQBjY1tceWok8NgVzTt9y2xXshWPMh5nrNAP6",
  "key1": "2wkhvt6TbjUBxAf7WLZASwovBAAvW2Ybbd1Xq4JRUrHannBkUy7rAwjV6PFtkscSQSmHjuoPVjQuP7XeDiVoh9EG",
  "key2": "2NLiArxroSfgN8eietaLH6q4zeHhCBRvMKrJ6pYMEpC83b5bJmuoYNCUkvmi6ovqiH5W7xUHHHKLPfpa3cfqS5Fh",
  "key3": "3hQ6TTXdkMCJy1qs1saYYFtrsnKXVk26nuBwQ8bSFJEj6DhZHRTUHY2TLMXphcww9LL1fnh8Vy7GmNRBQT3jEZiW",
  "key4": "3QieSQ8Hcho3ef9isECU6XAquvZvbW1KDRQQTq1J2v1FuGVwn8Qj3nYe7KX2kARrVQEMZMbqJvcMDgVve6N7KtEq",
  "key5": "2WazyQ5cmLVQQnmPhT8jXx2TLRBdfHE4fwg6gHu9Marj6of7YCPrLgy38TYkgJANrbNeXsisLmM4ydwizkGstnuR",
  "key6": "iu5z9eLCsKCxsoQXKuUeqeZqqZcDb9fdTJxhRW83zrvmpktTyFkHykqFLXyGdcWffJoUZYrni9XeNvd6AZ1jdt6",
  "key7": "4basKmCPSb3RENdzmVyfkTdgfje63fsC9bTWCWAFdmf9x4rekUKrhCwYZnth7uXjK3jP2R7MkQXfnMqiB7EgpWVu",
  "key8": "3mhvJYxYGBFQWxXqb595Ay7d8GZZuJzrk9usL8uYV4wPf1uPqupPnG2JHrhYHNLyrcDX2jUf3dqN95jzTLR3bTYJ",
  "key9": "4NwS9AuetdmYqNs6bFRdnVjzdxVRYK3yUSuAp6LHWT4s2rxoyg27u11XTqgZtzhXTSwCRQjJ5ZEgEQEAZsEqGhB9",
  "key10": "5GZPvWeyQmS9MffK12p2iarXDjDYrGvGcywDfvUBLu3Jzb2eBFCZDjrQRmAT7D7Sgbs8ixeR9yms6nGrYd95TtUC",
  "key11": "4DhzVF5LYhAcmGgEgCMmrYUUXMB7nUqGpwZpNRw3JFCaVVmExKoQhRRxHfYNqyMLJuTEQFeS3VhSpjZxKYbwC2rK",
  "key12": "4eUkX93GG57Y4H4xrYmv63VGC664Eyqy3n4JzeX9DRMXwNYohH8QPuvB3fRQWHa8GiAVTdyJF5zetANezYY8EdTw",
  "key13": "5BiKngJRvGiSQQjLWVYuvhPgQg2xJ7zY3RR7CMZeuME8rtDdiGbYuzGYGRVdfksqjzYEWTSShamXSDvQrNFf958D",
  "key14": "q5dURs3CjfMDatdzwd9xdJisVUUQkspcHG85te6sW7vqrveKpS9KfRkZa4SQVZrfjH4Q5zBhd77Wi3JZD6WkZ2Q",
  "key15": "2SeN2UMKJ5NeQ2H7LvUzbGAum8Y9PszySg1HVgFG6GuEV6VJ69JU8Gj6tF5kkc21cbM7qGbg4xUhCtKYhJRB38bE",
  "key16": "2PZhe4vTLrcLVbU1M7XxsD59RnJaJZWykbbDHypJhigEBnGUFnvYjBe65dvxgGQtPR8zQj7dqNtgqA7MWNthpbEy",
  "key17": "4GfZy5YV5UXHpR65vsdTwJHjmYozq3bg77UuYRyzaPn7y9znu68ZtBu3xoPPjsPoqK3d619EyhMBPudhsB1zFNS9",
  "key18": "5GJ5PHmXvC9gLaPCayfD8yjGgsmxQswv5NbgAtUWnxJMWCDJaC383mdWsFmR24JvdNSiqBPmXaK2Bd4nG5PzR94s",
  "key19": "Gopn1UWxBF8yaymWBonaDuSvq7wLzpV58qUx3g754tcpAgsX17Nrmt4Xvu5STS1w6jbmKstpG6f514EFvhnxWyh",
  "key20": "54nrtRX2Bn1fp8nRfqiAfSKUocy6ViAmG9NuckPr6KGfM7LwVVNdYbFHAj7Z4vL4ExXxEAjZmtSZjjZTHf3ppj1d",
  "key21": "246zfg1FUwxuygPPzP6XQ7HutCZrbAuFa6qS5EeC4ShmMK7bPfTxFFU77BzjPqTM7kfbqRWQ1CgTJ6uovpjErzWx",
  "key22": "Pj21ETfyMTVs16Gk4Kdk9Kimb4WHh5tjVMrp2dnNpeeZ8YD8TvphU4MrPX27khuZfhEmQq2MkNvbwvA7n5Ksddg",
  "key23": "2Q7TRrtgArMWbV1MiUg7AL4d4d3e16xx4s2rZ59t8iKyzvbZ2yqEdNsAPdfHh8re9r8deWoRK2dHv4i1xreRw9Fp",
  "key24": "2E2UWDqDKKnVHx5Cp53xEEgKVkrgogza8Cd6suzMPsh22LwtcXujFvnb7wGme1vGmtk4ENT3wT8EWnnsHg26wYo5",
  "key25": "2tLytbmJXRDhBQUzFdjtG1rDp43Zidfrd7ZVbFhaprDmLuqJDXDXLd2XV87TfE1evPnwh7ZXruRV9a47h3iriPhZ",
  "key26": "285bmkJrZFAJcCSGB2mvnvz7NCsquDZvsCofN5K1LimuEEKGcTito163cbbgPhzyXmK1tZZt5PWp3UbXRgZzSdRw",
  "key27": "35KgmMWmxdnCKfQfjrBqBSUxg7SzUkyo3zauK5kLt5QwYWcU8K55b315WPFBPQsqVUyGaDWm4X4V2W3gi8ZWGtrM",
  "key28": "4s5d99S4TUiHSSKGAmpCuuq3LC8UNi8fMWjzU7qnDxTTjxEmUxTxjM7wxx4ZQ64oQehEtJ3Sd7fB49jZRw4Qn9WT",
  "key29": "126ZTP2YkYfjxXTNnQqGyJPdgBafPFC8VDAPYtnnW1vetxFpPFa8yEtvUpj4ygorACoixJtibhBT9yJtvFLAhuK8",
  "key30": "513eW3zeHrpiiygU5J1FAEXm3RAPGtsnUGu8xgmSK2cGuLAbrxJSeWibUz2eR5QmXVATRwwY3ww3BvTwv6W7rYAc",
  "key31": "2sWjZE1ceEt5xUm5Zs24w6bdL82YaBQUMJA5GhdzwGTmJC6dVvMQxKGj4HcRRUdwVD4XJvod6HFaVBefRtDD6y1f"
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
