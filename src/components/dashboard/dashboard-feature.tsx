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
    "3tNZcX1A8XtoGSudaLWJJPxi3gj7vF44whdDkKMVduGr3WZw3NzwahqDpM4vHg31SBnchr5cNu3Ah7yJw3kqsb1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DnE5xPN3CacQ47oQpiukQmTtjjgesaJYMEsvWPSAPWhA2qqsCKUAsC7cb9pgL276136fvRfibPV2Mk5Ej11bAYf",
  "key1": "mKC94wTJWj7waSvpu9HveE89yZGCc2eM9unpvWrhYPvyFzdT2eytTc4eRiSfWdjFhoqvWRf2XXwquX2jjdfMy6a",
  "key2": "2cbS4hGae2LsfBLbquUY2YHicVWUTmzHR6c8aaYjTnoxYDSkJrYpujEUpuVQAdMHxUEuFYLeUwaq57sx4svgJJRs",
  "key3": "4bu8rSau7o8xLPgTHXATsvAq3xzNsCaruCdCiopbc2UXhfHWErwCXcwbiZTDCDjrRhY7U8GSvHgLMM3RX7b1CkzQ",
  "key4": "sCVwzKpXrV8QBh88VKkyYQhPSYp77iL4rS7hKDbhH91UeBcQupzxh63i9Gq9Ngd6htsmp2CnYBik5e7V53UewBL",
  "key5": "3FqhHno1PiRXgWdspRz3TbPV78UCwu5o3maeUaotwenqqmXFFVy8qp3ki7qdwB9GTh3vQUaWfjcinSpEB9avQ8ib",
  "key6": "5qUhya2BCCuhXCiXcJhQvc4M232f3guvmWXhjDzPm1DyBsq2oVYQxdaSe7nq9kY71WW21y3oZSzdDEvVpToqfE7n",
  "key7": "FnoKFerUA1vzukuyfhKSjXXjwBuDQAGjFAn9vR4qRXXuysp6iDx1evZrx5RGMuFmLaCfBvGWMBYnLUDex1KdZrq",
  "key8": "5BGpkdfWRshDgzRUp2ZC5baQFewyNbpP3NpP22iqNKCZmBeBHpmmXMx9RBWGG4YCvknxDyohHK7CjhMQgjt3M581",
  "key9": "3c4i5vYntWsvFvUsvDZdxVfqRjbWuECRvVws7SwDDbTC2FTvkDcdaXPXWnWqJhV152PH5GUBuNa3KB5r3dHuoR5Q",
  "key10": "2junuCVFwyebqQV4LWCtWgeEKev5adSKPy48CWM7ppAGfS4TBKRBrzVcJC49xoPUiLiH2gogcktCDoA9nr9p8toV",
  "key11": "2c5qr1kjBY5roHQQkvHPUib98dKWqALjuqRynTARF9dQyuSwoRVdy8eeTxRu9EZdDCwWVB3wkHSRkPVDHsMAWUDE",
  "key12": "5JV9PrEtBQjpUehd5Qb7pkkRcPUmvP64cpfp7yuSNqL4K1ZxPgeXmLpKutJeUyPZyWags3E1Mv2q5piHzSQQdyVi",
  "key13": "4NHsvZVxCLRH2oJt1qbdqMfg1RtnkcQGTmEoF6gYBDsedfj3uHSe61Sa6f9pQexHneiJEKbqb2vy3HDpgACXW2uz",
  "key14": "3sPRc37ySgusHZaVj6opRk4DVmQYJZuxyHtZksg8CdW6mjz4sGcrBMUx3ZsNmJbrSU6n5pQgPGtrqDVC2jNt9Erd",
  "key15": "4h1vYB2HtFExKvhNi5rwkPRxm5P6KrGPXuPwHHi18ESH7FvJ7aSyFT3W1SLAhojgNCB3wSvQ8zyYLUTg4xZkKzvX",
  "key16": "4Fup3crJ4Yc2hUPkfN8dKNLR1s3QZXSWUwVsCiWpHCR2ZJsKo9W2V2VGTE6USoes3cyYQeHKHMtiQryXFHzq8pNt",
  "key17": "29ZTBDKU33E4mvvog7QGwPWYL9ZfGZEP8gW4MJvbDpRzh9NcoVpn3MSvYguhJhXi6mWcisSLqT69pPPep7uLX156",
  "key18": "6fkgPs47LpvLu37gg57VLdL691GSGN1akZPRrgr6GNcgAMy1n2u9tPArqeaZzyNbWBcwZeGCAb1xSJoNuHkpaV1",
  "key19": "5BEMNFGqsDQJAZC6pGnEENVe9M1ikwNnHvmJdKF3ZiruNTTFWrDCMowDbKYPMZK4CU1R6CZFCx7qCLwadgGKqVWG",
  "key20": "3Aw2Q7yNTrF1PwDJUBC3peWjBNVuCPX9K17nNfRbwChfdSSUWDzeygiaRgkJNiUd2QuQqcTWJiiaXYwCYdCXZGYs",
  "key21": "5J9ZbRt6TnNkfem8uZ2Tcv4s5F2vDZF1woVWnU7w2eQ8N3CF1DqVuQq2mSoXEqVeqo9ZCacCi4LtyCY38nUnAwzH",
  "key22": "5aBFr1zsF7EpaP124KAegxDfjtuuBE1iu8QjQoZTM9DpgPNm8oTAPkQe9QUFEdVack57zqsYR4xYNayoDCo3n4zS",
  "key23": "3xLU28tn4dh5fxUxt1XEZxSUEHJqehvbGrupDCcBJXMUwNLQt41APCTr5ZHUWBNrxfavmPijHT5uiV1Cv448yNo3",
  "key24": "45V9G1ASjK1UAxs1Nvs596EcFuktChXNBbTrwixfhUKPiSAXTBTFfKkzcA9B4JS1jwM9qUza2zfR2Nx5eDpnoqYk",
  "key25": "5gimujWTW4kUYhdBGobj51Wd12W2qaWZBkpgKgvrWmSxwMuged6ZrpnusGZUxQGKXLLfbm6CZNznS4SQpm58YeVv",
  "key26": "5S6w7qvjk9HxjCawyZYgrXFQSNjUYrCmDm4DxS8SM3dTJ6YJrZzyjnUiwSA2DRdVjUm6XZqXHGU6S3b5NfbG6U6x",
  "key27": "ftdM9AxPQmaqwwRcDyJPf9tbSLURBTsN2UQ6NLV9arjuNf3sBsUYnqS8MhEhEf3mhHfqFhdFcZwR7VpRiGChGxB",
  "key28": "2B4DKkgEkw4dm4YrGKKxKF4Gn3uqBzevCaefHWUrirhSZ5TyscuWfkcspxFYHwxEUbnZQueL7cHFGzWmijXE4eYB",
  "key29": "5i32ZaneAt6Tyg9gDDLARHop9ASnFQF9k1WEL2VmZhvrDyqhWmVLSZKaPAsSeRagUDJGGjB9nntASNEuJdBtyFjM",
  "key30": "5QAkNLBzDsEtp3vVxj2VWKexVXnDCYtM3BA6SnM29RcZGBfTwtfChWZoaRWKJfeXCZm7PHdJ95i9vNxLLjXM55ap",
  "key31": "3ogzXRRS5v9Q6JoqTHNii2SX59z542UxCMjHLS7g2tcdBLAQASo8pNsobQMDaejaRNRwEnk5u2grBV8RULLynh53"
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
