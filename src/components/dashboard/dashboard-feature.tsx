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
    "2sNkqDSRpEC1gyJ6Hs3YZdzKoHByND1DB3bUgkMaXq2wL8iTpfAytyAjK9EwvT37JmVQ3khbJ7zJyqpjjsdkUDfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hCfJ9Yx5ya2VvBDs3ivLwmJvH2oma7SZJfMzENP9jpUvWJwdDuAbAqtLs2y6YWh4hbQ8P1Geja1qtUAzyhyHCVn",
  "key1": "52jHAis9RUmHHvxQnMWz1deeBTH8pA2KdD4fruk2BSR7JGiZ5J3h1Q7huLFPmhaRnQiA3ous6q9M5WPacqUGRNig",
  "key2": "4EyWMqvnSwjpPwhwiQvqwo2YbhSM1FDy8st3ynNGp7yDjjxKdFWG6GVRAfLwAfysGz9pTDjP5nDwLWusdYHpJhop",
  "key3": "CBZhNGaUPVCMb28mqUk22EsKoHTtJmmqAzPpsiuoLdRx7rDnJsbNdtYYNScSWpbUbkuBpu9yms93Hy99pmiu9jW",
  "key4": "4edodFAbrmBZNidkFhSWFqvYA9wQgxXVseE11e67Cb48xdzr6d1BxvoKgwK2QzfYwBzkQrCPZeZDGHV6dKXtrTJt",
  "key5": "67epArNHsgaa45RX1h6HPR64UEj2tTsEfryS6vGomFVkS8Pi684sqk47XnGq1SuU9SCd9GwKvzDefb3JLuwc6jeD",
  "key6": "2g9W4JzkHQoKkzij8E8ey3yC9Czt2mJnn1xZYyK26ok94YX5XcEXiKJDaYb9jNthY3JsgBWVy5R2gUPuaffQitZ5",
  "key7": "jjDEHTWZPDzxBPnmVHBeNYz5JCv1FCeM48Z5Aqh8aVo7jvGrkt3Q1f4qvvRjPW8Pth5q5DhKKgbiNt1tiYK6tfs",
  "key8": "XdobBW3cfWhx1Z8Q5FSL2MGDmEoCm8wNDyGMUnUtRLjp4qifchN4aKB89GQDF4TVYThR9S2iqPSRK3DJM4AtmR6",
  "key9": "3nAo7vxLjfbCuphbbokvaMtoBGMKKdz3RFC6NQPwyiTTRxFMuUcrxa4bn3w4Lh5xfqux8xuYPtHvt32aTQ6n4TGp",
  "key10": "3iYEbURuL1hA9FWkreQbeZ22KH2qng7nzDWtGhhHsLr8E82TwbCqA4A9hAP2zFcPPgkxGMngPoAjrBSLaBRRhShH",
  "key11": "5C4ky7J99yQXcErCzXUdEGsqEVgnR1i59d9FqdSM78uLYPpm1xxgZRMmccrCNmD6kozvQXuTuFUqmhwfmHfccXL6",
  "key12": "5fyV6YaKKcfmVzo3GhK8kneLooUnofUEKrzKz48gtbLrQBmijkoHFjmzkxK8waTdjwggWzzk64owVZxxpnKfev8z",
  "key13": "4zNFvhq8JKii1gWLzCwbEPMr19YEJWvwVotS1aM58KWmEHQ4k1Yus2Zeyop5JYBJKWsPFU8mLwWdCHHU7uYrv86D",
  "key14": "45JYu2vK4qKkZiYWqsZZWeziJsnEBcTJ2s8F1V7K8MAAidoniUFhvMTRgCiXhVhxyE7h34gfiGMHApt2cDNULmRY",
  "key15": "2VexDwWakgD7abKbMZUwHJfdjcBFh8d8VVDT6f1EGofsBi832RUGZ3hrXhMJBwNhBuHFyJmhXAd5jVRxwNYXZduv",
  "key16": "Z4VchEwP1f4ojGwBrbYJFTTpihfzHQfTFSZuiogSmqbXevqRYcC6JJ9jXo4imHbW4fpny6XQLRWorCsUy7qnfPC",
  "key17": "mqzZTybpHyqAYPgDJiFRtfhWKG5b8LCbk7jA95gSprmECbC3LMFDcMQq5maDHXWRdizwLtQLCCvsyXcJoQRE9KF",
  "key18": "2k2pD216hUX56wyXDH1SaRp5cE9FRz3jZ52KwtX7gq4iB4Cii3x5p1BTnuHM3R7n3tn2hPWgdp1j3NBfvTLNaqHL",
  "key19": "5c5iycpQL2acs543S5V4sogcgEbn25TcY6BANBv2oEBS8SmfC1xheJjQK5Y1SQkmboc8nXaotTAs7KkCTsBngzeK",
  "key20": "8Ki8D8BfYXu9upNZuxPRYwotGgSypnsKZx8f1i5EG5Dz2KX9W2voD2Ahrz8eZsaavhRVmGjVqpQjpTy8R5K9MFB",
  "key21": "Q9qxdbnj7m5cUnXHrAxr4zqVnwGxbJUZ9rKr6ojkx5YBVQ6qYC3inZN8jtYb66V5G2a41mnUj4xMv5RctAyoGF7",
  "key22": "5N2w43NyiBsh93tPWVU9ZE2C1rCvvbRsapJLt1EURELwYZxM4EnvQyJgqe8XGifw4g3usMf4KJeZxVhap572LZR6",
  "key23": "2dng6wSqywBMezFnbUCcSXsLTMi4TN4SxwDdZycXeW2RmFHxBucDZids2uuv12tadMM6196Z1ZGe2NrFgAuKfLSw",
  "key24": "36cqxAq9i6hTKrK36kddJ5Y78qXGZk9483vVJ9e7212AiTPBBnLtcs7jXaJCRBPAqVJEkFZWrLLFUpDjU7UHVgS9",
  "key25": "5aEPYhzgdnNh1zLJ5hbdaJiJ4EprLBcvdHcx4nabgv1AL83fQqXqXDaVHWcbmLpPPr6aTJrXBfUSxPnbNEcivDVg",
  "key26": "5tqGvtGp1t6gghybks94fHXjJLEf7bjW16YbshXrehvPg3VBGMpCUA51YApDv9XnwyDaD3C5HdE8pbASDRWBeM2i",
  "key27": "58AutE3eHMriJYDSs51L4JBMw8sdkEMzehu5xjnj7U5jwWUPR2Ppph43ykwEGQKSjAqBE4yQNUVM8J8sUzZ2RtKh",
  "key28": "44VeAUxBsuxFtiboEDw7LG9DzoZWN2QiCpCyGeNSJrdN4nMreTDWQx2PT9gv7rT6VXpbDxZwvZHpziUhUEXsSHrT",
  "key29": "2Y5zqkqBFLHjvhbze25YVEuAFQdkdeNejWkf2CEi83aokYwcwUVBoepkh428qvsPN4cMcDAKuQJ3fPMBgnJzNR7r",
  "key30": "WMXJ8LpnnAwJVJDQWSEyg3n6bdCzXwwSkw246h35rBp168eFrodResSvo6ZiiSdgkiQAhwaSTsSFj4WYW5PMoNp",
  "key31": "2SgztTmBtSZoP3D6SyqNRgjwEc3YBYaXUuW7ENeZtG8zmgYRyszDaAbHUfmtg2iWdsh5UVEWaaMGmuWiSKA16WCK",
  "key32": "RCD1YPpa8djtcRVazsDsFzo62Hire7euku1g2wv599RTqyEQwihNFiqMTbH5ZrUi5nNufg57FPvrXvAsFjnhGjy",
  "key33": "3642T2GgurKxaY32uE1TnPuUgrJQYosYDP79TqTtTrsJJjaTwg3rHemMyZ5jQEYdDQL6MqjP5z2217YRcpPwod6p",
  "key34": "2gFTLcPmcQEPjua2N8PEjeL4LcHUmV7eUnifmi5JkJQtPa6saqzTiN383xYPvycMQrDapazLQbCZL6NQ37wWZkEY",
  "key35": "3braaVH8rtwMEu6GYaWgjDyHcAq9fvtSpjiUkzScvutmeo6cvbY9wFBUDotoXRf2mGVFipgSbij22amAPzznL2zJ",
  "key36": "2dTCw7jAsmdb5ZiouHmn4hm8EGVT1k21ghJtnag3VTpw1zyxLK6iDGY8eP4DzemorJ2Z12LA9WsBBwmoJKjMrx8P",
  "key37": "2MWTj4MRYTWnTYuEWLGu5gQpdo11BmuDRutBxzwHmkDMo3RbxT8PemgEwQDcwowP94d13nzBu44VNPLmVmBEvz8p",
  "key38": "2QCXu9uXokpDWAdHvp3mqGwiZZQFckkWUiuX4uxGGys9upYsDxdvX6qoRJD72jCLfrsVPSmBaZG8cbX8Dw8KRFX2",
  "key39": "3PYcP6L8khBpEh9C9TidyZXfNwVpZoYA8mt6um2XFppZaD4AnDWW4qS5KZmEaEE7NsLHs3ZATu1zJYY3K6gNbYHa",
  "key40": "2aCU1SnRdAdGet6QGp3roVejYK3jdVNzv5HHtzotqkbrgXLvQLfggekYHTx4FUMt7RMzpwHdcpao66aQU44RTtm2",
  "key41": "5LfJjM2tQZ9ipUyQJWmdfeEqAVtEdHWmxSjYXsp35UN6Lj2D7dQKvM3V8t1uyqufnmLqRXrPzvk9bVHZanUpjkuV",
  "key42": "53uLYMPwAtK73PthfmzQiJrbdaMDzkr9EEv881wHE3VZb2auJERz43ENVerERMRe6JLXNsd5TYKJUH2hVdv5vttW"
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
