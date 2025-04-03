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
    "2mDER7yE2W3hzrzE58rFd57ER9Pipy1k4UAHzAc4Kmc9GgdHBSaTzWLC9UqV26jgpc5xckmcXN9oTBmZKjPdmK4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgjYES9eEZFptyYC4Ec3xzai2Xqpn1Mf41sNiUREGUPMQ1DHXaFLRzQGe9QFoea9usV6pNzfZgWTBNznzayi1ng",
  "key1": "2S75hBxf4HRrP1f4vgCTARXjvkPK8gK32gKcrJw2KSJ518YeZ5FeJeGw6MCFckhVFeb93WAjZwJXHXAMCYbF2dvY",
  "key2": "5Pr5gDrVxDYDP1gHdQEQ3Nxt8V84eSouqwXdKkxG3tQRrBPFDpYh2nng17fYWfzWQ1me895p9tv6jGG9MxwM7Fnu",
  "key3": "2wCZ11oYag2H6Wxwu7Ddr5v43oojTuzdv3HTh2fPho8Wbr7BWnbWheEbjaS6BBfZqAYj54gBo1W1TbQVMoH1cqxo",
  "key4": "5yqYxdooDdMXx8XEaEN4cAVLmruAc9gS9orZPBd2AswENYLwsNL83vHVb8yYPpnT1eBJmVXpEahuyCkohpmBJxm4",
  "key5": "4usYaw7kMDWQjEEKwkdDEUrGqnjgwrm2foNQFTo56tApgFCfUYyRVui3VieCSzQpB5mizZqJob3d2gnTn8EarDPv",
  "key6": "2ADgohjUEFSKu6KaPrTd21pBUPTx9tdoqzfzBxN68Goc4WztGku8aTnACdBD23i4jtey3SfkczcfHdgEmWeChBrd",
  "key7": "3PGd3EQTvh5JM9Em4yqYQoqgKapW5eSnm8tofFFHRdxHCg8ZpR6Psvgx8V8Sm75yTcFAjq7i4xBL6g9eazhw2KjX",
  "key8": "2zhDELrQqxU3z88qKHCreCqkfyNKkYBR1m3cpCGqgi1R7gtUNkRfhp5wVbGXhmzNTNhwg8GrFg79ev5aWYNBeLhZ",
  "key9": "2LBFqwcxjhLe875Wuc7UvSoF1HutziHvYSw4jDSy7w2QqK9G5EgEzGUDoqzysj92mGUrontKJuySGnSUVSaSh4tL",
  "key10": "4dg2CsZxzsXjtTCKkuLaw7X6boiGPKyh3EvGjoqfWFNGmQKRLqtQnVQXWBFH964hD4wVF2rSQxMpgVTdX3qRyWTw",
  "key11": "3BcdR7CVEjEs8eT6MiqAguRoA4XcBV9tMH6rN4p9i65DYPR5WJziqFw9B8KafPmgeHFfRY59StYYhyuAfZFJmkvh",
  "key12": "58TnLrAtEvifWAbQkhxiHkNqhzGUG9xUbyRueHBNf6aYok54pSWdoKxwCriGxvQTUUPRPFb3NK2nGjegHr3UfNJG",
  "key13": "3KhshULUZqbFJQYvVrm1XXF7beGJUbnrUi26p2HPUUb4rUNyEiwBeLuTnnFZTTGzrS6RGbZ9WsnKF6J2q9Dfapcb",
  "key14": "2SuodZjg9GmABULDpqZoQVryCfV3CfEHCMvBvm8EzYxeKxhGPBqeaAr8N6zFLsipaV7KjS9Vvg4NpxrXnCVys3nA",
  "key15": "3Q8vGRfyKqP8WTu2b299TQrug4vPxguLaWQxzmWdmKbHEzZEAo75VdHLFSKyqNT32KWyezYETvRys1JKJceDUGhz",
  "key16": "Mc6KcEeiNV7bfGkrafHeda7X8TZ21sYjVYKganzpxncNm2VJqVMu3hhbGBTadTqvkQ2Cc7uK4g4vPenbDxUoUn3",
  "key17": "493dP92r1ZrvbPps2DuLr5YJ6aoXNUuDkUymbewm8fZnwRCvgoiSQpdi64CwCtJkjwoKUnLK9bDNRrJ1k7uFEYao",
  "key18": "5NupgD2u1JqzTEmVPCQgB9a2kgNi6mYjYPtgDjTiqJXDPJ8hSy4cNxR4Yisv1xJptpHQZCDzmFtS62D2H1Vrk2Ht",
  "key19": "3akBfUAAQTC5ffPpMHTTL2DxfpCZC12f79BCbVG37HaS5PyajfaC7MH6kN9EEahjyCYBoeELinkKePWznnR42Sze",
  "key20": "8Ep4d41XnzjbbiqVaTbNkgkx3SXrNpMd3QUusRy7UuVyqtAgFmHwUpR5KSg8gQWZsmr5VF2b7urueobDugCxAWY",
  "key21": "M8QqDcK7Y34FUocP3nrHedduFjUQrM65QmHDjZbHcsRkg7mMNwu3d3FdzzVPt7Bovy73e4SfNkgAFHLD7ukj1pq",
  "key22": "4xY3GKCuKDcgAQ4HpZ5eommJbkzPH9nMU8PkhDdL317YAtuKu5S56X4GSeMdWDRyhGf3FYxdE3cMquJyq5WLeh5f",
  "key23": "2CmNxzEp4reNqdVNobUFkpSEctJRjoNQgviJbt28ksEv5YYSstMzgMchq1YFiehmtRhHjWwGHLmzyb72Vm5MmMTX",
  "key24": "2gzvYXJX44Lv4bUaf3fjwiK3LxQfDqQZLCKyVALKFoPVkywDzDVkUM9F9iRQKzw1G5UB1iGpLxRNKonaJNyi19Q5"
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
