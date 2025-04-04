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
    "2XEWzZ4x5ejoyX1Vf7CHcPzqfzYSVKpWqR6Fc8Z96B5P6WUr8k7G9Gqy26wweUuVuiMWk6WLUHiFXwKEqstqj76p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUxJfPneVnApZq8xDKBV4wiispjfyy5dQP2FUPWpBNy84S2mtRDxZgTtwYgSLSBDD3zMRcY46CzQEHTDw9Qzjk2",
  "key1": "4VZCwTo2wZgfcEpsbfS4zNXF7eKB3T4MH9AmB1aMzbcFnYjNjVEME7qTBgn4gHeaigRdEaM5P2fHRzuUQfbQJ5qT",
  "key2": "2HVqn4QoGred3awq1wuMCvLDjeRJtF1YfnAjY1XJazEigY5qhAHfKqP6sSdUJ9TNMHoCnmFAqUDyon7QDECJYRfX",
  "key3": "3WZbaR5kwm7i15GJymf8YT9dJJN2xy4S6qvu6Cnq9jwZVMnuMkLmjkaXAXqDBgUVwXQ4uuzAGc5V14uLT7He2XQ6",
  "key4": "4r5hMDpvZj8DWDCTnd9nfoPCMWuZRhw8zdC3X1TvtYsRn1ZgPdeKqGdPYEFdoniow2UNSSKeMhxReTte4e5rFAxs",
  "key5": "3wCNss3kqGbRJb1vqxrQdsKPacM3zsNDvG5c1EySvMD7ED4fs7RsL2ma9fiZT6zaCvUe8pRnaD8CEdqZNuJi6ghx",
  "key6": "3eYET3U1p8HY7kuz8ZPe9QJQAmyUAYMYFFcHRUy81AR6oq3TSmdNjwWsgvJuiLYf3sQsvip5wLpUNdmsL4yEUSCt",
  "key7": "4ZP8y2y7oBV7JSZye6c6TPY3o7PR9P9YHzT5mx3oeKfRmwcMWvZbG3oika2gKzMqBW8ANnNJB1fuExomLbnyBJrY",
  "key8": "4agYKDP75YRbnb4H2tFQW2V89co6WnN1JSsvt7fakeTSPmY1KoW56Xy92xoMaRjFfWDLQUnArzFLbaYiCzuZAv4k",
  "key9": "4YamPLqvanzQgFgu9B92aL5EgoG56Hgoidw8QgshLpMG2qTv4stCLZ1R9TqX6NwxTadrwaYAkGK2Ayx4f1QNeJte",
  "key10": "2EZzuXH8b6XE76FXLY4yNY4m8nqV5cPHazVkVxMDgLMwiGY9eWxEdEP4ZN8WS3nyDtUtnsbUJLk3is2RxQs7UPz2",
  "key11": "nH6gFXywdNSqxiK9TuUxgw5TkdKf2iqRtDM8gZmgDgE7okFjg1CRA4rbpJa9B7UzZ5h7gaZ1U67JytSr9UizUJs",
  "key12": "5VBofnUzELwkvrATpjF9u2rcMZoCWgxJ6K2pktBH5hP8D6VLWsyWSXYxXMmXJXjdsNNTYMcuRzaJTivho1xjkmi1",
  "key13": "3d8uCM9R4X5TpUEW2GdQELgP9sYCx859updhcwBuSCi4zwZnYCc7qEtBBS7xBQGhWeSbUdZv7EHxhiXn3tfj8X3g",
  "key14": "3Ziq7dA6w8G2cY4WP5at7V4auDVyhpVieWHyeVKQZX3cV1tKiTwJccEWoP6XDw1UHW7DwGRsc9U3Z2dQvDYaes8e",
  "key15": "3BpP9EfSTGhLuyTArJvxBVqpZNjM9CCMijQjLLKMkWK8kE6pHnhNWt9gzXFY3dGuUCavc1KEwAS3C49qT2M5K2HZ",
  "key16": "3nhjRs8cAowfs43KXrCN2CVuqjyMBVBNH9m8UUAKeGqS7JjAUykLAiKxz6qw7zvWkB79y6aUV3bNFgM9zq1o5W5J",
  "key17": "5Rpidg4wzifFmLVUu6GoQC5wBUYsL2sbWLaGyyfuosZy62L1AKWZncYwrLQqecrrMpWvde2FgzryePHoAXLK4tHE",
  "key18": "4J24ePdmqEVGZzE4cMD63JmnT5iMY7SkYK8CLU7uFehmzAVPkojagxJsKx3L1NXcMrddTkg5mvwUdAPDfsTmFSpa",
  "key19": "5uLpHC6691XNC6VYfHRLmXRcJxoSXN5oa8yH2tk6Fcckd9zjb5pavUZC1i6MGXUQsC64Fzu7DM6gFZndLN3kTUHs",
  "key20": "4xmX3oPFjD44qbgSzKmGwgQV8H5DyDNpZhxen2rtpRKbum42LXyvfJia2svTEyYRKcvqAfAAPKvF7HZQoyeZNNhC",
  "key21": "5LVP8RN1ZWXuC97aohribophaLAuxmfJmcTPRJ6PVdE2ekrm5QNCm2g3wC8yniqCJuyAxufZkuvPRLxAe4LbEMuP",
  "key22": "2Qp1X4ykdR84F5RWu2c6fDxJ6RMTJCABV226tx471SpBYvrtw4Qr1v5HeQFS4ZznrboQqYBXyCJoeQdWD8hJk4oa",
  "key23": "5ajrC3tR87YVKZPcfZoG64iQ9yWJnzbALh1Efsx7zDTPh7nw52sHwkx3opms8L9VjrRgr3vyNNYyqWmzQ988pBMp",
  "key24": "3Hyo4GBKyYS6iZnFGRceTBz4LpHEAF6ytPEkJMBSfv8BVx2dsQCuP3FEqg1MpSiGYjq8m1kNB5e83FDRnETQbmhp",
  "key25": "5ABzgNp9QBGNPnEm1eKwbWoH771sHFvC9fD3bwiD8FdWTGqzkgdDqg1ue8tFXAE6qMoA7K78dFoZZX2CTGBfBG6L",
  "key26": "43zCEY7nHoDRdSe1aYjztEapdVpzm4t2uT8pJSMvEr868wmBndGLtYcjZ3gJzDWWuZgZj3iLf3KNvieKCQQNzZPK",
  "key27": "4XWRk2w3dt4qDkgKLhc1AK5faRC1PdeuKuFaLzpfCFU9pWPQKkAV3n8xUer4bc83UUsW5fu9RKjLuh7xVKxuQUfN",
  "key28": "66AyEkCPeKf9iETkTrZ8H7Tmkk12Ff3bm2Ctix9hVsxoft5qpMQGFufPeRU5MxS8R6CZbvjpwhecZ778Wi72LKD",
  "key29": "49YpMs9JVmFQGfHY3t1vBsA1tmuEe7QipGs8sAVTgQwYCiZEEhdLJb3kbZMfsj8ggXLK5ZpUSY9Scvy2vEtdr3jm",
  "key30": "24HtEEMd4ZXvoBPDy1gRycSRyVtsgdLUEMAiBQzMCuewvhEtYQs2HCshDi1xmN9hBzx3oRHjDqdzKsJ723Jg8qwS",
  "key31": "4ovSjPMbhj6JuaaZ18tDA1AYRiTQLLWWQPfPfnz26nWDfPVxkXuQffmftGwB4nzvXpSbPJPtNcqEAhZniNfz3NoH",
  "key32": "3dG7Y5o77JH3qcdDveqXMMjA4Bp5GEHrBNbQDJoXs9tPxxevyka3j155FdvfZeo7MFg49ZXwB7ismP9GgUYNrf4J",
  "key33": "3SnpXmxC1LiZvyRUHiCRPe1spZWumSwpp38ceg1aqyE7jgzYgFLzGSmTn7cLPNcAMFkWDKuDWVLn3VoAr4w5Zs1a",
  "key34": "3hfdU6xpfPDYmRFpqswuWDoPipns3wmzvuMgUR7tMvzLQFi2RvndSD4Y3UpQcR8WvUFe5uzybTbbhDfddxMxdxG1",
  "key35": "5pGVcJRSotGjqJ1qd4jrw5kMtZmQATJTVYzKLYwy2pKXxxL7wdNt3aGN4mqNuTqCvUjZvi1WcqEj73KHms1kNWML",
  "key36": "2yfXHnKfGGhzgPkqpusA5y8dCYW4WyPynNQqg8c7pwuoMsBRGryBV2SoLFwReVjCGAFgEhNW7cvwLcCFDNH49U3y",
  "key37": "3nKbBP9KR3XB2Z3p3ajAxFaVGzYUgDVoiqFAvrTR6gq7dFFnSZJzGzHyaudjhWDpMWSr2DyvYPNNcHyxweYqp3yL",
  "key38": "38jF2j12NY6YMNCcojdVpg8zVJAwfxmQtvqBPdvtgUKfwMHvWuvedbpP9BBYkyzGm4zQKGuRFEChmC38G2qaQnGr",
  "key39": "56PpoLLsNHvuZs5MA867HhbMgP9ahDPrHX2FoUvqkxxoPg6RNQmBHuqPM9fX7jBquYnPrtAYvV8G4jbsHHqV3T2Y",
  "key40": "5Z8nEa1YegciwRkc8eM6ZvXWNA7nvaom7ZpZMrHmvWYyDMvmWqdjMNArWan7mkPSFyCFzNhHSWPwJw4tZx1KRxpB",
  "key41": "4Nrtyng5BiAuRsHUThejyKQFs2s3kuSjkKESays6LpmnB3bCWRtZLHZCs4uNhxAmjS6U9RHBos8QF9Un83vnNnH9",
  "key42": "5LND6dnEsXY7S9gvPQAd42uReiXBMWrMDowBi15HdyScWsYauesyDCZc9kvu1WrqKFwhU4rHg8mtpaVETxszvKQS",
  "key43": "3ZEntdmheEfoeQQ9325DiPEYBHqaLF2XmL6jN3dmtcTcPfLnzViSahGc9emB7of9qeszVksS3X8mNrQrUwg8vLt2",
  "key44": "24YCRvD4b9jDGh7FrZ9oEsq59GhTasoDYmsjCwy2xE55R8mEMRj6HgBPqKEJ1yJFV5pW3AVCqmKuSCXi7vBPg2Wu"
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
