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
    "3N5zeZFio97H3BcPJrpuXkgk2Yjx2iG4xxp1YRmLqY67yuum5jEftiB1h3s6Mfh3vyG2xqc4sY5fTxCsPXpncDAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36EAmG4acg3kK5Y3Fgned4pS7moENgvVodM6n5PxHFmwJPb2SKtfAN5ZC6PPjoGB2sgHykm6J1tLhdNVZueXn6ZS",
  "key1": "5PTqjkZvyJgjAdVhMhzueFEnRsQiY1Rv8YC15tphP8eXq2Q9Lg96xVipeGz2p2GUBkzSuDD6oq1ZhGAH6n8z64XH",
  "key2": "34417SHDcCkuEBsgUkhvS5w3HJdGGzKVyGaUr4eQSd6VhSa122nysQb8zd6HdFsWW9qpZFnJajgsB9RhsxMGNWCF",
  "key3": "3owqTG4jQRNFEQBJkpSevkhQXzN2iSUgcWPfNteG4PAn6i11jwysZqyiLU15dG7totHhKZeuBzXXJUwiA95mUysn",
  "key4": "5fb99dKfwpPWDVbv5nRR73CYvvbp1MoEUwU1t2GWtytJ7qTnbpT13MBEbpVFkNLkHi1qPGuNMPbrDsJPtZmnbJ74",
  "key5": "65tea4EVX3ptWS5X1tuWx2gfqVvxjQArGKJtnqEZeE973UpVxBbxrMznMNTmC2NP1AycHMEXpXY9Ek2QqpCZ7WfP",
  "key6": "G76EVySm3HGNXxpiXUetskoonFgB7NZW3MsZmTFpmh9VTEMYmm292UKTckKTSVYYPQchrCkRoKQAkSRXWNVjvQZ",
  "key7": "2nJHn3W2Akq9J6UcoetmcKzF2QHQohWxp6LkP848bMarSBqUmR3W1X4ddSKzGFv8pzi7MrJBonLwwvX6L8PRXzA8",
  "key8": "4GfN8vKUA9FvDjdNezjV1e5MUpoTPKAguSnUK2VEDvD4GQM9ZkBFMYxwVkPNaFDZB9KLrSCdtAFWBLWmSCeArpBc",
  "key9": "3Q3QvwsKAVD5VKRzqakbiaknoZVHRH3QZzRKdq8fu1tt93NTfx4tgQyiueWA52tmFDycJC3eBLAew4eJqqfF67ng",
  "key10": "5iLBvdzqnCyjnRSsQCbaffAYxoqy7GrJs1HRNoVcJ5a9ypVsLEgXkKdYFTxBhd4K7PkpifwjCqEmENTUvp97ViVm",
  "key11": "NucL78uFenMv9Ldrh1rXwAM9uCZnEhJfM1koWe5Wf4peZjHVZxEi9sghntW85peTrPPhNX99YHX8jbwLaPJc6vB",
  "key12": "5ARFkGdEjeGqv8VjtqqAQELbDay1RP3Nw4QR1epLRS2Dop12SY9D7AdLcQBpTcL3GH645FQhfaFqiUwBUhkDgajm",
  "key13": "5gLy1r3JGy7KBgpKPpnuyiukYuHV3HAyY7UpjASP2xHHSCDJN28VHQhVoYWT9BTNVyPmjt1XxE2FDfZQ7UqvfB2K",
  "key14": "2RvXAZPRW9rNptobwmiBNAgw7unADn35VKi7MCVv1euGWb782cVyRh8nM8isnp59T7NxsBEkA4XVuMKHNLd5Vqp5",
  "key15": "SX5QebVd1jjUpi7rqmzKDL363tn92FvVzyCianztbLc7Qfk8C8E5wbtE5uAjSzt4e8vmtVyz5jGLn2HhvLEqqgf",
  "key16": "xnAZLrQZfw9mRts2VuVGoZkgV6oNqWX7DUtmhgmTNT1NtLJGyPHARq9QWDQLCmTPxojM3V2FqAzWJdn8TK7qf1L",
  "key17": "5ytuEgR5rP7yStUn8of8L7yQGLi7BWFFJsquMkMjQ495yufjcpmGAd2nYCzkDPya11Emu7KVS5RY4SJStZqY4F56",
  "key18": "5qL1UTFBZrqt7XRdvD9UySoWeJ3NuCj3TrGt6GfhiXnb9ConZgAcq9MoVrdQgw1NYqr3W5MHkxBC7ChSW9mdqv9D",
  "key19": "4fTrm2vN8M9fxsGtgB6QryGZea9qfQNpA6UY1rq1cvmut1VNVivUaLMr8uCgDtpYJhBtDVFbd2Mj17kVnK15jFiG",
  "key20": "dwi4Md7rRJTnoSZeMBeduF2xMLsocQAh4tEpjKTbcNYgYpooLvFupV39JWbhF1XFokdpNT6PKLnq7tUcBYJQvga",
  "key21": "5nEBTdMV9BqwxaHpuGWH4KjTQV8LY9vUJHtJ9tyNJUPcKdvjFzNmgkm4DDDBsJbvZF1dX8ybJDFTcQRPiX6KHD2o",
  "key22": "nwhjTeZvirn3z6WTcTSRkEEvocLyeUibgwoAzGaehYVXLAF48Y9Vk9Huw8vCe8hNcks3rzuFNKZ4cwUu6ShdHkq",
  "key23": "4U5pEkABJtQXEqXb3XqH6g62kkQQ6u2sQDedMGnRd2BzeqxmBkBHV8tZucq4DRPpTaApxvwpen3DQahBtCdtvuU7",
  "key24": "61Ac2AbPJBuQSeZhcaFZcqNsXCxorAyTAkDyZY5wAk6YtmQHHbWMzANYYy5sLn7FQdLxfLobLm4iRk9wnJVVdejP",
  "key25": "4p8WcodXkqy65rBAfV2KKhCrutykXaV1E3wjsXzYG1yKBwkhWnuhkqKuHhqpZ5tSv9F1KzyeRXvPPSkLrrSKExXZ",
  "key26": "5KcEdCzyDssfphw5jX3a5EJymuC6x1ckoXmSrKwdQ1P2YdkY7LQ4ZVc729y9Yuzqwc7zYKaMBRTwjZJtZHj9Pm2Q"
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
