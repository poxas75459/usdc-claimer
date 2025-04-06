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
    "4ZkohRuQnz72J89PDezcG24hGKsSF3hgDhVfNgiVWtMvnVATY3ryjoRR61hGvebLUJwGAGHModLLNBWX45GMNRGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5rMdRQVGwMHPkcpotyxDsvC58tqbns13Tzb96kpQvACuiZqRwDTF4Gw6oMeeman4RC2CCwhUe1snCPxhWJBLii",
  "key1": "62MggzsbYaW8tnQnMuTfmcBxQcXdDBeoAQJT49EAvTFujw5ZDWcBd2QcQHyaPrhUXJJ6FoTpwYjfQDWAx19YiVzH",
  "key2": "51xuyyXDhKS6cJbLKs2X15spQ8SkEdTEnpBa52VzX5TJYWCrPT12yjCaoPkUTn4MaJDVeMW7VrPHFftpHpeSqQPW",
  "key3": "33QQRRd3QD9xqFvBgDbSzNRcaitpsJ7VkrRyLU6fKKSXxJFmAuiYdnWw4LDQQW6Sw7y3HUcUipvS4RmjfUGZ579s",
  "key4": "5Gm2brkrHkE3giHx4fTPMzGmpz8XJuVJZ6Hz4oqoWfSUZTfcRbwiSC5jhcVSjmwmrkrbaJrTQM83Z3dCuEA6efAf",
  "key5": "yJqKW5yErPUcYJ37zmZYPMtHUvnwJ3BwVur5eo6PKo3LaD5uz8ar7RKsxj5zoHSjrtfdRkot74kNurdn8azNNhz",
  "key6": "5uwvBd7rbHrwHuDZeTGpzNKXDtQkbN2acXDyMguSNc7VyFAfYzUEmPD6JBfGfnqC2AUFhiVVTnCpUQdDq3L7ZnTX",
  "key7": "5n8HFKHLSFzbpGxCEafA9VEtKc7Q8ha8XHLFF6ehfj2Xghkq7NwrsmgYR5DtvgJqV5uDwmsAASBhtscPzxeqrHNN",
  "key8": "4Mu3aeAx6huuUiLkQeVXWx3i7zH9ojfAdvAvUr7kZReXSwYLf3NyidBo2iM8NwZok5TKTKKhwASwZoTeCoHxJ81c",
  "key9": "5AuE9DXugvKZQsPRiUbd758JJYnna3UAWQZ3wLrW9ZaH88WzGoknRfo9wF6UhMzJN14kYe6MqCRvtvif5nMe33JE",
  "key10": "5Wxn7s5mD6nW7Cuxwidqbg1eKWiCPcQ7tr2Lv5niJpSfEuax29Mxn5MCpeegPLNbFGz45M5h53zWduVPCpRmpvoP",
  "key11": "22NmyvyddSNw7J3c4RwcMCVSnJZhoayxTP7ZTqYm33bWvJz85Vcmm2ZGEA1A6R1SfXWVWcBnXYBBZVXjWJUajFNi",
  "key12": "285jZXovdv8qLBqHT19aZL1vKEgMo1cLwrBqYSx1xTV1BL1uHtaL14AvJBeTUkeCZgTLt5Mf6ac6pdGD5gsoQVrd",
  "key13": "DKrCxcJvm5a5a4LVN2EqJD3PuCCujfvX6SQBq2BP9y16QA1rdsPtioPfZWzxqX7nYnKskWKRLG8wSjzy6vUtMgG",
  "key14": "2s4bebtLi5Wih62HJsQJaZkMHtiaiZYwGDZz7pgBhSrCYhHZG8kR7GJmwQBKtaf2KHtP28wn42E5byfQ5LVJ2Bqw",
  "key15": "3kkje7Gcu9NEL3p5bxCcg3RNKT8Hx8rhQx3GTQGTmTAhgMzQFhuZj5wBD8av4TNVGt78kdJMu7YW7WgTucxjiAF7",
  "key16": "3Dp2uRAb8joBVfQNnj7ZzcMK6oCXEE3MxBiTAQo5HPMkTFhJ1e8m38SsTy6ooFP3Ubs7dXxTMmN1VkTbdRTzVMeR",
  "key17": "46YGREDZeuc2eP11goXBvbJY6m88ockgZ1z1CpG8Ji3LPKqC9uJYkoH4qbqo6ck25u5VPwty6TvEogVmSAFDpcTK",
  "key18": "596pZ5ie3KcZJ9z7WLEdGA661sDUkBNXHPQbJSpY8vtC3wWJ4hQV7VyB1Jnt2sg3vFLQztgM6YXwDtZPzEsFMh5V",
  "key19": "XjLXpyNijoMQjePRp4jC1odBcqRCbJ6VZ6R9sySWbJ3y3Zv6vTABfnyp7sarukw9iWhfehRGdvKk2DMH24UsvcB",
  "key20": "Aexy3kPtJzA95LGWsQJTYveiPZSXuKujJqPV9MuBzMjXf8cU3KU9UAicu8UXg49xvCu9wJdwTBVkrW5Ps6jnXdP",
  "key21": "5jATcLzZz4NxaVpqiKedNAHqQGheLFmWavSdYSKbsejqT2Qnu8Fk9dfEWkZVDbvGKmfDFFG8Ppoy88TGNJqaEbw4",
  "key22": "5ADGxSnBHnRXXKyKzJkbJEk2ybqGr7K1df5xmaLKzSCesJsbDHQZ8gEg2NRstgEeBefu5QHYE7MhHvy9k2upe7hC",
  "key23": "4fGY1Spq9eBxEMye9xXNqNo9ZeoXBUTQQyprTVtqBA9k9qJNWg51S9fLQa7QsxcYUc7qYSguKiv2yRSW29Q8hc6U",
  "key24": "QAiXH2VxeNL639iVCPdqjYS8qAtbahnEYuJcj1XzhD8xTwruHq4vcq5n4fmTz4iuqMqbk8tF3r7ctV85zNgw8eq",
  "key25": "5asoEaWKYEeqmT2ig2AVyqSsZR9obiZDL63Wwes67BQZkr6a3wrLDer6Dezdxut5MPRBD5qDWqXCjNVpR5tPg2ch",
  "key26": "4kjKTvqBpCSxc6PEVzPUb497URwrK49HJVU8EJp9zVBSvi7GZeRuWhyFTALEtQPyd1MjmpcNYESf4Mhm6m976kxb",
  "key27": "3UHx5qE4h6wLxFd2btC7Ln63JpZWYhSSTXHpfaUAsrUwsH9B2YD4bkuQRPjMR1kxhbk4FR2oHocZ7Lq6guGLmoKb",
  "key28": "2kXEiKxLPGouhV3655DeQfkqmvkE6oJMG3uK4ftosGjWLZx187fr5hmVTYW67gEbadMPDRYP8DRcW7vNtFpUodjB",
  "key29": "3YGfhZicKUbD9UAvEdvSST48TJXWDE7fKLNdXZcJvEUXkrsTwwnXRGHMZv1wefui7S1VenRP1UzZBJsWkueqZCsi",
  "key30": "64kNfUG9DDQnKGkbvhfP655ZpH6p6mEfwZitexVP3XJgZDoS3Jn8idvd8T8dkViTrY6rv2RTMRVC3XXEhRy43ZCW",
  "key31": "3TPW8MKE3L21HGPvRXY5VZfU7f9ucJmYdVQYA8Er49FczfWTP2P8ydsWM4dKoRqVA343oibKCMSoucchiso54Bhp",
  "key32": "2qHV7Rpwuy6xtMmuAQi6wNQjddBn97v6WmiYXiD1WheHqLpA9qRMz64rZKmGxn15sraAPq5g4xcpiiiCoBm5R9aQ",
  "key33": "2chumTz35SshBpuzeQEzUAnZJZkB5T5HiAeqav2VMonZcSihdWoRJVG25rwHkYMyiwKNrTHj3xJBLTXvDbAsnzKD",
  "key34": "656Cy4pAUkcjWSbatw8nxdrnoCqMjNeFMPWZhdxCjQmVVgt1Qnm6F48AJEqM4zdc7YwMBkF1AD84qGqbNCdDLRUM",
  "key35": "5xjm2n7Sv8qWpJxuwqRhamrPkmnHUgNkbt8F84UFf7DUH1zryvLXLg2QhfhvZ3pjw4RQWFrzW8DcpkXVBEHjBJPd",
  "key36": "3g595VaU5UVyKDJ4vt7gbv6wvSVLjMTrFAntmUKWtpveGfnYfztUBYAd2eeJbti4rL57YqbuKy5KEQQwf6huVhrK",
  "key37": "2m78xEhxFGgkD2mf2D6r15x2LjqEiNE9ntjtFwJj5JtBrZqGyoCashjciMGwykN82rtwHc3mHbGQd5CTDCDKsrJq",
  "key38": "c75dcxdXMC3aYs8BV2Gub4AnEhDpzhsDVBXczMypbFrTY6gaaLY1wT6tPFrWUHhVkh6DDzuBddtCcweVGy1kDUX",
  "key39": "3AAABsmWxmRVBYVauBMGwPYnexYCnaA6BNk1xHmbETxzGyNgtQU99fkPLb9yVuzmMekScg51MqVcsXitkGCZFzN",
  "key40": "5AYFqibvcw7jrTEbpt6UMW5NptR6gWxRNTc1moKg3cFZPLc9Tx55G7KUr9vp7cmHQse7cQzNtHKhWG8g4h6YtMu9",
  "key41": "39E93KGRrjhhPRtLMSAXLyFcfDLzTCZMB6y8b2uPTwMfbMkMzEWVMNfMEXUmcFkosdvh2bv95JjfZVKm3iE52Bea",
  "key42": "5rVe1GmAidhVHuxhz7rzSb7fkhP9iKY2KkSnQQ3dr1W5pNLT5Tm9NVNwxRFYsGGi4Sp5LW8GuqzvmaV9VcWCoGyT",
  "key43": "5B928GbCXk12S8Vrk3ct5sdgKFZFjCJAS9eAdSqiTDWAzRjtS5cJUwRdqZLnJhUmbA2TBQv9X7XMW1w1VLDRHJwL",
  "key44": "uBEksHC7b6eiEahVUhVfkWgdx9bFkkyAArek94WsFF38sVJS1DviBWgXyjnQUredfE5QJ4GtesuaxoDrsXAK9eV"
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
