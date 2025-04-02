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
    "4TQbLu3vwFZkZ1SoKugUYytSEvxUhAAFEFzURDfAdLuVw6TS5cYLM3it8sJK5eMTPsCos8zQ9nLbqRmtRpS4aasC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LxKQHAqYFmKNU8SjMd64KuUMfGGEk3uJSAuDbAJqsJRDHdbkHqbaEPsgbNJz3NAfFJ1hiJQf72xdYyDgdetcr9C",
  "key1": "4CTvHCgMXFpxoRgYUipcCTwuki4aAMDR2ZLCMrmVRAaNmXD8mnCHw7JMSNPwzT7YQPppPjqPaz81SvnoUs3JS65S",
  "key2": "2XizC3LbeejJ8jEYizdMNanTXZ1RRdTvu91hC9jhTP1SBwUGTH8CuAUhEz4XdMrapuZ7hKJam48ALQ3Wd5RJFouY",
  "key3": "3oPZBFJxMFhA6kL6HU4hRdtPoTwds7zDq2ZVMCDihvNoJ7nGeyinWx9tHyvYpZ6yM9n9XgKjFAwYBcVd65rz7WNY",
  "key4": "5QkuGQUPj8GHySjJWAv2y73TRQQxTnPMjmJ6xdMHLZj7NrihfqX4Nrjg2DdAptdaJtzZkAHiZLnAsHeFWa7kMp5o",
  "key5": "5yJgeT8T9ovi2cVvDg4utGaoZc3Ai1j8hnzXb3weZRFn73KCmUeZLumrFrFGiMUBAKZgk2m5mzBFASmyctzsR4Ei",
  "key6": "4MpeeTXRheFKrfq6y9rMkR3jgoBJ7H5F7DC64bkW1pXQiYWMb6KT9FpGdfg6VSG854VXsqKyEt9N96Dok7VB5wpH",
  "key7": "3pBCa7yeUQNzU8xeYezrK1jupMQKa3s2i8JGGCnBeYSjjJjN9iAQUt8sS6maxMvUCdgTdUoSpqWCWXRh1zApRbna",
  "key8": "52fyK1wwK4pv62d26pUas93JuQU2pvCc7sXSojV8oYqAcKKXgpSpxFu5YvU7aUPUCZ9PpAKCqjnJhBJsEgK2tT3y",
  "key9": "5Gv3qrnHBH1aXrvUxQE4mR2n6CdRNd5ep1P5YmhRx5YHZp9Xiy5sVjFsFbjKB3CxFQHZToi4zcV1tWHRZj5qk6NJ",
  "key10": "5TUPqaoCmneWfTVXqWG8xSt86FF5bAYsgSyYSwV5972rJZyViAaSdypbzVkScV72kamzbA56QiKHt8PySUz9U5zY",
  "key11": "adEi5tdQLuc8uBJ5sFwnUemqJGhDwS9i4ifswVVNfC2hMKPSeqGGSnGDnYRjBgbHBFFZX1x2uGbDBMcWGifj4Si",
  "key12": "4YWWZSsVZ5vQQ6Qvza7QHfAjzuzmE6YgvdSg1cANpPcMTHHxo1N8nQPViUh2ifaTwYk87GcRs9NEvVu5jdtNLdBs",
  "key13": "k7SdYZmoLY9dLG7VpJnwzJZBEr923Y6XRb7W41B1JPJu8hzviBFji1N1Bx3Rg4hiTsTDsjyuHyW83DPY6xfuP5Z",
  "key14": "2EfWqLSDeuFQM6wH1AoVLFJxd5N4rGNU9PrXpM9GQk1F9ZzjZQarjFFgYqFGJopHLEYF33732aJvhisXo7aLZzsV",
  "key15": "4op4J1YgJqPQR5T376FfajyzWnPNZXZWEfzTqf6tkWEKixEgNkfyvaw5NSs4MX9K6QANcGNTuo1gn8dpv4okXSgH",
  "key16": "2t85hdfc7roefXyEvmBVtMUtg1UjGsgJkvk3jCJDkfTVzafasE6rPr76VsaC4t5mZXpBnQdmsU9VU76QBw296FFK",
  "key17": "5VkmRqKNshvw32j9sRfyqZQTQvgTgwrj4LGVu5TuFfZRyPtcMWzJuVaefxvSLnbRAtjiUYh54hXbsMNgXRJAz8Ca",
  "key18": "5myubqSq8tX5cWcZcQHe9ffAK3etRsLGeUQDDRMR6N8MnXBQT8VSYwPWKze6gxf5w6DLgPQCe4NZpRqjVk2LUAka",
  "key19": "58hbN4uU9Fw2av1X8rxYsUqoYFSSSWBcpywSJGwCvA8x6q8H7WbU4qjp9emK7Bq3hgjvnum9KbDREcHTC2TVoF5a",
  "key20": "5CLqejtKiLAiPYFcyNRW47JqTRXpdpghEfE9WqYobUXAZyeUZSkMmRv4o4oSHvmsSU2Dx4XmcptU9GsnwS8v11uP",
  "key21": "2w6r4MDiEKTTWuSaoNc3VpvSN1ZHZEFj9aZas7eC7PkX71g5L3EcdDraSPBSHRwfLFrN9kCxjHa7kSbZTFpoFKYv",
  "key22": "4C8PPBZQzrLpbHBUBUTfBzADU2Ri4czMyPf8XTffYqF4jnjGQyLUdhn4xgq5HRhkEiqJxX7WTQZSQDD8pEEGFtGz",
  "key23": "24CMc7uR58LgJ65MVfkppke8au24X7T3PSA5kjCUQR7cZGJ4EZuyk5WLDLYULK2kqNTJ2oZLAgNpC1pBZfRdWjqr",
  "key24": "239VF9GMinox2REaDGNnoauGFGJ3tJkm5JkYVK7Sys3JV4FVgeWJT7FR8wo6SkWzbgdS4MefooTjdwGhhM6MpLS1",
  "key25": "2j7FK76VMDK6tvhsfXZRdh6xUiEPGV5D2dqzvKyNZdB87y3atA6ccYKk8x9wXiUtr6ogUneNaUXico1SYLWtg63P",
  "key26": "9ULbUJQnPsRsUqgR2xRdT8Dh1hcib34pTr44MaLhJR5NvM1XLQPS3urSTncsL6bMymiyu7uJ4kejfazqBSZKZhM",
  "key27": "53xpbuDAAhyUs8LG2ywYyrVttsGpffLVKBE3pSYZjAvsMm6oEwG4z1sqwiaQpqiFTPuMraTvoK9aEwumQ79W9X7S",
  "key28": "5q5oZuPTiJFCVkeFC1eeBLvBAbZ64atmPUNnPVFBY1D1Z6RshHPBaWLmbUoBpXag5bXLSzpS31Dph2bYhLuE4jhW",
  "key29": "2zEnKucVNugMW1BF1eZMtb1g4Vf3W89CMbsUJgtiYLfQr7QKDLwsscmHd1ivYYG7hkAZgTXxxiGuYiySxTi2obUR",
  "key30": "2g9TYF97TDqzLhAQ1udkW2mRZZVvy6iF9cJXsCM1xrpHoxQF2uEUKwMJ7uoUZPLWG3oabBSheB4vmEyENmJZfijR",
  "key31": "46frQXkcfXAkasTG8d6bqJQUA5FoydkXTgZhebsWs2LfUgbzuC2hvxMCeewBvjSy7jzt7zmEdod5EfEp5aDa5ysU",
  "key32": "2e3EAk5d2cYgmQ2oRpK3ja8rPTxcjcvKAe7rL31Ef9famH4YHSgKjehdhkUdLtUhc6DUKAXytUXxSjEqHuwyybcx",
  "key33": "5M8DGd2X8LvdVXNfjyWCRSvZBqtZmgjmUHCpJJ5WuY4PHK6oAc3AiEToBTBzLKoeCnX9QjeeZaeRWDbQZD1cx8cD",
  "key34": "4ka1U7b2j5QJJCF6s1KrzjvnrTBWnrQxZg5sf5KbJSrm8gL94dWQKLmsid6Q8FiouvqLufcxmGvf2JTDnEpA8uFZ",
  "key35": "4S5A32H39CioPmBd24ucfwLFT5cLpUQ4MujKKUva3rPFWh4LbEotFzGXR3y8dKCCvkRKzzZtxbnajmq7bV1ugsv9",
  "key36": "2qgZpZSG51jBWuwhcyjTVfKgiNJv5eGhUYn6gXXUnkSqgPYeTYpbxAEPRrGdoYAkUhDEiA15rcHNyvtM5KSemWrP",
  "key37": "4Lrra689JWUXgvTHf9dYiV7QdMpSzACyPcHmHVmr1Li9TRJVFWLj8bTaNwb4g8UgFoUMZA6uE8RMAnE5aeES6Z9x",
  "key38": "KXnSrKxDwdUrUjJhrbtvZscuHQod1MspF85E141GKgqcmws8nthhZbyYPNQBdzHHrxhZAAqABBrWZabpTQsPD3y",
  "key39": "5DxdET3KBBqTNNBg83XyXmUvsBP92kRQoNc7H8hdE8hi7Gh526A2rbKMwuoqas6FH37XY25ju2KDwejvJrTKaE9c",
  "key40": "2FYBdaui4wW6Fv2BBigeP6gXXcz3YAcKX39TDPudGbcsuMP5c99VAMf54BfAwDjn4RVT8PkTkhwViFJjwsH2hXk7",
  "key41": "3HiGsfk3gDjq5SQdsGtGubNL45n8hX5NrzdQbKdKVE779D1nrWtSjmHDCjZ2FHF4k3KGioco1rChqxpiu38keF5M",
  "key42": "3YJW7Ji2RSDsnJZWLCcmu3zg4xKeSWSHEiZfZabbiQkNqRgBeXG9GVeoiV8kvqDbU9KoSvnKFvfffXTDmqP4qaSt",
  "key43": "3fuAFdvvLmUSq27idrpwLYhVNHoMKJtu2q9W44brxtpZRECqtqj7JHTY6AouAqU81sZWe744CqRJj13sua5TVrcf",
  "key44": "3VEqxkxoti7SacBJNYmaCSXxCDLF4YL8SwmSetg1sEu5wWsZ8yaXrpjh8anaWMQWbCFk8LN3tpBezfWv7vQYve2x",
  "key45": "2bmzwpSAWC969wXyQXeezPegTr2Zvxd4XRtVuF3DD84htUap9cHP67PXqx9WeTG18Cja9aGcVyKYoVtSW35DEc7H",
  "key46": "3XjK5EoJF274BYgU9Pm7uqE3e5vVvwTAyurqVMdPm2gAjgC9TaZdGDSpjXPAFWTZeDqX4vroyA9mzj5ZMSwfqefu",
  "key47": "4mxpRNPEoczZH3sPHN17dedZVyQj7TJX3rYpj8YDMDqgXwA6sh7dGmgF2BNhf3b1u8eKbkhXJezqNreMiRsW7WTZ",
  "key48": "27CDUft2qtBe4CNK4apn7Hg7VQdsLSKpiGx9bSWYMtahgRM6Gsr9yr9J2W7nfUGY3DB9kLduTcWZEeMJPGFZb5UN",
  "key49": "2MS2mfvqvtVmwyc2wgLJSCHFRwfBCyyQvakqNB865mRXD7otJHX7JJZkns6cTZ8PHaaNrDaoAgVz3h3xJgLNEnFg"
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
