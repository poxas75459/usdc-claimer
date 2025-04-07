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
    "5hjeVURpSRDhbk2X5DafuGjo2tc53Xaxv2EExJ8pgbZaWdkt3eCz36HCnCdMcqnRARH7GXxXsVX8aYSKKXHHDRqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejo2bVAPXGi2e5NC9ymsfRhcJscSD93VZsBSqezqTouhZ56VbpZpSuXv5DwfFg1HUjEgT681HXAW3guxxbQ2YGF",
  "key1": "2MHrab2RP1wM1cFmkDFx3TCUXxutYKhvdAoTTtnDo6XfqkSo3jTceRgzsb9cvKpBwEe2bPNPpBnZ7fBA8AexxREY",
  "key2": "4tJCAyFuvUVHPZNMkTwWTUsFqFLdzm5TpCeVJMsqE4yUSSc3kMEm8dj8Z84CvgZNsHeKspPyfv3Thz5mFUWQEv2f",
  "key3": "5cNMEad7xYchJMF6y2wFu3NeT1FiSRLRyFQ2iXPkRdK6DJxFp9VTyMVBsLkAyR8yfqdFnLXpQomrhdcu7Z3p6sAk",
  "key4": "4AwMbxsLHvEMbkBkvzo6LxWvVeH6JWR4bKFZohdWzAqjV4aexAmteMV3Uwto2psrVk6wiVcUcakj1YMgiw6DZTe4",
  "key5": "2cvubqqZS2yLfn94BuTe5DEqjJVMLBMCSJcAexC9a99rbFw2bjiWyhbxm3aMHiXRF7SFvdoeN988aiP2DUaE8GND",
  "key6": "2w7nEJGmmTVr5JStfHGqvkCBBjExSUe6bc4miSsqUcBGW8NMQv4NKwc2aE37E7hRQxccPAMxmPnmQtF4Y7ZBJpDx",
  "key7": "4RjJ8UC7Q9tw8b8Ae5VEPpFnwZyfDyULwyQx1QpFKU8uDHajtMQeGGYVpcMaWd3zyHKLx3yAGDHzqMua8NuBR42i",
  "key8": "43meEQbYGYEChqhkWboZYAc3nEAfJdqazRDXm1RNLbQShV4KaXhehrFnukDMLENcVZVLysQ12TeUEn7jVWYNcuwx",
  "key9": "5Kevs4frNG3FWzGsHKVJMLoCtmQGSgHmDrZAdGMZqGmPbdA9P4wzNJYuBMutUTfDqwHkLEwrzt2MBTMCuX72aDTx",
  "key10": "2ehTBzfKEC51MyKMh2rkDE1JcPUVcPkTaEWx3LCxR31f9g5Hf7mV2ykUURA4AbewQZHkcUPeLNE12rEjSFmi44s6",
  "key11": "4LqroPJsG9ETrvtx4WuozRLq7wbDP5zfxHyoM4YCMZLp8vtBdDhdqJx5e4aSzYvpnkDDz5Yw4oSc7xYToUpa7Dn9",
  "key12": "3s3JsxiC3FXLkf3yqJCgACMckPKCei9iyTijnoPDxUP4fYDnSU5B2CsbbRAzHwfcXAT8xazYwmRQ746DxwiizcSk",
  "key13": "4j4Qb4VFYJDNBbWqPYsires1Jm8gwueegGd8soRt7pyCjyJi9PzZNbiLVrbTHGhGBkBnLqMm1E3GCzr2u2Cs5Rsp",
  "key14": "5bdKis3yrDPfaKsbc3mcdL41XgXKduFzkboAmyhbWw7seBAWDN7wdMzLDLffQoS6RPVuNexy7Bi3Y125uAsZa8fN",
  "key15": "42SF8tgoGyS1DgZRDQnEkjox1njXFMaCarTRFpq4C4DziJoe9k4fV4fzKmazDAMvrbfkgiUKjZBHGVEHcaXoT8cg",
  "key16": "3jCYFEdfNsjDPQm3Bm6ghFKV8hs5mcBfiP9Q1Se8Bs1fMiJGf42gbCXm57Vvic6SQ4xoTvgNjXbG2ajFyxsReNpJ",
  "key17": "28LKbThoioe9UwRfHkB2BpRxq7kgJwbCxb7MtaDWV5RRqvAnurKNAvoAk3FpQsNfd21eF1JpTPC84QH47pUuj9aU",
  "key18": "3ZkoMapnRdenKYfU8Ldy51sD99QVAHPbtWFhuraaFdN2K4huQsJYTXn6rjjdEoUPNEVVX44giW49toBz5DY6qz8c",
  "key19": "4vhVM4BsXN3LjLvV6J1DK6kLWTWwYCnAcihXC6wczmaq2KVQiQDnwXRz5CbHtXEiABPmGEEMjEgLrGBQoURifmF5",
  "key20": "5WUoUNh7Buxr3dZNYueywfBCP2d614QvuFcPZPGbe7HCKFe5GL1wwsPcmWQZXbSmpLvn2arUFAjj3bDga1n82p9w",
  "key21": "2pNtaCVwWxp8ZPQoXYiBogHMzHBuUDu4Xebxpu2QDRG3d7py7GnKMnudpU9QSJDqPAGTYZMWxwtiXSMUmi7VfcGn",
  "key22": "4u7M6aUoMmwTZTJm4EBcWokqJypC9A8yQPSWN3wZ97ySUK46dQsN2DDTbDUpLhTMMtb8UQUe8QFNS6s38UcRNUPq",
  "key23": "2A5D1gpiz4pDgxeGdW6LohhjMCEWtyo1Y35HJReLFZTNk5dut45x9ftBTkMmWkT2ZksXHGdJ66kzq7vG4RLUGCJf",
  "key24": "4vPpw57FfhSDP5ZA2FtwCpYBrtL9YeCt1oFY8fWMAmPhZzqJ1V54yvrAktjA3KxJAT25C7rKev8hVSfnnfRWXEAT",
  "key25": "36CdCQs8DbEFbd2ErEaqkjFD1tMH2zEmnTTzbnvDUppRW4k7RbwbdzSDwuJK5TqKHtde4Jzsg1ZWvyw37zQnp7bz",
  "key26": "3cqJ2WgkcWYe1oDrGuLqjvP38JTycimCokjVDjPhN2zovo9eg2MRjYGDZpXv8mmhHwvCEn6h6Z8UJgRFC2BCfcT2",
  "key27": "5goxZAyRtwWd8LnWtKfVFru1fQ3S5WyP3KNW8THRDcc7GxxeBzrEmpebUeQjw1us5tzL4VP1PavcqKYRE8q9gZ9x",
  "key28": "2ouo4NQJyoNvq1kUk3Q9FjgFVdkEbRDhQWzVvh3cYfhMw8Yowm7N1M5JJMkcYHeDxL5oTxsP5HWVtC91zpdJ53bC",
  "key29": "9Ffpw4KsaxjATzEYNZHhmySzPaE5aNcM3tocBPqkmKjwzRWNEk2cz8XN4BBiNKfTUUtZFygWXnpqnP15D91yDiz",
  "key30": "28r8t5LjCdEYdNgSnLkSNJg7hcAAXku9x9QMaFMmf5qBTZKHYWcFrzQUamFc4tjnF4q5d4rAoWTfd3YCCNyCF6n1",
  "key31": "2DxbpR319CrLmp6Hyt4GnbKyvaPf5LGjxjCFC7amwn1bTG8kW8a94fv8ww1DcMuWvoeSqBLcE84J6vQKNzESBoLK",
  "key32": "329kH3ht6mDC9T5D5eQcCM9pzGfapkhgs56148koXeAHJWFyjJBu4EKMqMpY1uSx1TsM8XJJ8n4o8dHTNnFLztAY",
  "key33": "zTVhACx77MVZuvgEh8v5ocVe9EhvbwPnRA3ojPhaMPTp2Y2Sc8Cb3UpT1cVua4fhtgQ6EY5uSahGuqd9rirPt6i",
  "key34": "5yYTzHkUstAhvHiTiSxHZaiCVCyjN9ctzyq2FNQPx4Yq2iWcthXpo8xDkKve6cNu9BJrbjcBCv63VCkCvqYagZE2",
  "key35": "BkRVbSJLCh44VQ42hz391Kac8ecFMh7PNnx6CwvZKC9ek2ym6hPxWKdtPVB5cQyLgVCAYB3rwXfGPzJDehfqebf",
  "key36": "3xEbUGpFdixhvCGVHrVbgKCQHYZQk5MpkCcMQe2XyH1LRGiKoz5aaN4JHuiCRQTHWKcv3RcjZ5YW37U8apdKeG8C",
  "key37": "3vXgpxVYQ25L2sPfZLuDxQsSd6DrqrL4XDVXESUYoM9L9pbKy8Bvfkt5FT5z4ftuD87qNRmi3FnyMP4pN69a8Sva",
  "key38": "sNrSBDFLZAADUv2ivAZQ3BS5jByD8pNEUqo4rTZZCUWYQ2iYXwXnFKLtjMBLnx35fkcfKLQf5P2Z2qd9wVpXZEM",
  "key39": "3K71E2Bcbm3VdRcq8gE3iGt7eALCqjzRvuEwq7z1oxAh2hevCekur1r6wLty2aL3SSeV6o35erq5iCeYyA4QBQ4M",
  "key40": "2jSZLdCVuKyTT7Md6UaktExoFLoThJuDRFYLVx1TMJRrSRdJMswgRbu6JU4RnvaJXXKJcLUeigKaYx6jwfSD9qxs",
  "key41": "4Zw3CNLtnw5QGLDiRkCgRdV3aLsgieTcz2ebxGFgbcDQKRryDeX7KKkCUzKtgT3zhLpqxEtFek687312mBDTmZvH",
  "key42": "4EPaCaiKqY5cUpFeFe4UDuAmCYSE6GcVJmd1EL4zoz6Z7ndDkq6AgJGNA9mxn4pKUKGacvK4UVcbNLM7Ee3jQ4AR",
  "key43": "4DXicDAnQTGsoAfWKHc2xe8nc9UB9wFoRnpYjGHbGeqmmRt9TmHYVmqVTyNBwv6WKyT2znC94mk3RaHvpjtiascX"
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
