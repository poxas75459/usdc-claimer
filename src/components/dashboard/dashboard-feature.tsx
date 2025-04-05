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
    "U89SdnHzLBwYQNnkUn4KdqkCT6ARNGcwhxLn5yomcDqDwvwnZgpAESTWt8XaPwAPU24h2vi7BoX1N4jcvZuuys4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67jMCBx9p4mP1LfGveKK229dSGauAcQb7BxzZBx7L3129bTKkNHYA1d5Q2Fipqnhjuqxs2vw23SHgL5wwEFVrDf6",
  "key1": "5ZJBHF4oefcRkzXrLHZCinsuSjTjeM3PLj3KyhNrA5NjG2VpGXDM4aoJo1bzZMqDxPwwJZ8BDmJ3SzcCE6sMnnc7",
  "key2": "5TYdftnT6oNjwx9gs3yoKBjenqDDLCpiFQBvMJqqXUUJtBaR238TcZnCpxCiKNLELPfcMwrxEo5kxrFsSbhGAYCd",
  "key3": "3BTeLqZR9HGMei25bbwL3fQVAXBgDvHzwnQMHGK1ntvx57Q5zFqzAUhtgm7gapAwUXc16Jc3BzHDZYAApw71aiSb",
  "key4": "WbK9guk9vgqaN4LYF5sFyDgtK9Uy5bbranJx5Erb9ZXenALSuL9C5H3qt9wKRQDgARB5kpo9VbKoPcUfcfMYv8y",
  "key5": "3WUtroaw4oM5DypkQFUhSsnGEyfwWY6b2oG3REZ8UvPg48tCdQcDubA66hrbJMZheEwHWbeJ8KUecHAmE56BMsb3",
  "key6": "3HjwRi2bn4eMxBhAb1TMonWS8tBcPFgrFWZYmiKbh6Q7Dw7Vf5atFCSmJaJEYo28TcHb9QPqeH23u5bYkR3x9erv",
  "key7": "4ugrvf2qY9WpbuiPc4nAdirRhd35PeByhNxu9csD6V6Yxwmzn38kSeZbeTCrkivwt27uRvpGTBDWo8LQfUfVini6",
  "key8": "2ocbNEZ5CPcjeo28tePo2S6u1cfNKaLbCjgEo2qG7GQGtrTwy9J1dfrtC7G68EfjFmfAUaEuteZ9pKhViWZQvuKj",
  "key9": "3qij1zm5cro6FncvKQjD2ZYbVMnsN1tBHVHMLftBesCP2foAF4HxtUJFTGmjxpM8CcpcNa8NMaqHVfuxAQ3WXTp2",
  "key10": "5bAWpR4W3usLoZqgozdFShhiNV6CaenLbTrodhzatbC3SD4eznEvu7prStWaRrv6gc1Kswsn8drYnDFY6UuLnFs3",
  "key11": "57zppDV8Dc8rm6iberBnttPEE4X1BnFbZeN1QexdAJV38KQ2gWbo3xFXkVXA7nJTD2MY7yWr3y4ngfbAgwUss9N5",
  "key12": "QhYYoLvyKCjL3mDcYfbNEnb6ME66W9Y1hQr4mahti5nyKvA1WqKs5seWDY1sA4LWeA6R13gfpbkF9chwopsfebM",
  "key13": "ifGEAH83SV8QVYdn3W7NxgkM6wE8Cz5QUnWBQQHqyQLhzKNNK2VY4yKbUdvfSZwTgbSE9JDpod4JjFmMAj9Kub8",
  "key14": "3P3uhxeHVhzP1avJb3cGP5FUA1vXbroM1HaTXDLiHXuC1voqL7HZUAHDdvcthwvyvGhRYBcKTY7UWFNX35Qr3J3o",
  "key15": "592URSdCh5aDfNGj8vKTpGqbTb9HderQ2VCDTxSexJwP5KR8g1gaP5dXrvpDxEom4fbVEdCAKzbLe82Yanakr2bn",
  "key16": "5QBvWRWHf5Xg9iznHBH2yLzjXP6TJAytLvaroy5FMErVdANYANDja7sTgxVM2fX9dcfg274PygbqFqG4tJb99dTH",
  "key17": "4goQGRWtuLzWPo5bxW2h6ojU5KrX6uLXB7E7wdJDiwjNBGbPP3kXm1qP4BzvsEETxRT6qpHYfh4Asq87ZWizUpND",
  "key18": "fpPFfxhmHe898FDmpftCEccGDAkvxQEMVKyCKuQGbkiaTYaCGshd8eCzKusFk3BT9JiuvbsUE4gLooL8EJ9GfNL",
  "key19": "29fvSRe169c8ahPETv2KcEy1DKBxgp827vwzVBrtwwiSD2T3BX9jneBVvqtBiQzggQwTnK5TgkcEh7ygZx64p5JZ",
  "key20": "3mC6CMuuxZ2b4iNfUHzzjF6w2M7UuBfBq9g4zZQ7Evef6MG2csQDrvhL5sVEqmcEttpqacDoiMQo1BAYnrmZHZiv",
  "key21": "3juEPQD7ikhQcsYAoTSoiPQRfQxohTV7Umtthq1NhrRN1KrYdts77ogkGTgQvdFuy1D6XbPe6xagFeWuBorhYzQ8",
  "key22": "4dpihUsjfhBjmVHaYkH44W8aPkeUGyDUQvcaV1uvF4idxiwWf52638fDMo4hUiVFccsGVBr2Jie2ANf6KHW7jMNF",
  "key23": "zhGn17B6TYMziYTy6P9dJmMq7nnEwbP6C6PPh3PPAR8jNk42P5WGeyA9iqD8Yu7HZqP43d53AjB6HChwv8wh8R3",
  "key24": "4ztKiajtbDbWFQpFEFuF6mAYjnYMkX7awahTfwrjomt9RyYM52DTP2sXZYrm3T7dvQPPQkVwnmFHbsRbUY6j37Z",
  "key25": "2G9jHoVoeUp866LCZicYo74tNPFXPWRBWaJoq6ar6he3k6pe6VDFe1Fb69fNLjkMEDNxEBPXKt9nrMgNe3nekH71",
  "key26": "2qSca2DsuoeporA1DrgMiUR6kRehP6aVo1PiG9eX1QdhchjjiSgQ4BTe5NKNfBfKLZ6N2WVGRXcWuqJaRLi2jNdv",
  "key27": "3WewEMyQpMAoRk1cnntJyUR8miMvJ7ts1W2yjPTLQWNYDQqWEXqYbhZVdkkKBJ3NoNDx1TFTos8ZRRRvpxMAp5dP",
  "key28": "5CHN7WzYpYqTmQt1he9cFxT1vm374ebMh9VhwGwSDLW4ok7dATCQbvkRrHQAgex1ixUBX4g81vVm3HDLEJvmmSnQ",
  "key29": "THLCSHf7nVfpnSr7XyVQQodcHpKhhgju4sHSw8Bh3dE1bYsSc6XVGdC3a9C4mDHDVTxAqTEiB7UHR5zmZA43TQc",
  "key30": "2CUQbWDq2GaPPjeLCa34hxXyGAa9UCadPEKKtEMsMX3zoCaTWefPoykrTQpraPBhJC166sgqsyYBCqR8CeKGUNFq",
  "key31": "2vHRKXVmM3v55fyhXfY4DQqmf7cVRbXjLusnKKvcTKJtBUDQanP5yPQ3tgAdanLYZhPoRWqEioY5C56eJTPbuDuy",
  "key32": "hF5toKPTsX8wW6FUb4uGGRSJfttjKiWJaw25xNoWVQ6NxiMULc1sPuW7irXJQCwJpHsGxtzMHtdYxqUrgWtBfF2",
  "key33": "24EA6DEbfhezVQNpYcbriZm4FzUSBjp3i1ppSsiedQLzdUXduhtvauMEjuQCz5WBpqfqBUWSVkYkqhzNd2A8oBmN",
  "key34": "4ornKXP2uPNbwzaSFc7UMQWKQyLJBxkwKNGcawFJiD5bgW7ePwHzkGWCvqemfpUcQzvQUTi6zeKPXWNorvbDZUJd"
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
