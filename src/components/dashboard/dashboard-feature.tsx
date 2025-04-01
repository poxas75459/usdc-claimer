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
    "2mwXpkdwEoXxtypqzCov29XtAN6Lbar3T7Y5m9joH78SDxarTcnEK7DRzzB83DWvTkk8KX684MkFvkHrNxpJK9Mn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YwMU4UvXtWNTkc2JqtLcgxDD7w95hwmgttUwtNv61T6ioSUfGBTKs8AXQ8Bj5bi5xAwNbFy1xVeBn9huVLF2hP6",
  "key1": "C8MQ7SC7hbT8Bnrce7sw95Hm4D7FA8Pd11aA3edahLhAGYNPy6T3nwp2T2tfcTvXby4VnvZjTaRw6L2hwcwE2if",
  "key2": "5cPSiTtfpoQZjt3FwnLLyAUSq7qYAvKKDLdYvDf2hnpph1811DuCKNSDGji9D6zWcQD1XMmhG4izGSrRNAxnFjii",
  "key3": "21HpWBb7ypTrd2xo2yA8YqkWr57dEZtjeudTaeRD8gohPxoyv536yyWNyazPP9CJS8SacwkMWujf5R2fmE1DTrmi",
  "key4": "9gR7JNKk2nCU9LKV1CJqxKEG6Jy5La3o8ZjuBuKRYcLwhww71iGGBm641dZZNcKrJnTm5s59FoiR62iDzF5FfFR",
  "key5": "4Aq3CqGFfjEGKz5NP6vmzuz2o7mx5U1U4xoXwnaXLYdhMQXVSe5brQGTnszYiaHcabtHEgTaDY2D6vAQWCjUGwwS",
  "key6": "5JA7bSZSzjK8kkMCjzTj5JFwF67iWzsLgHbzUn9JgKnDuAGZvVoDYYC5MDtadtHx7v5qEhX1cFbdkbxXcSuQ867E",
  "key7": "2QB5mFqZEGeb7ErFdodzvjpxPMaisVVLNyPFKTquYtdGNPZEsYdjVYEZLouRape5Z8E5ryL1zi7Gcn5vTARcFAW5",
  "key8": "3ngDet8tTk6YzoNTQREC7QhkJ94MdE9nvhEAzNG66g7jKjL5DHaMXgodXzcSQf7wdsq4QM2zVCaiUZ5MZnCswLw4",
  "key9": "a7hhaBeawcdbaPbEzzAzouX9YEMGQ2aDLHqvTx6L2MWBkB17JuqXL2tDTy9cDD53FqcXhguucngppkgURu3soWs",
  "key10": "4XDapoNY3s9FLV3JhaA3sXPtg1EUVpnYccVXagM6C5tG7eCXpfobAz7pZZxSLng91YAfaHAht79Jnyy5AXvDsSru",
  "key11": "2VjJJxpRFP3xwPQUNJQpxTHXcGdcCfSprxZ11YUnzDyScWWwhHVdURFbebLpLUCaXzkeDtyGu1UoBe75mqdRs6DC",
  "key12": "67SuihuTXx4NMXSu5aAP5rxDSuG6YEQWrdymjLgg5TkrmGaWRq8X6zU69JodPGprH7XBAVvCFqMsKJX5natKnGVi",
  "key13": "35zTUX6pMuZLu1qGQrT8fLZm5Hokzyn7LprJxkQ1GckFnrFNDQRFtC4w3weBcmGC5akV6gQHgbC9T3DXHonLJnNV",
  "key14": "3A3ePyrneHYbFLCBgF5a1iuwurp2MVZKEpj4Qq2grzPwne2k3EVZSvdQ1h83aSUCExR16rmozoSw7pvGCAgbBtSg",
  "key15": "5HUkvubJ6YUrcF2iJcN1Za51MmXpLg7UUyAWS26pnVgABu2bAc8WdBexBERju6wQjLj5MLB5PzgVfAbu1dyqjUHw",
  "key16": "LTqHjYhpFPGTqMEFn6ARchQ1U1Jsvy945CZ4XTxXXjHudf9mbqbZDF62i4vJqvAM9s9LeUqzC96iEaQ7zDj5Prp",
  "key17": "2t9KMie6iiM1ubLQh8eEzgvgGoSpbAJhJEQPtvocFVKSLHwweGgsbNLghPQL8shG3ie2iKnMNSYnJPnKtsBsc4Dv",
  "key18": "2GQ6DaEJN72Hy6HndNGSDzJgtusjRYuRPibPKzDpimMFh2aAL5YV2EUsQWMgDD8NXZDDiUSTdBmNhzYp4WYJ9HrB",
  "key19": "3iP9P6rdcKSSbi59BeNk2ZViGawXTdHkSfzARTMH9soZ9Atua48Bd5VLGqEKP88tXAMAqLB3iTWNnPiz5UEetnE",
  "key20": "36psooC81C66voP9aeGCYtW1kgt3j6VAER2LNFTZLk5Ddi6Cxj6FECEudMM2XEP3sKYTgsWc3po1zR6MoERp94iL",
  "key21": "5b38EAzfhNuCkdYEKSmtYs6hxf7JChqrdjzjWqKPynZqPHXJ86hgJRut6GTQvWK4avUTBxRevi9Eijbb8P28hXsS",
  "key22": "58bbe3tYfBZtspwhWKeEeebobWQWwRHStVYVH6hAEQLCZbKcbDYP4HEccJ592UCHSWAtBTFzZ7cGZ9ejnCSkk63F",
  "key23": "uS9GXwFUGmdZdHLVyzMuQaZCFPB4NL3sifrXTeuo83ujb4uqc23YimQQV3Hzn2cMMPa2fGmsLar5M9nvYdKATFS",
  "key24": "wEetSnaQTW17kGC1DdUagKhSDA7r4s641i36CsaJawbR3N3UP581ou4fJ8BN5Bxzvn8QRazL7NSv1ARhoKdekD6",
  "key25": "4s4jBepNBemqA3ghs6eqdL8CaSMKjym7P5d9LYzJESqVhg7Pnn56jq3CADDjzewJ813GEQTvZSjAS2WkbxfB5Kty",
  "key26": "57tTyNDchNBKAnAWYDAopHqDUjxbWBX2e7M8gJxbLHbWZMPFvLCDSQCLPGWKiy3W4DtjUNbbWXV1D447gD74PL3w",
  "key27": "3GYH2c5TP5JTCu9sayjQMnDyWQvKG9grAM3baUjAqtV1iKxJYB1emqhAKHJ79uN2G66VUYCHBRfKEE9HdTyq9FMf",
  "key28": "4eiR22iX2hVuYSZeSbvbyts6vhm5PbRTsEQ5R24jeGgWU6MnyNscGiNETYXfeSPDHukPQKiSUjmtR82bRqR1eF5c",
  "key29": "2cBZfuAtMvt8gXyXXtYUaKgYNshBBPJm1tFv1kCWT3Fij1mxsdKRxBrDhcopkd8yF5qrhV3VSnzPaDfip4L4NSQr",
  "key30": "2fqxCDRWJdN9miKDjz45KjVkycDp84srbfpX2KUmA4hh3YtDyFdLEW2oPvHQ61PLZ9m7HLH8SbvDfZshEWtkEyAm",
  "key31": "J95Nfx5fxnXoej1Ckm8FxjWU1LJs8sEpMuSZvpzNrZHqeq8K3qDtZPDLF5PZBixsGe7Vco221LP7NvDRTuu6JFq",
  "key32": "3EwUQwvwYgkCyGKzHQY2rNdLRmPB7egUxnsapsBQfFUXSrniq8iFaYrjHGYHS1mg8SJ6Te3VrWDPdVyapDTdXRVR",
  "key33": "5VAMLL698maftgFJDamNAfoeMUWSHJFXtey6XoEKnKgjBGB7EvEaQJAeqgzqwQhLkwFBsfVUAoHevLom99BkDQD9",
  "key34": "4rDXAww8raWEn3xxstGBgx7oMa3uTfwT5FRBAXtmqrawhH8qv2pkxBa1vFQLMXvN85SMfvbRKDfycFQBCS7NpL2F",
  "key35": "5pwhf8bGEMLXLEdPmUXPA8MBqfxGsd92YU6pmVS6EJp2hZN9CHifZKmhD5bBP8FttDTx1SL4SxnhYkA3fPmJeVac",
  "key36": "3YsnJ6vixgQ1KyQpYbbg1FAxuMWDypkYVkhe2ULCRwRSqqVbTz2Wcsr1zFcJiJip8Spnuawys2iDagEgtx6yA4AT",
  "key37": "4BvpoVGZzxm6EBwrYg9j8VHb5YYDndLT2upRdcmHaxUSPBNqLTuXwhVJoPH4623b35z6dmZxfpunckHTish6rquJ",
  "key38": "5xeq1idkCNhRwak7iPbdFC2KMoGKKrrZuRwoxeeFkpmBGxfZPhcjNQizTW4heW3qFbihh1wZs5yXsf3cGe8kB7sW",
  "key39": "aTc1TbkACZBVB7AFTVyfyWz9yPRXsG8mvDcHgPBZRDqEDRKMnFx9HjAMqdejghpKvEnCD9qPvgeiqsUaLaQaW5K",
  "key40": "2WjoSAHCdh2rJ1qUCtLtdiKYFsC2u8pZYvKac27a4mpfFj6j2d9zT4Rshwe2VofE73duoqBGFEq2figfcpzF7zic",
  "key41": "icT9ZqpGDdqCGEE8UmLfAtXQ2L7JQu1jvtm3nBRunKVnc5ah8EDb1ctHqMBVBqJQoG1VL3Hk1CfEwANcVrpP7K7",
  "key42": "35HGy7t125wJvDvdNudyP8LD6ybHiCPpRS6YbczWBVsCZd7K9Asz2QCYceavupNr2eSaRHVTQCmK88sZjQNTY9iH",
  "key43": "wodBG8cXbY1SNNercZqb6Lx6UxBsjQFqKWQC6Zrgm3XHgTwmKX9QXT6M1KeMVPnEfU8Gn1WS9SWQ72eHwGXE9s7"
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
