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
    "2UMy43zmdpPXi4pRyCBEK8aoRHon6bTpy7tHLu9vXF4TrrkHJybAbPLkht2dHe9p9MM5dTcq2CRigbJTB3vFkmeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gZXNMb9PGCGkxaBVf8jC5VAKhNqYmTsTwP94Lh5pRQRNEKPxbF4TdAgVzJVxKwNXcJiqTaRATH2eQzqBqHCGZXa",
  "key1": "FfeBbkpY2ECFKBVFTeFeGXEwzeF8VKdGSmi1vZNqaUj1JBgmJH1hQ9REW79Bi6FcduzrmCMyBZ7GbT7oix8muEF",
  "key2": "4vH9XPKMvqxqBH4pxRit3s7yLZ5JZXj2G56Lk3RqZJrqQyxBuqiRXM4Ystd3rpUi9xMcyhZokvN1vHjBvhv7PQU6",
  "key3": "2jzjGRfi4NZXM9ktRtWKa3uyT5hGUDkxojXB8Tg3AUuuRoxHTnkf5U1DgyVHJvaTPq13bb9EJCWG9PNYNNqTpynP",
  "key4": "3PyooSsAxHhJRWTbjyES9miWNKSFMAT8YgbRdVgi7rLYEHDvzT1JtT776c8jnyvCgqvNgvB5g7DET9W6RusKfTFT",
  "key5": "4tmdxSjLwg3noVtP1rzfaX8PSc38KVd8bhew6iv1LAiaL15K5kjh7mEeWRFTGXhpGckv9nzJXLLVqH37YDNLz9yg",
  "key6": "5qm7a2gG6fQD73aRN21WsYu5oez298nJUzNDLP3r2kEAsWaBaDH5SMY9H2x84ekoXyPuCvwsnjau3GnzptxzRr9F",
  "key7": "3RjSDLdHKCyLst7ih22DgTAZQjQNaUsktPs7YBtT7e9hTNAK7zLiqQ5FKDfXRFXQEjQhS9ZF8zMPTa7WgHXqXnMY",
  "key8": "4fiHMsUG5mN69rtDDzjMBEQAc44Tkt9DS56hLNpBhHSESyK7KPQhNjRyrYz9cPe49UTRSxEfCykdvbKcBash4ZrW",
  "key9": "2HZVP5FbYPth7WkjyzKfjFTSpuhEutD81QghFYHRaiFRRFZKUsRkX8X4VrGQFW8ojKLq6kwyLTL2JNLUTsUnE6dK",
  "key10": "567NYmtCgktLAejVpmxEHTeKuU58GcwZdwVapj2fimTU9rRPLAonNwvwTpRPw7j2ssDN16beU1PypQ8BLjwtKJKA",
  "key11": "5vG8F8op8VjY2XY8wWorj67LsUSQUprLj78kWft8j4nWFj6khjtki3LthyUiMA6SoJx8ob1NJDR4BYimokH33jMe",
  "key12": "2QnbZvq5tCbXHJpeZdDgtxMvLJkosqmtHx2XcjmQ6mLJqoka241UvptoRyfocZAaEcjpJtYGjrVcReZiMpeAxCsc",
  "key13": "5xMeoHWgch64jsCnH5UKJUEeTB7rmRzVY7EJKxemztKnTggogvHVggk9GBVZJyniRCP6n8RP2hAZiJkkvQ3qbFJn",
  "key14": "32AuK3ng6y2BUe62eWkRi2qy3ubEqy6ahMtUmamBcrfZjXWpy9v62M1MfFR2HgEWoAwdHrJdEjKkb117ch5NrHFW",
  "key15": "4sXZwnz54ZozEPE8K676Gd8tggN4fFpm3NoH8BbMQaMyTaK7Stf1LMDk72td23g1EKtjy8SaVsWKS2GXGVJSQEDK",
  "key16": "ucSHydiNqoiDXiVYJqdj6WJ2kuSmo7xHYEFj7uq6AZzMgANESwy6SEgs7JMJsWV2TbLei41dWa2fZzNL1iv1pWR",
  "key17": "3987Hq9SRzU7uZMzAcJjbjjNQmeUED5EEYApHPgcPiuYRDh2WopPzTACHCvKfPw9QMfMr6qmQtHXwZMCZUTAbNBw",
  "key18": "2yjyQArorC2jJc5qRy4ucMvaRopkstYuGJbkfTyy9WzNedndMCBtJc4vJAyS4vRgHprfew6g6sPuX7V3YrVAJY4W",
  "key19": "4MqLxP2mzamgetnNr4w9HNKPNezzg9F4wzNAJZDsUf69iPX2aDUHwnPbRriZXWAr86VEPoR5MPeWeneijnUJ6E2C",
  "key20": "3vzN8YbDMQtyZnvwTmu7wbvwX4F4bnBPP85xR8M4i58G4yHDu7QSXjCSUC3BqN8W4CSYJz3aJWF5tn94fAXFF5y6",
  "key21": "AFKqVR9Tg1oG4dzGHZnq7MWXH9omNP33ecMWhFRXk7YupE4fUbdYEQqsvn3b4dydtNVxWakbWPtKsDNphuYaAcj",
  "key22": "5b7oN4pfGkiHWBjhUpShakZZHFKoTJo2MWM7N1HKA1WmtHQm1Jzp2ZZUtPw4NbJn9fxwNzBMC2c5RegNveL8PVaA",
  "key23": "3515sNDTkMx2K5azc5BgRshzWb8V96bawrnT1ZEe7MEi5GFMjVQC3sUTDDfM1wJfwsENaJyJr4q8Csvy8dNgJuZg",
  "key24": "2urBVFQacQKQVFncRRiT3ECzACrS6aqHW9XYwsGnM5UvuYLnH6cu9Uvjy6ybDzbWeYsXeL3ZJsfmvsxhkxcesrQR",
  "key25": "3EguafHgx4zGvg6hHEXXNS3jtPHRdFumfKkxbsTFueHvNnBjmWbp1naTAYS7pDrNYiiv38FEcXniFstV7n2xCbsS",
  "key26": "2ThcqHu2YjM9dAxDoxuPH5XuCPxYoFeShyPA57qpHSNqecfMy5m1Uk8Do8knJZZzcXSJUm1v4EqoWu5LJfRTWjdz",
  "key27": "2Nm7tbUcSuzqCSy7egeff2R79T8zQLC2wrH21HJUXAVYxJ9ykYftLkUSYBetyZABu62Xjcomf2RfqGMCDwhAGA3k",
  "key28": "uqkxkhDXcQUGouWTAqGRvgpcp2pL2S9Sabi7KDfH5n1MTyjf18qna2VUWVYYdXS1xbj5WoMJJwwLqYZQU3n3iDR",
  "key29": "4iy6uQPjxMtMJGBAtgQ2u8CR6J3TxQkfgiDjZMNbKPbTr1wKQL9rNHQ5t7YBCJzdRfB84NWjp97v9W6pNSDX94FK",
  "key30": "92J6Dptnmnvoqd3NfvdhkCVZKc48CdJX63ugHBf44o14EK73RsdZw9dPBLZ6sYsNJfezsrtd7bSi2TNJgVsXbgb",
  "key31": "5nwytkkEKNtYMDnDtBxs3TSvtfNXQqqAarohL3xiQPjPksZ5xkxFrqRGcZJvxZfatExwD3SvaiAswd1nQh4QRfSh",
  "key32": "2VCUNnMLVK5MN5oKEHDTxL5R1DYxqkb7ZvVqina5eJHqcPUS4otJMbv4Yo57f4hXUCeo8vkgDc7qtcJw3PRHr1Pr",
  "key33": "3xoxt8bmCwSpFmnMWyRDXnFRuAw6vhpe4WFy26BAGPTvPkmTj3zk2iSTRHpeo5h2HKFNbFCr3oPSZ3KzGpN1KUo7",
  "key34": "2PoBiVmdZizfqf7RYzHZkd5QrqadsSNnwRhbYK8atchLMCtPhn5yt5Jw2wwV3Gs3SHgfufA5jHzyAZLmpZ8WSk95",
  "key35": "61ucP9ChLg4CCdJ68EzhRU93ufaT8Ywj3ktsnRQa7uzidhK9yVKDskGfNJpbDb6yLSGhqeRKMvmRhH3oX9Wxeswd",
  "key36": "ADpxGkxU1Akk47vGtJKx7AqffLNtrgnAm962u9ehceMFjo6Drnw2goUhwzjTqiP1NxqEeThVbazzhsBm5TtWSte",
  "key37": "25HYSBh7Cfx19XkSghriEx8csPWtrK5DszdZcnv4icnKNKCq6edsNyGNvLMD2n5KHAzc7KsQgab9KUJWnXn2kT9t",
  "key38": "2ja6BdTMZG96XnRC7aDmqC16YNxHAhTtZWLdyAZD4A7YapRvMegGNRk5KTdxqEq1yF8w85981aKuLF2mUXF73SAt",
  "key39": "2yWw1jBT9bBX5SoHfCWrJfBnBMMX9NkyRHgAHSGAq4Dhg9kbdT8wich6yUmFodovpnDhftE8WdfLqxeprLh9hevd",
  "key40": "yshePdC4RMSZwer4LUotchyWFzFdyaB55P1fKDN3kSoxDtwYTdPgzqWUjxTpePWYabs5QtNduGqxSwh9hhSURAB",
  "key41": "4KietNdwoJPxqo5pkhbFdmo4yqegJmjUoZkcF47HMv2zaBeViUu9CrGR6Ey8SeMNqq8wR4o4r5x9JXyL6i4cdLeN",
  "key42": "jWLf1gcmCKS3RbaCsQKjXTDUE7LW6JyuE2mR8Kha1QETdQCrRjzDY1jb2dCxA8xRwuDDZ9yERV7DyBAwwtDMFuE",
  "key43": "4QEjyrfC9nvLQuPB3Rvb2sTFbbvm9zJUUV8K5zxFPCQa2XN8JUUbZtdC418K1PdUt9tbfTFwob7urUZCR5w5MDNb",
  "key44": "41PFVZmQXoyYgu8sn8FLfZ3SzAt7ATC5FSoGYdZ8oQSyJpc9UcByKLhkXxkhvXbh5LW8Pg7BzRX9SSvKPamBLwAk",
  "key45": "25L2oSiPZ5Qb6t8jx9kVxkUgqv3jCHDXk7SVkqTkuy11dsiW3dbBcMx4MGn7S7RWQFZzXWfUX54uZLuBNgw4g5H9",
  "key46": "5N7nCs2rzXjKxC1dMoW3XGG1kfskjMjg2hmxc2WV6yVoV84W3RLru9TLLLXPszM4EYLsKDLqay2JvHgP6fnoLuXv",
  "key47": "DsUsKkghUHGiZWtbxsM99Mr9EpSUf1ti82pSBZNQnA5QnpNb2xjaBcxBL5wDNmujwLAVyGfPfigXUEqd3dosmLe"
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
