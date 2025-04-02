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
    "4376WK7qSLNMqUQ9mxF3AZhGctz7m9kLs1S4YdAqLqUbyxcVcrjPauA2yvG9hvz8JDdgv4ExTNnhxJzJduQPXaBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LsvJYJRC3fiNJPT14n3JZgzzjgRbiDLAGtkin2VJ2jAcLhFZUVjGrrKCA9pEsNmWPpL8wtKb5p8m4pPPoRBPZWX",
  "key1": "2rLiv4rwvEQMJxUVsGXpV6NiZniEz7h3UpYZeD3teBXDQpMWcbaMdmSGbhmRdr3JPSGAa2z2hUo1T1uT5xhTRR2h",
  "key2": "Q4JGvPrhWsJRV9oZSTgQaGdLHvAYNTixbUP5iJZB1GMDHYPR2rpYP2LBXiov1DMLYHnitkNTaFhv2unWfUTsDKm",
  "key3": "3c84eCMCdFVHTCFGH1EuyVw5R2pY51yQXdgYpcubqCfewfvHz17rGnvKgLaxyzH7K439CWqXvjWrAh16xXMw2kUD",
  "key4": "4Ye1LqEqgbfiMbds3JpnJcS6bRoQbkQAs4yzyFMq6GfDXJDddKx2two4ZrZ9V9dymTa7tYmo26pi8MfyKsrUgANf",
  "key5": "3sq2DAoNxaYphxys8fu5CriggK497SwYY3k8Rr8D8iRBJ5c381LS97wih2FQVRWSY6x7DUdfutVszKruCAe9yewT",
  "key6": "61AVj4MARS6dXNB4UZu3HtexMGEn96GzPDswEgxAUagzzfiAdHZ9EqscVQMaeEPfnMQZUYNEZTotsPB3YTzV8RoB",
  "key7": "AX33UTcyfY6fuFKSddNQhg76VhkVbN5uhuRQAFq46pddMtRYpscnAsbKFATa6QDUfhv56Pfo39dgvWyNe2MwCcq",
  "key8": "2EUgVU6yYsEK6xEB2DsGcJq3WTas4sxLrWpQUx5moQibJ9zVnYomNhuTLXKyBkzRiSgXAu6LNiu3PEyE7jzihpTm",
  "key9": "4sNmo5B3jwNavJGbk6meQQkUhkbEtiZvqD6gSTFxm5zMTNLKYygi7gbi9q5v3xt7T139CB9YnxB3iw94MyWJiJvi",
  "key10": "2mDRyK2FW2vNZkWAT4kWvZnhXzGK5d3Q4HWcLWr1VjQueejdcqTmZNdwiWdU4cK3JVWTKAZYY2Pznxc26iKsx68z",
  "key11": "Rp88dMNN6BRbVRh36e2HuhFBEUMASKzmM77aeeSX6MJ8jLxS6EdSk2RcmAuBp3W2fFUsvtqLQAVZrai3PktKgjU",
  "key12": "39gU1FeA2kJL1fxRyy5JMZikzjP1BHr8ABpTUfoipA6X9nEC24DqQ9cBh2CvpRRpgynLmzWadmxfxBB5UYtpqV9D",
  "key13": "smTMmJKrjRR74uERJKCmGFMFGxeZRRUq9oXZ4MGtopZaRGqMiWzxMhutnvYEtpytM5yJqrziSdVmMn7yphcTNMd",
  "key14": "3rsmAqyttkKPHqGqAmVeN35t9QhAmNYYLyGmbQwjPYfHpcpGkuen7aJk1mWdpN8126hytBxPg1zbVeUVLxBfBEWq",
  "key15": "5Ud13rFrbKPdFY5xGFzNc9o7PnHPE6LwippUZsRZ3JqgubmW6u1PzdoCntLDC9vpprfMCtv1Ea6Q38rQximGu6aR",
  "key16": "58EZCN8RTNUV6poSzhQvvHk8fEELoHQpVkgEZm1bWv7DjzmYFKdMp6Dh8vLA7q3Fyk68FbH8TVGh74EY4zWEb8cK",
  "key17": "4cNuW7GKtwMKDgZHXe1M1Md1YT1xG2S6T4czd43RjrVh18xEYgEMZXvj5kTg9BPuZ3R8erCzBndGsuYqxZMy2kkQ",
  "key18": "5WAD9B3m3qj1mED1151Kembq5ExAJV15bTN36ZEwXJvNgm9uPjzBDUCeSmqdz4PdfAohtE5Ne4mnFJYPQDV57ME1",
  "key19": "3KPLGeEX9NyXVB6fCHtf4thVFd6eDzji5zJN2K5ERdV6GGr8JgCKEyzfHwjSSC9sXWK1qnEjWNxSjBqJMLLPNeiw",
  "key20": "5QjkSzE7tsJX74ADSNg9hwWCKDQMi71RYKhSP8LUtJwyxNHeiGmCbXQQZ48Dvf7CFWv6K49wEf6Zit4U4Gg4tUyU",
  "key21": "5ut3AitC81A1S6MkcUGKBUHs1grNy446vNDa1T8Dpu4tUpKWtMuyHUa7aYgpUWe4V7wqYQ79jw3yiyGCGweeuWdN",
  "key22": "4z12C5nN6339PAZCRj2soSiiwcrSRAc1N9a7oTjAHcKMJAmWLrsfPXS9wr2EpkKhyXvanLsCUhVAGmhGtJcpY92u",
  "key23": "29LyZg9ndpih37zRpzUt68c36EcaumyzkMcDpvETMtCbJkT16bmWcqSeR4xSczKkin9HPTZUc2CNeNGswVvhdF7m",
  "key24": "3NoRWWSsCVGr5gb4MPMA26pmhFvWhwixRa54NVm8hXhBND6LTXU4k3GQBfz27soPe37boDtks3rE2AZWaqofQR61",
  "key25": "3VPVXZ6bVMm4yBxx4n1Hdcq2GL5VvgYRX8XtxEFmCFiYn12UVU3y5RPatXFLmSPT97co1ZbutHui3k4EkvahA4Tm",
  "key26": "3MRAiUJ4rgnLcvAKjMv2i7UxLABfk1bdHnzu3neBFMkQnLyKGF9dqzqbnYCCxrCCsXmWKvPtUCtpLguFymoxjsGk",
  "key27": "3UbvtCemibdu3PgPHCNbpxf7WG4rNcSQUyB7MsifpGePL1MySw3P6xa2a8nePnr2YJGkeKQzSEYyuC5Cnmoua3oR",
  "key28": "61mgHem5fty2TkUBwnQhZQzJFjgYeykrwYjzLTPRLHGfmBtcH3dTdgQzVW3xkE1AntYdp6a6e9KJaYA1J7aK6qsZ",
  "key29": "29ewAnt4SRMUKVwS5Wqv1NCufGMeQU6B1ZDAq6UTWzWDsDiXxHc5yscSFFUGf14B5ucXXjEckNePEuMP6qRuJ7is",
  "key30": "5Z2BdrgSYonfQCCAf3hrQcAji1stAmQembc1NsPaRjWtJkAzE8zRmmh8SgUY9foD9bjkg8kd5T5XGxE3gM6NmFMn",
  "key31": "3eGWFL2cafaYcuihkYsELrYbsRpDjDbxreWXrRkrNQuS9btM9mrQwnWamasFsr5etEEaQTZgdVvSNkKhThk4D7E",
  "key32": "4Z4rSFFc1ewAZ3qNoVNs5TkqX8cpMfAj5UjcF7SWSyPSa7xqDUwN1MtxGEJhw354oCKpSp7favCaNYffu4w3jhXf",
  "key33": "5LLR6ne9anzuVyF8v6tewQPq5j1j8smNMUj3kWRPVNThGfbCS3tRbhcHHHB3PupXa7YxgXXKVoxYovhrngrGmsTy",
  "key34": "3wEiRgFJ1z3LaBxF4Y52JcikZwXMPAx7W4uBkyfPB7KXxpahLu4oxPsWeNijignCokaXgvsxAFrSgDMyukLYSSwC",
  "key35": "2hbRc3Kpx45nFwAMXRQoAHEMyJLZN34C3eoRWKxVBcZ7iwfQWDYduR4AhJHpB9LqBUB8intNNoBwppRxgmTyrv5a",
  "key36": "2EukqN4a2FU7E7R2oztm6SGR3Mx96RuxpLM9nTVYF9QNyCx99wQR241mTCQiu391kdneknkz9hghjU3rX57gfE3U",
  "key37": "QQCKkg1MZms4jMG77ejSc38UMJHcfqjCUkVon6AidgoJ5NDyAnuUwQY5TgRyTmv9kCHFCKMEpRgc52ESf2a9aRB",
  "key38": "36PaPhWiRz3N6jkKZV7Z5NUZfM5tvnnh2juRoXAZK7EgYgCgUSnfzFkhigp8i73fZUrhicYLptr24BV1WjvsNZfQ",
  "key39": "5KuHtinWwv195U4jJk7A2wH9eDFVcARe9unrKqLgqoDP58ExSAXbs5pamperTUEjRiYYPkRSJqpd9B8xkUxoP5nr",
  "key40": "44Kn7fkFkFwoLJeapkzBge8RzAmPQ76upiNxTMr7He7ma3KWy6XDLzV2VTVyqcGqQ1NFukpP5WtYXPAABQUaWXmP",
  "key41": "9uF4bhX7bbFFU2QfNQvw4UaUp7yGrdegZmw7U1Y4TUtEQUapGrh1qKDPyvswPxErE97vfZ4EPKde3ofvrX7qXjR",
  "key42": "46LfZsahZvJK8B9yUDZYtLQAkxuxK74oK5cAza7fqMteT5bsExofVztrJug5nD2rXqtUzWJ4WjS43vHKpU5n5mPH"
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
