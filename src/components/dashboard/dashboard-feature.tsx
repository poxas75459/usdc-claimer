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
    "3qfi3ZRJeXMdtJV5bCSvuNjcEouhHg1JHUs2oifNSaABGfSMCFsnoJ8H24ACEukTobdpNruXS9qBdUqPK7AvNMDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Bqp9DgsdAHxTxNcUHFas9MZvg6M88PRpSLPJLPBSmAa9oBTUhqWbY8HQj6KaRUb3NcqRXK92rmViukMM7ozFZY",
  "key1": "4G3jgZekbrmibd4V1KNqPezzxXJyUCNMUL86FDcFCjGL532W7GaQpmHqDsSFZTcACQUu7AACwQZfW147e7qt34bU",
  "key2": "3emkurfumYgxyzoB9nEsBgt4aQ6uyJp3ZULy2dNkfiK6JPP7WD9VnUPe4AeT7X7vrYe24NVT5zznhtbVyJKRjQvg",
  "key3": "4ZWToECYrXo2aaHgW3XGCkY2Ryr6N1w4ddzfbZLRwBd1Pi4fLaisdrEArdRt9TC91GQJVrpcx1nSmAjxtCNGE4ic",
  "key4": "3qUecD4sqxGtMUP66NM6w1KXsxveMDQU1RhqCDfMZo2EoqgDEr7C4EFqXL3Z7NSXhH5tWQ7cZJ3uoaqPHcBBWt27",
  "key5": "3se4EnKYeqhMWGDeiZynT3aZFA6Y3aEVRakFis8DyfFbYRDYAybv1KaexGVkkhuLsh3kbMBLSM9yXXan4CHXEHdt",
  "key6": "4137HTduwzqiF7AS6yGwJjQnnTbpQpV9ZmcbNXEGgwxaxbKGnJobVqfniEMuegBubghpYZUFEEN3E6RGFMmNzExP",
  "key7": "SjzVkhouhwsvfxzswWaFqbVucRLWYeLjreLTR1udZEb8jb1zAMkUSWA8xiXZ6GetNNFPJHRK4sVP3WomxMFbyKd",
  "key8": "4LdpMHAVMKyHPBfFXBA3PMZRVcakR7GSNRoJDkLQ7aquXdjwhzt4TsogNaSPNZzymN62ZVAb56nbnJVZrDMtHsqS",
  "key9": "3nMS2xjyr7jiJB8xXbGgC1WUSznyME3U4kKTVq41qefLGydMtKKkyTyt9vYP8wF1MR3YBcd7kX2esq9apyFpcyZP",
  "key10": "59Z2PRd735jsQ8m8sCeJg6V91TVTswES75WFXhxCjwVXk2LvjMj1RHHMuazrXD9NbsfXKZFnYaYnge1FzVdYnsv7",
  "key11": "2LqXWukMyiC9yTXDx6h9ssSRefr3r6yH6PEWyLE5Hj8U9pv8539Udu4HrfTjptgKkx67e5FAeJdwjbdh6ux4y7jC",
  "key12": "4D2jinvbqD7Qa2K2njNFPs2QAhBQrRhEVAoDxWtuC9yNQjC6RVYUw1ZPdPiCTYDqdCQwexnFFDzxJQskmqYXN9kz",
  "key13": "5HN9ZmfG8sWBwm81qeYGRe4eqBNn94jZjjAsFMrkFr1aRUVipwtbRKRHx8ptzpKYThimz1tp6YcVcRjnEkG6V74V",
  "key14": "raKHRmcuBf9jWNBi335sXNpATnPXaVWR5HbX1n4YYZWGKFu6UbrzBHG7UzQLt4kGaok7rsoxdSUT8NxuMHGu41A",
  "key15": "3krYiwrPbkyakA7vHiU3XM8fSgsc9U8AsiyMKCNBYccMzWwdnwgy6hwf4QfPTmiM2P2DFRxiAYKSqgmgXxa4GxXW",
  "key16": "2Qokm3SxuC4NbSwd6VxrSxWSFT3TY9M3dw787BwpwRuEDvUqJm5qT19X15jCUGCBi34EmHbANe7YVRi934ena2QW",
  "key17": "67H9Xkruy2PoijiAWjUbguU4t4Ky6NH9haEzxz6uDE5vyCqLQBVB1FeePcEmu3mCTuaUs7JxVrp5PGgsBFSRZsD1",
  "key18": "2Q1v7BgAfr7ACNT1j4vaiqmSGFKsyhA4pk6tX9UFbPHhAbCXZCfaCYBCsaNXKMo9hBRskrow9KUp6gugFA8oxXrp",
  "key19": "29j76RkqKowRx3Ag6H5HHQohMrvQL3ipX3bTc7xJMFcrmLhw93mUJ36YyoNuraiVyn2KbMR428PV2dPFvR7QxYSZ",
  "key20": "6bh6eGXDqsxpH84TWonSJcQ4L7yhjDWgDNu2W85nSojyCEZj5FesQa1SBcejpfe756MP418j381buzQbT8gjZsk",
  "key21": "3jS9vVSmiBJY4TTfFwoE212an3LMLo4HFG2ood1q57hiLhAgswV1Q3f1Hb3h8itJV1T8FW5PHHry3oX42grnvLrS",
  "key22": "3Hn1aUiwqPqNP5731q17Vs7GBYhpKijNzdQLVwy8PwEdibQWayM2TemqEh6btrHmscpk5JrkakYnQTWh5PzsSeeK",
  "key23": "1YCkKxwzvsLt841giyS8ixDZPvMBnSJdeGwAgNdxZ9DbFFYQpW3vkShtfTobf1EXe7dpABJo8a3qxpxHu89yg72",
  "key24": "5Ddv7VRJNK8xxcs6UAEfRuirQeve2wsAejp2LrpZ3icyA5TRC1udDL7ydWoZodUWT62eDCWVCTPgqmSxXArFSkJs",
  "key25": "oicg6FpVYohaBHjDqjvoDDo5TtYtuMLUQVvVEmYUWbuZqY2ZufFfNBiQKTMBjmikipT9aRTZnxBvD1HnSxWd6kd",
  "key26": "buv9sxZDtXzWjmvgcRF3QvevCBN4HSSDekbxzouxTyt39KpZJDSdUXVgJA856ozTiK7j6uiZQYgufASCHPS7aXG",
  "key27": "28LF7Aaczuks6tAfYgRKZHLkJ2SPB6xie3J9aiLPh2zmZtWMttURYDM5zUyDbvxeN19xUZ3Uf5XsMuSzQmgjSP8v",
  "key28": "48ntSSvHGEjD52nRHuRwZH4zTAJADbzfsae5dHcfVdcXMrfvheULywBiPXPyRGhoETn9mtVWGm4cvjVbtrz3Hvmv",
  "key29": "5imG4XQwhxaNj3wqkxBTKnFtSpbriwtnVAAY5Z8km3v4oiXbNHjQ5nMVXq3dF52QwK2samMY8tZd7D19cZKJum7A",
  "key30": "GVjYqnfJshxJMf2JH4CU6f6FkCjSXCqaS8sWzg8h3T7w1WqexUEx3T15QCwtn5YsGXSgjpi7TjtK1KPCeWtpE9k",
  "key31": "64pAQyna8ZenhXaxQqTnaEsiQtcpcPaUZddnrXFtHGjLydPQhZrNm778H66St95K2JV6RozTjvnfwR6yzhsqRdJM",
  "key32": "qdT59zr5u1uQNwxL3L8qnPLHtXcg8Ae8yaG3TfCSXAKAxGxiqFPHRZF2T34wJz3q4ecMZC8wEnMycKLWjajfFbS"
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
