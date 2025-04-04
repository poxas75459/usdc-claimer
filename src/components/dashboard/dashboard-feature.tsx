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
    "4m5CbqgFoaHdc8bbZ1SP4Sw3iLavm6CU31Tt6Tf9TEcq6US5t6mRxTkLP1Xzcr5mC8kMB9oCguCC3yDbB8rKKXNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32QeXtM22taXfXATKxdf4Wj4XN6wBcSqJxasetNbA2KKtucAzLARPTLH115wm7Y9Auy6nJQiAmizb6bppLriwq7D",
  "key1": "3TRMAAQUSudQkF1rV87UD744DDjtdkP4WS4vobgMQGgTpx5WRHuRCeK53fwPKLDMcGmYbBLevHzVcv3zg63XhWSi",
  "key2": "PHV9rE1a2gi6GByFJGVgmUzDyuYH4gGeDeH952FEjBNdwqh5YB4AQAEqGxj5SJ13UEZsm5A8buzgwwAj5Eneaf8",
  "key3": "zTFr87oDycSwDMEuhFLRHjyboHVYJXH26LaAnKyVpheri7RBwC9FSGhGRXKEtsUMNB9eQtqe159EFHSvfN2TrAG",
  "key4": "3bm5YE6mR7x8wND2sJFyL7q9xqMumJ7sFFEfbhwdRMuFB1tnKs2Z9Vvmisr5iZZsvWuECwufyaLELNhXUywFXD8w",
  "key5": "4R1CuViyEC7pTk9SbMwUknkgDLMijsZnAiF5dTwEL5UahoSTpLA5RkzsnLzYbaupjtFh6m54Tmmg9nL5Gbum3me8",
  "key6": "5DqN1ewwUBHFeDc7EavWfmZPNnS4kHinMmin3MddebRBtyjhND1u4nHqDDXfiwGTv5MFRuys9ghhmMvrHcdGVgsh",
  "key7": "2jQKTdmCtSfdHTqPMzvA5X4hm1riUmb7XL9rvZQzjvkxZFM26Pc5W2zcjFteFYnZrscR7Eyxs652etu9SygHz8bc",
  "key8": "2SzhrbjF9eP1CNLdR9w6CHLB8Sun83fgVT9gLjGw7WmA8VrCoYcFwqvgfQLQRYFxVrqhU5FuWfNebaQd5EiTNeKt",
  "key9": "wjkzgBRkWxZtG3X1CB5N9v44s1rjf6Bwr4d3Nic4iQ7UK8c1XAiM9k196XuTNM5zGYWwjh9b1aHZGHtq1pcH9dR",
  "key10": "5VUHGPtnRNresYkXuPQDApZuQFYVrRW9a852hfkpLpQbCntwp2Zrx8Eo7Po4E8cYMvczRtmuZHv3z5LG3RaCpMj9",
  "key11": "4oX3uDaqUgBNXfCADkjcUcgTNwX6qAzb7T74JMqEYsD1jaRa148Cas9vUstYZxLWjJuHv4PwqmNcMt4edDHjZzBE",
  "key12": "5hMFRENs7BWus7tktYss5HCVdY37S2MKYMjVHWfy9x4EzWYgZWfx1BnfWQoC3uteJb8Vh1n3G5it3xArSUkJ9SqC",
  "key13": "y4YbjmB4wyGCUsyLKaYVKEAiQuFrZUHzq9xR6xBPTsSswSUyiKMeDRxE1ZRLzyqPjcsJebFtoNKZiCXt4hsMJKj",
  "key14": "MJYUiTP4p1315TY51MBoe3Mhb3QKKzwFYESEq88H61mt1dMx5PC571DNPK8HYEtj8tqjUhBG46ugMn2ECiShBeR",
  "key15": "2m7kjNdT5wNBMUnAteL9RFkDL7hpdn3cN7FBPiiJmuMQjU2XVqTQW13i2wcTnzCXzN9hVNExun1Abz5esoddFEsJ",
  "key16": "4tNYgVTvZURauuTNHUij2fNZ26VxcM2Nr4xgvCU7Yck88sTdX6KqKYgUrjrhjEvQK51xY4w53Z8HTz47FpVWDHHm",
  "key17": "1N5ENavKTXcd14ssxT3hQ4pgDQztAcBpSmTq3PxwobDWNL53hmrsZqTABBSruP31TNS42axEPyvodrXWTCyPsHW",
  "key18": "3x7NFk3NnvCBsmPNCQPgwDr7L23XbL6Kz4eqhbSrD96bPQPzquroLKFG9LMCRW8ekDfnvkw6C8W8AWKz2iy3uEqD",
  "key19": "3BEgR7XX6g27R36ApPeNuepZXBS12YVEYW1ywEamrUZ4ikCLLHdjAgqmCN1kowABWpAKzooHzYKhifwZjfUE7ML8",
  "key20": "3rrdakLaeeiJhf87YqFTkbspUmRY8E77QeFg8FL2XpuJpBQP6N14CqSxxzJTp1VbXjHvAhKabaRTHcuAwLw2pFVx",
  "key21": "Zw2fU3fbeNWB2i8rG5Q4dYpYzzRnqcBrQQiRNmVovopx9XhHvjqcjD2S4sAg1jgdraoYZLX3M3AfReXBgVbDmGr",
  "key22": "35QK8u3Qk358Feaci6n8CeGXSLgKGVjNE4HceEj2gsM4tHZruGrwcGbPUiLYSoHkuknXfC5PDNZRXFKgVKq8VsxZ",
  "key23": "23NugQxVffEXewXN59Lpoe3i4zBtoV4VoBequMruyFBd5SLx5LbswivXp5DgR7TyV3nzZk1UyuPiN1QepcLsebBj",
  "key24": "2E7iadtEDG4QKf2wuL9qxeSvAy3KRtD85M86pAVMZV5KD8bXREVukpdtDJki8VgnqcHkE87q8GNKErtfQ5CDo562",
  "key25": "4oHKDHbBgD8L3NXwGSkrE2tDiiZvLyuovWi59Pz1pBmkw2FFWWjvzJLAS8UQYvHbpa8jT9yueu3782YL1UqBNZ1H",
  "key26": "Ug725hq8jaNUcLMJc11kgNgDRkozARhnNvo5tRQKDNWv77D21LgbiRKBVd42EBuW3Uvvm1dyxs95ipadRykhyy4",
  "key27": "e1BTRvh9u1sJhYzQ6Cu9zaDGKvdF7QZYxFza2jU2MwY58Dr8rvnnNsZmLGTPaBC8W1UpH7C8ADVEQe6LrfQqwRo",
  "key28": "48FHGv5bwbMdySGjtufdzotw8Zs1sbZaH2kUPCyoQJYo38tWUVbbjAZFLhC4GrjihKfXbL2MPDdk3tAbcgtP8AQn",
  "key29": "5VBtWahQPVwc2o1xAcBbjW7FKk9A9cvUSffCqpSn4FDziPNqDxyLdgx6JnkLmtorHizzupC94a1Qpc4krHifyH9Z",
  "key30": "dwt2C2QbPPKa78LArm2JF8MUv6JM47nbcyUhcuaRWFBPogQXG21exxUQ8PeZkHweA4XeoyrmPGjmWGBGQsoHwXC",
  "key31": "mvrjgbQHDDGWYJYHy5Ux6LzBhmjjUPMNu2K9d5GwWFAJ2CrUMoBgheKYo3gHbUk41y6UemsCxgKT9YLc64u1p9E",
  "key32": "3JMvFis5xcWGFGY8yqizbXYoMNSTiwaWmmgnYqHJUjrzBKZpsiyvJAjhiAbmBrfSTqt1eozA2dEfD6B86RWEgbZV",
  "key33": "35z8Kj734dUodUzUMyiu86UEnNbtcb6LMifjKV1LrmfavpZhBLJ1C8xLrvWwzAq9srV9yYdzZtSnxfqiBQabNEbV",
  "key34": "4pHdm3t8EGjqXfFkktW3bkkzYZzmDRiwRdxJcsbovzZLauQ1xupecQPf6ySGha3tPPy2QuSxXEMoqR3NXFxLvEh9",
  "key35": "2XZcnFWQA2g2W3VtT4jSobyHzZs9u5NdDXrTFWLs5EddyLTNewrEvHEK7EUEzyrDYAQV8ikKSNR8bREvq5uGygp8"
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
