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
    "2R137di6fNVpPWAwJmHYEzfmuHFz6WkmKHcUiZTgkjVYgwdyXLeC7kJmksksRCNsFKzyWcVq4Jf1JZYh4kLFiR4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n61ZWW8F31ZaJaRanqRHMsWvSxFKRKAJGf9crR4MJSben9n4rT66G9kxCrPhVHXCRny1Ta6cgHVWkYdJriuGZJA",
  "key1": "2hJBCHKd3ESJDi6U8q83iBudNw4SUkMt8XAjkw5ZSoHP8dzRow5ntza1EgkbPoMUbN58ha4Qp4bWKMwfBLXTjLuj",
  "key2": "5Puo4xNA15LrPatPDynJuTDcsPgJAWWGnEoyamp6qru6rTdsYRQGtWVqvRe3u5gJ1mRSRWZxVdU4yJcyjny8Djqa",
  "key3": "2Dtt95cM269PBUw89Mud6hK3Yk6H6MoHQKDuneaPraz1zJmRVHccYcXx4CdmDUFmV8TSeEXt7WKyy7aF6xNXCw9A",
  "key4": "3JtPgBQeJbeBJAjwQxqxxpUDE53acKA5umz15jaiYarjztkzXqev3HUFksDQf4PMGhwAw9FKX7qiRZUpnBkBkaAn",
  "key5": "585L45ZqS9N8GKfYLEjbCnG9ytSLRAvdcD3E5zqXpu8n4zeWueuSD6HvnQ8n2eATULQRDvEGZ1cTLDfQDP3rQzQX",
  "key6": "5g4NqXDH7aCyjMMk899cecPwJLFaACka85d5sqmeVtdtbgwWobYpjwwMVzJNPxer4dNk7oW2wm8mSoVAMxSHftWt",
  "key7": "4tdGZiKodhrAkQYgKGJJmRkHx4yYSipvtsCekSnppnex39jSST3mzsXwXSTLiA9sKRuqYTqZHmeA6XuAp2ozuJUY",
  "key8": "qk7rBS7AjsUvv7GfbyjQShcKhx2Xvd2Uzv17hiNA37qfomijthfg8WvT667mGwL5NDTyFEc4pQaPb69o9Err3dT",
  "key9": "4QgZqTVXUXTZZC1SppUFs7j4KiTiA33SgJLvowatdbp1YHrpXsdg4LyaPYjk6Lqiz8t74PS7wjWSsoaohLG71zwG",
  "key10": "2KxNDb8J1bGnJG7DwWCw8qwEMJirdx2S1jRefUpHnvPzddYKtNdfLMjR5c2sGKYY8PYiRPgZMnNtfEirJQM1dNgB",
  "key11": "3n9kcxoZanNxYMzzoUMW6r8JwHv142fFYm6H2dz9PAGkPRinn7FLyfMY4cqpBZFxx8Ujgw2qVBkXEEghgXP5bR3M",
  "key12": "3GfeHa5iWuGxbookg4yMbfoGRvXAK915L5K4z6SKMBBow1CnBeZ4sMd1esZXCskawAnmF7CH9kpWMDWT8vS3dzEU",
  "key13": "48G9w1Lz5pVeA7dWtVhQ7jvL1KBMs8ZfAFvFsJSo6FMq4iVPUQXEm46EmM47j5KYEFKm6qNyx2qmn8uHiuyJiAHu",
  "key14": "qyg5aXsz4c1Euth97xknxsuBSacjEG4Kq3bRiLWh6dPaGx9jrdN34KDBhFshiGJwpUY47bGHrQKvtxRXqzViTM9",
  "key15": "2bFbPVbau1RTWCMEFHuQrxYPpBQGivULoxuAgvcj9EpsaNsK9DsesGRmbCFwkE1zygNfawiaxsCLWPN5dyqq9Adf",
  "key16": "4MrxdXhnuzZn1BcVFgtFGRCPS3x4xnh5y6MvFKWVxMsRAhwnuPnTw9idnrT28r4zeHVUw6tzMnVegxDY7UtccHFD",
  "key17": "2MYu5xYrfUuwQnoaqn1JSAQgfAynK4oswdt9qdW92NX2r9E7UrFhx3ogTXg4m4oG3NZGWfHjzoF9b4fqTdDfjQv",
  "key18": "3Jp6UyHFuht7xRDTJMkYLYJdjtc6pQtJykPQTQeuTFWGW9bgx7GMxBAvAXFXQaLaRrSc2hvH7W4GrZKVToFs2t9P",
  "key19": "4YUjoiGA4z1Dm9UcRYSGmrvsu5qJ3ntrCo8eSmHcYaAU2M4HnS212XQKCBGCJFXcxJXuqT8Qa79HjuLDzRF9aaAH",
  "key20": "eCBw9H3xKXYd4VsNPZHvP7PqJiXvJSJKZdhCK2MVZSVPqzGfPDNHmBFcVwCavmhNx3E7dzRwVLRyVWREnP59a7q",
  "key21": "3oxwW5kbef9vKFuV3xkpbkvEjbT8iHGDLue66cdgtn3VRaN8Q4cyeHuS1zsAVBVBKBTRGSG92co5dJjqvtTbhGXa",
  "key22": "5KBQXWLbCD9SSwEfzVWbcwjUxokfRo79mZuVT2xByfb3APwxNa4TRvsaf5KpnfVZVrjVBorDxbG1azVms9Dz6iNA",
  "key23": "2ukxPg3NbAjSMFLTNsgzYdK9HMVVBP36ZCfYmuUtLMZWzEyKchBUnb6vP2y6vy4ynSbk2Vm1THoeCrYrDFp2oFhP",
  "key24": "4h3okJknmpHMSRhYL1wASArEv2vjQ2odM1HznZHXBMDETkj5jBiCqv4MyVRNkJYvNmXgCqpFqL1K5MXn8rHjw6w8",
  "key25": "61JzQ7w36q4JYCc2nmoGorbukhqbXEkT1dXCUTMmTj28Dn6DnAQmp7JyqHKgX5GNF4mZ8dK6XLCh4hjHyDycApqT",
  "key26": "u4UhCXaz9Sr8CDgZg2ebnubTV28erNR3T1VeVBVsPpoWUaDTdsBGntCY7fJUyficqiWNFRHNgtqEaMu28RcUBZc",
  "key27": "4QjdfLsxjivtWGWr5psiAaN448Y6DjGYS5JiZS58PNkkGTKEcrSyap2T37kKagDLHn1Mk6Tcm3cgcw6fBibfVgYH",
  "key28": "4ywNvrRPqLxvPSYst7sNwNgXcajmF7M7tJot3ex1cPTVjvbMrZKLYqe5i8i6ezAoKVwYpMqUr1U3ZWb9YZoBbgEo",
  "key29": "5NmmadGMU6yct17y6XLuDdFo7Mzj1nCtZd9tCubHm5oAgXx3SCMFXoFus7BuSwF7UjdVzzsEKGP2NrL6YvFq9fdr",
  "key30": "hkzWpCAy6ANatwABoySkqccbPCWGDeRKYMX9WkXk6kRLir6sTnwSdcmyFDt9a9LTjJtMnX6jCRCkM3dLxt7bDPo",
  "key31": "2YFP6NSpVEjbSQiTXu2qCzrnRTJKABThm9LMo69gUf6qBrDSN3KExa8LrNgkc4zs9p165erbYn8NFnEN6WtwVuPq",
  "key32": "5S16tx7GaaEgzny9EQYEVxDM3G7ABF1h1cbAi4JTMbe5si1Rbi9asSurq7tCFSFnRyRNo2yThNNwVfHBVpsbudr2",
  "key33": "3gAdL1h29hkLBYgQzN1YQxAdipr12T1RkR4SLWZrXbRPch1jHVwQBU7P917y1xrWJFk8dW5nka9GmAxYHgGVZ4Ti",
  "key34": "2R5Z5Qm8XisdtkEo41r3NWbs867i957ywQfwPfEVuRnTLfmqPTrUShZAMv4kgzmrMdT8bZVfYmGHxo9HG5nHvHzC",
  "key35": "FXGnAZ3uFeo5yzZAumKavuWPU82gFspCGtT6GuwqsccUKUTZqkizXk4oZXN5ZaHH2z9ULmDUbyNZyjrvs3xAjww",
  "key36": "5Gbbvf2jBbqfgUwyhHSGuqx6bCcs1QkXXQ3Me3SLHwphQ6w5YjvKmYnaytbMtqAubPNkLwB4h3ZPfnPpgfC4qBrC",
  "key37": "5jdFJMCUHkiUjCNsbTmLMDQon31hUmfZr4gE8F5etfitB4dChn1xjaYZAGe5npkyLehC3YaW5NaqoUpQsL8Xaqu4",
  "key38": "5RitXsWTSuKFvg9gYbrauqJXK38mSCaXcS4LZFXvSJwiMQSN8EXbAcnXL5KDtFXELHKo3m6gAxbwX9eVEe3tGyAg"
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
