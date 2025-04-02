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
    "5btS3uwswKto6ifNXVj55CTWVjimaRBfCfH925NSHhZeuHWwhxkkSG2vbogss8ZwdRy473wY2u4mB5ZN2t8x13oD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBPHhLPXhKJfWsg17zxzcRdmXGB7tqZd7RsUuT7ApkvWWC1zv9U5kbjcfMgdYXAVk7HRZygVCc3dqxC4eLtFws8",
  "key1": "5qombXjC2NbFdJxCejUKW69EEhatYBPYgm6adUC5DfVandbhDxKuouHD2dq6M3LNtFiAdmNFNaLrm9SFdKpwBUEV",
  "key2": "4C7GgcBAhQadvnUF9tcrVvJQbYbiDUpgiRPm8HJf7TSdwqE5yxHLxfJ6Cmhy4z2xLfVrNfisFjh1ywLG23kgtMht",
  "key3": "fRdNnk6WaF9AyfY3mwNRFxyXejwKrxoPdFQmneFgTNq3RcvryaiwetWJwBSRP35g3BXVBLU9QD5YBF44aF8yVto",
  "key4": "4h6t4L4QxJC8TjFK9hEgqiqhKuQ4LBnV5pWCg4yi5UqjzEkWBE4v4cQH5qbFxQx2dvQ5FZ2FZVMDA21wi6af1RTi",
  "key5": "ahkHdC6BmhfTxAxWinypM3ELJUuNiN2AYavTjzK8aKRSAkNkjJR5CwajL5FhUTSeRQbzquaiY7i8bQAFPS4Rgn6",
  "key6": "3WAEdYCtoxrQQAUwPQKHMGM5YgA1GyvXnCKRE4HnRZexVbcyxmrrU86j1fqdWRkm78VZw3oYhkgumUe6fQjG7j6S",
  "key7": "KL5Kj433DrNVx2rGNX7SRxE5F6vM3ChdG4EwwBk6q4fLHnpnRzcQ6RQHwaw4A9R8wCQot7wJcsfNEXF67a7cYsd",
  "key8": "5tKMTFJdWL5bfzZ8PZg2BygwYEtUkYeaajDq8BzVkQGJMWSDvxMNSuYapzB3qfwkV7Qi8syEHSThPpiyZfWAi7eE",
  "key9": "29hufs7X365gounXQPKmGLoUkj6uVHHsz1yZar8ZyhN8TBEXkdamLdFCwKmLqc9aThuWGGxgbS7fsNXrvnyEsLNB",
  "key10": "4G4mmYHdkEVQ3ibSXACo7JWZEjX1FJb4GDJxL8fnbnLeNEPth6Rv8sx8eQfwdU1hBWAL88J8UQsurd1Ab7Asj9Uq",
  "key11": "WiPAak4vBfGcmEP72bo53o4VVZ6FNi8PRKnWGMwxYrce3m6nrsgLyDqWncBPBN1Kd5XJhnaFRU3JG3zKafwQYwh",
  "key12": "2LKjQfo5fg5pxSjUAypuML5C1oKmBLnbZ1Ec6jDvvJj2TjcdXxPDD4jMGqhdFWRUchoAKS8NYCQGcKKXhFctfGbC",
  "key13": "5HMGft6GKe1Uhw4qDVhva6EVrmPM98MmBXwy95fSRg75Mfewg4WJJoYvbVFG7joqqj2RLFxoqh3gieGeM95u2pra",
  "key14": "eDtrQri5RYBjr6ZCXofhTeGgHXCg1XLKfiCDYKjdHEgTA1VUZLxEBZi2Dqk35RpK64gJpqPxybqhRdx9LhyREQ6",
  "key15": "5hYqAhpDPX9dgrD4McM5y3ssdKCkHKuHk5sriBzVabaagybfs7zYKU1qh6Xz53T7t78xFAPdCmBSmEZcnAMGQP2n",
  "key16": "2gDhXAwPxCnwtGDJkuJSaqZv6npRBdKF1bFTJdN37YiktEemKABS4yeydGi1xvoGghPEznR8mvkAFHLM7AQuLEYv",
  "key17": "XSLyiKkVxL6T8Pe1kxeFYSx7TYEFrcn2kEBAKmFfY71tWjvwypAehDrmtFrNF4JQCCxvp7q4FhRzDBrGGrqXyfd",
  "key18": "3zP928T48XpQPPUWQiB8QMYMCPLyxALBeT6cQ5TdWA4oZvfBgwkwhFafEjWp1qgMvahKXzu7RLshsmo7PrZWE4ki",
  "key19": "4DB6XnGLeae4bw1oL4SiWdCQKenVf6phZnyLJrGi2UWncgzTZxbu9DQoF6CoCtrV9eAhH6RerCW5Rtny8xPmxbXq",
  "key20": "51sspgeBctUAU176dtjrcPSNwPMb9gwE6md8DSg45oqCMXCU1DVqTjHcauZNm7G2mFw1KRbjF3fd2aYukKgeSEjX",
  "key21": "488gZvquFcG4Yri7hbsFgRyzBgsmPwLDiRjzwdc4hJvo43ds92RQfXWfWz53mBNNJejELw1PeVNuFPi8epr9ghfn",
  "key22": "2QysZiJDjwoEJ2FsBsrcUtJrgwH9gFtnGkKdEooYmEYt727sTA2Zu8bBE9zrkMnpbgouxw4W4LG7nsiM23Y97Nwe",
  "key23": "WCfSH7eVGQNf9jqfXf7sMkTPXRVvWFWRPwbfyfTrq1YM7ZhkMnNniYSi8Pxi2VqJQQrWrRaBF9uVVHeK4RpchQP",
  "key24": "jwY1gSdES3aqYaXCkLq9dQUwZnggdYks15aa4EQ7rQfViiqvyXWodd1mtwCjN9G2cveSXP43Xr59QmbjpGdZYW1",
  "key25": "4QtX8QFDAsJC1TB4mCkbhqscsEWvZufzmt3KVPCBYDjsoJ9NdF2GqgQrFMwULLh3KcaAhbJFMZW1ejkKdXqdYRzT",
  "key26": "SaBuBTNVT96RDcWPJyjD5QqdsAhKoNredh8qXiD7DNv79bWRTVodfERSdf96kQ1RpiZ8rtDaG6rsFPk6q45M5pr",
  "key27": "sL3icDuNKwthECaSJKAk6z4uqW5S7RRP67JQn5SZTCsQBeSRz38764TFZRTp7d53CHxY4MQeYfS2GaPENezrQQK",
  "key28": "3bYQbqFoTFE61wg76Ho2o4LjWZ1Rt1kZM56qn6rMmPQvLhjkMMD1gFPmU5iq8hm1x9QUoVtXSpoQt31EUR91NUKE",
  "key29": "4ySwFFy5i7fG5WviPHUmbe8MfErmzVhZehEDQjMu96MKFbjJJWjFSBZxhyPepEXLn9bWx8hevcdKq8d24xJYKqUC",
  "key30": "3ZncjtuoX4EWukb7r8tzXUW1zQqJz2zGHcHw8qkWAzZv7J8Mchp5GSHwWK1MAqk6b97JjHCvUoJiGSVewKT2R2Sc",
  "key31": "3WbaKzo9F8FYYKTQS1KLHjD82G5Pk9ct2ZHd6AtU6RDXikErvVFYbzk4V8E4VA7idvF8J6qTa9gS8Fo9fb7JmURn",
  "key32": "2ymj9MYDAQZzzzBDjBh38SXQvtRzyWjxByYQxYEgPs3xytBgeQyU1VwAnw2MDc7YSe9FENdhHmB8Hbc6DNxA3a6Z",
  "key33": "3FcTCUDwBP36trxg3skUBBzoj6GTR6bFp4yu1KAV5qKdNAQsgSGwXHib2ctv9o94HLxVrrG5vnSKPWPNVeXgvM62",
  "key34": "gvq3BdYVEg59eAuw7wAEVD28u2V8JhHUi2M31tJAoNT2FkUNZ6G5xemB5jTt8HbwXL2ZjNWiPcTkGiH1pwuQomy"
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
