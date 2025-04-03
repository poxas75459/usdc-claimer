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
    "HkUtX7ZcX4rtgkHyeCL7vB8ZnkAJciPWxaAVDgi9JsdhQ7ptanS2Pu1XKQE1vRMKa4ny268CV8TXVJ58deRvWbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z4d3SD4i9XssqKNV3TjBjetP2K5BYVpHqCLXUrVB46gVtzWuU6hX2xMZEZPa9ZW75jw5n6Laos8FQJFLfEZE7z",
  "key1": "3upKUJo5CxebVCiaKuyanhXX1Y46tznHx9LwxEWQqeBQ1AAkMWZvMiwbJEQVbCbWurRQGdCpMj6ctqWqExJUTedd",
  "key2": "29fvTAaucLk7iyoheXuA2wMnioHDo35UWRn7KpJwFcCA3WdpqpzmBEMy5hF7KpTtPoSrXDzHPZhgNukPkAPeiQpx",
  "key3": "3wXSkVUCFY4KDC1sKiJWW582Ffk8AUTia9w2oZ8pD6akAwHmTArEHCf81Ut7pmeK2i7VQHDszryaFNWyKyG8w8mX",
  "key4": "3z1JfKqumHUXEJKZTLkGWa38CnFgupT3MovheoxYacTSKDAeHfW6XK1PpNiPBFaQS9441czw3Da8CQXi6YYYVWfj",
  "key5": "5Mpv4JiSiS97MYeNSnBqn2QaZoGuhceBEiktamS8rkoZQ8q5WktRP26XCxiivZoaCJAAScGXf98ksT6fTC7tYbHp",
  "key6": "63E71Px8HwwfxwsaqV8PrE1KuET5esrNPa1PEidwaFz9ZxR8r8cwW9CXe6pxhA4NRkNa8CY1dMZuv5V64BuNtz7k",
  "key7": "EcgJjicfDydQBzqJp9zk8zDLAFfPeG9hCfF36W6bdGFJxP1fqwY9JqdqB79kKwsAyxomoxt9fj8nBEFiX99idAs",
  "key8": "22oU2MEdPjjShR7cYM15FcVisXfdfDhSZf6DxTp1DDMr6Cmg9hpTjnEvfeGpnBKib3foHTtrM2H5e1SkmyrJrQix",
  "key9": "2uNbH2Bv5D78m2fBLpntLJFeM7sLWzq5asJMBKXKMsBBcH44p1hTj5fBnFoWS1Seri5iR63JF9yhtxqfTLCSX4iE",
  "key10": "2eesb5L2PXSZyHAZuezBGQF13WWBjjKQeWsReezUUSSDW9Gmvw3xfYpfenZ4QbdQB2pMJ7p6Z44vrU1B4zt5B1Sy",
  "key11": "5hchxSHznht2hSRQwb1Q5o1nWtPQD2DJ9ZXH5nkHm4TVXDNMsxuAFzpK4P9jw6JHaPm7Y93hVPJfXY4PmX7VmF9P",
  "key12": "uiCmAu8UmXGq88z4EYgdQHtgYQAuAU5dqiu9p8NvdSaBBuKu2hr4iG9gXrDpsJDncZEL5hBiZQ1DkPx9zcWmCZC",
  "key13": "3GJrSHuVH1NRWuwhMcJauz1j7Uypnwp7m39JCYYVgipijM7gsoxwudFStgmN1QvDK6yt6Yqz47gWGWb2Z9jjWPjX",
  "key14": "5Cv8i2ZieYJ6qHtFshLj8ZGpjM45xUZHUYnEmQEUaSbLEZZ3D7Y3XmeFkjhJyRXBJyxRFSzTm5VXHN8E4mHqwJwh",
  "key15": "647brwhxSaLsiKiyXG5YXAruNmxoh9B8LUepwRMxfbAqNmbPMeC1es1JrwYWfvHfqH5tCT914owXeA45nP1dCFCV",
  "key16": "2nJ4xfP1tFFmS5yBcvPsvXMQJcrQANncpZ1MpwZ1vLAWjwcVbCsRp38wrr8nG49VjWD52vXgNXYcqRDVRaMKXSxw",
  "key17": "2SQKEidstiHHnX7j6C8cGPiBeCpEdu3zgve6XHVRs8Nrx5NqP4kgiF5Wx8zVbo9dFP37AzGGjpLif5xJToFUgTJk",
  "key18": "57txuCedjzfrjSisw58KNPWyxdnxfWS7nJ7k7kMjPWSdBeTKk8dfnFkRQCRgNZBB16wzmjwUFfYg99UH5BKieyZ2",
  "key19": "3Yv1ZqcdR7A8yE6LhiTtEgCPiv7ie1b4VDro8iBbZzFEwCGn7PaXZ9LopH3PQKt2bEbcrJ4ALuAYhfqWkfF3ngyB",
  "key20": "bdYmWHPVtHe3Ah6zzZLJAXMZ7FubocPZGa5Dv9xn5UB66NRPEX8Tp97o7Su8RuQVDrXRFZMypVCgU1PMuVPhyKa",
  "key21": "3gUFgNMJG83m6sCoyB6zLWNMgNR7fCZCo9LoWsNYyFx1r4PP7pnaM4Aoayh4zTQAXUZ8XTvVHLSUPdbkAYUT7A2d",
  "key22": "3QLJP2McpNMyfxnsNWcKmGcVmcBJvFm1EYcr8x5YxtCjRWyWwBUGBHmXd9AERSqiSLuPK85nwXoLiohQxQXh6NUA",
  "key23": "rh6YzT8BzoZpgqXtmwKC94zpCLq5NUCV7RBSVKJu7ryYTva5t8ixHCWm3pCP7JXjHUsQf4muge3Y8GfpVVp1xCg",
  "key24": "5iQqQZsyMnmD6wpxmpBNM391SiPwUhXLBqXXwXLtnpNR8DcWNib2vutqBMU7muekoT2FFcUc8bLeToYAeRVkLwJe",
  "key25": "3bEuDEuHmwrRaWtAtHkcuo1UHmFmYRxgCWr1wXzjTVxEuNoVawFN5p7Hgcq3YjGj83KDYMjTQAd3rgE8Ndx6AhCW",
  "key26": "4eWFMXmwSGQ93bMCM1EhbHf4HqJyapm1rrYzuehhQ7xc18yWqPH7FNFEie3L4zvSMHTEwEQ3R45gg7xQbDcnce9D",
  "key27": "5aGLm7n8nbCkqbncTq9UCTYYTt2qb1KuGz9X4y9BRyAizjJLoHHNAU3C7b1S5xB2Sc1Yphr25sTFUrBJX8TZtjhQ",
  "key28": "4PmPA7wzhCTGuL4Yu5hisnV1Cj8eqskPoyuQWT82ZEXcumUrPEon9qnjoXp86suCpbEt9jnaFjE8QtzRVUQrxENq",
  "key29": "4BSb2oNVHrnC9kVFSNbtm4pZD3rcXk2xcxhDUU4rfQG9EmbL9ihLNUyZXYMHHkUmSmkWh2BkWmdd4sfK93zB9Nk",
  "key30": "2qBLS4yzx6fXthxgRCpxR88QQXvTuYt5rQoZPvmiS5nszePdNvKNddfsfHVP2oAREioxteLY1TcWYzHuYRy2tBTf",
  "key31": "3Mz1zhJSCzfNuWU3DkwwKg2rMqJQQQMiPWrBSW4s6eCkNHtgB4Z3rW8Kd3QhGsMJGJrwzRPRyjii9FXFsQiWW3km",
  "key32": "7wpv5WU3VZV9s9FNkv8Fccu2EuqNHBtBdt7aA98UfhtAt6FPWKVT76LbgS3nH4P8qo7YkVZovZ56gH6neoWMaiT",
  "key33": "2mnJrnsEdiNHbs5ru7zgNWzzhscqGNBy3DytCDSdm6VKxtQ3XSkBz5ZVg6kfn8hv4QmnB6m96XYtLPHuykdmf74q"
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
