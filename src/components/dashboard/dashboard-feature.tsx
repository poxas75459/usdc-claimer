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
    "2jXFNgLJZeDCuYSyPcN7FPvv5ZxuoH4dcb2eYVj9yZyy1CKEWisXQWdu5nJycovaHo6UPXzTN4jKd6ACUrBGrSC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GqRPV72qz3Q7qMfVCbppJWi8CqyYURdSjf7SdhJ3TuAXAm4ffhkCW66JVCbmmKQ7SArqU7fo43FMkkTfptMjjWY",
  "key1": "22Ba9Kf8gQgrMHi2yDeQvsKZ6NFNd8oYhZBLrBudNtJdbGg4wga5GA42VYDiRd7bUhSdPG8szEW2tNKkrC3oSkwr",
  "key2": "4mry94hkGK5PgbNBmWJym8ysGM4RdCmgJDkJvFW72wvGvwqsjEBFucg8x13QyB5rFQVgebyCoxn8SmmD49ef5crU",
  "key3": "3d1SaUM7T4ew3ZA18Mv2mfJmUVVLYRieVuoctN8HaYBKm7ADCZ4CyR2rG45BrDVoHBqgDJyRe7mj1Rkas1wTGZTC",
  "key4": "oBtpTHJA5bCipNcr1hwid46UaubAbai4r1NNuxcc5BLQT9XxuVkDiQGCbPys8gJAnozcJ5s4Hzrbzk14z45q9FJ",
  "key5": "3RdvYDjwHMvWbeFCd2dehf2PrXYKYBHeyHbWyRaniXFZBo9uQfEv3tYu7YEpYNiK6FgRheag4nYeJA6EiUTybMPy",
  "key6": "35hgignrguxzpkprms5P3EVb94dDDGLPEwV3FgXM2UXfkw3Tq6uquXLiAvSh1X2j5CusutB5U8C4yGU5EX4r4ALF",
  "key7": "DFL1x8nY7TnfUnPVVro5gX5xQagdsdDBbKP4f9DWgkiWntwoSU6r5QibeXkKALqnsgqrM9jNPB59vBPVrK9P3Fe",
  "key8": "2JvHKTeap2qHRbdB4Lawqz8JWeW9KKCyD1HFJgS8HWp7W7SfRoj4h8c4ZoiBFzwpQSDzV7TVGn7hzaqXHymnq8hE",
  "key9": "2va48mrsDGebHXWPLktHSc67wHNtYPWpQ6mwYU8dk9ZYFW3yaHYJTCPugsa7pViiVi47nBt2P5RZPKXKcvXekFxe",
  "key10": "3Aobjo6YywFB6zq9PRD482NHendyu2dngu3wm2fvgS8VXDzYG2wJpWQQHYoKpbqbQSV1U4ptNDGhdFabMv4cUXEF",
  "key11": "3ZWkgbiqLcznFYLKD98oFqutK492gxVqqBU8F6usRZt9KF78yvzDQmEFNkBBLb9KSq7xcRN7ffn6sigJEr7Xvkqk",
  "key12": "5zpAXqMsvUsMVxoH4Az6wddRzjLdUMwczcdxXgn8gqpqxRDCZn6xQyRjwbQuhwrztCpMxpj15Uu5xfbeAmaMjwK2",
  "key13": "4Nh5TMDcGcZfJZaZA3Lz3zcmMyCHxqUmpndhcnceGJPZCA8sFodMtXE2GtT4CC9ZdfZaLHF7W7VxvuSNN2KToK7y",
  "key14": "5xFVVuduiRkFpsrRj6w1anqeZothDvwYSHFGe7A5YfXSd6jAhXYWZbKAqrCQS7A6Qk5yPv22rpRiPdVSSX51bGyK",
  "key15": "cgX2ZxV4ZG6CXaNpPR1tB5bTBp2umKkUgGNfZCR3ejPofFg7fXNqCqkk3HPSooMaEVNv1KHaqySJeAidd3BsduY",
  "key16": "4jNtHrKrbSj2Qez8NamwbZEPUA89Wf4BbSs6FarVKPiSVeHF7H5fqXn74hj9eN3NnFvP8ScbJqzp7kfzdtAYAKUM",
  "key17": "4s2PrgnRbcUQkM3M2RKrHq6WFQAvKw7pqgaVLkHxDRxdrW8xvwjFFqXj3ktQtx9veKGbY3S3TshWmPngtZJTob5P",
  "key18": "msm2DLjca18yotVFgb4DbQfXbgjELgvVuVDrFqr5m4s7FfASTuXEk3tEqCHuYsHmsR4UdjvdmsTPFJLLJhjAd9M",
  "key19": "2REQTJRMdyyVpF4uyXXRR61DqKkEfiPiDyxueLv2gss9HkbanoThAwu9AuxQmyFxiEoLzkBBb145t46ecvHo6Ucu",
  "key20": "g6nMBifFceYhdAjXbT9tdsgL2obf4mS7gSgSbGMF6V2aN2WEA1FarMP5gmGTSx3Lnx6yg1HrR3dYa25LvXM3DUu",
  "key21": "3tpnPZj72fpsRscutuLG7UZcZm8myxYzAiHykNftfTyhPSpDkvHPnWs1b8WminkrJKzWc7845zNge176ChS4Fe8P",
  "key22": "5MsG3rXAKW25VwKeyjufU1PWg4HW9rrJaDDmeNmHNugPHsm1xM1i367hJ8myHcBr8bN7gphZaF3ZVJn48YiDr2yS",
  "key23": "oFANtjUKgKv8tUXfmdzCZirL2dM8A9GPegnDTk8wTUNnXkPsnjcyioKhYQnjFnBC39g48eKy4V95Q6Mt2YcSath",
  "key24": "3psWzMoxccw2t1HWUoFe3mGxSY5xC42Ab2ShgDdvBfZ63XB2zxQNPPdVJtYQG9FVFzy4VdK3U9KHnpRETkSz5Ujq",
  "key25": "ntkR9Wmog9C3rxkcRptnjPXc2NRoeVhHD4xzF1sG9tZniR8qGRnZiABKDpmvRswRDrGb2RD8aRabPs49tPGQjrg",
  "key26": "3kmJsAt2yQvmDwmF7TdiKBjVCaN2KKfPkH1sMybFDgpT3DoPd3RNVnfb4akgZ7YmNQAAMPxRRKDnmDk8hmKk3ToG",
  "key27": "WsBGBKmTuCc8PsbHgf89PHJyu4yaLgdHvcyCGZw8VbQHgzhSSRY1MU8uu7UgHGgHuTn83MZkisf2Gm8VuL7MGY2",
  "key28": "3V7FU7mhyHT4x3DJ2iEx57nmWG2UQGMZrKM8QzYcNfAZs7xjVGfnAdgF3moaxtrV68vE1VsqNG9TrtgGXE8Rk46w",
  "key29": "3YaeberuxfvvePyMfY7wYWinPbejUUXVLuHopieoen3QeecNrAfVrAy3yBBe15kKCkDhUCTHWaUMhBVPEsKUFTY8",
  "key30": "2ioyi5pTVEy8kTuhXLPa7UY1YQcqvmRt3xDp7YJSGyQ7m43VCi1zP2VkunvjCX5WB1BTeT6NRDi4rmkd3hxzuCVm",
  "key31": "jzf7gLJgWRqXhB69kBNW5vg9vwUspB6a9CyDQakH4o3k3CkoxEKN1tgFWuRuSiRPBbvi7Hu2Ure1suStrMBiJWW"
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
