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
    "5Ki17Q8gpMorrf2BJe6t4QrFpKzCxuWYCAqNJuT4wVk1Y7hKhSgCf3d7Uk1JSNvoLCW2JnfRBQQGyxD8HnhtEyY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BDo5b2Wx7WkzvPi9BEVVbuYFon5WrMFdcVb2vZpfotFNFsGAbxs1g8VZTTAnFKqaSs13A9nx7HEXWpeyajNpCQF",
  "key1": "3Hro97B3kB1CtVxaecE1CwmPFXNaQ5bG24VX4DSAsiPJJDRxZpoa11HNa6M8cCWKPvrobS9uqopd6iMkCy29sduU",
  "key2": "4wbSGUnwKKqNkcNJbpkR5X1E9seggGX9w7yektUz2664gRQ2gmNasYQrPiWeWHHxLVmS41SiMK2asPh5QPyaTWZB",
  "key3": "5w5HxZ9Wv68HG3nQ6wLzjkgnxQteeGLX8SsdbnEsXkJ3P9eNNYTckRWNPzrJGYEVE2417gFayTQbYAJW1FbGyKJL",
  "key4": "4f826R4SqTSTgQ8yELHXUyUc6gKHN9ToPHznH4zPsK4K2W4uYhi82mqxGCuJUc2c8rwBKiiQmWNAVpJ1GnAncpav",
  "key5": "MtDbZdY3KJ6xSsFjwCH6aG9GewfnJs7DYYsGXzJZB32SYZqi53CUxNamVj8GNK2tftNnKyWDm2ixSMdukEbtCGj",
  "key6": "4nLzpZuaqE6uKu1pfcM42eFT5YsQPqYUhFgzYwyKxFBAbj6pAKSTENQd7rvmUtD6YMMuaeYHDonBBdiHQKvX64KD",
  "key7": "28m7v7BpnW73YyWpKs9BCip9qA2HwS47WWExhzknK6nN5nAon6yRXnLCvAyex3ZwYoSXjvVXr7FcHAwJ3bWkJND6",
  "key8": "3vGUsy6WqKAsRFWX8tGoPVp9E1hp5MTu9DrcnNKi9guM99aPZCg5aVdKucwzSDhXENyZpLeCcak91aWyPVPGSS5a",
  "key9": "VddUKWPkmQBDkBxboeZ1QpKaVqTdMTmUmiBSYGzWWiHy2ZJKbTmFrcrmJyxPj48YYPitKawHjAGN5nMkKx6HUaU",
  "key10": "2ATn81EhP9kKdf1vn4L31r8khGeBQFFaXgFvJD6XrrkZ3DCmMpiQ4H4ctybxXP1cWBA6VSnkJfJWbyCHmZ1BrGZR",
  "key11": "4sBvNntbeTorq7PikBMoDC3s8T65tHVfHBNLPzPTeMPAJySiNgujuvtPpJLK7rtRTk2mWhvKJ4xWD9Hp2Lizg3Se",
  "key12": "4bVhpx7NvYZnTxinBBQSrY9m2wPHBL4FGezMuQyZf1KBAYrsbSfVEppxbE3C1yX2XwP7tCmUbcZUKFZEjgF7axbf",
  "key13": "3YK4UaVtNVQghLveMJ5f2WMCPaHgUfsGSrTLw2L1cDoWJN3C9WEfpJK4GC9cbkFZgkTz2NYohitHLJ889SGabtwd",
  "key14": "5v4PgT9pjkeWUuGQmEqBNPSU6UYrSLAXREC3hF1dVG57btx67AtvPsbC1V21CVeEVbaueYopvunPAeGpqTijWo8",
  "key15": "4y2BpkUsHZQkVZ8WTxaAjH5uvzrZ52D5eik8ex5ai7rn3QQeHH9B4UMg1bNUoYdi7rQXyNePE4D1RU7czjJpFePq",
  "key16": "23AdUTbBXw6U35mxtj5Mt7fvm7rgrVHkkmFsepfeZqJxBVhmiEBJkhSagZALjFbc9ELhfjQaYedUAgChRnBwwaaW",
  "key17": "4qVna29uV4UR8eRvFMk7yVNB9G1nXCPasDcLwSnY5MqPX1D6Ey19kTtnaHbL8xWXBz3euyUEG85yibNpNy1vfd94",
  "key18": "28VKkYazDUJ5tT11AixgXRaZrztEPph68cWh6GarWjdz9hPMwE9zVaunXfGv8Mf8Dm6V4FvMD1ErdWg9cbWFshf3",
  "key19": "4jApnJ64n8CRae6apwVV6Q7gKTbdBvWd9BDkXQ1ZgBDbaNrVx7QPQdWFhk497spj8CtNfivWPwGLonh4stxwnVoj",
  "key20": "2TJ3SRDMs2TpRopnAx2bU6oYjbmC5b75EDrF6JjHUY5xNRHbbkVB8a7eb6dL7Zosm9Ceu24AxXyesUwqxRVnNhYd",
  "key21": "UWETYkzCgR4AcFQCLbMqxRp8XrQfyebJr843ejnd4sGZDDv9nhncGvyQ2n5MJrCQd47FWdP1ChZRKcX8XxA3qyW",
  "key22": "29EoK7Cgrz6pPWfVkjy6k55CMLpGbTmvuhKYPgjuovA3RVfwJcNisjdbD7ANFPDzog5JAM4d1R4wvJ2nZFuQQtXk",
  "key23": "3y8CnBxgo5JVNQrSsVgka32f3PMDmoM8aiszbMw6ZHQj2hDErSod1KXwotndUGA3rHM7Mqxx5Z3B2NMssVLruyDv",
  "key24": "2Ws6Qk7cyQ2vVPFc1DfjohPjzaqikVvchvmvUMJeRQ4yCRyZ29wxG1PkB14qfHBSvHaMaSuSjRZAxjkFQZmMGn4Z",
  "key25": "56hxuLD6CBQV1XCgf2e9iVZtQb4oB1PpDBzK1xQy8ZctmB7hm5a3u7kM2san3t9QqZ7cqyfWVEjw6xhJjBcWaQSD",
  "key26": "3oV1A3oTRpi3CEj9oAxA1rVhDH5gm5TNCnBmwSgPKAvHVfgcwZuJaJYS6eNEtTFxLNFjkUismqg8F8YRtsHvzQW7",
  "key27": "H5mGMPQUsmeLGKFwr1fmCXfrSvg5ri1dF4hyDgCgn281Z6MRJr1EJuQRy1e5bK874pKy8MN28PTBCKu6M2ytvLS",
  "key28": "3PnzTcB2ACqvifDaymx9fS4gNKtDt6wYRtNYkUUn2ULyb4MkBPEJajTquC67hgYUn1czM3E2JnhcaKE5kiVcmiKt",
  "key29": "3N6dovfUio3BEf4g2uN62CmfjoqZwis1sfh92L65nFQaW58biPonD7QbFLhgU7xiQok9zzfSV8XrCTrQSEnHMvh2",
  "key30": "4ZkKoS6Bjh3NqFtoorcr2FBzMjRz9rBQetK6yUVbWHcWqzdniR5AJ8KPeTEZ5T6pccE97fCYLi9zucKhGNJt9XCz",
  "key31": "3zzTNcCSYVgKoZyRmc119qhGmT5fpeHiZ4vWsEnupQnT2u69tZ71RawpabZuxNq6TSRpL39ithapzEGcWTX3NW16",
  "key32": "aa8ZiXLjTkzo2F7Ca7DSrGmh5SWxsy5XzaD8zAzYMvienqwZvKmTwXX5xuCDQgQvQZ3aW115Sec9ggfW6pyPfSG",
  "key33": "4iBfV6zVg3TCN7sTMJ4AiZJP4qm2uJs938hKiRSzsmWeKBXSogG73Zwcr3UQyvGjcxXBeJ312KMsdsFQnAjTV6a",
  "key34": "2Y7NFoXWKqG8q5q7QEwohHdDRjbTFeEjGLhZJoaQNnRx9QeSdH64dzM4EZazSP4ZN71PgCdLgYr2FAt9MGY7ynN5",
  "key35": "TyPf23WnRoheKUeLpGpTEpUNxZxssafKwcrdD9Uovkja4CcKrDnNLu1ATYKNFzEB4iuQu8VXbzJRDmMeXAS2A5y",
  "key36": "2DV1dv8JVYpHfUJyTwNWLGKwkpSwcnDezroAkSNHu9A6PkTLmTVuWseE9RwJzjbMi3jU1CyR1MefCtka5uN3EBaj",
  "key37": "4c2bq8yFcQxEH8cPwN8MC6mNk18TGLZkVNikHiYVfvFsPQAWzmCD2nAVkzpFELmFgT8efhEH2AuePaf2qPGN9LxQ",
  "key38": "3stJaFAjQKhwAcQChdgMQxyqFvf5vHc4hzgFt69Ct8qpFtGQDEeFDDhhRa6BqaewWr8xQn1Q8heSUZptZ4BjfcVF",
  "key39": "52hv95EevyQZrz1yVxhpUs3Cm9wfN5KJsr1nL2fyG8x5CSu1JPnXh6p2DkcQbTZM118244iUkKA2oyKRSnRBciQX",
  "key40": "3jgmZCfmzrTvePWNVxamFt5nYM1WUtjqfsB7aWujPn9BAKpPVL12UwDNmN7Z7VeA3fEAcqgxMrgX8aacLsGsHfb2",
  "key41": "3t8sWsYq4KbH3woscdWdeqHKUHR7eWRnCBDeVY8ZRbrE6ad3cDEseGo2imTgHqMgDD5AmGTm5dKyu3wnc9qd8arW",
  "key42": "tyPfr2AoeNaUZ9t7SRqwabMXrAN5kfgZaD2TcaKXJQAwAwdEnvEyi2foQTPLqqFTTS9QpGD9gRLtWAySmqT5ebA",
  "key43": "4m9fkbyaekipFS9LbiPwfk1HwfA9AJoAz5Kb5D59eE24WB2jAFMRwkNZS6yuXLPRgXDetMf5RVPe3qSivBvQP9qY",
  "key44": "8N45W8u3wBsU7NRKUaJgMxGvef9V5Y5Z6LevHPdX4DUoeTFycgYKeuNZLwKGGWtZfHtUiAA7MmLAimvRKt3Xoxg",
  "key45": "56b6pJnF21zbHxdkGQd5yERZinMb9ayicpuBcRkLShXKi2B6MjtrcmM227q1higbYLCszJxa3NhJ3FVUd8RxzNw",
  "key46": "4dTN2Y3US6uDDjkkdgQNHkyJzCQwc1GRyPoQEnTsJgSvGr1e32dYbhqSjzP8AeSbjToPkTctGiWXHfvfn6VRJy5V",
  "key47": "Z153FfLP2dRszs4aPDHQbnKzfPLJV141nX18G7nmUeSWTWN59WZLtpJ5afkdyFEfeqMzwj1CkD89KqzgJ7167fD",
  "key48": "4RQJukMTrsF1cys6LFE2QFdcAdr4GY9qm45uPbw96dT4YJkkQ9oYY1bSdr2pMvsgvX9T5rzp75dvvvudoReL5uJv",
  "key49": "4127p453wJHJgNNoeZsvDUMnNCWKRbT3hNzAq5mGvZbJvBtgRGPZZh8gJCN7mGE9ftyiH9cKdpK9gKDcVtR1oaXw"
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
