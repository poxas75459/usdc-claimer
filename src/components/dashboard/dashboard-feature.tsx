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
    "5jPPrrPWZZF2LQU3bdBjKwGbndBpyUopWvJezEG8kRSHtafTVEQMq18k7KwH1nbVhwajimdJjm2vByL9TM9gXuWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fv6Bs2LCSmWLm3TjaEpLaxqAJt1UvPY7YRF7ESPZV4hBL2bb1hJBTWzY2Ad31YNgAZ5tidmPa5RyzVWu8eGeDgR",
  "key1": "44enB195NKWL6zjzA4mV92j6BAwgQn8L4cpwhqYmYsPQ9DhuBAaPJQt2FcD5zat7AQWTysKQKNG1xmU5nEFW2nyE",
  "key2": "5Z9qVYZhRBXfUUEL1BrmorB2PhAMfZDFRt8F1HATFC5vECfCnfV9p4YesDzv6aSfaEcTyWszpousoWB7gHuDm4qB",
  "key3": "5N6nnBS5eg9nXSuyJo7cbJauCafvPxvaH7vPqB335GUZEf42XoUenH4FC4HrEtNe6ZdDbbC4vpV5rTx8WSi1RE3p",
  "key4": "HTLXtVHxsMoPegCZadM17BuPZesRF4hZxFBMomHxJ7e2QDgyNGERnzPqXSTsZF5NvymPbbY9mgrdajQmtH6KYhD",
  "key5": "2heQBZgJMBns68qghqSbEAu1R5kSGrBy4uuQ6tcsVrAyai6YSNGWuiTNdCUbg6THErhsA6SpyK5t1Jnk4XTgUeRv",
  "key6": "WyFFZXE6JC2DWWimV6f1mWm5fBaDPi49iBTKxDmrNkzYaiqQJu9JuW4eDZBqE787SrgjzZCuff7kmjW6hPP7mNg",
  "key7": "ZdNcH6GkyrZdQQvzpNPP6L3UKLiBtqEgvf6UijHAn7XJu9dZmobGXxuGjuJfMZFxMzufzpNsYUJdL7wDAUTBQRU",
  "key8": "2dnNyXe7ZdHSvSqBbHd5eKDTXUJdiPAuS3WRvV28CiQwzfuyqQPKoKSeGnZqAWjZcdcHmxMoYqA8Ko66NsRin3Zi",
  "key9": "5qRcskZnfR68iPriKrRYGZs4PX8swZtmboTBtk2dwfyhZHyctgmjUuhUZT1niEERUh46iTTcoJSNg77P3CLeUz1s",
  "key10": "5z5JSzpCjSAKwbfEydK8Deb12yYMXzukkDV36MUYyUVbbpHsK3c7JVuYkxezGwZiuiTEt8UgkCiU3jyuGn6RZxKe",
  "key11": "tn7xx8pNg1Rh23dmZmbUjYBmNLurhNwkc55pTrgaNBRnRwgDWr3Gv7W6DqidoAirkCNgnJ1jzTCanHCCC5p11LG",
  "key12": "2YU3MAMJ4K8DGDVkZFXZ7SXPcshJjSaSgrS8hnBtDoTMu28kgrpGovr3iFjoEEqxNNAUaFPAEeWqr9VBzp8DD2JA",
  "key13": "27dGmoXLrLNUdjvvd6tYSteiZ7D8JguknWKtEQFVfUGaaQSCPatRbHqSBzwCDBufEKhN3bkQiLMvDscrMUrnGL2F",
  "key14": "3MhCa4JUTMPQ5DQi6TZbq8EFEdYJb2jXWLDdiJo8MQqvjhXBKXVE62Cpxiw8k3xqkVK9ZRc5gbcSMsjd4ReSXK8S",
  "key15": "3Q5RgHJGBok5pMF3ajhWgvS8kEpsEcMzSntDrYJxRSsabXwtPekXHYHgSPFoD54yoZrGo77vkS4qjY9qpkFWaW2u",
  "key16": "5zrC5EFZz5WasJmEf5NgkiXLAdyHGYgeVnxrB5TmiQVneRa6VXKUbi1BJP8Z3kdMMYDCsySzLnQkjq5Gmqh11Jkp",
  "key17": "PcyEgonASFURJUZMsb9W2dQj28y6urmpTiVYZF7ZzazJUFH95ekh4eXZd5GKV7Ljg8QbNEsjZ4y7ysTwiL3aSPL",
  "key18": "41G4TFKmMoN77aphXD2eLJWXZXzgomg1Yjsm31KFMxvPZKKSoZ6vXADmMhABzzH1DPEfiBcg91PWJ1TxH22uRkGz",
  "key19": "2VckY8e1U2imvKU9okLMg94dH13zzQyAjasvnRD7K13agvDgUJS4r5R7gr6Jnq9ZAedfFj5wHa7HUC6SuGNyTAWi",
  "key20": "5s3pBWjCKXHpYJ78ZFPq3LV8zWF1qTNsqXJvjSBwcYSsW7Gs7Y54ZgBkxYhpE2LXibAXyArmtg8XXXmfFDoFduPK",
  "key21": "3oR11VWdDs9FU2PJwBXAQVpEWYq6a97YYJVoXVfh8T38m1yStyzzp8Vpu9t5hwgYRyReuj1Tkoqo9R52iFjMw3iU",
  "key22": "4NqzXQkHn8jyaUURzZtjTvHPUbS53W4VyPhk3HfCy5npTPedprL8h5krBtBjE12uepmi6BsCdUY6c8TX2VYW5jhf",
  "key23": "3RYYPVu44ehpbJTwoHiUD7B5Qcc6axU5CvFWcv9pCcxv3cCKRYBGoE3s1aWd865atqmqdFPhssft1dewwxuhP7vW",
  "key24": "5q4VA8EB5A4NGQ5JR1EbFFa9ib6QamsHYxnTgzihy3bKceEGDoVTicUsoKeEbnCv8jFDjNs9sdS64uGBKu78TS1p",
  "key25": "4xD7e5QZPqAVcNyW51pEhrZqj3tCjyNAjENk1jfUEoUTg5pnKswLLoPj9RPdBNT27MEFE8JoYot3xjPpE71uV2PU",
  "key26": "pJybCRcMxKpJucMPoPvaRd1ZUqV7YfXCzveQScrBnbRVM2yVTq46UhSspcAfBmcpr2LrCZpMhuZSaUE7Wp3K3de",
  "key27": "2q8e3BrBHeT4YKewLX1eUsKYz1s7bp8zwHCdReSAvYDBYFFPMsACWbX63NcxP3SCEXcErBNcGyFmPdqLe5R7bbjq",
  "key28": "2D5ZTPb6TdBwghPdz1RCH6XzLH12DjFjqrFVpoAXkPbDED7mCPTESwZWrYCg9283cuJoPuD7R37U96NboRaZhJim",
  "key29": "44kSxC27RT9gemHL51S66v5sdqN7Xn1Xw3tteN7YMDYdVbGJXBp1hWkMCPigRyJ8rxuVQUsuSS47Ra9P9BoL7DFS",
  "key30": "5UVxaQjRyY18CjxZ8McEeYwAvkZPyh853pf1PGmnKhLqtdrcyE42TtatnZ8nsFjhQKVzgdseTKVgaJ9AhwhcMYV6",
  "key31": "3r27AXLsBBWqCzfTubem9FFuPZEEBvXuBuwcXtVsPTMvMETQ9ZsEs6eWxALvzWG5XL3C3Q83S8hCZ4nKsRvZEnot"
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
