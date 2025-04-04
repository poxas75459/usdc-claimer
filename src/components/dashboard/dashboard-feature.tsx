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
    "4m7waXftefLBgZjQb4ght6cRDDvvjU1soEk8T6ozyFqYMsUQ9e6aaKeFvb9ZZ1CAZMyM4H3kpkjVjYAgGV2URkCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ndV2RPd9LCMbbtqPf414zDA9KwhfCGFnQ1fVoUvPRc3csPkSSo2MvUcBU3io9NzuPBegZncqFJDSFtezePc8fYU",
  "key1": "6pyxcnbsmr3emktwWpvyrnB412R5zRxi7QgKKPkcidJbdmtRSQ7vKDiikzmrJSTfx2ULzL1jHjFxG5XiQ1tEZCD",
  "key2": "jNLDBZUJB7monoiCCRq5SwW3sL8Vd2oVh8asv6tmnx6WHz9MkCMcakiB5Std24npD4N8JaAxAoSSdBjv3RzB1GU",
  "key3": "4MsSuK9oySXzwDSrZALER1m1VY5uL5CSLwKVnBorqi8kiL6t8BUfBd9YNi73ka9GJdPEiVmEFXSXZXkHQxV2sk6r",
  "key4": "42T2jG3r7avXnLShAHYV2Z69Jd5d2NA8PA5bRQRSakrRXE1D39giaa4V9azpcjUx8bEB7JDUHHF3mGh5jjsXMK9M",
  "key5": "Jg6LzvUaoPv2BdAwAXJ9JokNtw8kYHVXN9qjCCeUq1LJK3MVEt5ejfxWNzYb2A3wBBauZFdFGhFBJoVzQUWRA8K",
  "key6": "4guyvoq9boPTqFDn7yHQZ67VrnDXfmQAWAMWybrstyTBzK65ocQmgHy5axVKRAUJpqkd6nEDzMimPnbMa2vuBCMb",
  "key7": "VbXQGC4iH8cTDPG1PBNqZDnBy71CgCkQrtixQxv3CZwyUMFAXqyXmDQYwU5bmrW6Vi9JPSFJCL6yWmYiFrAkSJL",
  "key8": "5ZggPrAZXyhAjUy4wFYzsGjv3Qp5sLYbbdxg4if8oWUiAFudbqt42M3cEXL1HKrMMRtmaYTkMFCHybz2P8TRvoLT",
  "key9": "2YRDPiqzBZxEc4rdAjndeNFpcuJkNeFoCkxsr8msav4RkiftX3k9YEjYPLktxWqf3m8rkGmkdbEWgRJw6TB8XVos",
  "key10": "58zYVtUThyhTe5LPYQp2a7AcqowDfz8fAcpBiSUEDvVVVED6y3SGQ3rv1Qc81bwzivmgAeUwrXoGtPBGnpPXCht2",
  "key11": "ehrEqSt62aEcynPv29TdFkVzFVkzi9wVV2vSwjxGnkGoqyj1nseZNwEBuNJ92cQwazHeMLGUpCuwPf49q7wi1WK",
  "key12": "4GuXesPc6iBuMDaptB9yeRssA8Tx7cyuXbR6LXzK8UDSyGYfdrv8opsmXzd87JhxMWLQiJhVJX6DF7p4ojgrbfiJ",
  "key13": "3MQFWwWhNpryfGj92u98L1AxGZFvf81mZKnryS9LNzcgwCmkQfBp1ZGKMKRxtsFcpixFNwy7ZHF1U4XPGynGJgmC",
  "key14": "Q3hQkdzSJhXViGyv5LhsPgYJAHC8F3anKGCkyesZyrcgnuA3AiUpjYx1uwc8CWa9VeyrdiLqmcJqMqoJZQaeXWZ",
  "key15": "bopuknpH6PJLDtMSkK12hcMMTRwcW7bn2BEm5e3xHV3QQhrzgpnbYKeefuzCXxnfE6s3tUWWtzxXiT5e8sGHb8G",
  "key16": "3VYK1rbpvQoy5iAQHhS5zu95DV3BhH35aWwkq8jwwPpGeqgZLowVnbb8f64vp62X2TsTbqDBrDNs8iAX6qSCxEp",
  "key17": "3RYNFNUec5VZ5mrrhgS1DGX7kTisHaxZRH2UshxbLnr9CGp6tYuq3B7akek3Q3iipSAZNuxpzowhCTyxjQAHoPbY",
  "key18": "5d6NJLrr7LwpNk4yW8irN3gj7wtkt5dAgZMPxMred5jFMrHdPkggZ2ryC64rZaVzuSoTJWt2qKB3htq8SzF2Dfdz",
  "key19": "4idgFSEM1sAy2p75fvb3phuLPdVFc9QVZ3Um5oNxVe8gy3eNhX1vHDWEf6usLKMMFb5B9rBF7ayZwYjW9FVqu9Hy",
  "key20": "2TtdM5NEv9Qbyce5V5dLMnk7GGgNBLjrRVUhFsAKzS3kjhdSiK76QFDhEiriu57F2L1CUZgBrGoGiT6Ka6JYLVNC",
  "key21": "5A65Rmr6Mehc5u7tqu9Y7npdAfPmFHrtJ9gntL1hyBcPKxv2kQC7kd1GoYDyAY9yxs5ULJpaxG8Kv7KYRBdAV8Jq",
  "key22": "4yyS4GjtSEXQ7ajxiPrkLbS24RQ6CEu9Kz7AgSSCksj6YYpSQ77EJciHRoSkA6uwgDXWA6xDrjkU3MphKmLLSGbt",
  "key23": "3Nz7Yy74Zrajpgz8RZDuLh4bjqjko7BDdoQw1UPKGL1AGWkLpDWohftcb1w1aJqksCa3rTDTNEkkrSE6THffViyi",
  "key24": "29ueVtxjxucNbLc2n4LUUgairP67fFX4PDiQnbcbzZpKiWVigS7gsXzyVHhQeTFDry3pmPf5v8EqNZuiEnqSbBBt",
  "key25": "61cFyJCxtPvdVuj15jyf6KR2zKooZCtTDfP1rCGtPG2XXdRjjxK3jwrPfwZu4xNCVfxHKWLoSjyh49XryE6FY76e",
  "key26": "3cJACW2QTFVPMLEz8oKshRTwarJFyKVB9WcGmDD2XwAswkTvMThkd64NK1bTJmp3wmVZuQ373muLuQz6T1eMeKLv",
  "key27": "MjPnb9DtjZpvJTVNYJFQA8XLbzEcNfL8QgMWwq5BGWL3FDLRrzRcKCkfa5nbFRkHA8FpaPb9tkyQwViLWppMQ6F",
  "key28": "5t82npN44airRNdtxzWhuvq8w6yQixa6QtTUHkPY4gBZ5GTyJWxsa4NHSZPRH46xnqkSzEsrTtBNojZD3i8s7k34",
  "key29": "uxMwnVAjmauknKpoy54TDVtoyXLkwwLf4mkAKjWAaWMivsFn5kGwVKxpPwbgJrSohdRSwxqLHAcnZwCKBP6icxu",
  "key30": "DqNYjGShr7RdFFvJDQCpyLYR5LoU3qW62htdQPeWpjrTxNiKyowzMUQLA5y32ZECHLeaUfJbd7dU5a62vAVP7et",
  "key31": "5R4qzYhoaFVLj42fT1svcB3WrBqqirSEaK4eGZnz6LSekHm5RgTTz2vdU3RkfUi561h92tyyJVVGHhNyhB3PwkNq",
  "key32": "3J8wFJovown6enjorn5JaL9gHkRjfiV1i9ZGe5qBNzQ97jvZu5rGCwhrRXgUCZdmEMy4ao3pTTmNxrq82Wob7Hvg",
  "key33": "3DGzxDaR4JXBfar81H3Uweh1fB9Ta1BUtnbfshZVyX3XyzRh1CQ1R8iZESXXZGFLSre9Tsjd8ThcCgPvPCuVDGWp",
  "key34": "39qvGtjs5TMiM8bTW3UrAnyJuXUVo6ZNXCDVgMoRZLUwDMokw6nTKJp4ySkg1ZFKexaEyFeTZuqmjQfjN6tUNDcP",
  "key35": "3XjTpCTgpS549jf3V1JWF7LaEts5fYh8Z1jAMtxNeTMYqvJjwvXPFxRg2H9dRDfioJow3bVNFQVid6HrNqMVvDGU",
  "key36": "2uHcnYBf1KEKqz2auwiveE3Amvvj56NctjGxwAYVPYRWpGSuDrtnRq3D9qR9K5jqcmeHzvtRrWrBwX1v5ZxoVKGF"
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
