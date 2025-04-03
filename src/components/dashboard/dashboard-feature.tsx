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
    "46Yoa68V8xEmxbutC3QAjA7dYYJaYhtDiU9Zu6K1nKzBvf5yMaatvCA8Apy6dPCw8Ec6nf8YKhg63FvjtMuagCBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p4LN5hC1DnMLh1fzEbJK3WKCanDSzhisCvrPJT8RJGhHtWYcdHDE4noSpyxLYXj9GJK3b5TmBu1h8fFwYGdPXXx",
  "key1": "55dkmPKHtWrDV4SyP4xmjuJunyqLGceFRBQsxtRJLUZ64JGstE1Sq51GJiPX417YRWLx3ZxcSvPucPud8mp5psaF",
  "key2": "5T9HTpVA8MdnKQmTZa2KEocrErC1y9KBorVHAwi8djrQWhq7YR42Ps8KScqoDPdvoR1WCBxqbDJHX2SMRHnoEzET",
  "key3": "3D7naWxzURALuXM2zjyk4DR15SyZbPRyGLcDNW9u2Lo6jLxtKV9L6YsALKcDmdhvD14kCvGC3f5YABgcuytj8n8u",
  "key4": "3pvrNjAGvCgFzjWQqM58vDgQb1GSkkLBWDjXcnSsTH5pGjpNyrBH88t24jWJvDkkYZQ9m8ko8Pfp8aWG4FvknLbV",
  "key5": "3GUnSbVk39zeN9hG2NL7J5ieFaYk5ZaUywQXRN1RgrxL1ryJ6GQFg8XscjaXZggSxSa8MZJ9Zn2vzgEAu3bFmhn",
  "key6": "5ygQ2QKEAgNs1H6y2dASej2E9T1yPvLTWDZXgwEpQaeDQ2sRqQES1fZ91jcZdxEmK1eNUFJh6qhmqA4BBgK8SZdN",
  "key7": "3Xsxva7WfwnCsMg6qxM623uhBR2orNtE1M8zD7bq236rR9koNt4PJ1Kr8yTS8nUNRaPVFq9db4rXxdf6jLc1Nsvq",
  "key8": "N2mUeFViYuAUHNq3eoUu67s5CWtqtScHLnzHfdvphffBMzZkNKSXBMidEFf7kERi9uQsCPMiirNLhzd97Q2xATA",
  "key9": "5ZBimTw858TrhaLhr8g5Xa6ZAekmuUKsqwSJVCZcTdXV6Bkf2awtsm1UAFfYqaLKm4SUqSSW7Hy5VG8FHkiTZSAB",
  "key10": "wpp6C2xLptSg4p19ssdVDVoHaMgSePpErwBRinryxRjvUZ576tbT9iCUhA9MTXfFGBhhjE2kmRhpTco7QBvycZS",
  "key11": "3Bpp6QNmpNAsTFRZvYkkTiPadNZAs5BpQ69MgZgkgquUZQ83qPrepTvpg6rpTjmEhbnq423bDaiv6YvLzvpVJRdD",
  "key12": "4v1zf1PeomjEPB9pQJLfHioC5hFA2dVVr8trAANNt8HcE8hptNqTRoNNsNZ2FDMZGHfUEBZN6L7AkFtXXgqJMH28",
  "key13": "5F3UmbnVAmfF9Yyup9d3KrpREqnpJyaxy5xXdqKmTLDtGBYmpFcrPA28R8615XwkgZYfhjgL3jtGC28TymLkKc7o",
  "key14": "2teexK5yWs5JEkfdM4rBrUYwgC13Cnbbh25upnnt44p5sa4KbagE9r844UKhT9emFLhPkugGthzWYkCve1duxjsL",
  "key15": "4XP6J2CLURHkknXnQUgeQGh9u5t3mHyLbteJ2jmJFVXAc2Bqw3VX7Q4tuA3DXykKMzhqhWeAXTn37k18B8whjAsx",
  "key16": "2rkgyn2nv9ogRg4KMuKqPAkPb5HaEUhwiHtfX9A5URCfHNzvq3MJRx4JAETrserKgrcip3i4c36hFJDnaFKa7xEy",
  "key17": "4nKURqr5cK7cJkAkyS5u35yjuaG6DiszpeKuCU98gpGv6a9YXJmZpFMxJv6AR7gN1CMTuX9vVLppddvNNRQPPVTX",
  "key18": "38C64CL22WJUuj2dYXZ6SKXkEq8RHyBetMJWmdg3q5eDb3LpEiPw4JQtK63nXa2gyFoAKKq7KiqHJvEPLyu7BEqm",
  "key19": "22c6r4wW9MGq8XXWAMLdeEfFy7c89HZB7HT9AcD467UEepDjgNpyfm2sDTx5TboHiyvUqHTfzSENa8p5Y8wnTmux",
  "key20": "Lnn5TBjdTJxGmrmzCp8dqnhMnPTwHzXfH9ZyBHfujQgAYeEG47DQMatztxNf93vomGLY9euCRqWGpAsWJx8dRoq",
  "key21": "3ZXe1HWJUC8D9deaUMLjAtsMDJt77yzfSxUf54CHQ2SR4gUEXdrku4dKFiTqDkEVWgBKvEz8NLqrG9PhVmJkd15U",
  "key22": "4Cb789paGK4pFx6rrfX3u97aa7LYZCbbXqVTBXakV5DSwYbwdW5XRkLJAgL1JEC62M1XE9cRAxj8WzdX3F5Z712w",
  "key23": "2in8hr3sPWnPetCYL7UEz62dGgfv242rpvU95PjUenc1AF9YHKhscEDfZ8cavLwAS5tRTzTQfuWdF9APqFca3JqZ",
  "key24": "UVsAsm7FFAD9DYjXLb9qtNUojQ6o7SrgSwcg9UxDusq9GKsps88kK3aJziFvL5i3TDzKMtuEu6VDz9f2wu5WtHR",
  "key25": "3sm27YUAWHGmXTKiQSoTnqYSnVs9VmuzW5PqK3xotNULf1GV68dAC83bMxJktGktbzK3WAeFVReUE1NvYwUWJdpq",
  "key26": "4HnptZTRbpiBmqX7m6WQHZF4bWL5fSCsEgAaVnKBuNKagpNPumHyuwP1ha9wX3mSQ8MP9o177SCjjZqdu5SrjrLi",
  "key27": "5qoY5oxaFm6sJifsyb7rGoPm3u28Y6LNjb6UqfWZHor7T8pGzoLRPJh4TUZrWx1HwkHDjnm85tAbhq7zPkooRDq9",
  "key28": "4CmFsRbzkeRxNsQk2Py8vQuEEPCCXLwiTAfnhVUVAbXu92CCxEkVQRe33SaQvGZ3K85kYzpJmQYRgNc2wdgkWrPA",
  "key29": "TBUSvVCikaUByNdDFqJM9aue2sZSLK1uckNR37qWVf92sFx9X2nLYArMjbA4mVBRniC1bjNV8XafsA7kLPNhjDY",
  "key30": "4rg4HpQ1K5AyuWR1d3CBqGiNvFc8Ns4Swim7Tq9avTyMpsrvLiRtDkwTvJbBauMhaSrbSjPL1BDLzPaGRgM6judw",
  "key31": "4mL8LZh3ryJBdkDgPqtJxNq1oAz9w84WTP3p9s79DNRmPBfaD2r64jCGeuEWQbJt6tfzfC4cJ9FiSbzz9Ciej8aN",
  "key32": "2tDZmVpUNcSnWd97wXaGoGvQ95m82Bsauf9gBoLHwf1HdMk7SBBVCVZAwPS1cpcwq7Wxz4pVZBarUyovKqUC7mbK",
  "key33": "2PZsnAADeaMPpw3nrFAuFKPUKKsEbwUMauJeqoFQFHyL6XJJw1K1bdxhsoHbzNq9mXKK8f335ui9r5UvxBHSV9MY",
  "key34": "3yQyHQMFAk1rc1dsNuvpt4EJ1qKrKsYPy3pPwW4TzKfNSPDCVvxxeELEES7kaAjBzmcJCXR8e8CA9S5jvhpZ8JXV",
  "key35": "4k7jpfhE22rM8pRx1fm7awEG1QsGsZp6PQ9ozYezsuCiZ19kCmkxzX4p7Rxyy13dpPFvQ7f4y9sRxH64bJB75Usb"
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
