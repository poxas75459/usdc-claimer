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
    "4iuWo7HKTd6ZDZP1MyKTsvYdpdfJ9mQ8tHVh1sHEBwF3cDPF5KiN3YksodQtyQqZi4b4iiVr4cpekgF4RaidSq61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mCnAWPysaMggR7HdeLPgHY6PUks8MioPxt8k7F47TwZzDRT4cGAgvSfYwHK7bnLxinP976DaRhsGrHjVx1UEDnD",
  "key1": "4P2QqJBEkZYrH3q64yUH3zcrjgXgYDiWRd9qFbRFu5o2WgKmcELKsunn3qHoZJn4833XPMFQLsmszYYjLMGeyFne",
  "key2": "2WktxBcyhwj8zb68pFfJeTvw3ZJdkaVGZzH329kBQAUTRfJyGKJacf4WB1e32xWSids5K3vt7rgMsqfBCnx8v4Vr",
  "key3": "3JRxsx2nLfjorw6qNviFHHAvVx24ipogZv1dXS2pbkc458wJ7hH2jjANP965u5CMt9VF96h1LkLPFgUZbwCpAh1g",
  "key4": "45bhqrhjGRf5SpSnm6HZWMX4d62tLZfY78vMG9dCSfSj5awsjrn2jfYKBsfToMtHMyTsshTaaq8JzAEpMi4RPH2z",
  "key5": "4TRjvtQHKbMDmTfSE2AbtQoesaNwpzf4hmwGq8s35NujuKsSYWp4PJqedAGHmavNy4832xBRvF8ouXGK2BQLQkUQ",
  "key6": "5t17Z4V8Hp8aZcaDeHmDYRmRWq9gbed4qtihmKTmMQDwduCoypiS8BiFg5vJjPDKeeLUGuW5hXuHLuuNRUEySB7J",
  "key7": "33M2fgEGPmnaLUQH4e6xDPDK8PYCb9cuLq5s6427vSTGQZQeqYDD5HsJqgRdU9ftciJinj8FMBZS7WyvfMNYCivm",
  "key8": "NMWME2aLx2DgNt78f3ffUebznehEa2fViCDUvHW9LZtiGBRc8oEzf449ThoZ446xsaEsCZCkW23V2wWgunJZzWV",
  "key9": "4XXk11vCpvgJe4a59Eq83TxUwsM8NDUeXUHEhcwhHRgM5UdHQxnqnrFtNq7SqC26NagT1CzfYzfybG3W1aNvUMTt",
  "key10": "xNjna9kefpr2B3oWD3wuUMzaxKG18T8kWKkkcTQ4CvNEJ3VwxHaT81nZNn98JKSnLKsFtDH34UWuFAq39uxR1NF",
  "key11": "zAiB8LqgCsG1DgyQa7YXR4UPpVNHeVbwcVmYQLckmfADGzioJVuJKqyjstpAJCx1u5yJDF31S2P5RjFtNTbR1xm",
  "key12": "2h2APGAFg3d4PhL3V4WEMzUVCwBpuLE285PeNK7wUM46UrJgehs3Nnqiyt5DnBfnPTrfoJRWTFWAW5QnosZPHR1Y",
  "key13": "CVkA4wRZZSE7UPBEscivQu38u1Psx7MFR4JSmSJnaZLhEKRCNgUeXuxyRQimpYWtx61hMc45nDoaJnxWSDG28Fo",
  "key14": "458Anpj6QtLQtZz6FAV8ovhiHcs29z19hGm27AmNV4ikGprVfrVX8Ym65a5H3NGJRkdAsGudrzvQcaC7mdrsBHYx",
  "key15": "3iTjkGbEkrPgLVQj1Mc5jams48LQhsrFMbwZngXUUfdCz9CzM8EcZWmv8ayKEvEDtkyXWSs76268sSpCh3PsAxCE",
  "key16": "zjTyW833oRnijMUqwdtsth3bQGeN844ky3dQVjwNBEmZNw3pPAHYxQiatA9Q3k6SXkfoqtVMgvkogTow3Pa2YVC",
  "key17": "Mu2rTChczCnZ4jJvdqGUFB21pUnFEtDsCFW55GAKgcX2N2jRsSHSa5FUSf7NaDHV6WsyzFGZt6ZnNLUzUshP2CP",
  "key18": "23DGM3bN7MPr2DV1DJEs7bGzJpXppW9N55eas2ttdgUsSdgbembAxHoiwuFrncoScfjtp1qgEet7ubQXsbBXszYR",
  "key19": "3WpcyA4PqygWbwBeZyL9XMEzV3BcAUDQPNV1mxnDvKK1SGZi8PrFzcwgMT8fwScUGth1o4ovmheuxM83CyJE1X42",
  "key20": "3KxwPag8U3vZXcvo7fXFB72WVUPtEMQ5Ha6iQGSnECLnzdPazNdEbrg9JNbxcNcb1TpmmsfntCWqR1fymQD1PYM3",
  "key21": "3pYs9FX1TYz6uQ1R1SYBkVSGihBz4pPbeF1V6KnCXNne6AV6jLQcP9nG8NFdvs95FiVunJN8kspRvrCF83EvYEo7",
  "key22": "27zeAApB4KYmftSkYWXjCfUZeuFkVFx2txyAwWJWtH6XrdhmiCFNjeBYTmAGCcmQG3PWpf7gkjAwyVaLvcgr3w5W",
  "key23": "5eLzU2CNwb54M5FtT7Fd267pGNCYNWxKiWuBNTS43o4saJC7XAq2GkuhXfYTzwtnN7P5KANSVfi8HiMwRG95ZE9V",
  "key24": "4Az2Jak2qbh9YW6KPv9pEi4kQ69jUVYK7wkHoadiYm8eS335qgxap3G6WQrtV3WSrGXYXgWxxkSh4LkkjPSPKCbG",
  "key25": "3ZZ6TeShLm2k6R13LLfQ7dX6pRZrTxrTh1Gtmb8M5ntRBQU96cpqb4pi3EisTRzwKzF121Zg61vSrRqpzrGY3kwP",
  "key26": "3UakakJG4rABFGx7LU9sFGmVewt4hzEmyTGseUBfApJv6aguULAFxn4qSJ4zYFUMgajfH5XiaV9C7XZdw6pwLMha",
  "key27": "KwqgKW6L3JRVScdS9jnxKhmgoMLFaBTJPywRhVZWAsr59U6z2FNiDUkRgK2xs2dpBTTHijpuKE19wV9vuSp3soK",
  "key28": "2AnLyNyh7aunsvDjuT4SRKkCZgbL6pnfN9CEHbcKUusi8Crqg9VqNa2JaZsL5ErcfSk74hxecwYGRb9t8dFUcikp",
  "key29": "3FqHQEkK4EB6P9MZV25L5DQskPrEn8Vs6syZWV5QSZyqCWvj52yTFNgVFFk3s5t2JPEHfTQD2BQi2xdM8fL8JHGP",
  "key30": "2FqP8F1oWU8GrUdqDQ9CwsoYjJMxoqnfEwXjJeLg6XHY6jcTHNDbt39RBuYVPwDivwCS6GuzMsNHPUihbqKw8UEb",
  "key31": "5KRNuApnrquYzPknc5iEVpDkUB9Z7pQXbJ7z5fP26eFeiWdTWtmsVG4MEZuoNqpMUatHuFqtDtkqeZZjDCvn7doR",
  "key32": "cr79fdjyBubxGrKn2MHBGSMt6ee3jkvx7uMcJiQ7qHywmMacWdabtVmYbP1aNaouV628bg377KTjZzi5p6xJkbz",
  "key33": "3vE6nue41Fr7KhJzuwnk4YqwGdbQaanQQNPEw5bqmWakyTSHrGhz7q2tDXkAgRUucuJak6Rhioi8JFcjpexcoGbB",
  "key34": "3PsLFGr8MkY3sJ3kE6RmfbLJuXrFaGBv8aarxmqkrvzy5jpT38RLSqAt6z5XKJdhHcwZW2yrkMbpjTF9yXXjrG2R",
  "key35": "5HgdDpXYb4orgqGUU7nRFFYfBpWi7gZWPWvnKCcquFfB7vgxr2WbVQpkkFLgMBSLAZQAuye9KfwNx6jmKeYU9Yyj"
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
