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
    "52NV1edWApSrBVSVYsRLbXgVXNceym5a6wbyKFpRMunx3jdRKCcBkhjrS6fpADcdFg9f9BvGBpP93WqZ1J5eKQP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29etvbi4oM7zdpsc1CQh1bKVwjprFtXjAvEkyt6btBRPVEqkWw9WfK2ExhgpuqGLiLVD7D4ZB1HvRT4xsDw8VVFS",
  "key1": "2grLML2wmQEwNzkrrqwb6GmVi5EMzwNNZ2xday63rZjwVTPtk78VWG8aGbgd6HbupTt4so1ZMUgEuxGvZ8g8Xx9D",
  "key2": "3rmjNzZmcnVspsnrrPLB5MPdRdQXTFST2RpJ22SuUjqohXnqDjmnMku8SjQmebb1Wt5avPJo98Qyb7E8i2QjSGDz",
  "key3": "3erhAkWKsnFnK2K4s8gVaRZPuiZgCPUz1cQ15TLsHdTV7U9fu5W9wPK2awZR4jBT8wneLTPST6XhSKi9nMJ9vD6V",
  "key4": "3HgHQsbfDJ192dxCTrEyAXwMbPhnZ3zo3tGvKtgoAPUmuEtXFFNux6ERXAGMMPxcaJB9XwWQE5oUCdDpMzBeycwA",
  "key5": "4MsLKFZXAqUMxnpu9C8znJ8ZwU36LQMgdkGqJzexKYiebweaFhgNyW3NtvKFx3qPF1PM6KoKRi88X57kRuHeBDN7",
  "key6": "5F1U2J4Ar3kucNHG6tpfsThZL6uWZd6C4Q4p6tTFUE4ikhR42kvBMWYSF9roWP6GHAhWmDpZQitDRB2zodbeC4Jn",
  "key7": "4TP3f7tymoBnFq7mkzfnyprzsUDmZvoMPWhXotB3mV7vRRjvSxfrnyuH3TJp51eoJn7kdSvio4kYfhZfvmBY5LHk",
  "key8": "22HAfzpJ3qfFSBvFfKAZS2G3JPxdZCh3bTdGHfgqG8HsP1UqFAfSJmLXDhn1wPwmvaR85uHYW7PgYbsThV1eVZjN",
  "key9": "4yPUCUJ4VhQsdFASd6k7QR7MfFqKqXGPdkosxXF84xQSLUeS1kohtNnCPXekDSt1NvB4bvzgBetr7WJMwQB8vQKa",
  "key10": "4DgNb9gbjzzscVhJUpoLpFXayMAvbWpdb5Dm9Vpgz6wcAwb43GBSjvw1sSXwZbJi2gHFmmNCrMzXUuBD2R7QSgcD",
  "key11": "28YFQXnSQSYy4zKNrhJv8bKaueUbCvwJ5DxLXhkWtDfmX9eQBVfR4ejAKeYTBPJTYGovtkjvsk54Q8VDqo3S9xSf",
  "key12": "4jH9ME1ipZEE2nDeaYcyTnGN5TfLo47Fg5zoDURKcrRFop19aQ7UUvP9uMyfaSknT7uE6eHsEnxWPYNjxsxZ327c",
  "key13": "4H8V4X3XURwVKKFV9ThY9uzFZE9DbfaJ3ixLEFQ9MUQYzSQKDaULkwubEi7Swo5JmgK9gfvXNoPrZyqhH6xdpDuJ",
  "key14": "3jzSuySYi6qaWbtv5mWvtWzGbZpj3ombcNVEhmRQUHfNMiCh8G1C1y6CDJ67K4b3SrpWzHe5mWew4QcmunYxUuan",
  "key15": "25bUXLahmVnpzEGorv9qPtknhNWryeHnj7SQJAx8xgAh4pfRZ8w5yDZaf4yU3zFikvWy1AmL1gbiFJuX5oVoZVxC",
  "key16": "4ZAP1gYX2bY8oGCySoHeXJ8FnX3gnsnnqoLgiLuj3uSeJVbpiJsbSKv81tAbfqhCKNCGCaHhG9wiZdmZSTuNKLQE",
  "key17": "5iMqdgLVZAv4wktULgrWniNp2yKgXwxMrygSJnDwq52c6HJvgSfEW4DZ7VRJLqmCedPctxc9ErqYDTc1NVpu9SKY",
  "key18": "32F4J2Nb5tevP4HZMMnYgzF8BNG7pVnrjd1PaFAeeHJ21wLvaBGB814GCriG4i73fVYxRADbFYgRPNdEQdKTkB2i",
  "key19": "2LqZBArAECRcXsMDs6HF2HxMUTyQD7GS8hBqXP8hPsdAJEnKicdsYmxmKWXqG2Q2YhAaCynGAuHsxSg9TKJrfqm4",
  "key20": "3d5ZoCBjbQz17PCd87J6oJqHbSBVj4F25b5g4g2v3gNhQ4eWDksQE3LgMtxNv34Pm573phGSgJhLU3xoSKfZZ98W",
  "key21": "25oSYZ3Efp1pG9aJVVwnVp3BZxRaMQTsMqzimWDqoXMwA7nnpVdeTwwKkQRY7rEkn1BghdQeyJkt5A5XiNeKZZ23",
  "key22": "napzsGUs7tUkyf5ATuP35jP9uLUie38bPniXecpHcYmTjAqRfEusdN9TAFoRzNqxZX6AkJrvSLZPjAtsmJpeYMR",
  "key23": "5JTPdxr6zt16W1by9bEafk5SXxD6B7ZFgmDiw4fS3ideWqgKiT2Ji1MxmqyZnVLNjMjnJpKyonD5kf3TZeY78xcg",
  "key24": "4DrW3zSHcjena9UeDcbAP4c7eb3FEY3ZU2kkvqdGb9BVZi5xoyHWDTptR1miYhvC6fiKMwtUSupFn96iCqn5TDXA",
  "key25": "D679kLoCZ9vPWtr4wSwi48r1oq55d3AXKYL32a3yYiKbDpaSQir1rDeu9WpZFqmyiPgkkqYuNmQFWz6FM8vaM8V",
  "key26": "23EWcyRzyfZvZq1PJkMYqhK7TWNHjF6o4FdHvqkFfqJxR6xBG6SbG2YDbYEHS3iPVEzyK3oTNEaRBi2ZNNr96GQS",
  "key27": "4iAHNykSNvjGw4zbsYGjTC3cZuW4MxPc13hS3a2hjbyXjBw3n8cy385fRZYp4rqEK4wicNVGXNkVJJ2uqKxMuvDC",
  "key28": "4wYADMcsh6xocyRbjnsrpzYD8rDsf7YD2vhjp9nKHZvKqcto5iWM495mAC2qtD3mnAMNJmMY15kSpuex2arBJ3rz",
  "key29": "3VnRdj6aiY6UZodeTERyFTdneB4CRZXqbcLG97udXW43YB92iEmm1pATYKvQQJma5hZYZ28Ebn13ukyMksMkwsn4",
  "key30": "2pa85NfWzLnMqCcBe37Q3CGNWHjQf8583pomMZa7MF52U8iDFpiJnNwXGiMT2GX4hRPwYcMJHaKBJjDnBbw82CHQ",
  "key31": "31sBHDu4WSLE5DEEeLWuvhafecWn2Kemfb8MhUkZPFegqwaadZ6UY25sbHpUFxUspcoLoPjigWaxTysjpEJQ9776",
  "key32": "2Pr8mgBEQ2fRSksF3K56hAgxQPk5Am1XkskH7t5UNUa82FdeLJLpwNEx3QUMAvakovjFtSgcrctm3d2ApM6PtAsj",
  "key33": "5DWNnYehpbNQDxcavaf2LQ6CLsHWDNQSKUzfmWaPk87aRahpeFaHo8VtjqnuCYBcie1fgY7oXwJEvdF1DcntAXHF",
  "key34": "2cBAc3FNssDawsMnjGGnergRroJUx5eh1UhRb8rNHMgkH1s5sac4kjmUCV914MaMj2Wjw8uTqK4HCoHUvfwN98TM"
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
