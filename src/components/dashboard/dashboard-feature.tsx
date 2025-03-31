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
    "hvKernefDnHq4mfodLCdypJfSMiW4HA7Mex1dA4N4UqtDPNpSSyhrH2P1TDrhASAKsnx1p1feASfYyjgSmGqsJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LotW1SKWLEmHCX7TBw91T6oYWNFDxD4KvkDwECVPVuwhNMcuecgYrvz5hVjBwtm4C1mUFEQdkbbbTDQLxFXQucz",
  "key1": "5BxwqvzqLHLToT25DdvMQ4vEaosHU15TWjsLq6vVzsRQPsmMKnopyA6EpdYJpY1PoPufBwzs9LrXsqn7vmj2ykgi",
  "key2": "5fXm5ZQmmGwfEZksPJ7VKPQQU8tBqk3w6P9JFBav3FFYTBEg27rVi8mWAHeUmf1oTnZetVy9RGgJ3kyjhrfBhgGz",
  "key3": "25CNw8jchDCPqDtDAKyjL2s81YN6GiQi29Ere4qRyhDoo4U4UXWBhpvZ8Z3WoRsCNhShC927Ho6yVS2i91EG6HFQ",
  "key4": "3waLCiARi7aDcttZPqvJktmPkFMPMGB7B8fCBD3Ri6urrkjvEJdML4vW8soS7KB85TY6HoHW7F85xmdzYM41V44h",
  "key5": "4tSBcdohJgMZYSZoiexcKzky7v8mH7uSCrpQgykb7pNXimh5BaAAjdPhau6sTZxWMSLmuNPdkLoxuNTmWUu9ceW8",
  "key6": "4b1m7qZvBtkmnzBrJCkveSi74jNW4KDcL6MWsWfQBQLrVNsZFzWV9hS15vMzDgfKwx6yhS6uoFUxvayLUhb8uFaP",
  "key7": "4VEYFeuS3qnG88PzWKdjNrYuKedgfrXvcVwT9FVr6mdGLJpxEbtXbDskUokJCZXPaxgYqLvMZ1ZbaHJazaWrdDWy",
  "key8": "5LwQmgFTuzghgUvSqh2TT7P9dXuF9Ya8LgHyts8UijubyvPSYj9kjaLDUnS7b71QoSFiuFoWW18RkJwJ57MbdHe6",
  "key9": "5SnWsCysLepeZrQGzcyzM4qCoUBe8jqEaome67HiM3ShPGvhS97kTCmzBE3BCMkNFmQ9pKMfgkuEbg7T5P8d1u2G",
  "key10": "2rV4CrxbpjjWNqMtYvhVHUqHm3ehrbwb49NLX4DQug6txr3QR1kCshhBVRYHBTftv2CSAfD2VhCPJhiNmRyeGjGf",
  "key11": "4HQPRtf8jeovMVcvLPgc4Nq1iKkvYLEG3HY9KC9sZJg5ss5ARNXNJYifYPuAAuSc2hoQC4nQxbtCFcUD5N6HLsgR",
  "key12": "2z7Mm3DPPdyPrsdDqohTSVhxxMnQ5ZsfAiuBUAG4w5uEeDQvC5m9gi6NvtfWCsM61NAJH1nhJ1NZ4PynxSTtjdcQ",
  "key13": "5LHdNWrazcDp7WRVfV6283DGinGvmk83wnDDYho36i1nb5aYa4QaFuURHZgJPLmwuRy99g5C3e6raicn4Zh7ydsn",
  "key14": "3HMEopDNfei7tXZfUpVcweA4GWTXcNJepJVpYBFAXGvRjrTZYdrE63LeStTNRn64QkhtVHSArGegVBfxkmmKDBAt",
  "key15": "2Undu7T6H9Pgo6mXtbwm97aZHczGZKduEC552teKAgjSxsvsgBmPRa8RrXB366NJqrcAXzWuTpVYa1N5qNYexjno",
  "key16": "3NuC8VBwuYaSEf7ruoiSSc7N5YTNKawZCTSmLrwcwQJMgV9t1oxucubkb1WCK4xjcdCPbwfns4XPf9iNbNovoJQ1",
  "key17": "28J5cTdCCQj4QKjV6uEMMt6LWzb8z6pJtjj2BzN6SjPWcrKXSP3Vad3oFF61XQYEEnsYGJMNxBVyxNojrBb9u7Y3",
  "key18": "5zTTYnCKSqc41ZLp66caPDcbjXFcK2azBqfduEjgt3Gs5GtdxD9Jm3kqJXci5KndgWqT75PZuTCPH4b82THXAerG",
  "key19": "5YKT3tWWJ1UDbJb7Tie4sECwZ52cYYYhkJ77XPokcc7bYweJi7Lk1RRvmLh9KcCyR3jDcRroSjLDHGtWypbDK1wb",
  "key20": "5LTBfotYRFQSX9LR5YY6eHwLtEKudVdcnXEc8T58bpozQKp7wTDS3KJS2FzESsBwapnvqHuSmc17AtaBEERdD8VC",
  "key21": "MypAyEjN21hVMg2rev8pVsSiQVMcp9y6xr7VGNQpbkcLtmZNZVyDuvQtAmzFQbzqwrNF29AugkSRyTe4MT8EhR7",
  "key22": "M1D748ZoGMWtsruqJDWDCJhERYSmq3hZnm8J81PMjofbjCERcpSrC54xt8k4zv3aCUPtZGLkepeXJ3uHjuLVv6e",
  "key23": "26b6fH3ZCKZt4BXnZXNoSQtFSFQthxZWZcrLpV4e8R1QJHptJtTFHKCapdLuXEANqeQnZqcevLGZgzqyR9GYvFvn",
  "key24": "5FHVXAAgWuBZa23JiZTraLAMisCzTwSnJaSogVFnMXxN6iu7q6v5UaQhDYh6MC5B1Z6hYUX3hdyUdFg2Hrb6AJLa",
  "key25": "2dKsNQBEpxF7CVVMnrYm6nv7rx34Fm4oQfCeA4dwept4FUhth7uuj2VCUEfMwjCttfrhTBifKhvdxFQrCXFfUEtQ",
  "key26": "4a71YupDUjczLYbjbaonLizcV1yhyekhuGKn4m8LFmhadE1Qu1MQhrkwF75DXwDEy8F3wofsC4hR2wrCv3bNy8dn",
  "key27": "3SwsDDFvJqgvy6VE2xGQejyGNwDLsH4EvY5jDrzoR3CGrS2zKXMyV7WZJRq46a8txmaR3n2HyaMviwfUz83A9pZn",
  "key28": "5hrRxRq9CvcYeiazE14LW8xDpEygyDvCEBm17CTNdjjmbwowhv3ZaNXmF1G6n7pubXQA3H9RZrusuCyJ1MV2oELm",
  "key29": "3yeurzYiA1LyhbcmPCt7Tfi1yWvymptNhE5NXaZfdoZu1vkcFKWBvuLu6Q2CPKtjBJ3PeKLCzyiuqfFypX9HyeNk",
  "key30": "8ki4oSACQVozhgKdigdeeMy5pqTa3EPeLtWWC4Vsh3go3xGZ7rfcxQ49vKPqYf1u9pbAtkkL135xjmue8FuNm1T",
  "key31": "28s8pbBAUqtrGKb3L1Nmgtrwtvrve2UpepJURpLyeLU5FxcaU4tmXPjEjVm2ZoAUPp5Xs8xUSqk4wMnnJMB7eeoA",
  "key32": "3JfzV2WGrt6tHwBPtdzf5brsyyTJ3emN5ySLwxEJP5j7gm4HucE6TCms84DJNGbZ2X5fxBkLZCKet37xTgeLpnXn",
  "key33": "mNycajKwYFRGFQDYNBYvfpMpU867GnUpPL1aAGP2PY5GqSfjUKKY9JjbzvyJXRVEAxqGLXzQx4fFqyUw1NFgPTa",
  "key34": "2PMcQxcnTtPLdqS1t48vWxdjNsLdHcenaWVDjKdPHMyBCozR29ixxd6E2ojSDhrAn28DpFyP4wxFbEEE7dxeLUtT",
  "key35": "5oiSqeiW5cfLnm4PLNbhWZmqkMydciz4RyWbm5Jys1iQP5Pqb8WKyewzGNa8jViiBmknmJbyz472x3b3yP9CQXBc",
  "key36": "4Z5J1uEPLprQmwWnxxJZfrWuYDRiYGpFweFQXDpim2EpdRXcwSCnhTZL5UACGUoKCM1LGoEtUs61HTFbTv4v9eMT",
  "key37": "1932GkD2SdE1AEwsn1kvkkrg8Y3wKjmTXpWR5XGUqa2d7Q5ApJntCCDoBzbVpxNS9oFjq133CSGJwb1XKzdXPmJ",
  "key38": "5W3AagwTupnUdML5TSkQVHBmV2baAzLGP22WShqhMU4bePfBWvkBMk67T2hSUDELPSC8DPzz61pe6hyPtvLwQQb1",
  "key39": "5HveRcG2f2AoGf7kT9XiRtxJigJMegu4ZgQ5ZgwDkdyzNTKfyxUEPiLZKJBBDh1BwuYyV11ABMkGnG9ZXdUQQS4K",
  "key40": "2Rr3Zb11cqbtGnYAnm1poM4c4iwuwPfNjWJxGc6acqN2wXGyNgRvMKWLzEPUaFyJ5hVAjWjvCu8zsuV9icJzTXVr",
  "key41": "4VVGeD1WA5wwqPmDkNH87jcf5rjQDYcpf9tBx1wEYdg1kajuQVE8TaMamVpkRTjCCyujRs9aUE3kjNdLq1bcrGHa",
  "key42": "5HJUWxb8VASS6PotqkeHfSS6t5FMExFmggJqub76H5MNzgszbrSihD6uGGfXUoPquGnaHfpSZGUB5X4yKjLiPSuq",
  "key43": "3oHRLcqLgcPG8dvRtXan7LLweyE7uusaf84UMKKEFb3e62fHtFxxiAAodECgTMYtDKFy2zJzmjfuBkgqRrQkLzbn",
  "key44": "3Tm4ygPYmVNUe5fDhL7LgSXAftRa27zpnT3rxmE9UPRJCqwroeqhsPxqZB2jiP8cdYbb1co6JHT2vohFjRvq6yKY",
  "key45": "4oNHCJ4DfVYFdKHvvHJPT66U8Y1HjPeygokdyozRoNGJ3W5Fn7gksNQkXNpoV1mxwkDK51cHa6bAinyGmQJqx6Jp",
  "key46": "YcEm9jNCpi29b93zzvW8bZi2436dfAHtYLGkqgbN8jeVHnocAcR62FS4y7v6SvuMp9y7XFaeTXBmqCD7D3SK3w7",
  "key47": "36wAd3Kh7x1sGaLGaonnDWphbWDqi5WSjA3zEYeSBVMPNseY5rjfns23Ugg1L7BLoRRtbRrT8FdVh2Vi1wpWVsQX"
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
