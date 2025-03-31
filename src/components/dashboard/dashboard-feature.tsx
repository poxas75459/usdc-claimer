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
    "4isPCQkvtFmriFyCiyhMabKDqxukSekaFJrfvp2stBAnurqLPkzdT3PFUjA6hKbcDEWDNcbi9WQ1aja8xymuZzDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wbx2U88GrHigYZoTLy6d3cjvXX4hJ9gY3QNW47sHoc4yjGaybEXS87ydHhNvaqnb81MWKBekRcaCAKqGR8f2Vhe",
  "key1": "4K1yG5tdDRkRWZi3qe7RKUbGxJtcH9hEd81MmP22eim3PRpjAPesFMkCJLkLwvKrjxC4eRLweT3twnSU4M6punvJ",
  "key2": "5LnbCRziiPuLhnVnoDZJtZqgDUMJMWe5rkfZ9efuZa5TTiFSEeKYankJPp9RpLxySATt212WRpTJtyNtZ7XTzA8n",
  "key3": "225ek8eERQ5R3cnawC4iKosw9qCLEosekBPPavg5iWUSBGi8J5Mv2LKs6jXyiEUMvreRkMWERDQ6T93YqnmzaQP5",
  "key4": "35MdPG8gjYu9bvDNKhDj6mJNn1wS3mJy5Po1TgqvuquzmxgMeYDY8mJ9PNVfY7GCN5DBjV4HZXBJpKHyoa9sCiL6",
  "key5": "4EuKaVAKciFxLVDSgyYWwmtfPGFA3vGkoYZYDj8tZBjnqtxxocdwG2Fya59NRojNU6zst4YRXp3FKqjVqn6Dt5Nm",
  "key6": "prpSNMfPwLh6K4eqyQw6tDS69suCK5uUq5sqAXVYPKbkBV6Ff6xnSZ7zuzmyUhrt9PCb9tHCKLN1QzkjhNqRQuL",
  "key7": "2MXZEPYuKDTrc2Jifgjm3GXaCiFbHNdHKZLr4YGoenHqwiZwC37sVTBL6VGKvNhx98BZFDN1DXxMnJTxpjUP6iow",
  "key8": "41GoW8piqfRqcGFvBam5p3GEkuysor8Jee55fLNFH3vPvFm5imsRNEnsD2TRRZbM2Afy6xQQmNxDwxNvyHG4uCN3",
  "key9": "QuZF4QtVTENycNgDoBZwFP1hMAhGWxrmXS5FF4av8NnxFkUHE8cern2EZkLtB6bqhRUz129ys6ZvpU62ggA8Fx5",
  "key10": "3yNJeAwMG7FCpda1Cm13tfH3LAR4RegQLo73VVgBfjNTGo97MWA5dQ2RMPiTNih5njhuk28LF9wFhKgg8Rju7iVP",
  "key11": "JJMF35bRRBCNk9CNksgAF3mpfg6xMzHTvNfebAsdAR5k4dTmnyfhwu824kJ1FvgApvVPsVVMcqsj7d77rP7aJFu",
  "key12": "2Lg3W3fJ2gidhPbFFh2tejEPMATfyZHaGYZHsqVCAbV5zyjbVUYT4jXuQGrbuo1atWj6CrQQDqDHbDE4aCKb8piM",
  "key13": "45hmRVcGXnDNsWqdAso5QtFVrRKB6VhZKFJfUc78vYUf25vzwcKuY7HH9PTXa9kT6iDZTJpRaNtKgcCBuzjUEwcM",
  "key14": "4aQbq8uUeTkZGLJRuZi4G5GdBsmYeiNkqadxHfmFooztmgngNAkXzpP6KMGwc4SDbUEZFe7fNPqj5cw2Hp3xNPMq",
  "key15": "64PurNRSgThqdQg8PsKocTujULtkSZMrFCdCsKZ6347ndTAZqa9hYXi1TZosXYNmoDzVNouWtR6DF4YmuK7NCVaZ",
  "key16": "3yJjVdRvDEgRXt6ypUDpigzgAF6e9HNdAPodLWXAGWDJDdYwZVvnAuH9QATF7pxybm5cauACfZpv4SJhib6uoBrN",
  "key17": "sxYsnxNHjCkwiCCCB2y2iGprwn6ohkxYWiyHtLSeG9Q6WSBk67AdFBAPQcGNQHSxbvWSmvexX6M3xG8pDq4LL8d",
  "key18": "5KtMsq5ak264VUEdPaXCDeW14zkq9ZMCh3ZUY3rRVHdXD3shh6GghePss6vuPYrdJdYHCZ68tsLaiG4Euc2TVKcP",
  "key19": "3C132UnrwjFBihgzP1nWzxwTYkk2AyVe1rWaWusrhHR7goKxC7BuBMqavgkQsZFWcnhcFRf6X4JzTYfnhyMCAfZP",
  "key20": "3nneBKxEwobj8QtvVf7NTASTBTZ6M3cKkrV5aopbhsxNPzcdS9E2X7zjXXynXbVCSA4ZSmhinWvaYzGRW8XFJouL",
  "key21": "8vYmgpfViDsJjrHqKohhPaHwVWTHdMEteqNjJGrL6XSP45SAjQwhPB8179sxcSfxmLY6eNjew8M2CEvgmuAovaf",
  "key22": "5S6yQoLLH1vibLfA1u9PBqWPjXNRJchKEySNygzWYSage1qEAhzj8So4N4tqo8VCDjw9ahFo3oLG68ULmcYc31Mu",
  "key23": "52rF2x3Jr8EUL29WvRdGajPzGQxGrmKBer7oSwNwhWGH4a6gBfYwX6TRDBC7xg5gJqY8fPsMoRoYymyL4aqi8zeF",
  "key24": "ugvHDqMjLRCeyCyyL7TMg93W6k1jMmG5Rag2gqzN4PGfkMwBLeh71z6y8ULS7MW5P3V9ZHnL66ngxc99v4SZdxd",
  "key25": "5R7eWA71Q5euDeR3MxiWvGP98cXde7QHErXsjfmNSi7VRoZgw7x5LHzhxvf1gfagNza3vh2ZWD6wt22URTia6E49",
  "key26": "2CKqMbRGhAxjyguyifdnC2MX1ZhLSYQAwwWDNj6NF4Co2ahk3ABv8vGptDDdFRRaKDjvn5wUV5CRvKfDK759BUgy",
  "key27": "4gfWDo1vvcPUxxuuuneWhdrPuTwswrKLe3iBUhLpW2naigLtafv4DzBc1cj2GvAzjzxFxtJHz1YE8njyAnKdBigN",
  "key28": "31w3vL1Lh2AKhtsiQ1oQkzWTCHQ8KKfnUVLgZzZicLr9ueoKHy295vKQq4tSn3Gexn8fcoRtXERu2FGf9vpkfNGY",
  "key29": "i8kP86UByuJHJKWf6wpwjACvkwMCgBeLiSX4DKPV9hjcCoaa7wFnDoHzBTvRcaAxYwczqqBrvRtrRauPHKYr3gb"
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
