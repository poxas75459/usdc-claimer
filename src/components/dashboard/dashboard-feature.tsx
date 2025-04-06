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
    "3K2JCzEWoLuQStQxGRv1ittL9rP66C1jWb32pURcG7f8DtJCkgTGxA6LL3bfisYYhACBXkkMHS88Y4qjpbpmV5XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNv3sdTDBVbAZ3kSmyKD2i116LpbFe4AyHK4Ke3FDuRFs9CbzdFoJDLQBs81NSqrcJGRsWeYFSJecKSRvXVbgMj",
  "key1": "5YGPXRUMZgifyP2ZUiuKJ3U1gyFApuXccaWTBwFVrR4bCKR9bsERpkDFtcLeo4TPX1VVFU47cJ7mwXkCUVUKiWQ",
  "key2": "3bCe9hBtp8DkieMxCGx6SQj4nRdC53RmCoUwSVCyXJrauYYagExTGHV1TCNqGaYSkeCpxEJDtjy9d5NNHF2T5en2",
  "key3": "5vYAxjp7AL4KSj9xHRKrp5HkjN5XYj3Z6xDVDvX4Ux1UM4GfompaGEDzMFGb7PaupSNuJtqmfpXJrGvFqo3yufVs",
  "key4": "4WywwwTcifzUcvz2tUXUi86TsFMRgR5SwUSLKMHVKAgr7agWyBD9o4pvQrag7XRHwyTXwSf77WzhnTEDLag7JRYz",
  "key5": "4FaGEHFg2LCbVmbCSTYfHJzGXTYbyN3V8uNbb133wCcDjoUYJ5JsceDZJsfxips6Rx2xAmRCJtwhVYx1X1jXcd43",
  "key6": "2Zxgmec5kpYMB87yjSVdpBawgpwBG26UtLvMzujm5iusiVfHS1psJiYZ3tX6S7EjR7Foxm33tfWf9pRkutNRjFUw",
  "key7": "4UDGQ3o5e4e5wk5adARHDi3q11w8mfbvS6VJFSFLACccMFC6vZ7qC1KPSxhyESPjuFCFT36neSgzVDeL8CbdsAEc",
  "key8": "3iu3Jvhyv2dJ5WqwjH9x3kNr2eRkjRgr5EwpPZpTE7utSVkCtsn635Lg38Rrb5VHd9ncad9AW5rkUQmt4Vydqwm4",
  "key9": "4Ja8xB5togE3rL1JaUtmU1g7LojrgTQ4CnpjFL1EQFND87Te6LeXgh5CD63Vbo98E4ynzV2LKzt2AogRgdwwFA45",
  "key10": "5P2Rtobc5ZBqvAqtdhnMfD5MDZehUScfVUVKbG8WWTrWZorRLeEss2J9xofVbrbBiYuSDe72872kFeC835c8GQtE",
  "key11": "4WYVoR6XdtKrwaARVDjr2D5tSwKSpGgQMJuUsk6bEjxdwiNR6FGDMtNDhhmTm2NsuYwxmWoYB8UGAc5dKf2QFcek",
  "key12": "21djQ2YbWvFzDfxcahTFzfB2Gs2qjaELrdvhSADkyRWMvguQUJXPCoWuh7Ko4tmQvjoUXqihoMfZnU2GnqX9tYmw",
  "key13": "4GoKVAsJE8CRW2MfUrydC8WeQ4anu29kgiVesDbcrjMcH7tAMdWFBLe8BHp494eEZRqFvnPA7eWMvpftSM4FCeH6",
  "key14": "MBpyiDPArFG2vZRad6vtCg5pMM8ZhWzXEKGYGqVJcRz3ajpk5yDdwzjTDHt84X63ZrpsCFnjxHVUrW7ATNbgDwu",
  "key15": "5UNwr79r3HfqcTdGXLwF3z1M5uTVGLVGE6yrhPnjRyzKrJGRpHk8u9YtKoJRP5ozCDjQKosC4r2oSqoZyuv7an4o",
  "key16": "2HqyJcL53ecZCpxMCdip8Wndti6MN3akzAKvRRdPFzgwiErDeY7JKCGeNqJFxguDwY4cyZitYVnXyzBSVrT56zVN",
  "key17": "33Qo6qbQdBuzpaY52TpuFZGjBqEZ8wXVPeh9XFndDmBwhMBBzXuUxGDvvH8ZwmDkJWfH1dPKgzme5uPTWobZBQD6",
  "key18": "4abBrS3wHoJnJ33ra1XrPjCEbK2p6HstTmN9i3ccGmD9BPhef8x7QoDsiBVhLu7SZ1boYSp7FtLTihMEtWgTgHmK",
  "key19": "EwNvu8i3XBzSLEqQxgfD8mfH3oXQHWDzSsLpWKBAgSvypjTixomEBDAoz44oW6SSdLFjUwFsGxizq4ghksoqrJ1",
  "key20": "3JDBF7PJ6sg2MKKWcBnyhyjJRoQzQE5NXA7G92LdBcASAy6C2vYazWfa7ByQZummBwo8mxvCm1T3VnXdRQCLCVXR",
  "key21": "E15fLAxHyZaXWnxhi61JfjzcRVB7y6Yty7cJCp2Q2HJpUHs5kdfB5pKPv9sxmiXCb4anEsVJYw3LbrysXhVqpqw",
  "key22": "McjNiETJ7BBv8cMPekaUqGT9SD316bkpadQZA23dVkrhCqsvC7SHrr8Fka6Jw2eGW8By2tZahM3hZMkeMz6Vue8",
  "key23": "BoWHKP6X4WK1QNBzozctptt5E8vjPWzpTMnB1d4myBpe6erim7G4LpduLejKjKoaRZxPGiR6Mfj4DYmJkoZaArX",
  "key24": "5srreQBnrcn3eQRpAqUx43W1FykzRENJ4YuEowbtYzPWsYwbNh5n21QppjdF7Gfa72gzzDwDrXxZXXyU8iTESDaN",
  "key25": "3LZtj58Lf1rqRHaPPk4fyLBSCjNfUkRX6oYMU6sX8PWxpKw8TFWrn7ZPpzxfFmkaTHYFdPVX8DkomvxPvHQrG2ta",
  "key26": "ukxiX64gL2XX5mfSFejQ7AqkpZYzgNeoyByMtYQ9Z4VwybwTLFjsU341L91L5w8xsjrrEFPncCaVHt1nxhMs5Jn",
  "key27": "vdFaCFJQVdSERujQZA6oeYdxXLJNP61dPur1qMiMDyTS4td1rbAk3u1PEUtvxVGmbS2un8kViJxyAUrTNuVucQ3",
  "key28": "5rfPMBiwy2Y1RSScWW244JJdPJ2YcTmq1EftnUfygsGB54SVVkJKWddmeFG7wfDZdguo5udN7XTykdzD4qfBF9FP",
  "key29": "2WY9KR7igt2bKnSLMTK5Z8Rt2ch1GX9sSnwxAfLV3hMQeX6EE2iFgju5UBAZafM8e8vmpyd4EBF7gK6YRusAztTR",
  "key30": "3GjHK3FsJj9CdZFR12jpzLszhinhGoGag6WknwKbuxX3X6zqVNNufXhf1CbmF1Kzcf5TboLUYH4nfs7mFXWC2Vfc",
  "key31": "5pvAGwf8f5avadPWbGAVPkCtkkVMsMv7FgGtAUzZfA673JhLTV8ZuyJSrSJdZNxv5xQquwMeG1P6TpABQTq7zapT",
  "key32": "F2wncwt2nwLytnru4PeVDbhJcWPbTWSb5n8S4XitdeKiqDQUKtoxb1Nqsnvz2VXeXCZyAWYx5noSBEVkS78EERV"
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
