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
    "8xYAv3Jdy5b6KfPrCBqnbWQ3innf2pQLKkbn1Z4iBrLKwgqowrxBRKDS7nm4rxhD4Mqz6MXYugtvxS3T2nq3To9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9X27Jqf1vkAK2JtTQAttQVb4CeHWnRNHYk7UgQXyeYZnUJZUW5cGS3GS6vKXUFdpV9dDYox2ZACj9NDBYoC5Caz",
  "key1": "2iqTXyYptYrxezXngq7fdYbH3aT28WSyYgzLwZx61PVTQr5ks1ewTFWUkEaxHwNQP1cnr34LWbPCnQcPvgWBb96X",
  "key2": "2JvM1L7KiXXKViJwRyGN5e1r7JaNe8jQj3A8Wanvax2qCMYfX5uVybqGsLGPyRBpSXMYn1ggxNdPPMiVCudDYJCY",
  "key3": "3TuSKKVxyj7dAGevioyCYvEXqokhy7YBfgbsjCZfYSZp6H9tr354WagHZtWSn5GuCYVgKcF8Jz7URTPt3j8RH8Se",
  "key4": "NaUVG1CgU4xzbZACag6iD2UxPxGrLZzwmSDzVP4JkdistKWn46h1AH6chXZUTXHLiW33hv1j3CmVMZQv6Ktooas",
  "key5": "63nYQcJWdZc1ShLdisbaLS44GcRVSd1xDcvT6yeUBFQFi7MawWRsdLfEdupFe1KC5xbjdwbGuVH1FPmVGdikf9i2",
  "key6": "5JjjEKh2wmFKw5RB4okJp7A35LLv62GcWRDGr3JUgxJaENLYsLyZMbCKoRUUFJy3myQt7v27QCH9B98Hv2Sv5jsW",
  "key7": "4UC9xG7dsTtAPUA4os3GAxbWNbopq7hK1SECwFbRvV82XYEN8fXp7CAvWfBkPKPTf1FGa2cRWdBZbw5vep11yYuG",
  "key8": "2Jz5vyVFYUj8nmzTi5J48K36ww1bjAG3VxGmbJm47MTp1KCpHwYL2WiXv3gYq3nhW88bHA7nTGSipT4JNSajbCNQ",
  "key9": "4AdaupaMvd8YiEojj6togKVrqBgoUoa8w7A9VaX2UMpTvJSKRZPF4BRsnTyqw2iq5DJzJ6jY4kZVSBVkamkCeuXt",
  "key10": "3UQz3RnaM1S6c7MpKyBnW5x5297A88dYJ4aVLH1Mf8bKNcqqJ5ENVfMVPqGYBF5PxEhMXEdTa5rK8Pizpqcq8xxZ",
  "key11": "2NBB7zVuyEVU4KZn4TUQZ2kQT7cu3vvqiFsJT9vTUXamgbaBUM1Vw3tJG4nzEomZjYDYEbXJDyQEdshwdveGGP95",
  "key12": "2mP4skWXbc1oRcmkEGojp4ASaFwdWrN5yKgoxLHBXF5ndAzPPNVV6BV9AsZ321Sduffonu7gSGyN9hkNNwJKsKmn",
  "key13": "4Yn4NodW38CRamMUkYEmD5C5CdJkgkzDKjdFXRcSfWUeTS3eWz6pppMC75CEkfSdjBbYCEbqrGVqVib3tDVWUo7w",
  "key14": "5f8oYytfvNmwarFwoxe59Ljud9JbUkUCxSAf1MkAabGNF19SBDtaD35nHrwuhGaU5Z3rk3GyamDRUjbsvFQcbe83",
  "key15": "5JLdkrQ86PQE9mxFzDq96oNAiggPb1Ssv1ckimVGEARckvdrFegzkGCLTDTJEBUMyGtaJ82jkbxwg4tzdwUyTdZQ",
  "key16": "4ByuLADWzsBWEeRHajJ8NibxCQHnmevvda2aEqYA7mAw4jTAW4Mjkp9B6HAg2eZEG8vh95qAKx6CemGbhWrie83k",
  "key17": "38Ku6ymu7PxR8tMhgbqHi4kYLieXS4WJ4y39DK1gw5sD9ZWdumWLUawtndGsaSnBxSxDDyedT87Q1mwryQjUSyoY",
  "key18": "2nukSmgNxgyJbpQUvdKtwaDqGnVo1Bys7Q1ACfhGWeJs7MqtVThwfTY9rQt1RYsMDgJBvRAKxJLEwvpim4LDkKwm",
  "key19": "3wQDj1pzwbT3mbsQtbbaNJxWbrW3V1oT1whuYvPVoTf3e6yQCGMDeGwBL4xseA5tvYZMFRVjAHveXCxpKqBgymY7",
  "key20": "3KabwcatjBSYnDQ8cUS448d1vHiueFATn9e7uVr9j7rSyTMhgvRY2FjKS9oMiXxzXFv8dM6EHVFc8KPeSta5xK5Z",
  "key21": "3NvF9zkTWWDrPoYrrNJN3Wqakmw8VyyHS3iUCiU8rsCiS2WrLRj9GD7LHm5NPkHUDfuA1vYudUgcad8JRJjaefaN",
  "key22": "54zXiB2XoqiJbvV9DAc2ctcPiz8bWn47cUnKWxvV3zZwWejE1ggQERMLXE2Nhhk45J8qa5fgqRz6HrU4t2NbtEMF",
  "key23": "W5W63TG4JkARrKULZDPXbWgtVhRFkvtHSfkoquQ8Suyyv3QWhyeuTckKkBTHsWKM4hkqnuRXG2CNLPhRngWXBYk",
  "key24": "7DRFPvz1A1dUTiieLJxpPiridL8sfDQDuLQckByyjtYoMfbyCmBKx3jHQSAWPFHgdPWs42PiStG4mJjWCGyDGD7",
  "key25": "2oi8YVJbCPx88ZnEYGwtEGGEsnVixgTr8z5V7H1TFcicEwNCVT5F5rBWyCc4APf5Kuqtnkim5P2QygwpTApU5FeY"
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
