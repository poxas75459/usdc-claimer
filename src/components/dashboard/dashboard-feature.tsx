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
    "2P4Upu5drUkUtw35eR25tEyaWeFDELWdffqF5Y8RV9zVCN6csZb5KBR6S9w9JWQ6vqwPZSGK2am6Us2duqdFtG7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B7kUXkAKPPJ1ph6zTyuhfKWU3RwNWKGBTrza167yGgpvF3CHSCjx9yJVpXc8V4kuWjdTNtQLPqdpd7PKLFhbkud",
  "key1": "5HLwzNa6sEtTjC7QcuZE2DuUzZcLvLrbMN28SfFa2fc7wkfvgVJAHZUbJktugmYDSx2ZB1gAbzh75yqG9fDHuBh2",
  "key2": "4EGcpmgc2eb5BSTA7p6tJ3DQQaSMHUERtsgKLAQWtriFTaHXL2GtRvvRC3extx3aDgMMWyZMu5wnRRjp2SCsyCCK",
  "key3": "4NooAzwo7Vqzo27gDHh9gX5W9iPbhEy7gihMHnwvr1BmTfYE2DNeSxWUPCsvDbeiu7h7ru9fxbgUib7EcrueyKYp",
  "key4": "YpJJox8BDEtKirwS2U8GDw7zmUywXgpnbd7Z4PsN867jE9711Wctckw1XZytVsZsjj6bBzN1a9kXv4dq1T3yFFr",
  "key5": "3LfU2KkgK3Qw42MBqiF1E5DTYVCmD9yREwrg9eeiBR2xGoZ3fpm8DMMRMtz65iJ84egPnXvRy12scWpjmj99xncy",
  "key6": "5D1ixyhWYEUjH41LYegd46z34UMzkVfnyULuGSAkv1u3cgQso7aWykyVBCDzMhEX4ECbtB2i87sjMypEdsTDqute",
  "key7": "66XE5SCujDsbmpYsADmt5ogWs4R2S9nwEaRt91BjaPhVgT6YG5kjCCuJvryQ6i35HXLSgLgy316hYHTiwnE4D8J6",
  "key8": "EASz9T4xBXFHxHvdBmUwmfYN4rwzcDukqRhW4Zv17rj1hY67GaiWGqonu8LMnM1kSjztWT7fLLUWrJK5L722vmo",
  "key9": "9RRgBdC3HZwudb7mTmd785n7b252ukBKPfcHSavgkLRCMBT1pUCEBMaVtvWSna6shpdFyx6pYZGDy8772QN38V5",
  "key10": "61zXvmqfDHeRSVzjB2NFmPpEWWc6QMEKAAf6boEWSCnuw3Re936SiGowahNk5T91QyEKXnMFgFytF34VEhU9TL6s",
  "key11": "5DKEoPiVR6yx3qhPXeKNm5i1qS77XrWfsLx4kgBZav6tSUzXhjRPoXiwYVTocowkRcK1ZUed2W1hA9bEdUJtdJiH",
  "key12": "5jygxokLepS1UaT6EpopWsPcp1P6PTKkkjeES1ZzYkHgBGxqtRJkbW15uVpkXNkLcqnm7YQXoxGop9QtVdLtZSuC",
  "key13": "NGddmLXgyxTHg6WWQsPgqBfbGpCxX2AAicTKG1qaLKCz3JFRTqFTwAkLHT3KarikMUVB7T632HzD2w3X2vQsuNN",
  "key14": "2o8MaqtVURgKceEqBYZhGzHdzoYEWk91N2qEJ2SQRhdsmswVE2doT7PwsF1jSgCirSSS9tK62ceKT12ja94fkrTz",
  "key15": "5yx3HP6DXWUKe1HoDp8QfPBwg3y3eDkPNudrD2SQZwtkyPHj9uGtdEXUKkUUVE7hiaAUkWhsAujEZDg6yyhDjybb",
  "key16": "4aNxtYA2CPy8KCstV698v9H5sbspUcg9bD4EiEvphZwpoGj5n8xqGyxaPtk2mUBEGS3ioFFZARLV7HtHUZcDmP3e",
  "key17": "4xfrJ5jm2kaRitXwQD67SchWEL5tSEZiXPMo4BEVWydCWifw1NM3be6Ht2zvKmZzxfmRnrStzJjZQ1wbZtakzB64",
  "key18": "XksiuB1yCiUmb2trhi5T4qr7VnCXEoZJeo3DpkYFeiYnvPN1BLk5kfrJxgVFuX2DedSvruoX5ZJeQpobuDRgKBP",
  "key19": "4MMLi9F7rqgVmh4V5DCUCaxjVwYUwHLmweKvkJr3cpsZJZfmwuU4jzQ281cSAdzbHStsfPPR6HhhAWRiThKcmtLr",
  "key20": "4atEDsaKPYEJqx34XLgGcz1gerkvfwNmyj7j4KPVntULxr4KNyvefwpfZLaiZ3aWpcasSCgBL3HX5Nb33B6coxKL",
  "key21": "4Xb2Wz9BAor3geFtjtJNbCs5G4MK5xjJk1UXgWRq6aJ5rFh7ncoyCsb9QsG2V779rCm2zkjFY6gvghDehpxbZt5i",
  "key22": "2pFurpFhjYkPYu6JYmiQhh6n43Sq92mxps4obs4ECy29sEcWVRGRN1euEztcDj4vj3goQZQReaJYf4B77owBpX8v",
  "key23": "3M5PAYtohCikkk1qwHPpWddGt698w6KkrDsoELEexbWfthgx1WpyXVuHcJCu8VkYakJkNomMF1GqXoFiAVKV8vNY",
  "key24": "63qwspkQNhMayKthvrZQxgRyyogHQLyDsi1rhT6Dppe9FzuyAi8wY4xAfZdtDCBcWnG3wc8K21qHrH9dLFtoomCm",
  "key25": "28S4EnyR9FW4YpuPYtkPTLUXozfSZYqoyPU7gcZFLWXsaJV51w3zcLTQk763dJSjpart1rBhKQqF7QGqmqj5d2MV",
  "key26": "566PZVWgU8BqQ7LSXvzQcb1wf6PXQZzVGCh6e4jrmWpPugVMkUP9n5hjsFSgDddS6NSnYSSbhXFaiNDunuhC6Lns",
  "key27": "2SstBuYoN3XY7w4B7q8aGMeusTr3Kt672ZeTTjxEgiZzUASHTGJTYHYXtSRov6EPQL74duSaw6d2NAYREHFNEvdh",
  "key28": "4eC7M4dLN4FCF5EJmzAnT9Rvkw6Hv3uXQAZVNvShYGafYTPgZATYji6R5uteAASfbrBc8omijez9WrbYzkwVGtSw",
  "key29": "4JSdaedteiRq6j21rZi6GSwdCBEXJ73kbfqJLWLnodqt6RxyAdcZjKUn5usJNQSB4XUjUhYWbREMSZen5gHLjrxL",
  "key30": "3kPBwrgosYzAdTPKaePsZ8kgHkUsDv2ZendBdg9hEqAuEFSNenWuVjNwyCJTqui3whrmwa4bBLkJCDMAjHEQ25fX",
  "key31": "4rSzLzS1ivHkTSaAfF92gPbfWTSg7RYkZDQMySTkmitEp2u3XQcLxUNxp14gGZpMGMvf7Ecyfa5ren6NxkfUKLfc",
  "key32": "3uywhbYBRfAFCYqe2rkKkqQT4ZLmKydVvw5VKY9uyBiccEuzuyDq9jpZvMvS2RerzrNa1yqPcrdY1MLToWbvZesC",
  "key33": "4iyuMac1EzesZLdkyhzt3Gq2AFbmbmjueXWnmMztQiXD5JpMpHqrosXGpqbrFgo4x4TXJx8jRCmUrUvoiNveqVT9",
  "key34": "5XgW1XrcQc8fzC5A9Qw2LnippMxRqiwxQpC45fB1sxFkaZtV2hw79aJEzti1Pm7Ri4KQdBm39BndjRkC7rCeuAhP",
  "key35": "2358JBbxCWin6jHWPpAzJjZMQcUpCjiVtEqd7ZHWrX4AhBD29kYQCTGae6UbXtJ8WrerJ4kThJ16RXx29ZRAUbCb",
  "key36": "2GACKnPgCC3dLf1YjEY2mMM1qVanoncpPRdjy9PD8ngFZJTNhvSwcPKKyKVDKGTyTdSuKzp7dHqA2xTcd8iBX26q",
  "key37": "pBK9Ge88zdqFDktwivC8Yfv9g26LCAfF3q3uWAcxJEFhuFaaC8THeizH7MBq6Spu8WvGjAHiBBRPLbvdnC4oSes"
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
