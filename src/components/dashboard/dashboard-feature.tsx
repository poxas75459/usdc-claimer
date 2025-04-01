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
    "32n9g8XJGmcHM1PmjdnxvsxercQmNgH1WuRpcaECesP6en6Z18nBwjfe2ypBEHv3LvxNriTX3Gi5yHu24NqeHdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UuXMaNqB9AvAqT1xqA8ejZf5rN95pRDNuRDPpdisXKdUWnrKcMfg63N1gx5PF7vrwuYqqZCMyytZRjxKC5XYPn3",
  "key1": "66cJAyuyvNzpXDaNFKsVUrWx3XrmzodqrKn9q3QqdEieyAC7VbZukC3CUv1u5PADwvoPGyu5CAoa8SxHz6zqGsCv",
  "key2": "2crqNjEFmnGR219B1zSx3hKFsoakbfkDTdxpsbn13J4TjR4VBpXg6zhQCsAPhjx9fpRnAryHCB3rX1fbwwH3jsqU",
  "key3": "3bbTf8M5RWCX7vqPhioqKeMNEsMmnFkVkxu8EDcRgept6JNYcUgzkqJYxtyt8vuFoPhmqfpGPJBWLykmkLaKF6XM",
  "key4": "5MZUF9SeSTSj1rp9AuN1MoDp9241F61W85YTUX9XKx4qxH34oTRafXqsKkd6jNsHNr7nTyMVhCXRwqfwXZTUwdUS",
  "key5": "4AWFEUxmsNJn9vuLr6dqeDpRtCxL59ZexctCi1vkfGmuEb6tGkboo9WGPzQJJhcNPKoDA7qPs4szrigvXNdpo3kr",
  "key6": "423V8GgJu26XDQEeWfmuqcVUMCSFDAwKrWMoyfwYhLD3cATEJhMLeKJPJMD5MRLw8MvU5a2hEaGrtfthmqrjLBDV",
  "key7": "4QBJ3Lnn6ryb1FW5afcGADhQLcQmRvRZWGHLsKYeu1A7upNB4bUE6NLGr1y3rptbnyiJfkMeNfVGQpDin5DAVpvg",
  "key8": "62YCQvd8UsoYvs4hneV5ura3mGtsDkLHG8oiFF2q2qjyxm1Aoup3k6osg4zQT9FXcUUYjrMgjx7jYbzhiMgLPVR2",
  "key9": "2Q2xw2wkc895G258j3rLVJojtSF8EgqGGtWUYYP9uzmDwbubJrMSaL21ngsqu3RXkrPxeWXb2mZCj7XSXE2sWd7L",
  "key10": "2ufhecJaNaSnzo6jRQkX8zW3bzR6FMiFugHG884YfvDkTtbUvnep44e3aGBALN6aN13dhW5ZRoE2z6mmFHZnagbU",
  "key11": "63hrPGMyKcX8YJj4EjdWGMWtVSRCarUGSvXqaFXMMktvHMcxiJhXYt41SzXVPwb5b2G22Cqjj32pQDZXMzhotBBz",
  "key12": "4L71v2iLT7FUK3QxS3ALWER1ryGK69UPfHa2byhowaLHiQgM9Yz3WQ84WN9GNVfqDWSrVBHCVYt8ESK4BA5cW2ou",
  "key13": "5Hw3QAFtDpm6oCKcRo2KJHEY1uJNGxgb7yM1TTY3JwNtiZGcEX4nRy4t1JDAHvQTebpmBegU8QVrV78mkXeR5DV5",
  "key14": "2BxM8c5naqLAgdAEu8MwX245VQjQ3BWtq6UY9WwByUGLYtTbJRKP2qNksY1XbkQz8fWab4wqJG3airom6aEj31FA",
  "key15": "46ryYw7XUbtmanivrkgn8SHtva9Cri2MppFKqsMsKpohwVVmHfbdqycqXQr5CMDtMPC1uQpbYsjoFNi8TjSQsGpD",
  "key16": "45qFCf6oTPbZ1XYJ4LzFHq6yELQFXyoLvnN7UTAP9AEb1fJfT2yvrTEUELQwE6dZMbDXiRLHMRkA4YkvJhR5q9hZ",
  "key17": "UEpxBhARxQCn39ZBbomczkU9idYSxmPNQxycaEK5XpuRBWefBhQM64sQGB8KyCPmLJ72GKpMXxj7wZHCULhjPG7",
  "key18": "BScZdjpaqPGvEApgnx4nySHmfHUfUFtPJ1frzqu9xyuhSzJmUeNanY2zRrfkJuSqmWxRMbPksSecFxCTzXiw7wS",
  "key19": "4HrcA8vhykpSq465693mx5bCWkcFTHGwjYo3Bjw4RzhzH3KX9zhHBpQCv4bvKVCraoiBHXj1i8UEsUSFQBwvia3f",
  "key20": "2hSzSNs5isembhCQsB2TgPW4V4bPXtbzPic2ezWNj53fVVTouLWhxPLFT9KqQtVksWmcsYtVjKHmykYYXSWPcU6j",
  "key21": "5oBgaL1Pnt8rtDM8zhj6KJsUQy5En9Hj3LcAVF7sbukRiPEG9f3Kh9LQw4or6YzapZo3NHLAdLDuLcJLMnajp3Yh",
  "key22": "3CBgvMi8CFAAsu3PMfPiNqL4GvANHSPv78iDVPGB3ErNuENrPm1ayhNZmTRporF2DAb7tEscyuVXJkq4GR3CbqaS",
  "key23": "3geiLHHigkaVtcA4woYDk4ix4iATTbBLthZBwTdc5pks7YvWA8Mm1YYoyAa6LCtHrfgnqJC577DUmAJ8eVpu4M1n",
  "key24": "5XJvCitb38fVa9TTVS4CPptyjaTXvpDTRLJVupgDRRvzsM67vhRM5RUwmwgsxKFZ1TvBWYmdMxL5jPGzigg3PKs4",
  "key25": "gxrfefupRtbVv51sLgeg1E6fY8a6tm7XeHxPEkyoZCF3vfd1fiBhqmZvDWKaGfgP1odCj3UEoAZQjC82NGGqB4g",
  "key26": "4YP4QY7wW8dMB65SMqP1QjVu7f5oY2Q8zn3ce2yJ8yyxscX5RMc6fF9pYtPbyrWjH7NaHgx1x7JX1zoPYxi5zERd",
  "key27": "23C7hbm3qdJLHyyufZxbzpn8c6J8wZj1siF1cGCM8gUwFB2Lf7sDPHQbhLUCriqzqQyhtaAAw8SNaNUgt9PQfC6S",
  "key28": "5B95PDECL96XE6ssksji1WrAJvkR5VJyPLfcMRSEPjki6J72Ek3CQXnMBBuR7aLJUGru4wVHNnsEQ1gW8aYF2wws",
  "key29": "3ubphM62okoyiWCKECwmEPSgqTGLhYEPHszJNHpdZgALHPaUBpezGu74ByL8ZaaAFutp9WVTEjJGAaFyRdiqE4d8",
  "key30": "haU1em3VbFS18az8USbrLG9CT3r8VG26jKZeTqrxd1UoEcjDEQk6zjw9oGxiPWX5M7jEoGsFKU4ZP534nptPEhH",
  "key31": "3t22w8yvMDVSpggd86on3ZveBxpkkXoyDMTXfoXGZbSzuVdsm9FbXHSvYoNQPa1vXrYgGu267DT4fmtyXN492FLz",
  "key32": "43xPu5dtxsFeNAgauJQLJcgYw4YgqCqBzESo5j9ubd9X2VFvbY45bS2A3rfaZHhDSve6akiWV4e29n2898bnAM9v",
  "key33": "1i6HFBDhfcTFXye8d3mXfSNUkkepTAoeBvWs1fLKB4a1CMxttowrDmPLfvhSVoVPnDS18v3LPuoMq3R9PQvcPPF",
  "key34": "47XQtaSuU1vFVQ6MHGfbMkHirQ13PkkC3EaU5Q91GSu3bLyB7i5hGd4eFZA3S2ia2nHNFqvimwvKCvwbyzRs2WJf",
  "key35": "2rxZKhV7hAyHxjQzYeeZVWbDugUsWQbGbdfVdEja5XSYy9NSfwcDACkwQAxnjHEbxhhzFsurDMxX7WNz8Kkkrxon",
  "key36": "39zudoAY5rduwNMAmpbq86Br9UtoqjqV5jhwzeNAR6PBQ4gRcVmHvvrq9ZHe5hSKFyYVQKCmtFgL3HZ5vf9jAe3Y",
  "key37": "3rbfMZxLhiEBQbc41pEbN6rL3qC8E99eJf6THk87LcpBCNPcd3KtnrmW2t4zB6a1THxf2SwHZ9AAYkBATKC9nNUQ",
  "key38": "aN33A9x5xfX5qopWALYQtm4ryjUBnvqt8tXYAJ2LU6vLMCVXYEd34oF6eanTsbbTHu8V1743US4wWATo1Lgx1Zz",
  "key39": "2zerkGPFfJgrx5fQieaz3LGsXtVMYYKc9rdmuh5vKrhHeA4D7R8BA695UcVqTX3kVEtdXaPCS8Vb1sS8VPp3bbXN",
  "key40": "4atYq2ZgHc3KNg2AWnCn9CQBJBGLjhAGvpxW4fxBTAqEQqQEsgTnKK4Bxt2ynJE8iB4tjGeDpZmxn5FfJYCFS4LQ",
  "key41": "4rdRnrpjgNswpJXF3ngeT7Kx4KYAboWQPVht1Z8AkBuTGXWG6mLc8z18ZY3ecNVtvxSewNANyWD8QNb31LLKD1js"
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
