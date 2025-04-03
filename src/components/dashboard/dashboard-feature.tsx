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
    "3YGWrR7DghymVSmZT7sisXErDgeQKqRwirM9HKngt6NzdYWL7ySn9Uj3UATFZYfYvTspoUBpyTnUqCp62ZDCb9tM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K4iSc27dyZHnyDY8nniH6xSxaw8UwNekB39MiU83o81hLguqr7JN4Zc5XM8RQpYpKwD9yJDXLgdjhv93r9Cavyd",
  "key1": "2EvbXNZWaz3QFBdq953Wi9DnnfEcSZZUwSU8Tk8w6W2FZ2RP3b5meSDezN3W1Y4ewjCc7vPtDWPhKDmyaLPH5wqT",
  "key2": "uER9ZYmJr85F5A5dFvhJowXRsZ6YpQ23H888Q1cqxStKdm7fY8qsHUMGAP4X9rqRuPKwyfNYzZ7XhhUwz63MfDt",
  "key3": "279KepiW63MA7xyyjtkJYZv6jcagi4haFGiAddWnn6FUrUYiSvx6ukmrCyQorV7xej4VMhMuC6RaPEbxNm6VAMJx",
  "key4": "5UVBEmpa1K13mJWHTcZUTLx9AgUBG1g4zXB1P7iBLeZhPmvZd4mizM65UYCK7XcATnUodCmXCNEVjRnFEJkCtjTf",
  "key5": "3RgwqhTNdeJWTu2urSXatBGMon67uJhHk1hopFTcCzxSp2ycG7B8hVFVZdrfRsiwuybJsBg7aUf98NzULk3mvnkZ",
  "key6": "3iGcBx78QtQGjxYDpKERH4vveQ8FksJXXmFoa1kmYsuCxLr9ykhHfFEJb59AW1LFt2QaAarw5NuKb2oCAg9muAKV",
  "key7": "4q2mgQBWj1PVYH7LrHGjm2x1y7kMtaJjWUwYzQL3bCwTbbSy1xdZWvvecmS7xMF5iLPcZo62Zzi1Lt4HFuF8KfZb",
  "key8": "4NJVD61MX3WxRjkAuYHTmQX1ZKoqDADBH5oFoaz8MhaJMSVbuKn9LphLfydbjbFPKhVNH2Bp1k8JDv24zQqy9fe1",
  "key9": "66dQaZAaZGuWKLudFuWPTJk551ZV9PoYDn8oCcZvrkvuuRSX1Uq4TFZZSZaV6dwgtiSAuWrbR3i8gZSQYcdhEVHP",
  "key10": "5Fz2XtvuWBjwXUkxNdQnA1c5EzLtnYZmK2s5fUBPkMW6ND2szEh7ifVUwhqEXNiFubKdcmhz7xZTp9MMzqBHU1Zo",
  "key11": "2o116XwhC9mu2XX8tRX8gkYpTwczqnJZgaHyUvX3dqwnnvUotgquPbxgGw41JB2U2jU8wDDXa1NY2DDFLWz2z6SE",
  "key12": "2MVVpN9RVDuBQtM7DVkvBh6w33G2Afn8X3GarMvz6X97QPztaPuso2fUB5uKhXHGWG5bhc8bL3bv7NoR4UQWxp8K",
  "key13": "2PTQ7CTgDk6JmiceuMNFGqg2dGwtuxQU4zkrXTJqe62a7RWvfXC8qHr7Fmea62kEGqXotcKUkbEkrWtfKHTj5qcq",
  "key14": "2a4Jo4fF8Lf9HGF4w9BzjwYNDhbRHgZTuc2LLnRqpNrKENqLcKTE3RGgpVEdS9fMUjHvbKUWGdTLMk2JLcYA3X1o",
  "key15": "2nwaAmrFKXoYBZ1iaH4aNHZtNkqJUyKWnvuCz7xKVpy6HhxMAjWWajYgHy4DDgGjcRXNFAa125pH9wR8D9EAQ2hN",
  "key16": "5JdeYdmAKgPK3VdJ1EohDSPhfTH4SYtBxocqn1aNLwoHERmbtEG6jUH7HGwfsb5ZykYeHMYUHdJG2xmNzAGxH4KD",
  "key17": "nhe1frSz5BPXZHv3xk9XP7qLMtkVQ32TmLy5djiM4jDgHF8kbw2TagFDa2Gb7BKB5jjJkE5K3RoC3RtSZ8k4NRR",
  "key18": "iBZX2WAo3QVPSmy1x8444w1J8b4NLjEdszHuuct3ameUDEaLXzTUjfi7JvQxv41YidUJRApq2NG8NSmD5zEbmAj",
  "key19": "5652f26oZz1taJDGrd1MCbFohKD3exi7gtoeuuFjsyjytxzdcCB6qna7zDtAkudWDYFfpemReYZEueFT7k2RTS2r",
  "key20": "58zGH6b7iELCx8CNu9CnYHunqo8g8AEawSyDoGEUvQjYywapga9hm2XY5S1dYMLAMo4aVX2Dne8JAktojcd4z4yK",
  "key21": "2MDuqW3bf6yia1SgQNWg1QT9VsMXEsGF4uGTUigQinaqbG25NkuL93M88cMvcyWpNxZu4ct1nytdi2RYBaSWSAgF",
  "key22": "59ivu9PBQQ2XfhBREtjUsTRLxsEHHmvivxYNM2reDkyUfLrRc9GMtUqRjBD5bMZBG9Khth3evcMgCBanTnhG3biw",
  "key23": "4f1SB3guXqqoEZ5QPvrYxXtBPdWr6EiruWBiEuD8CwpYofweSUeHtR5GK1L2d2YAmCBdVVsyV5Z77ZwntshaW2Cg",
  "key24": "5HFLbGBnsuULRKJu8ER65DWKMZjRhGvJNhNeUBUC65PWMDLJCKBFTsjeA4zm3J6bbUgCDzAzARAtULFpeLBcUUTX",
  "key25": "2zLhWZ1CnYS6rNHVS7dEEhr7iM4pmyQGY27Dwf36A71CzCGLeohAyq3A3axUovtZG2Byk6dT5Pgq9mX6hVLTcCW6",
  "key26": "5nragwrxTTNWRNuR8eHZhqd3sJzd2bB5yko6mhriCXGRgWvpf6PM72QBfADa8vomw4pk5L42AcZe9zvC5PSr3oLp",
  "key27": "5hCcdiLpK86she8H9ub3XPU3KPmLeYSk9zUPmwKBiSBK4xewazDfon2medwNJZmkMKGSdeaPBYTosX4fn3gvPgwE",
  "key28": "35HVozSDWittunjYrT3g9s1AxgBn4pDu1YrWTgYZ7ZGT1TvJRzqZciw3ZDoh8AxHxr9T2qhk7zWbn5BrCWJL73K",
  "key29": "2fweWx1aAVyANYJbCKTtDTM2LJXjsP6rVHW3JguVUyGzxQq6TA9oZZMRRMdhU7P8S47ZVaSWCwRguYHTYYH6NFxA",
  "key30": "nF4r8iFigjwZNg7g5DNPnhrpTpknZE7QbT8oECDVkw4AtcTm2Pcvxk9zM3LjTKPpdaBg2TphhpHcNLkA3ybTcrR",
  "key31": "4DKu99PHREccg5KZjm8YvZ8KJPCjTACkTVstrbJVeNvCL7ZY7Z7x4j3qjCMJokJWhANDPRCH8hEViueyV35Po5JS",
  "key32": "5MaDtt4A8WT7zd52DFMw3qbuYo3f1x7Xu79NZSEQD7qrx3sGnVXP6NSzWhEVqmNrU8MBmXD9xVnhmhJ8GYDCDCju",
  "key33": "4JZwqFCxSeTBy34rup6CuPDApsCuv771NwRk3SJNShkntfj3UaFVwQwLoCeuBpB1FrpoPiMBPf5pSaCafTZBoutx",
  "key34": "2Wq2JCfDYxo7YwZdzbw6kowfSs2CMmXYjmsUynrzQCVf5eK6ZMihJ3fQAzDt7VeUEjTkCS6YaPo1R6tKdcpRKmA",
  "key35": "4EmsZD7w6DeuXiBL9R8tDPonCsqkTyT8kCvXh52BPpxkwgLXeBvaBiFsa8ExUUWE5G7ingWJk6tHPgrceNyxuk4c",
  "key36": "52kHQp2SWBPwh7GR13T88ybS8zSEF7kwPnAwfNW1g4WjnQHJjh2JmmHSx2jGnwsc7aEhXE7Bv2JoE58jaTemA7F3",
  "key37": "5J39SPokNkfuoxZzcEzvjuSVAhfPLrRAFwicpMeTk9VAvemSWf6rJEP1NGsrBhBND3jJup3YPFLY7P1CeomkrxDu",
  "key38": "5BFxt9qjLFszsC5NkHZDiqzBzKeawMjsgmFefma3hWba2dLK8wc9tUgnXFEFZReEafAcoork8dZ9iy6mqjrhTbks",
  "key39": "55KdiDTM87TkpMm9aVbuYYdFSpYPbjokPYtaoyqRugHFzpeNrsvk9FAcmtidkQhwWQtv45VdhQ6y6WmhVUKmVYpw",
  "key40": "yzKSZvNhdHUESokFoRvEJGcKhZ52SPpZdrzM4X5jkefWPRyd2Jp15p8WNrHKqdaCtNGHhnfHB9yFDAsBAXZbgah",
  "key41": "P2mjv4GyxvwHsh95URjLQsxZ2NuA6xQ5zDVFqenhdE3dB74T2VLRgxt3tku2UQ9hW3vcKM2zNfR5C3Wrbvw1etj",
  "key42": "4P24DoFibuYuHt6GciCMRCBxe8njEXak1KfR3mNwtQ9GVQX98Nke1mSzyZGbtsob5Rqgz7j9dRDXAJcDKn6MnLLR",
  "key43": "3hsoVeG3jmc1gJ1LH5bDtD6WKpHbkxb8hXyHHCq6xENkfy4dAc8B6jDtw9iMrsUywLM3aT5JRxxjENgJZ7EBRjh4",
  "key44": "5ncNdpH2x4BKbYKxnWdLcgPmTRH3j4bL7csTHtsWSAdhthRhdVCLQ2a6Nd6fgDV5AbbuXuEQSye2UWeKeQKe5V3G",
  "key45": "xuWdrFtkMRxdJyHaZpCft7Xjyum8d2BohmTZEPZrtEDv3Cd12TVXWD3TvBPmvpx5CtBMHkV5fd1DG4aUELa7YXD",
  "key46": "5xj7BHToSkBec5GKJbx4s5c3nwFpCE5orsQSxx5VHHVmSxFZ2FSK8mH7pKJye2DG7vjHoUWs4PSQTxsqLMxoHvBr",
  "key47": "2zUyVUgWXCVHVRMCXiroAGPQ7oEabGg6fQJdGNHHyo1ag5JAmdHkEWSvHJgH4Yqrfe53vtbsmnwPy76XuRLzwmKG"
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
