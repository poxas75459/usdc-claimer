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
    "51p8Fwq4JW4aCXq9wM1T65Krt9vEom56bzujHkmxpX4hDCMh7XBZQoci7tvfYQE6bJDf4MQT3NSUEGmGjwUibgri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qhX9t44bbpCy19LYA1MzQZ9b8kRwuk1DgrdfqbEDGU7PhtbHkBqyeswBNFsEBWvaqeWsUxQVEm23hPBTtec2T93",
  "key1": "5TfZWkBowpF6qZPWfpA18Wnc9sRge7vxA6iVDxkwPMcyDFDj6hYKExhj73stW2DTNuCBQGR3B2NqFaecaFSyqHoE",
  "key2": "2vetHak3E2hXhmBGExLkmpdWyK6Er47gsYLEEHxmt8hBN19G7sxMpMALutnxZnkY4CCW6z1TUkELcXuffpZAvsK8",
  "key3": "5UKf7gwecRvRhfDr2G7jTAyhQWia9cBB71WrSRVSNAqFXdMqB49wT7TttMDaKt69fmoGbYPMAR98FgvjM82fTQ58",
  "key4": "FiPHSCwR384gbYKmKTD1PZP5aP82kiNACpqLRfCGfUqFt7FfXP2CP6UvwST3xryzQb6uPTDcV56NGJLfxCqyreA",
  "key5": "2md3A1DwjYXprZ21PfZY5Z5LCPWdREkrxxw3nGaZiDkk8FTY1zhReZVc4WwU4oknw9y2HbCG8pFCU7SUtRzZMTNM",
  "key6": "kZfAsKXDjZUn37mkHWFkcmDNbuMRntxUUGPqryx55nfjRd5uwGCi4cAQhCz2DLtRQKgRxFhqC3y5aeywuF5mJtq",
  "key7": "3hPvp7LURLeqPrFLDraG9UqYaD2gnM6wCQP1JDjuPgsZyk9tMsngythcvJdrMTvYPetg2WjyMYurZHqYXCjgquNL",
  "key8": "Te9yArpRLyUAuUjjD5zQ4Y6w1hVNxB5dYSaqBmrhRnvPA2VC3f2jGjMt2S5RmTjGeubkoswYadtVJ8AY6burDdd",
  "key9": "YZmzqxurYCDjfCr4fZfy8cGJBKn7dyzWmyFHwoY6bJuDWKSDg2PGxxzEo52NW2G4KxXQqXha5Y57uV5EFEgeTSa",
  "key10": "3kb6SAw9MEx7kyvi3ZzG7nKh5YAL7kqDK6AJDZ3dJCwDtA6tbu1oEfv55Zp5ybEZZS1N2APK7mCsrz6a9ZV6C3FL",
  "key11": "2coPFf62j5RQ8u73ym5Js8UaxVNFuuiP7d4ZnBmH1Se5cwr1J6MCyjZN5TKiTQoSRXrnxFKAFpgkKfAp6aXGD8aS",
  "key12": "4nBhgE1mTPxXaEQqos3vaTDBtvvEuEADhouAu9Ecxvtfpcpyvp2LFdNygYo1aYXq2vD3wdGQqj2kDUUjdcHNexGH",
  "key13": "2QykRun8NuPXuQXDnMDVQTCS86hEomTPmKFwpfBTVUboja9vzyZeJScANidS1J8moUaWVxdhiLEwZJHifLq4WvjJ",
  "key14": "23tYnJfqnZXRkcTVny9d4P2eQR4yVrYQYhn7M4zFcmVfD3Zpgijm6siDfNx3zYraC93w3KXHg42cxi1fkiFHfcAs",
  "key15": "onD1Uwx7tzcrkB7WYqtNxi5zhJ7xi7jWsuvBHZFcTmepXoabsGsdaRYKt2TxSeqEjL6WmPjAUUxg4JHhaqNjqdb",
  "key16": "3SWu4idJBDcJMvQSd32o7rdXsMtNrGKKjWuEdWq8C6Bq5VxKTzS3JvPK5YokiX4aiZWEqmeQdMJWrFjXzwD8PcqE",
  "key17": "5e2uZEaRaHNe6izbdxRZaBgz7hApfjeu1pm74D1KtQCFymUqry9oGf7TDYsBd6YzyEc9ngcFwoJtW3XJv38Ndezp",
  "key18": "2HmA71wVpoFBDPDazCLiYxtKYc8koemuBqsBD2Ht6gEpehRWonAsQYftHn56vS6h4F1RuHvEYU7nwNLC5yGFCC5Y",
  "key19": "4UUZgkhVLm4sddvtGgfHtk6DadXL3EGndisPJHwrZNQcdkRCqefBP94gieWT5apmuzNfHjhTrLNrLRRy5AWoAtVA",
  "key20": "659TBZzLEtnmqtA1aULaJsG6FCasbsN5PPTuv5opFaUoMsQ7kNnoayF3eSReBbNEaHNsB546KDj6CUP8LQpMxHEq",
  "key21": "3aC4L7oyBvhumJ24fiWCngqiDfks2ZqMt2KmZK8LbYhEohX6hizaUJ2QxeAP4wdHu48UosDVgxhY1tydg3rNTVVh",
  "key22": "2eAQjsP2SBatjtC4q8yd8VEiTx1WhuwrvMXshgN6dChK7buNcgP83WTWXc2L4DLns7kzeJqN6eqDcaC8nHkme6Ku",
  "key23": "4sDkb5nJ28yydGrCuoCCPMEsdum13aBNbcy1CQNGyHFsaLYzNESsEFb3EvZpVmmbtBPp3pCaV7KpLDKKKrZBdGPQ",
  "key24": "31bScG584gdmXUbWgrpga198CP89p9JpNY1CFAKYzEvH9VkVK4556eCGr4fZkvyCKGQxf3USSgZ1aCgCuYrnQBsA",
  "key25": "3uGW1ekkhi6BcRqppytPpidg3734W6RP7RFNJfFE4fkA85Cmry2maJkyKSMZkcrDCYRQym2unvTW4fbRzGo8EizC",
  "key26": "cZAGDC4iNuaE1b5jGhuhhRZMgbAMvrZHrXkSzWb4sb2Qj3jN9Rgoyi99qmB6rL7eZyRAdTLQbLYSHr5uJVuXUG3",
  "key27": "2ipBwCsXsmJBzqq7aJSqbkbgqsCWBT9Nwdi4nwUre6y3eJn67uC6NiXNxwJyGNJxSPRH4b14ZtDsEYRhygh55fFm",
  "key28": "3DyZmGYswrKUnWb4dFHqE5dCtqv16ZYZDci4x27ycSsUgZSQDe3Jb2mzmMaAM9QdFcAgWcBQ2vhvLtUyozkR1hSf",
  "key29": "2LkZNZaLC9fjJ5EBMHneghWhJiLuLUnD4BWLDCqZXGZdMcxSMj5SB2SMJTguoARwEyhCpi4AMeaQs96ABd7HdmGw",
  "key30": "RBCyzUW8a1QhiYqbZvn1xsjdDuFPnQTeZYCp3GNCfPB8JNvQ41VrMDiC5dvYRtTGKGNS4GHPtN3jnU4MWcqNL8D",
  "key31": "Qp93sQTMRpZF9zVZQSrasF6MnyAXAJZRSymHmBGmhzAZczeKv1aCX2GnCgyoPUWqHea5GpcvJA4ABQfXMxuXJT7"
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
