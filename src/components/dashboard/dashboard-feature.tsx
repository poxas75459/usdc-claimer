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
    "UeCnE6M8iSqTzcKQ56Yt1tnLse7m5NyiTAdTdN11zpWjGtdgy7HfHeABA6SVRWV5WdFnQ65DPhHqfqo6Bjk8cey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f2xWsAPSgNPaRBWWzt4E1e7wpd1rZ2uWt3Gv4LksdsQHYNi4D1uNLZVWXcp7CAx72xdZ1e5DXRWBDfJrXgh4DYr",
  "key1": "5hkBgvN9Vmu7H6ZmBokz3kUPP9XvG5BW3JUavy2Hk8UASnRf5TyRDDUahfFFm2Kg4uBDJUmXmC8mw3qXKahum4St",
  "key2": "PmYZ7CwbZiBGuCqs2NR7WCLoqxNbhwMMgcC2FUcRqmdhpNPcnUTSDYNXN9NHZS7v7W4psvJdyTrXJZ64FGHJE9K",
  "key3": "4ojACTEQRz8QZVSw7jMfRMW55Y7G5SW9R26RCZExiTvW7rKaaqFzMwuMQYEkTzGN78KqaM7STKaXBsG2MWbDtXNR",
  "key4": "2KnDxfAwSbtSZun5UEZUGpEiasroBtSqoEn9bw86TLNGEoZZepihBkzXj187KjCHmYhC4H9sdgcJca4Ca5jaBmzv",
  "key5": "3FCtQv4uNuQdcAhrNxi9nwdfybV59gAea7qknLaUeqe6HjQXGfvp67UbAGEatLf1wiSebenJc6KY6rc5pL5KwSzz",
  "key6": "3Gwgb9jXFqctXkNHEsxxV4wdKdGtxqN5AQ2x9m37uqPLRC9vQfTFDSj5zwRzaYNxua8pEzHN3XeggqjrEEcGxTsq",
  "key7": "57VKSw1knLgvpb6jDPHjGbCTP4SRcUxoqoSrupDYVXjzFT8PPkcHkWBkSuR3eng3o99gExV6UCvdBHt3tzFRLCNp",
  "key8": "38HJdotvo7xn19RA1zSFS8JdNkpZ8hurpjDXkTw3D3JzQroyGnjs9c2ZrW3HhxvQhYhYqbGcZzzfMpKhkS1evCpr",
  "key9": "4U1WXWcBztPQp1iL98TdDzKs4Xbra6V1RgeWH8QPaxDSXXBsaLvM5xmXeTcEok8zU7jnXdAErVXqvRx73GeeE8fC",
  "key10": "35NPV2cqEn88PN2zdNLRwJnfKNSyKcZLpHf1duniCLNakwy1YRMK5pfomZ1mSQYLKZeHE6kh4DMffYFGK2S3FABV",
  "key11": "2hayTStMr64K8tUU6jG6BWbEcrV2oMZgMmt8YcSGWyVNJfy2hK9cgEf6qMySBKBWs85QgruW6sUmkE2Fa9fCHNi5",
  "key12": "37NbGCjPPX6sFJAXAJ6BrCWgPXaPNh1yGgDnHDVk7Z2DfozjoHBFGVKPcs2CHXJdoC7z4k1xS85X8tuGVE2eWQgn",
  "key13": "4GWR53NbtxsfGm3WZVKifhuf2F2p99MdZwbgmhxSnpYThpUuggw9ZBLw6bArGre9a2g54M1i4JqQfC52CzyX5Vw3",
  "key14": "5A2eoSNGGBsG9zXHHirshWRMmX9jgX9Nv4FFBEGJDevHxDVCEtHoPpwUHG6W9BkexFKTXbDE8HJLqjw3udUFrmCF",
  "key15": "fPoNUqjKkBpSyySuURsVjS6r5PLxZcQmay9kAmvwwoVoMksKYdBwZqPAodax4Wsp2pbRuxpLEvMGeJ19ZHqjD6x",
  "key16": "4hzxNXyeErJA3AE7ugBLo8QgHMvP8oe4xqQeGgjMV6LE3muhktrT5U1QB2m4VJ63umc6MN88MZq3kmBwKok125AA",
  "key17": "5QypA9cPJW931QLvCeRnMMcf67pzXCJJSc5x4URdhN1BiQnTkY6oVmAino1GeHxKKR88riruFaFnaf6RBJEWfqcj",
  "key18": "4wk4jkbZdip19QNrms4PY74DJWrutPn3NBCNta1kVbY8jmomYiLMfX6AD79EdyUfJWeXuSjd5CCAAfnUXZEzvbTN",
  "key19": "52Ud3RtCtn3vTRUoFhpkE7cVKfmdunn9BenKb56DHNA9of8P3izKeJvHbhgzs2sA5YbktsuVLermeEis7HnbXuBZ",
  "key20": "2HzTv2vhSUxgt2JjqCzHPxeqjVEWWURnnEiMuf1eQrtQYXfw4THnipRKaeQVbTa3gatJjhy68RxAXg4FohD1w7Sc",
  "key21": "63bAy6Fg3fAyiTVspvgUXcdkGzzwtPAvR9hW1KYRss3rUzv4ncZqvPsvdLHCuX6EZg7S1VnPaQAjMp5L1faHAKnK",
  "key22": "E6hH1NmXf916cYSSVioTZgS3iLCSP398KXWWiBm6nNE95igifsn6MVwmEKnVtcdKjszhbXs261CE1jAZvPnfso4",
  "key23": "5LDJ87XNtYodhJCxs9VukVSby35WY2LWiYSbRJfQ7eYnUcZzBSJDmcPKexREkRVQS4KyUHPvGYpu6SGtxrD2ovsi",
  "key24": "ckmPyVVgAnrJMqTZboeFimfiZmfdCt1BeDm6h6BQRXMaCs7D87TW9Axi9VMdHr1ZV9PyB69vKCzS24NwLbRBxub",
  "key25": "5f7cxBqUdCYkW3JkhMYYJmr16EkJssCxu724R1sCXxnLtRqowi8PNRBhKPQZ7B8GxhGdngtW5GkELvxjjemmkgYc",
  "key26": "5dckxLvvK5KD556vPzWCmjkmbYyePA5DGd1NG2sjKEftyVyjMHFU3wTQzMiXvKZgibGtZfQvRysuSbiDusM5rGCY",
  "key27": "2sPiTbKicx2fJXFFSTSi3JYpT4EZvwFJ8v1pU7DRRWTnZAD1Ffo5iczcEbU8vorN8ie1fTwUR1VMiBbyFvQBLVSz",
  "key28": "3YqwHJTqMZZrozG6uELJrZxR3ajDkEZwfSo7nNNWwPM4AQgCFdFXtdCqPRkF4Gj72M8No9L4V9Mv6jS9xmWZhKFu",
  "key29": "5Wh9UNLsjby1AurSHb8aDxvhj7RiS6JpcPME7aKoofpBX7Tem7ktBBCYBXN22e3Ra8mRJdNz9W3wdfjDJ4S1p6Wj",
  "key30": "48ZxSqk2VNjuZ5J7Vpfx1tS8x5fCkKyGaQdLcpZaV1oVqEMoFh9HQi4GxuLeSbGRpC1Dj1Kz1hWJZZZ9LcUWvpaT",
  "key31": "3T4j5RcEn9R22JfZc6T1nsnyJ39DGzhS77EMqWpCdsmwn5v2QLecfC8rdZw3wvSRJ9U4EbWtRchXBAXxiaUJ4Enr",
  "key32": "2ycu5uVo2a3PQBYpN8BDvjvVFmaK1DQ65fCAMY3JqAgwPtpS7MQyhMDLga5ZFLLpUS2zeSFYkCtHsJtUt8PtjKNa",
  "key33": "Zre6aQUghGDwe6jSneZRBJAhsASkFG3QWntpTVSEY2WsbzJmtv6ABnWAaLkcyhQspG2YJGLDsr15nv8Ddb2UGJj",
  "key34": "2DzCZVBk5wxjzg6e8Jizc96VYBgZwvGJ2fbqVtf7rxmoWuiRx2gjH7e8aixKiQHjHBhic1PUV8bVbJhupNCygPUR",
  "key35": "5CB13j196KgrpRiwVq5PmXuDiLNnbPcdNcgjmETUbUXWbPQ8qS4jXunU3KWEPNEmvTQQQkMUZZjY6QCBJ4xgCfrm",
  "key36": "4LQsAoTkDEKUhCVUgNjrWDz5kh11Gahsvj3mQUZcATFkCLEndmLY9PHtRFQf9mYhua1DPKE4VcL1V5HE7YGmx69f",
  "key37": "5i5QguewnJ6ATY9AZEP4SvHJYTXtAuVC76x2o3nXmuCx7zGWbFiAHhVACdS8M7GBLDKd4dGKtrGfN3smNDXyCnYT"
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
