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
    "phLG38kpc5ZNeuFfKrs4Gtec5xk5LWoAxGcXPYkiS4i6TG6GLo9Pi3iE3kYAiNnH4jeVfFuVNrGB1AtC2Rfc5oe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zvJFWmdMitz3aVo1H6Sm1QLGXV9Cf2HHm8Zeg2sB23Wb1caDEYCbqrZ6AeHTKKYjDN8XvAEt7soGzxmym7PqMM5",
  "key1": "61Aw8dXXusGowW5XqEu5WtSCMCPpGkef5wWB1vbDTdTNcfhvTGCLhmTLRz4yKEZo1aKzpVi6GAfpMgt1FPjgbpHu",
  "key2": "5KTetFBYfd8ujkdACTWHjKrURZcLEhceBDk55QmX4AWiZi6kBiaKTVrfmttX8g41pRMA6vGhRm2ivjrx4C4iLoxB",
  "key3": "vVAUBXoLcPweSLSbZLmHWPcjZffzvTRfzwUdD9EasU5wqntEopnyQ9ckZR33j3bSeCSje5MrMdABJTc7enuYAzk",
  "key4": "3RPxByg6YVRGjE3aYcBqLC75QGeoUBXhprYABXasjkidUqMhfeNsLAzfVgdVvpanqxNYexgJgCY5euH7PMhdYDWL",
  "key5": "5kgwE1Qy2JLRpsPTtjt71KHE6UPyX1LkaRsxMvN9cets75Gm1ArP4CQ7EaYFJDpqAQiGqDzKkxubK9CuoDkyX6GL",
  "key6": "2Mta7sC3e6FjZ57zBpUo9cHFTBX42paTHktav8vrRzSvpovvNDoHdZHULyoz2XVoeDhgGhjAqTXVumG5k3Ypvt6M",
  "key7": "4CqcBztpyVLqg9XEmS8sUPdggWfuCnt425XSnk7ofe8mqTxXPH1TMmW1McXJPUUTTWMrf9xGPyPvv7dvtUhcCn5Y",
  "key8": "4YBjkJGDAfVMoCLN93basLho4Ri4Ug2Wfew3NFio2dhXwDuPZXR8PjmWMfFZFyAbpvHnMzAZN9fVCabjWJpyQJ24",
  "key9": "31sQt3S6WpZSVEcVdfpLSrAWin5ksB1r4rx6EQDDc3dxeq8bvc3hB8u7CNFX7SdgREo786zxTqXLVa7CC48oD6SA",
  "key10": "5ePYxopyE8ZaNo3qaewoYRkN27kHTXHT7izedgdoNs11i12LbCyMFmyAuBHrnRDMEosqSTQr3Yk5TqvY17QjJ7MA",
  "key11": "2w4bAUJT7WUjskSCP8c9jPHW2UbYDn4SqiMUFv1N71uUKE9VLQzKtcm4yoantMXw13Aiv9CiUAmwuCT96uiXARCh",
  "key12": "5WGyvN7MQxpehZaWG2MjuagFy844aeEuRW2FoX63Ty24ny7ayRjEin6Fb7s4hRx2kzujvuXzRPMDJUNztZm6uQAH",
  "key13": "zxxUC3EgNzeCNX3tc6a3XiFMKKerWKj8XxHWFTLiNJiPKydDKZ6pgvaQ8cThdipVRgm2kp4oVAXk971rQ4t5LH5",
  "key14": "4ByvKypgxEUD4DsEvwzw6atfUqBD6XfVkqHxR3WGrPv55Em39ySGHu4pd5VRhLLcbfBaLUhs624BxbrcGF4ePqTh",
  "key15": "2jq7wdgkoJiE3qxicsA3fNVSW71nnuyxTeegRJpV8k8GDRgDT7k3Bv7Pnk8izL2VmWSSF8qFzK8oJKqCwW4b8GKE",
  "key16": "5EkkBhchcTNPS5renbPyCfVFR7CbnKK8iDBRaag8jm36iPcmLgAZwGPcaKuFDsTWCCwPaFY2bTqe3qCKDiMZ7g4w",
  "key17": "5PvYXJmTzUPYaNSgsFPqwD5ZWWra1TukGW6DbT2moyVUd7UhuUkcakBUHQiGHgtdR6UZDAr4Rz8CMo13U9JjtvLU",
  "key18": "5ArKzqXRAEudc58sedDFVkcdmfrbM9zHxY2ybWN9cJU2fvJoiiKo8KcTFwrKQiTkWLJJqJ24eX3UPEBiteJXHzzi",
  "key19": "2C3jGP6aVf5xz2UuNzN67R5WeU9ujRHBXWV6eNq5LjaVa1z4h4iw2cfhWiyqFqmJf51XbNq7UBb24GtLNKAhHRb9",
  "key20": "129oUsjb66qxjByYgGFHftnTmzVhS6bzQ8KfN9K9d4b5sop6FXZRrwsFn8i23sdiQ321JpXNMhFBJukzeXoFe98P",
  "key21": "X1hqj5FVd7CCx9ab5f3yot5RobX3bajVhJ7dUigonDPFTwAHQMJ9L8cyxj9AQH9Pj7KXkKGHxS2XtHgrzmHWJHr",
  "key22": "4C2gZvRfwbyRXvuwrzEqm5QKzwEaWj7VR2uTn5xwcc3hkpjZHbXkv9QMrnLntUD9Sny2ME6RxGbrMd15khhf4dyV",
  "key23": "1LotcrNHjnbdy825MRJ4jSWeTmBWhcSEVWUQAuApJRadjrtENGR8ZFfyK7VtDd6zQ2eXRjAJp88e5jsuVLgdcbp",
  "key24": "4Ck1Fyn6XvvEQZCrg7srFLBzMQVZ8LhDAXvf7QBYeNQAqt3nxqpVWovREcACbAsq38meqoFAbJJeVxs4Y4BaNRxY",
  "key25": "nwiKYm16dq1sHcWf2nDz6ZG25reQqxzgYUoeCqJcMDq7aMYsDHzZJjEUwXxUm4GKCAD2i3VC15pZ42NvpCuZk93",
  "key26": "beLcGrAP3V82qjYV2p5BZNx29FnqLpqwrbZKfRme93DH1MVCwYmyMS342pQdnF94DkitgeVM5fQ3FEbQCMwU6WQ",
  "key27": "TELvvdhHWTxnjKv9uaVv3ewrcfAoaKT995m2jB7YRt6ansJcUuJ17SPzmypsEE3Dw7auBKzJiRHFP3b9R3TSabN",
  "key28": "3LeCkTzF5orkfQWJPikXUDv2ZpCdypuFZgQeoo8AiEK9VA3augXDB4FXJqcXhuidsgKjDbtezs5eQ1SamZZYKiQx",
  "key29": "2nhCrf26PYMUj1bFuqXCCj3siWyRnwpFH53ZpPaggfCZzPTZwVATFFUqJbuqL122c5rDQhexaXEzLypD7q775YeA",
  "key30": "hY49Gwoh3euccq3GU55jKE7GSA8hGtfCiuXeW6DSCZH48SKPWokSL5EwRCNsirrU6heErb3xaNh2Dnef5dtkzJH",
  "key31": "bjt1RheoUM7dZ3P8JbAHedw9tN5VQooKtSkvGnzFmikqUEcTX8ns88KYmnQ2ZwaYmQM9mYkTb2XRS7yjKUqJ8hd",
  "key32": "2os56BE8X9tuuSdNSedqqmaGjqn8g1MsLufvN5iVx8CLmt9NBKCxThJFEZMHLYQHELkUdzCxJ4G4KoX9LATcXMG1",
  "key33": "4NAD9J3WdaaTZVsxG4mdCiQRi5jqEXYGWgN1ndFhQ48sB71XJRYiUCcGXZwC4mkC43pt9iead6aka8iBPr3znG6k",
  "key34": "4MDs8QxaAyXMxBJwKr3JSFZu4QRxkAPDJ9MVkV8dzd4YWCksyuyczEKvb2pxYzeTp3MPog9hYX5qAEqHpC5RhL3Q",
  "key35": "3adVPfMjE4ykWCAM2V5NkG1haSbEczyHKQdpdUQW8FBWkC1DBJV3dcRceQJTC6EE9S4KdimruVgPyjNYVQKV5cer"
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
