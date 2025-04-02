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
    "2DN7sqDVB92kLkhYiu8MEiN9VhVtHNgiqbGuwdoyaFScmWpZat4h2PfQJbQ3u3wK6JdE3jKoMPRLs6R1EYG2N3wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NTHgcXM6gUzHcozpaB75y4oenwdW4S9eFkbENcXVsDt2iKaasDg6H4aBNJYg8RDCbRTdqCQgHjzgPVouCwpKYtL",
  "key1": "3XJg2AEf1317wNouVSNypcwNFMi6eeJqp6iiEG8Z9rSQnoeqVvjq9vFuu8orHCuUq2AkXFPtcMahjVCykZ6JvvNQ",
  "key2": "3doLkVdLqruxNQR4j3pAV2QsR5yZibz58HdeWNCrAe2jXoAq3wUg8F3HMzTmB6RShvGw3FbGjuKhkr6XcTHmW5cq",
  "key3": "4hyRE1heFRtzFL5PkvCaUy2DoT2JMGJKsXdb3tEQsxXXegxRKh6vp4o8LV99WADEMi2rBbKm32QWxNzUCQ64HKUe",
  "key4": "eeHoyooMZ96G3feU1rHCNaMg3xufgQbYXf14gU7k4DhhQ355FqnaZp72ropezS73kQoqsc4kt7FJErBU11jv4vi",
  "key5": "46uAQXs4t26bD44gFceJbQtBDkX32UKqn9tgjiR9MWU2Rs2uH3B81SC2SPwYkdWjQmaBWN7wtCo1VGr8EXr5k2Lz",
  "key6": "5zF3h9fB4P2r4c7fgd56piFVQWDQ9gvRErL4m71Z51VpioNZpdnNHRUJEKZ2tAe56cV4149h2dapdzK2bPif2LWA",
  "key7": "5JdZaDWwGSicgpZnkZwJARbTy6vvgGTp7JAqSWqBFh9iWCawwP3bgLA3S75eKaVwFLSPrSWQx9ca47kn5HsNbvDU",
  "key8": "kLuxHgpPofhX6SLmDoL8kk7X7MW7fUMRTEmw8gNUkyUBJsMFULqs8oYucXwiaXMemzuy3f2bC3k58FuHheSoGGw",
  "key9": "5wnfBARcnpta2Ev47DPdMoiMdwaY421VBnKnX1wNmHUCGjxPQjxUHcPy6ZuZb2QGJWYUVQkU5jgFbjjA7NP5xfXb",
  "key10": "2wrDRc4jKQWKfeMDSP95gauR1XXdxMFDuLSFDra61UXwMRwQzF2nQHYGYST4ZSwx1z4NED6dxgN3behWFjJwNAx7",
  "key11": "m2PP9vC9jtd7R2BcyWijp5cdrkcLDQayD8ZbWFUh9agveYCVsWDKBgQLwMqjdbq85YqidDSS7LNw4Uokr1M9SnQ",
  "key12": "eDus4sc3aRRaHFEGxBF4ngqrgDmu3TPSHX2PoScogDr8FhR86VHK4VvFH8BT3UG1GT9v52Pc91DKAhfG9ivmYDB",
  "key13": "K3S8DffQVPykbzyZtdrtYMsedzT1gJ2oinmJNjHtyneJPpDSpk9osr3sCXnCxhAzpAT9NvuXjGBV8pbiPZ1yboJ",
  "key14": "3ENUrNJANM5PkNDeuQW1qZcE9WMXj7WFmhyP2YzCYpUFLotvRwWqCC47uYtqwwqyY1G27sq3fNHWu9yiKTuKAvkr",
  "key15": "5R1Hmj4dvz2zpeU269GQjkZYGpvJX8MYjRpLptW8HEDqkVunLhphavJqMm76934V9q7wSJYBkFG9mZ9Z6yvucKUr",
  "key16": "4NHwzWCEMsR1bDgZz7H28CxiRUDh1iPxSJHjt4JS99nyALS6eWeysXrdrHKzyQYueQfMo1Jto2LDnPifG8qK8Tjd",
  "key17": "xDtgQyDRfmQjS62DopPp5yFS8AvYBL9tgJiKP4TixeDAabEK33rRtYEUpDsNLT8FpjgH6JQpSgDdTmwW1xQy8pc",
  "key18": "5r9wyRoj6oHpyLfveEnyLDiMZMXJ2K7bHXMeQDviESHuU1KdLnEHGMHcN9QntyTqaaYBpNnCY2uqLTVsU4dgvYyC",
  "key19": "4xvL8nktSYvRDXDDkB9bJdW1fyETsRJeBdWo5FP2nosbGULYHUvbdi47gnKyWAWQuCJwRknJVbgrA9eXr5qYRsvs",
  "key20": "3T1jGQgq9iXrpWVjTwGvpAmdF3PLLS8LH45ei1hTdSmVN9dRoaFQ2LB3Xn5UJzf3LyaUKSCazmvWnDwVfsigwyHN",
  "key21": "3evG9jZDdTWa4E8WsvUDv7w2opYA8JG1SydGJvTuesvE861sdBzKM5CNWrSy9xVeCK4JeheY93atzXt1576VR4CS",
  "key22": "4YSns6pu25Y5CVKbHDSTxDp4BgnESpsopmEJndCU7w59EybRdvdYG4Jp9umZoG5h5jfx4btuwwFaQ7j7SCxDuiYb",
  "key23": "3M6WibBascJuo6hsSWJuEsxab6qHEdcrtTR7PVw44k2Krh5E3V2u8f6SfkSB5ZW2XN8ms84Wfds1VDL5zbcy8RNA",
  "key24": "2R4bnocGtPGHMpLV99FPA3bozhvevvUrdABHD9Xfz2zh5s9Gf2sjFLvNfBhxszoNzCrT1KGsFiTkDu63ye5FyUsV",
  "key25": "2inA1obgPGv2iaAw1niiYEc6u1dSSZNY23NfSw85Pu1CoTPtg8VXRFALBGmULqQQhta2iDvEGGWxTmCxRkRodovi",
  "key26": "5Fu3KkrFQtQfdWBBwWano1C1nc6bkY24jEARPsAkKacyhZKD4RKT855zhvEfZ1qdNWXeFUMPajqim1n8VF73R4WB",
  "key27": "f7AuKP5PSwWXNNQNU3VgBAW7rup4z7zDuc6jzEG7F6g1YS2VYoNv4V51d3C2oLq4szf7z6VWaMf1uu5Mk53sYHC",
  "key28": "MrPJJHaY3EGZ8ch6WCvGpw7Nv1FMWmUWj7WKwMWkMuLWYys7LicYbfwukPge9MckerBDLrtVCSDRTDrPffi11bk",
  "key29": "5FyFKTy5d4rPz2P5fMtecNyGqkruzD7P9etgnrqNELwykTmSfogExbP16tDDTJbvVR64cxRHcSPBHhHC8VpX8af5",
  "key30": "24FyFbNuMjxtfqohwimvFwUCPL5AGBPq99oywihqoFEsq3SyYZQbxp87kLuK81ZDnSXYQLApt4mU2e7d6Gz2kgmq",
  "key31": "27W4isB5ZDC7qkkRAV7LYk59chAuce4PoBvQAdTtbd3L7qVimMHnSA9nFs4jFiEkpkYnT4DM68if6ULKxBRdUKQ5",
  "key32": "59VxFZFSXcU4EUVnTMyQ6s8hXCJvGDB4UVgQYp7bHTw3FeUB3NgMUkX7dWn5mNp7XRMHPZKYActqdTGM3GYV4uEj",
  "key33": "5QEmv2ce5ZANcenXyJamrcag8VZpba4SwTx5SbvqBea1c3joZacWTZZepapJA1NWTudKqscyRDLj8mEBtoFhDJjj",
  "key34": "ohiJUkcY5cgEHZuzkzvLn5mei7TXVoSZBCDwEQ9WCiZdaWL3XLxCHxxAMP1vuN1Ym9pHHhUQa6SPv37H3jKhcat",
  "key35": "3hvawJeVGkfW4XehYwqwH9fBDwvzw3drtk9GLT3bW8bg1U6iEJUzAXL343KFCEzN9XfUjKjJwV6VZfuFw6aK7Dy",
  "key36": "AMg4DenUER9FucuF8Yr3SbqFFhMnmqG6pZ7JrDdnRoB5c3bKJMzhkrHdqUFhnreYrQuZAqQmGiX4jkb4kmdWpWN",
  "key37": "2JHvHRcwANFMMhc2SPw1t9bAPGdxzWB4AQjoKadiGfNRLjnaKkrBYk7MrNJqPZQMR4MHffbEL9aGjD74pg8D2Ltv",
  "key38": "3Y24XE25it8nYhDNaQivckQ4mqtqyRQ8kCeJGnB4RneCawXy7nkuTeNX8LMaSXoaG26LWG62sAQanHZHsVoYHBzN",
  "key39": "5DxehNE3bxMkg22syB6rrqhivEhfAPTpB24RS4okgQWM1ReTG47hqVo3Pm3orMtMR9GEiSM6rhzJ8ZbpnNvdvL3p",
  "key40": "4TMvaoHEbdqoo69WvdiNtg4XNvp62zge7q9mjaKPrH9AMoypMrvhzoujtcekgRTMDXx71y1ip4U3LHkoYTkaQrUp"
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
