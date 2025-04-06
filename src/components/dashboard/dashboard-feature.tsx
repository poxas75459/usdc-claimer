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
    "3UWTtNmmhqUVUUPZyPpzbbw7pLy31ynGsVaMv7ChWC3z1Pjex5gDHq4oni6cNFza75fGkQ8PXHswJeuEk6Fb2qJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gdSiMRbGG9ruVjF7hRQRrig5TqCUTyk9C3epVkQTJxb8bEU1M3TtqWLUrH4EFbwvUjNVEz4tBBL7V4wRU95idSJ",
  "key1": "54mmvxA5SgdYoz8HkrWJoG9kgU11iYhb6QzF19ZUhRAVDKDL4TmBdeE86GVFfrNRMDq7FXHs6a2X2TpU65x7FAxA",
  "key2": "2fci2q4Zu6vA5ZK49HYm89mhrXym5ApfbaYr5qv8oU3iYkGdhZSHecYpsC9EReJ87z6mWpbxEn6GuGawyg1pQNnn",
  "key3": "GsnAHRsCjJ66JhcVgCgzieDV95Ms5XzyrVbyVH78sntBj6fwthXhwHAVwBsCQzaG3m1YaZjm4mgEgrJHeE4Kkgc",
  "key4": "2nJwf1aUFSncKBrAyYyDFjsWxaDAAJ4UXVUeeDZqinmzBZrW61gBjehFvBjiBN5mWQQGcp6q6Yu2usbvN1gn45Vt",
  "key5": "2R1mbkFXFmbERjUjAKws5pGNKX1hGJ6hhudT1FXt9ocbkwWy14JaZxA1oByndBQGm96Uv39CwaeJKuxwNDX6dMx",
  "key6": "5yLqYcUxzVdrf5mrgTepa7YUWzwuZZMMDC5xg1Akb8YtYQcedRZeXiiZMoUZYDUNurounUPxHutmVbD5yK63cTEK",
  "key7": "3jiCymSwFgNiX9vHPaZ3dFAeSTZTpgQHaWjth4hjff18tbpNPGPDsd2pYUpZt3h85HxkKRQBtoYsY5fHrt3SvsYG",
  "key8": "4EFsEPGRf6f1vqvWLJHrtKhNCRY8NA8YXtvF69xkzLH9cRX4ng5V5mDF1LN5sLBzyK9frqNnLAYAFLGqfQMCzLR6",
  "key9": "5xyQwb8ZH1DkLhWhiho1US94geRzuxxFyc2VF4YZD72vf9TwAdZGWkZzgUMKS5diKkfJYobF3MrxA9iFanT7Yhhk",
  "key10": "622EE6oW93Badzney97QMtrJDcfuLMrfGLnfYYwBFeoUasGkhKCuwEb2yX2zSygk1T6aStm3jEBg5FTQY9bkFnmi",
  "key11": "4s1bK4ptZvfANsiLVvdzMCC3i4EEe8GwKYSdoeisR1FuKh2MCSpsbuSVKKyhDHrRdv1XYdCK5tNhVAwL4j1298Ar",
  "key12": "31zzTMAd8DLij4cLrJQApb7uYdNXRsNSjSMJJtwQEcMz9EWqhZaRrEGAo7g1CMCGt45EPfXZCmcGLxCQvb2b6JU8",
  "key13": "4ixEuHVkQAgeWsZ1RtjFspQRaRmuuFtaJgsJCj5by99o4XqftS6cYgBKoebfAciTxNwLbLoyLMhLfK9AL4g5m3JA",
  "key14": "Fxd9oCJh262mrQa42D9kEV1Qd5oLdJwnMUh2MKUNT44jdQ8TvXqa8L3FHxC5fasPKgJTspqUefSFww3DoJoDcBL",
  "key15": "2s58he6CgCGvVg8DRHr9gqtD5TngSpKEndhXDnd48P5yci3wHA9hVTqRwrTgMdbWgfY3rZktRr6Bc25hoMUqnrbB",
  "key16": "4dvyXZTrksVLBAMaoJ2EaMVdDJw5hE91Ho4DxMyGwrnvEV83v889izR6Ld2ErwKEwvFLUnSdd9CZPqDiVqgGvuL2",
  "key17": "4evY5VMkVKmSQh9wscMN5KKmQGQmZbucnMkn4S6NWjNH3R9hkGu7fFQZ6BHWfN7e2kHdTgASga4fYsvaAL7PkJyk",
  "key18": "3YGewbSpRFsPxu5daTPo9tHPR1qDaacdvnXKfV7XciBuyzgfDvJkubDnUMpysy5a1BR1CxMeK77D2G4X6KyeaWT4",
  "key19": "4CShSHpX8hjmFw5SSZndak177z5xNfpxt71WtovN4JzEPQwfq12tahxgBjMhEG8XYs1j5U8oE7ewLTymsHm543Rm",
  "key20": "Ld8HXLSq8sAb2cNoWpPCJ12NXK2x5zne8yB1sHgs7DgCp7JFQdnY6qa5s1jawf7Kes7R21anYbgzPaW86Pe9RLk",
  "key21": "Q5pLe9eQEK3FE33odS7CSVRG1duxFqu2yzRVBdTuSBQ5VEwmwKiBGBq3pJP8QZTpwWvUt6og2tyjvUaB8Lcyor8",
  "key22": "3rbP93qDvyB9tKnX7BECCC8KctHBbLS9Hi7raXXBweV3nubfWaYJFoXfc6b7NM9nRL32idc63qDavUgp1bGq1W2A",
  "key23": "WBcAkMV7Vp6otyvdQYRGUfsZbeeBb4ANPydcpCKU144xKrrdC4QXQgtuQqWzNs2LaTMASHBHoGbEqRt3oAhMzv7",
  "key24": "38zsbA7ybxEuDPXDkboiiEzVhcXjiUCoJsyKRzQzNNLs2qg2ysSftEv3WxqU6osAKW6W8d8ZDjTDPChSSKXKAZE2",
  "key25": "31CCQoKGDpZa1VMdPMAv3r8HP7RYydAw88UcHktxpkdqh8yoV1B4xMtCniDohSn5QD5dXDFyRWBYkmhJ9BZgQx7z",
  "key26": "qzJXXXnEBmDVxA9pNZTwhyLcRPn5WDrKHMUdnnUCd4xo5EWwrwYpJ6SFHTEaD3gYDWjkdCCDVDoq8QTjyBtbbbu",
  "key27": "5yLyYsEU1oVsoXdZ6QUdp2ubMJmgF236j3JxVnn22g717s2XkAbBEeTWkveLQCiAnzFw2MU99FnFoRBL4ePTUKyX",
  "key28": "3qEUogzFhRZoXgXEJRWjfzaGvHabW1sYbfkCMkdPX7KEdPJ81vQ62iHZSMjNEKxQVaZMrc4PBAGw6m3ZbwLJeKZP",
  "key29": "PKqwLwdkjdUZDQa8w6DTd2QXaxFrvQh5C1wfy6hi5bVmxMbCGW7rqng1bRg4oZWymhddDpAwfXBDTSpgVGSntgH",
  "key30": "4mhx5TVbVuAWQMyvWUGRwFUzBP9fkeWD1SiQS9nwAsWvxZax8mpHub3dthNFaMjYAWA7uYc3ohkVdLgxjdSi7LTJ",
  "key31": "2zqVJD6uhAXbXufGv6nrf9b9Ehfn1hmQrVcGW5BzKdLnz2gAYu7xLAfe1ESqNGaB28fZmEab7joLbuD7YQLK1WQP",
  "key32": "4agerMGnvGMJQYjwcqN5RE5XUHSxDctN1huF69W6WkocWWgpm8ZuW811t6fcE37wBMABZ5nfBuu1uR2ECQMpu5G6"
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
