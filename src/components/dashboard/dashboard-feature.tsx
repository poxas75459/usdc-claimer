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
    "LwiDWREYhRLRNmP8PbAJCsvWJMHWkF5sYniYuz4QZs9A9gvHdnsLhr1bqA7YrNDTrBDR8XVDw72kCZUNRzcHFua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TBScMdmD4pWXna5p7HuvLabuBLUi98QrdaPR3CamY9PqTkdd42ZfSjgkCxEJ2qGaC3kC7bE6HzFmXWppCrEtUoc",
  "key1": "5hHmkcWvtHcmDzCxvxtppyxLdL4HFcQJKJqdRbjKebZ2QzQB5LsgV3vUmwLesunHknvon6gQLML4k8hh1Q9BGpL9",
  "key2": "4NpH6e339jL3Z7yMdWGdiPnVRj7FdsqnEgPF4zv6zUihkDUXFLChGt9PRLNsDyndxXdJwoBNuGL5M8JhamEnYVt3",
  "key3": "shfuf7e94U8Qp7NFDywhUomDTcX6dQ7X5vuCdGmNTUAVAaftsjXgE3m6zQstzS9BXHJLbMqHrX4ufWtFG3iK21b",
  "key4": "2wJqUyzJj6exWG9HM5QrcgmHUjpmaZVTTU5xHfvviqPCwzriCmRsVZHQFQ7whmFr9sodJYXXd5VjxkeqBfJfpi6h",
  "key5": "59KWoQfSVJheqESANF8UMKaGjUnEeWyiFYJwUD6i7dxLPnqLs9rj2a2NrViZpE4Z7EBQ9yJckvPcdzbAveCqbcGA",
  "key6": "5KU3QB3HDRL3a7t8TTri8nDjfpRRh1N3Ke8szbaZADt9oCjtzahJMYxDcyypVeZXVUzoMDqR2pcbeqmNLV3sbChR",
  "key7": "3WYdEKDmZx7t8buMcyzsVhNYUHN35GqSpD7ZQfJCTdF9tE6B8w5Dz4gXX8N1gCr9QiuSLe2JnmqLFEB2tc6dqCk5",
  "key8": "BHHSZRrAWTJMCTMWHP2F8FtCKnS1JTRJsLkBWf9u7KPCxHR2xV135HoY9SgZbeM8wMc3NJxZnritLTJnoE5UySC",
  "key9": "2HMaCXDVjdHCRMNSZiRSt1N6wtueoeSeLiw4gmHbRktcgCBsSh8vQZUdvcCyKFwRyBvFcghCY1gNfb8aZHzx8PCZ",
  "key10": "HBmGyBLTWg7SaQkk2zfuJgKS4oSEtMwKfkB6avuoMH9SZ1n4ejKaKvRWee2KbhteWcVtgSQURCvwp1mTExUdgZY",
  "key11": "32CwkURz8nzhK1GxA5KsxkLoJYXSjSRAm4AMjpZUhGbaBkMPibNZ1XWubgPnGRowXF65kanvJ2PQDtYbC1pAbnBk",
  "key12": "3YSAb5dR8LMNd2fGaPP25PAnfEcff8kb8ShKsmusYJtDKkKsVg7iLjM5hzPKozmzQihk9a6B4rPAN7HhBxCWkXsx",
  "key13": "2p8e4a5BQzU7j2kVcLndCvvCnHNhdoiZnhRbAiCg3kbKuN9ffTzWkGTNMj4szXgoTw37MYyEx4TESBoDCwHyDrmy",
  "key14": "5rBkhdrEg9SVxN9WqgajaBTGXG1rReBjtKkq3XSVobfz1z5uSJf6GMcsd3Cz7uVEgo4vq4SakVHd51tGS93aDKd5",
  "key15": "5dpAx18yXRygacLNTgqDPpjsUsJLPbh1bBzpaj9jtZ7snRyf2pB6w7Cds3mpS1f1TNz2yntZfzKQM89J4kAXNFro",
  "key16": "4hZXUqStrBDE1trin6pvYMB8xyabrzxMBA8QejGrFmM6wukivpB9yzaCWmoTG2QygxbgXRMCCE1vcay9XQ9bUbhz",
  "key17": "K6BwF7EiqD7NXnnacedevWCEJKjf7cxKdKbXGz6TPK8GBViUYdhTrAJSwH5S4G11sGMUsZJ1zCLJVE97gZjK8rN",
  "key18": "3wUMZWouKZaH6m86UAcvKqQWj7DpMSw6QufJdwMgJxsxZGghPoo5TcQEpP2FWC24eifKKPR5puiZsJFnfG1yME1m",
  "key19": "32DpHfuXpfhJUpi9GD3hcpRHYgt4XK6CBCZJDvBZG1J1CwvJFp5MUm2mwrBPZdPpi5FT2w4zDXUxbeBz5tPbg3Xt",
  "key20": "2wvgNWyy4M2DVHzTEPNu6WTRLEbDGzYgm3PaSS8xs7R16hQo6UfADzXkiAnpCGjpQjxDEehF7SUDo6WioZ6cchAs",
  "key21": "29aizM63u6CMHtn3sKo7sKXKHnamxhmstxhwPVfj68Xj2rDVd1vTruZW4SC6HMWfAn212HXzAc1oFCmpd3mDqZu2",
  "key22": "5u6YSJnSDDsLmNHrnBoyfSKTTsKtoE7aVVgC32qCsusvy2waWAzTv4FzfRbnxPGEJbP7U6pGoLjxBprfyyJxWGLB",
  "key23": "3TkVZ7gwwdg8raBXSsWwC4X6GQWStsYW3eosQmJRBNmBxMHMsZP3puFWHRdpnfb5L8gywixPcLJxMNHEBVRnK6Jo",
  "key24": "yozDHdbsGZcVH7YRQzCkZi4Dj4hWZdVD8YnWHcJSzbuNuWkJcxKS5nznyYNLwXwvZZe5X5CyQZKB7twSg9UCB7f",
  "key25": "pFXWAWP67yNgugDpacKCPzvqD6pMTe26N4Yv5AadgLHcRnSjK6m9bN8fDFAa8P3HVsxH5fsxt61pUzMhuFRSxtV",
  "key26": "4gcTGwy4AvPhynG9MZr5GQBPs7L8JwuPwa7TCYPqYZPPGoVgShTY63eNPqhVQWdZ6q12rJGzmGEEqQqGUn2gSzTP",
  "key27": "38YM2wdCYovugavHmcGuLvZw8Z5goYHMz2YjNfSrqioqhj9CVDkUu7dBbaFtsNVAYQyT8QVLS5strinFPNM1yT7t",
  "key28": "4u4KA7VuZqBV9uZFN6LYX9JLheuaS3trc7W2261Q6vLmiG688kM5qw1Ys4WK5rfTcGdgEH77FV7A7WjwrHxCmEa5",
  "key29": "kiiP9JmczYHKywJubmSWZqoKqyg9D1kd5n9kUPLDTqy2YVekzh7cqHxpw4xwbQn3y2bVNJBCqWprmviBN9vd8wF",
  "key30": "3cUVV7QpZ5GhAoscxPoL8c62bLH4vGSADZ3cixr4uDtAuLnfjF3NPwuRer72uyMy5mHt4LMzaRngmceoqfB7CyVF",
  "key31": "2VUChSjXJPtuBTwAXMNg5SGZndKbpK6qNdYGGkhjqX5Yjtgu9cec2xGCyMdGGRtVJSpPGxS31XMn9WRmAqfTWjKC",
  "key32": "5LfEL2brNqitBRBHS9D6VNLyQZFHV2BFkmh4XhfMU7ed8enNctWzdBrJP93ssBTZtMXStqG8DZYqFda7yY2Sni6v",
  "key33": "nE9yteioeiCxWyrWewtqVGtN3sXgmUQEsXVWWich2sYPQnFLQxp2f9Bz64HtBwUeC1Woz1KBTCJkvPCYsTkYkSR",
  "key34": "2KMt1NAerv8ZsXCFnsu1qChuk5aecbWr4QjSPRp8ANMsLoCpi3kfVy2P7T7D7BLqjWtQPi12fSU4VJfneJ3Ri8y3",
  "key35": "3NEmjS3QT26PUgZ18Riu9t3B4UwB3RzUUrhNCbgHJC9zAHbihumAvmvnpRTToEQ6XFk2kWs8efJnexKGq1VeX69B",
  "key36": "Z7uGvBPsxQTCUQ1V8uvqMaWmz1hLuhcp1xzBxYsXFrBUbbiy3bxcVqxmQNCkNirJ9CEfBCR3ki3zjApCnEa4zxc",
  "key37": "3PhwxSD17KEexaA7foxML2QkJ63LBJ8srX9gAYxzXaKEKqJRm5aRWyWz4BbwnoE8KnifNYGxcXps56gpSXRAP3tp",
  "key38": "4Fc2NT7auqJDiWdCurA6CsPGR8wYvmuthVcXGSuxwQcGKzyMXsj7oTTVGEHuycqFzmBNyhzYeXNwLXhmVF93SUU4",
  "key39": "2mAm86eSaW9ijd69iS96WfKEMKRGzr5McgvNVZU7sTFQWpgFGW6u1UxJ9Kn5bCmuLhPynfYJpjcz4C8iGSwVW3w8",
  "key40": "2uk7K6ieWLp2V7YHn428AEJfTdeEQgcHDBpKHAfLCxwKk3uhc2WJsfKdxS8ftKyikoF7ZHzN246q1axDwvEGnnt3",
  "key41": "5etPy4BmbH4SdpJS1EAKvszh3E7uidXwRqwtYV67KFjshvA8oJPHsA4mg9VnkZzgVyuuMbKcv8PxSDjYWE1BMAPw",
  "key42": "2DdhnZGW7AvExEwb7nqBWkGUU1dEj4fZSZ8EqhDGyWB6RJyNZAW5dsDy2828ULEM11qCUDhRtNrXpHmXZuoqKU4D",
  "key43": "58853TESyi64hZfgAfG6fjFvtYemAN2zmjNsKz4kCWuXS7URvohaHrF8GpbgHE2RHwrdpsikP5q25QPqq121p2yD",
  "key44": "FUTsqKwgBVuLmouxy8oNhDMg4uRfA3qP4MrMgPLDy5Lz1ds6yyoNsESSFFo9a67fMzwsXivF5J5QuPoqgPw9ZHb",
  "key45": "5EpZH2PYBqKLueG9q6mFetQjrhAdUnoxnKoptKjECMRumdBbmGr4hhHrCnW59opPBD7J9yAXk1QCcSK5xJ1uy7Rp",
  "key46": "5p3RwGAaLwSSNEpiFStMXxYU7aFD16vd5YnnnryyNuGnyt8XGcopozSTyTnU5PvXTK8D6pA6ubhQzQZPRvyF45NN",
  "key47": "52KC4XZ7mFbf5M34NaodRArt3GD4pvHFjyAWazrgD6qUw8pCsxEapjMEqrPqShQkQbJ6JXk2N24HLvkqsB15SaXo",
  "key48": "261xQHw9Kp5jV88ZSDisyyi5EjPreDvBHFAJhUy7mX4ozLCv4oVpTjMLALBk8xkCWa9MmbnDYLrpkUm4hNdeEpwe"
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
