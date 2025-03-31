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
    "y1GzoDa3eqLzFZB2MBot7z6SWooyTGxeyCTQUqZ4uCEurZLsyTKm3o3gAgfzxULYK7XTchAu9aZYBA5MTYgcxym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qttm4AXBee3iYXeXa8MQ8NxNcP4wyR2vps4o9Z99npe6bh9vy35jbU7UUEZgjNvKoq4V2cfCMdVJixGvwV8PgNN",
  "key1": "K9BojmWonTmctxasAg4jgYzhG3G5XPuQPAUyYN9yW6pgeVZQQERB2hecxMbhvGZZfdYo3JjmBWr1JoXrX8Z33tk",
  "key2": "4N9X29dLwu3K8gJAPrJp1RLBgaBELWZ6txKPwgGqELqogLJNgatyR6ynHionrdscGUH7YX6H5jvFgx6Bn2fXabwU",
  "key3": "5bmgzPdbHK7eqUR45mmYdfXL5cQGWjjNFEbjybLK8Px5AJedcpDLpWMN2ff4mMHX2LemipBFkFkTuvKfGUc4V9Ld",
  "key4": "253kPnpNEh5oCsn8VN9mrNz6F2jTeoa7j1aPN2KfACHm4wHkZk2toLzBuhDuaabV2BJRNqDqPcbNRwrTex4ocBtB",
  "key5": "2qU5bCFsD2HCcu1qQhN1LtCrdntq7hwBAaeBRjLezQDTFa7ZQSfwSi6hNFhqS9Xfit4vAkwGD57mpwvcYtgqaNq4",
  "key6": "41Qqb9WMFURgTibqVigHFy4smUrXQ7LwKsNNXHDvFC7kn7Zb7iLynw63KHeNN7ShXMoghtvyRuJb3gk9vCkySaEw",
  "key7": "5hChEHbNsYsCh7i7wDV9AhHk8hjpHMCNo2K3BLSnt7451Br2H94QkQLoHPPqCtrZeWaRbcTbMTfJDNbsMCcvuyvE",
  "key8": "2XhaLkrtmymST4Lj7ytVkowFG3X7eq9WLc3JPbxetxxnZSRXTiQqRs9whPPnF9A5VgADtrh7ak9nuFBFaVV8cuo",
  "key9": "Lb7sCSrfmSiv1cVxDYiih4wYT6Wecp36GgHoWQWeY5hASrrd2dRK1hz3fw9Kx2kheHAR5HrW433p95ynN5QVYcM",
  "key10": "4PgQMNqsMXimRsaGpNJAxYK6bh6P5WcHBkrummmyR2EirMcuF9PjY87T58SsSEaHY7qDuMQFUi54uQTJWoXZjfpy",
  "key11": "4PcHX6GiTaVjmCseJetsZHHFYMDwn29RPLoWtUnXYXtxA1xxgt49ZAo3xTTyYKMN85YkXV6agKj8SFo1U372ptY4",
  "key12": "526PALQny5Ap7FeWRZbfjvSdRyefej9GdMU4LCu5TTPmMQFA5K9CJo5CLosjVc3pgEkaHGknvxjCeN1c9YunugGi",
  "key13": "2HFcw6BCjVeFp7CyN6oHs1QLiXMPiciAgXKwvpA3AFfRbLJLDKaymCfvEvKKDjCnwntfdQsHgXqbEsWWSKerUtrP",
  "key14": "5qh8z5aDr6WVX6vzsibKdwQJSLxNhmyEsmvVAGAf6m4GArQYHnzVc5wZDrRbKbgCbFFtRftzZrAZuDM3k7W4z6dW",
  "key15": "5XygYPf7gvndRGpZ23kVawuGESFEVcYsYmGLtcs7TqXRXL343ffssFLLGF66t3hhYwKFcaBi18QuQgVxPnjiWMWg",
  "key16": "2xYHXrCusJFhceTYKcK3AwUom2cRu3wBdBgkQHFh3EYocXVgt1TjCEJJ92pHGLhiP5dm1viwDh8JRo4TVbsVNyj3",
  "key17": "5oEWc8SPFiRPx5xFzgPMgj7qrjcYJ4VhgsZeFGqj5Se7npqakJhuizPpTS83jxabPEtQsVMfxxLE9NgdDG5urTga",
  "key18": "5uoc9qcgBNGuhd1pJdoHVLf5SWaJx12x5o12MsTmrGN6RAzjrMfU2wyszxUrUermc2ZEQMzUMWsfesd5XFD5Y2Ps",
  "key19": "3BoPWDzw7rkJkkoB6FoRY8d1MM598BYMXEzDajNuYfyPSPRpAouetyGxwDnABBMPvYwbhhch84QxsZ2Ef89kT78B",
  "key20": "4rtVsNWnPrySRpx7Hs3KTs31arqpLycHZCKEPvmW7MS5A4ocCapFkSF8whXgirjhXCVau6vbP6Z7ow3hHj7dUhFS",
  "key21": "BCzsBvFCeTyZSfieWEApJc7Nc54QXTXf2Z6KKbcaFihSoRmobu3JVhza4cq3uSaxqF5ywAorjsZJJAX2x6Dr7BW",
  "key22": "4VwzzrMBB5jCU3xhTeV4kFaC43FuFi6no6jt2WbjXhGsEgqmEgzUkLWuRfBgs9fcEyfJbssJheEtLz1h4sqfsiQT",
  "key23": "sA2cSX1vDtzUrdfHY7YAk43EvMBzUVHjPzFT8CW4fa1yhbgHoUntFgiN3vv5KxgLe4d664aZ8vDtPLMHQ3tDnrZ",
  "key24": "5HFTWFWMmeJN9w1rjHhTz85QYypADEAj8R1P27QzzErZPD9FUG5dk9iqbRDQ2hHyVricbecT5va9E3tviYh5Z4L3",
  "key25": "21yzPMjYL2ZhyzQ5WjPiUKjA8Uu3YcQ8G58y6Fqp1b5Qfcm2QEZ5zK5oGE5g3fwYLeZh453bsG4wXJBR1ZobfPUx",
  "key26": "3N4EoxUiojtUpUAkDiJwubPWAn8Snjbjdeih1EYqgzWi2v8MGhhxoSwqxh6iwLq5ff6YbGwGLzP4QX9VLrGAxxdx",
  "key27": "2ep3ntBmhNp74P3DGdNwv9w4WwqZ9uLjEw1hpF5Tibh9jiD5ivTBhak7m6sn48azBsh9SeVsrZPrwwuBxFPjVYER",
  "key28": "2wS6ggNuHsiWffre3JisW77dssJsmWLvXitZG9rFCfFt1YbH2iYbkswvjLEDnxosptuyyHWx7EEL2dkJFoSJ2Aa6",
  "key29": "5dAXf8YXWK7ufaA4Hx5gehHPu4iXqG9A3g2xJQvJEoJ26yKHT9yzE3br34sCfc3X3d8sY3x8QdtkfoBgaiAxP3xt",
  "key30": "3FUMbKbsgRwqMRfh44g2aSkTFU4ZMArRCAjs3Q5X9xVYrDWURwCx2CsQMAXCJjy7i9U5j7N7CrdiUiLP94DUR6kK",
  "key31": "3bj2RiCLhix5JqxBN4XH6syBKBN2FQvLXECcWQn8dwExcXAt88baen9aQyu4gtHpXooBzushjEUXC7SJwqigDJMe",
  "key32": "3v84NKjdkyfLcfxcwozXixWTXcaNto8hBH9Mb2dTuQuxH9geDGGB9NqVwdUBRKM9Km9Brnr5cxo1tSAoe1Pe8ayP",
  "key33": "23J3UcWcHYevZroP7d4ZgTpmNygUMda4ji7J3U3a9QKYX1LoH2eG8Q2NYgd5PVdU5HwhctczJUWEDJ68TEvcVgsb",
  "key34": "54jKBnkkXwiBQiNQGqQJAHmuaAmjBkUVbnoyEPmnJ3ZXJjoX9PbdKVodmz6At5VTLEhdtj1pfUjqXzXw4Jj3ndzk",
  "key35": "5zeRfanPCMHwXB19ku4xZ3UzHabthY2WuqHcvskc2aYA1p9Dj6x1NWnTh9JzYgs3RLYxE1FUe5AnHrLH9uvMRcvQ",
  "key36": "2EC7exrFBKFj8pcKC9qaMZMuHLCJddVJGEtCTLC3o89CxxjyK2VGLNjGWgCCMdvHTia7TTk96S386HTFwgrN3SPP",
  "key37": "5mNBPFCie1EwUBeLqf8qiK5w8hBhjc89QqcRTF9QCVsZSKeCKUbYmrmZiu2pJbT37QwvF32vP897k3rwt7ShbNZ2",
  "key38": "2vTeaEsKtd86vkz2qWe7B1eZLeC7X3LRp76mu8S4qp5cWp9QJT3kmv7ifqSoMbc7EWz9znyDdbwH3buoTHMPZa5J"
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
