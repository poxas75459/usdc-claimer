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
    "yUS1LBJHK8xC3EVs8GHAC2An5MsAudDu6meZ2x4EKuFUCCE8synFkiFAhPk8ug7J2SsPTez5VU3XZ1ZeVF6erxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YxVGh2VwKD3xHiKQvAMSqnwYreAQCi6XS7vWAvrYgA5NLRenqijopcHJ3eZnZx4E7e6JUe2N4NrY6kVsuHRYjre",
  "key1": "dsEeduL7HGSExMxz1DMKWibi9NDZm6jZaH5qe2rhfZbbna7zJEmZd1XTTFeDP8pY4MsuQjGZty9w41Db1wH3ZqE",
  "key2": "368McaMHcRGBJ4SAyAv4q3GaKaQ5wnkNvVZ4m8KovzztRiUoHUbmwz1MbGajmmoTj7VAb1uXG8QiRZrx6VXzrHmJ",
  "key3": "4Ze4ZP1R4hdzeMFdTT8GwrzwrbfV2fbJGoHMuY1dtZ9qWY3Yf94nK6KLTLsNKu9JSZeRcXDFwS8drBJiRrFtSmJp",
  "key4": "2qPiQcnNRSdnFHEyA25DUSywjdcsy1WqpsGAvKz9cBT8YPYYERC1huGyvPeEZLJv6rVpNWqqRFKtEyaRhjjMEaXi",
  "key5": "bxvinbovGqgfCmFgHXJSuS5F87AQdAnDCmTsyJxqFMNrsgBJob17JGyE3wis9Vw3FKKZnv5c2t7frG1Ht6HnxKR",
  "key6": "2M9fvmpkVoo8F4wCuq4Pa7VWxcPv2SQJMPUFgVEKHKfV9kdWJC6VmZGqjS2jH2343Zh52R9gWriR92AC6atH9Z9F",
  "key7": "3C3xQYm7Jrnpa1xsV29pWW6Z1D1V4B7DKD7UYz4vMqAjdPDdSGXHf2WJBtSDDaftMd7WVZ2wkkhorQUBAYHgMX6n",
  "key8": "4mV7afAXVeY9gM1MsqhETp4FDd4qkHCW5t2spfbj4eEtfFwJ9oRRQr6BzYVC3yccFbECUv5Ub6LyuJ6GZz1avVyQ",
  "key9": "44Up2ATvorSs71Ds9PU8FRGpgAd1HhjmcZYWwzvu1rkYCCTEuaUfvWJKTesZCEWKjEkm9HHHXSsVryKkLenJ88eb",
  "key10": "gdYMPVu5r2pwsNMG4gdQdkBQvoEvixqMYd29Seth5yV5wUZy6f116ywoQeuJQNTSoLvSY2sF6G5MdCqpWBTV46t",
  "key11": "2gs4Z4VN1zE2S3cA55jTYdehu4EQTkDt4GsDGLZGyZCJKvTnTbktzqAqwwXunsJU5thFuL6dV5GqG5fVoNWhMds7",
  "key12": "5qZvUz9WoQNAWZvEcERb9wXSxjpB351Wv3TnTPdjmE7qudxNfmSBEegsrzn9Fwzo2nF9aGroMT9xFti5PHqMm48e",
  "key13": "5GFUBRMt4U3Me3uDoH26X7xXPJ39JBcb1UxAbF3P1tkqGmMsxsLaa5p7SiyN3UgUpTgP1e35JaWEanXorgoEEhJw",
  "key14": "2qDHdZ9VRnVvn1xyXE7v2N4o5LV8FPWSNcLQoCTS4EJntJYP2ckwDgnaJErE8WyzU7yCgSpab8HgCidWKf2QTCzm",
  "key15": "rsjTECXZQrmnmVFjebVevSHLhX3TBoF6Xd8YaN77ymi8321FiXCoJvLFbTdUmryCYhEnsTSNsLPXbttUsWhntsh",
  "key16": "5PrxMFeddyGs5UHqXeyFyeGmKmDxTDoPhx5MJyCXtT2Ts3KkPQrFdwCz5Kw5LVJwRV4foaN5LgCet2ryTWnoBACv",
  "key17": "4v9zsTFzfxXVLCzuSsUXfjsqNuqjkL3XwC7Tvune3Gx2BeuykW37Z9ogaT1P6ZBKTKhS5GFpCt3detGfZre25J6T",
  "key18": "2S6H8Q6KVBD5XRBDBSrATSYmSzbYpcKbxXuLVPKAC3C1Avt7S6mToT6CUrbDEcYwBwpy9eNZ8ba5Ri35A8qsUHts",
  "key19": "2W4RFxiZQfFj99jq4qjj4QVWTHf63QB4daHDakKkrwbUrDy11kd7kGMvR9UWt252y3TBtAXybu1kCzATwy7pEKzs",
  "key20": "3Yo4GMd8reRgJME86JTLejgN6AX9CK3i4hyVkSiT5gxdGzQTfQNFhjj7Emoq8e2pReFDe28W7puvNdckf7oA5Ybg",
  "key21": "4cvRCuYbb5VbpTT9rgpaX4BBPNsCznJDjtYdRKSQ1GaqofBwX525wBoSDyaDNEGfg3PVvng6fkPAQXjgS5p2qABp",
  "key22": "5BBrSijjDfXpTF6J2sC4TRjS9Mopv4kcmFXtaVn9ZfHfnRtmhPSi6LVPHC65oKePXPBwukY9UrYoZRRyxTNULTQB",
  "key23": "3AVrAPkmmt6RjYAYdVpZKJ7y33FvSibHhSzeNW131kqTQgT5EWyLTghwmuJy5aEG72kYHZ4yUbkHKJb6m3jD4iyS",
  "key24": "3xf6YxL2w7LUrdcreRrz5DVKUunDRka55NrysUTUUWmBAjCjB4bfQkPQ6Ly1hRry2Yx1UaYnU5cEwuh2QddzWHWF",
  "key25": "3KHbiJM8wddJGgT9f9hEyfUTvADKESa8vAV6KXWqsW6ZkZzc3A2iGmn31rnuYgwUqvkdt16h86awPshZ2gv3fXhA",
  "key26": "2KonvW9FprQJKUXVxjHuF3U6rzZSyZetN8uDDooxmVX8L8WpsvaLrqs93h1VMfJ7kQBwq1vZRNVkUfPA51FGa9cF",
  "key27": "3FSGVcNQZedejcfppLt8MJpXXnFdCiYtcAYCUVNAAdEDAuZ33171kHstCWCpHbB5CPmwQcPhEGpwFsjcfUfSab8p",
  "key28": "4G657q7mxVfrHgyoEzDnxYNT2kvZ7geAdpKxnijLb54Tjfs5n4Lt1AJbCfE99QrHzo5jh88EXNZqChA6azL3Yfza",
  "key29": "3rvNrkUh1J6PsKHEBT53iE3k97yKGPF6AfXy6jSDtCmQyk4KDivS1jL8QrK7dGtaf2AKzugQ1cvtbvFZbwjD38PX",
  "key30": "5ocSdTCnFNokQJP6fRvswUK6LmLUXz7hACRZc8APXow3pLLJFLJPabmFF5Yhdc9snavu1nv59zxoifXbzn4hZEEF",
  "key31": "2q5EszsrEgbLYFykkJ9hsHbF8LhgzE2LMSZnLr8MKdtLvnAHSJ6f9UGdxURtzxgiiFdRqEtjMy657DXnPSsgFeid",
  "key32": "4TAYktsxXpa7TdMK75XRnmg1P2d9rkZHzDePEYc5SJ5vsaQ8gLvNMCA89k9yrvjPhe1dLsvVeT2atJKGcw6vikiC",
  "key33": "2UgJXih1785UizsdLxm5vPfvYUP3xHTbF2JDue7eYCS1Cp4JJMQ12qDBHRQVr5Pm8soGjMeUwvHNrmkZ52qa5BAW",
  "key34": "5tHM5VPdWkoLg6emum7AvC22Wkqw3QSdqFaSvW5pafb5dj8xN4CtFBst5J27PizQc2vQbFPCRZ4PhsR3thsjmYbP"
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
