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
    "5o2kFrN2hR97jVkkeYAgfQmFUCFWogAAJyHQvdZySfNJ67yhwhSpPKqCGfvH4RRYH1UQURV8tX4tGzhkMTN4PYtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hotEa6mLo59A911vMB2c3g4YPd2XHPiy1eKK3pfztxAuFJJgakGY3v7aKjrd3jEvfk8Nm1YLXmoJCbSLZhHDGBW",
  "key1": "2oeR6WDEEtsZcDrjFcgpSr7drnJovpSAZndmNWkU8VqAfYan27ecJxB6kwnxAXUyooQHrJGamwTB6svSnAULj3zG",
  "key2": "4AiaKA43WYXDqXTytuvdYqVibpUwcaH1nugiLZhoXhyPnoUXwDW3NK8qRrP2BtgtyTa8Xhv1Mxyq9JSQq3ADUxYP",
  "key3": "KDXfS9zygez5ciTWDeHRhSZvpRaiPsiPJzzqZebZKipmz36Bi25XxJwoBCFuZv7P6zwisKMvFzQTYjBYSvCn6Tw",
  "key4": "3W4ggKu63nG9EL6tMT9fw6TfbU7JHQUvHK3idwZgQA1UYJGV7uKeLX34FvCT9WezHwr244PPuTBwZWQpnoq8mAzp",
  "key5": "3ZQKnDRWeEpdFyUUHMaj4iYEky3RX8Bis6ezk39nUFcuyimxndGnVmD1heLqYbipG23JRpBGLfeKtjkHzyiwCWfX",
  "key6": "X57Wq5dKHMge95dMzBrMhUjrrTrjGoFB3djSFZwqxjVahGbszbnCuoaa8Fis2FEJpca448yLNjbrF6kYLoYguVS",
  "key7": "3Yq53KtygALeRmHn2wHAuxb64dnnpVcLCTQr9PPoJGcyoqQiF7qoKMkjPYBDMDW9GKqWSXtEyFvPWgUHnVX3qq3p",
  "key8": "5nR24TjdEq17BFiDaa4jvipZ4cGFNKKsf48jmMJpmggALNY9PcTULxdSrm58JUAmVTgYFF56iPktNXHVpsLo4tjs",
  "key9": "34vGBNrt4ZgAr7B1jUxTZwEYZdekoWgjEYENPQty1Uo39MoSWxGZw42FQ7muhYdNHxoDr6e9x4jLC8caunWZEkQC",
  "key10": "WxPsesrv7gqbAuutihnUvSyChEB8LwF2HEnx2amv2F8ouxdrQdSiYvaNvxnh1xicogrVin3qon5pxjkvigq9KQJ",
  "key11": "4FszDLkeeh2Ks17GBHPCw9LFJbgTzigwfP6bqA14fAP3nbypg8e6v9grbymGjBSLGZzZduKHLgWepGj7ZEvEz417",
  "key12": "3yJniBXHNecScXqa9vcSSMu4FvoRQ2DT7EPPjfZasruTdbrJtmKxoWh3raMVjzzUxu4CZ6UQSMRevr9JKGmxyHTn",
  "key13": "882Qzmz1HHHh1FbpKhV7QESyBSch9ATGaLCGACMRmDMu4uPfKurnbqrDdT4DY9CnpA4hyrSTYGVdxaZpE1wbP1M",
  "key14": "3yLFEWUGeGvcB7guEChxzoM3u4NUhZpngnDYB9FWjHqgCAneZGBNaL9FL2AsakPhJJ9qkLCtxFWLDvLPKvtiS4hF",
  "key15": "2AFHioNzakvXJ6HtDNazyiAf5TuwFncJAyt3288g2tdTxUBnn7oxptXNzsDqav3maY2o3bvooVBY7cNNMPEGgLv9",
  "key16": "PnsCtXfvHQ5RX389z1v5dQE1qwUifp9sppkLSi8ngkzhyhaaRJd6dayoJjNnCARxw5VeZM9CPJDYbSc3oPhDSiL",
  "key17": "5JNkG5W8Naote2AcANZYrTnooCjkaxXUZGfWVmM9LTDs88WvJQ3dPsfxNJZHPoFJYZ2qAJPzgXa8eNhxdgzCXJk2",
  "key18": "3WGBhd39YXnt4oG1CyJkVsmcdpt232iZkMsSR3Tky1fmBp8GR1vw15pV5LjSUonLpaxHs2xUjokRrPjAm1VradLp",
  "key19": "5WvvnFZ7wNBoo4Ey31frShEDyXEn5WQ6jgwYv9pQEQuYzPt7mwn3WL1kE5tLvGtfe6T59kJASNH1rAkfUA5bbPE",
  "key20": "5XppQRdjybP7GavaMt7ARPsScnbLhUa5A5ntBCzmXheoqAqy6oK65yEFTM64F5rbdpALvL48AnnCKxqEhkroJKXo",
  "key21": "2PFLikNwwFRKE9NPBWZAx7Qq1fLiSbJc6vYRKaQKgjKJ2sLDXuXx42Ybuxrx68cJLygFPGVS73eJjnjwgDHBzZz2",
  "key22": "3p6ArxZPRfbtaaCGBuNQN3x9Hy6rXwKhQK5gbk2bjuKwukJYa17f89jgc7FNqKEjx9zZUierdMGHXPNaZjUJ95Fw",
  "key23": "5YGYcavJDRunkoF9RQHBn6uwVPLRH4ZDJUFURF1os9WQhpby52QURbVxQbuM5DJCK7fD7QLQNhiDDuu2GzbqZFoS",
  "key24": "4384bc5hhrxSMzfW8jBbEB86h6Ubfkk7fTrpMY8ytBWneLJudXsr5RG46thCjvjrLtNPoXhuHdL4qfBxTG7hDnSu",
  "key25": "Yiq4kLCcWHVvmAbcD85nXQtf5jG1MKNxdfiRqtiEwwSvr5NvsMF8dqmRKsMHCSrr8XpBqPaTpVuf2cQv4fG4gHc",
  "key26": "AjB17SfpjRtb9LsFMDZa2U11fP25hrT2YLnjggaFicG6ncfTHED8kkmh78x6jBwS4jKAR1groG6nHkGSYEoSpdF",
  "key27": "mzP9sWRXyxGJqn4Tufo6RZuLWbHEA3JtqwqMeeW2xypD1dtn9QNCgRy84MnQbT7w6vW9KYegeDJFmxV8M6qor9F",
  "key28": "2soc5xE88ze2cFvd6qaih3hWJksjSc2F43jmu5n9LckQGySYJfnBM7S5HSx1LcAyyawFzESxd7zBiN8jFmFv3mBX",
  "key29": "5aHFLAqVpLQLPJjhrukC8ZM9QQCaD1w6ePAcmAHkXzg4CRhgSEq6KSUyQtr4j1Po5MXcdsw9JLEvw2tTzMW4wVs8",
  "key30": "2uxtbmTDNhgeP6BmhYmWKjkb3BvjQ3AVuRo5BEjbuFTguaZK2egSZs3g7mEjdnZhbkupgPsJD8rXagP5TkyaTFBd",
  "key31": "nehBwnUaqGd2osCL5fE1D3gqVtkB1WfYqXHYgDFML2NCSnwRuJ6VVrXPxNagwWk3FBL7SURXZRb9smnjR55v5jz",
  "key32": "5CdGQBVMJKPBRFssxSGD4oxfiN9sQF5DcDEUUMF6E5Dy9MF9c8eBhdU3XqrHXpGmDEfVr8yKW7ABs8ai6WVp2X21",
  "key33": "2s5Ddk6CPGXN9yYpiLAHWKcnKNcTp5vr3fnWfXoPzHSKW1nKk1qrTu3jLdU91T6xw3MBvMbPgMRh5RDRE2mmCnMy",
  "key34": "38zhNBPzP4GhLTVTFzBxa1SrwayMFrzgVLH41JsZtuMu4ke2LC86LRoYdNMJ4ukM9mdKtnQUBUBCJdweWkrvyBYN",
  "key35": "5hNATvtvrN6BBFiw41PfmUhnLCc6Z43fFcCpjDVYVKPX4kbm1WxMrgsp8q6vVzj54q1wZ9D4oqaFHYdRLKzk1pe1",
  "key36": "3po2riiUwQ9uVXhcXEQhVnaF4cJB7sBHfymb1hxDCzvysENdfDmgsfDFhZfbHEGNLaqEJivj89iyjmyinx4N4rwi",
  "key37": "3v7jL63dLE529P3yKNZGckcxZTg3sjA8qx7cySn64NNcyE2wvMMcjhMdK9iUUoNYcUaYSed6zLdJUajFyeqrVB1T",
  "key38": "dsNquTJ4UVjN8Zni79i9AuLqKbaX8T4wAFbVAEkBz2n4FyuMCreLTtczdC81jqMz9yHqudwsGW4hn5bUeipxWA9"
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
