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
    "Js3aq6e27mcboWSWWxkgyXkzfGvNP5pr9oKMUcL9snGCYG5pXxE6wkynQ5EahQCtTRVTLMotANtQCvDEcCHCmaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2njqRg32vCMYHjBqouje2bSLcQ6yWsycNBW5FUM1ZPg4YTHSxbzddWPCZRbtnUj9iGV381XDUb7hvsdAnCWM5qNX",
  "key1": "3kr1RRCVYeF316FqkHVSJpATcUHj6kRibXtHrgNek63qANnBKDZZxGoJT9uVoDB4gN2wDxHksnEqk52e8dJNX2Vu",
  "key2": "3rSnAppLSuCEgP4Ez9c8VgL7LbMtDNFT6mXSmvwwXbrtmJ8Eipyyr5gFqofyL3phEVA4eJbrkuE1b5gzZNWsXzAB",
  "key3": "3WYu6fvirrLt4nSNb4PJFjNTAGJhNm3qXZztq2GJXP2ErmHjLmxxCiAVYr5BR5odKnSNjsjmBnsrRK3GpkjFqoc5",
  "key4": "4rm8TB6kCFn9sJyLFiQhbSKyYActLJjyDZNAwAy86XfkXETAV1LekeQC6tNXstCyPSFhntPPjZksCDR9bFNqJWDn",
  "key5": "5Z5GznueGn7dne52fn4x9DS9CUxKqYDijEtbATkEbeFbcNKUbXntBB74YZijjor7TAaRShwideFEk3ZU8Zz3yTui",
  "key6": "3sBjAgeBBbmVezAW2T5pUDvBshV3zCqX88P65W9ixCQAvV83zvKy2bQyU3siJ11URFXu2Woz6WaZnQxKhJQ383Lg",
  "key7": "6QPmmN5zhbSZVPKvPDfppWj8PPzQHafKwogcAeo5f1ghum3CW6CtfExGW2nvRbfYJsCKxGRGgG3KhNzhdj6ghD8",
  "key8": "4SP3m49wvDigc9HkkBch1NHcc2WaKkhfTcp8uY1iP9uNqk4fePE2oGthnz4Yd29TzrksJW6oFdE2FJ5KZKBgTpPa",
  "key9": "3D4x5gKzdsz98LE7Afikgidyf5KP4iqw3gKDpf197n39NHKJwePuQeczyRH33YRaqqmLVeNLSjAT6azRjwu78LUy",
  "key10": "5mXne6UzXMoRMaKQhbCyfDmVpxYC7ywcRVxJHhVdXHbHtV5MSbpCse86iPjJiqVjP9YtZHMBVikgu3SpsRPbFuBX",
  "key11": "29APBWC6joCcFLkXUatVqnaHLsvzdz6DLht13sW5M78mSjPtbe6TSmWBd3CmJiVi2RLqKJtudxsUCGNaAV81Wz1o",
  "key12": "5c5kk7WTZgpbxEe8MKW7298CMcn1GjNYeaB9Y4Se3v2hwZTyvgpyNJnDcZCn2L93cRKnzHKMm6mrzCqcX1wnAZm1",
  "key13": "2aFjMorM5paDvHWdGvTRsRhm42Y3VZFnxnusJZcuBziuAixJP2PuS2LvhoEhat52dgr3STdqiTq6gEEaS2ZtNG6h",
  "key14": "5rJ5PoP35R557X8UNDR3QgXZq1ymXTEomoZDSj9WeayBXDi2uAQVnRtsdoJpcKHSymk6LNmvUSD8xBcbQqwXtHHQ",
  "key15": "29iqTF2Pvx8AR9ZimhNB4EVWLHT7yr4pQhAJwmsEt97aAwYYmNA5ts6mZ5ZS9jxT8QJaSJkDygrvpV6uQzHnjRFZ",
  "key16": "5sf8pBJ9gR47CZFwcu8iBZHo2vq1sZHn6xz78G1VGopjo6NtKPV1m7VXjxqmuQB4cv7uHM1tbYgXEBV1rE6vgdxa",
  "key17": "26ayPHaaJYPrAAMc75rTPjkPSdMxKcwLEpaFyZzsPwrXbxkwteUkS2EdPBKNxMefsXWWyv4VKmE57SAUrkGWvVs8",
  "key18": "gPvAatoeoaP95Ss2KyF3wKcMgGF9Qwa4L7ayDYSQ3QZt63Xdx85CX4sqoPSSGDFV1fwL4hzrPXBvmjBg5PrPP78",
  "key19": "62s48MxqoMJwrDWToVvKmdWGFxeRBPgAxKPJ9x88MYHhkP3Lpg8ce2ksqFtYj6N3TAS81bg5AY5yQANMSh9iueDz",
  "key20": "4FHHsx4uvwSdCwvbBfp9F7iR12WMMdkt1xPAUsdzMQU21SmkAJRsMqySsDV2fQdfS4rmbjkWSwH4Xy5cqK1TyUge",
  "key21": "4xtSmFzA7kxMgefkNFt6GTYHeAYzFmJGcuZEW5h6gdm4rU8joGqUPkZWnhgvUCmiUcDpEpzAuR2zES6rkxr38qXJ",
  "key22": "2aEoBeWoKe7r57VNEZNXvTzmxF6gjhPosescicmpCAPN2YA2G8GfpdK48tzjsfor5fiRqwSA1HxowPYGU5X3Bi2G",
  "key23": "wfZoLfSoBMtUYN3Wn4rXK4C5paW5XZ8XSSstxuQPRAmMSNqLYUsdbhUVGw94PWA2hid6GhRiuj5EjgbRiuD7up3",
  "key24": "3NhMdfwzz1Tk1v6U8i5d3jkgqyDQdSh2DJdotbLTZeCbEgJuZAubMdhihLx1vna2XKWdBrxa8CKtjkHrUE6gb4EV",
  "key25": "22VZEh6YYyYaTUXhDtQgd6aFbx5rtfANfJ1aYk9JfSUGU95Ax4m9X85csMZ8yhxUjLHffynecc5h4kryoXbYeCyL",
  "key26": "3y8KPwt2CuhTJpfhQo3Wbbvp7HKhCYKtvctt3X5wLuQMq2BcPXgSn7eGzKsGUXmWwc5tbJwVSUbHHAEDbJfe5ThT",
  "key27": "264tsCZkHGorsvSzFLf18TaRUXGzTa7g2WJqopMycRAKv5jqagkZsFBFtPSXbG6TXJPZQtpRfaS4DJLurHcpbpny",
  "key28": "2cJuUZkMNSorVFVeFHxpd5DNSkyJKG9EFXTiGuWZaiXBS1Fwsq5U7XUGyA7uPwSgvW1Zn3nwt2TLGQV6AZyBxL7H",
  "key29": "4Vy86ZidGoaj2rdqYEKSdY1qq5hTMmsjzwQKeWphcQQwbkDw4etEpCYX1FLdj51YaVYoGQsh6M9seZuF3RHXoxUb",
  "key30": "dMWJC5ZUkyHESyQgXZ7zRYvG3BGwA6nXo8TbMKdiW5jgHn2yMkhZVjVzjKBvhTQDN1EMzchnVdPEMjTMtGWVCyT",
  "key31": "4VNmyxUwE2z2oSxC5ubMGuGT3Ffri7QPdLXyRLhrVgS8y4P5szyFsPedFt8CLeaAced61mWxjdHsVqZkA514q6qh",
  "key32": "3LAZ1rvcYdKrfuqVBQzUEJpMyJTUAV9p2qgh3gkC5C1cQdLRNEYEhreJbNoDSHxyfqvgh3zzTL4su46VK4ReC9Vw",
  "key33": "3m3P9LCdryJ5ctsxQey57qdoEePmpuUCsbAkkcZmVkeL31jENKrpuYDA3MWzwZKoi1rv2RtRKwVQZjtVnVbZdCTK",
  "key34": "T5eFdhwQYcb9HCr9vMfB5iKEWdYPGXnD3xrBsbacwH9AzJYnJiFzfWSd6LsbVRrFCj5VcmbpVASsBmts9aVdmjF"
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
