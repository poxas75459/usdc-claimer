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
    "2EEZVp4vdcSdPsKD9MM3oPLSdwVobutopWs4SzQwZ7dQxDgLGSNVDzDLQtPXRHBxpUbCJWie2Pyoa3NdD6AHogc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mRL2n1xCVo9ueLWQvZgaiHsiTyYzNMFz9ZKqFLa4JtnAeRdb1qmJLezbK1pK8pwNDQKjJXRmeVWcgm8MqsQUwy3",
  "key1": "4DLJ2MrQNCCEuqGkBG2LDCCBhpYxUuePNLo5WZeTTdFJ1E2PSV3RnmS2RLXqkgFdRNz8ii8p1SckbRmGnNEWtVxx",
  "key2": "4sFzz4VB7GHxTp9UXRK7Lu1RRAeppp8drb7KkDxWRRJ9moEYe3NHfeKUkuYuDCpJRRWeDAqef9ALjMq3RFgpQ3U9",
  "key3": "3n7vxmetcBesFR82DVZBfSUD4NvVAkvT5Dyn6SiJ6Yy7z255QHoHp6JDdgfpRTaiw83LEpE7e7ChurX9otab8VFM",
  "key4": "5WC4U9zyroK1jNFLWPVCGrnM7qZaEFsftEMp8m8DCxeRkLddPCidshswsQBRojcUPnMUMX3gXqbvgHdxqnaf5xZj",
  "key5": "arTXzLV6xzhqCYrPrjkpzqpB3DTDsM7MBvrayRrQBtot1TCd8Ubv9rjGo6mn9gHqBd1GJvRU5JBLz54C29W7LSS",
  "key6": "4T44MR3HcQvgugw1PWnRMrcyJWkoTuiAxvKUxQRiaMEuDSYKvueh4EduveDQiDJNbjwwWpa95mQRhTuGJCKTKwaM",
  "key7": "2Ue7His1aT98vNHjvZS52q9wxkbxT66wNgR9DQBd2fGUFLpPtrR2JpnucVvrohv7kJQmtJgJ9hgm5jvmcoQymNwY",
  "key8": "2QXTuvUVP53FsaputfKgTtzBEGZq7nW5uAhm4yYhqf8PkNDyHgDrMDdt96uLiygY3Mdb6bGPUwopAPxLJ4VZ9xMp",
  "key9": "5PBJ8VWqu8UnMiBfoxRrWx2kLorWWf5CKyRpzA8dHrNf7M7ChyPYHd4vABV4a44bfB2EsGMz6WmhCiN32ui1nbhJ",
  "key10": "3dqdAzzGUngboLYYMiSba7mgK7uYTZnoVxdZ2pRwW1UPmFDMpgWCusF637Wv1EVX38U1E4er7fZCd4ppZkDBCRJM",
  "key11": "3TgUKQw4SQnjKsD1E8VpdgHQTsgZPJJHgf5wLoDKdopGmiEyrQttjyh2CY2mGbnYaRVRZDghNHMZBnr47UzBeS9h",
  "key12": "zbTmzS8RF1jDmgPtuG56vKtrpWokb3XDXmFH4Ja9rzkxdFJYqMEKQaa9VFrn519ppCQSf4gdGHohWkRt6oqygZK",
  "key13": "3wGR4eWvshpWqWFJtRmsan3AjyY9doBgbv5A71jwkU6AjFnaLPELfQXfDPRx14qPfMHiswr2HU53QaJ7KHxKS1cT",
  "key14": "63SCgWnmCSH285watnvheu1K22PUnuVwJdmCRtZhZ6w4iJUSvJHzQwtRDScL2jUcdgEZqwesngvHeik3TgyP1ajW",
  "key15": "3dVEZwihfN1brmMLPJBBTcquWSqPUBNwWjKkQiiNBNsutGwnPQoyVqJeGU3n7ptP28EPZKpNtCDXhkmhTcb2Zdmg",
  "key16": "4Ra8ERJNRdcVf7kWEQMXTzkWSJfLwLeTvUzG5fEm6ogjZnhCnXDsWeHYu6JDRFXKWCcHShXE6HTWZG4Bc6XAFfpX",
  "key17": "nnVXBMtjTB6qTTPCie1tuUYrXdnyuQN7Jiqh5uMgcEk498RGGoYD1AYcmmPRARRESreyhzDdZ474cTqcxyi7d1a",
  "key18": "3Av933RKSmkDY5hryKxn2iiTCQydasA6PxRXHF2dfFmcnPXxRN7uQhgj25gVWtLGRxgrVKTi6caJ8kxFcrRQ2nYC",
  "key19": "23N6m1qWR2akz6MySK9JrpXZKjUYTs7SeNUP35MNrTARN5sfuAyjHZ3MJw8egUe4Jh2FUnAVDB36pRuoyNatFwrA",
  "key20": "2mZ6oaX2siQtqUi7Eygkt4JhaYvTtugU3RyKXNYVWox2Rp4U11yy7dGDc2SdPMvP6nwZn4g2ZQNT2X3MPfZsYxin",
  "key21": "5ABnAUTxAsrxAaTnS2yozAQjNqsYfnDXwTtWJBvwFJZhVimaryHujnfxMD56YLZhdaUY5fCdgnESprbY1dW3BJXD",
  "key22": "2wy4Jus8F4XcqahAQwKimjM6T7jKacpf8Jct1ShLpuSwsqTUvNcV6ZGbg7NEp9bRaXDPFawxHj54D85xwGUBXnXp",
  "key23": "4SwASS3ZjTtRFJunAqSJ97Wz1D3ix4uiXV67tvaXYACX4qERpDzq6hVCs1AHbvzF2NCfPdD1Jzwea8UqctKH9piY",
  "key24": "4MFxUhWaqSF9x2Pb1fUNka2xTDGqV3mmmzurwZWfWxG6ae6FgxyJNCjiwtAMHHjaWtNMTAbvMAadvjxEBBSWTWE9",
  "key25": "37Zi84aFzzAsA58ikpePKrvqRNQrDjo2gDc4Pn47nD7iiCqmWxxQZ6mBLdR3m4sn4Cpc4jg17k9ZXQ42tffvWZso",
  "key26": "4EiYoL7VQ18uqm4xt34G3vbdzer1NvQhuza55322rD2zDwDmrvEVBqmbY9ujndmUZTkxpnJwgLA6sUuJDsvgcxrA",
  "key27": "4s1VLVTTYC4JeEcfmz8JHpdYFarcmz4Qy5pU6abcj1unjNzYRKP6E31LEsTQvTJH7igJ5wBru1qasGuhZtP5DfqH",
  "key28": "s6iLJCHsX1pp9WoNsvUDZyzrC7GkCP8SU17AmnoMbyFb1Aq3oYHDXnxrpzBhgD7P49cUZ2P1RnAd5cvC3q97QgV",
  "key29": "33i11LHaTE9SHv7bLjbkA4agGYDJXS1zuLJsUnx9MbiFE3Kr3ptNGozK8LUmZtN3V4kFSKKzZ16eSWbBdUUEGir8",
  "key30": "667kZeL6UicoBFJgKqRBtdgCTUmPeFoR2fEhbYhZrHDXPxS4fjXLkFLbc2nMRnkB2vmEQMm7WnjeAQp8136m9CU8",
  "key31": "5f2sJr4sgTvPxPSCf1xxLEGG8ufbTEu7dFpDeqnZLJSe7bjFvwwT1rJreAJjsJ97aMrUdfshq2dNvSKMyEMA4JRd",
  "key32": "WPRUomHoeUmjKrdkZRkN7QGpTQ9uFMcys1ui3dcb7uEJiUNh6bzBSYPRZ54du4pCafDRRZZYw6tb277vmVnWFBL",
  "key33": "5bsBekr11pyX2XBUTB4MDmvsB7M6GnTkXfsAD9Mdgbo9MdYcAqs1MYRUUr53S7KJk5L8k7VyxuvqL74UP871LSsx",
  "key34": "3BJuaSizpwdPPxB79bWa3z4VrcuUUjkeodYCR7BR1JzjueH3Ddwn32orU8ryBiwiJaD9KZfixVqNybMGheZbX6CW"
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
