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
    "4ukh27TtEvKdRnMYMhmPAncngc1twB2UFNFQ7b6ACjX8h3YVdXaXMhhQAACvNZGvjA5HeLw7G2PdDRhDaDZ8kEQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xg8TvhugD1q7o4D11cHpqLC5JuzZ1mghimgMsoHvV7LtjSDuUoNsyd5FeWk2sfatZDyHWPMhNMGxyckxbxE5qHH",
  "key1": "58TufkDZj8wKWPPNjnTjxkgTNqx3ErCQ1nTv6JP7Ny9MQeuSXXWjnU462rS3zGZz9UMZUXYiw1xaqHdKH1cN2dkU",
  "key2": "31deVh9GvrFumTcwmzdWfapjpRJ7g3y1X8rbf1SwEkLA5adKQBacS1DExWBi2Zyd9xdvqzda3AV3EvPyFnCp8nfv",
  "key3": "3eeut4havJAqYSmrSEEqLQoVomTHvkztLCZj17N9VG5hk6BPop2GRQSxxvPrvoLsxwFS1M2sP7EeRhBJTv7hAR7e",
  "key4": "5owzcCCon3WsHvgqDc3UWXEnZsUeZskqEkJhkAo1KKqtGvse8DxAZvfp6GgrYhpicohRGrx7ESYA9ASnGyenXfb7",
  "key5": "5ZPuQUNgfPhh4XnTcyJtY57XCp3YHZ2FisawEFFkbpsnYYM16LJ2Hnb4z8Thw2VEFhwgkDuVNdjW2ZP3ykvZQKxN",
  "key6": "75sjQw3n2GkLonc7wKo3VCkp9vnHrpbxJNTnQJohyVzRR8QVFzPNqt4bNRq8TvUyxsrMP2Ry6xG4nQenYkKVw9H",
  "key7": "2WSGFnHPbn4obTFFm9A1kegKA568tG5B4vL8AT7c6258gmZ1Sz5KnskAdZ4uYsLaXG8jf823cuNKVhC9RisWt63R",
  "key8": "26BB1GNZVwtjN3CNQLEwjmPrimvdVTwERNnGULwBZgZHfPcwsXpWcA41pzvG4ftx5Do7wAEuMati4pPtW1BzSYeb",
  "key9": "5KMZYP9oJyd3eLgUGfXTFRChfTgrYB11vjZbsQ2CocnAQegzCLfDNLWC4PA624mXRaWgSD8d8sZnKTxY9FBAmgTe",
  "key10": "4AWnt51N2XSdPArnExY1wSVa7Dpz6z14FZJbL5foqSpreNqc1qr4618TXz8FV97c7LZhHYBPTsNgRsddkLB44EGy",
  "key11": "4UF39rcxJ56wvBcqdebZjn9vWyEnGo8ra9Pkc5Y5KvFXuFuYSEwM24NqQPdAK9FQ9etMrvGgusSpouFSnyiNX7Kw",
  "key12": "3ExNCtrqTHdEFF6BYh1hUVTigfjEuD8vyccGZg4SjbkPbtAShRRBRhY4Qk7YQnahviXXEcwhH2j7fCU17tqCxTdz",
  "key13": "5Z2iWS7Hyn7P45ceYEMB8QvwgxZS5tCtz33wKuKRLRBm1ggTYUGo1orwbUkqJMRvcRUcc5XPnACqY3CE1TteLHP5",
  "key14": "2Xe5Qsi5AQMhYh8D3MpKrZzuj17m1XEbPzkSjgM1S7MWsYD17Xc4wJYqLuE9GED38x9jxGynNpMAnxWCaGo6TD4C",
  "key15": "3ZtH9ehouvWYLG1S5jFxzoEQtSUuBPbNsYTfVpf2vumbiJYnCRXA5TDezahmS3KYwxDESatXTLYU3sHBc6UcGX3j",
  "key16": "2mCvUz27686vPqPjmUEFYH31gJGKC5LBgbdaJ749xubc9kM2redBvNX2kzGufuHahjnXWL1tFhkdCrmnBjmfjbBP",
  "key17": "5im3yydx2cS6J2XpLJ75ZEsycFoqAYyYdAiEg2CpdUPguDus9udCT51rT37HoFq4d9UM9Ned8qHfWuZegGt1GxYJ",
  "key18": "2fMevxfXiGZp4UPQd6qb9Qotu8gNwLgMuhGopzS6EPxnRaGQX3pVJa91D5LFfQvRNtnWdYL2zwDMdnX953kDsGC2",
  "key19": "4m7kvaAatD722h98okPDwa8uGGGZuCWLVqrxS2APeB8jcSE4KE355FX8GXCDQSzNowPFu2XvQFjpNniwkDC3p9zW",
  "key20": "5LYfoBf4q9ajhF4AsK9RVK9G5VZ2iQLdMkDbGfWPooKTYiMHGxF39LZS9THWDNnuSz2mVctidWqbFwSSZD5KX9Rf",
  "key21": "4T3BcXy97mL724yLQV9PvLEhVYP7XViSNeRWTK1zfyqkrGnMRYvaTz2QLA6WQrH8ZpvcnMfNLRKMHC3RjthgxRMK",
  "key22": "63gp4zVy1sibbfAicMvvTfrnQF1SibV1n9J7H2sTrgmVnU8fQPBqk1jZN56nmoP332cxhjDcPqt7Nn3JMpUwjRer",
  "key23": "3ffHDs8QqAHJHNwpdH8t9CppEepeZhL74SsyZeSzaqTcLDwiB5Zuu927gc2kdYduQedymFBbP2sZA4QTQdH1DqJ8",
  "key24": "3j6wxCxVg1sW9o2yzTfqrkbTM9kgUET2AHUEWg6pqgW6JSgWJHvuKpu2iNTSBwDN3JPARQmdSvhqcEkt4Zwfy5vA"
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
