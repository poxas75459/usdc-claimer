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
    "YFb376Yn9GMH1Tfkb88C3JE9yQAHUD8QGAJD3bz7qveHy2eXQ52qHgfbeeRieETnPJyUpyX1zBXbfKcfpFVLMSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a4XiBmDJ4aLssiWw7bd7mRaNiKHmF5Eqou71gkwRuJ1f3YMp2CN16m8JEZ3tED1shp1VfTmeujAzDgJmZRLzmoJ",
  "key1": "3m57YYW3qP6amwmhFJNG4MAVzm4YDumrBcVNvQJy72DjYEGQoaKRLZ9w2vLRi87WDmanPyK9CqWwowQATtnWJdzx",
  "key2": "2Qknm5FfiyJW8TufKLyphjJk3xvky8fy9pLighQDjavBhWwPN6yoeASqEZmGw1LFEPpQngkHTBqWjwToBcGFMYLE",
  "key3": "3vKQNc82yU4xCUj7LujZCzVe7VqikpkDnTG5nciER5wV5BDvd86pMuynSzX2ZgBmBgXKLkkdVWkH7hbVNeZebDC1",
  "key4": "3wQW5TJhucB8zrMYA3AZdy6EgjowNtjHGGTvP4PeaVVTz1Kyf3kKbj6v4TRDB13NnuEmKKXSX7bPmaH94fZRj8XA",
  "key5": "2mmkTquJGNBxQ7EN3chmNMq6Arnx6HH3gVV4tVnzZtNuhj2S8zQZ1uJcCGTDnciP23cRYMzRQu3cxUhKh3q6b8vV",
  "key6": "r1zpH45K31yzkvzBvHNBXsp9cGJZrXgfCb3tfsjcaWsi2UxUfk94gXb7vnZPEY6vbTNCY5CetEcPNRPJRRX7xcw",
  "key7": "245TgoaN3gRp2DS3nkxxmAHuwgy1WU8iAotpsX7wm9LHEKS8hxnyaEThWESumqdhMAv3cWRzT488mBHo4VTksfGu",
  "key8": "4pGeZfhJjsvhAeiZWocDcse47ub396kTgUyAXWdRhAk12HNPmEF2facc9b8YjTfRDC5MrmbxxETvmiGJh2FaeNbM",
  "key9": "4kSuYct7vAAxsxpxJziMMmMjTUKokPekF3QDZma34i4QYPrg1eauQ6vp1AgGWEqSjrthmyxTf9YYFu3DW5p6jvTn",
  "key10": "352LDLBhouqJgat8WKP3PHyBk1ExqadKqFMEpSgkea3W5UnUKqWbmDm6PkwcuJGqRezQCJpUq1Bw7FVnEoPoKeJD",
  "key11": "17QN1jn68w6hYkXh8gB9LyPC3hr4sUJQXBzr6dJeokDrxryebqbKQ8UsxYV3vLnjHeNq31LJs9c4xQX61PDASvY",
  "key12": "7KfWHr7CgJDoseQzWkQzWffvyPd6jhN37tk5vbKCqQYJmEVXiqxvxS1C4GTkAKcth4TKLEkSqitkZLBCJXwEXM5",
  "key13": "4kyKeXE8tXshuVsa4bME7WysyMsvewcqvsdhYJLN3E537eXZb7pMfDg33HANWHN24e61pg3h1KRg7fshvt5aUU6",
  "key14": "4YDKYYyr7CbuB5HUujo85VXFuDBv6WivuMzMKQ5Sd1uZ9WgzCdmxrxHARsepRBE6ophzX7i2yK9xyQjUytJ5M3sG",
  "key15": "2Cr2UPLLPNGvMcfvdeSoFiJt6eSAZSGh8dfW14BiLut8FSZGoB2YkPdnuLrUatqM4vdyPcGsRcLuMfa2bWRfevdn",
  "key16": "2snKFLDqzszGAvyWH1MEcSQZtxD6yQgg7HdJg89mhoo94aBbZtX85rTqmcwXnrT45zMU99S1KK7WjYnqkFCQqct7",
  "key17": "4AhZzcYxByZwTveJQAYtUS9XrPS8KCBtvXvJ3bGUC4r3YzxhqK3QVVi16Hko2CQi1xEge4mA7Acvtj5DNfeG7eTW",
  "key18": "4APfztz4ATZ2AT4zyJ9A73QBeQEugAhzNHWMiwRikLXY5HBAazV6Hy9WJFCz68jhCPF15HZN4PT5V6VZaADi8jAG",
  "key19": "5jbzaFSkUmGSELm2SSdj327AzdKzMxEv8bCvA7WjAeTAzprmwejT6d5Nnqq7dL6eyqahrzE3vNdGHUCU6yo6dnmy",
  "key20": "55PYThwEMBqqCjtyPem3whU1ekiBc5dVba2CTS66acBtZBJ9Qmr1CMrkzGqeRunejEw1WL3XjANG2PRy8C74do71",
  "key21": "A16Nxx14FLGjAw56unjg77WzYHvaFfJEZdz2p2xDjerUTqb6chFkERTXBzpHPpbK33MU7wBqnjXnTooQdjRYFGK",
  "key22": "3cTnnAo3EbXURS3PR9PQ7hUCC2HpNutGg7wxpA6teMRNiWKfbe7wvXcRDwVxstmmknqiKDREVHPdu7MK8yXfsNwz",
  "key23": "2DuqtDr1Hq3wpGG9dmkHKy4xkqMangDf9JGNVpqTQ64PA8xDT45SwTLvnnJ5714k4XwKLjMFsdTvJinpzvE9usP3",
  "key24": "9uEAo935HwpeU6PV2ynB9fs6hkMt77uokCrr1f5hLUytogh3BGA7YaM2u1XXMb5PRWKKDbiiiheC8EHeJdKUDHn",
  "key25": "Bt62qmmKBUax4JhCSQZY8bWGnquQMmQvYD1v4Ai2nKXFTHHV3Rt9jPbCaHmmvgb9p4aB4vgLQsqQHkAvYagXgvN",
  "key26": "FDM54f2aTq4zRFjftAkxdyJqW52wCWfrvg8vYdpLTEZuikPeLHsud1fgLWKccLBymK15ToY52sBPWUkCrDQw82u"
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
