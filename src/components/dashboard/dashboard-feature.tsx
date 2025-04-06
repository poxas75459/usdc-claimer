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
    "4ifKwc9Rm3W6kfXwdawsU7Ke71XUimUd2cXvfqv8L1NtAPiLzosNxWotExv9LYWem64Ppo3L8LHYrc85nHQPbTnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xi1TKVqrrDX93GagN9v7NbWmrsDKoxyfBGHLP8YeZQgzznRnybwonToFiyx1sXxBxsf4GjTFL9Dbfw8c1qaJD1y",
  "key1": "4W5VZ54a9C4nHrzvfAscNsnsBZ2PSNcLuWRDA6h45KdDLq3DwWP4PB2YSYGdsimnRowNmHbQz85spdRHTG3CB5T2",
  "key2": "3dZ8naMgd6vzx1xfG255RMX34Es1BtBWtBQfRCsNm9xY5ac2M6p5BHL77fiqNJpQxWXf9ZiJYHbhMmiBCoMUtoa6",
  "key3": "WkvcJbZZSCAurJSXuTVxtBokKEiQk52DBjP7x5ypMCTRbEuMPWXF3FD6AH3agzz3uDHqduzbb4JcKQkDnYBL9UJ",
  "key4": "2tr8EoCxJ23VDcqm4dwuGkk1x5Er9vk1ys1UqTgYNciyYrkzvnDuRi5w8Gkius7Tee3KncTQh4r4WLT3jp1PNS7g",
  "key5": "4o6tyL5aCARQWYTWTKxJsUbAy5vwEJyPxJMFasRV4Vu9G7XKJR17F3yB5mf4Vkm3cqjiKzdmd26Kb2mmfXMW8qS5",
  "key6": "4ZM6WsGpBPPGsfped96xEDbEeQYsUtCRXMkCabS7RfJPTxFFj6cGayAHHiwVgAWBagVvmowpoHc47TkGBs2tDoBL",
  "key7": "58wTNYEWtXGJ1yp2U7BRCzwsr1fr15HiXStYGAUiB7pGUrUYK1r4P1mQzGwhTuHWSQC5EyMHpKfmNQiUGSkyzrvh",
  "key8": "24dw6aa6bGNrzKu52vmPTUBLdtGukZsw6XGbSbwYJNsNZVLEJHNhyCw9taFeyp3f4NBTtHG3MSEkdMTX7aVqoANE",
  "key9": "2yR8sk6y6fVcC3RvVzmZ5v6RTKRkfZRwpH5xre84GUGgRNc2HMhcK5S6uM2Jg8ZNhZ3QTdFarwrDoqMkeUhfKYCe",
  "key10": "ASzCqxKP1YhAeMeKV9bMH55TLyyUE8qrPg8sR4zB3m5X6asgSFi1Y1LMCqGfbkSoVy53C1K24YpS3C8kUMnK2QJ",
  "key11": "4X5QxTr4hyZpi1Egk8djzphZH3PcS9hE8YauCZq5DxZjJtTyNV6RVQZD9eNNcMCYk5NgUvYFr5GwHwP7hWd7SJLB",
  "key12": "2wCVWtirNEhBrBw8GJznaKJzqjDRwtxNKaAGwvf74AfWTuWhBmFMaKBSkdgjNb6NsVKq49zPGpq8eUFiMx3ByuUW",
  "key13": "3Agy1t9qvB7kfzHeomRmnsmy9X72Tfq3P2DwW9zLwwnTAuHDWer2UcbdRxmenYcmq1uPSFUCBKXCbnejLDdFzqsa",
  "key14": "3rxNXP7KgpBEBiBUUW7ZbegxEg5jihvtGLYYpARtdTx1fJXDjyyuGtAVEQawENVEGcFafrtmjJSgD2wwiXNtvM3U",
  "key15": "jmB5cqa9KpH34ajYZDf2nX3sNa4RNsP4R7adJqGNpfKDz6VgHoRrgmZncCxRxhL3p7isWNceNueQYerKJPLMQPS",
  "key16": "5e7n7fw1Uhft7G772Ew5jYuPEsn7UnQ8PBPW1zzHpggYFCSC7sbvrStuQQujfzMCvca7Y97MmemNwhueepJBVtnP",
  "key17": "2sCceS36FHWX4XJL6ukSrM7kfULuoYJP8LcBqQFcHPhaHfAsLTHjv9QytpyHD64b7aTTyeD62PJF3gD4x472kgP3",
  "key18": "hUyHDt4mm6tcYRtr66zKUv8WFTQ2yx4xxH3CRsv6ipo7JSwvdV1xbAuqjQA6Ago4ehGanMoaDBrwcEjMc9SewUq",
  "key19": "5yWe5LQiwv8M18Ygbbk9WVG2B87PjQ3KMbxFziQJRPcsybHVHBZ8moC65GarAY4kxpjTKcEJXrSDW7vaiGgxYF3e",
  "key20": "2HNLUymr9PyYKVnD1cyzErmbnYqq4wUayH9Nr7kuEVsTJhnDRdY9QVKizr7XUYV2innhHSyuWjcpyhNWoQVkdGfg",
  "key21": "3ej4Yyru1NMQZcm7QzcoYXFdod1eE2K7mupSeHB4xT31T3sN3XKrYDNzDnuweDkzSu3CMZDzbiWGxQK9xaQVtbQq",
  "key22": "3az7ABnnyZY9ggWKAaWHqFYau2KyJLf8gF4xbbKAuLQW9zmY2xiviBrUJvhm2tHivqca9yejJLaSXRipyvE2KvjF",
  "key23": "4rByStuhfw3FWMC6VGbu6Hn8T1xGHNBAkfGVgyktFmapDZ3rLv1wdFYCozeG9q3heFr7EUQh3KzmQwXCYuQS14Yb",
  "key24": "2WAutn3Wn94cobYidd2xJoMnFfay7XUBcdHPRPtyvLhJeiavAsTUBGeEMoqwGHwTm4Nhja5bsivF7bCpDdCe7PuK",
  "key25": "3pBE91uqohPE3aHmpLJ78FW1KdiqN4ymqFsTTmLBYTZnS12tTnR1t4hxnkZGPjQ8zVYKHi4TyPEyv4buPwCNQEFt",
  "key26": "5h1FrSfSxRfYMkNQDLuSpZ45kNdCFNwxDJkLSbz21vCFNdc6VE9R1BuwmENCJqEimvZq8aidCTiC9cnM8zvcWsWS",
  "key27": "4233cYDJcTzGAyTzhzqX2ZKf12Emh7nobhe9BdCPVDuGS62vsfAYGw4tJtBuqkHTEaeELJ3ombZZNqVDsBYD8dKC",
  "key28": "44WiV31w8xa4TRg2XhZT3sZALQg6S1Wy7pCC4rdQrAyTBbyQqp3HQBQmiXfZAowxW13emP8aWFAHy3T2abEcLPKo",
  "key29": "3WCdJmSAgEzHMu3w2mggVwKBm5u5rTCM8nVPhixRa687Rc2S2ywuYAFNsgbHW1FX2NqEwnvqQmYzTSbJxvJx75zK",
  "key30": "2hHPUBrcbMsghpYUkCMKtzbWSL7pwqjS8MCqM3szDY7mvvkfA65gkN2A1zXHG4R5dFgGvoSomg4rooqnrocAvM1F",
  "key31": "4uanqXqTHdz2J3139TiCmVw5G73g51EoL98KYysogZSNWXE6br5z684QMZ6ftt8B5tG4JbEMgud5KL58zdroDjFn",
  "key32": "WVygmSVkmJaE8zRS7VN3UjC9zseoGk4P4ERD9MZWbAqzmn3CfNxvhiTDvervbC39yt5gbE9FpbYDVQqdrAxCd3i",
  "key33": "4GFuJqGZW6djtYrWaTnBdi5X3M1Wj8sM2pY3cPcMBoFAeNPpopJtRoe5iiwgDmm9rPhE6V4N3pmYNkPja2yWt5JC",
  "key34": "3i3zZupBbVt4es9NW3X3h5cFTLub1kbWJiqqEqeeyKTGVJXkPNGxjp7zkMohYDyAZD3MhRDZQtTESkR5aWNfmKu4",
  "key35": "5gL9P5ffjaApi3XgC9ydxoYWgKZQSMiycUbVLzVUTqgM3fT6ZzYg3ALKLmLVnJPJ4z7e7ypm66V24arqiGhAuivu",
  "key36": "4SKsaiWKWH6brc5ZZnaApwRW6iZDF91Co22JzhTqYpkw5bgj3yRWJQ63k1FR8JQwmqCXE3Tx9bMU8PSjwxniwZqc",
  "key37": "2K9VAK4L2g29iuFf34d4muVFMhCH3uAhR8UXp49iARTHqATZXbf9PentZoD9sKhRLnv2hSkJMq75E3eyVnfgxfnm",
  "key38": "R5mrsPbaZaQJpyyaPH9ZGQtFQYB4HMJYpKAbmEu6t9Ctfm59eEdbLv9SGwymnKQAV51ULS2Ay3aZuWH9mRJzJ59",
  "key39": "2kNgjb9dGF6kVxeH4EF9fuuZH7wMNnXfKeKPt7mzuHYBpMjH6A4mHKQrYwmjvF1qTAHCU3TY2SEiVJUpxFSrQvGw",
  "key40": "4czvCjBFQFQB5yaHXB3qoXjpZPRwFWECLFMHyy71NxLje2v9qijVhF7xYG67QXrmNyGxsYn9UoYZJymLqP76An1j"
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
