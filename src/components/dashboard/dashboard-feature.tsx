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
    "3XuaKXMM9mTZjmj4i5fgbxNfpakzFowa4gMbCqwtfkGZALX3A1qGGX9hTGsDF9j2fmRdsZixq3i6de49C5Zs2pRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jk4Z4aNGaXwRswi9cNAmVfbt1cU7gVaKwPZiWDRPAQXyq3FECQV6cpis2QFpB58s9wuBPPJDdaAbbj3HoAXbZEW",
  "key1": "4TUNRjKQW8miNbNzsdu4NLgGsANBZV3t4ktx375DPdTK9tTZRvfwKEZDcNDkBbKePUD3XuBHh6awioBx6ChcATnz",
  "key2": "tYjfGnyyDqDWbTn1cwpxAcw1QGkxDpQLDd7mctXhDmin7xqNFfF851UAbbwnLQjJNeLqaraYQLiLaBtW1KCvfD4",
  "key3": "PuJR1FtymbDuwjzx4ov8nFkjodbmAmFdGVRCybsMuVEEfPNkhDtoQcQ1Wni7eZw3wQtJks9BgJ35NsFEJEDTHGb",
  "key4": "2nf623pNi6YcXgvzdK3Kqp5XotrPfag64y5T1uyRJC6kSiGS7dBUo4gBCZdAwa5HFN5tdCUyekz4LHh86KLJLaLk",
  "key5": "3C5QPfvyEEzqtLfojVPi9aeXGmsZmMPPszzFPcHHwpifH1f9bB3oKbC2zdraLZHFt2wL8StsWssbdEj3jYvrAP2P",
  "key6": "4SpiS395NikPzK7yAKDxfP78yKdRMdmLwM5CPpo7hF6SDJJ8PkLsQu6qAERK29CMxtKAKzd3WWHGFwgVvxN1tJh4",
  "key7": "4EnVd9PotZ7wv2ZciwpgXQEGzHGXsBzTHgmRYapFPBy62sZVHnzHxDHNjnMpW1xEKc4pmR26CVBv7QdCRF6QjSj9",
  "key8": "29d9p4jK9uovziCvqjRRPa3ZoWyCZ5i7NpMjuAy4qcoGeu2NjZdNJXtUCpWbrFvHejpQYiVs8imo4e8dDPuEU4p2",
  "key9": "4RCXKhsw12Wg9vy93qUXpH65kJkKhTiZPXbUwJ9CPtvMMTnyuCdkdrWrw2pRgPkm2kSL5Kxrbm2So3hj2iDtnXx4",
  "key10": "5ViSGz8KiVDCFhkpFnuDus1E21eJUHuDUQBYWhPjiVhqerfWkArEVPCj12rzzihHJ31RgP86A8Z4mXDwkUNeqNBL",
  "key11": "4CGd3N1d8NZwC9id3BCrVQrCQE6gpnMAkEf7ExMfky7KX8NcPFtYUKQTzcaERauh7sZZQqjNfzL39waPqTm2grHj",
  "key12": "5BfFpsHgMfeF4ZXP7usZPWUZt9oYShv5cT89Mic36vHxwHhCvGL1StytTHLLVRgGYjpjTAUWC9xC1SdMJ4xP1psr",
  "key13": "2Wy3dy6hRdh8oowXu4wXc1D2XdGiYVmnnGbnJAU41p2zc7Zi3Ugi9pGPNhaEav5dSuzH73WGd9hiTiWN7i1yzME6",
  "key14": "3TunFQpnyzFZr7nwWfBeAr4vufvVpCdiGeiKshPAK1yL1HKE6i1FivZc2A826tCF2fqNyZ6V7MjVZ6YrvEyY2LZd",
  "key15": "MVRqjhiPVTCufd2mEsLGEfuWVs8Qnspv5zRZvABWGQmC7Jj3K2KoZ83dtK6uK6EMtpcKYVZFzChGSpCm6agmRiE",
  "key16": "59apRw3vsxCqMFQCqUCJhYafaewmo5LW7Tsf6rEnhTXhK9tSFh5HxjGSJgibzFPViHx2cCpW1r1eitkVYVbdc1N9",
  "key17": "2Lk2NcoiCjdNGpyL3hSioPn5RY87wPcz7QveowMWdYbTfRMQPgR82GZFDcLjHEU3pLoVX2TqrXEgAc3VhN8QdEyU",
  "key18": "4mhnqtLRwMMah7tePK3wz2yGDRBnpw58brnsyNojJCrVjnMqgEtXDZMWSG3PimD1BC1mURjXdtDzMkVZVxTCiFt6",
  "key19": "2SZpypQMza3Xnx5jJyPao3A1CMxBLjEChbmKSSyuo9NLDeeqFYYG2iiFe7auo5DYsFCB2vzVN4ALwoPMhd2rfdSE",
  "key20": "5dGXuaaeWWLEcUp58cqjLE86gek1H76J7tzqCY2qJ8D76ikVPYazZWh2bQ98v5z2BHTEtg5MD6Vrv7w93AEQ6NUJ",
  "key21": "5gX5A4mrgMjadmWiNFzcPqdGecqMduGFzcz3zGRgQFH7AkywUtSyGshxeFDsqwgqhzVtdx47WX8yMersb4knDw2m",
  "key22": "3khTMnEybR9RqbdjDq9AydZG1K4WCmAM6yFo2g8LoALVPRcrcTUo638hehvF3GcAGn3jLmmggcih9DwtejE2jcXd",
  "key23": "3tj53CfT5ifU2tjsJn8w1sVTVXSzUFLFuZ6YwsorfosqdzLfGgQzw9xw4cfjHTg6TcDU9xW1tcWAMoP8bnRB51Kf",
  "key24": "24fSUMQMh7RsrQ8eCXQJD6ur82PpRQcq64da2SHHbe1TopHPa84e8j6HuZpuMKMaW96QZrcYrehMsebjS1LWVpnt",
  "key25": "23nbxQ5NMEZZ5BXEmqjXNBQ7TA53pbiT2CbRgCnXqPtT7TnqG8ajBfqNEBaPBNMEgL1J1Va9HbC63UWqGdGGsYUG",
  "key26": "4w41ua3cHSNCgWTpd85aXyEPz2TnfHZjsBe732pETwyehAtHimMnJcGFEByq3otwPAzzxZQoPJ9YCVajLzd5MVyB",
  "key27": "fwP5VZgGCUsxWtrQSeM8u1HNVmSaiAn8Lij3w6RUeaNhHpeyEwrmeP6Zb91s6v3LYeq8V3XaikFVhz2JeTwRGWh"
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
