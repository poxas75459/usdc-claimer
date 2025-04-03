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
    "2c1kd6LtnrnHWvkDfofPoPXxhLmHnTT1eXvwFXZH8mHsuxREguhDS3umaT2En6xgYTFywb54FEjd4MUFvL8ZHGNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAvKyr15RgDPjf6nSA16fmwrdUAnLaf81VC1UdFnWtJmNk4VBPULjZvHhzzH8AMjfRv6Kf5HEP7NjRv6UA8CPxp",
  "key1": "4yfyVuKMvwKEJMfA6n2hdNwZFbBjiJgQEV5jKrFB8sg3pdWWWcQwm4wwptmL62un66AkDsEbtK8MYxUmGb73PiPz",
  "key2": "zhmA6TycVgVcwk4x9QFyhW8jevhw97QQyUak4N6PjMcVSzHdTLAg8bz7d4UKA68PHg1H1qZH1JuH95etjfPVpd9",
  "key3": "5jTY1HEXQQ6veM6cackPNH9PuegaqQ7EjJByv18F5kA9QGEEoSmrG3oUebDxzq1st1PPsPfnRzgEUFZcPE72YEpM",
  "key4": "62rkSqzoQ5SJxyxV98XbRgM748sJbBRpi2mmmu4g4fUqc67KDYJLpwswLRZhCcze43zS47s2qA15XGNo8tMKHi82",
  "key5": "4o2ieXgj3kPKWWdxWMo7bZtthAhR8fBGwtLrrLb1rsAaNWHjzhqt4uhsqMWNypRsU4qGzvCJYZuZAhSvgrPCaqsL",
  "key6": "3iniH7BuGAo3mkqmsdhay5KW7QYcyJt3UWeU9VQMz6FL2JLwPWRyqvmx4MSzyWSjNHqmwKUVtkDyMVoahmh7kayj",
  "key7": "2aZox4cfgFf1GLJPZ4GNbhwd8XfRDLEpZMXfqULP1hJpXC4NLG2KUZt6N8NKBAWzfDiLGjtK2j2HtKsoBqEXtcPF",
  "key8": "34qyRbXPQyXoo2A5DjmbgFgRFnQRcB9JmzjidVoqdxocGSCf9u1K3s43roAbpbvcdM7Xq5rsdNRCHyxLyiKuDmqz",
  "key9": "3bk2L5C2XUTr3jf7RExUsGSWbLSckfRRThcUraBja4a4xPntsgvt6gJDvc8xtyhECE3LHgFY9fJBVjzv84ZWDaLe",
  "key10": "558GiH1WepzA63nSuMjBa6Dni8sFu4MoM7DhzTERX7Nm7WSpheJTLYymMYcGMVyeNQFVYPTCLPcLygcE4ioeJW7C",
  "key11": "Qxom9H5opLT78KdEbAu4kY5Ldh2mMF3f2223Q29Xj78NMNBTKvP6scEzjp36tdFc8ZSrT5D6rhRXcSjiGVXp6H1",
  "key12": "Ft1ks2nVm49DLyGRJvuSbogzjCuLb47toBoRKwnt3N4baYjxcpNtfJHsUEpWkxikXAVeGMCm4eGKhHZwW8nb9w7",
  "key13": "5VgMX4QvvUp4NGDLDMqE6g7CYNQUxhnCinDfCq88bgE7SKwwb9zbAoePcM43aFRkyq1B3HnQKgH5nvGp3hnRimWe",
  "key14": "R6pJNFK1GcMBkVnc267itEd5GhqNYcskxSrjx5mWwz1CGPJFttci3kiBJ5TznLKeb6Np97qssd2thHuX445ho4g",
  "key15": "3cuK9p6rP15YXPJiAFR6YvNE9DkYtxS3xn3ZozoHzscAR7B9ndZvqRK7UXSCVNvUZ26sM3dvvniWN7QEFLFVLWjt",
  "key16": "4DQxqgf1E3mGRA8Ndc9cRrW7EYggXeD37bMjtyzuPpWaNup6jfdBMw91kVk16vpwwmH46dZe24p2aLJNWvJhcqiR",
  "key17": "2yi1L22wFtZQSjsQoBC9pWJ6CDF7CtbuCbAgGHr12xvpvLRuk1tYwFEHN8G9TRxRsD71pDvQmkXe8uWvwZmwyj1H",
  "key18": "3NTHLZoeKMkoARafsqmsAb3xuchShcptPa6WZiiSa1dtDEbReYomwweEQqj2mDL9wcQfYF6K64xNaW2qLQJp1UTR",
  "key19": "rVF76wpXDGLZVcz4TA3ZnSHY9rU7EhW2anaYWkKiSksRkGHKxsHkfs66fwcmabC8YmNQptsitbL2H8VycanHqC9",
  "key20": "3jGAekcQoFZd3qGmGcq9pxZWuDPUrCM57yfkgn4RUGXBhuYNxKALiPkFwWmxhHub2TvMN73BdAGTVBdNVcAu1mVU",
  "key21": "wLAriFZgcoe3vPovLEYWJC86RhYpYTdya5VDXLEwMhcqnzE8VkSpodAPh5rZ4YsUviYorfTmWmMZ9bU4u7FfPa3",
  "key22": "4wA14hzW21s1GCoDyC8d8rJU4akDkQpyzSNhCBX22SkSG8R5ucvby8Desq1RHJxx7PdfF5nDKvZ8sbee94DwsnvB",
  "key23": "2y9CnnYKZH8kHEH2X5KC1MoFv3ydMEbqqPHsRDLGSbeFHGirZuiCjRaTCNQfJBBqnVqxoJ9UgKVSFkrjfLnALCqB",
  "key24": "mUwvLnEaUjGuGFd55Mmb1d2tNFeZz2ZjJgWmie6oDWjwQc4CfQZ2kf26BpcijGRpz9mkc6zHqiuiGBLd4VMu8tb",
  "key25": "27sBNojHpcPDruZBsZPP6fdjFDxCGZzyqtygf5fSpSazz6VAgHAj2k4KxvGZZEokgaqYQ2vcmDncfS27gZCzdi9S",
  "key26": "VLnhWE4fbqXzfyfedHDjmkpJEmu8ucyZnje2NNeZP69xPEn8VeoCSPxca7sMv7KyF4oYGq1AjKqeE3odRvt7MWx",
  "key27": "HVN48GKg6vv8xPwXgvJNjLtoE4LSiHZ2iYxvJqHyTk8TPrPo22iX8qLQ7WJYMWztYbyrTdUtXRG8yvS6KFo9qs2",
  "key28": "4Mu6SFw594P41QkpCGBXYSMXpvv2QVzkMakxZn3zfRYUkd8RK7skagLqu7nJQwcvWcN88bL6ELp8EBFBTZCQBgwa",
  "key29": "5qCgzqZcNA3MsV1mQptDkNbs9Y9uXEraxZH1DdRz7EpqTnuQxZkTBW7WXmuXBpnyCz3FBZCK9wWCgCcn1FKhio17",
  "key30": "4EEq7cjirF6sqqaXuV3qsnVkSDZc8js8Sxkx4foYkfCEAuKEtkpoUnRe1YzATGi9j1skAXwShMk1XRBFiFsbnG4W",
  "key31": "3ZqfVWW2fev6chReyxk72gHVHmdZi6yD8ZDL8m9HUc1r8qYaRGFuyY6oMPZEq5pSkExKbeA3q9emTLo4qrHzgo3G",
  "key32": "67VCLLikr4sd7mS7fHexWUpGuJEEfET2pjAknj6m3ZdvsanuihvaGycg5aFxhsJeYY2nEGuT4kzdW4DCuQqyw7Yn",
  "key33": "3sDM3TkycJRAxJB92ecS26Tzccyd6g2waimQ4qmTYUKRrxYR8Tckj29vdSah9aDJpMfT7MsKk2VAUwktiiYaKmUr",
  "key34": "2zdM65jwGfeSF7AaoUjqwVVADZo6B8xJWYb6hoqfLHYDvLzPE2A6vtxB4uqpeDCWmrDz9H91V2tZnDZojduTa6V9",
  "key35": "2RJmwoXXRn1r4pgRDXU9Rd1gRPCSyjMt76W16ZA4Ks7K2XTmYUAyj6npSJPripKLyJNWc7mo2YWNuKFNozHdt1X7",
  "key36": "5RvKPSVbZ7GgoMMMnztcn83vB5k8P4iexphxobehkwSqMpaMGAJuHiK1Svysf9h3UPqfFNbsm9bEkiTe7NZrRmz2",
  "key37": "2v1f2TedK6DmpUJmJheh8uckrnGy4kvFSaESQuZVkFzrofPSEHqJmYGKHsAF1RNRxeiz3zYhdDDwEJK3zzE8z8wo",
  "key38": "5r2jDSCmCDeUxMLKjbefwDpx4xNaKM3LRbNz86Fzc6jD6L9pXdEfuYbvsdmqpLThgg4Wr3Z9uzgA2kocPCrcwLYw",
  "key39": "zqM2sSeiT1CEstpExPbMRHh1EK5nqddcQzXvew5XjfQuq1ooRBJxVMCpqRpvFus7krHUC7wuxaRPJ1tXVkjqQrd",
  "key40": "67aKxE8ci17GBH3PHXHHAxtdtZtmQmPFKkXMCuzyJScq4jxHpRLUzaBtitnYiphGNHh4FyfpqHNuk2au2HmKBabb",
  "key41": "2TTAMLSSXdPXVTy8Wdi5VqRNp7551LP8x2z2ZfJt7XKKyueTajbtbqQ32nVK9sbXXWEzinoTDvLSRvBYEGaaNuP1",
  "key42": "5yrqDZdVQ2FfWLNK6w3gyCeuLDbzjCB7vdSEbVs8DhCtPBpaZ2fWCioz4rax9fWewADh4avExHURovCYxKjQchSg",
  "key43": "37gUR1e2xKTLj4gsMEv3RRkrBo8EjcQBwAadkMBH8ieMKMUCDW4ZQSeh4cekm38gspQNzt3U8uBNVvQeskProgpU"
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
