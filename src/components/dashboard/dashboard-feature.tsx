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
    "3t9Jn6py86XLQYtfAHzkq627kVeQ6L4cJkM6c2U2bLFgjTWVxbhiRXpnYiaFy8rV3mP61iwY4AnK7SUXEGEydP1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWzaxoLx4pAwDsL6qvAkU2zoyF3wRKh1K4CdrR3CnE2NGMdUnqpMAv2ixq5WLfWoUrFYN73y5qTvFtfT4ZwHHhe",
  "key1": "48dLdA34DMAytCGQrwfVBhYU3d1jiTzWsywAMkZdQhg4oA32qLwyKhzSdaYzBXuuAYXRDY1ni1fUoxZG2WY19KGe",
  "key2": "5wr5nkBLH4v1yXvtf1JVuaXuQdWKHStJbe6ZzxWFnUCheHkLUoc5Yx2dXBZT4E6uWj5WyPe2AgiQw1usKy7S7Zxk",
  "key3": "R3CSaqB8aXMRThyS9Wb8Qni7ApZHvGDD17v2m7pn2RsKL8i54Vm6VbJ1mHYBcmWmhDPsbWUcRPEutooYdERu4Qv",
  "key4": "4sgMfSzmmMwtt8MQxd1LPX2fNfrHmGYnNHqN894wS6StDuQXQ3jQc92qzjk9hXWcoUNzGk8SM2htxFH3GEX3PVuF",
  "key5": "4SsrZzanXQwPtgPTBkxCGz32YPMpJZSXkHjXDpqZyCMuSzK4qcRWqbGpdwQeHxjprxLzeFRqCPDfe2nrGK3oYKEg",
  "key6": "8Ae34r8EemzXH2x4qoWLAUTuxjVA2gWSHbeAL7fPnguSb1HRauQTbZP6DquenffbH98BD9myCnxqWXbVmrVmZym",
  "key7": "oU5TfijW3wer8VsffySB6xPNttd1utdr1b3xFYaWN6Pp8PfmWT2TDhTAENgTFFvewhzckovpXJwv51GP3T8ZFXG",
  "key8": "3PonxkkfXRmMZcFCvpDYd5aTcn6GPoAZUBbtRDjo69uJWiZMnj2aagWz6o6wyi2wqKVYxxyNeZRBrwtXAGEWQETd",
  "key9": "ySJCEWfF21hpWRfS1Sz6Xkk1EjaGphr3LYe3YXYA5HSmcv88p2DqsJuwE976ZpaeYavD6jBa6mRACViHcfkVJD2",
  "key10": "4oYBnunU31QxQHrcw6yjNaZxZsacppfRmpf2GPpJFodbbpC9RgRra5yhshHstaf9tVqKrWg1y8DhhdTd2jFqtDwT",
  "key11": "4XizHAkp8CznaoEtJvSyBgPUo3gDUKJ9G7rHgnRe6vD7RjXmwGpic8fdDwdZXeFfad3xD9iEUCBMzvQYDAXFnwD4",
  "key12": "4mzZ76KXvGvfVKym8cBbJsujdneKXEc4CA8pqyRdfaNUqjARroc5i5bAz13pKoZckt5vxW2RhAj19U4Zv3reosX5",
  "key13": "2ysmcA4GKvfg1FQ1V5Lp38bjeGLQscXF8rGJzTYez2o6hYJ9GSStVVr77GrtHQjdNNQrQoVJaaF4w1xzM2nptK2f",
  "key14": "5R4mDw2WrH2osxomavcz8v92v7XsB5ax1A7o7efmNLzSztxb1vV1CqjyqzALipwwMBF2Pyk9Y2Y2TUMrbWANB4QS",
  "key15": "2jBuwPMAwcK9FdsVR4Ebzwwi9TmwWj4uA6yqni3SqKBhBkXYyzVeEHQSty2Gj6D3XAG6MioTN8QMfW1FwqKw1THU",
  "key16": "3N6mSAnN52KNRbbDn1Bxy8oaVTntEh4AcjjZGkXp5sEL4UqhKHyFuYkc7MBMGRTaeGgsTtxWyLqyfpitPQvygM2S",
  "key17": "66u7uZcRzaS55JNGAPmctFL7qfxCrUWueS3wt1srYUgVw2LottxHy7hQHb1UnKkuA9VWXCKiXC4wAPgTnrUa2zvf",
  "key18": "2MsYacA5o2hNqwiPvfaqte9ubX6sChc9pcHLPYSsdPQT1iJADxXfvjH5TNfs4F3pwK17f3ByA2VP89n7xxE25oz3",
  "key19": "4e8gD1VbtEWYqFiasRmBY4Gu5EAXUgAGCGPiX4LSxF2JiLKDSx5KpKaSGUsXJXSMd6c7jACgRFkQVMNugrPQhYS8",
  "key20": "3FqpSu3aHxER2fBCgatCWfqYwyrshApuUv1QEp6CUDnpRQEHGjQqtJcBNfu2j3buTUzE47YyyuD7h1LH21B5u1gE",
  "key21": "3qQJLXGHALkjho8xyY9jTZekX3s8jJw2HxFCMzPuSxWUkhjRh9u8ZLbrGjuFkVJbgfgUPudvK7yT8ivhtxNaSv3Z",
  "key22": "4udywCjXkub7CZ76d5KhhbRrZZJdSE6xeXkksV25DbKx92a9vNYyZaa7a7X2ND4fCCSpxjovqXVCYpTNp3J7LVFm",
  "key23": "3sCGYe5MY1ofj47ShGo1FeRErbzNZKpvnczQeHJb9Fh8bEAJuCdEMj6xC32JSyuTcykpbMm1rkM5icWFVwY62CZV",
  "key24": "4AU9bfsnRHfKhAXrWFWpSjLaqiP8ef3VvaXu24VSXFJzh1BHHKssn4JUxA5vUzq4HrsPbSZaZ5hJ99CmGksPea4x",
  "key25": "2E2tcx1HaLjDakKc7f6357M5uJS4hKJeLWo6kmE8ysPA12h3WoCfhdrcKxtj4fWjqRASZMXBuVMdfDuLzKgDx7qv",
  "key26": "2LY454C46u1ZZneyt6CjnJ1eV5kAt7QC3x1nbH2upbq669QhSG4s34PuLhDxA6tkpYhzWNVJ8F8KB8bZQA5obecp",
  "key27": "4rGk83bZu62zTKynChaPkKUiMtjt3eFhKGTAjsW9WznHdBGKEtn5cVmkg51dXxHNeQ4bsqo9ibRyQpg8oSDSGwKe",
  "key28": "2qtnXNLbqDMyaSh1bqi34ExusCahqLrLSoNmcDoUJcNVJvNt2iDSHPyNXM5bk3sTK4uVVCKNSwgNNpybnHsmfVxd",
  "key29": "2hStL4uJwJY8eSgtzN487eEJju44k8dXEU4jWg4u8rHi5bu3UUYGoQ6DNtjtTKB5tJVMf8TyhmXNztfZTYeJNViB",
  "key30": "2KmeqKW9hyL1wza2Q11x4NamreKSv2Xu6DUSXgiipS66LwUxX7YbrhsrEzUzCariwu6wP19sL76hwvbK2M4MPmkv",
  "key31": "5BSryTmN7yxwfJDJfVDBCrKYe5g6xDAeKSRknkorKWwXNnkyoR23kByy9J15XGKEbNP5HZA8W5UiwkeyfDfCi8pk",
  "key32": "52pfZJgu7dEmwHSZzk49Vin1hHLhbAgCtrptFrswvrwBkEEzfWLZcqT8xF7Tnpt68b2yjFeGLAcHWLySB2Ddt74T",
  "key33": "eq5jYDHBgyk2VeWkgin4ie3nxFCeRejyBawRv1jhWQ8XJvcWpUcZixNZy8en5vfmWvvHLDNsbP3xknwSMY6zFeW"
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
