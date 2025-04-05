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
    "5bdEyxXim8Qp8k33STUb6i3Ep3KooexwzbqPvWA9DYftwL32UKCe6MoEBAoBu3dBLnx8Psxo3zPLT7bknTHiffQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46dC7TAUnxhGcKtQ6pWxjp5T4iAPb5HD35LXD6KH6tXRLRjYHNnhHZ8qjEDkJ8XXurksjnKebhu48zo7XJn3mhPk",
  "key1": "2iyc2quEcDtw7sBzJpMC2ayU8zoCGQbwvatr5upjBDF9bKjQiEVnyTLnpDJtjUfpPav46c2Te8C3HR1CFXPAUWej",
  "key2": "2AA9a4pDCuc7rJDMysDhrGcBDamLaqEVtnCCNZQ29xdELLk8NmioDRP7jK9QEFB26VqkrSVpgEMFRTAmyVXAdc8u",
  "key3": "9vdijrMvbiNPiYbegidcFzKgCWKYffL6LtQjNddHFiQze2HuvQ2TxTSW7skjzSy7MCVEae3JjPhK8XtShj5Z3CQ",
  "key4": "4owZ9GPHYaNDYUAEaC9MxE7PHb79XkiwAKcjTsDyW3VwJBdpLDpyJULbzvxE7XanT7pqK93xgcbvDadqU6CtBRha",
  "key5": "4KU777wuNWoaTi3t8NZHTMZmHBmvYKBrcKps3GQNy62AxcTh8cw6modwkiBLC5951Ft6MCQuSZTmg2Ng4AgkcAYu",
  "key6": "3AA9P3jiKM1QWiA89Zh5L5zyioKQMwb4U2mUpWPqjfEoyad9LQR5QhhVq8Aia6zMc75nP61jqxSDRtyByBGuBMJq",
  "key7": "42ZG8ZvG486qnzo2gbeUjgP3nLVHWGW6vWG4uSi48QJhstJ2P7shdRtMnz4ZLkwRrXjAie1rLVJFajde6gzncPyy",
  "key8": "3DZxWTkVA3eZVNPkHGLZmQf3xsSZGA7YJCYA1F8JavvLo1qq9ZR111NKGHXmSowDoYPYQx7Kd2D1vSU4LvdtCdqF",
  "key9": "5JGKChHkbsyw9oNp4SHMzmEEMn4Vwma6fdBwCf9F29jVMbgfBhSnonWE3dVGgpFdY6V68gFcqx9bHpSDmthpEtE4",
  "key10": "7QXqWWLNMB8xrchSdxnqZYfCm1aEvSqRZL8BQpxZthQEpqLJ7RSa4ggaZgL9M44WzS6DGDqoDtuPgs6T3pRHaNT",
  "key11": "npsH9b8om7Njfo3h5aPanAzjNvo6TT583H7DNLMiu8LdkTRXhWwAeFqESSmQqA2sFB4pP9XXEhZjxusZMW44oD4",
  "key12": "66FhcQ5noRLskMzXjFGyxB62Ts4hjmKhAkeECmm8yL81dQ8XiY89hMzwn2wNdmu4WJTgTgK4PQHiSQ6BRyDBWy6b",
  "key13": "5UMERE7Sa3VLZhG5CJm4qW3KsvLjrksPBkSLfqP66L1mxmrvfftLLaUXQE9vCDUSikAhwz5CWQXABPrCFzWvZoiF",
  "key14": "4NCxSrZT8BL66v7kAWpHwSUdv7g1EfJgr8EXzmK9vVrc6CmPMhHFR5ujEco9sufdscr7Wm2C7KdCxByFA19bNTAT",
  "key15": "3ZDGsYg8pxvq6FaZxd818eRKKdvzVfzV5jLuhdEJZbK9GBofrbno5qUMav2MubCqi3LunQB97y4CJ7LfzbNp8ZqM",
  "key16": "3Dg4NfiBWp79D4FjjC6FyuKZyp86d5C5opFmBYAeXvKEYUn53dtdnA9VCst3acP9A1UjG4QFhwib1fsDsqEsa3Mf",
  "key17": "23PRECmGvikJ98LSRb6U4cF15izMNTNyYptFFSQFfRARiyWgc2ckhm2hPotrSQwXCZoqEJbgoYfvmJmwZYAzxFau",
  "key18": "3bEDkXJ2KPy4dwhRM28RqQELYudc66Q1LPg5RY2KoiDd7WSmbwq9Myh25rn7ybKcJnGG3Q1RzF2vg2bC4Q4RoSk7",
  "key19": "2Scj7Kg93FFoXTezNLaKmK4H7Wk8nvezwaQfQLr4QMG6UtpM2EqqmykJz8crL5nMsFSfePh1nYHvXwnZPAvQCGP7",
  "key20": "5srx8H5bHv9m22HFiTg2qM7MMqVBxsMvXo89WRceCqGWxNVAEhW2JjDjm1wXwyD3onBNcZiM86WCqkaotzSFqRcS",
  "key21": "31ghbFwqcWYqzqaiPgYgv3DhVpfAgNpJ1hkvgzcd4EL8upgNGzrUAVa1BVyypWuq8bQHSq2GnqmgYDEYcqqVe2y4",
  "key22": "45ten4wwm7G5YxTJvvY2HaLytKCeWfPm1BHsfqh52uWNjRR1hihghvj9VWQfXgBPqyeEvxkPncb3Kr3hpWTjhXih",
  "key23": "5AGwoCJPDqauL2Po9ftZcypZu5MKFTXS8JaJYuredBGzNbcpDuGo8DdndsJwUtSx15PizCthQjoSntRUjKuqzzUL",
  "key24": "4XeNNBkPwjDcNz63tt7PZDfPtZdgwmy46KYtQrUg8jzMpHMG9SKdYTRoEcAhzKVSLTZi1AscBb2Bk6nEs4khUWTK",
  "key25": "3hqDFNtQ34Sexq3YLFnuqf3ZkvMPe6fC9sApCLgzEdfi5sxmHBh7Udshhb2Aa79HKJQ3ZbgBM2EnKpWoJztgpaqb",
  "key26": "5gvx4mN3fnTA9T2EmGow8PSaaYBxGb7GSjbxLdZz7ve4CHj4qRGjYta81qEamND26yxVgnvM7MAkRL4FoR5sDp8j",
  "key27": "3hS7CzVksHVw9kKtw6WAB7HQbTKytNrFPYmq8ptCcjHmWqZ1A6zhyoGRAsFXtfNicA1nxw9Jwb9jCJDMe77sbDcn",
  "key28": "2VBuV3yrbqFSSHHSxooM1XkF1tdetAV3KTG3REM4Rz7bbX3m3wP6a5ACAXZajSGvxbkcVeM9bBNDSc9hdWUVKs1i",
  "key29": "4grnu4Wdafqi8SXKBdNrAynCTRS41YYmv31t8Yqr5K5SmmAH7Z19Vb2KaeQEP3Ctr8mcqW19e3PCedJ1GVBfmESm",
  "key30": "4yz38i9dv6E4TB8cGm4AZGjXbphfUHCi73aV3FdqDUwyXKPbkYXn6dErEfnguA2qZACTQezCf6A1JbKpCQCzWcGW",
  "key31": "4K9RLMHf1eM4yJJRGAoQuCnurN1T5vMhDG4sKiiwjmsCkfQaxUNnB7k2kLL4pZRNNGiDHELSBsSFw4HxR6NwhuFL",
  "key32": "4A37JJycNRtQXyq6UV8qnqVoSr1TkF6Dj2y13gU8dTzKCCm7WKCftpC3uLfHiJZzze5RBCWBHoyg1y2DJ3HVKSm4",
  "key33": "4ED6aiEENEqJugYvdDQa4r62SYuELowVGp4M3JPceDTWi8CF6yPy2isAuuDvjPcRkRctJfWPD7Jxm4L59jCLBfyN",
  "key34": "3GvyHTufepJgFqwUBsx28s2yLKNfxvtKV9Tcy2JRP5cL143YWFdrh3fKvQ7uDSEK2M1yyghbrm1HAHH7kR39v7tk",
  "key35": "5bqiksEFC1xc2ssuSFR85m4YJ7pUtbeVv5yyKda5G1decERuwdeTffCsqHp6JWskFAory1eJb2ErmgxcfRK4bvyh",
  "key36": "4VCSSs14vr7wnb4hVCxGVabbqNEE7cW6NkGWH1FsUsT5UFLzkLNvpDcAizyuDsmBxxkVoLygTFTVmybuxnV6wPud",
  "key37": "2y3L6xZoT2ZE83KaUeTUnxsiw1ZxjsyEXQKvVn7jdBSvwnQySJTFiAkgShubucw3CUj1eK1zGfZ8tDgsE8UrWaZE",
  "key38": "59gQKSGE9EMeJjY1eHHv5ymeC2ydeB1u4UksdPLYVntGkZe2SzaEZQCsxPBwBP5jkgJoMAxB1kuQjb3g2SfGFtGu",
  "key39": "5LochGbCPr1DVUteqL9WfjmVjujXKAhfztgGb7XmN9up4SZQcPQKT6BXcJDv4H7LGujMmtgZrM8sKrDv9B289LSo",
  "key40": "GxC4RXszBfycBesV68vsDtMDn1HRynNra6bG3VGgdsTjfTHKaD47eC71R3G5pzz4vwTbxEPNbiWtQ8v62xEkC3s"
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
