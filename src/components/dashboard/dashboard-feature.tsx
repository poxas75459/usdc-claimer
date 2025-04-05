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
    "5EonUoakgYdJJanBvMip4yKJwTJ2fKcEwvMPiUUnoKtPAYxZYpLM8hnTokhx5brxA5uEBycNmHqaqEDT8XTEwwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PavWaX6p69WeLwwSmBwgnSfhifSeRp2s7q5eHfujwxPiGNNZ6xuGA6SeTKfz7xqbrWN7vMfRPM8ePXTisueDUR3",
  "key1": "4AAbCR837oAdmtfBqt872Nq3QZtteph7brxEQeNKU96wcYmypCRYw2wDHq9jHG1DxfQoLMEndA8tkFQ32Hhu3Qi5",
  "key2": "4QSqKd13zbUmEREtD3vobLyAbMhGQHbTyhAHnYyE8rGrBfJtDMzj1Yqhp83ygP9gbEAbDk3Ued8dNkwWXAVDxmS4",
  "key3": "5teYWZwNAdHY6tJd4Kvvg8pMTdQUFA2RgWBd4WGmvtiAToiii9aTHtGz4sDvi24KkoqNZ3MZBvPGYthx6qakqKCq",
  "key4": "4efiBS6YGcG99H63AnbrsLiyAx1Exj4K3ZaLAgDBEPdVHDH6MA7snLB7ss6qmaABhqvyWFrPuYN1iXo781xa4aBW",
  "key5": "3uzdp5CU4pkwCm1RxgPZp1Z4UKgydJVVraD5jxzNX5bZqSCTEk4hf4yVmLuxKziZhnWq3ERMSqLuQz23EZxyHs6n",
  "key6": "mDCkjNGUXZjc3mxjFdhvgW9JB4BJgz3dAEdv1nKJjH1Md79jF8DzaSkWVnjXvc7WmsFfAdux3SVNuR7pUi9UpHw",
  "key7": "5KthQiGhRsA9NUmWYKGre2vbJfkZqKchDVgRyE7gpD3ap3pxbdV4cfvVoh6jaYFebD1C6oukbNJg1pctYx7RAEqh",
  "key8": "2bESw8FBS86ziv1LYBbF3b2Hm8oE9n3xWqfMeahVm23DrTKSfMYuXa5p7bAYxTzY87i9bE99ymgZmgDC5MVWLpkQ",
  "key9": "5Gekm9UeTpWgygNpgSHqSm4R72okcvAU1ygcjTsR4tNQDNKQ3bejg2cQJv4ATKG8wmLiaJVS5RRchggow6hNHb24",
  "key10": "5ceR5qjYLKYZPN7YzCWFEgMjrbTd1iP87higq2ZuygPyjkJBvCHEsw6m3hFTZkhEUWJM9ULU87sP54RD9zmSfZ7Y",
  "key11": "5s8Mg3ZLjVgp4vfDnuVRLy1mFHPjpyNau5azj7Bh5A84snVWpWowMRrASSe7zE65gPVkDR75xdfZV2qgwfNZ1xkU",
  "key12": "XgMuogeKzZhVym3nK5TA5Xgr5roQTvCe7zDvY3QR5b7ZtctLmZhUwEiugNhPrAV6D4kmJgNqsRBoLdECXvVdZvs",
  "key13": "3TTtt6gkEMuN1aQFX9RHkCbWqTxqh7xopzTmTS2vZweq2iAqqkdMvnk5tVopCmqdVKxP4LVnbCj3isPE8sXqzsH4",
  "key14": "M5VQLHxJTsg4Qg9m68o7AU6RcEmXNzfuU6iETLpFA56hhnt56HFMETHwRig5kAERovuJQHCuWyzeLpoic8j8Cks",
  "key15": "2mc2B2vhbYC1cVZC6KJcg6AZ7xyhZvSurAJCt1wWyKTUjgvAkRkd9ty8v8t7YQBR8HikaxhVGT6EcsCX6nVmccoo",
  "key16": "AnKrpjuU6MUvutxEwuxEi1UzVv1Gbhuika9AF3Q8WkyemW7AtthnBoqgos6ymSmvmQsSnBpc3hy1tbBGG5s6Wz3",
  "key17": "2UftVa4nywVGF61jz6AXypig2MieJ8QoWD2CSpMRrx7gyJF3QTce4GMUJqRFmXkf2eJ65J1EYp4s3P6iWvGSPhsD",
  "key18": "z9MJazqakBgi7RcP6vWanUoFUXQSULEYzUqM3FB2wrxv4QHC4HeqvXV1gBuuB2j1q3p2yDKZz9BGZ2jUYchASF4",
  "key19": "4p9c1X9tmnmzpZW1qiUZxsrgjJtzt5VT9r4ZsY15Yd6j71HeqaCzH9GHbBVvK5dkkVdcEsAzYrzcHaJaghbiRJmD",
  "key20": "41XibsgnpopcJcvDswEJzNV2d7SFR8BBM3y3Hd8htjsbRroY9MEAL67tJLUdEm3yTiJNKhru4jgfUeqT3nAwUsTm",
  "key21": "hvofNwt442gTPWovSrCA6gtkM7u5dFs6d5t2S4GqUzb9kyyUUREeCBD32gEjDC1e7mAMjRDU7JoTfJcTe96CkFY",
  "key22": "3uVYM6YhuaG12rzpXy4Y8JjPQe23HoKNSGh32BGd7AHJrkomU8Qj4g5L4z6FxskVjokuA5sXTEFt7UZghVKDsMjC",
  "key23": "3rZPvy6ej8nhiWQVJ8YgZofy1gQFft8dmrWBcyT1JU6iTcWL5VquqfdJBdcfqafqpwaBYMTv6caBj8mM68FWnmQ7",
  "key24": "25TALqPkdC7LJR7ubJdSHYvqKw3RimvJ5RnNXcoAhNuNL4P3XYndnYsB8ssFAjLL28nGFqzP7fhViWoBN637U5vq",
  "key25": "2pmCcrcfK8rJ4UDZ96hjivWRuvk1Yg12cV3dcHPUstiaNGTZ89dij8uNg96LMa5s7AX1zWMyn7286UHLDGMbLKCH",
  "key26": "3MMqURJSYJLm6uAA2r6quy9M712t29mnxjotUcTEWtmEJvLEDsPCNLZAaYwWChL8wF8FePwr5zdPix5DJ39LMGEy",
  "key27": "3xKYr4xiTLNwf7nG3JEUe5knzU9WS9UYW8h8gMBaPu7FeDDrqzqu7YQLJ6RpUiGDgfvoCFiJeuZzS6UwjsM4ViWV",
  "key28": "3c5rzvKGzrRRF9LMRmtz69YdEEL6AynMuPreWkJfkQPwtjbgJ4f5SJKq3iqszzbVUtUpYNysSHmphbGxWHn9Xcgh",
  "key29": "5QmTKdbgJ3KjUtMFMskpUEvL7dauxY7MyG6181NgUBoTjZUDVDdaUB8jL3m4cWTxVW2AAivmPBYxadbEYyAQH5D",
  "key30": "65DcQwCRRDbvDsiH4az5q6kVHjmMb3Gqo2Z7CrVyqvbrM5mv5vufSGbBdy3ZYbyfud7DTW3Pnd6ZznkVcVXSTpeL",
  "key31": "5fqFVHMfyGQYBn9hUboqnt1GnpNk4p8ZRJq5VZhCHvTf45Pr9JtN8xsyUJAne67RgrD7BmUYU6N6BmMybcZMuzTz",
  "key32": "5Ka5ZehYi6DvTEhMqb5JYmyB8Jn1EwZQox9Y2F5YCr7cad3p44req1mPzjZgB7QKNg9oBCpNwpRqPNz6DzAZKp1i",
  "key33": "3GvcbbMf6ZajcChLXAbMYGo5uXL1Pwgts7GpAgAuKkmkWXu2uG85AAhN6iC2SYCgrqCounkSsCELQ7Yw3yRXMv4L",
  "key34": "822gudq88cRcQonamiP3vFs7dHRq8ufe6jXnjMz8oAJwfZdp3dQEBcvscNMC1Vjcq42gd3osYoQTgZ38rcXvWWg",
  "key35": "2UN6fdyNUyYqu7Sz3s7tcVTMhnhpqGS2RbfYxSzUEbpRwbiDTaUa3sYhMFjE1ZR6rvRbQ3fWJwRWRz5EGihpE4cL",
  "key36": "3kQ2RpdgXqu1uaQ5MJgu7NwogEtJy7hk41aMjPfmP8vpVDBfGCozpUTWwayre8ipfeg3HjqhmaLPqZedYMe1iYeH",
  "key37": "TzmHDMYR9LHcU4Shrfkjgin4a5jjatbrtxuLkBB6TXtJhxGobQA9NxGRtXbtQZSidSYV4mDx2bmnCK7asNzGBN9",
  "key38": "5nm3G99RQDRNpXZznkEB5mvqWNMsLS9voxDX9U7yVC39E5AbkRouutvqTbHTF18Ecfc5C2WK5sNo5QuNNYXnPJ7Y",
  "key39": "5ZKkzf5gxqXYRGyCTigezVJrVBNywnnEPt5ejsTELrzuiobyniD1B5BEj1R4PUsTNAkZfRJCSHMme3Dg7MUpCvyA",
  "key40": "5jpzSUpBEoMfQ46zJcbY9ie1M8GThdySLsYDurGnFjRhV4kmHg3DzADA1nWpaQKWAaXGXLtcdWoAPtGnbjMY2xqq",
  "key41": "2idNFvbQW2qAqCM5czYgyWG4Qjv6eaiSSK3ob9LbxyLkX5NoRA8843HH3YrNmwyoGcwPPGWL2YNtBqMLF1ks5KBX",
  "key42": "3GYKTa94TypEuMrERxUZraVosNxq3JAo4q43KyGqhYcmyaX8cscy6TyiWog8CqaqV6EXBHUz7JKPSdYcFsuofmcN",
  "key43": "JEbQyxvuxrVRbeV6nDJodGVq4cfJWF9EEMA6bgxnCZVE4s7jLz2WtgoDFBNEMFvDTqeAmc5wy4ePkENiySuEp3r",
  "key44": "3rUkLrhdo4G5Kqowr9XjcKhWAVBxSZAwGFxAJhqHBQ3iyUPdTNgi41feanX5JNeNyCz5y8DhyyMMDpLsMqUB1uHT",
  "key45": "4VoCqbT4zwzYwbKyQSMeJGtxKmXMzKPAorVdq85bxgk8ZrBxhBJiqyWNwYzHCgKSnumrsztqQijyp5jhRKkuuMLQ",
  "key46": "4jq9f5J3KRwGmRJtAtGiMb3L8diDUHTmbSihdo5HoYtLJQsUaMXJP6fneL8vPFnEj3pGPRM2qWPqFR6JffTgRhxw",
  "key47": "3QesJak4EaDxBX4MzDEjxKUvYfuhu4uZJZex9ubhWaRKsSxykQuPZn792Cp5EmFtrnqyhNY42zrU4RFnF5SvCNsn",
  "key48": "TqCxC4bvStZ9AeGwoSxn57bXHoEhCAFzRitQWcrSprLVB62H1xPTFvM5vd7hd4iVEpQCJZnVje1AWgSPYCfYhiq",
  "key49": "tKusEfrzo4xUAifqzsnkFC4TYwuwypc5p5W5cR1DaaaoieUuqnLja16AnM9EubHQawXfN1LCnrbqEGvzUWZ73pX"
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
