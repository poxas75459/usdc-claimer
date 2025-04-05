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
    "UfSpxeMU2DdXVmZpFstcSc3X27eL8wH4vTV74re7ne4JVv4f5sB2xKJeh9M1eSsceGKgPfVVf44aMpbf6AuMMgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBXejFRALC62utwNhn4rUq5YTvj4Wi9b6tE7HxSje6vegS5oa3Tp8wZXFMgyeB6qENjTBz1Fuy14UqjdbPmmPde",
  "key1": "2Y5Kd58kEd3vMoKN7gEXZMM2UCJSimjrfg3zXrrbsF14gdoJYv2PxEgfrbCRxsViLwJXzVWj7UR8umfMydaZuPXa",
  "key2": "ggSdjfuALHxyPCYJA46yEPq8TsXKweiyJ3UTCN197CiQhMKMBH3erHiSAZH4wfWKu7tJWynvZywfwdFfk7sU2H8",
  "key3": "4Qd4HJuEfou6NnPmRCTANU12BqYYkYNSZxq4WrvmfRAjiLJqfDvjkphHi7Z6AdpTQ9jUuhwU1F8UnxoLSeRvMoaJ",
  "key4": "35EMkA37eLVnrTS6ifjrxHMU3UzD7EQFxsN1PEcEcUMWiu9rj7BGv9uwFSuhroGTLZKh6YyL2AQgmYQHdChgSLMN",
  "key5": "oeXrqNYxzwEqwHUoVbzFRwzh5TeoFgmGJy8VYUR3e51G7J3oKUZkVWoHKRRaoPi99RqAV9fLbF2AXuFDtQVYsTi",
  "key6": "2p3VDNU4DJWxYVp1mtLDsgXKcf1odgPKutRSRPAwHiu4nttzbJ94P6N6Q9VoFVVwAUJu3Tny9dSWdsTrfhiEtgee",
  "key7": "R4HGMCbesCXkySgEMKwbJ21HtjwS96R3CgMuKtPYiaYt6XHHRb1DgfdzbE637vWCjKo6bJqvuFCQUk5UPhURHhJ",
  "key8": "2f2xcake93hQ8oAguN2fWuv9B2WULn8bRjfdRc8NGV3C5XTjdnHfKvuwruohsrdLQaxvXSFPjbKLoScUi32Lom5P",
  "key9": "XHYcZktUugGCn2SPZxmmgZjVc1y21dHPiktnhF1k9nVRxJvpT9Va6JLWyVke8H12hw5k6LfxcuAfMJp3uicJJdZ",
  "key10": "4HWvQRgWYHxTdApmbR6FN8b2N5UjvsT9FrkASriDqdW8C5V6qUyTHFCF1XGmzQy9t9dTh5YFqsZuBFv5vw8CE4YK",
  "key11": "FN9fmFLpHq3QhRTsR2iYBaN3EQwqGGMKESuiYpZRVJgKvE9HosPJHrTcWYukaskyapScqtzsn3CqApdFwN2kVb8",
  "key12": "2YM2BXzH7eDqCYdBb5tkqqGBcp88u4YkFAzmER9mPLBHmigWYeyDKDtyhnR5gMdrBMYARCPvmodwHsRZ3at71Zay",
  "key13": "3xNc3mqo6AA42tBYsZzitf2fnYArMMXDFt6UaXG4W6Px97WFjYDrYe5hLXm5bmkqgVfeZPH5HvbBoX8tXkiW2rEr",
  "key14": "2oDrdiRJjVQj6sE1kRq7vQEarGEWWNMq7cnrBDxonLJXvTxWUvGDaprdKp5JoaaRfxYotAGS1t7mQ8wKBNvqwpa8",
  "key15": "5YjtfyPYrPdDFFWiBePuzVrnT6dTDe5wQ5vdhfMQMViDFwipgtwYG3NWYGsKTwdSSB4THLzXw6eAAdEzxieSGDeA",
  "key16": "4pEztc8T52vzSAg1bh8yTXVVbMAxGNefAKhdAdryT2MmDfqQDMGJPLDV1PzMgYJBDb1uA8ZXTcGTWmp3QVSKANps",
  "key17": "9WruSSDeSV5EmMK64ssCJLaiG8AQfAFvVUquUNFKjPa7w7MtTTiJP4CFQ76kEpMqnNfEMwuLKRHnE59rdHr6gfr",
  "key18": "4Jq7eQK9iVZJWUYmLELrBLSvQrEqBNNcuW2nqD11PQz6wsLbfAb7zBoWWFcJntciqjiMd7vAfyazMaPGsBTNgioP",
  "key19": "riqNxf3BZ7YdfZzmvwSqWpPuQS4Euztu4DMwcrp2ERZYQBCtycphv3gmkEAwXWFD39nyqbg5MGjWehxsNU6dPCJ",
  "key20": "KQYmmbmGEaNCwFAVR4Yqakn3HGPLbLFCsuZJLWu9JyVWgVep4ooBTYjcVBqYUdSB3w6bcvTFSACEgcMNAMykVwu",
  "key21": "4MdrbfLG3SQi5iYfMmA3PbzbCLwo88YvUbaDm451118SDa9jNgxEVoygEDmtT1d4xdDa9KWefGvL8ua8q9zfPZgJ",
  "key22": "Gh6Ab3bKBu7KBq4A3a4LSC3xfgSoB4KAyh1JokGxqa26fgTYc3VfjxaNNdFhTLmHzi7VNAAqLSKLCYYaNvYbSuT",
  "key23": "nTaVQaHqXb8yKZ3FdR1mdbnFBtw8ErepjveZbUFX1kZM6XSjHxyyz8mTmjDQ6vN7vErwkhf5Qtx3jYB2wS9Rvtk",
  "key24": "61EFfKXvNMogsoW3epVZzxz1oK8HvNH2gJezSR52vsKkMZvwJuhFUpi99tdsDeVeShrKMWYLFMUR5cbriYiF49hZ",
  "key25": "4hHgmJQjJtKz8SAX5Dnuc8pYHUegCxydBE5ggvQ26ohKpKR2DTWvdAvye6Y7fzX67fAjBHqPAWogRo74vv3hcQjU",
  "key26": "35B97AzKtUKXAfz1ACZZ6fT6VJUNM9ntQGZd2cmRaqkL1PvbMV8pLZCVi3oaNNUTteRMpuXQ6KHzwtsR8vLEabof",
  "key27": "3mHgX1A9vUwpB7s5LzCRAREyA4nx5YYBNoQrgZ3xxHrN1YDwYemMgWxDz9vjx5yYhh6zoLR9ha42sXmbPCC2dFKE",
  "key28": "66sBf6V1hoDUj9jKuHMJ2NFY6ve6C74ZZ5mXYmPNFYpKf2tJzj7SncR6uDqFiAJBXUmCKDPGNE6vNUr4myn23BFW",
  "key29": "4xbXWxTLaE5JYxN471vo9iKLstYiHgroKG9wbtXVvwAtK3jTFkwDGbCns8uk5s4756wGU943jbgrgitUTMEVgQQj",
  "key30": "42Bn8871gTKW3oeQS4mcSckZ1JnfpYDkkPpopp5zALprXEjA9oypfAP4P1JX6qRv7Pbpg2KQ7sUJkkxJLCZTTU7h",
  "key31": "5dokBWoTzUJdqLyYiHHy1ARXLnecsNvpsjBDcuje1ZAn9UUbK1ECYCHCB2M7j9bBc2MsWqJXFP7Eq3ohxri8fEwT",
  "key32": "3daiwkN3qEMV7EaotRmvrEF76xRSL9cJBQZ94V3nmiETgDG1aqWGvsBZocz4a4opR2ar1YAqW2Exgwdrh4Yzu3i1",
  "key33": "2BjDYxPB6e7x6xJtYJ6Uju7ryR971dsqBF61iuz298zTwTuC6EjuG9za9S4kDGwy8d9NzLesAi9Cv7K2QFYGKJFy",
  "key34": "Srje7mVDoYKsSnLrrCf76wQQ1JuQLmfkzqUpGefqSXJJhBQXWo4Je2fweKbQwsMyKn2jwkUVEfxzfQXFtiwJwSg",
  "key35": "5E7FmN4Jk3ki8Yfou55pz7TsrpD3wYZuE8DqW22iLEyq6nxzXN3fAsgpWJcmktmBPPY4vG8FRTtVPAtNPUWYuQas"
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
