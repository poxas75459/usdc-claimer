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
    "2FLbMBseYgEnmWtBaJqFuWG4S2hrnhFKVcEfHfEj6mGSttpfViQep447xNoiGUadtpAXb7Fq9uEUvRd8pQ9N8Jka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAo5Mh5BLejoRLU51sMJsuVaHb6Cq8Ate1J4sarJwKVVZ9eKDVCegcSEa3roa3oUzxfc7dspDB3u86AdtXZc4U",
  "key1": "4KnLCqzkPPhqGsoMx6tmwJrnFeJEvkqvXzM7trXjMxR9LYKVLFXYAJAzAzAbatcoN4PuRAAYZkqerMdtpwN7LRUR",
  "key2": "2sN1zHY61qmfe7h6wbfaYUbHMrwK9z9yYvnrTrmbbk2RbqUHmghNxTXwFFoD5BnAMZW4q4TjtiFDvPdETvahbXA8",
  "key3": "4GgwH8VCUAJU8FTXqMpu1dh54KntMVnPxrzijWFta6Bex2ifr8gp4ZDq1gumFMZUo7B5wJ11VH7cJepTwZToZgLH",
  "key4": "4DuJb913NZQSksherF44UGqBTZRiF9W7AA7UKSVEfSLr1F57z1wsRa7t3VnvLBDbuARTzf3BFjiMgjPm3GKuk6AJ",
  "key5": "5Uu6FKcb4nszPxH14SNt3hNBZ5TbCQ3LXW1SNKGjEAiSFsxttY9YnTqCoRR2hqjJbhfyJnjQt3S7H1hRUT4AAkri",
  "key6": "4wjVdZS3Y7AEQmGk25f35vCA2uyFJoHw3yE9ASM3B5CKnnFRebDrUjNnP31vLrpka6gNg3TwyGTbGjFZHQGX8mBN",
  "key7": "3E6wg4U636o8zE9zPkJvSVCY3jgXi7hoGbRefGw2uv5azeVXEQJA3z63EiK4NnL9u2vrxPKUu4XDqPSodvhD7WQj",
  "key8": "213zyF9TMSjyxgHicXrdE6L8usDXihyeReUtCmYEunGVJxW6q3o2zAtnCJAy7c5DrdRYvKvAcYrUkY8ohFpCU2pQ",
  "key9": "2Nv2jDTLBmU6SEc3BUcAhNoN499ARDZDt3MzioB4t3D3Tuc5HuUMX2n4UqgDgg5Nvfh6SGW5chJLt6uaAaAj8mVY",
  "key10": "WzMpnXJ9pKYfFrDE862xxAbuUhM9GNNuUhGLcpFxKpywSnMzZdt7VRDdgc6xGT8rsmLyxxti1irDNC1DoDKCmnb",
  "key11": "28jGq8Cge5a55qaifrVQ7Sa6FFr6knZpdN7fTEFNQXzAiE1uDSWzBz9pmFvAGVHPTsBxBRkV2CKcD1Vi9Fs8HMfP",
  "key12": "3kSXyZxeRhZ1PbL8BDXjX15iigrtbQcRrWr4rkG7S5nkod4fRdxSdGRykhTpTm3ZfMEiJ2UJ8oyJx7oEpQZfG1gU",
  "key13": "4TgGL4qsBShDVodoqaqnfQVekjNpMmGX8W7XNYUFAsX79WbEfwvsyn8p4C1sm4atGkeH2uyKrPQVzKvzUSjSamrM",
  "key14": "4uvXzuhoozfwV9FKsGmVMN6YBHZDDyWNFjhv1QXG2aF4374DLRGqdZTryw9Z62zsW5HdRuLGDVNT3YL1CTSYWrXY",
  "key15": "3SFeUsUp8MwqMsLTs3BaYpzYoimHWzwpA8YrYvmhqXiThUAvKCgDmkKEKEsn12vDdHRvEzwnZUoJfPPmvuihpkSk",
  "key16": "4Nps24nYZv5GHF6HTYpZWVC9gYMcZXEqCq4RnRqNZDr7Y1mqfdG6FobTcLNK6RHNtTZiXVbD5BMkwsZByNjVdbbv",
  "key17": "3dNrAeN8WNAuDNxfcTjj1iBWvgjCaDoef7GUxW9nX34faLN789NFTo285A7dTfEoBS5pRNov5HUaf1smoWQqsVv6",
  "key18": "5UjQJcTLcE593UgVBrewb2qi7x46F6rCBnF15xDw6BB3jkTMGiyNJvQVx8FCkG6Ls4DCpC3wozyiHQ1pkxq9GQZw",
  "key19": "QHqDeLjPQHTVSDz3PKhM4gYZdu2eckbJWBMS23hq7XFeyPi91t2uAWUBkHs8M3eZLTrmft97gPwxvoYpVkoAfKH",
  "key20": "3JwiD5L4YMdRCHkxmjNFNXbrz2VC8veW31EQbZhSjwTmzVsBtsrDVZ8YjZEoBsX5sM6LhHnK8ZEdJVkUti6PGhJ7",
  "key21": "5Zjhdfw97J1FfYbHR5yLNtJuo6moBQSzQmDkMt5oLgsjfijJNV9AdoAi5TNyZHJq7kEueY1CQJS351v5hKaHDGkz",
  "key22": "4JhuumTNNEQX6LCt7NP9hKJ19yGhmVAdhXzhm6tankP41KUozL9SDGjYoySq8xfLyZzWSQRmbN37a5b1hA36ykas",
  "key23": "4tK45VDNL99phFrGAMCfgoYTXZoNfai3pP4rX1xG4pJDpW4kWQETvp2C7WLvoPVyCMs7kk12SYCwKXZKAF2BdDSZ",
  "key24": "5ww3Yf5YNw4GavwwCS4Kf53NmT25i3mcz4gp7e3FChmdCSjj96iY45mup5Zp1wcJBYkz17pXqBSpqoRpvwuakRb7",
  "key25": "3gauX5e1U5fQLEXTVbABiXigJkDDNureWSL4Kayex39DGRsw56GF9JrhseCGw5n1Ro4PqeG5KCYSMt9UiwQuc9pm",
  "key26": "6dm6A2dwvSNjTHX5YMo5hd7tRs8BxXzPDnnkwUWDctnQBpEKgZ3HwpP4NKcs4T788wzCwvyLTqR9UA6zUkz4d3T",
  "key27": "3FMxK6Xc9DZHi3XPZyqGxnNfsfmHkWNNeEBdvWDhQu5SR9gP6JycCzVZvGE7zkjfkpvtzQMCLogJgSpe4D57rSiR"
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
