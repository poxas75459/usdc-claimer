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
    "2DkTeX5CZjFqrQr2YLxH7TZ7byLSUP8nrNbJebZpBf7F7hzuHhhBkBS1NVH5gahz7zyXN91dYRNyycnmXv14WXnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUK85TAbXMm56hCr66MkHCVw9ZPxVLJGLX4RL9nNwjyCvw7tTE1jofaxSQLTR4JQD1roxaYyd8QWSLtY59J4vSY",
  "key1": "4owUEUBRw42WG8kxEUCwjqerPgePozG2pxcc8wNCPYhnd919NyyS5GEq5E7LzuwBXTuxewV7jVe52dhpxgDYCcTY",
  "key2": "2KKEAYJZ2Z279x9ufVwDWSYmSeeZiphGgjP6ovQoye9EMhJj9LEpEuWYFkWSiaaTdWPQQmdTjxotQG5yJV4Bh3r7",
  "key3": "mL7AY5DWTDtPudSiwcWn7SXX1AuX7jiahLPpxCApsT2igSytgT5BTfJM2uuhKbvWxREWQnAsGBarFZDX83bd1WU",
  "key4": "4V9Qjn3MroQZFazQzUUZd535pKZ9HpH6e8yBKu9Dz1oxtBireAXNHwwU9r1Ja3dnrwSNFuqPNGXQJsACwdHXNetd",
  "key5": "21D8aDd39mJ7qHjUnnN2zdexJWyE4YumvsYwMY4Fhzou1k6T1NbU36ijzyQzzALjBo7GTd1HKrg4ba5BJwP5fQ9b",
  "key6": "5TCrJavK5GTsPXShS1EGXcwTuepk66SJ5oxu4xZTYvsjXYwkrqRZRxRVM9XecsVmFZvi735mqY6BQMrmq4XPz1X5",
  "key7": "CXHU9h1r5oEDoFDAYw4dQ1qEEq4NR3FVKaZhsjyC75uJJxoo5dVF7rN6NYfopZDBkT6AjyghyWWaSnSv8PSNvv6",
  "key8": "5Vn2XwgafcYxQpwRz3do9xN746vjaqyTzgnbWtJ1xZNga2iUJLnDdTuuBC3AriC55JAWLcYdzF32PffXCQ7yuGtA",
  "key9": "3VM3fKLuFMsBs2ZpYJcyk3pkC53cwUyJdivhTHWz8cncRU1VmF1BLdxT5i2pSRHEfVCfPDNwsLyWtZ5foboDZBwA",
  "key10": "61K1JF7MdqhwBbb8Tb6CPWuY8tpx8xAeTgTSBx5J7TCy9W5LU8AJdpvbHJE59wKAPDbNjxMr6LckehdfCSybiHHR",
  "key11": "WQb8ysw58Fr1QR8q8tihisu23xrKnAGvd2Bs24jdQEhmgSSjbfGZskny23mjQv2Cqn96xAatK9DVABSryjiV4UM",
  "key12": "4rjCMfQczn2oiFH9AXoBz4vGHqfmb6mBBVJhpN4EaEQgEL2xXkK3wdKda1rJQ2BWt12KPwDD5w32nK8vDomjRHqH",
  "key13": "49DeXpfYSZMeLnSsmyrVoLwQq2BDqNxt5zdBzGfPoW7JiK7LHxnu21NpnYW3eRnH6acvHTMbuswYgNYZUnRLLg9Z",
  "key14": "4s3MZBNeezM95guW4FNqfrQnKnZgbhg7LDCmyfosPAxRRTtDtqvFcTBRrEmZ8X8tFVcx95hoJYjThdzwG6EJ28zz",
  "key15": "5GGquCaSs4hJNJ8eNXvAyrFxYcx2vJ8AceNAs6FmaMDGxMiLYrCQf6USnn523T91ybDn1AtAVMFVAJ77BpUjtVEA",
  "key16": "4gsZ4oHemLAibiDVx5hePewwfHbHbndL6cyWKTCwncFfoT3UrNLE9NLt8qwNAfEeFi132Z6LXgdAfodViXHwNsNA",
  "key17": "TKULdEaaf7ZNp3Nus1M78iUcimS7BRxnVQG1CsHBzvMSZPma8X82UdDfVAATZ1Pk9fFebUtQEV73mockAjf1wCf",
  "key18": "3ZnmTs9gMVuFhz1Bv5Mbtu1TeGtAMXRRui6Q8G3BXYicPQiPZzU5cxAFDv1ZLGwZ31Gv5osteNtQR4QFyscoaEQf",
  "key19": "5RwEe3EwyAyzYcRuc34mS8AeQ4YT8RNbzgSryRfDQMdUzaR84x5GhV8FbBncBduWAVz178fZjVRevjA48WzfTgqR",
  "key20": "3kkVQpkS9EBoT4AAZqrYV7utmsP8ZPpbkPGL1kgRMrV4N5TLUBgjAkWbmvSAdcGQG7diX8gquRtMPdVP8veLqv8t",
  "key21": "4mvp8TypSJaJvBdpQU1yhLwLLMWxZ5YAZhZMpsqD6TFx9d45Ae7xhmjkgu9oVkY9pc7E7w4zJysjmoyVqSzqYsmy",
  "key22": "2u2HfiHpA75GndKMunvxJBpCMovrcgLNvREv19LFjFWTbxFPrCiz13W4U5F3Ahw3kB3j3meCgMMzCjZ7TaPo2b6M",
  "key23": "55wPeQM8UV3Ffs7YadDaScZQ4msZTXuPozpfFRsU827wRc3M7jhKH9tXL532wx6cN22p4v7MRzzPGysEvDJpDeph",
  "key24": "Uw34hU5cqdu8emKkyHSBioSLmz1QB7bPfb8Z1guidJy6gBjZLvHQg9QLR8L16YyBQ7rfw19s8jnm3t5PwnLqtRw",
  "key25": "3NSuaC3wGpUWpjiBwVry5QF9UfGjMprcn9oE3MtLYhz8R5NHQByRPVwX5dA8iLYnL5JpDEPM9dYdQ86vQYgRkxAu",
  "key26": "j1s5YfoLvMbjor5b6mqaeDU7Xhd2swmMDh8KNGW6fgSk8cyTsm4CnM3ey7negQtAYCndRDWuM2L5PD9Snuhq82r",
  "key27": "SRDvVTe2yQgJ71sfzTPs5CKQ3MUQHEmHdb3DNWRJEJJc7HecGkRMygsCZ57JGTc9NCxcVxHAZFGRx4hGSP6DaHQ",
  "key28": "3Lk3nctC3chNgKwJLedAD2vJQGFyxY1h2YzUrLYgGEEDxfHFSZ7wJJTqkdxxLZ5UAaudHBusCRuiD5VrUgkf4Tbp",
  "key29": "3XNWvya9ArVgS8yyyA22qqWMgD3iNh96NiFcWsaCS4wTF77VXyQxp888g4RCC9vGDWrxPwvJmNv3uZFh5mqdMA6g",
  "key30": "5a2JweYzhu8F8Kv2EPL66FDiVM31dYur7RhGjzVGW91gBrgAq2A755167SwBnCzZsi2fCGbS79qd6ziiJLQ2mEPC",
  "key31": "5NJ3V7Ja19fUQiMVvuFXv4cEBSJPPeiy1U1nUbWNfVukXPrdBLGsS51DFCf2VKvtnTxQz5CVBmzKrqmmQb74cdTb",
  "key32": "5k8cD4W27fWkuJpZRmQZzX72FhEpFj9QzFyZmGrS9h4ounp5suZKTSVpVz2bRnZxH9L9ZNVZoaoVsCwzd8oQgiHK",
  "key33": "45GXCEQboXXVErDuRUAriWctHqio3dZL1YT6ZRT8KVW4XWkxAvejnfYa8kZTTnfyrxERMW4R19Jo9Zg3qwa5uTUb",
  "key34": "imYJMW2MHygrDFvzbPBw9tZaLMvbtghYfLm5guxaZAiKPquHuW3fitN3PkgvvUSshcq2BuDvUcw8XmXPkNP58eN",
  "key35": "5cxpYyCtLfSSVmcYt9gAn7Ye5U6K6tSUsiEjdSKCnjD4BPECYJQc9xgNFNrWXDD4LZMVVXZuwRyP45cq9EvSDskm",
  "key36": "4AdSZB7632pFohqKDGcemYq44jRqD7sLh6BbKMdihY6UkWkuyNcGwnueGMxXHj49DX5Ph4RpozrtmNKUxUVBMduX",
  "key37": "2MjeoBfAnQoHoxfWQvdhnXon1tuJgZ5x78tJaABWfDWU5fx7h5iy8qBcBobbYDFRq4nApLXUzWJD5jEeLd9Dgyhq",
  "key38": "KuJxDEjcYXecutqMqf3EbY6WL4Z4zTe6daabC3pnf152Pp6NZPP2NwjoKQPmCzR89XePTLeoNhPUDZcmS1rAEHw",
  "key39": "411ESbZiyXJ45DKrKLyakz1xqtgGPkaQRcr6U4BXxxYvdbBCaKMCcEuHcb96SPFZJ23d9w7hVpF3nMQg3SXWcqc1",
  "key40": "4gYiT7JKHx6YXtt9Ge5yBrNSxyBVvZbEfMaVJHDgBxBgreTsyJcnuG8s29sehi7zGPHV3LmRVAYqQrSomMFjqWCq"
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
