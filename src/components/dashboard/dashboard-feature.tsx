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
    "4yiDZ7FufHAWdue953mkUH6BUg6Cw2PAuG4WX3132Dzmg12nh4oR8o1QSxr456kpYMtX8FZUxP6oNAKmD87D1Lzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2teAyb5zRiLYQRm1NSfoAdUV8S46oAGGkFzv6Pgs4yVSwzuvuZ83JPFhZjfM9Z33u5iHLtSpntpaz6WpjrnDA8SW",
  "key1": "2mzLVPN4Tkt6veLy6HWjm3V3cexRFv3W8xp6gLbZyvSKcB6KZp2rmjSR7DwYbrR59pH73Ws2yAGje6nsPb2azHyg",
  "key2": "43QSLhJfeMee4c5pZ91hKboc9wmkBbHaZXezQGN1LaxoARV1sutnfAC4vKR5JStiJXJooj4ttBFtNMd565kpL9Bz",
  "key3": "2t928rNag4vVkXBGhzb2HdDXaVBScNq8HEW4E1iUMWcGVDWCJuwCdNs2Q1r8fC8N6vda5uBYUcapNtchxExsBB4u",
  "key4": "4spp1i5ap8i4v5bH5zcMymFVZjc79SXfyMk4c7BqY6f8ZwUav1hHDSopi1t8Ci2BZ8HU4MDDrvZGnazejd8DVwvh",
  "key5": "5HEPqsJU5JLeo2r5YdRW8sQWyJePjZTpE7mWWrZp4D43At2xcLbcisUXgt2kmTefNV1QVkDtNBXiqcFRHEF9BnCt",
  "key6": "5W6NAqY97mY5feLxgHfAT7thpYZnVPPb6A5QtqG4GQprc6K6DaqsvAkYp38vgLrpJj5Q43bZ1GkVV3EAYF6LxFVe",
  "key7": "WUkMTPCKNWDK71oqZmddT271xqAKdAHNhC68wLmGMaPZ2RdrmG8vNWt9o9jooXHGATCmnSVx5j5bx2H64LdxZs1",
  "key8": "3fEmKQZUC2zf9hYx5CRRswxLja4zQhoY7vHBEgGTmFn3RyqeoJbdUiTTpZSXLvXUYdGtzp8U7t4YBjyES2rz6Wf5",
  "key9": "4UXY5M4pDBRtSrCcGXE45dcVaQbMjPPLLB4pZqdnGtNzhrDnCDcrr2q5ThMfezUxV2U1p111FJJoXmDJoVPCYPmk",
  "key10": "32UUJUVtTY4WkfSiimhN6TxtL94Cda1yBLcCVWPUoHbbs6oCNaWgwyNC7mrubViKbdEgh4E3Z6JKJCdB8RtQGv5r",
  "key11": "44aoViNVYfGHxyqMCoMtpwwcEUPMs7j7uqtgqNRL6yutuuYkYepNdKzPNhjbEDzAZCB9QNuAw31GPx1j8uukcdpb",
  "key12": "3BsQ1TXCXSQM1gvd53mqetSv6jpNABoLQqfrtVzzUXyBrwzJDGfHmFETj9a7AdtyNYf8fzfymYF6XunJsQPXBgXn",
  "key13": "gji8xQn4Jqw2JnJ1BYtjScpyxsxBjKiaGdgza7Yixb3JVB3LwAe6R8Hrgk9Z1yreimii6kWXT3ZYtuwtKSGDCYd",
  "key14": "8FdCraWDxLZ8sEGqgLuhEBkgEtJSgi7ZPKNS3pALhR6RVZQB4o2Y83AqYGtaU2K8Cp6JEdJWZV2XsfthKCd32Hq",
  "key15": "41UiTAg33RTGoXW6vfPmxXyTs3s9Rua7iWcAgdrzdneCpz7vqS8u7jSRYRHpNqHVW19iTtarZJpJoY6DBmAQGe7E",
  "key16": "5upoE6Mx3WbehNmSpW2gSjqghWhGFmwvrnPnWyyEEjgERaXZpbcbym4fSexN6d9uWAFN7Dnqf6yQsxszbQdhujBq",
  "key17": "32co4ZhYrLrRuu9oDdbLPXdDokeaNTEDB64uPq21b2JpnkFWCorugJWiUoN9oCr3X4kfCBJ59r17yQemV2gX47PY",
  "key18": "2hstpdkp44y5EwRdhEs9pxGTNkduK8r5gVQvB1ya3uXa3HeWEtWyegQf6CTUR5h1vgA4VMjveB9f4b6MJEPWCtk5",
  "key19": "4zSsZMz3LWaq1xnX5o8EDsUoB6me6SrXF8UhZJk7yzSrpBgmxd8vh8uLY65yrc11XiqpEmNBaBMad4d1YJZkY4jQ",
  "key20": "YzcUnPfR5hwfiiybEP55am1zSFJGf46rDxAmAcRPG9qPdiwDynniT6ient21PidM7Lx5wwkKCaQfojagkkM5JP8",
  "key21": "4dRkPW6yrEZ2Aajt7PWWQBeMnEFsfcLF6gjon9rWGwehHyGifXX4ZNrcG16bJRNjPZfVyLZ245k94Wvh8zicXu5B",
  "key22": "61UphEVtRXgFH98ftNUWp7FTw5tKEjAeLaHUWNcxxpb5sAzTDHjxzYfDK4L7xyCUvUhV4NepzKJ3UjEG99KsW5u9",
  "key23": "W6rGHU2EkxUxkFiUavfqGD7VL2UsaLag93PWAncyN4iC15Yz5XddhhSQ3nGPbdufKYLNk7cVUGf9PqtikYv7X1X",
  "key24": "5jKfgu3rcjFQFiXshnWY12LsJVXgK5CWos6C6nxb3442AhZt5x4NZNmzPzbXEV1NzKXeiRWMP1B8R9aqLPSGcqHy",
  "key25": "64VM6njuMfZyB2JQpU5PsBXUMCqYtm6FRXoopBuVvoQYJEq9Tq6UJwXpt8tTccQhDjxp6GH62rxbLQYuLjiKPdkm",
  "key26": "2hBaDRXY3b4LVkkisXN5FWC3PRtRF24Coiy4Hy1bgQmrjLvhWJCtfeB8NskhJz1QSVEyyvwRrgfKe2jLWWmWc6oN",
  "key27": "2NHNShvNQ4ENVnAMFjTfYkRsqkGuGAMmNqBxDaJSrjZoFnfFXs4vBcppM68FaqKW4QnETnzNNKi6bNL4YNkXcf7U",
  "key28": "yfeET8h2aYvyqbpwWSLxfnbEcXb3WQB57HmHkPPxyMJDhBTdFvsxNopXgTofEALSfWoay47vnYSuptSHBruFuza",
  "key29": "ocM4bgjdJXefrmd57DTTMGgjVRtc89jstZH7zWRQdJrh23hMTRAP1Aq1fGHovCwjo4ZyP3wR3p5ZUgp9zVPL7Za",
  "key30": "432rUieE6GcGwqjEuM2ha7FqnhcNftgMh63EpSTGexQF3bDMS4LqFP4kJpaf8R2bLhUWmamMZBfPGfPZerntgu6w",
  "key31": "5es4ZA9ndr6Hzoyjw24Ej69o45bLyhhhD2HobjEVSEPJ3vibitB2u5KH92ky6SBZZP8YAVpE6PqPHcDT7ZoPXvuV",
  "key32": "2KTFwkb75PCb9bkXYqQpQ1fdXJpudDUAGtYJCDgSk7fC75a5ZJ9tuBPr7TSEfcsAeh8g51S3u6DxxQtKBCFv2cDr",
  "key33": "3RveqdMWsZE9DLkF5FoDB2MWwJwGhTM5E6MJ87RgjDzPWyBwS78qfcHwR9Uq8QR6it7EfjUqRdDxzm4Bda8nP4kq",
  "key34": "4hCrrd3hJz52ZDAV6JFpTEiLzfeqF3YRszUdDWXcJquRsz7p9U4NM5ySqMaXAdCfeDrRCKTHXis9ofnY3NfSx7aj",
  "key35": "4gVcnJoYD5vRjp4tDHJEnhezGhRTWU1R3j8ZQYWmHDAYVkELUwux4y6wr8Zum9WXW1oV33kxJft6ck4eKroa5mXL",
  "key36": "27RTGgNXTQJuBqVopro6YnE9A8CH3ykV9yddVGvKfirNy1t6RudstpgorgWaGhHdQzF7Wk2Zm5rZmdoZLRZAHmJz",
  "key37": "28YnjkoHUKq4VKhwX68Tmiw1CrxAEuQjGuuoTP2zyxdUQEU17hG5TG2jJZ3fAuSCYF2c7JQT7TrAsRwWFQr9a3qM",
  "key38": "4qytkb2Vm3KeMZZwjTmrhwX5iCJbU35vpkPjmQ5rCdTCiDdUuJXYzH16HzQhVJtNjcnU3bZnZA6LCdAXq75c7Ctn",
  "key39": "5V2uzfvQGnV6mZc9aeLPd6upYmrY2WSH7ifBAYjoUaKtx3U1MHPsLTC2VsACw4dF12FNVPCHeZZQ3uSAPRBAzhcy",
  "key40": "5ZkppXo39mbrmfWcNCK62robjgvBGb3XtqHLLbvLjzs5UWd6ypzRxfmcjLxtZGcDqHMw5jdd7bditUJkLreMy8uY",
  "key41": "4jabMgunroM6S7rxCZQBxQS3E9ST7dsuVYWonYxf3o1xns85b62bV91F3tzCuGBhC5iMZnXNd4hUKEWa34eALxfH",
  "key42": "TV42boZczg1iXkbJttuQphyQbMXsYevNowC9NECHppc6onmu3U2NGg7g3TAk24PFE2AcaUK6acmzgfB4h78dfYc",
  "key43": "4gM9YnB3ozHb57pFJkdGiMYejtgpnzYZ8WTjqgSc2CU963SD4nDJsDc5wUCYrxuFrBE4rursyR7DHXGotd8Qns1Q",
  "key44": "2gdfpWhmZyMBo6EXCjPpm1wYqAHSWvDRbkTf3DSHWupWFcPRAFGEc8JVpJbqfmuLckpXVDxNyg3Z2j85VBH5mt4a",
  "key45": "5vr13FcKwFMrgfJqBKFpD3qrunRusLNkdyVey7qDko5FMMfuLHFT3LF18DMWGxtkbBscjTEbPsCmMYkeAZ2dX3qU",
  "key46": "2p2qunFzsxwWWzmwB4nEY3R2QqkzRbVDcHanHA3abHm12VsW3AQh1EBfXZgLrQdpjtLTyPYKXcfTAc8r9uHqhhKv",
  "key47": "2yZZ2PW87HWqG5otQcTws377qN8dSWY75kHtDfKhz95CRj9JB8DK9Pi2N7iut6gZpFz1diGzboiSg9baowdjeoHZ"
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
