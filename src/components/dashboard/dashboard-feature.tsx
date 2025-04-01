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
    "5hpyCjciKdrJEzhtVDWQyEToAziC9VuZLEg5WJ7NaB1bfJRAaTXb7tHfVm74i5MxidZ7f1JczGPsxzVDW81qLLeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gAnbzMerK9HFUHkgsetDjgfQprbUpbAeBXyrHyogyGMGZhZ3Vy3V8bsm5G52qDFeB4U6JU2nwA5Czdvyb1WbMRk",
  "key1": "4YJQpzffvntnFudnwpwDBUEtRrTCAPMoWJzNJidRZ56LvywipfYe5jMWZXqeACZGzTnh87v8gUq4RVkLdvoZnWDq",
  "key2": "7UMhGT6NLPfRZ1AM76m5peMgro17aaowkZQv6BQkG34zES6ccJKNjzNozW9NtXcLkxFBPGWv5SSL7nbr2bY2E15",
  "key3": "5xDApB5wy4h7EvpnapZQ6JabSUv9Vii523PTAfjLcav6iWW6G7NKo9d6hQyH5FapYYcYb4SkPppc8QrGTwxCNXRr",
  "key4": "wbMGUUsrhH9fzTQUFcH6N6Yutjie8xhdKn93K38QGm1cT276aBrRDMDtmAQLJeEwDdJvbo1FnZAEKAn9w6DCbtM",
  "key5": "5rbcNdZhJsJPFRaqtB759aswb2CqviGUUvCw6cyG98qH4cdui9UhpQg5gwzZY3v83KRs19WasBdi1AuwKYaraw1q",
  "key6": "3JJbivYZQuL3kHGESPPNPs1ESsFST2mSVxaSyy7hWrUxDxHQGYHhQWTKhmDUxmikyqj7sSTd8jLuzuQmthCvpcEZ",
  "key7": "44CfoDi8aiSuuxpqpCo5DjhMD9hvWnaA1fTAmFfjZBqhyULUdm3ooKap9cayxeNQAyAd8cBe5cv2R2pdeXvBrrYj",
  "key8": "2QTdyHoDNRLVSHWbTR2RCEFYVk6aFThdR2DAPxsQH9VE3u1sruG4FR2oAuVpf1ZdF4S6wBfqPXSHyDZubRLphaRK",
  "key9": "26rc8HfsNoATTK93vqV1PMaMek3UqcDn9kWEMdgvqtFEMvyM3dskWkQkC3WwF5ofBR1uiuWSATpxx84poacArF5Y",
  "key10": "4HAhSNnRjb2dR8N9WaCeMFyN1LRGV2msCNMRFLWr92bp9epAtuUHkyTc22GnFgGx76SkgKnVbcy1nJNjy7Ej4hku",
  "key11": "5VofsBTLQNW5E6AhzM2km4UBj3fgmYaNwqpiZ7jGcYhHZmHKP29LrDqpRi65XgCk2y8A9KpHegSDhfjHk9ouL9Bb",
  "key12": "3garoXxefq2C4wo96tCRNkyz8KD6S9vPpp32JSX4qxx5UEwKqyiT3gjHTR2mdJYXwWd7Be7QHEVVMZ4JVBBUDsGm",
  "key13": "pHd4G3UvPDALn6UdEBCuJnMM6gXKphTarcvhhiNoxCMNZzrvnzvKpEMkZ4ybq9zYmeSbSjfPtsfLwsKFLwNvSm8",
  "key14": "3pE3XAnghUCXz5MjJVMctyg1LGmXMV5UvBZRg2biokan1GviGTQWd3UFdPz3XgevFn3CixSPWTKT3YNGWgNA2Bz7",
  "key15": "5HtyHRzSZtuJityYUh4rSLn94G8LGyDCxDrhYRGSiXb6bbisCjNxaTXWMorN4LboZuVn5ApdnKA554AnSVhVQUGN",
  "key16": "3fq9Rs4SL18JYDkXnYRS8owK5j7D8aN2tVLddVV16cJCSLB8fCbW4TXxhEnjNt2tJhnD6TPYzkw8aBg3Sf8WURwr",
  "key17": "BrmqtwQN4xJAMBjfyaf5wu2QmmzKRBt5DqH81R5hAfvfdnj23KwvDx3P8GjkuDyjEaRgGFyoWdZux34jqZc5VSJ",
  "key18": "5WDLdB6avNBWX6zaMjZwxK6BUG9XkXPstrKqnxnRW2hcMdcpiDUYb7BBs4F8KafRL24xaiAVKGfcoT9RZETbYyvR",
  "key19": "4pFtK5bBjrjmwP6dwfbVDfdvzNVBk1EeawzmTR1Px2MYN7n9BpgmKdbAoLJwT5q7wYyRTH1kSrjsJ8ygN8xJty7y",
  "key20": "4cXrVDjiMZdeKsc6SP6ft74eTXZTb93aqWx9x7peGmWSsQhXjdE7eHRTLHNfLsmBiuCRGJpmzf4cdTuGxVxoUsBF",
  "key21": "GTFqHSQRpz8MMa8eMz1zStceX2QkNMYGVpTDY8zfufredZTQKhiMxYpE4fj5gTLViukBy7jbG8Z26EcF2ixqqYC",
  "key22": "3UkH363Dyc3X347PfcG2CiHJFTacbKCar6BYr5LKx4vnGfsanNQbWEjdVDRUAFxtbj33nS2P56gDH9LQVjhkYzRH",
  "key23": "33jMYwmrNrkpSZabf4k4CrSwgtWz7J9Wzu883Rf5FKW57QZvLSnqtZ7REYR9LUPxwkCzNEvCJwVKEYtTNHbXeKYK",
  "key24": "5nPkZHauAMpFZnfgewr4Ss6hRP3Jgohx9B45v35pgAV7zHsUUmWrbrnVgfSeMw3SmwiRSKT5fJGPivP3sU35KQLw",
  "key25": "4zSFC79TjNCnFELxybaGD23q42s3biyLmeT11Kfdkezo8pZTAF1AeReYm9LZCBNhVtTXX5AXHuFT9Wy31LzbDUt1",
  "key26": "5bXgCdTLWHP9Wa7GvGEuayJunpnZ7sACrfqQhSor9Wo6NrxuZopuo2S9hQihHbBxWcPwjf991ZhyzStZrkuAxGV9",
  "key27": "3mbCbevgtbLnpbeeYDEpFpRJsqJ7s5eiaSXth8fF4arYVw6dRMLxFBUCEyNmejHFFPNqKCysYGxivwfzTha24W9G",
  "key28": "5SR2eh1k2t6xw5DU8KuAERgvVkwgnzmgaXoxrDB6cVKfk8Hgf9HKjTCUWETH5PmJkpv7cqPEvSNfJUc6cy7SVPzD",
  "key29": "4LXAq1cEVaYzyyT3FQrQeGhhxB2Mkr3Ldykk2vrPNdTxqVQEZ9M6WzFnQAzsxpRHFutewtS9PazXMnj2eicPVeGy",
  "key30": "3T3nS41HCp7mX6kQgKsuKLyhU3YEpyJKXfJzK6vVkfFGxyBPRjBAhwNrUsL7bnbVejon3gjryZjq278sihsm6u8y",
  "key31": "44SpGjBitcGV7hRxDP9w6CZGUT417SZQXoKHwVoF21iBduXiSkkS1QpiLzgb5t2eUscxZ9cL9Lk8PXgSUJVjBTww",
  "key32": "3EJKLnuu2WZyUHELts9nvz2G1zbfXzpmTJB2bqgJ9sTscXCJnPwuhN2vcuR8vaCLj4aVRbPzz38F6QayHRaibejA",
  "key33": "2crph9mGChCgHfeNR3aiAJbsjCMs6yomqzpiN7Yx9DmWQZAVYT53KN2CZnxFHHAYmhVtaZUvPQPWuXyme9grgzq6",
  "key34": "P8bxRCTnLXMWt78CiSq6d1fcHMxYxvgvNjQHn1UDH3SWmsYreP8LZFFPqxkp7EtbE3RKXZw2AxS4vtYJnfKCdny",
  "key35": "5nK8Wg7niVpbDGYRRDVq5f4SMm2hqvP8kz9D4amraaCbYUuehRoyp677tF65ZLJ3GCNUiRYoCRCXYBV6N4CbeU2F",
  "key36": "Sjo5Qgb91nsax9dwXsYLQi7RF7xGEeaEzrAAQwbMgnokfAeKeNvB8b96aNCG7d7iBTn7b4kzsxztKL55fMvLLe3",
  "key37": "ZYYE9qF8rEtdnaY7ge4TXQXTiY9Ru9hyHsR8qeacVU9pkyMoKhtCz4KRReMFDuVmCkEVazNBH8HgSLard5xL5SQ",
  "key38": "3jBPDCWDFw7T7VTCcMxwFS4RtbYZBvxhEiPkVtQRKrnWL7eCgGpJk67dTmqeZSB842raezZkaP9kTPQ1dgmf4v46",
  "key39": "kmB6xWYByXpXvKK1ipkacsoSCbwV8hpsGknt2ZwFLeHE2zLp6jMqG1Ls7EGAU7WcMeKzKZ9ri6u2RwNWQiPkYGD",
  "key40": "2Rz9ynCDpemW1ArnrQeWAE1oQFHqPjyfz1cxY9U6Akx33gE1GE13FaJV6xYdyEU72D6J3NjyAvVbjRpZmfPbe143",
  "key41": "3oPwVrg6ZVuaJzJhr8PeW2j4fta5cPLQX7p7A8zoogxXtuS7ftPzfK7iE3kfSs3Ath4pfUt45Veq1CF79dgc1XT",
  "key42": "4o8FNHH6ernggjo8TwNMWZimtqPJCEM1Mwhb6BYMwHEoe92azXP771H1GG5Yq4ZWDdMNR1kuvA5rhQNDhDnvJdqo",
  "key43": "4UtEFzFqahf8F4jkXpNdrq5z2TrkJB7JvR2g8qQsirnjcALJAVVK5edih2DpD47c2yt7RuLZ5BfHQPkkkTUG7ogW",
  "key44": "511MVi5L4FEbALRf9EEodiCpHwZe532oYP5izGyPFyupXqeDRHrMpr2mxz8jBweAEES7ZKJEcVNHBpsoVZwxnMzA",
  "key45": "2dSaycaunvPXRm4NE7UPdFEu3Hwj9Vee5Vhgn9pjWHRZYK7JZKvk5z3MjaZfxTcH5MvGLCvipfqV18YKefYFhNmE",
  "key46": "5Z4ZvuY7AXVAAJuxrav8kphRGTeHfPeg3ErN7oAfV9wNQyxQDE8q3tVfwQjbvqHJQRqSLtSK6nYS55qypA9BBJZ7",
  "key47": "3QBHyKTjTSN7FiiX6cTeSoPwCCjerNEsESWYUKcfDBQzCa3DpetiqVSnKQB8t48DJkaa8Ths3bYhhKRY3Q5eDjo6",
  "key48": "36JEz53d8SSgmgyTnfttTfCZ6gg4BqQCHneiqJNBhNEZAN8KbYWnFpKq8p199VZsDctmCEqCR8AYbrX26BYdBd6H"
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
