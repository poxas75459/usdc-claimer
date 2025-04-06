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
    "3gnHH7nq783q5PcbXofU8RbWeKYohTS3jjruMvcMCWXzyL778Kz4Q4esfRigfU2AhdbYEGkggQhAoiRYNRK89iJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjt1CQv5D9Tmpo4NzLz6cfJF5kk5RwF1mE8zEFrXb7urr2sPUyE8ioQxJxEstuxp6kn91q3o2UTnit2SBbfECDv",
  "key1": "3zg6SeR4NfUM94MZyYfS2YNKbqVjbWz68wUzBhGRep79iRgH38zYgsZGwHpScbiVtMGkJ3Xije7JdgE22JF5ZwkR",
  "key2": "35t3Toe6zgkA87w3W2s3wbLthuAx57aMkL5g2SsfFZEHq8rLiGoU8CeDBFN7wCw6uahPL5ERKdTAQEig5o48HsUq",
  "key3": "2MksiGgxdXXUwch9TsgmeGGxYytFdGBxRZNpAh5TvfsnRX2EpsDEV48HSDN9B8zchNUtW4wpC85Pnajv8cn4cTqi",
  "key4": "5M6cbQGeuepkbSYjzEcofugagJ5okmQNirZfwBoWmuZ9SoTzDxvmoJvfJeXYsGqi1ahAWMpJq58q2xrz5m62DEcs",
  "key5": "2dSf9CjLKe9ny5Xi8CXJphY35Cv3M84h3wogc5urtxDAm3DWUoHN7HjjMyVGw3mJYB9C1pTJ5xqanAicQwoKA2qk",
  "key6": "57NbTuQcZMAK2fqu3zvfQhAfVtAmQc8cd1t522C7P4RXWhRtvwGQ4Qe4S8n19svy5PPg5vaQg8voJ31TLLnkJsFT",
  "key7": "54iYupfenaUqg1qVC6Rj6ZtGjj8XKcmJFGaNLKesGsoRHNCQZQ5QEoK9KQSEZ8f5qRVX4ELMLC1QtRuTkhc7ypQX",
  "key8": "2v4mkzbRzT6iqH13JVpppBZ1tLQAiTN7U9dEwYmdt9vD2cFagKfXMsbstudjR5ExThcg3fvEo1NsMWw42VzJoqH7",
  "key9": "B7mqvhg1aH4Bot5Dsk1QqSAqpsGXU1TV3xzgi5APiThH1rPue6vvgCD7mvkLynRvLhf9DKhcABxDdSDcUWSUe1V",
  "key10": "3gjvgyJUuouDkCHksRKDotDuWmWQTtdwv4pDXFQpWS7oRQovxgRCBkoVY1tDSF9kTVK91F3AQ3b66bpYsdVJpBtk",
  "key11": "31pva6U55G7cKjZY48CPgt77TPnz43zV5MM5jK3vgo8JxznvuHUPy1frCdmdLChB561V6z9F32yZBdmXLkNSTAs5",
  "key12": "5wP4hRtoMg5tA8HHSp61gxHrwSyvZWs3drc4oB4Nv8T6wnCao5336oPKdyYzPYUwx5dt6FfCDPsqqcjYUSHb9RuR",
  "key13": "5XCkwhU2Wwm4CQNdfgnVyWSeJdU1eSw991pwAeovmfb9g8LUdgeebzvqtj2FR15jsaRkMcc9FABukCtszXniJcuM",
  "key14": "58cPD1c1NCrEoi6dh4EfmJb5kTypA3y8FXGoy4ZM9mp8q1Yn7vryQvRdpNqL68zy55cqzGJSKQwwe43UanWchXQL",
  "key15": "53JZGX9PiSp7qHZvEL834VuNStqEWrJKLueBbgzqHkgykh2wjW5ow8jseaT5TyCVpMTU1e1r5cd1DVfS1tQ1skVY",
  "key16": "3nnju82JcWYsVprR9sZbweLjqGCusi2QUwHTcQ9CauxarCUcDCUGDNxa7VoWZYeZcZmgDSdjEZsgQiQgzxdKtjLG",
  "key17": "4iwhWo9MbbR5eN8XGsTAa8S4Ay9TS1XHwhiNw6Ht5f7SouxFQo2Bd37hZvZBPxqKpXxY6MCCQxEJzGJp4iEYqQtr",
  "key18": "VMEQh2GqsavUR5VXw7FSYndhzYtyoRgtfvjVDBgrmpM9MfGT7dxF7a3Yikgva3aFCmRtL3WityJtho19sAVV6dR",
  "key19": "4bMMX8k1dKfLQUiMGxTDqJdt35fz4cUjVJeQTFWjB3122vnCN1mnJZDAACrXSvWNLDUKuZ5aavBC7hHPo3Pf17dd",
  "key20": "4p7JW6J3tfEWTtJfGebSfgK5sneBCtcHLvHSPEaPSzPJA5TGr4K6RfBnPV5PBSanAVyqgjaQUsjtTexk9deBbEfh",
  "key21": "2UZ5SEYutweXQtLkfcK8yA7R8wpLAxD8DouZaQ9xAFstgBiHaL8x96yGNELwrvVdBppwpW8iw7KPfVJvd8aogbA4",
  "key22": "6iGTRKx4fVpbF2p4cJrghL2kGaF6e2vEaVXbdZMw9YwtyvqwH2ZMmhR8GdhJjyKguChMKfzTrRDeU3LTHe1i2Vx",
  "key23": "26yLjPjy2LMVpcQhHq4PhycFKQqBCVp6C9hs6wGo3SYPzBLQsYConUTWc7PmCFQ9Ftuw8yAXkN14qaqQhTSts7Qy",
  "key24": "5BBfiLm3WPbS48UyJpnrhuf4yrhiVPFkveSSJDRe1DyxwgwmUgHGpFYdkfUXojEJv5iUPnHGW6iUK9mAyYPxw8Cr",
  "key25": "3yGuxVmGfJ5mFdxxipBGw9dWVsZ9A7NYn99MqAvbt7b6kMyaSKPK3KWLnsoMfbJ2Ptdrcgm4mHE9hfVvVdo8xB5A",
  "key26": "4WvYFk9eTAwwDADjzY5jPMMY1ek1e5b11XV1FzrnofVHHsbshmoYXLMkFRDcW4H3A4bRHZePCp6xXGt1MhzNrdos",
  "key27": "2FTjRWGrDDTidpgE9aX8eEAKBd6fJ5sP22M7gEeWU8tFwPXGD9m1uMhvYrpoNEo4iNyYmUYwZ4BZvweJnCU9cm1k",
  "key28": "3Mcfy9PspYQuyciVgC2hdSc4KHa7xzNfr8aA3PA6Ub3dTb4iA5cVr5XDQXPm8heeDMJyxzvX3otkYnHa1fiy7yx",
  "key29": "5KbVBvr4ByxrovEhUk8WTTJnzu7ECHV6kXTfn2JN3Rj46Fh4b7XmWhqzNki83ba9jcmjMnrLP1xodjag3q7rbbn2",
  "key30": "2x89sdTLyJnhLW2jbtwjbKNwhsHmuwxQkmV49fLEbMW5HjPBN2PQENRe3GYnqSnxb6CqN4Ukki3kGKUzSdpv8PTm",
  "key31": "59PntMqu5wpVJGgky6YyYb3ykkQMijcxNy3qcZbwaRCJv6TLLBkCVVxrcrJiZZ5qYhq1V6T5pgv8oxAoFviHvLb",
  "key32": "3B4eFzgVuDZtmQVL2xWUgRK1zzYQpx88V7uownMxTPsb1EGdvhHWKm8hQV9gPyqodvd68EodFP4WV5ymvkJVa7UD",
  "key33": "4TxWguKG3XKVESn3381k11xQ9gwCt7YPvzMUDbjKi1gnKiHTfKqR9R1d5dQiGcBLiqbJeDJgnzJwTfqqvoNohVwS",
  "key34": "4FoM94v2JSzhEzbYiCRTHD5XUVt7WPYNcHdUegQuvtV7pk2YQBJZMgYfLiRG9g8kYCFGgmEf4zBkxNMrzCq6sELg"
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
