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
    "3mKtkBbvwiSFqcTBWoqR45aicfyJaHx4KKa64Bbdur8asUb9haJzTdmwyxZ5yW1qk4iacE6aZ9AbdttdeC2HnLwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r3QVxmH6XR2unN1e9PsrxhruRgDvpKmCgYCzJ7HnpcmAs6aJ2Wr8GM91e9Brn8DVFuvpkSA8Qs3pir1uG6BQmC",
  "key1": "2qy4QtNmiTjTLzbMJZhKrkDCrGMAyZQ5SH2NDCSvgEPTHGJrJHdV2HniV6tpiS4fk5xQK5b1sQBoqkkivS4xBsSE",
  "key2": "3cFaxHceL9HFXtzoZkJZU7mpn2TH2VLqD1r3J5wPkJEoYVAv3kJRk5HYts7T5uByAvFhR862phoNDyvP18tcL1g3",
  "key3": "3WCaXCJy88qDBppdnSjMgfprYJs2b9k578HocP2S52y2YwKv95HRcaanvWaRyXdKTk8s6buf68YMys2sn9ENaheR",
  "key4": "3RSDZXVKx7wfgiQAp3EUvh1i7b6mHgt1YesKuZ168XJMsEBmmQ1fHYowK93vEu6STF2wZuPkU2SWYYSY49jGSQyH",
  "key5": "4ZWJLX9MHp8nQSb3S3GaUyezv6cHeTNvC71TTB9yymjNerzVrLivaAqKCUvX1sBXidPdVbPwETVbuitt4NvX2pWq",
  "key6": "Wx4LaBneEGQHwrzbSQ3aWsGJW4xbQUZF5ZDuarj5aHczFCu7Y6Q6SYChFmM36UvWr3283gLJqMWzVgWMBeXWLwB",
  "key7": "2B8FK55U8B3dJB4JWNUyHBmUKksDif5r45BWJoxGGVVRAYoWQ4w5o4y9LpKoychrZ66fhb1C9MC6LAWqaEQaQqT6",
  "key8": "5oa6mkPPa5n7gbpN81Q4YyeKoTC5gWieU8K3KEetb5ASBoeYZJTKsqQGuWXMfrrsRCXSmZuJ8CfvnhLd4uGeqNr5",
  "key9": "RQv7N49ZVyeK6fHKgM9Ps4cavntHjF3eny8CGgBs7MB1NDvgh1FGXTQtfaVgxzhVst9Z6n5aJzRE5S3F21sdRYE",
  "key10": "53N3UdwWQW7SLesUFmGD7UtukTwP92Mnt8NWE2DxVBscMmb8YmzvXh8UwcQpuX3mpEZTjqhWJPDbotY2AUfLB5Aa",
  "key11": "3nzj4PS7KHzSqWKYnqxRgSwxwmiDDEuLN2d6iLVuzQ4rsykYLuZQbTGFwz1BP6ok5RL6JDsNn5zTXXGTi6ugbmTd",
  "key12": "JcErt6ZWbzzQ5hunhX3wjKkjRKBCSVanT3x3b56cENThoyKH6GXt72qp1RjSKHpJbMLHD2bU3nea1dNrzK28NrT",
  "key13": "UJDN7xaLRhrGMjCHeaWKo4MWstDLPbEzx7yBmMQt523nAshFZrgwvVgn74z946P8NBvdg9GBKggojvfr8P9BjCT",
  "key14": "5G1BD4tpV5VzehrMhy9FvP9YLejPveDgXZd962Ldc718iQmWWE2XCtVWKNKMSYRvqD18N9fxRfZkRHdNcrH1dB7n",
  "key15": "2vM3buwCAN9CWqEn9hgscRf7PYixujcKesDvF5WBraz5ZE2ekVJrMXxtoYsj7RUmmeBFscrzqRofnDNvGihiCYnr",
  "key16": "5rqPYTaXnbHJWYYYszuogwuLCcnxnpxvZYLu1jwHfA4SFBy6gEgDGmt3TSeTs7BJDK1nN1ZUyhdTSFoE3aqqtdkS",
  "key17": "2ib3bGU8w9SXg8B1s6q2XZdYBfLtSsURkabYM1HFbH8LU5XRD9DWR4seoDd6trvXN8d9LEwZSQW3SKAXkSxUXZwb",
  "key18": "57ZwWr6tQar1As4W82CCGfpKZfuzTGfoi2fTRwh44pm5Bme34HZ6WSFc9zSQmMzcRgbbfgDtRQUNomKCa24gpfEb",
  "key19": "u4KXUc7FhF8UGDbWBpBAqZzF1QznNk7EWS3CNPRmGxqFEbz5z4A6sSen3i3QpRZXsBarQZ9gtnhtpbJJbhahRN4",
  "key20": "5SdEwEYz317hsgW5WtU6T6j8gRW2vdQRNR4VZceCd39jovZAnha564HwFvyNWoZtTVjKiyy6HufK9hVeWFv72dYv",
  "key21": "31BfscP76umZMy4uZP6TotUrekFgaVX55korAsx5uAnzWwkFA8uHpM6WAu4oyH7RcJ7dxPVmEsdj7YaJtPyStggV",
  "key22": "3UPf2z3sPMLR6vZeVpBid37kQz86MMYKPC6je3RDnx3L4jCFmaTunzf5tXxBp3gC1vko64rHWdXH6b6Kot1WL5Hc",
  "key23": "BQGBBHMFR4qjThj1fBczytHb9fXMFB691zvu5VV9G16o1sY5CmqMofF215Yif1nwMKGqzjPhTu9E9bKGTvgL2Ak",
  "key24": "3kb12mrHwWszv6o6ENPabqJL9FLE2CUzwdecgmoudEvYFeYdndeyCoRM2mbMCkXsNgHnNBoSXGwnJyEAvW7roidr",
  "key25": "23Qr66R2u4P5rLmSJEXKGd3aDznLjfzhHuccKFQwauo4vLWgBiAiFXvuaKQ2oyCx89E6tRB7Jyx28YKtbNykvb5R",
  "key26": "39tzzsypxHpo6Z9dfBrySjWuJqC5ZkA8ZY1w2fNWfzqcXBbDqAWVtmJcMBvd1dfzpkSpdovPJYmXABrZv6s4UkXf",
  "key27": "29BKn6fNtkNU8Zv2equjMcuvxiVATWJSMq5F4merjDsWnwfndLiUq5Lh2ngS74LueZGzWnJppMDiG9KghQuq88EF",
  "key28": "odpqcKU4DJ8F1m1wFPcQR8NZAHm9u4jUDU2UDoF3fvEAofxDBKoyhxkJV92o2ofc1uWFvtFvWmLRHv14TvCXEdx",
  "key29": "53meuw99y9vh5Pe6ZsE3ssVsTjijzHH3qSHoeC1onEMgnBuHL6rMg2hb9KC67yzYZ33mNmPCmfjCYnzUeuVDsnpc",
  "key30": "3VSV2fm74Q2spueMDdnuFtkJ7H4qtRPpaLSzTFdEGNtBoVCqnrbaYy9PwyvQPruh9vJfDooYanRwGWFfpmYn3deE",
  "key31": "5E5PDScvgra3ZuK9e4j9Z82Yo9MLKopVeKD6kntkP13FrHov1CWQmnaaBbrUAQWK1Dkb5Q8i1rJxorQaSRW9KRFy"
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
