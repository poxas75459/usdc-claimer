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
    "3f5GZ7EkRZKX3JhbtzdMR75nk5tev1sr2TF5Q4BTyEtNVa5MUAWMNrVSqV4KzYtGX4sHpaHmqUmh8aiM151AxnHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j8aGrPGAuozG4wZRzmiEPHEJddhpaUuvDGu7YP3xJHqh8Jby4gmzwSstsdjHVeAEaMJedeJ4bMByMCE7nmJXLnP",
  "key1": "3zu3piaY4JBTJFyT8csTyR8qc9AYtfJYCx4w9SAbGRq2wkbcU2oGaX426YRrd8TUbTYZwKNjtBp2QSJw2WTqCDz8",
  "key2": "h5pkvrYUPmMbd56FnRLFUyaUdSMz1Qjs1e39tSqJLRc4GrGbtfpBSkbDRJfoJVUPqQpvPqT9Ca1FwHR939rcUUC",
  "key3": "3ynLFraUvUPirzPDq9o7o1MYB4widnhEewysfd7S1ZrEb9dwE47cPy5w8VY1zBg2kyrhq81Tdj8y43UgMQwuDp9J",
  "key4": "2zCdB1suVdEUSVT8i2ZFYvsG5S3x1Qs4SSQ6jjxw4JiS84XGdNSVYDRZAAFwKa3GxURhPa8g1ff7YDsusaAm1ufB",
  "key5": "558f3ZrXVQEMA56L53feuULGx5RA78oQogwcRA9Lp2Ys1mPHw12b92F7hBYNK969x4WzekNnw6KTzEsXX2HgDF6h",
  "key6": "4eGA8Hq4yNn9z1YnbmZnj24vGhtmyHFprXkDdJdhqbcUGrj9m6xkdkygaDwy9YHRWKFJeP7GVhk97kprk7UF8qyz",
  "key7": "28XsH1CZLSUQwZFXWw3Q9fxx7VRXuSQcVTNwV72YkYmRB7jvvkyzFLxq7Je9ZCY9xyeMu71J89a91qQQd7HbSUbN",
  "key8": "2QwJ1VQyeQtT5GEND758YZPamuVTP3swCNmMzz1bDq53YXhDCagVtTP1rbkQhM1fbK5LdxhoDimJ4uhY9833yKfR",
  "key9": "4K2TGf2amtbNHwTbpfWWJwrq3UxmntbdzG8czrbHixmaALTaP3zQX1My2k7izXtUNYQEocU7AjvcGhjya3y642VG",
  "key10": "rMX66peQWygmEwEQgp9nJiv9p3zMHUVYKGKWKDoqJQH6PknfR61oTfLd1KfTj1GcmoaAvEghvbD9g5iJrE3Q1hs",
  "key11": "Sqis21Ho1F1G5i5o2v7PzBF7CJTCeuB9bHUheWJvuL7fkymxFmBGKoir5SErRYUNUHAHQUkJ1DpfNPX9cj78wtH",
  "key12": "PE44qKZMNPJKpHDdybgyQWTEz7u91fTctxNPkbjS2eQLDvJXH7tjBzh581bnqNvYyUQFxkrnE5viv75KMUuja77",
  "key13": "4TxTcoRUMKVumGhkwzoLz6GFX69VqFXvaB5eQYVTzeEZvejggxKwaquWjuZQu8mgST15HaM7cdx5fBM3PA7UvjB9",
  "key14": "5nNd4ukMK1EX26LVBExtTSauzb5FMCGU19GYztkVr2RYAp8MwC7CmLpQF1pnnkq2XTRKtusqjZxDj7rfT8bFWSkq",
  "key15": "GABepXtosQqwKAKR8ZFsDK7WBmrCzGCmHrVgQz9UfwC3Rm7vAH9kPsikeQAs5VfARuv38W8PigApguKug6Dj13V",
  "key16": "293x2JGdEoaLuGLfZhJTzk53Aum66kXT4qtWYpqDRKiU1Mc6McY8BHNAbRTFkaNAXp4uaJs9mdpBcmRHnZvjRJij",
  "key17": "26LG4nGbpRHmyLTe8vi2jqLAHbS8wgZoUfJMCLKg9CRuLH6U72quKXBRz4ce6zeDuEytjYwY6weSDU7iEmcGAk4e",
  "key18": "3FUiPLBvv8qdB2X9Pksj8fUAxD2h6A3Dzd7UVjsGFQ7nH5SJLbgeAfEcRfX1VEipp76gtE6Ar6sHy7nkk1rByf6z",
  "key19": "2d47bNFqmz8qYK8pKQhHsrbo1SjZ2o522HtTTW1qqrceWsVr5oehJHVSk919ZZPGDGD1esEqWsqYp5vzgpGMxP5y",
  "key20": "67U82A5zUMt6t6nzSoSLpCYnx2KL9J52m6DqGaCjfUz8GMXxZ2HSwF6j5LU7nanNFUeAvUULqSd9jWejuZEB2kXK",
  "key21": "2ShNxWC7ynCwFy5DAk98dcucq3SrVWTGPxHnGnyKqBuLNe2MujuYE1V9A2cu7qybk3RPzugxWG8zy9qizrWVYP9s",
  "key22": "52qr68dARe2hexyLt66W6ZoZR76M3XZFHzCt9UE965s7P2LyQ4PPgy8jjBqmW7kTs5EmdbhazHP5ASGTxABQD2wD",
  "key23": "3Hw7X8meseo49VKcxwCPfbVAbYcMi8Ke6KC8L3dsvyJuMv2TnfbuSUnTvjbqXYrCT3NVSvP1XCLfTP85mtMqXfKR",
  "key24": "3s771Ns4KvtC7ECWRpZrqvbK8CB4o9PRZYrqdv4wtsp4fFnsDzuPuLUtZNDr8Kd6eckgKoADHRzXTUejVp31tZnE",
  "key25": "2n5vDUcvFGd9PRQ9rPe7Q96cTS5861JupFheVCxQcG4bivvnxQUyc2xyRBTVWTUtjYuzS98oQA6WkoHHHWnVupEc",
  "key26": "5HoxMXvSvrun6h5hVauB3uZ1XSwy6U8vLnQVYZSpmtvgETASoTrCqYDDPBZmgXPUHCkUjfoJUFiLY4pTJixm3iUS",
  "key27": "58Cx53pihKeUrmtx8zQTdQGe7YVTHiKrsRYfTsAPFqSzUt8wnzauBacv3hfR6B8og312PFZ5BfD6CoevyJttAEaQ",
  "key28": "3vRFKi8Doa4jshgi53MPvqGY51DDCbkC4dft1rEKeKPSS2HAsuaKi5fjFSBgS3WkD1DFxqLYhjnkWBUpCXpoKbDg",
  "key29": "4EDYrx8JfUGiLCKodgaX62cFG8g4L876fgBd7CBo42CjLvqzCRQsUZ4LP8rFndpTHyk6RfMLi5SRaWx2d3YTgECB",
  "key30": "5t9dFDXX69dHChxZVnqQoJSapRpWWKuoULFnFNFYDsEHU9rR5hWzHSZFvAAhVnKdfrNRWdKWuGZz2nbbCr9RW8R5",
  "key31": "4Nv7rfuSnDy6Hkhp3FWmWhpunkVgT4JvxQgKK8i22v2Z55G5Q3j6SY1P1pSmEd5UsFnmmq9K7T7uN5F4vYqPy3j2"
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
