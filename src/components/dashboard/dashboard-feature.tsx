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
    "4GF9RvN7f8hzzNmaoPAMPU8DDfqUSPTFiab2RtouMYE3pXapWDuZwAEHmgzPn53W5RYEJ5d8Xg7Fa3XSdhZoASMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33HkBTmBnPpK3hiTkYU76L1Dy5odoP283eu8waZox565m7U92sBXmJMHRi6b1AuPbnyEQN3c1fA7XyAzXBzaYrhF",
  "key1": "5LgvzudEPVG2rkx2XHjwk4DoLkZRKs3GdRnpZJmXJ2QqY6SzRA2wPdR5wPcoUNy9HyZj2DQxY6FveSdV7E7Gu3w9",
  "key2": "tpJ9j4Xxug6gvtQEXDc6V2btssbDTJfKaWVsnXksNQftyuRXMfVSdJYZqgT8gjmdDjbCFh2GsRQwQHKDstsVkDr",
  "key3": "5HuVea5H5nhCvMPxJDgbg8idH8RG2rfMFHubN3qxKi9opBMUHsJJwdkfxYf5ubXSxMCqbmwJ86pKaE7wFEfEg5dj",
  "key4": "34p9wzP63LFA7xYn5cRzYky3JYY9hHv61GGbAexEBVtLjKmnfx2rJd7SikRAt13CHvcGqHcgk6uxhBjudZR1qSnL",
  "key5": "4BC22ydkQmNzLCAauUREkT8BpiNjmfv95EBHLyBvweTrTDCjCE8PrSEFx9YtgYYzZJ17o42wChZDRSBU2jovmaHg",
  "key6": "5KKyfDZGJDCEAXjH8F27hUd7iUq7hpYt8mGS6XYW3v672b5LZxsdTKNYZEzrwJKCAdqC1zKqHQH2F63KCbX24qBr",
  "key7": "2fuwdJq2nC5nbdJLKHh6P6vsig5P3oUSGG85Rk7XhaPdGvUFfWNkRa5EhmTAd7mof4iENt3pNKD7RZSzQNrH9zPd",
  "key8": "4EZJqjHXZomDVT9yyCsTHdcPRgdRVAQa4Ub8BGSsoFVqTMwsBzz5BTFoVjCd7vtgkF3zafhKsZT2YVAXARrVbTuJ",
  "key9": "3C6yWH7EDUeRNXvXbZ53u9x4Jm1raZL146oFYxiuggPtqK6mCRW58z7oWNJiQnXYTeAWPrSue8csHxTZqECDgESN",
  "key10": "44EqhumJ7yyo2MZuLdyBFcJp9X6fKjXF7TeNBF9cyJ2Ln9vvQpTfj1t85NZiGxErFeuKiEgYX4PAeNDaLcYE7Lao",
  "key11": "4xNDiKakWgTy8qAmgyLBuqUb9f1WxEWxvMNRPFXBwNvxmMmD8RQY1FHzmFvDqEq2D4YeUVDxpwjAvEwYeCjfv4Pd",
  "key12": "39pGcKaYWZvjgiy7CtSHguytAf5vChe8hsgxYrABF44RanSr9tg232tsUvVDiQjjcu2rAksetV9ZaLGm1Zqoruwq",
  "key13": "2h6vqiynnDzbVCDPjkPobYRrp4QmCadC5PRdFbYHLgxYbEjeWKMNdR6tPkJHHnV1qgZfasmZFqsWBVM57xWTuJ3U",
  "key14": "2EfMhXBefLDWAnSj82cfBwL7djsZ41dx5ERza7jEXhCpdrKGQVw6VjKiY2RzEXbdmzGfZKhcLYB3mQTrJMTHeDza",
  "key15": "4KhJNiE82wHhd8Z8simAw964HddMkcpfFpA7hHRudA2F8rVt8v6raDkmpDB6u4HZeavYdASfCP2hWD1x6M2BNQK9",
  "key16": "43pPGJd4fmEjEhT7RB6xFMXXSgKRDQx5T39zj6GcWaSrvhXk5ehQmWs2nhnptP1sRERj7uhTBKa4PzmhaAqkLkEW",
  "key17": "3QD7U6YPzXucXE3ThFNtbr8FnzfCzS9V6e9R6RKWnG2JSvGHapVg5fFyr453od5nZFPLQUunJ32N42gPhZ1k6nzs",
  "key18": "YkEcNSssvKkKbRhpxdfA9kHAsa9tDwmw6ibBquCitfQ2ENnXm7vK7LoTdVYhiq5MESvJJJpFDkEM57R4AmvytnC",
  "key19": "5isrJZdxbnPDGjvA6aGWvJKzvqP761UWKoHZTTHXDd5gPpikKuxRvXist3aPvhz2BXFsA75KGziiNj7U6fRkjcMn",
  "key20": "2dT1DqgPv1rfojxqUiD3MQWXsWZHJFskSSkEK78exPqas429NPCA4XTJhfTNFQzHrduyKEMojyQrdWw1YdMr4UCc",
  "key21": "4rPe59AoqMpPMBxZur5LJXwFKunmt6gjTXKtLJqF64G6kYWVdi4v36Rn5TE8LLjEKyPjuNSnoRMVM8B31xg7TSC1",
  "key22": "126jXysbsRmgpW7fW3wNCckQYVcxG4E7ZS5kHUQfufRmHfSeNeF7rmHB447j7zd5cUXtHxoRBSyoxBaW4e9M6sbG",
  "key23": "5qW61Ci9XhvVv7RpCAY7afDyd3ASj4WzCUZTsQxtcPby4EWYcpTtZ5bWi4VQkTcXRpAnKHyCyB7GgAFFaFvm4pu6",
  "key24": "2PmNkehyyo7hU2MUgbN87AsUTEmW1goznF17m7U1SQr7EGDb1krxKskQbAES1pxRbzajAZRNcFRbcAFhzUJGF3Ei",
  "key25": "57TcrUeFMitiqMQ7vewa5gLjASEBCVm8eiHULVM46spcwmobCpkbERyeayANuJmAPmxhBEQ2r2f16DoKSpFvy4ym",
  "key26": "Qnbi8WXpceuVT9PNXNGQgDcUEDMgHp35aSnEbmwGB8k51EL6336kV8GVMgMu81J6XW7idAofaWUZVMpGawcVP7g",
  "key27": "3VVxa3trqAtaiGQ9i94EVbhw6r1tR8hw66pLv8DLPcEBQnraCxKgLBq1Csp1rqtQHbnssRNqUq89CZ9QaKfz4ru3",
  "key28": "tSchcQbjuAAKcY4cTk6FkeB4DPU1qVtFpTryQPjGJuptAJ1JXAC3wSinvtKbmYpvk1ZVi5DB1RaHLFSdSpXLBHF",
  "key29": "5onmQbX8HWrxynsY3wRhwrjEpDfiXr4AJYELnuN93xCKBxLZxeEZjfiUAm1FdPBL9ecn635TYu4Kgkcqk9cTAx35",
  "key30": "3TQ2KYkxcmXuYFTQiDgzZYLMSADhF1AyxmcZpqmuvnRz9JreTZZGBuTB1cMezeMx8ZrThJePiEnUDxzoY2u89N1i",
  "key31": "2cpbCR8kTpdLc9ejwJYpQpfWUV1S3wcfYYW9tXFRi5n7zL6CrXndX2T9GeqwauSgQQ2DtriNKaXm2AgdqLQzXr5f",
  "key32": "4DzMiP3e9wuxTPzP4syzbQ51vKuFDc4CVSbWXed9zvTma7amVdjF6rEAbVJthGXjHcrJ8m3FZiDyfJqqavsWynXh",
  "key33": "5fYggDvtJs7ejdbac3DirLvmxk2G58APj6KaZKCrMCLvWy26SZ5YkvCFt4HrzhkLrxpeUR9af3izzEqoN17UJ8eh",
  "key34": "3vwGVm1muNGxPYG4ST9iUHuc75UfdA685rrHQVww7NMxpjoUDZeiCnpGDA6VfpPvPLZaPFss84GvycbDia53tLLK",
  "key35": "5gQCPwk2pRmnGoFdRmXnoWLuDv31JdJayB2qT3v1w3sFWf5tucVpLFoS4Fk4pnqSqNF8ruL1fqrPQFLV2ojD5h9E",
  "key36": "3BZVg1jnEqbadu2XY6hFHN1hpQ8csZkn82uePymBejPfKysKiJY2cesf24qfHsdBoEmf9yrvvNkdHq6rnzk3WMGW"
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
