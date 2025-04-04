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
    "2TNaEUdd13ERspcqq1Nv7BKHkQ8f2tkoLkV3X45ufyC1MNkMRj1yywk4DiD8XPuMBhB6aLNbDeMzhgRVUybe2zVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nv7MqnsEWPmKbMvJLkQKPxPhLUMj9PXKBRJXTh65CtDeB1NM1pLYRaETTzNNZvRoSuyFvzKNMMnA9Ds5TnL3tsw",
  "key1": "35PtTNKAR2fbsQm5sExHaDCaBf1dEEXF7Zm3j3ngs9K7gS5DPx5SVTjLTEGRgwhCi7WJ2VB4KUzJRh52vkMSy2uv",
  "key2": "RCQwbEAPo99d6MysciLG6ow9MqFF7ceugi28JGzm7HpXFCBKjyhXywndy4MwPR7LxGPj57Ehy9Qb9qBsh359KSN",
  "key3": "4JXnt873nAapXhfSVeNWk36xNEkNFo1cwkP7teSyhVbdyPjFHJkKtY8hpSDkBxXSvmBDHN9Cq8RqaEK9q368nwAi",
  "key4": "2vssMUsQGckyZqV5yXfKuUpxqbFHpH57A4rw49jdE3D8sjU6XRZQyRnRmDsU1oABcGF2DCCWYmtVeTUQ2MZpkWdE",
  "key5": "XFYe8BmTjwrX7RwJtKzwXMgSchhD6Vbonx4HyvAKFp3Dc3dpKjWWjJjKgomeAhAMQF7nA7PSBpk6KrTqcD88g7J",
  "key6": "5ikPYWkafKr1k1Xg8LbtCHDweMdHQ55aCghqpVcgfmf2jpwh54iZ3UjoKudGfmG1iJ5twPDaz2L9aAn5QbNtJ13e",
  "key7": "4dAzHztvQTgV4dMY5TpJPDJYSvGksU6eVMMxRuZa9mMgCwFBNndErnJmnoNn9iG9EUC89sdCVFpcuy7EJaGzSggU",
  "key8": "prz1jGVM5rt6yPDFrQy4vQzE7hfS8JaYcDFBTmyH3DBWzLsJQex835dfawKBdNZrmbyzsZPFtZHpGGZi46KGGEz",
  "key9": "26NhPG82TYkq2LvCm788B3hZxmbBmkoffKvfpJBGNntULGu316nj88QNf74DEbWnTDacGebLSUFHzmYPHBrhHgdR",
  "key10": "4Gd59jGsrseM7cfgxiRBvQxFBuNVRY593vPZt83bGycG4ed1GtRraaJPjh4sy7fsqg4u5WA8649HPcCHkGTzWrtF",
  "key11": "3qefK4cXwAqZ41xYGZRQ1y3kL4Nx9S1mdE7pdViJyBFW1RqHNFG2AgW1eBCEwVgnoZfX43DkZCEdpc3KTXppRkSh",
  "key12": "4HYYeTBwJHs55mJ31p9DKW3xbHHnsXYiW9BtEmFPw3ByCMtvMW1gcain9iMuBMPboUWJ8amqaMvsTHNAq3bstKyw",
  "key13": "3vo4H2a9m5n6n7sqNHjRRjbE7FaEWjdVLaAEqavUuLRacZNz8kx4WUuxPeQQMdhVfHxcXpgKH3hptLcV6YYTUSCv",
  "key14": "habj3KJtHsP7JE7zJcpUYGnerLQd8XqNj6jZ1HCnShTam7dFbAS4nAraUNY9Xq6ewuRCsF3pozDKskwZ7WAJ8nn",
  "key15": "5ptCSoPwCNriJYKYD7xTbgYFJVD3ivUzAiLkRRmb9B2RD8bkQuyd5hr7bnCzrJLcJH9Et5AB4XQYiCtcXCyUQy2J",
  "key16": "2fKFRv2663H21dutcMKN6SQCxMGCUQsPqzTMkJX8cNVUmtuygjeFAn8CD8ZnZqMfzXB4csuQnAx6Vkpi8sHBFbu5",
  "key17": "UZfZouAG3mjdBWpAJVHf92hN6Aw8UnHzzBgYNcw8UzNFjprhLb7ey1nfZdTcbMym2v1LGzz35fx3VqkeYxpyz6c",
  "key18": "4EVvRBbYeTLkhvE4axmUKe2Vx9xSMXZdobBNNRAEsXfwy6ZGUdHkhijmKJtNGa4hC5Rk7YBAhB53diHbDALBvmnw",
  "key19": "2Hvpb7Wq5uVEsqxqrn9C1ENVJYthGQYThGY7yyVHDNuK7jTvw9srrcPsR316ZHT1WoKzYnHX5jkjEggSEp9E3Mua",
  "key20": "27tH5uFDWSG2fqzhhQjCVCaoAFbeUPE6iTaiYWoSUrBZRkXzQosGjPoX65fVsVnDd5jZJ6sRb9Ey7etY9DWUcKKt",
  "key21": "sJiGpX4uenTNPSE71wNCXsGPPbWEP6eonwKL7XLwGZ4MjWxc7vt2WriPkkunY2zAK2j7ZANAAELpZn6fdoVAZVw",
  "key22": "2ZKXDVjx14CtqxLRBvGT14veuTSHrno4Mfovu3npWUYEzxMciaRRFpPFXvr2oYakyc9mqvziV3YAHSRvxusbgz2v",
  "key23": "6zk4eGDXJTGF29xCNetJvxRvBVuebNy7qsbWGuLTAd5TQ7y2vQwt5oTHntsMyynFCE5Acf2hjDQyXLAxLjwM5Sc",
  "key24": "51ghzQy9616nMwXH4upyPoT2di8fzCu4Dq33Sc8QaDZQznupx8HKj2Hk5semSJuDXFveRwfJU9qChzd11orWVRuX",
  "key25": "2WAVx6dwZPva99Zao9UtLKC6r3hRQH5Sqa7zRxJ5NNvNnBHkauWALsU7Jun7U9DD5A6EJPxM1H8HsqR2zu3DikqF",
  "key26": "3NyMR3AMidY36ahukJapviaEkBigTjYRStLmPeSRZgV1ppEctiTid7CxgDisX4HDGacmud7jb67eGueknt9kZD7p",
  "key27": "5dprkJbgrMNvCcdFyuxozVQ4Fp3DMMg89TSkc1z9ihRpNr1pyfmohfhU4FnApKG4AgF6WuJRB6LBhZZVGuPfmtDs",
  "key28": "2LBTzuejdG3u5V7aGiovVkQj7iopQ7SQLw9V8wb9z13MZXE3ECW5jsAP7Jm2Eagmdjg2oRj3WHRs3XWaHYGAF7ci",
  "key29": "4uDR9a9yBHzuE4ZFbyzTyUcf7CzfoFp4jWjayRZQ3tthraXzBdktXJLV6SiSpZUi9QLa8dZLeKvMDGA7bXb1f81y",
  "key30": "546qRYtP97ACAqiPZFwQYn4FWUhDoMHdc9ZuhRt6XmfcetTNhdm6pK8VTrnGy2ttB9byV7sPQLYobXSCaAqS1mxn",
  "key31": "4mv66teaBWrNpBDE2QGvCVgACeZppj5Geomyqtja3NAN5nm7zTzCJq5q9Hnfi3CmQmT6LWEwT1j7wStWTNzE8T1K",
  "key32": "2mGbWvHXgJMbb2S7VwRv3ESLntGXFq4Dffzsh1TNFCZJxKnnYCPDLx9FPf8VsMxgeLCLRRvZo43HQhbzgFX99Mm7",
  "key33": "3FYwu2ZWq77hpvSi9FEjhHL5fDyJ4fht2PijPuD2wBQ7pvkcUGYRjaU3vPWdhjmQo7k4k3EUpLAsN9HZ6YPThjEx",
  "key34": "4gTXMvtGT7KPL9edsZYaaE448xXrWTDSqAPv3tJUEGrhE677TJ9NFsXiiEaz3Bc1ZedsLhnqZYFuPjEWvbY9MDzy",
  "key35": "32ddZDXy3tHJxygcFAjJXwzFzZzv6U7hLsLk2HdHrTqtayiJ5ATD4iRxAMoG6CsZEa5iizv5YEgCfAxWVq4cppwd",
  "key36": "sRnuGofwCEMdBia3tz9pkUwcTHbgSqDbXqfmnfLsEvwdGQVvg5rpPSyz84HW9LY1RFnQwDNmqBWzRHAyebAqNC5",
  "key37": "5YuTEDBPCHnhcTZTiAzKTEAqpETkjSNW7h6pkEAmwiiMR1XJoRQeEHXm6A6UcZ9w9BrQAdamXBd2sfgStRhqjcsu",
  "key38": "5Zx5yjo84m2f1YZW9WWH78EuHUNvxXVw59EYeY32KLirjYv6YNhQYdxZrH4ssodJepJkTGULbEwBoU5cs4ihzAGd",
  "key39": "2A2FbaxGzgFdtJgz7XgQJA8jPHkc6fGSdVwgiAJL8csPmgep8eEqScjHWMk8Rn1VwwwMfVoWyhMPcbGBM9DfwKRv",
  "key40": "4TaM8vy9Zq8p176YFKKi2UwgBJ64AgfmMFpgvPduGxk8Tg6Bgx5WhmNdWtFQW5zjPcMNJZY3gc6dj1mAavd8sYsj",
  "key41": "u3Srjy3e6dngwCH1oZgGzSvXamCtvN9rTzbCUmFiK3rqmV7PMVu3QbkASXwex4ianaDmUNcMb7uKMH7CmuvCfmb",
  "key42": "pYa4q64T5nAezD33zbTUFnQ75ttrqXoKeMr5S7C6xjdGToVtFViYr6Jd65wkFGATNAoccRX5LA166L8rWQK5TvM",
  "key43": "5hoWPgqjA1Vtxv8psPybe1XHNodpbVknjQYF6YKML8q2QY1wtTyh3GAo1v3c2yKqKEDnsDJqrpN8naMTQ5Fi26ZV",
  "key44": "4i1dLszwVfX5XwdTvfV5m9z2sA3xbqTXRqS3qp1o49CvE6Z6RSEtr2tHKeWJssHtMvhVUAcoesN1aGiM1e53TTBW",
  "key45": "3ckJjhSkTc6VR9iUWeq1SjPxZofa51VbZQ86Ax5jNomwW1JdwctxzEpC1QuZsE6GLpXm9bsjN4BUbsskyWWhUzYP",
  "key46": "5zjHEMeDoRzqPcTc9nSLBG4kP5swbGKUVaZn8bGCUM1VN1whAcdT5izhdoTJQDBN8XiPxaubGsWLFmBNEUtyxzZV",
  "key47": "5E4N36MaZ2tq5McBMhY62draLnJVjMgUQihWZcMmA4LKj7VnBvFogywWBED6gLFF4mSBBYdNTH2RiM3dfxF5WUqE",
  "key48": "265trxB2jMxDRAPp95PwTrPdWPZuhctzX4xiWmcjDq5D1YT84kqtez6Y4PJCvqxphwCbDprVdCc2sCf7f9YSvzMv"
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
