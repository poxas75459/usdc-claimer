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
    "5dMvuwujWvSGGSryGsU4W96iLm6R7NQ6iQbp3eAKqNB34AqAcwdGTvg1V2odVwpZ8X6nX5ChUHEecPbRUNPeQL3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UWFVfGgUzCaU3iPvJutSjWsHvRtidd4Xx58W3FwTfUz1cWmAGTiuA8Q32Leb7kRxaoHASTZq521zHnXr66Kg17",
  "key1": "45E6k2q7bYAkSfHuLXXBfuV8LF7xGzpRepSMqMhueNRKT1RHofNuZB2TRvxzyKZHdfmk2JxSUcA8qjtGtDSL9szQ",
  "key2": "45fvPNrE2DvFgdRMVJCYXmua59CxAJSnRWp3LHPAS78r84ZErNxaB2nxcrn5Vvf8jdEPSCNcyxq1oXQv3gT8CLNS",
  "key3": "49865Ubc7V5GhF8MxVXVHxJy9M1cWFG8sgmwtYY2HmJFTY5eXgNC3CCtD97HmtjmpdvWNzwPfVpeajms8zpQTEMR",
  "key4": "3vN1NZfUMupQG1hH7yKsWrSBijyWP3HFnaDUQMNAcxzrHG4fKUaGaw8ubHKtoFYvaqnZAADTZhdFzd3P9vFkBW7m",
  "key5": "3t6ooZsqh4pFYLJJfyKz9mrcBbtHHUs2EXY3uYXP9RpkuoSaZGQ1gyjdGzJrwUTptMMtoUEmPLqPQpnLoj6JeKGc",
  "key6": "2zvXCpcXGkHdDVpb7pFZtzLPRfVS1xesnEPsP8MBew75kEhP85uhi51A6YM7n54MMWtzQvLxLvNrRSbXDdLMdPTd",
  "key7": "2JRy8B6LLqHHjVkzXtFfYepsQi5PedJj3zrGaqCGVZk2JY7kWiiTC28BRFX6pKoBNGWzRVvYBPLGjTsF7Sau3UeS",
  "key8": "2eFXT7y7QFcVbQEgnTjThxLQnCDHcAnxFBgVHhJbFFtGV1mbb1zPMDqCuhJuqSpyh3PhnwhPzToLG58fc6jSnaEu",
  "key9": "aV6iXCH1JGfVyz2BsLdgASYUa8ZZwXjE4nWdXgM4Pq3YbsqceR52QHPRwEZcHSm6gexhzesVQBBNEeD5627h3WX",
  "key10": "4vn8ToTSgYXMMSE99t6FV8Dwc9b5rtr66VUxBQ63nT8Aor21QUmvk5sFHKV2yVUu1tFSCPTdoGAZW9GqHwRhwgaL",
  "key11": "218ug31gqGm3yqtB1uCNGSB4pkNuG5Fcz8iYg28yqYxY6CVCbHVNpvf8i4nhUK4P96H3mN6kapw4dS6Wrj5gLiFY",
  "key12": "67Sj7gB5nB6eoDJEprWheyvJN7NZ9mXkAqps4HLSF73xuBNbwV3uBABTdawt8UXSM3frdxND2mBcX7pJWdQS8b76",
  "key13": "47UmpRQ17nvATxAmvMecGBMppSts1Q47shBjc2nZRXoYfcwQPtZzphEvGkX4sWonr23R6qC15B5vStNUtuZxg1N6",
  "key14": "3UwMCn6goGDcbCwdGdDyCFYKWtx3yP4rrciZFrLGacEgL9hphEb1SVSuHxRdzA5WhutmFpzd4MsirsVvmwtymPMz",
  "key15": "siy1L4x2eRdXwv36275pZvPw1nNK3ABnb1ggVgcWTt7N2aBJVc4dYz8tbCyiDefQWt2KG9pZfBzyJ4Ue3jzNgvv",
  "key16": "U2aau47Xq8Y1C6RvveDHt7Yzbr5WuJ9yp5wV57U69th9sVhbnsdqsSEwFWZZpNEqc9kxorbzDXNSefGbmQkF1Yp",
  "key17": "MqAsksiRXyLw8jTQ9gJsxDqwqic9ijgbktBX28zdZjYJeejJWyWFGKnKKMDDDPexJGUKd49UeskRFrywpCzBtAd",
  "key18": "4wsGSKN5GgmLtU1Abg2eDDTZ3m8VE2svz4LuUNSsEpX1etvC3NmqpKEgmPcmXC6NK7KfgndMvH5KxZy1cBk29kXS",
  "key19": "2pXxjwKMaZiRwArj1yRXCGFGXNfwacZ3eMGfKjbyseKGbzBJ9BhJfNxMRVHcyP7bcJ1Mn2Dsf3sgWxguEoQXUw8Y",
  "key20": "w3n6Ssx2kZYxCRkEdua6LuQ9reqrDNdgtGzQGoTkUnRiKM6NbuGpGrXCRpyWjB5Awm9sVvnGv5XDn3QK26aKqrn",
  "key21": "5LvS9pfkACGf2b3rwTGz5DMguudX2QgVmrfLvZJ3ysM9xaDzng9QxgdkMRZvJQfBYR9ewdEdDRpYLVy7LoazaUyS",
  "key22": "NRVrBJqmdAg3rtJtbeEkWxRMywB2n7rtrn8BmTEiZTFpwYA1tpy3FcVxmfHQKmaCkBwpny512g65B9cmT5ifVQa",
  "key23": "27cFtkpTxTgifrPPGkGqx9ZTNAcDzaAJjrTZbtmYN6PdvB9AtRnn1QSqMuKH5YvaSyMbTqaiWRpe49DacxkLLLe2",
  "key24": "3mGthcpheGGKu918QjLC1L7bL1rFCogqtdwpCQg48JGfEmDPvr9YzLk6DPNpihsUggvaeaBD993m7FwCiYCwox5q"
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
