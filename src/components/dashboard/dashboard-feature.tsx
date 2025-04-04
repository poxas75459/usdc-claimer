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
    "3k8MrS6AmPEfWzGMCRJF7uakgThNbE2qTDYE55U7hbxWrdyzAb4t9ASZNdwzm2jcMzpYwbk1tj5Sa4g1xESDw5WC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3am9wYeUsxhfMAMbBK4YUbX4h6oCMMrgPb4eTZX4uZE9qD3HzouG3BrfeBBdVh3J46RaXQnwUDpPMa9gh8tFRseg",
  "key1": "5WcUWh2TJaLd3io6uNCW2gR3bWowDCzwbqN7KKb2XLh3s8gdAAUht74EgsqkeuJ5J3YPh9xHPYc7PrvTPcjTT4nF",
  "key2": "32CKLG4o3wPRREa96faWNhrwfmkfndwaxPLs4gp2ZSA8Rj5dAgWkyDCQ9G5YLXPGFTgThnEwL9ULJXh9XojGCVuE",
  "key3": "DST19aMadRDudjR7vpVDK7aTd3Kt2vu252iMji4XiJTecaK9tH7FWmN1sDvSBR9CMux8k8v5HXoK9seWCBESDYo",
  "key4": "5UWgN1opw4fWKwoxQ77ecgQHRbCV2p3MKPDd8kwFkCL63dy9xorHgL4MSYVEGTvR5WASTz1Z16MMbyTvMzU7EirD",
  "key5": "5dA7nudJSisoy9Tog5y4wg31iQZpLEE3o6zvwExk1Gi8CFDNormnpVHq1hkwh1mM5nYVEYmFRKXJ6vRY68bC42U5",
  "key6": "3GyqfsYFj9SeMh9ZueyoXPEjV7bhGf7cbapYZQp6KWJCYB5eaJXYiaT1B71TQaY8AYfSwyrncmZTSjTzHVRi7Mdg",
  "key7": "2utMJHN7PLBf9RcD9CwK7wjimGP8JHD9khye4upXuWpy3DsCopfDGY17HiCQhLZ4T9EwRRTVMhw15RXdsZ7iBnnp",
  "key8": "4onu9hMVWpQBgmhbCJidZiJYDYZpJLD4GD6EdtfBio9p87qzb2kp6m8YkH2LNcPBvcTjfHVj1R3eZpexcdnKMcZD",
  "key9": "qFye3RmfkqRjaw5x2gZcSLK6MQuZrzrcjVm3gLaZFobfQ33yvRY1xTJYaKrjuNd4Pkb6RMTquhfoV2VRbQTbpsZ",
  "key10": "3qpCWANeicsFGWBy99MFjGykQTzLAnxxkng6djQGYXEjAJsktdpfUs1iTJBNPXUZSpNya4KCGtku7GWdXGPshd7m",
  "key11": "3YDzFq3cC4xJk9LhCKaSE68HBdJm7mLNVFZ6x1WcjwkcCBjri3D6kNXCyMAR67GL2i1U1G21XXxJDqS7QGAq6ecK",
  "key12": "4FXBY8ubkn18UAiHsLXGxKiEnssGDsoJuNNhervmCSWW3AZr6tb1Fk46i4Nq2JvXF2WESxbNG1TR7KPvrDSFQXzF",
  "key13": "34GxmixXgwxjbVe2JUKeQWKzxB8CoA1Fzy4gduxJZp9nCFeXZyNy3MzcNrRSefXbvSCm8WTERywjdBjtmgPDeet1",
  "key14": "mmWnkpNW2ypXbCiBioeFxWSYTGNbPRewyWH4pNXj4GnoBU8xeoHDRKBQi8S2FY1ak9vvH1fbfJfWWpG1Wk4NBNZ",
  "key15": "pzXayQ5PsDjqPnfbYsXhwfynPqL6Zm3MbLX7jNg6XTqjVW2FUM55TA4DEvtkQE2BmFnXZ4pBPuzgAoqa38ccw6z",
  "key16": "2dHjZGMDQhZkBA2HKiyrpvLa9YosjtSgQhUM5AMSzR83iBzwa7gSLFiiRTdWPoWjTWpaussVrUkxLa6y8DeR142f",
  "key17": "5j6dqDMZEmRzsC2u8uakaSgVpLMxhSTBs2vBYdL8S76QbYd5bTw86h6aaiYGcZ9tsVvn3k4zi1YXsm1nS8yRtinR",
  "key18": "efSoKu5qb3F64xXeLZVvDcXk9K83Cu3bKrkqXtTRBL4QaE7F3an2ywz2yh4m9QWqidREmk9TGPbVtQp7ZisqSc8",
  "key19": "e96Yeg7eFNp2evztktwciJmAL7EwG8qqQXe7NMUprWyiAaW7bwkBF6Nn2QjLnbcYQrW3gHwHdREKkJX5hYAzm5J",
  "key20": "3WU53Bm6NnDC6KXYCK56tBRoBFYCVCVCxPtYazsrFNXTDawkvyFe6kH2Re1pzFhtbd6rCzU7h5pvqSJz1dTarM4E",
  "key21": "SkGCt1c27LL2zmC2ZmeLHJbxqkMubWbYEqpjf5mSBa4MJMWovvS1TXh6aSgbc2RDnkco3cfYY3v9rUPHkDpcr51",
  "key22": "4r7oKyaMEgTHyjedBkJd6hFfB9Aeg3Lwrd4KwUvzytqhnp2fn4utQesbwTj7jcUHyJ6GP8rWMroURxHwTCG3gTe2",
  "key23": "4ChAhdiUyLtA91xPvD6SihqCm5TbHKuXSs8zsD2xm3EgBfDRjoyvwzywUHZ25fMAEjrgA65yby9AL1ip1QqngH6T",
  "key24": "ccCRxNpviYcFLkLgRkaLtoRbaLbRoH4tQSqZTygCpQkxZLoiEomo1B5C9JLghABtm7CUXhDieopYCQcHu7DPfkZ",
  "key25": "3LEEh9cp1upAg5qo32Bj2A3kCSmwzRdKjfAM7ks8JN4N9yGfK8seu4kghV1Lrww34Q987HmW7u8X6JtVyYYYhBrN",
  "key26": "3uxRRpew6oznjuqn6dywU8c1vZc89vnwB3UuXaHBmxzoYxH46kfo9y5EXKhhTr4TFvAc8CR4VmUSr3XoquUVZWhZ"
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
