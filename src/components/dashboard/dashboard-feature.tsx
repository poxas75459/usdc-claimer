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
    "5E3RQHVVmZcFdmpgiA8VyYh36HTfgtjUUdzDcPwEmdZpBF5PfHMA2QSV7tujkVjpNAhp8u5Q936djnn7WS4YqGwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318C7gajMWSbJ84Rcipfs7Jfgy2RRQeH1k6QjW8gQH7XMQ3aK3ZHuyUHtrWGW9vVxPqw7FanW4gQqro2KhawSmfj",
  "key1": "2JUH3sq6zLHCNTyu1ceX7MxktUH4EMaG3RFi6rGPZhboGsUFp7NMXApk8nYm9zZ4L7friZeKQueqUtuhxBaj1BHb",
  "key2": "3rB2gPYp7cVUBfryWJ6XsqsGkJ6XjmzAZ98M1cEkyYJHcac4haFcqvxSG4t8HS8m6c2adq1s1BK7LRypvQ2Q6dQD",
  "key3": "4QqjdcqmTXc6ENpGySwuqLGNqeZe7HSoCs5sbeX5cKU43kapCsxpvz65uu66pyVBwhaaVP2StCzdkFzs5pVnrim7",
  "key4": "iD2m4zxdqDBcFZpurw97UxxYrMdMFbzcLMmLaSdi4miu9A2bqe4NUxgQKEv8LoP9vPoZbY6WWtxvK1KqpwT8eFr",
  "key5": "5MMmJoubm3VZdmGatuNrLoTTQkA9yhR73yjSN2fyzrBtReYx11bGW83nCsyeGn1eWp6JZ93ea6UCKomdct6rgXRF",
  "key6": "2metJ9Qfni5KQouTbYVBhdgXCFDb3Ske2tshuBkkEPkPFZHSLYK5htJ1YxvDT7fLUYjjhKERHxeLGB2ExGoPCikE",
  "key7": "5h9ugyjJ4fWZbrqxwHwyG3PEHuM8CCBR6AF3Z4Y2opTQTqkQk63vEEaP1GhZYsLm2p65g38PGspSbckK8gGQz3dx",
  "key8": "3yxuW9chANggPE7DwgW9WTRARUrM1kmssyQCMp1Y1v2eGnt5MnhpPLSDf8srVGk9ivBnfDo6n2QMxS4Eqwey33yp",
  "key9": "3xy4MMzB9cbmLxHx4g6NqhAbWKhaQMamAe7RCGp1BWapu6hsEG3MEko6K2MvdQbZeF7bHCLvhjRhaaxFVypGnPpZ",
  "key10": "3YFCv1fbZ15gXaFfeSnvsgm9AQnHytNEP7vrjQXKxPzMNDzjKK6VMHLb6dNkvKyXVf7FDRdMYm4rwMbCh5hKNfsY",
  "key11": "5sVWQXyfpABwc9VMNocXkaxbD2ZKygQFDsRHWE41MzUwXM8Ho1bjHn9tUfCm3c4UjygLhczqKXpBUwB7eMzkUe7R",
  "key12": "2MRywThdjpE4fdTKHwJV4Gxg75kJCSvWRE6PBoziWKhc7iCPZpNtxc2EmescdFhN8vFKFLU8PcZP1oHBXdTVPrSo",
  "key13": "DbBSKhvdQis9xtWh8EQAG4S6wsf2zTcYj9HYoTD3Swzo3dBZYwMkUW5ucRi7dXqaMupFuAw5nW8yKTX4MaQPgqH",
  "key14": "4u5ueGbUh5dDW5QkG9dNRs1VP9DhGqPbqeQ6r4j9LXvA8Tr6ZP2xP5XfUFqekAvWW1kBdLEpgrLSd3sJyQQDF8a",
  "key15": "v1y3tTVuCyjQaVyCLCr8yJEY79CczTQfzW7ipkK6cR7V65qzE7gnRxjD3XBddKpWAX6QkZACxmJiywaZR7FF6Mr",
  "key16": "62Kt36af38sYASDJsCttwEzUBDjr6KbJq8pUg81cPmgTsAEYF8CZsxiVL13kRZyNiDFkMHwCipV4wMM4ViXzbekL",
  "key17": "2zf1E8RV1xufGZKL55Wa7xr5vB53kpHMhcN89GhDY527PnwvzQKpmta2WWZYWBTsrJhWT4BmobpCrVgpYowWE41y",
  "key18": "4zieJV6wVQ8rEWZbQnRJ5SvfjxQbKiVVyBoKjeVr3TGbSWshN3ZcYZx9iE4Je9xitV2o1iaWUQUbCL1tG97Pgqod",
  "key19": "36r92n7khNYY5oHSgWMNctWW9mcLZkcbQwJCE5mNJmyLEhe8Kw811FGaLGQW9XrsCtoxwVj1C7yJeNf1yqk4gnQA",
  "key20": "3PuVWvSD5z63fjKGfnum2BmuA681ja1D9WXfmUWLns1QHM7mogpFYjz6ijASt63D39mHB31y7ZbwvrTwzWUB6My1",
  "key21": "4cP1vsAm5yD5NVT7ZDf3snVgggd2sWzPGqavdBKmmihZc4dnT1wMYmUpjzmGFQXNH7dmCer1BqeWeyv9E4kTNKLj",
  "key22": "46xzHsCfMCy2kpSyNymserk3GMYug2M4MitcwFniNG2pvpw97cjZ8CzW81dPypfpqKZ4541hEZcwnciqVyjTUmTY",
  "key23": "3uuDkS6Cp71oEaEFmRWRoE87pHpuy66sv2wp1zDQHMHEsaKXgGiUR5qJxU1zXtfw5jZzJ5oox1vhW18D96KYHH7u",
  "key24": "4nRMD8uwTqm1nTWFu1agEgpZnDVYwLNC8BbKAaWwxrNF1zrKYDeXR3NrhhSjWqj32ozr2YKGJytYvUv9C3tcW3tV",
  "key25": "4ZKiGHh6PfvrB5wc1JF3oAPyJDD4NPR9D4vzSdudh4Ykg38nuvumd5wPUpcdE9sWDk7nTuzJroHJdAKBEY6NMk7T",
  "key26": "5pGQLPWgNxx42huHXiTepQyyL1ZtywDa5Uaoc7y9SjMvS11bdQi6U4ZpyN8WRQMhXKMztEM7upZGKXgem6iZjFk2",
  "key27": "5P7YugCYZbhrUVip9KmSCbLarCCfgLMucTQ3MDXeB2VP4SbTZJBPyD2yatxXE5a6XHUTrQjgns3pHp5237as9pst",
  "key28": "5WMbzPW6jz97KusYMQoNMzxZGNnRVrdE7vibFrw34tuHyQXekjLqXt3uK5bCfVvV5a4E7VPrVSxDJo3qjKJE9BVq",
  "key29": "44Nc6UEk9C6mYVbr3VqLcdwRNbExsLb1TvfhJsLvU8A3s5dWwSeH9Hj58L6L4skLKJtvmBEgsciBxqGRz3xqM7Gz",
  "key30": "5UF7ZxdNwbmQoCga3Ggk7TCvhG7h4Rt9tBksALjYFFNvtFoJFbm8rqUSMEjgDmuiGj8aa7per5SAzVxFwt93VtpD",
  "key31": "4g36juYLaraujUbvvaW5FZgM28uvaKCmUrkvSy33cR3wtx8jvdTAGZH8gwStmJupM1XePWbtQaKY53mT1s3iYWY3",
  "key32": "5zZXJTtG5Lcupa1ibSEp33oa74aheJLBKBZTTULBZJsJk5tPKpw9rcwsAviRt7DhTVhYhfDidFDoGavo41Zg6Ug2",
  "key33": "2ccfR2vAzMR16wiBsSsmDS4LdksZLNVAmFuWgsef9GhBDJTdGyQKXBeM2dEESkwigeDA5kqtq2eCWppjSHxW3Uov",
  "key34": "5yH75BGmHMnwSaNRCuUxSTEzcWZicU1z663kE92XAsBuTbt8BNP2bXqpWLowjvQ3DihRrwPG79A2B8WiABFmMJA5",
  "key35": "4Er7vk4tSP39w5Qg8AJJT5xQPBA5T9QWxHH1nyMXdsJAdxtKQ9pUY1BkiXsb11JPo9jZj7ooFUq53FRdGFtdVWcP",
  "key36": "RYwqLbfezbdbieHmr7ubKpJL5T4EBMNq65reWGmYozgWYDHJrhKfffVhjhThGc3zJTD7CZFqwSBbGoXGipACAfz",
  "key37": "528R1VA7iha7ZESZmsAGVsCP1ZawtyGhKrr9QApkmNdAHVooCFREcaTLnoume5hK47d3bBrByuuDNFeBHksXeYMB"
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
