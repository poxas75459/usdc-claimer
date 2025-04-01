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
    "Fk7br1c8u2NmAjTq2rnLcsTCqQW9hMegnRHjt5Ezzgt5PGhcA5TPsSEiPBfhM1JLt2WtrREbXJSydsfYJNLgxTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28vM5KKZH87Ms23xgaNYwHJejoiyhutTTZWjYXp91KG6LsVvUQYnSyBWT7qtw2V42jaK1HZ85AHSRdXFvV97A3Wu",
  "key1": "3aSkDhB5QZ1PCP6KZBWtymbPxMFt3gRE8bv7ezjoYKCGrBH6NJULB6NcNsCqm5VLSYsvPz3H5UTo53qXcfV1sAk4",
  "key2": "2cggUbsBgLBFW5dKmCeAPzre7nrvuWwzNpZqwreTND7YxWhVJ3XqH4qpP4PErgoxMCGsKxdUPqakS3sxrBAr9LrS",
  "key3": "3YjCEMXQCiTcPy9gzANeUpcmpsZS3xouqLNxfQ4pSaLHAHRDJuLvJMmuu7c8NTwDBmunPN2BKLozWuizPa43dwR7",
  "key4": "374bLZrCP28DiNSQmcTv1y8Lnjyx4MC3hzuVoAoHxbyZKxc6pxL6FV7fWr1cfCEED13LQZHpJK2pNR4fQcJZbrzU",
  "key5": "4uV3z2id8KLaXVFig81tcjTdqk1HWtnb5J9zBwFtcRxMTwBEsZ1mGHmCkPLe2MhjaWP3UtPjVeAMdfU3LDo75XVc",
  "key6": "342a3N2CWpLWEVyygENfVXLmB5eeKWEYuJozuKWGJmgspDHdoSsadRQv3m8DVCk61yFdHnNFXua825eoQ4tpy9AF",
  "key7": "UKsBUNNDG4iLTJYUBRjXiEvpVxgALTq865S3jSiKPJzo1FSTpvPniW2mDTnQbaXvCKRqQzSvjTtYbxcpRDNyaGg",
  "key8": "3Zvcuebb2GCNW7FmVbx5GtvFf29ae9tehBp2CDbU3MspJtCF6GAiGUpuHvB8eczjjXXCwkYE5RepcAuUZyct39GM",
  "key9": "4YJjgTrL62NCeYzWbX8PEDnHPMW66CvC2SF1ekjnymSwvQX61AoqozERqdDWBwwUCMZ8ynSq8fFaiQZKJ5WEBXuf",
  "key10": "6r7rhhW7s7qLEGngRgHS552Jog6V4W2bwsyHY5qdTWbJLCwpzvdhseXxHT4yyGnxh91qDNd9n8eM76Lr2urvJ2R",
  "key11": "zvagUWxzkcWhqpS3zfm4uEizPXS3q9PztNpG2N7YpkfmNy6FxkCY9LzU67zeWiirw7q9vaG3n6J4hjwZWvPhwvD",
  "key12": "4h3zTdromWjy16rTPMqoVf4sntgrYqKeuoZK7myi35KsnQBLuibCkc3s8QZSVo2V3DxUPTAT97y9ixYRiNKWjpDP",
  "key13": "2kGNBuxrH2K7iKtbKFv8sXX6u6Mvpx4k5FndzkDMihd6VfJ2SP3KH8ZrePycgcX47J4m46v3q2NV5rCxweyWX1UJ",
  "key14": "inYXEykWD2XGodCqhTZhz4exhS1HvLvnVeMx4jUzfRGRnF8QRkkoq9Z7TuKAyb2M53iUQUziCfSgRBs9RkzjA4o",
  "key15": "4Z499kb35oVLkZ6Xevm1Nierw53bDPkM8NPMHx45z6udrFALFdJdtGogkVGmBViZPPk8nrrEsfRowiJteuth5vyU",
  "key16": "5USN14PaG7gXXC1a4WSdaE92hN55hHRhqLcDYbs5rjGqNMc2Bvk1BznyRp99ixrbG4A8LZdfARd5sf19D4zRWHr",
  "key17": "4rB4CnPA9B9u5gtzmSvxPGXUnjCvWgozuhTqb5BCQPLGv25c1p5a8aNx61Fuc42Jj58G9ZjU9PSKCpjvJKVL5AkW",
  "key18": "vNLnaJuDLMe3xSVcpANU5SUbc8WgPCoSYHZpJiQs6BSmjMigRMhXpkgz5qbaAdSrdETDEAyCgg4nS7UqDx9u6EB",
  "key19": "2agt7udoCn5e85eCsUYFAUkvUP5rcMRiPoDnW445DUZ3Eus3ZrPQQ97eMsXWAvtCteLy5SwH1Wb1QRom9P5oWsL7",
  "key20": "5ebssxTgpwSJP3UA6qUTScV5qQ2r1CvehmJxkhz5r3gZCyhFZUyLSBTuX8cqwawRUjeGVwLGbKQAjR2JbnTXn2i3",
  "key21": "2dwzuVjeJdzYa2Sw84EAAiiBhaXh5HNkfokivaPSbMJV8Coxp3ZoZ8bMGmhGgwP7pFqpWyeQrJg85dGCmAbJzJq5",
  "key22": "zZmbCyJVBM9vCguGxSTgc12Pq1pbdzxeHMiDHzUWmxRgCudSVx3Yh7EUdiytqyarqjHozo2ruvrZMmUHuJ64mxk",
  "key23": "2k9xztzpMR89uaR3YsXYcVR22aVqw3UxFFEkPMVwXa1kpSTVduEEmn9kjferQzy8Fd9FSGNjs8TCWS5B8HFpaC4f",
  "key24": "jhPRTbp7bbyYm7QJQdwsYU6ASn27REWv1vD8TuDQixWPrZBJXckvDSwVohT5bn19dBGCBFPPRhrCDRDtoEuUQcb",
  "key25": "uRgaUAWPywjXwi8Y7Eo2zHq3f6Je9Kmrwt9umSs3umWYqP26GCQxkSSHiEteoqJCeqYZLk6c8Fy8jgbuBJJKfHj",
  "key26": "5UqacBqFtCU5Za4xrToFVASgezrrqmdgEPgP41eyamfcq8a4s5nF1hyDGTuiVHSgzRPm3uFUYVJabt9w6cEPHyQH",
  "key27": "4EJioqLda8j5EVqVFh7eCejQcudUiPPPfTUfcsHbRdkABLUbFM9Zi2fi9ZPAVxaDhdvp15pFM6RXSHywHfT1bXCi",
  "key28": "3TH2KTkV1PFLjQQXpECymte61SyiuWiDxLRmwMD2QDEVfxEaj67tCNBqgZ24K8tZTEMFcJLdRfxYnSvaKEDWYdBU",
  "key29": "3nqUmzmvsE6yrisKP9bvKPJ7vNKHy6ai2Cg7amvhobUU6GyNHEWh6sFM9BNbGFBZxawk6MjiL5Mo1fDuqLbr6pBn",
  "key30": "4CNmEeq2TqwKVwbPcdWYHDmGxrNgo4N16zUesf7L5WjAGwQz5f8vTSZaiDKjsaiHht2zWCPXaojdNz1xBmPaHVPJ",
  "key31": "5hzykrZjj6zN2wwetmQF4j4PNg9gREhUUHET9cKezqPxDjhPqBotk6vP6XYYT5fmAxmCrkVuq6A4cRJnkBgGAUH7",
  "key32": "5GJHtVLGQpiu8ocfzRauuwTMsokb8dTwdJXLkVLRNSJCsBBs2K9gXqC5q89q8QbR91RUod4iozqS468SzeMYZQRk",
  "key33": "2UXxvgKnLuCSgE6HGY1yhxtE8RRA9uH6YmujcCLJwL39CMHwKhH7MmkQ6a9CUJDYWr1pLiKiw72taHa1vostATDA",
  "key34": "a99afdSfz3aVRWefNmZsEX61kHGTaJDND8bEWW4Ceyi9C4z4FJo3TkLHLnE4yNwbVfeB8jaxG3mSNhbo3vAgavD",
  "key35": "4c9j6dshDAJuv8UFrR8K24xCJm2e9HaxhkEeyVZ6EbBXUT2wBnKqe2EeyMbwXXdikWWdVN8eKZf2wJSKbSdNFXPH",
  "key36": "42bQHZFU8SVMmMFmWcAdLjJkDj9mioMXBoD39ShrTkQpscGs15Pm9K5Jpn3BcMTNrunTKux8X4ty6wpKC779jmX6",
  "key37": "5mv1tFp6JPe7MTmeqB2sC48jsUccLsW6uVqWZ1WPxRvWPSCLPMi1fnyhXbNmJkNTwMoywx6hMFYE7sdw2Bt1asE8",
  "key38": "2wNJq7BGvDbuMYS7QT1XSzsqMczx3NVBejAyc1ek7hGTN5nm7B2pCkXK4GLyTUAAGvchEEFiPhhhxf4PESeZGv37",
  "key39": "5iu8xSWANv4tR3djhSggQJafrzv1LsVjC7pQHqEGhc6TEuBnDzrdSNXcHm4uJchtFV5FgHEPmL24G86xDadDS2cZ",
  "key40": "3xRtzb3a5iXzj5c3t3ZbLf4CLS22iR5MAU7hPHDaw5MoFm4USZnMjWaG4KS7YfWFTM1uSJbUJd51fCXBt3C9emSw",
  "key41": "3QEDkRMtoYxqDpikTMxz5iV4WxV6SiKS2czbvfDzh9ok1WZLA4m2PiDwXZx9WWu95wLMmzBKdUbFsbzokM2uH6Zs",
  "key42": "5K8EQ7hf8mpF6P9jSZSQPj77meqKKh2VTCtMJNwShEwZNikw2hkpvcXc4ae9FDbFR2n9CBMfpmQLnVzkxSJQL8Hs",
  "key43": "d6N4Ej9GudnusMMwKTmQtqUuo7oLAVv6UcFByq7VtjVeiZryrFk52zKUKqiUi8PiLbGFFACD6T9vHzMgtqGkCXG"
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
