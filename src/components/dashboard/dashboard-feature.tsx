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
    "CSDnjanucut3k8KbsuXmQXTZaYrAJr69NRC1EgtQNKqWMB5p5LPP6GMfUBgDKwk4xLTSuz5VSXSoz6DPMf8yucQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6BU2X8f5zie9Z9C54DExqBTvMg4q1J5mzrgPrKfEKe5on1XRztjD5vAYNKdvkvjE9nV3qXH6oDs5S4wYJu7o78",
  "key1": "5ix71VKwCvtqkWbhTdaLzfMPP2bBgQEiUVEbJK24QXa9gmoiCA2ZBK8srmsAAvdDTRskmVgMfGDfC86CbgW25PN",
  "key2": "63uN7wWiYYVpt4HhAAi9QgRGqPy1yZt1bf5BG1KiAAjHj3mgXLAxyxoqQ67PkVZGCRKUKqYVGu4obkSnEfWLA2jk",
  "key3": "66QWj4QyGJJKHjcbcQXvQUSj5FT9cZC16CpxqEBrrxvU9D96dLWuT55mfLScyvaaFct7Ats9Px4vTEb4m12ZFXGu",
  "key4": "3w6BqJE3ywutNLaFY3HsRBQwAs9ftz4Ksi2W4Jx39QPdK7FqHLdyNctzP9Xex3BRZUWn4sfLAnd5nwV8opoN192j",
  "key5": "4dAAH77YYAEUQZmtRLTvrZ2fk85eCrf3fCevmMRJEYnVThn7xDY4wCcWKeBcg59vxRoy5JD2s1mYcJLcEpjPo4ah",
  "key6": "4N5ZP7cQv6CM1xsMmGDNo9ZwrfHF3y8hZdNMhf6N2VLPug4uXbDNanX6XiUHMJwnoWPcHn9iSwHKxq3qFQ3NieKd",
  "key7": "5mnVgHGHcgv6vB3XubD1Exyv8rtRG2QbcoGCNMYcLpfPNr4fowEdpfDnHG1pBhovbv7YoLkU1km5kB83y6CaKWwL",
  "key8": "4eXb6txDeXWL7yGey5XXYschH3uGAcXCM1uPxy95Ka8gESgH2ZLTHLGzCoaSyLUaj14JKm4JY72GQMqt1R29xk6b",
  "key9": "24Sr9WtgrFWd5KmtwxNWv8Yik36HcNfGXjYD1tNqGNmL4fN2XywEh8HJkgDbFZAa4KXshRqX1MTq29A87EGnvTWm",
  "key10": "5Dq39M7W6KaQbEiE3XZzYKXrumbVXFAZX5kBEpJ95fkZW2k7indJmy7quQ1xdfZD1sBb6EXQ3WSfA939vtpPsGFJ",
  "key11": "3MR9M1XECSNPhgna2qRGCWZdAr1mHa82iXz7mSmtW1GoK7kymhBt6Grso1JGWKLdArxh412TV5X68sZoyUQnHsd8",
  "key12": "djBX7HAYRQKjYF4JZBJAXcg628cFaU6X9zkR9q7oSetwCpMRxXgxNcVMwA6xLAQow4UqXYBPM8YSFXVhdkwo6BW",
  "key13": "4YRPG6pJitnVkFNbgR2rDpR8yBhMGSV92ciCrRJRtBUq4SMoLJnG9DUyLsm1UhCbUowJoqWznsCUJpSCzNGkjr3F",
  "key14": "4TjjjZ85oEPATjiuL5gbTgimAQ1ESmyAwu6aVn5QsS1wMQz1tcLdhDiVVtFGiazdUaBXDqjNC4Bpsoxasj2HWaKc",
  "key15": "4oubzJDYgbGy6J13J15ufQaKJ18T4qXuRc63HCo1PC3GNHAskCQ5pUZCKsfvcPy6EYJCmApXvNTDe6uji9KMSTEc",
  "key16": "3U4JkzFpQGs7Vk2mTebF2HCgZ1upyFFCLXBoFFfiqYRBCxNwJUVb4hhfyLso5v2XR4GaBmJM8hBrPa14XVTmomYN",
  "key17": "3adKoG1ofeBvaT42tmuaJpBfoV1qwNTyFgcVLKYkvAxrqwepwRJcBHrJYafMRH7Rzg3SbHRUZNtYSrpnRnLHHR14",
  "key18": "5vYppJnoXufqpxLxmMmXYctkrG9d57FXWhrsC5b7refPGNbat4ReHxZ9Ys4BfeGkW51hqckiPP5MiHm7KprxHDi9",
  "key19": "2MWQhxh1GS8gTKjme8qcbypjPLbEGunVm12R43ypcSYyJam5xCjUYm8SDcZiz69RTeczrRWwm2NoCHgQCRQRB2od",
  "key20": "2FeEcDgtxckDz5EaCmPSEHYNwCYo4sRKtZmHFBchqRw8eh1yxiJ927p43jdDUbhM34VfcXqvCSLw7MUJ7hGY54nh",
  "key21": "31yEp7vGY9y6u5bRB339STP72kAzePjjV7y7LKbsB2p985Wzmkq77ZJUFMa6a3vfMk8gSxGqu9H1WffDoLRknDL",
  "key22": "4Kg8A8FFHjMFrAMKukP2H725njfwcrbzw9RoNnhF6GrWCDBDmeAQRiuYHhe84bR8TJfNtMgbvMNZnMYNAuxCwMDV",
  "key23": "5rLGN1R7ixShYH4bxa1ddDYjDkiSpsEHdSqMDfwrcjq5dyeqMnCioZZTrhgNRSbCqq6JZrkawBcksmG3uf21pbpV",
  "key24": "3mjaVzSMSvgBPvZxYoiMWucidruF5vKzDjBdP4sSVnURjA1pYvzkffMi31pbYfFypnZFSP8HMWTDArzkFrtY9KUk",
  "key25": "3xov1z2HQVs1yyVnEHXqvL6rhHGciFWWSqbWBChjSNQ2p4UYfxYDFxW52Wbak7cDiBD4vYJycDhApmpVfpze8kK8",
  "key26": "211Ft6dXDkYdz5ue7WLoRWHRvbBhuSCzk9PgGUjT7zhPiy7kgvqtjNj4wiM1wiPUKbBXpxNGhu6Bc7CdQ5vpNQuf",
  "key27": "5kHjgnkP5nDbTM7eVX52RxJ2UETnDvf8vQtFqZ52X8K3FtRFdABCRz91PdZQAsfmUoWsVaSk7tHagA5kF9GfCoWn",
  "key28": "5i29Tm42xGMFuuxmwRzrNornpen1oJVs7pRWZPcZK2vEgNeXkhrLwER2mNv8JMrnvdf5ZAnkomKrGCY4HkTcPMAm",
  "key29": "4QUjXHnLgDoBhJahPS7rTuxNSirgcULJ6rDAQPLfs3HnZH4T9t7MBZkkLY4JDX6M1oYAEJ4W7xUnr7Vz97knaKYi",
  "key30": "3k326RF3rKJQy4QM8nfZsdwMEreZ4NfKhwQbFHiKctVCYL6aTwWkEiDP7xDTvsnWm5TNkwkYwyYRoMVjdbSBuGnb",
  "key31": "2utFGrdANsaqU3JaStoA6r2gk7sH9cWDvnBhqXqY5eeDkUxWRwtioyzyvkXNR2d1bbfdCcUL3cvmcY1c2JnEVnCC",
  "key32": "4NBKvMmoWeeygxXfw4CvPnTLNqemzzE2xYKznNZvxwTe2586WP9JjvQcJbE9gfqmsgbUVFzcZQfgzE2rUq4RjKGL",
  "key33": "4bAxztCStnRdFXU3q3dMLgNd3FDtpmvmcYdaZxToJbqRpJj74ys87s71rfGQxD5b8eQ588DqJ8xURPJ2ymRbKy97",
  "key34": "21pzFH1kFmkgJADDRutrNBuZzh7WATn2znazNYpHh69ynsCoxEESBChCJquJzzRb8Lep82kvnQdFsHbWsVfrrXxK",
  "key35": "4fYQ54qxFPnTascMPYA9SwGmDi9QBjjXbMukThR1jJ9zW2w8LcxFwPpREPRi4RASCfdS13aQrXTAnLaUiG21UW1H",
  "key36": "H4bd7PRyQ6Z3UvtnsgH2yCJUxzSNuFHHbW2zYLGAMYXbH7tzaCyCqPvK97SVYeLF6oEqqQ6uEq6BreDDwEGF9BS",
  "key37": "5CpL1zNp65HnEt1AeetSqxvJhG9G8nCL5pWprrkM2g8vAPLgLahSSntCnchMHkZP7yr6BPnueULA5Zbd4Ds7Nzvi",
  "key38": "482BebjtGop7RSnoZMftFnoBM9edkxQJ2NBLruoAfLmw7ym418c5gXtdwZbk2VAXQsWJZVw6yoGkBgtr9VHMbowq",
  "key39": "4zuAzd2gUdJfqNLFPougZV8Lb7gqBMAv9BX8xNf6jrJzaoVEqrbcswhjB66HyYRy4HNtKqBfkeyv6XsmANRKqunL",
  "key40": "2PFFpHw1Zw3P1jJEpL4jE4gJnZWTFMG2sM8v4gcsBc7APTadiyJP98yNqYUNR2jgv7V6Bd8SXLzK9uo3QcTrYCNd",
  "key41": "Gnk8fT4FGPN16Akjp7c14sGyN48B9rnDRnHtU6TiNEk33LC72ZKmSWStZiJcpWpqKPg71ziyCEY6Emzo6Q5FSw2",
  "key42": "5AeinTF9FVkVB3nYjNGAqeeCZ9hnqEKXN2g31cBu65otQMxHGcjBmHZ6Dq49mjQDvJTZvHdE4SdreV31NLQQDmjn",
  "key43": "2dak372YN5TnwZ6Rt5yUGJPjKd4mdpMxk8buFcZbQoAPLssrhQzXAT6REi1xcLjNa1te1BVEqnEuf9neeHrUWFP8",
  "key44": "3zvUZErmjLwrKEXq8pn8VrZMfRxMA9fV7HCbjEPpVJ5iFyroqgKTd1YPUwMgt7yqnGWMh7yfbvy1hdSB6mgRuVdJ",
  "key45": "2SZasSRjtHaaRUaysM8zmbi3f11k6DMs1Dj8UPRTqEx7KwXaxHBQXqiD7uiA1qTjGiDEPUGHMExjhy5iCWfrjsWz",
  "key46": "3af22ZviAn8eTKaGY7xvT9qaWSt28tv2A71vw1PGupRdcfSHfk7asCLwJHjXfeJxCU63fseNFW7mrN8uX9Rai12g"
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
