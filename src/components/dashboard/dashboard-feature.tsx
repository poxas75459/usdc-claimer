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
    "55XCKfVh93bXStcq5fuNoWZthDi1Qxm2vZ7tUuk6DyuecB4RkvC6B33HSqRo3bP1dCXBK1qDXz6aFVYuAyvPe4aR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zuv7ixJuTxLhHPNLcV7umD6gDCet2ZAWn35QNCjg7EHUt3KUGEDkCfSy18gkbyBS4Qy5t5QebmvSu7WGr2y7Vof",
  "key1": "4Q6q8rBqCxYrhrHpCR1pYUo21tjPU7JhSnJBcsu9KvbuMsznRRzuj1dynm1RVwaNzhKwYcmgMhd1UCTXQn9wA2N4",
  "key2": "XwHNYpGBUBCPFv28UyaR2JgoEXq4F88ZejhKWjhHyPg4md3W5PhZfG4A7JZGfNsaF9SsrTMLTKhk5PjoAzt67H6",
  "key3": "2W8ZL6dHdU2Zg64TFvZmyzc2GFLboCa8EFqyzMKBxE3z4GUM2cFAt5SdQVXtu56r79pA9NJBLgpePcBWPmRHhmDR",
  "key4": "2XK17PNBQFtkxtGzEQjF8Zw8ap8zvkWCQ1fgRd3EpRbD5Q4n5kdne3uw4GRbUAM37g2s3dH6P75hXqC7KqpJj6nX",
  "key5": "4ojDbJ1iV9MsVKiNQrmMRvHWNtTMBdLckcF47TF65CfMu3G2KM3THkpNExtVFf35MB6x5AGgEv5svyFZyGpAMGXu",
  "key6": "K5FGPqt97QDT4jzdcjtpGDjN5VqZzXdARpBTtu53LWERKecq5ppq7J5ny8q1haemVPdZbcy6majdoQXLGGWAWDo",
  "key7": "3D52CAzxuhy4mTxFX5HrTVdFWJKENoAcf1quC9F2GhLMGqFSRvVjZCoofPAaTUmxPZ6sfPprv6M4NVqGEq8sQR7L",
  "key8": "HA5jAefrzzrtoKSBgebnrUVyxYWvEkRKmc999ZuSVTs3f2LgvxRqC2nqSo2YWkeDpveqrAi674M98mcZMepJoA5",
  "key9": "4dXXNmx5WrBiZuBoGkwjxkuYWHXvePDRQuiiKym3fwQCLy32A2YMfV5JUgmajHKy42X2kFBCaPZCtmJmt7F1XLJx",
  "key10": "3T4Ci7bXfMAvk9GHLUfV9en4jK7jXiUFup2LoUGfuWGnU6hXsJampotitRugvjLSYUAACg1jfAqwHGU68kKsM9Hn",
  "key11": "2sr6Z1sHKzJwEbdc3ShLMDJgL6k6Jgg2SLAYWYVqssBbbtQxMaeQBMpf6kR5gZFRrm1YrpxaRsi1XMJqNCRfYfPd",
  "key12": "4djzXjbfT5j788sigX9taZHPDc13tJXXJnitmfPrRG2VCZ8JiF5x6aMzR1ioh5dy5NpEsdPgZbvn6w4YkTStkzaW",
  "key13": "43eKVZViKMWVfUL12WKJWkEVFd3vmXqvoA5eVJkiF5UuDEew1so7QrG28mh3Viu3RGkSkEumhsXchqcioSGaVdC5",
  "key14": "45288JWMpXMFxHWc6FpoXVF7j5u15bbymhAsKE94aY26J6zb4y3PmuUffin2siTgYczcesXKDjdCj3bNMnujSYph",
  "key15": "UhAnMKknW8Fph1ytSXTnrF91N88WFy2v9HkVWXNpt8odzRLLnZpUZjhjsQ2FL29Vq1zu1sedhcNkscEux5VzpVx",
  "key16": "58fhzibckNoNcyndRLUEuvyTjc5VqN4t4rpkZMVCBPKxFdYatLcEP5fyNs7prz4s1ZU2pwMXdurWSr9mgJyXvMR6",
  "key17": "ZQ1xf6kmD7nSaQEUgJkggKPZG87qY1b8V6BQvad6q8twm4SjYLDF5kXCj5VDdMbQfkJgDFf4sBntAEr7g7YYR92",
  "key18": "KmGY9tt5DwV9oZRXre4JsZfw2dy3wDQnfwGY719yaUgKNZyn5feWtegaxjuyFd2NwbesTYwf2HUwQUb3WGEMzNa",
  "key19": "558E1Mw3MS9XkE1ZRiLY9f2aZPoPZWZyr5sVNmcNsCvHZoLuPXZ16rdxhNMaGeLNFQkUTruN6HwYqeita7VHiakG",
  "key20": "5CjpcK4DcAk3vLfFqtd4m97ymJJPbGnCKfJeZ6hEuAzJaQQZbGuNm8BtuZbME3pZoM2pTaXwPrkriytxvcZ5cCrv",
  "key21": "5T84gN8XX8vjeUaVDiXahK2CnjHFMAjjSZQbEz6qT2bGJzyPtreqwCmijRtYactvzq6cvnSmqMzDnnr7g1Fyrk6s",
  "key22": "4AtaviaqkvZeZCNY5AWfqPSbrDwQGt4aJr8aoB3qkooWRBNPn5DQnTG1reBPeyiNAMGaYB2hsxLgZyF8xvCCzwBK",
  "key23": "4NShHim5sXQZs76zyShdog8xpWxsaqCRVgyqtUHSFEc2YRo44tBf4RF1MDT19yV4YXDkh12zLA48wH14cXwZqvQK",
  "key24": "AzwChby9UiFc4opF5zXw1kyh57aqBTQA958NKLqWqKHH4kh27SmeE7WTxbEUQuCDdU3GMFnjnSeik7nKNN1scHp",
  "key25": "PiBVRt9CXEyT46NfBPDZmP4nyRkXUiea3V5oznZMvpf3Z6Hb6smvj76ZV7gQgLrSarzUv9jNi8EFEVqj7stdymc",
  "key26": "67RJu2rotudxG3Wp8Rg3Wv7ALh9V5gYXSbmHGptEcPDCjp37UBVk5sfAK3Ybjoksn2ZAD7LPE9eAGt8aHoF8nC3i",
  "key27": "3uX6FWdqBQnQFRc6T8CMmLcLztcECatwisnmA2KSnd25PJSf7NrESDZ5GWYu4SU8FisXpW7bYFYSZZrae6aRF6hC",
  "key28": "3QEkgz6UBzdfiNn9YmnRSGgAMRLCZFcNvDeBqNdrh5NKT9qMGVQ2nc8d92xPPHpJxKHcGxhRbMQP7YPZ4GRAdGo9",
  "key29": "5zcsgiwSjPcjrv7K3tyyz35HzQadbLxoYWzJgUJq5qiXN11nJnSdDhMBmLY6BqLnzbQarKiJmo6d3MpwVo4hDUFw",
  "key30": "2WAFCBcfeJ8KSJiHAeXaUb1c5QdkkcBM18Dqfbyb5PSFDTxU4igLjay5SXdYjVnjXzsmM6rxLnWBUBRJrcgEo8ZD",
  "key31": "2wupU9DR9EhQXrCCrLJZzsvgReyaDCe1VbeD4dUCgHhuW9fA6fmykNSRTqJwm49Td3yHRQjARqrR9oLaWHjM8nWV",
  "key32": "3t5Ak4TTCJYmVfRZ88CPo4oPbzz5rKAQYfBZKEXHvucYdRYHKjpqybxoeZ73zKxBL2Fxw2Q9c9mNCKDMqvZP2GJP",
  "key33": "2TDBy4zggSiaEREf53QhkJNhTCyLTohJWJMufdX5HyG7HpAew9ozEmUwnDw5EnLPenBBcow33zBLM4wTsALQwu6K",
  "key34": "2CFy79zv2JZxdGmnYHPfWSJ5pwd5fBTv2DTMsL3N1yRzMEjMvixeKYnSTZqwoaEwRbnZbBNByWW3YUjioPPT3TXk",
  "key35": "5EJCstfxmDtYAkAhkruqPVbshR6FwZ7jesQJHMArHeCwFsY57hcjb3v5eLoqR48u6JLdXWJKMqQ14zCFSJ7HTtbM",
  "key36": "5JeQ9z9m1XiJpJ4aFGiQvh8ok7iBWMWVSANNSxytMP7cG3Sw5A6i5N1qNC2V8FMpgagmaNKDgiubDnsgGBNk2nHg",
  "key37": "5Kib5EynSh9o3MgJSQtahAkQ68JM8GZ6vAXWQh33RiiqdEvLS3KoJAY2JS65GmN7LocnX9BC7RSsgGUti5NscMqv",
  "key38": "5PK7wEbPkL2M1vPojddqpNiJLs4fptw4SA3jMBstB5Zu1ifyPoPT6BVAnGGJbuUQ7PtqvyNpqPWwGZspuzoerMfZ",
  "key39": "27YgLfdRVs9t2KUEaU9CoFDbbxhnaUFRncsyTzBAi9VJxFHhaebtunYK4tNy1Xx5vSEWxQPUhYibgvac8PLmAeCS",
  "key40": "3BWetvdcGShzMf9P24B8bpe9BAyf5aeXXvahudyeBDST2cZUBfdU9oXXZ9b2mt5yuBzm6Cw1MxNnq9UtYte4aHX5",
  "key41": "3HWcpBp8MnDWmkBEHtaEcjuvqPrtRpRN7v5mmoVToHwZEdpq1opjsBP9Vxk8wUGMT12LVy4hwW33JE3hLZc73cRF",
  "key42": "5XTJDgoquCZ914thSE8wUk925DVk2buzQgt43tuLCHG78s3mTF9FK6BEZhRXBtPk43YG6qNXNypw4BFDr2vxQ7oc"
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
