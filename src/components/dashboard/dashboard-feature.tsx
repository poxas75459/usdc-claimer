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
    "3m5pVn5iwG9ssQ7P6VYhRwdmQBUiZv1wPKQGSokapA4s9fWYjVYPns6NF1HM37T5q393hJsgJ9wD7t8omNFmv3tr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yctAf3Cnthcmf4K8BcaLyxjBdPByesH2R4qKZJsTdDnpNazDGK9WE9xAt3gNb2V5LgD2rAhURZwToJjBrizzXke",
  "key1": "8xzhjNPoTxzQbfcwUKgYZ38sfYq8No8DLLcGfbavHTNEc1ynShLUHcZBvZPJBdjRNXLGURoCf6KNPxT86S2V4vS",
  "key2": "4X1vic1yC5tLQCezFgcS4pk3Pzn46VmLcVGNirqV4MxEhndK2UFLyEQeyzMRujxiphVzPVNhCRVFHgm8yFo7HHfu",
  "key3": "2cagjWvACK8tN6LeZSELAuuFw5RkeTfpdkYHWkggZCQbYjWLcoZQbrCUemjtZp468Y6s2RbrzkH6vbymeWejjokF",
  "key4": "37qQSYcJT3G3VTKZ4Hs7LWjdLXih6Q5bq9UuQ2NDzszRMZLbN1ziJb1KdCqFX8eV8ifRYnh1fuC3K2V6tk9eGVAX",
  "key5": "5bX11BJ4eD65sBFzwhW2LsmnxbBwTHXmD9DWfv4HvcQMvG8YfTedufPmRjLGTrWo7MbZwp9ufVc5p4m5gmTKZcF1",
  "key6": "4TUn4UNzcKoW4yBd6srhnzv2WeEJGuLEicWKLXHRrSNTiYMn4aUyRBr4aeJh79iBmiFizehAbGquYu9qHDGMwZVG",
  "key7": "hCpJ4BkjyAWz8G5vMCRtkqAkMnG1YnvNXAf6PCWnBaB8odhefk82f7ZEXTRaoRiQfiJdkmKZxYqtdkUXidRDjY8",
  "key8": "5pvMLXbGDQwWan8PYe34JcMdP7EZuC7hXS3hQ1SuGZxdvHyF3YezdbSLyAZRGcG95NPVyDvUrZKz1r8M9V1zgowY",
  "key9": "2LbwW4EyvGskCjiNYcAoBVFNY3EaSCYcDjCfE97q3fbyfaspvHT3txEreQEBeR3C2yDwx81x8VYo4xQZQuUNRnkE",
  "key10": "4mifzNmGGyp2k18soVB6EJenoet2V5nsJsofL9AHixsgAYSe6Gf9iD3tjtfPeDsbti74jHgEmR2s4zYx219nfn9V",
  "key11": "5pqhKR595dQJMvyjqDE9Rm5SPXwfLNb7Ddsmbny9QsvTzkYrYz4sZB6TBrHz8UsfXkVvRyZjevQVbb5AJ4LN72nS",
  "key12": "xbMrdvhAfyP3Q6KNAH6yEFRo9NHKYKnXj2wwcGSe9t79MMoJcVV9KwuZTNEptfUYRoyaAtrEAtFFgtDXb93NWZf",
  "key13": "5BUS5YLba2P9SAQFDcB6jq9Wf9diu3RDwre5mqdRhcyiC5KYFGY72H8ZErAv4Bo3CL9SECTjGxUw8JDr8abL6FDB",
  "key14": "4vkedwTP1gYnrQ9qJ9PLNTpAPHGmDKeqSSKVbSLN2gNo8AKm5oVTR81DM8YvBK61v3MSHnveVsDBzb9j9bRwCqVk",
  "key15": "4mVnztqnMWMSaXKj2GvScd3ba6HmHSm95M5eGsiPA4qcFQECB2nDFcA5xTgnjsrX11mBLVMVPUiWKuS7TuydjXtc",
  "key16": "t6MUEjzZxqra38bwQa6c658U7xjuofTtqasgdgBXeE6mDEa9aV7uEGdWRQWfEeSq8UQacoLPm5CLqJbDVV4DUM9",
  "key17": "5dNXwtvxAE1xgvndzPfFPym3QCVFXEXV2nPxX3cTqK3DCtvhSYzYpCaWMwkyScFYgJmL4x7QK1GTC5XEoKYWkbxg",
  "key18": "4Pr1oorFhZ2rZuVDTgV8QUA1u4HFxj9VkNxnbk92eiYzTEtVZqoWmVs7hYZeELaDVFxq9Cbdng4M7Y5MAycD5jSY",
  "key19": "2Ft8xhXyWCCz4sjFvAMMgA9cxaowECo4ccddAGMmEHE91sc1qMyD8L7k1MyxMMhEDRd8P6M9b9N76UiwnhqQNq1R",
  "key20": "2KcdXPKLA99EJrR1nkm8owEixQu1W173iJF4HjPwtTPHdciMHuTLV4TyT5nbjTeeXUxqKrJwnEzi4VdxcphpbrSr",
  "key21": "E3FJQumax6FonYJ9sMCsfaBWEmiayLQzTgiWhExqRGepky8kFMScPVAdx7SULwKmWdN9UiW1MfDBKr3W6wjWAqV",
  "key22": "2yThsjFN34DMWHR7oVaqSPnSn74xpXZ18FS7Qv5CgSUAz54fY46r5pdsMsbysjqcC3mvsrjAgmZxt5WeVKsWBLrC",
  "key23": "3reRjaSzZjsoaPV4zkS7FsMnYFWDPPA2CJhzAqHNvAFuovy7w19d9JUdDwS81QmuYGXNgmz7hP1rAeYkTniSAtvX",
  "key24": "5ntU2AvVWFHBpFWAcjgCWaCo8th7UrpYKdnmfKhr4tVHCWFwzFpUD6B8xEdWqFNpbYFU6PUYZ1zuxmCrfSqwREmq",
  "key25": "4WtZUyaYK1vxcBaefCo3rA4vA2oKqtjSKojaZ1UvmJFHnTivxvuUP2oKyTtpYXWUPSoLYYg5uNVdf9qLWo4wknCt",
  "key26": "25eahfLVjcL5BtCjpfZZ4mTfK8M5ZKPKMZkTrtdcqQbGgjeK9vvcQBFHe2dFdzWUH5EhQZP3VNf2XTyt4QAGsotR",
  "key27": "2oW6bzjhxsKtLnD7sJEZHbf5CtHM6ziixP9kMcmUkiBVv8n6nJzyPTBKq7MSKUTJHbqmGN18gnPYukscBihpKD3e",
  "key28": "5YVQCMR3dkiboEJYsZY9kNbyA4GRhVUHfpQjcDGzft1e5RM5xHnsJbNfjydcTsjA4jLm3YVUjAnoiiaATQJwzVz1",
  "key29": "CGcojsbLMTW9qKWtrqZJZRkzZ11n9q72aQofdnkhukdWR5dTLWokXcCoahdUND3PHmWpQZLjQexQwoVWW4WnZFj",
  "key30": "4gMF3izN2szUNjCvrwtVJ5MaVsXuJdUA4SRTyJNXVBQDRxGX8aT17LLGnTwtedreJKRhAUy6QkVX7vahw2NPXcit",
  "key31": "47upA8B7puBet7ZYKX27Achz4EdqBXipvys3EszcjwYecqSGrzyJjEwwv4GsGAAj99GAwowGKtFJqNzDh19ZPpeg",
  "key32": "5Jjh1HsFz8QMD5qxMACjXfJ3xbL5grMFpGpiJYxFvp3DhQVb873aecbdcp7ymur6wHJjpQTxoPfQLMhJUaEXN8zV",
  "key33": "a2nbztn4q3jpHA9MViFYv96ExeXYNX3FyE5ZYeFQhJbPZcSNbcB3Gyd2zL87zPwH1Z4oJ2NYX4nx2g2KcDBoGiB",
  "key34": "4msDWxcvp6HieYnDNek65pEzxHaRKFY9tBrYNwYTCCGVgcmLQ9UFQDX2buSF9dg3LdyaEyXW2Btn1vSt1sUcr17e",
  "key35": "2jVau16mn98jsQuxUszTcuLnQ7fn9bu4bafHXBd3JhVfCjez8DeWK41UA48ZCRdQwA1tzt5eNW5HrqLhjwsgWNMF",
  "key36": "2zyqgJKMvbMZVPn4BJGZtRou2FUEAMFvprxJ4vN1GnsVxeca8NybGiCv82iy5jXyeoMboxcf8Q5p5MxZdrCpwiJR",
  "key37": "JijEdcbjKqGV64MC3Kvqo4MowB6c1DvFqnpSLn2PSwePSQRH66uUcnVhAr7ZsHuVie4a3EcRBYkmbUJN88sEqnh",
  "key38": "TCQbBZ1NVTHi88CBF4xHE63L7Ck1VTqPhcafW7UWGfeBniT1CCd72p63e5pfVxXwYXnApCXQw3yGwMEH5M69mus",
  "key39": "5faGoEZsLFmqZZtGBsrGpr1oAk9enhZppGuXTAU55EoPGWA3MBazkb3LEWQQMPc9FKsSBeRsE3p8hpQQZmmTT1xw",
  "key40": "3omCPu2CrAuVrNrSKZrAv17HRM31h25P3rp8QL9FrB8tDFX4J9N8tE6ZWJgutkZgXrFbfcDjr3zXaN8s3NWWxzcV",
  "key41": "34ciTVp4eXFHEMJFWMznHCjcoZyn4Tj3BFdMW1wryRUCrRQHFTkUgypXv6ZQDhEuDdjiL8K9Suk6Hz74t85uuK3P",
  "key42": "3tv9pidrVn85BRmuREVE3UJgmi5WnQ2JupFmW8hoBE4ac28KH2r5nzDjWRxcFgnAp8L2DUa2xnA4TmCw3aRmVPWC",
  "key43": "4tzfz1nQjTGsvgeejdiKyR5K25bY5v7RKbFfbkvqgZqqyx1LoGVgLLUBAG9cxru2nbBkpyVRWviWRoWJyqtWRvEW"
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
