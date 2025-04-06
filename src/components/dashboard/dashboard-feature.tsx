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
    "e7rbt2tBPPRxQXrPtpE2FMKZMMQMJDZzWiht8oLBvYwePjjcCvkHaiY3BfBpgFSmNzD7gzxSJPN4BUJT7Yj4iZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBYib9rWSTJgCJZwrF8zBq7coXKBhGfpbDRDRRY2hDtb78qgEWimgaaBiNFF1UopQbvheNEKKU46ypo1fEUfkVs",
  "key1": "2U8zR7PqoYCUms7JXM2GgjUpW7v1CGdGuRGvb7SWzpsHWTKBggaiGCKPGxWUmFYq7b9jXyqhGv2HStmZRQRpWhoH",
  "key2": "57dn33i7EbQmgy9tYPreyASYeZofu3b63XBZBPzYMD2tPE7XaxkMddyFZnZpL2hcxsUahf9heex8Ne8fFniEzmCf",
  "key3": "2RPmy3ByD6erynxjh1RiD2tG5LXz91Zku2i3pGkTUTyxFYfgQdPz6Xs8pm6XyVJ8YFo19YeqC8yypppPFH3UQNMJ",
  "key4": "2Rsr1Ye8spSPLUVnF1udT3rFqa3VNig92P2CTLWwSBkjouqdd2qoiFHhLSaaEeTPKNbdLk29UAWhyhU5vaSQaxrV",
  "key5": "4B7EktuwLwGBEywXdpHK5Vsrx8vFjL8MwECrZHyUvyWnoSFy3hspnDxDPHkqnpFYnNSSXSfWa1pjHUCiFwWmwaFW",
  "key6": "58oWF3NMcKrYRJXhd9VZE944pZiJRgaLDH4QwtzBaEgUSnu2HvEBwyzg2RP7ZMXe4fxbeN5pec7jJ4kfN2eqwLqv",
  "key7": "35zBEphrF2zyM7WhpgrLKaVHt9nBjQS5RBZa8HSHqbwTyVvAEipkFzfV3SXZzviHsEd8J1oEUR2Yn4YrDc58wSZ",
  "key8": "65uBnm46QX7WP4jhsEqSuxMqWmhxifsTqGLX1js12KtsLAFqN5Kk1hqNFdcwo31NRf2FqXk9yyon8tggb39r2cck",
  "key9": "4MZhmEAYFLnHo3CM8pGk7mqX9mEuwdJ645z1LXtqtVY4WxmPdKPxUuzMjvVFX6TUQV7aD9jg4MQZXFxr8TMBVNKf",
  "key10": "49kF6nTzgxipLEqrhGWZSbYNxdnHHBvV9Mnc3QzY8uW5H7VsrQqDzHBRvqQLp49rWreHxWxrUBR9513AysxvZzry",
  "key11": "3KRZwuqfGvaUPE7q8upy3EJarpNAuHnuwcxQncbjvR2g65Ht8USFgERyEi3YkZdewgjZ3hEcQtgUAjFHy4GJQ3k5",
  "key12": "5jY4w5c7DLFrfXmML9ZbpmsSi8n6k8EuVDgWZ34beXWFJrgpuosFvVWDiYTghdXy9EZDDtoDQMDD95SspJoB8Vsb",
  "key13": "2gv9nhJ36PfFsMyE7CvJosw1DUfEdizcD1dPqxHUgdEDDyE9weHWnUCMboYaT2zcyuRawcPLATN3V3ba8qLS1dvu",
  "key14": "3HHLMRqFv5tSJVxWt65Y3x7xZq4kNWmDtY5pMEPJmPK48dwyxC9W6K8vTFiW2pGBZ7vqWfvNoRsMaUw59rFbWMZ1",
  "key15": "4TWNKJcF2kYgMrb5W9oZEPN56yT8MyDN3RK941R6TzT2AjZrn3bKk4w1esuechuRuTdXFJupFokiDX7coEYH3Tvs",
  "key16": "2fH9oa3enAPtojjyhpmjxDyX9UDPkmzxDsdKDZeU9LjrRc1gWFNUknmxsNeL9QRfFp458UtehL7GUBFxVzorx6np",
  "key17": "5WkKH7yFG2u4qSWiaPBh3m2BcpTtZmsVdMcQxoqAVuXe4oJRLk4dwPaanQF3n7mG7j46Dq95meHx8BqQPcWFdePT",
  "key18": "3w1aELLEbHSPenCPGHq96DX5Yk1FFBMiYmSoNamkwb2i1CEFBkKKta3iEdCHgWeSJy8QFLfDcvgozsuUJJM8wvh6",
  "key19": "2SYCumYCeksztnFrpELAv9M1Ua5fFojKuax8QkTMQiNihFLWXnq8CZj3SCWZnMoRMBqypPEsRPjeuVQx4r1p4C8v",
  "key20": "cVwJnfSLgwkYfbZs1DXyepDqkFgZJnyUu2b354e6PwMFAmNx2aJoF2VF7jg94CsdKzM14jDn6nRXp7Lc4fogxcN",
  "key21": "4Y9RXvufREPEdZVtiXB9rwHDQHeSHGeFgja4caCctNPEZNSL9YHRRTFrmzb9fQzP9pZgKhqDD7gBmig4r91Zduxm",
  "key22": "5F1c8fh59PDdFEPGPfhBcXqWnhBejZNf2BhP2dHtAi5nHAYatrA1BZ4NrNHrDreA6erv4xhekbtw2XFiY13vSPew",
  "key23": "LNv1xUkiYbNS5FCa7Mw4WwobTJh8NMFZeiWTiVuUd9boktSWzXsjLERGzbPA198UTK5a4wrW6xoeZ8MRfqBkkmG",
  "key24": "48B8VSm7WjvgbMRRJcw2vLSTQoZZNAZ5aNmZQ7FDSwaeDzdxo1CHgvLtDQ3Jz2oJGFAxc1LHxiGcYwMmY8mjtzxU",
  "key25": "qW2nCEjBz9MrU72HkMLPG3satwj6gWYrnipU6hPCMJqwwvrx2VLnJC9qRA94zGebXatGmcR9hdcetg5wFUG9aG7",
  "key26": "3B74EfUuqsS3VCmvhTwdG6y6r21Z2XXribso4V9E1zephgPJVkbUbYiLztYj1A9DiKdT9tSg4nLERF5746gfFjmF",
  "key27": "4SQMZQRPp2ZHQUYR3aeo4BSyzvzF1PUBc7sDPjEnYgTNq923Sg374JYNkC6VSn1jB3aTsb2BAbJa4MmCLPaejRyP",
  "key28": "3ZC3NFC6swpLt44bHB85xVFpKgQzzgr1qj3HEExNtsTX7qFcHp4KuBe2geneNb1RadiWKNhHs45F9jkmmB5wSxLU",
  "key29": "CSiiZvMpqstp6DkSfmyc4LLNPyP6uobwooVS14zKB9RqreFY8Xjt9wNoxUk5BPjoQapRpBvwWLFBqfxRCVRa8Hk",
  "key30": "L9fStaC2nAySiwqS4CzT7x5Ebn6S7dCE7G52e9kyrWwW6T657GtQi4ycYvVunCPpgFnPwq9qZrvX1HLr5A9UKET",
  "key31": "5DEVD46sgejpAuPD7ikAU4ug5BYP5q6UmaH5K24BonT8ztCB1fJrSNvFP24YrATh41bMCBdPmjJZnAwLQf5xy5k8",
  "key32": "2mn8QAuvqbmiZTEKaYii32ny7ibyYLNdxcKrUxCSHR9UVdkKAUve2vi27DLuWpt2TG98MxHEPXCGJyvoC9whdkch",
  "key33": "3ca3CxfXPfp2GHanfGwmLscRos28xYA5kR81xQwPdvCkwBiTz1jU4nxSawd4CohpUWhR7aTUV9fQvFHFx1SinykZ",
  "key34": "5t5zvCMSbQUbz2XEMqNBWEBjqw12xFeYB9y5fewnAvmzrgyTGYnn9eJA1sGaqTMhE2XqTVdm2VvKUr2JyEhk7m3t",
  "key35": "38g7gatQUPyp3P8tqzLYHK7M82EMJXXtk6HmphtDGrHzYRunKWgFMdEpZ7yG69byhMpXbFGUk87ojvjEsSSwfudh",
  "key36": "2zwrXnVqGUud2XvMM9uHmhJBQrKHFRS7ZsRsbSHhKStNY6KJLEWxvpUKBCFFQREEZ1iKbPCX32Enr5qEEGz5dR2T",
  "key37": "2kUPcJtaRqBbPUrASVeb9LvA8pdVHoKsSTc4QZxyjZoJufC55RKmvcTfwCN86CNwN72JHujuEVA948vwUf2BbH9L",
  "key38": "4XRk55fN4594anqWNYAHydqFdQLHcWdkkMSmXWfZ2JRNoVJYYFZRznQ97DZ1ZmwZRzg8d4mkGn7bbPC1p1iKSWtw",
  "key39": "4NPbKbfYVzay3twDcMQff7CNGHnZPdLZiq89N26NLx9RGmJkSc9eLjoGQvnL4xHV3dqsDpkaSKcpXRkfdTvPtvHf",
  "key40": "2EiusKUqEhGRPXyQ3dBNpjHqvGtkrb9s24ALgfX69YLoegSWreSXF79HKH1zK1DvssBEYWiJTHGao2JPwT9aK1QR",
  "key41": "5A384wZzW1EyGETNuQu9UbyzKADS5vG9MPFW6cY8z33YR81jMsWsTQKGxdDDKTXuthZeHromfP8x7AGBhwpXXMS5",
  "key42": "1qi6wmKm5DaB4Cicd4pmD8XJud1KbWqnYPwQdwadjiAm6kWPrAMmckcWRR5KMpVYviQ7Y7VeYXeLMfxbLXNAouw",
  "key43": "211Cge5mcHcFRTvxKzL7hfXirvqT4GvMTA4vM7ACLE8w6qyeFg6niULmPntB1oEDqHbzbL8X4RAoJxQKeeUT6bUz",
  "key44": "5YWieiU9SavptRfDCdTLWEGgFVQbZW9ZyBGNM4GRUNtVmjetWbELV97jpps2BVUGZeGPK5DLZRyDsYgXQzWHMKBZ",
  "key45": "ZvGaMKdzS2stmoJbYCiZ9JFTKB2FUXkvghurP3H7JRf7dgejqNpa1i2pMHAGV9YGaXeykmMcQPE9chai1aKxu5w"
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
