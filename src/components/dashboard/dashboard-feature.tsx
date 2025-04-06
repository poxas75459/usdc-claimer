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
    "5xqdMLjNLQX5zUvTN1kXY8b9TJua6s9oAnbqeJLgvqLHN6ZXgvDxTH8DkPwRNgPtH4rBjcFHKMqtorTU9KJBkLpL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F67RzSfDrK4np8PRpurUhcuqqroBhuBw7TfGWFRNqsV7Liubwcx6hWYthhB1rWapYCeJyBYZiQ6gftomWegAzPJ",
  "key1": "3zLnezv8GsUDyghjsNsAn1BXKCoQ1QVmVTH6QFJMiWMPCCeEJDdzammLXSJSbEkYLgUSXJZTS4wmiKQc8X1PKLYd",
  "key2": "2aU2FXkCHYwtdkKiq588XUmvd68ixSThmqbrjzigUsHiXcS7r5F18vdQ8iaEyRYHjYWt3tgiq841bwjyLcSKGgn5",
  "key3": "2cxY7qBhgtQ8DrNp6EnVeX4VSTDeXw9JQG9MotbvQAkpFvpQu57mCz4iciV8gQaRMGVjDVv7DuTsbfPFCBN118DT",
  "key4": "3YogdMfWxzwk6QWZ1EmR4hjHsR39hezYZEHxudNdEtQza9W12GexsuxfoJB66PitX2ZLkJYYdgapFVPzWQDYM1Sq",
  "key5": "5pPdg5RjhqQZkK1U3quPAKAW92Nk37VE8zk4g6iqsrKHxFKEFryjHbF9rpcenYFx4TcAzaVeERfwWip4N32utd18",
  "key6": "3KpHYaZSaDiSVirTCfefThGYjfVdEFWUPpeK4MvnSVsn1UwYHQLeVruEUma8pEzk15BdDJXXDg5q8TxKUFyLd3Cr",
  "key7": "4Axxn36EvDkoHNGYxokMa2FCGDkv72N7E2UumM88c9rzfZBBzRQ3HbLXoYUm9kXimsyei95dUhEKm8uFP9AxoNid",
  "key8": "4uKTFKZeFdzAzc17W6GwV6ZZnsxsf1bSGj6hTZJbNhUztesYVnb22G4ooDGxYu4HfbjSs2QDUjZCDQ1zjFe6JA6d",
  "key9": "27BsZJshhAubwQtRgLkM9SqX1CGEpaY643WMJJBnCrJjRjxbAwYxsqaWQp5M2aPVvx2baoBxJfKnDqLxs8KbxXLW",
  "key10": "2toq2zkXueup4q3uk4i4XDNwrm3cF8Bapw5azy2Uj3q9idPykBmLUAD45EuKDA6Xgrh7FGVKWMCMTEHbaZNuzPzP",
  "key11": "gR3SHg2R4DrqqQbmYLg3YoUvCstibJapUpGNpZtLPZHi8QTXsDMekWdNAm2qwLZKDxE7p4KFnspq2MXgJCyEGdH",
  "key12": "2j2262BZfegwdGhDJ5TPgm7bmXEZQiUCgCAg6GNHvf3n8ori6kKa8ADD1uAgxMunBB9hEBMGCbF78WzZ6VaybEL2",
  "key13": "47pTGcQAvjLt3Pa8vD8ZUkyuLWQQ4hn5C1C6rEfSgjXXuyp7aidv2Fj7bxHUPxGpavmtrUs3iAyc7hLWk6woEWXE",
  "key14": "2hCCJ7rPdWRiJrTR1XaCugZ1yhaNc9j6sbMknSb9z6ft9CSouW5e7sDu7Et6JZqRPjBCSizvsUB3dJ3ViQEx1Wxu",
  "key15": "3zaTjP2N1FtjJX6J55RTXUrjPCQss6nyiHRxPWJFMt8hXq4ZFNJYpRvccbyiUqrthk4VBKc8kYdMsy3cKxx7ChRF",
  "key16": "3D7s6ixqHe18p4CsH7uqqtShvn689pWoAkDDRUDGj1S4wfh2CtYnTsDb9ymZLjMwYYX91zbNJyaDFxmncaQpGZ4J",
  "key17": "5AyTNjG44KkSDe2MqeeLNsA6BG19diaDe6k1Fv3QxagbRiiL49z7oiuf5b6iJpgymY1f3iW8B9XaHRceT8aPTx25",
  "key18": "nN5p9AgKBgyfuh86qcT84YpyP1MBMHAQRTupr31SezMnbf5hAuwhW9PUgcLJrhKLZQHvBVxk5aVg3YjcFo7WrxM",
  "key19": "3BZdKgu3ebCY26emhzLPorxidUSVGb1jmskvVJferjLa6abrNCjUzfghAUNVUBdYj521EvdSY1uE4d9U54unDacJ",
  "key20": "27pWuZbYrT3dw1P8rQcYkWPFJkydJH8dAMC49gGqxqXQ3bkV9YgCcHyJoHannAFTsacPqPHgGqHP6xxGm381mnJ8",
  "key21": "VJeRH4sPaK3GskyNLgwyW2LARfmgFZDPgzemtPp4Qs9CyYtA6bGWH2g6F38ceQ128qmXgYLUHGMsQsDpF62b3aM",
  "key22": "4whew99uorTJcMkZy4KUr3RGvrCY94E58Lupn5wDpCjpp4PiV5TcXWUej6ZF2kF2qL9fBwTAJkM3C8TW1LPjTqoE",
  "key23": "3DRnrbEvQz5oM5Pe5vKGaWPRYv78g3akfGHbbfjMEB29DcvY6KwrYZwtKJpxfpNnxGWKRhC1bDqq8mHWbB9SNpKD",
  "key24": "5BLGXyR4STZszQUsUVG5rAd9G2sH8ZJfJaKN3VYWD8N52rnNkEH89rEmQ7M3kVvh5nFdgZdiyERFFofSyeF16J8w",
  "key25": "31PZrFei4t1AGKE1K9gSDh7qgyzUTkZ95Zrhahz9stdUC46a4Gh6CGmFkYMuLHVESN8obMjS2ogg9fzzK1gcDBF6",
  "key26": "foQW5CAbSvsCTMi1ppfoUKFSpR5GrRqT4pqbPEe3SfYhpDf9rGXGq1VTMxA8z2CkNtarvgmAmaMGpAbXDDzzDsy",
  "key27": "4vPirLiPCDTv3hXirN4DP7hxEDwQahqBzhpDexeMStQoaLbXiopoY2MRUGA5x9zaAf1MeW1s977raVhSguW1NDRE",
  "key28": "5NCdBFQiftnNegdimZgeY1HAdFEyAZopRmhRNVS7oBY4WsNrZWW2PDcvXEcr9REb1ZsWp8W9yJwozmDhwn4FZYbn",
  "key29": "5MEuyD86eVpBMrQuwJb5ntKxeqHxYS8wkk9UZMNzGbPADHtanrfPGs8ya9fc6PyYmansffPxqt1FFyKFz6p24RWw",
  "key30": "AaSUdZqVXwxZDjZvyTmrVNmDi24eDPCMJh1UM3tDHsN3Dthu2rT6QeA3Sw26sxtjPt6MYWo6i54kQKgGbhLuoeq",
  "key31": "2Ctdqi39GJ8vTGs8tj7FVKQXYYF2N695Rr3dmKWsuGfnSTVcf5RKGSbyuhhQnCUFVxQFWFP4JJR3sJuJkVLbSq4y",
  "key32": "3rWk3p6XmASdBo9VsBzEZumadCUsLCL1jQC2AotYVkgP4K761e9Ha5CtAtqbbGAhg3nPHByoMcAEodoT1PN1g4Vv",
  "key33": "mXiNDZQ9RycbsKDN2AmrJT9NeGyDgTYYjTWAhbM2bmN3c5HpcTUC1z3PCanD1LcDBBrCJMRS6EkVuaAYEhSoi1v",
  "key34": "2N47WUJzaRk7iHn84tGxVEKSz1NU9g6LWpFT2ixtPSDftaPuaa8uhQdju68jY6Sdzhb8j9JCJrtMVvsNtGNN7Qwp",
  "key35": "fasD11yGtqNk1LczK8XRcmX6ntV34Byzue8ZdBCpmSUv9FKJZdiBS2itjcSBcLBiuVf611xukcstyDF9ZvahJvy",
  "key36": "4rsQSbNNoU5vgbsR42iZiMSFEjxbDMuZMewzcUCyo7RzJ6qiKpJwyk3AXqYFWjXFNqF7q6AavUDCxMKp8ziJkxS2",
  "key37": "oxrYQSJ54yZ3fb5Wjx4KTAxLniHx1TodxnoRvt6zBufZGYcHhPXc26iTxTcRQf6HeW1x4Q4GaVM7m12wZnVhe3K",
  "key38": "5mU4d89RQrJaqZK9pDRZ5KStF7acveN6WHkqPPPmtHgVnuDhKeHBDFG3dcnCz3QCw34Ht4Pk2Q7hK9gJQJKtVYwg",
  "key39": "3siKmQ2JG1GrFsxe2KcvRWCpCY6iyUkkKCS8pEmd6TLf6RSvVtyA7bVztgLKJy7jULQxeT2VC8xzVRk8nFmd6dEZ",
  "key40": "2iokaMAPGqow3hd6nLjTzCYZ664VXjZfeMc44EifgofTuuZNhvB3JyZkxz4ceVgdVWARqsb5HLEqApZNbP1cipyh",
  "key41": "pwiM4cSrTtfavW3ETGLaRxG8mbA1eJqabjgw34uW1Q9J3DLiWBJNM7XvShXSG3eD5yaQou9gKUgh4czTrZTyoFS",
  "key42": "2teGspxyN57wLPpfd7bYR3BP3xABAXX93GJFfT1NgEkRuo7e2HH7uB9SuCx62DCgYRy8cCXxEVq4bzc9htRswE6c",
  "key43": "2w2dGhHXEhgNbNaYbGumyUEnSrz7J13fYBLyrsonWcDkJGpfSfgo96yPp1fatKxX57cKYwWyn6ttBDcZxco1NMwC",
  "key44": "4WXUkKkJMd3pYUCLkLpHDnrEG2gsB2EDyPM5Fiq1gPyAsmjkyS2zqy58tWxRtSRgujU7piodZnoqbVwAoSbWdxh"
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
