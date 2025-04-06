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
    "2SknrLtqazCGCUo6LtLLdDNvZ1MKkiU7Ht6kxAYk39x3vAvVHJE4keRW3Z2aUYSm2GB6MfGa5qGBiLTeVDpwcq3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QyQhVz2bcihFq6sMzmBeBkjNypbeALjP5z3cHgxqEBPjLvyeQtn5HornEXHS1dDjnKeLoxd71mQGuZnWGA6rgvv",
  "key1": "5WKCrC9PVcAfm16VQU1gi58TyTN9S2tFcbefbTnaeJ3oSJNG41ryRzt9scwUKnxAGRZPzv2ney3KPmgM6ASra7M8",
  "key2": "4Q2stW6f1Gr1kq4dQH64A2FLgGrwRHJ2V9F2NUgnG1v3H7PEuM1hraAwLyc7nJQ8jv1wYM1VwjM3Y75mrJFV6qGQ",
  "key3": "d8HJ5nsNqqp6Wtt7YBJgLFXu3Rxi4JLfp8RGnjaimMxL91RqDgMaz2xLVaBNTwSy9821nzLCGXa3J5UeRHW2S3s",
  "key4": "3Jk25BkM8hZ6VdYPqvEzqCfnDx8TNUa2VuKg2qMLCXTeeN5pBUgRFjm8bAW7HqBkfGrvEZo3J9EMWuQnud9CeZPx",
  "key5": "478U3TM9jrXRo5WHyBQaW4j8u5GtMGcY1EkPncZNUbE7hvFw9hJC3T57Eh7ZabeEKb2vERcDGjujfdZWVimZ5vme",
  "key6": "3DezgFrFp9tgxHdfcDbv3XrDNm4gHXy1YtXMiLafTBmFU9hVKdYbcNmWGL3MHHVybd1k2w3E8Cv9GRCYbuuyirSK",
  "key7": "3pYxJXKieZfmSZNfdabtQDgZ3f83aFM6Y77bsEM4pdFrMeTBtwiZWLxxnvq3RXZvkTNWHfQ1zoZ82bbthqc1zE72",
  "key8": "4WJHsWXqHf16FVTLvX3LfBKaBaCZVCEkeb4AEs2iWuH1tyHXofx9GZfxgwLCA4gjkvrSRiqbjYku1WCsFZkMqNV5",
  "key9": "3oHuB272RgVUC3crrq17fvss8A8c5LC3H94fUYUeZ7G23Hy1jGN4TgPZpakaAhmVpLhSFdj4LVPACR7EX6hBMXBh",
  "key10": "5ELj2sQaTRTBMFr5K9aKcJQt3AN2XgwaCF6J65xLGqkuXWCkGDdZHvQhkfyhVNWcgPkUZZtUXTge2ZSGGUCPPkpQ",
  "key11": "5bR6Msd2EZhdcwg79SEzSXfQU4x9TqsVMRihEimrmqDD5ev5DBdizsKua2JMyHTotdT9TjsSP4uCZhRhN1xJPYWw",
  "key12": "4PcjE6YVzZcRb2FHxgdb7xhF3BBAWt9j9PodPAVXS5XquDRkGo3ZYA4YxmvtUTYAVZX3yHe41PakbBWeqWFmv2fE",
  "key13": "adi8UeSPC9VAToa5G3gxMiiBqVmJcsfZvLJXtjZs1e8PXK7QXeav3BCgtFwmGD6wmts3UJW51ZsrpseSBZp5WBQ",
  "key14": "5DZZmuZuUWR9iTxZvLJDD7E3E6XUY1HyPshberkx9Di8V2VUFtsaqySAvs2SY54FeyB2ZLWQo7FFZJEsNfLcafwg",
  "key15": "3xLuSP6D4xyd83M4ZZMceMWrBBYTy3EFyQVHh1z9gFKaEn647Vy41JoVBrxapiybRgT2gtm7Hoi7j47fQPhGXwy3",
  "key16": "4q94os8qtC21DMxDyK5gGi57nYDpqnL4GmiHxPuvu6Bw1gsocFcRjWspP87XuYiUggYzqawiv2bJAZ5PCReL9Dod",
  "key17": "okGSsA2MwNWpLVy423b2FKSw3xmqKiumMeue5zaZmJamJbbGNaZneM9Wy1h934q3oDufgJ8wfV8UF7vNBJLAZpJ",
  "key18": "26Q3CYj7U1H6s1iEazM6v6CEo3Rde84yveqj4725eEWRGkpgTr2G7tAzwoGn7ZTB7b6LjqksoiHEbVh3BFA5YKja",
  "key19": "XxhJoSD5324tfdawNBMdFnSPhi9A2EPPnQNy9MoPZCRUe97dJQj8p5RyVdbB3LQCt4cDAF7akt3w9cgm6xHuNsn",
  "key20": "hsJtaUn99q68dgsNFotQCcxh2J4coLTy9neBqDuruUM1Wg2QJGEbzYb4fkUveCSsXMG3LZWw3xyBa6ao15R4tie",
  "key21": "5itGQLtzBrstm3isFL25TEqTugXF8xjVVSkbmo5CecN1pnQvSdGWMDvjhCJLh3QK8LtiAEJH162dCZKr2tCQZ7NB",
  "key22": "cQ7vjxLSdJiNV4P55iq1a74JGFHFaNWn8Fp73QK1EN3VKS7QnfFXTVkYvav1PDZzbMHQ9LxV4Eqca4LtWKhVyuk",
  "key23": "5kaE6s2gSkuLahGMi6R928E5oz8KT2Qfs2SsqVBzoMSrTpgQ6uvVhpa2Xk8TRrihNeUy1rf9eK6wpvbmpoUoxWGs",
  "key24": "jce2u6cvTiMDQ4Wvkw3nHG8pAaPEv4rYc43vyBx24x3Rkgd1fxYEY19zCLJzt3py6rhgYoJ4tUKAUuR2o8GGaXn",
  "key25": "48fvjwr1WLjGUA5ut1D3aJLvsQNugVYSSS56dwz2Z7UAzpUDRveo67CJaPSoG2RtonZk3qzSeJKUVnJAZRRdcWEF",
  "key26": "59oXZCHM5QnHL5HUz3RgZozdTdYE9aRFYv4PUTHoo1hAgqWcZHKmhn6CGtmkxFKhYPLFDi9aTsV6YVZ16oS1nM2z",
  "key27": "3mL55bMe2Bxf7L59mCaoy7h9U1W2Ks7TX1iiGfPFJqK3rruGjugkmgwqan64HxLoqNwpHJyXf2prcTH4NYGAWnTN",
  "key28": "4zzjunfmuFuUUaN42UyNJYcpYPXLDYzc25kdeYZB2EtGVDFJ3fnrhtjV9ZgeVvvi8XG83sadJBwA5AkZmLzmxZyK",
  "key29": "57DZaoMkJbVEPUERnBaMNwjmZaRQksFQEaEdVXqx4bGtxSTbhUrGG3nmqWa6Bvrhc8g4d5ZY28MC1k3c7h5NdUBk",
  "key30": "5Q1bYuWn8Lu7sKezp9sT1WShWaznx34t5Hzk3H1yGq23Kg4kaRAS6mW4trB6QYxaYCx1yVQmLYr6kXkRSbPooa9J",
  "key31": "4tc8w3bJE86FSC8NimzK5pCrJKScmZF1x99hqsLNH3qnB8ZtGEZ5iW3v619Vd9qCdM1iMnPnM9nw96TZJjFdiqFV",
  "key32": "4w7JEHg782K88sVXaUYPM364pVhGRdtNq5WqB5ZYxL4S5T1nYHFkNFusK2tFfMQdKs5n8SB3JZsCtjocmCmKEaTm",
  "key33": "7nAbgYR8RDAGNo2P1U4ec1p14mh6TfWwzfTWazTMP3QnYAzAtGH36hFNS4EDp7nMBJFRKtPyo75ntKhFEuRNUrU",
  "key34": "PpEDBTrE6rsi7V6fX8vUrh3Lz1k317gFgmiPuaBEUrTRgSFe5SKodwxH7gG8Sj4BkEFMWeUMmSv5HJTzaaXtVm9",
  "key35": "5rSE1C6eW4pPfXDjP3sSFwrtPLh7pdirWTwh9rdvf1zFFcPQH9uWzP2FQmR5azUP6u7st8wtA1ZW8nXN9Y2mHPWQ",
  "key36": "4Q5vrrPynkqmbmqQx5zoUuaawGdBvk3NEESouYGHeywHE5CJa3bYmCc52DxZwdv7hyE3AYdk9Te1mrjeZEE9H9qz",
  "key37": "2s9aAYMEUkEY72V7dqSjBs74SJS9uz7Jkwu8sEyQNK11hd2Bept4Q6Pbb5iNyfdod3P3eMKZxNgbkBg68h77LuAD",
  "key38": "RG8CHARqY2TPYAL1wdXpEg4gAH518tweAJ43aGFBxYsdQQQ5ohLEogHphstZzPtRmRrjJNaHLfBuu6a5g5Mv3fR",
  "key39": "56YepkeNErQuRsvWqQmsbTC7Xmz95VutWjxeTyUiT7asvZtjygrbpXgXwHo1Ziv2cmRgUVh7qKM8JtZDoDgg15mr"
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
