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
    "45stzocAYWKF9cApfg4UNQpYS1JU68ZXTcsCJ84Dnm3iPGDcGcm9M9ycwfrNuaWwc9FnACMtWUFbzAH8mzCdRafh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562ki1ss4mZK5NDHQQp1hY528nVhSeWzGM5kgbtRLDUQ1Jjop7EghW53F1Z5SuxbYchkf6LhsYfUB4qJUz6HgE3P",
  "key1": "5ANDFcCkgFhxxbGpRVPzzFvyagiM3e5LSAF4AKq8ZVLih8PtkN32uD6woKaRA2FkfmhEviC8dTMQxbHXGoMSL4bR",
  "key2": "4yfdYXu6oCV4dwPaGhDi1S9b8mT9F36q6cnb3TSMXgvMn4whZHRv7JiW8yLKJineY421BC95K2fiUTzKR5vcCBnj",
  "key3": "L3ctbTNxjMaw9fyocCLRgSD2WwJU5jadARceshZu4mpHD6PjMBuuyW8sEvNEZaGcmsDPW2x9B3Mkbja9A8uGaXD",
  "key4": "2Lb5DqTwEpqCRQPbfRBvfmENzedNpevPo633ajavs2bkvjJDdVhL2KXsefwd8xdoMdBQBGz1T3ZX5MTmnadoE7Bc",
  "key5": "4ZaqnfNGqe1iJZj59QWLjzMNXauYXmvMKortzx9H5vRd5waampNV5V3nGn9p7PzHSRrkFdy6DcBibvnmEw8xR4Up",
  "key6": "5PSK3q3DBZPJw5WGCBGDNsoufqrQfSbAeNzq7VGcws1ZMFCnTikiSrnAUAMLkazqym6zzKks3ZCcebhQ6Vz5P5PX",
  "key7": "3aedRyskooZzsVBhajFjNemkFzM2FpCdWxi2783ntCcVVBgQomQKU57FtFyVdfZnsBP4BpDprzjNz5Cg6B8cMCfJ",
  "key8": "3uZvRG6Y5pGUk6py5PwRppLGrhUZbw9mwurJt6rA3vjc3ixVvECyhzpsqaioNaTDpW4SRKZg7S43P6p8GcKciXF4",
  "key9": "5bn57CWacZHXTY7i6uiqb7yw7fwmD5S6UdhLZkhp7DdcJyfPfWAipUSQb69SB4NAj7sTeu2MTXd7rgVDbxoNjgcA",
  "key10": "2ENSZsH2ZMuU3FKBfZoYy7uSvTBuXeWgAAbpStYSREW6S3ZS5PUxgy2NTJ2j9UBs8rfNRpRuY5iFCfwPAx41gDZF",
  "key11": "3DATaWHkbyT7uoPXhFArJxJ2H3LNQzyTg82axDtvLJXpmaxXfxEVkkBDUHaaMyNt32gyhZNftXhHksypgfmxABkr",
  "key12": "3Vz8T4jgkF3sWMYhoz8Yd79b6nawT8APjZaPB4gmfk44eWfFoLnmrkjmuyMKeEumXNLFruh5SGvBAqVoTCfsC9Di",
  "key13": "C9c2rhpD3Hw2kgZDG4utkeKTXLhKSKdkieMbdXg9zNva6fT8W6nTYkScbWiPQJJ61qAV7jb1V73wRgAd6UkGa5r",
  "key14": "spFA82TchWKxmUeJrHEFqJSSRPFyB7SX2vRqyaHBzVZKLqPT9Q2ySrfQc4JF5raDsC593tvEScHCSJSyzv96tmc",
  "key15": "qvXvVAMUj3ykE9M6ArYvXxzVdf2HxgD2eRz1pqwRqcvEzjxpMvaYeaBNNsPPMpdGna9VD1PiFKekwUHwjcoBnvg",
  "key16": "4FJBRB7H26joRgJ3w1YjzskVoq7h17yqvz4bn7ftd35AjRMZEbby4BT4Qg1soLQyzVm4doAKV7VGuv7ZDWRig888",
  "key17": "2z7XpgNcXpRCvTWBReNWdmCCBPKpCFSjPSZhY13bGk51oEqQXc9owaFZFvU8TpRmmHXR2y8vE2MCQUqHKeeVmiVX",
  "key18": "2EChbVh4ayynPea9QPAnXoEBEs3sWqeMZ1WVc4YQqLeCvGHmFcKNaUzWVBc7xaFtrQoYhKrsBeyEj1fUPFui7GFD",
  "key19": "4CT9DvZPC6A3kjbLbpb8ejhh6C3cNJBjVdRgEArH6zezFja7fkWmGW8KMrQPdHmtN4t4Ykte88TSP8Z4aCAUarYq",
  "key20": "4TjH5pmaTCAXeZqJm3aTdM4onRJhmQx7Ca7YRBvnSoYmMyK4Feq1m7xgvUmmvxaP7kxvvdS3KdKAjZcaHJnycGu6",
  "key21": "3WqSxKu4dW7EhThYBijnG5SyXDvmTmKU9WzcWEfZA3SLo7DkHEvnaXixVuL9YCRYqhX3GGnxD4vo1UJAccwgb2Qc",
  "key22": "4gvJ71z2TWKvvqVC4kFdUdm21oprBLWtP9csJqjURg6P51Yfe7xB2Xu3qhk2oD1v7wp1jioePcoASE1st2GH6WWz",
  "key23": "5ektwJ8jXKpY1b4HrQeCugeA878sZcFtgdKXM2cG8aoRoL3S5XS4jCVB7HcXHvhQ8RZEREgM7Na1EsjBsWMnn3e",
  "key24": "tsgFvzPNi39ihNYMWtz4nZCq7pHFzm4uhyudFHKAy5vrNMKw2PG289vSfg8ZBpnM4Phf5V78bkjEAbWajNQrDQi",
  "key25": "3mjqYGAAvaBCk2ED9LYAaGjKrBuCUa4Mvc5Kzc7Q7WkeF4hdN7P8tbL84uvSUMDhFtsp5pQnPtjHfR2m1fawFiyH",
  "key26": "3QxzespKqzTmUWXGZbmNAUEg1VuJSztyYm7Mqo7NhJ4B2RKwhSUuWwzhpvUBLNDphdwcUXhduvo6uYzneZboHL81",
  "key27": "4RTshteiU7e7kh4GE2Jcjdj1HmsFUK9f7N2akmnNHNcRsmBppiVuvDo4BYMRkcJgb8ApMLN1HrSVjQP5HLTijYSU",
  "key28": "4sZJpSHnffqLx9M1g7Ny7r35togWjttKf9QqgFebBqMNTDRLYkcjFF7g7TNsxeP8SCyyzJrZjP4o2DdPbc6hAzfb",
  "key29": "3brSnLdFfD94ZW7zzgcASNWjteKEjWaBVyK2zb6cfFrJuKocWCJ3BqKFcAF2YpAYyNkPyVCkwUUavueMKNjU6Eej",
  "key30": "3LqegcDkyeA98m5ZsRxkFGZmb8CFGNN17CGkrEp1qcpxwYyFhC4z98qfdvmT3HopnBrRWWg4DZRsUQyYMy5bbDN2",
  "key31": "2utDSvp2UCgx6r9r7cZSDhKyNpr9VpZsZGACnWdQ2iu8q3cvesV5ET8uageJHxRze98sQi8XeCPvXSgQ4JVo3mjD",
  "key32": "4zGhihRP2gSELQDmn8rz4GPvF41cZLy7zAcZmSZRx6KUER6TATzgzWtZeKEvNXj9YZwwJZUXFm2cJfAey9W8b6Cb",
  "key33": "2JLjtZ7x2bndiu8B7gfRaA4Y8fp8LNTkcxjMgxEM7XqaXPHFsQGs72sYSY8De3r3CqGCHt4w1qJ2Mo9qdPc3Pad4",
  "key34": "3vHNZzD7C93tDK7wDF3iwbuz8P5Y6GFurjwnpwAH5FsJYayBcLjSPbfztxG99WNe75Gpw2mYo3Z1VXPybRmM34Lp",
  "key35": "3LbgF692eQKiMgfTMENfUKtdjDwk8S7EXWGQpzVR5m8kXJasNAEtDcorBJMEkyFU3B8263qjENevmQ1vSvBT5UqR",
  "key36": "2YAMjrGNsxrAwriZPM6fNdF4HuA8ijGoPTXBRiCejJAWEtN6coXLqNDBvfTXznRrmuPeEVpU5H8rvwCEg9sC2LHb",
  "key37": "3yza5CbagkHbB4KaqmrHx2oodgXa2onjvZhpxMpegYZ4ShH1Y3fxzNDcZWgzhBprEQtGcHbRNhLGGbrS1297uKfv"
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
