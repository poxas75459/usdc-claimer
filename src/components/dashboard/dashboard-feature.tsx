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
    "2WSBQJnb2Uzt6xZFo1JZLMKAAGTqSnQRU5mtJM37DB7h7mG62gYTuWhndajaYMQwup8gRNCgTjguQz65ke3Nm8hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpSJuJAWTQUbdxv3Tiv3A6VXPoGme64u5Zs6KMmLGh8ug6v9MbMkQbGLe2BfdXMwpoCSwPvRjV7ZEDQpb7Q1bF2",
  "key1": "5rj2cjCfJjZrnqqTGWAyQKw73o19vPYazRp3k7D7DogFisVyaVvrGCncWpKpLRkdkfwFQvqpLqHHnLVbGrWG24gj",
  "key2": "5u6RA6QU7j3zQuo67WBypin6UpYciCvc8BfmDSZ8RNHX8KuKiv25c97q4gfKpWauwKQUvcWPEwFK83JSvotmYvGs",
  "key3": "3JuQpPnTUGTUtSgDzFtpJSp5HL2GNENxuTom6aRSeCcpKWRn4Cp5oRRiW9Jr8qq6UND7EzLbvMc6JQh6eYz2VLHe",
  "key4": "rXJnrsSGYu9UeJKF32pUxSAyQHzKoMsczshh4nnBaqsZt8TWTQRNhUgiGipe3CJzCcyAQLLtf2zJsX2mZHpyPUo",
  "key5": "2aN9w8pZjZuSdoAwAYELrJeJGP4KWTW1jDWn5inKuLYsQKNJiBhoaYeNpR49wGSHd1Kxzn2dqLUBA9NeRQUMvLvh",
  "key6": "2Rk5tAUq73z7onrNnnhoxzwqangE9s2yb56Vmn4r4rAxiZ8ooEmLXHy9pd6jeTLUiYfyFVcBArvMYyBDBiXJw4iw",
  "key7": "28RCAvfqzt38CcnATpDExCN43JBHkkSPvYYD7gUF1WzAah7njieU5VBUomEH1GmYXPKRpZurcwnXDEEB7HYiRQuy",
  "key8": "Xt7Y9TLGCu5A6qH6HijcnqkYMsJCKKJKqcMu3tKXskBf51hCaJ2Cph9rFc3eYeqjmZf49Wuyqbnb3DVguTq9Yue",
  "key9": "5wGiE5umCKRfzTBHUw4vKEhvU2J3omaayHszv4toJhcbZUbMbVRy3bwctyquVFpeKP4JawxCtxrAw1tArcY8JzXq",
  "key10": "4iJUXadKwUFqLo2miaZbtRQiNRk1gK5MzyHQWi8fXZv5dEKF2VXTCL8FKqCUJnKXGzbFQ13k9YKvDxGSJRqzh8Xe",
  "key11": "2JL1vf4EpfZ9UwH1E113Y3B7TuFFARQN3xJhSqTZ3ziRhcCfLWLrbZfxPE4xTvQUyj8bjc9GPzotDoeCCHURnPYB",
  "key12": "Zu1N1FHy1tFfmm9pWjKs93BXKWT6Q2m9aA9m13UEoEPs1vx7ibVKe2Bsk766Luq6ygK9WyQek1N43zeyn66QmbX",
  "key13": "5tAf2EaXaMJ1SV5Vaa7oGGyXeKJmP7qs4LgrKzskLcKejkxUghgPYD2BRUcCXXCniPcTYJnkH6B8iL4PpsfRkDgB",
  "key14": "YpdJdFrMtVrgKM69uUuW1fYNam2gtWkJZqMKPGZN9j54K7DRivmAa25SozqJDs6Mc6CiYSVyAzzVxqVmobgPkkW",
  "key15": "5fsBjtgSRPCeAyp8X2txdebytUgbPWRFrGP8eDWggPUxQzxqpmGczPTTncwW4tYEMYdTbCefTYeBs5tsNje2AHwi",
  "key16": "4cmCYp515W7WZyEK9UHvQvQPnFNkNFwLBmK1vD1iVVy29ZUN9MWzd8riYGEg2TjbvgayU3uyne3bgbRKgcHEQKv1",
  "key17": "494pJRtSJWni7s5zoU65mccH35r6FA1DvVXh88SA55bh2ZcVu6ZtfzjjCHafPiepWUJPRARWpuah99phMrz6mZcQ",
  "key18": "82f5dCjhEQYuyHvSccUebFGPLCZrHFLSeVWUXkXtMm9ixg7YR9t9EXNh8nyyyK6rrt2bmdEao7UiRECKfGhSCXy",
  "key19": "67QUpkfR1ZyrTbUcoFwAo67tSPvC71tSfSgcb3Y4WBWyvvnGmNMokZJXCQMoGpPaASkT1ihr5zaeJxh1ZwSWDUGn",
  "key20": "4RHirYsd3tmDioWPtoRbqS3j9tCLT7k6w8GsTLpXgWYeNh8rhwrEiwTiqAdE1GSEPvbQZrX4cU4dwzapjgWKCCg6",
  "key21": "5qZrvsHZJevrqWKN6x4gBV6ZUedTxsmMPTYv6UewViQetg7bYCdCVhRd6czztkVZwkT5dtwZ9KsNAqr2LdpFByEf",
  "key22": "ZusG9St5ryRor34ya3s93iJZHGFLCUUWnhcQEUYZEMb1F5XQkZHu34pGEEZnRDHYQ8yEKnuH2Sp6vTmhzrU2zWz",
  "key23": "42V7gTzCsXEqNQtXqkPXweG5Mdm7WGYuxhvEfs14ybXs6Z56HSRcJ2YvyhbwsrbcGwd6jM3c9EChjwQLWzDuEKx7",
  "key24": "2naGSb19wQQgY7pnqomyeWFrNtndy1vQyMaRupQUG3bpQ1kMfSb7iSaRCybX8UxzBxrAdkiAqKiPgGNC7agzgwah",
  "key25": "4STfjsQeTzKu3HgeEjCPA4CP1uUrFA1eL1PYEs8tpbcKwZpsz89yKYa3hJF6KjFYuaUsADqo7mWTR88LzPHWstXz",
  "key26": "5CLZh5VbsLf3s8yJMX4tktTVXQ4NjjQupXKcbARuUUvvRJDFjJBAbguRrfkx19bnpCJmfEeACVQXwzCZcg2xshLc",
  "key27": "3epK4sKyivFbddh6n4nyRwBGy7Q2cqxMHTYT3xe54WK3iUEqHDgoP1ny31DLaWcUXkD39M52tRJCd1Rp491DUPsr",
  "key28": "2j9hDW7vGiarJfS8bVVdboVk2HJRFpoWDPKaB8JwuS9TXbnntV34xQwcVcQimJYUVvfBMDZYtKCJwF3zQvTGh5rC",
  "key29": "5CD4zPr1tC5wCENjrvwkRxgMvaEcLznR9UYZUS5qcVN8D3YhqbxuA7HxWSNKNJpr976ane4GTvp7tN2hAcQ25B6p",
  "key30": "4Q1pH7CokxD6MJfCQNuAy4qYgnxjyCtW82MKwcnEigFiYudzf3defNnKnvhh9X7Bet3r8CSxDUJzp6Sonf6UDDH6",
  "key31": "3z5rJh2bCpoTUzS92cDLScyDddowEVhNKgocck63VoXDhLwk6aW4EMRLA9pou8kG5qLJzJrwSg9c7cEpxRcnXJvi",
  "key32": "35MP7TVWnEqK9eYna1WZ1Ku4RDecHZfmCCKznDN63hGrnr9gY32NV5s7DCAF2HtRmxHSeFdouT5nxWnMxniZ47NF",
  "key33": "5PV8y5HY8tmR4qWt67keCNGJG5TTErq7iJmyJYvLu6SoLYyFKGiBpTdZ4DjGaCn3Ssx3GhtZ3ivkjbsx8UCy2Mn1",
  "key34": "2f4rW4J8sm9eMCu12BECmz4Uniys1Gb91AG2Nmw8X3cutGDN28K9nq2mKPKYhTNniQ3UnJGHQ9c8SnxcLsk3y87R",
  "key35": "4cpM2nmFQrR96C5YxYwFh89t1cPxWw78JJKG1Zhf8m4caUSox2ykedwKZnLzu6WvKoHj2MBzBVuvNX1dkv5CLgz7",
  "key36": "3vZ3tcwirRvSd7enYX4CGLqnfKMGh6KfWHaiB6LBwBUD6WzYoR7vcWSRM4F2Jx46fGiM2AFdHbXJ4d1cmBTUD1qZ",
  "key37": "t7Vtk9D1EYH2WeTkU85sAmSaW49aaneu11VGahAjgSbfAfVQpLL9vCeUxQjf4taAPEovZAXiRwWhvQyGekniMoC",
  "key38": "4Gd8eSH5ushbZUUebeyoEoSnkMaoYQU7XnGijqPoHCy5dqVJMXc1rnak1FUyhGFjVqUvMNakkt1xY2dBNMcEczYj",
  "key39": "3HDPSQKPshEkAd6Krh1gsDts9BnEpvZrMZbqQKorTGdxUDHjNVM12r4Xf9dLPvLrrjhBdxBdfvy815XYV85YsaxL",
  "key40": "5ZE3WDUWx4GFo9roKrKmEYtZMNPiADT5Ai4Uwpa4pERe7P7MQqQBUamX7Y8vDDogH975J6q3ec2t1JQAoHQyuvUN",
  "key41": "2znSqR74DqBtBNiLzaVb8kAgxc3MRyaXbyJfVKE6a8PhyVKNssWJ5enNP8RpEG7jVzXTtcF7TiYP4KdPy8AKGa2m",
  "key42": "5qNhfzeQqgsYh8xNTsTEQi6cvxQBTUAKy1BRcTSAJsUeKmqqiNrFYXx9jr2jBh9DzAe4wS6hWdpaRk2aYgcWNq1b",
  "key43": "3VVxirg6rsiXZd3vrurRRbiLxznQnL5x7Sf61v22NJ6UYubMqc2PKbRUJH1T2VMuRtkVKT6kmUDCRtyEeK3dN8Jk",
  "key44": "5as31AtpUw5XG2eWUgjEAsjmYkxkNYprGXC4VYq8xY5mjeYHTywUsdLY9NTnL2GXGFZ3EGLpHo3VVSeUCiFToCPv"
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
