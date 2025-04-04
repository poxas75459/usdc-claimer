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
    "38x12x87vR6dpfay3pYeuriR7XtzxmKUhqTRyXT2jGXTDL1mhvNjikgjXUvoATirCuoRHH74cuwHw2a5AXWXP8x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sRXcUTon9qXau9FmywFFBU4kqXFgapP4jtpBuiqhiA1Xb8fmyNHoD6Fspa9NuGmacW4tQbmqrbJB7TqRywQdskU",
  "key1": "5Fvmb8sxN22fqpaeXmdmQuLCWm8jSU8rgW9pRUxNsgpBaYAs3MSFToMw4x8komjUuUEdDHQsy7wAxPQor4cU2jQK",
  "key2": "5j7MwkbvT1eRmZLqGhjZ2pxkv6aR1xbcoY6XXxRKkQYc92hBUVoAQCGnTZwzi7r1P172RKy1VZVjgq9TY7xkPECa",
  "key3": "5acpSF1v26jthikzgB4q4G4hu2d4AEizQQKyZ9La4QZ9zJSNXqXTD3d6gt3rjVU1Rv8CCyWUBXgv3NoedNSmzeC7",
  "key4": "QPqZHeFsaJuMBVYrShPiB7ujovabYJQdzSieR2JiDkFSbaMUjSXqLAm9VZwHNoarj7qsXGakRtc6vauBU2DSH4V",
  "key5": "Cp9zzzdMUZ4B1a7iC1R5hwkTsfhaY2NUwGBiPSrd1yovaWSFndWzXCC2dSiD1tVMLGh1zgbrQ8NjgkMfCZciLLF",
  "key6": "uaJLQyTKmwNpPPP8io2R3vGkrdjYDPYFDZgHi8aBSCLSxvMte7zu6N6zJjAcn2g487frejo1VmgoeBxT7J8rBGg",
  "key7": "2p9bJLWgPib1XkNtxGGPumg1qB7ynivwN35cuZJn426tZvewmvZTw6f37FidR2pY43s7keqshadfNhM22JkVR4fL",
  "key8": "3mWVfgT4GKHWjTJ15TG6gDw3tT9FfKuKyQRF8KjUJink3jFwBmAT95n8VY7cTpNSkreBfXPYP5ePqeZWVmLaq98v",
  "key9": "4NMoBFjLC44iQgeHEGv6KJ48r5WDji552kTmQraCQmUrZaw4uX4ZtfbRSaqhTpmSBWJwqUnRLoWnYbF6cvvMVYmb",
  "key10": "4KXLHXCfXR5LsFj3ygvHoiHm7PYKgXacTUWsvUqyWsh8PPd61WEpjgrpRmTiN62fAuWS3NkjMzN9Nv9S3Z6VPAzR",
  "key11": "4imdp4cphLVwkzHHsZeXYQExJUAzdgDZNmpxHbVPqF1qF2Dkh1CpfVEki9JSKqgWSXFKWjVqA8Eh73WqN4DAQgUH",
  "key12": "2sSJQqnFN9ANBiF3YYJUc4wvXv7bZT2sqPDscvfnYWDaB5xPFu416GC2Nr8BVYvm6CH9qrYfbxYQczAMLNaRtgrd",
  "key13": "PVRsxKizntoMGYgfxe1V3z1Y9LceAZh6HDMcauc2vnwb5LrAB2hDLF22Z6jvMapbSXqCTZ5AdssShn1XHpGY6yc",
  "key14": "44yHz9RMztgfokXLiegQ6UpB3JPrcrrPKyGUHiFdtf2kXDsPAhFdrYzFH6s8W34atgx3HbtrUAc9n2tKoXetcZEt",
  "key15": "SxBVZyBs2Sdy5WHrwcUU2eqhiV3DTGSpM6PWb7VgZatpRRiKmMn28QSjeBP97mTzCsYAC8QjC4BHAuFQWoFtgCn",
  "key16": "2vxxYFfRGU24Va7yYLksYxcsYJPY92X8t6nu8KxhMH7sauQuTNpDZbvVdkPDufmSyvoq4LU2HWbkq9CXpUgDXXex",
  "key17": "4byWzeCXZzzCR6kFJYMtyRb6TArZdnXYe1FNkRL2QmTzA8hr4NrqJUuKjrSabLupLfZguM7JQLrvTkNCeJQQBoEF",
  "key18": "5u2EwizTizSkwfZ5AdLuus6yeTnUeVsY1Nrimfu8vxtt5Zs6BS6fhJBvWdjeK333Sq9oA39HMejqqYikxtMmbeNq",
  "key19": "4SEW5JzNmDS6jQbDwxgToXsfQZ2V9i65wr5ebwpnfRYgNrjL884FdEEvcSKbv59pRHS4mVm9mh39XDkhsV3eQ5VF",
  "key20": "3qF9WYB62LyFv1jnJ8jVpBLc3EuuNcHGrd4LMDqPKVnfv75g14jcL6Vmua3K1WGEN52cCF2vuF8KZFRecBZx1Hoc",
  "key21": "4qZjbxGocm2xV4e9v9r8kjcJqbzKgrchsbAG29UQS6B4RX3D7dLuN5AULTsJKrnwgnS3xBp7FyogVVXFsbo4HVZw",
  "key22": "fXi6WKajofrN87bxRAXEJiqmjD4dHdAdqc7dkTsLektDyVFi9QKW3FEUvztP5qMGpgbkatbZY3u1pycjgjnbx9R",
  "key23": "2sRmLaRViVuXCXzuS67S1sEwrVs1nsJ5WmCCQA4EC862ZngKbvKMK8hqyjMQHcNd8FEtug8hi3BFiQPgTY6Hm8Bz",
  "key24": "3unF1H6r6CUmDKk5wYaqXky5nRPwVJ5yePNHDN18zTAjNXNYzfHVwhLVrgc53muQKnmwAq3hBYYjCxpC4t2ytxwH",
  "key25": "3mn4yDoRMqxxDHeuqHfUzHpzVcBauKMUNR3p6qxvYQ6C2vbzYiDku8sDSv2BxkHQAMUtmjaQ5D7ugvu4gCV3vr3C",
  "key26": "NpCaNokLJiS5iMAybDCdcpQPct4EKYJHnry94V16ZoJokC8QkwRY11ivfWEfdjLE9LNbU52J2UjyJ4PfPrvkoBq",
  "key27": "21yEmaS5u8KMy84kz2NBdpvFAAFq8isFJo8NdCqiYs4jZUDqq92SHTpWjxk33kHAoajHoLgyyG1mj64jcqnd6tMc",
  "key28": "4UHXMhpvrhbH718LEvCUxGNBetxA8wT6X8iXthDBwzamidZXLc8YhV2BBv13kL7fyEA7H3xCJABDVRmn5giYKhZS",
  "key29": "4fXX9J9dyggDQo98uaup5AM8mNdFiEn7Ncnzkig3GGr7ZMBquHYCJNuFMvEG5v7ba2eFYn4DgM1pkgEPoP4WFZR5",
  "key30": "3pCf3eSJY5RG9qCQEEKDt3ot2umRV6YtqnzZvqrt3dobfiP4xM8FWviNLKAgWNzoXRiy9n8N3dn7PUrKY6viVFGA",
  "key31": "34isR39rLbJ62U9EYR8ndupMcJHaKM9rj7NDXBFPpAjVKAgai7Y3ywETWbkT7xgpNBQ4KZXjbQ8eNzSzU6tuheFY",
  "key32": "3ejMHKUQs5NjDJYaByqQA6iQ5KbqSoM12cMPwMuthCCrePGu7a4ptnabqNqzHy6RAya6Z2o4ouhpkC5VgZ3Gxfov",
  "key33": "2328Mtcgbcy8SyWis19chgJZgCQcZqiypo8m6wrtUexSQjXqDdNgxTVVU7kVTQssGVMha7nMFg2YWQyaK6P1TkoN",
  "key34": "3SyLDPXL1rn3j3SFF7KJH14XC4Ga4885VkGzpFsFbuhE7E9KuunppeYjmK3ri3uAV5teqwpc4benvLozJXEpqo3G",
  "key35": "3ZwZppArGfijkLmWh3MjxiTSt2MeXfnxAA32ze7PegjhqistXYDT3Ym4SKj6oArXu8DnpVhTXMvwVSR9j84to1zk",
  "key36": "5xUJ1jNPGodJH2PYgFUPKaDuM8haZx8eC3EdVkYTKuBZsNYHSETufMqE7z5DbiyWXh1QjfynEBB84hEB7xnT2c6K",
  "key37": "2BzgkRCRPDwkEZZ9hx1LcSQu6F2qJjdG78rC1ndC23TZJPoafrRSmG38kzQD8Xh9mtWqWFZnQtATR2zqVPhCn4ub"
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
