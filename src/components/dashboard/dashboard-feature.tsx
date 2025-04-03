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
    "2552yaNuEcJjqw2n6SENRCqgZVwjL6Jtu8jGsgm4s7N2WBLJhua24LoRhiCYV7xmF1mdLqSGPqCdPaJs4WymV2cJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xHUt5bk5s71G1QV4AMRxCBnhXoduSPEeXa59iX8NLggxhjdhi1AUVaHKWFMbjRxRnMqd7TwQSC3uT3gJ2Y2mDrE",
  "key1": "28eC17tjNj9DS5bn6jh8pz1SrPrvuERcEWG2V2TbAWdzKtncLZCrgZuZP8r8n7Vi33NRWxenHRVaKi7CG3R7c2m1",
  "key2": "37x1RWi9cZBUsAL4MiCfGpnRG3LBdfRy8tg6NpHn62kdH61f2xZSGVQhTZiEmuicEPs1W7Ci1xiXRv88s6mjt98A",
  "key3": "3LVUSrouvTnKFuT8VPSUbRKFSrtJFLJq4oE1edv6v3wysmNSEQxwZCCLxvH93NfggVKuwe9Cg4Yqa9fiJpxKLUNM",
  "key4": "NhGgKx6uDjghmhLkjBKs3LrojEg3F4QJRRZUcAUbPDCkmseoaTQf1ubs7i4vhdxdC8fZgPXgvVsspadqsEdtdec",
  "key5": "3zKuKKgSsPHYpMZbZLU99cyCep4VWue394bMPHwTMPWwsY3w3Jmaxir1aqBFyjcxPd6Z5DxL7f7V5pSeVLNruSh6",
  "key6": "BFKh72og1rFa4FYpaDLnJTjVxPrz5WsUEXEf7DPArU2N8fFU5ZPJkW6eco7jQeDDeoi7ma96y4GT1RUcrPGWLLo",
  "key7": "44mSy473TVELfvGjJXviBmqG1puj2MtFWCTpoMxW1bAEiDhfSUrAcQumGmYJB8wfPZdETKbR5qcP5uSpZGozpdW4",
  "key8": "RK3dKz4wVtRzyY6XPGwrbDqvwJH4EuWBMQ9mUUqyUdoVjwFNW9s3hFcudZcG9jwQvJDd7fB6Rfds5vYfeXd5YCZ",
  "key9": "5PDXyHyKhcVGjBGJFBLG9UWYsL5nZwiMPSYvKsk4DTLeM7m6FRHUjN6CbRgSier6jNYwFs1Bg4zLVvMEM7JzZgVK",
  "key10": "SbYNh4P3UoMmfityad3PNk82S9QK6FSGFgG9a74s4tuj8RtPkuyk5deJo2an8grnPxqeVWBkneH9G4YHvJd8Ziw",
  "key11": "4SiqHMKekuoCjG6pJ3ragCdaPQiS5zCM5jpCaxqQ3BnZwBQ2XE4mjEU6a2kvTGbBHgDZkX5Tmcbsp9CtoQq7xX6S",
  "key12": "3moPD4H6ezPG6VvDD9QEi4Abj4Y9YMGj3vop9Mjhhr1YX15HhzLaC9EZJrXujKxsQ3cB4GiFh6PYzpxDyM986x3T",
  "key13": "49s89pGBhNBAbRGVodWxojTNiNoVpHrmv7Rceg9NHtaAaqByw3GKD8c876zyMQGiMT3FmUNzE4U8NhAyDRAMdGxB",
  "key14": "5rq7tGhw7u6CyVQdpLPH2bqKBoTq28mMke8hq1KAK29g3TapmQpBRWZKtDJRP6GZVgK7ChWYE9N8qaS8LPpRyqDo",
  "key15": "2jqMtzBwHifTnyVkSot9qhRdGF6roVxGHAqf85gGDgv3PCPb3kvzfZsxPEpTSSqkZ4YndKxBZ5yTxMYfjMBHpvP4",
  "key16": "2q4YYuVK8mshZ8xoNAtzA1UrRYqZNL9zthajr8tQBgNukQKj4uHPwqjARXf5xZAFV3esV4Bw366JzddJohWYzWvm",
  "key17": "5dqwj3CVGeTcpzA4HgPYftM5KBrjmCbcoXQzzvY5R1BjTWeSigQ5gKvdUHAvqoBy5soVLfsQacpxfKrJhjFeZsZF",
  "key18": "4oKtiwcTeYskKJwK7Yx5kdb7VVXaE7hnocDfL5FBx7tZD3h1GLoF3qZQVR8jbMc83CDk1kKjieY18LbNVSFaZFxJ",
  "key19": "63gqC511NYSoGeBqfvdke2rgBosJbQjYwD5VanFvqa8EZ28yn3WpzavR5uW8E3FSkYxc1QK89VNfZsgqV9mEAjYM",
  "key20": "41o5Mu9nz61zpe4PjhosDxH2YG3bCVJhXK2CwQMMcKvYqkKBCD4KiRpGivGaxNcSZ2vHfmBMPZKUujEBsDGzGDm4",
  "key21": "22DttLzsyHNEbHcNeqvpimmE97y1pb1sz5yT7NtmvgdvuPMMewtqwMC3n2vjqYLoKLpfLWGFbj9gSS17Aopc7PXz",
  "key22": "2p8J7hYxdX7gzZQne6sm9EnC89iNoNtu4F7cHndU9C7KVwYMu7MdYfWoZeU6QHsLqMdBpFFYUEPiXc9Q2SibzQZd",
  "key23": "61BGxTm3Bix4yAfvMDME2gF3NzYcchxZk3GyGX5Dm9woZw6uZsPP6fDQLU2AVQPzpgBNAqNqsMfphZqKDzKH4CsL",
  "key24": "3f3zPRW6ADuag7jvGBMcbyy8unWhm9XiDpYNNzWzfQ7izAZDxPwT1wu7xqvzCUwn8J1WBU9mFrak3PE9dmS3AR5o",
  "key25": "5H1J6azuzu1izuhwMDs3jfjwZK5gWwUHn4Y1qgkijnYP6UPuF95JzE5DmnBx5LG62jpGiu1T41LrFiGiCVAzbJri",
  "key26": "gNUfwEHdXtqVnHzQ4M3S3TesY4mC56RfMafGqqn6EZcPer2h9fNNQ2oRZCG99b4rDV3rqAc9dT5N7FwrC5hyJn5",
  "key27": "wrkzP9tFcDDN9iahLvFAaKGq6bvMnMqrq2cdvz91kiHYSz4rwu2su2AnQqwSi9eXsaezEZ1VvangKwbuY2ebU4p",
  "key28": "LztV91LgQLPcDo3NWV7nECf6b8twcVN4YMYCWoUM7mBNZZw8NXQX8hMb7kczeaA1Gj9zJwLCGcvcHy68TfbWKqV",
  "key29": "5mrsLG3NDPso3wjUkDUWPEg1jixSCD7sTmK1xJCGdhztXUqxrvAEY7gQaPhzxkSjaYDYTtFrnLGA5GV6YmqJBBSW",
  "key30": "35Z1VyiKmvTjXqw9jy8FfhcQA2DdMPV53ojQhLJqWtxwkphrnbK6U1TLah6dz3aXg9zWKFhoQA3Ae29ZAxk6wMKR",
  "key31": "48uZigAFEPTJNLab2jzhfeD9fXgMpHGuQzMJ1VBJ2YDwFEhYRBa3xs3RYQjQ8ymv7Bdhah3JfRJaM16Zcfz1PPhw",
  "key32": "26SRATdjx8ArCsrkgLTKm5HawRp1JWPb4hfaNsVbDmbFtYoxQ91tSD7atPDS6b7BeFeYnT9kjVcz4tkVSiDPtR2T",
  "key33": "5SYPCfnLpsvMe4FkaR9piUkqBCEgNY9v137EbRhDAswYfaXoMSDbsDvTXR47DEMZXHvVtdv5ezxYwYggVXhC48Tu",
  "key34": "4BDVwRPxhTTwZBszVDz5ogAqCRXDhPy69WZB7xTZM1ZqfEnL2eDttKvztMewyVWHt2oWEfjffdmQWeZYcywtTGj5",
  "key35": "5dsamFa5QJDkJXU7dYKTeozPkgevHRVAzBTfpDECkcpBw6H9g9ckxxcLZhUAi7VUfAgqihyFfY5WqynWT1p1kwaD",
  "key36": "1UtTD1YaozsNmnNDkQ9jQt2SPFNKMa8B3vsJvHGxPiPb6QVCWmj7qQWxD3BMdJZfPZdgfsyUzg1svMcXZCJ2eci",
  "key37": "3aspQDvBhuBReZNX3VU1maD3qDRAKzXMVATaqneLUTGwVEwpySgH6r56aycfMTXkP5977gZXjRAVuQLaTguPVxPU",
  "key38": "4URMyATvWJuTRWnrJv2j86Qc3CJSeD1xQDZKMGFR3uDdJ4wLU1kTYkm9BMCiciPVAyrPW6GPiDY8F9xA7tJNqZVq",
  "key39": "5sHQbdX9uo5hBEzQnW55cNGG9hL7gUbvSsAXE4HvEqc46C18kSnCTgNzfoBgiKc1CG8qR359rawVvGBHw4mo2RLE",
  "key40": "gADYhnUSqWgfj58ePFG8EsavKgfW4c8G1XvjgzMSzmuh98PYKGe3qAgovnB3qZpsPyMJY7pLVpGvMbZGnXXYGcR"
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
