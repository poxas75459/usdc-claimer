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
    "382p1dNTJzAvUdwjy4FKxpmK1PPMfwT5jR8CBkGUZGUvLew3cHtjgHyLcrzSALumgs87m5Qs3K2Tk7NgdaVL1t4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mHKsuEiRZMC4H3PXi2sFfhhfNzxqfh4UD1qjo2TFLm94Uz3BY8xBCowbow7u4BaXs7gcP8MoVyoNyrSaQyPmWcK",
  "key1": "55qMLjYMrp2FczmvtmgEN58cpf5BstgjyuoJL4KhiTu6kQeVAAnz8ZkQHWWVtsrRS6spFiMs271HtBPiHvdXPzRC",
  "key2": "5E2e5zAUx1QG4R7Vn2UBqUhBHG9HvkgjE6SVMMA7dKuoEbLgGvTZ9igN4KFUpsaad5YmPNeGPmJz719qvhazRctJ",
  "key3": "4zVzopEUeR6AfccPwdQNFSpderJsKXQwZqdtQCWJnq5ymxsB8MejqxcS51coR4H3LCHoLuwSf8kKJdXHJSAPMbNb",
  "key4": "97AYFa3fCbTUEx1trcHvnddEcaPURo3Wy9fy5BSzsSKciAyc1hr9vdEwHC4bNzGmikUfTY1VMSNr1RsxwKgnyzY",
  "key5": "2K4h7s5rS4YAbZK5DHXK5uC9VyL2BHAe3TSsDzkrfrBy7VAYgmTDRueoFU342TkCDCzFXfuuv9Fy3UvXQRr4u8tL",
  "key6": "2HVeBjLmg65LHAZgw3fQLwh3iSRdnMW8f4zBD4xf8K4NamrMpD2oGHc77LK67Tt3vzB31Ybet9ukBexVvtGHfHTU",
  "key7": "2URjGTMFGodBBmh33eXgxivDxdZqf5cq6c5heH9rhz4wadfQNrTnTDFi447pH4AsreHJMMRdgvNCaL89kGD1k5aB",
  "key8": "42qNGLofn7reCgj241TZK3ztsbrXTBdW4GSgJgXS64ioC6LP59LxLV6tisXmtiUCCRTFvwkxHUZ7uwjoQnBZnUqR",
  "key9": "t6uLFzpiBiBP86VtpYtzS6jtbgoCYGoBxsQ7xcoVk51A55hfdHmfvZWbz5QNkicHby78sX4A7jJZL1HshkdeD9s",
  "key10": "4oaRgUwLKNmeFzHSp6aYVVR3JjL7ZkcYJB9jgD6ti9gq65ct1mDPP1vjDgWoZJVquFcTQYckRB32TSW7Mu4gHffB",
  "key11": "5JY28PVXdPvbgZqpLLeSe8LJ3X9XiqhfgLhrueD7DtXzMzJKeJyWBjFk2NsxQvnC9pBPWrBGLoMoh7JsPMdYdtds",
  "key12": "5yEVDFSKrYR69koGvUS1xRro5ofbazmSF4G2KNGBnosh2ngN7GdoTUgTuGPqogfgY2KaMEcEBrkMTKPhYjPAkxB",
  "key13": "2WcN4fra5DVJ4UwKukKmrmLddcHF2mE9eGdUhuj4h4tQDFeqa6RQ5S4boVqvvKY73m1LqDs5rQR12kqwUZQrnMdi",
  "key14": "4zdtpYx61jVbLNwKaZy56RhEcCnfz9oUb8DdEKHsNVcirU5nBJPaq3GbCHU7zzYUJ4Vq7FU7XRPWE7wzsi6LNSAx",
  "key15": "3nExLCoDRVxgaUHyPeB3HqbsvVLj5SvhJZp5CgdmKMXYx5FUmUiprrtYiaTFyxYEffjrHWTLPEaq2sECCZimdGZb",
  "key16": "3e5CQXKkyTw2DYmpT2qtMnYeERw6xaQBVFwpXDBfCyrwVrw8pVYamFENu5FDtEgHFE5cmUk663sGW1XRwcBsBbjt",
  "key17": "3CDPwTsyrqJ1Co6VHYiGjhwKXkaoMsptMR72quHPSSGAB8ybZP2iGTQAcXms4fQbZrUpLXyGEusKFHf7wBWA47CY",
  "key18": "4PQCdMQGoCWMLqXUdbzdcUXD3dU74TUNK7bBRs87p7MxuiFH5dDn7ycQ797dpqRyHbLmsuTxxBEXwxuww9jiT8rr",
  "key19": "5f1D2xaZvFKDSm4YsSEtUPuX2bJ3YfYQQvSgfrcJDxcMygr2HJoZeMydp9vMXvmjSoPD6VxCim8xddRTkvw6u6Mg",
  "key20": "2Necju7ywJbVcbsRdc4y2jCvAnBdeAyez9qC16RgdzfwQHRSGYpYJQYmB4y47i2QWWdbCmQp3Por83srYH8LtjaN",
  "key21": "nuc7KCeiJ2pMwdne3ba4yiWTzzGvmrTWFgV2ChDi66778fCMCVsHrnbjK54sWr34pTCwApdtRgQHZPg8WeYwytN",
  "key22": "2BCnjSTDe3Xj6FKsWzXcHS5yygHNjMoBZG1FAxWPVD2DmCs2rznDsMUy849dF7CYvanGMWHWz8zV6XwFM6aLXfw7",
  "key23": "3rm3Zf3kbHWEsCRvxQ6TGRdheJLNJ69wmvQkWzhGX41XNTaC7pNJrDmqNXjRV5CubGog8sJFobUcNSLVCaA7XWN3",
  "key24": "4BFisYEjP2dvpZXj9eLvs9YrbyMH9S2fEczSN95MfRCnGK6eodXjYHZ43js2eYG3P9bRz3KeDT48jPPsUwWz4bV8",
  "key25": "3zcr6iRepHTJmGCzDadp1QUDXtG2KbQaaPE6t2BwocQfSNfHGoay4m4TM4hbVyPqMXYdgosrj4sp7cyj9tCzFvGc",
  "key26": "2D2MFiqFs82X6Uh9vGMpYoV6b8HZLXBqf6572Ya9EqDVgKNip41VqfLgGLMwLrrDf1V3x23tKJmkZdz1oKQaNA4h",
  "key27": "3HmTuYYhoHvrN3XevmRApRTyQyk1JGHULixmth33x52EzUTzFXMn6NaYVV1S8QyD7HQQwZQU7aQGqrBMcBD1evWk",
  "key28": "276ai5s29S5GMPiT6J8UvuRwYZbcSZXhcHPLnhTKUMxmZ9gzdDwUq86sBM5rDQCnfefEoGiDmRR3G3Dj5PgunoTN",
  "key29": "nAPE2KodpgQgjtpRHC7ZosKoxxjk2snuCbA5av7CRPjoXTrPb4kAAHkRNbBs5LPXPb9rN1nmpzbS99AmKRGo39t",
  "key30": "2hMHsfRCgUj9Ecx8yVgWkrAQhzy43UUujveiggbwHYgsriRkoXyEk9xXxJkbvYpFDCG98dgfA4PPgTQz7iCbgq3C",
  "key31": "4fB81t3GVvmGUduq3wNoxMVAdSRqRGtbiqnENdvcM9wtoYVJ7hxf56cQAdyN6MPJr5ry1kLPbsYktN6miFqViobt",
  "key32": "2FvQ6z8w7Z2qkuexrXDNb4C1ebDdHoWZQTCpttFvYR4YTuT6qXadxJUoPy18fkZuQJ3DWGPe1GoV651UxPLPzyAN",
  "key33": "3Jgrq4ujS9zZEKWB1Me1oew6NZoZMdRCXH2EFEzdkm5Y7yLrJUm22SjsWDvJH4t4BNXbU5zUrasKtHJRM3GhDPiZ",
  "key34": "4pEFTfxxivmhiHWmKgWELGMbdBptWrdAYiuTu8DayMW5Ade5BWcoLGBQB3R7XGbH65Umo3RARaPVpfkHtFQDxapb",
  "key35": "3axQ3JtdX2gAiqkuB8xaYUDQhRVeM2emVt27GJziWtT9vSai1i3AQQz3M9dmpjpv6xRiYwQrskFTK3FsGQdxyyoW",
  "key36": "3GMwtCLAtTWiFmULzJ6qP3X8df3Pi8AyKpCkHL6NsMKZFUDXeJXrMYWmCGcpoDTvA7wXm3xRB4W9kjKjDFVwSw5U",
  "key37": "4HBiVWPVPqSk78V3vhA7tcP3NMxkd49FWzbLmjnCmgygg1HATvK17benF4Vj9N4fXc3FbiXB36oF8j58HQhj8Gpz",
  "key38": "oGXTRgdGoXSf1SL1NrdyNA8ws8UuxxHC1ao12bEfgTTKMN5fPAyT6fAPbHGfhxb4MDfHxmGA3Z3Po3xnjRxDeL2",
  "key39": "3mwpFnRxC6cGwNijJKATFFns7JAY8HQQKizYiQsbCPkbQoc5r9H1CnvZ58rvJi4vuupZsHeNtap622i5UEgTbmpa",
  "key40": "3o3urwyoHm2ZNuPHqXEGK3GG3Nf38NafowH6QCzX5HedPKQMVrubT8RLPT9rd8LNtqdoFriBHZzJ6cEJ3BXfwzLf",
  "key41": "3xhF6Ejg8uP9jcVJ9shfPibDpUXDrrCWrneVFa56V71c9eu3wdvwRekAei8szhwYLcDum6dSF89Uhnh1NKbDWSN",
  "key42": "61qKF68stPKWZjTckYZE9kfan2n2SU7qTWAUKchCn9mxJZSSn1gLoNfqooZgzAhwg2uCE9aie8roEH77yYAAegPD",
  "key43": "3GhudLgBz7i9NGiQn8vVzeyiC3amraVYULoxn3N26d3xcDoHuADYdzbzqDuJutUUYF4wwdLU2xphtVWyuGEwoc7m",
  "key44": "2iFFM1gz4VcdbiVqMw5CJkUDX8AC7NbMH6ETR3SFGmwWQuNiwdrXS789h9Yf8GYwapso6XjUckfwJBLBNV1bBamr",
  "key45": "4QaipssQU7dSeqgqDKFK9BgnYCxLnMAGvfqi8uZguaraC1pQdd5w7RGpcooiuPGZXsDcoPs31HCq3tPUtmTp3dSU",
  "key46": "24NcQ2Qih5qhktqkGNkJQ1rv3B4uUz1PPJdyXkFfFt3khhsqgSQSV4AAewedUFuwRpcQVFRUgK7Cwixqe83y7kUt",
  "key47": "2Uzt8uDKBLnroMVFuf5kxuryginfcoqReHEwKpGZkzxMoqKbYnwy3TiwHLYkLoYW2aa4NvEd6L9E7rCJGGFvqKph"
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
