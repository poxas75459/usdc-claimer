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
    "2DQaVaT9iXdWLnt5K5NvqbKbSg2dmZJsxGJ8GRReZgwth4KNELiQBQaR7juGnsgu7DiHoWXcrMDfYZ33oGF6Dm17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxGLAqpJzar4CnFiPy2ppM4p82e3R7tjt8TatfEwUE2NJJxB6mNHN25R6AYBanvkz5T8BRnwxa7hUnNp4RAxvpk",
  "key1": "mNaMY7ds7Dqc9A8zK4Cfmg1DpnmPc7r29gtE5nJiZGrvEqCiEQBXhtXkVvH2ScgcECM6LdwDKnpUvjjqjeMUuf1",
  "key2": "5hjJbG7SKUW1SQ8nD7FkGZ9HBJYSumaCE9s5HSmusKn7459qRV3fonHn8FPJjn6HEMM3FBfmBy3wGXpAjmGWAm1z",
  "key3": "4BSE4L91Mq8Qor5hoPGXjWwiLsMJnHFLYgUnRSQk1yNQF74VUN3cMBrMTygCoa3SwKEWavizt2w2bUrAkQZHGtkN",
  "key4": "3eQrY6XcZDN52fKJi6FxRqWGdL6kH43uq9ugPDEvGHzgSHrDdEytQKaPJgp94JR3NeHfJgTkS8ozChN8becp3v6J",
  "key5": "fyJfg1X65gnb6WaHukH1wgLZTeN2vRXUpCVy9Bd5U5AifMEqgaJnU1CydgBhFuLMTkqecjL3sSU1ryruPSXQvF2",
  "key6": "5e3k452xGbHpWLqCBgiQJV9z1LfaGmwTnuHXDJsoWBoF9nRa8BLMXLbU6exKqpvf1FaR8u3HoC4K5exVx5bygpjg",
  "key7": "4RoBEuqjrxSARYUNcNyifxc85aMYnhYdHDZ7XhZTwzU7kvgzfYQtxVDUsPSW8fchbnfpSkNRKQ1EPTLLJ2rGR7Bi",
  "key8": "3FCm6PNk7MSNu8yxtStjX6UsHiv1ePxApzBj7pXmDdE5TEHsVr8nNjqodzPMhEUXUEiXzd1pVZYQbpZzpGvaXng3",
  "key9": "5FWoV3vvhSX9twYCNbPBxvwewB8DJaxcWNHjda75s3GKAWqPKYCWWBjYPWjuaHLFPdpSks7DEFctBXjyRcfXCBK8",
  "key10": "2g1gjtEW6wBVgFKqTaNJ1UeQkUZk1bWVNKUuQNFZxN9WgvkiQL4k1oRJ7xe6fX9UdeWirVx9QBa9AyBEcRdEbMev",
  "key11": "47LNioqN5XM4QYBibQiXCLYBomdCgQrGPSpQ4zQnU4CcELdewrjZcAUwQ5rR2tL2UmqtjnmvRSnmFWXYMKBY576y",
  "key12": "5y6YsLtMC8FCHPr8CTWedzpYTLeBd8uHhw5bgddPVTHTQd86ShLzyd2buyju1PQ8zyTaDQwUdd1KZGmcPRx54Ue9",
  "key13": "2H7C3Q23o6Vvf1DdWxduqN1NuaLDb82Whxnd7JMBWgpEfj2MCAzLoXrEVfoLzBLKSk3FrkuZCLQNuEaHmi9rUBQM",
  "key14": "BuGhX56CxrzhCY1QVCVxrgQHqJtWAqVJtAJZVxCmXTYmmthXc6N223bNgyQKEUxfwt6LcayWK2h81xvzfUqTsSg",
  "key15": "BJnfbddYFCYWBCvpp9fp5jxBh521fwxyMUu27nDa4a6hq3MsMZoPQ5XhMQunvdTKkhNRshvqkshrdwh1e9ow3yN",
  "key16": "mQ1hFh8GCVh7hzuy25Vzb5whjzTAY8HfJVGWhbMbXF1BywQWi1gohPq8G2Ap2TXzJMwaBsYjK7Bmq2wMYjUVtAE",
  "key17": "3G4g2saACvy83AJuYoJBL4wck84Gr39pQw6ig5Mw5BR6tF4wBX4oT8tQ1CscqtAvcoBeZfYkJgX3ccsdszV24JBJ",
  "key18": "63dr1iuoBfCh7ArqiUMctnm4BUdVBttAVtZcjXaJiyLVXc7gX3WexYXdLuuBzPsRFiEeFfYGLLA3M9nLJ5vDdnhZ",
  "key19": "62ckAFikVBqANNQByVRtSfZCatBryLKmysevBiVac3V9iNAjts2qbnFc2ykJYP14VaBrndzBQR69s81hheLzSytG",
  "key20": "4jw7HtybdcttevK43LfAJW7PYJzWeF1xbpAZatLJ4TZVMFdkoJWgD7c3PnDAY6YDj1qUbBkMFWozpxtJ2oy1UdgT",
  "key21": "34LWE5B6CqUUJDQcYVsps6942gQget9fpcXbEbBK8X6anpevJx4ZFG8oHFvsMkrCHPfKKpR8zJywoPAjmWdqbXqw",
  "key22": "3Lf4LQXWnTeznaqEDjZdpMFSFni8Vy5MTSnVC3uPYKjs5L4sUDMDAczD1AXpBTcAin9T68t4h8VuGHidHxcw7QLY",
  "key23": "3Rzu52yeufpLawqxjUybZeazVLcLZtpnCWgjLsuYYXHHKFV5PXFbdFwzA9wTPtUpf7ztb5Wz8SRrgktVmXH6oXzM",
  "key24": "32G9DHBX8oSyTNhYm7mNqE43m74mR8ewuqG2pAWGu86XR1HWmEZZAufng2SDyiRNWduhUTbcTJxS9Mu9iTZga5wn",
  "key25": "5ujYGHBSvVu8o34GdHVLYcd4zZ2C6Xz9ptmBFWn3hiuNSpmrPgDZUfZ1Txaak27QpADkHoVcLPmGiHWk8GLVFRBp",
  "key26": "4da5rdXHZ77u54mtKXDGkHJQyLGcis3MjuTpzEcbzDoebKYScVmjZWrZnWN86D5bGwtfiH9amCNudpoaCCD6Lovb",
  "key27": "3Nwk3aFW7PoEr1SXeMRXFw57RdXLp1ogsED8yv2hFpgKfBjKPhaT28AYSayqqxe4sT2RcxCh1SuJRoYoNTDAwjsv",
  "key28": "3AqmNFpbU8ZarKsQPvayZvdvZNznH4d6sXhcE5LiqC17aUFgTm873DaTHPooK9SKMTeE7gHfQU5H9yWpYJGJsKaz",
  "key29": "4ZsjQKsisYq16QQuQfT3DEfBFkDoKbeR4hWBVwJa19dqudr22qugFo85j71eFQmnpKxTBAKuR9dfoEuMt5gW52yq",
  "key30": "47zaHgzvuKeuJ1UMZPyAnAmF4gTREv4HvDRnhbN6fMSpndZkxZy2iCiMmPsVfiy2fCyAQm87UV6ttAEoj5oaG2gH",
  "key31": "37aCsP2phHxXmMBARGcjB4ot8cjP6oCyCKq5uyJ2kPXQr11f7DofQJeNw3ND6fh3rViZ5RVxMwhzearX6z7i9Abu",
  "key32": "3yXgnZzqCG4eYiEDNrcxF1RozdZZHYB7thGppSGB4nCaK5ieK7wn9bc2izwptjHtG1DEN7LNNGzPLVwUVDYiny84",
  "key33": "31BjdCVEZvsDgbPCzXQa7a4r1MnAwTSGEssxa7iUqVnvpNSQv8K31M8u9WtgPodcKsw6U74PxsDmiq8GMRJnxL1n",
  "key34": "5nVgcRW11JSayhqMkDVbPpHX7b2BCPDBQm5paLvYPRe5kGfRDoKQ9zPGXSQqbnt5RjF3zJLGDH2z8e8AGd2GRf6q",
  "key35": "2P56ngfRApbj857ZqpDbztMXpTbnXmcL91aXWeabpHT1gbg1Ta3ov3WxTUYKKv9uGnd1gDg7vbAkcv9X1y9qP627",
  "key36": "avLM2xSMnad3SVzFTYGt4ZDz65Y7gHvcFkV5FWUT32nLPxhtSFQkhfFdiAZJkAYcoUqpsrNtRP2HfJsTiPr49Xg",
  "key37": "29fTmEtg2nx9Dx53LFoxwtcnDtJVQEvVvsYkG3TdK22p7HmZLxRiBoz4tm6bdQFSnqjbgC7Y3ey3LiH8PMBdMr56",
  "key38": "4QdpcabUz6rrGKBzxoAf4Cp7dfw95U1zJGRaJJcNF3ccPjgy2a22YUgGWiwStLwe9DUuArtTx8x79SabBXfiGr2b",
  "key39": "46kdUxQMYbkthf4RWMMV9As5Y1JQrtC78BAHEU3KVPfx2UVPfMN2Ho6Svmf3T1EEPrW8W7w31sN5kvKjTNqm7Czv",
  "key40": "2wj3wRvZxQ47wwfBpnjwHMCwuKRypzP43sycWorrUWwWn3y6VU1UfTPmPQDiDpsMXT9LCpmEa45JBxFzExPJ8GMZ",
  "key41": "ZojD48jb96dvknFVsfMRhBVCpjkoWDfVjQvZGM8b5zRB5WcKemY63hGtrjmZadth5crGAp8mcJdK2qNievUzkLf",
  "key42": "3UHgTmefQrjaGs7y6NR7tCQajGBNJ9dD2HUvp6zEgQ12ZVbd2VcSpm9aiAC11cZFbvkgotmAdwRWNs68t7uJnvUo",
  "key43": "48gtwxuDGELk4B79AbineSWcQL2QPhbWnGvYcupFJ5hWenPZJ7LCQrhujtLXoYMLhiU2L6uTjmiPSD3g25Vkf18L",
  "key44": "2LAtHyVCkRW17djYRwcvypeieiZ1AiGiwcnWrnNgtAzjCgsMdhriaBJMnH9BggowWVgm4urkvYw458YZh6kn4iND",
  "key45": "25iRZdRWJG2GmWudKt8jxK2SfYFD5qR7knF2pLKL9DLLJkiRgs3YKHnssBTaft1LkpRp2CmWXh88YdYj1us2ehvk",
  "key46": "3wGhmfi2wzwEA1KA67Bm6LHE46cJpd5Lnj4xYceVYdAFLnMSnrfVej9dvVKiiZNK88TZ3vZ5o6yQN781EaipobZE"
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
