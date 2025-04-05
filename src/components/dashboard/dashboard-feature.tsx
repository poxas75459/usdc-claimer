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
    "4HaNH2n8ZAmXvxTv1wf8AHNjDtNZ1T4TzVgimM4GCcy8fqh1y2qcoskRhsbV62tgb2qLpAD3D2S2z2JiV3eo6bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ntdkY9mPJYnGPrwhkBQg4hzDQLYiGBrZ6dyVvfvwBaHReXSvi1HQXsxXsUQGbHBgtwg8KCYbQMti7g21NHdDmA",
  "key1": "3ff4XPg9KXuo2XHSe9dXSstANku8qjfLeP3LsNuos2jpumh5fgRsUGjVWZD4v8oZ2QEQzrhi93nNppBP4XNV4kWq",
  "key2": "NrHBsDZwh2fSRdmtkvFnnMAVGK4oa1etbLJoKuqmJZtSTnCrY1ArShWpnjxR4RNsonmL88ERHfdGCx4cQGLsbbR",
  "key3": "2nayMosNrXaVZHqTYxX8sN41u27t3dneBpnWqSjtW4cA2b2KnLccUJ8vXiXYsoEBmyk4YUcBJKyWdqC5jCBy7F1G",
  "key4": "aZUZhbCpQ4SvdqQhDCd4NFgka71TBSSTwRzMR9FTCRwZ8VkaAGsQnEtpCU2hubonBBDrHdGBuDhCeMyMkjBtoVF",
  "key5": "5yK4BE3RD4L2vv67H32d9YthN4vmfRKMYBFU6oHkmwGRLKUge5hrLegGST92u3et4SSLRXe5WraePLJZrxP5cwyd",
  "key6": "iHVxi8RZ9uxmVEUo4CZq6nmKFRvg3Qex4jsBo2BkuBmsAyKZJUAaLJ6bAj9wNNH9jhbtcke2wS4kqNkPKJb3G3X",
  "key7": "oePvVB4ug53s1htvbcrLY1W7fyyeXFxEKqPMe3f7G8baPHnLYWpRQHg2246XvH4GGGExyUYJ3dYh2hFNq2YECbr",
  "key8": "43ixVS2y83NWjivYdvYu766XzXZDxrPdszXVEMkJi3CjCegNxnpkn5EdHw38h4KVTrN35QiJTWX3fDVNjNRW3B2M",
  "key9": "GSvmc3PeifkbCBRFALLMdgWmoxdTyidHcCM5BaP5XdtvhmD93bHfst3sEp4JUvXoMVYCdcBV326V7tAbDoLy4DZ",
  "key10": "54HhdboxLByYEcBpdPRcvbmERN8js4C2b6k5FJxuHrwnJwMBj7gX4GFBHTP5LGFKKRNw4jJUGt3MxvMD3UVTnozE",
  "key11": "4Lq4cbLH9JA185ByawVNqmEQgvBKHCmyR1BNQiaM8Y1puDB3C9JWRsYqmsNpRdVGEFxZ9i28aGE6aAYorzmdoqrP",
  "key12": "kL7PXYZaEYotMBDFwbASVuHiWn5EeFb2snVtu2pQ9ByDAh2mRoXgV5nxhc8nhbAJoftKjG65hFMcJVPF4U8PJQf",
  "key13": "2iQrod32CjjrkW1BgmZg1hY9H8dXaDj6kHCDtJAeJNYsnCHNUNzhNNodhHd7Wd9ouEPwnVneBUeYKTX3F4VYtCTK",
  "key14": "4wwDDZK1h42evpKA5ueN6WNosAY2sAT9PDz8zaot4QnTp6JuB3hgvjA1wtXfD8UyaSBbt1VLqdHocicjnu9aoN7K",
  "key15": "24aWzBqfVCUX5uLfVPNTdshV7eNNnTjnP7swTFyM2cPiyDyKeRQRXAbGVxiTGcoBHXEmKoecZeg7ALhot3L3Exku",
  "key16": "4PLo2dj3zWo1AcrJmGzFyrAPwy8SvTbvSy34vm4pDr1uh9noXBijDMhVZR72zK5JbjLSUXK94nyG3a93f7amTSbw",
  "key17": "54YtU7zCpeqRgAhneqMTZ2PDmBN5JGwGsnzbXXt8okRjMVMabN4Bu2KB2phx21XkeiQXL87MXR5hR16QNtNHj4Yr",
  "key18": "5UToBUnEXHhCS7cqCNsjcj3NBFgUDntvQA8rTYgDUvAeySgKT8ZhVsdDzYb8kLcfdi7KkRfM2ceFefRRWCCfGwMR",
  "key19": "35ftBtRtfGKir9VtGbEvebR9hQiadWQHJygTBuGigWQhWMqasaq6cuDP1XQpj893qrkdoPa9cHJr8V7jJtH82G9P",
  "key20": "5QoN9tojxoRhvacnYaaoTzsZQz7kz8Hw5S2JagajXto4MxQGNMhBELKTa7zvDeEm62EzjXJ2MVdd1p1kqSrmpNSa",
  "key21": "4HU8cejLpLRQyVzfEvkUrJuZdLLSZGDofDPYeo3qWkzFHHPkquezxTYj8cEZzsMM5GjqFk8ZUbqJbd5CKD5KcfUp",
  "key22": "4iwTvHpYEzBiYp1zTyNURJukc4yTGb1hbfjMEZ9UeiNaajzBL1AX6o8Y334xLvc23kUqh4H1TaEWrf2YCXrBP5XH",
  "key23": "479mJRYDjEnf2oYx7AbFRJiVX8rgyMNVeiWos34Vya8oT5XXh5CnPiLoEb1ccPxGRyU6AApdCTTFb5ezJWM5Qm3q",
  "key24": "2ra79tDScPRfUvKu1DXSaK7fjtFupf91Cfm4eb8JKU59aG5VhPmRiauP1yxsN3QNnYz9F2roAAipX73Xg7w6Xsku",
  "key25": "2MmsxUzhHb1pu2eBCP4uom1VYoQdt9axX17Mc9u7J5x61hHVw5GigYqBUA4RJfrh1tARZGKgX8gZ2mvJFhcHBasD",
  "key26": "5XKs2a5NjZo4REqv4HKVECn5846cpaR76YVj8Yu1dKeTfrBhFixgdNdNFnn5mFesqk292Ya9juWyY4RLMcDNgtHy",
  "key27": "2j9ukat7tKRGYuaTenNmRGQ5eto11LRCfiNxf6CSPCjUNSy7a981dzMqKT1TZPnpUbghYWGhZLtnFqiTERqcryxq",
  "key28": "25ojqmzaW3bSr1JsobMLuvjuoW6nghmCyJKrSjTif2ucLRG2hUCLJ6474oTpNqnRLMPFdocsfJNhusoaKcPobW1G",
  "key29": "2M2Q9JNeVtiVThJHu5rgxjnbEt7DkayMbZW6E9JPGVeDmdKMeXpi4zrhvcBXikV2NCyEXd2j71Sg5Dwwp1hxZJ2o",
  "key30": "5NmBAVyQVRZGsR41dHNFhyVd3wcVWc6XVkHnCsdjFxag6b8j7fe3XxGdGtHBXvtUi9Ts59RcLNPLsTwdLw1qfhAb",
  "key31": "2nqj2PmgFtqjiznZFs3YXVfXexLKtYRdA2rsSLP3vWxdrQuforZtTDya5TZ7ZGSjHt6RF6P1r5A6piCBoKbrGnFf",
  "key32": "4FxwxFhBBvbTcMYYEac2Xq8DvHbABDvzJSMvhnNAU8qf6J8DADtvxJbFkeQmgyfi4pnz9zQzPk7Y3mLEtdUqPsvx",
  "key33": "nbmXXDTyF4RxRoCUNk7PTSqizNXAhZDNxzuSm6EpiXEP2MG8Jjbx4K1YFPAwTnpNwe1hqv9GREuWTGQrc7Rr3QN",
  "key34": "3KZhmX5SXVLnkzfmvoy4U9rVXuD1TpcW9vDFSZwKkQPbFN2GBifkndtAxSTSpYgKP4uYc693kxvVFvL5vs21LLhY",
  "key35": "YPLxc1DMXFZpWYNLX1ujeA7xxYVcmxLdcgzFMFqvvr95yuViUtA1WQ78dytiy84RLweu9sb1TnvHyV2jjjkZjhy",
  "key36": "4jgfLnoXJckNtcqhZ5V2G7A1GSNhJTtcmWEiXbnzyuhaeKnWLyR8fxNozPZ9hRNu5vd7DM7A6YG43oowsB62A4Vo",
  "key37": "3oRT1VTK3au9LoP66NFx8VDYL2GZJsKrRuUAXVfcjX6ZqD31dFJNdyUuitUKEPkGS7RXNyYGW77qWSdofwNYQpPE",
  "key38": "3oFY3UMUWECwzSL9fk3uY1v4Axdeme21seN7knrwaZuVTid4wEnb37eAj8N5rHvEsTWiqskDueWhZGT79WTTUvb6",
  "key39": "4awXUoQvrJxQEMjfQ7hxB676nnpfT2umMfm7Gtg19wMctuVuRncWgXc5JteHFj2xWrXLHdW6qd9h83CaEptMff61",
  "key40": "FRwSujcGCtPwgGSWHNzzQFjMrZWgMbSvPGH4i9jAf52DPCAzBkxCTPEKgojKeGzodEgzx3SuVTumkATsjwimG7C"
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
