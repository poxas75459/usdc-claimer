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
    "nu6PbC9N8xwW6FJP6Bn21jgBurLsHMkyvcDV8Fbd5tc6kJBnGMdLWYVTF7Y5LnfG9UWidYUj66U6bSy637Rce4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fBQY8Q78GTLUyUBY5Xz5deCzVdiH5JRJBbaa9xAxgfEsDYJfwm7sPcc1UkLMDcpQJppuLiEssoWXh1Y2xWK3nrc",
  "key1": "3pHAESXRtVoB6RrrBvnNnn6CVqrQuJgYHAkHa5TpjHoMJ4RWxE8oHKTmmfg4ivuTX55GEkBnAGVXKb6M3RgdaX5S",
  "key2": "4TFihi4qpw5cD5Jrnc8LCfhrR14gsh6fduh1i88gcaRw8Tcax5bv2PLLXnL9LBxccByhp7i1VCHwqa7pCAWJWeFU",
  "key3": "51GQqxDm2iRbgVBg5PBqHWTU1cMkiyMALYvzcg9eVNsEtB2ZxGKzSacsvjE4nUhixFnywCGsokyLXk8BXF5gaZdu",
  "key4": "3aBZuks9P2ZiT6tsUc5aNAEgG6SZa3Cmg3LNME1qNHhx5EeADsYDymuC1eG3gAqDDtZDV46SdRrhNs8WpN4r1h75",
  "key5": "pJXP9vcAr8LYAc6SLeCuvjhipchkb8DYAh96NMpkRRWSpxMWgNTEYT33XjcCbYTNrBwE1iE9KMbSNZ4W23GU43d",
  "key6": "4HU4o4eNTYPZCCmFfZc5eYpyY7A52Z6DxceqPGTDiuMfGRgxNRXmsi4XnTPjAPukSoxtpY2Gd5Tzh4F3qDj6bdyi",
  "key7": "5FbamoNjA2hjEaAyChZoderj7emU2PJwZkt7C6CEV2ky2Np1eRSTGHRzrY52e6ff4kNFiYneB9HndCdHLuMRrU6o",
  "key8": "5XZ9f9HbtBHkWvGFd4rwjFLk3V5EjZWBXBfRDBh3iwnFmSqCm57QjvvSQWdqAULFiWEADHdZHN4EBJFPjXj4d63j",
  "key9": "HugoiVQT5VKFwfPbfLP6YFWs8fFgBLyVgEvRbpwMLtV7sqSvqZircXHib1Wk1uFFdUbjZnqdWXwiub42j1B1Cvh",
  "key10": "2udoVBwcoKzhruotKsJfn63WtJtaUACsCmzRdmsmMLqGnYkVgAPvUVLz1RRrG2dGSBF4CRLWYZgAEPfppUE77Sk8",
  "key11": "5ZwhxnFuUCacowYmnvRSUN4Gn5BxwqKHLKgXN263vD2cWa9qCMpGhReam6s6wzVCatAJy3LCHkaxZtrLQaY61h9j",
  "key12": "36EHxZstKmh2hHwvsE6stuiGv8dDyP3ZkzL9VAFNtdwHBuEBo3iWiUbrsUZG2ysEGpKXBQKcXWSXxqfiM7q8E1kk",
  "key13": "4Z1Xk4W7dZw7M6KtakcpHQrjVVddS1sTkTNSi4zJQ3gcWEdLFMZzCRRWXLJdzab38uG27QcrXFAazsYDUGzwdxVS",
  "key14": "5oJXxKF4JH6Zt1WcceB4kgEc3dLUUp1Jz85tXDWizHn68JBmp6s9XTjdcGj6bh3SvZtTKurj1MFy9dnhZHp1XRcV",
  "key15": "43PaxbDZsUozAtCAsCL9HXXfukbAhjNkDj3Pr5EZfv9ij8BibYehUM5NbqETBnUXPX7R9qQhyVppFCcUnQ54FUGk",
  "key16": "59G1FrDM2BzhLsiJJRv1RnQsEofygWjzpEUGqa3tAwriye2Kg7LezE41ZSpHB6D1BSVWX6uDF7gStePbTsVWpKYA",
  "key17": "kyjVNYYAMSHwFT4bSJCL33CCXYqyLWZRcGAhDcfYfxYHGZFfZhMGvboMg1bWnJivZ7U2XkBDAjwfSaz6N6cbnLT",
  "key18": "4949V4K8t28PoG4LtL9muuE5aaZxax5JyPVszNYQra9DAjMqNfa4BrAfexYVTGNfcAKUSB4eHxfcogRGxti4uUob",
  "key19": "5pHmUxtBkiHTH6c3V5aL2rndYVoARmhkiJvirRDXtKCES8LWYLB9udFLGXuJiWkFm4wiHB7M7d2mgTZKY2rCASCt",
  "key20": "52wJk39ZBgZNYkitb8SPHAy1VbKguv8BfxoKmE8nk8Yf3HJkZJScsYG63esgY4aJmYcuzCvCKKwGUQXvUgt9a4Q",
  "key21": "5JhyE144MKz63na789exUh7KXP4djFuZub3YMUH3QgdbBfVHT1EJ2tKFWhPqSXf8U6uLHYe4J3zD752mDSjPnffW",
  "key22": "4uJJG8sqkbET8fN2kEVrs2QgRtdDYqoKzKLTkQ9jFafSXi56WrmEhkkb5U89q29H1hb6xGcQKQbR3QrkoWT15iDo",
  "key23": "3Xh4ZNGM4B88zBjmCKKmzXBiTMCrdFiLzj2a6mvHcoMeDVVNanB8LUKPgC3HQcF8csKb8iFPuEvjwLGZPKexm9WB",
  "key24": "2uofQnMid9ttK4gPd3Zr8VWtL7ZEEgyGFj4sJghHq5Lk7im7VwUgRAk4YjPtT1iYAKrdpD47Dwq4UQ2itChmLD48",
  "key25": "3HvkLGNsX3q3UamDGuYqg5DmyYmaRak7Lsm9WRWrKBVWNxGuvas18wwvg6M35QMPprVTHWQabpk5uUyRxXGURfrB",
  "key26": "5M2nDqznNrH1g88rPD8rJY4wNjmif27S8tU7D2FBpWkSyeUD8Fk7KKU1XdYxS2UiLWZ9JxgbxwP3z4TxCaYRUNer",
  "key27": "5u6ks7bQ7TZ7gAmgjQDk3nVBRT9oZuBtcftE1DWDcXHJ9QZm8YkRwgnB5MbVdAPNaoJZtrSPg8oPL194hndyubuM",
  "key28": "5pBUvz9Zqh4wXnxpsQEaeKAWtGg8dYeFNm5TFMSejmR6drZSWxxpr9dQZmcHXRJFz7vmCZZwGbX9zP9jHYhLxhD",
  "key29": "33oiivhg1dPCaFNxXQ55X2nbyGfee7CsssaQs9iByVPAbimoPjSLDyHNdC4uHZLH7N6UCRovfGwCqf3ceaTYsN5r",
  "key30": "3xN4EC8pgu1kP7UB48ETqT1uLqYvrbBk5b4s67NNTDinbkbdm5unDBH8RJVBKogkDyf2tHGzBhKiYsrP7GpvsYo1",
  "key31": "4xo55YFXBtShdhEXafdohTbiqnq5h3yjdQpb4JGVeFuaYWBVWf36p3pLnuGSxmdkdG2mwQWZRiQgEGYnUozMertV",
  "key32": "XmFnFELdSo6GPwLgsvd9i6ufyGkuSQMAvKiKxCknS5ntidCQKC7Gu3PddP7jRP2BKui2n6DRc2nD3xjTzWzhmrM"
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
