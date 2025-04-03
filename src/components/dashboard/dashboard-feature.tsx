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
    "EUw5cyRUupfxzHsch6r45xYk3zM1fYqnWgZ1wNpHdmXy54mFPHGNHaJB2SZew3mG7bGHQLbcuvzk1XZGy8P9mQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzgX6uFKXkpCDhDQd9WEFRfMNCDs63kT8HEQp5Cst4aG1wcrNPSNEkw1b8tNYEPHQ7jfKR5mFES4ByEzxP6ev4K",
  "key1": "3rwosikTDynEMJ7PHrU6HLi2kHekxDQJcF6Q76nXt7d4cn654M4juYQhUxs8nqKAvv5NMhpEBZ8waxq8ezbryMn7",
  "key2": "2SHJMViYE5iKspSAjmWGSxe1UA8QRJAv3giHPxXx3qtsL2gm3XEv6PPkfZj3w2EbzyHk6qBaHaPRN8CxG8pHhC7V",
  "key3": "2MEwaTWNhjvW4WUKabC7bKDPZJUY15aTVbbvzKbibUKryx4qQB9kqMSbjVvc4Ui2zZNLGdCWaUcWovJYgs6wHrJY",
  "key4": "247eWSfbUjKK7UEUdeN1KYz9dWZDcHZnwRRCLsLUsHbLEokSb1UvynR5GEqwbaoJC7aqeybMwwzoW15WwFo4Bv1x",
  "key5": "5ef6eEDErWpz2PbdzrDVsga3RAL92KfxVaxeo84mKNBjiSjfZPGoZ7yqYxfBsy8LWvvpJHGccqayYjH46dUa2fY1",
  "key6": "5Luxm8JW7CCbpVmpRbwooFqj3E8GUNDYSfHcULP1L2sZvjBQuYTSYu9ahAh1Vj7dpzDvP1VtJbyfmrDwASqxU1sw",
  "key7": "2RSmXQsJUPwtJ8RTCjkZosJTPpTtijGEFxUCn5Da2yrHqoAS6xv4yVZS1uqGF9RxsPrMKMuw2MkXntGYedaQK2jV",
  "key8": "XkicBgeVnqwMehWrgHsBJsxsJmoGQx554zf7KCBurYF2PUw46GnzjymxR5Qs9xbMfTNo1o5darcGQ4BXQquiJa9",
  "key9": "23529DMr9L5KufBGLPQWHrK7Ca4iE4MCmzEDr76BPNotXm1Afytamsn1gMwxd2X6EFD8prK3urbyxfWGWX6CVPMf",
  "key10": "2VL6v7w7MhkmgseZmAWe2NSW2gVV2nqeDS1gc8vxZqzmRUDL6bzzxUmrzM9CwUZnmD7LySrCMvjoL4oTfw9RaX3N",
  "key11": "AR88EhroQMh9kt1GUXzjb7hu3aQKLbVnBkuNxHz1v2KBNP9ho3uckY2zrnYdFWw5MVwj6nBuH8gpCas3N58MSF6",
  "key12": "3xhsxbZ8vMtuPLUzREqJAEWGkjNAcYbAoWFuRW4u6WCBygt1MxHo6x51DCNVbnReCS74zCQc4YLi15Kihmog2Tp1",
  "key13": "5ChUwAiDAGH6WU3n5rjoGNc9Pys213T37ovjuskpWQrKbS59KKqhJwznEUU2cfHNAEgL51ABsx8VrcxMbGgFrHjJ",
  "key14": "4YszRJFLwzT3DvsDTCvXnFHz86QyNzaekAdCd9Ajjf5ThECvCkdvpsy2Ewq1jMSPqUnc9vaCeuvFmDF6ikagYWWb",
  "key15": "K4RxLgNYnw4w65VKtfgGzPUWY8mNvadQtBFnjMhHaABcavwUZNJG1NnQnLhzvmJphNnoV9tYzAngAHc6pnMebi8",
  "key16": "3FSMdGg4A7kY8GZ72UrE2sayZeub9MwRwX2FhprcXTYBfGVhStzHWWsLTWZKv7yST4DZ9ZpdKEMAZJhcJNkU29e8",
  "key17": "3RUwygFAHyL4SwTxKYhFxJ4NYcvH7Rmw9gDJxd5VsHeCMe8hDDdWTS1mHQKcfnqAAKxcRgDQVexovKGNMvAiMDNp",
  "key18": "maKCh8xqysYBc6a8Td95Ay9GDYV8U27FwWJQqWrdRe2t7KxH5nM7kivDdtvb22B5yw3if7JXBMmzspUnsJjN3NP",
  "key19": "2mH9j5F8VAHyzySoXyAbhFFZdjfxMtCpPZgNxScDhqbYmVFmbE1LZdmyEpiqZLjf5Crgj4Bu3dUmDGsA8o2NCK9f",
  "key20": "5LsMvspQ44mH6FLwtpnKTAUGhQeJswWkUnoM3g74ra2SykwisXafmHuvJ3gNYVFsDruNcoWUEQ7FPHaUFb5uCEZN",
  "key21": "MYMJgV2NahMbE6gQSgDjZagcgERc2PAWd5BnNVGS5UC2SFFDgFYQCrgjK4hajfxJBv5qqjA3mB1fnWK7c77Y7rh",
  "key22": "3pUd73vk7RChD13ryfGAeHBEEVt7KbzLJs4hkvbBQTsm23cNHmC3VYfDffRAqfZop3drnEJHhBvzmNXzAjW5qSQV",
  "key23": "2RRRqbUnUDYdfe9WSsUFsKAuFirmA6DYWoaJJ2cAJS1MrvwjcG9nswGdqg3UHE1qW4B9b6NXyZwSnAfir8fWZ5Sy",
  "key24": "2W6T7jZTs3dZpLbNwvQpZjMF2S7Xgr7knVomM1CSyfh1mnmXJMKn2tKM42sZNeuYCUpN38zwksguQ5CK4Bsh4y9k",
  "key25": "2hTNoXcvKxcVu8TLcP7AdECGrSkEZugHDkqbFwnQ3aUQUZbaCMbFCoVh32w5atZvTQTS2dMapCG1cReurdZtMVPz",
  "key26": "bVbCoQ24Yxcpx8yrCufg6nf59ar5DtjaAkDAaZyoD2FjSByqLJRBWrZWKTweri64GrmKRS6SKoJj9pHPLPchxNH",
  "key27": "5XcFyRJcDGtqMvhpYJDHwdMy7nU9agdhDtSBwAfYGH1MG7zS5SJtB6JRwHjEGf5Lps2iAU2cAUKyzFRSJb5T9Acx",
  "key28": "626ayVwgHrYE8w4z95VFrbBLmKbmWuGAb1WRb754Q387GRzjhq78dU4RiT2nkrLBvoNDR3iSFMbFARVNg3srJsXF",
  "key29": "3ADAYn92632tdP7ccZKDrsm1CNUYNi4kzHLxe7H8cTUZzDJZLcHgUPMruwvu6W1Jurk9fciDu54upjYaDwAEf2gg",
  "key30": "4c72DQMcae147bYHxahQcftzDDFUFi9isDj6stRs6fBCrd2FrBW6yzZwrX6PWDg7vUWtViaK5sf5vHY8j5dKLEnG",
  "key31": "43zjizW4CzAoaipbLkBdM3WUdLo4sSuUTMmHQ74ua3QS4tGG6F7VKiPffm8Pv1jQkGnMGCbzvbFBoYQs1jNiAtRe",
  "key32": "4bkJ31CdEtPbDiueSxyrrUopmrW7uF8ZfaXUhDb8pTS3ipV4rKyaLTemvapF4Qm1AyFvUBbE1Ny2ajEBLgRNVs1Y",
  "key33": "8Cb451CikcCidyQv5dunw7ZkQBPVYe16avmWYZDYX9iGndU1bh7oAK8vTNhKua3zFe3gYSG1Nvrwvzt7Ns31rhk",
  "key34": "2vKNw3m8vBnpW5QuNzHniCdzUjHipGqcoj5h249k6EJa2N2FTBs94MqmrKNaiHxAWxFxfZt4o8Aa5wNaKrkirjCD",
  "key35": "zXJ87gZDgFMzDKcXdTXeb479pjmMnetM5Xgtn5absFkTYigv3gWceupG2WtcNpK3RNqwAmCYtYue8awMXXyWhAG",
  "key36": "41c6XoasZLLTofhB3QJt3j6kSuH72usgg2474wq8knZVCz36xHuQ1eofvYU6S9yXzLocW4B2hkwcm1RVQKTgPwws",
  "key37": "3KF8fCXZbj6PCZ2391Bm1Kc7WovbJN7p7wmLoarFU5kNzHpWVwZJQQHyX5rJd58WKQH6NMjPvDMuVro8t34CuEXx"
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
