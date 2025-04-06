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
    "3FMiHxEZKA2TmAPU88SpTmvoaTqabAaWpVeJ87hjTYhYiXaHBKKErwZLPfhvCw5ZVbw4RBLKzaGscyAjqv8XErxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b5qzZimDy53iekYHqp4JjQUZRgusad2K471q2MC71hoya8NmibT8Paiidj57KTbwauhyD3KEncQV8XNobeWg3DB",
  "key1": "5K5jDhzYvrdiwXgvirHvns7eJVew9quG2znx5eH24ysNurK6DNgz2h2vsXF7AziYCymrM9LEoBwv3s53djFSGBhe",
  "key2": "5s6oYT4gCrtAKmQrRQ6sswx8guSZBdbGUYAN8cKPeXZPE7YY18cZxee6bf2dzpDiQdHCdNkyrHcQizQ6p7UV8Ez6",
  "key3": "4gbDUnAsfw93rGucseQbbrGd6CJGUAphmqADFsevact4SqGzQr9NDxk5g5qXQ6JMQDWhPBdSfVEbW6jaq972RmC2",
  "key4": "E91hra1P9bVfNnWSont5drSWxrmSyCe2ZWeJ3hRtNYxddyw2b4RrcunLKbtD9NTi75jtBz8GfiJyaAQY1jHuHgd",
  "key5": "5dBoZN16pfm9ojvxB41gsUHzMMWUD1wHvZMbWtXxDfkTmiExwHKeWEczoNBXyu81wrv6qPHFGejtNGaaCkM43wVi",
  "key6": "3taUgQNqq5i622QXxCafcCB76oRRSicAAPutBm6vtoxXc9dEAGJVGuATnzaRCwC8nf51FTxwtLbdsiamTb23h6vJ",
  "key7": "5e3UXtfvK7E2XUioMwqCpxLwzNunBLkVBziKLXVzF2YmhM9tXrYHBzkn5kgSrtzLRi3p1iL7Jnpjih9routrYzBe",
  "key8": "WFCCdmKXYEuYRM6aU1xhwTMymrpGNKj8H2NREaJ4Y7bWNfABrvey9ZwWvq9SYbqNHjhgnT1vdY8mfrt8H5ApqEB",
  "key9": "4BSDj2WDhk7EsGAdsU5Lsrqv5BzUmg3Hdfnz9XHtZVjDcYJLgUh5vZXp71MhkMkuSNZfq8HiAh2cNvboiDbCmeq1",
  "key10": "qQbe3QX7UYW2meqF8GSEJF3yXE12JNGyPxdGwrARvyHcPi83aaDZFuWugq6BxLDAmCLFZWZp9fc2DAy1R6dh4S5",
  "key11": "2EUVCjTSs4w3QWwwvfR4XoSTCfL1oGCYveB6PQoSk6S7eDRVhFviMeT7dPXDDn51mEBLtHKA3LGqBfDMQAns2wpE",
  "key12": "2tr3VDF748F5qjXg58Ln9uWAd8Qftz2eEsRmCeFDPREU2LrEPwXcju1YgYGuihtWULDWDtJHS3sLt1B4Ujssb3kt",
  "key13": "5LzG5ksGSVok4fsaBibfES7go6ws7i1GhrSq6QDQMKjgjuacoREUKf5Hh8yeGWaU1eJ56ozCkAyaTM3gvrrfYpaB",
  "key14": "5ycX4cAf2Czcavtjjps31GDagj6PGPfpXkfkRQT4Swo91PS4xQotYLXfhEtn7CmLpSw3RuHiqAEMPgFGn21bK5jV",
  "key15": "NMzzTYAgrAJ4Ujon26XqksLJ7ZPnryy9bSH5Ptn6qFbrqzMFRC4fb3kS6TCqzJE2iWiWBiqMEAwu5G5QrshxrfV",
  "key16": "n6E7uS67Lf2hsUh6RjfTp9QQDwXaYiSX5fEXGTUTKLLGYqiwkyGdRFmkQCVzDzo64HbBcSLtS7X1x9PgFC343z1",
  "key17": "3FMkT2m822JEW3kSYnEVzXoJRT7xSk8XhCdXuVKeNy3qkziXpCRLVQPaA9kV7YrYCvsSSp3i31tXyrjjiiAFXtYB",
  "key18": "59vNVmaoGrT19W2XMkevXRphB3tuFpCFoEF5YiydBky8t2isddRR8xZRrAsTMpC8nPNtwAGFt8aGcAMtAMZZfYby",
  "key19": "5VMd8477BqVCSEKcJaLsNX2m9fLhYzTU4Gusj6uhkEyPhFvVCLjxo8rQZKZCS1WNjuMw6yGyNEZard2SEufH9TqF",
  "key20": "6KBt67E43DTHUYPWuc9HT5E7uCuNa8RHYjMiRUSdSDgQenzUuewuQ6h5tS8Ywx6xxdd1Q1KAodypGKM24k6FSDQ",
  "key21": "45hgFLQH3eyS4TmJ7ARSdtJCQt6DPtwrK6ayXKofER6vd2vHrCj7Xj98dMfjeJaMAUz3kF22vgwoSR5SGc7HrN3r",
  "key22": "5BwvzUybDSEH4zN8pDwJZRsES6S3UtmtJMkqZ5GcuYKoNTAr2feCD3SD3obGM28gMaask6aFigtoWAKfQCdT5Uyi",
  "key23": "4Thm1GmkioWL1VjWA3Ezoy2sGJ9BzfQeM3dn53tFYniFp9bo8o1J8SsKaRmbUpRyh6kqidzpn9xJqQzLAPVnBLm5",
  "key24": "3hunTmAWAaz5nu2ifJXiEQ2fMQ9Fq6z533GzYAz8enShrskX5cDsAGndoYaeCCaiNYnDm6DjucFq5he3EQZpSxsY",
  "key25": "4RzM4q2kkNP6HSVxiJfRvFhriHk8PrXWURkAd3f4sREthQy5BGMhMBWppJwsiELJzGCgBdhSQTArxku35qLgvRPT",
  "key26": "3hbJ6g6WmgYUy3wMnGU4hJvqGkTEEZ6tKwxZaKTNyqnDJhUsuUV6FAb3ac24nBs177nswiw4t37yxB9Zh5mD4o1j",
  "key27": "3vUw6LMQKPNDvJBfbcATMdQ3VK6ByR4hwfmHMYgRjKfUEvc6ZQBvZQp3u1N1QHpe5SvoqCjv6CZ11N1qtbTJRPK6"
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
