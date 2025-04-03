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
    "62ZyH8gAP4TqP7x8UXqfmWkpXt4JdbTp4NKjymd8r1HweshC22d8eJHzxYKr3G4Lbudq1rKuE9HxN1LaUhrDZW5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNshmu2ZnUh7scGB6RX2aXiJwW5mbQDfQGHkejgk4yNFvDPtoSuDTvsAxXp8S9nXpyu3mTeR6vm9ULc2rE3nPp6",
  "key1": "21g8iwps6TeJPYuGDtGJB8mNoXNjrqxsi4iRJD61xQRsLdf6yqCTgxMMNuyu4rej73sbHXPpLkRZHGye1MoWsmkJ",
  "key2": "Xexowh82V2u83XmeNs3uuHS1NxKBsSnDJe4f5apmeKpAXdqNZvAz16XRae5HGSWNZagPgFGwhbdwYGovaLf4M72",
  "key3": "3x15RV1CbdTYk3WCjKXbt3SDtmCccvMiqC4DXJKyBLBwNkATdWRAF9P3GkDBG6n6gr5r1gYKnAbaYHwHPXEh8yCp",
  "key4": "3g2NQeRZ4e1635ofdtdV4PEJ7GXWgDcwPVi1vMBHRtSZX7mt1UwTDkqSisxN95jR3AMoADYBssDDnfRNHmt5ph4A",
  "key5": "4Lvwe54M7xmoiwFtRwEXBCommVaD4iwYYjxGH4Wz9KcxsZVEkN3T4dV7Kxi7uUiMxDouuiLC8swmGFyKr2sZEPRe",
  "key6": "2pkRmaK7GfyQGp6VCPfxZLbvDL6r3hwchvVvMPDLb2S2LL4r1SxsvHJfYJL5SsHnEatuEyR6HN17CVdjkc21adEF",
  "key7": "3PMNV67yA7DjBPs8zyzxKvctR23tVRXgC5nzvntjF1NUrsYjFjTYxjFEiYEwfGgcSgsDEqesXXoM2ePh7KS4z6kA",
  "key8": "3rncTtCMymXMbtRABA6McGKpydVYdZGM5rfNzgSNRTtjwqzxU5VpwPKbMajarso8S5bkasT8F6yBC349jeqKCxn9",
  "key9": "4G5gqAC9EYtbRvwi4xSFnAWMJAYAzMac9bafzg1isxAkFFhGsA5tzGjngRL98PbmVJb7GkSSSa9B1ybHX1gETzpV",
  "key10": "2KeDbSx9kSa4PQJWFgjdnSuzVEuCfnW5sEUb7Xp1h7VMbsWsgZD1Uoie32p1KVRSFgVhWEhcKJgmPFBShtU9dzSj",
  "key11": "wPaKJvUTFo8NfNQrExQFj1wMEPJqLL3iDhuUX6K7yhCKa1itbKBBU22mPE729k5oX7u8gj2Yv1y58kjzUw9Q4Zx",
  "key12": "4NSkjHcRwJPWcR594C74VJjVV6k8bKdz3mLLWfkTM8b4U9STd8CjPkGg67wy9qqTuKmqRPgPWCcvGxEmcAAsKg9g",
  "key13": "2kpr2gQPr6bwpSGqaXpH8bBBsjUCa1sr1CvdV9ZedGABCdZQ2cWxuid2kST1oRPug6T2Qct9JmaU9Szg6iVkkFm",
  "key14": "5DBuaT2HeLw6YqcqDnK8HocEYMAia1N8NyPaCKAAji6WKSnzBhtAxx4BwSqCww39BWcGcPZu7xcSbFG61sFZZHMu",
  "key15": "7a8iKJXGG6kic14EYcRPjKJoCn1Gzhpmto3guJvo8jz3E3cWQsT8xDPXCk7iPmy71AdWSbB7WV3W7wnJXFJz7WY",
  "key16": "5oQstQ7TfTWpvBh7LEK6oWTFRL4tpbh5DwFRcEh3poc7XLs4B53axZSctwtsCP2B9MyNWkT3ALAVuXXqWXCX1HXK",
  "key17": "5KwDYSiqwUzUQWXDTxYNZkgddfm5UUin5CHS1nrCPHVNaUeuyKgWxQAbaRXGxXAHNPBrwV9x428Ubo5vBzrv8yZS",
  "key18": "8Jdwz54rCzSodtJCVksyA4uRzPm9ey4A8zVj3w1qwMRkqUg7SWWavCvWmzSv2hKwQrSLdhfz45TYZLss7z4jDDr",
  "key19": "4NnMwxrhR22jtXG9uosE6fg3PEH8tHLZ2hyBMB8LSuzVuovf8K2LNDTLU1EBPWP1LuhFSs4BnVxf5nKyy3LeR8k6",
  "key20": "2CSnJkpH6tXAFsQ7qvERnLriGTfNRBv5rmRDedtpafmPA4sB3m8MzYTA2CGNB3ZBBa9ngh3DZ2BiwY2Zq8NY22qt",
  "key21": "4mWhDNLDpQWZRGPbF5mHkBd7WDr8zuW8aj3kG3Pd5q7CpoXwhTQENNEBZLVc7XeUasJVFF6Rs4surM4N7rkmaFsg",
  "key22": "55SgH2TJB2LRum12gtufcUkYvUKatE5xzw3srMrFbaJGxEURZhwkecFAoQjvpucotv3TFjxGum4HLUW2c11AZWGJ",
  "key23": "5Leb2qDAC1wXfnQfvKT3hHkQKoiNHC7Qwj3iEv3FNvftW5uEpTfruzuXNPWwGQVvUTFn76Y1NpfDayHuYv4i2WjV",
  "key24": "4YosSP8NuRcEJmCeEv6a5RqXf2BfhLyXvdcPq4VBgEpUy9q4yKTLJHghCJUmX4a13dNUyG8gbzKXVsu1MQtThYTT",
  "key25": "tfAhGpkdfH8fWVzbFNwUmJPWE2hQjgpat6dhHFG27DjDbEq7gs8aFd22DUxzQF9h3iLTDuviVRVJq6FTpgwQNfx",
  "key26": "4AFBz8ToXKUsU3shvYBy3fArfYZF73fmP5H9oHUCfa8PTnk4VKeLiowFWXHaFyiPTXNGMKCmXBjMogdCbbhfAxeC",
  "key27": "46ZvK2MgxoqxBGSQMfUwwSm4g4UJiUTUUeY5gcVnNXPQGLjLYdAmACsAtfJbF4s5Cabacmpte1HhDoBJ6wb5nvqL",
  "key28": "5XBPanBf7S6ru8GT74HkYCb9R2HgrmokLSm4MLsRcKTBvTyHuhByrTWupu71k9rYdkqCgDEpR9e57tWiQwwunYdw",
  "key29": "3naz2tFeJDHvnQ5Aac41qgkYYYCu2mctrA4FYLdGkb35ts4gM2j61dtbSU2BokU4sgj7d8aJt12XAQX1Lb673MzE",
  "key30": "N4Vp7eDvQR45DB9MoJ4Rn6yjGdRbeMbRsWyDi16S5NKqBhsRk96mVmKmWebhxJqkrx5PgwUFJCZMBzThuQf7rqT",
  "key31": "4D88YRBzndwzC61F82JYEqSeZ5R5hvt68AcQHoxBmgHY6WJkg6CVFearGh7cVewUtwYs3KicBmYRSv7ouZzyD4d2",
  "key32": "2CNiMEQZb5xZddCEUbVdk5nQ7ugjwGs7su7o2nQU8mABi3dkcNhufKgbAcPrG3V47yEoynGSYskdHpwmwFi4cv51",
  "key33": "4372qKgV1XzHHDdHLB1BEgXWGNdjKw3sd5pwmjvo5U4JKqm7ZxQjCH89qdJXmvxKKuweHhAGeatGGeu3z1MCczbt",
  "key34": "2HqmYPJGBVKHyZo5kvp5rnhERmqiKBqkajebmV2ha5ZQp4XzDFyabBftjHL2iqQMrVWJw4Km8bmCh3tZSUkx6aso",
  "key35": "49T1bd7hdTHQLyMZbbSCtHosFRLsTNKGmbFxKvfCU1CXsRpxHcqVMgozfd8bTZvWQTpaJTcf6KehPzw3iS8YSj9x",
  "key36": "3uQQp4q1qYJWRCRePRwM5nRsZATj8kokgnT3YB9LLQ6yYAjnnuJ4oAfEtbLcULec3LYJDnYp9gsZze4wqBwqCtLo"
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
