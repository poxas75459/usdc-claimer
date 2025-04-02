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
    "2echDKdDXwAN3LddUNPkAzGB4mbVg8fT2B19BTTBUWHRJcfMh47Fo8YNh3bBhXh1gWyGejj2ttWC7w1WgbUhV4Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JCHKfuvU5QLfC1yQ58AE7xURQWkanymQfgfwM4yQdJtvk4kznmDCEsdcEqWtbuveJwV2ui8atWVjtHk2656SRxi",
  "key1": "5ZVWF2NJmpXSh5tXE3eUPsjFcbvhLSh799GSuMiuqXYb6TGH6LXNmjLZV2nySsiHmW8yiimtLYVm6DqhH34hwFxn",
  "key2": "678MDcBU3zut4jeTaTvVZ764M54B8mo6TedJ376DZbUPGqdupcJJ3k2j8gSEXiGdSRaM88eGSB9RyEw1gSqYFvZW",
  "key3": "4GSaVBwTcTx7GMoY15LfYckW4kysFZU4xFZPYGTNCnPz8xuUf5URmVLqtLqBN5uG1VY8un42P4t3q1rf1Am3nvR3",
  "key4": "4V4r3LL6jj1bkvfGkQ4T19xCNPmgdzNkvWjodXAxLybvXgrJPshi5aHUVbTM5iYdDxZ2yqwU5Z8WhZQAUWVyt6xM",
  "key5": "21UQYYZUJrnZkuZJq5oE4F9pXt6H5hbvz3zSMWjBqupZChw1Ce8jcMQboNGxLD7yJDfB1Qr24oAgnRwvsy2tNMdk",
  "key6": "5viX5am7y1m4fbv1bydMfE2fD9Varey1x3FUpq4Ry4dbqCD8ekZGucimBvgS4TXVnme2LUBzhhdqpYecQJokpz7q",
  "key7": "3bonnFPQeVH4Zmk2JNEkMoJUjXXiQi2qd9sfLVmuudY7aKExZM4aaVsFbbVnEntQuyG7rDau3ZhyrAtfQ7AbjtNR",
  "key8": "537g4frCFCXt7wxLiRKJUzDkvdKkSC77Hf9vECDiCr4dV5LwTuCYJtgqs8LMrnWsNL6xsK7u24RQC5kQSAACtgWy",
  "key9": "3X4g3FBTgxWNVraoTGBapypoq6qSGEK1fX2BYz3nkMdw8sP9jcW2nLPAoPkUDHTGdMG82DYCd9UqZ4yxmncq5nmt",
  "key10": "2o4Raxz2kMBpzYUu5iGS4CsMLaRoKo5XibmvqMSkRCGYzote7KnoVRAbn6w8gq58TcvbKo9nAX796o4KxwwcEZz4",
  "key11": "5xVKfSV1aAAwbvyiPSyn4Jp8tynWmgqwjfxhJBmMPS45MoqLdjbYRBd1ZU5MsFJ18yYmpfDQN7Y9PMzhx1sVV9QM",
  "key12": "4U4xzYDwVxLL36o1zsx9WuN9E8R5sKZ74HipUPSuJf2oYucDYuBAUBvH6GuGr6U4p7ZRbyHaNmS3bgSsVoBXDjMx",
  "key13": "2bp4q4rsb9bjpeAG8F7WD3Cu7YgnS1FHSws1ZJ868bVdZiHmfvXsJQFbMLYCk3BGqv53jeNRPuee9ixFnxQjMDzD",
  "key14": "4cCSjSHnFMTi2c2WoFJ7M7784qaYv2oDuAtYEnuQQp3PbseGnpmVQop9jVFfzF6ExdU6xBnoxS8wqKV9TraSRD6M",
  "key15": "5FkVy1uG5pcJKpoTvPVqXtHfsfPzURRbabJmNZvhwShGiyScFShpTJpsTEMhAKR88cjdf3dAg1H3TxdSYhrGq2He",
  "key16": "66Q28iijKzF2N6PM4NBnivMU4zWtmLoFAUaqFN6R2sr7Tkt9eDXoDo4hiARvQND1b8oVfC54M4UGffjcYJCh6ivM",
  "key17": "4db937Dz8UkAP5hQRLG5NbzwDuAQ1xSS7xTZzvux4BVm3wet9Yw5uKMTCwHtEu1SVdmyrs6SGX9F51HvWvgHpE7d",
  "key18": "52Wzcg31iUrdEM6PPyV5yA5LaUF3AKwxknJVGsQ25jvtQZcr8tuxQFeMWGGzDdTw3dkptidYkdqVU1iSyVwDtkf5",
  "key19": "2RDAsJdvYtBUj2eK7emcKvVz75TXRXsaoUhbKpsc4fvrvck11vG2oxDN9hspAnDsEdAzUL4NqHasY92nizHbEChb",
  "key20": "c2rvSwEmmzZx95bamfiubNEFQYgbLBcq77fR9giyaLYpDkLDUUaeY3M2y41jBj7zA6kq9F6KPGU8XWYtuPDrbM7",
  "key21": "3qGwpJpND4tcisxA4N4aRq1BH1QYV6gueFGn5RN1hHv1Te5qHCXZKBJYz5q2ejWhAnuJ1aqULVpAPHBFmg7sezRN",
  "key22": "JZLqB2oUpPWKG6PiBeP1vuF63STPLKbTWJjrwi5R9SL93c17DX1FNoALJ4PcL8G4ZzqH3PV3NT6j7F3vKqs4Ymu",
  "key23": "44HVk9YWu6ydZsFrDnfi3EkWTfSsceh3gHD36V99bsktTpknjWNAjoUPeuh4TxQ5eTmpfyPixNAbUiUYxS6skbCE",
  "key24": "3w4pZYANV3c2uSuLBYyKvA4RAQwT4mjt3oxiEacbCDiEfu6xnWxQmo579wwPiq7nHxa5S9LbFGhPBGbfyLzp3CEL",
  "key25": "2ip7yFPmemDziVo4RLK1YM1MFQdQTYREUkztVu1uKsWhPwmrg7oVqJ3EMqugsLBPdJezgoJz2o6Kgqgxgbthz1ka",
  "key26": "2bWRcp8rbgfkgrLqr7XCegtoXfoZGGd1y1Kvnv7xiv7hcyYw78VBEAmcPe8cyTZL2QiMUJAvzNa1wemztRhzBFwe",
  "key27": "3M42rMYSN6hZrvhtrh3uRATsBvjpLKXZ58dvxu7hgLUUmzwdxpL3Kxu9cEsGSLRuRbo5LC9oGvoBVdjEez8iSFA9",
  "key28": "31uCDNYQ9rVDL5NQcg4Tdz3GRkMptKtMvui8Xc1bzZp7W9dhuSNribAt1MjcVMHUNPDeNAbHBiF6sPxsyNuegyvd",
  "key29": "51d2RkvKvsZY2nnVvWgM5SwAxFWduL4VXV6boo71huCpSpxtcSPxmdr1CYEgLrTCWwjJwYBhCNrHfXs83WQwrEQS",
  "key30": "2vs8iXY4ByC8PmtHYRvbUXgS8AFYjugUN6xwwcj3Ah5c1LbHJD23YuKPX9oyomMfE4ZgBh9onMmYHPrtGLwWyNH",
  "key31": "wgnznXYmRQBgmyvipWP4AyDQHTHh9KEK1ct9zuaZGhEysZGHMEgco8WFWCuV1T91NJqNbGUjnGvbyDjSyZn9Pkx",
  "key32": "5eDRJPScmMbTp8BJrjdie6bnSxqVZaTh1sEJ4uRUYPhm9GewDjphYrcdxfH1aTaHrv8ZCdPhvBmP2hMNmaca3Hqd",
  "key33": "3eogfZmY4CD5KCDnAmYny9MBHxroQ3siVfDw95W4CPZbci4A8AhDC71x2BdSVDZ8gdx3ppGdAuchsqM9zy71vfjo",
  "key34": "brc5j56he18UHHTdkbChSugp423Att1op6iE1D7y6SDd4WMTZwtsqEHdzQPpHVbUfD9YjJKxFsWCeAtopCF5yjG",
  "key35": "4imtHG8PMaauDeZDWaAB5kxvNZ2j13Jrz9VMz5NHG3qfnBFUHeVgbknKxvCqJcVkyg9626eGMd1eekwYxuZv9QhN",
  "key36": "46LM3LfLs2e1BtG5qTNBomn1kn79byusJUAdcAcQV7qHCp5W9CkCRrRYgy2yuYoT5zwQ1RH14F3mYNwWwAAwUBaE"
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
