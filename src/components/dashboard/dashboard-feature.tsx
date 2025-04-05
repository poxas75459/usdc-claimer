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
    "3UcXK7y4iqr7dehJ3StySA8Ru4iyMtz2iNKkmk7Jr562JXEHjPiFjE5iVHNPHRwtcW1xQJgfS7WjY3tPQCHjuFjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQRyYo67iHzfECi6kAPmnFZM54oDFrD2Ko7MJt45rn7jmjBk4C4sKYBcGLLQyzXMHvsJ6xLebYzv2siSWGFeeng",
  "key1": "4keSbCurvc6ae8s5CTW2YyM8K6GqEsExvyGU8Ec3tCLQLtJWJhooDPTb8bKxK364Akh5Jz5cuqDoGymp8Qft81Vc",
  "key2": "64Gwb8AzkXDNmnNdMvaiCmoeDAzs2wEEEY6KBngEjeK29qpfoJrR7yAgcn1dUeUEcDy9VYa8AjnjBvR6eW8VbK9c",
  "key3": "5y4MbUtR2DnxWDnPUGuCGUSbhShHnjL9S5wBMr2DcckKJ5w8tYVgrnpuLFpUUHc3Pc8goepbzyTa6NrD6hdFSStX",
  "key4": "65J4c9sKFfTWqZ8LApFM8Yygy7dATKchvPbvpvg2gdcqyjrvCGhNpWGJrb1QVhhTdy9aCBzNxp5v9ARwgiCghCnT",
  "key5": "VRQXcP4C9BnePM3n3QNQZGi4Gz3aozm6XsJbibG9m5snarApENWWt3NTsgNxyByV6mFxUMRR3LzNrAuWGj2L6bh",
  "key6": "5pzK1HVHn7KR99WqJHeSNHQ8qd9Z6akXwU12Ay8eh72matXCy9a8XQMJ94tZQde1kkz9wykFexFSdGduqgaVNUBY",
  "key7": "2YVLSag81wksSBLDZYaSUAkapgbWkwL9hJVa4yvSf8Lp5tQuBQ6EfYjjdNNKk1Rfy7S7x2affyP9Kgk7ecqSvAD8",
  "key8": "3H8ZKADbRb9QAef1Au9BBopyHfAQdo5xye1ucQEyD6YheRSNGd6dEV95H5WTjf8hASe7KWtGwoBsfqKEYw5ZzY3v",
  "key9": "48B1GLt1rNyteC137oE79ERXAXNayX3rhmacxJnD5dok6L8yNh67HEtfk3Rsv9g3jpB3LnkiGxDpdM6eM4Euog9C",
  "key10": "a2ABrD8WrgzotzwgY5B61i5K9nhF6aom3PAW71vmjS7TP2raGE4QPnMvSJXFR3xdRSWo92a25QDHKnJQzE49mgg",
  "key11": "5WtzUTBYHQovPPk5RmwWEkG73rma74w1EmzTXvCLkJLYaWGsapmSCsXdyCcZzkSbKPR9sHrsMQY6Qkq1gDyee9uk",
  "key12": "47ywXyUkpyKop6SyUKh2N1LqjfnsLbwWV6ZfL9eag68w1UhP3gJi5RQNXrFdU4RRf11rDiHkNpztDoofyT5YMCaJ",
  "key13": "3jp8ekRvbz5TZs3kL2u1K5Y3rYcRoWxR1PyFFZQ7TajeLDsvMMzQLnhZUEaj1B2S1n3EgWK4VDa72nfcbmrk1qrv",
  "key14": "3jDu9xMMHupjWYEC7LfAUPn1Gt27zT9VCTvjiHieFQEPyGXqq3MSobbBVMkuTxngUB7ov6cyaNPMiwB7WVBCBrXX",
  "key15": "bAdgwZVjM6pRLyCzgYFUSywfhe4HPngM7cvZwd5tXaoopQZoGcL16G9K1sTZDV7mjxi3L4HtgMAVrPQrh34UbAc",
  "key16": "5mbDts6BMTSygTeaybFfBJMQHSyxz3nWUXQsAaN9fg5RqA85b2nX3Pcsn34NkUxf1RCmRCWvi7Y6hVHcJEMUM2Y6",
  "key17": "bSjRJmk4WGH3afWyPxaDBbsHbvM2WTtR5R2j3jc2n69YAJYbx4Bbaohw7fK4MEVQum4fnoGacsveBikntPeqAEp",
  "key18": "1pvjeUo1QzZZBu5UB6mqH63UbX2bdzEXp7pcBGpnW8oAcprku4Q1xgG92wYWqJWe717FQnMFs2Y2urRfTemACBi",
  "key19": "2NcudStu9et8E1Jw4vfDN9SgvCB2ESuBD5J5VM6b7aeMRMKSc8kmc7Q5snrtA12oDdBbRXG6Nubq62P15obVd7sT",
  "key20": "4QWxUxPdsSTePHkVE2Y5c2MwAWR5ME3pJTmx8Tw9hjDJcThyrg51i9tSZgUGGPvbLfr9tTTragEXPov6CCM1FEeo",
  "key21": "5Fwu9hMGJKYnsLqPrV5UW2rgg4bHxKyhX1ijV2yoqz95duxRGnA7MjQ4zn22u4G64E3hjo1cJ7pmM2PbYBz1JLG8",
  "key22": "3B2jRJ4c55zJA8nfJcWHzwSN8csezm5kaSZ35gU76w2ymAwqbUqJcWjry8y7uvxLuYfmkrE3SxvB4CVYabhWWLPk",
  "key23": "354rxpc9miCWwjhmE4aoSmK8WWPrd8UzpiTdrcgYeR2FMvJiW7f2BDFrvVCH7Wp1thLbjRd3we3SEzz8ikWsMaSa",
  "key24": "5qutvJJX8MVzz9FrDc6uvGc3vwt11jBi2J5MQDTA7eVYusiy6evxwzedjS6yhoM1ZUfQP4w8tfj7EnUwQi1sNpJR",
  "key25": "3iEdnako5cM1p4ipwRWX29jm3BY3aPHpF934fSjbtCj7R4Bk5TP1Y8uSJeP7cKVgbhXmh2Vvro7ziMMV6WhcVRp9",
  "key26": "4e7721ABdPFYLiBiRAuZhBBNkcbnSNTj3RstryrDRHKac43cj3cQheoHRT7AVtsVc1S1NGKNkNFwzbXJNhftq3k4",
  "key27": "4Kk5Umc4FAN7fHnKo5eB1eetFrVsQguANxbjfsVFDY8nK24wm21SRsox4jDRuodcgEYJRojJHHokwe8mxZdr83px",
  "key28": "4CuLyhHRJC9i2CjtQNZ7VPvpaS6sAR1BNxyCRXLPFtbLzfq3Ytkx1nmV15UaHZzGorb7upT8pW4htjcryHB1RrHN",
  "key29": "3ezm5FdLHZXHspHHeKkzeNn5HSRMbLFtJuzuMxEBCN2QtmnNi5ebbRXJ9EswC27e1h99f1xKWZiSig9PBh5fRxth",
  "key30": "4NofWaCFu7ksan2TBvtmHm1iz4M2Nwipi2a6KQcLx7M536p6rcomZRxgniGp7XxQ49kaoR6QGkTBvi7DdG9oLiJA",
  "key31": "8uEVcqzqttZy2EbGDMGfjFQN3tEA5yzL11jymem39vS4qs4GcGKxdjx96QQdQa7qsy4wCNTXCYUHDvCwgnJ2YNx",
  "key32": "5CNq89Cf3fa8J53eZvjju7baTZFQ1Ntv1rM43UxZuZtdvU7GrVhFny3rBZvYMkxBuqUYdDvWjGH83bXKPrMzP47e",
  "key33": "4KTvHxDxCPX52x4DveuKYZc3fWEMRq8zPC69UnM2d1Fid2js5vR6anFTwwUenEgXYmrkUsvYjU7VMtUA1uTiPrNA"
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
