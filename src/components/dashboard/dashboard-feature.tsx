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
    "4eYYe1izudnXB7rRVNCWBQnQ9mKtdZShHCXmrLRtuyW2EFjZYSsSpvWLhzYtbM7MB9ogbNaWJuyi5TUnig2BL6HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KbDj6xS5F5tSd2K8eSPRv6BnVrefUEfPTGWQ9JUMgxxS5Ffk1818sGKEMptHen4Sw9aZi8DzV8xByg9UtZ9sn61",
  "key1": "5DmdUtQU6ZAT88iMxVsnHZmoMdFQPxBwxyyF2EDYD2kynF2N9FyLRcyUkdp4Tj7aVa7F3YXJcP1ToNLrNWJwWo73",
  "key2": "3Pr37fEG7vcARALF5CtSiGrtpVDGrPGHTqwz1beiVuYQBcYGd5jhDJoU88yvCCuF7oy2uMZefWqjasg4BVibKfnn",
  "key3": "5TLG9hxRC5fXtSiXaionMjrs1yPyd443GD63kAiMuBhrntcL9Gdxuqft6T9BTsTPAKhE3tSUN48PAWwdz8PueS5N",
  "key4": "3JkcZxh4HZzbMkCZRHC4CDL7ziuMzdeaCBLFxPHA9MjD6PLHDkxpJurERkTcnUYMuxgAUtr2YCYG4UYqNu4sFnwb",
  "key5": "5CHW3t7GDBF2YPWeKWBWQPcHzamrn9RPPsijXsGobQCohzdaWcLJkjL5wAscWCjzSYGrsmaci1H1D2GW5JLa7CDk",
  "key6": "4TLFza3s6i22Q2UbWKBZ5rTm2pNB7Z89dYQMB13Z7wAGr2Yz8698bMNfVjWVuMiv6AxFXr9jgohjhERarqQzJhrX",
  "key7": "41hrjBaRSe71pcsJZusDYHCE3ou6Yd4LwsDm9aDqZwhdFdihLN6c2hMvtqhE4Kfq8bAUJbKz9Bhg9TBEM2FFiUjE",
  "key8": "3KsfhEYsTroqX5SynmY8youLqXps3xVf8nTuB8ST19zw13M8MBby7Q8xBb67L8fpotXdTaEXfCie7hTxXFbpkggi",
  "key9": "5DWxnvrSfFWhKJvnSKR3KomGb1nKpKEmxGLnUAwwQdcn5tkgK2EgJ7PyqFLNv5sjXJPjPWda5qZ87Mbb9ChG13rC",
  "key10": "3dQNK5RMz54j4Xms239fQmdvk4C8BRmSSaDe9pURCWZpK3exxdHyh5ia7R8DTJWXFYZbYK1iG12gwMiqMYrzFJfc",
  "key11": "5eRLPuL4mhMZTfhbhLEG1MzPTHnF44VjhcJwB8Tubju1v2PJiMtHkfeQLuoqRzpQ78VwD8HTeqVmGd9mcMPaJnTM",
  "key12": "3Eb3AqBhrKSYkfP5AQnB6A8c1t9JV2Z3TqSa47HS2jZNmrqDMXfcsY749AkeuEQtRrxjEUu3KvaG1tKayp15kkK8",
  "key13": "3NhNiASSrNE7KZoAywt5ND5vJDKKbMWRpZ27x28Mfb3AZ39HDW5wv1zaDhNqDoUb4JTGY39icrx9PfGxSTkVoaSh",
  "key14": "BZP8Nap6YTcc9DAjXaaxsf6BQNv5LzLUNoyomDV7zKKskB9SQXuRuMBsfBDfuEBq9HxufR1oKTdNGhCNFToNJEN",
  "key15": "pntGF7U2kT1w7Zb5HiRgC9RWvtMd3aeHUX6qEPSTfH1avSphrtrBgNNdBEHLMWFx9Dnz5DcxhpTfz1vpmPRfFrr",
  "key16": "4TWeibek8mWKNc4kXv52MwCqy2JzmSosxSSPBxsBE9a27MtqCTSSR2m14iSVNAhbUCLPscVatL4p9CNca6KGes19",
  "key17": "35ahwzLBxqbPnvnQ57wS2sr4EH3Rrk1tp8P25AJL7SCMCTrfkJD3PPEr7qBhAf73Pqg9Ew5xD28mSs3XdiVo66KT",
  "key18": "3raxdvjcMwB2ZQnangkUw4G2wU93vYNabs9rTyBh3Ut53QHAeo3TPj4j8da3LdhqD9o8ubUdH7rjXZis7Tu8xkqY",
  "key19": "CHLHXiqiFBjw54xtzvPjiW1XKn8RsmeHwkzHboFfDahrL3Vv7E7hWS2ux3RHZYTdCszo2ktRSKxfMoGoEz1C7Ar",
  "key20": "5ZhLvPPrPnqU4AsWGrYNZtvLzMYMe6dgEV1CcER51trQEps5zkQQXBXtwNEEXPBuiDSo7Ejj77G17qDBsJXhjRwC",
  "key21": "4gGJ6QVGbG1aBZAZeuPQp7JbKgpQ1etREgxbovPVo2vYiBkAAxVYtYoyPVYBbZ9j2wruK4A4P8tesC5r2HcEg4DN",
  "key22": "2tRFxq9vdAS1bZ7SH3U3DJMoaVqXCjuUXXJucUjKr3KHgCB15mXnSqpBEhpnBb4YQDNLXaL5yqkg3FKAc5azghNa",
  "key23": "V7fisNdHFE3hGRaUwsUp6RdCnnw5UpkAHcfuYVcfYoBi4hBz82cQz1CUcQfXuzPbERG6snisoWBRHdSUQmwnjru",
  "key24": "4nisXtobH1m1w6NWiZXVCLHfEhnXWAr2xsaWXHk2HtHWKaK6xWsaykxy1T2F2gibMBdp9z2otKpsrwQBH3YAng4F",
  "key25": "5n8bNaXpYTRCLSPyu974nyZaVgW1ELCzTvbcuqYXdCQgJ8jM1wbUAzToNXJTHfBg7GtLq7utEouia9pDLcG1aTA8",
  "key26": "5Haq9jzbesxkDpMvpeVXSvaW23Xev6qkKjMCEDiR3roTadd3oUB4fDByF5WXHCCfNMJvHUEz3zFtCBskKKYdoT44",
  "key27": "QZL86PL4WFCY1rhjw6dHPKQi4SA7W6Z5yWFD228t23N1t8iprhEHCcQNEm1T4wUVX4xuczRjhjkzcii2nwAsCAx",
  "key28": "VH5v9BTje3D3TXcPdULy8PTbvvhfR9tjJQpYNMvBXYZbuYRr1KebgFCukLyT3vT22ky3L8Te2LHrmAcYGipm8ao"
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
