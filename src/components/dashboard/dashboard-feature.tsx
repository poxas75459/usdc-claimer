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
    "3P3LSAsd9pC8E3RMNK8fgVrYMdeWmn95qJXdaNzsHK8uVqTUsEFZqATg9Y179wFACrJyK8R2Qk2CsfoKg8uX7pzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fbcrGxds8Gnm6bj3a2WgVFrWhK1cA2vDs6aQniDnA9e2HYS5DRLz5EpuzPnPfum92GeYLfua5xVj2u4aW1D7fFG",
  "key1": "4eEWj736FRY6VeMYLHMwLUPgsjjeER4C2kjSCVcaypYZ1P2qL2sMmwy5M8BUH1R8W6ABTcPTkvbmi5V7Qp9NAKdS",
  "key2": "3ttYjv1vDaYYRiWgUGEY9p2gdBdiFx2QWsn79h1euctUvcbvjCJMoTZuGNmncNRjWNvB3hQZ7P395ESarLRhAJZK",
  "key3": "3pJFzTt7JfNbP33Ft8CgcDRZDygkzXmE3HcchynMe3mSSnz23UHKSBdxhuA6anzbrYUBTmfovQyUtn3ykPHyQBHo",
  "key4": "2nCnNVZG2WxeGR3humWeafTi4KGLtLi3vKkfW5rmACigoyYbHBfbbckVTLs5smd7dryBw5QWEiwrHRKahSuvDfji",
  "key5": "2tMLptF2HuyLYm4nKCh7YoPrDgHX9zdBfk41M8mn76s5QnPGoTTCdyxo2G2q34sjqPHbxcr4zTkTeEv8HjRx4Zb",
  "key6": "YaBhNzVTnfZgyXQd8BG64b76Qsc5S2sHmnop5kaPP3NMt4aY6oKuvVrBcfmBrXgqn52XYN8iRkZkNMXeELmSVFX",
  "key7": "2ycsNkKzPhwwZqh9wm4d3ofMw1hzwzpgf3e3Q9VAH1Q1V66cGm7ku1pTwBvTbupZWMaoHWHbZu5aM1eNt8s1tvPZ",
  "key8": "3jRDZZdm9xhV4f6Q9HYnJQJHhjQn31cxshBafYXjNfDqqUQTbME3LLfQzAymuNsWe4chrSUr2LuCU9CJyLokvQAM",
  "key9": "36qVt4VjpkfXsjwSvWuje2yPrfbAdaGGFm53NnJtWqVuhr1fokFAf9usieJupGVAi7g3YTZcwsEJ3BHwNJSGXR9f",
  "key10": "5daCCTQhx2MyVumnxvSuX3usUw89Hs84YD5kuuHdnCy2rgsJ94bRtPuxzA8QV7znpiAb3bEoDiCq69e1Exnv3cuf",
  "key11": "3xwTiDwSQLisBCa4oeLc7dYrhgnRJoxZSZUcXXaH7nLwazbCuu6ATCBF5VEEJmkDvrHQpBz7ULAdDPieDuSNMoXP",
  "key12": "2mX8TZQvb3TUu9PBVA26Tb7WZGf6673Vq8xu12UkXN74ZikADpVogW8SLuT458YHFzGgCck2tgnfu1h8eCAAN3Gj",
  "key13": "444qFRyyHsQ1MaZVmsvM2eL8GjRExD3oSkYhhKUxv6JpfS5NSyPPqW8NugZWucfngfcvraoYCbCxoSnx85P5ynLM",
  "key14": "4nCqYNstU9NVPubaBrEVJvFsPXG3seZ44zMRPisKLXvvqeJ5qKb6vqXtmwKpKL76bAtHjZ3Gw55y9AFL9n6ZHBZK",
  "key15": "vCUm9K49VG6rVDURqRPCVe4WKaHcwJaHfmc5C4ugWobNbbk7NBztt7quBdYufZVbCuYA9N8eX1RspSC89JSffzm",
  "key16": "4GmVaT2UUGnBMJiaRCNP8NhAppyTHcJdoqJS9YBFDEVGdsBfyFrTchb3nrzhWPboeJmtPQT5kAsDkcw2HHVsHAbH",
  "key17": "kwGkAXg5mrwUAnhqdZ985HciQzTJAJ5GSpZKcXEaztKf9bTrhg4xdRqkLnFUXchpUfNvv4zbXQ9wQBDBfo5JZCJ",
  "key18": "Wi9e5k1xnqQ8h3xxMKGXbjkmxze4udL1kjgYbL4AE5n8tSZghnbQcV9nJzitgzH2MhHRApbqGKXmPs4pEhX3jN1",
  "key19": "5SNAv9GKN46cbGQQuRWkt8jc4mF7RTDvsVL3yYoCURsvcFUZjCvbGERm4Xbdq9YHgem9X5XaZCV5MXUfVydt12rH",
  "key20": "3PCZYSxKkMgPKzq3oaG2z47ckjqDyiZTP1rbEXXFLQYfVyy8XMu1cupc6HCWsWrsaxa3YvSggNL49fNckz34hNcG",
  "key21": "AQbXicZURs7LqRA7L8ZzXFgZ6QxpR3BqDCrPpKXxzW8VJANcHnpHd39QV81UjsrMH4t6gZ8443qiv2bw2bUYfmD",
  "key22": "2SSxXkYTJA6DFpUWQJFLiyv5XNUXUFbfmQQefq88VfpH4B1h1ES8SbZRD6Yw343DxBA4jrhyHgEGgauvfxaDh7VP",
  "key23": "3sZ2VrPjtvprtgrcCse7q5SPYqGgZs4QaAQgzqMSvpyta6cH74qoyC13rKeS9W8PM9ifYza4ConwZpiL9e87ntY",
  "key24": "4GMiQ8K3sL2CwfSnPPN6zntTUkXQ3ZtJXzGoCSJbgYvPTDM2hHYrmuQdFd987o5qAZSMTCgrubMgSHfmSd6PBXsL",
  "key25": "3F3vxiXaFpWgv9nRb8CA6cERUrD25UKztdc9rtLYA7VpAekSb9A8KG7cyYGSqFS5X6Qo3M4ZaCC4wuNZGY4NmdVF",
  "key26": "3JPP4Mf52gEX2N4FFfitSeKsKFLNznQKyAzfQfFsUoXY4K82uMC2jiL9Wqz6kEozjkfFG98xT26zRmGAeiWB2uDG",
  "key27": "65rQet2RaHH1FTLM7sombXtG3UQeCnBgz2Lest5S9zjNQpMpoV1pX754MiNTuUW4FYNebCK5XxaCVwdw7s3p39WK",
  "key28": "4VmxXziXNw8Cad32fEPcgmLqEk77F2KF5ysE5uUfyangppkpgGckzbFpmc5dmFg8AjAPDCg8MyVbJdkGVsBYXraF",
  "key29": "3BaXs5vUnVnQYmVYhZQScsuT4ewHEn1AQqsEVLUn1ppF34riy9MhDA5W4jBdu4zsuefFiJ7eJDX3zumsEzLUwuQd",
  "key30": "26tVhAQPsYbdMNGmBSrXFXRparJDFnc9oYy3ZWeq9PNFQJ1Dzt4J6KAEdDjTiSmMbL25HP8HLhjso2sT5GUvuPPh",
  "key31": "2byxABCBL1uiVbpD45mgfULiZQdFeGGzWZfRjMTL798oCQaNN6MKH82pVaXaMN5shKfL3W2ReBjJA1v6SqXGHgBQ",
  "key32": "123jKdUZfiXpSPFqDJNb2UUEQvQSZ55xDnQFzMwGo2BNcZRRaX7wCFiDd7a4ggyQQrLdmFvzhSjd9t13MSsCUtR5",
  "key33": "2GqMoFhaD8BcNrnqQkpz6TeQKmnJ43vRBFcRHprnY1a3mTS73CCwxYU1Y6faSgfWHV7SoC9uwDmegNWQKyQMCs6u"
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
