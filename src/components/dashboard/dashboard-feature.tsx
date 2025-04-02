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
    "2cLJ4e7xepKvt5G4g1deFZUfBxWiVDsDcJ1gLLMNoC9KaYJcDPu7dyat22F3u8BamtKW5HXnXwpMsPvLu666zG4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baVj8EtjC5pQnayDToWXWGX2yd8gYXp5GtyvD5RE1aNrCUNKGVebZRWSnatp8ZNuDvCEMukv5Kg173kUjq4gdA7",
  "key1": "463xmo3Vb3oybyetTV7FybxpMn5HhzzUJ5yLjFyAcQVBqZo4esFwQWR2ivScth4j19XXuzt9A1vkVhyo89cpBVWn",
  "key2": "4zhk9jzcv5AyU27ui4GRmGKuGxcSuZmYwEp6wtjBHyQkhvtvMRNERUY1Q39qhssXi1t3MtLt7bonwcLX3mZp53HK",
  "key3": "5bySyWHvNYJVBXn9Meh5QGyQCPPG63EQEJHmgRUWvs3BFq9vfqCLp4aAbwgW5zYPSzVrXQGw5NA4Hv6SEVAfU63v",
  "key4": "5yMbUukaAbEZ9PStWctGL6JdoNVYgsLurkxj5JMYpjM1v7G4B1h8UpNMT45YMCiaYV5zi9zYrjmghtDstJ3KYVaX",
  "key5": "4j72Hotib3DGpabm8Fgzvf8vuFwpeEVUGFaYFEBe5nv46cZZ6iWou8tGzpMuFpdDrzrH3rq4sb6kZLn1ZdcFadpK",
  "key6": "uBs1garArvt5Qw6UAphgXabB1ur6VQpY7971CPDSNGGFnjcWR6nguf6z33pB5GM6sRct9BQ3wLNuEihdhHGxn8a",
  "key7": "4gChy6jm1Pfi8wEEHnzoZSAHtFdConhSDRefYqFGcTdwKsrV3zMXQATKSUXPnfguVjnMkpPQmtsxqPoGRT7WAoS2",
  "key8": "4XJcM4ah7a699HXkBW3E89DPT5uoZbK5pj2Kr6av13mmqn5myqyK5QpMRAQFhVTn1x5H5rcMfnhSU5r1wbQb7WAE",
  "key9": "2g9cBk3hcCE2ZkJzHJsKqte2d1Y4q2Sjedp9abesu4pDHHWqSw9rBQyxW32WEz8beSXjKTaTQmmLFYUoarmZictN",
  "key10": "31PcvAjhnWaNPtMdDZDiFcwhXr9vZBBRhuPZF6eWdyh6ZHQrvXndKm6mQtAy6WznLgPYJidcw7cVswuNKyhsS87J",
  "key11": "2GWjRgtGmcCHY78pebN6maE8yMYEyVnVZBnPocnXxLFmjKvN23SyZYQzgGVpQYQzCqhyWCskws6LucQcgTzVoJ6C",
  "key12": "2DazfzGiYsQjdkYiJtQDUbKDvZQ5KTEcyyN5a1W4GzWseTJu7cQrzFZ3Nuvn28yDPc8WHpfb4oKzwtCmXSfXafc8",
  "key13": "4BoQBGiVt9AUXjcptA8v227THp3FpUhAJqRbHA2VnCZ1MZH6bGH24NvUhVrfVuWSiva37cDT4f6KJ2KrPDtySZQH",
  "key14": "4cv3Dq97uRiiKoM1y9KMa1Z2VQkT79CEQR7oHDoSbPakqQ7eCFMLbTrV4E4y7sPLp1XnRJSvXbPjT4LTgYmmwQdy",
  "key15": "6Eh5gQ3whniwg471vVP4D14sw7oRNkDLfEKob83V5pYbFz1S3T2cHQeoRej81gcB3xZ2cnCRJ6pUzHdLsDwV8Uu",
  "key16": "4d3zRjjdr7U3afLajJwnP5Ktx8U3Ptr3YjP9KCt16ZZRBoBLpA5uMeNyQdui1UK1EZRwDHYigkxCLfjv4m6VvDvG",
  "key17": "ZpMXYtCJwBwQ7YpVhPqoMXm1zCDEL1TxVCmzyMrDZ3RxyfMwZ5SqyYimBqYkvYWRmugu3GZxa8qekmQH1iEUAW9",
  "key18": "2Be2UmFoE3Vr2WYt6yxM1eBcApdRQmFdiNbZYpF9m1ZpHQ9YQNgVz2ZDh9mzrfgcexTtkqRAz3TTaQPmnvALUG7i",
  "key19": "4dNd4PgRPdNvC7aYaKNmByxWfK9gFEtun2DYwfryZKAn9cuoQScsJ7jVjBccGAgvtTJxvxyjSKKJJHux4nqGxaEJ",
  "key20": "2py81FqfdMjmoEivaZYjTr1dtbW5YfDuAyrcCFLGQWa9o3ih295WtnuCza8Neyt97dp6STat1iMJf4rZjv7EBYT6",
  "key21": "4GyoadVnCEpFZTvSxamo45gDerrtS72ZaNEuWzAnaHevGuLNHsJ9QstAR8hN9NZbmtSALXZC4hisJX3qaUKjG7wq",
  "key22": "KwXSWV6JszP97WhiUz3oEZ82uNNnkThmvqKDZzya5h984qM9QBuFiVLecXprpQkJg5WV7BsS6Vk3XG1wK8ma8Eg",
  "key23": "2ktVB1o7wekP88185meP8KjjiSMSQGekCskDFXS4n9H1ZWKevffZrPGp2uALP3nqoJur9XSBxYtvo7wBCV7CLBD7",
  "key24": "3Nn9oqnzLcSa8voM2rmkDY86rTrLAF7LGFzDtHNikmUhKi5HZznTmbmCxVcnDuJnKExn7bcPqWZ8cguVQYucQUvb",
  "key25": "3QtBGXehZVcPJ8UwsN1joaNBQvQM2PrNh5GcghGpzoXcATnbujQABujsSHeLSFXmURen9ur9XH3GvFFQ7qm6d788",
  "key26": "4Tow9tSbMU5gPXdgXTcMnahSHvitPWRmJPeBpuK7E2tQGB1Zszqo1tpEw7tC1qkkcxxh2hRZhX8Ci8YyKmogtNcm",
  "key27": "5KB3QJKwymqeauqKiHhDdS3NyHE7CwZ97kAzL3T3Eu1rc1A4ZqJaEfWoGTRKw8AKzAEHwYVzVjZ62As7KS8QPEKZ",
  "key28": "2T1djds7PxWXfSjnKsn9rPW1tZSyEFABaamAHtFM8q2jhGHZgnwUdETE2DpddiqntRW62xJBKay8pWjrWVV4FdL1",
  "key29": "3wsrNXKrg4hAu6RQ7nbPadgLhzccGNwkcfi5rXJfDReVLyVKjSvVniFcbAM7Zd781KYakbnUyebhAzhV5SFBb55m",
  "key30": "2d4UG6U8oyo7Ykg5Xbn2t3Us3YRyVpuXd8SxXtWX8aQr9gkeCQSdbACajoy4gDqCCcz8wmBgdcJVjJZahyo41kkf",
  "key31": "47zrWJLEpkGqy5uKsRF1WphsajtuMZT8YuLtc9iipKDA4PnNEDCsqrRrBogZroha4LSWCaA2kGgyK6sdMiJ2T469"
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
