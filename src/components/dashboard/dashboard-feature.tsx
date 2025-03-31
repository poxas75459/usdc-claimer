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
    "4C6zTBbhn5yWyaBe88eN1QWRgABvQx2rru3JF3bVZjCmi5oqm55N4q5YBMAvRY8vkySySfGDj5WgFfASkM5smjPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ppAiDrxBYH6tN6vdrbzQwnjsvgHCGddJpy4i1WAYNFEoLZsauEseYEujrHCPLxMYMpceN8mgiyv9oWxavxsSv97",
  "key1": "5H6Hh7dLkJoBLAStgqWfvfg3NkSHHTu9kXx2w8CZbvTchJHDKFLAy2UG2ZYqJBhjxXXSq2uV9aLX75TBavN4F1YZ",
  "key2": "5zuWD7fwdxvU7sg1eVggYVzvk23MKgSGSMc95kprS4ezQrmrQyuARimA5P1PQNUpxoPoEEvwnVFFvVrkRm6HKEw8",
  "key3": "2At5hfuoMWzjYL178DreLkJ9Cs5ScNRuf9rc7eUKHiFoQQNCoXQiUUns9GvPaoTeUxhDV7ep65m2BjC4UP8mXxea",
  "key4": "6MnbCFjqqoPJsSfvxs3LcZ6cyqoYvwLXQsTm4oX2FSuKzteT7T2PRyHkU7W5PZ9Xazoqn95hQgrvE3BqrLcP6n2",
  "key5": "3mnnxfdLRc74xkk1NjJqTK7b8QvqvFt7anuezG4i3HgG2dwLJowdfGri4LB81TvMwRZ7YhZRb9phhjkJrfth8T2q",
  "key6": "3KK3pMiVqkHFAMuwzWmp1wHEwWrrZ1ACWJhSWyaYJ8GHz7YBAKLyFh8zQ9RpJYydCCrGqxLEhkigzqyUX8P8LUTm",
  "key7": "62Ps9abhiSXFyc5GUKbJyTa55i8v68i1D3wbHBi91yD2p8gWcrfAR6rnB4wY2W9wQbkEMPv66rB4REUyXMgzM5s8",
  "key8": "4gRy2FYmuRKXcNtsXoEpbtKS6xJzrEdGuFb6JWp7dY3y2tWSLkJ4zaGrx2nBwGMEhcHnAzdRrffonbGsD8t8JizW",
  "key9": "3UvJuG5fiJaTPEFDwpV8cKJbCR38uYee86ZRfREMj1RXtw8ZhV14dyTpCjkv5zA8deY4WQJpEJ9TB9bPfjHAP5p6",
  "key10": "23j45tKBDS7xPheqzNct5Vh2oz4KALoyBq3EB5Db9vFttyUALwQJa7ffTXbxyey96mZJAiMFwReW59RD67yZgjZw",
  "key11": "5kS2RHKcLEiY521w5UmtsBcfipmQr4DkViNuCACZMW8LeC96c3uAgDWhdFUgAobpeWbEfz9gUs4mqpBRsdXeW4tR",
  "key12": "sf9vRvM7nymyJfdW2L5wKkEUhawnPfTy5JRuavgAAd82Xqo1zKUy9HBoQjdR6iCisaTBU36gmrcKJVWu1V8QDeu",
  "key13": "1CUvwufTav27JnBoQAbD4noATPC1auKydTcupwPXZT6ymAqkRPZADZ8F9bq4aAStwYmUsecKPBTAUWpDhvQSdXd",
  "key14": "4S5KKjguYxSMKSUyGPTJktrfDSheY775JkBF3UVQRrV5qB5j3uXxcstksKsQ6uCQiXmGDBi8Vve5SSHKPEteB5Ji",
  "key15": "2KqJDUudDA1V6sq1csy8p72mKzac1cbByAJW6Pj85Bu9Bc3ZS7vQ8jwSu64Rcjftu2LbZzzFhtWBgTbpfNU67XR5",
  "key16": "opGWEkd3FCsgbRXueVipa7du5u8BnLSo5RP1fxVWmT2SRwnKNZkQEa63jUcQXuWpkiMP4dsR6QUrj1oGZ3kLodq",
  "key17": "3nqZNzK3rXiRsY56YaRs36bVsnjURmrdzhfAk5GTLQKeY33eSCnkVDWbZvmQEmVxiMb256mxDUNpqNtuf3xtc98S",
  "key18": "24jXaN6HeL39jADQ4qJkZqRiaa3ny87RYVop56JxpQvRotWYJuMKyZCfoVmFhUYSzZWZvqeaQVVywLpBnithhKZW",
  "key19": "jCGurWpjrvMXBH8qjrXmdjrJXRnHQUsjU1r5xoBvgjCJzYmCGXFz8AQdJ9N93j75zZPua5JLy15qKU9jGCF7PUj",
  "key20": "3imPZvufikVuZngqVz25CTTn7DpfNaWVSMLqzij19xPFZXL2Mb5MPYDY33NjNgZRiHk18VG8ynr4kxDgTWTU5cQ2",
  "key21": "5TNa4VMYjEJTBEKfHfwBjNX2dy7ihnrWLVHfLxstuB8nxwxgXU3F6k74zV4mHeugNGKSvuUfzVAjMTbLTMvqiRAS",
  "key22": "4xgh3ZfHzFNSnPJxK7dBsfkPd9U4PyhMkGCJajskRM9RXA4Kw8RdfiPBvoWJfnPLz1soB1BUu4LV1dM47X9wvPpc",
  "key23": "2vy5wpFaFhazJmbHyovk2mjuLQ6SLCUAp6q1ismdcr4wAqYffkKqoyhburuUAzLKZyXjeSMF1Pufy2bVMj6aMuzu",
  "key24": "4kb35vKivyWLwQED3cERJqkpbFsgCxHrBtcJPTr7pbXMWXQVi8YU1Xxq6HDGtvzugYXkoAytSN8AwPBPEemHKFrg",
  "key25": "3TFpryXvzKGEefgCB76oUp8X9j8ZMt6EerwPsKzc4CYSkDTo2yctNjVc2ofMtbbULqpunyEZ8sicm56X8zCUBgGK",
  "key26": "5r2H7FYgHwkBTBMrrb4b4yVeJnTvRcJmiwQ7qTPxBpV98NeDmNYQc3J5ZMUGDXoc74UHhX4TQpnZPDmHnKqApU4W",
  "key27": "4LnWaqES2stcFpTY1FREyFCy243Uj6Ad2ypZ76PT8fHtoyWacoLJaXPc8umJYvmQhRbfQkwBJAJEKkvCt3njcZub",
  "key28": "4965bfrmrFKvRvyvcwuV8TdwRZAkXwoa7f64sjJo9E2TxruBxiDbV4ka85vTzDTH744VSMCd9WPwg42hy3tK6x5m",
  "key29": "8myUrHDRFx7WJ6J4QiUM7ccq3veX3WcMUiDu89yyQ8bJKuUc2qaL6kNru33xjA4DvuEKmtKrqhzxbrsD2GKJ5nJ",
  "key30": "56gyHs6fqmdCrLnvQMo7dPjZE9sM9P3zj6RU1HtzCzxLpbYnybz2wRtGW9jWDe8Z31wpt1hXmSuQJz5go4m6cEB6",
  "key31": "4bhvdQdB6mcixybfzTbyar3xmxZQV7WHUHxW3wNDDRJSG3ha9ZDsJAkkec2Q3s8XxRxgLa5wMHV4MvdK4Ph1LfkH",
  "key32": "5kKovAnSVJ4eor1Y5Vm1v5tLtHnoALk4pi46G3DTi2d3AmY9JCr9NqmhpnQGR44DHyWuDhu1UHD8G18EaKroTBbe",
  "key33": "2oxa8g4PeiwjyKTmNGau6C7hUgGV1HbqavKFtuuoUBsCpPwodKXeKYPfQSBgCeyLQVVYHsUntLk7RKWDAyTKR6Fa",
  "key34": "4V36hJFtuMBuisUUvL2Zf2uPVw8At58fgUFgyHd5cja9Vo5MCkv8wpaLvHkRPgd1UVSUYqq671rJiUsUSNhKjuEK",
  "key35": "4eBaWPK1jRhCtLKGaAayhS3VZjjiUvS6SAT1r2vcCoboS9cdVeMhbiFDAfdX9LzzPm12wgKB2kYJDpgg8sccbTsy",
  "key36": "4Y2WgQtDDaZoKhJFHDtmoSkXRpfvgV8GLkEDpX5wWKAWVUbtR6hCnskyugfJ4XqGhaMvDgKNF2nptRwgVR8JmAY6",
  "key37": "4HGMsDE3p7n6zfCfXDs1wXN1oKjZRm5M4fGBQmJeZgHbmgED3syJAUdJ3fsSsBNWxTteWcaEV5SaaE91mPWcmUH6"
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
