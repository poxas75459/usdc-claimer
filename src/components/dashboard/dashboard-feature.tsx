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
    "448piueo1e7YgXb5aScgEbiYGAzNNLbZdPGzaWY34u3XU1aTFHLTpJS8WpvUqFyRDreQWBnd7ZZj6dk2SkWmWEvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpyTgwLNuhcJFEm8p4rTmEssrLr134gobq4JQHGqzRouRGs2B5ZUdMervSvsrghz4QLcv4SXxR88ecRYvSaXMf3",
  "key1": "PUc7ZBor243UHELVByMHiJLjqdEjkKhWwYiRsMwqUYeLzsoKseakr5CXJhChoJMjNUL3hNMkdKso284kbFLpwR4",
  "key2": "TRsFKajxV5ZvX2o1pKiGpzoJbnUCK9sRrvdq5DLeq9ADFzTE2yFzUWit8ESSJuUMt9SAiqbyBh9gG8ySJ6zh2dK",
  "key3": "PY3EXZn1Pd5VwP189XmuZyGApkaYhsq7ZHnkE431yee57SqH997Li2jLKb1kHgCyrgEfbNwEhP3hSURuuwoRkBh",
  "key4": "XfoPBgpvu7h2Bv8dRrSALzxFJ1Xt4oh33rerp4LdKo1NUyg4U9rgTEitXHEzZpyc6Nm8pRxsTFGtPP5kQbfKhLD",
  "key5": "5UUzicy5ye1Y7CVYs4G5ZwsYLWBTbhRCVSp6wiDKxBx2bA8w5JZ8dQwTfUhPt58P5uFP76fZAbye6fhbojm9Zxwb",
  "key6": "3dmc25E3YV8E2kT7BtXw4Q3CtCTgSiFi8QSaRas8qVuPRVkQomWPrP3miQP2tUSj1kQ5QFmNFPT5vmFJT4c8CgV1",
  "key7": "56gTuJM8BAA81ASGLLGtwGxsnxyNDALdYnEoL44qF3MDm7j96SrPZ9JCt7Fnzfi7mkY8J1spsLyzst9arQuhDbtq",
  "key8": "3uhp8HN4MrPHRT4LPZheyKCsYmNTTMth76z9HvnGeWSfmEtGHzk2f5mTDo4vAcvHPfPSNV52TvnEsN2UWtRjtPMM",
  "key9": "57XBas74EASWgcwTvCKkvWba8tZrMMdC2iLeoa3YEvseUdDjQKYX8u74B8FYBVQp17aAZqbqcKwSBQyFA3YQrKSd",
  "key10": "5WrNgCPT4U5MPN2U9YsBYZURS5jQCNxFPX44RBikPtgJ8zxTFZckqafvW2zAVpANCa1bBugn2xTHgpzQL8WgViaX",
  "key11": "5iAVQSXD73WLuwNQaNwQaDEm65HqyqhvZpHGvseJHsoDLuNKCLaAkrAYz8T7BEdmeWQQeR2RisnFkPRqte5FXXKg",
  "key12": "rAcvM2b5fD3iJt9W2zm49LggYf3EGJRJ6cJg96Mi8KJdcX4GQmKk2KSkaaeNhR5TMaeixu1cW1JcjEc4PxLSJxe",
  "key13": "yjfVxkBBMzx3LLQ443jNmANW9Tze6zzfm4amY8FUHHgmCCWzdv1MCb7b7fptX5GjWfD19Knw9xWSc5tzMBZ5CY4",
  "key14": "rLx5eB85FFaSNhhcjKKroecEaUABA2NPPKQ3bDtnpw5QQqQuTofEeeCxCFjxnZuexA5cTAEkVfMzSc7ZzeUiTuG",
  "key15": "2ZfGSGXwy6XBmWxos3D4RE7cGtiRDxHDZSiQPEhTZLHWYRVAC5g6yo8M97GTWmFkPVn3CwRkAQqMe1v9S64MxSes",
  "key16": "WTZ7z3rCxsmoHwY9G43bt8JTMfEdteu7Lvnhtyht4AKGQiQBYnSwHwrmB1RPhrjKAuF3S7CtsbfDhUpq9o2JYhC",
  "key17": "4YfdCZVaVtbMVz4PF2qC2NtXwiGuz1RFvopQASVXAgW4GkD3xZdUxKqzKLsC4BJwsrEev4gvi4nvsAf7mhwnz1Ck",
  "key18": "4RPMDp8DoBymGpo98htetdSutPym97sTmKPHjjUGgTAe26CcFLstuB37ghhxBTe1QEmgWp9Mz58tUjdLTAKmwGzu",
  "key19": "5TFS7f3vHgjPDS9VXpy2PVA5cPGshk8GSrBkTTaDRefvNBwUhqk2yKoVmsH1GnCzgD38rrGeNQQEMhGQkkLBYApE",
  "key20": "esjn8iojFFEctaJMmWMEmL4ft61EZexGHC3hmv2VxLomzv7cL3bpXbjWHtpAi2W7qq52FuZCqAxhN9TnoFnD86u",
  "key21": "2agaoRxkXUEofxewtN1xS11Nr5U2wEfd96NeRTmjpdWjok3NtLqyzNKkhdf8FgSQUoYUi4nMXgMW3CQZDrBhrJ2Y",
  "key22": "3Mj7dy19Z7c3TpEcXbrBqqV81VhqpsYSVFrYYWPmyMpxZ3fmwRSFvt3zefVUC27juWLhuEHDrbp7XukvZitVGxLN",
  "key23": "XdczwZGCvtX38smEZUo55roJ7J1Ho4XVP8EbjzugZMnbCYEFXhMMGRkfF5QAHPjtJCxneBYiQUnT5Zq9wDPatNV",
  "key24": "2JPp39tZRAkhM8LwaJ7XN5r5YQxhwwJkjbWiKQcgPUa6S2xReWSPh5LQPJY7oe7bSjem4ZsDUYy3ZASVp3VvMHpc",
  "key25": "2S7FVa2BCqj4w3YEch2y3oPAbxjJZJRN73pEqauUoKYF5V7yidzu7vbr1t2bMUTW2QpKNstPCDpCGeec5Sw2Qiuj",
  "key26": "43RXdsDAo8Ppckn1jdNQC8RchBTTAFUrh15CDX8weXSgSFyCrQXjG3k5N7mCzrUWjG3Xg6Rksak5UdBadxDSqYfB",
  "key27": "4vHgz43hKo1cskMNbBUTeB2zgVszadTeVnpiPVi1p8w3pVcEzCu4t1CWc5dWV3Sa28hp78pQkJ8Y4CwFQCTvmxre",
  "key28": "5s92Gg3E67eH9gJr2ymeAGRYCxCbPNMp7y61dVMbiaBWY3bc25b5pzYnzydk6y9ecHy7Ln2m4LMisSw6pHv2xWJh",
  "key29": "grKkL4Wt414dfj1Kv2haDHLKoZCsETrScogk5oW9cZFKCPWsKNkapsM2YLNUWxeWkMACRV5ZggmH5vyGk7bTCtn",
  "key30": "2NM5aNdpr9MXs3fCD95qsfjhuESM1Z5bYEhbfqNcgufT4msVuUwYbxd3jTZNoj1t4a3rCeCez9j9Sk6rNr7ojndY",
  "key31": "4T38vXRzzgQhrHZzUKY1vywbTWJspBgeiNZmofQ8JJpuYQBrFCVi2RNVwbq2315KbeUHQbE1cWPdS8nDG45FpW3c",
  "key32": "89gbm6eFY7uDA1aYTUe7VAjxbz28vnD2dzf8bKNpRtG7HKhAwhySYM9wv9jLpvjNqUcSdcASSzxQy4HgJCsSqht",
  "key33": "2vDezmZitMHTJi1Msd7Ehcrya9RwxyaYmyMJPM51k6asEgSDprLh3s1AhaGXt8kmL7fs4WmzzCmkrY2wyRMZ7dNw",
  "key34": "3riMJeRwZn8KEUwf5esrEwdiWQSWfgy6AgQsPvWuhEZ9uay3LyYYibaf1KfjET5LwgVa8Q4xdLRK6V2Skys1o9Xk",
  "key35": "YwYbdQ8CeJtjNXsysMuzSStKmyvBRmhb2MpRQaqGqfM2Jek2gsDmU3DgDe8qnbnA62Qon1mFzuqQMpsqAdtRb1C",
  "key36": "3sAxayze8pXkrujdPwYiTKXoE5W9vE6mB3e9Pw91zC317v9GGr8KU1jjxfs1SwX98JkTvp4Fid4iNS1NoFsP5k26",
  "key37": "2s1FgC18rgDQu89watFe2HUDhrM3d8KqZZM2sNPMko5rUACkV3tRAgJdGPb9N6tfh8yZ5ALi88wU46p37BKhaWbW"
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
