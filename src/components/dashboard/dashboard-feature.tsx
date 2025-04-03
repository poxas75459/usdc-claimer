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
    "3QxoVMkDAifLoePjL5UmZTf7U3ckHxAwPVSoFvpidTedGuiV9eBESPmWb74aiHaHmA9uifmHC96RdEdQQu9JwXXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ksQsrPNUiPPfnY6Gb3zuT3UUyak968Zzd2k4Zd4meY4FY8rMzapxRPadM5uHBreaZ2pySx5Py5hZPw59KR59M64",
  "key1": "2Kigbwk7hMCE2s34MHpB4VXFqC4MsgcrS2z7wJoqDGHhgxMEQFAufEtAAiBc735NWP7V8f4s9gsaS2FWv1co2vg4",
  "key2": "2HUaadQ7RQfEpPkETuDNtUCWubKPkEHzFkLJ2z1oB6GUKZMQEehVeMKRLACoe8V6gKkYmueui5Qbaz44DoXJ3MNa",
  "key3": "61BZETQnRia3DKmTQLHiWaC7E2KBZ5m9o4WQmXtCodBrQ2bdpiEY9ZAZ4QCd8R4KuAokZJ4qqX4t7ByNUvQzzxyq",
  "key4": "VvhNNXB4ujQ8SofrSUFNeGXE1QSK71WnkxKFzb4n4bxhKsaPYKUnYzvLZZ2vHawK9zEytuBadkzpjX9q2UGSALs",
  "key5": "3itbmMZLgd2EDKBhYPza3Yb4ec6xD2raJ3mnvQzBWPei5QSSYEHPcQmF8aGNZPozm3ybE8sXLwoLSp2zePK3UfUQ",
  "key6": "4vFCuc8fUMyFdWzyL1aa3CmAYqUK7ioZD6YfxXBvj54iieBLWMu3By9AWWUmMHbHXZd5ysSt7aVvLCVFruYwkvgR",
  "key7": "5ypCNid8L3EgR5nFptoAn3Ke4bytGxmYywunhPGta3SvLSjkXz4kewsjUDktFgpSMSjjmJdzW1mU4gb1ZfNhhF24",
  "key8": "HKaLktUJ3sd7nGus25uUSDWK638RxuUTmYwUXgrUJCSe3oGGEM7YCD43DUwZUPQTaJuiKhcmH2rw5eiNemvHiJY",
  "key9": "3V4SUDmmz6TKZFWFWdDdkjr7ZJN1VGfz9nGhRAu9EdwxS9Mhzt4n3s6xyPWDMTMXS23uovv18s7GtKY7JMPv8Vsn",
  "key10": "2AvaqxjtETmZDEN7E6SdX5g52k7SRXbSk6gnRzRzhDbE7npfyDudjzi9uc6jiEcQ9AmfPTrCaHitR1d65GHYSpfj",
  "key11": "3YTjJsAsaxiBSqUFQFzvMPFmaAdSqcLupoeTnf2JmB7ouKhbEJsYQaM77g3xVbkLW81pDDdBzquqZAL4Lfd11cqZ",
  "key12": "5WwjFT2T8pEUshsLmQJmTjrmGv5mB7UqB76twwg6orc4Maoo3MDPR2YFUpNRU3UuDnesgc7ukxGwv6GdyPtnKaF1",
  "key13": "EpfD81NzmupRBBxC6o2pNsf59h6JB8SJnQNUBimDVDHzNXL52TzN948qJw6JT81Woj9hq6eY1ejDW5GArUpBe3x",
  "key14": "2cSsM3WE8ab3kWp2H579cG1xRddKzX4MfzYfkV1FHViSUsywwvCE1PBQcRP8x3Xxr4BFVK1ATHvjk2Wc3xV1psTN",
  "key15": "3ryTXfKpw7yH3zcTu1T1XkbbuViMA7V1sJQ6R72knGEoeHJnpASS6Fh3CiJGFSkJP1RwgRBYJoqTzmGDzwyd6Wsx",
  "key16": "4a5BZkQ4JDqPjBcpA4CmyiUsVuVngobgNtwHg6FdL6Vyr42Vg4kEtJ56cR44gdUSqwAFRTd87dVMVxxAd1gjVqG",
  "key17": "wzBdcwh279ZYv2LoaRjKYVQJZ9T5Z5NALDbniySvvnqjutDiSWqFfhfmKUuFUfBX9rmv7CmC54rknh7FRHHewVz",
  "key18": "R7xkRo8E8rTxZhPW4zwBrj3nZcC5iFj6Gg6CHS9DA3UcwT9PFxQdyrHhxEQTFWH1QMjpFHmn3ASwBHu3BHU5gMt",
  "key19": "zvJaP3DTFNNW19JWsrAfYBCwqK8mFDJVmvinRQ5FAka79Esa8DbdnxyQBZVKZsaXmiDeBxRMVwhNLSB7o12td4h",
  "key20": "4T9MCLB3RXQngidzoKxfGNxy9pybr9S1PYhmuFs63ER8jbsUYZtBPPkzUN8pJJrpY9oFmpWLsq3C5CRRyp1N8Y1L",
  "key21": "26P2hAuhbNLCDygNZ64RM81k51CktHMioDNeo3H8d3SrefwAY8v3PkFQNp4NFLdF5QhJg7ycs4JRJHdLs83zKTPB",
  "key22": "3nHxwAn1fB8pHRJYWa5ynxdbYFjWtVrZTEvvJSQJgdDrkQwm4xtMr4rw4GLeMNSdTauNLKdv12T4UJf5U4hpZexs",
  "key23": "rXZHKq8ouYv15beV18cd9vm3iqa6pk19aZtdXcyUt692xjTA4t7JjYmaZuhFxeWLBQK7ucsx3gfwCxb1XdcUPFg",
  "key24": "HcuY3NFncF3BkFNeVeZkC6D5SxgkPxoAPvSkAQunAymxfzca7Lc2Am68DHSMqvBQPYXZEgedxYsT4uMw657YG3j",
  "key25": "28gYQRabxZChjVKRJbpFVpiEqvHoakfPeCeupe2LNBaUD52bH9NJT37DPEMWBXa6zoq22vLh5gojJRriG1R38K14",
  "key26": "W1W9aqcmNyAdL77hm4BGJWUBiM4JGFp3tG5NgxtapJEnjU7aTv9xu5sW7MNiScHiP2X3wZYcc1L3DPDYySuYQYD",
  "key27": "2rtmtZj4aD2PoqPqsYLXiS3AaxyTYmzcSrs1C7wCd3wwXD5NW47sLTJDLV6krjzUNL1Z6mdu5sX6hZRZyEgCTFM5",
  "key28": "22PXvTKaAJBeNVYHWMzHkb4yZAocPPbUyY6rTBEkJ8G4Myi9dXhrHXgTfQWiXCbdrdx1huUGGuZV7xwWTpoksykm",
  "key29": "3DHJp3S3UDbhHpXkZYr88sYh7yY6oTSw3EZkQRJkVn4ojoEtgy1kT1eDDe9PkTUS5iZRKHFB3Vvc6DS1Li9N95oL",
  "key30": "TcJJuS1fdQnQSsNSKduzvCoMJ5AErDQ9JgnfirAN8cLjeV2D1T91AqjyaxLj2q9agdGW3mXhBhGJqPCkEVq6Mfw",
  "key31": "47Z6TmEVnE3KLBVoFNog6vNErJbJtyZ6DDvsw4n2j8uJdA5nfAV3As4RxLcV5X1eT8mV39kSNc67GGnSD4tjAPHs",
  "key32": "33YyeTfQZLVSBRHnWUjTYgPm3pEtqAE8hCCZpu9cuWrYfweYs8qY8rhqEbFaED65QJCbsxeecmpohHP4xefF3BP3",
  "key33": "3jbHhZF1KjfqN7ct4JHc4ZDswMnVUSQ8mHXPWcnRypNh4bkkDFcCVSL18V2aCYPo8V3E8uYeyFWjzRDunMbh8UVR",
  "key34": "4v28eXyrvCDFcExrQzLDTLgaNDyVniSitg5mJNu3wiwRv3DeUkt3UzPNgaakCHCVVD7bYjv1bjywAcxt4Wg7yDZM",
  "key35": "5pqW2XtLixNgDYxUW3uyX8Vsf5VXFCmpBGoaizeA2obAmnwRkWTrzubP7bLdQKxpferxBRZFT5iJMMppQYXXTqRW",
  "key36": "2aCu7Uf6XaKEyidw2Nt9pYeyHNoep7tzutxG7S7XfzEPbGrAfKNFfya1giUW1PyKDFxs5q2fAuzRwmUYzontbKF7",
  "key37": "3gU6Fd51nSykAFdXbD243wjRy8ubJp3iY1tq512s8gfrQwPfNpPEDQ8Szms9jHvaq8d453t3oY6mjxLHS9ZFaJYt",
  "key38": "5DWQb6r6RhJHPbo9gBi6qvZcwGfgAR1tHhEarAmLa9ziAAdVy1JLnb8r86c9nMdnnojTtpcuf9u1bpQKSVgo9N2q",
  "key39": "4vgLo3ERRyqwkNSAPE8EQhHeXM9viXPXt8oJ7QFmSrFGtdU4UE7ZaJKdeqVaEVRbUZmVK9AVu6YSyxioCFbHQKB5",
  "key40": "F3M4zapheSKDKz4N4VfpKNyiTVHTsQrFjUAy7WVMuCZnD7nLzCcMq4EVCsqwEPsnpEaSzpFnXSZ4QdZvQzvdBzX",
  "key41": "4FUeaCy7XpV9omxhkgyvAMtJMHiU9BVFUBYbRZMwhabpGRzoGfzUk8BccUnyAKUkVRMxvYPTGcSePUHdT4QRQicH",
  "key42": "4CxAYfBJtQR7Qb7AezekxD61qcayzzSx8uQudJodMABiFzjBWwzpJAVwv4NQYgZu8fTCFeythf4H5pt1nanFNsf9",
  "key43": "3tRpDsPQRfap53nUAyEVgrWVwWhhehC8h7Y8APKP3JihtGX4hq9kzK3rFA69pnbpMSE7iQTeDm4SDgamr6JgjSsz",
  "key44": "51gXaWnjo9zdKJvpYZQ6q1iWb3z9TSKaSXmU77zpPfVTm1Mbg9ZbYiiLjxLu6yKr1VcAEEg3y5kBXzoLQPnc6fRi"
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
