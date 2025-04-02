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
    "3WTEhnpa1Gc76yTbVfEeNV34X9GQDdcmUTgrNf5Q5uJMzBDjYF5pkRhundtMaKYWqNd1CeJ4Nijm98kP4kJ8W4DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GkDsinsAf654H1dtsgUVCZUCqBTXcVJWVxhhgmc8pAMgxskTNhbWQXftbLgxuJYu2t6ZJZgcijG65WKTUxxaCLS",
  "key1": "59HWDmajFvUBVxtkPRvSYsYWs2QLGPy4rg4G9SHWyjCjpDYGCGdM5rtg6g21RdskGoXhMb4hDwApjRUU2RhG1dCF",
  "key2": "3s1ZM5cyA5itYA6btGydrtqdV5VFEZwrEpTqzxuJsdERqMoqVwY9MVFSvVPRh5o9FjSnPsEd33awt2Zhu82uqoFi",
  "key3": "5LcX7rGfxdxUKQ5ahG7fkHnhyBn7YB3PLGXByrw9j4LSp1viJR1K9XpJ9cwvirettUcghgjgNE9ks8SqwKMGxSPv",
  "key4": "3o1VC4edMKjpr8zbXQBvYgmT2T8U38XDUPQLs3A4fMdqW5x6KCFpq3jZtMMjGVtx1UgTMefNSm2TpMG38RBHg5f7",
  "key5": "4Ua1JdBE2s9G11KMes9AXDS4hVhhLihDv5F2Bu5zNV66qPoSaaeqjd4DAKtcDcfiWeUsD3TLiXDQMEA9YtuJnp2o",
  "key6": "5TaYcL5f7e5F47NCrfmMWXS5qpX5ekHSzbzPx9jxVghChyqXGP8eyESFnMUaNQXiyyRRSn1ykQL8kVbRDb6rQHnZ",
  "key7": "2XgoXAVywS4UmccAtbx7DF4Pb2kjyV9vRJHbhXzB83AeaEV7dtfRb64L2oUJAUihY1XNhFKD1ACN8gfKixdzyY4g",
  "key8": "2vXpPTe9P3om1t1Hh4rakBK5ZPaNbkPp8q8Tw2QDCCAhMMTHXk4y8jnpdBtnY1mHrPh5bso1DaF3UJQBEQPWTWJu",
  "key9": "5JwrGrjtftqn5dVtgtkPGVZp9i4BG8XUBXdjHnmi787JskoVphTjPjKspE1xmuR43LxiBSQ4JUM2URZ8cehWcSt2",
  "key10": "51T6iBUabXtr9AUTPRqdFrCcJY1uj5qZuiL9vXiJxFHhPEXMa6ek9vksZD7Y7m4zosBdCBQLHvPjn9QhJjKZS8F4",
  "key11": "45Z7ZEu2xNQWzediL77ypMq6chbA3ZUJLjY43WnsqNBDfiKAoghbUtarKiozn28TReNXnFNZxgogMXKYXway9ffv",
  "key12": "22yfGNHe6u6X69s18PdV5HefDjb2MtkCLFqvKZ2boP9RvCY4azQv51CX31q884w8WCyyuHtp3Po42R8Lma91JBNj",
  "key13": "2hsyskzoGf969U5P2G7v7GyC2P6tjLTzr7x6CfXeotpZxi3uKVm9ScaBNNgindR7MzLr7pLj5qoCwRg3RE6chLQ8",
  "key14": "nkmLMsMuFQERUuyRugvgXeoRcQQq72WdP8V4mUimkwiJHmsyfnPbJavJ3UVkontS48Z2sx8WCMJ3JHemVUQ5Pqe",
  "key15": "72HMwHHeiLnY6AX6T139p5jQbN2xZPqmpv3eXcA5Nr7zpgpBkRQjxEueeqqLFPbsbaicf9mmhy3XRQ37XssWxKy",
  "key16": "5Ydkwq9S82hzPcNqWuDZLWZiWArDKxCQ6c3Vh64yb2xPYVnsmJw1hRGeB2aqZAJdeAu6ogoeZqs9hpxvXFoZcphg",
  "key17": "4FgoFtfdiva2nDSPFhmXfx9eAaQCRHrzdQU6XAwcgA2KikhXt4ALZQNtDpcJnU2CJwQv3aJgFeW9hVzxFgdRuWaP",
  "key18": "4FDjYG8kr3QMhn1veURAWKi3eTojD2kSRkeeE8NPRdgWqwEZC323NYVgWE49rnYrvtAEtbHyLiwzHDqXU8igYwX6",
  "key19": "5n7PRAZBFndDqNqqAsyku3D44DyVMHvkmbfdkfFx1pxx54MqDiq7fgZnQ1hph32Z3GQEwQESGiv71rJ76bAXKoer",
  "key20": "R7xtEbi4EywdU9R6tK3HV6B475s5gUbPwxoUHp7JrsYEo42GviA2gb1MwtqKvx15MJx5z3NPsyWxqTdJ3YpJyUN",
  "key21": "61eFaCH5QoE8FAJ1KeRpmXzix1V45sBkT6gjiF15Zw1tQjCrktkADqPEexQNPAfdJVFXDwa5auD9FE4GfV91Zt7X",
  "key22": "37UzZsnEqE86rbRMLZJnAkk6qoE8FJ7ewjb12tM4WBnRUo8hoA47QFT3fVNBd6vhXjrrdHULN7s6jCf3PkM3dZbZ",
  "key23": "5dLWFiiXRQFtLL6PrJn3HWWe43jrWFm6rRN8PxLPDNGKvqXfgTjizzwGJJ8t7oNS6aBwY52Up9KL5aELhzvHzzPJ",
  "key24": "65xmnrqdECfF2hvB4VzS51MzeSF3jChaDEezUqacpx6n5TEgPFU8hKE3wmQwHuN4QkrpmiREY8mz9iKR3TJb5NzD",
  "key25": "cRPBaxLs2GhypFEbkHoitPAyCqhJZNnZEpkYaUaAs77wknUAJKmmJS4nhoptfVjgyBeTQQ5rwiSeG5VRzLAxk6H",
  "key26": "5D7XcFVKoJyiHdttSPZySijEwM6xqeJJt2G6CC5AdfzaHsBTeEAFex8jkDmGM5536HkZ7JVqupJJvi7VF9qwj2hD",
  "key27": "3dTZUrCireoEctsCyzwfQkhdgda9WxMwieBhAm5Ys5wPcmPq82Qr5AZV7k9kzory88rsW4ab5w4NCbVuzkuhEaHC",
  "key28": "2KnX2w1R81mhr6XNVjxSwkvNQcz6PcVEZxWmaT2a9aQWkDy2JSWMAsygNuW7GDA5Qgyc5By3tgMvZFFsUHD9nZUP",
  "key29": "5rbPJF6RB42Dky47EPxgiuXirPC3RKJHDE5s3gWjk9Swb4VrABdZxqSy4MqcA4rziiJnAcwSqoSmPUjX2Mboscm9"
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
