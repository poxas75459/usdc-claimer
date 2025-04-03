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
    "3LtAGCv1qhqEmE5ppnNCQ2oVDUNN1A9PxLYCNabnMn97FtEi6uFXExut9aKeQ39UNRrQiwGSmrqe5xWrrzZvRjAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDsfCqsiLvaohL7Vsasma3jY42gVk1u8FrubgnHzPNLzKCc9KBmjbPatAhFefjmfMuVU1j38k7a3dVQbxuKLsS4",
  "key1": "655Cux2tnsRzAygxrxfHfygB7h4CXSFjDs7ibc5khdgEvgWGvGGXScSfa376eP7e6uysmr6H9bbQRKEETZ3e9o2Z",
  "key2": "cDPo6e6iw2DRXKUYzYn2Kf2djgq7H5iT4acagZRg1KYmPFBywET9J61ACjCNz2mtvWn4pTwQ6yUCXeYNgat53hh",
  "key3": "2v8K1DDqvbEw4h3HorUjfV1fWZ2XjBidjQXn9xo9d1Y18ibETMdNw4PQAAdLEpqHY5rZ1G3jNpTwzg4ZCbnvimJ2",
  "key4": "5pwsdgWkcANpNFHdn6ci7D5wJVRDBsiNvLpE8CPcaVxoRrFtHFQ8CmDq1UjU186tuKJhScxPf7ycaZ2zUyfQ7HrM",
  "key5": "uHT1ftF7My6bEYEbqzq8qPe6CDHCQDnLddVkdBZRZZGhKwy142BjuJAKfVadhaABY3CtkcvTeP4tW2w9jdYGX6P",
  "key6": "46cBmeqnXxu3cRzPqDPNLqvqptbWgazVEAxLqGc8HKKpDFdEY1B7GTW97baHQAwpr9fhYwDQvUSmG7cEicHSNzAi",
  "key7": "2DnbEQDr3WCTdcwHmAcbNC846yNS7eVKWXTVLX6688DjENbxL3jywWce2TtTVPJc5A7XXo7SgpUWf7gy2Rs97mQw",
  "key8": "5B5yH3ccQiaWLVRJjngYzBZt8ts7qnfyWpsxBeuYqNNWaLqBmNQjVhkRUoMsEL1RHLyTKkTMuELGS6qihvs6F2EE",
  "key9": "41TsujhCqcp6jvGp1EuKNS1fJCRSxqwEqpQNj415QQKMpUqbgAK7iWeE4rRbd4aWr5FuVpFtK1Gk7Qu5ZM3UHZgz",
  "key10": "2y8LksqHRzAGPwCvvNWAwVCuraXacuy574avHTNJjVuhHdZqatp1LQUXLqhHwsfbrUsU2u9sozJ7RWDcHb9mBREP",
  "key11": "5dAbAc53EX5DBjXuqP5JT1hG25Cy4BA5E9XwMd1uohmArD7N2chSopvuWPnVMvDbvvzcB1i1QAJAzM1ZgEvqRXar",
  "key12": "28CpFNjvBnbmigHnhYtySkshjVoQyCmWw6JJg3Whjj6j9yjBXq98K1NGvzGijDyB7czQNsadYjSgtSoiJKAivvgz",
  "key13": "2fcHpdxYwzQXapXUbicFvdQxVNqWzWXV9qdiCjztFrxJq9rSAAro3FinAQiicTJNkZT9zDinc51mMgtkMrj5ffYu",
  "key14": "5iNcSyfgGUNTa3dq3o6e7BvfsByS9RJsLYA3fA6Rckcfy8Dg8LyMdWS4iq98cu8ETdXmAU7xbLjmyhuZuHdqv7h",
  "key15": "4j1CFTyV3MLjw5M6igsZbY8JuYriGU6nyVQjfYDtrbWiT98j2ZhgaZHDw49B9WnYvPG1CPxziRZRiM9BtHkk6jBo",
  "key16": "62bWiEaKvoJHW3T7TZbfJytxNHqBhVxRt7DbzQ2vqp2oRrtHEGC46jmzHmvtkWbKUX59HqNV2UaaXz6LpaauTw59",
  "key17": "33PY33cArWUCfgFyZRbPjQuXsp8uxVRgeCAS3M2RVtzJuAa8XVZMNY7xmMmkWkfPkagDfpMHPJj4eeQVusyKCAHz",
  "key18": "4Wfwf4Xj7WZpRwDoYHsVrTxziywXDMWYS2XESPRyDPs6exN2af68znYXEg2dq7oPobXK38E9ZUQ3WCfPLBAaw5HM",
  "key19": "4rP7NBvVow8gCTjibrvgtjrzaWxxNk3bTn1HhJwfJe6b2W6GTafyF89vNXBaZ2NbJ7p5b6DVVPYwtuf7hFmMqMvZ",
  "key20": "4TrxuUrBQuztgoSy6gurB4vC5dgWF2ohDQdhbvYAya7R7P9eGrYbLhvsqp5zjyN74xD4aH3VRYtGSFsN47T4KpTj",
  "key21": "5j4yqY2ZUVPbraKcEmHGRH4ro47D9GZtkq8BH41KsNyQE8AYvw57iAe1uJxXwu35ZifMCa5EoncFBdNCS1qe7e2H",
  "key22": "ZjDGCZNFNx2Qk3Ve5kb3zK4n3UBUuCPLUN431jTNtokUv3B7MK5fvN9hgrUocGVKDX4b6j1RpdeQxdWyxSxz4sE",
  "key23": "5PJGzPAn9We8CmF7NvsxJFBEgCLTLRkkp6ykDj7zUuC1GEbjsmxqZgLruMPhMJcsM1o7cqdLB268iDrkAKgzFNc7",
  "key24": "4wuVn9J3uCiALKidCJQ2jBE9vL6pWqofpv4fWe94j7r9SJRmhPyFPc6SUrrdxdG4EW45NrBH2uYDvTnYJNVFcmHo",
  "key25": "4K6dsw1k2P7WN5TFGvXnkpYBRLCx8ij7TyuVjWQtFHRWEHwkth2uifHzGxPUQa9KRvqFYPaRgUVeLjAEuase3oxD",
  "key26": "qd4APG4WnvMKgJ7AHfACqBTNiytdqKMTpR6QsEEvoDcfHJuxG49j4bdQUrAB5pXjtzsQYnWz7nyg4SMadHq7UF4",
  "key27": "LUg9jKoxFX3nAjBX4C1SzWKuSVVyD6HVWhn6Hwj5Eury8uYRokEwiQNYFpT5unfQnuPjkEEjtj3aXYwhKZ3RExk",
  "key28": "3TwBGKuizdyjXuqsZAwNkbUVQvLSRTjSFxsXwTWVkCjTDcP5esic4LbHm7UgQKK35iAKHwaTLGYCmC96TEP5y5kw",
  "key29": "aHfUHHh2d5jbZNj2hjbKjDeRuJYMABMdWzLQJsnm2dDtA8NnbCfzZxLJ1wonLCu8F9EsNpjKn8bpYFZEjp4FNQP",
  "key30": "37ZrbCw8KT1TYDwFrdSRp8Wz5zgyquqNAsBvVGC6TNZPMPwR5oXeac3GNkJ2FXM6xiNcBUi2CQniShMnstCVceu4",
  "key31": "24KjqHVVSVYg7M12a5SAkjX9CQjPmmJSdxpcEGagYdUjQyCRM2bzDQPXfKppEFr88UNeXTdteysH2K7i4s1dMNBk",
  "key32": "5veNHjYEHiyBwETYiDZZd7iM6B6FMK1BcMt1vTbi2FawqczD8AsSgsW6oJ1rz6ew9f3T1ALZ6xViWXZcsxKa3DJ3",
  "key33": "53SLSZPYbr3gpFVFZYUsurknJaEgk2DtSaSbFpDWcV4dZUgVQWgqE1kMvCs8jQPyCxS9tZexQSCfmVju7D6NCiUX",
  "key34": "3nYpDFBh1Swx1S1GabqR1wrs5YBVuFGv5MjiU8GSwoEmXYE8e6F5nr2DL1paPLukEQN2R95ihwzE291gbcHx1F5k",
  "key35": "66sRgyYj2bnoX7JFJkb8rwszjfFDVjjXrVcZEgUKR8Z8vwbpm5qCkrpzNKEabVYYVM1xJrkgT39yFjYnknZvxREV"
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
