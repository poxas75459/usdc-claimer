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
    "4q37DtJqyebietNL7Hv2gNPGkwf3Bo7PofdmtNhh8WsPrvQ8hRPofpwwgJL8fBjy84ycKvRqquKATKsEiQs55Cxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFvrMPkApbDAhMijiQAutKzkv9adWJbira8bKBLkozxULVGgkJVaLEaYvwe3WL8kbgAMNwmqjGb2ozZwNuwnDCP",
  "key1": "4TYTkhGbrQJHTGTfC9PKdkbdTx4ReWQwnrBsedjEV63XNHQ1eF4q8wN451NSKMznmFa38cYCogHAu9ENUenyFoJ6",
  "key2": "21BmxDZQGCLKvW1bqGBVNSuLU6yjxpmBEjVDLyYi62vrrrzXwQUeaCMEQMZUu2VPkjBfDQUfWc1qh2jeRQqhYd67",
  "key3": "2j8qXpj8CFdqwFM4gFFAUgN8KkfX7T8L8bEfdWCRPnfffrbUjmAxQKWbgk2dUcHfa3qN2wieBLZRK1v5pLS5e8iM",
  "key4": "28uygUnkZMaDqPHV9qFuSqJEgxCpAQ2qmGqZiLn1QxQoNZvWp72dGHBfAEH14ema2KGjCEizPv1QXWiv5HQoQVy7",
  "key5": "mG6gmdA6BNEKDUJbzacWuFoZSfNcV1cUpVuMenvyayNJnmgjjzs3TrtL1B9zfQ4XJWisXSNvLBnUFJ1Mwro6rwn",
  "key6": "2azFUEjbSukmqG8Upq51CosRxtPXQXgPBuDZHVRL7vfUwsFq25nDrgCML9r3avwuvpZKWgAHjpPARafjN7cYVmqC",
  "key7": "u3m12fAoWYuE2QHgcYGQ9K7ZPn5ucHeE6LBhYtFi2HTuuUnZEQx5SqyJFJawCuPJKFKaCJsdJnzMpnnYiotw153",
  "key8": "4kEHkFHsmqsWvoMF1gU4fXHcp86Xo8Qp3bj6FTtuMWiHDi3La3zyapLN1aQtG3rvuMVZkbqxyGAwj41wyH8N7GLQ",
  "key9": "HBYdknNS5LxhXvrZGRSESRMWUe8oQFEzfhBenfk6x7txR9HdUC55dUHjN5GeKKYNDHFmcj4Tz7bv2gAcxymdKGU",
  "key10": "5o6hrsA1TQvkdDxgdEHpLTyFNkdUc7AcpESmPBcVsdvpoVu3sHVZCBUPzEHeYtYGei2cSgZFvn9FF5Bm61jkFD22",
  "key11": "3Q2oh8jiDDtUZjxVxG6s3Jh9UV6Ag9NdzEZ74GmWUiuQ7de21haTMoKGzuLmx6Y4Ri5cR3E5FnsewcJ4aEoFXt95",
  "key12": "3DksmhcoKiM4MEcb5bhraMKahnirViHnVMNkHuRqNCxHehFsGkMW9hNyf4wMKt4SMfLcgbBuromaqihX9oGUXLXR",
  "key13": "5bWF64ZKTTYZpdyNbuncW1bvZAusD88UaLb4hTsWXWbG7Vtn6bDMKwjahon6Wn41sAX92u1Ms5UtVHGiXb7bM6Yj",
  "key14": "5XHXwpRDTqJLAa3qamrfirxFVQZH5u8zaeAAy3aaeUAypzHLSzirNA6zEZ4S5wsq5EhiDYK1WZrMDCi7VfaRoUWH",
  "key15": "RME6mpEd7hNW5y1yqYSbNbUHfLtt4ZT6UavXQyaK37s5JRq8wNSr6Rd5GuLtaDmwRBFjmP9MvsSSNSjLojwH3JG",
  "key16": "5tnogumgQJgTjqrnVCat4CW9ZWgWDqpZBDUzaTSKebBByjZdQG87KkfoYW5Ch4ApuAdZ8MUjWAtRj14tdpL32QRM",
  "key17": "th2LMw5GtLQRcZZ6SFCM74Li8DXLDjbeF2eLCh7qaUiZEq19gf2AeAFD3g4Jj5D7MZkkFXagneb51Fmm5z44y38",
  "key18": "4cBeKZfNHv5q8wHs8quUxUjamTX6A9Nf2eUdbdyQtzTRfsEHPGWvRebiwo8hSH4JDacnU8FhJmdN2D56zgn3u7Tf",
  "key19": "41pG3ZZ8uaaLgP1GWPsBcpyoU57x2zpSHfSBgKkvT75tZraYRjg5nhMDa7acChx59gEohWAx7GPynuuAHANXcxSg",
  "key20": "3SMKXer3grmd1djVvan4TGbfBT5ha4zfKUswEqDxMnaqZUjVXuiwKBejVNQeJEUB69kF3JQoFm1cdZ84f69Q9zLB",
  "key21": "4Jd4KqMWKtGCbRuSREbimoSH54MqqwTewAmeTcaSCNYxs6Ya1xMy3yshZWfLwtrFonT1AXtUegS45LHUYsSTk8PH",
  "key22": "2qH8vGEs6DTckUYVo7m1t8A4USu6BZvCLVu8Jp9HmteM9Etr2GFc4ExXFXFqtbWuKVgczrUyBUYQFU9gCW7H6cTd",
  "key23": "33EgMBqt5jAr68nNLQPFkwL3RYckjbDKt28QJaz7kNZaePYD7eEfuLzeoHEy55U3UMT36XcpAhaJNdqk6a58oNLf",
  "key24": "CLykUgiRSrChj3oUKXcP8r4uReJotqkXh3KyuNHREwkqdKzX8uH1mChMkcndDn8pedMiKuFZGQVT1vVyrKoK1eL",
  "key25": "wC5osfZNQHthPGyCUTWBaQw4rHX5sw3xuMeTbg5rhMn2ggigEqZmLi9qFPASkDoAyncQsaxgNB7c8qiuc7XaviK",
  "key26": "SFf6bGYf2FGXSq6KMsvXFkWzAZkaJymaC6PUA3vkqCQG9jjCHt2q5kwHR8WnDqyBt121f6yf68tFzpoxs83jE8S",
  "key27": "5uZdAaFNiV8uL5qYhwGM4P7V1JrqzGC3sp1o1sUBu4dcLU228LSdcPieD6xACFPXyn88ZXPZuwWpLVniZHvSQYTH",
  "key28": "2bqVX2Ejmg6cdSBXNKM7urKYkg9GgUTykEPoRJScxxFb5cM12eShF6bVtgJoz1G889X9Q47Hy9AbdQq5LoXnbD8W",
  "key29": "3WuzSMd7HW1TVCGcmmSDauPjj3pxSDH8miyUzPxk9ihoE6fZpzgW6NogxZMBAgeqp7iSkYdcGcjBNV9VbR9wizms",
  "key30": "4hRuB8S4qHhGvoDBStBcec5h92qKKPZUpXdV91HhehAWDEkcdmzZSvcCtENZGm8zgjyUXSRa8rAuMGew1hb1B9hx",
  "key31": "2YmniaFaxb5EKZEKX5WctLDSqy1Cz2HhXyoXrRASQkt8H48CpWKDCe7Hc9CA8gQZ9tR6PhhB3HaTfYnpybnU9BzM",
  "key32": "ymc1nadoC1CHdyJJi56goXTT3DMsH29wEbdwUUekEHaqkEMGUdYqjLHkqjMzysjnJxpS6CZqQYis9csbHzb6ML7",
  "key33": "27ymGRgwV1ghd7dgAfJfj7TUVsjuEpJT5daptb6smQbaakkrMeEz5SRVJWSvxjJBBYigoHjUtNV1dL7edcptus52",
  "key34": "3tCJT1a5Lp7GN3DPzrcA5BEaAUYt9brYgVWNyhgLrPN5c5jifVbqbk9gU7gSsyjkgSX2aYymhAx7AmM1gyvT2ijY",
  "key35": "8J2oe4sfjdiW6qfU9CNJaVwc5fFxVQmjK3wrDGuXN5Hr11iWCDbeefLQcdJFNg47SrpN16AL4pU4dsevkSmh6uH",
  "key36": "51TJk6XD6ijA8CqMqMF3AndctDxgiToyPTQnitevHdJcea1S36dKWegvCvH6j8PbgtrDveWpxZySymiYKUpVwxby"
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
