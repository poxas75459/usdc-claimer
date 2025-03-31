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
    "4Jhe2MEnGQNVwJfWcfVkbzurgApzY1HuhZGi4DwuJ5RENupTtVUKqextWC2oorE6y4GsTZUfK5pMBPCiQmoGLVKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwrdpEEcgsi8ymYeqBxSbhmw5kLszmfZccWRPa2U7rNPh4bsLBt5ftEo61MX9iqd5reMyD8tsucJFgU9PHsX6e2",
  "key1": "qB7oncqQefpJkVnASLkeq1TNY35zZMjzLNq2ne7XcnwDQXU9FeJNxoNQxcf42qeujFLLyCUuxmkxtDx3zH7kFVZ",
  "key2": "hFbNHcvvwyCDduRxBTUUBnprkFoVZ3zxL6dookc4nekJcRbDFsyTF2GeHzMz7Cj7YPCy6fy8UZwS6xzRSLCCEeF",
  "key3": "6JSACL5vfXARSN9sUjRAkPQCmFMxsSVGmG2zW735Qame5WK3qAdbKmvwDrc4qpziwm4QsDJcKwD3rFWFa2gADJJ",
  "key4": "3ZMA5NAGGnXN5PeXXazUeniEzNpnAkQGeYpVTFD73BJ3Lt1NHXLq7YVtTTp5xPowFdRD4WGr1bbx7jmbzWvVrxYn",
  "key5": "5dYjmc85HKdVYUVXKAug7GH1TGqzzmPepgwAEWf63h6Wo1qa9jbg9EhoSZhrrnESJUtx1WkEqSAh7PNQZJzm4Lek",
  "key6": "5F5Vj9zyWR8UwofhQWzhKvKWffx6h8WwnE5AzY1H92hqWJKoYXiFpT8n8NwHYTA8Qnq5BdRaJvzLyKrxnQpwqJMe",
  "key7": "8ZKg4FZoqNCeLCLM77SxFCAQE8WWywZzTgEKD5YoJLqQ6zbxv298No3LqWbdVgihmJq3A53pFLVcsAGoT4JU7c3",
  "key8": "3aFbMbn7o6nPjUHZEZ9gEFVSCt3hpNQvmiMg34S4412qTADc94Hu1Li2peSApVCU6oHY96GfZ9cmGPr7XRbWUBDV",
  "key9": "EeSHhHtuCEEPUh41zv4NSTCVq99t8fkpitszz46feodPLbXVX78ukAnUcmWTwq7M833dZuVddM1zVSscvwbXFSc",
  "key10": "VvPQZivB5zxCA52g9RsUGjduBjHBncDxNjpQLjGr5mqapCytWH2b2MGiiNJAf3J6cyuA9zC3GofoskAcXnrzkP6",
  "key11": "3aXBbxQGqhJWMXggMXVuZZBmM4HwySW9Tf6w7eAaSfPdnGZP3HS8m8FrGoamq98yb6akVQtbA5N3YJM6BafhCn1D",
  "key12": "2FfpZvwjgNpb7CoEuXgDe5eUKZFak9AreXTu8nFhPy4f6kbVooNiE1zgG7ESeBz6X6SAuAQpumbJza1BDqKJUD1m",
  "key13": "71wJUCcLNKR6hywgwMT2h368caSskNYfiWacMHgjDqAYeFkmsJYYjgv4Wq5gY4ADWV4b23WCdcw9riUT5RmGgze",
  "key14": "Xv1XRwHya8GhZPcfzz8oFybz3HydeMwPYHke5iayPqDW5yVnZZZFj3exABTUkct5gfTtg9C76jmxRNgkk2SyXwj",
  "key15": "2bB4JH1HH2izafRTbJ22xDmDJN1SKp8ZgsTtqxypeWS8tRpAHYEJPMGAG9pASiYjM84LUAA4nvLyJXaRe9cSNiGQ",
  "key16": "2R5Jj7gWp1Th4mbsVYDuxgk1ACZj5D2keP4bPgKW6udqr2zP3UyxLVbDWA3bTVstsm5b23YrQdifp96tv6EjJy2V",
  "key17": "5cakjKBKEzdvoSGaSeTHP9bVkBs4xogvfZedM2j9cCP1uS78sUTb1iTHkS4ZeiDGxG3koYUG4uQWK7q6uCb69HLZ",
  "key18": "2wCVEnskb8mMTFayeagkSB9XZMK2CW6JkcTfS9joWQEYvhs6kmiv7PJRfjft6F44nesz2XNAN1dQFFUgRtoaBUGd",
  "key19": "3bM6aqgKdWgw8tpUYg1yVjGKNJhWhUk2oRPrJmhdaFUmj5qZGXs6FyMaSfH5cfXaVrdWPY3QKfUM3C8BZCtg8Vor",
  "key20": "3t7yw9ZKrvCX2retDfeSzfQEg2CenLJ3ND3e15CuQsXCTvnbm5NpXBAgkmfUMQfnwHfYLXuCM7PQFQsPaxdzTiuK",
  "key21": "45PLDwtHDWZLyqMeYdyEsHAwKQrHV7zcvo2hvyvW4ayk4Ans8Twsqo1f7qazrzJbfvezC8CdCtuj6Apvye5sZk1L",
  "key22": "34qsmNj5LFStSqaPe8VY1G5jHH7eenjpuKVVTwbcYmRgVwGiwUr78C8JbcAGX8GmHZ38yh1kXD7kGmEfcBGkNBU6",
  "key23": "2HLNLxbCFKCdeZNotuLMxzWQm9PwM5H5yEKXn4bkahetZnQXYdMbEn9VFDUATBZwEoe9pVvE7ttFJ9SUJtV8ybfP",
  "key24": "5Tk5k6K3RmHSRcwNiUHmSAoWPiz5V1w6yiVhz41GQZiqt5vBziMusXqXBCSM1kFF9qsV2CTcCWfTC3YBPRmZ1eGJ",
  "key25": "43QT4BT2hwwAwYmHst5RZ7ADXu7k5XqZ6mdVUTL8Lu9q91aec7SxtjzjpgkerEEuPFRsjfSHZRzFSkf62kEALHxB",
  "key26": "5Xppf9wkuUvR8677AVR33MzvJ3UjarbXmU68oJJuwmsQw877yUrA7BqCiMQDZfBcL2AhwfctN3wefzU78FWo73Kk",
  "key27": "YEsZutTcCwgTfVX7bZ7FMsgW2Gbjw9g6t26HMNcKTcU6HCvFqtzn7W5kNwxcTXztTebgd5xCEq8xRiHN851EKaF",
  "key28": "29C45UntyeSLDi6TFhXrjWd3rXZKKKg15KGTAGBPaMC15qZBfKTDw729XxZnxT2GkwSSssTeRgjpcvFDj1rFwRnW",
  "key29": "3D2MumZWeMKTueAGHZUNQAWDmguvhEN8HaBYnh71pUCvvoopc5cNhTADQWfcQrdUjNUHKuST8cmxLCX9C18NcHHj",
  "key30": "2EHWzDazqCJPAqUXRNVhGu1JqV1WYW4aKetM3HGPuxFbKxMWSjK8jsiMyChPkRFhrhXxixSy2f91aoB4GENWDETy",
  "key31": "5bKU5uhkxz6FtAHMV5ymj5PjRNGdhrHnZSPbpDTd6VD7ARw42j9JtapvYQjhEE2QjfdnoDZ7h562EaFqpSW9emYh",
  "key32": "5NV8JwQ2avK54u353xXpvYd5jX3VKExVYQsvZhWL3Lk5Ebxu9ZPbsouadgytHJJYrgYPw9m9h6p9sqH4qXuDkTv5",
  "key33": "2CiRrUZqkokg8jqMwPeauGSqnrTFLDNP39aLWeE7ZXVPSZdFVGTUJ4nj9sma7FZJpjXks966LFx75oYiiJnKaXNa",
  "key34": "3x1atvS3LNjeZaNvDpBaGQfRAT2W8DeCFCiG7jNwXQsHoo7ViKoHWSW5iYAk4yoWr3u6owgbx6ppC6XUVVYDcVzf",
  "key35": "4C1i6hbxfs5Qq226ZCZmK5zcL94rjeGJVjAXx5TBbnpUy7ts23QbJizv92edvBfG94VAb9mXZhFASpZYtjq6FJmm"
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
