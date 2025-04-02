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
    "2eDAnfgjKJvBZ4Dh5fNMpuSfm5Xv8ymWYWYyDj78PafUT4io4CR8U8AwiqRXcfBKM7e6vKqnoVUJRYeZL7esncy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1H6Hr99yykYwbSHjr26YgRSuUvK8TVxVAZQpKAe3JY4BLn7j71q9QxAQkS1xVWdXETAEh8SnTeiiJxXT59BgDn",
  "key1": "3TdaPeU88wvPmxkCEPjbs6Mbf4EFA2KiNVsYv6t1ZNe5bEDbkfe6jzHig94q9ss51CyH8wGu7TQqYWcx66ScjUzc",
  "key2": "4QX1cf2YMVwA7Uat3wck9EG7jLzdG45jjZoZDwaW83RyzeU2XfERrhvUeUUCASDwJKdq8Dz5N4VpfcgFDFgT16qG",
  "key3": "99gYtUAsPf5Fd5Q4NAWvH6GCeMjHBxi9iTL87egGirpbhuh2EVi3yY1xYCafQxmwhFJ82736vbiSirAc5izvhGy",
  "key4": "4SbuYHsswonQGZvzG8LaTjYmXoLwkqWPCmTGcCzjFSkRQPKLx8B9QQpXQruxBThCNJMEwZG8omePsXXnrPEer97r",
  "key5": "2b7qMHEpyVEwjYVsxmH9iJdpHwhtnChvVUouXUcoQdHsqgbw4PAhwxtJMoKV4N1G7rdxtnW1kRLAs6Hy6NjrQstb",
  "key6": "28EzsrcTSscwEwj5B9vRSuv63Qems1ZNxS5FgDY1sNXXknLCNnrU3DbhgfiGX2cVPXzJFK9qYrGNcGcwQR8Xvzt6",
  "key7": "43y2Ncm1YXrEPFQHU9VV1MvVyxh12By1iGum63SyysG8DC58FfW6nYHHhBDs5ryBu4rZkUaDbV47ZCDBP9wUpw4z",
  "key8": "44AFXWGEvtKBZ5DTXBooYu2nn5n4DeCPWhjJ4ktBS5htF2Ait9yfRsauLFscu9jz8Z7JzLdfGPj2EnMhqFKNHnpV",
  "key9": "67ido3drpn5Ts1JxDz65GiK17aJU65mmP52HDrzTHrmJYQD2gWCkmxgGPSupdx2rv822i5CdZQLpryqEwRpVxaba",
  "key10": "5kyihA7nuPiomreVqFZigssRGKsoFDmrWz6nYis9AbojkhGTwYT11ceBt5D6ptt4VfifoQfSsB25GD6cgS5wAvjz",
  "key11": "2LmDkKH73gc1eb4PjRfMogmtg2eFJqXAgna4Gah27i1AA1bHNkF1yzUZ63uxFA2SxGA8JqoYaCRNNreWJDbu7k12",
  "key12": "UHa7L29i3nMJomJHanih5oZorPWa73qjEsFLHsBzrnWeJQN3bGMf53vz4bW6qYhBfUeL1Xn6uZz6gFB33cWoFNJ",
  "key13": "3Fi7A9uHWwS3sz2zkQ6nR2fuhhnRTDcvDhfr3v9m4jh344F4ioxirW9ze8QDFAx2NqA1D1ZCGvgQGUAX419ProtV",
  "key14": "5eBnUE2DwRXnSh3M4YnZRwgX7R1rYikLng2VcG55naCBtyF6CPTSdCidi59YY5ggWGZppEPEW3o7ksK5wXAVBYn3",
  "key15": "4TD6bVM7dcPjAPZdz7nicCt2rE6jb3osBPtTvocuKFiUueWQammkRX5rGMgSwedaK5u5YS9Mox1M9KxReSQEsLy4",
  "key16": "5kfE8myV4ddQ2navoHPen1P5v3JEgNPiRhqytmT4pFN4EKXSykgUJ26XPL2WQuDUsG7vUGUpZrXY2QzYurtSkJ4K",
  "key17": "4yXWfv8bfdxoZBa15dGjWsRzm5DrySqR62QZ91uueVAFXQZtrfppuWtukETU2Sutfc5BAd8SaWg2mnPUxqPEhisx",
  "key18": "Le8xfFuGmSXzfArFySgeXYgp8ckqd5QvqsCy5MF8cmdtG3qwcaYUf2ftceaNHtpkdXvMAUHuaRLcCntGFD9Tv5x",
  "key19": "w5y23cAJRFfwELg6mg3CiK2tQ1DAMxAtRRGzAkqwXqECqcrmKadv9Q13vFZjqQZ8tbuLr4z5tNrpG6FQezUbqQB",
  "key20": "2CGhhinLb2FfWyC3QpxknDqUk7zFEgyuN3dy2iDXXmk2BRaRywjLuXzLf7ay8sMvRjx5fUhK96gso672TBd9Pry",
  "key21": "2NaruUFExp7T9ipBWCRh7Mf82SRhddUb2BwKho4nswDyx4NgtbvEhawsQUVdCNEGZAhBgmXB4Z7iv2eDzVg5bTgo",
  "key22": "nJhXeMSmEC3Uuz3dY2am3e8V9CoYHSpLh6kWbzsqhZL6Xxkc8stuondW8Ss7ZQt7TyCN6UhoL4YnDgtAvBqw2Sh",
  "key23": "tgnPVqdmbU8d4YC4HFYEZwBZuWfafDZ4iohNkvxK1wMNMwzaV3cEuuEYmU6Df8ABb8dSBmjNkRW5Lq6epCxqbhs",
  "key24": "5SNjoPU4csAu9Yu7T8xTzwmNNCM7wqYVapUeL6wXeNp34S4BRAChjRFVxAc86bFinakeyFmdGmir62oJe7Jy9sYi"
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
