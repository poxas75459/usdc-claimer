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
    "3HACwKb1auHwKG3i8DM6HSpHopPC9BXp24ePqSTdU5Y3Ja5TDJBJBZPnLUCbdPNg1HwbsS96NymKzxDodi5yRswz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rrWNsNRfdqxCN2CTv3eJZ9r7wx1K5dYPt8BUjwFc2oV7TjTH2dEL3Z2MR1LMubv4G116Nh5m9HZ7NRKsD8J54BU",
  "key1": "5YXhbpVpG8RJssiSuVuN8Hqw9y5gVM97YEf4Um7TinZEc7mCAN7CkcW4xZ2c8QPZPryexbx36rFwRdZRzbbREmHz",
  "key2": "42oLH6jBg7dsEAD2g1v2C8LX8rjHCjWiLccMAku2Hhorv221i2m518eb1d8bPCGdk4gnS3Pyo2fgK1KL4Hrf7Boc",
  "key3": "uEce86ouBbXt6F64BHeZiVc1AedUxasPrvpc71gDKk64U2eNkoy7Uk94rWHjMUfXonRSkk6UumRUaVuS6t5UxHh",
  "key4": "2B4f5ejN6RpYH7onn7abm3at4jd9vCwTkqQgZHHAHywdk8DxNbwrmpW7cjtnRiEheJ2GaXBTfdKdc2BFDcBb2xKg",
  "key5": "HEn2tFA9z4Ktpkk95MPb2ac1SAamvwXQjqpcdUb4vqMNs2nTte8fweV343m3XsJCMhzjNhBP3ivZRsHyASnzomb",
  "key6": "qhyDL9RGqdM3akCmy8qtfCo9yHGHfQkZQeJDyrFZ2msBKhWYd4bGoeX8ZRpynTaAW7Vu5RiSW2NyhJAHt4yqQNk",
  "key7": "4Nka3Fj5yoJSowMZspAoKyQEpGiceNuu82G9e9WzvKkg6cj7fhx7HcDiCLS1HT8VKonBiMxNXWYkNpw82TtE9vaK",
  "key8": "2w2NeN1g2ZbD74rZAn9Nyy5YStHNGgWNAQmzKdZJk2JaxY3L5iZLRmNTKC9Wq1P9e1mTsvBmoym13ctEWLvbWGZd",
  "key9": "42L9mu4mAJGtBdgLaMF3hwTajJZHa9katG2VsvExzHR1oPww2APWzqBkUbWuGDoLJ6HvruyGw7Dx6ydrAPScM3Di",
  "key10": "5hcPeRH4ZxWraydTisPuMKToEV3Lvi7cL3uSRNsAjEoHUDRkr4qCvfRJacEBDZvgeSbgevQHhMAgQQ9twPrJd2eg",
  "key11": "67qHYGsG6oT3BQ76ApMJqj6p7uAtUkGgEn1xZPtYu1u6NFfNkDRUCVdBCEf11kQBtK6EWaDpBpuGAZPRYPitmySu",
  "key12": "s1CECUeTZQLApnQ2mc76dGaHEch568kkQkwCqn82CPbYtfN1L8oM2DdkQ8qKMCY86a6ywRrJ8J2XsgJqABnPdWE",
  "key13": "49k4mhGy8vKWuNTKMSwD4CYobgAjCCtp3GCxNieUjxShRUu5D9oy2pcWdnDTWob27cbC8m6bCGHq2A76AZ6x3wsu",
  "key14": "4EzQ3JCsDHKrUCqbai65zvSBetDG52odsY9AKnrBx6rNCt74vzXfVFC1dv84zH2mDWRpBm7dCJSpQmLw7W2N7Xs3",
  "key15": "pL5y2cyx1Kwvw5eKDoESEPzGRYfrpBiC9BVs6EY9g1aB98QUzNwpWuuYVgj9ri8eFkCwP3mY9GSvFmVpyZXs9Gf",
  "key16": "35dMba3W6nT2SmYLY69sLKKgabmox2txMekpkcHoPe5KpPKqQojaFYGSMttNvRXePATYU23MjhUbKJZFkV4uevC8",
  "key17": "37novbyhmhnDXNuVGaBjkQBTtcXCiiRjctr2nFN3Tmwc6oHusTH1QjAcihnLvRv9wiUMdqvUY3nTXrWPits5j8SQ",
  "key18": "8Q77Xi5zzGQ3EiKmHs4LdLcKXpVG8faDhMGRPJFWdrBrevmkKm2BJ9W19uRu1uq151zFw47qabAzbig43N6UV9a",
  "key19": "YL8vdEthKscpuVns3eSyH8UdwT7M6K3wDED68N1u9r8waN3osz36FpHktXFXUho7kkHveKi1ZAcZgVXRp4qkirA",
  "key20": "61FHWmdq6sPZbAX4rXQugk35RvbTjPckTw3nAYXzqcHitecXEWQMfqsA7WqbswkPiZS46oKbgRKLcUXstkEgoCSW",
  "key21": "5m7KssU6TBn6RQ5hpg5swDxEkvYSPnGZD7EVHCZd12ahSfdfHGb6sU9hc28GykyerCS2fGo8716QqXBmSQ8tCPti",
  "key22": "2p925Mzs3u2c6KjMerp8sAPf5k17PhMKMn5iDxSy4A6iM7BLBJne6S9GieKCh24XUFLRn5dJ68R1XUs6bH2CvcH5",
  "key23": "4urXvazq5HVWH35ijX7GJ6k6JYa3G2WM6zwWVWhFu6vLg9ZL11vsozZRmvEDdgJreEUnYrynPJv8LTwBcbp3qJ6N",
  "key24": "4bhh1WqxiT1DDhneq1EKsJi49PRk31YbxNAhcDXsFyh9VLNUg3WCNCqpZmZQ2WTQdMY2CPDHWJbepuZimVargamo",
  "key25": "3s19dKfZbMMsi33uCAvb6e52JFxZzUo7jrWacY1j5J5h6CxLJ3Zhr4JkRWQh19dK5jCPDZRwkY5WhKeeLqUbpaGd",
  "key26": "56fp6QEppbGcHNRAtQ2bv9UPnTDBmdeLnQ94SE8zfD89uzNWkj39diF5GkoXzEN5grfeYaNwHDH1GKf5vvRAzZK6",
  "key27": "3iJtaNkxVyhHXdMt7f2DzgB4oBD1nwyWaMpixGS3KcLnQQmp7imBMdbeCdgQZmLitkADge3ywhMXnafXkokivgXC",
  "key28": "g1dY9yXpKmLQU4qLNVDA8Aueqj1BADg16xCWhdt9dzYNERLE3fyWMLEQ1wZbcWSCxGMP5eJG3d3ax5TMxwk8Jrm",
  "key29": "2VxyKXGVrAwXtHfXLiNxZCYpsrGwS9a4p15AsWCsECs6URVfAbvzHrWiD3LHNtPRnsaBaq61WRGAsehSpqCpTtkR"
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
