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
    "2G39wgyuq1nahxmcN7SMupJT1j3epLDCqUnhT7xALinfR5csE7vhwL8oiTHGiSewFpoKwJYaPpy4QRC8zUCQWhio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XeM8AGGnJojJEsP4aebNGx2LDV1zo59hU2aQvxdQSdasBXtMRGYEBS4quXX9vmrx3fc4gfHfCSVijdybQQ88Qu",
  "key1": "7ePavYRa593iHjKzErGnWLA89FK12Ds3kvGGUH7hAUbLo7sYqnayz1QKGdC9FZLS8ygbe5bKcRKPdNez4dFeyGw",
  "key2": "26tzd4xsvK9rye7YrEW4kNt7mPadBHMJsG83WLTP5HwqJvASoVw6DKcqD23ZjeC8v2KRC81k7VqevzWP5Bx9cox8",
  "key3": "5xEcYsUtpk8uNnGVjkAiPRAJGYxeZ6PeL5u2PAuw4JDNPB4RDF7BHdi89YobSYXW7R7vxG4YPd8AuznNUREVwmyf",
  "key4": "5pV7ADVdyeWe6qR8ZyVsUqwGKYVFHWymHHmFgHmpu9icSsJDqihhJSLPcKpHu1t5Sytp2qpmkMN7Z2WZDXqsJGKt",
  "key5": "54xasP3Vock1L6dXhAqJeSKiS8faGBg39uCeooTP12rZoeNsBBtQPDPdYd9ZbHkFP5Td8jD5ZAAT5JNpkAAtcGzV",
  "key6": "zWZcGgYWpYAvVupZZT7CAsaB5pEFgdGHepoBKf3p7awrXbQFq1sTeoZR1SbsJdWbXx6AZhtg4atCy7AyMsu2f5g",
  "key7": "3zWM3vcSw8qrYPmReiHXiVcqpCCxKdDhcHk2QdeehXn7VcjmnHyybxb65Hj3DjpLT6LMKDhLHJ8P4WLW7NoYfc2n",
  "key8": "34TakTDbFCJAHqa6EpyiCLN2rFGGEBNgeb7eNXpNQ7aaSxxMUt2GGZoxKr6szkjuEbDLxjYJFCGMs1JS3n1S5uNc",
  "key9": "4xuyXNhbVmzg2wd2LkAR8WEporaiCbFpbsL4rjSguKxFdVJfHsnGjcttbRnTENdxDBp1jT3iT3cDwCL5HyL87jrS",
  "key10": "2TZyfLgcqmr9cXHedzKTceXQ7YHcCjaV56L59U5X3J3qWS7VwXtGDLXxpFAdavQKvSPGZiBU2KWsoHomTwFkvAEU",
  "key11": "5dsjdyi14gqXqiE6HPpmjRY8ezTDyETxY7xfb7FAkBKpkWLrutJyAUL34vZfymDQnLuVA76saARACrp44bBsqruC",
  "key12": "4PvP5xsnNnvatqUdhjGYV5n3qo96LsqcFmCLgMRm2U3KzZbNRozpavdVXD9TYM1K4mzdPZxaFib6kemGJUDv9KQn",
  "key13": "1JNrAXJQXtA19v6bir4WV2t5dD6sVBMMAkd3JGap4Qp9UYXiPzq87nS5WeCt7Th6rfB28GULStFBfmq2DrYcEr8",
  "key14": "49ooifHMySaNTFCEzVh6RxvZHhBXhVDFNsx1oxumax22aMa6B34XV7KQ5SN5a7sGairGD4NoXvZmGRLYmk95go66",
  "key15": "5sV5cWf6M23pRNVRBFAxBhVzUfeSoCQmToSY5ZFXE2R3yt4VtnExFP8BsZVAZzpXo8xK3nkEj6matmqunxLoZ4d1",
  "key16": "4v61bGNrFBagR1fzft9T1cze9wkuAJ9pJGuw4yjjW76qniZtN71K3pQ3WN4DEbiaHEr28s5nhTmC93eW5To12fz8",
  "key17": "5hE3osn6xtGZg92QHNv53zsDNePxguM6PecdsvxzZ1DmG5QPzJ1XscPgnAtyEoXUds1xd4AuozGhLbCptdh3yg7x",
  "key18": "knN7gHaCoq5D44wxEJLK6nEB5Eg7nw7s1LoPsPRbHGstByfje33qXzcSiRGqSFohLNWHrASydhY3CWqaJz7sGDr",
  "key19": "42kVYCfxjwZrHri4FLgodbQZiyMEXpjwNRTTiwXnJRS2eKU1bUxEmZ7svGv6jgRw2bb8vw8zUgJ6eAByGH7KdAtu",
  "key20": "4b92G5hJu9VM67ar1ueRz2cUh4obm7S636yQpBxM7iw67XiY65Qx112jR3MSTaMELq6Vkq7CKCvd4t5G6TYtggy2",
  "key21": "216k4ytTzbrp7ks4fxwBiHNYZWUQJkrNLFDMdCuckHn4yzaHyc4WFYyvztKtkMLNPHzBsN36QDWnpLn6Y16ZY9yw",
  "key22": "5coCCNtzdofQ6zAvezaQqJL6AwG5bPHyRG9k7QibppG9WyvKXtaJ8J943go355x7KUwTnaHboXgiYi2CeWPmWYBy",
  "key23": "2BAQVRbYG66VPrqd9c9JusjypANKULPoi1b11tCUCVEAHK5KfBEkJdW1yiQVMNWJworvpXrUzDTWMwBAHHZzDf7",
  "key24": "5jcswZjaaYwMm5tZioJJtQEktiaizzawX6AyF8YD4TLN1rBTa1t44gfcNvL1oCn98xbRKiqC3cHNUXGDrDBjYTVq",
  "key25": "2vVcdtB3n3qhNTGp1G27DENUQxoT3Mg4GFRwDfmGeCV9yaEiEUbXhBiuhnJ6V6w2eHqgrKzjW3tkW5MmVYNpRHXt",
  "key26": "3G9oX4EPT4reULvkbbS2iyz5eweGen9jVEMuJzLYwD87Ck8UzXV12e3N2FjaomuTe5u7Nf5cSFVxwgM84Q6SLa1n",
  "key27": "TM6X6oE7xvJHUdy6dsQWstAUL1FBY8Dbhp4yEGJqjJwh33dmguy8EqoTZMxvgjvVK3mYygZd6hkC9ogoQFzHLCT",
  "key28": "2cpaXxktfQ3Ws9qfH1Jh3hSGmv9Kvvt9cGTpY8fKFNGmsh2aP4R84pzD5BxWEg93DaH17AnHwuervfVgnBdrTUrG",
  "key29": "3KNXHjDuNff2xxNLF3drNqDqUyJPBdcCkMqSBTsz3iTzuCevAS12476AWabGhRVL3W9FWYiZUycYMymmTWRG8YMP",
  "key30": "4GcoUWGyGj9aEspios9ryYnLyLVFyVnV8vUqb3K9hmwpVK1NgQSLWupgEQqqAuWn3gWLHKA4MmftTdoaoR6ij3cx",
  "key31": "A3Qj1kbvAnRzguGf5JPnz3rYjSq46Pr3fx2qFQ3aMiKzcExXJgRQRdkMjZnb1b539tJ5i9e1nYTd1VSq1Gu1fZm",
  "key32": "cR8YLkh8jqvYac6TQwRc1HNPrxjcUdaVMwtg8oTpnbAKtVeeqrFSpz2sZkABQtRCN6asxVoNozgZfKEfewNpe4i",
  "key33": "55NcXNqfPT2GMFiXdfgRCjHeEb6NCMRFe5vjxLdXMwr4nXZkTa4N5mRFNUJBZtkTogCbXg4UTjeFCz9Vj1Yr7PA5",
  "key34": "2pbKpLufhi1mbtnuJQsrqpMecmKudKuYKwGJvbone3jEnS49k9ZCAHyPr1LbiHV9fEJc5NUfLcpWaBiWvxcaEg39",
  "key35": "4gDqxHwvfNKrKA5P7Z3GBbrxDBcZwHhJ5hSeoA6UibA7A2iY5Tjsuv3W8UETutvdmHHy93xkZdCGA9EUrzKFWYjA",
  "key36": "2ggkhm4B5froLjCHa7bqHmmXtjpv1FrvPScALLgf5QvoX93VY6Tc6LRX3N3Q9ZrCCqm3KYGngjxiCZFku5hrpMcd",
  "key37": "SvfuT5JUH7du4hWTynWTZg9nK3SKNMYkHFvKV5WdSY42YPUYGcqTTZ26so97rZaSqLBXN4cRpGVCkLPCJiKj3iJ",
  "key38": "5ntyJe6Rshs5vNxM3UwWxxVmahkHoiAHDiNYpNjKTqthp75MubfyWdY96gogDoBztgVZ7eR3co1mxaTY57mZCzS5",
  "key39": "3qwWkAfpqPvuCEp4puFGW56VqADyd21SBpmctwRxSYF77J7uQXS8qLxxsqqxcyrrHW9t2nSvjLGrCcPSPzGyUg4B",
  "key40": "3h1yUuxw3GBJqyefcMcCxLCBVP38egNRUiSc1B4qRCysPAXBmuyBzLP19xrnGPLwvUKURRMHK4hXQQnu9mJHxvY2",
  "key41": "2G27StMwAcU1HBwyQNZXAPFXP6jBH1PE6UvNrdEb63TFcmj68aTF87oxxqiqfYUnMFqZqqTogdXwqVxbEReKcyXs"
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
