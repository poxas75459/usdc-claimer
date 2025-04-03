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
    "3yQNcfM9yQ4tUGHdRda9GWxq66Atkbv8fLBCbXYFHVf1Xbtvaa7vsCDyBoeuxeWA6kCr1tmzsXXw13daB1V6VRCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGnb9a9Gq42AknNbAznV6Pph7KA73sqKNjhKpAcamccYj7R4SE8zfUEQeeSMdEgiyhAjADMnr2YSUsuwFukPwPM",
  "key1": "XygQpLz2VzGXujeEXUf2SdFEh9miqQrFN1cizrqKYzta1jWa47iFPA3HUaYMmZbdZpFH8NmYX3Wk3d5eAqDsNqA",
  "key2": "3w9tisPYiHAiMLABLtbEz6EC6sK5gmVf8YQR6nbiJn41iCYvLBG1XZXpbveRVjvtQ3nrFuQdYpZRHa3tXntHv8hK",
  "key3": "4PknT13rWHZoKCKkhibqLaLLFb2a1Tr2tQMJUFwFxQ8Rfa5Tg6dESpDqR2YmikgaNCKaqG9hG44e5KUEW5YVYYXR",
  "key4": "4LkmVVQsNp2MQgUWy9UeEtNQmHB1EZmGHSr386fV1niTeynPb125LkhHrJaQpmUrugHSz2ghSakx4HDYScSPL2Ro",
  "key5": "4QdnBfrcHTAHSC4Z1Bd4enabTn3NcZRc9Bn5L91o1Ry2Si3eQqpweUnnUao3qRXqoBd2AZqZ2DxmLTfN7fvcRpYp",
  "key6": "5C6bAxhRKGeLhdj7mXm5BjarUkuAYxq11dDG6FCEQQTxsJfGJjTkC8hy4ZPKiJf4Z1yX2DcWro2fhnStAyBQMsJb",
  "key7": "2ri9FTiSHGToSmX2hvWwQQsR11Wdprnn7mJTAWx6TmVMq1rop71WdudYowRES6utcy913TEZRWdXiUcbXv6pZP9r",
  "key8": "2bieQJESPm7a9as9UYhVdvWkKe6mmNVkbxfku3EfZ1SXDW9UXSi9RuQf52eGEyHxQbHTs1W6bkGrH6HUBcqCEJbc",
  "key9": "4iAD7ZpomYxQcHMyg47BMQsmRcJdyzcwZikiENo6He7bpBduFxMpLHWhLFhACexRbekHeWEYykTEKhLz214Gup2C",
  "key10": "3qpyQ8Wu6E7ChG7fnuohfu3ahCrFS1KptqEYFf8iRDvPVAx9B3UkqhMWhQzjzmDppPjSPH1QFTCUAHStCjXRyBVQ",
  "key11": "5YVJKpbYLSWLANzr71Knnj3wetUUKTsS6dPTUG9kzxQR2cNax91WEuy8YG4tNq1n9dqBhn71iFjHNwLEcGCTsLGM",
  "key12": "2igmyCBw4NpQiaQkeUGKBRSEZdR8aWpzLLck7YuzTpT4rmxpmXaXVYewfNkBnfuU8qHbiAu531Zqm464H37SZktD",
  "key13": "3XH3yJZH1n1DgLkzgsPN7mzBA9rbFGMSEpeaSeL2nPcDixKgj98Hx5tsLJ6bHGykHhRaF1W4uLoFLJDxK3xADQfN",
  "key14": "45xz7rbvFPrehnWuheKHmbnK8bgHJDHYf61QEq8sf3jpHM91g6KioT45DE1ULbfjGcUp5z9nHrS8U3uz5vNKq8tw",
  "key15": "ewaPjsfbh37n2jjZvMLYJw9FgUQ1pPUnHWYikYbBpBftf9rYxafc6FzpUM1GXa2rv5tBJQoaxquUp4UbHvSECFM",
  "key16": "2RZ3NH2RaVVYjjw2gwpFxG6Cp9tmxZJEFa4BgjZJtkPHY2ijscgsZJiAcAWdP8dkLrzxBDJAvreLG9E4dRWBSosg",
  "key17": "46VGVQBk3X7PWnDNSWSDQfdqfKmxV27pNq9Gv1oF2GhHEQAMZSXpgBSHGkAJVMwfZHSy9SNZgiuC8WQtp5RCCh8F",
  "key18": "dUbpBp3FuejASYboHWoZHk42QBmgZ4r56bnwXuEitYX76LWkU8eEh9qmT4qY6EsHxtEDwsFdhb9sieA56UFHmbc",
  "key19": "5NdNRaHwN6NtiU3sM2P3fNrhsmFzF2oLq88usjxiT5iAdZ8Hwf8Me57X4rqFK5bBobsheUqjzuiJxszxK5edfZpz",
  "key20": "Wb5AJkX2zuyVui9vvzmmrpoy5ry8ipDq5D5MNA4U5emqWbZaRzwKtr9Niv15kEAmJAfFQwsJdJcDGQyga7X5Aqh",
  "key21": "57QE1Z3NKetSpeifqB3FjMdZnRHuRYY727sPQWs2Z1tgCiETtb24uGn87G4kadSm9ipQNVwWDouTHsVCBoDTM47S",
  "key22": "8jDYvZUmwboBwamkDc29V9KL755Soa7xGG5GGU6ikASBWqBUzTspnA2CPX4cgCQ9hcLxtdt2MVZiQwnZgQroG2Z",
  "key23": "q2BdReYvWW2T552g9gTvtsmbhN3YpRgrwPTSnxY5Zev54xbHYhCSRvGyeijfMH1P4UbEXg5ZGbN4fJgJkXAuaTT",
  "key24": "4Mj5ASCC3wM799GbKYTVeJ4VaUsG9aLeejNnYN9muprLNMymPRmQhfNwJCvNQY9sTatP7mzky7fiveEw1mnnxEp6",
  "key25": "2t28mgLXY2v1pBg2sNJd51ewwAgZqYAJzfy6KPFnAagtupqJUiZ844CC1ZdtVX9Fn8SLppsvfHJJqNc8nTqt7Gu9",
  "key26": "3D715BpDBPXHEPafYEhb6jQXrtbL8NY1tedbPQAk2idQVSoAso6aoPEwBfpF3GEtCpTSf3nzcuoEko4KYpzZQDaf",
  "key27": "66XUtbTz171HQkPtbdd3Drn1zrD9DDS356DRxAgBa4K6jbZwGT8PbeDV3Y1xHVnM1kG4mvFW4KCCsaPEejKRip3U",
  "key28": "CDPo15YGndKh7tQih8MqzJrsqWoZ7NsPcqqqJHKfg5zL7tYdE73LwEwaxkyXKKDZGRG7kPXpXRJQ4UgtkLHjeto",
  "key29": "2hFc5KKcQHP7oPXgDgbQxhpBnSMxSUQbXWBWPaKjBi2TjZgGAeG93gAnV4WaqAXFw1pLiDv4rK5f4FUwg1deDctp"
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
