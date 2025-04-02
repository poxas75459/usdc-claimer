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
    "4FxzA9FepYdenuZL6aWqQb6YSV4i5kDbriGdZjg8qmuBbHjmupPL8fkB8Q69fGgfM9t42tzDFY3pin4HubDHAGX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LiqzfqC37M9Ec8Vq3Yw21fHdjFMRceaCooNd2N8MWXNhAb7rFbDxpxc9HZoEwzKLARGjJFT8stv5GM9SDPjum9s",
  "key1": "Kn28ekVaCsphBTXSPEznF8mRrrMsMxYVszRt1usiXtFjgxyU9ZMGeVvRfsbf7jVRGYAhTp3jikrfoSHYa3yNEcJ",
  "key2": "3Ra3HQF5duKZPYnSPvBsr1tN8D3oCG9RGmfA1ifwWB6gS5UB7tPCpSBasnSEn5U8aW6pQEPCHZV5oeDGtwhLSc9A",
  "key3": "4ycz6ZbgNMngtnk2kmNno4d2cbUHVcWQ8RWC6MP1CjsEcJ1TzkanRiiJPaLaHAmWtt9FGdKV7yCJ1RGRuqfy9WSy",
  "key4": "NhdKWGs2ZxiwGEyTkBYiM9AWTiJQRoDT2i3JJXsmwJiEd9TSofF3WF9iMWPGKeJkSzoBPfWNdEXNja9b6n6yv7k",
  "key5": "3ujZc9cqJoVRCiXHyZMYVermWYmgAD2rvjsjRTpAR3xjnri4F61PB7QWn7ziTrPj8dYDoGcw45W68vxXF31zDwoL",
  "key6": "4J2k7LhK7nruVec4cBGCdNW6rNLMcj22yt7vSmzTNRp3qG75eNq5SErrVRaA3WanVtSUTmV4UM4XFkpRm85qpRBP",
  "key7": "64sapTcjatv1sUoTygX3fyTVBAC4WYGNvoitX5QkVLhpmqp1TupWgotr847xTcagqgPSnrAYik5Vzg7Aux1VJpiP",
  "key8": "V9wBBaPwTCEX9mPS32sJ8vTZmr6SdpcWhrXCCp8BqrDT6i7iLSiWmvCzp3pMvbBmAvhmbzqGN34q7ezRbNfgR4Y",
  "key9": "3VqZrxWatp4os5LwHWCPskxyFbqqRp7PRxYMF3ptdyeBFU8DFHTbmAq2Pk8x4BqMSczTWpJxXTyPuqRCbvCz1GzT",
  "key10": "286RoS3ByzhEUvuHGVBDoHCktYX2QyottjJkRENWCnY7487EkZFjsMvzpNZYu8k3AxhVmZi8Z3ETnejrauLyTBHh",
  "key11": "2wKYC3gCXY6TrUFFMoky4tUqWhyMyqWssicAKHGx2YzSVGvkXgCRiN4NfmtqBM3AnidRj2geDASuCnqjWzi4GQWB",
  "key12": "3ZNNcypR7Pi8fuUj1QevcjdYW7W62ktBBeKNA8d5zh8EWWuk3HfkE19paqY6LBLpmvU8ttwmnYa5UxdcxdVEXcsK",
  "key13": "5yDsswxErLZonqGgHtqxAgQxq96suMUtAJEhQGKXKDnajayQgY3g5eky2vcjagSEZ9VdRWs6f5BgSW6mbZswnXPS",
  "key14": "2XfETvSyoWyBRHZCS3pzvSjUQ5d7kjGCr8CznqymHBG7qXVTJVm6tYhBL9BGmKfRgP1Z2TYY54YoLB6pdg3J8dg5",
  "key15": "4LDvwfFtff1qCkiptpeD4iJNG8Mk93xttpnqBP9NrC8Z5zvxS4RU4Aytr9czgADdmeoRae5rtshvVvzWNt5WhM7V",
  "key16": "2iJhzzupx91nZZRg63xHyiHxHHvNhs1SEqCPSeZ9ue8Nbg4yML36CVat4C4beNFLq5sBo4sYmq2AMxgzf1iG22dp",
  "key17": "3kabKEiPTrRabPtXBKmz9dq5uEQV6sj1u6hcr8LVseVR4BQCtpv5yzUgiSaiCWscBQAFUDsuk5DvyoKjdeqaSu7X",
  "key18": "3RVoydNRXFbH1er45CzaHFxWwqevPMHrgCvYAiy5WUTU8ALiUmqTTXkuzZPVEbjFW4UD8E4HNr1aSfvbf5WiTLm",
  "key19": "2XE7FLbFfe3JHjKuujVxTiXzb9D4ZpioyrFpWbAxeRgH8U76ysnyPNkhGjjcd47fbkFpLN1MgzjkkZvhqHsVu6Gb",
  "key20": "2V9h2TSEMrgMSNZLswhGuUoB2RpDmEkn6rVP3GrweD1KbYJRvJjTTsUaHU7mrfCwTseQgXTj5qTXJ6bgTKbr55uE",
  "key21": "AXm6QAtELPz6mMuq1sSbFgFnkqN5y9JEc58gM5zy9EYwjs1vQch2gEX66FpYWm7K8NVKw7N3UksFqUac5UhaHpR",
  "key22": "5JPuvdXtohXYBx9RSYYYDsCbyuWwLzQVjE6SdNQm8iBV47hzhgdp9BXxPbTgN5Uwkyawa5FTWWoYR4zFetgWPqKD",
  "key23": "3qgmAzTt51p5xj81VmYnuVYidFWX3NLApxdPgYuBGegBuHKN1jYbNHLw6pX5Qi2VbZ7iKikNVVN7BZngm9AedHaj",
  "key24": "35bx9hirpLSXyXYXueKX4ftY6BGS66LFodCEL7YcuKsPXjaoa1XYM3Aqjc5cpMJCVnKTidHQyUFK9SMm1yztqYAp",
  "key25": "2ouS64jAUdFXBbxJR1aw7irCJFKuropgnWcRAA3Fuj9bUDtu7xXCAsibVzBTVz1WabGECGTzpiKC4XyPn6TqjvJd",
  "key26": "2FUdSYqE87U4droibYuUf4Cvb383DRrzVbfZfjnpwMcT34qj11UfgoQiFc4YYJfE1pJnddtsGN5aggBJHL18V3CB",
  "key27": "2pqupM2jjDuiBUG8YEt4nkLXX93eupdeG3Xp6nTxXvSqpVXHhGrdc7fGP1z79RRdQqPjWqScqPiaGzWcwSadSPdq",
  "key28": "5fuQXqcw4DNp1SZVbkuMKxKRxUTGwwRgXM6SJ6FD8SGegxaVPv1cbzFQxVSRCPHW3JJZtUi7vj2aR4jEVhTpRbG6",
  "key29": "5ZiNyDGUeqSnQsuS76qxeQT7Z1PVnbZqVTvfEW2SGyvPhwFUdVuGy6UKkHZ8pkRV1FFs81eS21JTek9rWxZYSF7D",
  "key30": "uGtfPpKLMSAhDynSVHQrvKr68QoZTdWmpzuY24MHaqyc3ZP3rUdrTUbJhTezgVoy5E9jHBrbWSeFyEtWdkMv11e",
  "key31": "4DEt17QBHbQgUbRMgz4UpdTDAHpXXtu9Gjxyb1Ne9dtdTt2DrSQYMcM1i4wxeSavatUeLKbCTf5RYvm958gRwvzP",
  "key32": "5JGcs4hjzgLVW5y7UVyHDviUkAfLjcA5HUErUkEgcoRjMb3LvHLD1yG3wQhTmzb3nQPJBtMnXTUJJ6tHCsyqLA4Z",
  "key33": "2H7YdRVZLNtfg2ygGVUfqNBnt9seLTA281yRNJCfUG7aqZH62GAyDEjMpLyykWaV7XBVMvzkXYipYArkmAxHHicF"
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
