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
    "52pYc4LbGZAdrLv6NappL8j9XoBhqJ2vbTEscTj1qEn3BTDLwjnBJMx3zPR42YBhWykZkaRdCEz8ijHGFRPmgKZT"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "F5n4m9uGUAjbjvfqM3GuYAyWFtyAKiNCq19UX8swbQYntoNvK1JFq2aakhFeZFyC7v1x89TUrDgbBYRMQ7PZTWY",
  "decoyKey1": "5weAaW5cPB3QAJ9w5S2ezDuFVoP3vFAnx8DfkLqmeNoTtBF4KGTw34qnfF3uxK6vBL2ZWb1A83fku1sqqaVWVW7z",
  "decoyKey2": "497oYCT6ZeEGqks2mSgTcujFNwQUsNTsYdPovJi7FibjcDUM3L2T5mW7ipTb9A7e6dUcxWbA4dJAgJyEYWbgW4Fe",
  "decoyKey3": "2Gq1PWKeZg4rHeZRq6YiAshUAFaKEioSRtFtyL8H3LUNCN9coG2QyWXmoCGwpwWYNUdZtmUVTYfyKuMCNhRgmYaw",
  "decoyKey4": "4WyXViJ6GDn5fytTW3dx1MA46VNK9UrjxPUhLFfH4NjULxNt34UwuTaKuCDJmxjeBSxFpXWaBcEdK4qYMSQKv1i1",
  "decoyKey5": "4gJoMn6FcCA2tM2YzHgY5bTr5xEtRJnabRRDbh7PU7qCCBeuDLthiNqGywF8YjQ4Tjo8JGmq3Y4Vomd5cHMRt7dE",
  "decoyKey6": "5j5oGEiyNSkahaLuosn49czfXpFLSAVCdQrfyjhxZrknSWHSVPzzYqVc9CQcic4VbKE1mX5AVNu2nvVAB96a1uJz",
  "decoyKey7": "4gaedGcLPGaETtK4xSMsE5RBZ3CJaqvYzGebaNFVC47mU14gxfAnQ3yLHLrXpJ85PXd9t9KkwWchqjVQeGJx4fCU",
  "decoyKey8": "4qLbCsruAFEWaSVMLn2crfCpQaPLjNeoRWJzsd6yiU8pxzNaCkdXH6vbw3reJ2J6Nk5qvTBKtJPxvvZ4yKyvebmG",
  "decoyKey9": "54A4oxeeizXbZFsDfynM1y1i1c3saRBK2YbEM1puVQBeZgvQEpTvEGvDCgpwpnQyqZVm9DrNEbLwP7SfhxLCiH2o",
  "decoyKey10": "4273iYBoFW1dGVGDpeNSYKM3AdDkQkTTP9N3aLUKtZ1CpG55zhaWGFqkCLjT4HthJ8xfA2PApoziJWan925WNwAd",
  "decoyKey11": "5JqQzZDW9GkSQ62oZkAcU625BGnBXZiAwqxf36v6LmZ59Vz2NNJHbd8HotMkJfo3EjyaFMg9Zz8V7PHTxALcgLXL",
  "decoyKey12": "5Srofara4ppjfcambH4qA73dYJHQnb5bvVQQmew2q4PJsF9VHRDQa9bpmKNMwayvTivTuSGxZxVzgF69tCQcDNuw",
  "decoyKey13": "3Xx8dWxhe9WsbAfyPr3Ypmw6UvWpeu5okLw9grezPFynHtn76LXsYhw4fAfrkwEjwByjvnb5EgTTsrbkGyCKCxjk",
  "decoyKey14": "4E3VroZfqvGB52s86Py8bAWHVdh8WKCprs2e9Rukfha88MsWLBixEC5YzUXBbupsRfbvwRR4VSaYUuJjTbZ1mBDM",
  "decoyKey15": "5CqPhwZU22zJ3FiJWWBFdDhPuadXL7f5tWUwvtWYVgMDT1Smvfd5kbZBYyeuECEDmwPemvAxToyjLvDjg3yCNNLA",
  "decoyKey16": "4DiXMejmR28tWeFeSMY895ofEFrG1eD28WQVUAJyKNdLnPYuLaYhFygbZ6qE3LndSEzg6mbznmUUKRJXCEeEKDpn",
  "decoyKey17": "4M7BKDiEaaGFaRXKWXTrPcrVYPrzc6TEeM8DK2bEnMTRwH9FJiMfFWkBaye35ce9UBHNRDqcv1cKDpSNNcyaRCJ8",
  "decoyKey18": "3prNUqEnYRY4pDbsHByKMFodJcLx9qTsfdcgRaBaQJR4BeH1aRJJFN2ButvwpD8B9wPwoZQStjCKoGmLKVgtuvqo",
  "decoyKey19": "5LgdAK8Uce4SwrX8bpASB3UpqiiLKEsGpKXt6xmVDHHWizd7ndMo8juUvXtr56NyY4q5DwxE8Xn1C27CHdZ3v9VZ",
  "decoyKey20": "5pKm6TFb9ZGRckwerqWDtAhytKU9hUkYJpYNVMfnvrnfucz3jmzLRDpXaBprxSfykjWtcDNBw93LCVDixG8Q9wiD",
  "decoyKey21": "4XnUPEQkcNuSfCs3SXJTiuU8uxspsovQSRZdTvXozmyhBg54LE4qTNYHhW13yep8zuvCMEEJUZBdmkL4Jj6AY4A3",
  "decoyKey22": "3kmjQhaJ8cuPBFYYqzcdLqh6jHYLXseAHuyZevtZbWB5Wq22mwKiVecFkrCkNxGZEevTJQWoUDmGwTT4p336ukVg",
  "decoyKey23": "4fmk84yq7vMjctdXTngVfu8cFncCQDMrwzAMhDYjBBG9uzGbMhHvCv4P6JRocmyFArkHwXjVn1fG2semWU7itsua",
  "decoyKey24": "3hEGnkBNCGHRCkjbsGZahfTeauDMc1Cvt7SQv3uWgxGmos7aRR2qYSErtLJjGoBd6kEX1FGGRU1LxifUcW18Lt4a",
  "decoyKey25": "4ZxnS5ttkt7vz9Yor6UjQAdyh2jt3PQy8EkCETQpoCcbcXCfgaXcPwDeENCoSxnQLqtWiN5ZaYB6sxLT2zgvv3YJ",
  "decoyKey26": "VzLsurmZz22XQRQUSVuADPpQVFseW6FyNAvWu3ZjYaLeK5GQJf1iCVuDXwUDFboJZnEc34GGXAY57SQcDPbCeKz",
  "decoyKey27": "5S5vCtjQ6ihmguZQZDEKLNAsXWJCTQRhpGx9aspDzzX84e7KtjvUD4K2QpVWBXJUsDtNzxsbSEV9wv4wxinjPMQQ",
  "decoyKey28": "5w2eLzKrqDTHFohqvBPgEpBac5q2MuStgLEgdJuT12kTTbjx3Q51LnPz59Mr7EWLc6vRjoS6EqEzpdtqd2x4duAU",
  "decoyKey29": "4Pd2HXUodCkJajrFeMkSseVVUvQm7V32HuVUbpfifuviPBVsruwqASHPtrVjRViTkXfjSSY83rHEmnwcM2fcMEHL"
};
// DECOY_KEYS_END
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