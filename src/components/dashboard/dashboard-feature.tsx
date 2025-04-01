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
    "VwDZozZF8HhsMu5WYnyvtFHUNAHYGHeVar4ZB1mPZxcjFABFYWYVnMZXtBg8anSTB83nZeP96CKSsx9V5MhchZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qpFEwCgFbxRPLB6X2ryTPffB6JGNwXMhFhXq6JfC8sd4RpdkqhgG23CSjKC9cqhT9WNJKrsH93gEXDQ13VBYQKE",
  "key1": "3pyiAs45ypGSnU6MHQUBaBGiHA8aKj28sUdEfSCTLCxUHsmExVtyzxYDYAgK4PGfkBW4H7uTqtt5n6pgd519estr",
  "key2": "5qVDP7EAQptLoPPLsUWsQ99barc2sk6jk1QNjT9kRz6Euh37pehEDNR9HUfJQwuBStysDKjtz8iaWq774WbypLV8",
  "key3": "YQgherXanvZ88XWd76h6Chie8ydPkmn8mtHXb7hyDNg9BDGAQSRESmSXuwMiEu11wMRNMJTepVfiBe4bQAtZxkf",
  "key4": "PTwr2Hhf8mvk4tzfeNcsH56q246hFjecy7JFyAmAFwv32QfKCmbiv6fV3JjFooeqYKX5Cq85btHSEV1tdAKw7o5",
  "key5": "3U9hdJDXsBhh18RLXXdeuVmVb8qZSqEKg97fyc5b7JUkAgv3PrakwCmHvXuy7wrBxLTqSVVPXE49AnVWWFiCm3tt",
  "key6": "5Fjnp3XSEWB1MKfz8DYptXozRy6gFx7QDUYrMnFD9LsQyk71guGnyyCAzDfokjbkkYNYQzGa4XS7ngLHYjSoN8ui",
  "key7": "2jP41sLaSSn27sGE4PAmFRcmd6aoZUwKiiLZfXPiiP71vnZNpon8HcZn1q3tgU7ZftZbff1nrTfgqhdyaHF6Rc4R",
  "key8": "623pSMBZ9ZGE1ws2J7bzmZogJNjQpCofmbHsPNY723teo3nZyCXiaGgQKmtXg39ZMp8ADZWA3ya3F5a2akN8eSkT",
  "key9": "5vkaD4cfgSR6YuzAPRJjnqwxigZeymZEzjg8b17ckBSu6w1nZT64yG9oq7NnhCdDNPS2uEvjcwR83kmNkan9Y1cv",
  "key10": "3DKPngXeWid5CgmJMKtKvsR6Dkm5zz9Y9KZLkpybuq8iRbHP3hunBTiiPUQz4ftJzRyskRHEqYxNz9GeqH235jMS",
  "key11": "276qYZdE59Xh23pkZYAQCL7TSpS7m66gP7fJyBNEzvPNmteZam79j2aB3pUMG68NkQx725PT5dLmuzfhQJA2JxTG",
  "key12": "4Hmv5fCbKsuGSCZHDToWH2A925tF2WoMQEvq4otFKoiaDhYckdBGmzFn6Ebnw31T2CBmmChFB86mhURqMbbCUuVc",
  "key13": "2qbweEaHU6wvZgnnqLdcRHZBCcbAj4E6oEVoYpFCjaY7jmb8Db15hnzaNvNi7eaf5B6NeN8dHa9PaLRqbzHoG2ch",
  "key14": "499mK4ujqW9E88UvdgRQWCXmJ9AHFYwkUbCARmApu7ynm1DvDw4wsHGh28Zk6d7ZhAp1BWi2K9jH5BubjctgEXUT",
  "key15": "4ZSpjAufUNiP7mojgwXbLFjQM1ERMk3etc8kjMSr3F7UkQwykEKwgNczRSKHZDeG35uwd6oHG6icaDD2nDyK1AhN",
  "key16": "4vRsRVPs2mcUBNvoPpwwM79ED5VVEEGCLWLgvTssnAyd29jMvFoNBPAG4CPu8h2mDwrSk22uUz8wTvWbYtMnB2VK",
  "key17": "2cU2EChMw3hqRyWAurDAiXjREMbAwjmjo9AUpsJfJyG9SA2fwwELATt9Jm2muDLNYXXR7uwVp9Rx23MknR3QKyBP",
  "key18": "5S62MmeVLLyeADV7577WJbQBHgzHwmV45w3S6B8MdrGbFB4xGBaLNYfkyJVzG1DPbT6t2duJEnFgN4wgygsA1gR8",
  "key19": "3AVJ3w1YXvVBmsopueDVDJiRmDC5MuVBckypE3vNZtMGVSuctEffBzgCk1eFz5GEfW7DepjDaTHpaBdGQR1DerP1",
  "key20": "4WxGhiQX2qW5iTZjcGZAsySoF1jmnsEiTkdwMMuVaDk7n7sfYSxsxT5AiQQuQ82hpSW56VjkVHfkrGpDCyqZx9eS",
  "key21": "3CEDSmTgg8GJoJZDfXed3La5Jq6yakZPzbhz2Cwo7YyzjPGqkfQMkuXV4wivUrcjQAvr6YmNcMsAdkHMJSWFrVW2",
  "key22": "3nTPTb3A95PbCwDmw8ZCKC7famDzuyc6ipftjZ8VPKb36wEDcBLGKvZF6oSPyUdfr9uCe3AKs6oX8TQg83ezpUZY",
  "key23": "3QxGoDmSU9wSjx9dAiBj6SwsWi4kwv59ritD7LcWtd4VkBWSZucQzJpkPti1LFPdD65L148UYYRYtAuFXAu2QgbV",
  "key24": "2q2Ns9YHqiimKac82jpAXHS1opJGiKfaDa3mDU9BUyBSsQ46fcNvHDryzRZFi5xU56nxVVGyXArqKW5XcR8euLzq",
  "key25": "czsGmRFdVLCTXq5jSDM6wfHhdc6nBGtyyzEwN6YijXY6Xa13n73BBp8H8GHaxC6Pd58mLDHRomLo3Xy9EXYN4DW",
  "key26": "4JVhdTnVbEWVoJZ1Y1esnHME7fAVG6iSV4vcDfWqRTANEgWy2dRwxVh2At5LHBca95UFjz1WmJQu362YnxXvNWCV",
  "key27": "3KJF1zYQ7x6gTFt73Ga4JfWfQjc6fqYCpPS6EdkyKmvPHBkAGLn4BFCUxWxqSjvuo5NyAe2zvaRMUeG5xyLq5KTU"
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
