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
    "4FULLyCcDgrGqaHSEXu1bDhutbiJXSpjLT2Bkw9AJnSbHcw9jPZCegB2ntmAzmRMbDCF31SHYBrsT5bgJQPzEoFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkqCAohMzTiEoQGM3toBKdNiEog16GHtSWpByzSxKgSRceGp6ytRYSEhnvq4WjKfKn5MZ1gmpdKG2X3fAipQFsB",
  "key1": "4AfGUEudsjkdvUcQrTktuKgXHbfbzBvena8HpR48dYz6KfAueb9kVHeGcdrp8gERgTMgym2jpAjGszFXF8XhQxaU",
  "key2": "4ozRkJPoBkh4Qu8vY4wwUzpCJJ3GsP8ssT2Xt4vZgN5r3UBbcua15ud8vePS4KkCATvN7hJaxjx7U7dX8hFbDRTA",
  "key3": "57mHRtrbbeQPNXQnk3vPg1junHdownECjsBvHzbnkGsCLYg9VrAUf7UvudT5Dsx6gf2XyseC9fQD47HHEu6bDVXD",
  "key4": "WrFNVYWDVwcACziTXnp7W7iTQGtBPUbZk5ss7Tq81Bgu9THZENWD2N4AQpsjvNxuSvcHhLVDWEaptC85o9E8ayB",
  "key5": "4A2rQNh4fT3ieb7Sz1Gbkr3pVdq68GzpDdWZoMoDCjeqjA8qiD9LzUKTfxxvyuU4ReZ6nzf7pEsEUbe8A9KGWHVv",
  "key6": "Q9LMCJstBypFEJVGwccgMWoHfJfWezgysNXR1HhEvZaoaZ4bEzKWSntFCERNLiLrvQr7xLceVeEfqmmgdhyWPmJ",
  "key7": "4v4sEhSmf5WrxKeJhWT6Y2Mx2uofuDtvyvDj6pGDRxh4XVNw6xibSfpPJ7mMrRapiffVx8Kc9injagkfyPvYqtcD",
  "key8": "5HSrGLEST7ar2KaLMds8Hjm9BXAaM4hPt7d88nv4bKtWsuDTd3UYozef34GXYGFaV3nVRM6uujxMTMFBoJKMsiNb",
  "key9": "55Dcq9kD4nXEN2HYPJEEyjLFgcHNC3iJgqHwtKZCWh2H5DMsJXj5UaNeZsDBvBSCztpiiATy2VQAHNWVRyT8QwJ1",
  "key10": "5iRfZUEDAwQ5j5auTQMqp1pe31LEYHL8DqFDn9pFGK8QQFQ968GcFAVRm7Vbmxq1akVDqAXrVC5UbqTJ1b8BtP1E",
  "key11": "jHK8kY3nfmay5w2hcmKbA7wmatBPzcv8p4UiNYAQFB7XGkoiD2jbcuJCeFjQhZQrNgadjGJe98qNALTwBhE62Gz",
  "key12": "3pRx13v2EgaQqv1bnCu7WH7yryvc7zwC1uzRh9AsZzb8tyvNaThi3ySURE7bEMc4rMRp6ci3oADb7ncMFCkHyj9u",
  "key13": "HRS8sZ9obDPNYonorG9QByx3WBGt5aJLsfLqtSijosJ9iYe4PsvNoqc1zQDGJvPvdiwfto93jadHPKHBwi9RWrr",
  "key14": "2FwPnz89rsxcwdjKwzjeRkXVw4kG5WXs8L8xYfoGy86xfaWa2M4eAQ5CDbssh2Z3dn5SHheSf1UfBAuAhQkqUZzd",
  "key15": "3Q5PjFKSXdjorSwFtZJVnZDzRxuag236rqfmbAWs8q73sprtER92KcJCr5EaKYb4UPyoGqtP8ZJnaEYZWRZ7m8VK",
  "key16": "5UmJuW3VsQyeEyisWjbQV3EheRsUVK7RhbS3BGEcVDcAvAHSTPg6k3umadAaVmtBpk5m2G9eL83ZPe65KJ1bqmCt",
  "key17": "2MtWCFSHpDEvgY7Ld2XjFpsTGbq8TEmVNpi6pk8LzFWye4ekH83Z7bs8HS13cvyehpPWD1wV7CEtLT5bHfdi4Anb",
  "key18": "54tBkDzHxZU3q7K1tr4jG2C21ssME9dFK2H2EMdKVt6vDRNyxBbLZpYsaeXa8kmkimLev7bKbLepZWnP2T5BRV6G",
  "key19": "3wv82vH7Qi9RDHDGAFzXJZfyXWSJVkhb33PZYJdjyHq5A4Tm4jW26iXFADfSC3ryuYEiao6znGqygLcJMjm2hKrd",
  "key20": "2UCShpDXQat8wKL76vqXHKMJS2paAptdGLhUdy3zMoGkzpjULdqoj1EWZ7c6PvcJVMSmWwyfANeNxLXnZkzX7Xad",
  "key21": "5y3np4fXgGMgSLQ6nL6JU1Es9w9fW2v3ckdvDte9DiamYSEKJ4Jzuj21MuAGhddYhuU9E3itLimdJTbs1L8j6WRH",
  "key22": "2Guc8cb2ayCCo48fmpmTBQaD1QAzTxrkm6sZiY6wZCKNJQg9TSP17vPihW2Mxi9DvxveD1iZwPjz6m9KRkTmKQGx",
  "key23": "5h2a7SSjdihmi9Wi9anzrhLJAWsXjf7xPa7uPTyZTZainsDiVuNpRJ7ZJzHeX9Tp6FHduWMVz2jdeM1GyriU9GvE",
  "key24": "3LMPrmYTm8grRh2Eruo7iyvTCnLVgF7jL53BGYguJ3at2YeZXzPgZUt4PAvsJD7Zp6btFDDvFqnXNWPcqXiKmPe1",
  "key25": "2LSyD2CAQsRXe93qacg7J7gZiDj1j3G47HXWAmmVi54LW5nGnxVi1uJ1kVYMbqpsd8245XkVygGkTdVQFTusctNx",
  "key26": "5dFwpBhoerKKBCJd6poqAQaNTMpwMhaGJ1mLSDP1useSeXSgTgg8ebBKMGiZZFUmAAZ1gtmaimWbRsEEj22Ztf7X",
  "key27": "3WrcNPEARLVkzZRbPG8oBXN8wJPpXjHM7bScw45SLZwugCR7FHUCRREZDkasrVc6rGMo7CavGPcxrMfRvniP4J6R",
  "key28": "3jcsUnydxa6MWbMY1UXduHeUjUGeYUroR5XtWz3koUMzs3tEmNt7yZSbo9F2MoYPRkGCknuERBR4MKUutWjNzUN9",
  "key29": "37NxZLZZAQ4yA9BCdyGDCcJuhLas9qQjbtiA5WTbDEEsxB8bb15xahyxNJoE52CNVj7U1aBRBBkavaYjufwteSEe",
  "key30": "hxFNqAzodVFg35XDsdq4ydpt52Phzq3G7jn7yRJXVEV33ZrAhpZK6soYFHT3GoisuXLeUYThnEMMpcnNV85upHu",
  "key31": "43eR7KWQC8QpSQLxXKkf7Dv98rJfNQPR99LQuKb5e2eHUwwfEu1ck444A8yBzphGd8b6yi4FpjyymkZZaUjgAYCP"
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
