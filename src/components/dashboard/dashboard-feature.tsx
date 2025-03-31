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
    "azimZytWDNZmnAZMFxCFyZjpJtVFNiZNYQsQmr5MBDq6NgMgWkSVGVSDSzuhUZrnBzGLnbqPu2rk32y3sE9Y7Fd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tULynmCR8aKfwWRz7SM9HzuYTmj3mgJ239QQXrdt3REymVjM3teL2TjBa99hcNNbCjrmwA8ZeyjkzxeyEqeJhVh",
  "key1": "2e1WEkdM9fu2oEH3HoTL82ynWQngZNFFXNikKQhzuRKFJ3X9YuCRdyJ7NZVqCzbcZMSbTuv7aypFHVsbRbKaysib",
  "key2": "4wDq8G75o3vf2ut8kH3w1Kuoutum1oueoT2sZjDc1e4kwT67T2QDApJKxVdgeeeumaDBRLHpdbT1szncnUQgnqfZ",
  "key3": "V7d1kNfWfXJa66afkAKt14B1WKvB3gUAVvF8BKc33E1GQetmQtEigGF9tJeo9NVuy17hHYY2HdVBdVb7U5RdFeR",
  "key4": "n9hWqv1vRLYvFaPxsc62N3nF4p4vPtVybTQbCVcMoZsxLpKVCfdWCRXgJzmPVFdgSWd28xxfzpXb9nN8Lm9Lo4y",
  "key5": "5RAwnAC3RDChtL9CxuA3BtDioRQXBHJRrgK4A5auKpHHw6sfJHJA81QycEuzmZ5EFJJVWMUjNZErYPh6Lr8eJfsz",
  "key6": "48eQSbTFaGFSAAWExTALYrtGVeNu9utbGw9jRYhzgrjGcTXraFqXQoxaR3o7f9vVqLaxb65RBMbGsCqsN8ZhbJtu",
  "key7": "2J8VzY6UTkdddLcNMrQzyZui3EVHbDaHkbr4fVJYwKyvvCQLYaBabnamHxhoEGzkgnwPY5XhXAcdUN4mUnUCprSD",
  "key8": "4oSe9x9FMBdRTNNqR9WraaRC2zxtX4wBG9RzgeepVG6275SLTE3Dfg2sAjBBTwCvXepCPqJqDuLcwDemDFUEJGio",
  "key9": "37FHE691Q8AkGCbFPXXzhzPfa7DKCSpu7sHNXkBg2c8itLirV3nJYCjffE7bcv6DHUpq52ntzitWPYpnN7hXEUaQ",
  "key10": "5wfg3NoeEMqK4BsqRduMEohJC8BvECBqKZwMhge7iAfnHoX92CMTmwabSPVsMCfGkETszzFupjNrrecdMpGjDZmx",
  "key11": "2LeN8darFqtdfXnxFeyP5pXMS4Ei31FDX9rFenc811qiXeyCiaCfZdm4Qw4EHyxn3NjPD3ATvTiFsrn6VuVRY6pB",
  "key12": "5MyV5fYCL3ioUKzdiga1MtzB2CX45z8zsrbcAkGJAfrLVfqReiuFwq29DXUhc3T6t9VmzQ5ohVGM249QUFUVzbo9",
  "key13": "4fpmBRfV6EXqA5FaWkfApbv33aeysep77Vkckp8iMAmpxKrtoYdKhaZELvJp6wPmynZmuRtdrDx5GE7YZmgBu3fp",
  "key14": "4SmEbcfEsYUPzUwm1eCmoMLTFtJtyihrAsSSYTkVSVGPSr7p5uhRy4n8kCfZcp1p1G86niSfLzQUu5YV5hTjYAEv",
  "key15": "53FG3dnb3zTX4Nu2Nf6CRGP1GbyAWJwDJXdpNHZVPe6jHqUWqErAjxCewBDKL7ajJ4N4cutrwHX9U8TZXfXaeEFe",
  "key16": "3xkriVQYnfHZbzP6Zia2F6d5bS7qBfRywovQFtrdNmULew9v2gpTqSSmVVsSHmQh2BZ2fLTY568J6Py1Ron1tndq",
  "key17": "2VCPhjiZLAvmuxpQBsRyBQcFQGwgArtgFmDtiStHgWLjEUmnmSug1MbavFTsxs24TWyynZW75ffopXxCAwQG45Yt",
  "key18": "Nd3is3fPTknh11dFkKA2xb9RLPMLQRYmVeMMnDq6uLKaC9MZ1gMTP2NfJEHjTqLXEn6xsoLiju4XHjHAqkBmBFU",
  "key19": "3CYDZyi9uyjMQLwu64WkYxz9Gk5m9WJSym69KbpSPkk3X195DDR7DQVSCree6Ym9NnujkRKh42JztWjCkLjPGpUH",
  "key20": "DqcMrUSwUjxMJrWu7cJSwBwjgPaTUDftQd9ubh99BEmKztF5yabtDu1jwNvZpMoB86LWHDPWn4bMuqWyFjPMM79",
  "key21": "4y3gpXjar2BE2J2tisDiWf8Da6C77bcKFoGb4PhLqAo22yQb8Y5nsB8CufhUDVwjVvskm53L6en4hciMJJC44MfP",
  "key22": "ydmfxAyetPBYiHa8CDaK9GW5UfkEpiXCK1bpo5kT3VNkarCEvNeSmHLoaDUY7fjRSBmErGU2dK7cqeFmAQkNcJr",
  "key23": "2vddSSyfFPaSkFd94mVNjhiAzJCwgvR6YPyRD6hhLPA9LW4GaBExZA1UBtaKMDKn6qW5c5TmkJneQjtUmYsvPCQa",
  "key24": "52TvGnbXNEbXMAohsNwp7pnECFSxGjTCkMmGVTJBKfWag6NzC9UCJjXLTPZr5RxjZRftRc8vZ2GjohRX3HJ4SVpW",
  "key25": "TNizuasmiCNxBFZdsgYYwSrX2HaJEbKcu2vXqsKLqo1ZrNcPbEhJAHqFTtJmrUKkLQ21whssdST8qsDTkcFxaM3",
  "key26": "2EPaZNksgwpiqpsUYxNe9CfPuKfG46GEfSkuaFVK3QiLvf1z8GJDBpGM79JCHk6HcAY5ZMLctCVhjw2rrywDR3wg",
  "key27": "HvmL6TPYkDYowj468vaBEhD97bbV99MW7h171KmKyct8nbF39QNPdnjyjnLeCabFkHN3ZNQH6KPq8TvhHfuJe1t",
  "key28": "5BA4Y8tLZs3Tz2dVFqEpNvMbZ7g9MoBTNdMHvfFTCo14KmiW9drkFMLX7KBpG9Lubv5CvyV5qMEZshS5q1xUSK2A",
  "key29": "5jxSwzGEsyRXX53kZJTRdHAEVaHCP9hjrJRjeLE8zY2Qhr1BNxWFYmKrzaBEDurHvip1MBNWW7qVUbfgv5cMmjeN",
  "key30": "3jZMBFtkvdRhHpmciFhCg41bnmw6fZHa7MEiXCz57rypTFzADsSa9cntDRTaXskx2g6uPCvPFruQom5pbXmUC3fF"
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
