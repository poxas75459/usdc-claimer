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
    "9vHsB6grHYBUKByuKVLGtMEGKhBe2oDFQHLT4xYgRsPjs93VkAKnxF15xtLx9HTGkWRWeouDPMG5Ut3ToYD5QDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WyCU568mhujJ1SjejWtmzKp66MfDRdNsBGHhbhnf7eRbMwqcexN7ARrJPAM1AfFsLvsgetcT7ABYkgNVuDrwDoW",
  "key1": "4EcnxkfvpxsBHRDucGRgJ8ZcNMBXNnthWwXebVSjCKcWZrfAbYcWWnNnVNETJpPKng9RdbyAmABgXyaGMYnNGngr",
  "key2": "4gdDosbm8xfqdKTtt9W3nASr2TWf4t3kP4d4JmTTStvQhBcZtkmbBcpskkJLNFj91KuZffhsXAwn82u8T5A49QFh",
  "key3": "2jWgH7iguEfuh2txx2gDmM5d6SNQErxJTzC8w4qCbjxmMK42QKZbY5YEe3eTwhs1WsdbB45UxvB42a7oABbopSZp",
  "key4": "bht7Yy5DNu68goJiEFpcp2cjcwe2wnvVjPoL6R5qoBjYkcUnTADQiCG5v8GXLkX8hexNAVtUzooEqSE2pynhTs5",
  "key5": "5VKkkJLCjSG6GqEiBpBxe2BTmWmAYPTaUQzHeh1xYUyhFagQ1WA6VZjgDXGedEL7WGvUzobuT4R5v37ZTJRG74Hb",
  "key6": "SEqsmewGVXwoLYQp1B1AuvoZ1KGKzw2CwQBKSqYf1dvYqpUb91LG3yasbdV7ntymoT6ok4PD6yjbPLCb2x9FTZx",
  "key7": "5NpuyzcoaZLzXEsKtBn88cQVezaAkza4t3iTyZh5KuBDuKhQNj9TKQSjgd45wDAyk9RHjo2Uo7vg3RvuQ6YzCmhQ",
  "key8": "1vyFJ4umQF61weccg1Pw2cPzG7Efq8QpvPA7zrqDVB6tvTMibqATLE4sUf1HQEodBAM9EA4yAtC7WsSyVfbw8RA",
  "key9": "3Bk5Nw37umFnPiKEQKJPX2BBcAn7GryLvfyNbZHg2hVKrEUqDmmLcV2fVxMm8BgyGtJxXpgXdKbqCr1s3tkCRpbg",
  "key10": "VisnhTmDCWGeWTxtGADmo815eL5G82CEvDFDYPnoeXo79AYZfMPmaBCWVvHAC7pwF53DqGgaeexwKB7h1A8dzha",
  "key11": "25cUf3hz3VRQx1xDBmBBaYYCa61XS2w9mkTwjx7PizJnFZ2N82aRcMJquhP7KnWKaQShaiikJPj7CabmtLrTzggv",
  "key12": "2L3MWVSEZdyPKjVPg8MShdopigTnhXKAXiikTgCo1aTypCFdw8bTXwdJqXAMQDGehXgVJr4h1J6gg4P3GxhRRnoL",
  "key13": "4WcMUSKBpfasaoWjLvxQ7J2FqQczEg4XvZPZzk3dcYNsrmT8k4pcB2bSoPVNsKffufU16SsvD4vyFS1M4ayHrvJD",
  "key14": "4MdhqztM3NVqZZcaU4WDS1uHaEFjtvU2edtQnf3Ex9tiWNy61ma8h1Juk7qs9xsEoZxmnJqeVmtFNeFk7bGdWWa9",
  "key15": "2Z2jnMwntHHcykfYBwnGx4Srjo1mpAbH9YSaUBSL2cYn2jcYk8rQuLCvXdkzW1m8NkFvUVCDmFxNVaNuKMJBq4Zf",
  "key16": "2wVTgqt85GqzVkULLtSwPHtYuzKspktXxbd6EcSMKPd7d9RBv4BD8S1zwLCNpe6KQiyPG6cv48zH4LowbbkZYhPJ",
  "key17": "kuJycFvRBdRKa2Pp9HQtBYvxsxaF1SKtN9cQefh9Pbcjx3JWexZvqcx8JPYtx9d8Rg3X5zFAQpUNtNMxv6YyDKn",
  "key18": "45XoGEMEgaacLubqeKLKGHXeLWW3fmMKgcpzoRCnoT7QessVyUCzwJgKvwib7MBJQDJeiychVRXQj7STyxbJExBz",
  "key19": "r2WEe7Ps4aaSGr7pb6tYM5tW1C69euzzoYvsBLrRbxcLywpes1ymLr4EJyNVtftK4BtNJRRhe2xt3129zurqgoZ",
  "key20": "23fdFDQweetKqvMfkxpqrv6TJ2uroEfBViZePtMhdB7E2KV9HKwQ56CmdePc8LtEatNecjH3nJ8fe4LabkeCkk7w",
  "key21": "3rHDBVwDAmZMTcfAskpNpJxKW7StGdBCAAk84hHkBR4w8ianDfWMHKig5Yo9mSoDG1ctVS1N5nLj2uxY9YJ2M5tz",
  "key22": "3AVoHaouK4uDkKYUhzdiVCFUDs5dXtRMB1XXwUwBfRZJ75HZWAWrH1MHsS4SUu47VvCnSDJYnthPEjD9NPFfnw5z",
  "key23": "3rfXEwjrWnDZccCjc82orDtUX2MSxUG6vhn6d5SriichcKJA9s9dnPv2W8X4HzYFxchWQgUsbeUxt5z9SzjvxLeX",
  "key24": "644G25w98rtWidHVRtbJCZiTH2JEFzNXMUfursVENc8oaxKCKk8woJGos9FQyLQK5TdCkWnSEa98rcAnguiP3tnn",
  "key25": "3jmdgrCsLoiQHbM3rqKLLxpHeQyhAVYaqB5ND4duTWehDtBPKjs9dQoreQkPAta3jBsjVrj59WWa1KKCDYbieBsH",
  "key26": "4ePPmB7xuFVVNX9zpg6cN7qQspJjsyF3mc7pYNjTKv8Lv6YpiBg1UGa25uNtYoS74TsUkzGkhbeYz2GHRzRSbXWx",
  "key27": "RUqLswn7YTDXUy6UrWMEBciDmVhcuKrHUoVsrUNafsG8KuBUsChwmPMSP2Pq62Kz5gfG8EoHrPwTxnaUGJw9gVP",
  "key28": "3HWrA6kiGosFGCHuCU6tjSs8FTeJoye52KBVKB1En4PyJQBqVtmcLnDNVgQSxSBoymogv6LrznAiyZR4pfDW1NKZ",
  "key29": "4cG3d5QY1JDadUmYG592yhQJAHwNW44hfnk6p24kaxg1HS8utCdBpXutiKiGtFMnmP7PctJ6jhe9R9HCKcreQfxY",
  "key30": "28uEBeSxtpNmKTjubGz6MPU4u8UXWrgbynbpr3DDmzU9e2Ge3uG8wLkgPu44oshaKRvuZWJhb8PC5Js7ztBcC2fH",
  "key31": "4K1gaEqExABY8iod8exCxsue4QUixpWkF446eSTLT1ENmR5T5sQXhTtKTBXnHhTd753dSRMrsNR1Mm94EB92qypt",
  "key32": "5N1WvnVH2Aj7sTJrHv3BkadF1sL48Uy2xLvMJySRo9jwk3iKq87GWbmEMYhbEeN4Yc1ygh4yCTW8DCAmiRu5tprw",
  "key33": "4FExSr6Z98W84sv9QcCMtQf92F9cV61NPZuyq8sKrzggSaTjEgbn9FyFHeASXNNX8wpLXqMK4EvQmipg8GNQMK8R",
  "key34": "3XaKkkfqippkferFEbTxKHo9cp4hcTwH6iVmgzuPYM9yxk5aaXoijyy4Lh17NNsHVVZCcY2wDCfLpFKkk87FjD8A",
  "key35": "5iKCrDLaz6iHEMRHE9YmsWzSjEHTBCtPeDm3PsETLBBoAYPHxMLv8VHN9WoF6dLiFVzaiFd54uCCK6hiNsBwM5Z2"
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
