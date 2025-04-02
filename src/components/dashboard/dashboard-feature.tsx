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
    "DdQaQ2s2M3jwZLSGuCSfmhciG7smi89yxmyEATow1Fku1vVATtvUNr9nKXgf6xYUdYUJu9ceiGfEjRcJReTi8BU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbR4FaoEqxrxDJDmXDihuwKcdGNPRZUMKWZWigeoUhLQBje9V8govR5pXGdSRJopy7rWqQYBPLXR1RrnffkqPv9",
  "key1": "3A4U56WVfivCtDq7UTuqbETExRRGwVZCBWWqXTqVKLmWZAuamctVAwK4CdVXMe7Fs5LSCy33Dxt2zni9daphidgP",
  "key2": "29kMTyupWB6xwfe7kvifXY4uLsvaxgCzyoMmMwZ6opb2o3uoN6NmqGJM84jtcRE7QQsH9HsU6zPcD6rGHQiHW9Z1",
  "key3": "4iGypy3ZiGoMvKJKcUJwourTVNHgTC6CgqzvjWQGGWW8xpna4bpnmCMNdKkSScZAgse3fuaK2y7s3oru3od7tPbi",
  "key4": "3e5iZGSjXxA1pYk6B3saUcyg1TsBxbgmFTiQWcCgHhHLoK7XpUZUE7NsMFRootYWFqVdEaKoJ6z2xxJndfZsp1fW",
  "key5": "5hmdU68Vfkea8U7p4HZ6eiEu9SdceG3bvpmiE19BNfe5ybXpL4hUHZD74Cq8gYF832CPSi5MP95EVkiNkZpfbeuQ",
  "key6": "66LSftLZDA4NZoYydQZKx2vbTBBvZuD1ftVPa93d4eqjeS6ZTjUy9S4t6KkYXLAViivBoDgxH4VNDGKzEzmzmuNU",
  "key7": "dyCTn3WyL5iPeCtcF4tAZsVMdJgPGddEm2v4GPHPUq9WWcdyUh5cphBw1E2987i8XFN5rQ4wusYsaGDNWZthTYr",
  "key8": "3ZsM7KzTU6tWqNQiDGvzFxXdqeHeXLvXcynDr1FBEr3wTpLCWBs623Re8xbgJBa3W4JgfFPyih5AsYdVUz1isFkj",
  "key9": "51qbjnwwZ5syRaSV4Q7N2cmwSfzYfevGYc7FmSje5sxB3CNzawoJoi5oGHrFPvgghZPJnZu7aFBRNQG6aMs2qmim",
  "key10": "5T5CdRGGMXypXhDpibjzJZGV3CKcRmWGy3VVqkceyAKo6eGmtZHU7pYAZPL4nc4bpaVr3vo2tnCvMb9mH42sv1dX",
  "key11": "mBKYBKo9yQCoQYWpyYeuzt9dYLrD2ptrhPAaEwv9JicYyV1pFmrY1jdbrWK65u7piTYRMszyZGb71bhvc93aa1c",
  "key12": "267WYaZAxXwFDxND1oKe945da2ZmSqXS1RbGRkAdaXn1fLTJvKujYWpiKxPmhtn3tJgPWjqVqjqfvFrRqmVYmAww",
  "key13": "d67egQ2MbvnY1jrV8ZqL3kWGfGdAzLfdvpRCRqVdFKpLVyTPxqaigUVYMxyW3ZcXzvpnSfG35gM5qtNdXXgHY3G",
  "key14": "2vvLZMDYNgre6zefUhPMg7ARAxt5ReCVz1mSAQphjQ7JCz4LfsaMxQ8hzs96uZv6QbQGEx3dJPJyd7YTjAVxBtCF",
  "key15": "3HEshXoECFkHz5f5mB7RnQHqrQPXacif5ShTZhCy2siEDZ3wAJyvb68KtD4q51YfRLRnzctKif1vAR273uiYQ9pu",
  "key16": "2cz4i9m9zL6bMtEB4ZF6qiDJkj6vyUxdsToWECNHmDvkQEdSWsCxKT6vnydTAfPGTfYqX4upPX8etxvjmqrDobq2",
  "key17": "61MaWWonRWG4qCM4gt9wuqKqvEeCkkNMGZjD8boY1cvQd4pCpc8gfEBcCBoyXtUfm12A367PwBV79KYDUBreiCkE",
  "key18": "5kddhjDW11VsYycZnLV66EUGV1Yf8L6mjjjSgMFJ96ZFvTvD6oHHhSbT26meMGrHR8hF8kvniPEBjx98zAEoLX5t",
  "key19": "LBaEeLmNwVLLdYBYXdjLTvKQ8SEsUMp1nULJW6AHyHY2nSvh7iqDC7Txf5LTsjBwaX8dhhofyXxCCeXyfEEyhsp",
  "key20": "3XQxUMweP6GS2uvDjpZvcytA8GVBG9VnZTmdvPuDwkjcs7pi3rtiz4kNkpj36aSnqkgakeF1gdLXJ499CrHKXY6x",
  "key21": "2ZRuDpiipCjivdiV5T6NjtFHwdk2tNe1pRNxNn8heBrtGKFbHLMtYY4SpjbUv8RpTbzSYKBCtDVpUjNs3m14LJ3o",
  "key22": "5EbncG2fhvpoHY2WRdiMzwRdALjVAw8JrJwX6aBC36f8MHSEF3Em4LMsN76ipmX48mvJPS9kb1xzuujA2fFG24GK",
  "key23": "5xPzs7rQKGUSxPf7xYsLEU57e8D1iXV7BJi2mZBkMJYNrYsfKem5kLRWEwJJ5gD2iFcDnStd4dDULi6rDgRkdUZw",
  "key24": "3PQ6m9Qo1Ffq98kiy4mGSrEgpXYjhpCZEp3g1gNg4oMTBktw2CrZAmaMK3TUoGDbihyR3Y1NMxX2r4rVasCw6b1P",
  "key25": "1kJua8vBYdT1posHjQD1Z7ydwhfPNawz3bviF2XZBje5wHBDTR1G86CqtrrFRUeiMSi6AKyXJgjwokx5NhuJWVW",
  "key26": "4jbd24auJHx5KbturZk2WFsizXNjXmhowqiebVQoCXt8f2vpbJirzXTmKeViKkFHqcc3umigNNxtZ6hFVqZVvTu1",
  "key27": "28FZmTixA8cz7AxCYyJowNuebfJS7ajcPAxTSqGtsMRQJennnmMsPJstcARmLi7yusnNoPnD7RArxmgzdEMMP92B",
  "key28": "3EaURBPHMuDvVpKG4ubwXKoLBaoaX8bXivsJh4aKUzQUa4ug4HAYBepRMU1e8kxuRdHYw58T9ivgbreqzKfoH5MJ",
  "key29": "2MWRjvX7TuGJ6i7rmuvAHiR9YxqUEShVNYJbtn81NaqeQRtonpXBt8vEF2baBwRHDp9ZAteg2EwordYPRe8hYSfa",
  "key30": "LeyiYTstdy2AKmUAU6Cnmy8nDp488wPw2WWKQWaHKRjMoDCUbbZ1xJyvoXgfGKRm1Y7eWXSbHp4WFj4LYKUNFVa",
  "key31": "3JGsnqtr8n9JSpqY1cCUbbDmzVzLfRkPGKGyxYusSKEoBjseF11eszuektBJW6LyHBULeaDEuTEySUukZwvo5e6v",
  "key32": "2tCwtUb5NRZZNGN7txs5pRVyniKc2355sRNPgKA6sdm5uSB6pQqqfxpjYFkDUtjuThypSCRWqVfhXJW6YMSToChD",
  "key33": "rXmuTaLKoruuvkgQZDKG9mJUVHFs55oRDoSh4giGjT3U7xxVCnSVfc2nsfHF9CJBe5vHNYwPP4Vsne8sPPAbNej",
  "key34": "2za2gKLzMX6Uk1Wo2FpVi2KZoxyWuP4dgF2RNjCWDtVkdrAMFqt4typU1f1UVZXJnyDzPVpHC2t4gzBDipagaAyB",
  "key35": "3fdMzXYphnjLP7RgMMwoZFrvj3bghQc5g4EM7xx7xzLeZDWVRKx82Rjj3BCmHNvkaBLeaWMj58WjWsQa1P6cCZRT",
  "key36": "3s28iWQjTUvdSUrgMX9R4NkV9ocK7S87JrrY8jDDNFEYFis8E6syTLXrGrQC2JCrCihsBHHkwPABA1Z5j1hqTx5A"
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
