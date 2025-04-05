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
    "5qV4okr7SUygDskCR67N1H6wjvMGT2LeSUmHGiUorkDtgvjHVEupkRtPSnaqc9U3dynDxDJJHEdLpL2VJKsc22Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DrV1f7nmJXLLeVbpNjBsCw6bcdoEfDwN2d9VepVGxgrjx2wZcaGdsnAb3sFPNBaC4Xjk2bq1sR5g26CiEiWRzNT",
  "key1": "5AqwE8CLJs6f24nmUc5edxo4ng1RK5tV5y292SKczsE5JPNPL4XW12S23KmtNpYWH9MxT6sySPQkvJmRHP1PJkmt",
  "key2": "32t1cV4AY1qWrFesFrKiVnBiK2Xf3S8YkJNvJUWBEptog8xTDpqRCpvpH2vjsccinHDiKwWS88Ef3YDKaU6LtSZH",
  "key3": "3g9GfCCN4gAKXvmUDUStBfZaRkLLNLC6PUgTMSuj9sp9porchte6E8nyDAJvs1DupNkfFsM1LTERA58ky4gLhRHR",
  "key4": "3SFCmNfJqEJRmtJVsbEqdQ1rUXxQJyRtaMoFpgLCtQvi6cgJ7fC3V4kEUUJsfbyYtPY6c2RPDeW39AabjZHoZPE9",
  "key5": "2i12Yy6gioakkNophP2iescgY5t4VKZcM9PN2qC4TuMuUEDX9CcRPF3jnPQeNCoyY5sQSunrgYSkd8JfjAVenGKk",
  "key6": "5pFmpMP9M8W82fhG2aUr7vahpSoGsq22JKkJNNsU8YhNhsjJceh4u3V59eBNFc2Dku7MYNZ3XQLycTGjQ2tzaxQg",
  "key7": "nMDjRAafsyNpUC1MuGnz5gg8ZAPJLpFroKGQ8J2J8Wi9xSmRFJC3u9GFfbgcfzrAjS8dAAfQQR6LgKCFKDAxXBb",
  "key8": "57UxCgxbQggreXAT2RJ3puu79uPVRAby6HX35yc1vkzU25TZ6N5CnrLNBuZq7KBEcJBuLKcYPoWbXLhTTEyPbvDT",
  "key9": "rWW37sD34jSVRm48ggK3ZuXgP6SePMavVwWxyW5bhKCjwjzHsnR529a6EE8UZecYoMiNYA5vUyDLhpqcAe42zjJ",
  "key10": "3mh6Eu5mvdnwAgMwY6bZeAGsGgkJFKLDatqetVHP1tivWL418FiM6QGfy7gf98CRA4zpsC9MyYWCxatWjmWDPUgJ",
  "key11": "PMaWFP2JPW5KbuRwzipWshcKT39g6VN7LfhEaqX7fDXHxX64iRATxUhqNPXaoJSKFJFgfJ9G8ux4VZNqUkFDmza",
  "key12": "2Zpi4hGBuRtFAPQAbwbG6HcBLNSdzQWoBScWvdkQteDPC4RyUon3miBCdDmgLMT1jfPWVcodZ5HU93HL6GGwxGVw",
  "key13": "GRjB2tcyGdFAPPJyirHYsBtysKC9BYU7KM9xtr96ULgaZSs6D7ojfe6zZHnn7ZxN452CWqYhDjqd65USwyGnAGf",
  "key14": "o8SomN2F2aHZGf4Z2cUhS7shXkL5DCBKeq7xoug9kq6FjBAN2jazGPcuSXBwXpfuhWCFtp1sB81EkPSemZWD7Ph",
  "key15": "3ANfTPy3jFm49FsB5DPqYC7cELYxjDvvag3REh8irnet9x9QRGqMmdsbscnVsFSzyswMQMwUKK1HbqvJye7pqbPq",
  "key16": "3HoeqzFriHT61sUbjYhTfNzL59hPBJgbHYCnSMVswLE5No6KyZ5W1cT5aeDiTbJhsodGjBXyTTSDnq4bmsW5RvkB",
  "key17": "4rUiHJfLrrL88VMv227aPR1N92QWgQoHha8dfqM3zWMS9SCehE9eoQYkfbRqah2Z5aNZsKHLqAc7LPnAFqNqvqzK",
  "key18": "b3bDofEvMDkEqU7uynFPvXkPxTJCMZM51YkNkpDCZkrnU6GU4TNfLnWhPRfhF3VJztChyds1kFGNtKxgYjq1ntN",
  "key19": "5KXJN3t8G1itnZWX94W1QiRoHvDAnSRfsJVSfXceCX1vpUa3UrkXFxbpkNzkym8j3XP9efvEbLtSPSDzjZicZthi",
  "key20": "3SwWKfpbqFfvHgXBf5szcfCXJtnTi6gMAYF1BwSCTivU2gSwfUFTPueoSzt1RGhjYyrMrAHJox831KfZMAsXFgF7",
  "key21": "549TsUGpoaayNnm824JQArK7Xc68WonMo2iqvTKtDfC6DC8L8KngCadVg6W7FLLZ9gL6gGwBRMebt5o7xMcgdA9q",
  "key22": "U7vdZNfyrhZY47MN6rdD2kkT1Wsw1gZvc6evh2uebmVAru7gphmtZ6xjMjmttcS7xKdstLcK1qaRefSN6F2kxf9",
  "key23": "4r1wY92extkJJj8Pbv9B8aLhNUxvgViHHon7jWKHWwgD1PBVTmda1tK2bRvYZDAVgpp7YBE7ZF7Y1UkQVDRu4Gfx",
  "key24": "5jo25fCoMeTrcJaKka4gBr8uKBqdQPceh5caSMbgVVwXU8u6fM73S1uTZDMrbsfJwyF1Ezvzaah4GexFzK5JWaQV",
  "key25": "2SaZMKtCPRia8o7Wa9xUby1a1DMkTPdujjZmmKVyks3Q96nWXKVy8zJ4vzPVDUSLzvtJ9b4ye6zybZ8vcWFBNGip",
  "key26": "5anMLSGLtUarGw43CxSLyt1H2enCBrpEByDuceyiRUDcLJU2oH6K35foQjLVcrbVtYt8qZhTw9v2cKJiVXFyficG",
  "key27": "4vKdkZJaio4Ks5sAoGPch4Zs5VkVbwRwTqkPEksENxj6cxT5bKdc3SQbjoARpLWL5tnb7tZgddmTs5nEQ8GnR5F7",
  "key28": "2aekKGmTWph6Swcez4VmFyjmHxRbQ8DLRkarvytYqqyiZPVrGQq23jALnzAgmrZ4Bpu8BNruiDwcGJBWFGS4BJrZ",
  "key29": "4sABCwbuXYCeBG4RYuk3RmMAxsgwSGszKSByeZv55os5gseiLCQZUZ118FtXviN4g7ePJkVzvwLErCbKo7aSxnJ7",
  "key30": "crhcGv2cMM8iK958WSAV7PKCzfVcxM2zZkGpjmjioyjMtRJ5jMX9HHJYLtWQuaDvvmGw6gk3CMXzA1S4DcYUMsf",
  "key31": "5Y6R6i3WSFXbJv794xiTmvbBCEyT7EJs8bVsWzVcKE41369vr6RVYu4CTr15oHKWqJZkdrFfzQeVfyETnenvgUxm",
  "key32": "2xLDhfBRHPtPUqfVataTVP6bBTYSRkA9eTYBKBMEWPTbXyuJbqqnRzrjsvfhL5JC1wdq7ifhbJKAt2uSy7AfzuTf"
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
