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
    "5ux2oyEXsvXJ1tZFZvRtxNoVwiyFUdXEjBHiU9ZGrTM9WubzXRM4ysP56WuxjE1yiTLHSHZoJZA64xAMubepNSt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2frkuCambMaJsCuu5262my7FfgboCLkC1M1T78xCDHwS6DsLoqLSHWSgmH24tYQhDPFcoYVqFLoVRyTNRLcbyq9J",
  "key1": "4ctPisaNA8Dxc8B6MxGSHZdS8xaBdJT5c92eZ1tqa2Vb2b2RR7FbYCYFrTcEU4X6bnWhaWDS5TQbqZfQAtigQMoo",
  "key2": "5UsGQpuFoQAyTPMJjpKqMdAbw2iiPEAuGm41HjnNLRVtTspszShChuTArUm8p9ujbykm4jG3Z8UEXjeKDFV2DJKQ",
  "key3": "44H1Xy9nputYygLg2456ZN2sZ7S4dzUXuXevK6ZLjGLv3MVaf3SdGh7JSXS4vMxBY31imEdGpMMRfyiBxSNi7C2N",
  "key4": "2j4KfXVSkf22d2YgYxMpHhbdLgWrHAGLM4oDh5cm8EgjcaYU8pixas7VcbkmpT3rRa6msUcmwQorrHnHR2cJ2wum",
  "key5": "pDZ8B1qqgd8xWrSuTtF3BjLzA3DvJztd85a43VAuzi1ns1nRFXitSjiSAm5dotWvUJppQJvnxT718GJAxXuMrHn",
  "key6": "5mnocSc9nRXXF4ArG8HNG8py8tdygoUPsrXeHbjmrMcUGubic7Y8XQeTJjYBVP6XSpCadxAfPU5Hx6a7E5wb5MBo",
  "key7": "5wkQdXcPKaJvU8KqYh8i7yrF7iT7i4xxow1LPbK8ZfvHjmwq5XmBit5cbsuqff1zTM6PgYPych87E9pBVeNyfNrD",
  "key8": "2ELdFPMWBpNYTXpk5mKmm1qGeJoNSHC74YTyGwMdeJxh4dkxr8CF8NeVw3EQATRtRuQ9yYx8e6VdD2c31zLXxQhM",
  "key9": "3rUE1V9wtChRxaJq6VGKuF5ii5bHHmRqVdH8U7nmeHYpDvSTn1XQ8qZzTgkKZXdCWTo7752huLG2Nuw8r4AA12Ga",
  "key10": "4GW8E6iupPWFedrWRLZZVXf9YHWYBPLgbguVMgehoJ2cLoCMJBU8aDxfka5cQA5FuneoVhHdiHmRCd7j5Xiy9Jtt",
  "key11": "128VnALUjz33E56daVyjYdbydeYqZEJrKs7wmW9H7RDFarowvjbne84h3ig8Qyv76ffCa1SGZb9ci3ErPyLB2ts9",
  "key12": "5J215BpcosFyh2A53jGYmD3zQeWdGoNDJno3QMyodqgqSXtz3TEpNQ7aFXH1unrbtau8hABRssxzznLUiZCdtwzs",
  "key13": "oz9LWc7sokZXjUdFZkEu58YXEEu8C74b5XsPNwF1Edex8iCfXPwhG3SxVrvaREatRyPnwDZTV42HLwrP7dxutxy",
  "key14": "FZXE8zGYLp9V4LcxJcC3AbEBMHnn8AR9tXeeQrrnBV9nG9wLRkbDcs61jYhTXtoJeq3r5Xak1jMqkA4hChNAJ4t",
  "key15": "2h2opmjskPdErkAujMer5n8mRhdeu5tdgiReWNqUyGVqVWUSw7XKAMeUKSDHvXpiohjrehpckjT9Z4nwov7QXVjH",
  "key16": "4sg392R26sYAQu5LVG7TSwd6aHJCzaCN2rodvka7aWz714VwQzFfMJYvwVxQxBpV9bA5nsZttnVB8n39LNr1CEfR",
  "key17": "2ro21oJXCZ6rdtQkMniHXeSrc5mbRznzU4DBKU2iQW3fMFDCyzhRsZXFN4cNdR2YbK7JT4SvTKhS2kpihuKozEPn",
  "key18": "4NkTCkAaVPixYpos9g3AruHhABg4dgh1yK9X8JpCqtnhKr6VpzZ7zfuC3KCfuRyPYV1cHMTYepDx8g1z5nEByhS6",
  "key19": "3UfrchncjkSDNrA8PGphy7nkjsWhQFi7uRQL3hQyK3eM87X8Regd3Etcdvyfrc81ttWfAbWHaVnCa27vvVQQ4wi3",
  "key20": "FnSRsgdRsH7qK1t9rGYVkaXgnEtJScQqdfTfNCkessXQR3NzcaYK41L1w5hVP7FmSBCpLoFM7xJ74ky8qbrqS1g",
  "key21": "2C1c12ZZQx8dp9eCWZN83wgY9BWvrwKNsKCG16gmoBZmQxgRFAiiLvuC95NYbNENpXnxdVfYGAC4JXpPGUHcLC2b",
  "key22": "5a9bxemPaAyEjH3mR8syp1pYMB9HxsYaBVmXd5Bha7cpYaitEnPBRutngeY2MiuBF2Z7fisRqCiW3fC3hmqVqD18",
  "key23": "3dV4ofTyqaiQkcG3Wufra1jDm8x1sCtR5Sa97we3fi84XXAU2y6VYv7gkFoNB3BsnFRf2QCnK5eNeg419XFbw9ks",
  "key24": "51uJfJquegEodz8pVEL8Tp4reE1ZDZ9JJ3QWYQVpHi8BoKKPJsmC9HfJqV3AwFTTQ9V7qLQ69hV15qBe8bkUQdbq",
  "key25": "632g6mf38PnUdcowukSUZrtxEjMcSXnYF8oVC2tVN7jLq9kZWdQHfZXdFSKGrucWFBHAGGTKHGkiKdeTMivH4sDd",
  "key26": "5WcP39RKazG5a1RibQh48SCYBNXHmW78hm1pfbgpDvfX3N1SuGeDwERgLEJwsG3QmhbZzQkkje5SkE7rpEDtbQQh"
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
