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
    "2Y54bb3hZq1Hc6whdK7CqiqdWFWGF95PRbKHDrPMdcXpYn5VZPUS9hLEg43UwdMpFXWPXteH7Sd7iH8ZwEgRa8eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bcpsBVZcvTke3jnytW4WtetkvT9AXofxT9t6jM47zH5eCjdTpVJtb5DRt4wPyaLFgz9o8RMpc7tMpz9ic5Xej5J",
  "key1": "35Q2zpRk2oKsCPEHxoFMrsmzth4RLNnFrgY83CAkbUfR3X8zas9xau1Zu5xYDdTH7VS5nRLfzfhh2rarSqgexjpm",
  "key2": "65uhqF6KbD71UyYAvBfpPkqx67J6E13SjX3ULEHTKUL6CsrUcg6UayxPb59ckZFVB9SCL9BEywJfM8wGtsWxynPb",
  "key3": "cx3zQRFHzNCbCUZgNqsA4cjPegq9qyjt2G3zT3MrE92W3DREopjJLGat5WRDnk8Lnuvt7xHFMwSbQUqPc47gmnm",
  "key4": "4bfPNRcLtYhQVk6pqWvYxmQJgtq7Dt82noRDPhBoz2hQfin2d8F85fyv5osWvg3MzEWUDmTrhEtP92d7WA3G9vJe",
  "key5": "2oD77Jc3LLbUUqv1uVjZEFcSDx73GXxXPDXzSMaS8imTT5NzvVMcPVwaKGmxCzRsRiyqDSgxzYUbJZxpmtXZhJM4",
  "key6": "5rSNDp9FYiLgPnksvP3XQtbvy1x7sGTbEukxtn5CzieyBGZoy9JVmf5iqDCNYnFmC9M4yF2WcfB4i1UYe8B5Xu5m",
  "key7": "3N1LwN68jPJFzTNoWXPvY57tvA9jsHJ7z9xxj1VRLkDAUCSh8wdoCMfdaDQSfWSNx1ZAecT6fDNUWHG7JzQAzxwu",
  "key8": "3J3wVxJWLmv5LDrWVAyzNcp8rMsbng8RCdMnXmP3kQw5PiS46wq5YJcRZbGSEpwd16hNGCX9C1wGW1Por8F3VHzB",
  "key9": "3CohF8oQNY8gkP3KPVnmPbUkLZ9EXKiTWoubX816kA6FNaNXGKTuVaX774dcrop4Spc4cARpd9rAKnTKKme5H7Qz",
  "key10": "insCC6xm4gViHjLoyfnSvRi6uS9pWZ72RgwN2YCP9T7pSjcSxaRWr7S25qdg5uwyboPM39DyeYAHXM56QFoUAhJ",
  "key11": "4ez3FnkX4uk6MfkmNBfBjbuJpwNrTat9uX6zXsxP2RmQhEh8tg2yd8wC2qYcfh52Whj49a55ifdkUmGCVDS6x52G",
  "key12": "iCdQ617Nn7NeSjVChQbtue1kvFDGPPpAiEYhYcbN9KXygHCDnHSjUdS874bdExYYWrtZQfGCkANgG84p4nRVYvg",
  "key13": "39ef3X2J5xRJH453a7gg6TskveGKNDpiRjyxyhQFNYZq8CfDbXCPVnpcbFgJt2RVcWobX2QYPTxB7nY2Z4A47qUJ",
  "key14": "27p4duh8hGmi8UoTmeD912kzQQCREaLFhjYeCrKaxx3s6LHrz2tPJunHi7V7GJZQ3g6hg1E9scHTyWsT8NVaFDbe",
  "key15": "4YiTVa7wBy374wUNEs8LR6c84TfuSLz6hgTrWJcTcDsMeC7825b2fy85SM9vb8iMaMPyauamgHUmQ8Qg1MRzByoP",
  "key16": "4dL8ib9j6vR29sDGJBSsdGZXeZtid1QjUzCz8k8GtjoGiWKKwTfUx3jsH3FF8ZDHtmk1x8ULk5enaFavzoVo3md",
  "key17": "97JBbzn4aebQ1VySTduG72LLyqhqMAbihJ9McGquhYn1sDocsE7UbWEMXu7MKRZCcSRpJ18Juo2mEwd2Uf8ve9g",
  "key18": "4LW3oipU711fCr6LbJhuC5Mh6kiaonCWavYeyQUa13u6gYjd7adKCMeP5zjSLpwrYfuE9sQRvCQuDoAR3yHVcN11",
  "key19": "mh4GJQQsZz8H642SuK5QzpHFqzDZk7TZikuBmBp2DWoQS3aD1GFGfnUn8eHVjGor8QaphoZVu5zfqKpY6RMm3eN",
  "key20": "5KjYuswn5Ngb4H3ndvR8ADjHfLXjKz8KUHryjhaQoPCLzD1qiuDNiMUorTjwsHciTPEE5jJCuH4qYpq7xZY2TgB3",
  "key21": "45V2VJDK72oEyA1MyjumYBntJ88MeozhqeaPnbbbsYzdWA6qAStRk8q6jVea4BvT6LSPiorPADb5YSYw3hpQyufU",
  "key22": "Aw5NDwcRhKhCi7cL8EzAx1An7atontNQGwe33PruFcTqxuDnu5Fvy6PhXFiaFx33pDJUUfZNVGtQKQifR657sZG",
  "key23": "39asDtLbQVKWripcXEWBEsGZbt6iAF8zxopmNdymZxTGbss1sJXj7mKHw8RR9ZH5bLb658urTKL4qt8VgUBk5XrD",
  "key24": "3Q6Mc6DH8TNiLYC6oVpv9gHFUDS8EFEaLqCEbPj99mf8SRepuh5S7rzpz1tpzi25T3926YhWi5p28aDMWVsqnS2w",
  "key25": "r1afp6b5zNxN6tJ3R7NJP8Ackpbb4JNbnSDjJk5948F1Xbxg9wApTTjJGry31RBQW73e94mvNFHKSP98FeQKS2c",
  "key26": "36pNwVCLrVHDVwvx8NfVjkMQGBW3qpEEPYJDewDwzC85WVXkBz9kGMnCQTQfpXbVEmG9w8fUVhemXzN3XUZYfrP1",
  "key27": "EHAis7siyTDs6ss8iVR4QiZufuZoKrC3YD1xZEFLk84fxLmnxYVhVxViQyKUMfRd5CTYQHjZbDCC2GTvvrW4snT",
  "key28": "46QgSGTvk9k9JUFg1vsLgPMRZ9xmff2xhYYXMzQc3Y5QS8XdrDAsAi1oGf3uuqjCqBMHL8pqFdhgVgAhb9sLCymj",
  "key29": "xwad6UuasZ7ugYYPkLAp536ga5h9esXLasTDs6t99ZnF8rJcu4a8fJ7euEx2N4n9jHUeEbU6CoK7EDcvBsQoS9M",
  "key30": "2wKWk2MHBYBJH53MtaEy4xERjtSZEta3sFMqFk1tN2pHcqkvsAEV1jVCh17YWZvkDiEeyVa13zAhxDU7QvFRP3Pp",
  "key31": "5PYQ7ciyBULWgUAmNv1WdSLWLS2xq8GMYCge7cJhABJquj7AgBNexCNaeXtgYJSXGaHgNzQ1fDxoGXLUqCzRha4v",
  "key32": "5gMDv3Dskvnm5DRFRpkVK7hNpNUKHVK5ZdqtAHmWVzNat3e4K1N3x6G1feaEJK8PixmrKhu9dwNELTn6ZPaPP1tY",
  "key33": "GnFrnDSfciLpssCKGvsUKD8ezHZchWsrpxXDmKeD627aRBi5Ujq7FQ9Pyrb5b6hhhxxsPN1PafxwXCFm6PJjTbV",
  "key34": "4QbH3LD1uS2WMp5VKRn5gfk2mTQ2XX8fzUf8F7a6UehxorvQ8rdAdfNJJ6QxBbHieTpKC5vNpjCjRbYCWKT4sHSD",
  "key35": "4Sa3LpP4LDUpxs29A9vmtmXSApSSQByX1wfVXZBazvdLekNo74Lqam4pUmFvv3nWPdwbj4FkvqPAMADsvcpzXN6T",
  "key36": "2vEZtLRVU5nz8M7bgexVNW4JTwdJvHdnPotaQRftzyQjmTZWNQJd58HhprxZfv8eMWyEZt6knvHF7bpj7u2Gygfm",
  "key37": "8kUQFkGeBjKJEswVAohJAaApsAfryvQsR5KGrLZrEJbtHneLC2ztHte2KMomXxKMNCcsVH4ztwLT49vf6HGV9cR",
  "key38": "4E6ofdtpncJeBMqUvwf8sYrP95En5bCCR1zSSLhfho3Ra3suHioUZMaGuCSQK26yskgn1oNeQMu83yeymGzN1Fpe",
  "key39": "21UHjTvBxb5KdUgQ6hNjDxTBD1apxZudZbJwinoAibHerB5sx3u76SacyxGUgbXyehozkwgktiWs4SET9kBV7So4",
  "key40": "q8TpVgB3bEBb1n8SLHWSUwECiLoiP3MNx69iHFYNagnibQJzzDZ21rCEccBGNG16NjBrUQgoSWQfC9HbwxkwAxJ",
  "key41": "vWqVJW3qLRe8ytmXnmttRAUMMM5wTZivNcjDvHe75u632vRjQWVpEjxr2ggXUx21aRK7uhCsd8aJSgLeFeaHEPR"
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
