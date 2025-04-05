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
    "48Guh8W3gh93js4ntWNxewNS4qnSAuE9E2ZL85LkCMMxrSCizijZ5nLys8ejHEtfabJSVoMczk7Qb9nJjiuR8dzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fq5yHa6KGfoyvSMT98pDEfXCwGLECuFFiEHduSrpAPgB32xvFzsXvEyQda4rGJyZuu8aekweqAVxwc3E7J5xK6p",
  "key1": "3jdBmKmmynT3MjJn1CnzUDnVd7YkHZCYj9FWm6X31eKzLE2qVhff2J8FzVEea6Db9X9qoAx72M6D4QGoa3LtY6hU",
  "key2": "5jbcSiLiQGjMLN4nZoV5czhMK6RhhPx37U1AVNMzpHXEKpaECbHDSzhK4ciFRUL8Hb67LMcgoT1Vwb1Mhs9ewVZr",
  "key3": "2g5D8w5fg7nzJ5LxHzTQtCgZUQy5xytixMhoQW1NoSWqC5k3uHP21yWqDCaBJdu9GFVdNau4PDaBNJpyn28eTQc",
  "key4": "2QNkRNaF1Fzf11FXCY5sTVXbzhJVtrubLKcAtFzXMLfGy9eAeKuECQA7nq54c7tbFiYG8GkV2JiroTBgFdNYG9tQ",
  "key5": "278YxPWkTJWkC29PaMkpxYu58DhkehYdGxGcjJr7cGge88r1Vv1XjuAU1on25HgPwUhrKd1A4xi5vWv5hKjgoerp",
  "key6": "6HGBg4L3NbHQ8SdK3PSgqxXhCFeKVLmvkBEY3PDZ8nsjbpxtcarMwHUr2PgD3r8f1q7f74i98eHg8KiMPf1B17H",
  "key7": "2xSnbKRCxMBUAiu9JbpRf5xxydVVNmocAqW51QNxo5JTeWeqLsJpMitZRN6XrNCgiyjbf4b9sZzfwNz3g7Z69dFD",
  "key8": "3Xx73ADYYcmnxa3kk1819JUBvtRnV2wuwNzByWB4hLausAEw3rGUCajXUZ7nymN8cHfQDHzhyZkqL59zpgyhAakG",
  "key9": "2MrmgACjGgu19Bg8VsGr761HpN3KDFbwzLQx78MgKR42Js4Lk8zpqe5LCnex2PhumLndJWX5nUCuqUqFowFArDmQ",
  "key10": "4SW3joT2vwrkWixf63Jg4eWsLP4BxhTSZurMUidc7mBhuh4zpRmgLF3ZvV32VkvqGw9CKyP3PRqD2vNuSAzawjyK",
  "key11": "5oGToEcnDiPpuBBSTqzWySQog7vrCiKPHfTvYo53DiTP9qumrmR7JZe728UChE8m8b8HXsum3YAXKGaQ2Liqj3t2",
  "key12": "3hpXe55DnpohrYK1zRqkWSk89go34RxePwaY8WnU8YySc37W7nQ5yuA5VKbaaJZYqgwQKpcMMRvuvyy2oyyYEdw2",
  "key13": "nhW54iR7Ku7jH3VAS5a6Bu5wR8pPcz3qEsL7W2U8wzPojgP8ug7ZETELcsiT6y1m85frvMyah5gvA4XKzw1csi3",
  "key14": "9yCfyjRT3hUAGKqcRkFxrYNnxfBmYb2Qt7ZmDy3KLWSezabT2Uq8ZKXKunjn3u6uVTZGt7Pnuc6xFgpLkQeuUAj",
  "key15": "3R4kumhUFnApNhbEp2nnHghXPPajcWt29tPnjYyoGUm2F6xKy2rPwsZLKKpJj2BG61QsVtcfYPuq7pZkBczU8za6",
  "key16": "3yvwR5jNxPK5d5H27qDRRUq9njNyYnQRkZHkCqFxVrfXq4kgA2wnm8rn2wWFsu1Gwgq84j7uJ867ivkMMQAaEnQ4",
  "key17": "44eFP2gwSgrqrgbfuLiEzJmRi1bQphpEEej7jgggn7cvzQTzkBpbW9z9boY93cUstMbNDdnZe9HP2neSpPmgzbb8",
  "key18": "35zk1ZhRWamzG8mbeHFKeMmkDuyXWz8iZf21ybukuUiakFWjovxkVvwd6W63WGK12xG8BouE4QHLPskfYXhD2r9N",
  "key19": "2ae4HCbnrH5Gkaz9t2U6Trgk9WrYkdcxdN8wc4H9So7n6XAssLomGmjAcevQghTEr1RYxhU1nAbqdUfbvLgUpBPW",
  "key20": "3MtKdL5asuxSrEMYLRQuqqLPuTJEjLemdmAFmTeDbj9hpbL9mm6bfB5mTkr2NvyABLtHX8EsX2g8nwNyogFD3ydV",
  "key21": "2qZdx6ZcvasLzoA7hBSw7ihLKr5TJLgZfQtr2GHEWvfYJtcUUgEDpzx8gBkQRCt9YrV6NYjNNqpWDLcP5jXfiXZZ",
  "key22": "3xekhc1yYhyxNngTP4d4ZNFi6wC6Jt7eaqEoYWTAZtRa13AgbA8FGsJvyjLYJqEawaHuh8xqy5RSoQbLdXaP9AGk",
  "key23": "5AvK897dK5PyG7pKQW9JYJUsdXpFibVUASYJPZWcuR5eft2huBuqYoQNyfxseuuyRywEjd4dteW6YivU6nsHQApx",
  "key24": "qyPfhArMgxwt11eeeqBZUwKj36NPkpFb11PMnX3rBCGfrzMiTAvgwB32o8eYAGAVpkwPQ6hFwVw8hj6PaRo4sNF",
  "key25": "8C4heqGtNf2hhGaHDgcoKNEdAxWcnVrk5eSy4WbK6Ywqf5jtek3BmxdmjukstUCaiEBcypSuGQFSF37yw2AToDj",
  "key26": "3KLEgRBgCfeb9DNFuyMC6zFkhf8umgaiEPJTqtqPHyVNZ2XwBEreb2xmDa2RonkGyuBzQWL6N5RP1VLEFgPhhwNz",
  "key27": "5MbWoCGgFW8GGtqXzQHdx1YNnpiALwWvJiF3y9DJSa4ZK5waJrxwDcGXmf8DeW9VZBwPktqzfMsv5kRaPRS7RmrU"
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
