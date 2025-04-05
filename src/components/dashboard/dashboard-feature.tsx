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
    "4GC5FNev84zfbFLsqDt8LwQKptQGuzndWzJUxwtdDt4L31WeJL8wgdiC8XU17fJqrTnALTn64Z3dYmqKkSXzxtFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzjhD4kEFrHpQifDetTtKRZTLSB6543ngZXpFLuDpD4GHPtMQpeqHgCAMEhCXt6LM6FzHgaMdhbSV75aKu1t5ta",
  "key1": "4EWTu7WamgkbQF1d3uNDBBv5fFXd8EMvrG51xKtESzrfJeeiSwMSxvyNwPzAYHA67jeUPXC3DKmkB9e9HrstCmp4",
  "key2": "3C9YLAuG3dGFFjfvpwZmgrGLYk8cdDWdTC9Y2kWrFGHzd8cjNqWNechiLpi5BChr9G2TsyQk6ScJKfqhw2nZ4aHn",
  "key3": "5NsgUDpS2oY65TLNBg24CzE2QorRbBCcQ8yv68y4JUWWrKcmNQCpXpeT5xurjXGiBZz6Ah1Mv1NPvcF2nb9rBDKe",
  "key4": "491SWuni8aetcqBrfPZ948eB8q3B2YVcysFRYMJ3icTNdSMc5kkuVMJSuTWmYsTWFFkipKVwRzfdHnQQhbdExjCV",
  "key5": "2FUB4zVXWKjB6MoZctrqMh5pBwTUSiHRzZCbxcRLzPbQfY4KULvBSrXrC7CGYkDLMubC2ruTH4BhhmMnx5ZvoRtJ",
  "key6": "3xqUML13kdj11Rxir6gLz4VPWX93GeU7pbSC1BHRhmEZuy1ZsWhYkZRvHwxZs8ctVDUGpN9D9Ft4SiCi4xcrttyG",
  "key7": "34YXLVgk1fN3DhnsxjEpDrEV2vbEhrt3uHVu4Mjj68n1cjXyppZJgWJaygUAjnSTeytZeT1m5jCi6ErdUu49pPJt",
  "key8": "42zR8y5AsWp6MiWkG2bQdDEgWzfezDXTAJqGX1sZfzgVPAYc2yYYhjHtgMrvSnRdr29G1YSkTH8HCNsGWu7zMSc1",
  "key9": "5e1FB6biYHxJch9MPqLEiuGChvyujEys5TRYdry16wro2NqnnJiM4JCFRNR6fF3NimBRdFi2CciidE6UwHWXq6Go",
  "key10": "mVb21dvPiptm1Zaym2aofafAjJemXbBjT2so6dNjaiEuFhGoQaGNTQDGnaCwLk4QLxhaW9fn6rNvokVywQTRUVy",
  "key11": "4NUXaGEADW96mp7ijqvMdrM8JLaUpBZubM1p4GPkFp43oDammNDw8X6XPzvCVWvsDcaVQYrMRbwwDNiCiitjpuyj",
  "key12": "6xPZUs1J9dG6ERGzx1SKHT5PopNM2PNQkFdSeJ5opSQhFCHdyfHNrkwvhmSJkhpbM8ayxydpuFxGd8gHf2e7Roc",
  "key13": "a1trxVitGD8wKBnrUfNUnC3zhsAvmn8dZLw4KDi3oZj1FJDJFukuuBBYu4FkF6F5Xz93JdMgYLqn7Vw48bTA78R",
  "key14": "4R6n4AZSp6L9LkwUYgP4Fs38dAFLwRKNPqjAU6io39PPgkG4x5hsZfBzWdFuRu4k3MV5VtRoFcr6BJAjruxwwNo",
  "key15": "5bZ3Nb39m7tFoDsrKuXbpjdacEq3ediwqHgwgEVVPTgko6ayhSB2iNhzntcM2JKe9F3S8o8hoetMHR63s5ZPS6zz",
  "key16": "3SUMj6iVcBCQdesFjm2PykMyAZrGmdxiihvkgkJi7vCL3i4w3895jo1zMfxK8kDyQQwQfMcCafGcoBQiecBVY9iG",
  "key17": "4eXArzayrswsbqmpHsFQwTjPc7vMVeBCCDQ3WNDwKvBH5c1Yd8XjT3cr7UqHN9CxDCmfVHDUV2j46ZaXzv9fsCo7",
  "key18": "5AaxXHLTRjqJqCjxVsU4RjmB5LvAz748eCDrK4XbaRp48yczJMxKBVYj3UkSPuMtz8X2KpU5mv8eGmDyKDFNTMon",
  "key19": "4aYgqTpLL5j2G2ftABMSh8rsed3kq4RyRUsede4RKvxYGuiAXPhpazfhHJkG4T5xErAeq7Sy39Rq93QgRYBLz7cT",
  "key20": "3kQ8FovinBLeCkYCGcCSoxwMaPArf7UoYRGnmWaVPUFkrzgh65tt7fgBa5aXFi5Tcj5DMLByhN46UEp82FH1dnj1",
  "key21": "4PZ8udVjazR9FDMPoAYJedsJCnisWC4ymveLNU9J6fmpgNUu6cUfaLV3bSGttKmtN4mrtWQ36QRdsfq6rtyUe1AW",
  "key22": "kJPxXz5sQFQUm1M5iZeLTvLAv9JcvyJCx8dBVe92415uQg4dXUMsnB29Hx5qTtTiWjYxrBBc8RYTauFmAFJXY1W",
  "key23": "KgtanEi9vfypvmStJ24ByYenPyzRRzgwVrbQnkCrSjDZXAjS6nSnMNvFYmymvuzKWLGjBYHHVY5umX3bgEBWXiS",
  "key24": "59xqiCZLDxVaG5ifcs8KiSxziVvMgtRPFX8bq4djV16wTFNjGZ8zZYqTL1yMCBDkBr96pqwKGYXV8TccTvkCT31Z",
  "key25": "2ERrHjuq6joTdmUxfQJ666nJ3sCNQrHBqNDN4wqpHa5QgjtykXkBZXqSHpXHsksmsdjFEa3y1rRt9dRoeVU4eVBH",
  "key26": "2FEi6yymRZU3aN76HVChQPooYyVPLYpweSeb3akYaT8ozKSxDvZhySFR7bQLrZA7EWWuiov83XUxeDSjEUmgwNny",
  "key27": "4A44bxXVDTVBjwMUmPZr4od5xENkEQwtaptJgHxU82zXxEtUAUinSEe1UuUm3ecnjoxBCdX7tBLyZY5qAumPtxBn",
  "key28": "28S1xFhaJdEeo5e9sTmJznuaR66ZDTAxhsELpeea55sNkPqtVk7tFfiUrLwrYoqTfuQzQSZERyiji4vCKeuQj6UV",
  "key29": "5VFnnFNHtcf25SKXgJeaNGLPtiM5X7kHnvSRza5QGezbz9EgxgjSzEToyAueoXQfrNcfGkoRs7Szr3grsZgtT32d",
  "key30": "1YikecxLqxPVV9N1PWnBRGoAMmj4PPdxbAvGhBSXpbKDn8KTxzC6TFf8artJdSL4C7w6pxJUGhp33qzT3AKVtdh",
  "key31": "5UeLe5RB8Q7Z6f1A7tFL8FZJo5Au5FMJ51H8V2YjUr5MGALoNHKFz4ppMQgBqGYxo5EkL8ES779bKRgi3qkdAbaY",
  "key32": "5YC9AWeLFQhdLpatXRV8RyZGhJAVKBGQAD2mok36WLoQzmJ8fpZHVAAGCXs6M7Cm3ALp737TrZcs1h2WbxKUaM3T",
  "key33": "4hF33jTNhUC3ri1GGiT7JPHjWqUdT8WPFZYMuD8fzJPuqDoLxL3FqA9QFM8QQgyHvz5UFuXhDSfaS7t4NdbdSbR8",
  "key34": "2KmSKxJHxRojCiohjGv1a268cQ3sJTwbXcpLYUA3Yx5fLQPiDh3ZV5XB1URtkoK2RmqAKMTbvK6irJuYciMssLoX",
  "key35": "3Q4aYjvjafvSn5Eh4i9MTCjZgdATuHEvR6yJGtPFzJWrpYa1udA1i44AuXnnZ1aTB8pMJcmWDsvcsXqVHQTzxL3d",
  "key36": "4YRYnUPUfqW1L4VdzVybAMvYz4DGMKS9pH9g6x72zvxkWKGFraCecrmPBd2sbDBc7f3cUudsvmfhPmgMSNVCwusj",
  "key37": "xenQeFkjfaZtY7eyKLhnFvbJhDtjYjFVFaucoz4Zqojdf7hrrkCsiPTqkTdk5nGDYQXH75uDeMG2khLrrttjwHW",
  "key38": "56UJWQZjRrJ5RL8bQVzhXcrT77HqeEKYkw853XqENFF3CnzzHbePCai6Ah33BejebF3uV4gDuo3atyL9Z2R7TEmy",
  "key39": "63k3ep8zST7Mq7H7n7oUeLbjK688g5QMZtBtUa2XypaxSradVm3Jk4ytvPist219TUbK39t7BjboMS9XGjCKNJt9",
  "key40": "4naCkH4TX3fyv33fykLdbAS2vECAECQUxunNMmcRpbGHZvLYgSczznDfARKe7RrjEYp7AygP4tr6DfR4AogrfL3A",
  "key41": "RkrYznL6PcAToh4Z51vtBQ8UngWMn1gHPtHNNPinyXym1YdM19exuTriTtHYMetAmEmJ6Z1DFWLfniX6rb56DRz",
  "key42": "5CBwUGUGgPo9WjG2FokbXZabtS6avKQ4ZC3ksNRVc8grzXHRU61izVsQrBqErDmHvBiqNkuGMGKQ9G1WgzyPMPuF",
  "key43": "5nQgx9DgRVgyQyQnxfuYceQx7FD8XkN67jGUnihb9x6X9FxDmm9xHbUyC79hkCY6H4BLRWFkMYwRd9CYVTz669dS"
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
