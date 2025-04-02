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
    "4LmgYtdFeyjLTtcxxep1jS6ipmJ74bUrM5SrWAU9GMdmA7ccGGJjZ6xnVs7dxLUkRsf2EtrCt4G6izRUoY2uqv7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EoCw37VbLFWyN5DhMtq4aRxxAAjoWyn5x8aN1jVuQeFSfgNncqk15KfEWRDqRpoH4dfqFXeCN4acLpRLH7MozZa",
  "key1": "4JKwMbgsZYnMGYC73cP4v7yiJDnutkrxN4q4M4qUUmjVi2Zb4RjtjJf1XMBEyapBFmjApNT4cFh3vLzeEGjL9gui",
  "key2": "3V7yFe2gzZU7aSTFjAGHtvesBKtfM71huEMGdBhs6CrVjgfFzur1S5QjWKmVhKnRa8W4ke2xGSXz6Zm9RkB5Hgcv",
  "key3": "5dcqtpd9R5QLbNUjDeWh9rABuM7rfHQTqYeVcWM8ReTGWWfhVDzCVTc9PzJBqX4DGedkwzEifMUc9gZxhipM5LY",
  "key4": "2GzeDBcH3LEeYjzctAaSqGzDJcSmiPzJ3d1kNVnjZR8Hbfv3GsJfjDBrG1674qTGEt46z9webJRs5KihjvoYzJ1d",
  "key5": "55aTgEhE1jR8x4CHhruBggemXhiCu3iHkUQcsMMYxc9wfdzieDanEPWxfKTXe3AFJx6jDUFmAL26hgSK2suNKACn",
  "key6": "5gPEQY9e2RAdUZee2qwFJZCrnwok5bPGNZeZE3jRvkotLKFhnADCYQXc28gjeYahVHt2C7rnbiBe6mhqKgSba7vL",
  "key7": "Q1xWraQXBpWcFEVYEALiEZpZwGSEsaPnqQugFPHmDXWWaLqMKZoXKyHFVXZGXGKQ2cLkaqcvK3WuEzH8gNmcX7r",
  "key8": "2EMSo9hMadxyf1H4gPqQUXiPYLnoyDsLadzAuZDFyW2fn1nXv9qPRYVkkjUvNhExwCHLphzDGB863wXhm7WuWMDe",
  "key9": "2iPsoH1UrHC9y5sVs2GuXEpHQ36JodhBs7zxk3YrPwVw86LwVagi8ucHG78UWQUYEW1vC1nTqoJYrpwHQ8dTNRb2",
  "key10": "AbFGZkguod6vCfmBf8oKFtu2jZWaRgsRPcxgv64KfpAmEmYDZEKsJrzXoy4ZtmUnH7JXQaa2WAZ5ZDQhYuvfpc2",
  "key11": "KYdFbw3ZeYzGYj1dxZXtXTZdSW8pyLjjHWW1UexjF3VDgdUFbhXJqdTY7BmWcJmET677c5yc8H5wW7n1gC7JFz2",
  "key12": "fxYD9LgBtD5qKBvFregUDueetNAXB6Lj7LnbnMDkPGpmn7xLsbjF3G2S2gCKnWPH2f3CcwNmu3M74U8jQk6izBn",
  "key13": "3ZrqDzvbaepaxQacDfh7cSgpiwcfSKYcTNuyzGEYYSMjpumhqYvQ1dHWNkshnTdXsuSymvnG4TyJfBjSysxyySJB",
  "key14": "5yjusdcLdMruiGtLMReGJg7omfgoUJZvzSZBUB5paJyd6V9GdPgPzvKunJoFHZU8RwmA3jiybPMXbs4Bgz8QfXps",
  "key15": "39uRPK6MaHxA7QuV3326YMq1Au2cQ3y2287dSrH4ujBQHnc9NB7NnHRzdsMzU66FZSS6xWBuNnP5EQrhqiaA8hKx",
  "key16": "5KDTnDTHMJwSFtQ4kirNHtnomMZda3u2RaCdy9h6QG94cXfzu6cUaDxd6yu1h5c4fjo2ETGkkGHgrjTL2giwaARY",
  "key17": "3MMVK9eL72nrUpHbnAzZwC9mkZFdfbZUjKrx1MW1MXSC5Cr8abQ1mtYjpRcBcPQikxW8pgrywyXfN3e1GMCsB8sD",
  "key18": "5uHVbV2UxAiUSZme7qhU4N6C6zU5CarS4fHLBtZWGW77LvYM8xdyaw9XQBpKk8A5N3MYF6uA3ES2AjgfdUg9kSZw",
  "key19": "5qcsyXguwSQVxicWEBfEDEdrUkY8cQWE9mzTfcQGuv8M4hSdxZHoHc68t2cg2vBq1x9yW1Mi9AqJQxBJaVdbDEY6",
  "key20": "56XV6eoHXjmfCeFUTEnS5Ma3nVJjS51YAfEEbptySScGKjEDjA2Z1v4YP4JBXZXWGxtEU4HHHyXqvfpyY4dKYdYB",
  "key21": "3WviG3NXSBk3iSvoYZgd2gFaHBPHYGuN1nRB8d2UfaaRe3LGgfr3pHPJtDsgGt7cpB2nH2EHu1hZFXrjkP3v6kF7",
  "key22": "5yfJYoiDQopcmGs1ZYPgTTnMBYbb3cE89XTU31mJidJbWesZJNPXUrJhVe8cXcgMeCDHa6zK8sSdNLbEgXvLaCaD",
  "key23": "4GUJbPjRGGCBhLR6qz3ogL8wJfjhRdayf1vEB3izeBbsnsuLSzfjgjaMyhipkjqkvuZCCFJSzXV3PmMEdXfe2vXm",
  "key24": "LXRvzzzGHuoSf13RZvBgnn7bJhtzENTjp3PKQorDbLeQVTyu4zaFwvfqa64ZiYU1BgEZD7AVguHPPTpbdaa2XzM",
  "key25": "2DJayn9rNtFpbt15USuWwRDYeZvFfiLwwQ68LbthqTgvPmPnCm4mYHDj8X4pMqSYuhDQZGVB1YaDtWM1agoDAr1j",
  "key26": "5WjwJPMbFK3Lfas33Kg5tKhP9t5TfxZyBWowdE2QvfDu5gP3y3UM7V3Grungt2mYDSnuSWBrMhSd1gnGgHtpEEaK",
  "key27": "3h76B78Wmqc8Tsmao58ScqE1xhCfEdERJamA9wHW7q6fDfbZTHe4YovzraL4EfuSxSDmMXn2YTwqDAoAKphrdMkF",
  "key28": "TcZZiWNaqpAdCkrMD4PL7HGuHgx7xX7maxsDJ5ggWBXyUhaMdt3tpExTNvWoPvUDAaFsJp99aDmfjFz3gN8Urni",
  "key29": "4Tf8meLTrr5LZ9hco4PBYzGfZDH5nu44buXm6AHcaYTTN35Y8djyC1921HELHTfco7eeHVhCwd5bYaWhcBxqrzRv",
  "key30": "4c2YaMJBZt4hoP4vnDsidQLHVUA3e8VeXM9ti31yy4XaKx5NXgJawwZBLcACWNuQKAkk4fVx3CLBcyRr26kjyaei",
  "key31": "frAmLe1KPEJ8LzXfaEnVSTJSBddXwVRZRmdrLTX67TphxEDS9HnX89U1UTv5L9H6twdh8x3NjibfjyPF8wjFyDX",
  "key32": "5WTQxrdJAjmP24XcqDwuopNPuHuFsWtHXQwfmUwYc6WuWohYeAQzXdqS8Rc7HaGzTSEsmdxteyvmVNi9hotYQAdF",
  "key33": "3od1tukcVcgokWV7Jqarn1vMznsaRhwebnhkjNfCNcEf7QLPXFa2ybQkRvTrH9ReigaXC2PygFKeWbHe5RnFbxLa",
  "key34": "ybza3v775uExEmWGW1n6hcjSCagAYR71ZBCTmMMs1TmQmHrMk5wbAMkWWreCu3uNbu3z2jJTCE5Kufj9dVG7GTb",
  "key35": "5xaMVK3L9tzZATq4c3ZKDh3aXZSrHSHzLo4fx8MhpZbgsyJVKBJnNTc7H4QR7s7sFC3SqiYaZcxwxiZY5Z231brZ",
  "key36": "34xLePhaQC9Bfv6e2Riz4zKJfjcBkHVUbEEjuYxxFtr36ZrNSqqnn7EfUURQhHNVGroWAbUJZDs4gXgGMhMy4QF8",
  "key37": "48THQVFjJJqNuYRfgVH8Y8E6A1QjTjSKMNHh8bjnTC3BLhvPML8TLxhk7aQ3rhTPnGLWNbn9JEdZEkb5Ho5ijLiF",
  "key38": "QY6Kd45UAuJ9D5hfedY69kvPUCbXPtomY8BHrSaG1keBWmue79EBfs3kDFfo4sRWw6X4ZTvZT2sVkaBz69NdFAH",
  "key39": "22z5NrVS3g6VW1tcLVraVNnV68PRXp7PhHK4yu5hxKqrouppwjK9ovTvxEHg2bJr1DXyJfpPQiXM2ieUTgHxem5d",
  "key40": "JE1c3bRD8kzWoE6aXYhQtQwhCKC1GxVUKDLHMGLUZkGYpCuo6QMLSfN1PyL6wL7N6uyUPku9PkMwNfiPkpmgtad",
  "key41": "2nbazYuebLoTxG2rXVvhZhTLX1DwZyrXv1m45QgeLJtumUNveHmy58NcCRrH6gEmG18Yevbi9xEmyMf8gNWoQ2gU",
  "key42": "4YtB1Eoq61mkHokBNCs1s9ifp7gVn21VAE7cJEnuKnJQytxTDZbfE29AA3AwPkHCSLEHHWzpUUTub9AjFZcw33Bf",
  "key43": "5wbETVorWhxFtvw4chzToZi1gDw4SM7pYtq8kLNg4tqFZASNt4B7uJiAwx5CmhZ9W6gPA36MyBCcPX7hLPZYpzoL",
  "key44": "5DMtycACYa8M3ANjLo2ZWThczkFn4NzUAUd9RVZHLBYuXcsSWusSq8PA3uQa8f8fn3Ep9oVk6VGTpsxga4QvTArq",
  "key45": "Pos8GnYZMqShGYEwksgDig6wA9buAdXA3Te9EMvmVjS4pBigoq4Uhj7CiaL4pV13HtYQN25NXysyeiAP8S74SEK",
  "key46": "3Bfkm8D1iabvDFLiDCi27SMsfnBj5Q51KBD9RPyKRsX3J7eJLq5KWC2EUJzBdYikz2Hanp2gMujqQw2BHrhSUF3F",
  "key47": "RgdpvwdDoGaMHKFfFTr1i4f91uT8YWZXsyMzKcic6ZufxtqJCzQ7L7QoxEPqJZ6FwHZHYC1TPBUUBZ5ZpuocB5x"
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
