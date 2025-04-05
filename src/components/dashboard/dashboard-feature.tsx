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
    "4ho5tBqwbCf1fUW52qoRkDxsRs564MT8AyWWFhM5us2oV2Le2aYiaAHW5z5YEoHJb2g17cojqLYSeKtW7uszRwvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUMNHm1yJAdfnDVPY6Rz8P9N8ZDpbuRzzxnssyTrBunFfWYfFKA4byp7cKiWWqDBomUSo3Xc3DgDcfErjLWHvXA",
  "key1": "3z64XDoYXkXb2Zrz21FXMu4cf92xE432Bot8xvAyHtQuz9UJ77B6sz41fq83vY1oUB1kEUXjnNK7hSNy6Tns2h3L",
  "key2": "iLQktjDW7ovrZoCraCRjm9a8wdNG6Xv3pk2D26uMtHGnLNxVqC3uWKQL4yb9pCioUBexYwffS4RrMnZ59QbwBAe",
  "key3": "24MxmA52b77WXVtihL5FCNxwCU7iAMPBRg4oFXkTrgP8g5ax3nucLFrKyaxVkXiHyaLNYkd3wT6w49LoLcGFcg6E",
  "key4": "3SoZS3zfgF3cnU3MCYkWkjixwkE1gVgqJLuyhvPuHkJKj5tZMYAaNk3kt5ddwUB9dfCEGpxmEX9rCrX2wZ1uJ2bs",
  "key5": "658ofqyKPr8DJy2XB4YCcuirbdmCoeeMkd9PGcrjz5Dmqdx8ANQ47EbcePWFZg3phHjcZ2fvz5JPYwbq9iz45tM7",
  "key6": "FwH3rZoykP25VkaiYN8xkaZnmxEyBuyqZnEB5bjhDXJJ8pYD5Tx5ywR7oXsSimzc7YaN7FLPbitGFMXE1FDCq8z",
  "key7": "24cNoB2hXVwSHtM6LZujrm74EasTQzXcj5dByqqWTGH843a2Z7cqECL8XLYYvENjSDFS4fhpJ57cv34ju7CbryiH",
  "key8": "4zhKMoi7h8Z6o2LGDtDB6kCbiJXKP1JnrMyYwTU1enrv2Qr4PCEBnVk7cKssFsagb4guXfQ44HaQDC9xbESNWYh9",
  "key9": "44hFGxrQTscSwt8emMjRWbVs3fGacxdzv9kMMDM2dkqHRedyrPu19DLuQEGDVG8DQLemPCeLVMmvzZEqDak8iJCe",
  "key10": "56BxLKFqMMuxDZHxPkoimkMbjPCK2rEqHjSKCYWysJvXLvabYdMjtkwMNXCJwJnA384QgMmqwEmB48FqqY7kNoGN",
  "key11": "4Mu3Fo4Xb6iTcKJWne2oNFB137SLu5zztXjZsMS8of3BAoBSsoi8pohBb5eSyPqT9nKLo5DCmPfjD9hT5ipNUh7x",
  "key12": "27mvRVrA4VvdGWxcps4qQLAACMw9CkDAycGknzSFcoXoMXkR3FRWiMRfQoKn3hfUmywp6W8A9ZE19VEB8KmUF6fS",
  "key13": "36gz1MhYQJVjoCDyoU2FMtFMqgYQJQXPoJtfH5wyyJWr3rRyy1i1prdwujNnRPKY6h12c2Yx5aWuxS7uHHRX4Qx",
  "key14": "5oHLgrByGLBoocmkS51tH3wng3DaDgxghnYXNKiWjojhYmY26zvDkZ2ZDE1jjuMZX72xguRhe64jPzzjCJD4WGiA",
  "key15": "2a6HcWk6wmAf5omrkjdBCjcVXT5UWhjjMDvzt89co6rkcjPkkzQBY9n3fM5ofcsxnwqvcspGv8FqbGe45g9k2Snh",
  "key16": "wVGedrNUMoAqYqC4gzBzsT9zE9m5akQdqRmmmf36pNKQD8m9DsUTo9pX6F44epwx1q9BgxEwBjruNmpvtnms9SD",
  "key17": "2X65Fw5zyHWYRocnpj2P8EC1B1aN1AyD7Yv5ZqGKdZmCAa512MtZTGMNuLU4WGPjrnYbTcr8SYYE8PCfzm5hhEhe",
  "key18": "4NNwRdpo4LKqa4HrAnm7cNzusM1R7HDcytPAVVoS7QqkPWaWW15v7CTMroDkAm8zXbU9Ct6unFMtjKzTTkJMgUYb",
  "key19": "TNoZ3exjFiiinGwBzAd2Nd6sQgKL38EkMtVGDHonGkACskLLMfKaTP3aWhLDT1z79nmmk3YU5j67iHYt7fe4EqR",
  "key20": "4XeRsoP8q6GkCDxkgmigM6XpZVGmfCJAuxwixuPFREnYVSu6K1kCexbj5KhbjYwxDhLWSaLc2hTajbWYTPDeXcCo",
  "key21": "pzFeDEuGca2httAqWxuspvW43AuWXpvWMCTvxffrxqmXD9ztWVybbEKh9rxvprhmsYzPJVdf9AtobdXgdB8cA8o",
  "key22": "2hNTA5xSzsqkfzfYye9yrSVAUVPHCYo4X59ry4QCG8JGUQa1wgumhCcraFTCe5LBK7hPNnGoGtDFXY4kZzWQzz64",
  "key23": "2hQNBECZ8H1iG7GToMKGd5uCcPrkc6aXAf6JHCELjrH9efT5xq9UoJVGaMDiwhbt9J5XbTyJDuqjrgeFFG5ahTXR",
  "key24": "3nn4dWmhhAFUujTAhBGPCiFZa1mjFN8Ed4e5Zkg9CiyQYPgzE73haKPJDMCC1fY9jRF9WqBFrRqmCWSPFZqPELqL",
  "key25": "2F2XktixfsG2c9fTsBFu6LYD5gBd2NgYR8njHnbRYkcoGn3NnF9onQby9W9Syoke3VkgyDCyXqcAGCSL4xGzCFvd",
  "key26": "vXSNeSfm9zP3DHSUs93iJCJoi9A2ELqUW3o6A6fEv1P6xAQdWK5nfXpwiYgof7RNgXaJLcLMdeUhU3nKAGnynwn",
  "key27": "TAVS6c3JZgsMoHDtqw7AqRGBP8zRfGMf6NcipKAqXac9DrH6jwXCGNxqn4rCA3Zxj78cLiu77odoXEsPYobRWyj",
  "key28": "3RwbpG5Yq6detaBKUSzs8NGWMN8gxNZNzLPuueUmuoSFL7rNkPgNZ9xZEMuPJU3fRPN1FNPzHriLxH6TMhinh3Au",
  "key29": "2wXkftrYDVmK6zGrg2cErK7eaFgjTSiGsF9FHVj2giCbVNHLtbs5AhgWSL5DvVoRLqn7KVHrJVUVjuM8QTYC484i",
  "key30": "2Tra75dYLELvy4pxjdmwJDSqy7qECH9v3skKka1MMyG1EsMUBkoa3PyPWvwniU4z9r3seyKsoTv3MKGzsYCuZ6zy",
  "key31": "4y2GMNeAUb2CnJx6JabSvZdxFHKBMSQftp55peSqJ67W8JuAPSvcgSZKn5nptz7pWjcwNaKpozHWnmBYATc6zfJv",
  "key32": "4CRfym94nLh3wNMbCCwwAs8uJC75xz5Mah4DjmwJSkSGhjGzMYFeNMwNTSKxGqQNNTChtu29cfXh5isGKMD7jMZA",
  "key33": "5Sy3neRHdgpbFJi4EGmWGpN41JTzhG5ACESkYv8qMtqWm9Wwu2a5PfKyYe1h7QUazNzDaBuRkizixm3yjBzn1M9E",
  "key34": "31ZtA9Tks9st6SFwFtNFzbrkj9CkeJoQ3ME5oh5p37QLhtt7CtHa3iU62mCcemR3eCERRLN4K4qGn9ix26FvFDDo",
  "key35": "t52T5wPYaKgCt3fm1jkutQwuhbhAQAQ3X9fVWELAZMbCsaTfg2XZDvoBuE4rZmw1YcqEpPnWHNaqwVi8Usqbq3H",
  "key36": "4nLiLXtmujoyZQ6kA6TjtLRpFcgGKsCoCdqz2GNjvQxDdPLn5UHb9JpLkXveEikaQeybtuC2f6okdUFQSAYQhHLJ",
  "key37": "3azTzMQveeDe6R4K9zWFdoY4Jxqczjs5FkaTywMCEs8QyHNrCy9bsc6uvY2Rm5cGJujhoRMExWtakdUeVeAmsUQc",
  "key38": "584CUvUdagNrEqwkZUL1jhp5zyZMCb6aKDeRsZek2pXumCLSd4WcJXarDWT99FkdPrtxUBnfHmUCxtbH27cN8R5x",
  "key39": "3YDmDMhq3ArZU4DFYigZm1rGzngzhAvYN6yaZuADcURXAvwF8Znp9Gw6bNNH3y3QK2JhtquR784hBei6RuJBEyH9",
  "key40": "zDC1AaFwpbREwTUixKSipVR1eaZj42FapuYXhzGWdJiFwpb7WXV4iPyTY7Q5sfyZ1Vot83MbwMQVec2HxnWHxyn",
  "key41": "RDC9GQ62kHm76Q5k9QfU83sraQ3WpGeocMjXay5PodudgMZh5pXK9LGv638GmTavv9okUkkJojaVQ3nc1rvfGCT",
  "key42": "4CYQzvJZVqpoZpmsyXHhd7LcGQxRz3EamLzNibdDx5NUGm1zpSK2ApNDbYYiS1W6tJ2Bj3pCta9nKo5ReEHBLEar",
  "key43": "5VJEZQPCESivHAkVwfw9VPfzAYF9vkiSwVpVp1g4rJMqmoKAAGAkQBDx1otxAdb2Uhj67wFLVDf6fDAaMQYT7SY6",
  "key44": "2rYmxhDwPSeZjk2CoZVcv9f571ESZN3Vha5BaYUD1Pb24esCLZJkxsMwTFRsJTYgMVmFqhcvt3u8W2VHfePyUXyo",
  "key45": "5651kWnFNDpsur1ig5r1mkDMiKf8bfrrCmHZyoVzQiVTQN9FPTMpWJnEzfrEnWCeTZU2ZYDw5EW9DqgeSesfDT9X",
  "key46": "3HRDXdTq8A8fn1vr5zksTgHDfmhufzDQQPSrPJakQRERVwvBsgx2Gk8rC3cYWriQ99KjdqbW8JqkUbyD9BZLeVU5",
  "key47": "4NvuJfuGSthQgKCePCQbSv7pAQXYQZpV4YowtL5bazmfAq3xyQ3ugfSq33bPZq98VbxmmUv7T6hNCJvK7UnDBFjB",
  "key48": "4Eus11zHYKxB3LPqgRyZRPTMVtGkmtigmroBQQQ8LwpeXTu5M9cHC6vnnXXBT336du7ePpLWSr5jknfSEqMZPCPr"
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
