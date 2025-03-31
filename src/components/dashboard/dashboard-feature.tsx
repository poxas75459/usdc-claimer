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
    "25ubKodsYodEWGULZbrbbBhPsLeDsG5pTw2yRXxvPh7DNrFCtfDkWwEWh8ByePE47siNQ4pcotteoNztiy6wz3hU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36PSNnNe8yJ6gCkF3UorJegf1uDuUFKYWH4aoh93PW9VeDj6ehLdaFWffzyoZ2J125F6Xy94t9smn7sTSG9aFkJg",
  "key1": "czabqzHMD4dh2w4Zd49DV53sQE3mJjLqJMg6iz3auJNZ8QVMby4DsW4noT48sSRiyAsuWWThvVq2z6b7AhS91YT",
  "key2": "5LWv3CtBcd1rJdj7HHcPMUcjGobHiP5jBF4ACziVqAbQBQnvEH6JoYct6VuTm4gX8uTJM8ukmsoqmYqnqKV2ndLu",
  "key3": "45xViV3HkEpWToE3nNjj5vhmAi9UqYnKuH6J3sNa43RueASVGrtEriXwZ48eXPoNdwuWTcRAkeqJKkYh8t1KtmFG",
  "key4": "3c6q5HzWRbjD7NnfXmS4xmUQx5fPLLnaPnmd8ZFcS6kKUn8V2vxXo55ARjmkDszqPPUS79VG1xJpUyatHFY1mz4D",
  "key5": "4eQrEt2opYbT6RVN2kTb6J5XCD4XPMz6DkqtsQscgz4PgQhNCcXaay7cCDw2DW2m7WhBhcAgjPq6H8UvuJeFeU2p",
  "key6": "mmXaVEdmQmBfomeHuXQ75MLcGYD1SNmv4ofLqZum6fhz9vV6kBn5wsXV25cJSpaDjbYSWN8Xh2c33A8ar965hZK",
  "key7": "2XPfVirc6RhrrMQUSKz9uF3Y5MUbN883N3Hb8TGPd41eUjaFbA83jgwnQ9YQz569ymg6ed1AY1QS2pub6Jvebmtz",
  "key8": "2i1hD4BVsxc7XygoRLVt7CA9Kg24K6d3TWLNqpHvz8URfkas7CqCkx1uTTKSB9yxWD8YQsL6ittMUHnUwPcZB9eL",
  "key9": "3k3LLeZdx17ofKcTNJ3eixWLQNNpFCVmAUvMzULEtQ19YxyAD6UL7LNSMvaWtQ9cnBguwgTQbWsvkGpx6SPLauug",
  "key10": "4iyQrrqgUd17f8Eqjejq4fBHo7qpGyd9JaZXNXaC7KKV7UZSKgbb9HqYZa5ps1EQrxNfM2BYH3keWTkFPXkHSNhv",
  "key11": "53V39MmHeC82wxqRhYv1dkhky1Z34i33GtFRGLakH5U8XPGxjkTg4CT6tkzvcMpYPYsM6hEiG13MPsjwLY44g3gf",
  "key12": "X56k6TiUtqas7Wn2vtKdoeve4kwjbTn7Z4HW73FcD8GS3rxene2YTrEqDpVPZCDgc8twBagsTeiqsjkLQvQtiCT",
  "key13": "NBiCwiDSvEP9TN5fH4TzmqtK6UDo3PbriA9RgVPFuyLQmevfNHgNBCL7S3KndJNNrDENzFR6GWKjmR5UAm2pQZ9",
  "key14": "2SfLrqSFr6U3YjVvQGmqSLFDNbqJw4ZL9FznYSj4sunh1aAFqReFLwtiYXc6QCPotKcEfMAnQsY7PmkbwLQPRuL1",
  "key15": "4T1adp4DXuhoUJC58RkycP43LecknEVsGsoMaLWccmWNMFqbmdph98KW4VBVqmNUnPKAb31YjUcSDe9dbZ6xhq6v",
  "key16": "3yPouDQaQic1xgd4VpDwReqfhD9pGwfMSQwsCoQZdHg7GWaNs8gDhpZNBbVJQ75Kwfp8fQ9XLGvDK2DMWKWwPNAL",
  "key17": "4X2m8uQVB9Gdd4hjTwx5be3cV8JpuqpA2KZTgPxw8LVUDqpCLeuChjM9rNQWYdXUNSUzMfqsWtxMhAg93zDs7sgj",
  "key18": "5ExcBV7oDRQtzhjMPA48xgPpM4pEP9CaGEJ2tsehdxgNQiceTHHDnRox1rNQfiYdXHPoFADJx8GWxJEPzdgZdoai",
  "key19": "5GYMtj8KyzNXD99HACUDnjdixWHJk4P5pkkmEjD1y7jSbZ9RJZcqUtkbsyopsXLYqusGpXJeYdMgAz81wSRTnxWC",
  "key20": "2xHTFgsoRCdbdUrxVbH7tAU6uRPQ7gZqdJ4nQVUuaTA1nnA5zsf5t3y2rmfThxyMgc1NYbABe195b3RrBcaZhnDs",
  "key21": "5jSNzFVKkWu7aY7sX6AdDMw919KDM8Fc6KTP3PQpKYBYj8t1v38buocCRr8iWRJJy1s93beXGfjyjS33EL9cE5bQ",
  "key22": "2d2x3q9oQZjJR7GEN7SK7y1Yc8FbQCeZmA2237spwL9pNaE6nkgq82RzEuSjL9HBj6kX5DrRmbEhEijia88omayr",
  "key23": "338KAdZiBJbxECcwEDvEvPoKxsrB4Ksi9Zx4EM1LU8VXjgQV9iyEm7TXMEP3s5QePB2X2JYLmY1zrWW1shY3uKCK",
  "key24": "5p3R9Bb8aiL1PdhgnYcP3nJCoG5wWZURUHmm7a3k2UPrhx5HBm7RcN1MDfQSQ8dDzDGHgJtULAnJ289EoX4T4dMQ",
  "key25": "4VokL5mSRu3sm5xGjJGFAJbeCGi4SeeokBBYsvaVk2Tzx2nPTHivEokfWF2pSGKgmoXCqcPdXrygyL2yYMC8oo8K",
  "key26": "aBQS3Nwvh43b7fLPV8Tj42Sy8jZHGxNxnFq3KvLqKAYFXtdb72f17pBJ7QeFQbbWgH6HC4cyy5hbbbGayZcdzrJ",
  "key27": "rEK5kx7U8wQMDrJgp5q6Sde7WFKzGEmhXuLVu9awTNpJqGcwkLKZq868SpJNJaNoXER16YX9kvFVRk5g22w3yH6",
  "key28": "3MXdBWLAPDk1fPPhpHD1kVy1KoJFvVfAw5tzf88sugKKTRSM81L7BktyFGZX3SosGVqyqeCp3f6omPUZSshQJGoa",
  "key29": "5HYYcVGHEJzLkYEhAmroz2jhZeJM32MWVFSMynXstnetQdqfZQFtkqaqvC9qX33LTN7yia97qZCU1c57xALT1LVj",
  "key30": "7Ub9Xx15Ab59WPhW8txLfFF9Tbmy2P6rmzRTQ2xwovXD1gfbVscLfScJLoXN3JDdr1TcLmLdLvbmEyw8wjjbVr8",
  "key31": "3EDpbCCZjmah3xsHhS9cjn6iZBXpLVQ6Gueu8GMHzKYUg33Yb5pa9DcpWnZJegxJdzGvdEcNgXWaQp7FxhBsWf1m",
  "key32": "yDnmYeihPXc9MgX6qTpcsKstJqPNSggWJK8AQReSHtBAsfJCLLPZxpuRUxUe5Gzzfni98NSh1YjUbZ5y6JHRrtS",
  "key33": "k6oKywD9RW6cakJ8YBHYdsHLZ8kKMdMYgHBrGCcmDETVCDU2d1aLet8SZeVC9tqBYtx7PjKM3wZRykuKNaVKDAT",
  "key34": "2VYowVcF5aEZ4HLScdD4CV8bd7k6aqJcdye3TW2JDR24rk3Quj83MfzYhd3bSCoELh7zSLBoKkeznT6zSjHYNjze",
  "key35": "3kf1sfy2jYZrxafFtEJNXMe8wXsAEUSrLxGEmLdzVnX6R435bLKSe2A9DHDvGVMiTiG5ysKJuwKfAK1p6m4m9k6K",
  "key36": "4SokV2yzVMFatsQTE6jBWWJ7cdGsFP4fij2gdQa3T2E8nsaC4HbUp6gDvaGanMPDrxmNTzNre5Xjq4scEtuQocMv",
  "key37": "54hD8gcMRtisZ5b5ZW3KvfdjNUXdpbMsnGN51tN8SyGeLqdbxDKcrqTjbcLBbsRavGFZUk6NYjUgWmPYy1kdaAhk",
  "key38": "3LVwH8fShRYusSpWbXithLGo7VvzZzYwMBDmsMM27pLiFjkj4q4M7rk7H4TtEJQgasNEwjR8xsqFW4JBUGXb1pFB",
  "key39": "fMERASxyqfTjuQTRx2rKn75sARs2sRY8UJFbz2Thm6QRxGPPSr1QacGNHWvASVwQAqhuzLEhgr6QrcwgEtWyYyU",
  "key40": "Dt6G25GgdgoQPzDqK9E5ykeVB5xdZ2pADgucSCGQMt2jAqhmGybnSGRj3nrhm882Gph71Lx9DMMJGw9t6gfjZUS",
  "key41": "pUA7zdWVcx3aS45yJqVr5Tgifo3Pkp8u2GHGoR69yK36tp49TysUDxiS7ZuTVa1p8cZHn4RM7GodceGXcb7Jh7V",
  "key42": "4Sb7bN3JASWjcNSKFCdxrozwvF3rEU774sbkGu4gR5yFa6qrCXGeZ3N3KsAnhxKDcGWS3AsrYpn8dEpxF4gxCGvi",
  "key43": "Bv6q7GZwFiNb7kE8gDbiJmSS7pFjRgoKrPAs7R61XrRpZ4oKLugdvYRWWqwiHfqqndxiEYS4yHN3pVsZT2HorGw",
  "key44": "4JqEaYk6JBQdfTPELRqPTGfCKeyXDKM7G9h5YFQahmGipb8aT74W7fztCSwwHEs2qrcY8ECXhR6idHoq1duzEHM",
  "key45": "5yKHbwwFG9o9qMrMGfXdRiwJmkbJDcZ5kTVxBKxkQZ5Hdp7xaUadXczSgTe3MixfaETrA1nwkjCdJLFCFJxCLxYz",
  "key46": "5K5JEeJkqvRQzL17kxY3Tv5QD4YQJ8C5bbpCoPa5QReofmqBUM5DDrzJn7xo4HwHVJt93gBMAyZePyUBHuKyPVUg"
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
