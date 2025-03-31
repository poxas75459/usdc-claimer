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
    "Gq2eooj8j3as5511B5TJufkz5Mrh2H6MmkWYmNDBmXdusdSYhN5UYb4Gokaibw8EsSFVr6HaZsywrpEjk2VK1p2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22waNTnFrQh5zJH4WdJ78D22m98SAiP7ZE1kVT768ZJyERuEAoWUnW9kTjqjGt7i9r3rEN9BVMcMoevpGwKyggJL",
  "key1": "2c9Dc2M2GWg8qh9HgCvVE7y5VJmA635mL5S8kYxSU3mhyBADz984FcJysCRg3ku34AzaN9946NAjTweGA8joAMYF",
  "key2": "3ehuzRy95NzkwpYCmtHM9AfdoB2vGCr6Se5nfJJCuww94Qn4CTNsrpBXBpiyvAtFZiFJACsQwGf47gEn9P59hdNC",
  "key3": "4dm91QNGs3QbNnMpsqswXKGMcTc5nt4iREGbYihUsRF1n9bTcWg7uEpDLYNrxkZ9zCCkCyARGBakm85BVWFyzseX",
  "key4": "CrSTnseTD8noABHS9cxhPpn539j9V2QT5Psjw4h3MbHLGcMxvvRHwKbEyKWmfjFBG42K7NCUa2PFhiXkDd5MqnT",
  "key5": "3kTLKvwSE5bsQe5JybKScT2qd2xNGkcSc6Y3xBFTgVEmzrCUSJy268fvE9MPkuS4Lq2iVnshaJVSeNFVPmDCVqR4",
  "key6": "4taAMZX379uuVAzbw2eNnCa4SBZiuNAHtJbm2Ec5XUX2bvkExzKdTTcR1EVzaUHGYLCi256tFSLJLF9LdG3zExfK",
  "key7": "2co7uFrJWQ64spcsuZB1aKoYYK5YEniJb5TUqHkCpy8te42gVPVUzu8iJrEdskTGA6JCQjSUyjoYmJBTQUPaitsh",
  "key8": "nw2pxutuBzaaPdjcHmHRAnV5fxAHTJMJQntKAVNoBcp7VbUtWqAXfXjEVC2zAF56JKn9Vi2peKzkZT1DzJCu9U7",
  "key9": "5NEM5tLo5ZVq1KEsYE829B1PwHAT2ibXWGy4wafKtAdBC77SCpC4w4A17bb9G9hW3VMqWigoM1PaCnzitez6DSP9",
  "key10": "2UmtQaDb8Ti7rBJwCphjkEPoqrqJFNoKuv1PRyFi6WqmEAQ7BDNfBoMcrEKvuugJxD71SHbNj9V5FnLPeUoGPJkj",
  "key11": "4Ev8WTR7sr13f7RZdddZvmbzKGpsz9m6mdi2RuMAWgWdKRCCghDBeALNf5V4C6ozuuTRh3qQ2EHWHvU9CSR4tTCa",
  "key12": "V8S6yKJvLr11djxcrvCWMbU1CwmyBQtxKhdjq5G8LkYwHwXHGY4qdaVNN5wFgBymmqDiSKQ2faj69dzuZYZUQCy",
  "key13": "2puJqLJCSbNcysEqjuu4ejbLkMUKXKcZ6UeBDxV11W6LkUyGCQne3ddFLwJ9ssxoSoYNaRaUyfvLDJp9dfuBWJJu",
  "key14": "4FWB7vdXVTbdCx9SGeuSmebSUPjqEstSsCvCr6DqLEbcuPXHnzyXgGEe2UAmiSQMFxErCLTHJMEcqYCPRLd1ArzS",
  "key15": "57dfJbHQjoFBKQj1rWKpNKsUdY8LHBGEbc8JNCpqfmu9YWPR3uXZQapryKc7doqM7HeMM7ChyMJ7eYGqYq6QsYb",
  "key16": "2dGf1wpbcsJbUWydee6QJ3Qh12kMC2G619EJKUsNPu5rmxfKvBDVW6JmZiQPKc5zKZupvZu8Tn8EWdtJUMYBLofd",
  "key17": "4fsQ7TsmTyzfyBYQoLcrkkFEdYagvQ1mEtSC5HWTS415VxegGMSVBCutjqfGKeWWJcdquUcHUr2EYvaXAnFiLm5w",
  "key18": "5S3KwGDmeu8wjscS3zMRChZdyuJ7rXu6USqudwhdxENSs5uuH8pDqFrYCq5JTQyD36ZvkTRpMYMMCcWBGWjswtDL",
  "key19": "2reEFuNe9UW8uW3xbhtyweXmrGMeMEdiHh4zqrh2jReqqf5fArWGLwFCHs6s7tEKHigs5iv3rukegshhCbHjSw2S",
  "key20": "37mYosrVqwYDHfvUW77c3q6nH2j1h8TEwTpCVCT9simrbstycf6pfhHpkSW5pRFA95ZBE9SeyNJ7x1ePnsdA8H2z",
  "key21": "3DqsRSfvpTp8HW3THEPg9hWAdFRbmvEb3x37Ao8VdSUFdLwGC4GW442JhKSjW843Mw6scn3Fxr4CjrNCLqjus3jA",
  "key22": "2NvxnAQrtwVZWCggM5LXA2Sj4XEB4MyUZ3y6Uhd9av2wsBt5PipsDteCDfKQUZ4w4jwdC6af142NDqTytY3XJDQd",
  "key23": "WfvK9rheEKmDXLXMg6k89tmxyaRieCMHiwAk3wbAn7o2CQ6R34ZcLnB9gJZr3boby9WhS5ALp375Avz1xWBgki7",
  "key24": "4snTECTpKmh68aFVDPKpuYiExoWN8aRaZo9BJd8tYqCjc4iMBBKUEswvegmBQDR1bKgHSXq5NpTgMZbTe6MQJ4Np",
  "key25": "3vVb7UdK7ynZpDW9dtAoVd9AWi3RvgX1MoqndZM5NcEwdB4xTdtjoujLVWGz2J1CaeGmaYYwifdYPATu1E9BYLz2",
  "key26": "4SMSYSnDDiy4D38J8orGbnr2spMX4NC1vViKHgajwNqCUKUn32iimr5T49pX2KNs3ohkqk1ziAMZTa3JjD3NeH9n",
  "key27": "3V7Wwqpc2vxTU7MwDRaRLF4PNHL3Fa1hD6N3EYTD6JYjyguw5hZhxU55uj9M8YzgqMgwgyBAu8RTwrrfrNq2vk7p",
  "key28": "32DEsSnNkqUkP2hdbbSpsv3aVb6pboivQ2rqnc3EjhHUM3aSEqyLm2DruSU95kzibUXtFWFKgSm12gAjSab7bvPJ",
  "key29": "46MCy15DwLAf546emK9McxvCZhaQvvpZhEGFHo66EvndyUkQ4WsCNPe6tyWTyQP3qyyWiupCPuRjvFwoFLPCNcJn",
  "key30": "2gP773YLeTx3q6LLZ7jYkQPs2Tu4t8C3XU15iYD1R5kHUjbFYG9zMnsNBc8x1UkJznnCaXCTutwdhkCs9Ww82mtn",
  "key31": "28tfTmXzfdcXokeCTVfpmea5keqfPQ6BxMXHPxcPAPwLyofANTTkh8EEQpdYAupAQqyb6oaquTC7YUQiursjcNxM",
  "key32": "2eyvmw8CwGCr7mxXUisFA7aE2kvLXdaa47dbD98ffMfGC9SgcmtfNm8cX3JGkqNPoap4CwQEpscKMd6jU8BJmbj1",
  "key33": "5i6B6z7Qa8WACDgeAjpDnzzjnkmha4fM1ktFw8dDVhEpNN6LczHN1A7TZi6LFzkk5njv7vnfA8BzLhGLa3KygMsB"
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
