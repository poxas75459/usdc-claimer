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
    "sURGH8q3yzaWysRecZAJhCo7hJSF8WbVwJBSFiwwfmbgZx3DsJZKFWhZ8tVK7k1A7vjgHNM4o5YD3rWTKwVyrQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qiYdRE8W721vD3kF9aMmwWUuRmvghD6Sb3sFoVUFKyH7LBqupqNnsSoh9sYteDNNJ3i6hZGvKWdgEz9nPMNCjLT",
  "key1": "46KGpHStjjdpVmJ3ygk9Rb7vvhTtEue1kNQKDjFAdzoZjKhLG2fwggxLkMPX93wwmBvYEKHw31hqMy79oy9shAg7",
  "key2": "fga6LVX6KGJiEKwsr139SLFWFray7fv1qRd1qcVnTuzugW4VdrYPPazjkFFSgehP53uoVaok1KfYRsg27UzHB9s",
  "key3": "4dNyTdxzkSjkqZN8GgNfcMF431JyyTnBERjxdve9eUXwNRMiuyjGn8SBSUS9rvNffo5B1F3Vf6XEzyQzpp5GSv3p",
  "key4": "4HunumGsmLYCTAXC1nvuhX1bShDqrF2kUYHAhmotSG1WL3E5a6BgUKVE9LLmcYKYX6mFDsM9tp9B5E7oCu5sURvt",
  "key5": "49fioaWb35nCCqT25p2D4ojnBskhNxvXycpyy9DuLFzYoDny25HwLGRLFEwksmfZ3nH2gdGTseWJXscXDcZmmEd9",
  "key6": "4GWzo2f1G7pd4JFECmR72i3Bd85mEzEVxetK9dbmWuScCrTyZtztSSuec1dABh7gMktjyqECUV23pyjXmepfPcze",
  "key7": "m9yNGhPVJQXhQohNuwmq9663RyAuMzQ6sXuQAztPT5ZwMYM1eXY2tNR8cQp33n1sGTqz6WEXaBXcysvto3mLnU4",
  "key8": "4dj47ujGvHRtR4bGWaDCCydhnSsZmc3veXRhSUq8YEpmsHhoJncdec567H9BAwCNFmuxqddTxq3Xdh6BuSUKgsTy",
  "key9": "5cEaZ2ttr6pWartJyXPvhehJf1okaojnodTbsrri8cYxzKWYkWMwkZTbXzEGANjsFvx3LmWX2EVsPZz4KwxpnY9D",
  "key10": "2Kz42QHPQeGX489d1eehgUtuGfbXDCYnKdbfch24NwQ9rNET64PsGMDpF3p4eTYFnQxmrWidXDTBw7rbebDFfMp1",
  "key11": "2vcu7VZrFRMaU53uWstqkqsc7ZwwB7vwHTLBhNDzWwYbWRgmuvGMM4jzBikZpSKqj7YHaDqYbxbRiu7ZdgAqioGx",
  "key12": "2pmr6mWg8DT2tELjHX8sZEGLd6bM2ks72WPuuDuKN85tsUAWeorJYGrhWfhRmGNUMpRpDd3B4HhGJ7sMcrDC7CKf",
  "key13": "33z6a4Qm5jk48HzCEguJS9JBq5v2aYxHBQKNbQNkmVDL8v2yNVgTi2uXu8NMKMnsx6y4vtUpnbPBwNvzpVcLfyaG",
  "key14": "65p6yAYT6MBxSKJ4Yxze9QQ3Deavo3HPFVhDN9YGKmxS5B9SUKMJvM9avqhXceRBN1SoKmfodbsBHSEYbnvRZh1K",
  "key15": "3WuZtDB1nxsfdVibc6827Q5M479ieRdBWgfGGFFjaeKRHvNFSY6jRgeAejcpCGtfHscY21ARLaRyHp6axfQXueL2",
  "key16": "3zyAFwBW9a89SzqWEVEj79SqLB1ZoPGi37Tthog2mvNcKTWjaTmer1zmwTvN11PurPJSNbCjmL6yGVzmrpPV2Anw",
  "key17": "4ZLhGFJ2GY5oDg214NiXw4kNKqP251aVLfAtheccJgJUCmyGM3xJZbfHLjKihSG29DSAHrYPgrYNnsT5gQKxZEFx",
  "key18": "3Z9MgGPUgqLFPm3iS4xoXtF3otaVSZZBwhHdUW4hu3LXWkLh7HK2kC9qvqyHUAJMAzbhXhq469F13UiLsRrqtZfT",
  "key19": "49bRLyCBfT8WoRYqYALqCLPiycyHmRgMwWzar5PKMWXpPjivTS4TDmjN9bQvoD3d7WxKVXbqW1Ma33PWBEnhjXCM",
  "key20": "4dUNJLPo4Ha8A5eMAfMwNLqjW4xE1C3joRceTndMSSpayRkP7bdvzUVG6RkXLGdKHuH6f9LxGeAdbw3xvZqeXx3R",
  "key21": "67RZQwsaDwDzL1DpBCx72DKWcF1HoXpLyFphjADWymNH9wowd1jZF5xbTGnNXMXH6LBUdCvK9vBqzFyTHiKsUwBt",
  "key22": "3bkTLJoxBphCDJ27FAFHp7KnmDDG6f6EwNGVUrELXvuoAE4VxZUdcbVnfa7LYvGGXSZHQVcqGinBg1Q47mwRBjT3",
  "key23": "2FsCTrHyMWL6TCuRpSCFDH8t6DXSgrRswyvkBSn7vcyoDrjmnWrit8kmMLKRvhKKRbXeHA4dPyfjQyWyjmt8dqkS",
  "key24": "4suUxMhhjZteeyoL2x7eEPdc5baJQJ8hgdcFbtNizRxhTiFS4j5nDAoo5WyMFN1DRaMmVdup7uTZ2G3UJ1XdhaPj",
  "key25": "PSKLXARtrASASpJskAyZYpDfAdwBgN65CRAEwzQGzZYD1P2FejCuq6S8dTZNk3bey7Hue14uduqtiPzXJXFg1U3",
  "key26": "4UhEae5sfmU1TnuqAvQMo6L6D1JYMEV59h5TYg8WiFFxs7PwCrfSkwgYnpFCjPRSDLmFedAQFHtY9RZZfAoNrHe1",
  "key27": "4HgmcdUZkFtG2qXYfv5yN9aTTYsAJAbuGDUaWNPxPxyZyLQRrRaNoLKvd2fCY2X1Fu8CoqUCpzeuBs1wtQTqGSBE",
  "key28": "59Q6JJiPo3RoUcwAyWdoA5UfQUPnBgtpNxGmzu6d8ssTRz3N1nmdyqjRpLhqgeUTyZY2v2NY2A4a1McQHsz3FLVR",
  "key29": "2PNZei75ARAYx29HJbSabUBaSVN9TxSxx6FKwUhmWHrPbT1bHFhtPBiLj4iKVwcqBQ4Wngp6YCUSoZfTT4RNRtxp",
  "key30": "2CUGPKvksNXF6b3fieJxD9ALGaCTN5AEhae98GUqR6sxDaVL2DWngYC1Tvc9qQjWXuSoR1EfCv5nMtBdhjepVV7y",
  "key31": "5HMpuSvkcmY1nG62M3AG8ca44DLUtUgbdK4d8RNwJuu1423Jf5yXKraQtHimPwL8T4Vr624vUmqwZttP3MXjA8Ng",
  "key32": "NfL7orQQ5gy371h7aK4M6RmgsW7hiM7pGvSWuE8av4RSWMeLY9X3QorW4npFeSoeboiPhBAB2ub55BbGNSKSJ5m",
  "key33": "4uMy1EaoBwCo7xk7YMg6SJAyb7CJ2oD2UCmztMvVEA9v1N7mpFj97BVbQLqr6J7YYZPtiAHDuJzSpuyTJZHT8oze",
  "key34": "t9hxiZvqFYjk4jH7BxfgY9my14mbXVih82pAng6BVCweAVvQniCv5r3kgxnncFHLSRMaJ3cWU4FRbcNJoNNAh7Y",
  "key35": "3V61uPzQ8ECRchrfM7nbzKMZBs74qQ3gdwYk4JQ9K1XNFrAC4N3EH4GmxcTaskzB3jcMBM1ANKHx9NbiMDJaT82N",
  "key36": "cL3SEfX5QAwuwRTBQ2gtvSvzjtH2mmgz2dGPSvP43iB5az7h6MLSYt5KmV3RknpGjM3fqhncfuyEvhVgmXeshbz",
  "key37": "a7QKtUttJACyEDtuSp5gNtAnYbpnZqndpXepTYZiA7eoUgdiGN6B7fTxQ5yZfUVJDvVRjtMRhjapBisu8FtCze5",
  "key38": "2W5P4DBNG2ePHwUXWS4rEZqttjhDJSqKavvz3wzWp8BhVD9xCWrQtUHg6q8Wf5aX6qN4psNZLcZF42LRWnqfX1kU",
  "key39": "24Zc2mYLDoCsANZKrzbjwT2sYEa1V68ztLd63Lk41QSfAk2Haf2WuXLSoFoAHMKhZ6zDUaNt87HV92uuAupQGvTH",
  "key40": "2pzKUghAXkKfAoi79VGZdaHKt1RNiFCrDHwmuFyjb76mXmaaDtHVCuYh82N89qpFiujKoRhpSakYKwnygJybBtnb",
  "key41": "3AEy5uUDi8W23hDUc9JRj3MnsQGY7fMRscEgL9rjuo1ByMpCEJhJW6ov2aY3wpVrFWi2nFsESK4Y6jmLPjoYcCM1",
  "key42": "5KJ6dzWFdtKA8xEihcpMjuTJaVrPG3ZWL2m9kyzviycG4Xpm2HmStukpgbmhUZY1vz9q6yLbrCcsajUuEU8C7wju",
  "key43": "5ig9pU2U2cfrr8wkrCVboYpBbNsPiRJrBzmBushi3khLZuFuBZP2agmKiZu79vrAjeNWn5z5ey8LY2oAxqzqMPRh"
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
