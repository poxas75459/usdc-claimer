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
    "49TQ5B2co6ZY2KZDku2UxxrDm8gsCRsYn4K2gPPtfa1BV2FWBreAU2remWG5aUG8RdQxR3MCkkUWMmQUBJ5Fta5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LztDGirrBgJJbck71JYoqZkHMmMADWH6SjcNVSV4qZLunHHMMJMUjEwp4FMxqcvDP2iiXJap1Rcz5tV6Guw4MGX",
  "key1": "54aXocQmXr7X3reRR6GnETCK2oBtiQz7ZLmgRTmdkVAK4LUMFivJ7opsbts7Fxg5RZ1rAee618eqtH3qW9ZyQqCy",
  "key2": "4MCTFLPAnmAQ2LRmKR8Ruj6cbbM8c4ghH7ox9yKjHw6JUTQYcX1b5fEFrbZrLqRQidcMnoGFUEvVz93m3iN6fM5D",
  "key3": "5rr62gDyh5LJRBDZHkcJrNipQBuzSEMV6FiUVCzVestVzxnxt2Px9sA3QBC2th2y1RCTey4kiukzjYzVNq9cYz2R",
  "key4": "2ejKSnmP8vfqAj5izb6YKFSa34T1TncKM3ayDvLu5DENN6jEBMi4yv4hoGikYykViCvkHQTzMcZXKD5CThYnxb19",
  "key5": "4Zi37f9mQY4tpbMCSuxUCwz2p874VGiArUjv9JRPBGBNYE1cZuW2iLtbb5nsu18qBVzvfCP4PXKacaud7f739Ej4",
  "key6": "4xvRGbMw9amd5SkFAc6dmkGBsWLCAX4qujX1ZsPGvRA3Zn11fTAJuhRURtigjK1sraPgAJhPmXUtR3VBwcZJtwuu",
  "key7": "3RgdWVuL6ku6mEwQXFJW8oRbXJpj8KV5VB1eXwdWNz5rnqowQsQH3wz85pT3v8yVESkqZwdARwgaE8aEmgxNtYLK",
  "key8": "5LyhXVmvyoVTygnMrdACheuyQLLQzWEzRDhrTg4mRWf4uwdPNa4YLacXTRSsxSNcr97UH7L3695UQVCPoByfthcw",
  "key9": "5HnBYSqUpx6MRGRpGvzCxnNvm8eVo2zPPVYw6jxUgccWb5PaVzMw1D9Uu36DqXm9t3WRWRPBWwUW1fY4SU8yxs6D",
  "key10": "4zeJBmoY4WFkM2ovCgtv8QWJbqERBdX5nG78u7kY8UmTkdoTxJN1CnRoMSRLUus24VEqjHnQXRoKivpMPXF2Juy5",
  "key11": "4La9J57n7VWLxfrAQ6dJJA6dkSzJWibDgVJ5kniviHgAW9Uu4TiMKBFRMeq1var54WVeqcvRZahYJbPGSq2xRuHq",
  "key12": "5dmCbkq1HgvqE1RUENF3ZS4mcrPzhsHrbP71bpChk5zRftrXBbKRjyyetowpsFQdoSQ62xfMuiFKydJeLziVKcnQ",
  "key13": "6yeeAXNTW45oKgnjdwHudqiqFWF55MCCDxTZq6DsbcRvs81LNQfKRkUAgFwiWdcZG1CR3zdtQYdST3xUN69BdXp",
  "key14": "22i9dRVhNcfBZnChCmyLw2xwRQ6csnbMCdWwyjLLM9XDZXfT9XHSfoiS2V5MyFmUpd6Qr59KwVpZQASsqTmuT1UV",
  "key15": "5rJJuWHSpekf7iXEvWYq5LNRd1HJDeKXhweHi3o6nxm9YJkYqcMtmEPZFYsbPVWPeXc23aRH1KYh9upBLimsjrcJ",
  "key16": "4MSaovUvLSMdtgbcj9kumQHgoVNFZdSXnSHxCdbC4fyiHsve7KsZBcbsa9Xp2DXFCjRTQbfPUjjWrDaVsZbCU3fH",
  "key17": "5wD3PhsphcmTL87yJ6ckD5wXzJvRiJHr66gEVRGuM1EeevL9SFDRWVSeWEjGqzoX72r4bvCVkyct8yWnJPmbGLUG",
  "key18": "66M1EPvWBgLMjki4k9PmP7bvhuHuLTpTtnypvXrHYCpttHvdfXeccWcwzcLrn1w53NJ1YHKJvevQYv5YorFE5cvB",
  "key19": "4YzZ6tymoafKYHC5ASLsE8ZWLEeHTtuVLpYJgrwBuxSa8rV1NPcELu1yLGZz2iZXrgDrfW68hyLTiPM7RjJnMKB4",
  "key20": "5tGMbAk3pWwhXniUuT9omCfftM6567tHe2Cn6hFSsqwq8i371og8hDCUF6fyrFox7Ns5r4iETq9KJZNuFZvsmMss",
  "key21": "2qh1G1mMLBxfpv5LEjjDVDiEz2bb8Ac3zAUKWRTmTZrTxTJFYwC1E85gUcAiYZqHuaEUoS2VgJpynciH46BTPy8r",
  "key22": "3Ba2D8eg56oPUJXSa3pMZx1BhxCVeDtjvCkLveAkYsknT8WUU3nUd5LthxQ6J27pbSkMWMcXNwSNJTdvP7Q6KKnm",
  "key23": "3t5LUidCnsfys2LyFc7ayZ2SYGPNdKkdh8jQmf8AnwUQPcJ4TRCPB3Yy4PEMCXRPgsJqSNzWWjLaTsQo1xjMziJ5",
  "key24": "2CvezCWNjCEYfr35x9o8yxBuXQm9drqCbvDyy3kqWiYTWoCxAjoejuNtt1Z4Syp8WRXRSMTANL6A5zjgjEMjqz5m",
  "key25": "4pMn7ECjz2VpgBSkKX3eUCYNwmy3ZQjKD2MJ4fTZVgTcmMPLBWWFmDVGoWskEk9pnFf3MChRPSV9Fb755im8NyAp",
  "key26": "yJSjFrTSTGyTicscqCvSjr7JB74GsBqsCerH21AVLMa5Ly68fADLhfKnbAPbu3fDbTqKQnWzLiegJsqXENMtnmT",
  "key27": "33mJzDeEjWcjRTKJWkQorD8gbFDjQBCXYEBKSoogcpWWgu3DfCEMYcVSb4444RiqTY8xtnVg4Vnjeau66MztASHF",
  "key28": "3ZbNJYWxTymDgY1wS1QKenJsSQRY859bn2K9Kc1CrzEjB4QbeXaLhAegkUm3MTuA3jabdcQsfVm5dqUptCnoqbDT",
  "key29": "4WCMcjw3eSue9DNnsmBz6qdPHjnh7ireeybUA2bE4bWNBa1h9TYbBJY6S5EejB8NdspKdFR3Yp1QTCVfid3GoD5E",
  "key30": "3fX1huA8QqgC1xbShVxRZrkLoSa8V4fFUeFmgRTuX899VexaCgwmSBwZHTRZ4SZ1UGADyr6Fa6WiNC9wHwnEBqHQ",
  "key31": "3eREPZAXiYoDo8yY95yVFXjrUjriDvK8PZQvFgSmRZYJhCdAW3VAdteq2VsvgJX6xEMzmfF1WTNtqg2zGwtKR1cJ"
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
