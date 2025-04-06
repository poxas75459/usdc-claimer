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
    "37WJdu3EcNAdh3oskSy1xge6odDCDfRL2EeEvuXaEyCuYsrVw2K2ckyrNTqZAMLYv4hyd2kMxVHdwx1SPXQaC3zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugAZvX96p2VidtEUbLy4Stuh9pGe9nCVWjosjTuQkz5M6aJ4cC3DvKtKp9VCREMqR2x7bVg7iaqdwqQs3oe57ao",
  "key1": "5vrj3C6mRHjB3WkNjg8pPQm12mbnjtHXceV2FRX6Uxwc261ciHnpbcpXLSzrmPTv8up8EmFDokkohsJCxLuCDmD2",
  "key2": "3uYLZmtUASmE3nBkRik4nHfxyNkxRC6nxX7zL5nXA1i46XXzvcBzc1MYAvbkb8NXzSDNKLn7pKyMSveysQCf1yxk",
  "key3": "5HaMEVGU2D8t2Ek91sweyuT6sZ5NKcawvxv571mqYby5HQ6Bs16BZ6M6iqsMQp9AQcRpKmQTGY5quKDiUWs96XW7",
  "key4": "4X9oc3aqdja3VnbbPTSFRmCKbttgKdhxMSiUuPS6AVvGygVKzn7iZzxjgxbnhsoVCGVfxBFTHYjQKsX1mFRHNDk6",
  "key5": "4Kk7yHAkJdVC8eJEzUTB1DiJeEJJPvgRWoqtn2Wxa2nRU61cWfPNbEWG2xq1gbzLqVz8eKt37mR8Yd5gL29CCH7p",
  "key6": "5D6CF44Rr7VqDKvMQTBrJK3SrEFXmXgafFnD42pFgspNXxgXBUMMsUrAy2DdTKki2sFoKjngyeuazYUeLfnbXJsA",
  "key7": "5nGwcarfQomtBZzQLNp7n4z7TRHZw24SFwfHUuaugbkZcdzfcJEeL7H6WQUg2KV2GSMCdjZE17fKwqdTJVrdxdUK",
  "key8": "3K51u43yQXJyzJHkAWakGg3uEukTNtnG7RY7iSRjrqv8iE5PfQsgDfNX2ArxnNCxkeuDhfq4Ji3Ky2ZJ6Pta7HDB",
  "key9": "D5ckSZUTHiU928yN6UskhpM48ELAXWiLpmRLbpVJH13icJ3wfjbjKJTHhMnHea8mg8PmCeadL6htjYHQuEtyfdR",
  "key10": "2yu7biBc865RhzjzAM216jG8NnrEPRZpsFQKdhdBsSPGsxcqVTdndGJrp2hQ9ghHhYjwULshyKF1eX8pHY9jx7iB",
  "key11": "uXf6Nwew7vL9jnkUTZiWM6JD1GRtBPiB2U3dDhtACnE1jdcrVb5aodEiDYoDPW92PECuQJzxsdmTvnRYaiNxEVh",
  "key12": "Do3Q2SJxNJ22QKrBPkjyjyuoWY3hrNJpmr3m91r2HKhGcnHujq5fpeP2yCBTi3mfSghHJbUeCZFVGxrTNBpHsfh",
  "key13": "4V5VD1PyHmdoZPaCenZxsPdfRANoMgxYvuaTXUx86Yp8x9Yrk1zHnrykn8qUE2fbTCu94dgCtgRcXMjh7Pjhtqvh",
  "key14": "3WQmu1C9rGafuELrPqRht5Gj2DogKzQJGE2Sq65rkK2L64wPWUogDbKNGFhdLiuEc6rvY1ntVYD2wPkz5VxgeG76",
  "key15": "3ns2EhAZAPFQ6YQzGEbZ7BQD1YAQ6Bhs8x6Hk9qCQkNYemyrZa3qjEVpuqeeoV8qQuNKZZfDfEVhA1GXTYSFchFJ",
  "key16": "3rmohdsYjBGdPstE96qS6hkgJiCgbBuWP763pDs97KmAewWECRDDG7pte5ZMoRJxCdrqX7uDgZSi81msYFpGEg7M",
  "key17": "66WRcxjoviiF4dKWhSJSQEkcQ3y3itrsyKiK4JfCbKBUwk1rrjq7dgXfLBZM3RWtXADttxzvwtt74HK5g1GqsN1x",
  "key18": "5ysT2tyG4pkyfYUS6fPCsHMqVTkk29qPWwhkXW8RWPcX8fnPjkuutAVhcuaHrgR1GRkDXwi2yFjXZ88wD1zJKn9T",
  "key19": "M3Mhx2qJJdYZ4TcQSnH9Pjwyx44UxDef9eCRHEVPzfV3FCP6ue7sujhfxWEUNAa8RKvmjzkG6peTyRnhkEKTA7W",
  "key20": "2nmYtGstcVMz13Mbjyh2mCbDa6i4rWsay9kCqM7eSVYCZD1xi3uxVZb7KgnLZPXncKbCfFpnPg2jw11Dd1eWQPE6",
  "key21": "4XyaRSaWQWKqNomiiyY6HUCPhh7CEhPRvaWnHEde9TvrDUx8Yz5ggZ38jjxuLUqUhXe5d3UxsF5CEefnnsKgaKvB",
  "key22": "2mFcve3Z9ZrYWJ9eSH3QytAGnwi9xGZbp2gREz3GiGKJrjPNF7YVkc784UP3NYtpUWCmk9gHzVQoUvxd6dtWvsS8",
  "key23": "2MZgHhT7w9RDHFigYFyJy1z3zSd9nq8W66uqg1KyqcfzHFmkJnDTpmi4N3cnEY4h16z7CQuU21DqNxZdLNeSwFqK",
  "key24": "4xeNfnbHbH9kLiqpHFrsRd2HwktTFzCNPvnNQCyWKdYf2wChTRcE2Pw5oHfrUPkGbCLc3SXCbipDKeKZvi3N6iyq",
  "key25": "5KLECQAmWVKvoP1pZ2Z3NMcBQ1wFyvCe7VhEa2rBzuTwpiJ9FZic8Dp46AwJFsjvb1f8AywXX5Fr6n6Kqe5DPuVi",
  "key26": "kCetarGmAKwZ7JJHe5vTnhZaRSEHaftwEYYhPxDVn7kxsQtxkcw2yHGrMTYfZAuiz5XxM7nBo9arFCKN9n9QNv6",
  "key27": "3t63w4VarWXEzwCoiLAvBoWQvCzzHn55wxDHXTp8ic6vo57w2sRc7zzbVp5sDJtR5EpDsSmf4ZVvjyNbMjpAgpzH",
  "key28": "2V3RcBn3tVYdV4uc89qE6hbeLxu36uFBx8vVdqogbbJXyqJNUiJsdoar1F45dTWdQRbTDDTxwEN8F9H6ELoY8kA6",
  "key29": "62ynv2Cry4wtAv5Kx8CjYaiJYkvfoMi8wiRfdXKGWsY84L1o5Thv8Xj1LiutXZkir83rAjHKLTt3hZuE7BQxfcR4",
  "key30": "N9YnWRUyxeW3bbLkDNYMw84DteYzjfEoJX39pJvXEomS2NVfWRMAR2db6FJTpnSvyNju1NDSsLUvSadb4waZg73",
  "key31": "RD1ZvmUuJtrn7vYUz8qQY2MVAjZTyjvHLdUnSL9x7CRnaYUUR9Z1ynLa39HC491E5kYQZa7kEDuGTVV6EkPipyU",
  "key32": "5F5YF6LBtfrmEDfe4nyb5JshbyEJaGdiTipsi7bTKWEt5UrUkakyhuUUt3wkyeAti2pR8NZUApEV5d14GZfuqbVy",
  "key33": "5pqKfsm81n9RCh9nh1nFHQsRrcpoPtfvwuMVDgV4juTWLZWe9D7SCbofjoJF9KwEoDMfXYmhXtP3mNJmmGfHoP3M"
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
