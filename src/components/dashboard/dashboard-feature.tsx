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
    "5TqQcT9YTKBS1W9CTy9eXzc37ibqMqZfKLKcG1yfmFTUZW82Mn3Qb7Coc64puscoYbe2NjMA8SYccaLAo7Lc9zKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22kUCQWpr2zp2BL5MPPwXig7UAUwYqRY2tXm6rh3TBYan9JD9EWNxBTN5hybUkr8a8m6jU51SitGhh91aQSKFnfG",
  "key1": "4e28P1hM5aTJxNcANTsBTG3yeqvtEp758bvyk4z2x3FVBUBuy1jP3sxCYeiLbX589PWeaBEphctxSoZ1j4asboW2",
  "key2": "42Sr3S865hJ4wxYcTb6BYm3hqBs2PDyjQ6iVemVnhK9R5Ry8C7sbRwfUsuGhbpYDAhafNLc9f1iNEC9EHgDfWCkK",
  "key3": "3Prjc5MYFejd742FFNHJt6WkbXAqCRX3qZaYx8rrufgaXm7fQvebATv1XmNRfvWcX3hf7LqgQT9epp85F1vv2afK",
  "key4": "NiKZgzF4iwSi93KN854H9JKpxuJXmR2GpndyPr7RXLmCyXAqDRKEEiYL1Zmp9TXm25SSfVDsavjaRpg95JxHs2H",
  "key5": "5TPw3AZxvT9Q4M2y65DvgiC8HkDwgD7Y5QmLSh69ccjQnCQTW2MamSw8vrk3iGTwSYjaNNjzHs5fS8vtH9YmYvUw",
  "key6": "2WvRPyGMEq5Brh2d2Y57s49MCaeUkx8wNUARJ3SzXXt3qdihApqbwWHWHtvGeKaykW4ucAg9sDUP5xFDLXcaP6Bv",
  "key7": "5U6o3YkbvEqQu21QxTiYqrhzYbuistH5EfMz3sTXgzZMr87xu2MY1ezsarvUZqsmE4ZmdYCLeyje318TqAnmse75",
  "key8": "3LuNkY4VL7Y1oM8WbCYKdL1jCJ2w9LWCQhv6RsS2n6ivEKiJ6GZGMbLMJSpMLBtke5EkECTwhy6We1bqVTtRG6hR",
  "key9": "51bMVTwxcfcq34pnDQx3jfR48ATEq7EvF8v9QPCEqmN1ehJsAhrbzvBN4AZzPkRhCfzwC1VQEacUUDLGBrFuBtSd",
  "key10": "3ivypZpLnXXP6PKYMXP5mJ9av2sJ2s4P3VG7DYLUXceMsYXQCFPEm4CsgXrnDu54Ug673rsqQKUaGYCkHYTtSneN",
  "key11": "3teN3eEYogGfH3XQ8nHJC2SdoV7CxiEPZn9N6KmQ21SSXioory4DZXkJfNRLo9oUYBrPdYCUjyBbVf1vuVY2McLN",
  "key12": "eaf8wTx2PxrKvn4RmWnEmpErxftHmnG7rhuzSmSxrgZsD9CmnxDzU2n7HPiCFoAdq5miKT5aKwTLsUfAEox41Pq",
  "key13": "4pefj69A3sokNH3rDuFmFoGrN4RtPr9LWJ2Gw3YV5X9TVP7FfkxqfpfBCMZDHsGgzvVFqQo1u3XUVJMdijiECANN",
  "key14": "4AXnVKnb8kLFp2mK7MqhVVxd4SkpG65VSagByryrXhqh1GHoMzRLXiCMVjDEoDp8py4FLUrZgxntFCgjwnbQ29Fc",
  "key15": "3mZ6brChjG8dp4FMLEyhUTnos9stpaRwuWyxHaGeGSkgtSCnCrPrmZdzMdvtFp3uc63yp1gv3S1iJrc3oQnr1yS1",
  "key16": "4MTkYkBzKw4i4FLobKkMyg5QvJ8YT9YtZaZHooYJbLM19LHBezLE8BsVPHJTnzbFGU1z9yNbLjgTnwVyFopqapjk",
  "key17": "s1GsTGtwL78cak7w2WaAV7ggUun2JPGnipdPLTgBZy5QAWk465N3xiRX69vJ4vYptyyExG4KpU9gTgEJf5UK6cL",
  "key18": "4XaWfDArLC5ZN7B2BtXRmKUyD6d1t2nqAT3Lu1JxkXohnFmz1ZYqaf6PjKdHDsgxr14FAk7GuJ9KGtwiwyZZV63E",
  "key19": "2c8py3raU5io45qrjkja96LqMGhywy8uZe5Qd3nJ3zUtwZ66Yuaqoip7ySsvu1iYF5umzm2wsGf4HM6aJseY2NWT",
  "key20": "3SxWSC39dq4tRLNDtgbkkkoFXDFXNh2xLLwSVvxviKHpsnDm91pWbx5T411ME3oKsdLuxuJyeNM2K7hjJEArabEV",
  "key21": "5BpZ5C3GaswfAC9aeB4eQA4N2KDPkrkWfmCs1i13GXsCypsCeqXCZQBPfHXX1dDPqk11kbFvect7D5aB9VFN9mak",
  "key22": "5RzFTnwoLUGLHJggmzaFFdq88kKgPqqeYsRLq7xBc5NWTMBwwzGfTeF3A59jq8wAgq13gHV3nLDco9Uf4H2J61h",
  "key23": "51h5VwGh2ysM3LdS8dPZNDnzAqYg4J24JKhcJ3DZgGexd89DPyVN1tXrTDBVGzdGWvZJXtE7Gvv39FobnvoxZNBC",
  "key24": "Gs3y7V9NHSNpxXVvq312wZsHMaSqB9cfyEg8CfQaGhtrZcMWk8TTf479rmDfYw7JKp1bgHicSmZRREVvXFYWP2C",
  "key25": "kux65mBuTyTgasPR97WbVQDKi7YfHeCexEJKhoW3q6vc6CejNYL3QxVuK4miPzmG9oq4iw2ivmguqxDmGkJUzVy",
  "key26": "bW8AiqXeRvCyT67DVoo73SL7itUwQYUQ9YvsPJTYJ5tyrerxo5hSYYBk1wkVsbuZhrtzioKWGifAMxNUtEYRxmb",
  "key27": "MV6tjzUbK9Sj7Xnt7BMqPsYazXParaSL4f53bNfoSH6q7RvdisJhA1jbRSo8Kb978RWDJqVSjgaMh4VevLkZWzA",
  "key28": "5QRHAi3sSW6De5uQVS8guCQeEKeYnZW49nZBNykZuJR7yhNm6KhzznBomXPcomDskhbVVzy2aVawPJheXAadhVxe",
  "key29": "mf12WSJVPeUnvkERTfehVGF5gd9bJZA39dQZzTC1yuGnZrFMBSM7fEzaaB4EmH69SFvuys52MeUFAGM1yjJdiE6",
  "key30": "4PJv6NFXSV4GEX8uh8L4togxnfPgYwt5g7UAgiQGDSTMbwnhP6UkYEtu74hE2i4y8y1ox11wiGzVbXaridb2i4Bc",
  "key31": "V1fsvnaMcQhEx82cDEmsA4A2maBmC1T3si8E7TsRwtv9YtcBH32ES4JKNVwJz69cEpzZXvHvGioCH4nh6YeywUn",
  "key32": "4r6SjcQm8K7oCgbLWGXWy1pLdRoz5uNnHKbZ4xq7GMo7Q4nGDhA2iTWAXKzBvTsYqCB6kiFehNGhpRAQXDMV4GKK",
  "key33": "3raeuMeMNhXdJCh1NVcNtupB4AgVnRoS6W5iEhUCaFV3F1gGNg8RamTZwxmZjPuZME1WrFr2rnS3zp1AsmtqY9Kq",
  "key34": "25twj46zEsyNdVSqJmkGT2GszzhSJvJXvALgk252TeBC8RyZMAsLhgixuL8JQw72pjjyGQRAwDYUSiRvBZuVc3mA",
  "key35": "66w2xq1VehorsLQoWeuuAWWRReP9bDyj4BgnsPZDNKY3iBJbUTpjRtYNcu3SwN5SjCZUCikXWGezXmVs84ypicYf",
  "key36": "5Bh16Dj6T3f4oajBs4wQchDqUgmX1RtNf8uUVguBMAZfrEtSWQmr44TL1Ytm37GkNLse17tpUPAuonMJ8qC6JHxs",
  "key37": "5NCzR49Gq9Mjr2NyZuNzEm2bF8k9tGSzGTUyXdD29hVvUeVGTPnP8ghMt9pFgvSD96bTLMiwSvWC4sjUzDHSULdE"
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
