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
    "4B9dW2XG213xP2SFLJqeNDxM3JB4osh7U5RNnmNz2ccjuExkEcduPepzVVN97UreshDswo9rJKXVT4xnQ6tPvZtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DT74oswiTuaWeAMioind9MDBU9ha2ugT6jx4iZvEbs1iRdBAJjV19PdGrWAbRniPZ7VTguSGhPxLx2HrP2HhHhJ",
  "key1": "4dQKG1cfrRkHWWB2ii8JNuZtWrW8kWef2FFovMKBtqohLGPPzFUH7jrCLEc2YzjBRgHTFNxj6ei1zTcy4th1x1x7",
  "key2": "HXNF1wvTCdYB5f9f6edXuy9aWtFKsKybq4HwJcuqpmHYgGJbWuiKCqx7ae2zCGdFggcMMv9N5c28m8E6g6g8e4E",
  "key3": "4m62zta4GwV8c3JaiKSFHopcjBk75Bd6j8f5Ye4qaU4hVQMsU2BfUbtMyjGqGLsJsX4ghw5MXfJe6JsCpW3tB893",
  "key4": "4ALd1pYKGrayT4W1J4RTpUjy5rvKzM93NB2bT7YBuDoG5P97TzwZkDXpfdYxtn6VycvG9NZPwC2KeEUVDjEVTU6n",
  "key5": "2nKePPpVkt53bccJCg4bqRB4nzVCugNk8ZqteDqSwxUW2bJh9xg6EXzTrJNHB5h9iNwcLWX8sKmbZG25UA42cVi5",
  "key6": "4GbSb6Lzo1mxzMNYifYULqf8rteibFaa49u49kTNQK1eigXez4WkshgfXUzBWvw1CJUz1EqqRhH9xvJBHZKfkLTk",
  "key7": "3M7qZe8vNvduJU3vz7v8wAp6wHvr8USsAiSuajnixyBUpLTgMBF19a7mm1Y1HXYMfzzpj3vwL1TmLv4eAU7GEgYo",
  "key8": "4E39kdBkEDVJJAJj3et7Gf3jpnzER123ytsQ471x7DKnBngPG9MBxnizBUg4okdC9X2y4izyEfjXJDUKGZmTD8NX",
  "key9": "ZY6fL6nK3jgzqndUGkU6aAXgmNVwHHUSjAEGUCjFnNNd9RnVtdNXyJoBKakgJPz5AvSrvdyvbpWfeCUgovSW43s",
  "key10": "3WY2KW1jhtJKLszTbRVPK3U4LGyrrCZxKtAa3k9HPMTtr1RoYT1rjghhnJLytBxxfdduarTQjwCTq9eFM1vzg7R6",
  "key11": "4N1v7Ag326n39Tmvje86zsymWWymRSdLquFx5NJ4rmGeif5i6i7paj76Pq73z1CpyLMnZs7F5F9HWxkUChwJ8uM",
  "key12": "2ZFaV6jAQznF41fbvRpATahPETw4WJbdyvAdNdnNN3nsTdBsvsZvCiFWzsXVHM16zxbYMqHWtbmsHrQcGkLfgSGC",
  "key13": "3e7gXrrkeM6psqpw6q4hUzX2mkRp1vScuaVdaTyzfHn72Ttfk2atwHf4v4YHLzH4X853rFfJ4PDsWnkx1mRUkcBA",
  "key14": "b4h8sQp4F6wqaBEbagEgVyJ3bMZqnfNyK7Xa8he9tcBg4JhhNXAndPVzfzgtF3REmrmbLMoWHvmS6EUEu3PDsZD",
  "key15": "5CetHzgUeXzx8Jcg5yFRa5PbEdCvaynZeZrYL2RPPN3YgLmzX1FusLG6muvSDoVDMHe1jGE8SMEYVrFr4JLAMsjY",
  "key16": "5yYcwMseCPf4E2BFgeSTErRyMNA8tkWGDdN9dQDmHB4sqEdmhvZY56yvTogNe3tfcHDEeSy7BvSRKXwrVZSY4Sw4",
  "key17": "4WVAEvFyN2erR1xHsRfgxWkQsB5HbwoZYALP1FKAQAH3qxLsq1PAgAsZoT5jvQT5eVdojvNKKueURio9sCXfWUip",
  "key18": "5Yx7MNFuQbK6cvAnM33dVkeshdVbYB6pK4LgYGkbqGfDnjGuXKfhvXLPgmfYTgBmDkToweSejmNzB8GUHDoZ44Jv",
  "key19": "ji4ZxEPcRbDaXNnPkrbgFJv6o83H3DgytWCWGYsG6dXLuzaVQ1Lq2kDcxZAUZVtCHjaBnScspVdkRrETvvnWJVJ",
  "key20": "Uznt1rFmjQXWFBTbjg4ZgLb5VGCaPrk8RU5D7YuxXD1dYKCf1czPet9KaZqCL7QQi2g8wDCThVVmdPj3dexF6sj",
  "key21": "3JPubKyCZfPsfbuBoBWdm5JX4D5uxfVaos3rPzGrGJKomaznN4pvX6bcPN9Ay84L49bqBkCgZBD1QC8ccAcSgPUi",
  "key22": "2n1FJes5BjEkwQTaBMKaeuPoRZUJyUjS5uBM4AnGD8eqNpyQwaRezZexJewpnKUD2crRWyyBPcpGWh9PVSaoDsLc",
  "key23": "5vhF4nMK8UDYc9GSKMXNMzSmibGcBTEktnmi7QotH8RxwDZToon5cQz2z8SfG4tufxrrgU1vo7PFH7AywaeCS2CY",
  "key24": "Qgr7jNjDE5w44fNVbbqX5uZNNneESdvx9C4gsNuM3bsMDB6oRGVFicTiAKXomhPwuCEssdGMH57EduCFSKuo1Lp",
  "key25": "5zeVyPNTKu6q5s3EKNveS398QnFq3nPUP6Q7zCdicyFLpgzkjJKMRbVczgErHYbAVhpgenu3FLLGgDf3MMcKpvWW",
  "key26": "5j9nrxHYs5mfjEK6wCPMeC25N1e8ezLTG5gZvaisgyrmoJEbPyXXoZ554SiJ2kohjM9yKq3YC6WUM1YddZwuhg2c",
  "key27": "3w7FC76eM6ghPqsontTi8typBpoRdbEWuVmpsTr9DHNfJVPAESrTSgJYhsCS5ZF1Sf7fkM1hP2EyidhH9e6K17n",
  "key28": "5xpbyasckDPBNjUmBB8YSwCWaJ4pWv2MjTzgLKQL6gMifXtVKzRhEsvYNJJpWSoAVk4zzKeNqugkxm4g2PCCz8Cd",
  "key29": "3VHhzapAkxytJNhUpBQo7heg5qWPrW755xwC2jwk1mXzMtf1YfC7wHAjTcv998Q3s5HUaoBgzca5JEgPjCNMUBko"
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
