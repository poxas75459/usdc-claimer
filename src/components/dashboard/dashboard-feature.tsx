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
    "4YHqsCmp9KjXtr9LcFw4M7PcBRr2GaLU8L7Ciu6R2QzgkLNQ8KW3qyF2eyAntdaXsHu7vd4YmPVv9fK6z4r3TyYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28M1LqSVfTLZ1QPEsXNcokY953urRJjPMAz76gvaznSt9e4bbXs1QDnF18cbkVLG6o9BSyu2fKvUnZ2sGvESoc8D",
  "key1": "Ey5d59nsAVudS6wYBBA4jL1fpmWqVYrqHfidhAS94kmBWjG3SdPWiHoqQxDoDzTHJWTLVEnrHaDicBNzeraShaR",
  "key2": "3jCp1FWmYhM6Wc7tEnk8ShLmp63TzxzKCBaRBDU6W3FCGsPVfVjjhVmmv2XtoEQ2zrhZDUQRgosoAJUbrc7Nkds8",
  "key3": "3iujQGvjdM3d2Du9gP953RbYZyMtVf76MDvm4uW3GbWT7o2SusudCNrbhrUzeC7Hn9BcGDcBasER5cryXLyFYPeJ",
  "key4": "4CmxAMNEnN6D7PMxAEVHW93zrtFMnZuBKZtS7Jh63MvPR24PNYzVpQiyMDwV6KZdSn4qQQiKHC4CGtQB7vXXwtYG",
  "key5": "29QZW7NhKkx3mySsz2cGfjmEFhtHYbL4b1H3U47YRUXoJLpLMB1MwFhP9L7euoYX9jY2sugcfq5hPMVrSkLCbAsR",
  "key6": "4vo9vtuBdKV5qidoWr5Lq36DRv2as6iKFAsYFSUZa876onkqRqoQPvQqDSAK8G4jsTUjDRGCpkhjdsJtV8tGnbPC",
  "key7": "3gcBAgGipSECHJx6h6C3zAWsQYaUZdSm9U167XKpc2PQpYXqjvdViPetHxKPMA9HPacXfAYPYpvuFdHBTzsZQt4B",
  "key8": "5iGknHRhe6T9js3tG8nUzMsuyeBedzdENpUCfC8y4yBpgsrGbeJD3YNvz3xLyunN7s9gwkLPwmqSHpBWdnj1ZGQp",
  "key9": "3wkQpHT1UWai7JvsbkQ7hLxVsG7aDkVSYJYQ44GrfAdrQAfZKV91fLngfXX3pkUM2opmUekXFt376CDv65ZndrhS",
  "key10": "2TAkhmGG4cSG9JKdwu5yJjDudeuMtHh4uT2m1ekqR7k8QNQFypx9bsnpC9isutcdG1LShELHki34rtLs6iiJeqzD",
  "key11": "3m7ztHunJ1bEMz4VVaPF9izx2xzJY6HpTxJR1H3BcJDUkrBZ6LXdTBTcgEGWHUGcq5uQQo9iRMxiwf6Bui7x6NcU",
  "key12": "2q3FKnGNrwQmmLoy1uY82Tqa9v4B15WT1bS4XHnHXWgAdameaBpVdXtWs27sk3F6TzDSBbukRgATKRUXADrFg9eg",
  "key13": "5d68KLzgHn7SdGfYKjraz3wjhzjMWnDwwTJjFrY32u7HmoJqCfJPHZA2sXcmcUhyvdE7fyeTTuYgzkKe3jiC7h9d",
  "key14": "C4GL5VfbPMTSURz51HtxvMoMfgDDpa8q1AvcUDXgxDneMyLF3AzwVKFgPrN13YiuyC1KVDnizTtWJpg9DpHcp7D",
  "key15": "3ZMgQ4RvkT7Tje4ZbpbPFwXgLVt4jKdzH9nQzPxGnYxxDJNmdova5dGs3MkG5UfDvevnbsn864qrTwzR5B84rMMV",
  "key16": "5TY9MdU8KzaT7srVrSk5DAnm5n9nLZcRPBRfXupKVi3p7uafKQHLrYau49e5Sdq1RaZNvGJEkYXiZjtXNi6L6SpR",
  "key17": "SwZqcFR3kn7JyGpvWAQxTTgPurG4FaQZrcavkWCb4SXMVqypQbeVPpZMm1vTwZb1j277YkgTZ3WjGw76SfKxXxn",
  "key18": "3LJsxsak31W2XGHGPJL73SPGpWQkV9FfZZ7bmojCfELu9Un7j8NovJexoZUkWzDNQk2bppomPAabvZkLv4dGPntR",
  "key19": "sfUuH1HB68uQ9MvCHiV5zSqEHiPagM7KcEcMnidNDq4yStXZ2enWoi6tBpusvjG9QPSVKKTLwT4cqVBeZykJELT",
  "key20": "5rgR29nhCc5WEK8fkWUYRkmSAs3btV6FPZ4EoscWd41sdwXQEdLQ8njFeVGDgTS6wqWP5e2NLpuXph8PmmPeisSL",
  "key21": "4j46Ex5YQoFFysh4k732mHxKJX3LBA913NbJHGdEQTxp36DtpxQNNLdM9CYKiDgRoC9WhiD4WBPPPFdAMXA6p1b3",
  "key22": "CdPGzTVgnKa1ojWmEWPMQkfvLNEJ2VBMCsBfWzMTgb4oNSdJZDyVFL7fEU6KngcWtysdB2foigTGQNVDVqf2dKR",
  "key23": "4Li5hmW7k7toRU9x486vDzVWf3ofppQcz8Rng3LfESicEEDg8La7CPCiKjfyZWtgYATbJ4j32Wa5jypenuUpJ43g",
  "key24": "3Z57GZT8CYwFUAmS2oj9xjJbMGhrAu4diDPHSVtTq3bWD2eRWH4nQSURGnMtjG2ZQLxmm5MARn1jeHovg7Aejbvb",
  "key25": "5BSWxCkZEViXLhR3YMnkzWSCGnxmMr3PtfbGo7yuG4DDtqrXg8EZfqxhhrkDqJ4z2f1416S4YCRpGBRaG5YD9nM4",
  "key26": "cs5JXLEb8r7dsXCnoSASSx6p8Jyc5qiLcicvd2oiTpW6TJjZ3mnodbGPscEqCZzUWabDhiXGnaKwgFvMXcmhtrt",
  "key27": "bvc6g9ZBGHqDFAfy4mUxb4sFZuYbuvApRykTZZh9vSS5VtXFF3sbppSm9fxv4zE49mCJmAAQXoQn31BXvbU2bqt",
  "key28": "3nXkK7Azbr8dbQGpxVkC2jpPsdXr55emUY9sVj1G5ah5ASoD2CG6SrKNf2EartFSrj7e9Tcc1FhanYKM88pP5fjf",
  "key29": "2TdCZsuKpVRYjnk6NS3Z3nyxnEde2QPnC3AG1ZkN22wNRV12qaqP67o9VmeEJ8Jr5f455scRqSeVKxetCgDLnkQ8",
  "key30": "3Fd6wnU8Ju2aC1fKC8zL7rdvTDWzkV9Nn7KHXhhi3cQUh1MnJmBVjZXXA7TusUC97iArbideZsUzHTABzRA7ZnPZ",
  "key31": "2rET79PUZuvre4mZud1ikJnPA7hyVFFs3hZYFWBWeLTgTPdwi2s4mAWDM2rabsaTKpEDR1ewHBNfa16bbotX8UQh",
  "key32": "2xH3XfgNYGJwZhRHkrwwDcZex1TLj6ZqenyEnMQy2Bcd8qqdztfF5NWVox9NuRP498NSiMpB4nb7mptMq3S9zzXm",
  "key33": "63UTMxq1LK5NECeTfHPwpQK5QoPskoTAzWcCEwpao7iRxUPSBQWL9PyKtmvt1RzTnKXDM3FJP5ib3seLeMhnUgEt",
  "key34": "62toU1RYWAfsY9sTdXHAibsChBsQjcVVqAhVwN7gd7Qx3ZbU65BRfV3JcN6k88Nz7JmSRRfCGhWqNVpqgTA8UCxm",
  "key35": "2MfonqQn81WCTWeY1Dojz2FX2JKeoCdTYCUL6S787xoVVeKXE7TzmYGnBD6JYms4iEPtYfyXGMo5ahQioyoRBBKL",
  "key36": "27Kz7jVivF5duropStttgmHd35ivCDiLEmTdBUN2b44R3r363dJKwJiy4vPu1cUeiWrmGgT1o43xhdEYREoa1Tbk",
  "key37": "5a9FcdTAdETuDGKTgswtgLHpBXsp8ZSB85n7SAcbRVJazxEAyw8fJ4WQJ1bZen7HTLG82gngND9nrY74kXdHdP1c"
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
