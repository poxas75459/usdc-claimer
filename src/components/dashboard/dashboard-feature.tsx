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
    "3sjkbs5WfFJFPgLEx64ULHkZWjap3Ru7EudiE9Bgh59AHKvh9vGboRWbKYdz8M7ssRUQmRXPKcebUBBCYe4p29HT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FRR2bCyqzATrxUQYmUYojqvK1jCfihF3kqcKDThQy92A2aAx4YSQdce9U49CBE1g5QxRFg59rNkoPaJNnH6rh6M",
  "key1": "2JQx3q5Arh3Ue4nH4pu5KEYr3tBYnj7NcSa71jLachD2AcBaa2G9smzYpLBpSkqQqJuajphw2zM5FVcqZQhMYoeQ",
  "key2": "smToWnkBg2BHuhCLZVtYqePCDMsNdV4EY1o7mcyTfkuYP4HCQAvsVKvNQijeL5y9DiJ5KA2Qk1CQnk9XEjBteyq",
  "key3": "3Mc9RnEdefcpbhJ3HKLgtGMkSSQ65gBfvnDPJoLqnwKRmkxBVGzJJc8KTKSZ8m6juRikFYCvXmpcVve5kkErmD37",
  "key4": "3hq6HRghdzao9odnCpWWxUma4Pke1aBCwMjb8Xc3EDwHDohz2YMLB6MwBbXbZfTGhq7DxRF44s4JmByNCMMWqQSa",
  "key5": "66fxBd1C7KYhUTWQc67nt2tZzLGyKTPE37pbDKpNkt9RXVNMu2Saaqo328keweSfSn2ANyRgJB8RZtdmmftyK89s",
  "key6": "2U8UfZMaHXKy14ZHpesdnp1Fgzt1Scp1Q5FqkUto7jP7TuAnW1d5cP88AbMGArqLsXsUbZjTSBaDK889ADWGSMuZ",
  "key7": "2YKaBp2kab1XdWzD1UtNCRfX5MwFbqGQEP3VCgJ8rpu4jZEBTs3VjCShhSmt4kGmhQtcy8PY4QjVT36koSzkX5AP",
  "key8": "2WKNRMqEhAHXRMXznaaVvXrMpkihUX4nf7stQwyj1PNdJT18mnuzy4ky8LG8WfbUQNTcumJ6d53o2EnEEyBFaDbA",
  "key9": "3S2tMH7h4K9rapLRumTtNwogjmJtpLT52UkAKGxT8Ngv5Lu7MRxTzVpXWkEy2ZpqL46jHqty1mRQwu4SP576RC7A",
  "key10": "3F4jf4RfK83nxQ8PFhDbbU8oxTU8QjPcawBQ6d8Ak7y6xk9jBsakHXKTPoD4rFeNn3eoyjzNzXePM6e8p5ZcL6MF",
  "key11": "2Q1sWRekp9qPSdaMfREDvgWicpvXRSJfaB4vqZGYQzwWfTse8GsEGBaG9kJTwVgqbHCUS6X8jx3GW9YjLB4f8ZTX",
  "key12": "ypQmDsJCayK76Ar6NhyrufyAvuLzLjHZ8hEs3vvfc1VGUFzm6yqQSxC6SDFFTj1DEGqUvzX5i2vweo8jyGKEfF3",
  "key13": "4xittTXz2borFVrTyQ36aBFSw9QCwLpoASoF44Msqqbut849YwNMJi8PsuUky6g7JMerDKhEcX3NRPjFu4ZwJQsy",
  "key14": "uBvHx7LiWhimgCQAxTht2BeR78azvCSzQHz48goAg8ufZV2q5XhAGdak2FgxsFia6sUMFCmE1ZtpgYvZiTEF296",
  "key15": "Mt1Yiz6L5tVGiUGd5oyvoEo93nRPnvpaYSzoKWX8nvWmhm5rqk5fYntFGGt3TgdojXb1eEfACroqr1YR4WjerrS",
  "key16": "HbCjeAj5N8hQBBSPxJqKcYe97ENFKSVENUxuMK66RWKM4AjXgqmEyV1MQ6dayNZ5uioNvjisAsppxbSvtewGkxM",
  "key17": "48A3YfZF754gVNusWALvntTGDTQqMnc6wnJd5z2pDUYFYG52TKX2bPRWGi3HEVpcYwcqoV5VeyqQEG4XVgSCNKWf",
  "key18": "2U4zdBYMjxsPFr8oXfUZyPUG5pjL1bESE1P6q13vM56wp1JkJ1t2ZK7jUKDrfqXxWwGekZXfXQJE8BvgCPVC3PLP",
  "key19": "5shmLfYCnt14Kw2HxdDnabJwv3tRcNy9hPE2NT3JXFVjFrtrdX61ohhiWtA3JNPj64EYweyyvk6cWkdwbMuS7WyX",
  "key20": "4pMi8wrSrXk8oR4edUbmN8ePZ7ucwUYXtpJLai4z3fNedQB1fVx4a9fhkCL6WJF38Z7Wxx1irxJstU1fzrEFSVAG",
  "key21": "ogPS2PuWmKQQ8jFZoCUM8fsxGwscX4rJejnawvbNtXaPARufqsXaM6t86XjyLi8MYtycKp8hw7mx1NoSWfZgt9u",
  "key22": "48S1Vhcqf1PoE3NR3eUodeXQ6bSpwR2nZiQT5CMHxKTJTx3AhxbUutz9QzCtZ2fa69VZbTWWM1EcCFe7BRryPkyy",
  "key23": "42VshcBHLaVevnjnM4xzKzjJgUtyj86mK3PVqXpFxDjav8d3B3JuTEo2HVgevLXsnqRzMFeQ8ZqhK6R4YnkbEYUm",
  "key24": "2WmUznbUVPmCrYaJAbem8cFJZXZro5bH7LiUqJYgFz2UewiBYZxenXETd6nCPhRfLi3yTxd6ErvX8YANsvDqBn5Q",
  "key25": "5sj2RyZsQGo5LD69BonUX3rXKj8CiyKL4tTHjYkRxdhTCrmkztDALswYyuuu771BhnhvtGkNa3LZHnNUBwhR1RmK",
  "key26": "4iBJGptHbj27zmdJcWfvi9yUUTvMpcQCYs5eRv1geM1xuDDuswBDF6rZamkzCXX7ggZbKSZCknwa3HTqSjKuA1RE",
  "key27": "5vabXQSvgYSqEhmEv3SX92Z2g9Nd9ht9DQ2vhwYbjhcxKj3EWhFyXWSVAmesH1Ynb25H6QFh1AL2tgtEfYicAMeM",
  "key28": "3DF8St4CodwwyR8NH2LcAhzdwnQu5rk27BM3gBSEq5umMfBKUB1cQ2N6G7tN5NaUYJWTQHoKKcGaanddWjA7mmRV",
  "key29": "5tubtWkFqYqL61TghQnCWUM24z85HqA2qWMAL5vs4VnzA4p4GUYokjCaDiBxvNkpUpyyBWmsBKkqMPzGd92gynQe",
  "key30": "r9BJ7M9mSNqhbsEc3snjYFoqbk4CcofsbXyacjTDZu2iKam9sT2CVWg6PmNSPJh61KMjJ4WUxjyDxeyjMnfNUvR",
  "key31": "2VGKQFGV26EXcqMn8ZtMmWHaVTGWupyhM9m8LsDxPE9G3onRop3UpFBBjWP3MLxy4nPcmgmfqCM2sxJrpWDUyAdA",
  "key32": "4pT5Mf3qi4PUGqcMTwqFFXSo5Ff5BJxhjmVYRGJRZf55DHzxB5mmWTFnzLgojt7ZRF2pa8K2scDE4aDQPFxzc7Nr"
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
