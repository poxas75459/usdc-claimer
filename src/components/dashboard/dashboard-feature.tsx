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
    "KC892h1nKPKHyJEKVZXWRMTyJva69DAcfVBMwk26xmKnuVjwW3vbYbPNK7LqiF5FciJVw82vL3xs9U7N9Xr8BeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65tbqhYF1PLecPg4KwypaR17EiuQs2DSZ37hoqKepyxebeVoSbVg1VXPX7hzrnoXvrcApcf6M7LKGDNS6gQWtFRD",
  "key1": "5iXN19pu8arzhFXM416iih7tkyuLfzWbvZhGsZ2e2KG7NtcXeooDZrY2bUdbcRvZQCVkjmBNwT1pxRT6MDbBFV8z",
  "key2": "5DTfM9gGE3smPUNDCzK2mcVj9EyzHDeD1mHSxgYoGARrzBX9vh916CKLQvTBdpVB1JccHT1bu9382tTmjJUbTDcF",
  "key3": "Vb5ybWp2dH9BCh8tnb2qXuJEWqcXqAPcYiFQPRHjFrAjGpxw8pmcGYwQYjnXjZDK6HzMjMEYEdHogoJMDrm4xDD",
  "key4": "4uik2zyQbnpHeXpeoGaneApaj5bdEgXScmkygsz9C6NwRS6M27sFBXcx7SvAwJocFH9bPcdNjCdTQsZaPXktdobH",
  "key5": "4GLqotuofzAzVecEHcD3wUWyk4gakuz4iv7YDQBc9J45jELK2PCecKyRTu7qsHmmmDm1HMjCbcRPBYKKndQQLCXr",
  "key6": "2jLNC7Qk484FG381JmyKAhBvy1btc5FfAquA9n8eJvEhwpfCh3FsfS93aii8BVrSGbBUkPXAFtXHjA2GZ3efhqZp",
  "key7": "2DnizWDPTT8ZBvhhxeRsqj8GHmXupWhzW7NHReryKY99BgEzVne8AUn2APCLP33CU3V2DtngFR6xcm6cr4RT5ZqC",
  "key8": "3Hmo4xhUUm7v8bBYN7URwmvbVSMiHyFo2ArUbVWtyCS4PNahiS5dcbqm2nSTKESpRLbCSpV4fdKmGT1k8D3Mo2uo",
  "key9": "2x2kimEE3SCoJnr7dg8avMRqkpaM2286DhS6QuDE8i3bxreq5LYyWrehG7iwveGtXRkSSDNbjSaxgzAjQYywgHUw",
  "key10": "3vyBiSiJqHJ4a5H52tVhsVdBacRYNkQTkn85zEdzwPA1ubBrZXXX4wxQDzxjtYjxmfYAwCLwdkx7ZonHAbSbTJJW",
  "key11": "2FMqsu8aPk5nmjrQXK36aSkvQi1LcHoY1ccsCdktaTXAvZeko1LTrvUn4WoqySQoC71RcN3gyMea5DYsqjvPDP5j",
  "key12": "P3fXbdArRFzT85RemHiP8cuAgDGqo2DtoqszjQANFNW1iYjPUczPKqJphdRFzGMqQyL8ViQELgN6Nm55yMRwPKY",
  "key13": "xRoYCH9fpe3BXEtnCyGqtFwaPxy4bFVDJ9ghWQBWCoLYK3AhqpmQSKPMhQAzrzf5GDyykkjjkXz2M5u3NLAPgaW",
  "key14": "2qqhu9EuZG57oVpcNuq6aCnK9exg8zHwkpJJtXVMZr3KNymPHfQWhWS4xQTHwL3jQgqhXec4YBxCrz2BDu3jLfWQ",
  "key15": "34nkvESLnt6NxLKzqEQhk1nBA8xBgni2EAaM8wQbPQaD4zxvLQDsBLSmXJ3smSCQ1U4a554XhQXgEiQRU5Vjuw5A",
  "key16": "4qGnx2RUjA8FUDpAzpvxF8w5tFFJdipHkmbK79dFi2LppM5azx4jwSZtyNoG7ZyuXCtm3YNG5KUhPVBzD6r1mBz1",
  "key17": "7jEGZatzKS5VLCgixVQxVGduc77pMF3RrHn1sF1Qa8vq4w24CjiaeD78HtaYVkKkRzpJa9B2Db3eRnpddnbs2Jt",
  "key18": "2KNh6C64gYSKbDWxAcbhR91RgU2pKJHopvZeSaRApna7as4gLhwV1JSVEQpgo4KRa5LB3b8seyYiu7T3PGMES9rc",
  "key19": "65yyfyC5QpU9N8pp1KRsPF79vcDgUeXW9eariPNmkto9VCeGadxeaKEExRg19RmxJC8AhaiAaBLdWr95a5ybpkYe",
  "key20": "2CtpAkjdekGzfTNPXMrjpR2LrKnmNZRkDLHL4vZRaytJryaiLKWZhHW6hdWD1pQjHDo6Ho1xo6CPBHAgJWgLxKwW",
  "key21": "4mh3m364LH8w2ikYHjwiG9ZP2WRsQ2NTEZgqPxNu64XgWTtfb9VqpiAq7g6MjbtJGM7btTZxgFCxEPVbrTm9v38",
  "key22": "65MC7CuKzBZqYudezMSwRgQNwe9RoGE75ir9CeHWCPZ4rmANguQfxZYm1cXYkRSrUfF4hxHV4S4wQeAfy2DBvB7w",
  "key23": "2RWjG9cbHaecFihwt3U6z6382rYenkk9ACGUBTKiJs1xbsoTqYYU8xkqkv1b9BrDdhF7m9Xc7hxe7ZYukuVvSpag",
  "key24": "H9P1NDYSBTEB2tNQENiT2hXVHoDp4BCZSUZLN4otGo14rtcpqXaY6jae3Bmry3fxrUXX9HdXVqFAZtJCPfavHpu",
  "key25": "ztdQmtkhAEtHipRh9txbt8gr8kGuuUX2JbQDEsmoXedaNyt2FhjxMBFgXPrAaNs8HckstfhtpjoALpwfdYNnve7",
  "key26": "3bRXSYbFTGo6jCgpur2nhxYTBB4UAQNezGGrnZkn6rDY3K5ZmsU5nL4uPcpE42uuCJ5pVworBVNUwoub1gF8MWCz",
  "key27": "238nmCvgMycy6DLWc5Cbp4w5A6i37eG5tqGh7NyqesSYE2QvECE832ZrAR3yjgybT3KmUwv3h5msV3THaRq7hdjY",
  "key28": "3U56Fvt4gvukAZSwG3GmEJqN7rnZcHbC1unLdAqnpLytG6W3QjCu1cDcWUBbqQJcVzfBWYEiLhcRwtqboF9L5Vz8",
  "key29": "37SDMzsq2qgrTPutrXmHZLc7ZZ6rk5VnFvCa4kPHmwzxpcDwW3xNxagNqEk5YTdXMXS9HQFMkPUJgAsFiwTiUBpu",
  "key30": "3YZmtrLhTff2UqUTZQVPcvm6GfyDGCNiFY9ubL93DuNRoJFctk4StXpHjSfMaEoQv1bgi5nWf6HsQunq9GNpmE79",
  "key31": "uhwcCCJRHiGRxbb3dEqBXhj4p1jJEcA6rDyQHSa7vzSiQACHYk4tWUyVU3L5EV43ssz79PJysE6tWxzHfsydrNk",
  "key32": "5w9APkqHqnuCmdpb5DSWHmegWjUmpTdKiX3sAfqhawSLZirBahVVuBSuwQ4TXhk5L7hLe88Q9q5Uohr65NZ7N55a",
  "key33": "DpPq8t6k7qEoMZi4JvxcMm7ZMTisFRmERxZGpB5eNG6LTiw7F4n1mdVV3MdCQQLNPtYUjbxuRQRTNurTGJQCmNL",
  "key34": "zk7QiWRXDwjbWJ3bVVpYKWdTqKCqzcNXfZ2yrhhJU7cFxxpq8Ex6DEuGJ4ekW2xTYY7DbctUgoa31spt5p54ynb",
  "key35": "4w7m58g2TibGxKvNR8VkCKkvCBmrUskCbcyvnSEYcKSD77zmZjbDjFhEAWX3kaKGJ24P9KxaLs9qPS5QRrnivi13",
  "key36": "oazik5kEbuSwMZ9ih2XEb29FWdw9STP3EiQNWcEays8X7fPE8vrwg1kjBZtqhhiCv6FfKxJxsxxXNbtZma9cqsu",
  "key37": "46XCCDbbHennWnU3UYZA2uPBGULsZnhkCMzk2uvwEvgoxzURdbmG95s9LMWN1AXHwmhSDudNEtUG37BFYHdhjBbx",
  "key38": "ByatCYSdbyejE55pPnL93bnShVMW4STCs2iZvRfGkfoTTLaixWDgSCX2Po5KwzKR3iL83tguTo7bxsi9W6ktKzb",
  "key39": "3x3Jf8TGyRGg1SSemTSbiFtDRi7PeUT6QPMDmzkYFZnKnw1gJEiU7dweT6HnsjGLRVtwBN199SHat3sWywTyk4Wb",
  "key40": "3PxWJrMh3rqzzZg7DkukWVyazoMPSBMv26zGtewKGjnw7r88QWKBu5fgxyqirCbCFkELGioztFDe7qoDTq1e1fTM",
  "key41": "2s8vit8mHAavixjXWKMYBaFMjCvDNsSBQJWkUR9YepGAdXwfPcuL25xzfFC6Mnc9aMQLvyMbiyCfduMvL5gNCPkV",
  "key42": "HZt2vyUAn9UGtYA2yaPubaZR5h1LMbdJGEJydJxNjXHaD4Up3RGHT2C7viPG6YTa7sUD8v6ETTy3K8d511HqBMc",
  "key43": "623n3M5si3AqS3c6RKXxCeeZga6VG37VBfacMq8HBn4fHqFteLs8vLNtRPf2jE1o2U5imD9UJg5B4eYFWsZ6H4Sd",
  "key44": "33FcWo8wGEZf9o5HAjoQND8LQ49K2p8UBwuhbdgAzGCfxMAhKusom3Yt26qJtXALvRT6TuKMdrZHmhqhSJzpvfKu",
  "key45": "2uMVXDWYLdmTEHPs35Mk16XtyMqRVhv1deaaeKHqvMn6Esj2muYbFLXfGXcTvicB7Yep2VRipeJNiUUWGF5Fw3TE"
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
