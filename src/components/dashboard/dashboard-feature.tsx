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
    "dXGeJdShy8AD7djq7D8x9iVhSGe4G1zqTQt93hgoBiek4nbiZYzuTZHsvRXEoXacYdCzDLx5XwGipTrrkfUKhUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cADgGezqGuxUHYkqRfJpPYJXYNeUA8BERGv9JdVxDfmt9e4DsVKeV3HouKeAdCoWUP3H4dCrnRQw8Adf8krgZ1S",
  "key1": "2z4cZ5yNoKSeTkX3pd6sqP7DXJoGytJp3RnHGtpjzux4DMjhihVPHuXxrNXzzSupy67kAeenVYrtqnxPLwx2oLKK",
  "key2": "3cwoJESLoT4sCbqYsJAdgmvoLnGPY43cR5sMZMtHs68WLkAuNJBzhkaAFDLYs1wGyzytirgqYmKZhBRUADVrFtuf",
  "key3": "2JMeHaAp2sfSGXzdCioqf3mktnbAdCH7ozEMXTEGcNShv87j7amSwu7TGNfcChcXqzokFueTPkFddB4UDB81jBvb",
  "key4": "58ri9qYpfKwbRwksMmDtLTBdZZHXsFLihwrSJ5CyUNUzxmZRaqggMsUjpDJvDdwVAKnSf7P8o5yZne6aM3qjWagG",
  "key5": "4tRvnUo2rLFEPWVFXa4DSYauy8nRomC2VoAQRj8CoPQZueWRWZErR1pAr38rvozL4kwAz2jHk5y4XdpYt9F5e5yk",
  "key6": "4QqbwSkspXcpp2iDEQ6NTHkZc33gJW3AC9eUMoqUauuVopiBaeAykCepCQ4T2bb4486kcu6frNtEdV1CPypng4h6",
  "key7": "QbJNuDZdYAMzxoNUuATEJ9RbErAhzuhBZNNsfRSUCx54JL1FqqZ2MF5Dd4rfuBMBDhwzrqPx7yS7PrEcy8QXvrN",
  "key8": "5Rn7r2N1zFCRR8hfArTCHVCCwYbqY8eBf1qbA2Q6UcvJaxpTVkVpuuQsfyPDQaiCmpGxB6azbSabZPjdvoNiMXNC",
  "key9": "4fg4hKkTvUZ6tHoPSutac2uYVx7cPqhVzEaGY6xD5fditkFC4rGSQErtwBizH6UthTK97DE8YzoaN2Jw87sKvbsY",
  "key10": "5qG2RX8L39Nmbnu2pGfJk3uSLgcd1sPCwnE3jxkirV99Szgmo1ad664bQybpYYe8KuCBBAWaBpAR7R8WQ2jXo2ZG",
  "key11": "TztRqinGorM7Hqgmx438pYt3nEnh61edXSiepvdrnAzpUeX6THehNoPnC1tKSpPDMJhRWM6pLHGofz5zGsJPbAq",
  "key12": "5XLQPhg2S4Ao4FDbCJeRo3e2au84kVVpWtdcJUEsxrXgLPovy8E93f1gw9dYTjQNFMgupxqF6Sv68ixdJr2EtBTw",
  "key13": "29AcTT2E5nxAfdfwVW8EpSaJKLviwJPdFxuFMFrjXTsHSSwbwrpRGMwbMA41ZDwjkEivYDxHkdNwvDqKXYNvtoAq",
  "key14": "3jkJoBF3QLhccC8ZgC4J2PnFPQcTWe56oBmW8gQtStooSVZLr5FeykppoUmZuxgmbP1N1UrEjKdspwkxwuGYVGYU",
  "key15": "66WhhceXwfihtgwM2kT7P4zytdCdLnyibriPKSeUc38a73WytNc9MTnTAZa9p6Jw4YrK8jcjigkxHXRRfLsCDfLg",
  "key16": "4TjMGsdAcEhovuhgQwujKi4rHHMGJgo6wqo6KbMNXzUKs9mQauz1P6EpvxsBE3pwg1V8obE929ZaNCdkUZj8CE4Y",
  "key17": "3oP37FTFDRvoq8d9Hmx7Jybto8JUbBvVjrrRmBg4NaNTo3bJ9fvcP8NUPZkKG9kSTtAqaT4r3BdJaHeSySVMYMmX",
  "key18": "5xf48DuZEKpjGofeUE1P4ocy63eqJprFqcQMJ8Uutu9gB82t4dQbHfCpDNpmFu6BZ5xtYCL1Xv8HYKiVpUBDzjRj",
  "key19": "2xFSVpLXjDHXEYuz4A94G27TMR8QCY96zUfzSMs5UhpdU6qFoyYBMZEyiteXR3GYaWomFfZAWdKZVRpjxeRCQqR5",
  "key20": "2nJE7QRtSdAf16G1rhYQCxRRWsmnmajJadHzsHHwJp4Epe82ysZ17SJr59RH6KTHToknZSBFL26aF3ZsmJFtLiqk",
  "key21": "2ZMqz93RrKidYCmBUm831qz13JuQmvgFSUDFrF8UohFMtAb2unEEoLenHnGpPUF3gd9Dj8Ahdrq4cqWtTRe6ebTG",
  "key22": "7vm76e53NLCHMYJhy4DhmmPov3dz5EXbajU7DGJp9Gz5scj3V5QMVQbbAorJ4eQDGNxDQGKwUD8cwrhxKXebLTh",
  "key23": "4SGUfpRg8DivWodbQgSZCG2qcRY43noEhZydD5cMYoBYrBs8FLktQaYqHVmDdQhvVCovB5QRUxjZNvecWvkdQZXN",
  "key24": "UeJvQkyZeCxDr6q7mLcXoJzkbY8qEi1ydCYsmCX1Z4RyfGfnzbjbVGKV6getVEb32HxAqYjbVJU2Rfp6rT189En",
  "key25": "5HJh3KiVrRpvqiRH5xkT4Yxk461RJAE6Jgf2nCFMdZTJMhkS91dSYPbzBdkfhndJmZSdNFPZVMtc7BQ9J2a5AAky",
  "key26": "52mnci38eUR49dYGYjRB4iQSLwKdTpvTCKsi9T4VP5buDyNZr9tKuQtVhBjJ6873pcpjwchZKaypZa3eSQfd2cNm",
  "key27": "3C1EkgUTQ8FUzFdBbV27YuPsNczijxpdunfQg8hWmmupDT9zpVfVCXENDAix2ZEzptCE6iCVRN67yBocrDZqiLKu",
  "key28": "qdxvPDM8vGy5v8MCrw7eDnBYr6WejGfZcy39Qg25erRZRdrSJiSMwtmYquByVd6jQvMJ79EQNgETEXu5huM2xPp",
  "key29": "5cCex8Ei43BZ2oCF4CwTkWoGfk3K4e5W6PVVcWfSntuvxqQPSPVuLQuvEJQ4bmvKehxcASZoZysKt6qwUbaBSLmH",
  "key30": "4sijsfyejHt5LkGVupLShVgaW42KxUQxr2spMZaxyFJT2JLyZQjstssPhJiGi9Gb3DceBiiGA2qQaSRugCL5UXCd"
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
