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
    "4sv2WdEpNhwc5SKGFosU4TkDzeBz8RoaFk3rxU1dpnhTjgGQ6wuMyADxUaErXBv6bbQkSSH5T8c6RecjGsNfRtdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kmgbyA2ZSiaYcHKboZGjWa3fNRBbiRPEhY93XRnK4tRGw2jD4Goyp78kH4NVywGCXd5q3KJ5VT7CdtYp11GC4yY",
  "key1": "3zUBhT7QagtKQjq9n3sDm3DN83b367oXo8bhKkJGsBfTvopGdGZMZYH9HjLMERU7vL1EumezmA4TBTJbTQkBPbkp",
  "key2": "2xVbycvTAkUzXbGLdpk26UmL91zL5QxZtFU2TJYdb8Q6bhVjqzoFG1TSMUd2ydcbKhMBuAkb13jisFisFwQqh9zH",
  "key3": "3m7Tez5VWf2fPyt2qmpZp4BH8BPKn9PEBta5fTyj7HpBwy6fMMQ5qcHgpA3S2buY8Qk9BPrFeWRRpq7of7z4F8Kc",
  "key4": "4FkdWv4KwR3DaLtLd9Gd8fjYz2PdGYGpGpmrUdrmrdRvcziSNJCvAvw79WXMeUN12YRJRohVPnkLodqYm34nX6qG",
  "key5": "3FiKSkbvA91RenKj2FEzCHNnMreUHV4ioRBF2mXHW4hLs7Bfdf5JEoVQQeEoyXmJ9XwJDYnW9n3TdDzevG6Uu3Vm",
  "key6": "4A48UPKWmezSUXetKffdzFwtRcpZwcGG8KaDVhdM169J83aUZvddzaZbcDH21jtkTnorEPTWR3vPxFfv7ZwzmMkG",
  "key7": "38H3xvvmwom8x2THay7M8exjVBMNiTgx9o8QsDmBd2B2ThrjDegZ2n9NupRfV5gP2dD8kjyRkiNfdMbtxAPueNtB",
  "key8": "2re2UhiyXoATQaVK49J1e52eokKngoZdj6XaqTGGXt9DoX1Fye5bLUwe5FNq5ghdkTrrxoT7oUXWnqL5y7j4mydy",
  "key9": "ZwN986rDy3QSRoEjkTBQanuNSeiDzMGxX2cU2Z6HbUEsUbjDneoVW19ZoSj3P3WdjTE8RA4UjYLRfxEkQwQLXbj",
  "key10": "2s6wUkV1w2zcgyTduN9kz6URMGyn3LHPU3NYu7jtj6vqj43yLM3fFrb32BS4j7T7f2Hx2VrNvmsWM4iE3S61cJti",
  "key11": "GPS1YKZy5c34YbcqEnRS7RyUwVmZM7o8Bw3yF5HZBwraX5JTiEZSiEqVsY3Wktsv2VKkN5YgmRdkh8gwMb4Zf3x",
  "key12": "5AdUeWXUBzYAnmWdKFun6jAqNpqKd8x13TTThV4BfeTBKbZuFioUtsU6UW91hU1MXVRgfF9rfPzWFUoTCpcJYvMq",
  "key13": "58YZRmr3XpdKFMZ76xVEW6ksqVsEzw3vigfao7cw74QwceCnGSoprgftdAuDiZ2cNYt5J5XwNs7WtVay2beuP15Q",
  "key14": "3x3eXARseEqWJAQosEk7xm5D93enrjC8o1FP5zMnBZfsFCQLRRoWhb3CCka8S2nHHszDcswTcCJogZk43F6ed4Qs",
  "key15": "5b5keZrsK9rbpLfNmFaCCLYs6eEV5MLxnzbHErjeVkibSsFtDEYAsN8ddX9EHSt7vdJCYYaEEqAiMEmJLGtzLwai",
  "key16": "3v8Mmn4TGXVFYTtYfU1sKvr9jS3W8rPFg3ed9PddwGtCKX148FKVi1TGhmnHCg6JFE6bFjbtDKMfDKao2ekom5NX",
  "key17": "2ecpY1ZJPWmWsZa2potyoTrsiqiwXMjHAi9ZoGW8jv39vtNC3donveLC71zEYUmpaUFEfG5YKXMZEYbxYpLRRRAS",
  "key18": "4HiNjLo4LgtewdNgz5FGu3CkcgKvWNpushMc5brEzZ38EZRzGB55UkzJcALEDPSmysgk1tzRZGEvZZkBC8kaMyuW",
  "key19": "RvmvnNPpjQNzsDZBb6tqnCx1WjHw8TEjoQhEDj5asejqmgPVKdQLkyc8hZZSvCysiqR3K5CUqnALxyH1VfsGxTg",
  "key20": "2tPAVmC9gSExCmzf62vq5tafWRNiobGjYmzGqeYfYokni33NAbCZ19u8DVs9FhYZ7YD9k1F7nbyRbXyQk1tKztoZ",
  "key21": "37JCHgD6ZWuHsfgXsmhciv3LUe61thXxMdpdACb8ss21srAEisSVRw11MzAZHb4VGPNzy28RroTbpuFwyajugsdR",
  "key22": "3dsqrAoNaUkz47ox6uWkCmhMeMJBDdHUsVTNUrUeVcHZEBUb6cXogNRRRHztEdnSNTNQFCjPeP9tjAFnrxcucx42",
  "key23": "3V7FeY31CmiquihjAutxVWdAxKgvWwJx7Mj14xgbHqbHb2AMzin4CzXp38hsg6ozXePzc9PEtNYcPBuiVsHm4hcG",
  "key24": "49dAxNiM7xbhAW52HS8CovQrqcC5hrzubaNxhkEisXoggHRJU4Qxq7MziZTfVFcs8X6ddwEafZUqHfqBHQMRzkHa",
  "key25": "3QNDS9FuEQhcLQJUdNYtgYnoWcHsVa5T8txgv6rkXWuahaViVtdQwoSPTENwcATRJQjxpQV67cByPUAEfAnUJbf8"
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
