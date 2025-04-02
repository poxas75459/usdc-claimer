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
    "x2X897dxoXEDMDHmd2triuRG2yrwZXhGvCA8nVGgJ6Q1M9tnQnSKwo6i6YUesm6gCSackZHr6XspgU7ZsndnyJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uYwysB9hPDEDARCh2oBCm4dGNUPYnbeErwacbqs9CKCG4cQfjsAZdvmMdb56pneWn3a9DpnPRQLmy9d1e2m4DkS",
  "key1": "ADUHeQsn35SXEpY52NLmKAoGYcii6MntDeJf3zTHdDcoq6Zk6B3RVUPfq2KfP3NG8giwNWH9eKtpQVKwrzLHCBZ",
  "key2": "75r3b25QLjYtHHnkRmDBmjdFrb8dqyordv4oG5FYUdfTePtmkDL5vKB8CWMuRRXPcsFk1WZsMC6M3iVrHsaseDS",
  "key3": "5A5nY1XFiwwmQBuYjVg8GbXKumfPMw5pg6J8Q9Ryx4Mrrv2kZHqTSoutH6Ln5VEiq1DHUnGctAcKennTsEjSPjZF",
  "key4": "4KpmnXtsUaikYgkDpQvtJhi4LrrzekRCjfR1qqVsSyVM4QrNC4Z8WmFrXqMNq1CXxXpyNdtpCxHsCkhrfQ5e6w77",
  "key5": "sqza78zef52MNsyXp2FDGBCgERjgx76FZMiSBYgeC5Rap9Mhme4Cfxyr7gfwpdE2NTvGhdUdAch9PjngbbahQEB",
  "key6": "2YShXqrmPNPCanWCDMbQBQSG7ahkVpnFBx6rtsg2AP1D4f6KVt48v7QDMFK2JNNueTzTKpkksAV27WePq9vguXg1",
  "key7": "5M4wnF8mC2Mzrj3pUDA9jfadw4tFbicQZ6MzQgHzjC8bZLf2BMWKjPzgZvb8FTBKJJj2bgCA1ZgpQu6VV9vhoAeK",
  "key8": "3fFoxVeRq5SswQjqRvpLsRJeZoygTTAZmWNyMzRarpo4z87tWxkPzBK5V4kjahssec3ADDxYdtSgaMwLvHsDH6Pw",
  "key9": "4Bgu9Xr6G4P5gW7vFHjk7FrwsJcC4q6kvdfsbBpU5uTmwmz6CySGjLrUeSwbnh54rxXqPzcS3BSpc9aakvCZJ6BU",
  "key10": "5oLj2Kx6RzqjFBAxGFiLR8vLKWPqcBTKbqyYZfFxqYoapQxkgoeXMi2zHoLL5qUfESZqDZuV3T6ogY8qdLEFbg1f",
  "key11": "5eGU7kBRzKzAynnkLcScsy6Fan4i5yw7dkYA2kb8JEEPQMsseaaooAhBZNvtFXp2av682isMniDFBX8CVdZnBdok",
  "key12": "wvH3SuZWKEAkyNBMEjCxFjc9aEbxi7hsQXsKze8PtC8bxugKM2RPkRuePmEDjfEX4AMt9BMgp9FnfRonsubNHAL",
  "key13": "btzevqgqzCATw2NMtFdtut3xkKss9uEkWrfCY3PJXm7GFBUhWXb5vsvQrZRBVrXXhnJ5xi2tWWQ77GjMeprRzHQ",
  "key14": "3JPsDYx9EYVghUNQLvGstNrmaJrDA48EKoktYxkkdLg19tpun11tcrw1zimi6HrUbWrN7YMxp3Hgxw3QoyTknp1m",
  "key15": "5qx3hJdmfEW7PkV1ggY4w5XxBkSxLPpyY5QiHNZXfFZ64FsBDCPvk61esYDjAuj1u4EowqWsuqBckqauiTyyv7gj",
  "key16": "51YvmWDQhWpw2JFkK1E4u8s4RvFDKfmEgtZk5p5UsDXGMeiYyiu7ojNPoCNnp4R1Kod8z52KppHS56yBfAqTFsK5",
  "key17": "2kSrwezoQtDnwYEYzggnS8CM2oZj81SnGA5SmGeQsCNokUDG9vsgYFjffLk8VHHroJQYEyC3tekn6Tc19PYKtSoM",
  "key18": "2DYv5PGJi55c17xJpdw8fHzgr3naxCAxXj4uYzhMVotcnwPGnUc3Lagk9mkRStPZjPRHQmES3crEnJHstTxhyi5L",
  "key19": "3rxTKWoqKvgueTKRXYpN9VQ5FYAyG93hk892a3JCYe7P5UwzwHXy948NT6FM1DDpKhwXG8T5RnabFAK8xtgyJnZv",
  "key20": "3ffnBKTTpRSETbMneshC8Asg8NtyniC15XR13AGNTbGJgV5qrQNiv9sh579gT2hTVEDwiudhcdKVRyuEMTyB3cEe",
  "key21": "3WrrZW2aqU1imiK14VSvPJsHJQX4JKcWXqDKB7iKt9t7Bzv9j7GTD2xmgB7HFecH5jFFQ1yJQifqUiarFLMDKQZU",
  "key22": "ysh1A4U9Yz2f2XLgNaZ9vnTSsakWWZRtSgWC3LBPHxFKhb71kMMDKUYsESczeGFZbAbB4azzPKcVjYGKKjPWc1u",
  "key23": "3jAKJhjgqHkUQVZkNw2GcpkG8sEobHcfP5tJND1a7FmDbrrLA2vj5Ypjb77SKNA1dhLhER6V25dgWKeqYHrVYKv5",
  "key24": "5KgtT1P84KsJqva1BTUm6dDgWEz9afaXevQijZjJHbmWkotyfN44wjJ7fUQHUWbsCCYP9aTHjFzr8aJNrPGz4RWn",
  "key25": "3z7N7Xz7tgGWmJGJ9Db9xG1kvhBNvbi2Shbsq7ZB7LasFnb8Z1FMB3so6Fxk413Fq4ioySE3ciBnhJ6fLAvjo5nc",
  "key26": "3JPhoHVfujDLEfeVAEy8THNV9pox8tzw7EeJcXotMM5bYKUiWWiBnChcZ7UVdxpEQBcEchQuS4TDyhVGfFHRhNTk",
  "key27": "g5kfTXX9WfmE68pY2hXJ8abGofQoGLdKTtrgY8T2xF8Az6i6EBFExUydoNBe7MGrxAfnND2qAT5hiXmxiZDPHLR",
  "key28": "2TFy4seZwJTeHnSg4cnQhF9B3dKXGm2Sz4zcqcAtN5FWNMxK1785Xpqdu7mPFdRPEuuP6DdQsDiFfhxGbrUnjBff",
  "key29": "3StAXfkqQxwfF34dGZ6FscogysnnLFLAmZYWt9iE9iN4dmEw46GSLzx7vaQ3gziK77zg8cEXkeauTRKCHV9cPMsX",
  "key30": "RCuv6AMQFJXFaw44jqu2ob1vz24ZNAu4xDrCF4MPUc7nPaXyujusAu3t8JQYjeuB3dBPfXuTkWtpKtiHMqJk9EY",
  "key31": "3kvvgnXymgLJnMQ2Fi8tYDBCWehwv81GnRAKMgxzFVByEfTJcFgD9B76UzVNt4Fe1dbo3Rk8R4PAJ7caUcUsApRg",
  "key32": "5pmT3pZFK9dn4EhhKrS9vbnsRnu3aYB9UgfQAhsfxyLikN2qTAzpozdZhCYryYfHzFSvQ4X2Hir35V5dGLQudWKL",
  "key33": "5CChkv1Fvrsm7sqS4MuKqkJfzeVMv3aYdjCAjYuRQHyAQ6BVjE9qzxbYXEzyQFhSsXc51wJwwsEetGXsY7TVRZVt",
  "key34": "eNsGGzE8UcwoG1F5gA7HLmDtzqRpsXjyi53WoM4hmTuA1w4x7G1M8bbB9yQcvDYXje98z1mV8suuFbeRqF5xHmK",
  "key35": "2AbGTU4y77XFypaS2w5chkJsnB7kczsd3qw6sM1ZN4ipTbZ7sTcc2MtKf9PM78B3z7CtysWarWJyxLLQbCHmFoav",
  "key36": "2YVBmx2grwLdooPBAuAi8H9rRauK7V63NvzDinNP5Zu75PZiijSQqersNiRUKFxdSCojBKaA327WavKbWnZddkYg",
  "key37": "qqpi13xrQKfie7uGAj3wpuLox9smn6oHbszGwGRxPcvMG59ayXr6UxZEzyB2doPXvrPRm98nQM73PRJcAuZLZtK",
  "key38": "2fp5HeoaTHvTUcn42KVg7sobeRPj123SDMRxyU5AcFGganfHMyodiiyoakuWFB7gJ6J7kXLHeWZAqWdpiPv3jwtW",
  "key39": "4Y5zs9RTESUkQozdUPox1xMmMVBUoHGPNSZndteYurupNQPg2qZCZMk5WWKNgc1c9yXBgepinj13q8SeHyiqdKuC",
  "key40": "2BZ2hWyKESKJaANAJEC8mWhdxmKdhPem1QosC3mvgEuggGYUkPRk9yjvTrR3BPPYBX7bP951GtvTXA7ynng8GhpH",
  "key41": "2fGeD2DQs36kv94Yxp13Z9i5H2dPLnBTbuVddutYVrz88tGRbPBxXBtxJxV9NZzpnJacx9UnQNDQbELNQjBBNi3x"
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
