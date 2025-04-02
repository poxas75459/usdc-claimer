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
    "3ANNt15mAmfLhUJgBGGTLq4xySM9xBLtFJdmeGktrQ14FPNDG5zBfCoMDRywhS2XyKxhPtFKXiKt94v2q49DiAyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22S4PLxCTZx6RUdsWmr7UoaAUQR2H2Sg2bgNnbRKVdrKuEHrKwhUS6J8gid6ySgetB6JB3kBei1dz6AS7JyDWXX1",
  "key1": "2D6UoV8DYSQvRZYYthSah8SFmktTDbwnsATkj4fBuQCpZYG8HTsXmMbZnaRiGdXvnzLwzT564JTGveGVPpiExMFe",
  "key2": "4dURyNCQ2dL98hufFZjZCm9LP8jCBqs3uatCivgBZpiz58DftBXb7z6NZj4LxmoDYs7MYqgZDiCLWpbrDn2PxNZY",
  "key3": "AtPVsFEw7jPT2VHPfB2mvi1gLmUYk4xFSewtV3MPciMyhimJXh6wSQFuoP4YkNhFCzoMjK78EgsBxf5VFCA7WkD",
  "key4": "39kVw8E6aotrWLPRUkGdHPyMw54H6p4gWbZwjrNgwBaNR9iQM7r6Aw6VjpXcX1FpxAPZUTyVHSDScDdugYtEjMh",
  "key5": "xfSPZiEpcms8Gu2YYBXrkpGMz5Frt2UTonKhz2KJFnU9a9ioLbZrGndvkUQxg8Dxjhk7NMSPJKhWHsXWYWkAmmn",
  "key6": "23jHEufs3uoHrrYLsUMFV9DRsQ3u42LtPkdew3keEZXmPEzZXBS3T5eJBWQdWxpyqMe4fGFokq7BS7Czg7GqtXth",
  "key7": "5fNmEM1cGnZtRJBvyMhJMXikk32gWTvhqB7KGRg8GNFqtkCjYy8sehKe9Cjs5fGGgFz7ipkotyvFx39eYk7DE135",
  "key8": "QgLvCsjxCk8DaZym32nDTh9CfYVkxiqinR5HA6uNPniV4Qx4s2iwJ8HZmjnJfTLZmFoJaPcbMBT6VGt7Ue59exq",
  "key9": "2sn8YZwCBXEAE2tnbqBANkHuoMVNKSvDs6dYSLtHE4noZW2cPj9ww3F12QNBNPbsiqVAs7f3NN1vsc6m1utKNU6q",
  "key10": "RbopJjXDTPHdQ2hnNmXx9CsfR6o8nev99K4gtf7osHzhtQQuPJxyZCKXTGBRRrWkFNaxAFP6DHe6nwuY2H3cCCu",
  "key11": "J77rSfgXoNhLFZJ1u6V5JZkMXowngwQwKiJap9GGV2GNzJv2SCWnRnKHxmJuoMc3YkgvQM2L6ccwBnds8YibNLf",
  "key12": "4K3KjzyDKgmSdaL6q1EbJHipL7Uj9woxsDfwdqVTV8hWL8yHvp6mcKRx4zrZncVfCuwKuUbKABk421pN7aZM7pCN",
  "key13": "4ed1PwwdLHTuWy26LDcAwx94yMfnxgi9q3w8ABPEr7Ly2wq8CTVU7Uu5hYh93tDyFDPhvKkvPMvdFubrVXpL7gBB",
  "key14": "4i4kdqYi4k9QrZZUEoSeY7AkQa7QcxiXdPG9QDjL5aGUJd4nmTJkAmKW1kSfjWcNJfBqRVHAQb6zwLopmudB1CkK",
  "key15": "5PqAAwqGzEPkDdSk5QZsUKLPnHCyqk8CMKsZUpmgtWtMP7QrBJKHCa6MNUccKF91v3uZz7fVXAgTLUsfbvLBYvg",
  "key16": "53dbdm2p1KmGcHUDRXXAJeRPf3pYng7UCKKn9eraCB5foFNrgAvKxyJk7tyCrHLP7Tpeet5r8Wud7kLZs29Xcumi",
  "key17": "5bYKZsQDjRK6uPRMuAKrq4iZxSz5EmRPZuSy2G78ybqtknDMiZUUhrL32vkS1MWFwdnWiRFTeWQTS59w2UpUN8AN",
  "key18": "2gjG1rvbWCQP9C8zVwjjNmFznQk1b3MW4BPoDHaN5xRaZr5DHcfRjSxDHzWQS5McyAk13nLpjgtCXtDTx3xRARmB",
  "key19": "3RBuDhrQYAGD8wcNLiaeew28FCYy5Vq8RWPe9BLjJak3Z8QWaDqFNmZUnaWG7Ps1gwr8LrSfLPuQWeC5jMdwF4YM",
  "key20": "3v4kPgPWqJ2xKLPHw9GLMB4kWzN7heUj6U1URayMJsRrwNsqNeVxc46n6wjbRHrzgEjNMrLQC1pFgRmBUJnrReDg",
  "key21": "2xH6E144xoYR3agRMDoYQWdeXsy5aELXmpHmiihqpueMmJgRww8gG75hN7C2z531fUDtWFmreCdWDbdgkXVf99o2",
  "key22": "4UC93AnEGhwLHJCFJGTvofFPkenhxjro6G2PSQ9Er8fiaQk6zCdaxBhL9a1zcRH64sU2dXPiMqdnXFHKPnSp8F4e",
  "key23": "5c9EtswzjxyTZLvJV5ndZDYqeZVcig3ZNLctrsz5wV3XcxDQsK3RsCgd3EMvQJmiEPCDKsmrCkkWxeuDynfMizxV",
  "key24": "5b1WVG92CAd5z5a5YsoNTYya63UUaXco1hQ9k3Rsxb6cWNBKCQxLfXWz6NMcAtgSb2mDmxRkfVTf5479Wy4aK6GY",
  "key25": "4imbYpU42T4f9CZQgzb65DgravQdjsrstrMP2Eug6TG9Nvd9UN7QPo3kYzMWjqTdK2aqUecQTsRjuDU4RgG7FZjx",
  "key26": "3WGJM2aPBXKKx3eaqHYQzac7csUzLstLsPJXG1b8VR9s6RrKP4BZKBLaNw7mJbwZxffVj5RyhU9wPsSnrGFFwmwZ",
  "key27": "3QUW26ZQWSpyqT9SGYdd65rrms1Ni16u6AHNTjAhzLBQ1YGzQr3MTJjCGaeRdQkLA5rQV6V9aJ1moprBPMXrWmwt",
  "key28": "52h6LHPLrtkwKF4YLKggcg7a68cNV2xsEdCK6NzzV4qbzNWU2pNraxMyYRj3Xj1YTBsjJckFmfHeRxsVmeaFU7rC",
  "key29": "3eovBuYffbKBUExszy6oz3bhNchVBCXkw8JDTZroNnSFFp86rmdyeC5on1RqPpnvyukJut8Z7tXapDpyPHWGaduc",
  "key30": "2bbqyDzZhMALHqHUEdSu6vqaLcpTCRtX6ACqC789cVpGn6xhSSM5YsJ22NrVR35zq8iPSMCavRbDTFZs9zBvN3Xb",
  "key31": "2Uk86euXBFrmxzbq61yYrxvtaBAWJSAsanT5hj6R9zxhLctpWn9btTtEadW6dbjPtEvPpXvtghE1p8CbpbmKGxYZ",
  "key32": "85vZnfyAQBExzSy124CacPVBK584W5g2q1ET5MBTQ46L1yQdVqvrNCaMLn3C9bDr5zR2uZ8w782nWJ769tBiMBA",
  "key33": "27QypP63phbgM6wLQnh6YouNgFcfG4Y7ay8J3QjvpTf6ssxGrVkkBcZ3NywnBZWgTXUkf86LGUELdQzpubGgWxkK",
  "key34": "2c6xSyMzkYpnnWMUTBwWfpLYFHwgRzJARGViyENycENfw35p8F74Dz35wheUykTjMQ1t2HUCVZHhWjsdJjsgCKfr",
  "key35": "2iScXdB4BaEFfac7DzHdy4hLFnToF7GLnkGjaWk4Kvmqa276iKyVmjQJYgqwuKcF2w4L5BKxeLq3j912smJkqq4m",
  "key36": "3B6aQhEHzJWyaMeR6tF4tpaK45npEuZuU8fUZtVh8SZnAZ2qoNM94JHBmP5ZBVGhaAvVQPLBqxahRZKfe1HDpML7",
  "key37": "3LZX6tkSMTNPwBcWkWbLZ1hqBeSntUS676mDpLCoF2AvAtPGyxPLgbB4uHQ46tn9VeMfbFSsBmSmtNHQBqJubBnq",
  "key38": "4GsEFUkbif4UrgpEKHw1VbDpGU2ZthF9JnCG2EuHJJ3KGE5p7mzE9QUS7YyBj5iftajJtV6tSMB9f46DPUZMvLvf",
  "key39": "5rVnVTSfL4aedNYxuSWs7XWUfFKSe6whJa3w89id9ELydSysKW764p9pS6XdWgvHTcRwTLpPB6enWG9SLoNg2a5B",
  "key40": "ZKteqHXpmkpnB2TXtVqDPbAL2sqMekp9pR1xDwEsJK6s6UkpPh8jhzgmNmH7KhEK8hx4g6pv9rKjCagck97LLJF",
  "key41": "4moBDAoD953BAKC5DBXCXphgvLe3ipU4U2A2HiiZQaeCM3jhm3hz82PfoY23nMQjs1k4t5KrFTDpxYUssLWkpGG3",
  "key42": "3UFBnedqvJBsEDWjuwKeuVp13MQgHSMT9STVY5dRCN3kQgRcone2pghGEFm1Fmoz9xRMXYBiFm8pMLCCQP4MHXC2",
  "key43": "4vnkqsUdqdQRmtYuVwRRmVbG44hkGoNi8JPgzi8GqL9hzCKtigMUmBCrvmUpPvebdRfzgSSieSqzwXAtF8coUpLs",
  "key44": "778ZiSsCFWFebnFXMgxVVbQyxq1AbHgkwQmvdp6znYa7hPBh296i3Z6vCjYtb6xNmQgSA69yf9EJ6hpDksxDJkV",
  "key45": "56L82wLadbmygo7vWzzbnxPwm6QLpSZmPTWqjHmA2K6CNiFf3BNn4t9JxrtSMAifLKsJmSwZKt6Q1rGX6NGTwJz2",
  "key46": "5dCiQPxF31JwLM89skgd9Zc658QiAkeLJcTpcF5dDyEQsk1JNCX3hVpivFV77Ztjm4X2hkUU1VMBJPXea9micWq3",
  "key47": "3xRX94LyJnU3EwjBwFNJwer2HPoTGdiWLFk4Hsp5heTBw2x691gRPGJuupZH8rNDFCddnvXb9Yu1HkXwJUVSaQCX",
  "key48": "2BLpoW8V331hqPFPBx8c8gk9HqQiZwcMP7c76YkVJARtoUkBBzfHkp8hfu6Aigh9kdoqd6emaUwaJ6RNF3S1FVfH"
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
