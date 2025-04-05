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
    "52WVvTKJEEXXKeN7kBBPTzCZ4FtzUhybZUsU2Qctj3h8rAVmCL3XLy9Ymc97i2Lwy2yQgDnRL65a7emGdaAQ4Qo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMcLakUJkm4pLVBsjrWA48FwBDZJL8DgU3E5NLxcMN9NxVoPpVT1HqhaYLLZTbfXemoXKjVC6TCjZ2Qg5ibN8AM",
  "key1": "3SdHKuw6kyn5aURyQ2UPZHjouCFr7WcqjAdpvD7sNctzmByTyj1MXyFG3tAPkkNpL1ZwVzWTaZy3vJpuarLqTRpK",
  "key2": "2JXW5v8qs8uuxuVfnK8uHByCNXiHsnoNrTW4PkPvntTFKTgHHc9sfaakDVvEYHHqjGZ2r34dLutz28AQkR7Mvg4u",
  "key3": "2kzELzEXceSQeT48LGGDvU1ydnugWJA3KuWF12vcUFqPSidff2rUgyGp45UURD5CJRY5WLNgbXX2bGi3BAxswQdX",
  "key4": "CGVp8wpE2g68aQRSZ544XRTcJZiE6Zr1mvV77PKZTghHYQPXBLQnrhaUqP66LNTsfxHtWDaiYseofABptpNcwuk",
  "key5": "5ji5vs1b7UxiqEXnW8gmE222wx4CY6KHrfkxEjfmSqtfGGtsCijMXP89S3fufKZee1qacRwQiDeHU7E4XirstpXx",
  "key6": "4NrR4RWkS7J2SNoUigeujJkenne7D348kZwBdj41mhk2JxDMPw4jY8JpqnUH4EoeesBssPW7QBitwYVKb3887hcv",
  "key7": "2SihK1NPDTXivqUJfFJpsANC1MqSdkwW8TsvE5hfcayM4fpoiAz8vp4vgkRQWAe9wDXvTDXA2BBpqeLp1ydGXmBg",
  "key8": "3MH5oen8mQjGeLMFzawooCdBChkJGNHzz9jmKS7hRho9ouzVKKa4rj6ifFwuG1pQV7RtUuDzr4YAy7e6331xixqy",
  "key9": "389kBmrX6fM8LSksQBMbgLBeyVCz9dGAgfpvp5XieMJ6Fbb6xtVN7dXLcw8J1JMn9m7URuLcTK8Lm5KEejJRvEuh",
  "key10": "5V3QmCFWKE8sscHyXmKPeH9qadx1BN2bBbYqCzdjiguWt3TGnQbPKrVbxrJa29vbLPC7FfMkjtpn8AUxvvDzN7La",
  "key11": "4X8nHXqvxEkqWWRUtu1mfECVa822aBkYdzojt8ttAPqCbS38fYPMKxiJRzM7PqF2PxE6tt7v6EhsYYctYtwJJN9B",
  "key12": "3K6bUMJuUkKzgoyn9nKM5esaGJpBewad3oLA4YbgFbjevWg4EBvhCc8prTpv7DUYjTtAhaDpxZ3zct819dM3zd6W",
  "key13": "5ixezzxXHVXjyJPB7WHq3dLxWkZMYiWYKSSG44JeRg8Ns2XgddGya3Gong9xgkoM9uymmvUFeXUG8rrNsRgqs1DD",
  "key14": "3HsrtTTZH7BwdzG7nrGE4uihpjtorvNX49HKvh8bwQRkq85ymQBED6HvffL7SFbhG3Ua1r9fBf5wWwykgutuCsRm",
  "key15": "4Yhjg7xuB6p5AUzj9PmcCHKtusRsa6UBNxqACPf5UsgzPuubHcXgUiHn4EDn6y8qLytmhMTLSZwRt5ZZ9XW3W69g",
  "key16": "N1WWEqVTiLaSs7genDqFbkFfVpakAihTrrsC6FU2LUau6w9dW7eNuTPYvxa4XsKNTTkdaw8ABRvooxbmuDnALjc",
  "key17": "4BEDnurpELd3JGeT5KEs5kGXaKfKDUzw1tnsgLFjkFewu2YxU1psE54Xu9GzVZJ82YYYSY16buy9VJvWT1jxRjjq",
  "key18": "JSpX2tUbNnLWFN95uFP1eX2iCC6NCwZM2MaSwPSZ1LnvmtaXH44Q4DUeViKygk6D9DQMhJuboAp62nodcyTs3YD",
  "key19": "4Fm362dFuviwcTivpsmoTaHEqExhY273cmTzJ9Lzp9EL7dZ6SdrzQ3hXPBoJinim2DCiJcKtd7vDouif1Lyc4ZTb",
  "key20": "e1iXgtXafJRjpXCDazuREVwpgppTDPUsdNH3sVsSNxHKFNkej3uyf73aqm53sPdiCCw1m4rLkwbQvtN7Mq13NTc",
  "key21": "4BHshP8t6LEPGkFggrw2sboz1PiEDf9T6Kg6WJSWY1pMNGp1u1HaYNibyKe83tdt86JeR8eFMdwdsQf7qQaGTS8W",
  "key22": "3YDv6pEw2Y7iPzm77TgMGnaBnKV9zvdP2f9ePrY5Au1eTA28jWu5HdKSvhvnqK3e1R4iJ67Ldnd5JYMgqiG1Bt2B",
  "key23": "FSY159GEEy5LJjfL6WPpukyopAVJAFVd8FQiYwGqo1A5EvmvhzYf4uyEjMomHocxVX9A7W9brUDxipzTkjk39rV",
  "key24": "4xm4dEMKt5koAoCaXcHvx6kBY8KtSogJjf98qZqz7NCeqVLzV2Gr1pxkhoJGVFHWzV1JqPoQad4mjRSg4gt1Rs8H",
  "key25": "3p81KJ5UFhctBJovUPu5yCeVRBs2Rk1iYhfh5f4iSCuVwYLvGa31s518me2T9pd4QhJwft2o3wC57vqGUYEvHxuH",
  "key26": "3uyJrPk8kQF8TrarkaU5otpFEAYcSydVtTcKsCuFmGHGs8Fk1cd4VVd1pk1eteKjKY2RiL6p7TdtBHVk5HckWh5x",
  "key27": "5kvM3v7pzSoe5RoxDmGrNtgqSZXt2pP7GF39CGQkqcPNhCJHK86ZGdCHQWe3aAVqf2PGTMmam45zCFpHCYGkZZYt",
  "key28": "3Q31aSqbtPjMizmyUPFp3B48ykdy5m9ryuqGoCLMyZ6XyoSdGMaRbcdm2kxKZZVfCCPyDf7gqRTagGt4gxSorfgW"
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
