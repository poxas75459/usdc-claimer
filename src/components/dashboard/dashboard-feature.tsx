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
    "3gEh8KT25MHB1xk5akZe4oWsfYpUc94z2KTow5havgJHPwMVVNrSKthSHaovx9CuJv17G6H4tQBZ4BGJdVL19ZYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdmDEn3tyHJS9MXK1NSpSWPM6M4AQGDSB7utEsE8pMvr2sCPWxBByx2vdjXkpdhVUkZtqt2XnpENkQ44nDwGsEH",
  "key1": "3Xx3D6ZoEYMYxZQDnYToWb3buNoSsJxi9HCmVp1DcxLzgbtydqfxGC7Nxv9NHiN2dt7s8Wua1ydgL1aZ4tj9Tuh",
  "key2": "5DPXTwMpfBXnZM1cgFeTDf9EyD5ycKbFBZrWwJhRWnujtnifphcJffi3kD8YckL26AyzPyXPMvyaFpJedKFqGVG2",
  "key3": "qd7U69NABXMgg2wZm4EerpbhsTjxDEb7EgSyQwJkpnut7d8gdhCx54FStfV5uYk3dwMDwTkNSWY7YZRoctZanAF",
  "key4": "4XF5F1Q3MMkaMK22eh2XbTndG6YHQHnD1ZV6sdTpoBqfo5sQqK1QA48JYE5unU9VFLNSMYmzKsoWoeDBzr9UpxeT",
  "key5": "3HW6wQX4nugudgLL2EmCjaZscYreTVJuNBmN5jg4fSxEzG828aJDF81YBFrwE6TQtQa1u7zbZRJ1whEdH2pN4KDG",
  "key6": "4vHKzCj9AGVL9Cc5SX2f3TVYFw4wUeaQwYFDhXtEdH4SWW5h2AkmCqa46StnaPtRuPvAd1skFd69bGCFviHFqM6G",
  "key7": "5XdpaYb4VVWHYzpkvd1WohMDd5uMcweHVzEgmWKxZH1sdtzEwc1z9k4rZ5ufBbTGqZQVPGseLpJN63ob3GWFxffQ",
  "key8": "5PxnT5Sx26rzZVTVe3Hz6BoxmMgwQPQ1tDZF1yFqEsrTCQeEz77EtKW9eUoPK5v3mSY1FnFPCYXY7Un3kzR7cwTr",
  "key9": "2QsWtVwbVBbac4K8eTRJv6b7bweJYGEoAMcFQtoySG5Lqtwy7A2fUfnqhyP1a4jMxwiMfQmV6dLEf6iybRJV53LJ",
  "key10": "59bDdjE5HqNYdYmzN3GJR2U6aqM5WYQN1DbeJXs7yzk7QH23wsA4XBwQU38CJgBfqbqHMTAgbU78wPJr3sQWKWk",
  "key11": "Ejv1GbYiHNMKNPnFk2tsSMJjfwBMqe1uPCAHdotJsULuvWZJsCm8LXuN195ze8X4H5WcgEuLoJ878CVRnUpTrSP",
  "key12": "4HKLmjngzY73GGFFFg4rodYbufMfq3tmiUmZqqTezYVzT8vsZvZcsVxmDcgKjErpwkzpYuD3hJsNg42zwy6f4Yxx",
  "key13": "4aH2oqKdXmpbyux8YcATWwmvzMzTWmPkGpjSM4LdmLrfj3NePV2hQzTePWjBdNRLo5yLwGA9S8ffCNr9YJcJVLvN",
  "key14": "54pXCqvkQP2gdiAaUgbXuLUPjiTQbeNs7FbFVRF6YA7mT3b1DJYQCgwwBydMqHAobKP9rYvkdMxQtMHnFv2skubu",
  "key15": "3gS5qhBST7itZ9L2GkKLUFzZzG3tEzKxRwF13NwyMvGoAnXy3n7BgcNAmbftiSKenADyaSBeasi7Qg5ePcSn87PY",
  "key16": "5igivkY6LABBkh6tGEeyTowaZEW8VJaSDdckq5oNR7PQ6AqkaeU5GHNHDCPFvf6WxAkA673xYtJ8ZoFpL28tyUmu",
  "key17": "2ghk2i5tYgfyZXzKEp1Fde5HcMy5F7GSHFiB11mW15yHfkbae9sey7ePyk5Y1P1mEPeKgiu7rbxGhG3Gn6ZM2r7b",
  "key18": "4BmpUzcSiaBVy1A3CAsvwSNG68mGidW5JFdr7ADy8DTHxEvHNZYKC5fRoiEerYPPoMBQbRCjdFuUav14MX4PGpRX",
  "key19": "4hCTNfvgmzDRpKXWPbr3UZpcUfgJ1T2rj7cpjZRhFHZkRh1ivaSFpgKouRyJwA1azdf1TpRhdqh62HcMMtMxzkfS",
  "key20": "2sDu8e8i9B2cpqZBarkN1SoWRbFvVzxdmSqzkZBK5EYU1Y9Y5gbhMp346o5gNNSWf2AbqNvcnvvL65wsGK5i5gfa",
  "key21": "vtzoPdjNutgDL3E5s62kV3S3DKJgmB5aEXjSv5yxdJJEqWyWdncFhNvEiwkbvghdLc72YVYK1gGwKWrRQF5o7eu",
  "key22": "25WMMyGjGdqf3zWGMytEEFdkSfdaL8PkTERVPFWYKaCAYhhcWWP4yZSRhjNuM5B7GgjjXA4LtY7gixp4tiCtHWoF",
  "key23": "5B7fzCRxoE6HW7AQ7sd1MA61wAa9VEwD1ceRcLE4DEwn5JWqEUuBX4XepMnRcBHczk5tE8RWPdz7eA3HcTzp8MAz",
  "key24": "tskjn8hoSoW4pC8nmia995Hjez3ufS3B1zQeJVrYPD5XKhSXHAC5oXKW5tQ4SMEstPLt3FE1o3JyZxkYeXBxLDt",
  "key25": "21wAMdJLKpA3NAiN9mPLzNAmFDzam25cqHTTKAYWcPcEhyqARD8sr91xjKZ9PfXzKubiLrLrHKrhhjryhMw1MsUg",
  "key26": "4GNMQSg3ZCAg89h7xPj2E5gVHidutRbH7eKBsSMTgS93vvrfs7b2eKtWxnH2eDoKGgKrKgee8qA23PhCS1jHviGm",
  "key27": "4EzKdtTLCjXTz1kb2iTpUGKkqha2GuKtuvazFpwDb7Gh4FNrGuvLZjncY7j5ey99ydVi8rwhkiPvc6tNWRG3WXTe",
  "key28": "2YZCLdST394gZbov1UGke3ECvUBGKqu4HSWM567ceF1ZDzcacU6hBdcfJvoupzDz1CFro6jwvMsgA5kxSJWanZCt",
  "key29": "625SDgXYtb8rQy7YXZsFsgYCKPFDedhw8KjS4F5BnWPRotctNz5Z4pPzK1on4uFYojsJx8bA2jfu523ATbeYzipr",
  "key30": "eU3hXtFapZHV22KoWe121d7qhyoUJJoruG1n8FafCYRd1NT7Z2XvgdmkfpsDhWWpgNeRt1c86NUN84MDSskmzLK",
  "key31": "8mQVsnjQTXCRR1WSRUREw7hjaUQ4pT5QUNDiMrW14UW3WHCj91Zxi7TjqcBw35yCrttxVRC9kheV1CoZPx2qq5V",
  "key32": "2Wj4chrt3UXXBeXLCYWXPRTG5aMh5cHxU6NdSY3VBNUGHGHEfSgTwwnbBvW1nTWvPxvpZAs7ih9yuNoRUYHYufKZ",
  "key33": "9fJxXwiEirKZzFCtHTqXdWKkmL75YM2mSCgdxVxgsVcr6pjSbuCQZ5xfsegsoqn9GZgnuoavWSDkzjtVkDEFsEt",
  "key34": "JASrDdX1XT9R5kseEFn8tmRUndt6ZxCqprkGXGjkoLbqSMYQQnWb55p7JbTj8MKEiGqho6xq5X3BVVQQBF9mYoK",
  "key35": "5RXAgrpwpzePN9jrwRxCucfcbNcLEgYQNjhK5VqnShZpWRgZEn1Xgw7ewrReH4JsfjyrU82ydUgMU4oP7mEPEvMx",
  "key36": "2Wgb9GJQT2R2Lk8jvuz7uGjwR4ngZVWGtYaH11vqVVX5zffpiEYKq3rMpH81CMoDjx9AiJMmnEx4MSmxCTR1rK3j",
  "key37": "BBjekgoqf63C2vP17P16ori8VqoWL7p6c9bVQuV4eAkYkqygoerB9XjNMqSuPFPWrLYsGuZZRHFy4CToxMp5S7Q",
  "key38": "4ezAvoAsHya32JNwVy4Ur3i6zQqYArsUaJgKpTEwZJopZoaVP1WwvPHzyVZ8LLDJCcqcM1cxn17BhzTQ146aAdXr",
  "key39": "3o1mjwuL5YbyMS4BAyeHo5iYgY2P42byGwHyDjYPsuLti3gK9Wuvv9TgGFrrBHiWyWShJHNCsXAG9K1nQWZ6PbjJ",
  "key40": "49oJHfDhwRpaNaLHhtJXnK2Lj4hBjQM7ftJjPavn2puGPpKVRiPwYEL7tCW6E24q6t6AD3BHkhto8ySRPX9FkGr8",
  "key41": "2KewTgShifmFJ3hi4SvKFyAGWwBdVgB1mHwaPG43ZohheMaWYkJ39UZUzK7PY9B3us5mC76b19CtpUSBkWNYGW5f",
  "key42": "21yeAMsncShb5T9MPUwmnWAWRgUn8gjpJKkD1tMLpJiRPhB6ZcN9vmmwYwGDq5VuXhcwkDRGmDPEADC2BX9NYPqH",
  "key43": "4b4mmBe1RRpqESXvWGyB9v5FCmXVrYtaFQxvxDSbSz6Un1rG8yC4hCei6zLitoN4Fd2HXwcmJU7Qe3xnvXXvCR1b",
  "key44": "JCANMESS1uWhJghHZnp31Q4RQhcKPk1m6Wzz4fa9A9MuUggTWtuohPnufki5dnF7yHZ8Gjc9VPxwRowihFiLsu2",
  "key45": "55f2B8vnynK5tPP67oCKbvbkw1UCRNhBA8SqxqkT5bg4AsGKK4PrTwLVhG3LPCoVY5nGGUY8o53VhBnuHixkonRL",
  "key46": "366qX4D3nqb1U7BVAukG8eDcseq23yDT6XQjWTA57SR3trZMbVsu47m7fnNg37CoggxUWUVkos2YuqxkQnrP3cPg",
  "key47": "egKRENWGVwYH2sYphxQ9koUX1y3z3CUR5yKfMa1cNDUcAUDcphznFiQ63S22LVDS6am8A6vqPwkPKnWSMFrTL82"
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
