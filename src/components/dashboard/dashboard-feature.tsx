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
    "Zg6J36txbEUy7uK7BbP2TbXs4wCJgFqJuWwBX9A9UYL4dfbosYdpjoU95HR7RXMhZZCwmRgJ1ue2P16pDsGmytK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5Ee4LVcebtzyo144fAJLms5WNxg3R2vsQTVjowJrrV5m6ZVVkUvdxh1K5q96H8aTaymS2SP99kw6Abstw91vBV",
  "key1": "3nEWxXEwCwy7pSbxohnGPLetyjhYu3as5BfroPbfMtsAciVBXGhfTWfoxqfVBbBPcBs9ftvSvJ9PrtYVDJRXcmW9",
  "key2": "3VpQmYgcLoupdUDPhte9Swi1KCfpKaBY4ZztzcBzYJkqSx4kho9WCKdMfq6KN2GUS55anZZFJs77kE7RGKFM2QAf",
  "key3": "YQZsa4RctYgGgXrM5Rfm9Q8zKyGWh9VRhokXtwL1zG7PWPuSoMvAyFC3dLHims8JUrfTSbCEb3ge58cXpU9BFNZ",
  "key4": "HB71FtxUX6Q3wtrQ5AkFQZTqfK4DR1gFeHTXJTJSUW6yipvQ9yXtDfdWzAAdMqhL6PsuznHCStXesEys5dGMs5m",
  "key5": "2nQzb5RH1cutbfLyM2NPqHyEqVGEWjBf3HjcqL3LymJjszkZptSioynVay53vY14v7q1Bu4W28NruEWmvYSzApsF",
  "key6": "3ZucpxFHBiDGnhH9n4M9JaQkojQnjKu9d9sFZxT2PXmGaNtfAL78eJZuSEaKToedjRaAGbMVttNtVZqJj4onwzSR",
  "key7": "59vQqa4BGQUdxye5LFfYKn3xfvLY2gKWMaEGUBrM1tahL7wiHibfTGtwRrX2jut6WrirwStb1CvjGQnTp3HizRQY",
  "key8": "28jGrSFZpFssPdVjNH1Fr4Lat1YzfsukdhPTYcFutM2buVE3LCFbb6SCtCS1VBvFc7LuKf4mB5tXzWkBLqdDAHtm",
  "key9": "2BRwiei3V1y5MUuZsomFvQYrerzUoLaN2yK5Yyatdv7TcpzjvUvZ9n24ummUUwmsJuHgNtkFLqr9e76NFUuWjgDh",
  "key10": "4a6rWyDH17P7ZAbgvmsgkKYopptYWy1nesS2DGpio8cLjoHvCMBUdFQB8BnWYoYsYnBVKmsaQnYZ4BScduGsTVF3",
  "key11": "5f87UBz5fXxDN5kPNic3Sn2Hn5GpHEny1jAXfQvdvEAQVx78Hd4nh3GrfaHEsnHLhE1MH7AykFZWmMjddNigbgF4",
  "key12": "64XXQLmGwtrAW7vsUkAVw6GpueZSv9wgkgbKn8exLZ6syVY6aXJ43yktNKJjhZzyQFFRXg12mwDXttm993NLzbSq",
  "key13": "3i7TKbc1GfiR6bZEiFjJam6dZksgnGmDtQKJQns72diknQzV4fhKf5YhCEDxgi99AK7SBAqy8GZju5gpgCxHCpZ1",
  "key14": "5wFdY2KJjVFaNAkS2F8iXCWsPra6aBpnixNGbuCv2kFA28fdtbxUqLXVDLFHBUizBTodLcSSAnrJrQHoCRN1Bvx8",
  "key15": "4wVqn8CrDsn1gb9nDxLmv42ru8LwWPBWYbU2GHMtcXDEbwG2qSzUDjLGS32UWmiyC3ZHX9X4nWVqQ2LHngge8GSy",
  "key16": "22iYukrUS7UZajuH9zxaxT4ygaLoJrpKYN8EZWdPh6duM5GsU48nF3HG9YLE2vUgeAT5Zjz5okfLTztKTB2oaSAc",
  "key17": "5ZkJ1H55LzAVR2iguevzTJSciLN1cVZQhCpYMC16zcCgtthTg8swWHFqcGZk7eGgRfJt6V9uYqgnwmkVcGcdhfE",
  "key18": "66ei9AUZP3j2diZ98hr1ut8toLb32Edkh1p5W8MR8Yq2f5VXEuQNhkTvkGeM998K9vV2aAAF7bgx5du46oFVFxW7",
  "key19": "5d52v1LgKqDFpnkE9iHoCuThN7j5FQuXDY8wybhyZiBoj1ynymFBcYDNrBmffnL5qzHGZTGc7AMbFQ73BaD43J8n",
  "key20": "omk3TwQSKZcCX2pCptXQQAyRoxmyLWYnqKj8qB916tNuxnqwbQDWePcVvDVQY9YE4yPfYeJu7EYxue4uMt3jWUw",
  "key21": "51AS4ygfdjnGgUpwRPYHr2ByXvjxGs8qS2a89DtqzSgneoEPDhqBPRSPZSgCm8fGhvzyntj2oEHmTzAtzvqisdAR",
  "key22": "5QD6sU27yqTPK3amCuoqYcehrLVRGHrUXk6Luj3neppReuDmvD9QqZf34SFxA9gVFVm75HKq6sA9kMFQDrKVumDw",
  "key23": "XShuMVXQokB4eQ22ZWywxLDsfo2VekWd9UL6K56WuWskPVUYDiLrBNGA4FxBSP93tPVqY1yEhtmtTRgGge1P95i",
  "key24": "2mAdAViTazqSG5cjv7tRUWyrnqN8JEwEwpr5FFkmFAxUMi4ok1YU7ZnMpgD5NgDTm464wscSNx7rSJ3WRoLCXBKT",
  "key25": "4NdhFenWofoPqyY6LLAvam129B95QiDmbKfyMekDa64CWuy6eDeYyWWSV3YaFRFcE7U92eNWD8NJ72M5vRemeZjb",
  "key26": "4NvsqSJy28jUAW1b2Nz7tr4dFMrWckzyoQtwghEEDbAU1K4n78ctAa2XhvBBmbNVGWggDKyhRoNHBjbvxBnYEWHH",
  "key27": "4yLFCpbLuznhDJ9NX1yRVRW4Fm1WYYfb4dS8CL8btRXZ9AqLzGAApNX6RxkjcMzJ3pid4T3Gmvc6Ct5w3VMruCz1",
  "key28": "wcTeYZY28yiYUB2r4fr2YiRKn8RK27zdaJtunhZRLUFqzexz1MZPVHHqUacWnAkNseXhknuwh7EsQK8JDvbu3ez",
  "key29": "LHgJZcBYUURW2ZwLVCviEBFtuosDBNqdyDcsgAnVfE3P8K37xQPVW4VJXuHD2UL8VFAtNTZNWChfjpL2kBJhqvZ",
  "key30": "4ybg52Xx41nXFDPEFcjTUZ3c86bfGHE2Kx1Q3enUWtSifdUeTuVKF7xcTGfTUxUj2VoqymHJ3ZnK3BzQoxPqQAB3",
  "key31": "XVz4twj2rhCvz9Q1cZQpkKsSca357eY3X8xZWRU8LVzyKWx1Du1or9GxNtYcwwMTNCfFQh4SYHuFZ2ivCMPwMZV",
  "key32": "41qTxnuhMN772tMAdQjkxfwubG3bSuNgxE97aNWDR9D1i7ErGN4UP1gWv8S1HHJ7RnH8GzUusbNnVa2WkArV9dAH",
  "key33": "4aGdVcnMtD7KftjVvUNutq3ZGMz24zXtZd5CCtbzme4LcXDo3aDpjpDyTRUyHvnJs37gafPHpFz9btJNUpxf6Bc2",
  "key34": "XuzDZrNTTG4dP1eqy9JUgfh3QecFUZEQUAytE4xXkuohnLhMwyvieuhcDiVVyDFYKEJCj8Zx4XG4n1nHZzi3v7K",
  "key35": "XbMLuSpi4oPjuCkCkmHybTKLQVhJ26nmK5A7D7xyLrsgXAoFhvgrWAuVAt1e7zxyt758GCFFe4KHiZ88rYLJhDC",
  "key36": "5e3ECNYNkCNfthZ4uo5C6nJ3FmYK1tPePjAxnicrZdZfw3azpZpAXoJDaso6DjahurHCtCto4zyNZXQhK6gJrpbD"
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
