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
    "5eAKdfT2JizxAPGcEr7xQqEccUMJctSWoERiDbeJaPbTjgmqzKBZdgNkeH71ap7kWVMchhSBeVqPEY4U4Et7WN1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ccj8Wn6WTxjhyZVW9Y5ACXfyNuanzvcR2B5VGmxjyPYNVf9xafTJgukZBLcGgu8rjWcLCJqS4tQ7tKWt2FQZ2b5",
  "key1": "iJKZvM3Ky64t4w19PzMkp2RDnALUtgZt9dgRvYBpkaBi12h1D21Yb2Kv7n67gwsPBtX5YuWuR4yhYQCL2RjSQWu",
  "key2": "2BdsSaZaRsGzsFDUR4oUSzi49pMLcBQmFN4nTRZzxfDG5PnFuthxmK7ZTE7QXANWU6gNsrpwnyZe1mKXJUUyJWGo",
  "key3": "43Gk7MUc6CtyfsX7ojXB4ekDnMgPAHWGEvcnhP7eZogQDUdpa77v81XNQPoshgPp7oMtoaJo2pTAhhzHQ2KFKMHo",
  "key4": "4yuC7JHa1wFBV9zCE2wHwTxDpqK4U5QUHSv8vvbWi2Jrv6JwUsLrMrkjvVv9yuW4C15gys3ug2kzZF6BmDwEzQGf",
  "key5": "43w6mu4aQ5FbP3Ecv3KCUbQQkqCY9fuX6ADVoBdbXiZt9xedPjmEsbEkLamdrpJAzyxJHu9CdLJ46bwnGrXLcFh5",
  "key6": "5zkXhW4VrDV4rTFaCiVnsTuGVNKH3ZsVEAAPEMSLHZ4Rm7cDmoBGLrCFx8bmfUSLe8Zk6ctVLCQkDquKqY6qnZ58",
  "key7": "4FoysjYJJJE53SpxvBCLGWs51WD3Kxn4tcGTwqF4iVZqrXEzLThhQTtyTgMETyGtiMFB9U8esyagneKWwV91Vwy4",
  "key8": "RPHJLxSLQBCJ5rGjbCSqazf1L7DX1z565Ur4Y5FPwPgQfyoaWuzoAwgJwWKV6nw9pKAu49vVNJbRSf87gvRe3Xe",
  "key9": "5mhKP2cce7USLjkUKBvjBSA3A9s5x1fcgtSjbna87KK85VfFr8yGqSEZChHHmaJm55eQB56FMYSHjgMGkEZXg1Xg",
  "key10": "2tdKW6QDwqcdzQoAvNt5HJje8uaaepTxJaeBS1U4i9dGGdRNnQwmwP5enScQNNS68AR55p88uZjyuadrf9A5byL1",
  "key11": "4hp9iWmzn5LKeUGf2SThMcXSGsktFXHqA1KSjC7LhfK1ip7u3Kosx8ymECCyd4HwrfxpvCSooTVqRc2UYgP38hQr",
  "key12": "45vKjPAtvUuptFBN5PdXbPNcQ5NorVmbm7Mfz3BuFuQcHjViWqQ4VbG6mAAP6UUyEN1UdmntER7tu2pvD7X49bBj",
  "key13": "424crDA6RrEBFXNPEEEKk49iRt4hVCyRV34WiQKmc8G38mdt9dU6gJweAw4kYivoBrijbaxS1Y3DoJx3jB6ks7pX",
  "key14": "3eDRRuuFrPnNsZbJedP3LLtyc6TXMaNiCDUikPQbBWZ71rGaRDLsMJboefPnPfzaravRxUpA4zarZjpUKUjRY6WW",
  "key15": "3EoL53pZ3FPZqKMytZZFmCf6EB6U8Bgd4VFNjRppYHSTngwLGLn4MDGNLz5FdL2b1ALD1fJJAo8rQGawFNx95RDV",
  "key16": "2fkG83eEjB94dNUn71qNYuooinUV1o8BksxV88Pqza9p4ZyR2Kh8PJ2V5BTRP92ZPfqQ8jXrWNMjfWu5cv2eKaHb",
  "key17": "339W46rU3pcr5icnDsEbKtQoSsnyK7xwqskRffdzW3tME2X1vsRLobFRVjJscSLyjs7gkY4Nvvbc7cabJBktVLt1",
  "key18": "493yxQGTJM5pKXmFMcxPCRRzpZaXuMnTe9BhMdzpYw6e4zvDKSRz9K1EpW2wv7oQZLkb6cGrLtH9uEfGXH2msPwD",
  "key19": "1XMAHs1qDRp49RF95fsGAGzEQnDP8bcMgza6HM74SQgQYy3NNe7vaER5k6aZ6A3LUzxWjqc1XdUct6ywqE6Fp2U",
  "key20": "36jagDv9bAN9F2NFYnEtLC3biupP13d7G43cBtRf2noNQw8Xes5WA4QZUrYRY65wBsJ5Bh79w4fn8zKu56EyJhRk",
  "key21": "2G2b766LWUTc2xgrmEbsBxp5dUquq5mazMHvQGcAQV1nLRKHAiLJvbZHaEjeNA6zrSSWHzWHnzFCh9364o4kQAPJ",
  "key22": "2GXXoAwtP8q3wMVBuUbqV44pRCLoL1EgU23CVDDu1VHKiZUU2rxMGdo7QnE7kzt1yrww75wNFxDKEajwuvaVjPsA",
  "key23": "41Fra1qECu9BLA4B4nd8jzzFS77oT7mTLYXtSobN7SqnqrLZsJcrSXvtHqczn3wnvUoaSfgsWqoGgz2kWPxw7JVJ",
  "key24": "4U6WuvAH7Y4q6DUHXzpvD9N8uugosuDpqBS4QLyLhikevp89edUNksDu4JyTtNUTdDkVqrSyHLeydUK2HPfaWMFK",
  "key25": "3PtoNRBR83fcLDyUNLt9hNA3vRkUQPUVtLPGyjKL4AsrRCrxFs3x1wsJnc8ALqzzGtR8GkaWoetbV6EPt7dHGifo",
  "key26": "4ZSgbM8qvijw8XdNLj8Tt2TeQ2FMgxWgzYT1do7Qaj8RitprS3udraPPUxgYYxcJr2HqVE9XJucSGQzSJ6KFuyiT",
  "key27": "3WfHDFjBLnS85SZuWbqAy1a5a1oycEC2SYog1zisSY4E44AFfr78Uak3p5KntZv4rz53qEL6AK5GD9NUoH7QkAmV",
  "key28": "35KsLiH78ARpK7cmrspQscg9u2c3WYZQbAxK6ebC2ruLH2AfECygQLDJSJPmgEA9ZScDfmosPcCshEzLQBS5cTa4",
  "key29": "4ruQvF95b3KDQnNYcDhzJx7Ufxa5uJcTTpUSXWoECohzn3SgkDSrSZ5npyRw1LaT6CZqJL9zLWJrCQLPamTVjMmY"
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
