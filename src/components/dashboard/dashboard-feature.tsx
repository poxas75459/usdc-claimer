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
    "5kcCa5DQFQWpW5no6NfMCbSoEeCAWJkwjokzPqgyNCiwAg3v6CPXsfWZVrdA1Y8u2AvvSRh4Q3nk6dYB7wuJQPQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmB6XvEHTPL6UkWCAScbCSnJR6n2xiA6VLosMrQdP1W1d9moTEQUAZAMQot79L8Q23ZZ7WWYY6LuFtifw32RXiU",
  "key1": "5evqsby6fJDcFV5xYBnaisveQB1GMUHrmPdPwcCQKUAEhw9mjAhrQGwztUniEZft3gQrjagoD3W16y3NqnSJ6P8W",
  "key2": "2pysTBR1gjBefRhYhsC959P1n5Z9X7HrsT8mNShKz5hKspHN9vMWXSW3NfFFzar9DUCFYPDm7vXg59LtwggHRZG1",
  "key3": "4ZkMnLhP6PY6NSi74V3QwC21pChvqGgpAXMgBTUFdJsnmDnv31DH8un6juAFGMU5qFPeBFtxvmPy6v2iC2m54tsg",
  "key4": "4qs4bFgriedVrANfzugKtKZg84ARJE2T5ozLnpvMVAWbPhFD3C2saFK3mdTUjcAevmg9VsiPqnwWuBv9r8iyeccn",
  "key5": "28QFeuucT3E7uH1WNRYv82dZZEanWQnQhyb6dSkzc32icsfH9EmhoKgExW7iXiAYMpiBtMKi25UftL1XAM3nZ1g4",
  "key6": "4qafikxyD9jZ6NYoWkMKcCud4rLVrY4t7yGVVwvxwm6Kc1F8wimrvrHzhfZXgSfWiYus9twVxvqNuRtZsxjrWaFo",
  "key7": "27sa4EiahjZFrDqsjUJrtwCWSTUVLrv8UL2mREFxPi4XjPGRUmMk69Yo5JYdbfuvRqmjvQSpQDNREyZ9txqo57t1",
  "key8": "5Ssbk73KS9YPyUJXe9QaBVDsgfwxpvdjxtxFPuhmuvnHgH5Nx9LtsG559Ai3KWEeusq1ENVVpYu4YSHhXimgqQit",
  "key9": "4P77BoUu2288oehBLdJu6pBMJ7EdPNqstMyqMrXtX86eUFu5Ln9oaAvLtGS7ub6gPXUyvwqSXFRZw1rcxeyozuMW",
  "key10": "3nTUcg1doaJ8q5BfddPZa47wTQXL3TEmVTp5e5RERme4FLFJDKzAcg6y7jt3ymqsP8qja3iVMWtH4TUc79PfJA3r",
  "key11": "5UUxxtREzRS8hd5cyAhVgGWiwbCmLnPHUNT51g7Z32X2xaVnCxWfwXm52dreDv6RUSZ6g31oLTPQNFQdriWyzKRZ",
  "key12": "4BBx26Ab7mtJtU3xuKJMH3saj5Haf4wk49Kp8amb1QtPK5scLfmXAgcTMuunsu4j9FiegwiHFWL3oqVUBvseYg7Q",
  "key13": "4MrZBi5GdzxqmVVz7AfAR95GVTyewKm8EBQVDu5EgLFqG6xzqbdAxdFjKdR2Lj8ojM3HSV8cNdaGDfovFg3m42C5",
  "key14": "4U8eNHnfsVvLgYzqeYNZZAHpMtH3V1csET1zD7gYYwGyFwKeVF8knefqAFEXmDnpzNi9a8ANwjULdFfd4iyiVBY7",
  "key15": "4W1UGVb75iXTSYKy53YY35mqZXDgyoCfQyYBNfwVu9gjs7cUroFMkKzTVsZbHUach7WsPsrDY1KaiqZhYDsw6kmg",
  "key16": "4ErFaarG7xqd98tMuRuGmTDbo1KgfeP6kuWY4Hp5AE2d3kLxeX97aJKsW2Vdzptr8bx8CNqAaLpQy4w5SU914hZG",
  "key17": "62DwENrQaYcwSKE9fSTaGrWhXmEjtswGgihWmJySDN3m38x5xcr9du3NnyW7goNUmwc1az6EnDfYyqc39MKqKJkB",
  "key18": "jVJBydbTvd9L2K1Nzr4FbXzEWL3sDbt3zJsfSJ19MGoDMEr18m54jaRquLzy8BqxruJWrFLR1ZLshsVXU6Wkoyy",
  "key19": "23xFS12QXPjEizwhUdeE2LR4X1jqs9zfjsAdkyVy9mKZW4euENWqeeYUvbAzYucUk6Q4mtL2jPzFcqPLXN3Rbd6X",
  "key20": "4tfURycH3S8UCQGw4mEHxWxQWimVXhw1fsASpArciFGGGrs7f8Mg81gGitGitkrZD1pjx9bPiLRYeHFpdQaz3qvg",
  "key21": "SF5LzvHdzgLXU53v2BzCMh1vkiM9hUs139ucRVnDAoypaeHZLTtkYmvumm9PLaDj3oanuNRdVzCp9C2P3GY876B",
  "key22": "59PJt2Qe42xyZNozskoLRmhMdCtNC4aiS5JvrNGPaw1CTbCpoHcgbdLNUrgfUXXmj52HETrYNHxe7d4p4mKtz3W2",
  "key23": "z3JL6bSvsc41zHLjF4Ckey1XdcSiueASVMVcDN4Wa1chL9b9jdz9c9kczjupz34JXA58zdjwrgKLYDcibFhUeJB",
  "key24": "3UMBmviUEVXQHta2ns1B1SrqruB5RCn4hpkd4Rpz3i7UEJsAN8J9FKjBvELDdwQHQFnJZxDfG62v4ogDRFUX8SSX",
  "key25": "3jf7QX42bWr9CSLMowC5zP6fTcTCgbYro2mQkAXRLYc3GRXRFfFuJuPcyj8XQrW4qEhT9sGKKqNaAoMbnb1hxzzx",
  "key26": "5qMpgPY8pZZhDx66wnZY4WikCKD6jxWuv8kGGtoVQLRD2mDkZJSTUV89NUfuYVERhijD5cx4iv4TUxinnAVaCEHP",
  "key27": "3iX5QU2ff56MLpn4SkDxr3u2mrWdaoxvNUJ3hUWHaVG1c4qZobgBNmHbLa79f28X2RykEU4J3yZzeHs9GC7oer34",
  "key28": "4p1xMpzc4mRHND9jygmjKFsVhREBpVrgMTBczTz6FMmrNgtcYuBfM5GwNyVYVmbYAuq5sgY31HJ78rxx3k8zR3X2"
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
