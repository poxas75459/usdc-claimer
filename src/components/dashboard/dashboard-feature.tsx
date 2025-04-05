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
    "S4myikrpJ2DGq2Fqk8dfVL3vJSoiLupaAym3coxnA9fNp9nsTPheaoK98GSCD5onUWbKig2Sz3nF7igXxZw3pGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1RLadGAt9aa4cDKfx7c2Kp9NGUAmaYnXd2EthZrbH8QsbE7DkAFyQ9m5kpLWuMzwRpX5Mj2KLqGB1A8yqH1s3X",
  "key1": "2LVWfeNJBErKD5kyGoh7pQDeT1ryQjaT5RzZW1tjBhLFp3pjoRLsEVGu2CGeEQKLsxrRK8efjXbSAgz2ix7viVff",
  "key2": "5qZpuKDvEE9ZELpCWKExVqck6TTVyQRpDa5zBLiLsBp9dsog66LqXDcoXXEjaQsKfqpvq6TLsP4dtvo4gGR3czio",
  "key3": "JbYKiarb1cBMbe771Y6gPpe2evy65gHV7Qi532h5QiyQ5qz3ZCRTkRHTvU9qrsH1GfQL5tYY6hTGRWsZXipTo77",
  "key4": "5xoaw2Mpn14W1gavJYPNxbZFKs4JtXa3cMC7uv6M59zAWvsAMV7SGxJ36yerba3ATUWDYYeT8AND1cG2nrXRyCXM",
  "key5": "4NCN4AkHdwrD1jpEuuAhdEemAkFo9Jxkz9Z5CECc3MdvvDcUe4q7pKvQ9H4CZRmj1t93RCTsJkoGLEDf3wPJoHCL",
  "key6": "46rMD7LPL3EDYf8wzNvHzH52VaetxuLZa43hasdYRTUor6VxBgSfMLaBwhEyKZLY5nUhwv39BgZXjCtd8FMyKgwo",
  "key7": "5J6s7tQV1f9PHYhz4mRFz78BoW9Ez8RELXneRt2dHJ25q3Dyjm5SQYRU8Di1WPP98mfYJduHrvg9skkkigKxhbEs",
  "key8": "5q5FQQZd3jHnSVGggy1fuxgFPSEUgzrwWP7yanuCZbxoPX8RizCiztyAJ4JJHxCbaNd6QiANcbAKZjqT7kY7hCNK",
  "key9": "58z16nLG5wHHugf7rVGA29yjLFkYxwvdfsP6k9FpXT9mWn3Kf2WtgTb4ZV5fyTdUEj2vGAUbpXt7m5NFXfoX1gV3",
  "key10": "rH3ZF2qm2LqFWH7L3gDQuRcBfXRmJJDda53vEkrcGnVPwLfN2sXGqZUpC4snZat7fNeNEVq11PhkrYCwS3vKm8C",
  "key11": "4V8AMxkoMdZ83rxD5csGKdWQqyHyyo7jjX3p3aV7iLMSCFNZho9EFqiDT5H17nvkswwU6Thxa9NzgGwkELBrX3KF",
  "key12": "2MvfCcLkzfYyJ6dQ7tyHJkQdoVrh1WLVwEXqzK1DinPNFNTqRJG2MWUqDWNavkfzQMK3goGBb8yCHafVq89ZJq4G",
  "key13": "2WB1p3DVo4Rk6FdH8AnHrpvChqtPr2Asg6px5wbRb6ZypRuC1kXWZaUbFEgsMuju3ZG9n1BkeBGtPnEox71qgvbD",
  "key14": "5ix9Vf5uMjrwSqo3dscsZNJdQWKLsnXqWALYMewvw2RT17JT8SNeaWPdu1WHLUz4oZFG85Z4nvvztXhqnyqdTsZs",
  "key15": "4K9iHB9V7MqSiYWmPbTDT9gwArekAVwUyMwAgDsrJkWbqTkFX2E8YVekzyNyc19AsWNdweu5qusBa8oXiVSTBe7p",
  "key16": "2MfHNrsREEHzaB9GP4bTMs3fthr5zJoPdif9tJv5xb56AnMJ77Gvq48mvAzowrSGLYkBKAR6uGq4x4cojAKTqbVX",
  "key17": "mKe3aCjjoMieymcQ2qrowJrBpauUh312ofWeR1fHR7wPXsAhtqHpSTHjZAjh3rSjrY2bhnDEG4W28UM75Gh3VgR",
  "key18": "2gsnxiAvLpxPN91PiRXc2UquspvMTabFL6sygX1cf8wtnerA14BXajsF9cbERnku6mX6bBXJbGfL9JdCFtim89yU",
  "key19": "ZkfBUEqvcFybZis9sJMv1yRKCUgrGsjJfSr1XyG5ZgCvvu5Jb7nzVK1SUJL15hn3vCuR2gyGtq7odyfsaUpNRpK",
  "key20": "3fHbn9zRRdGDKz2ygnTh8DpVPACogFRrXjVYGyLtpYW8JxAMghSL7fNA75VNqeLkkvxwb2PoeMMzThjQFAp6CWSH",
  "key21": "2TbS46dnANpj9JgXhqodeKwaxPSXEmDfDo44EuXVz74tqoXgEgaUWKtCmPnLVYdQ3mXevvs7TKQbBGZBhh5K4cy7",
  "key22": "3FoAZ8ETJmejLMfSKJoAKht1LW1nxQNTquahJCFTeJRnUESGhRAg4xzHuvMefopX1gia5QzgwcpT47xG6e9EgojA",
  "key23": "5iejMbFD42W7GR3YPASBPYcimFVGcr6uwFr3VHxQ5LzfUWw4Esw2S94YSCDuM6bf8YnnmMpryHx2BWGvGfkXeA9d",
  "key24": "4hZNygCNRHbz4HPFuVhSet1LSmmUdCt8fXEjn5yeZAMzu8gmFMJMyYPXjbvXKvSp2jFWWHr6Ac9MkckPpsWdfT3W",
  "key25": "3e6upAZ42M6SL6RQ7DHtbjoyu4Hp9cKBLGvKLrTyD4cDnCazJ8iNFwQkU98kxB18jSsKKgwTXguUXLSXpMRKDSoN",
  "key26": "3yPsTKDTjop3bac9Z2uGDA32uHjupTZPLKcVMN7RQLxSK5EsVvhAXMRSFZZFFaRzuoPbzC4VNmnjpHktpSp1QPoM",
  "key27": "3ckQxeuAGpyw3NJaZADUoaihzi2BS7nDSXbnyQpyDqjcdwPg85JkuH3hKLAfNCGQvN89xPwcJvMMiqVreP9sRPeb",
  "key28": "2tmnGJmYUsiwpbc8bj7PpGuzpFdgGXz6Fi1iWiUfjGAJJQUpMVqeQ1p2nCSxPvhW3ePzwKovebMCyFEiBvZb4XXD",
  "key29": "49mT4zqjgLhM8UkFr4iEdTW32Dqx3PqFZvJtcKn9ia2sE7AzVrBfHn34s68D4xoPK6Z9SjPPKGPGpTC1PDg5PKjR"
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
