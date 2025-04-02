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
    "3w7ipUUficmEZWWWPXF84PNCVno9yrdRDw3W7UzVooSFudMPyGQpKdcy6dF6pbXCWytuf54RpfNKuTpLiji5AoYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5JUZnrBudeRKSVnaZB17ukgd3A3kRrDX2vdSYMbWzTiiEcTYz4FRbVn28r61TzFMMQrw8CYWt9XQhqoHm72GV3",
  "key1": "hkH4C5qT5yitPQgZrbovRodj76pD6vtE44svGXWVy4tVY5crvLLLY2mrxE8ghcR6gxg9xjysSSqipsCZkBmdscw",
  "key2": "8nYTibXeP8JbKCKQwshZNscP7zcVXJ1KEDuJN2vpBQs44b35oVh22k5cUhm7fhQ3RYxUsVnmjoXosqNcYskSUca",
  "key3": "4zSVdVTndqSbvWTUfxdfaTcQFN5heZ3886MHrFeBajEGFcyzSijEF67FkX4cgjJVWL7chvG2iR5GYZkrxUa9ENwY",
  "key4": "534DAMtn3pcsZhjG4cJMkzbLs2GytAye8hPEJ3DSHVmTEGZaRNTnxiE5sCcvTd3AULfmz3gA4T4PVbQbVDK6gnwz",
  "key5": "WYBSnC7Gk1XrJNF1BqjDXWoeqNNApL9HNFHT4oj1niULrwehTPvAdaAsys2RTaWHuyv21CSXpHTTr6gyvqTuzU4",
  "key6": "2cdUzv5KiBK5MPBUkPYr6Y1G8k4JgZs38sADKT3r3CcKdyJpMbTieuxcJu81FtaMJacgFbvduzzefTxmNje8YHMH",
  "key7": "kaXvKFL8ndPAPzf9YoWv9rofcfzkqxZmp8TZTriuuszj1AWwRgN9BPZCWDbXLnJwynPeoXRHhv7EsjzwKMsocnv",
  "key8": "25NTjsmyaFdCdj2952XozxHaoT84xzCGiKnXped69ZPAdu6stxJgs2vfCQBK7j8cyNgorjUKkxTsav68wCbZda9E",
  "key9": "91fnLbeptFrVPSNoAqZe9h2EMBr639fwrcFqw7xTpQUU4GUvp3j1n3poWcokfSP3ZeHQh6fP5fpLEcJxMSx8B7F",
  "key10": "4yELoLUSc1FzDgxqHaBgZCscc6XevEhPotRJ3JW2y8z3cSrMtpe81hXpHHJGQzZ7bYRNXHe3sgECoeeMb6quVgUZ",
  "key11": "8QqSVqJLWLbooVmVUfjtUNpkhdqX19hiNhXAGg2ZK8rLSr9mywEDWHPDnoFAyhF6waiNoP1z5gVSNwLo5W169UK",
  "key12": "qwPk79cGoPNzH8hvwskZrErb8CN2T9WsKRbw3v2JBk54NPoa2MULVG7X5H6wPKLtrSGhyCq7twLLKgyLyH88yJP",
  "key13": "4REEpRkjogERoSdSUw53geUuX6jW4pcxuTw8GtARuZXcrXVCE6jaP8hBs8wYkKPZuVrMiWYqRe7LN3r87Ebx3wpJ",
  "key14": "4eHhoPedbYaMuYs3M8gZZ11xQV8SSQ9JY9jMy8MfNfyjZ5wEfGMgYHdJYQ73StSy1eAe6J1ompPRDrD2tvF15xY7",
  "key15": "y6Cjwn45tsxskr934ampaq68iQBNcK4ee6wzch53mdqf2K99kicGb1MhjNYB21pE2PssrbE7fav4o27WkEYddhY",
  "key16": "XUYGqN5zKotisczrxR86Uf5cA2xidVnHmw5VeEm67V1kiXURVoz1H9dh26K6oZpLmTRvoXVPJ2JXRsmeuDYWkPh",
  "key17": "qAQ5LXrL1BmnMz1WZ3bWyUihFhuepqsV8kTd7TYWF9yG26Fjpt3A4CQNLm1z9e7GzdvzkKJvTjWjwZZdBdtmb5d",
  "key18": "4rcqBtowPijFbb6H5fXCczv21QBMJFPwVnenyZfZsWt4ZMWpbjBb6yN3ntnzW7umSHDZkXuWtVrK1VHfAqF3Sy4h",
  "key19": "42CcwsfehVRzuVHkHCcHNo6fJJY2XM9AdK8D8F3HbpFFE6GWAzDPDvpDwBFTuND3jhcCzaZJ3bqF7mqbCzrmkb44",
  "key20": "XP6Y3mTPDjwLaVoAkdWK2VaSFDz74PEZzM86VenEWJa2h8edCB2xSMWWhfhYBdZPErJEexP7vSHmyp3ogHTFoZU",
  "key21": "2SK6YGDWZnsU7RZxTdg6NziLG5ofCpPfYdSUcoZro2Ed9t1ZBYvNxZza1XiAGWDUqDPYXbid8h2oMiKc9mGAQtS",
  "key22": "58iQjdxrmkoDjsyqSKK5Kcax3pVswaYtyKSSH4ciQqE15tfsnzhyscAUGZgPC96gghyZcNCq47aTa3EegwjFUmgW",
  "key23": "41ns3dy4EEEdTRvWRDcFBAWoFfUsqbDQb2hQEnKpbSze7tfNsm2kas9g33VhYdnYPNjwrDBr3xSvEkrACebsLv3x",
  "key24": "4FrPum33ibm18Up1eDJwAV5sziXpyCwxGHTzkiK3uUjSib4ZxBtencDbELnJhs46PWvNKF8chuC9cqLt2XfbnKqq",
  "key25": "5VD1RLcgiMJbscZyKjYh8nZKB3L6YdDHrSa6zoC2AmBshbWRLdPbUuYEH9WVdZzNiMpn1LjgL1LHumvfzkgbmcDb",
  "key26": "23aFNqTgM1rTgor42f82PiAxezABhgJU7TYt3A1CMHW2yPGR5mz2kDBXddWZaHULrBWdnZL1yLG53LamgYX7beJF",
  "key27": "4kSwFhx9ayFy3TokWGnmTCPpFEP4zZ7ZodddJHJDnx7B4bexEEgDZdJdXV2BTveaa8Q2fi5qGe482j4AkEQ2AGfB",
  "key28": "5rZFCCRXAMGtKdmUvFJaUQ47rze4wJ4fFyGQ4oduZZMe4EN2V2waH1oej7DBoR2NQxXDBLX48E3CqqDCorweotby",
  "key29": "2LAp6wqgQmNokpVqpBrgihMvBpRnQyfhsZxCGkZ6aQsfAAUfbM5mK4QXz3ie15BJ1AHLv59JeLoAqYzUtFYvwJxG"
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
