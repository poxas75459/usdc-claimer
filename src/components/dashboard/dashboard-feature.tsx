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
    "Wm1iaSBYmuFtYktySAsYkgrqxGGEyLSxb8vQPqQFKTcHLvbauJHnD4UgPRUS9BFYdYcXnZF1hCdYzqde5ejsDRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yL7YNVeKxinewbnkpsMzYhgjjKk1dvCGoF6JugPRCw2HCMggDvTVUjtgRrZv9wEerKZ2ggbBPHaoVfzDEELw73Z",
  "key1": "3jZ6Ahw6Pn35z6A8h2JKP27ADRTxEKUxrgnoPSZ7nW2toAfupXoqRPVTUAhpYwsSft2zNK7sc7CcoNiZSL5EcPPt",
  "key2": "4wDg69vAhisA9g88ucCUR6rstnHKinrNGPpySEyDerrTZnBu1HYkYXWMuc8GtR5EskJf4QVfy1qG8QMKzUHyUEAZ",
  "key3": "28LdLcbHaHJnxhmzde2vtWjFahyLSjozqRtizUR3Yx1UdRWJP9YWNbSTBbCAyKdvHeZKb7W7geHM72qXKZPW43eT",
  "key4": "36VGwQmvHQVrMzRgxxivXeJwnpgXntA6tJwLp19BQuZYHsDfxRuuRyzXum8BSL7DPr4Hd46PjA7jA84EMFp62EQc",
  "key5": "1dxbkXydjmDe8Nph41kYcEMNTkpXGWtff6qK62Gcm7GshfisfBsKNziR2v6YxK16ZxHMQYT5L7Mddsk6rvLxLUi",
  "key6": "5TcNGLFVJKKWqLArU33PNEytqG9mJZr2mZqMPdb8vQp5RVuzGTvpHrxoj4977Y4GtpmE5oCxERqVHGT8sByktch3",
  "key7": "2KJwvWyDbA9LYSC59nZEKRXdrfefer8PNu6fzNfB44amWRJa6LWJMS3sBWvzxFs3c42PWN5HwikV2uMRX26GBs1E",
  "key8": "3bQ45tUyHRfHWr43gtaSGc4ni4thXrGWxZXaJsjWnVhyXsvpVqFyNvDEhqFXB5cuS3qPXwAuBA52NsDSXFb3zV7c",
  "key9": "67hbG16nReMH3AYPWUkDpzfVvbMMc931naBiZX6ceJWsPAZeVv9gdX1YDsjP3g3wa9mNoAtkQUnyLuZ1fqQ9A9qQ",
  "key10": "5qEsL6wJQHj69u19mfLFdNjfrw8neKkGtRH9th45eaRR8yWDWSCRfW4wTLaGYhGoPuMyujDLqAA7TZrB1VawyHw6",
  "key11": "24Q9YBkWfmvaoUkLi3WXhQdXpRCHuUCKHuhM9w6ZgKhdtxN3GgbfViD6AYz4nidgTrxH91awqapraxDTudvWcdTk",
  "key12": "5oiXpcDfeetT7jz5DhzpuqKXjGegnhAaNSbbmovECFofssLk3NpPxt7gZF2KcQFSAN7E48s3PMEccvZ3HAHYY3Tq",
  "key13": "3U7QM2jD9A966WHxCUpsG1gXFFgf8ygen1xMXoo2A6RU5Tz2w8u9c9SoXkArejjmFozjPgNL7iWP4nssUcL2pP2p",
  "key14": "2ncodXRqi16xKgMnLGAxYnHs55fQZHrJR8mCt9c4Zhq2KQLLBemx4UjweagB1ffz1CCfJ4FTWp4CVT4zEb927g6N",
  "key15": "3WywsS1rzkV4ribmsV7LHr1owkkpnmDt5f9eQHGSyNw7U6XMqBoW9YCSngS6PcH62mYYFuTfEKeNURKWq5psxsqH",
  "key16": "3DGyWcXe86UKmRK1KRvnbYabubgf8GEYzbMZ9G73JQbCHtKdtTjTVu8P1FV8xdbPksZsv8QBjDQTGU4hJ7WegBxR",
  "key17": "5A9JLqFjFFdeRozPExWzupvXJ1gjSiERd7NSBMgCu2wiErstAoQD1XarLyvxGrJFpd2iWYbWMUnjrVXWmWoc8d4A",
  "key18": "5p58zk9ARvRXFkcLh7AwSueisWrw8yUPLbo5tVRa1wyciXrysXiZtgkg4DSsKaxVpSXz7PeHnESaLCZ1zg1RfJHk",
  "key19": "5wCntVM8hMG1xXkVKKLRux9mJk2TykSgaRwbWy33wHtArPiBeN7SYKmyP2VsMTxQuqRKfD1AY2ttQ6mmFqRaqq77",
  "key20": "5bL221HUC3ZA5ZGgB1yCdvZo9EDp8MNnivRKohegE5y94NwKF25JCfAMDEuBYWgSSrmjxLpUe2iBiYQr6juDzdhD",
  "key21": "3dZth9UCFnjXyR7UaJq3x8AWdatR2ayhgEq77jDxXgMnPrtsxKtkbYq4jFjym6xrKWE2GofFpTheKVa3iBfJcqtN",
  "key22": "6fBeBgJsgaaQSQ4VM99CrfyzQjosBey676Y9NL2iBW3W4DDCyYpekqCgJd4GuyRTYZvwFS2MU8wH22uewqmwYFo",
  "key23": "4xJXFwistTegaKsLvQ1581CaCuLAVJEbtUutu2LUZwYRRtBx5VVsH5CrsYk9g3v3nGpRQVCohVjzZzz2sboJvS3S",
  "key24": "3qgsauDaKck2aqbt6Ao8ahADQfyLJPxyrGX3HuJXT1dXKWvGVVsuq2kSnAayZ3FMFpCghHz4G5cSrfoHSjB54hdK",
  "key25": "2QptJycwbEVEzs4QZ6PS7SiC8KYiyv3ibCsq5wCQxmMbkB6uzDeyNZVv6ZdyLNjHVYLdA859jdBN7wYbXXCrSDob",
  "key26": "5NwEtVCESBVSe4a3VK7f7aDyL3CPeHYZVmCCiab8AU8eAnSqPTzgqen6676Q82sPEmpdoezKbbNNVTw241XcYVyg",
  "key27": "2MWVvQqDNp4JKez1CLT9d5A26UgKHRz8zGRgB4AFTctsia61xEbHjLPXiedXQy4v7Rkda5X3aKqXAAamZYPtTL3V",
  "key28": "3hqHXZHp4PNBVDSNwdf2pXwqreKNrYbypLDDcfx261pEDGo3Zt9yKzYW4dkjJiWUEXcj75mAAPHYwK3nwbVAcrWW"
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
