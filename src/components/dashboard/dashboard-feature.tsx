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
    "5j27tf6gcgeCzJ4ZPQf5h8nXYg51BxS2RXH2VdqJunuopDFXJeHyzXCiL9F9Axifn8dR35cUTwomRrTHKXrzM1Ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WLtB5FdRukfkPo8E5nU8gm9KFXob548nS3Xm3RXKScPsByckHNKHcozLszup686EgbnwumrG3cFArwuLhvNwqxK",
  "key1": "5HSS4wgJL8EcRCxUzYFA43hFqwaS3atYjKpEazfMtnRSGKBthVg7iWexPRzArXogJXrey5paYfSXr7Pj9hUf8PoW",
  "key2": "4eg8EVPEsncbkh8e5XxL7sSBxFcNL8d3JmfmAgNFoL4zNq1ZCx2whwo4wmAFcY89e7SvN6Cb75Uji3WLmGgT1mbQ",
  "key3": "3gVHYzzwaAUspecGgw3ktFGaFfvVpQg4kGo5Q8GrZSEqLSDMoPLSTfigaW7aiSVHpYirhj8v1ZnsoGJGw1oJma8n",
  "key4": "67hXvzE7TgM31gRbAyiVDRdV1f7rNTLQwrU4VXEKykL5s5hm3Y55Ks9N7HteEsnjBLgzWEjhW6eGMveX18BwyPZs",
  "key5": "VNEuyCxi4iYiPR4sfX53MU9Xe9B3CfNefhPyJHFop2R1rz5MKE6yPeqiJC1JYUF4ciCRgpvP5guJay77Rme3oWF",
  "key6": "3VvFWBwzNrvt6GRQzNkuWgpzqnk8U2NQqFXVko3BaKzhZd4sayn8rWwgTouaw63Rd3H8hLLP7zPUsZZHgeHfMDd3",
  "key7": "4f9TNeWfjmHZ7XaFpDX6DMjYnT5pj7bg1DFZJLkyWuRBDkaGjqP2AySDeLpF5eXt2BHLm6Uf9mNu4DNkmuKe7EmE",
  "key8": "2pizuPhLxtYLErvEGvpgePoFgdTeRdWF1BRYBvasup8msHcw5n8HLTbbtCwABpR5sSyopLNMf9MeY3bwP4ZBiu8T",
  "key9": "2GgtM44Xruv5bn2xszsnKs3g9eWXF1UmSydK31B7QseicLRSDUgLnXpCF4gD8n3iYhXHrAGj6iQAH9o11nMfCa9E",
  "key10": "2YmvWh6KQUhczqnzoJnYRMogQpsPAo4xrS8tdKMNusjq1TEvn1mNSK2PzKUHbpFM4y37xWivyXcCVADSZNUS3VsU",
  "key11": "4htdZk9nTJMDD1oU16bTcqapivijuEFiqk3JSueu3FLgk5tihRbizLtaMcayGB4Kkjn7bhfVdsxZKyJWGrQ5ezrq",
  "key12": "5UC2hA15L7R45iRRNsbPJ32Tz2oJTq2ZwAvixVbRQG59GST9UpqGYSZvsPPrAAK5TgNqSdAetnHhCtoDChda8CoA",
  "key13": "2MZfsDtJrHd7PLHw7oFPHK74qUTpg3qc6P125BdeKcu7daee5WEHWrqQFiekFa4oc6rRSc4uhnpfBLZuMngQy7Ki",
  "key14": "q3ZWpZqsjPdJDmGRDyFZSnPVAsXT4Tityp8VVEHhmaRvCcwutheCsAARxZV6q7X13duWzf15XetDcvQJqGZZG1W",
  "key15": "3nBg9sZ9g1WVyYafcovER4jSfJdPnH5tu86yj4vJwBJ6uhyJP9L7xEGYjDAa6t213YUhyKHYGK4hRgur2LBemtdi",
  "key16": "4J6LS63nmA6tKaAbaT7qUiTY3RGV1pDiAQ1qsuDy8NtvE28GvedCUCGX5GK9Yt49bpdCZA9HY5K9xS52QHvQGJZw",
  "key17": "3ugH5vL9G2Za7NHzQGptE4YXDq2yLoTgvKKMwfyavgWfebboxKoQTMcmzbPTxeuTNbPhsEFQ8gBbzUSJSZPnfHFw",
  "key18": "5Hu3DenTkcdSp5SuB1DbAf5QHj38EU1tpEyzvUqgggBmzVm6dd2pKYVZWrNoRiSeNqikfx7YQ6fGFTpLrujujkP6",
  "key19": "2RXFwa3wbxPPp9YCcjdM1HRpVva1msewZduhKtfoW5oKuxUiW8w5kAuyxAZbppF2DtoWXiw8BGNaKQAcGs79Y1d7",
  "key20": "4KXvC1xgifnvJsDjuKG3iRZhu1DqoTH1wdbun1WGZu1fL3WyLoqQvG7QkAQfkmsANCAYTTnynysw6CLQtH29tRgw",
  "key21": "4EDC19Nm5RMkbFg7zQ6J7HwH4oH63qpYbqgnMxEWrnsdy5chqnBg5qNeZBksUytwnPLRXuxZ8Lxu4hgzhbtj6gs6",
  "key22": "RhMyQLNia2afVKpnX3Dee9D9sfD98CQ8KEWjxwDVyKgbvGm77oZzCdga9M8N26v3RSNHCSqAXXhn7Vzy7steLRE",
  "key23": "4bLUSoEG4PLJnzq6iSGQQPY2WRVLkzTwkKY9bQVHoLvmupwd7UNyBZE5HiTNhHa4iMBUcWYeH7yzz3J43znpbmvM",
  "key24": "41R5xFjoEH7uAfmNTCiigBFqr1gM39P7AsjFuQq71zp7NZtaUcsY6oioKCZByLVVmvUmnW1uGp8P4wY1PyA4iYzN",
  "key25": "3ZU5cEh6oNvzfBWhTb3v7iGnpthURRNAm3TgKTTYvyDNrqynpVHnPyf4Cv9Lb1duDbLG4SmuXMtMjg1drPuTtLXF",
  "key26": "5sGm5Nab6JddjdrG75QcpxHjtBe43xAbmYHAFnt2zDdmbTX2J9WRd1MAgyjxPWA57HCcc5iJTLBMVuGZw4nBfhLd",
  "key27": "2kLThihDJMZG7TyP9KA5z4475eW2bdHs4ADjSdQ6iEF7rBmWUN1eTSm6pCT5PYcsjTBD8m2iyuTa2k47uXM7ytzC",
  "key28": "2s9Wf3ARtMssd5KxEa2gn4EhT6VUtVgMUpvxMCcrik8GSyi5bcEyCCddoqMPPHBHm2fpqpWADda6p5mVHj2B4ric",
  "key29": "4xwvbGDLiqSmZSgdFNfzF43cftdeQEFAfHnTRQmueHHiFaJX9KauNH8LhTKWierbjWRF2bqe3Fd6Vg8GEVo5cuFX",
  "key30": "5zJMbKgALPmgvb52tQHf93sckJLeBMfayWTycCW3GBCGpi2eAP5myPjEPf7fTQgr2BqEdEDTNQkF4ATCu3ehK9w",
  "key31": "5LUUSwuuXKHbU3EApHooTgjkRN66UGaawT6jP5F51Nbjd5TjRcY9B5g1pC6kzibtMdguRaLavPwocvx9mYDbfEJy",
  "key32": "2dehsuWzHJ5D2swKzkTrNHg5h1jB2gU3HHUD8krVwAkS9mByGD9QajiAvLHKSx72tTEg4MkCX2sqtptkBUCA24yv",
  "key33": "4sd1w6brM6rYuiYbozhzmDBMJng5mvaRTo8zL9xChQgo1CVhqgZUuWoL5heoR4amVcNMQoHPZKysGQKZ3HjpjsxY",
  "key34": "Tt2muTgYDpiuJqUpzmJ4etbVMvdjjPBBJ2n9mqtw2kyBLqJmtNFDJ9uXhoRX8eX4t5MtWkqZZoFX9uWDvaujeaw",
  "key35": "2oshmy8uas7DGfmFDNSSPy3iCwdvQygA8McYCS3ZhF1zpqAysYiGUM8B2wVLyD6NDFzTqDdVph99z8h8Ma3fF8my",
  "key36": "5QGxXzx8CDyu2s8pD4eG4AowC1hqpBa3AeKPCHsCfzmnwYv6mcoko7EogMNKjvrhPnFRFJabXurPK4NUekCbkz4g",
  "key37": "FiRPiEgQhbqsm5SmSkuZAtFzz3qGEXQyxZ49FYjkgnKeuVEPqUbDVPnB5hnkLrwryzYpAEGC7AJeSFKPf4JQZcp",
  "key38": "5uZkeiMkGLvoMyqN1N4WrLSXjWef6sF7eXRqvBRjcdRZUK7MctUA7NFa5gCUemMYxjtzezFxQ1UcsaXd2eJY2ta4",
  "key39": "5FcvqR9qLb6KNH2cyccygEC8zVSbYTY2tWB5MXxFcA8HqZPfzyFrNZmJVT3Bu22Z1pMvCWLkrf9L5pkxYrasXTk3",
  "key40": "4Y2ydx6ST66aX5TRPxYN2gXJnnddtdBjWBhY4BsBWqeZWhE82BCfEvRjVRmbVX2hvD3hC34usN5mYBfxVTFFBr2",
  "key41": "5ACE24A9z3aZoXdYTAh91uBh4S49m86TeFGa7xyT5z1pmeWnGR1i4ijZi15eyr43BFyzoKQHCW5HcjCVRssH3K9"
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
