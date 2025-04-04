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
    "3dLso1ugX6253ybRQ9kZ1j7e7PbQxpKGKU8cbZLBFac23wHscTL1eBjzUCDwDKtu9vJmHXcYH9Mywg29FDQjnA41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e42iTp4UVeTWUBkbfofBeQBcM8QZG3MEuRZ7rAD3hvr59wcAjZaBj3JjnwKpLGSZNn3QD3paoPuhzHU4DLb47oj",
  "key1": "3BK849bnk1SHDtBdYuQnLU8nZyUvo2qmumVr5VLuLVTKhPaS1xPGYa77pRkWzbeRfnNiHooVkuVkZuCUUqKXxm4R",
  "key2": "5eBSWGGfGhNFgWR3xv1Y4d9LCm8CAMgwFbg7NZYejdg9SvMgKmrmHZGpFsFqxBLe16pBhXQmLFWscXjf6uNTxyDu",
  "key3": "61nhRHatkKmxbmbY6kLojBjWQgo56Mt8tw4hWPUJPC6woLvdabeGSUwWidzVtiGWDPJgpSzi5StxkokzcBNgWcHC",
  "key4": "4xpsZTBV6HKmwAgbdpgbE12K8KtCd7pnF1aAQvp1MvasfAwCugwV54Ea8DpBqA314JGMnEE2mN5QfrCMjiC4iPw3",
  "key5": "27MUvNAuwA6udXERPUXDhVnYT1dnuCxw42sC6jVRnCEpfZS2muoFBShP81Upm9NoNuUmM6sHNjdsM6Yzs4fuGSxt",
  "key6": "rJfKp1Mgu9ibbJKWZD9EmJNfRwuygiMThut5LtKprbJLnsHbm3zWdaoQw8RL92xH4sf5s9L3ouvaJ19cBncAmhx",
  "key7": "5vYgXHh5ELdX7PfYrPosWhbiCCyweLpjhfPoEAcxHaX9wQLrk2SszvfXiWWfQdnx1y8EiEHZRmchAuT3eCeMRfQb",
  "key8": "3r6H7KRuXZpy4fXzrCN83iTwyDfSzvxQFfiQLvwAXN4Apym8LyYLZu4tCEncp67VFcAQRRDRX9XfpHKHBqVYXpsj",
  "key9": "5aPo4piU7iGDqCDh8qmtMh6BZDF8U1wHtgJVhBS7biPHvqnsEinbrgJLa13HsXmreqHFRYzGcSuaJeg82VeX5ugY",
  "key10": "2HsdjVze2fb7iSzkBcu796gQAZVByDpgwyYbWbJLkM3EdwD9SWgC9vWvnyRSz1FX1faFzWoJdJ1KuT4TaPworWWr",
  "key11": "4rMoiMaDoRySkL8yTHCrphpQ4o9QM6MsPs6HTqjhtViRR4My9WMUtxb6o7aYHcM6pSLNDwhY2BYZG2XDkda1MPgV",
  "key12": "3DMS5vYmiBiLs2c1MPysGaoHRYHCaB3XZKpTgNuBoorM4WnkrKLGycS8EFp4cJxUVvKRgB7jX5FGMC8d4rLEu9P1",
  "key13": "vBvt9sCMLDxu1BgerPzBzeK6HmReq3ty3kgkW6VAHGDkKcsjpu8CLB9xcWzQWFwGE8rvUJVmwUS3m6appzCcjC9",
  "key14": "4ZBdStNAh5NFK3GGigrM9i3aDfMDcGLvifEWZnms5fqUoftBy9FJGE5DHtqKhcRcf3fpxW1C61ySrkL3A6v9nEXa",
  "key15": "22PyUf63A5ETvD28YGHmBm2xuYoBhaQeRU1vmaCCLx9rs9PL4wzxKBKpFVAgERAo2czpRqUvRZD75ahjDUJLU5z2",
  "key16": "4ePzHUuBAf47cQYaneffH7uP7X1US8ZsWu9FNM1i3dfct9nTaefc6VnNQenndUzCq7Y1osBJPqzNVF7DGtfptkfw",
  "key17": "4rgyLRSFT2nZTNxAHcKsVqi7pF2N2QFzQwwNQbNMkFj4GiFGZeppjVV8orUXYQNVhCz1L1jTVJW85D7G7uh9Qzgg",
  "key18": "4caXyXALc15bXD48M8JjvUEQ2hNBhTzW3DiZd6V2kCzgpL1eaiqzuJArTCmsBBJPRNrh9QtonxjbRATdFF1SUQJQ",
  "key19": "wfYVW1PKdWiFZDu9TAmw5azFQFec52Yss51LpZwbZvVeYUXvntTzYmdTv8X28QKkeWLktcdwyoTj1zzp9DMVXxm",
  "key20": "2f1qCQpZonwnXXnuxjZB824Gu7ETngUAM7PUfWvctNxKH7xE9zfvWsvMrdGb3UVzXxbAVv4gMTEcc4JTNqc5QTio",
  "key21": "pDo2ccrR5ShmXeNLBBUMnQRT923Q96M78o1p9CCYKoBmL18zXo23hYMsbYy7eFivZvotF7W1WuGiBtMVuRgp7VK",
  "key22": "3rJiBtxutooHUjGnxN4uH7x1Dj3oFqKiqiLUVG3LdcbYVGq2g8gPWMnYBSnbfv3aMNw6tuqEMqv4G9CKQrZw5CKf",
  "key23": "Hqh3RkCHykjNpB457qtc2yUvrSwe5pWCFBeoHwEyA89urpeetEoViYYs48MpwcwMKrzBGybU5BacBRX6w5S7MGw",
  "key24": "32dmqTdQXzmJX8Ubq18EMzjuisoDv9iRWSUcG9JNXiMYXZf1S5gvrqkFbKUGY1jSWpegT2bV6nHWEdCfbcugHace",
  "key25": "3uSDMYSCK6Lo94BT9pG6iQcx1PAKfLp2EpeDyCZ8Dsa2jWLtMFYa1dqbSHkdF2GUu36zByHuQyNqDzjuvLZMCHax",
  "key26": "2byRLr9hwCa5xgaeiizpNNdw5zxyR4ckKwEMiysyQHVnwaXXXcG3Joo3c1d1Z9i7Yz64H1Xmx2FFCxXw8NZovjuN",
  "key27": "3c5VnNZQBp2LN3vLAURcJF9T7LnPmUhFMPeZi4qyPUaJrVAFUZ23F2nZeSwGPc4RYL4wi1eDWE1zATGCfXPJGJEP",
  "key28": "2dSDYuCy86wUkTskUXA2SmKQmmXxXSRsLgMbzYQawgMXvXfGWWRUo3wJv37nMTxTkC7VvX1MLsd1YidRKnps1KUx",
  "key29": "2MgY9bto7c3Vvw52GtdUSqc4dad6JUHV7u9HgtqW7hAS9ZP9tzGbGS4WMCPrM2v59fjomSrqTVsBLXvchgqvKmdM",
  "key30": "64M1shkUWKSoF6XzVSukFjMx3CqWaH8DNZWPQUbeUicFiKBFPCC8drptJir4k5BXGCz2TiVjJvG95RqWn6yMBnuQ",
  "key31": "4EFoDR5YfYeQYCABeSMM38nrNJU5ntSKAQiQwUSkHEjcKu6jNTCrMw7ndHvtCeZaDkmgqfAs8Wq4woJgWxEUoep5",
  "key32": "3kU7tvd5n4LWp5LT2DXJq8WuE7u1NRi2jy8f2AQMgur5pD34MgTz62wcyrs9YRiPcfQifbj8zBKzAoPnL3YE2gXi",
  "key33": "4TWJK3s4u9ZaF3wcAJy2QAhVWgiqG4PyRMX9EKji1tA69coDMeaiiMeLCsWpBaAkp2oHStHHc4sKxjeUPqWC9ppG",
  "key34": "5bb52gk2dFvge9F7WvVGEd6Ah9sDSPhXdUuJNHzkVcueYcfuLDdxTy7fViXate23wCPiPkkJfhQxFvqJGcdskjx2",
  "key35": "6GjPt45rXm4yF2JKdSFwwtVJtX7V3svJvTnFwGDEqf2iA2HuLfmNLn4J7xkEVq3he3cocD3qzaEumH3idpdnJkY",
  "key36": "2BJH4w553X3XvAE4eatW1wNqDMmTUafEKV7c47ytCGZBUYrUrBhjBh5ZVJ2KeffK2nHdyTE1JAeuYwXYP6pvEKhX",
  "key37": "4Dwj4onHESDxdGPmYQMHWM8ZvPUsVGDGk1Y3Ut1cwYEVQFxi7EnzcrmPgJye8qm8jxC4AC5APzQ8G2MvZy63ge8c",
  "key38": "3bnFMwbCAMpqb8joQonCND8sPvhxWwhuFzUvBJp8Vg9bbDS61KN8Q3rLx7f4mfehLzJXnAP83frbSV1hbdDPXxPi",
  "key39": "ixLW2UeHFjdR3G1wHmkuc7X32oPEU2CYFjmRxqBrUgpSe9MJ7pzY2wQsVBzp4wZwvFCV1NAEdsnU7mFufA59h5N",
  "key40": "3YFsVCTWSqh4gi8HG54kHUjFTh5KeBPMHVqVnVPPGPcKgCWcYnaJBngdD7CjyfxNZx4bbcPq2mwoNV9SncavA4vH",
  "key41": "2En7HqpNKpPuWc9qhuA1nqwWTveS8a7gi9UuCbKd21FKX38PaUQQZFZrxuzuf5UNc7bYsTM5N7w5xxGB2FZP3d9S",
  "key42": "2E6duUaZ2iL7D4Et8TkBAWiJhrtUwYi37wUx6nDCkgyLKff8Zc5jjMJ4fbxzBeEp8szf5g96crTtBs5cwah6Y4XQ",
  "key43": "6PJExHf3ER8uF3jBFsLWEgdeGcsPZX89Gsa3A7qXGfvozC5qDU4gAB4LhYKwk7zFBpEpknNKbwjiPUwgbcpsnph",
  "key44": "Feq4zMphx27Nrig5hfmnhnaD6QqZwBfdMP7mFcmqVKJmGm4wKYAh1upEmU8CL5ACxvLJNwuvpnpJ1eMg44yCW4N",
  "key45": "4aSf1814fo5E7v8wAShVYbFUzBSwSpLyhzEGNYCpPHJYgvM21F24N4Y1pNhRPEULCNZZtRRjJ64Z19TEmZYfkDCp",
  "key46": "47oE4yKGdnPhM1oVCzguNtRyKVV7LMfbEY56cavzgfatc15zR9Ggg1iYEpReqMsUdgmLSxQiki5aZsoZ3HbCxKX3",
  "key47": "4KHGVtbzVi9aByXdCJLEkXVKhJcbx8UdVQefW33Bj54Sji4qR3GqbT3UoHPP2co9BGvAZYVdJYUeenqy9XwktGon",
  "key48": "gNTpePFSorCRJ3DPx2otgCcdSJAM6VZZnxkWW9rQtDaNLG13QXbVjUSf1UwGAbhBo8CfkXP6Ducu1fpxhNfMRmb"
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
