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
    "4bEFL9gtcpGPVKHLkmwFiHU1dYmDsR66m7JGkDZB82N5bonX3qmH9ZeFiRT9e9M7mS7AHkTsRhBgysB4ZfeRSCGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EtpCasw5EH4pXTvL2coiiA7ZHkw1YBj5hLtnwWJc7u6RsphTjwGacdedwLWsYsXXRTbiewiFozCX5FfuL8zRGTP",
  "key1": "5nonCCvgukonwEwGbcKfqjErD5J81z9VPLA8YZtowv7vZ9D4ePBzzWWfs8MQo5iuoFhRqD525Nt3MnGybNxxCiWc",
  "key2": "4Jk7tsV5Ssj4T84nPn5ZrFC7RdBLwySbtGenMj5rbTZ83hwxKrZPzWZT7Rhy5PgfFY6DRcLECE761a8aBSmTBsnn",
  "key3": "xBkGPxTkkFvpdkSn44T6fdAf3pjS6hJ3Wq7w68wGXAFPfa6X1wYQEreQraqhmhuoCMsUwc4XZMaeHcTR8DxdEqU",
  "key4": "sL7ocS1dGz3MHks7h6exN4NCysvBTagDs9xnmQkcWgez8ngE22rQVzj37MeCtGPQj8caKaNTMSgdzkFhTDQSQMv",
  "key5": "4MDWwUEkGQ6oKGHoQzjw5yyz5Hy9H97ZdgowzrUhs1WN5e7QQzqUefQdov1SYJJFTaqYbTWhjVcKDHESvWgB3bpe",
  "key6": "4nee8ouu2n6FULU2LHgsiA7hNCUW85aj7ZbzycJ3B7czaTXvqJs4Y7pBwUpPyLF8cC7DJ8eizJT7C2oD6WWQ2fHc",
  "key7": "5LwGCDd1T7ZhyxG9e9pYusbbGZYNQ5EwZT1H3jPmvb8u9g2hVTcs638oVwUgY5F3mnEWGLmmSgWmiNG1xf7nMjzB",
  "key8": "3NsFyojWGKNpX9kAeoH5kQGUjjU5m9GrCwAwYXL246DiN4sCCshRcZL7E48eFCxCcp27VQfbcYykPKtWf42EQfHK",
  "key9": "4z7a1V6cB9M7e9N8dvdsLSiY7uzJM2CUY2zXUqCwUmGiFtr8cQL4eT3uQSvzWJ5aWWsrbZkAfrxxQbYF15xUSwah",
  "key10": "34Y3r3xbD1tq1DqLsrKBE6YTFpeXe1kudk8jnFof6p4dugYrYcZ2DWWxpYqRLU77m4KME4JwhHTgxExTSv7wVEEL",
  "key11": "4VjQ444e9bKv1ho31MVYrbch4hR9M7V1WqCjrAU76UQ2wB5PnoQkuA25MMs9Ts3EXFbDgjfj7tNv6KMAWFkHsBXo",
  "key12": "32FdPA24QdMaL4D396bU3fr1afcUCjfZ7vT9inoMRM8rWL6WfNvfDTzUWAvf4UTW4a3LFme6wdhyvb9ZLAPTpeCg",
  "key13": "2L2RPhRU7WKokLPBFV62EH6Np56U5igqYkQuzNqC1ToB73QcK6945H5Ctzd4cXPHk86kRPzxBquQhKFwtfCTVun1",
  "key14": "2kxDxAWVifYgHVTaoRjSzwrVsTSSThdUBex9JwdW6WQbFaEi5RpW6hLsDLB1DB3h6cMRYnZKZGUzYFvwrrmYQjpW",
  "key15": "5UhsnEgDvbJ111t8MA4XC1bKev94iu6uVuRvkMo1yAVaQ6aAaX7xYZ25GgLCiJtDHeHpJKMf8kvxDPC9bsAUmry7",
  "key16": "r2F2FLPekq5QmbL8vHoEgffpBggvYK3mChskQaAxmyENVVQeQyFkb6okaQVAk4zKnpaVYdoCppZGXm2HbKtNaFj",
  "key17": "Z6EXUwawixtvuezV98WPkuQ9Dx5kVTZHf9c39Kxs5Te22FsCjukBpYnYAFid6szjQ7MCF3Ln9G1dY4THutUm9Uo",
  "key18": "46jprU7t4iVdx4wdvpxEvHVm1bSGshYHN2gy5RCHgPmJZ31QyrvCC2q3MUea2UBxFaLpWgjmezmjoQobb7JujFZY",
  "key19": "2E7M7JrR9meGtZQJ9Ls8us1S3z9aq75N6szRAjSG3b4wtQUP26FVvWCMutovCVEfap1kzp9ZdpdtX1ocs1xbfBCL",
  "key20": "5uBe2J3VwVG7C9R4TMHpXrgoytnR1Vj7gZkL5z1ZsPz2uBJbQNGiLEFRdoBKLEZzPSreYC8jH15uK1vqrinkNRAn",
  "key21": "3qCAyiTvXbML7B6copTt5sfWFUk1qn5wYxHZTMo1GaNB9gQFHipVLHNMKm7ydxjFGBkpgLL2hbCwhPGyn6j6KZjh",
  "key22": "5Z6yjkBWzP3bEp34zs5BiH1PjoG1cWPyoC7nVApWyZCqKBFbhky4SmZurg4XbMLGJEnoThLVX9HLfYMz67BcnNCS",
  "key23": "3k6AZfBEHjguEqSdEpCd67zA1mCeeg1MVzduC97iVMYMPVQNDPaX7uCXHCB8bR1yn5mAKQ6rJiZKdKcMGHrxi8RY",
  "key24": "gMYgUjjHbMvHYF8m3QybQ4a4TovLDWE6LhCfxRyUd34oZqDZN3pG3fts3JH9YeoaKyaup4bDFBbn1o86JKDV3xP",
  "key25": "5VV6GQ19g21H5aq7GFqSnXCMNnsniwyEGH1eMQb35V5QRYv8xG8TgsW4ddThSVq43QntLEjfxrQfGdr4KtYBTZYJ",
  "key26": "66nv5C3ptM9u4UtqJTB6GSADtSffC8oUgii6Vo6LW2Fg6rjW39p1YqjvLskFNRa38UyPQHSNbN8cpv7UKpV1fhxp",
  "key27": "4akfLWDraf9ybADGWPEznHyDR5gc42wgeDiwf4Ma7i7iCmqirchjesCyjJ9f9nZSKWbWYGJVmFgUPT4PETUpuwYC",
  "key28": "Lxb4jz1SSVksYkV74i7PuoSBpX4R46ngCfty692XXCyriA6LEhbfp86vb3teF2aLdxDN7mqqFvcXhYZdodhiuL8",
  "key29": "2jSVmyDUjdzga6mJAmGrvzLboMcujta7b5pxK6Y1JQxKGXJsjAowexh6nGBjYY3w3oi5WFWsNHs8LgBo6cjjSQz1",
  "key30": "37tK96mPxBjADpMBbczD6zUBAf1tvi2P79J1vEQt3UP4vUwnFa2PBZGgqRWt5ER9DhbGNhaD3tmWrDDC8czwNEec",
  "key31": "433cf3m2rq6KAdjN15Ye2fC5c4sD54rDoAjPXFWsGfiJKSLSoGRiDGMAeTwZkLnZ7qSqynVwkThbaPyNRzp3e1yt"
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
