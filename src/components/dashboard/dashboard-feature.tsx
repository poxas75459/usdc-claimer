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
    "43q4L9AH99r5LTCdwHSuXXiXSXxhPCTRV41qAEo4SEoExN2fNBF95rPj3sFnhdhZaZtsyMGHgtoNznebPWBU4PEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qSxRATLQ5ZzCFi3FwN3QMV9rwDNCuEdHq6Q3TP4FzVw9Boy2cFYBke2ASa3UXNaV3H1PdtFc2qVf2JXdT6DAV1c",
  "key1": "45cXUDCKuqExwcV62uPBG4kDmy72uUwt2gDfzJy54nYonmCLn5MqtFCx3TVEUXcYQtfCmcC6s6gaEzSrNsPbKtze",
  "key2": "3GKqV7YR5B125QvRXYJThenGAgwVay51L8TxTWb9ix5kYNBURzaj93gQQgSvyRwmu9dJk361w9DRtJWQ5tYFs4ZX",
  "key3": "4M9DTtFaSiPsQJoSCz3U3tZCjE1JSPdhsrDbPD1M5V3jVCxJSBTaJ4cwVQXaG7iywVnk1EaE5M2knhEQ7inSyaVF",
  "key4": "2scX5SsTBhZd9oG4DRu5ewAzPJuLJk5wvBqN8VvWkHkKQfm6tRLNipGdpdDoDYejEjHophJDtL4uyZ8hRkevsEJ3",
  "key5": "3sDhSPSFVYS5fihpU5vaC72fMrrDwpbgtxi3RAAs9WbVKymA2y53zmXMu3k7KNZUrwTE6NVujHkf5PG9n7nZuDkP",
  "key6": "3dVWmNhxtp5nqTMhCDEEfucq3kaZCJxV5jAtJeg4swMhkWQVuu8q5sphJ6T2wkCNAAozvvf93DS7dUz6GZ1pyuiG",
  "key7": "65v3Jcg1bqdepkiffdKsKbzqLrpibWbE5UNGYqxzzU8hQJCCiHT7B6kPV9vXnMZVyZSXSLMWXFfSy4NXrcQqzdpZ",
  "key8": "CJVnspXyDNw5X3xtK2bMnfpmJMRZo9kAmgSCyUSDqJeWgsbXybidyGb5d75iozWcorLvH5n17mq9nxeBz8G4sHm",
  "key9": "3KZk7DVyaCPs82w4xHEbQoJLkvjZCEvAXfpCRf6GZtDTih5CcTy3wTXsDhjxJgXQr2EmauHEUJhoSAHqyEEo1mE2",
  "key10": "53kXmsHvLXwBhM1yDbvdiNiV3kRBMHheJzBVAgs9J4wZ4pSLfzXgBDDFzW24gY8MUjkUwNkpbsjtBmuq76dB9jT4",
  "key11": "45P1CfFTusMiKNNE5HXEwNV3rRqaQrSLphNcRjRDCneyWxsqf7P4kK3wGfnNbE1m3ZBYVPWEu2z5goNtj23ttg2Y",
  "key12": "2RCjw3yEJEKQMiFoNUJEJq59WtfiQJhZYvXJQEeUhrdhNjTguJPo4bzWF5jNwvNiKLpRb733YLmEEu99HDLBsFSN",
  "key13": "5SZmhsKEdftW36ywiT7fM6ZJHiWrCQNtgoZhQnWvksp8M1n5vPt6g21JfJtQGGwpv44anwjPeHMSvPeLXLsgtqQd",
  "key14": "WN3bbUzuWiMKJAsQJpy6c6KGjiWPz64giX71H7GegFAT9xzuTfy5bccffVCZ4MLKNScAwLFiMccywDjgqMNxf28",
  "key15": "3CVJHdkEq4WKWyyu984sbDAkvjHTfDPNM9Q6uyitksJznZ44pY97un6G32fzwWWW13s5pRVD3CLvze7k6n8RH4Kp",
  "key16": "4JeMjexZ9NcAGyoLbokSqPJ6vKuJ8XZreC5QTgKAW5orKcn4M4TqpX4ZmFfKJUojYYj2nheecrKSVdsKbLZXF91g",
  "key17": "DFmLLAjhqeB9Fa2Hs9TtiSJocauvYaJ8NrhBpNLyQnsXj6ppzbDKSbXeShcQW37mM9i7a4YYhAsamuGbHrbgc7W",
  "key18": "5XXCQQEpNd3QzWb6GcLc1CUjFia4HT7B1F6bMDqcba7BTBWBBGamcq37U7ermAzT8bHJTmBzb3ArwYhKVzw18VZG",
  "key19": "5m6JDGqDyDRjwiyDWFqGrtU7VKFjeLD1FzV23nkJuBJMAeF928b3aWbFWLrsafUZgYGx9rqgU11JDsP7GkNeUTwW",
  "key20": "Qbn2ojfaByPWYHKtBE5mWXZQ3o9SsoPHmriPkqYNvFWW9t7bY7E6cPBZu81WFsAqx2dVtpwgNrHiQPzYfukp3tv",
  "key21": "4THAcpNi2ebtPthJD94CR3hKa74rmxwo6yfRyq6gNQRQqpTMutUhES4XTKPk73hzv9tkSRuQBa1vXBWoxS6P7WxZ",
  "key22": "3wT4AsuRFBc6g6BcHQC8U6ab8g3LyqUMVmgLyWDPsPWHZuQewHQ1qLg6PfgK3gt6dpPZtqYVGUvWAgpTMo98ddie",
  "key23": "35yxBspRNAoSWE8SG5cypzcjW6RHydwgrc69JSt43jR4KSGoPEjTwGkhH5PUAzCPtyEqkvc6v1q5pV1awjjXiEkt",
  "key24": "3MJM5TSG6E6YrYdfUQDUAmSCV1JdxFCs3UFDrng4wELgZdQbvhgXkvMwGezDs6ABHgqnJ715sjRNyCNnJw8qvCoj",
  "key25": "3Mma4z3266L6rGu7e6AwTmRVGMtvqgDifwBWEgAqEzbYWDTcLSUWxjRrkWpbFwMDvgRo3eYV87MMaaNXLp9LfiuZ",
  "key26": "FY7es3efvpMYPRVgdPM4oSjzLtMe4Z6mEFzHBR7C34XsyNMtS5VPog6ARESqUGo6v7xRdyVshXbEV6H4pCDxEPo",
  "key27": "2QSzrggN7V2ef4vYRustUb6UEJMTjFXnapYfyqMyRvBcDCJNPDWFSk4LNVxDpFAw7GwasjQUfKYhwM3ySoJAYEUP",
  "key28": "38RT5gKMU39SShQiuFweez7CLYDiNHPoFe4hQstadH2VUPMtJH6PsGqodbqUZFN1N3SbqCxrS3zJspXf7Fmwvr5i"
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
