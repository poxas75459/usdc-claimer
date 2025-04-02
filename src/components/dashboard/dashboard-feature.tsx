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
    "2ceDFRuK9Ds6FhokB3j6oji7fByoBs7vvSKCnqcb8Eoe845Svw38kD8VgvRR9XYdHkWfGUhLg5ZSb3HyNSghgnSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gr1E1eWaFDW9eonwPWamwqMpwrHWGy1ER76pgWKz8isQZt6GNveKKHi8hcvbv8YJGMJJ4ggReDUT8PDC9r1RFAt",
  "key1": "b3JKPkfugnFi4rT6sAyqV7J3VHeKmJEfFuvni8Xvf1mupHbqXcRNYaka9Jt4YX3FaXpdLtC15Aa5PGR4sribDSW",
  "key2": "57Wfy38rdrnKL5thVjbDKwbKQCpUhPugVfNGBsBeLByK81sauWqUZisACPcKDByHVjv7cGEcRaj9VmWnNHmEwLDH",
  "key3": "4a8G1pCwz3ukNn8yLmokL4XmouZ8Vv6C5Dr7K1kThHA6qLVuDhaj7yuKEdvqXSHiwJBZp5KJbzzfufmKMMXVhued",
  "key4": "3YzbZpYDpv8ybeNnLBGzeXCeRGmZxekf9JW5TZtbHSsVeEsY8sfaZZ4CWDNDRmDiRAALmvmci2RfkZZgfogEWAY4",
  "key5": "4yaJz91soopqA1eDShzGwNi9Br7cwvm87YDy8FbWSXKJkG4792LJEZVR1ur6NBRQyf2nBbDbwpiTgKkq6trokMYF",
  "key6": "22pu6YbQV8V99zVL6E2qgJE2Ge6YHyrDzAh6whb7vNEFu3kBXjmJZCTVEG2uQWBGP1jSRKAnQuxC68htBTY2wHvd",
  "key7": "2wb8Fvd5ng8f6wv89DkGPUoJDk5hy6jJxZ4dxyKEtpgfssxZuYcyPfxroPKUs2usvjArpcjwnkiEi6yYeXWpCTXq",
  "key8": "4tNqqiC3DgqWjAzuqug4v4qdx7EeELzEwwNgmVpjTELJ8Zt1kNNZcQTP6qVYvqo2n39eHRA8DDWbp3gfCsba3RKE",
  "key9": "2VfcGo8PGyqfLQepyh8V6yHNTbqDdY11FcGQ4azUefFkEdqx9RYeBN9XAJhk2NsFg6fosWBVHnsdjWS7WJj2tkKW",
  "key10": "3LeR3wXwCG5u3H7gBKfUbvYJvfsnw9eUbgQADrAU2kEZQ5eG52MbEHjPsAhp6YSeQKEhVPqXjwELaoYyR9HkTJMc",
  "key11": "3yipQFCGPo61tbp2XxR2nkdPWUShetzhE8kei43hVe4i3gfyhSF1pV22SpkUxSSrnirpGTGTkiuiTk3TuWxPrKTY",
  "key12": "4LxT7A3DQnUViPuyaLnSMkDLXeorYHzQmmuSwFY7aELXVvSmXtY6VBG5eSNN5q9XRZbg5nwBUFtfxnENiYLvgkbD",
  "key13": "2vjDraJ1Y2PbjNJpLUNeM6Pditf9t7M5uA9dTWUTriytsix1VD68dTfaHTiYEAeRSfg88wuPYkwCYSGbSoiFgXrb",
  "key14": "4vgWGMJfsjLgcgqkA7fWwjfUAWXC2QbqY7Uv3mYDzyaFebxK4vuAXk9nzAQqrHQRZczp96vM2ozW2G4uBoSNyCrn",
  "key15": "VvGStjm9vCw8wmibPcCTGTzu68ENqa1pLh8hZwaMvrfPB3UDtRztpta5soJnajym8EukNT36JxUJsi9jqERgiVc",
  "key16": "5eaCqqbxWSpAWQ4deB8mGi5CvzV1fKgHJBWe8DC38Vx166a1cAMCvows9bWdvkMZLELwBuaRZ2uizTDZgzsQ65jn",
  "key17": "3VdUPnvyWi8doy8uNZW9RwpvTsa25NrUofqJZ5dsJJrvkE5t4FDxBVRrPj34sGqaw69gibAFeSxkoeSLdjf2ais1",
  "key18": "azcUS5H43zC54vkXaroQgsJ4e2tCbJjhUQWY63q3JjmRMcsha3jUMrrFQJt6jyUCWUcVRNmSxNRUbY5LhMVKSCy",
  "key19": "42ZeXS2Nj45ZdmbroHF97WFte55LAGr48SnNqEH6CrwibJB9Ud4jvcSKPkT1C6r8dLqqKQE8xCdTG88oHZW2osPS",
  "key20": "k2KDzcHXjuS13rWhvvmU5ZMsm1xQb6PWwrfd1V6KXtsHKDupVJ3KQuCNvURVn5DrudFJVieGdEY6fqj4ue6Y74Q",
  "key21": "2tV2rG2AQyYtP8nE6nYfcBkXvGsP67aoNQD4GH4j4Et6qXWn6fRhhdKog2Ydg7ZhtgXk7e57ZSdUUz8dZcL7WUwD",
  "key22": "QLj9Rin9oXP53Ghdq1uhbsQosTSrfBFW6udrQZriPwqnQou7ybkBMebFNrVz42sEiCVbeyrpLodzuuyemtqtHB6",
  "key23": "3NxLy1P4XSpj6XK5FUGpBXtHSy95SmGpan8HR19ZmftVTNdfZQTbrCftGpj3fUb2EQ65jkgdnTJFkn2osyQL1k5C",
  "key24": "46osSBsQ2dBEm1DGMXMyFCujL69wXDJWSDDjzsFKxL7dx9U4BctfiBoH7rdDXSG7bnGyWVeu5wLeSFvxUYgthNcS"
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
