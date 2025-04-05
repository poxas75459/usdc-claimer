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
    "5z9Uji44qq3apMrG33NrgkeNdgaoce8xxs3mkAjxM2oe19XCueJB2Pbqy6mtMYPhRkhCr4Uo6x1v1x851RW4RMd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hN8keq9Tb5tPGqm1VgxBhtMr916JDA6y9n9ag9kCmXGkcfpBy841LdRGWZ7NMQvrLNCxJtrNT1Ewaa1FcWn4T7A",
  "key1": "4yJMdQHEPA7Ps7ee5pFZVf4seJoaEbC3nbk8mebJW3jNcfAoWCLSqS6PC5xQ2WNMhRc7dvbYhF7LZot6guhtPt3W",
  "key2": "3mdUSkSVTvVYwFqViD4GLsWdWAHA9M94rArcEDSDHD4bu45T7fKyG4QxaMybv17k1SdQZHtZCyGYNeiotMHav6p3",
  "key3": "4fcYCA5sc4UWTtBZSqjQG5YxyTELEzz8vXhcdrFsWR4Go483spFH8HUHAHmR4q1fM8uQaypZPwN7LNfe6bw7yqbt",
  "key4": "5Zq7SEEFGzdmSfXXYsXVBqy2VfuKR3ycGEinhUTi33qDixTWJBiBJmw4mcGKxosrX4HJ4U9Yeg6PvQAPAJWzx661",
  "key5": "3mWYVd5ysTZpaE3Cy1dZ9DpFSdUDimcSfNCHdSFuX7rCYWFHtaUARC4km5N3yYVxAk9S73jFh99Petft3jHu51pk",
  "key6": "2Bj7XhVwu9Z9DugKH2u6xsQ2W59qmpjda5KJZq61E4ShsVCRar93yrQe2NrgZhRyaiRgX1Rz93cMFnusjfCmpdct",
  "key7": "vTtobYW6d2uLU848TDWPWSGrxfUETPqbWETRT8RjKHEKXE2XwX6GzWMZgB8L5Q2NErUv9aBuKrtCXKso8x15XGH",
  "key8": "4w21MTFkjnn19PwkGMMEy2viuThCbX3yjh8pc9D1x7b4PTD2iqWkpCBm45xzZNG126rZaPoRJoxhcyXus9dgcD9L",
  "key9": "3Vo8aQgZPBSPHM61i51V4yVhWKSHGMHxR2wqFkQVbmv7VJ6VfV1dRLRyokYD8SX13LbD8UrdECaj8YJo2vtVArhf",
  "key10": "TjYmJigF7JQ2EwLqmg546yuaESfHkMsnmXbgNcG91es2dV6zDqWYw759ZTYud5pewmhpnox1xhSJ8niSVRumdT6",
  "key11": "2bcFGH7ALnWPbjvqU4jNe5zz6JAqjq1xRAfdNVSUqh8ZrXW8puxtVmMVjWfuxQpmn6vd5k4wMmwENstuC5XBquu5",
  "key12": "519DypmGkusAwLuFgUQrYnDD5ZfymF74DoPVL38nJwP1JgKydTWHrbtkWFaTNJhp9nUk11mzbmWZf7iXHt5LLnPx",
  "key13": "dhZSTP5BgDSUc4dcqcVPQf2vaYKXh5CHhLQnWZCNVU4Yoptt9FyAm2jB2gyqGzFD3LjTket37uoP4up6wzhhMHa",
  "key14": "4th2UkYrgHQJqr5xYo7n84UDpQCT13HgNemnjB4BRsEyQaFLWaVTyQsi3crDDzmvwTYY2jbuFhGDPM5wpjkyXPaB",
  "key15": "2aHDJWEgWQbyquYet13YDiss3ogmnivMQFErMr4DVYkTZ8EngT7GcGgcgnJq7iFhjjQ2X5B8S615cDzVEG47dvX",
  "key16": "2rv4U9XVfKBtBwrwy4VY6AAH5gBSCKqNBCEmR4CX7xDsr9wgRK9DGDJFjZ5hAPvgkR6thSSoDKRB8CMWw8xdyiRz",
  "key17": "4YNNfizXodhr4gLYYESz24Eced64o85Eyy57mBCs5pCHk1SJgq5MLNuRiwqQZqtdUSqCqKkaL58nPUpHpNpE6JcQ",
  "key18": "qvsBrkGSwkqwSgytMybfsvQrtiS9rTRyoZQXTeaxcGQhzcgsxbhuwzw3BUf7dX7C94psa3gDbFXw6p2xuVqqpxt",
  "key19": "3WFWadvqzd4HirGFizQWVncBis77s4rPpyqyaK3SwXeCZndGbWZGyDrYDBPLrv5goY7ANkMPwU3kUh3Czbws4bPE",
  "key20": "4BXC8ZJ6yBLB5ekVnVrj6E4d3t1EnKkd7Hhm9BNusJMAtMQLXdwwDxAmxLCtCNsyqao56Tx7iHV8uUgn6nf6dHWX",
  "key21": "2vAiczwUAxrJWrx2UoFjKE1V2iTugQuhXYswGuPLtz15yw6M7FdLHgS2cpWKXHUwtUW4htXq3joqaKYpPaY3TDKT",
  "key22": "2VAVA3w9VCigGLe6vcNntTjsk8DxzmZAFaL85dRDLJEhGxzAvMDTSC5MWGGLEynRQmibAaKc54JmVA1t4JHVHy9D",
  "key23": "3XbHh1QEE2LXBw7rKyPoAa5dBJhxcd5rCj56pwj1mQwpL4YwkA3dtRFJZdczr84pgAcbisrXBdR46LVmFtf4DYev",
  "key24": "4FvgTHKLX9tbaEJuLQG2G1nQPaMB9XE3WbJ1M7ijjvRxMTLJij89xZMvfzhvy7Qn1As5PBzm8VsU5QvRt9NQUwBA",
  "key25": "2qnTeKGma5zeeEH61eA2ZApCQtaiDpWmWcYs5ix8nwFAawsZ6iSj4jZsCBKmVDX5vvaZWgVF7Q5tSHbo6XFwUdDB",
  "key26": "4ThAMCdDeUz8qVKgoXKw9tftWZWH3euJpQqm6hw8QNxsTVrPLBgMMxZ7WuHWfhXcAQgkyJLJDGiUTrUQ7Sd9mPvX",
  "key27": "4gUF1RDBftrKKYZD1MjpeDVkqLdQVCz4xN2ynvYSu93Tx7pzqmahMAk195HZnpZF2sMu9625jF6Tro5nY4hWRrv1",
  "key28": "42H37bM71L7xbenyveC5zGyazznk7txQBfX5Qm7yoj7zA3tegdcXEeaQwHqHPDXNX6fi2JW1uR6ujaGdRnikQT8s",
  "key29": "3wpcdHimC3BnAHR4apPi5LxscGNcARhfvtEzFtvDZA12ZJvde5Dh2GVWqDpXeyMuG3CrtAotE4nrfGo1Er6aTaZU",
  "key30": "3UecBwdJ4cDhvbFxh3WfMLNYmJq2k9iJrsAPpmwSp1wz2FrfPUaGEepyskqmpZuizStNRsxur8K1e7AB9tnNtfoD",
  "key31": "3p9H7ZjZtTYdK7hmrWFaDBBegU1M9SZueYxAWBJJ3gRxhwa6h3Lj5YoB7binySpZDSUrXgPZrGRGdCehnRtAzuE3"
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
