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
    "2n2N9LtqK1dVPCyjM6W69hxoMTV547ZhPTNDExeW8kqAUNXffm6oRnRwVMBSFkVYfaRQdaT7ecYTLFZ75q494hpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkoSwpd3u7WAb7badBYLAxE8U3E4kV3cJrjnmo1A3XLGYEqX13Eeq1kPMpnYMEWnEpqtQX7Nc4tGSKbHjVdqBev",
  "key1": "2ptKFMXz1GmtmdxHHBAN3yWsrVJoNph6x2anMudaxTujAnkvTVeBYBUfmX9WGxLmmzr1h1rTnxw7dj3oq2UmFDwV",
  "key2": "3CJrL38Q9dpXXe8gXnW2HUqQCv9oDMfxq7in78qU3SbmKBZJDfqfhCLzRiRtQyBYJfJNG82Bq7XNui2JxfbPzFdq",
  "key3": "DB8v61vdQA6KxJTdWLmXBY5aDZq4w2pjoecfZpLywiNJDtuqXqYrCT4FCmEnfHeoV2gvtR5hMLZMPFx6nQBdrcn",
  "key4": "3UXf46cmjRqggykYfqNTHkioUcSdFUiZSEoEGEKjiJwCnK4mgyHE1QdEnmgd6FteaUrVAFJY6omELrD7rUVAH3u6",
  "key5": "2LQnwqV6x8JvnNZSq9UGzin3LnjBakF8RyeACQcEzWtCW3PUNikbgzyKL6XxyCC8nUSCfE4ma1YTSEYYSAeDprB7",
  "key6": "4ewmsK4hpwhAAu8YtfoXXnY8rgdmA5Xxq6A12oWWF42Pm5RP2LocS3epN715kx4KVVUdnrvvY9ZZYRgyws4Vj3Pj",
  "key7": "2S8v6UmpRVBo6v7Mq4EWXYUA11QATsP4BHcbMzZ8cGFWMkrvAijoRtGGaZPswPAKagHHCS9nJkGKCqWqB5322bwS",
  "key8": "3bnojfErJubuHSLEruHgK6yjVV1MYrVX86687Z7mpuLKNsxb25oMuxKCQq2AUuqK2CNVCXrxfj3kjbRVxta71s8q",
  "key9": "2qv6vFAZsc2waXE6XpyWJUTYzChJDd1nfwnsWEo9iRybAy9a6A8MrrU2sPPTmGNxKPrtV9winB9BptwvcyBUSEen",
  "key10": "U1avXwmrwfAJQnBKgNQ5AFKJiMZpVKHt96qF6wSxbq2Qrqw4WWnF3M4w8HTZB77QdLphby2dYR1pZd8cBeM4Xes",
  "key11": "7DHQ4b5r2kfeX8opvRrPiXfLUrwoJQHjEYqrfR8v7DAvncRZ3hvmD989WMmihzvo2tk1ehe8RoWByaCpzxrHGr2",
  "key12": "2kuiYEARjoSTY2UXL1QzuqYMGdWESxKVv5MdmgVB8z8DtfRozMZsaynymFZV8nfbDMAKzMvwNZLu6vVFi1SxgdgY",
  "key13": "ed753ifVnPbxtJ6RG5RmmFipmVcA1reM59Z74DHD8JdFPacCEdwBpq67CEk9R9BuTTNgTvLLYtZP7N5JD4G89y3",
  "key14": "32nxb522PDHtQBs1qZfo3oGL3qUtoYy7AsET3MVCmDYpdEbiKahzofzXurMfyg33nNPAuPM5siu5wAp5yauCEAvw",
  "key15": "3m8cimJVjVkGTs7RL9CCAWzuCcmLEpc64DUDuGjs8LbfT4tj5xm3VEWrAUMspKGit5ps3pP5q4iVF66WKZEUaJaz",
  "key16": "24mcC8HiKQaMvmqJEhmtJixKzm5CDAKA3AE2hATVJG173jNXD7YeyBFwJpLJvji8KkmHGmkgaieb81gvZEEJHXES",
  "key17": "46KKdApV7fBsqihFfVXhKLCF1kHNnAEfj5Xp4sL1dkgs56w9C1UmECd6XpGhaVvGX5rcqMZNV4NPDkNc4c9uveon",
  "key18": "44nbr741AEVVi5GHJKq4csNsPDhH8eSqtpX3ZrgodtWygZwne1Ldjcbi5Snxxxjfs8h8f4ytAAh974rC8ma6zevM",
  "key19": "3b5CKZLQL6wuuRQ1fiUthz6MYKkQ28xztWL7WQw6aND6HgENnEW8EyBrrVN8jSRYiWDHdx7BAPA68chDhjW3ERG1",
  "key20": "4wdUdeBurv7uarNBHw1um4GqctsPkqsENw68p5wKrnbtnuro38gzxSCwPafN14vjfKMpJYW9nNjDhJGb3DeHrdou",
  "key21": "5bdKTRQDXXdJ6xqW7RL7e7EWGFc4oGN5zfhTBnyn3oonisKFhDfMYffYSXdWPTa56gfS39yjHres4uusSstsBcuu",
  "key22": "3v7a2vMnqLRuvjG6A5UQ9osuwrYDnbno9QTueNCVEH5hgA7UARZWis5dJ3Ys2CcNm2q7gAMFgPCVsfpjNw22q1j3",
  "key23": "67dvQ1FCNdSCagcfjTdQMFzeSrChxVwLr9UDWVJAPVisbeuUoCWuXU6KxN8iYC87w8RXqCKQz8DUPxLeRMWE7Tp5",
  "key24": "Q7ppNAXjU8paiGgv14VdEzCHCkGq9RbRVD8X4ZT9DfeTKsW7xt2eAmhNutsxYSheB1cJH9bbAbFRUpFE6FHiF3K",
  "key25": "4QM96kY6sC7H7AEVKKtqDJTCsbmKsjo5bMkwMmhW9WgSgiTyX4HviJUM7vfv4dweM4ExesAP3iXbetobg2itRBr1",
  "key26": "4Nj7cRRBVcrQpdKXwb93RLrXm1U9QiWMJVC3eWmr62ThV5XE1DCyWh1n2m42Si6wxKsJrJHsWVzPqP36e9xKk7x1",
  "key27": "2yGM9eDWdXpZDLXmok9Hzv2o6VqFFVTDP6KwYP4VU6d6xYPZymJL4iveAHKXVR6tFmNe6LUoU1RaPUiQj5fWzmmZ",
  "key28": "2GuvefTzyrp4ipdCuLsskwQ9NacCgx9rCeD5rihHKHSntoXe5wAp956fnVdNeGqZYXaYd5H151MBFZ58hGPVnNNf",
  "key29": "3NZUujg2SF3wyDRhVwquEafs3rDJTim9qx9cX8MKy6SViQxCbyX45LnCFstAfqWmXTL8wC88jf3qBsCrtAAzZWUx",
  "key30": "2hSuv69tvSYyMmDi5qtHGYAtin2AeCokn5bP1oBFC694EP7RcsewTZVnvYRAMHu5eAPSxtvz3bSjHH8HFFnGQRfL",
  "key31": "4HTB9c7u51yRfDPekbvRg921Y1aigBt6PtnbxcHqGpf9gfSFacKadSANWKb1LuZBZtmyXJNoporeJZr2ANMCdeB9",
  "key32": "haBJyQhMo98u53UVYCuy6asXNQ3ovSfpT1cNVyCKrau44PKTRxdTk116rEWPCPzdLRtMJvfpgHjgzarfqVFiqr7",
  "key33": "2yib2oKd3n1XLMrKfLdA9PTTAov68cfEXcQnhUPVrjqA2THiaudpPjBjtagD4JnctE6gLHY5XJk9ECfTMPTGqNcd",
  "key34": "3N57HUpzyFFLpNY3cwxtJy267dK5i9q6RimDHKjDwsPhzKyRpw1WZpvaxq7AYnHtL4wFB35d8FXefLkJ36drgGbz"
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
