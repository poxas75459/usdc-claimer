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
    "2oP9oH8Qc6udiThHfxV1iMMiMLLXGWoEpG3aeY4y2WrFv2tJHuE7ZiJFMfr3dJWwxKpzvAqQ2YBgtZk2jhqCZERn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9Up89vaS3PZiuGyiUSuuC2t2AQYr2KpSMZQWz6GC8U6jtnc9aX5ZUBgqVyHTGzKMCj2tDLw4NLWmo3U7TqZvYy",
  "key1": "5jHLC9Jx6FCAhTj3yNomXcze9J1vpczY9SBFzDaemXDCzPaDUZi3pH6KC8MUcdk3YAb2MUYU2EuZT3SCquqPu46w",
  "key2": "TJ3juoAFNfB898PJgnzd8z29R7Xhg9VVQm8B7kvwnoLYAQ2ggmquZ29ox934mVBj5ziAoLqQ5ATyVUi9PtBy8RA",
  "key3": "4cHdTVBA2uT7NNPNsPffKuZPJShmprLQK28pGtUSwUt1nFQdbb747RPTjLSQMHRMEQeBL6XfK1uvifeM4x5AhY9g",
  "key4": "4x2jdKB8GS9XAJwJYEGds2pSNgP2zC7h6xTUf89J71fjm38VYoFE6BGQfwJyU1WrExEz6KzayXxDVMoNKRCGGZ1W",
  "key5": "2GC5f5JSGw1xhpg5G2dkSZaZgVvHtuLJc57aVDtp4PMAy1rPhcqrkY8jRU7xfTNiXtfpy5sMdhrFArnZEqvahaCW",
  "key6": "2Q5KpwECWJzyCPBjqzJttiCYSNAV5JoezuYQegy1YGMxsatZkzUiyMkgZzfpUzxTpg93PHcFj6rMECgjQwMSi21n",
  "key7": "3coYfV7UAAqDzi9LcQg5edTTLhyB9UvpfdU93zpMtaGiUPPw3makErdHXvaYJf59ZcXjE5toY4K3QU5u7YdSfPYz",
  "key8": "4tK4KRmfCkN7VKxnfukB4AxqEirAy8CpodE3qFjBpxMjyCxeKvRdbr1weQhnocn4fxrxptznHxGGBuVSUzXnmAmK",
  "key9": "4XFxRE5yD5SncxzNtYcEaLintTowZ14Hjakonis2awspdFbe6orzD1pFqtHBC2czSnEL2bgR8Gk8f8WnMCMkSx42",
  "key10": "3poWLjB8zQRvrTaSKFRp5kDpyd54ak3hTfp94FZEW12nofWujTwKoidb1z59LjWXtWV9auaW9VT6F7YwZujSs815",
  "key11": "4WD9UrgimwHya9DCuosiRBwPbotuFoypKDQKUwhQTyFN3SFfEJD53HLpx2BWcjizwa2SpodavyetSEMaoZSHv9Tm",
  "key12": "6BmAGgARsVTgsk3su7s3BFhae8hcPAVnARdyybMkpqBg5HuRmjPmXALgFvi1Bu1oa89Rgj94PgaB2aadVEksC5g",
  "key13": "3cFAMmC81i76sxRwKJFEax1jQve5KKyShBheFUDdg8MeF1xeAjY8ZXSJNQz56wwJKrRnotVb6rm5K15TU7Zp7vbz",
  "key14": "4r68jXBkunqBSjZ99eLANnKcRDqd5DWB9e9wztEDJxWqSNJpu1smmZno2iZLB7Bfh395xrLTwj419gy5yK4PoEWL",
  "key15": "42meAWW3Z9WuaJRUtr6MrmKmNUSyR89rzYCvAKcnUK278VoVpBWLeexY1GeBgSM1Hx4KX28piMD8dJYsSJwErvqz",
  "key16": "4Rp8Pdhiwmv5CMnJMoBHsiJViJfdQpSQEpcMMD8sxZssawAHa3V1nePNjTA5QTBcaqjssxsfcUasybjMprtrzu6E",
  "key17": "2TwoYvCdF59kwA7ac7LDKCACsNtjirytZNQMVtmnzGtsX6y9ZbSvgWXAVsYsJ4gZmmKEuGybPW2BpAsQofHzoMfj",
  "key18": "3xN7sJ1NvefeJYRQBMuPxYB8CqsqHijYspG8Rt3pqtcnjnC2yYAH6kT8D1omU3YNmC9PCuNHk5oGCfJQ8hTvBipP",
  "key19": "4nEEryxMzQ5m7dVBp68QGv5Wei6LRW1a45Fb7Ku4Wi2jWTCeqxBXywEDRYm9cyUuYH1xMmynCedyF8DyvQhoSCWD",
  "key20": "ukvQ313qZPwQaP98h2dCKmFg6RXSxN5JSoZbQcJ5hiGinegi7m3jc6pnVMjfmsA4J7YFgtgX7P49faki7KWj5FF",
  "key21": "4P99PfrJ5wXHmqsKZ7AztXEFVWf5sViYxbB85oTJYHqcbt51GYBXrQVFNSDWndhYq3mFZCZe8xsrrm7MpwB3EhXA",
  "key22": "5Rw4j2ny5CW4Sf9zMVbkUGp4ymPGPPRArnvmsH7u6HC11EwDmNG7zbjh45W3paHpo43JfvrTrH93FyjSkL7GmxGU",
  "key23": "2p9GM7RQMWgaMA2f9FhUrXnYgdSbTEM9ZRDVRR9QZWpfkUJbw1hSaoMFDtFJdNtBMeYeqB5Mc8aStH4htFcuFVuQ",
  "key24": "3ADNQxzHscrxKb3oZ9euzCcpZx5znJirqEdNVvnbKXNRKnA3PCNeKgSbbyK6rzGJDm6hKssjNs6BGuWbKzQA95ak",
  "key25": "5rehNKF79338CVVKjgTRUkPNBoCKrX7s2xgG4SaVhZP7rYUiPScPaYc79aQ7zTBBR3M2PPLUFhwTwQApvzyK347m",
  "key26": "5KMRKwV66wQcRibbPW7RBfqnRwVLCA83edCeQNAsa9yheSgESV8TZCUDXHuPopgBLPJkLhV4NBwZnkqGoBSNHcDX",
  "key27": "3T6UTKWEXtabG9syXyNYRpWEb15AZ1TeMM4hLSpi8B7faJ1ZbXjU7DTbGsvoYBXJnoTG4YvSLKBJC1fgtibm7GDd",
  "key28": "5FvEweEZXdcDiJxLUxdtgonXRT7qP3ZatVtijJKF9HdnDSc182sbmCEMr3X7MJ4yVdwMzvo9NwTvB8jAC3LezAd4"
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
