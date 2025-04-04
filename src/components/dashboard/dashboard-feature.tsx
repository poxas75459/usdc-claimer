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
    "MLgTg44DrTcd8Eij2Fa4jsSGWggwSuHcp35oQMq7D9yogVPVE9a8bwVZtUqcLXH5E2drv3NuUago5T9Bh4V2ZVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LByV5dcjhr7XPpHfVKd3wriXBmtUaXaKWgSGhFo9mhk43wY9iXAaYR5TnrrDtRd4cvhWDdnDdArZTmaab3SHtxY",
  "key1": "3UfkuWBJb3zLN2re5MmgtAXDVuvd7vvcfTQdeZEEkZ1XNbY8KpSA6umS3GkxHV1Da4uEQyYRf9iFd4H7ZZcTiCjQ",
  "key2": "3vbRoTwq5HSsMLbuLTMMpDSiqYiJSB5vw69obqRd7Up7BwLeDVcXdphVbLzv9GsctMTjVzjdt9kX8nASwdpNrtVT",
  "key3": "32sJHcX2vQZefSKCHYzZ2knMJesMEdi4uGCqqd5dNFfc9jP3pKQnQCzzihPva6U1RbzN6XtWkdboUW7UqMR81p4P",
  "key4": "2wDR3rc9gi4SzmouYwCobkJPcQVRcE2TvDajjKmHg6dRJEkTF8Q6fueyWtoRK9pTVEYoTQSD3bXtC5517MEMREHR",
  "key5": "wUNzqUvnwX2W4vZJz1YquAunkDn3aF8QqdrcC1RqnqSAwtRRKyhdVqEPN5jTvgyPZ4n92NTkXLnTcfLBgqkFivf",
  "key6": "3RumGPPifbgaE7oKPoMXSDxwFpfD3hrMQYJKUVDzkZ2n8BGeMMQ3hJP87ho2VSSCsB9MuWPjncs8hup5SkAvVDtG",
  "key7": "fRBvvJXF7SBpAJgcieNrsaxQhkRBgZPiGkxf7ppgwK1x9ukN85LWbs3FYe288e94XTd9NSAv1SuTSaiwPoxgjDX",
  "key8": "3QtYPYBumdWq7LohYsz1FUNEjvvEzYbQfSypSzuZ15nsjLSeKLqTZgUxEVfvG3jCef88s2GCePYU72r9v9AYNH9t",
  "key9": "2kdJsNzmMU81n9QwhdE3jJfvSbT98cthyQ6gebY6XJ7WB8fP2GXeFX29HcL7RtVS7MYtGXSapHFXBkC9cyf1DQPA",
  "key10": "Rv6VE7h9QrW8xatB1tuQwt19VQB4srm5NT98VvDxpVBmvPycXDgrGbfHnBkaNypxSnyn7H6JLh23RDdJE1KRHon",
  "key11": "2VMSSfErwB69qBTJtDcnAa3H5VD8pjhSHkbfc6yA4NydvEdytm1P44nAJzLvdzDKrKRdv8p6upkn8QQLjtSetJ1c",
  "key12": "5NazagX1vvaDeAu88xaWjGdH5FgueVCDzz1BrnriyDHYaWW34EYj5ZfJRwqKdK3tr62fgHbymctxyanReT81Vzub",
  "key13": "zsH5n3gLbyvq6ZfXdPkAaJCivcch5Qg4qspxroVcHCknGq3rRJ5oPEsjzgUeSG8Q7MoD3AQzns32uZUngFUNjEF",
  "key14": "2eqTdvfs585D64ET7oxGtJGmrowubEyzrgfCZhLVzgMBF1o4TCtvQ6sbEeTUYnohV2pXwgwG6VxxpHw56vUYRZoR",
  "key15": "4pkRVp5tW3Jk5Sjcu1iC4v11hg4uie9XWNxqyi6iyTNhpBZPsJzc111v4Ziax8dCj4jUHvM8ehVkBvB9mvznYKhn",
  "key16": "5KqWkhACEStQ6urE4xCjYmEGTU9MuWzdXZRnMojcG69tKVLzUzQrNTD1n1BAcQKgNaHhs8RsZUDw4s1CdwCfoNw8",
  "key17": "5FGqT7KLZFFRoq7MyRChhdJ9e1HWu659YcVNYJu6gfHYaJGQNQzakjtE233UWKtEr1ft5Goevcxosojo6zKZzbuc",
  "key18": "4grrp52YWaMfCrsdWrT8mXgYfVo9P7tKWKpwMXwP5TkngwLy7mCSq8CkDWDUaknoiNkWymqkKQeBy1FZGuzk2k1d",
  "key19": "3TWjgUwvpjQCdY3uMMpRPMK846fJPF2NsUPyvf4o3HDifH4gSVZpQ1CMvDMTdePtQzSYTdndcNGaLw5F1LgUUnN2",
  "key20": "uSWFUYpRQMZFVvHkHfzfq4sBvjZkgsWDJAG7e2JXr7kk6MzqtYyquta6CzcfFtByHqqMpxzMHehJoxgergYajeY",
  "key21": "6bF7MujGBj2NLXKbctXSFaZSRTi3BygfGxCj8VrnpDRvoKqMe1iRMTRuMi3VnjFyHw3z8V5jQYCxpviD3hYdy3V",
  "key22": "dRBVD6JcLVj1DLtBKRyjsEuzFbeC11gAuRoTzV8ea47x1hoAtVqLLQp4AHN7PCxXn2ocQzwgSCfMrEMUz64qK3H",
  "key23": "4w1gm64on55mdJA2aL7Apc4tSH9DvNHNg3bGWRZTxTKV7P8tJLnd3tJXPorH68kcGmbEVsufghzurkEMmuAU8piz",
  "key24": "3fvnNUfGVda84LDnht7NBKZLx4a88BX9tNdZczExxTvggpzSwSCFYcEsmk39tCy9Sexhn5RkXrHBvv52VC468Z4v",
  "key25": "487DiRuWgDGDqQk67ynEnAXcw2bZp3HNXVNtpf8Mp5idcE1HJDVAFAMBJf3xm85YJQuM1DwkTg7S5a6o1HgE4x7f",
  "key26": "3crmpGQTiz5cyitCfQakrbzBuftPbq3b2snd6wjTYiX2ZthnkPLMxv9QFEfwgs8PL8Hsxi4DjK1Sajfg4fAAtS9n",
  "key27": "5pWgrbTVviiyBNHAAvwCZje2vKg3WruQdfrMeWFdGghuKtUk8J7qtTVuvYiKuH8S4iDbTnK7oxURVJEk6BG3r8So"
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
