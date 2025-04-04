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
    "5vuPE9JK6aJtwQemQ7VCpG5hfEPZHq7qqGGAdDFwitjaK1sP7Qa9kGrZ2VL8HUsz5aptdWkTTW1YSizbPNpfGHaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hDny28Wgsdf2VjrHEs14v18JAMwyZRJnUHeE1WnE2C4mFX7buuoJMHZtmgDAe7rQ5uSTSeMcvhhf6H8kZH8Dr9c",
  "key1": "5E8TKej8EnYuerHo6bpV7qRetviq7yEHaQUfD4jPCkXoCJjmcBJ2TsZ6YR31Cb48yBQrPbeU2v45k1r4mGprvPpx",
  "key2": "38Mtihv24GTt44s8CkB6eqEsc3VxNRrtDyDkPZ6k9N8errL8LBEavLCzQwPgtTx2GQYw2hQe8iNsGVZS8iKego9T",
  "key3": "5vurwqJazzAiocFeNdfRYZyLdCE5jGAQRMK6DrGBBhzmRcQCeMBLDC1qP4wYcji6DDJkwdgYJXrPXtSxwvvEGSYc",
  "key4": "4rmb1cVcLvasVnZT5YQKhoU6gTVzaRHzaqBY2jjvdyRyfR5RZMRMsSQ3Ei3epPDQngPXwk9aJMHENrcaHCTKKxsy",
  "key5": "5bGvHsZpiWcJ7awpVb1pUVMeLvt9V8gqeMvy1QTVne3EL8rjuVaLjFFQVpD1KU36eVJmerzeW14Cbay16qo25W4L",
  "key6": "266UJ8D9AMKg5URUwhaXiYnUumWBmxrtZiupxodrA1MkYov4KCK3NmMWs9XqEuPhFzrnsrx6QVQGqEyVXcYms1xG",
  "key7": "4tSeN2KYv3n6MgpVcS16Hh9iRYt5qdP9QYqYkjAddjMNV23Qz2XvN3nS5StTkDCGVY3xp1j8enf4DLPqcnJ4Fvc2",
  "key8": "mSMiYtVjeWpsG1iDkUi9DKpa7pKeJHio6C1LxPk4wMpMPezgQRZHwWEsFrLQhNtMPfomssaPxfwfyzQr3PJYaER",
  "key9": "3RSnH1Dt6fq2ujZ9zJmNyMMhnWvYAQGQp2n8aAfMrjVdKCTBSydBLmWuxUSmUkpPfpqWuBcrJUgQkXsgFTxsLChB",
  "key10": "65AFumJJ6YnwysBpVWXCoUR8PbJRFiQ5C3rUYiKmA2KVNkiJLS1nky5iykzAX3WZ11ccGPmPpiKpwDqivmdqk1vT",
  "key11": "29pFkWXwPHpg2FdUbCducF6VL2SRJAzCKY3YyX4eAHw4ApkRXie5SmqdxJEANUswGKCNNcrjkZNkFPcrQJZXraiD",
  "key12": "3GaEN19Lodk65Mq4LVCprjftXTU1N6faNYcKGHzkf5pSn9FaVdBgAPnd8oXhTSVaMV1fxMA3S2juukKkckBujqiB",
  "key13": "5ctQYhe7GGzmCQFw6BoXEgEV1xuuwhmwMch17nTDrwU89RvXQfjjZLhPbqAdpZi4nfFoqcDMsMTjwVKt87jBgXr6",
  "key14": "CYV8vHVPd8ARrNtYwVX8RHPzfj4pzoT9o9hsEbtZA6xGcsRzZoQq4dgpdPDWvdhGa85ZP9sk61mRsgtisGViB7y",
  "key15": "47pXXLwmNd7aE3SeBHjXb2h9cYW3xiCCGnJPKejGETC1v3gvGv6ajX3t6iHJQaRo733MqMh58d2LpvMHZRnDD1mk",
  "key16": "4XAMChuS8NQ6KhmtKpf4rdrGLEFaMkw1A3Y1kkhogkboRX6Q7qZxCaakU3VRLj7Fo1ccBE3syV1LKbpFXAeykkVZ",
  "key17": "5svvsAZAv2Fs9YnBcgY7QSiQdijFYYDJ17uKEnCuXxL1UVWNAdkDkcsprJcUEuMxUs9PUhJsfKvNX8YWsDEUv2x5",
  "key18": "4QWmRL6WZXTZBTy2QxPHy42JUuuXBAvdPftLTwKwrUnoUQRGmsTcLJ1J3MjtKQ84o1Nc6i4s8HwhdWfXvBgqcPYc",
  "key19": "41qpBGERtadMV2Wy4cscr3R92hFkztLG5CXJBQb97qHHmv83ECrj3aG2PDFF4Ry7C6Q7b28axPeP3Xxo2SGhraXJ",
  "key20": "3KW7ZrN7aGSRSVKN63hA9eRn3iTMa1yFEj9VwJAdK4HyEsXvr3S2CSmCUYJGJ1dArJ897HUnQZycV1sEoaU2SU1o",
  "key21": "5Ar1g5Zdn8AYCoXwtY5CdKTfYb9w1SULmnbPF7B762FYpcfccbx5ZEykwVMiQw9ZZGq2ZhW66ZfNoDyH5cyAsVmP",
  "key22": "61bpNwEE3fKGuxjZ4Gb8LgFZ4xEWrKXR4dQdU6VDFAzM2ZSLiguCHNtaRq2QZEjNsNwkQjtHu5JdRzzgJbyk8Xc9",
  "key23": "5ozMHf34yYq7bfLYVwx5XMvgNpJXVxtEujAKxEc8XtKnrnFv179iRoHzXM9gkaG11BaPJDWi5EwDqgxxVisjhEcU",
  "key24": "3DCAzfd4JbWF7eE1caDL8T7dqJcN7nAbuxmSGujfDQmEjXWJRp8t14pUaRKMyHZtDMpMH9158CGBX9ZFJS1MUrxv",
  "key25": "2rGL4rgioxbAEjQ1smAPZXsZce5FcWAPLBXwUeTqUiRmtQKXhirpYdppH3ZhuXR2sy9m5Mx3qouYXEWyiiCuHqUv",
  "key26": "3vonSmkTMocTXpZz1dTcYN9UsGv2K8usAYuPU7jyV7RgpdFfpE3yCsdBQNK6UHPjUvamX5KMToEEvwYwKXRWAc17",
  "key27": "5d2tLYPsqUU6CUwRpAaRwiL7v1QAJAAC9J4NBt71skwtvan3j6QZKVCX7z6LyrBAtNWru4jPjTPMyeZ4xZohAP4j",
  "key28": "NZzhcCSP7E1WmPBxgyveCR8GoKWX3eiiWgVUHPEifPhm64XimTVaa1uDeRH6K6DUsZShwDNGMLneAFDii67uatx",
  "key29": "yjkjzgQCskH98eZ737yj6CkyKuVHhUSjwP7L45AQ6wyaq63JwuNJ3f9xnSWxPfchqft9LCkpZToCHuPUKF5z3ZU",
  "key30": "4sAQJuWXS1tfupxJSYZv2pKYm6RzYZNwHTrgU1kaxBRSwa8b7J1DAdRk1zSTcz5fenv5XDKuUn6qvxv9ur1q8zMS",
  "key31": "5nJC8nkqCKbZn6hnXaNaV1x3TGvh7tUGo6A1VPCDyf8ShhEoz3bE1xgsVWCsS5LX1JsS3RfYvxpnhCYr5yQVG9PS",
  "key32": "4TrFR1db8ykxdfJXW95M4LwRT7XoQeizEKvTsqTMCg4W78j7dmbCCASatdvSxxCcXjzregz6c1vuEZ6Wa4eMNTeh",
  "key33": "wFqT8H7GdbkPKEi32D3EhFyjAdx2Do6AjsVf5oz8FnfXovXiHwFjmaZ3uFexsFsJriKUFuGGWk8jfceoH2TmtKk"
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
