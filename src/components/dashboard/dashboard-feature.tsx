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
    "4UbCpbWBuWHrXNoabow3DjNX9Czi9vQB8KRs3fK7T1pbdjV7WMbYszcmkEho4uvzTKGKfTfNMwTWSfdMUo7XUyvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hGjAFtHp62YdoLrJLewkXQND4aPLtgrKg1dz9c5wch3fH3LzYzr6LLrb95CnwLQcipkrYy9fR6JqJdwDMMVE6gv",
  "key1": "nTbzCHaXuarUQ97KcWaHsCvnpkf4UtF45xLwnQMdEqgnH22Hktq5B76tG7rAVibPkGMnxpvGsrRvBQ1JSAb46aq",
  "key2": "3qLCEr6GUToWVh4HkqKaPWrEJCCCJVKvAbVxhbDiovCgAK2tURrdLxppZQzAkJA71ELZn6cSYRgATAXHnBMiHzjy",
  "key3": "2ZKt8z6FjR9kaTtWTUpqzdUQtaomMTaBEvUCGdEvPKdQGPm874T9EzGjkFCnacXBouHauGH2bHwFfd3Foif5XtKJ",
  "key4": "MdrYg2eFtDhRBmRRqNFqMC2nSH36q5VW5pjVJMqc73PGNK7a9cDswEgSeyCcsZzsptaVKtAytfey11ZS8mPeowh",
  "key5": "3KFdws7eFz7Wv3EdnJ9F7KjNuVXiKm6DNYCdVfu6kgXCPccuQVtxdmbW1K9psWZ8mV3PSPPBFTc8UK4hfphW17L4",
  "key6": "53jzfcjisfUyYsxGbf6tJEWVPTDY7yX8CLnW1trhaZM4SZ3k5E6r9eF38eh62J7snaenfifgVqLb6Z466CZtuJvn",
  "key7": "4cekCuYuj1yeFjdrK5YhQPbJQCXHnCN1j8r4ikYL3UABMJAWVfvTeJM9THj6haaK7jiu6HFRN98R3fp4A5f8Go2f",
  "key8": "5k2Ey2AW4eh7AouJxBHQ3W51ZLxiREzpSfarYrFHmnd1K9Mz3NfSsrf7Pw7fPMEQCfrm282qpmFyBi5qLmrB7uxk",
  "key9": "UDhNDLiqZkFeCQWLdAtCbcEBo6J69puSxjNXYxTnPbNszdCkqQ5syb8UH2fFjUAt4ssm9FQ2QpvNGHhMNWEgQ3f",
  "key10": "3T38DHZ7SzejhZ1LXPcxTQev2iqunX5V14mQb7v2Hvw62tHGGdTF1g6QQtre75WR3NHh8rqTdGT4yZKcheT6zfvN",
  "key11": "CSdsFudLb4FnTEyZ2e17YXQ1S9GkCJJ7WzGfa9RjciQN5uGzHYwDRA6MY5ZL2tN2rwwWnefoeXDAAfwqagXGmRQ",
  "key12": "4gZqwbgPGhKJo3QbS4Gk7pmDDWun1bSeFzkkaJdgGf936BAEq3LNUsbUbBfDsgtqrG3kcsfqyHxDaCSKSqfxsi4H",
  "key13": "3rsewvRjfCZcaxJePop6dJrEpoSzDnHb523GsdCCvt6aZEN7mqFajCxLidNtU4QHwyU3oyANEV3YsVTFeD2xnG9B",
  "key14": "4aFRHRxhc8ibyi4pHCmzrLRsVhfWiRdQcipbE1RprxUPgWddcD4pGaGdZNX3twR2Mx8pv7H5Fw39ApR3boSSE2nq",
  "key15": "2UECeBTDVHQiJhwtBDVNsyTLvmGxELB3zbdCDvB8p8itRmfptQH6dyfwPDiac28S35tRsjSjhfkUgfht2XwQGP3f",
  "key16": "4xXHhc2qUmLKxkfUrvW5oXF8NbkjtACuiLaaaEDutP2LM9STjZTqP8aZWDT5fu9MK26DwUet3Rzmv3PfMaMnSvf2",
  "key17": "2N7FY7QJKaRVyPKBwfXEouvxqY2BsR4du64awNtZb4UnLnd1Z1nmsPULaXcERdqiHxxsmGBfEDC2wzvySMTG5oYh",
  "key18": "R4UbQi3ccthPpcR9zw444u84bbbxBEQyCZcbV2cjoVLRUznLj5TTusGgCd7sbYVGRhqMJzKLUZ4NWw4NvpxGPE7",
  "key19": "jKPhbk6FubLQ6jW3yQECCQqvPmu3SewR9YXSHLabPr7S3sZfyPuVSgnUnWiv29jMQEUGbaHs2xQJz8ynrtroWWP",
  "key20": "21ytSqdneJUj5jkPUyB6VxuEsRxykZpncHkBxmWAYfSCSPCDh3SvMp4JWVtJBsrwPov8DVNxJbnipxbhGzn7cRwy",
  "key21": "4gL5rKUf2sgX6jMDwbPqwdzdTwj6S2WJfwjE1DBKecYS5T7Te8ivRudEeoTjpZmyRSzc6zwyNQkKDLnhz7Wx4qfq",
  "key22": "4e7yk96kTGAFHMhwFWjXkQXASNdJqMeE6TNrsr8soNTucj76tigw9fZisBBvx3MX5dh9hhB9m1dvQ97GjrLhcd5j",
  "key23": "4cScQkj34SPnr3hBrAxZ32KTP92XX8mgPKkFTLEFRJ4pvKGxcT6FVQGLru59JEzrJ9hFfK96FCM8V26N5XnADcRm",
  "key24": "67qBLaPaYNiCQ5jCTgB58LbuT83JmDHAkoAzoMRat3yKQoLSaxLk1Ai22mArwwwQXyVHkLjzr4A7287w6etvPdU7",
  "key25": "3Z5PVsPvAZ87u1shVefrdjWFpu5U4nNtwKzoNK6BdSwPbyLFUwVPrpNujcSR8fRwpscPtq723WyUaMnnDAoEUtvo",
  "key26": "55gU5T77DqrzaSNZKrWNmD1AuUfUdn7nSQ88HrfUDHH1MRZGEHY46qadndCsJyoGP6TBjuipJ7ypSFn6UZXgHwWm",
  "key27": "2FibqPMmWjpb66fE4WnB2EDdwx9Q5imxc71PDTMfrPYjKRMEiwQriWteJP8rtcvikbDuTEsRLEjanZCPnwRioTSW",
  "key28": "xTUyiDmsS97v1AmFW9r36wUo5AhifobzBbpmVsg82TWuFyFp6RkDUhnHw8yT25BUKW7MuCALzfVUYEGPFwXcERF",
  "key29": "2nhe376HwduE1pBXhBNqxkiBDfvZ1X14EjiftdhsXYMFEpVx2cjkabaqtKFQT9XjtM3nsK7QaWCmDzX8LhNSWwMj",
  "key30": "5VUzTa4MU2Bni3kDncN7AmSZ7dYRyjKeEfnBpK8FPMsZFxn1TCJdrVK8Hav8KzGGuKaD7gLC4uuBn4poKDa6E1F1",
  "key31": "428fGpUPtG8RFJjZDtYknRcJDGPfHcuxyyQH1fpdLG2ZQ6hFx6BWDsCKBCkBQ4uMAhYHXHxW6GjvpKftFM3k89mJ",
  "key32": "4Xx81F7EoazwEKFYhznbEcnaG962pexYUNgD2Xv2qrGx459JnAr9V5EL8gcBKZ68hpRKUMeisxHhPVRB44zmNJt1",
  "key33": "26yjFvrDvjmzfk8aGS1NwrvK8SwdF2wiWM9TJAJY72A7fG8VE7wFm8PEKeyi67Mnbrm5DmqvmaAe4vgPfJKYuhUQ",
  "key34": "4KP81WMVeRjoe7uZHcSvUh4CictQbWfxFFXR7wPFmDYGESn6twGTbR1qMHCoWx6pLugFEsFmmTpU6msMmUAb8uyP",
  "key35": "4kwTLpfZty6PXw9Uipw1dPxGQyJ511x711x4aSAGsAxpj7txdUMNNbeDNgY3qVdjgM74gCAY4YgPKNmP4okraPTZ",
  "key36": "36LfGnd4AZF5zAJqwjKvp5wsMcZPVprTAdGViCJboGAAqi8yHANswXKCHiYYtcvC2pMpD2e9amkGH6kwGNc6wHUG",
  "key37": "3Qecfy2oKhukRVMJBmTjwKuFvpYT8UqJZZD8wm62Bm7tcMLALzYRMuCf24sBYxGSj9yQUH9k1LKWv2FRWMgR23ov",
  "key38": "2UtcBtye7ct8U853GxJ5Xp2rLP1GzJB9LeuDMm7TkKjSkXp9iMSeVVr3kccMWBq5bn98kka2pCdGbtHwgctDfzAY",
  "key39": "2hAyy71wRhHPzzZFYHg1CKFrDA6dvwvysvFKWVyuafUJ4je13Hy7DQ3CoFuJJSiau4cyWm9zdPn7G6JoSMtVitLq",
  "key40": "27ZKMi3A5JPPZUMN1zBsu4kziyGcuJ41cWkR7AGZCY8cS3DCxBcXaxjxfTygLQhPAr1jbFu9Qc8ntoF44hWJLW76",
  "key41": "K1GuKUwXj8HZaQBZbMQGtxoD2v61Mv1G2XrbfmyWMgWcBGtKfPTXEjMeRZueqqt1CBjc9KdEsZrLjvsK1BNsVgX"
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
