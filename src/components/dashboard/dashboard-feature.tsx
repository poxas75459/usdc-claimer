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
    "3bhd3dCEWTp2kB7jcTv2bP8w7VGueLKDTzrCUb4pL9a4ieYkoMd8XPhtS7YvvFRcsX1jST7Uf5FWZygqSAgeMtxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "paA7PpYuXNphL8dfV1MPaDsS17RMFAw2XaNJViV6yDZTzuHuuvFc5Zj46ZJ56jnSTvVqUHjmh1SwxV63C653eQt",
  "key1": "3fABnegHdCELkmj313EJaP7z818kv6fSomWaK6G9M6GgdkqAS3LJftUb6cebibUem1jPD1dQvN3um7Aw1Dkk5sEh",
  "key2": "575Uv7WN7cmckjYwjUvX7SR6f5WWReeEvyVKquaEWeuHpgnqEMQwXXnuuNGZsdETHsYTXb3o4PXnS5AJhuyi7bnJ",
  "key3": "5bjuFxU7p2pfs9krmHX2VtSRUxNftDkYpupPFJ8CxzMTcb8ittoHi42U9mzAnBrSjsa4EvmUwAQzzLk2XybXMHGq",
  "key4": "5LEDrbfwpEWQUQ3CFAuH8uq5odkmsdUtRug6XJUQTWXcjqqW63mR8vuHSjka4C1Rwk6Fx8frooR2VfKaNyD4FvGz",
  "key5": "QSGasW6TkbEUAwufdjctt9cFaVnwpSvLmoGu2XUyJ9fvU3rQfA7qEkfc4Ni6TciVRMLs828raLFCA5jXmiyQrBW",
  "key6": "642CdtRaJB3mdYWzwLtqxm8q9xUS4rXRoWMRjkJfhoYKUf6WReumiYPN7xnwq5pmQeP6LSWqAAoUTwyFxtwHv4sx",
  "key7": "4qegzzskYe6ECsEGbeZrmyCqGV23t9epYxiMkq2M2oZmpzQUU2VzxUiaqxEavr5ZAmMu8rZXWwyiNwDj7JuDoKSc",
  "key8": "2Xzyzrr3PkFDTrLEfmH2gYMLyxzYb2nKsG2qV9oPMKUTPx7jQt1TRsJYnYBZt2mzwWubAArEzuKgY4GsHUNkdTd3",
  "key9": "4ZK1p3jauhjpM9hKxvkGjK1LbzanSj3S3ZM1NqNC1x5qiUK7nEzPHfeSwkDwXHXhNzC72mdmhDWwXXVMuzr2CZtq",
  "key10": "2R7GMS9YTmXgVEwHWBDKHJvJYRGVFCm5fu26wKVNn4ebVJi7niQ8M6tKXt3N92mnN8wfbE9fCRVeje22UuKxXSY2",
  "key11": "34XjZuW7r1FVPfa7AWDuR8MJ4P4Qmjns6FsMvvDServznKfQcfW64StMmGxSRkbyDAmDFnyza28HwS6phiFmuPcG",
  "key12": "cs1edZFN67YXiEfgekobqp35tBwGzD4zrLm5GTe31NzQAMp7tg7C2d1cq6xxdKEaQFeS8dbtj3VtbBjtjZoPNsD",
  "key13": "k6icZ3txQpQvFejraYWNGGz9tZjus9fjxVSiECgmpuqPi7HRZdsqceGzGrnw9EU6CrKfgEoeuVVWsJ5YJ9zZmqQ",
  "key14": "XP5LFP2bM4pJQvqDBNsx99Dwpa3WVzgEMXowmf3DyUgSgZxeUqpaMBZkTztfZ9V5aqV6BHiptdq84txDbnUZfQ3",
  "key15": "2H5GfLLNZ1TzaReHHujM6cgW2ZPzjqdaVy2BKWLb7vmL2Sffwm3PB8Qepd3n1qKBsdbXrRFsp6pNYEL7sMuFEVyU",
  "key16": "zkmSCPdM7YJ58c2fug7Xsp7Kh1MdzgAHgvJ9ic3KfY4reKxEDiuSuhkyDd2DceXoGCX269N8nuXAXyG7UF9BRZK",
  "key17": "5EHQqSe71vAxsenNkVMHRWL3Hw7SJKmxxaYkbbN1tT2pWza1yY5CEGiCx357UyEc8B8F5ReefJSU7HEae8mUSM7N",
  "key18": "2Y843TPyr7FG3ojyu2f9AGoumNHWGNGwtyiTWeNEtq56Vc1FgfkV5BcWH7hfk7MaHv9E5EyzN1QGxiFh2WfUme4c",
  "key19": "eHXGB5v4uVgZUAYxXtFWKtXCJae8jkqiSLjjhy3n6PpgLhxARpBKxnkmSnpS82UBC9z1M4ZCNGjDhSNvNk6qQJK",
  "key20": "2SzruAoubTc8GRN56W5ZEMWmjFWnemgynKyoiBvGQVoS1c1LfxV52Ww3Y9erYmmVWqnyizTASWR1os5C9NtfoiBd",
  "key21": "3j3yYaz8gxoAmqm2H49aPdYZDamB6psfqx6D39n3CsM7C9SRqHbMm9VdpXFze5KLTYHpgzxEz1KNeLrLw4WNnczf",
  "key22": "35prcZewoXwUkjMRgvAqg4KRvVzuSUvJTxkBeCitoWsWnk2quiD8UxNni8dKx94RGiQsAva4hr1BiRyhBLiN4HWE",
  "key23": "41Jq7zGSXWJ2iyk8BoaaFJVTShinWQRZ8y1P2oEB4BbL1Uw7dhECL6qe3N1uWi1v31cgXiSB3zfg2nwGHssSgPd8",
  "key24": "3H1JGe9qzegU9agho43VzoUQgyUVYNyz4gmGSoTzEHFDeuNSwnAPvdhVWR5zKJCZeTpKpsJjLZoyPiQjkQRin9GV",
  "key25": "4jUwCu2KFRFgb627MrmfEPvjjxRBtXzsHFAvqaTWP2McSJcwD4ZmUmBGB9AaadukSJLB9PyumjB45WapiMff2nKh",
  "key26": "2NiwpHSLT9BhvjuEN2UM2hTjPqCMutT4eyNP4d4E6jbC3XucPGYt7gZKy9aioPGnUoPDRoqXt1YpBRCBULeRkfo6",
  "key27": "tAgyi3wkpEqMJz3CNUo7a4CcneJZR9DTwbpayAFXaVwvTa1bX9CARYAhuwfQBtJnBAfzi88NFvzvC2NECRuvknc",
  "key28": "2Pw1Enudc6FZtpKg4Txk7V4NQLo69XrigiS3WfNXVpUcxJKKwNTqUdDpnLFotFYrZnyBQAGMhK9xjS6Smayt1R9d",
  "key29": "5Xip7MuoLU4rraYMz2qHuUQ2mHxrFgoa23BmUsEaPeM1WibAB9aqhf2rV6DPysGfwEMkvNCm1p6gCHist2R7xaGW",
  "key30": "5i3iS7hsYeSx1TYkF2xB5Yfk3RRbQGTL4gvXmMLhfDmGydubffCknH23YWK9MJsseJs83acCDGbFtW5FJTh1mCVa",
  "key31": "4MapXffqiK4dTndTtujiVWfC1hntdyu4dcrooK93uQgpSK78s5pbsaAxJSLFX6e91r7cd31r1pJYkYcr3SyAGZ7L",
  "key32": "5QFokctFU6kQEwj5tT4mmLfx7rkmTDyjfSh3FfSd28uM228NEBuBybUTE7DigDpQZmzhZrCRxJH9UCMWDE3EJCtH",
  "key33": "5DWKbspNbuWdw6DsPJECg2iUTqKAFzbHT7p99WXBt6dK4c1sHd6qDBSYLpKTXmaoiBUHsx7A82nsQrYKnqYm93Dh",
  "key34": "63nVLv4Dia2fMvGJ9nsYk6YPPrtYEZjUheph2Uy1XDRRiKfUMkAwnTnFC4Se1ZgYgvjJzPzBjM1FcTLJuUKSrXo9",
  "key35": "4bqHoAc1qN4YkMUsHdEeyKZrmuYiHBTpxkp7KgevhDTqX1PDQCa8UxJoPi9s7ZuSrz9uXF9tFgefJR1W3gJzzdKi"
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
