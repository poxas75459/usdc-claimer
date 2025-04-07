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
    "5SVPSvHUBdDDdGoUvk3Ju37UuwYuKgnXXE3E9BynmxM3CmDbw7DiXET8dCwpSxCRiXFUifTGK4P1muoUAVEcUZMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64vuvaZSMJEgXA7vvkcjxLGEzHwi1qFrQCzgg9khe5nmKKmJwMttyuD2hchXG4q2eR2EUJxQ1q5voJ6hKrDjM5xd",
  "key1": "FqC5ZihgS3P8P6KPUK4jsRUwTmEdE2qSD7Le7nmab2NpasyWjuX1rHb8s5kV9T1KEeTkmD9M5skAYZWRJsq5S6g",
  "key2": "5uztM1mxPK3EPK9d5LFHWVJAWcvbirEEi8ENVAeADe7ArpKc7wkfFHt2c7T7FEYdqtTpxe6y6MqZ11CY1hBFJ8ed",
  "key3": "XWc5MNuee1NQT4USWWT135grCoNfYaw1HKEV79zNceC3zj6v8QYvoDL9or9in2FD8BPfSqvypfeoKWFEgWn9NAv",
  "key4": "2Un6uZzjXovDZMYyywx27mcSeM9Pi6nyZ9SwXhRYetTmG3pt6Fq5mLk8Rh4Kn85Z39L34P8yAJAjf12bYvGR9PfW",
  "key5": "U8efVQ6eAfCsrfE7dfBMFKUh3CJCyJk6nqDz2k5VeHTpEyDaQVRy7TCJxJX7hxe7PQvpQSra9bgkzRMdHBPAPmf",
  "key6": "2uHGJpjFrndYBxiF2FDnmQWkxy9W9Tg94jbmZzJRYqByKeikNPTNnpWDdq7pJimG44k3q8qSqyRykihvgs3kqs6C",
  "key7": "5jE649EiSrK1uMDAU7SRBvu1nudtGmBBUHeRye5jciwYLoUcmFpFo4AjCfydMFrdMjiuJgRpPCP27BZF9kkxSx1p",
  "key8": "5ppm464B2sCinMBRJsUDy7pXQiaGxfwcvx82ELrbmQvrhv7Q2GN1wW43mf1opzZsEKAso5K2yQy5qBhT2YZPQeuY",
  "key9": "3REonKtQ857d7JtRs9pMWio6CFHLKTKYTtj9p4FMjejhEyEy4rNBcf1w8P1DivryyNQ2wbUgrezkt5Vw5FzowyeZ",
  "key10": "7MWvfbkg4WtrFYCHh3XKETJoYnWbhgarM4ZP3yXLNjsdxnw8H3fw1vzsoQ5MJ6gWn2NRgjPrqFTsrbRPxVQEjSa",
  "key11": "65AVWQcNLn5fsjubUSWWSYgwtt85TaMySDgnk6LeDz2PnJv18BRavrRqTQr6g9yhTWLfyctMo9dduhN5EQfcfim4",
  "key12": "3f9CsmCbzg5yf3MXQYqNMwHtyecAMB9KzyS8yjuEcZmYEcKSy8iv51Ckp9EoNVUsYfchHF5ZmPkXFskfBNks7gsK",
  "key13": "5NjUPQTq1abeea1avmUvVnYX3SNV1NCjGuYFx3E89jZy35V6FzNLs7wvuWNZEPVGNXs6jZ6uu3aB17mgF5zNeWUg",
  "key14": "577FMeckY8sweeVQ9NncNtsLcAbNgFsc9nQs7LqMGeWbmYuKpA1xJfPot69KcYxhe5BknsN4zhGCvmPSvys17aaM",
  "key15": "4chmhQX2cbpR26JzenugdEKEHQdEETwPBhs2woZE7EMRCYuZRgTMeX6v8D37kkMoPZpKYR8BnXfrtdVDUFQ8TEKQ",
  "key16": "4pj9X8WdgvpPrmnhbJRx1ExUyaMxc2W2YYGb9ZH34LYGpMAs7wyLaFDHRKBRLLu5pZkTxic3BmjQJTAvkjiuanSN",
  "key17": "3uC24RjQR7QQUg95MJsHr2cPbqMRsi465YXFadqeYcLn3M5WX7gJowdotVgJdzncLNb2pT7FoAkp4QxYBf1NXhxY",
  "key18": "49D5jZR3SX9gQntKCPDPYLMSFvRYnD5YcRHrrmA9PpHn8NhZZ5EV3mMLrmHZuj3RPraEA4JChzk5J4yBP7Fi6s8W",
  "key19": "4K5SWYecNVcB9ScVdNyaDr3jQvmJyW9tnWPkdK8t11qTzidAxpg4LVZt3Y7WfwBGMKTGUTd6Tn7z2hEWasfRFEYu",
  "key20": "67Adk9syVnUXWPQryJMqyLVPHpAqRLWdgtgY4hJBnS7wNMTMkUThiGBhJtn5k6F7Tvpfd9kmF9kc9GeQRfbXvGfK",
  "key21": "bUD3R7nhj9JT1EJtvv6CRcz9MjkQQoxPxyhtz88TEVk77KSTLfsfNMmNfrgBsrb6PEe7gNgAyjmRx8AXuJRTN2i",
  "key22": "43Tm4drzjQKZtyfBeergjFZDwYr584CaJ6njy818USybmbrE7544D6CSzL4nXL8ubSY8YE6X1RhwCvb6kMnhpkDq",
  "key23": "65a4HeQbbrdEkUUku2tGbXW7KbzrsmXkxoaPqm7cRMcy5HETZ52rW5a4XvPhuNwvPvSuW858ggRTR4yw2FwP4kzs",
  "key24": "5ebiyXAPCe2TBmkuuRZjGpzWwyVf8pWLzKrocEi597SdWeYvZGrBVb824NjTTte8gXX1PjkAgirVvd5MWEP5BwMc",
  "key25": "3HmzQg5ubY4rUE3KTAAeygEmUEEq251c4zsPZ4zqevukeD3oQANfZWuYmy8V1M3ptF1GpYMujUqd8faRpE1px467",
  "key26": "4BJp13Gr6VPwZL4vxFcKn6FrXtpiTrTTqtPB2UnVQvd7sL3fiwsu7FSz6joPjcgD5FCjFcDhuoWAiADRyBd7i6t1",
  "key27": "2DD9bmmRZEy1MtPqsDDMvudp7YxGMsdiCVMx6aazeYKS3ECkNT1L1aToeuqDcb5MS4VRoRhFtyhqFMt1i9Yngq4r",
  "key28": "5UJwphBvyWoW1EQmobT4PiDVSJQ2g2e6K33uVZdXKZNJtEHNtCSer2RnvA6LQjz2sJefj4LHcjhYc5VVbt2UxJb1",
  "key29": "ouaXUQGfXx35XtJpWqv8AJgadkiTj3Smkyfp4w3XeFWLmP6tpxGrhyG6RV2QAaM95cKy2gf5TMgERzPyqyTQiDF"
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
