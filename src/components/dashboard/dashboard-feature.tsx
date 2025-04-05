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
    "2fygLyZEReJxcE6LgPecSjxba3hJXvZH11N7oyGpizwvX318GerKnVsSapZY7BfzgSgZ83F3mDteuD3DnQgufouD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wvdk3CkCunHRKptxtMWu6LLd6yG7BYABmLR7uaCS3PWmkkbsdH3wJqj6rZqSQzXvUnKpAzGyzoQ4tQJzwk5TKFo",
  "key1": "QkUgvxaEUaNBs7n28Up8tpiP1YvC9PwnyWGxsdjtKDX8qYL2aUMsf2csjRWkQ682VaDRmnRJ8xGUSGhje1YMZt4",
  "key2": "2hN1xpqr71bJXtxpixB1KmHf5VDUpFhLfdhqbgqKVNbm2JGo8wB9uoRShKLcMjroiQmnoTUabvKKZqBbita34ZJm",
  "key3": "38baN6RDJkKW6KiXQZVLkvkPEyhSw8TXcEY1FiJu7ad8PaVS6wLi9P5KiuSzVgB2tP256qfKfip2YJh5WP5KwGdE",
  "key4": "3qGPkBSEA7nGk6fgz7fApAWEqTzn4k5p2zSnZ3SypXb3fajk8enYcnamRugmouowbCXpP7A3SBefh2qiM69KmUWm",
  "key5": "3GQqQVaSVmpX28yxh3U5DQgmimqoxaUzc1RF9gBhdEY66mK1XM9bxiY1YoipquUFDtDF8tXtXHonDiQZvxoM1Q6J",
  "key6": "3HXXS2RT41RMWR4KkT8YNEpPv7Fxpq9JXBXJk6iR1po5VAmEc6HSFvxCV8q8W6VU87Nufi3AyU4DvgS8tP9wNKHM",
  "key7": "yCyrYsgTNqNtcMiqBnHEGUMLaaUXzMtrZP1dz36MFnrAcaV37wjmX8uhkmMQWgaAVUouuwERUEvqLKUgjK4nYKW",
  "key8": "UkBXqP55U1GjKAS1Q9rgEfDdrcADBVV29WMnWQNPiuzN4L8FvewvuHLvb5EsdHQBQTYVvPnvMnG7yMraZ4yh1cL",
  "key9": "5c4WYko55GEPuj62xANdGqxESTsrMKNgXc9KffvF6KKgikWd6p5N5QxhXrsoCJcwQKQ5WYc39ZX1hQ2fktMXpxYV",
  "key10": "5XEduj3DGBHTHojY4nFLVFmkKiUE9YeoQyNwnFYPdkgZBeCVYc641RR366tAm2EWgvRJGD2LB7h2V1e7rbFRPgW8",
  "key11": "PnmspUPZT4vjynWctSt5ccBHTwreCTe9BENGsBKVz8ZzXsXKMCB2y6tMLMDToGk8EVbnEWrjatSeJYWnPuhXnB9",
  "key12": "3ih6fdeCbmhhQV5DUohBNAR62wixe8jf2ufR4Cmhc8pUCQRXxPqkonoVfw8jqxJ4Fw3t9oRKYczQKssy7u3xmheM",
  "key13": "5ZYwjV4nPQpHJBEChfz67PDpE6qYd9H3a7JFso3s1FfAy6s3LYik8S8ioTXx9ubqJfogdDZwSvWy4GsjEXacQmXC",
  "key14": "5mxikFtE7QmH6shPBkZvTmKzbniWjdBaaRhyzmCB4ArcePsDhaWuXUoGJoLADojQfiP7xkdL9fqWHAb4uQ21Jd6i",
  "key15": "9utxz78sHn9koxV9FLhBRZsSjAa9SLiDdrVKvUjoiCfyu5pQYjdioUFq8BkbNuDQdBvbcMuioLuPtTjZ8BZHrKZ",
  "key16": "Ba3obCvMiViUUYa3XVDgkmcZpX9RnkWby4U1wLTsHWSKiVwu8q43coGCRuaLP6xhNLat3TVbijHydmmmuZ3EqE9",
  "key17": "4xmXLXsvWkoeceh9qyhEEZFok2bGFCBzdw76uCXigyWhmyH8B8SwtP66XA3cEj3YvcyVcRc7spJNExvEjiDYLgz3",
  "key18": "3UdvdvjkfTYVkHnxfrRH8u8iHZfgjYxgQp1ncpa8m4vdzCaFdz7FoUS1vemTNUpSvch5PedURRCMbFKQrwFSznQF",
  "key19": "EVs3NE3rndJxfYub91vLpyAM1QWGbTyxy8ExnRMTQkPDKQ6sU7aXSnwrDABwTQzPZxh1EnimwNWKw1MtXWoGoES",
  "key20": "34NzBXgXaBpGCiEGDv2S8C1LyD8rMUPPmXKcUXMZbBsvrcLGT7CWyH4H9kNR8FqSx146DDiNbPvZc1e9zAUohsJu",
  "key21": "4rDuBJ7hvJPpZLPAT5rtB9wn7FEA84mWLdRjabYMykizetbbfXqnEd3ysMqox7oUF8A9zFVkrWpYyoo2ghWPp4Ak",
  "key22": "3kBjvpwknzzW7Ce8uJcYKQ5so6iRPLKZyicWf1B6kdaUid51TWqDYKuJgfUmMyHKRbMkec1GAcKppGfQ1EkkafoF",
  "key23": "Aw2Ji9wV97nJiq56anxBnSZ4Qd9bMykCFcjFDqp9W4gU5pAveWnvcr865ja4XZfcoyihEb3wyczjSvpxWkuf3fh",
  "key24": "54nkQM2tuakjUDKQB4xBNDYGMpJD8YWV4CDSRkG1gFWXkFBwZdYMjHGcZGmLv81A4D6uDnsRC8faQvv5VVNU9qQ8",
  "key25": "FjpoFTCnm9ZFqKQfov8gsV1fVszqmfM1DMytPfQR2Gpo7gA1RUY8h2qukqN7YeZmf4TrbgJPksGR8ii7rbwWTJu",
  "key26": "5CGMPkd41ug7khB9E9cDLd2HPGTG56G8LDn8Rk9KDx4h4WXtYrBkQC4gamQk2faet2AGDyQhZyQ4D3ajPh98tNFt",
  "key27": "2rpoHWgX3jnGRyYSPxcQD9g5FmJZhFdZpzojrDY9PEo7wbvjGEQSfAQKAD4mYwQLRhonkb4EAcWYagKb7LrofbQa",
  "key28": "5c5tqBWTMzkEKCsJ99Uw4TmzedpCkzUGjqzxM7D9f4VBHfqiVv3asdVgzvK2L5se1KLoWYNBTUM99pmJRBemvnHg",
  "key29": "2YdpNyudMyZLg96bzWxfcRYi5DeGAfMynijxEh5oTfL9qnh7sHAR9gb8dLAr7PSKr3KT2bcsPbs88KMpT1iHfMgj",
  "key30": "2BzbDiVpJsdTDczErDAMc5b4bndfTCZsLsfkR2DGBgoYKA7U4Y2BSQ9nyDrC2gZqYJVKPjzPZw7gVDhVBXnockv8",
  "key31": "5cWN9zXGdzB3Z3SftRTJicqNGemPGqcLBPTJBRH4BwK7M7gQQcUci7VFJ7QkCbGUr7M49hoCXqByu8UyRh7aET61",
  "key32": "5j4uJr6wTXz63SV4dXPtNArP4rwBEHtQhzRxzpKmLjLwiK5WEVu3bFo9RFbZoqSbfxyyUnTTEqWg2Yxx2CG2d8VZ",
  "key33": "2gcppfVsJaVC4k9s61bGHsFVYEjsgPUHX4ow2U6oJC4LXpmJJdv8XAoWbXrhHxNPWm6GLSNKQ99VaESsQ3U3URrj",
  "key34": "5rv1pDuRhGfFQ5s8zWAh4L62cciAzSZRSQXTxjagTAZmCrn9ts3Hh7GuXUAfJa92q5bULQGV5xLPmCENFjvAeA1E",
  "key35": "4cU7CMpScJMiGeBWNr1Cjm6XfXjoVZtEruzMBzyXRs5AipD7R9UAD1WMsVnDDGD5w4nQDPw6AkmoyuAoPbSVpWXf",
  "key36": "32U6s76cNKmayVsFCsrehn7gbnotsq9da1z5hfVQG29kJh4wzCqTb9VuyUuLNBtdUtEtq167eUaW1r2xtN8jAG27",
  "key37": "5DyVt17nKMiF7KLkUg28WqvEmgHnnVFaCv8BmQzsdPcS45634zpRV11ZoTbJcCJxhJ3SakLrduUeMQkiboQCDfjU",
  "key38": "WpPjS4h3zwnGLP78JizB36mbRavSoiNXBmXX7HWUE8kEWYYvpGz3EMRhygJTLKWSwoQyqkBobMEa25TWH8bZAsT",
  "key39": "2L9VJh9whE35qDnByk4Vx5MFbsbAU5hK1Qq9f3BoFEWsygmokNiuA4ztEfzA5iS2uRdQSmWzmsBaENNoMkqLtA63",
  "key40": "2c6Vzxy3GpMsRrUCx4PThbLUBHGsiu7SZwAtqxddeenJFrCAwrW22zzPLF2FPum7RVBn6HCFvfNDbDRJDqSgeB8s",
  "key41": "3EesXCNB1A6JhJLNftMmHL5eN5juGs1UamQ36b6GjtVsgmhgX3yYVhjPR8Sf1ZoMnrA8C3ks8Wza45Xva4TLQDns"
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
