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
    "4cVaTmSKxP6PzHmUfJaqYzZn6hyhNWtmiGk8FVBU28pbmAHSjU1Mm8A2G9TBn5i6bBLGtuenqDyfo5R39E89zQSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rN1ZkNMpwdgN63yQdqfYF3T3pFaWdF2Zb3jgh3hAQUeUWCR8BjgKL95Ug7LreDFprrP2Z3AdpwyELdLHyqDB33T",
  "key1": "2TxxFM3YxBbE59fQhn7PyBwB1pgPh4X7T2B4pAdWdBp16MhK11W6PpFEoL5EXFTZEAc24PPVahAJshKnLV7f8fS6",
  "key2": "5obuUV5w2bf5yAoDoVAfyrojH8sFKedgowKbFp5EVh2z2XQF32afnsL3k1BySaiaKmU4euCPmzSPSY5mtwbnXJ99",
  "key3": "2YoSeo5hP7u1WCCExWPoGASz5h4oSbSe98FJ8T1qffphwnw2zNiixUVoonszKvZyavTmmQgvi9LQeM5DkuRchTTp",
  "key4": "3juNxz6zNk4Xu5tsvYRZNzTUkCaz1AedhpZZN88odVWzewHUTupNTWw93TiHCiNX4b6DbX7R2AxZsnXUDmmSuZHA",
  "key5": "2jp7NixSH9tzecxafMXxufZ4EhBAtW4Mwg9uZY4UkPrV97p9NC4KBr5eRxejW3oFsX3DBLphwoKnjcc5E82Pe4Mn",
  "key6": "5CumQ799NenqjVsMsoNCVAG6BfsdcTtLMWzBUmRzQbCPcSSwJdMSYRuu8fB3zb9A1PipiyPFjFkuDefDKZik7245",
  "key7": "61YNBCrRNUdHkm5jVWoSWQ4WMn5wgMU76Mimd3Vzo9h6mXRaSHMudSyTa92YSeUAGVsfYk3WW6oEaGF6ikLsBj3p",
  "key8": "26j2aJuaNAGkz54e1oYLpA4EdqnPvtuTokCgUmx54mt8RVFnNEpdfd5o5xHjf4Zv9V9fcAytdLcDKnTgqgMFafF4",
  "key9": "ZXV1cGCxJgDvsSMDqng5puA4vNFbAQZ1zzy7AnF8q1m2v2tQNDuwJicKrARv8iarB8fCj1jRwXTVxoSdJ5gB2pT",
  "key10": "5SqWkwVqD3fq5Lydsvvt9ZnDna4YhjkuBghKqosEu8EgduVi6FjTrugfwvk7iasgYmxpc6WLF7BtnzNcmLaVj1WN",
  "key11": "5x4R4fGDjhHq9m5tXgpb3mL341ucuBfFuLXXbjEVmEvZ88qR8XuQgctZDC68CwRNJ1PLqoTE1CKs5wmKQQgJ9pJw",
  "key12": "vLwrBBmF4JERAMtZ2DFCNQ1CNmoAstrNNEcxRedNPaG8NfcCn3hjKT41ZzxiQ2uhezfthNWVvMrRpC1BLYkNq7T",
  "key13": "5c6Cxfz58o6sJRQybvZxaU2rR7MM3LAuB2oUFByhcoE3UNgFMdg1aSKgARJGGr87uu2Thu7hqpZNhsJ2AKLVqcUw",
  "key14": "3PF9NAMVMrn55N7a3WAKVTVwZRieMKnb8CnHgcAFEHhrUEX8xGotZGroEWDsy7r9QnaVTjjchop17XFSogzJgrZz",
  "key15": "H4wJTivWzuUY8jnWQtYLDVdLhJssuAiv9DTEAxw95t5yxmCzTLuzF2WQ4jeDphTV3HpZ9kqEHTtc2ry7n29BoBs",
  "key16": "4gL48PLMKMCg4Edi5SRJ8g5a3194aMFuvobrZSj3SUmU8yZKjFPjQR3KGgdLL8x3s32XePUZqHF8VhaiGKkVDnYH",
  "key17": "3htPTWZFKiJmcRytfsy9dtpGVcnDfWUbknL7gzRt3Yr3Jpmsx1esF8VWTnG4TtNBN9FRWSjFhffWVE7otrrGEMYe",
  "key18": "3K9hKT7anXWXb2fCUqxzCfR2JNM7Mhv9w86D4JHvXdgjuB3yF26KCK4QNB3YjfRDSdagd6dfKXg7NGLPmZqepNYm",
  "key19": "2jz2u7ADcgjQfE1ZAzHxaXNbczgAEcVqvZC2DHJ1f9L6c3PuKwSkvuUPcAfxD7XoDupRAWDf2LcSReb1ApKp47sR",
  "key20": "49oiZgXtMgGkjeegrByDLAnAAZZom5DuKYKZxC4iMftpwH4QBgeL2cvpx5BxHJdp5bmPyjKH2jjRq8MiaWmhVHys",
  "key21": "2VeLWESXCByN8CYnZwGJzfGc3EBBhPk7sdpUczejfrAN74phhdMwVc697TurYVQzYkfbnkhuziM4hFxgkgnEavSv",
  "key22": "5PAZWiTvpnfa78K7NhcH5WMUr4p2pANdjsSS8gsxg5fFqDk3jsEN9KM6NUqbrMThtUKgeLMY1u1McGuW3Qk6BKrr",
  "key23": "3UqGH1BH5X5HbGf319RCsbryrsDFnDwHgov5mJR8EvmXX1L5Ntup31hHJDNFXtdRY5kd2efB3d3J6ASsmJGL5Bbo",
  "key24": "viR8WieMmPnamm7oH65cjWnF9hNB5FXX8jKYAR4MwSiXWNdPMXQhgjzRWNS8zJxgcnaqenDrncGUv45UMDHwkXM",
  "key25": "5u1ktYHiM44QjgxLMc93dTxE5XvpFVbJmNoodMZRVtDE6i1X2z9qEkRgeky83zMPvzKU1ubtYMHsqQoHx475QnLd",
  "key26": "2sBwiqqJgSHi94Bk86NJD5W1qWXCebw8xcevRAMokD2HywFKGLfjU2q4wnQfHYyfm3Ss4fqgeMKj8LhacfKaSG7K",
  "key27": "38jzDZe8NpmWKDy3MVwsgbXofiUSevju1RdgeyWyacjPH9Jv6eF4Lb92FXewEkPhcb2VaWiLkxm4dK6R7JNbygmh",
  "key28": "5oeZnLDjsBYeA4fxpEDrLK9QWr1zmkav5FQY2DV6XemUpw32hoN6QnCgG9jEM6H9mRfzasQ4Km3FjLrbL7p4ja6M",
  "key29": "5iDk4D5hiRSpfhvYLxq5eUQ55LgKivK1WjFNcPkXvG5Mu34i8T2ez2NXbU62xoMDJqyP17SjUAt1h5uTtBko2fCT",
  "key30": "3fydiocCdmoPYm1FMr6znwZ5eUJ3XuCbREjUEcGzfWgdaMB3dpmLT75SYjkR8FJ6taN9ka42UxWt9FWJtrh9kXpd",
  "key31": "fEbR6vcxkAkfLA2g9foLytCCNwtqaFhLUkXiTFqVAzTCLWhc9uc16utGWCp3V7xt9Yd2iyY6TDBVeQmeHJQAqMN",
  "key32": "5mSPnDRfYBsMXN1GX84QA8SHQGPxMFhiAmUc7xuh2SbU1awbmdv7aERyZe2D2HJVBxDY9VSQg7ZeCh3jbSeq31Lo",
  "key33": "65h7XWFUHXvDesVQUVoED2TqK4CLauKhLhzBMEq8n78TFKhBi1o9bVayQjK4zZzArFNDHTHAhoeSjJQw9bGTDUKW",
  "key34": "5LDeYCgQfiTkZqfJT8Jfi6DQmwe8YVgW6PG745fKCgpHtiz5yF9EzmCBepg8atziTRNXyRStiFWndzqraKyowvM2",
  "key35": "63Foh297XXDhAGQSNMvS38SyjQs1aXDdGqXcvNdeC8xqqZD8Re2u3uczJPPW7btSR4VknCfc35i3eYdLFS5fFAju",
  "key36": "55SeaXeaTDXo5RmvorryTMydbc7bJTsRxt6d2NZeQptkaZA3f7Dmb7SSGQ7zPmD4bV5aenPD2HhtEuRMrJJR9hca",
  "key37": "5LUtUdj7MpQg5XkqpJQsYWMVAaoN6WjsYbCzUjEZ3LQEtvq643kqGjQNiM1WKV9umMnpdPsuYe2d7igCVkqrY21v",
  "key38": "3yTYcb5dAydRNqEzrm18nCxHVQjdgCi5u9LSmX2DjuCnD1sX7CXxDdsVeYig4M7sYVHSp67PcPdxok4tw7xkrNfH",
  "key39": "54krrpseUPMctMiuLEwRBvqPigbEhydxa3NyNFrEi4Geq5pwN8c7tYVyLKcMqMSkBCygCKUXhzVEFeGoggZ8oW1v"
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
