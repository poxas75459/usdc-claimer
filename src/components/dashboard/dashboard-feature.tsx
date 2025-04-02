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
    "3UZab7gVM5ePSR7nmpjb7Nmramfm8CJjo1zhaitXvD4yGq7nJq38B2mYgZsBvNfCXUk9ZnqFRk5LLANXzGrga9E9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcCbZiHPNcgmy9GBwbzdQb3usHrgtTNJXYQDFx3dQUjK5gaJDxFQrWJcNcnu35RGrsuKkZCRfVcm2rNe6cGeqoK",
  "key1": "2eCe6QfrxvGmV9ieuB4D2yHq4FYj8inupzgg7RMbbLf9oYvarzmwaqmbsGtqiVnffoUPNXqEVgwc3AYR3zWy9EqN",
  "key2": "5S7bpXJ7zkYjJASg7esrdg4Z9RcdjPNYU9XjPpzyuoAygDp6vDGVk5chJ7oDp8SxpfMLuMN4Z4hLEvRv5naVGGdj",
  "key3": "3MEmXwiZwgpy4Ys4d1U1h5HbjrrhUAMPXR7ubgrt88aNfPBP1N7F3YpajcayDRy9x6tAFT5KEQpE6SDSuUTXjfz9",
  "key4": "5SqJiWmTJk2CUddH8FxrS6eCsxjP7bRjheis6Rg5NJaogoVQPhy4bYaFgdMmEm3Y5E3HLn9Nsu7UnjvKR1rrWNG1",
  "key5": "5fMon5JWWSPYLCjHDUYxaTnp6ga89ySifXaqG7zxoQ88Hew4bqL4tknx42PchspHaJy5hrWy29HUbKTcnt91sNVt",
  "key6": "3PERdqmAG74XrnvPQeNCpC3hckAapBNejfMFViac398hcGk8U9nPuFg9T3HeCvLVJhnwpHBZuZ39ai9eybiPcL7S",
  "key7": "3ZRB3nmFF3AqLU2paKqQFWPM7E99tcSsZHZwstJv76NRsCGBtrtyqG44dPHQXra7awTX1HKFuQL3zsBNtDpumXtY",
  "key8": "2aJfRzFqorz13Viby3hj9mY2MSJFXomCJw7agEoYWCu5HEncVWSiaVLhUVyT3WzqHP2yJMYzmk2SpCerKQmvfnNf",
  "key9": "2Aa8HeWHTfAQLHeR38WBpAvgcSTNfPJ9WF1j59oRooMJfJqfVAoEqcpM9sjzTwo7vGMf5igC2sadKfEghiZky8Nd",
  "key10": "67BtnycT1gSLH8UUVgBdBLkyBNxG7zGGa7fwpyraAhm1aDdzJBqsJ6vyRbuAd1bKUb1CHtwuoQnn39uyg91d6iXY",
  "key11": "2SWZFXhAM9CKTcXfDJ951ZUaAVfqNoimCvCtpf2v2p7vwupNAGLS8omMfUtLSmexkCX3ApVdY4FTXbC6bjmbSCvR",
  "key12": "5nopQD2mEU28UTU42r9iSjm1XgH2Ug6b1CdNpYBi2vURZRNHdSziwYfJR51cWEYDtyRHGX93fBME1RKnyzV2umxW",
  "key13": "3RRbbb9GqZi5AisAWJ9SQMSJ5q1Mb4nioK3vA8H2vscAP6TcpQbx3tSe4w6hgaEpxD6zk25fFm5cmifr2Wc4RTvh",
  "key14": "5pAbRGnBkSjyFMXKgr6xV3PYsu8uqqxgNBJUDacW6bMWiBM5ZAYYA8fDzm6gjBU2NCwBxw1BTnEvusF4wviLkDXs",
  "key15": "3qPAVaSfBvVbDYVaXkS751JRMNiVodad47WDYvAwYcdRkEwr231ctwTJ77mek7MH33eAVNFnV7oVfRg61zvnazw4",
  "key16": "4NsFHwArB5abTPCWHx1BNvwMKZ7EVDHheUMdg32vpoaBrTyYWwpaT51yY1uuoXxpsU7n8dRiMawADAJH7eqVyb8s",
  "key17": "3jHSPYqbybEU3WBMNFebuyVgnxqCi8GU4fzt9wTaWdxQq7zUPvA6hJ3Nu9bACiDiihPSdtpYSyHsytKxbTxhjqnC",
  "key18": "4xJoGx8YhNxuQYGnq6hnQG9YSb7joGCAtoYP8oCErgsGjSsNRxQcR3B9S4VRxYjcgJVB6SNCkREfn8PfoqcyxZhu",
  "key19": "2Rp14RNtmXpyhTftarnqpfkcdstq9i76hyahsyKsw2PgGR1hvdieWsRU5cmMdVDWQ9EZsydPtBcBmmw5mMiNh4Wf",
  "key20": "2NVV416q7f6bySzSYRutTccHx8Rcae14iM14t4eBxjvGXM6cy1HSz2rBYcEYnz5C1CHnGcNZJ9ir6GL8JFDHdFBa",
  "key21": "iKqjiQdyicVGMf5hWz1Q1SBg6VmG1WeAQTYeoKaNGdhcBLpnkf7TnEftcMXgXFnGV5Wx74VxcX2BoQ35zSNa1Hz",
  "key22": "28eyzhEcsTxMc2BeJ9cuGhGKXfFhh8jZEyfK6YQLnz9LtYMSFBfCVPmhPo349FR5LFEeQtGMVt1Hd68DLB5MHAZv",
  "key23": "2KJtUvyVHeWFXcvm7J4fQPTsiuhJWQexszTZ3584JWx6Xba1FeJdorMkoyPozxfx8CmSfLPoSZo7KvfxaMphBAzt",
  "key24": "317FzGshSP8ESKRSk8o12dZVoGta3JnxdozxTqYqiEhv8NhX643oq5N434JW7zEMmy9zQmKco2V3zutzc4wBdKFL",
  "key25": "J18Z4Auzxf5RZXuD2MaHmVRpRAXHkBNMgEQNyQHUzEn4E1gUFmcqf2wnnEVqvkaimBQouQ8dBjpUjT1LN1ATeAo",
  "key26": "BFevuuyGDkAtedYbWeYMcEhfGHBtd4d7FYXSFxuVSbVTJs3qHLAnKPv4iqPWTML8YE6Ff8hqzshi9GGuQ1BT3Jo",
  "key27": "2jD6EgPJfvsbnFVPXJsrh37Nbj9MkTJpVvMQ1ZWZpwttGMuwcNK44iDbk666xLZUEprGb3kLJjWfXUTpdNiUSJAH",
  "key28": "fHW4Pbm71YPpuEUMZ4h7jgifJNtfBiNNL7P9o6kdyJFrQGV7Ai9iTgXLQiMmU4ghDPm6armnhwRkawZdiHcpaxQ",
  "key29": "5rkbbuert6pHhRQzA7X25vPLAAS6H5Mt3mLPEaEgzRmXCBsyTqckfn5vmiexijn7KkGVy9QszDYxFMuNA6xkwZY",
  "key30": "iDNNJyvpYvHUCRpENzARrw8qCj4EW8Kuikpmfp2QpLNKAFKBNuY7BEhAhdjGyFaxtLgm75mA18j4MZfURTRSgxy",
  "key31": "mGSBTJGoEfKggEsz9uw7NYrQ77upoNQ7VPCefKnGA5B9maKyodDmXyCuaRqZULMYGCJXrdRiWA1umjedWMmeiUb",
  "key32": "4EKDUpy8wEuuSvmxJBcA3xTHX2KS13ZGUNtMHujhfq4WxLpunFXLKQwVccTcWxSo5KsMxeZDLE9p8XJbJdBZSA8E",
  "key33": "MQEY354vyUhyAqbppoba3hcCD2jrMFVBYjUoA68QqUzYpoK19MmjU3yzibRDwnAkxZLUKLJNR2LS75zFgbM7bMZ",
  "key34": "5xWHpwBX7eRbv1rc3zKE2un9LrzPhfRNiNGWq8kRh5E5aaUFueFMVnkcb6jRozNyLNNVyxN6c75kzvzKYeNByTQE",
  "key35": "5S2KeszjqW5zbYLcF3fAeQJn92AQzkcfk7jNVsnHJ7CKX8qckcHSvAGQA1L4oDZfSVA6vgv3FcixZZCJvFDMnabt",
  "key36": "2tFtKDk4aqoU7vxGQ6N4t36pmWBkRv5qsb1VThb7ouCikAUkYTorJ7zRm2R2qH7uCSrYNm49brcSQMPKFCXgovp8",
  "key37": "4ejQyVc2RegkJWfvuYNeysc2LV9FwfcFwWY4L5wkkgLxoTjHHPTZTAokewY4XDCjrYxL4EgSZGseaq59WkfK36Qx",
  "key38": "5NcqEQUoWPADJ4wJS7dM1YRbHNHpwUftdcifRK9JRCFA1QPyT3fwnQPhuVMJJhdoz68pdQ8EpUq3NcyYqqgFSA4a",
  "key39": "5bjf7aiuSSU1gshfz4foyaXMFebXqpcXov6HZ81uCwjSEkAJyyTAsq2VdjYCcqJLn8WXGck3MwGnJFieAwebrXUU",
  "key40": "2MNWaGBZGtN7MhrHsRZ6kwoqBpShE9358ksyFaX6G4MgcRRi79BTeqKTqwSgy6HnrNMLwmBvHYD2wnXmwY6FTw9g",
  "key41": "66FbCZA9zhFm2hpcPmqRyRzker1p1d7aYeU7jEgujgtnjSF4LEWESvPK7RhSWeHMfo5GFBHyZVegx3MeoVixW8de",
  "key42": "5CpRkUD2ZCh7n3Ki2WZ22oizBQB5hA5cADdy34MGWYg8qjAAji3m65uNBhE7VVCNC1y8xsE2nHbhAVk6WpvVCjH1",
  "key43": "5AKzDPZzhiqi5VvBoV1f893iAdZq5trG6TyZ1h5ESwCUYkb9VYKCj3hfxpXpYDonVaH17Erydjt1D5Lqo1VuWGFe",
  "key44": "4qBcKYmMf1CF886diCn2K1d2ShafsapTrCMtLWEAT288hEzn6gP65gVtMs9CDubDhgzAXrnpydDibegR9Fbpvb5C",
  "key45": "3PSQVXHqbaKxX3KHMUBWfkDuuy2G4udKuZJboYowgHrWkACv6dnR1HreE8cQQEV1yWFd5TEwERAjQzPh3nm4TCHC"
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
