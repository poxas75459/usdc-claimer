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
    "56GCefxLKB4XGi2hEQccV1bM5Km6umT5TstLKMkLnCYtLhPT1KndLyTvRcaiCsuNP1dphCi5s74i7rfvXqM7v5Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uAYjAr6QVXcokfUza1N71R1m7na4YMisaQZbhuCVdo6nZXB54KB1xwoLUHLiwi6jhbBHv5h5CNwDasiD7BmMMHe",
  "key1": "2qJ31AU1kxrBCcsZa4Xr6R7puUTyD2Dh3qLu8fvKitqnR451iAGD14i3h1PkHPqxuKpWwaSwxZqnntHw2bLodAEr",
  "key2": "27bJqV2teR31RQcBY5oGSLND4AkLkxvkF71nhBjVthQ34Bo8stvBbfQWB2v8ksBXATKeeHmiQr3YjBDqWZUMvvn8",
  "key3": "37YvTX6VyE2tDG4ebPexHxw9YPDEUHMCvp8HumcgV7hzhVkvG9MVtcx1VUxRgaCEew1DTxhkxpeP7wR4WzC4CJto",
  "key4": "26U1QEpPQsZzC6q1Lnvi78P1keVaSWSf4db57zwKqPJ1NnEtxnq3BNc1o7LPcdJbL5uuqUeNPvbHAEBeqSHhYNAr",
  "key5": "KnGD1p1sRVWf462muNHuphFCcXLkthYB7fwRnb3cr7A6vyDmSiCSW8XJufYsBxK3VAH4ntAQPu9Le1uUcQ2Ambu",
  "key6": "n5WS8ixxUEJN5tArYAn3bhzPyPK7YJvtsyZsCbk6Qp5aiHAd6mTKXdoQzPKcHhu3LJyQ9Lz8MFt5nQtthMTZYvB",
  "key7": "2s82jyxtext6GeYQ2sRqCcv7LKn7Nf1r2itswDFa3Mkatxj95t7oSZQ7Ls7WJgAYJbXsoWQkMgZNUrwxiedFVeo1",
  "key8": "276prdk5ERYK88exFymkaehLWBLFoDbm1q7ip6wUhn4WM6tPXSPyQ8Yf2ATuSnDdHAUt7FdESQmz9Dgqj1AG9mAc",
  "key9": "2ykpHZjW1ij5SumEGttmd89GztwfwdUh68CcCnd1Y9Ep2t1QFnQX4xyxVsu2h23BVGGVnodbQ6ADPiFUu4Xg5krG",
  "key10": "4BzRH4n8gperstqS2aMX7Nxvm7kbcwweZjok3gCRqGKFDTsG6DEyzT9PBCc7zCdaNEk9rbFJTeHzGKtihGTaPBpT",
  "key11": "LX4pUDdzBfwkB5pCVB3WVYw5oeYHY2N2HkiivTqTkbmf2kNefozBFr6k7h3HYSxDxVALQHQiuBEG3Wd1tjSPMHN",
  "key12": "3shUfpGLiJvjdFhRwffrNaLH6FD2hWT4kr36u6c7t2AKF7EdfpzSTXoC69aQ2G1sTZPQ3JutsrayjAebqYbPNWK",
  "key13": "2Bk7vcmrZFWTpDKUXUDPh2Pt5zCobu36tpsq9x8BQqHmTgB4fpj3sf2YRSpdonAT1reGFtuXixNsryo9Fhoi1aGz",
  "key14": "5KFNRmZZzjUgywkM2f3WKTNyb5efN1KvZD5UfDiZMJu4PuxoeespXUhFvnb5Fz87Fgd3iPz5jXRtbvjmmbiGqVGY",
  "key15": "adJ76z2JdyLEuo91H1YdHEG5GhSRgMLMPabUPE8MwzbXdU83LQ3PhfzhvrN3zt2BuuSC5fvu4SU4gpLjZwbkYBd",
  "key16": "4DmS6zeXNDSJRbpHk3ssK34dk1hMW4Beb2EsKwTHWh9zVoh7AGWCadmrs3gEEYKu9uKcttb84LgML4vyjgjZsPLi",
  "key17": "5fCpT3n9XQRqsUuxdNgfsmNK9a2ka8unDGfGH9CnxTX5uCnkzEjZjUiRfif6gUaT9LMjcAifebApMZYWKTdzsyru",
  "key18": "65G7c6SaYdqC1ubpdxg4tQ3CY4d6ZBQwm8bcC3V8V7o9EZ7VGqaN4SaP2zQaNb9AanSaqWTxDjF9PiM4VLnxeXFh",
  "key19": "2TwKjogNQ11mQ9xWpwMdRyekfjoZjJUugEDFyviGakzs2uWM7NZHmg4xJofkcRMU8PKkjSRTb2RZonAw7qBzQ8fK",
  "key20": "41MKxgiWxzqyWT7hYCkebR5TPeCTgYGrnzZjztJQFj586wLS1uK5LhCnJBVV7yJZ1fysfwpbnfKJnHKGjHekzBNu",
  "key21": "2cEVyLqZdhwZdCVWJXS9swoetX4iRRwmex9dJvNMKsf1JiJFnNptoCF22xS7r3HSoSbRq2rfrqaBtcHdGLcsGfiw",
  "key22": "V55yKUmRpWSrzoob5FTHmaSWaBTKrfafXJ5xAzN7zwJXeXxNrtHEszwUUTf8baxPgLtZquCUiekHpRjpVJz2MgU",
  "key23": "5iyicgowcudVYdv7NYx3nzFV4XemfQcEZku6b4P3z2Z3nKPSQGdJo6ZaqPuryvZsCMZRcf7P6SVNh2gumWiE4qj3",
  "key24": "S27MiNtYfDypUKdLqAJ6dVuaDACdZ1CSUkT7rFfevqpFd7e5BK2i1uCPCLNfSMe5udXEnzGVjhN4tHzjrKtoQT5",
  "key25": "3kv8mm5YnQzHGjh9AkVDQevh6aqBaFNuF2uKjSwPyCz169vd5cD5juQxUAjHSM2wH1fGecuNxMXXj5kLrMSGQhrx",
  "key26": "2vVJRmbaoRrnznofDUCQGaiSfd4WLJukttW8J7s99mdENuPxqmsFnZpmvdVjWAowKev62eJ9xokqfcJsswti8KXT",
  "key27": "35zikjvVDXGrfqBxsFUYSwh5mbTbQWr1nG1mGT3YAJGuGqnmJTs7YfYZbPeTLPJSzLQcyr9rv5DTNtiCLh5BTzR"
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
