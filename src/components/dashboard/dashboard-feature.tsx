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
    "5oWgh9j7gyTJB19paegAXQbv9kW289gtcD4B9eA77D7RBXFi6p7s1KtqF7yj44jTWwCyZmnieGrPth2VXXpzc7vV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ykC6o5c36C2UdVu2iLHD7T898SGruD67cND6Gzf9W2rCPMzfVq8AK2zzLMiBdJE6hqkhk42jS2nZzPAV669jR6j",
  "key1": "5LQP7VMB9ooHaT53pe4TkVaAGSGWVdDJb28DA5PuFYapyTQNMDGdZS95a4odw6GW3s4uKsTK17y5M5nR1bHzaUud",
  "key2": "rdN8VZDtfhfvDsf1ZqjU8MQRGJb6vNiaDYNpmieiDCsSk8jq4GDcuC6kR5B8DWd9FXS9Mybgxb8UhU9wYNWC4JU",
  "key3": "2sPtcJSbby7uHsiGRt8jcXURkV8WanAqyiTjMEbMc8w88V83UQgpKhrGhUyPgopjuwQrffwMMBjvAP851DzqELu5",
  "key4": "2AAAy5FxyroATStKoyUJfRZH2ix8quat9NKMTuo2iN2HqHfNdsH8ErnjMSLPXo4nb8wi7GcMosxkkm6WRrR4YKkT",
  "key5": "2hrYTDnvtgQNqH1fqh51kcVH7shXXzS567MCRb454T9A7ZfUTcraRSmqCigC5xT1Zzrout4EdnMGXzT1wr6naS2v",
  "key6": "5creeHptMnDt2DhzTsWexXJUnACSd5bmpKhoVEyycicnHk8gThoj2potiJUSBcVhtzs4DiDfKTas5m71z6cJtnJH",
  "key7": "3n7fYSgiwet9jte6KJWmpu3qxjpqXJjEzcY5WQ5isungdbhMP3FD6TWRQo1FgTyzsZ14PXVdY5WkzpFCrQKbDg9V",
  "key8": "4oDiWmNRsovdQji9uUkAERgRM1Dt9eSGLZhfnJT9s5XnaRcYGcWnUzYAjGRP9Xv2gV4ftBQbUrNDSvbWQ9FZBd6Q",
  "key9": "EUCRuXfnhKpfrpfgQPFpHBoFGkYDQzK1VQWy1E7cBoZjxPjXrFjA63YxvbuPFwrSNV4wx5tt386aVNCi71TgowU",
  "key10": "4grzy75kZEWWUioPQbvHqf9khKEQBamMvUrid2E79itRMjjFFLQqb7nN2j2KfiRe9y66eHDHK76sPJDAJpQapo3A",
  "key11": "5LDGfg8KuU87C1tW7t2XiLBKvVrAFXG4kQrAUyrrNr7yPXnqBZcX1ca3K811h2BnHJtzG8rTGgoWUwwfQvztTv8T",
  "key12": "Ny6SdTbAXNpeCXPdWJt6d73GDduEDEG1RLybRpz51oAuRfHRnM6zcQ2nFdhv86GGz9t9CcRFvSKsACYrN2H8ZYL",
  "key13": "3CttoAGyRD8F5XCbTKKEGS1qXodPQKaPF5EA4vThTghmxf31gPvvPYYMVNdnKmFCvpLTFRJuoMUgnbdzXAmehbva",
  "key14": "23PrmRbdFqdea1KPtWwGc2YuV7hLLSEJewqBbjP4MsCHyDMc9waDQuwfV4vPJJeuKAwmv8fLZp9Y2XmckXSLAGeG",
  "key15": "5DRjfDtwdLNXNZrr62BjEstS3iE9u5DFZUCCTaiLGB8xz2eefsrtDo7d2yLnD1TWoBHK1ku4TySPZWvz6K5p4dXB",
  "key16": "k1VrsfiCeeQusDFUQam5BsGk3LLaL3hVsk4s3rsTpBXp7KjyRSSDLLUWbx4tQ6REjRmGMskoU2rBvuBb9Zgz9NW",
  "key17": "4oUbCPSLaFnn3heqM1qfsiNJXb1i4AfEmHADCZqagxtZJiaN1ofz1FMDAsp5VRGdddYQCLr7KB339L2nssFMrLCY",
  "key18": "3Ezqxj2iyJP5gK5M2yfLk3xVq2RLQ68AQZEB6KBS1WYdbFZAQJ5jKjuaCkjEe7WeT6ggdbPaCQ7UxqBGjGGdPRe9",
  "key19": "2TagoCLicEXoAQcRUMFYDxPpe4bqhWtmbmua3Va9hpgZ7RF16bZdJmufZXC1GLE4zqDqYEA8mF8rvMnfde93WJxf",
  "key20": "3i8bPcvsExNVjuiTztqDEJK1KEnLFP21roXz4WAa1fYCAZJxEQZBi97maXoXNHo7AWDDbs1wYByMurYGyCaaJJkm",
  "key21": "2DHdcU3CxM9yJv6rmyeh9Sb2gEHrUzrbrCkB7gRjG4gpNM5xJzG8y3NiGbn46s2Ccr3nSx7iihMKr4vfd2TXun9W",
  "key22": "2A3zeE7FTDzp7hX4Qc3X6xRyDH4Fj54cU4ugoohvhQJzsotNBY12WKUPc1uuae9EeFf6gVQZ6jWSYDd3nSkqPWVA",
  "key23": "1wqbAokV6uAsGbvTtyn4Rnpsz8ycEs47LufT8naPSzKPaHPxxRRJ4XqNMRzC12EgKeiSZQZ6VMzpKpHJgL2ZsBK",
  "key24": "5QNBha4QJZYYaJSaUu19HqEEm732RWvJsRBWg4R18p3W9R5t8T9iRYwoYTtDTBoZEYRCPwMG1gLasbridpEjm2C1",
  "key25": "5z3jUnL4jeZ3QuV4pVF9F9U2KGvVf1rBoZYwfpghfAvG5XaLWnkTERSxpBinprr1sP8W2Wb626fX1BqbYUYJCdgn",
  "key26": "4rVM5JX94oAMtZMp6vyCAkdH9uzjBDqrvTSY8k8nd2vpatWrGUzW9PXfsd8KzDLxu3nZcn49kELu63RyxoLV65zT",
  "key27": "2zJHmMiQVLKJGYNsSPFeyXtQEKaNCvaMMvwKQd8yRoZ6suBKh8Lj7C2si2px8opHJFHhRB4ohATnvmRP1ATrftS9",
  "key28": "2LAjYxbzBcmN5A4TsN1cwmpaLG1y6WazEbX9BHNUP4as77FRprpFhhrcEJeeeBrRuQQvVLBWnXEYH89asDaReEh9",
  "key29": "53iY16VELBsPAivdftXB5Xmfn5GfjbE5VngPaz8wESmv2mbgSNRGAr9o3AcbVemYmKH1JABYydEZGsKZwycsRCER",
  "key30": "5ffCYot6ArEUw6krea9De2Wpy3fB2mjrBJQ3mhDubki6QAxrRWohBmCutavPCcuniD8kamkbdbNNjMRjTbpw9FsH",
  "key31": "2wyUWph7qyUCj2auHztgmtPJrWPWsG17KPcSKVCb7RSS659Y5qidcHWfBrJKvSxmzEgSzkbA3q71726HuCAmR4Aj",
  "key32": "257Ct9858yCqGE7pNTp3rYp3eFPvJsiSRCZZWx1uzkcChmKMKVb1VDTsT5E2dcRNKxys4FYcfQo4gAXr3t5pr4ed",
  "key33": "3qEriiW4RTFebW4zc9FaoGvZaVGDhC4d6yaRmYrhQovwCiHF57kjxzvn8CRUhUATj9iG9ovDWGkBufz9Lbchyb88",
  "key34": "5KCQxTJd9y41XhZEVV8ejBQyqrroqHPy8f4c5EPrYnmJ4jshw6Wu1SodWs9TPVpBxvVTC7ooND8TpoZmp5eZ45JZ"
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
