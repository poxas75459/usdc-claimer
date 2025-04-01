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
    "4qtNkTiyrAtPm6CoEPphswzWuEyAR6SkzQnwKM4XhEhxbsY67epgbJBjr4xxHuUTHjEnTaQMvTehQ2euCVLw2JoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22sLVbdRWJdbUpHfJgD2t6Cfa7WqfZyRmPLE5viwzuKB76YQLQAhTgsmyx2vnJG28Qj4DVRsZx3aLKTGEfrUibN5",
  "key1": "Ub3Y6LcLduyCvUiB3kqCf4fH6cbkRGXar9dCW1fLiA3KAnMr3k1MQ1NZjNBk5x235chfEQhc4oUeuMXUoTjUwTQ",
  "key2": "2Xq71dME3nGkg9J9QqCfNXNiybrVmt9s8nFzW66Ykzpp4moQgGgxi3QuTKFNa3Yg8Ag2wqCsBB4yNqtNn1QowjJ1",
  "key3": "2Cp8wNbtbfYqmcbQoLQbax7QT2xRmXDFLt2iGwKhJ3sZ1BYH9VCShFFVUviFyWZ52idrskX871QUvyowNvBdF82j",
  "key4": "5tyJXQKSvmhXqa8316FfGCpeiioBZu62yepKKH129jcMbovqHkYPxRDHopT3At6g8biFjohCs8P6BefSWC6evRc6",
  "key5": "29D5YMqBnBz9exeZumiLCCjmdbtxMVpLpT3whLiy2jXaVarmoQQ78N34E8T15kDVDhpV4ekCZEAAQphXk7oKmxXo",
  "key6": "4VVC9ccjcSGbLWfUYBUPwofVPoDGcQwN6Ti3VBZQQ97YC8gz6SRqCJtEjRP3U2TRE7nPno3zkg6xnCMJdCTLoHK2",
  "key7": "2QWvsu99Qa8a6HygeKpu16Swor7Rk28CptiuJrH6MHuBfDvcdEyRK3FG1kvn3VY2FXtPm5QuqDm1SGC8a6WnLBbs",
  "key8": "25zf1CRtDctPVGDB8U9zWrbGvoAEUJCPGJsDWSKTRjYxBAos3f5sC6BTNL8dLvahNqxFMEoghA2Ypqf3UapfuQ3B",
  "key9": "5dGCsq4HrF7DkkdBoGWPwvFBvrgzH3oTrNswnw8J5GUzNAAHo5ph2KkUFZYFZjUAG2wFpphVJr8QYXvchzXEQT5F",
  "key10": "2AbedP7QVtuAh5Ma9n63CiNZBe7sAgDYHjrMWePMZYobxU1r77dJrMCh4wnWdcfxtMPnPXCweda3aWg5fBTY4Tpu",
  "key11": "4SZqR5NuPQzFEyjfE7eXzZqgHJHEmCdrqhaGTtynbzuA9wwgnc8vnYehq2wgkqArSyhQmAXLoyycbzbCVFgCYGXD",
  "key12": "2NfSkc5DhFMrkSLqEd2CDkwdyviCF5m7Q3QvV1ZBmWdiojAQ7h1KrGWRkkVjpAW2bsAstAc2tgSXiq8A9ovt4Htz",
  "key13": "5PPeLPuiRtZsUqjhKAhry3pNWdK5XbcShGxhMgS5aTuhauFCYpxPBcBdGtmSw689FtzoJm3DTDqyKWu1pvjFV8NM",
  "key14": "4DSSQHaUziwYZZwNMuYy32ZAtqnRr2V6wYGk7iNNZrGK5bX6okcd9DoDjhPNuNf7fQ4v59K2o7zu6WdXgYicCBpZ",
  "key15": "2LSJmjpKPFMbRiigbpfheRoLyaz6tVNqnxd2e5q4iFPfu88vQZhYwnn4Ni5JKfwe4tS1chmmQnCELf9rVntQ4pfH",
  "key16": "65MyXNJm1yBJ8ccaC4XKKmivKWU7zMNEdyKG8zsLvPxovd9EUQftbwu47vNg7gw2yJCAsARCXYpFaf4wMTLcXVgH",
  "key17": "2uG8MJGiGiRgvgjk1YnoMpppPFdxLMQmD63D3uvFt8NeUKYFdxrfL2gfna7NC3XdQMxMkyNtwWh93MwXWv8dVGCT",
  "key18": "3fUnXYnSUQ1Fo9Xo87gFnfErfdAjdPSzbXe2uAZdfSBwNHxXiLmd9HVwYMLmXSgKPgszdTaDtzkgUDvphdmByMPp",
  "key19": "4Z2QLvhCQLaGGEQ7SMcN1gpSAN84fGFo2wr2psSsXAde1kEgX6tmYPhjyfqcpqeKXpL4MH1tDY74ZVAz3NnkktZa",
  "key20": "2fXN5QP2XXBKsd8CKPvMiFXt72YNvuLQhui4UtGLSThuEgVNwNWEUpWVBXFfAkymc8TSHYNqPiBH5x3nPKFn1Yoj",
  "key21": "kCTrD63oF6Qq4aMUKJMJhww4E7qoPCpxgP1FJSHZe8EvgD2VAgVXQaLsx319ozTuCt2juDdMbZSeb88arXZdLX3",
  "key22": "2a3TEtgtzLxRN1Eocu7nNWYdMyuGd9MWdFBFHxoQNyUvWFX5XTiLwHLDoiFWvMGuyrb2u9jcKEWEFKm3bkGHKRs5",
  "key23": "3SCu5oDpU2Hy8MU2Q8WFoZXvr2qE3ryMo8QihLqqZy7GvCamNBLaVKq6AVi7mH7w4Xq2tWRZzwYd6esshC8FSZW5",
  "key24": "5ZfvsWVk7MEaB29mmcCQPdBJXTg5mTaeEd7k3RybZGbrKq3YeLXapFo8RLaJqfRsPuw79B5yNutUjkJc7YEMBsx5",
  "key25": "DHSbQboU7BPmB17KMVBoHbFqMajLJay1ctWneXAjuRX2fBaA2FijbU6sX8or8pTEgaZbMcaFDuh8YemKpjk5QBA",
  "key26": "2V2aX3iJAMUihZ3Pw4QwAkt4z7rHDNwdYKnqwD1FtAS79NGKM8ZNPgpb1pzbf9dm5GBZH3nsRcE7e4eodLE6bKTd"
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
