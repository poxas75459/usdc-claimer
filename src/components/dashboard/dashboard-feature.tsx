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
    "1vbuuCZH87fFTjUDZCgugnBSShbsyucAMdmsQaa31bF5JbBWaHqvdpBLXdH3TYuttkXTF5UjHcH3THxS45x3Wqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eGQc3BLkzFyB2DzDcoDGjpNMxh6Ndw8rAr9Mb18S7dSeE8jQLNiNCSuCn6mvWBLG8z23oTBUn8HKonzVnFmhUHt",
  "key1": "2JouyJN4bxzkagbmotZxphyr8PpXL5ecYf8QafQZitZUtrD64MKJEoey6zMtQhxQS7nTiJLbTTBn8GrkAvt2yR92",
  "key2": "4vfQQuQSvAsTQiiFeFHFhkjJ48S99VnQPMH9SvhTbeftwDc9PXnk9JvvWeJSBvk8AVbHvrVru9JkChd57hBD7MR2",
  "key3": "2j4QVPT1R6aPvjKExCaf7WDRza3sQZDVsvHdeUp4uYyvHRZoeoD1Qf4FG6EY2WSJvj42EssDG8XNYhnPeh4kPuWf",
  "key4": "5k24dE9TMhvMNDAECqQ4JY5H3zkr3odoPznp4wKqyyceTiLmPMC56j9Kyd3hMHLBsHAShtHDVaSsjDX6eWrPEinq",
  "key5": "q4RfRcvXG3LwwDYkPinJgWfNmthzovZCZfCSavqSkx55viXLiojeYf3YVyXtob8ox1ZjUTx7t1CsSGJMJuueKp6",
  "key6": "3kV2WP5EBubrvofMGgbBp5w3EhnSGq9joMe3EGdE4yARdCP1fA683WJ4VQ2o7eUvmVQbQCpFDtbFFdm5y7Sbq1n",
  "key7": "5aJ8gboHg4kPmwMHhzEtKpB4nTtvjtvqjgNixD8rzaAVv7kfyUjmkcVxb2jJ2M8mXicqnqsMc56MFMLiusAyqWn2",
  "key8": "L6jnuZki5orHa5zsj2AbiLPKKG3iLjGXNxe4wyxzzwtwJ4iL9RdFoaGrQGYqrPE7mTDej5ibGXPCfh9QVjFTgd2",
  "key9": "4jHxyPVEbQpHaYvXen1yYn2rLWBvhXPcv8QMASMYKC9tFNiLhCzV5yMhiUgjUmxmdnPyixyecShGY6Ezd8GycjhZ",
  "key10": "2Fi7vzJFPvA4kZTA2LTWpQxxUgBpy81y5nsQX1GWgSRFQnATjee99xRmyxzSTdiBW733W3jgWDu8FZrYG3GBpRpo",
  "key11": "mrbjyzVxMc773Ae3ZEhG4LENt4Vp4cgdeZnWtuK79aZJhwEH3LVLEF8ABwu5hGs9weAhaC3z4hyWktMKMcrnRD5",
  "key12": "5okx1fEXydPLQzTFm8PJSU4JSNwMqMmnxVESUMWqv3QxzbvAB3Qk6NjUWcq9jeJnp2uiaazd6w75CS5dK2aK6zCs",
  "key13": "RPDoFSWaFhfX9Qzir5hPWSZ6V1M3GDEMnrAys7uj5cQ3ZmvynLH92bDJHpZGp2fZbts9gjEQLb1ft2KVwGZc8Vs",
  "key14": "4npQEgLfF9L2qmoL61uxPBN8KhHm1h6J6HBJNizSyQrSTHhFy4EQKZtFjK9PHc26T4ZqopGCStziwAq8B8PMobAX",
  "key15": "5haNAdFHyLsXhatFTVNMYbBsZiVPjNp9aJxNSwPH7z31d3rBxN4ABkftSmjhQTp2FQWtqevAao4WYAH37RM4UFc8",
  "key16": "9fJxKb2BxY8pkaKZGmM9dXChgJh1uzA9PtAsnPrCb3eqNpXLz4zAdTQrgSLh6qz3EYgSomvJhBcZUhNQoiS7Y6f",
  "key17": "LfNLLfEHTCS43AstpUH8a4T25JtQVDwaeMr9Mej6dEu4B5VgXjdM9NMpd5k7tkuAw2iVEV98hZ7GrysFGkZcSSK",
  "key18": "4Np92kRz3ksfMWVuWGhRV1HVaJaCMnnooRwkuEY31giTAVUFNHXz6gmZ7MyEgwNpvW47x8CZUu16MbS4s9HAmp5D",
  "key19": "62canHf8Has8TmfsFbESucueaxSBkk1b7rHVqJTxqH9t3kANtKHPkfuQdRXj1DLBixZvk4PJpR7fsm3h4MvKVmXj",
  "key20": "3hykDdu1sGyB5G1Yyy7NzYZrB5N89noJCFrotDn4W46x1iSdzeEdRkeNSQqtdT7VXmtFWSLhTuzdRheby6NumvUN",
  "key21": "53Kr2NgwXZ2QjUDpfsvvx1oPwHpR7NuziaimxmyZGqhKNpteC6XaNy8PzjAgFfrWUUBEX1PUNHAGhCt3wrmRXVBD",
  "key22": "47CK6Y9ASJi6QQVajQBnSq5DsWBP1iUuW97Lstc6MkqxcDck9xSw9KjDUzh465Mg71tuwS2njPDfooQ2wobZiw18",
  "key23": "FrXTEfp1zWrLgsUwMTHNXhw9Kp34imP8Ymuf4NmBTxNW2mHjPeXaYxH2Rq9vfD13o3RaiKQ1ftscQyFsy3AyZcC",
  "key24": "4h7JwNg9CeZgUeSKTQ3YRni56URdcW7zjJGjWMknCUpydKs1GFykymdpMvjj3bWdaXCTcUF4CwT1kXCj28osQQnC",
  "key25": "5Vqhny9AwsbGJXXyticpbToX9H6f4zYE62RGCY7HJcza2pJKmxgPWnxwK2KUBZYRryyrJPz2uA6hbdN5yLPJpYiT",
  "key26": "2kMLRbWyyeur5EyzBCjXx28LPsDd6u4gomtXpWTezkS2SR4cc39fErUA6C7rM1W1cBpXCfk1Zj62PXXjj7zxLn8R",
  "key27": "3B8demdm8oLZLHmK7jkyJQMtjLdT7iDhHc5wBU9ACqJrZKC16ekGAKvdLATrvrS1dzKw4iBqenEdJbh52XHTq5cC",
  "key28": "4DJLTtJg7jhAEDjMCWXv8AkN4sVBhv1Z55FTF8H8XNXQdD5wyCKXcfnswc1gDamHzcjdFk8cF5JTLrw4gb9Tzvif",
  "key29": "3s7ShAaE1aj6fM2LVSbxzUSB5UJFRN8LUApkpamJU7VtLFw4Ax3uP853sLTQ21iB9r5wt3pFc93GnpHj927szqKU",
  "key30": "5pdEBtehc32dTQqzXLmRoWde3N8xcWrKCvDfPMEBciFhP2n9hvUc4GBfhYmUFK9suGfXHRmcmuddBogYRLTYTaf7",
  "key31": "3LWv6KbKzzdZvFhCWGyp79xCWZK9XQqqCNSArPGN1zHogicxkwSp78fsQyrR8bZX8qNrXXH3Ft2eUje3kvtce5YN",
  "key32": "2DFKkRAQQRMsmK9qx8JQSS13Fy39rE6Ptt13dxp7UWrvvcknx4Stk7Q6jTnMjwewRbhMNzke1jLfZTXWgnhynB3e",
  "key33": "4cCpqa2Dfhk1iuCe5AYuZKV8h2LyVNdBwsXzRgzv3BqyjHzvNfgLNPgmDyed5wyAU3o3sij2SQLLtqQGCGWsD51B",
  "key34": "3itw2br4sRsAxgLsEu89URenbbE3LhfYoGfT7wedK5DzwkcYc92nMkv87ZGi7Z72DWP4mwGYweUfJkxQDLWjKhEd",
  "key35": "4JwxCTdbV38iZsxsTZMkRjp2U3RhqcyMw2fg6uWji3QKdK1Kjd8i3K24cHEc1h8od9A9EQUKjfKKnZcAVKMt15pN",
  "key36": "5Rb8HXEcpKYxN6iHb32aUk91tUJgGNiqXd9fvV6gHCLKux78Uy5N7NGtzhvYAKyQofXnN5uc3YMGGwE7F5AA8vNU",
  "key37": "U2QXk9qMyPntSuDwiWg4xhkQxM8kycEXrcaXdf13FL4YBsECvFnog7Qh22bWQALugFcr9UafG3hUN5nRw5U8LAy",
  "key38": "5VXtgBud6cMq2xZ4kHB9GJB7FEJz6mTZ7T34Ty6oEPr3HTtfjkxRwiEaXP5aFMkWjFGiZaKZazpJxyawh14gi66z",
  "key39": "3bD6SHDjodA6mMgops4ATRbZkShC3SdHbsi2MmRYjYZd5RsaJB9tUiU43JsxGpEJTJJzYHzX9qQwuJx8DWzXo8zY",
  "key40": "5W8thKouwtaCry5aM1UAMM3rZAemvsBH9BNHUzHTSArLqozdtkNE5YR6K9UyNjFjQoGjxLmzoxqfVQfjYxZik9TA"
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
