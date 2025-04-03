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
    "63YqDg9X1q5BsabqByo2cMMXHMvus65vwz6j33pRVRY8QjcJT6YX6BaWVXemqJqdEWatjjjtfpBPdaXYXf75J63U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SUMbTFLY5vTUa6UUpXWRLBR5HsxSFKiCteCFxx8zkjD6zCGqZbbZYfg3F249wqzYnQ7q7prwpZM1vVGxx4zoic",
  "key1": "3mertpb8UN3An9fEiB5RXb3aDwaEH9Noj77GR3G5GxxzSZEinfRkCVJ8akK26zS6AJKCM9XpZSQFsFBPFbgGcUXZ",
  "key2": "3UUPYYwXH6cUBBSdx8z9PSPscp2D4gU7hoq8QePXVQTZhK2rRFz3sLPniU91qR1nhikBtthCyzD2v2Gxo7tZaQq5",
  "key3": "3YjYh61HibfxfbxCNNAbpX6rYCUSDFwdkNa6wA5NXEDsrXVzK9qfkLaeTdhiiaGZPRBvAHqABcWYCVNDUNTg3UDm",
  "key4": "5qPpiriY8YGDEJa5ieFwdSeKbwrQrDj5NELi4xE9R7GXUwcLqER1nHRByTXu39WhmX3Hrk1CFJdG2iLmmK5fL8qV",
  "key5": "4jYhL2EdecC2fjq4mYtUUgvLedyCNBsFwg9DzJ5WvbfymKUhzF44bEfxtUseh8tvpCMSRoBxifNMxMzbe2wmrz7R",
  "key6": "yw2QJBbbB4D3bCFh8SCVPYKW8F7QDWzGvQQSpTJ7BeixwVV7zgBGnQiT5tTmxXi7R2bR72Js9qSiEEP4i4DLknW",
  "key7": "3WqNfmDNj1JYoRQ6SEt7FUKv9SPrSPhaUKNfD4B9Y9FqT1Kyfhz81FUA3aYtg2xu8oitsFL9T2sBhamMM72fmmKq",
  "key8": "2Z6exiH8nFsfCGEwp3GiqkbEcNhkPMsV3KT3KqPHRxmtxV3iNpxXvpmwQq9EqaTHYcDVi4xwTQhjjDauceHvLpaB",
  "key9": "M66YPRLVyNfvYitwCngqGZvmE4d3bT4bUi9xsnMFEtV2gTwV5owr7XRA5ypvHZcU2J6SyfHrf5iXwtAzgGpWawh",
  "key10": "5VdTtEesWC5JBdHzGGXA81XJgYxULENaMDsw9qUM82nrsQLvcfLqGGgdJ4G5ByCWDabBwRqveDSP6MLdZxD6RzyL",
  "key11": "2ZXFTPcLvmxGsQKGgUqaamcNAaZZnrxmoJAsjqjZVi377yszd2ey1twChXJ4v5MePQea8Z2szkLHo1ZX5aGfUEvS",
  "key12": "2ksnVagpWBVpBvQDR9w9qFfKe7CTGySAhDnC9wjpaCCbdmwta2DrWFvZ8o7NxYHzMVFrFGGfmXxESx7kHvGRjr3Y",
  "key13": "5E8X4udJbci5iZNqDSs7fy4xtP3We1Ytr9LSDgLYjYiAaodJW2wWxY9SvhPi9JuLG63WoCQdwNcWim9maBfMxC4Q",
  "key14": "jUZWKR65mixGGWtNVBg5BDPN5NBDKsjrdm6fZBcHcRJEiVfqCAYxfXq8WT1J89Yx2oAvNoB5UXTrogstCiRkR8e",
  "key15": "25N5ffoo2pEMMjqh3HFjY7E5VWCVWsznCLV8chhG2mFGB3zqksZKNA9mPJQhY3197ArtRVntYkivgYZeR86Y5Ld3",
  "key16": "3j18moNHhMtUUfzcw3pkFb51sGY5EpCG2w4E48jYhSN3rjX1mGzhNCa236hLBz78UmLtEbiePEYS1qaHX4autW1t",
  "key17": "2AM4DrBqMBVsaRwsN58JDQVEMdNCzkP9m5XVSyPBMwGwEMBAUPDZLLNY7RiZTxfTQTSnjM3CYBJDTN1dQag6nPxc",
  "key18": "4xvkiuFjneR6rjrn7m8rMHtQ7F5WVH8heSvFCaAEt72bR7yb72T4D5bqM8RvRjQoUopGv7zgJSGnsNzYHeECWEk",
  "key19": "4oYTmLf7d76ab6eYwcAwa4Z31TY647JXFVNr6VG19SURDgJtqSuv22rGkHs2VSXZz6wKqucot3BSfxy7Wu6d9a9d",
  "key20": "4dVeNf7EZCk2mCPJqESZedfqrdNpc46PK59JKc6syKHehDfYFRv19x8U4UfEN44nxc5Q27usgoeFRVXBkcvMFZKK",
  "key21": "BjRGSAqkkbpQxyGo4M9EVr58uj5pTD9MXcEj54dMffehchirp26rNSbnHwFkxoxn3hVtFPPaNUtw9qc6ie5wP3d",
  "key22": "DigLZ3PVqpKDpLZ7qWXE9dh7NXgGT5WY1zVrrLpGUjiWwVemHqY4WL7D2LsW5T3zEvkrempcaxQsfPncHjgZfRb",
  "key23": "5fzYHGCCCSt4UhUaCBJhZHRZtso1J1bsBFsWqcaq4ReVaPLs1qPd5y9c4uw6LKaA7dtVUih9boAkrRtudcWveccq",
  "key24": "gba4cjs5NQv3svn87xnnK2Hx97mvwq5Doo2kKFfzUrjQfgrbqwoCszyk5AuMpRr8F5Sy2aZBRMipqjxMAzHGid6",
  "key25": "2ah6Pw8jiUn1dvvwSaFKsLwFuaftNTAd1aEUTrpWKV15p3X56iemy3cqbJSFtkziPfKc61iw9Ky2ybZKHRBaGaQ6",
  "key26": "3Rxw5LV6QXRQJT5JndEhKwMPWr1jA4yzJ9t1TWzhXdCLaPHpFX3L3JUdCpM3Mm5dXuBhHgxFQGfokqkMy1FZPoCQ",
  "key27": "yq7mnhrigJybN8wMWVCYDYBqMjhAHbHEgX1eFxxyBN7cES1k1N87cQwZXF8VDyNLnDyh944iZ8Dxx6A7uhWNDz9",
  "key28": "4Qj4uVDsZxeisuqpS5Ct5d9aHgV3ypZJPmk7ypBnnYW8KqEZVzFPC1khM5wkui41QrkEfUHxwBXHNFAM4zdpEaCN",
  "key29": "362ynbWFAYwtBfP37B1bFseSZHCEp7qMk5Tx3spS4bY4hafPK4CoYpATq3qQoGubWeYKmt5BWiTkixDfwhyJ2QE7",
  "key30": "3fC6xoRVVx7jykZCPY1Rcq4uvXzFSooceWK31ZEoULErvWDd1VrJwjDeqiitDKHfHvqvdSaBGzfTug8uHSb4y7x5",
  "key31": "KPZcvmnQVMVfcoXBMz1uj7x1vhUHKpVPfANNQydA3nZGBYmDyDiRMaapMaN5WacphSYgobUUHv7uJ7xjwbtSLJe",
  "key32": "2Tn7FTtvA68mKa9y7rP1QwgmEp1yuS4n8aeioGs4YeQkE5gNJQyrPtvsVue3rAQn5mWsg4NZKJ5dwo9omeYPbabE",
  "key33": "3yoCsJvgLcLtqWtfrZEuxN3Rch6q2AEyH1X6jZ3Bw9qWYt9SLrX8L2Uff39bSj4bg5oh38ZUg3XfRJqeJkYakfqE",
  "key34": "4AiRQixQ6aunt71QemQeQ3YULCYc6BBfBaeJnJnSeGKviVDqaZoBprMnDgQdCd6VZYKCFart53CyBaq7tYz5B1W3",
  "key35": "49XLBeWNt688vyW4J5udC2oXiwEDjtk8MDbVHcb2H84vaj2Us2RMFTdp8r3F8q3NCjaxCujokJid9gt3Ywws2TcE",
  "key36": "4dTTQhfvSabvNrh7PXzWCQviCR3vZVRSwzgarE9k3NMXgTiRvUvzqFyWoTSwJkfTwuUYRbNfpr2KP5f6akL789qY",
  "key37": "4Ayqw5eWfRjkF7xYieNNhokqzxgDZodgBLzS2nSFfyqs8MjMKsQsxP4oTmdB4qzof3Ywv3YGzQJEYNjizmJUJCNv",
  "key38": "5UySn7WUmVAqq8nxXikgF9Gf1SHsQMZx45h87gL86vE5iX5yet6GSeTQExG96APNED831koWUdsig7o8njVTSsuv",
  "key39": "PjPXpeWsPvzVRpip1Cvf8BmPqU76dhWQb3WRsDkVtHg7yMrbmgxuh5T8j7b2QfTb3FWupVtMjtRTKnVVYrhsniL",
  "key40": "2snFQJG3GCGh3Rxhdkpcn9MVtvs3bp2jf896EXhkLYxsw9y2wmPPND8kcMSxkT74tobBnrtoCFNsXY3bcF6pxADt",
  "key41": "3QzLw2g5ZwXbGDX8TEioKJYttonF2gMmd6rpDdLkts5W5DGqhnefXaKTvx6197hxpgPyeEQZjb51SnZHhtPp7zTk",
  "key42": "2taGnz8bAVM87PWmSzpDYczJ6B4sbsori2qoRoEEKJnvbymJChaTTS7v4PKeNwercsc3CvzWLP49LxBeaAPwWXDx",
  "key43": "rfif1cBu7Jh999vRyBNcYiSBVgeRiL3HaRSGu262yeMFmoTd6D6HA2tmzjH2kKHUZNoP99H4km33YA3ewF2D33y",
  "key44": "3hktScBh98a9x6FcfvspsZUbNXk2J9Qq95GztYw1mRq4eZ3f5B52vKk9h4H6jMK9o4ULju5Yxy5wMDX4XAsuXpHB"
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
