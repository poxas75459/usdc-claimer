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
    "choGjVTE5v83a2k4HPmxCnpDLBQ3LVwNEJPfy7ZJ8NMt387EybVyDicdd8uFQnB4aQmjgYTt9yDnewEdDe1mcmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "feXEmtyThNhC1Gq2h2Zeo5RoDc5hpmuoVVCZYYNFyCzvtkbKiBGKKvvoQV7ZPt2BZzoA7iZG3RYJc5eNrUW2qds",
  "key1": "2pqDyc8XQgm3URyxLifAuk4GQ7B4JJFacYVy8NWCjwKo6Ke61X5TufazH2RAVc9xRLZpndGjWgASaSkE7FKgVyxh",
  "key2": "3ATkQnW44rq91igytSsgbX1Ggpk8xgcAXFcZ1mNG4mgR4wrBDxdV8oeUUJuJPwWJYpHDKbGn6HMGqbbbPXzAYrRo",
  "key3": "2wEjL19FFb9HUAGQ8NE7E4ABA6REwZrZUvXuVGSt9Z38LskR66SSve1RzgNQhMvhN6vmrrFvfHzPdCRPZTgBG4L4",
  "key4": "3mNu7FKEyUvEhnKF8UbcrBQFPsxhaCVPhtoAQ9wi4hBwXdYARzf4Ch4GXVCAxEZQgMQsE2L1WiAzqeRaGofpbCbz",
  "key5": "5fTPMksJANvZ3Ch1Kgo41Bksz1S5GAPVoLnXyeYt8tFKMebvfY4SHUs9kgTyRqt4JjYVwWn9XNdifXiPuctVBUHP",
  "key6": "iTkKsNZgK3N3RFypvFFD29QJQeUu41fbB3Cdkm5iypijx3tZ5ViG8W9iAfQu1Zf6b1Mmj4JJXdiAdhqDY2CCbTR",
  "key7": "5oxTixPmottJBPvekkyZqrrgCJhoDpEdZEvMnx7UntNusQ1Wjq4VXdLDFBxpa4vckT6ru9QkkfMAQPkebzqNP7He",
  "key8": "4r7dbqmmkjYhsJdPeoh8FWrgVcN4N9rxHD9EfEGDRqn6TyQPak3JagNoEqsSUXqcTLBKEZXsDgdvcyLq1QDzq3m7",
  "key9": "3SydCxEn5J1dgfAgNBywoNuEkTmbERyzok9NHaHeQZd3A9Ri636dVfTgcrAv6bvAgczSYXBD7PbK2wkr59dDwChk",
  "key10": "4bekzmTLQWaLxGHPGVBytLq8yt93RXAtAJAqDiKpPTmyygF58EuitRjUH7B54zUqoRZfQUHXWtmG9CZN1nXGbiVJ",
  "key11": "41JS5ygfb17BU1q2Pcj43hMoDv79N7cvQNbmGw5d3fFVJnMrie27j5UweURkqp6d21QzFUptzsbbMBg4CGDaYSTP",
  "key12": "4Pr8EpkdmchXNig7K59UGEyJHZBy7be3Dj9TU1v7SvvB2CoSCRYtnLegqk8CvzVVG4N64ijH8ktB2vtpug6r1JAS",
  "key13": "m2LL5hq2cDdCjEtH9ZqiMRp9YQ9FDzM4yyQD7g2Txrq1jcPCHodNypMGmAnyBwYvxe3Mrh1Mf9vDGfPC7WPVtN2",
  "key14": "GSKtahXvoSjp58kwB6bzMJzTxTto31otkrhwXphYYeUjTYm6qCFKPTYjaTXg2a8dLQMYWy4pQP4c3H67pVu7ALC",
  "key15": "2vmd254sn3ghCjerGYgmgySVcxdEcEe2VZgX5wm299oK4VZYTfsiLg6HsurBLQRzmp2TjyT8xb7vQqjDTz1N1iDM",
  "key16": "5LCQJQPyYrSm6W8b7UupuizE1Aq4hSQZkUssQJ862qg38jevuwLDPQYh1F49nquK7cPqefZTdYRZh62Vst3XDLM9",
  "key17": "2wNHmT2vbtxxHJfkK6E3oFFHbLxqrGHd1khqbKNsJEnQXWWu34bxifArLBctWSL195fz5Dp7W8hW2fxarFK8rwiD",
  "key18": "5XMG68ThuAwfE1AcVQsbYDj7YBuuSrPsSr1hFQzootxaQJjXJSD97nqbcbef2WxvjnmPYm66epgRnVc2JvJxfSnM",
  "key19": "4375z85gTLziW1z2mMBpiUiYF8YqcoHnY3FDJRYPmA2ePqWmMTXmqGN9tLKhx1XJh2WMGmHvV6bgSvi8FTtDSyBW",
  "key20": "LVP6ibUsfarDdmq54h2XEZyvcRzrrk1S9RAocaXNgSor4EEFoiiP1jxpLxRfmzHtj4eLapF4KHi2RR3Hh3r5uGh",
  "key21": "5GPac5byoUCKfE6XSj1xLFUA6r2EsyCzAEqzKWUJt59RWdTeBNX4yVDjcZv6nneAfUfrx4DgocVD28hRRMQm6276",
  "key22": "58h1uUECqzLhWuny7NniS9cKcP2EbmgQahT6kaD51fCdm1U6mxioNiFExKrAPXHjeDt9JnBYFrmLRSxTSG8SgkrC",
  "key23": "2gHDovqCpFLMRqFuHDJ7fEUj2qLteGEgTeqq5J74hhHuA8QyA7Ywd5DG6MCkLBJtVBf8WaKePeEKEPsUi6vrojXt",
  "key24": "4RLedY4tAVDBgkCtz7XNiAyv837S1WT4kyksg1SnkP5XHZR41MKrckdfWd6v3Go9vDJgauFrDisMkF4ZbYxXP9Sj"
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
