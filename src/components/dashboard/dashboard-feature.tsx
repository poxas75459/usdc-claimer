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
    "3NSrAGCFeJqcyckQLMd9qDn62fgTrSd6vgk52Q8RtusuyKHvwGcjtjj1UtotdJsBbd1b96mgFcifjhGHShQxtzbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5mJ4UUy32ZDYB83aaWYpHzrTa91e37y5Ed8dVFSvsVVuwKTegMEXNCZQ9MTSfmLLKu27VnWxUTX56FCLECq4g3",
  "key1": "3zcbNXpUvp4Pbh84JdkE1mMsbFnZScRKRJhJv4x6jqDsad3kA9sRtTK7DC3mTsLAPqiBoevaa3jZFSccpnkYkhtK",
  "key2": "58a5HoPYMcTgT2EPCbPJJY3S5YoK2kQCyeCoHywEymg6zXpd97ceYud7LAPr1KoGvg4tcVPzJJjVf9ouiQKkXgzE",
  "key3": "4i2y7e6xF5JxYcppSqF19B7XPGGH4BuMfg8MzjCuMUqwrRioJZyfY8gNnBUmPnDhRX8T92ETy37G7qmXCnfnQ7EY",
  "key4": "42knb2rMngXDQEQdoyMTndsoFstaKYRkQ42it6T48mMz5m1GHofTyrRa5zUg7wEjEZ4xhTx6Rt2rRPg5tYq1dYCq",
  "key5": "2sde1bHxN5PVm4iLPDUZfARzrWjrxm8MF7qTsQnhsuijuJU9g2462Q3csyHjsDdV8E4v8szfxhPxzrGnHYzpW5q4",
  "key6": "QdrgMcXAsgkALXRrouubFjXfNM7NVkz2zWaQmngDWVmndtTTB9BC6vwLqA2w3nWyvPfHbBjNbPGNXR4qaA8Rp7L",
  "key7": "4zzjkghPBcLH7Rsa5DXoDdks4SW3H59HdSQtA4Af9H83ngVd5pgpc3oDBWozHBQ8yzQp3qkQ7vj8NTJx3Ym2Jc4U",
  "key8": "3aYfFaQXXbiYd8uvK8SXk4wXaM86rUK44tH7bzpnVFsddm12f8j5n5SjnY7rJq7NPhchANJfDgDQK3mRbj665nkP",
  "key9": "2K2Ma8oGUhaqPudFbwbwCq2iYHijhAKof3Ayj6HpHUZh7ecbvSSoLdvfMk2RZ7QmPX2L8kSDLuqYvk19MHnoDDun",
  "key10": "4neeMWxXZuCkupmbULpVdvuHqgSosDoGFGw7vZX4BsCW6AouKbPdF4Dc1uAN7cLA6xfDafucPMZqxirrX1bJNrzF",
  "key11": "3s36Kr2VoXMKDQ8GvfbFSjv9SZSzs6AYfp5gdWWiyLnwow9ERKxHaiYZNjXvdQ2vmY4opXCmhqqKbBV5V5itcb1Y",
  "key12": "3xs9ybHn5iaQJpXyq19S24fmFeqEaTaebqcz2x7o2GUm84Sv4EcvuF5NcZo1MHghmZL8ZgP2DWUAQciFLVcmciRg",
  "key13": "4dn33CezH4WLYsgdUiX72bWBEvpBPsXiSuk7KkagxpfXGzkr15vRrkSvHyv4briAgTFwDorU54H8K9Dtdyv2YNHz",
  "key14": "3eoyiU3bHwFfu8ZhytYTPgNoPBcujYHoaL8CDVxGB7kpQyKGWDjcFSBLcEgcvD3GRh8gKHF8qTzs8sj4qLymHfP4",
  "key15": "3h4gdXWya9d9rCah4F8J672kJ6yVniHSBjwnEwiSdt37CGQdr4HXVvvtYJErWqqGFjzxYiq6zzTaWaKeEBod6e4",
  "key16": "4mv3Uy4yeyPYNiQRCxhdzCtG7Tb3p9jrCMK9wDsARAju4g8Lntz9ypnUVWwHSFMJNnJCtKeEYJxmCfE4c9h5xu2H",
  "key17": "4RBryNWbk5JcneLKNLqD2qwbEgqyxN7ox8du96Y5iEN69LhrSFpMiyuoM9zU5w17bMiPvqSFZTYCPG8bLJc55FGs",
  "key18": "3Cn6wxyRAcYEWmDcaYT8EADYi7sBCCpuTe7FfU7zexekBGt4Ho3Y2WdsnYpDYKCtzvNJkPxX5bf5qgDYDsEjaZj4",
  "key19": "5oM445zfutGTjzdJ1nsM7H38wPY4mfAgr9VcQrrskBc5yAXdTKXgR7jmAgwtRHv7gAnLaxJRhC2NM9c6ZGbgHPKy",
  "key20": "2Z6uR4PzWotKNzKNEa7AaUXyCasrAH5mQqsS3QzWGqZLZ4YtkK5yrZ7PVaLNBUdbTweYug9mpKYwNfeGicFZnFdX",
  "key21": "3kwENF5KUwmNfpBzEsnzUEsJ48Nx9kp31szE9vsGaKgNRtqcAakuHXtATc1CfkfWLmxCiCeFsbHhoYnvLDQFQsdj",
  "key22": "RBLLPBvu6m8ESB3LDPZQH8nJYmPwC6HiLbqerw9wSB2GB4Buqs8jvLBVrCU2RqEtZ1NrDuBX6gQvzoLMcigtofn",
  "key23": "5t7hcavdsoUhKQkZFNS2Gebz2BwV5QgAV2E7co9kRFCTkfDcopUWS7t3kEuQi9R21H72caeFDZckWo8o5F3r4h8p",
  "key24": "5sn7XTxvpzCL7GENobFTaahPCWDeoczFo4AD8bQ3foSAzyccgiAM2AfUzSSNDdQfC2ytfGdxM9M4ahiJYsZ5MjC7",
  "key25": "3r8xggkGJX8BvCbFM8vKWZrdT1TGx6Wu1hQZkrNga2D3DfVmV7b9zi9VQ8NDsSgaxJ9x6W8fh5LNige62RN3UVHX",
  "key26": "2hqbbie3uitRCZbFxzLCY5LciySH9FUuqr5oC24P5xpXv73T5ZPE3DfmKkC36pDD5CemvfCbeeWvuX42JpH7tscr",
  "key27": "KPtgKG97QzaZP2S455FrqqCUTAkUBoHRUjynHPCpXm4Pbp3WUcGMqjRNLZ4rjTY2WpDB3Xmi91HNJzYy51H9LbD",
  "key28": "4KvXbwvrpEc6jP3JnLU65VBeZrgTJJcEgGD6YaFdHE4wbwXZcGJdjaVuAAQ9zXT1uJZhL9cXcUHdej9PEweLwfB4",
  "key29": "x6uDKoTvfLNj3ndRVi2g9ChQf9BCuTxguZPTcQan5mHyBW7vAmSH2nSNSNBbxYe4yZ67Y8JBeTXMeRM5cfTLZxZ",
  "key30": "cteWizFjwpoRLabEtkykhQiwyQ46FGEo9Cg66nsgw9jDd2ccB5LHxG57PYvdf3aCjx4kjzozVQgCUVqBC8PPakm",
  "key31": "4gPGuV3UFBCqEtinkKco6rFg1hGVzz6zdUpmuJ2BfPHVHGiGbs1Vpbcr8VYw5tnJMJf6eTgyFzhVeMYSXfY8xyx2",
  "key32": "4Ffs2NfsCAmN5Ww527eYXtBuAUoJXVe6XreHPshZg4Jyi8UTdWzr2Xr54sbK3Zx9nt9feM6ho7S18gFXdtMLDWxY",
  "key33": "Bikk6Tstf4p7fonBu7QWUA3CpfWX2D6oghNg9HMHvY2FVFHBbDC9RMyftMuUjmCBukmhoLuq4RRhF6AhMGTHANx",
  "key34": "3ruNi3iQs72Tq6szNm5SVyqBwsMk6DBpCW2ErqomkKfgqq9ufe5caDE5KyDnBrtCRhAV63tyEdz2NWQVJWo7R9Jm",
  "key35": "5TVVmFzGJkeiD9DSYJLKaYeP3KrSPYRQ4Nm1gnh31ijVTmUyYKtMMApNtUkYpr6HE88DQey4W9adpvoMgSz4XTXM",
  "key36": "2dkmqBCUWFxRGHmmh7Q3iUs3AoEXc89s93CbgD2e6eo6p9GtQjb12sCFw2eoqbsugYjX7ganeftuHci4ZBem7Au",
  "key37": "3wWz7YYWSwgh3aGesWyfR6keKuHcQr9cTsvTRNXGpMbk9WotWGehzf9XNAWqbfYvQYXN5HbPnK7PKGVVfaWisAD",
  "key38": "3drcwe8gqv3J6PzafJ94DHBU4n8aawe4jP2Hmoe3QyTdpVZMDiJvEvAatWEaviiQNKZXnynauZ2B9cBTXGsWjSrL",
  "key39": "4BzfBzKezyf8CJkLeVtiveDSz9aCS2u3iwcsGonh1DwgvfGEcaSfX4QKaYmiVv6Ymuuc8TQxZdBLWVr5htpoNiTs",
  "key40": "3dVC7djJrKbujU3kmjcHr5zH9Fn51z5aj8chs7sXcDBfvK8Stuayykpa8AbGPEMi31bv3iPmhmAUyQ6dWppJQS5N",
  "key41": "2C29ZsBTu5BBitLYtTWstXMkoKxYajxprVHJEzktzVWxLP1kAG4b2hTpPXxJ9MEYCfPXNDfBsUXaEHUj8suW4izX"
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
