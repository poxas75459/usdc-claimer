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
    "5swxBZnPXjwGLsreKBGHuYenf8U95T3xwXk4X6C6HADpEHDsyJyZKUCj2jbj6WnRriHsvihUrwTKdtENcH7sp5Sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjZCQjFpCeRMBRYvgbPtTfTZhKRgz8j2xm1PuPy67YeL57W6vSsk68e5Y8WmJaZ48dFQ2qbtdgXVpvh8szYazTj",
  "key1": "4qv7CZHn5w27k1CQ57k4ncA6xMNDTnC8owRJoMpwz5hvrgsP8QkbyZpQ1V68ADRvyCma2Bd3eznjHce2M44ajHdZ",
  "key2": "5iqrnx2azzmcQrV4yavZwqqWmvmXG4i4CCfpf1VmVbEjUcKDi2BiJrTcK4CKtuvBd1FSeJFQt9f8KU1emK6VvQfm",
  "key3": "3jbwVgjyKWC7KTbX8bBiinW5KZayPCmowKaFhoymvMwa5xxKa5kHRWEC8SB6KfoJiNksvjcZHY2yD4S8vF2F98Ef",
  "key4": "4NrJuRd3N2pjzNgcZTvLMZLjozvuVmsY9ixn7XCwqzJ1UPBrNxHRc4HmY66pvCwqaBcz6hqX1n3t63MsT1ZuaiJB",
  "key5": "4HnrCuW1AFRnqtFgJgZLGqEpGrsSweyYrzvBUkxng4Rr7p2v2r4erzt8dwgNLAdwyq6YTJUoH2tuf9wdd5cVzc5C",
  "key6": "4MXd5UhJGn8UkupMigznEsCyeFExhH4XCaYhWauKTerjUBsiUopDCHSd6xViwkkvbAwa8PkjQrDtQgf1ZRR2VEAP",
  "key7": "3Hradi3i5rY6tw1PzCHuYhKYMAQHn6F43fwmdCpejL8JYgBRiM9fc2QS18dDiFC87JDPdUXx6PhyZ6TiocnRB2Uh",
  "key8": "ga6YwCwNuqF5du8gW4KHQTrHjjeGzchZuAsZFSBu4ppmaNfjSQiPVF4xqhbxXCqheQ1JR4cuKgD3cLhyrnKu5VF",
  "key9": "2ZXbN4rtJmeKYP7rs975BcRkJKxf23YpihjHG32jvb62QhdcsE5dQnCpcJzVcYs6DBqpMqZCwFEHNpPoBfBeGGDx",
  "key10": "3hBcG1UzWHiBKQAwnkuTdFUr6hAgvg8naPSouE3QJrXr1pCgHjap6Ya3Xu1XvxtSKuae7sJ73GxhZ52BNdLd2cZf",
  "key11": "4x4DFXt9SZo1DgNsdJs213pcatvGzCCAQtKJLsxHpUW1JAG6wX34Uo8T1ncAwANdQoxpUhfH2sQeGjMDzarARFF7",
  "key12": "2fo4nvWtUJT9MHL3vsPzZaz55WMKoortZA3QJh78g4urA6ZvKxxeC9byaUZmZ2zR3CRQqvZU5zvZzB6DLRhFjgKB",
  "key13": "HwctKhhHUMpZBSBcxk8YdY8qTPtTULoQ9NgDSpdthzCLXMWjQoFxvSSZq8j9HguSgLAAyZFAYGKzvT49YhMptD3",
  "key14": "5XbZYUgkYcN6X1AaaP72x7UbTU2euc1XUuTvHbKxMw6ruqWho8VmJwmmTRTpYSfExe9hDnd8qnUFYQJKPxD1etDR",
  "key15": "4EatQNoamDuRZEirPnUrDGSLtrCVhJNAJbAp8Y6FqLSmc17HzEpXhDvVFzjEoz6pHFob5BxoFJz6YHPKvCQtKKva",
  "key16": "3mL5MBcTpWVZa9wVwpYvKxPEtrhT9Sekdx1NvptMtKx2DMR4LFcYXpTmqbja6M1Gjtg3FYGBmqEpwz1NUx8frDdL",
  "key17": "2QvY3CqSLy4Zava1ubk3M8D2pAbvJorTDEfVYe8NWQTQkce2WWCZMHEMCgyaAwJ8zRrrXRgB92CPzPJBhveDwj6V",
  "key18": "2bpBgFDjtKf2o8mYDfeWjddhoHD3jU4QrQHLhyVo5euCasTUhfVdHrQXqueyeBW3EwcH6n7omnmR5diYsLT4fi2b",
  "key19": "3bU2jRdcpT5yjcVjz45LkwW2c7PhBM4qGz7SN2r7GTomsdy2VJtyHwMzAiwMKxsX3LWmKp9ic3xwFuJ3twWeXZ6H",
  "key20": "3CuFk754GbBeXDeFMs4EowHZ9Mwr5aK3mkwQgnQpKkjVEeZcvCJ44HVMFBzhhoKh8XHVgu9NPHwHZQjdScA7xy4x",
  "key21": "VTXZ2JukSgo3TbZXo5TfneZMqhQ5wyoFJeDEcUh31qymDJ8th3smtmgs3RhCFWJhg7maG9weACTuUk7wV1NYp2A",
  "key22": "2NrTr1qkdWkjUNkcyDS4Q8LWWYDXeED5wVnPDkoEVXGUjbm5g91C4qdFZ1oEVquPaVCVF4YJ5GzyniongfPs5Caz",
  "key23": "3rPD55iK3ZkGK6cTZeToUoP3xQ4EaYLZCRSHJrhzUwrsapSqVHoqc36WC8fwQZXKBuVqVjwowKVXb92xpNAeGy8Z",
  "key24": "3g5RNddXfbKeGNf4SC8B1LzBWhpQiER7cg249KCpJciGnB4z8s34zRHxbSD9kjvDxFNT6pQWdPr6s7iF9npBTG19",
  "key25": "4oFem5KtP8m5UkyW5yMZfXqTYMynik5kSX986TsUyLayhU7GAEXwQoPZXTYa4jk6o9FHMbn9VnvhhD7Ak3RW3RkR",
  "key26": "2oR4G2yZUQ25UdaVemtKF2TvDcqtHZKzMiad2gdVSYkpFbwcHnGuBisH9UELBeHKYtnNMnsYGPr4egXyKP5PXwyZ",
  "key27": "2yeDbeq95ofhbSjD45KWXbj2zD3vLQwio8K4AWM1iMAZpSCWgdubVSBNdAmgNtABSstTyHs5BxNSY5mX55pY8CmZ",
  "key28": "2W8fQv2boWCbWvfXadK11WkPitX7nM4QKFQZ6tTqFjdCdJZrfG99i2EC7ejj3o1jjq1nXNKjzAoVZLt2djuf9ddk",
  "key29": "3Usgx1VQXFLwct89YRA2oeB6tjFUJQt9ECZSZxQjuyujvgoXGKLPHQXbtJocV1C93CUX2YpgUiq2zj8Dy6nAikU7",
  "key30": "235qdVB2xgQ7CPEKC1LBGMMx2BHZ61jH4zXqc9tSzgj7iVAkSxzZ8PNkNQw724KNEgsBR37F5noyxZhKTDHTrQeZ",
  "key31": "vHooQRL7NH3zYD7P9sxWnunzfxAZDtfiMtExBD2AKnJevN1UECqc159GbKfLThW3rUXr8Nd4sc8ZYr1BFayMCFZ",
  "key32": "26PzNjqiTQU3SurVv2Kpqryu64WAZHWVxHpZYcNaeM47VmDKvQGgY3c2DPGGmxY3cxuVesXWM9ZNNWsutCwGXtcj",
  "key33": "3nH5gWEoMC3w7hDXLmjXD6w6gYUncDmvgAeyX3uo1QA2wdmDsV2PNWQGWksX1nFKqS2wtKsifN8bsd1YCMRGUAH3",
  "key34": "2owXrt5BDuai6fsN5q4VC67xbRZisQMT6Zom7tVpqWm9pPvWkBP7Uec1kB6LF9hsAJxxQwNBBa9hLPJpS3YFfJRF",
  "key35": "2VfNc4BxtXjUcmGQNuWrTouQ7rozmXKzQP7okQk1MsRM9Z6wg5eKaZevLN3sTsmpW2tKjhsP9gy1Hr3t4g1caf2B",
  "key36": "b2jHE2DaF9A5bQgbV3rEHJXhAvxrqfVXGCa7yaXxs4gBPYF8nmHA6i9Y1nXjeJEuXTmxmCsJxMde3asXV35uvC3"
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
