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
    "2MLb1fvPWbZqWib8DD7PEkbXPED2oXpaM5Ndop1QQxWvpV5GYLY8LzeW6uGne9H2vNRMaAJsTnCa8VBvT3PfQBdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LAfdj1oscgABm5UdvuKbf3cdDrWgETSDNFpnZo4yFGYMfm7GkJeDHQ4hwnabiTH8Uwezq9JkCCG3HX7byeZpEzM",
  "key1": "3sBaynMHzmMUXYZ1nrR4d3B5doCYHZwbG2abC2smqcP8qegJUNKXm6vvW4pDDGsZvH5m6bV3mekXQhHVWtsqvCHn",
  "key2": "61NdzxiEozg3NkisMk6xVo4EEAnUBARnZvkwjqKZ7RxdVvkxWsLLWBh63iBVGkdMsXRa9tm5LJmeAvvhRftzTbQ2",
  "key3": "28rPuSDCuhpBvsx92z1jYv1bkSob74VUY23gjcPfQNUegRrtn5ePrPSnWpyTs6j28JqusU3fzsFPBWhEyzsiHivf",
  "key4": "53hj4u4B2Domj2XfskTnAZoVFzFTcxKRifXp8cGWswAHxaqDzj5KcYMyC2Bq9Wk9tNw2MSpTPJ4axGz1HXSDaXnY",
  "key5": "2ZoxPMomcg8ZXHzqWHDrVxcCYhP2WKAtKBnfZyNSnzsCWxfGHwgDsiY1ypKqhhMiiQct83xjuB6L7uj9CNyFmQUt",
  "key6": "2Cyef61BYQ8GvSUymxiM88AJHvdp29ZZzD21iwJKGE9QLJNwwLeAmPt7TyhT7xC3xPbXCbS5Zx7uuki3ih2TPw7s",
  "key7": "5ffKRwYAn4p6xVv2zHirKFjTRPSivtM3WgUnkLK5jw5yVne7ooqkP5LKEoNoXBfxUyMQBb7rsnLPeCM9KZTaANtR",
  "key8": "2xjcV6mfnb3rcjH7ZbBLtkXskPxCGuM7R2V6gjjRtG2CRvNXv4w2qTPSMhEJYZou7XbtXAco1CZhgKGs7pgXYYVW",
  "key9": "4qDheZ5k8cQYLNCiCK31eBZRHmUXwHhyAMFbW89Qrv9r3crHpG7jR6fyCW5DTJk2SftghdGXMuAnvRRB7nh89Tnr",
  "key10": "2CDw9rrCjNCSB5NzHWE4nkAjE64emveepPk3sLvio22Lt6LpajYeZH3VVSzR45ZrhvZZ92Vbw5X7sLvGgZFPCkPW",
  "key11": "t3PVJDeLWguGdkSo68Ja1r7kHRbHTaHuSUsEUKfZZmcxLZ61jEdEz4EhXbeiUU9Kyt1z18WzgEnuCYYYxeqsgiR",
  "key12": "4UxWznbsQSTcS4CiEZ9j7q18Xi9zugbSqJmNGaoPCjeuLT8dLs1qosN9Qd6HQED6y4hNWCxMFzDDcVz1VoDMxTRZ",
  "key13": "5SUTrzi3ZsDKh7HC5BLPTZsJjzBQY2pbJr4vLrapRguNrggoNUnu9TmMH6xDvDsaajnwUuEQf3YWKg7XkEVNxjUW",
  "key14": "3tB9nSqZ9YgTpf5t87q3uoD9xEurRkCggb4v7Ss5ZfAqQyRrLH2WQ5EUKVdMP86xQBp7nYsXmi1r1DYAfad56y2R",
  "key15": "62y7nQ2G5rsAjHYDCQzyBgscbhQaDQzRoheVG8oJrCPEYoY6Qpsc3qSZinNPPhTuXcHuDczD9xvrN2ndZ8j9cVjt",
  "key16": "5WhJuXPe1F9hpMYgV6wu5rnPRVsD4k8nfFbgsFYGaDXbVMYWoCzPd48EVTRKsyDQRx1eJmxHeZvgyTqAMxQ6WQ59",
  "key17": "53gPUgDExj51a3PFufwAMaXugTLX8hRmm3MuS3WswYub3djSUtpKtMnVo5E1zsX5ZMTPC6Y7Hm8CW7cEYN5YzKm8",
  "key18": "5UcGKn4xjDDA5wMvdmkyPHZq7m5NqxtwjqKatUAEvLBRLaFRX5xtJzFpsMLiRtDnRsC4cwJiec6gPnsnY6h9vsBu",
  "key19": "5ffd22QNpCuUYgECVy5Lwc7zgso3rWUnN2f8vXNdQkUiKP6nh8eU7z8CcECAuEt52pgfktpuR8arKxC97W9tXcXa",
  "key20": "4RYt1fEgKL4VDdzoaj7GsRn6gRo52QXrtwBPCjJkEnmp5BxRqADdciFk91GWzBYBfo9Vr9M7XJzDSvgHvknwrWVr",
  "key21": "2JJqd8c9KvLTEuvQ2CV5xXtuR1AfrRV2PaNtSHbAGbYj6goPPxKgQjhhVPESEiFCiDr9vG7mUtZmXWeWCjRruwnR",
  "key22": "4X7KC8bbZwMVCo6QkXcVySeotJcL1LuFD56BczWhgdh4P8k2sJa7bqTR6BRTnscXwFBqkUo6FoH4mLahMNkHJWKz",
  "key23": "5PPMcvSDWRAzBmUfMcYxSF8GtY455aEuo4RGEfPb695nf6y1MEZkd6ks2fyDCzzkDQG79ENbNSri6rwpWftrHTpN",
  "key24": "5tCNQz48DGr8aasq8NcZU6Ny7PUvFikU7gwie1MymwkECtBH28s1rxzzB3Lgmua3sQ189iAtFS28Qcx3YD6eGrh4",
  "key25": "48J3jmbVikq3AHP6oWi5h66naeDmSCD8WE16uVKnNEsRMc97X4KZrpSr3MrFsd6zvfpuZSnYUZDLgQuDHdZVar3m",
  "key26": "4A1JSvsUa4uL51yg657GR5MsovGfDXzRjh1Wki6nh2uabmx3YnFxKXz6jUrSX8nrKSQFz5HNU31jStBtgkbEmBWf",
  "key27": "4nfpn4PJGqTQP83DGcYJ56ZgP2ShTdiMiSVuLx7p5jQgCubw7JMEQAaae7wfRf3muYvB3ZqZtUrYX2hZAeSbjAxi",
  "key28": "5ZwZTuPNvEjtJ8BxNqbRxBNhmfxU6CmgSF6DcqpGMtxFXERh9ZKPQEo9ozc5YFKZqiYzWeUzZjTn33tTK2VoMwjk",
  "key29": "5mMeM7wfHrq18BJ5jY1zSWvR8N4KJytuDtvCAhviEq6xg3uRNin7yUZ6QCbNi39aotW1Q2sYGQCrywEbEfMBeZom",
  "key30": "4mPhwU3GDmVBb6hFmbHBHGb6xKjeM3hBoE2cEFeYr8uAoD6vpuey7sKCbHAXwbTAdq2vktTc4mN4TBvM1VreocEB",
  "key31": "ofZhyamdNi9FC22mRytvnVVf3d8dzQxAMwqe9WjcXNV14k1u2j6z5FVMUqDocPWL6gjE2h4uhfuMvVyZh1N9QVN",
  "key32": "5vjAVor2KjgVrKSHLNH6Bk7feuqrR4Xfg5V21g3G2UqSfoSGdZ5s1mMit4B85mzS51ATtU8rMWA81FAJLfnd7FvT",
  "key33": "4bwHNk1XbGFR9LAoW5vxwsJtQ8aJCeKToF5wvgTNoAp8PaZmjYvRVbGQi1FWBPtP27dn3gu87buPYmg63jDN6PGA",
  "key34": "5fCykjFNpjtnhTnEZjPCdLPpjTFJnrm3ywAtfRv7BKMyTwE2hfgGaHoGfvNFWDBiVKXvuLL1EDr8AzS1hHgZ6zzJ",
  "key35": "4e2YcXncd1KrkzjQxhwvrMGah7iTcSjQB4qGjgadUZCSuLfSecjmsRQTXLzvghNEzWZHJjM2mkYberkiYsCa3GKz",
  "key36": "5hiVPE2wP174Ajkw6Ennqd9uKaxevtZ4vA2wtP7uhaYJqabtVkjfSPBCxXj4wBjhjciC2ySGqqBKSAgEf4PQd92u",
  "key37": "38NsrNsLGhZDccCaLk5iApgUch5JUYYQeqDZgXNoSNRhzyyaAxUfCzBesCZ9h8sXBrzT8yc6txmo785chbtcLtWn",
  "key38": "3pDPybRYdtKnVMhmF9phBTB6HeQcsxoU4zXUfbYLaePTezVkafWcUxWGF4uzDHv3nj3SdcRxa54taLZMxJB6C2vn",
  "key39": "3jqvCk6Apeh7DX4Y1fRypbyMxS4EpwbVBseDWyLg1cwowpWrDj9GjPE2njJcbXYXtZgGZKnG2cSjqXrDrJPUdkin",
  "key40": "5KWtqrVbdRXgLnm7h7fWoFkyVevBbzhD262xEYK4aY2wBeWuvA4YjFmRghGXsrakFxJf5DzP2BbSdoYqA3yoe34M",
  "key41": "5BcST7hny6h1wM3gwfRyY7T6w1vPtt5XcSqsMtp4qekCZSFuQ6Hz95ZQh7iCRozmyvofU2ed8XFYyENpXUbAspid"
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
