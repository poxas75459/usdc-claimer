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
    "2bW4nCpPU4SjCdkqK83Y8CzDxFbUWJ3dFV4cfaK3PswfSnsaDHmwnwNQqtoMQzpzNJ2iS5Nv9hsgekBV8DAsan8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZU2wy8njM6bdGRvNhU1JJdArinhw1jHLXdDMXc1yRh3Pa2XaYhYNoxERgm2x72uamTwMpV6HmbV3nPCvwbc4AQ",
  "key1": "4wBRpemoVbcWPgVXAF3zFwT5cLfYLB3thX7AL2msSNEJGy1dg3UpjrzEQBKDsq6rU6ugMjURgwZKuSyhCLCVVhZJ",
  "key2": "2B7Mh7vupVUaWoM2jCfsZHTiRJhxp4CQC2hm5QxEAYLA1Z2GqAq9vjzfvwsT23Tmk52FbWDNuQao1w8mYQ2kNZnB",
  "key3": "2Y6JBERcJeLTEWTL2vo7UPRYTiiQPQpLc3t82GL9jHBmuCuSz87DvbYvJYyLVAwYUaMjdbgy92X3mo7hbDBXxPM9",
  "key4": "4dfHCd1pjXpYss6gGa4WEag86UFMgcLWn4j4VWajiHKt7H7CFQHiV8Qnr2PG77jXo7uqjxKvkW6ZUUuLWFaZkZSa",
  "key5": "4w34FZVJzXKGzYNxG28rZGr7TN3byMcFPzY5996MrDTDm7Wzm8HEJLUAiqZoHwjFJEwaigoWCMagiw7gnX4JjPS9",
  "key6": "2oxTUobiUGVbq48W9UAG91JP3BFhCWQ8gH5ZhUyXyKRnqsRJruGcup555ig7bdRz1V5X32TgqNWnVUXsVNZbdyet",
  "key7": "3NzmJsf4rJ6bm5QKjZLRnrbu9dBW38VbtvthQcmbShAnheR43Lc2ifd5VHtp4Z7TbNVJxuygqs9VxKgQFHi87n5Q",
  "key8": "z4pWfGrpNeX4d6y7e8gQ6viUWRSwaBRv4kFXVUwYqGBYUjnLXwD7zCBSxo3FsfNKN4EqpTdBmpuDSMKtmNdEJRq",
  "key9": "3Ts875KvfwRB5kg6X3mKcZRYhWhNhkVoEhhtt1rthtC4rcjrR1t4NiSPeqxZc5cbwa7Km7n2e9xDsVSdmx9G4XNZ",
  "key10": "4VNg58YqAcYbPNJsjSuXVXef1aYmNksVwmXTUsxKaVwiy5kNDWwkTX99sEwdH9tqvevbKEfYsYSHCBNrquHe88K1",
  "key11": "4wSyVK85kXe9NW5D9H2yGjchUNJRmBGFotqb1XkmUaUnmuYMsNNDmUg9tpQdR9etEq53hfDdoNvsdgr4yEegxV8Y",
  "key12": "2osiZE7qDdjUTd8j2scJd173fZ2TBeNPMm7TiZG1X2DLNVJDp2f7aFhr6QqDoi5wy4aCSqeUF5jncsnRzHmU8HTJ",
  "key13": "4U1Z2GBybFTx7gzMtyoBoJ228dnLA6XzPuMyBw7y6ujKec3JVQAKyuKSwB1txsTaHxLXVhw12Z4m5pRZsHS9S7Hu",
  "key14": "4XERckmKKLbqsvZnbdvUmRQQZggTtsoznsKDEFN8HyK1tnxtGXby6osAYMaHxCHbuSpHQpJGA579safwXNyUzxQ4",
  "key15": "4KUoLJSpg6bPsedFXSKF1tnALi2wG5XAvgKuthQ75QXThCS55DTvnxs8SbzJ1u8ScCoN2oXMe1h5SrTFhGMoWQ65",
  "key16": "3AN8wBYJ7X8Jt6yUXgipMcJTfoCS64kiUY1AsWzw3pzK4sfH49uBvUhFehcNgaQLrjCmseyRhrPFd7wZeQ8vmz33",
  "key17": "4b2Uh2chmsbK2zUebQKucaq5StbNjGNX5uc3qc6tAbJaMwhKhD8tAW8ZhENbqzzdMKJLo2gRNabVXe31YbJJuR35",
  "key18": "EeU4p3RrgSwYd2fQa9KYMDurGHHSudZqG8UUZfAcsrNuWDttG4KTdAjhgvApamrSFEbdgK8J4tZrgQGPJmRgbcH",
  "key19": "2tLXCghoDDmXdJCsmktXLd7L3z4JzoFMpTJAuXq9pTxqFjHborvxbeffMY7wzWobRSfVBKXCptkSjk2BeqkK3hBB",
  "key20": "5Z5L39b1tjKBXeCymZGdN1uzgbE7RxDb9VE3Y7y1sFKXmvkeQCAzYtFgWKXoDDHbLVU4Ctbhtc7uK83TB8Su3saN",
  "key21": "YB3BtEpiLaGzbgTgFVatKbaWgPnVrQiLZ7tTnuHQRPmoGKmnUCF7NQ2Jt6RFh7DKBqw8YeLaRfit8qJRQBVfrkb",
  "key22": "4fzWQghs2adJxuLa6fgh2KwNe9PSyY2ywAxPWkSiAPhFm3DCqArV6WPQStdnJNgkd81YuJysAzSjgm9HsQrkeDL2",
  "key23": "5ac5vqNAWeTxtHN4vURre4K6ucyPPQu11gyVYyxQzYyTsLiLB7xLKjNrekaT654d4xz9CePabGXVK7fEdyJ4XkMU",
  "key24": "453aH2DbYPy7KhHUCi8AKLxSji82rrNRfKRFVx2LNehfySHg2oKXJMeBrPqmwmzyVNLBKRvTSxYCqYYh3aHt65Qt"
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
