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
    "9M2K6jayZB9PYrvKHNYY37Eg4CXtkjXBMGC4RoV4XjsSkH6Tkr5cp55se5tZMujcLtNMp1HnNxc6LejH1TQBNZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BCuAv8TquEDQxGhNacTpzAdHErUKMgW6bpPAbtvy4u8jzAvTG6DxmhSEAJ8fP4xpcLXwBTyoNXe6AtP7mzLgzfP",
  "key1": "4b8z8orXELqbisWKX3QMgfhUhjcFjJmfPxfaRqKL6ie9pCTGMsYfXChYyF794uTpZG8MoFyqTccr6Jr1NKynZfYj",
  "key2": "39JaR78N8C7rmYdLebbrZ3z4i466MwQjJapcRN6HarLhBwLKHWmsDKcEQ3KTucZKe6C3gf3DZDSLJfEuLt5eis6q",
  "key3": "5a8Fq8fCHE6jEdMvD6pfz59MXbjXRPEJBvuPsbzG2qteza2XY89igBfJU4iTTHQZ66S9txCLuKde3p6tjG4Eg9S5",
  "key4": "5XctG3jdrSy4eKNRGEPiUNhm5b6uoCJeeW2dfhYVAZqG42u3J9isq1f1KzthY5djwi1Tnbycws71RQxqrFzJtmyA",
  "key5": "3w5JR2NztWaNehsturqrXNWZP1k21yGjHr5Yjz6snXuHse4ZkaALwjSJ1wjHcRJUybnyzeKr3HjMhQ3ZdoriC5bh",
  "key6": "5W3r7NdgQnCNaLtSrDga3CeQ5H4MxwcgZsWhn51AKTSo73Yaxdd4J5tpUUukJXrN2b15FAMJSc9zaB5D2fya66rV",
  "key7": "zCA5WWyzwjFc27rA2SC8qBLXp8LGU53yTVgEFCNSXxcLyj1oH3GCj3ZFQfEnqFx89ja2neQ4i5QwMSDifptKBZc",
  "key8": "49RfsLj6xmvGHHgwozbQbumpsW8W8FTPszqY6HzGsj2v2iH9BAmvEx3zvaPs3RrLq92K1zgsHaCn6FrAWMfLoqHo",
  "key9": "4aWt8Sp32Qt2kCHSTaz8gFUNx2hYfujLsfzkAFgc8nb7UUqWVSShpQ6tKKifNJWiF3gZzuxUGeBJtZCAk5juwL3z",
  "key10": "5JuUdh25GZjsjNSej9aSXwsNipUxXViuKUftXxTHVYzGTtSeoExLK9TDzuuYvnKVefCK3knRRfFNSq1tu44ghyEi",
  "key11": "5QVhaqTg4Ssm8S1Wdfqa1wd8uUijLFvD92NTXRNDnTn5GB8WH9wjJvuLCituQj1L9KQBEvmcpDCMAVLtCYMritaN",
  "key12": "3iWwvByA2xAcMtoPFVbWQ6fRopq3CMUjPGsgevCoRb5ZRfKtTisKRpa3kTeZXTpHqVanxWu63XDHrfr3KehtGXkh",
  "key13": "Ty1uyoAZtdCzscWLVRS2HFUusRYwbRFLKwPnc8Zzt8X3SwAU1Wn3hhiFRs98tQRojx4LR6zyTtJxL2bLvQ6ip3x",
  "key14": "4nFijjhvCTC328cJaP9Yyc8mBL1q5wRRUTqk9hPSBT96L4YpTNj4r3KdpGXUJQA8G9aw1teHUXszuabzUKnW83vT",
  "key15": "3ZgmgUFG4S28VznqdJ8fAgtd3Esy3JmYMCmFzCpwvoXDsxzQt2eYsNWEp3W8H3zUDqRxteJ5tBrHyUPmf5Nf7xyN",
  "key16": "2wdqPDrecqv7uNsVXVsd1H2HMGevDixNsNokTZ13W25QYaCpe4Au99a6EgkE3D3jQ3QwpRKRXF7AVKpsRJuFTpN8",
  "key17": "4JLGevELgsehWry9vSKWFHpTrjE411w9yveJLodfBY4NJ2KVcZaDkz7xE5yYgEJRGX2mUpLmduRwocApmaeLLskY",
  "key18": "2FoL6ocNuzdVEdALdHAjZdmncinNAf9LgL1tJM3HkYzhyjMS7uWqXhGgWA1gAzwZ8MDpRMBNFtyWYPDQHFXg8t69",
  "key19": "4KTHcNaNfQ4EHSdqUYjAoWdsnJVsqpLPfPVQEgpHmPJiCTQDfZyM221xngsh15k9KG239xp9fW1HKfeTnQx18uwA",
  "key20": "3xoUtNZMy9txJxsffhcrfHVLmvTAXanwFSCrKirWZdDG4MdDSG9RpLFUUTHFTQ9kD5ZRHixbvofZJnp1qg8vnQH3",
  "key21": "2H7Z1M1csXkeEcJP54BYSh3JrU2xWDogWsEm8kPBaXpfcnsRcgC5ZYofAnZe6QcNcK5BMfjxkGdAMXMY8PkJ4xEU",
  "key22": "35wxvUDr9VKyPMQ5vcQvj32VA5FgcjwSJh1Bf3DJAN5xHjboHFMg2YNR7cvuz85LJ8usY7Kr9SqehgD7WUGMPDMM",
  "key23": "VYaHuWJ2okten2PTzmC7itMmXjgrHwd4vGV8PJ6bWBrr4pmH3RuPRNmmV3pxEX7uXxB1qxo9YqfPwtho1U7juJs",
  "key24": "5UL77ra3Gd7douW9eFuUR7pjbGLGn7M6VYW913fGeSKrdpgmoULXeskgZaRzxX82yt28kNHBQLt5Fmv1NL1AgwLt",
  "key25": "5Qa4NBC4Jnvc5o2A4r6gcsQG82oWeUj83UBEL8NdnYErivJpupjQL5SDr5GH252QGWRAUpbTDgXA2kjD6DmGoCj3",
  "key26": "1jG6xZ5C9LnnDpZjDa7jnsDLAvZ2z6CT8RBVvC4v8rDzHsRgtEF3XRxbSJTd2NpKZ1dLjuJiRtHCFp1SMvahq76",
  "key27": "2zyV8iwMcSTHL4yfHkfmYKzreomp3QXn3kLv43AeMQVtUDytXp8LghmYamemKD4TXTSQ4L9zpWL77PMqj4kLJnC",
  "key28": "223DdPf3yasQKnB9umKP6iTzVeKspKyBYW7vPr6YwYGz9a9KiTBaYpU9mtRstcaoM3KhAdn4o9pBn5oBaFgNPTNw",
  "key29": "7pv8Wj5gjHo3iHdryETJmdnZSqxJTrGFZwZDNRa9hesnZ1mjWVauWsSjSuZoMtRJMcy5j1A4iqojT2nkoy2bjjd",
  "key30": "52QY2MpQS2SpLMh9vrUqyLEAg7w9NUhTFzwiJm9wQoCGWBPCiiRGkr4ro9XrUPkioLLea5mLPkQ2q742UBTnRHWY",
  "key31": "4myA16iQHqhrVyJBWpucB4jN9jMTYAnFTMztBgF3Uo1WMxiuBEu8ijozSA3YzWUZY94pNKL3zw4U1PQthRyEoVhW",
  "key32": "471s3J1GdJZJuggRZZL3qzUSjTtZW8ctMzd5Pa7oAfKBnwuip284rQa1i7g14uTxQzqnt6QRQg28z3L5hMc2iaLp",
  "key33": "3XGwgEE7WEXZWXoBw2G2vX7gfws7QcHs3ebzDYba6NJAQEV3k9juspXHyZch2PiWnuE6Di7nSBp3Fs1yCU4Rrckv",
  "key34": "CCfZUcbh4fbB7zyAbZMnFriJni4yRbxR8aLjLqTQYxXxSUHcLeNFPhWiH754aKFoMXFFZbHh958CMpyf3cEmay1",
  "key35": "WUhsoZeBgLQcx3id7Yu8kJ8oZBEmTsEBwP3uSVJC1g3Ck8sAJKvGU9odzJFLmsA49CD8CobnfceaSDxWTc4RssM",
  "key36": "4ar4tePceqoaLUfDdc7zE3NSBaR1gPcCiQgfjrt5tUU89Mpt5jwe8JN1J42Gj1HkyMFpek8GjdLzcc8RHRsVRA2V",
  "key37": "3iq3tDmFytejteZvZkiQFtXNKP2iGSJa6KZKjxBgURXG7ucsJPWugiTxTs2y1i3S2D6aCNmKpGb6GZigxERV8uZ",
  "key38": "5DUQ4vWpp8guggtmu6rpmzpTmPRTxwJUUCPHgaATAHdYGQ3uVS8oPWohjjeD2AUbA99Bw8Sr84e5DfQbVpkSogAz",
  "key39": "2q3GT9anQ7LYttLhk8vmLqKe8bEP2oYthtcocduSxbZDjc1mmXEtdE4kDaQppx1d56L4xZRrQTpEm9qL1G22wZWi",
  "key40": "2ig6JJHDikMgohMmfzx9XdqwoVgt9z1GWmbrEhD7AuToKkcLV7mzyFQ6e6sAixpHZ2VmcCXwQHQQKQ3Atnr3s7uR",
  "key41": "3MFFeF4gvGNK7NetUs58VCnwiJjcTHaBNt84GT7c5udkCS1Mfc1oAjhtDbSq9KvvoqjG3kdXn5EwcMrbKidKgVh",
  "key42": "4Cmk8axS1RDctp1kHD61sGWPb8EvWpyZXPisafaAXEWKemB3DrxENo8bFu13BikEKi2adaRB55QkQeXYC4FZTpxm",
  "key43": "ueefLU5wZg8oAC5gRDdksWC6VYvsS3KqxCyVConQdmDHcb6Bme61ztWAkBFudiJ6AeQ1mqdUXWeMtQX7am8ZRwW",
  "key44": "62TAKVzmG6R6vd8qvSfzugH5y4sGzF9qcwMgnM5LyToKNWgpAGoDgREU7KGoCzfHxhoDdXwWRUEfNUxdhy4WpTip",
  "key45": "3LaFfJQZ8XtNip7Zkvr5jWhB1xN4GtppnXaGX1Dy2HtWQVWTgwgvG9ktXAEs2Xvndr8wTkZZyT97bGBkRdbBmpLR",
  "key46": "5TdkffndH7d52vqRcfgjkcjYMAmc3eKgZbi89p49SFt62mV6NPP2KJ33U2mKsxy8Q3WySgArEHLvxUi77Ma2eutu",
  "key47": "4aWAUPBbTn7YSGmjQivNKgaTLLubxGFs3v7pwhvVDGLqtYNLVQ2G9ZpXTHAvG3SjQxufGt7KCJApSReoVAtiHpsD"
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
