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
    "5w8kokxfKc7jmutmXe4mgi89uQHRBsm2LU98Pjhn6tm2aJexJR2ui8DFqHUXsEprseGYQED5AB1wDzg7mCDyrY3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6xFssBp2kqJ2dHQABqjYZekHVaCWQPvXK5q946fuaD1FxNLzqXa2E8ePYCugUeA7qkqWzCvE9u3KQNmWwpcVVAK",
  "key1": "4fDRDJMCKSP9stjNtP2agNHbGPEjAeqhrHiQGbcgeb1hDV5zxZsDZWr7k22feEQbYf2qizEyfEbr36TyHLqTFLGJ",
  "key2": "WC4tvdNL6mRy44PDhYf54abvacrpLwEDWwPpoN3sExBcTeAPeBiEoZPWXaj7vGydTevE8Cck3ZRAYKPbawmBUr9",
  "key3": "5jdhdEuBjpd4wTJvmt2D4kbe6j4wNoxi72R5oNNkf1WNdxQruigAYHTc2i5G5VQvRXjsWBiKymrMJQAfdQFzeUiJ",
  "key4": "2btfUqCN7WCwU7wXv4pwF7JM3QkdBXm71BPrupnY8mnPMWnNy9L88ont8pVUc3zgpHNcZYYg5xLT3etUWC7wT6Nh",
  "key5": "3vvUVEtYKpDbt4Riubdwe8UjKcq7R36QjiYYKTVu6SDFj3y8xkjcfXqzqZjsvEB4VVq7V47wzba9WJAu3eXKT6ki",
  "key6": "9cDC633Ga9bSxirWzk1GG4LS8StU4u1f8kfymC23RUv7rm7R7eTDuNn2PJRT4JQpuFeYKP5FuswyTZt4iHZyCTZ",
  "key7": "QRWK9CFgbbC51h4FhNxJjbmdHAxwdc8h843Ff8Z9MKs4GLfjYgVXaSH6dfTNBBSYdzQyt57HcfWmZrMjXE26dT3",
  "key8": "4pn6VuxgSsVQrjP2a3MWhzGqQe9tz9mSHqdQenuKwaRTsbt6Uj7iWEaKm3tUymuEPYw9AGY5VoHri4nhPuH2LorM",
  "key9": "5sL2bbFffmU4g77PkoA5DdvXhffPCHYRAGX3oC8PLid54SUDEgjPeLDuZQzGZuzeGKTxHWh8b3Am2w12EUuFtQ6h",
  "key10": "28s32cq1sQzCzaNfQcuf59zXPNxKxEA7vMzcNmzAHxDjttnX5w9kCp9HKoGMZ4cjj95S5L779SBFiT93bzaXhuY5",
  "key11": "2DDgcswTkneRT6MkgRCmFL9Uq98ZxM25gUPcC9sr4QiTj5Z5K87T61vhuURSAvget58gPtCh9RP4YW9oUA66EU4m",
  "key12": "61pH5UuRLG1oN7yyiTd2j3zAkCBhuSHPfFSgxLtY9Z7RL1RSgGqV7EkeMErfWCCtDzAiWwEfDknuZf1sLTw412TN",
  "key13": "2pFs9yGytMo7nx982zihqRRpq91HdKZr2CchpsxEDiZ8Dr8KYXDocRD4td3zZXZX7zTRoVhLZ8DQjd6HJ8dbDScU",
  "key14": "oV9CKtumY7JZYKXhzj8bTTbVYPfna2bh4aKJvY1bEHv2q8v3aGR9R8kgKuKW4yHG926yThQo6o7VQLvjs5K6z6W",
  "key15": "2N21eqZp3vwSY1PjJiwN2WjHcVE7w91k9WgyvKZftvwynxayWh4RVPQWBZZW6QDBG4dyP6GTto8eA82khzxKM1JV",
  "key16": "2YrQQeN7zDhK4hSZMc8teHPgszUVQVYqtXtjtjF6mXYSAqTX7AGSw2zPmMC7DjcaH6gwYsqyunGeK93FDWx1jxZz",
  "key17": "4fqs2iLTLDQ1YqdPw5qGjA5xF6ro7yCmEbScHUDnFU9t6JRcAUvPtkiPnkFTSEsctN2ysUrwL8aBZLcp7rzfLwC8",
  "key18": "2PExsYAL8Shm24VvHcnDi3V7dB9zod6ug8SweYQwBAVAtDMZ18f3Mdc4arpeQftUsUNFGbB8CJaNGJQTJsF7xQ4U",
  "key19": "5eLh1ALVJu1FZ3h6PS3a7j4Bg2eDmp5fHQ8utagjokG2aKSMb2muE5UjKfckxJGYvJgGd7hqMQ41DuvGZZ3n3jkC",
  "key20": "YqP9EPP2Bq6E1NBEiaYPWX1F7ChDGWFd7FdbfujcbkGBt8cozjkXWBKZQH6fYfxwt8qizaBtdibDaNz5j1vdJqA",
  "key21": "4wF572ZFR8q5Q9ozfHWPvrYj8KpBMuAtvwkTLV9W31GmiiwQQxfxJER3JY8bFyFBHQ9EUzdrFVDPXjfu3Yph2SDt",
  "key22": "3neSisi9aQKP5xLjrTRLBbyNibrCDw1e8RAn6BxYgiWx6ikg3DueATJykYpfPkcaUt45H1AqFxrYixMUKtS9TFMV",
  "key23": "3MMLL5vWeBhRJ47fWEP34xwHAn6FKLjgKcL7jQwhUqqMTXgVGQtqxpjZe4gqN8vqbW3QywLq1mU6Lws55k9cCsWk",
  "key24": "3hvUFMr47uvpehc5fVzWjU6MMqTAUq792H7w2UBBTKiiWbbqDZWdXAfrkVJ4sfpZQHdmmETb8AdhLAYbLv5mhWmR",
  "key25": "2BJYYsDoQmKigK7zXc4fqZPR4Y17fjWLmothsFPoeJX7myMh9scjLdTKMjsxrNCE7q7NWm9kaETjvSqDCdpMM7LY",
  "key26": "64CQidJNKKV2M924sFdS4x2KiPNtuEg9uaa8Fw2LRrzBLFXGa8TvtpmRVARkzTYTxz37F3fDzLBdd3mpxsxbsddd",
  "key27": "39ZkTdEbdx62GsmGHdAKKBA7UtCARn2tHHFTamui4qkkVrB2GvfXDJbxsSXk9hBNK7GUpWGgy6EDmg2o887B9gpS",
  "key28": "2wHrgUBG2kcTFvk7CKTnt7mtEqnw2eDD6SyZY3CttwtGrEmYotqQh1QqD63wkpksysJ6f6jdvo5xEScD39eM5J59",
  "key29": "4egh7vdde9EWCitPuPsyHxpbNz2cWwR4yWZ4apsNanP4jD3gUrfzPd6DwzRKhnaHfJqguEeff9CjDhb4x6dPgLnB",
  "key30": "3o82qksvnvnaxLeTJV6sx6zUmaaJxXW8nm6smwjhLCYATDJqkxJTSHnED9zhoj9vmJJJ9hugPzaNrn6YAEfcRn7z",
  "key31": "547x4Byx1BkifPUpihaHkrz65gNtz47k7eNToheteBZDcZDziMGLzVgVfLJFE1cB3ofEZmxA4MoUzKxU1T3PNhBB",
  "key32": "2Bfvad8D3FEUVk2Cd5ktwWqabiMk5biqA2egBQ7DEJYxUZYMVMq5WiaUZgshcKbzbvAkKbeH1dP8qFbCSsXSW1Rx",
  "key33": "3H3UbNkp1ascwRgBkkPiX4hUMmZ24DFat6EqJWhCiXnHBGQ9Q4QqgQa3q84oyGMhU1Tdnf2HaM6aR7NoMCCkZw44",
  "key34": "WGgxuJyH3gpPn6PxJBAEs7bXib4QS6jytYkgAHUHGyigg1fWs7egDz8Ym7g9mZAckJ3cRzATHaodsrMabg6fbcS",
  "key35": "2iB7KXKCzjCfGBnEUUgWYRjUJahyheg5AAQSBTHxKxraoj2gpy2rDBiqxKUCNADe7fFVCgvb1ysWL9A1kpEZXAEy",
  "key36": "4AYkEt9s2sVxRB5hj2dc1cxaoDiz9V93fN4Ma46qNQcTn2EgjsLzRkTaPmUg5nQG9mpxzzg6gzCziJe3Q71yCNpH",
  "key37": "64zFtjcxMXqHKsK7GHEeDr7DJMFtiUTLfNGHdC5woC2sTpEeiXC1k5xXiXBZufBZCVDUJfdH524PqY9Hemn9VqXe",
  "key38": "aVSGVhjGoWu91SptNss3pxdf1ZLXs715ncNFY33VSAgoLnjpRwgaysuY19z6KMCQi5CMgtQ2rUvTubeBtbYscwV",
  "key39": "5D4Dy7KhyJ8MQ1KsPWguYmPsGu3razueFoJ7YFAcw13vQ5rrPaJu1x479Mr7fekF3SiWsd97ErSh2ZPcPkDRK5ES",
  "key40": "VQQYFH7bgA4FqULAcfw7GsTethZysgEd6wsith6fBZtYB6m5EYNE25kUvHZS1JKPqYtP9dWsi4sMTMXNATxXdxY",
  "key41": "4MNRoSfyCDVWZasSYV2E2LWmKoJWB8koTmdryNNjn5FC4qfQ751qpfB1zM5cPRWitCrYUuHEBZaVqBLBy48VRE5i",
  "key42": "k4aNnWYfFwZuJhgoyWjYvF5SDeGDpdS2Pfj5taxZcQJoxfkSvhS5pxNfD2pKdswfiJ1YNPMWCg3sVy1Dwnae5VM",
  "key43": "372StHwem78vyAx6SQrrjEdwUFtBc8nWaQ6RgKAbVD9Hm7aTP4Fmm9pDZAyRimQMVvcnoPac1J1PQZK9Fwkz7vgN",
  "key44": "5z6yUuFeDULtBLi7SKeBbf2pkaqaiQJLbP3S7ewrtTBP7TKw3FuaTsaDtPNeAHLTYR3EVADjUVBh9AcwfHGnLtCv",
  "key45": "3UhwkwaWTRzQYuUAM7GRnwfPUWhpXP5upv3LZLb8r8wBrHGSHMpC12BNxrWACB8atEFT4o4WfPa7seNp4HUBXc3K",
  "key46": "3M2PUoNXeSonSsx7Nk4KWjhVRSmqPpQWKuewVWdgZH5NUQTGsjg6X5k6yyazCvJJHGoK5hRX6rK2TgsUQVQhvdHU"
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
