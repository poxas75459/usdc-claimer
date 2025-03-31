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
    "5NcN4ovi3SoJbZpJyT91EFezFtbNa7ij3wTN8XBMNfcHZBj1qkpa3GVgGqVY7nFb5J5insSo9zFWqa5692RzJjRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPXwJDyNWpU64Y77CkVUMB67FB9XSnJvB3ncvHcHTQS2LoSQ1AuGeHhCcHPgNQnXPJvYkwpSdcyy1sGrh832sAt",
  "key1": "65YEFn3s5MDM29cLtZvE664GtitxHZwjbLxvWCev9LMFZ5785Bzx5mNaoMVGWuUDXyRZrjVgMvcUsCtsNx3a2EhE",
  "key2": "x1v5TKHs38KgdxU7ppi3onGuCB5p9yU3LsTZuFKRyfYMyjeD175fdTV6pEbCguh5Stedwp4kPPKroMjTYVnHuED",
  "key3": "58eBDh4CbF24S9t7KiFEcV2FzweWEpWD2ETiAsMAZpGXESA4VPFBvmywMsQPPoL6KRdR7mmLWidoK7Hd8DfjQdDv",
  "key4": "3Siqo9XpV8PF6BUEyAZpvnqDAY9e5B8YYLSt1a1UbPVvDm7RngnoCP9wx1aoMyVYNupKdjncJzH9cNBWGPEr8bUX",
  "key5": "5zWTNgNpPiwCJoj2GqRShKanTg3a1ek9nTuLuDoEW2j5V8zaWVDy5EpZkxGbcYdTyc5XD2ggh7CEQ8cSBEdAiFhz",
  "key6": "2i2trYV5wJzord8nDjKgFLPkrkzqzULWoC3DfTtHYec72SgNDut1XWsdMaEfBFBnA6EHYF82i1JgnPyYauPZztT8",
  "key7": "2BodgZuxnLVUxSyLv5WkwwLyL1vfRcyM1F3gbbRd8kQq2pJT7edu4s6wGVFj47E8NUfdjW54X8smHLbXpoAoPEvz",
  "key8": "GR6fcauCqUQRyQ2FbemMreoeT41sAmEbZBNhn3ba2ABePHfDiXcu2ViS2jdgvdTkEszTizdHbzSGU6o3VZa7md7",
  "key9": "YNNvnvzeyQfxysujBjkDbj2jf41FcJW4zVk8nJTuTrZrs8jQMHkmqJK1gdDDbHFwXVKfzGMPivpFkPthN8P6YoB",
  "key10": "31pVDTDt5EHRxJ8kfdZQsW6696pq9xCpiYKXVBS7CFp2kMTg7iY8nTB7hfsn4LzD4S6MKw6DNA1ACW54MC9Tr2Jt",
  "key11": "4DYpQDEJ84bV3jGsGHJhXoLCMiuKM37bWJCKJUggfbpUgpWuk7uK2FGk64oUck95C3XqYafRLQcuvKsL795PKULU",
  "key12": "2AL8si6KkFKRrSxCYunVmtmxkUGp7wKXDq2mQ3sjoXg3bbEHuoBdVxGvNdBszcQhbx7BQDVmgioHGW2akaTCdutS",
  "key13": "6o8xA5Pqh9oMcWTQvqXMgqxRMf4FWKYdPR35943eAj72UbQWTtzzwTSSsvGd9m42LeCLrhHTxo2kjcSZ699AVqD",
  "key14": "3pyRgkQdiJvb59Mq9uCLMU3oThXGY6hXdVn93pfncyck1giztDsuagpeSHuKDaRWTFWjGk942cJZT4KrJC6c8Aiw",
  "key15": "5iTaum4iAGQuRJRhXu1fiFFkZL5PjCCVCmEeeeKe1D6pqMyVAz5bnNYnhk3dQDSa45BLcgAWK33rAWihJzqKQwCW",
  "key16": "3RDg1sStAafzSsJhMBbZaNhwNjntPUbumiKZPpGjk5t1MHxiX9G3cEsqrA575ZUiHBegKeZyCsuY5dUt7ED9gN29",
  "key17": "5G7G43FW8L12PPrV7NvuZA81k1Jundv2Qcxgjww7tD8ND694nNd4RPbDLcU76ahZ8erNi3YBKUykpXFpwftdgWGk",
  "key18": "5cTsaJzwjdu6QkFi6Gijg2ACCNHY8UmKzgvGmWcAXrwcC5mGLM5NsmnCE9sRYNbadJBb7DCM55mC9KGa4z5FwXQC",
  "key19": "5FC1cfygnvuavH7WAGVN8m18YRdY1J5rF8vbJG16cndySc9xs3cnC1D9ZfUVDbR8vCUaLhuPNyMqyiUcuXCSoQDB",
  "key20": "fjuKR9ZzrVHsrF5bnbe2WvNM2wkjKApD3W8StWYmQ6sq4wfsRqAUC98B5PmDBLY92BkVJeLKQ68Vw7siEnr4k3h",
  "key21": "5XE3jTAZuks3rThGmhMFbS7xUMfKjqwi96rYAuQewkqwFRmxhonERinpCAvriBwBacdV35UPTHmjTmrZucvbj4HF",
  "key22": "5ivzULYqKztpBpBUxmxWLzEqaMhB5ENVLCZZYujk65muUXuAT67xQotAs9TLwLRxZgYgmEWJHrkhuLgaQSjvE4Qk",
  "key23": "SjWS4KmJEGYz9ue3MZ1YPcH8Kq6vJwMujBqCtw5Z7bJjNejZWqGCXSp2gZKwEb8AaKcnh35W7YfvKYTjmR3ch7Q",
  "key24": "2k1z16zmyZXHh3KgxbMNeS6P2a1AKfzy4zTJQpUnWwr9QsfSQ7KbHKY2Q4wvAqbazqSbyxthxmjNQMfwNHzzrHuN",
  "key25": "5BmumtsWXodgpFBsHDAErG5H5ohrWEwR523UJHXciXg2ibGWgsH73QghRsHn51NpmhKnATX6nBiW8p6evjfaKTxE",
  "key26": "Fv55mDGwav9TGkVoCTHx2QujZCwRMbDJFC7yMsLTYY9UyuQGo4ZgGfyqHJV8ihRYAqruoP2wKPBQXAsXHyR1pTK",
  "key27": "5qPiXt5rQ98M6fZ2T5sH3195EpDLrohuT5K6iN3MuGcbuvHgAhGr9jZRnHrrarnJyAgMhHLmAYEmEKqCCMzgbkGy",
  "key28": "2ZKA7GYQsE5u8ouwz7VGJ9nPandvU8dvSzj42UdzEuMhMhQcUZc74UYxMR38FmvrHCX8ugLbU8rcH6fGF76kzJFY",
  "key29": "5dfe6WyMhSrVZkpS5k1rK4akMNxBibRWwbe4Sd2Umz1DfMMcMHH7JjGJc1sZsneE74XbF9s59sTB1jk8ivxt8vZ3",
  "key30": "5DgjJH3vvmXCrGU3CeHQKehMGhpSYgFT1SS215gfFEbUfWbV6u4YF5iiXazmESRDv5ha8uY9yPwrbjaT9azrt157",
  "key31": "3EZCepAsVFcGvE2HqgJ7NKxhPhvEfZRwvc2zNJTt6nktrL3hJD56isna24bTF5bPuDQCRsPKoACA9zQnWWAewZBs",
  "key32": "43AwVTZTqEHZVGuZKarpTqwbJMKjJwfwkyyaYTNzu1hNasrAFHatLfNgeNmsXJnySRNLZ3r2UJE3w1GwruKfjBRR",
  "key33": "yWwcf24gAwivX8byB3Z7v4G4tBQteSdubfHs1dcAGsupqxBE2qGMqhaZ7NkaiEJHYD64LDXL7KA8BDvLJLFRdmt",
  "key34": "EffLwKVyLgDqDiY8yRhwAg2nG7kjbj9XsQ8V9jP3v4nzA55PaBt8TcqEbgQMQ9FC9LmVn6J21wvAAxPH1NSHnt2",
  "key35": "24ysmY2XdyGv6HtNDBqPMGg6RHVdXQvVrwTNpdcq1WpJFmsWTquT9V3YrHV4QVKHLEzxoBYXpsD78dbZrpXGbrX5",
  "key36": "34UGZNxXPwY64M8nw4WGW5q7fGew8r61ABDYBNGv5hKC6gC5o1xLeCyUpa1nhsYuaR29zi7sjv8BpZDDEo7VVGp2",
  "key37": "uM1tor7ncM8pnS9QmS3f8A5ThSgkkjyem7mGFxxQHtxtTh1ekkXtxQNwehYLtRA4VNGtk1JG5xkxWRuUVanGPDK",
  "key38": "Ctd8FNMWtFQeBmNiDCQXVFGBEg4ss5qAH8E5aNig8t1nyAG335hhZXEKSkmHbChWJGkAHtMdKjvMVRGyK9kqbQT",
  "key39": "5SGR1X1UtXowf1y2MW2cnjjVjRZeznqrfNt5R8miR87puPqCvxm1miNAtQe2eh79sZxTtLe5gVKCVRmxZB3Xn8m6",
  "key40": "3tXGu3kc8UxSouSr8q88UJQNipyY5J8ezgoTzutvkumYRHXgAWWQ5KmmVCTDUHwm4vBeZvjQ4sgrk3QXnzJPs6HU"
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
