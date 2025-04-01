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
    "5cnd6pABHzDNKWPAXAfdRbtMopQHpHhGsHJVg8Nq3W5ipsWjS9Ci3fH29pvzLSiySXFg13Zb2LmCrtVhqzhioQfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xap9znf3D78Yz5dtgrYjySMaiLvo7aV2yd678KmKLRfBNjnH1vgGK54YYp7ffgeSriBnZYH86WAz95SqMQu1fsp",
  "key1": "431PvFUomSq8c6EndKZMSVrXeF8TuSoLX1TKPHv8PHVuVm8kaftqatPHB42bCPDkkX6fyZRDSrZHLotHypLXzhGK",
  "key2": "JFRzFdMTWrgLGLCBhGkz5QicNsnB6rLTYq3ckQB3jzhevbWMoa1y3NXbXK7C8KfwTn2d8g1N7VhXvvzy7voEwvW",
  "key3": "2xfdrCpGBW6TTs1YY6JxaYMJCZajXogUTYquivUEG3LVcEitxUySH8jbkjPtgyo6SokH8JoDp7YEGuFCPktiryyE",
  "key4": "3SgTSkvLE51LaVExLHAKZ4FeRAeGG1xTXaZ87nR6SVjiSjHfPBtUFgHz4TtnXrWPmuk7wbeopxd9EqSY2gvv29CC",
  "key5": "SK9yVGhwzUMLHBbJRmALto17Q9ZydrjzmP1p7MRZ9w2cf4saY4PHrGo5kAcRj5boCgpxnw1xd9MWWKdF5mHcmza",
  "key6": "3zdbTVBzq8tvJzJomqiym35SfE4hiZuWBNErHCeaBgpmxQeq1yawaQ2PgeTo9T3CGVX6DE3tQwaQxr7ngn6y7xD6",
  "key7": "PjiaC9eG34Qf27qXPLsBYSWQRCxnoiJUu7VEz19D2JRCySCyxmjL2A4UjW4oDuxV48dALnRzAwb8pX5CKsyDg7H",
  "key8": "CRdtaLppH77b63WwtbwGfJbGwVT3RMv2LsVUEpRPo9FWuHkzMQRhraDbT5aeGRgj54m4ZeZcJjSonDxuu8yJbUB",
  "key9": "zA24MCe8A7e6JM9Fz1PZ8DrTeQ5J5uQjmXxywjx4KCFvkqcKaZz7eGqKkSPLNCaFg5RVqfLGFQyb8MfjApxrv1N",
  "key10": "3p5sBuNpzYSzNje32wynmCJWzVysSXAJQxszgBstQ9zmaL8EKdW2d2CyvMnCZ2qWnvDmanXvuQkqvg1WJz3y4rvb",
  "key11": "3yDAycJ4weVNXGwYjqVTPeak1odWzEtCANYrR1FmXhKxzuotYeas5nCqTpfYvTeAxA4jDq5NQrYQp56HjzVs7mNZ",
  "key12": "5Y6cNzifcq1C7rHsDRYFH4gndYxLtZ3h9q8enxQy7an65xcAu7JbPsT9i4CU8m9z12hiZ2LsySURnHbnf36kMChZ",
  "key13": "5aJ5tPzM6bLbonXWLY99pAABm7jNyeUPt6AXr3TqxLgq9M52cCD9JXUe5vEEDqS1ssBFV5uiG2rvV6bXAPZALShz",
  "key14": "6iZETWasPxN45FAxJz1XMNxSJRKx2r6CGeFTKgDZNw7sEAmbRD9FrvjhaXZuUCwFy4L5Hf3abYMn8kR3tcLKdpc",
  "key15": "5miBPNrNnoYDD8spFGw82k9BugMnWYui9NRFx4pefgRjrvRSurcnT1hR1yqfr3GKfFDGpwFaMVUGAMLj3tdvN6VR",
  "key16": "61B2D8ec2cgQrh4smDMUL9hSyrLZomyFUs92xq9dB6FUUAXmvfQUt3iCTeKo8cj87KgzeZM4H9MSaJDhmb59hUu5",
  "key17": "4kKqPAgeHYnRkWnGzt24dnRQqoJihWrSTv7Y2Cv3xUDXWsVu6DcWAy5UGbHYjPuYr985bJBHeTVc3rA7F6Q6z1e1",
  "key18": "2e2D9oRUxKjiqLjexKspKFSaNNx5sepJV5QR9TPYPHkctGj524XHQAd4C8n2bpfDxMGUfip5dDMXBYYnWHEy3gMF",
  "key19": "2ATdCocC9oVKAyzThsGCxQqBfmMSCcKrANQBQFEwWih7GicWkCdt6eB7awPYpXv8QSQgRSAkBcWD4Zdr5gymwkFf",
  "key20": "41X1ARciqFrtrz5FSAoQyp14K1L5Bw48N2uqrLBCeSBkRjDxLoj9ypYGvHL8rzJ8v7GNqa8tjv21VHwg49cAVfvo",
  "key21": "4jEYR8cd1VMjKM9f7F2ZtPJfkiT5nRrCA4KMSuMrsWAXng3HhpTtgWQ2p2hhBvhzYdsBwcUgqjPudMuXqSwVN5Zr",
  "key22": "4eUb6ppdewbp26q6Zfu9vGxzdSYRsRJBQXtH9Ep6J3kiTjM5haobMBcLvjznarnFn3g6pE8KkNMuhAr3nMheSYWR",
  "key23": "3M2SRkEJuUgnFm3yiaDUJFNJS1rSkqg7Aqg9q2VnUGARkNkAvjBT4h2x9f9awDzUe4cakVt9LEhPXKRYU4Av6taJ",
  "key24": "5M7NzvfD54MUeReQMQ98cLudQmRw6zCaNSFLYCVPgku9oRb3MkRFfj62s62tDf69SUsHdNgJWaLRV2F1yQdAcQhK"
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
