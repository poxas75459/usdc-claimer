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
    "4aGU5v78UCdae5UAptFKz2ii7ay2UgAoanwA3HirBNSsKFNVNWmpcWww9acj5Su4fAfm3CXPh7tY7KjCuC667aUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yX9DCNki4WmJLbYyXDU8GfBy6iny3qUpUw9MwNhdzd3XSTmaK1FZbJky9zZAB63JZmRsa3e3FXk4bQw1Ja2Msk3",
  "key1": "4HvhzhprV9cypSrFCq25n4PFdeA6nrZAFbiR9wYzzSCJpW7CmkS43KBUJcXLxWRtrgkp9k1ZG5oJPb6ZFPgzHYff",
  "key2": "5snbNQ7Hu3uNtykeAFZAPMTc9KvdaaunyFD4GeFkUY4qyaPzWHoPwMKqGi9ycG6GfxNn3xxVnhexF5XX6vW4h8sw",
  "key3": "6RvWaC2tXXtisrqpKgEUfLCUqwYiwtSZKcRQRsh6Awocw777uwMmbuQJfod7iGuAEKgjLrdqnu1KGMuhAuVBqrW",
  "key4": "4p3qhYnqRcJVePYtHUiwCBbfpP5gxGmyAjdZbchBtgkkGd2kANSVrSHCsthYB9162t3czDEonH4ob9NurVEHUagE",
  "key5": "cReLF5jYjncvXGXibQJzQ1DNJjxWzZ2VbZJ1caeXXV7EQkkaN2fxF5wiW7gUUhSmge984XRwkmiJdVkZApgggSK",
  "key6": "2JpFDCyPUQ98Q2VdCR9dFWkEcwgjZ3sNQqoiMFo9yng8CJtckj7wKtmXojk4mzDBpQnX2ZEmAkuTvQGa3irbSFgi",
  "key7": "3SgcfS1emaNujiZiXPfZCrsitPc48cWmcZ4FhtJAeNSmDCsPkoJ8CWB4AssitWUUpiMHoS8Yjoxet6vaXPNoni6f",
  "key8": "oxyQa3P1ZWoawY8E1bk9iMkfRFhozGsGKLpWQQwTx6kpCW99FactrmHaqozWc5FHk9K8gvUFLDHY9iCJxCRkFAr",
  "key9": "2HeBRSqH6Ct3XQ4FDsbcv7ZGeyuK77z87K1A9MBrFfSGzQ6cA3QoUb1XXQz1PHnPJ9hpeh4RWPTSTuZTrxHXFD6d",
  "key10": "3qN59DyajSm4MTjXzpTSAhRsftUtuKtK9LaqEUnwfrC2N8ERy3t1YVQm37ozauV7L4BGB3qJAKLVkAs6KvmyVtnv",
  "key11": "5esgwurGHX3QYyMRczS3WAAGkv6qpaCG6xngJg9cJrQAR3SwnfMvoAYtPDtas1SKLw3whbVkPp86Yd8eQAgJoV2g",
  "key12": "2uisPoaZQdRjrvEk1P7FCRcwyESFoKkAwR8NUNvbPu4DrYniSS2AVyx6apyFXnsq4nWhpJAXodRrtYMcYPVPQDhu",
  "key13": "54V4Rz6KrjDybwoftVVMs3Y8MwWwmTqKK5vkCEJaamMLmBhMMxGR1cCEfzXXCuT7MKy9XyhLaYtfav3kFfMJ3oLw",
  "key14": "5rRWAtV94yah1zo9HC5Gx4TRjokpyNgWuchYNNgFoSE6dF4X28HsuyrSuwyjgdxVPU54LSHb69V5qsNLf74xnqyW",
  "key15": "5BW8XqnFmMXb4DvmzfGw1SLQ8TqDTfX6JAUFqsHZWkxa55bE8t2cfydbhqxENRWVZCx5NkqCWPv5NaLZKbovA422",
  "key16": "21GQTGbnBEfCL7WtaX4nGHLASV1eXcxU1yq46QJD4HRKvQMxdHYodrFR7EQBGaLXEBxEkDhYWxVUXWCUVgRwYTE2",
  "key17": "4sjmSbvE3ux2cxbJ9gewkEhYNwJRvum7XW6wiZTaAwEH1ch9eNmZ6rgL9vzQjXMVYecPyjBWQxin1bvLXcr5nMqo",
  "key18": "4rcRvY4JQwMh3NZaUxnCEZuAULoWfhtmbVgrznyAuuYJFs7rKoTVECTdx8zqgHEPbNi3tKQZZNpNT9uCXVUUEJ2E",
  "key19": "Er6xPLQDbSRB3BnvD77qneqZVkKutvRbbZLXhB5qUDxgRtEt3XnToaJiDG5XPq67o4eGo7ZuhHz8iRgNbpNtwbb",
  "key20": "5sY54pqGdRRHqHW1eFoPsfVFZGdWdNfKvkZ6YBZZbRAWvEZzHRXXBLdYEqbkBZ7dZsUZnrm2veo2jStKSDrJ3Tzy",
  "key21": "43XMuZapT2zMmQPGu6tbbkLaCuPMZ8tcGJDZzEcbmN8UdpTUC2UjExUsouzcyeMJHeEvCtVM91EycQdkZB6KZhtr",
  "key22": "2zjCckxZQt51xpXpie1KsoGJ1YLNweeaApTupc34Wo5cik72TCj8nt1qUaLdE9Lprt5Dm37oZLUFjtAtZVJ3i6jg",
  "key23": "e2apMpAYZXNxL2XPGxE45MWEnexzAepnNNzeJGHQaGvbTdiQFzE3nsMypMqT4iqysho1fsJtEMc1q8bJV1de4h9",
  "key24": "2timxNEiMQbBfLir689Nj4iKkKFba7SYLdEC1nEAFHka9zpWGTitbKpihs2kBLPEgJSPGhSYnCEkcUDwJksNQU7e",
  "key25": "efC2aSFvtjCVWe6f6BKfVPHde5HCR19yHFVg3SR2cKRpevpN5gfyMiCLURHXpiLkvvj31CiPwmqVHuiTzEFeLb1",
  "key26": "5Ua8fHwB86pges4FC4ZramBQb2DUkGCLZyZvm5Sgp6d4EMFCV9ea9VYmdSyk6K9BfbWXX9g9iKaSMZn2biBpzgrW",
  "key27": "2L7TsjTqeegJjAETHetrSSrSiVijEdUfwN1p1N1UD8UUjY3MVvxSsCFyMQW9w6Qf5zbNnCKuNjEc5cu4VJ9hMmFt",
  "key28": "3nXfCfQxb16MXd9VKgCc8ybaBBDc8FSwpnZkL1xXShd4kz4wcpDbDGDYzV6Edo26A3u9Crw1BZo5KUoDnQLt9c5C",
  "key29": "5VRjAMKtptDyNCpjbkZStN196yc7MZqiJvWc7XqJ8KWNc5chvDx2KYSdDELrPqALum8Qcfogig33hGGKNiVc8L7C"
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
