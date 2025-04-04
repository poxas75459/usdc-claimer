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
    "3Rf5JD1BX88HQW4FwU6n3U4TSiUsA2c92g88WCznxGMnCe1G3NrjG2vzcNUo4R8ktovPnNM2mPnMimD1KPKydLQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PLML8zMMiizqwPPQ6rpDkMZYhSDAKzf9GB1oGGieh3MLsUCsYZCwTesWQLToZnN5zVNdw3Ud5ob8N2n73Smix8X",
  "key1": "5U95cLRBk54cukTij9hFB4oe4B4Rm1wiSaeLev4ARAqNwDby4hKNXkNhokEZvgm8SiAwyGX1noevUQrxKQSbLCTy",
  "key2": "4U5a7AzDYC3jeEn3xntdrJ54DrKjANZXYRRoPkZY2hsLmXxp5yvhbd6CpcGVELDa9SQgQ2ATRzryM6opiWS27CZZ",
  "key3": "4sTy1SxyN5m9toqnGqkNtuusQmxT16WR2GvUGdQCxQXYKtaUvvZ5K6Yz45kLmViFdej3KYExMKNCnnCsNNKqpQC7",
  "key4": "4zEsNrLEWDT7qrSDWF1ApLsfTfZptWDZhokv3tMxDb1K1yCQ3zo8dGddRoZY1MLVCbKXkeEouJBMv534C6xENWmi",
  "key5": "54hyc8L6fKDcZC1NzDnaXa8dLg6AjpF3fcrfPtJbwFMDdK6e9nVem3GY4RaFL9j6pvBy6grEthrLtgUDFpvLog9U",
  "key6": "5EVyJ4pw8TsTzBdbMXLUu2tMznn3futXxwkoc5creHLP7iUUGxxFZUPuWYdjYWZFBbzxXtN6SmvMwsc6aCV5EKHh",
  "key7": "4rTi625aq1BrQG7sCPoq3dQfzbFHpDZp4ZWnqWS4pxyYZVWrfr8dsV35kaX8oxYD3EqJS22gM5yrbSwKxAhkqdde",
  "key8": "61mx4FJebLgeiNa84tV6gRvPYusQm8YL43LGPrpsqD1KdH3zXVFLKTr44iv2im1DMAuYTg5VE1zJ8VN846TM4hNs",
  "key9": "jY3GCR5BP79ewh7p4uZSevck2iJ47nd4WN3zZmQeaDmJqb8wmEPgd3vUnbWQouT1SxjwqR84d8AsWVJHcfgbVa7",
  "key10": "2oopFec5mCq9o8mpAkGD3WZhQcKpneUKVfVnEbnmagYiPW4QkG3PhjYFq72jgNcSZ3NRXhH3e88kvjq75uAxNQXe",
  "key11": "5VMAsh84WVmxgjWaGYndm34F1ph8FneyTz7TtnSR8BrP24aRGgvAKmg5cxXg4mkNXCir42EnZvXLR1hiqj1pWeHt",
  "key12": "2rPeJSHb6KNef7prTxUdLyjP4fMfYu7ZrJgFw9NKB6xKFurGzThPqURpArtGkfB7a1zb2mXsWKPb3JcNf8K4YH7c",
  "key13": "5iUpXWXszPLM5ntw41qNMwCZK4DyKJdR6kpKwtaRhrg7vQGrVFAjtHU4J6TrcHHYWE9FCVbmmkpYF6PyuGvVsjKX",
  "key14": "3TZZrSmCpocEJwetN56tQ83TmXxA4UsPFFqhkh4SD2WX6KCDvDZzqHAwJpRBP9qH4fEhdb158EwRtmHQjHoUhS81",
  "key15": "2FNQ5hXfsNF7uQoPTV1QXuw8i98B53LfnHgeHWnDkT2pc8ATVA39eUMtRCC3V65ZNcUQZ5J1TnhrL76n6nK4L6J7",
  "key16": "4LGfsnYi8E25MnkLFBhbP4cgNAZbnThEneu8DMfczkvMXQDJXjRY1PtQ1tvrQZT6nXHX1w9DsahLQ7yJT3MoLRu4",
  "key17": "2QiUxi4dAe8Msry4K5JFtYKeHAsaD78xcwDxrh5wksbSTpoWKYEWCUy2v9RTKaKGEvdhkYxYg1V8Aw1fQa1YNmtf",
  "key18": "3rushpDTXhdd92z4WQG5RVHdnhKwQDBi2k4oPSjY7v1o166w35KoDthuz3KwgpeYfdaKhvn3RWVbdpv8xBQTo7pf",
  "key19": "5CxqUBNxZFpPcVhxNm5Yhb42RbJWHyvYtwUNXuwJmZQFLCbXmUGd89XLTWgQBphHUqrt6KEZWVwVLN4DUzgPwNDr",
  "key20": "LQWvNqoxhGuR3R5rYGdQQeQLayaHbrSbUn4ayBuCPtpnYM4T6xw8ovb4792S47FkMCda3kHBtwXGjN6vpNBhFFt",
  "key21": "Ti1PdhevVCT1zWXC4CowTKJECaQuGVDD8cfQLCbmoDi5HRbHb4t6B6cPQZ7ps6tmuEsomNeijXoZeu7WmbZJZUL",
  "key22": "5BRdZ8absfqG1yK5HHgSjYZHAuyyzajqn8u6EAmf1ufVJ9YN2rfBDAqDw6U8vVx7ffugJqrjxgHKLqiJk3pKqtne",
  "key23": "UVsLxWzsmjdrhCa9MxUtZ6p5r2ia6Q5UQn7y2Ac6w7nVZXgLKGf8cdNPNwp3547uLnfd8uvmNct6W1o9EKY8QED",
  "key24": "3jbCCNRwuUq63Ntz9CEDNBMJtsjQdAkH4zucsKVfrTpwAdveQDira7DJERQnEfLzSgHtMPjbXyLGPEvpCa1piwoM",
  "key25": "5By1gBaUuwyDgD4ZEQQepcDRffATue3RixoyQrDYdGz3nT8tWr43eGYaXVRfY1Q3FkGskw2Nj9w6UTURAMm3AGKf",
  "key26": "2bVk5scxru2m3YKaAo8DiJG5hM2mkF77DxMBjDV8tEZJwrSxKTNx13MGHKWwv4YDMYPQXVG97vyF6KW3EydWdZjb",
  "key27": "4MW989f1fTa41PUv2bscGA2KYAWeHvU7XtcL4Lm9A1xz2oK2KBSzH1NnTZJL6pkiY3Ccsz1F8JPfkr2kNuaZJUeq",
  "key28": "4FZFMnJnryFyiES4n58ZNWpvo2MXNtfc9y1gW1GYBiU1LbQ29SgEBFLk8zDoSjGxyYUcHaJ9iGZfqDc2CAaPKS8q",
  "key29": "b5bBPQNA5dqU5NG97aHjigybid9FRHFdDnsotZrakivT83M1KQbMcPAFjkeo82P7yKJhSr4dhFEd6wXbrp25cNX",
  "key30": "tg6KCaFEoQv4xkz8dVr6c43hyCLqxZgu129CGiVEN5XLnxcHEr67nb2tkc4oNGR8Q746mCrHLPUonawusuJ9CHv",
  "key31": "mL79Yrp9YYy9pa5L5VUSGewJZ6JQgmgzid2zxsX26LY8JuC9LMjy3gVuWwEmcEDN5CHS2jd9JqCSR4H2gZzgC1v"
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
