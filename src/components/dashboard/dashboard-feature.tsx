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
    "R1NAuM5FMmCdCLKToZatkkve2srAbKdPofYPmpoyrnSyywLHpp3qgd1xGxFYJL28xJGWekzwf5vnxt1At1pkZDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhXeNHoRwv8cEwtWiHk4Q16mSv8b7g7xgUcY8E1jxkj6brCCxmh9Q1hXaCRCWL3r6EyvSim1MijzRp4ouvv2VR5",
  "key1": "4gEAJTY7haoseDVtU78d7iaVTj5Lh9JkqB8cR5RUWa27TWUP7aTMpRiTeEfAjx3sDXwzDQpt8LtyUv46P5CrDm2A",
  "key2": "3kZ3LTrsaiiMQthzNLFc3pRdpR3fKDmGQDdp6yEdnrbYHDnz1F1hYVjZBYDF9n3erkduwPnB8iLcYWTTHudwukf6",
  "key3": "jWW9UiZniJW48rKv5fguEancGWY6AFiCABXdGL91ddjdNwXoR2PRHDmBjX843MzxZcxnScnYcLLLXF1wsBzkHSi",
  "key4": "5cczHHu39b9cc9cGenN7bvZR2SRn7Cax6e2ejQYs19BpoV3hy9Jg2ediCcXswirYwomM4qB1iaHUg2Qziye2DXHA",
  "key5": "29WGpCvYCKSF3Pcj43z6b1H4dTW3kG4oBDph5BN9QWW2hLAdFpXmmJUoKryozLkDMZR4f2ixKTANWqf6XERRFrLq",
  "key6": "3FJ4PMsW3Scg9LkRf3guGrhnqdJ86VeDBtZpgkAZCY2TV9ds96wjADQuSLzQ32f77ft1dWLFp9sY3ysBYVtoaKHh",
  "key7": "2uCzphfPjhJALkormUDZYAbHqsBPDb5dimjdead5eVavR8KJjqrxBgoi2m8uBoFYBCukdecgPGRyxb2cRGS64mUL",
  "key8": "4RW84DkHb5MsUTv1XLXoxPpdPYYiTxy5gra6wRypwMggREwXmypyoBPLBEv2XodfoBLGbqCM5zAh5LvyGZXQPRCC",
  "key9": "2A1WcSdVUvyZ21cQ8QnrjRRzvMpgaPm7NH3ZMV2dcQWwJBz2XtShquXxBCRaJKpRXekRHTovWJ4QiFPame3vuF69",
  "key10": "5ScFZHAi9eeV15voH9r9Ju2nc1j8v6oGqmqZxQBstUb5qN45RGctZQyxjHXt3ahdhuqHB28zLi7KzhmbtvE1a94Y",
  "key11": "2JkSBwQNDn69WHERzoKsdbpfLs26SiZZwRCZxZAidXaYrjfYF4PA2Tsti51MJwFmQDyXSRWRobggKy4xAQ8bMCjH",
  "key12": "kzRp1BcxLww7t5HVPBhbDgvZoVmphJjVZEXNsMJYNzs67PudN34UF9oy9M64EyDu1UqRCMgr1nbA6tv31qnHxEQ",
  "key13": "2WRYfVhL4cSX64u67z18ygVweBVGTo7f1vEfXfaKXszbsVdAW4RgUM7WsobhaTh16JzCPPiMCoiRfbtc3Ngkca6M",
  "key14": "35RMBibBinkDbgbqkHNPxiwoyHgj1iiiv4ysmjA9psmLpKhHn3n8zH1VbMHtKGvgosgL5xNJ5gkQxBQwraYHgfsW",
  "key15": "4K2SSNk4BVPkdrXmZZDYYW4zGMjus2xuLsRPfz7vAHDLS3VWVFbsR64Deen2X97UqSfYWVanSfmZ7dHJW3xAg1sh",
  "key16": "4CZ35ZBCoK8Xr8HoHaJivPNm7qfT3V9Eh5kup9ZsFR6GE5FRkcSBe7o5jM35gmfBrZpybrxvWVvqgHLAxdyDSS2e",
  "key17": "3fmjnPG8dv8CnNkJeJDAi6v9ysFHtdFVcuAataR3fXiUv94MqqXZz9bSdiRTApJA2nKe7mmYQvPqR1QbcuEdv2yr",
  "key18": "4A2FsoEng6HnZLNNRdCz9qjwVkd9pgV2qZpCuhL2ZeNd5DyVFj7zXm5V6emymGyGdKyKXhxonkThvwS1jj9SoSNZ",
  "key19": "5Gn6TDTpUV3WPPDoqZmzNxtm3JY9JESmeXaWh1m9skEf5F3f6h4BVr3tVWQBJvSpfbTzaeQaWKtoHJ5UV8KiJ2ZN",
  "key20": "3ckbwfQELsuDt8nnJMJyPRjq2CNymBAhQwCf3CG69bk4CDt64SHENyzYQS8EZBV9Xq9fFUQCh3AZxYvvmEWp2ywb",
  "key21": "5H8zG8msdk3zuqAaZNzAyiq1mGdtbPmQV8xaa3M4eRibAooN9yG6G8CRv4yd9fvfqVwQETURiM1AfCeTua9Ahduy",
  "key22": "2ax3PEZioASonyALsLfimuQ8La6qRNDtX2pH4k89fWC7ZAQJnGjFi2XPZ8xvssmVGVjJdc4Y7eseMFM2ch7iWVdf",
  "key23": "26EEMQmpZ9Bdw5pcFoDtDTUWgRwaNxFsrLSNXAvjneP2H8DVcKiAyBFMkG8VoqCvK5GwdXL9iD7nkWQa3MezKDaP",
  "key24": "2Atvmt6dEgmfSDyttogwW35bJDxixYJgnXUSgWjZLHr8dGRmdemV76yjCynFT2Eenfr3QJsVJQaTVw6PTmnWxYUS",
  "key25": "NdKQqHfwmt7wV3oioNq6djXng9eFp9MP6qyvwcRdeusFjhnnZWVjWXpU2Kbno6tVW196kiUFnvG2HQjUA6tk4d6",
  "key26": "43bMy6frFpWcgy8MiQU9jBRUc6ovwft3AHu3GUGMWrQhEB5bQTiNPrKd8Q92jsXiWBefirYAQtEA8Y5KNSajezLN",
  "key27": "3FuSg3Xf2GJQKP34qbgcf8dfwRCqypyLULHk69gYox1DzLh3fX97aAhJTzhBKDxdcmwapFmakhrsuB39Kf5zQyuC",
  "key28": "4rEeXwjk76ETh4RUgHyYM5UoWWL8sXVNsNc2azDkmp3oWwZSWvKGRRazUnp7Ag5bz2kzTVVrv3Fbwz4hgRkrEeao",
  "key29": "5BBMTyPMYMHxAV9wXuEZ4GE5Bs6mDRxu8Z1HYFndQrcnubmcfckDBbbdzoYERbZfVAiEm7qz32aUk5zzbUUeA17N",
  "key30": "5WPKgYHC9vfFX1Hgm25DB17TNwd6UKDEbEZ6PYNwyxc4GT42LFdNRxc7fQxFfS3upcs9Vn1Eq47uLwdzmTQ6KSuV",
  "key31": "3ThLm5zXZK2WmA8xHEdaV3xKTDqVaFZue8BHm2St7VmEoyMMcH8sr32rb4yzjdJjAKUUuWkgPF6SKzLFXZenJyeV",
  "key32": "BE7RXQi1h3MQAHT5brXpVfZde1jAwAGNRgureEftGafNT8aBAiqr4vq5a4HBRfeJxsoeLHu9kSGoaq4VkLPfmfb",
  "key33": "3RNjyhByfjSHmapyRk1cVYqa5mLC49wUJ87aomMtAXSjq86DvNanUKHC7Lyr6YwUaJfShZgZwh1CicyxdjLYv8FJ",
  "key34": "4rB1hgS8X4MzZPVNGYEZFHo6VPHKGfZ2nv4WfZG11dNQNA6wSibAeErqFP4WRKBdGM2DSAh5XX8NzuAGUV3pnAsi",
  "key35": "5KoXmPuPaKdbZguNjtwgZ1aD511srotRdbzfBAB1dGPqaBTrKRKuAbddR2BfLotxrSwmpwTixMHbF7HZH3R5358g",
  "key36": "5FbcZ94vv5dFGYwCLkjhfmTwkDzPJ7DbtAoZw2HLM3mRkzbYboFd1SRPECY2c3mfzgEoiBRtgzEqHt8xjiNAjvkm",
  "key37": "5jdBxzexTDYrk6dTzV3Ez5aUUHLRaDnDNefWuDaYh2r5pNQobad8xNUoCTsU7xbKa78SbV5UnvbVABS2meZHaYjJ",
  "key38": "QDpxdJNALsxLMrsHyAimyoJndaWK3ksyWZRCamyy1H19ACNqFfkTnTkS5pW4GQEzJt1BVywrEyqBcAABvCoJkGX",
  "key39": "1EUgwGdcic8zgA1vGNBd6AWdkFSvR4zX1Tcyo87J9FwPBBypeNNY2Vmi4FnVt7SNBSECevG9d1ieQT3DoEgsXZV",
  "key40": "66zshjZqWh4AeQ4pE1kTWYWxrKjUTKay9LzzR9eiaEWgqAKzkeji8fqtWGMh45ejG6HPuoE7GgQEN4kLBgbMYmtU",
  "key41": "4V55XJLQScPcL4dMZk5yDnhVE8cuzMbRZrTrEQx7QxiQkSKpR7P9xt3abesmDYhk6YjxZmXuvueofi3iP2MUNTtg"
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
