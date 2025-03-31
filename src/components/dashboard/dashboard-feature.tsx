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
    "4zPWMz1o8MYL4ekyks3h3EPJJJhTzQ5QeY7wEFaGMnL5nq8zUPrmo6sW3cDnK9HsQLj9kkaCv9wqAE1ixo7871PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7ViiX8H19faisqVmap3PwLq1KVh1hVDad28zfkhBsoAzHwvbHm3eZa8j7LrkXoZ6oMxzGvCcEqNnGZxFcYKWeJ",
  "key1": "3S8vnaCtN5wvYW7mA8TDJHb9DJSsZQjSU5pokPmS3QdaB1SLzBkSPMcLHHoPyEFX7rQkiuzoBNrierZvaTjYV54G",
  "key2": "3r79Yte9yMXDS62pEM1w2dKeALhGMP7A2b7aFnc1gSdBv2V8ceeXFWq89bWV5axaZLAjMCbAm5Dde8qcJKmDdLS8",
  "key3": "dP3iJ1YkRTX6USxbqHcJxjUPGu7Ud586M6sfFgzjM8K4PUXZvcxx7DByi7wnKAQyBF3nJKYRKLsqyRvg3Sjezcx",
  "key4": "2yibP9p2qFh6Ew6UxwevevZUyBaQgm4RnX5uXdbvtcyzXzGsuouSLhywwFHapEFM79c5TBeBRcgVEJdaMzroBiXv",
  "key5": "5SLBVKGeMSWh9X68F1Cp718Y5SF5VeBB32YFzozawXihtscVBA4Hs4AbZSBo2wyeKLkTC7oKEKkHvtu38QSk3kQK",
  "key6": "26SiuWqG6jQY6SQrrf81xtAcgKTiRF4u6KFQGgWbXAQx7FReGhsuQnPLGUoxpS5FT1Jc9T3KqTAhHGQJfmCAbuP9",
  "key7": "32M9oNkS1HwhxKX4ehdd7sBtZaLBqH5K7PC5f8b1FSyCM1yFGgqyAJ57Jt5ft4zFdivgXU4HBHMzxdJsq1m8k8y8",
  "key8": "4uA2wi65xo7smQNj34yuhNxvCBbSYm6266wnUjZdcsfVKit5R3Dsk5wBvJmAW3WeiCwu3awbJ9UC5GWDg4sHnzdd",
  "key9": "2aJN1kviYHetkQtqyUsCf9457JMNoLsWVhWBtZBxzQbTMJyZa1Q99gp2pbT3scvUDxsvtZAxAvfpJeSX5G8SWKBp",
  "key10": "898bp84YVXhQrEM8eC7zYpjHiCxsKxYJt2rWhLQXac3C2qdbXGBvy6qsCcTvZs2TzpE6t7gmW54owsHSfYM8qJy",
  "key11": "2hFzW7YsBdLmfS8kbRGmPMJQdzL63tFrM9c1sQ6B4YpTEwp8mM39HzsEBfcpb7whzBFTQFHtA1Hcj5YZ8ucGTt78",
  "key12": "4hixYaQjcQcNY5r4QnrKnNomYrk5biFSvHxXPiCgKTPvuxvKtesqqmtKp12XNEcBeH1FozKnkapeSb5LjBnUooB4",
  "key13": "2Uq9iLd6V11hg1vqBdGQ6k58sTeu6TtPYd8YKAeUUFpoQtMi8Gv3eJbiPAsZZXbNSP88qLaxEJZzjBXZmnNMhKLH",
  "key14": "5f3FshegxXbXN5NR2BXGb53BQkiKG5vVQkCG33LPuANRzaxQyvwK64mZu7xgyt3V2hudKswoisXrThuSvFU88Sr8",
  "key15": "3HeeRDvjuUEykKyWhM5SWzjn6SV32G3JtpeXwRznEzXKn2veGRBLvEBJ4sbzEmBbRFdxPFkXgz4UPDVpgNyA75B",
  "key16": "2Pr1sTG5hhVkPddf993TQtTqAz5AsEgPs9zJMbsW9o3Y5GMosWPYXotzegwxR6KQhe3MJCjvEkPDD373voVHhXcP",
  "key17": "4eADMqPNkqutiZfWmjWib9NH6HJGWbUaY41TofjznSdfFuGdYrC5j9wdCNaVPaWzbt6hYKpZGsQeM8HWE33W5wNH",
  "key18": "3qWzWjwa1uvMjFUvqj8bTEfW6sob19pDWKXJKTLnoDMVWzYh4fQHSEUcJfHcCDvgjGqkuiaWeLtKxh2rX4fzrVM1",
  "key19": "ffUeceEZTJpks4EdKttYwkLpErxJU21VsdoMKDnnX3Z6QTJ6ZysiFsPyKjfM4G8x9bAvw5SfYsqLRrRniuuxNjZ",
  "key20": "iTUzcWa4AE1feQmVf8rGUaR3SoKxg7Ud3DdbntyZ5XBsYrt1QMXR2tYJPjo29VDFRiFfeArkPo5D55LeiomWDzL",
  "key21": "2i1hb866TNDAR7AYeHXZqqzwqmT1qhWsYwFKAQpjyvoPS8SKxKm2DDQ3hLUWJAMdUm7Z6KkgYFjsf49hbwRqt7E4",
  "key22": "62y8YQq36BP3bBG6vutooMefbwBoSjyHHzeeqqKXjn8WGKtmgTsvrdcBHvuwbTRSZ4qdCqttRSFYcXyJcGshwjcL",
  "key23": "4oGdxcYPfnH9PAnz1Ka5w1p5CXE8LeSWVMH447xY8TWpsygDJjrKkXA6jHQaAeME9J2v6BCxQVHVx2LmXuNBehWL",
  "key24": "4BDNgVSTzBm6u8XdeS37anjSvT3JKZrs1ypvwrYvPaEovxfbagbsptc6KUV2UCzF6bp6tx2sPJjntfdAgCWFy1EB",
  "key25": "21rw3r2ird6MgYpv2Jp3mqqztxL2dTkVyM2YMenYPfHYZ37njPtTeGdqntzPjmXVu217FnWhXPKvTz4MZiemngKb",
  "key26": "3F93PisHU7dgseHqv8o6ZJUghpwXZxsH3CBn7yTauJt9h2V7xiybfLvGizuRcPZBdUgCERSunyJZCbxQ3FqSme6y",
  "key27": "3h7xiACr6VwXxVtdcFuVdqguSYvwMXMUS5ogKtU9LUtZJSCWVVsaUW2sKzMuX5yyKCh6HfStKVZRhX3aNYE3y1wk",
  "key28": "3m6Qk9Phsdq2bxBC8mrcYDDMw2sgceC6Q2MMqXmkQ9iEFQfyHSQJ2Pitf547RX9zWT5E5DiTms9Ve7EaFZwEoqop",
  "key29": "XVcK7JvCRqFzRRY3jxV9ivfg4sarFx7rKLoMgtAD4NTXDjLSnhC3wgbVk9kCDciSRrnN55j9LJJgg9kxVdRKGNp",
  "key30": "66N5ELmysSF7vi6azg4FzoqwNGhrSgTqfcfVkvVpKrYooXxNkXbkPUHcS9MFPbpTqj3zoF8wfcePKyfVfhFYsgkC",
  "key31": "EJ3ZWKyxzFchC6VmN7LttEpZM4yyZf5Rr5MPQ9NfBDmvW9WRb97A8FsjT5QZe6iTJmdSdvjcm1qYfzVHfGtoc4L",
  "key32": "4JSMmJsJq7SyADs6gLHm4wP4x9YQLQsN9TZBAGvEYn1ny4rKCSAtanYQTXtK6BfsQixh7FMuZsJgN6KYAduWLovJ",
  "key33": "64MhW6sqV8eJL4RkymPNFo2JJfgjCZu4Qc6Y5e5CmcZTbm4qeQ4KCcTJAQamD7BKxe2Burf16ABFnsvxfG3rPVRw",
  "key34": "4eLZKR92nEt2kvobbsQm4zduDM1jVomf5tP8tdkM8DmmL1piMcVHA3Knc1zq1ZRTPyjGyTxhAZyyo8pv4yY5J99j",
  "key35": "ukhAY3LR2qLDiqduD7DYQ5f4wD3kJnabeoRXyWKNcrSXKiuiQxEzP5o2Ue9FnJaU3iPBLaHDMbn9Q7Pe1ZtWqZH",
  "key36": "3CXqJpRcPXefLsq8kEuUMPo9pJmao77C9ro1YBxchm8iXxRERCVb37habTSioxVruVsCckHaaV99TJJGk9k5yUKw",
  "key37": "5x8TixDPC1nLhjyyFRD7Dk3rYJRcvAfGuYNL7hXxAaojUXri2DH4aUaPvjkE78cnSEQwtnrNcMM9aswN4midV17m",
  "key38": "5ftsPFEhnsE79qJ4QzkE81Fuf6TSTb6uFMLsXjCyChno5EZ4QKf9gSevVkpv3zsGBHEHWTG2KywPLL8ghJEHZ19u",
  "key39": "4YPwcAgDv3P2P17dJS6jephdhDdqJzhHExUqZgr2KTHLuCzBuhpEPgdP7jPL4wXzhVAHuPf47ZKaSuWfBmQwmdmy"
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
