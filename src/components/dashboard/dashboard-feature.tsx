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
    "34K4MnWLR8wgouPfMGaAsV7H73cGsUPnjdm2pffE6WKvqzNKHHQ6jDYRQYsWfDibko3Fz6GVb7Bcg3NjzdQ1sxWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izgJjcM497tnv2eV5jC1m5j7GGjCngYBijNi53RNcdwC2REAdtYgFEdmYNHbAApjx34b4hboDBDLNYJWViCSMeE",
  "key1": "2BarT6Vn5rn52CYa2JcBPZShkXMEkZ7cc3w7hZWU47Y6uwPx6dCX1mAe3ZpH2WTVdR7QaBkBhwnjhCV65nLtEh8g",
  "key2": "5GGGWhLHzfmqYA8CdCmUHPvn1NKB3ifdbbjsFuEmKywkJ3gV2ZwvRSCxofC45A9ySjPhD9NPxQVRvGkAEhBxGgWB",
  "key3": "4ZouL11cTUv56abrtHyEsLHEv8QJtRWAs2gP2XNBzzmBGpPci4udfJnHzafRJCPNU1gx3oQ7fTsYHfQJ6HxWSTBd",
  "key4": "PMKYDZoiWX8bZjEjoFgW9gNmRSfCYn4TGo96NJm9yFaWEwv6ispnSBKhPZF8rVFWmvVsvexx18nYh18WHaB4kXD",
  "key5": "23eaM9D2ixneqtH3YoHDQDERWQ6fVqfcECk9CyDoBGp9wxCib4jRccYkF5gWUJMsJxqQsr1DfUJgUW9Sos79oKio",
  "key6": "2oTJXBcmNLQRF4oiRqpnhLksK5QRrHewuDDRccamK4dmFHfJQbPAuKMZi3ZGWDuG4N4zoHYeYpymLYk28QrWXH3q",
  "key7": "2P29s86KDz4xVg9HhyseVtkuuX63iWiQqBRU6LqTvV72Tvqmd2shW1i2wMNsvwA3SSQ1PtccXFX1MjhQUcHyk2Hd",
  "key8": "vNxXfXGP5e798FB7S6Wicx12ewsA94vTu6gdHzXTtR9z8KKm17BB3RjPKhwrjVq1dP94sW9gb5axMW7d3XzJZRt",
  "key9": "2711uMcJ7x9nCm6ZtbNxgEE67Xf3JQqWYACubsjfjx4CTsECedB3rt1nst8FUo7yywjrffEFR4xpAkNj99SytSs4",
  "key10": "3b6UfVnaNfr8aHpveih8T9iyfoEzbd8Cc4p35Kd2MHXmqR9f1bGS7ovdnSWUe8F9FtksWgg96dkURNwKx1Gpyz6m",
  "key11": "2JCu5TEewg9a7Er8FWwGoPynHmmRiFqQmzBgTGDXPXR9ASX8eg7S6VDURWEnBCn6WFQnANHsrEtwfm1tgGbGaKuM",
  "key12": "FTwTfd3hxLkwqyABXTDETKMnGvvjKW4fadojLQG8YzUSvqs1qVLiaVrwtqPMu3MHiNRAft5PRyvzkNxhZBfxZRa",
  "key13": "B4iXpMZ3WLDMERYYMskspq3PXS99xrt3EeDrg7i6s39XTfx7a7ToB8FUUcqvMj5MyZE65CaxiPFdRJGFkVgMcyR",
  "key14": "3ZhPq8VDMpErFiHhgyiBoyvJXZQEuxJYqmZsGeQDqiRZCd6vnTiaXAfDvtFHxVU43SmJcyPvVtZmfeQn3qqzd4mu",
  "key15": "3N6hr9Uh2BwZLheJ5cTmYg2NKnjd2igaymQ4mifLj6q4QpbPgn27hP26z9vBe6gCowh8NjpZSWnm9WfeYqGdpVya",
  "key16": "3R2BrF2nMutqWGRtT6GHH8nKDUjQUjaKQurEH76SatMUJqD6LC4Bu6ypva5k2BhaScRsUyqQswKfkfqNvYDfSPdF",
  "key17": "51ySnusZhE84A9xj9exYjQz5VVuo1RrmCuaTtRhmvFzc68tetZCbXY997kwP4UWQ7jbWBbMYA3oGiyXNtJ3bxeCE",
  "key18": "YC2MvNKcpzmkvPLXt6bkqoZgQvBff51Xzxr8992VgAv2xCgqQWoSDwu3STz3VJ48jx8i5r1hXjJA26u31Lbay6f",
  "key19": "4Gw1QnKHoHE7T7tmLC1eMBohEeHiVvYDyoPVdFsmhYNdqBrmGcXiT2kwdHZk9e52KFQQok1mtn3tMJPP8U7fLYeL",
  "key20": "5Mi7LZCQb9hcbgxsdStpq3Z675iWsXD82R47Uo7XPwkCJ974eJtiPKyo6WLWdcS1UbqMt71qiGp3XUPDBvTVQiiR",
  "key21": "3TZk5gnwvWp3AzxdRH6tT29jM6Wm1YjSus8t1PPAKypxtA6EwBJYdqXzPFYU4QT5h9Hmnsmd1oixXthYDjo5ASLi",
  "key22": "Faw7xxsx6Uoh22h3yZEtAUQkxqyjFsViHXTDnJFDQmXmfHDL69CUVuHvKHeSwEWtXnyeNwH5JBxzMG5fNz97n24",
  "key23": "4eVqoe1ksCu3BDokpsqUQBYyafgxLtxceppu9bG4PTnTpxzfe4W5MPkUsJmp9a1AiLen2DsSHD3GQaTYDVJc46Da",
  "key24": "5HVWNKdXjsGYDmjtNxng61dvYroTKWfWhSWXsXeBvf5xewGw9YwneBxYaJAGxdwJQ7fxM56ZzCmmvbGuVMKWyAjD",
  "key25": "5VZ2dxUpZcNfySHViSxvLwYVCsBzfLS3nwPMX382XnJdNPLCsUUSG7e1yNCr5irkryPGyffEtBscxZz3dDxvsHiJ",
  "key26": "24zuNzVH6m6Z3UVgvdCeA9LFRL59BShSLuQKtaP8edEyhkhiPkKQHFzhRa9iYbAJLut8B95cuQi3tqFfv8yDJpHk",
  "key27": "91ECcJimPqMGCYT1DU8UGUdtqUAzXbUWGuMSQPAgbTsRbmmXEMNYXqPDbJtKn2ojF8AM7Wahy83pFPj5fsmHszG",
  "key28": "5ivL9KKJW6ZEnuTkdex4ZgRd3GhJQ2tYASzGLviiYkwamDYmVn66ey4MNLtXoybnRhZ2MwApQcYmuKQvcf9i1yXH",
  "key29": "4m6kkLjLEergJ4u7hqcaTqJFGrxubv1FbQGscRSfJzxUSDXe18QqDgpRtS3zimW4QABCxHo2sA4nh5z1aGsoaAV",
  "key30": "5yzmJyfpQXNmZyvvs4inEN3H9dwSDmEKQfAkTmxkrvcLMqk2haZ7dGXQrAowJkG7Gggocq7vbgD6a6EcyVBWhqst",
  "key31": "4oJKU5hU51E1AJhXeKMNjb4hQsPZAcx8AagPq14YMT1WGVysEfW3tz5LT4bAXLKhZdk2tnrzfGNyteBXmwVimHkp",
  "key32": "47J95bP5V98pHpq8mMDo4zXQRE3MNGVRGxk78xsXwb374SPXCr9aN76vnx7sMKn9fjcJQFY1HPcukwv1hkZTC9Y6",
  "key33": "4urLjTzNQ7hWCugtHvh7JuuQhRTsmfDEXiw2rG2DzrsHNZMVNDVrkR1nMAfLuEdCyVhHPPvL9BreixraPPFErecd",
  "key34": "ks59RTvsQi7qAZnVf2rseuRNew4aUwFsfEEESa1xM1gcfaK4RrJsdX7P1yDGTs8oRsgU8YNzHyfHJCrQ4dhuYvJ",
  "key35": "5yREY1dAFHKGzTBDKGN9DM6G2uvmwangrLL9NfjH7YWJ1MhrKtpxevbFPvTjNob7g5HL7mv2qdyuWYog8Hpt1mMh",
  "key36": "67GWdcwyy6uNpC31HeGXEiYCZzgB5172BEGHM8b9XBkpvg3ttzwd4kaSE7S6Dd4HwSbaFmr6tnVMKuwy5TAWhmGR",
  "key37": "3f8HygDi9GZP5n9T3n6E1aBHzX5FaxApXVLqxDLo9nXwGphPyHeXTBfhnyaKHwqDGdUVp5rninQrsxtrmLxwga8Z",
  "key38": "2bPCEJXsCrc8T9xPnv757qNZmWA2tuDjCB7wEsnDBixLpwUiHFq3WmrnijbsBQCyoRqFJxKhZCipHRC2dqDHXBMU",
  "key39": "4kR5bVnNt4yYoC77y5fzXe6aQn56LDH3ZdezvPzMzSkcWniGgFNLe4sCYm3JzMKVg4GTWEGT5gJDKDY3t2sokByh",
  "key40": "5cMCH9XVRzCzS38bbPBGMaqcLfwyqtN1LV8Xx2ds2DKZCML6zsZSXgndscC8MnNhsn4C6wa1hGndYTfQomKso9J9",
  "key41": "3feBiTshApVVpEJ5x8itUppEqZYkfrZXFBPqwbzQNv69JcxcXhRyLQMmstJwq3ZH1dyFLEyxQZwZcy6bUpQoNVSx",
  "key42": "3yfY4csYWeLgxEkSJek79GmvdsTs1cCDg6XahLHk9JWvEDgwcJvFMVaZxbk6TjnmPFDurYKAWTzy5f4XmDGfdnXX",
  "key43": "24YAYa5vaENgKQJCPRLCN42P1Z1EYmqwEBM6MeeEHLrmf6B22VhoopRVTQQThA1oGXyMjQN4K6mfHmCzG3vMn8uq"
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
