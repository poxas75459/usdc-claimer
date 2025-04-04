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
    "56NTNLP86WmpQdCNWgt18LNYDPCPuePs7VSvmiSWfd5XyurxPBNnVvDqAYs4N71KtJqrkbjt9gwwqf7ntuRz9Rpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5vEbjAE2A8verqcuJKPVyzF8BvLSnt3N4pdBwepeGBc7pEm5Ur2HfiEPmoucjqyVdyMMktUZGACxzL7qXMxJ2z",
  "key1": "2QGQrXcKRqcCHhEd3gjNA6cAYB9qBzXXtzWWocv2ve3N4YHZzvWbhKtzKiMdmgmmjxEZMEQiHkbs3tqjj1nKUjoC",
  "key2": "4KmtDMQvppkma8mxuHMv7J6ArNjCwzDPL328GKqmZj7pLFGnsSsKoYShutF6BH6bSoif5xChe1mDVaRH32WRC1dz",
  "key3": "4BtwxFKta49z6WCk7bTJYPYe4dMieP2fjN4deXXDF1645QYF9aRWm3jA25Gd6jJXVev3YbDCbZz3UrDwDGSoPRmu",
  "key4": "2oiQ7vcm8aMrcBrxjSAW7Ejq3ANV3JY1CdL7igvECrF5EcQmZQCringumPthmv7yuSKvWd8UoU3vojdjW22FsneA",
  "key5": "2iY3CF6BpJ3qJboqqJF3dtr4JiDdLkMDoGj3ZxTXKfVGb6QHsw1KRBnRZi9DwpJhEnPLQHoUBgDuRjkizkeV9X6N",
  "key6": "39tcaTyEMRu2wKevbboTgafC7cPEkrKieDx5jSGepUoRefqQHVYkFFuCdeNWTjwdKBaJCb8F18HikgP7T3KR5sNX",
  "key7": "3TD9kSNDdA25i5qPfAMUvRdPvGaLgJwEUePuMqgpfdaUB9CuLngNjK1QUqyVSPMcku5a8T9pRb7WrYikqTLLdMUu",
  "key8": "5N6TyRZfxBpfkNrfbVWKYNabcSftyZTAgmyiFzmDtByErbW23tbkLYNyxiPsCHtJavSmfhYoLm1hwUX92MNWi56k",
  "key9": "3UgNPh1EfwgBqyynk1XDu9ui75vPYyiD5WU6X3HXK3k42AGZ2SrpQKeJW7fkGii4HHHjJ2NEEhv3PyZYXYW4mpEM",
  "key10": "5cvqfdEZyqEgPMzs9ddWZAzb4WdCqRiv16GqS1duHMXWvcS817prTRmMPFrMff6VyWAmd5RPqug5s1sAo8REzrVK",
  "key11": "RCu4EBf2fjczHkTYrP2i7FGMpApZU3XYXWQEhnpiwrLftVZeyCq77e9DXsHM4pK41Ca9iUZrrL5x8AQkjo32cuJ",
  "key12": "4Jd6zDqUa2hPvU7sNAPMrWxTPMUwWx39e5Ac5SD6nNjHttSJPeGRt3bfNYeNVhGNtdPPbSf5tEsrozwBT2ecYBbP",
  "key13": "65jnPdopMEShuqwxNaL9eX9wFRvCkpYFDGDLzxCfYtA9rJJ1HQiB5312uhXgMUVJhsqMDq8TBp3NGLoQCr77rVEo",
  "key14": "5GFcKicpVbZMyinDRgrQFMtoHPQcXnCatAKYwbh2u2GJpfqwr1Y3WpccarfGxWoH6CMopdQXziaRx2xdXLu1ayN9",
  "key15": "3TGxR64VNSndfCwgunvHKzUXKnsb4K64XLnVMMY98gzV1YvGcM2t7J2ftt3TA8zb6pTAicS2CmJbtNs25j5MSc43",
  "key16": "255X7X5u3QEq9M1qgXQYSbhxa9qQaSg5Vwm238GCtPwzdN6GAbr241hmP4Tqqg1ZpaHCctJrnTKQumiuJRnANbiX",
  "key17": "tEeTHdJjBo3kYKgYpSNAf8Vd6epJ5BVESdBC1Rv6zftZovdZauiD7gcT3aQnST3VKartYzJvvf2AmwZzNmWfQLU",
  "key18": "4WzNEB12VSgrHqaPdiUf2Sa5wPuNCu9fM5yj8nQECUjX7NGN34kaxdwKN5WDYCFTuQ8nTdQ3ToDyptynCvjA2DqB",
  "key19": "6Ezb4yVwfhGLWd4SvJQdQHTnEp6A5cfUkiXy8jt92QP85NTG938yNtHTEgCYragody81aBHmVxV1zfTdqRhQABZ",
  "key20": "W3MmYg9HxEFLrYzhfJL6Xtr8wDqe9t2TACWryHWvcNw2G39ijbKMnEm9BZ9e9CRxTHwdJZBeoQmsb3QgBBH6Uy9",
  "key21": "3XrmS6h9cXMukkLdjCYV2HNDugppAU4oaB53ceSzURahgzaVi2DxYZhZF4YwBQ3xVZn5HkDETTduD6Fjw2w2vJV5",
  "key22": "Y9mFwc81mwwbyMsLss2kyyVDYd7E3z6GKCxGPnZoSzaM2PMba1vAHWURRNvWaoTijCa9x5mvG9igN7v57u2YEvh",
  "key23": "fXxGFzvbJsGojWQoU11W9j1PUnCUEo5Js2GLiakNR1okGqTEY4YnxgU9Nm8eHFcfmV9v1y3LK4cHUbpJ1PiniJy",
  "key24": "2D94FeWbmV7aTVRUR1KJLp4F8Q7Sex7MyU8SsMTWr6HmwuT8SqSpSXtkuhqGmPRn5rHA3u39EyN3ofoLoabUcoER",
  "key25": "5omDJSzNvchXxLfmjKJHateBkv3PXjgBSY2MddTau6TXMkRZ3uo1TL1h8VviFfXKByFSjcY9JHAv5hpv2SZwv2ie",
  "key26": "5M1tCf9mCz8SkLYGDDi1MGhT5W8fjEhG6Xw3xvFzqvHFSaH4pDxx4FeSceuPvnc1EYWePG6JYqRiXnRqqKgjreSo",
  "key27": "3qFpc7FV91qhmP4e14qm93QbiziRmEpLhvoTwLiTxhFRuawrJ2WTtFYGkSyAdC6dJEXy1aWNZtLFNyNttyoaVai4",
  "key28": "MFNHbwFUzjDRqfdXvrW3msGuN9J6LLqPEkCK998wJHP5gp21VkorqSND24ADP4ecNjJ56KdXeRMYnMemfVDwFQD",
  "key29": "4Mq3yBRsBKcJ6TE4YAYQEHy64ShBimgEewuAXE5FexcQo2eFJKaowMuonqmp9rZm6Rn69TFiBf66LWShke1kytFk",
  "key30": "2x9HXFquSrhzpgNBcoHFvMhCc6yaYYUACqwSTw4cYqVHRpyC1mzPsX1QEqG3NqoZPfYtCgZVE8uuiCG4YFnc6zkj",
  "key31": "3AGKHZnt3rGNu4S3fJnAWTheZfx4ko8odchAgnPXPnXFT2K3rFwDr57Tb9H8CKFp7TQSE5JLL2rEBiRXkBKkCNT5",
  "key32": "XN7SngLZWL9AjM4eJ8UaA4LR6VcwpPiPsjfyHCbzCcF3dvWeWt7qAU1upnACXq2Agtecaycd54i9ABniKL3KXmS",
  "key33": "aFnfSsuRzSSr85Spu7oD7toHsK43PUMXFLMTRTag5aoBb4TcgBJdpfQfdAXzXjF8TbmQ1Y4TtitqjDCGus6HZdn",
  "key34": "5mx4YqH6fBAghZSSQhCJJNpYQJXmPfm3VTKCEyAzhRBXsoixTZZJUwsx91J8fUYhayLoGnUYpEc16MxPUhSqLpCb",
  "key35": "3gGGEG9tSabBtSU55tKcMjmS4Lkp4h38TLVUXPM7f38xLCEkGhDDZpYZV1FDLZwi2EnvmFgganJYQX3oK5nKwwwr",
  "key36": "2Uw4Y5ZfpbsM52PeSx5zxZeYD3EVo4KXEFU6bH66seBw74MzcK6AmXFayGRju6HvcSLQ797BCL1FeLf7Pn1kwSFV",
  "key37": "49yzgAkPSgcC5L9PjEmKYuXFeHVeCskTXszZZjJPDWDCmNz3UrARorCRHWrNDAEzpsK5TNEwPcuVAMJWWmEKUaM6",
  "key38": "oXkVWDyFbxZj6SHfEXPYi72e8EMzXZw6RoPgE2HmqTttLZi2VSEQym3Sw5PG8AfhaiyDuxKAMicJCRPr4bbP9zR"
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
