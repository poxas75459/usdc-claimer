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
    "2jkBkJXAZGgaKu4Cro4VXPfUSiBuhdUaVgZo71RSsytSUGvgzVnBgYJKWuegsPq5tpFbkBQ5cRyrvU1WSHoB7woF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63X8iqJaUKiZsWwx3u1qv2h4MZ4bfZQAzTgReaRhxv9zF2zFKjLhiyroHmp9DXCQQh6nFAkJNFwXdaFWp3eWsN5T",
  "key1": "4ySPaisLWbsTGcmH1PLXfWVXBXGAtMNkk9E384TGdUSeUVi9bXrTVpY8wDbUhoRNFt1sESsaGGAcJChJ4FqqAfnq",
  "key2": "TnXgxKpTTyLqFaeihtwZQwRG2yK8RH9NnXWmFJX1S4ZgWXLCN1niX2J2QN9rz1HriuMZ7tecFaGDKs9CnK5WzW8",
  "key3": "4Cbvz7VpLHrxHxtixBBc8M8aXNK5nd1VCEWXQ5QpGfokgGxScKbkpRPsPisWDzGB8TQ7T2Fti6Ec71HoNGuFjjsP",
  "key4": "5xxqQdtxK6T8hGw1xVULEVhwwRy6LYLinTVSTz9rgJWahSxxB84wkSse8kfuPtoT96scM6tEWG69UjbTTJkCVAA1",
  "key5": "2wyqDz6L3KhFp5bVMbXXqRMMLTqPSrYH571EmXYuGkhZGbn4s2XBBi9uWo9Z9oLYtven8HDvEfexuLSjM5cfis6Y",
  "key6": "5rWY8GRnSzjuxuben1CHZm6EaiowZbCXqBmwgMtWk1qtHmvuAMZrdtMkXk8R9EribeU5TgePXZmsJyziNkkoDKC1",
  "key7": "4zY3vVDw6YGvhC1pswMWkyjRABgmUz1A4pvpoPwFjBwjeL4ZvKwhVFvEnbX4QLWMCPZkhYkQX1xx2hbL3SoebdSo",
  "key8": "35kPvhY9wnNajdAaAm4z5FS8uxFYC8W77cXxnfiyrqjho6kK1qKa9MrcCtHFqbfkWFVfrn2EhkvKNUQSrWgS7vxp",
  "key9": "641NHFNM7782ubvn1dbnruUGfaUvoaacyDi3Scd79x8gKMuWAJwQg32HDCt2K9VtovPGCdqVNNRWev9K35gqQM8A",
  "key10": "31aE9FShYk2aHdomPcasPxkKZFfXgVNGd8C55XyxBRAbb5UFxP3qNVLecVPeAwjYugM349hvtdTH8s8ynncKmq5c",
  "key11": "2Qawe9VK42gWw9EusaHdtv22XsbJDBGcc3ykPmFoNtx8FiQZ1xozNP3xuCG1YGjnXucWDXzii2Trnx6KW1BjDDhT",
  "key12": "3DevaKZMvTXY9JqNHEPhXWBRmbHvBKMNxPeQfKexEBmdJSzprKJ15XnBrjKFzeMy8oKi5X2ePivxbg6rJS2kQNBg",
  "key13": "zQWu4fEetjMKvaFoysbkfdMbAkDwBNwT794GkBcUtVoquNUXvNNUr3HireLzvuMzZg2TAiHComPTDWJ7hKJJYQE",
  "key14": "5yfTAMgsqVnTQjiEBzPsDeWgpjDgFrRfe1o5NV52pjJUe1U93zwEN3c9Mf8yivWCpCZLWAP5aFxndjERop9bFdHQ",
  "key15": "4dKT51RBsi5WBn3krvZQawNEnKb83ZTLXkwHdEgxiUYPZuLf3XJTWEigDNNGc3rZsdqcBFtzHjtBPukBDsX9wscY",
  "key16": "zxFr5eDWBPxp7HAR8cvZZDFuLhRCoyFtdzReceGmNBbstXqwea9YYsgg6BFfdnjmyWQ4e2AJGsgwEH6rVcZFRHK",
  "key17": "5K2kndHFxRpGXXYNvBdpgGVkFR4nujUsSYmZaJRDF1mfZMAbfcfR5sQ1YrnfAQeNbsr8zdLp3kEHCfjGxk9qvWNQ",
  "key18": "5sM5NeyA2qdrUSQJ9k9gVnXqvka63GAjvtynY9NvuYzi4qDVkMUYauxKvzJGPyHdSTWtTB5vQsoWSfTQdr5sBFJB",
  "key19": "3KxYinjRAdrzakUo9q18ED8SZecvV5BMqE2CaLBRZ8JSUCWHYMmsYdEX4iDvmR5aHB3cyxKikdYbDTyThi7C34aK",
  "key20": "6Eq95uAtvcMMrPvpqtyhwtKCgu1YoBYQf9n3zF6fgztPv4LDgB9KpF6iyVwQ5SP66u6MAAJVwRuCT1i5pz7z8zU",
  "key21": "4LGogY8tSXKovF1XE3CdViiiKHBKArHyo75wGGx8eYcirzjnzQdR1Dw4q3VuMgZz3v77QKcZJAKNBf6gsRUtgBVM",
  "key22": "3mAfeWUKtGq8SCcBsg4V6vXt2NCEbNJn1JMPhjGwa5koGnmeynjfhzH29dqakfds1qWgDuqhe7kZcCpUS5q8HWTR",
  "key23": "2ADeGAL3XAc9ZVuPNWvRPtTUaHBNP5HRANaJq1GGDN6Waat2HtDHtrNEj3QMo9WUPmyvk2yBvx1q2kbQuQT8XTfN",
  "key24": "2JBKLorPjx9HaXLepijbaaJNxNxsz8BLDAyXV4dt8dXN4p4kLWG6Bpcg1so779QarXP9Dgp615PzDw24QhjiqNRQ",
  "key25": "LzxCV5TmBEDouNDSoKnnQK9sMNeqxgeei541Xs5U1XwP3edwKWK1ywodgxzGMcT27V8PjE2d54WDoniZReubz3s"
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
