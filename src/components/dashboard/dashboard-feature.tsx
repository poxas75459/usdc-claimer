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
    "kmrDVLHHAcnhijX59KNEEFmQEZi6M5ZAxiJ6pTf4VcnttXhkVPLEVdaz1jAZLnLVQ9Bb5M4Lq5qh8ARJaapspsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Geg8HuAvi8LNX3QikBBNV45Xom7JhrAtDsMcKx5i7hQFLkG1Ku5KFBhETYRMVUbXtAVvgvSYsTKHxJx4CMipiEM",
  "key1": "2MYnQuEp7PFKzLnPxGqNtYS8EYN1tv3dfHgZttjJnA8HYiPu9VwpDCvaq6kVwQQUEEJvMiH9VhAHHndAEGDPmgxd",
  "key2": "37y9rhhJyPsyhcdKERnvBceKNYFMYzJpzdCngdHqsotdbUHUiqYdTWGgqWJR4FjimyLBJRmAy5URGXJhQPx6uDiU",
  "key3": "CmvJF6EijPajU6nicsCPQCjYYNVU6ZhM6HSkXxQ33Jgwb6q6jnVSLvirh8fqW51BfcjwZcVvvtr3KYSnVFiLjTB",
  "key4": "5aZ731D6FGLaRmbMW8HAtcphwmLQqo3JHrGSMxr9Zbbej8D2kM3RbLijGSH8ctbxv4oaAE1sYTsFFFHk6vy1mSF3",
  "key5": "2MYVcdfKToNjURKJ2YDwgH2mttGdoNFbHzn8Gs9Ze8JPfZJoUiaqQFjv68RJFnKtTmtARURGAAjpjBnzqeXceu4j",
  "key6": "1MvRXWynAnJS7eaPEZaeDFFnfP4tSKDVBYpr2LvmvkifALRsQvL3oGkg77qA62DgSVUoME9uB2kaAaGyn4CRH2B",
  "key7": "4yrZwgHfDEpZaJ9K8PVeqvjSwsT4MPGLwdA1sTHoFRFv3jLu9GuiAGkZAWSkQofz8TDoE5usi9G5UCjCP2vJU7oD",
  "key8": "4pE8tNMQcCBYXibwmpJ5HmeMxKo6MPbsqvQVv2HqKnEoTwbGZ2aKNK4bMMrEGDB6DgQFwkSXWc4VkVd3Tf4mVx71",
  "key9": "2f7TEjomQ8xm2KXUeiuPQPrLf2L5rLn246oSWH8KV2VhDuizvFNojxWK3qaSfr9HZPXur4QFGQKhE7gqCbBq7TLV",
  "key10": "5nN4Fic7tkz3Yfhho8EsVaMeReaFfkxNbL28mzC8QoFCQgHGjHPQqaQXozLBWuotUT2mVdkaTvJvTpsGp7ekkHMd",
  "key11": "4kt6rCbdY4AoyejzQun6C2hk3wLJmBGUpMmCSwidMNWxHFFbZjKc3GTMzVaWCkE7kkn3Fxjv9K4iTuZh1f9vWNdF",
  "key12": "2jwZPJ7Frtk2gP3FhPdmt4m6QzbN8xqhYhPSe49uCW96ED1vfGLVxjuBWBLyyu6fh6zXtLqZSqzJNsYjheY9TK9u",
  "key13": "BRzVrq6yshuRSWQjFiP2bxm2gFedkGUBzu9mxeqFwR5CtubUeyLYh5qTnCqume5cxSouhCbBGgo7YjWa9SQXQTY",
  "key14": "2rNXFp4M9mnJPfuuAyaBxCzYBQbpsQYfidzzNmnBTB6gYsoc3AfkwkpUWUyDU5rMp2aq2MRiMq6r2u83FJdtUy7f",
  "key15": "q9DPRwEG9mLUA2KhMDmwukn2QoKMNDWFEpkzvrMtx6jYCdxN7dLb7u66GYX1cHvdidAmobuL2RsdAULb3hfqPmT",
  "key16": "rsrfoy4tUbqURecMfwH5KQkSckmo5FhxQVeUUpNvZ54poe6QywYUi6ZPFtu4UXVYBwDK3sXRHhfqj1YDpHxX72P",
  "key17": "275BqsDEQkuy4QiHtxCPi26yeTFrkX21DsLwsBpo6nCikJK8WL2T7Vvnn8sias7iCia3LWP5RcwcPhVN7PgDjs3q",
  "key18": "2wYoqSRUPwSDTwienpbPktjeH5fJUSjgymEjJcRzSuM6v3aAr86WYr4o2yGM2edutwcDy43mZjzxjgH6gNPW7gSt",
  "key19": "5etKDy5nLmDgppKCD5tf5xMCf2nJvfJRfVRvjaBEGx87gubpQdwQoDexNCA53agjakLWZn7DfLKqvvMurdFgcye6",
  "key20": "2K1fKtCQRb1CMPsxHChhHTRA5Bm3NoR7CKiBuEgkqpZAHcR2CaoYDgBMn71WzQ4yBVKnDYBVCyt6wudsoXKHEYnJ",
  "key21": "4YMWBLJDKHVgxWT9wEdr3t8XphBUh8ny9BUqZ6jNcBn3uwxoHU5kjdza2JsmFwNsG8pKJ1hJGvMeUBBc1iWxvEBk",
  "key22": "2jzQsgTPXhFrGjHmDARmTsQictqADnsssKqdCEpX2zkujzh1MLtsy2CohR2tfy7QGVR2BhtfTD3Hxws4pxwnaWra",
  "key23": "47ndzvPbyp45dXmNqkNVwxRXbr5dfKB7FMHj7gz1pGvYU4bTgbrQUDv4q3tvvbLJrDigxbZrHtu8H32aGqpSVDgU",
  "key24": "5pX4A44xZaMv9VydpfZ5igdA1DGqERevm63v7b3AoyvkPrFDSMWujz96c8Q9fEPjmfhvHj4Y6AyJJcQutCnH2Hw3",
  "key25": "2766nZLU8qGMHfGihJtt4c28LaaPuK3ziM68BAFNu71CF7TBqFBYJwpbrZ5PXwTHMPLw46CbhNa4bzze1b97Vv8n",
  "key26": "W3yHcutPjvrbSUZwtU8qFCVWwHDj7KyxmhjQxax5Hw137fMqMzPiQYa41tHdzjnUQZdzgvpRMeeNrrXGHqq9tno",
  "key27": "4nUy5UsmXwZC1TN4b3ZW9Ca3mA3ovqt78ANZsp2ygFgdLbpySRTQ1GYg9BQe7kMTqNNLWGiKQHjbfS72tqAa3dMk",
  "key28": "3udEyigUiFmJ3xK1pstK356DxDNu9VhtgmQnTJLPT5Gw5mZHQD1nJE6cmv2zprTvMK9D66RrEdbWUxDHDfERdwz",
  "key29": "2JwM4CwnJdvRCTkKqJajum2pb5NizDgbYsdXuLPcDcTJSMjLrVX2gMLeXVgiyp1yUgFEcKUYngnEXdY6GYxdEbKE",
  "key30": "3xq53EHzFaKW47PGWFFQog9GLP7bNgQs8xQ5LqzjVLp5LPhfYtcqq2xC8JdQUNsMUzipoTiD4cAP8WmM2Mn2Xmdd",
  "key31": "2bsLS48M3jAa9nrN3jw89V6V5jKbzohG4aXAtRQXeVzhxShFP6ULJUtswWXYKcZCqMsiVKeaLm5wTzfFWYZfh7x1",
  "key32": "4FMqhD8brvsWAsVoGjGn1K6xXHWcBJKx3bpnXFqdXEJ84sGyfKpCNUAN72379oDQ5VtFTtTiCHrFYCX9PqBAPs77",
  "key33": "2MshUvevvjMkKVahYw1aLcu4U77jboTxPgYWWZTKgFTPLEQb2F65jGCTRM7ZEZTKeqXMkn27mAkT6Mhxii2GhH1R",
  "key34": "62S9frhQ9GViXCUEJ3wZz71QEyfmAwabtyLsDb2mZhmpaqrXYgoPcABAFDoKmt7coSGvRjjFCMzqP17yRuTee5Xh",
  "key35": "63FuB2zoQYNkQPK97bMGDcDMZcuXTJkGrvLHDsVVhakxXhhPkuKtVvkf7zTX2dXZr4UYQWWKdiwJhsFBHxN64qSg",
  "key36": "2u9tieouGRjs3VRGK9vK1whP1vcGfJPsAhmZfGjEd9pAVcEch26xL4heKUBtrcLxmrhZaHfRyFbyK45wNw3DSnyD",
  "key37": "3redmdAGtVBkTAUeJb22ykzDpCftWi6NS1gkX8643a2DeGE1jz2N6JWnETM3NBaPr1ktB6jzGq4avMrbu66HvaqG",
  "key38": "5FCKGZPqn6xRBFRdPeu1Vs2qkztSxuNqLcCrptadmDJrbtvEzPgN9TXGydZjAskHa1bZJok8jf1pkH5VMqa8gJdk",
  "key39": "jsi94xTPT1psZmwabd2deTKvsKaNA8Gt1waiusdP9DBZY8ZoDUmnoCRpRddF3FTo7QUxoReKJ7FyPRrCM1cgSUh",
  "key40": "2yR7swfuaA2v6AamSYvSfjiamYUG9eg84ARQy4VJnh19mdGNCsmM4ZtpUVkjqeMgPZHL2xSKFweso2dbNq3FmQ1J",
  "key41": "4WRwBNe5GzCs9VAXkmMFxdwKmuqUdFYHo4SXCnLLzHt3gTygcBbUZ4DGMgLEjsJwg2ABAaeebVGPcJJdAkJ1xAxP",
  "key42": "om1hnqgTPLWo8QXsiXE4VfpjMxunEAmMZvHByEGFQHBHK1AEBCa5D4b2zCANxgQJpCAoneoDBCsxWG2awYkdbJa",
  "key43": "2AL1Can7XSqaLUzwafTa1smfbxng7YptafNqEoor2qEFsg8bDx8ogP1oeFYZ1tZGs4BaKEGFYkP1GcqLm3K3ZYUF",
  "key44": "3qsASRwffgnG18E7o5vLsnik9WxM9Pf5MhXtsZmAUYjQB4nsxGqni4ztU4K9xxJ668viwYHARZc3BiX6BE5aoZoi",
  "key45": "54ds3u1ri215AMwAtrwi8vM3r3tiGSMSuWoADFoTruibYVH6aQPsQakZAddsRdjDR351Y3HssyTAJQg33Ny77HKC",
  "key46": "54DqeAURpBznztLak3CnrbCUdszPXdAL2k8JpJ3ojsRPhkzAPL7SnqW9rYYXoix5h2a6qhcDWgwEP9gPXnVys5MB"
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
