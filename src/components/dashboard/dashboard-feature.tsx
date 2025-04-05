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
    "5HzYXwupmqh9cwco5uRCLa8xYZT5GSFnJ4gw7Wz3dr1jdnTmQgwN6ZPhMEKkww5QuAEh6s2u7cDEhcUD2TbuaPbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eVgvRJjqGrhi4Gi8RfdJRgLzrwHweu6782jzmtKeCKduBwN6eENCEUL91wxmMvBcThVQC3muECheW14Ls719y6q",
  "key1": "2dJ1ygy2tMXnMzNhxQEkNqQijthxRSq9894h5oBRd8M5Pz8MxisFJapPZjL3kj6xLgnp2SabXBuLuoxZ7yWV5ky6",
  "key2": "3ERC9xVknzRi9qqGTjg4fR5pwUv4iyFYMCf6FwMY6kr6Di3epb9nLRTMhdb1v1Wpo6wNYqfxcEam48itwYDscA9o",
  "key3": "5zaWFxzrL1Ad1Kx4HdRJxT2nSPr5guuafiX8zU2pa1Mf5tHSTdMro3Ux6vXMGGysGPDS9GjZrLZvb7pDm6cEVnNm",
  "key4": "64StpVWygf6rteWgdydGVgmsEsTJu3QV2c4uHA3HZNjkDzXBq6xdDr8KHkhLhqfqYB348SkfjRqzVyr9kWSAtWmQ",
  "key5": "2RszNN1PajR3zQqzk4jj52DYLD27kox4z16Xg5bF4rSdvzN8aFJmi8i3gPZ1T8eFhrBAE4CHQcnBSaRq9qSaajuw",
  "key6": "5UgF4CarDXTZQxBDHjkGMY7NiA8ZZ1sAKRmKzQjrXjjxkHZUeDKUDwmeP5USeMj6nQXRJwDyZn7iHZE89sRKgGP",
  "key7": "2wkmcuDbd9JAapQGpEZTPrKqswXi8mAuXD5A9YBWvm7PzC32u98Xb57bPVL4vrcZNpgAMZGhHgWhgfzCPgcmJGBH",
  "key8": "4PuSBGqgtXnJCatN8HVwaPgG4sL9Jss5EKvj6bagK9SqBEoChLkg5nqHYe6Ramwqa7ot7fiBRDYRhb3dyUyRQaJk",
  "key9": "2mL4dGxtYLSQ9t3623twGfdSDWdawaKh9SPnXdcQ1WegGYrCgZJF2U9Jxs9YKviYD4kWTmeD3rrZUBAEK2MRUE8v",
  "key10": "wH8a9rDVt7XQ2ebsvgdwiwFJUqzSYvSu6giimhxgMQTvXAw8C4vSqxhmQgC9LAhUYGAAuf9jxPKh1KTKR6kBkX2",
  "key11": "59kXFiLn1wUucYpfdnxCHpGJAQHzDzohXE4AcoBENuoeYMjKSrQzzLxo3xtEZLnxFatFgc9jeNPvk2gqTZAwrAgg",
  "key12": "3F5tFrjV1UJpVVYNcwbtUBTGS1AgJjPpdKZ3pJdMbQeTAo9LGZ9C45ZrXw6Ngpa5cw3GUJUQCLJ6YSUr5sm3MhqX",
  "key13": "5zXYrNwtehTmUUKLre7HPvuFsFbXbhdLsn1vQi95cH5X2bMaGdX47Tb5PQ5KwptehsyaQ1HPcDQERnxNU7spkMha",
  "key14": "5dvZixGRXuFo2wDxwSMfhst9qMgV7ChHoPQktEPWb79aG59Gnre8B9ERzqGvXdXiwLqr1u2JGjjbPgQu43SQLq9N",
  "key15": "2S34ookfZmNgG6CqkNnU1qgoCcW2yL5DLYP3rnJWoNSD1rsUFUErFRiDeg1GoRfL1mrWCR8pULNnW1Pk4cLwwfAL",
  "key16": "4zvCFps9Cr1jiSJvQL4pnhiGYjvr8xG5k954x2wpPhtxSw4nxpi8D9dNskA5JqFsrmkDSyt3MdLRN3rugVNJjw35",
  "key17": "5EAbxPTgXrkES1uto7jG3F1qp5gpZgjcRGs2wZUYgWr5uktpow6sKTRzErTQjwHJACH1JnGBAMm6nFhRgcEmMtxe",
  "key18": "5XTJiVpZmgTJqbuFJVKx9utkpfaES62dNNG2xCtRikeZTKh2BZMDxVrupevTM4U2NrYiGTfg37H2ZSfLGixEnknM",
  "key19": "5XLD8k4Hb2jD9R4t7TK4nuptCSosUqoqkboNMkKprByZvBpYpkHKnzci3QymDqjBDEah6nghwwdECwNkrLCmPw6G",
  "key20": "c8AuAbmtFQXC8Aqs6SSRkD4TfV277zMwcFWYDxqWS4JziA7CDmiGWeReoVtWwR3yEUtMNEuWUwRw15nFTWhWroe",
  "key21": "4y6NAMsyKQwPo4992SLDx8oBPop42cMXvVgkGiVYdQy837QsKb7L64RksTdFewgGWENiH2AwZcxf8vb8pG1vikby",
  "key22": "55dkMsH4yySThrmikRof8wXK8WvSWkiqMGoeVtj1fZ1RoQSNbUotQ87s7PUXNuMrGaFPkLdmTuyfFvbZCWrVdcgr",
  "key23": "5NfA5yEiEARGMtdCygdQo2mLog9x8UQ3S4HW6hyS2ietbXMQHXN8NNKWc8boT4jo16GWDZvTgjgzZc6CHUMnjY9z",
  "key24": "2th8UAaZtUrVbW3GCRiY8k3zpPdNvoPQ8hDhJYCXUZ1aVa6WGtAVdCGpN4iPeErPrcpqShfzBuUuPf65YUo61iXe"
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
