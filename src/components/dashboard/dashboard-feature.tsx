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
    "4M82z55EbLKeSk7SRpbE8CFfuhGfnTWXhABVQd1EkQgFwi7BARYqnsbz3eYRoWsV9KUFVpqV6yXK891pizJcruGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5igrKuqTetrLgKDPVGKNPA7mrdt8UyihyPTjZvjKWPcqC4NQ8py6EQJDQyNrqFwpPxKkfxznVuRqpXt3MShiBZxW",
  "key1": "ekFZetfp3cHbbMWqxj4CdQs4DJmw6DWiNKheyGFDuRJUHvf2bk85ipqzixH9X9Ur5kchkcERfmYayv2ESKtLww4",
  "key2": "3d9F2KQkmWN76M2op3AJpekc28g6r9WMDRR7YZBxJAbEbpJxSZj6eTWZ8ecTvqYWqugYd79ZsQthUfZXQEZV8Ws8",
  "key3": "3iJaEvRKayXQK8dDGKAGNxegj5UPrZ2PfLnT76u63Hdsfgm8rQjL57pN59VBJ1RsX1zsFG9VNuUEzYyaPrjNdyRR",
  "key4": "4f3VZZdkwQX4kfatK1N7Hnm1Wk3vLDiChYhJj3FisrGfy7j2kbUrCrnCUyKpU8d9ndDGQY1WqcBv7jGBEQF1dPi",
  "key5": "2pKvY8oDLjbvDsaRsfscdmHgHzfERxijXpHpBfaVAbpsu2TYmmWNRqYLYDn1JYZbc569sspJKDEfkBunHBKun7U",
  "key6": "2QW1wECa4sa735Gx264EKRtGZAYhdKpPFqGjUb27iKR7AnYuHHuA5gNcHJKskwQymc2P8afYQgJdrU9kvFCmvzHu",
  "key7": "5Wv6tDZWZacgW6coaJPdJTtRirNRd59vtSAvAgwHDpJF6BQJte3X2iC7BhXp4meGft5zkn6Dbc3JcmVZdmVNHWNS",
  "key8": "4h1LdLhRJxTHBtNTm7t7a6eQGwGHuWmcyN3vJmnAwEh47U6StopUCcJJ5r1S4aG44XyYvb9pzJDG2mJASkccvepn",
  "key9": "5C7nMM3p64HtrGhXjFSUaz6GGvLiMpLpCULRk2tpzdSKntqmsVEEyDZgKUfBRy87P9Uy7RtU7vgSK27ry7qQvTCQ",
  "key10": "26ez4Hc8w66T6ALP6wrdYb4cJvk5ZxEn16QiZw1gtKUEXSTgLsyoJjDZS3cAfX2gjEteJKdk6uXXoPgBh9PVExmY",
  "key11": "4UksDyFZ6zjUYDK5tF1vfGvpahdtJedvuH9vzXwZgzTfvBLXzi8NHHmvrpn6hCDy2aZsvtWcJ6cEFZkfZStosrvN",
  "key12": "2Hj8muW3rbGJUzLNjh2xAR6EsxFdDEjmcZDrKi1zD15prwQdEzDPoxZyDCSUVUGCDSJdwVpgozfnCS3kkQ9J9BGQ",
  "key13": "31x3ryNyG61TvAb4b1NP29ZEuMN9wrfhRQrFtMWioqZyuQTgxsbpuk5Gz6fcTw45hNC2p4cKJHexW4VdMrb3TREm",
  "key14": "2hzAPsqRCFNGBszJkHN1dgLYFY4u6vAVmEApDdHnKVaWdsdynA7BsuBQGZe3wm8CsfCrW5QnaZJkVm9zwnBXKWv4",
  "key15": "H9JCKw65phLXLb99KQyBb9Gspywh1h4ikcgFQymeDNXjDUvbmv1we7aVyKEBqSFUAwtkQUKtkF3QCESTK3a149b",
  "key16": "311zitSMquxYbAArFA1fxTm6jemzzAF3oMkwQRYpmbnmxR1Ej8x4ciRyAfo9EfQ5UHsZuYKRzWNHD7UXJPHhcUKf",
  "key17": "3G6ptHD5gyz4Z8SnJLPPnGAbjQrzFgBqzSvnMSE7GUosSjHqq2G9Fs6tcWnxwywnxLWFPmv1DgHGBPXooY8UWmd1",
  "key18": "4nq16rWCrXT8F2oCWc9PCXbzYUvJstPa3Gq1udCTtVJbmcbu9Tmmdn8X5cFcJdqRtZjhmgQxC8jPFVqWbyVdxA1w",
  "key19": "4aTMD7CixTGQYKyNFnEoZYku5TaBBukM5com2TJmoCDnydMkic4cZM2uZhbN9JPUGPDKrVNNJ979rknmHXSpuE2S",
  "key20": "5yJZTC2maWc4ifN3MBRGr3GHBFGSjiMHjXWoAjkgKkcVfLqREkFfiiqDWfUnZ4JjA3wo7kdk5a1Cgrro8NiRsTkc",
  "key21": "4WuvMcYwLhkGRajpXbSdhkHUy4ppSGfxwNGwje6NPstRKivUtPVssbpDGqZiGauFHHz5ju5ibYjZDMJAVFB1bgiQ",
  "key22": "2XFse36YKG1383pSGjd8hXeCWrPkVALXTQu6RRx3gbVParBh9VD8QNE3EabxjGGWnc8R8fDvRMoD8yNH5UkmR5an",
  "key23": "3GA92nDgPmwAAJDBJESMnii25Wtp9EsKgibd5YUkuKsV97QK8zbeCoR5xNs5gdT6jwss9b1GRPs5SLVxYsSc92qA",
  "key24": "5XWhi7Kr4ibbVjNJFPB5mignXS95zSEQ6C12fzsCPUqNEzu6nFgzkciuXrXVfJCREQgaQqcTteomp3WvgPUrPa3A",
  "key25": "4JNmTYW3xEK8TdUtmugSboKKu1VDcU8sAvfkcJhnKV2zjT7pvjstn2m99GUZim9858dGB9qFNf2vzASttX5v8vMs",
  "key26": "3RUpCyY8P6tXu72eiFewVaXHFd3jvkmwPqPNiVgLXrkaghMiewBpYorq1wkuPtp23myinbw1JD5JdRy6mCmf8rRs",
  "key27": "4Jz7tDgcCx8tRqp6mVQXpJMKoP4N2xsmtKfB3soTNG6uWxjY2XunyEVekVY26vSNHJZUVAGSE9411uerbm6zhPxo",
  "key28": "3Vsuccd2ryoLGFtBVbhJzyQ4bNwxrLTUxYjm3KSEFvh3tj5vNjhAsGgBoNbzBv6LmSiuUiWpZWGboSVPhcBNSBtu",
  "key29": "nk7Xgwu3KKmVagh6SVSKKoXgmz5iBX3t6JtP31TNxr2sxR5tQ6gbSPcvMrH8BU9dTERqpBQTaBnvTmV4YWtSfKr"
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
