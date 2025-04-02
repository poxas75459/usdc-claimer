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
    "tf5LvQ5eMwhci2Jdq48eHNunehCw3VYnF1zLVxp5vGsudbDuHz62AKtcoREYyBov4BkiMSzngczz5aPNZxJTD2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2atyuoBJ4MaMA8CcRvB2DGhuDBVCYkNTKGWoTke6MKR8M7tfU4xNp1Ugs7RxsWV338F7fwmDuE5jXE2gcHyVW9z5",
  "key1": "6iuNJfqoF8GiApvEx9sZmtGG8S82SLjHzYRtBrtUaNMtAoXZpa5fRdvXSDLhHCg5tSQF8gJVoPjuWE6ttYXbmFR",
  "key2": "64EFdgmB1bfCWBgukLYVN7kwbajf71iVC6AZascCsA59M9e5n1cwJMrbJhBKhH3JzWJiwNeA2ezCvWKWpJirE8Qr",
  "key3": "3qgz9N8Tr1nrJfdHKWzVoN9vS5G4R8vTxHKi1MqA4fu8LrqLqdVooYakpSnDRTJvaB8XvpH2NbxfFxCJitiRHao7",
  "key4": "2nz5RwJFHB3Z165qpRX1jZYrUELzpy4snEjTv7dsDqjfFBhYFxGJDAMYyLCLhCWTw6VNMXX63QZpqgNsRmcqf53m",
  "key5": "zv7kPGEAwbrDUsFeoZ2Lj86Je2eTq2TTZBzjHLzN3QTK8zvCFbYWTHLdbAi17VRCSWvk2mD7i7PqiU5GnudDSwD",
  "key6": "22vjarNXhHEUBqG4ipZDJdHx3Fnm6UEyn7NR8A29yMpGfinek14YQTdDY6tCwfRDevAKbwWh15UZU8j1yiZ4QNwo",
  "key7": "HwVy78fM7yGz6kDaHM9wbSmSdRbmjvaYpJFwpw7d1R9GiMUm2dTj2LPYRSnzhcHeqEbd6kg8yeLxCh6ARtsJUh2",
  "key8": "2URBMCADiuDRB3YZcM1jeNU7CXXznk1sJ1rThLTgz8S7BEVJ7aah59CaCxLUf1GqSt8peRSGAP4WFFA3Mcpjof5t",
  "key9": "3ZAb4cTUBkGqRfR2FjFcC3ruKdKpsGWUaG2GnjP3zNdHUCjRq8aXXiuMG7vJN43F6XVrdPnqZbQ4Ur6EZ9yymK3a",
  "key10": "2w8UczwbDkkJCCqPq7HQqMNxMUy4YmbCXvUDPZnvF2dw21umMDNedSdUg7CRZQB4xE2oU8cXxaDfrwxwKhaXKRFu",
  "key11": "54yH4LvPfm9oxiumi1a3KR2nEJgHFJ9zofBF4Lp5kV1SQ4HD9or8rh22i51ZsCk8yrEtjpKohTcuZ48dDkiQ2QoM",
  "key12": "59XuzQKzAc7BprgnNVxfrrCpcXRnjKG5QoB31c3PXbfVN58namtFU4tU652Y6Vj4iUiA8qARNVvMVD9G87ksYzRJ",
  "key13": "5Jm6ArJsV5vHTHCwS9gi5i8JYci2vkoikYMV4L19sU7e4KQVVYn7tci2do4SE5yP2sjF4cD7LDQZ28G4zXtXLZ6P",
  "key14": "4BihrbjykpxxQHVo8rGdLcwFXdm2siMHbmJZghppYupmY8SNVh1ijrp4amQ3zUobXq9JfQKA57DGrGv8aU6Bz4BL",
  "key15": "2dJ14nkTwHWacLuuQTwVA9twXV1HNodQPD6bTNu8U1wHCHdK8fSsV2WqRS3iUopuMcH11nRwaZurKHPU2Ki7wMFg",
  "key16": "97ty4Ak1FFrpwTSvxv6f4FB14myAQ9huVJWgR62zWtRgrLTLKafyDHN2Ub91Re6gX2HAedabMHAvq1SVk5VapeL",
  "key17": "4YpgKE1W8mbs3rdEdVRqUTb6SmPQ5u5Y7zcRk7KoGSxCyJQ2Km4wA4nx5TQxEc8CDCx8Roc3kvXZE2E5bYbT9AQw",
  "key18": "4CJDnenKGrfjCzF7ZWYPzkgZMCWiHbz39tDVtBunuMVQ7tLSpF6v9qzDLGNmjaEkbbyxkEbf8GyrvcDoANrE7HFz",
  "key19": "34WnfDxwxQS2bypEjZryAuHdm88SW4iX5NyjZibvZqhwLo74K97GZkETwt9XphZT3d1HTw4hjxY7A8WXCv72hMGK",
  "key20": "4wPofvGxDV6QKAEvkJwgxURwkwSG5ceJ61YBTDUmQJdGwVG4tWaJUFzPTorPHCccspvMwvKzz3Urxgs88B2gPJJP",
  "key21": "fmCMjeCyKCcDUL8Ei92RWSnF8K9xWrvkZeJkHRfVF6VHckNF5ZYvSm2La1jYi9rU2bDYAjsD8Y4reLhiH8Ysrun",
  "key22": "4hChF3CW6w7NT7L1wAWJF7AYBDLycEwtGyUoFYLnbgvyhuYU6MSvVuZMuDqjcSuJcUXr7SgcV2J6xzanqno9vfaC",
  "key23": "5NohTsN65ZJANKWpky2e4C3QFFsXtuQpgjY2nF1XhbhSU53ezJafHbnNW3smivHFwnHjVS6yMPFahoQAAaAnmUsQ",
  "key24": "4Vbvane83MPtN2N4AeFsAKK1a5LHTdFGh29AgBSXhnKQhVae31iiERHEpqTVgZRTP9UzALGjHZRYcSASnovWRHxz",
  "key25": "56bRN38qw4cmgYVVWHbBgYG8FiYSQYa3RkfFdw3QXKXmphr2JJM9AD8nYgfSKffQQpArP7wyp8bHixkuE1DHfJJD",
  "key26": "5yYnAvJ9f8cwJn5PuuMNFVqgwBbg6uj4JbUAHj2M12LJsdVyNZR881xk7t8jvmBd8ZjYn1YyRxs5BVKdLifqdB6u",
  "key27": "4z8L21uvEfXFe4ZXnaWSoxcKQg6PBB4StcumfnNJ6U8YoKpbKxWch8w7RW3L1YWbwxv4Ui6cHNBWUFpKTyy57ahM",
  "key28": "5TfjxBDLf8jzmdL4DMcWBUoVirBfn3jEVaJQT2QM3uPTjWGw4Qmn1jKpSW43WxNpvRuNkzng9g28EpZj3tAzLgTd",
  "key29": "2VU8uSByFHH2XcvnrkTfJv11yV7c4R3KZoPHoo7kikTCV3wuWNfQFNqpbVBsiKgSqmv5xh2f4W9aNnBdmkfuaQyV",
  "key30": "4DC7bmKgJzXuBFiDC8f2CRMVSGkD3jRzhHhW5nDFYeX4RTbUZCGXgh9Tpuk2EL1iodpQpvq9XBFidsEyMPUhxwdo",
  "key31": "JX5dDSFhbNfeNmsHHjrqFn1KQh1HVw3jmQDrHvECGYP1zbpCAiyEroNZLhxC4AGSsCQa6w7xTm5tZw3EcVMNuxC",
  "key32": "2iuL6gDGhBW2xjQH2ha6qKRDc3Dsmu97g3X5QLcgojqEMNkcLcmjo2QXrZDn3nJrX1bUbuVpPkxegxvsVDhhn48m",
  "key33": "56QrCPktzUgUMP9kWaz7Y6rP9M4nYQEK6wE8mQr2FyoN5fKFxiKRN3Lw5fpnRxYdWb4NHX6ZAG8g7EFJ3jTK78fa",
  "key34": "Nz1nFuoM1rzAecr4nj1XQui3snHU2MhW5iVHVuAQw5PjhoUTuKfoyLe4nqTXvinxnSeL14wff8M8Y1ZZy7NdhFP",
  "key35": "3nLsUBRz66xtebTaXGrwxRRfBjV5Ch1BN5S8AVMecB5u7GLfqg2gDK4YihmtDTHjfVKCQKFZcRoZbDhvnoowC2jT",
  "key36": "3nMxG7A9xNG2if6fMu8mXf3DxzqgtFCr1Fymuu5EZctFyqqWsYLuiXZYyLcH9sYmYjnUb9RLZw8b23SjeDqXKJSX",
  "key37": "4ZjEAnmKAj86xxHGsTdxEMkoBC8Up1RzBZK23EYVgdWRNu4nt28Rfcn1yizMCLNBpZvkqJx7BN8aKd8hXJJb5WfC",
  "key38": "4gU7e2aaKcmxtKoseqyGoU5CbB2ihRPT2nYeai63YzobNoQeYPaQSEC58kCyErNDutgKrg3KrNLy4agWS8ncBKu2",
  "key39": "2zzZzZ711b51WuEAf1TyPbu2DcrrMJHKbnVcqiLUYL6F8fqhAbopBUhJHNnZgJHSNkhXzEEAgPVcxj4Fi3UB1GgT",
  "key40": "5R2ypeDL6m33SBqtvAxU3r1LJJaUX8Zq7EME6KkEvEMzZkcvvyM8UR6VQ2TUrxQWr6iCbHMNPvnfoWsZ1QZ7Sk3f",
  "key41": "4MMKq4tVtnXs392tTZmghMp1ANK7UZuUThE2vZgrwVEfWKm4SPPheHjA2PyNYnXkfqmDgufSsgGK8JXUyL69C34S"
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
