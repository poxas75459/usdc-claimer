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
    "26GqybsCQNKYimQsPGwxgj4Mirdp8hWe2dCgcXiiPj5577zNhtcJNWw5wHtpZ7xrabgJbx2CtWuVR62k9eUmg2B7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNLAz8b4d5o6jkafAXeE7yxCZbKzs7h6K6vparZHWsYBWU5YfCF5Y85v9ZShhSpg1CL6RwQxCs7fPh5ErfZNZNT",
  "key1": "5y5npFoiJSSJBdryRBz3BSV4zdzTKVLAVtURjbBhsNGBS2gtJaSghBaZNerD6rFrSA238H6xhsZqrPWYRTJoyMhU",
  "key2": "4pTLo1irabaHaBvERUmm6rjEUHUbf4fyQfZNuW5rSonqkTNNWZrdA71LVhw82bvGqGimLU8t96LTgn7WWGFNvnG9",
  "key3": "5bC1Ry9YUCKudXQUxQC9YfxfnoL8Z1QdUozeJ2nLg8e1efwgGBy3FHzdCs3Q1X1qmRiaXB43mC84cfq84YqnECCf",
  "key4": "3jsZAGdqZxiwZMy5Nr7GP1tTkmage1NF8fR5Nz3NiZFH3PHg3he2CVBkagMxvsNdtdmytxFcsPoMFhTJ8sjKjg9C",
  "key5": "BU5D2vLAQciM4qTXdu3hbCKKd4UriwbmVb7P5K2TCh5We77UKCFWDrk4ErTpgBKHFxsw7zVd3EGYyqXe9GPh3HC",
  "key6": "63Eo181tKpds4kFv8WFKmwz6fmCgbR1BmywCggNBHoQRkAiHTPaudsdEawmgTS9ADwYz4QsNJhxuL2xdyjoL6Uws",
  "key7": "z4RFtmngrUfvL1sZAvhSev9zwP63dzDNJLBqKi6wm8hMFCxpbw1jGSnak6iRevTPTUaRnu6PAe621n2WRiRjpVa",
  "key8": "4tt31spHGYSyreGzWCDZPSSJ28XrcyUGSGp6tqESd5jfMtNzrDgSa3jFhgBVadGVLnFUZh4dtXegcEU7KnxRxYwg",
  "key9": "4hRe1tJRt917DS86ajfCPabsbMZktNEA9UMUQuGE22VHbpesrvwh4cCmq9CH5oEE6D1DNRmq5JhxDk3RbhABnUBv",
  "key10": "5Sb9Ckn5gdYpUsRACL8xye7nSdZVvTQMwfh2XD55oNXcKn7rhhv79vtp5vGmFgcTdr1jw2w8NKyYJ9xxPAEMSRFa",
  "key11": "XoWUCQTrs57KHr4iE67Hx2b6dmYXiNjjnhckKjxPq4gQ5XLS1Z1EeFj5TT4bKPU9eZwJxD6v1CuderhyNcx3pcR",
  "key12": "5Kc5yPummU8NXvEGnSiabpuEc9RcPU5QpyTAEJ4AHBqbqVjmBegtEEALCMznwG8dPALXkUFPu8q4LkjHFUkpMgo2",
  "key13": "2D7woz97B4SXZbbAsbAEV3o7PXqBsvUo7DdC5Jg26hF5WdxR3aPybmiD6BDExyxEQWHFhcWuNDuSfQVNqxdcGtm6",
  "key14": "5mPSXx2BHbztccyregaWZMXFnzwS8tMDBZpRBFRPkoqRDRkF5CdV9LponP8Q5tWpuUZeqdJ4wbbAK3qUeM4DEhm6",
  "key15": "3MZZ5jQnNAKtKByWR3Y85D5GmU2TRX1J3tBn3pqkGJ23aFoHvamyco6crRuZfmYDSgQ4dRJMDL6Qr1GbHHCibvoy",
  "key16": "pPvzCpNGaTyp1Xqu1t2QRedqcrUNzgC1zLhYBfeDpVRtgkLFHVWJbC9icXpStJdUMxdUiU4qvp2ZuVi2GGNYbSf",
  "key17": "dtrkh9dFz7RhH4i7FennNaSxZDY6dVXxuiaSMMqtM5JcM11EWz3kvmnTTiiNud6Ecf3SPreNBnE4q1uYUFCRGtj",
  "key18": "2ErC5DbAaC3foLcfnQCXzxTFEAGwosvTD9NpMppnASo7E9tZZigZsrGGV7bHGiaXvpDPaCNviehK89Y79p6tQixQ",
  "key19": "66LMGrdyKhUyjhafTe7c5TFhQvkxrkjUByWDXKhT1uG6wyJTiggfpMJUbsU6PxHmRh21WB5nQpPZT7Z5zAdZFdwM",
  "key20": "4PkCxPnHbXoiGSos9KYQg5m4xLoo6udYjCdm59iFrVmmQVuVfo9ihaU3gjUP46bR1d1UePYABh3zg1HsuohuJWP3",
  "key21": "3eevYQ9VC78Ng9N5Y9enuhPhEMBETkGEh8Ec6oqXvg3nWjasGeWVwNi3QbNW5KMNc4uc2ZfBXrJqtMjk13vymSn7",
  "key22": "4vLwsyRX94i4BominCmi8inicanGKkWuBrruK1SA8UVjcbChYLZriFrK6g3j1Ye1542ZibDY1qEBcHnwyGouxR9Q",
  "key23": "2KN8Nr9qfTrQJ5sL2KMsHtT8oe6kjRwZD1VoRXHBhoWLLqFtneeWCCtcJrciy7nw6PzpDyEZLAD39YWSMq4yisms",
  "key24": "4Dt6kgdyVJy7yC6aybFHCzxqSTVuxKGiUrUY69wgr4yXyCsnTkno8xvtmJJpe9Nw5ji4tiSUKeqXZtTf6Ppyeuqg",
  "key25": "36EFHraj2uNp63KkW4v5Jw8bzfETJD19CuFZvmffY8Bam5VWjsahyoFdSEemGZG9gEgDvNtBxcR17JR2i21ckB4C",
  "key26": "3A4aK89K6Ry656MMZhQXXMZQLU1qQ2PGgMUNLMijWqHcuB3Saw1qjpJRgS9UEs89nwjtvLZhHka3rSkiB25dck39",
  "key27": "4s21J8B24yyBGFBWsdjsw2P4z2v644HiShzdra74zcGCRLCfhekZ2ub85SPgHHa5dJp7e1uEBk8SD1eyVjqs3jMB",
  "key28": "3HeQpNUP5TGT7Rjpin1VP8fGhwB9vkaGNYkW7H4JhyqZ143iVZR1KANGNZqGUG3oa9pdjGamKCDVzpUTKpKM8onN",
  "key29": "29BZ3KDs4XuqSS71sao1REKrYRrncipLfXrzLPrt1fRr6ghN5mviFGJGjd4ANCpUWKF1pSAzpauA5rhfb9W6atFP",
  "key30": "6vamjEYf4wwARni393Yuvc9q85XDSbvXQ6jgyAs4bojSdbdf9ZPTmgMgc2XBNGgjkXZ58bfkBJwRvUTkMzTnwZP",
  "key31": "3S44yC8vKJ1QXviccQpT5Vd2rA5xrdrUc4Qqfj6tyGwuUaHv4h7ENuKgqVhuXqZ5ZANEdwBgX13xw6VWaZ5PtZ8Z",
  "key32": "4zcPS1kZS37XUHUwXMCRHUnDHGhM9yGaN5ZjuwJEydfpS2wtdZ9NPEk22FgNtseBfNENrYvFCd6YcMgD3DQAeBGd",
  "key33": "mvPVMFTdxHeMBnx1V7BW5Y1irj4DqpPpUVx5sbEdaWtVfTuXdtiJp4JXkCTryDX12aZ4CfcnJc5kLYaphKUArnE",
  "key34": "5eS6vYthbjDkiX86g22Zv9TZtb26nCDxbnxXNfARZUM1rapP5NP5T4NUShXjCALF9utrgzLoGCJaQbgUGkst12mD",
  "key35": "2Jub9ZLTQoM9kwWx6FiScJ9GjkBv76SA6WN862MJPhr6GqmrNyzQfQwd6j95s7SojBsFSfPXjsNUQq4fwaoqYiwS",
  "key36": "5aSmWt3mS4dbP9L4ebjP4L4XqVH9Tb9mS2WAFHaf3A1gbheur2a7TTKJQhLNaPbb45TP2TdeYcRwff2T7GHkAyw5",
  "key37": "4aHPxsLHvx1GuuzbzJN1aLYam3GZrHmLyEbZ6eKeCE2tyQ2khyyfzptfwPpcmQCtr4xh5tiFfJUBVKv97C1CmeP2",
  "key38": "3wWQfH7GZLuH3zkd6V8nz5a8FSECyEkTYGDfEM7gcj1d2kmHEYjRHwuiPzuq1ZwfaGmrNmzi5diG4GPzmp4hTULS",
  "key39": "3SPo7ijb8ry1onvLVsgDqdaKHMfCFYZv7xqhaTypZvzgP91vFEh1udF2cJbaAHgGF5XfseGA7X2ngFhWz7Cc2YaV",
  "key40": "U4vXDAwcoxwtvTabophr1kHwXEJjHdaAQSJmPPJWhmb9cU9e7KgBWrWk3SQbX8EKvRbtKizcBmeXGJCf9uiE92W",
  "key41": "AvdM182MJcj8YGQ6VhkzjAtzauwvMLvr9FB87DrvtAZVjy7YX8VcFf2XxdjWvbncKzbCDkTnAiiy17VxCVEQB7k",
  "key42": "2z7kVzMGaP32NSbUkGDXFXknrMWxSHk3MaunufBqRxmeFCr6SbeY2KHKG4HQxLJ2ZxaU7HFy62qr87ZtwmtPtNEJ",
  "key43": "5FuT1BhNc21Us25HVB2c1HhCrVtBoU7N6cQAjCC6PyPUF6T25RrF2DKi62WSenauMVyJpQVWfLQQE6CGXhyiAsxy",
  "key44": "2xdWqb6zHgXzZNeSFU8kwVXCxr5hmPRrmp9eBdptX65bidkpZLvd7zc367dXtqcACSic65cfZMpkzLD4yfDBXCGu",
  "key45": "2NbcSyednXUA7DduRQp8ic5fqQSyvD7r32QS5gGDFwDnz5aCyirG6BMAMTbqSW9GsZmbq15NjERatJpU6FW3JYGV",
  "key46": "pnePG9mzWbBLcYhpnQtRi6HtrN8bucoBHG2VdcbrixRj58rdwAQHRpdMmTQoG3wzd3ko2exgpoHo3fcSrhVgbhP"
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
