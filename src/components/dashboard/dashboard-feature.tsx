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
    "3sDUj9We7j2tZmhR3K9WByfGAfmTxfj26xr71i2fWJdTaDGukkAiXp8852hh82wM631Yuns2DYe8RhANYSg8qeph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45YoVxjL8ABdNWAS6ujVbm8hJJTtsCM9z4Yo8gYEABeJu5LqPycPDQjFFgLXgrd8nbUe9AkAGBptt382ett1EBM7",
  "key1": "3qi75k1pr9S7QTEsVBvtJtE4N9duAkLExsf6gPgEqarEyi6kZDEQChyAR4wgWJZNevwZX3y9RUcqXXtB1jJi5QtM",
  "key2": "26gwQHwwMD6Df2E1kiuY95oK5h4TdSZBMjmsY7NizLHNihDNTgusWLK6R6EpYPfi5Zn147SozyBQ2dSxbgXut8Dh",
  "key3": "3jTuW3274pyzqKaELRFDEkcqzcYcFosoESax8DXD7QSBjGnUSaVxCEaRZFsCoCFXo34LcEVsRBFoUtukvTfK7Zw8",
  "key4": "PB9aoHW88ssNQoJdyWgePh5hXbFY3Ui2BcL1DgcA62fvCaDDBb9MVyuc8N2DtoY49T5dBCMFdH1KwSrxbgF3ehK",
  "key5": "2Eu9vedAn4tTYuPz5BRC9DQxywH4Vbgdbao2RFFHGFuz9kspgAFoSV9j8knCLAYKzLaaTKi4ZCEQfRPSKw4QVY1t",
  "key6": "3MuqYtzqpf9FP8AEqmatWjGss7KtEbfScZL2bHKaaGFd1zdGKVMaEq6ud8zbDd7euFkhpXzZW44JunqAxn5wbKkJ",
  "key7": "tmjy4kBytaSjBaaL8Q7BK16ag7z8a7Jk7pJTWT4dbR3bSwaBdjok3c4Q9vPeeeh5cmamrHViTKaTrPWwbZVrBs9",
  "key8": "3Qj42DHJG93FthmTZRLWedimjEEKKZywNQAxrXYKFrofaxmLzQrnz46rktMiHABou2bt7XjsUGbsVd9DuATNhDV5",
  "key9": "iiW6DvGF7pqeibbzKEj7NDRjX717nPUEDjZsBpPrhpo1GQeiC1Fb38VRfyW9us1xvaskoynyXxTYzMzrFhu3rzR",
  "key10": "5rzediRKXQwXqV6gq2nZttwij34WV4QM2wywe7Wgimha2hsFwZjYCR5H1yPJQRv2iud4Ko9WUdSHSxgHm5HuwJsn",
  "key11": "rRiKbezV3vg9Mr967dB6Bhm9nKfMS33hPPdxE3fS4jc7PqYJMJyo8Vmi5Trz7oFAkriaL1TNBovPshLYkFzmZLy",
  "key12": "4rS6rFVrq6uaDRrDDm6dMootsCpS3YQGa9JMNJmahxq5N3yfEKC5ZCVFsNbbuE6vrbkvKGnSrfQjiJtB64bAm9BB",
  "key13": "6nT74NC6NTgcWua34dzq7EjX4gC5i9oFoyiktMhHLQZjwcJPZkVXZL7EyGKvpZVChCUAHwPfyvxnCiVQPtjNB1Q",
  "key14": "3eMV4UDVF7bC5EbNs94LwASXQmBK4fLi1bL7FYQgrcV5LZfmVaEMuAx5Y4iH7sAsNPGfa53APDoCYTs3U3P5AULH",
  "key15": "2jBdrEJ566wRqLpBHUR2a9ztYzgJkecDHrMo133h9QjMSx6yGe4KjpR2YfqZ4CHfoxJ9EHiKpV4nQaFj9KN7XU2J",
  "key16": "22bTdwzVP53qnA8MxEgE5kKGKMMxcATCACikKCCP6pCfCuKPM9M37z6DpuymdezBEjaYBvPeaHheJRDvGXsNFzMT",
  "key17": "5MkXDZzMiPB6KK97q6kV2q2FLqsJ8sczhJ6Ka7vESQQmyEMyjEss3eN7UvdbHMrSvTxXyrWqSEjybxgzXosHKvuj",
  "key18": "4rSSgT43JWs8GuAe5V7bByV7mcP3P3RtW7ZQ9adWArkfPFMpo2J8MiNFYD72FEuRaCyxsUogYX7HTxLqRZDujsZm",
  "key19": "5tJiiAcjgUrLcHwaQBAjAXcBBnppgxz8trg9bkSSUrJ5vdEy8d61idArmWpQ3vn3h6R5EVm8W5Lfx8B63iy3GJbh",
  "key20": "5zC81pbBPq7zpcMdu1DHuPJzHK4NAQRYeP27jvMqFzcJmwoec3eF9JhcmEvhUpvRR2si8egDqxLLTHUG2DPhGVFD",
  "key21": "3fBa8STCQenDKSPjbXfAgXsy5sq5phvHnMWQdQvWYwYeM2KswP3e4cLXSm5Q2noKaGo7d7wh2w3xWnVuJddW1M7Q",
  "key22": "5BaZTSbupfN2Jx4dwDjvduzKrSordHpAyjgS83ZoN3ewiTTj8v66YN1vJLFmaq6CtjWFmbzQXLTmCJVDnhAPxPWy",
  "key23": "4PdVyhNfzwxWcX3sae379AfXpzM5QhU784m8LxnnDUkP4u8p1zqPstpe1Qk4n2dHmpg9jZxFiA1aNCJ14MC4iVcW",
  "key24": "PJxeHUgP51BwNDBjoaKZ7JYhMvUsdyxtGhmfQo6GFBLTCPLeEpKV7iXoNJQ1iS7nz9shu6EPdnf2ALT2sHxvTgb",
  "key25": "5tTDwkShKcRELM1WkWTCbcxuVVdoAbZz6eJQJwyFKgxfQaTw6QpfNeW7SiCXb1abTtQVn95j7TtBoJ2ezmAjwsre",
  "key26": "2Ktho117zfqP9vCsPVB3cCUNinBhSnKmddCvrhYKCkraSNxQpu1karvRgbhNMwvv9sNZ1FbRHWa9NP9Pd8KA8eXp",
  "key27": "43ovro8WhzTnpuhtdbh45cwBFEbBXwFqasJSM74KfJtggsRzmQkGiF5MtALbbmzcb77dbKrmzU7VFNNjvXGYne13",
  "key28": "bzvHnZtgg79oT5W836izjARQDDeEGddLPSjinQbKifYSA1RTSRSvZyaCvjXrrTdE4fNgGMVPLwKBnfaJw6YYnSS",
  "key29": "PdU7fcpPvnXX9uFa4YJ6foWEk3h75G6sU6rdpDdhvxkwtTa6QT6KLU2s2qKtLg6W8CVkaqAEKYPdPcqtjehGMS7",
  "key30": "GzRGxFqad7M9KWbQ72UDzqjtbzF3YVR9tynt8nVxsQj1aPSoybcNy2y4niXWK6MHpMDMkLBWx7cY7ZSLNdqbTs5",
  "key31": "5Qdx5YbC9a7e89F3xzyQ2GYcKuftAFsy4VQ7H3JZgAHUTqRqj194jiFX4QAfcXBS4mWFtL6A6AcZdNJvet3Ub73o",
  "key32": "5Q5SEJS693PkZhESAz4tMCGuq6nD5c3nrZFaz1obPQpZiB7Xx2GzrUipfozLjfEC8k51QhLznGc1wjykd3XqKcgP",
  "key33": "R985hMStaca47fPv7ioSwrcGco5gfCFSJUZt4RKY1GCg6JygAiXhueMCjsFaNDekZaupJEBH91X5teDzF5Y21V3",
  "key34": "5ZqCzNCUru9fcV2xo53yqGCR6F1r8vgZtfB24weK3Ejta8DeKjw8F1kfKJYKHCznzDvRU49bFDvHpMkjHzJfSrE1",
  "key35": "4b8MpX28JwpJhgp9spYWX9rGSHZUnu9BaHGjr6hnymxPBSXvaFEcsT9ePuXApqz9CJhtbQ3oZQPmEpaT16Xtu4qm",
  "key36": "37Asur6hrDL79YECJLNNB1mxJ3q2wzHLD4BjSU3GZ8NLBA5mcpzxx6eq9kUDerfYmb8rqHYU2LmxhZspVsqSxfRX",
  "key37": "3kMjkLmq88g9C8wtGEUig15R2qHef2uDyxcxaZnys8oYLDgQoUVMAa6LVL2Nut5KYqXnhSDf7BWnTzTfdgLcmpuZ",
  "key38": "24JbbXAnBjLWjGPV8Dc1cQSjaDDi6xz5phxc8NEqbPobCervrXuNELkSbCUXgW9dFqDmpD57rQ1UHh4Qz8GPaqFC",
  "key39": "56vSh141Eg2EDQw3xFC8WFezbnuTyujXovYXcCW9nHinVaHG1CzRnee9iTTPjihNQS7uUoTjP4SteZRVxiC2uNhn",
  "key40": "4MihnieiJ7zUYdZkP52fnxUfuUfrUTVPAd2T62FDdp2Z31tgwbzGxdJxbZw6xBCC1mQhcvm55YkUw6yeMsXpzy5c",
  "key41": "5q4LTt6xuS4Dy456WHqYKWf7nZPfTHnPdXBPDaAAoK1eQeghSEqR7EYi8udz6B7ogUCPkpFLPFd9M7AJLoXShQ62",
  "key42": "46HWKux8PkX5dfPdnTwjJhrr2NGdSN4L329hKzNvYoUUPXtnmfhLxZnwzVX3rR8iGbTPCScQ2h9GeJJhLZfubMSf",
  "key43": "4fyh71dJnBTHsVxvaH43MxFv9hK9LqBgW2odU79RH7K8iajoAzLBowrKZoVmUBQx3k4mcR8MK95zv6D73n4eQuh",
  "key44": "4qpasEoFiRQenrx1RxiAfzQQofMoPJSXFaSodPEs717t1v1kWYjbNWXekk5JQJpf6DMsQWJjYF1reQx3nUBLVznZ",
  "key45": "aFRjQV441QZ7w1bwkdPi76k6GBDAu3bxQkTFUmuCL46b5Cq8fxFR9VwTba95FZk9dMFoQUBLg9RV9oGpmmDETaX",
  "key46": "2QGAGQQbz45Xe3jmgYr8jLF6umWAHJyqeYB9CBtKkB2KF9DdnPuWFKeiQygegUpCwHDTZRmcWK9iQBvrUCF1AETk"
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
