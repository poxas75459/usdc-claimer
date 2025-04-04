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
    "62EDiSABP5HkgaSnMFuobr7nQGQbAQcUPPdZiCwKU6Ng9cY6GSiXw8kvqvd1eF5Utz6HoyzgYfCiE9HermAnUDDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zZhczsVKvdLL6zccQBa8GzhtU2J9citf3mbJ7K4CRvCzUTmG7iiqDk4KHxeKneuCjppa6UmcY6KpS74wHX7M8t",
  "key1": "2uMs2QrtYUKUxJA6zZKuirEPStSdbXwLyurLvPpicF1DcoC61SU71dohX1HAJhWHh8piGRb1p3rSwYzAj53yFMKD",
  "key2": "BvvyjSLnhUTByQ2TfRZE3BkegxRXksoS9yJ1HfHKHzCzkArBFXdoShNhieNWyWmUpFgWcpKRzymmymZJKgT1Djw",
  "key3": "4qUc4SW8HfPGZ5rXUh2EupwSBpdjhhQzH85z3KLTfsVH9VEQNjgW1vZefz2nTspbQVFYSCuufTBr9PYmwEZ2Np6r",
  "key4": "4EDUprHmWVMBM69ouvXWnvMBZEfWX4EdCMGmaygUoLoDrfSGYe7ZXNQ8cC8jKFUywKT4G7uvCKLPHEuDhATakZYJ",
  "key5": "2sY7PZwfnexdksHT58TUmrv7QwEsobhTy8pi7idFkGimzYKCCyTvYA42vNBuK5k6fXG3uz63gpsCLe8XLNk8DxzS",
  "key6": "4hab4xsLreejjedt3JvmSxj81Pvp4nqgNL4mwqYMbfoH3MFF7LeFssN8onfysRGTWDAbWMbwJ95MZwZmsJzhgeEY",
  "key7": "4AEdPDDB2YtBjF1cbjC27nBrwtZvmCm4jzuZ3ysZVt7oDs6BZeE2c2f3i28T9DBz5Zd8bWJgWAMqZGqNenmPMUt7",
  "key8": "3FsDZeQ2pnBWH4ne1rupfcDNM7fRWNnyg76R3Hg6SmQmjiwSXnb56fHmsyg3aUNaLiGW53nVefht9cjaQTs9TrGa",
  "key9": "5cQb4HBimtcfHEGTvu3E957XFPGfdUNcuPLY9f4aMX2G9XFN7652h1US1tLDre5848miauy2cLqTn7zDU2DyhZ13",
  "key10": "4PrEMkSaPhQ9wurr3wmxhGLoDx9zkM5M1S6TptZRP81TVQcKt4JUKQiKUG684NkMJuwBQY4pzP6YrGzL9jfT8CTP",
  "key11": "4SgNaLt6zYKKDHfJrme8CM3wvJEjYYZnnFKPKNCorGHYJswVAQTVHgLbEQhBfyPR5J3qvqCzabAxSwCanRChCjH3",
  "key12": "46W7yqADnMWZ9a9nQ5CmkcfXHiBQQ1xuYec55z13ULiZeRumNbprg6xoJAZneQAy737LH8jH7Sesgw4EuiVr3Ggj",
  "key13": "2oxbxBxumt1Ajutvip8fnVMPtguArcSnbYrzng77rVKThqDcTjHfzXDR9nGbKLhoVZoyVmJ5Nz9AQwTSqNGWp3Sg",
  "key14": "2LJm6BptL2BkmY2HwzXVyc7ssQF7qahVmb4LMw5YWGBXoPKRC8rnkNq9B6N6mu2UMgvWSwRzxwTAFKPF5Ze3eHbS",
  "key15": "4pDRQotTJMEWDLGKp6MFSeYyv5JZghrWEPtwSVDCHvgfjWR6K1y24dKUT78uXoWmwS7J877eqCpGvXpU1uUzbaSr",
  "key16": "4p32e1ULu42iCSwPkR7oaxMoD7cew9bYzCyLg1k6GDHuvbhSRwd4CpgKYtxjLPegwCa3hyzaWbe1YPW4guPsoZ5V",
  "key17": "3VySRRpN37RRkWpZ7dGeByD6ccVYC3XxutbHujT36NRop5m5FV5NkjxzJ5TYhY5HQowojKR8mNFY2adozKBQZkmX",
  "key18": "3415A96Ro5h5695rZVFvAjY5c6FKZkHms4q5rPUN5tckQQtmQoSK4q9Gm2CdzTHdRBf2DiGHi4g7KNzotXCdPnLb",
  "key19": "dsUZCRRo4KyhLXVpd4EgyNcpo8UT6um5jh6Qq85ETvFBoPEonoB6EutXtgooAFuYvS54DTqjewA5R5DXBNEPNK2",
  "key20": "ANsVA6wFLaMPKk9c1aWXMCbZwHkJ1mabCf4iZJM72gw6GjvayudSnmK89fEQWQgF1qP4C8Vchaj9rCRzbXkxhL9",
  "key21": "2f8e2zoUqK3BEhNDuwHXratDLddFiAGqrUha4rYFwyN8WA7YcjPLzxU7hfFq8TE5MBckXe8oSm7ZF5MmjmrBcjNz",
  "key22": "4PbaTAwQp9FAvfhcjp7BHd8RwJXMedntPCmuZ1nGL2ttGDEEdXSctNoL42MzL1ZDctp98btMiAf91CwienuH9T8t",
  "key23": "3Fy7wMen66vApA3C3XuQy5GdLFNQos6SwdAjj5p3MCe73qs8jmoLTxgrLaahWLTayw6T4N9Sx9k1y7rFCSJWNGsG",
  "key24": "5NicCb1gp5vmJc41BM5nwZyMQiWp5VfDr4Vj11SFzTEFVSPE9t5XVg5Fq2iSw6eYapwSvRBDACg6pKk3HVxpof8D",
  "key25": "3MiV3PNpPnBNK4Fe2W3kQMZvQLVVqwtmbWj3kKEuiCgktZGfXmmHHymRFxBeYpCNMMGk87pUVxXWuuxunS2yR1yU",
  "key26": "4XcsDQ8YsDifSBZCjSC68nGAa4xBX123i9J7LZEH6i4sEVsKmuvbKoKRJscD6XffNgK9N6DMibN4aW7SJRDb1nyV",
  "key27": "4mBEh6VFMVt9LyeGQ8zB5X5XiANcN4JHib2ZQ8xrp7e2mLdWVh8ijNAKPv9goQnLnG3bdDK1E55Gjxr58LZDgTNv",
  "key28": "3JV3Y8AbuPGEth4oz4151NpXA8DVyvxKCmfc8oWFeNArrV9LbGsWpoEAUa1cpvXvav8PAhzoM1oNttNbYbKo5unf",
  "key29": "3trWwvARU3HEUa1yTnY4t5wQKdkHypovFhMJr5RgYB5sjgM64QjuREvzxZ1GfNDNFK3Zt4hLPLjnHsFXqDsoyice",
  "key30": "tR1RCPwgxpacRvNq3b5wXmvtjifZ153yfZqW7kFwPmguuFRGUmgxruTy3U9d3xXnRZLMbvH51qYW8rxKf2nRd2D",
  "key31": "5iTCwZsmybhL3aKzK5NEuUi7ifkwuHLB4Crg5TYXLq5uwVtErDmMWGjXMYtsxhnxh6gBKystSTnwtd9LHxPbEf24",
  "key32": "kQkgmiFUaGLpzA97m19vQ3aEcDxQTQAbnc3NGspqQbBueLN2kcrSWBmVJsifvYwMWB5WuE3EmhSRnemzEEABNnM"
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
