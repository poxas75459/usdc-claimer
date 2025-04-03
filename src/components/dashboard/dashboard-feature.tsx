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
    "3nEkn6QutSQivSESde3PdPQmXdhcpv8XaHgy8t6jGpBmRyNH5WmMksEnCVLcUwLrpT4aBzHAUmsVACEztrhnk9Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWcDbyktQwTcuyTCvLyB5oJCYwjDsESHL288dniWUjRtY3Pyn3KpmC5XTkY9fNHV9sPTYUQNmPBRwgwYiYD7BdG",
  "key1": "45QiTVGFXWyvRvhxFJsJhesUbdYdR8GWVQ4UQddafS7UX9E2mfwSc31YiwaZA7WRALKXt8wsk2TMijJxFo72Za8s",
  "key2": "DRdnYor7CU4SVJQdnb3aBmdMGDx98LxkqgZ4WMbBgbqMNcUVnDgCkAjX6cxQmQG6tN6RtD5Zk1a2TkiBkRtSHNF",
  "key3": "TnW5i8kiXSyqJmxW197civrzaaqwxt2jnsBcQsV3bP86NZKHJ1uWnGrTG4V9Upb7a9xniKCnnRcMHLVBQCKZv9B",
  "key4": "of4x6NycSLgHkE7FGXoRbnCTiWboSmribuQtuSyCoXugY4VLZBTTR7mtv5bQqRqcGQniCBoFD1wTu11QgSVnLmv",
  "key5": "3NgVNrN88WN88ugxPyHZsKn2iz19h2uYdKWr97A4C9tCekU97VJibAawpbRCXYNbwQ6dR57nwgt6bnH5kczmdhTL",
  "key6": "4rCKtm4n6CTzgWwqg2fRuSKRpouuuVCm7s8ZRL9fytXiH1UjK8qSbPhJzxB3SJueVcrUaBj41hcHokhw4Q2Yk7RA",
  "key7": "4FG1c19inBxeXi8ejEyJTDrpchfLzjhtb5dB4NNdw1MTyv5yUtFq9juVaqRDDaYnqkjcgYrzR92y2mJMa8GcKNU8",
  "key8": "4j2kKhTc3nXqKCTqGxp88cxSo4TswHcZepQ9f8tYNm7d6AJ6XKEXWV6RHW6Q4FgjE9asvvW6GCmBYKCQ2N5L6DPZ",
  "key9": "2PZCFse98dFLEegGYhGLwXgz6D53xroh4JR1gQCxDrQ4Nn75Ckh8U5zjijEXN56qhxWuicRmdDDWWfbuUrbFgkRV",
  "key10": "5dTt85Nd3Ak3R3W1Mn12mKGBfFZrppmFpuCmmhGBvuX77rd1q5iXB2gDtDy3mQEYbzdkFoCJH3AJ6gyz4eu6TXKp",
  "key11": "5LgznpgQHQ29qKCWjFvGmGwkpCUidVyE6PYZbGrSW4s7LSsD9fSJno446iKBbYpQgYqcPtLwr4HDWuKqV7xM8QSB",
  "key12": "4PipxuMi67hB64snpbDdSsXVxYqJHAT3syJ5o1GuNTa2oAbaiqhR8bmirohxxXNXSzmmjadJb75aTeGpPsv8t6fM",
  "key13": "3CuiED1RXR61mrkDWzooSo7jo3zZ8dBid6XWBKmRCs1tZQH1sdb6YQJhDAgyRPWM3myzqsHasgaKAiDxkM6oF85X",
  "key14": "3ryS4mdyZj35ES17UT5pyAh9hwm8JombBF3ooihvRWhej66vhvmsQzo6qNW2czw28n3dTaPhxU8LWp5A8MbgXSQk",
  "key15": "4sMHQg3ou8ALhwoQdQQ5HEKBL2ujnS3a12oovCBchuBGQ197cNkUcz69rri9fYkpWZRjKb8XxGF1HxzCRP4T5zEJ",
  "key16": "2fARM6iN6oCEbSd37TzfgBK5cE9xt14zCF6jBJqv2GmfZhATxevKihycLCP4T5Ff2d35XJs6njhuB9C5BCd6PbjJ",
  "key17": "mS72RH8srrQpfqtBK2jESPha4G4ezaRWc1zoCTHWKbnTTobUTZPxwet1dxcLSE4kVonNwmDrzKtzvAGLLsTdhvF",
  "key18": "2VjRcjzsMt1HRyBxNAMShy7aRWQMVDe7w7exRKP4hcgWhg9KtmmXRSz3Je4tj97o5dNiXu7sBGVtdriyDUf4TSGd",
  "key19": "3xQz5bqtoEc6bk2DBNvBuQxUpBjLYrhR8GMYGgsJpB92TKf6U6XmRJFaAncBV51Z4KpJhTDLRERfdbmkxg5wLGzG",
  "key20": "XbZkmjVqoPoJWY8aV4ej4NjSoiJL3vu97qTbsBFVPVHifr9YUaZhxAospQ6mFLafdgZ5baE7h5sRB7kx9fNUYAk",
  "key21": "5qfyzLnfnpHStb1n2K7R2npXQSwQGWaGem7g69NBKWgL84fD9Qsj7yrp85hhAaHAePqJZt6cUxd2kBx6FSrYLGAE",
  "key22": "64qpPFmQsnSwta72YazCmZrKGiXbSkU62TpCMZpCo4WLnG8vAvAwBNYvqUseiWvFA7RiSeXMBgDLiQ4n9wHeZVcS",
  "key23": "65525ccLbPp9BpX8JNt5hLSyCWvQYp3pYNGEmqVY2s9WVAMSEc2SLHF5NqobAKBtCnDtGchmwuZgqHN95djWdUhy",
  "key24": "5SdcdZZZpkXhLua3DsJZT1oeUw1WDRZ2S6kzTNgwhRRWuUsPreJq7xkF8LK2nEF6wWYF1NDWntUf4w41qJurdNQu",
  "key25": "2KqTx1M2XBD2dfcfcqtXa33WvZ4g3xuj8ngwgobo3hJFkcJsZAknBFa7MBfYEEEneRjv8YHZu2PduxjwVYc4Vj7i",
  "key26": "5F6jbqHDd1uosSiXnvaXQJX8MHtPPnbCv8dksYVTSakJbDB7t5CRmHHVWUFUhZ1XuAvZzP3NMw8w3Law6i6Ku4A9",
  "key27": "6MkEZSuke3Usr35GVGkjY2u7vYrbPQnjVMwjLS6Boheyy5VKwFTF3on5RrGRwwB57irwh2GqJntxVzuk7fgUP3A",
  "key28": "65ys9KKVQoLHFF3yxgtg3Wpq3bswq24rGDLfdwkxYXNHHeWja1eMcdeWYtsFn9bdtrVhvx9C1MauKGSc1HkxSXP2",
  "key29": "3AbjmoxDAKJNULvmYQaw9TKirN5p2q8GaaiKYhc438CpeJKL6V3nueVmSNDzaeofM8YUCNoaoc8GnRdLwugHVypx",
  "key30": "5vRvS9BcxrbGBVticEGP8UDXH6WnXX5k31gNpE5cybVLDnV3skPqpEtviKca2TyytppW6mJqEwioSTBAv5HK5SyN",
  "key31": "9c1gvgrMWuZHinNEBg9UYeg7QNrJyTdApYeoGnCCBn4nZBEGeofd8TvKRFrU1MK1t8auYkdgbKkqzhK58dM5zbV",
  "key32": "32eV8Q8vpkZLn4Z8XC9AmQa96cEFhYj7zrQasr7LcxDPNS3vn2TiebPUAR1mg3wHGtDkjk1acvkCqPqyHQqJnjXH",
  "key33": "4c5tuaCxoBanbQQfXF62DgncPRn6QULxLMiXYfthQx1EpSX3cowdRiidRDVqB2Vnm1yZ41LtNFsEmaz1nzANPfQH",
  "key34": "4P38vzMAwJsBC6D3KVmyBe7vgWmUCi82zzgzPP912zTJYnLT7CoTKewc3k8uyCiHR17SEcnvPbzDtTcAVEJiR5yM",
  "key35": "29Pu5hdA7ytVRxwi7zD2KYwrzR4tfEms7yz3Dpz4ACAWxxRpxfZArG2QFUH8X1jPF1fhE9X7ALaDzsVy3UK1tNAk",
  "key36": "5fYarC314B9Hyjw6fHDZCZPhFRxKPfSBkpN4WcLnSBLRU5pCZniT6UUCYTJTCZiP9NxUGMvb1c337VYtEyiK7n56",
  "key37": "4G1DiQb5aM9i2fTpe8aDv9Mgg6udH7hsJHNnFspSzq4LZfoVNMKEuPCV2MwxdadpAfJXYtVoK7ixrU8K5gLS9HAQ",
  "key38": "VA7kqbE1PLuKkKB2ir4mymSRpGjTTasPCH4b7xpu3d46JGpNJmNNHHikjrVbmAGUV4GFrvKS35JEMCPSgDTHVUq",
  "key39": "5RKSyfG9oxf68WsbkoaXmnkPWLL2zAHnUywu9v9ct9pWm5QLyHQ6weqjRZaLunVFFCi7WLXGoM3unH9H5fBMgS46"
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
