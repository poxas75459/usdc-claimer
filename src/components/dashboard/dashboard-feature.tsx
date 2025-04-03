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
    "4p4VnFEhmw5fjbNZPUXXn8c9pQKDbfqqUypoLC9xWjX7Z8Ua2567BoKfQnjPZnaXZNRmeT3pcQ8kMB2EnuxFMWfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGRF6q8cFZXK8wGhwekcZLB7BQPPxfEYqoWeMXxRKZK9WPpTcLkJJA4fN616J5WAprFsxUyaZdpXjpUradp3dUX",
  "key1": "4D7Ld5bR55RHrwDyCnaWXdqpbEUSEpV6ZUrMasTQbzqcRHLwGRuqJMzm7ExWVCx1SMTxh1sLQ6RRQtyEpng35aV3",
  "key2": "48v3EzgZczA59tYFeRq2nBPSN5UczGFb1oFzPXasdYZtgzyb4f8Sn3f3RueZN3om5o77RMn4KF9j6ipRDoDNS4wY",
  "key3": "4Ppmve6TudfW7mbjBdJ2EU8tzHHrrRSMMbhKiohNMEidFibHqoS9ooz2CkkAPSVB2fkZpwU2V39QorQahoWXRswS",
  "key4": "3f6ZYGTxrQt3pfykejRS1jruZ6e19GZ2D1TZLMDVwcBN3Zc6LptYZ8hb7nCpTHLQozp2puXVSbZs8tmCBm8L5N6D",
  "key5": "56gXD6y816BZRfmJ9yv8VfAyuM1FhmSUdcuw2rvS7wm36B1UxN5BcSp8VFqDUDumToUn16AhLdPx55ZrrngxZeRe",
  "key6": "2vdtnmV6ADQsNx5EWRwtMAcqxd3NbwCvgHe2FDEwrCdAXsJxFybSNXh2Y6XWGyZuztckdyN6Ldw625vJ8tyzy5AD",
  "key7": "B9ePLwHbzPCsJ8vsmyZZSt4Ck14TVyBH8Em4PKTo3ZqSiwWCCWB1sxVEcszPKV7KWzmTe4Qn4kqKNeoBnzG6CHr",
  "key8": "5ULdU6oty7cFX1KfL9FAmQEjQsJ743yT5TMno412hDxUj3VCGNfh7joc6uBFtv4JScVLFaGdgNMV7pmiXHjSZWVd",
  "key9": "3F5dDJG1LRviYbwGq55YZg4rsGKP63n7iB54hmAk2gYDZKvwVXW5c5RQ4g9gSRtsD4ZbBEdZApfStLQozycH4sDJ",
  "key10": "3yZG4qBpLTqP3pypqS1NhFLwVTRyH1dAYwYSeCQtaCnvWfdedYZjbbcEqmnLgC1RWQqnxRnQS7swi5JFgFJsSze3",
  "key11": "3Qtv86RfSawDPY76qogxpjBJmexThZkpsPWjx3KBqPuPEgAjZqvjmGZAQA6TqQgvcW5rVfvWziUPJTtTw6tHwiAe",
  "key12": "4CNJyrd2WZTG6jxZxv25EA53DZWRqXGABrEzstU2vzyCefHDfxATe65gNgEgzDPGYMRNoAsQ9s6dS5SKpcaczeSu",
  "key13": "5owsaJZh4q7pwNNo3VS5wssD3AWJfdiY3Z7sL6TdUEgKzKmebH2trnumXupcZXHBThjC25HRWGGh3yvfvVJ24WW7",
  "key14": "4Ei16YC92SvyKvTxuSnfHb2k7ZpXcByLRWnd7XraGUzw3reftwVuDVjaiGtjc8HEgWYz6unRwyNEC7PHxeHffGQp",
  "key15": "2CZ49AGMuxzedtTMdJyck6DRqU6EyNDTpZjonNmKbk1HXm8ZYSGFq6XbhHXa3FTSjM5wcG9URqT5BGWSt7kEBDty",
  "key16": "2zpyPCrWCY4ujJubeBMMPPUuExQtezKwjQD2t6v7exaJLdqjaW3VTTWhuxVXWtQixJbnkD1utnxNMooPDoWk6qpg",
  "key17": "t2WEqpLsEPAK5mKy7semHi8BN96jo7dUQzJpPwHDZbYwidqcAou3RfHPqpCbRh19tfaMUvxbt37Z6gMFpm5GPNw",
  "key18": "4XoNRAywxdwP59w1YTtit5GZJP9tz8qTUBHLtfB38fVha7qaS2EFT2RhySkW7MLMP5gXXmWRXoNGoYUV2TZpA7ty",
  "key19": "5C3QX7ZXzuhRHz8F4FwPnHmH4EWwGt14mjtSrwuJKPTWidc73GQQoT1xd9a1fQSesN4x1bDxPNsi94rHgo9eYzmu",
  "key20": "21cyGxevLZ8WhxfNSzcgBTJZZL361ojCVuzGwW27RK5Qi9uHo4KGXnaUs5mj8j1GjrfSJRzoqkT4bsJmohH7RmmW",
  "key21": "3UoZXn3HkzEX34ScNpj5eThz1VtiHArdNJsUC8CdVZ4H3ZaAAPaxSv7TTqNVAhz8kZ5csfwwZwGPuzhUR2AfHN5A",
  "key22": "3TcwwFn2vtcrUNrpYUda6Ms59nkQ7NKrRFnL2Z41qNG78pgJguUzE6YnhDdpbzUZ9gqSf2soiwB9A8yrZoTViwQf",
  "key23": "2Rc9YkcqLd8qZeTXu8U62AEaBzWib8HxExCVYuRgKjfnbbctrHmFysZenE9JkxwKPu8VUMwKbGgjyC5pUbmSd7AB",
  "key24": "4SVaRcyZ6m8kamsQAVLshGeWMbP3xUCKv1DdEdRhbSmU1faorY5GUfuoYHSwcLGbqiAv61t5Hdc5g3WQ5wLdDqXU",
  "key25": "RvMZQhcwyQnuhYp5jbk2okVWmHdTTQFDJvfZXFEF6GPHqUMoCShq9TA6B2Z1MinmNGbRB7p6qTqvnhoxq85dwL1",
  "key26": "5rHvMpELo7AyAP7x92vrF2onmJFjoECQPmtSSESDhhzcB7LhcZSZA83WsrqpcjjWQuU2UiUSJMLRpAVx5fprK3JR",
  "key27": "4c3i3zPTWr15ksFu4a4PdPpm23tNVeMM8KskKCWxSBtR8K9cdNKurzhLLjLmuKdoNuFLrNgJbFjZQ5DwouusEACz",
  "key28": "4EHdbTFY6FEGsYBktktdHXJYr8Wp92zBk9dCPj6Uwq1eT413QNcADNqrkT7zmDTHNVhvEG8YT73yFSNCjtwSntQP",
  "key29": "3JtYyJZDTrXtnUEazpZMQVfJpiUyRw4BvewMNwYzvrnMC3TJcvdhgGwZvgx4qLNHtgYxN3RWMtSdgyNYQKD6nQAk",
  "key30": "3qWDhoKVjoRrjPqrVpMfm3AaE4WtMrhKAZ8xwuGmdwh5V8g1m9i6ZKYJjucU7QzSdxmDSnecbQXmu2pJpXwUjf27",
  "key31": "2DPBg4JH8vHBfSoSsVz4oD8BhB21R4UhbbJDvfkifytudLGbZMQSs1KvjYi1ZZBFiH5WABBHNfbXPU34oVGfHFsM",
  "key32": "4SELdK14K1yifRBr7MnfjXXh6LkbHa2SVhYhmY1d43G5RmwJHrHP5ek4qJUBYjkRHTmzH6xKfrT2CNoePJVXXtFX",
  "key33": "1rQpaf72hyDE5dAjXEoVrtGwn7rmfyuZGjRsZYzefiRd2TcBfR9ZCW3X5z8eKEwQgY4cyeA6bPMvRt7RM5pYF9T",
  "key34": "22yxujSHbkTuZ7hd8dW71BY7AR2aW78Bqizqpjthp79GAENmQgCYm6ivUTmv8b9TcENufbtzxiTjqbgt2V7cSytc",
  "key35": "4KjwybEZ1fYrAbHUF9NCSyKXPj3TDy1i9zTmJryHUgiPCJNg5hXCAWRb9hCg9W38dfiBN5o143sfNEnV3swu77TB",
  "key36": "5SebWpD6SHoG3JEm6T4MrUDJg6aweDDB4UE7k5n7Rod4p4RhgU2Hu2Cx9w8yewWWc8jrww6nG5Ffc7d39cm8D19f"
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
