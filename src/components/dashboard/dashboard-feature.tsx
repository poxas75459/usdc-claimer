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
    "2yaUUtkNt6v1AVoBakpKzwHLttpxPpaTZwZtuy5cKhR6DF2jzRd3AcA5VS7sD8pbMP8qFv5xkWFUHSm4wf7jEYFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKomyaPv27kcuw1PiRn9Ay2qxieKqMJXDXQckh63wPiiWZ8SLs6nYxTg5TdcF7xoMTRHGzmExWKjCPfm9fgD3Zw",
  "key1": "vErYAGa7ToBQQb52h4gxku5MUbHcMLYLCvj8iZyCqfzFMdmUZQFQ18HmEvdmnLirkNbk7NNT9DLtcUXJ1tyedzu",
  "key2": "2yw28zYUtiF1q2ULERQaykS13p1LDdtM7fKWLDpG1ig823QrSF9MMWwuTVTrf8RnzD6TxE72wTczWgqPx4QLFChZ",
  "key3": "2MJed3NqbJkqgaXHiJsTpHbzd3FmW8zhwFugGubVTNvB12AdXTWeg2MRPvQba7egNCmXBuv8geJmysxcbpLchEuC",
  "key4": "4tEVhgHhQ4YDAns3h4bSJGMubTRQihB3yEkk1EXHqzezXiZZsbPueUfpJxLqJLrFsHr4NgbZL2VCUsKVxjc6U52p",
  "key5": "2usVo55eybogf5XY6Ny3gnkN5xnNot4JUSowNJ2iiG8uzD7ESTiDqegaTTD64Pn15xcDgMy2UoEBJJ4FmgNP2e3e",
  "key6": "4r6bPviXCbJnwau7UbWWCZvQkxwfC52fGAbtzDJsQ1esf41SmFtDr1wTw6UFF3vfa4RrXGihrM2jdtCxWNQotaQ4",
  "key7": "q2NEmEX3jn7FiGHNMnT2YxdBhHwyaun1Uj37dEuPYbHaUuNoW9DpAbpdAH32TM5GRe8WoutvHUZXWZSf7NqM2vc",
  "key8": "ABD3YQhaXay3eLUZM2rtz1rNDfGduAhLuXoGTuPfVT9dhJiDT9VajgrZUgpVNUPuXcfVZGSGszgZ4k3eaCiwe7c",
  "key9": "5Xw9cPKzWcyaFxCYDpoqKNRbdXbjdUmZ3NvhBRjz97ng11QKMcPhC2ixLpPUTdhgsEbXVrVoTaMhkmZfBynojTKR",
  "key10": "3FyQeJbKwEfyi5KkCR4nwjMErje26uF1BiGqCdE1GJU3VGYhfBPbwFoUUaeAVuwE3fwyeat7oz2f1aDnK1iCKfML",
  "key11": "5kYPKA8jkwqsvDtwyKLytfV6TGFQPSvKYAzDbGAtjadCf2Q93FhzdX9bWv7D4VgaLjHukPC242byFswVv7WCj9T8",
  "key12": "4beyocXvAriJqNtXpNFj6a3v1qqBKG44JMHiV8zrqEJN1AobGaiB1umnGqT8ePyAv8TKbeRotj2euQ1zam7aADrW",
  "key13": "wmreKsC8faqi1wSkExUwNJnyvE14noufd4U32DrZZzr7ofQfdzicnULeKTLvnmUTaeSpv56XTPk22RRxuoDhcXq",
  "key14": "4AaXUYnDcaeL4jxywBwkgzQqT1sCUo7KNsNvQ3FhLWh2T8jFbFwMLcA514gPetdPAHxuhwSziuByZKjkwvLXYFZs",
  "key15": "3EuTMtLATYTANGHBsU4s9wSP4AEzNv85tyZVtUD7cMiCxpU2xUWbLPGuWQ1LriWvD8b8A8FzK79DcNcyW6qzBjWc",
  "key16": "5EjN1uc6z48ZtuqTbZAvoN3vdEMLnPkdTjea7ytzW8gDe5SVb7vKg8RRSk4aeyYPvjZGQRepp7XpewA64S4VTTTg",
  "key17": "jjmTBDz1e4fTWmvUgjXZsuADbUQC1tVmVbSR7XGtushWGSZDPAsngrwvhryUniwnaq8V8ZMKK4d31DmME8g9exN",
  "key18": "5MRXtutjEb1U37DQLj2kTqqpC9zzdFLW7XvnB5pZg4SS6FuSRK7vMGb3mXWoBYKpZhiVNPMTmTuChpTcyMDkUVUj",
  "key19": "3cdBi6ZMUyceEhPUCCbxok6uxjXzxpKamZC1WPLFcipZ8ignYN98EpeASqVor811921MFJm2AMgUfeGz24gNf5aM",
  "key20": "3moWR6YnJu1KrGqsgNWNthM8U5WndSQwEmPLB8aLQKFHQB6HQRxcRKsHhvcyYwbyX8dXNK7JHMUzTEpuUzxAz8hz",
  "key21": "5w922U4JiteyJdzQGZjxXuxw2PLnrD7dh2HXg4pHkSm1ABhunKC741SrqHyNgkajMzsGd5qWkJxU7xTSMcsrsGtk",
  "key22": "yttXEVuaurVyYjfG9CApY4JqZ3Jt27t8o22FfjxLWMPZcBt9kQEw6BB19gHaxeEVbNVqJP6YzCFRFYVEtthvDZx",
  "key23": "2vVPQeJ3oNavJhVLTyKAjzLB58W2rngSFShfv6Dh1uuVoDsZxBA2aAzQMgP4LDHqF69xALrvCjCAfDXY6soTxuGp",
  "key24": "2W7sqEQgRwSc8h5SUygbYYC34h67a8rX9voteKZJXoLQhJRYaZEY9XcAK5Egf8sN9aUjXfTGne55ysnKYWJcrna9",
  "key25": "48DQjhvh7CtyfWYw9XhxQcspJtwrg6STSnn5j4cNAHSs8GvgEVxRd75kX7JcamPLa2HkSiVHhxHYV7M5mv6fPQrd",
  "key26": "3MTEB6V91ANPCswVJC7hc7BXG3iUDUQP9s1y9ZFVZvh2p1di4R97fD8wYr5VY4JHvAPoaGMxLCzP7eV9Vn34Bf46",
  "key27": "4QQdbeYYJaD9MuYo1mL2o78eM86A99wedksdhUDE2px7mg4mcXRyghHmsyqwSJg9ECUH2uEBWgywzsUPnKRWwxjP",
  "key28": "4KN4PvwxRb1devrvLHRbK9U3N1eoTSg31Euvs33CWfNHvHqmu1obpMx15adQUhUeDQQzuEUJK2rdytKwtK59Dszy",
  "key29": "5vpZhahy9VERWNiiyXERAZrC4NYo9sxh4WLSJHhykKC3tb2psfZAMWYkx6YxXdJEobCsmJ1BYWyE8MfUiFXhMdvn",
  "key30": "4vpdKYRZBWSsHJiwsBNtNmKdFxYu2orNkPdB2uS8KVGLQcputkoyC7vEuxXX8Gtmkvu1k4BZM7JQDB84ufX9x2bp",
  "key31": "4eHMbCGiR7UVXwFYFqt8UePjbZVL1MvLtDuMLVEpQ7xtn8raYVHFVa7q5WWBUF328opqX77shquDSAyBx9emUq9G",
  "key32": "3F7t3kBmwADZzjPxZm8HMP8KzQmokGbAs4A4XRNLiN4hqD5VvDG29hcUCRm18LD4a177mbshX6p4oVmN7pzMpCwL",
  "key33": "5wyuLNcZJvYuLTCiB2TcUC85uKVM7PM1qR3RRekY4GFTSrUVjEratNEPkxsntjWh8gUCJBTR6nMy74rHHcM9ntvk",
  "key34": "2PUGtur2gX3fw5mHbxQ4GMnaskv954agHrQKmbTnKKXBKqE7KyPnNPdrDfqd72WxatpqXGzhPjpCVorf5RLg7m8v",
  "key35": "5FLUcBaLce7hY94UcoSsvRv2HzNM32PQqJUMgfMnKaqSCBhjkkMmBuPnY9XnALirFFKHrMutRu4HJVmefGybEA5M",
  "key36": "2EBk6NyGJw2pQAoYDsJ9bYxD1iD5VpTzaztFuLsGEpY5V9HnJnGPu3fMBYL8Umpw8QBDfGUXJGY8ya4TDN1TfBF1",
  "key37": "2Y4x6x3GtoG66FKbBUKY5c35gjEysm2VEqHoDVAay14ujdAynuViP73SBUu1Y4KjLBCSfAbZCEBBsSpMr4V4j2y8",
  "key38": "4tD4vH6HhXfeG6cqGwjJugVMxgg4bm2q2T3veUSzD2gxzEjEoBHT2AcMnuGPKvxLXqfFPKLDLrsUoyR2BRgcCKRs",
  "key39": "5fSBnb6zWitbM4ZXnnfp9fdxrtjXc9ToYU9bPhchksNAGqjhrTPnSLA3FaJkPqxF783vGzKDsGNeTVUoTMoPsztb",
  "key40": "3sTwh8y6nVM4kdYjoegyCw75CPC81KFzS9LMdEzDU6NHi6i3fgHpsytCMGsakBKuFDnQDse1HekiXnbPU4LfSidg",
  "key41": "2T7jCG6Lq9uS88dvN5sWbfgMPuzkhzX1QopJ1gNvpi54MZyM6awunTZXiigA5i8jvzQhLQwDou7DFmMPXXWdVZSv",
  "key42": "2SeubrNQMor2rBagBLQ4mFZLuzFFcSL1zXWbpaLzP9m8wGVDVkzbszYQuQ4Z3Uh467Qzf5NsKaYweYqMHPYpVHmy",
  "key43": "5nX3pk6KsFXU6wRmuaJqLKZ6tyvuAbe7nAkiyZ6iN5zuNJzwiypmzLiQtJqpEkfAJ6vBQtMJtKgsmjYuyfaXG2mJ",
  "key44": "4kH13tY1bZe236rHYw9Zypo5DJztEuUvSUKXCT57QLcfZxtUkdQu2JrbL1bYkupWfc4hpGgZQVuzyqgdeejbBR87",
  "key45": "5SgTqUuG2hrJLQicGB8pgULYqmo1LL1t1Mn9wXsLrHkCk8DnaP8qiDGTfueUM8ajUVCvw325E3uwXrbauYME2t9W",
  "key46": "6RVtCCkbYsYxtRTJi9F5CDdCzXqkPaGioh9nP2YJQKKyFmjLLsLR8PfrTnNroPCzqPU2rbExPfxMtByeowCUsnL"
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
