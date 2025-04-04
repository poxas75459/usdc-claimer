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
    "4GqatfLXkSKo82V59HK3Qiqr85pDmm9JRag3TL7ABqk5HEjc5PDCsBxr7Pm5UzWg3ckcgLrmAj8xzCXgVskfGFFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sm3j2jYP8KqH7KGK92aXiCCPccLT9yuGsXqQvuW4Kpqr8n3mgTuZSiJVQ4PFo11wxRmXFUq3e9weoHn1RcueUwW",
  "key1": "2HniutcpveR919ZDsjrS1whXPZfk6Y6TX8nFQFvzBuoxFXuMWsgdJvZw7xLj5GNhsT2KFtCHqqHLMxksuYv2Ljxk",
  "key2": "4mW3qoafBMSGDPUWdzG6giiAgYHNVfmUhQJCavHSxYZi3NAYcjN7G9HcAc2xAD6urdVK9Xnq57AfQ9ToBuHNryqM",
  "key3": "45L72YYsA2PQq6hpEzRRiPpaPQe4aAgbab2iTXrFE42LgNPonPNnKz2udVfWtWAmi198RNw5zvUmLdm5mkcwPYxC",
  "key4": "4Sq7EhAvqxnu4nMbfJ7aR15fR9h7ikSWWrvMoBwvYEZKnzg4vUvDzFJqCwtdfWqC8Ek6Sxtqfcj6SCMVHyGpySxh",
  "key5": "5MciY82brRMtABng4nQwzY1t32CkXHvgUPebo9T9yZpwVcTy4SjnMfXDpKcL3fnXegFBqo7JG2FdLYiT6wM3VdA4",
  "key6": "3m2F1Tai8txH7pcMBXL84ECHTT1toSUJ7JaGDZQaWPVGC8UicmPxrVMMd91sV42mUVhpdLJJJypH7KW1j7D8kST3",
  "key7": "4tWffAdzcwTGJvNSna6quk56Ujkuu4oZEUGcBxGK65L2NbxeNSDSFJGFJtkQuRnTA6gmqYJxpZhfWbZisDxdoxzk",
  "key8": "67digPNK5WhKvs5wANqApwtZw49P1mSx95yA4nX42C53DSkNmSf3xEUMWvaNgSMSiTPUTBK2MEPxyWfbcSiZz4i1",
  "key9": "2AyhKn6n97d8cVWv3ym7MdpFceCEzK49N3Mw5WsS7bohd5MYZ65EqivJ7nDXfujU6siVetqcY7GK7A9qZ23jpKf5",
  "key10": "4wNUNzL9kYCxCsiacXhyv1fbUEjMUncVTqJjCE8LGS6X1c9SZboxRcgEWnAnU5Ms6HHop4dmGsitFmXc5uKrL6kw",
  "key11": "2HMj5HEniS6zu31uZC62FRqDR6jPwiWtDzUiPwA29182r2shspbEodDNpn7rSA34r84tsqgc9jv6vSc75Vxn58Z2",
  "key12": "4AbVp5FsZM1VMNiyfBXN6Fky4QV1C53UndR4iQpku3fZK4NmQtGem4Gc59bZx3QWNH2N726HUiZPotyDbPFWPPHT",
  "key13": "FnxabBV8MeFiPgx3nhbUgU53Bft1XDUTHoQX6Y8NrAkWfDnf3EZ7BfcBWKnvthHc1FLktopSWzZGP9mqjtjKrug",
  "key14": "3L2rrGdkCGXrYpZATsZqfaeGXy4Tu4zkdNnj4UAfL9a1GfVXN8TwKaKy7qAZQjUfAqcQnyNXujRs93dfdQCnXSpL",
  "key15": "3tSk65A5tMnYH3gwdMwCDHsANBeJXyChTafbQm63eKpDEyMJudHhYLQEWDAu9zGoucqgE17uyibytYPHyqCTbB1K",
  "key16": "5Vou8LBaibVUQBNNsgkyn9q4coyfGfy7jjKyyqT96rs37kHXeezjqnSVQLBoqmwqTACVQTESyi915KpHeJn9icPm",
  "key17": "371RbyrGhyw7VKAKcNMCLtjwPLpyoMpP6zm6gLCJbkG8KJCAYTfSryQvUiz4kNnQUq1tfDjTxk68rQ5kQ2HPxeWU",
  "key18": "3fbgtYP1mHjVFLwryTyNaCC95DZnKfmjB7XHKjAif8ZVVAvA1BeRsQYYVrLNJH3uJSgi8nmAayZeBA3kgBQVKo9y",
  "key19": "2pyDfze77qreMhTPHEkAnrccwFTgC3kSVeZeTxey14yrvZxRarsJ7hzg7K9By6cJ7pzFUtsST2DUswMqCeKQek6B",
  "key20": "2Tym1H5M44Rnn4QgRP3eqisERZMneEVvLeCdzGYDi4Atii4nJxcsiTrBnFbsGjBTjqk3w3rStxLhMYJkJpeJ5a6Z",
  "key21": "4j5DDAeeDQ3kDQeGRLT9zYtUoerYzvu9YBinWienPdXRD8tvCMgkoFy7Cd2JpHnqLAJHobQh7CLW9pnN9pvjXa4r",
  "key22": "2RXKKG4DxksjBnLAasbAESWt1AVMefmhmdeQ4vrHkJEC8NTJm6pB6sT9KYK7J6j2C4RuK8PJQjS4aMveqbJaKnck",
  "key23": "56TBk8RoKF2rFUj3yZTh7Z5shbKocWMWzA3NyGZNgHEFDYhqDvBD1g81rPTkuwwX4wAiDTYBRqPAxrSY59NxrbN1",
  "key24": "5k8o79ex4RRd8GyhUaySZ6r2LchLvYcQDdf9Lm6HSzZ1X7kV4v6Qyj8E6zUZj6DwKS6dz4FuTBwH1GbCXjpoaJHn",
  "key25": "5ECyijHfpokkaxsYK84T4Vyv1T3L4joYqz5X1rwCDyJDCVRy7jHfow5wyusPV4H44ifFzcUKnU8tP66aE8ea4xwA",
  "key26": "51HFy5goMUymQR2BvjvZ4g8v3KX58pbUKVd8JFvybP6bGwYJyodUxoKEvsBvnTbH2DiGHTgi75Koc5svaLnX4EDE",
  "key27": "44Hxiqf5hHwAM7FEzYqf8dWU8QG5ofavjMZhqtKRtPjGhxfUN9M7bkdzCjUnCtN7QKkNXnRADcrToe1PXw5jRpF1",
  "key28": "5Cuc5LaW4hVA7y7qCueecG1HrJr6Ufrmcy39MVoVr8k4gAzxG5Kq3S8xwpdqdtpWLDSyH6xijy7WaGWAH72sJDK2",
  "key29": "ysygFkJUXvdMkN6BASz6rmLFxxXv69ZncAnaktBRg7y2zMCEAJsJdyo1nwEhg8xNfygY2NYNjmxkaM8ZRYDT8L2",
  "key30": "3B76BrC3r8ZPY6oxaEx1XUHZnjruDzL2wymVS5zqssHRpRkmzuBvyuDMWE7nQTc96VBAXNhwPxmXD9FsnouWY7kz",
  "key31": "6kWTCRAHYmXmo8SEQTZdqN8boTawC19A5CQNENyuBVGUzo8Y72qsPuwPMa7eZBtrzpXvin6hZvud6NEQnB2M8DP"
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
