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
    "642Z5EJoZ6FRyJe6o1LD9XhRhn7Fv2FjKbukBZDn8pity8ohNk3zcYVqQGwawyzfNq8VwuLm9SGrvFgvJLCK3EpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MJqre9QEhZpFUpEQnMysf5FYZsEc3ub9GCqc837k7JJMgSqh8QPghFfASCCabKeRFCaofHWUePL3DCiAmQVrenq",
  "key1": "5pGpReRBxA3mdBKrKStMafd6CPhWwq8NnTJnn4hz4UMkd6bACr4QToK5uuoxAAwtZXa31u9MeahhjqgfRiBokEJN",
  "key2": "9mrZtup2jtAVGwESGM9hwX7cDZBCnR96bQx7gWW6geBTVKYgvxpgX3cEPut7c6u6X4KcnEdgEzc78K5mB9Xg7dP",
  "key3": "4NMoRGY9DAbC8udB1h4gb2DBcmqUjBTgddDY9fQnJ7DaBCWFLK1iwr2dqdq9EwfsDMTKwDPSgHfPzKTX7To5qdtc",
  "key4": "5A9TtcGuGwm7ZLrMJnirwf19WqP4MtNchfmyMFGPBL6cDQhjUL2HX1DNKPF12X9UDSZHCTpXvG4brnduV5FQcDmV",
  "key5": "4zXYqFuACCsvQLx5s3z5BBuXpERLbPAyZh46NQEG4YPGsGsVxbDKRX6dttM3KDepLs9swsQmtk2UBXE9zLQp67ua",
  "key6": "3G9aoBympxG9HVSifQ61NNvw5TPBPNYAeE69HyQGCx4huZA5AEYkEbiz5LpHusVBjEe3o5ZGeE2TGAY61piPkaBL",
  "key7": "4LX6DdCf3V6op5hLYdz4C9WnwZo8BRp7Zf3hVyGUnMfdzUbZSKrexKZbXFK1rgY1HGHDC68EhfPWdpmcUdHELxW5",
  "key8": "kJXKbXJxsfXAhvb9Ls7fY8RFBy8nh1cMMU4tQy3erz3KyGhnA2TvPrtFacPzLJn85C7BEfZti6X2DasBcf4ase8",
  "key9": "2RW9EuZ3PsRK1ywVhdESgyp26c1p8xUQ8VCEDpGgYgN53WGNng7wLVSsyBTZinY8CS4wAKfCDBKqmakKbH9iwZXD",
  "key10": "3HrPb2ctmxV8qwttHbiq3fiusRaQBVpeuZDubyjTVRN4n8j5q5WXGGpTZ1aT5d2rKavUNEbENMRy9dVQcr4AnQHx",
  "key11": "4DFGAgNHUUNE2X65yGGTCCuxsFccHjiPzTKjNHzsyXvyvkhni79cbW8PGNiGyBYWpKLQ6fuMratqP72NyBPi8GVH",
  "key12": "5AWRdJPe9ZjqxEwVLNQzXMKCR3it9LqterPQB9Ts9Jux9r1EJabc6B8JK7ALJ1cLsbfwywcKPyU5e43edHRYgumS",
  "key13": "TgWHqK2DdAeThHirGwAn4icr8LSPs9XzsGkPfBF4sFD7mqePWoAJfSBHPPUQen3V4bdRz51PpDwhKjkfXoqi3cw",
  "key14": "3Nn7KjtojE6cczzbVToQ2snmKpTMXAF9j4qp31n2x75A69JXiD3RWTpfkcyR22SAmrvLHgvmXPB8NBenDMaDrUsj",
  "key15": "51UDwb5jbhG65BVgwQxSJb99vo6PmZuPCbo7weGVanJHBcDv2EwhB2vDDvUNJr7ze5tCm2GtzprteJtPQRobYFff",
  "key16": "2tmBDsfxFeZqQY1rwRqjQ1JFwfFBXLRXTynXJNkt7ExfGWrwPmYJ4bZyohxo8iAKUCWsS4vvhZeTH4zBUMNpTFbV",
  "key17": "4u4KobRfsYVTyDq1YDvsL479QHg4Jg4LfWB5TwBfjEvCazqMkP31r4d2pNVGQpEZWphABBNFcCe3fnnBZbQFa3bx",
  "key18": "5hFj1u5Xd6MueM3FAQKjCMmq7fxkEhRHNoT4kHHHWSEDZUMhu9zAPQKdyWqe9arssYfs3JgkvaM2SAivyrRy9a8n",
  "key19": "ZBPi1YWA6VDUa49Le9vL7ymftmvkysPvogWZv4kNLJ1pU4pF2gDR3TksMb1snQX89YCFBXEG3yq2qGzP3HkHvCA",
  "key20": "3GyAMnWee2mfUKTr3aBE4uRFaFNioQeMrFPbMEACVrPzNWQZTyvkNnTwoKh1XqSv5gdQRuACfxzAZWcEPbXgQpLs",
  "key21": "7BtNGR1HZiUQh6xbz7Q8Vy8aBu2ncJg3XL5Nh3yFoW9h2HPwv9ks3LuSNEZXJcPrWGbZM7LPA4eNjacnxD8Wb3G",
  "key22": "3zn3xn9s3cdDk14JebCcyCePx83nHFoDRU5Pq62s3pqoKJzaoM1eB7WFy3xjoMTdE3j8CbSzYe6UUJkzbRfPwctg",
  "key23": "QPuFNW7w8fYS9quBfaQR6bmRCYGkuWkH2kmCsuGhMfKZ4GXg4ExdKizdLcbNGnr3FmRKzWxgwBX3WEE2e9d18XS",
  "key24": "2wmMrfuRkPATxs4GPwYYPwFmzVyLfx6i7DB9M3snUFLXcNPUSGZ3BeNhFBaNRw393giMK6o7zc8Hi84wL3X5SFsr",
  "key25": "rgT4mr13i5GCcSNi7Qu9WizSEN9W3LNMrAtjR6iNYi1krC1A9g1XujBpYfakSi9ntoxQAYu78mZRZZ9dmkDr3Z2",
  "key26": "3VHhPnnEqE7ZT5gk15mTutSQ9wYrV5NUDxzCBi8T3JoRjyUAuMjDWaiTMxzFfRWLpxdYEGzJGv1YjVVRoLDhhALx",
  "key27": "3Nb1dsw2zjnGJM78L8UAR9xrGFBggxgzrZtzQekwCnMYReW9rsZByxoGrYerAjciCLcfruoQ3zgiWNc75C4nW5jv",
  "key28": "5QhfmjgmSD5GhjyiWKKvkMv4BW5LYXo5nvsvSueuTR8WBbQ3HBAnZWYGAUxpoufFYhGv7gsSP61iNFiFTLdtJC73",
  "key29": "3Nx9saN7PCfBXrympRFwLErfr2jotMhpJL7NXi1rf3dCTWyjGqf2mPVr73LBzvKJKYwpjYJ7tVqf19SLmfW9KGLp",
  "key30": "2qwBuafceWrVmyXLrFigzN7jLb5vFEQqfQMxYqoUn5Qw1XgNYG5FEKo1ivwZFt2nPNsvjzBL4UjJ1oyEnRXvQf9J",
  "key31": "4vd3Xrh3vWuDM2eQWgGfJd4cGnt5DeNnqJieRx6CXGqUSD8MMxQJeLLYbAxobTrVrHCrvFkXEa8RivYE7CWN7Q6m",
  "key32": "3LzFz7bLU36eZhjBE5HU8t293SjttMZeDQHpUE1UhaaQK3NoeUyybpZU9e3tvXuSrhb95br9NFd8nFdssob91ySv",
  "key33": "4fio7BdyFRGW4mYufkZ9zMb293h8ndEmkPWuBK2YQ1wf2tY14CFQc6dJ9bXo7Ph7ZQidEVDGBxjiPyZrynVzEK6e",
  "key34": "2ajH2a1cB9dWqqWXw7bmW7vMZVjznBjGkLnaYoyGhLcPxxDJ9AXhKxi9akgNxvVpXNbVPq4SfzapM8YzWL92mwTD",
  "key35": "3o8oaggD2DBrcLu36fexedajixAtnxz2TX6puYTe8oeDR3V6FEkjsRkVFPJnHciZVJyXMhDS7A4PbnVUBEX3B5Nn",
  "key36": "3UoWMCjEkQPV3Vh6u9gghuDugRLZkeG4ddQKv3x9GmjBh3CKaJD3BxvToAqE95D7g61e2VyFAZu9wLK6KTnDCAnV",
  "key37": "3hFdkfEFJ87gSUVWn8yzpNhPmom2DkegQsVBNAd2rreLMjnBxP7XJLiW21hYLWZdmx8F1FsyJj1vH1NT3n42xwbk",
  "key38": "2h33N9EhLBjAmQAvrozK9ueQYfZa6MCftpocvxskG5aU31JE2LHgPcdRG5bScxfodvx8RtbSrgFqxi3GB9eZCk7s",
  "key39": "4N1JFCHt41J2BPeLLzGBMSzMtnSDPxzpCRkzptxf251mRKJcnKax4LQoRZCgaLSEHryvdUsXYivxboSgLqBCw5mi",
  "key40": "2w9oC5qNBesLcZ8br4k5Uuqo5iW3Fa9kYZtJ4HhJBQggzMTgTYoA6vxbHaJSWL4Bci1Fw7mHJvgnckcEqYRBm8JU",
  "key41": "i2nUBuDdyPY1NfDhE9WgaALRMu2QMz1Wp6toewrSAkRSTVvvbsyNCr1WiScFh5eQM7X4VwLtQGGACenHQVsNRyH",
  "key42": "5nULqPjgF7MH9r28zbtnY5q17RDTKiFNaWUnDkbw5kjzhoWZaxXZmB26VqemuDNUU1ETvaDu4kYMghhSoRPNnxSV",
  "key43": "2tD22iP2sgGHJBouDEhPiUpn1TMsVrUr8YXBHTU9KmUXRA8sWi5vsTjGXVAqR7Srwr5CTMBGkYaWmu5VXdQxtsYY",
  "key44": "5SnQ4YfAHH1ToUQk7HuTDpTHoV87VqypJsDodpoNzPkRW2YuCgkhmfbhsvbqLGPUNQidvAuiMkF5dz5kTDQ49Xu7"
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
